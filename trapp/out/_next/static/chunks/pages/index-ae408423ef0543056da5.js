_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(s.default.useContext(a.AmpStateContext))};var r,s=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,s=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||s&&c}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var a=r?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(n,s,a):n[s]=e[s]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),o=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function j(e,t){return e.reduce((function(e,t){var n=s.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(s){var a=!0,c=!1;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){c=!0;var i=s.key.slice(s.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(s.type){case"title":case"base":t.has(s.type)?a=!1:t.add(s.type);break;case"meta":for(var o=0,l=h.length;o<l;o++){var d=h[o];if(s.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?a=!1:n.add(d);else{var u=s.props[d],j=r[d]||new Set;"name"===d&&c||!j.has(u)?(j.add(u),r[d]=j):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return s.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,s.useContext)(c.AmpStateContext),r=(0,s.useContext)(i.HeadManagerContext);return s.default.createElement(a.default,{reduceComponentsToState:j,headManager:r,inAmpMode:(0,o.isInAmpMode)(n)},t)}m.rewind=function(){};var f=m;t.default=f},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var s=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=s},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),s=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||s(e)||a(e)||c()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n("nKUr"),s=n("o0o1"),a=n.n(s),c=n("HaE+"),i=n("g4pe"),o=n.n(i),l=n("YFqc"),d=n.n(l),u=n("4Ebc"),h=n("q1tI"),j="w3-button w3-green w3-hover-black w3-border w3-animate-left",m="w3-right mymaterialicon w3-green",f="320px",p="w3-card-4 w3-green w3-cell w3-animate-right";function b(){var e=Object(h.useState)(!1),t=e[0],n=e[1],s=Object(h.useState)(!1),i=s[0],l=s[1],d=Object(h.useState)(!1),j=d[0],m=d[1],f=Object(h.useState)("Loading"),p=f[0],b=f[1],y=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://tilerunner.herokuapp.com/evtest",e.next=3,fetch("https://tilerunner.herokuapp.com/evtest");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,b("".concat(n.evtest));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){y()}),[]),Object(r.jsxs)("div",{children:[Object(r.jsxs)(o.a,{children:[Object(r.jsx)("title",{children:"Tile Runner App"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsxs)("div",{className:"w3-container w3-teal",children:[Object(r.jsx)("h1",{className:"myHeadingFont",children:"Menu"}),Object(r.jsx)("h2",{children:p})]}),Object(r.jsxs)("div",{className:"w3-container w3-margin-left",children:[Object(r.jsx)(x,{descWm:t,setDescWm:n}),Object(r.jsx)(w,{descWi:i,setDescWi:l}),Object(r.jsx)(u.BrowserView,{children:Object(r.jsx)(O,{descPb:j,setDescPb:m})})]}),Object(r.jsx)("div",{className:"w3-container w3-teal",children:Object(r.jsx)("h1",{children:"Have fun!"})})]})}var x=function(e){return Object(r.jsxs)("div",{className:"w3-cell-row",style:{width:e.descWm?"100%":f},children:[Object(r.jsx)("div",{className:"w3-cell",children:Object(r.jsx)(d.a,{href:"/wm/mastermind",children:Object(r.jsx)("a",{children:Object(r.jsx)("h2",{className:"mySubHeadingFont",children:"Word Mastermind"})})})}),Object(r.jsx)("div",{className:"w3-cell ".concat(e.descWm?"w3-cell-middle":""),children:Object(r.jsx)("button",{id:"toggleDescribeWm",className:e.descWm?j:m,onClick:function(){e.setDescWm(!e.descWm)},children:e.descWm?"Hide info":Object(r.jsx)("i",{className:"material-icons",children:"help_outline"})})}),e.descWm?Object(r.jsx)("div",{className:p,children:Object(r.jsxs)("ul",{className:"w3-ul commonFontFamily",children:[Object(r.jsx)("li",{children:Object(r.jsx)("h2",{className:"CommenHeaderFontFamily",children:"Word Mastermind is a single player code cracking game."})}),Object(r.jsx)("li",{children:"The computer picks a random word."}),Object(r.jsx)("li",{children:"You enter guesses until you guess correctly."}),Object(r.jsx)("li",{children:"The computer tells you how many letters are correct and how many are in the correct position."}),Object(r.jsx)(u.BrowserView,{children:Object(r.jsx)("li",{children:"The computer shows you word info for guessed words."})}),Object(r.jsx)("li",{children:"The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."}),Object(r.jsx)("li",{children:"Due to licensing restrictions, this uses a 'common English lexicon' developed by some word game enthusiasts."})]})}):Object(r.jsx)(r.Fragment,{})]})},w=function(e){return Object(r.jsxs)("div",{className:"w3-cell-row",style:{width:e.descWi?"100%":f},children:[Object(r.jsx)("div",{className:"w3-cell",children:Object(r.jsx)(d.a,{href:"/wi/wordinfo",children:Object(r.jsx)("a",{children:Object(r.jsx)("h2",{className:"mySubHeadingFont",children:"Word Info"})})})}),Object(r.jsx)("div",{className:"w3-cell ".concat(e.descWi?"w3-cell-middle":""),children:Object(r.jsx)("button",{id:"toggleDescribeWi",className:e.descWi?j:m,onClick:function(){e.setDescWi(!e.descWi)},children:e.descWi?"Hide info":Object(r.jsx)("i",{className:"material-icons",children:"help_outline"})})}),e.descWi?Object(r.jsx)("div",{className:p,children:Object(r.jsxs)("ul",{className:"w3-ul commonFontFamily",children:[Object(r.jsx)("li",{children:Object(r.jsx)("h2",{className:"commonHeaderFontFamily",children:"Word Info is a utility to get information on words."})}),Object(r.jsx)("li",{children:"Anagrams - words that use the exact same letters."}),Object(r.jsx)("li",{children:"Inserts - words that can be made by inserting a single letter."}),Object(r.jsx)("li",{children:"Drops - words that can be made by dropping a single letter."}),Object(r.jsx)("li",{children:"Swaps - words that can be made by swapping a single letter."}),Object(r.jsx)("li",{children:"Due to licensing restrictions, this uses a 'common English lexicon' developed by some word game enthusiasts."})]})}):Object(r.jsx)(r.Fragment,{})]})},O=function(e){return Object(r.jsxs)("div",{className:"w3-cell-row",style:{width:e.descPb?"100%":f},children:[Object(r.jsx)("div",{className:"w3-cell",children:Object(r.jsx)(d.a,{href:"/pb/prisonbreak",children:Object(r.jsx)("a",{children:Object(r.jsx)("h2",{className:"mySubHeadingFont",children:"Prison Break"})})})}),Object(r.jsx)("div",{className:"w3-cell ".concat(e.descPb?"w3-cell-middle":""),children:Object(r.jsx)("button",{id:"toggleDescribePb",className:e.descPb?j:m,onClick:function(){e.setDescPb(!e.descPb)},children:e.descPb?"Hide info":Object(r.jsx)("i",{className:"material-icons",children:"help_outline"})})}),e.descPb?Object(r.jsx)("div",{className:p,children:Object(r.jsxs)("ul",{className:"w3-ul commonFontFamily",children:[Object(r.jsx)("li",{children:Object(r.jsx)("h2",{className:"commonHeaderFontFamily",children:"Prison Break is a two player crossword style game."})}),Object(r.jsx)("li",{children:"You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."}),Object(r.jsx)("li",{children:"Prisoners always play first."}),Object(r.jsx)("li",{children:"The first word played must touch the centre square."}),Object(r.jsxs)("li",{children:["To free a prisoner, the Prisoners must play a tile on one of the special ",Object(r.jsx)("span",{className:"material-icons pbSquareEscapeHatch",children:"run_circle"})," squares."]}),Object(r.jsxs)("li",{children:["When a ",Object(r.jsx)("span",{className:"pbSquareUsedByGuards",children:"\xa0?\xa0"})," is played it represents any letter and does not have to remain as the same letter throughout the game."]}),Object(r.jsxs)("li",{children:["The ",Object(r.jsx)("span",{className:"pbSquareUsedByGuards u",children:"Q"}),' tile can represent "Q" or "QU", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game.']}),Object(r.jsx)("li",{children:"The game ends if a player empties their rack."}),Object(r.jsxs)("li",{children:["The game ends if all the special ",Object(r.jsx)("span",{className:"material-icons pbSquareEscapeHatch",children:"run_circle"})," squares are used."]}),Object(r.jsx)("li",{children:"The game ends if both players pass."}),Object(r.jsx)("li",{children:"Due to licensing restrictions, this game does not validate words against any lexicon."})]})}):Object(r.jsx)(r.Fragment,{})]})}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),s=n("lwsE"),a=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),o=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var s=o(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),u=function(e){c(n,e);var t=l(n);function n(e){var a;return s(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=u},a1gu:function(e,t,n){var r=n("cDf5"),s=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?s(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var s=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=s},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3,5]]]);