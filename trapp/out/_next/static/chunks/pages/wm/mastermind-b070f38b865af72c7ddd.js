(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224],{1201:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(1385),s=n(5893),a=n(809),l=n.n(a),c=n(2447),i=n(7294);function o(e){var t,n,a=(0,i.useState)([]),o=a[0],d=a[1],u=(0,i.useState)(!1),h=u[0],m=u[1];return(0,i.useEffect)((function(){(function(){var t=(0,c.Z)(l().mark((function t(){var n,r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://tilerunner.herokuapp.com/ENABLE2K?letters=",t.next=3,fetch("https://tilerunner.herokuapp.com/ENABLE2K?letters="+e.word);case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,console.log("swaps=".concat(JSON.stringify(r.swaps))),d(r),m(!0);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),(0,s.jsx)("div",{className:"wibody",children:h?(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:["Y"===e.showInserts&&o.inserts.length>0&&(n=o.inserts,(0,s.jsx)("tr",{children:n.map((function(e){return(0,s.jsxs)(s.Fragment,{children:[""===e?(0,s.jsx)("td",{}):(0,s.jsx)("td",{className:"insertCount","data-toggle":"tooltip",title:e,children:e.length}),(0,s.jsx)("td",{})]})}))},"inserts.".concat(e.word))),"Y"===e.showSwaps&&o.swaps.length>0&&function(t){var n=[].concat((0,r.Z)(t),[""]);return(0,s.jsx)("tr",{children:null===n||void 0===n?void 0:n.map((function(t,n){return(0,s.jsxs)(s.Fragment,{children:["N"===e.showInserts||""===o.inserts[n]?(0,s.jsx)("td",{className:"insertCountSpacer"}):(0,s.jsx)("td",{className:"balloonstring",children:"\u27bb"}),""===t?(0,s.jsx)("td",{}):(0,s.jsx)("td",{className:"swapCount","data-toggle":"tooltip",title:t,children:t.length})]})}))},"swaps.".concat(e.word))}(o.swaps),function(){var t,n=e.word,r=e.word+"2";return(0,s.jsxs)("tr",{className:"displayWordRow",children:[(0,s.jsx)("td",{className:"insertCountSpacer"}),null===(t=e.word)||void 0===t?void 0:t.toUpperCase().split("").map((function(e,t){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("td",{className:o.valid?"letter":"letterInvalidWord",children:e}),(0,s.jsx)("td",{className:"facevalue",children:(0,s.jsx)("sub",{children:f(e)})})]})})),(0,s.jsx)("td",{children:"Y"===e.showAnagrams&&(0,s.jsx)("span",{children:o.anagrams.length>0&&(0,s.jsx)("span",{className:"anagramCount","data-toggle":"tooltip",title:o.anagrams,children:o.anagrams.length})},o.anagrams)},n),(0,s.jsx)("td",{children:"Y"===o.valid?(0,s.jsx)("span",{className:"wordIsValid",children:"Valid word"}):(0,s.jsx)("span",{className:"wordIsNotValid",children:"Not a recognized word"})},r)]},"word.".concat(e.word))}(),"Y"===e.showDrops&&o.drops.length>0&&(t=o.drops,(0,s.jsx)("tr",{className:"dropRow",children:t.map((function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("td",{}),"Y"===e?(0,s.jsx)("td",{className:"dropIndicator","data-toggle":"tooltip",title:"You can drop this letter",children:"\u2022"}):(0,s.jsx)("td",{})]})}))},"drops.".concat(e.word))),(0,s.jsx)("tr",{className:"divider",children:(0,s.jsx)("td",{colSpan:e.word.length+e.word.length+3,children:"\xa0"})})]})}):(0,s.jsx)("p",{children:"Loading ..."})});function f(e){switch(e){case"D":case"G":return 2;case"B":case"C":case"M":case"P":return 3;case"F":case"H":case"V":case"W":case"Y":return 4;case"K":return 5;case"J":case"X":return 8;case"Q":case"Z":return 10}return 1}}},6522:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(1385),s=n(5893),a=n(7294),l=n(1664),c=n(1201),i=n(9359);function o(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,s=function(){};return{s:s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw a}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){return(0,s.jsx)(h,{})}function h(){var e=(0,a.useState)([]),t=e[0],n=e[1],d=(0,a.useState)(0),u=d[0],h=d[1],m=(0,a.useState)(""),f=m[0],p=m[1],j=(0,a.useState)(""),x=j[0],g=j[1],w=(0,a.useState)(""),N=w[0],v=w[1],y=(0,a.useState)([]),b=y[0],S=y[1],A=(0,a.useState)(!1),C=A[0],E=A[1],I=(0,s.jsxs)("table",{className:"Guesstable",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"wmth",children:"Guess"}),(0,s.jsx)("th",{className:"wmth",children:"Correct Letter"}),(0,s.jsx)("th",{className:"wmth",children:"Correct Position"})]})}),(0,s.jsx)("tbody",{children:b.map((function(e){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"wmtd",children:e}),(0,s.jsx)("td",{className:"wmtd AlignCenter",children:Y(e)}),(0,s.jsx)("td",{className:"wmtd AlignCenter",children:k(e)})]})}))})]}),O=(0,s.jsxs)("div",{className:"form-group",children:[0===b.length?(0,s.jsx)("label",{className:"wmlabel",children:"First guess:"}):(0,s.jsx)("label",{className:"wmlabel",children:"Next guess:"}),(0,s.jsx)("input",{className:"form-control",name:"guess",value:N,onChange:function(e){var s=e.target.value.toUpperCase().replace(/\W/g,"");if(s.length===f.length){var a=u+1;h(a),S([s].concat((0,r.Z)(b))),v(""),s===f&&(E(!0),8===f.length&&n([].concat((0,r.Z)(t),[a])))}else v(s)}})]}),_=(0,s.jsxs)("div",{children:[(0,s.jsxs)("h2",{className:"wmh2",children:["Solved in ",b.length," moves!"]}),(0,s.jsx)("button",{className:"wmbutton",onClick:function(){L(),v(""),S([]),E(!1)},children:8===f.length?"Start Another Set!":"Start Next Word"})]});return(0,s.jsx)("div",{className:"Mastermind",children:(0,s.jsxs)("div",{className:"container-fluid",children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-11 wmtitle",children:["Word Mastermind",(0,s.jsx)("span",{className:"material-icons",children:"psychology"})]}),(0,s.jsx)("div",{className:"col-1 wmhomelink",children:(0,s.jsx)(l.default,{href:"../../",children:(0,s.jsx)("a",{children:(0,s.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})})})]}),(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-11",children:(0,s.jsx)("p",{className:"wmp",children:"Cycle through 2-8 letter words per set."})})}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-lg-8",children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-lg-6",children:(0,s.jsxs)("div",{className:"Outertable",children:[(0,s.jsxs)("h3",{className:"wmh3 AlignLeft",children:["Guesses this word: ",b.length]}),(0,s.jsxs)("h3",{className:"wmh3 AlignLeft",children:["Guesses this set: ",u]}),0===t.length?(0,s.jsx)("p",{className:"AlignLeft",children:"No completed sets yet"}):(0,s.jsxs)("p",{className:"AlignLeft",children:["Guesses for completed sets: ",t.map((function(e){return(0,s.jsxs)("span",{children:[e," "]},e.toString())}))]})]})}),(0,s.jsx)("div",{className:"col-lg-6",children:(0,s.jsxs)("div",{className:"Outertable",children:[""===f?L():"",(0,s.jsxs)("h3",{className:"wmh3",children:["Secret Word: ",C?f:x]}),""===f?(0,s.jsx)("h1",{className:"wmh1",children:"Loading ..."}):C?_:O,C?(0,s.jsx)("br",{}):0===b.length?(0,s.jsx)("p",{className:"wmp",children:"Start guessing"}):(0,s.jsx)("p",{className:"wmp",children:"Keep guessing"})]})})]}),(0,s.jsx)(i.I3,{children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-lg-12",children:b.map((function(e,t){return(0,s.jsx)(c.default,{word:e,showInserts:"N",showSwaps:"Y",showAnagrams:"Y",showDrops:"N"},"".concat(b.length-t,".").concat(e))}))})})})]}),(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsx)("div",{className:"Outertable",children:0===b.length?(0,s.jsx)("p",{children:"No guesses yet"}):I})})]})]})});function L(){var e=f?f.length<2||f.length>7?2:f.length+1:2;2===e&&0!==u&&h(0);var t="https://tilerunner.herokuapp.com/ENABLE2K?random="+e.toString();fetch(t).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e).toUpperCase();p(t),g(t.split("").map((function(){return"*"})))}))}function Y(e){var t,n=0,r=o("ABCDEFGHIJKLMNOPQRSTUVWXYZ");try{for(r.s();!(t=r.n()).done;){var s=t.value,a=f.split(s).length-1,l=e.split(s).length-1;n+=a<l?a:l}}catch(c){r.e(c)}finally{r.f()}return n}function k(e){for(var t=0,n=0;n<f.length;++n)t+=f[n]===e[n]?1:0;return t}}},8802:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wm/mastermind",function(){return n(6522)}])},1385:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return s}})}},function(e){e.O(0,[472,774,888,179],(function(){return t=8802,e(e.s=t);var t}));var t=e.O();_N_E=t}]);