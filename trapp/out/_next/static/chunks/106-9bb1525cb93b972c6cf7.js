(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{2792:function(t,e,n){"use strict";n.d(e,{CU:function(){return i},G0:function(){return l},eo:function(){return u},cO:function(){return d},_r:function(){return p}});var r=n(809),s=n.n(r),a=n(2447),o="https://tilerunner.herokuapp.com";function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=Array.from(t.trim().toLowerCase());e.sort();var n=e.join("");return n}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=0,r=Array.from(t.toLowerCase()),s=Array.from(e.toLowerCase());if(r.length===s.length)for(var a=0;a<r.length;a++){r[a];r[a]!==s[a]&&n++}else n=-1;return n}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=c(t),r=c(e);return n===r}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t.length!==e.length+1)return!1;for(var n=t.toLowerCase(),r=e.toLowerCase(),s=0;s<n.length;s++){var a=Array.from(n);if(a.splice(s,1),a.join("")===r)return!0}return!1}function d(t){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(s().mark((function t(e){var n,r,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(o,"/ENABLE2K?exists=").concat(e.toLowerCase()),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,t.abrupt("return",a.exists);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)(s().mark((function t(e){var n,r,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(o,"/ENABLE2K?letters=").concat(e.toLowerCase(),"&tm=true"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,t.abrupt("return",a.to);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},7106:function(t,e,n){"use strict";n.r(e);var r=n(5893),s=n(1385),a=n(809),o=n.n(a),c=n(2447),i=n(7294),l=n(9359),u=n(2792),d=n(1201);e.default=function(t){var e=t.setWhereto,n=(0,i.useState)("ckv1"),a=(n[0],n[1],(0,i.useState)(2)),h=a[0],p=a[1],x=(0,i.useState)({}),f=x[0],m=x[1],j=(0,i.useState)(""),v=j[0],w=j[1],g=(0,i.useState)([]),k=g[0],N=g[1],b=(0,i.useState)([]),C=b[0],y=b[1],S=(0,i.useState)([]),_=S[0],W=S[1],Y=(0,i.useState)([]),E=Y[0],A=Y[1],I=(0,i.useState)(!1),L=I[0],Z=I[1],D=(0,i.useState)(!1),T=D[0],B=D[1],P=function(){var t=(0,c.Z)(o().mark((function t(){var e,n,r,s,a,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={},n=[],r=[],s=!1,t.prev=4,a="".concat("https://tilerunner.herokuapp.com","/ENABLE2K?transmogrify=true&numMoves=").concat(h),t.next=8,fetch(a);case 8:return c=t.sent,t.next=11,c.json();case 11:return e=t.sent,t.next=14,(0,u._r)(e.startWord);case 14:return n=t.sent,t.next=17,(0,u._r)(e.targetWord);case 17:r=t.sent,s=!0,t.next=25;break;case 21:t.prev=21,t.t0=t.catch(4),e.notes=["Problem with the server. Sorry about that."],console.log(t.t0);case 25:m(e),N([]),y(n),W([]),A(r),w(""),Z(!1),B(s);case 33:case"end":return t.stop()}}),t,null,[[4,21]])})));return function(){return t.apply(this,arguments)}}(),z=function(){var t=(0,c.Z)(o().mark((function t(){var e,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u._r)(f.startWord);case 2:return e=t.sent,t.next=5,(0,u._r)(f.targetWord);case 5:n=t.sent,N([]),y(e),W([]),A(n),w("");case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),M=function(){var t=(0,c.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("F12"!==e.key){t.next=2;break}return t.abrupt("return");case 2:if("Enter"!==e.key){t.next=5;break}return O(e),t.abrupt("return");case 5:e.preventDefault(),"BACKSPACE"===(n=e.key.toUpperCase())?K():/^[A-Z]$/.test(n)&&U(n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),U=function(t){w(v+t)},K=function(){if(v.length>0){var t=Array.from(v);t.pop();var e=t.join("");w(e)}},O=function(){var t=(0,c.Z)(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),0!==v.length){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,G(v);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=function(){var t=(0,c.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.toUpperCase(),w(n),t.next=4,G(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),G=function(){var t=(0,c.Z)(o().mark((function t(e){var n,r,a,c,i,l,d;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=0===k.length?f.startWord:k[k.length-1],e=e.toUpperCase(),!V(n,e)){t.next=26;break}return t.next=5,(0,u.cO)(e);case 5:if(t.sent){t.next=9;break}alert("".concat(e," is not a valid word")),t.next=24;break;case 9:if(r=0===_.length?f.targetWord:_[0],(a=(0,s.Z)(k)).push(e),!V(e,r)){t.next=18;break}N(a),w(""),Z(!0),t.next=24;break;case 18:return t.next=20,(0,u._r)(e);case 20:c=t.sent,y(c),N(a),w("");case 24:t.next=51;break;case 26:if(n=0===_.length?f.targetWord:_[0],!V(n,e)){t.next=50;break}return t.next=30,(0,u.cO)(e);case 30:if(t.sent){t.next=34;break}alert("".concat(e," is not a valid word")),t.next=48;break;case 34:if(i=0===k.length?f.startWord:k[k.length-1],l=[e].concat((0,s.Z)(_)),!V(e,i)){t.next=42;break}W(l),w(""),Z(!0),t.next=48;break;case 42:return t.next=44,(0,u._r)(e);case 44:d=t.sent,A(d),W(l),w("");case 48:t.next=51;break;case 50:alert("Only anagrams, drops, swaps and inserts allowed.");case 51:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),H=function(){var t=(0,c.Z)(o().mark((function t(e){var n,r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e<k.length)){t.next=9;break}return(n=(0,s.Z)(k)).splice(e),r=0===n.length?f.startWord:n[n.length-1],t.next=6,(0,u._r)(r);case 6:a=t.sent,N(n),y(a);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),R=function(){var t=(0,c.Z)(o().mark((function t(e){var n,r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e<_.length)){t.next=9;break}return(n=(0,s.Z)(_)).splice(0,e+1),r=0===n.length?f.targetWord:n[n.length-1],t.next=6,(0,u._r)(r);case 6:a=t.sent,W(n),A(a);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(t=t.trim().toLowerCase())!==(e=e.trim().toLowerCase())&&((0,u.G0)(t,e)||1===(0,u.CU)(t,e)||(0,u.eo)(t,e)||(0,u.eo)(e,t))},q=(0,r.jsxs)("div",{className:"tm_numMovesDiv",children:[(0,r.jsx)("h3",{children:"Number Of Moves"}),[2,3,4,5,6,7,8,9].map((function(t){return(0,r.jsx)("button",{className:"tm_".concat(t===h?"numMovesSelected":"numMovesUnselected"),onClick:function(){p(t)},children:t},"chooseNumMoves".concat(t))})),(0,r.jsx)("div",{className:"tm_startPuzzleDiv",children:(0,r.jsx)("button",{className:"trButton",onClick:function(){P()},children:"Start Puzzle"},"startPuzzle")})]}),Q=(0,r.jsxs)("div",{className:"tm_puzzleDiv",children:[(0,r.jsx)("span",{children:f.startWord}),(0,r.jsx)("span",{children:"to"}),(0,r.jsx)("span",{children:f.targetWord}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{children:"Target:"}),(0,r.jsx)("span",{children:f.numMoves}),(0,r.jsx)("span",{children:"moves"})]}),$=("tm_KeyGo ".concat(v.length>0?"":"disabled"),(0,r.jsxs)("div",{className:"tm_solutionOuterDiv",children:[(0,r.jsx)("div",{className:"tm_solutionDiv",children:f&&f.startWord&&(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("span",{className:"tm_arrow",children:"\u21a7"}),f.startWord]})}),k.map((function(t,e){return(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("span",{className:"tm_arrow",children:"\u21a7"}),t]})},"userDownWord".concat(e))})),!L&&(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:(0,r.jsxs)("span",{className:"tm_nextword",children:["\xa0",v,"\xa0"]})})}),_.map((function(t,e){return(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[t,(0,r.jsx)("span",{className:"tm_arrow",children:"\u21a5"})]})},"userUpWord".concat(e))})),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[f.targetWord,(0,r.jsx)("span",{className:"tm_arrow",children:"\u21a5"})]})})]})})}),f&&f.startWord&&!L&&(0,r.jsxs)("div",{className:"tm_validwordsdiv",children:[(0,r.jsx)("p",{children:"Valid down words"}),C.map((function(t,e){return(0,r.jsxs)("span",{onClick:function(){F(t)},children:[t,e+1===C.length?"":",","\xa0"]},"validdownword".concat(e))})),(0,r.jsx)("p",{children:"Valid up words"}),E.map((function(t,e){return(0,r.jsxs)("span",{onClick:function(){F(t)},children:[t,e+1===E.length?"":",","\xa0"]},"validupword".concat(e))})),(0,r.jsx)("p",{children:"Click Your Chosen Next Word"})]}),L?(0,r.jsxs)("p",{className:"tm_congrats",children:["\ud83d\udc4f\ud83c\udffd Solved in ",k.length+_.length+1," moves \ud83d\udc4f\ud83c\udffd"]}):(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"tm_lastbuttons",children:[k.length+_.length>0&&(0,r.jsx)("button",{onClick:function(){z()},"data-toggle":"tooltip",title:"Remove all enter words",children:"RESET"}),(0,r.jsx)("button",{onClick:function(){alert("Valid next word options:\nSwap one letter, e.g. CAT to COT\nDrop one letter, e.g. SWIG to WIG\nInsert one letter, e.g. MAT to MATH, or HIP to WHIP\nAnagram, e.g. ACT to CAT")},"data-toggle":"tooltip",title:"Show instructions",children:"HELP"}),(0,r.jsx)("button",{className:"tm_quit",onClick:function(){B(!1)},"data-toggle":"tooltip",title:"Quit this puzzle. You can start another.",children:"QUIT"})]})})]})),J=(0,r.jsxs)("ul",{className:"trParagraph",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{className:"insertCount",children:"\xa01\xa0"}),"Shows insert counts/letters"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{className:"swapCount",children:"\xa02\xa0"}),"Shows swaps counts/letters"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{className:"anagramCount",children:"3"}),"Shows anagram counts/words"]}),(0,r.jsx)("li",{children:"Click to toggle between count and info"}),(0,r.jsx)("li",{children:"The black dot represents a drop"}),(0,r.jsxs)("li",{children:["Click the ",(0,r.jsx)("span",{className:"closemebutton"})," to remove your word"]})]}),X=(0,r.jsxs)("div",{children:[(0,r.jsx)(d.default,{word:f.startWord,showInserts:"Y",showSwaps:"Y",showAnagrams:"Y",showDrops:"Y",removeEntry:function(){},entryIndex:-1}),k.map((function(t,e){return(0,r.jsx)(d.default,{word:t,showInserts:"Y",showSwaps:"Y",showAnagrams:"Y",showDrops:"Y",removeEntry:function(){H(e)},entryIndex:e+1},"hintdownword".concat(e).concat(t))})),_.map((function(t,e){return(0,r.jsx)(d.default,{word:t,showInserts:"Y",showSwaps:"Y",showAnagrams:"Y",showDrops:"Y",removeEntry:function(){R(e)},entryIndex:e+1},"hintupword".concat(e).concat(t))})),(0,r.jsx)(d.default,{word:f.targetWord,showInserts:"Y",showSwaps:"Y",showAnagrams:"Y",showDrops:"Y",removeEntry:function(){},entryIndex:-1})]}),tt=(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(L||!T)&&(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:q})}),f&&f.startWord&&(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:Q})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:$})})]})});return(0,r.jsxs)("div",{className:"trBackground",children:[(0,r.jsxs)("div",{className:"trTitle",children:["Transmogrify",(0,r.jsx)("button",{className:"trButton",onClick:function(){e("menu")},children:(0,r.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),l.tq?(0,r.jsx)("div",{children:tt}):(0,r.jsx)("div",{children:(0,r.jsx)("table",{onKeyDown:function(t){M(t)},tabIndex:-1,children:(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"aligntop",children:tt}),f&&f.startWord&&!L&&(0,r.jsxs)("td",{className:"aligntop",children:[(0,r.jsx)("div",{className:"tm_hintsheader",children:"Word Info"}),X]}),f&&f.startWord&&!L&&(0,r.jsxs)("td",{className:"aligntop",children:[(0,r.jsx)("div",{className:"tm_hintsheader",children:"Word Info Explanation"}),J]})]})})})}),(0,r.jsx)("div",{children:f&&f.notes&&f.notes.length>0&&(0,r.jsx)("div",{className:"trDanger",children:f.notes.map((function(t,e){return(0,r.jsx)("p",{children:t},"note".concat(e))}))})})]})}},7185:function(t,e,n){"use strict";n.r(e);var r=n(5893),s=n(7294);e.default=function(t){var e=t.anagrams,n=void 0===e?["You","should","never","see","this"]:e,a=(0,s.useState)(!0),o=a[0],c=a[1];return o?(0,r.jsx)("span",{className:"anagramCount","data-toggle":"tooltip",title:n,onClick:function(){c(!o)},children:n.length}):(0,r.jsx)("span",{className:"anagramCount","data-toggle":"tooltip",title:n.length,onClick:function(){c(!o)},children:n.join(",")})}},4909:function(t,e,n){"use strict";n.r(e);var r=n(5893),s=n(7294);e.default=function(t){var e=t.insertLetters,n=void 0===e?"":e,a=(0,s.useState)(!0),o=a[0],c=a[1];return""===n?(0,r.jsx)("td",{}):o?(0,r.jsx)("td",{className:"insertCount","data-toggle":"tooltip",title:n,onClick:function(){c(!o)},children:n.length}):(0,r.jsx)("td",{className:"insertCount","data-toggle":"tooltip",title:n.length,onClick:function(){c(!o)},children:n})}},6001:function(t,e,n){"use strict";n.r(e);var r=n(5893),s=n(7294);e.default=function(t){var e=t.swapLetters,n=void 0===e?"":e,a=(0,s.useState)(!0),o=a[0],c=a[1];return""===n?(0,r.jsx)("td",{}):o?(0,r.jsx)("td",{className:"swapCount","data-toggle":"tooltip",title:n,onClick:function(){c(!o)},children:n.length}):(0,r.jsx)("td",{className:"swapCount","data-toggle":"tooltip",title:n.length,onClick:function(){c(!o)},children:n})}},1201:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r=n(1385),s=n(5893),a=n(809),o=n.n(a),c=n(2447),i=n(7294),l=n(4909),u=n(6001),d=n(7185);function h(t){var e,n,a=(0,i.useState)([]),h=a[0],p=a[1],x=(0,i.useState)(!1),f=x[0],m=x[1];return(0,i.useEffect)((function(){(function(){var e=(0,c.Z)(o().mark((function e(){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://tilerunner.herokuapp.com/ENABLE2K?letters=",e.next=3,fetch("https://tilerunner.herokuapp.com/ENABLE2K?letters="+t.word);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,p(r),m(!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),f?(0,s.jsx)("table",{children:(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("table",{className:"trTable",children:(0,s.jsxs)("tbody",{children:["Y"===t.showInserts&&h.inserts.length>0&&(n=h.inserts,(0,s.jsx)("tr",{children:n.map((function(t,e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.default,{insertLetters:t},"insertsBallon.".concat(e)),(0,s.jsx)("td",{})]})}))},"insertsRow.".concat(t.word))),"Y"===t.showSwaps&&h.swaps.length>0&&function(e){var n=[].concat((0,r.Z)(e),[""]);return(0,s.jsx)("tr",{children:null===n||void 0===n?void 0:n.map((function(e,n){return(0,s.jsxs)(s.Fragment,{children:["N"===t.showInserts||""===h.inserts[n]?(0,s.jsx)("td",{className:"insertCountSpacer"}):(0,s.jsx)("td",{className:"balloonstring",children:"\u27bb"}),(0,s.jsx)(u.default,{swapLetters:e},"swapsBallon.".concat(n))]})}))},"swaps.".concat(t.word))}(h.swaps),function(){var e,n=t.word,r=t.word+"2";return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{}),null===(e=t.word)||void 0===e?void 0:e.toUpperCase().split("").map((function(t){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("td",{children:t}),(0,s.jsx)("td",{})]})})),(0,s.jsx)("td",{children:"Y"===t.showAnagrams&&h.anagrams.length>0&&(0,s.jsx)("span",{children:(0,s.jsx)(d.default,{anagrams:h.anagrams})},h.anagrams)},n),(0,s.jsx)("td",{children:"Y"!==h.valid&&(0,s.jsx)("span",{className:"trDanger",children:"Invalid word"})},r)]},"word.".concat(t.word))}(),"Y"===t.showDrops&&h.drops.length>0&&(e=h.drops,(0,s.jsx)("tr",{className:"dropRow",children:e.map((function(t){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("td",{}),"Y"===t?(0,s.jsx)("td",{className:"dropIndicator","data-toggle":"tooltip",title:"You can drop this letter",children:"\u2022"}):(0,s.jsx)("td",{})]})}))},"drops.".concat(t.word)))]})})}),t.entryIndex>-1&&(0,s.jsx)("td",{className:"closeme",children:(0,s.jsx)("button",{className:"closemebutton",onClick:function(){return t.removeEntry(t.entryIndex)}})})]})})}):(0,s.jsx)("div",{className:"trEmphasis",children:"Loading ..."})}},2447:function(t,e,n){"use strict";function r(t,e,n,r,s,a,o){try{var c=t[a](o),i=c.value}catch(l){return void n(l)}c.done?e(i):Promise.resolve(i).then(r,s)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(s,a){var o=t.apply(e,n);function c(t){r(o,s,a,c,i,"next",t)}function i(t){r(o,s,a,c,i,"throw",t)}c(void 0)}))}}n.d(e,{Z:function(){return s}})}}]);