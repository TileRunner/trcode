(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[969],{6071:function(e,t,n){"use strict";var i=n(3848);var c=n(9448)(n(7294)),s=n(1689),o=n(2441),r=n(5749),u={};function a(e,t,n,i){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,i).catch((function(e){0}));var c=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;u[t+"%"+n+(c?"%"+c:"")]=!0}}},5749:function(e,t,n){"use strict";var i=n(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,u=(0,c.useRef)(),a=(0,c.useState)(!1),f=i(a,2),l=f[0],h=f[1],m=(0,c.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||l||e&&e.tagName&&(u.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=r.get(t);if(n)return n;var i=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return r.set(t,n={id:t,observer:c,elements:i}),n}(n),c=i.id,s=i.observer,o=i.elements;return o.set(e,t),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),r.delete(c))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[n,t,l]);return(0,c.useEffect)((function(){if(!o&&!l){var e=(0,s.requestIdleCallback)((function(){return h(!0)}));return function(){return(0,s.cancelIdleCallback)(e)}}}),[l]),[m,l]};var c=n(7294),s=n(8391),o="undefined"!==typeof IntersectionObserver;var r=new Map},5518:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(4047),c=n(2700),s=function(){function e(t,n){(0,i.Z)(this,e),this.callback=t,this.timerCalc=n,this.timer=null,this.tries=0}return(0,c.Z)(e,[{key:"reset",value:function(){this.tries=0,clearTimeout(this.timer)}},{key:"scheduleTimeout",value:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout((function(){e.tries=e.tries+1,e.callback()}),this.timerCalc(this.tries+1))}}]),e}(),o=function(){function e(t,n,c,o){var r=this;(0,i.Z)(this,e),this.customSocket=null,this.socketUrl=t,this.clientType=c,this.thisisme=o,this.reconnectTimer=new s((function(){r.disconnect(),r.connect()}),this.reconnectAfterMs),this.messageFunction=n}return(0,c.Z)(e,[{key:"reconnectAfterMs",value:function(e){return[1e3,2e3,5e3,1e4][e-1]||1e4}},{key:"connect",value:function(){var e=this;this.customSocket=new WebSocket(this.socketUrl),this.customSocket.onopen=function(t){e.send({type:e.clientType,func:"announce"})},this.customSocket.onclose=function(t){e.reconnectTimer.scheduleTimeout()},this.customSocket.onerror=function(e){},this.customSocket.onmessage=this.messageFunction}},{key:"disconnect",value:function(){this.customSocket.onclose=function(){},this.customSocket.close()}},{key:"send",value:function(e){e.thisisme=this.thisisme,e.clientType=this.clientType,this.customSocket.send(JSON.stringify(e))}}]),e}()},7784:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fyb/fryyourbrain",function(){return n(4891)}])},1664:function(e,t,n){n(6071)}},function(e){e.O(0,[504,774,888,179],(function(){return t=7784,e(e.s=t);var t}));var t=e.O();_N_E=t}]);