(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[132],{4339:function(e,n,t){"use strict";t.d(n,{j6:function(){return a},dK:function(){return i},oZ:function(){return r},e:function(){return s},dY:function(){return o},$B:function(){return m}});var a="fyb",i="U",r="P",s="GAME_DATA",o="GAME_CREATED",m=2e4},5354:function(e,n,t){"use strict";t.r(n);var a=t(5893),i=t(7294),r=t(4339);function s(e,n,t){return(0,a.jsxs)("div",{className:"w3-row-padding h4",children:[(0,a.jsxs)("div",{className:"w3-quarter",children:[(0,a.jsx)("label",{children:"Nickname:"}),(0,a.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"text",name:"nickname",value:e,onChange:function(e){n(e.target.value.trim())}})]}),e&&(0,a.jsx)("div",{className:"w3-quarter",children:(0,a.jsx)("button",{className:"w3-button w3-border w3-green w3-round-xxlarge myCommonFont",type:"submit",onClick:function(){t(!0)},children:"SUBMIT"})})]})}function o(e){return(0,a.jsxs)("div",{className:"w3-row-padding h4",children:[(0,a.jsx)("div",{className:"w3-quarter",children:(0,a.jsx)("button",{className:"w3-button w3-border w3-green w3-round-xxlarge myCommonFont",type:"submit",id:"chooseCreateGame",onClick:function(){e("C")},children:"CREATE A GAME"})}),(0,a.jsx)("div",{className:"w3-quarter",children:(0,a.jsx)("button",{className:"w3-button w3-border w3-green w3-round-xxlarge myCommonFont",type:"submit",id:"chooseJoinGame",onClick:function(){e("J")},children:"JOIN A GAME"})}),(0,a.jsx)("div",{className:"w3-quarter",children:(0,a.jsx)("button",{className:"w3-button w3-border w3-green w3-round-xxlarge myCommonFont",type:"submit",id:"chooseRejoinGame",onClick:function(){e("R")},children:"REJOIN A GAME"})})]})}function m(e,n,t,i,s,o,m,c,u){return(0,a.jsxs)("div",{className:"w3-row-padding h4",children:[(0,a.jsxs)("div",{className:"w3-quarter",children:[(0,a.jsx)("label",{children:"Game ID:"}),(0,a.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"text",name:"gameid",value:t,onChange:function(e){i(e.target.value.trim())}})]}),(0,a.jsxs)("div",{className:"w3-quarter",children:[(0,a.jsx)("label",{children:"Number of Players:"}),(0,a.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"number",name:"numPlayers",value:s,onChange:function(e){e.target.value.match(/[23456]/)&&o(e.target.value)}})]}),(0,a.jsxs)("div",{className:"w3-quarter",children:[(0,a.jsx)("label",{children:"Points needed to win (3 to 21):"}),(0,a.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"number",name:"goal",value:m,onChange:function(e){e.target.value>2&&e.target.value<22&&c(e.target.value)}})]}),t&&(0,a.jsx)("div",{className:"w3-quarter",children:(0,a.jsx)("button",{id:"requestCreateGame",className:"w3-button w3-border w3-green w3-round-xxlarge myCommonFont",type:"submit",onClick:function(){!function(e,n,t,a,i,s){e.send({type:r.j6,func:"create",thisisme:n,gameid:t,numPlayers:a,goal:i,nickname:s,timestamp:Date.now()})}(e,n,t,s,m,u)},children:"SUBMIT"})})]})}function c(e,n,t,i,s){return(0,a.jsxs)("div",{className:"w3-row-padding h4",children:[(0,a.jsxs)("div",{className:"w3-quarter",children:[(0,a.jsx)("label",{children:"Game ID to join:"}),(0,a.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"text",name:"gameid",value:t,onChange:function(e){i(e.target.value.trim())}})]}),t&&(0,a.jsx)("div",{className:"w3-quarter",children:(0,a.jsx)("button",{id:"requestJoinGame",className:"w3-button w3-border w3-green w3-round-xxlarge myCommonFont",type:"submit",onClick:function(){!function(e,n,t,a){e.send({type:r.j6,func:"join",thisisme:n,gameid:t,nickname:a,timestamp:Date.now()})}(e,n,t,s)},children:"SUBMIT"})})]})}function u(e,n,t,i,s){return(0,a.jsxs)("div",{className:"w3-row-padding h4",children:[(0,a.jsxs)("div",{className:"w3-quarter",children:[(0,a.jsx)("label",{children:"Game ID to rejoin:"}),(0,a.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"text",name:"gameid",value:t,onChange:function(e){i(e.target.value.trim())}})]}),t&&(0,a.jsx)("div",{className:"w3-quarter",children:(0,a.jsx)("button",{id:"requestRejoinGame",className:"w3-button w3-border w3-green w3-round-xxlarge myCommonFont",type:"submit",onClick:function(){!function(e,n,t,a){e.send({type:r.j6,func:"rejoin",thisisme:n,gameid:t,nickname:a,timestamp:Date.now()})}(e,n,t,s)},children:"SUBMIT"})})]})}n.default=function(e){var n=e.setWhereto,t=e.client,l=e.thisisme,d=e.setParticipant,w=e.wsmessage,g=e.nickname,h=e.setNickname,b=e.gameid,x=e.setGameid,f=e.numPlayers,j=e.setNumPlayers,N=(0,i.useState)("Loading..."),p=N[0],y=N[1],v=(0,i.useState)(!1),C=v[0],k=v[1],q=(0,i.useState)(""),E=q[0],F=q[1],G=(0,i.useState)(11),_=G[0],T=G[1];return(0,i.useEffect)((function(){""!==w&&function(e){var n=JSON.parse(e);n.type===r.j6&&(n.func===r.e?n.thisisme===l?(x(n.game.gameid),j(n.game.numPlayers),d(r.oZ)):y("".concat(n.nickname," just created game ").concat(n.gameid,".")):"gameidtaken"===n.func?y("That game ID is already taken"):"gamejoined"===n.func?n.thisisme===l?(x(n.game.gameid),j(n.game.numPlayers),d(r.oZ)):y("".concat(n.nickname," just joined game ").concat(n.game.gameid,".")):"gameidunknown"===n.func?y("That game ID is not being used"):"gamefull"===n.func?y("That game is full"):"notinthatgame"===n.func?y("You are not in that game"):"otherclientfound"===n.func?y("That nickname is already in that game"):n.func===r.dY?y("".concat(n.nickname," created game ").concat(n.gameid)):"gamelist"===n.func?y(n.gamelist):y("Unhandled message: ".concat(e)))}(w)}),[w]),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"w3-container w3-teal w3-bar",children:[(0,a.jsx)("h1",{className:"w3-bar-item w3-centre myHeadingFont",children:"Fry Your Brain Lobby"}),(0,a.jsx)("div",{className:"w3-bar-item w3-right",children:(0,a.jsx)("button",{className:"w3-button",onClick:function(){n("menu")},children:(0,a.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})})]}),(0,a.jsx)("p",{children:p}),!C&&s(g,h,k),C&&!E&&o(F),C&&"C"===E&&m(t,l,b,x,f,j,_,T,g),C&&"J"===E&&c(t,l,b,x,g),C&&"R"===E&&u(t,l,b,x,g)]})}},4604:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fyb/lobby",function(){return t(5354)}])}},function(e){e.O(0,[774,888,179],(function(){return n=4604,e(e.s=n);var n}));var n=e.O();_N_E=n}]);