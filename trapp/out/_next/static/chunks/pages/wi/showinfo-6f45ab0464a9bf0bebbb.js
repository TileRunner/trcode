_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"+Wsf":function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return d}));var n=r("KQm4"),c=r("nKUr"),s=r("o0o1"),a=r.n(s),o=r("HaE+"),i=r("q1tI");function d(t){var e,r,s=Object(i.useState)([]),d=s[0],l=s[1],j=Object(i.useState)(!1),u=j[0],b=j[1];return Object(i.useEffect)((function(){(function(){var e=Object(o.a)(a.a.mark((function e(){var r,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://words-scrabble.herokuapp.com/api/info/",e.next=3,fetch("https://words-scrabble.herokuapp.com/api/info/"+t.word);case 3:return r=e.sent,e.next=6,r.text();case 6:n=e.sent,c=JSON.parse(n),l(c),b(!0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsx)("html",{children:Object(c.jsx)("body",{className:"wibody",children:u?Object(c.jsx)("table",{children:Object(c.jsx)("tr",{children:Object(c.jsx)("td",{children:Object(c.jsxs)("table",{children:["Y"===t.showInserts?(r=d.inserts,Object(c.jsx)("tr",{children:r.map((function(t){return Object(c.jsxs)(c.Fragment,{children:[""===t?Object(c.jsx)("td",{}):Object(c.jsx)("td",{className:"insertCount","data-toggle":"tooltip",title:t,children:t.length}),Object(c.jsx)("td",{})]})}))},t.word)):Object(c.jsx)(c.Fragment,{}),"Y"===t.showSwaps?function(){var e=[].concat(Object(n.a)(d.swaps),[""]);return Object(c.jsx)("tr",{children:null===e||void 0===e?void 0:e.map((function(e,r){return Object(c.jsxs)(c.Fragment,{children:["N"===t.showInserts||""===d.inserts[r]?Object(c.jsx)("td",{className:"insertCountSpacer"}):Object(c.jsx)("td",{className:"balloonstring",children:"\u27bb"}),""===e?Object(c.jsx)("td",{}):Object(c.jsx)("td",{className:"swapCount","data-toggle":"tooltip",title:e,children:e.length})]})}))},t.word)}():Object(c.jsx)(c.Fragment,{}),function(){var e,r=t.word,n=t.word+"2";return Object(c.jsxs)("tr",{className:"displayWordRow",children:[Object(c.jsx)("td",{className:"insertCountSpacer"}),null===(e=t.word)||void 0===e?void 0:e.split("").map((function(t,e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("td",{className:"Y"===d.valid?"letter":"letterInvalidWord",children:t}),Object(c.jsx)("td",{className:"facevalue",children:Object(c.jsx)("sub",{children:h(t)})})]})})),Object(c.jsx)("td",{children:"Y"===t.showAnagrams?Object(c.jsx)("span",{children:0===d.anagrams.length?Object(c.jsx)(c.Fragment,{}):Object(c.jsx)("span",{className:"anagramCount","data-toggle":"tooltip",title:d.anagrams,children:d.anagrams.length})},d.anagrams):Object(c.jsx)(c.Fragment,{})},r),Object(c.jsx)("td",{children:"Y"===d.valid?Object(c.jsx)("span",{className:"wordIsValid",children:"Valid word"}):Object(c.jsx)("span",{className:"wordIsNotValid",children:"Not a recognized word"})},n)]})}(),"Y"===t.showDrops?(e=d.drops,Object(c.jsx)("tr",{className:"dropRow",children:e.map((function(t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("td",{}),"Y"===t?Object(c.jsx)("td",{className:"dropIndicator","data-toggle":"tooltip",title:"You can drop this letter",children:"\u2022"}):Object(c.jsx)("td",{})]})}))},t.word)):Object(c.jsx)(c.Fragment,{}),Object(c.jsx)("tr",{className:"divider",children:Object(c.jsx)("td",{colSpan:t.word.length+t.word.length+3,children:"\xa0"})})]})})})}):Object(c.jsx)("p",{children:"Loading ..."})})});function h(t){switch(t){case"D":case"G":return 2;case"B":case"C":case"M":case"P":return 3;case"F":case"H":case"V":case"W":case"Y":return 4;case"K":return 5;case"J":case"X":return 8;case"Q":case"Z":return 10}return 1}}},Bj2B:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wi/showinfo",function(){return r("+Wsf")}])},"HaE+":function(t,e,r){"use strict";function n(t,e,r,n,c,s,a){try{var o=t[s](a),i=o.value}catch(d){return void r(d)}o.done?e(i):Promise.resolve(i).then(n,c)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(c,s){var a=t.apply(e,r);function o(t){n(a,c,s,o,i,"next",t)}function i(t){n(a,c,s,o,i,"throw",t)}o(void 0)}))}}r.d(e,"a",(function(){return c}))},KQm4:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return c}))}},[["Bj2B",0,1,2]]]);