(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8798],{6021:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wi/wordinfo",function(){return e(2386)}])},1351:function(t,n,e){"use strict";e.r(n);var r=e(5893),a=e(7294);n.default=function(t){var n=t.anagrams,e=void 0===n?["You","should","never","see","this"]:n,o=(0,a.useState)(!0),s=o[0],i=o[1];return s?(0,r.jsx)("span",{className:"anagramCount","data-toggle":"tooltip",title:e,onClick:function(){i(!s)},children:e.length}):(0,r.jsx)("span",{className:"anagramCount","data-toggle":"tooltip",title:e.length,onClick:function(){i(!s)},children:e.join(",")})}},7153:function(t,n,e){"use strict";e.r(n);var r=e(5893),a=e(7294);n.default=function(t){var n=t.insertLetters,e=void 0===n?"":n,o=(0,a.useState)(!0),s=o[0],i=o[1];return""===e?(0,r.jsx)("td",{}):s?(0,r.jsx)("td",{className:"insertCount","data-toggle":"tooltip",title:e,onClick:function(){i(!s)},children:e.length}):(0,r.jsx)("td",{className:"insertCount","data-toggle":"tooltip",title:e.length,onClick:function(){i(!s)},children:e})}},753:function(t,n,e){"use strict";e.r(n);var r=e(5893),a=e(7294);n.default=function(t){var n=t.swapLetters,e=void 0===n?"":n,o=(0,a.useState)(!0),s=o[0],i=o[1];return""===e?(0,r.jsx)("td",{}):s?(0,r.jsx)("td",{className:"swapCount","data-toggle":"tooltip",title:e,onClick:function(){i(!s)},children:e.length}):(0,r.jsx)("td",{className:"swapCount","data-toggle":"tooltip",title:e.length,onClick:function(){i(!s)},children:e})}},7833:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return h}});var r=e(4051),a=e.n(r),o=e(5893),s=e(7294),i=e(7153),c=e(753),l=e(1351);function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function d(t,n,e,r,a,o,s){try{var i=t[o](s),c=i.value}catch(l){return void e(l)}i.done?n(c):Promise.resolve(c).then(r,a)}function f(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"===typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t){var n,e,r=(0,s.useState)([]),u=r[0],h=r[1],p=(0,s.useState)(!1),m=p[0],x=p[1];return(0,s.useEffect)((function(){var n=function(){var n,e=(n=a().mark((function n(){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,fetch("https://tilerunner.herokuapp.com/ENABLE2K?letters="+t.word);case 3:return e=n.sent,n.next=6,e.json();case 6:r=n.sent,h(r),x(!0);case 9:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,a){var o=n.apply(t,e);function s(t){d(o,r,a,s,i,"next",t)}function i(t){d(o,r,a,s,i,"throw",t)}s(void 0)}))});return function(){return e.apply(this,arguments)}}();n()}),[]),m?(0,o.jsx)("table",{children:(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("table",{className:"trTable",children:(0,o.jsxs)("tbody",{children:["Y"===t.showInserts&&u.inserts.length>0&&(e=u.inserts,(0,o.jsx)("tr",{children:e.map((function(t,n){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.default,{insertLetters:t},"insertsBallon.".concat(n)),(0,o.jsx)("td",{})]})}))},"insertsRow.".concat(t.word))),"Y"===t.showSwaps&&u.swaps.length>0&&function(n){var e=f(n).concat([""]);return(0,o.jsx)("tr",{children:null===e||void 0===e?void 0:e.map((function(n,e){return(0,o.jsxs)(o.Fragment,{children:["N"===t.showInserts||""===u.inserts[e]?(0,o.jsx)("td",{className:"insertCountSpacer"}):(0,o.jsx)("td",{className:"balloonstring",children:"\u27bb"}),(0,o.jsx)(c.default,{swapLetters:n},"swapsBallon.".concat(e))]})}))},"swaps.".concat(t.word))}(u.swaps),function(){var n,e=t.word,r=t.word+"2";return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{}),null===(n=t.word)||void 0===n?void 0:n.toUpperCase().split("").map((function(t){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("td",{children:t}),(0,o.jsx)("td",{})]})})),(0,o.jsx)("td",{children:"Y"===t.showAnagrams&&u.anagrams.length>0&&(0,o.jsx)("span",{children:(0,o.jsx)(l.default,{anagrams:u.anagrams})},u.anagrams)},e),(0,o.jsx)("td",{children:"Y"!==u.valid&&(0,o.jsx)("span",{className:"trDanger",children:"Invalid word"})},r)]},"word.".concat(t.word))}(),"Y"===t.showDrops&&u.drops.length>0&&(n=u.drops,(0,o.jsx)("tr",{className:"dropRow",children:n.map((function(t){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("td",{}),"Y"===t?(0,o.jsx)("td",{className:"dropIndicator","data-toggle":"tooltip",title:"You can drop this letter",children:"\u2022"}):(0,o.jsx)("td",{})]})}))},"drops.".concat(t.word)))]})})}),t.entryIndex>-1&&(0,o.jsx)("td",{className:"closeme",children:(0,o.jsx)("button",{className:"closemebutton",onClick:function(){return t.removeEntry(t.entryIndex)}})})]})})}):(0,o.jsx)("div",{className:"trEmphasis",children:"Loading ..."})}},2386:function(t,n,e){"use strict";e.r(n);var r=e(5893),a=e(7294),o=e(7833);function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function i(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"===typeof t)return s(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=function(t){var n=t.setWhereto,e=function(t){var n=JSON.parse(JSON.stringify(d));n.splice(t,1),f(n)},s=(0,a.useState)(""),c=s[0],l=s[1],u=(0,a.useState)([]),d=u[0],f=u[1];return(0,r.jsxs)("div",{className:"trBackground",children:[(0,r.jsxs)("div",{className:"trTitle",children:["Word Info",(0,r.jsx)("button",{className:"trButton",onClick:function(){n("menu")},children:(0,r.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),(0,r.jsxs)("div",{className:"trParagraph",children:[(0,r.jsx)("label",{children:"Word:\xa0"}),(0,r.jsx)("input",{name:"word",value:c,onChange:function(t){l(t.target.value)}}),(0,r.jsx)("label",{children:"\xa0"}),(0,r.jsx)("button",{id:"acceptWord",className:"trButton",onClick:function(){f([c].concat(i(d))),l("")},children:"Get Word Info"}),(0,r.jsx)("label",{children:"\xa0"}),(0,r.jsx)("button",{id:"acceptAlphagram",className:"trButton",onClick:function(){fetch("https://tilerunner.herokuapp.com/ENABLE2K?letters="+c).then((function(t){return t.text()})).then((function(t){var n=JSON.parse(t),e=[];n.anagrams.map((function(t){e=i(e).concat([t])})),n.valid&&e.push(c.toUpperCase()),e.sort(),l(""),f(i(e).concat(i(d)))}))},children:"Get Anagrams"}),(0,r.jsx)("label",{children:"\xa0"}),(0,r.jsx)("button",{id:"acceptRegex",className:"trButton",onClick:function(){fetch("https://tilerunner.herokuapp.com/ENABLE2K?regex="+c.toLocaleLowerCase()).then((function(t){return t.text()})).then((function(t){var n=JSON.parse(t);l("");var e=[];n.regexmatches.map((function(t){e=i(e).concat([t])})),f(i(e).concat(i(d))),n.count>50&&alert("Too many results, only 50 taken")}))},children:"Get Regex Matches"}),(0,r.jsx)("label",{children:"\xa0"}),!1]}),d.map((function(t,n){return""===t?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(o.default,{word:t,showInserts:"Y",showSwaps:"Y",showAnagrams:"Y",showDrops:"Y",removeEntry:e,entryIndex:n},"".concat(d.length-n,".").concat(t))}))]})}}},function(t){t.O(0,[9774,2888,179],(function(){return n=6021,t(t.s=n);var n}));var n=t.O();_N_E=n}]);