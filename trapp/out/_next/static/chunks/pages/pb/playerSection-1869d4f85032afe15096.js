_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{NOQH:function(e,n,t){"use strict";t.r(n);var c=t("nKUr"),s=(t("q1tI"),function(e){var n="pbTileOnRack "+(e.selection===e.tileindex?"Selected ":"Unselected ")+("Q"===e.tilevalue?"u ":"")+e.prisonersOrGuards,t=e.tileindex;return Object(c.jsx)("div",{className:n,onClick:function(n){return e.onClick(n)},children:Object(c.jsx)("div",{className:"pbTileOnRackText",children:e.tilevalue})},t)}),i=function(e){return Object(c.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:Object(c.jsxs)("span",{className:"pbActionButtonText",children:[Object(c.jsx)("i",{className:"material-icons",children:"check"}),"\xa0Finish Turn"]})})},r=function(e){return Object(c.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:Object(c.jsxs)("span",{className:"pbActionButtonText",children:[Object(c.jsx)("i",{className:"material-icons",children:"undo"}),"\xa0Recall Tiles"]})})},l=function(e){return Object(c.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:Object(c.jsxs)("span",{className:"pbActionButtonText",children:[Object(c.jsx)("i",{className:"material-icons",children:"cached"}),"\xa0Swap Tiles"]})})},o=function(e){return Object(c.jsx)("button",{className:"pbActionButton",onClick:e.onClick,children:Object(c.jsxs)("span",{className:"pbActionButtonText",children:[Object(c.jsx)("i",{className:"material-icons",children:"not_interested"}),"\xa0Pass Turn"]})})},a=function(e){return Object(c.jsx)("button",{className:"pbActionButtonSevere",onClick:e.onClick,children:Object(c.jsxs)("span",{className:"pbActionButtonSevereText",children:[Object(c.jsx)("i",{className:"material-icons",children:"report_problem"}),"\xa0Allow Undo Turn",e.alreadyAllowed?Object(c.jsx)("span",{className:"pbActionButtonSevereText2",children:"Allow undo is now enabled"}):Object(c.jsx)("span",{className:"pbActionButtonSevereText2",children:"Click to let opponent undo"})]})})},u=function(e){return Object(c.jsx)("button",{className:"pbActionButtonSevere",onClick:e.onClick,children:Object(c.jsxs)("span",{className:"pbActionButtonSevereText",children:[Object(c.jsx)("i",{className:"material-icons",children:"delete_forever"}),"\xa0Undo My Turn",Object(c.jsx)("span",{className:"pbActionButtonSevereText2",children:"Opponent has allowed undo"})]})})};function j(e){return Object(c.jsxs)("div",{className:"pbActionButtonDiv",children:[Object(c.jsx)("p",{children:Object(c.jsx)(i,{onClick:function(){return e.onClickFinishTurn()}})}),Object(c.jsx)("p",{children:Object(c.jsx)(r,{onClick:function(){return e.onClickTileRecall()}})}),Object(c.jsx)("p",{children:Object(c.jsx)(l,{onClick:function(){return e.onClickTileExchange()}})}),Object(c.jsx)("p",{children:Object(c.jsx)(o,{onClick:function(){return e.onClickPassPlay()}})})]})}function d(e){return Object(c.jsx)("div",{className:"pbActionButtonDiv",children:Object(c.jsx)("p",{children:Object(c.jsx)(a,{onClick:function(){return e.onClickAllowUndo()},alreadyAllowed:e.allowRewind})})})}function b(e){return Object(c.jsx)("div",{className:"pbActionButtonDiv",children:Object(c.jsx)("p",{children:Object(c.jsx)(u,{onClick:function(){return e.onClickUndoLastPlay()}})})})}n.default=function(e){var n="P"===e.prisonersOrGuards?"run_circle":"security",t="P"===e.prisonersOrGuards?"PRISONERS":"GUARDS";return Object(c.jsxs)("div",{className:"pbPlayerInnerSection",children:[Object(c.jsxs)("div",{className:"pbPlayerTitle",children:[Object(c.jsx)("i",{className:"material-icons",children:n}),"\xa0",t,"\xa0",Object(c.jsx)("i",{className:"material-icons",children:n})]}),Object(c.jsx)("div",{className:"pbTilerack",children:e.racktiles&&e.racktiles.map((function(n,t){return Object(c.jsx)(s,{whoseturn:e.whoseturn,prisonersOrGuards:e.prisonersOrGuards,selection:e.selection,tileindex:t,tilevalue:n,onClick:function(){return e.onClick(t)}})}))}),e.whoseturn===e.prisonersOrGuards?j(e):e.prisonersOrGuards!==e.prisonersOrGuards&&e.moves&&e.moves.length>0&&e.allowRewind&&e.moves[e.moves.length-1].by===e.prisonersOrGuards?b(e):Object(c.jsx)(c.Fragment,{}),e.moves&&e.moves.length>0&&e.moves[e.moves.length-1].by!==e.prisonersOrGuards?d(e):Object(c.jsx)(c.Fragment,{})]})}},Qetd:function(e,n,t){"use strict";var c=Object.assign.bind(Object);e.exports=c,e.exports.default=e.exports},"Y/6E":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pb/playerSection",function(){return t("NOQH")}])}},[["Y/6E",0,1]]]);