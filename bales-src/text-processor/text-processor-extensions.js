// text-processor-extensions.js.
// Text processing extensions for Fronkensteen.
// Copyright 2018-2020 by Anthony W. Hursh
// MIT License.


BiwaScheme.define_libfunc("process-embedded-code",1,1, function(ar,intp){
    BiwaScheme.assert_string(ar[0]);
  $(ar[0] + " p").each(function(){
    let text = this.innerHTML;
    text = text.replace(/\@\@([\s\S]*?)\@\@/gm,function(match,cap) {
      console.log("Capture is " + cap)
      var expr = Fronkensteen.renderREPLTemplate(cap);
      expr = expr.replace(/“/g,'"');
      expr = expr.replace(/”/g,'"');
      expr = expr.replace(/‘/g,"'");
      expr = expr.replace(/’/g,"'");
      expr = expr.replace(/\&lt\;/g,'<');
      expr = expr.replace(/\&gt\;/g,'>');
      expr = expr.replace(/\&amp\;/g,'&');
      BiwaScheme.assert_string(ar[0]);
      console.log("expr is " + expr);
      return scheme_interpreter.evaluate(expr);
    })
    this.innerHTML = text;
  })
  let notes = [];
  let notecounter = 0;
  $(ar[0] + " p").each(function(){
    let text = this.innerHTML;
    text = text.replace(/\#([a-zA-Z0-9]+)/gm,function(match, capture) {
         let result = "<a href='#' class='hashtag has-text-link'>#" + capture + "</a>";
         return result;
       });

     text = text.replace(/\s*\{\{\{(.*?)\}\}\}/gm,function(match,capture) {
         notecounter = notecounter + 1;
         let noteid = uuid();
         let noteanchor = "note-anchor-" + noteid;
         let notelink = "note-link-" + noteid;
         notes.push("<p><a id='" + notelink + "' href='#" + noteanchor + "'>" + "&uarr;" + notecounter + "</a>&nbsp;" + capture + "</p>");
        return "<a id='" + noteanchor + "' href='#" + notelink + "'><sup>" + notecounter + "</sup></a>" });

      text = text.replace(/\[(.*?)\]/g,function(match,capture) {
             let result =
             "<a href='#' class='wikilink has-text-link'>" + capture + "</a>";
             return result;
           }
        );
    this.innerHTML = text;
  });
  $(ar[0]).html($(ar[0]).html() + notes.join("\n"))
});
BiwaScheme.define_libfunc("remove-comments",1,1, function(ar){
  // Remove lines beginning with ; from the text. This lets you have Scheme-style comments in regular text which will be stripped before display.
  // Note that unlike Scheme comments, these comments must take up an entire
  // line, and the ; must be the first character in the line.
  BiwaScheme.assert_string(ar[0]);
  let processed = ar[0].replace(/^;.*\n/gm, "");
  return processed;
})



BiwaScheme.define_libfunc("process-poetry",1,1, function(ar){
  // This treats text as poetry, replacing any leading spaces with &nbsp;, and
  // replacing any lines that end with // (newline) with (space)(space)(newline)
  // (i.e., the Markdown hard line break.)
  BiwaScheme.assert_string(ar[0]);
  let processed = ar[0].replace(/^\| (.*)\n/gm,function(match,capture) { return capture.replace(/ /g, "&nbsp;") + "  \n" });
  // Hard line breaks
  processed = processed.replace(/\s*\/\/\n/gm,"  \n");
  return processed;
});


BiwaScheme.define_libfunc("process-alignment",1,1, function(ar){
  // Handle our custom Markdown extensions for things like
  // centering, notes, etc.
  BiwaScheme.assert_string(ar[0]);
  // Justified
  let processed = ar[0].replace(/\<p\>\&lt\;\-\&gt\;/g, "<p style='text-align:justify'>");
  // Centered
  processed = processed.replace(/\<p\>\-\&gt\;\&lt\;\-/g, "<p style='text-align:center'>");
  // Right-aligned
  processed = processed.replace(/\<p\>\-\&gt\;/g, "<p style='text-align:right'>");
  // Left-aligned.
  processed = processed.replace(/\<p\>\&lt\;\-/g, "<p style='text-align:left'>");
  return processed;
});

BiwaScheme.define_libfunc("process-notes",1,1, function(ar){
  // Process embedded footnotes using the {{{note}}} convention.
  BiwaScheme.assert_string(ar[0]);
  let notecounter = 0;
  let notes = [];
  processed = ar[0].replace(/\{\{\{(.*?)\}\}\}/gm,function(match,capture) {
      notecounter = notecounter + 1;
      let noteid = uuid();
      let noteanchor = "note-anchor-" + noteid;
      let notelink = "note-link-" + noteid;
      notes.push("<p><a id='" + notelink + "' href='#" + noteanchor + "'>" + "&uarr;" + notecounter + "</a>&nbsp;" + capture + "</p>");
     return "<a id='" + noteanchor + "' href='#" + notelink + "'><sup>" + notecounter + "</sup></a>" });
return processed + notes.join("\n");

});


BiwaScheme.define_libfunc("process-embedded-scheme",1,1, function(ar,intp){
  // Replace embedded @@ (code) @@ sequences with the result of evaluating
  // (code) in the Scheme interpreter.
    BiwaScheme.assert_string(ar[0]);
    let intp2 = new BiwaScheme.Interpreter(intp);
    let processed = ar[0].replace(/\@\@([\s\S]*?)\@\@/gm,function(match,cap) {
            console.log("Capture is " + cap)
            var expr = Fronkensteen.renderREPLTemplate(cap);
          //  let scheme_result = intp2.evaluate(expr);
            return intp2.evaluate(expr);
          })
    return processed;
   })


BiwaScheme.define_libfunc("process-hashtags",1,1, function(ar,intp){
 // Replace hashtags in the text with a # hyperlink with "hashtag" CSS class.
   BiwaScheme.assert_string(ar[0]);
   let processed = ar[0].replace(/\#([a-zA-Z0-9]+)/gm,function(match,capture) {
            let result =  "<a href='#' class='hashtag'>#" + capture + "</a>";
            return result;
   });
   return processed;
 });

BiwaScheme.define_libfunc("process-wikilinks",1,1, function(ar,intp){
  // Replace text in [ ] brackets with a # hyperlink with "wikilink" CSS class.
  BiwaScheme.assert_string(ar[0]);
  let processed = ar[0].replace(/\[(.*?)\]/g,function(match,capture) {
       let result =
       "<a href='#' class='wikilink'>" + capture + "</a>";
       return result;
     }
  );
  return processed;
});



BiwaScheme.define_libfunc("externalize-hyperlinks" ,1, 1, function(ar){
  // Replaces any hyperlinks in the specified HTML element with a # link
  // of a special CSS class. The original link is saved in an "external-link"
  // attribute. This prevents navigating away from the Fronkensteen page when
  // a link is clicked (but requires that you write your own custom handler
 //   for external links).
  let els = $(ar[0] + " a[href");
  if(els === undefined){
    return false;
  }
  els.each(function()
   {
     if(this.href.indexOf(Fronkensteen.docroot) !== 0){
      $(this).attr("external-link", this.href);
      $(this).attr("class", "external-link");
      $(this).html($(this).html() + "<span class='icon'><i class='fas fa-external-link-alt'></i></span>")
      this.href = "#";
    }
   });
  return true;
});
