// codemirror-extensions.js.
// Copyright 2018-2020 by Anthony W. Hursh
// MIT License.


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
    editDriver.activateEditor(ar[0]);
    return editDriver.find(editor_name,search_lemma,start,fold_case,is_regex,search_backward)
})
BiwaScheme.define_libfunc("clear-cm-editor-undo!", 1, 1, function(ar,intp){
  // Clears the undo buffer. Use after loading a file into a new editor,
  // to keep repeated undos from winding up with an empty editor.
    BiwaScheme.assert_string(ar[0]);
    editDriver.activateEditor(ar[0]);
    editDriver.clearUndo(ar[0])
})

BiwaScheme.define_libfunc("cm-end-position",1,1,function(ar){
  BiwaScheme.assert_string(ar[0]);
  editDriver.activateEditor(ar[0]);
  editDriver.goToEnd(ar[0]);
  let position = editDriver.getCursorPosition(ar[0]);
  return [position[0],position[1],position[0],position[1]];
})


BiwaScheme.define_libfunc("cm-editor-show",1,1,function(ar,intp){
  // Makes the CodeMirror editor specifed in ar[0] visible by showing its wrapper element.
  BiwaScheme.assert_string(ar[0]);
  editDriver.showEditor(ar[0]);
  editDriver.activateEditor(ar[0]);
});

BiwaScheme.define_libfunc("cm-editor-hide",1,1,function(ar,intp){
  // Hides the CodeMirror editor specifed in ar[0] by hiding its wrapper element.
  BiwaScheme.assert_string(ar[0]);
  editDriver.hideEditor(ar[0]);
});

BiwaScheme.define_libfunc("cm-editor-hide-all",0,0,function(ar,intp){
  // Hides all active CodeMirror editors.
  editDriver.hideAll();
});
BiwaScheme.define_libfunc("cm-editor-get-current-symbol",1,1,function(ar,intp){
  // Tries to get the Scheme symbol at the cursor for the CodeMirror editor specified in ar[0]. Somewhat heuristic, but usually works.
  BiwaScheme.assert_string(ar[0]);
  editDriver.activateEditor(ar[0]);
  return editDriver.getCurrentSymbol(ar[0]);
})

BiwaScheme.define_libfunc("cm-editor-get-procedure-at-cursor",1,1,function(ar,intp){
  // Get the selected Scheme procedure name or the procedure name before the cursor.
  BiwaScheme.assert_string(ar[0]);
  editDriver.activateEditor(ar[0]);
  return editDriver.getProcedureAtCursor(ar[0])
});

BiwaScheme.define_libfunc("cm-editor-eval-js-selection!",1,1,function(ar,intp){
  // Tries to evaluate the JavaScript expression found before the current cursor position in the CodeMirror editor specified in ar[0].
  BiwaScheme.assert_string(ar[0]);
  editDriver.activateEditor(ar[0]);
  editDriver.evalJSSelection(ar[0]);

})
BiwaScheme.define_libfunc("cm-editor-eval-selection-or-expr-before-cursor!",1,1,function(ar,intp){
  // Tries to evaluate the Scheme expression found before the current cursor position in the CodeMirror editor specified in ar[0].
  BiwaScheme.assert_string(ar[0]);
  editDriver.activateEditor(ar[0]);
  editDriver.evalSchemeSelection(ar[0]);
  editDriver.activateEditor(ar[0]);

});

  BiwaScheme.define_libfunc("cm-eval-editor-buffer!",1,1,function(ar,intp){
    // Evaluates the entire buffer from the CodeMirror editor specified in ar[0] as Scheme code.
    BiwaScheme.assert_string(ar[0]);
    editDriver.activateEditor(ar[0]);
    editDriver.evalSchemeBuffer(ar[0]);


});

