(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[965],{2792:function(n,t,r){"use strict";r.d(t,{CU:function(){return a},G0:function(){return s},eo:function(){return f},cO:function(){return h},_r:function(){return p}});var e=r(809),o=r.n(e),u=r(2447),i="https://tilerunner.herokuapp.com";function c(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Array.from(n.trim().toLowerCase());t.sort();var r=t.join("");return r}function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=0,e=Array.from(n.toLowerCase()),o=Array.from(t.toLowerCase());if(e.length===o.length)for(var u=0;u<e.length;u++){e[u];e[u]!==o[u]&&r++}else r=-1;return r}function s(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=c(n),e=c(t);return r===e}function f(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(n.length!==t.length+1)return!1;for(var r=n.toLowerCase(),e=t.toLowerCase(),o=0;o<r.length;o++){var u=Array.from(r);if(u.splice(o,1),u.join("")===e)return!0}return!1}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,u.Z)(o().mark((function n(t){var r,e,u;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(i,"/ENABLE2K?exists=").concat(t.toLowerCase()),n.next=3,fetch(r);case 3:return e=n.sent,n.next=6,e.json();case 6:return u=n.sent,n.abrupt("return",u.exists);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,u.Z)(o().mark((function n(t){var r,e,u;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(i,"/ENABLE2K?letters=").concat(t.toLowerCase(),"&tm=true"),n.next=3,fetch(r);case 3:return e=n.sent,n.next=6,e.json();case 6:return u=n.sent,n.abrupt("return",u.to);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},5704:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/morpho/morpho",function(){return r(2808)}])},2447:function(n,t,r){"use strict";function e(n,t,r,e,o,u,i){try{var c=n[u](i),a=c.value}catch(s){return void r(s)}c.done?t(a):Promise.resolve(a).then(e,o)}function o(n){return function(){var t=this,r=arguments;return new Promise((function(o,u){var i=n.apply(t,r);function c(n){e(i,o,u,c,a,"next",n)}function a(n){e(i,o,u,c,a,"throw",n)}c(void 0)}))}}r.d(t,{Z:function(){return o}})}},function(n){n.O(0,[612,808,774,888,179],(function(){return t=5704,n(n.s=t);var t}));var t=n.O();_N_E=t}]);