(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(e,t,s){"use strict";var r=s(3848);var n=s(9448)(s(7294)),a=s(1689),i=s(2441),c=s(5749),l={};function o(e,t,s,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,s,r).catch((function(e){0}));var n=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+s+(n?"%"+n:"")]=!0}}},5749:function(e,t,s){"use strict";var r=s(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,s=e.disabled||!i,l=(0,n.useRef)(),o=(0,n.useState)(!1),d=r(o,2),h=d[0],u=d[1],x=(0,n.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),s||h||e&&e.tagName&&(l.current=function(e,t,s){var r=function(e){var t=e.rootMargin||"",s=c.get(t);if(s)return s;var r=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),s=e.isIntersecting||e.intersectionRatio>0;t&&s&&t(s)}))}),e);return c.set(t,s={id:t,observer:n,elements:r}),s}(s),n=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(n))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[s,t,h]);return(0,n.useEffect)((function(){if(!i&&!h){var e=(0,a.requestIdleCallback)((function(){return u(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[h]),[x,h]};var n=s(7294),a=s(8391),i="undefined"!==typeof IntersectionObserver;var c=new Map},8474:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var r=s(5893),n=s(9359),a=s(7294),i=s(6522),c=s(1696),l=s(3019),o=s(4891),d=s(5078);function h(){var e=(0,a.useState)("menu"),t=e[0],s=e[1];return(0,r.jsxs)("div",{children:["menu"===t&&(0,r.jsx)(u,{setWhereto:s}),"wm"===t&&(0,r.jsx)(i.default,{setWhereto:s}),"wi"===t&&(0,r.jsx)(c.default,{setWhereto:s}),"pb"===t&&(0,r.jsx)(l.default,{setWhereto:s}),"fyb"===t&&(0,r.jsx)(o.default,{setWhereto:s}),"sc"===t&&(0,r.jsx)(d.default,{setWhereto:s})]})}var u=function(e){var t=(0,a.useState)(!1),s=t[0],i=t[1],c=(0,a.useState)(!1),l=c[0],o=c[1],d=(0,a.useState)(!1),h=d[0],u=d[1],x=(0,a.useState)(!1),p=x[0],m=x[1],j=(0,a.useState)(!1),f=j[0],g=j[1],v=(0,a.useState)(!1),b=v[0],N=v[1],S=(0,a.useState)(!1),y=S[0],w=S[1],W=function(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("button",{className:"trButton",onClick:function(){e.setWhereto(e.targetWhereto)},children:e.optionText})}),(0,r.jsx)("td",{children:(0,r.jsx)("button",{id:"toggleDescribeFlag",className:"trButton",onClick:function(){e.setDescFlag(!e.descFlag)},children:e.descFlag?"Hide info":"Show info"})})]})},P=(0,r.jsxs)("div",{className:"trParagraph",children:[(0,r.jsx)("div",{className:"trSubtitle",children:"Word Mastermind is a single player code cracking game."}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"The computer picks a random word."}),(0,r.jsx)("li",{children:"You enter guesses until you guess correctly."}),(0,r.jsx)("li",{children:"The computer tells you how many letters are correct and how many are in the correct position."}),(0,r.jsx)("li",{children:"The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."}),(0,r.jsx)(n.I3,{children:(0,r.jsx)("li",{children:"The computer shows you word info for guessed words."})})]})]}),k=(0,r.jsxs)("div",{className:"trParagraph",children:[(0,r.jsx)("div",{className:"trSubtitle",children:"Word Info is a utility to get information on words."}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Anagrams - words that use the exact same letters."}),(0,r.jsx)("li",{children:"Inserts - words that can be made by inserting a single letter."}),(0,r.jsx)("li",{children:"Drops - words that can be made by dropping a single letter."}),(0,r.jsx)("li",{children:"Swaps - words that can be made by swapping a single letter."})]})]}),F=(0,r.jsxs)("div",{className:"trParagraph",children:[(0,r.jsx)("div",{className:"trSubtitle",children:"Prison Break is a two player crossword style game."}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."}),(0,r.jsx)("li",{children:"Prisoners always play first."}),(0,r.jsx)("li",{children:"The first word played must touch the centre square."}),(0,r.jsxs)("li",{children:["To free a prisoner, the Prisoners must play a tile on one of the special ",(0,r.jsx)("span",{className:"material-icons pbSquareEscapeHatch",children:"run_circle"})," squares."]}),(0,r.jsxs)("li",{children:["When a ",(0,r.jsx)("span",{className:"pbSquareUsedByGuards",children:"\xa0?\xa0"})," is played it represents any letter and does not have to remain as the same letter throughout the game."]}),(0,r.jsxs)("li",{children:["The ",(0,r.jsx)("span",{className:"pbSquareUsedByGuards u",children:"Q"}),' tile can represent "Q" or "QU", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game.']}),(0,r.jsx)("li",{children:"The game ends if a player empties their rack."}),(0,r.jsxs)("li",{children:["The game ends if all the special ",(0,r.jsx)("span",{className:"material-icons pbSquareEscapeHatch",children:"run_circle"})," squares are used."]}),(0,r.jsx)("li",{children:"The game ends if both players pass."})]})]}),T=(0,r.jsxs)("div",{className:"trParagraph",children:[(0,r.jsx)("div",{className:"trSubtitle",children:"Fry Your Brain is a word game that can be contested by two to six players."}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"A tile pool is provided, starting with 3 letters. Players take turns."}),(0,r.jsx)("li",{children:"When it is your turn, make a word that has all the letters in the tile pool, plus any amount of additional letters."}),(0,r.jsx)("li",{children:"You cannot reuse a word from the same round."}),(0,r.jsx)("li",{children:"You cannot merely add an S to a valid word from the same round, unless that word ends in S."}),(0,r.jsx)("li",{children:"When a player fails to make a valid word on their turn, the other players take part in the free-for-all."}),(0,r.jsx)("li",{children:"In the free-for-all, the goal is to submit the shortest answer you can. All players with the shortest of the answers get points."}),(0,r.jsx)("li",{children:"The points given equals the number of letters in the tile pool the last time someone gave a valid answer for that round."}),(0,r.jsx)("li",{children:"Rounds continue until someone reaches the target number of points for the game."})]})]}),O=(0,r.jsx)("div",{className:"trParagraph",children:(0,r.jsx)("div",{className:"trSubtitle",children:"The Scrabble Club page is Scrabble Club stuff"})}),C=function(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.ackText}),(0,r.jsx)("td",{children:(0,r.jsx)("button",{className:"trButton",onClick:function(){e.setDescFlag(!e.descFlag)},children:e.descFlag?"Hide info":"Show info"})})]})},L=(0,r.jsx)("div",{className:"trParagraph trEmphasis",children:(0,r.jsx)("p",{children:"This site uses the Enhanced North American Benchmark LEexicon, millenial edition, a public domain word list that I gratefully acknowledge."})}),I=(0,r.jsxs)("div",{className:"trParagraph trEmphasis",children:[(0,r.jsx)("p",{children:"Danielle, Emese, Cesar, Lennon, Bev, Noah, Rach, Sarah, Rod, Sonya, Nolan, Shyrai, Agnes, ..."}),(0,r.jsxs)("p",{children:["Thanks for technical help, feedback, suggestions, or simply having fun here. ",(0,r.jsx)("i",{className:"material-icons heart",children:"favorite"})]})]}),B=function(){return(0,r.jsxs)("div",{className:"trParagraph",children:["Hamilton to Cambridge Rail Trail:",(0,r.jsx)("a",{href:"https://1drv.ms/u/s!AoRKcQVZC5rH4XIvB_r0uq414KU2?e=aSSkK1",target:"_blank",children:" Km Marker Videos"})]})};return(0,r.jsxs)("div",{className:"trBackground",children:[(0,r.jsx)("div",{className:"trParagraph",children:(0,r.jsx)("div",{className:"trTitle",children:"Tile Stuff"})}),(0,r.jsxs)("div",{className:"trParagraph",children:[(0,r.jsx)(n.I3,{children:(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)(W,{descFlag:s,setDescFlag:i,setWhereto:e.setWhereto,targetWhereto:"wm",optionText:"Word Mastermind"}),(0,r.jsx)(W,{descFlag:l,setDescFlag:o,setWhereto:e.setWhereto,targetWhereto:"wi",optionText:"Word Info"}),(0,r.jsx)(W,{descFlag:h,setDescFlag:u,setWhereto:e.setWhereto,targetWhereto:"pb",optionText:"Prison Break"}),(0,r.jsx)(W,{descFlag:p,setDescFlag:m,setWhereto:e.setWhereto,targetWhereto:"fyb",optionText:"Fry Your Brain"}),(0,r.jsx)(W,{descFlag:f,setDescFlag:g,setWhereto:e.setWhereto,targetWhereto:"sc",optionText:"Scrabble Club"})]})})}),(0,r.jsx)(n.A_,{children:(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)(W,{descFlag:s,setDescFlag:i,setWhereto:e.setWhereto,targetWhereto:"wm",optionText:"Word Mastermind"}),(0,r.jsx)(W,{descFlag:l,setDescFlag:o,setWhereto:e.setWhereto,targetWhereto:"wi",optionText:"Word Info"}),(0,r.jsx)(W,{descFlag:p,setDescFlag:m,setWhereto:e.setWhereto,targetWhereto:"fyb",optionText:"Fry Your Brain"})]})})}),s&&P,l&&k,h&&F,p&&T,f&&O]}),(0,r.jsxs)("div",{className:"trParagraph",children:[(0,r.jsx)("div",{className:"trTitle",children:"Runner Stuff"}),(0,r.jsx)(B,{})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"trTitle",children:"Special Thanks"}),(0,r.jsxs)("div",{className:"trParagraph",children:[(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)(C,{ackText:"ENABLE2K",descFlag:b,setDescFlag:N}),(0,r.jsx)(C,{ackText:"Friends",descFlag:y,setDescFlag:w})]})}),b&&L,y&&I]})]})]})}},7902:function(e,t,s){"use strict";s.r(t);var r=s(5893),n=s(7294);t.default=function(e){var t=e.clubs,s=void 0===t?[]:t,a=e.getClubNights,i=(0,n.useState)("No club selection made."),c=i[0],l=i[1];return(0,r.jsxs)("div",{className:"trBackground",children:[(0,r.jsx)("div",{className:"trSubtitle",children:"Club List"}),c&&(0,r.jsx)("div",{className:"trEmphasis",children:c}),(0,r.jsxs)("table",{className:"trTable",border:"1",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Club Name"}),(0,r.jsx)("th",{children:"Location"}),(0,r.jsx)("th",{children:"Action"})]})}),(0,r.jsx)("tbody",{children:s.map((function(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.Name}),(0,r.jsx)("td",{children:e.Location}),(0,r.jsx)("td",{children:(0,r.jsx)("button",{className:"trButton",onClick:function(){a(e.Id),l("Selected ".concat(e.Name," club nights."))},children:"CLUB NIGHTS"})})]},"club".concat(e.Id))}))})]})]})}},1622:function(e,t,s){"use strict";s.r(t);var r=s(5893);t.default=function(e){var t=e.clubGames,s=void 0===t?[]:t,n=e.clubDate,a=void 0===n?"":n;return(0,r.jsxs)("div",{className:"trBackground",children:[(0,r.jsxs)("div",{className:"trSubtitle",children:["Club Games: ",a]}),(0,r.jsx)("div",{style:{height:"800px",width:"fit-content"},children:(0,r.jsxs)("div",{style:{height:"100%",overflowY:"scroll"},children:[(0,r.jsxs)("table",{className:"trTable",border:"1",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Round"}),(0,r.jsx)("th",{children:"Player"}),(0,r.jsx)("th",{children:"Opponent"}),(0,r.jsx)("th",{children:"For"}),(0,r.jsx)("th",{children:"Against"}),(0,r.jsx)("th",{children:"Spread"})]})}),(0,r.jsx)("tbody",{children:s.map((function(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.Round}),(0,r.jsxs)("td",{children:[e.PlayerName,(0,r.jsxs)("span",{style:{float:"right",fontFamily:"monospace"},children:["\xa0",e.PlayerScore>e.OpponentScore?"(W)":e.PlayerScore<e.OpponentScore?"(L)":"(T)"]})]}),(0,r.jsxs)("td",{children:[e.OpponentName,(0,r.jsxs)("span",{style:{float:"right",fontFamily:"monospace"},children:["\xa0",e.PlayerScore<e.OpponentScore?"(W)":e.PlayerScore>e.OpponentScore?"(L)":"(T)"]})]}),(0,r.jsx)("td",{className:"equispaced textright",children:e.PlayerScore}),(0,r.jsx)("td",{className:"equispaced textright",children:e.OpponentScore}),(0,r.jsx)("td",{className:"equispaced textright",children:Math.abs(e.PlayerScore-e.OpponentScore)})]},"game".concat(e.Id))}))})]}),(0,r.jsx)("div",{className:"trSubtitle",children:"Player Totals:"}),(0,r.jsxs)("table",{className:"trTable",border:"1",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Rank"}),(0,r.jsx)("th",{children:"Player"}),(0,r.jsx)("th",{children:"Wins"}),(0,r.jsx)("th",{children:"Spread"}),(0,r.jsx)("th",{children:"Losses"}),(0,r.jsx)("th",{children:"For"}),(0,r.jsx)("th",{children:"Against"})]})}),(0,r.jsx)("tbody",{children:function(){for(var e=[],t=0;t<s.length;t++){for(var r=s[t],n=!1,a=!1,i=0;i<e.length;i++){var c=e[i];c.Name===r.PlayerName&&(n=!0,c.For=c.For+r.PlayerScore,c.Against=c.Against+r.OpponentScore,r.PlayerScore>r.OpponentScore&&(c.Wins=c.Wins+1),r.PlayerScore<r.OpponentScore&&(c.Losses=c.Losses+1),r.PlayerScore===r.OpponentScore&&(c.Wins=c.Wins+.5,c.Losses=c.Losses+.5)),c.Name===r.OpponentName&&(a=!0,c.Against=c.Against+r.PlayerScore,c.For=c.For+r.OpponentScore,r.PlayerScore<r.OpponentScore&&(c.Wins=c.Wins+1),r.PlayerScore>r.OpponentScore&&(c.Losses=c.Losses+1),r.PlayerScore===r.OpponentScore&&(c.Wins=c.Wins+.5,c.Losses=c.Losses+.5))}if(!n){var l={Name:r.PlayerName,For:r.PlayerScore,Against:r.OpponentScore,Wins:r.PlayerScore>r.OpponentScore?1:r.PlayerScore<r.OpponentScore?0:.5,Losses:r.PlayerScore<r.OpponentScore?1:r.PlayerScore>r.OpponentScore?0:.5};e.push(l)}if(!a){var o={Name:r.OpponentName,For:r.OpponentScore,Against:r.PlayerScore,Wins:r.PlayerScore<r.OpponentScore?1:r.PlayerScore>r.OpponentScore?0:.5,Losses:r.PlayerScore>r.OpponentScore?1:r.PlayerScore<r.OpponentScore?0:.5};e.push(o)}}return e.sort((function(e,t){return e.Wins>t.Wins?-1:e.Wins===t.Wins?t.For-t.Against-e.For+e.Against:e.Losses-t.Losses})),e}().map((function(e,t){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"equispaced textright",children:t+1}),(0,r.jsx)("td",{children:e.Name}),(0,r.jsx)("td",{className:"textcenter",children:e.Wins}),(0,r.jsx)("td",{className:"equispaced textright",children:e.For-e.Against}),(0,r.jsx)("td",{className:"textcenter",children:e.Losses}),(0,r.jsx)("td",{className:"equispaced textright",children:e.For}),(0,r.jsx)("td",{className:"equispaced textright",children:e.Against})]},"total.".concat(e.Name))}))})]})]})})]})}},2674:function(e,t,s){"use strict";s.r(t);var r=s(5893),n=s(7294);t.default=function(e){var t=e.clubNights,s=void 0===t?[]:t,a=e.clubName,i=void 0===a?"":a,c=e.getClubGames,l=(0,n.useState)("No club night selected."),o=l[0],d=l[1];return(0,r.jsxs)("div",{className:"trBackground",children:[(0,r.jsxs)("div",{className:"trSubtitle",children:["Club Nights: ",i]}),o&&(0,r.jsx)("div",{className:"trEmphasis",children:o}),(0,r.jsx)("div",{style:{height:"780px",width:"fit-content"},children:(0,r.jsx)("div",{style:{height:"100%",overflowY:"scroll"},children:(0,r.jsxs)("table",{className:"trTable",border:"1",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Date"}),(0,r.jsx)("th",{children:"Action"})]})}),(0,r.jsx)("tbody",{children:s.map((function(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.Date}),(0,r.jsx)("td",{children:(0,r.jsx)("button",{className:"trButton",onClick:function(){c(e.Id),d("Selected ".concat(e.Date," club games."))},children:"CLUB GAMES"})})]},"night".concat(e.Id))}))})]})})})]})}},5078:function(e,t,s){"use strict";s.r(t);var r=s(5893),n=s(7294),a=s(7902),i=s(2674),c=s(1622);t.default=function(e){var t=e.setWhereto,s="https://tilerunner.herokuapp.com/clubdata/",l=(0,n.useState)([]),o=l[0],d=l[1],h=(0,n.useState)([]),u=h[0],x=h[1],p=(0,n.useState)([]),m=p[0],j=p[1],f=(0,n.useState)([]),g=f[0],v=f[1],b=(0,n.useState)(-1),N=b[0],S=b[1],y=(0,n.useState)("No club selected"),w=y[0],W=y[1],P=(0,n.useState)(-1),k=P[0],F=P[1],T=(0,n.useState)("No club night selected"),O=T[0],C=T[1],L=function(e){if(k!==e){if(e<0)return v([]),C("No club night selected."),void F(e);for(var t=function(t){var r=m[t];if(r.Id===e)return fetch("".concat(s,"clubgamelist/?clubnightid=").concat(e)).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);t.sort((function(e,t){return e.Round-t.Round}));for(var s=0;s<t.length;s++)for(var n=t[s],a=0;a<u.length;a++){var i=u[a];n.PlayerId===i.Id&&(n.PlayerName=i.Name),n.OpponentId===i.Id&&(n.OpponentName=i.Name)}v(t),C(r.Date),F(r.Id)})),{v:void 0}},r=0;r<m.length;r++){var n=t(r);if("object"===typeof n)return n.v}}};return(0,n.useEffect)((function(){fetch(s+"clublist").then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);t.sort((function(e,t){return e.Name.toLowerCase()>t.Name.toLowerCase()?1:-1})),d(t)})),fetch(s+"playerlist").then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);t.sort((function(e,t){return e.Name.toLowerCase()>t.Name.toLowerCase()?1:-1})),x(t)}))}),[]),(0,r.jsxs)("div",{className:"trBackground",children:[(0,r.jsxs)("div",{className:"trTitle",children:["Scrabble Club Data",(0,r.jsx)("button",{className:"trButton",onClick:function(){t("menu")},children:(0,r.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-4",children:(0,r.jsx)(a.default,{clubs:o,getClubNights:function(e){if(N!==e)for(var t=function(t){var r=o[t];if(r.Id===e)return fetch("".concat(s,"clubnightlist/?clubid=").concat(e)).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);t.sort((function(e,t){return e.Date>t.Date?-1:1})),j(t),W(r.Name),S(r.Id),L(-1)})),{v:void 0}},r=0;r<o.length;r++){var n=t(r);if("object"===typeof n)return n.v}}})}),(0,r.jsx)("div",{className:"col-4",children:(0,r.jsx)(i.default,{clubNights:m,clubName:w,getClubGames:L})}),(0,r.jsx)("div",{className:"col-4",children:(0,r.jsx)(c.default,{clubGames:g,clubDate:O})})]})})]})}},1696:function(e,t,s){"use strict";s.r(t);var r=s(5893),n=s(1385),a=s(7294),i=s(1201);t.default=function(e){var t=e.setWhereto,s=(0,a.useState)(""),c=s[0],l=s[1],o=(0,a.useState)([]),d=o[0],h=o[1];function u(e){var t=JSON.parse(JSON.stringify(d));t.splice(e,1),h(t)}return(0,r.jsxs)("div",{className:"trBackground",children:[(0,r.jsxs)("div",{className:"trTitle",children:["Word Info",(0,r.jsx)("button",{className:"trButton",onClick:function(){t("menu")},children:(0,r.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),(0,r.jsxs)("div",{className:"trParagraph",children:[(0,r.jsx)("label",{children:"Word:\xa0"}),(0,r.jsx)("input",{name:"word",value:c,onChange:function(e){l(e.target.value)}}),(0,r.jsx)("label",{children:"\xa0"}),(0,r.jsx)("button",{id:"acceptWord",className:"trButton",onClick:function(){h([c].concat((0,n.Z)(d))),l("")},children:"Get Word Info"}),(0,r.jsx)("label",{children:"\xa0"}),(0,r.jsx)("button",{id:"acceptAlphagram",className:"trButton",onClick:function(){fetch("https://tilerunner.herokuapp.com/ENABLE2K?letters="+c).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e),s=[];t.anagrams.map((function(e){s=[].concat((0,n.Z)(s),[e])})),t.valid&&s.push(c.toUpperCase()),s.sort(),l(""),h([].concat((0,n.Z)(s),(0,n.Z)(d)))}))},children:"Get Anagrams"}),(0,r.jsx)("label",{children:"\xa0"}),(0,r.jsx)("button",{id:"acceptRegex",className:"trButton",onClick:function(){fetch("https://tilerunner.herokuapp.com/ENABLE2K?regex="+c.toLocaleLowerCase()).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);l("");var s=[];t.regexmatches.map((function(e){s=[].concat((0,n.Z)(s),[e])})),h([].concat((0,n.Z)(s),(0,n.Z)(d))),t.count>50&&alert("Too many results, only 50 taken")}))},children:"Get Regex Matches"}),(0,r.jsx)("label",{children:"\xa0"}),!1]}),d.map((function(e,t){return""===e?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(i.default,{word:e,showInserts:"Y",showSwaps:"Y",showAnagrams:"Y",showDrops:"Y",removeEntry:u,entryIndex:t},"".concat(d.length-t,".").concat(e))}))]})}},8581:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(8474)}])},1664:function(e,t,s){s(6071)}},function(e){e.O(0,[612,983,863,19,522,504,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);