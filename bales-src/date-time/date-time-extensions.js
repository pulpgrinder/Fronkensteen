// date-time-extensions.js.
// date and time-related extension procedures for BiwaScheme
// Copyright 2018-2020 by Anthony W. Hursh
// MIT License.

BiwaScheme.define_libfunc("numeric-time-stamp",0,0,function(){
  var d = new Date();
  return d.toISOString().replace(/[^0-9]/g,"");
})

BiwaScheme.define_libfunc("iso-8601-date",0,0, function(){
  // Returns the current date and time in ISO8601 string format.
  var d = new Date();
  return d.toISOString();
})
BiwaScheme.define_libfunc("iso-8601-date-epub-3",0,0, function(){
  // Returns the current date and time in epub3 (truncated) string format.
  var d = new Date();
  return d.toISOString().replace(/\.[0-9]+Z/,"Z");
})

BiwaScheme.define_libfunc("iso-8601-date-short",0,0, function(){
  // Returns the current date (without time) in ISO8601 string format.
  var d = new Date();
  return d.toISOString().replace(/T.+/,"");
})

BiwaScheme.define_libfunc("unix-time",0,0, function(){
  // Returns the current date and time in Unix epoch timestamp format.
  return Math.round((new Date()).getTime() / 1000);
})
