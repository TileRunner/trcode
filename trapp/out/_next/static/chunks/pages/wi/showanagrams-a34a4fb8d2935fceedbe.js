_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"45TN":function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return s}));var r=e("nKUr"),a=e("o0o1"),o=e.n(a),c=e("HaE+"),u=e("q1tI");function s(n){var t=Object(u.useState)([]),e=t[0],a=t[1];return Object(u.useEffect)((function(){(function(){var t=Object(c.a)(o.a.mark((function t(){var e,r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://words-scrabble.herokuapp.com/api/anagrams/"+n.word);case 2:return e=t.sent,t.next=5,e.text();case 5:r=t.sent,c=JSON.parse(r),a(c);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(r.jsx)("span",{children:0===e.length?Object(r.jsx)(r.Fragment,{}):Object(r.jsx)("span",{class:"anagramCount","data-toggle":"tooltip",title:e,children:e.length})},e)}},"5Hng":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wi/showanagrams",function(){return e("45TN")}])},"HaE+":function(n,t,e){"use strict";function r(n,t,e,r,a,o,c){try{var u=n[o](c),s=u.value}catch(i){return void e(i)}u.done?t(s):Promise.resolve(s).then(r,a)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(a,o){var c=n.apply(t,e);function u(n){r(c,a,o,u,s,"next",n)}function s(n){r(c,a,o,u,s,"throw",n)}u(void 0)}))}}e.d(t,"a",(function(){return a}))}},[["5Hng",0,2,1]]]);