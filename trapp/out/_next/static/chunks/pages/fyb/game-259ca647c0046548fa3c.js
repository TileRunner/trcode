(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[681],{4339:function(e,n,s){"use strict";s.d(n,{j6:function(){return t},dK:function(){return a},oZ:function(){return r},e:function(){return i},dY:function(){return l},$B:function(){return c}});var t="fyb",a="U",r="P",i="GAME_DATA",l="GAME_CREATED",c=2e4},1863:function(e,n,s){"use strict";s.r(n);var t=s(5893),a=s(7294),r=s(4339);function i(e,n){return(0,t.jsxs)("div",{className:"w3-panel",children:[(0,t.jsxs)("h2",{className:"w3-black w3-padding-small w3-cell",children:[e,":"]}),(0,t.jsx)("table",{children:n.map((function(n){return(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{className:"w3-green",children:["\xa0",n.nickname,":"]}),(0,t.jsxs)("td",{children:["\xa0",n.pass?(0,t.jsx)("span",{className:"w3-black",children:" passed"}):(0,t.jsx)("span",{className:"w3-monospace ".concat(n.valid?"":"w3-red"),children:n.word})]})]},"".concat(e).concat(n.nickname))}))})]})}function l(e,n,s,a,i,l,o,d,u){return(0,t.jsxs)("div",{className:"w3-quarter w3-margin",onKeyDownCapture:e,children:[(0,t.jsx)("label",{children:"Enter Word:"}),(0,t.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"text",autoComplete:"off",spellCheck:"false",name:"word",value:n,onChange:function(e){s(e.target.value)}}),n.toUpperCase().trim().match("^[a-zA-Z]*$")&&(0,t.jsx)("button",{className:"w3-button w3-green w3-margin",onClick:function(){c(n,a,i,l,o,d,u,s)},children:"SUBMIT"},"submitWord"),(0,t.jsx)("button",{className:"w3-button w3-red w3-margin",onClick:function(){!function(e,n,s,t,a,i){e("Sending PASS ... shouldn't take long."),n.send({type:r.j6,func:"move",pass:!0,valid:!1,thisisme:s,gameid:t,nickname:a,timestamp:Date.now(),word:""}),i("")}(i,l,o,d,u,s)},children:"PASS"},"passButton")]})}function c(e,n,s,t,a,i,l,c){for(var o=e.toUpperCase().trim(),d=0;d<n.length;d++){for(var u=0,m=0,h=0;h<n.length;h++)n[d]===n[h]&&(u+=1);for(var f=0;f<o.length;f++)n[d]===o[f]&&(m+=1);if(m<u)return void s("You need the letter ".concat(n[d]," at least ").concat(u," time").concat(1===u?".":"s."))}s("Checking your word ... shouldn't take long. If it does, please try rejoining the game."),t.send({type:r.j6,func:"move",pass:!1,thisisme:a,gameid:i,nickname:l,timestamp:Date.now(),word:o}),c("")}n.default=function(e){var n=e.setWhereto,s=e.client,o=e.thisisme,d=e.wsmessage,u=e.nickname,m=e.gameid,h=(0,a.useState)(""),f=h[0],w=h[1],p=(0,a.useState)({goal:99,whoseturn:-1,players:[{index:0,nickname:"Loading..."}]}),v=p[0],g=p[1],j=(0,a.useState)(""),x=j[0],y=j[1],N=(0,a.useState)(""),k=N[0],b=N[1];(0,a.useEffect)((function(){var e=setInterval((function(){v.whoseturn>-1&&v.players.length>0&&s.send({type:r.j6,func:"interval",syncstamp:k,thisisme:o,nickname:u,gameid:v.gameid})}),r.$B);return function(){return clearInterval(e)}})),(0,a.useEffect)((function(){""!==d&&function(e){var n=JSON.parse(e);n.type===r.j6&&(n.func===r.e?(w(n.snat),g(n.game),b(n.game.syncstamp)):(n.func=r.dY)||w("Unhandled message: ".concat(e)))}(d)}),[d]);var C=function(){if(v.whoseturn<0)return!1;if(v.freeforall){if(v.excludedPlayer===u)return!1;for(var e=0;e<v.freeforallMoves.length;e++)if(v.freeforallMoves[e].nickname===u)return!1;return!0}return u===v.players[v.whoseturn].nickname};return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"w3-teal w3-cell-row",children:[(0,t.jsx)("div",{className:"w3-container w3-cell w3-cell-middle w3-padding w3-mobile",children:(0,t.jsx)("h1",{className:"myHeadingFont",children:"Fry Your Brain"})}),(0,t.jsxs)("div",{className:"w3-container w3-cell w3-mobile",children:[(0,t.jsxs)("h4",{className:"myCommonFont",children:["Game id: ",m]}),(0,t.jsxs)("h4",{className:"myCommonFont",children:["First to ",v.goal]})]}),(0,t.jsx)("div",{className:"w3-container w3-cell w3-padding w3-mobile",children:(0,t.jsx)("button",{className:"w3-button",onClick:function(){n("menu")},children:(0,t.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})})]}),(0,t.jsxs)("div",{className:"w3-panel w3-responsive",children:[(0,t.jsx)("h2",{className:"w3-black w3-padding-small w3-cell",children:"Player totals:"}),(0,t.jsx)("table",{children:(0,t.jsx)("tbody",{children:v.players.map((function(e){return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"w3-green",children:e.nickname}),(0,t.jsxs)("td",{class:"w3-monospace",children:["\xa0\xa0",e.points<10?(0,t.jsx)("span",{children:"\xa0"}):"",e.points,e.points>=v.goal&&(0,t.jsx)("span",{class:"w3-purple w3-cursive w3-margin w3-wide",children:"Winner!"})]})]},"Player".concat(e.index))}))})})]}),v.movesPrevRound&&v.movesPrevRound.length>0&&i("Moves previous round",v.movesPrevRound),v.movesThisRound&&v.movesThisRound.length>0&&i("Moves this round",v.movesThisRound),!v.freeforall&&v.freeforallMoves&&v.freeforallMoves.length>0&&i("Free-for-all results",v.freeforallMoves),v.whoseturn>-1&&(0,t.jsx)("div",{className:"w3-panel w3-row",children:(0,t.jsxs)("h2",{className:"w3-black w3-cell w3-padding-small",children:["Fry Letters: ",v.fryLetters.map((function(e,n){return(0,t.jsx)("span",{className:"FryLetter",children:e},"FryLetter".concat(n))}))]})}),C()&&l((function(e){if(C())return"Enter"===e.key?(e.preventDefault(),void c(x,v.fryLetters,w,s,o,m,u,y)):void 0}),x,y,v.fryLetters,w,s,o,m,u),(0,t.jsxs)("div",{className:"w3-container",children:[(0,t.jsx)("p",{children:f}),v.gameOver&&(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"w3-black w3-cell w3-padding-small",children:"Game Over"}),(0,t.jsx)("button",{className:"w3-button w3-green w3-margin",onClick:function(){!function(e,n,s,t){e.send({type:r.j6,func:"replay",thisisme:n,game:s,nickname:t,timestamp:Date.now()})}(s,o,v,u)},children:"PLAY AGAIN"})]})]})]})}},1313:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fyb/game",function(){return s(1863)}])}},function(e){e.O(0,[774,888,179],(function(){return n=1313,e(e.s=n);var n}));var n=e.O();_N_E=n}]);