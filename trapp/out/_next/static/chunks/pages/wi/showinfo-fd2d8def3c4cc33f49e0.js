_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"+Wsf":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var r=n("nKUr"),c=n("aNi4"),s=n("45TN"),a=n("FQXH");function i(t){return Object(r.jsx)("html",{children:Object(r.jsx)("body",{className:"wibody",children:Object(r.jsx)("table",{children:Object(r.jsx)("tr",{children:Object(r.jsx)("td",{children:Object(r.jsxs)("table",{children:["Y"===t.showInserts?function(t){return Object(r.jsx)("tr",{children:t.map((function(t){return Object(r.jsxs)(r.Fragment,{children:[""===t?Object(r.jsx)("td",{}):Object(r.jsx)("td",{class:"insertCount","data-toggle":"tooltip",title:t.split(":")[1],children:t.split(":")[0]}),Object(r.jsx)("td",{})]})}))})}(["","","1:A","","","","","1:S"]):Object(r.jsx)(r.Fragment,{}),"Y"===t.showSwaps?Object(r.jsx)(c.default,{word:t.word},t.word):Object(r.jsx)(r.Fragment,{}),function(n){var c=n,i=n+"2";return Object(r.jsxs)("tr",{className:"displayWordRow",children:[Object(r.jsx)("td",{width:"5px"}),null===n||void 0===n?void 0:n.split("").map((function(t,n){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("td",{className:"letter",children:t}),Object(r.jsx)("td",{className:"facevalue",children:Object(r.jsx)("sub",{children:e(t)})})]})})),Object(r.jsx)("td",{children:"Y"===t.showAnagrams?Object(r.jsx)(s.default,{word:n}):Object(r.jsx)(r.Fragment,{})},c),Object(r.jsx)("td",{children:Object(r.jsx)(a.default,{word:n})},i)]})}(t.word),"Y"===t.showDrops?function(t){return Object(r.jsx)("tr",{children:t.map((function(t){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("td",{}),1===t?Object(r.jsx)("td",{class:"dropIndicator",children:"\u2022"}):Object(r.jsx)("td",{})]})}))})}([1,0,0,0,0,0,0]):Object(r.jsx)(r.Fragment,{}),Object(r.jsx)("tr",{className:"divider",children:Object(r.jsx)("td",{children:"\xa0"})})]})})})})})});function e(t){switch(t){case"D":case"G":return 2;case"B":case"C":case"M":case"P":return 3;case"F":case"H":case"V":case"W":case"Y":return 4;case"K":return 5;case"J":case"X":return 8;case"Q":case"Z":return 10}return 1}}},"45TN":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var r=n("nKUr"),c=n("o0o1"),s=n.n(c),a=n("HaE+"),i=n("q1tI");function o(t){var e=Object(i.useState)([]),n=e[0],c=e[1];return Object(i.useEffect)((function(){(function(){var e=Object(a.a)(s.a.mark((function e(){var n,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://words-scrabble.herokuapp.com/api/anagrams/"+t.word);case 2:return n=e.sent,e.next=5,n.text();case 5:r=e.sent,a=JSON.parse(r),c(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsx)("span",{children:0===n.length?Object(r.jsx)(r.Fragment,{}):Object(r.jsx)("span",{class:"anagramCount","data-toggle":"tooltip",title:n,children:n.length})},n)}},Bj2B:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wi/showinfo",function(){return n("+Wsf")}])},FQXH:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var r=n("nKUr"),c=n("o0o1"),s=n.n(c),a=n("HaE+"),i=n("q1tI");function o(t){var e=Object(i.useState)(["Checking validity ..."]),n=e[0],c=e[1];return Object(i.useEffect)((function(){(function(){var e=Object(a.a)(s.a.mark((function e(){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://words-scrabble.herokuapp.com/api/valid/"+t.word);case 2:return n=e.sent,e.next=5,n.text();case 5:r=e.sent,c([r]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsx)("p",{children:"Y"===n[0]?Object(r.jsx)("span",{className:"wordIsValid",children:"Valid word"}):"N"===n[0]?Object(r.jsx)("span",{className:"wordIsNotValid",children:"Not a recognized word"}):n[0]},t.word)}},"HaE+":function(t,e,n){"use strict";function r(t,e,n,r,c,s,a){try{var i=t[s](a),o=i.value}catch(u){return void n(u)}i.done?e(o):Promise.resolve(o).then(r,c)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(c,s){var a=t.apply(e,n);function i(t){r(a,c,s,i,o,"next",t)}function o(t){r(a,c,s,i,o,"throw",t)}i(void 0)}))}}n.d(e,"a",(function(){return c}))},aNi4:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var r=n("nKUr"),c=n("o0o1"),s=n.n(c),a=n("HaE+"),i=n("q1tI");function o(t){var e=Object(i.useState)(),n=e[0],c=e[1];return Object(i.useEffect)((function(){(function(){var e=Object(a.a)(s.a.mark((function e(){var n,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://words-scrabble.herokuapp.com/api/swaps/"+t.word);case 2:return n=e.sent,e.next=5,n.text();case 5:r=e.sent,a=JSON.parse(r),c(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsx)("tr",{children:null===n||void 0===n?void 0:n.map((function(t,e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("td",{}),""===t?Object(r.jsx)("td",{}):Object(r.jsx)("td",{class:"swapCount","data-toggle":"tooltip",title:t,children:t.length})]})}))},t.word)}}},[["Bj2B",0,2,1]]]);