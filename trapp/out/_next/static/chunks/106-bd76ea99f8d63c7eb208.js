(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{2792:function(n,s,t){"use strict";t.d(s,{CU:function(){return r},G0:function(){return l},eo:function(){return u},cO:function(){return d}});var e=t(809),c=t.n(e),a=t(2447),o="https://tilerunner.herokuapp.com";function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=Array.from(n.trim().toLowerCase());s.sort();var t=s.join("");return t}function r(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=0,e=Array.from(n.toLowerCase()),c=Array.from(s.toLowerCase());if(e.length===c.length)for(var a=0;a<e.length;a++){e[a];e[a]!==c[a]&&t++}else t=-1;return t}function l(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=i(n),e=i(s);return t===e}function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(n.length!==s.length+1)return!1;for(var t=n.toLowerCase(),e=s.toLowerCase(),c=0;c<t.length;c++){var a=Array.from(t);if(a.splice(c,1),a.join("")===e)return!0}return!1}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(c().mark((function n(s){var t,e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o,"/ENABLE2K?exists=").concat(s.toLowerCase()),n.next=3,fetch(t);case 3:return e=n.sent,n.next=6,e.json();case 6:return a=n.sent,n.abrupt("return",a.exists);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},7106:function(n,s,t){"use strict";t.r(s);var e=t(5893),c=t(1385),a=t(809),o=t.n(a),i=t(2447),r=t(7294),l=t(2792),u=t(1201);s.default=function(n){var s=n.setWhereto,t=(0,r.useState)("ckv1"),a=t[0],d=t[1],h=(0,r.useState)(2),x=h[0],j=h[1],p=(0,r.useState)({}),k=p[0],f=p[1],m=(0,r.useState)(""),v=m[0],C=m[1],N=(0,r.useState)([]),g=N[0],w=N[1],b=(0,r.useState)(!1),y=b[0],S=b[1],I=(0,r.useState)(!1),W=I[0],Y=I[1],D=function(){var n=(0,i.Z)(o().mark((function n(){var s,t,e,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s={},t=!1,n.prev=2,e="".concat("https://tilerunner.herokuapp.com","/ENABLE2K?transmogrify=true&numMoves=").concat(x),n.next=6,fetch(e);case 6:return c=n.sent,n.next=9,c.json();case 9:s=n.sent,t=!0,n.next=17;break;case 13:n.prev=13,n.t0=n.catch(2),s.notes=["Problem with the server. Sorry about that."],console.log(n.t0);case 17:f(s),w([]),C(""),S(!1),Y(t);case 22:case"end":return n.stop()}}),n,null,[[2,13]])})));return function(){return n.apply(this,arguments)}}(),A=function(n){C(v+n)},E=function(){if(v.length>0){var n=Array.from(v);n.pop();var s=n.join("");C(s)}},L=function(){var n=(0,i.Z)(o().mark((function n(s){var t,e,a,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s.preventDefault(),t=0===g.length?k.startWord:g[g.length-1],!R(e=v,t)){n.next=18;break}return n.next=6,(0,l.cO)(e);case 6:if(n.sent){n.next=10;break}alert("".concat(e," is not a valid word")),n.next=16;break;case 10:a=k.targetWord,(i=(0,c.Z)(g)).push(e),w(i),C(""),R(e,a)&&S(!0);case 16:n.next=19;break;case 18:alert("Only anagrams, drops, swaps and inserts allowed.");case 19:case"end":return n.stop()}}),n)})));return function(s){return n.apply(this,arguments)}}(),R=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(n=n.trim().toLowerCase())!==(s=s.trim().toLowerCase())&&((0,l.G0)(n,s)||1===(0,l.CU)(n,s)||(0,l.eo)(n,s)||(0,l.eo)(s,n))},T=(0,e.jsxs)("div",{className:"tm_numMovesDiv",children:[(0,e.jsx)("h3",{children:"Number Of Moves"}),[2,3,4,5,6,7,8,9].map((function(n){return(0,e.jsx)("button",{className:"tm_".concat(n===x?"numMovesSelected":"numMovesUnselected"),onClick:function(){j(n)},children:n},"chooseNumMoves".concat(n))})),(0,e.jsx)("div",{className:"tm_startPuzzleDiv",children:(0,e.jsx)("button",{className:"trButton",onClick:function(){D()},children:"Start Puzzle"},"startPuzzle")})]}),_=(0,e.jsxs)("div",{className:"tm_puzzleDiv",children:[(0,e.jsx)("span",{children:k.startWord}),(0,e.jsx)("span",{children:"to"}),(0,e.jsx)("span",{children:k.targetWord}),(0,e.jsx)("br",{}),(0,e.jsx)("span",{children:"Target:"}),(0,e.jsx)("span",{children:k.numMoves}),(0,e.jsx)("span",{children:"moves"})]}),B=(0,e.jsx)("div",{children:"ckv1"===a?(0,e.jsxs)("div",{className:"customKeyboardV1",children:[(0,e.jsx)("div",{className:"switchkb",children:(0,e.jsx)("button",{onClick:function(){d("ckv2")},children:"switch keyboard"},"switchbkv1")}),(0,e.jsxs)("div",{className:"ckv1Row1",children:[(0,e.jsx)("span",{onClick:function(){A("Q")},className:"ckv1 Q"}),(0,e.jsx)("span",{onClick:function(){A("W")},className:"ckv1 W"}),(0,e.jsx)("span",{onClick:function(){A("E")},className:"ckv1 E"}),(0,e.jsx)("span",{onClick:function(){A("R")},className:"ckv1 R"}),(0,e.jsx)("span",{onClick:function(){A("T")},className:"ckv1 T"}),(0,e.jsx)("span",{onClick:function(){A("Y")},className:"ckv1 Y"}),(0,e.jsx)("span",{onClick:function(){A("U")},className:"ckv1 U"}),(0,e.jsx)("span",{onClick:function(){A("I")},className:"ckv1 I"}),(0,e.jsx)("span",{onClick:function(){A("O")},className:"ckv1 O"}),(0,e.jsx)("span",{onClick:function(){A("P")},className:"ckv1 P"})]}),(0,e.jsxs)("div",{className:"ckv1Row2",children:[(0,e.jsx)("span",{onClick:function(){A("A")},className:"ckv1 A"}),(0,e.jsx)("span",{onClick:function(){A("S")},className:"ckv1 S"}),(0,e.jsx)("span",{onClick:function(){A("D")},className:"ckv1 D"}),(0,e.jsx)("span",{onClick:function(){A("F")},className:"ckv1 F"}),(0,e.jsx)("span",{onClick:function(){A("G")},className:"ckv1 G"}),(0,e.jsx)("span",{onClick:function(){A("H")},className:"ckv1 H"}),(0,e.jsx)("span",{onClick:function(){A("J")},className:"ckv1 J"}),(0,e.jsx)("span",{onClick:function(){A("K")},className:"ckv1 K"}),(0,e.jsx)("span",{onClick:function(){A("L")},className:"ckv1 L"})]}),(0,e.jsxs)("div",{className:"ckv1Row3",children:[(0,e.jsx)("span",{onClick:function(){A("Z")},className:"ckv1 Z"}),(0,e.jsx)("span",{onClick:function(){A("X")},className:"ckv1 X"}),(0,e.jsx)("span",{onClick:function(){A("C")},className:"ckv1 C"}),(0,e.jsx)("span",{onClick:function(){A("V")},className:"ckv1 V"}),(0,e.jsx)("span",{onClick:function(){A("B")},className:"ckv1 B"}),(0,e.jsx)("span",{onClick:function(){A("N")},className:"ckv1 N"}),(0,e.jsx)("span",{onClick:function(){A("M")},className:"ckv1 M"}),(0,e.jsx)("span",{onClick:function(){v.length>0&&E()},class:"tm_Backspace"})]}),v.length>0&&(0,e.jsx)("div",{className:"tm_KeyGoDiv",children:(0,e.jsx)("button",{onClick:L,className:"tm_KeyGo",children:"SUBMIT WORD"},"keyGo")})]}):"ckv2"===a?(0,e.jsxs)("div",{className:"customKeyboardV2 ",children:[(0,e.jsx)("div",{className:"switchkb",children:(0,e.jsx)("button",{onClick:function(){d("ckv3")},children:"switch keyboard"},"switchbkv2")}),(0,e.jsxs)("div",{className:"ckv2Row1",children:[(0,e.jsx)("span",{onClick:function(){A("Q")},children:"Q"}),(0,e.jsx)("span",{onClick:function(){A("W")},children:"W"}),(0,e.jsx)("span",{onClick:function(){A("E")},children:"E"}),(0,e.jsx)("span",{onClick:function(){A("R")},children:"R"}),(0,e.jsx)("span",{onClick:function(){A("T")},children:"T"}),(0,e.jsx)("span",{onClick:function(){A("Y")},children:"Y"}),(0,e.jsx)("span",{onClick:function(){A("U")},children:"U"}),(0,e.jsx)("span",{onClick:function(){A("I")},children:"I"}),(0,e.jsx)("span",{onClick:function(){A("O")},children:"O"}),(0,e.jsx)("span",{onClick:function(){A("P")},children:"P"})]}),(0,e.jsxs)("div",{className:"ckv2Row2",children:[(0,e.jsx)("span",{onClick:function(){A("A")},children:"A"}),(0,e.jsx)("span",{onClick:function(){A("S")},children:"S"}),(0,e.jsx)("span",{onClick:function(){A("D")},children:"D"}),(0,e.jsx)("span",{onClick:function(){A("F")},children:"F"}),(0,e.jsx)("span",{onClick:function(){A("G")},children:"G"}),(0,e.jsx)("span",{onClick:function(){A("H")},children:"H"}),(0,e.jsx)("span",{onClick:function(){A("J")},children:"J"}),(0,e.jsx)("span",{onClick:function(){A("K")},children:"K"}),(0,e.jsx)("span",{onClick:function(){A("L")},children:"L"})]}),(0,e.jsxs)("div",{className:"ckv2Row3",children:[(0,e.jsx)("span",{onClick:function(){A("Z")},children:"Z"}),(0,e.jsx)("span",{onClick:function(){A("X")},children:"X"}),(0,e.jsx)("span",{onClick:function(){A("C")},children:"C"}),(0,e.jsx)("span",{onClick:function(){A("V")},children:"V"}),(0,e.jsx)("span",{onClick:function(){A("B")},children:"B"}),(0,e.jsx)("span",{onClick:function(){A("N")},children:"N"}),(0,e.jsx)("span",{onClick:function(){A("M")},children:"M"}),(0,e.jsx)("span",{onClick:function(){v.length>0&&E()},class:"tm_Backspace"})]}),v.length>0&&(0,e.jsx)("div",{className:"tm_KeyGoDiv",children:(0,e.jsx)("button",{onClick:L,className:"tm_KeyGo",children:"SUBMIT WORD"},"keyGo")})]}):(0,e.jsxs)("div",{className:"customKeyboardV3",children:[(0,e.jsx)("div",{className:"switchkb",children:(0,e.jsx)("button",{onClick:function(){d("ckv1")},children:"switch keyboard"},"switchbkv3")}),(0,e.jsxs)("div",{className:"ckv3Row1",children:[(0,e.jsx)("span",{onClick:function(){A("Q")},className:"ckv3 Q"}),(0,e.jsx)("span",{onClick:function(){A("W")},className:"ckv3 W"}),(0,e.jsx)("span",{onClick:function(){A("E")},className:"ckv3 E"}),(0,e.jsx)("span",{onClick:function(){A("R")},className:"ckv3 R"}),(0,e.jsx)("span",{onClick:function(){A("T")},className:"ckv3 T"}),(0,e.jsx)("span",{onClick:function(){A("Y")},className:"ckv3 Y"}),(0,e.jsx)("span",{onClick:function(){A("U")},className:"ckv3 U"}),(0,e.jsx)("span",{onClick:function(){A("I")},className:"ckv3 I"}),(0,e.jsx)("span",{onClick:function(){A("O")},className:"ckv3 O"}),(0,e.jsx)("span",{onClick:function(){A("P")},className:"ckv3 P"})]}),(0,e.jsxs)("div",{className:"ckv3Row2",children:[(0,e.jsx)("span",{onClick:function(){A("A")},className:"ckv3 A"}),(0,e.jsx)("span",{onClick:function(){A("S")},className:"ckv3 S"}),(0,e.jsx)("span",{onClick:function(){A("D")},className:"ckv3 D"}),(0,e.jsx)("span",{onClick:function(){A("F")},className:"ckv3 F"}),(0,e.jsx)("span",{onClick:function(){A("G")},className:"ckv3 G"}),(0,e.jsx)("span",{onClick:function(){A("H")},className:"ckv3 H"}),(0,e.jsx)("span",{onClick:function(){A("J")},className:"ckv3 J"}),(0,e.jsx)("span",{onClick:function(){A("K")},className:"ckv3 K"}),(0,e.jsx)("span",{onClick:function(){A("L")},className:"ckv3 L"})]}),(0,e.jsxs)("div",{className:"ckv3Row3",children:[(0,e.jsx)("span",{onClick:function(){A("Z")},className:"ckv3 Z"}),(0,e.jsx)("span",{onClick:function(){A("X")},className:"ckv3 X"}),(0,e.jsx)("span",{onClick:function(){A("C")},className:"ckv3 C"}),(0,e.jsx)("span",{onClick:function(){A("V")},className:"ckv3 V"}),(0,e.jsx)("span",{onClick:function(){A("B")},className:"ckv3 B"}),(0,e.jsx)("span",{onClick:function(){A("N")},className:"ckv3 N"}),(0,e.jsx)("span",{onClick:function(){A("M")},className:"ckv3 M"}),(0,e.jsx)("span",{onClick:function(){v.length>0&&E()},class:"tm_Backspace"})]}),v.length>0&&(0,e.jsx)("div",{className:"tm_KeyGoDiv",children:(0,e.jsx)("button",{onClick:L,className:"tm_KeyGo",children:"SUBMIT WORD"},"keyGo")})]})}),G=(0,e.jsxs)("div",{className:"tm_solutionOuterDiv",children:[(0,e.jsx)("div",{className:"tm_solutionDiv",children:(0,e.jsx)("table",{children:(0,e.jsxs)("tbody",{children:[(0,e.jsx)("tr",{children:(0,e.jsx)("td",{children:k.startWord})}),g.map((function(n,s){return(0,e.jsx)("tr",{children:(0,e.jsx)("td",{children:n})},"userWord".concat(s))})),!y&&(0,e.jsx)("tr",{children:(0,e.jsx)("td",{children:"..."})}),!y&&v.length>0&&(0,e.jsx)("tr",{children:(0,e.jsx)("td",{children:v})}),!y&&(0,e.jsx)("tr",{children:(0,e.jsx)("td",{children:"..."})}),(0,e.jsx)("tr",{children:(0,e.jsx)("td",{children:k.targetWord})})]})})}),y?(0,e.jsxs)("p",{className:"tm_congrats",children:["\ud83d\udc4f\ud83c\udffd Solved in ",g.length+1," moves \ud83d\udc4f\ud83c\udffd"]}):(0,e.jsxs)("div",{children:[B,(0,e.jsxs)("div",{className:"tm_lastbuttons",children:[g.length>0&&(0,e.jsx)("button",{onClick:function(){var n=(0,c.Z)(g);n.pop(),w(n)},"data-toggle":"tooltip",title:"Remove last entered word",children:"UNDO"}),g.length>0&&(0,e.jsx)("button",{onClick:function(){w([]),C("")},"data-toggle":"tooltip",title:"Remove all enter words",children:"RESET"}),(0,e.jsx)("button",{onClick:function(){alert("Valid next word options:\nSwap one letter, e.g. CAT to COT\nDrop one letter, e.g. SWIG to WIG\nInsert one letter, e.g. MAT to MATH, or HIP to WHIP\nAnagram, e.g. ACT to CAT")},"data-toggle":"tooltip",title:"Show instructions",children:"HELP"}),(0,e.jsx)("button",{className:"tm_quit",onClick:function(){Y(!1)},"data-toggle":"tooltip",title:"Quit this puzzle. You can start another.",children:"QUIT"})]})]})]}),K=(0,e.jsxs)("div",{children:[(0,e.jsx)(u.default,{word:k.startWord,showInserts:"Y",showSwaps:"Y",showAnagrams:"Y",showDrops:"Y",removeEntry:function(){},entryIndex:-1},"hint".concat(k.startWord)),g.map((function(n,s){return(0,e.jsx)(u.default,{word:n,showInserts:"Y",showSwaps:"Y",showAnagrams:"Y",showDrops:"Y",removeEntry:function(){!function(n){if(n<g.length){var s=(0,c.Z)(g);s.splice(n),w(s)}}(s)},entryIndex:s+1},"hint".concat(n))})),(0,e.jsx)(u.default,{word:k.targetWord,showInserts:"Y",showSwaps:"Y",showAnagrams:"Y",showDrops:"Y",removeEntry:function(){},entryIndex:-1},"hint".concat(k.targetWord)),(0,e.jsxs)("ul",{className:"trParagraph",children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("span",{className:"insertCount",children:"\xa01\xa0"}),"Shows insert counts/letters"]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("span",{className:"swapCount",children:"\xa02\xa0"}),"Shows swaps counts/letters"]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("span",{className:"anagramCount",children:"3"}),"Shows anagram counts/words"]}),(0,e.jsx)("li",{children:"Click to toggle between count and info"}),(0,e.jsx)("li",{children:"The black dot represents a drop"}),(0,e.jsxs)("li",{children:["Click the ",(0,e.jsx)("span",{className:"closemebutton"})," to remove"]})]})]});return(0,e.jsxs)("div",{className:"trBackground",children:[(0,e.jsxs)("div",{className:"trTitle",children:["Transmogrify",(0,e.jsx)("button",{className:"trButton",onClick:function(){s("menu")},children:(0,e.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),(0,e.jsx)("table",{children:(0,e.jsxs)("tbody",{children:[(y||!W)&&(0,e.jsx)("tr",{children:(0,e.jsx)("td",{children:T})}),k&&k.startWord&&(0,e.jsx)("tr",{children:(0,e.jsx)("td",{children:_})}),k&&k.startWord&&(0,e.jsx)("tr",{children:(0,e.jsx)("td",{children:G})}),k&&k.startWord&&!y&&(0,e.jsx)("tr",{children:(0,e.jsx)("td",{children:K})})]})}),(0,e.jsx)("div",{children:k&&k.notes&&k.notes.length>0&&(0,e.jsx)("div",{className:"trDanger",children:k.notes.map((function(n,s){return(0,e.jsx)("p",{children:n},"note".concat(s))}))})})]})}},7185:function(n,s,t){"use strict";t.r(s);var e=t(5893),c=t(7294);s.default=function(n){var s=n.anagrams,t=void 0===s?["You","should","never","see","this"]:s,a=(0,c.useState)(!0),o=a[0],i=a[1];return o?(0,e.jsx)("span",{className:"anagramCount","data-toggle":"tooltip",title:t,onClick:function(){i(!o)},children:t.length}):(0,e.jsx)("span",{className:"anagramCount","data-toggle":"tooltip",title:t.length,onClick:function(){i(!o)},children:t.join(",")})}},4909:function(n,s,t){"use strict";t.r(s);var e=t(5893),c=t(7294);s.default=function(n){var s=n.insertLetters,t=void 0===s?"":s,a=(0,c.useState)(!0),o=a[0],i=a[1];return""===t?(0,e.jsx)("td",{}):o?(0,e.jsx)("td",{className:"insertCount","data-toggle":"tooltip",title:t,onClick:function(){i(!o)},children:t.length}):(0,e.jsx)("td",{className:"insertCount","data-toggle":"tooltip",title:t.length,onClick:function(){i(!o)},children:t})}},6001:function(n,s,t){"use strict";t.r(s);var e=t(5893),c=t(7294);s.default=function(n){var s=n.swapLetters,t=void 0===s?"":s,a=(0,c.useState)(!0),o=a[0],i=a[1];return""===t?(0,e.jsx)("td",{}):o?(0,e.jsx)("td",{className:"swapCount","data-toggle":"tooltip",title:t,onClick:function(){i(!o)},children:t.length}):(0,e.jsx)("td",{className:"swapCount","data-toggle":"tooltip",title:t.length,onClick:function(){i(!o)},children:t})}},1201:function(n,s,t){"use strict";t.r(s),t.d(s,{default:function(){return h}});var e=t(1385),c=t(5893),a=t(809),o=t.n(a),i=t(2447),r=t(7294),l=t(4909),u=t(6001),d=t(7185);function h(n){var s,t,a=(0,r.useState)([]),h=a[0],x=a[1],j=(0,r.useState)(!1),p=j[0],k=j[1];return(0,r.useEffect)((function(){(function(){var s=(0,i.Z)(o().mark((function s(){var t,e;return o().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return"https://tilerunner.herokuapp.com/ENABLE2K?letters=",s.next=3,fetch("https://tilerunner.herokuapp.com/ENABLE2K?letters="+n.word);case 3:return t=s.sent,s.next=6,t.json();case 6:e=s.sent,x(e),k(!0);case 9:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}})()()}),[]),p?(0,c.jsx)("table",{children:(0,c.jsx)("tbody",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:(0,c.jsx)("table",{className:"trTable",children:(0,c.jsxs)("tbody",{children:["Y"===n.showInserts&&h.inserts.length>0&&(t=h.inserts,(0,c.jsx)("tr",{children:t.map((function(n,s){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.default,{insertLetters:n},"insertsBallon.".concat(s)),(0,c.jsx)("td",{})]})}))},"insertsRow.".concat(n.word))),"Y"===n.showSwaps&&h.swaps.length>0&&function(s){var t=[].concat((0,e.Z)(s),[""]);return(0,c.jsx)("tr",{children:null===t||void 0===t?void 0:t.map((function(s,t){return(0,c.jsxs)(c.Fragment,{children:["N"===n.showInserts||""===h.inserts[t]?(0,c.jsx)("td",{className:"insertCountSpacer"}):(0,c.jsx)("td",{className:"balloonstring",children:"\u27bb"}),(0,c.jsx)(u.default,{swapLetters:s},"swapsBallon.".concat(t))]})}))},"swaps.".concat(n.word))}(h.swaps),function(){var s,t=n.word,e=n.word+"2";return(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{}),null===(s=n.word)||void 0===s?void 0:s.toUpperCase().split("").map((function(n){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("td",{children:n}),(0,c.jsx)("td",{})]})})),(0,c.jsx)("td",{children:"Y"===n.showAnagrams&&h.anagrams.length>0&&(0,c.jsx)("span",{children:(0,c.jsx)(d.default,{anagrams:h.anagrams})},h.anagrams)},t),(0,c.jsx)("td",{children:"Y"!==h.valid&&(0,c.jsx)("span",{className:"trDanger",children:"Invalid word"})},e)]},"word.".concat(n.word))}(),"Y"===n.showDrops&&h.drops.length>0&&(s=h.drops,(0,c.jsx)("tr",{className:"dropRow",children:s.map((function(n){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("td",{}),"Y"===n?(0,c.jsx)("td",{className:"dropIndicator","data-toggle":"tooltip",title:"You can drop this letter",children:"\u2022"}):(0,c.jsx)("td",{})]})}))},"drops.".concat(n.word)))]})})}),n.entryIndex>-1&&(0,c.jsx)("td",{className:"closeme",children:(0,c.jsx)("button",{className:"closemebutton",onClick:function(){return n.removeEntry(n.entryIndex)}})})]})})}):(0,c.jsx)("div",{className:"trEmphasis",children:"Loading ..."})}},2447:function(n,s,t){"use strict";function e(n,s,t,e,c,a,o){try{var i=n[a](o),r=i.value}catch(l){return void t(l)}i.done?s(r):Promise.resolve(r).then(e,c)}function c(n){return function(){var s=this,t=arguments;return new Promise((function(c,a){var o=n.apply(s,t);function i(n){e(o,c,a,i,r,"next",n)}function r(n){e(o,c,a,i,r,"throw",n)}i(void 0)}))}}t.d(s,{Z:function(){return c}})}}]);