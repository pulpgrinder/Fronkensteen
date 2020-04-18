// filesystem-extensions.js.
// Fronkensteen file-related procedures for BiwaScheme
// Copyright 2019, 2020 by Anthony W. Hursh
// MIT License.


Fronkensteen.file_extension = function(filename){
  let end = filename.lastIndexOf('.');
  if(end < 0){
    return "";
  }
  return filename.substring(end + 1);
}

Fronkensteen.isBaleLoadable = function(balename){
  if(fronkensteen_fs[balename + "/$$LOAD_BALE$$"] == true){
    return true;
  }
  return false;
}
Fronkensteen.setBaleLoadable = function(balename,loadable){
  if(fronkensteen_fs[balename + "/$$LOAD_BALE$$"] !== undefined){
    fronkensteen_fs[balename + "/$$LOAD_BALE$$"] = loadable;
    return true;
  }
  console.error(balename + "/$$LOAD_BALE$$: not found.")
  return false;
}
Fronkensteen.file_basename = function(filename){
  return filename.substring(filename.lastIndexOf('/') + 1);
}

Fronkensteen.file_path = function(filename){
  let end = filename.lastIndexOf("/")
  return filename.substring(0,end);
}

Fronkensteen.bale_path = function(filename){
  let end = filename.indexOf("/")
  if(end === -1){
    console.error("Error in bale_path: " + filename + " does not appear to have a bale component.");
    return false;
  }
  return filename.substring(0,end);
}
Fronkensteen.file_basename_no_extension = function(filename){
  let start = filename.lastIndexOf('/');
  if(start < 0){
    start = 0;
  }
  else{
    start = start + 1;
  }
  let end = filename.lastIndexOf('.');
  if(end < 0){
    end = filename.length;
  }
  return filename.substring(start,end);
}


Fronkensteen.file_name_no_extension = function(filename){
  let end = filename.lastIndexOf('.');
  if(end < 0){
    end = filename.length;
  }
  return filename.substring(0,end);
}

Fronkensteen.sortedFileTree = function(){
  let filelist = Object.keys(fronkensteen_fs).sort();
  return Fronkensteen.fileTree(filelist)
}
Fronkensteen.unsortedFileTree = function(){
  let filelist = Object.keys(fronkensteen_fs);
  return Fronkensteen.fileTree(filelist)
}
Fronkensteen.fileTree = function(filelist){
  let filetree = {};
  for(var i = 0; i < filelist.length; i++){
    Fronkensteen.insertFileInTree(filelist[i].split("/"),filetree)
  }
  return "(quote (" + Fronkensteen.convertFileTreeToList(filetree) + "))";

}

Fronkensteen.convertFileTreeToList = function(filetree){
  let filenames = [];
  let folders = [];
  let result = "";
  let items = Object.keys(filetree);
  for(var i = 0; i < items.length; i++){
    if((typeof filetree[items[i]]) === "string"){
      filenames.push("\"" + filetree[items[i]] + "\"")
    }
    else{
      result = result + "(\"" + items[i] + "\" " +  Fronkensteen.convertFileTreeToList(filetree[items[i]]) + ") "
    }
  }
    result = result + filenames.join(" ")
    return result;
}

Fronkensteen.insertFileInTree = function(filepath,treeobject){
  filename = filepath.shift()
  if(filepath.length === 0){
    if(filename.match(/.*\$\$.+\$\$$/) === null){
      treeobject[filename] = filename;
    }
    return;
  }
  if(treeobject[filename] === undefined){
      treeobject[filename] = {};
  }
    Fronkensteen.insertFileInTree(filepath,treeobject[filename]);
}

Fronkensteen.base_64_to_bytes = function(string_buffer){
  //let datastart = string_buffer.substring(string_buffer.indexOf(",") + 1);
  //let contentType = string_buffer.substring(11,string_buffer.indexOf(";"))
//  contentType = contentType || '';
  //var byteCharacters = atob(datastart);
  let byteCharacters = atob(string_buffer)
  let array = new Uint8Array(byteCharacters.length);
  for( var i = 0; i < byteCharacters.length; i++ ) { array[i] = byteCharacters.charCodeAt(i);
  }
  return array;
}

Fronkensteen.getInternalDir = function(basedir){
  let dirfiles = [];
  let filelist = Object.keys(fronkensteen_fs).sort();
  for(var i = 0; i < filelist.length; i++){
    let key = filelist[i];
    if(key.indexOf(basedir) === 0){
        dirfiles.push(key);
    }
  }
  return dirfiles;
}

