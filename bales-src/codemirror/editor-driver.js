
class CMEditorDriver {
    constructor(){
      this.codeLanguage = "markdown";
    }
    getText(editorname){
      let editor = cm_editors[editorname];
      if(editor === undefined){
          return null;
      }
      editor.focus();
      return editor.getDoc().getValue();
    }
    setText(editorname,value){
      let editor = cm_editors[editorname];
      if(editor === undefined){
          return null;
      }
      editor.getDoc().setValue(value);
      editor.focus();
      setTimeout(function(){
        editor.refresh();
      },1)
    }
    setCursorPosition(editorname,line,column){
      let editor = cm_editors[editorname];
      if(editor === undefined){
        console.error("No editor found for " + editorname)
      }
      editor.focus();
      editor.getDoc().setCursor(line,column)
    }
    getCursorPosition(editorname){
      let editor = cm_editors[editorname];
      if(editor === undefined){
        console.error("No editor found for " + editorname)
      }
      let cursor = editor.getCursor("to");
      editor.focus();
      return [cursor.line,cursor.ch];
    }
    getLine(editorname,line_number){
      let editor = cm_editors[editorname];
      if(editor === undefined){
        console.error("No editor found for " + editorname)
      }
      editor.focus();
      return editor.getDoc().getLine(line_number);
    }
    scrollToLine(editorname,line){
      let editor = cm_editors[editorname];
      if(editor === undefined){
        console.error("No editor found for " + editorname);
        return;

      }
      var h = editor.getScrollInfo().clientHeight;
      var coords = editor.charCoords({line: line - 1, ch: 0}, "local");
      editor.focus();
      editor.scrollTo(null, coords.top);

    }
    escapeRegExp(s){
        return s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
    }
    setCodeLanguage(newlanguage){
      this.codeLanguage = newlanguage;
    }
    getSelection(editorname){
      let editor = cm_editors[editorname];
      if(editor !== undefined){
        editor.focus();
        return editor.getSelection();
      }
      return null;
    }
    setSelection(editorname,start,end){
      let editor = cm_editors[editorname];
      if(editor !== undefined){
        editor.focus();
        return editor.setSelection();
      }
      return null;
    }

    replaceSelectedText(editorname,text,mode){
      let editor = cm_editors[editorname];
      if(editor !== undefined){
        editor.focus();
        return editor.replaceSelection(text,mode);
      }
      return null;

    }
    surroundSelectedText(editorname,preamble,postamble,mode){
      let editor = cm_editors[editorname];
      if(editor !== undefined){
        editor.focus()
        return editor.replaceSelection(preamble + editor.getSelection() + postamble,mode);
      }
      return null;
    }
    setFence(editorname,preamble,postamble){
      let editor = cm_editors[editorname];
      if(editor === undefined){
          return null;
      }
      editor.focus();
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
      let editor = cm_editors[editorname];
      if(editor === undefined){
          return null;
      }
        editor.focus();
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
      let editor = cm_editors[editorname];
      if(editor === undefined){
          return null;
      }
        editor.focus();
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
      let editor = cm_editors[editorname];
        var sel = this.getSelection(editorname);
        editor.focus();
        var fencere = new RegExp("^" + this.escapeRegExp(prefix) + "((.|\n)*)" + this.escapeRegExp(suffix) + "$","m");
        if(sel.match(fencere)){
            this.replaceSelectedText(editorname, sel.replace(fencere,"$1"),"around");
        }
        else{
          this.replaceSelectedText(editorname, prefix + sel + suffix, "around")
        }

    }
    setBlockPrefix(editorname,prefix,increment, space){
      let editor = cm_editors[editorname];
      if(editor === undefined){
          return null;
      }
        editor.focus();
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
    setHeading(headingprefix, editorname){
        this.prefixRegion(editorname,headingprefix,false," ");
    }
    replace(editorname,replacement){
      let editor = cm_editors[editorname];
      if(editor === undefined){
          return null;
      }
      editor.focus();
      editor.replaceSelection(replacement,"around");
      return true;
  }
  goToEnd(editorname){
    let editor = cm_editors[editorname];
    if(editor === undefined){
        return null;
    }
    editor.focus();
    editor.execCommand("goDocEnd");
  }
  replaceAll(editorname,text,replacement,ignoreCase){
      let editor = cm_editors[editorname];
      if(editor === undefined){
          return null;
      }
      editor.focus();
      let userCursor = editor.getCursor();
      let searchCursor = editor.getSearchCursor(text,{line:0,ch:0},{caseFold:ignoreCase});
      while(searchCursor.findNext() === true){
         editor.setSelection(searchCursor.from(), searchCursor.to());
         editor.replaceSelection(replacement,"around");
      }

    return true;
  }
  find(editor_name,search_lemma,start,fold_case,is_regex,search_backward){
    let result = false;
    let doc;
    let editor = cm_editors[editor_name];
    if(editor === undefined){
      console.error("editDriver.find(): No editor corresponding to " + editor_name);
      return false;
    }
      editor.focus();
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
