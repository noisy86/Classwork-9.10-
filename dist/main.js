!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(e,t){const r=document.createElement("div"),n=document.createElement("h2");n.innerText=e;const i=document.createElement("p");i.innerText=t,r.appendChild(n),r.appendChild(i),document.body.appendChild(r)}r.r(t);const i=[{title:"Article 1",description:"Lorem ipsum"},{title:"Article 2",description:"Lorem ipsum"},{title:"Article 3",description:"Lorem ipsum"},{title:"Article 4",description:"Lorem ipsum"},{title:"Article 5",description:"Lorem ipsum"},{title:"Article 6",description:"Lorem ipsum"},{title:"Article 7",description:"Lorem ipsum"},{title:"Article 8",description:"Lorem ipsum"}];window.onload=function(){for(let e=0;e<i.length;e++)n(i[e].title,i[e].description)}}]);