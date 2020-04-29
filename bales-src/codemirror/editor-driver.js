
CodeMirror.commands.find = function(){
  var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
  intp2.evaluate("(% \"#code-editor-find-field\" \"focus\")")
}

class CMEditorDriver {
    constructor(){
      this.codeLanguage = "markdown";
      this.cm_editors = {}
    }
    activateEditor(editor_id){
      console.log("activating " + editor_id)
      let editor = this.cm_editors[editor_id];
      if(editor === undefined){
        console.error("showEditor: No editor corresponding to " + editor_id);
        return;
      }
      editor.focus();
      editor.refresh();
    }
    showEditor(editor_id){
      let editor = this.cm_editors[editor_id];
      if(editor === undefined){
        console.error("showEditor: No editor corresponding to " + editor_id);
        return;
      }
      $(editor.getWrapperElement()).show();
    }
    hideEditor(editor_id){
      let editor = this.cm_editors[editor_id];
      if(editor === undefined){
        console.error("hideEditor: No editor corresponding to " + editor_id);
        return;
      }
      $(editor.getWrapperElement()).hide();
    }
    hideAll(){
      let editors = Object.keys(this.cm_editors);
      for(var i = 0; i < editors.length; i++){
        $(this.cm_editors[editors[i]].getWrapperElement()).hide();
      }
    }
    evalSchemeBuffer(editor_id){
      let editor = this.cm_editors[editor_id];
      if(editor === undefined){
        console.error("evalSchemeBuffer: No editor corresponding to " + editor_id);
        return;
      }
      let doc = editor.getDoc();
      let cursor = doc.getCursor();
      let text = editor.getValue();
      var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
      result = " ; value: " + intp2.evaluate(text) + Fronkensteen.CumulativeErrors.join("\n");
      Fronkensteen.CumulativeErrors = [];
      editor.setValue(text + result);
    }
    evalSchemeSelection(editor_id){
        let editor = this.cm_editors[editor_id];
        let result = "";
        if(editor === undefined){
          console.error("evalSchemeSelection: No editor corresponding to " + editor_id);
          return;
        }
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

    }
    evalJSSelection(editor_id){
      let editor = this.cm_editors[editor_id];
      let result = "";
      if(editor === undefined){
        console.error("evalJSSelection: No editor corresponding to " + editor_id);
        return;
      }
      let doc = editor.getDoc();
      let cursor = doc.getCursor();
      let text = editor.getValue();
      let selection = doc.getSelection();
      if(selection.length > 0){
        try{
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
    getProcedureAtCursor(editor_id){
      let editor = this.cm_editors[editor_id];
      if(editor === undefined){
        console.error("getProcedureAtCursor: No editor corresponding to " + editor_id);
        return null;
      };
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
      selection = selection.trim();
      if(selection.length > 0){
        return selection;
      }
      return false;
    }
    getCurrentSymbol(editor_id) {
      let editor = this.cm_editors[editor_id];
      if(editor === undefined){
        console.error("getCurrentSymbol: No editor corresponding to " + editor_id);
        return null;
      }
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
        return text.substring(start,end);
      }
    }
    undo(editor_id){
      let editor = this.cm_editors[editor_id];
      if(editor === undefined){
        console.error("undo: No editor corresponding to " + editor_id);
        return;
      }
      editor.undo();
    }
    redo(editor_id){
      let editor = this.cm_editors[editor_id];
      if(editor === undefined){
        console.error("redo: No editor corresponding to " + editor_id);
        return;
      }
      editor.redo();
    }
    isClean(editor_id){
      let editor = this.cm_editors[editor_id];
      if(editor === undefined){
        console.error("isClean: No editor corresponding to " + editor_id);
        return false;

      }
      return editor.getDoc().isClean();
    }
    markClean(editor_id){
      let editor = this.cm_editors[editor_id];
      if(editor === undefined){
        console.error("markClean: No editor corresponding to " + editor_id);
        return;
      }
      editor.getDoc().markClean();
    }
    clearUndo(editor_id){
      let editor = this.cm_editors[editor_id];
      if(editor === undefined){
        console.error("clearUndo: No editor corresponding to " + editor_id);
        return;
      }
      let doc = editor.getDoc();
      doc.clearHistory();
    }
    createEditor(editor_id,language_mode){
      let self = this;
      let activeCMEditor = CodeMirror.fromTextArea($(editor_id)[0],
       {
           matchBrackets: true,
           autoCloseBrackets: true,
           lineWrapping:true,
           viewportMargin:Infinity,
           autoFocus:true,
           lineNumbers:true,
           mode:language_mode,
           extraKeys: {
             "Cmd-G": function(){
               self.findNext();
             },
             "Ctrl-G": function(){
               self.findNext();
             },
             "Cmd-F": function(){
               self.focusFind();
             },
             "Ctrl-F": function(){
               self.focusFind();
             },
             "Ctrl-Z": function(){
               self.undo(editor_id);
             },
             "Cmd-Z": function(){
               self.undo(editor_id);
             },
             "Ctrl-E": function(){
               self.runRepl();
             },
             "Cmd-E": function(){
               self.runRepl()
             }
             }
       } );
      this.cm_editors[editor_id] = activeCMEditor;
      this.activateEditor(editor_id);
      return activeCMEditor;
    }
    runRepl(){
      setTimeout(function(){
      var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
      intp2.evaluate("(keyboard-repl)");
      return true;
    },15)
    }
    focusFind(){
      setTimeout(function(){
      var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
      intp2.evaluate("(focus-find)");
      return true;
    },15)
    }
    findNext(){
      setTimeout(function(){
      var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
      intp2.evaluate("(fronkensteen-editor-find-button_click)");
      return true;
    },15)
    }
    getText(editorname){
      let editor = this.cm_editors[editorname];
      if(editor === undefined){
          return null;
      }
      return editor.getDoc().getValue();
    }
    setText(editorname,value){
      let editor = this.cm_editors[editorname];
      if(editor === undefined){
          return null;
      }
      editor.getDoc().setValue(value);
    }
    setCursorPosition(editorname,line,column){
      let editor = this.cm_editors[editorname];
      if(editor === undefined){
        console.error("No editor found for " + editorname)
      }
      editor.getDoc().setCursor(line,column)
    }
    getCursorPosition(editorname){
      let editor = this.cm_editors[editorname];
      if(editor === undefined){
        console.error("No editor found for " + editorname)
      }
      let cursor = editor.getCursor("to");
      return [cursor.line,cursor.ch];
    }
    getLine(editorname,line_number){
      let editor = this.cm_editors[editorname];
      if(editor === undefined){
        console.error("No editor found for " + editorname)
      }
      return editor.getDoc().getLine(line_number);
    }
    scrollToLine(editorname,line){
      let editor = this.cm_editors[editorname];
      if(editor === undefined){
        console.error("No editor found for " + editorname);
        return;

      }
      var h = editor.getScrollInfo().clientHeight;
      var coords = editor.charCoords({line: line - 1, ch: 0}, "local");
      editor.scrollTo(null, coords.top);
    }
    escapeRegExp(s){
        return s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
    }
    destroyEditor(editor_id){
      let editor = this.cm_editors[editor_id];
      if(editor === undefined){
        console.error("destroyEditor: No editor corresponding to " + editor_id);
        return;
      }
      delete cm_editors[editor_id];
      editor.toTextArea();
    }
    getEditorIds(){
      return Object.keys(this.cm_editors);
    }
    focusEditor(editor_id){
      let editor = this.cm_editors[editor_id];
      if(editor === undefined){
        console.error("focusEditor: No editor corresponding to " + editor_id);
        return;
      }
      editor.focus();
    }
    refreshEditor(editor_id){
      let editor = this.cm_editors[editor_id];
      if(editor === undefined){
        console.error("refreshEditor: No editor corresponding to " + editor_id);
        return;
      }
      editor.refresh();
    }
    setCodeLanguage(newlanguage){
      this.codeLanguage = newlanguage;
    }
    getSelection(editorname){
      let editor = this.cm_editors[editorname];
      if(editor !== undefined){
        return editor.getSelection();
      }
      return null;
    }
    setSelection(editorname,start,end){
      let editor = this.cm_editors[editorname];
      if(editor !== undefined){
        return editor.setSelection(start,end);
      }
      return null;
    }

    replaceSelectedText(editorname,text,mode){
      let editor = this.cm_editors[editorname];
      if(editor !== undefined){
        return editor.replaceSelection(text,mode);
      }
      return null;

    }
    surroundSelectedText(editorname,preamble,postamble,mode){
      let editor = this.cm_editors[editorname];
      if(editor !== undefined){
        return editor.replaceSelection(preamble + editor.getSelection() + postamble,mode);
      }
      return null;
    }
    setFence(editorname,preamble,postamble){
      let editor = this.cm_editors[editorname];
      if(editor === undefined){
          return null;
      }
        var seltext = this.getSelection(editorname);
        if(seltext.length === 0){
          alert("No text selected.")
          return;
        };
        var restring = "^" + this.escapeRegExp(preamble) + ".*" + this.escapeRegExp(postamble) + "$";
        var fencre = new RegExp(restring);
        var fencelength = preamble.length + postamble.length;
        if(seltext.match(fencre)){
          this.replaceSelectedText(editorname,seltext.substring(preamble.length, seltext.length - postamble.length),"around");
        }
        else{
            this.surroundSelectedText(editorname,preamble,postamble,"around");
        }
        return true;
    }

    setLinePrefix(editorname,prefix){
      let editor = this.cm_editors[editorname];
      if(editor === undefined){
          return null;
      }
        var restring = this.escapeRegExp(prefix)
        var prefre = new RegExp("^" + restring);
        var start = editor.getCursor("from")
        var startLine = start.line;
        var startCh = start.ch;
        var end = editor.getCursor("to");
        var endCh = end.ch;
        var lineArr = editor.getValue().split("\n");
        var workingLine = lineArr[startLine];
        var prefixDelta;
        if(workingLine.match(prefre)){
           workingLine = workingLine.replace(prefre,"");
             prefixDelta = -prefix.length
        }
        else {
            workingLine = prefix + workingLine
            prefixDelta = prefix.length;
        }
        lineArr[startLine] = workingLine
        editor.setValue(lineArr.join("\n"));
        editor.setSelection({line:startLine, ch:0},{line:startLine,ch:endCh + prefixDelta})
        return true;
    }
    setLineSuffix(editorname,suffix){
      let editor = this.cm_editors[editorname];
      if(editor === undefined){
          return null;
      }
        var restring = this.escapeRegExp(suffix) + ".*"
        var suffre = new RegExp(restring + "$");
        var selectedLine = editor.getCursor("from").line;
        var lineArr = editor.getValue().split("\n");
        var workingLine = lineArr[selectedLine]
        if(workingLine.match(suffre)){
           workingLine = workingLine.replace(suffre,"")
        }
        else {
            workingLine = workingLine + suffix
        }
        lineArr[selectedLine] = workingLine
        editor.setValue(lineArr.join("\n"));
    }
    setItalic(editorname){
        this.setFence(editorname,"*","*");
    }
    setBold(editorname){
        this.setFence(editorname,"**","**");
    }
    setSuperscript(editorname){
        this.setFence(editorname,"^","^");
    }
    setSubscript(editorname){
        this.setFence(editorname,"~","~");
    }
    setStrikeout(editorname){
        this.setFence(editorname,"~~","~~");
    }
    setNote(editorname){
        this.setFence(editorname,"{{{","}}}");
    }
    setMath(editorname){
      this.setFence(editorname,"$$","$$");
    }
    multilineFence(editorname,prefix,suffix){
      let editor = this.cm_editors[editorname];
      if(editor === undefined){
          return;
      }
        var sel = this.getSelection(editorname);
        var fencere = new RegExp("^" + this.escapeRegExp(prefix) + "((.|\n)*)" + this.escapeRegExp(suffix) + "$","m");
        if(sel.match(fencere)){
            this.replaceSelectedText(editorname, sel.replace(fencere,"$1"),"around");
        }
        else{
          this.replaceSelectedText(editorname, prefix + sel + suffix, "around")
        }

    }
    setBlockPrefix(editorname,prefix,increment, space){
      let editor = this.cm_editors[editorname];
      if(editor === undefined){
          return null;
      }
        var seltext = this.getSelection(editorname);
        var lines = seltext.split("\n");
        var selectionLength = 0;
        var prefixmatch = prefix + space;
        for(var i = 0; i < lines.length; i++){
          if(lines[i] !== ""){
            if(lines[i].indexOf(prefixmatch) === 0){
                lines[i] = lines[i].substring(prefixmatch.length);
            }
            else{
                lines[i] = prefixmatch + lines[i];
            }
            if(increment === true){
                prefix = prefix + 1;
                prefixmatch = prefix + space;
            }
          }
        }
        seltext = lines.join("\n");
        this.replaceSelectedText(editorname,seltext,"around");
    }
    setBulletedList(editorname){
        this.prefixRegion(editorname,"*",false," ")
    }

    setNumberedList(editorname){
         this.prefixRegion(editorname,1,true,". ")
    }
    setBlockQuote(editorname){
         this.prefixRegion(editorname,">",false," ");
    }
    setPoetry(editorname){
        this.prefixRegion(editorname,"|",false," ");
    }
    setCode(editorname){
        var seltext = this.getSelection(editorname);
        if(seltext.indexOf("\n") !== -1){
            this.multilineFence(editorname,"``` " + this.codeLanguage + "\n","\n```");
        }
        else {
            this.setFence(editorname,"`","`");
        }
    }
    prefixRegion(editorname,prefix,increment,space){
        var seltext = this.getSelection(editorname);
        if(seltext.indexOf("\n") === -1){
            this.setLinePrefix(editorname,prefix + space);
        }
        else {
            this.setBlockPrefix(editorname,prefix,increment,space);
        }
    }
    setCenter(editorname){
        this.prefixRegion(editorname,"-><-",false," ");
    }
    setJustify(editorname){
        this.prefixRegion(editorname,"<->",false," ");
    }
    setAlignRight(editorname){
        this.prefixRegion(editorname,"->",false," ");
    }
    setAlignLeft(editorname){
        this.prefixRegion(editorname,"<-",false," ");
    }
    setComment(editorname){
        this.prefixRegion(editorname,";",false," ");
    }
    setHeading(editorname,prefix){
        this.prefixRegion(editorname,prefix,false," ");
    }
    replace(editorname,replacement){
      let editor = this.cm_editors[editorname];
      if(editor === undefined){
          return null;
      }
      editor.replaceSelection(replacement,"around");
      return true;
  }
  goToEnd(editorname){
    let editor = this.cm_editors[editorname];
    if(editor === undefined){
        return null;
    }
    editor.execCommand("goDocEnd");
  }
  find(editor_name,search_lemma,start,fold_case,is_regex,search_backward){
    let result = false;
    let doc;
    let editor = this.cm_editors[editor_name];
    if(editor === undefined){
      console.error("editDriver.find(): No editor corresponding to " + editor_name);
      return false;
    }
      doc = editor.getDoc();
      if(is_regex === true){ // Regexp search
          if(search_backward === false){
            result = CodeMirror.commands.searchRegexpForward(doc,new RegExp(search_lemma),start);
          }
          else{
            result =  CodeMirror.commands.searchRegexpBackward(doc,new RegExp(search_lemma),start);
         }
      }
      else { // String search.
        if(search_backward === false){
          result = CodeMirror.commands.searchStringForward(doc,search_lemma,start, fold_case);
        }
        else{
          result =  CodeMirror.commands.searchStringBackward(doc,search_lemma,start,fold_case);
       }
      }
    if(result !== undefined){
      doc.setSelection(result.from,result.to);
      return [result.from.line,result.from.ch,result.to.line,result.to.ch];
    }
    else{
      return false;
    }
}
}

let editDriver = new CMEditorDriver();
