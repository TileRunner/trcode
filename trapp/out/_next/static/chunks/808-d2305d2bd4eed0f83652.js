(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[808],{2808:function(e,r,t){"use strict";t.r(r);var o=t(5893),n=t(1385),l=t(809),c=t.n(l),a=t(2447),s=t(7294),i=t(9359),u=t(2792);r.default=function(e){var r=e.setWhereto,t=(0,s.useState)(!0),l=t[0],h=t[1],p=(0,s.useState)(6),d=p[0],f=p[1],m=(0,s.useState)(5),w=m[0],v=m[1],x=(0,s.useState)(5),y=x[0],N=x[1],C="morphoCellStatic",j="morphoCellNoLetter",b="morphoCellCocoon",k=(0,s.useState)(!0),S=k[0],A=k[1],z=(0,s.useState)(!1),g=z[0],O=z[1],P=(0,s.useState)(!1),B=P[0],E=P[1],U=(0,s.useState)(!1),L=U[0],K=U[1],D=(0,s.useState)(!1),T=D[0],Z=D[1],I=(0,s.useState)(""),M=I[0],R=I[1],Y=(0,s.useState)(""),_=Y[0],H=Y[1],J=(0,s.useState)([]),W=J[0],F=J[1],$=(0,s.useState)({row:1,col:0}),q=$[0],G=$[1],Q=function(){var e=(0,a.Z)(c().mark((function e(r){var t,o,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,o="".concat("https://tilerunner.herokuapp.com","/ENABLE2K?morpho=true&len=").concat(r),e.next=5,fetch(o);case 5:return n=e.sent,e.next=8,n.json();case 8:t=e.sent,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),t.notes="Problem with the server. Sorry about that.",console.log(e.t0);case 15:return e.abrupt("return",t);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(r){return e.apply(this,arguments)}}(),V=function(){var e=(0,a.Z)(c().mark((function e(r){var t,o,l,a,s,i,u,p,d,m,w;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!1),A(!0),O(!1),K(!1),E(!1),Z(!1),t=[],e.next=9,Q(r);case 9:if((o=e.sent).notes&&0!==o.notes.length)alert("Problem generating puzzle: ".concat(o.notes,"\nBest to click Home then rechoose Morpho."));else{for(l=o.numRows,a=o.numCols,s=0;s<l;s++){for(i=o.puzzle[s].toUpperCase(),0===s?R(i):s===l-1&&H(i),u=(0,n.Z)(Array.from(i)),p=0===s||s===l-1,d=[],m=0;m<a;m++)w={letter:"?",solution:u[m],className:"?"},0===s||s===l-1?(w.letter=u[m],w.className=C):(w.letter="?",w.className=j),d.push(w);t.push({filledin:p,colArray:d})}v(a),f(l),F(t),G({row:1,col:0}),A(!1)}case 11:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),X=function(e){var r=q.row,t=q.col;if(!(r<1||r>=d-1)&&!(t<0||r>=w))if(B&&"Enter"===e)ne();else{var o="r";if("Backspace"===e&&(e="?",o="l"),"Delete"===e&&(e="?",o=""),"ArrowUp"===e&&(e=W[r].colArray[t].letter,o="u"),"ArrowDown"===e&&(e=W[r].colArray[t].letter,o="d"),"ArrowLeft"===e&&(e=W[r].colArray[t].letter,o="l"),"ArrowRight"===e&&(e=W[r].colArray[t].letter,o="r"),e.match(/^[A-Za-z\?]$/)&&""!==(e=e.toUpperCase())){var n=JSON.parse(JSON.stringify(W));n[r].colArray[t].letter=e,n[r].filledin=0===n[r].colArray.filter((function(e){return"?"===e.letter})).length;for(var l=0;l<w;l++)"?"===n[r].colArray[l].letter?n[r].colArray[l].className=j:n[r].colArray[l].className=n[r].filledin?b:"morphoCellLarva";"u"===o&&ee(),"d"===o&&re(),"r"===o&&te(),"l"===o&&oe(),0===n.filter((function(e){return!e.filledin})).length&&E(!0),F(n)}}},ee=function(){var e=q.row,r=q.col,t={row:e,col:r};e-1>0?(t.row=e-1,t.col=r):(t.row=d-2,t.col=r-1>-1?r-1:w-1),G(t)},re=function(){var e=q.row,r=q.col,t={row:e,col:r};e+1<d-1?(t.row=e+1,t.col=r):(t.row=1,t.col=r+1<w?r+1:0),G(t)},te=function(){var e=q.row,r=q.col,t={row:1,col:0};r+1<w?(t.row=e,t.col=r+1):e+1<d-1&&(t.row=e+1,t.col=0),G(t)},oe=function(){var e=q.row,r=q.col,t={row:d-2,col:w-1};r-1>-1?(t.row=e,t.col=r-1):e-1>0&&(t.row=e-1,t.col=w-1),G(t)},ne=function(){var e=(0,a.Z)(c().mark((function e(){var r,t,o,n,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(!0),r=!0,t=1;case 3:if(!(r&&t<d)){e.next=19;break}for(o="",n="",l=0;l<w;l++)o+=W[t-1].colArray[l].letter,n+=W[t].colArray[l].letter;if(1!==(0,u.CU)(o,n)&&(alert("".concat(o," to ").concat(n," is not a valid move")),r=!1),e.t0=r&&t!==d-1,!e.t0){e.next=13;break}return e.next=12,(0,u.cO)(n);case 12:e.t0=!e.sent;case 13:if(!e.t0){e.next=16;break}alert("".concat(n," is not valid")),r=!1;case 16:t++,e.next=3;break;case 19:O(!1),Z(r);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=(0,o.jsxs)("div",{children:[(0,o.jsxs)(i.A_,{children:[(0,o.jsxs)("button",{className:"trButton",onClick:function(){V(y)},children:[y," LETTER PUZZLE"]},"genMobile"),y<5&&(0,o.jsx)("button",{className:"morphoPuzzleSizeKey",onClick:function(){N(y+1)},children:"+"},"longerPuzzleMobile"),y>3&&(0,o.jsx)("button",{className:"morphoPuzzleSizeKey",onClick:function(){N(y-1)},children:"-"},"shorterPuzzleMobile")]}),(0,o.jsxs)(i.I3,{children:[(0,o.jsxs)("button",{className:"trButton",onClick:function(){V(y)},children:[y," LETTER PUZZLE"]},"genBrowser"),y<8&&(0,o.jsx)("button",{className:"morphoPuzzleSizeKey",onClick:function(){N(y+1)},children:"+"},"longerPuzzle"),y>3&&(0,o.jsx)("button",{className:"morphoPuzzleSizeKey",onClick:function(){N(y-1)},children:"-"},"shorterPuzzle")]})]}),ce=(0,o.jsxs)("div",{className:T?"morphoSolvedDiv l".concat(w):"morphoDiv",children:[(0,o.jsx)("table",{onKeyDown:function(e){var r;"F12"!==(r=e).key&&(r.preventDefault(),g||T||X(r.key))},tabIndex:-1,children:(0,o.jsx)("tbody",{children:W.map((function(e,r){return(0,o.jsx)("tr",{children:e.colArray.map((function(e,t){return(0,o.jsx)("td",{onClick:function(){!function(e,r){if(!g&&!T&&!(r<0||r>=w)){if(e===d-1&&q.row>0&&q.row<d-1){for(var t=JSON.parse(JSON.stringify(W)),o=0;o<w;o++)t[q.row].colArray[o].letter=o===r?t[d-1].colArray[o].letter:t[q.row-1].colArray[o].letter,t[q.row].colArray[o].className=b;t[q.row].filledin=!0;var n={row:q.row+1,col:0};return n.row>=d-1&&(n.row=1),G(n),F(t),void(0===t.filter((function(e){return!e.filledin})).length&&E(!0))}e<1||e>=d-1||G({row:e,col:r})}}(r,t)},className:"col morphoCell ".concat(L?C:T?"morphoCellButterfly":e.className+(r===q.row&&t===q.col?" morphoCellSelected":"")),children:L?(0,o.jsx)("span",{children:e.solution},"BoardCellS.".concat(r,".").concat(t)):(0,o.jsx)("span",{children:e.letter},"BoardCellL.".concat(r,".").concat(t))},"BoardCell.".concat(r,".").concat(t))}))},"BoardRow.".concat(r))}))})}),(0,o.jsxs)("div",{className:"trParagraph",children:[!S&&!g&&!T&&(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"morphoKeyboard",children:[(0,o.jsxs)("div",{className:"morphoKeyrow4",children:[(0,o.jsx)("button",{onClick:function(){!function(){if(!g&&!T){var e=q.row,r=q.col;e<1||e>=d-1||r<0||e>=w||X(W[e-1].colArray[r].letter)}}()},className:"morphoCopydownKey",children:"COPY DOWN"},"keyCopydown"),(0,o.jsx)("button",{onClick:function(){!function(){if(!g&&!T){var e=q.row,r=q.col;e<1||e>=d-1||r<0||e>=w||X(W[d-1].colArray[r].letter)}}()},className:"morphoCopyupKey",children:"COPY UP"},"keyCopyup")]}),!T&&B&&(0,o.jsx)("div",{className:"morphoKeyrow4",children:(0,o.jsx)("button",{className:"trButton",onClick:function(){ne()},children:"SUBMIT YOUR SOLUTION"})})]}),(0,o.jsxs)("p",{children:["Change one letter at a time to get from ",M," to ",_,". Each interim word must be a valid word."]}),(0,o.jsx)("p",{children:"COPY DOWN copies a letter down from the row above. COPY UP copies a letter up from the bottom row."}),(0,o.jsx)("p",{children:"Click a letter on the bottom row to use it as the swap on the selected row."})]}),T?(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"trEmphasis",children:"Success!"}),le]}):(0,o.jsx)("button",{className:"trButton",onClick:function(){K(!L)},children:"".concat(L?"HIDE SOLUTION":"SHOW A SOLUTION")})]})]},"showboard");return(0,o.jsxs)("div",{className:"trBackground",children:[(0,o.jsxs)("div",{className:"trTitle",children:["Morpho",(0,o.jsx)("button",{className:"trButton",onClick:function(){r("menu")},children:(0,o.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),l?le:S?(0,o.jsx)("div",{className:"trEmphasis",children:"Creating puzzle, please be patient..."},"pleasewait"):ce]})}}}]);