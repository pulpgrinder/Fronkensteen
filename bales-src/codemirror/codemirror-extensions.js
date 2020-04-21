// codemirror-extensions.js.
// Copyright 2018-2020 by Anthony W. Hursh
// MIT License.

let cm_editors = {};


BiwaScheme.define_libfunc("cm-find", 6, 6, function(ar,intp){
  // Runs a search of the active document. Args are:
  // editor, search lemma, start position, foldcase, regex, search_backward.
  // Start position is in [line,ch] format. foldcase, regex,
  // and search_backwards are boolean.
  // Returns  [result.from.line,result.from.ch,result.to.line,result.to.ch]
  // if found, false if
  // no match.

    BiwaScheme.assert_string(ar[0]);
    BiwaScheme.assert_string(ar[1]);
    BiwaScheme.assert_vector(ar[2]);
    let editor_name = ar[0];
    let search_lemma = ar[1];
    let start = {line:ar[2][0],ch:ar[2][1]};
    let fold_case = ar[3];
    let is_regex = ar[4];
    let search_backward = ar[5];
    return editDriver.find(editor_name,search_lemma,start,fold_case,is_regex,search_backward)
})
BiwaScheme.define_libfunc("clear-cm-editor-undo!", 1, 1, function(ar,intp){
  // Clears the undo buffer. Use after loading a file into a new editor,
  // to keep repeated undos from winding up with an empty editor.
    BiwaScheme.assert_string(ar[0]);
    let editor = cm_editors[ar[0]];
    if(editor !== undefined){
      let doc = editor.getDoc();
      doc.clearHistory();
      return true;
    }
    else{
      console.error("set-cm-editor-text!: No editor corresponding to " + ar[0]);
      return null;
    }
})

BiwaScheme.define_libfunc("cm-end-position",1,1,function(ar){
  BiwaScheme.assert_string(ar[0]);
  let editor = cm_editors[ar[0]];
  if(editor === undefined){
      return null;
  }
  editDriver.goToEnd(ar[0]);
  let position = editDriver.getCursorPosition(ar[0]);
  return [position[0],position[1],position[0],position[1]];
})

BiwaScheme.define_libfunc("set-cm-editor-text!", 2, 2, function(ar,intp){
  // Set the text for the CodeMirror editor named in ar[0] to the text in ar[1]
    BiwaScheme.assert_string(ar[0]);
    BiwaScheme.assert_string(ar[1]);
    let editor = cm_editors[ar[0]];
    if(editor !== undefined){
      let result = editor.setValue(ar[1]);
      editor.focus();
      return result;
    }
    else{
      console.error("set-cm-editor-text!: No editor corresponding to " + ar[0]);
      return null;
    }
})

BiwaScheme.define_libfunc("cm-editor-show",1,1,function(ar,intp){
  // Makes the CodeMirror editor specifed in ar[0] visible by showing its wrapper element.
  BiwaScheme.assert_string(ar[0]);
  let editor = cm_editors[ar[0]];
  if(editor !== undefined){
    $(editor.getWrapperElement()).show();
    return true;
  }
  return false;
});

BiwaScheme.define_libfunc("cm-editor-hide",1,1,function(ar,intp){
  // Hides the CodeMirror editor specifed in ar[0] by hiding its wrapper element.
  BiwaScheme.assert_string(ar[0]);
  let editor = cm_editors[ar[0]];
  if(editor !== undefined){
    $(editor.getWrapperElement()).hide();
    return true;
  }
  return false;
});

BiwaScheme.define_libfunc("cm-editor-hide-all",0,0,function(ar,intp){
  // Hides all active CodeMirror editors.
  let editors = Object.keys(cm_editors);
  for(var i = 0; i < editors.length; i++){
    $(cm_editors[editors[i]].getWrapperElement()).hide();
  }
  return true;
});
BiwaScheme.define_libfunc("cm-editor-get-current-symbol",1,1,function(ar,intp){
  // Tries to get the Scheme symbol at the cursor for the CodeMirror editor specified in ar[0]. Somewhat heuristic, but usually works.
  BiwaScheme.assert_string(ar[0]);
  let editor = cm_editors[ar[0]];
  let result = "";
  if(editor !== undefined){
    let doc = editor.getDoc();
    let cursor = doc.getCursor();
    let text = editor.getValue();
    let selection = doc.getSelection();
    let expr;
    if(selection.length > 0){
      let expr = selection;
    }
    else{
      let index = doc.indexFromPos(cursor);
      let preceding = text.substring(0,index);
      let start = index;
      while(start > 0){
        if((text.charAt(start) === "(") || (text.charAt(start) === " ")  || (text.charAt(start) === "\n")){
            start = start + 1;
            break;
          }
          else{
            start = start - 1;
          }
      }
      let end = index;
      while(end < text.length){
        if((text.charAt(end) === ")") || (text.charAt(end) === " ") || (text.charAt(end) === "\n")){
            break;

          }
          else{
            end = end + 1;
          }
      }
      editor.focus();
      return text.substring(start,end);
    }
  }
})

