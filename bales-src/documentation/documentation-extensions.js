// docstrings-extensions.js.
// Procedures to handle the Fronkensteen documentation system
// Copyright 2019 by Anthony W. Hursh
// MIT License.

// Parses out any JavaScript glue procedures defined in the JavaScript code
// in sourceData and adds them to the database.
// Just looks for them using a regex. Probably should do something more
// intelligent here.
Fronkensteen.parseJSProcedureDefs = function(filename,sourceData){
  let lines = sourceData.split("\n");
  for(var i = 0; i < lines.length; i++){
    let line = lines[i];
    let index_start = line.indexOf("define_libfunc(")
    if(index_start > 0){
      line = line.substring(index_start + 15);
      currentProc = line.substring(0,line.indexOf(",")).replace(/\"/g,"").replace(/\'/g,"");
      if(Fronkensteen.procedureDefinitionPointers[currentProc] === undefined){
        Fronkensteen.procedureDefinitionPointers[currentProc] = {"filename":"","line":"","documentation":""}
      }
      Fronkensteen.procedureDefinitionPointers[currentProc]["filename"] = filename;
      Fronkensteen.procedureDefinitionPointers[currentProc]["line"] = i;
    }
}
}

// Parses out any procedures defined in the Scheme code in sourceData
// and adds them to the database. Called by the custom load procedure.
// Just looks for them using a regex. Probably should do something more
// intelligent here.
Fronkensteen.parseSchemeProcedureDefs = function(filename,sourceData){
  let lines = sourceData.split("\n");
  for(var i = 0; i < lines.length; i++){
    let line = lines[i].trim()
    let def = line.match(/\(define \(([^\s\)]+)/)
    if(def !== null){
      if(Fronkensteen.procedureDefinitionPointers[def[1]] === undefined){
        Fronkensteen.procedureDefinitionPointers[def[1]] = {"filename":"","line":"","documentation":""}
      }
      Fronkensteen.procedureDefinitionPointers[def[1]]["filename"] = filename;
      Fronkensteen.procedureDefinitionPointers[def[1]]["line"] = i;
    }
  }
  return true;
}
Fronkensteen.enumerateProcedures = function(){
  let procedures = []
  for(var key in Fronkensteen.procedureDefinitionPointers){
    procedures.push(key)
  }
  procedures = procedures.sort();
  return procedures;
}

Fronkensteen.enumerateUndocumentedProcedures = function(){
  let procedures = []
  let database = Fronkensteen.procedureDefinitionPointers
  for(var key in database){
    if((database[key]["documentation"] === undefined) || (database[key]["documentation"] === "")){
    procedures.push(key)
    }
  }
  procedures = procedures.sort();
  return procedures;
}

Fronkensteen.searchDefinedProcedures = function(searchterm){
  searchterm = searchterm.toLowerCase();
  let procedures = []
  let database = Fronkensteen.procedureDefinitionPointers
  for(var key in database){
    let lckey = key.toLowerCase();
    if(lckey.indexOf(searchterm) !== -1){
      procedures.push(key);
      // try to avoid duplication.
      continue;
    }
    if(database[key]["documentation"] !== undefined){
      let lcdocumentation = database[key]["documentation"].toLowerCase();
      if(lcdocumentation.indexOf(searchterm) !== -1){
          procedures.push(key);
      }
    }
  }
  procedures = procedures.sort();
  return procedures;
}


Fronkensteen.retrieveDefinition = function(procedure_name){
  let def = Fronkensteen.procedureDefinitionPointers[procedure_name];
  if(def === undefined){
    return false;
  }
  return def;
}

Fronkensteen.updateProcedureDocumentation = function(procedure_name,new_docs){
  let def = Fronkensteen.procedureDefinitionPointers[procedure_name];
  if(def === undefined){
    alert(procedure_name + ": no such procedure in database. Maybe try (rebuild-documentation) first?");
    return;
  }
  Fronkensteen.procedureDefinitionPointers[procedure_name]["documentation"] = encodeURIComponent(new_docs);
}
BiwaScheme.define_libfunc("export-documentation", 0, 0, function(ar, intp){
  Fronkensteen.download_text_file("documentation-data.js", Fronkensteen.stringifyDocumentation() ,"text/utf-8");
})

Fronkensteen.stringifyDocumentation = function(){
  return "Fronkensteen.procedureDefinitionPointers = " + Fronkensteen.prettyJSON(JSON.stringify(Fronkensteen.procedureDefinitionPointers))
}

BiwaScheme.define_libfunc("commit-documentation", 0, 0, function(ar, intp){
   Fronkensteen.writeInternalTextFile("documentation/documentation-data.js:",Fronkensteen.stringifyDocumentation());
   return true;
})
BiwaScheme.define_libfunc("rebuild-documentation", 0, 0, function(ar, intp){
  console.log("rebuilding documentation")
  let bale_manifest = fronkensteen_fs["$$BALEMANIFEST$$"];
  for(var i = 0; i < bale_manifest.length; i++){
    let file_manifest_name = bale_manifest[i] + "/" + "$CODE_LOADER";
    let file_manifest = Fronkensteen.readInternalTextFile(file_manifest_name).split("\n");
    for(var j = 0; j < file_manifest.length; j++){
      let filename = file_manifest[j];
      if(filename.match(/\.scm$/) !== null){
        let schemeCode = Fronkensteen.readInternalTextFile(filename);
        Fronkensteen.parseSchemeProcedureDefs(filename,schemeCode);
      }
      if(filename.match(/\.js$/) !== null){
        let jsCode = Fronkensteen.readInternalTextFile(filename);
        Fronkensteen.parseJSProcedureDefs(filename,jsCode);
      }
    }
  }
})

BiwaScheme.define_libfunc("retrieve-procedure-definition", 1, 1, function(ar, intp){
  // Retrieve the filename and line number where the procedure in ar[0] is
  // defined. If not defined, returns #f.
  BiwaScheme.assert_string(ar[0]);
  let def = Fronkensteen.retrieveDefinition(ar[0]);
  if(def !== false){
    return [ar[0],def["filename"],def["line"],decodeURIComponent(def["documentation"])];
  }
  return false;
});

BiwaScheme.define_libfunc("render-procedure-definition-text", 1,1, function(ar,intp){
  let def = ar[0];
  let result = "";
  let text = Fronkensteen.readInternalTextFile(def[1]);
  let lines = text.split("\n");
  let fieldwidth = 0;
  let maxdigit = lines.length;
  while(maxdigit > 1){
    fieldwidth = fieldwidth + 1;
    maxdigit = maxdigit / 10;
  }
  for(var i = 0; i < lines.length; i++){
    result = result + "<span class='fronkensteen-documentation-line-number " + "fronkensteen-documentation-number-width" + fieldwidth +"' source-line-number='" + (i + 1) + "'>" + (i + 1) + ":" + "</span>&nbsp;"
    result = result + Fronkensteen.escapeHTML(lines[i]).replace(/\t/g,"&nbsp;").replace(/ /g,"&nbsp;") + "<br />"
  }
  return result;

});
BiwaScheme.define_libfunc("update-procedure-documentation!", 2,2, function(ar){
    BiwaScheme.assert_string(ar[0]);
    BiwaScheme.assert_string(ar[1]);
    Fronkensteen.updateProcedureDocumentation(ar[0],ar[1])
  })

  BiwaScheme.define_libfunc("enumerate-procedures", 0,0, function(){
    // Returns a vector of the name of all defined procedures.
    return Fronkensteen.enumerateProcedures();
  })

BiwaScheme.define_libfunc("enumerate-undocumented-procedures", 0,0, function(){
  // Generate a list of all procedures that do NOT have doc
  // strings in the database. Useful for the ongoing documentation effort.
  return Fronkensteen.enumerateUndocumentedProcedures();
})

BiwaScheme.define_libfunc("search-defined-procedures", 1,1, function(ar,intp){
  // Generate a list of all procedures that match the supplied arg.
  BiwaScheme.assert_string(ar[0]);
  if(ar[0] === ""){
    alert("You need to enter a search term.");
    return "";
  }
  return Fronkensteen.searchDefinedProcedures(ar[0]);
})
