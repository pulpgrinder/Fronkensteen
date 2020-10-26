// filesystem-extensions.js.
// Fronkensteen file-related procedures for BiwaScheme
// Copyright 2019, 2020 by Anthony W. Hursh
// MIT License.


Fronkensteen.file_extension = function(filename){
  let end = filename.lastIndexOf('.');
  if(end < 0){
    return "";
  }
  return filename.substring  (end + 1);
}

Fronkensteen.file_basename = function(filename){
  return filename.substring(filename.lastIndexOf('/') + 1);
}

Fronkensteen.file_path = function(filename){
  let end = filename.lastIndexOf("/")
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


Fronkensteen.file_path_no_extension = function(filename){
  let end = filename.lastIndexOf('.');
  if(end < 0){
    end = filename.length;
  }
  return filename.substring(0,end);
}


Fronkensteen.collectLicenses = function(){
  let filenames = Object.keys(fronkensteen_fs);
  let license_text = Fronkensteen.readInternalTextFile("1-root/LICENSE-Fronkensteen.fmk") + "\n\n"
  for(var i = 0; i < filenames.length; i++){
    if((filenames[i].match(/LICENSE/) !== null) && (filenames[i] !== "1-root/LICENSE-Fronkensteen.fmk")){
      license_text = license_text + Fronkensteen.readInternalTextFile(filenames[i]) + "\n\n"
    }
  }
  return license_text;

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
    let bytes = Fronkensteen.base_64_to_bytes(fronkensteen_fs[filename]["data"]);
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
    return 'data:' + mimetype + ';base64,' + fronkensteen_fs[filename]["data"];
  }
  Fronkensteen.onBiwaSchemeError("Fronkensteen.readInternalFileDataURL: " + filename + " is not in internal filesystem");
  return null;
}


Fronkensteen.getFileSystemJSON = function(){
  return JSON.stringify(fronkensteen_fs);
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
      return Fronkensteen.base_64_to_bytes(fronkensteen_fs[filename]["data"]);
  }
  Fronkensteen.onBiwaSchemeError("Fronkensteen.readInternalFile: " + filename + " is not in internal filesystem");
  return null;
}


Fronkensteen.writeDataURLToInternalFile = function(filename,data){
  let base64offset = data.indexOf("base64,");
  data = data.substring(base64offset + 7);
  fronkensteen_fs[filename] = {}
  fronkensteen_fs[filename]["data"] = data;
  fronkensteen_fs[filename]["timestamp"] = Date.now();
  var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
  intp2.invoke_closure(BiwaScheme.TopEnv["set-system-dirty"], [])
  return true;
}
Fronkensteen.writeInternalFile = function(filename,data){
  Fronkensteen.writeRawInternalFile(filename,  Fronkensteen.bytes_to_base_64(data));
}
Fronkensteen.writeRawInternalFile = function(filename,data){
  let filetype = Fronkensteen.file_extension(filename);
  if(fronkensteen_fs[filename] === undefined){
    fronkensteen_fs[filename] = {}
  }
  fronkensteen_fs[filename]["data"] = data;
  fronkensteen_fs[filename]["timestamp"] = Date.now();
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
  return true;
}



Fronkensteen.folder_rename = function (oldfolder,newfolder){
  let filenames = Object.keys(fronkensteen_fs);
  for(var i = 0; i < filenames.length; i++){
    let current_name = filenames[i];
    if(current_name.match(new RegExp('^' + Fronkensteen.escapeRegExp(oldfolder + '/'))) !== null){
      let newname = current_name.replace(oldfolder,newfolder);
      fronkensteen_fs[newname] = fronkensteen_fs[current_name];
      delete fronkensteen_fs[current_name]
    }
  }
}

Fronkensteen.packageVector = function(){
  let packageHash = {}
  let files = Object.keys(fronkensteen_fs)
  for(var i = 0; i < files.length; i++){
    let packageIndex = files[i].indexOf("/");
    if(packageIndex > 0){
      packageHash[files[i].substring(0,packageIndex)] = true;
    }
  }
  return Object.keys(packageHash).sort(naturalSort({"direction":false,"caseSensitive":false}));
}

