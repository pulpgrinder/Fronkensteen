// string-extensions.js.
// String-related extension procedures for BiwaScheme
// Copyright 2018-2020 by Anthony W. Hursh
// MIT License.

Fronkensteen.prettyJSON = function(text){
  text = text.replace(/\{/g,"{\n");
  text = text.replace(/\}/g,"}\n");
  text = text.replace(/\,/g,",\n");
  return text;
}



BiwaScheme.define_libfunc("decode-base-32",1,1, function(ar){
  // Encodes the string given in ar[0] as a URI.
  return base32.decode(ar[0]);
});

BiwaScheme.define_libfunc("encode-base-32",1,1, function(ar){
  // Encodes the string given in ar[0] as a URI.
  return base32.encode(ar[0]);
});
BiwaScheme.define_libfunc("decode-base-64",1,1, function(ar){
  // Encodes the string given in ar[0] as a URI.
  return atob(ar[0]);
});

BiwaScheme.define_libfunc("encode-base-64",1,1, function(ar){
  // Encodes the string given in ar[0] as a URI.
  return btoa(ar[0]);
});
BiwaScheme.define_libfunc("encode-uri",1,1, function(ar){
  // Encodes the string given in ar[0] as a URI.
  return encodeURI(ar[0]);
});

BiwaScheme.define_libfunc("encode-uri-component",1,1, function(ar){
  // Encodes the string given in ar[0] as a URI component.
  return encodeURIComponent(ar[0]);
});


BiwaScheme.define_libfunc("decode-uri",1,1, function(ar){
  // Decodes the URI given in ar[0] to an unescaped string.
  return decodeURI(ar[0]);
});

BiwaScheme.define_libfunc("decode-uri-component",1,1, function(ar){
  // Decodes the URI component given in ar[0] to an unescaped string.
  return decodeURIComponent(ar[0]);
});


BiwaScheme.define_libfunc("escape-html", 1, 1, function(ar){
    // Takes the string in ar[0] and replaces HTML special characters
    // with their corresponding entities.
    BiwaScheme.assert_string(ar[0]);
    return Fronkensteen.escapeHTML(ar[0]);
});

BiwaScheme.define_libfunc("unescape-html", 1, 1, function(ar){
    // Takes the string in ar[0] and converts escaped HTML characters back to their original form.
    BiwaScheme.assert_string(ar[0]);
    return Fronkensteen.unescapeHTML(ar[0]);
});

BiwaScheme.define_libfunc("escape-regex", 1, 1, function(ar){
    // Takes the string in ar[0] and escapes any regex special characters.
    BiwaScheme.assert_string(ar[0]);
    return Fronkensteen.escapeRegExp(ar[0]);
});
BiwaScheme.define_libfunc("index-of", 2, 2, function(ar){
  // Return the index of string ar[1] in string ar[0],
  // or -1 if not found.
  BiwaScheme.assert_string(ar[0]);
  BiwaScheme.assert_string(ar[1]);
  return ar[0].indexOf(ar[1]);
});
BiwaScheme.define_libfunc("str-escape", 1, 1, function(ar){
  // Return Javascript's escape for the string in ar[0]
    BiwaScheme.assert_string(ar[0]);
    return escape(ar[0]);
});

BiwaScheme.define_libfunc("str-find", 3, 3, function(ar){
  // Return matches in the string given by ar[0], using the RegExp specified
  // by ar[1] and ar[2].
  BiwaScheme.assert_string(ar[0]);
  BiwaScheme.assert_string(ar[1]);
  BiwaScheme.assert_string(ar[2]);
  let re = new RegExp(ar[1],ar[2]);
  let result = ar[0].match(re);
  if(result === null){
      return [];
  }
  return result;
});

BiwaScheme.define_libfunc("str-find-unique", 3, 3, function(ar){
  // Find unique matches in the string specified by ar[0] using the RegExp
  // specified by ar[1] and ar[2].
  BiwaScheme.assert_string(ar[0]);
  BiwaScheme.assert_string(ar[1]);
  BiwaScheme.assert_string(ar[2]);
  let re = new RegExp(ar[1],ar[2]);
  let result = ar[0].match(re);
  if(result === null){
      return [];
  }
  return result.filter(Fronkensteen.onlyUnique);
});

