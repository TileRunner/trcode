(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[437],{7666:function(t,e,n){"use strict";n.r(e);var r=n(5893),a=n(1385),i=n(7294);e.default=function(t){var e=t.gameid,n=void 0===e?"":e,c=t.client,o=t.nickname,s=t.msgs,u=void 0===s?[]:s,l=t.setMsgs,d=t.participant,f=void 0===d?"":d,p=(0,i.useState)(""),h=p[0],m=p[1],g=function(t){var e=new Date(t),n=e.getHours(),r=e.getMinutes(),a="@";return n<10&&(a+="0"),a=a+n.toString()+":",r<10&&(a+="0"),a+=r.toString()};return(0,r.jsx)("div",{id:"ScrollableChat",className:"pbChat",children:(0,r.jsx)("table",{className:"pbChatTable",children:(0,r.jsxs)("tbody",{children:[u.map((function(t,e){return(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{className:"pbChatFrom",children:[g(t.created)," ",t.from]}),(0,r.jsx)("td",{className:"pbChatMsg",children:t.msg})]},"ChatMessage".concat(e))})),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:""===o?(0,r.jsx)("span",{children:"Please enter nickname to use chat"}):(0,r.jsx)("textarea",{className:""===h?"pbChatInputEmpty":"pbChatInput",name:"nextmsgInputArea",value:h,onChange:function(t){m(t.target.value)},onKeyDownCapture:function(t){if("Enter"===t.key&&h.length>0){t.preventDefault();var e=[].concat((0,a.Z)(u),[{from:o,msg:h}]),r=h;return l(e),m(""),void c.send({gameid:n,nickname:o,type:c.clientType,func:"chat",sender:f,sendmsg:r})}if("Backspace"===t.key&&h.length>0){t.preventDefault();var i=h.slice(0,h.length-1);m(i)}},placeholder:"chat..."})})})]})})})}},139:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pb/chatSection",function(){return n(7666)}])},1385:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,{Z:function(){return a}})}},function(t){t.O(0,[774,888,179],(function(){return e=139,t(t.s=e);var e}));var e=t.O();_N_E=e}]);