Fronkensteen.deletePackage = function(packagename){
  let files = Object.keys(fronkensteen_fs)
  for(var i = 0; i < files.length; i++){
    if(files[i].indexOf(packagename) === 0){
      delete fronkensteen_fs[files[i]];
    }
  }
}
BiwaScheme.define_libfunc("get-package-vector",0,0,function(ar){
  return Fronkensteen.packageVector();
})

BiwaScheme.define_libfunc("delete-package",1,1,function(ar){
  BiwaScheme.assert_string(ar[0]);
  Fronkensteen.deletePackage(ar[0]);
})

BiwaScheme.define_libfunc("install-package", 1, 1, function(ar){
  BiwaScheme.assert_string(ar[0]);
  let encoded_data = ar[0].substring(ar[0].indexOf(",") + 1)
  let data = atob(encoded_data);
  let pkg = JSON.parse(data);
  if(pkg["version"] !== "0.1beta"){
    alert("Expected package version 0.1beta. This package is version " + pkg["version"] + ". Cannot install.");
    return;
  }
  let filenames = Object.keys(pkg);
  for(var i = 0; i < filenames.length; i++){
    let filename = filenames[i];
    console.log("installing " + filename)
    if(filenames[i] !== "version"){
      fronkensteen_fs[filename] = {}
      fronkensteen_fs[filename]["data"] = pkg[filename];
      fronkensteen_fs[filename]["timestamp"] = Date.now();
  }
}
})


BiwaScheme.define_libfunc("decode-base-64-text",1,1,function(ar){
  let datastart = ar[0].substring(ar[0].indexOf(",") + 1);
  return Fronkensteen.decodeText(datastart);
});

BiwaScheme.define_libfunc("get-sorted-file-names",0,0,function(ar){
  // Returns a sorted vector of all the filenames in the filesystem.
  return Fronkensteen.getSortedFileNames()
});
BiwaScheme.define_libfunc("get-unsorted-file-names",0,0,function(ar){
  // Returns an unsorted vector of all the filenames in the filesystem.
  return Fronkensteen.getUnsortedFileNames()
});

BiwaScheme.define_libfunc("get-internal-filesystem-json",0,0,function(ar){
  // Gets the JSON representation of the internal filesystem.
  return Fronkensteen.getFileSystemJSON();
});
BiwaScheme.define_libfunc("get-internal-dir",1,1,function(ar){
  // Returns a vector of all the filenames in the path.
  BiwaScheme.assert_string(ar[0]);
  if(ar[0].charAt(ar[0].length - 1) !== "/") {
    ar[0] = ar[0] + "/";
  }
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

BiwaScheme.define_libfunc("collect-licenses",0,0, function(ar){
// Return the text of all LICENSE* files.
  return Fronkensteen.collectLicenses()
});
BiwaScheme.define_libfunc("file-path-no-extension",1,1, function(ar){
  // Returns the base name (without extension) of a file name, without any preceding path.
  BiwaScheme.assert_string(ar[0]);
  return Fronkensteen.file_path_no_extension(ar[0]);
});
BiwaScheme.define_libfunc("file-basename-no-extension",1,1, function(ar){
  // Returns the base name (without extension) of a file name, without any preceding path.
  BiwaScheme.assert_string(ar[0]);
  return Fronkensteen.file_basename_no_extension(ar[0]);
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
    return true;

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

BiwaScheme.define_libfunc("write-raw-internal-file", 2, 2, function(ar, intp){
    BiwaScheme.assert_string(ar[0]);
    BiwaScheme.assert_string(ar[1]);
    return Fronkensteen.writeRawInternalFile(ar[0],ar[1]);
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
    Fronkensteen.parseSchemeProcedureDefs(path,currentData);
    let result = intp2.evaluate(Fronkensteen.renderReadTemplate(currentData));
    if(Fronkensteen.CumulativeErrors.length !== 0){
      console.error("Errors in " + ar[0])
      result = result + "\n" + Fronkensteen.CumulativeErrors.join("\n");
    }
  Fronkensteen.CumulativeErrors = [];
  Fronkensteen.currentBiwaSchemeLoadFile = null;
  return result;
  });
