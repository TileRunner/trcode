_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"2Skw":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pb/prisonbreak2",function(){return n("UOmD")}])},KQm4:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return c}))},UOmD:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r=n("nKUr"),c=n("KQm4"),s=n("q1tI"),i=n("YFqc"),o=n.n(i);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}var b=function(){function e(t,n){a(this,e),this.callback=t,this.timerCalc=n,this.timer=null,this.tries=0}return l(e,[{key:"reset",value:function(){this.tries=0,clearTimeout(this.timer)}},{key:"scheduleTimeout",value:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout((function(){e.tries=e.tries+1,e.callback()}),this.timerCalc(this.tries+1))}}]),e}(),f=function(){function e(t,n){var r=this;a(this,e),this.customSocket=null,this.socketUrl=t,this.reconnectTimer=new b((function(){r.disconnect(),r.connect()}),this.reconnectAfterMs),this.messageFunction=n}return l(e,[{key:"reconnectAfterMs",value:function(e){return[1e3,2e3,5e3,1e4][e-1]||1e4}},{key:"connect",value:function(){var e=this;this.customSocket=new WebSocket(this.socketUrl),this.customSocket.onopen=function(t){console.log("connected to "+e.socketUrl)},this.customSocket.onclose=function(t){e.reconnectTimer.scheduleTimeout()},this.customSocket.onerror=function(e){},this.customSocket.onmessage=this.messageFunction}},{key:"disconnect",value:function(){this.customSocket.onclose=function(){},this.customSocket.close()}},{key:"send",value:function(e){this.customSocket.send(JSON.stringify(e))}}]),e}(),d=["0-0","0-7","0-14","7-0","7-14","14-0","14-7","14-14"],j=["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z","?","?"];function O(){var e=Object(s.useState)(!0),t=e[0],n=e[1],i=Object(s.useState)(""),o=i[0],a=i[1],u=Object(s.useState)(""),l=u[0],b=u[1],d=Object(s.useState)([]),j=d[0],O=d[1],p=Object(s.useState)(0),h=p[0],m=p[1],v=Object(s.useState)(new f("wss://tilerunner.herokuapp.com",(function(e){m((function(e){return e+1})),O((function(t){return[].concat(Object(c.a)(t),[e.data])}))}))),y=v[0];v[1];return Object(s.useEffect)((function(){return y.connect()}),[]),t||""===l?Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"In the lobby"}),Object(r.jsx)("label",{children:"Game id:\xa0"}),Object(r.jsx)("input",{name:"gameid",value:o,onChange:function(e){a(e.target.value)}}),Object(r.jsx)("label",{children:"\xa0"}),Object(r.jsx)("button",{id:"startgame",onClick:function(){o.length>0&&(b("P"),n(!1))},children:"Start Game"}),Object(r.jsx)("label",{children:"\xa0"}),Object(r.jsx)("button",{id:"joingame",onClick:function(){o.length>0&&(b("G"),n(!1))},children:"Join Game"}),j.map((function(e,t){return Object(r.jsx)("li",{children:e},t)}))]}):Object(r.jsx)(g,{prisonersOrGuards:l,gameid:o,msgid:h,wsmsgs:j,client:y,removeMessage:function(e){var t=j.indexOf(e),n=Object(c.a)(j);n.splice(t,1),O(n)}})}var p=function(e){var t="P"===e.squareusedby?"pbSquareUsedByPrisoners":"pbSquareUsedByGuards",n="."!==e.c?t:7===e.ri&&7===e.ci?"pbSquareCenterSquare":0!==e.ri&&7!==e.ri&&14!==e.ri||0!==e.ci&&7!==e.ci&&14!==e.ci?e.ri%2===e.ci%2?"pbSquare":"pbSquare2":"pbSquareEscapeHatch",c="."!==e.c?e.c:"pbSquareCenterSquare"===n?"\u2730":"pbSquareEscapeHatch"===n?"\ud83d\udcab":e.ri%2===e.ci%2?"\u2394":"\u2726";return Object(r.jsx)("button",{className:n,onClick:e.onClick,children:c})},h=function(e){var t=e.onClick,n=e.squares,c=e.usedby,s=function(e){return Object(r.jsx)("tr",{className:"row pbRow",children:n[e].map((function(n,s){return function(e,n,c,s){return Object(r.jsx)("td",{children:Object(r.jsx)(p,{c:c,ci:n,ri:e,squareusedby:s,onClick:function(){return t(e,n)}})},"Square".concat(e,"-").concat(n))}(e,s,n,c[e][s])}))},"BoardRow".concat(e))};return Object(r.jsx)("table",{className:"pbBoard",children:Object(r.jsx)("tbody",{children:n.map((function(e,t){return s(t)}))})})},g=function(e){var t=e.prisonersOrGuards,n=e.gameid,i=(e.msgid,e.wsmsgs),a=e.client,u=e.removeMessage,l=Object(s.useState)(0),b=(l[0],l[1],Object(s.useState)([].concat(j))),f=b[0],O=b[1],p=Object(s.useState)([]),g=p[0],v=p[1],y=Object(s.useState)([]),k=y[0],C=y[1],w=Object(s.useState)(Array(15).fill(Array(15).fill("."))),N=w[0],T=w[1],q=Object(s.useState)(Array(15).fill(Array(15).fill(""))),E=q[0],G=q[1],P=Object(s.useState)(-1),R=P[0],M=P[1],I=Object(s.useState)("P"),A=I[0],L=I[1],U=Object(s.useState)([]),F=U[0],_=U[1],J=Object(s.useState)(0),D=J[0],H=J[1],B=Object(s.useState)({squares:Object(c.a)(N),usedby:Object(c.a)(E),ptiles:Object(c.a)(g),gtiles:Object(c.a)(k)}),K=B[0],V=B[1];Object(s.useEffect)((function(){if("P"===t){for(var e=Object(c.a)(g),r=Object(c.a)(k),s=Object(c.a)(f);e.length<7;){var i=Math.floor(Math.random()*s.length);e.push(s[i]),s.splice(i,1),i=Math.floor(Math.random()*s.length),r.push(s[i]),s.splice(i,1)}e.sort(),r.sort(),C(r),v(e),O(s)}else try{console.log("Sending ggd"),a.send(JSON.stringify({gameid:n,type:"pb",func:"ggd"}))}catch(o){}}),[]);function Y(e){var r=JSON.parse(e);!function(e){console.log("Message being received by "+t),console.log("func : "+e.func),console.log("ptiles : "+JSON.stringify(g)+" -> "+e.ptiles),console.log("gtiles : "+JSON.stringify(k)+" -> "+e.gtiles)}(r),r.gameid===n&&"pb"===r.type&&("ggd"===r.func&&"P"===t&&a.send(JSON.stringify({gameid:n,type:"pb",func:"sgd",tiles:f,squares:N,ptiles:g,gtiles:k,usedby:E,whoseturn:A,selection:R,currentcoords:F,snapshot:K,rescues:D})),"sgd"===r.func&&"G"===t&&(O(r.tiles),T(r.squares),v(r.ptiles),C(r.gtiles),G(r.usedby),L(r.whoseturn),M(r.selection),_(r.currentcoords),V(r.snapshot),H(r.rescues)),"ept"===r.func&&(L("G"),M(-1),_([]),T(r.squares),G(r.usedby),v(r.ptiles),O(r.tiles),H(r.rescues),V({squares:Object(c.a)(r.squares),usedby:Object(c.a)(r.usedby),ptiles:Object(c.a)(r.ptiles),gtiles:Object(c.a)(k)})),"egt"===r.func&&(L("P"),M(-1),_([]),T(r.squares),G(r.usedby),C(r.gtiles),O(r.tiles),V({squares:Object(c.a)(r.squares),usedby:Object(c.a)(r.usedby),ptiles:Object(c.a)(g),gtiles:Object(c.a)(r.gtiles)})))}var z=function(){T(Object(c.a)(K.squares)),G(Object(c.a)(K.usedby)),v(Object(c.a)(K.ptiles)),C(Object(c.a)(K.gtiles)),M(-1),_([])};return i.length>0?Object(r.jsx)("button",{id:"processNextMessage",onClick:function(){var e=i[0];Y(e),u(e)},children:"Click to get update"}):Object(r.jsxs)("div",{className:"container-fluid prisonbreak",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-11 pbtitle",children:"Prison Break"}),Object(r.jsx)("div",{className:"col-1 pbhomelink","data-toggle":"tooltip",title:"Home",children:Object(r.jsx)(o.a,{href:"../../",children:Object(r.jsx)("a",{children:"\ud83c\udfe0"})})})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-2 pbPrisoners",children:Object(r.jsx)(S,{ptiles:g,whoseturn:A,selection:R,onClick:function(e){return t=e,void("P"===A?M(t):alert("It is not your turn"));var t},onClickFinishTurn:function(){return function(){for(var e=D,t=0;t<F.length;t++)d.indexOf(F[t])>-1&&(e+=1);for(var r=Object(c.a)(g),s=Object(c.a)(f);r.length<7&&s.length>0;){var i=Math.floor(Math.random()*s.length);r.push(s[i]),s.splice(i,1)}r.sort(),L("G"),M(-1),_([]),v(r),O(s),H(e),V({squares:Object(c.a)(N),usedby:Object(c.a)(E),ptiles:Object(c.a)(r),gtiles:Object(c.a)(k)}),a.send(JSON.stringify({gameid:n,type:"pb",func:"ept",squares:N,usedby:E,ptiles:r,tiles:s,rescues:e}))}()},onClickTileRecall:function(){return z()},rescues:D,prisonersOrGuards:t})}),Object(r.jsx)("div",{className:"col-6",align:"center",children:Object(r.jsx)(h,{squares:N,usedby:E,onClick:function(e,t){return function(e,t){var n=Object(c.a)(N),r=Object(c.a)(E),s=Object(c.a)(g),i=Object(c.a)(k),o=Object(c.a)(N[e]),a=N[e][t],u=Object(c.a)(F),l=String(e)+"-"+String(t),b=F.indexOf(l);if(R>-1&&"."===a){o[t]="P"===A?s[R]:i[R],n[e]=Object(c.a)(o),"P"===A?s.splice(R,1):i.splice(R,1);var f=Object(c.a)(r[e]);f[t]=A,r[e]=Object(c.a)(f),M((function(e){return e-1})),T(n),G(r),v(s),C(i),_([].concat(Object(c.a)(F),[l]))}else if("."!==a&&b>-1&&("P"===A&&s.length<7||"G"===A&&i.length<7)){"P"===A?s.push(a):i.push(a);var d=Object(c.a)(n[e]);d[t]=".",n[e]=Object(c.a)(d);var j=Object(c.a)(r[e]);j[t]="",r[e]=Object(c.a)(j),M("P"===A?s.length-1:i.length-1),u.splice(b,1),T(n),G(r),v(s),C(i),_(u)}}(e,t)}})}),Object(r.jsx)("div",{className:"col-2 pbGuards",children:Object(r.jsx)(x,{gtiles:k,whoseturn:A,selection:R,onClick:function(e){return t=e,void("G"===A?M(t):alert("It is not your turn"));var t},onClickFinishTurn:function(){return function(){for(var e=Object(c.a)(k),t=Object(c.a)(f);e.length<7&&t.length>0;){var r=Math.floor(Math.random()*t.length);e.push(t[r]),t.splice(r,1)}e.sort();var s=Object(c.a)(N),i=Object(c.a)(E),o=Object(c.a)(g),u=Object(c.a)(k);L("P"),M(-1),_([]),C(e),O(t),V({squares:s,usedby:i,ptiles:o,gtiles:u}),a.send(JSON.stringify({gameid:n,type:"pb",func:"egt",squares:N,usedby:E,gtiles:e,tiles:t}))}()},onClickTileRecall:function(){return z()},prisonersOrGuards:t})}),Object(r.jsx)("div",{className:"col-2",children:Object(r.jsx)(m,{tiles:f})})]})]})},m=function(e){return Object(r.jsxs)("div",{className:"pbTilepool",children:[Object(r.jsx)("h3",{children:"TILE POOL"}),e.tiles.map((function(t,n){return Object(r.jsxs)("span",{children:[n>0&&t!==e.tiles[n-1]?Object(r.jsx)("div",{className:"pbTilepoolDivider"}):Object(r.jsx)(r.Fragment,{}),Object(r.jsx)("span",{className:"pbTilepoolTile",children:t})]},"tile".concat(n))}))]})},v=function(e){return Object(r.jsx)("span",{className:e.tileclass,onClick:e.onClick,children:e.tilevalue})},y=function(e){return Object(r.jsx)("button",{className:"pbFinishTurn",onClick:e.onClick,children:"Finish Turn"})},k=function(e){return Object(r.jsx)("button",{className:"pbRecallTiles",onClick:e.onClick,children:"Recall Tiles"})},S=function(e){var t;return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"PRISONERS"}),Object(r.jsx)("p",{className:"pbTilerack",children:e.ptiles.map((function(t,n){return c="P"===e.whoseturn&&e.selection===n?"pbTileOnRackSelectedP":"pbTileOnRackP",s=n,i="P"===e.prisonersOrGuards?t:"*",Object(r.jsx)(v,{tileclass:c,tilevalue:i,onClick:function(){return e.onClick(s)}},c+String(s));var c,s,i}))}),"P"===e.whoseturn&&"P"===e.prisonersOrGuards?Object(r.jsx)(y,{onClick:function(){return e.onClickFinishTurn()}}):Object(r.jsx)(r.Fragment,{}),"P"===e.whoseturn&&"P"===e.prisonersOrGuards?Object(r.jsx)(k,{onClick:function(){return e.onClickTileRecall()}}):Object(r.jsx)(r.Fragment,{}),Object(r.jsxs)("p",{children:["Rescues made: ",e.rescues,Object(r.jsx)("br",{}),(t=e.rescues,Array(t).fill("nonsense").map((function(e,t){return Object(r.jsx)("span",{children:Object(r.jsx)("img",{src:"/breakfree.png",alt:"I'm free! I'm free!",width:"100",height:"100"})},e+String(t))})))]})]})},x=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"GUARDS"}),Object(r.jsx)("p",{className:"pbTilerack",children:e.gtiles.map((function(t,n){return c="G"===e.whoseturn&&e.selection===n?"pbTileOnRackSelectedG":"pbTileOnRackG",s=n,i="G"===e.prisonersOrGuards?t:"*",Object(r.jsx)(v,{tileclass:c,tilevalue:i,onClick:function(){return e.onClick(s)}},c+String(s));var c,s,i}))}),"G"===e.whoseturn&&"G"===e.prisonersOrGuards?Object(r.jsx)(y,{onClick:function(){return e.onClickFinishTurn()}}):Object(r.jsx)(r.Fragment,{}),"G"===e.whoseturn&&"G"===e.prisonersOrGuards?Object(r.jsx)(k,{onClick:function(){return e.onClickTileRecall()}}):Object(r.jsx)(r.Fragment,{})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var s=c(n("q1tI")),i=n("elyg"),o=n("nOHt"),a=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(c?"%"+c:"")]=!0}}var b=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),c=n&&n.pathname||"/",b=s.default.useMemo((function(){var t=(0,i.resolveHref)(c,e.href,!0),n=r(t,2),s=n[0],o=n[1];return{href:s,as:e.as?(0,i.resolveHref)(c,e.as):o||s}}),[c,e.href,e.as]),f=b.href,d=b.as,j=e.children,O=e.replace,p=e.shallow,h=e.scroll,g=e.locale;"string"===typeof j&&(j=s.default.createElement("a",null,j));var m=s.Children.only(j),v=m&&"object"===typeof m&&m.ref,y=(0,a.useIntersection)({rootMargin:"200px"}),k=r(y,2),S=k[0],x=k[1],C=s.default.useCallback((function(e){S(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,S]);(0,s.useEffect)((function(){var e=x&&t&&(0,i.isLocalURL)(f),r="undefined"!==typeof g?g:n&&n.locale,c=u[f+"%"+d+(r?"%"+r:"")];e&&!c&&l(n,f,d,{locale:r})}),[d,f,x,g,t,n]);var w={ref:C,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,s,o,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:s,locale:a,scroll:o}).then((function(e){e&&o&&document.body.focus()})))}(e,n,f,d,O,p,h,g)},onMouseEnter:function(e){(0,i.isLocalURL)(f)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(n,f,d,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var N="undefined"!==typeof g?g:n&&n.locale,T=(0,i.getDomainLocale)(d,N,n&&n.locales,n&&n.domainLocales);w.href=T||(0,i.addBasePath)((0,i.addLocale)(d,N,n&&n.defaultLocale))}return s.default.cloneElement(m,w)};t.default=b},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),c=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,c=(0,s.useRef)(),u=(0,s.useState)(!1),l=r(u,2),b=l[0],f=l[1],d=(0,s.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||b||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,s=r.observer,i=r.elements;return i.set(e,t),s.observe(e),function(){i.delete(e),s.unobserve(e),0===i.size&&(s.disconnect(),a.delete(c))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,b]);return(0,s.useEffect)((function(){o||b||(0,i.default)((function(){return f(!0)}))}),[b]),[d,b]};var s=n("q1tI"),i=c(n("0G5g")),o="undefined"!==typeof IntersectionObserver;var a=new Map}},[["2Skw",0,2,1,3]]]);