(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50],{2137:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pb/prisonbreak",function(){return n(2896)}])},2896:function(e,t,n){"use strict";n.r(t);var i=n(5893),s=n(7294),c=n(6882),o=n(5211),u=n(4577),r=n(1963),a=n(7554),h=n(5877);t.default=function(e){var t=e.setWhereto,n=(0,s.useState)((0,h.v4)())[0],l=(0,s.useState)(!1),f=l[0],m=l[1],k=(0,s.useState)(""),p=k[0],d=k[1],v=(0,s.useState)(""),S=v[0],y=v[1],w=(0,s.useState)(a.dK),T=w[0],b=w[1],g=(0,s.useState)(""),_=g[0],j=g[1],E=(0,s.useState)(4),N=E[0],C=E[1],W="wss://tilerunner.herokuapp.com/?clientType=pb&thisisme="+n,O=(0,s.useState)(new c.Z(W,(function(e){j(e.data)}),"pb",n))[0];return(0,s.useEffect)((function(){return O.connect()}),[]),T===a.dK?(0,i.jsx)(o.default,{setWhereto:t,client:O,setIsrejoin:m,wsmessage:_,gameid:p,setGameid:d,nickname:S,setNickname:y,setParticipant:b,racksize:N,setRacksize:C}):T===a.Vj?(0,i.jsx)(r.default,{setWhereto:t,client:O,wsmessage:_,gameid:p,nickname:S,participant:T}):(0,i.jsx)(u.default,{setWhereto:t,isrejoin:f,participant:T,gameid:p,nickname:S,wsmessage:_,client:O,racksize:N})}},6882:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}n.d(t,{Z:function(){return u}});var o=function(){function e(t,n){i(this,e),this.callback=t,this.timerCalc=n,this.timer=null,this.tries=0}return c(e,[{key:"reset",value:function(){this.tries=0,clearTimeout(this.timer)}},{key:"scheduleTimeout",value:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout((function(){e.tries=e.tries+1,e.callback()}),this.timerCalc(this.tries+1))}}]),e}(),u=function(){function e(t,n,s,c){var u=this;i(this,e),this.customSocket=null,this.socketUrl=t,this.clientType=s,this.thisisme=c,this.reconnectTimer=new o((function(){u.disconnect(),u.connect()}),this.reconnectAfterMs),this.messageFunction=n}return c(e,[{key:"reconnectAfterMs",value:function(e){return[1e3,2e3,5e3,1e4][e-1]||1e4}},{key:"connect",value:function(){var e=this;this.customSocket=new WebSocket(this.socketUrl),this.customSocket.onopen=function(t){e.send({type:e.clientType,func:"announce",thisisme:e.thisisme})},this.customSocket.onclose=function(t){e.reconnectTimer.scheduleTimeout()},this.customSocket.onerror=function(e){},this.customSocket.onmessage=this.messageFunction}},{key:"disconnect",value:function(){this.customSocket.onclose=function(){},this.customSocket.close()}},{key:"send",value:function(e){e.thisisme=this.thisisme,e.clientType=this.clientType;var t=JSON.stringify(e);this.customSocket.send(t)}}]),e}()}},function(e){e.O(0,[797,14,577,211,963,774,888,179],(function(){return t=2137,e(e.s=t);var t}));var t=e.O();_N_E=t}]);