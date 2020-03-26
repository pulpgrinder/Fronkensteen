/*
 * BiwaScheme 0.6.8 - R6RS Scheme in JavaScript
 *
 * Copyright (c) 2007-2014 Yutaka HARA (http://www.biwascheme.org/)
 * @license Licensed under the MIT license.
 */

var BiwaScheme = BiwaScheme || {};

BiwaScheme.Version = "0.6.8";  // TODO: deprecate this
BiwaScheme.VERSION = "0.6.8";
BiwaScheme.GitCommit = "2f69a3dfab57f8ec9b5c2c98702db703192bf8b7";
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});
// Underscore.js 1.2.2
// (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function r(a,c,d){if(a===c)return a!==0||1/a==1/c;if(a==null||c==null)return a===c;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(b.isFunction(a.isEqual))return a.isEqual(c);if(b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return false;switch(e){case "[object String]":return String(a)==String(c);case "[object Number]":return a=+a,c=+c,a!=a?c!=c:a==0?1/a==1/c:a==c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if(typeof a!="object"||typeof c!="object")return false;for(var f=d.length;f--;)if(d[f]==a)return true;d.push(a);var f=0,g=true;if(e=="[object Array]"){if(f=a.length,g=f==c.length)for(;f--;)if(!(g=f in a==f in c&&r(a[f],c[f],d)))break}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return false;for(var h in a)if(m.call(a,h)&&(f++,!(g=m.call(c,h)&&r(a[h],c[h],d))))break;if(g){for(h in c)if(m.call(c,
h)&&!f--)break;g=!f}}d.pop();return g}var s=this,F=s._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,G=k.unshift,l=p.toString,m=p.hasOwnProperty,v=k.forEach,w=k.map,x=k.reduce,y=k.reduceRight,z=k.filter,A=k.every,B=k.some,q=k.indexOf,C=k.lastIndexOf,p=Array.isArray,H=Object.keys,t=Function.prototype.bind,b=function(a){return new n(a)};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports)exports=module.exports=b;exports._=b}else typeof define==="function"&&define.amd?
define("underscore",function(){return b}):s._=b;b.VERSION="1.2.2";var j=b.each=b.forEach=function(a,c,b){if(a!=null)if(v&&a.forEach===v)a.forEach(c,b);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(b,a[e],e,a)===o)break}else for(e in a)if(m.call(a,e)&&c.call(b,a[e],e,a)===o)break};b.map=function(a,c,b){var e=[];if(a==null)return e;if(w&&a.map===w)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=
d!==void 0;a==null&&(a=[]);if(x&&a.reduce===x)return e&&(c=b.bind(c,e)),f?a.reduce(c,d):a.reduce(c);j(a,function(a,b,i){f?d=c.call(e,d,a,b,i):(d=a,f=true)});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){a==null&&(a=[]);if(y&&a.reduceRight===y)return e&&(c=b.bind(c,e)),d!==void 0?a.reduceRight(c,d):a.reduceRight(c);a=(b.isArray(a)?a.slice():b.toArray(a)).reverse();return b.reduce(a,c,d,e)};b.find=b.detect=function(a,c,b){var e;
D(a,function(a,g,h){if(c.call(b,a,g,h))return e=a,true});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.filter===z)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(A&&a.every===A)return a.every(c,b);j(a,function(a,g,h){if(!(e=e&&c.call(b,a,g,h)))return o});
return e};var D=b.some=b.any=function(a,c,d){var c=c||b.identity,e=false;if(a==null)return e;if(B&&a.some===B)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;return q&&a.indexOf===q?a.indexOf(c)!=-1:b=D(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(c.call?c||a:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};
b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var c=[],b;
j(a,function(a,f){f==0?c[0]=a:(b=Math.floor(Math.random()*(f+1)),c[f]=c[b],c[b]=a)});return c};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,g){return{value:a,criteria:c.call(d,a,b,g)}}).sort(function(a,c){var b=a.criteria,d=c.criteria;return b<d?-1:b>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};j(a,function(a,c){var b=e(a,c);(d[b]||(d[b]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<
f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:a.toArray?a.toArray():b.isArray(a)?i.call(a):b.isArguments(a)?i.call(a):b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||
d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,e=[];b.reduce(d,function(d,g,h){if(0==h||(c===true?b.last(d)!=g:!b.include(d,g)))d[d.length]=g,e[e.length]=a[h];return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,
true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a,c){return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(q&&a.indexOf===q)return a.indexOf(c);
for(d=0,e=a.length;d<e;d++)if(a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(C&&a.lastIndexOf===C)return a.lastIndexOf(b);for(var d=a.length;d--;)if(a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;)g[f++]=a,a+=d;return g};var E=function(){};b.bind=function(a,c){var d,e;if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;
e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));E.prototype=a.prototype;var b=new E,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var b=c.apply(this,arguments);return m.call(d,b)?d[b]:d[b]=a.apply(this,arguments)}};b.delay=
function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i=b.debounce(function(){h=g=false},c);return function(){d=this;e=arguments;var b;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);i()},c));g?h=true:a.apply(d,e);i();g=true}};b.debounce=function(a,b){var d;return function(){var e=this,f=arguments;clearTimeout(d);d=setTimeout(function(){d=
null;a.apply(e,f)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments));return b.apply(this,d)}};b.compose=function(){var a=i.call(arguments);return function(){for(var b=i.call(arguments),d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=H||function(a){if(a!==
Object(a))throw new TypeError("Invalid object");var b=[],d;for(d in a)m.call(a,d)&&(b[b.length]=d);return b};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)b[d]!==void 0&&(a[d]=b[d])});return a};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?
a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return r(a,b,[])};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(m.call(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=l.call(arguments)=="[object Arguments]"?function(a){return l.call(a)=="[object Arguments]"}:
function(a){return!(!a||!m.call(a,"callee"))};b.isFunction=function(a){return l.call(a)=="[object Function]"};b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};
b.isUndefined=function(a){return a===void 0};b.noConflict=function(){s._=F;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.mixin=function(a){j(b.functions(a),function(c){I(c,b[c]=a[c])})};var J=0;b.uniqueId=function(a){var b=J++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,
interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};b.template=function(a,c){var d=b.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.escape,function(a,b){return"',_.escape("+b.replace(/\\'/g,"'")+"),'"}).replace(d.interpolate,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(d.evaluate||null,function(a,b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,
"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",e=new Function("obj","_",d);return c?e(c,b):function(a){return e(a,b)}};var n=function(a){this._wrapped=a};b.prototype=n.prototype;var u=function(a,c){return c?b(a).chain():a},I=function(a,c){n.prototype[a]=function(){var a=i.call(arguments);G.call(a,this._wrapped);return u(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];n.prototype[a]=function(){b.apply(this._wrapped,
arguments);return u(this._wrapped,this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];n.prototype[a]=function(){return u(b.apply(this._wrapped,arguments),this._chain)}});n.prototype.chain=function(){this._chain=true;return this};n.prototype.value=function(){return this._wrapped}}).call(this);
(function(k){var o=String.prototype.trim,l=function(a,b){for(var c=[];b>0;c[--b]=a);return c.join("")},d=function(a){return function(){for(var b=Array.prototype.slice.call(arguments),c=0;c<b.length;c++)b[c]=b[c]==null?"":""+b[c];return a.apply(null,b)}},m=function(){function a(a){return Object.prototype.toString.call(a).slice(8,-1).toLowerCase()}var b=function(){b.cache.hasOwnProperty(arguments[0])||(b.cache[arguments[0]]=b.parse(arguments[0]));return b.format.call(null,b.cache[arguments[0]],arguments)};
b.format=function(b,n){var e=1,d=b.length,f="",j=[],h,i,g,k;for(h=0;h<d;h++)if(f=a(b[h]),f==="string")j.push(b[h]);else if(f==="array"){g=b[h];if(g[2]){f=n[e];for(i=0;i<g[2].length;i++){if(!f.hasOwnProperty(g[2][i]))throw m('[_.sprintf] property "%s" does not exist',g[2][i]);f=f[g[2][i]]}}else f=g[1]?n[g[1]]:n[e++];if(/[^s]/.test(g[8])&&a(f)!="number")throw m("[_.sprintf] expecting number but found %s",a(f));switch(g[8]){case "b":f=f.toString(2);break;case "c":f=String.fromCharCode(f);break;case "d":f=
parseInt(f,10);break;case "e":f=g[7]?f.toExponential(g[7]):f.toExponential();break;case "f":f=g[7]?parseFloat(f).toFixed(g[7]):parseFloat(f);break;case "o":f=f.toString(8);break;case "s":f=(f=String(f))&&g[7]?f.substring(0,g[7]):f;break;case "u":f=Math.abs(f);break;case "x":f=f.toString(16);break;case "X":f=f.toString(16).toUpperCase()}f=/[def]/.test(g[8])&&g[3]&&f>=0?"+"+f:f;i=g[4]?g[4]=="0"?"0":g[4].charAt(1):" ";k=g[6]-String(f).length;i=g[6]?l(i,k):"";j.push(g[5]?f+i:i+f)}return j.join("")};b.cache=
{};b.parse=function(a){for(var b=[],e=[],d=0;a;){if((b=/^[^\x25]+/.exec(a))!==null)e.push(b[0]);else if((b=/^\x25{2}/.exec(a))!==null)e.push("%");else if((b=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(a))!==null){if(b[2]){d|=1;var f=[],j=b[2],h=[];if((h=/^([a-z_][a-z_\d]*)/i.exec(j))!==null)for(f.push(h[1]);(j=j.substring(h[0].length))!=="";)if((h=/^\.([a-z_][a-z_\d]*)/i.exec(j))!==null)f.push(h[1]);else if((h=/^\[(\d+)\]/.exec(j))!==null)f.push(h[1]);
else throw"[_.sprintf] huh?";else throw"[_.sprintf] huh?";b[2]=f}else d|=2;if(d===3)throw"[_.sprintf] mixing positional and named placeholders is not (yet) supported";e.push(b)}else throw"[_.sprintf] huh?";a=a.substring(b[0].length)}return e};return b}(),e={VERSION:"1.2.0",isBlank:d(function(a){return/^\s*$/.test(a)}),stripTags:d(function(a){return a.replace(/<\/?[^>]+>/ig,"")}),capitalize:d(function(a){return a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()}),chop:d(function(a,b){for(var b=
b*1||0||a.length,c=[],e=0;e<a.length;)c.push(a.slice(e,e+b)),e+=b;return c}),clean:d(function(a){return e.strip(a.replace(/\s+/g," "))}),count:d(function(a,b){for(var c=0,e,d=0;d<a.length;)e=a.indexOf(b,d),e>=0&&c++,d=d+(e>=0?e:0)+b.length;return c}),chars:d(function(a){return a.split("")}),escapeHTML:d(function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}),unescapeHTML:d(function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,
">").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,"&")}),escapeRegExp:d(function(a){return a.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1")}),insert:d(function(a,b,c){a=a.split("");a.splice(b*1||0,0,c);return a.join("")}),include:d(function(a,b){return a.indexOf(b)!==-1}),join:d(function(a){var b=Array.prototype.slice.call(arguments);return b.join(b.shift())}),lines:d(function(a){return a.split("\n")}),reverse:d(function(a){return Array.prototype.reverse.apply(String(a).split("")).join("")}),
splice:d(function(a,b,c,e){a=a.split("");a.splice(b*1||0,c*1||0,e);return a.join("")}),startsWith:d(function(a,b){return a.length>=b.length&&a.substring(0,b.length)===b}),endsWith:d(function(a,b){return a.length>=b.length&&a.substring(a.length-b.length)===b}),succ:d(function(a){var b=a.split("");b.splice(a.length-1,1,String.fromCharCode(a.charCodeAt(a.length-1)+1));return b.join("")}),titleize:d(function(a){for(var a=a.split(" "),b,c=0;c<a.length;c++)b=a[c].split(""),typeof b[0]!=="undefined"&&(b[0]=
b[0].toUpperCase()),c+1===a.length?a[c]=b.join(""):a[c]=b.join("")+" ";return a.join("")}),camelize:d(function(a){return e.trim(a).replace(/(\-|_|\s)+(.)?/g,function(a,c,e){return e?e.toUpperCase():""})}),underscored:function(a){return e.trim(a).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/\-|\s+/g,"_").toLowerCase()},dasherize:function(a){return e.trim(a).replace(/([a-z\d])([A-Z]+)/g,"$1-$2").replace(/^([A-Z]+)/,"-$1").replace(/\_|\s+/g,"-").toLowerCase()},humanize:function(a){return e.capitalize(this.underscored(a).replace(/_id$/,
"").replace(/_/g," "))},trim:d(function(a,b){if(!b&&o)return o.call(a);b=b?e.escapeRegExp(b):"\\s";return a.replace(RegExp("^["+b+"]+|["+b+"]+$","g"),"")}),ltrim:d(function(a,b){b=b?e.escapeRegExp(b):"\\s";return a.replace(RegExp("^["+b+"]+","g"),"")}),rtrim:d(function(a,b){b=b?e.escapeRegExp(b):"\\s";return a.replace(RegExp("["+b+"]+$","g"),"")}),truncate:d(function(a,b,c){b=b*1||0;return a.length>b?a.slice(0,b)+(c||"..."):a}),prune:d(function(a,b,c){var c=c||"...",b=b*1||0,d="",d=a.substring(b-
1,b+1).search(/^\w\w$/)===0?e.rtrim(a.slice(0,b).replace(/([\W][\w]*)$/,"")):e.rtrim(a.slice(0,b)),d=d.replace(/\W+$/,"");return d.length+c.length>a.length?a:d+c}),words:function(a,b){return String(a).split(b||" ")},pad:d(function(a,b,c,e){var d="",d=0,b=b*1||0;c?c.length>1&&(c=c.charAt(0)):c=" ";switch(e){case "right":d=b-a.length;d=l(c,d);a+=d;break;case "both":d=b-a.length;d={left:l(c,Math.ceil(d/2)),right:l(c,Math.floor(d/2))};a=d.left+a+d.right;break;default:d=b-a.length,d=l(c,d),a=d+a}return a}),
lpad:function(a,b,c){return e.pad(a,b,c)},rpad:function(a,b,c){return e.pad(a,b,c,"right")},lrpad:function(a,b,c){return e.pad(a,b,c,"both")},sprintf:m,vsprintf:function(a,b){b.unshift(a);return m.apply(null,b)},toNumber:function(a,b){var c;c=(a*1||0).toFixed(b*1||0)*1||0;return!(c===0&&a!=="0"&&a!==0)?c:Number.NaN},strRight:d(function(a,b){var c=!b?-1:a.indexOf(b);return c!=-1?a.slice(c+b.length,a.length):a}),strRightBack:d(function(a,b){var c=!b?-1:a.lastIndexOf(b);return c!=-1?a.slice(c+b.length,
a.length):a}),strLeft:d(function(a,b){var c=!b?-1:a.indexOf(b);return c!=-1?a.slice(0,c):a}),strLeftBack:d(function(a,b){var c=a.lastIndexOf(b);return c!=-1?a.slice(0,c):a}),exports:function(){var a={},b;for(b in this)if(this.hasOwnProperty(b)&&!(b=="include"||b=="contains"||b=="reverse"))a[b]=this[b];return a}};e.strip=e.trim;e.lstrip=e.ltrim;e.rstrip=e.rtrim;e.center=e.lrpad;e.ljust=e.lpad;e.rjust=e.rpad;e.contains=e.include;if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports)module.exports=
e;exports._s=e}else typeof k._!=="undefined"?(k._.string=e,k._.str=k._.string):k._={string:e,str:e}})(this||window);
// 
// Heap based scheme from 3imp.pdf
//

//
// variables
//
BiwaScheme.TopEnv = {};
BiwaScheme.CoreEnv = {};

//
// Nil
// javascript representation of empty list( '() )
//
BiwaScheme.nil = {
  toString: function() { return "nil"; },
  to_write: function() { return "()"; },
  to_array: function() { return []; },
  length: function() { return 0; }
};

//
// #<undef> (The undefined value)
// also used as #<unspecified> values
//
BiwaScheme.undef = new Object();
BiwaScheme.undef.toString = function(){ return "#<undef>"; }

// Prints the arguments to console.debug.
BiwaScheme.debug = function(/*arguments*/){
  var args = _.toArray(arguments);
  console.debug.apply(console, _.map(args, BiwaScheme.inspect));
}

//
// Assertion
//
BiwaScheme.assert = function(cond, desc) {
  if (!cond) {
    throw new BiwaScheme.Bug("[BUG] Assertion failed: "+desc);
  }
}

//
// Configurations
//

// Maximum depth of stack trace
// (You can also set Interpreter#max_trace_size for each Interpreter)
BiwaScheme.max_trace_size = 40;

// Stop showing deprecation warning
BiwaScheme.suppress_deprecation_warning = false;
//
// Super-simple class implementation
//
// Example usage:
//
// BiwaScheme.Foo = BiwaScheme.Class.create({
//   initialize: function(a){
//     this.a = a;
//   },
//
//   toString: function(){
//     return "foo[" + this.a + "]";
//   }
// });
//
// BiwaScheme.Bar = BiwaScheme.Class.extend(new BiwaScheme.Foo("hello1"), {
//   initialize: function(b){
//     this.b = b;
//   },
//
//   printEverything: function(){
//     console.log("a = ", this.a, "b = ", this.b);
//   },
//
//   toString: function(){
//     return "bar[" + this.b + "]";
//   }
// });

BiwaScheme.Class = {
  create: function(methods) {
    var klass = function(){ this.initialize.apply(this, arguments); };
    _.extend(klass.prototype, methods);
    return klass;
  },

  extend: function(parent, methods) {
    var klass = function(){ this.initialize.apply(this, arguments); };
    klass.prototype = parent;
    _.extend(klass.prototype, methods);
    return klass;
  }
};

// Update the given method to memoized version.
//
// - klass : a class defined by BiwaScheme.Class.create
// - name_or_names : method name (a string or an array of strings)
//
// Example
//
//   // Given this method
//   BiwaScheme.Enumeration.EnumType = ...
//     universe: function(){
//       return ...
//     }
//   ...
//   // Memoize
//   BiwaScheme.Class.memoize(BiwaScheme.Enumeration.EnumType,
//                            "_universe"); 
//
//   // Equal to:
//   BiwaScheme.Enumeration.EnumType = ...
//     universe: function(){
//       if(!this.hasOwnProperty("cached_universe")){
//         this.cached_universe = this.compute_universe();
//       }
//       return this.cached_universe;
//     },
//     compute_universe: function(){ 
//       // Original function, renamed to compute_*
//       return ...
//     }
//   ...
BiwaScheme.Class.memoize = function(klass, name_or_names){
  var proto = klass.prototype;
  var names = _.isArray(name_or_names) ? name_or_names : [name_or_names];

  _.each(names, function(name){
    // Copy original function foo as 'compute_foo'
    proto["compute_"+name] = proto[name];

    // Define memoizing version
    proto[name] = function(/*arguments*/){
      if(!this.hasOwnProperty("cached_"+name)){
        this["cached_"+name] = this["compute_"+name].apply(this, _.toArray(arguments));
      }
      return this["cached_"+name];
    }
  });
}
//
// write.js: Functions to convert objects to strings
//

//
// write
//

BiwaScheme.to_write = function(obj){
  if(obj === undefined)
    return "undefined";
  else if(obj === null)
    return "null";
  else if(_.isFunction(obj))
    return "#<Function "+(obj.fname ? obj.fname :
                          obj.toSource ? _.str.truncate(obj.toSource(), 40) :
                          "")+">";
  else if(_.isString(obj))
    return '"' +
           obj.replace(/\\|\"/g,function($0){return'\\'+$0;})
              .replace(/\x07/g, "\\a")
              .replace(/\x08/g, "\\b")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\v/g, "\\v")
              .replace(/\f/g, "\\f")
              .replace(/\r/g, "\\r") +
           '"';
  else if(_.isArray(obj) && obj.closure_p)
    return "#<Closure>";
  else if(_.isArray(obj))
    return "#(" + _.map(obj, function(e) { return BiwaScheme.to_write(e); }).join(" ") + ")";
  else if(typeof(obj.to_write) == 'function')
    return obj.to_write();
  else if(isNaN(obj) && typeof(obj) == 'number')
    return "+nan.0";
  else{
    switch(obj){
      case true: return "#t";
      case false: return "#f";
      case Infinity: return "+inf.0";
      case -Infinity: return "-inf.0";
    }
  }
  return BiwaScheme.inspect(obj);
}

//
// display
//

BiwaScheme.to_display = function(obj){
  if(_.isUndefined(obj))
    return 'undefined';
  else if(_.isNull(obj))
    return 'null';
  else if(typeof(obj.valueOf()) == "string")
    return obj;
  else if(obj instanceof BiwaScheme.Symbol)
    return obj.name;
  else if(obj instanceof Array)
    return '#(' + _.map(obj, BiwaScheme.to_display).join(' ') + ')';
  else if(obj instanceof BiwaScheme.Pair)
    return obj.inspect(BiwaScheme.to_display);
  else if(obj instanceof BiwaScheme.Char)
    return obj.value;
  else
    return BiwaScheme.to_write(obj);
}

//
// write/ss (write with substructure)
//

// example:  > (let ((x (list 'a))) (list x x))                   //           (#0=(a) #0#)
// 2-pass algorithm.
// (1) detect all the objects which appears more than once
//     (find_cyclic, reduce_cyclic_info)
// (2) write object using this information
//   * add prefix '#n=' for first appearance
//   * just write '#n#' for other appearance

//TODO: support Values
BiwaScheme.write_ss = function(obj, array_mode){
  var known = [obj], used = [false];
  BiwaScheme.find_cyclic(obj, known, used);
  var cyclic   = BiwaScheme.reduce_cyclic_info(known, used);
  var appeared = new Array(cyclic.length);
  for(var i=cyclic.length-1; i>=0; i--) appeared[i] = false;

  return BiwaScheme.to_write_ss(obj, cyclic, appeared, array_mode);
}
BiwaScheme.to_write_ss = function(obj, cyclic, appeared, array_mode){
  var ret = "";
  var i = cyclic.indexOf(obj);
  if(i >= 0){
    if(appeared[i]){
      return "#"+i+"#";
    }
    else{
      appeared[i] = true;
      ret = "#"+i+"=";
    }
  }

  if(obj instanceof BiwaScheme.Pair){
    var a = [];
    a.push(BiwaScheme.to_write_ss(obj.car, cyclic, appeared, array_mode));
    for(var o=obj.cdr; o != BiwaScheme.nil; o=o.cdr){
      if(!(o instanceof BiwaScheme.Pair) || cyclic.indexOf(o) >= 0){
        a.push(".");
        a.push(BiwaScheme.to_write_ss(o, cyclic, appeared, array_mode));
        break;
      }
      a.push(BiwaScheme.to_write_ss(o.car, cyclic, appeared, array_mode));
    }
    ret += "(" + a.join(" ") + ")";
  }
  else if(obj instanceof Array){
    var a = _.map(obj, function(item){
      return BiwaScheme.to_write_ss(item, cyclic, appeared, array_mode);
    })
    if(array_mode)
      ret += "[" + a.join(", ") + "]";
    else
      ret += "#(" + a.join(" ") + ")";
  }
  else{
    ret += BiwaScheme.to_write(obj);
  }
  return ret;
}
BiwaScheme.reduce_cyclic_info = function(known, used){
  var n_used = 0;
  for(var i=0; i<used.length; i++){
    if(used[i]){
      known[n_used] = known[i];
      n_used++;
    }
  }
  return known.slice(0, n_used);
}
BiwaScheme.find_cyclic = function(obj, known, used){
  var items = (obj instanceof BiwaScheme.Pair)  ? [obj.car, obj.cdr] :
              (obj instanceof Array) ? obj :
              null;
  if(!items) return;

  _.each(items, function(item){
    if(typeof(item)=='number' || typeof(item)=='string' ||
      item === BiwaScheme.undef || item === true || item === false ||
      item === BiwaScheme.nil || item instanceof BiwaScheme.Symbol) return;

    var i = known.indexOf(item);
    if(i >= 0)
      used[i] = true;
    else{
      known.push(item);
      used.push(false);
      BiwaScheme.find_cyclic(item, known, used);
    }
  });
};

