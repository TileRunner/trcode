(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{2792:function(t,e,n){"use strict";n.d(e,{CU:function(){return i},cO:function(){return o}});var r=n(809),s=n.n(r),a=n(2447),c="https://tilerunner.herokuapp.com";function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=0,r=Array.from(t),s=Array.from(e);if(r.length===s.length)for(var a=0;a<r.length;a++){r[a];r[a]!==s[a]&&n++}else n=-1;return n}function o(t){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)(s().mark((function t(e){var n,r,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(c,"/ENABLE2K?exists=").concat(e.toLowerCase()),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,t.abrupt("return",a.exists);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},8435:function(t,e,n){"use strict";n.r(e);var r=n(1385),s=n(5893),a=n(809),c=n.n(a),i=n(2447),o=n(7294),u=n(2792);e.default=function(t){var e=t.setWhereto,n="https://tilerunner.herokuapp.com",a=(0,o.useState)([]),l=a[0],f=a[1],h=(0,o.useState)([]),p=h[0],d=h[1],m=(0,o.useState)(""),v=m[0],x=m[1],y=(0,o.useState)(-1),j=y[0],g=y[1],b=(0,o.useState)([]),k=b[0],w=b[1],N=(0,o.useState)("Practice session."),S=N[0],A=N[1];(0,o.useEffect)((function(){C()}),[]);var C=function(){var t=(0,i.Z)(c().mark((function t(){var e,r,s,a,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(n,"/ENABLE2K?prepickfry=true&guarantee=6"),t.next=3,fetch(e);case 3:return r=t.sent,t.next=6,r.json();case 6:s=t.sent,a=s.fryLetters.join(""),i=Array.from(a.toUpperCase()),f(i),d(i.slice(0,3));case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function E(){return L.apply(this,arguments)}function L(){return(L=(0,i.Z)(c().mark((function t(){var e,r,s;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(n,"/ENABLE2K?topfry=true&letters=").concat(p.join(""),"&count=1"),t.next=3,fetch(e);case 3:return r=t.sent,t.next=6,r.json();case 6:return s=t.sent,t.abrupt("return",s.answers&&s.answers.length>0?s.answers[0]:"");case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var B=function(){var t=(0,i.Z)(c().mark((function t(){var e,n,r,s,a,i,o,l;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=v.toUpperCase().trim(),n=0;case 2:if(!(n<p.length)){t.next=13;break}for(r=0,s=0,a=0;a<p.length;a++)p[n]===p[a]&&(r+=1);for(i=0;i<e.length;i++)p[n]===e[i]&&(s+=1);if(!(s<r)){t.next=10;break}return A("You need the letter ".concat(p[n]," at least ").concat(r," time").concat(1===r?".":"s.")),t.abrupt("return");case 10:n++,t.next=2;break;case 13:return t.next=15,(0,u.cO)(v);case 15:return o=t.sent,l={pass:!1,word:v,valid:o},t.next=19,Z(l);case 19:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),P=function(){var t=(0,i.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={pass:!0},t.next=3,Z(e);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function Z(t){return _.apply(this,arguments)}function _(){return(_=(0,i.Z)(c().mark((function t(e){var n,s,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:for(n=t.sent,e.fryLetters=p,e.chefsPick=n,(s=(0,r.Z)(k)).push(e);s.length>15;)s.splice(0,1);if(w(s),p.length!==l.length){t.next=16;break}return t.next=12,C();case 12:x(""),A("New fry letters picked."),t.next=19;break;case 16:a=l.slice(0,p.length+1),d(a),A("");case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,s.jsxs)("div",{className:"trBackground",children:[(0,s.jsxs)("div",{className:"trTitle",children:["Fry Your Brain Solo",(0,s.jsx)("button",{className:"trButton",onClick:function(){e("menu")},children:(0,s.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),k.length>=0&&(0,s.jsx)("div",{children:(0,s.jsxs)("table",{className:"trTable",border:"1",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Fry Letters"}),(0,s.jsx)("th",{children:"Play Made"}),(0,s.jsx)("th",{children:"Result"}),(0,s.jsx)("th",{children:"Chefs Pick"})]})}),(0,s.jsx)("tbody",{children:k.map((function(t,e){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:t.fryLetters}),(0,s.jsxs)("td",{children:[t.pass&&(0,s.jsx)("span",{className:"trDanger",children:"PASS"}),!t.pass&&(0,s.jsx)(s.Fragment,{children:t.word})]}),(0,s.jsxs)("td",{children:[!t.pass&&t.valid&&t.word.length===t.chefsPick.length&&(0,s.jsx)("span",{className:"trEmphasis",children:"Shortest!"}),!t.pass&&t.valid&&t.word.length>t.chefsPick.length&&(0,s.jsx)(s.Fragment,{children:"Valid"}),!t.pass&&!t.valid&&(0,s.jsx)("span",{className:"trDanger",children:"Phoney"})]}),(0,s.jsx)("td",{children:t.chefsPick})]},"solomove".concat(e))}))})]})}),p.length>0&&(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"trParagraph",children:["Fry Letters:",(0,s.jsx)("button",{className:"trButton fryLetterActionButton",onClick:function(){for(var t=p.length,e=(0,r.Z)(p),n=[];n.length<t;){var s=Math.floor(Math.random()*e.length);n.push(e[s]),e.splice(s,1)}d(n),g(-1)},children:(0,s.jsx)("i",{className:"material-icons fryLetterActionButtonIcon",children:"cached"})}),(0,s.jsx)("button",{className:"trButton fryLetterActionButton",onClick:function(){var t=(0,r.Z)(p);t.sort(),d(t),g(-1)},children:(0,s.jsx)("i",{className:"material-icons fryLetterActionButtonIcon",children:"sort_by_alpha"})})]}),(0,s.jsx)("div",{className:"fryLetterDiv",children:p.map((function(t,e){return(0,s.jsx)("span",{className:e===j?"fybFryLetter Selected":"fybFryLetter",onDoubleClick:function(){var t=p[e],n=(0,r.Z)(p);n.splice(e,1),n.push(t),d((0,r.Z)(n)),g(-1)},onClick:function(){if(-1===j)g(e);else if(e===j)g(-1);else{for(var t=[],n=p[j],r=0;r<p.length;r++){var s=p[r];r===e&&t.push(n),r!==j&&t.push(s)}d(t),g(-1)}},children:t},"SoloFryLetter".concat(e))}))}),(0,s.jsxs)("div",{onKeyDownCapture:function(t){if("Enter"===t.key)return t.preventDefault(),void B()},children:[(0,s.jsx)("div",{className:"trEmphasis",children:"Enter Word:"}),(0,s.jsx)("input",{type:"text",autoComplete:"off",spellCheck:"false",name:"word",value:v,onChange:function(t){x(t.target.value)}}),(0,s.jsxs)("div",{children:[v.toUpperCase().trim().match("^[a-zA-Z]*$")&&(0,s.jsx)("button",{className:"trButton",onClick:function(){B()},children:"SUBMIT"},"submitWord"),(0,s.jsx)("button",{className:"trButton",onClick:function(){P()},children:"PASS"},"passButton")]})]})]}),S&&(0,s.jsx)("div",{className:"trWarning",children:S})]})}},598:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fyb/fybSolo",function(){return n(8435)}])},2447:function(t,e,n){"use strict";function r(t,e,n,r,s,a,c){try{var i=t[a](c),o=i.value}catch(u){return void n(u)}i.done?e(o):Promise.resolve(o).then(r,s)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(s,a){var c=t.apply(e,n);function i(t){r(c,s,a,i,o,"next",t)}function o(t){r(c,s,a,i,o,"throw",t)}i(void 0)}))}}n.d(e,{Z:function(){return s}})},1385:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,{Z:function(){return s}})}},function(t){t.O(0,[774,888,179],(function(){return e=598,t(t.s=e);var e}));var e=t.O();_N_E=e}]);