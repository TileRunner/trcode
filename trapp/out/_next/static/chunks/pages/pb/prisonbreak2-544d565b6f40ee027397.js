_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"2Skw":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pb/prisonbreak2",function(){return r("UOmD")}])},KQm4:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return s}))},UOmD:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return g}));var n=r("nKUr"),s=r("KQm4");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=r("q1tI"),d=r.n(p),b=r("YFqc"),j=r.n(b);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var s=h(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return f(this,r)}}var O=["0-0","0-7","0-14","7-0","7-14","14-0","14-7","14-14"],y=["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z","?","?"];function g(){return Object(n.jsx)(T,{})}function k(e){var t="P"===e.squareusedby?"pbSquareUsedByPrisoners":"pbSquareUsedByGuards",r="."!==e.c?t:7===e.ri&&7===e.ci?"pbSquareCenterSquare":0!==e.ri&&7!==e.ri&&14!==e.ri||0!==e.ci&&7!==e.ci&&14!==e.ci?e.ri%2===e.ci%2?"pbSquare":"pbSquare2":"pbSquareEscapeHatch",s="."!==e.c?e.c:"pbSquareCenterSquare"===r?"\u2730":"pbSquareEscapeHatch"===r?"\ud83d\udcab":e.ri%2===e.ci%2?"\u2394":"\u2726";return Object(n.jsx)("div",{children:Object(n.jsx)("td",{children:Object(n.jsx)("button",{className:r,onClick:e.onClick,children:s})})})}var m=function(e){l(r,e);var t=v(r);function r(){return i(this,r),t.apply(this,arguments)}return o(r,[{key:"renderSquare",value:function(e,t,r,s){var i=this;return Object(n.jsx)("div",{children:Object(n.jsx)(k,{c:r,ci:t,ri:e,squareusedby:s,onClick:function(){return i.props.onClick(e,t)}})},"Square".concat(e,"-").concat(t))}},{key:"renderRow",value:function(e){var t=this;return Object(n.jsx)("tr",{className:"row pbRow",children:this.props.squares[e].map((function(r,n){return t.renderSquare(e,n,r,t.props.usedby[e][n])}))},"BoardRow".concat(e))}},{key:"render",value:function(){var e=this;return Object(n.jsx)("table",{className:"pbBoard",children:Object(n.jsx)("tbody",{children:this.props.squares.map((function(t,r){return e.renderRow(r)}))})})}}]),r}(d.a.Component),T=function(e){l(r,e);var t=v(r);function r(e){var n;i(this,r),n=t.call(this,e);for(var c=[].concat(y),o=[],a=[];o.length<7;){var l=Math.floor(Math.random()*c.length);o.push(c[l]),c.splice(l,1),l=Math.floor(Math.random()*c.length),a.push(c[l]),c.splice(l,1)}o.sort(),a.sort();var u=Array(15).fill(Array(15).fill(".")),f=Array(15).fill(Array(15).fill(""));return n.state={squares:u,usedby:f,tiles:c,selection:-1,ptiles:o,gtiles:a,whoseturn:"P",currentcoords:[],rescues:0,snapshot:{squares:Object(s.a)(u),usedby:Object(s.a)(f),ptiles:[].concat(o),gtiles:[].concat(a)}},n}return o(r,[{key:"handleBoardSquareClick",value:function(e,t){console.log("click on "+e+", "+t);var r=this.state.selection,n=this.state.squares,i=n[e][t],c=this.state.whoseturn,o=this.state.ptiles,a=this.state.gtiles,l=this.state.usedby,u=this.state.currentcoords,f=String(e)+"-"+String(t),h=u.indexOf(f);if(r>-1&&"."===i){var p=Object(s.a)(n[e]);p[t]="P"===c?o[r]:a[r],n[e]=Object(s.a)(p),"P"===c?o.splice(r,1):a.splice(r,1);var d=Object(s.a)(l[e]);d[t]=c,l[e]=Object(s.a)(d),r=-1,this.setState({squares:n,usedby:l,ptiles:o,gtiles:a,selection:r,currentcoords:[].concat(Object(s.a)(u),[f])})}else if("."!==i&&h>-1&&("P"===c&&o.length<7||"G"===c&&a.length<7)){"P"===c?o.push(i):a.push(i);var b=Object(s.a)(n[e]);b[t]=".",n[e]=Object(s.a)(b);var j=Object(s.a)(l[e]);j[t]="",l[e]=Object(s.a)(j),r="P"===c?o.length-1:a.length-1,u.splice(h,1),this.setState({squares:n,usedby:l,ptiles:o,gtiles:a,selection:r,currentcoords:u})}}},{key:"handlePrisonerTileClick",value:function(e){"P"===this.state.whoseturn?this.setState({selection:e}):alert("It is not your turn")}},{key:"handleGuardTileClick",value:function(e){"G"===this.state.whoseturn?this.setState({selection:e}):alert("It is not your turn")}},{key:"endPrisonersTurn",value:function(){for(var e=this.state.rescues,t=0;t<this.state.currentcoords.length;t++)O.indexOf(this.state.currentcoords[t])>-1&&e++;for(var r=Object(s.a)(this.state.ptiles),n=Object(s.a)(this.state.tiles);r.length<7&&n.length>0;){var i=Math.floor(Math.random()*n.length);r.push(n[i]),n.splice(i,1)}r.sort();var c=this.state.squares,o=this.state.usedby,a=this.state.gtiles;this.setState({whoseturn:"G",selection:-1,currentcoords:[],rescues:e,ptiles:r,tiles:n,snapshot:{squares:Object(s.a)(c),usedby:Object(s.a)(o),ptiles:Object(s.a)(r),gtiles:Object(s.a)(a)}})}},{key:"endGuardsTurn",value:function(){for(var e=Object(s.a)(this.state.gtiles),t=Object(s.a)(this.state.tiles);e.length<7&&t.length>0;){var r=Math.floor(Math.random()*t.length);e.push(t[r]),t.splice(r,1)}e.sort();var n=Object(s.a)(this.state.squares),i=Object(s.a)(this.state.usedby),c=Object(s.a)(this.state.ptiles),o=Object(s.a)(e);this.setState({whoseturn:"P",selection:-1,currentcoords:[],gtiles:e,tiles:t,snapshot:{squares:n,usedby:i,ptiles:c,gtiles:o}})}},{key:"recallTiles",value:function(){var e=Object(s.a)(this.state.snapshot.squares),t=Object(s.a)(this.state.snapshot.usedby),r=Object(s.a)(this.state.snapshot.ptiles),n=Object(s.a)(this.state.snapshot.gtiles);console.log("Tile recall "+r.toString()+" : "+n.toString()),this.setState({selection:-1,currentcoords:[],squares:e,usedby:t,ptiles:r,gtiles:n})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{class:"container-fluid prisonbreak",children:[Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"col-11 pbtitle",children:"Prison Break"}),Object(n.jsx)("div",{class:"col-1 pbhomelink","data-toggle":"tooltip",title:"Home",children:Object(n.jsx)(j.a,{href:"../../",children:Object(n.jsx)("a",{children:"\ud83c\udfe0"})})})]}),Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"col-2 pbPrisoners",children:Object(n.jsx)(R,{ptiles:this.state.ptiles,whoseturn:this.state.whoseturn,selection:this.state.selection,onClick:function(t){return e.handlePrisonerTileClick(t)},onClickFinishTurn:function(){return e.endPrisonersTurn()},onClickTileRecall:function(){return e.recallTiles()},rescues:this.state.rescues})}),Object(n.jsx)("div",{class:"col-6",align:"center",children:Object(n.jsx)(m,{squares:this.state.squares,usedby:this.state.usedby,onClick:function(t,r){return e.handleBoardSquareClick(t,r)}})}),Object(n.jsx)("div",{class:"col-2 pbGuards",children:Object(n.jsx)(q,{gtiles:this.state.gtiles,whoseturn:this.state.whoseturn,selection:this.state.selection,onClick:function(t){return e.handleGuardTileClick(t)},onClickFinishTurn:function(){return e.endGuardsTurn()},onClickTileRecall:function(){return e.recallTiles()}})}),Object(n.jsx)("div",{class:"col-2",children:Object(n.jsx)(x,{tiles:this.state.tiles})})]})]})}}]),r}(d.a.Component);function x(e){return Object(n.jsxs)("div",{className:"pbTilepool",children:[Object(n.jsx)("h3",{children:"TILE POOL"}),e.tiles.map((function(t,r){return Object(n.jsxs)("span",{children:[r>0&&t!==e.tiles[r-1]?Object(n.jsx)("div",{className:"pbTilepoolDivider"}):Object(n.jsx)(n.Fragment,{}),Object(n.jsx)("span",{className:"pbTilepoolTile",children:t})]},"tile".concat(r))}))]})}function w(e){return Object(n.jsx)("td",{className:e.tileclass,onClick:e.onClick,children:e.tilevalue})}function S(e){return Object(n.jsx)("button",{className:"pbFinishTurn",onClick:e.onClick,children:"Finish Turn"})}function C(e){return Object(n.jsx)("button",{className:"pbRecallTiles",onClick:e.onClick,children:"Recall Tiles"})}var R=function(e){l(r,e);var t=v(r);function r(){return i(this,r),t.apply(this,arguments)}return o(r,[{key:"renderTile",value:function(e,t,r){var s=this;return Object(n.jsx)(w,{tileclass:e,tilevalue:r,onClick:function(){return s.props.onClick(t)}},e+String(t))}},{key:"renderFinishTurn",value:function(){var e=this;return Object(n.jsx)(S,{onClick:function(){return e.props.onClickFinishTurn()}})}},{key:"renderRecallTiles",value:function(){var e=this;return Object(n.jsx)(C,{onClick:function(){return e.props.onClickTileRecall()}})}},{key:"renderFreedPrisoners",value:function(e){return Array(e).fill("nonsense").map((function(e,t){return Object(n.jsx)("span",{children:Object(n.jsx)("img",{src:"/breakfree.png",alt:"I'm free! I'm free!",width:"100",height:"100"})},e+String(t))}))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"PRISONERS"}),Object(n.jsx)("p",{className:"pbTilerack",children:this.props.ptiles.map((function(t,r){return e.renderTile("P"===e.props.whoseturn&&e.props.selection===r?"pbTileOnRackSelectedP":"pbTileOnRackP",r,t)}))}),"P"===this.props.whoseturn?this.renderFinishTurn():Object(n.jsx)(n.Fragment,{}),"P"===this.props.whoseturn?this.renderRecallTiles():Object(n.jsx)(n.Fragment,{}),Object(n.jsxs)("p",{children:["Rescues made: ",this.props.rescues,Object(n.jsx)("br",{}),this.renderFreedPrisoners(this.props.rescues)]})]})}}]),r}(d.a.Component),q=function(e){l(r,e);var t=v(r);function r(){return i(this,r),t.apply(this,arguments)}return o(r,[{key:"renderTile",value:function(e,t,r){var s=this;return Object(n.jsx)(w,{tileclass:e,tilevalue:r,onClick:function(){return s.props.onClick(t)}},e+String(t))}},{key:"renderFinishTurn",value:function(){var e=this;return Object(n.jsx)(S,{onClick:function(){return e.props.onClickFinishTurn()}})}},{key:"renderRecallTiles",value:function(){var e=this;return Object(n.jsx)(C,{onClick:function(){return e.props.onClickTileRecall()}})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"GUARDS"}),Object(n.jsx)("p",{className:"pbTilerack",children:this.props.gtiles.map((function(t,r){return e.renderTile("G"===e.props.whoseturn&&e.props.selection===r?"pbTileOnRackSelectedG":"pbTileOnRackG",r,t)}))}),"G"===this.props.whoseturn?this.renderFinishTurn():Object(n.jsx)(n.Fragment,{}),"G"===this.props.whoseturn?this.renderRecallTiles():Object(n.jsx)(n.Fragment,{})]})}}]),r}(d.a.Component)},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),s=r("284h");t.__esModule=!0,t.default=void 0;var i=s(r("q1tI")),c=r("elyg"),o=r("nOHt"),a=r("vNVm"),l={};function u(e,t,r,n){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var s=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(s?"%"+s:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,o.useRouter)(),s=r&&r.pathname||"/",f=i.default.useMemo((function(){var t=(0,c.resolveHref)(s,e.href,!0),r=n(t,2),i=r[0],o=r[1];return{href:i,as:e.as?(0,c.resolveHref)(s,e.as):o||i}}),[s,e.href,e.as]),h=f.href,p=f.as,d=e.children,b=e.replace,j=e.shallow,v=e.scroll,O=e.locale;"string"===typeof d&&(d=i.default.createElement("a",null,d));var y=i.Children.only(d),g=y&&"object"===typeof y&&y.ref,k=(0,a.useIntersection)({rootMargin:"200px"}),m=n(k,2),T=m[0],x=m[1],w=i.default.useCallback((function(e){T(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,T]);(0,i.useEffect)((function(){var e=x&&t&&(0,c.isLocalURL)(h),n="undefined"!==typeof O?O:r&&r.locale,s=l[h+"%"+p+(n?"%"+n:"")];e&&!s&&u(r,h,p,{locale:n})}),[p,h,x,O,t,r]);var S={ref:w,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,r,n,s,i,o,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==o&&(o=n.indexOf("#")<0),t[s?"replace":"push"](r,n,{shallow:i,locale:a,scroll:o}).then((function(e){e&&o&&document.body.focus()})))}(e,r,h,p,b,j,v,O)},onMouseEnter:function(e){(0,c.isLocalURL)(h)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(r,h,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var C="undefined"!==typeof O?O:r&&r.locale,R=(0,c.getDomainLocale)(p,C,r&&r.locales,r&&r.domainLocales);S.href=R||(0,c.addBasePath)((0,c.addLocale)(p,C,r&&r.defaultLocale))}return i.default.cloneElement(y,S)};t.default=f},vNVm:function(e,t,r){"use strict";var n=r("J4zp"),s=r("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!o,s=(0,i.useRef)(),l=(0,i.useState)(!1),u=n(l,2),f=u[0],h=u[1],p=(0,i.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=a.get(t);if(r)return r;var n=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return a.set(t,r={id:t,observer:s,elements:n}),r}(r),s=n.id,i=n.observer,c=n.elements;return c.set(e,t),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),a.delete(s))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[r,t,f]);return(0,i.useEffect)((function(){o||f||(0,c.default)((function(){return h(!0)}))}),[f]),[p,f]};var i=r("q1tI"),c=s(r("0G5g")),o="undefined"!==typeof IntersectionObserver;var a=new Map}},[["2Skw",0,2,1,3]]]);