Fronkensteen.internalFileToBlob = function(filename) {
  let filetype = Fronkensteen.file_extension(filename);
  let mimetype = Stretchr.Filetypes.mimeFor(filetype);
  if(fronkensteen_fs[filename] !== undefined){
    let bytes = Fronkensteen.base_64_to_bytes(fronkensteen_fs[filename]);
    var blob = new Blob([bytes], {type: mimetype});
  return blob;
}
  Fronkensteen.onBiwaSchemeError("Fronkensteen.internalFileToBlob: " + filename + " is not in internal filesystem");
  return false;
}

Fronkensteen.readInternalFileDataURL = function(filename){
  let filetype = Fronkensteen.file_extension(filename);
  let mimetype = Stretchr.Filetypes.mimeFor(filetype)
  if(fronkensteen_fs[filename] !== undefined){
    return 'data:' + mimetype + ';base64,' + fronkensteen_fs[filename];
  }
  Fronkensteen.onBiwaSchemeError("Fronkensteen.readInternalFileDataURL: " + filename + " is not in internal filesystem");
  return null;
}


Fronkensteen.getFileSystemJSON = function(){
  return JSON.stringify(fronkensteen_fs);
}

Fronkensteen.getBales = function(){
  return fronkensteen_fs["$$BALEMANIFEST$$"];
}

Fronkensteen.removeBale = function(bale_name){
  let file_manifest = Fronkensteen.getInternalDir(bale_name);
  if(file_manifest === undefined){
    return;
  }
  for(var i = 0; i < file_manifest.length; i++){
    delete fronkensteen_fs[file_manifest[i]];
  }
  let bales = fronkensteen_fs["$$BALEMANIFEST$$"];
  let newbales = [];
  for(var i = 0; i < bales.length; i++){
    if(bales[i] !== bale_name){
      newbales.push(bales[i]);
    }
  }
  fronkensteen_fs["$$BALEMANIFEST$$"] = newbales;
  var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
  intp2.invoke_closure(BiwaScheme.TopEnv["set-system-dirty"], []);
}

Fronkensteen.importBale = function(balefilename,dataString){
  let balename = Fronkensteen.file_basename_no_extension(balefilename)
  let data = JSON.parse(dataString);
  console.log("Import bale: data is \n" + data)
  let filenames = Object.keys(data);
  let file_manifest = ""
  for(var i = 0; i < filenames.length; i++){
    if(filenames[i].match(/\$CODE_LOADER/) !== null){
      file_manifest = Fronkensteen.decodeText(data[filenames[i]]).split("\n");
    }
  }
  if(balename === ""){
    console.error("This does not appear to be a valid compiled bale file.");
    return;
  }
  Fronkensteen.removeBale(balename);
  for(var i = 0; i < filenames.length; i++){
    fronkensteen_fs[filenames[i]] = data[filenames[i]];
  }

  fronkensteen_fs["$$BALEMANIFEST$$"].push(balename);
  if(fronkensteen_fs[balename + "/" + "$$LOAD_BALE$$"] === true){
    Fronkensteen.execute_bale(file_manifest);
  }
  var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
  intp2.invoke_closure(BiwaScheme.TopEnv["set-system-dirty"], [])
}

Fronkensteen.setBaleManifest = function(bale_array){
  fronkensteen_fs["$$BALEMANIFEST$$"] = bale_array;
  var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
  intp2.invoke_closure(BiwaScheme.TopEnv["set-system-dirty"], [])
}

Fronkensteen.getBaleCode = function(balename){
  let export_bale = {};
  let filenames = Object.keys(fronkensteen_fs);
  let bale_regex = new RegExp("^" + balename);
  for(var i = 0; i < filenames.length; i++){
    let current_name = filenames[i];
    if(current_name.match(bale_regex) !== null){
      export_bale[filenames[i]] = fronkensteen_fs[filenames[i]];
    }
  }
  return JSON.stringify(export_bale);
}
Fronkensteen.deleteInternalFile = function(filename){
  if(fronkensteen_fs[filename] !== undefined){
      delete fronkensteen_fs[filename];
      var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
      intp2.invoke_closure(BiwaScheme.TopEnv["set-system-dirty"], [])
      return true;
  }
  else {
    Fronkensteen.onBiwaSchemeError("Fronkensteen.deleteInternalFile: " + filename + " is not in internal filesystem");
    return false;
  }
}
Fronkensteen.readInternalFile = function(filename){
  if(fronkensteen_fs[filename] !== undefined){
      return Fronkensteen.base_64_to_bytes(fronkensteen_fs[filename]);
  }
  Fronkensteen.onBiwaSchemeError("Fronkensteen.readInternalFile: " + filename + " is not in internal filesystem");
  return null;
}


