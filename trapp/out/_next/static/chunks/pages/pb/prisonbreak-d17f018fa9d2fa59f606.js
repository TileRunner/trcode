_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"M+XG":function(e,t,c){"use strict";c.r(t);var n=c("nKUr"),a=c("KQm4"),i=c("q1tI"),s=c("YFqc"),r=c.n(s),o=c("gBDq"),l="w3-button w3-border w3-blue w3-hover-black w3-round";t.default=function(e){var t=e.setIsrejoin,c=e.wsmessage,s=e.gameid,d=e.setGameid,b=e.nickname,m=e.setNickname,j=e.setParticipant,h=e.racksize,u=e.setRacksize,O=Object(i.useState)([]),w=O[0],k=O[1];function x(e){for(var t=0;t<w.length;++t)if(w[t].gameid===e)return t;return-1}function N(e){return 0===b.length||"Game over"===e.gamestatus?0:e.playingP?e.nicknameP===b?3:0:1}function g(e){return 0===b.length||"Game over"===e.gamestatus?0:e.playingG?e.nicknameG===b?3:0:2}function f(e){u(e)}return Object(i.useEffect)((function(){""!==c&&function(e){try{var t=JSON.parse(e),c=t.gameid,n=t.nickname,i=t.whoseturn,s=t.racksize;if(c&&c.length>0&&s&&i&&i.length>0){var r=!1,l=t.sender,d=Object(a.a)(w),b=x(c),m=l===o.PARTY_TYPE_PRISONERS||b>-1&&w[b].playingP,j=l===o.PARTY_TYPE_GUARDS||b>-1&&w[b].playingG,h=s,u="Unknown";i===o.WHOSE_TURN_GAMEOVER?u="Game over":i===o.WHOSE_TURN_PRISONERS?u="Prisoners turn":i===o.WHOSE_TURN_GUARDS&&(u="Guards turn");var O={gameid:c,nicknameP:l===o.PARTY_TYPE_PRISONERS?n:b>-1?w[b].nicknameP:"",nicknameG:l===o.PARTY_TYPE_GUARDS?n:b>-1?w[b].nicknameG:"",gamestatus:u,playingP:m,playingG:j,racksize:h};if(b<0)r=!0,d=[].concat(Object(a.a)(d),[O]);else{var N=w[b];N.nicknameP===O.nicknameP&&N.nicknameG===O.nicknameG&&N.gamestatus===O.gamestatus&&N.playingP===O.playingP&&N.playingG===O.playingG&&N.racksize===O.racksize||(r=!0,d[b]=O)}r&&k(d)}}catch(g){window.alert("Error processing lobby message")}}(c)}),[c]),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"w3-container w3-teal w3-bar",children:[Object(n.jsx)("h1",{className:"w3-bar-item w3-centre myHeadingFont",children:"Prison Break Lobby"}),Object(n.jsx)("div",{className:"w3-bar-item w3-right",children:Object(n.jsx)(r.a,{href:"../../",children:Object(n.jsx)("a",{children:Object(n.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})})})]}),Object(n.jsx)("div",{className:"w3-container",children:Object(n.jsxs)("div",{className:"w3-bar",children:[Object(n.jsx)("div",{className:"w3-bar-item",children:Object(n.jsx)("h2",{children:Object(n.jsx)("b",{children:"Nickname:"})})}),Object(n.jsx)("div",{className:"w3-bar-item",children:Object(n.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"text",name:"nickname",value:b,onChange:function(e){m(e.target.value)}})})]})}),Object(n.jsx)("div",{className:"w3-container",children:Object(n.jsxs)("div",{className:"w3-bar",children:[Object(n.jsx)("div",{className:"w3-bar-item",children:Object(n.jsx)("h2",{children:Object(n.jsxs)("span",{className:"pbPlayerTitle",children:["PRISONERS",Object(n.jsx)("i",{className:"material-icons",children:"arrow_right"})]})})}),Object(n.jsx)("div",{className:"w3-bar-item",children:Object(n.jsx)("h2",{children:Object(n.jsx)("b",{children:"Game ID:"})})}),Object(n.jsx)("div",{className:"w3-bar-item",children:Object(n.jsx)("input",{className:"w3-input w3-border w3-blue myCommonFont",type:"text",name:"gameid",value:s,onChange:function(e){d(e.target.value)}})}),Object(n.jsx)("div",{className:"w3-bar-item",children:Object(n.jsx)("h2",{children:Object(n.jsx)("b",{children:"Rack Size:"})})}),Object(n.jsxs)("div",{className:"w3-bar-item",children:[Object(n.jsx)("button",{id:"selectracksize4",className:4===h?"pbLobbyRackSizeSelected":"pbLobbyRackSize",onClick:function(){return f(4)},"data-toggle":"tooltip",title:"4 letter racks, 9 x 9 board",autoFocus:!0,children:"4"}),Object(n.jsx)("button",{id:"selectracksize5",className:5===h?"pbLobbyRackSizeSelected":"pbLobbyRackSize",onClick:function(){return f(5)},"data-toggle":"tooltip",title:"5 letter racks, 11 x 11 board",children:"5"}),Object(n.jsx)("button",{id:"selectracksize6",className:6===h?"pbLobbyRackSizeSelected":"pbLobbyRackSize",onClick:function(){return f(6)},"data-toggle":"tooltip",title:"6 letter racks, 13 x 13 board",children:"6"}),Object(n.jsx)("button",{id:"selectracksize7",className:7===h?"pbLobbyRackSizeSelected":"pbLobbyRackSize",onClick:function(){return f(7)},"data-toggle":"tooltip",title:"7 letter racks, 15 x 15 board",children:"7"}),Object(n.jsxs)("span",{className:"pbLobbyCellBlockInfo",children:[h," letter racks, ",2*h+1," x ",2*h+1," board."]})]}),Object(n.jsx)("div",{className:"w3-bar-item",children:Object(n.jsx)("button",{id:"startgame",className:l,onClick:function(){0===b.length?window.alert("Please enter nickname before starting a game"):s.length>0?!function(e){var t=x(e);return!(t<0)&&w[t].playingP}(s)?j(o.PARTY_TYPE_PRISONERS):window.alert("Prisoners already playing that game"):window.alert("Please enter Game ID before starting a game")},children:"Start Game"})})]})}),Object(n.jsx)("div",{className:"w3-container",children:Object(n.jsxs)("div",{className:"w3-bar",children:[Object(n.jsx)("div",{className:"w3-bar-item",children:Object(n.jsx)("h2",{children:Object(n.jsxs)("span",{className:"pbPlayerTitle",children:["GUARDS",Object(n.jsx)("i",{className:"material-icons",children:"arrow_right"})]})})}),Object(n.jsx)("div",{className:"w3-bar-item",children:Object(n.jsx)("span",{className:"myCommonFont",children:Object(n.jsx)("h2",{children:'Find and click the "Join Game" button for your game.'})})})]})}),Object(n.jsx)("div",{className:"w3-container",children:Object(n.jsxs)("div",{className:"w3-bar",children:[Object(n.jsx)("div",{className:"w3-bar-item",children:Object(n.jsx)("h1",{children:Object(n.jsx)("i",{className:"material-icons w3-right",children:"report_problem"})})}),Object(n.jsx)("div",{className:"w3-bar-item",children:Object(n.jsx)("h3",{className:"myCommonFont",children:'If you lost connection, find and click the "Reconnect" button for your game id.'})})]})}),Object(n.jsx)("div",{className:"w3-container",children:Object(n.jsxs)("div",{className:"w3-bar",children:[Object(n.jsx)("div",{className:"w3-bar-item",children:Object(n.jsx)("h2",{className:"myCommonFont",children:Object(n.jsx)("b",{children:"Game list:"})})}),Object(n.jsx)("div",{className:"w3-bar-item",children:Object(n.jsxs)("table",{className:"w3-table-all w3-card-4",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{className:"w3-blue h4 myCommonFont",children:[Object(n.jsx)("th",{className:"w3-border-right",children:"Game ID"}),Object(n.jsx)("th",{className:"w3-border-right",children:"Prisoners"}),Object(n.jsx)("th",{className:"w3-border-right",children:"Guards"}),Object(n.jsx)("th",{className:"w3-border-right",children:"Rack Size"}),Object(n.jsx)("th",{children:"Game Status"})]})}),Object(n.jsx)("tbody",{children:w.map((function(e,c){return Object(n.jsxs)("tr",{className:"myCommonFont w3-hover-green",children:[Object(n.jsx)("td",{className:"w3-border-right",children:Object(n.jsx)("b",{children:e.gameid})}),0===N(e)?Object(n.jsx)("td",{id:"PrisonersNoAction".concat(c),className:"w3-border-right",children:"No action available"}):3===N(e)?Object(n.jsx)("td",{id:"PrisonersRejoin".concat(c),className:"w3-border-right",children:Object(n.jsx)("button",{className:"w3-button w3-red w3-round w3-hover-black",onClick:function(){t(!0),d(e.gameid),j(o.PARTY_TYPE_PRISONERS),u(e.racksize)},children:"Reconnect"})}):Object(n.jsx)("td",{id:"PrisonersStart".concat(c),className:"w3-border-right",children:Object(n.jsx)("button",{className:l,onClick:function(){d(e.gameid),j(o.PARTY_TYPE_PRISONERS)},children:"Start Game"})}),0===g(e)?Object(n.jsx)("td",{id:"GuardsNoAction".concat(c),className:"w3-border-right",children:"No action available"}):3===g(e)?Object(n.jsx)("td",{id:"GuardsRejoin".concat(c),className:"w3-border-right",children:Object(n.jsx)("button",{className:l,onClick:function(){t(!0),d(e.gameid),j(o.PARTY_TYPE_GUARDS),u(e.racksize)},children:"Reconnect"})}):Object(n.jsx)("td",{id:"GuardsJoin".concat(c),className:"w3-border-right",children:Object(n.jsx)("button",{className:l,onClick:function(){d(e.gameid),j(o.PARTY_TYPE_GUARDS),u(e.racksize)},children:"Join Game"})}),Object(n.jsx)("td",{id:"RackSize".concat(c),className:"w3-center w3-border-right",children:e.racksize}),Object(n.jsx)("td",{id:"GameStatus".concat(c),children:e.gamestatus})]},"OtherGame".concat(c))}))})]})})]})}),Object(n.jsx)("div",{className:"w3-container w3-teal",children:Object(n.jsx)("h1",{children:"Have fun!"})})]})}},dsDM:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pb/prisonbreak",function(){return c("fLLM")}])},fLLM:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return j}));var n=c("nKUr"),a=c("q1tI");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,c){return t&&s(e.prototype,t),c&&s(e,c),e}var o=function(){function e(t,c){i(this,e),this.callback=t,this.timerCalc=c,this.timer=null,this.tries=0}return r(e,[{key:"reset",value:function(){this.tries=0,clearTimeout(this.timer)}},{key:"scheduleTimeout",value:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout((function(){e.tries=e.tries+1,e.callback()}),this.timerCalc(this.tries+1))}}]),e}(),l=function(){function e(t,c){var n=this;i(this,e),this.customSocket=null,this.socketUrl=t,this.reconnectTimer=new o((function(){n.disconnect(),n.connect()}),this.reconnectAfterMs),this.messageFunction=c}return r(e,[{key:"reconnectAfterMs",value:function(e){return[1e3,2e3,5e3,1e4][e-1]||1e4}},{key:"connect",value:function(){var e=this;this.customSocket=new WebSocket(this.socketUrl),this.customSocket.onopen=function(t){console.log("connected to "+e.socketUrl),e.send(JSON.stringify({type:"announce",func:"announce"}))},this.customSocket.onclose=function(t){e.reconnectTimer.scheduleTimeout()},this.customSocket.onerror=function(e){},this.customSocket.onmessage=this.messageFunction}},{key:"disconnect",value:function(){this.customSocket.onclose=function(){},this.customSocket.close()}},{key:"send",value:function(e){this.customSocket.send(JSON.stringify(e))}}]),e}(),d=c("M+XG"),b=c("yhjZ"),m=c("gBDq");function j(){var e=Object(a.useState)(!1),t=e[0],c=e[1],i=Object(a.useState)(""),s=i[0],r=i[1],o=Object(a.useState)(""),j=o[0],h=o[1],u=Object(a.useState)(m.PARTY_TYPE_UNDETERMINED),O=u[0],w=u[1],k=Object(a.useState)(""),x=k[0],N=k[1],g=Object(a.useState)(4),f=g[0],v=g[1],S=Object(a.useState)(new l("wss://tilerunner.herokuapp.com",(function(e){N(e.data)})))[0];return Object(a.useEffect)((function(){return S.connect()}),[]),O===m.PARTY_TYPE_UNDETERMINED?Object(n.jsx)(d.default,{setIsrejoin:c,wsmessage:x,gameid:s,setGameid:r,nickname:j,setNickname:h,setParticipant:w,racksize:f,setRacksize:v}):Object(n.jsx)(b.default,{isrejoin:t,participant:O,gameid:s,nickname:j,wsmessage:x,client:S,racksize:f})}}},[["dsDM",0,1,2,3,4]]]);