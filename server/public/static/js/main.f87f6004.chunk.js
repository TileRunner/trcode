(this.webpackJsonpwordmastermind=this.webpackJsonpwordmastermind||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),r=c.n(n),l=c(7),j=c.n(l),i=(c(14),c(8)),a=c(6),h=c(2);c(15);function d(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1],l=Object(n.useState)(0),j=Object(h.a)(l,2),d=j[0],b=j[1],o=Object(n.useState)(""),O=Object(h.a)(o,2),u=O[0],x=O[1],g=Object(n.useState)(""),m=Object(h.a)(g,2),p=m[0],f=m[1],v=Object(n.useState)(""),S=Object(h.a)(v,2),N=S[0],C=S[1],w=Object(n.useState)([]),L=Object(h.a)(w,2),y=L[0],A=L[1],F=Object(n.useState)(!1),G=Object(h.a)(F,2),W=G[0],k=G[1],M=Object(s.jsxs)("table",{className:"Guesstable",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Guess"}),Object(s.jsx)("th",{children:"Correct Letter"}),Object(s.jsx)("th",{children:"Correct Position"})]})}),Object(s.jsx)("tbody",{children:y.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e}),Object(s.jsx)("td",{children:J(e)}),Object(s.jsx)("td",{children:T(e)})]})}))})]}),P=Object(s.jsxs)("div",{className:"form-group",children:[0===y.length?Object(s.jsx)("label",{children:"First guess:"}):Object(s.jsx)("label",{children:"Next guess:"}),Object(s.jsx)("input",{className:"form-control",name:"guess",value:N,onChange:function(e){var t=e.target.value.toUpperCase().replace(/\W/g,"");if(t.length===u.length){var s=d+1;b(s),A([].concat(Object(a.a)(y),[t])),C(""),t===u&&(k(!0),8===u.length&&r([].concat(Object(a.a)(c),[s])))}else C(t)}})]}),B=Object(s.jsxs)("div",{children:[Object(s.jsxs)("h2",{children:["Solved in ",y.length," moves!"]}),Object(s.jsx)("button",{onClick:function(){I(),C(""),A([]),k(!1)},children:8===u.length?"Start Another Set!":"Start Next Word"})]});return Object(s.jsxs)("div",{className:"Mastermind",children:[Object(s.jsx)("div",{class:"page-header",children:Object(s.jsx)("h1",{children:"Word Mastermind"})}),Object(s.jsx)("p",{children:"Cycle through 2-8 letter words per set."}),Object(s.jsx)("div",{class:"container",children:Object(s.jsxs)("div",{class:"row",children:[Object(s.jsx)("div",{class:"col-sm-4",children:Object(s.jsxs)("div",{className:"Outertable",children:[Object(s.jsxs)("h3",{className:"AlignLeft",children:["Guesses this word: ",y.length]}),Object(s.jsxs)("h3",{className:"AlignLeft",children:["Guesses this set: ",d]}),0===c.length?Object(s.jsx)("p",{className:"AlignLeft",children:"No completed sets yet"}):Object(s.jsxs)("p",{className:"AlignLeft",children:["Guesses for completed sets: ",c.map((function(e){return Object(s.jsxs)("span",{children:[e," "]},e.toString())}))]})]})}),Object(s.jsx)("div",{class:"col-sm-4",children:Object(s.jsxs)("div",{className:"Outertable",children:[""===u?I():"",Object(s.jsxs)("h3",{children:["Secret Word: ",W?u:p]}),W?B:P]})}),Object(s.jsx)("div",{class:"col-sm-4",children:Object(s.jsx)("div",{className:"Outertable",children:0===y.length?Object(s.jsx)("p",{children:"No guesses yet"}):M})})]})}),W?Object(s.jsx)("br",{}):0===y.length?Object(s.jsx)("p",{children:"Start guessing"}):Object(s.jsx)("p",{children:"Keep guessing"})]});function I(){var e=u?u.length<2||u.length>7?2:u.length+1:2;2===e&&0!==d&&b(0);var t="https://words-scrabble.herokuapp.com/api/random/"+e.toString();fetch(t).then((function(e){return e.text()})).then((function(e){x(e),f(e.split("").map((function(e){return"*"})))}))}function J(e){var t,c=0,s=Object(i.a)("ABCDEFGHIJKLMNOPQRSTUVWXYZ");try{for(s.s();!(t=s.n()).done;){var n=t.value,r=u.split(n).length-1,l=e.split(n).length-1;c+=r<l?r:l}}catch(j){s.e(j)}finally{s.f()}return c}function T(e){for(var t=0,c=0;c<u.length;++c)t+=u[c]===e[c]?1:0;return t}}var b=function(){return Object(s.jsx)(d,{})},o=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,l=t.getTTFB;c(e),s(e),n(e),r(e),l(e)}))};j.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),o()}},[[16,1,2]]]);
//# sourceMappingURL=main.f87f6004.chunk.js.map