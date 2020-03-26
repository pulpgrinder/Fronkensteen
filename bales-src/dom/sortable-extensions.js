// BiwaScheme interface for Sortable.
// Copyright 2019 by Anthony W. Hursh
// MIT License.


BiwaScheme.define_libfunc("sortable" ,1, 1, function(ar){
  // Enable sorting on the container specified in ar[0]
  return new Sortable($(ar[0])[0],{
    onEnd: function(evt){
      let sort_proc = ar[0].replace(/^\#/,"") + "_sorted"
      if(BiwaScheme.is_procedure_defined(sort_proc)){
        scheme_interpreter.evaluate("(" + sort_proc +  " \"" + evt.item.id + "\")");
        document.getElementById(evt.item.id).focus();
      }
      else{
        console.log("No sorted event handler defined: " + sort_proc);

      }
      return true;
    },
    onChoose: function(evt){
      let choose_proc = ar[0].replace(/^\#/,"") + "_chosen"
      if(BiwaScheme.is_procedure_defined(choose_proc)){
        scheme_interpreter.evaluate("(" + choose_proc + " " + evt.oldIndex + ")");
        return true;
      }
      else{
        console.log("No choose event handler defined: " + choose_proc);
        return true;
      }
    }

  });
})
