// fronkensteen-baler.js. Generates distributable bale packages from bale source.

// Copyright 2020 by Anthony W. Hursh. MIT License.
const fs = require('fs');
const path = require('path')
const mime = require('mime');
const btoa  = require('btoa');
console.log("Root folder is " + __dirname);
let baler_version = "0.1"
filewalker(__dirname + "/bales-src",".balespec",bale_processor);

function bale_processor(err,results){
  if(err !== null){
    console.error("Bale processor error: " + err);
  }
  else {
    for(var i = 0; i < results.length; i++){
      bale(results[i]);
    }
  }
}


function bale(bale_path){
    let bale_object = {}
    let bale_loader = []
    let directives = {}
    bale_path = bale_path.trim();
    if(bale_path === ""){
      return;
    }
    console.log("Baling: " + bale_path);
    let bale_directory = file_directory(bale_path);
    let bale_base = file_basename(bale_path);
    let bale_name = file_basename_no_extension(bale_path);
    directives["mandatory"] = "false";
    directives["bale-version"] = "0.0";
    directives["version"] = "0.0";
    directives["load-bale"] = true;
    let bale_data = fs.readFileSync(bale_path,"utf8");
    bale_data = bale_data.trim();
    let bale_files = bale_data.split("\n");
    let seenlicense = false;
    let licensefilename = bale_directory + "/LICENSE-" + bale_name + ".md"
    for(var i = 0; i < bale_files.length; i++){
      let bale_line = bale_files[i].trim();
      if(bale_line.indexOf("#") === 0){
        directives = process_directive(directives,bale_line)
      }
      else {
        let bale_file = bale_directory + "/" + bale_line;
        if(bale_file === licensefilename){
          seenlicense = true;
        }
        let bale_file_data = fs.readFileSync(bale_file,"binary");
        let outfile_name =  bale_file.substring(bale_file.lastIndexOf(bale_name + "/"))
        bale_loader.push(outfile_name);
        bale_object[outfile_name] = btoa(bale_file_data)
      }
    }

    if(seenlicense === false){
        console.log("Missing license file: " + licensefilename + ", skipping bale " + bale_path);
        return false;
    }
    if(directives["bale-version"] !== baler_version){
      console.log("Incompatible bale version " + directives["bale-version"] + ", expected " + baler_version + ". Skipping bale " + bale_path);
      return;
    }
    let bale_version_name = bale_name + "/" + "$$BALE-VERSION$$"
    bale_object[bale_version_name] = directives["bale-version"];

    bale_loader.push(bale_version_name)
    let version_name = bale_name + "/" + "$$VERSION$$"
    bale_object[version_name] = directives["version"];
    bale_loader.push(version_name)
    let mandatory_name = bale_name + "/" + "$$MANDATORY$$"
    bale_object[mandatory_name] = (directives["mandatory"] === "true") ? true:false;
    bale_loader.push(mandatory_name);
    let load_bale_name = bale_name + "/" + "$$LOAD_BALE$$"
    bale_object[load_bale_name] = (directives["load-bale"] === "false") ? false:true;
    bale_loader.push(load_bale_name);
    bale_object[bale_name + "/" + "$$FILEMANIFEST$$"] = bale_loader;
    fs.writeFileSync(__dirname + "/" + "bales-dist/" + bale_name + ".bale",JSON.stringify(bale_object));

}

function process_directive(directives,directive){
  directive_fields = directive.split(' ')
  if(directive_fields.length !== 2){
    console.log("Bad directive: " + directive);
    return null;
  }

  directive_key = directive_fields[0].substring(1);
  directive_value = directive_fields[1];
  directives[directive_key] = directive_value;
  return directives

}
/*
function btoa(str) {
  // From https://git.coolaj86.com/coolaj86/btoa.js.git
  // By AJ ONeal.
  // Dual-licensed MIT or Apache-2.0.
  var buffer;

  if (str instanceof Buffer) {
    buffer = str;
  } else {
    buffer = Buffer.from(str.toString(), 'binary');
  }

  return buffer.toString('base64');
} */

/**
 * Explores recursively a directory and returns all the filepaths and folderpaths in the callback.
 *
 * @see http://stackoverflow.com/a/5827895/4241030
 * @param {String} dir
 * @param {Function} done
 */
function filewalker(dir, type, done) {
    let results = [];

    fs.readdir(dir, function(err, list) {
        if (err) return done(err);

        var pending = list.length;

        if (!pending) return done(null, results);

        list.forEach(function(file){
            file = path.resolve(dir, file);

            fs.stat(file, function(err, stat){
                // If directory, execute a recursive call
                if (stat && stat.isDirectory()) {
                    // Add directory to array [comment if you need to remove the directories from the array]
                  //  results.push(file);

                    filewalker(file, type, function(err, res){
                        results = results.concat(res);
                        if (!--pending) done(null, results);
                    });
                } else {
                  //  console.log("Checking file: " + file)
                    if(type !== null){
                      if(file.indexOf(type) === (file.length - type.length)){
                        results.push(file);
                      }
                    }
                    else {
                      results.push(file);
                    }
                    if (!--pending) done(null, results);
                }
            });
        });
    });
};


file_directory = function(filename){
  let lastSlash = filename.lastIndexOf("/");
  if(lastSlash < 0){
    return "";
  }
  return filename.substring(0,lastSlash);
}
file_extension = function(filename){
  let end = filename.lastIndexOf('.');
  if(end < 0){
    return "";
  }
  return filename.substring(end + 1);
}

file_basename = function(filename){
  return filename.substring(filename.lastIndexOf('/') + 1);
}


file_basename_no_extension = function(filename){
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


file_name_no_extension = function(filename){
  let end = filename.lastIndexOf('.');
  if(end < 0){
    end = filename.length;
  }
  return filename.substring(0,end);
}