Fronkensteen.getProcedureAtCursor = function(editorname){
  let editor = cm_editors[editorname];
  if(editor !== undefined){
    let doc = editor.getDoc();
    let cursor = doc.getCursor();
    let text = editor.getValue();
    let selection = doc.getSelection();
    if(selection.length <= 0){
      let index = doc.indexFromPos(cursor);
      let preceding = text.substring(0,index);
      if((text.charAt(index) === " ") || (text.charAt(index) === "\n")){
        index = index - 1;
      }
      let start = index;
      while(start >= 0){
        if((text.charAt(start) === "(") || (text.charAt(start) === " ")  || (text.charAt(start) === "\n")){
            start = start + 1;
            break;
          }
          else{
            start = start - 1;
          }
      }
      let end = index;
      while(end < text.length){
        if((text.charAt(end) === ")") || (text.charAt(end) === " ") || (text.charAt(end) === "\n")){
            break;

          }
          else{
            end = end + 1;
          }
      }
      selection = text.substring(start,end);
    }
    editor.focus();
    return selection.trim();
}
  return false;
}
BiwaScheme.define_libfunc("cm-editor-get-procedure-at-cursor",1,1,function(ar,intp){
  // Look up the selected Scheme procedure name or the procedure name before the cursor in the documentation.
  BiwaScheme.assert_string(ar[0]);
    let selection = Fronkensteen.getProcedureAtCursor(ar[0])
    if(selection.length > 0){
      return selection;
    }
    return false;
});



BiwaScheme.define_libfunc("cm-editor-eval-js-selection!",1,1,function(ar,intp){
  // Tries to evaluate the JavaScript expression found before the current cursor position in the CodeMirror editor specified in ar[0].
  BiwaScheme.assert_string(ar[0]);
  let editor = cm_editors[ar[0]];
  let result = "";
  if(editor !== undefined){
    let doc = editor.getDoc();
    let cursor = doc.getCursor();
    let text = editor.getValue();
    let selection = doc.getSelection();
    if(selection.length > 0){
      try{
        console.error("evaluating " + selection)
        eval(selection);
        result = "";
      }
      catch(err){
        result = "// " + err.message;
      }
    }
    else {
      alert("Evaluate JavaScript: nothing selected.")
      result =  "";
    }
    if(result !== ""){
      doc.replaceSelection(doc.getSelection() + result);
    }
  }
  else {
    console.error("cm-editor-eval-js-selection!: (no editor)");
  }
  editor.focus();
})

BiwaScheme.define_libfunc("cm-editor-eval-selection-or-expr-before-cursor!",1,1,function(ar,intp){
  // Tries to evaluate the Scheme expression found before the current cursor position in the CodeMirror editor specified in ar[0].
  BiwaScheme.assert_string(ar[0]);
  let editor = cm_editors[ar[0]];
  let result = "";
  if(editor !== undefined){
    let doc = editor.getDoc();
    let cursor = doc.getCursor();
    let text = editor.getValue();
    let selection = doc.getSelection();
    let expr;
    if(selection.length > 0){
      let expr = selection;
    }
    else{
      let index = doc.indexFromPos(cursor);
      let preceding = text.substring(0,index);
      selection = "";
      let lastchar = text.charAt(preceding.length - 1);
      if(lastchar === ")"){
        selection = Fronkensteen.eval_extract_sexp(preceding);
      }
      else if(lastchar === "\""){
        selection = Fronkensteen.eval_extract_string(preceding)
      }
      else {
        selection = Fronkensteen.eval_extract_atom(preceding)
      }
    }
    if(selection === null){
      result = " ; No balanced expression found preceding cursor."
    }
    else{
      var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
      result = " ; value:  " + intp2.evaluate(Fronkensteen.renderREPLTemplate(selection)) + Fronkensteen.CumulativeErrors.join("\n");
      Fronkensteen.CumulativeErrors = [];
    }
    doc.replaceSelection(doc.getSelection() + result);
    editor.focus();
    return true;

  }
  else{
    console.error("cm-editor-expr-before-cursor: No editor corresponding to " + ar[0]);
    return false;
  }
});

  BiwaScheme.define_libfunc("cm-eval-editor-buffer!",1,1,function(ar,intp){
    // Evaluates the entire buffer from the CodeMirror editor specified in ar[0] as Scheme code.
    BiwaScheme.assert_string(ar[0]);
    let editor = cm_editors[ar[0]];
    let result = "";
    if(editor !== undefined){
      let doc = editor.getDoc();
      let cursor = doc.getCursor();
      let text = editor.getValue();
      var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
      result = " ; value: " + intp2.evaluate(text) + Fronkensteen.CumulativeErrors.join("\n");
      Fronkensteen.CumulativeErrors = [];
      editor.setValue(text + result);
      editor.focus();
      return true;

    }
    else{
      console.error("cm-eval-editor-buffer!: No editor corresponding to " + ar[0]);
      return false;
    }

});