Fronkensteen.writeDataURLToInternalFile = function(filename,data){
  console.log("Filename is " + filename)
  let base64offset = data.indexOf("base64,");
  console.log("base64 offset is " + base64offset)
  data = data.substring(base64offset + 7);
  console.log("Data is now " + data);
  fronkensteen_fs[filename] = data;
  var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
  intp2.invoke_closure(BiwaScheme.TopEnv["set-system-dirty"], [])
  return true;
}
Fronkensteen.writeInternalFile = function(filename,data){
  let filetype = Fronkensteen.file_extension(filename);
  fronkensteen_fs[filename] = Fronkensteen.bytes_to_base_64(data);
  var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
  intp2.invoke_closure(BiwaScheme.TopEnv["set-system-dirty"], [])
  return true;
}
Fronkensteen.readInternalTextFile = function(filename){
    return new TextDecoder("utf-8").decode(Fronkensteen.readInternalFile(filename));
}
Fronkensteen.writeInternalTextFile = function(filename,data){
    let bindata = new TextEncoder("utf-8").encode(data)
    Fronkensteen.writeInternalFile(filename,bindata);
    return true;
}

Fronkensteen.getSortedFileNames = function(){
  return Fronkensteen.getUnsortedFileNames.sort();
}

Fronkensteen.getUnsortedFileNames = function(){
  let filetree = [];
  let filenames = Object.keys(fronkensteen_fs);
  for(var i = 0; i < filenames.length; i++){
      let key = filenames[i];
      if(key.match(/.*\$\$.+\$\$$/) === null){
        filetree.push(key);
      }
    }
    return filetree;
}

Fronkensteen.fileExists = function(filename){
  if(fronkensteen_fs[filename] !== undefined){
    return true;
  }
  return false;
}
Fronkensteen.file_rename = function (oldname,newname){
  if(fronkensteen_fs[newname] !== undefined){
    console.error("Can't rename " + oldname + " to " + newname +  ". " + newname + " exists.")
    return false;
  }
  if(fronkensteen_fs[oldname] === undefined){
    console.error("Can't rename " + oldname + " to " + newname + ". " + oldname + " does not exist.")
    return false;
  }
  fronkensteen_fs[newname] = fronkensteen_fs[oldname];
  delete fronkensteen_fs[oldname];
  let manifest_path = Fronkensteen.bale_path(oldname) + "/$CODE_LOADER";
  let manifest = Fronkensteen.readInternalTextFile(manifest_path).split("\n");
  let new_manifest = [];
  for(var i  = 0; i < manifest.length; i++){
    if(manifest[i] === oldname){
      new_manifest.push(newname);
    }
    else new_manifest.push(manifest[i])
  }
  Fronkensteen.writeInternalTextFile(manifest_path,new_manifest.join("\n"))
  return true;
}


Fronkensteen.isExecutable = function(filename){
  if(filename.match(/\.scm$/) !== null){
    return true;
  }
  if(filename.match(/\.js$/) !== null){
    return true;
  }
  if(filename.match(/\.css$/) !== null){
    return true;
  }
  return false;
}
Fronkensteen.folder_rename = function (oldfolder,newfolder){
  let manifest_path = Fronkensteen.bale_path(oldfolder) + "/$CODE_LOADER";
  let manifest = Fronkensteen.readInternalTextFile(manifest_path).split("\n");
  let filenames = Object.keys(fronkensteen_fs);
  for(var i = 0; i < filenames.length; i++){
    let current_name = filenames[i];
    if(current_name.match(new RegExp('^' + Fronkensteen.escapeRegExp(oldfolder + '/'))) !== null){
      let newname = current_name.replace(oldfolder,newfolder);
      fronkensteen_fs[newname] = fronkensteen_fs[current_name];
      delete fronkensteen_fs[current_name]
    }
  }
  for(var i = 0; i < manifest.length; i++){
    manifest[i] = manifest[i].replace(oldfolder,newfolder);
  }
  Fronkensteen.writeInternalTextFile(newfolder + "/$CODE_LOADER",manifest.join("\n"))
  if(oldfolder.indexOf("/") === -1){ // top-level bale
    let bale_manifest = fronkensteen_fs["$$BALEMANIFEST$$"]
    let new_bale_manifest = [];
    for(var i = 0; i < bale_manifest.length; i++){
      if(bale_manifest[i] === oldfolder){
        new_bale_manifest.push(newfolder);
      }
      else new_bale_manifest.push(bale_manifest[i])
    }
    fronkensteen_fs["$$BALEMANIFEST$$"] = new_bale_manifest;
  }
}

