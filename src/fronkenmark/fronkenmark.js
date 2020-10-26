// Make sure we've got a Fronkenmark object, regardless of load order.
if(typeof (Fronkenmark) === "undefined"){
  Fronkenmark = {};
  Fronkenmark.preScripts = {};
  Fronkenmark.customTags = {};
  Fronkenmark.substitutions = {};
}

Fronkenmark.errors = "";
Fronkenmark.currentLanguage = "";
Fronkenmark.languageClass = "";
Fronkenmark.counters = {};
Fronkenmark.noteCounter = 1;
Fronkenmark.notes = [];
Fronkenmark.installSubstitute = function(text){
  let id = "fronkenrender" + Fronkensteen.no_dash_uuid();
  Fronkenmark.substitutions[id] = text;
  return id;
}
Fronkenmark.processInclude = function(text){

}
Fronkenmark.processNote = function(text){
  let id = "fronkenmark_footnote" + Fronkensteen.no_dash_uuid();
  let noteid = Fronkensteen.no_dash_uuid();
  let noteanchor = "note-anchor-" + noteid;
  let notelink = "note-link-" + noteid;
  Fronkenmark.substitutions[id] = "<a class='footnote-link local-link' id='" + noteanchor + "' href='#" + notelink + "'><sup>" + Fronkenmark.noteCounter + "</sup></a>";
  Fronkenmark.notes.push("<p><a class='footnote local-link' id='" + notelink + "' href='#" + noteanchor + "'>" + "&uarr;" + Fronkenmark.noteCounter + "</a>&nbsp;" + Fronkenmark.processContent(text) + "</p>");
  Fronkenmark.noteCounter = Fronkenmark.noteCounter + 1;
  return id;
}

