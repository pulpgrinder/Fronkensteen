// BiwaScheme interface for the UUID library.
// Copyright 2019 by Anthony W. Hursh.
// MIT License.

BiwaScheme.define_libfunc("uuid" ,0, 0, function(ar){
  // Returns a v4 uuid
  return uuid();
})

BiwaScheme.define_libfunc("no-dash-uuid" ,0, 0, function(ar){
  return Fronkensteen.no_dash_uuid();
})

Fronkensteen.no_dash_uuid = function(){
  // Returns a v4 uuid with no dashes in it.
  return uuid().replace(/\-/g,"");
}
