_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"2Skw":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pb/prisonbreak2",function(){return n("UOmD")}])},KQm4:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return s}))},UOmD:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("nKUr"),s=n("KQm4"),c=n("q1tI"),i=n("YFqc"),a=n.n(i);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}var b=function(){function e(t,n){o(this,e),this.callback=t,this.timerCalc=n,this.timer=null,this.tries=0}return u(e,[{key:"reset",value:function(){this.tries=0,clearTimeout(this.timer)}},{key:"scheduleTimeout",value:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout((function(){e.tries=e.tries+1,e.callback()}),this.timerCalc(this.tries+1))}}]),e}(),d=function(){function e(t,n){var r=this;o(this,e),this.customSocket=null,this.socketUrl=t,this.reconnectTimer=new b((function(){r.disconnect(),r.connect()}),this.reconnectAfterMs),this.messageFunction=n}return u(e,[{key:"reconnectAfterMs",value:function(e){return[1e3,2e3,5e3,1e4][e-1]||1e4}},{key:"connect",value:function(){var e=this;this.customSocket=new WebSocket(this.socketUrl),this.customSocket.onopen=function(t){console.log("connected to "+e.socketUrl)},this.customSocket.onclose=function(t){e.reconnectTimer.scheduleTimeout()},this.customSocket.onerror=function(e){},this.customSocket.onmessage=this.messageFunction}},{key:"disconnect",value:function(){this.customSocket.onclose=function(){},this.customSocket.close()}},{key:"send",value:function(e){this.customSocket.send(JSON.stringify(e))}}]),e}(),f=["0-0","0-7","0-14","7-0","7-14","14-0","14-7","14-14"],j=["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z","?","?"];function p(){var e=Object(c.useState)(!0),t=e[0],n=e[1],i=Object(c.useState)(""),a=i[0],o=i[1],l=Object(c.useState)(""),u=l[0],b=l[1],f=Object(c.useState)([]),j=f[0],p=f[1],O=Object(c.useState)(0),h=(O[0],O[1]),m=Object(c.useState)(new d("wss://tilerunner.herokuapp.com",(function(e){h((function(e){return e+1})),p((function(t){return[].concat(Object(s.a)(t),[e.data])}))}))),v=m[0];m[1];return Object(c.useEffect)((function(){return v.connect()}),[]),t||""===u?Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"In the lobby"}),Object(r.jsx)("label",{children:"Game id:\xa0"}),Object(r.jsx)("input",{name:"gameid",value:a,onChange:function(e){o(e.target.value)}}),Object(r.jsx)("label",{children:"\xa0"}),Object(r.jsx)("button",{id:"startgame",onClick:function(){a.length>0&&(b("P"),n(!1))},children:"Start Game"}),Object(r.jsx)("label",{children:"\xa0"}),Object(r.jsx)("button",{id:"joingame",onClick:function(){a.length>0&&(b("G"),n(!1))},children:"Join Game"}),j.map((function(e,t){return Object(r.jsx)("li",{children:e},t)}))]}):Object(r.jsx)(g,{prisonersOrGuards:u,gameid:a,wsmsgs:j,client:v,removeMessage:function(e){var t=j.indexOf(e),n=Object(s.a)(j);n.splice(t,1),p(n)}})}var O=function(e){var t="P"===e.squareusedby?"pbSquareUsedByPrisoners":"pbSquareUsedByGuards",n="."!==e.c?t:e.rcd[0]===e.ri&&e.rcd[1]===e.ci&&"r"===e.rcd[2]?"pbSquareRightArrow":e.rcd[0]===e.ri&&e.rcd[1]===e.ci&&"d"===e.rcd[2]?"pbSquareDownArrow":7===e.ri&&7===e.ci?"pbSquareCenterSquare":0!==e.ri&&7!==e.ri&&14!==e.ri||0!==e.ci&&7!==e.ci&&14!==e.ci?e.ri%2===e.ci%2?"pbSquare":"pbSquare2":"pbSquareEscapeHatch",s="."!==e.c?e.c:"pbSquareRightArrow"===n?"\u27a1":"pbSquareDownArrow"===n?"\u2b07":"pbSquareCenterSquare"===n?"\u2730":"pbSquareEscapeHatch"===n?"\ud83d\udcab":e.ri%2===e.ci%2?"\u2639":"\ua415";return Object(r.jsx)("button",{className:n,onClick:e.onClick,children:s})},h=function(e){var t=e.onClick,n=e.squares,s=e.usedby,c=e.rcd,i=function(e){return Object(r.jsx)("tr",{className:"row pbRow",children:n[e].map((function(n,i){return function(e,n,s,i){return Object(r.jsx)("td",{children:Object(r.jsx)(O,{c:s,ci:n,ri:e,squareusedby:i,rcd:c,onClick:function(){return t(e,n)}})},"Square".concat(e,"-").concat(n))}(e,i,n,s[e][i])}))},"BoardRow".concat(e))};return Object(r.jsx)("table",{className:"pbBoard",children:Object(r.jsx)("tbody",{children:n.map((function(e,t){return i(t)}))})})},g=function(e){var t=e.prisonersOrGuards,n=e.gameid,i=e.wsmsgs,o=e.client,l=e.removeMessage,u=Object(c.useState)([].concat(j)),b=u[0],d=u[1],p=Object(c.useState)([]),O=p[0],g=p[1],v=Object(c.useState)([]),y=v[0],k=v[1],x=Object(c.useState)(Array(15).fill(Array(15).fill("."))),w=x[0],C=x[1],N=Object(c.useState)(Array(15).fill(Array(15).fill(""))),P=N[0],T=N[1],G=Object(c.useState)(-1),E=G[0],R=G[1],M=Object(c.useState)("P"),A=M[0],I=M[1],F=Object(c.useState)([]),J=F[0],_=F[1],U=Object(c.useState)(0),L=U[0],D=U[1],B=Object(c.useState)([-1,-1,""]),H=B[0],K=B[1],Y=Object(c.useState)({squares:Object(s.a)(w),usedby:Object(s.a)(P),ptiles:Object(s.a)(O),gtiles:Object(s.a)(y)}),z=Y[0],V=Y[1];Object(c.useEffect)((function(){if("P"===t){for(var e=Object(s.a)(O),r=Object(s.a)(y),c=Object(s.a)(b);e.length<7;){var i=Math.floor(Math.random()*c.length);e.push(c[i]),c.splice(i,1),i=Math.floor(Math.random()*c.length),r.push(c[i]),c.splice(i,1)}e.sort(),r.sort(),k(r),g(e),d(c),V({squares:Object(s.a)(w),usedby:Object(s.a)(P),ptiles:Object(s.a)(e),gtiles:Object(s.a)(r)})}else try{console.log("Sending ggd"),o.send(JSON.stringify({gameid:n,type:"pb",func:"ggd"}))}catch(a){}}),[]),Object(c.useEffect)((function(){var e=i[0];e&&function(e){var r=JSON.parse(e);r.gameid===n&&"pb"===r.type&&("requestgamedata"===r.func&&r.requestor!==t&&o.send(JSON.stringify({gameid:n,type:"pb",func:"providegamedata",sender:t,tiles:b,squares:w,ptiles:O,gtiles:y,usedby:P,whoseturn:A,selection:E,currentcoords:J,snapshot:z,rescues:L})),"providegamedata"===r.func&&r.sender!==t&&(d(r.tiles),C(r.squares),g(r.ptiles),k(r.gtiles),T(r.usedby),I(r.whoseturn),R(r.selection),_(r.currentcoords),V(r.snapshot),D(r.rescues)),"ggd"===r.func&&"P"===t&&o.send(JSON.stringify({gameid:n,type:"pb",func:"sgd",tiles:b,squares:w,ptiles:O,gtiles:y,usedby:P,whoseturn:A,selection:E,currentcoords:J,snapshot:z,rescues:L})),"sgd"===r.func&&"G"===t&&(d(r.tiles),C(r.squares),g(r.ptiles),k(r.gtiles),T(r.usedby),I(r.whoseturn),R(r.selection),_(r.currentcoords),V(r.snapshot),D(r.rescues)),"ept"===r.func&&(I("G"),R(-1),K(-1,-1,""),_([]),C(r.squares),T(r.usedby),g(r.ptiles),d(r.tiles),D(r.rescues),V({squares:Object(s.a)(r.squares),usedby:Object(s.a)(r.usedby),ptiles:Object(s.a)(r.ptiles),gtiles:Object(s.a)(y)})),"egt"===r.func&&(I("P"),R(-1),K(-1,-1,""),_([]),C(r.squares),T(r.usedby),k(r.gtiles),d(r.tiles),V({squares:Object(s.a)(r.squares),usedby:Object(s.a)(r.usedby),ptiles:Object(s.a)(O),gtiles:Object(s.a)(r.gtiles)})));l(e)}(e)}),[i]);var W=function(e,t,n,r){var c=Object(s.a)(w),i=Object(s.a)(P),a=Object(s.a)(O),o=Object(s.a)(y),l=Object(s.a)(w[e]),u=w[e][t],b=Object(s.a)(J),d=String(e)+"-"+String(t),f=J.indexOf(d);if(-1===n&&(n=E,r=H),n>-1&&"."===u){l[t]="P"===A?a[n]:o[n],c[e]=Object(s.a)(l),"P"===A?a.splice(n,1):o.splice(n,1);var j=Object(s.a)(i[e]);return j[t]=A,i[e]=Object(s.a)(j),"P"===A&&n===a.length&&(n-=1),"G"===A&&n===o.length&&(n-=1),R(n),C(c),T(i),g(a),k(o),_([].concat(Object(s.a)(J),[d])),void K(r)}if(f>-1){"P"===A?a.push(u):o.push(u);var p=Object(s.a)(c[e]);p[t]=".",c[e]=Object(s.a)(p);var h=Object(s.a)(i[e]);return h[t]="",i[e]=Object(s.a)(h),R("P"===A?a.length-1:o.length-1),b.splice(f,1),C(c),T(i),g(a),k(o),_(b),void K(-1,-1,"")}if("."!==w[e][t]);else{var m=H[0]!==e||H[1]!==t?"r":"r"===H[2]?"d":"d"===H[2]?"":"r";K(r=[e,t,m])}},Q=function(){if(Z()){for(var e=L,t=0;t<J.length;t++)f.indexOf(J[t])>-1&&(e+=1);for(var r=Object(s.a)(O),c=Object(s.a)(b);r.length<7&&c.length>0;){var i=Math.floor(Math.random()*c.length);r.push(c[i]),c.splice(i,1)}r.sort(),I("G"),R(-1),_([]),g(r),d(c),D(e),V({squares:Object(s.a)(w),usedby:Object(s.a)(P),ptiles:Object(s.a)(r),gtiles:Object(s.a)(y)}),o.send(JSON.stringify({gameid:n,type:"pb",func:"ept",squares:w,usedby:P,ptiles:r,tiles:c,rescues:e}))}},X=function(){if(Z()){for(var e=Object(s.a)(y),t=Object(s.a)(b);e.length<7&&t.length>0;){var r=Math.floor(Math.random()*t.length);e.push(t[r]),t.splice(r,1)}e.sort();var c=Object(s.a)(w),i=Object(s.a)(P),a=Object(s.a)(O),l=Object(s.a)(y);I("P"),R(-1),_([]),k(e),d(t),V({squares:c,usedby:i,ptiles:a,gtiles:l}),o.send(JSON.stringify({gameid:n,type:"pb",func:"egt",squares:w,usedby:P,gtiles:e,tiles:t}))}};function Z(){if("."===w[7][7])return window.alert("First play must hit center square"),!1;for(var e=15,t=-1,n=15,r=-1,s=0;s<15;++s)for(var c=0;c<15;++c)if("."!==w[s][c]){if(!(s>0&&"."!==w[s-1][c])&&!(c>0&&"."!==w[s][c-1])&&!(s<14&&"."!==w[s+1][c])&&!(c<14&&"."!==w[s][c+1]))return window.alert("Each played tile must be part of a word"),!1;"."===z.squares[s][c]&&(s<e&&(e=s),s>t&&(t=s),c<n&&(n=c),c>r&&(r=c))}if(15===e)return window.alert("You didn't play any tiles"),!1;if(e!==t&&n!==r)return window.alert("Tiles played must be in a straight line"),!1;var i=!1,a=!1;for(s=e;s<=t;++s)for(c=n;c<=r;++c){if("."===w[s][c])return window.alert("There is a gap in your word"),!1;"."!==z.squares[s][c]&&(i=!0),e===t&&s>0&&"."!==w[s-1][c]&&(a=!0),e===t&&s<14&&"."!==w[s+1][c]&&(a=!0),n===r&&c>0&&"."!==w[s][c-1]&&(a=!0),n===r&&c<14&&"."!==w[s][c+1]&&(a=!0)}return e===t&&n>0&&"."!==z.squares[e][n-1]&&(i=!0),e===t&&r<14&&"."!==z.squares[e][r+1]&&(i=!0),n===r&&e>0&&"."!==z.squares[e-1][n]&&(i=!0),n===r&&t<14&&"."!==z.squares[t+1][n]&&(i=!0),!(!i&&!a&&"."!==z.squares[7][7])||(window.alert("Words must be connected"),!1)}var $=function(){C(Object(s.a)(z.squares)),T(Object(s.a)(z.usedby)),g(Object(s.a)(z.ptiles)),k(Object(s.a)(z.gtiles)),R(-1),_([])};return Object(r.jsxs)("div",{className:"container-fluid prisonbreak",onKeyDownCapture:function(e){if(e.preventDefault(),t===A)if("Enter"!==e.key){if(e.key.match(/^[A-Za-z\?]$/)){var n=e.key.toUpperCase(),r=("P"===A?O:y).indexOf(n);if(r>-1){var c=H[0],i=H[1],a=H[2];if(c>-1&&i>-1&&""!==a){if("r"===a){for(var o=-1,l=i+1;l<15&&-1===o;l++)"."===w[c][l]&&(o=l);return void W(c,i,r,-1===o?[-1,-1,""]:[c,o,"r"])}if("d"===a){for(var u=-1,b=c+1;b<15&&-1===u;b++)"."===w[b][i]&&(u=b);return void W(c,i,r,-1===u?[-1,-1,""]:[u,i,"d"])}}}}else if("Backspace"===e.key&&J.length>0){var d=J[J.length-1],f=Object(s.a)(J),j=Object(s.a)(O),p=Object(s.a)(y),h=Object(s.a)(P),m=Object(s.a)(w),v=[-1,-1,""],x=E;f.splice(J.length-1,1);var S=parseInt(d.split("-")[0]),q=parseInt(d.split("-")[1]),N=w[S][q];"P"===A?(j.push(N),x=j.length-1):(p.push(N),x=p.length-1),h[S][q]="",m[S][q]=".";var G=H[2];""!==G&&(v=[S,q,G],1===J.length&&(x=-1)),_(f),k(p),g(j),C(m),T(h),K(v),R(x)}}else"P"===A?Q():X()},children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-10 pbtitle",children:"Prison Break"}),Object(r.jsxs)("div",{className:"col-2 pbhomelink",children:[Object(r.jsx)("button",{id:"requestGameData","data-toggle":"tooltip",title:"Sync with opponent",onClick:function(){o.send(JSON.stringify({gameid:n,type:"pb",func:"requestgamedata",requestor:t}))},children:Object(r.jsx)("i",{className:"material-icons",children:"sync"})}),Object(r.jsx)(a.a,{href:"../../",children:Object(r.jsx)("a",{children:Object(r.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})})]})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-2 pbPrisoners",children:Object(r.jsx)(S,{ptiles:O,whoseturn:A,selection:E,onClick:function(e){return t=e,void("P"===A?R(t):alert("It is not your turn"));var t},onClickFinishTurn:function(){return Q()},onClickTileRecall:function(){return $()},onClickTileExchange:function(){return function(){if(b.length<7)window.alert("Need 7 in the bag to exchange");else{for(var e=[],t=Object(s.a)(b);e.length<7&&t.length>0;){var r=Math.floor(Math.random()*t.length);e.push(t[r]),t.splice(r,1)}e.sort(),(t=[].concat(Object(s.a)(t),Object(s.a)(z.ptiles))).sort(),console.log("Exchange ptiles"),console.log(z.ptiles),console.log(O),console.log(e),console.log(b),console.log(t),C(Object(s.a)(z.squares)),T(Object(s.a)(z.usedby)),I("G"),R(-1),_([]),g(e),d(t),V({squares:Object(s.a)(z.squares),usedby:Object(s.a)(z.usedby),ptiles:[].concat(e),gtiles:Object(s.a)(y)}),o.send(JSON.stringify({gameid:n,type:"pb",func:"ept",squares:z.squares,usedby:z.usedby,ptiles:e,tiles:t,rescues:L}))}}()},onClickPassPlay:function(){return $(),I("G"),void o.send(JSON.stringify({gameid:n,type:"pb",func:"ept",squares:z.squares,usedby:z.usedby,ptiles:z.ptiles,tiles:b,rescues:L}))},rescues:L,prisonersOrGuards:t})}),Object(r.jsx)("div",{className:"col-6",align:"center",children:t===A?Object(r.jsx)(h,{squares:w,usedby:P,rcd:H,onClick:function(e,t){return W(e,t,-1,null)}}):Object(r.jsx)(h,{squares:w,usedby:P,rcd:H})}),Object(r.jsx)("div",{className:"col-2 pbGuards",children:Object(r.jsx)(q,{gtiles:y,whoseturn:A,selection:E,onClick:function(e){return t=e,void("G"===A?R(t):alert("It is not your turn"));var t},onClickFinishTurn:function(){return X()},onClickTileRecall:function(){return $()},onClickTileExchange:function(){return function(){if(b.length<7)window.alert("Need 7 in the bag to exchange");else{for(var e=[],t=Object(s.a)(b);e.length<7&&t.length>0;){var r=Math.floor(Math.random()*t.length);e.push(t[r]),t.splice(r,1)}e.sort(),(t=[].concat(Object(s.a)(t),Object(s.a)(z.gtiles))).sort(),C(Object(s.a)(z.squares)),T(Object(s.a)(z.usedby)),I("P"),R(-1),_([]),k(e),d(t),V({squares:Object(s.a)(z.squares),usedby:Object(s.a)(z.usedby),ptiles:Object(s.a)(O),gtiles:[].concat(e)}),o.send(JSON.stringify({gameid:n,type:"pb",func:"egt",squares:z.squares,usedby:z.usedby,gtiles:e,tiles:t}))}}()},onClickPassPlay:function(){return $(),I("P"),void o.send(JSON.stringify({gameid:n,type:"pb",func:"egt",squares:z.squares,usedby:z.usedby,gtiles:z.gtiles,tiles:b}))},prisonersOrGuards:t})}),Object(r.jsx)("div",{className:"col-2",children:Object(r.jsx)(m,{tiles:b,othertiles:"P"===t?y:O})})]})]})},m=function(e){var t=[].concat(Object(s.a)(e.tiles),Object(s.a)(e.othertiles));return t.sort(),"?"===t[0]&&(t.splice(0,1),t.push("?")),"?"===t[0]&&(t.splice(0,1),t.push("?")),Object(r.jsxs)("div",{className:"pbTilepool",children:[Object(r.jsx)("h3",{children:"TILES"}),t.map((function(e,n){return Object(r.jsxs)("span",{children:[n>0&&e!==t[n-1]?Object(r.jsx)("div",{className:"pbTilepoolDivider"}):Object(r.jsx)(r.Fragment,{}),Object(r.jsx)("span",{className:"pbTilepoolTile",children:e})]},"tile".concat(n))}))]})},v=function(e){return Object(r.jsx)("span",{className:e.tileclass,onClick:e.onClick,children:e.tilevalue})},y=function(e){return Object(r.jsxs)("button",{className:"pbFinishTurn",onClick:e.onClick,children:[Object(r.jsx)("i",{className:"material-icons",children:"check"}),"Finish Turn"]})},k=function(e){return Object(r.jsxs)("button",{className:"pbRecallTiles",onClick:e.onClick,children:[Object(r.jsx)("i",{className:"material-icons",children:"undo"}),"Recall Tiles"]})},x=function(e){return Object(r.jsxs)("button",{className:"pbExchangeTiles",onClick:e.onClick,children:[Object(r.jsx)("i",{className:"material-icons",children:"sentiment_very_dissatisfied"}),"Exchange Tiles"]})},w=function(e){return Object(r.jsxs)("button",{className:"pbPassPlay",onClick:e.onClick,children:[Object(r.jsx)("i",{className:"material-icons",children:"sentiment_neutral"}),"Pass"]})},S=function(e){var t;return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"PRISONERS"}),Object(r.jsx)("p",{className:"pbTilerack",children:e.ptiles.map((function(t,n){return s="P"===e.whoseturn&&e.selection===n?"pbTileOnRackSelectedP":"pbTileOnRackP",c=n,i="P"===e.prisonersOrGuards?t:"*","P"===e.prisonersOrGuards?Object(r.jsx)(v,{tileclass:s,tilevalue:i,onClick:function(){return e.onClick(c)}},s+String(c)):Object(r.jsx)(v,{tileclass:s,tilevalue:i,onClick:function(){return window.alert("No peeking!")}},s+String(c));var s,c,i}))}),"P"===e.whoseturn&&"P"===e.prisonersOrGuards?Object(r.jsx)("p",{children:Object(r.jsx)(y,{onClick:function(){return e.onClickFinishTurn()}})}):Object(r.jsx)(r.Fragment,{}),"P"===e.whoseturn&&"P"===e.prisonersOrGuards?Object(r.jsx)("p",{children:Object(r.jsx)(k,{onClick:function(){return e.onClickTileRecall()}})}):Object(r.jsx)(r.Fragment,{}),"P"===e.whoseturn&&"P"===e.prisonersOrGuards?Object(r.jsx)("p",{children:Object(r.jsx)(x,{onClick:function(){return e.onClickTileExchange()}})}):Object(r.jsx)(r.Fragment,{}),"P"===e.whoseturn&&"P"===e.prisonersOrGuards?Object(r.jsx)("p",{children:Object(r.jsx)(w,{onClick:function(){return e.onClickPassPlay()}})}):Object(r.jsx)(r.Fragment,{}),Object(r.jsxs)("p",{children:["Rescues made: ",e.rescues,Object(r.jsx)("br",{}),(t=e.rescues,Array(t).fill("nonsense").map((function(e,t){return Object(r.jsx)("span",{children:Object(r.jsx)("img",{src:"/breakfree.png",alt:"I'm free! I'm free!",width:"100",height:"100"})},e+String(t))})))]})]})},q=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"GUARDS"}),Object(r.jsx)("p",{className:"pbTilerack",children:e.gtiles.map((function(t,n){return s="G"===e.whoseturn&&e.selection===n?"pbTileOnRackSelectedG":"pbTileOnRackG",c=n,i="G"===e.prisonersOrGuards?t:"*","G"===e.prisonersOrGuards?Object(r.jsx)(v,{tileclass:s,tilevalue:i,onClick:function(){return e.onClick(c)}},s+String(c)):Object(r.jsx)(v,{tileclass:s,tilevalue:i,onClick:function(){return window.alert("No peeking!")}},s+String(c));var s,c,i}))}),"G"===e.whoseturn&&"G"===e.prisonersOrGuards?Object(r.jsx)(y,{onClick:function(){return e.onClickFinishTurn()}}):Object(r.jsx)(r.Fragment,{}),"G"===e.whoseturn&&"G"===e.prisonersOrGuards?Object(r.jsx)(k,{onClick:function(){return e.onClickTileRecall()}}):Object(r.jsx)(r.Fragment,{}),"G"===e.whoseturn&&"G"===e.prisonersOrGuards?Object(r.jsx)(x,{onClick:function(){return e.onClickTileExchange()}}):Object(r.jsx)(r.Fragment,{}),"G"===e.whoseturn&&"G"===e.prisonersOrGuards?Object(r.jsx)(w,{onClick:function(){return e.onClickPassPlay()}}):Object(r.jsx)(r.Fragment,{})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),s=n("284h");t.__esModule=!0,t.default=void 0;var c=s(n("q1tI")),i=n("elyg"),a=n("nOHt"),o=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var s=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(s?"%"+s:"")]=!0}}var b=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),s=n&&n.pathname||"/",b=c.default.useMemo((function(){var t=(0,i.resolveHref)(s,e.href,!0),n=r(t,2),c=n[0],a=n[1];return{href:c,as:e.as?(0,i.resolveHref)(s,e.as):a||c}}),[s,e.href,e.as]),d=b.href,f=b.as,j=e.children,p=e.replace,O=e.shallow,h=e.scroll,g=e.locale;"string"===typeof j&&(j=c.default.createElement("a",null,j));var m=c.Children.only(j),v=m&&"object"===typeof m&&m.ref,y=(0,o.useIntersection)({rootMargin:"200px"}),k=r(y,2),x=k[0],w=k[1],S=c.default.useCallback((function(e){x(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,x]);(0,c.useEffect)((function(){var e=w&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof g?g:n&&n.locale,s=l[d+"%"+f+(r?"%"+r:"")];e&&!s&&u(n,d,f,{locale:r})}),[f,d,w,g,t,n]);var q={ref:S,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,s,c,a,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[s?"replace":"push"](n,r,{shallow:c,locale:o,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,n,d,f,p,O,h,g)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),u(n,d,f,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var C="undefined"!==typeof g?g:n&&n.locale,N=(0,i.getDomainLocale)(f,C,n&&n.locales,n&&n.domainLocales);q.href=N||(0,i.addBasePath)((0,i.addLocale)(f,C,n&&n.defaultLocale))}return c.default.cloneElement(m,q)};t.default=b},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),s=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,c.useRef)(),l=(0,c.useState)(!1),u=r(l,2),b=u[0],d=u[1],f=(0,c.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||b||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:s,elements:r}),n}(n),s=r.id,c=r.observer,i=r.elements;return i.set(e,t),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),o.delete(s))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,b]);return(0,c.useEffect)((function(){a||b||(0,i.default)((function(){return d(!0)}))}),[b]),[f,b]};var c=n("q1tI"),i=s(n("0G5g")),a="undefined"!==typeof IntersectionObserver;var o=new Map}},[["2Skw",0,2,1,3]]]);