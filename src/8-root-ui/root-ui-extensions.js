/*BiwaScheme.define_libfunc("set-draggable!", 1,2, function(ar){
  // ar[0] is id, ar[1], if supplied, is  drag handle
  if(ar.length === 1){
    $(ar[0]).draggable()
  }
  else{
    $(ar[0]).draggable({handle:ar[1]})
  }

}); */

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
    console.log("Got closebutton: " + options["closebutton"])
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