BiwaScheme.define_libfunc("cm-editor-undo!", 1, 1, function(ar,intp){
  // Undoes last editing operation in the CodeMirror editor specifed in ar[0].
  BiwaScheme.assert_string(ar[0]);
  editDriver.activateEditor(ar[0]);
  editDriver.undo(ar[0]);
})
BiwaScheme.define_libfunc("cm-editor-redo!", 1, 1, function(ar,intp){
  // Redoes last editing operation in the CodeMirror editor specifed in ar[0].
  BiwaScheme.assert_string(ar[0]);
  editDriver.activateEditor(ar[0]);
  editDriver.redo(ar[0]);
})
BiwaScheme.define_libfunc("is-cm-editor-clean?", 1, 1, function(ar,intp){
  // Returns true if the CodeMirror editor specifed in ar[0] is "clean" (i.e., hasn't changes since the last time it was marked as clean). Used to determine if an editor needs to be saved.
  BiwaScheme.assert_string(ar[0]);
  editDriver.activateEditor(ar[0]);
  return editDriver.isClean(ar[0]);

})

BiwaScheme.define_libfunc("set-cm-editor-clean!", 1, 1, function(ar,intp){
  // Sets the CodeMirror editor specifed in ar[0] as "clean".
  BiwaScheme.assert_string(ar[0]);
  editDriver.activateEditor(ar[0]);
  editDriver.markClean(ar[0]);
})


BiwaScheme.define_libfunc("focus-cm-editor-component!", 1, 1, function(ar,intp){
  BiwaScheme.assert_string(ar[0]);
  editDriver.focusEditor(ar[0]);

})

BiwaScheme.define_libfunc("refresh-cm-editor-component!", 1, 1, function(ar,intp){
  let editor = cm_editors[ar[0]];
  editDriver.refreshEditor(ar[0]);
})

BiwaScheme.define_libfunc("destroy-cm-editor!", 1, 1, function(ar,intp){
  BiwaScheme.assert_string(ar[0]);
  editDriver.destroyEditor(ar[0]);
})


// Returns a vector of the ids of the textareas associated with each active CodeMirror editor.
BiwaScheme.define_libfunc("get-cm-editor-ids",1,1,function(ar,intp){
  return editDriver.getEditorIds();

});


BiwaScheme.define_libfunc("init-cm-editor!", 2, 2, function(ar,intp){
  // Convert the textarea in ar[0] to a CodeMirror text editor.
  BiwaScheme.assert_string(ar[0]);
  BiwaScheme.assert_string(ar[1]);
  return editDriver.createEditor(ar[0],ar[1]);
})

BiwaScheme.define_libfunc("cm-editor-replace",2,2, function(ar){
  editDriver.activateEditor(ar[0]);
  return editDriver.replace(ar[0],ar[1]);
});

BiwaScheme.define_libfunc("cm-editor-get-text",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  return editDriver.getText(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-text",2,2, function(ar){
  editDriver.activateEditor(ar[0]);
  return editDriver.setText(ar[0],ar[1]);
});
BiwaScheme.define_libfunc("cm-editor-get-selected-text",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  return editDriver.getSelection(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-delete-selected-text",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  return editDriver.replaceSelectedText(ar[0],"");
});
BiwaScheme.define_libfunc("cm-editor-set-bold",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setBold(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-cursor-position",3,3, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setCursorPosition(ar[0],ar[1],ar[2]);
});
BiwaScheme.define_libfunc("cm-editor-get-cursor-position",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  return editDriver.getCursorPosition(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-get-line",2,2, function(ar){
  editDriver.activateEditor(ar[0]);
  return editDriver.getLine(ar[0],ar[1]);
});
BiwaScheme.define_libfunc("cm-editor-scroll-to-line",2,2, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.scrollToLine(ar[0],ar[1]);
});
BiwaScheme.define_libfunc("cm-editor-set-italic",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setItalic(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-superscript",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setSuperscript(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-subscript",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setSubscript(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-strikeout",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setStrikeout(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-bulleted-list",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setBulletedList(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-numbered-list",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setNumberedList(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-block-quote",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setBlockQuote(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-poetry",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setPoetry(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-code",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setCode(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-center",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setCenter(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-justify",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setJustify(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-align-left",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setAlignLeft(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-align-right",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setAlignRight(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-comment",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setComment(ar[0]);
});

BiwaScheme.define_libfunc("cm-editor-set-note",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setNote(ar[0]);
});
BiwaScheme.define_libfunc("cm-editor-set-heading",2,2, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setHeading(ar[0],ar[1]);
});

BiwaScheme.define_libfunc("cm-editor-set-math",1,1, function(ar){
  editDriver.activateEditor(ar[0]);
  editDriver.setMath(ar[0]);
});
