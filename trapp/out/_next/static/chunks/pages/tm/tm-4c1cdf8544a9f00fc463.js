(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[118],{2792:function(t,e,r){"use strict";r.d(e,{CU:function(){return c},G0:function(){return a},eo:function(){return u},cO:function(){return l}});var n=r(809),o=r.n(n),s=r(2447),i="https://tilerunner.herokuapp.com";function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=0,n=Array.from(t),o=Array.from(e);if(n.length===o.length)for(var s=0;s<n.length;s++){n[s];n[s]!==o[s]&&r++}else r=-1;return r}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Array.from(t).sort().join("").toLowerCase()===Array.from(e).sort().join("").toLowerCase()}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t.length!==e.length+1)return!1;for(var r=t.toLowerCase(),n=e.toLowerCase(),o=0;o<r.length;o++){var s=Array.from(r);if(s.splice(o,1),s.join("")===n)return!0}return!1}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,s.Z)(o().mark((function t(e){var r,n,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(i,"/ENABLE2K?exists=").concat(e.toLowerCase()),t.next=3,fetch(r);case 3:return n=t.sent,t.next=6,n.json();case 6:return s=t.sent,t.abrupt("return",s.exists);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},7106:function(t,e,r){"use strict";r.r(e);var n=r(5893),o=r(1385),s=r(809),i=r.n(s),c=r(2447),a=r(7294),u=r(2792);e.default=function(t){var e=t.setWhereto,r=(0,a.useState)(4),s=r[0],l=r[1],d=(0,a.useState)({}),h=d[0],f=d[1],v=(0,a.useState)(""),m=v[0],x=v[1],j=(0,a.useState)([]),p=j[0],g=j[1],y=(0,a.useState)(!1),b=y[0],w=y[1],N=function(){var t=(0,c.Z)(i().mark((function t(){var e,r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={},t.prev=1,r="".concat("https://tilerunner.herokuapp.com","/ENABLE2K?transmogrify=true&numMoves=").concat(s),t.next=5,fetch(r);case 5:return n=t.sent,t.next=8,n.json();case 8:e=t.sent,t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),e.notes=["Problem with the server. Sorry about that."],console.log(t.t0);case 15:f(e),g([]),x(""),w(!1);case 19:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=(0,c.Z)(i().mark((function t(e){var r,n,s,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),r=(0===p.length?h.startWord:p[p.length-1]).toLowerCase(),n=m.trim().toLowerCase(),!C(n,r)){t.next=18;break}return t.next=6,(0,u.cO)(n);case 6:if(t.sent){t.next=10;break}alert("".concat(n," is not a valid word")),t.next=16;break;case 10:s=h.targetWord.toLowerCase(),(c=(0,o.Z)(p)).push(n),g(c),x(""),C(n,s)&&w(!0);case 16:t.next=19;break;case 18:alert("Only anagrams, drops, swaps and inserts allowed.");case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t!==e&&((0,u.G0)(t,e)||1===(0,u.CU)(t,e)||(0,u.eo)(t,e)||(0,u.eo)(e,t))},_=(0,n.jsxs)("div",{className:"tm_numMovesDiv",children:[(0,n.jsx)("h3",{children:"Number Of Moves"}),[2,3,4,5,6,7,8,9].map((function(t){return(0,n.jsx)("button",{className:"tm_".concat(t===s?"numMovesSelected":"numMovesUnselected"),onClick:function(){l(t)},children:t},"chooseNumMoves".concat(t))})),(0,n.jsx)("div",{className:"tm_startPuzzleDiv",children:(0,n.jsx)("button",{className:"trButton",onClick:function(){N()},children:"Start Puzzle"},"startPuzzle")})]}),S=(0,n.jsx)("div",{className:"tm_puzzleDiv",children:(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Start Word:"}),(0,n.jsx)("td",{children:h.startWord})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Target Word:"}),(0,n.jsx)("td",{children:h.targetWord})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Minimum Moves:"}),(0,n.jsx)("td",{children:h.numMoves})]})]})})}),A=(0,n.jsxs)("div",{className:"tm_solutionDiv",children:[(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:h.startWord})}),p.map((function(t,e){return(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:t})},"userWord".concat(e))})),!b&&(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:"..."})}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:h.targetWord})})]})}),b?(0,n.jsxs)("p",{className:"trEmphasis",children:["Congratulations! Solved in ",p.length+1," moves."]}):(0,n.jsxs)("form",{children:["Next Word:",(0,n.jsx)("input",{value:m,onChange:function(t){x(t.target.value)},onKeyPress:function(t){t.keyCode}}),(0,n.jsx)("button",{type:"submit",onClick:k,children:"GO"})]})]});return(0,n.jsxs)("div",{className:"trBackground",children:[(0,n.jsxs)("div",{className:"trTitle",children:["Transmogrify",(0,n.jsx)("button",{className:"trButton",onClick:function(){e("menu")},children:(0,n.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:_})}),h&&h.startWord&&(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:S})}),h&&h.startWord&&(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:A})})]})}),(0,n.jsx)("div",{children:h&&h.notes&&h.notes.length>0&&(0,n.jsx)("div",{className:"trDanger",children:h.notes.map((function(t,e){return(0,n.jsx)("p",{children:t},"note".concat(e))}))})})]})}},6468:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tm/tm",function(){return r(7106)}])},2447:function(t,e,r){"use strict";function n(t,e,r,n,o,s,i){try{var c=t[s](i),a=c.value}catch(u){return void r(u)}c.done?e(a):Promise.resolve(a).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,s){var i=t.apply(e,r);function c(t){n(i,o,s,c,a,"next",t)}function a(t){n(i,o,s,c,a,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},1385:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,{Z:function(){return o}})}},function(t){t.O(0,[774,888,179],(function(){return e=6468,t(t.s=e);var e}));var e=t.O();_N_E=e}]);