"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[282],{1484:function(e,t,n){n.r(t);var i=n(5893),s=n(7294),a=n(5697),r=n.n(a),c=n(4328),o=function(e){var t=e.client,n=e.thisisme,a=e.nickname,r=e.gameid,o=e.setGameid,u=(0,s.useState)(2),l=u[0],d=u[1],m=(0,s.useState)(11),h=m[0],f=m[1],g=(0,s.useState)(!0),p=g[0],j=g[1];return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"trSubtitle",children:"Create Game"}),(0,i.jsx)("div",{className:"trOptionsDiv",children:(0,i.jsx)("div",{className:p?"trCheckbox On":"trCheckbox Off",onClick:function(){j(!p)},"data-toggle":"tooltip",title:"Whether guess must be valid words",children:(0,i.jsx)("label",{children:"Guesses must be valid words"})})}),(0,i.jsx)("table",{className:"trTable",children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("label",{children:"Game ID:"})}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"text",name:"gameid",value:r,onChange:function(e){o(e.target.value)}})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("label",{children:"# Players:"})}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"number",name:"numPlayers",value:l,onChange:function(e){d(e.target.value)}})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("label",{children:"Pts to win:"})}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"number",name:"goal",value:h,onChange:function(e){f(e.target.value)}})})]})]})}),r&&l>1&&l<7&&h>2&&h<22&&(0,i.jsx)("button",{className:"trButton",id:"requestCreateGame",type:"submit",onClick:function(){var e=r.trim();o(e),t.send({type:c.j6,func:"create",thisisme:n,gameid:r,numPlayers:l,goal:h,nickname:a,timestamp:Date.now(),validOnly:p})},children:"SUBMIT"}),!r&&(0,i.jsx)("div",{className:"trWarning",children:"Game ID is required"}),!(l>1&&l<7)&&(0,i.jsx)("div",{className:"trWarning",children:"# Players is 2-6"}),!(h>2&&h<22)&&(0,i.jsx)("div",{className:"trWarning",children:"Pts to win is 3-21"})]})};o.propTypes={client:r().any,thisisme:r().string.isRequired,nickname:r().string.isRequired,gameid:r().string.isRequired,setGameid:r().func.isRequired},t.default=o},1282:function(e,t,n){n.r(t);var i=n(5893),s=n(7294),a=n(5697),r=n.n(a),c=n(6882),o=n(3371),u=n(8490),l=n(4328),d=n(5934),m=function(e){var t=e.setWhereto,n=(0,s.useState)((0,d.Z)())[0],a=(0,s.useState)(l.dK),r=a[0],m=a[1],h=(0,s.useState)(""),f=h[0],g=h[1],p=(0,s.useState)(""),j=p[0],y=p[1],x=(0,s.useState)(""),v=x[0],k=x[1],b="wss://tilerunner.herokuapp.com/?clientType=fyb&thisisme="+n,S=(0,s.useState)(new c.Z(b,(function(e){g(e.data)}),l.j6,n))[0];return(0,s.useEffect)((function(){return S.connect()}),[]),(0,i.jsxs)(i.Fragment,{children:[r===l.dK&&(0,i.jsx)(o.default,{setWhereto:t,client:S,thisisme:n,setParticipant:m,wsmessage:f,nickname:j,setNickname:y,gameid:v,setGameid:k}),r===l.oZ&&(0,i.jsx)(u.default,{setWhereto:t,client:S,thisisme:n,wsmessage:f,nickname:j,gameid:v})]})};m.propTypes={setWhereto:r().func.isRequired},t.default=m},3371:function(e,t,n){n.r(t);var i=n(5893),s=n(7294),a=n(5697),r=n.n(a),c=n(4328),o=n(1484),u=function(e){var t=e.setWhereto,n=e.client,a=e.thisisme,r=e.setParticipant,u=e.wsmessage,h=e.nickname,f=e.setNickname,g=e.gameid,p=e.setGameid,j=(0,s.useState)("Welcome!"),y=j[0],x=j[1],v=(0,s.useState)([]),k=v[0],b=v[1],S=(0,s.useState)(!1),N=S[0],C=S[1],T=(0,s.useState)(""),w=T[0],R=T[1];return(0,s.useEffect)((function(){""!==u&&function(e){var t=JSON.parse(e);if(t.type===c.j6){if(t.func===c.iS)return;t.func===c.hA?b(t.gamelist):t.func===c.e?t.thisisme===a?(p(t.game.gameid),x(t.snat),r(c.oZ)):x("Why am I getting game data from ".concat(t.nickname," for game ").concat(t.gameid,"?")):"gameidtaken"===t.func?x("That game ID is already taken"):"gameidunknown"===t.func?x("That game ID is not being used"):"gamefull"===t.func?x("That game is full"):"notinthatgame"===t.func?x("You are not in that game"):"otherclientfound"===t.func?x("That nickname is already in that game"):x("Unhandled message: ".concat(e))}}(u)}),[u]),(0,i.jsxs)("div",{className:"trBackground",id:"fybLobby",children:[(0,i.jsxs)("div",{className:"trTitle",children:["Fry Your Brain",(0,i.jsx)("button",{className:"trButton",onClick:function(){t("menu")},children:(0,i.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),(0,i.jsx)("div",{className:"trParagraph",children:(0,i.jsx)("label",{children:y})}),!N&&d(h,f,C),N&&k&&k.length>0&&l(k,n,a,h),N&&!w&&m(R),N&&"C"===w&&(0,i.jsx)(o.default,{client:n,thisisme:a,nickname:h,gameid:g,setGameid:p}),(0,i.jsx)("div",{className:"fivepxdivider",children:"\xa0"})]})};function l(e,t,n,s){return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"trParagraph",children:"Game List:"}),(0,i.jsxs)("table",{className:"trTable",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"ID"}),(0,i.jsx)("th",{children:"Ppl"}),(0,i.jsx)("th",{children:"Pts"}),(0,i.jsx)("th",{children:"By"}),(0,i.jsx)("th",{children:"State"})]})}),(0,i.jsx)("tbody",{children:e.map((function(e,a){return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e.gameid}),(0,i.jsxs)("td",{children:[e.players.length,"/",e.numPlayers]}),(0,i.jsx)("td",{children:e.goal}),(0,i.jsx)("td",{children:e.players[0].nickname}),(0,i.jsx)("td",{children:h(e.players,s)?(0,i.jsx)("button",{className:"trButton",type:"submit",onClick:function(){!function(e,t,n,i){e.send({type:c.j6,func:"rejoin",thisisme:t,gameid:n,nickname:i,timestamp:Date.now()})}(t,n,e.gameid,s)},children:"REJOIN"},"rejoinButton".concat(a)):e.players.length<e.numPlayers?(0,i.jsx)("button",{className:"trButton",type:"submit",onClick:function(){!function(e,t,n,i){e.send({type:c.j6,func:"join",thisisme:t,gameid:n,nickname:i,timestamp:Date.now()})}(t,n,e.gameid,s)},children:"JOIN"},"joinButton".concat(a)):"In progress"})]},"gamelist".concat(a))}))})]})]})}function d(e,t,n){return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"trParagraph",children:[(0,i.jsx)("label",{children:"Nickname:"}),(0,i.jsx)("input",{type:"text",name:"nickname",value:e,onChange:function(e){t(e.target.value)}})]}),e&&(0,i.jsx)("div",{children:(0,i.jsx)("button",{className:"trButton",type:"submit",onClick:function(){var i=e.trim();t(i),n(!0)},children:"SUBMIT"})})]})}function m(e){return(0,i.jsx)("div",{children:(0,i.jsx)("button",{className:"trButton",type:"submit",id:"chooseCreateGame",onClick:function(){e("C")},children:"CREATE A GAME"})})}function h(e,t){for(var n=!1,i=0;i<e.length;i++)e[i].nickname===t&&(n=!0);return n}u.propTypes={setWhereto:r().func.isRequired,client:r().any,thisisme:r().string.isRequired,setParticipant:r().func.isRequired,wsmessage:r().string.isRequired,nickname:r().string.isRequired,setNickname:r().func.isRequired,gameid:r().string.isRequired,setGameid:r().func.isRequired},t.default=u},6882:function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}n.d(t,{Z:function(){return c}});var r=function(){function e(t,n){i(this,e),this.callback=t,this.timerCalc=n,this.timer=null,this.tries=0}return a(e,[{key:"reset",value:function(){this.tries=0,clearTimeout(this.timer)}},{key:"scheduleTimeout",value:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout((function(){e.tries=e.tries+1,e.callback()}),this.timerCalc(this.tries+1))}}]),e}(),c=function(){function e(t,n,s,a){var c=this;i(this,e),this.customSocket=null,this.socketUrl=t,this.clientType=s,this.thisisme=a,this.reconnectTimer=new r((function(){c.disconnect(),c.connect()}),this.reconnectAfterMs),this.messageFunction=n}return a(e,[{key:"reconnectAfterMs",value:function(e){return[1e3,2e3,5e3,1e4][e-1]||1e4}},{key:"connect",value:function(){var e=this;this.customSocket=new WebSocket(this.socketUrl),this.customSocket.onopen=function(t){e.send({type:e.clientType,func:"announce",thisisme:e.thisisme})},this.customSocket.onclose=function(t){e.reconnectTimer.scheduleTimeout()},this.customSocket.onerror=function(e){},this.customSocket.onmessage=this.messageFunction}},{key:"disconnect",value:function(){this.customSocket.onclose=function(){},this.customSocket.close()}},{key:"send",value:function(e){e.thisisme=this.thisisme,e.clientType=this.clientType;var t=JSON.stringify(e);this.customSocket.send(t)}}]),e}()},5934:function(e,t,n){var i;n.d(t,{Z:function(){return d}});var s=new Uint8Array(16);function a(){if(!i&&!(i="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(s)}var r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(e){return"string"===typeof e&&r.test(e)},o=[],u=0;u<256;++u)o.push((u+256).toString(16).substr(1));var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n};var d=function(e,t,n){var i=(e=e||{}).random||(e.rng||a)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){n=n||0;for(var s=0;s<16;++s)t[n+s]=i[s];return t}return l(i)}}}]);