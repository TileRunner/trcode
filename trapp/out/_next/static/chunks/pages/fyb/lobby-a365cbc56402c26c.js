(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[132],{4604:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fyb/lobby",function(){return t(3371)}])},4328:function(e,n,t){"use strict";t.d(n,{j6:function(){return i},dK:function(){return a},oZ:function(){return s},e:function(){return r},hA:function(){return c},iS:function(){return l},$B:function(){return d}});var i="fyb",a="U",s="P",r="GAME_DATA",c="GAME_LIST",l="CHAT_DATA",d=2e4},1484:function(e,n,t){"use strict";t.r(n);var i=t(5893),a=t(7294),s=t(4328);n.default=function(e){var n=e.client,t=e.thisisme,r=e.nickname,c=e.gameid,l=e.setGameid,d=(0,a.useState)(2),u=d[0],o=d[1],m=(0,a.useState)(11),h=m[0],j=m[1],f=(0,a.useState)(!0),x=f[0],g=f[1];return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"trSubtitle",children:"Create Game"}),(0,i.jsx)("div",{className:"trOptionsDiv",children:(0,i.jsx)("div",{className:x?"trCheckbox On":"trCheckbox Off",onClick:function(){g(!x)},"data-toggle":"tooltip",title:"Whether guess must be valid words",children:(0,i.jsx)("label",{children:"Guesses must be valid words"})})}),(0,i.jsx)("table",{className:"trTable",children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("label",{children:"Game ID:"})}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"text",name:"gameid",value:c,onChange:function(e){l(e.target.value)}})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("label",{children:"# Players:"})}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"number",name:"numPlayers",value:u,onChange:function(e){o(e.target.value)}})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("label",{children:"Pts to win:"})}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"number",name:"goal",value:h,onChange:function(e){j(e.target.value)}})})]})]})}),c&&u>1&&u<7&&h>2&&h<22&&(0,i.jsx)("button",{className:"trButton",id:"requestCreateGame",type:"submit",onClick:function(){var e=c.trim();l(e),n.send({type:s.j6,func:"create",thisisme:t,gameid:c,numPlayers:u,goal:h,nickname:r,timestamp:Date.now(),validOnly:x})},children:"SUBMIT"}),!c&&(0,i.jsx)("div",{className:"trWarning",children:"Game ID is required"}),!(u>1&&u<7)&&(0,i.jsx)("div",{className:"trWarning",children:"# Players is 2-6"}),!(h>2&&h<22)&&(0,i.jsx)("div",{className:"trWarning",children:"Pts to win is 3-21"})]})}},3371:function(e,n,t){"use strict";t.r(n);var i=t(5893),a=t(7294),s=t(4328),r=t(1484);function c(e,n,t,a){return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"trParagraph",children:"Game List:"}),(0,i.jsxs)("table",{className:"trTable",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"ID"}),(0,i.jsx)("th",{children:"Ppl"}),(0,i.jsx)("th",{children:"Pts"}),(0,i.jsx)("th",{children:"By"}),(0,i.jsx)("th",{children:"State"})]})}),(0,i.jsx)("tbody",{children:e.map((function(e,r){return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e.gameid}),(0,i.jsxs)("td",{children:[e.players.length,"/",e.numPlayers]}),(0,i.jsx)("td",{children:e.goal}),(0,i.jsx)("td",{children:e.players[0].nickname}),(0,i.jsx)("td",{children:u(e.players,a)?(0,i.jsx)("button",{className:"trButton",type:"submit",onClick:function(){!function(e,n,t,i){e.send({type:s.j6,func:"rejoin",thisisme:n,gameid:t,nickname:i,timestamp:Date.now()})}(n,t,e.gameid,a)},children:"REJOIN"},"rejoinButton".concat(r)):e.players.length<e.numPlayers?(0,i.jsx)("button",{className:"trButton",type:"submit",onClick:function(){!function(e,n,t,i){e.send({type:s.j6,func:"join",thisisme:n,gameid:t,nickname:i,timestamp:Date.now()})}(n,t,e.gameid,a)},children:"JOIN"},"joinButton".concat(r)):"In progress"})]})}))})]})]})}function l(e,n,t){return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"trParagraph",children:[(0,i.jsx)("label",{children:"Nickname:"}),(0,i.jsx)("input",{type:"text",name:"nickname",value:e,onChange:function(e){n(e.target.value)}})]}),e&&(0,i.jsx)("div",{children:(0,i.jsx)("button",{className:"trButton",type:"submit",onClick:function(){var i=e.trim();n(i),t(!0)},children:"SUBMIT"})})]})}function d(e){return(0,i.jsx)("div",{children:(0,i.jsx)("button",{className:"trButton",type:"submit",id:"chooseCreateGame",onClick:function(){e("C")},children:"CREATE A GAME"})})}function u(e,n){for(var t=!1,i=0;i<e.length;i++)e[i].nickname===n&&(t=!0);return t}n.default=function(e){var n=e.setWhereto,t=e.client,u=e.thisisme,o=e.setParticipant,m=e.wsmessage,h=e.nickname,j=e.setNickname,f=e.gameid,x=e.setGameid,g=(0,a.useState)("Welcome!"),v=g[0],b=g[1],p=(0,a.useState)([]),y=p[0],N=p[1],k=(0,a.useState)(!1),C=k[0],P=k[1],T=(0,a.useState)(""),w=T[0],S=T[1];return(0,a.useEffect)((function(){""!==m&&function(e){var n=JSON.parse(e);if(n.type===s.j6){if(n.func===s.iS)return;n.func===s.hA?N(n.gamelist):n.func===s.e?n.thisisme===u?(x(n.game.gameid),b(n.snat),o(s.oZ)):b("Why am I getting game data from ".concat(n.nickname," for game ").concat(n.gameid,"?")):"gameidtaken"===n.func?b("That game ID is already taken"):"gameidunknown"===n.func?b("That game ID is not being used"):"gamefull"===n.func?b("That game is full"):"notinthatgame"===n.func?b("You are not in that game"):"otherclientfound"===n.func?b("That nickname is already in that game"):b("Unhandled message: ".concat(e))}}(m)}),[m]),(0,i.jsxs)("div",{className:"trBackground",id:"fybLobby",children:[(0,i.jsxs)("div",{className:"trTitle",children:["Fry Your Brain",(0,i.jsx)("button",{className:"trButton",onClick:function(){n("menu")},children:(0,i.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),(0,i.jsx)("div",{className:"trParagraph",children:(0,i.jsx)("label",{children:v})}),!C&&l(h,j,P),C&&y&&y.length>0&&c(y,t,u,h),C&&!w&&d(S),C&&"C"===w&&(0,i.jsx)(r.default,{client:t,thisisme:u,nickname:h,gameid:f,setGameid:x}),(0,i.jsx)("div",{className:"fivepxdivider",children:"\xa0"})]})}}},function(e){e.O(0,[774,888,179],(function(){return n=4604,e(e.s=n);var n}));var n=e.O();_N_E=n}]);