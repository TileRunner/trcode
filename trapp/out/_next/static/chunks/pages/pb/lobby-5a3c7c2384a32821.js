(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{4698:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pb/lobby",function(){return e(5211)}])},7554:function(n,t,e){"use strict";e.d(t,{v8:function(){return r},RH:function(){return u},dK:function(){return i},ap:function(){return a},b6:function(){return o},qg:function(){return c},Vj:function(){return s},kX:function(){return f},Ov:function(){return l},Bd:function(){return d},_k:function(){return p},g9:function(){return m},Ji:function(){return h},jN:function(){return E},bS:function(){return A},Ix:function(){return I},Am:function(){return g},oW:function(){return y},ik:function(){return O},QY:function(){return b},i4:function(){return S},_W:function(){return v},$B:function(){return N},fl:function(){return T},Cr:function(){return R},L8:function(){return C},Qt:function(){return w},fi:function(){return k},ix:function(){return D},me:function(){return P},WS:function(){return j},GP:function(){return _}});var r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],u=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],i="U",a="P",o="G",c="O",s="E",f=a,l=o,d="X",p="run_circle",m="security",h="PRISONERS",E="GUARDS",A="PLAY",I="SWAP",g="PASS",y="r",O="d",b="",S="",v=["Escapee: \"I'm free! I'm free!\". Little kid: \"I'm four! I'm four!\"","Two peanuts were walking down a back alley. One was a salted.","The psychic dwarf escaped! There's a small medium at large!","What do you call a vegetable who has escaped prison? An escapea!","The prisoners fave punctuation is a period. It marks the end of a sentence!","Prison is only one word, but to robbers it's a whole sentence."],N=6e4,T=["A","A","A","B","C","D","E","E","E","E","F","G","H","I","I","I","J","K","L","M","N","N","O","O","O","P","Q","R","R","S","T","T","U","V","W","X","Y","Z","?","?"],R=["A","A","A","A","A","B","C","D","D","E","E","E","E","E","E","F","G","H","I","I","I","I","I","J","K","L","L","M","N","N","N","O","O","O","O","P","Q","R","R","R","S","S","T","T","T","U","V","W","X","Y","Z","?","?"],C=["A","A","A","A","A","A","A","B","B","C","C","D","D","D","E","E","E","E","E","E","E","E","E","F","G","G","H","H","I","I","I","I","I","I","I","J","K","L","L","L","M","M","N","N","N","N","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","S","S","S","T","T","T","T","U","U","U","V","W","X","Y","Z","?","?"],w=["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z","?","?"],k="EscapeHatch",D="CenterSquare",P="style1",j="style2",_=""},3836:function(n,t,e){"use strict";e.d(t,{O:function(){return r}});var r=function(n){var t=document.getElementById(n);t&&(t.scrollTop=t.scrollHeight)}},5079:function(n,t,e){"use strict";e.r(t);var r=e(5893),u=e(7294),i=e(5697),a=e.n(i);function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function c(n){return function(n){if(Array.isArray(n))return o(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"===typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=function(n){var t=n.gameid,e=void 0===t?"":t,i=n.client,a=n.nickname,o=n.msgs,s=void 0===o?[]:o,f=n.setMsgs,l=n.participant,d=void 0===l?"":l,p=(0,u.useState)(""),m=p[0],h=p[1],E=function(n){var t=new Date(n),e=t.getHours(),r=t.getMinutes(),u="@";return e<10&&(u+="0"),u=u+e.toString()+":",r<10&&(u+="0"),u+=r.toString()};return(0,r.jsx)("div",{id:"ScrollableChat",className:"pbChat",children:(0,r.jsx)("table",{className:"pbChatTable",children:(0,r.jsxs)("tbody",{children:[s.map((function(n,t){return(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{className:"pbChatFrom",children:[E(n.created)," ",n.from]}),(0,r.jsx)("td",{className:"pbChatMsg",children:n.msg})]},"ChatMessage".concat(t))})),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:""===a?(0,r.jsx)("span",{children:"Please enter nickname to use chat"}):(0,r.jsx)("textarea",{className:""===m?"pbChatInputEmpty":"pbChatInput",name:"nextmsgInputArea",value:m,onChange:function(n){h(n.target.value)},onKeyDownCapture:function(n){if("Enter"===n.key&&m.length>0){n.preventDefault();var t=Date.now(),r=c(s).concat([{created:t,from:a,msg:m}]),u=m;return f(r),h(""),void i.send({gameid:e,nickname:a,type:i.clientType,func:"chat",sender:d,sendmsg:u,created:t})}if("Backspace"===n.key&&m.length>0){n.preventDefault();var o=m.slice(0,m.length-1);h(o)}},placeholder:"chat..."})})})]})})})};s.propTypes={gameid:a().string.isRequired,client:a().any,nickname:a().string.isRequired,msgs:a().arrayOf(a().string),setMsgs:a().func.isRequired,participant:a().string.isRequired},t.default=s}},function(n){n.O(0,[211,774,888,179],(function(){return t=4698,n(n.s=t);var t}));var t=n.O();_N_E=t}]);