(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{A1c0:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("EzCb");t.default=function(e){var t=e.usedby,n=e.type,c=e.letter,s=e.ri,i=e.ci,o=e.rcd,l=e.onClick,u=t!==a.y?"pbSquareInner PlayerTile":o[0]===s&&o[1]===i&&o[2]===a.f?"pbSquareInner RightArrow":o[0]===s&&o[1]===i&&o[2]===a.d?"pbSquareInner DownArrow":"pbSquareInner "+n,d=t!==a.y?c:u.indexOf("RightArrow")>-1?"\u27a1":u.indexOf("DownArrow")>-1?"\u2b07":u.indexOf("CenterSquare")>-1?Object(r.jsx)("i",{className:"material-icons",children:"stars"}):u.indexOf("EscapeHatch")>-1?Object(r.jsx)("i",{className:"material-icons",children:a.n}):".";return t===a.y?Object(r.jsx)("button",{className:u,onClick:l,children:d}):Object(r.jsx)("button",{className:u,onClick:l,children:Object(r.jsx)("div",{className:"pbSquareTileText ".concat(t+("Q"===c?" u":"")),children:d})})}},EzCb:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"s",(function(){return c})),n.d(t,"r",(function(){return s})),n.d(t,"q",(function(){return i})),n.d(t,"B",(function(){return o})),n.d(t,"A",(function(){return l})),n.d(t,"z",(function(){return u})),n.d(t,"n",(function(){return d})),n.d(t,"m",(function(){return f})),n.d(t,"p",(function(){return b})),n.d(t,"o",(function(){return p})),n.d(t,"k",(function(){return j})),n.d(t,"l",(function(){return h})),n.d(t,"j",(function(){return m})),n.d(t,"f",(function(){return O})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return v})),n.d(t,"y",(function(){return g})),n.d(t,"h",(function(){return x})),n.d(t,"t",(function(){return w})),n.d(t,"u",(function(){return N})),n.d(t,"v",(function(){return k})),n.d(t,"w",(function(){return A})),n.d(t,"x",(function(){return S})),n.d(t,"i",(function(){return C})),n.d(t,"g",(function(){return E})),n.d(t,"a",(function(){return T}));var r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],a=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],c="U",s="P",i="G",o=s,l=i,u="X",d="run_circle",f="security",b="PRISONERS",p="GUARDS",j="PLAY",h="SWAP",m="PASS",O="r",y="d",v="",g="",x=["Escapee: \"I'm free! I'm free!\". Little kid: \"I'm four! I'm four!\"","Two peanuts were walking down a back alley. One was a salted.","The psychic dwarf escaped! There's a small medium at large!","What do you call a vegetable who has escaped prison? An escapea!","The prisoners fave punctuation is a period. It marks the end of a sentence!","Prison is only one word, but to robbers it's a whole sentence."],w=2e4,N=["A","A","A","B","C","D","E","E","E","E","F","G","H","I","I","I","J","K","L","M","N","N","O","O","O","P","Q","R","R","S","T","T","U","V","W","X","Y","Z","?","?"],k=["A","A","A","A","A","B","C","D","D","E","E","E","E","E","E","F","G","H","I","I","I","I","I","J","K","L","L","M","N","N","N","O","O","O","O","P","Q","R","R","R","S","S","T","T","T","U","V","W","X","Y","Z","?","?"],A=["A","A","A","A","A","A","A","B","B","C","C","D","D","D","E","E","E","E","E","E","E","E","E","F","G","G","H","H","I","I","I","I","I","I","I","J","K","L","L","L","M","M","N","N","N","N","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","S","S","S","T","T","T","T","U","U","U","V","W","X","Y","Z","?","?"],S=["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z","?","?"],C="";function E(e){for(var t=2*e+1,n=Array(t),r=0;r<t;++r){for(var a=Array(t),c=0;c<t;++c){var s={row:r,col:c,type:"style2",usedby:g,letter:C};r===e&&c===e?s.type="CenterSquare":r%e===0&&c%e===0?s.type="EscapeHatch":r%2===c%2&&(s.type="style1"),a[c]=s}n[r]=[].concat(a)}return n}function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=(e.length-1)/2,n=2*t,r=t,a=!0;return e[0][0].usedby!==g&&e[0][r].usedby!==g&&e[0][n].usedby!==g&&e[r][0].usedby!==g&&e[r][n].usedby!==g&&e[n][0].usedby!==g&&e[n][r].usedby!==g&&e[n][n].usedby!==g&&(a=!1),a}},KQm4:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},KiN8:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("EzCb");t.default=function(e){var t=e.moves;return Object(r.jsxs)("div",{className:"pbMoves",children:[Object(r.jsx)("div",{className:"pbMovesTitle",children:"MOVES"}),Object(r.jsx)("div",{className:"pbMovesScrollable",id:"ScrollableMoves",children:t&&t.map((function(e,t){var n;return Object(r.jsxs)("div",{className:"pbMove",children:[Object(r.jsx)("span",{className:"pbMove by",children:e.by}),":",Object(r.jsx)("span",{className:"pbMove ".concat(e.type),children:e.type===a.k?Object(r.jsxs)(r.Fragment,{children:[e.pos," ",e.mainword.replace("Q","Qu"),null===(n=e.extrawords)||void 0===n?void 0:n.map((function(e,t){return Object(r.jsxs)("span",{children:[",\xa0",e.replace("Q","Qu")]},"extraword".concat(t))}))]}):Object(r.jsx)(r.Fragment,{})})]},"move".concat(t))}))})]})}},NOQH:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("EzCb"),c=function(e){var t="pbTileOnRack "+(e.selection===e.tileindex?"Selected ":"Unselected ")+("Q"===e.tilevalue?"u ":"")+e.participant,n=e.tileindex;return Object(r.jsx)("div",{className:t,onClick:function(t){return e.onClick(t)},children:Object(r.jsx)("div",{className:"pbTileOnRackText",children:e.tilevalue})},n)},s=function(e){return Object(r.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:Object(r.jsxs)("span",{className:"pbActionButtonText",children:[Object(r.jsx)("i",{className:"material-icons",children:"check"}),"\xa0Finish Turn"]})})},i=function(e){return Object(r.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:Object(r.jsxs)("span",{className:"pbActionButtonText",children:[Object(r.jsx)("i",{className:"material-icons",children:"undo"}),"\xa0Recall Tiles"]})})},o=function(e){return Object(r.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:Object(r.jsxs)("span",{className:"pbActionButtonText",children:[Object(r.jsx)("i",{className:"material-icons",children:"cached"}),"\xa0Swap Tiles"]})})},l=function(e){return Object(r.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:Object(r.jsxs)("span",{className:"pbActionButtonText",children:[Object(r.jsx)("i",{className:"material-icons",children:"not_interested"}),"\xa0Pass Turn"]})})},u=function(e){return e.alreadyAllowed?Object(r.jsx)("div",{className:"pbActionButtonSevere",children:Object(r.jsxs)("span",{className:"pbActionButtonSevereText",children:[Object(r.jsx)("i",{className:"material-icons",children:"report"}),"\xa0ENABLED",Object(r.jsx)("span",{className:"pbActionButtonSevereText2",children:"\xa0Allow undo is now enabled"})]})}):Object(r.jsx)("button",{className:"pbActionButtonSevere",onClick:e.onClick,children:Object(r.jsxs)("span",{className:"pbActionButtonSevereText",children:[Object(r.jsx)("i",{className:"material-icons",children:"report_problem"}),"\xa0Allow Undo Turn",Object(r.jsx)("span",{className:"pbActionButtonSevereText2",children:"Click to let opponent undo"})]})})},d=function(e){return Object(r.jsx)("button",{className:"pbActionButtonSevere",onClick:e.onClick,children:Object(r.jsxs)("span",{className:"pbActionButtonSevereText",children:[Object(r.jsx)("i",{className:"material-icons",children:"delete_forever"}),"\xa0Undo My Turn",Object(r.jsx)("span",{className:"pbActionButtonSevereText2",children:"Opponent has allowed undo"})]})})};function f(e){return Object(r.jsxs)("div",{className:"pbActionButtonDiv",children:[Object(r.jsx)("p",{children:Object(r.jsx)(s,{onClick:function(){return e.onClickFinishTurn()}})}),Object(r.jsx)("p",{children:Object(r.jsx)(i,{onClick:function(){return e.onClickTileRecall()}})}),Object(r.jsx)("p",{children:Object(r.jsx)(o,{onClick:function(){return e.onClickTileExchange()}})}),Object(r.jsx)("p",{children:Object(r.jsx)(l,{onClick:function(){return e.onClickPassPlay()}})})]})}function b(e){return Object(r.jsx)("div",{className:"pbActionButtonDiv",children:Object(r.jsx)("div",{children:Object(r.jsx)(u,{onClick:function(){return e.onClickAllowUndo()},alreadyAllowed:e.allowRewind})})})}function p(e){return Object(r.jsx)("div",{className:"pbActionButtonDiv",children:Object(r.jsx)("p",{children:Object(r.jsx)(d,{onClick:function(){return e.onClickUndoLastPlay()}})})})}t.default=function(e){var t=e.participant===a.r?a.n:a.m,n=e.participant===a.r?a.p:a.o;return Object(r.jsxs)("div",{className:"pbPlayerInnerSection",children:[Object(r.jsxs)("div",{className:"pbPlayerTitle",children:[Object(r.jsx)("i",{className:"material-icons",children:t}),"\xa0",n,"\xa0",Object(r.jsx)("i",{className:"material-icons",children:t})]}),Object(r.jsx)("div",{className:"pbTilerack",children:e.racktiles&&e.racktiles.map((function(t,n){return Object(r.jsx)(c,{whoseturn:e.whoseturn,participant:e.participant,selection:e.selection,tileindex:n,tilevalue:t,onClick:function(){return e.onClick(n)}},"RackTile".concat(n))}))}),e.whoseturn===e.participant?f(e):e.allowRewind&&e.moves&&e.moves.length>0&&e.moves[e.moves.length-1].by===e.participant&&p(e),e.moves&&e.moves.length>0&&e.moves[e.moves.length-1].by!==e.participant&&b(e)]})}},XxGB:function(e,t,n){"use strict";n.r(t);var r=n("nKUr");t.default=function(e){var t=e.rescues;return Object(r.jsxs)("div",{className:"pbRescuesMade",children:["Rescues made: ",t]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c=a(n("q1tI")),s=n("elyg"),i=n("nOHt"),o=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",d=c.default.useMemo((function(){var t=(0,s.resolveHref)(a,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,s.resolveHref)(a,e.as):i||c}}),[a,e.href,e.as]),f=d.href,b=d.as,p=e.children,j=e.replace,h=e.shallow,m=e.scroll,O=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var y=c.Children.only(p),v=y&&"object"===typeof y&&y.ref,g=(0,o.useIntersection)({rootMargin:"200px"}),x=r(g,2),w=x[0],N=x[1],k=c.default.useCallback((function(e){w(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,w]);(0,c.useEffect)((function(){var e=N&&t&&(0,s.isLocalURL)(f),r="undefined"!==typeof O?O:n&&n.locale,a=l[f+"%"+b+(r?"%"+r:"")];e&&!a&&u(n,f,b,{locale:r})}),[b,f,N,O,t,n]);var A={ref:k,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,i,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c,locale:o,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,f,b,j,h,m,O)},onMouseEnter:function(e){(0,s.isLocalURL)(f)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(n,f,b,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var S="undefined"!==typeof O?O:n&&n.locale,C=(0,s.getDomainLocale)(b,S,n&&n.locales,n&&n.domainLocales);A.href=C||(0,s.addBasePath)((0,s.addLocale)(b,S,n&&n.defaultLocale))}return c.default.cloneElement(y,A)};t.default=d},gx3M:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("KQm4"),c=n("q1tI");t.default=function(e){var t=e.gameid,n=void 0===t?"":t,s=e.client,i=e.nickname,o=e.msgs,l=void 0===o?[]:o,u=e.setMsgs,d=e.participant,f=void 0===d?"":d,b=Object(c.useState)(""),p=b[0],j=b[1];return Object(r.jsx)("div",{id:"ScrollableChat",className:"pbChat",children:Object(r.jsx)("table",{className:"pbChatTable",children:Object(r.jsxs)("tbody",{children:[l.map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"pbChatFrom",children:e.from}),Object(r.jsx)("td",{className:"pbChatMsg",children:e.msg})]},"ChatMessage".concat(t))})),Object(r.jsx)("tr",{children:Object(r.jsx)("td",{colSpan:"2",children:""===i?Object(r.jsx)("span",{children:"Please enter nickname to use chat"}):Object(r.jsx)("textarea",{className:""===p?"pbChatInputEmpty":"pbChatInput",name:"nextmsgInputArea",value:p,onChange:function(e){j(e.target.value)},onKeyDownCapture:function(e){if("Enter"===e.key&&p.length>0){e.preventDefault();var t=[].concat(Object(a.a)(l),[{from:i,msg:p}]),r=p;return u(t),j(""),void s.send({gameid:n,nickname:i,type:"pb",func:"chat",sender:f,sendmsg:r})}if("Backspace"===e.key&&p.length>0){e.preventDefault();var c=p.slice(0,p.length-1);j(c)}},placeholder:"chat..."})})})]})})})}},qa2E:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("KQm4");t.default=function(e){var t=e.tiles,n=e.othertiles,c=[].concat(Object(a.a)(t||[]),Object(a.a)(n||[]));return c.sort(),"?"===c[0]&&(c.splice(0,1),c.push("?")),"?"===c[0]&&(c.splice(0,1),c.push("?")),Object(r.jsxs)("div",{className:"pbTilepool",children:[Object(r.jsx)("div",{className:"pbTilepoolTitle",children:"TILES"}),c.map((function(e,t){return Object(r.jsxs)("span",{children:[t>0&&e!==c[t-1]?Object(r.jsx)("span",{className:"pbTilepoolDivider"}):Object(r.jsx)(r.Fragment,{}),Object(r.jsx)("span",{className:"Q"===e?"pbTilepoolTile u":"pbTilepoolTile",children:e})]},"tile".concat(t))}))]})}},rZeA:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("A1c0"),c=n("EzCb");t.default=function(e){var t=e.onClick,n=e.squareArray,s=void 0===n?[]:n,i=e.rcd,o=function(e){return Object(r.jsxs)("tr",{className:"pbRow",children:[Object(r.jsx)("td",{className:"pbBoardRowHeader",id:"BoardHeaderLeft",children:c.c[e]}),s[e].map((function(e){return function(e){return Object(r.jsx)("td",{className:"pbSquareOuter",children:Object(r.jsx)(a.default,{usedby:e.usedby,type:e.type,letter:e.letter,ri:e.row,ci:e.col,rcd:i,onClick:function(){return t(e.row,e.col)}})},"Square".concat(e.row,"-").concat(e.col))}(e)})),Object(r.jsx)("td",{className:"pbBoardRowHeader",id:"BoardHeaderRight",children:c.c[e]})]},"BoardRow".concat(e))};return Object(r.jsx)("table",{className:"pbBoard",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{className:"pbBoardColumnHeaderRow",children:[Object(r.jsx)("td",{className:"pbBoardHeaderTopLeft",children:"\xa0"}),s.map((function(e,t){return Object(r.jsx)("td",{className:"pbBoardColumnHeader",children:c.b[t]},"TopColumnHeader".concat(t))})),Object(r.jsx)("td",{className:"pbBoardHeaderTopRight",children:"\xa0"})]}),s.map((function(e,t){return o(t)})),Object(r.jsxs)("tr",{className:"pbBoardColumnHeaderRow",id:"BoardHeaderBottom",children:[Object(r.jsx)("td",{className:"pbBoardHeaderBottomLeft",children:"\xa0"}),s.map((function(e,t){return Object(r.jsx)("td",{className:"pbBoardColumnHeader",children:c.b[t]},"BottomColumnHeader".concat(t))})),Object(r.jsx)("td",{className:"pbBoardHeaderBottomRight",children:"\xa0"})]})]})})}},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=(0,c.useRef)(),l=(0,c.useState)(!1),u=r(l,2),d=u[0],f=u[1],b=(0,c.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||d||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,c=r.observer,s=r.elements;return s.set(e,t),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),o.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,c.useEffect)((function(){i||d||(0,s.default)((function(){return f(!0)}))}),[d]),[b,d]};var c=n("q1tI"),s=a(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var o=new Map},yhjZ:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("KQm4"),c=n("q1tI"),s=n("YFqc"),i=n.n(s),o=n("NOQH"),l=n("rZeA"),u=n("qa2E"),d=n("KiN8"),f=n("XxGB"),b=n("gx3M"),p=n("EzCb"),j=function(e){var t=document.getElementById(e);t.scrollTop=t.scrollHeight};t.default=function(e){var t=e.isrejoin,n=e.participant,s=e.gameid,h=e.nickname,m=e.wsmessage,O=e.client,y=e.racksize,v=void 0===y?4:y,g=v,x=2*v,w=6===v?p.w:7===v?p.x:5===v?p.v:p.u,N=Object(c.useState)(Object(a.a)(w)),k=N[0],A=N[1],S=Object(c.useState)([]),C=S[0],E=S[1],T=Object(c.useState)([]),B=T[0],I=T[1],q=Object(c.useState)([]),R=q[0],M=q[1],J=Object(c.useState)(-1),H=J[0],U=J[1],L=Object(c.useState)(p.B),z=L[0],P=L[1],F=Object(c.useState)([]),D=F[0],K=F[1],G=Object(c.useState)(0),Q=G[0],_=G[1],Y=Object(c.useState)([-1,-1,p.e]),V=Y[0],Z=Y[1],W=Object(c.useState)([]),X=W[0],$=W[1],ee=Object(c.useState)({squareArray:[],ptiles:[],gtiles:[]}),te=ee[0],ne=ee[1],re=Object(c.useState)(0),ae=re[0],ce=re[1],se=Object(c.useState)(!1),ie=se[0],oe=se[1],le=Object(c.useState)(""),ue=le[0],de=le[1],fe=Object(c.useState)([]),be=fe[0],pe=fe[1],je=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current=e})),t.current}(Q);Object(c.useEffect)((function(){if(Q>je){var e=document.createElement("audio");e.src=n===p.q?"https://tilerunner.github.io/OneGotAway.m4a":"https://tilerunner.github.io/yippee.m4a",e.play()}}),[Q]),Object(c.useEffect)((function(){var e=ae+1;e>=p.h.length&&(e=0),ce(e);var t=setInterval((function(){n!==z&&z!==p.z&&Te()}),p.t);return function(){return clearInterval(t)}}),[z]);var he=function(e){for(var t=[],r=[],c=Object(a.a)(w);t.length<v;){var i=Math.floor(Math.random()*c.length);t.push(c[i]),c.splice(i,1),i=Math.floor(Math.random()*c.length),r.push(c[i]),c.splice(i,1)}t.sort(),r.sort(),I(r),E(t),A(c),ne({squareArray:e,ptiles:[].concat(t),gtiles:[].concat(r)}),O.send({type:"pb",func:"startgame",gameid:s,racksize:v,sender:n,nickname:h,squareArray:e,tiles:c,ptiles:t,gtiles:r})},me=function(){console.log("Sending joinGame from game.js"),O.send({gameid:s,nickname:h,type:"pb",func:"joingame",sender:n})};function Oe(){U(-1),oe(!1),Z(-1,-1,p.e),K([])}Object(c.useEffect)((function(){!function(){var e=p.g(v);M(e),t||n!==p.r?me():he(e)}()}),[]),Object(c.useEffect)((function(){""!==m&&function(e){var t=JSON.parse(e);if("pb"===t.type&&"announce"===t.func)O.send({type:"pb",func:"hello",sender:n,gameid:s,nickname:h,whoseturn:z,racksize:v});else if(t.gameid===s&&"pb"===t.type&&(t.sender!=n&&""===ue&&t.nickname&&t.nickname.length>0&&de(t.nickname),"requestgamedata"!==t.func&&"joingame"!==t.func||t.sender===n||O.send({gameid:s,nickname:h,type:"pb",func:"providegamedata",sender:n,tiles:k,squareArray:R,ptiles:C,gtiles:B,whoseturn:z,snapshot:te,moves:X,rescues:Q,racksize:v,allowRewind:ie}),"providegamedata"===t.func&&t.sender!==n&&(t.moves.length!==X.length||t.tiles.length!==k.length||n===p.q&&0===B.length&&0===D.length||n===p.r&&0===C.length&&0===D.length)&&(A(t.tiles),M(t.squareArray),E(t.ptiles),I(t.gtiles),P(t.whoseturn),ne(t.snapshot),$(t.moves),_(t.rescues),oe(t.allowRewind)),"ept"===t.func&&n===p.q&&(Oe(),P(t.whoseturn),M(t.squareArray),E(t.ptiles),A(t.tiles),$(t.moves),_(t.rescues),ne({squareArray:JSON.parse(JSON.stringify(t.squareArray)),ptiles:Object(a.a)(t.ptiles),gtiles:Object(a.a)(B)})),"egt"===t.func&&n===p.r&&(Oe(),P(t.whoseturn),M(t.squareArray),I(t.gtiles),A(t.tiles),$(t.moves),ne({squareArray:JSON.parse(JSON.stringify(t.squareArray)),ptiles:Object(a.a)(C),gtiles:Object(a.a)(t.gtiles)})),"undoturn"===t.func&&t.sender!==n&&(Oe(),A(t.tiles),E(t.ptiles),I(t.gtiles),M(t.squareArray),P(t.whoseturn),_(t.rescues),$(t.moves),ne(t.snapshot)),"allowundo"===t.func&&t.sender!==n&&oe(!0),"chat"===t.func&&t.sender!=n)){var r=[].concat(Object(a.a)(be),[{from:t.nickname,msg:t.sendmsg}]);pe(r)}}(m)}),[m]),Object(c.useEffect)((function(){j("ScrollableMoves")}),[X]),Object(c.useEffect)((function(){j("ScrollableChat")}),[be]);var ye=function(e,t,n,r){var c=JSON.parse(JSON.stringify(R)),s=Object(a.a)(c[e]),i=s[t],o=Object(a.a)(C),l=Object(a.a)(B),u=Object(a.a)(D),d=String(e)+"-"+String(t),f=D.indexOf(d);if(-1===n&&(n=H,r=V),n>-1&&i.usedby===p.y){var b=z===p.B?o[n]:l[n];return i.letter=b,i.usedby=z,s[t]=i,c[e]=Object(a.a)(s),z===p.B?o.splice(n,1):l.splice(n,1),z===p.B&&n===o.length&&(n-=1),z===p.A&&n===l.length&&(n-=1),U(n),M(c),E(o),I(l),K([].concat(Object(a.a)(D),[d])),void Z(r)}if(f>-1)return z===p.B?o.push(i.letter):l.push(i.letter),i.usedby=p.y,i.letter=p.i,s[t]=i,c[e]=Object(a.a)(s),U(z===p.B?o.length-1:l.length-1),u.splice(f,1),M(c),E(o),I(l),K(u),void Z(-1,-1,p.e);if(i.usedby!==p.y);else{var j=V[0]!==e||V[1]!==t?p.f:V[2]===p.f?p.d:V[2]===p.d?p.e:p.f;Z(r=[e,t,j])}},ve=function(e){if(-1!==H)if(H!==e){var t=n===p.r?Object(a.a)(C):Object(a.a)(B),r=H,c=t[r],s=e;t.splice(r,1),t.splice(s,0,c),n===p.r?E(t):I(t),U(-1)}else U(-1);else U(e)},ge=function(){if(we()){for(var e=ke(),t=Q,r=["0-0","0-"+g,"0-"+x,g+"-0",g+"-"+x,x+"-0",x+"-"+g,x+"-"+x],c=0;c<D.length;c++)r.indexOf(D[c])>-1&&(t+=1);for(var i=Object(a.a)(C),o=Object(a.a)(k);i.length<v&&o.length>0;){var l=Math.floor(Math.random()*o.length);i.push(o[l]),o.splice(l,1)}i.sort();var u=i.length>0?p.A:p.z;p.a(R)||(u=p.z);var d=Ne(),f={by:p.r,type:p.k,rewindInfo:e,mainword:d.mainword,extrawords:d.extrawords,pos:d.pos},b=[].concat(Object(a.a)(X),[f]);Oe(),P(u),E(i),A(o),$(b),_(t),ne({squareArray:JSON.parse(JSON.stringify(R)),ptiles:Object(a.a)(i),gtiles:Object(a.a)(B)}),O.send({gameid:s,nickname:h,type:"pb",func:"ept",sender:n,squareArray:R,ptiles:i,tiles:o,whoseturn:u,racksize:v,moves:b,rescues:t})}},xe=function(){if(we()){for(var e=ke(),t=Object(a.a)(B),r=Object(a.a)(k);t.length<v&&r.length>0;){var c=Math.floor(Math.random()*r.length);t.push(r[c]),r.splice(c,1)}t.sort();var i=JSON.parse(JSON.stringify(R)),o=Object(a.a)(C),l=Object(a.a)(B),u=t.length>0?p.B:p.z;p.a(R)||(u=p.z);var d=Ne(),f={by:p.q,type:p.k,rewindInfo:e,mainword:d.mainword,extrawords:d.extrawords,pos:d.pos},b=[].concat(Object(a.a)(X),[f]);Oe(),P(u),I(t),A(r),$(b),ne({squareArray:i,ptiles:o,gtiles:l}),O.send({gameid:s,nickname:h,type:"pb",func:"egt",sender:n,squareArray:R,gtiles:t,tiles:r,moves:b,whoseturn:u,racksize:v})}};function we(){for(var e=!0,t=X.length,n=0;e&&n<t;++n)X[n].type===p.k&&(e=!1);if(e&&R[g][g].usedby===p.y)return window.alert("First play must hit center square"),!1;if(0===D.length)return window.alert("You didn't play any tiles"),!1;for(var r=D.length,a=x+1,c=-1,s=x+1,i=-1,o=0;o<r;++o){var l=parseInt(D[o].split("-")[0]),u=parseInt(D[o].split("-")[1]);if(l<a&&(a=l),l>c&&(c=l),u<s&&(s=u),u>i&&(i=u),!(l>0&&R[l-1][u].usedby!==p.y)&&!(u>0&&R[l][u-1].usedby!==p.y)&&!(l<x&&R[l+1][u].usedby!==p.y)&&!(u<x&&R[l][u+1].usedby!==p.y))return window.alert("Each played tile must be part of a word"),!1}if(a!==c&&s!==i)return window.alert("Tiles played must be in a straight line"),!1;for(var d=!1,f=!1,b=a;b<=c;++b)for(var j=s;j<=i;++j){if(R[b][j].usedby===p.y)return window.alert("There is a gap in your word"),!1;if(!e){var h=b+"-"+j;D.indexOf(h)<0&&(d=!0),a===c&&b>0&&R[b-1][j].usedby!==p.y&&(f=!0),a===c&&b<x&&R[b+1][j].usedby!==p.y&&(f=!0),s===i&&j>0&&R[b][j-1].usedby!==p.y&&(f=!0),s===i&&j<x&&R[b][j+1].usedby!==p.y&&(f=!0)}}return!!(e||(a===c&&s>0&&R[a][s-1].usedby!==p.y&&(d=!0),a===c&&i<x&&R[a][i+1].usedby!==p.y&&(d=!0),s===i&&a>0&&R[a-1][s]!==p.y&&(d=!0),s===i&&c<x&&R[c+1][s].usedby!==p.y&&(d=!0),d||f))||(window.alert("New words must extend an existing word and/or hook existing words or tiles"),!1)}function Ne(){for(var e="",t=[],n="",r=x+1,c=-1,s=x+1,i=-1,o=D.length,l=0;l<o;++l){var u=parseInt(D[l].split("-")[0]),d=parseInt(D[l].split("-")[1]);u<r&&(r=u),u>c&&(c=u),d<s&&(s=d),d>i&&(i=d)}if(r<c||1===o){for(var f=s,b=r;b>0&&R[b-1][f].usedby!==p.y;)b-=1;for(var j=c;j<x&&R[j+1][f].usedby!==p.y;)j+=1;n=p.b[f]+p.c[b];for(var h=b;h<=j;++h){e+=R[h][f].letter;var m=h+"-"+f;if(D.indexOf(m)>-1){for(var O=f;O>0&&R[h][O-1].usedby!==p.y;)O-=1;for(var y=f;y<x&&R[h][y+1].usedby!==p.y;)y+=1;if(O<y){for(var v="",g=O;g<=y;++g)v+=R[h][g].letter;t=[].concat(Object(a.a)(t),[v])}}}}if(e.length<2){for(var w=r,N=s;N>0&&R[w][N-1].usedby!==p.y;)N-=1;for(var k=i;k<x&&R[w][k+1].usedby!==p.y;)k+=1;n=p.c[w]+p.b[N],e="",t=[];for(var A=N;A<=k;++A){e+=R[w][A].letter;var S=w+"-"+A;if(D.indexOf(S)>-1){for(var C=w;C>0&&R[C-1][A].usedby!==p.y;)C-=1;for(var E=w;E<x&&R[E+1][A].usedby!==p.y;)E+=1;if(C<E){for(var T="",B=C;B<=E;++B)T+=R[B][A].letter;t=[].concat(Object(a.a)(t),[T])}}}}return{mainword:e,extrawords:t,pos:n}}function ke(){return{squareArray:JSON.parse(JSON.stringify(te.squareArray)),rack:z===p.A?Object(a.a)(te.gtiles):Object(a.a)(te.ptiles),tiles:Object(a.a)(k),rescues:Q}}function Ae(){ie||(oe(!0),O.send({gameid:s,nickname:h,type:"pb",func:"allowundo",racksize:v,sender:n}))}function Se(){var e=X.length,t=X[X.length-1],r=JSON.parse(JSON.stringify(t.rewindInfo.squareArray)),c=Object(a.a)(t.rewindInfo.tiles),i=t.by===p.r?Object(a.a)(t.rewindInfo.rack):Object(a.a)(C),o=t.by===p.q?Object(a.a)(t.rewindInfo.rack):Object(a.a)(B),l=t.rewindInfo.rescues,u=t.by,d=Object(a.a)(X);d.splice(e-1,1);var f={squareArray:JSON.parse(JSON.stringify(r)),gtiles:Object(a.a)(o),ptiles:Object(a.a)(i)};Oe(),A(c),E(i),I(o),M(r),P(u),_(l),$(d),ne(f),O.send({gameid:s,nickname:h,type:"pb",func:"undoturn",racksize:v,sender:n,tiles:c,ptiles:i,gtiles:o,squareArray:r,whoseturn:u,rescues:l,moves:d,snapshot:f})}var Ce=function(){M(JSON.parse(JSON.stringify(te.squareArray))),E(Object(a.a)(te.ptiles)),I(Object(a.a)(te.gtiles)),U(-1),K([]),Z([-1,-1,p.e])};function Ee(e){var t=e.length-1,n=t-1;return n>-1&&e[n].type===p.j&&e[t].type===p.j}var Te=function(){O.send({gameid:s,nickname:h,type:"pb",sender:n,whoseturn:z,racksize:v,func:"requestgamedata"})};return Object(r.jsxs)("div",{className:"prisonbreak",children:[Object(r.jsxs)("div",{className:"w3-display-container w3-teal topBarHeight",children:[Object(r.jsx)("div",{className:"w3-display-middle",children:Object(r.jsx)("h1",{className:"myHeadingFont",children:"Prison Break"})}),Object(r.jsxs)("div",{className:"w3-display-topleft w3-black topBarCorner commonFontFamily",children:["Game id: ",s]}),Object(r.jsxs)("div",{className:"w3-display-bottomleft w3-orange topBarCorner commonFontFamily",children:["Prisoners: ",n===p.r?h:ue]}),Object(r.jsx)("div",{className:"w3-display-topright w3-black topBarCorner commonFontFamily",children:Object(r.jsx)(i.a,{href:"../../",children:Object(r.jsx)("a",{children:Object(r.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})})}),Object(r.jsxs)("div",{className:"w3-display-bottomright w3-orange topBarCorner commonFontFamily",children:["Guards: ",n===p.r?ue:h]})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col pbTileAndMovesOuter",children:[Object(r.jsx)(u.default,{tiles:k,othertiles:n===p.r?B:C}),Object(r.jsx)(d.default,{moves:X})]}),Object(r.jsx)("div",{className:"col pbPlayerOuterSection",children:n===p.r?Object(r.jsx)(o.default,{racktiles:C,whoseturn:z,selection:H,onClick:function(e){return ve(e)},onClickFinishTurn:function(){return ge()},onClickTileRecall:function(){return Ce()},onClickTileExchange:function(){return function(){if(k.length<v)window.alert("Need "+v+" tiles in the bag to exchange");else{for(var e=ke(),t=[],r=Object(a.a)(k);t.length<v&&r.length>0;){var c=Math.floor(Math.random()*r.length);t.push(r[c]),r.splice(c,1)}t.sort(),(r=[].concat(Object(a.a)(r),Object(a.a)(te.ptiles))).sort();var i={by:p.r,type:p.l,rewindInfo:e},o=[].concat(Object(a.a)(X),[i]);Oe(),M(JSON.parse(JSON.stringify(te.squareArray))),P(p.A),E(t),A(r),$(o),ne({squareArray:JSON.parse(JSON.stringify(te.squareArray)),ptiles:[].concat(t),gtiles:Object(a.a)(B)}),O.send({gameid:s,nickname:h,type:"pb",func:"ept",sender:n,whoseturn:p.A,racksize:v,squareArray:te.squareArray,ptiles:t,tiles:r,moves:o,rescues:Q})}}()},onClickPassPlay:function(){return function(){var e=ke(),t={by:p.r,type:p.j,rewindInfo:e},r=[].concat(Object(a.a)(X),[t]),c=Ee(r)?p.z:p.A;Ce(),Oe(),P(c),$(r),O.send({gameid:s,nickname:h,type:"pb",func:"ept",sender:n,squareArray:te.squareArray,ptiles:te.ptiles,tiles:k,whoseturn:c,racksize:v,moves:r,rescues:Q})}()},onClickUndoLastPlay:function(){return Se()},onClickAllowUndo:function(){return Ae()},participant:n,moves:X,allowRewind:ie}):Object(r.jsx)(o.default,{racktiles:B,whoseturn:z,selection:H,onClick:function(e){return ve(e)},onClickFinishTurn:function(){return xe()},onClickTileRecall:function(){return Ce()},onClickTileExchange:function(){return function(){if(k.length<v)window.alert("Need "+v+" tiles in the bag to exchange");else{for(var e=ke(),t=[],r=Object(a.a)(k);t.length<v&&r.length>0;){var c=Math.floor(Math.random()*r.length);t.push(r[c]),r.splice(c,1)}t.sort(),(r=[].concat(Object(a.a)(r),Object(a.a)(te.gtiles))).sort();var i={by:p.q,type:p.l,rewindInfo:e},o=[].concat(Object(a.a)(X),[i]);Oe(),M(JSON.parse(JSON.stringify(te.squareArray))),P(p.B),I(t),A(r),$(o),ne({squareArray:JSON.parse(JSON.stringify(te.squareArray)),ptiles:Object(a.a)(C),gtiles:[].concat(t)}),O.send({gameid:s,nickname:h,type:"pb",func:"egt",sender:n,whoseturn:p.B,racksize:v,squareArray:te.squareArray,gtiles:t,tiles:r,moves:o})}}()},onClickPassPlay:function(){return function(){var e=ke(),t={by:p.q,type:p.j,rewindInfo:e},r=[].concat(Object(a.a)(X),[t]),c=Ee(r)?p.z:p.B;Ce(),Oe(),P(c),$(r),O.send({gameid:s,nickname:h,type:"pb",func:"egt",sender:n,squareArray:te.squareArray,gtiles:te.gtiles,tiles:k,whoseturn:c,racksize:v,moves:r})}()},onClickUndoLastPlay:function(){return Se()},onClickAllowUndo:function(){return Ae()},participant:n,moves:X,allowRewind:ie})}),Object(r.jsx)("div",{className:"col",children:n===z?Object(r.jsx)("div",{className:"row",onKeyDownCapture:function(e){if(e.preventDefault(),n===z)if("Enter"!==e.key)if("Escape"!==e.key){if(e.key.match(/^[A-Za-z\?]$/)){var t=e.key.toUpperCase(),r=z===p.B?C:B,c=r.indexOf(t);if(-1===c&&(c=r.indexOf("?")),c>-1){var s=V[0],i=V[1],o=V[2];if(s>-1&&i>-1&&o!==p.e){var l=V;if(o===p.f){for(var u=-1,d=i+1;d<x+1&&-1===u;d++)R[s][d].usedby===p.y&&(u=d);return l=-1===u?[-1,-1,p.e]:[s,u,p.f],ye(s,i,c,l),void U(-1)}if(o===p.d){for(var f=-1,b=2*v+1,j=s+1;j<b&&-1===f;j++)R[j][i].usedby===p.y&&(f=j);return l=-1===f?[-1,-1,p.e]:[f,i,p.d],ye(s,i,c,l),void U(-1)}}}}else if("Backspace"===e.key&&D.length>0){var h=D[D.length-1],m=parseInt(h.split("-")[0]),O=parseInt(h.split("-")[1]),y=Object(a.a)(D),g=Object(a.a)(C),w=Object(a.a)(B),N=JSON.parse(JSON.stringify(R)),k=N[m],A=k[O],S=[-1,-1,p.e],T=H;y.splice(D.length-1,1);var q=R[m][O].letter;z===p.B?(g.push(q),T=g.length-1):(w.push(q),T=w.length-1),A.usedby=p.y,A.letter=p.i,k[O]=A,N[m]=Object(a.a)(k);var J=V[2];J!==p.e&&(S=[m,O,J],1===D.length&&(T=-1)),K(y),I(w),E(g),M(N),Z(S),U(T)}}else Ce();else z===p.B?ge():xe()},children:Object(r.jsx)(l.default,{squareArray:R,rcd:V,onClick:function(e,t){return ye(e,t,-1,null)}})}):Object(r.jsx)("div",{className:"row",children:Object(r.jsx)(l.default,{squareArray:R,rcd:V,onClick:function(){}})})}),Object(r.jsxs)("div",{className:"col",children:[Object(r.jsx)(f.default,{rescues:Q}),Object(r.jsx)(b.default,{gameid:s,client:O,nickname:h,msgs:be,setMsgs:pe,participant:n})]})]}),Object(r.jsx)("div",{className:"w3-display-container w3-teal topBarHeight",children:Object(r.jsx)("div",{className:"w3-display-middle commonFontFamily",children:z===p.z?Object(r.jsx)("h1",{children:"Game Over!"}):Object(r.jsx)("p",{children:p.h[ae]})})})]})}}}]);