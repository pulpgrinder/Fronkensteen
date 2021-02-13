window.Prism = window.Prism || {};
Prism.manual = true;
Fronkenmark.highlighter = function(code){
  if(Fronkenmark.currentLanguage !== ""){
    if(Prism.languages[Fronkenmark.currentLanguage] !== undefined){
      return Prism.highlight(code,Prism.languages[Fronkenmark.currentLanguage],Fronkenmark.currentLanguage);
    }
  }
  return Prism.highlight(code,"scheme", "scheme");
}
