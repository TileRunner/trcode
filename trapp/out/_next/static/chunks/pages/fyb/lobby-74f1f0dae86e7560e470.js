(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[132],{4339:function(e,n,a){"use strict";a.d(n,{j6:function(){return t},dK:function(){return i},oZ:function(){return s},e:function(){return r},dY:function(){return o},$B:function(){return c}});var t="fyb",i="U",s="P",r="GAME_DATA",o="GAME_CREATED",c=2e4},5354:function(e,n,a){"use strict";a.r(n);var t=a(5893),i=a(7294),s=a(4339);function r(e,n,a){return(0,t.jsxs)("div",{className:"w3-row-padding h4",children:[(0,t.jsxs)("div",{className:"w3-quarter",children:[(0,t.jsx)("label",{children:"Nickname:"}),(0,t.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"text",name:"nickname",value:e,onChange:function(e){n(e.target.value.trim())}})]}),e&&(0,t.jsx)("div",{className:"w3-quarter",children:(0,t.jsx)("button",{className:"w3-button w3-border w3-green w3-round-xxlarge myCommonFont",type:"submit",onClick:function(){a(!0)},children:"SUBMIT"})})]})}function o(e){return(0,t.jsxs)("div",{className:"w3-container h4 w3-responsive",children:[(0,t.jsx)("div",{className:"w3-row w3-padding",children:(0,t.jsx)("button",{className:"w3-button w3-border w3-green w3-hover-black w3-round-xxlarge myCommonFont",type:"submit",id:"chooseCreateGame",onClick:function(){e("C")},children:"CREATE A GAME"})}),(0,t.jsx)("div",{className:"w3-row w3-padding",children:(0,t.jsx)("button",{className:"w3-button w3-border w3-green w3-hover-black w3-round-xxlarge myCommonFont",type:"submit",id:"chooseJoinGame",onClick:function(){e("J")},children:"JOIN A GAME"})}),(0,t.jsx)("div",{className:"w3-row w3-padding",children:(0,t.jsx)("button",{className:"w3-button w3-border w3-green w3-hover-black w3-round-xxlarge myCommonFont",type:"submit",id:"chooseRejoinGame",onClick:function(){e("R")},children:"REJOIN A GAME"})})]})}function c(e,n,a,i,r,o,c,m,u){return(0,t.jsxs)("div",{className:"w3-row-padding h4",children:[(0,t.jsxs)("div",{className:"w3-quarter",children:[(0,t.jsx)("label",{children:"Game ID:"}),(0,t.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"text",name:"gameid",value:a,onChange:function(e){i(e.target.value.trim())}})]}),(0,t.jsxs)("div",{className:"w3-quarter",children:[(0,t.jsx)("label",{children:"Number of Players:"}),(0,t.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"number",name:"numPlayers",value:r,onChange:function(e){e.target.value.match(/[23456]/)&&o(e.target.value)}})]}),(0,t.jsxs)("div",{className:"w3-quarter",children:[(0,t.jsx)("label",{children:"Points needed to win (3 to 21):"}),(0,t.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"number",name:"goal",value:c,onChange:function(e){e.target.value>2&&e.target.value<22&&m(e.target.value)}})]}),a&&(0,t.jsx)("div",{className:"w3-quarter",children:(0,t.jsx)("button",{id:"requestCreateGame",className:"w3-button w3-border w3-green w3-round-xxlarge myCommonFont",type:"submit",onClick:function(){!function(e,n,a,t,i,r){e.send({type:s.j6,func:"create",thisisme:n,gameid:a,numPlayers:t,goal:i,nickname:r,timestamp:Date.now()})}(e,n,a,r,c,u)},children:"SUBMIT"})})]})}function m(e,n,a,i,r){return(0,t.jsxs)("div",{className:"w3-row-padding h4",children:[(0,t.jsxs)("div",{className:"w3-quarter",children:[(0,t.jsx)("label",{children:"Game ID to join:"}),(0,t.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"text",name:"gameid",value:a,onChange:function(e){i(e.target.value.trim())}})]}),a&&(0,t.jsx)("div",{className:"w3-quarter",children:(0,t.jsx)("button",{id:"requestJoinGame",className:"w3-button w3-border w3-green w3-round-xxlarge myCommonFont",type:"submit",onClick:function(){!function(e,n,a,t){e.send({type:s.j6,func:"join",thisisme:n,gameid:a,nickname:t,timestamp:Date.now()})}(e,n,a,r)},children:"SUBMIT"})})]})}function u(e,n,a,i,r){return(0,t.jsxs)("div",{className:"w3-row-padding h4",children:[(0,t.jsxs)("div",{className:"w3-quarter",children:[(0,t.jsx)("label",{children:"Game ID to rejoin:"}),(0,t.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"text",name:"gameid",value:a,onChange:function(e){i(e.target.value.trim())}})]}),a&&(0,t.jsx)("div",{className:"w3-quarter",children:(0,t.jsx)("button",{id:"requestRejoinGame",className:"w3-button w3-border w3-green w3-round-xxlarge myCommonFont",type:"submit",onClick:function(){!function(e,n,a,t){e.send({type:s.j6,func:"rejoin",thisisme:n,gameid:a,nickname:t,timestamp:Date.now()})}(e,n,a,r)},children:"SUBMIT"})})]})}n.default=function(e){var n=e.setWhereto,a=e.client,l=e.thisisme,d=e.setParticipant,w=e.wsmessage,h=e.nickname,g=e.setNickname,b=e.gameid,f=e.setGameid,x=e.numPlayers,j=e.setNumPlayers,p=(0,i.useState)(""),N=p[0],v=p[1],y=(0,i.useState)(!1),C=y[0],k=y[1],E=(0,i.useState)(""),F=E[0],G=E[1],_=(0,i.useState)(11),q=_[0],T=_[1];return(0,i.useEffect)((function(){""!==w&&function(e){var n=JSON.parse(e);n.type===s.j6&&(n.func===s.e?n.thisisme===l?(f(n.game.gameid),j(n.game.numPlayers),d(s.oZ)):v("".concat(n.nickname," just created game ").concat(n.gameid,".")):"gameidtaken"===n.func?v("That game ID is already taken"):"gamejoined"===n.func?n.thisisme===l?(f(n.game.gameid),j(n.game.numPlayers),d(s.oZ)):v("".concat(n.nickname," just joined game ").concat(n.game.gameid,".")):"gameidunknown"===n.func?v("That game ID is not being used"):"gamefull"===n.func?v("That game is full"):"notinthatgame"===n.func?v("You are not in that game"):"otherclientfound"===n.func?v("That nickname is already in that game"):n.func===s.dY?v("".concat(n.nickname," created game ").concat(n.gameid)):"gamelist"===n.func?v(n.gamelist):v("Unhandled message: ".concat(e)))}(w)}),[w]),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"w3-container w3-teal w3-bar",children:[(0,t.jsx)("h1",{className:"w3-bar-item w3-left myHeadingFont",children:"Fry Your Brain Lobby"}),(0,t.jsx)("div",{className:"w3-bar-item w3-left",children:(0,t.jsx)("button",{className:"w3-button",onClick:function(){n("menu")},children:(0,t.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})})]}),(0,t.jsx)("p",{children:N}),!C&&r(h,g,k),C&&!F&&o(G),C&&"C"===F&&c(a,l,b,f,x,j,q,T,h),C&&"J"===F&&m(a,l,b,f,h),C&&"R"===F&&u(a,l,b,f,h)]})}},4604:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fyb/lobby",function(){return a(5354)}])}},function(e){e.O(0,[774,888,179],(function(){return n=4604,e(e.s=n);var n}));var n=e.O();_N_E=n}]);