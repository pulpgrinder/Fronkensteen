// system-extensions.js.
// system-related extension procedures for BiwaScheme
// Copyright 2018-2019 by Anthony W. Hursh
// MIT License.

// Handle tab keys in textareas.
$("textarea").keydown(function(e) {
    if(e.keyCode === 9) {
        var start = this.selectionStart;
            end = this.selectionEnd;
        var $this = $(this);
        $this.val($this.val().substring(0, start)
                    + "    "
                    + $this.val().substring(end));
        this.selectionStart = this.selectionEnd = start + 1;
        return false;
    }
});

Fronkensteen.packageVersion = "0.1beta";

// Try to prevent an accidental close with unsaved data.
  window.addEventListener('beforeunload', function (e) {
  var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
  let system_dirty = intp2.invoke_closure(BiwaScheme.TopEnv["is-system-dirty?"], []);
 if(system_dirty === true){
    e.preventDefault();
    e.returnValue = 'This app may have unsaved data. Are you sure you want to leave?';
  }
  else {
    delete e['returnValue'];
  }
});


Fronkensteen.overwriteSystem = function(newHTML){
      fronkensteen_fs = null;
      document.open();
      document.write(newHTML);
      document.close();
}

Fronkensteen.isProcedure = function(envItem){
  if(typeof envItem === "function"){
    return true;
  }
  if(Array.isArray(envItem) && Array.isArray(envItem[0]) && envItem[0][0] === "frame"){
    return true;
  }
  return false;
}


BiwaScheme.define_libfunc("overwrite-system", 2, 2, function(ar){
  // Clears the error accumulator.
  console.log("Restarting system from " + ar[0])
  BiwaScheme.assert_string(ar[1]);
  Fronkensteen.overwriteSystem(ar[1])

});
BiwaScheme.define_libfunc("clear-cumulative-errors", 0, 0, function(ar){
  // Clears the error accumulator.
  Fronkensteen.CumulativeErrors = [];

});

BiwaScheme.define_libfunc("cumulative-errors", 0, 0, function(ar){
  // Returns true if ar[0] is an alist, false if not.
  return Fronkensteen.CumulativeErrors.join("\n");
});



BiwaScheme.define_libfunc("eval-js-string", 1,1, function(ar){
  Fronkensteen.CumulativeErrors = [];
  BiwaScheme.assert_string(ar[0]);
  try{
      let js_evaluator = new Function(ar[0]);
      result = js_evaluator();
  }
  catch(err){
    let msg = err.toString()
    result = "**** Embedded JavaScript error:  " + msg + " in  \"" + code + "\" ****";
  }
  if(result === undefined){
    result = "";
  }
  return result;
});
BiwaScheme.define_libfunc("eval-scheme-string", 1,1, function(ar){
  Fronkensteen.CumulativeErrors = [];
  BiwaScheme.assert_string(ar[0]);
  var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
  result = intp2.evaluate(ar[0]) + Fronkensteen.CumulativeErrors.join("\n");
  Fronkensteen.CumulativeErrors = [];
  return result;
});

BiwaScheme.define_libfunc("is-alist?", 1, 1, function(ar){
  // Returns true if ar[0] is an alist, false if not.
  return BiwaScheme.isAlist(ar[0]);
});

BiwaScheme.define_libfunc("is-dotted-pair?", 1, 1, function(ar){
  // Returns true if ar[0] is a dotted pair, false if not.
  return BiwaScheme.isDottedPair(ar[0]);
});

BiwaScheme.define_libfunc("is-defined?", 1, 1, function(ar){
    // Returns #t if procedure named ar[0] is defined, #f otherwise.
    BiwaScheme.assert_string(ar[0]);
    return BiwaScheme.is_defined(ar[0])
});

BiwaScheme.isAlist = function(candidate){
  if(candidate === BiwaScheme.nil){
    return true;
  }
  if(BiwaScheme.isList(candidate) === false){
    return false;
  }
  if(BiwaScheme.isDottedPair(candidate.car) === true){
    return BiwaScheme.isAlist(candidate.cdr);
  }
  else{
    return false;
  }
}

BiwaScheme.isDottedPair = function(candidate){
  // If not a list, but is a pair, is a dotted pair.
  if(((candidate instanceof BiwaScheme.Pair) === true)
    && (BiwaScheme.isList(candidate) === false)){
      return true;
    }
    return false;
}



BiwaScheme.define_libfunc("prompt", 1, 1, function(ar){
  // Display a Javascript input prompt with the text in
  // ar[0]. Neither prompt nor confirm work in Electron, sadly,
  // though alert does.
    BiwaScheme.assert_string(ar[0]);
    let result = prompt(ar[0])
    if(result === null){
      return false;
    }
    return result;
});

BiwaScheme.define_libfunc("reload",0, 0, function(ar){
  // Reload the current page.
    window.location.reload();
});

BiwaScheme.define_libfunc("js-biwa-evaluate", 1, 1, function(ar){
   // Evaluate a Scheme expression in the base interpreter.
    BiwaScheme.assert_string(ar[0]);
    var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
    var result = intp2.evaluate(ar[0]);
    var resultstring;
    if(result === undefined){
        return "#<undef>"
    }
    else{
        return result.toString();
    }
});


