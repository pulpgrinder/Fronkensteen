// browser-extensions.js.
// browser-related extension procedures for BiwaScheme
// Copyright 2018-2019 by Anthony W. Hursh
// MIT License.


Fronkensteen.docroot =  document.location.href;

BiwaScheme.define_libfunc("set-html-app-name!", 1, 1, function(ar){
 // Clear out local storage
   BiwaScheme.assert_string(ar[0])
   Fronkensteen.appName = ar[0];
   document.title = ar[0] + ""
});
Fronkensteen.clearLocalStorage = function(){
  localStorage.clear();
}

BiwaScheme.define_libfunc("clear-local-storage!", 0, 0, function(ar){
 // Clear out local storage
   Fronkensteen.clearLocalStorage();
});

Fronkensteen.getLocalStorageItem = function(key){
  let rawItem = localStorage[key];
  if(rawItem == undefined){
      return false;
  }
  return JSON.parse(rawItem);
}

var lastevent;
window.onpopstate = function(event) {
  if(BiwaScheme.is_procedure_defined("pop-browser-state_handler")){
    var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
    let state = event.state;
    if(state === null){
      intp2.invoke_closure(BiwaScheme.TopEnv["pop-browser-state_handler"], [false])
    }
    else{
      intp2.invoke_closure(BiwaScheme.TopEnv["pop-browser-state_handler"],[JSON.stringify(state)])
    }
  }
  else {
    console.error("No pop-browser-state_handler defined.")
  }
};

BiwaScheme.define_libfunc("doc-root", 0, 0, function(ar){
  return Fronkensteen.docroot;
});
BiwaScheme.define_libfunc("push-browser-state", 3, 3, function(ar){
    // Pushes the specified state in the window history.
    BiwaScheme.assert_string(ar[0]); // State
    BiwaScheme.assert_string(ar[1]); // Title (not supported by all browsers)
    BiwaScheme.assert_string(ar[2]); // URL
    history.pushState(JSON.parse(ar[0]),ar[1],ar[2])
});

BiwaScheme.define_libfunc("replace-browser-state", 3, 3, function(ar){
    // Replaces the current state in the window history.
    BiwaScheme.assert_string(ar[0]); // State
    BiwaScheme.assert_string(ar[1]); // Title (not supported by all browsers)
    BiwaScheme.assert_string(ar[2]); // URL
    history.replaceState(JSON.parse(ar[0]),ar[1],ar[2])
});

BiwaScheme.define_libfunc("get-local-storage-item", 1, 1, function(ar){
    // Retrieve the local storage item with the key in ar[0] (if any).
    // Otherwise returns false;
    BiwaScheme.assert_string(ar[0]);
    return Fronkensteen.getLocalStorageItem(ar[0])
});

Fronkensteen.removeLocalStorageItem = function(key){
    localStorage.removeItem(key);
}
BiwaScheme.define_libfunc("remove-local-storage-item!", 1, 1, function(ar){
  // Remove the item specified by the key in ar[0] from local storage.
    BiwaScheme.assert_string(ar[0]);
    Fronkensteen.removeLocalStorageItem(ar[0])
});


Fronkensteen.setLocalStorageItem = function(key,value){
  localStorage[key] = JSON.stringify(value);
}

BiwaScheme.define_libfunc("set-local-storage-item!", 2, 2, function(ar){
  // Set the local storage item specified by the key in ar[0] to the value
  // specified by ar[1].
    BiwaScheme.assert_string(ar[0]);
    BiwaScheme.assert_string(ar[1]);
    Fronkensteen.setLocalStorageItem(ar[0],ar[1]);
});



BiwaScheme.define_libfunc("nav-go-forward", 0, 0, function(ar){
  // Same effect as clicking the forward button.
    history.go(1);
});
BiwaScheme.define_libfunc("nav-go-back", 0, 0, function(ar){
    // Same effect as clicking the back button.
    history.go(-1);
});
BiwaScheme.define_libfunc("nav-go-history", 1, 1, function(ar){
  // Go to an arbitrary location in the browser's history.
    history.go(ar[0]);
});
BiwaScheme.define_libfunc("window-object", 0, 0, function(ar){
  // Return the main window object
    return window;
});

BiwaScheme.define_libfunc("document-object", 0, 0, function(ar){
  // Return the current document.
    return document;
});



BiwaScheme.define_libfunc("window-location-href", 0, 0, function(ar){
  // Return the URL for the current document.
    return window.location.href;
});

BiwaScheme.define_libfunc("window-location-hash", 0, 0, function(ar){
  // Return the hash portion of the URL for the current document.
  return window.location.hash;
});

BiwaScheme.define_libfunc("window-location-replace!", 1, 1, function(ar){
  // Prevent a navigation from appearing in the history.
  window.location.replace(ar[0])
});

