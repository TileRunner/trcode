(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[969],{7784:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fyb/fryyourbrain",function(){return n(1282)}])},3836:function(e,t,n){"use strict";n.d(t,{O:function(){return r}});var r=function(e){var t=document.getElementById(e);t&&(t.scrollTop=t.scrollHeight)}},6298:function(e,t,n){"use strict";n.d(t,{D:function(){return a}});var r=n(7294);function a(e){var t=(0,r.useRef)();return(0,r.useEffect)((function(){t.current=e})),t.current}},5079:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(7294),i=n(5697),s=n.n(i);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=function(e){var t=e.gameid,n=void 0===t?"":t,i=e.client,s=e.nickname,c=e.msgs,o=void 0===c?[]:c,l=e.setMsgs,f=e.participant,d=void 0===f?"":f,p=(0,a.useState)(""),m=p[0],h=p[1],g=function(e){var t=new Date(e),n=t.getHours(),r=t.getMinutes(),a="@";return n<10&&(a+="0"),a=a+n.toString()+":",r<10&&(a+="0"),a+=r.toString()};return(0,r.jsx)("div",{id:"ScrollableChat",className:"pbChat",children:(0,r.jsx)("table",{className:"pbChatTable",children:(0,r.jsxs)("tbody",{children:[o.map((function(e,t){return(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{className:"pbChatFrom",children:[g(e.created)," ",e.from]}),(0,r.jsx)("td",{className:"pbChatMsg",children:e.msg})]},"ChatMessage".concat(t))})),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:""===s?(0,r.jsx)("span",{children:"Please enter nickname to use chat"}):(0,r.jsx)("textarea",{className:""===m?"pbChatInputEmpty":"pbChatInput",name:"nextmsgInputArea",value:m,onChange:function(e){h(e.target.value)},onKeyDownCapture:function(e){if("Enter"===e.key&&m.length>0){e.preventDefault();var t=Date.now(),r=u(o).concat([{created:t,from:s,msg:m}]),a=m;return l(r),h(""),void i.send({gameid:n,nickname:s,type:i.clientType,func:"chat",sender:d,sendmsg:a,created:t})}if("Backspace"===e.key&&m.length>0){e.preventDefault();var c=m.slice(0,m.length-1);h(c)}},placeholder:"chat..."})})})]})})})};o.propTypes={gameid:s().string.isRequired,client:s().any,nickname:s().string.isRequired,msgs:s().arrayOf(s().string),setMsgs:s().func.isRequired,participant:s().string.isRequired},t.default=o}},function(e){e.O(0,[359,490,282,774,888,179],(function(){return t=7784,e(e.s=t);var t}));var t=e.O();_N_E=t}]);