//
// inspect
//
BiwaScheme.inspect = function(object, opts) {
  try {
    if (_.isUndefined(object)) return 'undefined';
    if (object === null) return 'null';
    if (object === true) return '#t';
    if (object === false) return '#f';
    if (object.inspect) return object.inspect();
    if (_.isString(object)) {
      return '"' + object.replace(/"/g, '\\"') + '"';
    }
    if (_.isArray(object)) {
      return '[' + _.map(object, BiwaScheme.inspect).join(', ') + ']';
    }

    if (opts && opts["fallback"]){
      return opts["fallback"];
    }
    else {
      return object.toString();
    }
  } catch (e) {
    if (e instanceof RangeError) return '...';
    throw e;
  }
};
//
// types.js - type predicators, equality, compare
//

BiwaScheme.isNil = function(obj){
  return (obj === BiwaScheme.nil);
};

BiwaScheme.isUndef = function(obj){
  return (obj === BiwaScheme.undef);
};

BiwaScheme.isBoolean = _.isBoolean; // Return true if arg is either true or false

//BiwaScheme.isNumber is defined in number.js (Return true if arg is scheme number)

BiwaScheme.isString = _.isString;

BiwaScheme.isChar = function(obj){
  return (obj instanceof BiwaScheme.Char);
};

BiwaScheme.isSymbol = function(obj){
  return (obj instanceof BiwaScheme.Symbol);
};

BiwaScheme.isPort = function(obj){
  return (obj instanceof BiwaScheme.Port);
};

// Note: '() is not a pair in scheme
BiwaScheme.isPair = function(obj){
  return (obj instanceof BiwaScheme.Pair);
};

// Returns true if obj is a proper list
// Note: isList returns true for '()
BiwaScheme.isList = function(obj){
  var nil = BiwaScheme.nil, Pair = BiwaScheme.Pair;

  if (obj === nil) { // Empty list
    return true;
  }
  if (!(obj instanceof Pair)) { // Argument isn't even a pair
    return false;
  }

  var tortoise = obj;
  var hare = obj.cdr;
  while (true) {
    if (hare === nil) { // End of list
      return true;
    }
    if (hare === tortoise) { // Cycle
      return false;
    }
    if (!(hare instanceof Pair)) { // Improper list
      return false;
    }

    if (hare.cdr === nil) { // End of list
      return true;
    }
    if (!(hare.cdr instanceof Pair)) { // Improper list
      return false;
    }

    hare = hare.cdr.cdr;
    tortoise = tortoise.cdr;
  }
};

BiwaScheme.isVector = function(obj){
  return (obj instanceof Array) && (obj.closure_p !== true);
};

BiwaScheme.isHashtable = function(obj){
  return (obj instanceof BiwaScheme.Hashtable);
};

BiwaScheme.isMutableHashtable = function(obj){
  return (obj instanceof BiwaScheme.Hashtable) && obj.mutable;
};

BiwaScheme.isClosure = function(obj){
  return (obj instanceof Array) && (obj.closure_p === true);
};

// procedure: Scheme closure or JavaScript function
// valid argument for anywhere function is expected
BiwaScheme.isProcedure = function(obj){
  return BiwaScheme.isClosure(obj) || _.isFunction(obj);
};

// Return true if obj is a scheme value which evaluates to itself
BiwaScheme.isSelfEvaluating = function(obj) {
  return BiwaScheme.isBoolean(obj) ||
         BiwaScheme.isNumber(obj) ||
         BiwaScheme.isString(obj) ||
         BiwaScheme.isChar(obj);
};

//
// equality
//
BiwaScheme.eq = function(a, b){
  return a === b;
};
// TODO: Records (etc.)
BiwaScheme.eqv = function(a, b){
  return a == b && (typeof(a) == typeof(b));
};
BiwaScheme.equal = function(a, b){
  //TODO: must terminate for cyclic objects
  return BiwaScheme.to_write(a) == BiwaScheme.to_write(b);
};

//
// comaprator
//
// Return true when a < b
BiwaScheme.lt = function(a, b) {
  if(typeof a !== typeof b){
    return compareFn(typeof a, typeof b); 	
  }
  return a < b;
};
//
// Errors
//

BiwaScheme.Error = BiwaScheme.Class.create({
  initialize: function(msg){
    this.message = "Error: "+msg;
  },
  toString: function(){
    return this.message;
  }
});

BiwaScheme.Bug = BiwaScheme.Class.extend(new BiwaScheme.Error(), {
  initialize: function(msg){
    this.message = "[BUG] "+msg;
  }
});

// currently used by "raise"
BiwaScheme.UserError = BiwaScheme.Class.extend(new BiwaScheme.Error(), {
  initialize: function(msg){
    this.message = msg;
  }
});

//
// Set - set of string
// contents must be string (or at least sortable)
//
BiwaScheme.Set = BiwaScheme.Class.create({
  initialize : function(/*args*/){
    this.arr = [];
    var i;
    for(i=0; i<arguments.length; i++)
      this.arr[i] = arguments[i];
  },

  equals : function(other){
    if(this.arr.length != other.arr.length)
      return false;

    var a1 = _.clone(this.arr);
    var a2 = _.clone(other.arr);
    a1.sort();
    a2.sort();
    for(var i=0; i<this.arr.length; i++){
      if(a1[i] != a2[i]) return false;
    }
    return true;
  },
  set_cons : function(item){
    var o = new BiwaScheme.Set(item);
    o.arr = _.clone(this.arr);
    o.arr.push(item);
    return o;
  },
  set_union : function(/*args*/){
    var o = new BiwaScheme.Set();
    o.arr = _.clone(this.arr);

    for(var k=0; k<arguments.length; k++){
      var s2 = arguments[k];
      if(!(s2 instanceof BiwaScheme.Set))
        throw new BiwaScheme.Error("set_union: arguments must be a set");

      for(var i=0; i<s2.arr.length; i++)
        o.add(s2.arr[i]);
    }
    return o;
  },
  set_intersect : function(s2){
    if(!(s2 instanceof BiwaScheme.Set))
      throw new BiwaScheme.Error("set_intersect: arguments must be a set");

    var o = new BiwaScheme.Set();
    for(var i=0; i<this.arr.length; i++)
      if(s2.member(this.arr[i]))
        o.add(this.arr[i]);
    return o;
  },
  set_minus : function(s2){
    if(!(s2 instanceof BiwaScheme.Set))
      throw new BiwaScheme.Error("set_minus: arguments must be a set");

    var o = new BiwaScheme.Set();
    for(var i=0; i<this.arr.length; i++)
      if(!s2.member(this.arr[i]))
        o.add(this.arr[i]);
    return o;
  },
  add : function(item){
    if(!this.member(item)){
      this.arr.push(item);
    }
  },
  member : function(item){
    for(var i=0; i<this.arr.length; i++)
      if(this.arr[i] == item) return true;

    return false;
  },
  rindex : function(item){
    for(var i=this.arr.length-1; i>=0 ; i--)
      if(this.arr[i] == item) return (this.arr.length-1-i);

    return null;
  },
  index : function(item){
    for(var i=0; i<this.arr.length; i++)
      if(this.arr[i] == item) return i;

    return null;
  },
  inspect : function(){
    return "Set(" + this.arr.join(", ") + ")";
  },
  toString : function(){
    return this.inspect();
  },
  size : function(){
    return this.arr.length;
  }
});
//
// Values
//
BiwaScheme.Values = BiwaScheme.Class.create({
  initialize: function(values){
    this.content = values;
  },
  to_write: function(){
    return "#<Values " +
             _.map(this.content, BiwaScheme.to_write).join(" ") +
           ">";
  }
});

//
// Pair 
// cons cell
//

BiwaScheme.Pair = BiwaScheme.Class.create({
  initialize: function(car, cdr){
    this.car = car;
    this.cdr = cdr;
  },

  caar: function(){ return this.car.car; },
  cadr: function(){ return this.cdr.car; },
  cdar: function(){ return this.cdr.car; },
  cddr: function(){ return this.cdr.cdr; },

  first:  function(){ return this.car; },
  second: function(){ return this.cdr.car; },
  third:  function(){ return this.cdr.cdr.car; },
  fourth: function(){ return this.cdr.cdr.cdr.car; },
  fifth:  function(){ return this.cdr.cdr.cdr.cdr.car; },

  // returns array containing all the car's of list
  // '(1 2 3) => [1,2,3]
  // '(1 2 . 3) => [1,2]
  to_array: function(){
    var ary = [];
    for(var o = this; o instanceof BiwaScheme.Pair; o=o.cdr){
      ary.push(o.car);
    }
    return ary;
  },

  to_set: function(){
    var set = new BiwaScheme.Set();
    for(var o = this; o instanceof BiwaScheme.Pair; o=o.cdr){
      set.add(o.car);
    }
    return set;
  },

  length: function(){
    var n = 0;
    for(var o = this; o instanceof BiwaScheme.Pair; o=o.cdr){
      n++;
    }
    return n;
  },

  // Return the last cdr
  last_cdr: function(){
    var o;
    for(o = this; o instanceof BiwaScheme.Pair; o = o.cdr)
      ;
    return o;
  },

  // calls the given func passing each car of list
  // returns cdr of last Pair
  foreach: function(func){
    for(var o = this; o instanceof BiwaScheme.Pair; o=o.cdr){
      func(o.car);
    }
    return o;
  },

  // Returns an array which contains the resuls of calling func
  // with the car's as an argument.
  // If the receiver is not a proper list, the last cdr is ignored.
  // The receiver must not be a cyclic list.
  map: function(func){
    var ary = [];
    for(var o = this; BiwaScheme.isPair(o); o = o.cdr){
      ary.push(func(o.car));
    }
    return ary;
  },

  // Destructively concat the given list to the receiver.
  // The receiver must be a proper list.
  // Returns the receiver.
  concat: function(list){
    var o = this;
    while(o instanceof BiwaScheme.Pair && o.cdr != BiwaScheme.nil){
      o = o.cdr;
    }
    o.cdr = list;
    return this;
  },

  // returns human-redable string of pair
  inspect: function(conv){
    conv || (conv = BiwaScheme.inspect);
    var a = [];
    var last = this.foreach(function(o){
      a.push(conv(o));
    });
    if(last != BiwaScheme.nil){
      a.push(".");
      a.push(conv(last));
    }
    return "(" + a.join(" ") + ")";
  },
  toString : function(){
    return this.inspect();
  },

  to_write: function(){
    return this.inspect(BiwaScheme.to_write);
  }
});

// Creates a list out of the arguments, optionally converting any nested arrays into nested lists if the deep argument is true.
// Example:
//   BiwaScheme.List(1, 2, [3, 4]) ;=> (list 1 2 (vector 3 4))
//   BiwaScheme.deep_array_to_list(1, 2, [3, 4]) ;=> (list 1 2 (list 3 4))
var array_to_list = function(ary, deep) {
  var list = BiwaScheme.nil;
  for(var i=ary.length-1; i>=0; i--){
    var obj = ary[i];
    if(deep && _.isArray(obj) && !obj.is_vector){
      obj = array_to_list(obj, deep);
    }
    list = new BiwaScheme.Pair(obj, list);
  }
  return list;
}

// Shallow: List(1, 2, [3]) == (list 1 2 (vector 3 4))
BiwaScheme.List = function() {
  var ary = _.toArray(arguments);
  return array_to_list(ary, false);
};

// Shallow: array_to_list(1, 2, [3]) == (list 1 2 (vector 3 4))
BiwaScheme.array_to_list = function(ary) {
  return array_to_list(ary, false);
};

// Deep: deep_array_to_list(1, 2, [3, 4]) == (list 1 2 (list 3 4))
// deep_array_to_list([1, 2, 3]) - deep
BiwaScheme.deep_array_to_list = function(ary) {
  return array_to_list(ary, true);
};

BiwaScheme.Cons = function(car, cdr) {
  return new BiwaScheme.Pair(car, cdr);
};
//
// Symbol
//

BiwaScheme.Symbol = BiwaScheme.Class.create({
  initialize: function(str){
    this.name = str;
    BiwaScheme.Symbols[ str ] = this;
  },

  inspect: function(){
    return "'"+this.name;
    //return "#<Symbol '"+this.name+"'>";
  },

  toString: function(){
    return "'"+this.name;
  },

  to_write: function(){
    return this.name;
  }
});
BiwaScheme.Symbols = {};
BiwaScheme.Sym = function(name,leaveCase){
  if( BiwaScheme.Symbols[name] === undefined ){
    return new BiwaScheme.Symbol(name);
  }
  else if( ! (BiwaScheme.Symbols[name] instanceof BiwaScheme.Symbol) ){ //pre-defined member (like 'eval' in Firefox)
    return new BiwaScheme.Symbol(name);
  }
  else{
    return BiwaScheme.Symbols[name];
  }
}

BiwaScheme.gensym = function(){
  return BiwaScheme.Sym(_.uniqueId("__gensym"));
};
//
// Char
//

BiwaScheme.Char = BiwaScheme.Class.create({
  initialize: function(c){
    BiwaScheme.Chars[ this.value = c ] = this;
  },
  to_write: function(){
    switch(this.value){
      case '\n': return "#\\newline";
      case ' ':  return "#\\space";
      case '\t': return "#\\tab";
      default:   return "#\\"+this.value;
    }
  },
  inspect: function(){
    return this.to_write();
  }
});
BiwaScheme.Chars = {};
BiwaScheme.Char.get = function(c) {
  if(typeof(c) != "string") {
    throw new BiwaScheme.Bug("Char.get: " +
                             BiwaScheme.inspect(c) + " is not a string");
  }
  if( BiwaScheme.Chars[c] === undefined )
    return new BiwaScheme.Char(c);
  else
    return BiwaScheme.Chars[c];
};

//
// number.js
//

//
// Complex
//
BiwaScheme.Complex = BiwaScheme.Class.create({
  initialize: function(real, imag){
    this.real = real;
    this.imag = imag;
  },
  magnitude: function(){
    return Math.sqrt(this.real * this.real + this.imag * this.imag);
  },
  angle: function(){
    return Math.atan2(this.imag, this.real);
  },
  isReal: function(){
    return this.imag == 0;
  },
  isRational: function() {
    return this.imag == 0 && BiwaScheme.isRational(this.real);
  },
  isInteger: function(){
    return this.imag == 0 && BiwaScheme.isInteger(this.real);
  },
  toString: function(radix){
    if (this.real === 0 && this.imag === 0)
      return "0";
    var img = "";
    if (this.imag !== 0) {
      if (this.imag > 0 && this.real !== 0){
          img+="+";
      }
      switch(this.imag) {
          case 1:
              break;
          case -1: img+="-";
               break;
          default: img+=this.imag.toString(radix);
      }
     img+="i";
    }
    var real = "";
    if (this.real !== 0){
      real += this.real.toString(radix);
    }
    return real+img;
  }
})
BiwaScheme.Complex.from_polar = function(r, theta){
  var real = r * Math.cos(theta);
  var imag = r * Math.sin(theta);
  return new BiwaScheme.Complex(real, imag);
}
BiwaScheme.Complex.assure = function(num){
  if(num instanceof BiwaScheme.Complex)
    return num
  else
    return new BiwaScheme.Complex(num, 0);
}

//
// Rational (unfinished)
//
BiwaScheme.Rational = BiwaScheme.Class.create({
  initialize: function(numerator, denominator){
    this.numerator = numerator;
    this.denominator = denominator;
  },

  isInteger: function() {
     // FIXME
  }
})

//
// Predicates
//
BiwaScheme.isNumber = function(x) {
  return (x instanceof BiwaScheme.Complex)  ||
         (x instanceof BiwaScheme.Rational) ||
         (typeof(x) == 'number');
};
BiwaScheme.isComplex = BiwaScheme.isNumber;
BiwaScheme.isReal = function(x) {
  if (x instanceof BiwaScheme.Complex || x instanceof BiwaScheme.Rational) {
    return x.isReal()
  }
  else {
    return (typeof(x) == 'number');
  }
};
BiwaScheme.isRational = function(x) {
  if (x instanceof BiwaScheme.Complex) {
    return x.isRational();
  }
  else if (x instanceof BiwaScheme.Rational) {
    return true;
  }
  else {
    return (typeof(x) == 'number');
  }
};
BiwaScheme.isInteger = function(x) {
  if (x instanceof BiwaScheme.Complex || x instanceof BiwaScheme.Rational) {
    return x.isInteger();
  }
  else {
    return (typeof(x) == 'number') && (x % 1 == 0);
  }
};
//
// Port
//

// (eof-object)
BiwaScheme.eof = new Object;

BiwaScheme.Port = BiwaScheme.Class.create({
  initialize: function(is_in, is_out){
    this.is_open = true;
    this.is_binary = false; //??
    this.is_input = is_in;
    this.is_output = is_out;
  },
  close: function(){
    // close port
    this.is_open = false;
  },
  inspect: function(){
    return "#<Port>";
  },
  to_write: function(){
    return "#<Port>";
  }
});

//
// string ports (srfi-6)
//
BiwaScheme.Port.StringOutput = BiwaScheme.Class.extend(new BiwaScheme.Port(false, true), {
  initialize: function(){
    this.buffer = [];
  },
  put_string: function(str){
    this.buffer.push(str);
  },
  output_string: function(str){
    return this.buffer.join("");
  }
});

BiwaScheme.Port.StringInput = BiwaScheme.Class.extend(new BiwaScheme.Port(true, false), {
  initialize: function(str){
    this.str = str;
  },
  get_string: function(after){
    return after(this.str);
  }
});

BiwaScheme.Port.NullInput = BiwaScheme.Class.extend(new BiwaScheme.Port(true, false), {
  initialize: function(){
  },
  get_string: function(after){
    // Never give them anything!
    return after('');
  }
});

BiwaScheme.Port.NullOutput = BiwaScheme.Class.extend(new BiwaScheme.Port(false, true), {
  initialize: function(output_function){
    this.output_function = output_function;
  },
  put_string: function(str){}
});

BiwaScheme.Port.CustomOutput = BiwaScheme.Class.extend(new BiwaScheme.Port(false, true), {
  initialize: function(output_function){
    this.output_function = output_function;
  },
  put_string: function(str){
    this.output_function(str);
  }
});

BiwaScheme.Port.CustomInput = BiwaScheme.Class.extend(new BiwaScheme.Port(true, false), {
  initialize: function(input_function){
    this.input_function = input_function;
  },
  get_string: function(after){
    var input_function = this.input_function;
    return new BiwaScheme.Pause(function(pause) {
      input_function(function(input) {
        pause.resume(after(input));
      });
    });
  }
});

// User must set the current input/output
BiwaScheme.Port.current_input  = new BiwaScheme.Port.NullInput();
BiwaScheme.Port.current_output = new BiwaScheme.Port.NullOutput();
BiwaScheme.Port.current_error  = new BiwaScheme.Port.NullOutput();
//
// R6RS Records
// http://www.r6rs.org/final/html/r6rs-lib/r6rs-lib-Z-H-7.html#node_chap_6
//
// Record is like struct in C, but supports more feature like inheritance.
// see also: src/library/r6rs_lib.js

//
// Record 
// represents each instance of record type
//
BiwaScheme.Record = BiwaScheme.Class.create({
  initialize: function(rtd, values){
    BiwaScheme.assert_record_td(rtd, "new Record");

    this.rtd = rtd;
    this.fields = values;
  },

  get: function(k){
    return this.fields[k]
  },

  set: function(k, v){
    this.fields[k] = v;
  },

  toString: function(){
    var contents = BiwaScheme.to_write(this.fields);
    return "#<Record "+this.rtd.name+" "+contents+">";
  }
});

BiwaScheme.isRecord = function(o){
  return (o instanceof BiwaScheme.Record);
};

// Defined record types
BiwaScheme.Record._DefinedTypes = {};

BiwaScheme.Record.define_type = function(name_str, rtd, cd){
  return BiwaScheme.Record._DefinedTypes[name_str] = {rtd: rtd, cd: cd};
};
BiwaScheme.Record.get_type = function(name_str){
  return BiwaScheme.Record._DefinedTypes[name_str];
};

//
// RTD (Record type descriptor)
//
BiwaScheme.Record.RTD = BiwaScheme.Class.create({
  //                   Symbol RTD        Symbol Bool  Bool    Array
  initialize: function(name, parent_rtd, uid, sealed, opaque, fields){
    this.name = name;
    this.parent_rtd = parent_rtd;
    this.is_base_type = !parent_rtd;

    if(uid){
      this.uid = uid;
      this.generative = false;
    }
    else{
      this.uid = this._generate_new_uid();;
      this.generative = true;
    }

    this.sealed = !!sealed;
    this.opaque = parent_rtd.opaque || (!!opaque);

    this.fields = _.map(fields, function(field){
      return {name: field[0], mutable: !!field[1]};
    });
  },

  // Returns the name of the k-th field.
  // Only used for error messages.
  field_name: function(k){
    var names = this._field_names();

    for(par = this.parent_rtd; par; par = par.parent_rtd){
      names = par._field_names() + names;
    }

    return names[k];
  },
  _field_names: function(){
    return _.map(this.fields, function(spec){
        return spec.name;
      });
  },

  _generate_new_uid: function(){
    return BiwaScheme.Sym(_.uniqueId("__record_td_uid"));
  },

  toString: function(){
    return "#<RecordTD "+name+">";
  }
});

BiwaScheme.Record.RTD.NongenerativeRecords = {};
BiwaScheme.isRecordTD = function(o){
  return (o instanceof BiwaScheme.Record.RTD);
};

//
// CD (Record constructor descriptor)
//
BiwaScheme.Record.CD = BiwaScheme.Class.create({
  initialize: function(rtd, parent_cd, protocol){
    this._check(rtd, parent_cd, protocol);
    this.rtd = rtd;
    this.parent_cd = parent_cd;
    if(protocol){
      this.has_custom_protocol = true;
      this.protocol = protocol;
    }
    else{
      this.has_custom_protocol = false;
      if(rtd.parent_rtd)
        this.protocol = this._default_protocol_for_derived_types();
      else
        this.protocol = this._default_protocol_for_base_types();
    }
  },

  _check: function(rtd, parent_cd, protocol){
    if(rtd.is_base_type && parent_cd)
      throw new Error("Record.CD.new: cannot specify parent cd of a base type");

    if(parent_cd && rtd.parent_rtd && (parent_cd.rtd != rtd.parent_rtd))
      throw new Error("Record.CD.new: mismatched parents between rtd and parent_cd");

    if(rtd.parent_rtd && !parent_cd && protocol)
      throw new Error("Record.CD.new: protocol must be #f when parent_cd is not given");

    if(parent_cd && parent_cd.has_custom_protocol && !protocol)
      throw new Error("Record.CD.new: protocol must be specified when parent_cd has a custom protocol");
  },
  
  _default_protocol_for_base_types: function(){
    // (lambda (p) p)
    // called with `p' as an argument
    return function(ar){
      var p = ar[0];
      BiwaScheme.assert_procedure(p, "_default_protocol/base");
      return p;
    };
  },

  _default_protocol_for_derived_types: function(){
    // (lambda (n) 
    //   (lambda (a b x y s t)
    //     (let1 p (n a b x y) (p s t))))
    // called with `n' as an argument
    var rtd = this.rtd;
    return function(ar){
      var n = ar[0];
      BiwaScheme.assert_procedure(n, "_default_protocol/n");

      var ctor = function(args){
        var my_argc = rtd.fields.length;
        var ancestor_argc = args.length - my_argc;

        var ancestor_values = args.slice(0, ancestor_argc);
        var my_values       = args.slice(ancestor_argc);

        // (n a b x y) => p
        return new BiwaScheme.Call(n, ancestor_values, function(ar){
          var p = ar[0];
          BiwaScheme.assert_procedure(p, "_default_protocol/p");

          // (p s t) => record
          return new BiwaScheme.Call(p, my_values, function(ar){
            var record = ar[0];
            BiwaScheme.assert_record(record, "_default_protocol/result");

            return record;
          });
        });
      };
      return ctor;
    };
  },

  toString: function(){
    return "#<RecordCD "+this.rtd.name+">";
  },

  record_constructor: function(){
    var arg_for_protocol = (this.parent_cd ? this._make_n([], this.rtd)
                                           : this._make_p());
    arg_for_protocol = _.bind(arg_for_protocol, this);

    return new BiwaScheme.Call(this.protocol, [arg_for_protocol], function(ar){
      var ctor = ar[0];
      BiwaScheme.assert_procedure(ctor, "record_constructor");
      return ctor;
    });
  },

  // Create the function `p' which is given to the protocol.
  _make_p: function(){
    return function(values){
      return new BiwaScheme.Record(this.rtd, values);
      // TODO: check argc 
    };
  },

  // Create the function `n' which is given to the protocol.
  // When creating an instance of a derived type,
  // _make_n is called for each ancestor rtd's.
  _make_n: function(children_values, rtd){
    var parent_cd = this.parent_cd;

    if(parent_cd){
      // called from protocol (n)
      var n = function(args_for_n){

        // called from protocol (p)
        var p = function(args_for_p){
          var values = [].concat(args_for_p[0]).concat(children_values)
          var parent_n = parent_cd._make_n(values, rtd);

          return new BiwaScheme.Call(parent_cd.protocol, [parent_n], function(ar){
            var ctor = ar[0];
            BiwaScheme.assert_procedure(ctor, "_make_n");

            return new BiwaScheme.Call(ctor, args_for_n, function(ar){
              var record = ar[0];
              BiwaScheme.assert_record(record);
              return record;
            });
          });
        };
        return p;
      };
      return n;
    }
    else{
      var n = function(my_values){
        var values = my_values.concat(children_values);
        return new BiwaScheme.Record(rtd, values);
        // TODO: check argc 
      };
      return n;
    }
  }
});

BiwaScheme.isRecordCD = function(o){
  return (o instanceof BiwaScheme.Record.CD);
};
// 
// R6RS Enumerations
// http://www.r6rs.org/final/html/r6rs-lib/r6rs-lib-Z-H-15.html#node_chap_14
//
// Example
//
//   (define-enumeration color
//     (black white purple maroon)
//     color-set)
//   
//   (color black)                  ;=> 'black
//   (color purpel)                 ;=> &syntax exception
//   (enum-set->list
//     (color-set maroon white))    ;=> #<enum-set (white maroon)>

BiwaScheme.Enumeration = {};

// Represents an enum_type.
//
// Becuase there is no way to access an EnumType directly from Scheme,
// EnumType#to_write is not defined.
//
// Properties
//
// members - Array of symbols (no duplicate)
//
BiwaScheme.Enumeration.EnumType = BiwaScheme.Class.create({
  // Creates a new enum_type.
  //
  // members - Array of symbols.
  //           Symbols may be duplicate (I think you shouldn't, though :-p).
  initialize: function(members){
    this.members = _.uniq(members);
  },

  // Returns an EnumSet.
  universe: function(){
    return new BiwaScheme.Enumeration.EnumSet(this, this.members);
  }, 

  // Returns a function which map a symbol to an integer (or #f, if 
  // the symbol is out of the universe).
  // 
  // Implementation note: don't forget this.members may have duplicates.
  indexer: function(){
    // ar[0] - a symbol
    // Returns an integer or #f.
    return _.bind(function(ar){
      BiwaScheme.assert_symbol(ar[0], "(enum-set indexer)");
      var idx = _.indexOf(this.members, ar[0]);
      return (idx === -1) ? false : idx;
    }, this);
  },

  // Retuns a function which creates an enum_set from a list of
  // symbols (Symbols may be duplicate.)
  constructor: function(){
    // ar[0] - a list of symbol
    // Returns a enum_set.
    return _.bind(function(ar){
      BiwaScheme.assert_list(ar[0], "(enum-set constructor)");
      var symbols = ar[0].to_array();
      _.each(symbols, function(arg){
        BiwaScheme.assert_symbol(arg, "(enum-set constructor)");
      });

      return new BiwaScheme.Enumeration.EnumSet(this, symbols);
    }, this);
  }
});
BiwaScheme.Class.memoize(BiwaScheme.Enumeration.EnumType,
  ["universe", "indexer", "constructor"]); 

// Represents an enum_set of an enum_type.
//
// Properties
//
// enum_type - The enum_type.
// symbols   - Array of symbols (no duplicate, properly ordered)
//
BiwaScheme.Enumeration.EnumSet = BiwaScheme.Class.create({
  // Creates a new enum_set.
  //
  // enum_type - An EnumType
  // symbols   - Array of symbols.
  //
  // initialize normalizes symbols.
  //   - remove duplicates
  //   - order by universe
  initialize: function(enum_type, symbols){
    this.enum_type = enum_type;
    this.symbols = _.filter(enum_type.members, function(sym){
      return _.include(symbols, sym);
    });
  },

  // Returns a list of symbols.
  symbol_list: function(){
    return BiwaScheme.array_to_list(this.symbols); 
  },
  
  // Returns true if the enum_set includes the symbol.
  // 'symbol' is allowed to be a symbol which is not included in the universe.
  is_member: function(symbol){
    return _.include(this.symbols, symbol);
  },
  
  // Returns true if:
  // - the enum_set is a subset of the enum_set 'other', and
  // - the universe of the enum_set is a subset of 
  //   the universe of 'other'.
  // The enum_set and 'other' may belong to different enum_type.
  is_subset: function(other){
    // Check elements
    if(_.any(this.symbols, function(sym){
         return !_.include(other.symbols, sym);
       })){
      return false;
    }

    // Check universe
    if(this.enum_type === other.enum_type){
      return true;
    }
    else{
      return _.all(this.enum_type.members, function(sym){
               return _.include(other.enum_type.members, sym);
             });
    }
  },

  // Returns true if:
  //   - the enum_set contains the same set of symbols as 'other', and
  //   - universe of the enum_set contains the same set of symbols
  //     as the universe of 'other'.
  //
  // The enum_set and 'other' may belong to different enum_type.
  equal_to: function(other){
    return this.is_subset(other) && other.is_subset(this);
  },

  // Returns a enum_set which has:
  // - all the symbols included in the enum_set or the enum_set 'other'.
  // The enum_set and 'other' *must* belong to the same enum_type.
  union: function(other){
    var syms = _.filter(this.enum_type.members, _.bind(function(sym){
                 return _.include(this.symbols, sym) ||
                        _.include(other.symbols, sym);
               }, this));
    return new BiwaScheme.Enumeration.EnumSet(this.enum_type, syms);
  },

  // Returns a enum_set which has:
  // - the symbols included both in the enum_set or the enum_set 'other'.
  // The enum_set and 'other' *must* belong to the same enum_type.
  intersection: function(other){
    var syms = _.filter(this.symbols, function(sym){
                 return _.include(other.symbols, sym);
               });
    return new BiwaScheme.Enumeration.EnumSet(this.enum_type, syms);
  },

  // Returns a enum_set which has:
  // - the symbols included in the enum_set and not in the enum_set 'other'.
  // The enum_set and 'other' *must* belong to the same enum_type.
  difference: function(other){
    var syms = _.filter(this.symbols, function(sym){
                 return !_.include(other.symbols, sym);
               });
    return new BiwaScheme.Enumeration.EnumSet(this.enum_type, syms);
  },

  // Returns a enum_set which has:
  // - the symbols included in the universe but not in the enum_set.
  complement: function(){
    var syms = _.filter(this.enum_type.members, _.bind(function(sym){
                 return !_.include(this.symbols, sym);
               }, this));
    return new BiwaScheme.Enumeration.EnumSet(this.enum_type, syms);
  },

  // Returns a enum_set which has:
  // - the symbols included in the enum_set and the universe of the enum_set 'other'.
  // The enum_set and 'other' may belong to different enum_type.
  projection: function(other){
    var syms = _.filter(this.symbols, function(sym){
                 return _.include(other.enum_type.members, sym);
               });
    return new BiwaScheme.Enumeration.EnumSet(other.enum_type, syms);
  },

  // Returns a string which represents the enum_set.
  toString: function(){
    return "#<EnumSet "+BiwaScheme.inspect(this.symbols)+">";
  }
});
BiwaScheme.Class.memoize(BiwaScheme.Enumeration.EnumSet, "symbol_list");

BiwaScheme.isEnumSet = function(obj){
  return (obj instanceof BiwaScheme.Enumeration.EnumSet);
};
//
// Hashtable
//
// Based on the base JavaScript Object class, but
//  * Object takes only strings as keys
//  * R6RS hashtable needs its own hash function
// so some hacks are needed.

BiwaScheme.Hashtable = BiwaScheme.Class.create({
  initialize: function(_hash_proc, _equiv_proc, mutable){
    this.mutable = (mutable === undefined) ? true :
                   mutable ? true : false;

    this.hash_proc = _hash_proc;
    this.equiv_proc = _equiv_proc;

    // Hash (hashed) => (array of (key and value))
    this.pairs_of = {};
  },

  clear: function(){
    this.pairs_of = {};
  },

  candidate_pairs: function(hashed){
    return this.pairs_of[hashed];
  },

  add_pair: function(hashed, key, value){
    var pairs = this.pairs_of[hashed];

    if (pairs) {
      pairs.push([key, value]);
    }
    else {
      this.pairs_of[hashed] = [[key, value]];
    }
  },

  remove_pair: function(hashed, pair){
    var pairs = this.pairs_of[hashed];
    var i = pairs.indexOf(pair);
    if (i == -1){
      throw new BiwaScheme.Bug("Hashtable#remove_pair: pair not found!");
    }
    else {
      pairs.splice(i, 1); //remove 1 element from i-th index
    }
  },

  create_copy: function(mutable){
    var copy = new BiwaScheme.Hashtable(this.hash_proc, this.equiv_proc,
                                        mutable);
    // clone the pairs to copy
    _.each(_.keys(this.pairs_of), _.bind(function(hashed){
      var pairs = this.pairs_of[hashed];
      var cloned = _.map(pairs, function(pair){
        return _.clone(pair);
      });
      copy.pairs_of[hashed] = cloned;
    }, this));

    return copy;
  },

  size: function(){
    var n = 0;
    this._apply_pair(function(pair){
      n++;
    });
    return n;
  },

  keys: function(){
    return this._apply_pair(function(pair){
      return pair[0];
    });
  },

  values: function(){
    return this._apply_pair(function(pair){
      return pair[1];
    });
  },

  _apply_pair: function(func){
    var a = [];
    _.each(_.values(this.pairs_of), function(pairs){
      _.each(pairs, function(pair){
        a.push(func(pair));
      });
    });
    return a;
  },

  to_write: function(){
    return "#<Hashtable size=" + this.size() + ">";
  }
});

//
// Hash functions
//

BiwaScheme.Hashtable.equal_hash = function(ar){
  return BiwaScheme.to_write(ar[0]);
};
BiwaScheme.Hashtable.eq_hash = BiwaScheme.Hashtable.equal_hash;
BiwaScheme.Hashtable.eqv_hash = BiwaScheme.Hashtable.equal_hash;

BiwaScheme.Hashtable.string_hash = function(ar){
  return ar[0];
};

BiwaScheme.Hashtable.string_ci_hash = function(ar){
  return _.isString(ar[0]) ? ar[0].toLowerCase() : ar[0];
};

BiwaScheme.Hashtable.symbol_hash = function(ar){
  return (ar[0] instanceof BiwaScheme.Symbol) ? ar[0].name : ar[0];
};

//
// Equivalence functions
//

BiwaScheme.Hashtable.eq_equiv = function(ar){
  return BiwaScheme.eq(ar[0], ar[1]);
};

BiwaScheme.Hashtable.eqv_equiv = function(ar){
  return BiwaScheme.eqv(ar[0], ar[1]);
};
//
// Syntax
//
BiwaScheme.Syntax = BiwaScheme.Class.create({
  initialize: function(sname, func){
    this.sname = sname;
    this.func = func;
  },
  transform: function(x){
    if (!this.func){
      throw new BiwaScheme.Bug("sorry, syntax "+this.sname+
                               " is a pseudo syntax now");
    }
    return this.func(x);
  },
  inspect: function(){
    return "#<Syntax " + this.sname +">";
  }
})

// A built-in syntax did not have associated Syntax object.
// Following code installed dummy Syntax objects to built-in syntax.
BiwaScheme.CoreEnv["define"] = new BiwaScheme.Syntax("define");
BiwaScheme.CoreEnv["begin"]  = new BiwaScheme.Syntax("begin");
BiwaScheme.CoreEnv["quote"]  = new BiwaScheme.Syntax("quote");
BiwaScheme.CoreEnv["lambda"] = new BiwaScheme.Syntax("lambda");
BiwaScheme.CoreEnv["if"]     = new BiwaScheme.Syntax("if");
BiwaScheme.CoreEnv["set!"]   = new BiwaScheme.Syntax("set!");
  //
  // Parser 
  // copied from jsScheme - should be rewrriten (support #0=, etc)
  //
  BiwaScheme.Parser = BiwaScheme.Class.create({
    initialize: function(txt){
      this.tokens = this.tokenize(txt);
      this.i = 0;
    },

    inspect: function(){
      return [
        "#<Parser:",
        this.i, "/", this.tokens.length, " ",
        BiwaScheme.inspect(this.tokens),
        ">"
      ].join("");
    },

    tokenize: function(txt) {
      var tokens = new Array(), oldTxt=null;
      var in_srfi_30_comment = 0;

      while( txt != "" && oldTxt != txt ) {
        oldTxt = txt;
        txt = txt.replace( /^\s*(;[^\r\n]*(\r|\n|$)|#;|#\||#\\[^\w]|#?(\(|\[|{)|\)|\]|}|\'|`|,@|,|\+inf\.0|-inf\.0|\+nan\.0|\"(\\(.|$)|[^\"\\])*(\"|$)|[^\s()\[\]{}]+)/,
        function($0,$1) {
          var t = $1;

          if (t == "#|") {
            in_srfi_30_comment++;
            return "";
          }
          else if (in_srfi_30_comment > 0) {
            if ( /(.*\|#)/.test(t) ) {
              in_srfi_30_comment--;
              if (in_srfi_30_comment < 0) {
                throw new BiwaScheme.Error("Found an extra comment terminator: `|#'")
              }
              // Push back the rest substring to input stream.
              return t.substring(RegExp.$1.length, t.length);
            }
            else {
              return "";
            }
          }
          else {
            if( t.charAt(0) != ';' ) tokens[tokens.length]=t;
            return "";
          }
        } );
      }
      return tokens;
    },

    sexpCommentMarker: new Object,
    getObject: function() {
      var r = this.getObject0();

      if (r != this.sexpCommentMarker)
        return r;

      r = this.getObject();
      if (r == BiwaScheme.Parser.EOS)
        throw new BiwaScheme.Error("Readable object not found after S exression comment");

      r = this.getObject();
      return r;
    },
    
    getList: function( close ) {
      var list = BiwaScheme.nil, prev = list;
      while( this.i < this.tokens.length ) {

        this.eatObjectsInSexpComment("Input stream terminated unexpectedly(in list)");

        if( this.tokens[ this.i ] == ')' || this.tokens[ this.i ] == ']' || this.tokens[ this.i ] == '}' ) {
          this.i++; break;
        }

        if( this.tokens[ this.i ] == '.' ) {
          this.i++;
          var o = this.getObject();
          if( o != BiwaScheme.Parser.EOS && list != BiwaScheme.nil ) {
            prev.cdr = o;
          }
        } else {
            var cur = new BiwaScheme.Pair( this.getObject(), BiwaScheme.nil);
            if( list == BiwaScheme.nil ) list = cur;
            else prev.cdr = cur;
            prev = cur;
        }
      }
      return list;
    },

    getVector: function( close ) {
      var arr = new Array();
      while( this.i < this.tokens.length ) {
        
        this.eatObjectsInSexpComment("Input stream terminated unexpectedly(in vector)");
        
        if( this.tokens[ this.i ] == ')' ||
        this.tokens[ this.i ] == ']' ||
        this.tokens[ this.i ] == '}' ) { this.i++; break; }
        arr[ arr.length ] = this.getObject();
      }
      return arr;
    },

    eatObjectsInSexpComment: function(err_msg) {
      while( this.tokens[ this.i ] == '#;' ) {
        this.i++;
        if ((this.getObject() == BiwaScheme.Parser.EOS) || (this.i >= this.tokens.length))
          throw new BiwaScheme.Error(err_msg);  
      }
    }, 

    getObject0: function() {
      if( this.i >= this.tokens.length )
        return BiwaScheme.Parser.EOS;

      var t = this.tokens[ this.i++ ];
      // if( t == ')' ) return null;

      if (t == '#;')
        return this.sexpCommentMarker;

      var s = t == "'"  ? 'quote' :
              t == "`"  ? 'quasiquote' :
              t == ","  ? 'unquote' :
              t == ",@" ? 'unquote-splicing' : false;

      if( s || t == '(' || t == '#(' || t == '[' || t == '#[' || t == '{' || t == '#{' ) {
        return s ? new BiwaScheme.Pair( BiwaScheme.Sym(s), new BiwaScheme.Pair( this.getObject(), BiwaScheme.nil ))
        : (t=='(' || t=='[' || t=='{') ? this.getList(t) : this.getVector(t);
      } 
      else {
        switch(t){
          case "+inf.0" : return Infinity;
          case "-inf.0" : return -Infinity;
          case "+nan.0" : return NaN;
        }

        var n;
        if( /^#x[0-9a-z]+$/i.test(t) ) {  // #x... Hex
          n = new Number('0x'+t.substring(2,t.length) );
        } 
        else if( /^#d[0-9\.]+$/i.test(t) ) {  // #d... Decimal
          n = new Number( t.substring(2,t.length) );
        } 
        else{
          n = new Number(t);  // use constrictor as parser
        }

        if( ! isNaN(n) ) {
          return n.valueOf();
        } else if( t == '#f' || t == '#F' ) {
          return false;
        } else if( t == '#t' || t == '#T' ) {
          return true;
        } else if( t.toLowerCase() == '#\\newline' ) {
          return BiwaScheme.Char.get('\n');
        } else if( t.toLowerCase() == '#\\space' ) {
          return BiwaScheme.Char.get(' ');
        } else if( t.toLowerCase() == '#\\tab' ) {
          return BiwaScheme.Char.get('\t');
        } else if( /^#\\.$/.test(t) ) {
          return BiwaScheme.Char.get( t.charAt(2) );
        } else if( /^#\\x[a-zA-Z0-9]+$/.test(t) ) {
          var scalar = parseInt(t.slice(3), 16);
          // R6RS 11.11 (surrogate codepoints)
          if (scalar >= 0xD800 && scalar <= 0xDFFF) {
            throw new BiwaScheme.Error("Character in Unicode excluded range.");
          }
          // ECMA-262 4.3.16 -- Basically, strings are sequences of 16-bit
          // unsigned integers, so anything greater than 0xFFFF won't fit.
          // NOTE: This violates R6RS which requires the full Unicode range!
          else if (scalar > 0xFFFF) {
            throw new BiwaScheme.Error("Character literal out of range.");
          } else {
            return BiwaScheme.Char.get(String.fromCharCode(scalar));
          }
        } else if( /^\"(\\(.|$)|[^\"\\])*\"?$/.test(t) ) {
          return t.replace(/(\r?\n|\\n)/g, "\n").replace( /^\"|\\(.|$)|\"$/g, function($0,$1) {
            return $1 ? $1 : '';
          } );
        } else return BiwaScheme.Sym(t);  // 2Do: validate !!
      }
    }
  });
  // indicates end of source file
  BiwaScheme.Parser.EOS = new Object();
  

///
/// Compiler
///
/// Note: macro expansion is done by Intepreter#expand

BiwaScheme.Compiler = BiwaScheme.Class.create({
  initialize: function(){
  },

  is_tail: function(x){
    return (x[0] == "return");
  },

  //free: set
  //e: env(= [locals, frees])
  //next: opc
  //ret: opc["refer_*", n, ["argument", 
  //          ["refer_*", n, ... ["argument", next]
  collect_free: function(free, e, next){
    var vars = free;
    var opc = next;
    var arr = vars.arr;
    for(var i=0; i<arr.length; i++){
      opc = this.compile_refer(arr[i], e, ["argument", opc]);
    }
    //Console.puts("collect_free "+free.inspect()+" / "+e.inspect()+" => "+opc.inspect());
    return opc;
  },

  //x: Symbol
  //e: env [set of locals, set of frees]
  //ret: opc
  compile_refer: function(x, e, next){
    return this.compile_lookup(x, e,
             function(n){ return ["refer-local", n, next] },
             function(n){ return ["refer-free",  n, next] },
             function(sym){ return ["refer-global", sym, next] });
  },

  compile_lookup: function(x, e, return_local, return_free, return_global){
    var locals = e[0], free = e[1];
    if((n = locals.index(x)) != null){
      //Console.puts("compile_refer:"+x.inspect()+" in "+e.inspect()+" results refer-local "+n);
      return return_local(n);
    }
    else if((n = free.index(x)) != null){
      //Console.puts("compile_refer:"+x.inspect()+" in "+e.inspect()+" results refer-free "+n);
      return return_free(n);
    }
    else{
      var sym = x.name;
      return return_global(sym);
    }
    //throw new BiwaScheme.Error("undefined symbol `" + sym + "'");
  },

  //generate boxing code (intersection of sets & vars)
  //if no need of boxing, just returns next
  //  sets(Set): assigned variables 
  //  vars(List): used variables
  //  next(opc):
  //  ret(opc):
  make_boxes: function(sets, vars, next){
    var vars = vars;
    var n = 0;
    var a = [];
    while(vars instanceof BiwaScheme.Pair){
      if(sets.member(vars.car))
        a.push(n);
      n++;
      vars = vars.cdr;
    }
    var opc = next;
    for(var i=a.length-1; i>=0; i--)
      opc = ["box", a[i], opc];
    return opc;
  },

  // Enumerate variables which (could be assigned && included in v)
  // x: exp
  // v: set(vars)
  // ret: set
  find_sets: function(x, v){
    //Console.puts("find_sets: " + to_write(x) + " " + to_write(v))
    var ret=null;
    if(x instanceof BiwaScheme.Symbol){
      ret = new BiwaScheme.Set();
    }
    else if(x instanceof BiwaScheme.Pair){
      switch(x.first()){
      case BiwaScheme.Sym("define"):
        var exp=x.third();
        ret = this.find_sets(exp, v);
      case BiwaScheme.Sym("begin"):
        ret = this.find_sets(x.cdr, v); //(ignores improper list)
        break;
      case BiwaScheme.Sym("quote"):
        ret = new BiwaScheme.Set();
        break;
      case BiwaScheme.Sym("lambda"):
        var vars=x.second(), body=x.cdr.cdr;
        if (vars instanceof BiwaScheme.Pair){ // (lambda (...) ...)
          ret = this.find_sets(body, v.set_minus(vars.to_set()));
        }
        else { // (lambda args ...)
          ret = this.find_sets(body, v.set_minus(new BiwaScheme.Set(vars)));
        }
        break;
      case BiwaScheme.Sym("if"):
        var testc=x.second(), thenc=x.third(), elsec=x.fourth();
        ret = this.find_sets(testc, v).set_union(
                        this.find_sets(thenc, v),
                        this.find_sets(elsec, v));
        break;
      case BiwaScheme.Sym("set!"):
        var vari=x.second(), xx=x.third();
        if(v.member(vari))
          ret = this.find_sets(xx, v).set_cons(vari);
        else
          ret = this.find_sets(xx, v);
        break;
      case BiwaScheme.Sym("call/cc"):
        var exp=x.second();
        ret = this.find_sets(exp, v);
        break;
      default:
        var set = new BiwaScheme.Set();
        for(var p=x; p instanceof BiwaScheme.Pair; p=p.cdr){
          set = set.set_union(this.find_sets(p.car, v));
        }
        ret = set;
        break;
      }
    }
    else{
      ret = new BiwaScheme.Set();
    }

    if(ret == null)
      throw new BiwaScheme.Bug("find_sets() exited in unusual way");
    else
      return ret;
  },

  // find_free(): find free variables in x
  //              these variables are collected by collect_free().
  // x: expression 
  // b: set of local vars (= variables which are not free)
  // f: set of free var candidates 
  //    (local vars of outer lambdas)
  // ret: set of free vars
  find_free: function(x, b, f){
    var ret=null;
    if(x instanceof BiwaScheme.Symbol){
      if(f.member(x))
        ret = new BiwaScheme.Set(x);
      else
        ret = new BiwaScheme.Set();
    }
    else if(x instanceof BiwaScheme.Pair){
      switch(x.first()){
      case BiwaScheme.Sym("define"):
        var exp=x.third();
        ret = this.find_free(exp, b, f);
        break;
      case BiwaScheme.Sym("begin"):
        ret = this.find_free(x.cdr, b, f); //(ignores improper list)
        break;
      case BiwaScheme.Sym("quote"):
        ret = new BiwaScheme.Set();
        break;
      case BiwaScheme.Sym("lambda"):
        var vars=x.second(), body=x.cdr.cdr;
        if (vars instanceof BiwaScheme.Pair){ // (lambda (...) ...)
          ret = this.find_free(body, b.set_union(vars.to_set()), f);
        }
        else { // (lambda args ...)
          ret = this.find_free(body, b.set_cons(vars), f);
        }
        break;
      case BiwaScheme.Sym("if"):
        var testc=x.second(), thenc=x.third(), elsec=x.fourth();
        ret = this.find_free(testc, b, f).set_union(
                        this.find_free(thenc, b, f),
                        this.find_free(elsec, b, f));
        break;
      case BiwaScheme.Sym("set!"):
        var vari=x.second(), exp=x.third();
        if(f.member(vari))
          ret = this.find_free(exp, b, f).set_cons(vari);
        else
          ret = this.find_free(exp, b, f)
        break;
      case BiwaScheme.Sym("call/cc"):
        var exp=x.second();
        ret = this.find_free(exp, b, f);
        break;
      default:
        var set = new BiwaScheme.Set();
        for(var p=x; p instanceof BiwaScheme.Pair; p=p.cdr){
          set = set.set_union(this.find_free(p.car, b, f));
        }
        ret = set;
        break;
      }
    }
    else{
      ret = new BiwaScheme.Set();
    }
    //Console.p("find_free "+x.inspect()+" / "+b.inspect()+" => "+ret.inspect());

    if(ret == null)
      throw new BiwaScheme.Bug("find_free() exited in unusual way");
    else
      return ret;
  },

  // Returns the position of the dot pair.
  // Returns -1 if x is a proper list.
  //
  // eg. (a b . c) -> 2
  find_dot_pos: function(x){
    var idx = 0;
    for (; x instanceof BiwaScheme.Pair; x = x.cdr, ++idx)
      ;
    if (x != BiwaScheme.nil) {
      return idx;
    } else {
      return -1;
    }
  },

  last_pair: function(x){
    if (x instanceof BiwaScheme.Pair){
      for (; x.cdr instanceof BiwaScheme.Pair; x = x.cdr)
        ;
    }
    return x;
  },

  // Takes an dotted list and returns proper list.
  //
  // eg. (x y . z) -> (x y z)
  dotted2proper: function(ls){
    var nreverse = function(ls){
      var res = BiwaScheme.nil;
      for (; ls instanceof BiwaScheme.Pair; ){
        var d = ls.cdr;
        ls.cdr = res;
        res = ls;
        ls = d;
      }
      return res;
    }
    var copy_list = function(ls){
      var res = BiwaScheme.nil;
      for (; ls instanceof BiwaScheme.Pair; ls = ls.cdr){
        res = new BiwaScheme.Pair(ls.car, res);
      }
      return nreverse(res);
    }

    if (ls instanceof BiwaScheme.Pair) {
      var last = this.last_pair(ls);
      if (last instanceof BiwaScheme.Pair && last.cdr === BiwaScheme.nil){
        return ls;
      } else {
        var copied = copy_list(ls);
        this.last_pair(copied).cdr = new BiwaScheme.Pair(last.cdr, BiwaScheme.nil);
        return copied;
      }
    } else {
      return new BiwaScheme.Pair(ls, BiwaScheme.nil);
    }
  },

  // x: exp(list of symbol or integer or..)
  // e: env (= [locals, frees])
  // s: vars might be set!
  // next: opc
  // ret: opc
  compile: function(x, e, s, f, next){
    //Console.p(x);
    var ret = null;

    while(1){
      if(x instanceof BiwaScheme.Symbol){
        // Variable reference
        // compiled into refer-(local|free|global)
        return this.compile_refer(x, e, (s.member(x) ? ["indirect", next] : next));
      }
      else if(x instanceof BiwaScheme.Pair){
        switch(x.first()){
        case BiwaScheme.Sym("define"):
          ret = this._compile_define(x, next);

          x = ret[0];
          next = ret[1];
          break;

        case BiwaScheme.Sym("begin"):
          var a = [];
          for(var p=x.cdr; p instanceof BiwaScheme.Pair; p=p.cdr)
            a.push(p.car);

          //compile each expression (in reverse order)
          var c = next;
          for(var i=a.length-1; i>=0; i--){
            c = this.compile(a[i], e, s, f, c);
          }
          return c;

        case BiwaScheme.Sym("quote"):
          if(x.length() < 2)
              throw new BiwaScheme.Error("Invalid quote: "+x.to_write());

          var obj=x.second();
          return ["constant", obj, next];

        case BiwaScheme.Sym("lambda"):
          return this._compile_lambda(x, e, s, f, next);

        case BiwaScheme.Sym("if"):
          if(x.length() < 3 || x.length() > 4)
              throw new BiwaScheme.Error("Invalid if: "+x.to_write());

          var testc=x.second(), thenc=x.third(), elsec=x.fourth();
          var thenc = this.compile(thenc, e, s, f, next);
          var elsec = this.compile(elsec, e, s, f, next);
          x    = testc;
          next = ["test", thenc, elsec];
          break;

        case BiwaScheme.Sym("set!"):
          // error-checking: should have only 3 things
          if(x.length() != 3)
              throw new BiwaScheme.Error("Invalid set!: "+x.to_write());

          var v=x.second(), x=x.third();
          var do_assign = this.compile_lookup(v, e,
            function(n){ return ["assign-local", n, next]; },
            function(n){ return ["assign-free",  n, next]; },
            function(sym){ return ["assign-global",sym, next]; }
          );
          next = do_assign;
          break;

        case BiwaScheme.Sym("call/cc"): 
          var x=x.second();
          var c = ["conti", 
                    (this.is_tail(next) ? (e[0].size() + 1) : 0), //number of args for outer lambda
                    ["argument",
                    ["constant", 1,
                    ["argument",
                      this.compile(x, e, s,f,  
                        (this.is_tail(next) ? ["shift", 1, ["tco_hinted_apply"]]
                                            : ["apply"]))]]]];
                  //note: proc for call/cc takes 1 argument (= ["apply", 1])

          // Do not push stack frame when call/cc is in a tail context
          return this.is_tail(next) ? c : ["frame", c, next];

        default: 
          //apply 
          //x = (func 1 2) 
          //x.car = func = '(lambda (x) ..) or Symbol
          //x.cdr = args = '(1 2)
          var func = x.car;
          var args = x.cdr;
          var c = this.compile(func, e, s,f,  
                    this.is_tail(next) ? ["shift", args.length(), ["tco_hinted_apply"]]
                                       : ["apply"]);

          // VM will push the number of arguments to the stack.
          c = this.compile(args.length(), e, s, f, ["argument", c]);
          for(var p=args; p instanceof BiwaScheme.Pair; p=p.cdr){
            c = this.compile(p.car, e, s, f, ["argument", c]);
          }

          // Do not push stack frame for tail calls
          return this.is_tail(next) ? c : ["frame", c, next];
        }
      }
      else{
        return ["constant", x, next];
      }
    }
    //Console.p("result of " + x.inspect() + ":");
    //Console.p(ret);
    //dump({"ret":ret, "x":x, "e":e, "s":s, "next":next, "stack":[]});
//      if(ret == null)
//        throw new BiwaScheme.Bug("compile() exited in unusual way");
//      else
//        return ret;
  },

  // Compile define.
  //
  // 0. (define) ; => error
  // 1. (define a)
  // 2. (define a 1)
  // 3. (define a 1 2) ; => error
  // 4. (define (f x) x), (define (f . a) a)
  // 5. (define 1 2) 
  //
  // Note: define may appear in lambda, let, let*, let-values,
  // let*-values, letrec, letrec*. These definitions are local to the
  // <body> of these forms.
  _compile_define: function(x, next){
    if(x.length() == 1) { // 0. (define)
      throw new BiwaScheme.Error("Invalid `define': "+x.to_write());
    }

    var first = x.cdr.car;
    var rest = x.cdr.cdr;
    
    if(first instanceof BiwaScheme.Symbol){    
      if (rest === BiwaScheme.nil) { // 1. (define a)
        x = BiwaScheme.undef;
      }
      else {
        if (rest.cdr === BiwaScheme.nil) // 2. (define a 1)
          x = rest.car;
        else // 3. (define a 1 2)
          throw new BiwaScheme.Error("Invalid `define': "+x.to_write());
      }

      if (!BiwaScheme.TopEnv.hasOwnProperty(first.name)) {
        BiwaScheme.TopEnv[first.name] = BiwaScheme.undef;
      }
      next = ["assign-global", first.name, next];
    }
    else if(first instanceof BiwaScheme.Pair){ // 4. (define (f x) ...)
      // Note: define of this form may contain internal define.
      // They are handled in compilation of "lambda".

      var fname=first.car, args=first.cdr;
      var lambda = new BiwaScheme.Pair(BiwaScheme.Sym("lambda"), new BiwaScheme.Pair(args, rest));
      x = lambda;
      if (!BiwaScheme.TopEnv.hasOwnProperty(first.name)) {
        BiwaScheme.TopEnv[fname.name] = BiwaScheme.undef;
      }
      next = ["assign-global", fname.name, next];
    }
    else{ // 5. (define 1 2)
      throw new BiwaScheme.Error("define: symbol or pair expected but got "+first);
    }

    return [x, next];
  },

  // Compiles various forms of "lambda".
  //
  // * (lambda (x y) ...)
  // * (lambda (x y . rest) ...)
  // * (lambda args ...)
  _compile_lambda: function(x, e, s, f, next){
    if(x.length() < 3)
      throw new BiwaScheme.Error("Invalid lambda: "+x.to_write());

    var vars = x.cdr.car;
    var body = x.cdr.cdr;

    // Handle internal defines
    var tbody = BiwaScheme.Compiler.transform_internal_define(body);
    if(BiwaScheme.isPair(tbody) &&
       BiwaScheme.isSymbol(tbody.car) &&
       tbody.car.name == "letrec*"){
      // The body has internal defines.
      // Expand letrec* macro
      var cbody = BiwaScheme.Interpreter.expand(tbody);
    }
    else{
      // The body has no internal defines.
      // Just wrap the list with begin 
      var cbody = new BiwaScheme.Pair(BiwaScheme.Sym("begin"), x.cdr.cdr);
    }

    var dotpos = this.find_dot_pos(vars);
    var proper = this.dotted2proper(vars);
    var free = this.find_free(cbody, proper.to_set(), f); //free variables
    var sets = this.find_sets(cbody, proper.to_set());    //local variables

    var do_body = this.compile(cbody,
                    [proper.to_set(), free],
                    sets.set_union(s.set_intersect(free)),
                    f.set_union(proper.to_set()),
                    ["return"]);
    var do_close = ["close", 
                     free.size(),
                     this.make_boxes(sets, proper, do_body),
                     next,
                     dotpos];
    return this.collect_free(free, e, do_close);
  },

  run: function(expr){
    return this.compile(expr, [new BiwaScheme.Set(), new BiwaScheme.Set()], new BiwaScheme.Set(), new BiwaScheme.Set(), ["halt"]);
  }
});

// Compile an expression with new compiler
BiwaScheme.Compiler.compile = function(expr, next){
  expr = BiwaScheme.Interpreter.expand(expr);
  return (new BiwaScheme.Compiler).run(expr, next);
};

// Transform internal defines to letrec*.
//
// Example
//   (let ((a 1))
//     (define (b) a)
//     (b))
//
//   (let ((a 1))
//     (letrec* ((b (lambda () a)))
//       (b)))
//
// x - expression starts with (define ...)
// 
// Returns a letrec* expression, or
// just returns x, when x does not contain definitions.
(function(){
// Returns true if x is a definition
var is_definition = function(x){
  return BiwaScheme.isPair(x) &&
         BiwaScheme.Sym("define") === x.car;
  // TODO: support "begin", nested "begin", "let(rec)-syntax"
};

// Convert function definition to lambda binding
//   (define a ..)         -> (a ..)
//   (define (f) ..)       -> (f (lambda () ..))
//   (define (f x . y) ..) -> (f (lambda (x . y) ..))
//   (define (f . a) ..)   -> (f (lambda a ..))
var define_to_lambda_bind = function(def){
  var sig  = def.cdr.car;
  var body = def.cdr.cdr;

  if (BiwaScheme.isSymbol(sig)) {
    var variable = sig;

    return new BiwaScheme.Pair(variable, body);
  }
  else {
    var variable = sig.car;
    var value = new BiwaScheme.Pair(BiwaScheme.Sym("lambda"),
                  new BiwaScheme.Pair(sig.cdr, body));

    return BiwaScheme.List(variable, value);
  }
};

BiwaScheme.Compiler.transform_internal_define = function(x){
  // 1. Split x into definitions and expressions
  var defs = [], item = x;
  while (is_definition(item.car)){
    defs.push(item.car);
    item = item.cdr;
  }
  var exprs = item;

  // 2. Return x if there is no definitions
  if (defs.length == 0)
    return x;
  
  // 3. Return (letrec* <bindings> <expressions>)
  var bindings = BiwaScheme.List.apply(null, _.map(defs, define_to_lambda_bind));
  return new BiwaScheme.Pair(BiwaScheme.Sym("letrec*"),
           new BiwaScheme.Pair(bindings, exprs));
};
})();
//
// pause object (facility to stop/resume interpreting)
//
BiwaScheme.Pause = BiwaScheme.Class.create({
  //new (on_pause: javascript function calling setTimeout, Ajax.Request, ..)
  initialize: function(on_pause){
    this.on_pause = on_pause;
  },

  //save state of interpreter
  set_state: function(intp, x, f, c, s){
    this.interpreter = intp;
    this.x = x;
    this.f = f;
    this.c = c;
    this.s = s;
  },

  //call this when ready (to fire setTimeout, Ajax.Request..)
  ready: function(){
    this.on_pause(this);
  },

  //restart calculation
  resume: function(value){
    return this.interpreter.resume(true, value, this.x, this.f, this.c, this.s)
  }
});

///
/// Call
///

// The class Call is used to invoke scheme closure from 
// library functions.
//
// Call#initialize takes three arguments: proc, args and after.
//   * proc is the scheme closure to invoke.
//   * args is an Array (not list!) of arguments for the invocation.
//   * after is a javascript function which is invoked when 
//     returned from the proc.
//
//     after takes two arguments: ar and intp.
//       * ar is an Array which contains the result of the invocation.
//       * intp is an Interpreter which is running.
//
//     If after returns another Call object, another invocation
//     happens. If after returns a normal value, it is the value
//     of the library function.
//
// example:
//   return new Call(proc, [x, y], function(ar){ ar[0] });
//
BiwaScheme.Call = BiwaScheme.Class.create({
  initialize: function(proc, args, after){
    this.proc = proc;
    this.args = args;
    this.after = after || function(ar){
      // just return result which closure returned
      return ar[0];
    };
  },

  inspect: function(){
    return "#<Call args=" + this.args.inspect() + ">";
  },

  toString: function(){
    return "#<Call>";
  },

  to_write: function(){
    return "#<Call>";
  }
})

//
// Iterator - external iterator for Call.foreach
//
BiwaScheme.Iterator = {
  ForArray: BiwaScheme.Class.create({
    initialize: function(arr){
      this.arr = arr;
      this.i = 0;
    },
    has_next: function(){
      return this.i < this.arr.length;
    },
    next: function(){
      return this.arr[this.i++];
    }
  }),
  ForString: BiwaScheme.Class.create({
    initialize: function(str){
      this.str = str;
      this.i = 0;
    },
    has_next: function(){
      return this.i < this.str.length;
    },
    next: function(){
      return BiwaScheme.Char.get(this.str.charAt(this.i++));
    }
  }),
  ForList: BiwaScheme.Class.create({
    initialize: function(ls){
      this.ls = ls;
    },
    has_next: function(){
      return (this.ls instanceof BiwaScheme.Pair) &&
             this.ls != BiwaScheme.nil;
    },
    next: function(){
      var pair = this.ls;
      this.ls = this.ls.cdr;
      return pair;
    }
  }),
  ForMulti: BiwaScheme.Class.create({
    initialize: function(objs){
      this.objs = objs;
      this.size = objs.length;
      this.iterators = _.map(objs, function(x){
        return BiwaScheme.Iterator.of(x);
      })
    },
    has_next: function(){
      for(var i=0; i<this.size; i++)
        if(!this.iterators[i].has_next())
          return false;
      
      return true;
    },
    next: function(){
      return _.map(this.iterators, function(ite){
        return ite.next();
      })
    }
  }),
  of: function(obj){
    switch(true){
      case (obj instanceof Array):
        return new this.ForArray(obj);
      case (typeof(obj) == "string"):
        return new this.ForString(obj);
      case (obj instanceof BiwaScheme.Pair):
      case (obj === BiwaScheme.nil):
        return new this.ForList(obj);
      default:
        throw new BiwaScheme.Bug("Iterator.of: unknown class: "+BiwaScheme.inspect(obj));
    }
  }
}

//
// Call.foreach - shortcut for successive Calls
//
// Some library functions, such as for-each or map,
// call a closure for each element. Call.foreach is 
// a utility to help defining such methods.
//
// Call.foreach takes a sequence and some callbacks.
// Sequence is an Array, String, or list.
//
// Example:
//   return Call.foreach(sequence, {
//     // before each call
//     call: function(elem){
//       return new Call(proc, [elem]);
//     },
//     // after each call
//     result: function(value, elem){
//       ary.push(value);
//       // you can return a value to terminate the loop
//     },
//     // after all the calls
//     finish: function(){
//       return ary;
//     }
//   });

BiwaScheme.Call.default_callbacks = {
  call: function(x){ return new BiwaScheme.Call(this.proc, [x]) },
  result: function(){},
  finish: function(){}
}
BiwaScheme.Call.foreach = function(obj, callbacks, is_multi){
  is_multi || (is_multi = false);
  _.each(["call", "result", "finish"], function(key){
    if(!callbacks[key])
      callbacks[key] = BiwaScheme.Call.default_callbacks[key];
  })
  
  var iterator = null;
  var x = null;

  var loop = function(ar){
    if(iterator){
      var ret = callbacks["result"](ar[0], x);
      if(ret !== undefined) return ret;
    }
    else{ // first lap
      if(is_multi)
        iterator = new BiwaScheme.Iterator.ForMulti(obj);
      else
        iterator = BiwaScheme.Iterator.of(obj);
    }

    if(!iterator.has_next()){
      return callbacks["finish"]();
    }
    else{
      x = iterator.next();
      var result = callbacks["call"](x);
      result.after = loop;
      return result;
    }
  }
  return loop(null);
}
BiwaScheme.Call.multi_foreach = function(obj, callbacks){
  return BiwaScheme.Call.foreach(obj, callbacks, true);
}

///
/// Interpreter
///

BiwaScheme.Interpreter = BiwaScheme.Class.create({
  // new BiwaScheme.Interpreter()
  // new BiwaScheme.Interpreter(lastInterpreter)
  // new BiwaScheme.Interpreter(errorHandler)
  // new BiwaScheme.Interpreter(lastInterpreter, errorHandler)
  initialize: function(){
    var last_interpreter = null;
    var on_error = null;
    if (arguments.length == 2) {
      last_interpreter = arguments[0];
      on_error = arguments[1];
    } else if (arguments.length == 1 && arguments[0] instanceof BiwaScheme.Interpreter) {
      last_interpreter = arguments[0];
    } else if (arguments.length == 1 && typeof(arguments[0]) == "function") {
      on_error = arguments[0];
    }

    // Interpreter stack
    this.stack = [];
    // JS function to handle error
    this.on_error = on_error || (last_interpreter ? last_interpreter.on_error : function(e){});
    // JS function to handle result
    this.after_evaluate = function(){};

    // (Variables for stack trace)
    // Name of the last variable read by refer-xx
    this.last_refer = last_interpreter ? last_interpreter.last_refer : null;
    // Call stack (array of last_refer)
    this.call_stack = last_interpreter ? _.clone(last_interpreter.call_stack) : [];
    // Counts number of tail calls (= how many times should we pop call_stack
    // in op_return)
    this.tco_counter = [];
    // Maximum length of call_stack
    // (Note: we should cap call_stack for inifinite loop with recursion)
    this.max_trace_size = last_interpreter ? last_interpreter.max_trace_size : BiwaScheme.max_trace_size;
  },

  inspect: function(){
    return [
      "#<Interpreter: stack size=>",
      this.stack.length, " ",
      "after_evaluate=",
      BiwaScheme.inspect(this.after_evaluate),
      ">"
    ].join("");
  },

  // private
  push: function(x, s){
    this.stack[s] = x;
    return s+1;
  },

  // private
  //s: depth of stack to save
  //ret: saved(copied) stack 
  save_stack: function(s){
    var v = [];
    for(var i=0; i<s; i++){
      v[i] = this.stack[i];
    }
    return { stack: v, last_refer: this.last_refer, call_stack: _.clone(this.call_stack), tco_counter: _.clone(this.tco_counter) };
  },

  // private
  //v: stack array to restore
  //ret: lenght of restored stack
  restore_stack: function(stuff){
    v = stuff.stack;
    var s = v.length;
    for(var i=0; i<s; i++){
      this.stack[i] = v[i];
    }
    this.last_refer = stuff.last_refer;
    this.call_stack = _.clone(stuff.call_stack);
    this.tco_counter = _.clone(stuff.tco_counter);
    return s;
  },

  // private
  //s: depth of stack to save
  //n: number of args(for outer lambda) to remove (= 0 unless tail position)
  //ret: closure array
  continuation: function(s, n){
    // note: implementation of this function for final version doesn't exist in 3imp.pdf..
    var ss = this.push(n, s);
    return this.closure(["refer-local", 0,
                          ["nuate", this.save_stack(ss), 
                          ["return"]]], 
                        0,     //n (number of frees)
                        null,  //s (stack position to get frees)
                        -1);   // dotpos
  },

  // private
  // shift stack 
  // n: number of items to skip (from stack top)
  // m: number of items to shift
  // s: stack pointer (= index of stack top + 1)
  shift_args: function(n, m, s){
    for(var i = n-1; i >= -1; i--){
      this.index_set(s, i+m+1, this.index(s, i));
    }
    return s-m-1;
  },

  index: function(s, i){
    return this.stack[s-i-2];
  },

  // private
  index_set: function(s, i, v){
    this.stack[s-i-2] = v;
  },

  // private
  //ret: [body, stack[s-1], stack[s-2], .., stack[s-n], dotpos]
  closure: function(body, n, s, dotpos){
    var v = []; //(make-vector n+1+1)
    v[0] = body;
    for(var i=0; i<n; i++)
      v[i+1] = this.index(s, i-1);
    v[n+1] = dotpos;

    v.closure_p = true;

    return v;
  },

  // private
  run_dump_hook: function(a, x, f, c, s) {
    var dumper;
    var state;


    if (this.dumper) {
      dumper = this.dumper;
    }
    else if (BiwaScheme.Interpreter.dumper) {
      dumper = BiwaScheme.Interpreter.dumper;
    }
    else
      return;

    if (dumper) {
      state = {"a":a,
               "f":f,
               "c":c,
               "s":s,
               "x":x,
               "stack":this.stack};
      dumper.dump(state);
    }
  },

  // private
  _execute: function(a, x, f, c, s){
    var ret = null;
    //Console.puts("executing "+x[0]);
    
    while(true){ //x[0] != "halt"){

      this.run_dump_hook(a, x, f, c, s);

      switch(x[0]){
      case "halt":
        return a;
      case "refer-local":
        var n=x[1], x=x[2];
        a = this.index(f, n);
        this.last_refer = "(anon)";
        break;
      case "refer-free":
        var n=x[1], x=x[2];
        a = c[n+1];
        this.last_refer = "(anon)";
        break;
      case "refer-global":
        var sym=x[1], x=x[2];
        if(BiwaScheme.TopEnv.hasOwnProperty(sym))
          var val = BiwaScheme.TopEnv[sym];
        else if(BiwaScheme.CoreEnv.hasOwnProperty(sym))
          var val = BiwaScheme.CoreEnv[sym];
        else
          throw new BiwaScheme.Error("execute: unbound symbol: "+BiwaScheme.inspect(sym));

        a = val;
        this.last_refer = sym || "(anon)";
        break;
      case "indirect":
        var x=x[1];
        a = a[0]; //unboxing
        break;
      case "constant":
        var obj=x[1], x=x[2];
        a = obj;
        this.last_refer = "(anon)";
        break;
      case "close":
        var ox=x;
        var n=ox[1], body=ox[2], x=ox[3], dotpos=ox[4];
        a = this.closure(body, n, s, dotpos);
        s -= n;
        break;
      case "box":
        var n=x[1], x=x[2];
        this.index_set(s, n, [this.index(s, n)]); //boxing
        break;
      case "test":
        var thenc=x[1], elsec=x[2];
        x = ((a!==false) ? thenc : elsec);
        break;
      case "assign-global":
        var name=x[1], x=x[2];
        if(!BiwaScheme.TopEnv.hasOwnProperty(name) &&
           !BiwaScheme.CoreEnv.hasOwnProperty(name))
          throw new BiwaScheme.Error("global variable '"+name+"' is not defined");
        
        BiwaScheme.TopEnv[name] = a;
        a = BiwaScheme.undef;
        break;
      case "assign-local":
        var n=x[1], x=x[2];
        var box = this.index(f, n);
        box[0] = a;
        a = BiwaScheme.undef;
        break;
      case "assign-free":
        var n=x[1], x=x[2];
        var box = c[n+1];
        box[0] = a;
        a = BiwaScheme.undef;
        break;
      case "conti":
        var n=x[1], x=x[2];
        a = this.continuation(s, n);
        break;
      case "nuate":
        var stack=x[1], x=x[2];
        s = this.restore_stack(stack);
        break;
      case "frame":
        var ret = x[2];
        x = x[1];
        s = this.push(ret, this.push(f, this.push(c, s)));
        this.tco_counter[this.tco_counter.length] = 0;
        break;
      case "argument":
        var x=x[1];
        s = this.push(a, s);
        break;
      case "shift":
        var n=x[1], x=x[2];

        // the number of arguments in the last call
        var n_args = this.index(s, n);  

        s = this.shift_args(n, n_args, s);
        break;
      case "tco_hinted_apply": // just like a regular apply, except we need to trace the # of TCO calls so we can generate a stacktrace
        this.tco_counter[this.tco_counter.length - 1]++;
        x = ["apply"].concat(_.rest(x));
        break;
      case "apply": //extended: n_args as second argument
        var func = a; //, n_args = x[1];

        // Save stack trace
        this.call_stack.push(this.last_refer);
        if (this.call_stack.length > this.max_trace_size) {
          // Remove old memory if it grows too long
          // Note: this simple way may be inconvenient (e.g. no trace
          // will be shown when an error occurred right after returning
          // from a large function)
          this.call_stack.shift();
        }

        // the number of arguments in the last call is
        // pushed to the stack.
        var n_args = this.index(s, -1);
        if(func instanceof Array){ //closure
          a = func;
          x = func[0];

          // The position of dot in the parameter list.
          var dotpos = func[func.length-1];

          if (dotpos >= 0) {
            // The dot is found
            // ----------------
            // => Process the &rest args: packing the rest args into a list.
            var ls = BiwaScheme.nil;
            for (var i=n_args; --i>=dotpos; ) {
              ls = new BiwaScheme.Pair(this.index(s, i), ls);
            }
            if (dotpos >= n_args) {
              // No rest argument is passed to this closure.
              // However, the closure expects the caller passes the rest argument.
              // In such case this VM prepares an empty list as the rest argument.
              // --------------------------------------------------------------
              // => We extend the stack to put the empty list.
              for(var i = -1; i < n_args; i++){
                this.index_set(s, i-1, this.index(s, i));
              }
              s++;
              // => Update the number of arguments
              this.index_set(s, -1, this.index(s, -1) + 1);  
            }
            this.index_set(s, dotpos, ls);
          }
          f = s;
          c = a;
        }
        else if(func instanceof Function){ // Apply JavaScript function
          // load arguments from stack
          var args = [];
          for(var i=0; i<n_args; i++) 
            args.push(this.index(s, i));

          // invoke the function
          var result = func(args, this);

          if(result instanceof BiwaScheme.Pause){
            // it requested the interpreter to suspend
            var pause = result;
            pause.set_state(this, ["return"], f, c, s);
            pause.ready();
            return pause;
          }
          else if(result instanceof BiwaScheme.Call){
            // it requested the interpreter to call a scheme closure

            //   [frame,
            //     [constant... (args)
            //     [constant, proc
            //     [apply]]]]
            //   [frame,
            //     [constant, after
            //     [apply 1]]]]
            //   x
            var call_after = ["frame",
                               ["argument",
                               ["constant", 1,
                               ["argument",
                               ["constant", result.after,
                               ["apply"]]]]],
                             ["return"]];
            var call_proc = ["constant", result.args.length,
                            ["argument",
                            ["constant", result.proc, 
                            ["apply", result.args.length]]]];
            var push_args = _.inject(result.args, function(opc, arg){
              // (foo 1 2) => first push 2, then 1
              //   [constant 2 ... [constant 1 ... ]
              return ["constant", arg, 
                     ["argument",
                     opc]];
            }, call_proc);
            x = ["frame",
                  push_args,
                call_after]
          }
          else{
            // the JavaScript function returned a normal value
            a = result;
            x = ["return"];
          }
        }
        else{
          // unknown function type
          throw new BiwaScheme.Error(BiwaScheme.inspect(func) + " is not a function");
        }
        break;
      case "return":
        // Pop stack frame
        var n=this.index(s, -1);
        var ss=s-n;
        x = this.index(ss, 0),
        f = this.index(ss, 1),
        c = this.index(ss, 2),
        s = ss-3-1;

        // Pop stack trace (> 1 times if tail calls are done)
        var n_pops = 1 + this.tco_counter[this.tco_counter.length - 1];
        this.call_stack.splice(-n_pops);
        this.tco_counter.pop();
        break;
      default:
        throw new BiwaScheme.Bug("unknown opecode type: "+x[0]);
      }
    }

//      if(ret === null)
//        throw new BiwaScheme.Bug("interpreter exited in unusual way");
//      else
//        return ret;
    return a
  },

  // Compile and evaluate Scheme program
  evaluate: function(str, after_evaluate){
    this.parser = new BiwaScheme.Parser(str);
    this.compiler = new BiwaScheme.Compiler();
    if(after_evaluate) 
      this.after_evaluate = after_evaluate;

    if(BiwaScheme.Debug) Console.puts("executing: " + str);
     
    this.is_top = true;
    this.file_stack = [];

    try{
      return this.resume(false);
    }
    catch(e){
      e.message = e.message + " [" + this.call_stack.join(", ") + "]";
      return this.on_error(e);
    }
  },

  // Resume evaluation
  // (internally used from Interpreter#execute and Pause#resume)
  resume: function(is_resume, a, x, f, c, s){
    var ret = BiwaScheme.undef;

    for(;;){
      if(is_resume){
        ret = this._execute(a, x, f, c, s);
        is_resume = false;
      }
      else{
        if(!this.parser) break; // adhoc: when Pause is used via invoke_closure
        var expr = this.parser.getObject();
        if(expr === BiwaScheme.Parser.EOS) break;

        // expand
        expr = BiwaScheme.Interpreter.expand(expr);

        // compile
        var opc = this.compiler.run(expr);
        //if(BiwaScheme.Debug) Console.p(opc);

        // execute
        ret = this._execute(expr, opc, 0, [], 0);
      }

      if(ret instanceof BiwaScheme.Pause){ //suspend evaluation
        return ret;
      }
    }

    // finished executing all forms
    this.after_evaluate(ret);
    return ret;
  },

  // Invoke a scheme closure
  invoke_closure: function(closure, args){
    args || (args = []);
    var n_args  = args.length;

    var x = ["constant", n_args, ["argument", ["constant", closure, ["apply"]]]]
    for(var i=0; i<n_args; i++)
      x = ["constant", args[i], ["argument", x]]

    return this._execute(closure, ["frame", x, ["halt"]], 0, closure, 0);
  },

  // only compiling (for debug use only)
  compile: function(str){
    var obj = BiwaScheme.Interpreter.read(str);
    var opc = BiwaScheme.Compiler.compile(obj);
    return opc;
  }
});

// Take a string and returns an expression.
BiwaScheme.Interpreter.read = function(str){
  var parser = new BiwaScheme.Parser(str);
  var r      = parser.getObject();
  return (r == BiwaScheme.Parser.EOS)? BiwaScheme.eof: r;
};

// Expand macro calls in a expression recursively.
//
// x - expression
// flag - used internally. do not specify this
//
// @throws {BiwaScheme.Error} when x has syntax error
BiwaScheme.Interpreter.expand = function(x, flag/*optional*/){
  var expand = BiwaScheme.Interpreter.expand;
  flag || (flag = {})
  var ret = null;

  if(x instanceof BiwaScheme.Pair){
    switch(x.car){
    case BiwaScheme.Sym("define"):
      var left = x.cdr.car, exp = x.cdr.cdr;
      ret = new BiwaScheme.Pair(BiwaScheme.Sym("define"),
              new BiwaScheme.Pair(left, expand(exp, flag)));
      break;
    case BiwaScheme.Sym("begin"):
      ret = new BiwaScheme.Pair(BiwaScheme.Sym("begin"), expand(x.cdr, flag));
      break;
    case BiwaScheme.Sym("quote"):
      ret = x;
      break;
    case BiwaScheme.Sym("lambda"):
      var vars=x.cdr.car, body=x.cdr.cdr;
      ret = new BiwaScheme.Pair(BiwaScheme.Sym("lambda"),
              new BiwaScheme.Pair(vars, expand(body, flag)));
      break;
    case BiwaScheme.Sym("if"):
      var testc=x.second(), thenc=x.third(), elsec=x.fourth();
      ret = BiwaScheme.List(BiwaScheme.Sym("if"),
                            expand(testc, flag),
                            expand(thenc, flag),
                            expand(elsec, flag));
      break;
    case BiwaScheme.Sym("set!"):
      var v=x.second(), x=x.third();
      ret = BiwaScheme.List(BiwaScheme.Sym("set!"), v, expand(x, flag));
      break;
    case BiwaScheme.Sym("call-with-current-continuation"): 
    case BiwaScheme.Sym("call/cc"): 
      var x=x.second();
      ret = BiwaScheme.List(BiwaScheme.Sym("call/cc"), expand(x, flag));
      break;
    default: //apply
      var transformer = null;
      if(BiwaScheme.isSymbol(x.car)){
        if(BiwaScheme.TopEnv[x.car.name] instanceof BiwaScheme.Syntax)
          transformer = BiwaScheme.TopEnv[x.car.name];
        else if(BiwaScheme.CoreEnv[x.car.name] instanceof BiwaScheme.Syntax)
          transformer = BiwaScheme.CoreEnv[x.car.name];
      }

      if(transformer){
        flag["modified"] = true;
        ret = transformer.transform(x);

//            // Debug
//            var before = BiwaScheme.to_write(x);
//            var after = BiwaScheme.to_write(ret);
//            if(before != after){
//              console.log("before: " + before)
//              console.log("expand: " + after)
//            }

        var fl;
        for(;;){
          ret = expand(ret, fl={});
          if(!fl["modified"]) 
            break;
        }
      }
      else{
        var expanded_car = expand(x.car, flag);
        var expanded_cdr;
        if(!(x.cdr instanceof BiwaScheme.Pair) && (x.cdr !== BiwaScheme.nil)){
          throw new Error("proper list required for function application "+
                          "or macro use: "+BiwaScheme.to_write(x));
        }
        expanded_cdr = BiwaScheme.array_to_list(
                         _.map(x.cdr.to_array(),
                               function(item){ return expand(item, flag); }));
        ret = new BiwaScheme.Pair(expanded_car, expanded_cdr);
      }
    }
  }
  else{
    ret = x;
  }
  return ret;
};
//
// R7RS Promise (lazy library)
//
BiwaScheme.Promise = BiwaScheme.Class.create({
  initialize : function(done, thunk_or_value){
    this.box = [done, thunk_or_value];
  },

  // Return true when this promise is already calculated
  is_done: function() {
    return this.box[0];
  },

  // Return calculated value of this promise
  value: function() {
    if (!this.is_done()) {
      throw new BiwaScheme.Bug("this promise is not calculated yet");
    }
    return this.box[1];
  },

  thunk: function() {
    if (this.is_done()) {
      throw new BiwaScheme.Bug("this promise does not know the thunk");
    }
    return this.box[1];
  },

  update_with: function(new_promise) {
    this.box[0] = new_promise.box[0];
    this.box[1] = new_promise.box[1];
    new_promise.box = this.box;
  }
});
BiwaScheme.isPromise = function(obj) {
  return (obj instanceof BiwaScheme.Promise);
};

// Create fresh promise
BiwaScheme.Promise.fresh = function(thunk) {
  return new BiwaScheme.Promise(false, thunk);
};
// Create calculated promise
BiwaScheme.Promise.done = function(value) {
  return new BiwaScheme.Promise(true, value);
};
///
/// infra.js - Basis for library functions
///

//
// define_*func - define library functions
//
BiwaScheme.check_arity = function(len, min, max){
  var fname = arguments.callee.caller
                ? arguments.callee.caller.fname
                : "(?)";
  if(len < min){
    if(max && max == min)
      throw new BiwaScheme.Error(fname+": wrong number of arguments (expected: "+min+" got: "+len+")");
    else
      throw new BiwaScheme.Error(fname+": too few arguments (at least: "+min+" got: "+len+")");
  }
  else if(max && max < len)
    throw new BiwaScheme.Error(fname+": too many arguments (at most: "+max+" got: "+len+")");
}
BiwaScheme.define_libfunc = function(fname, min, max, func){
  var f = function(ar, intp){
    BiwaScheme.check_arity(ar.length, min, max);
    return func(ar, intp);
  };

  func["fname"] = fname; // for assert_*
  f["fname"]    = fname; // for check_arity
  f["inspect"] = function(){ return this.fname; }
  BiwaScheme.CoreEnv[fname] = f;
}
BiwaScheme.alias_libfunc = function(fname, aliases) {
  if (BiwaScheme.CoreEnv[fname]) {
    if (_.isArray(aliases)) {
      _.map(aliases, function(a) { BiwaScheme.alias_libfunc(fname, a); });
    } else if (_.isString(aliases)) {
      BiwaScheme.CoreEnv[aliases] = BiwaScheme.CoreEnv[fname];
    } else {
      console.error("[BUG] bad alias for library function " +
                    "`" + fname + "': " + aliases.toString());
    }
  } else {
    console.error("[BUG] library function " +
                  "`" + fname + "'" +
                  " does not exist, so can't alias it.");
  }
};
BiwaScheme.define_syntax = function(sname, func) {
  var s = new BiwaScheme.Syntax(sname, func);
  BiwaScheme.CoreEnv[sname] = s;
}
BiwaScheme.define_scmfunc = function(fname, min, max, str){
  (new BiwaScheme.Interpreter).evaluate("(define "+fname+" "+str+"\n)");
}

//  define_scmfunc("map+", 2, null, 
//    "(lambda (proc ls) (if (null? ls) ls (cons (proc (car ls)) (map proc (cdr ls)))))");

//
// assertions - type checks
//
BiwaScheme.make_assert = function(check){
  return function(/*args*/){
    var fname = arguments.callee.caller
                  ? arguments.callee.caller.fname
                  : "";
    check.apply(this, [fname].concat(_.toArray(arguments)));
  }
}
BiwaScheme.make_simple_assert = function(type, test, _fname){
  return BiwaScheme.make_assert(function(fname, obj, opt){
    if(_fname) fname = _fname;
    option = opt ? ("("+opt+")") : ""
    if(!test(obj)){
      throw new BiwaScheme.Error(fname + option + ": " +
                                 type + " required, but got " +
                                 BiwaScheme.to_write(obj));
    }
  })
}

BiwaScheme.assert_number = BiwaScheme.make_simple_assert("number", function(obj){
  return typeof(obj) == 'number' || (obj instanceof BiwaScheme.Complex);
});

BiwaScheme.assert_integer = BiwaScheme.make_simple_assert("integer", function(obj){
  return typeof(obj) == 'number' && (obj % 1 == 0)
});

BiwaScheme.assert_real = BiwaScheme.make_simple_assert("real number", function(obj){
  return typeof(obj) == 'number';
});

BiwaScheme.assert_between = BiwaScheme.make_assert(function(fname, obj, from, to){
  if( typeof(obj) != 'number' || obj != Math.round(obj) ){
    throw new BiwaScheme.Error(fname + ": " +
                               "number required, but got " +
                               BiwaScheme.to_write(obj));
  }

  if( obj < from || to < obj ){
    throw new BiwaScheme.Error(fname + ": " +
                               "number must be between " +
                               from + " and " + to + ", but got " +
                               BiwaScheme.to_write(obj));
  }
});

BiwaScheme.assert_string = BiwaScheme.make_simple_assert("string", _.isString);

BiwaScheme.assert_char = BiwaScheme.make_simple_assert("character", BiwaScheme.isChar);
BiwaScheme.assert_symbol = BiwaScheme.make_simple_assert("symbol", BiwaScheme.isSymbol);
BiwaScheme.assert_port = BiwaScheme.make_simple_assert("port", BiwaScheme.isPort);
BiwaScheme.assert_pair = BiwaScheme.make_simple_assert("pair", BiwaScheme.isPair);
BiwaScheme.assert_list = BiwaScheme.make_simple_assert("list", BiwaScheme.isList);
BiwaScheme.assert_vector = BiwaScheme.make_simple_assert("vector", BiwaScheme.isVector);

BiwaScheme.assert_hashtable = BiwaScheme.make_simple_assert("hashtable",
                                          BiwaScheme.isHashtable);
BiwaScheme.assert_mutable_hashtable = BiwaScheme.make_simple_assert("mutable hashtable",
                                            BiwaScheme.isMutableHashtable);

BiwaScheme.assert_record = BiwaScheme.make_simple_assert("record",
                                          BiwaScheme.isRecord);
BiwaScheme.assert_record_td = BiwaScheme.make_simple_assert("record type descriptor",
                                          BiwaScheme.isRecordTD);
BiwaScheme.assert_record_cd = BiwaScheme.make_simple_assert("record constructor descriptor",
                                          BiwaScheme.isRecordCD);
BiwaScheme.assert_enum_set = BiwaScheme.make_simple_assert("enum_set",
                                          BiwaScheme.isEnumSet);
BiwaScheme.assert_promise = BiwaScheme.make_simple_assert("promise",
                                          BiwaScheme.isPromise);

BiwaScheme.assert_function = BiwaScheme.make_simple_assert("JavaScript function",
                                         _.isFunction);
BiwaScheme.assert_closure = BiwaScheme.make_simple_assert("scheme function",
                                        BiwaScheme.isClosure);
BiwaScheme.assert_procedure = BiwaScheme.make_simple_assert("scheme/js function", function(obj){
  return BiwaScheme.isClosure(obj) || _.isFunction(obj);
});

BiwaScheme.assert_date = BiwaScheme.make_simple_assert("date", function(obj){
  // FIXME: this is not accurate (about cross-frame issue)
  // https://prototype.lighthouseapp.com/projects/8886/tickets/443
  return obj instanceof Date;
});

//var assert_instance_of = BiwaScheme.make_assert(function(fname, type, obj, klass){
//  if(!(obj instanceof klass)){
//    throw new BiwaScheme.Error(fname + ": " +
//                               type + " required, but got " +
//                               BiwaScheme.to_write(obj));
//  }
//});

BiwaScheme.assert = BiwaScheme.make_assert(function(fname, success, message, _fname){
  if(!success){
    throw new BiwaScheme.Error((_fname || fname)+": "+message);
  }
});

//
// deprecation
//

// Show deprecation warnig
// @param {string} title - feature to be deprecated
// @param {string} ver - when it will be removed (eg. "1.0")
// @param {string} alt - alternatives
BiwaScheme.deprecate = function(title, ver, alt){
  if(BiwaScheme.suppress_deprecation_warning) return;

  var msg = title+" is deprecated and will be removed in BiwaScheme "+ver+ ". "+
            "Please use "+alt+" instead";
  console.warn(msg); 
};

//
// utils
//

// Parses a fractional notation in the format: <num>/<denom> (e.g. 3/7, -9/4),
// where <num> is a valid integer notation, and <denom> is a valid notation
// for a positive integer.
//
// Returns a float if the notation is valid, otherwise false.
//
// @param {string} rep - the string representation of the fraction
// @return {float|false}
BiwaScheme.parse_fraction = function(rep) {
  BiwaScheme.assert_string(rep);

  var frac_parts = rep.split('/');

  if (frac_parts.length !== 2)
    return false;

  var num_rep = frac_parts[0];
  var denom_rep = frac_parts[1];

  var num = BiwaScheme.parse_integer(num_rep, 10);
  var denom = BiwaScheme.parse_integer(denom_rep, 10);

  if (num === false || denom === false)
    return false;

  if (denom <= 0)
    return false;

  return num / denom;
};

// Given a string notation of an integer, and the radix, validates the
// notation: returns true if the notation is valid, otherwise false.
//
// @param {string} rep - the string representation of the integer
// @param {integer} rdx - the radix, where 2 <= rdx <= 36
// @return {boolean}
BiwaScheme.is_valid_integer_notation = function(rep, rdx) {
  BiwaScheme.assert_string(rep);
  BiwaScheme.assert_integer(rdx);

  if (rdx < 2 || rdx > 36)
    return false;

  var rdx_symbols = '0123456789abcdefghijklmnopqrstuvwxyz';

  var valid_symbols = rdx_symbols.slice(0, rdx);
  var sym_regex = new RegExp('^[+-]?' + '[' + valid_symbols + ']+$', 'ig');

  return sym_regex.test(rep);
};

// Parse an integer. If the integer does not have a valid representation, or
// produces NaN, - false is returned. If the radix is not within [2..36]
// range, false is returned as well.
//
// @param {string} rep - the string representation of the integer
// @param {integer} rdx - the radix, where 2 <= rdx <= 36
// @return {integer|false}
BiwaScheme.parse_integer = function(rep, rdx) {
  BiwaScheme.assert_string(rep);
  BiwaScheme.assert_integer(rdx);

  if (rdx < 2 || rdx > 36)
    return false;

  if (!BiwaScheme.is_valid_integer_notation(rep, rdx))
    return false;

  var res = parseInt(rep, rdx);

  if (Number.isNaN(res))
    return false;

  return res;
};

// Given a string notation of a floating-point number in the standard or
// scientific notation, returns true if the notation valid, otherwise false.
//
// For example:
// "1"      -> true
// "1."     -> true
// "1.23"   -> true
// "1e4"    -> true
// "1E4"    -> true
// "1E4.34" -> false
// "e34"    -> false
//
// @param {string} rep - the string representation of the float.
// @return {boolean}
BiwaScheme.is_valid_float_notation = function(rep) {
  BiwaScheme.assert_string(rep);

  var sci_regex = /^[+-]?[0-9]+[.]?[0-9]*e[+-]?[0-9]+$/i;
  var fp_regex  = /(^[+-]?[0-9]*[.][0-9]+$)|(^[+-]?[0-9]+[.][0-9]*$)/;

  if (sci_regex.test(rep) || fp_regex.test(rep))
    return true;

  return BiwaScheme.is_valid_integer_notation(rep, 10);
};

// Parse a floating-point number. If the floating-point number does not have a
// valid representation, or produces -Infinity, +Infinity or NaN, - false is
// returned.
//
// @param {string} rep - the string representation of the floating-point value
// @return {float|false}
BiwaScheme.parse_float = function(rep) {
  BiwaScheme.assert_string(rep);

  if (!BiwaScheme.is_valid_float_notation(rep))
    return false;

  var res = new Number(rep).valueOf();

  if (Number.isNaN(res))
    return false;

  if (!Number.isFinite(res))
    return false;

  return res;
};
//
// R6RS Base library
//

if( typeof(BiwaScheme)!='object' ) BiwaScheme={}; with(BiwaScheme) {
  ///
  /// R6RS Base library
  ///

  //
  //        11.4  Expressions
  //
  //            11.4.1  Quotation
  //(quote)
  //            11.4.2  Procedures
  //(lambda)
  //            11.4.3  Conditionaar
  //(if)
  //            11.4.4  Assignments
  //(set!)
  //            11.4.5  Derived conditionaar

  define_syntax("cond", function(x){
    var clauses = x.cdr;
    if(!(clauses instanceof Pair) || clauses === nil){
      throw new Error("malformed cond: cond needs list but got " +
                      to_write_ss(clauses));
    }
    // TODO: assert that clauses is a proper list

    var ret = null;
    _.each(clauses.to_array().reverse(), function(clause){
      if(!(clause instanceof Pair)){
        throw new Error("bad clause in cond: " + to_write_ss(clause));
      }

      if(clause.car === Sym("else")){
        if(ret !== null){
          throw new Error("'else' clause of cond followed by more clauses: " +
                          to_write_ss(clauses));
        }
        else if(clause.cdr === nil){
          // pattern A: (else)
          //  -> #f            ; not specified in R6RS...?
          ret = false;
        }
        else if(clause.cdr.cdr === nil){
          // pattern B: (else expr)
          //  -> expr
          ret = clause.cdr.car;
        }
        else{
          // pattern C: (else expr ...)
          //  -> (begin expr ...)
          ret = new Pair(Sym("begin"), clause.cdr);
        }
      }
      else{
        var test = clause.car;
        if(clause.cdr === nil){
          // pattern 1: (test)
          //  -> (or test ret)
          ret = List(Sym("or"), test, ret);
        }
        else if (clause.cdr.cdr === nil){
          // pattern 2: (test expr)
          //  -> (if test expr ret)
          ret = List(Sym("if"), test, clause.cdr.car, ret);
        }
        else if(clause.cdr.car === Sym("=>")){
          // pattern 3: (test => expr)
          //  -> (let ((#<gensym1> test))
          //       (if test (expr #<gensym1>) ret))
          var test = clause.car, expr = clause.cdr.cdr.car;
          var tmp_sym = BiwaScheme.gensym();

          ret = List(Sym("let"),
                     List( List(tmp_sym, test) ),
                     List(Sym("if"), test, List(expr, tmp_sym), ret));
        }
        else{
          // pattern 4: (test expr ...)
          //  -> (if test (begin expr ...) ret)
          ret = List(Sym("if"), test,
                     new Pair(Sym("begin"), clause.cdr),
                     ret);
        }
      }
    });
    return ret;
  });

  define_syntax("case", function(x){
    var tmp_sym = BiwaScheme.gensym();

    if(x.cdr === nil){
      throw new Error("case: at least one clause is required");
    }
    else if(!(x.cdr instanceof Pair)){
      throw new Error("case: proper list is required");
    }
    else{
      // (case key clauses ....)
      //  -> (let ((#<gensym1> key))
      var key = x.cdr.car;
      var clauses = x.cdr.cdr;

      var ret = undefined;
      _.each(clauses.to_array().reverse(), function(clause){
        if(clause.car === Sym("else")){
          // pattern 0: (else expr ...)
          //  -> (begin expr ...)
          if(ret === undefined){
            ret = new Pair(Sym("begin"), clause.cdr);
          }
          else{
            throw new Error("case: 'else' clause followed by more clauses: " +
                            to_write_ss(clauses));
          }
        }
        else{
          // pattern 1: ((datum ...) expr ...)
          //  -> (if (or (eqv? key (quote d1)) ...) (begin expr ...) ret)
          ret = List(
            Sym("if"),
            new Pair(Sym("or"), array_to_list(_.map(clause.car.to_array(), function(d){
                return List(Sym("eqv?"),
                            tmp_sym,
                            List(Sym("quote"), d));
            }))),
            new Pair(Sym("begin"), clause.cdr),
            ret
          );
        }
      });
      return new Pair(Sym("let1"),
               new Pair(tmp_sym,
                 new Pair(key,
                   new Pair(ret, nil))));
    }
  });

  define_syntax("and", function(x){
    // (and a b c) => (if a (if b c #f) #f)
    //todo: check improper list
    if(x.cdr == nil) return true;

    var objs = x.cdr.to_array();
    var i = objs.length-1;
    var t = objs[i];
    for(i=i-1; i>=0; i--)
      t = List(Sym("if"), objs[i], t, false);

    return t;
  })

  define_syntax("or", function(x){
    // (or a b c) => (if a a (if b b (if c c #f)))
    //todo: check improper list

    var objs = x.cdr.to_array()
    var f = false;
    for(var i=objs.length-1; i>=0; i--)
      f = List(Sym("if"), objs[i], objs[i], f);

    return f;
  })

  //            11.4.6  Binding constructs
  define_syntax("let", function(x){
    //(let ((a 1) (b 2)) (print a) (+ a b))
    //=> ((lambda (a b) (print a) (+ a b)) 1 2)
    var name = null;
    if (x.cdr.car instanceof Symbol) {
      name = x.cdr.car;
      x = x.cdr;
    }
    var binds = x.cdr.car, body = x.cdr.cdr;

    if((!(binds instanceof Pair)) && binds != BiwaScheme.nil){
      throw new Error("let: need a pair for bindings: got "+to_write(binds));
    }

    var vars = nil, vals = nil;
    for(var p=binds; p instanceof Pair; p=p.cdr){
      if(!(p.car instanceof Pair)){
        throw new Error("let: need a pair for bindings: got "+to_write(p.car));
      }
      vars = new Pair(p.car.car, vars);
      vals = new Pair(p.car.cdr.car, vals);
    }

    var lambda = null;
    if (name) {
      // (let loop ((a 1) (b 2)) body ..)
      //=> (letrec ((loop (lambda (a b) body ..))) (loop 1 2))
      vars = array_to_list(vars.to_array().reverse());
      vals = array_to_list(vals.to_array().reverse());

      var body_lambda = new Pair(Sym("lambda"), new Pair(vars, body));
      var init_call = new Pair(name, vals);

      lambda = List(Sym("letrec"),
                    new Pair(List(name, body_lambda), nil),
                    init_call);
    }
    else {
      lambda = new Pair(new Pair(Sym("lambda"),
                                 new Pair(vars, body)),
                        vals);
    }
    return lambda;
  })

  define_syntax("let*", function(x){
    //(let* ((a 1) (b a)) (print a) (+ a b))
    //-> (let ((a 1))
    //     (let ((b a)) (print a) (+ a b)))
    var binds = x.cdr.car, body = x.cdr.cdr;

    if(!(binds instanceof Pair))
      throw new Error("let*: need a pair for bindings: got "+to_write(binds));

    var ret = null;
    _.each(binds.to_array().reverse(), function(bind){
      ret = new Pair(Sym("let"),
               new Pair(new Pair(bind, nil),
                 ret == null ? body : new Pair(ret, nil)));
    })
    return ret;
  })

  var expand_letrec_star = function(x){
    var binds = x.cdr.car, body = x.cdr.cdr;

    if(!(binds instanceof Pair))
      throw new Error("letrec*: need a pair for bindings: got "+to_write(binds));

    var ret = body;
    _.each(binds.to_array().reverse(), function(bind){
      ret = new Pair(new Pair(Sym("set!"), bind),
              ret);
    })
    var letbody = nil;
    _.each(binds.to_array().reverse(), function(bind){
      letbody = new Pair(new Pair(bind.car,
                           new Pair(BiwaScheme.undef, nil)),
                  letbody);
    })
    return new Pair(Sym("let"),
             new Pair(letbody,
               ret));
  }
  define_syntax("letrec", expand_letrec_star);
  define_syntax("letrec*", expand_letrec_star);

  define_syntax("let-values", function(x) {
    // (let-values (((a b) (values 1 2))
    //               ((c d . e) (values 3 4 a)))
    //              (print a b c d e))
    // =>
    // (let ((#<gensym1> (lambda () (values 1 2)))
    //       (#<gensym2> (lambda () (values 3 4 a))))
    //   (let*-values (((a b) #<gensym1>)
    //                 ((c d . e) #<gensym2>))
    //                 (print a b c d e)))
      var mv_bindings = x.cdr.car;
      var body = x.cdr.cdr;
      var ret = null;

      var let_bindings = nil;
      var let_star_values_bindings = nil;
      _.each(mv_bindings.to_array().reverse(), function (item) {
	  var init = item.cdr.car;
	  var tmpsym = BiwaScheme.gensym()
	  var binding = new Pair(tmpsym,
				 new Pair(
					  new Pair(Sym("lambda"), new Pair(nil,
									   new Pair(init, nil))),
					  nil));
	  let_bindings = new Pair(binding, let_bindings);

	  var formals = item.car;
	  let_star_values_bindings = new Pair(new Pair (formals, new Pair(new Pair(tmpsym, nil), nil)),
					      let_star_values_bindings);
      });

      var let_star_values = new Pair(Sym("let*-values"),
				     new Pair(let_star_values_bindings,
					      body));
      ret = new Pair(Sym("let"),
		     new Pair(let_bindings,
			      new Pair (let_star_values, nil)));
      return ret;

  });

  //let*-values
  define_syntax("let*-values", function(x){
    // (let*-values (((a b) (values 1 2))
    //               ((c d . e) (values 3 4 a)))
    //   (print a b c d e))
    // -> (call-with-values
    //      (lambda () (values 1 2))
    //      (lambda (a b)
    //        (call-with-values
    //          (lambda () (values 3 4 a))
    //          (lambda (c d . e)
    //            (print a b c d e)))))
    var mv_bindings = x.cdr.car;
    var body = x.cdr.cdr;

    var ret = null;

    _.each(mv_bindings.to_array().reverse(), function(item){
      var formals = item.car, init = item.cdr.car;
      ret = new Pair(Sym("call-with-values"),
              new Pair(new Pair(Sym("lambda"),
                         new Pair(nil,
                           new Pair(init, nil))),
                new Pair(new Pair(Sym("lambda"),
                           new Pair(formals,
                             (ret == null ? body
                                          : new Pair(ret, nil)))), nil)));
    });
    return ret;
  });
  //            11.4.7  Sequencing
  //(begin)

  //
  //        11.5  Equivalence predicates
  //
  define_libfunc("eqv?", 2, 2, function(ar){
    return BiwaScheme.eqv(ar[0], ar[1]);
  })
  define_libfunc("eq?", 2, 2, function(ar){
    return BiwaScheme.eq(ar[0], ar[1]);
  })
  define_libfunc("equal?", 2, 2, function(ar){
    return BiwaScheme.equal(ar[0], ar[1]);
  })

  //
  //        11.6  Procedure predicate
  //
  //"procedure?", 1, 1
  define_libfunc("procedure?", 1, 1, function(ar){
    return ((ar[0] instanceof Array) && (ar[0].closure_p === true)
	    || (typeof ar[0] == "function"));
  })

  //
  //        11.7  Arithmetic
  //

  //            11.7.1  Propagation of exactness and inexactness
  //            11.7.2  Representability of infinities and NaNs
  //            11.7.3  Semantics of common operations
  //                11.7.3.1  Integer division
  //                11.7.3.2  Transcendental functions
  //(no functions are introduced by above sections)

  //
  //            11.7.4  Numerical operations
  //

  //                11.7.4.1  Numerical type predicates
  define_libfunc("number?", 1, 1, function(ar){
    return BiwaScheme.isNumber(ar[0]);
  });
  define_libfunc("complex?", 1, 1, function(ar){
    return BiwaScheme.isComplex(ar[0]);
  });
  define_libfunc("real?", 1, 1, function(ar){
    return BiwaScheme.isReal(ar[0]);
  });
  define_libfunc("rational?", 1, 1, function(ar){
    return BiwaScheme.isRational(ar[0]);
  });
  define_libfunc("integer?", 1, 1, function(ar){
    return BiwaScheme.isInteger(ar[0]);
  });

//(real-valued? obj)    procedure
//(rational-valued? obj)    procedure
//(integer-valued? obj)    procedure
//
//(exact? z)    procedure
//(inexact? z)    procedure

  //                11.7.4.2  Generic conversions
  //
//(inexact z)    procedure
//(exact z)    procedure
//
  //                11.7.4.3  Arithmetic operations

  //inf & nan: ok (for this section)
  define_libfunc("=", 2, null, function(ar){
    var v = ar[0];
    assert_number(ar[0]);
    for(var i=1; i<ar.length; i++){
      assert_number(ar[i]);
      if(real_part(ar[i]) != real_part(v)) return false;
      if(imag_part(ar[i]) != imag_part(v)) return false;
    }
    return true;
  });
  define_libfunc("<", 2, null, function(ar){
    assert_number(ar[0]);
    for(var i=1; i<ar.length; i++){
      assert_number(ar[i]);
      if(!(ar[i-1] < ar[i])) return false;
    }
    return true;
  });
  define_libfunc(">", 2, null, function(ar){
    assert_number(ar[0]);
    for(var i=1; i<ar.length; i++){
      assert_number(ar[i]);
      if(!(ar[i-1] > ar[i])) return false;
    }
    return true;
  });
  define_libfunc("<=", 2, null, function(ar){
    assert_number(ar[0]);
    for(var i=1; i<ar.length; i++){
      assert_number(ar[i]);
      if(!(ar[i-1] <= ar[i])) return false;
    }
    return true;
  });
  define_libfunc(">=", 2, null, function(ar){
    assert_number(ar[0]);
    for(var i=1; i<ar.length; i++){
      assert_number(ar[i]);
      if(!(ar[i-1] >= ar[i])) return false;
    }
    return true;
  });

  define_libfunc("zero?", 1, 1, function(ar){
    assert_number(ar[0]);
    return ar[0] === 0;
  });
  define_libfunc("positive?", 1, 1, function(ar){
    assert_number(ar[0]);
    return (ar[0] > 0);
  });
  define_libfunc("negative?", 1, 1, function(ar){
    assert_number(ar[0]);
    return (ar[0] < 0);
  });
  define_libfunc("odd?", 1, 1, function(ar){
    assert_number(ar[0]);
    return (ar[0] % 2 == 1) || (ar[0] % 2 == -1);
  })
  define_libfunc("even?", 1, 1, function(ar){
    assert_number(ar[0]);
    return ar[0] % 2 == 0;
  })
  define_libfunc("finite?", 1, 1, function(ar){
    assert_number(ar[0]);
    return (ar[0] != Infinity) && (ar[0] != -Infinity) && !isNaN(ar[0]);
  })
  define_libfunc("infinite?", 1, 1, function(ar){
    assert_number(ar[0]);
    return (ar[0] == Infinity) || (ar[0] == -Infinity);
  })
  define_libfunc("nan?", 1, 1, function(ar){
    assert_number(ar[0]);
    return isNaN(ar[0]);
  })
  define_libfunc("max", 2, null, function(ar){
    for(var i=0; i<ar.length; i++)
      assert_number(ar[i]);

    return Math.max.apply(null, ar)
  });
  define_libfunc("min", 2, null, function(ar){
    for(var i=0; i<ar.length; i++)
      assert_number(ar[i]);

    return Math.min.apply(null, ar);
  });

  var complex_or_real = function(real,imag){
    if(imag === 0) return real;
    return new Complex(real,imag);
  }
  var polar_or_real = function(magnitude, angle){
      if(angle === 0) return magnitude;
      return Complex.from_polar(magnitude, angle);
  }
  define_libfunc("+", 0,null, function(ar){
    var real = 0;
    var imag = 0;
    for(var i=0; i<ar.length; i++){
      assert_number(ar[i]);
      real+=real_part(ar[i]);
      imag+=imag_part(ar[i]);
    }
    return complex_or_real(real,imag);
  });
  var the_magnitude = function(n) {
      if(n instanceof Complex) return n.magnitude();
      return n;
  }
  var the_angle = function(n) {
      if(n instanceof Complex) return n.angle();
      return 0;
  }
  define_libfunc("*", 0,null, function(ar){
    var magnitude = 1;
    var angle = 0;
    for(var i=0; i<ar.length; i++){
      assert_number(ar[i]);
      magnitude*=the_magnitude(ar[i]);
      angle+=the_angle(ar[i]);
    }
    return polar_or_real(magnitude, angle);
  });
  define_libfunc("-", 1,null, function(ar){
    var len = ar.length;
    assert_number(ar[0]);

    if(len == 1) {
      if(ar[0] instanceof Complex) return new Complex(-real_part(ar[0]),-imag_part(ar[0]));
      return -ar[0];
    }
    else{
      var real = real_part(ar[0]);
      var imag = imag_part(ar[0]);
      for(var i=1; i<len; i++){
        assert_number(ar[i]);
        real-=real_part(ar[i]);
        imag-=imag_part(ar[i]);
      }
      return complex_or_real(real,imag);
    }
  });
  //for r6rs specification, (/ 0 0) or (/ 3 0) raises '&assertion exception'
  define_libfunc("/", 1,null, function(ar){
    var len = ar.length;
    assert_number(ar[0]);

    if(len == 1){
      if (ar[0] instanceof Complex) return Complex.from_polar(1/the_magnitude(ar[0]), -the_angle(ar[0]));
      return 1/ar[0];
    }
    else{
      var magnitude = the_magnitude(ar[0]);
      var angle = the_angle(ar[0]);
      for(var i=1; i<len; i++){
        assert_number(ar[i]);
        magnitude/=the_magnitude(ar[i]);
        angle-=the_angle(ar[i]);
      }
      return polar_or_real(magnitude, angle);
    }
  });

  define_libfunc("abs", 1, 1, function(ar){
    assert_number(ar[0]);
    return Math.abs(ar[0]);
  });

  var div = function(n, m){
    return Math.floor(n / m);
  }
  var mod = function(n, m){
    return n - Math.floor(n / m) * m;
  }
  var div0 = function(n, m){
    return (n > 0) ? Math.floor(n / m) : Math.ceil(n / m);
  }
  var mod0 = function(n, m){
    return (n > 0) ? n - Math.floor(n / m) * m
                   : n - Math.ceil(n / m) * m;
  }
  define_libfunc("div0-and-mod0", 2, 2, function(ar){
    assert_number(ar[0]);
    assert_number(ar[1]);
    return new Values([div(ar[0], ar[1]), mod(ar[0], ar[1])]);
  })
  define_libfunc("div", 2, 2, function(ar){
    assert_number(ar[0]);
    assert_number(ar[1]);
    return div(ar[0], ar[1]);
  })
  define_libfunc("mod", 2, 2, function(ar){
    assert_number(ar[0]);
    assert_number(ar[1]);
    return mod(ar[0], ar[1]);
  })
  define_libfunc("div0-and-mod0", 2, 2, function(ar){
    assert_number(ar[0]);
    assert_number(ar[1]);
    return new Values([div0(ar[0], ar[1]), mod0(ar[0], ar[1])]);
  })
  define_libfunc("div0", 2, 2, function(ar){
    assert_number(ar[0]);
    assert_number(ar[1]);
    return div0(ar[0], ar[1]);
  })
  define_libfunc("mod0", 2, 2, function(ar){
    assert_number(ar[0]);
    assert_number(ar[1]);
    return mod0(ar[0], ar[1]);
  })

//(gcd n1 ...)    procedure
//(lcm n1 ...)    procedure

  define_libfunc("numerator", 1, 1, function(ar){
    assert_number(ar[0]);
    if(ar[0] instanceof Rational)
      return ar[0].numerator;
    else
      throw new Bug("todo");
  })
  define_libfunc("denominator", 1, 1, function(ar){
    assert_number(ar[0]);
    if(ar[0] instanceof Rational)
      return ar[0].denominator;
    else
      throw new Bug("todo");
  })
  define_libfunc("floor", 1, 1, function(ar){
    assert_number(ar[0]);
    return Math.floor(ar[0]);
  })
  define_libfunc("ceiling", 1, 1, function(ar){
    assert_number(ar[0]);
    return Math.ceil(ar[0]);
  })
  define_libfunc("truncate", 1, 1, function(ar){
    assert_number(ar[0]);
    return (ar[0] < 0) ? Math.ceil(ar[0]) : Math.floor(ar[0]);
  })
  define_libfunc("round", 1, 1, function(ar){
    assert_number(ar[0]);
    return Math.round(ar[0]);
  })

//(rationalize x1 x2)    procedure

  define_libfunc("exp", 1, 1, function(ar){
    assert_number(ar[0]);
    return Math.exp(ar[0]);
  })
  define_libfunc("log", 1, 2, function(ar){
    var num = ar[0], base = ar[1];
    assert_number(num);

    if(base){ // log b num == log e num / log e b
      assert_number(base);
      return Math.log(num) / Math.log(base)
    }
    else
      return Math.log(num);
  })
  define_libfunc("sin", 1, 1, function(ar){
    assert_number(ar[0]);
    return Math.sin(ar[0]);
  })
  define_libfunc("cos", 1, 1, function(ar){
    assert_number(ar[0]);
    return Math.cos(ar[0]);
  })
  define_libfunc("tan", 1, 1, function(ar){
    assert_number(ar[0]);
    return Math.tan(ar[0]);
  })
  define_libfunc("asin", 1, 1, function(ar){
    assert_number(ar[0]);
    return Math.asin(ar[0]);
  })
  define_libfunc("acos", 1, 1, function(ar){
    assert_number(ar[0]);
    return Math.acos(ar[0]);
  })
  define_libfunc("atan", 1, 2, function(ar){
    assert_number(ar[0]);
    if(ar.length == 2){
      assert_number(ar[1]);
      return Math.atan2(ar[0], ar[1]);
    }
    else
      return Math.atan(ar[0]);
  })
  define_libfunc("sqrt", 1, 1, function(ar){
    assert_number(ar[0]);
    return Math.sqrt(ar[0]);
  })
  define_libfunc("exact-integer-sqrt", 1, 1, function(ar){
    assert_number(ar[0]);
    var sqrt_f = Math.sqrt(ar[0]);
    var sqrt_i = sqrt_f - (sqrt_f % 1);
    var rest   = ar[0] - sqrt_i * sqrt_i;

    return new Values([sqrt_i, rest]);
  })
  define_libfunc("expt", 2, 2, function(ar){
    assert_number(ar[0]);
    assert_number(ar[1]);
    return Math.pow(ar[0], ar[1]);
  })
  define_libfunc("make-rectangular", 2, 2, function(ar){
    assert_number(ar[0]);
    assert_number(ar[1]);
    return new Complex(ar[0], ar[1]);
  })
  define_libfunc("make-polar", 2, 2, function(ar){
    assert_number(ar[0]);
    assert_number(ar[1]);
    return Complex.from_polar(ar[0], ar[1]);
  })
  var real_part = function(n) {
    return Complex.assure(n).real;
  }
  var imag_part = function(n) {
    return Complex.assure(n).imag;
  }
  define_libfunc("real-part", 1, 1, function(ar){
    assert_number(ar[0]);
    return real_part(ar[0]);
  })
  define_libfunc("imag-part", 1, 1, function(ar){
    assert_number(ar[0]);
    return Complex.assure(ar[0]).imag;
  })
  define_libfunc("magnitude", 1, 1, function(ar){
    assert_number(ar[0]);
    return Complex.assure(ar[0]).magnitude();
  })
  define_libfunc("angle", 1, 1, function(ar){
    assert_number(ar[0]);
    return Complex.assure(ar[0]).angle();
  })

  //
  //                11.7.4.4  Numerical Input and Output
  //
  define_libfunc("number->string", 1, 3, function(ar){
    var z = ar[0], radix = ar[1], precision = ar[2];
    if(precision)
      throw new Bug("number->string: precision is not yet implemented");

    radix = radix || 10;  //TODO: check radix is 2, 8, 10, or 16.
    return z.toString(radix);
  })
  define_libfunc("string->number", 1, 3, function(ar){
    var s = ar[0];

    if (s === '+inf.0')
      return Infinity;

    if (s === '-inf.0')
      return -Infinity;

    if (s === '+nan.0')
      return NaN;

    var radix = ar[1];
    
    var int_res = BiwaScheme.parse_integer(
      s, radix === 0 ? 0 : radix || 10
    );

    if (int_res !== false)
      return int_res;

    if (radix !== undefined && radix !== 10)
      return false;

    var fp_res = BiwaScheme.parse_float(s);

    if (fp_res !== false)
      return fp_res;

    var frac_res = BiwaScheme.parse_fraction(s);

    if (frac_res !== false)
      return frac_res;

    return false;
  })

  //
  //        11.8  Booleans
  //

  define_libfunc("not", 1, 1, function(ar){
    return (ar[0] === false) ? true : false;
  });
  define_libfunc("boolean?", 1, 1, function(ar){
    return (ar[0] === false || ar[0] === true) ? true : false;
  });
  define_libfunc("boolean=?", 2, null, function(ar){
    var len = ar.length;
    for(var i=1; i<len; i++){
      if(ar[i] != ar[0]) return false;
    }
    return true;
  });

  //        11.9  Pairs and lists

  define_libfunc("pair?", 1, 1, function(ar){
    return (ar[0] instanceof Pair) ? true : false;
  });
  define_libfunc("cons", 2, 2, function(ar){
    return new Pair(ar[0], ar[1]);
  });
  define_libfunc("car", 1, 1, function(ar){
    //should raise &assertion for '()...
    if(!(ar[0] instanceof Pair)) throw new Error("Attempt to apply car on " + ar[0]);
    return ar[0].car;
  });
  define_libfunc("cdr", 1, 1, function(ar){
    //should raise &assertion for '()...
    if(!(ar[0] instanceof Pair)) throw new Error("Attempt to apply cdr on " + ar[0]);
    return ar[0].cdr;
  });
  define_libfunc("set-car!", 2, 2, function(ar){
    if(!(ar[0] instanceof Pair)) throw new Error("Attempt to apply set-car! on " + ar[0]);
    ar[0].car = ar[1];
    return BiwaScheme.undef;
  });
  define_libfunc("set-cdr!", 2, 2, function(ar){
    if(!(ar[0] instanceof Pair)) throw new Error("Attempt to apply set-cdr! on " + ar[0]);
    ar[0].cdr = ar[1];
    return BiwaScheme.undef;
  });

  // cadr, caddr, cadddr, etc.
  (function(){
    // To traverse into pair and raise error
    var get = function(funcname, spec, obj){
      var ret = obj;
      _.each(spec, function(is_cdr){
        if(ret instanceof Pair){
          ret = (is_cdr ? ret.cdr : ret.car);
        }
        else{
          throw new Error(funcname+": attempt to get "+(is_cdr ? "cdr" : "car")+" of "+ret);
        }
      });
      return ret;
    };
    define_libfunc("caar", 1, 1, function(ar){ return get("caar", [0, 0], ar[0]); });
    define_libfunc("cadr", 1, 1, function(ar){ return get("cadr", [1, 0], ar[0]); });
    define_libfunc("cdar", 1, 1, function(ar){ return get("cadr", [0, 1], ar[0]); });
    define_libfunc("cddr", 1, 1, function(ar){ return get("cadr", [1, 1], ar[0]); });

    define_libfunc("caaar", 1, 1, function(ar){ return get("caaar", [0, 0, 0], ar[0]); });
    define_libfunc("caadr", 1, 1, function(ar){ return get("caadr", [1, 0, 0], ar[0]); });
    define_libfunc("cadar", 1, 1, function(ar){ return get("cadar", [0, 1, 0], ar[0]); });
    define_libfunc("caddr", 1, 1, function(ar){ return get("caddr", [1, 1, 0], ar[0]); });
    define_libfunc("cdaar", 1, 1, function(ar){ return get("cdaar", [0, 0, 1], ar[0]); });
    define_libfunc("cdadr", 1, 1, function(ar){ return get("cdadr", [1, 0, 1], ar[0]); });
    define_libfunc("cddar", 1, 1, function(ar){ return get("cddar", [0, 1, 1], ar[0]); });
    define_libfunc("cdddr", 1, 1, function(ar){ return get("cdddr", [1, 1, 1], ar[0]); });

    define_libfunc("caaaar", 1, 1, function(ar){ return get("caaaar", [0, 0, 0, 0], ar[0]); });
    define_libfunc("caaadr", 1, 1, function(ar){ return get("caaadr", [1, 0, 0, 0], ar[0]); });
    define_libfunc("caadar", 1, 1, function(ar){ return get("caadar", [0, 1, 0, 0], ar[0]); });
    define_libfunc("caaddr", 1, 1, function(ar){ return get("caaddr", [1, 1, 0, 0], ar[0]); });
    define_libfunc("cadaar", 1, 1, function(ar){ return get("cadaar", [0, 0, 1, 0], ar[0]); });
    define_libfunc("cadadr", 1, 1, function(ar){ return get("cadadr", [1, 0, 1, 0], ar[0]); });
    define_libfunc("caddar", 1, 1, function(ar){ return get("caddar", [0, 1, 1, 0], ar[0]); });
    define_libfunc("cadddr", 1, 1, function(ar){ return get("cadddr", [1, 1, 1, 0], ar[0]); });
    define_libfunc("cdaaar", 1, 1, function(ar){ return get("cdaaar", [0, 0, 0, 1], ar[0]); });
    define_libfunc("cdaadr", 1, 1, function(ar){ return get("cdaadr", [1, 0, 0, 1], ar[0]); });
    define_libfunc("cdadar", 1, 1, function(ar){ return get("cdadar", [0, 1, 0, 1], ar[0]); });
    define_libfunc("cdaddr", 1, 1, function(ar){ return get("cdaddr", [1, 1, 0, 1], ar[0]); });
    define_libfunc("cddaar", 1, 1, function(ar){ return get("cddaar", [0, 0, 1, 1], ar[0]); });
    define_libfunc("cddadr", 1, 1, function(ar){ return get("cddadr", [1, 0, 1, 1], ar[0]); });
    define_libfunc("cdddar", 1, 1, function(ar){ return get("cdddar", [0, 1, 1, 1], ar[0]); });
    define_libfunc("cddddr", 1, 1, function(ar){ return get("cddddr", [1, 1, 1, 1], ar[0]); });
  })();

  define_libfunc("null?", 1, 1, function(ar){
    return (ar[0] === nil);
  });
  define_libfunc("list?", 1, 1, function(ar){
    return isList(ar[0]);
  });
  define_libfunc("list", 0, null, function(ar){
    var l = nil;
    for(var i=ar.length-1; i>=0; i--)
      l = new Pair(ar[i], l);
    return l;
  });
  define_libfunc("length", 1, 1, function(ar){
    assert_list(ar[0]);
    var n = 0;
    for(var o=ar[0]; o!=nil; o=o.cdr)
      n++;
    return n;
  });
  define_libfunc("append", 1, null, function(ar){
    var k = ar.length;
    var ret = ar[--k];
    while(k--){
      _.each(ar[k].to_array().reverse(), function(item){
        ret = new Pair(item, ret);
      });
    }
    return ret;
  });
  define_libfunc("reverse", 1, 1, function(ar){
    // (reverse '()) => '()
    if(ar[0] == nil)
      return nil;
    assert_pair(ar[0]);

    var l = nil;
    for(var o=ar[0]; o!=nil; o=o.cdr)
      l = new Pair(o.car, l);
    return l;
  });
  define_libfunc("list-tail", 2, 2, function(ar){
    assert_pair(ar[0]);
    assert_integer(ar[1]);
    if(ar[1] < 0)
      throw new Error("list-tail: index out of range ("+ar[1]+")");

    var o = ar[0];
    for(var i=0; i<ar[1]; i++){
      if(!(o instanceof Pair)) throw new Error("list-tail: the list is shorter than " + ar[1]);
      o = o.cdr;
    }
    return o;
  });
  define_libfunc("list-ref", 2, 2, function(ar){
    assert_pair(ar[0]);
    assert_integer(ar[1]);
    if(ar[1] < 0)
      throw new Error("list-tail: index out of range ("+ar[1]+")");

    var o = ar[0];
    for(var i=0; i<ar[1]; i++){
      if(!(o instanceof Pair)) throw new Error("list-ref: the list is shorter than " + ar[1]);
      o = o.cdr;
    }
    return o.car;
  });
  define_libfunc("map", 2, null, function(ar){
    var proc = ar.shift(), lists = ar;
    _.each(lists, assert_list);

    var a = [];
    return Call.multi_foreach(lists, {
      // Called for each element
      // input: the element (or the elements, if more than one list is given)
      // output: a Call request of proc and args
      call: function(xs){
        return new Call(proc, _.map(xs, function(x){ return x.car }));
      },

      // Called when each Call request is finished
      // input: the result of Call request,
      //   the element(s) of the Call request (which is not used here)
      // output: `undefined' to continue,
      //   some value to terminate (the value will be the result)
      result: function(res){ a.push(res); },

      // Called when reached to the end of the list(s)
      // input: none
      // output: the resultant value
      finish: function(){ return array_to_list(a); }
    })
  })
  define_libfunc("for-each", 2, null, function(ar){
    var proc = ar.shift(), lists = ar;
    _.each(lists, assert_list);

    return Call.multi_foreach(lists, {
      call: function(xs){
        return new Call(proc, _.map(xs, function(x){ return x.car }));
      },
      finish: function(){ return BiwaScheme.undef; }
    })
  })

  //        11.10  Symbols

  define_libfunc("symbol?", 1, 1, function(ar){
    return (ar[0] instanceof Symbol) ? true : false;
  });
  define_libfunc("symbol->string", 1, 1, function(ar){
    assert_symbol(ar[0]);
    return ar[0].name;
  });
  define_libfunc("symbol=?", 2, null, function(ar){
    assert_symbol(ar[0]);
    for(var i=1; i<ar.length; i++){
      assert_symbol(ar[i]);
      if(ar[i] != ar[0]) return false;
    }
    return true;
  });
  define_libfunc("string->symbol", 1, 1, function(ar){
    assert_string(ar[0]);
    return Sym(ar[0]);
  });

  //
  //        11.11  Characters
  //
  define_libfunc('char?', 1, 1, function(ar){
    return (ar[0] instanceof Char);
  });
  define_libfunc('char->integer', 1, 1, function(ar){
    assert_char(ar[0]);
    return ar[0].value.charCodeAt(0);
  })
  define_libfunc('integer->char', 1, 1, function(ar){
    assert_integer(ar[0]);
    return Char.get(String.fromCharCode(ar[0]));
  })

  var make_char_compare_func = function(test){
    return function(ar){
      assert_char(ar[0]);
      for(var i=1; i<ar.length; i++){
        assert_char(ar[i]);
        if(!test(ar[i-1].value, ar[i].value))
          return false;
      }
      return true;
    }
  }
  define_libfunc('char=?', 2, null,
    make_char_compare_func(function(a, b){ return a == b }))
  define_libfunc('char<?', 2, null,
    make_char_compare_func(function(a, b){ return a < b }))
  define_libfunc('char>?', 2, null,
    make_char_compare_func(function(a, b){ return a > b }))
  define_libfunc('char<=?', 2, null,
    make_char_compare_func(function(a, b){ return a <= b }))
  define_libfunc('char>=?', 2, null,
    make_char_compare_func(function(a, b){ return a >= b }))

  //
  //        11.12  Strings
  //
  define_libfunc("string?", 1, 1, function(ar){
    return (typeof(ar[0]) == "string");
  })
  define_libfunc("make-string", 1, 2, function(ar){
    assert_integer(ar[0]);
    var c = " ";
    if(ar[1]){
      assert_char(ar[1]);
      c = ar[1].value;
    }
    var out = "";
    _.times(ar[0], function() { out += c; });
    return out;
  })
  define_libfunc("string", 0, null, function(ar){
    if(ar.length == 0) return "";
    for(var i=0; i<ar.length; i++)
      assert_char(ar[i]);
    return _.map(ar, function(c){ return c.value }).join("");
  })
  define_libfunc("string-length", 1, 1, function(ar){
    assert_string(ar[0]);
    return ar[0].length;
  })
  define_libfunc("string-ref", 2, 2, function(ar){
    assert_string(ar[0]);
    assert_between(ar[1], 0, ar[0].length-1);
    return Char.get(ar[0].charAt([ar[1]]));
  })
  define_libfunc("string=?", 2, null, function(ar){
    assert_string(ar[0]);
    for(var i=1; i<ar.length; i++){
      assert_string(ar[i]);
      if(ar[0] != ar[i]) return false;
    }
    return true;
  })
  define_libfunc("string<?", 2, null, function(ar){
    assert_string(ar[0]);
    for(var i=1; i<ar.length; i++){
      assert_string(ar[i]);
      if(!(ar[i-1] < ar[i])) return false;
    }
    return true;
  })
  define_libfunc("string>?", 2, null, function(ar){
    assert_string(ar[0]);
    for(var i=1; i<ar.length; i++){
      assert_string(ar[i]);
      if(!(ar[i-1] > ar[i])) return false;
    }
    return true;
  })
  define_libfunc("string<=?", 2, null, function(ar){
    assert_string(ar[0]);
    for(var i=1; i<ar.length; i++){
      assert_string(ar[i]);
      if(!(ar[i-1] <= ar[i])) return false;
    }
    return true;
  })
  define_libfunc("string>=?", 2, null, function(ar){
    assert_string(ar[0]);
    for(var i=1; i<ar.length; i++){
      assert_string(ar[i]);
      if(!(ar[i-1] >= ar[i])) return false;
    }
    return true;
  })

  define_libfunc("substring", 3, 3, function(ar){
    assert_string(ar[0]);
    assert_integer(ar[1]);
    assert_integer(ar[2]);

    if(ar[1] < 0) throw new Error("substring: start too small: "+ar[1]);
    if(ar[2] < 0) throw new Error("substring: end too small: "+ar[2]);
    if(ar[0].length+1 <= ar[1]) throw new Error("substring: start too big: "+ar[1]);
    if(ar[0].length+1 <= ar[2]) throw new Error("substring: end too big: "+ar[2]);
    if(!(ar[1] <= ar[2])) throw new Error("substring: not start <= end: "+ar[1]+", "+ar[2]);

    return ar[0].substring(ar[1], ar[2]);
  })

  define_libfunc("string-append", 0, null, function(ar){
    for(var i=0; i<ar.length; i++)
      assert_string(ar[i]);

    return ar.join("");
  })
  define_libfunc("string->list", 1, 1, function(ar){
    assert_string(ar[0]);
    return array_to_list(_.map(ar[0].split(""), function(s){ return Char.get(s[0]); }));
  })
  define_libfunc("list->string", 1, 1, function(ar){
    assert_list(ar[0]);
    return _.map(ar[0].to_array(), function(c){ return c.value; }).join("");
  })
  define_libfunc("string-for-each", 2, null, function(ar){
    var proc = ar.shift(), strs = ar;
    _.each(strs, assert_string);

    return Call.multi_foreach(strs, {
      call: function(chars){ return new Call(proc, chars); },
      finish: function(){ return BiwaScheme.undef; }
    })
  })
  define_libfunc("string-copy", 1, 1, function(ar){
    // note: this is useless, because javascript strings are immutable
    assert_string(ar[0]);
    return ar[0];
  })


  //
  //        11.13  Vectors
  //
  define_libfunc("vector?", 1, 1, function(ar){
    return (ar[0] instanceof Array) && (ar[0].closure_p !== true)
  })
  define_libfunc("make-vector", 1, 2, function(ar){
    assert_integer(ar[0]);
    var vec = new Array(ar[0]);

    if(ar.length == 2){
      for(var i=0; i<ar[0]; i++)
        vec[i] = ar[1];
    }
    return vec;
  })
  define_libfunc("vector", 0, null, function(ar){
    return ar;
  })
  define_libfunc("vector-length", 1, 1, function(ar){
    assert_vector(ar[0]);
    return ar[0].length;
  })
  define_libfunc("vector-ref", 2, 2, function(ar){
    assert_vector(ar[0]);
    assert_integer(ar[1]);
    assert_between(ar[1], 0, ar[0].length-1);

    return ar[0][ar[1]];
  })
  define_libfunc("vector-set!", 3, 3, function(ar){
    assert_vector(ar[0]);
    assert_integer(ar[1]);

    ar[0][ar[1]] = ar[2];
    return BiwaScheme.undef;
  })
  define_libfunc("vector->list", 1, 1, function(ar){
    assert_vector(ar[0]);
    return array_to_list(ar[0]);
  })
  define_libfunc("list->vector", 1, 1, function(ar){
    assert_list(ar[0]);
    return ar[0].to_array();
  })
  define_libfunc("vector-fill!", 2, 2, function(ar){
    assert_vector(ar[0]);
    var vec = ar[0], obj = ar[1];

    for(var i=0; i<vec.length; i++)
      vec[i] = obj;
    return vec;
  })
  define_libfunc("vector-map", 2, null, function(ar){
    var proc = ar.shift(), vecs = ar;
    _.each(vecs, assert_vector);

    var a = [];
    return Call.multi_foreach(vecs, {
      call: function(objs){ return new Call(proc, objs); },
      result: function(res){ a.push(res); },
      finish: function(){ return a; }
    })
  })
  define_libfunc("vector-for-each", 2, null, function(ar){
    var proc = ar.shift(), vecs = ar;
    _.each(vecs, assert_vector);

    return Call.multi_foreach(vecs, {
      call: function(objs){ return new Call(proc, objs); },
      finish: function(){ return BiwaScheme.undef; }
    })
  })

  //
  //        11.14  Errors and violations
  //
//(error who message irritant1 ...)    procedure
//(assertion-violation who message irritant1 ...)    procedure
//(assert <expression>)    syntax

  //
  //        11.15  Control features
  //
  define_libfunc("apply", 2, null, function(ar){
    var proc = ar.shift(), rest_args = ar.pop(), args = ar;
    args = args.concat(rest_args.to_array());

    return new Call(proc, args);
  })
  define_syntax("call-with-current-continuation", function(x){
    return new Pair(Sym("call/cc"),
             x.cdr);
  })
  define_libfunc("values", 0, null, function(ar){
    if (ar.length == 1) // eg. (values 3)
      return ar[0];
    else
      return new Values(ar);
  })
  define_libfunc("call-with-values", 2, 2, function(ar){
    var producer = ar[0], consumer = ar[1];
    assert_procedure(producer);
    assert_procedure(consumer);
    return new Call(producer, [], function(ar){
      var result = ar[0];
      if(result instanceof Values){
        return new Call(consumer, result.content);
      }
      else{
        // eg. (call-with-values (lambda () 3)
        //                       (lambda (x) x))
        return new Call(consumer, [result]);
      }
    })
  })

  //
  //dynamic-wind

  //        11.16  Iteration
  //named let

  //        11.17  Quasiquotation
  // `() is expanded to `cons` and `append`.
  // `#() is expanded to `vector` and `vector-append`.
  var expand_qq = function(f, lv){
    if(f instanceof Symbol || f === nil){
      return List(Sym("quote"), f);
    }
    else if(f instanceof Pair){
      var car = f.car;
      if(car instanceof Pair && car.car === Sym("unquote-splicing")){
        if(lv == 1)
          return List(Sym("append"),
                      f.car.cdr.car,
                      expand_qq(f.cdr, lv));
        else
          return List(Sym("cons"),
                      List(Sym("list"),
                           List(Sym("quote"), Sym("unquote-splicing")),
                           expand_qq(f.car.cdr.car, lv-1)),
                      expand_qq(f.cdr, lv));
      }
      else if(car === Sym("unquote")){
        if(lv == 1)
          return f.cdr.car;
        else
          return List(Sym("list"),
                      List(Sym("quote"), Sym("unquote")),
                      expand_qq(f.cdr.car, lv-1));
      }
      else if(car === Sym("quasiquote"))
        return List(Sym("list"),
                    List(Sym("quote"), Sym("quasiquote")),
                    expand_qq(f.cdr.car, lv+1));
      else
        return List(Sym("cons"),
                    expand_qq(f.car, lv),
                    expand_qq(f.cdr, lv));
    }
    else if(f instanceof Array){
      var vecs = [[]];
      for(var i=0; i<f.length; i++){
        if(f[i] instanceof Pair && f[i].car === Sym("unquote-splicing")) {
          if (lv == 1) {
            var item = List(Sym("list->vector"), f[i].cdr.car);
            item["splicing"] = true;
            vecs.push(item);
            vecs.push([]);
          }
          else {
            var item = List(Sym("cons"),
                         List(Sym("list"),
                              List(Sym("quote"), Sym("unquote-splicing")),
                              expand_qq(f[i].car.cdr.car, lv-1)),
                         expand_qq(f[i].cdr, lv));
            _.last(vecs).push(item);
          }
        }
        else {
          // Expand other things as the same as if they are in a list quasiquote
          _.last(vecs).push(expand_qq(f[i], lv));
        }
      }

      var vectors = vecs.map(function(vec){
        if (vec["splicing"]) {
          return vec;
        }
        else {
          return Cons(Sym("vector"),
                      BiwaScheme.array_to_list(vec));
        }
      });
      if (vectors.length == 1) {
         return Cons(Sym("vector"),
                     BiwaScheme.array_to_list(vecs[0]));
      }
      else {
        return Cons(Sym("vector-append"),
                    BiwaScheme.array_to_list(vectors));
      }
    }
    else
      return f;
  }
  define_syntax("quasiquote", function(x){
    return expand_qq(x.cdr.car, 1);
  })
  //unquote
  define_syntax("unquote", function(x){
    throw new Error("unquote(,) must be inside quasiquote(`)");
  })
  //unquote-splicing
  define_syntax("unquote-splicing", function(x){
    throw new Error("unquote-splicing(,@) must be inside quasiquote(`)");
  })

  //        11.18  Binding constructs for syntactic keywords
  //let-syntax
  //letrec-syntax

  //        11.19  Macro transformers
  //syntax-rules
  //identifier-syntax
  //

  //        11.20  Tail calls and tail contexts
  //(no library function introduced)


  ///
  /// R6RS Standard Libraries
  ///

  //
  // Chapter 1 Unicode
  //
//(char-upcase char)    procedure
//(char-downcase char)    procedure
//(char-titlecase char)    procedure
//(char-foldcase char)    procedure
//
//(char-ci=? char1 char2 char3 ...)    procedure
//(char-ci<? char1 char2 char3 ...)    procedure
//(char-ci>? char1 char2 char3 ...)    procedure
//(char-ci<=? char1 char2 char3 ...)    procedure
//(char-ci>=? char1 char2 char3 ...)    procedure
//
//(char-alphabetic? char)    procedure
//(char-numeric? char)    procedure
//(char-whitespace? char)    procedure
//(char-upper-case? char)    procedure
//(char-lower-case? char)    procedure
//(char-title-case? char)    procedure
//
//(char-general-category char)    procedure

  //(string-upcase string)    procedure
  define_libfunc("string-upcase", 1, 1, function(ar){
    assert_string(ar[0]);
    return ar[0].toUpperCase();
  });
  //(string-downcase string)    procedure
  define_libfunc("string-downcase", 1, 1, function(ar){
    assert_string(ar[0]);
    return ar[0].toLowerCase();
  });
//(string-titlecase string)    procedure
//(string-foldcase string)    procedure

  BiwaScheme.make_string_ci_function = function(compare){
    return function(ar){
      assert_string(ar[0]);
      var str = ar[0].toUpperCase();

      for(var i=1; i<ar.length; i++){
        assert_string(ar[i]);
        if (!compare(str, ar[i].toUpperCase()))
          return false;
      }
      return true;
    }
  };
  //(string-ci=? string1 string2 string3 ...)    procedure
  define_libfunc("string-ci=?", 2, null,
    make_string_ci_function(function(a, b){ return a == b; }));
  //(string-ci<? string1 string2 string3 ...)    procedure
  define_libfunc("string-ci<?", 2, null,
    make_string_ci_function(function(a, b){ return a < b; }));
  //(string-ci>? string1 string2 string3 ...)    procedure
  define_libfunc("string-ci>?", 2, null,
    make_string_ci_function(function(a, b){ return a > b; }));
  //(string-ci<=? string1 string2 string3 ...)    procedure
  define_libfunc("string-ci<=?", 2, null,
    make_string_ci_function(function(a, b){ return a <= b; }));
  //(string-ci>=? string1 string2 string3 ...)    procedure
  define_libfunc("string-ci>=?", 2, null,
    make_string_ci_function(function(a, b){ return a >= b; }));

//(string-normalize-nfd string)    procedure
//(string-normalize-nfkd string)    procedure
//(string-normalize-nfc string)    procedure
//(string-normalize-nfkc string)    procedure

  //
  // Chapter 2 Bytevectors
  //

  //
  // Chapter 3 List utilities
  //
  define_libfunc("find", 2, 2, function(ar){
    var proc = ar[0], ls = ar[1];
    assert_list(ls);
    return Call.foreach(ls, {
      call: function(x){ return new Call(proc, [x.car]) },
      result: function(res, x){ if(res) return x.car; },
      finish: function(){ return false }
    })
  })
  define_libfunc("for-all", 2, null, function(ar){
    var proc = ar.shift();
    var lists = ar;
    _.each(lists, assert_list);

    var last = true; //holds last result which proc returns
    return Call.multi_foreach(lists, {
      call: function(pairs){
        return new Call(proc, _.map(pairs, function(x){ return x.car }));
      },
      result: function(res, pairs){
        if(res === false) return false;
        last = res;
      },
      finish: function(){ return last; }
    })
  })
  define_libfunc("exists", 2, null, function(ar){
    var proc = ar.shift();
    var lists = ar;
    _.each(lists, assert_list);

    return Call.multi_foreach(lists, {
      call: function(pairs){
        return new Call(proc, _.map(pairs, function(x){ return x.car }));
      },
      result: function(res, pairs){
        if(res !== false) return res;
      },
      finish: function(){ return false; }
    })
  })
  define_libfunc("filter", 2, 2, function(ar){
    var proc = ar[0], ls = ar[1];
    assert_list(ls);

    var a = [];
    return Call.foreach(ls, {
      call: function(x){ return new Call(proc, [x.car]) },
      result: function(res, x){ if(res) a.push(x.car); },
      finish: function(){ return array_to_list(a) }
    })
  })
//  define_scmfunc("partition+", 2, 2,
//    "(lambda (proc ls)  \
//       (define (partition2 proc ls t f) \
//         (if (null? ls) \
//           (values (reverse t) (reverse f)) \
//           (if (proc (car ls)) \
//             (partition2 proc (cdr ls) (cons (car ls) t) f) \
//             (partition2 proc (cdr ls) t (cons (car ls) f))))) \
//       (partition2 proc ls '() '()))");

  define_libfunc("partition", 2, 2, function(ar){
    var proc = ar[0], ls = ar[1];
    assert_list(ls);

    var t = [], f = [];
    return Call.foreach(ls, {
      call: function(x){ return new Call(proc, [x.car]) },
      result: function(res, x){
        if(res) t.push(x.car);
        else    f.push(x.car);
      },
      finish: function(){
        return new Values([array_to_list(t), array_to_list(f)]);
      }
    })
  })
  define_libfunc("fold-left", 3, null, function(ar){
    var proc = ar.shift(), accum = ar.shift(), lists = ar;
    _.each(lists, assert_list);

    return Call.multi_foreach(lists, {
      call: function(pairs){
        var args = _.map(pairs, function(x){ return x.car });
        args.unshift(accum);
        return new Call(proc, args);
      },
      result: function(res, pairs){ accum = res; },
      finish: function(){ return accum; }
    })
  })
  define_libfunc("fold-right", 3, null, function(ar){
    var proc = ar.shift(), accum = ar.shift();
    var lists = _.map(ar, function(ls){
      // reverse each list
      assert_list(ls);
      return array_to_list(ls.to_array().reverse());
    })

    return Call.multi_foreach(lists, {
      call: function(pairs){
        var args = _.map(pairs, function(x){ return x.car });
        args.push(accum);
        return new Call(proc, args);
      },
      result: function(res, pairs){ accum = res; },
      finish: function(){ return accum; }
    })
  })
  define_libfunc("remp", 2, 2, function(ar){
    var proc = ar[0], ls = ar[1];
    assert_list(ls);

    var ret = [];
    return Call.foreach(ls, {
      call: function(x){ return new Call(proc, [x.car]) },
      result: function(res, x){ if(!res) ret.push(x.car); },
      finish: function(){ return array_to_list(ret); }
    })
  })
  var make_remover = function(key){
    return function(ar){
      var obj = ar[0], ls = ar[1];
      assert_list(ls);

      var ret = [];
      return Call.foreach(ls, {
        call: function(x){
          return new Call(TopEnv[key] || CoreEnv[key], [obj, x.car])
        },
        result: function(res, x){ if(!res) ret.push(x.car); },
        finish: function(){ return array_to_list(ret); }
      })
    }
  }
  define_libfunc("remove", 2, 2, make_remover("equal?"));
  define_libfunc("remv", 2, 2, make_remover("eqv?"));
  define_libfunc("remq", 2, 2, make_remover("eq?"));

  define_libfunc("memp", 2, 2, function(ar){
    var proc = ar[0], ls = ar[1];
    assert_list(ls);

    var ret = [];
    return Call.foreach(ls, {
      call: function(x){ return new Call(proc, [x.car]) },
      result: function(res, x){ if(res) return x; },
      finish: function(){ return false; }
    })
  })
  var make_finder = function(key){
    return function(ar){
      var obj = ar[0], ls = ar[1];
      assert_list(ls);

      var ret = [];
      return Call.foreach(ls, {
        call: function(x){
          return new Call(TopEnv[key] || CoreEnv[key], [obj, x.car])
        },
        result: function(res, x){ if(res) return x; },
        finish: function(){ return false; }
      })
    }
  }
  define_libfunc("member", 2, 2, make_finder("equal?"));
  define_libfunc("memv", 2, 2, make_finder("eqv?"));
  define_libfunc("memq", 2, 2, make_finder("eq?"));

  define_libfunc("assp", 2, 2, function(ar){
    var proc = ar[0], als = ar[1];
    assert_list(als);

    var ret = [];
    return Call.foreach(als, {
      call: function(x){
        if(x.car.car)
          return new Call(proc, [x.car.car]);
        else
          throw new Error("ass*: pair required but got "+to_write(x.car));
      },
      result: function(res, x){ if(res) return x.car; },
      finish: function(){ return false; }
    })
  })
  var make_assoc = function(func_name, eq_func_name){
    return function(ar){
      var obj = ar[0], list = ar[1];
      assert_list(list);

      var ret = [];
      return Call.foreach(list, {
        call: function(ls){
          if(!BiwaScheme.isPair(ls.car))
            throw new Error(func_name+": pair required but got "+to_write(ls.car));

          var equality = (TopEnv[eq_func_name] || CoreEnv[eq_func_name]);
          return new Call(equality, [obj, ls.car.car]);
        },
        result: function(was_equal, ls){ if(was_equal) return ls.car; },
        finish: function(){ return false; }
      })
    }
  }
  define_libfunc("assoc", 2, 2, make_assoc("assoc", "equal?"));
  define_libfunc("assv", 2, 2, make_assoc("assv", "eqv?"));
  define_libfunc("assq", 2, 2, make_assoc("assq", "eq?"));

  define_libfunc("cons*", 1, null, function(ar){
    if(ar.length == 1)
      return ar[0];
    else{
      var ret = null;
      _.each(ar.reverse(), function(x){
        if(ret){
          ret = new Pair(x, ret);
        }
        else
          ret = x;
      })
      return ret;
    }
  });

  //
  // Chapter 4 Sorting
  //
  (function(){
    // Destructively sort the given array
    // with scheme function `proc` as comparator
    var mergeSort = function(ary, proc, finish) {
      if (ary.length <= 1) return finish(ary);
      return mergeSort_(ary, proc, finish, [[0, ary.length, false]], false);
    };

    var mergeSort_ = function(ary, proc, finish, stack, up) {
      while(true) {
        var start = stack[stack.length-1][0],
            end   = stack[stack.length-1][1],
            left  = stack[stack.length-1][2];
        var len = end - start;
        //console.debug("mergeSort_", ary, stack.join(' '), up?"u":"d", ""+start+".."+(end-1))

        if (len >= 2 && !up) {
          // There are parts to be sorted
          stack.push([start, start+(len>>1), true]); continue;
        }
        else if (left) {
          // Left part sorted. Continue to the right one
          stack.pop();
          var rend = stack[stack.length-1][1];
          stack.push([end, rend, false]); up = false; continue;
        }
        else {
          // Right part sorted. Merge left and right
          stack.pop();
          var lstart = stack[stack.length-1][0];
          var ary1 = ary.slice(lstart, start),
              ary2 = ary.slice(start, end);
          return merge_(ary1, ary2, proc, [], 0, 0, function(ret) {
            //console.debug("mergeSortd", ary, stack.join(' '), up?"u":"d", ary1, ary2, ret, ""+start+".."+(start+len-1));
            for (var i = 0; i < ret.length; i++) {
              ary[lstart + i] = ret[i];
            }

            if (stack.length == 1) {
              return finish(ary);
            }
            else {
              return mergeSort_(ary, proc, finish, stack, true);
            }
          });
        }
      }
    };

    var merge_ = function(ary1, ary2, proc, ret, i, j, cont) {
      //console.debug("merge_", ary1, ary2, ret, i, j);
      var len1 = ary1.length, len2 = ary2.length;
      if (i < len1 && j < len2) {
        return new Call(proc, [ary2[j], ary1[i]], function(ar) {
          //console.debug("comp", [ary2[j], ary1[i]], ar[0]);
          if (ar[0]) {
            ret.push(ary2[j]); j+=1;
          }
          else {
            ret.push(ary1[i]); i+=1;
          }
          return merge_(ary1, ary2, proc, ret, i, j, cont);
        });
      }
      else {
        while (i < len1) { ret.push(ary1[i]); i+=1; }
        while (j < len2) { ret.push(ary2[j]); j+=1; }
        return cont(ret)
      }
    };

    var compareFn = function(a,b){
      return BiwaScheme.lt(a, b) ? -1 :
             BiwaScheme.lt(b, a) ? 1 : 0;
    };

    define_libfunc("list-sort", 1, 2, function(ar){
      if(ar[1]){
        assert_procedure(ar[0]);
        assert_list(ar[1]);
        return mergeSort(ar[1].to_array(), ar[0], function(ret) {
          return array_to_list(ret);
        });
      }
      else {
        assert_list(ar[0]);
        return array_to_list(ar[0].to_array().sort(compareFn));
      }
    });

    //(vector-sort proc vector)    procedure
    define_libfunc("vector-sort", 1, 2, function(ar){
      if(ar[1]){
        assert_procedure(ar[0]);
        assert_vector(ar[1]);
        return mergeSort(_.clone(ar[1]), ar[0], function(ret){
          return ret;
        });
      }
      else {
        assert_vector(ar[0]);
        return _.clone(ar[0]).sort(compareFn);
      }
    });

    //(vector-sort! proc vector)    procedure
    define_libfunc("vector-sort!", 1, 2, function(ar){
      if(ar[1]){
        assert_procedure(ar[0]);
        assert_vector(ar[1]);
        return mergeSort(ar[1], ar[0], function(ret) {
          return BiwaScheme.undef;
        });
      }
      else {
        assert_vector(ar[0]);
        ar[0].sort(compareFn);
        return BiwaScheme.undef;
      }
    });
  })();

  //
  // Chapter 5 Control Structures
  //
  define_syntax("when", function(x){
    //(when test body ...)
    //=> (if test (begin body ...) #<undef>)
    var test = x.cdr.car, body = x.cdr.cdr;

    return new Pair(Sym("if"),
             new Pair(test,
               new Pair(new Pair(Sym("begin"), body),
                 new Pair(BiwaScheme.undef, nil))));
  });

  define_syntax("unless", function(x){
    //(unless test body ...)
    //=> (if (not test) (begin body ...) #<undef>)
    var test = x.cdr.car, body = x.cdr.cdr;

    return new Pair(Sym("if"),
             new Pair(new Pair(Sym("not"), new Pair(test, nil)),
               new Pair(new Pair(Sym("begin"), body),
                 new Pair(BiwaScheme.undef, nil))));
  });

  define_syntax("do", function(x){
    //(do ((var1 init1 step1)
    //     (var2 init2 step2) ...)
    //    (test expr1 expr2 ...)
    //  body1 body2 ...)
    //=> (let loop` ((var1 init1) (var2 init2) ...)
    //     (if test
    //       (begin expr1 expr2 ...)
    //       (begin body1 body2 ...
    //              (loop` step1 step2 ...)))))

    // parse arguments
    if(!BiwaScheme.isPair(x.cdr))
      throw new Error("do: no variables of do");
    var varsc = x.cdr.car;
    if(!BiwaScheme.isPair(varsc))
      throw new Error("do: variables must be given as a list");
    if(!BiwaScheme.isPair(x.cdr.cdr))
      throw new Error("do: no resulting form of do");
    var resultc = x.cdr.cdr.car;
    var bodyc = x.cdr.cdr.cdr;

    // construct subforms
    var loop = BiwaScheme.gensym();

    var init_vars = array_to_list(varsc.map(function(var_def){
      var a = var_def.to_array();
      return List(a[0], a[1]);
    }));

    var test = resultc.car;
    var result_exprs = new Pair(Sym("begin"), resultc.cdr);

    var next_loop = new Pair(loop, array_to_list(varsc.map(function(var_def){
      var a = var_def.to_array();
      return a[2] || a[0];
    })));
    var body_exprs = new Pair(Sym("begin"), bodyc).concat(List(next_loop));

    // combine subforms
    return List(Sym("let"),
                loop,
                init_vars,
                List(Sym("if"),
                     test,
                     result_exprs,
                     body_exprs));
  });

  //(case-lambda <case-lambda clause> ...)    syntax
  define_syntax("case-lambda", function(x){
    if(!BiwaScheme.isPair(x.cdr))
      throw new Error("case-lambda: at least 1 clause required");
    var clauses = x.cdr.to_array();
    
    var args_ = BiwaScheme.gensym();
    var exec = List(Sym("raise"), "case-lambda: no matching clause found");

    clauses.reverse().forEach(function(clause) {
      if(!BiwaScheme.isPair(clause))
        throw new Error("case-lambda: clause must be a pair: "+
                        BiwaScheme.to_write(clause));
      var formals = clause.car, clause_body = clause.cdr;

      if (formals === BiwaScheme.nil) {
        exec = List(Sym("if"),
                    List(Sym("null?"), args_),
                    new Pair(Sym("begin"), clause_body),
                    exec);
      }
      else if (BiwaScheme.isPair(formals)) {
        var len = formals.length(), last_cdr = formals.last_cdr();
        var pred = (last_cdr === BiwaScheme.nil ? Sym("=") : Sym(">="));
        var lambda = new Pair(Sym("lambda"),
                       new Pair(formals,
                         clause_body));
        exec = List(Sym("if"),
                    List(pred, List(Sym("length"), args_), len),
                    List(Sym("apply"), lambda, args_),
                    exec);
      }
      else if (BiwaScheme.isSymbol(formals)) {
        exec = new Pair(Sym("let1"),
                 new Pair(formals,
                   new Pair(args_,
                     clause_body)));
        // Note: previous `exec` is just discarded because this is a wildcard pattern.
      }
      else {
        throw new Error("case-lambda: invalid formals: "+
                        BiwaScheme.to_write(formals));
      }
    });

    return List(Sym("lambda"), args_, exec);
  });

  //
  // Chapter 6 Records
  // see also: src/system/record.js
  //

  // 6.2 Records: Syntactic layer
  //eqv, eq

  //(define-record-type <name spec> <record clause>*)    syntax
  define_syntax("define-record-type", function(x){
    // (define-record-type <name spec> <record clause>*)
    var name_spec = x.cdr.car;
    var record_clauses = x.cdr.cdr;

    // 1. parse name spec
    // <name spec>: either
    // - <record name> eg: point
    // - (<record name> <constructor name> <predicate name>)
    //   eg: (point make-point point?)
    if(BiwaScheme.isSymbol(name_spec)){
      var record_name = name_spec;
      var constructor_name = Sym("make-"+name_spec.name);
      var predicate_name = Sym(name_spec.name+"?");
    }
    else{
      assert_list(name_spec);
      var record_name = name_spec.car;
      var constructor_name = name_spec.cdr.car;
      var predicate_name = name_spec.cdr.cdr.car;
      assert_symbol(record_name);
      assert_symbol(constructor_name);
      assert_symbol(predicate_name);
    }

    // 2. parse record clauses
    var sealed = false;
    var opaque = false;
    var nongenerative = false;
    var uid = false;
    var parent_name;
    var parent_rtd = false;
    var parent_cd = false;
    var protocol = false;
    var fields = [];

    // <record clause>:
    _.each(record_clauses.to_array(), function(clause){
      switch(clause.car){
        // - (fields <field spec>*)
        case Sym("fields"):
          fields = _.map(clause.cdr.to_array(), function(field_spec, idx){
            if(BiwaScheme.isSymbol(field_spec)){
              // - <field name>
              return {name: field_spec, idx: idx, mutable: false,
                      accessor_name: null, mutator_name: null};
            }
            else{
              assert_list(field_spec);
              assert_symbol(field_spec.car);
              switch(field_spec.car){
                case Sym("immutable"):
                  // - (immutable <field name>)
                  // - (immutable <field name> <accessor name>)
                  var field_name = field_spec.cdr.car;
                  assert_symbol(field_name);

                  if(BiwaScheme.isNil(field_spec.cdr.cdr))
                    return {name: field_name, idx: idx, mutable: false};
                  else
                    return {name: field_name, idx: idx, mutable: false,
                            accessor_name: field_spec.cdr.cdr.car};
                  break;

                case Sym("mutable"):
                  // - (mutable <field name>)
                  // - (mutable <field name> <accessor name> <mutator name>)
                  var field_name = field_spec.cdr.car;
                  assert_symbol(field_name);

                  if(BiwaScheme.isNil(field_spec.cdr.cdr))
                    return {name: field_name, idx: idx, mutable: true}
                  else
                    return {name: field_name, idx: idx, mutable: true,
                            accessor_name: field_spec.cdr.cdr.car,
                            mutator_name:  field_spec.cdr.cdr.cdr.car};
                  break;
                default:
                  throw new Error("define-record-type: field definition "+
                              "must start with `immutable' or `mutable' "+
                              "but got "+BiwaScheme.inspect(field_spec.car));
              }
            }
          });
          break;
        // - (parent <name>)
        case Sym("parent"):
          parent_name = clause.cdr.car;
          assert_symbol(parent_name);
          break;
        // - (protocol <expr>)
        case Sym("protocol"):
          protocol = clause.cdr.car;
          break;
        // - (sealed <bool>)
        case Sym("sealed"):
          sealed = !!clause.cdr.car;
          break;
        // - (opaque <bool>)
        case Sym("opaque"):
          opaque = !!clause.cdr.car;
          break;
        // - (nongenerative <uid>?)
        case Sym("nongenerative"):
          nongenerative = true;
          uid = clause.cdr.car;
          break;
        // - (parent-rtd <rtd> <cd>)
        case Sym("parent-rtd"):
          parent_rtd = clause.cdr.car;
          parent_cd = clause.cdr.cdr.car;
          break;
        default:
          throw new BiwaScheme.Error("define-record-type: unknown clause `"+
                                     BiwaScheme.to_write(clause.car)+"'");
      }
    });

    if(parent_name){
      parent_rtd = [Sym("record-type-descriptor"), parent_name];
      parent_cd  = [Sym("record-constructor-descriptor"), parent_name];
    }

    // 3. build the definitions
    // Note: In this implementation, rtd and cd are not bound to symbols.
    // They are referenced through record name by record-type-descriptor
    // and record-constructor-descriptor. These relation are stored in
    // the hash BiwaScheme.Record._DefinedTypes.
    var rtd = [Sym("record-type-descriptor"), record_name];
    var cd  = [Sym("record-constructor-descriptor"), record_name];

    // registration
    var rtd_fields = _.map(fields, function(field){
      return List(Sym(field.mutable ? "mutable" : "immutable"), field.name);
    });
    rtd_fields.is_vector = true; //tell List not to convert
    var rtd_def = [Sym("make-record-type-descriptor"),
                    [Sym("quote"), record_name], parent_rtd, uid,
                    sealed, opaque, rtd_fields];
    var cd_def = [Sym("make-record-constructor-descriptor"),
                    Sym("__rtd"), parent_cd, protocol];
    var registration =
      [Sym("let*"), [[Sym("__rtd"), rtd_def],
                    [Sym("__cd"), cd_def]],
        [Sym("_define-record-type"),
          [Sym("quote"), record_name], Sym("__rtd"), Sym("__cd")]];

    // accessors and mutators
    var accessor_defs = _.map(fields, function(field){
      var name = field.accessor_name ||
                   Sym(record_name.name+"-"+field.name.name);

      return [Sym("define"), name, [Sym("record-accessor"), rtd, field.idx]];
    });

    var mutator_defs = _.filter(fields, function(field){
      return field.mutable;
    });
    mutator_defs = _.map(mutator_defs, function(field){
      var name = field.mutator_name ||
                   Sym(record_name.name+"-"+field.name.name+"-set!");

      return [Sym("define"), name, [Sym("record-mutator"), rtd, field.idx]];
    });

    // Wrap the definitions with `begin'
    // Example:
    //   (begin
    //     (let* ((__rtd (make-record-type-descriptor 'square
    //                     (record-type-descriptor rect)
    //                     #f #f #f
    //                     #((mutable w) (mutable h))))
    //            (__cd (make-record-constructor-descriptor __rtd
    //                    (record-constructor-descriptor rect)
    //                    (lambda (n) ...))))
    //       (_define-record-type 'square __rtd __cd))
    //
    //     (define make-square
    //       (record-constructor
    //         (record-constructor-descriptor square)))
    //     (define square?
    //       (record-predicate (record-type-descriptor square)))
    //     (define square-w
    //       (record-accessor (record-type-descriptor square) 0))
    //     (define square-h
    //       (record-accessor (record-type-descriptor square) 1))
    //     (define set-square-w!
    //       (record-mutator (record-type-descriptor square) 0))
    //     (define set-square-h!
    //       (record-mutator (record-type-descriptor square) 1)))
    //
    return deep_array_to_list(
      [Sym("begin"),
        registration,
        [Sym("define"), constructor_name, [Sym("record-constructor"), cd]],
        [Sym("define"), predicate_name, [Sym("record-predicate"), rtd]],
        ].concat(accessor_defs).
          concat(mutator_defs)
    );
  });

  define_libfunc("_define-record-type", 3, 3, function(ar){
    assert_symbol(ar[0]);
    assert_record_td(ar[1]);
    assert_record_cd(ar[2]);
    BiwaScheme.Record.define_type(ar[0].name, ar[1], ar[2]);
    return BiwaScheme.undef;
  });

  //(record-type-descriptor <record name>)    syntax
  define_syntax("record-type-descriptor", function(x){
    return deep_array_to_list([Sym("_record-type-descriptor"), [Sym("quote"), x.cdr.car]]);
  });
  define_libfunc("_record-type-descriptor", 1, 1, function(ar){
    assert_symbol(ar[0]);
    var type = BiwaScheme.Record.get_type(ar[0].name);
    if(type)
      return type.rtd;
    else
      throw new Error("record-type-descriptor: unknown record type "+ar[0].name);
  });

  //(record-constructor-descriptor <record name>)    syntax
  define_syntax("record-constructor-descriptor", function(x){
    return deep_array_to_list([Sym("_record-constructor-descriptor"), [Sym("quote"), x.cdr.car]]);
  });
  define_libfunc("_record-constructor-descriptor", 1, 1, function(ar){
    assert_symbol(ar[0]);
    var type = BiwaScheme.Record.get_type(ar[0].name);
    if(type)
      return type.cd;
    else
      throw new Error("record-constructor-descriptor: unknown record type "+ar[0].name);
  });

  // 6.3  Records: Procedural layer
  //(make-record-type-descriptor name    procedure
  define_libfunc("make-record-type-descriptor", 6, 6, function(ar){
    var name = ar[0], parent_rtd = ar[1], uid = ar[2],
        sealed = ar[3], opaque = ar[4], fields = ar[5];

    assert_symbol(name);
    if(parent_rtd) assert_record_td(parent_rtd);
    if(uid){
      assert_symbol(uid);
      var _rtd = BiwaScheme.Record.RTD.NongenerativeRecords[uid.name];
      if(_rtd){
        // the record type is already defined.
        return _rtd;
        // should check equality of other arguments..
      }
    }
    sealed = !!sealed;
    opaque = !!opaque;
    assert_vector(fields);
    for(var i=0; i<fields.length; i++){
      var list = fields[i];
      assert_symbol(list.car, "mutability");
      assert_symbol(list.cdr.car, "field name");
      fields[i] = [list.cdr.car.name, (list.car == Sym("mutable"))];
    };

    var rtd = new BiwaScheme.Record.RTD(name, parent_rtd, uid,
                                     sealed, opaque, fields);
    if(uid)
      BiwaScheme.Record.RTD.NongenerativeRecords[uid.name] = rtd;

    return rtd;
  });

  //(record-type-descriptor? obj)    procedure
  define_libfunc("record-type-descriptor?", 1, 1, function(ar){
    return (ar[0] instanceof BiwaScheme.Record.RTD);
  });

  //(make-record-constructor-descriptor rtd    procedure
  define_libfunc("make-record-constructor-descriptor", 3, 3, function(ar){
    var rtd = ar[0], parent_cd = ar[1], protocol = ar[2];

    assert_record_td(rtd);
    if(parent_cd) assert_record_cd(parent_cd);
    if(protocol) assert_procedure(protocol);

    return new BiwaScheme.Record.CD(rtd, parent_cd, protocol);
  });

  //(record-constructor constructor-descriptor)    procedure
  define_libfunc("record-constructor", 1, 1, function(ar){
    var cd = ar[0];
    assert_record_cd(cd);

    return cd.record_constructor();
  });

  //(record-predicate rtd)    procedure
  define_libfunc("record-predicate", 1, 1, function(ar){
    var rtd = ar[0];
    assert_record_td(rtd);

    return function(args){
      var obj = args[0];

      return (obj instanceof BiwaScheme.Record) &&
             (obj.rtd === rtd);
    };
  });

  //(record-accessor rtd k)    procedure
  define_libfunc("record-accessor", 2, 2, function(ar){
    var rtd = ar[0], k = ar[1];
    assert_record_td(rtd);
    assert_integer(k);
    for(var _rtd = rtd.parent_rtd; _rtd; _rtd = _rtd.parent_rtd)
      k += _rtd.fields.length;

    return function(args){
      var record = args[0];
      var error_msg = rtd.name.name+"-"+rtd.field_name(k)+": "+
                      BiwaScheme.to_write(record)+
                      " is not a "+rtd.name.name;
      assert(BiwaScheme.isRecord(record), error_msg);

      var descendant = false;
      for(var _rtd = record.rtd; _rtd; _rtd = _rtd.parent_rtd){
        if(_rtd == rtd) descendant = true;
      }
      assert(descendant, error_msg);

      return record.get(k);
    };
  });

  //(record-mutator rtd k)    procedure
  define_libfunc("record-mutator", 2, 2, function(ar){
    var rtd = ar[0], k = ar[1];
    assert_record_td(rtd);
    assert_integer(k);
    for(var _rtd = rtd.parent_rtd; _rtd; _rtd = _rtd.parent_rtd)
      k += _rtd.fields.length;

    return function(args){
      var record = args[0], val = args[1];
      var func_name = rtd.field_name(k);

      assert_record(record);
      assert(record.rtd === rtd,
            func_name+": "+BiwaScheme.to_write(record)+
            " is not a "+rtd.name.name);
      assert(!record.rtd.sealed,
            func_name+": "+rtd.name.name+" is sealed (can't mutate)");

      record.set(k, val);
    };
  });

  // 6.4  Records: Inspection
  //(record? obj)    procedure
  define_libfunc("record?", 1, 1, function(ar){
    var obj = ar[0];
    if(BiwaScheme.isRecord(obj)){
      if(obj.rtd.opaque)
        return false; // opaque records pretend as if it is not a record.
      else
        return true;
    }
    else
      return false;
  });

  //(record-rtd record)    procedure
  define_libfunc("record-rtd", 1, 1, function(ar){
    assert_record(ar[0]);
    return ar[0].rtd;
  });

  //(record-type-name rtd)    procedure
  define_libfunc("record-type-name", 1, 1, function(ar){
    assert_record_td(ar[0]);
    return ar[0].name;
  });

  //(record-type-parent rtd)    procedure
  define_libfunc("record-type-parent", 1, 1, function(ar){
    assert_record_td(ar[0]);
    return ar[0].parent_rtd;
  });

  //(record-type-uid rtd)    procedure
  define_libfunc("record-type-uid", 1, 1, function(ar){
    assert_record_td(ar[0]);
    return ar[0].uid;
  });

  //(record-type-generative? rtd)    procedure
  define_libfunc("record-type-generative?", 1, 1, function(ar){
    assert_record_td(ar[0]);
    return ar[0].generative;
  });

  //(record-type-sealed? rtd)    procedure
  define_libfunc("record-type-sealed?", 1, 1, function(ar){
    assert_record_td(ar[0]);
    return ar[0].sealed;
  });

  //(record-type-opaque? rtd)    procedure
  define_libfunc("record-type-opaque?", 1, 1, function(ar){
    assert_record_td(ar[0]);
    return ar[0].opaque;
  });

  //(record-type-field-names rtd)    procedure
  define_libfunc("record-type-field-names", 1, 1, function(ar){
    assert_record_td(ar[0]);
    return _.map(ar[0].fields, function(field){ return field.name; });
  });

  //(record-field-mutable? rtd k)    procedure
  define_libfunc("record-field-mutable?", 2, 2, function(ar){
    var rtd = ar[0], k = ar[1];
    assert_record_td(ar[0]);
    assert_integer(k);

    for(var _rtd = rtd.parent_rtd; _rtd; _rtd = _rtd.parent_rtd)
      k += _rtd.fields.length;

    return ar[0].fields[k].mutable;
  });

  //
  // Chapter 7 Exceptions and conditions
  //
//(with-exception-handler handler thunk)    procedure
//(guard (<variable>    syntax
  //(raise obj)    procedure
  define_libfunc("raise", 1, 1, function(ar){
    throw new BiwaScheme.UserError(BiwaScheme.to_write(ar[0]));
  });
//(raise-continuable obj)    procedure
//
//&condition    condition type
//(condition condition1 ...)    procedure
//(simple-conditions condition)    procedure
//(condition? obj)    procedure
//(condition-predicate rtd)    procedure
//(condition-accessor rtd proc)    procedure
//
//&message    condition type
//&warning    condition type
//&serious    condition type
//&error    condition type
//&violation    condition type
//&assertion    condition type
//&irritants    condition type
//&who    condition type
//&non-continuable    condition type
//&implementation-restriction    condition type
//&lexical    condition type
//&syntax    condition type
//&undefined    condition type

  //
  // Chapter 8 I/O
  //
//  //    8  I/O
//  //        8.1  Condition types
//&i/o    condition type
//&i/o-read    condition type
//&i/o-write    condition type
//&i/o-invalid-position    condition type
//&i/o-filename    condition type
//&i/o-file-protection    condition type
//&i/o-file-is-read-only    condition type
//&i/o-file-already-exists    condition type
//&i/o-file-does-not-exist    condition type
//&i/o-port    condition type
//
//  //        8.2  Port I/O
//  //            8.2.1  File names
//  //(no function introduced)
//
//  //            8.2.2  File options
//(file-options <file-options symbol> ...)    syntax
//
//  //            8.2.3  Buffer modes
//(buffer-mode <buffer-mode symbol>)    syntax
//(buffer-mode? obj)    procedure
//
//  //            8.2.4  Transcoders
//(latin-1-codec)    procedure
//(utf-8-codec)    procedure
//(utf-16-codec)    procedure
//(eol-style <eol-style symbol>)    syntax
//(native-eol-style)    procedure
//&i/o-decoding    condition type
//&i/o-encoding    condition type
//(error-handling-mode <error-handling-mode symbol>)    syntax
//(make-transcoder codec)    procedure
//(make-transcoder codec eol-style)    procedure
//(make-transcoder codec eol-style handling-mode)    procedure
//(native-transcoder)    procedure
//(transcoder-codec transcoder)    procedure
//(transcoder-eol-style transcoder)    procedure
//(transcoder-error-handling-mode transcoder)    procedure
//(bytevector->string bytevector transcoder)    procedure
//(string->bytevector string transcoder)    procedure
//
  //            8.2.5  End-of-file object
  //-> 8.3 (eof-object)    procedure
  //-> 8.3 (eof-object? obj)    procedure

  //            8.2.6  Input and output ports
  define_libfunc("port?", 1, 1, function(ar){
    return (ar[0] instanceof Port);
  })
//(port-transcoder port)    procedure
  define_libfunc("textual-port?", 1, 1, function(ar){
    assert_port(ar[0]);
    return !ar[0].is_binary;
  })
  define_libfunc("binary-port?", 1, 1, function(ar){
    assert_port(ar[0]);
    return ar[0].is_binary;
  })
//(transcoded-port binary-port transcoder)    procedure
//(port-has-port-position? port)    procedure
//(port-position port)    procedure
//(port-has-set-port-position!? port)    procedure
//(set-port-position! port pos)    procedure
  define_libfunc("close-port", 1, 1, function(ar){
    assert_port(ar[0]);
    ar[0].close();
    return BiwaScheme.undef;
  })
  //(call-with-port port proc)    procedure
  define_libfunc("call-with-port", 2, 2, function(ar){
    var port = ar[0], proc = ar[1];
    assert_port(port);
    assert_closure(proc);

    return new Call(proc, [port], function(ar){
      // Automatically close the port
      port.close();
      return ar[0]; // TODO: values
    });
  });

  //            8.2.7  Input ports
  //8.3 (input-port? obj)    procedure
//(port-eof? input-port)    procedure
//(open-file-input-port filename)    procedure
//(open-bytevector-input-port bytevector)    procedure
//(open-string-input-port string)    procedure
//(standard-input-port)    procedure
//8.3 (current-input-port)    procedure
//(make-custom-binary-input-port id read!    procedure
//(make-custom-textual-input-port id read!    procedure
//
//  //            8.2.8  Binary input
//(get-u8 binary-input-port)    procedure
//(lookahead-u8 binary-input-port)    procedure
//(get-bytevector-n binary-input-port count)    procedure
//(get-bytevector-n! binary-input-port    procedure
//(get-bytevector-some binary-input-port)    procedure
//(get-bytevector-all binary-input-port)    procedure
//
//  //            8.2.9  Textual input
//(get-char textual-input-port)    procedure
//(lookahead-char textual-input-port)    procedure
//(get-string-n textual-input-port count)    procedure
//(get-string-n! textual-input-port string start count)    procedure
//(get-string-all textual-input-port)    procedure
//(get-line textual-input-port)    procedure
//(get-datum textual-input-port)    procedure
//
  //            8.2.10  Output ports
  //8.3 (output-port? obj)    procedure
//(flush-output-port output-port)    procedure
//(output-port-buffer-mode output-port)    procedure
//(open-file-output-port filename)    procedure
//(open-bytevector-output-port)    procedure
//(call-with-bytevector-output-port proc)    procedure
//(open-string-output-port)    procedure
  //(call-with-string-output-port proc)    procedure
  define_libfunc("call-with-string-output-port", 1, 1, function(ar){
    var proc = ar[0];
    assert_procedure(proc);

    var port = new BiwaScheme.Port.StringOutput();

    return new Call(proc, [port], function(ar){
      port.close();
      return port.output_string();
    });
  });

//(standard-output-port)    procedure
//(standard-error-port)    procedure
//8.3 (current-output-port)    procedure
//8.3 (current-error-port)    procedure
//(make-custom-binary-output-port id    procedure
  //(make-custom-textual-output-port id write! get-position set-position! close)
//  define_libfunc("make-custom-textual-output-port", 5, 5, function(ar){
//    assert_string(ar[0]);
//    assert_closure(ar[1]);
//    assert_closure(ar[2]);
//    assert_closure(ar[3]);
//    assert_closure(ar[4]);
//    return new Port(ar[0], ar[1], ar[2], ar[3], ar[4]);
//  })
//
//  //            8.2.11  Binary output
//(put-u8 binary-output-port octet)    procedure
//(put-bytevector binary-output-port bytevector)    procedure
//
  //            8.2.12  Textual output
  define_libfunc("put-char", 2, 2, function(ar){
    assert_port(ar[0]);
    assert_char(ar[1]);
    ar[0].put_string(ar[1].value);
    return BiwaScheme.undef;
  })
  define_libfunc("put-string", 2, 2, function(ar){
    assert_port(ar[0]);
    assert_string(ar[1]);
    ar[0].put_string(ar[1]);
    return BiwaScheme.undef;
  })
  define_libfunc("put-datum", 2, 2, function(ar){
    assert_port(ar[0]);
    ar[0].put_string(to_write(ar[1]));
    return BiwaScheme.undef;
  })
//
//  //            8.2.13  Input/output ports
//(open-file-input/output-port filename)    procedure
//(make-custom-binary-input/output-port    procedure
//(make-custom-textual-input/output-port    procedure
//
//  //        8.3  Simple I/O
  define_libfunc("eof-object", 0, 0, function(ar){
    return eof;
  })
  define_libfunc("eof-object?", 1, 1, function(ar){
    return ar[0] === eof;
  })
//(call-with-input-file filename proc)    procedure
//(call-with-output-file filename proc)    procedure
  define_libfunc("input-port?", 1, 1, function(ar){
    assert_port(ar[0]);
    return ar[0].is_input;
  })
  define_libfunc("output-port?", 1, 1, function(ar){
    assert_port(ar[0]);
    return ar[0].is_output;
  })
  define_libfunc("current-input-port", 0, 0, function(ar){
    return Port.current_input;
  })
  define_libfunc("current-output-port", 0, 0, function(ar){
    return Port.current_output;
  })
  define_libfunc("current-error-port", 0, 0, function(ar){
    return Port.current_error;
  })
//(with-input-from-file filename thunk)    procedure
//(with-output-to-file filename thunk)    procedure
//(open-input-file filename)    procedure
//(open-output-file filename)    procedure
  define_libfunc("close-input-port", 1, 1, function(ar){
    assert_port(ar[0]);
    if(!ar[0].is_input)
      throw new Error("close-input-port: port is not input port");
    ar[0].close();
    return BiwaScheme.undef;
  });
  define_libfunc("close-output-port", 1, 1, function(ar){
    assert_port(ar[0]);
    if(!ar[0].is_output)
      throw new Error("close-output-port: port is not output port");
    ar[0].close();
    return BiwaScheme.undef;
  });
//(read-char)    procedure
//(peek-char)    procedure
  define_libfunc("read", 0, 1, function(ar){
    var port = ar[0] || Port.current_input;
    assert_port(port);

    return new BiwaScheme.Pause(function(pause){
      port.get_string(function(str){
        pause.resume( Interpreter.read(str) );
      });
    });
  })

  define_libfunc("write-char", 1, 2, function(ar){
    var port = ar[1] || Port.current_output;
    assert_char(ar[0]);
    port.put_string(ar[0].value);
    return BiwaScheme.undef;
  });
  define_libfunc("newline", 0, 1, function(ar){
    var port = ar[0] || Port.current_output;
    port.put_string("\n");
    return BiwaScheme.undef;
  });
  define_libfunc("display", 1, 2, function(ar){
    var port = ar[1] || Port.current_output;
    port.put_string(to_display(ar[0]));
    return BiwaScheme.undef;
  });
  define_libfunc("write", 1, 2, function(ar){
    var port = ar[1] || Port.current_output;
    assert_port(port);
    port.put_string(to_write(ar[0]));
    return BiwaScheme.undef;
  });

  //
  // Chapter 9 File System
  // Chapter 10 Command-line access and exit values
  //
  // see src/library/node_functions.js

  //
  // Chapter 11 Arithmetic
  //
////        11.1  Bitwise operations
////        11.2  Fixnums
//(fixnum? obj)    procedure
//(fixnum-width)    procedure
//(least-fixnum)    procedure
//(greatest-fixnum)    procedure
//(fx=? fx1 fx2 fx3 ...)    procedure
//(fx>? fx1 fx2 fx3 ...)    procedure
//(fx<? fx1 fx2 fx3 ...)    procedure
//(fx>=? fx1 fx2 fx3 ...)    procedure
//(fx<=? fx1 fx2 fx3 ...)    procedure
//(fxzero? fx)    procedure
//(fxpositive? fx)    procedure
//(fxnegative? fx)    procedure
//(fxodd? fx)    procedure
//(fxeven? fx)    procedure
//(fxmax fx1 fx2 ...)    procedure
//(fxmin fx1 fx2 ...)    procedure
//(fx+ fx1 fx2)    procedure
//(fx* fx1 fx2)    procedure
//(fx- fx1 fx2)    procedure
//(fxdiv-and-mod fx1 fx2)    procedure
//(fxdiv fx1 fx2)    procedure
//(fxmod fx1 fx2)    procedure
//(fxdiv0-and-mod0 fx1 fx2)    procedure
//(fxdiv0 fx1 fx2)    procedure
//(fxmod0 fx1 fx2)    procedure
//(fx+/carry fx1 fx2 fx3)    procedure
//(fx-/carry fx1 fx2 fx3)    procedure
//(fx*/carry fx1 fx2 fx3)    procedure
//(fxnot fx)    procedure
//(fxand fx1 ...)    procedure
//(fxior fx1 ...)    procedure
//(fxxor fx1 ...)    procedure
//(fxif fx1 fx2 fx3)    procedure
//(fxbit-count fx)    procedure
//(fxlength fx)    procedure
//(fxfirst-bit-set fx)    procedure
//(fxbit-set? fx1 fx2)    procedure
//(fxcopy-bit fx1 fx2 fx3)    procedure
//(fxbit-field fx1 fx2 fx3)    procedure
//(fxcopy-bit-field fx1 fx2 fx3 fx4)    procedure
//(fxarithmetic-shift fx1 fx2)    procedure
//(fxarithmetic-shift-left fx1 fx2)    procedure
//(fxarithmetic-shift-right fx1 fx2)    procedure
//(fxrotate-bit-field fx1 fx2 fx3 fx4)    procedure
//(fxreverse-bit-field fx1 fx2 fx3)    procedure
//
////        11.3  Flonums
//(flonum? obj)    procedure
//(real->flonum x)    procedure
//(fl=? fl1 fl2 fl3 ...)    procedure
//(fl<? fl1 fl2 fl3 ...)    procedure
//(fl<=? fl1 fl2 fl3 ...)    procedure
//(fl>? fl1 fl2 fl3 ...)    procedure
//(fl>=? fl1 fl2 fl3 ...)    procedure
//(flinteger? fl)    procedure
//(flzero? fl)    procedure
//(flpositive? fl)    procedure
//(flnegative? fl)    procedure
//(flodd? ifl)    procedure
//(fleven? ifl)    procedure
//(flfinite? fl)    procedure
//(flinfinite? fl)    procedure
//(flnan? fl)    procedure
//(flmax fl1 fl2 ...)    procedure
//(flmin fl1 fl2 ...)    procedure
//(fl+ fl1 ...)    procedure
//(fl* fl1 ...)    procedure
//(fl- fl1 fl2 ...)    procedure
//(fl- fl)    procedure
//(fl/ fl1 fl2 ...)    procedure
//(fl/ fl)    procedure
//(flabs fl)    procedure
//(fldiv-and-mod fl1 fl2)    procedure
//(fldiv fl1 fl2)    procedure
//(flmod fl1 fl2)    procedure
//(fldiv0-and-mod0 fl1 fl2)    procedure
//(fldiv0 fl1 fl2)    procedure
//(flmod0 fl1 fl2)    procedure
//(flnumerator fl)    procedure
//(fldenominator fl)    procedure
//(flfloor fl)    procedure
//(flceiling fl)    procedure
//(fltruncate fl)    procedure
//(flround fl)    procedure
//(flexp fl)    procedure
//(fllog fl)    procedure
//(fllog fl1 fl2)    procedure
//(flsin fl)    procedure
//(flcos fl)    procedure
//(fltan fl)    procedure
//(flasin fl)    procedure
//(flacos fl)    procedure
//(flatan fl)    procedure
//(flatan fl1 fl2)    procedure
//(flsqrt fl)    procedure
//(flexpt fl1 fl2)    procedure
//&no-infinities    condition type
//&no-nans    condition type
//(fixnum->flonum fx)    procedure

  ////        11.4  Exact bitwise arithmetic
  //(bitwise-not ei)    procedure
  define_libfunc("bitwise-not", 1, 1, function(ar){
    return ~(ar[0]);
  });

  //(bitwise-and ei1 ...)    procedure
  define_libfunc("bitwise-and", 1, null, function(ar){
    return _.reduce(ar, function(ret, item){ return ret & item; });
  });

  //(bitwise-ior ei1 ...)    procedure
  define_libfunc("bitwise-ior", 1, null, function(ar){
    return _.reduce(ar, function(ret, item){ return ret | item; });
  });

  //(bitwise-xor ei1 ...)    procedure
  define_libfunc("bitwise-xor", 1, null, function(ar){
    return _.reduce(ar, function(ret, item){ return ret ^ item; });
  });

  //(bitwise-if ei1 ei2 ei3)    procedure
  define_libfunc("bitwise-if", 3, 3, function(ar){
    return (ar[0] & ar[1]) | (~ar[0] & ar[2]);
  });

  //(bitwise-bit-count ei)    procedure
  define_libfunc("bitwise-bit-count", 1, 1, function(ar){
    var e = Math.abs(ar[0]), ret = 0;
    for (; e != 0; e >>= 1) {
      if(e & 1) ret++;
    }
    return ret;
  });

  //(bitwise-length ei)    procedure
  define_libfunc("bitwise-length", 1, 1, function(ar){
    var e = Math.abs(ar[0]), ret = 0;
    for (; e != 0; e >>= 1) {
      ret++;
    }
    return ret;
  });

  //(bitwise-first-bit-set ei)    procedure
  define_libfunc("bitwise-first-bit-set", 1, 1, function(ar){
    var e = Math.abs(ar[0]), ret = 0;
    if (e == 0) return -1;
    for (; e != 0; e >>= 1) {
      if (e & 1) return ret;
      ret++;
    }
  });

  //(bitwise-bit-set? ei1 ei2)    procedure
  define_libfunc("bitwise-bit-set?", 2, 2, function(ar){
    return !!(ar[0] & (1 << ar[1]));
  });

  //(bitwise-copy-bit ei1 n b)    procedure
  define_libfunc("bitwise-copy-bit", 3, 3, function(ar){
    var mask = (1 << ar[1]);
    return (mask & (ar[2] << ar[1])) |   // Set n-th bit to b
           (~mask & ar[0]);              // and use ei1 for rest of the bits
  });

  //(bitwise-bit-field ei1 start end)    procedure
  define_libfunc("bitwise-bit-field", 3, 3, function(ar){
    var mask = ~(-1 << ar[2]);  // Has 1 at 0...end
    return (mask & ar[0]) >> ar[1];
  });

  //(bitwise-copy-bit-field dst start end src)    procedure
  define_libfunc("bitwise-copy-bit-field", 4, 4, function(ar){
    var dst=ar[0], start=ar[1], end=ar[2], src=ar[3];
    var mask = ~(-1 << end) &   // Has 1 at 0...end
                (-1 << start)   // Clear 0...start
    return (mask & (src << start)) |
           (~mask & dst);
  });

  //(bitwise-arithmetic-shift ei1 ei2)    procedure
  define_libfunc("bitwise-arithmetic-shift", 2, 2, function(ar){
    return (ar[1] >= 0) ? (ar[0] << ar[1]) : (ar[0] >> -ar[1]);
  });

  //(bitwise-arithmetic-shift-left ei1 ei2)    procedure
  define_libfunc("bitwise-arithmetic-shift-left", 2, 2, function(ar){
    return ar[0] << ar[1];
  });

  //(bitwise-arithmetic-shift-right ei1 ei2)    procedure
  define_libfunc("bitwise-arithmetic-shift-right", 2, 2, function(ar){
    return ar[0] >> ar[1];
  });

  //(bitwise-rotate-bit-field ei1 start end count)    procedure
  define_libfunc("bitwise-rotate-bit-field", 4, 4, function(ar){
    var n=ar[0], start=ar[1], end=ar[2], count=ar[3];
    var width = end - start;
    if (width <= 0) return n;

    count %= width;
    var orig_field = (~(-1 << end) & n) >> start;
    var rotated_field = (orig_field << count) |
                        (orig_field >> (width - count))

    var mask = ~(-1 << end) & (-1 << start);
    return (mask & (rotated_field << start)) |
           (~mask & n);
  });

  //(bitwise-reverse-bit-field ei1 ei2 ei3)    procedure
  define_libfunc("bitwise-reverse-bit-field", 3, 3, function(ar){
    var ret=n=ar[0], start=ar[1], end=ar[2];
    var orig_field = ((~(-1 << end) & n) >> start);
    for (var i=0; i<(end-start); i++, orig_field>>=1) {
      var bit = orig_field & 1;
      var setpos = end - 1 - i;
      var mask = (1 << setpos);
      ret = (mask & (bit << setpos)) | (~mask & ret);
    }
    return ret;
  });

  //
  // Chapter 12 syntax-case
  //

  //
  // Chapter 13 Hashtables
  //

  //13.1  Constructors
  //(define h (make-eq-hashtale)
  //(define h (make-eq-hashtable 1000))
  define_libfunc("make-eq-hashtable", 0, 1, function(ar){
    // Note: ar[1] (hashtable size) is just ignored
    return new Hashtable(Hashtable.eq_hash, Hashtable.eq_equiv);
  });
  //(make-eqv-hashtable)    procedure
  //(make-eqv-hashtable k)    procedure
  define_libfunc("make-eqv-hashtable", 0, 1, function(ar){
    return new Hashtable(Hashtable.eqv_hash, Hashtable.eqv_equiv);
  });
  //(make-hashtable hash-function equiv)    procedure
  //(make-hashtable hash-function equiv k)    procedure
  define_libfunc("make-hashtable", 2, 3, function(ar){
    assert_procedure(ar[0]);
    assert_procedure(ar[1]);
    return new Hashtable(ar[0], ar[1]);
  });

  //13.2  Procedures
  // (hashtable? hash)
  define_libfunc("hashtable?", 1, 1, function(ar){
    return ar[0] instanceof Hashtable;
  });
  //(hashtable-size hash)
  define_libfunc("hashtable-size", 1, 1, function(ar){
    assert_hashtable(ar[0]);
    return ar[0].keys().length;
  });

  // Find a pair from a hashtable with given key.
  //
  // hash      - a BiwaScheme.Hashtable
  // key       - an object
  // callbacks - an object contains callback functions
  //             .on_found     - function(pair, hashed)
  //               pair   - [Object key, Object value]
  //               hashed - Object hashed
  //             .on_not_found - function(hashed)
  //               hashed - Object hashed
  //
  // Returns an instance of BiwaScheme.Call.
  BiwaScheme.find_hash_pair = function(hash, key, callbacks){
    // invoke hash proc
    return new Call(hash.hash_proc, [key], function(ar){
      var hashed = ar[0];
      var candidate_pairs = hash.candidate_pairs(hashed);

      if (!candidate_pairs){ // shortcut: obviously not found
        return callbacks.on_not_found(hashed);
      }

      // search the exact key from candidates
      return Call.foreach(candidate_pairs, {
        call: function(pair){
          // invoke the equivalence proc
          return new Call(hash.equiv_proc, [key, pair[0]]);
        },
        result: function(equal, pair){
          if(equal) {       // found
            return callbacks.on_found(pair, hashed);
          }
        },
        finish: function(){ // not found
          return callbacks.on_not_found(hashed);
        }
      });
    });
  };

  //(hashtable-ref hash "foo" #f)
  define_libfunc("hashtable-ref", 3, 3, function(ar){
    var hash = ar[0], key = ar[1], ifnone = ar[2];
    assert_hashtable(hash);

    return BiwaScheme.find_hash_pair(hash, key, {
      on_found: function(pair){
        return pair[1];
      },
      on_not_found: function(hashed){
        return ifnone;
      }
    });
  });

  //(hashtable-set! hash "foo" '(1 2))
  define_libfunc("hashtable-set!", 3, 3, function(ar){
    var hash = ar[0], key = ar[1], value = ar[2];
    assert_hashtable(hash);
    assert(hash.mutable, "hashtable is not mutable");

    return BiwaScheme.find_hash_pair(hash, key, {
      on_found: function(pair){
        pair[1] = value;
        return BiwaScheme.undef;
      },
      on_not_found: function(hashed){
        hash.add_pair(hashed, key, value);
        return BiwaScheme.undef;
      }
    });
  });

  //(hashtable-delete! hash "foo")
  define_libfunc("hashtable-delete!", 2, 2, function(ar){
    var hash = ar[0], key = ar[1];
    assert_hashtable(hash);
    assert(hash.mutable, "hashtable is not mutable");

    return BiwaScheme.find_hash_pair(hash, key, {
      on_found: function(pair, hashed){
        hash.remove_pair(hashed, pair);
        return BiwaScheme.undef;
      },
      on_not_found: function(hashed){
        return BiwaScheme.undef;
      }
    });
  });

  //(hashtable-contains? hash "foo")
  define_libfunc("hashtable-contains?", 2, 2, function(ar){
    var hash = ar[0], key = ar[1];
    assert_hashtable(hash);

    return BiwaScheme.find_hash_pair(hash, key, {
      on_found: function(pair){
        return true;
      },
      on_not_found: function(hashed){
        return false;
      }
    });
  });

  //(hashtable-update! hashtable key proc default)    procedure
  define_libfunc("hashtable-update!", 4, 4, function(ar){
    var hash = ar[0], key = ar[1], proc = ar[2], ifnone = ar[3];
    assert_hashtable(hash);
    assert(hash.mutable, "hashtable is not mutable");
    assert_procedure(proc);

    return BiwaScheme.find_hash_pair(hash, key, {
      on_found: function(pair, hashed){
        // invoke proc and get new value
        return new Call(proc, [pair[1]], function(ar){
          // replace the value
          pair[1] = ar[0];
          return BiwaScheme.undef;
        });
      },
      on_not_found: function(hashed){
        // invoke proc and get new value
        return new Call(proc, [ifnone], function(ar){
          // create new pair
          hash.add_pair(hashed, key, ar[0]);
          return BiwaScheme.undef;
        });
      }
    });
  });
  //(hashtable-copy hashtable)    procedure
  //(hashtable-copy hashtable mutable)    procedure
  define_libfunc("hashtable-copy", 1, 2, function(ar){
    var mutable = (ar[1]===undefined) ? false : !!ar[1];
    assert_hashtable(ar[0]);
    return ar[0].create_copy(mutable);
  });
  //(hashtable-clear! hashtable)    procedure
  //(hashtable-clear! hashtable k)    procedure
  define_libfunc("hashtable-clear!", 0, 1, function(ar){
    assert_hashtable(ar[0]);
    assert(ar[0].mutable, "hashtable is not mutable");
    ar[0].clear();
    return BiwaScheme.undef;
  });
  //(hashtable-keys hash)  ; => vector
  define_libfunc("hashtable-keys", 1, 1, function(ar){
    assert_hashtable(ar[0]);
    return ar[0].keys();
  });
  //(hashtable-entries hash)  ; => two vectors (keys, values)
  define_libfunc("hashtable-entries", 1, 1, function(ar){
    assert_hashtable(ar[0]);
    return new Values([ar[0].keys(), ar[0].values()]);
  });

  //13.3  Inspection

  //(hashtable-equivalence-function hashtable)    procedure
  define_libfunc("hashtable-equivalence-function", 1, 1, function(ar){
    assert_hashtable(ar[0]);
    return ar[0].equiv_proc;
  });
  //(hashtable-hash-function hashtable)    procedure
  define_libfunc("hashtable-hash-function", 1, 1, function(ar){
    assert_hashtable(ar[0]);
    return ar[0].hash_proc;
  });
  //(hashtable-mutable? hashtable)    procedure
  define_libfunc("hashtable-mutable?", 1, 1, function(ar){
    assert_hashtable(ar[0]);
    return ar[0].mutable;
  });

  //13.4  Hash functions

  //(equal-hash obj)    procedure
  define_libfunc("equal-hash", 0, 0, function(ar){
    return Hashtable.equal_hash;
  });
  //(string-hash string)    procedure
  define_libfunc("string-hash", 0, 0, function(ar){
    return Hashtable.string_hash;
  });
  //(string-ci-hash string)    procedure
  define_libfunc("string-ci-hash", 0, 0, function(ar){
    return Hashtable.string_ci_hash;
  });
  //(symbol-hash symbol)    procedure
  define_libfunc("symbol-hash", 0, 0, function(ar){
    return Hashtable.symbol_hash;
  });

  //
  // Chapter 14 Enumerators
  //
  //(make-enumeration symbol-list) -> enum-set(new type)
  define_libfunc("make-enumeration", 1, 1, function(ar){
    assert_list(ar[0]);
    var members = ar[0].to_array();
    var enum_type = new BiwaScheme.Enumeration.EnumType(members);
    return enum_type.universe();
  });

  //(enum-set-universe enum-set) -> enum-set(same type as the argument)
  define_libfunc("enum-set-universe", 1, 1, function(ar){
    assert_enum_set(ar[0]);
    return ar[0].enum_type.universe();
  });

  //(enum-set-indexer enum-set) -> (lambda (sym)) -> integer or #f
  define_libfunc("enum-set-indexer", 1, 1, function(ar){
    assert_enum_set(ar[0]);
    return ar[0].enum_type.indexer();
  });

  //(enum-set-constructor enum-set) -> (lambda (syms)) -> enum-set(same type as the argument)
  define_libfunc("enum-set-constructor", 1, 1, function(ar){
    assert_enum_set(ar[0]);
    return ar[0].enum_type.constructor();
  });

  //(enum-set->list enum-set) -> symbol-list
  define_libfunc("enum-set->list", 1, 1, function(ar){
    assert_enum_set(ar[0]);
    return ar[0].symbol_list();
  });

  //(enum-set-member? symbol enum-set) -> bool
  define_libfunc("enum-set-member?", 2, 2, function(ar){
    assert_symbol(ar[0]);
    assert_enum_set(ar[1]);
    return ar[1].is_member(ar[0]);
  });

  //(enum-set-subset? esa esb) -> bool
  define_libfunc("enum-set-subset?", 2, 2, function(ar){
    assert_enum_set(ar[0]);
    assert_enum_set(ar[1]);
    return ar[0].is_subset(ar[1]);
  });

  //(enum-set=? esa esb) -> bool
  define_libfunc("enum-set=?", 2, 2, function(ar){
    assert_enum_set(ar[0]);
    assert_enum_set(ar[1]);
    return ar[0].equal_to(ar[1]);
  });

  //(enum-set-union es1 es2) -> enum-set
  define_libfunc("enum-set-union", 2, 2, function(ar){
    assert_enum_set(ar[0]);
    assert_enum_set(ar[1]);
    assert(ar[0].enum_type === ar[1].enum_type,
           "two enum-sets must be the same enum-type", "enum-set-union");
    return ar[0].union(ar[1]);
  });

  //(enum-set-intersection es1 es2) -> enum-set
  define_libfunc("enum-set-intersection", 2, 2, function(ar){
    assert_enum_set(ar[0]);
    assert_enum_set(ar[1]);
    return ar[0].intersection(ar[1]);
  });

  //(enum-set-difference es1 es2) -> enum-set
  define_libfunc("enum-set-difference", 2, 2, function(ar){
    assert_enum_set(ar[0]);
    assert_enum_set(ar[1]);
    return ar[0].difference(ar[1]);
  });

  //(enum-set-complement enum-set) -> enum-set
  define_libfunc("enum-set-complement", 1, 1, function(ar){
    assert_enum_set(ar[0]);
    return ar[0].complement();
  });

  //(enum-set-projection esa esb) -> enum-set
  define_libfunc("enum-set-projection", 2, 2, function(ar){
    assert_enum_set(ar[0]);
    assert_enum_set(ar[1]);
    return ar[0].projection(ar[1]);
  });

  //(define-enumeration <type-name> (<symbol> ...) <constructor-syntax>)
  // Example:
  //   (define-enumeration color (red green black white) color-set)
  //   this defines:
  //     - an EnumType
  //     - (color red) ;=> 'red
  //     - (color-set red black) ;=> #<enum-set (red black)>
  define_syntax("define-enumeration", function(x){
    // Extract parameters
    var type_name = x.cdr.car;
    assert(BiwaScheme.isSymbol(type_name),
           "expected symbol for type_name", "define-enumeration");
    type_name = type_name.name;

    var members = x.cdr.cdr.car;
    assert(BiwaScheme.isList(members),
           "expected list of symbol for members", "define-enumeration");
    members = members.to_array();

    var constructor_name = x.cdr.cdr.cdr.car;
    assert(BiwaScheme.isSymbol(constructor_name),
           "expected symbol for constructor_name", "define-enumeration");
    constructor_name = constructor_name.name;

    // Define EnumType
    var enum_type = new BiwaScheme.Enumeration.EnumType(members);

    // Define (color red)
    define_syntax(type_name, function(x){
      // (color)
      assert(!BiwaScheme.isNil(x.cdr),
             "an argument is needed", type_name);

      var arg = x.cdr.car;
      assert_symbol(arg, type_name);

      // Check arg is included in the universe
      assert(_.include(enum_type.members, arg),
        arg.name+" is not included in the universe: "+
          BiwaScheme.to_write(enum_type.members),
        type_name);

      return BiwaScheme.List(Sym("quote"), arg);
    });

    // Define (color-set red black)
    define_syntax(constructor_name, function(x){
      assert_list(x.cdr, constructor_name);

      var symbols = x.cdr.to_array();

      // Check each argument is included in the universe
      _.each(symbols, function(arg){
        assert_symbol(arg, constructor_name);
        assert(_.include(enum_type.members, arg),
          arg.name+" is not included in the universe: "+
            BiwaScheme.to_write(enum_type.members),
          constructor_name);
      });

      // Create an EnumSet
      return new BiwaScheme.Enumeration.EnumSet(enum_type, symbols);
    });
  });

  //
  // Chapter 15 Composite library
  //
  //(rnrs 6) = all - eval - mutable pairs - mutable strings - r5rs compatibility

  //
  // Chapter 16 eval
  //
  //(eval expression environment)    procedure
  define_libfunc("eval", 1, 1, function(ar, intp){
    //TODO: environment
    //TODO: this implementation has a bug that
    //  expressions which contains #<undef>, etc. cannot be evaluated.
    var expr = ar[0];
    var intp2 = new Interpreter(intp);
    return intp2.evaluate(BiwaScheme.to_write(expr));
  });
//(environment import-spec ...)    procedure

  //
  // Chapter 17 Mutable pairs
  //
//(set-car! pair obj)    procedure
//(set-cdr! pair obj)    procedure

  //
  // Chapter 18 Mutable strings
  //
  //(string-set! string k char)    procedure
 // (string-fill! string char)    procedure

  //
  // Chapter 19 R5RS compatibility
  //
//(exact->inexact z)    procedure
//(inexact->exact z)    procedure
//
//(quotient n1 n2)    procedure
//(remainder n1 n2)    procedure
//(modulo n1 n2)    procedure
//
//(null-environment n)    procedure
//(scheme-report-environment n)    procedure

  //
  // R7RS (TODO: split file?)
  //

  // R7RS Promise
  //
  // (delay expression)
  define_syntax("delay", function(x){
    if (x.cdr === BiwaScheme.nil) {
      throw new Error("malformed delay: no argument");
    }
    if (x.cdr.cdr !== nil) {
      throw new Error("malformed delay: too many arguments: "+
                      BiwaScheme.to_write_ss(x));
    }
    var expr = x.cdr.car;
    // Expand into call of internal function
    // ( procedure->promise (lambda () (make-promise expr)))
    return new Pair(Sym(" procedure->promise"),
             new Pair(new Pair(Sym("lambda"),
                        new Pair(BiwaScheme.nil,
                          new Pair(new Pair(Sym("make-promise"),
                                     new Pair(expr, BiwaScheme.nil)),
                            BiwaScheme.nil)))));
  });

  // (delay-force promise-expr)
  define_syntax("delay-force", function(x){
    if (x.cdr === BiwaScheme.nil) {
      throw new Error("malformed delay-force: no argument");
    }
    if (x.cdr.cdr !== nil) {
      throw new Error("malformed delay-force: too many arguments: "+
                      BiwaScheme.to_write_ss(x));
    }
    var expr = x.cdr.car;
    // Expand into call of internal function
    // ( procedure->promise (lambda () expr))
    return new Pair(Sym(" procedure->promise"),
             new Pair(new Pair(Sym("lambda"),
                        new Pair(BiwaScheme.nil,
                          new Pair(expr, BiwaScheme.nil))), BiwaScheme.nil));
  });

  // (force promise)
  var force = function(promise) {
    if (promise.is_done()) {
      return promise.value();
    }
    return new Call(promise.thunk(), [], function(ar) {
      assert_promise(ar[0]);
      var new_promise = ar[0];
      if (promise.is_done()) {  // reentrant!
        return promise.value();
      }
      else {
        promise.update_with(new_promise);
        return force(new_promise);
      }
    });
  };
  define_libfunc("force", 1, 1, function(ar, intp){
    assert_promise(ar[0]);
    return force(ar[0]);
  });

  // (promise? obj)
  define_libfunc("promise?", 1, 1, function(ar, intp){
    return (ar[0] instanceof BiwaScheme.Promise);
  });

  // (make-promise obj)
  define_libfunc("make-promise", 1, 1, function(ar, intp){
    var obj = ar[0];
    if (obj instanceof BiwaScheme.Promise) {
      return obj;
    }
    else {
      return BiwaScheme.Promise.done(obj);
    }
  });

  // internal function
  // ( procedure->promise proc)
  // proc must be a procedure with no argument and return a promise
  define_libfunc(" procedure->promise", 1, 1, function(ar, intp){
    assert_procedure(ar[0]);
    return BiwaScheme.Promise.fresh(ar[0]);
  });
}
if( typeof(BiwaScheme)!='object' ) BiwaScheme={}; with(BiwaScheme) {

  //
  // interface to javascript
  //
  define_libfunc("js-eval", 1, 1, function(ar){
    return eval(ar[0]);
  });
  define_libfunc("js-ref", 2, 2, function(ar){
    if(_.isString(ar[1])){
      return ar[0][ar[1]];
    }
    else{
      assert_symbol(ar[1]);
      return ar[0][ar[1].name];
    }
  });
  define_libfunc("js-set!", 3, 3, function(ar){
    assert_string(ar[1]);
    ar[0][ar[1]] = ar[2];
    return BiwaScheme.undef;
  });

  // (js-call (js-eval "Math.pow") 2 4)
  define_libfunc("js-call", 1, null, function(ar){
    var js_func = ar.shift();
    assert_function(js_func);

    var receiver = null;
    return js_func.apply(receiver, ar);
  });
  // (js-invoke (js-new "Date") "getTime")
  define_libfunc("js-invoke", 2, null, function(ar){
    var js_obj = ar.shift();
    var func_name = ar.shift();
    if(!_.isString(func_name)){
      assert_symbol(func_name);
      func_name = func_name.name;
    }
    if(js_obj[func_name])
      return js_obj[func_name].apply(js_obj, ar);
    else
      throw new Error("js-invoke: function "+func_name+" is not defined");
  });

  // Short hand for JavaScript method call.
  //
  // (js-invocation obj '(foo 1 2 3))  ;=> obj.foo(1,2,3)
  // (js-invocation obj '(foo 1 2 3)   ;=> obj.foo(1,2,3)
  //                    'bar           ;      .bar
  //                    '(baz 4 5))    ;      .baz(4,5)
  // (js-invocation 'Math '(pow 2 3))  ;=> Math.pow(2,3)
  //
  // It also converts
  //   (lambda (e) ...) to
  //   (js-closure (lambda (e) ...))
  //   and
  //   '((a . b) (c . 4)) to
  //   {a: "b", c: 4}
  //
  define_libfunc("js-invocation", 2, null, function(ar, intp){
    var receiver = ar.shift();
    // TODO: convert lambdas by js-closure 
    if(BiwaScheme.isSymbol(receiver)){
      receiver = eval(receiver.name); //XXX: is this ok?
    }

    var v = receiver;

    // Process each method call
    _.each(ar, function(callspec){
        if(BiwaScheme.isSymbol(callspec)){
          // Property access
          v = v[callspec.name];
        }
        else if(BiwaScheme.isList(callspec)){
          // Method call
          var args = callspec.to_array();

          assert_symbol(args[0]);
          var method = args.shift().name;

          // Convert arguments
          args = _.map(args, function(arg){
              if(BiwaScheme.isClosure(arg)){
                // closure -> JavaScript funciton
                return BiwaScheme.js_closure(arg, intp);
              }
              else if(BiwaScheme.isList(arg)){
                // alist -> JavaScript Object
                var o = {};
                arg.foreach(function(pair){
                    assert_symbol(pair.car);
                    o[pair.car.name] = pair.cdr;
                  });
                return o;
              }
              else
                return arg;
            });

          // Call the method
          if(!_.isFunction(v[method])){
            throw new BiwaScheme.Error("js-invocation: the method `"+method+"' not found");
          }
          v = v[method].apply(v, args);
        }
        else{
          // (wrong argument)
          throw new BiwaScheme.Error("js-invocation: expected list or symbol for callspec but got " + BiwaScheme.inspect(callspec));
        }
      });

    return v;
  });

  // TODO: provide corresponding macro ".." 
  define_syntax("..", function(x){
    if (x.cdr == nil) {
      throw new Error("malformed ..");
    }
    return new Pair(Sym("js-invocation"), x.cdr);
  });

  // (js-new (js-eval "Date") 2005 1 1)
  // (js-new (js-eval "Draggable") elem 'onEnd (lambda (drg) ...))
  //   If symbol is given, following arguments are converted to 
  //   an js object. If any of them is a scheme closure,
  //   it is converted to js function which invokes that closure.
  //
  // (js-new "Date" 2005 1 1)
  //   You can pass javascript program string for constructor.
  define_libfunc("js-new", 1, null, function(ar, intp){
    // make js object from key-value pair
    var array_to_obj = function(ary){
      if((ary.length % 2) != 0)
        throw new Error("js-new: odd number of key-value pair");

      var obj = {};
      for(var i=0; i<ary.length; i+=2){
        var key = ary[i], value = ary[i+1];
        assert_symbol(key);
        if(value.closure_p === true)
          value = BiwaScheme.js_closure(value, intp);

        obj[key.name] = value;
      }
      return obj;
    };

    var ctor = ar.shift();
    if (_.isString(ctor)) ctor = eval(ctor);

    if(ar.length == 0){
      return new ctor();
    }
    else{
      // pack args to js object, if symbol appears
      var args = [];
      for(var i=0; i<ar.length; i++){
        if(ar[i] instanceof Symbol){
          args.push(array_to_obj(ar.slice(i)));
          break;
        }
        else{
          args.push(ar[i]);
        }
      }
      // Run `new ctor(...args)`;
      return new (Function.prototype.bind.apply(ctor, [null].concat(args)))();
    }
  });

  // (js-obj "foo" 1 "bar" 2)
  // -> {"foo": 1, "bar": 2}
  define_libfunc("js-obj", 0, null, function(ar){
    if(ar.length % 2 != 0){
      throw new Error("js-obj: number of arguments must be even");
    }

    var obj = {};
    for(i=0; i<ar.length/2; i++){
      assert_string(ar[i*2]);
      obj[ar[i*2]] = ar[i*2+1];
    }
    return obj;
  });

  BiwaScheme.js_closure = function(proc, intp){
    var intp2 = new Interpreter(intp);
    return function(/*args*/){
      return intp2.invoke_closure(proc, _.toArray(arguments));
    };
  };
  // (js-closure (lambda (event) ..))
  // Returns a js function which executes the given procedure.
  //
  // Example
  //   (add-handler! ($ "#btn") "click" (js-closure on-click))
  define_libfunc("js-closure", 1, 1, function(ar, intp){
    assert_closure(ar[0]);
    return BiwaScheme.js_closure(ar[0], intp);
  });

  define_libfunc("js-null?", 1, 1, function(ar){
    return ar[0] === null;
  });

  define_libfunc("js-undefined?", 1, 1, function(ar){
    return ar[0] === undefined;
  });

  define_libfunc("js-function?", 1, 1, function(ar){
    return _.isFunction(ar[0]);
  });

  define_libfunc("js-array-to-list", 1, 1, function(ar){
    BiwaScheme.deprecate("js-array-to-list", "1.0", "js-array->list");
    return BiwaScheme.array_to_list(ar[0]);
  });

  define_libfunc("js-array->list", 1, 1, function(ar){
    return BiwaScheme.array_to_list(ar[0]);
  });

  define_libfunc("list-to-js-array", 1, 1, function(ar){
    BiwaScheme.deprecate("list-to-js-array", "1.0", "list->js-array");
    return ar[0].to_array();
  });

  define_libfunc("list->js-array", 1, 1, function(ar){
    return ar[0].to_array();
  });

  BiwaScheme.alist_to_js_obj = function(alist) {
    if (alist === nil) {
      return {} ;
    }
    assert_list(alist);
    var obj = {};
    alist.foreach(function(item){
      assert_string(item.car);
      obj[item.car] = item.cdr;
    });
    return obj;
  };
  define_libfunc("alist-to-js-obj", 1, 1, function(ar) {
    BiwaScheme.deprecate("alist-to-js-obj", "1.0", "alist->js-obj");
    return BiwaScheme.alist_to_js_obj(ar[0]);
  });

  define_libfunc("alist->js-obj", 1, 1, function(ar) {
    return BiwaScheme.alist_to_js_obj(ar[0]);
  });

  BiwaScheme.js_obj_to_alist = function(obj) {
    if (obj === undefined) {
      return BiwaScheme.nil;
    }
    var arr = [];
    _.each(obj, function(val, key) {
      arr.push(new Pair(key, val));
    });
    var alist = BiwaScheme.array_to_list(arr);
    return alist;
  };
  define_libfunc("js-obj-to-alist", 1, 1, function(ar) {
    BiwaScheme.deprecate("js-obj-to-alist", "1.0", "js-obj->alist");
    return BiwaScheme.js_obj_to_alist(ar[0]);
  });
  define_libfunc("js-obj->alist", 1, 1, function(ar) {
    return BiwaScheme.js_obj_to_alist(ar[0]);
  });

  //
  // timer, sleep
  //
  define_libfunc("timer", 2, 2, function(ar, intp){
    var proc = ar[0], sec = ar[1];
    assert_closure(proc);
    assert_real(sec);
    var intp2 = new Interpreter(intp);
    setTimeout(function(){ intp2.invoke_closure(proc); }, sec * 1000);
    return BiwaScheme.undef;
  });
  define_libfunc("set-timer!", 2, 2, function(ar, intp){
    var proc = ar[0], sec = ar[1];
    assert_closure(proc);
    assert_real(sec);
    var intp2 = new Interpreter(intp);
    return setInterval(function(){ intp2.invoke_closure(proc); }, sec * 1000);
  });
  define_libfunc("clear-timer!", 1, 1, function(ar){
    var timer_id = ar[0];
    clearInterval(timer_id);
    return BiwaScheme.undef;
  });
  define_libfunc("sleep", 1, 1, function(ar){
    var sec = ar[0];
    assert_real(sec);
    return new BiwaScheme.Pause(function(pause){
      setTimeout(function(){ pause.resume(nil); }, sec * 1000);
    });
  });

  //
  // console
  //
  // (console-debug obj1 ...)
  // (console-log obj1 ...)
  // (console-info obj1 ...)
  // (console-warn obj1 ...)
  // (console-error obj1 ...)
  //   Put objects to console, if window.console is defined.
  //   Returns obj1.
  //
  // Example:
  //     (some-func arg1 (console-debug arg2) arg3)
  var define_console_func = function(name){
    define_libfunc("console-"+name, 1, null, function(ar){
      var con = window.console;
      if(con){
        var vals = _.map(ar, function(item){
          return BiwaScheme.inspect(item, {fallback: item});
        });

        con[name].apply(con, vals);
      }
      return ar[0];
    });
  };
  define_console_func("debug");
  define_console_func("log");
  define_console_func("info");
  define_console_func("warn");
  define_console_func("error");

}

if( typeof(BiwaScheme)!='object' ) BiwaScheme={}; with(BiwaScheme) {
  define_libfunc("html-escape", 1, 1, function(ar){
    assert_string(ar[0]);
    return _.escape(ar[0]);
  });
  BiwaScheme.inspect_objs = function(objs){
    return _.map(objs, BiwaScheme.inspect).join(", ");
  };
  define_libfunc("inspect", 1, null, function(ar){
    return BiwaScheme.inspect_objs(ar);
  });
  define_libfunc("inspect!", 1, null, function(ar){
    Console.puts(BiwaScheme.inspect_objs(ar));
    return BiwaScheme.undef;
  });

  //
  // json
  //
  // json->sexp
  // Array -> list
  // Object -> alist
  // (number, boolean, string, 
  //
  BiwaScheme.json2sexp = function(json){
    switch(true){
    case _.isNumber(json) ||
         _.isString(json) ||
         json === true || json === false:
      return json;
    case _.isArray(json):
      return array_to_list(_.map(json, json2sexp));
    case typeof(json) == "object":
      var ls = nil;
      for(key in json){
        ls = new Pair(new Pair(key, json2sexp(json[key])),
               ls);
      }
      return ls;
    default:
      throw new Error("json->sexp: detected invalid value for json: "+BiwaScheme.inspect(json));
    }
    throw new Bug("must not happen");
  }
  define_libfunc("json->sexp", 1, 1, function(ar){
    return json2sexp(ar[0]);
  })

  // (vector-push! v item1 item2 ...)
  define_libfunc("vector-push!", 2, null, function(ar){
    assert_vector(ar[0]);
    for(var i=1; i<ar.length; i++){
      ar[0].push(ar[i]);
    }
    return ar[0];
  });

  //
  //from Gauche
  //

  // (identity obj)
  // Returns obj.
  define_libfunc("identity", 1, 1, function(ar){
    return ar[0];
  });

  // (inc! i)
  // = (begin (set! i (+ i 1)) i)
  // Increments i (i.e., set i+1 to i).
  define_syntax("inc!", function(x){
    var target = x.cdr.car;
    return List(Sym("begin"),
                List(Sym("set!"),
                     target, 
                     List(Sym("+"), target, 1)),
                target);
  });
  
  // (dec! i)
  // = (begin (set! i (- i 1)) i)
  // Decrements i (i.e., set i-1 to i).
  define_syntax("dec!", function(x){
    var target = x.cdr.car;
    return List(Sym("begin"),
                List(Sym("set!"),
                     target, 
                     List(Sym("-"), target, 1)),
                target);
  });

  // string
  
  define_libfunc("string-concat", 1, 1, function(ar){
    assert_list(ar[0]);
    return ar[0].to_array().join("");
  })

  define_libfunc("string-split", 2, 2, function(ar){
    assert_string(ar[0]);
    assert_string(ar[1]);
    return array_to_list(ar[0].split(ar[1]));
  })

  define_libfunc("string-join", 1, 2, function(ar){
    assert_list(ar[0]);
    var delim = ""
    if(ar[1]){
      assert_string(ar[1]);
      delim = ar[1];
    }
    return ar[0].to_array().join(delim);
  })
  
  // lists

  define_libfunc("intersperse", 2, 2, function(ar){
    var item = ar[0], ls = ar[1];
    assert_list(ls);

    var ret = [];
    _.each(ls.to_array().reverse(),function(x){
      ret.push(x);
      ret.push(item);
    });
    ret.pop();
    return array_to_list(ret);
  });

  define_libfunc("map-with-index", 2, null, function(ar){
    var proc = ar.shift(), lists = ar;
    _.each(lists, assert_list);

    var results = [], i = 0;
    return Call.multi_foreach(lists, {
      call: function(xs){ 
        var args = _.map(xs, function(x){ return x.car });
        args.unshift(i);
        i++;
        return new Call(proc, args);
      },
      result: function(res){ results.push(res); },
      finish: function(){ return array_to_list(results); }
    });
  });

  // loop

  // (dotimes (variable limit result) body ...)
  // Iterate with variable 0 to limit-1.
  // ->
  //    (do ((tlimit limit)
  //         (variable 0 (+ variable 1)))
  //        ((>= variable tlimit) result)
  //      body ...)
  define_syntax("dotimes", function(x){
    var spec = x.cdr.car,
        bodies = x.cdr.cdr;
    var variable = spec.car,
        limit = spec.cdr.car,
        result = spec.cdr.cdr.car;
    var tlimit = BiwaScheme.gensym();

    var do_vars = deep_array_to_list([[tlimit, limit],
                                      [variable, 0, [Sym("+"), variable, 1]]]);
    var do_check = deep_array_to_list([[Sym(">="), variable, tlimit], result]);

    return new Pair(Sym("do"),
             new Pair(do_vars,
               new Pair(do_check,
                 bodies)));
  });

  // sorting (Obsolete: use list-sort, etc. instead of these.)

  // utility function. takes a JS Array and a Scheme procedure,
  // returns sorted array
  var sort_with_comp = function(ary, proc, intp){
    return ary.sort(function(a, b){
        var intp2 = new BiwaScheme.Interpreter(intp);
        return intp2.invoke_closure(proc, [a, b]);
      });
  };

  define_libfunc("list-sort/comp", 1, 2, function(ar, intp){
    assert_procedure(ar[0]);
    assert_list(ar[1]);

    return array_to_list(sort_with_comp(ar[1].to_array(), ar[0], intp));
  });
  define_libfunc("vector-sort/comp", 1, 2, function(ar, intp){
    assert_procedure(ar[0]);
    assert_vector(ar[1]);

    return sort_with_comp(_.clone(ar[1]), ar[0], intp);
  });
  define_libfunc("vector-sort/comp!", 1, 2, function(ar, intp){
    assert_procedure(ar[0]);
    assert_vector(ar[1]);

    sort_with_comp(ar[1], ar[0], intp);
    return BiwaScheme.undef;
  });
  
  // macros

  //(define-macro (foo x y) body ...)
  //(define-macro foo lambda)

  var rearrange_args = function (expected, given) {
    var args = [];
    var dotpos = (new Compiler).find_dot_pos(expected);
    if (dotpos == -1)
      args = given;
    else {
      for (var i = 0; i < dotpos; i++) {
        args[i] = given[i];
      }
      args[i] = array_to_list(given.slice(i));
    }
    return args;
  }
  define_syntax("define-macro", function(x){
    var head = x.cdr.car;
    var expected_args;
    if(head instanceof Pair){
      var name = head.car;
      expected_args = head.cdr;
      var body = x.cdr.cdr;
      var lambda = new Pair(Sym("lambda"),
                     new Pair(expected_args,
                       body))
    }
    else{
      var name = head;
      var lambda = x.cdr.cdr.car;
      expected_args = lambda.cdr.car;
    }

    //[close, n_frees, do_body, next]
    var opc = Compiler.compile(lambda);
    if(opc[1] != 0)
      throw new Bug("you cannot use free variables in macro expander (or define-macro must be on toplevel)")
    var cls = [opc[2]];

    TopEnv[name.name] = new Syntax(name.name, function(sexp){
      var given_args = sexp.to_array();

      given_args.shift();
      
      var intp = new Interpreter();
      var args = rearrange_args(expected_args, given_args);
      var result = intp.invoke_closure(cls, args);
      return result;
    });

    return BiwaScheme.undef;
  })

  var macroexpand_1 = function(x){
    if(x instanceof Pair){
      if(x.car instanceof Symbol && TopEnv[x.car.name] instanceof Syntax){
        var transformer = TopEnv[x.car.name];
        x = transformer.transform(x);
      }
      else
        throw new Error("macroexpand-1: `" + to_write_ss(x) + "' is not a macro");
    }
    return x;
  }
  define_syntax("%macroexpand", function(x){
    var expanded = BiwaScheme.Interpreter.expand(x.cdr.car);
    return List(Sym("quote"), expanded);
  });
  define_syntax("%macroexpand-1", function(x){
    var expanded = macroexpand_1(x.cdr.car);
    return List(Sym("quote"), expanded);
  });

  define_libfunc("macroexpand", 1, 1, function(ar){
    return BiwaScheme.Interpreter.expand(ar[0]);
  });
  define_libfunc("macroexpand-1", 1, 1, function(ar){
    return macroexpand_1(ar[0]);
  });

  define_libfunc("gensym", 0, 0, function(ar){
    return BiwaScheme.gensym();
  });
  
  // i/o

  define_libfunc("print", 1, null, function(ar){
    _.map(ar, function(item){
      Console.puts(to_display(item), true);
    })
    Console.puts(""); //newline
    return BiwaScheme.undef;
  })
  define_libfunc("write-to-string", 1, 1, function(ar){
    return to_write(ar[0]);
  });
  define_libfunc("read-from-string", 1, 1, function(ar){
    assert_string(ar[0]);
    return Interpreter.read(ar[0]);
  });
  define_libfunc("port-closed?", 1, 1, function(ar){
    assert_port(ar[0]);
    return !(ar[0].is_open);
  });
  //define_libfunc("with-input-from-port", 2, 2, function(ar){
  //define_libfunc("with-error-to-port", 2, 2, function(ar){
  define_libfunc("with-output-to-port", 2, 2, function(ar){
    var port = ar[0], proc = ar[1];
    assert_port(port);
    assert_procedure(proc);

    var original_port = BiwaScheme.Port.current_output;
    BiwaScheme.Port.current_output = port

    return new Call(proc, [port], function(ar){
      port.close();
      BiwaScheme.Port.current_output = original_port;

      return ar[0];
    });
  });
  
  // syntax
  
  define_syntax("let1", function(x){
    //(let1 vari expr body ...) 
    //=> ((lambda (var) body ...) expr)
    var vari = x.cdr.car; 
    var expr = x.cdr.cdr.car;
    var body = x.cdr.cdr.cdr;

    return new Pair(new Pair(Sym("lambda"),
                      new Pair(new Pair(vari, nil),
                        body)),
             new Pair(expr, nil));
  })

  //
  // Regular Expression
  //
  var assert_regexp = function(obj, fname){
    if(!(obj instanceof RegExp))
      throw new Error(fname + ": regexp required, but got " + to_write(obj));
  }

  //Function: string->regexp string &keyword case-fold 
  define_libfunc("string->regexp", 1, 1, function(ar){
    assert_string(ar[0], "string->regexp");
    return new RegExp(ar[0]); //todo: case-fold
  })
  //Function: regexp? obj 
  define_libfunc("regexp?", 1, 1, function(ar){
    return (ar[0] instanceof RegExp);
  })
  //Function: regexp->string regexp 
  define_libfunc("regexp->string", 1, 1, function(ar){
    assert_regexp(ar[0], "regexp->string");
    return ar[0].toString().slice(1, -1); //cut '/' 
  })

  define_libfunc("regexp-exec", 2, 2, function(ar){
    var rexp = ar[0];
    if(_.isString(ar[0])){
      rexp = new RegExp(ar[0]);
    }
    assert_regexp(rexp, "regexp-exec");
    assert_string(ar[1], "regexp-exec");
    var ret = rexp.exec(ar[1])
    return (ret === null) ? false : array_to_list(ret);
  })

//  //Function: rxmatch regexp string 
//  define_libfunc("rxmatch", 1, 1, function(ar){
//    assert_regexp(ar[0], "rxmatch");
//    assert_string(ar[1], "rxmatch");
//    return ar[0].match(ar[1]);
//  });
  //Function: rxmatch-start match &optional (i 0) 
  //Function: rxmatch-end match &optional (i 0) 
  //Function: rxmatch-substring match &optional (i 0) 
  //Function: rxmatch-num-matches match   
  //Function: rxmatch-after match &optional (i 0) 
  //Function: rxmatch-before match &optional (i 0) 
  //Generic application: regmatch &optional index 
  //Generic application: regmatch 'before &optional index 
  //Generic application: regmatch 'after &optional index 
  //Function: regexp-replace regexp string substitution 
  
  // regexp-replace-all regexp string substitution 
  define_libfunc("regexp-replace-all", 3, 3, function(ar){
    var pat = ar[0];
    if(_.isString(pat)){
      var rexp = new RegExp(pat, "g")
    }
    else{
      assert_regexp(pat);
      var rexp = new RegExp(pat.source, "g")
    }
    assert_string(ar[1]);
    assert_string(ar[2]);
    return ar[1].replace(rexp, ar[2])
  })
  //Function: regexp-replace* string rx1 sub1 rx2 sub2 ... 
  //Function: regexp-replace-all* string rx1 sub1 rx2 sub2 ... 
  //Function: regexp-quote string 
  //Macro: rxmatch-let match-expr (var ...) form ... 
  //Macro: rxmatch-if match-expr (var ...) then-form else-form 
  //Macro: rxmatch-cond clause ... 
  //Macro: rxmatch-case string-expr clause ... 

}


//
// Library functions only work on Node.js
// see also: test/node_functions.js
//

(function(){
  if(BiwaScheme.on_node){
    var node = {
      fs: require('fs'),
      path: require('path'),
      process: process
    };
  }

  // Defines library functions which only works on Node.
  // - On Node: same as define_libfunc
  // - On Browser: defines a stub libfunc which just raises Error
  var define_node_libfunc = function(/*arguments*/){
    var args = _.toArray(arguments);

    if(BiwaScheme.on_node){
      BiwaScheme.define_libfunc.apply(null, args);
    }
    else{
      var func_name = args[0];
      var func = function(ar){
        throw new BiwaScheme.Error("the function '"+func_name+"' "+
          "is not supported in the browser "+
          "(works only on Node.js).");
      };
      args.pop();
      args.push(func);
      BiwaScheme.define_libfunc.apply(null, args);
    }
  };

  //
  // Chapter 9 File System
  //

  //(file-exists? filename)    procedure 
  define_node_libfunc("file-exists?", 1, 1, function(ar){
    BiwaScheme.assert_string(ar[0]);
    return node.fs.existsSync(ar[0]);
  });

  //(delete-file filename)    procedure 
  define_node_libfunc("delete-file", 1, 1, function(ar){
    BiwaScheme.assert_string(ar[0]);
    node.fs.unlinkSync(ar[0]);
    return BiwaScheme.undef;
  });

  //
  // Chapter 10 Command-line access and exit values
  //
  
  //(command-line)    procedure
  define_node_libfunc("command-line", 0, 0, function(ar){
    return BiwaScheme.List.apply(null, node.process.argv);
  });

  //(exit)    procedure 
  //(exit obj)    procedure
  define_node_libfunc("exit", 0, 1, function(ar){
    var obj = ar[0];
    var code = _.isUndefined(obj) ? 0 :
               (obj === false)    ? 1 :
               Number(obj);

    node.process.exit(code);
  });

  //
  // srfi-98 (get-environment-variable)
  //

  // (get-environment-variable name) -> string or #f
  define_node_libfunc("get-environment-variable", 1, 1, function(ar){
    BiwaScheme.assert_string(ar[0]);
    var val = node.process.env[ar[0]];
    return _.isUndefined(val) ? false : val;
  });

  // (get-environment-variables) -> alist of string (("key" . "value"))
  define_node_libfunc("get-environment-variables", 0, 0, function(ar){
    return BiwaScheme.js_obj_to_alist(node.process.env);
  });

})();
//
// srfi.js - SRFI libraries
//
// should be src/library/srfi/1.js, etc (in the future).
//

with(BiwaScheme) {
  
  //
  // srfi-1 (list)
  //
  // (iota count start? step?)
  define_libfunc("iota", 1, 3, function(ar){
    var count = ar[0];
    var start = ar[1] || 0;
    var step = (ar[2]===undefined) ? 1 : ar[2];
    assert_integer(count);
    assert_number(start);
    assert_number(step);

    var a = [], n = start;
    for(var i=0; i<count; i++){
      a.push(n);
      n += step;
    }
    return array_to_list(a);
  });

  var copy_pair = function(pair){
    var car = BiwaScheme.isPair(pair.car) ? copy_pair(pair.car)
                                          : pair.car;
    var cdr = BiwaScheme.isPair(pair.cdr) ? copy_pair(pair.cdr)
                                          : pair.cdr;
    return new Pair(car, cdr);
  };
  // (list-copy list)
  define_libfunc("list-copy", 1, 1, function(ar){
    if(BiwaScheme.isPair(ar[0])){
      return copy_pair(ar[0]);
    }
    else{
      return BiwaScheme.nil;
    }
  });

  //
  // srfi-6 & Gauche (string port)
  // 
  define_libfunc("open-input-string", 1, 1, function(ar){
    assert_string(ar[0]);
    return new Port.StringInput(ar[0]);
  })
  define_libfunc("open-output-string", 0, 0, function(ar){
    return new Port.StringOutput();
  })
  define_libfunc("get-output-string", 1, 1, function(ar){
    assert_port(ar[0]);
    if(!(ar[0] instanceof Port.StringOutput))
      throw new Error("get-output-string: port must be made by 'open-output-string'");
    return ar[0].output_string();
  })

  //
  // srfi-8 (receive)
  //

  // (receive <formals> <expression> <body>...)
  // -> (call-with-values (lambda () expression)
  //                        (lambda formals body ...))
  define_syntax("receive", function(x){
    assert(BiwaScheme.isPair(x.cdr),
           "missing formals", "receive");
    var formals = x.cdr.car;
    assert(BiwaScheme.isPair(x.cdr.cdr),
           "missing expression", "receive");
    var expression = x.cdr.cdr.car;
    var body       = x.cdr.cdr.cdr;
    
    return deep_array_to_list([Sym("call-with-values"),
      [Sym("lambda"), BiwaScheme.nil, expression],
      new BiwaScheme.Pair(Sym("lambda"),
        new BiwaScheme.Pair(formals, body))]);
  });

  // srfi-19 (time)
  //
//  // constants
//time-duration
//time-monotonic
//time-process
//time-tai
//time-thread
//time-utc
  // Current time and clock resolution
  // (current-date [tz-offset])
  define_libfunc("current-date", 0, 1, function(ar){
    //todo: tz-offset (ar[1])
    return new Date();
  })
//
//current-julian-day -> jdn
//current-modified-julian-day -> mjdn
//current-time [time-type] -> time
//time-resolution [time-type] -> integer
//  // Time object and accessors
//make-time type nanosecond second -> time
//time? object -> boolean
//time-type time -> time-type
//time-nanosecond time -> integer
//time-second time -> integer
//set-time-type! time time-type
//set-time-nanosecond! time integer
//set-time-second! time integer
//copy-time time1 -> time2 
//  // Time comparison procedures
//time<=? time1 time2 -> boolean
//time<? time1 time2 -> boolean
//time=? time1 time2 -> boolean
//time>=? time1 time2 -> boolean
//time>? time1 time2 -> boolean
//  // Time arithmetic procedures
//time-difference time1 time2 -> time-duration
//time-difference! time1 time2 -> time-duration
//add-duration time1 time-duration -> time
//add-duration! time1 time-duration -> time
//subtract-duration time1 time-duration -> time
//subtract-duration! time1 time-duration -> time
  // Date object and accessors
  // make-date
  define_libfunc("date?", 1, 1, function(ar){
    return (ar[0] instanceof Date);
  })
  define_libfunc("date-nanosecond", 1, 1, function(ar){
    assert_date(ar[0]);
    return ar[0].getMilliseconds() * 1000000;
  })
  define_libfunc("date-millisecond", 1, 1, function(ar){ // not srfi-19
    assert_date(ar[0]);
    return ar[0].getMilliseconds();
  })
  define_libfunc("date-second", 1, 1, function(ar){
    assert_date(ar[0]);
    return ar[0].getSeconds();
  })
  define_libfunc("date-minute", 1, 1, function(ar){
    assert_date(ar[0]);
    return ar[0].getMinutes();
  })
  define_libfunc("date-hour", 1, 1, function(ar){
    assert_date(ar[0]);
    return ar[0].getHours();
  })
  define_libfunc("date-day", 1, 1, function(ar){
    assert_date(ar[0]);
    return ar[0].getDate();
  })
  define_libfunc("date-month", 1, 1, function(ar){
    assert_date(ar[0]);
    return ar[0].getMonth() + 1; //Jan = 0 in javascript..
  })
  define_libfunc("date-year", 1, 1, function(ar){
    assert_date(ar[0]);
    return ar[0].getFullYear();
  })
  //date-zone-offset
  //date-year-day
  define_libfunc("date-week-day", 1, 1, function(ar){
    assert_date(ar[0]);
    return ar[0].getDay();
  })
  //date-week-number

  // Time/Date/Julian Day/Modified Julian Day Converters
  // (snipped)
  
  // Date to String/String to Date Converters
  // TODO: support locale
  //   * date_names
  //   * ~f 5.2 sec
  //   * ~p AM/PM
  //   * ~X 2007/01/01
  BiwaScheme.date_names = {
    weekday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    full_weekday: ["Sunday", "Monday", "Tuesday", 
      "Wednesday", "Thursday", "Friday", "Saturday"],
    month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    full_month: ["January", "February", "March", "April",
      "May", "June", "July", "August", "September", 
      "Octorber", "November", "December"]
  }

  BiwaScheme.date2string = function(date, format){
    var zeropad  = function(n){ return n<10 ? "0"+n : ""+n }; 
    var spacepad = function(n){ return n<10 ? " "+n : ""+n }; 
    
    var getter = {
      a: function(x){ return date_names.weekday[x.getDay()] },
      A: function(x){ return date_names.full_weekday[x.getDay()] },
      b: function(x){ return date_names.month[x.getMonth()] },
      B: function(x){ return date_names.full_month[x.getMonth()] },
      c: function(x){ return x.toString() },
      d: function(x){ return zeropad(x.getDate()) },
      D: function(x){ return getter.d(x) + getter.m(x) + getter.y(x); },
      e: function(x){ return spacepad(x.getDate()) },
      f: function(x){ return x.getSeconds() + x.getMilliseconds()/1000; },
      h: function(x){ return date_names.month[x.getMonth()] },
      H: function(x){ return zeropad(x.getHours()) },
      I: function(x){ var h = x.getHours(); return zeropad(h<13 ? h : h-12) },
      j: function(x){ throw new Bug("not implemented: day of year") },
      k: function(x){ return spacepad(x.getHours()) },
      l: function(x){ var h = x.getHours(); return spacepad(h<13 ? h : h-12) },
      m: function(x){ return zeropad(x.getMonth()+1) },
      M: function(x){ return zeropad(x.getMinutes()) },
      n: function(x){ return "\n" },
      N: function(x){ throw new Bug("not implemented: nanoseconds") },
      p: function(x){ return x.getHours()<13 ? "AM" : "PM" },
      r: function(x){ return getter.I(x) + ":" + getter.M(x) + ":" + getter.S(x) + " " + getter.p(x) },
      s: function(x){ return Math.floor(x.getTime() / 1000) },
      S: function(x){ return zeropad(x.getSeconds()) },
      t: function(x){ return "\t" },
      T: function(x){ return getter.H(x) + ":" + getter.M(x) + ":" + getter.S(x) },
      U: function(x){ throw new Bug("not implemented: weeknum(0~, Sun)") },
      V: function(x){ throw new Bug("not implemented: weeknum(1~, Sun?)") },
      w: function(x){ return x.getDay() },
      W: function(x){ throw new Bug("not implemented: weeknum(0~, Mon)") },
      x: function(x){ throw new Bug("not implemented: weeknum(1~, Mon)") },
      X: function(x){ return getter.Y(x) + "/" + getter.m(x) + "/" + getter.d(x) },
      y: function(x){ return x.getFullYear() % 100 },
      Y: function(x){ return x.getFullYear() },
      z: function(x){ throw new Bug("not implemented: time-zone") },
      Z: function(x){ throw new Bug("not implemented: symbol time zone") },
      1: function(x){ throw new Bug("not implemented: ISO-8601 year-month-day format") },
      2: function(x){ throw new Bug("not implemented: ISO-8601 hour-minute-second-timezone format") },
      3: function(x){ throw new Bug("not implemented: ISO-8601 hour-minute-second format") },
      4: function(x){ throw new Bug("not implemented: ISO-8601 year-month-day-hour-minute-second-timezone format") },
      5: function(x){ throw new Bug("not implemented: ISO-8601 year-month-day-hour-minute-second format") }
    }

    return format.replace(/~([\w1-5~])/g, function(str, x){
      var func = getter[x];
      if(func)
        return func(date);
      else if(x == "~")
        return "~";
      else
        return x;
    })
  }
  
  // date->string date template
  define_libfunc("date->string", 1, 2, function(ar){
    assert_date(ar[0]);

    if(ar[1]){
      assert_string(ar[1]);
      return date2string(ar[0], ar[1]);
    }
    else
      return ar[0].toString();
  })
  // string->date

  // parse-date date
  define_libfunc("parse-date", 1, 1, function(ar){ // not srfi-19
    assert_string(ar[0]);
    return new Date(Date.parse(ar[0]));
  })

  //
  // srfi-27
  //
  define_libfunc("random-integer", 1, 1, function(ar){
    var n = ar[0];
    assert_integer(n);
    if (n < 0)
      throw new Error("random-integer: the argument must be >= 0");
    else
      return Math.floor(Math.random() * ar[0]);
  });
  define_libfunc("random-real", 0, 0, function(ar){
    return Math.random();
  });

  //
  // srfi-28 (format)
  //

  // (format format-str obj1 obj2 ...) -> string
  // (format #f format-str ...) -> string
  // (format #t format-str ...) -> output to current port 
  // (format port format-str ...) -> output to the port 
  //   ~a: display
  //   ~s: write
  //   ~%: newline
  //   ~~: tilde
  define_libfunc("format", 1, null, function(ar){
    if (_.isString(ar[0])) {
      var port = null, format_str = ar.shift();
    }
    else if (ar[0] === false) {
      ar.shift();
      var port = null, format_str = ar.shift();
    }
    else if (ar[0] === true) {
      ar.shift();
      var port = BiwaScheme.Port.current_output,
          format_str = ar.shift();
    }
    else {
      var port = ar.shift(), format_str = ar.shift();
      assert_port(port);
    }

    var str = format_str.replace(/~[as]/g, function(matched){
                 assert(ar.length > 0,
                        "insufficient number of arguments", "format");
                 if (matched == "~a")
                   return BiwaScheme.to_display(ar.shift());
                 else
                   return BiwaScheme.to_write(ar.shift());
              }).replace(/~%/, "\n")
                .replace(/~~/, "~");
    if (port) {
      port.put_string(str);
      return BiwaScheme.undef;
    }
    else {
      return str;
    }
  });
  
  //
  // srfi-38 (write/ss)
  //
  var user_write_ss = function(ar){
    Console.puts(write_ss(ar[0]), true);
    return BiwaScheme.undef;
  }
  define_libfunc("write/ss", 1, 2, user_write_ss);
  define_libfunc("write-with-shared-structure", 1, 2, user_write_ss);
  define_libfunc("write*", 1, 2, user_write_ss); //from Gauche(STklos)

  //
  // srfi-43 (vector library)
  //
  define_libfunc("vector-append", 2, null, function(ar){
    var vec = [];
    return vec.concat.apply(vec, ar);
  });

  // (vector-copy vector)
  define_libfunc("vector-copy", 1, 1, function(ar){
    assert_vector(ar[0]);
    return _.clone(ar[0]);
  });

  //
  // see src/library/node_functions.js for:
  // - srfi-98 (get-environment-variable)
  //
}
if( typeof(BiwaScheme)!='object' ) BiwaScheme={}; with(BiwaScheme) {

  define_libfunc("read-line", 0, 1, function(ar){
    var port = ar[0] || Port.current_input;
    assert_port(port);
    return port.get_string();
  });

  //
  // element
  //
  define_libfunc("element-empty!", 1, 1, function(ar){
    if ($(ar[0]).attr("value")) {
      return $(ar[0]).val("");
    } else {
      return $(ar[0]).empty();
    }
  });
  alias_libfunc("element-empty!", "element-clear!");
  define_libfunc("element-visible?", 1, 1, function(ar){
    return $(ar[0]).is(":visible");
  });
  define_libfunc("element-toggle!", 1, 1, function(ar){
    return $(ar[0]).toggle();
  });
  define_libfunc("element-hide!", 1, 1, function(ar){
    return $(ar[0]).hide();
  });
  define_libfunc("element-show!", 1, 1, function(ar){
    return $(ar[0]).show();
  });
  define_libfunc("element-remove!", 1, 1, function(ar){
    return $(ar[0]).remove();
  });
  define_libfunc("element-update!", 2, 2, function(ar){
    return $(ar[0]).html(ar[1]);
  });
  define_libfunc("element-replace!", 2, 2, function(ar){
    return $(ar[0]).replaceWith(ar[1]);
  });
  define_libfunc("element-insert!", 2, 2, function(ar){
    return $(ar[0]).append(ar[1]);
  });
  define_libfunc("element-wrap!", 3, 3, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-ancestors", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-descendants", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-first-descendant", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-immediate-descendants", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-previous-sibling", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-next-sibling", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-siblings", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-match?", 2, 2, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-up", 3, 3, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-down", 3, 3, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-previous", 3, 3, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-next", 3, 3, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-select", 1, 1, function(ar){
    $(ar[0]).select();
  });
  define_libfunc("element-adjacent", 0, 0, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-identify", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-read-attribute", 2, 2, function(ar){
    assert_string(ar[1]);
    return $(ar[0]).attr(ar[1]);
  });

  var element_write_attribute = function(ar) {
    assert_string(ar[1]);
    return $(ar[0]).attr(ar[1], ar[2]);
  };
  define_libfunc("element-write-attribute", 3, 3, function(ar){
    BiwaScheme.deprecate("element-write-attribute", "1.0",
                         "element-write-attribute!");
    return element_write_attribute(ar);
  });
  define_libfunc("element-write-attribute!", 3, 3, element_write_attribute);

  define_libfunc("element-height", 1, 1, function(ar){
    return $(ar[0]).height();
  });
  define_libfunc("element-width", 1, 1, function(ar){
    return $(ar[0]).width();
  });

  define_libfunc("element-class-names", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-has-class-name?", 2, 2, function(ar){
    assert_string(ar[1]);
    return $(ar[0]).hasClass(ar[1]);
  });

  var element_add_class_name = function(ar) {
    assert_string(ar[1]);
    return $(ar[0]).addClass(ar[1]);
  };
  define_libfunc("element-add-class-name", 2, 2, function(ar){
    BiwaScheme.deprecate("element-add-class-name", "1.0",
                         "element-add-class-name!");
    return element_add_class_name(ar);
  });
  define_libfunc("element-add-class-name!", 2, 2, element_add_class_name);

  var element_remove_class_name = function(ar) {
    assert_string(ar[1]);
    return $(ar[0]).removeClass(ar[1]);
  };
  define_libfunc("element-remove-class-name", 2, 2, function(ar){
    BiwaScheme.deprecate("element-remove-class-name", "1.0",
                         "element-remove-class-name!");
    return element_remove_class_name(ar);
  });
  define_libfunc("element-remove-class-name!", 2, 2, element_remove_class_name);

  var element_toggle_class_name = function(ar) {
    assert_string(ar[1]);
    return $(ar[0]).toggleClass(ar[1]);
  };
  define_libfunc("element-toggle-class-name", 2, 2, function(ar){
    BiwaScheme.deprecate("element-toggle-class-name", "1.0",
                         "element-toggle-class-name!");
    return element_toggle_class_name(ar);
  });
  define_libfunc("element-toggle-class-name!", 2, 2, element_toggle_class_name);

  define_libfunc("element-clean-whitespace!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-empty?", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-descendant-of!", 2, 2, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("scroll-to-element!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-style", 2, 2, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-opacity", 2, 2, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-style-set!", 2, 2, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-opacity-set!", 2, 2, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-dimensions", 1, 1, function(ar){
    return new Values($(ar[0]).width(), $(ar[0]).height());
  });
  define_libfunc("element-make-positioned!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-undo-positioned!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-make-clipping!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-undo-clipping!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-cumulative-offset", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-positioned-offset", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-absolutize!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-relativize!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-cumulative-scroll-offset", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-offset-parent", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-viewport-offset", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-clone-position!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-absolutize!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-focus!", 1, 1, function(ar){
    return $(ar[0]).focus();
  });

  // usage:
  //  (element-new '(div "foo"))        => <div>foo</div>
  //  (element-new '("div#main" "foo")) => <div id='main'>foo</div>
  //  (element-new '("div.red" "foo"))  => <div class='red'>foo</div>
  //  (element-new '(div align "right" "foo"))  => <div align='right'>foo</div>
  //  (element-new '(div (span "foo"))  => <div><span>foo</span></div>
  //

  BiwaScheme.create_elements_by_string = function(spec){
    spec = spec.to_array();
    var name = spec.shift();
    if(name instanceof Symbol) name = name.name;
    var m = name.match(/(.*)\.(.*)/);
    if (m) {
      name = m[1];
      spec.unshift(Sym("class"), m[2]);
    }
    m = name.match(/(.*)\#(.*)/);
    if (m) {
      name = m[1];
      spec.unshift(Sym("id"), m[2]);
    }
    var children = [];
    var s = ["<" + name];
    for(var i=0; i<spec.length; i++){
      if(spec[i] instanceof Symbol){
        s.push(' ' + spec[i].name + '="' + spec[i+1] + '"');
        i++;
      }
      else{
        if(spec[i] instanceof Pair)
          children.push(create_elements_by_string(spec[i]));
        else
          children.push(spec[i]); // String
      }
    }
    s.push(">");
    s.push( children.join("") );
    s.push("</" + name + ">");
    return s.join("");
  };

  BiwaScheme.tree_all = function(tree, pred){
    if(tree === nil)
      return true;
    else if(pred(tree.car) === false)
      return false;
    else
      return BiwaScheme.tree_all(tree.cdr, pred); 
  };
  define_libfunc("element-new", 1, 1, function(ar){
    var string_or_symbol = function(item){
      return _.isString(item) ||
             (item instanceof Symbol) ||
             (item instanceof Pair);
    };
    if(BiwaScheme.tree_all(ar[0], string_or_symbol)){
      return $(create_elements_by_string(ar[0]))[0];
    } else {
      return nil;
    }
  });
  BiwaScheme.element_content = function(selector) {
    if ($(selector).attr("value")) {
      return $(selector).val();
    } else {
      return _.escape($(selector).html());
    }
  };
  define_libfunc("element-content", 1, 1, function(ar){
    return BiwaScheme.element_content(ar[0]);
  });

  //
  // load from network
  //
  define_libfunc("load", 1, 1, function(ar, intp){
    var path = ar[0];
    assert_string(path);
    var intp2 = new Interpreter(intp);
    return new BiwaScheme.Pause(function(pause){
      $.ajax(path, {
        dataType: "text",
        mimeType: "text/plain; charset=x-user-defined", // For Firefox (#88)
        success: function(data) {
          // create new interpreter not to destroy current stack.
          intp2.evaluate(data,
                         function(){
                           return pause.resume(BiwaScheme.undef);
                         });
        },
        error: function() {
          throw new Error("load: network error: failed to load "+path);
        }
      });
    });
  });

  // Load javascript file on the server
  _require = function(src, check, proc){
    var script = $("<script/>", { src: src });
    $("body").append(script);

    var checker = new Function("return !!(" + check + ")");

    if(checker()) proc();
    else          setTimeout(function(){ checker() ? proc() : setTimeout(arguments.callee, 10); }, 10);
  };
  // (js-load "lib/foo.js" "Foo")
  define_libfunc("js-load", 2, 2, function(ar){
    var path = ar[0];
    var check = ar[1];
    assert_string(path);
    assert_string(check);

    return new BiwaScheme.Pause(function(pause){
      _require(path, "window." + check, function(){
        pause.resume(BiwaScheme.undef);
      });
    });
  });

  //
  // html modification
  //

  BiwaScheme.getelem = function(ar){
    // account for getelem returning false when no results (and that getting passed back in)
    if (ar.length > 1 && ar[1] === false) {
      ar[1] = [];
    }

    var x = $.apply(this, ar);
    if (x.length > 0) {
      return x;
    } else {
      return false;
    }
  };
  define_libfunc("$",       1, 2, BiwaScheme.getelem);
  define_libfunc("getelem", 1, 2, BiwaScheme.getelem);
  define_libfunc("dom-element", 1, 1, function(ar) {
    return $(ar[0])[0];
  });

  define_libfunc("set-style!", 3, 3, function(ar){
    assert_string(ar[1]);
    $(ar[0]).css(ar[1], ar[2]);
    return BiwaScheme.undef;
  });
  define_libfunc("get-style", 2, 2, function(ar){
    assert_string(ar[1]);
    return $(ar[0]).css(ar[1]);
  });
  define_libfunc("set-content!", 2, 2, function(ar){
    assert_string(ar[1]);
    var str = ar[1].replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;");
    $(ar[0]).html(str);
    return BiwaScheme.undef;
  });
  define_libfunc("get-content", 1, 1, function(ar){
    return BiwaScheme.element_content(ar[0]);
  });

  //
  // handlers
  //
  define_libfunc("set-handler!", 3, 3, function(ar, intp){
    throw new Error("set-handler! is obsolete, please use add-handler! instead");
  });
  define_libfunc("add-handler!", 3, 3, function(ar, intp){
    var selector = ar[0], evtype = ar[1], proc = ar[2];
    var intp2 = new Interpreter(intp);
    var handler = function(event){
      return _.clone(intp2).invoke_closure(proc, [event]);
    };
    $(selector).on(evtype, handler);
    return handler;
  });
  define_libfunc("remove-handler!", 3, 3, function(ar, intp){
    var selector = ar[0], evtype = ar[1], handler = ar[2];
    $(selector).off(evtype, handler);
    return BiwaScheme.undef;
  });
  define_libfunc("wait-for", 2, 2, function(ar){
    var selector = ar[0], evtype = ar[1];
    var elem = $(selector);
    elem.biwascheme_wait_for = elem.biwascheme_wait_for || {};

    var prev_handler = elem.biwascheme_wait_for[evtype];
    if (prev_handler) {
      // Maybe a wait-for is called more than once,
      // and previous handler is not consumed.
      elem.off(evtype, prev_handler);
    }

    return new BiwaScheme.Pause(function(pause){
      var handler = function(event){
        elem.biwascheme_wait_for[evtype] = undefined;
        elem.off(evtype, handler);
        return pause.resume(event);
      };

      elem.biwascheme_wait_for[evtype] = handler;
      elem.on(evtype, handler);
    });
  });

  //
  // dom
  //
  define_libfunc("domelem", 1, null, function(ar){
    throw new Error("obsolete");
  });
  define_libfunc("dom-remove-children!", 1, 1, function(ar){
    Console.puts("warning: dom-remove-children! is obsolete. use element-empty! instead");
    $(ar[0]).empty();
    return BiwaScheme.undef;
  });
  define_libfunc("dom-create-element", 1, 1, function(ar){
    throw new Error("obsolete");
  });
  define_libfunc("element-append-child!", 2, 2, function(ar){
    return $(ar[0]).append(ar[1]);
  });
  define_libfunc("dom-remove-child!", 2, 2, function(ar){
    throw new Error("obsolete");
  });
//  define_libfunc("dom-get-attribute", 2, 2, function(ar){
//  });
//  define_libfunc("dom-remove-child!", 2, 2, function(ar){
//  });

  //
  // communication to server
  //
  define_libfunc("http-request", 1, 1, function(ar){
    var path = ar[0];
    assert_string(path);

    return new BiwaScheme.Pause(function(pause){
      $.get(path, function(data) {
        pause.resume(data);
      }, "text");
    });
  });
  // (http-post "/foo" '(("x" . 1) ("y" . 2)))
  define_libfunc("http-post", 2, 2, function(ar){
    var path = ar[0];
    assert_string(path);
    var alist = ar[1];
    assert_list(alist);
    var h = alist_to_js_obj(alist);

    return new BiwaScheme.Pause(function(pause){
      $.post(path, h, function(data) {
        pause.resume(data);
      }, "text");
    });
  });

  BiwaScheme.jsonp_receiver = [];
  define_libfunc("receive-jsonp", 1, 1, function(ar){
    var url = ar[0];
    assert_string(url);

    var receives = BiwaScheme.jsonp_receiver;
    for(var i=0; i<receives.length; i++)
      if(receives[i] === null) break;
    var receiver_id = i;
    url += "?callback=BiwaScheme.jsonp_receiver[" + receiver_id + "]";

    return new BiwaScheme.Pause(function(pause){
      receives[receiver_id] = function(data){
        pause.resume(data);
        receives[receiver_id] = null;
      };
      var script = $("<script/>", { src: url });
      $("body").append(script);
    });
  });

  //
  // dialog, debug
  //
  define_libfunc("alert", 1, 1, function(ar){
    alert(ar[0]);
    return BiwaScheme.undef;
  });
  define_libfunc("confirm", 1, 1, function(ar){
    return confirm(ar[0]);
  });
//  define_libfunc("dumpobj", 1, 1, function(ar){
//    return eval(ar[0]);
//  });

}
//
// Dumper - graphical state dumper
//
with(BiwaScheme) {

BiwaScheme.Dumper = BiwaScheme.Class.create({
  initialize: function(dumparea){
    this.dumparea = dumparea || $("#dumparea")[0] || null;
    this.reset();
  },

  reset: function(){
    if(this.dumparea){
      // Note: this is for repl.html (needs refactoring..)
      $(this.dumparea).empty();
    }
    this.n_folds = 0;
    this.closures = [];
    this.n_dumps = 0;
    this.cur = -1;
    this.is_folded = true;
  },

  is_opc: function(obj){
    return (obj instanceof Array && typeof(obj[0]) == 'string');
  },

  dump_pad: "&nbsp;&nbsp;&nbsp;",
  dump_opc: function(obj, level, nested){
    var s="";
    var pad1="", pad2="";
    var level = level || 0;
    var nested = nested || false;
    _.times(level, _.bind(function(){ pad1 += this.dump_pad; }, this));
    _.times((level+1), _.bind(function(){ pad2 += this.dump_pad; }, this));

    s += pad1 + '[<span class="dump_opecode">' + obj[0] + '</span>';
    var i = 1;
    while(!(obj[i] instanceof Array) && i<obj.length){
      if(obj[0] == "constant")
        s += "&nbsp;<span class='dump_constant'>" + 
             this.dump_obj(obj[i]) + "</span>";
      else
        s += "&nbsp;" + this.dump_obj(obj[i]);
      i++;
    }
    if(i < obj.length) s += '<br>\n';
    for(; i<obj.length; i++){
      if(this.is_opc(obj[i])){
        s += this.dump_opc(obj[i], (i == obj.length-1 ? level : level+1), true);
      }
      else{
        s += (i == obj.length-1) ? pad1 : pad2;
        s += this.dump_obj(obj[i]);
      }
      if(i != obj.length-1) s += "<br>\n";
    }
    s += "]";
    return (nested ? s : this.add_fold(s));
  },

  fold_limit: 20,
  add_fold: function(s){
    var lines = s.split(/<br>/gmi);

    if(lines.length > this.fold_limit){
      var fold_btn   = " <span style='text-decoration:underline; color:blue; cursor:pointer;'" +
                           "onclick='BiwaScheme.Dumper.toggle_fold("+this.n_folds+")'>more</span>";
      var fold_start = "<div style='display:none' class='fold"+this.n_folds+"'>";
      var fold_end   = "</div>";
      this.n_folds++;
      return [
        lines.slice(0, this.fold_limit).join("<br>"), fold_btn,
        fold_start, lines.slice(this.fold_limit).join("<br>"), fold_end
      ].join("");
    }
    else{
      return s;
    }
  },

  stack_max_len: 80,
  dump_stack: function(stk, size){
    if(stk === null || stk === undefined) return BiwaScheme.inspect(stk);
    var s = "<table>";

    // show the 'physical' stack top
    if (stk.length == 0){
      s += "<tr><td class='dump_dead'>(stack is empty)</td></tr>";
    }
    else if (size < stk.length){
      var l = stk.length - 1;
      s += "<tr><td class='dump_dead'>[" + l + "]</td>" +
           "<td class='dump_dead'>" + 
           _.str.truncate(this.dump_obj(stk[l]), this.stack_max_len) +
           "</td></tr>";
    }

    // show the element in the stack
    for(var i=size-1; i >= 0; i--){
      s += "<tr><td class='dump_stknum'>[" + i + "]</td>" +
           "<td>" + _.str.truncate(this.dump_obj(stk[i]), this.stack_max_len) +
           "</td></tr>";
    }
    return s + "</table>";
  },

  dump_object: function(obj){
    var a = [];
    for(var k in obj){
      //if(this.prototype[k]) continue;
      a.push( k.toString() );//+" => "+this[k].toString() );
    }
    return "#<Object{"+a.join(",")+"}>";
  },

  dump_closure: function(cls){
    if(cls.length == 0) return "[]";

    var cls_num = null;
    for(var i=0; i<this.closures.length; i++){
      if(this.closures[i] == cls) cls_num = i;
    }
    if(cls_num == null){
      cls_num = this.closures.length;
      this.closures.push(cls);
    }

    var c = _.clone(cls);
    var body = c.shift();
    return [
      "c", cls_num, " <span class='dump_closure'>free vars :</span> ",
      this.dump_obj(c), " <span class='dump_closure'>body :</span> ",
      _.str.truncate(this.dump_obj(body), 100)
    ].join("");
  },

  dump_obj: function(obj){
    if(obj && typeof(obj.to_html) == 'function')
      return obj.to_html();
    else{
      var s = write_ss(obj, true); //true=Array mode
      if(s == "[object Object]") s = this.dump_object(obj);
      return _.escape(s);
    }
  },

  dump: function(obj){
    var s = "";
    if(obj instanceof Object){
      s += "<table>";

      // header
      s += "<tr><td colspan='4'>" + 
           "<a href='#' class='header'>" +
           "#"+this.n_dumps+"</a></td></tr>";

      // registers
      _.each(_.keys(obj), _.bind(function(key){
        var value = obj[key];
        if(key!="x" && key != "stack"){
          value = (key=="c" ? this.dump_closure(value)
                            : this.dump_obj(value));
          s += "<tr><td>" + key + ": </td>" +
               "<td colspan='3'>" + value + "</td></tr>";
        }
      }, this));
      s += "<tr><td>x:</td><td>" +
           (this.is_opc(obj["x"]) ? this.dump_opc(obj["x"])
                                  : this.dump_obj(obj["x"])) +
           "</td>";

      // stack
      s += "<td style='border-left: 1px solid black'>stack:</td><td>" +
           this.dump_stack(obj["stack"], obj["s"]) +
           "</td></tr>";
      s += "</table>";
    }
    else{
      s = _.escape(BiwaScheme.inspect(obj)) + "<br>\n";
    }
    var dumpitem = $("<div/>", { class: ("dump" + this.n_dumps) });
    dumpitem.html(s);
    $(this.dumparea).append(dumpitem);
    (_.bind(function(n){
        $(".header", this.dump_el(this.n_dumps)).click(_.bind(function(){
        this.dump_move_to(n);
        this.dump_fold();
      }, this));
    }, this))(this.n_dumps);
    dumpitem.hide();
    this.n_dumps++;
  },

  //
  // UI
  //
  dump_el: function(n) {
    return $(".dump"+n, this.dumparea);
  },
  dump_move_to: function(n){
    if (0 <= n && n <= this.n_dumps){
      this.dump_el(this.cur).hide();
      this.cur = n;
      this.dump_el(this.cur).show();
    }
  },

  dump_move: function(dir){
    if(0 <= this.cur && this.cur < this.n_dumps)
      this.dump_el(this.cur).hide();

    if(0 <= this.cur+dir && this.cur+dir < this.n_dumps)
      this.cur += dir;

    this.dump_el(this.cur).show();
  },

  dump_fold: function(){
    for(var i=0; i<this.n_dumps; i++)
      if(i!=this.cur) this.dump_el(i).hide();

    this.is_folded = true;
  },

  dump_unfold: function(){
    for(var i=0; i<this.n_dumps; i++)
      this.dump_el(i).show();

    this.is_folded = false;
  },

  dump_toggle_fold: function(){
    if(this.is_folded)
      this.dump_unfold();
    else
      this.dump_fold();
  }
});
} // with(BiwaScheme);

