(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[965],{2808:function(t,r,e){"use strict";e.r(r);var n=e(5893),o=e(809),a=e.n(o),c=e(1385),l=e(2447),i=e(7294);r.default=function(t){var r=t.setWhereto,e="https://tilerunner.herokuapp.com",o="morphoCellStatic",s="morphoCellNoLetter",u=(0,i.useState)(!0),f=u[0],p=u[1],h=(0,i.useState)(!1),d=h[0],m=h[1],v=(0,i.useState)(!1),w=v[0],y=v[1],x=(0,i.useState)(!1),A=x[0],N=x[1],j=(0,i.useState)(!1),b=j[0],S=j[1],C=(0,i.useState)(""),g=C[0],k=C[1],E=(0,i.useState)(""),O=E[0],B=E[1],_=(0,i.useState)([]),L=_[0],T=_[1],U=(0,i.useState)({row:1,col:0}),Z=U[0],I=U[1];(0,i.useEffect)((function(){D()}),[]);var D=function(){var t=(0,l.Z)(a().mark((function t(){var r,n,l,i,u,f,h,d,v,w,x;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),m(!1),N(!1),y(!1),S(!1),r=[],n="".concat(e,"/ENABLE2K?morpho=true&len=").concat(5),t.next=9,fetch(n);case 9:return l=t.sent,t.next=12,l.json();case 12:if(!(i=t.sent).notes||0===i.notes.length)for(u=0;u<6;u++){for(f=i.puzzle[u].toUpperCase(),0===u?k(f):5===u&&B(f),h=(0,c.Z)(Array.from(f)),d=0===u||5===u,v=[],w=0;w<5;w++)x={letter:"?",solution:h[w],className:"?"},0===u||5===u?(x.letter=h[w],x.className=o):(x.letter="?",x.className=s),v.push(x);r.push({filledin:d,colArray:v})}T(r),I({row:1,col:0}),p(!1);case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),P=function(t){var r=Z.row,e=Z.col;if(!(r<1||r>=5)&&!(e<0||r>=5)){var n="r";if("Backspace"===t&&(t="?",n="l"),"Delete"===t&&(t="?",n=""),"ArrowUp"===t&&(t=L[r].colArray[e].letter,n="u"),"ArrowDown"===t&&(t=L[r].colArray[e].letter,n="d"),"ArrowLeft"===t&&(t=L[r].colArray[e].letter,n="l"),"ArrowRight"===t&&(t=L[r].colArray[e].letter,n="r"),t.match(/^[A-Za-z\?]$/)&&""!==(t=t.toUpperCase())){var o=JSON.parse(JSON.stringify(L));o[r].colArray[e].letter=t,o[r].filledin=0===o[r].colArray.filter((function(t){return"?"===t.letter})).length;for(var a=0;a<5;a++)"?"===o[r].colArray[a].letter?o[r].colArray[a].className=s:o[r].colArray[a].className=o[r].filledin?"morphoCellCocoon":"morphoCellLarva";"u"===n&&z(),"d"===n&&R(),"r"===n&&H(),"l"===n&&K(),0===o.filter((function(t){return!t.filledin})).length&&y(!0),T(o)}}},z=function(){var t=Z.row,r=Z.col,e={row:t,col:r};t-1>0?(e.row=t-1,e.col=r):(e.row=4,e.col=r-1>-1?r-1:4),I(e)},R=function(){var t=Z.row,r=Z.col,e={row:t,col:r};t+1<5?(e.row=t+1,e.col=r):(e.row=1,e.col=r+1<5?r+1:0),I(e)},H=function(){var t=Z.row,r=Z.col,e={row:1,col:0};r+1<5?(e.row=t,e.col=r+1):t+1<5&&(e.row=t+1,e.col=0),I(e)},K=function(){var t=Z.row,r=Z.col,e={row:4,col:4};r-1>-1?(e.row=t,e.col=r-1):t-1>0&&(e.row=t-1,e.col=4),I(e)},M=function(){var t=(0,l.Z)(a().mark((function t(){var r,e,n,o,c,l,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(m(!0),r=!0,e="",n=0;n<5;n++)e+=L[0].colArray[n].letter;o=1;case 5:if(!(r&&o<6)){t.next=21;break}for(c="",l="",i=0;i<5;i++)c+=L[o-1].colArray[i].letter,l+=L[o].colArray[i].letter;if(J(e,o,c,l)||(alert("".concat(c," to ").concat(l," is not a valid move")),r=!1),t.t0=r&&5!==o,!t.t0){t.next=15;break}return t.next=14,W(l);case 14:t.t0=!t.sent;case 15:if(!t.t0){t.next=18;break}alert("".concat(l," is not valid")),r=!1;case 18:o++,t.next=5;break;case 21:m(!1),S(r),r&&alert("Success!");case 24:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),J=function(t,r,e,n){for(var o=Array.from(t),a=Array.from(e),c=Array.from(n),l=0,i=0,s=0;s<c.length;s++)c[s]!==o[s]&&l++,c[s]!==a[s]&&i++;return l===r&&1===i};function W(t){return X.apply(this,arguments)}function X(){return(X=(0,l.Z)(a().mark((function t(r){var n,o,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(e,"/ENABLE2K?exists=").concat(r.toLowerCase()),t.next=3,fetch(n);case 3:return o=t.sent,t.next=6,o.json();case 6:return c=t.sent,t.abrupt("return",c.exists);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,n.jsxs)("div",{className:"trBackground",onKeyDown:function(t){var r;"F12"!==(r=t).key&&(r.preventDefault(),d||b||P(r.key))},tabindex:-1,children:[(0,n.jsxs)("div",{className:"trTitle",children:["Morpho",(0,n.jsx)("button",{className:"trButton",onClick:function(){r("menu")},children:(0,n.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),f&&(0,n.jsx)("div",{className:"trEmphasis",children:"Creating puzzle, please be patient..."}),!f&&(0,n.jsxs)("div",{className:b?"morphoSolvedDiv":"morphoDiv",children:[(0,n.jsx)("table",{children:L.map((function(t,r){return(0,n.jsx)("tr",{children:t.colArray.map((function(t,e){return(0,n.jsx)("td",{onClick:function(){!function(t,r){t<1||t>=5||r<0||t>=5||I({row:t,col:r})}(r,e)},className:"col morphoCell ".concat(A?o:b?"morphoCellButterfly":t.className+(r===Z.row&&e===Z.col?" morphoCellSelected":"")),children:A?(0,n.jsx)("span",{children:t.solution}):(0,n.jsx)("span",{children:t.letter})},"BoardCell.".concat(r,".").concat(e))}))},"BoardRow.".concat(r))}))}),(0,n.jsxs)("div",{className:"trParagraph",children:[!f&&!d&&!b&&(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"Next Letter:"}),(0,n.jsx)("input",{type:"text",name:"getnextletter",value:"",onChange:function(t){P(t.target.value)}}),(0,n.jsxs)("p",{children:["Change one letter at a time to get from ",g," to ",O,"."]}),(0,n.jsx)("p",{children:"Each interim word must be a valid word."})]}),(0,n.jsx)("button",{className:"trButton",onClick:function(){N(!A)},children:"".concat(A?"HIDE SOLUTION":"SHOW A SOLUTION")}),!b&&w&&(0,n.jsx)("div",{children:(0,n.jsx)("button",{className:"trButton",onClick:function(){M()},children:"SUBMIT YOUR SOLUTION"})}),b&&(0,n.jsx)("div",{children:(0,n.jsx)("button",{className:"trButton",onClick:function(){D()},children:"GENERATE ANOTHER PUZZLE"})})]})]})]})}},5704:function(t,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/morpho/morpho",function(){return e(2808)}])},2447:function(t,r,e){"use strict";function n(t,r,e,n,o,a,c){try{var l=t[a](c),i=l.value}catch(s){return void e(s)}l.done?r(i):Promise.resolve(i).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,a){var c=t.apply(r,e);function l(t){n(c,o,a,l,i,"next",t)}function i(t){n(c,o,a,l,i,"throw",t)}l(void 0)}))}}e.d(r,{Z:function(){return o}})},1385:function(t,r,e){"use strict";function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function o(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(t){if("string"===typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(r,{Z:function(){return o}})}},function(t){t.O(0,[774,888,179],(function(){return r=5704,t(t.s=r);var r}));var r=t.O();_N_E=r}]);