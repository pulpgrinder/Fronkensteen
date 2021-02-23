// Make sure we've got a Fronkenmark object, regardless of load order.

Fronkenmark.resetSubstitutions = function(){
  Fronkenmark.substitutions = {};
}

Fronkenmark.resetCounter = function(countername){
  Fronkenmark.counters[countername] = 0;
}
Fronkenmark.resetCounters = function(){
  Fronkenmark.counters = {}
}

Fronkenmark.preScripts["schememenu"] = function(text,code,trusted) {
   if(trusted !== true){
     return "(Scheme scripts and menus are not allowed in untrusted contexts)";
  }
    let items = code.split("\n");
    let result = ""
    let classstring = " class='menu-list-item schemelink' ";
    for(var i = 0; i < items.length; i++){
      let itemtext = items[i].trim()
      if(itemtext !== ""){
        item_items = itemtext.split("|");
        if(item_items.length < 2){
          item_items[1] = '(alert "Missing Scheme procedure in menu")'
        }
        let procstring = "schemeproc='" + base32.encode(item_items[1].trim()) + "' "
        let item = Fronkenmark.processContent(item_items[0].trim());
        result = result + "<li" + classstring +  procstring + ">" + item + "</li>\n"
      }
    }
     return Fronkenmark.installSubstitute("<ul class='menu-list'>" + result + "</ul>\n");

  }

  Fronkenmark.preScripts["schemelink"] = function(text,code,trusted) {
     if(trusted !== true){
       return "(Scheme scripts and menus are not allowed in untrusted contexts)";
    }
      let classstring = " class='link schemelink' ";
      let processed_link_text = "Error in schemelink";
      let procstring = 'schemeproc = \'(alert "schemelink: missing Scheme procedure")\''
      if(code !== ""){
          let code_items = code.split("|");
          if(code_items.length < 2){
            code_items[1] = '(alert "Missing Scheme procedure in schemelink")'
          }
          procstring = "schemeproc='" + base32.encode(code_items[1].trim()) + "'"
          processed_link_text = Fronkenmark.processContent(code_items[0].trim());
        }
        return Fronkenmark.installSubstitute("<span" + classstring +  procstring + ">" + processed_link_text + "</span>")
    }


Fronkenmark.preScripts["scheme"] = function(text,code,trusted){
  // Scheme should only be allowed to run on trusted input.
   if(trusted === true){
    return Fronkenmark.processScheme(text,code);
   }
   else {
     return "(Scheme scripts are not allowed in untrusted contexts)";
   }
}
Fronkenmark.preScripts["javascript"] = Fronkenmark.preScripts["js"] = function(text,code,trusted){
  // Javascript should only be allowed to run on trusted input.
     if(trusted === true){
      return Fronkenmark.processJavascript(text,code);
     }
     else{
       return "(JavaScript is not allowed in untrusted contexts)";
     }
}

Fronkenmark.preScripts["include"] = Fronkenmark.preScripts["js"] = function(text,code,trusted){
  // include should only be allowed to run on trusted input.
     if(trusted === true){
      return Fronkenmark.processInclude(code);
     }
     else{
       return "(include is not allowed in untrusted contexts)";
     }
}

Fronkenmark.processJavascript = function(text,code){
  let result;
  let sourcefile = Fronkenmark.sourceFile;
  if(sourcefile === ""){
    sourcefile = "(unavailable)"
  }
  try{
      Fronkensteen.parseJSProcedureDefs(sourcefile, text)
      result = eval.call(window, code)
    }
    catch(err){
      let msg = err.toString()
      result = "**** Embedded JavaScript error:  " + msg + " in  \"" + code + "\" ****";
    }
  if(result === undefined){
    result = "";
  }
  return Fronkenmark.installSubstitute(result);
}

Fronkenmark.processScheme = function(text,code){
  Fronkensteen.CumulativeErrors = [];
  let expr = Fronkensteen.renderREPLTemplate(code);
  let sourcefile = Fronkenmark.sourceFile;
  console.log("Processing Scheme code segment for " + sourcefile)
  if(sourcefile === ""){
    sourcefile = "(unavailable)"
  }
  Fronkensteen.parseSchemeProcedureDefs(sourcefile,text)
  var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
  let result = intp2.evaluate(expr);
  if(Fronkensteen.CumulativeErrors.length !== 0){
    let msg = Fronkensteen.CumulativeErrors.join("\n");
    console.error(msg);
    Fronkensteen.CumulativeErrors = [];
    result = "**** Embedded Scheme error " + msg + " in  \"" + expr + "\" ****";
  }
  if(result === BiwaScheme.undef){
    result = ""
  }
  return Fronkenmark.installSubstitute(result);
}

Fronkenmark.processInclude = function(code){
  pagename = code.trim();
  let filename = "user-files/wiki/" +  encodeURI(pagename) +  ".fmk";
  if(Fronkensteen.fileExists(filename)){
    return Fronkenmark.fronkenmark(Fronkensteen.readInternalTextFile(filename),true);
  }
  else{
    return "Included file " + pagename + " does not exist."
  }
}





// Hat tip: https://gist.github.com/rodrigoborgesdeoliveira/987683cfbfcc8d800192da1e73adc486

Fronkenmark.parseYouTubeURL = function(url){
  let match = url.match(/(\/|%3D|v=)([0-9A-z-_]{11})([%#?&]|$)/);
  if(match === null){
    console.log("Unrecognized YouTube URL: " + url);
    return ""
  }
  return match[2];
}

Fronkenmark.customTags["youtube"] = "youtube";

BiwaScheme.define_libfunc("youtube",1,1,function(ar,intp){
  BiwaScheme.assert_string(ar[0]);
  let parts = ar[0].split(" ");
  if(parts.length == 1){
   parts.push("auto");
   parts.push("auto");
  }

  return "<iframe width='" + parts[1] + "' height='" + parts[2] + "' src='https://www.youtube.com/embed/" + Fronkenmark.parseYouTubeURL(parts[0]) + "' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"

})
