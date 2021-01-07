// codemirror-extensions.js.
// Copyright 2018-2020 by Anthony W. Hursh
// MIT License.


BiwaScheme.define_libfunc("cm-find", 7, 7, function(ar,intp){
  // Runs a search of the active document. Args are:
  // editor, search lemma, start position, foldcase, regex, search_backward.

    BiwaScheme.assert_string(ar[0]);
    BiwaScheme.assert_string(ar[1]);
    BiwaScheme.assert_string(ar[2]);
    let editor_name = ar[0];
    let search_lemma = ar[1];
    let start = ar[2];
    let fold_case = ar[3];
    let is_regex = ar[4];
    let search_backward = ar[5];
    let wrap = ar[6];
    Fronkensteen.editDriver.activateEditor(ar[0]);
    return Fronkensteen.editDriver.find(editor_name,search_lemma,start,fold_case,is_regex,search_backward,wrap,false)
})
BiwaScheme.define_libfunc("clear-cm-editor-undo!", 1, 1, function(ar,intp){
  // Clears the undo buffer. Use after loading a file into a new editor,
  // to keep repeated undos from winding up with an empty editor.
    BiwaScheme.assert_string(ar[0]);
    Fronkensteen.editDriver.activateEditor(ar[0]);
    Fronkensteen.editDriver.clearUndo(ar[0])
})



BiwaScheme.define_libfunc("cm-editor-show",1,1,function(ar,intp){
  // Makes the CodeMirror editor specifed in ar[0] visible by showing its wrapper element.
  BiwaScheme.assert_string(ar[0]);
  Fronkensteen.editDriver.showEditor(ar[0]);
  Fronkensteen.editDriver.activateEditor(ar[0]);
});

BiwaScheme.define_libfunc("cm-editor-hide",1,1,function(ar,intp){
  // Hides the CodeMirror editor specifed in ar[0] by hiding its wrapper element.
  BiwaScheme.assert_string(ar[0]);
  Fronkensteen.editDriver.hideEditor(ar[0]);
});

BiwaScheme.define_libfunc("cm-editor-hide-all",0,0,function(ar,intp){
  // Hides all active CodeMirror editors.
  Fronkensteen.editDriver.hideAll();
});
BiwaScheme.define_libfunc("cm-editor-get-current-symbol",1,1,function(ar,intp){
  // Tries to get the Scheme symbol at the cursor for the CodeMirror editor specified in ar[0]. Somewhat heuristic, but usually works.
  BiwaScheme.assert_string(ar[0]);
  Fronkensteen.editDriver.activateEditor(ar[0]);
  return Fronkensteen.editDriver.getCurrentSymbol(ar[0]);
})

BiwaScheme.define_libfunc("cm-editor-select-all",1,1,function(ar,intp){
  // Get the selected Scheme procedure name or the procedure name before the cursor.
  BiwaScheme.assert_string(ar[0]);
  Fronkensteen.editDriver.activateEditor(ar[0]);
  return Fronkensteen.editDriver.selectAll(ar[0])
});
BiwaScheme.define_libfunc("cm-editor-get-procedure-at-cursor",1,1,function(ar,intp){
  // Get the selected Scheme procedure name or the procedure name before the cursor.
  BiwaScheme.assert_string(ar[0]);
  Fronkensteen.editDriver.activateEditor(ar[0]);
  return Fronkensteen.editDriver.getProcedureAtCursor(ar[0])
});

BiwaScheme.define_libfunc("cm-editor-eval-js-selection!",1,1,function(ar,intp){
  // Tries to evaluate the JavaScript expression found before the current cursor position in the CodeMirror editor specified in ar[0].
  BiwaScheme.assert_string(ar[0]);
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.evalJSSelection(ar[0]);

})
BiwaScheme.define_libfunc("cm-editor-eval-selection-or-expr-before-cursor!",1,1,function(ar,intp){
  // Tries to evaluate the Scheme expression found before the current cursor position in the CodeMirror editor specified in ar[0].
  BiwaScheme.assert_string(ar[0]);
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.evalSchemeSelection(ar[0]);
  Fronkensteen.editDriver.activateEditor(ar[0]);

});

