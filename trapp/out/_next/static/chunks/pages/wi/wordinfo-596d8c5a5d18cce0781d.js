_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"+Wsf":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var r=n("nKUr"),c=(n("q1tI"),n("aNi4")),s=n("45TN"),a=n("FQXH");function o(e){return Object(r.jsx)("html",{children:Object(r.jsx)("body",{className:"wibody",children:Object(r.jsx)("table",{children:Object(r.jsx)("tr",{children:Object(r.jsx)("td",{children:Object(r.jsxs)("table",{children:["Y"===e.showInserts?function(e){return Object(r.jsx)("tr",{children:e.map((function(e){return Object(r.jsxs)(r.Fragment,{children:[""===e?Object(r.jsx)("td",{}):Object(r.jsx)("td",{class:"insertCount","data-toggle":"tooltip",title:e.split(":")[1],children:e.split(":")[0]}),Object(r.jsx)("td",{})]})}))})}(["","","1:A","","","","","1:S"]):Object(r.jsx)(r.Fragment,{}),"Y"===e.showSwaps?Object(r.jsx)(c.default,{word:e.word},e.word):Object(r.jsx)(r.Fragment,{}),function(n){var c=n,o=n+"2";return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{width:"5px"}),null===n||void 0===n?void 0:n.split("").map((function(e,n){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("td",{className:"letter",children:e}),Object(r.jsx)("td",{className:"facevalue",children:Object(r.jsx)("sub",{children:t(e)})})]})})),Object(r.jsx)("td",{children:"Y"===e.showAnagrams?Object(r.jsx)(s.default,{word:n}):Object(r.jsx)(r.Fragment,{})},c),Object(r.jsx)("td",{children:Object(r.jsx)(a.default,{word:n})},o)]})}(e.word),"Y"===e.showDrops?function(e){return Object(r.jsx)("tr",{children:e.map((function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("td",{}),1===e?Object(r.jsx)("td",{class:"dropIndicator",children:"\u2022"}):Object(r.jsx)("td",{})]})}))})}([1,0,0,0,0,0,0]):Object(r.jsx)(r.Fragment,{})]})})})})})});function t(e){switch(e){case"D":case"G":return 2;case"B":case"C":case"M":case"P":return 3;case"F":case"H":case"V":case"W":case"Y":return 4;case"K":return 5;case"J":case"X":return 8;case"Q":case"Z":return 10}return 1}}},"45TN":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n("nKUr"),c=n("o0o1"),s=n.n(c),a=n("HaE+"),o=n("q1tI");function i(e){var t=Object(o.useState)([]),n=t[0],c=t[1];return Object(o.useEffect)((function(){(function(){var t=Object(a.a)(s.a.mark((function t(){var n,r,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://words-scrabble.herokuapp.com/api/anagrams/"+e.word);case 2:return n=t.sent,t.next=5,n.text();case 5:r=t.sent,a=JSON.parse(r),c(a);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(r.jsx)("span",{children:0===n.length?Object(r.jsx)(r.Fragment,{}):Object(r.jsx)("span",{class:"anagramCount","data-toggle":"tooltip",title:n,children:n.length})},n)}},FQXH:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n("nKUr"),c=n("o0o1"),s=n.n(c),a=n("HaE+"),o=n("q1tI");function i(e){var t=Object(o.useState)(["Checking validity ..."]),n=t[0],c=t[1];return Object(o.useEffect)((function(){(function(){var t=Object(a.a)(s.a.mark((function t(){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://words-scrabble.herokuapp.com/api/valid/"+e.word);case 2:return n=t.sent,t.next=5,n.text();case 5:r=t.sent,c([r]);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(r.jsx)("p",{children:"Y"===n[0]?Object(r.jsx)("span",{className:"wordIsValid",children:"Valid word"}):"N"===n[0]?Object(r.jsx)("span",{className:"wordIsNotValid",children:"Not a recognized word"}):n[0]},e.word)}},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,c,s,a){try{var o=e[s](a),i=o.value}catch(u){return void n(u)}o.done?t(i):Promise.resolve(i).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,s){var a=e.apply(t,n);function o(e){r(a,c,s,o,i,"next",e)}function i(e){r(a,c,s,o,i,"throw",e)}o(void 0)}))}}n.d(t,"a",(function(){return c}))},KnvH:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wi/wordinfo",function(){return n("pYUx")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},aNi4:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n("nKUr"),c=n("o0o1"),s=n.n(c),a=n("HaE+"),o=n("q1tI");function i(e){var t=Object(o.useState)(),n=t[0],c=t[1];return Object(o.useEffect)((function(){(function(){var t=Object(a.a)(s.a.mark((function t(){var n,r,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://words-scrabble.herokuapp.com/api/swaps/"+e.word);case 2:return n=t.sent,t.next=5,n.text();case 5:r=t.sent,a=JSON.parse(r),c(a);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(r.jsx)("tr",{children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("td",{}),""===e?Object(r.jsx)("td",{}):Object(r.jsx)("td",{class:"swapCount","data-toggle":"tooltip",title:e,children:e.length})]})}))},e.word)}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var s=c(n("q1tI")),a=n("elyg"),o=n("nOHt"),i=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(c?"%"+c:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),c=n&&n.pathname||"/",d=s.default.useMemo((function(){var t=(0,a.resolveHref)(c,e.href,!0),n=r(t,2),s=n[0],o=n[1];return{href:s,as:e.as?(0,a.resolveHref)(c,e.as):o||s}}),[c,e.href,e.as]),f=d.href,j=d.as,p=e.children,h=e.replace,b=e.shallow,w=e.scroll,v=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var x=s.Children.only(p),O=x&&"object"===typeof x&&x.ref,m=(0,i.useIntersection)({rootMargin:"200px"}),g=r(m,2),N=g[0],y=g[1],E=s.default.useCallback((function(e){N(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,N]);(0,s.useEffect)((function(){var e=y&&t&&(0,a.isLocalURL)(f),r="undefined"!==typeof v?v:n&&n.locale,c=u[f+"%"+j+(r?"%"+r:"")];e&&!c&&l(n,f,j,{locale:r})}),[j,f,y,v,t,n]);var I={ref:E,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,s,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:s,locale:i,scroll:o}).then((function(e){e&&o&&document.body.focus()})))}(e,n,f,j,h,b,w,v)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),l(n,f,j,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var F="undefined"!==typeof v?v:n&&n.locale,_=(0,a.getDomainLocale)(j,F,n&&n.locales,n&&n.domainLocales);I.href=_||(0,a.addBasePath)((0,a.addLocale)(j,F,n&&n.defaultLocale))}return s.default.cloneElement(x,I)};t.default=d},pYUx:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("nKUr"),c=n("q1tI"),s=n.n(c),a=n("YFqc"),o=n.n(a),i=n("+Wsf");function u(e,t){return Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)("head",{children:Object(r.jsx)("title",{children:"Word Info"})}),Object(r.jsx)("h1",{children:"Word Info"}),Object(r.jsx)(i.default,{word:"US",showInserts:"N",showSwaps:"Y",showAnagrams:"Y",showDrops:"N"},"US"),Object(r.jsx)(i.default,{word:"CAR",showInserts:"N",showSwaps:"Y",showAnagrams:"Y",showDrops:"N"},"CAR"),Object(r.jsx)(i.default,{word:"FRAZ",showInserts:"N",showSwaps:"Y",showAnagrams:"Y",showDrops:"N"},"FRAZ"),Object(r.jsx)("p",{children:Object(r.jsx)(o.a,{href:"../../",children:Object(r.jsx)("a",{className:"wmlink",children:"Home"})})})]})}},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),c=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,c=(0,s.useRef)(),u=(0,s.useState)(!1),l=r(u,2),d=l[0],f=l[1],j=(0,s.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,s=r.observer,a=r.elements;return a.set(e,t),s.observe(e),function(){a.delete(e),s.unobserve(e),0===a.size&&(s.disconnect(),i.delete(c))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,s.useEffect)((function(){o||d||(0,a.default)((function(){return f(!0)}))}),[d]),[j,d]};var s=n("q1tI"),a=c(n("0G5g")),o="undefined"!==typeof IntersectionObserver;var i=new Map}},[["KnvH",0,2,1,3]]]);