
/*
(show-page page-id reverse transition)
Animate the page  with the given page-id into view.
reverse (optional) specifies whether to run the transition in the reverse direction (default: false)
transition (optional) specifies which transition animation to use. Available
options: slide, fade, cover, cover-double,revolution, bounce.
Default: cover-double.
*/
BiwaScheme.define_libfunc("js-show-page",1,3,function(ar){
  BiwaScheme.assert_string(ar[0]);
  let inblock = $(ar[0])[0];
  let outblock;
  let existing = $("#fronkensteen-active-pages div").first()
  if(existing.length > 0){
    outblock = existing[0];
  }
  else{
    outblock = null;
  }
  let reverse = false;

  if(ar.length > 1){
    reverse = ar[1];
  }
  let transition = "cover-double";
  if(ar.length > 2){
    transition = ar[2];
  }
  if(reverse === true){
    transition = transition + "-out"
  }
  else{
    transition = transition + "-in"
  }
  AnimateTransition({
        container: $("#fronkensteen-active-pages")[0],
        blockIn: inblock,
        blockOut:outblock,
        animation: transition,
        onTransitionEnd: function (blockIn, blockOut, container, event) {
          if(outblock !== null){
            $("#fronkensteen-page-store").append(outblock)
          }
          if(BiwaScheme.is_defined("post-display") === true){
            var intp2 = new BiwaScheme.Interpreter(Fronkensteen.scheme_intepreter);
            let system_dirty = intp2.invoke_closure(BiwaScheme.TopEnv["post-display"], []);
          }
        }

    })
})


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


BiwaScheme.define_libfunc("set-draggable!", 1,4,function(ar){
  BiwaScheme.assert_string(ar[0]);
  let element = ar[0];
  let handleelement;
  if((ar.length > 1) && (ar[1] !== "self")){
    BiwaScheme.assert_string(ar[1]);
    handleelement = ar[1];
      var $draggable = $(element).draggabilly({
        handle:handleelement
      })
  }
  else {
      var $draggable = $(element).draggabilly({
      })
  }
  if(ar.length > 2){
    if(ar[2] !== false){
      BiwaScheme.assert_string(ar[2]);
      let closebutton = ar[2];
      $(closebutton).click(function(){
        $draggable.draggabilly("destroy")
        $(element).remove();
      }
   )
  }
 }
  if(ar.length > 3){
      $draggable.on("dragEnd",
      function(){
        $(ar[3]).focus();
      })
  }
});
