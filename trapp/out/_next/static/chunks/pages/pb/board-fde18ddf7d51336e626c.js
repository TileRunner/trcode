(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[802],{6595:function(e,n,r){"use strict";r.d(n,{v8:function(){return t},RH:function(){return a},dK:function(){return o},ap:function(){return c},b6:function(){return u},qg:function(){return i},kX:function(){return s},Ov:function(){return d},Bd:function(){return l},_k:function(){return f},g9:function(){return p},Ji:function(){return m},jN:function(){return E},bS:function(){return N},Ix:function(){return h},Am:function(){return b},oW:function(){return A},ik:function(){return I},QY:function(){return O},i4:function(){return R},_W:function(){return w},$B:function(){return B},fl:function(){return x},Cr:function(){return H},L8:function(){return S},Qt:function(){return T},fi:function(){return C},ix:function(){return j},me:function(){return k},WS:function(){return L},GP:function(){return y}});var t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],a=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],o="U",c="P",u="G",i="O",s=c,d=u,l="X",f="run_circle",p="security",m="PRISONERS",E="GUARDS",N="PLAY",h="SWAP",b="PASS",A="r",I="d",O="",R="",w=["Escapee: \"I'm free! I'm free!\". Little kid: \"I'm four! I'm four!\"","Two peanuts were walking down a back alley. One was a salted.","The psychic dwarf escaped! There's a small medium at large!","What do you call a vegetable who has escaped prison? An escapea!","The prisoners fave punctuation is a period. It marks the end of a sentence!","Prison is only one word, but to robbers it's a whole sentence."],B=2e4,x=["A","A","A","B","C","D","E","E","E","E","F","G","H","I","I","I","J","K","L","M","N","N","O","O","O","P","Q","R","R","S","T","T","U","V","W","X","Y","Z","?","?"],H=["A","A","A","A","A","B","C","D","D","E","E","E","E","E","E","F","G","H","I","I","I","I","I","J","K","L","L","M","N","N","N","O","O","O","O","P","Q","R","R","R","S","S","T","T","T","U","V","W","X","Y","Z","?","?"],S=["A","A","A","A","A","A","A","B","B","C","C","D","D","D","E","E","E","E","E","E","E","E","E","F","G","G","H","H","I","I","I","I","I","I","I","J","K","L","L","L","M","M","N","N","N","N","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","S","S","S","T","T","T","T","U","U","U","V","W","X","Y","Z","?","?"],T=["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z","?","?"],C="EscapeHatch",j="CenterSquare",k="style1",L="style2",y=""},3625:function(e,n,r){"use strict";r.r(n);var t=r(5893),a=r(4620),o=r(6595);n.default=function(e){var n=e.onClick,r=e.squareArray,c=void 0===r?[]:r,u=e.rcd,i=function(e){return(0,t.jsxs)("tr",{className:"pbRow",children:[(0,t.jsx)("td",{className:"pbBoardRowHeader",id:"BoardHeaderLeft",children:o.RH[e]}),c[e].map((function(e){return function(e){return(0,t.jsx)("td",{className:"pbSquareOuter",children:(0,t.jsx)(a.default,{usedby:e.usedby,type:e.type,letter:e.letter,ri:e.row,ci:e.col,rcd:u,onClick:function(){return n(e.row,e.col)}})},"Square".concat(e.row,"-").concat(e.col))}(e)})),(0,t.jsx)("td",{className:"pbBoardRowHeader",id:"BoardHeaderRight",children:o.RH[e]})]},"BoardRow".concat(e))};return(0,t.jsx)("table",{className:"pbBoard",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{className:"pbBoardColumnHeaderRow",children:[(0,t.jsx)("td",{className:"pbBoardHeaderTopLeft",children:"\xa0"}),c.map((function(e,n){return(0,t.jsx)("td",{className:"pbBoardColumnHeader",children:o.v8[n]},"TopColumnHeader".concat(n))})),(0,t.jsx)("td",{className:"pbBoardHeaderTopRight",children:"\xa0"})]}),c.map((function(e,n){return i(n)})),(0,t.jsxs)("tr",{className:"pbBoardColumnHeaderRow",id:"BoardHeaderBottom",children:[(0,t.jsx)("td",{className:"pbBoardHeaderBottomLeft",children:"\xa0"}),c.map((function(e,n){return(0,t.jsx)("td",{className:"pbBoardColumnHeader",children:o.v8[n]},"BottomColumnHeader".concat(n))})),(0,t.jsx)("td",{className:"pbBoardHeaderBottomRight",children:"\xa0"})]})]})})}},4620:function(e,n,r){"use strict";r.r(n);var t=r(5893),a=r(6595);n.default=function(e){var n=e.usedby,r=e.type,o=e.letter,c=e.ri,u=e.ci,i=e.rcd,s=e.onClick,d=n!==a.i4?"pbSquareInner PlayerTile":i[0]===c&&i[1]===u&&i[2]===a.oW?"pbSquareInner RightArrow":i[0]===c&&i[1]===u&&i[2]===a.ik?"pbSquareInner DownArrow":"pbSquareInner "+r,l=n!==a.i4?o:d.indexOf("RightArrow")>-1?"\u27a1":d.indexOf("DownArrow")>-1?"\u2b07":d.indexOf("CenterSquare")>-1?(0,t.jsx)("i",{className:"material-icons",children:"stars"}):d.indexOf("EscapeHatch")>-1?(0,t.jsx)("i",{className:"material-icons",children:a._k}):".";return n===a.i4?(0,t.jsx)("button",{className:d,onClick:s,children:l}):(0,t.jsx)("button",{className:d,onClick:s,children:(0,t.jsx)("div",{className:"pbSquareTileText ".concat(n+("Q"===o?" u":"")),children:l})})}},891:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pb/board",function(){return r(3625)}])}},function(e){e.O(0,[774,888,179],(function(){return n=891,e(e.s=n);var n}));var n=e.O();_N_E=n}]);