// uploader-extensions.js.
// Fronkensteen upload/download procedures for BiwaScheme
// Copyright 2020 by Anthony W. Hursh
// MIT License.

Fronkensteen.uploadElement = null;
Fronkensteen.setUploadElement = function(element_id){
  Fronkensteen.uploadElement = element_id;
  return $("#"+ Fronkensteen.uploadElement)
}

Fronkensteen.uploadFile = function(type,multiple,proc){
  if(Fronkensteen.uploadElement === null){
    console.error("file uploader not defined. Try running (build-uploader) first.");
    return false;
  }
  let uploader = $("#"+ Fronkensteen.uploadElement);
  if(type !== false){
    uploader.attr('accept', type);
  }
  else {
    uploader.removeAttr("accept");
  }
  if(multiple === true){
    uploader.attr('multiple','');

  }
  else {
    uploader.removeAttr('multiple');
  }
  uploader.off("change");
  uploader.val('');
  uploader.change(function(){
    let curFiles = $("#" + Fronkensteen.uploadElement)[0].files;
    for (var i = 0; i < curFiles.length; i++) {
      let reader = new FileReader();
      reader.onloadend = (function(filename) {
        return function(evt) {
          var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
          intp2.invoke_closure(proc, [filename, evt.target.result]);
        };
      })(curFiles[i].name);
      reader.readAsDataURL(curFiles[i]);
    }
  })
}

Fronkensteen.downloadFile = function(filename,data,mime_type){
  let element = document.getElementById("fronkensteen-download-link");
  if(element.href !== undefined){
    window.URL.revokeObjectURL(element.href);
  }
  var bb = new Blob([data], {type: mime_type});
  element.href = window.URL.createObjectURL(bb);
  element.setAttribute('download', filename);
  //element.style.display = 'none';
  element.innerHTML = "Download";
  //document.body.appendChild(element)
   element.click();
}


Fronkensteen.downloadInternalFile = function(filename){
//  let element = document.createElement('a');
  let element = document.getElementById("fronkensteen-download-link");
  if(element.href !== undefined){
    window.URL.revokeObjectURL(element.href);
  }
  var blob = Fronkensteen.internalFileToBlob(filename);
  if(blob !== false){
    element.href = window.URL.createObjectURL(blob);
    element.setAttribute('download', Fronkensteen.file_basename(filename));
    //element.style.display = 'none';
    element.innerHTML = "Download";
    //document.body.appendChild(element)
    element.click();
    return true;
  }
  return false;
}


BiwaScheme.define_libfunc("upload-file", 3, 3, function(ar, intp){
  let result = Fronkensteen.uploadFile(ar[0],ar[1],ar[2]);
  setTimeout(function(){$("#" + Fronkensteen.uploadElement + "-clickupload").click()},20);
  return result;
});

BiwaScheme.define_libfunc("download-internal-file", 1, 1, function(ar, intp){
  BiwaScheme.assert_string(ar[0]);
  Fronkensteen.downloadInternalFile(ar[0]);
});

BiwaScheme.define_libfunc("download-file", 3, 3, function(ar, intp){
  BiwaScheme.assert_string(ar[0]);
  BiwaScheme.assert_string(ar[1]);
  BiwaScheme.assert_string(ar[2]);
  Fronkensteen.downloadFile(ar[0],ar[1],ar[2]);
});

BiwaScheme.define_libfunc("set-upload-element", 1, 1, function(ar, intp){
  return Fronkensteen.setUploadElement(ar[0]);
});
