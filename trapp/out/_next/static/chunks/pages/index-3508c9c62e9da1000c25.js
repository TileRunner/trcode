(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8474:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return h}});var n=t(5893),a=t(9008),r=t(9359),i=t(7294),l=t(6522),c=t(1696),o=t(3019),d=t(4891);function h(){var e=(0,i.useState)("menu"),s=e[0],t=e[1];return(0,n.jsxs)("div",{children:["menu"===s&&(0,n.jsx)(m,{setWhereto:t}),"wm"===s&&(0,n.jsx)(l.default,{setWhereto:t}),"wi"===s&&(0,n.jsx)(c.default,{setWhereto:t}),"pb"===s&&(0,n.jsx)(o.default,{setWhereto:t}),"fyb"===s&&(0,n.jsx)(d.default,{setWhereto:t})]})}var m=function(e){var s=(0,i.useState)(!1),t=s[0],l=s[1],c=(0,i.useState)(!1),o=c[0],d=c[1],h=(0,i.useState)(!1),m=h[0],u=h[1],p=(0,i.useState)(!1),x=p[0],j=p[1],g=(0,i.useState)(!1),f=g[0],w=g[1],v=(0,i.useState)(!1),N=v[0],y=v[1],b=(0,i.useState)(!1),k=b[0],S=b[1],F=function(e){return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("button",{className:"menuButton",onClick:function(){e.setWhereto(e.targetWhereto)},children:e.optionText})}),(0,n.jsx)("td",{children:(0,n.jsx)("button",{id:"toggleDescribeFlag",className:"menuToggleDescButton ".concat(e.descFlag?"Y":"N"),onClick:function(){e.setDescFlag(!e.descFlag)},children:e.descFlag?"Hide info":"Show info"})})]})},T=(0,n.jsx)("div",{className:"menuOptionDescDiv",children:(0,n.jsxs)("ul",{className:"commonFontFamily",children:[(0,n.jsx)("li",{children:(0,n.jsx)("h2",{className:"CommenHeaderFontFamily",children:"Word Mastermind is a single player code cracking game."})}),(0,n.jsx)("li",{children:"The computer picks a random word."}),(0,n.jsx)("li",{children:"You enter guesses until you guess correctly."}),(0,n.jsx)("li",{children:"The computer tells you how many letters are correct and how many are in the correct position."}),(0,n.jsx)("li",{children:"The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."}),(0,n.jsx)(r.I3,{children:(0,n.jsx)("li",{children:"The computer shows you word info for guessed words."})})]})}),W=(0,n.jsx)("div",{className:"menuOptionDescDiv",children:(0,n.jsxs)("ul",{className:"commonFontFamily",children:[(0,n.jsx)("li",{children:(0,n.jsx)("h2",{className:"commonHeaderFontFamily",children:"Word Info is a utility to get information on words."})}),(0,n.jsx)("li",{children:"Anagrams - words that use the exact same letters."}),(0,n.jsx)("li",{children:"Inserts - words that can be made by inserting a single letter."}),(0,n.jsx)("li",{children:"Drops - words that can be made by dropping a single letter."}),(0,n.jsx)("li",{children:"Swaps - words that can be made by swapping a single letter."})]})}),C=(0,n.jsx)("div",{className:"menuOptionDescDiv",children:(0,n.jsxs)("ul",{className:"commonFontFamily",children:[(0,n.jsx)("li",{children:(0,n.jsx)("h2",{className:"commonHeaderFontFamily",children:"Prison Break is a two player crossword style game."})}),(0,n.jsx)("li",{children:"You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."}),(0,n.jsx)("li",{children:"Prisoners always play first."}),(0,n.jsx)("li",{children:"The first word played must touch the centre square."}),(0,n.jsxs)("li",{children:["To free a prisoner, the Prisoners must play a tile on one of the special ",(0,n.jsx)("span",{className:"material-icons pbSquareEscapeHatch",children:"run_circle"})," squares."]}),(0,n.jsxs)("li",{children:["When a ",(0,n.jsx)("span",{className:"pbSquareUsedByGuards",children:"\xa0?\xa0"})," is played it represents any letter and does not have to remain as the same letter throughout the game."]}),(0,n.jsxs)("li",{children:["The ",(0,n.jsx)("span",{className:"pbSquareUsedByGuards u",children:"Q"}),' tile can represent "Q" or "QU", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game.']}),(0,n.jsx)("li",{children:"The game ends if a player empties their rack."}),(0,n.jsxs)("li",{children:["The game ends if all the special ",(0,n.jsx)("span",{className:"material-icons pbSquareEscapeHatch",children:"run_circle"})," squares are used."]}),(0,n.jsx)("li",{children:"The game ends if both players pass."})]})}),A=(0,n.jsx)("div",{className:"menuOptionDescDiv",children:(0,n.jsxs)("ul",{className:"commonFontFamily",children:[(0,n.jsx)("li",{children:(0,n.jsx)("h2",{className:"commonHeaderFontFamily",children:"Fry Your Brain is a word game that can be contested by two to six players."})}),(0,n.jsx)("li",{children:"A tile pool is provided, starting with 3 letters. Players take turns."}),(0,n.jsx)("li",{children:"When it is your turn, make a word that has all the letters in the tile pool, plus any amount of additional letters."}),(0,n.jsx)("li",{children:"You cannot reuse a word from the same round."}),(0,n.jsx)("li",{children:"You cannot merely add an S to a valid word from the same round, unless that word ends in S."}),(0,n.jsx)("li",{children:"When a player fails to make a valid word on their turn, the other players take part in the free-for-all."}),(0,n.jsx)("li",{children:"In the free-for-all, the goal is to submit the shortest answer you can. All players with the shortest of the answers get points."}),(0,n.jsx)("li",{children:"The points given equals the number of letters in the tile pool the last time someone gave a valid answer for that round."}),(0,n.jsx)("li",{children:"Rounds continue until someone reaches the target number of points for the game."})]})}),I=function(e){return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"menuAckShort",children:e.ackText}),(0,n.jsx)("td",{children:(0,n.jsx)("button",{className:"menuToggleDescButton ".concat(e.descFlag?"Y":"N"),onClick:function(){e.setDescFlag(!e.descFlag)},children:e.descFlag?"Hide info":"Show info"})})]})},D=(0,n.jsx)("div",{children:(0,n.jsx)("p",{children:"This site uses the Enhanced North American Benchmark LEexicon, millenial edition, a public domain word list that I gratefully acknowledge."})}),E=(0,n.jsx)("div",{children:(0,n.jsxs)("p",{children:["This site uses Free JSON storage made available by Cyril Bois from France. ",(0,n.jsx)("a",{href:"https://extendsclass.com/contact",children:"Click here for more info"}),". Thanks Cyril!"]})}),O=(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"Danielle, Emese, Cesar, Lennon, Bev, Noah, Rach, Sarah, Rod, Sonya, Nolan, Shyrai, Agnes, ..."}),(0,n.jsxs)("p",{children:["Thanks for technical help, feedback, suggestions, or simply having fun here. ",(0,n.jsx)("i",{className:"material-icons heart",children:"favorite"})]})]});return(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:"Tile Runner"}),(0,n.jsx)("link",{rel:"icon",href:"/tileTR.ico"}),(0,n.jsx)("meta",{name:"description",content:"Tile Runner - Fun with words"}),(0,n.jsx)("meta",{property:"og:title",content:"Tile Runner"}),(0,n.jsx)("meta",{property:"og:description",content:"A few word games and a word lookup feature"}),(0,n.jsx)("meta",{property:"og:image",content:"/tileTR.png"}),(0,n.jsx)("meta",{property:"og:image:width",content:"400"}),(0,n.jsx)("meta",{property:"og:image:height",content:"400"}),(0,n.jsx)("meta",{name:"twitter:title",content:"Tile Runner - Fun with words"}),(0,n.jsx)("meta",{name:"twitter:image",content:"/tileTR.png"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,n.jsx)("meta",{name:"twitter:description",content:"A few word games a and a word lookup feature"}),(0,n.jsx)("meta",{property:"og:url",content:"https://tilerunner.herokuapp.com"}),(0,n.jsx)("meat",{property:"og:site_name",content:"Tile Runner"}),(0,n.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,n.jsx)("meta",{property:"og:type",content:"website"})]}),(0,n.jsx)("div",{className:"menuHeaderDiv",children:(0,n.jsxs)("h1",{className:"myHeadingFont",children:[(0,n.jsx)("span",{className:"pbSquareInner PlayerTile",children:"M"}),"enu ",(0,n.jsx)("span",{className:"pbSquareInner PlayerTile",children:"O"}),"ptions"]})}),(0,n.jsx)(r.I3,{children:(0,n.jsxs)("table",{children:[(0,n.jsx)(F,{descFlag:t,setDescFlag:l,setWhereto:e.setWhereto,targetWhereto:"wm",optionText:"Word Mastermind"}),(0,n.jsx)(F,{descFlag:o,setDescFlag:d,setWhereto:e.setWhereto,targetWhereto:"wi",optionText:"Word Info"}),(0,n.jsx)(F,{descFlag:m,setDescFlag:u,setWhereto:e.setWhereto,targetWhereto:"pb",optionText:"Prison Break"}),(0,n.jsx)(F,{descFlag:x,setDescFlag:j,setWhereto:e.setWhereto,targetWhereto:"fyb",optionText:"Fry Your Brain"})]})}),(0,n.jsx)(r.A_,{children:(0,n.jsxs)("table",{children:[(0,n.jsx)(F,{descFlag:t,setDescFlag:l,setWhereto:e.setWhereto,targetWhereto:"wm",optionText:"Word Mastermind"}),(0,n.jsx)(F,{descFlag:o,setDescFlag:d,setWhereto:e.setWhereto,targetWhereto:"wi",optionText:"Word Info"}),(0,n.jsx)(F,{descFlag:x,setDescFlag:j,setWhereto:e.setWhereto,targetWhereto:"fyb",optionText:"Fry Your Brain"})]})}),t&&T,o&&W,m&&C,x&&A,(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"menuHeaderDiv",children:(0,n.jsxs)("h2",{className:"myHeadingFont",children:[(0,n.jsx)("span",{className:"pbSquareInner PlayerTile",children:"S"}),"pecial ",(0,n.jsx)("span",{className:"pbSquareInner PlayerTile",children:"T"}),"hanks"]})}),(0,n.jsxs)("table",{children:[(0,n.jsx)(I,{ackText:"ENABLE2K",descFlag:f,setDescFlag:w}),(0,n.jsx)(I,{ackText:"extendsclass.com",descFlag:N,setDescFlag:y}),(0,n.jsx)(I,{ackText:"Friends",descFlag:k,setDescFlag:S})]}),f&&D,N&&E,k&&O]})]})}},2389:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return j}});var n=t(5893),a=t(1385),r=t(7294),i=t(3625),l=t(8520),c=t(9477),o=t(798),d=t(7666),h=t(6595),m=t(1489),u=t(4946);var p=t(3939),x=function(e){var s="pbTileOnRack Unselected "+("Q"===e.tilevalue?"u ":"")+e.participant;return(0,n.jsx)("div",{className:s,children:(0,n.jsx)("div",{className:"pbTileOnRackText",children:e.tilevalue})},e.tileindex)},j=function(e){var s=e.setWhereto,t=e.client,j=e.wsmessage,g=e.gameid,f=e.nickname,w=e.participant,v=(0,r.useState)(0),N=v[0],y=v[1],b=(0,r.useState)({pname:"loading...",gname:"loading...",moves:[],snapshots:[{tiles:[],ptiles:[],gtiles:[],rescues:0,whoseturn:"P"}]}),k=b[0],S=b[1],F=(0,r.useState)([]),T=F[0],W=F[1];(0,r.useEffect)((function(){t.send({gameid:g,type:"pb",sender:h.Vj,func:"startExamining"})}),[]),(0,r.useEffect)((function(){""!==j&&function(e){var s=JSON.parse(e);if(s.gameid===g&&"pb"===s.type){if("providegamedata"===s.func){var t=function(e){for(var s=[],t=e,n="",a="",r="",i=(0,m.$)(t.racksize),l=[],c=0,o=0;o<t.events.length;o++){var d=t.events[o];if(d.ptiles&&(n=d.ptiles),d.gtiles&&(a=d.gtiles),"STARTGAME"!==d.type&&d.type!==h.bS&&d.type!==h.Ix||(r=d.tiles),d.type===h.bS||d.type===h.Ix||d.type===h.Am){var p={by:d.by,type:d.type};if(d.type===h.bS){p.mainword=d.mainword,p.extrawords=d.extrawords.split(","),p.pos=d.pos,d.by===h.ap&&(c=d.rescues);for(var x=(0,u.F)(d.pos),j=x.row,g=x.col,f=0;f<d.mainword.length;f++){var w=i[j][g];w.usedby===h.i4&&(w.usedby=d.by,w.letter=d.mainword[f]),x.dir===h.oW?g++:j++}}l.push(p)}s.push({tiles:r.split(""),squareArray:JSON.parse(JSON.stringify(i)),ptiles:n.split(""),gtiles:a.split(""),rescues:c,whoseturn:d.whoseturn})}return{pname:t.pname,gname:t.gname,moves:l,racksize:t.racksize,snapshots:s}}(s.apidata);S(t)}if("chat"===s.func){var n=[].concat((0,a.Z)(T),[{from:s.nickname,msg:s.sendmsg}]);W(n)}}}(j)}),[j]),(0,r.useEffect)((function(){(0,p.O)("ScrollableChat")}),[T]);var C=function(){N+1<k.snapshots.length&&y(N+1)},A=function(){return k.snapshots[N].whoseturn===h.kX},I=function(){return k.snapshots[N].whoseturn===h.Ov};return(0,n.jsxs)("div",{className:"prisonbreak",children:[(0,n.jsxs)("div",{className:"w3-display-container w3-teal topBarHeight",children:[(0,n.jsx)("div",{className:"w3-display-middle",children:(0,n.jsx)("h1",{className:"myHeadingFont",children:"Prison Break"})}),(0,n.jsxs)("div",{className:"w3-display-topleft w3-black topBarCorner commonFontFamily",children:["Game id: ",g]}),(0,n.jsxs)("div",{className:"w3-display-bottomleft w3-orange topBarCorner commonFontFamily",children:["Prisoners: ",k.pname]}),(0,n.jsx)("div",{className:"w3-display-topright w3-black topBarCorner commonFontFamily",children:(0,n.jsx)("button",{className:"w3-button",onClick:function(){s("menu")},children:(0,n.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})}),(0,n.jsxs)("div",{className:"w3-display-bottomright w3-orange topBarCorner commonFontFamily",children:["Guards: ",k.gname]})]}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col pbTileAndMovesOuter",children:[(0,n.jsx)(l.default,{tiles:k.snapshots[N].tiles,othertiles:A()?k.snapshots[N].gtiles:I()?k.snapshots[N].ptiles:[]}),(0,n.jsx)(c.default,{moves:k.moves.slice(0,N),onmoveclick:function(e){return function(e){var s=e;e+1<k.snapshots.length&&y(s)}(e)}})]}),(0,n.jsx)("div",{className:"col pbPlayerOuterSection",children:(0,n.jsxs)("div",{className:"pbPlayerInnerSection",children:[(0,n.jsxs)("div",{className:"pbPlayerTitle",children:[(0,n.jsx)("i",{className:"material-icons",children:h._k}),"\xa0",h.Ji,"\xa0",(0,n.jsx)("i",{className:"material-icons",children:h._k})]}),(0,n.jsxs)("div",{className:"pbTilerack",children:[k.snapshots[N].whoseturn===h.ap&&(0,n.jsx)("div",{className:"pbTilerackArrow",onClick:C}),k.snapshots[N].ptiles.map((function(e,s){return(0,n.jsx)(x,{participant:h.ap,tilevalue:I()?"*":e,tileindex:s},"ObserverPrisonersRackTile".concat(s))}))]}),(0,n.jsxs)("div",{className:"pbPlayerTitle",children:[(0,n.jsx)("i",{className:"material-icons",children:h.g9}),"\xa0",h.jN,"\xa0",(0,n.jsx)("i",{className:"material-icons",children:h.g9})]}),(0,n.jsxs)("div",{className:"pbTilerack",children:[k.snapshots[N].whoseturn===h.b6&&(0,n.jsx)("div",{className:"pbTilerackArrow",onClick:C}),k.snapshots[N].gtiles.map((function(e,s){return(0,n.jsx)(x,{participant:h.b6,tilevalue:A()?"*":e,tileindex:s},"ObserverGuardsRackTile".concat(s))}))]})]})}),(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)(i.default,{squareArray:k.snapshots[N].squareArray,rcd:[-1,-1,h.QY],onClick:function(e,s){return function(e,s){for(var t=-1,n=0;n<k.snapshots.length;n++){var a=k.snapshots[n];-1===t&&a.squareArray[e][s].usedby!==h.i4&&(t=n)}t>0&&y(t-1)}(e,s)}})})}),(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)(o.default,{rescues:k.snapshots[N].rescues}),(0,n.jsx)(d.default,{gameid:g,client:t,nickname:f,msgs:T,setMsgs:W,participant:w})]})]}),(0,n.jsxs)("div",{className:"w3-display-container w3-teal examineFooterHeight",children:[(0,n.jsx)("div",{className:"w3-display-middle commonFontFamily",children:(0,n.jsxs)("div",{children:[N>0&&(0,n.jsx)("button",{className:"w3-black w3-round",onClick:function(){y(0)},children:(0,n.jsx)("i",{className:"material-icons",children:"fast_rewind"})}),N>0&&(0,n.jsx)("button",{className:"w3-black w3-round",onClick:function(){N-1>-1&&y(N-1)},children:(0,n.jsx)("i",{className:"material-icons",children:"arrow_left"})}),N<k.snapshots.length-1&&(0,n.jsx)("button",{className:"w3-black w3-round",onClick:C,children:(0,n.jsx)("i",{className:"material-icons",children:"arrow_right"})}),N<k.snapshots.length-1&&(0,n.jsx)("button",{className:"w3-black w3-round",onClick:function(){var e=k.snapshots.length-1;y(e)},children:(0,n.jsx)("i",{className:"material-icons",children:"fast_forward"})})]})}),(0,n.jsx)("div",{className:"w3-display-topleft commonFontFamily",children:(0,n.jsx)("p",{children:"\xa0Click on a move in the move list to jump to where it was played"})}),(0,n.jsx)("div",{className:"w3-display-bottomleft commonFontFamily",children:(0,n.jsx)("p",{children:"\xa0Click on a tile on the board to jump to where it was played"})}),(0,n.jsx)("div",{className:"w3-display-topright commonFontFamily",children:(0,n.jsxs)("div",{className:"pbTilerack",children:["Click on the ",(0,n.jsx)("span",{className:"pbTilerackArrowInFooter",children:" "})," by the rack to advance one move\xa0"]})})]})]})}},3019:function(e,s,t){"use strict";t.r(s);var n=t(5893),a=t(7294),r=t(5518),i=t(5916),l=t(78),c=t(2389),o=t(6595),d=t(5877);s.default=function(e){var s=e.setWhereto,t=(0,a.useState)((0,d.v4)())[0],h=(0,a.useState)(!1),m=h[0],u=h[1],p=(0,a.useState)(""),x=p[0],j=p[1],g=(0,a.useState)(""),f=g[0],w=g[1],v=(0,a.useState)(o.dK),N=v[0],y=v[1],b=(0,a.useState)(""),k=b[0],S=b[1],F=(0,a.useState)(4),T=F[0],W=F[1],C="wss://tilerunner.herokuapp.com/?clientType=pb&thisisme="+t,A=(0,a.useState)(new r.Z(C,(function(e){S(e.data)}),"pb",t))[0];return(0,a.useEffect)((function(){return A.connect()}),[]),N===o.dK?(0,n.jsx)(i.default,{setWhereto:s,client:A,setIsrejoin:u,wsmessage:k,gameid:x,setGameid:j,nickname:f,setNickname:w,setParticipant:y,racksize:T,setRacksize:W}):N===o.Vj?(0,n.jsx)(c.default,{setWhereto:s,client:A,wsmessage:k,gameid:x,nickname:f,participant:N}):(0,n.jsx)(l.default,{setWhereto:s,isrejoin:m,participant:N,gameid:x,nickname:f,wsmessage:k,client:A,racksize:T})}},1201:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return o}});var n=t(1385),a=t(5893),r=t(809),i=t.n(r),l=t(2447),c=t(7294);function o(e){var s,t,r=(0,c.useState)([]),o=r[0],d=r[1],h=(0,c.useState)(!1),m=h[0],u=h[1];return(0,c.useEffect)((function(){(function(){var s=(0,l.Z)(i().mark((function s(){var t,n;return i().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return"https://tilerunner.herokuapp.com/ENABLE2K?letters=",s.next=3,fetch("https://tilerunner.herokuapp.com/ENABLE2K?letters="+e.word);case 3:return t=s.sent,s.next=6,t.json();case 6:n=s.sent,console.log("swaps=".concat(JSON.stringify(n.swaps))),d(n),u(!0);case 10:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}})()()}),[]),(0,a.jsx)("div",{className:"wibody",children:m?(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:["Y"===e.showInserts&&o.inserts.length>0&&(t=o.inserts,(0,a.jsx)("tr",{children:t.map((function(e){return(0,a.jsxs)(a.Fragment,{children:[""===e?(0,a.jsx)("td",{}):(0,a.jsx)("td",{className:"insertCount","data-toggle":"tooltip",title:e,children:e.length}),(0,a.jsx)("td",{})]})}))},"inserts.".concat(e.word))),"Y"===e.showSwaps&&o.swaps.length>0&&function(s){var t=[].concat((0,n.Z)(s),[""]);return(0,a.jsx)("tr",{children:null===t||void 0===t?void 0:t.map((function(s,t){return(0,a.jsxs)(a.Fragment,{children:["N"===e.showInserts||""===o.inserts[t]?(0,a.jsx)("td",{className:"insertCountSpacer"}):(0,a.jsx)("td",{className:"balloonstring",children:"\u27bb"}),""===s?(0,a.jsx)("td",{}):(0,a.jsx)("td",{className:"swapCount","data-toggle":"tooltip",title:s,children:s.length})]})}))},"swaps.".concat(e.word))}(o.swaps),function(){var s,t=e.word,n=e.word+"2";return(0,a.jsxs)("tr",{className:"displayWordRow",children:[(0,a.jsx)("td",{className:"insertCountSpacer"}),null===(s=e.word)||void 0===s?void 0:s.toUpperCase().split("").map((function(e,s){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("td",{className:o.valid?"letter":"letterInvalidWord",children:e}),(0,a.jsx)("td",{className:"facevalue",children:(0,a.jsx)("sub",{children:p(e)})})]})})),(0,a.jsx)("td",{children:"Y"===e.showAnagrams&&(0,a.jsx)("span",{children:o.anagrams.length>0&&(0,a.jsx)("span",{className:"anagramCount","data-toggle":"tooltip",title:o.anagrams,children:o.anagrams.length})},o.anagrams)},t),(0,a.jsx)("td",{children:"Y"===o.valid?(0,a.jsx)("span",{className:"wordIsValid",children:"Valid word"}):(0,a.jsx)("span",{className:"wordIsNotValid",children:"Not a recognized word"})},n)]},"word.".concat(e.word))}(),"Y"===e.showDrops&&o.drops.length>0&&(s=o.drops,(0,a.jsx)("tr",{className:"dropRow",children:s.map((function(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("td",{}),"Y"===e?(0,a.jsx)("td",{className:"dropIndicator","data-toggle":"tooltip",title:"You can drop this letter",children:"\u2022"}):(0,a.jsx)("td",{})]})}))},"drops.".concat(e.word))),(0,a.jsx)("tr",{className:"divider",children:(0,a.jsx)("td",{colSpan:e.word.length+e.word.length+3,children:"\xa0"})})]})}):(0,a.jsx)("p",{children:"Loading ..."})});function p(e){switch(e){case"D":case"G":return 2;case"B":case"C":case"M":case"P":return 3;case"F":case"H":case"V":case"W":case"Y":return 4;case"K":return 5;case"J":case"X":return 8;case"Q":case"Z":return 10}return 1}}},1696:function(e,s,t){"use strict";t.r(s);var n=t(5893),a=t(1385),r=t(7294),i=(t(1664),t(1201));s.default=function(e){var s=e.setWhereto,t=(0,r.useState)(""),l=t[0],c=t[1],o=(0,r.useState)([]),d=o[0],h=o[1];return(0,n.jsxs)("div",{className:"container-fluid",children:[(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col-11 wititle",children:["Word Info",(0,n.jsx)("i",{className:"material-icons",children:"help_outline"})]}),(0,n.jsx)("div",{className:"col-1 wihomelink",children:(0,n.jsx)("button",{className:"w3-button",onClick:function(){s("menu")},children:(0,n.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})})]}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-sm-8",children:(0,n.jsxs)("div",{className:"form-inline",children:[(0,n.jsx)("label",{children:"Word:\xa0"}),(0,n.jsx)("input",{className:"letterInput",name:"word",value:l,onChange:function(e){c(e.target.value)}}),(0,n.jsx)("label",{children:"\xa0"}),(0,n.jsx)("button",{id:"acceptWord",onClick:function(){h([l].concat((0,a.Z)(d))),c("")},children:"Get Word Info"}),(0,n.jsx)("label",{children:"\xa0"}),(0,n.jsx)("button",{id:"acceptAlphagram",onClick:function(){fetch("https://tilerunner.herokuapp.com/ENABLE2K?letters="+l).then((function(e){return e.text()})).then((function(e){var s=JSON.parse(e),t=[];s.anagrams.map((function(e){t=[].concat((0,a.Z)(t),[e])})),s.valid&&t.push(l.toUpperCase()),t.sort(),c(""),h([].concat((0,a.Z)(t),(0,a.Z)(d)))}))},children:"Get Anagrams"}),(0,n.jsx)("label",{children:"\xa0"}),(0,n.jsx)("button",{id:"acceptRegex",onClick:function(){fetch("https://tilerunner.herokuapp.com/ENABLE2K?regex="+l.toLocaleLowerCase()).then((function(e){return e.text()})).then((function(e){var s=JSON.parse(e);c("");var t=[];s.regexmatches.map((function(e){t=[].concat((0,a.Z)(t),[e])})),h([].concat((0,a.Z)(t),(0,a.Z)(d))),s.count>50&&alert("Too many results, only 50 taken")}))},children:"Get Regex Matches"}),(0,n.jsx)("label",{children:"\xa0"}),!1]})}),(0,n.jsx)("div",{className:"col-sm-4"})]}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-sm-8",children:d.map((function(e,s){return""===e?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(i.default,{word:e,showInserts:"Y",showSwaps:"Y",showAnagrams:"Y",showDrops:"Y"},"".concat(d.length-s,".").concat(e))}))}),(0,n.jsx)("div",{className:"col-sm-4"})]})]})}},6522:function(e,s,t){"use strict";t.r(s);var n=t(1385),a=t(5893),r=t(7294),i=(t(1664),t(1201)),l=t(9359);function c(e,s){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,s){if(!e)return;if("string"===typeof e)return o(e,s);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,s)}(e))||s&&e&&"number"===typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,l=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,r=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw r}}}}function o(e,s){(null==s||s>e.length)&&(s=e.length);for(var t=0,n=new Array(s);t<s;t++)n[t]=e[t];return n}s.default=function(e){var s=e.setWhereto,t=(0,r.useState)([]),o=t[0],d=t[1],h=(0,r.useState)(0),m=h[0],u=h[1],p=(0,r.useState)(""),x=p[0],j=p[1],g=(0,r.useState)(""),f=g[0],w=g[1],v=(0,r.useState)(""),N=v[0],y=v[1],b=(0,r.useState)([]),k=b[0],S=b[1],F=(0,r.useState)(!1),T=F[0],W=F[1],C=(0,a.jsxs)("table",{className:"Guesstable",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"wmth",children:"Guess"}),(0,a.jsx)("th",{className:"wmth",children:"Correct Letter"}),(0,a.jsx)("th",{className:"wmth",children:"Correct Position"})]})}),(0,a.jsx)("tbody",{children:k.map((function(e){return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"wmtd",children:e}),(0,a.jsx)("td",{className:"wmtd AlignCenter",children:E(e)}),(0,a.jsx)("td",{className:"wmtd AlignCenter",children:O(e)})]})}))})]}),A=(0,a.jsxs)("div",{className:"form-group",children:[0===k.length?(0,a.jsx)("label",{className:"wmlabel",children:"First guess:"}):(0,a.jsx)("label",{className:"wmlabel",children:"Next guess:"}),(0,a.jsx)("input",{className:"form-control",name:"guess",value:N,onChange:function(e){var s=e.target.value.toUpperCase().replace(/\W/g,"");if(s.length===x.length){var t=m+1;u(t),S([s].concat((0,n.Z)(k))),y(""),s===x&&(W(!0),8===x.length&&d([].concat((0,n.Z)(o),[t])))}else y(s)}})]}),I=(0,a.jsxs)("div",{children:[(0,a.jsxs)("h2",{className:"wmh2",children:["Solved in ",k.length," moves!"]}),(0,a.jsx)("button",{className:"wmbutton",onClick:function(){D(),y(""),S([]),W(!1)},children:8===x.length?"Start Another Set!":"Start Next Word"})]});return(0,a.jsx)("div",{className:"Mastermind",children:(0,a.jsxs)("div",{className:"container-fluid",children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-11 wmtitle",children:["Word Mastermind",(0,a.jsx)("span",{className:"material-icons",children:"psychology"})]}),(0,a.jsx)("div",{className:"col-1 wmhomelink",children:(0,a.jsx)("button",{className:"w3-button",onClick:function(){s("menu")},children:(0,a.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})})]}),(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-11",children:(0,a.jsx)("p",{className:"wmp",children:"Cycle through 2-8 letter words per set."})})}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-lg-8",children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"Outertable",children:[(0,a.jsxs)("h3",{className:"wmh3 AlignLeft",children:["Guesses this word: ",k.length]}),(0,a.jsxs)("h3",{className:"wmh3 AlignLeft",children:["Guesses this set: ",m]}),0===o.length?(0,a.jsx)("p",{className:"AlignLeft",children:"No completed sets yet"}):(0,a.jsxs)("p",{className:"AlignLeft",children:["Guesses for completed sets: ",o.map((function(e){return(0,a.jsxs)("span",{children:[e," "]},e.toString())}))]})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"Outertable",children:[""===x?D():"",(0,a.jsxs)("h3",{className:"wmh3",children:["Secret Word: ",T?x:f]}),""===x?(0,a.jsx)("h1",{className:"wmh1",children:"Loading ..."}):T?I:A,T?(0,a.jsx)("br",{}):0===k.length?(0,a.jsx)("p",{className:"wmp",children:"Start guessing"}):(0,a.jsx)("p",{className:"wmp",children:"Keep guessing"})]})})]}),(0,a.jsx)(l.I3,{children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-lg-12",children:k.map((function(e,s){return(0,a.jsx)(i.default,{word:e,showInserts:"N",showSwaps:"Y",showAnagrams:"Y",showDrops:"N"},"".concat(k.length-s,".").concat(e))}))})})})]}),(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsx)("div",{className:"Outertable",children:0===k.length?(0,a.jsx)("p",{children:"No guesses yet"}):C})})]})]})});function D(){var e=x?x.length<2||x.length>7?2:x.length+1:2;2===e&&0!==m&&u(0);var s="https://tilerunner.herokuapp.com/ENABLE2K?random="+e.toString();fetch(s).then((function(e){return e.text()})).then((function(e){var s=JSON.parse(e).toUpperCase();j(s),w(s.split("").map((function(){return"*"})))}))}function E(e){var s,t=0,n=c("ABCDEFGHIJKLMNOPQRSTUVWXYZ");try{for(n.s();!(s=n.n()).done;){var a=s.value,r=x.split(a).length-1,i=e.split(a).length-1;t+=r<i?r:i}}catch(l){n.e(l)}finally{n.f()}return t}function O(e){for(var s=0,t=0;t<x.length;++t)s+=x[t]===e[t]?1:0;return s}}},8581:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8474)}])}},function(e){e.O(0,[673,78,916,891,774,888,179],(function(){return s=8581,e(e.s=s);var s}));var s=e.O();_N_E=s}]);