BiwaScheme.define_libfunc("cm-editor-get-scheme-selection-or-expr-before-cursor!",1,1,function(ar,intp){
  // Tries to evaluate the Scheme expression found before the current cursor position in the CodeMirror editor specified in ar[0].
  BiwaScheme.assert_string(ar[0]);
  Fronkensteen.editDriver.activateEditor(ar[0]);
  return Fronkensteen.editDriver.getSchemeSelection(ar[0]);
});

  BiwaScheme.define_libfunc("cm-eval-editor-buffer!",1,1,function(ar,intp){
    // Evaluates the entire buffer from the CodeMirror editor specified in ar[0] as Scheme code.
    BiwaScheme.assert_string(ar[0]);
    Fronkensteen.editDriver.activateEditor(ar[0]);
    Fronkensteen.editDriver.evalSchemeBuffer(ar[0]);
    Fronkensteen.editDriver.activateEditor(ar[0]);


});

BiwaScheme.define_libfunc("cm-editor-undo!", 1, 1, function(ar,intp){
  // Undoes last editing operation in the CodeMirror editor specifed in ar[0].
  BiwaScheme.assert_string(ar[0]);
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.undo(ar[0]);
})
BiwaScheme.define_libfunc("cm-editor-redo!", 1, 1, function(ar,intp){
  // Redoes last editing operation in the CodeMirror editor specifed in ar[0].
  BiwaScheme.assert_string(ar[0]);
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.redo(ar[0]);
})
BiwaScheme.define_libfunc("is-cm-editor-clean?", 1, 1, function(ar,intp){
  // Returns true if the CodeMirror editor specifed in ar[0] is "clean" (i.e., hasn't changes since the last time it was marked as clean). Used to determine if an editor needs to be saved.
  BiwaScheme.assert_string(ar[0]);
  Fronkensteen.editDriver.activateEditor(ar[0]);
  return Fronkensteen.editDriver.isClean(ar[0]);

})

BiwaScheme.define_libfunc("set-cm-editor-clean!", 1, 1, function(ar,intp){
  // Sets the CodeMirror editor specifed in ar[0] as "clean".
  BiwaScheme.assert_string(ar[0]);
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.markClean(ar[0]);
})


BiwaScheme.define_libfunc("focus-cm-editor-component!", 1, 1, function(ar,intp){
  BiwaScheme.assert_string(ar[0]);
  Fronkensteen.editDriver.focusEditor(ar[0]);

})

BiwaScheme.define_libfunc("refresh-cm-editor-component!", 1, 1, function(ar,intp){
  let editor = cm_editors[ar[0]];
  Fronkensteen.editDriver.refreshEditor(ar[0]);
})

BiwaScheme.define_libfunc("destroy-cm-editor!", 1, 1, function(ar,intp){
  BiwaScheme.assert_string(ar[0]);
  Fronkensteen.editDriver.destroyEditor(ar[0]);
})


BiwaScheme.define_libfunc("cm-editor-shrink-char",2,2,function(ar,intp){
  Fronkensteen.editDriver.shrinkChar(ar[0],ar[1]);
})
BiwaScheme.define_libfunc("cm-editor-grow-char",2,2,function(ar,intp){
  Fronkensteen.editDriver.growChar(ar[0],ar[1]);
})
BiwaScheme.define_libfunc("cm-editor-shrink-word",2,2,function(ar,intp){
  Fronkensteen.editDriver.shrinkWord(ar[0],ar[1]);
})
BiwaScheme.define_libfunc("cm-editor-grow-word",2,2,function(ar,intp){
  Fronkensteen.editDriver.growWord(ar[0],ar[1]);
})
BiwaScheme.define_libfunc("cm-editor-set-selection",3,3,function(ar,intp){
  Fronkensteen.editDriver.setSelection(ar[0],ar[1],ar[2]);
})

// Returns a vector of active editors. Used for CodeMirror editor, not for plain text editor.
BiwaScheme.define_libfunc("get-cm-editor-ids",1,1,function(ar,intp){
  return Fronkensteen.editDriver.getEditorIds();

});