BiwaScheme.define_libfunc("cm-editor-undo!", 1, 1, function(ar,intp){
  // Undoes last editing operation in the CodeMirror editor specifed in ar[0].
  BiwaScheme.assert_string(ar[0]);
  let editor = cm_editors[ar[0]];
  if(editor !== undefined){
    return editor.undo();
  }
  else{
    console.error("cm-editor-undo!: No editor corresponding to " + ar[0]);
    return null;
  }
})
BiwaScheme.define_libfunc("cm-editor-redo!", 1, 1, function(ar,intp){
  // Redoes last editing operation in the CodeMirror editor specifed in ar[0].
  BiwaScheme.assert_string(ar[0]);
  let editor = cm_editors[ar[0]];
  if(editor !== undefined){
    return editor.redo();
  }
  else{
    console.error("cm-editor-redo!: No editor corresponding to " + ar[0]);
    return null;
  }
})
BiwaScheme.define_libfunc("is-cm-editor-clean?", 1, 1, function(ar,intp){
  // Returns true if the CodeMirror editor specifed in ar[0] is "clean" (i.e., hasn't changes since the last time it was marked as clean). Used to determine if an editor needs to be saved.
  BiwaScheme.assert_string(ar[0]);
  let editor = cm_editors[ar[0]];
  if(editor !== undefined){
    return editor.getDoc().isClean();
  }
  else{
    console.error("is-cm-editor-clean?: No editor corresponding to " + ar[0]);
    return false;
  }

})

BiwaScheme.define_libfunc("set-cm-editor-clean!", 1, 1, function(ar,intp){
  // Sets the CodeMirror editor specifed in ar[0] as "clean".
  BiwaScheme.assert_string(ar[0]);
  let editor = cm_editors[ar[0]];
  if(editor !== undefined){
    return editor.getDoc().markClean();
  }
  else{
    console.error("set-cm-editor-clean!: No editor corresponding to " + ar[0]);
    return false;
  }
})

BiwaScheme.define_libfunc("get-cm-editor-text", 1, 1, function(ar,intp){
  BiwaScheme.assert_string(ar[0]);
  let editor = cm_editors[ar[0]];
  if(editor !== undefined){
    return editor.getValue();
  }
  else{
    console.error("get-cm-editor-text: No editor corresponding to " + ar[0]);
    return null;
  }
})

BiwaScheme.define_libfunc("focus-cm-editor-component!", 1, 1, function(ar,intp){
  BiwaScheme.assert_string(ar[0]);
  let editor = cm_editors[ar[0]];
  if(editor !== undefined){
    editDriver.focus(editor);
    return true;
  }
  else{
    console.error("focus-cm-editor-component!: No editor corresponding to " + ar[0]);
    return null;
  }
})

BiwaScheme.define_libfunc("refresh-cm-editor-component!", 1, 1, function(ar,intp){
  let editor = cm_editors[ar[0]];
  if(editor !== undefined){
    return editor.refresh();
  }
  else{
    console.error("refresh-cm-editor-component!: No editor corresponding to " + ar[0]);
    return null;
  }
})

BiwaScheme.define_libfunc("destroy-cm-editor!", 1, 1, function(ar,intp){
  BiwaScheme.assert_string(ar[0]);
  let editor = cm_editors[ar[0]];
  if(editor !== undefined){
    delete cm_editors[ar[0]];
    return editor.toTextArea();

  }
  else{
    console.error("destroy-cm-editor!: No editor corresponding to " + ar[0]);
    return null;
  }
})


function focusFind(){
  setTimeout(function(){
  var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
  intp2.evaluate("(focus-find)");
  return true;
},15)
}

function findNext(){
  setTimeout(function(){
  var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
  intp2.evaluate("(fronkensteen-editor-find-button_click)");
  return true;
},15)
}

function runRepl(){
  setTimeout(function(){
  var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
  intp2.evaluate("(keyboard-repl)");
  return true;
},15)
}
// Returns a vector of the ids of the textareas associated with each active CodeMirror editor.
BiwaScheme.define_libfunc("get-cm-editor-ids",1,1,function(ar,intp){
  return Object.keys(cm_editors);
});


