"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[963],{1963:function(e,s,a){a.r(s),a.d(s,{default:function(){return b}});var i=a(5893),n=a(7294),t=a(5697),r=a.n(t),l=a(6300),o=a(149),c=a(4471),d=a(6260),m=a(5079),p=a(7554),u=a(1130),h=a(7908);var f=a(3836);function v(e,s){(null==s||s>e.length)&&(s=e.length);for(var a=0,i=new Array(s);a<s;a++)i[a]=e[a];return i}function y(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,s){if(!e)return;if("string"===typeof e)return v(e,s);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return v(e,s)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var x=function(e){var s=e.setWhereto,a=e.client,t=e.wsmessage,r=e.gameid,v=e.nickname,x=e.participant,b=function(e){var s=JSON.parse(e);if(s.gameid===r&&"pb"===s.type){if("providegamedata"===s.func){var a=function(e){for(var s=[],a="",i="",n="",t=(0,u.$)(e.racksize),r=[],l=0,o=0;o<e.events.length;o++){var c=e.events[o];if(c.ptiles&&(a=c.ptiles),c.gtiles&&(i=c.gtiles),"STARTGAME"!==c.type&&c.type!==p.bS&&c.type!==p.Ix||(n=c.tiles),c.type===p.bS||c.type===p.Ix||c.type===p.Am){var d={by:c.by,type:c.type};if(c.type===p.bS){d.mainword=c.mainword,d.extrawords=c.extrawords.split(","),d.pos=c.pos,c.by===p.ap&&(l=c.rescues);for(var m=(0,h.F)(c.pos),f=m.row,v=m.col,y=0;y<c.mainword.length;y++){var x=t[f][v];x.usedby===p.i4&&(x.usedby=c.by,x.letter=c.mainword[y]),m.dir===p.oW?v++:f++}}r.push(d)}s.push({tiles:n.split(""),squareArray:JSON.parse(JSON.stringify(t)),ptiles:a.split(""),gtiles:i.split(""),rescues:l,whoseturn:c.whoseturn})}return{pname:e.pname,gname:e.gname,moves:r,racksize:e.racksize,snapshots:s}}(s.apidata);C(a)}if("chat"===s.func){var i=y(A).concat([{from:s.nickname,msg:s.sendmsg}]);S(i)}}},w=(0,n.useState)(0),g=w[0],N=w[1],k=(0,n.useState)({pname:"loading...",gname:"loading...",moves:[],snapshots:[{tiles:[],ptiles:[],gtiles:[],rescues:0,whoseturn:"P"}]}),F=k[0],C=k[1],T=(0,n.useState)([]),A=T[0],S=T[1];(0,n.useEffect)((function(){a.send({gameid:r,type:"pb",sender:p.Vj,func:"startExamining"})}),[]),(0,n.useEffect)((function(){""!==t&&b(t)}),[t]),(0,n.useEffect)((function(){(0,f.O)("ScrollableChat")}),[A]);var O=function(){g+1<F.snapshots.length&&N(g+1)},R=function(){return F.snapshots[g].whoseturn===p.kX},q=function(){return F.snapshots[g].whoseturn===p.Ov};return(0,i.jsxs)("div",{className:"prisonbreak",children:[(0,i.jsxs)("div",{className:"w3-display-container w3-teal topBarHeight",children:[(0,i.jsx)("div",{className:"w3-display-middle",children:(0,i.jsx)("h1",{className:"myHeadingFont",children:"Prison Break"})}),(0,i.jsxs)("div",{className:"w3-display-topleft w3-black topBarCorner commonFontFamily",children:["Game id: ",r]}),(0,i.jsxs)("div",{className:"w3-display-bottomleft w3-orange topBarCorner commonFontFamily",children:["Prisoners: ",F.pname]}),(0,i.jsx)("div",{className:"w3-display-topright w3-black topBarCorner commonFontFamily",children:(0,i.jsx)("button",{className:"w3-button",onClick:function(){s("menu")},children:(0,i.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})}),(0,i.jsxs)("div",{className:"w3-display-bottomright w3-orange topBarCorner commonFontFamily",children:["Guards: ",F.gname]})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col pbTileAndMovesOuter",children:[(0,i.jsx)(o.default,{tiles:F.snapshots[g].tiles,othertiles:R()?F.snapshots[g].gtiles:q()?F.snapshots[g].ptiles:[]}),(0,i.jsx)(c.default,{moves:F.moves.slice(0,g),onmoveclick:function(e){return function(e){var s=e;e+1<F.snapshots.length&&N(s)}(e)}})]}),(0,i.jsx)("div",{className:"col pbPlayerOuterSection",children:(0,i.jsxs)("div",{className:"pbPlayerInnerSection",children:[(0,i.jsxs)("div",{className:"pbPlayerTitle",children:[(0,i.jsx)("i",{className:"material-icons",children:p._k}),"\xa0",p.Ji,"\xa0",(0,i.jsx)("i",{className:"material-icons",children:p._k})]}),(0,i.jsxs)("div",{className:"pbTilerack",children:[F.snapshots[g].whoseturn===p.ap&&(0,i.jsx)("div",{className:"pbTilerackArrow",onClick:O}),F.snapshots[g].ptiles.map((function(e,s){return(0,i.jsx)(j,{participant:p.ap,tilevalue:q()?"*":e,tileindex:s},"ObserverPrisonersRackTile".concat(s))}))]}),(0,i.jsxs)("div",{className:"pbPlayerTitle",children:[(0,i.jsx)("i",{className:"material-icons",children:p.g9}),"\xa0",p.jN,"\xa0",(0,i.jsx)("i",{className:"material-icons",children:p.g9})]}),(0,i.jsxs)("div",{className:"pbTilerack",children:[F.snapshots[g].whoseturn===p.b6&&(0,i.jsx)("div",{className:"pbTilerackArrow",onClick:O}),F.snapshots[g].gtiles.map((function(e,s){return(0,i.jsx)(j,{participant:p.b6,tilevalue:R()?"*":e,tileindex:s},"ObserverGuardsRackTile".concat(s))}))]})]})}),(0,i.jsx)("div",{className:"col",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)(l.default,{squareArray:F.snapshots[g].squareArray,rcd:[-1,-1,p.QY],onClick:function(e,s){return function(e,s){for(var a=-1,i=0;i<F.snapshots.length;i++){var n=F.snapshots[i];-1===a&&n.squareArray[e][s].usedby!==p.i4&&(a=i)}a>0&&N(a-1)}(e,s)}})})}),(0,i.jsxs)("div",{className:"col",children:[(0,i.jsx)(d.default,{rescues:F.snapshots[g].rescues}),(0,i.jsx)(m.default,{gameid:r,client:a,nickname:v,msgs:A,setMsgs:S,participant:x})]})]}),(0,i.jsxs)("div",{className:"w3-display-container w3-teal examineFooterHeight",children:[(0,i.jsx)("div",{className:"w3-display-middle commonFontFamily",children:(0,i.jsxs)("div",{children:[g>0&&(0,i.jsx)("button",{className:"w3-black w3-round",onClick:function(){N(0)},children:(0,i.jsx)("i",{className:"material-icons",children:"fast_rewind"})}),g>0&&(0,i.jsx)("button",{className:"w3-black w3-round",onClick:function(){g-1>-1&&N(g-1)},children:(0,i.jsx)("i",{className:"material-icons",children:"arrow_left"})}),g<F.snapshots.length-1&&(0,i.jsx)("button",{className:"w3-black w3-round",onClick:O,children:(0,i.jsx)("i",{className:"material-icons",children:"arrow_right"})}),g<F.snapshots.length-1&&(0,i.jsx)("button",{className:"w3-black w3-round",onClick:function(){var e=F.snapshots.length-1;N(e)},children:(0,i.jsx)("i",{className:"material-icons",children:"fast_forward"})})]})}),(0,i.jsx)("div",{className:"w3-display-topleft commonFontFamily",children:(0,i.jsx)("p",{children:"\xa0Click on a move in the move list to jump to where it was played"})}),(0,i.jsx)("div",{className:"w3-display-bottomleft commonFontFamily",children:(0,i.jsx)("p",{children:"\xa0Click on a tile on the board to jump to where it was played"})}),(0,i.jsx)("div",{className:"w3-display-topright commonFontFamily",children:(0,i.jsxs)("div",{className:"pbTilerack",children:["Click on the ",(0,i.jsx)("span",{className:"pbTilerackArrowInFooter",children:" "})," by the rack to advance one move\xa0"]})})]})]})};x.propTypes={setWhereto:r().func.isRequired,client:r().any,wsmessage:r().string.isRequired,gameid:r().string.isRequired,nickname:r().string.isRequired,participant:r().string.isRequired};var j=function(e){var s="pbTileOnRack Unselected "+("Q"===e.tilevalue?"u ":"")+e.participant;return(0,i.jsx)("div",{className:s,children:(0,i.jsx)("div",{className:"pbTileOnRackText",children:e.tilevalue})},e.tileindex)};j.propTypes={participant:r().string.isRequired,tilevalue:r().string.isRequired,tileindex:r().number.isRequired};var b=x}}]);