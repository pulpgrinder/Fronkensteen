/* Copyright 2020 by Anthony W. Hursh. Fronkensteen license */
BiwaScheme.define_libfunc("set-popover",3,4, function(ar){
  BiwaScheme.assert_string(ar[0]);
  BiwaScheme.assert_string(ar[1]);
  let parent = ar[0];
  let pop_content = ar[1];
  let position = ar[2];

  let params = {
    content: pop_content,
    themeName:"Theme_topcoat",
    placement:position
  }
  if(ar.length > 3){
    BiwaScheme.assert_string(ar[3]);
    let param_json = JSON.parse(ar[3])
    let keys = Object.keys(param_json)
    for(var i = 0; i < keys.length; i++){
      params[keys[i]] = param_json[keys[i]]
    }
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
