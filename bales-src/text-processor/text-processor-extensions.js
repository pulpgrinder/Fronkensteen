// text-processor-extensions.js.
// Text processing extensions for Fronkensteen.
// Copyright 2018-2020 by Anthony W. Hursh
// MIT License.


BiwaScheme.define_libfunc("process-embedded-code",2,2, function(ar,intp){
    BiwaScheme.assert_string(ar[0]);
    let plainHTMLNotes = ar[1]; // Controls whether footnotes use plain HTML or Fronkensteen's special JS handler.
    // Replaces any hyperlinks in the specified HTML element with a pseudo-link
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
        $(this).attr("class", "fronkensteen-external-link");
        this.href = 'javascript:void(0)';
      }
    });
  $(ar[0] + " p").each(function(){
    Fronkensteen.CumulativeErrors = [];
    let text = this.innerHTML;
    text = text.replace(/\@\@([\s\S]*?)\@\@/gm,function(match,cap) {
      // This is ugly hackery. Try to handle it better. Ideally processing
      // embedded Scheme would happen further upstream.
      cap = cap.replace(/“/g,'"');
      cap = cap.replace(/”/g,'"');
      cap = cap.replace(/‘/g,"'");
      cap = cap.replace(/’/g,"'");
      cap = cap.replace(/\&lt\;/g,'<');
      cap = cap.replace(/\&gt\;/g,'>');
      cap = cap.replace(/\&amp\;/g,'&');
      let expr = Fronkensteen.renderREPLTemplate(cap);
      BiwaScheme.assert_string(ar[0]);
      var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
      let result = intp2.evaluate(expr);
      if(Fronkensteen.CumulativeErrors.length !== 0){
        console.error("Error evaluating " + expr + " in embedded Scheme code." + Fronkensteen.CumulativeErrors.join("\n"));
        Fronkensteen.CumulativeErrors = [];
      }
      return result;
    })
    this.innerHTML = text;
  })


  let notes = [];
  let notecounter = 0;
  $(ar[0] + " p").each(function(){
    let text = this.innerHTML;
    // Process hashtags.
    text = text.replace(/\#([a-zA-Z0-9]+)/gm,function(match, capture) {
         let result = "<a href='javascript:void(0)' class='fronkensteen-hashtag has-text-link'>#" + capture + "</a>";
         return result;
       });
      // Process footnotes.
     text = text.replace(/\s*\{\{\{(.*?)\}\}\}/gm,function(match,capture) {
         notecounter = notecounter + 1;
         let noteid = uuid();
         let noteanchor = "note-anchor-" + noteid;
         let notelink = "note-link-" + noteid;
         if(plainHTMLNotes){
          notes.push("<p><a class='fronkensteen-footnote' id='" + notelink + "' href='#" + noteanchor + "'>" + "&uarr;" + notecounter + "</a>&nbsp;" + capture + "</p>");
          return "<a class='fronkensteen-footnote-link' id='" + noteanchor + "' href='#" + notelink + "'><sup>" + notecounter + "</sup></a>" ;
        }
        else {
          notes.push("<p><span class='fronkensteen-footnote' id='" + notelink + "' footnote-link='#" + noteanchor + "'>" + "&uarr;" + notecounter + "</span>&nbsp;" + capture + "</p>")
          return "<span class='fronkensteen-footnote fronkensteen-footnote-link' id='" + noteanchor + "' footnote-link='#" + notelink + "'><sup>" + notecounter + "</sup></span>"
        }
         });

      // Process wikilinks.
      text = text.replace(/\[(.*?)\]/g,function(match,capture) {
             let result =
             "<a href='javascript:void(0)' class='fronkensteen-wikilink has-text-link'>" + capture + "</a>";
             return result;
           }
        );
    this.innerHTML = text;
  });

  $(ar[0]).html($(ar[0]).html() + notes.join("\n"))
  $(ar[0] + " .fronkensteen-wikilink").click(function(evt){
      var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
      intp2.invoke_closure(BiwaScheme.TopEnv["wikilink_click"], [$(evt.currentTarget),$(evt.currentTarget).html()])
  });
  $(ar[0] + " .fronkensteen-hashtag").click(function(evt){
      var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
      intp2.invoke_closure(BiwaScheme.TopEnv["hashtag_click"], [$(evt.currentTarget),$(evt.currentTarget).html()])
  });
  $(ar[0] + " .fronkensteen-external-link").click(function(evt){
      var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
      intp2.invoke_closure(BiwaScheme.TopEnv["external-link_click"], [$(evt.currentTarget),$(evt.currentTarget).attr("external-link")])
  });
  $(ar[0] + " .fronkensteen-footnote").click(function(evt){
      var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
      intp2.invoke_closure(BiwaScheme.TopEnv["footnote-link_click"], [$(evt.currentTarget),$(evt.currentTarget).attr("footnote-link"),$(evt.currentTarget).html()])
  });

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
      notes.push("<p><a class='footnote' id='" + notelink + "' href='#" + noteanchor + "'>" + "&uarr;" + notecounter + "</a>&nbsp;" + capture + "</p>");
     return "<a class='footnote-link' id='" + noteanchor + "' href='#" + notelink + "'><sup>" + notecounter + "</sup></a>" });
return processed + notes.join("\n");

});


BiwaScheme.define_libfunc("process-embedded-scheme",1,1, function(ar,intp){
  // Replace embedded @@ (code) @@ sequences with the result of evaluating
  // (code) in the Scheme interpreter.
    BiwaScheme.assert_string(ar[0]);
    let intp2 = new BiwaScheme.Interpreter(intp);
    let processed = ar[0].replace(/\@\@([\s\S]*?)\@\@/gm,function(match,cap) {
            var expr = Fronkensteen.renderREPLTemplate(cap);
          //  let scheme_result = intp2.evaluate(expr);
            return intp2.evaluate(expr);
          })
    return processed;
   })


BiwaScheme.define_libfunc("process-hashtags",1,1, function(ar,intp){
 // Replace hashtags in the text with a pseudo-hyperlink with "hashtag" CSS class.
   BiwaScheme.assert_string(ar[0]);
   let processed = ar[0].replace(/\#([a-zA-Z0-9]+)/gm,function(match,capture) {
            let result =  "<a href='javascript:void(0)' class='hashtag'>#" + capture + "</a>";
            return result;
   });
   return processed;
 });

BiwaScheme.define_libfunc("process-wikilinks",1,1, function(ar,intp){
  // Replace text in [ ] brackets with a pseudo-hyperlink with "wikilink" CSS class.
  BiwaScheme.assert_string(ar[0]);
  let processed = ar[0].replace(/\[(.*?)\]/g,function(match,capture) {
       let result =
       "<a href='javascript:void(0)' class='wikilink'>" + capture + "</a>";
       return result;
     }
  );
  return processed;
});



BiwaScheme.define_libfunc("externalize-hyperlinks" ,1, 1, function(ar){
  // Replaces any hyperlinks in the specified HTML element with a pseudo-link
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
      this.href = 'javascript:void(0)';
      $(this).attr("class", "external-link");
    }
   });
  return true;
});
