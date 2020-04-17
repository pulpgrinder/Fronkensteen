const fs = require('fs');
const path = require('path')
const mime = require('mime');
const atob = require('atob')
const readlineSync = require('readline-sync')

let baler_version = "0.1"

if(process.argv[2] === undefined){
  console.log("usage: unbaler (balename)");
  process.exit(1);
}
let bale_name = process.argv[2]
let src = (__dirname + "/bales-dist/" + bale_name + ".bale")
if(fs.existsSync(src) === false) {
  console.log(src + ": file does not exist");
  process.exit(2);
}
let bale_folder = __dirname + "/bales-src/" + bale_name
if(fs.existsSync(bale_folder)){
  let overwrite = readlineSync.question(bale_folder + " exists. Overwrite it (y/n)? ")
  if(overwrite !== "y"){
    process.exit(2);
  }
}
else {
  fs.mkdirSync(bale_folder);
}

let bale_file_data = JSON.parse(fs.readFileSync(src,"utf8"));
let bale_filename_list = [];
let bale_metadata = {}
let manifest_data = new TextDecoder("utf-8").decode(bale_file_data[bale_name + "/$CODE_LOADER"]);
let file_manifest = manifest_data.split("\n")
console.log("file manifest is: ")
console.log(file_manifest)
console.log ("there are " + file_manifest.length + " files.")
for(var i = 0; i < file_manifest.length; i++){
  let current_file_name = file_manifest[i];
  console.log("current_file_name: " + current_file_name)
  if(current_file_name.match(/.+\$\$$/) !== null){
    console.log("metadata: " + current_file_name)
    bale_metadata[current_file_name] = bale_file_data[current_file_name]
  }
  else {
    bale_filename_list.push(path.basename(file_manifest[i]));
    let outfilename = __dirname + "/bales-src/" + file_manifest[i]
    let byteCharacters = atob(bale_file_data[current_file_name])
    let data_array = new Uint8Array(byteCharacters.length);
    for( var j = 0; j < byteCharacters.length; j++ ) { data_array[j] = byteCharacters.charCodeAt(j);
    }
    console.log("Writing: " + outfilename);
    fs.writeFileSync(outfilename,data_array);
  }
}
console.log("Metadata:")
console.log(bale_metadata)
let metadata_keys = Object.keys(bale_metadata)
let balespec_text = ""
for(var i = 0; i < metadata_keys.length; i++){
  let directive_name =  metadata_keys[i].substring(metadata_keys[i].lastIndexOf("/") + 1).replace(/\$/g,"").toLowerCase()
  balespec_text = balespec_text + "#" + directive_name + " " + bale_file_data[metadata_keys[i]] + "\n"
}
console.log("balespec: \n" + balespec_text)
balespec_text = balespec_text + bale_filename_list.join("\n")
fs.writeFileSync(__dirname + "/bales-src/" + bale_name + "/" + bale_name + ".balespec",balespec_text);
