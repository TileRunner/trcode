_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(s.default.useContext(a.AmpStateContext))};var r,s=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,s=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||s&&c}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var a=r?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(n,s,a):n[s]=e[s]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),o=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=s.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(s){var a=!0,c=!1;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){c=!0;var i=s.key.slice(s.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(s.type){case"title":case"base":t.has(s.type)?a=!1:t.add(s.type);break;case"meta":for(var o=0,l=h.length;o<l;o++){var d=h[o];if(s.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?a=!1:n.add(d);else{var u=s.props[d],m=r[d]||new Set;"name"===d&&c||!m.has(u)?(m.add(u),r[d]=m):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return s.default.cloneElement(e,{key:n})}))}function j(e){var t=e.children,n=(0,s.useContext)(c.AmpStateContext),r=(0,s.useContext)(i.HeadManagerContext);return s.default.createElement(a.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,o.isInAmpMode)(n)},t)}j.rewind=function(){};var f=j;t.default=f},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var s=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=s},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),s=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||s(e)||a(e)||c()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var r=n("nKUr"),s=n("g4pe"),a=n.n(s),c=n("YFqc"),i=n.n(c),o=n("4Ebc"),l=n("q1tI"),d="w3-button w3-green w3-hover-black w3-border w3-animate-left",u="w3-right mymaterialicon w3-green",h="320px",m="w3-card-4 w3-green w3-cell w3-animate-right";function j(){var e=Object(l.useState)(!1),t=e[0],n=e[1],s=Object(l.useState)(!1),c=s[0],i=s[1],d=Object(l.useState)(!1),u=d[0],h=d[1];return Object(r.jsxs)("div",{children:[Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:"Tile Runner App"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsxs)("div",{className:"w3-container w3-teal",children:[Object(r.jsx)("h1",{className:"myHeadingFont",children:"Menu"}),Object(r.jsxs)("h2",{children:["Message from the coder: ","This is a test"]})]}),Object(r.jsxs)("div",{className:"w3-container w3-margin-left",children:[Object(r.jsx)(f,{descWm:t,setDescWm:n}),Object(r.jsx)(b,{descWi:c,setDescWi:i}),Object(r.jsx)(o.BrowserView,{children:Object(r.jsx)(p,{descPb:u,setDescPb:h})})]}),Object(r.jsx)("div",{className:"w3-container w3-teal",children:Object(r.jsx)("h1",{children:"Have fun!"})})]})}var f=function(e){return Object(r.jsxs)("div",{className:"w3-cell-row",style:{width:e.descWm?"100%":h},children:[Object(r.jsx)("div",{className:"w3-cell",children:Object(r.jsx)(i.a,{href:"/wm/mastermind",children:Object(r.jsx)("a",{children:Object(r.jsx)("h2",{className:"mySubHeadingFont",children:"Word Mastermind"})})})}),Object(r.jsx)("div",{className:"w3-cell ".concat(e.descWm?"w3-cell-middle":""),children:Object(r.jsx)("button",{id:"toggleDescribeWm",className:e.descWm?d:u,onClick:function(){e.setDescWm(!e.descWm)},children:e.descWm?"Hide info":Object(r.jsx)("i",{className:"material-icons",children:"help_outline"})})}),e.descWm?Object(r.jsx)("div",{className:m,children:Object(r.jsxs)("ul",{className:"w3-ul commonFontFamily",children:[Object(r.jsx)("li",{children:Object(r.jsx)("h2",{className:"CommenHeaderFontFamily",children:"Word Mastermind is a single player code cracking game."})}),Object(r.jsx)("li",{children:"The computer picks a random word."}),Object(r.jsx)("li",{children:"You enter guesses until you guess correctly."}),Object(r.jsx)("li",{children:"The computer tells you how many letters are correct and how many are in the correct position."}),Object(r.jsx)(o.BrowserView,{children:Object(r.jsx)("li",{children:"The computer shows you word info for guessed words."})}),Object(r.jsx)("li",{children:"The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."}),Object(r.jsx)("li",{children:"Due to licensing restrictions, this uses a 'common English lexicon' developed by some word game enthusiasts."})]})}):Object(r.jsx)(r.Fragment,{})]})},b=function(e){return Object(r.jsxs)("div",{className:"w3-cell-row",style:{width:e.descWi?"100%":h},children:[Object(r.jsx)("div",{className:"w3-cell",children:Object(r.jsx)(i.a,{href:"/wi/wordinfo",children:Object(r.jsx)("a",{children:Object(r.jsx)("h2",{className:"mySubHeadingFont",children:"Word Info"})})})}),Object(r.jsx)("div",{className:"w3-cell ".concat(e.descWi?"w3-cell-middle":""),children:Object(r.jsx)("button",{id:"toggleDescribeWi",className:e.descWi?d:u,onClick:function(){e.setDescWi(!e.descWi)},children:e.descWi?"Hide info":Object(r.jsx)("i",{className:"material-icons",children:"help_outline"})})}),e.descWi?Object(r.jsx)("div",{className:m,children:Object(r.jsxs)("ul",{className:"w3-ul commonFontFamily",children:[Object(r.jsx)("li",{children:Object(r.jsx)("h2",{className:"commonHeaderFontFamily",children:"Word Info is a utility to get information on words."})}),Object(r.jsx)("li",{children:"Anagrams - words that use the exact same letters."}),Object(r.jsx)("li",{children:"Inserts - words that can be made by inserting a single letter."}),Object(r.jsx)("li",{children:"Drops - words that can be made by dropping a single letter."}),Object(r.jsx)("li",{children:"Swaps - words that can be made by swapping a single letter."}),Object(r.jsx)("li",{children:"Due to licensing restrictions, this uses a 'common English lexicon' developed by some word game enthusiasts."})]})}):Object(r.jsx)(r.Fragment,{})]})},p=function(e){return Object(r.jsxs)("div",{className:"w3-cell-row",style:{width:e.descPb?"100%":h},children:[Object(r.jsx)("div",{className:"w3-cell",children:Object(r.jsx)(i.a,{href:"/pb/prisonbreak",children:Object(r.jsx)("a",{children:Object(r.jsx)("h2",{className:"mySubHeadingFont",children:"Prison Break"})})})}),Object(r.jsx)("div",{className:"w3-cell ".concat(e.descPb?"w3-cell-middle":""),children:Object(r.jsx)("button",{id:"toggleDescribePb",className:e.descPb?d:u,onClick:function(){e.setDescPb(!e.descPb)},children:e.descPb?"Hide info":Object(r.jsx)("i",{className:"material-icons",children:"help_outline"})})}),e.descPb?Object(r.jsx)("div",{className:m,children:Object(r.jsxs)("ul",{className:"w3-ul commonFontFamily",children:[Object(r.jsx)("li",{children:Object(r.jsx)("h2",{className:"commonHeaderFontFamily",children:"Prison Break is a two player crossword style game."})}),Object(r.jsx)("li",{children:"You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."}),Object(r.jsx)("li",{children:"Prisoners always play first."}),Object(r.jsx)("li",{children:"The first word played must touch the centre square."}),Object(r.jsxs)("li",{children:["To free a prisoner, the Prisoners must play a tile on one of the special ",Object(r.jsx)("span",{className:"material-icons pbSquareEscapeHatch",children:"run_circle"})," squares."]}),Object(r.jsxs)("li",{children:["When a ",Object(r.jsx)("span",{className:"pbSquareUsedByGuards",children:"\xa0?\xa0"})," is played it represents any letter and does not have to remain as the same letter throughout the game."]}),Object(r.jsxs)("li",{children:["The ",Object(r.jsx)("span",{className:"pbSquareUsedByGuards u",children:"Q"}),' tile can represent "Q" or "QU", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game.']}),Object(r.jsx)("li",{children:"The game ends if a player empties their rack."}),Object(r.jsxs)("li",{children:["The game ends if all the special ",Object(r.jsx)("span",{className:"material-icons pbSquareEscapeHatch",children:"run_circle"})," squares are used."]}),Object(r.jsx)("li",{children:"The game ends if both players pass."}),Object(r.jsx)("li",{children:"Due to licensing restrictions, this game does not validate words against any lexicon."})]})}):Object(r.jsx)(r.Fragment,{})]})}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),s=n("lwsE"),a=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),o=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var s=o(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),u=function(e){c(n,e);var t=l(n);function n(e){var a;return s(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=u},a1gu:function(e,t,n){var r=n("cDf5"),s=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?s(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var s=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=s},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3,5]]]);