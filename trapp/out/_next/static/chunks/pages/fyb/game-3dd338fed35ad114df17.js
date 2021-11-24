(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[681],{4339:function(e,n,t){"use strict";t.d(n,{j6:function(){return r},dK:function(){return s},oZ:function(){return a},e:function(){return o},$B:function(){return i}});var r="fyb",s="U",a="P",o="GAME_DATA",i=2e4},1863:function(e,n,t){"use strict";t.r(n);var r=t(1385),s=t(5893),a=t(7294),o=t(4339);function i(e,n){return n.map((function(n){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"fybGamePlayer",children:n.nickname}),(0,s.jsx)("td",{className:"fybGameWord",children:n.pass?(0,s.jsx)("span",{className:"fybGameWord pass",children:" passed"}):(0,s.jsx)("span",{className:"fybGameWord ".concat(n.valid?"valid":"invalid"),children:n.word})})]},"".concat(e).concat(n.nickname))}))}function c(e,n,t,r,a,i,c,f){return(0,s.jsxs)("div",{onKeyDownCapture:e,children:[(0,s.jsx)("div",{className:"fybGameEnterWordLabel",children:"Enter Word:"}),(0,s.jsx)("input",{type:"text",autoComplete:"off",spellCheck:"false",name:"word",value:n,onChange:function(e){t(e.target.value)}}),(0,s.jsxs)("div",{children:[n.toUpperCase().trim().match("^[a-zA-Z]*$")&&(0,s.jsx)("button",{className:"fybGameWordSubmitButton",onClick:function(){l(n,r,a,i,c,f,t)},children:"SUBMIT"},"submitWord"),(0,s.jsx)("button",{className:"fybGameWordPassButton",onClick:function(){!function(e,n,t,r,s,a){e("Sending PASS ... shouldn't take long."),n.send({type:o.j6,func:"move",pass:!0,valid:!1,thisisme:t,gameid:r,nickname:s,timestamp:Date.now(),word:""}),a("")}(a,i,c,r.gameid,f,t)},children:"PASS"},"passButton")]})]})}function l(e,n,t,r,s,a,i){for(var c=e.toUpperCase().trim(),l=0;l<n.movesThisRound.length;l++){var f=n.movesThisRound[l].word;if(f===c)return void t("You cannot reuse a previous word from this round (".concat(f,")."));if(f+"S"===c&&"S"!==f.substring(f.length-1)&&n.movesThisRound[l].valid)return void t("You cannot add S to a previous valid word (".concat(f,") from this round unless it ends with S."))}for(var u=0;u<n.fryLetters.length;u++){for(var d=0,m=0,h=0;h<n.fryLetters.length;h++)n.fryLetters[u]===n.fryLetters[h]&&(d+=1);for(var y=0;y<c.length;y++)n.fryLetters[u]===c[y]&&(m+=1);if(m<d)return void t("You need the letter ".concat(n.fryLetters[u]," at least ").concat(d," time").concat(1===d?".":"s."))}t("Checking your word ... shouldn't take long. If it does, please try rejoining the game."),r.send({type:o.j6,func:"move",pass:!1,thisisme:s,gameid:n.gameid,nickname:a,timestamp:Date.now(),word:c}),i("")}n.default=function(e){var n=e.setWhereto,t=e.client,f=e.thisisme,u=e.wsmessage,d=e.nickname,m=e.gameid,h=(0,a.useState)(""),y=h[0],v=h[1],p=(0,a.useState)({goal:99,whoseturn:-1,fryLetters:[],players:[{index:0,nickname:"Loading..."}]}),b=p[0],j=p[1],g=(0,a.useState)(""),x=g[0],N=g[1],S=(0,a.useState)(""),L=S[0],w=S[1],k=(0,a.useState)(-1),G=k[0],C=k[1];(0,a.useEffect)((function(){var e=setInterval((function(){b.whoseturn>-1&&b.players.length>0&&t.send({type:o.j6,func:"interval",syncstamp:L,thisisme:f,nickname:d,gameid:b.gameid})}),o.$B);return function(){return clearInterval(e)}})),(0,a.useEffect)((function(){""!==u&&function(e){var n=JSON.parse(e);n.type===o.j6&&(n.func===o.e?(v(n.snat),n.game.fryLetters&&b.fryLetters&&n.game.fryLetters.join()!==b.fryLetters.join()&&C(-1),j(n.game),w(n.game.syncstamp)):(n.func=o.S2C_FUNC_GAMECREATED)||v("Unhandled message: ".concat(e)))}(u)}),[u]);var A=function(){if(b.whoseturn<0)return!1;if(b.freeforall){if(b.excludedPlayer===d)return!1;for(var e=0;e<b.freeforallMoves.length;e++)if(b.freeforallMoves[e].nickname===d)return!1;return!0}return d===b.players[b.whoseturn].nickname};return(0,s.jsxs)("div",{className:"container fybGame",children:[(0,s.jsxs)("div",{className:"fybHeaderDiv",children:[(0,s.jsx)("span",{className:"h2",children:"Fry Your Brain"}),(0,s.jsx)("button",{className:"fybHomeButton",onClick:function(){n("menu")},children:(0,s.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),(0,s.jsx)("div",{className:"fybHeaderDiv",children:(0,s.jsxs)("span",{className:"h4",children:["Game id: ",m]})}),(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{colSpan:"2",className:"fybGameSectionHeader",children:["First to ",b.goal," wins!"]})}),b.players.map((function(e){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"fybGamePlayer",children:e.nickname}),(0,s.jsxs)("td",{className:"fybGameScore",children:[e.points<10?(0,s.jsx)("span",{children:"\xa0"}):"",e.points,e.points>=b.goal&&(0,s.jsx)("span",{className:"fybWinner",children:"Winner!"})]})]},"Player".concat(e.index))})),b.movesPrevRound&&b.movesPrevRound.length>0&&(0,s.jsx)("tr",{children:(0,s.jsx)("td",{className:"fybGameSectionHeader",colSpan:"2",children:"Previous round:"})}),b.movesPrevRound&&b.movesPrevRound.length>0&&i("movesPrevRound",b.movesPrevRound),b.movesThisRound&&b.movesThisRound.length>0&&(0,s.jsx)("tr",{children:(0,s.jsx)("td",{className:"fybGameSectionHeader",colSpan:"2",children:"This round:"})}),b.movesThisRound&&b.movesThisRound.length>0&&i("movesThisRound",b.movesThisRound),!b.freeforall&&b.freeforallMoves&&b.freeforallMoves.length>0&&(0,s.jsx)("tr",{children:(0,s.jsx)("td",{className:"fybGameSectionHeader",colSpan:"2",children:"Free-for-all:"})}),!b.freeforall&&b.freeforallMoves&&b.freeforallMoves.length>0&&i("ffaMoves",b.freeforallMoves)]})}),b.whoseturn>-1&&(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"fybGameFryLettersLabel",children:["Fry Letters:",(0,s.jsx)("button",{className:"fybGameShuffleButton",onClick:function(){for(var e=b.fryLetters.length,n=(0,r.Z)(b.fryLetters),t=[];t.length<e;){var s=Math.floor(Math.random()*n.length);t.push(n[s]),n.splice(s,1)}var a=JSON.parse(JSON.stringify(b));a.fryLetters=[].concat(t),j(a)},children:(0,s.jsx)("i",{className:"material-icons fybGameShuffleButtonIcon",children:"cached"})}),(0,s.jsx)("button",{className:"fybGameShuffleButton",onClick:function(){var e=(0,r.Z)(b.fryLetters);e.sort();var n=JSON.parse(JSON.stringify(b));n.fryLetters=(0,r.Z)(e),j(n)},children:(0,s.jsx)("i",{className:"material-icons fybGameShuffleButtonIcon",children:"sort_by_alpha"})})]}),(0,s.jsx)("div",{className:"fryLetterDiv",children:b.fryLetters.map((function(e,n){return(0,s.jsx)("span",{className:n===G?"fybFryLetter Selected":"fybFryLetter",onDoubleClick:function(){var e=b.fryLetters[n],t=(0,r.Z)(b.fryLetters);t.splice(n,1),t.push(e);var s=JSON.parse(JSON.stringify(b));s.fryLetters=(0,r.Z)(t),j(s),C(-1)},onClick:function(){if(-1===G)C(n);else if(n===G)C(-1);else{for(var e=[],t=b.fryLetters[G],r=0;r<b.fryLetters.length;r++){var s=b.fryLetters[r];r===n&&e.push(t),r!==G&&e.push(s)}var a=JSON.parse(JSON.stringify(b));a.fryLetters=[].concat(e),j(a),C(-1)}},children:e},"FryLetter".concat(n))}))})]}),A()&&c((function(e){if(A())return"Enter"===e.key?(e.preventDefault(),void l(x,b,v,t,f,d,N)):void 0}),x,N,b,v,t,f,d),(0,s.jsxs)("div",{children:[b.gameOver&&(0,s.jsxs)("div",{className:"fybGameOver",children:[(0,s.jsx)("span",{className:"fybGameSectionHeader",children:"Game Over"}),(0,s.jsx)("button",{className:"fybGameWordSubmitButton",onClick:function(){!function(e,n,t,r){e.send({type:o.j6,func:"replay",thisisme:n,game:t,nickname:r,timestamp:Date.now()})}(t,f,b,d)},children:"PLAY AGAIN"})]}),(0,s.jsx)("p",{className:"fybSnat",children:y})]})]})}},1313:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fyb/game",function(){return t(1863)}])},1385:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function s(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{Z:function(){return s}})}},function(e){e.O(0,[774,888,179],(function(){return n=1313,e(e.s=n);var n}));var n=e.O();_N_E=n}]);