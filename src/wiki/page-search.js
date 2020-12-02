BiwaScheme.define_libfunc("html-page-search", 5,5,function(ar){
let contentid = ar[0];
let searchLemma = ar[1]
let caseSensitive = ar[2];
let useRegex = ar[3];
let callback = ar[4];
let regexOpts = "g"
let regexString = "";
if(useRegex === true){
  regexString = searchLemma;
}
else{
  regexString =  Fronkensteen.escapeRegExp(searchLemma);
}

if(caseSensitive !== true){
  regexOpts = regexOpts + "i"
}
let regex = RegExp(regexString,regexOpts)
$(contentid).unmark({done: function(){
  $(contentid).markRegExp(regex,{done:function(){Fronkensteen.callSchemeSearchHandler(callback,contentid)}});
}});
})

Fronkensteen.callSchemeSearchHandler = function(callback,contentid){
  let querySpec = contentid + " mark";
  setTimeout(function(){
    let matches = $(querySpec).toArray();
    var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
    intp2.invoke_closure(callback, [matches])
  },100);
}
