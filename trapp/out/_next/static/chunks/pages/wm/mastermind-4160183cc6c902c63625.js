(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224],{1201:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893),s=r(809),a=r.n(s),c=r(2447),l=r(7294);function i(e){var t,r,s,i,o=(0,l.useState)([]),d=o[0],u=o[1],h=(0,l.useState)(!1),m=h[0],f=h[1];return(0,l.useEffect)((function(){(function(){var t=(0,c.Z)(a().mark((function t(){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://tilerunner.herokuapp.com/ENABLE2K?letters=",t.next=3,fetch("https://tilerunner.herokuapp.com/ENABLE2K?letters="+e.word);case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,u(n),f(!0);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),(0,n.jsx)("div",{className:"wibody",children:m?(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[function(){var t;return(0,n.jsx)("tr",{className:"displayWordRow",children:(0,n.jsxs)("td",{children:[null===(t=e.word)||void 0===t?void 0:t.split("").map((function(e,t){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:d.valid?"letter":"letterInvalidWord",children:e}),(0,n.jsx)("span",{className:"facevalue",children:(0,n.jsx)("sub",{children:p(e)})})]})})),d.valid?(0,n.jsx)("span",{className:"wordIsValid",children:"Valid word"}):(0,n.jsx)("span",{className:"wordIsNotValid",children:"Not a recognized word"})]})},"word.".concat(e.word))}(),"Y"===e.showSwaps&&d.swaps.length>0&&(i=d.swaps,(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:"Swaps: ".concat(i)})},"swaps.".concat(e.word))),"Y"===e.showAnagrams&&d.anagrams.length>0&&(s=d.anagrams,(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:"Anagrams: ".concat(s)})},"anagrams.".concat(e.word))),"Y"===e.showDrops&&d.drops.length>0&&(r=d.drops,(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:"Drops: ".concat(r)})},"drops.".concat(e.word))),"Y"===e.showInserts&&d.inserts.length>0&&(t=d.inserts,(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:"Inserts: ".concat(t)})},"inserts.".concat(e.word))),(0,n.jsx)("tr",{className:"divider",children:(0,n.jsx)("td",{colSpan:e.word.length+e.word.length+3,children:"\xa0"})})]})}):(0,n.jsx)("p",{children:"Loading ..."})});function p(e){switch(e){case"D":case"G":return 2;case"B":case"C":case"M":case"P":return 3;case"F":case"H":case"V":case"W":case"Y":return 4;case"K":return 5;case"J":case"X":return 8;case"Q":case"Z":return 10}return 1}}},6522:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(1385),s=r(5893),a=r(7294),c=r(1664),l=r(1201),i=r(9359);function o(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,s=function(){};return{s:s,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw a}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){return(0,s.jsx)(h,{})}function h(){var e=(0,a.useState)([]),t=e[0],r=e[1],d=(0,a.useState)(0),u=d[0],h=d[1],m=(0,a.useState)(""),f=m[0],p=m[1],j=(0,a.useState)(""),x=j[0],w=j[1],g=(0,a.useState)(""),N=g[0],v=g[1],y=(0,a.useState)([]),b=y[0],S=y[1],A=(0,a.useState)(!1),C=A[0],I=A[1],E=(0,s.jsxs)("table",{className:"Guesstable",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"wmth",children:"Guess"}),(0,s.jsx)("th",{className:"wmth",children:"Correct Letter"}),(0,s.jsx)("th",{className:"wmth",children:"Correct Position"})]})}),(0,s.jsx)("tbody",{children:b.map((function(e){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"wmtd",children:e}),(0,s.jsx)("td",{className:"wmtd AlignCenter",children:L(e)}),(0,s.jsx)("td",{className:"wmtd AlignCenter",children:W(e)})]})}))})]}),_=(0,s.jsxs)("div",{className:"form-group",children:[0===b.length?(0,s.jsx)("label",{className:"wmlabel",children:"First guess:"}):(0,s.jsx)("label",{className:"wmlabel",children:"Next guess:"}),(0,s.jsx)("input",{className:"form-control",name:"guess",value:N,onChange:function(e){var s=e.target.value.toUpperCase().replace(/\W/g,"");if(s.length===f.length){var a=u+1;h(a),S([s].concat((0,n.Z)(b))),v(""),s===f&&(I(!0),8===f.length&&r([].concat((0,n.Z)(t),[a])))}else v(s)}})]}),O=(0,s.jsxs)("div",{children:[(0,s.jsxs)("h2",{className:"wmh2",children:["Solved in ",b.length," moves!"]}),(0,s.jsx)("button",{className:"wmbutton",onClick:function(){k(),v(""),S([]),I(!1)},children:8===f.length?"Start Another Set!":"Start Next Word"})]});return(0,s.jsx)("div",{className:"Mastermind",children:(0,s.jsxs)("div",{className:"container-fluid",children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-11 wmtitle",children:["Word Mastermind",(0,s.jsx)("span",{className:"material-icons",children:"psychology"})]}),(0,s.jsx)("div",{className:"col-1 wmhomelink",children:(0,s.jsx)(c.default,{href:"../../",children:(0,s.jsx)("a",{children:(0,s.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})})})]}),(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-11",children:(0,s.jsx)("p",{className:"wmp",children:"Cycle through 2-8 letter words per set."})})}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-lg-8",children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-lg-6",children:(0,s.jsxs)("div",{className:"Outertable",children:[(0,s.jsxs)("h3",{className:"wmh3 AlignLeft",children:["Guesses this word: ",b.length]}),(0,s.jsxs)("h3",{className:"wmh3 AlignLeft",children:["Guesses this set: ",u]}),0===t.length?(0,s.jsx)("p",{className:"AlignLeft",children:"No completed sets yet"}):(0,s.jsxs)("p",{className:"AlignLeft",children:["Guesses for completed sets: ",t.map((function(e){return(0,s.jsxs)("span",{children:[e," "]},e.toString())}))]})]})}),(0,s.jsx)("div",{className:"col-lg-6",children:(0,s.jsxs)("div",{className:"Outertable",children:[""===f?k():"",(0,s.jsxs)("h3",{className:"wmh3",children:["Secret Word: ",C?f:x]}),""===f?(0,s.jsx)("h1",{className:"wmh1",children:"Loading ..."}):C?O:_,C?(0,s.jsx)("br",{}):0===b.length?(0,s.jsx)("p",{className:"wmp",children:"Start guessing"}):(0,s.jsx)("p",{className:"wmp",children:"Keep guessing"})]})})]}),(0,s.jsx)(i.I3,{children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-lg-12",children:b.map((function(e,t){return(0,s.jsx)(l.default,{word:e,showInserts:"N",showSwaps:"Y",showAnagrams:"Y",showDrops:"N"},"".concat(t,".").concat(e))}))})})})]}),(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsx)("div",{className:"Outertable",children:0===b.length?(0,s.jsx)("p",{children:"No guesses yet"}):E})})]})]})});function k(){var e=f?f.length<2||f.length>7?2:f.length+1:2;2===e&&0!==u&&h(0);var t="https://words-scrabble.herokuapp.com/api/random/"+e.toString();fetch(t).then((function(e){return e.text()})).then((function(e){console.log(e),p(e.toUpperCase()),w(e.split("").map((function(e){return"*"})))}))}function L(e){var t,r=0,n=o("ABCDEFGHIJKLMNOPQRSTUVWXYZ");try{for(n.s();!(t=n.n()).done;){var s=t.value,a=f.split(s).length-1,c=e.split(s).length-1;r+=a<c?a:c}}catch(l){n.e(l)}finally{n.f()}return r}function W(e){for(var t=0,r=0;r<f.length;++r)t+=f[r]===e[r]?1:0;return t}}},8802:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wm/mastermind",function(){return r(6522)}])},1385:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return s}})}},function(e){e.O(0,[472,774,888,179],(function(){return t=8802,e(e.s=t);var t}));var t=e.O();_N_E=t}]);