(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[969],{7784:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fyb/fryyourbrain",function(){return e(1282)}])},3836:function(n,t,e){"use strict";e.d(t,{O:function(){return r}});var r=function(n){var t=document.getElementById(n);t&&(t.scrollTop=t.scrollHeight)}},6298:function(n,t,e){"use strict";e.d(t,{D:function(){return a}});var r=e(7294);function a(n){var t=(0,r.useRef)();return(0,r.useEffect)((function(){t.current=n})),t.current}},5079:function(n,t,e){"use strict";e.r(t);var r=e(5893),a=e(7294);function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function i(n){return function(n){if(Array.isArray(n))return o(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"===typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(n){var t=n.gameid,e=void 0===t?"":t,o=n.client,u=n.nickname,c=n.msgs,s=void 0===c?[]:c,l=n.setMsgs,f=n.participant,d=void 0===f?"":f,p=(0,a.useState)(""),v=p[0],m=p[1],y=function(n){var t=new Date(n),e=t.getHours(),r=t.getMinutes(),a="@";return e<10&&(a+="0"),a=a+e.toString()+":",r<10&&(a+="0"),a+=r.toString()};return(0,r.jsx)("div",{id:"ScrollableChat",className:"pbChat",children:(0,r.jsx)("table",{className:"pbChatTable",children:(0,r.jsxs)("tbody",{children:[s.map((function(n,t){return(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{className:"pbChatFrom",children:[y(n.created)," ",n.from]}),(0,r.jsx)("td",{className:"pbChatMsg",children:n.msg})]},"ChatMessage".concat(t))})),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:""===u?(0,r.jsx)("span",{children:"Please enter nickname to use chat"}):(0,r.jsx)("textarea",{className:""===v?"pbChatInputEmpty":"pbChatInput",name:"nextmsgInputArea",value:v,onChange:function(n){m(n.target.value)},onKeyDownCapture:function(n){if("Enter"===n.key&&v.length>0){n.preventDefault();var t=i(s).concat([{from:u,msg:v}]),r=v;return l(t),m(""),void o.send({gameid:e,nickname:u,type:o.clientType,func:"chat",sender:d,sendmsg:r})}if("Backspace"===n.key&&v.length>0){n.preventDefault();var a=v.slice(0,v.length-1);m(a)}},placeholder:"chat..."})})})]})})})}},5877:function(n,t,e){var r=e(3570),a=e(1171),o=a;o.v1=r,o.v4=a,n.exports=o},5327:function(n){for(var t=[],e=0;e<256;++e)t[e]=(e+256).toString(16).substr(1);n.exports=function(n,e){var r=e||0,a=t;return[a[n[r++]],a[n[r++]],a[n[r++]],a[n[r++]],"-",a[n[r++]],a[n[r++]],"-",a[n[r++]],a[n[r++]],"-",a[n[r++]],a[n[r++]],"-",a[n[r++]],a[n[r++]],a[n[r++]],a[n[r++]],a[n[r++]],a[n[r++]]].join("")}},5217:function(n){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var e=new Uint8Array(16);n.exports=function(){return t(e),e}}else{var r=new Array(16);n.exports=function(){for(var n,t=0;t<16;t++)0===(3&t)&&(n=4294967296*Math.random()),r[t]=n>>>((3&t)<<3)&255;return r}}},3570:function(n,t,e){var r,a,o=e(5217),i=e(5327),u=0,c=0;n.exports=function(n,t,e){var s=t&&e||0,l=t||[],f=(n=n||{}).node||r,d=void 0!==n.clockseq?n.clockseq:a;if(null==f||null==d){var p=o();null==f&&(f=r=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==d&&(d=a=16383&(p[6]<<8|p[7]))}var v=void 0!==n.msecs?n.msecs:(new Date).getTime(),m=void 0!==n.nsecs?n.nsecs:c+1,y=v-u+(m-c)/1e4;if(y<0&&void 0===n.clockseq&&(d=d+1&16383),(y<0||v>u)&&void 0===n.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");u=v,c=m,a=d;var h=(1e4*(268435455&(v+=122192928e5))+m)%4294967296;l[s++]=h>>>24&255,l[s++]=h>>>16&255,l[s++]=h>>>8&255,l[s++]=255&h;var g=v/4294967296*1e4&268435455;l[s++]=g>>>8&255,l[s++]=255&g,l[s++]=g>>>24&15|16,l[s++]=g>>>16&255,l[s++]=d>>>8|128,l[s++]=255&d;for(var b=0;b<6;++b)l[s+b]=f[b];return t||i(l)}},1171:function(n,t,e){var r=e(5217),a=e(5327);n.exports=function(n,t,e){var o=t&&e||0;"string"==typeof n&&(t="binary"===n?new Array(16):null,n=null);var i=(n=n||{}).random||(n.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var u=0;u<16;++u)t[o+u]=i[u];return t||a(i)}}},function(n){n.O(0,[359,490,282,774,888,179],(function(){return t=7784,n(n.s=t);var t}));var t=n.O();_N_E=t}]);