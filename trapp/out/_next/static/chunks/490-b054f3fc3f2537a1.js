"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[490],{4328:function(e,n,t){t.d(n,{j6:function(){return r},dK:function(){return s},oZ:function(){return a},e:function(){return i},hA:function(){return o},iS:function(){return c},$B:function(){return l}});var r="fyb",s="U",a="P",i="GAME_DATA",o="GAME_LIST",c="CHAT_DATA",l=2e4},3524:function(e,n,t){t.d(n,{cO:function(){return c}});var r=t(4051),s=t.n(r);function a(e,n,t,r,s,a,i){try{var o=e[a](i),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(r,s)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var i=e.apply(n,t);function o(e){a(i,r,s,o,c,"next",e)}function c(e){a(i,r,s,o,c,"throw",e)}o(void 0)}))}}var o="https://tilerunner.herokuapp.com";function c(e){return l.apply(this,arguments)}function l(){return(l=i(s().mark((function e(n){var t,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"/ENABLE2K?exists=").concat(n.toLowerCase()),e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a.exists);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},8490:function(e,n,t){t.r(n);var r=t(4051),s=t.n(r),a=t(5893),i=t(7294),o=t(5697),c=t.n(o),l=t(9359),u=t(4328),d=t(6298),f=t(6832),h=t(5079),m=t(3836),p=t(3524);function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function v(e,n,t,r,s,a,i){try{var o=e[a](i),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(r,s)}function y(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var a=e.apply(n,t);function i(e){v(a,r,s,i,o,"next",e)}function o(e){v(a,r,s,i,o,"throw",e)}i(void 0)}))}}function x(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=function(e){var n=e.setWhereto,t=e.client,r=e.thisisme,s=e.wsmessage,o=e.nickname,c=e.gameid,p=(0,i.useState)(!0),g=p[0],v=p[1],y=(0,i.useState)([]),j=y[0],w=y[1],S=(0,i.useState)(""),A=S[0],L=S[1],C=(0,i.useState)(""),R=C[0],T=C[1],P=(0,i.useState)({goal:99,gameindex:0,round:0,freeforall:!1,movesThisRound:[],movesPrevRound:[],whoseturn:[],fryLetters:[],players:[{index:0,nickname:"Loading...",wins:0}]}),O=P[0],B=P[1],M=(0,i.useState)(""),I=M[0],D=M[1],E=(0,i.useState)(""),_=E[0],F=E[1],q=(0,i.useState)(-1),J=q[0],U=q[1],W=(0,d.D)(O);(0,i.useEffect)((function(){(0,m.O)("ScrollableChat")}),[j]),(0,i.useEffect)((function(){var e=setInterval((function(){O.whoseturn.length>0&&O.players.length>0&&t.send({type:u.j6,func:"interval",syncstamp:_,thisisme:r,nickname:o,gameid:O.gameid})}),u.$B);return function(){return clearInterval(e)}})),(0,i.useEffect)((function(){""!==s&&function(e){var n=JSON.parse(e);if(n.type===u.j6)if(n.func===u.iS){var s=n.msgs.filter((function(e){for(var n=0;n<O.players.length;n++)if(O.players[n].nickname===e.from)return!0;return!1}));w(s)}else n.func===u.e?n.game.gameindex===O.gameindex&&n.game.round===O.round&&n.goal===O.goal&&n.players.length===O.players.length&&n.game.movesThisRound.length===O.movesThisRound.length||(L(n.snat),U(-1),B(n.game),F(n.game.syncstamp),T("")):t.send({type:u.j6,func:"rejoin",thisisme:r,gameid:O.gameid,nickname:o,timestamp:Date.now()})}(s)}),[s]),(0,i.useEffect)((function(){var e;if(g&&(W&&O.gameindex===W.gameindex&&O.round===W.round&&(O.freeforall&&!W.freeforall?e=O.movesThisRound[O.movesThisRound.length-1].pass?"Pass":"Oops":W.players.filter((function(e){return e.dropped})).length<O.players.filter((function(e){return e.dropped})).length?e="ByeBye":W.whoseturn.indexOf(o)<0&&O.whoseturn.indexOf(o)>-1&&(e="YourTurn"),e))){var n=document.createElement("audio");n.src="https://tilerunner.github.io/".concat(e,".m4a"),n.play()}}),[O]);var Y=function(){return O.whoseturn.indexOf(o)>-1},$=function(){return O.players.filter((function(e){return e.nickname===o&&e.dropped})).length>0},G=(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"trSubtitle",children:[c,": ",o]}),(0,a.jsx)("table",{className:"trTable",children:(0,a.jsxs)("tbody",{children:[(0,a.jsx)("tr",{children:(0,a.jsxs)("th",{colSpan:"2",children:["First to ",O.goal," wins!"]})}),O.players.map((function(e,n){return(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{children:[(0,a.jsxs)(l.I3,{children:[e.dropped&&(0,a.jsx)("span",{className:"trDanger"}),e.nickname,e.wins>0&&(0,a.jsxs)("span",{children:[" (Won ",e.wins,")"]}),(0,a.jsx)("span",{className:"floatright",children:":"})]}),(0,a.jsxs)(l.A_,{children:[e.nickname,e.wins>0&&(0,a.jsxs)("span",{children:[" (",e.wins,")"]}),(0,a.jsx)("span",{className:"floatright",children:":"})]})]}),(0,a.jsxs)("td",{children:[e.points<10?(0,a.jsx)("span",{children:"\xa0"}):"",e.points,"\xa0",e.points>=O.goal&&(0,a.jsx)("span",{className:"trEmphasis",children:" Winner!\xa0"})]})]},"Player.".concat(n,".").concat(e.nickname))})),O.movesPrevRound&&O.movesPrevRound.length>0&&(0,a.jsx)("tr",{children:(0,a.jsx)("th",{colSpan:"2",children:"Previous round:"})}),O.movesPrevRound&&O.movesPrevRound.length>0&&b("movesPrevRound",O.movesPrevRound),O.movesThisRound&&O.movesThisRound.length>0&&(0,a.jsx)("tr",{children:(0,a.jsx)("th",{colSpan:"2",children:"This round:"})}),O.movesThisRound&&O.movesThisRound.length>0&&b("movesThisRound",O.movesThisRound),!O.freeforall&&O.freeforallMoves&&O.freeforallMoves.length>0&&(0,a.jsx)("tr",{children:(0,a.jsx)("th",{colSpan:"2",children:"Free-for-all:"})}),!O.freeforall&&O.freeforallMoves&&O.freeforallMoves.length>0&&b("ffaMoves",O.freeforallMoves)]})}),O.whoseturn.length>0&&(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"trParagraph",children:["Fry Letters:",(0,a.jsx)("button",{className:"trButton fryLetterActionButton",onClick:function(){for(var e=O.fryLetters.length,n=x(O.fryLetters),t=[];t.length<e;){var r=Math.floor(Math.random()*n.length);t.push(n[r]),n.splice(r,1)}var s=JSON.parse(JSON.stringify(O));s.fryLetters=x(t),B(s)},children:(0,a.jsx)("i",{className:"material-icons fryLetterActionButtonIcon",children:"cached"})}),(0,a.jsx)("button",{className:"trButton fryLetterActionButton",onClick:function(){var e=x(O.fryLetters);e.sort();var n=JSON.parse(JSON.stringify(O));n.fryLetters=x(e),B(n)},children:(0,a.jsx)("i",{className:"material-icons fryLetterActionButtonIcon",children:"sort_by_alpha"})})]}),(0,a.jsx)("div",{className:"fryLetterDiv",children:O.fryLetters.map((function(e,n){return(0,a.jsx)("span",{className:n===J?"fybFryLetter Selected":"fybFryLetter",onDoubleClick:function(){var e=O.fryLetters[n],t=x(O.fryLetters);t.splice(n,1),t.push(e);var r=JSON.parse(JSON.stringify(O));r.fryLetters=x(t),B(r),U(-1)},onClick:function(){if(-1===J)U(n);else if(n===J)U(-1);else{for(var e=[],t=O.fryLetters[J],r=0;r<O.fryLetters.length;r++){var s=O.fryLetters[r];r===n&&e.push(t),r!==J&&e.push(s)}var a=JSON.parse(JSON.stringify(O));a.fryLetters=x(e),B(a),U(-1)}},children:e},"FryLetter".concat(n))}))}),(0,a.jsxs)("div",{className:"trParagraph",children:["(#Answers: ",O.numPossibleAnswers,")"]})]}),Y()&&k((function(e){if(Y())return"Enter"===e.key?(e.preventDefault(),void N(I,O,T,t,r,o,D)):void 0}),I,D,O,T,t,r,o),(0,a.jsxs)("div",{children:[O.gameOver&&(0,a.jsxs)("div",{className:"trParagraph",children:["Game Over\xa0",!$()&&O.players.filter((function(e){return!e.dropped})).length>1&&(0,a.jsx)("button",{className:"trButton",onClick:function(){!function(e,n,t,r){e.send({type:u.j6,func:"replay",thisisme:n,game:t,gameid:t.gameid,nickname:r,timestamp:Date.now()})}(t,r,O,o)},children:"PLAY AGAIN"})]}),(0,a.jsx)("div",{className:"trParagraph",children:A}),R&&(0,a.jsx)("div",{className:"trParagraph trWarning",children:R})]}),!$()&&!O.gameOver&&(0,a.jsx)("div",{className:"trParagraph",children:(0,a.jsx)("button",{className:"trButton",onClick:function(){!function(e,n,t,r,s){e("Sending DROP ... shouldn't take long."),n.send({type:u.j6,func:"drop",thisisme:t,gameid:r,nickname:s,timestamp:Date.now()})}(T,t,r,O.gameid,o)},children:"QUIT"},"dropButton")})]});return(0,a.jsxs)("div",{className:"trBackground",children:[(0,a.jsxs)("div",{className:"trTitle",children:["Fry Your Brain",(0,a.jsx)("button",{className:"trButton",onClick:function(){n("menu")},children:(0,a.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})}),(0,a.jsx)("button",{className:"trButton",onClick:function(){v(!g)},children:(0,a.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Sounds on/off",children:g?"volume_mute":"volume_off"})})]}),(0,a.jsx)(l.A_,{children:(0,a.jsx)("div",{className:"container-fluid",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-8",children:G}),(0,a.jsx)("div",{className:"col-4",children:(0,a.jsx)(f.default,{gameid:c,client:t,nickname:o,msgs:j,setMsgs:w})})]})})}),(0,a.jsx)(l.I3,{children:(0,a.jsx)("div",{className:"container-fluid",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-6",children:G}),(0,a.jsx)("div",{className:"col-6",children:(0,a.jsx)(h.default,{gameid:c,client:t,nickname:o,msgs:j,setMsgs:w})})]})})})]})};function b(e,n){return n.map((function(n){return(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{children:[n.nickname,(0,a.jsx)("span",{className:"floatright",children:":"})]}),(0,a.jsx)("td",{children:n.pass?(0,a.jsx)("span",{className:"trDanger",children:" passed"}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.I3,{children:(0,a.jsxs)("span",{className:"".concat(n.valid?"":"trDanger"),children:[n.word,n.earned&&(0,a.jsxs)("span",{children:[" (",n.earned," pts)"]})]})}),(0,a.jsx)(l.A_,{children:(0,a.jsxs)("span",{className:"".concat(n.valid?"":"trDanger"," ").concat(n.word.length>10&&n.earned||n.word.length>13?"long":""),children:[n.word,n.earned&&(0,a.jsxs)("span",{children:[" (",n.earned," pts)"]})]})})]})})]},"".concat(e).concat(n.nickname))}))}function k(e,n,t,r,s,i,o,c){return(0,a.jsxs)("div",{onKeyDownCapture:e,children:[(0,a.jsx)("div",{className:"trEmphasis",children:"Enter Word:"}),(0,a.jsx)("input",{type:"text",autoComplete:"off",spellCheck:"false",name:"word",value:n,onChange:function(e){t(e.target.value)}}),(0,a.jsxs)("div",{children:[n.toUpperCase().trim().match("^[a-zA-Z]*$")&&(0,a.jsx)("button",{className:"trButton",onClick:function(){N(n,r,s,i,o,c,t)},children:"SUBMIT"},"submitWord"),(0,a.jsx)("button",{className:"trButton",onClick:function(){!function(e,n,t,r,s,a){e("Sending PASS ... shouldn't take long."),n.send({type:u.j6,func:"move",pass:!0,valid:!1,thisisme:t,gameid:r,nickname:s,timestamp:Date.now(),word:""}),a("")}(s,i,o,r.gameid,c,t)},children:"PASS"},"passButton")]})]})}function N(e,n,t,r,s,a,i){return w.apply(this,arguments)}function w(){return(w=y(s().mark((function e(n,t,r,a,i,o,c){var l,d,f,h,m,g,v,y;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=n.toUpperCase().trim(),d=0;case 2:if(!(d<t.movesThisRound.length)){e.next=13;break}if((f=t.movesThisRound[d].word)!==l){e.next=7;break}return r("You cannot reuse a previous word from this round (".concat(f,").")),e.abrupt("return");case 7:if(f+"S"!==l||"S"===f.substring(f.length-1)||!t.movesThisRound[d].valid){e.next=10;break}return r("You cannot add S to a previous valid word (".concat(f,") from this round unless it ends with S.")),e.abrupt("return");case 10:d++,e.next=2;break;case 13:h=0;case 14:if(!(h<t.fryLetters.length)){e.next=25;break}for(m=0,g=0,v=0;v<t.fryLetters.length;v++)t.fryLetters[h]===t.fryLetters[v]&&(m+=1);for(y=0;y<l.length;y++)t.fryLetters[h]===l[y]&&(g+=1);if(!(g<m)){e.next=22;break}return r("You need the letter ".concat(t.fryLetters[h]," at least ").concat(m," time").concat(1===m?".":"s.")),e.abrupt("return");case 22:h++,e.next=14;break;case 25:if(!t.validOnly){e.next=32;break}return e.next=28,(0,p.cO)(l);case 28:if(e.sent){e.next=32;break}return alert("Sorry, ".concat(l," is not in my word list. You can try again.")),e.abrupt("return");case 32:r("Checking your word ... shouldn't take long. If it does, please try rejoining the game."),a.send({type:u.j6,func:"move",pass:!1,thisisme:i,gameid:t.gameid,nickname:o,timestamp:Date.now(),clientRound:t.round,clientMovesLength:t.movesThisRound.length,word:l}),c("");case 35:case"end":return e.stop()}}),e)})))).apply(this,arguments)}j.propTypes={setWhereto:c().func.isRequired,client:c().any,thisisme:c().string.isRequired,wsmessage:c().string.isRequired,nickname:c().string.isRequired,gameid:c().string.isRequired},n.default=j},6832:function(e,n,t){t.r(n);var r=t(5893),s=t(7294),a=t(5697),i=t.n(a);function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function c(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=function(e){var n=e.gameid,t=void 0===n?"":n,a=e.client,i=e.nickname,o=e.msgs,l=void 0===o?[]:o,u=e.setMsgs,d=e.participant,f=void 0===d?"":d,h=(0,s.useState)(""),m=h[0],p=h[1];return(0,r.jsx)("div",{id:"ScrollableChat",className:"thinChat",children:(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[l.map((function(e,n){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("tr",{children:(0,r.jsx)("td",{className:"thinChatFrom",children:e.from})},"ChatMessageFrom".concat(n)),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{className:"thinChatMsg",children:e.msg})},"ChatMessageMsg".concat(n))]})})),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:""===i?(0,r.jsx)("span",{children:"Please enter nickname to use chat"}):(0,r.jsx)("textarea",{className:""===m?"thinChatInputEmpty":"thinChatInput",name:"nextmsgInputArea",value:m,onChange:function(e){p(e.target.value)},onKeyDownCapture:function(e){if("Enter"===e.key&&m.length>0){e.preventDefault();var n=c(l).concat([{from:i,msg:m}]),r=m;return u(n),p(""),void a.send({gameid:t,nickname:i,type:a.clientType,func:"chat",sender:f,sendmsg:r})}if("Backspace"===e.key&&m.length>0){e.preventDefault();var s=m.slice(0,m.length-1);p(s)}},placeholder:"chat..."})})})]})})})};l.propTypes={gameid:i().string.isRequired,client:i().any,nickname:i().string.isRequired,msgs:i().arrayOf(i().string),setMsgs:i().func.isRequired,participant:i().string.isRequired},n.default=l}}]);