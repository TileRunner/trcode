(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[681],{3939:function(e,n,t){"use strict";t.d(n,{O:function(){return a}});var a=function(e){var n=document.getElementById(e);n&&(n.scrollTop=n.scrollHeight)}},2374:function(e,n,t){"use strict";t.d(n,{D:function(){return r}});var a=t(7294);function r(e){var n=(0,a.useRef)();return(0,a.useEffect)((function(){n.current=e})),n.current}},7666:function(e,n,t){"use strict";t.r(n);var a=t(5893),r=t(1385),c=t(7294);n.default=function(e){var n=e.gameid,t=void 0===n?"":n,s=e.client,i=e.nickname,u=e.msgs,o=void 0===u?[]:u,l=e.setMsgs,d=e.participant,f=void 0===d?"":d,h=(0,c.useState)(""),p=h[0],m=h[1],g=function(e){var n=new Date(e),t=n.getHours(),a=n.getMinutes(),r="@";return t<10&&(r+="0"),r=r+t.toString()+":",a<10&&(r+="0"),r+=a.toString()};return(0,a.jsx)("div",{id:"ScrollableChat",className:"pbChat",children:(0,a.jsx)("table",{className:"pbChatTable",children:(0,a.jsxs)("tbody",{children:[o.map((function(e,n){return(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{className:"pbChatFrom",children:[g(e.created)," ",e.from]}),(0,a.jsx)("td",{className:"pbChatMsg",children:e.msg})]},"ChatMessage".concat(n))})),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:"2",children:""===i?(0,a.jsx)("span",{children:"Please enter nickname to use chat"}):(0,a.jsx)("textarea",{className:""===p?"pbChatInputEmpty":"pbChatInput",name:"nextmsgInputArea",value:p,onChange:function(e){m(e.target.value)},onKeyDownCapture:function(e){if("Enter"===e.key&&p.length>0){e.preventDefault();var n=[].concat((0,r.Z)(o),[{from:i,msg:p}]),a=p;return l(n),m(""),void s.send({gameid:t,nickname:i,type:s.clientType,func:"chat",sender:f,sendmsg:a})}if("Backspace"===e.key&&p.length>0){e.preventDefault();var c=p.slice(0,p.length-1);m(c)}},placeholder:"chat..."})})})]})})})}},1313:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fyb/game",function(){return t(1863)}])}},function(e){e.O(0,[612,863,774,888,179],(function(){return n=1313,e(e.s=n);var n}));var n=e.O();_N_E=n}]);