// docstrings-extensions.js.
// Procedures to handle the Fronkensteen documentation system
// Copyright 2019 by Anthony W. Hursh
// MIT License.

Fronkensteen.doc_extract_scheme_procedure_names = function(deflines){
  let procnames = [];
  let defline;
  for(var i = 0; i < deflines.length; i++) {
   defline = deflines[i].replace(/^;/,"").trim();
    let match = defline.match(/\((\s*[^\s]+)/)
    if(match === null) {
      return procnames;
    }
    else{
      procnames.push(match[1]);
    }
  }
  return [];
}
Fronkensteen.enumerateProcedures = function(){
  let procedures = []
  for(var key in Fronkensteen.documentationPointers){
    procedures.push(key)
  }
  procedures = procedures.sort();
  return procedures;
}

Fronkensteen.enumerateUndocumentedProcedures = function(){
  let procedures = []
  let database = Fronkensteen.documentationPointers
  for(var key in database){
    if((database[key]["docstring"] === undefined) || (database[key]["docstring"] === "")){
    procedures.push(key)
    }
  }
  procedures = procedures.sort();
  return procedures;
}

Fronkensteen.searchDefinedProcedures = function(searchterm){
  searchterm = searchterm.toLowerCase();
  let procedures = []
  let database = Fronkensteen.documentationPointers
  for(var key in database){
    let lckey = key.toLowerCase();
    if(lckey.indexOf(searchterm) !== -1){
      procedures.push(key);
      // try to avoid duplication.
      continue;
    }
    if(database[key]["docstring"] !== undefined){
      let lcdocumentation = database[key]["docstring"].toLowerCase();
      if(lcdocumentation.indexOf(searchterm) !== -1){
          procedures.push(key);
      }
    }
  }
  procedures = procedures.sort();
  return procedures;
}


Fronkensteen.retrieveDocumentation = function(procedure_name){
  let doc = Fronkensteen.documentationPointers[procedure_name];
  if(doc === undefined){
    return false;
  }
  return doc;
}
/****! bootstrap-documentation
(bootstrap-documentation)

rebuilds documentation from scratch, overwriting any previous documentation. Use caution.
*/

BiwaScheme.define_libfunc("bootstrap-documentation", 0, 0, function(ar, intp){
/*  Needs rewritten due to the bale system being scrapped*/

})
/****! retrieve-procedure-definition
(retrieve-procedure-definition procname)

Returns the source code procedure procname, if procname is defined and the source is available.
If procname is undefined, returns #f.
If procname is defined, but has no source code available, returns a message to that effect.
*/
BiwaScheme.define_libfunc("retrieve-procedure-definition", 1, 1, function(ar, intp){
  BiwaScheme.assert_string(ar[0]);
  let doc = Fronkensteen.retrieveDocumentation(ar[0]);
  if(doc !== false){
    if(doc.code !== undefined){
      return doc.code;
    }
    return ar[0] + ": source code not available."
  }
  return false;
});
/****! retrieve-procedure-documentation
(retrieve-procedure-documentation procname)

Returns the docstring for procedure procname, if procname is defined and has a docstring.
If procname is undefined, returns #f.
If procname is defined, but has no docstring, returns a message to that effect, along with a suggestion to write some documentation. :-).
*/
BiwaScheme.define_libfunc("retrieve-procedure-documentation", 1, 1, function(ar, intp){
  BiwaScheme.assert_string(ar[0]);
  let doc = Fronkensteen.retrieveDocumentation(ar[0]);
  if(doc !== false){
    if(doc.docstring !== undefined){
     return doc.docstring;
   }
   return ar[0] + ": no documentation available. How about writing some?"
  }
  return false;
});

/****! retrieve-procedure-filename
(retrieve-procedure-file_manifest_name procname)

Returns the name of the file where procname is defined.
If procname is undefined, returns #f.
If procname is defined, but has no file name available, returns a message to that effect.
*/
BiwaScheme.define_libfunc("retrieve-procedure-filename", 1, 1, function(ar, intp){
  // Retrieve the filename where the procedure in ar[0] is
  // defined. If not defined, returns #f.
  BiwaScheme.assert_string(ar[0]);
  let doc = Fronkensteen.retrieveDocumentation(ar[0]);
  if(doc !== false){
    if(doc.filename !== undefined){
     return doc.filename;
   }
   return ar[0] + ": no filename available."
  }
  return false;
});
BiwaScheme.define_libfunc("process-doc-strings", 1,1, function(ar){
  // Processes the docstrings from the docs/Scheme Documentation wiki page.
   BiwaScheme.assert_string(ar[0]);
   let docitems = ar[0].split("\n\n")
   for (var i = 0; i < docitems.length; i++){
     let lines = docitems[i].split("\n");
     let procedureinfo = lines.shift();
     let procedureparts = procedureinfo.split(' ')
     let procedurename = procedureparts.shift()
     let proceduresignature = procedureparts.join(' ')
     Fronkensteen.documentationPointers[procedurename]["signature"] = proceduresignature
     Fronkensteen.documentationPointers[procedurename]["docstring"] = lines.join("\n")
   }
})

  /****! enumerate-procedures
  (enumerate-procedures)

  Returns a vector containing the names of all defined procedures.
  */
  BiwaScheme.define_libfunc("enumerate-procedures", 0,0, function(){
    // Returns a vector of the name of all defined procedures.
    return Fronkensteen.enumerateProcedures();
  })
  /****! enumerate-undocumented-procedures
  (enumerate-undocumented-procedures)

  Returns a vector containing the names of all defined procedures that do not have documentation.
  */
BiwaScheme.define_libfunc("enumerate-undocumented-procedures", 0,0, function(){
  // Generate a vector of all procedures that do NOT have doc
  // strings in the database. Useful for the ongoing documentation effort.
  return Fronkensteen.enumerateUndocumentedProcedures();
})
/****! search-defined-procedures
(search-defined-procedures search-term)

Returns a vector of all procedures that match the supplied search term
*/
BiwaScheme.define_libfunc("search-defined-procedures", 1,1, function(ar,intp){
  // Generate a list of all procedures that match the supplied arg.
  BiwaScheme.assert_string(ar[0]);
  if(ar[0] === ""){
    alert("You need to enter a search term.");
    return "";
  }
  return Fronkensteen.searchDefinedProcedures(ar[0]);
})