BiwaScheme.define_libfunc("str-match?", 3, 3, function(ar){
  // Returns true or false, depending on whether the string given in ar[0]
  // matches the RegExp specified by ar[1] and ar[2].
  BiwaScheme.assert_string(ar[0]);
  BiwaScheme.assert_string(ar[1]);
  BiwaScheme.assert_string(ar[2]);
  let re = new RegExp(ar[1],ar[2]);
  let result = ar[0].match(re);
  if(result === null){
      return false;
  }
  return true;
});

BiwaScheme.define_libfunc("str-replace", 3, 3, function(ar){
  // Replaces ar[1] in the string given by ar[0] with the string given in ar[2]. TODO: look at this.
  BiwaScheme.assert_string(ar[0]);
  BiwaScheme.assert_string(ar[1]);
  BiwaScheme.assert_string(ar[2]);
  return ar[0].replace(ar[1],ar[2]);
});

BiwaScheme.define_libfunc("str-replace-re", 4, 4, function(ar){
  // Replaces characters in the string given by ar[0] matched by the RegExp
  // given in ar[1] and ar[2] with the string given in ar[3]. TODO: look at this.
  BiwaScheme.assert_string(ar[0]);
  BiwaScheme.assert_string(ar[1]);
  BiwaScheme.assert_string(ar[2]);
  BiwaScheme.assert_string(ar[3]);
  var re = new RegExp(ar[1],ar[2]);
  return ar[0].replace(re,ar[3]);
});
BiwaScheme.define_libfunc("str-split", 2,2, function(ar){
  // Split the string given in ar[0] at positions that match ar[1].
    BiwaScheme.assert_string(ar[0]);
    return ar[0].split(ar[1]);
});

BiwaScheme.define_libfunc("str-unescape", 1, 1, function(ar){
  // Perform a JavaScript unescape on the string given in ar[0]
    BiwaScheme.assert_string(ar[0]);
    return unescape(ar[0])
});

BiwaScheme.define_libfunc("str-trim", 1, 1, function(ar){
  // Perform a JavaScript trim on the string given in ar[0]
    BiwaScheme.assert_string(ar[0]);
    return ar[0].trim()
});


BiwaScheme.define_libfunc("str-wordcount", 1, 1, function(ar){
  // returns wordcount for the string given in ar[0]
    BiwaScheme.assert_string(ar[0]);
    let trimmed = ar[0].trim();
    if(trimmed == ""){
      return 0;
    }
    return trimmed.split(/\s+/m).length;

});

BiwaScheme.define_libfunc("make-regexp", 2,2, function(ar){
   // Makes a Javascript RegExp from the strings specified in
   // ar[0] and ar[1], with ar[0] as the pattern and ar[1] as
   // the modifier.
    BiwaScheme.assert_string(ar[0]);
    BiwaScheme.assert_string(ar[1]);
    return new RegExp(ar[0],ar[1]);
});


