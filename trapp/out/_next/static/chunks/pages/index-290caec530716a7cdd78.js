(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(e,t,r){"use strict";var s=r(3848);var n=r(9448)(r(7294)),a=r(1689),i=r(2441),c=r(5749),l={};function o(e,t,r,s){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,r,s).catch((function(e){0}));var n=s&&"undefined"!==typeof s.locale?s.locale:e&&e.locale;l[t+"%"+r+(n?"%"+n:"")]=!0}}},5749:function(e,t,r){"use strict";var s=r(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,l=(0,n.useRef)(),o=(0,n.useState)(!1),d=s(o,2),h=d[0],u=d[1],x=(0,n.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),r||h||e&&e.tagName&&(l.current=function(e,t,r){var s=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var s=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=s.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:n,elements:s}),r}(r),n=s.id,a=s.observer,i=s.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(n))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[r,t,h]);return(0,n.useEffect)((function(){if(!i&&!h){var e=(0,a.requestIdleCallback)((function(){return u(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[h]),[x,h]};var n=r(7294),a=r(8391),i="undefined"!==typeof IntersectionObserver;var c=new Map},8435:function(e,t,r){"use strict";r.r(t);var s=r(1385),n=r(5893),a=r(809),i=r.n(a),c=r(2447),l=r(7294);t.default=function(e){var t=e.setWhereto,r="https://tilerunner.herokuapp.com",a=(0,l.useState)([]),o=a[0],d=a[1],h=(0,l.useState)([]),u=h[0],x=h[1],p=(0,l.useState)(""),f=p[0],m=p[1],j=(0,l.useState)(-1),g=j[0],v=j[1],b=(0,l.useState)([]),y=b[0],N=b[1];(0,l.useEffect)((function(){S()}),[]);var S=function(){var e=(0,c.Z)(i().mark((function e(){var t,s,n,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(r,"/ENABLE2K?prepickfry=true&guarantee=6"),e.next=3,fetch(t);case 3:return s=e.sent,e.next=6,s.json();case 6:n=e.sent,a=n.fryLetters.join(""),c=Array.from(a.toUpperCase()),d(c),x(c.slice(0,3));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function w(){return W.apply(this,arguments)}function W(){return(W=(0,c.Z)(i().mark((function e(){var t,s,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(r,"/ENABLE2K?exists=").concat(f.toLowerCase()),e.next=3,fetch(t);case 3:return s=e.sent,e.next=6,s.json();case 6:return n=e.sent,e.abrupt("return",n.exists);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return P.apply(this,arguments)}function P(){return(P=(0,c.Z)(i().mark((function e(){var t,s,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(r,"/ENABLE2K?topfry=true&letters=").concat(u.join(""),"&count=1"),e.next=3,fetch(t);case 3:return s=e.sent,e.next=6,s.json();case 6:return n=e.sent,e.abrupt("return",n.answers&&n.answers.length>0?n.answers[0]:"");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(){var e=(0,c.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return t=e.sent,r={pass:!1,word:f,valid:t},e.next=6,T(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=(0,c.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={pass:!0},e.next=3,T(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function T(e){return B.apply(this,arguments)}function B(){return(B=(0,c.Z)(i().mark((function e(t){var r,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:for(r=e.sent,t.fryLetters=u,t.chefsPick=r,(n=(0,s.Z)(y)).push(t);n.length>15;)n.splice(0,1);if(N(n),u.length!==o.length){e.next=15;break}return e.next=12,S();case 12:m(""),e.next=17;break;case 15:a=o.slice(0,u.length+1),x(a);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,n.jsxs)("div",{className:"trBackground",children:[(0,n.jsxs)("div",{className:"trTitle",children:["Fry Your Brain Solo",(0,n.jsx)("button",{className:"trButton",onClick:function(){t("menu")},children:(0,n.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),y.length>=0&&(0,n.jsx)("div",{children:(0,n.jsxs)("table",{className:"trTable",border:"1",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Fry Letters"}),(0,n.jsx)("th",{children:"Play Made"}),(0,n.jsx)("th",{children:"Result"}),(0,n.jsx)("th",{children:"Chefs Pick"})]})}),(0,n.jsx)("tbody",{children:y.map((function(e,t){return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.fryLetters}),(0,n.jsxs)("td",{children:[e.pass&&(0,n.jsx)("span",{className:"trDanger",children:"PASS"}),!e.pass&&(0,n.jsx)(n.Fragment,{children:e.word})]}),(0,n.jsxs)("td",{children:[!e.pass&&e.valid&&(0,n.jsx)(n.Fragment,{children:"Valid"}),!e.pass&&!e.valid&&(0,n.jsx)("span",{className:"trDanger",children:"Phoney"})]}),(0,n.jsx)("td",{children:e.chefsPick})]},"solomove".concat(t))}))})]})}),u.length>0&&(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"trParagraph",children:["Fry Letters:",(0,n.jsx)("button",{className:"trButton fryLetterActionButton",onClick:function(){for(var e=u.length,t=(0,s.Z)(u),r=[];r.length<e;){var n=Math.floor(Math.random()*t.length);r.push(t[n]),t.splice(n,1)}x(r),v(-1)},children:(0,n.jsx)("i",{className:"material-icons fryLetterActionButtonIcon",children:"cached"})}),(0,n.jsx)("button",{className:"trButton fryLetterActionButton",onClick:function(){var e=(0,s.Z)(u);e.sort(),x(e),v(-1)},children:(0,n.jsx)("i",{className:"material-icons fryLetterActionButtonIcon",children:"sort_by_alpha"})})]}),(0,n.jsx)("div",{className:"fryLetterDiv",children:u.map((function(e,t){return(0,n.jsx)("span",{className:t===g?"fybFryLetter Selected":"fybFryLetter",onDoubleClick:function(){var e=u[t],r=(0,s.Z)(u);r.splice(t,1),r.push(e),x((0,s.Z)(r)),v(-1)},onClick:function(){if(-1===g)v(t);else if(t===g)v(-1);else{for(var e=[],r=u[g],s=0;s<u.length;s++){var n=u[s];s===t&&e.push(r),s!==g&&e.push(n)}x(e),v(-1)}},children:e},"SoloFryLetter".concat(t))}))}),(0,n.jsxs)("div",{onKeyDownCapture:function(e){if("Enter"===e.key)return e.preventDefault(),void F()},children:[(0,n.jsx)("div",{className:"trEmphasis",children:"Enter Word:"}),(0,n.jsx)("input",{type:"text",autoComplete:"off",spellCheck:"false",name:"word",value:f,onChange:function(e){m(e.target.value)}}),(0,n.jsxs)("div",{children:[f.toUpperCase().trim().match("^[a-zA-Z]*$")&&(0,n.jsx)("button",{className:"trButton",onClick:function(){F()},children:"SUBMIT"},"submitWord"),(0,n.jsx)("button",{className:"trButton",onClick:function(){C()},children:"PASS"},"passButton")]})]})]})]})}},8474:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var s=r(5893),n=r(9359),a=r(7294),i=r(6522),c=r(1696),l=r(3019),o=r(4891),d=r(8435),h=r(5078);function u(){var e=(0,a.useState)("menu"),t=e[0],r=e[1];return(0,s.jsxs)("div",{children:["menu"===t&&(0,s.jsx)(x,{setWhereto:r}),"wm"===t&&(0,s.jsx)(i.default,{setWhereto:r}),"wi"===t&&(0,s.jsx)(c.default,{setWhereto:r}),"pb"===t&&(0,s.jsx)(l.default,{setWhereto:r}),"fyb"===t&&(0,s.jsx)(o.default,{setWhereto:r}),"fybsolo"===t&&(0,s.jsx)(d.default,{setWhereto:r}),"sc"===t&&(0,s.jsx)(h.default,{setWhereto:r})]})}var x=function(e){var t=(0,a.useState)(!1),r=t[0],i=t[1],c=(0,a.useState)(!1),l=c[0],o=c[1],d=(0,a.useState)(!1),h=d[0],u=d[1],x=(0,a.useState)(!1),p=x[0],f=x[1],m=(0,a.useState)(!1),j=m[0],g=m[1],v=(0,a.useState)(!1),b=v[0],y=v[1],N=(0,a.useState)(!1),S=N[0],w=N[1],W=(0,a.useState)(!1),k=W[0],P=W[1],F=function(e){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("button",{className:"trButton",onClick:function(){e.setWhereto(e.targetWhereto)},children:e.optionText})}),(0,s.jsx)("td",{children:(0,s.jsx)("button",{id:"toggleDescribeFlag",className:"trButton",onClick:function(){e.setDescFlag(!e.descFlag)},children:e.descFlag?"Hide info":"Show info"})})]})},C=(0,s.jsxs)("div",{className:"trParagraph",children:[(0,s.jsx)("div",{className:"trSubtitle",children:"Word Mastermind is a single player code cracking game."}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"The computer picks a random word."}),(0,s.jsx)("li",{children:"You enter guesses until you guess correctly."}),(0,s.jsx)("li",{children:"The computer tells you how many letters are correct and how many are in the correct position."}),(0,s.jsx)("li",{children:"The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."}),(0,s.jsx)(n.I3,{children:(0,s.jsx)("li",{children:"The computer shows you word info for guessed words."})})]})]}),T=(0,s.jsxs)("div",{className:"trParagraph",children:[(0,s.jsx)("div",{className:"trSubtitle",children:"Word Info is a utility to get information on words."}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Anagrams - words that use the exact same letters."}),(0,s.jsx)("li",{children:"Inserts - words that can be made by inserting a single letter."}),(0,s.jsx)("li",{children:"Drops - words that can be made by dropping a single letter."}),(0,s.jsx)("li",{children:"Swaps - words that can be made by swapping a single letter."})]})]}),B=(0,s.jsxs)("div",{className:"trParagraph",children:[(0,s.jsx)("div",{className:"trSubtitle",children:"Prison Break is a two player crossword style game."}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."}),(0,s.jsx)("li",{children:"Prisoners always play first."}),(0,s.jsx)("li",{children:"The first word played must touch the centre square."}),(0,s.jsxs)("li",{children:["To free a prisoner, the Prisoners must play a tile on one of the special ",(0,s.jsx)("span",{className:"material-icons pbSquareEscapeHatch",children:"run_circle"})," squares."]}),(0,s.jsxs)("li",{children:["When a ",(0,s.jsx)("span",{className:"pbSquareUsedByGuards",children:"\xa0?\xa0"})," is played it represents any letter and does not have to remain as the same letter throughout the game."]}),(0,s.jsxs)("li",{children:["The ",(0,s.jsx)("span",{className:"pbSquareUsedByGuards u",children:"Q"}),' tile can represent "Q" or "QU", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game.']}),(0,s.jsx)("li",{children:"The game ends if a player empties their rack."}),(0,s.jsxs)("li",{children:["The game ends if all the special ",(0,s.jsx)("span",{className:"material-icons pbSquareEscapeHatch",children:"run_circle"})," squares are used."]}),(0,s.jsx)("li",{children:"The game ends if both players pass."})]})]}),L=(0,s.jsxs)("div",{className:"trParagraph",children:[(0,s.jsx)("div",{className:"trSubtitle",children:"Fry Your Brain is a word game that can be contested by two to six players."}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"A tile pool is provided, starting with 3 letters. Players take turns."}),(0,s.jsx)("li",{children:"When it is your turn, make a word that has all the letters in the tile pool, plus any amount of additional letters."}),(0,s.jsx)("li",{children:"You cannot reuse a word from the same round."}),(0,s.jsx)("li",{children:"You cannot merely add an S to a valid word from the same round, unless that word ends in S."}),(0,s.jsx)("li",{children:"When a player fails to make a valid word on their turn, the other players take part in the free-for-all."}),(0,s.jsx)("li",{children:"In the free-for-all, the goal is to submit the shortest answer you can. All players with the shortest of the answers get points."}),(0,s.jsx)("li",{children:"The points given equals the number of letters in the tile pool the last time someone gave a valid answer for that round."}),(0,s.jsx)("li",{children:"Rounds continue until someone reaches the target number of points for the game."})]})]}),O=(0,s.jsxs)("div",{className:"trParagraph",children:[(0,s.jsx)("div",{className:"trSubtitle",children:"Fry Your Brain Solo is a practise ground for Fry Your Brain"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"A new tile pool is started with 3 letters."}),(0,s.jsx)("li",{children:"Make a word that has all the letters in the tile pool, plus any additional letters, or pass."}),(0,s.jsx)("li",{children:"A letter will be added to the pool after each word or pass, or a new tile pool will be started."}),(0,s.jsx)("li",{children:"The display will indicate whether each made word is valid or not."}),(0,s.jsx)("li",{children:"The display will show the shortest answer, using alphabetical order as the tiebreak."}),(0,s.jsx)("li",{children:"Unlike regular Fry Your Brain, you may reuse a word or simply add or remove an S at the end."})]})]}),A=(0,s.jsx)("div",{className:"trParagraph",children:(0,s.jsx)("div",{className:"trSubtitle",children:"The Scrabble Club page is Scrabble Club stuff"})}),I=function(e){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e.ackText}),(0,s.jsx)("td",{children:(0,s.jsx)("button",{className:"trButton",onClick:function(){e.setDescFlag(!e.descFlag)},children:e.descFlag?"Hide info":"Show info"})})]})},E=(0,s.jsx)("div",{className:"trParagraph trEmphasis",children:(0,s.jsx)("p",{children:"This site uses the Enhanced North American Benchmark LEexicon, millenial edition, a public domain word list that I gratefully acknowledge."})}),D=(0,s.jsxs)("div",{className:"trParagraph trEmphasis",children:[(0,s.jsx)("p",{children:"Danielle, Emese, Cesar, Lennon, Bev, Noah, Rach, Sarah, Rod, Sonya, Nolan, Shyrai, Agnes, Jessica, Cheryl, ..."}),(0,s.jsxs)("p",{children:["Thanks for technical help, feedback, suggestions, or simply having fun here. ",(0,s.jsx)("i",{className:"material-icons heart",children:"favorite"})]})]}),_=function(){return(0,s.jsxs)("div",{className:"trParagraph",children:["Hamilton to Cambridge Rail Trail:",(0,s.jsx)("a",{href:"https://1drv.ms/u/s!AoRKcQVZC5rH4XIvB_r0uq414KU2?e=aSSkK1",target:"_blank",children:" Km Marker Videos"})]})};return(0,s.jsxs)("div",{className:"trBackground",children:[(0,s.jsx)("div",{className:"trParagraph",children:(0,s.jsx)("div",{className:"trTitle",children:"Tile Stuff"})}),(0,s.jsxs)("div",{className:"trParagraph",children:[(0,s.jsx)(n.I3,{children:(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)(F,{descFlag:r,setDescFlag:i,setWhereto:e.setWhereto,targetWhereto:"wm",optionText:"Word Mastermind"}),(0,s.jsx)(F,{descFlag:l,setDescFlag:o,setWhereto:e.setWhereto,targetWhereto:"wi",optionText:"Word Info"}),(0,s.jsx)(F,{descFlag:h,setDescFlag:u,setWhereto:e.setWhereto,targetWhereto:"pb",optionText:"Prison Break"}),(0,s.jsx)(F,{descFlag:p,setDescFlag:f,setWhereto:e.setWhereto,targetWhereto:"fyb",optionText:"Fry Your Brain"}),(0,s.jsx)(F,{descFlag:j,setDescFlag:g,setWhereto:e.setWhereto,targetWhereto:"fybsolo",optionText:"FYB Solo Mode"}),(0,s.jsx)(F,{descFlag:b,setDescFlag:y,setWhereto:e.setWhereto,targetWhereto:"sc",optionText:"Scrabble Club"})]})})}),(0,s.jsx)(n.A_,{children:(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)(F,{descFlag:r,setDescFlag:i,setWhereto:e.setWhereto,targetWhereto:"wm",optionText:"Word Mastermind"}),(0,s.jsx)(F,{descFlag:l,setDescFlag:o,setWhereto:e.setWhereto,targetWhereto:"wi",optionText:"Word Info"}),(0,s.jsx)(F,{descFlag:p,setDescFlag:f,setWhereto:e.setWhereto,targetWhereto:"fyb",optionText:"Fry Your Brain"}),(0,s.jsx)(F,{descFlag:j,setDescFlag:g,setWhereto:e.setWhereto,targetWhereto:"fybsolo",optionText:"FYB Solo Mode"})]})})}),r&&C,l&&T,h&&B,p&&L,j&&O,b&&A]}),(0,s.jsxs)("div",{className:"trParagraph",children:[(0,s.jsx)("div",{className:"trTitle",children:"Runner Stuff"}),(0,s.jsx)(_,{})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"trTitle",children:"Special Thanks"}),(0,s.jsxs)("div",{className:"trParagraph",children:[(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)(I,{ackText:"ENABLE2K",descFlag:S,setDescFlag:w}),(0,s.jsx)(I,{ackText:"Friends",descFlag:k,setDescFlag:P})]})}),S&&E,k&&D]})]})]})}},7902:function(e,t,r){"use strict";r.r(t);var s=r(5893),n=r(7294);t.default=function(e){var t=e.clubs,r=void 0===t?[]:t,a=e.getClubNights,i=(0,n.useState)("No club selection made."),c=i[0],l=i[1];return(0,s.jsxs)("div",{className:"trBackground",children:[(0,s.jsx)("div",{className:"trSubtitle",children:"Club List"}),c&&(0,s.jsx)("div",{className:"trEmphasis",children:c}),(0,s.jsxs)("table",{className:"trTable",border:"1",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Club Name"}),(0,s.jsx)("th",{children:"Location"}),(0,s.jsx)("th",{children:"Action"})]})}),(0,s.jsx)("tbody",{children:r.map((function(e){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e.Name}),(0,s.jsx)("td",{children:e.Location}),(0,s.jsx)("td",{children:(0,s.jsx)("button",{className:"trButton",onClick:function(){a(e.Id),l("Selected ".concat(e.Name," club nights."))},children:"CLUB NIGHTS"})})]},"club".concat(e.Id))}))})]})]})}},1622:function(e,t,r){"use strict";r.r(t);var s=r(5893);t.default=function(e){var t=e.clubGames,r=void 0===t?[]:t,n=e.clubDate,a=void 0===n?"":n;return(0,s.jsxs)("div",{className:"trBackground",children:[(0,s.jsxs)("div",{className:"trSubtitle",children:["Club Games: ",a]}),(0,s.jsx)("div",{style:{height:"800px",width:"fit-content"},children:(0,s.jsxs)("div",{style:{height:"100%",overflowY:"auto"},children:[(0,s.jsxs)("table",{className:"trTable",border:"1",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Round"}),(0,s.jsx)("th",{children:"Player"}),(0,s.jsx)("th",{children:"Opponent"}),(0,s.jsx)("th",{children:"For"}),(0,s.jsx)("th",{children:"Against"}),(0,s.jsx)("th",{children:"Spread"})]})}),(0,s.jsx)("tbody",{children:r.map((function(e){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e.Round}),(0,s.jsxs)("td",{children:[e.PlayerName,(0,s.jsxs)("span",{style:{float:"right",fontFamily:"monospace"},children:["\xa0",e.PlayerScore>e.OpponentScore?"(W)":e.PlayerScore<e.OpponentScore?"(L)":"(T)"]})]}),(0,s.jsxs)("td",{children:[e.OpponentName,(0,s.jsxs)("span",{style:{float:"right",fontFamily:"monospace"},children:["\xa0",e.PlayerScore<e.OpponentScore?"(W)":e.PlayerScore>e.OpponentScore?"(L)":"(T)"]})]}),(0,s.jsx)("td",{className:"equispaced textright",children:e.PlayerScore}),(0,s.jsx)("td",{className:"equispaced textright",children:e.OpponentScore}),(0,s.jsx)("td",{className:"equispaced textright",children:Math.abs(e.PlayerScore-e.OpponentScore)})]},"game".concat(e.Id))}))})]}),(0,s.jsx)("div",{className:"trSubtitle",children:"Player Totals:"}),(0,s.jsxs)("table",{className:"trTable",border:"1",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Rank"}),(0,s.jsx)("th",{children:"Player"}),(0,s.jsx)("th",{children:"Wins"}),(0,s.jsx)("th",{children:"Spread"}),(0,s.jsx)("th",{children:"Losses"}),(0,s.jsx)("th",{children:"For"}),(0,s.jsx)("th",{children:"Against"})]})}),(0,s.jsx)("tbody",{children:function(){for(var e=[],t=0;t<r.length;t++){for(var s=r[t],n=!1,a=!1,i=0;i<e.length;i++){var c=e[i];c.Name===s.PlayerName&&(n=!0,c.For=c.For+s.PlayerScore,c.Against=c.Against+s.OpponentScore,s.PlayerScore>s.OpponentScore&&(c.Wins=c.Wins+1),s.PlayerScore<s.OpponentScore&&(c.Losses=c.Losses+1),s.PlayerScore===s.OpponentScore&&(c.Wins=c.Wins+.5,c.Losses=c.Losses+.5)),c.Name===s.OpponentName&&(a=!0,c.Against=c.Against+s.PlayerScore,c.For=c.For+s.OpponentScore,s.PlayerScore<s.OpponentScore&&(c.Wins=c.Wins+1),s.PlayerScore>s.OpponentScore&&(c.Losses=c.Losses+1),s.PlayerScore===s.OpponentScore&&(c.Wins=c.Wins+.5,c.Losses=c.Losses+.5))}if(!n){var l={Name:s.PlayerName,For:s.PlayerScore,Against:s.OpponentScore,Wins:s.PlayerScore>s.OpponentScore?1:s.PlayerScore<s.OpponentScore?0:.5,Losses:s.PlayerScore<s.OpponentScore?1:s.PlayerScore>s.OpponentScore?0:.5};e.push(l)}if(!a){var o={Name:s.OpponentName,For:s.OpponentScore,Against:s.PlayerScore,Wins:s.PlayerScore<s.OpponentScore?1:s.PlayerScore>s.OpponentScore?0:.5,Losses:s.PlayerScore>s.OpponentScore?1:s.PlayerScore<s.OpponentScore?0:.5};e.push(o)}}return e.sort((function(e,t){return e.Wins>t.Wins?-1:e.Wins===t.Wins?t.For-t.Against-e.For+e.Against:e.Losses-t.Losses})),e}().map((function(e,t){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"equispaced textright",children:t+1}),(0,s.jsx)("td",{children:e.Name}),(0,s.jsx)("td",{className:"textcenter",children:e.Wins}),(0,s.jsx)("td",{className:"equispaced textright",children:e.For-e.Against}),(0,s.jsx)("td",{className:"textcenter",children:e.Losses}),(0,s.jsx)("td",{className:"equispaced textright",children:e.For}),(0,s.jsx)("td",{className:"equispaced textright",children:e.Against})]},"total.".concat(e.Name))}))})]})]})})]})}},2674:function(e,t,r){"use strict";r.r(t);var s=r(5893),n=r(7294);t.default=function(e){var t=e.clubNights,r=void 0===t?[]:t,a=e.clubName,i=void 0===a?"":a,c=e.getClubGames,l=(0,n.useState)("No club night selected."),o=l[0],d=l[1];return(0,s.jsxs)("div",{className:"trBackground",children:[(0,s.jsxs)("div",{className:"trSubtitle",children:["Club Nights: ",i]}),o&&(0,s.jsx)("div",{className:"trEmphasis",children:o}),(0,s.jsx)("div",{style:{height:"780px",width:"fit-content"},children:(0,s.jsx)("div",{style:{height:"100%",overflowY:"auto"},children:(0,s.jsxs)("table",{className:"trTable",border:"1",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Date"}),(0,s.jsx)("th",{children:"#Players"}),(0,s.jsx)("th",{children:"Winner"}),(0,s.jsx)("th",{children:"Wins"}),(0,s.jsx)("th",{children:"Spread"}),(0,s.jsx)("th",{children:"Action"})]})}),(0,s.jsx)("tbody",{children:r.map((function(e){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e.Date}),(0,s.jsx)("td",{children:e.numPlayers}),(0,s.jsx)("td",{children:e.numPlayers>0&&(0,s.jsx)(s.Fragment,{children:e.winner.Name})}),(0,s.jsx)("td",{children:e.numPlayers>0&&(0,s.jsx)(s.Fragment,{children:e.winner.wins})}),(0,s.jsx)("td",{children:e.numPlayers>0&&(0,s.jsx)(s.Fragment,{children:e.winner.spread})}),(0,s.jsx)("td",{children:(0,s.jsx)("button",{className:"trButton",onClick:function(){c(e.Id),d("Selected ".concat(e.Date," club games."))},children:"CLUB GAMES"})})]},"night".concat(e.Id))}))})]})})})]})}},5078:function(e,t,r){"use strict";r.r(t);var s=r(5893),n=r(7294),a=r(7902),i=r(2674),c=r(1622);t.default=function(e){var t=e.setWhereto,r="https://tilerunner.herokuapp.com/clubdata/",l=(0,n.useState)([]),o=l[0],d=l[1],h=(0,n.useState)([]),u=h[0],x=h[1],p=(0,n.useState)([]),f=p[0],m=p[1],j=(0,n.useState)([]),g=j[0],v=j[1],b=(0,n.useState)(-1),y=b[0],N=b[1],S=(0,n.useState)("No club selected"),w=S[0],W=S[1],k=(0,n.useState)(-1),P=k[0],F=k[1],C=(0,n.useState)("No club night selected"),T=C[0],B=C[1],L=function(e){if(P!==e){if(e<0)return v([]),B("No club night selected."),void F(e);for(var t=function(t){var s=f[t];if(s.Id===e)return fetch("".concat(r,"clubgamelist/?clubnightid=").concat(e)).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);t.sort((function(e,t){return e.Round-t.Round}));for(var r=0;r<t.length;r++)for(var n=t[r],a=0;a<u.length;a++){var i=u[a];n.PlayerId===i.Id&&(n.PlayerName=i.Name),n.OpponentId===i.Id&&(n.OpponentName=i.Name)}v(t),B(s.Date),F(s.Id)})),{v:void 0}},s=0;s<f.length;s++){var n=t(s);if("object"===typeof n)return n.v}}};return(0,n.useEffect)((function(){fetch(r+"clublist").then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);t.sort((function(e,t){return e.Name.toLowerCase()>t.Name.toLowerCase()?1:-1})),d(t)})),fetch(r+"playerlist").then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);t.sort((function(e,t){return e.Name.toLowerCase()>t.Name.toLowerCase()?1:-1})),x(t)}))}),[]),(0,s.jsxs)("div",{className:"trBackground",children:[(0,s.jsxs)("div",{className:"trTitle",children:["Scrabble Club Data",(0,s.jsx)("button",{className:"trButton",onClick:function(){t("menu")},children:(0,s.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),(0,s.jsx)("div",{className:"container-fluid",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-4",children:(0,s.jsx)(a.default,{clubs:o,getClubNights:function(e){if(y!==e)for(var t=function(t){var s=o[t];if(s.Id===e)return fetch("".concat(r,"clubnightlist/?clubid=").concat(e)).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);t.sort((function(e,t){return e.Date>t.Date?-1:1})),m(t),W(s.Name),N(s.Id),L(-1)})),{v:void 0}},s=0;s<o.length;s++){var n=t(s);if("object"===typeof n)return n.v}}})}),(0,s.jsx)("div",{className:"col-4",children:(0,s.jsx)(i.default,{clubNights:f,clubName:w,getClubGames:L})}),(0,s.jsx)("div",{className:"col-4",children:(0,s.jsx)(c.default,{clubGames:g,clubDate:T})})]})})]})}},1696:function(e,t,r){"use strict";r.r(t);var s=r(5893),n=r(1385),a=r(7294),i=r(1201);t.default=function(e){var t=e.setWhereto,r=(0,a.useState)(""),c=r[0],l=r[1],o=(0,a.useState)([]),d=o[0],h=o[1];function u(e){var t=JSON.parse(JSON.stringify(d));t.splice(e,1),h(t)}return(0,s.jsxs)("div",{className:"trBackground",children:[(0,s.jsxs)("div",{className:"trTitle",children:["Word Info",(0,s.jsx)("button",{className:"trButton",onClick:function(){t("menu")},children:(0,s.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),(0,s.jsxs)("div",{className:"trParagraph",children:[(0,s.jsx)("label",{children:"Word:\xa0"}),(0,s.jsx)("input",{name:"word",value:c,onChange:function(e){l(e.target.value)}}),(0,s.jsx)("label",{children:"\xa0"}),(0,s.jsx)("button",{id:"acceptWord",className:"trButton",onClick:function(){h([c].concat((0,n.Z)(d))),l("")},children:"Get Word Info"}),(0,s.jsx)("label",{children:"\xa0"}),(0,s.jsx)("button",{id:"acceptAlphagram",className:"trButton",onClick:function(){fetch("https://tilerunner.herokuapp.com/ENABLE2K?letters="+c).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e),r=[];t.anagrams.map((function(e){r=[].concat((0,n.Z)(r),[e])})),t.valid&&r.push(c.toUpperCase()),r.sort(),l(""),h([].concat((0,n.Z)(r),(0,n.Z)(d)))}))},children:"Get Anagrams"}),(0,s.jsx)("label",{children:"\xa0"}),(0,s.jsx)("button",{id:"acceptRegex",className:"trButton",onClick:function(){fetch("https://tilerunner.herokuapp.com/ENABLE2K?regex="+c.toLocaleLowerCase()).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);l("");var r=[];t.regexmatches.map((function(e){r=[].concat((0,n.Z)(r),[e])})),h([].concat((0,n.Z)(r),(0,n.Z)(d))),t.count>50&&alert("Too many results, only 50 taken")}))},children:"Get Regex Matches"}),(0,s.jsx)("label",{children:"\xa0"}),!1]}),d.map((function(e,t){return""===e?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(i.default,{word:e,showInserts:"Y",showSwaps:"Y",showAnagrams:"Y",showDrops:"Y",removeEntry:u,entryIndex:t},"".concat(d.length-t,".").concat(e))}))]})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8474)}])},1664:function(e,t,r){r(6071)}},function(e){e.O(0,[612,983,863,19,522,504,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);