(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{A1c0:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("gBDq");t.default=function(e){var t=e.usedby,n=e.type,c=e.letter,s=e.ri,i=e.ci,o=e.rcd,l=e.onClick,u=t!==a.x?"pbSquareInner PlayerTile":o[0]===s&&o[1]===i&&o[2]===a.e?"pbSquareInner RightArrow":o[0]===s&&o[1]===i&&o[2]===a.c?"pbSquareInner DownArrow":"pbSquareInner "+n,d=t!==a.x?c:u.indexOf("RightArrow")>-1?"\u27a1":u.indexOf("DownArrow")>-1?"\u2b07":u.indexOf("CenterSquare")>-1?Object(r.jsx)("i",{className:"material-icons",children:"stars"}):u.indexOf("EscapeHatch")>-1?Object(r.jsx)("i",{className:"material-icons",children:a.m}):".";return t===a.x?Object(r.jsx)("button",{className:u,onClick:l,children:d}):Object(r.jsx)("button",{className:u,onClick:l,children:Object(r.jsx)("div",{className:"pbSquareTileText ".concat(t+("Q"===c?" u":"")),children:d})})}},KQm4:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},KiN8:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("gBDq");t.default=function(e){var t=e.moves;return Object(r.jsxs)("div",{className:"pbMoves",children:[Object(r.jsx)("div",{className:"pbMovesTitle",children:"MOVES"}),Object(r.jsx)("div",{className:"pbMovesScrollable",id:"ScrollableMoves",children:t&&t.map((function(e,t){var n;return Object(r.jsxs)("div",{className:"pbMove",children:[Object(r.jsx)("span",{className:"pbMove by",children:e.by}),":",Object(r.jsx)("span",{className:"pbMove ".concat(e.type),children:e.type===a.j?Object(r.jsxs)(r.Fragment,{children:[e.pos," ",e.mainword.replace("Q","Qu"),null===(n=e.extrawords)||void 0===n?void 0:n.map((function(e,t){return Object(r.jsxs)("span",{children:[",\xa0",e.replace("Q","Qu")]},"extraword".concat(t))}))]}):Object(r.jsx)(r.Fragment,{})})]},"move".concat(t))}))})]})}},NOQH:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("gBDq"),c=function(e){var t="pbTileOnRack "+(e.selection===e.tileindex?"Selected ":"Unselected ")+("Q"===e.tilevalue?"u ":"")+e.participant,n=e.tileindex;return Object(r.jsx)("div",{className:t,onClick:function(t){return e.onClick(t)},children:Object(r.jsx)("div",{className:"pbTileOnRackText",children:e.tilevalue})},n)},s=function(e){return Object(r.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:Object(r.jsxs)("span",{className:"pbActionButtonText",children:[Object(r.jsx)("i",{className:"material-icons",children:"check"}),"\xa0Finish Turn"]})})},i=function(e){return Object(r.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:Object(r.jsxs)("span",{className:"pbActionButtonText",children:[Object(r.jsx)("i",{className:"material-icons",children:"undo"}),"\xa0Recall Tiles"]})})},o=function(e){return Object(r.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:Object(r.jsxs)("span",{className:"pbActionButtonText",children:[Object(r.jsx)("i",{className:"material-icons",children:"cached"}),"\xa0Swap Tiles"]})})},l=function(e){return Object(r.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:Object(r.jsxs)("span",{className:"pbActionButtonText",children:[Object(r.jsx)("i",{className:"material-icons",children:"not_interested"}),"\xa0Pass Turn"]})})},u=function(e){return e.alreadyAllowed?Object(r.jsx)("div",{className:"pbActionButtonSevere",children:Object(r.jsxs)("span",{className:"pbActionButtonSevereText",children:[Object(r.jsx)("i",{className:"material-icons",children:"report"}),"\xa0ENABLED",Object(r.jsx)("span",{className:"pbActionButtonSevereText2",children:"\xa0Allow undo is now enabled"})]})}):Object(r.jsx)("button",{className:"pbActionButtonSevere",onClick:e.onClick,children:Object(r.jsxs)("span",{className:"pbActionButtonSevereText",children:[Object(r.jsx)("i",{className:"material-icons",children:"report_problem"}),"\xa0Allow Undo Turn",Object(r.jsx)("span",{className:"pbActionButtonSevereText2",children:"Click to let opponent undo"})]})})},d=function(e){return Object(r.jsx)("button",{className:"pbActionButtonSevere",onClick:e.onClick,children:Object(r.jsxs)("span",{className:"pbActionButtonSevereText",children:[Object(r.jsx)("i",{className:"material-icons",children:"delete_forever"}),"\xa0Undo My Turn",Object(r.jsx)("span",{className:"pbActionButtonSevereText2",children:"Opponent has allowed undo"})]})})};function b(e){return Object(r.jsxs)("div",{className:"pbActionButtonDiv",children:[Object(r.jsx)("p",{children:Object(r.jsx)(s,{onClick:function(){return e.onClickFinishTurn()}})}),Object(r.jsx)("p",{children:Object(r.jsx)(i,{onClick:function(){return e.onClickTileRecall()}})}),Object(r.jsx)("p",{children:Object(r.jsx)(o,{onClick:function(){return e.onClickTileExchange()}})}),Object(r.jsx)("p",{children:Object(r.jsx)(l,{onClick:function(){return e.onClickPassPlay()}})})]})}function f(e){return Object(r.jsx)("div",{className:"pbActionButtonDiv",children:Object(r.jsx)("div",{children:Object(r.jsx)(u,{onClick:function(){return e.onClickAllowUndo()},alreadyAllowed:e.allowRewind})})})}function p(e){return Object(r.jsx)("div",{className:"pbActionButtonDiv",children:Object(r.jsx)("p",{children:Object(r.jsx)(d,{onClick:function(){return e.onClickUndoLastPlay()}})})})}t.default=function(e){var t=e.participant===a.q?a.m:a.l,n=e.participant===a.q?a.o:a.n;return Object(r.jsxs)("div",{className:"pbPlayerInnerSection",children:[Object(r.jsxs)("div",{className:"pbPlayerTitle",children:[Object(r.jsx)("i",{className:"material-icons",children:t}),"\xa0",n,"\xa0",Object(r.jsx)("i",{className:"material-icons",children:t})]}),Object(r.jsx)("div",{className:"pbTilerack",children:e.racktiles&&e.racktiles.map((function(t,n){return Object(r.jsx)(c,{whoseturn:e.whoseturn,participant:e.participant,selection:e.selection,tileindex:n,tilevalue:t,onClick:function(){return e.onClick(n)}},"RackTile".concat(n))}))}),e.whoseturn===e.participant?b(e):e.allowRewind&&e.moves&&e.moves.length>0&&e.moves[e.moves.length-1].by===e.participant&&p(e),e.moves&&e.moves.length>0&&e.moves[e.moves.length-1].by!==e.participant&&f(e)]})}},XxGB:function(e,t,n){"use strict";n.r(t);var r=n("nKUr");t.default=function(e){var t=e.rescues;return Object(r.jsxs)("div",{className:"pbRescuesMade",children:["Rescues made: ",t]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c=a(n("q1tI")),s=n("elyg"),i=n("nOHt"),o=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",d=c.default.useMemo((function(){var t=(0,s.resolveHref)(a,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,s.resolveHref)(a,e.as):i||c}}),[a,e.href,e.as]),b=d.href,f=d.as,p=e.children,j=e.replace,O=e.shallow,h=e.scroll,m=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var y=c.Children.only(p),v=y&&"object"===typeof y&&y.ref,x=(0,o.useIntersection)({rootMargin:"200px"}),g=r(x,2),w=g[0],N=g[1],A=c.default.useCallback((function(e){w(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,w]);(0,c.useEffect)((function(){var e=N&&t&&(0,s.isLocalURL)(b),r="undefined"!==typeof m?m:n&&n.locale,a=l[b+"%"+f+(r?"%"+r:"")];e&&!a&&u(n,b,f,{locale:r})}),[f,b,N,m,t,n]);var k={ref:A,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,i,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c,locale:o,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,b,f,j,O,h,m)},onMouseEnter:function(e){(0,s.isLocalURL)(b)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(n,b,f,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var S="undefined"!==typeof m?m:n&&n.locale,q=(0,s.getDomainLocale)(f,S,n&&n.locales,n&&n.domainLocales);k.href=q||(0,s.addBasePath)((0,s.addLocale)(f,S,n&&n.defaultLocale))}return c.default.cloneElement(y,k)};t.default=d},gBDq:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"r",(function(){return c})),n.d(t,"q",(function(){return s})),n.d(t,"p",(function(){return i})),n.d(t,"A",(function(){return o})),n.d(t,"z",(function(){return l})),n.d(t,"y",(function(){return u})),n.d(t,"m",(function(){return d})),n.d(t,"l",(function(){return b})),n.d(t,"o",(function(){return f})),n.d(t,"n",(function(){return p})),n.d(t,"j",(function(){return j})),n.d(t,"k",(function(){return O})),n.d(t,"i",(function(){return h})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return v})),n.d(t,"x",(function(){return x})),n.d(t,"g",(function(){return g})),n.d(t,"s",(function(){return w})),n.d(t,"t",(function(){return N})),n.d(t,"u",(function(){return A})),n.d(t,"v",(function(){return k})),n.d(t,"w",(function(){return S})),n.d(t,"h",(function(){return q})),n.d(t,"f",(function(){return C}));var r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],a=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],c="U",s="P",i="G",o=s,l=i,u="X",d="run_circle",b="security",f="PRISONERS",p="GUARDS",j="PLAY",O="SWAP",h="PASS",m="r",y="d",v="",x="",g=["Escapee: \"I'm free! I'm free!\". Little kid: \"I'm four! I'm four!\"","Two peanuts were walking down a back alley. One was a salted.","The psychic dwarf escaped! There's a small medium at large!","What do you call a vegetable who has escaped prison? An escapea!","The prisoners fave punctuation is a period. It marks the end of a sentence!","Prison is only one word, but to robbers it's a whole sentence."],w=2e4,N=["A","A","A","B","C","D","E","E","E","E","F","G","H","I","I","I","J","K","L","M","N","N","O","O","O","P","Q","R","R","S","T","T","U","V","W","X","Y","Z","?","?"],A=["A","A","A","A","A","B","C","D","D","E","E","E","E","E","E","F","G","H","I","I","I","I","I","J","K","L","L","M","N","N","N","O","O","O","O","P","Q","R","R","R","S","S","T","T","T","U","V","W","X","Y","Z","?","?"],k=["A","A","A","A","A","A","A","B","B","C","C","D","D","D","E","E","E","E","E","E","E","E","E","F","G","G","H","H","I","I","I","I","I","I","I","J","K","L","L","L","M","M","N","N","N","N","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","S","S","S","T","T","T","T","U","U","U","V","W","X","Y","Z","?","?"],S=["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z","?","?"],q="";function C(e){for(var t=2*e+1,n=Array(t),r=0;r<t;++r){for(var a=Array(t),c=0;c<t;++c){var s={row:r,col:c,type:"style2",usedby:x,letter:q};r===e&&c===e?s.type="CenterSquare":r%e===0&&c%e===0?s.type="EscapeHatch":r%2===c%2&&(s.type="style1"),a[c]=s}n[r]=[].concat(a)}return n}},gx3M:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("KQm4"),c=n("q1tI");t.default=function(e){var t=e.gameid,n=e.client,s=e.nickname,i=e.msgs,o=e.setMsgs,l=e.participant,u=Object(c.useState)(""),d=u[0],b=u[1];return Object(r.jsx)("div",{id:"ScrollableChat",className:"pbChat",children:Object(r.jsx)("table",{className:"pbChatTable",children:Object(r.jsxs)("tbody",{children:[i.map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"pbChatFrom",children:e.from}),Object(r.jsx)("td",{className:"pbChatMsg",children:e.msg})]},"ChatMessage".concat(t))})),Object(r.jsx)("tr",{children:Object(r.jsx)("td",{colSpan:"2",children:Object(r.jsx)("textarea",{className:""===d?"pbChatInputEmpty":"pbChatInput",name:"nextmsgInputArea",value:d,onChange:function(e){b(e.target.value)},onKeyDownCapture:function(e){if("Enter"===e.key&&d.length>0){e.preventDefault();var r=[].concat(Object(a.a)(i),[{from:s,msg:d}]),c=d;return o(r),b(""),void n.send(JSON.stringify({gameid:t,nickname:s,type:"pb",func:"chat",sender:l,sendmsg:c}))}if("Backspace"===e.key&&d.length>0){e.preventDefault();var u=d.slice(0,d.length-1);b(u)}},placeholder:"chat..."})})})]})})})}},qa2E:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("KQm4");t.default=function(e){var t=e.tiles,n=e.othertiles,c=[].concat(Object(a.a)(t||[]),Object(a.a)(n||[]));return c.sort(),"?"===c[0]&&(c.splice(0,1),c.push("?")),"?"===c[0]&&(c.splice(0,1),c.push("?")),Object(r.jsxs)("div",{className:"pbTilepool",children:[Object(r.jsx)("div",{className:"pbTilepoolTitle",children:"TILES"}),c.map((function(e,t){return Object(r.jsxs)("span",{children:[t>0&&e!==c[t-1]?Object(r.jsx)("span",{className:"pbTilepoolDivider"}):Object(r.jsx)(r.Fragment,{}),Object(r.jsx)("span",{className:"Q"===e?"pbTilepoolTile u":"pbTilepoolTile",children:e})]},"tile".concat(t))}))]})}},rZeA:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("A1c0"),c=n("gBDq");t.default=function(e){var t=e.onClick,n=e.squareArray,s=void 0===n?[]:n,i=e.rcd,o=function(e){return Object(r.jsxs)("tr",{className:"pbRow",children:[Object(r.jsx)("td",{className:"pbBoardRowHeader",id:"BoardHeaderLeft",children:c.b[e]}),s[e].map((function(e){return function(e){return Object(r.jsx)("td",{className:"pbSquareOuter",children:Object(r.jsx)(a.default,{usedby:e.usedby,type:e.type,letter:e.letter,ri:e.row,ci:e.col,rcd:i,onClick:function(){return t(e.row,e.col)}})},"Square".concat(e.row,"-").concat(e.col))}(e)})),Object(r.jsx)("td",{className:"pbBoardRowHeader",id:"BoardHeaderRight",children:c.b[e]})]},"BoardRow".concat(e))};return Object(r.jsx)("table",{className:"pbBoard",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{className:"pbBoardColumnHeaderRow",children:[Object(r.jsx)("td",{className:"pbBoardHeaderTopLeft",children:"\xa0"}),s.map((function(e,t){return Object(r.jsx)("td",{className:"pbBoardColumnHeader",children:c.a[t]},"TopColumnHeader".concat(t))})),Object(r.jsx)("td",{className:"pbBoardHeaderTopRight",children:"\xa0"})]}),s.map((function(e,t){return o(t)})),Object(r.jsxs)("tr",{className:"pbBoardColumnHeaderRow",id:"BoardHeaderBottom",children:[Object(r.jsx)("td",{className:"pbBoardHeaderBottomLeft",children:"\xa0"}),s.map((function(e,t){return Object(r.jsx)("td",{className:"pbBoardColumnHeader",children:c.a[t]},"BottomColumnHeader".concat(t))})),Object(r.jsx)("td",{className:"pbBoardHeaderBottomRight",children:"\xa0"})]})]})})}},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=(0,c.useRef)(),l=(0,c.useState)(!1),u=r(l,2),d=u[0],b=u[1],f=(0,c.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||d||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,c=r.observer,s=r.elements;return s.set(e,t),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),o.delete(a))}}(e,(function(e){return e&&b(e)}),{rootMargin:t}))}),[n,t,d]);return(0,c.useEffect)((function(){i||d||(0,s.default)((function(){return b(!0)}))}),[d]),[f,d]};var c=n("q1tI"),s=a(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var o=new Map},yhjZ:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("KQm4"),c=n("q1tI"),s=n("YFqc"),i=n.n(s),o=n("NOQH"),l=n("rZeA"),u=n("qa2E"),d=n("KiN8"),b=n("XxGB"),f=n("gx3M"),p=n("gBDq"),j=function(e){var t=document.getElementById(e);t.scrollTop=t.scrollHeight};t.default=function(e){var t=e.isrejoin,n=e.participant,s=e.gameid,O=e.nickname,h=e.wsmessage,m=e.client,y=e.racksize,v=void 0===y?4:y,x=v,g=2*v,w=6===v?p.v:7===v?p.w:5===v?p.u:p.t,N=Object(c.useState)(Object(a.a)(w)),A=N[0],k=N[1],S=Object(c.useState)([]),q=S[0],C=S[1],T=Object(c.useState)([]),E=T[0],I=T[1],B=Object(c.useState)([]),R=B[0],M=B[1],J=Object(c.useState)(-1),H=J[0],U=J[1],L=Object(c.useState)(p.A),D=L[0],P=L[1],F=Object(c.useState)([]),K=F[0],z=F[1],G=Object(c.useState)(0),Q=G[0],_=G[1],Y=Object(c.useState)([-1,-1,p.d]),V=Y[0],W=Y[1],Z=Object(c.useState)([]),X=Z[0],$=Z[1],ee=Object(c.useState)({squareArray:[],ptiles:[],gtiles:[]}),te=ee[0],ne=ee[1],re=Object(c.useState)(0),ae=re[0],ce=re[1],se=Object(c.useState)(!1),ie=se[0],oe=se[1],le=Object(c.useState)(""),ue=le[0],de=le[1],be=Object(c.useState)([]),fe=be[0],pe=be[1],je=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current=e})),t.current}(Q);function Oe(){U(-1),oe(!1),W(-1,-1,p.d),z([])}Object(c.useEffect)((function(){if(Q>je){var e=document.createElement("audio");e.src=n===p.p?"https://tilerunner.github.io/OneGotAway.m4a":"https://tilerunner.github.io/yippee.m4a",e.play()}}),[Q]),Object(c.useEffect)((function(){var e=ae+1;e>=p.g.length&&(e=0),ce(e);var t=setInterval((function(){n!==D&&D!==p.y&&qe()}),p.s);return function(){return clearInterval(t)}}),[D]),Object(c.useEffect)((function(){var e=p.f(v);if(M(Object(a.a)(e)),t||n!==p.q)m.send(JSON.stringify({gameid:s,nickname:O,type:"pb",func:"requestgamedata",sender:n}));else{for(var r=[],c=[],i=Object(a.a)(w);r.length<v;){var o=Math.floor(Math.random()*i.length);r.push(i[o]),i.splice(o,1),o=Math.floor(Math.random()*i.length),c.push(i[o]),i.splice(o,1)}r.sort(),c.sort(),I(c),C(r),k(i),ne({squareArray:Object(a.a)(e),ptiles:[].concat(r),gtiles:[].concat(c)}),m.send(JSON.stringify({type:"pb",func:"hello",sender:n,gameid:s,nickname:O,whoseturn:D,racksize:v}))}}),[]),Object(c.useEffect)((function(){""!==h&&function(e){var t=JSON.parse(e);if("announce"===t.type)m.send(JSON.stringify({type:"pb",func:"hello",sender:n,gameid:s,nickname:O,whoseturn:D,racksize:v}));else if(t.gameid===s&&"pb"===t.type&&(t.sender!=n&&""===ue&&t.nickname&&t.nickname.length>0&&de(t.nickname),"requestgamedata"===t.func&&t.sender!==n&&m.send(JSON.stringify({gameid:s,nickname:O,type:"pb",func:"providegamedata",sender:n,tiles:A,squareArray:R,ptiles:q,gtiles:E,whoseturn:D,snapshot:te,moves:X,rescues:Q,racksize:v,allowRewind:ie})),"providegamedata"===t.func&&t.sender!==n&&(t.moves.length!==X.length||t.tiles.length!==A.length||n===p.p&&0===E.length&&0===K.length||n===p.q&&0===q.length&&0===K.length)&&(k(t.tiles),M(t.squareArray),C(t.ptiles),I(t.gtiles),P(t.whoseturn),ne(t.snapshot),$(t.moves),_(t.rescues),oe(t.allowRewind)),"ept"===t.func&&n===p.p&&(Oe(),P(t.whoseturn),M(t.squareArray),C(t.ptiles),k(t.tiles),$(t.moves),_(t.rescues),ne({squareArray:JSON.parse(JSON.stringify(t.squareArray)),ptiles:Object(a.a)(t.ptiles),gtiles:Object(a.a)(E)})),"egt"===t.func&&n===p.q&&(Oe(),P(t.whoseturn),M(t.squareArray),I(t.gtiles),k(t.tiles),$(t.moves),ne({squareArray:JSON.parse(JSON.stringify(t.squareArray)),ptiles:Object(a.a)(q),gtiles:Object(a.a)(t.gtiles)})),"undoturn"===t.func&&t.sender!==n&&(Oe(),k(t.tiles),C(t.ptiles),I(t.gtiles),M(t.squareArray),P(t.whoseturn),_(t.rescues),$(t.moves),ne(t.snapshot)),"allowundo"===t.func&&t.sender!==n&&oe(!0),"chat"===t.func&&t.sender!=n)){var r=[].concat(Object(a.a)(fe),[{from:t.nickname,msg:t.sendmsg}]);pe(r)}}(h)}),[h]),Object(c.useEffect)((function(){j("ScrollableMoves")}),[X]),Object(c.useEffect)((function(){j("ScrollableChat")}),[fe]);var he=function(e,t,n,r){var c=JSON.parse(JSON.stringify(R)),s=Object(a.a)(c[e]),i=s[t],o=Object(a.a)(q),l=Object(a.a)(E),u=Object(a.a)(K),d=String(e)+"-"+String(t),b=K.indexOf(d);if(-1===n&&(n=H,r=V),n>-1&&i.usedby===p.x){var f=D===p.A?o[n]:l[n];return i.letter=f,i.usedby=D,s[t]=i,c[e]=Object(a.a)(s),D===p.A?o.splice(n,1):l.splice(n,1),D===p.A&&n===o.length&&(n-=1),D===p.z&&n===l.length&&(n-=1),U(n),M(Object(a.a)(c)),C(o),I(l),z([].concat(Object(a.a)(K),[d])),void W(r)}if(b>-1)return D===p.A?o.push(i.letter):l.push(i.letter),i.usedby=p.x,i.letter=p.h,s[t]=i,c[e]=Object(a.a)(s),U(D===p.A?o.length-1:l.length-1),u.splice(b,1),M(Object(a.a)(c)),C(o),I(l),z(u),void W(-1,-1,p.d);if(i.usedby!==p.x);else{var j=V[0]!==e||V[1]!==t?p.e:V[2]===p.e?p.c:V[2]===p.c?p.d:p.e;W(r=[e,t,j])}},me=function(e){if(-1!==H)if(H!==e){var t=n===p.q?Object(a.a)(q):Object(a.a)(E),r=H,c=t[r],s=e;t.splice(r,1),t.splice(s,0,c),n===p.q?C(t):I(t),U(-1)}else U(-1);else U(e)},ye=function(){if(xe()){for(var e=we(),t=Q,r=["0-0","0-"+x,"0-"+g,x+"-0",x+"-"+g,g+"-0",g+"-"+x,g+"-"+g],c=0;c<K.length;c++)r.indexOf(K[c])>-1&&(t+=1);for(var i=Object(a.a)(q),o=Object(a.a)(A);i.length<v&&o.length>0;){var l=Math.floor(Math.random()*o.length);i.push(o[l]),o.splice(l,1)}i.sort();var u=i.length>0?p.z:p.y;R[0][0].usedby!==p.x&&R[0][x].usedby!==p.x&&R[0][g].usedby!==p.x&&R[x][0].usedby!==p.x&&R[x][g].usedby!==p.x&&R[g][0].usedby!==p.x&&R[g][x].usedby!==p.x&&R[g][g].usedby!==p.x&&(u=p.y);var d=ge(),b={by:p.q,type:p.j,rewindInfo:e,mainword:d.mainword,extrawords:d.extrawords,pos:d.pos},f=[].concat(Object(a.a)(X),[b]);Oe(),P(u),C(i),k(o),$(f),_(t),ne({squareArray:JSON.parse(JSON.stringify(R)),ptiles:Object(a.a)(i),gtiles:Object(a.a)(E)}),m.send(JSON.stringify({gameid:s,nickname:O,type:"pb",func:"ept",sender:n,squareArray:R,ptiles:i,tiles:o,whoseturn:u,racksize:v,moves:f,rescues:t}))}},ve=function(){if(xe()){for(var e=we(),t=Object(a.a)(E),r=Object(a.a)(A);t.length<v&&r.length>0;){var c=Math.floor(Math.random()*r.length);t.push(r[c]),r.splice(c,1)}t.sort();var i=JSON.parse(JSON.stringify(R)),o=Object(a.a)(q),l=Object(a.a)(E),u=t.length>0?p.A:p.y;R[0][0].usedby!==p.x&&R[0][x].usedby!==p.x&&R[0][g].usedby!==p.x&&R[x][0].usedby!==p.x&&R[x][g].usedby!==p.x&&R[g][0].usedby!==p.x&&R[g][x].usedby!==p.x&&R[g][g].usedby!==p.x&&(u=p.y);var d=ge(),b={by:p.p,type:p.j,rewindInfo:e,mainword:d.mainword,extrawords:d.extrawords,pos:d.pos},f=[].concat(Object(a.a)(X),[b]);Oe(),P(u),I(t),k(r),$(f),ne({squareArray:i,ptiles:o,gtiles:l}),m.send(JSON.stringify({gameid:s,nickname:O,type:"pb",func:"egt",sender:n,squareArray:R,gtiles:t,tiles:r,moves:f,whoseturn:u,racksize:v}))}};function xe(){if(R[x][x].usedby===p.x)return window.alert("First play must hit center square"),!1;for(var e=g+1,t=g+1,n=e,r=-1,a=t,c=-1,s=0;s<e;++s)for(var i=0;i<t;++i)if(R[s][i].usedby!==p.x){if(!(s>0&&R[s-1][i].usedby!==p.x)&&!(i>0&&R[s][i-1].usedby!==p.x)&&!(s<g&&R[s+1][i].usedby!==p.x)&&!(i<g&&R[s][i+1].usedby!==p.x))return window.alert("Each played tile must be part of a word"),!1;te.squareArray[s][i].usedby===p.x&&(s<n&&(n=s),s>r&&(r=s),i<a&&(a=i),i>c&&(c=i))}if(n===e)return window.alert("You didn't play any tiles"),!1;if(n!==r&&a!==c)return window.alert("Tiles played must be in a straight line"),!1;var o=!1,l=!1;for(s=n;s<=r;++s)for(i=a;i<=c;++i){if(R[s][i].usedby===p.x)return window.alert("There is a gap in your word"),!1;te.squareArray[s][i].usedby!==p.x&&(o=!0),n===r&&s>0&&R[s-1][i].usedby!==p.x&&(l=!0),n===r&&s<g&&R[s+1][i].usedby!==p.x&&(l=!0),a===c&&i>0&&R[s][i-1].usedby!==p.x&&(l=!0),a===c&&i<g&&R[s][i+1].usedby!==p.x&&(l=!0)}return n===r&&a>0&&te.squareArray[n][a-1].usedby!==p.x&&(o=!0),n===r&&c<g&&te.squareArray[n][c+1].usedby!==p.x&&(o=!0),a===c&&n>0&&te.squareArray[n-1][a]!==p.x&&(o=!0),a===c&&r<g&&te.squareArray[r+1][a].usedby!==p.x&&(o=!0),!(!o&&!l&&te.squareArray[x][x].usedby!==p.x)||(window.alert("Words must be connected"),!1)}function ge(){for(var e="",t=[],n="",r=g+1,c=-1,s=g+1,i=-1,o=K.length,l=0;l<o;++l){var u=parseInt(K[l].split("-")[0]),d=parseInt(K[l].split("-")[1]);u<r&&(r=u),u>c&&(c=u),d<s&&(s=d),d>i&&(i=d)}if(r<c||1===o){for(var b=s,f=r;f>0&&R[f-1][b].usedby!==p.x;)f-=1;for(var j=c;j<g&&R[j+1][b].usedby!==p.x;)j+=1;n=p.a[b]+p.b[f];for(var O=f;O<=j;++O){e+=R[O][b].letter;var h=O+"-"+b;if(K.indexOf(h)>-1){for(var m=b;m>0&&R[O][m-1].usedby!==p.x;)m-=1;for(var y=b;y<g&&R[O][y+1].usedby!==p.x;)y+=1;if(m<y){for(var v="",x=m;x<=y;++x)v+=R[O][x].letter;t=[].concat(Object(a.a)(t),[v])}}}}if(e.length<2){for(var w=r,N=s;N>0&&R[w][N-1].usedby!==p.x;)N-=1;for(var A=i;A<g&&R[w][A+1].usedby!==p.x;)A+=1;n=p.b[w]+p.a[N],e="",t=[];for(var k=N;k<=A;++k){e+=R[w][k].letter;var S=w+"-"+k;if(K.indexOf(S)>-1){for(var q=w;q>0&&R[q-1][k].usedby!==p.x;)q-=1;for(var C=w;C<g&&R[C+1][k].usedby!==p.x;)C+=1;if(q<C){for(var T="",E=q;E<=C;++E)T+=R[E][k].letter;t=[].concat(Object(a.a)(t),[T])}}}}return{mainword:e,extrawords:t,pos:n}}function we(){return{squareArray:Object(a.a)(te.squareArray),rack:D===p.z?Object(a.a)(te.gtiles):Object(a.a)(te.ptiles),tiles:Object(a.a)(A),rescues:Q}}function Ne(){ie||(oe(!0),m.send(JSON.stringify({gameid:s,nickname:O,type:"pb",func:"allowundo",racksize:v,sender:n})))}function Ae(){var e=X.length,t=X[X.length-1],r=Object(a.a)(t.rewindInfo.squareArray),c=Object(a.a)(t.rewindInfo.tiles),i=t.by===p.q?Object(a.a)(t.rewindInfo.rack):Object(a.a)(q),o=t.by===p.p?Object(a.a)(t.rewindInfo.rack):Object(a.a)(E),l=t.rewindInfo.rescues,u=t.by,d=Object(a.a)(X);d.splice(e-1,1);var b={squareArray:Object(a.a)(r),gtiles:Object(a.a)(o),ptiles:Object(a.a)(i)};Oe(),k(c),C(i),I(o),M(Object(a.a)(r)),P(u),_(l),$(d),ne(b),m.send(JSON.stringify({gameid:s,nickname:O,type:"pb",func:"undoturn",racksize:v,sender:n,tiles:c,ptiles:i,gtiles:o,squareArray:r,whoseturn:u,rescues:l,moves:d,snapshot:b}))}var ke=function(){M(Object(a.a)(te.squareArray)),C(Object(a.a)(te.ptiles)),I(Object(a.a)(te.gtiles)),U(-1),z([]),W([-1,-1,p.d])};function Se(e){var t=e.length-1,n=t-1;return n>-1&&e[n].type===p.i&&e[t].type===p.i}var qe=function(){m.send(JSON.stringify({gameid:s,nickname:O,type:"pb",sender:n,whoseturn:D,racksize:v,func:"requestgamedata"}))};return Object(r.jsxs)("div",{className:"prisonbreak",children:[Object(r.jsxs)("div",{className:"w3-display-container w3-teal topBarHeight",children:[Object(r.jsx)("div",{className:"w3-display-middle",children:Object(r.jsx)("h1",{className:"myHeadingFont",children:"Prison Break"})}),Object(r.jsxs)("div",{className:"w3-display-topleft w3-black topBarCorner commonFontFamily",children:["Game id: ",s]}),Object(r.jsxs)("div",{className:"w3-display-bottomleft w3-orange topBarCorner commonFontFamily",children:["Prisoners: ",n===p.q?O:ue]}),Object(r.jsx)("div",{className:"w3-display-topright w3-black topBarCorner commonFontFamily",children:Object(r.jsx)(i.a,{href:"../../",children:Object(r.jsx)("a",{children:Object(r.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})})}),Object(r.jsxs)("div",{className:"w3-display-bottomright w3-orange topBarCorner commonFontFamily",children:["Guards: ",n===p.q?ue:O]})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col pbTileAndMovesOuter",children:[Object(r.jsx)(u.default,{tiles:A,othertiles:n===p.q?E:q}),Object(r.jsx)(d.default,{moves:X})]}),Object(r.jsx)("div",{className:"col pbPlayerOuterSection",children:n===p.q?Object(r.jsx)(o.default,{racktiles:q,whoseturn:D,selection:H,onClick:function(e){return me(e)},onClickFinishTurn:function(){return ye()},onClickTileRecall:function(){return ke()},onClickTileExchange:function(){return function(){if(A.length<v)window.alert("Need "+v+" tiles in the bag to exchange");else{for(var e=we(),t=[],r=Object(a.a)(A);t.length<v&&r.length>0;){var c=Math.floor(Math.random()*r.length);t.push(r[c]),r.splice(c,1)}t.sort(),(r=[].concat(Object(a.a)(r),Object(a.a)(te.ptiles))).sort();var i={by:p.q,type:p.k,rewindInfo:e},o=[].concat(Object(a.a)(X),[i]);Oe(),M(Object(a.a)(te.squareArray)),P(p.z),C(t),k(r),$(o),ne({squareArray:Object(a.a)(te.squareArray),ptiles:[].concat(t),gtiles:Object(a.a)(E)}),m.send(JSON.stringify({gameid:s,nickname:O,type:"pb",func:"ept",sender:n,whoseturn:p.z,racksize:v,squareArray:te.squareArray,ptiles:t,tiles:r,moves:o,rescues:Q}))}}()},onClickPassPlay:function(){return function(){var e=we(),t={by:p.q,type:p.i,rewindInfo:e},r=[].concat(Object(a.a)(X),[t]),c=Se(r)?p.y:p.z;ke(),Oe(),P(c),$(r),m.send(JSON.stringify({gameid:s,nickname:O,type:"pb",func:"ept",sender:n,squareArray:te.squareArray,ptiles:te.ptiles,tiles:A,whoseturn:c,racksize:v,moves:r,rescues:Q}))}()},onClickUndoLastPlay:function(){return Ae()},onClickAllowUndo:function(){return Ne()},participant:n,moves:X,allowRewind:ie}):Object(r.jsx)(o.default,{racktiles:E,whoseturn:D,selection:H,onClick:function(e){return me(e)},onClickFinishTurn:function(){return ve()},onClickTileRecall:function(){return ke()},onClickTileExchange:function(){return function(){if(A.length<v)window.alert("Need "+v+" tiles in the bag to exchange");else{for(var e=we(),t=[],r=Object(a.a)(A);t.length<v&&r.length>0;){var c=Math.floor(Math.random()*r.length);t.push(r[c]),r.splice(c,1)}t.sort(),(r=[].concat(Object(a.a)(r),Object(a.a)(te.gtiles))).sort();var i={by:p.p,type:p.k,rewindInfo:e},o=[].concat(Object(a.a)(X),[i]);Oe(),M(Object(a.a)(te.squareArray)),P(p.A),I(t),k(r),$(o),ne({squareArray:Object(a.a)(te.squareArray),ptiles:Object(a.a)(q),gtiles:[].concat(t)}),m.send(JSON.stringify({gameid:s,nickname:O,type:"pb",func:"egt",sender:n,whoseturn:p.A,racksize:v,squareArray:te.squareArray,gtiles:t,tiles:r,moves:o}))}}()},onClickPassPlay:function(){return function(){var e=we(),t={by:p.p,type:p.i,rewindInfo:e},r=[].concat(Object(a.a)(X),[t]),c=Se(r)?p.y:p.A;ke(),Oe(),P(c),$(r),m.send(JSON.stringify({gameid:s,nickname:O,type:"pb",func:"egt",sender:n,squareArray:te.squareArray,gtiles:te.gtiles,tiles:A,whoseturn:c,racksize:v,moves:r}))}()},onClickUndoLastPlay:function(){return Ae()},onClickAllowUndo:function(){return Ne()},participant:n,moves:X,allowRewind:ie})}),Object(r.jsx)("div",{className:"col",children:n===D?Object(r.jsx)("div",{className:"row",onKeyDownCapture:function(e){if(e.preventDefault(),n===D)if("Enter"!==e.key)if("Escape"!==e.key){if(e.key.match(/^[A-Za-z\?]$/)){var t=e.key.toUpperCase(),r=D===p.A?q:E,c=r.indexOf(t);if(-1===c&&(c=r.indexOf("?")),c>-1){var s=V[0],i=V[1],o=V[2];if(s>-1&&i>-1&&o!==p.d){var l=V;if(o===p.e){for(var u=-1,d=i+1;d<g+1&&-1===u;d++)R[s][d].usedby===p.x&&(u=d);return l=-1===u?[-1,-1,p.d]:[s,u,p.e],he(s,i,c,l),void U(-1)}if(o===p.c){for(var b=-1,f=2*v+1,j=s+1;j<f&&-1===b;j++)R[j][i].usedby===p.x&&(b=j);return l=-1===b?[-1,-1,p.d]:[b,i,p.c],he(s,i,c,l),void U(-1)}}}}else if("Backspace"===e.key&&K.length>0){var O=K[K.length-1],h=parseInt(O.split("-")[0]),m=parseInt(O.split("-")[1]),y=Object(a.a)(K),x=Object(a.a)(q),w=Object(a.a)(E),N=JSON.parse(JSON.stringify(R)),A=N[h],k=A[m],S=[-1,-1,p.d],T=H;y.splice(K.length-1,1);var B=R[h][m].letter;D===p.A?(x.push(B),T=x.length-1):(w.push(B),T=w.length-1),k.usedby=p.x,k.letter=p.h,A[m]=k,N[h]=Object(a.a)(A);var J=V[2];J!==p.d&&(S=[h,m,J],1===K.length&&(T=-1)),z(y),I(w),C(x),M(Object(a.a)(N)),W(S),U(T)}}else ke();else D===p.A?ye():ve()},children:Object(r.jsx)(l.default,{squareArray:R,rcd:V,onClick:function(e,t){return he(e,t,-1,null)}})}):Object(r.jsx)("div",{className:"row",children:Object(r.jsx)(l.default,{squareArray:R,rcd:V,onClick:function(){}})})}),Object(r.jsxs)("div",{className:"col",children:[Object(r.jsx)(b.default,{rescues:Q}),Object(r.jsx)(f.default,{gameid:s,client:m,nickname:O,msgs:fe,setMsgs:pe,participant:n})]})]}),Object(r.jsx)("div",{className:"w3-display-container w3-teal topBarHeight",children:Object(r.jsx)("div",{className:"w3-display-middle commonFontFamily",children:D===p.y?Object(r.jsx)("h1",{children:"Game Over!"}):Object(r.jsx)("p",{children:p.g[ae]})})})]})}}}]);