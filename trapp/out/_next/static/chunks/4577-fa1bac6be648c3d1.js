"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4577],{6298:function(e,n,t){t.d(n,{D:function(){return r}});var i=t(7294);function r(e){var n=(0,i.useRef)();return(0,i.useEffect)((function(){n.current=e})),n.current}},4577:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var i=t(4051),r=t.n(i),a=t(5893),s=t(7294),c=t(3689),l=t(6300),o=t(149),u=t(4471),d=t(6260),p=t(5079),f=t(7554),m=t(1130);function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=(e.length-1)/2,t=2*n,i=n,r=!0;return e[0][0].usedby!==f.i4&&e[0][i].usedby!==f.i4&&e[0][t].usedby!==f.i4&&e[i][0].usedby!==f.i4&&e[i][t].usedby!==f.i4&&e[t][0].usedby!==f.i4&&e[t][i].usedby!==f.i4&&e[t][t].usedby!==f.i4&&(r=!1),r}var v=t(7908);var y=t(3836),b=t(6298);function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function x(e,n,t,i,r,a,s){try{var c=e[a](s),l=c.value}catch(o){return void t(o)}c.done?n(l):Promise.resolve(l).then(i,r)}function w(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var a=e.apply(n,t);function s(e){x(a,i,r,s,c,"next",e)}function c(e){x(a,i,r,s,c,"throw",e)}s(void 0)}))}}function k(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=function(e){var n="pbTileOnRack Unselected "+("Q"===e.tilevalue?"u ":"")+e.participant;return(0,a.jsx)("div",{className:n,children:(0,a.jsx)("div",{className:"pbTileOnRackText",children:e.tilevalue})},e.tileindex)},N=function(e){var n=e.setWhereto,t=e.isrejoin,i=e.participant,g=e.gameid,x=e.nickname,N=void 0===x?"":x,S=e.wsmessage,A=e.client,C=e.racksize,T=void 0===C?4:C,O=function(){ie(-1),Ce(!1),he(-1,-1,f.QY),oe([])},B=function(e){var n=JSON.parse(e);if(n.gameid===g&&"pb"===n.type){if(Ie("Getting message: func=".concat(n.func)),"providegamedata"===n.func){var t=function(e){for(var n=e.events.length-1,t=e.events[n],i="",r="",a="",s=(0,m.$)(e.racksize),c=[],l=0,o=0;o<e.events.length;o++){var u=e.events[o];if(u.ptiles&&(i=u.ptiles),u.gtiles&&(r=u.gtiles),"STARTGAME"!==u.type&&u.type!==f.bS&&u.type!==f.Ix||(a=u.tiles),u.type===f.bS||u.type===f.Ix||u.type===f.Am){var d={by:u.by,type:u.type};if(u.type===f.bS){d.mainword=u.mainword,d.extrawords=u.extrawords.split(","),d.pos=u.pos,u.by===f.ap&&(l=u.rescues);for(var p=(0,v.F)(u.pos),h=p.row,y=p.col,b=0;b<u.mainword.length;b++){var g=s[h][y];g.usedby===f.i4&&(g.usedby=u.by,g.letter=u.mainword[b]),p.dir===f.oW?y++:h++}}c.push(d)}}return{pname:e.pname,gname:e.gname,syncstamp:t.timestamp,tiles:a.split(""),squareArray:s,ptiles:i.split(""),gtiles:r.split(""),whoseturn:t.whoseturn,moves:c,rescues:l,racksize:e.racksize,allowRewind:!1}}(n.apidata);D(t.syncstamp),i===f.ap?Be(t.gname):i===f.b6&&Be(t.pname),L(t.tiles),ee(t.squareArray),H(t.ptiles),K(t.gtiles),se(t.whoseturn);var r={squareArray:JSON.parse(JSON.stringify(t.squareArray)),ptiles:k(t.ptiles),gtiles:k(t.gtiles)};we(r),be(t.moves),pe(t.rescues),Ce(t.allowRewind),O()}if("providegname"===n.func&&i===f.Ji&&Be(n.gname),"allowundo"===n.func&&Ce(!0),"chat"===n.func){var a=k(Pe).concat([{from:n.nickname,msg:n.sendmsg}]);Re(a)}"providesyncdata"===n.func&&n.syncstamp!==M&&(console.log("Out of sync - requesting latest game data"),Ve())}},E=function(){for(var e=!0,n=ye.length,t=0;e&&t<n;++t)ye[t].type===f.bS&&(e=!1);if(e&&V[U][U].usedby===f.i4)return window.alert("First play must hit center square"),!1;if(0===le.length)return window.alert("You didn't play any tiles"),!1;for(var i=le.length,r=Q+1,a=-1,s=Q+1,c=-1,l=0;l<i;++l){var o=parseInt(le[l].split("-")[0]),u=parseInt(le[l].split("-")[1]);if(o<r&&(r=o),o>a&&(a=o),u<s&&(s=u),u>c&&(c=u),!(o>0&&V[o-1][u].usedby!==f.i4)&&!(u>0&&V[o][u-1].usedby!==f.i4)&&!(o<Q&&V[o+1][u].usedby!==f.i4)&&!(u<Q&&V[o][u+1].usedby!==f.i4))return window.alert("Each played tile must be part of a word"),!1}if(r!==a&&s!==c)return window.alert("Tiles played must be in a straight line"),!1;for(var d=!1,p=!1,m=r;m<=a;++m)for(var h=s;h<=c;++h){if(V[m][h].usedby===f.i4)return window.alert("There is a gap in your word"),!1;if(!e){var v=m+"-"+h;le.indexOf(v)<0&&(d=!0),r===a&&m>0&&V[m-1][h].usedby!==f.i4&&(p=!0),r===a&&m<Q&&V[m+1][h].usedby!==f.i4&&(p=!0),s===c&&h>0&&V[m][h-1].usedby!==f.i4&&(p=!0),s===c&&h<Q&&V[m][h+1].usedby!==f.i4&&(p=!0)}}return!!(e||(r===a&&s>0&&V[r][s-1].usedby!==f.i4&&(d=!0),r===a&&c<Q&&V[r][c+1].usedby!==f.i4&&(d=!0),s===c&&r>0&&V[r-1][s]!==f.i4&&(d=!0),s===c&&a<Q&&V[a+1][s].usedby!==f.i4&&(d=!0),d||p))||(window.alert("New words must extend an existing word and/or hook existing words or tiles"),!1)},P=function(){Ae||(Ce(!0),Fe({gameid:g,type:"pb",func:"allowundo",sender:i}))},R=function(){Fe({gameid:g,type:"pb",func:"undoturn"})},q=(0,s.useState)(["Hello. This space is for debugging messages."]),J=q[0],F=q[1],I=(0,s.useState)(""),M=I[0],D=I[1],U=T,Q=2*T,_=6===T?f.L8:7===T?f.Qt:5===T?f.Cr:f.fl,Y=(0,s.useState)(k(_)),G=Y[0],L=Y[1],X=(0,s.useState)([]),W=X[0],H=X[1],z=(0,s.useState)([]),$=z[0],K=z[1],Z=(0,s.useState)([]),V=Z[0],ee=Z[1],ne=(0,s.useState)(-1),te=ne[0],ie=ne[1],re=(0,s.useState)(f.kX),ae=re[0],se=re[1],ce=(0,s.useState)([]),le=ce[0],oe=ce[1],ue=(0,s.useState)(0),de=ue[0],pe=ue[1],fe=(0,s.useState)([-1,-1,f.QY]),me=fe[0],he=fe[1],ve=(0,s.useState)([]),ye=ve[0],be=ve[1],ge=(0,s.useState)({squareArray:[],ptiles:[],gtiles:[]}),xe=ge[0],we=ge[1],ke=(0,s.useState)(0),je=ke[0],Ne=ke[1],Se=(0,s.useState)(!1),Ae=Se[0],Ce=Se[1],Te=(0,s.useState)(""),Oe=Te[0],Be=Te[1],Ee=(0,s.useState)([]),Pe=Ee[0],Re=Ee[1],qe=(0,b.D)(de);(0,s.useEffect)((function(){Je()}),[]),(0,s.useEffect)((function(){""!==S&&B(S)}),[S]),(0,s.useEffect)((function(){(0,y.O)("ScrollableMoves")}),[ye]),(0,s.useEffect)((function(){(0,y.O)("ScrollableChat")}),[Pe]),(0,s.useEffect)((function(){(0,y.O)("ScrollableSnats")}),[J]),(0,s.useEffect)((function(){if(de>qe){var e=document.createElement("audio");e.src=i===f.b6?"https://tilerunner.github.io/OneGotAway.m4a":"https://tilerunner.github.io/yippee.m4a",e.play()}}),[de]),(0,s.useEffect)((function(){var e=je+1;e>=f._W.length&&(e=0),Ne(e)}),[ae]),(0,s.useEffect)((function(){var e=setInterval((function(){i!==ae&&ae!==f.Bd&&en()}),f.$B);return function(){return clearInterval(e)}}));var Je=function(){var e=(0,m.$)(T);ee(e),t?Ue():i===f.ap?Me(e):i===f.b6?De():Qe()},Fe=function(e){Ie("Sending message: func=".concat(e.func)),A.send(e)},Ie=function(e){var n=k(J),t=new Date,i=t.getHours(),r=t.getMinutes(),a=t.getSeconds(),s="".concat(i<10?"0":"").concat(i,":").concat(r<10?"0":"").concat(r,":").concat(a<10?"0":"").concat(a);n.push("".concat(s,": ").concat(e)),F(n)},Me=function(e){for(var n=Date.now(),t=[],r=[],a=k(_);t.length<T;){var s=Math.floor(Math.random()*a.length);t.push(a[s]),a.splice(s,1),s=Math.floor(Math.random()*a.length),r.push(a[s]),a.splice(s,1)}t.sort(),r.sort(),D(n),K(r),H(t),L(a),we({squareArray:e,ptiles:k(t),gtiles:k(r)}),Fe({type:"pb",func:"startgame",gameid:g,timestamp:n,racksize:T,sender:i,pname:N,tiles:a,ptiles:t,gtiles:r})},De=function(){Fe({gameid:g,gname:N,type:"pb",func:"joingame",sender:i})},Ue=function(){Fe({gameid:g,type:"pb",func:"rejoingame",sender:i})},Qe=function(){Fe({gameid:g,type:"pb",func:"startObserving"})},_e=function(e,n,t,i){var r=JSON.parse(JSON.stringify(V)),a=k(r[e]),s=a[n],c=k(W),l=k($),o=k(le),u=String(e)+"-"+String(n),d=le.indexOf(u);if(-1===t&&(t=te,i=me),t>-1&&s.usedby===f.i4){var p=ae===f.kX?c[t]:l[t];return s.letter=p,s.usedby=ae,a[n]=s,r[e]=k(a),ae===f.kX?c.splice(t,1):l.splice(t,1),ae===f.kX&&t===c.length&&(t-=1),ae===f.Ov&&t===l.length&&(t-=1),ie(t),ee(r),H(c),K(l),oe(k(le).concat([u])),void he(i)}if(d>-1)return ae===f.kX?c.push(s.letter):l.push(s.letter),s.usedby=f.i4,s.letter=f.GP,a[n]=s,r[e]=k(a),ie(ae===f.kX?c.length-1:l.length-1),o.splice(d,1),ee(r),H(c),K(l),oe(o),void he(-1,-1,f.QY);if(s.usedby!==f.i4);else{var m=me[0]!==e||me[1]!==n?f.oW:me[2]===f.oW?f.ik:me[2]===f.ik?f.QY:f.oW;he(i=[e,n,m])}},Ye=function(e){if(i!==f.qg)if(-1!==te)if(te!==e){var n=i===f.ap?k(W):k($),t=te,r=n[t],a=e;n.splice(t,1),n.splice(a,0,r),i===f.ap?H(n):K(n),ie(-1)}else ie(-1);else ie(e)};function Ge(){return Le.apply(this,arguments)}function Le(){return(Le=w(r().mark((function e(){var n,t,a,s,c,l,o,u,d,p,m,v;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,We();case 4:if(0===(n=e.sent).invalidwords.length){e.next=8;break}return alert("Invalid according to ENABLE2K lexicon: ".concat(n.invalidwords.join().replace(".","?").toUpperCase())),e.abrupt("return");case 8:if(t=de,i===f.ap)for(a=["0-0","0-"+U,"0-"+Q,U+"-0",U+"-"+Q,Q+"-0",Q+"-"+U,Q+"-"+Q],s=0;s<le.length;s++)a.indexOf(le[s])>-1&&(t+=1);for(c=i===f.ap?k(W):k($),l=k(G);c.length<T&&l.length>0;)o=Math.floor(Math.random()*l.length),c.push(l[o]),l.splice(o,1);c.sort(),u=0===c.length?f.Bd:i===f.ap?f.Ov:f.ap,h(V)||(u=f.Bd),d={by:i,type:f.bS,mainword:n.mainword,extrawords:n.extrawords,pos:n.pos},p=k(ye).concat([d]),m=Date.now(),O(),D(m),se(u),i===f.ap?H(c):K(c),L(l),be(p),pe(t),we({squareArray:JSON.parse(JSON.stringify(V)),ptiles:i===f.ap?k(c):k(W),gtiles:i===f.ap?k($):k(c)}),v={gameid:g,type:"pb",func:i===f.ap?"ept":"egt",timestamp:m,sender:i,ptiles:c,tiles:l,whoseturn:u,move:d,rescues:t},i===f.ap?v.ptiles=c:v.gtiles=c,Fe(v);case 30:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Xe=function(){if(G.length<T)window.alert("Need "+T+" tiles in the bag to exchange");else{Ie("Swapping rack.");for(var e=[],n=k(G);e.length<T&&n.length>0;){var t=Math.floor(Math.random()*n.length);e.push(n[t]),n.splice(t,1)}e.sort(),(n=i===f.ap?k(n).concat(k(xe.ptiles)):k(n).concat(k(xe.gtiles))).sort();var r={by:i,type:f.Ix},a=k(ye).concat([r]),s=Date.now();O(),D(s),ee(JSON.parse(JSON.stringify(xe.squareArray))),se(i===f.ap?f.Ov:f.kX),i===f.ap?H(e):K(e),L(n),be(a),we({squareArray:JSON.parse(JSON.stringify(xe.squareArray)),ptiles:i===f.ap?k(e):k(W),gtiles:i===f.ap?k($):k(e)});var c={gameid:g,type:"pb",func:i===f.ap?"ept":"egt",timestamp:s,sender:i,whoseturn:f.Ov,tiles:n,move:r};i===f.ap?c.ptiles=e:c.gtiles=e,Fe(c)}};function We(){return He.apply(this,arguments)}function He(){return(He=w(r().mark((function e(){var n,t,i,a,s,c,l,o,u,d,p,m,h,v,y,b,g,x,w,j,N,S,A,C,T,O,B,E,P,R,q;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n={},t="",i=[],a="",s=Q+1,c=-1,l=Q+1,o=-1,u=le.length,d=0;d<u;++d)p=parseInt(le[d].split("-")[0]),m=parseInt(le[d].split("-")[1]),p<s&&(s=p),p>c&&(c=p),m<l&&(l=m),m>o&&(o=m);if(s<c||1===u){for(h=l,v=s;v>0&&V[v-1][h].usedby!==f.i4;)v-=1;for(y=c;y<Q&&V[y+1][h].usedby!==f.i4;)y+=1;for(a=f.v8[h]+f.RH[v],b=v;b<=y;++b)if(t+=V[b][h].letter,g=b+"-"+h,le.indexOf(g)>-1){for(x=h;x>0&&V[b][x-1].usedby!==f.i4;)x-=1;for(w=h;w<Q&&V[b][w+1].usedby!==f.i4;)w+=1;if(x<w){for(j="",N=x;N<=w;++N)j+=V[b][N].letter;i=k(i).concat([j])}}}if(t.length<2){for(S=s,A=l;A>0&&V[S][A-1].usedby!==f.i4;)A-=1;for(C=o;C<Q&&V[S][C+1].usedby!==f.i4;)C+=1;for(a=f.RH[S]+f.v8[A],t="",i=[],T=A;T<=C;++T)if(t+=V[S][T].letter,O=S+"-"+T,le.indexOf(O)>-1){for(B=S;B>0&&V[B-1][T].usedby!==f.i4;)B-=1;for(E=S;E<Q&&V[E+1][T].usedby!==f.i4;)E+=1;if(B<E){for(P="",R=B;R<=E;++R)P+=V[R][T].letter;i=k(i).concat([P])}}}return e.next=16,ze(t,i);case 16:return q=e.sent,n={mainword:t,extrawords:i,pos:a,invalidwords:q},e.abrupt("return",n);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ze(e,n){return $e.apply(this,arguments)}function $e(){return($e=w(r().mark((function e(n,t){var i,a,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n,t.forEach((function(e){i=i+","+e})),"https://tilerunner.herokuapp.com/ENABLE2K?validate=",e.next=5,fetch("https://tilerunner.herokuapp.com/ENABLE2K?validate="+i.toLocaleLowerCase());case 5:return a=e.sent,e.next=8,a.json();case 8:return s=e.sent,e.abrupt("return",s.invalidwords);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ke=function(){ee(JSON.parse(JSON.stringify(xe.squareArray))),H(k(xe.ptiles)),K(k(xe.gtiles)),ie(-1),oe([]),he([-1,-1,f.QY])},Ze=function(){var e={by:i,type:f.Am},n=k(ye).concat([e]),t=function(e){var n=e.length-1,t=n-1;return t>-1&&e[t].type===f.Am&&e[n].type===f.Am}(n)?f.Bd:i===f.ap?f.Ov:f.kX,r=Date.now();Ke(),O(),D(r),se(t),be(n),Fe({gameid:g,type:"pb",func:i===f.ap?"ept":"egt",timestamp:r,sender:i,whoseturn:t,move:e})},Ve=function(){Fe({gameid:g,type:"pb",sender:i,func:"requestgamedata",syncstamp:M})},en=function(){Fe({gameid:g,type:"pb",sender:i,func:"requestsyncdata"})};return(0,a.jsxs)("div",{className:"prisonbreak",children:[(0,a.jsxs)("div",{className:"w3-display-container w3-teal topBarHeight",children:[(0,a.jsx)("div",{className:"w3-display-middle",children:(0,a.jsx)("h1",{className:"myHeadingFont",children:"Prison Break"})}),(0,a.jsxs)("div",{className:"w3-display-topleft w3-black topBarCorner commonFontFamily",children:["Game id: ",g]}),(0,a.jsxs)("div",{className:"w3-display-bottomleft w3-orange topBarCorner commonFontFamily",children:["Prisoners: ",i===f.ap?N:i===f.b6?Oe:"Secret"]}),(0,a.jsx)("div",{className:"w3-display-topright w3-black topBarCorner commonFontFamily",children:(0,a.jsx)("button",{className:"w3-button",onClick:function(){n("menu")},children:(0,a.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})}),(0,a.jsxs)("div",{className:"w3-display-bottomright w3-orange topBarCorner commonFontFamily",children:["Guards: ",i===f.ap?Oe:i===f.b6?N:"Secret"]})]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col pbTileAndMovesOuter",children:[(0,a.jsx)(o.default,{tiles:G,othertiles:i===f.ap?$:i===f.b6?W:[]}),(0,a.jsx)(u.default,{moves:ye,onmoveclick:function(e){}})]}),(0,a.jsx)("div",{className:"col pbPlayerOuterSection",children:i===f.ap?(0,a.jsx)(c.default,{racktiles:W,whoseturn:ae,selection:te,onClick:function(e){return Ye(e)},onClickFinishTurn:function(){return Ge()},onClickTileRecall:function(){return Ke()},onClickTileExchange:function(){return Xe()},onClickPassPlay:function(){return Ze()},onClickUndoLastPlay:function(){return R()},onClickAllowUndo:function(){return P()},participant:i,moves:ye,allowRewind:Ae}):i===f.b6?(0,a.jsx)(c.default,{racktiles:$,whoseturn:ae,selection:te,onClick:function(e){return Ye(e)},onClickFinishTurn:function(){return Ge()},onClickTileRecall:function(){return Ke()},onClickTileExchange:function(){return Xe()},onClickPassPlay:function(){return Ze()},onClickUndoLastPlay:function(){return R()},onClickAllowUndo:function(){return P()},participant:i,moves:ye,allowRewind:Ae}):(0,a.jsxs)("div",{className:"pbPlayerInnerSection",children:[(0,a.jsxs)("div",{className:"pbPlayerTitle",children:[(0,a.jsx)("i",{className:"material-icons",children:f._k}),"\xa0",f.Ji,"\xa0",(0,a.jsx)("i",{className:"material-icons",children:f._k})]}),(0,a.jsx)("div",{className:"pbTilerack",children:W&&W.map((function(e,n){return(0,a.jsx)(j,{participant:"P",tilevalue:e,tileindex:n},"ObserverPrisonersRackTile".concat(n))}))}),(0,a.jsxs)("div",{className:"pbPlayerTitle",children:[(0,a.jsx)("i",{className:"material-icons",children:f.g9}),"\xa0",f.jN,"\xa0",(0,a.jsx)("i",{className:"material-icons",children:f.g9})]}),(0,a.jsx)("div",{className:"pbTilerack",children:$&&$.map((function(e,n){return(0,a.jsx)(j,{participant:"G",tilevalue:e,tileindex:n},"ObserverGuardsRackTile".concat(n))}))})]})}),(0,a.jsx)("div",{className:"col",children:i===ae?(0,a.jsx)("div",{className:"row",onKeyDownCapture:function(e){if(e.preventDefault(),i===ae)if("Enter"!==e.key)if("Escape"!==e.key){if(e.key.match(/^[A-Za-z\?]$/)){var n=e.key.toUpperCase(),t=ae===f.kX?W:$,r=t.indexOf(n);if(-1===r&&(r=t.indexOf("?")),r>-1){var a=me[0],s=me[1],c=me[2];if(a>-1&&s>-1&&c!==f.QY){var l=me;if(c===f.oW){for(var o=-1,u=s+1;u<Q+1&&-1===o;u++)V[a][u].usedby===f.i4&&(o=u);return l=-1===o?[-1,-1,f.QY]:[a,o,f.oW],_e(a,s,r,l),void ie(-1)}if(c===f.ik){for(var d=-1,p=2*T+1,m=a+1;m<p&&-1===d;m++)V[m][s].usedby===f.i4&&(d=m);return l=-1===d?[-1,-1,f.QY]:[d,s,f.ik],_e(a,s,r,l),void ie(-1)}}}}else if("Backspace"===e.key&&le.length>0){var h=le[le.length-1],v=parseInt(h.split("-")[0]),y=parseInt(h.split("-")[1]),b=k(le),g=k(W),x=k($),w=JSON.parse(JSON.stringify(V)),j=w[v],N=j[y],S=[-1,-1,f.QY],A=te;b.splice(le.length-1,1);var C=V[v][y].letter;ae===f.kX?(g.push(C),A=g.length-1):(x.push(C),A=x.length-1),N.usedby=f.i4,N.letter=f.GP,j[y]=N,w[v]=k(j);var O=me[2];O!==f.QY&&(S=[v,y,O],1===le.length&&(A=-1)),oe(b),K(x),H(g),ee(w),he(S),ie(A)}}else Ke();else Ge()},children:(0,a.jsx)(l.default,{squareArray:V,rcd:me,onClick:function(e,n){return _e(e,n,-1,null)}})}):(0,a.jsx)("div",{className:"row",children:(0,a.jsx)(l.default,{squareArray:V,rcd:me,onClick:function(){}})})}),(0,a.jsxs)("div",{className:"col",children:[(0,a.jsx)(d.default,{rescues:de}),(0,a.jsx)(p.default,{gameid:g,client:A,nickname:N,msgs:Pe,setMsgs:Re,participant:i})]})]}),(0,a.jsx)("div",{className:"w3-display-container w3-teal topBarHeight",children:(0,a.jsx)("div",{className:"w3-display-middle commonFontFamily",children:ae===f.Bd?(0,a.jsx)("h1",{children:"Game Over!"}):(0,a.jsx)("p",{children:f._W[je]})})}),N&&N.length>3&&"TEST"===N.toUpperCase().substring(0,4)&&(0,a.jsx)("div",{id:"ScrollableSnats",className:"pbSnatDiv",children:J.map((function(e,n){return(0,a.jsx)("p",{className:"pbSnat",children:e},"snat".concat(n))}))})]})}},3689:function(e,n,t){t.r(n);var i=t(5893),r=t(7554),a=function(e){var n="pbTileOnRack "+(e.selection===e.tileindex?"Selected ":"Unselected ")+("Q"===e.tilevalue?"u ":"")+e.participant,t=e.tileindex;return(0,i.jsx)("div",{className:n,onClick:function(n){return e.onClick(n)},children:(0,i.jsx)("div",{className:"pbTileOnRackText",children:e.tilevalue})},t)},s=function(e){return(0,i.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:(0,i.jsxs)("span",{className:"pbActionButtonText",children:[(0,i.jsx)("i",{className:"material-icons",children:"check"}),"\xa0Finish Turn"]})})},c=function(e){return(0,i.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:(0,i.jsxs)("span",{className:"pbActionButtonText",children:[(0,i.jsx)("i",{className:"material-icons",children:"undo"}),"\xa0Recall Tiles"]})})},l=function(e){return(0,i.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:(0,i.jsxs)("span",{className:"pbActionButtonText",children:[(0,i.jsx)("i",{className:"material-icons",children:"cached"}),"\xa0Swap Tiles"]})})},o=function(e){return(0,i.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:(0,i.jsxs)("span",{className:"pbActionButtonText",children:[(0,i.jsx)("i",{className:"material-icons",children:"not_interested"}),"\xa0Pass Turn"]})})},u=function(e){return e.alreadyAllowed?(0,i.jsx)("div",{className:"pbActionButtonSevere",children:(0,i.jsxs)("span",{className:"pbActionButtonSevereText",children:[(0,i.jsx)("i",{className:"material-icons",children:"report"}),"\xa0ENABLED",(0,i.jsx)("span",{className:"pbActionButtonSevereText2",children:"\xa0Allow undo is now enabled"})]})}):(0,i.jsx)("button",{className:"pbActionButtonSevere",onClick:e.onClick,children:(0,i.jsxs)("span",{className:"pbActionButtonSevereText",children:[(0,i.jsx)("i",{className:"material-icons",children:"report_problem"}),"\xa0Allow Undo Turn",(0,i.jsx)("span",{className:"pbActionButtonSevereText2",children:"Click to let opponent undo"})]})})},d=function(e){return(0,i.jsx)("button",{className:"pbActionButtonSevere",onClick:e.onClick,children:(0,i.jsxs)("span",{className:"pbActionButtonSevereText",children:[(0,i.jsx)("i",{className:"material-icons",children:"delete_forever"}),"\xa0Undo My Turn",(0,i.jsx)("span",{className:"pbActionButtonSevereText2",children:"Opponent has allowed undo"})]})})};function p(e){return(0,i.jsxs)("div",{className:"pbActionButtonDiv",children:[(0,i.jsx)("p",{children:(0,i.jsx)(s,{onClick:function(){return e.onClickFinishTurn()}})}),(0,i.jsx)("p",{children:(0,i.jsx)(c,{onClick:function(){return e.onClickTileRecall()}})}),(0,i.jsx)("p",{children:(0,i.jsx)(l,{onClick:function(){return e.onClickTileExchange()}})}),(0,i.jsx)("p",{children:(0,i.jsx)(o,{onClick:function(){return e.onClickPassPlay()}})})]})}function f(e){return(0,i.jsx)("div",{className:"pbActionButtonDiv",children:(0,i.jsx)("div",{children:(0,i.jsx)(u,{onClick:function(){return e.onClickAllowUndo()},alreadyAllowed:e.allowRewind})})})}function m(e){return(0,i.jsx)("div",{className:"pbActionButtonDiv",children:(0,i.jsx)("p",{children:(0,i.jsx)(d,{onClick:function(){return e.onClickUndoLastPlay()}})})})}n.default=function(e){var n=e.participant===r.ap?r._k:r.g9,t=e.participant===r.ap?r.Ji:r.jN;return(0,i.jsxs)("div",{className:"pbPlayerInnerSection",children:[(0,i.jsxs)("div",{className:"pbPlayerTitle",children:[(0,i.jsx)("i",{className:"material-icons",children:n}),"\xa0",t,"\xa0",(0,i.jsx)("i",{className:"material-icons",children:n})]}),(0,i.jsx)("div",{className:"pbTilerack",children:e.racktiles&&e.racktiles.map((function(n,t){return(0,i.jsx)(a,{whoseturn:e.whoseturn,participant:e.participant,selection:e.selection,tileindex:t,tilevalue:n,onClick:function(){return e.onClick(t)}},"RackTile".concat(t))}))}),e.whoseturn===e.participant?p(e):e.allowRewind&&e.moves&&e.moves.length>0&&e.moves[e.moves.length-1].by===e.participant&&m(e),e.moves&&e.moves.length>0&&e.moves[e.moves.length-1].by!==e.participant&&f(e)]})}}}]);