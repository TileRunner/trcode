(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78],{4946:function(e,n,t){"use strict";t.d(n,{F:function(){return i}});var r=t(6595);function i(e){return/[A-Z][0-9][0-9]/.test(e)?{row:Number(e.substr(1,2))-1,col:r.v8.indexOf(e[0]),dir:r.ik}:/[A-Z][0-9]/.test(e)?{row:Number(e[1])-1,col:r.v8.indexOf(e[0]),dir:r.ik}:/[0-9][0-9][A-Z]/.test(e)?{row:Number(e.substr(0,2))-1,col:r.v8.indexOf(e[2]),dir:r.oW}:/[0-9][A-Z]/.test(e)?{row:Number(e[0])-1,col:r.v8.indexOf(e[1]),dir:r.oW}:void 0}},1489:function(e,n,t){"use strict";t.d(n,{$:function(){return i}});var r=t(6595);function i(e){for(var n=2*e+1,t=Array(n),i=0;i<n;++i){for(var a=Array(n),s=0;s<n;++s){var c={row:i,col:s,type:r.WS,usedby:r.i4,letter:r.GP};i===e&&s===e?c.type=r.ix:i%e===0&&s%e===0?c.type=r.fi:i%2===s%2&&(c.type=r.me),a[s]=c}t[i]=[].concat(a)}return t}},6595:function(e,n,t){"use strict";t.d(n,{v8:function(){return r},RH:function(){return i},dK:function(){return a},ap:function(){return s},b6:function(){return c},qg:function(){return o},Vj:function(){return l},kX:function(){return u},Ov:function(){return d},Bd:function(){return p},_k:function(){return f},g9:function(){return m},Ji:function(){return h},jN:function(){return v},bS:function(){return b},Ix:function(){return x},Am:function(){return y},oW:function(){return g},ik:function(){return N},QY:function(){return j},i4:function(){return w},_W:function(){return k},$B:function(){return A},fl:function(){return S},Cr:function(){return C},L8:function(){return T},Qt:function(){return O},fi:function(){return E},ix:function(){return B},me:function(){return R},WS:function(){return I},GP:function(){return Z}});var r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],i=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],a="U",s="P",c="G",o="O",l="E",u=s,d=c,p="X",f="run_circle",m="security",h="PRISONERS",v="GUARDS",b="PLAY",x="SWAP",y="PASS",g="r",N="d",j="",w="",k=["Escapee: \"I'm free! I'm free!\". Little kid: \"I'm four! I'm four!\"","Two peanuts were walking down a back alley. One was a salted.","The psychic dwarf escaped! There's a small medium at large!","What do you call a vegetable who has escaped prison? An escapea!","The prisoners fave punctuation is a period. It marks the end of a sentence!","Prison is only one word, but to robbers it's a whole sentence."],A=2e4,S=["A","A","A","B","C","D","E","E","E","E","F","G","H","I","I","I","J","K","L","M","N","N","O","O","O","P","Q","R","R","S","T","T","U","V","W","X","Y","Z","?","?"],C=["A","A","A","A","A","B","C","D","D","E","E","E","E","E","E","F","G","H","I","I","I","I","I","J","K","L","L","M","N","N","N","O","O","O","O","P","Q","R","R","R","S","S","T","T","T","U","V","W","X","Y","Z","?","?"],T=["A","A","A","A","A","A","A","B","B","C","C","D","D","D","E","E","E","E","E","E","E","E","E","F","G","G","H","H","I","I","I","I","I","I","I","J","K","L","L","L","M","M","N","N","N","N","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","S","S","S","T","T","T","T","U","U","U","V","W","X","Y","Z","?","?"],O=["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z","?","?"],E="EscapeHatch",B="CenterSquare",R="style1",I="style2",Z=""},3939:function(e,n,t){"use strict";t.d(n,{O:function(){return r}});var r=function(e){var n=document.getElementById(e);n.scrollTop=n.scrollHeight}},3625:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(4620),a=t(6595);n.default=function(e){var n=e.onClick,t=e.squareArray,s=void 0===t?[]:t,c=e.rcd,o=function(e){return(0,r.jsxs)("tr",{className:"pbRow",children:[(0,r.jsx)("td",{className:"pbBoardRowHeader",id:"BoardHeaderLeft",children:a.RH[e]}),s[e].map((function(e){return function(e){return(0,r.jsx)("td",{className:"pbSquareOuter",children:(0,r.jsx)(i.default,{usedby:e.usedby,type:e.type,letter:e.letter,ri:e.row,ci:e.col,rcd:c,onClick:function(){return n(e.row,e.col)}})},"Square".concat(e.row,"-").concat(e.col))}(e)})),(0,r.jsx)("td",{className:"pbBoardRowHeader",id:"BoardHeaderRight",children:a.RH[e]})]},"BoardRow".concat(e))};return(0,r.jsx)("table",{className:"pbBoard",children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{className:"pbBoardColumnHeaderRow",children:[(0,r.jsx)("td",{className:"pbBoardHeaderTopLeft",children:"\xa0"}),s.map((function(e,n){return(0,r.jsx)("td",{className:"pbBoardColumnHeader",children:a.v8[n]},"TopColumnHeader".concat(n))})),(0,r.jsx)("td",{className:"pbBoardHeaderTopRight",children:"\xa0"})]}),s.map((function(e,n){return o(n)})),(0,r.jsxs)("tr",{className:"pbBoardColumnHeaderRow",id:"BoardHeaderBottom",children:[(0,r.jsx)("td",{className:"pbBoardHeaderBottomLeft",children:"\xa0"}),s.map((function(e,n){return(0,r.jsx)("td",{className:"pbBoardColumnHeader",children:a.v8[n]},"BottomColumnHeader".concat(n))})),(0,r.jsx)("td",{className:"pbBoardHeaderBottomRight",children:"\xa0"})]})]})})}},7666:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(1385),a=t(7294);n.default=function(e){var n=e.gameid,t=void 0===n?"":n,s=e.client,c=e.nickname,o=e.msgs,l=void 0===o?[]:o,u=e.setMsgs,d=e.participant,p=void 0===d?"":d,f=(0,a.useState)(""),m=f[0],h=f[1];return(0,r.jsx)("div",{id:"ScrollableChat",className:"pbChat",children:(0,r.jsx)("table",{className:"pbChatTable",children:(0,r.jsxs)("tbody",{children:[l.map((function(e,n){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"pbChatFrom",children:e.from}),(0,r.jsx)("td",{className:"pbChatMsg",children:e.msg})]},"ChatMessage".concat(n))})),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:""===c?(0,r.jsx)("span",{children:"Please enter nickname to use chat"}):(0,r.jsx)("textarea",{className:""===m?"pbChatInputEmpty":"pbChatInput",name:"nextmsgInputArea",value:m,onChange:function(e){h(e.target.value)},onKeyDownCapture:function(e){if("Enter"===e.key&&m.length>0){e.preventDefault();var n=[].concat((0,i.Z)(l),[{from:c,msg:m}]),r=m;return u(n),h(""),void s.send({gameid:t,nickname:c,type:"pb",func:"chat",sender:p,sendmsg:r})}if("Backspace"===e.key&&m.length>0){e.preventDefault();var a=m.slice(0,m.length-1);h(a)}},placeholder:"chat..."})})})]})})})}},78:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var r=t(809),i=t.n(r),a=t(5893),s=t(2447),c=t(1385),o=t(7294),l=t(8451),u=t(3625),d=t(8520),p=t(9477),f=t(798),m=t(7666),h=t(6595),v=t(1489);function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=(e.length-1)/2,t=2*n,r=n,i=!0;return e[0][0].usedby!==h.i4&&e[0][r].usedby!==h.i4&&e[0][t].usedby!==h.i4&&e[r][0].usedby!==h.i4&&e[r][t].usedby!==h.i4&&e[t][0].usedby!==h.i4&&e[t][r].usedby!==h.i4&&e[t][t].usedby!==h.i4&&(i=!1),i}var x=t(4946);var y=t(3939);var g=function(e){var n="pbTileOnRack Unselected "+("Q"===e.tilevalue?"u ":"")+e.participant;return(0,a.jsx)("div",{className:n,children:(0,a.jsx)("div",{className:"pbTileOnRackText",children:e.tilevalue})},e.tileindex)},N=function(e){var n=e.setWhereto,t=e.isrejoin,r=e.participant,N=e.gameid,j=e.nickname,w=e.wsmessage,k=e.client,A=e.racksize,S=void 0===A?4:A,C=(0,o.useState)(""),T=C[0],O=C[1],E=S,B=2*S,R=6===S?h.L8:7===S?h.Qt:5===S?h.Cr:h.fl,I=(0,o.useState)((0,c.Z)(R)),Z=I[0],P=I[1],H=(0,o.useState)([]),M=H[0],q=H[1],D=(0,o.useState)([]),F=D[0],L=D[1],Q=(0,o.useState)([]),J=Q[0],U=Q[1],W=(0,o.useState)(-1),G=W[0],Y=W[1],X=(0,o.useState)(h.kX),_=X[0],K=X[1],V=(0,o.useState)([]),z=V[0],$=V[1],ee=(0,o.useState)(0),ne=ee[0],te=ee[1],re=(0,o.useState)([-1,-1,h.QY]),ie=re[0],ae=re[1],se=(0,o.useState)([]),ce=se[0],oe=se[1],le=(0,o.useState)({squareArray:[],ptiles:[],gtiles:[]}),ue=le[0],de=le[1],pe=(0,o.useState)(0),fe=pe[0],me=pe[1],he=(0,o.useState)(!1),ve=he[0],be=he[1],xe=(0,o.useState)(""),ye=xe[0],ge=xe[1],Ne=(0,o.useState)([]),je=Ne[0],we=Ne[1],ke=function(e){var n=(0,o.useRef)();return(0,o.useEffect)((function(){n.current=e})),n.current}(ne);(0,o.useEffect)((function(){Ae()}),[]),(0,o.useEffect)((function(){""!==w&&function(e){var n=JSON.parse(e);if(n.gameid===N&&"pb"===n.type){if("providegamedata"===n.func){var t=function(e){for(var n=e,t=n.events.length-1,r=n.events[t],i="",a="",s="",c=(0,v.$)(n.racksize),o=[],l=0,u=0;u<n.events.length;u++){var d=n.events[u];if(d.ptiles&&(i=d.ptiles),d.gtiles&&(a=d.gtiles),"STARTGAME"!==d.type&&d.type!==h.bS&&d.type!==h.Ix||(s=d.tiles),d.type===h.bS||d.type===h.Ix||d.type===h.Am){var p={by:d.by,type:d.type};if(d.type===h.bS){p.mainword=d.mainword,p.extrawords=d.extrawords.split(","),p.pos=d.pos,d.by===h.ap&&(l=d.rescues);for(var f=(0,x.F)(d.pos),m=f.row,b=f.col,y=0;y<d.mainword.length;y++){var g=c[m][b];g.usedby===h.i4&&(g.usedby=d.by,g.letter=d.mainword[y]),f.dir===h.oW?b++:m++}}o.push(p)}}return{pname:n.pname,gname:n.gname,syncstamp:r.timestamp,tiles:s.split(""),squareArray:c,ptiles:i.split(""),gtiles:a.split(""),whoseturn:r.whoseturn,moves:o,rescues:l,racksize:n.racksize,allowRewind:!1}}(n.apidata);O(t.syncstamp),r===h.ap?ge(t.gname):r===h.b6&&ge(t.pname),P(t.tiles),U(t.squareArray),q(t.ptiles),L(t.gtiles),K(t.whoseturn);var i={squareArray:JSON.parse(JSON.stringify(t.squareArray)),ptiles:(0,c.Z)(t.ptiles),gtiles:(0,c.Z)(t.gtiles)};de(i),oe(t.moves),te(t.rescues),be(t.allowRewind),Ee()}if("providegname"===n.func&&r===h.Ji&&ge(n.gname),"allowundo"===n.func&&be(!0),"chat"===n.func){var a=[].concat((0,c.Z)(je),[{from:n.nickname,msg:n.sendmsg}]);we(a)}"providesyncdata"===n.func&&n.syncstamp!==T&&(console.log("Out of sync - requesting latest game data"),We())}}(w)}),[w]),(0,o.useEffect)((function(){(0,y.O)("ScrollableMoves")}),[ce]),(0,o.useEffect)((function(){(0,y.O)("ScrollableChat")}),[je]),(0,o.useEffect)((function(){if(ne>ke){var e=document.createElement("audio");e.src=r===h.b6?"https://tilerunner.github.io/OneGotAway.m4a":"https://tilerunner.github.io/yippee.m4a",e.play()}}),[ne]),(0,o.useEffect)((function(){var e=fe+1;e>=h._W.length&&(e=0),me(e)}),[_]),(0,o.useEffect)((function(){var e=setInterval((function(){r!==_&&_!==h.Bd&&Ge()}),h.$B);return function(){return clearInterval(e)}}));var Ae=function(){var e=(0,v.$)(S);U(e),t?Te():r===h.ap?Se(e):r===h.b6?Ce():Oe()},Se=function(e){for(var n=Date.now(),t=[],i=[],a=(0,c.Z)(R);t.length<S;){var s=Math.floor(Math.random()*a.length);t.push(a[s]),a.splice(s,1),s=Math.floor(Math.random()*a.length),i.push(a[s]),a.splice(s,1)}t.sort(),i.sort(),O(n),L(i),q(t),P(a),de({squareArray:e,ptiles:[].concat(t),gtiles:[].concat(i)}),k.send({type:"pb",func:"startgame",gameid:N,timestamp:n,racksize:S,sender:r,pname:j,tiles:a,ptiles:t,gtiles:i})},Ce=function(){k.send({gameid:N,gname:j,type:"pb",func:"joingame",sender:r})},Te=function(){k.send({gameid:N,type:"pb",func:"rejoingame",sender:r})},Oe=function(){k.send({gameid:N,type:"pb",func:"startObserving"})};function Ee(){Y(-1),be(!1),ae(-1,-1,h.QY),$([])}var Be=function(e,n,t,r){var i=JSON.parse(JSON.stringify(J)),a=(0,c.Z)(i[e]),s=a[n],o=(0,c.Z)(M),l=(0,c.Z)(F),u=(0,c.Z)(z),d=String(e)+"-"+String(n),p=z.indexOf(d);if(-1===t&&(t=G,r=ie),t>-1&&s.usedby===h.i4){var f=_===h.kX?o[t]:l[t];return s.letter=f,s.usedby=_,a[n]=s,i[e]=(0,c.Z)(a),_===h.kX?o.splice(t,1):l.splice(t,1),_===h.kX&&t===o.length&&(t-=1),_===h.Ov&&t===l.length&&(t-=1),Y(t),U(i),q(o),L(l),$([].concat((0,c.Z)(z),[d])),void ae(r)}if(p>-1)return _===h.kX?o.push(s.letter):l.push(s.letter),s.usedby=h.i4,s.letter=h.GP,a[n]=s,i[e]=(0,c.Z)(a),Y(_===h.kX?o.length-1:l.length-1),u.splice(p,1),U(i),q(o),L(l),$(u),void ae(-1,-1,h.QY);if(s.usedby!==h.i4);else{var m=ie[0]!==e||ie[1]!==n?h.oW:ie[2]===h.oW?h.ik:ie[2]===h.ik?h.QY:h.oW;ae(r=[e,n,m])}},Re=function(e){if(r!==h.qg)if(-1!==G)if(G!==e){var n=r===h.ap?(0,c.Z)(M):(0,c.Z)(F),t=G,i=n[t],a=e;n.splice(t,1),n.splice(a,0,i),r===h.ap?q(n):L(n),Y(-1)}else Y(-1);else Y(e)};function Ie(){return Ze.apply(this,arguments)}function Ze(){return(Ze=(0,s.Z)(i().mark((function e(){var n,t,a,s,o,l,u,d,p,f,m,v;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(He()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Me();case 4:if(0===(n=e.sent).invalidwords.length){e.next=8;break}return alert("Invalid according to ENABLE2K lexicon: ".concat(n.invalidwords.join().replace(".","?").toUpperCase())),e.abrupt("return");case 8:if(t=ne,r===h.ap)for(a=["0-0","0-"+E,"0-"+B,E+"-0",E+"-"+B,B+"-0",B+"-"+E,B+"-"+B],s=0;s<z.length;s++)a.indexOf(z[s])>-1&&(t+=1);for(o=r===h.ap?(0,c.Z)(M):(0,c.Z)(F),l=(0,c.Z)(Z);o.length<S&&l.length>0;)u=Math.floor(Math.random()*l.length),o.push(l[u]),l.splice(u,1);o.sort(),d=0===o.length?h.Bd:r===h.ap?h.Ov:h.ap,b(J)||(d=h.Bd),p={by:r,type:h.bS,mainword:n.mainword,extrawords:n.extrawords,pos:n.pos},f=[].concat((0,c.Z)(ce),[p]),m=Date.now(),Ee(),O(m),K(d),r===h.ap?q(o):L(o),P(l),oe(f),te(t),de({squareArray:JSON.parse(JSON.stringify(J)),ptiles:r===h.ap?(0,c.Z)(o):(0,c.Z)(M),gtiles:r===h.ap?(0,c.Z)(F):(0,c.Z)(o)}),v={gameid:N,type:"pb",func:r===h.ap?"ept":"egt",timestamp:m,sender:r,ptiles:o,tiles:l,whoseturn:d,move:p,rescues:t},r===h.ap?v.ptiles=o:v.gtiles=o,k.send(v);case 30:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Pe=function(){if(Z.length<S)window.alert("Need "+S+" tiles in the bag to exchange");else{for(var e=[],n=(0,c.Z)(Z);e.length<S&&n.length>0;){var t=Math.floor(Math.random()*n.length);e.push(n[t]),n.splice(t,1)}e.sort(),(n=r===h.ap?[].concat((0,c.Z)(n),(0,c.Z)(ue.ptiles)):[].concat((0,c.Z)(n),(0,c.Z)(ue.gtiles))).sort();var i={by:r,type:h.Ix},a=[].concat((0,c.Z)(ce),[i]),s=Date.now();Ee(),O(s),U(JSON.parse(JSON.stringify(ue.squareArray))),K(r===h.ap?h.Ov:h.kX),r===h.ap?q(e):L(e),P(n),oe(a),de({squareArray:JSON.parse(JSON.stringify(ue.squareArray)),ptiles:r===h.ap?[].concat(e):(0,c.Z)(M),gtiles:r===h.ap?(0,c.Z)(F):[].concat(e)});var o={gameid:N,type:"pb",func:r===h.ap?"ept":"egt",timestamp:s,sender:r,whoseturn:h.Ov,tiles:n,move:i};r===h.ap?o.ptiles=e:o.gtiles=e,k.send(o)}};function He(){for(var e=!0,n=ce.length,t=0;e&&t<n;++t)ce[t].type===h.bS&&(e=!1);if(e&&J[E][E].usedby===h.i4)return window.alert("First play must hit center square"),!1;if(0===z.length)return window.alert("You didn't play any tiles"),!1;for(var r=z.length,i=B+1,a=-1,s=B+1,c=-1,o=0;o<r;++o){var l=parseInt(z[o].split("-")[0]),u=parseInt(z[o].split("-")[1]);if(l<i&&(i=l),l>a&&(a=l),u<s&&(s=u),u>c&&(c=u),!(l>0&&J[l-1][u].usedby!==h.i4)&&!(u>0&&J[l][u-1].usedby!==h.i4)&&!(l<B&&J[l+1][u].usedby!==h.i4)&&!(u<B&&J[l][u+1].usedby!==h.i4))return window.alert("Each played tile must be part of a word"),!1}if(i!==a&&s!==c)return window.alert("Tiles played must be in a straight line"),!1;for(var d=!1,p=!1,f=i;f<=a;++f)for(var m=s;m<=c;++m){if(J[f][m].usedby===h.i4)return window.alert("There is a gap in your word"),!1;if(!e){var v=f+"-"+m;z.indexOf(v)<0&&(d=!0),i===a&&f>0&&J[f-1][m].usedby!==h.i4&&(p=!0),i===a&&f<B&&J[f+1][m].usedby!==h.i4&&(p=!0),s===c&&m>0&&J[f][m-1].usedby!==h.i4&&(p=!0),s===c&&m<B&&J[f][m+1].usedby!==h.i4&&(p=!0)}}return!!(e||(i===a&&s>0&&J[i][s-1].usedby!==h.i4&&(d=!0),i===a&&c<B&&J[i][c+1].usedby!==h.i4&&(d=!0),s===c&&i>0&&J[i-1][s]!==h.i4&&(d=!0),s===c&&a<B&&J[a+1][s].usedby!==h.i4&&(d=!0),d||p))||(window.alert("New words must extend an existing word and/or hook existing words or tiles"),!1)}function Me(){return qe.apply(this,arguments)}function qe(){return(qe=(0,s.Z)(i().mark((function e(){var n,t,r,a,s,o,l,u,d,p,f,m,v,b,x,y,g,N,j,w,k,A,S,C,T,O,E,R,I,Z,P;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n={},t="",r=[],a="",s=B+1,o=-1,l=B+1,u=-1,d=z.length,p=0;p<d;++p)f=parseInt(z[p].split("-")[0]),m=parseInt(z[p].split("-")[1]),f<s&&(s=f),f>o&&(o=f),m<l&&(l=m),m>u&&(u=m);if(s<o||1===d){for(v=l,b=s;b>0&&J[b-1][v].usedby!==h.i4;)b-=1;for(x=o;x<B&&J[x+1][v].usedby!==h.i4;)x+=1;for(a=h.v8[v]+h.RH[b],y=b;y<=x;++y)if(t+=J[y][v].letter,g=y+"-"+v,z.indexOf(g)>-1){for(N=v;N>0&&J[y][N-1].usedby!==h.i4;)N-=1;for(j=v;j<B&&J[y][j+1].usedby!==h.i4;)j+=1;if(N<j){for(w="",k=N;k<=j;++k)w+=J[y][k].letter;r=[].concat((0,c.Z)(r),[w])}}}if(t.length<2){for(A=s,S=l;S>0&&J[A][S-1].usedby!==h.i4;)S-=1;for(C=u;C<B&&J[A][C+1].usedby!==h.i4;)C+=1;for(a=h.RH[A]+h.v8[S],t="",r=[],T=S;T<=C;++T)if(t+=J[A][T].letter,O=A+"-"+T,z.indexOf(O)>-1){for(E=A;E>0&&J[E-1][T].usedby!==h.i4;)E-=1;for(R=A;R<B&&J[R+1][T].usedby!==h.i4;)R+=1;if(E<R){for(I="",Z=E;Z<=R;++Z)I+=J[Z][T].letter;r=[].concat((0,c.Z)(r),[I])}}}return e.next=16,De(t,r);case 16:return P=e.sent,n={mainword:t,extrawords:r,pos:a,invalidwords:P},e.abrupt("return",n);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function De(e,n){return Fe.apply(this,arguments)}function Fe(){return(Fe=(0,s.Z)(i().mark((function e(n,t){var r,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,t.forEach((function(e){r=r+","+e})),"https://tilerunner.herokuapp.com/ENABLE2K?validate=",e.next=5,fetch("https://tilerunner.herokuapp.com/ENABLE2K?validate="+r.toLocaleLowerCase());case 5:return a=e.sent,e.next=8,a.json();case 8:return s=e.sent,e.abrupt("return",s.invalidwords);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Le(){ve||(be(!0),k.send({gameid:N,type:"pb",func:"allowundo",sender:r}))}function Qe(){k.send({gameid:N,type:"pb",func:"undoturn"})}var Je=function(){U(JSON.parse(JSON.stringify(ue.squareArray))),q((0,c.Z)(ue.ptiles)),L((0,c.Z)(ue.gtiles)),Y(-1),$([]),ae([-1,-1,h.QY])},Ue=function(){var e={by:r,type:h.Am},n=[].concat((0,c.Z)(ce),[e]),t=function(e){var n=e.length-1,t=n-1;return t>-1&&e[t].type===h.Am&&e[n].type===h.Am}(n)?h.Bd:r===h.ap?h.Ov:h.kX,i=Date.now();Je(),Ee(),O(i),K(t),oe(n),k.send({gameid:N,type:"pb",func:r===h.ap?"ept":"egt",timestamp:i,sender:r,whoseturn:t,move:e})},We=function(){k.send({gameid:N,type:"pb",sender:r,func:"requestgamedata",syncstamp:T})},Ge=function(){k.send({gameid:N,type:"pb",sender:r,func:"requestsyncdata"})};return(0,a.jsxs)("div",{className:"prisonbreak",children:[(0,a.jsxs)("div",{className:"w3-display-container w3-teal topBarHeight",children:[(0,a.jsx)("div",{className:"w3-display-middle",children:(0,a.jsx)("h1",{className:"myHeadingFont",children:"Prison Break"})}),(0,a.jsxs)("div",{className:"w3-display-topleft w3-black topBarCorner commonFontFamily",children:["Game id: ",N]}),(0,a.jsxs)("div",{className:"w3-display-bottomleft w3-orange topBarCorner commonFontFamily",children:["Prisoners: ",r===h.ap?j:r===h.b6?ye:"Secret"]}),(0,a.jsx)("div",{className:"w3-display-topright w3-black topBarCorner commonFontFamily",children:(0,a.jsx)("button",{className:"w3-button",onClick:function(){n("menu")},children:(0,a.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})}),(0,a.jsxs)("div",{className:"w3-display-bottomright w3-orange topBarCorner commonFontFamily",children:["Guards: ",r===h.ap?ye:r===h.b6?j:"Secret"]})]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col pbTileAndMovesOuter",children:[(0,a.jsx)(d.default,{tiles:Z,othertiles:r===h.ap?F:r===h.b6?M:[]}),(0,a.jsx)(p.default,{moves:ce,onmoveclick:function(e){}})]}),(0,a.jsx)("div",{className:"col pbPlayerOuterSection",children:r===h.ap?(0,a.jsx)(l.default,{racktiles:M,whoseturn:_,selection:G,onClick:function(e){return Re(e)},onClickFinishTurn:function(){return Ie()},onClickTileRecall:function(){return Je()},onClickTileExchange:function(){return Pe()},onClickPassPlay:function(){return Ue()},onClickUndoLastPlay:function(){return Qe()},onClickAllowUndo:function(){return Le()},participant:r,moves:ce,allowRewind:ve}):r===h.b6?(0,a.jsx)(l.default,{racktiles:F,whoseturn:_,selection:G,onClick:function(e){return Re(e)},onClickFinishTurn:function(){return Ie()},onClickTileRecall:function(){return Je()},onClickTileExchange:function(){return Pe()},onClickPassPlay:function(){return Ue()},onClickUndoLastPlay:function(){return Qe()},onClickAllowUndo:function(){return Le()},participant:r,moves:ce,allowRewind:ve}):(0,a.jsxs)("div",{className:"pbPlayerInnerSection",children:[(0,a.jsxs)("div",{className:"pbPlayerTitle",children:[(0,a.jsx)("i",{className:"material-icons",children:h._k}),"\xa0",h.Ji,"\xa0",(0,a.jsx)("i",{className:"material-icons",children:h._k})]}),(0,a.jsx)("div",{className:"pbTilerack",children:M&&M.map((function(e,n){return(0,a.jsx)(g,{participant:"P",tilevalue:e,tileindex:n},"ObserverPrisonersRackTile".concat(n))}))}),(0,a.jsxs)("div",{className:"pbPlayerTitle",children:[(0,a.jsx)("i",{className:"material-icons",children:h.g9}),"\xa0",h.jN,"\xa0",(0,a.jsx)("i",{className:"material-icons",children:h.g9})]}),(0,a.jsx)("div",{className:"pbTilerack",children:F&&F.map((function(e,n){return(0,a.jsx)(g,{participant:"G",tilevalue:e,tileindex:n},"ObserverGuardsRackTile".concat(n))}))})]})}),(0,a.jsx)("div",{className:"col",children:r===_?(0,a.jsx)("div",{className:"row",onKeyDownCapture:function(e){if(e.preventDefault(),r===_)if("Enter"!==e.key)if("Escape"!==e.key){if(e.key.match(/^[A-Za-z\?]$/)){var n=e.key.toUpperCase(),t=_===h.kX?M:F,i=t.indexOf(n);if(-1===i&&(i=t.indexOf("?")),i>-1){var a=ie[0],s=ie[1],o=ie[2];if(a>-1&&s>-1&&o!==h.QY){var l=ie;if(o===h.oW){for(var u=-1,d=s+1;d<B+1&&-1===u;d++)J[a][d].usedby===h.i4&&(u=d);return l=-1===u?[-1,-1,h.QY]:[a,u,h.oW],Be(a,s,i,l),void Y(-1)}if(o===h.ik){for(var p=-1,f=2*S+1,m=a+1;m<f&&-1===p;m++)J[m][s].usedby===h.i4&&(p=m);return l=-1===p?[-1,-1,h.QY]:[p,s,h.ik],Be(a,s,i,l),void Y(-1)}}}}else if("Backspace"===e.key&&z.length>0){var v=z[z.length-1],b=parseInt(v.split("-")[0]),x=parseInt(v.split("-")[1]),y=(0,c.Z)(z),g=(0,c.Z)(M),N=(0,c.Z)(F),j=JSON.parse(JSON.stringify(J)),w=j[b],k=w[x],A=[-1,-1,h.QY],C=G;y.splice(z.length-1,1);var T=J[b][x].letter;_===h.kX?(g.push(T),C=g.length-1):(N.push(T),C=N.length-1),k.usedby=h.i4,k.letter=h.GP,w[x]=k,j[b]=(0,c.Z)(w);var O=ie[2];O!==h.QY&&(A=[b,x,O],1===z.length&&(C=-1)),$(y),L(N),q(g),U(j),ae(A),Y(C)}}else Je();else Ie()},children:(0,a.jsx)(u.default,{squareArray:J,rcd:ie,onClick:function(e,n){return Be(e,n,-1,null)}})}):(0,a.jsx)("div",{className:"row",children:(0,a.jsx)(u.default,{squareArray:J,rcd:ie,onClick:function(){}})})}),(0,a.jsxs)("div",{className:"col",children:[(0,a.jsx)(f.default,{rescues:ne}),(0,a.jsx)(m.default,{gameid:N,client:k,nickname:j,msgs:je,setMsgs:we,participant:r})]})]}),(0,a.jsx)("div",{className:"w3-display-container w3-teal topBarHeight",children:(0,a.jsx)("div",{className:"w3-display-middle commonFontFamily",children:_===h.Bd?(0,a.jsx)("h1",{children:"Game Over!"}):(0,a.jsx)("p",{children:h._W[fe]})})})]})}},9477:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(6595);n.default=function(e){var n=e.moves,t=e.onmoveclick;return(0,r.jsxs)("div",{className:"pbMoves",children:[(0,r.jsx)("div",{className:"pbMovesTitle",children:"MOVES"}),(0,r.jsx)("div",{className:"pbMovesScrollable",id:"ScrollableMoves",children:n&&n.map((function(e,n){var a;return(0,r.jsxs)("div",{className:"pbMove",onClick:function(){return t(n)},children:[(0,r.jsx)("span",{className:"pbMove by",children:e.by}),":",(0,r.jsx)("span",{className:"pbMove ".concat(e.type),children:e.type===i.bS?(0,r.jsxs)(r.Fragment,{children:[e.pos," ",e.mainword.replace("Q","Qu"),null===(a=e.extrawords)||void 0===a?void 0:a.map((function(e,n){return(0,r.jsxs)("span",{children:[",\xa0",e.replace("Q","Qu")]},"extraword".concat(n))}))]}):(0,r.jsx)(r.Fragment,{})})]},"move".concat(n))}))})]})}},8451:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(6595),a=function(e){var n="pbTileOnRack "+(e.selection===e.tileindex?"Selected ":"Unselected ")+("Q"===e.tilevalue?"u ":"")+e.participant,t=e.tileindex;return(0,r.jsx)("div",{className:n,onClick:function(n){return e.onClick(n)},children:(0,r.jsx)("div",{className:"pbTileOnRackText",children:e.tilevalue})},t)},s=function(e){return(0,r.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:(0,r.jsxs)("span",{className:"pbActionButtonText",children:[(0,r.jsx)("i",{className:"material-icons",children:"check"}),"\xa0Finish Turn"]})})},c=function(e){return(0,r.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:(0,r.jsxs)("span",{className:"pbActionButtonText",children:[(0,r.jsx)("i",{className:"material-icons",children:"undo"}),"\xa0Recall Tiles"]})})},o=function(e){return(0,r.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:(0,r.jsxs)("span",{className:"pbActionButtonText",children:[(0,r.jsx)("i",{className:"material-icons",children:"cached"}),"\xa0Swap Tiles"]})})},l=function(e){return(0,r.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:(0,r.jsxs)("span",{className:"pbActionButtonText",children:[(0,r.jsx)("i",{className:"material-icons",children:"not_interested"}),"\xa0Pass Turn"]})})},u=function(e){return e.alreadyAllowed?(0,r.jsx)("div",{className:"pbActionButtonSevere",children:(0,r.jsxs)("span",{className:"pbActionButtonSevereText",children:[(0,r.jsx)("i",{className:"material-icons",children:"report"}),"\xa0ENABLED",(0,r.jsx)("span",{className:"pbActionButtonSevereText2",children:"\xa0Allow undo is now enabled"})]})}):(0,r.jsx)("button",{className:"pbActionButtonSevere",onClick:e.onClick,children:(0,r.jsxs)("span",{className:"pbActionButtonSevereText",children:[(0,r.jsx)("i",{className:"material-icons",children:"report_problem"}),"\xa0Allow Undo Turn",(0,r.jsx)("span",{className:"pbActionButtonSevereText2",children:"Click to let opponent undo"})]})})},d=function(e){return(0,r.jsx)("button",{className:"pbActionButtonSevere",onClick:e.onClick,children:(0,r.jsxs)("span",{className:"pbActionButtonSevereText",children:[(0,r.jsx)("i",{className:"material-icons",children:"delete_forever"}),"\xa0Undo My Turn",(0,r.jsx)("span",{className:"pbActionButtonSevereText2",children:"Opponent has allowed undo"})]})})};function p(e){return(0,r.jsxs)("div",{className:"pbActionButtonDiv",children:[(0,r.jsx)("p",{children:(0,r.jsx)(s,{onClick:function(){return e.onClickFinishTurn()}})}),(0,r.jsx)("p",{children:(0,r.jsx)(c,{onClick:function(){return e.onClickTileRecall()}})}),(0,r.jsx)("p",{children:(0,r.jsx)(o,{onClick:function(){return e.onClickTileExchange()}})}),(0,r.jsx)("p",{children:(0,r.jsx)(l,{onClick:function(){return e.onClickPassPlay()}})})]})}function f(e){return(0,r.jsx)("div",{className:"pbActionButtonDiv",children:(0,r.jsx)("div",{children:(0,r.jsx)(u,{onClick:function(){return e.onClickAllowUndo()},alreadyAllowed:e.allowRewind})})})}function m(e){return(0,r.jsx)("div",{className:"pbActionButtonDiv",children:(0,r.jsx)("p",{children:(0,r.jsx)(d,{onClick:function(){return e.onClickUndoLastPlay()}})})})}n.default=function(e){var n=e.participant===i.ap?i._k:i.g9,t=e.participant===i.ap?i.Ji:i.jN;return(0,r.jsxs)("div",{className:"pbPlayerInnerSection",children:[(0,r.jsxs)("div",{className:"pbPlayerTitle",children:[(0,r.jsx)("i",{className:"material-icons",children:n}),"\xa0",t,"\xa0",(0,r.jsx)("i",{className:"material-icons",children:n})]}),(0,r.jsx)("div",{className:"pbTilerack",children:e.racktiles&&e.racktiles.map((function(n,t){return(0,r.jsx)(a,{whoseturn:e.whoseturn,participant:e.participant,selection:e.selection,tileindex:t,tilevalue:n,onClick:function(){return e.onClick(t)}},"RackTile".concat(t))}))}),e.whoseturn===e.participant?p(e):e.allowRewind&&e.moves&&e.moves.length>0&&e.moves[e.moves.length-1].by===e.participant&&m(e),e.moves&&e.moves.length>0&&e.moves[e.moves.length-1].by!==e.participant&&f(e)]})}},798:function(e,n,t){"use strict";t.r(n);var r=t(5893);n.default=function(e){var n=e.rescues;return(0,r.jsxs)("div",{className:"pbRescuesMade",children:["Rescues made: ",n]})}},4620:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(6595);n.default=function(e){var n=e.usedby,t=e.type,a=e.letter,s=e.ri,c=e.ci,o=e.rcd,l=e.onClick,u=n!==i.i4?"pbSquareInner PlayerTile":o[0]===s&&o[1]===c&&o[2]===i.oW?"pbSquareInner RightArrow":o[0]===s&&o[1]===c&&o[2]===i.ik?"pbSquareInner DownArrow":"pbSquareInner "+t,d=n!==i.i4?a:u.indexOf("RightArrow")>-1?"\u27a1":u.indexOf("DownArrow")>-1?"\u2b07":u.indexOf("CenterSquare")>-1?(0,r.jsx)("i",{className:"material-icons",children:"stars"}):u.indexOf("EscapeHatch")>-1?(0,r.jsx)("i",{className:"material-icons",children:i._k}):".";return n===i.i4?(0,r.jsx)("button",{className:u,onClick:l,children:d}):(0,r.jsx)("button",{className:u,onClick:l,children:(0,r.jsx)("div",{className:"pbSquareTileText ".concat(n+("Q"===a?" u":"")),children:d})})}},8520:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(1385);n.default=function(e){var n=e.tiles,t=e.othertiles,a=[].concat((0,i.Z)(n||[]),(0,i.Z)(t||[]));return a.sort(),"?"===a[0]&&(a.splice(0,1),a.push("?")),"?"===a[0]&&(a.splice(0,1),a.push("?")),(0,r.jsxs)("div",{className:"pbTilepool",children:[(0,r.jsx)("div",{className:"pbTilepoolTitle",children:"TILES"}),a.map((function(e,n){return(0,r.jsxs)("span",{children:[n>0&&e!==a[n-1]?(0,r.jsx)("span",{className:"pbTilepoolDivider"}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)("span",{className:"Q"===e?"pbTilepoolTile u":"pbTilepoolTile",children:e})]},"tile".concat(n))}))]})}}}]);