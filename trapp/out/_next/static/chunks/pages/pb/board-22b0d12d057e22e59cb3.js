_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{A1c0:function(e,r,a){"use strict";a.r(r);var c=a("nKUr");r.default=function(e){var r=e.c,a=e.ci,n=e.ri,t=e.squareusedby,s=e.rcd,d=e.onClick,o=e.racksize,i=2*o,l=o,u="."!==r?"pbSquareInner PlayerTile":s[0]===n&&s[1]===a&&"r"===s[2]?"pbSquareInner RightArrow":s[0]===n&&s[1]===a&&"d"===s[2]?"pbSquareInner DownArrow":n===l&&a===l?"pbSquareInner CenterSquare":0!==n&&n!==l&&n!==i||0!==a&&a!==l&&a!==i?n%2===a%2?"pbSquareInner style1":"pbSquareInner style2":"pbSquareInner EscapeHatch",b="."!==r?r:u.indexOf("RightArrow")>-1?"\u27a1":u.indexOf("DownArrow")>-1?"\u2b07":u.indexOf("CenterSquare")>-1?Object(c.jsx)("i",{className:"material-icons",children:"stars"}):".";return u.indexOf("EscapeHatch")>-1?Object(c.jsx)("button",{className:u,onClick:d,children:Object(c.jsx)("span",{className:"material-icons",children:"run_circle"})}):"."===r?Object(c.jsx)("button",{className:u,onClick:d,children:b}):Object(c.jsx)("button",{className:u,onClick:d,children:Object(c.jsx)("div",{className:"pbSquareTileText ".concat(t+("Q"===r?" u":"")),children:b})})}},Qetd:function(e,r,a){"use strict";var c=Object.assign.bind(Object);e.exports=c,e.exports.default=e.exports},bmL4:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pb/board",function(){return a("rZeA")}])},rZeA:function(e,r,a){"use strict";a.r(r);var c=a("nKUr"),n=a("A1c0"),t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],s=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"];r.default=function(e){var r=e.onClick,a=e.squares,d=void 0===a?[]:a,o=e.usedby,i=e.rcd,l=e.racksize,u=function(e){return Object(c.jsxs)("tr",{className:"pbRow",children:[Object(c.jsx)("td",{className:"pbBoardRowHeader",id:"BoardHeaderLeft",children:s[e]}),d[e].map((function(a,t){return function(e,a,t,s){return Object(c.jsx)("td",{className:"pbSquareOuter",children:Object(c.jsx)(n.default,{c:t,ci:a,ri:e,squareusedby:s,rcd:i,onClick:function(){return r(e,a)},racksize:l})},"Square".concat(e,"-").concat(a))}(e,t,a,o[e][t])})),Object(c.jsx)("td",{className:"pbBoardRowHeader",id:"BoardHeaderRight",children:s[e]})]},"BoardRow".concat(e))};return Object(c.jsx)("table",{className:"pbBoard",children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{className:"pbBoardColumnHeaderRow",children:[Object(c.jsx)("td",{className:"pbBoardHeaderTopLeft",children:"\xa0"}),d&&d.map((function(e,r){return Object(c.jsx)("td",{className:"pbBoardColumnHeader",children:t[r]},"TopColumnHeader".concat(r))})),Object(c.jsx)("td",{className:"pbBoardHeaderTopRight",children:"\xa0"})]}),d.map((function(e,r){return u(r)})),Object(c.jsxs)("tr",{className:"pbBoardColumnHeaderRow",id:"BoardHeaderBottom",children:[Object(c.jsx)("td",{className:"pbBoardHeaderBottomLeft",children:"\xa0"}),d.map((function(e,r){return Object(c.jsx)("td",{className:"pbBoardColumnHeader",children:t[r]},"BottomColumnHeader".concat(r))})),Object(c.jsx)("td",{className:"pbBoardHeaderBottomRight",children:"\xa0"})]})]})})}}},[["bmL4",0,1]]]);