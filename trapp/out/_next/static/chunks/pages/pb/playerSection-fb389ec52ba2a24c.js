(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[135],{6401:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pb/playerSection",function(){return i(3689)}])},7554:function(n,e,i){"use strict";i.d(e,{v8:function(){return t},RH:function(){return r},dK:function(){return c},ap:function(){return s},b6:function(){return o},qg:function(){return l},Vj:function(){return a},kX:function(){return u},Ov:function(){return d},Bd:function(){return p},_k:function(){return f},g9:function(){return h},Ji:function(){return m},jN:function(){return x},bS:function(){return N},Ix:function(){return A},Am:function(){return k},oW:function(){return T},ik:function(){return v},QY:function(){return b},i4:function(){return j},_W:function(){return C},$B:function(){return R},fl:function(){return E},Cr:function(){return w},L8:function(){return I},Qt:function(){return O},fi:function(){return S},ix:function(){return B},me:function(){return y},WS:function(){return P},GP:function(){return q}});var t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],r=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],c="U",s="P",o="G",l="O",a="E",u=s,d=o,p="X",f="run_circle",h="security",m="PRISONERS",x="GUARDS",N="PLAY",A="SWAP",k="PASS",T="r",v="d",b="",j="",C=["Escapee: \"I'm free! I'm free!\". Little kid: \"I'm four! I'm four!\"","Two peanuts were walking down a back alley. One was a salted.","The psychic dwarf escaped! There's a small medium at large!","What do you call a vegetable who has escaped prison? An escapea!","The prisoners fave punctuation is a period. It marks the end of a sentence!","Prison is only one word, but to robbers it's a whole sentence."],R=6e4,E=["A","A","A","B","C","D","E","E","E","E","F","G","H","I","I","I","J","K","L","M","N","N","O","O","O","P","Q","R","R","S","T","T","U","V","W","X","Y","Z","?","?"],w=["A","A","A","A","A","B","C","D","D","E","E","E","E","E","E","F","G","H","I","I","I","I","I","J","K","L","L","M","N","N","N","O","O","O","O","P","Q","R","R","R","S","S","T","T","T","U","V","W","X","Y","Z","?","?"],I=["A","A","A","A","A","A","A","B","B","C","C","D","D","D","E","E","E","E","E","E","E","E","E","F","G","G","H","H","I","I","I","I","I","I","I","J","K","L","L","L","M","M","N","N","N","N","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","S","S","S","T","T","T","T","U","U","U","V","W","X","Y","Z","?","?"],O=["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z","?","?"],S="EscapeHatch",B="CenterSquare",y="style1",P="style2",q=""},3689:function(n,e,i){"use strict";i.r(e);var t=i(5893),r=(i(7294),i(5697)),c=i.n(r),s=i(7554),o=function(n){var e=n.participant===s.ap?s._k:s.g9,i=n.participant===s.ap?s.Ji:s.jN;return(0,t.jsxs)("div",{className:"pbPlayerInnerSection",children:[(0,t.jsxs)("div",{className:"pbPlayerTitle",children:[(0,t.jsx)("i",{className:"material-icons",children:e}),"\xa0",i,"\xa0",(0,t.jsx)("i",{className:"material-icons",children:e})]}),(0,t.jsx)("div",{className:"pbTilerack",children:n.racktiles&&n.racktiles.map((function(e,i){return(0,t.jsx)(l,{whoseturn:n.whoseturn,participant:n.participant,selection:n.selection,tileindex:i,tilevalue:e,onClick:function(){return n.onClick(i)}},"RackTile".concat(i))}))}),n.whoseturn===n.participant?m(n):n.allowRewind&&n.moves&&n.moves.length>0&&n.moves[n.moves.length-1].by===n.participant&&N(n),n.moves&&n.moves.length>0&&n.moves[n.moves.length-1].by!==n.participant&&x(n)]})};o.propTypes={participant:c().string.isRequired,racktiles:c().arrayOf(c().string),whoseturn:c().string.isRequired,selection:c().number.isRequired,onClick:c().func.isRequired,allowRewind:c().bool.isRequired,moves:c().arrayOf(c().any)};var l=function(n){var e="pbTileOnRack "+(n.selection===n.tileindex?"Selected ":"Unselected ")+("Q"===n.tilevalue?"u ":"")+n.participant,i=n.tileindex;return(0,t.jsx)("div",{className:e,onClick:function(e){return n.onClick(e)},children:(0,t.jsx)("div",{className:"pbTileOnRackText",children:n.tilevalue})},i)};l.propTypes={selection:c().number.isRequired,tileindex:c().number.isRequired,tilevalue:c().string.isRequired,participant:c().string.isRequired,onClick:c().func.isRequired};var a=function(n){return(0,t.jsx)("button",{className:"pbActionButton",onClick:n.onClick,children:(0,t.jsxs)("span",{className:"pbActionButtonText",children:[(0,t.jsx)("i",{className:"material-icons",children:"check"}),"\xa0Finish Turn"]})})};a.propTypes={onClick:c().func.isRequired};var u=function(n){return(0,t.jsx)("button",{className:"pbActionButton",onClick:n.onClick,children:(0,t.jsxs)("span",{className:"pbActionButtonText",children:[(0,t.jsx)("i",{className:"material-icons",children:"undo"}),"\xa0Recall Tiles"]})})};u.propTypes={onClick:c().func.isRequired};var d=function(n){return(0,t.jsx)("button",{className:"pbActionButton",onClick:n.onClick,children:(0,t.jsxs)("span",{className:"pbActionButtonText",children:[(0,t.jsx)("i",{className:"material-icons",children:"cached"}),"\xa0Swap Tiles"]})})};d.propTypes={onClick:c().func.isRequired};var p=function(n){return(0,t.jsx)("button",{className:"pbActionButton",onClick:n.onClick,children:(0,t.jsxs)("span",{className:"pbActionButtonText",children:[(0,t.jsx)("i",{className:"material-icons",children:"not_interested"}),"\xa0Pass Turn"]})})};p.propTypes={onClick:c().func.isRequired};var f=function(n){return n.alreadyAllowed?(0,t.jsx)("div",{className:"pbActionButtonSevere",children:(0,t.jsxs)("span",{className:"pbActionButtonSevereText",children:[(0,t.jsx)("i",{className:"material-icons",children:"report"}),"\xa0ENABLED",(0,t.jsx)("span",{className:"pbActionButtonSevereText2",children:"\xa0Allow undo is now enabled"})]})}):(0,t.jsx)("button",{className:"pbActionButtonSevere",onClick:n.onClick,children:(0,t.jsxs)("span",{className:"pbActionButtonSevereText",children:[(0,t.jsx)("i",{className:"material-icons",children:"report_problem"}),"\xa0Allow Undo Turn",(0,t.jsx)("span",{className:"pbActionButtonSevereText2",children:"Click to let opponent undo"})]})})};f.propTypes={alreadyAllowed:c().bool.isRequired,onClick:c().func.isRequired};var h=function(n){return(0,t.jsx)("button",{className:"pbActionButtonSevere",onClick:n.onClick,children:(0,t.jsxs)("span",{className:"pbActionButtonSevereText",children:[(0,t.jsx)("i",{className:"material-icons",children:"delete_forever"}),"\xa0Undo My Turn",(0,t.jsx)("span",{className:"pbActionButtonSevereText2",children:"Opponent has allowed undo"})]})})};function m(n){return(0,t.jsxs)("div",{className:"pbActionButtonDiv",children:[(0,t.jsx)("p",{children:(0,t.jsx)(a,{onClick:function(){return n.onClickFinishTurn()}})}),(0,t.jsx)("p",{children:(0,t.jsx)(u,{onClick:function(){return n.onClickTileRecall()}})}),(0,t.jsx)("p",{children:(0,t.jsx)(d,{onClick:function(){return n.onClickTileExchange()}})}),(0,t.jsx)("p",{children:(0,t.jsx)(p,{onClick:function(){return n.onClickPassPlay()}})})]})}function x(n){return(0,t.jsx)("div",{className:"pbActionButtonDiv",children:(0,t.jsx)("div",{children:(0,t.jsx)(f,{onClick:function(){return n.onClickAllowUndo()},alreadyAllowed:n.allowRewind})})})}function N(n){return(0,t.jsx)("div",{className:"pbActionButtonDiv",children:(0,t.jsx)("p",{children:(0,t.jsx)(h,{onClick:function(){return n.onClickUndoLastPlay()}})})})}h.propTypes={onClick:c().func.isRequired},e.default=o}},function(n){n.O(0,[774,888,179],(function(){return e=6401,n(n.s=e);var e}));var e=n.O();_N_E=e}]);