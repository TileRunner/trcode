(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[189],{2284:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fyb/thinChatSection",function(){return e(6832)}])},6832:function(t,n,e){"use strict";e.r(n);var r=e(5893),a=e(7294);function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function c(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"===typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=function(t){var n=t.gameid,e=void 0===n?"":n,i=t.client,o=t.nickname,s=t.msgs,l=void 0===s?[]:s,u=t.setMsgs,h=t.participant,f=void 0===h?"":h,d=(0,a.useState)(""),m=d[0],p=d[1];return(0,r.jsx)("div",{id:"ScrollableChat",className:"thinChat",children:(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[l.map((function(t,n){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("tr",{children:(0,r.jsx)("td",{className:"thinChatFrom",children:t.from})},"ChatMessageFrom".concat(n)),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{className:"thinChatMsg",children:t.msg})},"ChatMessageMsg".concat(n))]})})),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:""===o?(0,r.jsx)("span",{children:"Please enter nickname to use chat"}):(0,r.jsx)("textarea",{className:""===m?"thinChatInputEmpty":"thinChatInput",name:"nextmsgInputArea",value:m,onChange:function(t){p(t.target.value)},onKeyDownCapture:function(t){if("Enter"===t.key&&m.length>0){t.preventDefault();var n=c(l).concat([{from:o,msg:m}]),r=m;return u(n),p(""),void i.send({gameid:e,nickname:o,type:i.clientType,func:"chat",sender:f,sendmsg:r})}if("Backspace"===t.key&&m.length>0){t.preventDefault();var a=m.slice(0,m.length-1);p(a)}},placeholder:"chat..."})})})]})})})}}},function(t){t.O(0,[774,888,179],(function(){return n=2284,t(t.s=n);var n}));var n=t.O();_N_E=n}]);