BiwaScheme.define_libfunc("set-bale-loadable",2,2,function(ar){
  BiwaScheme.assert_string(ar[0]);
  return Fronkensteen.setBaleLoadable(ar[0],ar[1])
});
BiwaScheme.define_libfunc("is-bale-loadable?",1,1,function(ar){
  BiwaScheme.assert_string(ar[0]);
  return Fronkensteen.isBaleLoadable(ar[0])
});
BiwaScheme.define_libfunc("decode-base-64-text",1,1,function(ar){
  let datastart = ar[0].substring(ar[0].indexOf(",") + 1);
  return Fronkensteen.decodeText(datastart);
});

BiwaScheme.define_libfunc("get-sorted-file-tree",0,0,function(ar){
  // Returns a sorted vector of all the filenames in the filesystem,
  // exclusive of the $$*MANIFEST$$ files.
  var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
  return intp2.evaluate(Fronkensteen.sortedFileTree());
});

BiwaScheme.define_libfunc("get-unsorted-file-tree",0,0,function(ar){
  // Returns a sorted vector of all the filenames in the filesystem,
  // exclusive of the $$*MANIFEST$$ files.
  var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
  return intp2.evaluate(Fronkensteen.unsortedFileTree());
});
BiwaScheme.define_libfunc("get-sorted-file-names",0,0,function(ar){
  // Returns a sorted vector of all the filenames in the filesystem,
  // exclusive of the $$*MANIFEST$$ files.
  return Fronkensteen.getSortedFileNames()
});
BiwaScheme.define_libfunc("get-unsorted-file-names",0,0,function(ar){
  // Returns a sorted vector of all the filenames in the filesystem,
  // exclusive of the $$*MANIFEST$$ files.
  return Fronkensteen.getUnsortedFileNames()
});
BiwaScheme.define_libfunc("get-bales",0,0,function(ar){
  // Returns a vector of all the current bales in the filesystem.
  return Fronkensteen.getBales()
});
BiwaScheme.define_libfunc("remove-bale",1,1,function(ar){
  // Removes the specified bale, if it is installed.
  BiwaScheme.assert_string(ar[0]);
  return Fronkensteen.removeBale(ar[0]);
});
BiwaScheme.define_libfunc("import-bale",2,2,function(ar){
  // Removes the specified bale, if it is installed.
  BiwaScheme.assert_string(ar[0]);
  BiwaScheme.assert_string(ar[1]);
  return Fronkensteen.importBale(ar[0],ar[1]);
});

BiwaScheme.define_libfunc("set-bale-manifest",1,1,function(ar){
  // Updates the internal filesystems's bale manifest
  BiwaScheme.assert_vector(ar[0]);
  return Fronkensteen.setBaleManifest(ar[0]);
});
BiwaScheme.define_libfunc("get-bale-code",1,1,function(ar){
  // Removes the specified bale, if it is installed.
  BiwaScheme.assert_string(ar[0]);
  return Fronkensteen.getBaleCode(ar[0]);
});

BiwaScheme.define_libfunc("get-internal-filesystem-json",0,0,function(ar){
  // Gets the JSON representation of the internal filesystem.
  return Fronkensteen.getFileSystemJSON();
});
BiwaScheme.define_libfunc("get-internal-dir",1,1,function(ar){
  // Returns a vector of all the filenames in the specified bale.
  BiwaScheme.assert_string(ar[0]);
  return Fronkensteen.getInternalDir(ar[0]);
});

BiwaScheme.define_libfunc("file-exists?",1,1,function(ar){
  // Returns true if the file exists, false otherwise.
  BiwaScheme.assert_string(ar[0]);
  return Fronkensteen.fileExists(ar[0]);
});
BiwaScheme.define_libfunc("file-extension",1,1,function(ar){
  // Returns the extension for the given file/path (if any)
  BiwaScheme.assert_string(ar[0]);
  return Fronkensteen.file_extension(ar[0]);
});

BiwaScheme.define_libfunc("file-basename",1,1, function(ar){
  // Returns the base name (with extension) of a file name, without any preceding path.
  BiwaScheme.assert_string(ar[0]);
  return Fronkensteen.file_basename(ar[0])
});
BiwaScheme.define_libfunc("file-path",1,1, function(ar){
  // Returns the path leading to the given file (without the file name itself).
  BiwaScheme.assert_string(ar[0]);
  return Fronkensteen.file_path(ar[0])
});

