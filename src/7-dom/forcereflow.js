// Credit: https://github.com/anonyco/Force-DOM-reflow-JS WTFPL

try{forceReflowJS=atob.call.bind(Object.getOwnPropertyDescriptor(HTMLElement.prototype,"offsetHeight").get)}catch(e){forceReflowJS=function(a){"use strict";void a.offsetHeight}}
