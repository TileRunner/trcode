_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{NOQH:function(n,e,t){"use strict";t.r(e);var c=t("nKUr"),i=t("gBDq"),r=function(n){var e="pbTileOnRack "+(n.selection===n.tileindex?"Selected ":"Unselected ")+("Q"===n.tilevalue?"u ":"")+n.participant,t=n.tileindex;return Object(c.jsx)("div",{className:e,onClick:function(e){return n.onClick(e)},children:Object(c.jsx)("div",{className:"pbTileOnRackText",children:n.tilevalue})},t)},s=function(n){return Object(c.jsx)("button",{className:"pbActionButton",onClick:n.onClick,children:Object(c.jsxs)("span",{className:"pbActionButtonText",children:[Object(c.jsx)("i",{className:"material-icons",children:"check"}),"\xa0Finish Turn"]})})},o=function(n){return Object(c.jsx)("button",{className:"pbActionButton",onClick:n.onClick,children:Object(c.jsxs)("span",{className:"pbActionButtonText",children:[Object(c.jsx)("i",{className:"material-icons",children:"undo"}),"\xa0Recall Tiles"]})})},l=function(n){return Object(c.jsx)("button",{className:"pbActionButton",onClick:n.onClick,children:Object(c.jsxs)("span",{className:"pbActionButtonText",children:[Object(c.jsx)("i",{className:"material-icons",children:"cached"}),"\xa0Swap Tiles"]})})},a=function(n){return Object(c.jsx)("button",{className:"pbActionButton",onClick:n.onClick,children:Object(c.jsxs)("span",{className:"pbActionButtonText",children:[Object(c.jsx)("i",{className:"material-icons",children:"not_interested"}),"\xa0Pass Turn"]})})},u=function(n){return n.alreadyAllowed?Object(c.jsx)("div",{className:"pbActionButtonSevere",children:Object(c.jsxs)("span",{className:"pbActionButtonSevereText",children:[Object(c.jsx)("i",{className:"material-icons",children:"report"}),"\xa0ENABLED",Object(c.jsx)("span",{className:"pbActionButtonSevereText2",children:"\xa0Allow undo is now enabled"})]})}):Object(c.jsx)("button",{className:"pbActionButtonSevere",onClick:n.onClick,children:Object(c.jsxs)("span",{className:"pbActionButtonSevereText",children:[Object(c.jsx)("i",{className:"material-icons",children:"report_problem"}),"\xa0Allow Undo Turn",Object(c.jsx)("span",{className:"pbActionButtonSevereText2",children:"Click to let opponent undo"})]})})},d=function(n){return Object(c.jsx)("button",{className:"pbActionButtonSevere",onClick:n.onClick,children:Object(c.jsxs)("span",{className:"pbActionButtonSevereText",children:[Object(c.jsx)("i",{className:"material-icons",children:"delete_forever"}),"\xa0Undo My Turn",Object(c.jsx)("span",{className:"pbActionButtonSevereText2",children:"Opponent has allowed undo"})]})})};function j(n){return Object(c.jsxs)("div",{className:"pbActionButtonDiv",children:[Object(c.jsx)("p",{children:Object(c.jsx)(s,{onClick:function(){return n.onClickFinishTurn()}})}),Object(c.jsx)("p",{children:Object(c.jsx)(o,{onClick:function(){return n.onClickTileRecall()}})}),Object(c.jsx)("p",{children:Object(c.jsx)(l,{onClick:function(){return n.onClickTileExchange()}})}),Object(c.jsx)("p",{children:Object(c.jsx)(a,{onClick:function(){return n.onClickPassPlay()}})})]})}function b(n){return Object(c.jsx)("div",{className:"pbActionButtonDiv",children:Object(c.jsx)("p",{children:Object(c.jsx)(u,{onClick:function(){return n.onClickAllowUndo()},alreadyAllowed:n.allowRewind})})})}function O(n){return Object(c.jsx)("div",{className:"pbActionButtonDiv",children:Object(c.jsx)("p",{children:Object(c.jsx)(d,{onClick:function(){return n.onClickUndoLastPlay()}})})})}e.default=function(n){var e=n.participant===i.PARTY_TYPE_PRISONERS?i.PARTY_ICON_PRISONERS:i.PARTY_ICON_GUARDS,t=n.participant===i.PARTY_TYPE_PRISONERS?i.PARTY_TITLE_PRISONERS:i.PARTY_TITLE_GUARDS;return Object(c.jsxs)("div",{className:"pbPlayerInnerSection",children:[Object(c.jsxs)("div",{className:"pbPlayerTitle",children:[Object(c.jsx)("i",{className:"material-icons",children:e}),"\xa0",t,"\xa0",Object(c.jsx)("i",{className:"material-icons",children:e})]}),Object(c.jsx)("div",{className:"pbTilerack",children:n.racktiles&&n.racktiles.map((function(e,t){return Object(c.jsx)(r,{whoseturn:n.whoseturn,participant:n.participant,selection:n.selection,tileindex:t,tilevalue:e,onClick:function(){return n.onClick(t)}},"RackTile".concat(t))}))}),n.whoseturn===n.participant?j(n):n.allowRewind&&n.moves&&n.moves.length>0&&n.moves[n.moves.length-1].by===n.participant&&O(n),n.moves&&n.moves.length>0&&n.moves[n.moves.length-1].by!==n.participant&&b(n)]})}},Qetd:function(n,e,t){"use strict";var c=Object.assign.bind(Object);n.exports=c,n.exports.default=n.exports},"Y/6E":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pb/playerSection",function(){return t("NOQH")}])},gBDq:function(n,e,t){"use strict";t.r(e),t.d(e,"BOARD_COL_HEADERS",(function(){return c})),t.d(e,"BOARD_ROW_HEADERS",(function(){return i})),t.d(e,"SQUARE_UNUSED",(function(){return r})),t.d(e,"PARTY_TYPE_UNDETERMINED",(function(){return s})),t.d(e,"PARTY_TYPE_PRISONERS",(function(){return o})),t.d(e,"PARTY_TYPE_GUARDS",(function(){return l})),t.d(e,"PARTY_TYPE_OBSERVER",(function(){return a})),t.d(e,"WHOSE_TURN_PRISONERS",(function(){return u})),t.d(e,"WHOSE_TURN_GUARDS",(function(){return d})),t.d(e,"WHOSE_TURN_GAMEOVER",(function(){return j})),t.d(e,"PARTY_ICON_PRISONERS",(function(){return b})),t.d(e,"PARTY_ICON_GUARDS",(function(){return O})),t.d(e,"PARTY_TITLE_PRISONERS",(function(){return p})),t.d(e,"PARTY_TITLE_GUARDS",(function(){return _})),t.d(e,"MOVE_TYPE_PLAY",(function(){return N})),t.d(e,"MOVE_TYPE_SWAP",(function(){return R})),t.d(e,"MOVE_TYPE_PASS",(function(){return x})),t.d(e,"DIR_RIGHT",(function(){return T})),t.d(e,"DIR_DOWN",(function(){return A})),t.d(e,"DIR_NONE",(function(){return E})),t.d(e,"USED_BY_PRISONERS",(function(){return S})),t.d(e,"USED_BY_GUARDS",(function(){return h})),t.d(e,"USED_BY_NONE",(function(){return m}));var c=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],i=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],r=".",s="U",o="P",l="G",a="O",u=o,d=l,j="X",b="run_circle",O="security",p="PRISONERS",_="GUARDS",N="PLAY",R="SWAP",x="PASS",T="r",A="d",E="",S=o,h=l,m=""}},[["Y/6E",0,1]]]);