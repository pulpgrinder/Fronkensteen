/* Copyright 2020 by Anthony W. Hursh. Fronkensteen license */
BiwaScheme.define_libfunc("set-popover",2,4, function(ar){
  BiwaScheme.assert_string(ar[0]);
  BiwaScheme.assert_string(ar[1]);
  let parent = ar[0];
  let pop_content = ar[1];

  let params = {
    content: pop_content,
  }
  if(ar.length > 2){
    BiwaScheme.assert_string(ar[2]);
    params.placement = ar[2];
  }
  if(ar.length > 3){
    BiwaScheme.assert_string(ar[3]);
    params.title = ar[3];
  }
  $(ar[0]).fu_popover("destroy")
  $(ar[0]).fu_popover(params)
});

BiwaScheme.define_libfunc("show-popover",1,1, function(ar){
  BiwaScheme.assert_string(ar[0]);
  $(ar[0]).fu_popover("show")
});
BiwaScheme.define_libfunc("toggle-popover",1,1, function(ar){
  BiwaScheme.assert_string(ar[0]);
  $(ar[0]).fu_popover("toggle")
});
BiwaScheme.define_libfunc("hide-popover",1,1, function(ar){
  BiwaScheme.assert_string(ar[0]);
  $(ar[0]).fu_popover("hide")
});
BiwaScheme.define_libfunc("destroy-popover",1,1, function(ar){
  BiwaScheme.assert_string(ar[0]);
  $(ar[0]).fu_popover("destroy")
});