BiwaScheme.define_libfunc("regexp?", 1, 1, function(ar){
  // Returns true or false depending on whether the object in ar[0]
  // is a Javascript RegExp object.
    return Object.prototype.toString.call(ar[0]) === "[object RegExp]";
});


 Fronkensteen.onlyUnique = function(value, index, self) {
   return self.indexOf(value) === index;
 }

 Fronkensteen.balanced_sexpr = function(str){
    var result = Fronkensteen.balanced2_sexpr(str,[])
    if(result === true){
      return true;
    }
    return result;
  };

 Fronkensteen.balanced2_sexpr = function(str,expect){
    var stringtype = "";
    var lastchar = null;
    for(var i = 0; i < str.length; i++){
      var currentchar = str.charAt(i);
      if(lastchar === "\\"){ // Escaped char
        lastchar = null;
        continue;
      }
      if(currentchar === "\\"){
        lastchar = "\\";
        continue;
      }

      if(currentchar === '"'){
        if(stringtype === '"'){ // End of string
          stringtype = "";
          lastchar = null;
          continue;
        }
        else{
          stringtype = currentchar;
          lastchar = null;
          continue;
        }
      }
      if(stringtype !== ""){ // In a string.
        lastchar = null;
        continue;
      }
      lastchar = currentchar;
      switch(currentchar){
        case '(': expect.push(')');
        continue;
        case '[': expect.push(']');
        continue;
        case '{': expect.push('}');
        continue;
        case ')':
        case ']':
        case '}': if((expect.length > 0) && (expect.pop() === currentchar)){
          continue;
        }
        else {
          switch(currentchar){
            case ')': return ['('];
            case ']': return ['['];
            case '}': return ['{'];
          }
        }
        default: continue;
      }
    }
    if((expect.length === 0) && (stringtype === "")){
      return true;
    }
    return expect;
  }

  Fronkensteen.eval_extract_atom = function (preceding){
    for(var offset = preceding.length - 1; offset >= 0; offset--){
      let candidate =  preceding.charAt(offset);
      if((candidate === " ") || (candidate === "\t") || (candidate === "\n") || (candidate === "") ){
        return preceding.substring(offset + 1, preceding.length);
      }
    }
    return preceding;
  }

  Fronkensteen.eval_extract_string = function (preceding){
    for(var offset = preceding.length - 2; offset >= 0; offset--){
      let candidate =  preceding.charAt(offset);
      if((candidate === "\"") && (preceding.charAt(offset - 1) !== "\\")){
        return preceding.substring(offset, preceding.length);
      }
    }
    return null;
  }

  Fronkensteen.eval_extract_sexp = function (preceding){
    for(var offset = preceding.length - 1; offset >= 0; offset--){
      let candidate =  preceding.substring(offset,preceding.length);
      balancecheck = Fronkensteen.balanced_sexpr(candidate);
      if(balancecheck === true){
          return candidate;
          break;
      }
    }
    if(offset < 0){
      return null;
    }
  }


  Fronkensteen.escapeHTML = function(text) {
    var map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
  }

  Fronkensteen.unescapeHTML = function(text) {
    var map = {
      '&amp;' : '&' ,
      '&lt;': '<',
      '&gt;': '>',
      '&quot;':'"' ,
      '&#039;': "'"
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
  }


  Fronkensteen.patchQuotes = function(text){
  return text.replace(/\"/g,"\\\"").replace(/\[=([^]*?)=\]/gm,function (match, capture) {
    return  "\"\n" + capture.replace(/\\\"/gm,"\"") + "\n\"";
  });
}

  Fronkensteen.patchReplQuotes = function(text){
    return "\"" + text.replace(/\"/g,"\\\"").replace(/\[=([^]*?)=\]/gm,function (match, capture) {
      return "\"\n" + capture.replace(/\\\"/gm,"\"") + "\n\"";
    }) + "\""
  }

  BiwaScheme.define_libfunc("process-read-template", 1, 1, function(ar){
    // Perform a JavaScript trim on the string given in ar[0]
      BiwaScheme.assert_string(ar[0]);
      return Fronkensteen.renderReadTemplate(ar[0])
  });
  Fronkensteen.renderReadTemplate  = function(text){
    text = text.replace(/\<%([^]*?)%\>/gm, function (match, capture) {
      return "\"" +  Fronkensteen.patchQuotes(capture)  +  "\"";
    });
    return  text;
  },

  Fronkensteen.renderREPLTemplate = function(text){
    while(text.match(/\<%([^]*?)%\>/m)){
      text = text.replace(/\<%([^]*?)%\>/gm, function (match, capture) {
        return  Fronkensteen.patchReplQuotes(capture);
      });
    }
    return text;
  }


Fronkensteen.escape_html = function(text){
      return text.replace(/\&/g,"&amp;").replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\'/g,"&#39;").replace(/\"/g,"&quot;");
    },

Fronkensteen.escapeRegExp = function(text) {
      return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
    }

// ISBN regex ^(ISBN[-]*(1[03])*[ ]*(: ){0,1})*(([0-9Xx][- ]*){13}|([0-9Xx][- ]*){10})$