BiwaScheme.define_libfunc("file-basename-no-extension",1,1, function(ar){
  // Returns the base name (without extension) of a file name, without any preceding path.
  BiwaScheme.assert_string(ar[0]);
  return Fronkensteen.file_basename_no_extension(ar[0]);
});

BiwaScheme.define_libfunc("file-name-no-extension",1,1, function(ar){
  // Returns the base name (without extension) of a file name, without any preceding path.
  BiwaScheme.assert_string(ar[0]);
  return Fronkensteen.file_name_no_extension(ar[0]);
});

BiwaScheme.define_libfunc("file-rename",2,2, function(ar){
  // rename ar[0] to ar[1]
  BiwaScheme.assert_string(ar[0]);
  BiwaScheme.assert_string(ar[1]);
  return Fronkensteen.file_rename(ar[0],ar[1]);
});

BiwaScheme.define_libfunc("folder-rename",2,2, function(ar){
  // rename ar[0] to ar[1]
  BiwaScheme.assert_string(ar[0]);
  BiwaScheme.assert_string(ar[1]);
  return Fronkensteen.folder_rename(ar[0],ar[1]);
});
BiwaScheme.define_libfunc("bytes-to-base-64-image",2,2, function(ar){
  // Convert image bytes to a base-64 data URL.
  return Fronkensteen.bytes_to_base_64_image(ar[0],ar[1]);
});


BiwaScheme.define_libfunc("base-64-image-to-bytes",1,1, function(ar){
  // Convert a base-64 data URL back to raw image bytes.
  BiwaScheme.assert_string(ar[0]);
  return Fronkensteen.base_64_image_to_bytes(ar[0])
});



BiwaScheme.define_libfunc("delete-internal-file", 1, 1, function(ar, intp){
    BiwaScheme.assert_string(ar[0]);
    Fronkensteen.deleteInternalFile(ar[0]);
});


BiwaScheme.define_libfunc("read-internal-data-url", 1, 1, function(ar, intp){
    BiwaScheme.assert_string(ar[0])
    return Fronkensteen.readInternalFileDataURL(ar[0]);
});

BiwaScheme.define_libfunc("read-internal-file", 2, 2, function(ar, intp){
    BiwaScheme.assert_string(ar[0]);
    return Fronkensteen.readInternalFile(ar[0]);
});

BiwaScheme.define_libfunc("write-internal-file", 2, 2, function(ar, intp){
    BiwaScheme.assert_string(ar[0]);
    BiwaScheme.assert_string(ar[1]);
    return Fronkensteen.writeInternalFile(ar[0],ar[1]);
});
BiwaScheme.define_libfunc("write-data-url-to-internal-file", 2, 2, function(ar, intp){
    BiwaScheme.assert_string(ar[0]);
    BiwaScheme.assert_string(ar[1]);
    return Fronkensteen.writeDataURLToInternalFile(ar[0],ar[1]);
});

BiwaScheme.define_libfunc("read-internal-text-file", 1, 1, function(ar, intp){
    BiwaScheme.assert_string(ar[0])
    return Fronkensteen.readInternalTextFile(ar[0]);
});


BiwaScheme.define_libfunc("write-internal-text-file", 2, 2, function(ar, intp){
    BiwaScheme.assert_string(ar[0]);
    BiwaScheme.assert_string(ar[1]);
    return Fronkensteen.writeInternalTextFile(ar[0],ar[1]);
});

BiwaScheme.define_libfunc("remoteload", 1, 1, function(ar, intp){
  $.ajax({
    type: "get",
    url:  path,
    async: false,
    success: function(code) {
      return intp2.evaluate(Fronkensteen.renderReadTemplate(code));
    }
  });

})
BiwaScheme.define_libfunc("hereload", 1, 1, function(ar, intp){
    BiwaScheme.assert_string(ar[0]);
    let path = ar[0];
    Fronkensteen.currentBiwaSchemeLoadFile = path;
    let intp2 = new BiwaScheme.Interpreter(intp);
    let currentData = Fronkensteen.readInternalTextFile(path);
    let result = intp2.evaluate(Fronkensteen.renderReadTemplate(currentData));
    if(Fronkensteen.CumulativeErrors.length !== 0){
      console.log("Errors in " + ar[0])
      result = result + "\n" + Fronkensteen.CumulativeErrors.join("\n");
      console.log(result);
    }
  Fronkensteen.CumulativeErrors = [];
  Fronkensteen.currentBiwaSchemeLoadFile = null;
  return result;
  });
