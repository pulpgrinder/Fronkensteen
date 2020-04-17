BiwaScheme.define_libfunc("ll-process-latex",1,1, function(ar){
  BiwaScheme.assert_string(ar[0]);
  renderMathInElement($(ar[0])[0]);
});
