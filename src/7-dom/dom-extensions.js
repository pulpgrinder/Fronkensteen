// dom-extensions.js.
// jQuery-related extension procedures for BiwaScheme
// Copyright 2018-2019 by Anthony W. Hursh
// MIT License.

// Set the window title.

Fronkensteen.setDocumentTitle = function(title){
  document.title = title;
}




// Expects a jQuery element as its arg
BiwaScheme.define_libfunc("scroll-into-view",1,1,function(ar){
  ar[0].scrollIntoView()
})

BiwaScheme.define_libfunc("parse-youtube-url",1,1,function(ar){
  BiwaScheme.assert_string(ar[0]);
  return Fronkensteen.parseYouTubeURL(ar[0]);
})

// Returns vector of ids for all nodes that match the
// supplied selector. Ignores nodes that don't have an id.
BiwaScheme.define_libfunc("get-id-vector",2,2,function(ar){
  BiwaScheme.assert_string(ar[0]);
  let ids = []
  $(ar[0]).each(function(){
    if(this.id !== undefined){
      ids.push(this.id)
    }
  });
  if(ar[1] === true){
    return ids.sort();
  }
  else {
    return ids;
  }
});


BiwaScheme.define_libfunc("load-iframe", 2, 2, function(ar){
  // jQuery: loads the HTML specified in ar[1] into the iframe specified by ar[0].
    BiwaScheme.assert_string(ar[0]);
    BiwaScheme.assert_string(ar[1]);
    iframe = $(ar[0])[0];
    iframe.contentWindow.document.open()
    iframe.contentWindow.document.write(ar[1]);
    iframe.contentWindow.document.close();

})
BiwaScheme.define_libfunc("attr", 2,2, function(ar){
  // jQuery: gets the attribute named in ar[1] from the DOM selector in ar[0]
    BiwaScheme.assert_string(ar[0]);
    BiwaScheme.assert_string(ar[1]);
    return $(ar[0]).attr(ar[1]);
});

BiwaScheme.define_libfunc("attr!", 3,3, function(ar){
    // jQuery: set the attribute named in ar[1] of the DOM selector in ar[0]
    // to ar[2]
    BiwaScheme.assert_string(ar[0]);
    BiwaScheme.assert_string(ar[1]);
    BiwaScheme.assert_string(ar[2]);
    $(ar[0]).attr(ar[1],ar[2]);
});


BiwaScheme.define_libfunc("css", 2,2, function(ar){
    // jQuery: gets the value of the CSS selector named in ar[1] from the
    // DOMselector in ar[0]
    BiwaScheme.assert_string(ar[0]);
    BiwaScheme.assert_string(ar[1]);
    return $(ar[0]).css(ar[1]);
});

BiwaScheme.define_libfunc("css!", 3,3, function(ar){
  // jQuery: sets the value of the CSS selector named in ar[1] of the
  // DOMselector in ar[0] to ar[3]
    BiwaScheme.assert_string(ar[0]);
    BiwaScheme.assert_string(ar[1]);
    BiwaScheme.assert_string(ar[2]);
    $(ar[0]).css(ar[1],ar[2]);
});

BiwaScheme.define_libfunc("set-document-title", 1, 1, function(ar){
 BiwaScheme.assert_string(ar[0]);
 Fronkensteen.setDocumentTitle(ar[0]);
});

BiwaScheme.define_libfunc("get-selected-index", 1, 1, function(ar){
   // jQuery. Returns the selected index for the DOM selector named in
   // ar[0].
     BiwaScheme.assert_string(ar[0]);
     return $(ar[0]).prop('selectedIndex');
});

BiwaScheme.define_libfunc("disable!", 2, 2, function(ar){
     //jQuery: sets the disabled attribute of the
     // DOM selector in ar[0] to ar[1]
     BiwaScheme.assert_string(ar[0]);
     $(ar[0]).prop('disabled', ar[1]);
     return true;
});

/****! element-exists?
(element-exists? selector)

Returns #t if the specified element exists in the DOM, #f otherwise.
*/
BiwaScheme.define_libfunc("element-exists?", 1, 1, function(ar){
  //jQuery: returns #t if the specified selector exists, #f if not.
  BiwaScheme.assert_string(ar[0]);
  if($(ar[0]).length === 0){
    return false;
  }
  return true;
});

BiwaScheme.define_libfunc("js-install-head", 1, 1, function(ar,intp){
  // jQuery: Adds the HTML code in ar[0] to the document's head.
    $(document.head).append(ar[0]);
    return true;
});

BiwaScheme.define_libfunc("js-window-height", 0, 0, function(ar,intp){
// jQuery: Returns the height of the current window.
  return $(window).height();
});

