(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8474:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return g}});var n=t(5893),r=t(809),a=t.n(r),l=t(2447),i=t(9008),c=t(9359),o=t(7294),d=t(6522),h=t(1696),u=t(3019),m=t(4891),x="w3-button w3-green w3-hover-black w3-border w3-round-xxlarge",j="w3-button w3-green w3-hover-black w3-border w3-animate-left",p="w3-right w3-hover-black mymaterialicon w3-green w3-animate-right w3-round-xxlarge",w="300px",f="w3-card-4 w3-green w3-cell w3-animate-right";function g(){var e=(0,o.useState)("menu"),s=e[0],t=e[1],r=(0,o.useState)("Loading"),i=r[0],c=r[1],x=(0,o.useState)("Loading"),j=x[0],p=x[1],w=function(){var e=(0,l.Z)(a().mark((function e(){var s,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://tilerunner.herokuapp.com/evtest",e.next=3,fetch("https://tilerunner.herokuapp.com/evtest");case 3:return s=e.sent,e.next=6,s.json();case 6:t=e.sent,c("".concat(t.evtest)),p("".concat(t.lextest));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){w()}),[]),(0,n.jsxs)("div",{children:["menu"===s&&(0,n.jsx)(N,{setWhereto:t,coderMsg:i,coderMsg2:j}),"wm"===s&&(0,n.jsx)(d.default,{setWhereto:t}),"wi"===s&&(0,n.jsx)(h.default,{setWhereto:t}),"pb"===s&&(0,n.jsx)(u.default,{setWhereto:t}),"fyb"===s&&(0,n.jsx)(m.default,{setWhereto:t})]})}var N=function(e){var s=(0,o.useState)(!1),t=s[0],r=s[1],a=(0,o.useState)(!1),l=a[0],d=a[1],h=(0,o.useState)(!1),u=h[0],m=h[1],x=(0,o.useState)(!1),j=x[0],p=x[1];return(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:"Tile Runner App"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("div",{className:"w3-container w3-teal",children:[(0,n.jsx)("h1",{className:"myHeadingFont",children:"Menu"}),(0,n.jsx)("h2",{children:e.coderMsg})]}),(0,n.jsxs)("div",{className:"w3-container w3-margin-left",children:[(0,n.jsxs)("div",{className:"w3-bar-block",children:[(0,n.jsx)("div",{className:"w3-bar-item",children:(0,n.jsx)(v,{descWm:t,setDescWm:r,setWhereto:e.setWhereto})}),(0,n.jsx)("div",{className:"w3-bar-item",children:(0,n.jsx)(b,{descWi:l,setDescWi:d,setWhereto:e.setWhereto})}),(0,n.jsx)(c.I3,{children:(0,n.jsx)("div",{className:"w3-bar-item",children:(0,n.jsx)(y,{descPb:u,setDescPb:m,setWhereto:e.setWhereto})})}),(0,n.jsx)("div",{className:"w3-bar-item",children:(0,n.jsx)(W,{descFyb:j,setDescFyb:p,setWhereto:e.setWhereto})})]}),(0,n.jsxs)("div",{className:"w3-blue",children:[(0,n.jsx)("h1",{children:"The Enhanced North American Benchmark LEexicon, millenial edition"}),(0,n.jsx)("p",{children:"This site uses the ENABLE2K lexicon, a public domain word list that I gratefully acknowledge."})]}),(0,n.jsxs)("div",{className:"w3-black",children:[(0,n.jsx)("h1",{children:"Free JSON storage"}),(0,n.jsxs)("p",{children:["This site uses Free JSON storage made available by Cyril Bois from France. ",(0,n.jsx)("a",{href:"https://extendsclass.com/contact",children:"Click here for more info"}),". Thanks Cyril!"]})]})]}),(0,n.jsxs)("div",{className:"w3-container w3-teal",children:[(0,n.jsx)("h1",{children:"Have fun!"}),(0,n.jsx)("h2",{children:e.coderMsg2})]})]})},v=function(e){return(0,n.jsxs)("div",{className:"w3-cell-row",style:{width:e.descWm?"100%":w},children:[(0,n.jsx)("div",{className:"w3-cell",children:(0,n.jsx)("button",{className:x,onClick:function(){e.setWhereto("wm")},children:"Word Mastermind"})}),(0,n.jsx)("div",{className:"w3-cell ".concat(e.descWm?"w3-cell-middle":""),children:(0,n.jsx)("button",{id:"toggleDescribeWm",className:e.descWm?j:p,onClick:function(){e.setDescWm(!e.descWm)},children:e.descWm?"Hide info":(0,n.jsx)("i",{className:"material-icons",children:"help_outline"})})}),e.descWm?(0,n.jsx)("div",{className:f,children:(0,n.jsxs)("ul",{className:"w3-ul commonFontFamily",children:[(0,n.jsx)("li",{children:(0,n.jsx)("h2",{className:"CommenHeaderFontFamily",children:"Word Mastermind is a single player code cracking game."})}),(0,n.jsx)("li",{children:"The computer picks a random word."}),(0,n.jsx)("li",{children:"You enter guesses until you guess correctly."}),(0,n.jsx)("li",{children:"The computer tells you how many letters are correct and how many are in the correct position."}),(0,n.jsx)("li",{children:"The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."}),(0,n.jsx)(c.I3,{children:(0,n.jsx)("li",{children:"The computer shows you word info for guessed words."})})]})}):(0,n.jsx)(n.Fragment,{})]})},b=function(e){return(0,n.jsxs)("div",{className:"w3-cell-row",style:{width:e.descWi?"100%":w},children:[(0,n.jsx)("div",{className:"w3-cell",children:(0,n.jsx)("button",{className:x,onClick:function(){e.setWhereto("wi")},children:"Word Info"})}),(0,n.jsx)("div",{className:"w3-cell ".concat(e.descWi?"w3-cell-middle":""),children:(0,n.jsx)("button",{id:"toggleDescribeWi",className:e.descWi?j:p,onClick:function(){e.setDescWi(!e.descWi)},children:e.descWi?"Hide info":(0,n.jsx)("i",{className:"material-icons",children:"help_outline"})})}),e.descWi?(0,n.jsx)("div",{className:f,children:(0,n.jsxs)("ul",{className:"w3-ul commonFontFamily",children:[(0,n.jsx)("li",{children:(0,n.jsx)("h2",{className:"commonHeaderFontFamily",children:"Word Info is a utility to get information on words."})}),(0,n.jsx)("li",{children:"Anagrams - words that use the exact same letters."}),(0,n.jsx)("li",{children:"Inserts - words that can be made by inserting a single letter."}),(0,n.jsx)("li",{children:"Drops - words that can be made by dropping a single letter."}),(0,n.jsx)("li",{children:"Swaps - words that can be made by swapping a single letter."})]})}):(0,n.jsx)(n.Fragment,{})]})},y=function(e){return(0,n.jsxs)("div",{className:"w3-cell-row",style:{width:e.descPb?"100%":w},children:[(0,n.jsx)("div",{className:"w3-cell",children:(0,n.jsx)("button",{className:x,onClick:function(){e.setWhereto("pb")},children:"Prison Break"})}),(0,n.jsx)("div",{className:"w3-cell ".concat(e.descPb?"w3-cell-middle":""),children:(0,n.jsx)("button",{id:"toggleDescribePb",className:e.descPb?j:p,onClick:function(){e.setDescPb(!e.descPb)},children:e.descPb?"Hide info":(0,n.jsx)("i",{className:"material-icons",children:"help_outline"})})}),e.descPb?(0,n.jsx)("div",{className:f,children:(0,n.jsxs)("ul",{className:"w3-ul commonFontFamily",children:[(0,n.jsx)("li",{children:(0,n.jsx)("h2",{className:"commonHeaderFontFamily",children:"Prison Break is a two player crossword style game."})}),(0,n.jsx)("li",{children:"You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."}),(0,n.jsx)("li",{children:"Prisoners always play first."}),(0,n.jsx)("li",{children:"The first word played must touch the centre square."}),(0,n.jsxs)("li",{children:["To free a prisoner, the Prisoners must play a tile on one of the special ",(0,n.jsx)("span",{className:"material-icons pbSquareEscapeHatch",children:"run_circle"})," squares."]}),(0,n.jsxs)("li",{children:["When a ",(0,n.jsx)("span",{className:"pbSquareUsedByGuards",children:"\xa0?\xa0"})," is played it represents any letter and does not have to remain as the same letter throughout the game."]}),(0,n.jsxs)("li",{children:["The ",(0,n.jsx)("span",{className:"pbSquareUsedByGuards u",children:"Q"}),' tile can represent "Q" or "QU", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game.']}),(0,n.jsx)("li",{children:"The game ends if a player empties their rack."}),(0,n.jsxs)("li",{children:["The game ends if all the special ",(0,n.jsx)("span",{className:"material-icons pbSquareEscapeHatch",children:"run_circle"})," squares are used."]}),(0,n.jsx)("li",{children:"The game ends if both players pass."})]})}):(0,n.jsx)(n.Fragment,{})]})},W=function(e){return(0,n.jsxs)("div",{className:"w3-cell-row",style:{width:e.descFyb?"100%":w},children:[(0,n.jsx)("div",{className:"w3-cell",children:(0,n.jsx)("button",{className:x,onClick:function(){e.setWhereto("fyb")},children:"Fry Your Brain"})}),(0,n.jsx)("div",{className:"w3-cell ".concat(e.descPb?"w3-cell-middle":""),children:(0,n.jsx)("button",{id:"toggleDescribeFyb",className:e.descFyb?j:p,onClick:function(){e.setDescFyb(!e.descFyb)},children:e.descFyb?"Hide info":(0,n.jsx)("i",{className:"material-icons",children:"help_outline"})})}),e.descFyb&&(0,n.jsx)("div",{className:f,children:(0,n.jsxs)("ul",{className:"w3-ul commonFontFamily",children:[(0,n.jsx)("li",{children:(0,n.jsx)("h2",{className:"commonHeaderFontFamily",children:"Fry Your Brain is a two to six player word game."})}),(0,n.jsx)("li",{children:"Under Construction"}),(0,n.jsx)("li",{children:"A tile pool is provided, starting with 3 letters, and players take turns."}),(0,n.jsx)("li",{children:"When it is your turn, make a word that has all the letters in the tile pool, plus any amount of additional letters."}),(0,n.jsx)("li",{children:"When a player fails to make a word on their turn, the other players take part in the free for all."}),(0,n.jsx)("li",{children:"In the free for all, the goal is to submit the shortest answer you can. All players with the shortest of the answers get points."}),(0,n.jsx)("li",{children:"The points given equals the number of letters in the tile pool the last time someone gave a valid answer for that round."}),(0,n.jsx)("li",{children:"Rounds continue until someone reaches the target number of points for the game."})]})})]})}},1201:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return o}});var n=t(1385),r=t(5893),a=t(809),l=t.n(a),i=t(2447),c=t(7294);function o(e){var s,t,a=(0,c.useState)([]),o=a[0],d=a[1],h=(0,c.useState)(!1),u=h[0],m=h[1];return(0,c.useEffect)((function(){(function(){var s=(0,i.Z)(l().mark((function s(){var t,n;return l().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return"https://tilerunner.herokuapp.com/ENABLE2K?letters=",s.next=3,fetch("https://tilerunner.herokuapp.com/ENABLE2K?letters="+e.word);case 3:return t=s.sent,s.next=6,t.json();case 6:n=s.sent,console.log("swaps=".concat(JSON.stringify(n.swaps))),d(n),m(!0);case 10:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}})()()}),[]),(0,r.jsx)("div",{className:"wibody",children:u?(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:["Y"===e.showInserts&&o.inserts.length>0&&(t=o.inserts,(0,r.jsx)("tr",{children:t.map((function(e){return(0,r.jsxs)(r.Fragment,{children:[""===e?(0,r.jsx)("td",{}):(0,r.jsx)("td",{className:"insertCount","data-toggle":"tooltip",title:e,children:e.length}),(0,r.jsx)("td",{})]})}))},"inserts.".concat(e.word))),"Y"===e.showSwaps&&o.swaps.length>0&&function(s){var t=[].concat((0,n.Z)(s),[""]);return(0,r.jsx)("tr",{children:null===t||void 0===t?void 0:t.map((function(s,t){return(0,r.jsxs)(r.Fragment,{children:["N"===e.showInserts||""===o.inserts[t]?(0,r.jsx)("td",{className:"insertCountSpacer"}):(0,r.jsx)("td",{className:"balloonstring",children:"\u27bb"}),""===s?(0,r.jsx)("td",{}):(0,r.jsx)("td",{className:"swapCount","data-toggle":"tooltip",title:s,children:s.length})]})}))},"swaps.".concat(e.word))}(o.swaps),function(){var s,t=e.word,n=e.word+"2";return(0,r.jsxs)("tr",{className:"displayWordRow",children:[(0,r.jsx)("td",{className:"insertCountSpacer"}),null===(s=e.word)||void 0===s?void 0:s.toUpperCase().split("").map((function(e,s){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("td",{className:o.valid?"letter":"letterInvalidWord",children:e}),(0,r.jsx)("td",{className:"facevalue",children:(0,r.jsx)("sub",{children:x(e)})})]})})),(0,r.jsx)("td",{children:"Y"===e.showAnagrams&&(0,r.jsx)("span",{children:o.anagrams.length>0&&(0,r.jsx)("span",{className:"anagramCount","data-toggle":"tooltip",title:o.anagrams,children:o.anagrams.length})},o.anagrams)},t),(0,r.jsx)("td",{children:"Y"===o.valid?(0,r.jsx)("span",{className:"wordIsValid",children:"Valid word"}):(0,r.jsx)("span",{className:"wordIsNotValid",children:"Not a recognized word"})},n)]},"word.".concat(e.word))}(),"Y"===e.showDrops&&o.drops.length>0&&(s=o.drops,(0,r.jsx)("tr",{className:"dropRow",children:s.map((function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("td",{}),"Y"===e?(0,r.jsx)("td",{className:"dropIndicator","data-toggle":"tooltip",title:"You can drop this letter",children:"\u2022"}):(0,r.jsx)("td",{})]})}))},"drops.".concat(e.word))),(0,r.jsx)("tr",{className:"divider",children:(0,r.jsx)("td",{colSpan:e.word.length+e.word.length+3,children:"\xa0"})})]})}):(0,r.jsx)("p",{children:"Loading ..."})});function x(e){switch(e){case"D":case"G":return 2;case"B":case"C":case"M":case"P":return 3;case"F":case"H":case"V":case"W":case"Y":return 4;case"K":return 5;case"J":case"X":return 8;case"Q":case"Z":return 10}return 1}}},1696:function(e,s,t){"use strict";t.r(s);var n=t(5893),r=t(1385),a=t(7294),l=(t(1664),t(1201));s.default=function(e){var s=e.setWhereto,t=(0,a.useState)(""),i=t[0],c=t[1],o=(0,a.useState)([]),d=o[0],h=o[1];return(0,n.jsxs)("div",{className:"container-fluid",children:[(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col-11 wititle",children:["Word Info",(0,n.jsx)("i",{className:"material-icons",children:"help_outline"})]}),(0,n.jsx)("div",{className:"col-1 wihomelink",children:(0,n.jsx)("button",{className:"w3-button",onClick:function(){s("menu")},children:(0,n.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})})]}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-sm-8",children:(0,n.jsxs)("div",{className:"form-inline",children:[(0,n.jsx)("label",{children:"Word:\xa0"}),(0,n.jsx)("input",{className:"letterInput",name:"word",value:i,onChange:function(e){c(e.target.value)}}),(0,n.jsx)("label",{children:"\xa0"}),(0,n.jsx)("button",{id:"acceptWord",onClick:function(){h([i].concat((0,r.Z)(d))),c("")},children:"Get Word Info"}),(0,n.jsx)("label",{children:"\xa0"}),(0,n.jsx)("button",{id:"acceptAlphagram",onClick:function(){fetch("https://tilerunner.herokuapp.com/ENABLE2K?letters="+i).then((function(e){return e.text()})).then((function(e){var s=JSON.parse(e),t=[];s.anagrams.map((function(e){t=[].concat((0,r.Z)(t),[e])})),s.valid&&t.push(i.toUpperCase()),t.sort(),c(""),h([].concat((0,r.Z)(t),(0,r.Z)(d)))}))},children:"Get Anagrams"}),(0,n.jsx)("label",{children:"\xa0"}),(0,n.jsx)("button",{id:"acceptRegex",onClick:function(){fetch("https://tilerunner.herokuapp.com/ENABLE2K?regex="+i.toLocaleLowerCase()).then((function(e){return e.text()})).then((function(e){var s=JSON.parse(e);c("");var t=[];s.regexmatches.map((function(e){t=[].concat((0,r.Z)(t),[e])})),h([].concat((0,r.Z)(t),(0,r.Z)(d))),s.count>50&&alert("Too many results, only 50 taken")}))},children:"Get Regex Matches"}),(0,n.jsx)("label",{children:"\xa0"}),!1]})}),(0,n.jsx)("div",{className:"col-sm-4"})]}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-sm-8",children:d.map((function(e,s){return""===e?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(l.default,{word:e,showInserts:"Y",showSwaps:"Y",showAnagrams:"Y",showDrops:"Y"},"".concat(d.length-s,".").concat(e))}))}),(0,n.jsx)("div",{className:"col-sm-4"})]})]})}},6522:function(e,s,t){"use strict";t.r(s);var n=t(1385),r=t(5893),a=t(7294),l=(t(1664),t(1201)),i=t(9359);function c(e,s){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,s){if(!e)return;if("string"===typeof e)return o(e,s);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,s)}(e))||s&&e&&"number"===typeof e.length){t&&(e=t);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,i=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return l=e.done,e},e:function(e){i=!0,a=e},f:function(){try{l||null==t.return||t.return()}finally{if(i)throw a}}}}function o(e,s){(null==s||s>e.length)&&(s=e.length);for(var t=0,n=new Array(s);t<s;t++)n[t]=e[t];return n}s.default=function(e){var s=e.setWhereto,t=(0,a.useState)([]),o=t[0],d=t[1],h=(0,a.useState)(0),u=h[0],m=h[1],x=(0,a.useState)(""),j=x[0],p=x[1],w=(0,a.useState)(""),f=w[0],g=w[1],N=(0,a.useState)(""),v=N[0],b=N[1],y=(0,a.useState)([]),W=y[0],k=y[1],S=(0,a.useState)(!1),F=S[0],C=S[1],A=(0,r.jsxs)("table",{className:"Guesstable",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"wmth",children:"Guess"}),(0,r.jsx)("th",{className:"wmth",children:"Correct Letter"}),(0,r.jsx)("th",{className:"wmth",children:"Correct Position"})]})}),(0,r.jsx)("tbody",{children:W.map((function(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"wmtd",children:e}),(0,r.jsx)("td",{className:"wmtd AlignCenter",children:P(e)}),(0,r.jsx)("td",{className:"wmtd AlignCenter",children:L(e)})]})}))})]}),E=(0,r.jsxs)("div",{className:"form-group",children:[0===W.length?(0,r.jsx)("label",{className:"wmlabel",children:"First guess:"}):(0,r.jsx)("label",{className:"wmlabel",children:"Next guess:"}),(0,r.jsx)("input",{className:"form-control",name:"guess",value:v,onChange:function(e){var s=e.target.value.toUpperCase().replace(/\W/g,"");if(s.length===j.length){var t=u+1;m(t),k([s].concat((0,n.Z)(W))),b(""),s===j&&(C(!0),8===j.length&&d([].concat((0,n.Z)(o),[t])))}else b(s)}})]}),I=(0,r.jsxs)("div",{children:[(0,r.jsxs)("h2",{className:"wmh2",children:["Solved in ",W.length," moves!"]}),(0,r.jsx)("button",{className:"wmbutton",onClick:function(){T(),b(""),k([]),C(!1)},children:8===j.length?"Start Another Set!":"Start Next Word"})]});return(0,r.jsx)("div",{className:"Mastermind",children:(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-11 wmtitle",children:["Word Mastermind",(0,r.jsx)("span",{className:"material-icons",children:"psychology"})]}),(0,r.jsx)("div",{className:"col-1 wmhomelink",children:(0,r.jsx)("button",{className:"w3-button",onClick:function(){s("menu")},children:(0,r.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})})]}),(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-11",children:(0,r.jsx)("p",{className:"wmp",children:"Cycle through 2-8 letter words per set."})})}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-lg-8",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-6",children:(0,r.jsxs)("div",{className:"Outertable",children:[(0,r.jsxs)("h3",{className:"wmh3 AlignLeft",children:["Guesses this word: ",W.length]}),(0,r.jsxs)("h3",{className:"wmh3 AlignLeft",children:["Guesses this set: ",u]}),0===o.length?(0,r.jsx)("p",{className:"AlignLeft",children:"No completed sets yet"}):(0,r.jsxs)("p",{className:"AlignLeft",children:["Guesses for completed sets: ",o.map((function(e){return(0,r.jsxs)("span",{children:[e," "]},e.toString())}))]})]})}),(0,r.jsx)("div",{className:"col-lg-6",children:(0,r.jsxs)("div",{className:"Outertable",children:[""===j?T():"",(0,r.jsxs)("h3",{className:"wmh3",children:["Secret Word: ",F?j:f]}),""===j?(0,r.jsx)("h1",{className:"wmh1",children:"Loading ..."}):F?I:E,F?(0,r.jsx)("br",{}):0===W.length?(0,r.jsx)("p",{className:"wmp",children:"Start guessing"}):(0,r.jsx)("p",{className:"wmp",children:"Keep guessing"})]})})]}),(0,r.jsx)(i.I3,{children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-lg-12",children:W.map((function(e,s){return(0,r.jsx)(l.default,{word:e,showInserts:"N",showSwaps:"Y",showAnagrams:"Y",showDrops:"N"},"".concat(W.length-s,".").concat(e))}))})})})]}),(0,r.jsx)("div",{className:"col-lg-4",children:(0,r.jsx)("div",{className:"Outertable",children:0===W.length?(0,r.jsx)("p",{children:"No guesses yet"}):A})})]})]})});function T(){var e=j?j.length<2||j.length>7?2:j.length+1:2;2===e&&0!==u&&m(0);var s="https://tilerunner.herokuapp.com/ENABLE2K?random="+e.toString();fetch(s).then((function(e){return e.text()})).then((function(e){var s=JSON.parse(e).toUpperCase();p(s),g(s.split("").map((function(){return"*"})))}))}function P(e){var s,t=0,n=c("ABCDEFGHIJKLMNOPQRSTUVWXYZ");try{for(n.s();!(s=n.n()).done;){var r=s.value,a=j.split(r).length-1,l=e.split(r).length-1;t+=a<l?a:l}}catch(i){n.e(i)}finally{n.f()}return t}function L(e){for(var s=0,t=0;t<j.length;++t)s+=j[t]===e[t]?1:0;return s}}},8581:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8474)}])}},function(e){e.O(0,[673,78,19,504,774,888,179],(function(){return s=8581,e(e.s=s);var s}));var s=e.O();_N_E=s}]);