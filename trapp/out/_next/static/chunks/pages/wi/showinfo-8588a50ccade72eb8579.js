_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"+Wsf":function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return d}));var n=r("KQm4"),s=r("nKUr"),c=r("o0o1"),a=r.n(c);function o(t,e,r,n,s,c,a){try{var o=t[c](a),i=o.value}catch(d){return void r(d)}o.done?e(i):Promise.resolve(i).then(n,s)}var i=r("q1tI");function d(t){var e,r,c=Object(i.useState)([]),d=c[0],l=c[1],j=Object(i.useState)(!1),u=j[0],b=j[1];return console.log("NODE_ENV=production"),Object(i.useEffect)((function(){(function(){var e,r=(e=a.a.mark((function e(){var r,n,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch("https://words-scrabble.herokuapp.com/api/info/"+t.word);case 3:return r=e.sent,e.next=6,r.text();case 6:n=e.sent,console.log("data="+n),s=JSON.parse(n),l(s),b(!0);case 11:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,s){var c=e.apply(t,r);function a(t){o(c,n,s,a,i,"next",t)}function i(t){o(c,n,s,a,i,"throw",t)}a(void 0)}))});return function(){return r.apply(this,arguments)}})()()}),[]),Object(s.jsx)("html",{children:Object(s.jsx)("body",{className:"wibody",children:u?Object(s.jsx)("table",{children:Object(s.jsx)("tr",{children:Object(s.jsx)("td",{children:Object(s.jsxs)("table",{children:["Y"===t.showInserts?(r=d.inserts,Object(s.jsx)("tr",{children:r.map((function(t){return Object(s.jsxs)(s.Fragment,{children:[""===t?Object(s.jsx)("td",{}):Object(s.jsx)("td",{className:"insertCount","data-toggle":"tooltip",title:t,children:t.length}),Object(s.jsx)("td",{})]})}))},t.word)):Object(s.jsx)(s.Fragment,{}),"Y"===t.showSwaps?function(){var e=[].concat(Object(n.a)(d.swaps),[""]);return Object(s.jsx)("tr",{children:null===e||void 0===e?void 0:e.map((function(e,r){return Object(s.jsxs)(s.Fragment,{children:["N"===t.showInserts||""===d.inserts[r]?Object(s.jsx)("td",{className:"insertCountSpacer"}):Object(s.jsx)("td",{className:"balloonstring",children:"\u27bb"}),""===e?Object(s.jsx)("td",{}):Object(s.jsx)("td",{className:"swapCount","data-toggle":"tooltip",title:e,children:e.length})]})}))},t.word)}():Object(s.jsx)(s.Fragment,{}),function(){var e,r=t.word,n=t.word+"2";return Object(s.jsxs)("tr",{className:"displayWordRow",children:[Object(s.jsx)("td",{className:"insertCountSpacer"}),null===(e=t.word)||void 0===e?void 0:e.split("").map((function(t,e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("td",{className:"Y"===d.valid?"letter":"letterInvalidWord",children:t}),Object(s.jsx)("td",{className:"facevalue",children:Object(s.jsx)("sub",{children:h(t)})})]})})),Object(s.jsx)("td",{children:"Y"===t.showAnagrams?Object(s.jsx)("span",{children:0===d.anagrams.length?Object(s.jsx)(s.Fragment,{}):Object(s.jsx)("span",{className:"anagramCount","data-toggle":"tooltip",title:d.anagrams,children:d.anagrams.length})},d.anagrams):Object(s.jsx)(s.Fragment,{})},r),Object(s.jsx)("td",{children:"Y"===d.valid?Object(s.jsx)("span",{className:"wordIsValid",children:"Valid word"}):Object(s.jsx)("span",{className:"wordIsNotValid",children:"Not a recognized word"})},n)]})}(),"Y"===t.showDrops?(e=d.drops,Object(s.jsx)("tr",{className:"dropRow",children:e.map((function(t){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("td",{}),"Y"===t?Object(s.jsx)("td",{className:"dropIndicator","data-toggle":"tooltip",title:"You can drop this letter",children:"\u2022"}):Object(s.jsx)("td",{})]})}))},t.word)):Object(s.jsx)(s.Fragment,{}),Object(s.jsx)("tr",{className:"divider",children:Object(s.jsx)("td",{colSpan:t.word.length+t.word.length+3,children:"\xa0"})})]})})})}):Object(s.jsx)("p",{children:"Loading ..."})})});function h(t){switch(t){case"D":case"G":return 2;case"B":case"C":case"M":case"P":return 3;case"F":case"H":case"V":case"W":case"Y":return 4;case"K":return 5;case"J":case"X":return 8;case"Q":case"Z":return 10}return 1}}},Bj2B:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wi/showinfo",function(){return r("+Wsf")}])},KQm4:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return s}))}},[["Bj2B",0,2,1]]]);