BiwaScheme.define_libfunc("init-cm-editor!", 2, 2, function(ar,intp){
  // Convert the textarea in ar[0] to a CodeMirror text editor.
  BiwaScheme.assert_string(ar[0]);
  BiwaScheme.assert_string(ar[1]);
  let activeCMEditor = CodeMirror.fromTextArea($(ar[0])[0],
   {
       matchBrackets: true,
       autoCloseBrackets: true,
       lineWrapping:true,
       viewportMargin:Infinity,
       autoFocus:true,
       lineNumbers:true,
       mode:ar[1],
       extraKeys: {
         "Cmd-G": function(){
           findNext();
         },
         "Ctrl-G": function(){
           findNext();
         },
         "Cmd-F": function(){
           focusFind();
         },
         "Ctrl-F": function(){
           focusFind();
         },
         "Ctrl-E": function(){
              runRepl();
         },
         "Cmd-E": function(){
              runRepl()
         }
         }
   } );
  activeCMEditor.focus();
  //activeCMEditor.setSize("50em","75vh");
  setTimeout(function(){
    activeCMEditor.refresh();
  },1)

  //activeEditor.setSize("100%","50em");
  //lastCMEditor = activeCMEditor;
  cm_editors[ar[0]] = activeCMEditor;
  return activeCMEditor;
})



BiwaScheme.define_libfunc("cm-editor-replace-all",4,4, function(ar){
  return editDriver.replaceAll(ar[0],ar[1],ar[2],ar[3]);
});
BiwaScheme.define_libfunc("cm-editor-replace",2,2, function(ar){
  return editDriver.replace(ar[0],ar[1]);
});
BiwaScheme.define_libfunc("cm-editor-refresh",1,1, function(ar){
  setTimeout(function(){
    ar[0].refresh()
  },20);
});
BiwaScheme.define_libfunc("cm-editor-get-text",1,1, function(ar){
  return editDriver.getText(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-text",2,2, function(ar){

  return editDriver.setText(ar[0],ar[1]);
});
BiwaScheme.define_libfunc("cm-editor-get-selected-text",1,1, function(ar){
  return editDriver.getSelection(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-delete-selected-text",1,1, function(ar){
  return editDriver.replaceSelectedText(ar[0],"");
});
BiwaScheme.define_libfunc("cm-editor-set-bold",1,1, function(ar){
  editDriver.setBold(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-cursor-position",3,3, function(ar){
  editDriver.setCursorPosition(ar[0],ar[1],ar[2]);
});
BiwaScheme.define_libfunc("cm-editor-get-cursor-position",1,1, function(ar){
  return editDriver.getCursorPosition(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-get-line",2,2, function(ar){
  return editDriver.getLine(ar[0],ar[1]);
});
BiwaScheme.define_libfunc("cm-editor-scroll-to-line",2,2, function(ar){
  editDriver.scrollToLine(ar[0],ar[1]);
});
BiwaScheme.define_libfunc("cm-editor-set-italic",1,1, function(ar){
  editDriver.setItalic(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-superscript",1,1, function(ar){
  editDriver.setSuperscript(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-subscript",1,1, function(ar){
  editDriver.setSubscript(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-strikeout",1,1, function(ar){
  editDriver.setStrikeout(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-bulleted-list",1,1, function(ar){
  editDriver.setBulletedList(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-numbered-list",1,1, function(ar){
  editDriver.setNumberedList(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-block-quote",1,1, function(ar){
  editDriver.setBlockQuote(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-poetry",1,1, function(ar){
  editDriver.setPoetry(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-code",1,1, function(ar){
  editDriver.setCode(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-center",1,1, function(ar){
  editDriver.setCenter(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-justify",1,1, function(ar){
  editDriver.setJustify(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-align-left",1,1, function(ar){
  editDriver.setAlignLeft(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-align-right",1,1, function(ar){
  editDriver.setAlignRight(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-comment",1,1, function(ar){
  editDriver.setComment(ar[0]);
});

BiwaScheme.define_libfunc("cm-editor-set-note",1,1, function(ar){
  editDriver.setNote(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-heading",2,2, function(ar){
  editDriver.setHeading(ar[0],ar[1]);
});

BiwaScheme.define_libfunc("cm-editor-set-math",1,1, function(ar){
  editDriver.setMath(ar[0]);
});

BiwaScheme.define_libfunc("patch-poetry",1,1, function(ar){
  return ar[0].replace(/^\| (.*)\n/gm,function(match,capture) { return capture.replace(/ /g, "&nbsp;") + "  \n" });
});


CodeMirror.commands.find = function(){
  var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
  intp2.evaluate("(% \"#code-editor-find-field\" \"focus\")")
}
