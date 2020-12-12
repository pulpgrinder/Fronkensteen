
BiwaScheme.define_libfunc("center-element",1,1,function(ar){
  // Center the element specified in ar[0] in the viewport.
  // Hat tip: James Hibbard at https://hibbard.eu/how-to-center-an-html-element-using-javascript/
  let element = $(ar[0])[0]
  let w = document.documentElement.clientWidth;
  let h = document.documentElement.clientHeight;
  element.style.position = 'absolute';
  element.style.left = (w - element.offsetWidth)/2 + 'px';
  element.style.top = (h - element.offsetHeight)/2 +
                    window.pageYOffset + 'px';
});

BiwaScheme.define_libfunc("display-toast",4,4,function(ar){
  // Position the element specified in ar[0] in the viewport.

  // Second argument is horizontal position, either "l" (left), "c" (center), or "r" (right).
  // Third argument is vertical position, either "t" (top), "c" (center), or "b" (bottom)
  // Fourth argument is time to display in seconds.
  let element = $(ar[0])[0]
  let docwidth = document.documentElement.clientWidth;
  let docheight = document.documentElement.clientHeight;
  let elementwidth = element.offsetWidth;
  let elementheight = element.offsetHeight;
  element.style.position = 'absolute';
  switch (ar[1]){
      case "l" : element.style.left = "0px";
                 element.style.right = "";
                 break;
      case "r" : element.style.right = "0px";
                 element.style.left = "";
                 break;
      case "c" : element.style.left =  (docwidth - elementwidth)/2 + 'px';
                element.style.right = "";
                break;
     default: console.log("position-toast: invalid argument for horizontal " + ar[1]);
  }
  switch (ar[2]){
      case "t" : element.style.top = window.pageYOffset + "px";
                 element.style.bottom = "";
                 break;
      case "b" : element.style.bottom = window.pageYOffset + "px";
                 element.style.top = "";
                 break;
      case "c" : element.style.top =  (docheight - elementheight)/2 +
                        window.pageYOffset + 'px';
                element.style.bottom = "";
                break;
     default: console.log("position-toast: invalid argument for vertical " + ar[2]);
  }
  element.style.zIndex = "20000";
  setTimeout(function(){
    $(ar[0]).remove();
  },ar[3] * 1000)
  $(ar[0]).focus();
  $(ar[0]).blur(function(){
    $(ar[0]).remove();
  })
});

BiwaScheme.define_libfunc("set-draggable!", 1,1,function(ar){
  BiwaScheme.assert_string(ar[0]);
  let options = JSON.parse(ar[0]);
  let element = $(options["element"])[0];
  let saveup = document.onmouseup;
  let savemove = document.onmousemove;
  let endx = 0, endy = 0, startx = 0, starty = 0;
  let dragitem;
  if(options["dragitem"] !== undefined){
    dragitem = $(options["dragitem"])[0];
  }
  else {
    dragitem = element;
  }
  if(options["closebutton"] !== undefined){
    let closebutton = $(options["closebutton"])[0];
    closebutton.onclick = function(e){
      document.onmouseup = saveup;
      document.onmousemove = savemove;
      $(options["element"]).remove();
    }
  }
  dragitem.onmousedown = function(e){
      e.preventDefault();
      let startx = e.clientX;
      let starty = e.clientY;
      document.onmouseup = function(e){
        e.preventDefault();
        document.onmouseup = saveup;
        document.onmousemove = savemove;
        return true;
      };
    document.onmousemove = function(e){
      e.preventDefault();
      endx = startx - e.clientX;
      endy = starty - e.clientY;
      startx = e.clientX;
      starty = e.clientY;
      element.style.top = (element.offsetTop - endy) + "px";
      element.style.left = (element.offsetLeft - endx) + "px";
      return true;
    };
    return true;
  }
})
