_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{EzCb:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"s",(function(){return c})),t.d(n,"r",(function(){return o})),t.d(n,"q",(function(){return s})),t.d(n,"B",(function(){return i})),t.d(n,"A",(function(){return a})),t.d(n,"z",(function(){return d})),t.d(n,"n",(function(){return f})),t.d(n,"m",(function(){return l})),t.d(n,"p",(function(){return E})),t.d(n,"o",(function(){return b})),t.d(n,"k",(function(){return p})),t.d(n,"l",(function(){return O})),t.d(n,"j",(function(){return A})),t.d(n,"f",(function(){return I})),t.d(n,"d",(function(){return N})),t.d(n,"e",(function(){return v})),t.d(n,"y",(function(){return y})),t.d(n,"h",(function(){return w})),t.d(n,"t",(function(){return h})),t.d(n,"u",(function(){return m})),t.d(n,"v",(function(){return T})),t.d(n,"w",(function(){return j})),t.d(n,"x",(function(){return S})),t.d(n,"i",(function(){return R})),t.d(n,"g",(function(){return P})),t.d(n,"a",(function(){return x}));var r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],u=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],c="U",o="P",s="G",i=o,a=s,d="X",f="run_circle",l="security",E="PRISONERS",b="GUARDS",p="PLAY",O="SWAP",A="PASS",I="r",N="d",v="",y="",w=["Escapee: \"I'm free! I'm free!\". Little kid: \"I'm four! I'm four!\"","Two peanuts were walking down a back alley. One was a salted.","The psychic dwarf escaped! There's a small medium at large!","What do you call a vegetable who has escaped prison? An escapea!","The prisoners fave punctuation is a period. It marks the end of a sentence!","Prison is only one word, but to robbers it's a whole sentence."],h=2e4,m=["A","A","A","B","C","D","E","E","E","E","F","G","H","I","I","I","J","K","L","M","N","N","O","O","O","P","Q","R","R","S","T","T","U","V","W","X","Y","Z","?","?"],T=["A","A","A","A","A","B","C","D","D","E","E","E","E","E","E","F","G","H","I","I","I","I","I","J","K","L","L","M","N","N","N","O","O","O","O","P","Q","R","R","R","S","S","T","T","T","U","V","W","X","Y","Z","?","?"],j=["A","A","A","A","A","A","A","B","B","C","C","D","D","D","E","E","E","E","E","E","E","E","E","F","G","G","H","H","I","I","I","I","I","I","I","J","K","L","L","L","M","M","N","N","N","N","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","S","S","S","T","T","T","T","U","U","U","V","W","X","Y","Z","?","?"],S=["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z","?","?"],R="";function P(e){for(var n=2*e+1,t=Array(n),r=0;r<n;++r){for(var u=Array(n),c=0;c<n;++c){var o={row:r,col:c,type:"style2",usedby:y,letter:R};r===e&&c===e?o.type="CenterSquare":r%e===0&&c%e===0?o.type="EscapeHatch":r%2===c%2&&(o.type="style1"),u[c]=o}t[r]=[].concat(u)}return t}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=e.length,t=2*n,r=n,u=!0;return e[0][0].usedby!==y&&e[0][r].usedby!==y&&e[0][t].usedby!==y&&e[r][0].usedby!==y&&e[r][t].usedby!==y&&e[t][0].usedby!==y&&e[t][r].usedby!==y&&e[t][t].usedby!==y&&(u=!1),u}},KiN8:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),u=t("EzCb");n.default=function(e){var n=e.moves;return Object(r.jsxs)("div",{className:"pbMoves",children:[Object(r.jsx)("div",{className:"pbMovesTitle",children:"MOVES"}),Object(r.jsx)("div",{className:"pbMovesScrollable",id:"ScrollableMoves",children:n&&n.map((function(e,n){var t;return Object(r.jsxs)("div",{className:"pbMove",children:[Object(r.jsx)("span",{className:"pbMove by",children:e.by}),":",Object(r.jsx)("span",{className:"pbMove ".concat(e.type),children:e.type===u.k?Object(r.jsxs)(r.Fragment,{children:[e.pos," ",e.mainword.replace("Q","Qu"),null===(t=e.extrawords)||void 0===t?void 0:t.map((function(e,n){return Object(r.jsxs)("span",{children:[",\xa0",e.replace("Q","Qu")]},"extraword".concat(n))}))]}):Object(r.jsx)(r.Fragment,{})})]},"move".concat(n))}))})]})}},Qetd:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},wiPD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pb/movesSection",function(){return t("KiN8")}])}},[["wiPD",0,1]]]);