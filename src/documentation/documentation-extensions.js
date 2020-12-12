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

Fronkensteen.getDocStrings = function(){
  let docs = "";
  let keys = Fronkensteen.enumerateProcedures();
  for(var i = 0; i < keys.length; i++){
      let key = keys[i];
      docstring = Fronkensteen.documentationPointers[key]["docstring"];
      if(docstring === undefined){
        Fronkensteen.documentationPointers[key]["docstring"] = "\n";
      }
      docs = docs + key + "\n" + docstring + "\n§\n\n"
    }
 return docs;
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
(retrieve-procedure-filename procname)

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

/****! retrieve-procedure-line-number
(retrieve-procedure-line-number procname)

Returns the line number in the file where procname is defined.
If procname is undefined, returns #f.
If procname is defined, but has no file name available, returns a message to that effect.
*/

BiwaScheme.define_libfunc("retrieve-procedure-line-number", 1, 1, function(ar, intp){
  // Retrieve the line number where the procedure in ar[0] is
  // defined. If not defined, returns #f.
  BiwaScheme.assert_string(ar[0]);
  let doc = Fronkensteen.retrieveDocumentation(ar[0]);
  if(doc !== false){
    if(doc.linenumber !== undefined){
     return doc.linenumber;
   }
   return false;
  }
  return false;
});
BiwaScheme.define_libfunc("process-doc-strings", 1,1, function(ar){
  // Processes the docstrings from the system/Scheme Documentation wiki page.
   BiwaScheme.assert_string(ar[0]);
   let docs_without_comments = ar[0].replace(/^\s*\;.*$/,"")
   let docitems = docs_without_comments.split(/^§\n\n/m)
   for (var i = 0; i < docitems.length; i++){
     let lines = docitems[i].split("\n");
     let procedurename = lines.shift();
     if(Fronkensteen.documentationPointers[procedurename] === undefined){
       Fronkensteen.documentationPointers[procedurename] = {}
     }
     Fronkensteen.documentationPointers[procedurename]["docstring"] = lines.join("\n").trim();
   }
})

BiwaScheme.define_libfunc("get-updated-doc-strings", 0,0, function(ar){
  return Fronkensteen.getDocStrings();
});


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


BiwaScheme.define_libfunc("update-doc-string", 2,2, function(ar,intp){
  BiwaScheme.assert_string(ar[0]);
  BiwaScheme.assert_string(ar[1]);
  if(Fronkensteen.documentationPointers[ar[0]] === undefined){
    alert("No such procedure: " + ar[0]);
    return;
  }
  Fronkensteen.documentationPointers[ar[0]]["docstring"] = ar[1].trim();
})
