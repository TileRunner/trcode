(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[504],{4339:function(e,n,t){"use strict";t.d(n,{j6:function(){return a},dK:function(){return s},oZ:function(){return r},e:function(){return i},$B:function(){return o}});var a="fyb",s="U",r="P",i="GAME_DATA",o=2e4},4891:function(e,n,t){"use strict";t.r(n);var a=t(5893),s=t(7294),r=t(5518),i=t(5354),o=t(1863),c=t(4339),l=t(5877);n.default=function(e){var n=e.setWhereto,t=(0,s.useState)((0,l.v4)())[0],u=(0,s.useState)(c.dK),m=u[0],d=u[1],h=(0,s.useState)(""),f=h[0],w=h[1],p=(0,s.useState)(""),v=p[0],y=p[1],x=(0,s.useState)(""),g=x[0],j=x[1],b=(0,s.useState)(2),N=b[0],k=b[1],C="wss://tilerunner.herokuapp.com/?clientType=fyb&thisisme="+t,P=(0,s.useState)(new r.Z(C,(function(e){w(e.data)}),"fyb",t))[0];return(0,s.useEffect)((function(){return P.connect()}),[]),(0,a.jsxs)(a.Fragment,{children:[m===c.dK&&(0,a.jsx)(i.default,{setWhereto:n,client:P,thisisme:t,setParticipant:d,wsmessage:f,nickname:v,setNickname:y,gameid:g,setGameid:j,numPlayers:N,setNumPlayers:k}),m===c.oZ&&(0,a.jsx)(o.default,{setWhereto:n,client:P,thisisme:t,setParticipant:d,wsmessage:f,nickname:v,gameid:g,numPlayers:N})]})}},1863:function(e,n,t){"use strict";t.r(n);var a=t(809),s=t.n(a),r=t(2447),i=t(5893),o=t(7294),c=t(4339);function l(e,n,t,a,s,r){return(0,i.jsxs)("div",{className:"w3-quarter w3-margin",onKeyDownCapture:e,children:[(0,i.jsx)("label",{children:"Enter Word:"}),(0,i.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"text",name:"word",value:n,onChange:function(e){t(e.target.value.toUpperCase())}})]})}function u(){return(u=(0,r.Z)(s().mark((function e(n,t,a,r,i,o,l){var u,m,d,h,f,w,p;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=0;case 1:if(!(u<t.length)){e.next=12;break}for(m=0,d=0,h=0;h<t.length;h++)t[u]===t[h]&&(m+=1);for(f=0;f<n.length;f++)t[u]===n[f]&&(d+=1);if(!(d<m)){e.next=9;break}return a("You need the letter ".concat(t[u]," at least ").concat(m," time").concat(1===m?".":"s.")),e.abrupt("return");case 9:u++,e.next=1;break;case 12:return a("Checking your word ... shouldn't take long."),"https://tilerunner.herokuapp.com/ENABLE2K?exists=",e.next=16,fetch("https://tilerunner.herokuapp.com/ENABLE2K?exists="+n);case 16:return w=e.sent,e.next=19,w.json();case 19:p=e.sent,r.send({type:c.j6,func:"move",valid:p.exists,thisisme:i,gameid:o,nickname:l,timestamp:Date.now(),word:n});case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.default=function(e){var n=e.setWhereto,t=e.client,a=e.thisisme,s=(e.setParticipant,e.wsmessage),r=e.nickname,m=e.gameid,d=e.numPlayers,h=(0,o.useState)(""),f=h[0],w=h[1],p=(0,o.useState)({whoseturn:-1,players:[{index:0,nickname:"Loading..."}]}),v=p[0],y=p[1],x=(0,o.useState)(""),g=x[0],j=x[1],b=(0,o.useState)(""),N=b[0],k=b[1];(0,o.useEffect)((function(){var e=setInterval((function(){t.send({type:c.j6,func:"interval",syncstamp:N,thisisme:a,nickname:r,gameid:v.gameid})}),c.$B);return function(){return clearInterval(e)}})),(0,o.useEffect)((function(){""!==s&&function(e){var n=JSON.parse(e);n.type===c.j6&&(n.func===c.e?(console.log(n.game),w(n.snat),y(n.game),k(n.game.syncstamp)):w("Unhandled message: ".concat(e)))}(s)}),[s]);var C=function(){if(v.whoseturn<0)return!1;if(v.freeforall){if(v.excludedPlayer===r)return!1;for(var e=0;e<v.playersWhoMoved.length;e++)if(v.playersWhoMoved[e].nickname===r)return!1;return!0}return r===v.players[v.whoseturn].nickname};return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"w3-teal w3-cell-row",children:[(0,i.jsx)("div",{className:"w3-container w3-cell w3-cell-middle w3-padding w3-mobile",children:(0,i.jsx)("h1",{className:"myHeadingFont",children:"Fry Your Brain"})}),(0,i.jsxs)("div",{className:"w3-container w3-cell w3-mobile",children:[(0,i.jsxs)("h4",{className:"myCommonFont",children:["Game id: ",m]}),(0,i.jsxs)("h4",{className:"myCommonFont",children:["Nickname: ",r]}),(0,i.jsxs)("h4",{className:"myCommonFont",children:[d," player game"]})]}),(0,i.jsx)("div",{className:"w3-container w3-cell w3-padding w3-mobile",children:(0,i.jsx)("button",{className:"w3-button",onClick:function(){n("menu")},children:(0,i.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})})]}),(0,i.jsx)("h1",{children:"Game under construction"}),(0,i.jsx)("p",{children:f}),(0,i.jsx)("div",{className:"w3-container w3-responsive w3-quarter",children:(0,i.jsxs)("table",{className:"w3-table w3-card",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{className:"w3-teal",children:[(0,i.jsx)("th",{children:"Player"}),(0,i.jsx)("th",{children:"Points"})]})}),(0,i.jsx)("tbody",{children:v.players.map((function(e){return(0,i.jsxs)("tr",{className:"w3-green",children:[(0,i.jsx)("td",{children:e.nickname}),(0,i.jsxs)("td",{class:"w3-monospace",children:["\xa0\xa0",e.points<10?(0,i.jsx)("span",{children:"\xa0"}):"",e.points]})]},"Player".concat(e.index))}))})]})}),!v.freeforall&&v.playersWhoMoved&&v.playersWhoMoved.length>0&&(0,i.jsxs)("div",{class:"w3-container",children:[(0,i.jsx)("h2",{children:"Previous free for all results:"}),v.playersWhoMoved.map((function(e){return(0,i.jsxs)("p",{children:[e.nickname," played ",e.word," ",e.valid?"(valid)":"(invalid)"]},"PlayerWhoMovedFFA".concat(e.nickname))}))]}),v.movesThisRound&&v.movesThisRound.length>0&&(0,i.jsxs)("div",{className:"w3-container",children:[(0,i.jsx)("h2",{children:"Moves this round:"}),v.movesThisRound.map((function(e){return(0,i.jsxs)("p",{children:[e.nickname," played ",e.word," ",e.valid?"(valid)":"(invalid)"]},"PlayerWhoMovedThisRound".concat(e.nickname))}))]}),v.fryLetters&&(0,i.jsx)("div",{className:"w3-container",children:(0,i.jsxs)("h2",{className:"w3-white w3-quarter",children:["Fry Letters: ",v.fryLetters]})}),C()&&l((function(e){if(C())return"Enter"===e.key?(e.preventDefault(),void function(e,n,t,a,s,r,i){u.apply(this,arguments)}(g,v.fryLetters,w,t,a,m,r)):void 0}),g,j,v.fryLetters,w,t)]})}},5354:function(e,n,t){"use strict";t.r(n);var a=t(5893),s=t(7294),r=(t(1664),t(4339));function i(e,n,t){return(0,a.jsxs)("div",{className:"w3-row-padding h4",children:[(0,a.jsxs)("div",{className:"w3-quarter",children:[(0,a.jsx)("label",{children:"Nickname:"}),(0,a.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"text",name:"nickname",value:e,onChange:function(e){n(e.target.value)}})]}),e&&(0,a.jsx)("div",{className:"w3-quarter",children:(0,a.jsx)("button",{className:"w3-button w3-border w3-blue myCommonFont",type:"submit",onClick:function(){t(!0)},children:"SUBMIT"})})]})}function o(e){return(0,a.jsxs)("div",{className:"w3-row-padding h4",children:[(0,a.jsx)("div",{className:"w3-quarter",children:(0,a.jsx)("button",{className:"w3-button w3-border w3-blue myCommonFont",type:"submit",id:"chooseCreateGame",onClick:function(){e("C")},children:"CREATE A GAME"})}),(0,a.jsx)("div",{className:"w3-quarter",children:(0,a.jsx)("button",{className:"w3-button w3-border w3-blue myCommonFont",type:"submit",id:"chooseJoinGame",onClick:function(){e("J")},children:"JOIN A GAME"})})]})}function c(e,n,t,s,r,i,o){return(0,a.jsxs)("div",{className:"w3-row-padding h4",children:[(0,a.jsxs)("div",{className:"w3-quarter",children:[(0,a.jsx)("label",{children:"Game ID:"}),(0,a.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"text",name:"gameid",value:t,onChange:function(e){s(e.target.value)}})]}),(0,a.jsxs)("div",{className:"w3-quarter",children:[(0,a.jsx)("label",{children:"Number of Players:"}),(0,a.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"number",name:"numPlayers",value:r,onChange:function(e){e.target.value.match(/[23456]/)&&i(e.target.value)}})]}),t&&(0,a.jsx)("div",{className:"w3-quarter",children:(0,a.jsx)("button",{id:"requestCreateGame",className:"w3-button w3-border w3-blue myCommonFont",type:"submit",onClick:function(){!function(e,n,t,a,s){e.send({type:"fyb",func:"create",thisisme:n,gameid:t,numPlayers:a,nickname:s,timestamp:Date.now()})}(e,n,t,r,o)},children:"SUBMIT"})})]})}function l(e,n,t,s,r){return(0,a.jsxs)("div",{className:"w3-row-padding h4",children:[(0,a.jsxs)("div",{className:"w3-quarter",children:[(0,a.jsx)("label",{children:"Game ID to join:"}),(0,a.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"text",name:"gameid",value:t,onChange:function(e){s(e.target.value)}})]}),t&&(0,a.jsx)("div",{className:"w3-quarter",children:(0,a.jsx)("button",{id:"requestJoinGame",className:"w3-button w3-border w3-blue myCommonFont",type:"submit",onClick:function(){!function(e,n,t,a){e.send({type:"fyb",func:"join",thisisme:n,gameid:t,nickname:a,timestamp:Date.now()})}(e,n,t,r)},children:"SUBMIT"})})]})}n.default=function(e){var n=e.setWhereto,t=e.client,u=e.thisisme,m=e.setParticipant,d=e.wsmessage,h=e.nickname,f=e.setNickname,w=e.gameid,p=e.setGameid,v=e.numPlayers,y=e.setNumPlayers,x=(0,s.useState)(""),g=x[0],j=x[1],b=(0,s.useState)(!1),N=b[0],k=b[1],C=(0,s.useState)(""),P=C[0],F=C[1];return(0,s.useEffect)((function(){""!==d&&function(e){var n=JSON.parse(e);j(e),"fyb"===n.type&&(n.func===r.e?n.thisisme===u?(w!==n.game.gameid&&p(n.game.gameid),v!==n.game.numPlayers&&y(n.game.numPlayers),m(r.oZ)):j("".concat(n.nickname," just created game ").concat(n.gameid,".")):"gameidtaken"===n.func?j("That game ID is already taken"):"gamejoined"===n.func?n.thisisme===u?(w!==n.game.gameid&&p(n.game.gameid),y(n.game.numPlayers),m(r.oZ)):j("".concat(n.nickname," just joined game ").concat(n.game.gameid,".")):"gameidunknown"===n.func?j("That game ID is not being used"):"gamefull"===n.func?j("That game is full"):j("Unhandled message: ".concat(e)))}(d)}),[d]),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"w3-container w3-teal w3-bar",children:[(0,a.jsx)("h1",{className:"w3-bar-item w3-centre myHeadingFont",children:"Fry Your Brain Lobby"}),(0,a.jsx)("div",{className:"w3-bar-item w3-right",children:(0,a.jsx)("button",{className:"w3-button",onClick:function(){n("menu")},children:(0,a.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})})]}),(0,a.jsx)("h1",{children:"Lobby under construction"}),(0,a.jsx)("p",{children:g}),!N&&i(h,f,k),N&&!P&&o(F),N&&"C"===P&&c(t,u,w,p,v,y,h),N&&"J"===P&&l(t,u,w,p,h)]})}},4047:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,{Z:function(){return a}})},2700:function(e,n,t){"use strict";function a(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,n,t){return n&&a(e.prototype,n),t&&a(e,t),e}t.d(n,{Z:function(){return s}})},5877:function(e,n,t){var a=t(3570),s=t(1171),r=s;r.v1=a,r.v4=s,e.exports=r},5327:function(e){for(var n=[],t=0;t<256;++t)n[t]=(t+256).toString(16).substr(1);e.exports=function(e,t){var a=t||0,s=n;return[s[e[a++]],s[e[a++]],s[e[a++]],s[e[a++]],"-",s[e[a++]],s[e[a++]],"-",s[e[a++]],s[e[a++]],"-",s[e[a++]],s[e[a++]],"-",s[e[a++]],s[e[a++]],s[e[a++]],s[e[a++]],s[e[a++]],s[e[a++]]].join("")}},5217:function(e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var t=new Uint8Array(16);e.exports=function(){return n(t),t}}else{var a=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0===(3&n)&&(e=4294967296*Math.random()),a[n]=e>>>((3&n)<<3)&255;return a}}},3570:function(e,n,t){var a,s,r=t(5217),i=t(5327),o=0,c=0;e.exports=function(e,n,t){var l=n&&t||0,u=n||[],m=(e=e||{}).node||a,d=void 0!==e.clockseq?e.clockseq:s;if(null==m||null==d){var h=r();null==m&&(m=a=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==d&&(d=s=16383&(h[6]<<8|h[7]))}var f=void 0!==e.msecs?e.msecs:(new Date).getTime(),w=void 0!==e.nsecs?e.nsecs:c+1,p=f-o+(w-c)/1e4;if(p<0&&void 0===e.clockseq&&(d=d+1&16383),(p<0||f>o)&&void 0===e.nsecs&&(w=0),w>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");o=f,c=w,s=d;var v=(1e4*(268435455&(f+=122192928e5))+w)%4294967296;u[l++]=v>>>24&255,u[l++]=v>>>16&255,u[l++]=v>>>8&255,u[l++]=255&v;var y=f/4294967296*1e4&268435455;u[l++]=y>>>8&255,u[l++]=255&y,u[l++]=y>>>24&15|16,u[l++]=y>>>16&255,u[l++]=d>>>8|128,u[l++]=255&d;for(var x=0;x<6;++x)u[l+x]=m[x];return n||i(u)}},1171:function(e,n,t){var a=t(5217),s=t(5327);e.exports=function(e,n,t){var r=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||a)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n)for(var o=0;o<16;++o)n[r+o]=i[o];return n||s(i)}}}]);