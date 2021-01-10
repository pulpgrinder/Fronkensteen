Fronkensteen.editDriver = new class  {
    constructor(){
    }
    editor_undo_stacks = {}
    editor_redo_stacks = {}
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

  shrinkWord(editor_id, direction){
      let text = $(editor_id).val();
      let textlength = text.length;
      let selection = $(editor_id).getSelection()
      let currentStart = selection.start;
      let currentEnd = selection.end;
      if(direction === "right"){
        currentEnd = currentEnd - 1;
        while(this.isEditorSpace(text.charAt(currentEnd)) && (currentEnd >= currentStart)) {
          currentEnd = currentEnd - 1;
        }
        while(!this.isEditorSpace(text.charAt(currentEnd)) && (currentEnd >= currentStart)) {
          currentEnd = currentEnd - 1;
        }
      }
      else{
        console.log("shrinking word from left")
        currentStart = currentStart + 1;
          while(!this.isEditorSpace(text.charAt(currentStart)) && (currentStart <= currentEnd)) {
            currentStart = currentStart + 1;
          }
          while(this.isEditorSpace(text.charAt(currentStart)) && (currentStart <= currentEnd)) {
            currentStart = currentStart + 1;
          }

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
      let oldVal = $(editor_id).val();
      let currentSelection = $(editor_id).getSelection();
      let patchData = Fronkensteen.editDriver.editor_undo_stacks[editor_id].pop();
      if(patchData !== undefined){
        let patch = patchData.patch;
        let oldSelection = patchData.selection;
        let undoneText = dmp.patch_apply(patch,oldVal)[0];
        Fronkensteen.editDriver.editor_redo_stacks[editor_id].push({patch:dmp.patch_make(undoneText,oldVal),selection:currentSelection})
        $(editor_id).val(undoneText);
        $(editor_id).setSelection(oldSelection.start, oldSelection.end);
        $(editor_id).blur();
        $(editor_id).focus();
      }
    }
    redo(editor_id){
      let oldVal = $(editor_id).val();
      let currentSelection = $(editor_id).getSelection();
      let patchData = Fronkensteen.editDriver.editor_redo_stacks[editor_id].pop();
      if(patchData !== undefined){
        let patch = patchData.patch;
        let oldSelection = patchData.selection;
        let redoneText = dmp.patch_apply(patch,oldVal)[0];
        Fronkensteen.editDriver.editor_undo_stacks[editor_id].push({patch:dmp.patch_make(redoneText,oldVal),selection:currentSelection})
        $(editor_id).val(redoneText);
        $(editor_id).setSelection(oldSelection.start, oldSelection.end);
        $(editor_id).blur();
        $(editor_id).focus();
      }
    }
    isClean(editor_id){
      alert("isClean not implemented yet");
      return false;
    }
    markClean(editor_id){
      alert("markClean not implemented yet");
    }
    clearUndo(editor_id){
      Fronkensteen.editDriver.editor_undo_stacks[editor_id] = [];
      Fronkensteen.editDriver.editor_redo_stacks[editor_id] = [];
      Fronkensteen.editDriver.prestageTextChange(editor_id)
    }
    markInsert(editor_id){

    }
    insertText(editor_id,text){
      Fronkensteen.editDriver.prestageTextChange(editor_id);
      let oldVal = $(editor_id).val();
      let oldSel = $(editor_id).getSelection()
      let newVal = oldVal.slice(0, oldSel.start) + text + oldVal.slice(oldSel.end,oldVal.length);
      $(editor_id).val(newVal);
      let newSelectionStart = oldSel.start + text.length;
      $(editor_id).setSelection(newSelectionStart,newSelectionStart);
      Fronkensteen.editDriver.postProcessTextChange(editor_id);
      Fronkensteen.editDriver.editor_redo_stacks[editor_id] = [];
    }
    prestageTextChange(editor_id){
      Fronkensteen.editDriver.keyBefore = { val: $(editor_id).val(),selection:$(editor_id).getSelection()}
    }
    postProcessTextChange(editor_id){
        let newText = $(editor_id).val();
        let newSelection = $(editor_id).getSelection();
        let oldText = Fronkensteen.editDriver.keyBefore.val
        let oldSelection = Fronkensteen.editDriver.keyBefore.selection;
        if((newText === oldText) && (oldSelection === newSelection)){
          return;
        }
        let patchVal = dmp.patch_make(newText,oldText);
        if(patchVal === []){
          return;
        }
        console.log(dmp.patch_toText(patchVal))
        Fronkensteen.editDriver.editor_undo_stacks[editor_id].push({patch:patchVal,selection:oldSelection})
    }
    createEditor(editor_id,language_mode){
      $(editor_id).setSelection(0,0)
      if(this.editor_undo_stacks[editor_id] === undefined){
        this.editor_undo_stacks[editor_id] = [];
      }
      if(this.editor_redo_stacks[editor_id] === undefined){
        this.editor_redo_stacks[editor_id] = [];
      }
      $(editor_id).on("beforeinput",function(e){
        Fronkensteen.editDriver.prestageTextChange(editor_id);
        return true;
      })
        $(editor_id).on("input",function(e){
          Fronkensteen.editDriver.postProcessTextChange(editor_id);
          Fronkensteen.editDriver.editor_redo_stacks[editor_id] = [];
          return true;
        })
      $(editor_id).on("keydown",function(e){
        if(e.keyCode === 9){
          e.preventDefault();
          Fronkensteen.editDriver.insertText(editor_id,"    ");
          return false;
        }
       else if((e.keyCode === 90) && ((e.metaKey === true) || (e.ctrlKey === true))) {
          if(e.shiftKey === false){
            Fronkensteen.editDriver.undo(editor_id)
          }
          else {
            Fronkensteen.editDriver.redo(editor_id)
          }
          return false;
        }
        else if((e.keyCode === 89) &&  ((e.metaKey === true) || (e.ctrlKey === true))){
          Fronkensteen.editDriver.redo(editor_id)
        }
      })
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
    getSelectedText(editor_id){
      let selection = $(editor_id).getSelection();
      return selection.text;
    }
    setText(editor_id,value){
      this.prestageTextChange(editor_id);
      $(editor_id).val(value);
      this.postProcessTextChange(editor_id)
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
      console.log("editorname is " + editorname);
      console.log("toline is " + toline)
      let textlines = $(editorname).val().split("\n")
      let offset = 0;
      for(var line = 0; line <= toline; line++){
        offset = offset + textlines[line].length + 1;
      }
      $(editorname).setSelection(offset);
      $(editorname).blur();
      $(editorname).focus();
    }
    scrollToSelection(editorname){
        $(editorname).blur();
        $(editorname).focus();
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
  find(editor_id,search_lemma,start,fold_case,is_regex,search_backward,wrap, is_wrapped){
    console.log("start = " + start);
    let text =  $(editor_id).val();
    let re;
    let remod;
    if(fold_case === true){
      remod = "gi";
    }
    else{
      remod = "g";
    }
    if(is_regex === true){ // Regexp search
        re = RegExp(search_lemma,remod);
    }
    else{
      re = RegExp(Fronkensteen.escapeRegExp(search_lemma),remod);
    }
    let selectionStart;
    let selectionEnd;
    if(start === "start"){
      $(editor_id).setSelection(0,0);
    }
    if(start === "end"){
      $(editor_id).setSelection(text.length - 1,text.length - 1);
    }
    let selection = $(editor_id).getSelection()
    let currentStart = selection.start;
    let currentEnd = selection.end;
    console.log("currentStart = " + currentStart);
    console.log("currentEnd = " + currentEnd);

    let occurrences = [];
    let result;
    while((result = re.exec(text)) !== null){
      occurrences.push({"string": result[0],"index":result.index})
    };
    console.log("There are " + occurrences.length + " occurrences");
    for(var i = 0; i < occurrences.length; i++){
      console.log("string: " + occurrences[i].string + " index: " + occurrences[i].index + "\n")
    }
    if(occurrences.length === 0){
      return false;
    }
    if((start === "start") || (start === "after")){
        let occ_index = 0;
        while((occ_index < occurrences.length) && (occurrences[occ_index].index <= currentStart)){
          occ_index = occ_index + 1;
        }
        if(occ_index === occurrences.length){
          if(is_wrapped){
            return false;
          }
          $(editor_id).setSelection(0,0);
          return this.find(editor_id,search_lemma,start,fold_case,is_regex,search_backward,wrap, true)
        }
        console.log("found at " + occurrences[occ_index].index)
        console.log("length is " + occurrences[occ_index].string.length)
          let highlightStart = occurrences[occ_index].index;
          let highlightEnd = highlightStart + occurrences[occ_index].string.length;
          $(editor_id).setSelection(highlightStart, highlightEnd);
          $(editor_id).blur();
          $(editor_id).focus();
        if(is_wrapped){
          return "wrapped"
        }
        return true;
      }
    else{
      let occ_index = occurrences.length - 1;
      while((occ_index >= 0) && (occurrences[occ_index].index >= currentStart)){
        occ_index = occ_index - 1;
      }
      if(occ_index === -1){
        if(is_wrapped){
          return false;
        }
        $(editor_id).setSelection(text.length - 1, text.length - 1)
        return this.find(editor_id,search_lemma,"before",fold_case,is_regex,search_backward,wrap, true)
      }
      let highlightStart = occurrences[occ_index].index;
      let highlightEnd = highlightStart + occurrences[occ_index].string.length;
      $(editor_id).setSelection(highlightStart, highlightEnd);
      $(editor_id).blur();
      $(editor_id).focus();
      if(is_wrapped){
        return "wrapped"
      }
      return true;
    }
  }
}
