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
Fronkenmark.preScripts["latex"] = function(code,trusted){
  // We let MathJax run regardless of trusted status. Think about this.
      let id = "renderedlatex" + Fronkensteen.no_dash_uuid();
      let result = MathJax.tex2svg(code,{display:true});
      Fronkenmark.substitutions[id] = result.outerHTML;
      return id;
}

Fronkenmark.preScripts["scheme"] = function(code,trusted){
  // Scheme should only be allowed to run on trusted input.
   if(trusted === true){
    return Fronkenmark.processScheme(code);
   }
   else {
     return "(Scheme scripts are not allowed in untrusted contexts)";
   }
}
Fronkenmark.preScripts["javascript"] = Fronkenmark.preScripts["js"] = function(code,trusted){
  // Javascript should only be allowed to run on trusted input.
     if(trusted === true){
      return Fronkenmark.processJavascript(code);
     }
     else{
       return "(JavaScript is not allowed in untrusted contexts)";
     }
}

Fronkenmark.preScripts["include"] = Fronkenmark.preScripts["js"] = function(code,trusted){
  // include should only be allowed to run on trusted input.
     if(trusted === true){
      return Fronkenmark.processInclude(code);
     }
     else{
       return "(include is not allowed in untrusted contexts)";
     }
}

Fronkenmark.processJavascript = function(code){
  let result;
  let sourcefile = Fronkenmark.sourceFile;
  if(sourcefile === ""){
    sourcefile = "(unavailable)"
  }
  try{
      Fronkensteen.parseJSProcedureDefs(sourcefile, code)
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

Fronkenmark.processScheme = function(code){
  Fronkensteen.CumulativeErrors = [];
  let expr = Fronkensteen.renderREPLTemplate(code);
  let sourcefile = Fronkenmark.sourceFile;
  if(sourcefile === ""){
    sourcefile = "(unavailable)"
  }
  Fronkensteen.parseSchemeProcedureDefs(sourcefile,expr)
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

Fronkenmark.highlighter = function(code){
  if(Fronkenmark.currentLanguage !== ""){
    if(Prism.languages[Fronkenmark.currentLanguage] !== undefined){
      return Prism.highlight(code,Prism.languages[Fronkenmark.currentLanguage],Fronkenmark.currentLanguage);
    }
  }
  return Prism.highlight(code,"scheme", "scheme");
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
