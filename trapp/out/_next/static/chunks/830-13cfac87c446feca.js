"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[830],{830:function(t,n,e){e.r(n);var r=e(4051),s=e.n(r),a=e(5893),o=e(7294),c=e(9359),i=e(3524),l=e(7833);function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function d(t,n,e,r,s,a,o){try{var c=t[a](o),i=c.value}catch(l){return void e(l)}c.done?n(i):Promise.resolve(i).then(r,s)}function h(t){return function(){var n=this,e=arguments;return new Promise((function(r,s){var a=t.apply(n,e);function o(t){d(a,r,s,o,c,"next",t)}function c(t){d(a,r,s,o,c,"throw",t)}o(void 0)}))}}function p(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"===typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=function(t){var n=t.setWhereto,e=(0,o.useState)(2),r=e[0],u=e[1],d=(0,o.useState)({}),x=d[0],f=d[1],m=(0,o.useState)(""),j=m[0],v=m[1],w=(0,o.useState)([]),g=w[0],b=w[1],y=(0,o.useState)([]),k=y[0],N=y[1],C=(0,o.useState)([]),S=C[0],A=C[1],W=(0,o.useState)([]),_=W[0],I=W[1],Y=(0,o.useState)(!1),E=Y[0],D=Y[1],T=(0,o.useState)(!1),P=T[0],M=T[1],z=function(){var t=h(s().mark((function t(){var n,e,a,o,c,l;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={},e=[],a=[],o=!1,t.prev=4,c="".concat("https://tilerunner.herokuapp.com","/ENABLE2K?transmogrify=true&numMoves=").concat(r),t.next=8,fetch(c);case 8:return l=t.sent,t.next=11,l.json();case 11:return n=t.sent,t.next=14,(0,i._r)(n.startWord);case 14:return e=t.sent,t.next=17,(0,i._r)(n.targetWord);case 17:a=t.sent,o=!0,t.next=25;break;case 21:t.prev=21,t.t0=t.catch(4),n.notes=["Problem with the server. Sorry about that."],console.log(t.t0);case 25:f(n),b([]),N(e),A([]),I(a),v(""),D(!1),M(o);case 33:case"end":return t.stop()}}),t,null,[[4,21]])})));return function(){return t.apply(this,arguments)}}(),L=function(){var t=h(s().mark((function t(){var n,e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i._r)(x.startWord);case 2:return n=t.sent,t.next=5,(0,i._r)(x.targetWord);case 5:e=t.sent,b([]),N(n),A([]),I(e),v("");case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=h(s().mark((function t(n){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("F12"!==n.key){t.next=2;break}return t.abrupt("return");case 2:if("Enter"!==n.key){t.next=5;break}return F(n),t.abrupt("return");case 5:n.preventDefault(),"BACKSPACE"===(e=n.key.toUpperCase())?B():/^[A-Z]$/.test(e)&&U(e);case 8:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),U=function(t){v(j+t)},B=function(){if(j.length>0){var t=Array.from(j);t.pop();var n=t.join("");v(n)}},F=function(){var t=h(s().mark((function t(n){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),0!==j.length){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,K(j);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),H=function(){var t=h(s().mark((function t(n){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.toUpperCase(),v(e),t.next=4,K(e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),K=function(){var t=h(s().mark((function t(n){var e,r,a,o,c,l,u;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=0===g.length?x.startWord:g[g.length-1],n=n.toUpperCase(),!V(e,n)){t.next=24;break}return t.next=5,(0,i.cO)(n);case 5:if(t.sent){t.next=9;break}alert("".concat(n," is not a valid word")),t.next=22;break;case 9:if(r=0===S.length?x.targetWord:S[0],(a=p(g)).push(n),!V(n,r)){t.next=16;break}b(a),v(""),D(!0),t.next=22;break;case 16:return t.next=18,(0,i._r)(n);case 18:o=t.sent,N(o),b(a),v("");case 22:t.next=47;break;case 24:if(e=0===S.length?x.targetWord:S[0],!V(e,n)){t.next=46;break}return t.next=28,(0,i.cO)(n);case 28:if(t.sent){t.next=32;break}alert("".concat(n," is not a valid word")),t.next=44;break;case 32:if(c=0===g.length?x.startWord:g[g.length-1],l=[n].concat(p(S)),!V(n,c)){t.next=38;break}A(l),v(""),D(!0),t.next=44;break;case 38:return t.next=40,(0,i._r)(n);case 40:u=t.sent,I(u),A(l),v("");case 44:t.next=47;break;case 46:alert("Only anagrams, drops, swaps and inserts allowed.");case 47:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),G=function(){var t=h(s().mark((function t(n){var e,r,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n<g.length)){t.next=9;break}return(e=p(g)).splice(n),r=0===e.length?x.startWord:e[e.length-1],t.next=6,(0,i._r)(r);case 6:a=t.sent,b(e),N(a);case 9:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),R=function(){var t=h(s().mark((function t(n){var e,r,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n<S.length)){t.next=9;break}return(e=p(S)).splice(0,n+1),r=0===e.length?x.targetWord:e[e.length-1],t.next=6,(0,i._r)(r);case 6:a=t.sent,A(e),I(a);case 9:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(t=t.trim().toLowerCase())!==(n=n.trim().toLowerCase())&&((0,i.G0)(t,n)||1===(0,i.CU)(t,n)||(0,i.eo)(t,n)||(0,i.eo)(n,t))},$=(0,a.jsxs)("div",{className:"tm_numMovesDiv",children:[(0,a.jsx)("h3",{children:"Number Of Moves"}),[2,3,4,5,6,7,8,9].map((function(t){return(0,a.jsx)("button",{className:"tm_".concat(t===r?"numMovesSelected":"numMovesUnselected"),onClick:function(){u(t)},children:t},"chooseNumMoves".concat(t))})),(0,a.jsx)("div",{className:"tm_startPuzzleDiv",children:(0,a.jsx)("button",{className:"trButton",onClick:function(){z()},children:"Start Puzzle"},"startPuzzle")})]}),q=(0,a.jsxs)("div",{className:"tm_puzzleDiv",children:[(0,a.jsx)("span",{children:x.startWord}),(0,a.jsx)("span",{children:"to"}),(0,a.jsx)("span",{children:x.targetWord}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{children:"Target:"}),(0,a.jsx)("span",{children:x.numMoves}),(0,a.jsx)("span",{children:"moves"})]}),Q=("tm_KeyGo ".concat(j.length>0?"":"disabled"),(0,a.jsxs)("div",{className:"tm_solutionOuterDiv",children:[(0,a.jsx)("div",{className:"tm_solutionDiv",children:x&&x.startWord&&(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:[(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{children:[(0,a.jsx)("span",{className:"tm_arrow",children:"\u21a7"}),x.startWord]})}),g.map((function(t,n){return(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{children:[(0,a.jsx)("span",{className:"tm_arrow",children:"\u21a7"}),t]})},"userDownWord".concat(n))})),!E&&(0,a.jsx)("tr",{children:(0,a.jsx)("td",{children:(0,a.jsxs)("span",{className:"tm_nextword",children:["\xa0",j,"\xa0"]})})}),S.map((function(t,n){return(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{children:[t,(0,a.jsx)("span",{className:"tm_arrow",children:"\u21a5"})]})},"userUpWord".concat(n))})),(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{children:[x.targetWord,(0,a.jsx)("span",{className:"tm_arrow",children:"\u21a5"})]})})]})})}),x&&x.startWord&&!E&&(0,a.jsxs)("div",{className:"tm_validwordsdiv",children:[(0,a.jsx)("p",{children:"Valid down words"}),k.map((function(t,n){return(0,a.jsxs)("span",{onClick:function(){H(t)},children:[t,n+1===k.length?"":",","\xa0"]},"validdownword".concat(n))})),(0,a.jsx)("p",{children:"Valid up words"}),_.map((function(t,n){return(0,a.jsxs)("span",{onClick:function(){H(t)},children:[t,n+1===_.length?"":",","\xa0"]},"validupword".concat(n))})),(0,a.jsx)("p",{children:"Click Your Chosen Next Word"})]}),E?(0,a.jsxs)("p",{className:"tm_congrats",children:["\ud83d\udc4f\ud83c\udffd Solved in ",g.length+S.length+1," moves \ud83d\udc4f\ud83c\udffd"]}):(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"tm_lastbuttons",children:[g.length+S.length>0&&(0,a.jsx)("button",{onClick:function(){L()},"data-toggle":"tooltip",title:"Remove all enter words",children:"RESET"}),(0,a.jsx)("button",{onClick:function(){alert("Valid next word options:\nSwap one letter, e.g. CAT to COT\nDrop one letter, e.g. SWIG to WIG\nInsert one letter, e.g. MAT to MATH, or HIP to WHIP\nAnagram, e.g. ACT to CAT")},"data-toggle":"tooltip",title:"Show instructions",children:"HELP"}),(0,a.jsx)("button",{className:"tm_quit",onClick:function(){M(!1)},"data-toggle":"tooltip",title:"Quit this puzzle. You can start another.",children:"QUIT"})]})})]})),Z=(0,a.jsxs)("ul",{className:"trParagraph",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"insertCount",children:"\xa01\xa0"}),"Shows insert counts/letters"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"swapCount",children:"\xa02\xa0"}),"Shows swaps counts/letters"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"anagramCount",children:"3"}),"Shows anagram counts/words"]}),(0,a.jsx)("li",{children:"Click to toggle between count and info"}),(0,a.jsx)("li",{children:"The black dot represents a drop"}),(0,a.jsxs)("li",{children:["Click the ",(0,a.jsx)("span",{className:"closemebutton"})," to remove your word"]})]}),J=(0,a.jsxs)("div",{children:[(0,a.jsx)(l.default,{word:x.startWord,showInserts:"Y",showSwaps:"Y",showAnagrams:"Y",showDrops:"Y",removeEntry:function(){},entryIndex:-1}),g.map((function(t,n){return(0,a.jsx)(l.default,{word:t,showInserts:"Y",showSwaps:"Y",showAnagrams:"Y",showDrops:"Y",removeEntry:function(){G(n)},entryIndex:n+1},"hintdownword".concat(n).concat(t))})),S.map((function(t,n){return(0,a.jsx)(l.default,{word:t,showInserts:"Y",showSwaps:"Y",showAnagrams:"Y",showDrops:"Y",removeEntry:function(){R(n)},entryIndex:n+1},"hintupword".concat(n).concat(t))})),(0,a.jsx)(l.default,{word:x.targetWord,showInserts:"Y",showSwaps:"Y",showAnagrams:"Y",showDrops:"Y",removeEntry:function(){},entryIndex:-1})]}),X=(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:[(E||!P)&&(0,a.jsx)("tr",{children:(0,a.jsx)("td",{children:$})}),x&&x.startWord&&(0,a.jsx)("tr",{children:(0,a.jsx)("td",{children:q})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{children:Q})})]})});return(0,a.jsxs)("div",{className:"trBackground",children:[(0,a.jsxs)("div",{className:"trTitle",children:["Transmogrify",(0,a.jsx)("button",{className:"trButton",onClick:function(){n("menu")},children:(0,a.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),c.tq?(0,a.jsx)("div",{children:X}):(0,a.jsx)("div",{children:(0,a.jsx)("table",{onKeyDown:function(t){O(t)},tabIndex:-1,children:(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"aligntop",children:X}),x&&x.startWord&&!E&&(0,a.jsxs)("td",{className:"aligntop",children:[(0,a.jsx)("div",{className:"tm_hintsheader",children:"Word Info"}),J]}),x&&x.startWord&&!E&&(0,a.jsxs)("td",{className:"aligntop",children:[(0,a.jsx)("div",{className:"tm_hintsheader",children:"Word Info Explanation"}),Z]})]})})})}),(0,a.jsx)("div",{children:x&&x.notes&&x.notes.length>0&&(0,a.jsx)("div",{className:"trDanger",children:x.notes.map((function(t,n){return(0,a.jsx)("p",{children:t},"note".concat(n))}))})})]})}},1351:function(t,n,e){e.r(n);var r=e(5893),s=e(7294);n.default=function(t){var n=t.anagrams,e=void 0===n?["You","should","never","see","this"]:n,a=(0,s.useState)(!0),o=a[0],c=a[1];return o?(0,r.jsx)("span",{className:"anagramCount","data-toggle":"tooltip",title:e,onClick:function(){c(!o)},children:e.length}):(0,r.jsx)("span",{className:"anagramCount","data-toggle":"tooltip",title:e.length,onClick:function(){c(!o)},children:e.join(",")})}},7153:function(t,n,e){e.r(n);var r=e(5893),s=e(7294);n.default=function(t){var n=t.insertLetters,e=void 0===n?"":n,a=(0,s.useState)(!0),o=a[0],c=a[1];return""===e?(0,r.jsx)("td",{}):o?(0,r.jsx)("td",{className:"insertCount","data-toggle":"tooltip",title:e,onClick:function(){c(!o)},children:e.length}):(0,r.jsx)("td",{className:"insertCount","data-toggle":"tooltip",title:e.length,onClick:function(){c(!o)},children:e})}},753:function(t,n,e){e.r(n);var r=e(5893),s=e(7294);n.default=function(t){var n=t.swapLetters,e=void 0===n?"":n,a=(0,s.useState)(!0),o=a[0],c=a[1];return""===e?(0,r.jsx)("td",{}):o?(0,r.jsx)("td",{className:"swapCount","data-toggle":"tooltip",title:e,onClick:function(){c(!o)},children:e.length}):(0,r.jsx)("td",{className:"swapCount","data-toggle":"tooltip",title:e.length,onClick:function(){c(!o)},children:e})}},7833:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var r=e(4051),s=e.n(r),a=e(5893),o=e(7294),c=e(7153),i=e(753),l=e(1351);function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function d(t,n,e,r,s,a,o){try{var c=t[a](o),i=c.value}catch(l){return void e(l)}c.done?n(i):Promise.resolve(i).then(r,s)}function h(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"===typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t){var n,e,r=(0,o.useState)([]),u=r[0],p=r[1],x=(0,o.useState)(!1),f=x[0],m=x[1];return(0,o.useEffect)((function(){var n=function(){var n,e=(n=s().mark((function n(){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,fetch("https://tilerunner.herokuapp.com/ENABLE2K?letters="+t.word);case 3:return e=n.sent,n.next=6,e.json();case 6:r=n.sent,p(r),m(!0);case 9:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,s){var a=n.apply(t,e);function o(t){d(a,r,s,o,c,"next",t)}function c(t){d(a,r,s,o,c,"throw",t)}o(void 0)}))});return function(){return e.apply(this,arguments)}}();n()}),[]),f?(0,a.jsx)("table",{children:(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("table",{className:"trTable",children:(0,a.jsxs)("tbody",{children:["Y"===t.showInserts&&u.inserts.length>0&&(e=u.inserts,(0,a.jsx)("tr",{children:e.map((function(t,n){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.default,{insertLetters:t},"insertsBallon.".concat(n)),(0,a.jsx)("td",{})]})}))},"insertsRow.".concat(t.word))),"Y"===t.showSwaps&&u.swaps.length>0&&function(n){var e=h(n).concat([""]);return(0,a.jsx)("tr",{children:null===e||void 0===e?void 0:e.map((function(n,e){return(0,a.jsxs)(a.Fragment,{children:["N"===t.showInserts||""===u.inserts[e]?(0,a.jsx)("td",{className:"insertCountSpacer"}):(0,a.jsx)("td",{className:"balloonstring",children:"\u27bb"}),(0,a.jsx)(i.default,{swapLetters:n},"swapsBallon.".concat(e))]})}))},"swaps.".concat(t.word))}(u.swaps),function(){var n,e=t.word,r=t.word+"2";return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{}),null===(n=t.word)||void 0===n?void 0:n.toUpperCase().split("").map((function(t){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("td",{children:t}),(0,a.jsx)("td",{})]})})),(0,a.jsx)("td",{children:"Y"===t.showAnagrams&&u.anagrams.length>0&&(0,a.jsx)("span",{children:(0,a.jsx)(l.default,{anagrams:u.anagrams})},u.anagrams)},e),(0,a.jsx)("td",{children:"Y"!==u.valid&&(0,a.jsx)("span",{className:"trDanger",children:"Invalid word"})},r)]},"word.".concat(t.word))}(),"Y"===t.showDrops&&u.drops.length>0&&(n=u.drops,(0,a.jsx)("tr",{className:"dropRow",children:n.map((function(t){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("td",{}),"Y"===t?(0,a.jsx)("td",{className:"dropIndicator","data-toggle":"tooltip",title:"You can drop this letter",children:"\u2022"}):(0,a.jsx)("td",{})]})}))},"drops.".concat(t.word)))]})})}),t.entryIndex>-1&&(0,a.jsx)("td",{className:"closeme",children:(0,a.jsx)("button",{className:"closemebutton",onClick:function(){return t.removeEntry(t.entryIndex)}})})]})})}):(0,a.jsx)("div",{className:"trEmphasis",children:"Loading ..."})}}}]);