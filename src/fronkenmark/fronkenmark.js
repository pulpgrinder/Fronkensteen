// Make sure we've got a Fronkenmark object, regardless of load order.
if(typeof (Fronkenmark) === "undefined"){
  Fronkenmark = {};
  Fronkenmark.preScripts = {};
  Fronkenmark.customTags = {};
  Fronkenmark.substitutions = {};
}

Fronkenmark.sourceFile = "";
Fronkenmark.errors = "";
Fronkenmark.currentLanguage = "";
Fronkenmark.languageClass = "";
Fronkenmark.counters = {};
Fronkenmark.preserveSpacing = false;
Fronkenmark.noteCounter = 1;
Fronkenmark.notes = [];
Fronkenmark.typographic_symbols = {
  "hr" : "<hr />",
  "br" : "<br />",
  "nbsp" : "&nbsp;",
  "pagebreak" : "</p><p style='page-break-after:always;'></p><p>",
   "peace":"✌",
   "hedera":"❧",
   "manicule":"☞",
   "refmark":"※",
   "pilcrow":"¶",
   "sectionsign":"§",
   "dagger":"†",
   "doubledagger":"‡",
   "smile":"☺",
   "frown":"☹",
   "asterism":"⁂",
   "lozenge":"◊",
   "numero": " №",
   "orda": "ª ",
   "ordo": "º ",
   "degree": "°",
   "c":"©",
   "p":"℗",
   "r":"®",
   "sm":"&#8480;",
   "tm":"&trade; ",
   "spade":"&spades;",
   "heart":"&hearts;",
   "diamond": "&diams;",
   "club" : "&clubs;"
}
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
  Fronkenmark.substitutions[id] = "<a class='footnotelink locallink external' id='" + noteanchor + "' href='#" + notelink + "'><sup>" + Fronkenmark.noteCounter + "</sup></a>";
  Fronkenmark.notes.push("<p><a class='footnote locallink external' id='" + notelink + "' href='#" + noteanchor + "'>" + "&uarr;" + Fronkenmark.noteCounter + "</a>&nbsp;" + Fronkenmark.processContent(text,false) + "</p>");
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
Fronkenmark.processStetBlocks = function(text){
   // Process top-level [code] blocks
   text = text.replace(/\[stet\s([\s\S]*?)\sstet\]/gm,function(match,code){
     return Fronkenmark.installSubstitute("<pre>" + code + "</pre>")
   })
   return text;
 }
