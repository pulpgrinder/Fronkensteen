// fronkensteen-builder.js. Bootstraps a fresh Fronkensteen system from individual bale files.
// Copyright 2020 by Anthony W. Hursh. MIT License.
const fs = require('fs');
const path = require('path')
console.log("Root folder is " + __dirname);

let filesystem = {};
let bale_manifest = [];
let buildfile_name;
var clargs = process.argv.slice(2);
if(clargs.length === 0){
  buildfile_name = "default-build"
}
else {
 buildfile_name = clargs[0];
}
if(buildfile_name.indexOf(".bale_config") === -1){
  buildfile_name = buildfile_name + ".bale_config"
}
console.log("Building from " + buildfile_name);
let bale_list = fs.readFileSync(__dirname + "/" + buildfile_name,"utf8");
let bale_array = bale_list.trim().split("\n")
for(var i = 0; i < bale_array.length; i++){
  process_bale(bale_array[i])
}
filesystem["$$BALEMANIFEST$$"] = bale_manifest;
write_html();

function write_html(){
  let template = fs.readFileSync(__dirname + "/bales-src/root/fronkensteen_template.html","utf8");
  let template_out = "";
  let template_lines = template.split("\n");
  for(var i = 0; i < template_lines.length; i++){
    let template_line = template_lines[i].trim();
    if(template_line.indexOf("$$$") === -1){
      template_out = template_out + template_line + "\n";
    }
    else{
      switch(template_line.trim()){
        case "$$$FILESYSTEM$$$":   template_out = template_out + "let fronkensteen_fs=" + JSON.stringify(filesystem)
              break;
        default: template_out = template_out + template_line + "\n"
              break;
      }
    }
  }
  console.log("Writing html file...");
  fs.writeFileSync(__dirname +  "/dist/fronkensteen.html",template_out,"utf8");

}

function process_bale(bale_name){
  console.log("Processing bale: " + bale_name)
  bale_name = bale_name.trim();
  if(bale_name === ""){
    return;
  }
  bale_manifest.push(bale_name)
  let bale_path = __dirname + "/bales-dist" + "/"
  let bale_data = fs.readFileSync(bale_path + bale_name + ".bale","utf8");
  let bale_object = JSON.parse(bale_data);
  let keys = Object.keys(bale_object);
  for(var i = 0; i < keys.length; i++){
    filesystem[keys[i]] = bale_object[keys[i]]
  }

}