BiwaScheme.define_libfunc("js-window-width", 0, 0, function(ar,intp){
  // jQuery: Returns the width of the current window.
  return $(window).width();
});

BiwaScheme.define_libfunc("js-document-width", 0, 0, function(ar,intp){
  // jQuery: Returns the width of the current window.
  return $(document).width();
});
BiwaScheme.define_libfunc("js-document-height", 0, 0, function(ar,intp){
  // jQuery: Returns the width of the current window.
  return $(document).height();
});
BiwaScheme.define_libfunc("%", 1, 4, function(ar,intp){
  // jQuery: the generic jQuery interface.
  switch(ar.length){
  case 1:
      return $(ar[0]);
  case 2:
      return $(ar[0])[ar[1]]();
  case 3:
      return $(ar[0])[ar[1]](ar[2]);
  case 4:
       if(BiwaScheme.isClosure(ar[3])){
          var intp2 = new BiwaScheme.Interpreter(intp);
          var handler = function(event){
               return _.clone(intp2).invoke_closure(ar[3], [event]);
          };
          return $(ar[0])[ar[1]](ar[2], handler);
      }
      else {
          return $(ar[0])[ar[1]](ar[2],ar[3]);
      }
  }
});


BiwaScheme.define_libfunc("prop", 2,2, function(ar){
  // Return the current value of the property specified by ar[1] from
  // the DOM selector specified by ar[0].
    BiwaScheme.assert_string(ar[0]);
    BiwaScheme.assert_string(ar[1]);
    return $(ar[0]).prop(ar[1]);
});

BiwaScheme.define_libfunc("prop!", 3,3, function(ar){
  // Set the property specified by ar[1] of the DOM selector specified by ar[0]
  // to the value specified in ar[2].
    BiwaScheme.assert_string(ar[0]);
    BiwaScheme.assert_string(ar[1]);
    BiwaScheme.assert_string(ar[2]);
    $(ar[0]).prop(ar[1],ar[2]);
});

// Returns elements matching selector in ar[0] as JS array (Scheme vector)
BiwaScheme.define_libfunc("elems" ,1, 1, function(ar){
    return $(ar[0]).toArray();
  });

// Returns list of the specified attribute for each matching element,
// in the order they are found.
BiwaScheme.define_libfunc("sort-order" ,2, 2, function(ar){
  let items = [];
  $(ar[0]).children().each(function(index) {
    items.push($(this).attr(ar[1]));
  });
  return items;
});


// Courtesy Tim Down, https://stackoverflow.com/questions/4233265/contenteditable-set-caret-at-the-end-of-the-text-cross-browser/4238971#4238971

Fronkensteen.createCaretPlacer = function(el,atStart) {
    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(atStart);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(atStart);
        textRange.select();
    }

}

// Place the caret at the start of a contenteditable element.
BiwaScheme.define_libfunc("place-caret-at-start" ,1, 1, function(ar){
  let el = $(ar[0])[0]
  if(el === undefined){
    return false;
  }
  Fronkensteen.createCaretPlacer(el,true)
  return true;
});

BiwaScheme.define_libfunc("place-caret-at-end" ,1, 1, function(ar){
  // Place the caret at the end of a contenteditable element.
  let el = $(ar[0])[0]
  if(el === undefined){
    return false;
  }
  Fronkensteen.createCaretPlacer(el,false)
  return true;
});


BiwaScheme.define_libfunc("set-selected-index!", 2, 2, function(ar){
  // Set the selected index for a <select>
     BiwaScheme.assert_string(ar[0]);
     BiwaScheme.assert_number(ar[1]);
     $(ar[0]).prop('selectedIndex', ar[1]);
     return true;
});



BiwaScheme.define_libfunc("jq-attr", 2, 2, function(ar,intp){
  // Returns the attribute in ar[1] for the jQuery DOM selector in
  // ar[0].
    if(!(ar[0] instanceof jQuery)){
        ar[0] = $(ar[0])
    }
    return ar[0].attr(ar[1]);
});

BiwaScheme.define_libfunc("jq-is-empty-object?", 1, 1, function(ar,intp){
  // Returns whether ar[0] is the empty object or not.
    return $.isEmptyObject(ar[0]);
});

BiwaScheme.define_libfunc("jq-length", 1, 1, function(ar,intp){
  // Returns the length of the jQuery collection in ar[0].
    return ar[0].length;
});

BiwaScheme.define_libfunc("scroll-element-into-view", 1, 1, function(ar,intp){
  // Scrolls to the element in ar[0], if it exists.
  $(ar[0])[0].scrollIntoView();
});