Fronkenmark.processCodeBlocks = function(text){
   // Process top-level [code] blocks
   text = text.replace(/\[altcode\s([\s\S]*?)\saltcode\]/gm,function(match,code){
     return Fronkenmark.installSubstitute("<pre class='line-numbers'><code>" + code + "</code></pre>")
   })
   let lines = text.split("\n");
    let outlines = [];
    let currentCode = "";
    let inCode = false;
    for(var i = 0; i < lines.length; i++){
      let line = lines[i];
      let singlematch =  line.match(/^\[code (.*?) code\](.*)/);
      if(singlematch !== null){
          outlines.push(Fronkenmark.installSubstitute ("<code>" +  singlematch[1].trim() + "</code>") + singlematch[2]);
          continue;
      }
      let match = line.match(/^\[code(.*)/);
      if(match !== null){
        Fronkenmark.currentLanguage = match[1].trim();
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
              Fronkenmark.errors = Fronkenmark.errors + "\nEnd of text in code block. Possibly missing closing code] tag."
              return "";
            }
        }
        if(currentCode !== ""){
          if(Fronkenmark.highlighter !== undefined){
            currentCode = Fronkenmark.highlighter(currentCode);
          }
          let sub = Fronkenmark.installSubstitute ("<pre class='line-numbers'><code>" +  currentCode + "</code></pre>");
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
  if(typeof MathJax === "undefined"){
    return "MathJax is not installed."
  }
   return MathJax.tex2svg(code,{display:false}).outerHTML;
}

Fronkenmark.removeComments = function(text){
  text = text.replace(/^;.*\n/gm,"");
  return text;
}

Fronkenmark.processUnicode = function(text){
  text = text.replace(/U\+([0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F]+)/gm,function(match,code){
    return String.fromCodePoint("0x" + code)
  }
);
  return text;
}
Fronkenmark.fronkenmark = function(text,trusted,appendNotes){
//text = Fronkenmark.processIncludes(text)
  Fronkenmark.useSmartQuotes = true;
  Fronkenmark.errors = ""
  // Find code blocks to be rendered verbatim.
    text = Fronkenmark.processCodeBlocks(text);
  // Find stet blocks to rendered verbatim.
  text = Fronkenmark.processStetBlocks(text);

  // Handle backslash-escaped tags.
  text = text.replace(/\\\[/g, function(match){
    return Fronkenmark.installSubstitute('[');
  })
  text = Fronkenmark.processScripts(text,trusted);
  text = Fronkenmark.processImages(text);
  text = Fronkenmark.processAudio(text);
  text = Fronkenmark.processVideo(text);
  text = Fronkenmark.removeComments(text);
  text = Fronkenmark.processUnicode(text);
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
  return text;

}
Fronkenmark.makeSubstitutions = function(text){
  let keys = Object.keys(Fronkenmark.substitutions);
  let oldtext = text;
  while(true){
    for(var i = 0; i < keys.length; i++){
      text = text.replace(keys[i],Fronkenmark.substitutions[keys[i]])
    }
    if(oldtext === text){
      break;
    }
    oldtext = text;
  }
  return text;
}
Fronkenmark.renderTableItems = function(text){
  let template = [];
  let lastformat = []
  let rows = text.split("\n")
  while(rows[0].match(/[^hlrc]/) === null){
    let formatrow = rows.shift();
    lastformat = formatrow.split("")
    template.push(lastformat)
  }
  text = rows.join("\n");
  rows = Papa.parse(text).data;
  if(rows.length === 0){
    console.log("Fronkenmark.renderTableItems: table had no data");
    return "";
  }
  let result = "<tbody>";
  while(template.length < rows.length){
    template.push(lastformat);
  }
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

Fronkenmark.renderMenuItems = function(text,css_class){
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
    let itemtext = items[i].trim()
    if(itemtext !== ""){
      let item = Fronkenmark.processContent("[link " + itemtext + " link]");
      result = result + "<li" + classstring + ">" + item + "</li>\n"
    }
  }
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
    let itemtext = items[i].trim()
    if(itemtext !== ""){
      let item = Fronkenmark.processContent(itemtext);
      result = result + "<li" + classstring + ">" + item + "</li>\n"
    }
  }
  return result;
}
Fronkenmark.processParagraph = function(text){
  return Fronkenmark.installSubstitute("<p>") + Fronkenmark.processContent(text) + Fronkenmark.installSubstitute("</p>")
  //return Fronkenmark.processContent(text);
}
Fronkenmark.processScripts  = function(text,trusted){
 text = text.replace(/\[!([a-zA-Z][a-zA-Z0-9]*)[\s]([\s\S]*?)[\s]\1!\]/gm,function(match,tag,code) {
      if(Fronkenmark.preScripts[tag] !== undefined){
          return Fronkenmark.preScripts[tag](text,code,trusted);
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
     imgsrc = imgsrc + "'" + Fronkensteen.readInternalFileDataURL("user-files/wiki/media/" + imgtarget) + "'"
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
     return Fronkenmark.mediaElement(code, "audio");
 })
 return text;
}
 Fronkenmark.processVideo  = function(text){
  text = text.replace(/\[video ([\s\S]*?) video\]/gm,function(match,code){
      return Fronkenmark.mediaElement(code, "video");
  })
  return text;
}
 Fronkenmark.mediaElement = function(code,type){
     let mediaparts = code.split(" ")
     let mediasrcs = mediaparts.shift().split(",");
     let mediasrc_param = ""
     for(i = 0; i < mediasrcs.length; i++){
       let src = mediasrcs[i].trim();
       if(src.match(/^[a-zA-Z0-9]+\:\/\//) !== null){
       // External src
        mediasrc_param  = mediasrc_param + "<source src='" + src + "' type='" + Stretchr.Filetypes.mimeFor(Fronkensteen.file_extension(src)) + "'>\n"
      }
      else {
        mediasrc_param  = mediasrc_param + "<source src='" + Fronkensteen.readInternalFileDataURL("user-files/wiki/media/" + src) + "' type='" + Stretchr.Filetypes.mimeFor(Fronkensteen.file_extension(src)) + "'>\n"
      }
    }
   let mediaseml;
   if(mediaparts.length > 0){
     mediaseml = mediaparts.join(' ')
   }
   else mediaseml = "";
   return Fronkenmark.installSubstitute("<" + type + " class='wiki-" + type + "' controls " + Fronkensteen.parse_seml(mediaseml) + ">\n" + mediasrc_param + "</" + type + ">")
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
 let singletags = Object.keys(Fronkenmark.typographic_symbols);
 let singlere;
 for(var i = 0; i < singletags.length; i++){
   text = text.replace(RegExp("\\[" + singletags[i]  + "\\]","g"), function(match){
     return Fronkenmark.installSubstitute(Fronkenmark.typographic_symbols[singletags[i]])
   })
 }
 /*
 text = text.replace(/\[br\]/g, function(match){
   return Fronkenmark.installSubstitute("<br />")
 })
 text = text.replace(/\[hr\]/g, function(match){
   return Fronkenmark.installSubstitute("<hr />")
 })
 text = text.replace(/\[nbsp\]/g, function(match){
   return Fronkenmark.installSubstitute("&nbsp;")
 }) */

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
    case "blockquote":
    case "sup":
    case "sub":
    case "strike":
    case "u":
      return Fronkenmark.installSubstitute("<" + tag + ">") + Fronkenmark.processContent(code) + Fronkenmark.installSubstitute("</" + tag + ">");
    case "cursive":
        return Fronkenmark.installSubstitute("<span class='cursive'>") + Fronkenmark.processContent(code) + Fronkenmark.installSubstitute("</span>");
    case "fantasy":
        return Fronkenmark.installSubstitute("<span class='fantasy'>") + Fronkenmark.processContent(code) + Fronkenmark.installSubstitute("</span>");
    case "bq":
      return Fronkenmark.installSubstitute("<blockquote>") + Fronkenmark.processContent(code) + Fronkenmark.installSubstitute("</blockquote>");
    case "menu":
      return Fronkenmark.installSubstitute("<ul class='menu-list'>") + Fronkenmark.renderMenuItems(Fronkenmark.processContent(code), "menu-list-item") + Fronkenmark.installSubstitute("</ul>")

// Inline LaTeX
    case "latex" :
      return Fronkenmark.installSubstitute(Fronkenmark.processInlineLaTeX(code))
// Paragraph styles
    case "p":
      return Fronkenmark.installSubstitute("</p><p>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</p><p>");
    case "pc":
      return Fronkenmark.installSubstitute("</p><p style='text-align:center;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</p><p>");
    case "pl":
      return Fronkenmark.installSubstitute("</p><p style='text-align:left;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</p><p>");
    case "pr":
      return Fronkenmark.installSubstitute("</p><p style='text-align:right;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</p><p>");
    case "pj":
      return Fronkenmark.installSubstitute("</p><p style='text-align:justify;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</p><p>");
    case "ph":
      return Fronkenmark.installSubstitute("</p><p style='padding-left:3em;text-indent:-3em;display:block;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</p><p>");
      case "pcursive":
        return Fronkenmark.installSubstitute("</p><p class='cursive'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</p><p>")
    case "pfantasy":
      return Fronkenmark.installSubstitute("</p><p class='fantasy'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</p><p>")
    case "pid":
      let codetokens = code.split(" ");
      let id = codetokens[0];
      codetokens.shift();
      let codecontent = codetokens.join(" ");
      return Fronkenmark.installSubstitute("</p><p id='" + id + "'>" + Fronkenmark.processContent(codecontent) + "</p><p>")
    case "poetry":
      Fronkenmark.preserveSpacing = true;
      let renderedPoem = Fronkenmark.makeSubstitutions(Fronkenmark.processContent(code.replace(/\n/gm,"[br]\n")));
     Fronkenmark.preserveSpacing = false;
      return Fronkenmark.installSubstitute("</p><p><pre class='fronkenpoetry'>" +  renderedPoem  +  "</pre></p><p>");
// Lists
    case "ol":
      return Fronkenmark.installSubstitute("<ol>") + Fronkenmark.renderListItems( Fronkenmark.processContent(code)) + Fronkenmark.installSubstitute("</ol>")
    case "ul":
      return Fronkenmark.installSubstitute("<ul>") + Fronkenmark.renderListItems(Fronkenmark.processContent(code)) + Fronkenmark.installSubstitute("</ul>")
    case "roundlist":
      return Fronkenmark.installSubstitute("<ul class='round-list'>") + Fronkenmark.renderListItems(Fronkenmark.processContent(code), "round-list-item") + Fronkenmark.installSubstitute("</ul>")
//  inline code blocks
    case "code":
      return Fronkenmark.installSubstitute("<code>" + code + "</code>")
// Tables
     case "table":
      return Fronkenmark.installSubstitute("<table>") +
      Fronkenmark.renderTableItems(Fronkenmark.processContent(code)) + Fronkenmark.installSubstitute("</table>");

// Font sizes and variants.
    case "dropcap":
        let capcontent = Fronkenmark.processContent(code);
        if(capcontent.length < 1){
          return "dropcap: nothing to process."
        }
        return Fronkenmark.installSubstitute("<span class='dropcap'>") + capcontent.charAt(0)  +  Fronkenmark.installSubstitute("</span>") + Fronkenmark.installSubstitute("<span style='font-variant:small-caps;'>") +  capcontent.substring(1) +  Fronkenmark.installSubstitute("</span>");
    case "sc":
      return Fronkenmark.installSubstitute("<span style='font-variant:small-caps;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
    case "tiny":
      return Fronkenmark.installSubstitute("<span style='font-size:50%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
    case "scriptsize":
      return Fronkenmark.installSubstitute("<span style='font-size:66.7%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
    case "footnotesize":
      return Fronkenmark.installSubstitute("<span style='font-size:82.5%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
    case "small":
      return Fronkenmark.installSubstitute("<span style='font-size:90%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
    case "normalsize":
      return Fronkenmark.installSubstitute("<span style='font-size:100%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
    case "large":
      return Fronkenmark.installSubstitute("<span style='font-size:125%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
    case "Large":
      return Fronkenmark.installSubstitute("<span style='font-size:140%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
    case "LARGE":
      return Fronkenmark.installSubstitute("<span style='font-size:167%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
    case "huge":
      return Fronkenmark.installSubstitute("<span style='font-size:190%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
    case "Huge":
      return Fronkenmark.installSubstitute("<span style='font-size:200%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
    case "HUGE":
      return Fronkenmark.installSubstitute("<span style='font-size:230%;'>") +  Fronkenmark.processContent(code) +  Fronkenmark.installSubstitute("</span>");
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

// Menulink
case "menulink":
  let menuparts = code.split("|");
  if(menuparts.length === 1){
    menuparts.push(menuparts[0])
  }
  let menutarget = menuparts.shift();
  let menutext = menuparts.join("|");
  let menuclass;
  let menutitletext;
  menuclass = 'menulink link';
  menutitletext = 'menu link to ' + menutarget;
  return Fronkenmark.installSubstitute("<span class='" + menuclass + "' target='" + menutarget + "' title='" + menutitletext + "'>" + Fronkenmark.processContent(menutext) + "</span>");

// doclink
case "doclink":
  let docparts = code.split("|");
  if(docparts.length === 1){
    docparts.push(docparts[0])
  }
  let doctarget = docparts.shift();
  let doctext = docparts.join("|");
  let docclass;
  let doctitletext;
  docclass = 'doclink link';
  doctitletext = 'doc link to ' + doctarget;
  return Fronkenmark.installSubstitute("<span class='" + docclass + "' target='" + doctarget + "' title='" + doctitletext + "'>" + Fronkenmark.processContent(doctext) + "</span>");
 case "anchorlink":
    // Anchor on page;
    let anchorlinkparts = code.split("|");
    if(anchorlinkparts.length === 1){
      anchorlinkparts.push(anchorlinkparts[0])
    }
    let anchorlinktarget = anchorlinkparts.shift();
    let anchorlinktext = anchorlinkparts.join("|");
    let anchorlinkclass = 'anchorlink locallink link';
    let anchortitletext = "link to anchor " + anchorlinktarget;
    return Fronkenmark.installSubstitute("<a class='" + anchorlinkclass +  "' href='#" + anchorlinktarget + "' title='" + anchortitletext + "'>" + anchorlinktext + "</a>");
// Misc.
    case "scenebreak":
      return Fronkenmark.installSubstitute("</p>\n<p style='text-align:center;'>") + Fronkenmark.processContent(code) + Fronkenmark.installSubstitute("</p><p>\n");
    case "anchor" :
      let anchorparts = code.split("|");
      if(anchorparts.length === 1){
        anchorparts.push("")
      }
      let anchor_id = anchorparts.shift();
      let anchortext = anchorparts.join("|");
      return Fronkenmark.installSubstitute("<a class='locallink' id='" + anchor_id + "'>" + anchortext + "</a>");
    case "button" :
      let button_parts = code.split(" ");
      let button_id = button_parts.shift();
      let button_caption = button_parts.join("  ")
      return Fronkenmark.installSubstitute("<div class='pure-button pbutton wiki-theme' id='" + button_id + "'>") + Fronkenmark.processContent(button_caption) + "</div>";
    case "input" :
      let input_parts = code.split(" ");
      let input_id = input_parts.shift();
      let input_content = input_parts.join("  ")
      return Fronkenmark.installSubstitute("<input type='text'  id='" + input_id + "'" + "value='" + input_content + "'/>");
    case "note" :
      return Fronkenmark.processNote(code);
    case "icon" :
      code = code.trim();
      if(code.indexOf("“") === 0){
        return Fronkenmark.installSubstitute(
"<span class='icon'>" + code.replace(/“/g,"").replace(/”/g,"") + "</span>")
      }
      else {
        return Fronkenmark.installSubstitute(
"<span class='icon'><i class='" + Fronkensteen.fa_icon_lookup(code).replace(/\./g," ") + "' " + " title='" + code + "'></i></span>");
      }
    case "dropcap":
      return Fronkenmark.installSubstitute(Fronkenmark.generateDropCap(code));
    default:
      if(Fronkenmark.customTags[tag] !== undefined){
        let intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
        return intp2.invoke_closure(BiwaScheme.CoreEnv[Fronkenmark.customTags[tag]], [Fronkenmark.processContent(code)])
      }
      else{
        return "Unrecognized Fronkenmark tag: " + tag + " for text block: " + code;
      }
  }

  })
  if(Fronkenmark.preserveSpacing === true){
      text = text.replace(/\s/g,"&nbsp;");
  }
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

BiwaScheme.define_libfunc("fronkenmark-set-source-file",1,1, function(ar,intp){
  BiwaScheme.assert_string(ar[0]);
  Fronkenmark.sourceFile = ar[0];
})

BiwaScheme.define_libfunc("fronkenmark",3,3, function(ar,intp){
  BiwaScheme.assert_string(ar[0]);
  try {
    let text= Fronkenmark.fronkenmark(ar[0],ar[1],ar[2]);
    Fronkenmark.resetSubstitutions();
    Fronkenmark.sourceFile = "";
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
