(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{1589:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pb/unseenTilesSection",function(){return n(149)}])},149:function(r,e,n){"use strict";n.r(e);var t=n(5893),i=(n(7294),n(5697)),o=n.n(i);function a(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function s(r){return function(r){if(Array.isArray(r))return a(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,e){if(!r)return;if("string"===typeof r)return a(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(r,e)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=function(r){var e=r.tiles,n=r.othertiles,i=s(e||[]).concat(s(n||[]));return i.sort(),"?"===i[0]&&(i.splice(0,1),i.push("?")),"?"===i[0]&&(i.splice(0,1),i.push("?")),(0,t.jsxs)("div",{className:"pbTilepool",children:[(0,t.jsx)("div",{className:"pbTilepoolTitle",children:"TILES"}),i.map((function(r,e){return(0,t.jsxs)("span",{children:[e>0&&r!==i[e-1]?(0,t.jsx)("span",{className:"pbTilepoolDivider"}):(0,t.jsx)(t.Fragment,{}),(0,t.jsx)("span",{className:"Q"===r?"pbTilepoolTile u":"pbTilepoolTile",children:r})]},"tile".concat(e))}))]})};l.propTypes={tiles:o().arrayOf(o().string),othertiles:o().arrayOf(o().string)},e.default=l}},function(r){r.O(0,[774,888,179],(function(){return e=1589,r(r.s=e);var e}));var e=r.O();_N_E=e}]);