(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{6595:function(e,n,t){"use strict";t.d(n,{v8:function(){return r},RH:function(){return a},dK:function(){return i},ap:function(){return s},b6:function(){return c},qg:function(){return o},Vj:function(){return l},kX:function(){return d},Ov:function(){return u},Bd:function(){return m},_k:function(){return h},g9:function(){return f},Ji:function(){return b},jN:function(){return g},bS:function(){return N},Ix:function(){return x},Am:function(){return j},oW:function(){return p},ik:function(){return v},QY:function(){return w},i4:function(){return k},_W:function(){return y},$B:function(){return E},fl:function(){return S},Cr:function(){return I},L8:function(){return A},Qt:function(){return C},fi:function(){return R},ix:function(){return O},me:function(){return P},WS:function(){return G},GP:function(){return T}});var r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],a=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],i="U",s="P",c="G",o="O",l="E",d=s,u=c,m="X",h="run_circle",f="security",b="PRISONERS",g="GUARDS",N="PLAY",x="SWAP",j="PASS",p="r",v="d",w="",k="",y=["Escapee: \"I'm free! I'm free!\". Little kid: \"I'm four! I'm four!\"","Two peanuts were walking down a back alley. One was a salted.","The psychic dwarf escaped! There's a small medium at large!","What do you call a vegetable who has escaped prison? An escapea!","The prisoners fave punctuation is a period. It marks the end of a sentence!","Prison is only one word, but to robbers it's a whole sentence."],E=6e4,S=["A","A","A","B","C","D","E","E","E","E","F","G","H","I","I","I","J","K","L","M","N","N","O","O","O","P","Q","R","R","S","T","T","U","V","W","X","Y","Z","?","?"],I=["A","A","A","A","A","B","C","D","D","E","E","E","E","E","E","F","G","H","I","I","I","I","I","J","K","L","L","M","N","N","N","O","O","O","O","P","Q","R","R","R","S","S","T","T","T","U","V","W","X","Y","Z","?","?"],A=["A","A","A","A","A","A","A","B","B","C","C","D","D","D","E","E","E","E","E","E","E","E","E","F","G","G","H","H","I","I","I","I","I","I","I","J","K","L","L","L","M","M","N","N","N","N","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","S","S","S","T","T","T","T","U","U","U","V","W","X","Y","Z","?","?"],C=["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z","?","?"],R="EscapeHatch",O="CenterSquare",P="style1",G="style2",T=""},3939:function(e,n,t){"use strict";t.d(n,{O:function(){return r}});var r=function(e){var n=document.getElementById(e);n&&(n.scrollTop=n.scrollHeight)}},6071:function(e,n,t){"use strict";var r=t(3848);var a=t(9448)(t(7294)),i=t(1689),s=t(2441),c=t(5749),o={};function l(e,n,t,r){if(e&&(0,i.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;o[n+"%"+t+(a?"%"+a:"")]=!0}}},5749:function(e,n,t){"use strict";var r=t(3848);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,o=(0,a.useRef)(),l=(0,a.useState)(!1),d=r(l,2),u=d[0],m=d[1],h=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||u||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,i=r.observer,s=r.elements;return s.set(e,n),i.observe(e),function(){s.delete(e),i.unobserve(e),0===s.size&&(i.disconnect(),c.delete(a))}}(e,(function(e){return e&&m(e)}),{rootMargin:n}))}),[t,n,u]);return(0,a.useEffect)((function(){if(!s&&!u){var e=(0,i.requestIdleCallback)((function(){return m(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[u]),[h,u]};var a=t(7294),i=t(8391),s="undefined"!==typeof IntersectionObserver;var c=new Map},7666:function(e,n,t){"use strict";t.r(n);var r=t(5893),a=t(1385),i=t(7294);n.default=function(e){var n=e.gameid,t=void 0===n?"":n,s=e.client,c=e.nickname,o=e.msgs,l=void 0===o?[]:o,d=e.setMsgs,u=e.participant,m=void 0===u?"":u,h=(0,i.useState)(""),f=h[0],b=h[1],g=function(e){var n=new Date(e),t=n.getHours(),r=n.getMinutes(),a="@";return t<10&&(a="0"+a),a=a+t.toString()+":",r<10&&(a="0"+a),a+=r.toString()};return(0,r.jsx)("div",{id:"ScrollableChat",className:"pbChat",children:(0,r.jsx)("table",{className:"pbChatTable",children:(0,r.jsxs)("tbody",{children:[l.map((function(e,n){return(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{className:"pbChatFrom",children:[g(e.created)," ",e.from]}),(0,r.jsx)("td",{className:"pbChatMsg",children:e.msg})]},"ChatMessage".concat(n))})),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:""===c?(0,r.jsx)("span",{children:"Please enter nickname to use chat"}):(0,r.jsx)("textarea",{className:""===f?"pbChatInputEmpty":"pbChatInput",name:"nextmsgInputArea",value:f,onChange:function(e){b(e.target.value)},onKeyDownCapture:function(e){if("Enter"===e.key&&f.length>0){e.preventDefault();var n=[].concat((0,a.Z)(l),[{from:c,msg:f}]),r=f;return d(n),b(""),void s.send({gameid:t,nickname:c,type:s.clientType,func:"chat",sender:m,sendmsg:r})}if("Backspace"===e.key&&f.length>0){e.preventDefault();var i=f.slice(0,f.length-1);b(i)}},placeholder:"chat..."})})})]})})})}},5916:function(e,n,t){"use strict";t.r(n);var r=t(5893),a=t(1385),i=t(7294),s=(t(1664),t(7666)),c=t(6595),o=t(3939),l="trButton";n.default=function(e){var n=e.setWhereto,t=e.client,d=e.setIsrejoin,u=e.wsmessage,m=e.gameid,h=e.setGameid,f=e.nickname,b=e.setNickname,g=e.setParticipant,N=e.racksize,x=e.setRacksize,j=(0,i.useState)([]),p=j[0],v=j[1],w=(0,i.useState)([]),k=w[0],y=w[1];function E(e){return function(e){for(var n=0;n<p.length;++n)if(p[n].gameid===e)return n;return-1}(e)>-1}function S(e){return 0===f.length?0:e.pname===f?2:e.gname?3:0}function I(e){return 0===f.length?0:e.gname===f?2:e.gname?"Game over"===e.gamestatus?4:0:1}function A(e){x(e)}return(0,i.useEffect)((function(){""!==u&&function(e){var n=JSON.parse(e);if("pb"===n.type&&"chat"===n.func&&!n.gameid&&n.nickname!==f){var t=[].concat((0,a.Z)(k),[{from:n.nickname,msg:n.sendmsg}]);return void y(t)}if("pb"===n.type&&"gamelist"===n.func){var r=[];n.gamelist.forEach((function(e){var n={gameid:e.gameid,pname:e.pname,gname:e.gname,gamestatus:e.whoseturn===c.Bd?"Game over":"Unfinished",racksize:e.racksize};r.push(n)})),v([].concat(r))}}(u)}),[u]),(0,i.useEffect)((function(){(0,o.O)("ScrollableChat")}),[k]),(0,r.jsxs)("div",{className:"trBackground",children:[(0,r.jsxs)("div",{className:"trTitle",children:["Prison Break Lobby\xa0",(0,r.jsx)("button",{className:"trButton",onClick:function(){n("menu")},children:(0,r.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),(0,r.jsxs)("div",{className:"w3-row",children:[(0,r.jsxs)("div",{className:"w3-col s9",children:[(0,r.jsx)("div",{className:"w3-container",children:(0,r.jsxs)("div",{className:"w3-bar",children:[(0,r.jsx)("div",{className:"w3-bar-item",children:(0,r.jsx)("h3",{children:(0,r.jsx)("span",{className:"trEmphasis",children:"All Participants >"})})}),(0,r.jsx)("div",{className:"w3-bar-item",children:(0,r.jsx)("label",{className:"h3 trParagraph",children:"Nickname:"})}),(0,r.jsx)("div",{className:"w3-bar-item",children:(0,r.jsx)("input",{className:"trParagraph",type:"text",name:"nickname",value:f,onChange:function(e){b(e.target.value)}})})]})}),(0,r.jsx)("div",{className:"w3-container",children:(0,r.jsxs)("div",{className:"w3-bar",children:[(0,r.jsx)("div",{className:"w3-bar-item",children:(0,r.jsx)("h3",{children:(0,r.jsx)("span",{className:"trEmphasis",children:"Prisoners >"})})}),(0,r.jsx)("div",{className:"w3-bar-item",children:(0,r.jsx)("label",{className:"h3 trParagraph",children:"Game ID:"})}),(0,r.jsx)("div",{className:"w3-bar-item",children:(0,r.jsx)("input",{className:"trParagraph",type:"text",name:"gameid",value:m,onChange:function(e){h(e.target.value)}})}),(0,r.jsx)("div",{className:"w3-bar-item",children:(0,r.jsx)("label",{className:"h3 trParagraph",children:"Rack Size:"})}),(0,r.jsxs)("div",{className:"w3-bar-item",children:[(0,r.jsxs)("div",{className:"w3-row",children:[(0,r.jsx)("button",{id:"selectracksize4",className:4===N?"pbLobbyRackSizeSelected":"pbLobbyRackSize",onClick:function(){return A(4)},"data-toggle":"tooltip",title:"4 letter racks, 9 x 9 board",autoFocus:!0,children:"4"}),(0,r.jsx)("button",{id:"selectracksize5",className:5===N?"pbLobbyRackSizeSelected":"pbLobbyRackSize",onClick:function(){return A(5)},"data-toggle":"tooltip",title:"5 letter racks, 11 x 11 board",children:"5"}),(0,r.jsx)("button",{id:"selectracksize6",className:6===N?"pbLobbyRackSizeSelected":"pbLobbyRackSize",onClick:function(){return A(6)},"data-toggle":"tooltip",title:"6 letter racks, 13 x 13 board",children:"6"}),(0,r.jsx)("button",{id:"selectracksize7",className:7===N?"pbLobbyRackSizeSelected":"pbLobbyRackSize",onClick:function(){return A(7)},"data-toggle":"tooltip",title:"7 letter racks, 15 x 15 board",children:"7"})]}),(0,r.jsx)("div",{className:"w3-row",children:(0,r.jsxs)("span",{className:"trParagraph",children:[N," letter racks, ",2*N+1," x ",2*N+1," board."]})})]}),(0,r.jsx)("div",{className:"w3-bar-item",children:(0,r.jsx)("button",{id:"startgame",className:l,onClick:function(){0===f.length?window.alert("Please enter nickname before starting a game"):m.length>0?E(m)?window.alert("Game already started with that id"):g(c.ap):window.alert("Please enter Game ID before starting a game")},children:"Start Game"})})]})}),(0,r.jsx)("div",{className:"w3-container",children:(0,r.jsxs)("div",{className:"w3-bar",children:[(0,r.jsx)("div",{className:"w3-bar-item",children:(0,r.jsx)("h3",{children:(0,r.jsx)("span",{className:"trEmphasis",children:"Guards >"})})}),(0,r.jsx)("div",{className:"w3-bar-item",children:(0,r.jsx)("span",{className:"trParagraph",children:(0,r.jsx)("h2",{children:'Find and click the "Join Game" button for your game.'})})})]})}),(0,r.jsx)("div",{className:"w3-container",children:(0,r.jsx)("div",{className:"w3-bar",children:(0,r.jsx)("div",{className:"w3-bar-item",children:(0,r.jsx)("h3",{className:"trWarning",children:'If you lost connection, find and click the "Reconnect" button for your nickname.'})})})}),(0,r.jsx)("div",{className:"w3-container",children:(0,r.jsxs)("div",{className:"w3-bar",children:[(0,r.jsx)("div",{className:"w3-bar-item",children:(0,r.jsx)("span",{className:"trParagraph h3",children:"Game list:"})}),(0,r.jsx)("div",{className:"w3-bar-item",children:(0,r.jsxs)("table",{className:"w3-table-all w3-card-4",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"w3-blue h4 myCommonFont",children:[(0,r.jsx)("th",{className:"w3-border-right",children:"Game ID"}),(0,r.jsx)("th",{className:"w3-border-right",children:"Prisoners"}),(0,r.jsx)("th",{className:"w3-border-right",children:"Guards"}),(0,r.jsx)("th",{className:"w3-border-right",children:"Rack Size"}),(0,r.jsx)("th",{children:"Game Status"}),(0,r.jsx)("th",{className:"w3-border-left",children:"Delete"})]})}),(0,r.jsx)("tbody",{children:p.map((function(e,n){return(0,r.jsxs)("tr",{className:"myCommonFont w3-grey w3-hover-green",children:[(0,r.jsx)("td",{className:"w3-border-right",children:(0,r.jsx)("b",{children:e.gameid})}),2===S(e)?(0,r.jsx)("td",{id:"PrisonersRejoin".concat(n),className:"w3-border-right",children:(0,r.jsx)("button",{className:"w3-button w3-red w3-round w3-hover-black",onClick:function(){d(!0),h(e.gameid),g(c.ap),x(e.racksize)},children:"Reconnect"})}):3===S(e)?(0,r.jsx)("td",{id:"PrisonersObserve".concat(n),className:"w3-border-right",children:(0,r.jsx)("button",{className:"w3-button w3-yellow w3-round w3-hover-black",onClick:function(){d(!1),h(e.gameid),g(c.qg),x(e.racksize)},children:"Observe"})}):(0,r.jsx)("td",{id:"PrisonersNoAction".concat(n),className:"w3-border-right",children:"No action available"}),2===I(e)?(0,r.jsx)("td",{id:"GuardsRejoin".concat(n),className:"w3-border-right",children:(0,r.jsx)("button",{className:"w3-button w3-red w3-round w3-hover-black",onClick:function(){d(!0),h(e.gameid),g(c.b6),x(e.racksize)},children:"Reconnect"})}):1===I(e)?(0,r.jsx)("td",{id:"GuardsJoin".concat(n),className:"w3-border-right",children:(0,r.jsx)("button",{className:l,onClick:function(){h(e.gameid),g(c.b6),x(e.racksize)},children:"Join Game"})}):4===I(e)?(0,r.jsx)("td",{id:"GuardsExamine".concat(n),className:"w3-border-right",children:(0,r.jsx)("button",{className:l,onClick:function(){h(e.gameid),g(c.Vj),x(e.racksize)},children:"Examine Game"})}):(0,r.jsx)("td",{id:"GuardsNoAction".concat(n),className:"w3-border-right",children:"No action available"}),(0,r.jsx)("td",{id:"RackSize".concat(n),className:"w3-center w3-border-right",children:e.racksize}),(0,r.jsx)("td",{id:"GameStatus".concat(n),children:e.gamestatus}),(0,r.jsx)("td",{id:"DeleteGame".concat(n),className:"w3-border-left",children:("TileRunner"===f||f===e.pname||f===e.gname)&&(0,r.jsx)("button",{className:"w3-button w3-red w3-border w3-round w3-hover-black",onClick:function(){t.send({type:"pb",func:"deletegame",gameid:e.gameid})},children:"Delete Game"})})]},"OtherGame".concat(n))}))})]})})]})})]}),(0,r.jsx)("div",{className:"w3-col s3",children:(0,r.jsx)(s.default,{client:t,nickname:f,msgs:k,setMsgs:y})})]}),(0,r.jsx)("div",{className:"trParagraph",children:(0,r.jsx)("h1",{children:"Have fun!"})})]})}},4698:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pb/lobby",function(){return t(5916)}])},1664:function(e,n,t){t(6071)},1385:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{Z:function(){return a}})}},function(e){e.O(0,[774,888,179],(function(){return n=4698,e(e.s=n);var n}));var n=e.O();_N_E=n}]);