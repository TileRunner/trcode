(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1224],{8802:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wm/mastermind",function(){return t(5128)}])},3524:function(n,r,t){"use strict";t.d(r,{CU:function(){return s},G0:function(){return f},eo:function(){return h},cO:function(){return v},_r:function(){return p}});var e=t(4051),o=t.n(e);function u(n,r,t,e,o,u,i){try{var a=n[u](i),c=a.value}catch(s){return void t(s)}a.done?r(c):Promise.resolve(c).then(e,o)}function i(n){return function(){var r=this,t=arguments;return new Promise((function(e,o){var i=n.apply(r,t);function a(n){u(i,e,o,a,c,"next",n)}function c(n){u(i,e,o,a,c,"throw",n)}a(void 0)}))}}var a="https://tilerunner.herokuapp.com";function c(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=Array.from(n.trim().toLowerCase());r.sort();var t=r.join("");return t}function s(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=0,e=Array.from(n.toLowerCase()),o=Array.from(r.toLowerCase());if(e.length===o.length)for(var u=0;u<e.length;u++){e[u];e[u]!==o[u]&&t++}else t=-1;return t}function f(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=c(n),e=c(r);return t===e}function h(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(n.length!==r.length+1)return!1;for(var t=n.toLowerCase(),e=r.toLowerCase(),o=0;o<t.length;o++){var u=Array.from(t);if(u.splice(o,1),u.join("")===e)return!0}return!1}function v(n){return l.apply(this,arguments)}function l(){return(l=i(o().mark((function n(r){var t,e,u;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(a,"/ENABLE2K?exists=").concat(r.toLowerCase()),n.next=3,fetch(t);case 3:return e=n.sent,n.next=6,e.json();case 6:return u=n.sent,n.abrupt("return",u.exists);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return w.apply(this,arguments)}function w(){return(w=i(o().mark((function n(r){var t,e,u;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(a,"/ENABLE2K?letters=").concat(r.toLowerCase(),"&tm=true"),n.next=3,fetch(t);case 3:return e=n.sent,n.next=6,e.json();case 6:return u=n.sent,n.abrupt("return",u.to);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}},function(n){n.O(0,[9359,6450,5128,9774,2888,179],(function(){return r=8802,n(n.s=r);var r}));var r=n.O();_N_E=r}]);