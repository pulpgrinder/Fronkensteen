// BiwaScheme interface for HTML Beautify.
// Copyright 2019 by Anthony W. Hursh.
// MIT License.

BiwaScheme.define_libfunc("beautify-html" ,1, 1, function(ar){
  // HTML beautifier
  return html_beautify(ar[0]);
});