BiwaScheme.Dumper.toggle_fold = function(n){
  $(".fold"+n, this.dumparea).toggle();
};
Console = {}

BiwaScheme.Port.current_error =
BiwaScheme.Port.current_output = new BiwaScheme.Port.CustomOutput(
  function (str) {
    var console;
    var text;
    console = $("#bs-console");
    if (console[0]) {
    	text = _.escape(str);
    	var span = $("<span>");
    	span.html(text.replace(/\n/g,"<br>").replace(/ /g,"&nbsp;"));
    	console.append(span);
    }
  }
);

BiwaScheme.Port.current_input = new BiwaScheme.Port.CustomInput(
  function (callback) {
    var form = $("<form/>");
    form.html("<input id='webscheme-read-line' type='text'><input type='submit' value='ok'>");
    $("#bs-console").append(form);
    form.submit(function(){
      var input = $("#webscheme-read-line").val();
      form.remove();
      callback(input);
      return false;
    });
  }
);


Console.puts = function(str, no_newline) {
  BiwaScheme.Port.current_output.put_string(str + (no_newline ? "" : "\n"))
};

Console.p = function (/*ARGS*/){
  BiwaScheme.Port.current_output.put_string(
    "p> "+_.map(_.toArray(arguments), BiwaScheme.inspect).join(" ")
  );
};
//
// release_initializer.js - read user's program and eval it (if it exists)
//
// This file is put on the end the lib/biwascheme.js.
//
(function(){ //local namespace
  var dumper = null;
  if ($("#biwascheme-debugger")[0]) {
    dumper = new BiwaScheme.Dumper($("#biwascheme-debugger")[0]);
  }

  // Error handler (show message to console div)
  var onError = function(e, state){
    BiwaScheme.Port.current_error.put_string(e.message + "\n");
    if (dumper) {
      dumper.dump(state);
      dumper.dump_move(1);
    } else if (typeof(console) !== "undefined" && console.error) {
      console.error(e.message);
    } else {
      throw(e);
    }
  };

  var run = function(script) {
    var intp = new BiwaScheme.Interpreter(onError);
    try{
      intp.evaluate(script, function(){});
    }
    catch(e){
      onError(e);
    }
  };

  // Start user's program (old style)
  var script = $("script[src$='biwascheme.js']").html() ||
               $("script[src$='biwascheme-min.js']").html();
  if (script) run(script);

  // Start user's program (new style)
  $(function(){
    $("script[type='text/biwascheme']").each(function(){
      run($(this).html());
    });
  });
})();
