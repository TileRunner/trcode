(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[944],{7902:function(e,t,n){"use strict";n.r(t);var r=n(5893),s=n(7294);t.default=function(e){var t=e.clubs,n=void 0===t?[]:t,c=e.getClubNights,a=(0,s.useState)("No club selection made."),i=a[0],l=a[1];return(0,r.jsxs)("div",{className:"trBackground",children:[(0,r.jsx)("div",{className:"trSubtitle",children:"Club List"}),i&&(0,r.jsx)("div",{className:"trEmphasis",children:i}),(0,r.jsxs)("table",{className:"trTable",border:"1",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Club Name"}),(0,r.jsx)("th",{children:"Location"}),(0,r.jsx)("th",{children:"Action"})]})}),(0,r.jsx)("tbody",{children:n.map((function(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.Name}),(0,r.jsx)("td",{children:e.Location}),(0,r.jsx)("td",{children:(0,r.jsx)("button",{className:"trButton",onClick:function(){c(e.Id),l("Selected ".concat(e.Name," club nights."))},children:"CLUB NIGHTS"})})]},"club".concat(e.Id))}))})]})]})}},1622:function(e,t,n){"use strict";n.r(t);var r=n(5893);t.default=function(e){var t=e.clubGames,n=e.clubDate;return(0,r.jsxs)("div",{className:"trBackground",children:[(0,r.jsxs)("div",{className:"trSubtitle",children:["Club Games: ",n]}),(0,r.jsx)("div",{style:{height:"800px",width:"fit-content"},children:(0,r.jsxs)("div",{style:{height:"100%",overflowY:"scroll"},children:[(0,r.jsxs)("table",{className:"trTable",border:"1",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Round"}),(0,r.jsx)("th",{children:"Player"}),(0,r.jsx)("th",{children:"Opponent"}),(0,r.jsx)("th",{children:"For"}),(0,r.jsx)("th",{children:"Against"}),(0,r.jsx)("th",{children:"Spread"})]})}),(0,r.jsx)("tbody",{children:t.map((function(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.Round}),(0,r.jsxs)("td",{children:[e.PlayerName,(0,r.jsxs)("span",{style:{float:"right",fontFamily:"monospace"},children:["\xa0",e.PlayerScore>e.OpponentScore?"(W)":e.PlayerScore<e.OpponentScore?"(L)":"(T)"]})]}),(0,r.jsxs)("td",{children:[e.OpponentName,(0,r.jsxs)("span",{style:{float:"right",fontFamily:"monospace"},children:["\xa0",e.PlayerScore<e.OpponentScore?"(W)":e.PlayerScore>e.OpponentScore?"(L)":"(T)"]})]}),(0,r.jsx)("td",{className:"equispaced textright",children:e.PlayerScore}),(0,r.jsx)("td",{className:"equispaced textright",children:e.OpponentScore}),(0,r.jsx)("td",{className:"equispaced textright",children:Math.abs(e.PlayerScore-e.OpponentScore)})]},"game".concat(e.Id))}))})]}),(0,r.jsx)("div",{className:"trSubtitle",children:"Player Totals:"}),(0,r.jsxs)("table",{className:"trTable",border:"1",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Rank"}),(0,r.jsx)("th",{children:"Player"}),(0,r.jsx)("th",{children:"Wins"}),(0,r.jsx)("th",{children:"Spread"}),(0,r.jsx)("th",{children:"Losses"}),(0,r.jsx)("th",{children:"For"}),(0,r.jsx)("th",{children:"Against"})]})}),(0,r.jsx)("tbody",{children:function(){for(var e=[],n=0;n<t.length;n++){for(var r=t[n],s=!1,c=!1,a=0;a<e.length;a++){var i=e[a];i.Name===r.PlayerName&&(s=!0,i.For=i.For+r.PlayerScore,i.Against=i.Against+r.OpponentScore,r.PlayerScore>r.OpponentScore&&(i.Wins=i.Wins+1),r.PlayerScore<r.OpponentScore&&(i.Losses=i.Losses+1),r.PlayerScore===r.OpponentScore&&(i.Wins=i.Wins+.5,i.Losses=i.Losses+.5)),i.Name===r.OpponentName&&(c=!0,i.Against=i.Against+r.PlayerScore,i.For=i.For+r.OpponentScore,r.PlayerScore<r.OpponentScore&&(i.Wins=i.Wins+1),r.PlayerScore>r.OpponentScore&&(i.Losses=i.Losses+1),r.PlayerScore===r.OpponentScore&&(i.Wins=i.Wins+.5,i.Losses=i.Losses+.5))}if(!s){var l={Name:r.PlayerName,For:r.PlayerScore,Against:r.OpponentScore,Wins:r.PlayerScore>r.OpponentScore?1:r.PlayerScore<r.OpponentScore?0:.5,Losses:r.PlayerScore<r.OpponentScore?1:r.PlayerScore>r.OpponentScore?0:.5};e.push(l)}if(!c){var o={Name:r.OpponentName,For:r.OpponentScore,Against:r.PlayerScore,Wins:r.PlayerScore<r.OpponentScore?1:r.PlayerScore>r.OpponentScore?0:.5,Losses:r.PlayerScore>r.OpponentScore?1:r.PlayerScore<r.OpponentScore?0:.5};e.push(o)}}return e.sort((function(e,t){return e.Wins>t.Wins?-1:e.Wins===t.Wins?t.For-t.Against-e.For+e.Against:e.Losses-t.Losses})),e}().map((function(e,t){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"equispaced textright",children:t+1}),(0,r.jsx)("td",{children:e.Name}),(0,r.jsx)("td",{className:"textcenter",children:e.Wins}),(0,r.jsx)("td",{className:"equispaced textright",children:e.For-e.Against}),(0,r.jsx)("td",{className:"textcenter",children:e.Losses}),(0,r.jsx)("td",{className:"equispaced textright",children:e.For}),(0,r.jsx)("td",{className:"equispaced textright",children:e.Against})]},"total.".concat(e.Name))}))})]})]})})]})}},2674:function(e,t,n){"use strict";n.r(t);var r=n(5893),s=n(7294);t.default=function(e){var t=e.clubNights,n=void 0===t?[]:t,c=e.clubName,a=void 0===c?"":c,i=e.getClubGames,l=(0,s.useState)("No club night selected."),o=l[0],d=l[1];return(0,r.jsxs)("div",{className:"trBackground",children:[(0,r.jsxs)("div",{className:"trSubtitle",children:["Club Nights: ",a]}),o&&(0,r.jsx)("div",{className:"trEmphasis",children:o}),(0,r.jsx)("div",{style:{height:"780px",width:"fit-content"},children:(0,r.jsx)("div",{style:{height:"100%",overflowY:"scroll"},children:(0,r.jsxs)("table",{className:"trTable",border:"1",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Date"}),(0,r.jsx)("th",{children:"Action"})]})}),(0,r.jsx)("tbody",{children:n.map((function(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.Date}),(0,r.jsx)("td",{children:(0,r.jsx)("button",{className:"trButton",onClick:function(){i(e.Id),d("Selected ".concat(e.Date," club games."))},children:"CLUB GAMES"})})]},"night".concat(e.Id))}))})]})})})]})}},5078:function(e,t,n){"use strict";n.r(t);var r=n(5893),s=n(7294),c=n(7902),a=n(2674),i=n(1622);t.default=function(e){var t=e.setWhereto,n="https://tilerunner.herokuapp.com/clubdata/",l=(0,s.useState)([]),o=l[0],d=l[1],h=(0,s.useState)([]),u=h[0],x=h[1],p=(0,s.useState)([]),j=p[0],m=p[1],f=(0,s.useState)([]),N=f[0],S=f[1],b=(0,s.useState)(-1),v=b[0],g=b[1],y=(0,s.useState)("No club selected"),O=y[0],P=y[1],L=(0,s.useState)(-1),C=L[0],W=L[1],w=(0,s.useState)("No club night selected"),A=w[0],F=w[1],I=function(e){if(C!==e){if(e<0)return S([]),F("No club night selected."),void W(e);for(var t=function(t){var r=j[t];if(r.Id===e)return fetch("".concat(n,"clubgamelist/?clubnightid=").concat(e)).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);t.sort((function(e,t){return e.Round-t.Round}));for(var n=0;n<t.length;n++)for(var s=t[n],c=0;c<u.length;c++){var a=u[c];s.PlayerId===a.Id&&(s.PlayerName=a.Name),s.OpponentId===a.Id&&(s.OpponentName=a.Name)}S(t),F(r.Date),W(r.Id)})),{v:void 0}},r=0;r<j.length;r++){var s=t(r);if("object"===typeof s)return s.v}}};return(0,s.useEffect)((function(){fetch(n+"clublist").then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);t.sort((function(e,t){return e.Name.toLowerCase()>t.Name.toLowerCase()?1:-1})),d(t)})),fetch(n+"playerlist").then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);t.sort((function(e,t){return e.Name.toLowerCase()>t.Name.toLowerCase()?1:-1})),x(t)}))}),[]),(0,r.jsxs)("div",{className:"trBackground",children:[(0,r.jsxs)("div",{className:"trTitle",children:["Scrabble Club Data",(0,r.jsx)("button",{className:"trButton",onClick:function(){t("menu")},children:(0,r.jsx)("i",{className:"material-icons","data-toggle":"tooltip",title:"Home",children:"home"})})]}),(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-4",children:(0,r.jsx)(c.default,{clubs:o,getClubNights:function(e){if(v!==e)for(var t=function(t){var r=o[t];if(r.Id===e)return fetch("".concat(n,"clubnightlist/?clubid=").concat(e)).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);t.sort((function(e,t){return e.Date>t.Date?-1:1})),m(t),P(r.Name),g(r.Id),I(-1)})),{v:void 0}},r=0;r<o.length;r++){var s=t(r);if("object"===typeof s)return s.v}}})}),(0,r.jsx)("div",{className:"col-4",children:(0,r.jsx)(a.default,{clubNights:j,clubName:O,getClubGames:I})}),(0,r.jsx)("div",{className:"col-4",children:(0,r.jsx)(i.default,{clubGames:N,clubDate:A})})]})})]})}},3954:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sc/scrabbleclub",function(){return n(5078)}])}},function(e){e.O(0,[774,888,179],(function(){return t=3954,e(e.s=t);var t}));var t=e.O();_N_E=t}]);