(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[997],{6071:function(e,n,r){"use strict";var t=r(3848),o=r(9448);n.default=void 0;var a=o(r(7294)),i=r(1689),u=r(2441),c=r(5749),f={};function s(e,n,r,t){if(e&&(0,i.isLocalURL)(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;f[n+"%"+r+(o?"%"+o:"")]=!0}}var l=function(e){var n=!1!==e.prefetch,r=(0,u.useRouter)(),o=r&&r.asPath||"/",l=a.default.useMemo((function(){var n=(0,i.resolveHref)(o,e.href,!0),r=t(n,2),a=r[0],u=r[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=l.href,p=l.as,v=e.children,y=e.replace,m=e.shallow,b=e.scroll,h=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=a.Children.only(v),w=g&&"object"===typeof g&&g.ref,C=(0,c.useIntersection)({rootMargin:"200px"}),k=t(C,2),E=k[0],M=k[1],L=a.default.useCallback((function(e){E(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,E]);(0,a.useEffect)((function(){var e=M&&n&&(0,i.isLocalURL)(d),t="undefined"!==typeof h?h:r&&r.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(r,d,p,{locale:t})}),[p,d,M,h,n,r]);var A={ref:L,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,u,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==u&&(u=t.indexOf("#")<0),n[o?"replace":"push"](r,t,{shallow:a,locale:c,scroll:u}))}(e,r,d,p,y,m,b,h)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),s(r,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var R="undefined"!==typeof h?h:r&&r.locale,I=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(p,R,r&&r.locales,r&&r.domainLocales);A.href=I||(0,i.addBasePath)((0,i.addLocale)(p,R,r&&r.defaultLocale))}return a.default.cloneElement(g,A)};n.default=l},5749:function(e,n,r){"use strict";var t=r(3848);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,c=(0,o.useRef)(),f=(0,o.useState)(!1),s=t(f,2),l=s[0],d=s[1],p=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),r||l||e&&e.tagName&&(c.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=u.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return u.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,a=t.observer,i=t.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,l]);return(0,o.useEffect)((function(){if(!i&&!l){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[l]),[p,l]};var o=r(7294),a=r(8391),i="undefined"!==typeof IntersectionObserver;var u=new Map},1664:function(e,n,r){e.exports=r(6071)},4047:function(e,n,r){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}r.d(n,{Z:function(){return t}})},2700:function(e,n,r){"use strict";function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function o(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}r.d(n,{Z:function(){return o}})},1385:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function o(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(n,{Z:function(){return o}})},5877:function(e,n,r){var t=r(3570),o=r(1171),a=o;a.v1=t,a.v4=o,e.exports=a},5327:function(e){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,r){var t=r||0,o=n;return[o[e[t++]],o[e[t++]],o[e[t++]],o[e[t++]],"-",o[e[t++]],o[e[t++]],"-",o[e[t++]],o[e[t++]],"-",o[e[t++]],o[e[t++]],"-",o[e[t++]],o[e[t++]],o[e[t++]],o[e[t++]],o[e[t++]],o[e[t++]]].join("")}},5217:function(e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var t=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0===(3&n)&&(e=4294967296*Math.random()),t[n]=e>>>((3&n)<<3)&255;return t}}},3570:function(e,n,r){var t,o,a=r(5217),i=r(5327),u=0,c=0;e.exports=function(e,n,r){var f=n&&r||0,s=n||[],l=(e=e||{}).node||t,d=void 0!==e.clockseq?e.clockseq:o;if(null==l||null==d){var p=a();null==l&&(l=t=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==d&&(d=o=16383&(p[6]<<8|p[7]))}var v=void 0!==e.msecs?e.msecs:(new Date).getTime(),y=void 0!==e.nsecs?e.nsecs:c+1,m=v-u+(y-c)/1e4;if(m<0&&void 0===e.clockseq&&(d=d+1&16383),(m<0||v>u)&&void 0===e.nsecs&&(y=0),y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");u=v,c=y,o=d;var b=(1e4*(268435455&(v+=122192928e5))+y)%4294967296;s[f++]=b>>>24&255,s[f++]=b>>>16&255,s[f++]=b>>>8&255,s[f++]=255&b;var h=v/4294967296*1e4&268435455;s[f++]=h>>>8&255,s[f++]=255&h,s[f++]=h>>>24&15|16,s[f++]=h>>>16&255,s[f++]=d>>>8|128,s[f++]=255&d;for(var g=0;g<6;++g)s[f+g]=l[g];return n||i(s)}},1171:function(e,n,r){var t=r(5217),o=r(5327);e.exports=function(e,n,r){var a=n&&r||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||t)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n)for(var u=0;u<16;++u)n[a+u]=i[u];return n||o(i)}}}]);