// system-extensions.js.
// system-related extension procedures for BiwaScheme
// Copyright 2018-2019 by Anthony W. Hursh
// MIT License.

// Keep track of keypresses.
var keys = {};
window.onkeyup = function(e) { keys[e.keyCode] = false; }
window.onkeydown = function(e) { keys[e.keyCode] = true; }


// Try to prevent an accidental close with unsaved data.
window.addEventListener('beforeunload', function (e) {
  let system_dirty = scheme_interpreter.invoke_closure(BiwaScheme.TopEnv["is-system-dirty?"], []);
  if(system_dirty === true){
    e.preventDefault();
    e.returnValue = 'This app may have unsaved data. Are you sure you want to leave?';
  }
  else {
    delete e['returnValue'];
  }
});


Fronkensteen.isProcedure = function(envItem){
  if(typeof envItem === "function"){
    return true;
  }
  if(Array.isArray(envItem) && Array.isArray(envItem[0]) && envItem[0][0] === "frame"){
    return true;
  }
  return false;
}

BiwaScheme.define_libfunc("clear-cumulative-errors", 0, 0, function(ar){
  // Clears the error accumulator.
  Fronkensteen.CumulativeErrors = [];

});

BiwaScheme.define_libfunc("cumulative-errors", 0, 0, function(ar){
  // Returns true if ar[0] is an alist, false if not.
  return Fronkensteen.CumulativeErrors.join("\n");
});


BiwaScheme.define_libfunc("eval-scheme-string", 1,1, function(ar){
  Fronkensteen.CumulativeErrors = [];
  BiwaScheme.assert_string(ar[0]);
  result = scheme_interpreter.evaluate(ar[0]) + Fronkensteen.CumulativeErrors.join("\n");
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

BiwaScheme.define_libfunc("is-procedure-defined?", 1, 1, function(ar){
    // Returns #t if procedure named ar[0] is defined, #f otherwise.
    BiwaScheme.assert_string(ar[0]);
    return BiwaScheme.is_procedure_defined(ar[0])
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
    return prompt(ar[0]);
});

BiwaScheme.define_libfunc("reload",0, 0, function(ar){
  // Reload the current page.
    window.location.reload();
});

BiwaScheme.define_libfunc("js-biwa-evaluate", 1, 1, function(ar){
   // Evaluate a Scheme expression in the base interpreter.
    BiwaScheme.assert_string(ar[0]);
    var result = scheme_interpreter.evaluate(ar[0]);
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
  BiwaScheme.is_procedure_defined = function(name){
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
    console.log(errorstring);
    Fronkensteen.CumulativeErrors.push(errorstring);
  }


  function debouncer(func , timeout) {
     var timeoutID , timeout = timeout || 200;
     return function () {
        var scope = this , args = arguments;
        clearTimeout( timeoutID );
        timeoutID = setTimeout( function () {
            func.apply( scope , Array.prototype.slice.call( args ) );
        } , timeout );
     }
  }

    $(window).resize(debouncer(function (e){
        resizeComponents();
    }));

    function resizeComponents(){

    }
