(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[802],{891:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pb/board",function(){return n(6300)}])},7554:function(r,e,n){"use strict";n.d(e,{v8:function(){return t},RH:function(){return a},dK:function(){return i},ap:function(){return u},b6:function(){return o},qg:function(){return c},Vj:function(){return s},kX:function(){return d},Ov:function(){return l},Bd:function(){return f},_k:function(){return p},g9:function(){return m},Ji:function(){return E},jN:function(){return N},bS:function(){return R},Ix:function(){return b},Am:function(){return h},oW:function(){return A},ik:function(){return I},QY:function(){return O},i4:function(){return w},_W:function(){return T},$B:function(){return B},fl:function(){return x},Cr:function(){return H},L8:function(){return S},Qt:function(){return y},fi:function(){return C},ix:function(){return j},me:function(){return k},WS:function(){return q},GP:function(){return L}});var t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],a=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],i="U",u="P",o="G",c="O",s="E",d=u,l=o,f="X",p="run_circle",m="security",E="PRISONERS",N="GUARDS",R="PLAY",b="SWAP",h="PASS",A="r",I="d",O="",w="",T=["Escapee: \"I'm free! I'm free!\". Little kid: \"I'm four! I'm four!\"","Two peanuts were walking down a back alley. One was a salted.","The psychic dwarf escaped! There's a small medium at large!","What do you call a vegetable who has escaped prison? An escapea!","The prisoners fave punctuation is a period. It marks the end of a sentence!","Prison is only one word, but to robbers it's a whole sentence."],B=6e4,x=["A","A","A","B","C","D","E","E","E","E","F","G","H","I","I","I","J","K","L","M","N","N","O","O","O","P","Q","R","R","S","T","T","U","V","W","X","Y","Z","?","?"],H=["A","A","A","A","A","B","C","D","D","E","E","E","E","E","E","F","G","H","I","I","I","I","I","J","K","L","L","M","N","N","N","O","O","O","O","P","Q","R","R","R","S","S","T","T","T","U","V","W","X","Y","Z","?","?"],S=["A","A","A","A","A","A","A","B","B","C","C","D","D","D","E","E","E","E","E","E","E","E","E","F","G","G","H","H","I","I","I","I","I","I","I","J","K","L","L","L","M","M","N","N","N","N","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","S","S","S","T","T","T","T","U","U","U","V","W","X","Y","Z","?","?"],y=["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z","?","?"],C="EscapeHatch",j="CenterSquare",k="style1",q="style2",L=""},6300:function(r,e,n){"use strict";n.r(e);var t=n(5893),a=(n(7294),n(5697)),i=n.n(a),u=n(5527),o=n(7554),c=function(r){var e=r.onClick,n=r.squareArray,a=void 0===n?[]:n,i=r.rcd,c=function(r){return(0,t.jsxs)("tr",{className:"pbRow",children:[(0,t.jsx)("td",{className:"pbBoardRowHeader",id:"BoardHeaderLeft",children:o.RH[r]}),a[r].map((function(r){return function(r){return(0,t.jsx)("td",{className:"pbSquareOuter",children:(0,t.jsx)(u.default,{usedby:r.usedby,type:r.type,letter:r.letter,ri:r.row,ci:r.col,rcd:i,onClick:function(){return e(r.row,r.col)}})},"Square".concat(r.row,"-").concat(r.col))}(r)})),(0,t.jsx)("td",{className:"pbBoardRowHeader",id:"BoardHeaderRight",children:o.RH[r]})]},"BoardRow".concat(r))};return(0,t.jsx)("table",{className:"pbBoard",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{className:"pbBoardColumnHeaderRow",children:[(0,t.jsx)("td",{className:"pbBoardHeaderTopLeft",children:"\xa0"}),a.map((function(r,e){return(0,t.jsx)("td",{className:"pbBoardColumnHeader",children:o.v8[e]},"TopColumnHeader".concat(e))})),(0,t.jsx)("td",{className:"pbBoardHeaderTopRight",children:"\xa0"})]}),a.map((function(r,e){return c(e)})),(0,t.jsxs)("tr",{className:"pbBoardColumnHeaderRow",id:"BoardHeaderBottom",children:[(0,t.jsx)("td",{className:"pbBoardHeaderBottomLeft",children:"\xa0"}),a.map((function(r,e){return(0,t.jsx)("td",{className:"pbBoardColumnHeader",children:o.v8[e]},"BottomColumnHeader".concat(e))})),(0,t.jsx)("td",{className:"pbBoardHeaderBottomRight",children:"\xa0"})]})]})})};c.propTypes={onClick:i().func.isRequired,squareArray:i().arrayOf(i().any),rcd:i().any},e.default=c},5527:function(r,e,n){"use strict";n.r(e);var t=n(5893),a=(n(7294),n(5697)),i=n.n(a),u=n(7554),o=function(r){var e=r.usedby,n=r.type,a=r.letter,i=r.ri,o=r.ci,c=r.rcd,s=r.onClick,d=e!==u.i4?"pbSquareInner PlayerTile":c[0]===i&&c[1]===o&&c[2]===u.oW?"pbSquareInner RightArrow":c[0]===i&&c[1]===o&&c[2]===u.ik?"pbSquareInner DownArrow":"pbSquareInner "+n,l=e!==u.i4?a:d.indexOf("RightArrow")>-1?"\u27a1":d.indexOf("DownArrow")>-1?"\u2b07":d.indexOf("CenterSquare")>-1?(0,t.jsx)("i",{className:"material-icons",children:"stars"}):d.indexOf("EscapeHatch")>-1?(0,t.jsx)("i",{className:"material-icons",children:u._k}):".";return e===u.i4?(0,t.jsx)("button",{className:d,onClick:s,children:l}):(0,t.jsx)("button",{className:d,onClick:s,children:(0,t.jsx)("div",{className:"pbSquareTileText ".concat(e+("Q"===a?" u":"")),children:l})})};o.propTypes={usedby:i().string.isRequired,type:i().string.isRequired,letter:i().string.isRequired,ri:i().number.isRequired,ci:i().number.isRequired,rcd:i().arrayOf(i().any),onClick:i().func.isRequired},e.default=o}},function(r){r.O(0,[774,888,179],(function(){return e=891,r(r.s=e);var e}));var e=r.O();_N_E=e}]);