Fronkenmark.getNotes = function(){
  return Fronkenmark.makeSubstitutions(Fronkenmark.notes.join("\n"));
}
Fronkenmark.resetNotes = function(){
  Fronkenmark.notes = [];
  Fronkenmark.noteCounter = 1;
}
Fronkenmark.processCodeBlocks = function(text){
   // Process top-level [code] blocks
   let lines = text.split("\n");
    let outlines = [];
    let currentCode = "";
    let inCode = false;
    for(var i = 0; i < lines.length; i++){
      let line = lines[i];
      let singlematch =  line.match(/^\[code (.*) code\](.*)/);
      if(singlematch !== null){
          outlines.push(Fronkenmark.installSubstitute ("<code>" +  singlematch[1].trim() + "</code>") + singlematch[2]);
          continue;
      }
      let match = line.match(/^\[code(.*)/);
      if(match !== null){
        Fronkenmark.currentLanguage = match[1].trim();
        console.log("Code block: language is " + Fronkenmark.currentLanguage)
        // Handle syntax highlighting.

         if(Fronkenmark.currentLanguage === ""){
           Fronkenmark.currentLanguage = "scheme";
         }
        Fronkenmark.languageClass = " class='language-" + Fronkenmark.currentLanguage + "'"
        currentCode = "";
        i = i + 1;
        while(lines[i].indexOf("code]") < 0){
            currentCode = currentCode + lines[i] + "\n";
            i = i + 1;
            if(i === lines.length){
              Fronkenmark.errors = Fronkenmark.errors + "\nEnd of text in code block. Possibly missing closing [code] tag."
              return "";
            }
        }
        if(currentCode !== ""){
          if(Fronkenmark.highlighter !== undefined){
            currentCode = Fronkenmark.highlighter(currentCode);
          }
          let sub = Fronkenmark.installSubstitute ("<pre>" +  currentCode + "</pre>");
          outlines.push(sub + "\n")
        }
        else{
          outlines.push("");
        }
      }
      else {
        outlines.push(line);
      }
    }
    text = outlines.join("\n")
    return text;
}

Fronkenmark.processInlineLaTeX = function(code){
   return MathJax.tex2svg(code,{display:false}).outerHTML;
}

Fronkenmark.removeComments = function(text){
  text = text.replace(/^;.*\n/gm,"");
  return text;
}

Fronkenmark.fronkenmark = function(text,trusted,appendNotes){
//text = Fronkenmark.processIncludes(text)
  Fronkenmark.useSmartQuotes = true;
  Fronkenmark.errors = ""
  // First separate out code blocks to be rendered verbatim.
  text = Fronkenmark.processCodeBlocks(text);
  // Handle backslash-escaped tags.
  text = text.replace(/\\\[/g, function(match){
  return Fronkenmark.installSubstitute('[');
    return id;
  })
  text = Fronkenmark.processScripts(text,trusted);
  text = Fronkenmark.processImages(text);
  text = Fronkenmark.processAudio(text);
  text = Fronkenmark.processVideo(text);
  text = Fronkenmark.removeComments(text);
  // Remove other escaped chars.
  text = text.replace(/\\(.)/g, function(match,c){
    return Fronkenmark.installSubstitute(c);
  })
  text = text.replace(/\[nosmart\]/g, function(match){
    Fronkenmark.useSmartQuotes = false;
    return ""
  })
  if(Fronkenmark.useSmartQuotes === true){
    text = Fronkensteen.smartQuotes(text)
  }
  let paragraphs = text.split("\n\n");
  for(var i = 0; i < paragraphs.length; i++){
     paragraphs[i] = Fronkenmark.processParagraph(paragraphs[i])
  }
  text = paragraphs.join("\n")
  text = Fronkenmark.makeSubstitutions(text);
  if(appendNotes === true){
    text = text + Fronkenmark.getNotes();
    Fronkenmark.resetNotes()
  }
  return text; //Fronkensteen.smartQuotes(text)

}
Fronkenmark.makeSubstitutions = function(text){
  let keys = Object.keys(Fronkenmark.substitutions);
  for(var i = 0; i < keys.length; i++){
    text = text.replace(keys[i],Fronkenmark.substitutions[keys[i]])
  }
  return text;
}
Fronkenmark.renderTableItems = function(text){
  let template = [];
  let rows = text.split("\n")
  while(rows[0].match(/[^hlrc]/) === null){
    let formatrow = rows.shift();
    template.push(formatrow.split(""))
  }
  text = rows.join("\n");
  rows = Papa.parse(text).data;
  if(rows.length === 0){
    console.log("Fronkenmark.renderTableItems: table had no data");
    return "";
  }
  let result = "<tbody>";
  while(template.length < rows.length){
    template.push([]);
  }
  console.log("template is " + template);
  console.log("template length: " + template.length)
  for(var i = 0; i < rows.length; i++){
    let row = rows[i];
    let templaterow = template[i];
    while(templaterow.length < row.length){
        templaterow.push("r");
    }
    result = result + "<tr>"
    for(var col = 0; col < row.length; col++){
      let formatchar = templaterow[col]
      switch(formatchar){
        case "h": result = result + "<th>" + row[col] + "</th>"
                  break;
        case "r": result = result + "<td style='text-align:right;'>" + row[col] + "</td>"
                  break;
        case "l": result = result + "<td style='text-align:left;'>" + row[col] + "</td>"
                  break;
        case "c": result = result + "<td style='text-align:center;'>" + row[col] + "</td>"
                  break;
        default: alert("Unrecognized format character in table:" + formatchar)
                  return "";
      }
    }
    result = result + "</tr>\n"
  }
  result = result + "</tbody>\n"
  return result;
}

Fronkenmark.renderListItems = function(text,css_class){
  let items = text.split("\n");
  let result = ""
  let classstring;
  if(css_class !== undefined){
    classstring = " class='" + css_class + "'"
  }
  else {
    classstring = ""
  }
  for(var i = 0; i < items.length; i++){
    let item = Fronkenmark.processContent(items[i].trim());
    if(item !== ""){
      result = result + "<li" + classstring + ">" + items[i].trim() + "</li>\n"
    }
  }
  return result;
}
Fronkenmark.formatPoetry = function(text){
  text = text.replace(/ /g,"&nbsp;");
  text = text.replace(/\n/g,"<br />\n");
  return text;
}
Fronkenmark.processParagraph = function(text){
  return Fronkenmark.installSubstitute("<p>") + Fronkenmark.processContent(text) + Fronkenmark.installSubstitute("</p>")
  //return Fronkenmark.processContent(text);
}
Fronkenmark.processScripts  = function(text,trusted){
 text = text.replace(/\[!([a-zA-Z][a-zA-Z0-9]*)[\s]([\s\S]*?)[\s]\1!\]/gm,function(match,tag,code) {
      if(Fronkenmark.preScripts[tag] !== undefined){
          return Fronkenmark.preScripts[tag](code,trusted);
      }
      else {
        return "No handler defined for prescript type: [!" + tag;
      }
  })
  return text;
}
Fronkenmark.processImages  = function(text){
 text = text.replace(/\[img ([\s\S]*?) img\]/gm,function(match,code){
   let imgparts = code.split(" ")
   let imgtarget = imgparts.shift();
   let imgsrc = "!src="
   if(imgtarget.match(/^[a-zA-Z0-9]+\:\/\//) !== null){
     // External img;
     imgsrc = imgsrc + "'" + imgtarget + "'"
   }
   else{
     imgsrc = imgsrc + "'" + Fronkensteen.readInternalFileDataURL("user-files/wiki/" + imgtarget) + "'"
   }
   let imgseml;
   if(imgparts.length > 0){
     imgseml = imgparts.join(' ')
   }
   else imgseml = "";
   imgseml = imgseml + imgsrc;
   return Fronkenmark.installSubstitute("<img " + Fronkensteen.parse_seml(imgseml) + " />")
 })
 return text;
}

Fronkenmark.processAudio  = function(text){
 text = text.replace(/\[audio ([\s\S]*?) audio\]/gm,function(match,code){
   let audioparts = code.split(" ")
   let audiotarget = audioparts.shift();
   let audiosrc = ""
   if(audiotarget.match(/^[a-zA-Z0-9]+\:\/\//) !== null){
     // External audio;
     audiosrc = audiosrc + "'" + audiotarget + "'"
   }
   else{
     audiosrc = audiosrc + "'" + Fronkensteen.readInternalFileDataURL("user-files/wiki/" + audiotarget) + "'"
   }
   let audioseml;
   if(audioparts.length > 0){
     audioseml = audioparts.join(' ')
   }
   else audioseml = "";
   return Fronkenmark.installSubstitute("<audio class='wiki-audio' controls " + Fronkensteen.parse_seml(audioseml) + ">" + "<source src=" + audiosrc + "type='audio/mpeg'></audio>")
 })
 return text;
}

Fronkenmark.processVideo  = function(text){
 text = text.replace(/\[video ([\s\S]*?) video\]/gm,function(match,code){
   let videoparts = code.split(" ")
   let videotarget = videoparts.shift();
   let videosrc = ""
   if(videotarget.match(/^[a-zA-Z0-9]+\:\/\//) !== null){
     // External video;
     videosrc = videosrc + "'" + videotarget + "'"
   }
   else{
     videosrc = videosrc + "'" + Fronkensteen.readInternalFileDataURL("user-files/wiki/" + videotarget) + "'"
   }
   let videoseml;
   if(videoparts.length > 0){
     videoseml = videoparts.join(' ')
   }
   else videoseml = "";
   return Fronkenmark.installSubstitute("<video class='wiki-video' controls " + Fronkensteen.parse_seml(videoseml) + ">" + "<source src=" + videosrc + "type='video/mp4'></video>")
 })
 return text;
}

Fronkenmark.getCounter = function(countername){
  if(Fronkenmark.counters[countername] === undefined){
    Fronkenmark.counters[countername] = 0;
  }
  Fronkenmark.counters[countername] = Fronkenmark.counters[countername] + 1;
  return Fronkenmark.counters[countername];
}

Fronkenmark.processHashTags = function(text){
  text = text.replace(/(^|\s)\#([a-zA-Z0-9]+)/gm,function(match,separator,tag){
      return Fronkenmark.installSubstitute(separator + "<span class='hashlink link' target='#" + tag + "' title='hashtag link to #" + tag + "'>#" + tag + "</span>");
  })
  return text;
}
Fronkenmark.processContent  = function(text){
 text = text.replace(/\[br\]/g, function(match){
   return Fronkenmark.installSubstitute("<br />")
 })
 text = text.replace(/\[hr\]/g, function(match){
   return Fronkenmark.installSubstitute("<hr />")
 })

 text = text.replace(/\[pagebreak\]/g, function(match){
   return Fronkenmark.installSubstitute("</p><p style='page-break-after:always;'></p><p>")
 })
 text = text.replace(/\[counter ([a-zA-Z][0-9a-z-A-Z]*)\]/g, function(match, countername){
   return Fronkenmark.getCounter(countername)
 })
 text = text.replace(/\[romancounter ([a-zA-Z][0-9a-z-A-Z]*)\]/g, function(match, countername){
   return Fronkenmark.romanize(Fronkenmark.getCounter(countername),false);
 })
 text = text.replace(/\[Romancounter ([a-zA-Z][0-9a-z-A-Z]*)\]/g, function(match, countername){
   return Fronkenmark.romanize(Fronkenmark.getCounter(countername),true);
 })
 text = text.replace(/\[resetcounter ([a-zA-Z][0-9a-z-A-Z]*)\]/g, function(match, countername){
   Fronkenmark.resetCounter(countername);
   return ""
 })
 text = text.replace(/\[resetcounters\]/g, function(match, countername){
   Fronkenmark.resetCounters();
   return ""
 })
 text = Fronkenmark.processHashTags(text);
 text = text.replace(/\[([a-zA-Z][a-zA-Z0-9]*)\s([\s\S]*?)\s\1\]/gm,function(match,tag,code) {
    switch(tag){
// Regular HTML elements.
      case "i":
      case "b":
      case "strong":
      case "em":
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
      case "li":
      case "bq":
      case "sup":
      case "sub":
      case "strike":
      case "u":
      return Fronkenmark.installSubstitute("<" + tag + ">") + Fronkenmark.processContent(code) + Fronkenmark.installSubstitute("</" + tag + ">");

// Inline LaTeX
    case "latex" : return Fronkenmark.installSubstitute(Fronkenmark.processInlineLaTeX(code))
// Paragraph styles
      case "p": return Fronkenmark.installSubstitute("</p><p>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</p><p>");
      case "pc": return Fronkenmark.installSubstitute("</p><p style='text-align:center;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</p><p>");
      case "pl": return Fronkenmark.installSubstitute("</p><p style='text-align:left;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</p><p>");
      case "pr": return Fronkenmark.installSubstitute("</p><p style='text-align:right;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</p><p>");
      case "pj": return Fronkenmark.installSubstitute("</p><p style='text-align:justify;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</p><p>");
      case "pid": return Fronkenmark.installSubstitute("</p><p id='" + code + "'></p><p>")
      case "poetry": return Fronkenmark.installSubstitute("</p><p style='margin:0 auto;' class='fronken-poetry'>") +  Fronkenmark.formatPoetry(Fronkenmark.processContent(code)) +  Fronkenmark.installSubstitute("</p><p>");
// Lists
      case "ol": return Fronkenmark.installSubstitute("<ol>") + Fronkenmark.renderListItems( Fronkenmark.processContent(code)) + Fronkenmark.installSubstitute("</ol>")
      case "ul": return Fronkenmark.installSubstitute("<ul>") + Fronkenmark.renderListItems(Fronkenmark.processContent(code)) + Fronkenmark.installSubstitute("</ul>")
      case "roundlist": return Fronkenmark.installSubstitute("<ul class='round-list'>") + Fronkenmark.renderListItems(Fronkenmark.processContent(code), "round-list-item") + Fronkenmark.installSubstitute("</ul>")

//  inline code blocks
    case "code": return Fronkenmark.installSubstitute("<code>" + code + "</code>")
// Tables
     case "table" : return Fronkenmark.installSubstitute("<table>") +
      Fronkenmark.renderTableItems(Fronkenmark.processContent(code)) + Fronkenmark.installSubstitute("</table>");

// Font sizes and variants.
      case "dropcap":
          let capcontent = Fronkenmark.processContent(code);
          if(capcontent.length < 1){
            return "dropcap: nothing to process."
          }
          return Fronkenmark.installSubstitute("<span class='dropcap'>") + capcontent.charAt(0)  +  Fronkenmark.installSubstitute("</span>") + Fronkenmark.installSubstitute("<span style='font-variant:small-caps;'>") +  capcontent.substring(1) +  Fronkenmark.installSubstitute("</span>");
      case "sc": return Fronkenmark.installSubstitute("<span style='font-variant:small-caps;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");

      case "tiny": return Fronkenmark.installSubstitute("<span style='font-size:50%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
      case "scriptsize": return Fronkenmark.installSubstitute("<span style='font-size:66.7%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
      case "footnotesize": return Fronkenmark.installSubstitute("<span style='font-size:82.5%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
      case "smallsize": return Fronkenmark.installSubstitute("<span style='font-size:90%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
      case "normalsize": return Fronkenmark.installSubstitute("<span style='font-size:100%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
      case "large": return Fronkenmark.installSubstitute("<span style='font-size:125%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
      case "Large": return Fronkenmark.installSubstitute("<span style='font-size:140%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
      case "LARGE": return Fronkenmark.installSubstitute("<span style='font-size:167%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
      case "huge": return Fronkenmark.installSubstitute("<span style='font-size:190%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
      case "Huge": return Fronkenmark.installSubstitute("<span style='font-size:200%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
      case "HUGE": return Fronkenmark.installSubstitute("<span style='font-size:230%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
      case "link":
                  let linkparts = code.split("|");
                  if(linkparts.length === 1){
                    linkparts.push(linkparts[0])
                  }
                  let linktarget = linkparts.shift();
                  let linktext = linkparts.join("|");
                  let linkclass;
                  let titletext;
                  if(linktarget.match(/^[a-zA-Z0-9]+\:\/\//) !== null){
                    // External link;
                    linkclass = 'externallink link';
                    titletext = "external link to " + linktarget;
                  }
                  else {
                    linkclass = 'wikilink link';
                    titletext = 'wiki link to ' + linktarget;
                  }
      return Fronkenmark.installSubstitute("<span class='" + linkclass + "' target='" + linktarget + "' title='" + titletext + "'>" + Fronkenmark.processContent(linktext) + "</span>");


// Misc.
      case "scenebreak": return Fronkenmark.installSubstitute("</p>\n<p style='text-align:center;'>" + Fronkenmark.processContent(code) + "</p><p>\n");
      case "anchor" : return Fronkenmark.installSubstitute("<a id='" + code + "'/>");
      case "button" : let button_parts = code.split(" ");
                      let button_id = button_parts.shift();
                      let button_caption = button_parts.join("  ")
                      return Fronkenmark.installSubstitute("<button id='" + button_id + "'>") + Fronkenmark.processContent(button_caption) + "</button>";
      case "input" : let input_parts = code.split(" ");
                      let input_id = input_parts.shift();
                      let input_content = input_parts.join("  ")
                      return Fronkenmark.installSubstitute("<input type='text'  id='" + input_id + "'" + "value='" + input_content + "'/>");
      case "note" : return Fronkenmark.processNote(code);
      case "icon" : return Fronkenmark.installSubstitute(
        "<img class='icon' src='" + Fronkensteen.readInternalFileDataURL("open-iconic/" + code + ".svg") + "' alt='" + code + "'/>");
    //  case "icon" : return Fronkenmark.installSubstitute(
      //  "<span class='icon'><i class='far fa-" + code + "'></i></span>");
      case "dropcap": return Fronkenmark.installSubstitute(Fronkenmark.generateDropCap(code));
      default: if(Fronkenmark.customTags[tag] !== undefined){
          console.log("Invoking custom handler: " + Fronkenmark.customTags[tag])
          let intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
          return intp2.invoke_closure(BiwaScheme.CoreEnv[Fronkenmark.customTags[tag]], [Fronkenmark.processContent(code)])
      }
      else{
        return "Unrecognized Fronkenmark tag: " + tag + " for text block: " + code;
      }
    }

  })
  return text;
}

Fronkenmark.generateDropCap = function(letter){
  return "<svg viewBox='0 0 240 80' xmlns='http://www.w3.org/2000/svg'>\n<style>\n    .dropcap{ font-size:4em;}\n</style>\n\n<text x='0' y='50' class='dropcap'>" + letter + "</text>\n</svg>\n"
}

// Romanize courtesy Steve Levithan, MIT license.
// http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
Fronkenmark.romanize = function (num,upper) {
    upper = typeof upper !== 'undefined' ? upper : true;
    if (+num === 0)
        return false;
    var    digits = String(+num).split(""),
        upperkey = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        lowerkey = ["","c","cc","ccc","cd","d","dc","dcc","dccc","cm",
                   "","x","xx","xxx","xl","l","lx","lxx","lxxx","xc",
                   "","i","ii","iii","iv","v","vi","vii","viii","ix"],
        roman = "",
        i = 3;
        var key;
        if(upper === true){
            key = upperkey;
        }
        else {
            key = lowerkey;
        }
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

BiwaScheme.define_libfunc("fronkenmark",3,3, function(ar,intp){
  BiwaScheme.assert_string(ar[0]);
  try {
    let text= Fronkenmark.fronkenmark(ar[0],ar[1],ar[2]);
    Fronkenmark.resetSubstitutions();
    return text;
  }
  catch(e){
    return e.toString();
  }
});


BiwaScheme.define_libfunc("fronkenmark-get-notes",0,0, function(ar,intp){
  BiwaScheme.assert_string(ar[0]);
  return Fronkenmark.getNotes();
});

BiwaScheme.define_libfunc("fronkenmark-reset-notes",0,0, function(ar,intp){
  BiwaScheme.assert_string(ar[0]);

  Fronkenmark.resetNotes();
});