BiwaScheme.define_libfunc("repl-here", 1, 1, function(ar){
  // Takes a string which may contain our embedded pseudo-here document
  // syntax, and return it with proper quotes substituted in.
    BiwaScheme.assert_string(ar[0]);
    return Fronkensteen.renderREPLTemplate(ar[0])
});



  BiwaScheme.define_libfunc("string-reader",1,1, function(ar){
    // Workaround for a bug in the BiwaScheme read procedure.
    var parser = new BiwaScheme.Parser(ar[0]);
    return parser;
  });

  BiwaScheme.define_libfunc("string-reader-read",1,1, function(ar){
    // Workaround for a bug in the BiwaScheme read procedure.
    var r = ar[0].getObject();
    return (r == BiwaScheme.Parser.EOS)? BiwaScheme.eof: r;
  });


  // Determines if something is defined or not. Used by the
  // UI wiring code.
  BiwaScheme.is_defined = function(name){
    if((BiwaScheme.TopEnv.hasOwnProperty(name) === true) ||
        (BiwaScheme.CoreEnv.hasOwnProperty(name) === true)){
            return true;
        }
        return false;
  }




  Fronkensteen.currentBiwaSchemeLoadFile = null;
  Fronkensteen.onBiwaSchemeError = function(e){
    let errorstring = "" + e;
    if(Fronkensteen.currentBiwaSchemeLoadFile !== null){
      errorstring = "Error in " + Fronkensteen.currentBiwaSchemeLoadFile + ":" + errorstring;
    }
    console.error("onBiwaSchemeError: " + errorstring);
    Fronkensteen.CumulativeErrors.push(errorstring);
  }


  Fronkensteen.debouncer = function(func, timeout) {
     var timeoutID;
     var timeout = timeout || 200;
     return function(){
        var scope = this;
        var args = arguments;
        clearTimeout(timeoutID);
        timeoutID = setTimeout(function(){
            func.apply(scope, Array.prototype.slice.call(args));
        },timeout);
     }
  }

    $(window).on("orientationchange", function(){
      Fronkensteen.resizeComponents();
    })
    $(window).resize(Fronkensteen.debouncer(function (e){
        Fronkensteen.resizeComponents();
    }));

    Fronkensteen.resizeComponents = function(){
      var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
      result = intp2.evaluate("(resize-root)")
    }

/**
* Simulate the shuffling of a deck of cards.
* Generates a pseudo-random permutation of the positive integers
* from 0 to decksize-1. In other words, Fronkensteen.shuffle(3)
* might return something like [1,0,2] or [2,1,0].
*
* If the optional onebased parameter is true, the permutation
* contains positive integers from 1 to decksize, rather than
* zero to decksize - 1.
* Not intended for cryptographic use or anything of that nature.
*/
Fronkensteen.nullshuffle = function(decksize, onebased){
    if(onebased === undefined){
      onebased = false;
    }
    let shuffled = new Array();
    for(var i = 0; i < decksize; i++){
      shuffled.push(i);
    }
    if(onebased === true){
      for(var i = 0; i < decksize; i++){
        shuffled[i] = shuffled[i] + 1;
      }
    }
    return shuffled;
}
Fronkensteen.shuffle = function(decksize, onebased){
  if(onebased === undefined){
    onebased = false;
  }
  let shuffled = new Array();
  for(var i = 0; i < decksize; i++){
    shuffled.push(i);
  }
  let temp,card1,card2;
  let shuffles = decksize * 1000;
  for(var i = 0; i < shuffles; i++){
    card1 = Math.floor(Math.random() * decksize);
    card2 = Math.floor(Math.random() * decksize);
    temp = shuffled[card1];
    shuffled[card1] = shuffled[card2];
    shuffled[card2] = temp;
  }
  if(onebased === true){
    for(var i = 0; i < decksize; i++){
      shuffled[i] = shuffled[i] + 1;
    }
  }
  return shuffled;
}

/**
  * (shuffle n) returns a vector containing a permutation
  * of the numbers 0 to ar[0] -1   in pseudo-random order.
  * Can be used to (e.g.) simulate the shuffling of a deck of cards.
  * Suitable for games and the like. Not intended for
  * cryptographic applications. If the optional second parameter
  * is set to #t, the permutation contains numbers from 1 to
  * ar[0] rather than 0 to ar[0] - 1.
  * */

  BiwaScheme.define_libfunc("shuffle",1,2, function(ar){
    let decksize = ar[0]
    let onebased = false;
    if(ar.length > 1){
      onebased = ar[1];
    }
    return Fronkensteen.shuffle(decksize, onebased)
  });

/**
  * (nullshuffle n) returns a vector containing the numbers
  * 0 to ar[0] -1 in order.
  * If the optional second parameter is set to #t, returns a vector
  * containing the numbers 1 to ar[0] in order.
  * Like shuffle, except the result is always in order.
  */

  BiwaScheme.define_libfunc("nullshuffle",1,2, function(ar){
    let decksize = ar[0]
    let onebased = false;
    if(ar.length > 1){
      onebased = ar[1];
    }
    return Fronkensteen.shuffle(decksize, onebased)
  });