BiwaScheme.define_libfunc("cm-editor-arrow-key", 2, 2, function(ar,intp){
  return Fronkensteen.editDriver.arrowKey(ar[0],ar[1]);
});

BiwaScheme.define_libfunc("init-cm-editor!", 2, 2, function(ar,intp){
  // Convert the textarea in ar[0] to a text editor.
  BiwaScheme.assert_string(ar[0]);
  BiwaScheme.assert_string(ar[1]);
  return Fronkensteen.editDriver.createEditor(ar[0],ar[1]);
})

BiwaScheme.define_libfunc("cm-editor-replace",2,2, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  return Fronkensteen.editDriver.replace(ar[0],ar[1]);
});

BiwaScheme.define_libfunc("cm-editor-get-text",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  return Fronkensteen.editDriver.getText(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-text",2,2, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  return Fronkensteen.editDriver.setText(ar[0],ar[1]);
});
BiwaScheme.define_libfunc("cm-editor-get-selected-text",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  return Fronkensteen.editDriver.getSelection(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-delete-selected-text",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  return Fronkensteen.editDriver.replaceSelectedText(ar[0],"");
});
BiwaScheme.define_libfunc("cm-editor-replace-selected-text",2,2, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  return Fronkensteen.editDriver.replaceSelectedText(ar[0],ar[1]);
});
BiwaScheme.define_libfunc("cm-editor-set-bold",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setBold(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-menu",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setMenu(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-cursor-position",3,3, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setCursorPosition(ar[0],ar[1],ar[2]);
});
BiwaScheme.define_libfunc("cm-editor-get-cursor-position",1,2, function(ar){
  let cursorArg
  if(ar.length === 2){
    cursorArg = ar[1]
  }
  else {
    cursorArg = "to"
  }
  Fronkensteen.editDriver.activateEditor(ar[0]);
  return Fronkensteen.editDriver.getCursorPosition(ar[0],cursorArg);
});

BiwaScheme.define_libfunc("cm-editor-get-next-cursor-position",1,2, function(ar){
  let cursorArg
  if(ar.length === 2){
    cursorArg = ar[1]
  }
  else {
    cursorArg = "to"
  }
  Fronkensteen.editDriver.activateEditor(ar[0]);
  return Fronkensteen.editDriver.getNextCursorPosition(ar[0],cursorArg);
});
BiwaScheme.define_libfunc("cm-editor-get-line",2,2, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  return Fronkensteen.editDriver.getLine(ar[0],ar[1]);
});
BiwaScheme.define_libfunc("cm-editor-scroll-to-line",2,2, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.scrollToLine(ar[0],ar[1]);
});
BiwaScheme.define_libfunc("cm-editor-scroll-to-selection",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.scrollToSelection(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-italic",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setItalic(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-link",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setLink(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-superscript",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setSuperscript(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-subscript",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setSubscript(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-strikeout",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setStrikeout(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-bulleted-list",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setBulletedList(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-numbered-list",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setNumberedList(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-block-quote",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setBlockQuote(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-poetry",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setPoetry(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-code",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setCode(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-center",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setCenter(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-justify",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setJustify(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-align-left",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setAlignLeft(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-align-right",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setAlignRight(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-comment",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setComment(ar[0]);
});

BiwaScheme.define_libfunc("cm-editor-set-note",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setNote(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-heading",2,2, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setHeading(ar[0],ar[1]);
});
BiwaScheme.define_libfunc("cm-editor-set-underline",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setUnderline(ar[0],ar[1]);
});
BiwaScheme.define_libfunc("cm-editor-set-smallcaps",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setSmallCaps(ar[0],ar[1]);
});

BiwaScheme.define_libfunc("cm-editor-set-inline-math",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setInlineMath(ar[0]);
});

BiwaScheme.define_libfunc("cm-editor-set-display-math",1,1, function(ar){
  Fronkensteen.editDriver.activateEditor(ar[0]);
  Fronkensteen.editDriver.setDisplayMath(ar[0]);
});
