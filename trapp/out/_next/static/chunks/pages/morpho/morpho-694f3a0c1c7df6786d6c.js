(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[965],{2808:function(t,e,r){"use strict";r.r(e);var n=r(5893),o=r(809),a=r.n(o),c=r(1385),i=r(2447),s=r(7294);e.default=function(t){var e=t.setWhereto,r="https://tilerunner.herokuapp.com",o="morphoCellNoLetter",l=(0,s.useState)(!0),u=l[0],f=l[1],p=(0,s.useState)(!1),h=p[0],d=p[1],m=(0,s.useState)(!1),y=m[0],v=m[1],x=(0,s.useState)(!1),w=x[0],N=x[1],b=(0,s.useState)(""),j=b[0],A=b[1],S=(0,s.useState)(""),k=S[0],C=S[1],g=(0,s.useState)([]),O=g[0],E=g[1],_=(0,s.useState)({row:1,col:0}),B=_[0],I=_[1];(0,s.useEffect)((function(){L()}),[]);var L=function(){var t=(0,i.Z)(a().mark((function t(){var e,n,i,s,l,u,p,h,m,y,x;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),d(!1),N(!1),v(!1),e=[],n="".concat(r,"/ENABLE2K?morpho=true&len=").concat(5),t.next=8,fetch(n);case 8:return i=t.sent,t.next=11,i.json();case 11:if(!(s=t.sent).notes||0===s.notes.length)for(l=0;l<6;l++){for(u=s.puzzle[l].toUpperCase(),0===l?A(u):5===l&&C(u),p=(0,c.Z)(Array.from(u)),h=0===l||5===l,m=[],y=0;y<5;y++)x={letter:"?",solution:p[y],className:"?"},0===l||5===l?(x.letter=p[y],x.className="morphoCellStatic"):(x.letter="?",x.className=o),m.push(x);e.push({filledin:h,colArray:m})}E(e),I({row:1,col:0}),f(!1);case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),T=function(){var t=(0,i.Z)(a().mark((function t(){var e,r,n,o,c,i,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(d(!0),e=!0,r="",n=0;n<5;n++)r+=O[0].colArray[n].letter;o=1;case 5:if(!(e&&o<5)){t.next=18;break}for(c="",i="",s=0;s<5;s++)c+=O[o-1].colArray[s].letter,i+=O[o].colArray[s].letter;return U(r,o,c,i)||(alert("".concat(c," to ").concat(i," is not a valid move")),e=!1),t.next=12,Z(i);case 12:if(t.sent){t.next=15;break}alert("".concat(i," is not valid")),e=!1;case 15:o++,t.next=5;break;case 18:if(e){t.next=21;break}return d(!1),t.abrupt("return");case 21:alert("Success!"),L();case 23:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),U=function(t,e,r,n){for(var o=Array.from(t),a=Array.from(r),c=Array.from(n),i=0,s=0,l=0;l<c.length;l++)c[l]!==o[l]&&i++,c[l]!==a[l]&&s++;return i===e&&1===s};function Z(t){return P.apply(this,arguments)}function P(){return(P=(0,i.Z)(a().mark((function t(e){var n,o,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(r,"/ENABLE2K?exists=").concat(e.toLowerCase()),t.next=3,fetch(n);case 3:return o=t.sent,t.next=6,o.json();case 6:return c=t.sent,t.abrupt("return",c.exists);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,n.jsxs)("div",{className:"trBackground",children:[(0,n.jsxs)("div",{className:"trTitle",children:["Morpho",(0,n.jsx)("button",{className:"trButton",onClick:function(){e("menu")},children:(0,n.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),u&&(0,n.jsx)("div",{className:"trEmphasis",children:"Creating puzzle, please be patient..."}),!u&&(0,n.jsxs)("div",{onKeyDown:function(t){!function(t){if(t.preventDefault(),!h){var e=B.row,r=B.col;if(!(e<1||e>=5)&&!(r<0||e>=5)){var n="",a=!0;if(t.key.match(/^[A-Za-z\?]$/)&&(n=t.key.toUpperCase()),"Backspace"===t.key&&(n="?"),"Delete"===t.key&&(n="?",a=!1),""!==n){var c=JSON.parse(JSON.stringify(O));c[e].colArray[r].letter=n,c[e].filledin=0===c[e].colArray.filter((function(t){return"?"===t.letter})).length;for(var i=0;i<5;i++)"?"===c[e].colArray[i].letter?c[e].colArray[i].className=o:c[e].colArray[i].className=c[e].filledin?"morphoCellLetterOnFullyFilledInRow":"morphoCellLetterOnPartiallyFilledInRow";if(a){var s={row:1,col:0};r+1<5?(s.row=e,s.col=r+1):e+1<5&&(s.row=e+1,s.col=0),I(s)}0===c.filter((function(t){return!t.filledin})).length&&v(!0),E(c)}}}}(t)},tabindex:-1,children:[(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{}),(0,n.jsx)("tbody",{children:O.map((function(t,e){return(0,n.jsx)("tr",{children:t.colArray.map((function(t,r){return(0,n.jsx)("td",{onClick:function(){!function(t,e){t<1||t>=5||e<0||t>=5||I({row:t,col:e})}(e,r)},className:"morphoCell ".concat(y||w?"morphoCellSolution":t.className+(e===B.row&&r===B.col?" morphoCellSelected":"")),children:w?(0,n.jsx)("span",{children:t.solution}):(0,n.jsx)("span",{children:t.letter})},"BoardCell.".concat(e,".").concat(r))}))},"BoardRow.".concat(e))}))})]}),(0,n.jsxs)("div",{className:"trParagraph",children:[(0,n.jsxs)("p",{children:["Change one letter at a time to get from ",j," to ",k,"."]}),(0,n.jsx)("p",{children:"Each interim word must be a valid word."}),(0,n.jsx)("button",{className:"trButton",onClick:function(){N(!w)},children:"".concat(w?"HIDE SOLUTION":"SHOW A SOLUTION")}),(0,n.jsx)("p",{}),y&&(0,n.jsx)("button",{className:"trButton",onClick:function(){T()},children:"SUBMIT YOUR SOLUTION"})]})]})]})}},5704:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/morpho/morpho",function(){return r(2808)}])},2447:function(t,e,r){"use strict";function n(t,e,r,n,o,a,c){try{var i=t[a](c),s=i.value}catch(l){return void r(l)}i.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var c=t.apply(e,r);function i(t){n(c,o,a,i,s,"next",t)}function s(t){n(c,o,a,i,s,"throw",t)}i(void 0)}))}}r.d(e,{Z:function(){return o}})},1385:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,{Z:function(){return o}})}},function(t){t.O(0,[774,888,179],(function(){return e=5704,t(t.s=e);var e}));var e=t.O();_N_E=e}]);