BiwaScheme.define_libfunc("set-window-location-hash!", 1, 1, function(ar){
  //Set the hash portion of the URL for the current document.
  if(window.location.hash !== ar[0]){ // We don't want to trigger a hashchange event if it hasn't actually changed.
    window.location.hash = ar[0];
  }
});

BiwaScheme.define_libfunc("window-location-host", 0, 0, function(ar){
  // Return the host:portnum portion of the URL for the current document.
  return window.location.host;
});

BiwaScheme.define_libfunc("window-location-hostname", 0, 0, function(ar){
  // Return the host name (without the port) portion of the URL for the current document.
  return window.location.hostname;
});


BiwaScheme.define_libfunc("window-location-origin", 0, 0, function(ar){
  // Return the scheme, domain, and port of the URL for the current document.
  return window.location.origin;
});

BiwaScheme.define_libfunc("window-location-password", 0, 0, function(ar){
  // Return the password portion of the URL for the current document.
  let url = new URL(window.location.href);
  return url.password;
});

BiwaScheme.define_libfunc("window-location-pathname", 0, 0, function(ar){
  // Return the pathname of the URL for the current document (preceded by a '/').
  return window.location.pathname;
});


BiwaScheme.define_libfunc("window-location-basename-no-extension", 0, 0, function(ar){
  // Return the base file name (no extension) of the URL for the current document.
  return Fronkensteen.file_basename_no_extension(window.location.pathname);
});

BiwaScheme.define_libfunc("window-location-basename", 0, 0, function(ar){
  // Return the base file name (no extension) of the URL for the current document.
  return Fronkensteen.file_basename(window.location.pathname);
});
BiwaScheme.define_libfunc("window-location-port", 0, 0, function(ar){
  // Return the port number for the URL for the current document.
  return window.location.pathname;
});

BiwaScheme.define_libfunc("window-location-search", 0, 0, function(ar){
  // Return the search (query) string for the URL for the current document.
  return window.location.search;
});

BiwaScheme.define_libfunc("window-location-username", 0, 0, function(ar){
  // Return the username string for the URL for the current document.
  let url = new URL(window.location.href);
  return url.username;
});

BiwaScheme.define_libfunc("navigate-url", 1, 1, function(ar){
  // Navigate the browser to the URL specified in ar[0].
  // Uses the main window, which may lose app state. See open-url
  // if you want to open the url in a new window.
    BiwaScheme.assert_string(ar[0]);
    window.location.href = ar[0];
    return true;
});

BiwaScheme.define_libfunc("open-url", 1, 1, function(ar){
  // Open the website URL specified in ar[0] in a new window.
  // See navigate-url if you want to open the URL in the main window.
    BiwaScheme.assert_string(ar[0]);
    window.open(ar[0]);
    return true;
});


BiwaScheme.define_libfunc("scroll-to-bottom",1, 1, function(ar){
  // Scroll an element to its bottom.
  BiwaScheme.assert_string(ar[0]);
  $(ar[0]).scrollTop($(ar[0]).height());
});

BiwaScheme.define_libfunc("scroll-to-top",1, 1, function(ar){
    BiwaScheme.assert_string(ar[0]);
    $(ar[0]).scrollTop(0);
    //window.scrollTo(0,0);
    return true;
});


BiwaScheme.define_libfunc("write-to-clipboard!", 1, 1, function(ar){
  // Copy the string in ar[0] to the clipboard. Not available in some
  // platforms (security issue). In others you may be able to call this from a user-initiated event (such as a click).
    BiwaScheme.assert_string(ar[0]);
    navigator.clipboard.writeText(ar[0]).then(function() {
             return true;
           }, function() {
    // Promise rejected.
        console.log("Unable to write to clipboard.");
        return false;
      })});

BiwaScheme.define_libfunc("url-params",1,1,function(ar){
   let urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(ar[0]);
})

Fronkensteen.isFullScreen = false;

document.addEventListener("fullscreenchange", function(){Fronkensteen.toggleFullScreen()});

document.addEventListener("mozfullscreenchange", function(){Fronkensteen.toggleFullScreen()});

document.addEventListener("webkitfullscreenchange", function(){Fronkensteen.toggleFullScreen()});

Fronkensteen.toggleFullScreen = function(){
  Fronkensteen.isFullScreen = !Fronkensteen.isFullScreen;
  if(BiwaScheme.is_procedure_defined("toggle-fullscreen") === true){
    var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
    intp2.evaluate("(toggle-fullscreen)");
  }
}
BiwaScheme.define_libfunc("request-fullscreen",0,0, function(ar){
  let elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  }
})

BiwaScheme.define_libfunc("exit-fullscreen",0,0, function(ar){
  if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    }
})

BiwaScheme.define_libfunc("is-fullscreen?",0,0, function(ar){
    return Fronkensteen.isFullScreen;
  });
