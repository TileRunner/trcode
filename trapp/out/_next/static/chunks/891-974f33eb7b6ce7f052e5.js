(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[891],{4339:function(e,n,t){"use strict";t.d(n,{j6:function(){return s},dK:function(){return i},oZ:function(){return a},e:function(){return r},dY:function(){return c},$B:function(){return o}});var s="fyb",i="U",a="P",r="GAME_DATA",c="GAME_CREATED",o=2e4},4891:function(e,n,t){"use strict";t.r(n);var s=t(5893),i=t(7294),a=t(5518),r=t(5354),c=t(1863),o=t(4339),u=t(5877);n.default=function(e){var n=e.setWhereto,t=(0,i.useState)((0,u.v4)())[0],l=(0,i.useState)(o.dK),d=l[0],m=l[1],f=(0,i.useState)(""),h=f[0],v=f[1],y=(0,i.useState)(""),p=y[0],j=y[1],x=(0,i.useState)(""),g=x[0],b=x[1],k=(0,i.useState)(2),N=k[0],S=k[1],w="wss://tilerunner.herokuapp.com/?clientType=fyb&thisisme="+t,C=(0,i.useState)(new a.Z(w,(function(e){v(e.data)}),o.j6,t))[0];return(0,i.useEffect)((function(){return C.connect()}),[]),(0,s.jsxs)(s.Fragment,{children:[d===o.dK&&(0,s.jsx)(r.default,{setWhereto:n,client:C,thisisme:t,setParticipant:m,wsmessage:h,nickname:p,setNickname:j,gameid:g,setGameid:b,numPlayers:N,setNumPlayers:S}),d===o.oZ&&(0,s.jsx)(c.default,{setWhereto:n,client:C,thisisme:t,wsmessage:h,nickname:p,gameid:g,numPlayers:N})]})}},1863:function(e,n,t){"use strict";t.r(n);var s=t(5893),i=t(7294),a=t(4339);function r(e,n){return n.map((function(n){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"fybGamePlayer",children:n.nickname}),(0,s.jsx)("td",{className:"fybGameWord",children:n.pass?(0,s.jsx)("span",{className:"fybGameWord pass",children:" passed"}):(0,s.jsx)("span",{className:"fybGameWord ".concat(n.valid?"valid":"invalid"),children:n.word})})]},"".concat(e).concat(n.nickname))}))}function c(e,n,t,i,r,c,u,l){return(0,s.jsxs)("div",{onKeyDownCapture:e,children:[(0,s.jsx)("div",{className:"fybGameEnterWordLabel",children:"Enter Word:"}),(0,s.jsx)("input",{type:"text",autoComplete:"off",spellCheck:"false",name:"word",value:n,onChange:function(e){t(e.target.value)}}),(0,s.jsxs)("div",{children:[n.toUpperCase().trim().match("^[a-zA-Z]*$")&&(0,s.jsx)("button",{className:"fybGameWordSubmitButton",onClick:function(){o(n,i,r,c,u,l,t)},children:"SUBMIT"},"submitWord"),(0,s.jsx)("button",{className:"fybGameWordPassButton",onClick:function(){!function(e,n,t,s,i,r){e("Sending PASS ... shouldn't take long."),n.send({type:a.j6,func:"move",pass:!0,valid:!1,thisisme:t,gameid:s,nickname:i,timestamp:Date.now(),word:""}),r("")}(r,c,u,i.gameid,l,t)},children:"PASS"},"passButton")]})]})}function o(e,n,t,s,i,r,c){for(var o=e.toUpperCase().trim(),u=0;u<n.movesThisRound.length;u++){var l=n.movesThisRound[u].word;if(l===o)return void t("You cannot reuse a previous word from this round (".concat(l,")."));if(l+"S"===o&&"S"!==l.substring(l.length-1)&&n.movesThisRound[u].valid)return void t("You cannot add S to a previous valid word (".concat(l,") from this round unless it ends with S."))}for(var d=0;d<n.fryLetters.length;d++){for(var m=0,f=0,h=0;h<n.fryLetters.length;h++)n.fryLetters[d]===n.fryLetters[h]&&(m+=1);for(var v=0;v<o.length;v++)n.fryLetters[d]===o[v]&&(f+=1);if(f<m)return void t("You need the letter ".concat(n.fryLetters[d]," at least ").concat(m," time").concat(1===m?".":"s."))}t("Checking your word ... shouldn't take long. If it does, please try rejoining the game."),s.send({type:a.j6,func:"move",pass:!1,thisisme:i,gameid:n.gameid,nickname:r,timestamp:Date.now(),word:o}),c("")}n.default=function(e){var n=e.setWhereto,t=e.client,u=e.thisisme,l=e.wsmessage,d=e.nickname,m=e.gameid,f=(0,i.useState)(""),h=f[0],v=f[1],y=(0,i.useState)({goal:99,whoseturn:-1,players:[{index:0,nickname:"Loading..."}]}),p=y[0],j=y[1],x=(0,i.useState)(""),g=x[0],b=x[1],k=(0,i.useState)(""),N=k[0],S=k[1];(0,i.useEffect)((function(){var e=setInterval((function(){p.whoseturn>-1&&p.players.length>0&&t.send({type:a.j6,func:"interval",syncstamp:N,thisisme:u,nickname:d,gameid:p.gameid})}),a.$B);return function(){return clearInterval(e)}})),(0,i.useEffect)((function(){""!==l&&function(e){var n=JSON.parse(e);n.type===a.j6&&(n.func===a.e?(v(n.snat),j(n.game),S(n.game.syncstamp)):(n.func=a.dY)||v("Unhandled message: ".concat(e)))}(l)}),[l]);var w=function(){if(p.whoseturn<0)return!1;if(p.freeforall){if(p.excludedPlayer===d)return!1;for(var e=0;e<p.freeforallMoves.length;e++)if(p.freeforallMoves[e].nickname===d)return!1;return!0}return d===p.players[p.whoseturn].nickname};return(0,s.jsxs)("div",{className:"container fybGame",children:[(0,s.jsxs)("div",{className:"fybHeaderDiv",children:[(0,s.jsx)("span",{className:"h2",children:"Fry Your Brain"}),(0,s.jsx)("button",{className:"fybHomeButton",onClick:function(){n("menu")},children:(0,s.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),(0,s.jsx)("div",{className:"fybHeaderDiv",children:(0,s.jsxs)("span",{className:"h4",children:["Game id: ",m]})}),(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{colSpan:"2",className:"fybGameSectionHeader",children:["First to ",p.goal," wins!"]})}),p.players.map((function(e){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"fybGamePlayer",children:e.nickname}),(0,s.jsxs)("td",{className:"fybGameScore",children:[e.points<10?(0,s.jsx)("span",{children:"\xa0"}):"",e.points,e.points>=p.goal&&(0,s.jsx)("span",{class:"fybWinner",children:"Winner!"})]})]},"Player".concat(e.index))})),p.movesPrevRound&&p.movesPrevRound.length>0&&(0,s.jsx)("tr",{children:(0,s.jsx)("td",{className:"fybGameSectionHeader",colSpan:"2",children:"Previous round:"})}),p.movesPrevRound&&p.movesPrevRound.length>0&&r("movesPrevRound",p.movesPrevRound),p.movesThisRound&&p.movesThisRound.length>0&&(0,s.jsx)("tr",{children:(0,s.jsx)("td",{className:"fybGameSectionHeader",colSpan:"2",children:"This round:"})}),p.movesThisRound&&p.movesThisRound.length>0&&r("movesThisRound",p.movesThisRound),!p.freeforall&&p.freeforallMoves&&p.freeforallMoves.length>0&&(0,s.jsx)("tr",{children:(0,s.jsx)("td",{className:"fybGameSectionHeader",colSpan:"2",children:"Free-for-all:"})}),!p.freeforall&&p.freeforallMoves&&p.freeforallMoves.length>0&&r("ffaMoves",p.freeforallMoves)]})}),p.whoseturn>-1&&(0,s.jsxs)("div",{className:"fryLetterDiv",children:["Letters:\xa0",p.fryLetters.map((function(e,n){return(0,s.jsx)("span",{className:"fryLetter",children:e},"FryLetter".concat(n))}))]}),w()&&c((function(e){if(w())return"Enter"===e.key?(e.preventDefault(),void o(g,p,v,t,u,d,b)):void 0}),g,b,p,v,t,u,d),(0,s.jsxs)("div",{children:[p.gameOver&&(0,s.jsxs)("div",{className:"fybGameOver",children:[(0,s.jsx)("span",{className:"fybGameSectionHeader",children:"Game Over"}),(0,s.jsx)("button",{className:"fybGameWordSubmitButton",onClick:function(){!function(e,n,t,s){e.send({type:a.j6,func:"replay",thisisme:n,game:t,nickname:s,timestamp:Date.now()})}(t,u,p,d)},children:"PLAY AGAIN"})]}),(0,s.jsx)("p",{className:"fybSnat",children:h})]})]})}},5354:function(e,n,t){"use strict";t.r(n);var s=t(5893),i=t(7294),a=t(4339);function r(e,n,t){return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Nickname:"}),(0,s.jsx)("input",{type:"text",name:"nickname",value:e,onChange:function(e){n(e.target.value.trim())}})]}),e&&(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"fybLobbyButton",type:"submit",onClick:function(){t(!0)},children:"SUBMIT"})})]})}function c(e){return(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:(0,s.jsx)("button",{className:"fybLobbyButton",type:"submit",id:"chooseCreateGame",onClick:function(){e("C")},children:"CREATE A GAME"})}),(0,s.jsx)("p",{children:(0,s.jsx)("button",{className:"fybLobbyButton",type:"submit",id:"chooseJoinGame",onClick:function(){e("J")},children:"JOIN A GAME"})}),(0,s.jsx)("p",{children:(0,s.jsx)("button",{type:"submit",className:"fybLobbyButton",id:"chooseRejoinGame",onClick:function(){e("R")},children:"REJOIN A GAME"})})]})}function o(e,n,t,i,r,c,o,u,l){return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"fybHeaderDiv",children:(0,s.jsx)("span",{className:"h2",children:"Create Game"})}),(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{children:"Game ID:"})}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{type:"text",name:"gameid",value:t,onChange:function(e){i(e.target.value.trim())}})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{children:"# Players:"})}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{type:"number",name:"numPlayers",value:r,onChange:function(e){c(e.target.value)}})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{children:"Pts to win:"})}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{type:"number",name:"goal",value:o,onChange:function(e){u(e.target.value)}})})]})]}),t&&r>1&&r<7&&o>2&&o<22&&(0,s.jsx)("button",{className:"fybLobbyButton",id:"requestCreateGame",type:"submit",onClick:function(){!function(e,n,t,s,i,r){e.send({type:a.j6,func:"create",thisisme:n,gameid:t,numPlayers:s,goal:i,nickname:r,timestamp:Date.now()})}(e,n,t,r,o,l)},children:"SUBMIT"}),(0,s.jsxs)("div",{className:"fybInputWarning",children:[!t&&(0,s.jsx)("p",{children:"Game ID is required"}),!(r>1&&r<7)&&(0,s.jsx)("p",{children:"# Players is 2-6"}),!(o>2&&o<22)&&(0,s.jsx)("p",{children:"Pts to win is 3-21"})]})]})}function u(e,n,t,i,r){return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"fybHeaderDiv",children:(0,s.jsx)("span",{className:"h2",children:"Join Game"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Game ID to join:"}),(0,s.jsx)("input",{type:"text",name:"gameid",value:t,onChange:function(e){i(e.target.value.trim())}})]}),t&&(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"fybLobbyButton",id:"requestJoinGame",type:"submit",onClick:function(){!function(e,n,t,s){e.send({type:a.j6,func:"join",thisisme:n,gameid:t,nickname:s,timestamp:Date.now()})}(e,n,t,r)},children:"SUBMIT"})}),!t&&(0,s.jsx)("div",{className:"fybInputWarning",children:(0,s.jsx)("p",{children:"Game ID is required"})})]})}function l(e,n,t,i,r){return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"fybHeaderDiv",children:(0,s.jsx)("span",{className:"h2",children:"Rejoin Game"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Game ID to rejoin:"}),(0,s.jsx)("input",{type:"text",name:"gameid",value:t,onChange:function(e){i(e.target.value.trim())}})]}),t&&(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"fybLobbyButton",id:"requestRejoinGame",type:"submit",onClick:function(){!function(e,n,t,s){e.send({type:a.j6,func:"rejoin",thisisme:n,gameid:t,nickname:s,timestamp:Date.now()})}(e,n,t,r)},children:"SUBMIT"})}),!t&&(0,s.jsx)("div",{className:"fybInputWarning",children:(0,s.jsx)("p",{children:"Game ID is required"})})]})}n.default=function(e){var n=e.setWhereto,t=e.client,d=e.thisisme,m=e.setParticipant,f=e.wsmessage,h=e.nickname,v=e.setNickname,y=e.gameid,p=e.setGameid,j=e.numPlayers,x=e.setNumPlayers,g=(0,i.useState)(""),b=g[0],k=g[1],N=(0,i.useState)(!1),S=N[0],w=N[1],C=(0,i.useState)(""),G=C[0],T=C[1],P=(0,i.useState)(11),R=P[0],D=P[1];return(0,i.useEffect)((function(){""!==f&&function(e){var n=JSON.parse(e);n.type===a.j6&&(n.func===a.e?n.thisisme===d?(p(n.game.gameid),x(n.game.numPlayers),m(a.oZ)):k("".concat(n.nickname," just created game ").concat(n.gameid,".")):"gameidtaken"===n.func?k("That game ID is already taken"):"gamejoined"===n.func?n.thisisme===d?(p(n.game.gameid),x(n.game.numPlayers),m(a.oZ)):k("".concat(n.nickname," just joined game ").concat(n.game.gameid,".")):"gameidunknown"===n.func?k("That game ID is not being used"):"gamefull"===n.func?k("That game is full"):"notinthatgame"===n.func?k("You are not in that game"):"otherclientfound"===n.func?k("That nickname is already in that game"):n.func===a.dY?k("".concat(n.nickname," created game ").concat(n.gameid)):"gamelist"===n.func?k(n.gamelist):k("Unhandled message: ".concat(e)))}(f)}),[f]),(0,s.jsxs)("div",{className:"fybLobby",children:[(0,s.jsxs)("div",{className:"fybHeaderDiv",children:[(0,s.jsx)("span",{className:"h1",children:"Fry Your Brain"}),(0,s.jsx)("button",{className:"fybHomeButton",onClick:function(){n("menu")},children:(0,s.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),(0,s.jsx)("p",{children:b}),!S&&r(h,v,w),S&&!G&&c(T),S&&"C"===G&&o(t,d,y,p,j,x,R,D,h),S&&"J"===G&&u(t,d,y,p,h),S&&"R"===G&&l(t,d,y,p,h)]})}},5518:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var s=t(4047),i=t(2700),a=function(){function e(n,t){(0,s.Z)(this,e),this.callback=n,this.timerCalc=t,this.timer=null,this.tries=0}return(0,i.Z)(e,[{key:"reset",value:function(){this.tries=0,clearTimeout(this.timer)}},{key:"scheduleTimeout",value:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout((function(){e.tries=e.tries+1,e.callback()}),this.timerCalc(this.tries+1))}}]),e}(),r=function(){function e(n,t,i,r){var c=this;(0,s.Z)(this,e),this.customSocket=null,this.socketUrl=n,this.clientType=i,this.thisisme=r,this.reconnectTimer=new a((function(){c.disconnect(),c.connect()}),this.reconnectAfterMs),this.messageFunction=t}return(0,i.Z)(e,[{key:"reconnectAfterMs",value:function(e){return[1e3,2e3,5e3,1e4][e-1]||1e4}},{key:"connect",value:function(){var e=this;this.customSocket=new WebSocket(this.socketUrl),this.customSocket.onopen=function(n){e.send({type:e.clientType,func:"announce",thisisme:e.thisisme})},this.customSocket.onclose=function(n){e.reconnectTimer.scheduleTimeout()},this.customSocket.onerror=function(e){},this.customSocket.onmessage=this.messageFunction}},{key:"disconnect",value:function(){this.customSocket.onclose=function(){},this.customSocket.close()}},{key:"send",value:function(e){e.thisisme=this.thisisme,e.clientType=this.clientType;var n=JSON.stringify(e);this.customSocket.send(n)}}]),e}()},4047:function(e,n,t){"use strict";function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,{Z:function(){return s}})},2700:function(e,n,t){"use strict";function s(e,n){for(var t=0;t<n.length;t++){var s=n[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function i(e,n,t){return n&&s(e.prototype,n),t&&s(e,t),e}t.d(n,{Z:function(){return i}})},5877:function(e,n,t){var s=t(3570),i=t(1171),a=i;a.v1=s,a.v4=i,e.exports=a},5327:function(e){for(var n=[],t=0;t<256;++t)n[t]=(t+256).toString(16).substr(1);e.exports=function(e,t){var s=t||0,i=n;return[i[e[s++]],i[e[s++]],i[e[s++]],i[e[s++]],"-",i[e[s++]],i[e[s++]],"-",i[e[s++]],i[e[s++]],"-",i[e[s++]],i[e[s++]],"-",i[e[s++]],i[e[s++]],i[e[s++]],i[e[s++]],i[e[s++]],i[e[s++]]].join("")}},5217:function(e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var t=new Uint8Array(16);e.exports=function(){return n(t),t}}else{var s=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0===(3&n)&&(e=4294967296*Math.random()),s[n]=e>>>((3&n)<<3)&255;return s}}},3570:function(e,n,t){var s,i,a=t(5217),r=t(5327),c=0,o=0;e.exports=function(e,n,t){var u=n&&t||0,l=n||[],d=(e=e||{}).node||s,m=void 0!==e.clockseq?e.clockseq:i;if(null==d||null==m){var f=a();null==d&&(d=s=[1|f[0],f[1],f[2],f[3],f[4],f[5]]),null==m&&(m=i=16383&(f[6]<<8|f[7]))}var h=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:o+1,y=h-c+(v-o)/1e4;if(y<0&&void 0===e.clockseq&&(m=m+1&16383),(y<0||h>c)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=h,o=v,i=m;var p=(1e4*(268435455&(h+=122192928e5))+v)%4294967296;l[u++]=p>>>24&255,l[u++]=p>>>16&255,l[u++]=p>>>8&255,l[u++]=255&p;var j=h/4294967296*1e4&268435455;l[u++]=j>>>8&255,l[u++]=255&j,l[u++]=j>>>24&15|16,l[u++]=j>>>16&255,l[u++]=m>>>8|128,l[u++]=255&m;for(var x=0;x<6;++x)l[u+x]=d[x];return n||r(l)}},1171:function(e,n,t){var s=t(5217),i=t(5327);e.exports=function(e,n,t){var a=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var r=(e=e||{}).random||(e.rng||s)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n)for(var c=0;c<16;++c)n[a+c]=r[c];return n||i(r)}}}]);