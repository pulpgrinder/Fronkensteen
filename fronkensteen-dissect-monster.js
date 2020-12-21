const fs = require('fs-extra');
const path = require('path')
const mime = require('mime');
const btoa  = require('btoa');
const atob  = require('atob');

let argv = process.argv;
if(argv.length !== 3){
  console.log("Usage: " + argv[0] + " " + argv[1] + " (Fronkensteen filesystem file)");
  process.exit(1);
}

let fronkensteen_fs = JSON.parse(fs.readFileSync(argv[2]))
let keys = Object.keys(fronkensteen_fs);
for(keyindex = 0; keyindex < keys.length; keyindex++){
  extract_file(keys[keyindex]);
}
fs.ensureDirSync(__dirname + "/dist", err => {
console.log(err)
})
function extract_file(key){
  let filedata = atob(fronkensteen_fs[key]["data"]);
  let filepath;
  if(key.indexOf("buildtools/") === 0){
    filepath = key.replace("buildtools/", __dirname + "/");
  }
  else{
    filepath =  __dirname + "/src/" + key;
  }
  console.log("filepath is " + filepath)
  console.log("Creating " + path.dirname(filepath))
  fs.ensureDirSync(path.dirname(filepath), err => {
  console.log(err)
})
  fs.writeFileSync(filepath,filedata,"binary");
}
