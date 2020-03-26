// BiwaScheme interface for MathJax.
// Copyright 2019 by Anthony W. Hursh
// MIT License.

BiwaScheme.define_libfunc("latex-installed?",0,0, function(ar){
  if(MathJax !== undefined){
    return true;
  }
  return false;
});

BiwaScheme.define_libfunc("process-latex",0,0, function(ar){
  MathJax.typesetClear();
  MathJax.typeset();
});
