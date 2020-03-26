// BiwaScheme interface for the FileTypes Stretchr library.
// Copyright 2019 by Anthony W. Hursh
// MIT License.

BiwaScheme.define_libfunc("mime-type" ,1, 1, function(ar){
  // Get mime type for file name.
  return Stretchr.Filetypes.mimeFor(ar[0].slice((ar[0].lastIndexOf(".") - 1 >>> 0) + 2));
});
