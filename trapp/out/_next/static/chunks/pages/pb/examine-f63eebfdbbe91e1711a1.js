(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[732],{4946:function(e,n,r){"use strict";r.d(n,{F:function(){return s}});var t=r(6595);function s(e){return/[A-Z][0-9][0-9]/.test(e)?{row:Number(e.substr(1,2))-1,col:t.v8.indexOf(e[0]),dir:t.ik}:/[A-Z][0-9]/.test(e)?{row:Number(e[1])-1,col:t.v8.indexOf(e[0]),dir:t.ik}:/[0-9][0-9][A-Z]/.test(e)?{row:Number(e.substr(0,2))-1,col:t.v8.indexOf(e[2]),dir:t.oW}:/[0-9][A-Z]/.test(e)?{row:Number(e[0])-1,col:t.v8.indexOf(e[1]),dir:t.oW}:void 0}},1489:function(e,n,r){"use strict";r.d(n,{$:function(){return s}});var t=r(6595);function s(e){for(var n=2*e+1,r=Array(n),s=0;s<n;++s){for(var a=Array(n),i=0;i<n;++i){var c={row:s,col:i,type:t.WS,usedby:t.i4,letter:t.GP};s===e&&i===e?c.type=t.ix:s%e===0&&i%e===0?c.type=t.fi:s%2===i%2&&(c.type=t.me),a[i]=c}r[s]=[].concat(a)}return r}},6595:function(e,n,r){"use strict";r.d(n,{v8:function(){return t},RH:function(){return s},dK:function(){return a},ap:function(){return i},b6:function(){return c},qg:function(){return o},Vj:function(){return l},kX:function(){return u},Ov:function(){return d},Bd:function(){return m},_k:function(){return p},g9:function(){return h},Ji:function(){return f},jN:function(){return v},bS:function(){return b},Ix:function(){return x},Am:function(){return j},oW:function(){return N},ik:function(){return y},QY:function(){return w},i4:function(){return g},_W:function(){return k},$B:function(){return A},fl:function(){return T},Cr:function(){return S},L8:function(){return E},Qt:function(){return O},fi:function(){return C},ix:function(){return I},me:function(){return R},WS:function(){return B},GP:function(){return H}});var t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],s=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],a="U",i="P",c="G",o="O",l="E",u=i,d=c,m="X",p="run_circle",h="security",f="PRISONERS",v="GUARDS",b="PLAY",x="SWAP",j="PASS",N="r",y="d",w="",g="",k=["Escapee: \"I'm free! I'm free!\". Little kid: \"I'm four! I'm four!\"","Two peanuts were walking down a back alley. One was a salted.","The psychic dwarf escaped! There's a small medium at large!","What do you call a vegetable who has escaped prison? An escapea!","The prisoners fave punctuation is a period. It marks the end of a sentence!","Prison is only one word, but to robbers it's a whole sentence."],A=2e4,T=["A","A","A","B","C","D","E","E","E","E","F","G","H","I","I","I","J","K","L","M","N","N","O","O","O","P","Q","R","R","S","T","T","U","V","W","X","Y","Z","?","?"],S=["A","A","A","A","A","B","C","D","D","E","E","E","E","E","E","F","G","H","I","I","I","I","I","J","K","L","L","M","N","N","N","O","O","O","O","P","Q","R","R","R","S","S","T","T","T","U","V","W","X","Y","Z","?","?"],E=["A","A","A","A","A","A","A","B","B","C","C","D","D","D","E","E","E","E","E","E","E","E","E","F","G","G","H","H","I","I","I","I","I","I","I","J","K","L","L","L","M","M","N","N","N","N","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","S","S","S","T","T","T","T","U","U","U","V","W","X","Y","Z","?","?"],O=["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z","?","?"],C="EscapeHatch",I="CenterSquare",R="style1",B="style2",H=""},3939:function(e,n,r){"use strict";r.d(n,{O:function(){return t}});var t=function(e){var n=document.getElementById(e);n.scrollTop=n.scrollHeight}},3625:function(e,n,r){"use strict";r.r(n);var t=r(5893),s=r(4620),a=r(6595);n.default=function(e){var n=e.onClick,r=e.squareArray,i=void 0===r?[]:r,c=e.rcd,o=function(e){return(0,t.jsxs)("tr",{className:"pbRow",children:[(0,t.jsx)("td",{className:"pbBoardRowHeader",id:"BoardHeaderLeft",children:a.RH[e]}),i[e].map((function(e){return function(e){return(0,t.jsx)("td",{className:"pbSquareOuter",children:(0,t.jsx)(s.default,{usedby:e.usedby,type:e.type,letter:e.letter,ri:e.row,ci:e.col,rcd:c,onClick:function(){return n(e.row,e.col)}})},"Square".concat(e.row,"-").concat(e.col))}(e)})),(0,t.jsx)("td",{className:"pbBoardRowHeader",id:"BoardHeaderRight",children:a.RH[e]})]},"BoardRow".concat(e))};return(0,t.jsx)("table",{className:"pbBoard",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{className:"pbBoardColumnHeaderRow",children:[(0,t.jsx)("td",{className:"pbBoardHeaderTopLeft",children:"\xa0"}),i.map((function(e,n){return(0,t.jsx)("td",{className:"pbBoardColumnHeader",children:a.v8[n]},"TopColumnHeader".concat(n))})),(0,t.jsx)("td",{className:"pbBoardHeaderTopRight",children:"\xa0"})]}),i.map((function(e,n){return o(n)})),(0,t.jsxs)("tr",{className:"pbBoardColumnHeaderRow",id:"BoardHeaderBottom",children:[(0,t.jsx)("td",{className:"pbBoardHeaderBottomLeft",children:"\xa0"}),i.map((function(e,n){return(0,t.jsx)("td",{className:"pbBoardColumnHeader",children:a.v8[n]},"BottomColumnHeader".concat(n))})),(0,t.jsx)("td",{className:"pbBoardHeaderBottomRight",children:"\xa0"})]})]})})}},7666:function(e,n,r){"use strict";r.r(n);var t=r(5893),s=r(1385),a=r(7294);n.default=function(e){var n=e.gameid,r=void 0===n?"":n,i=e.client,c=e.nickname,o=e.msgs,l=void 0===o?[]:o,u=e.setMsgs,d=e.participant,m=void 0===d?"":d,p=(0,a.useState)(""),h=p[0],f=p[1];return(0,t.jsx)("div",{id:"ScrollableChat",className:"pbChat",children:(0,t.jsx)("table",{className:"pbChatTable",children:(0,t.jsxs)("tbody",{children:[l.map((function(e,n){return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"pbChatFrom",children:e.from}),(0,t.jsx)("td",{className:"pbChatMsg",children:e.msg})]},"ChatMessage".concat(n))})),(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:"2",children:""===c?(0,t.jsx)("span",{children:"Please enter nickname to use chat"}):(0,t.jsx)("textarea",{className:""===h?"pbChatInputEmpty":"pbChatInput",name:"nextmsgInputArea",value:h,onChange:function(e){f(e.target.value)},onKeyDownCapture:function(e){if("Enter"===e.key&&h.length>0){e.preventDefault();var n=[].concat((0,s.Z)(l),[{from:c,msg:h}]),t=h;return u(n),f(""),void i.send({gameid:r,nickname:c,type:"pb",func:"chat",sender:m,sendmsg:t})}if("Backspace"===e.key&&h.length>0){e.preventDefault();var a=h.slice(0,h.length-1);f(a)}},placeholder:"chat..."})})})]})})})}},2389:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return v}});var t=r(5893),s=r(1385),a=r(7294),i=r(3625),c=r(8520),o=r(9477),l=r(798),u=r(7666),d=r(6595),m=r(1489),p=r(4946);var h=r(3939),f=function(e){var n="pbTileOnRack Unselected "+("Q"===e.tilevalue?"u ":"")+e.participant;return(0,t.jsx)("div",{className:n,children:(0,t.jsx)("div",{className:"pbTileOnRackText",children:e.tilevalue})},e.tileindex)},v=function(e){var n=e.setWhereto,r=e.client,v=e.wsmessage,b=e.gameid,x=e.nickname,j=e.participant,N=(0,a.useState)(0),y=N[0],w=N[1],g=(0,a.useState)({pname:"loading...",gname:"loading...",moves:[],snapshots:[{tiles:[],ptiles:[],gtiles:[],rescues:0,whoseturn:"P"}]}),k=g[0],A=g[1],T=(0,a.useState)([]),S=T[0],E=T[1];(0,a.useEffect)((function(){r.send({gameid:b,type:"pb",sender:d.Vj,func:"startExamining"})}),[]),(0,a.useEffect)((function(){""!==v&&function(e){var n=JSON.parse(e);if(n.gameid===b&&"pb"===n.type){if("providegamedata"===n.func){var r=function(e){for(var n=[],r=e,t="",s="",a="",i=(0,m.$)(r.racksize),c=[],o=0,l=0;l<r.events.length;l++){var u=r.events[l];if(u.ptiles&&(t=u.ptiles),u.gtiles&&(s=u.gtiles),"STARTGAME"!==u.type&&u.type!==d.bS&&u.type!==d.Ix||(a=u.tiles),u.type===d.bS||u.type===d.Ix||u.type===d.Am){var h={by:u.by,type:u.type};if(u.type===d.bS){h.mainword=u.mainword,h.extrawords=u.extrawords.split(","),h.pos=u.pos,u.by===d.ap&&(o=u.rescues);for(var f=(0,p.F)(u.pos),v=f.row,b=f.col,x=0;x<u.mainword.length;x++){var j=i[v][b];j.usedby===d.i4&&(j.usedby=u.by,j.letter=u.mainword[x]),f.dir===d.oW?b++:v++}}c.push(h)}n.push({tiles:a.split(""),squareArray:JSON.parse(JSON.stringify(i)),ptiles:t.split(""),gtiles:s.split(""),rescues:o,whoseturn:u.whoseturn})}return{pname:r.pname,gname:r.gname,moves:c,racksize:r.racksize,snapshots:n}}(n.apidata);A(r)}if("chat"===n.func){var t=[].concat((0,s.Z)(S),[{from:n.nickname,msg:n.sendmsg}]);E(t)}}}(v)}),[v]),(0,a.useEffect)((function(){(0,h.O)("ScrollableChat")}),[S]);var O=function(){y+1<k.snapshots.length&&w(y+1)},C=function(){return k.snapshots[y].whoseturn===d.kX},I=function(){return k.snapshots[y].whoseturn===d.Ov};return(0,t.jsxs)("div",{className:"prisonbreak",children:[(0,t.jsxs)("div",{className:"w3-display-container w3-teal topBarHeight",children:[(0,t.jsx)("div",{className:"w3-display-middle",children:(0,t.jsx)("h1",{className:"myHeadingFont",children:"Prison Break"})}),(0,t.jsxs)("div",{className:"w3-display-topleft w3-black topBarCorner commonFontFamily",children:["Game id: ",b]}),(0,t.jsxs)("div",{className:"w3-display-bottomleft w3-orange topBarCorner commonFontFamily",children:["Prisoners: ",k.pname]}),(0,t.jsx)("div",{className:"w3-display-topright w3-black topBarCorner commonFontFamily",children:(0,t.jsx)("button",{className:"w3-button",onClick:function(){n("menu")},children:(0,t.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})}),(0,t.jsxs)("div",{className:"w3-display-bottomright w3-orange topBarCorner commonFontFamily",children:["Guards: ",k.gname]})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col pbTileAndMovesOuter",children:[(0,t.jsx)(c.default,{tiles:k.snapshots[y].tiles,othertiles:C()?k.snapshots[y].gtiles:I()?k.snapshots[y].ptiles:[]}),(0,t.jsx)(o.default,{moves:k.moves.slice(0,y),onmoveclick:function(e){return function(e){var n=e;e+1<k.snapshots.length&&w(n)}(e)}})]}),(0,t.jsx)("div",{className:"col pbPlayerOuterSection",children:(0,t.jsxs)("div",{className:"pbPlayerInnerSection",children:[(0,t.jsxs)("div",{className:"pbPlayerTitle",children:[(0,t.jsx)("i",{className:"material-icons",children:d._k}),"\xa0",d.Ji,"\xa0",(0,t.jsx)("i",{className:"material-icons",children:d._k})]}),(0,t.jsxs)("div",{className:"pbTilerack",children:[k.snapshots[y].whoseturn===d.ap&&(0,t.jsx)("div",{className:"pbTilerackArrow",onClick:O}),k.snapshots[y].ptiles.map((function(e,n){return(0,t.jsx)(f,{participant:d.ap,tilevalue:I()?"*":e,tileindex:n},"ObserverPrisonersRackTile".concat(n))}))]}),(0,t.jsxs)("div",{className:"pbPlayerTitle",children:[(0,t.jsx)("i",{className:"material-icons",children:d.g9}),"\xa0",d.jN,"\xa0",(0,t.jsx)("i",{className:"material-icons",children:d.g9})]}),(0,t.jsxs)("div",{className:"pbTilerack",children:[k.snapshots[y].whoseturn===d.b6&&(0,t.jsx)("div",{className:"pbTilerackArrow",onClick:O}),k.snapshots[y].gtiles.map((function(e,n){return(0,t.jsx)(f,{participant:d.b6,tilevalue:C()?"*":e,tileindex:n},"ObserverGuardsRackTile".concat(n))}))]})]})}),(0,t.jsx)("div",{className:"col",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)(i.default,{squareArray:k.snapshots[y].squareArray,rcd:[-1,-1,d.QY],onClick:function(e,n){return function(e,n){for(var r=-1,t=0;t<k.snapshots.length;t++){var s=k.snapshots[t];-1===r&&s.squareArray[e][n].usedby!==d.i4&&(r=t)}r>0&&w(r-1)}(e,n)}})})}),(0,t.jsxs)("div",{className:"col",children:[(0,t.jsx)(l.default,{rescues:k.snapshots[y].rescues}),(0,t.jsx)(u.default,{gameid:b,client:r,nickname:x,msgs:S,setMsgs:E,participant:j})]})]}),(0,t.jsxs)("div",{className:"w3-display-container w3-teal examineFooterHeight",children:[(0,t.jsx)("div",{className:"w3-display-middle commonFontFamily",children:(0,t.jsxs)("div",{children:[y>0&&(0,t.jsx)("button",{className:"w3-black w3-round",onClick:function(){w(0)},children:(0,t.jsx)("i",{className:"material-icons",children:"fast_rewind"})}),y>0&&(0,t.jsx)("button",{className:"w3-black w3-round",onClick:function(){y-1>-1&&w(y-1)},children:(0,t.jsx)("i",{className:"material-icons",children:"arrow_left"})}),y<k.snapshots.length-1&&(0,t.jsx)("button",{className:"w3-black w3-round",onClick:O,children:(0,t.jsx)("i",{className:"material-icons",children:"arrow_right"})}),y<k.snapshots.length-1&&(0,t.jsx)("button",{className:"w3-black w3-round",onClick:function(){var e=k.snapshots.length-1;w(e)},children:(0,t.jsx)("i",{className:"material-icons",children:"fast_forward"})})]})}),(0,t.jsx)("div",{className:"w3-display-topleft commonFontFamily",children:(0,t.jsx)("p",{children:"\xa0Click on a move in the move list to jump to where it was played"})}),(0,t.jsx)("div",{className:"w3-display-bottomleft commonFontFamily",children:(0,t.jsx)("p",{children:"\xa0Click on a tile on the board to jump to where it was played"})}),(0,t.jsx)("div",{className:"w3-display-topright commonFontFamily",children:(0,t.jsxs)("div",{className:"pbTilerack",children:["Click on the ",(0,t.jsx)("span",{className:"pbTilerackArrowInFooter",children:" "})," by the rack to advance one move\xa0"]})})]})]})}},9477:function(e,n,r){"use strict";r.r(n);var t=r(5893),s=r(6595);n.default=function(e){var n=e.moves,r=e.onmoveclick;return(0,t.jsxs)("div",{className:"pbMoves",children:[(0,t.jsx)("div",{className:"pbMovesTitle",children:"MOVES"}),(0,t.jsx)("div",{className:"pbMovesScrollable",id:"ScrollableMoves",children:n&&n.map((function(e,n){var a;return(0,t.jsxs)("div",{className:"pbMove",onClick:function(){return r(n)},children:[(0,t.jsx)("span",{className:"pbMove by",children:e.by}),":",(0,t.jsx)("span",{className:"pbMove ".concat(e.type),children:e.type===s.bS?(0,t.jsxs)(t.Fragment,{children:[e.pos," ",e.mainword.replace("Q","Qu"),null===(a=e.extrawords)||void 0===a?void 0:a.map((function(e,n){return(0,t.jsxs)("span",{children:[",\xa0",e.replace("Q","Qu")]},"extraword".concat(n))}))]}):(0,t.jsx)(t.Fragment,{})})]},"move".concat(n))}))})]})}},798:function(e,n,r){"use strict";r.r(n);var t=r(5893);n.default=function(e){var n=e.rescues;return(0,t.jsxs)("div",{className:"pbRescuesMade",children:["Rescues made: ",n]})}},4620:function(e,n,r){"use strict";r.r(n);var t=r(5893),s=r(6595);n.default=function(e){var n=e.usedby,r=e.type,a=e.letter,i=e.ri,c=e.ci,o=e.rcd,l=e.onClick,u=n!==s.i4?"pbSquareInner PlayerTile":o[0]===i&&o[1]===c&&o[2]===s.oW?"pbSquareInner RightArrow":o[0]===i&&o[1]===c&&o[2]===s.ik?"pbSquareInner DownArrow":"pbSquareInner "+r,d=n!==s.i4?a:u.indexOf("RightArrow")>-1?"\u27a1":u.indexOf("DownArrow")>-1?"\u2b07":u.indexOf("CenterSquare")>-1?(0,t.jsx)("i",{className:"material-icons",children:"stars"}):u.indexOf("EscapeHatch")>-1?(0,t.jsx)("i",{className:"material-icons",children:s._k}):".";return n===s.i4?(0,t.jsx)("button",{className:u,onClick:l,children:d}):(0,t.jsx)("button",{className:u,onClick:l,children:(0,t.jsx)("div",{className:"pbSquareTileText ".concat(n+("Q"===a?" u":"")),children:d})})}},8520:function(e,n,r){"use strict";r.r(n);var t=r(5893),s=r(1385);n.default=function(e){var n=e.tiles,r=e.othertiles,a=[].concat((0,s.Z)(n||[]),(0,s.Z)(r||[]));return a.sort(),"?"===a[0]&&(a.splice(0,1),a.push("?")),"?"===a[0]&&(a.splice(0,1),a.push("?")),(0,t.jsxs)("div",{className:"pbTilepool",children:[(0,t.jsx)("div",{className:"pbTilepoolTitle",children:"TILES"}),a.map((function(e,n){return(0,t.jsxs)("span",{children:[n>0&&e!==a[n-1]?(0,t.jsx)("span",{className:"pbTilepoolDivider"}):(0,t.jsx)(t.Fragment,{}),(0,t.jsx)("span",{className:"Q"===e?"pbTilepoolTile u":"pbTilepoolTile",children:e})]},"tile".concat(n))}))]})}},8267:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pb/examine",function(){return r(2389)}])},1385:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function s(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(n,{Z:function(){return s}})}},function(e){e.O(0,[774,888,179],(function(){return n=8267,e(e.s=n);var n}));var n=e.O();_N_E=n}]);