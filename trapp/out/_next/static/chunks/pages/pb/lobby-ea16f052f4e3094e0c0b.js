_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{Jbs4:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pb/lobby",function(){return n("M+XG")}])},KQm4:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return c}))},"M+XG":function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),c=n("KQm4"),a=n("q1tI"),i=n("YFqc"),s=n.n(i),o=n("gBDq"),l="w3-button w3-border w3-blue w3-hover-black w3-round";t.default=function(e){var t=e.setIsrejoin,n=e.wsmessage,i=e.gameid,d=e.setGameid,u=e.nickname,b=e.setNickname,m=e.setParticipant,j=e.racksize,h=e.setRacksize,f=Object(a.useState)([]),O=f[0],p=f[1];function w(e){for(var t=0;t<O.length;++t)if(O[t].gameid===e)return t;return-1}function g(e){return 0===u.length||"Game over"===e.gamestatus?0:e.playingP?e.nicknameP===u?3:0:1}function v(e){return 0===u.length||"Game over"===e.gamestatus?0:e.playingG?e.nicknameG===u?3:0:2}function N(e){h(e)}return Object(a.useEffect)((function(){""!==n&&function(e){var t=JSON.parse(e),n=t.gameid,r=t.nickname,a=t.whoseturn,i=t.racksize;if(n&&n.length>0&&i&&a&&a.length>0){var s=!1,l=t.sender,d=Object(c.a)(O),u=w(n),b=l===o.q||u>-1&&O[u].playingP,m=l===o.p||u>-1&&O[u].playingG,j=i,h="Unknown";a===o.y?h="Game over":a===o.A?h="Prisoners turn":a===o.z&&(h="Guards turn");var f={gameid:n,nicknameP:l===o.q?r:u>-1?O[u].nicknameP:"",nicknameG:l===o.p?r:u>-1?O[u].nicknameG:"",gamestatus:h,playingP:b,playingG:m,racksize:j};if(u<0)s=!0,d=[].concat(Object(c.a)(d),[f]);else{var g=O[u];g.nicknameP===f.nicknameP&&g.nicknameG===f.nicknameG&&g.gamestatus===f.gamestatus&&g.playingP===f.playingP&&g.playingG===f.playingG&&g.racksize===f.racksize||(s=!0,d[u]=f)}s&&p(d)}}(n)}),[n]),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"w3-container w3-teal w3-bar",children:[Object(r.jsx)("h1",{className:"w3-bar-item w3-centre myHeadingFont",children:"Prison Break Lobby"}),Object(r.jsx)("div",{className:"w3-bar-item w3-right",children:Object(r.jsx)(s.a,{href:"../../",children:Object(r.jsx)("a",{children:Object(r.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})})})]}),Object(r.jsx)("div",{className:"w3-container",children:Object(r.jsxs)("div",{className:"w3-bar",children:[Object(r.jsx)("div",{className:"w3-bar-item",children:Object(r.jsx)("h2",{children:Object(r.jsx)("b",{children:"Nickname:"})})}),Object(r.jsx)("div",{className:"w3-bar-item",children:Object(r.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"text",name:"nickname",value:u,onChange:function(e){b(e.target.value)}})})]})}),Object(r.jsx)("div",{className:"w3-container",children:Object(r.jsxs)("div",{className:"w3-bar",children:[Object(r.jsx)("div",{className:"w3-bar-item",children:Object(r.jsx)("h2",{children:Object(r.jsxs)("span",{className:"pbPlayerTitle",children:["PRISONERS",Object(r.jsx)("i",{className:"material-icons",children:"arrow_right"})]})})}),Object(r.jsx)("div",{className:"w3-bar-item",children:Object(r.jsx)("h2",{children:Object(r.jsx)("b",{children:"Game ID:"})})}),Object(r.jsx)("div",{className:"w3-bar-item",children:Object(r.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"text",name:"gameid",value:i,onChange:function(e){d(e.target.value)}})}),Object(r.jsx)("div",{className:"w3-bar-item",children:Object(r.jsx)("h2",{children:Object(r.jsx)("b",{children:"Rack Size:"})})}),Object(r.jsxs)("div",{className:"w3-bar-item",children:[Object(r.jsx)("button",{id:"selectracksize4",className:4===j?"pbLobbyRackSizeSelected":"pbLobbyRackSize",onClick:function(){return N(4)},"data-toggle":"tooltip",title:"4 letter racks, 9 x 9 board",autoFocus:!0,children:"4"}),Object(r.jsx)("button",{id:"selectracksize5",className:5===j?"pbLobbyRackSizeSelected":"pbLobbyRackSize",onClick:function(){return N(5)},"data-toggle":"tooltip",title:"5 letter racks, 11 x 11 board",children:"5"}),Object(r.jsx)("button",{id:"selectracksize6",className:6===j?"pbLobbyRackSizeSelected":"pbLobbyRackSize",onClick:function(){return N(6)},"data-toggle":"tooltip",title:"6 letter racks, 13 x 13 board",children:"6"}),Object(r.jsx)("button",{id:"selectracksize7",className:7===j?"pbLobbyRackSizeSelected":"pbLobbyRackSize",onClick:function(){return N(7)},"data-toggle":"tooltip",title:"7 letter racks, 15 x 15 board",children:"7"}),Object(r.jsxs)("span",{className:"pbLobbyCellBlockInfo",children:[j," letter racks, ",2*j+1," x ",2*j+1," board."]})]}),Object(r.jsx)("div",{className:"w3-bar-item",children:Object(r.jsx)("button",{id:"startgame",className:l,onClick:function(){0===u.length?window.alert("Please enter nickname before starting a game"):i.length>0?!function(e){var t=w(e);return!(t<0)&&O[t].playingP}(i)?m(o.q):window.alert("Prisoners already playing that game"):window.alert("Please enter Game ID before starting a game")},children:"Start Game"})})]})}),Object(r.jsx)("div",{className:"w3-container",children:Object(r.jsxs)("div",{className:"w3-bar",children:[Object(r.jsx)("div",{className:"w3-bar-item",children:Object(r.jsx)("h2",{children:Object(r.jsxs)("span",{className:"pbPlayerTitle",children:["GUARDS",Object(r.jsx)("i",{className:"material-icons",children:"arrow_right"})]})})}),Object(r.jsx)("div",{className:"w3-bar-item",children:Object(r.jsx)("span",{className:"myCommonFont",children:Object(r.jsx)("h2",{children:'Find and click the "Join Game" button for your game.'})})})]})}),Object(r.jsx)("div",{className:"w3-container",children:Object(r.jsxs)("div",{className:"w3-bar",children:[Object(r.jsx)("div",{className:"w3-bar-item",children:Object(r.jsx)("h1",{children:Object(r.jsx)("i",{className:"material-icons w3-right",children:"report_problem"})})}),Object(r.jsx)("div",{className:"w3-bar-item",children:Object(r.jsx)("h3",{className:"myCommonFont",children:'If you lost connection, find and click the "Reconnect" button for your game id.'})})]})}),Object(r.jsx)("div",{className:"w3-container",children:Object(r.jsxs)("div",{className:"w3-bar",children:[Object(r.jsx)("div",{className:"w3-bar-item",children:Object(r.jsx)("h2",{className:"myCommonFont",children:Object(r.jsx)("b",{children:"Game list:"})})}),Object(r.jsx)("div",{className:"w3-bar-item",children:Object(r.jsxs)("table",{className:"w3-table-all w3-card-4",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{className:"w3-blue h4 myCommonFont",children:[Object(r.jsx)("th",{className:"w3-border-right",children:"Game ID"}),Object(r.jsx)("th",{className:"w3-border-right",children:"Prisoners"}),Object(r.jsx)("th",{className:"w3-border-right",children:"Guards"}),Object(r.jsx)("th",{className:"w3-border-right",children:"Rack Size"}),Object(r.jsx)("th",{children:"Game Status"})]})}),Object(r.jsx)("tbody",{children:O.map((function(e,n){return Object(r.jsxs)("tr",{className:"myCommonFont w3-hover-green",children:[Object(r.jsx)("td",{className:"w3-border-right",children:Object(r.jsx)("b",{children:e.gameid})}),0===g(e)?Object(r.jsx)("td",{id:"PrisonersNoAction".concat(n),className:"w3-border-right",children:"No action available"}):3===g(e)?Object(r.jsx)("td",{id:"PrisonersRejoin".concat(n),className:"w3-border-right",children:Object(r.jsx)("button",{className:"w3-button w3-red w3-round w3-hover-black",onClick:function(){t(!0),d(e.gameid),m(o.q),h(e.racksize)},children:"Reconnect"})}):Object(r.jsx)("td",{id:"PrisonersStart".concat(n),className:"w3-border-right",children:Object(r.jsx)("button",{className:l,onClick:function(){d(e.gameid),m(o.q)},children:"Start Game"})}),0===v(e)?Object(r.jsx)("td",{id:"GuardsNoAction".concat(n),className:"w3-border-right",children:"No action available"}):3===v(e)?Object(r.jsx)("td",{id:"GuardsRejoin".concat(n),className:"w3-border-right",children:Object(r.jsx)("button",{className:l,onClick:function(){t(!0),d(e.gameid),m(o.p),h(e.racksize)},children:"Reconnect"})}):Object(r.jsx)("td",{id:"GuardsJoin".concat(n),className:"w3-border-right",children:Object(r.jsx)("button",{className:l,onClick:function(){d(e.gameid),m(o.p),h(e.racksize)},children:"Join Game"})}),Object(r.jsx)("td",{id:"RackSize".concat(n),className:"w3-center w3-border-right",children:e.racksize}),Object(r.jsx)("td",{id:"GameStatus".concat(n),children:e.gamestatus})]},"OtherGame".concat(n))}))})]})})]})}),Object(r.jsx)("div",{className:"w3-container w3-teal",children:Object(r.jsx)("h1",{children:"Have fun!"})})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var a=c(n("q1tI")),i=n("elyg"),s=n("nOHt"),o=n("vNVm"),l={};function d(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),c=n&&n.pathname||"/",u=a.default.useMemo((function(){var t=(0,i.resolveHref)(c,e.href,!0),n=r(t,2),a=n[0],s=n[1];return{href:a,as:e.as?(0,i.resolveHref)(c,e.as):s||a}}),[c,e.href,e.as]),b=u.href,m=u.as,j=e.children,h=e.replace,f=e.shallow,O=e.scroll,p=e.locale;"string"===typeof j&&(j=a.default.createElement("a",null,j));var w=a.Children.only(j),g=w&&"object"===typeof w&&w.ref,v=(0,o.useIntersection)({rootMargin:"200px"}),N=r(v,2),x=N[0],y=N[1],k=a.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);(0,a.useEffect)((function(){var e=y&&t&&(0,i.isLocalURL)(b),r="undefined"!==typeof p?p:n&&n.locale,c=l[b+"%"+m+(r?"%"+r:"")];e&&!c&&d(n,b,m,{locale:r})}),[m,b,y,p,t,n]);var E={ref:k,onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,a,s,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:a,locale:o,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,n,b,m,h,f,O,p)},onMouseEnter:function(e){(0,i.isLocalURL)(b)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),d(n,b,m,{priority:!0}))}};if(e.passHref||"a"===w.type&&!("href"in w.props)){var I="undefined"!==typeof p?p:n&&n.locale,S=(0,i.getDomainLocale)(m,I,n&&n.locales,n&&n.domainLocales);E.href=S||(0,i.addBasePath)((0,i.addLocale)(m,I,n&&n.defaultLocale))}return a.default.cloneElement(w,E)};t.default=u},gBDq:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"r",(function(){return a})),n.d(t,"q",(function(){return i})),n.d(t,"p",(function(){return s})),n.d(t,"A",(function(){return o})),n.d(t,"z",(function(){return l})),n.d(t,"y",(function(){return d})),n.d(t,"m",(function(){return u})),n.d(t,"l",(function(){return b})),n.d(t,"o",(function(){return m})),n.d(t,"n",(function(){return j})),n.d(t,"j",(function(){return h})),n.d(t,"k",(function(){return f})),n.d(t,"i",(function(){return O})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return w})),n.d(t,"d",(function(){return g})),n.d(t,"x",(function(){return v})),n.d(t,"g",(function(){return N})),n.d(t,"s",(function(){return x})),n.d(t,"t",(function(){return y})),n.d(t,"u",(function(){return k})),n.d(t,"v",(function(){return E})),n.d(t,"w",(function(){return I})),n.d(t,"h",(function(){return S})),n.d(t,"f",(function(){return R}));var r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],c=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],a="U",i="P",s="G",o=i,l=s,d="X",u="run_circle",b="security",m="PRISONERS",j="GUARDS",h="PLAY",f="SWAP",O="PASS",p="r",w="d",g="",v="",N=["Escapee: \"I'm free! I'm free!\". Little kid: \"I'm four! I'm four!\"","Two peanuts were walking down a back alley. One was a salted.","The psychic dwarf escaped! There's a small medium at large!","What do you call a vegetable who has escaped prison? An escapea!","The prisoners fave punctuation is a period. It marks the end of a sentence!","Prison is only one word, but to robbers it's a whole sentence."],x=2e4,y=["A","A","A","B","C","D","E","E","E","E","F","G","H","I","I","I","J","K","L","M","N","N","O","O","O","P","Q","R","R","S","T","T","U","V","W","X","Y","Z","?","?"],k=["A","A","A","A","A","B","C","D","D","E","E","E","E","E","E","F","G","H","I","I","I","I","I","J","K","L","L","M","N","N","N","O","O","O","O","P","Q","R","R","R","S","S","T","T","T","U","V","W","X","Y","Z","?","?"],E=["A","A","A","A","A","A","A","B","B","C","C","D","D","D","E","E","E","E","E","E","E","E","E","F","G","G","H","H","I","I","I","I","I","I","I","J","K","L","L","L","M","M","N","N","N","N","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","S","S","S","T","T","T","T","U","U","U","V","W","X","Y","Z","?","?"],I=["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z","?","?"],S="";function R(e){for(var t=2*e+1,n=Array(t),r=0;r<t;++r){for(var c=Array(t),a=0;a<t;++a){var i={row:r,col:a,type:"style2",usedby:v,letter:S};r===e&&a===e?i.type="CenterSquare":r%e===0&&a%e===0?i.type="EscapeHatch":r%2===a%2&&(i.type="style1"),c[a]=i}n[r]=[].concat(c)}return n}},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),c=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,c=(0,a.useRef)(),l=(0,a.useState)(!1),d=r(l,2),u=d[0],b=d[1],m=(0,a.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||u||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),o.delete(c))}}(e,(function(e){return e&&b(e)}),{rootMargin:t}))}),[n,t,u]);return(0,a.useEffect)((function(){s||u||(0,i.default)((function(){return b(!0)}))}),[u]),[m,u]};var a=n("q1tI"),i=c(n("0G5g")),s="undefined"!==typeof IntersectionObserver;var o=new Map}},[["Jbs4",0,1,2,3]]]);