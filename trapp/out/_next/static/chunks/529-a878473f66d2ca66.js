"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[529],{7529:function(e,r,t){t.r(r);var o=t(4051),n=t.n(o),c=t(5893),l=t(7294),a=t(9359),s=t(3524);function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}function u(e,r,t,o,n,c,l){try{var a=e[c](l),s=a.value}catch(i){return void t(i)}a.done?r(s):Promise.resolve(s).then(o,n)}function h(e){return function(){var r=this,t=arguments;return new Promise((function(o,n){var c=e.apply(r,t);function l(e){u(c,o,n,l,a,"next",e)}function a(e){u(c,o,n,l,a,"throw",e)}l(void 0)}))}}function f(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=function(e){var r=e.setWhereto,t=(0,l.useState)(!0),o=t[0],i=t[1],u=(0,l.useState)(6),p=u[0],d=u[1],m=(0,l.useState)(5),w=m[0],y=m[1],v=(0,l.useState)(5),x=v[0],b=v[1],N="morphoCellStatic",C="morphoCellNoLetter",j="morphoCellCocoon",S=(0,l.useState)(!0),A=S[0],k=S[1],z=(0,l.useState)(!1),g=z[0],O=z[1],P=(0,l.useState)(!1),B=P[0],E=P[1],U=(0,l.useState)(!1),L=U[0],K=U[1],I=(0,l.useState)(!1),T=I[0],D=I[1],M=(0,l.useState)(""),R=M[0],Y=M[1],Z=(0,l.useState)(""),_=Z[0],H=Z[1],J=(0,l.useState)([]),W=J[0],$=J[1],F=(0,l.useState)({row:1,col:0}),q=F[0],G=F[1],Q=function(){var e=h(n().mark((function e(r){var t,o,c;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,o="".concat("https://tilerunner.herokuapp.com","/ENABLE2K?morpho=true&len=").concat(r),e.next=5,fetch(o);case 5:return c=e.sent,e.next=8,c.json();case 8:t=e.sent,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),t.notes="Problem with the server. Sorry about that.",console.log(e.t0);case 15:return e.abrupt("return",t);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(r){return e.apply(this,arguments)}}(),V=function(){var e=h(n().mark((function e(r){var t,o,c,l,a,s,u,h,p,m,w;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!1),k(!0),O(!1),K(!1),E(!1),D(!1),t=[],e.next=9,Q(r);case 9:if((o=e.sent).notes&&0!==o.notes.length)alert("Problem generating puzzle: ".concat(o.notes,"\nBest to click Home then rechoose Morpho."));else{for(c=o.numRows,l=o.numCols,a=0;a<c;a++){for(s=o.puzzle[a].toUpperCase(),0===a?Y(s):a===c-1&&H(s),u=f(Array.from(s)),h=0===a||a===c-1,p=[],m=0;m<l;m++)w={letter:"?",solution:u[m],className:"?"},0===a||a===c-1?(w.letter=u[m],w.className=N):(w.letter="?",w.className=C),p.push(w);t.push({filledin:h,colArray:p})}y(l),d(c),$(t),G({row:1,col:0}),k(!1)}case 11:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),X=function(e){var r=q.row,t=q.col;if(!(r<1||r>=p-1)&&!(t<0||r>=w))if(B&&"Enter"===e)ne();else{var o="r";if("Backspace"===e&&(e="?",o="l"),"Delete"===e&&(e="?",o=""),"ArrowUp"===e&&(e=W[r].colArray[t].letter,o="u"),"ArrowDown"===e&&(e=W[r].colArray[t].letter,o="d"),"ArrowLeft"===e&&(e=W[r].colArray[t].letter,o="l"),"ArrowRight"===e&&(e=W[r].colArray[t].letter,o="r"),e.match(/^[A-Za-z\?]$/)&&""!==(e=e.toUpperCase())){var n=JSON.parse(JSON.stringify(W));n[r].colArray[t].letter=e,n[r].filledin=0===n[r].colArray.filter((function(e){return"?"===e.letter})).length;for(var c=0;c<w;c++)"?"===n[r].colArray[c].letter?n[r].colArray[c].className=C:n[r].colArray[c].className=n[r].filledin?j:"morphoCellLarva";"u"===o&&ee(),"d"===o&&re(),"r"===o&&te(),"l"===o&&oe(),0===n.filter((function(e){return!e.filledin})).length&&E(!0),$(n)}}},ee=function(){var e=q.row,r=q.col,t={row:e,col:r};e-1>0?(t.row=e-1,t.col=r):(t.row=p-2,t.col=r-1>-1?r-1:w-1),G(t)},re=function(){var e=q.row,r=q.col,t={row:e,col:r};e+1<p-1?(t.row=e+1,t.col=r):(t.row=1,t.col=r+1<w?r+1:0),G(t)},te=function(){var e=q.row,r=q.col,t={row:1,col:0};r+1<w?(t.row=e,t.col=r+1):e+1<p-1&&(t.row=e+1,t.col=0),G(t)},oe=function(){var e=q.row,r=q.col,t={row:p-2,col:w-1};r-1>-1?(t.row=e,t.col=r-1):e-1>0&&(t.row=e-1,t.col=w-1),G(t)},ne=function(){var e=h(n().mark((function e(){var r,t,o,c,l;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(!0),r=!0,t=1;case 3:if(!(r&&t<p)){e.next=18;break}for(o="",c="",l=0;l<w;l++)o+=W[t-1].colArray[l].letter,c+=W[t].colArray[l].letter;if(1!==(0,s.CU)(o,c)&&(alert("".concat(o," to ").concat(c," is not a valid move")),r=!1),e.t0=r&&t!==p-1,!e.t0){e.next=13;break}return e.next=12,(0,s.cO)(c);case 12:e.t0=!e.sent;case 13:if(!e.t0){e.next=15;break}alert("".concat(c," is not valid")),r=!1;case 15:t++,e.next=3;break;case 18:O(!1),D(r);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=(0,c.jsxs)("div",{children:[(0,c.jsxs)(a.A_,{children:[(0,c.jsxs)("button",{className:"trButton",onClick:function(){V(x)},children:[x," LETTER PUZZLE"]},"genMobile"),x<5&&(0,c.jsx)("button",{className:"morphoPuzzleSizeKey",onClick:function(){b(x+1)},children:"+"},"longerPuzzleMobile"),x>3&&(0,c.jsx)("button",{className:"morphoPuzzleSizeKey",onClick:function(){b(x-1)},children:"-"},"shorterPuzzleMobile")]}),(0,c.jsxs)(a.I3,{children:[(0,c.jsxs)("button",{className:"trButton",onClick:function(){V(x)},children:[x," LETTER PUZZLE"]},"genBrowser"),x<8&&(0,c.jsx)("button",{className:"morphoPuzzleSizeKey",onClick:function(){b(x+1)},children:"+"},"longerPuzzle"),x>3&&(0,c.jsx)("button",{className:"morphoPuzzleSizeKey",onClick:function(){b(x-1)},children:"-"},"shorterPuzzle")]})]}),le=(0,c.jsxs)("div",{className:T?"morphoSolvedDiv l".concat(w):"morphoDiv",children:[(0,c.jsx)("table",{onKeyDown:function(e){var r;"F12"!==(r=e).key&&(r.preventDefault(),g||T||X(r.key))},tabIndex:-1,children:(0,c.jsx)("tbody",{children:W.map((function(e,r){return(0,c.jsx)("tr",{children:e.colArray.map((function(e,t){return(0,c.jsx)("td",{onClick:function(){!function(e,r){if(!g&&!T&&!(r<0||r>=w)){if(e===p-1&&q.row>0&&q.row<p-1){for(var t=JSON.parse(JSON.stringify(W)),o=0;o<w;o++)t[q.row].colArray[o].letter=o===r?t[p-1].colArray[o].letter:t[q.row-1].colArray[o].letter,t[q.row].colArray[o].className=j;t[q.row].filledin=!0;var n={row:q.row+1,col:0};return n.row>=p-1&&(n.row=1),G(n),$(t),void(0===t.filter((function(e){return!e.filledin})).length&&E(!0))}e<1||e>=p-1||G({row:e,col:r})}}(r,t)},className:"col morphoCell ".concat(L?N:T?"morphoCellButterfly":e.className+(r===q.row&&t===q.col?" morphoCellSelected":"")),children:L?(0,c.jsx)("span",{children:e.solution},"BoardCellS.".concat(r,".").concat(t)):(0,c.jsx)("span",{children:e.letter},"BoardCellL.".concat(r,".").concat(t))},"BoardCell.".concat(r,".").concat(t))}))},"BoardRow.".concat(r))}))})}),(0,c.jsxs)("div",{className:"trParagraph",children:[!A&&!g&&!T&&(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"morphoKeyboard",children:[(0,c.jsxs)("div",{className:"morphoKeyrow4",children:[(0,c.jsx)("button",{onClick:function(){!function(){if(!g&&!T){var e=q.row,r=q.col;e<1||e>=p-1||r<0||e>=w||X(W[e-1].colArray[r].letter)}}()},className:"morphoCopydownKey",children:"COPY DOWN"},"keyCopydown"),(0,c.jsx)("button",{onClick:function(){!function(){if(!g&&!T){var e=q.row,r=q.col;e<1||e>=p-1||r<0||e>=w||X(W[p-1].colArray[r].letter)}}()},className:"morphoCopyupKey",children:"COPY UP"},"keyCopyup")]}),!T&&B&&(0,c.jsx)("div",{className:"morphoKeyrow4",children:(0,c.jsx)("button",{className:"trButton",onClick:function(){ne()},children:"SUBMIT YOUR SOLUTION"})})]}),(0,c.jsxs)("p",{children:["Change one letter at a time to get from ",R," to ",_,". Each interim word must be a valid word."]}),(0,c.jsx)("p",{children:"COPY DOWN copies a letter down from the row above. COPY UP copies a letter up from the bottom row."}),(0,c.jsx)("p",{children:"Click a letter on the bottom row to use it as the swap on the selected row."})]}),T?(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{className:"trEmphasis",children:"Success!"}),ce]}):(0,c.jsx)("button",{className:"trButton",onClick:function(){K(!L)},children:"".concat(L?"HIDE SOLUTION":"SHOW A SOLUTION")})]})]},"showboard");return(0,c.jsxs)("div",{className:"trBackground",children:[(0,c.jsxs)("div",{className:"trTitle",children:["Morpho",(0,c.jsx)("button",{className:"trButton",onClick:function(){r("menu")},children:(0,c.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),o?ce:A?(0,c.jsx)("div",{className:"trEmphasis",children:"Creating puzzle, please be patient..."},"pleasewait"):le]})}}}]);