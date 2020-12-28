Fronkensteen.editDriver = new class  {
    constructor(){
    }

    shrinkChar(editor_id, direction){
      let selection = $(editor_id).getSelection()
      let currentStart = selection.start;
      let currentEnd = selection.end;
      if(direction === "right"){
        currentEnd = currentEnd - 1;
        if(currentEnd < currentStart){
          currentEnd = currentStart;
        }
      }
      else{
        currentStart = currentStart + 1;
        if(currentStart > currentEnd){
          currentStart = currentEnd;
        }
      }
      $(editor_id).setSelection(currentStart,currentEnd);
    }
    growChar(editor_id, direction){
      let textlength = $(editor_id).val().length;
      let selection = $(editor_id).getSelection()
      let currentStart = selection.start;
      let currentEnd = selection.end;
      if(direction === "right"){
        currentEnd = currentEnd + 1;
        if(currentEnd >= textlength){
          currentEnd = textlength - 1;
        }
      }
      else{
        currentStart = currentStart - 1;
        if(currentStart < 0){
          currentStart = 0;
        }
      }
      $(editor_id).setSelection(currentStart,currentEnd);
    }
    isEditorSpace(char){
      if((char === " ")|| (char === "\n") || (char === "\r") || (char === "\t"))
        return true;
      return false;
    }
    growWord(editor_id, direction){
      let text = $(editor_id).val();
      let textlength = text.length;
      let selection = $(editor_id).getSelection()
      let currentStart = selection.start;
      let currentEnd = selection.end;
      if(direction === "right"){
        currentEnd = currentEnd + 1;
        while(this.isEditorSpace(text.charAt(currentEnd)) && (currentEnd < textlength)) {
          currentEnd = currentEnd + 1;
        }
        while(!this.isEditorSpace(text.charAt(currentEnd)) && (currentEnd < textlength)) {
          currentEnd = currentEnd + 1;
        }
        if(currentEnd >= textlength){
          currentEnd = textlength - 1;
        }
      }
      else{
        currentStart = currentStart - 1;
          while(this.isEditorSpace(text.charAt(currentStart)) && (currentStart > 0)) {
            currentStart = currentStart - 1;
          }
          while(!this.isEditorSpace(text.charAt(currentStart)) && (currentStart > 0)) {
            currentStart = currentStart - 1;
          }
          currentStart = currentStart + 1;
      }
      $(editor_id).setSelection(currentStart,currentEnd);
    }
    arrowKey(editor_id,direction){
      console.log("arrowKey: direction is " + direction)
      let currentStart = $(editor_id).getSelection().start
      switch(direction){
        case "left":
          $(editor_id).setSelection(currentStart - 1);
          break;
        case "right":
            $(editor_id).setSelection(currentStart + 1);
            break;
        }
    }
    activateEditor(editor_id){
      setTimeout(function(){
      $(editor_id).focus();
    },50);
    }
    showEditor(editor_id){
      $(editor_id).parent().show();
    }
    hideEditor(editor_id){
      $(editor_id).parent().hide();
    }
    evalSchemeBuffer(editor_id){
      let result = "";
      let text = $(editor_id).val();
      Fronkensteen.parseSchemeProcedureDefs("(defined in editor or REPL)", text);
      var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
       result = " ; value: " + intp2.evaluate(text) + Fronkensteen.CumulativeErrors.join("\n");
      Fronkensteen.CumulativeErrors = [];
      $(editor_id).val(text + result);
    }
    getSchemeSelection(editor_id){
      let result = "";
      let text = $(editor_id).val();
      let selection = $(editor_id).getSelection();
      let selected_text;
      let expr;
      if(selection.text !== ""){
        selected_text = selection.text;
      }
      else{
        let index = selection.start;
        let preceding = text.substring(0,index);
        selected_text = "";
        let lastchar = text.charAt(preceding.length - 1);
        if(lastchar === ")"){
          selected_text = Fronkensteen.eval_extract_sexp(preceding);
        }
        else if(lastchar === "\""){
          selected_text = Fronkensteen.eval_extract_string(preceding)
        }
        else {
          selected_text = Fronkensteen.eval_extract_atom(preceding)
        }
      }
      console.log("returning " + selected_text)
      return selected_text;
    }
    evalSchemeSelection(editor_id){
        let result = "";
        let selection = this.getSchemeSelection(editor_id);
        if(selection === null){
          result = " ; No balanced expression found preceding cursor."
        }
        else{
          let code = Fronkensteen.renderREPLTemplate(selection);
          Fronkensteen.parseSchemeProcedureDefs("(defined in editor or REPL)", code);
          var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
          result = " ; value:  " + intp2.evaluate(code) + Fronkensteen.CumulativeErrors.join("\n");
          Fronkensteen.CumulativeErrors = [];
        }
      $(editor_id).replaceSelectedText($(editor_id).getSelection().text + result,"select");

    }
    selectAll(editor_id){
      let text = $(editor_id).val();
      $(editor_id).setSelection(0,(text.length() - 1));
    }
    evalJSSelection(editor_id){
      let startSelection = $(editor_id).getSelection()
      let selected_text = startSelection.text;
      let result;
      if(selected_text.length > 0){
        try{
          Fronkensteen.parseJSProcedureDefs("(defined in editor or REPL)", selected_text);
          result = eval.call(window, selected_text)
          if(result === undefined){
            result = "";
          }
          else {
            result = " // " + result;
          }
        }
        catch(err){
          result = " // " + err.message;
        }
      }
      else {
        alert("Evaluate JavaScript: nothing selected.")
        result =  "";
      }
      $(editor_id).replaceSelectedText(selected_text + result);
      $(editor_id).setSelection(startSelection.end + 1,startSelection.end + result.length + 1)

    }
    getProcedureAtCursor(editor_id){
      let text = $(editor_id).val();
      let selection = $(editor_id).getSelection();
      if(selection.text.length <= 0){
        let index = selection.start;
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
      let text = $(editor_id).val();
      let selection = $(editor_id).getSelection();
      let expr;
      if(selection.text.length > 0){
        let expr = selection.text;
      }
      else{
        let index = selection.start;
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
      alert("Undo not implemented yet")
    }
    redo(editor_id){
        alert("Redo not implemented yet")

    }
    isClean(editor_id){
      alert("isClean not implemented yet");
      return false;
    }
    markClean(editor_id){
      alert("markClean not implemented yet");
    }
    clearUndo(editor_id){
      alert("clearUndo not implemented yet");
    }
    createEditor(editor_id,language_mode){
      this.activateEditor(editor_id);
      return editor_id;
    }

    save(){
        var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
        intp2.evaluate("(#fronkensteen-editor-save-button_click)")
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
      intp2.evaluate("(#find-next-button_click)");
      return true;
    },15)
  }
    getText(editor_id){
      return $(editor_id).val();
    }
    setText(editor_id,value){
      $(editor_id).val(value);
    }
    setCursorPosition(editor_id,line,column){
      let text = $(editor_id).val();
      let lines = text.split("\n");
      let lineoffset = 0;
      for(var currentline = 0; currentline < line; currentline++){
        lineoffset = lineoffset +  lines[currentline].length + 1;
      }
      lineoffset = lineoffest + column;
      $(editor_id).setSelection(lineoffset);
    }
    getCursorPosition(editor_id,cursorSelector){
      let selection = $(editor_id).getSelection();
      let limit;
      if(cursorSelector === "to"){
        limit = selection.end;
      }
      else {
        limit = selection.start;
      }
      let text = $(editor_id).val();
      let lines = text.split("\n");
      let lineoffset = 0;
      for(var currentline = 0; currentline < line; currentline++){
        let linelength = lines[currentline].length() + 1;
        if(lineoffset + linelength > limit){
          break;
        }
        lineoffset = lineoffset +  linelength;
      }
      return [currentline - 1,limit - lineoffset];
    }

    getNextCursorPosition(editor_id,cursorSelector){
      let cursorpos = Fronkensteen.editDriver.getCursorPosition(editor_id,cursorSelector);
      let line = Frokensteen.editDriver.getLine(cursorpos[0]);
      if(cursorSelector === "from"){
        cursorpos[1] = cursorpos[1] + 1;
        if(cursorpos[1] >= line.length){
        cursorpos[0] = cursorpos[0] + 1;
        cursorpos[1] = 0;
        }
      }
      if(cursorSelector === "to"){
        cursorpos[1] = cursorpos[1] - 1;
        if(cursorpos[1] < 0){
        cursorpos[0] = cursorpos[0] - 1;
        if(  cursorpos[0] < 0){
            cursorpos[0] = 0;
        }
        }
      }
      return cursorpos;
    }

    getLine(editorname,line_number){
      let textlines = $(editorname).val().split("\n")
      if(textlines.length > line_number){
        return textlines[line_number]
      }
      console.log("editDriver.getLine: tried to get a line past end of buffer");
      return false;
    }
    scrollToLine(editorname,toline){
      let textlines = $(editorname).val().split("\n")
      let offset = 0;
      for(var line = 0; line <= toline; line++){
        offset = offset + textlines[line].length + 1;
      }
      $(editor_id).setSelection(offset);
      $(editor_id).blur();
      $(editor_id).focus();
    }

    escapeRegExp(s){
        return s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
    }

    destroyEditor(editor_id){
      // Nothing needed for plain textarea editor.
    }
    getEditorIds(){
      console.log("getEditorIds: not implemented.")
      return false;
    }
    focusEditor(editor_id){
      $(editor_id).focus()
    }

    refreshEditor(editor_id){
       // Nothing needed for plain textarea editor.
    }
    setCodeLanguage(newlanguage){
        // Not applicable for plain textarea editor.
    }
    getSelection(editorname){
      return  $(editor).getSelection();
    }
    setSelection(editorname,start,end){
      $(editorname).setSelection(start,end);
    }

    replaceSelectedText(editorname,text,mode){
      $(editorname).replaceSelectedText(text,mode);
      return null;

    }
    surroundSelectedText(editorname,preamble,postamble,mode){
      $(editorname).surroundSelectedText(preamble,postamble,mode);
      let sel = $(editorname).getSelection();
      let start = sel.start - preamble.length;
      let end = sel.end + postamble.length;
      $(editorname).setSelection(start,end);
    }
    setFence(editorname,preamble,postamble){
        var seltext = $(editorname).getSelection(editorname).text;
        if(seltext.length === 0){
          alert("No text selected.")
          return;
        };
        var restring = "^" + this.escapeRegExp(preamble) + ".*" + this.escapeRegExp(postamble) + "$";
        var fencre = new RegExp(restring);
        var fencelength = preamble.length + postamble.length;
        if(seltext.match(fencre)){
          this.replaceSelectedText(editorname,seltext.substring(preamble.length, seltext.length - postamble.length),"select");
        }
        else{
            this.surroundSelectedText(editorname,preamble,postamble,"select");
        }
        return true;
    }

    setLinePrefix(editorname,prefix){
        let sel = $(editorname).getSelection();
        var restring = this.escapeRegExp(prefix)
        var prefre = new RegExp("^" + restring);
        var lineArr = sel.text.split("\n");
        for(line = 0; line < lineArr.length; line++){
          if(lineArr[line].match(prefre)){
            lineArr[line] = lineArr[line].replace(prefre,"");
          }
          else {
            lineArr[line] = prefix + lineArr[line];
          }
        }
        $(editorname).replaceSelectedText(lineArr.join("\n"),"select");
        return true;
    }
    setLineSuffix(editorname,suffix){
        let sel = $(editorname).getSelection();
        var restring = this.escapeRegExp(suffix)
        var prefre = new RegExp(restring + "$");
        var lineArr = sel.text.split("\n");
        for(line = 0; line < lineArr.length; line++){
          if(lineArr[line].match(prefre)){
            lineArr[line] = lineArr[line].replace(prefre,"");
          }
          else {
            lineArr[line] =  lineArr[line] + suffix;
          }
        }
        $(editorname).replaceSelectedText(lineArr.join("\n"),"select");
        return true;
    }
    setItalic(editorname){
        this.setFence(editorname,"[i "," i]");
    }
    setBold(editorname){
          this.setFence(editorname,"[b "," b]");;
    }
    setSuperscript(editorname){
        this.setFence(editorname,"[sup "," sup]");
    }
    setSubscript(editorname){
          this.setFence(editorname,"[sub "," sub]");
    }

    setNote(editorname){
        this.setFence(editorname,"[note "," note]");
    }
    setInlineMath(editorname){
      this.setFence(editorname,"[latex "," latex]");
    }
    setDisplayMath(editorname){
      this.setFence(editorname,"[!latex "," latex!]");
    }

    multilineFence(editorname,prefix,suffix){
      let sel = $(editorname).getSelection();
        var fencere = new RegExp("^" + this.escapeRegExp(prefix) + "((.|\n)*)" + this.escapeRegExp(suffix) + "$","m");
        if(sel.text.match(fencere)){
            $(editorname).replaceSelectedText( sel.text.replace(fencere,"$1"),"select");
        }
        else{
          $(editorname).replaceSelectedText(prefix + sel.text + suffix,"select")
        }

    }
    setBlockPrefix(editorname,prefix,increment, space){
        var seltext = $(editorname).getSelection().text;
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
        $(editorname).replaceSelectedText(seltext,"select");
    }
    setBulletedList(editorname){
      this.setFence(editorname,"[ol "," ol]");
    }

    setNumberedList(editorname){
        this.setFence(editorname,"[ul "," ul]");
    }
    setBlockQuote(editorname){
        this.setFence(editorname,"[bq "," bq]");
    }
    setPoetry(editorname){
        this.multilineFence(editorname,"[poetry "," poetry]");
    }
    setCode(editorname){
        var seltext = $(editorname).getSelection().text;
        if(seltext.indexOf("\n") !== -1){
            this.multilineFence(editorname,"[!code " + this.codeLanguage + "\n"," code!]");
        }
        else {
          this.setFence(editorname,"[code "," code]");
        }
    }
    prefixRegion(editorname,prefix,increment,space){
        var seltext = $(editorname).getSelection().text;
        if(seltext.indexOf("\n") === -1){
            this.setLinePrefix(editorname,prefix + space);
        }
        else {
            this.setBlockPrefix(editorname,prefix,increment,space);
        }
    }
    setCenter(editorname){
        this.multilineFence(editorname,"[pc "," pc]");
    }
    setJustify(editorname){
        this.multilineFence(editorname,"[pj "," pj]");
    }
    setAlignRight(editorname){
        this.multilineFence(editorname,"[pr "," pr]");;
    }
    setAlignLeft(editorname){
        this.multilineFence(editorname,"[pl "," pl]");
    }
    setJavaScript(editorname){
        this.multilineFence(editorname,"[javascript "," javascript]");
    }
    setComment(editorname){
        this.prefixRegion(editorname,";",false," ");
    }
    setHeading(editorname,headingSize){
        this.setFence(editorname,"[h" + headingSize + " "," h" + headingSize + "]")
    }
    setStrikeout(editorname){
        this.setFence(editorname,"[strike "," strike]");
    }
    setUnderline(editorname){
        this.setFence(editorname,"[u "," u]");
    }
    setIcon(editorname){
      this.setFence(editorname,"[icon "," icon]");
    }
    setSmallCaps(editorname){
        this.setFence(editorname,"[sc ", " sc]")
    }
    setLink(editorname){
        this.setFence(editorname,"[link ", " link]")
    }
    setMenu(editorname){
        this.setFence(editorname,"[menu ", " menu]")
    }
    setImage(editorname){
        this.setFence(editorname,"[img ", " img]")
    }
    setLabel(editorname){
        this.setFence(editorname,"[label ", " label]")
    }
    setTextSize(editorname,size){
        this.setFence(editorname,"[" + size + " ", " " + size + "]")
    }
    setIcon(editorname,iconName){
        this.setFence(editorname,"[icon ",  " icon]")
    }
    replace(editorname,replacement){
      $(editorname).replaceSelection(replacement,"select");
      return true;
  }
  goToEnd(editorname){
    var textlength = $(editorname).val().length;
    $(editorname).setSelection(textlength);
  }
  find(editor_name,search_lemma,start,fold_case,is_regex,search_backward,wrap){
    console.log("Not implemented yet");
    return [false,false];
    /*
    let result = [false,false];
    let doc;
    let editor = this.cm_editors[editor_name];
    console.log("start is " + JSON.stringify(start))
    if(editor === undefined){
      console.error("Fronkensteen.editDriver.find(): No editor corresponding to " + editor_name);
      return [false,false];
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
      editor.scrollIntoView(result.to,100);
      return [true, false];
    }
    else{
      if(wrap){
        if((start[0] !== 0) && (start[1] !== 0)){
          let wrapped_pos = {line:0,ch:0};
          if(search_backward === true){
            let nlines = doc.lineCount();
            wrapped_pos = {line: nlines - 1,ch:doc.getLine(nlines-1).length - 1}
          }
          let wrapped_result =  this.find(editor_name,search_lemma,wrapped_pos,fold_case,is_regex,search_backward,false);
          if(wrapped_result[0] === true){
            wrapped_result[1] = true;
          }
          return wrapped_result;
        }
      }
      return [false,false];
    } */
}
}
