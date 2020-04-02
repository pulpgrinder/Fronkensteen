// Transform a JSON string to a (quoted) Scheme structure.
// Copyright 2020 by Anthony W. Hursh. MIT license.

BiwaScheme.define_libfunc("json->scheme",1,1, function(ar){
  BiwaScheme.assert_string(ar[0]);
  var intp2 = new BiwaScheme.Interpreter(scheme_interpreter);
  return intp2.evaluate("(quote " + Fronkensteen.json2scheme(ar[0]) + ")");
});

Fronkensteen.json2scheme = function(str){
  return Fronkensteen.json2scheme_rec(JSON.parse(str));
}

Fronkensteen.json2scheme_rec = function(json){
  if(Array.isArray(json)){
    return Fronkensteen.scheme_parse_json_array(json);
  }
  else {
    switch(typeof json){
      case "object" : return Fronkensteen.scheme_parse_json_object(json);
      case "string" : return Fronkensteen.scheme_parse_json_string(json);
      case "number" : return json;
      case "boolean" : return Fronkensteen.scheme_parse_json_boolean(json);
    }
  }
  console.error("Fronkensteen.json2scheme_rec: unrecognized type in " + json);
  return "";
}

Fronkensteen.scheme_parse_json_array = function(arr){
  let result = "#("
  for(var i = 0; i < arr.length; i++){
    result = result + Fronkensteen.json2scheme_rec(arr[i]);
    if(i < (arr.length - 1)){
      result = result + " "
    }
  }
  result = result + ")";
  return result;
}

Fronkensteen.scheme_parse_json_object = function(obj){
  let result = "(";
  let keys = Object.keys(obj);
  for(var i = 0; i < keys.length; i++){
    let parsed_value = Fronkensteen.json2scheme_rec(obj[keys[i]]);
    result = result + "(\"" + keys[i] + "\" . " + parsed_value  + ")";
  }
  result = result + ")";
  return result;
}

Fronkensteen.scheme_parse_json_string = function(str){
  return "\"" + str + "\""
}

Fronkensteen.scheme_parse_json_boolean = function(bool){
  if(bool === true){
    return "#t";
  }
  return "#f";
}
