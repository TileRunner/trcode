(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[983],{4946:function(e,n,t){"use strict";t.d(n,{F:function(){return i}});var r=t(6595);function i(e){return/[A-Z][0-9][0-9]/.test(e)?{row:Number(e.substr(1,2))-1,col:r.v8.indexOf(e[0]),dir:r.ik}:/[A-Z][0-9]/.test(e)?{row:Number(e[1])-1,col:r.v8.indexOf(e[0]),dir:r.ik}:/[0-9][0-9][A-Z]/.test(e)?{row:Number(e.substr(0,2))-1,col:r.v8.indexOf(e[2]),dir:r.oW}:/[0-9][A-Z]/.test(e)?{row:Number(e[0])-1,col:r.v8.indexOf(e[1]),dir:r.oW}:void 0}},1489:function(e,n,t){"use strict";t.d(n,{$:function(){return i}});var r=t(6595);function i(e){for(var n=2*e+1,t=Array(n),i=0;i<n;++i){for(var a=Array(n),s=0;s<n;++s){var c={row:i,col:s,type:r.WS,usedby:r.i4,letter:r.GP};i===e&&s===e?c.type=r.ix:i%e===0&&s%e===0?c.type=r.fi:i%2===s%2&&(c.type=r.me),a[s]=c}t[i]=[].concat(a)}return t}},6595:function(e,n,t){"use strict";t.d(n,{v8:function(){return r},RH:function(){return i},dK:function(){return a},ap:function(){return s},b6:function(){return c},qg:function(){return o},Vj:function(){return l},kX:function(){return u},Ov:function(){return d},Bd:function(){return p},_k:function(){return f},g9:function(){return m},Ji:function(){return h},jN:function(){return v},bS:function(){return b},Ix:function(){return x},Am:function(){return y},oW:function(){return g},ik:function(){return N},QY:function(){return j},i4:function(){return w},_W:function(){return k},$B:function(){return S},fl:function(){return A},Cr:function(){return C},L8:function(){return T},Qt:function(){return O},fi:function(){return E},ix:function(){return B},me:function(){return R},WS:function(){return I},GP:function(){return Z}});var r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],i=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],a="U",s="P",c="G",o="O",l="E",u=s,d=c,p="X",f="run_circle",m="security",h="PRISONERS",v="GUARDS",b="PLAY",x="SWAP",y="PASS",g="r",N="d",j="",w="",k=["Escapee: \"I'm free! I'm free!\". Little kid: \"I'm four! I'm four!\"","Two peanuts were walking down a back alley. One was a salted.","The psychic dwarf escaped! There's a small medium at large!","What do you call a vegetable who has escaped prison? An escapea!","The prisoners fave punctuation is a period. It marks the end of a sentence!","Prison is only one word, but to robbers it's a whole sentence."],S=6e4,A=["A","A","A","B","C","D","E","E","E","E","F","G","H","I","I","I","J","K","L","M","N","N","O","O","O","P","Q","R","R","S","T","T","U","V","W","X","Y","Z","?","?"],C=["A","A","A","A","A","B","C","D","D","E","E","E","E","E","E","F","G","H","I","I","I","I","I","J","K","L","L","M","N","N","N","O","O","O","O","P","Q","R","R","R","S","S","T","T","T","U","V","W","X","Y","Z","?","?"],T=["A","A","A","A","A","A","A","B","B","C","C","D","D","D","E","E","E","E","E","E","E","E","E","F","G","G","H","H","I","I","I","I","I","I","I","J","K","L","L","L","M","M","N","N","N","N","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","S","S","S","T","T","T","T","U","U","U","V","W","X","Y","Z","?","?"],O=["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z","?","?"],E="EscapeHatch",B="CenterSquare",R="style1",I="style2",Z=""},3939:function(e,n,t){"use strict";t.d(n,{O:function(){return r}});var r=function(e){var n=document.getElementById(e);n&&(n.scrollTop=n.scrollHeight)}},2374:function(e,n,t){"use strict";t.d(n,{D:function(){return i}});var r=t(7294);function i(e){var n=(0,r.useRef)();return(0,r.useEffect)((function(){n.current=e})),n.current}},3625:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(4620),a=t(6595);n.default=function(e){var n=e.onClick,t=e.squareArray,s=void 0===t?[]:t,c=e.rcd,o=function(e){return(0,r.jsxs)("tr",{className:"pbRow",children:[(0,r.jsx)("td",{className:"pbBoardRowHeader",id:"BoardHeaderLeft",children:a.RH[e]}),s[e].map((function(e){return function(e){return(0,r.jsx)("td",{className:"pbSquareOuter",children:(0,r.jsx)(i.default,{usedby:e.usedby,type:e.type,letter:e.letter,ri:e.row,ci:e.col,rcd:c,onClick:function(){return n(e.row,e.col)}})},"Square".concat(e.row,"-").concat(e.col))}(e)})),(0,r.jsx)("td",{className:"pbBoardRowHeader",id:"BoardHeaderRight",children:a.RH[e]})]},"BoardRow".concat(e))};return(0,r.jsx)("table",{className:"pbBoard",children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{className:"pbBoardColumnHeaderRow",children:[(0,r.jsx)("td",{className:"pbBoardHeaderTopLeft",children:"\xa0"}),s.map((function(e,n){return(0,r.jsx)("td",{className:"pbBoardColumnHeader",children:a.v8[n]},"TopColumnHeader".concat(n))})),(0,r.jsx)("td",{className:"pbBoardHeaderTopRight",children:"\xa0"})]}),s.map((function(e,n){return o(n)})),(0,r.jsxs)("tr",{className:"pbBoardColumnHeaderRow",id:"BoardHeaderBottom",children:[(0,r.jsx)("td",{className:"pbBoardHeaderBottomLeft",children:"\xa0"}),s.map((function(e,n){return(0,r.jsx)("td",{className:"pbBoardColumnHeader",children:a.v8[n]},"BottomColumnHeader".concat(n))})),(0,r.jsx)("td",{className:"pbBoardHeaderBottomRight",children:"\xa0"})]})]})})}},7666:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(1385),a=t(7294);n.default=function(e){var n=e.gameid,t=void 0===n?"":n,s=e.client,c=e.nickname,o=e.msgs,l=void 0===o?[]:o,u=e.setMsgs,d=e.participant,p=void 0===d?"":d,f=(0,a.useState)(""),m=f[0],h=f[1],v=function(e){var n=new Date(e),t=n.getHours(),r=n.getMinutes(),i="@";return t<10&&(i+="0"),i=i+t.toString()+":",r<10&&(i+="0"),i+=r.toString()};return(0,r.jsx)("div",{id:"ScrollableChat",className:"pbChat",children:(0,r.jsx)("table",{className:"pbChatTable",children:(0,r.jsxs)("tbody",{children:[l.map((function(e,n){return(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{className:"pbChatFrom",children:[v(e.created)," ",e.from]}),(0,r.jsx)("td",{className:"pbChatMsg",children:e.msg})]},"ChatMessage".concat(n))})),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:""===c?(0,r.jsx)("span",{children:"Please enter nickname to use chat"}):(0,r.jsx)("textarea",{className:""===m?"pbChatInputEmpty":"pbChatInput",name:"nextmsgInputArea",value:m,onChange:function(e){h(e.target.value)},onKeyDownCapture:function(e){if("Enter"===e.key&&m.length>0){e.preventDefault();var n=[].concat((0,i.Z)(l),[{from:c,msg:m}]),r=m;return u(n),h(""),void s.send({gameid:t,nickname:c,type:s.clientType,func:"chat",sender:p,sendmsg:r})}if("Backspace"===e.key&&m.length>0){e.preventDefault();var a=m.slice(0,m.length-1);h(a)}},placeholder:"chat..."})})})]})})})}},5983:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var r=t(809),i=t.n(r),a=t(5893),s=t(2447),c=t(1385),o=t(7294),l=t(8451),u=t(3625),d=t(8520),p=t(9477),f=t(798),m=t(7666),h=t(6595),v=t(1489);function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=(e.length-1)/2,t=2*n,r=n,i=!0;return e[0][0].usedby!==h.i4&&e[0][r].usedby!==h.i4&&e[0][t].usedby!==h.i4&&e[r][0].usedby!==h.i4&&e[r][t].usedby!==h.i4&&e[t][0].usedby!==h.i4&&e[t][r].usedby!==h.i4&&e[t][t].usedby!==h.i4&&(i=!1),i}var x=t(4946);var y=t(3939),g=t(2374),N=function(e){var n="pbTileOnRack Unselected "+("Q"===e.tilevalue?"u ":"")+e.participant;return(0,a.jsx)("div",{className:n,children:(0,a.jsx)("div",{className:"pbTileOnRackText",children:e.tilevalue})},e.tileindex)},j=function(e){var n=e.setWhereto,t=e.isrejoin,r=e.participant,j=e.gameid,w=e.nickname,k=void 0===w?"":w,S=e.wsmessage,A=e.client,C=e.racksize,T=void 0===C?4:C,O=(0,o.useState)(["Hello. This space is for debugging messages."]),E=O[0],B=O[1],R=(0,o.useState)(""),I=R[0],Z=R[1],P=T,H=2*T,M=6===T?h.L8:7===T?h.Qt:5===T?h.Cr:h.fl,D=(0,o.useState)((0,c.Z)(M)),q=D[0],F=D[1],L=(0,o.useState)([]),Q=L[0],J=L[1],U=(0,o.useState)([]),W=U[0],G=U[1],Y=(0,o.useState)([]),X=Y[0],_=Y[1],K=(0,o.useState)(-1),V=K[0],z=K[1],$=(0,o.useState)(h.kX),ee=$[0],ne=$[1],te=(0,o.useState)([]),re=te[0],ie=te[1],ae=(0,o.useState)(0),se=ae[0],ce=ae[1],oe=(0,o.useState)([-1,-1,h.QY]),le=oe[0],ue=oe[1],de=(0,o.useState)([]),pe=de[0],fe=de[1],me=(0,o.useState)({squareArray:[],ptiles:[],gtiles:[]}),he=me[0],ve=me[1],be=(0,o.useState)(0),xe=be[0],ye=be[1],ge=(0,o.useState)(!1),Ne=ge[0],je=ge[1],we=(0,o.useState)(""),ke=we[0],Se=we[1],Ae=(0,o.useState)([]),Ce=Ae[0],Te=Ae[1],Oe=(0,g.D)(se);(0,o.useEffect)((function(){Ee()}),[]),(0,o.useEffect)((function(){""!==S&&function(e){var n=JSON.parse(e);if(n.gameid===j&&"pb"===n.type){if(Re("Getting message: func=".concat(n.func)),"providegamedata"===n.func){var t=function(e){for(var n=e.events.length-1,t=e.events[n],r="",i="",a="",s=(0,v.$)(e.racksize),c=[],o=0,l=0;l<e.events.length;l++){var u=e.events[l];if(u.ptiles&&(r=u.ptiles),u.gtiles&&(i=u.gtiles),"STARTGAME"!==u.type&&u.type!==h.bS&&u.type!==h.Ix||(a=u.tiles),u.type===h.bS||u.type===h.Ix||u.type===h.Am){var d={by:u.by,type:u.type};if(u.type===h.bS){d.mainword=u.mainword,d.extrawords=u.extrawords.split(","),d.pos=u.pos,u.by===h.ap&&(o=u.rescues);for(var p=(0,x.F)(u.pos),f=p.row,m=p.col,b=0;b<u.mainword.length;b++){var y=s[f][m];y.usedby===h.i4&&(y.usedby=u.by,y.letter=u.mainword[b]),p.dir===h.oW?m++:f++}}c.push(d)}}return{pname:e.pname,gname:e.gname,syncstamp:t.timestamp,tiles:a.split(""),squareArray:s,ptiles:r.split(""),gtiles:i.split(""),whoseturn:t.whoseturn,moves:c,rescues:o,racksize:e.racksize,allowRewind:!1}}(n.apidata);Z(t.syncstamp),r===h.ap?Se(t.gname):r===h.b6&&Se(t.pname),F(t.tiles),_(t.squareArray),J(t.ptiles),G(t.gtiles),ne(t.whoseturn);var i={squareArray:JSON.parse(JSON.stringify(t.squareArray)),ptiles:(0,c.Z)(t.ptiles),gtiles:(0,c.Z)(t.gtiles)};ve(i),fe(t.moves),ce(t.rescues),je(t.allowRewind),Me()}if("providegname"===n.func&&r===h.Ji&&Se(n.gname),"allowundo"===n.func&&je(!0),"chat"===n.func){var a=[].concat((0,c.Z)(Ce),[{from:n.nickname,msg:n.sendmsg}]);Te(a)}"providesyncdata"===n.func&&n.syncstamp!==I&&(console.log("Out of sync - requesting latest game data"),ze())}}(S)}),[S]),(0,o.useEffect)((function(){(0,y.O)("ScrollableMoves")}),[pe]),(0,o.useEffect)((function(){(0,y.O)("ScrollableChat")}),[Ce]),(0,o.useEffect)((function(){(0,y.O)("ScrollableSnats")}),[E]),(0,o.useEffect)((function(){if(se>Oe){var e=document.createElement("audio");e.src=r===h.b6?"https://tilerunner.github.io/OneGotAway.m4a":"https://tilerunner.github.io/yippee.m4a",e.play()}}),[se]),(0,o.useEffect)((function(){var e=xe+1;e>=h._W.length&&(e=0),ye(e)}),[ee]),(0,o.useEffect)((function(){var e=setInterval((function(){r!==ee&&ee!==h.Bd&&$e()}),h.$B);return function(){return clearInterval(e)}}));var Ee=function(){var e=(0,v.$)(T);_(e),t?Pe():r===h.ap?Ie(e):r===h.b6?Ze():He()},Be=function(e){Re("Sending message: func=".concat(e.func)),A.send(e)},Re=function(e){var n=(0,c.Z)(E),t=new Date,r=t.getHours(),i=t.getMinutes(),a=t.getSeconds(),s="".concat(r<10?"0":"").concat(r,":").concat(i<10?"0":"").concat(i,":").concat(a<10?"0":"").concat(a);n.push("".concat(s,": ").concat(e)),B(n)},Ie=function(e){for(var n=Date.now(),t=[],i=[],a=(0,c.Z)(M);t.length<T;){var s=Math.floor(Math.random()*a.length);t.push(a[s]),a.splice(s,1),s=Math.floor(Math.random()*a.length),i.push(a[s]),a.splice(s,1)}t.sort(),i.sort(),Z(n),G(i),J(t),F(a),ve({squareArray:e,ptiles:[].concat(t),gtiles:[].concat(i)}),Be({type:"pb",func:"startgame",gameid:j,timestamp:n,racksize:T,sender:r,pname:k,tiles:a,ptiles:t,gtiles:i})},Ze=function(){Be({gameid:j,gname:k,type:"pb",func:"joingame",sender:r})},Pe=function(){Be({gameid:j,type:"pb",func:"rejoingame",sender:r})},He=function(){Be({gameid:j,type:"pb",func:"startObserving"})};function Me(){z(-1),je(!1),ue(-1,-1,h.QY),ie([])}var De=function(e,n,t,r){var i=JSON.parse(JSON.stringify(X)),a=(0,c.Z)(i[e]),s=a[n],o=(0,c.Z)(Q),l=(0,c.Z)(W),u=(0,c.Z)(re),d=String(e)+"-"+String(n),p=re.indexOf(d);if(-1===t&&(t=V,r=le),t>-1&&s.usedby===h.i4){var f=ee===h.kX?o[t]:l[t];return s.letter=f,s.usedby=ee,a[n]=s,i[e]=(0,c.Z)(a),ee===h.kX?o.splice(t,1):l.splice(t,1),ee===h.kX&&t===o.length&&(t-=1),ee===h.Ov&&t===l.length&&(t-=1),z(t),_(i),J(o),G(l),ie([].concat((0,c.Z)(re),[d])),void ue(r)}if(p>-1)return ee===h.kX?o.push(s.letter):l.push(s.letter),s.usedby=h.i4,s.letter=h.GP,a[n]=s,i[e]=(0,c.Z)(a),z(ee===h.kX?o.length-1:l.length-1),u.splice(p,1),_(i),J(o),G(l),ie(u),void ue(-1,-1,h.QY);if(s.usedby!==h.i4);else{var m=le[0]!==e||le[1]!==n?h.oW:le[2]===h.oW?h.ik:le[2]===h.ik?h.QY:h.oW;ue(r=[e,n,m])}},qe=function(e){if(r!==h.qg)if(-1!==V)if(V!==e){var n=r===h.ap?(0,c.Z)(Q):(0,c.Z)(W),t=V,i=n[t],a=e;n.splice(t,1),n.splice(a,0,i),r===h.ap?J(n):G(n),z(-1)}else z(-1);else z(e)};function Fe(){return Le.apply(this,arguments)}function Le(){return(Le=(0,s.Z)(i().mark((function e(){var n,t,a,s,o,l,u,d,p,f,m,v;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Je()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Ue();case 4:if(0===(n=e.sent).invalidwords.length){e.next=8;break}return alert("Invalid according to ENABLE2K lexicon: ".concat(n.invalidwords.join().replace(".","?").toUpperCase())),e.abrupt("return");case 8:if(t=se,r===h.ap)for(a=["0-0","0-"+P,"0-"+H,P+"-0",P+"-"+H,H+"-0",H+"-"+P,H+"-"+H],s=0;s<re.length;s++)a.indexOf(re[s])>-1&&(t+=1);for(o=r===h.ap?(0,c.Z)(Q):(0,c.Z)(W),l=(0,c.Z)(q);o.length<T&&l.length>0;)u=Math.floor(Math.random()*l.length),o.push(l[u]),l.splice(u,1);o.sort(),d=0===o.length?h.Bd:r===h.ap?h.Ov:h.ap,b(X)||(d=h.Bd),p={by:r,type:h.bS,mainword:n.mainword,extrawords:n.extrawords,pos:n.pos},f=[].concat((0,c.Z)(pe),[p]),m=Date.now(),Me(),Z(m),ne(d),r===h.ap?J(o):G(o),F(l),fe(f),ce(t),ve({squareArray:JSON.parse(JSON.stringify(X)),ptiles:r===h.ap?(0,c.Z)(o):(0,c.Z)(Q),gtiles:r===h.ap?(0,c.Z)(W):(0,c.Z)(o)}),v={gameid:j,type:"pb",func:r===h.ap?"ept":"egt",timestamp:m,sender:r,ptiles:o,tiles:l,whoseturn:d,move:p,rescues:t},r===h.ap?v.ptiles=o:v.gtiles=o,Be(v);case 30:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Qe=function(){if(q.length<T)window.alert("Need "+T+" tiles in the bag to exchange");else{Re("Swapping rack.");for(var e=[],n=(0,c.Z)(q);e.length<T&&n.length>0;){var t=Math.floor(Math.random()*n.length);e.push(n[t]),n.splice(t,1)}e.sort(),(n=r===h.ap?[].concat((0,c.Z)(n),(0,c.Z)(he.ptiles)):[].concat((0,c.Z)(n),(0,c.Z)(he.gtiles))).sort();var i={by:r,type:h.Ix},a=[].concat((0,c.Z)(pe),[i]),s=Date.now();Me(),Z(s),_(JSON.parse(JSON.stringify(he.squareArray))),ne(r===h.ap?h.Ov:h.kX),r===h.ap?J(e):G(e),F(n),fe(a),ve({squareArray:JSON.parse(JSON.stringify(he.squareArray)),ptiles:r===h.ap?[].concat(e):(0,c.Z)(Q),gtiles:r===h.ap?(0,c.Z)(W):[].concat(e)});var o={gameid:j,type:"pb",func:r===h.ap?"ept":"egt",timestamp:s,sender:r,whoseturn:h.Ov,tiles:n,move:i};r===h.ap?o.ptiles=e:o.gtiles=e,Be(o)}};function Je(){for(var e=!0,n=pe.length,t=0;e&&t<n;++t)pe[t].type===h.bS&&(e=!1);if(e&&X[P][P].usedby===h.i4)return window.alert("First play must hit center square"),!1;if(0===re.length)return window.alert("You didn't play any tiles"),!1;for(var r=re.length,i=H+1,a=-1,s=H+1,c=-1,o=0;o<r;++o){var l=parseInt(re[o].split("-")[0]),u=parseInt(re[o].split("-")[1]);if(l<i&&(i=l),l>a&&(a=l),u<s&&(s=u),u>c&&(c=u),!(l>0&&X[l-1][u].usedby!==h.i4)&&!(u>0&&X[l][u-1].usedby!==h.i4)&&!(l<H&&X[l+1][u].usedby!==h.i4)&&!(u<H&&X[l][u+1].usedby!==h.i4))return window.alert("Each played tile must be part of a word"),!1}if(i!==a&&s!==c)return window.alert("Tiles played must be in a straight line"),!1;for(var d=!1,p=!1,f=i;f<=a;++f)for(var m=s;m<=c;++m){if(X[f][m].usedby===h.i4)return window.alert("There is a gap in your word"),!1;if(!e){var v=f+"-"+m;re.indexOf(v)<0&&(d=!0),i===a&&f>0&&X[f-1][m].usedby!==h.i4&&(p=!0),i===a&&f<H&&X[f+1][m].usedby!==h.i4&&(p=!0),s===c&&m>0&&X[f][m-1].usedby!==h.i4&&(p=!0),s===c&&m<H&&X[f][m+1].usedby!==h.i4&&(p=!0)}}return!!(e||(i===a&&s>0&&X[i][s-1].usedby!==h.i4&&(d=!0),i===a&&c<H&&X[i][c+1].usedby!==h.i4&&(d=!0),s===c&&i>0&&X[i-1][s]!==h.i4&&(d=!0),s===c&&a<H&&X[a+1][s].usedby!==h.i4&&(d=!0),d||p))||(window.alert("New words must extend an existing word and/or hook existing words or tiles"),!1)}function Ue(){return We.apply(this,arguments)}function We(){return(We=(0,s.Z)(i().mark((function e(){var n,t,r,a,s,o,l,u,d,p,f,m,v,b,x,y,g,N,j,w,k,S,A,C,T,O,E,B,R,I,Z;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n={},t="",r=[],a="",s=H+1,o=-1,l=H+1,u=-1,d=re.length,p=0;p<d;++p)f=parseInt(re[p].split("-")[0]),m=parseInt(re[p].split("-")[1]),f<s&&(s=f),f>o&&(o=f),m<l&&(l=m),m>u&&(u=m);if(s<o||1===d){for(v=l,b=s;b>0&&X[b-1][v].usedby!==h.i4;)b-=1;for(x=o;x<H&&X[x+1][v].usedby!==h.i4;)x+=1;for(a=h.v8[v]+h.RH[b],y=b;y<=x;++y)if(t+=X[y][v].letter,g=y+"-"+v,re.indexOf(g)>-1){for(N=v;N>0&&X[y][N-1].usedby!==h.i4;)N-=1;for(j=v;j<H&&X[y][j+1].usedby!==h.i4;)j+=1;if(N<j){for(w="",k=N;k<=j;++k)w+=X[y][k].letter;r=[].concat((0,c.Z)(r),[w])}}}if(t.length<2){for(S=s,A=l;A>0&&X[S][A-1].usedby!==h.i4;)A-=1;for(C=u;C<H&&X[S][C+1].usedby!==h.i4;)C+=1;for(a=h.RH[S]+h.v8[A],t="",r=[],T=A;T<=C;++T)if(t+=X[S][T].letter,O=S+"-"+T,re.indexOf(O)>-1){for(E=S;E>0&&X[E-1][T].usedby!==h.i4;)E-=1;for(B=S;B<H&&X[B+1][T].usedby!==h.i4;)B+=1;if(E<B){for(R="",I=E;I<=B;++I)R+=X[I][T].letter;r=[].concat((0,c.Z)(r),[R])}}}return e.next=16,Ge(t,r);case 16:return Z=e.sent,n={mainword:t,extrawords:r,pos:a,invalidwords:Z},e.abrupt("return",n);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ge(e,n){return Ye.apply(this,arguments)}function Ye(){return(Ye=(0,s.Z)(i().mark((function e(n,t){var r,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,t.forEach((function(e){r=r+","+e})),"https://tilerunner.herokuapp.com/ENABLE2K?validate=",e.next=5,fetch("https://tilerunner.herokuapp.com/ENABLE2K?validate="+r.toLocaleLowerCase());case 5:return a=e.sent,e.next=8,a.json();case 8:return s=e.sent,e.abrupt("return",s.invalidwords);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Xe(){Ne||(je(!0),Be({gameid:j,type:"pb",func:"allowundo",sender:r}))}function _e(){Be({gameid:j,type:"pb",func:"undoturn"})}var Ke=function(){_(JSON.parse(JSON.stringify(he.squareArray))),J((0,c.Z)(he.ptiles)),G((0,c.Z)(he.gtiles)),z(-1),ie([]),ue([-1,-1,h.QY])},Ve=function(){var e={by:r,type:h.Am},n=[].concat((0,c.Z)(pe),[e]),t=function(e){var n=e.length-1,t=n-1;return t>-1&&e[t].type===h.Am&&e[n].type===h.Am}(n)?h.Bd:r===h.ap?h.Ov:h.kX,i=Date.now();Ke(),Me(),Z(i),ne(t),fe(n),Be({gameid:j,type:"pb",func:r===h.ap?"ept":"egt",timestamp:i,sender:r,whoseturn:t,move:e})},ze=function(){Be({gameid:j,type:"pb",sender:r,func:"requestgamedata",syncstamp:I})},$e=function(){Be({gameid:j,type:"pb",sender:r,func:"requestsyncdata"})};return(0,a.jsxs)("div",{className:"prisonbreak",children:[(0,a.jsxs)("div",{className:"w3-display-container w3-teal topBarHeight",children:[(0,a.jsx)("div",{className:"w3-display-middle",children:(0,a.jsx)("h1",{className:"myHeadingFont",children:"Prison Break"})}),(0,a.jsxs)("div",{className:"w3-display-topleft w3-black topBarCorner commonFontFamily",children:["Game id: ",j]}),(0,a.jsxs)("div",{className:"w3-display-bottomleft w3-orange topBarCorner commonFontFamily",children:["Prisoners: ",r===h.ap?k:r===h.b6?ke:"Secret"]}),(0,a.jsx)("div",{className:"w3-display-topright w3-black topBarCorner commonFontFamily",children:(0,a.jsx)("button",{className:"w3-button",onClick:function(){n("menu")},children:(0,a.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})}),(0,a.jsxs)("div",{className:"w3-display-bottomright w3-orange topBarCorner commonFontFamily",children:["Guards: ",r===h.ap?ke:r===h.b6?k:"Secret"]})]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col pbTileAndMovesOuter",children:[(0,a.jsx)(d.default,{tiles:q,othertiles:r===h.ap?W:r===h.b6?Q:[]}),(0,a.jsx)(p.default,{moves:pe,onmoveclick:function(e){}})]}),(0,a.jsx)("div",{className:"col pbPlayerOuterSection",children:r===h.ap?(0,a.jsx)(l.default,{racktiles:Q,whoseturn:ee,selection:V,onClick:function(e){return qe(e)},onClickFinishTurn:function(){return Fe()},onClickTileRecall:function(){return Ke()},onClickTileExchange:function(){return Qe()},onClickPassPlay:function(){return Ve()},onClickUndoLastPlay:function(){return _e()},onClickAllowUndo:function(){return Xe()},participant:r,moves:pe,allowRewind:Ne}):r===h.b6?(0,a.jsx)(l.default,{racktiles:W,whoseturn:ee,selection:V,onClick:function(e){return qe(e)},onClickFinishTurn:function(){return Fe()},onClickTileRecall:function(){return Ke()},onClickTileExchange:function(){return Qe()},onClickPassPlay:function(){return Ve()},onClickUndoLastPlay:function(){return _e()},onClickAllowUndo:function(){return Xe()},participant:r,moves:pe,allowRewind:Ne}):(0,a.jsxs)("div",{className:"pbPlayerInnerSection",children:[(0,a.jsxs)("div",{className:"pbPlayerTitle",children:[(0,a.jsx)("i",{className:"material-icons",children:h._k}),"\xa0",h.Ji,"\xa0",(0,a.jsx)("i",{className:"material-icons",children:h._k})]}),(0,a.jsx)("div",{className:"pbTilerack",children:Q&&Q.map((function(e,n){return(0,a.jsx)(N,{participant:"P",tilevalue:e,tileindex:n},"ObserverPrisonersRackTile".concat(n))}))}),(0,a.jsxs)("div",{className:"pbPlayerTitle",children:[(0,a.jsx)("i",{className:"material-icons",children:h.g9}),"\xa0",h.jN,"\xa0",(0,a.jsx)("i",{className:"material-icons",children:h.g9})]}),(0,a.jsx)("div",{className:"pbTilerack",children:W&&W.map((function(e,n){return(0,a.jsx)(N,{participant:"G",tilevalue:e,tileindex:n},"ObserverGuardsRackTile".concat(n))}))})]})}),(0,a.jsx)("div",{className:"col",children:r===ee?(0,a.jsx)("div",{className:"row",onKeyDownCapture:function(e){if(e.preventDefault(),r===ee)if("Enter"!==e.key)if("Escape"!==e.key){if(e.key.match(/^[A-Za-z\?]$/)){var n=e.key.toUpperCase(),t=ee===h.kX?Q:W,i=t.indexOf(n);if(-1===i&&(i=t.indexOf("?")),i>-1){var a=le[0],s=le[1],o=le[2];if(a>-1&&s>-1&&o!==h.QY){var l=le;if(o===h.oW){for(var u=-1,d=s+1;d<H+1&&-1===u;d++)X[a][d].usedby===h.i4&&(u=d);return l=-1===u?[-1,-1,h.QY]:[a,u,h.oW],De(a,s,i,l),void z(-1)}if(o===h.ik){for(var p=-1,f=2*T+1,m=a+1;m<f&&-1===p;m++)X[m][s].usedby===h.i4&&(p=m);return l=-1===p?[-1,-1,h.QY]:[p,s,h.ik],De(a,s,i,l),void z(-1)}}}}else if("Backspace"===e.key&&re.length>0){var v=re[re.length-1],b=parseInt(v.split("-")[0]),x=parseInt(v.split("-")[1]),y=(0,c.Z)(re),g=(0,c.Z)(Q),N=(0,c.Z)(W),j=JSON.parse(JSON.stringify(X)),w=j[b],k=w[x],S=[-1,-1,h.QY],A=V;y.splice(re.length-1,1);var C=X[b][x].letter;ee===h.kX?(g.push(C),A=g.length-1):(N.push(C),A=N.length-1),k.usedby=h.i4,k.letter=h.GP,w[x]=k,j[b]=(0,c.Z)(w);var O=le[2];O!==h.QY&&(S=[b,x,O],1===re.length&&(A=-1)),ie(y),G(N),J(g),_(j),ue(S),z(A)}}else Ke();else Fe()},children:(0,a.jsx)(u.default,{squareArray:X,rcd:le,onClick:function(e,n){return De(e,n,-1,null)}})}):(0,a.jsx)("div",{className:"row",children:(0,a.jsx)(u.default,{squareArray:X,rcd:le,onClick:function(){}})})}),(0,a.jsxs)("div",{className:"col",children:[(0,a.jsx)(f.default,{rescues:se}),(0,a.jsx)(m.default,{gameid:j,client:A,nickname:k,msgs:Ce,setMsgs:Te,participant:r})]})]}),(0,a.jsx)("div",{className:"w3-display-container w3-teal topBarHeight",children:(0,a.jsx)("div",{className:"w3-display-middle commonFontFamily",children:ee===h.Bd?(0,a.jsx)("h1",{children:"Game Over!"}):(0,a.jsx)("p",{children:h._W[xe]})})}),k&&k.length>3&&"TEST"===k.toUpperCase().substring(0,4)&&(0,a.jsx)("div",{id:"ScrollableSnats",className:"pbSnatDiv",children:E.map((function(e,n){return(0,a.jsx)("p",{className:"pbSnat",children:e},"snat".concat(n))}))})]})}},9477:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(6595);n.default=function(e){var n=e.moves,t=e.onmoveclick;return(0,r.jsxs)("div",{className:"pbMoves",children:[(0,r.jsx)("div",{className:"pbMovesTitle",children:"MOVES"}),(0,r.jsx)("div",{className:"pbMovesScrollable",id:"ScrollableMoves",children:n&&n.map((function(e,n){var a;return(0,r.jsxs)("div",{className:"pbMove",onClick:function(){return t(n)},children:[(0,r.jsx)("span",{className:"pbMove by",children:e.by}),":",(0,r.jsx)("span",{className:"pbMove ".concat(e.type),children:e.type===i.bS?(0,r.jsxs)(r.Fragment,{children:[e.pos," ",e.mainword.replace("Q","Qu"),null===(a=e.extrawords)||void 0===a?void 0:a.map((function(e,n){return(0,r.jsxs)("span",{children:[",\xa0",e.replace("Q","Qu")]},"extraword".concat(n))}))]}):(0,r.jsx)(r.Fragment,{})})]},"move".concat(n))}))})]})}},8451:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(6595),a=function(e){var n="pbTileOnRack "+(e.selection===e.tileindex?"Selected ":"Unselected ")+("Q"===e.tilevalue?"u ":"")+e.participant,t=e.tileindex;return(0,r.jsx)("div",{className:n,onClick:function(n){return e.onClick(n)},children:(0,r.jsx)("div",{className:"pbTileOnRackText",children:e.tilevalue})},t)},s=function(e){return(0,r.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:(0,r.jsxs)("span",{className:"pbActionButtonText",children:[(0,r.jsx)("i",{className:"material-icons",children:"check"}),"\xa0Finish Turn"]})})},c=function(e){return(0,r.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:(0,r.jsxs)("span",{className:"pbActionButtonText",children:[(0,r.jsx)("i",{className:"material-icons",children:"undo"}),"\xa0Recall Tiles"]})})},o=function(e){return(0,r.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:(0,r.jsxs)("span",{className:"pbActionButtonText",children:[(0,r.jsx)("i",{className:"material-icons",children:"cached"}),"\xa0Swap Tiles"]})})},l=function(e){return(0,r.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:(0,r.jsxs)("span",{className:"pbActionButtonText",children:[(0,r.jsx)("i",{className:"material-icons",children:"not_interested"}),"\xa0Pass Turn"]})})},u=function(e){return e.alreadyAllowed?(0,r.jsx)("div",{className:"pbActionButtonSevere",children:(0,r.jsxs)("span",{className:"pbActionButtonSevereText",children:[(0,r.jsx)("i",{className:"material-icons",children:"report"}),"\xa0ENABLED",(0,r.jsx)("span",{className:"pbActionButtonSevereText2",children:"\xa0Allow undo is now enabled"})]})}):(0,r.jsx)("button",{className:"pbActionButtonSevere",onClick:e.onClick,children:(0,r.jsxs)("span",{className:"pbActionButtonSevereText",children:[(0,r.jsx)("i",{className:"material-icons",children:"report_problem"}),"\xa0Allow Undo Turn",(0,r.jsx)("span",{className:"pbActionButtonSevereText2",children:"Click to let opponent undo"})]})})},d=function(e){return(0,r.jsx)("button",{className:"pbActionButtonSevere",onClick:e.onClick,children:(0,r.jsxs)("span",{className:"pbActionButtonSevereText",children:[(0,r.jsx)("i",{className:"material-icons",children:"delete_forever"}),"\xa0Undo My Turn",(0,r.jsx)("span",{className:"pbActionButtonSevereText2",children:"Opponent has allowed undo"})]})})};function p(e){return(0,r.jsxs)("div",{className:"pbActionButtonDiv",children:[(0,r.jsx)("p",{children:(0,r.jsx)(s,{onClick:function(){return e.onClickFinishTurn()}})}),(0,r.jsx)("p",{children:(0,r.jsx)(c,{onClick:function(){return e.onClickTileRecall()}})}),(0,r.jsx)("p",{children:(0,r.jsx)(o,{onClick:function(){return e.onClickTileExchange()}})}),(0,r.jsx)("p",{children:(0,r.jsx)(l,{onClick:function(){return e.onClickPassPlay()}})})]})}function f(e){return(0,r.jsx)("div",{className:"pbActionButtonDiv",children:(0,r.jsx)("div",{children:(0,r.jsx)(u,{onClick:function(){return e.onClickAllowUndo()},alreadyAllowed:e.allowRewind})})})}function m(e){return(0,r.jsx)("div",{className:"pbActionButtonDiv",children:(0,r.jsx)("p",{children:(0,r.jsx)(d,{onClick:function(){return e.onClickUndoLastPlay()}})})})}n.default=function(e){var n=e.participant===i.ap?i._k:i.g9,t=e.participant===i.ap?i.Ji:i.jN;return(0,r.jsxs)("div",{className:"pbPlayerInnerSection",children:[(0,r.jsxs)("div",{className:"pbPlayerTitle",children:[(0,r.jsx)("i",{className:"material-icons",children:n}),"\xa0",t,"\xa0",(0,r.jsx)("i",{className:"material-icons",children:n})]}),(0,r.jsx)("div",{className:"pbTilerack",children:e.racktiles&&e.racktiles.map((function(n,t){return(0,r.jsx)(a,{whoseturn:e.whoseturn,participant:e.participant,selection:e.selection,tileindex:t,tilevalue:n,onClick:function(){return e.onClick(t)}},"RackTile".concat(t))}))}),e.whoseturn===e.participant?p(e):e.allowRewind&&e.moves&&e.moves.length>0&&e.moves[e.moves.length-1].by===e.participant&&m(e),e.moves&&e.moves.length>0&&e.moves[e.moves.length-1].by!==e.participant&&f(e)]})}},798:function(e,n,t){"use strict";t.r(n);var r=t(5893);n.default=function(e){var n=e.rescues;return(0,r.jsxs)("div",{className:"pbRescuesMade",children:["Rescues made: ",n]})}},4620:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(6595);n.default=function(e){var n=e.usedby,t=e.type,a=e.letter,s=e.ri,c=e.ci,o=e.rcd,l=e.onClick,u=n!==i.i4?"pbSquareInner PlayerTile":o[0]===s&&o[1]===c&&o[2]===i.oW?"pbSquareInner RightArrow":o[0]===s&&o[1]===c&&o[2]===i.ik?"pbSquareInner DownArrow":"pbSquareInner "+t,d=n!==i.i4?a:u.indexOf("RightArrow")>-1?"\u27a1":u.indexOf("DownArrow")>-1?"\u2b07":u.indexOf("CenterSquare")>-1?(0,r.jsx)("i",{className:"material-icons",children:"stars"}):u.indexOf("EscapeHatch")>-1?(0,r.jsx)("i",{className:"material-icons",children:i._k}):".";return n===i.i4?(0,r.jsx)("button",{className:u,onClick:l,children:d}):(0,r.jsx)("button",{className:u,onClick:l,children:(0,r.jsx)("div",{className:"pbSquareTileText ".concat(n+("Q"===a?" u":"")),children:d})})}},8520:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(1385);n.default=function(e){var n=e.tiles,t=e.othertiles,a=[].concat((0,i.Z)(n||[]),(0,i.Z)(t||[]));return a.sort(),"?"===a[0]&&(a.splice(0,1),a.push("?")),"?"===a[0]&&(a.splice(0,1),a.push("?")),(0,r.jsxs)("div",{className:"pbTilepool",children:[(0,r.jsx)("div",{className:"pbTilepoolTitle",children:"TILES"}),a.map((function(e,n){return(0,r.jsxs)("span",{children:[n>0&&e!==a[n-1]?(0,r.jsx)("span",{className:"pbTilepoolDivider"}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)("span",{className:"Q"===e?"pbTilepoolTile u":"pbTilepoolTile",children:e})]},"tile".concat(n))}))]})}}}]);