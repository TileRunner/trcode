self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/sc/scrabbleclub.js":
/*!**********************************!*\
  !*** ./pages/sc/scrabbleclub.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _club__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./club */ "./pages/sc/club.js");
/* harmony import */ var _clubNight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clubNight */ "./pages/sc/clubNight.js");
/* harmony import */ var _clubGame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clubGame */ "./pages/sc/clubGame.js");
/* harmony import */ var _clubPlayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clubPlayer */ "./pages/sc/clubPlayer.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\sc\\scrabbleclub.js",
    _s = $RefreshSig$();







const ScrabbleClub = ({
  setWhereto
}) => {
  _s();

  const baseurl =  true ? 'http://localhost:5000/clubdata/' : 0;
  const {
    0: clubs,
    1: setClubs
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: players,
    1: setPlayers
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: clubNights,
    1: setClubNights
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: clubGames,
    1: setClubGames
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: clubNightsClubId,
    1: setClubNightsClubId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
  const {
    0: clubNightsClubName,
    1: setClubNightsClubName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('No club selected');
  const {
    0: clubGamesClubNightId,
    1: setClubGamesClubNightId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
  const {
    0: clubGamesClubNightDate,
    1: setClubGamesClubNightDate
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('No club night selected');
  const {
    0: clubGamesClubId,
    1: setClubGamesClubId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
  const {
    0: clubGamesClubName,
    1: setClubGamesClubName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('No club selected');

  const getClubs = () => {
    fetch(baseurl + 'clublist').then(res => res.text()).then(text => {
      let jdata = JSON.parse(text);
      jdata.sort((a, b) => a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1);
      setClubs(jdata);
    });
  };

  const getPlayers = () => {
    fetch(baseurl + 'playerlist').then(res => res.text()).then(text => {
      let jdata = JSON.parse(text);
      jdata.sort((a, b) => a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1);
      setPlayers(jdata);
    });
  };

  const getClubNights = clubid => {
    if (clubNightsClubId !== clubid) {
      for (let index = 0; index < clubs.length; index++) {
        const club = clubs[index];

        if (club.Id === clubid) {
          fetch(`${baseurl}clubnightlist/?clubid=${clubid}`).then(res => res.text()).then(text => {
            let jdata = JSON.parse(text);
            jdata.sort((a, b) => a.Date > b.Date ? -1 : 1);
            setClubNights(jdata);
            setClubNightsClubName(club.Name);
            setClubNightsClubId(club.Id);
            getClubGamesByClubNightId(-1); // Clear previous selection
          });
          return;
        }
      }
    }
  };

  const getClubGamesByClubId = clubid => {
    if (clubGamesClubId !== clubid) {
      if (clubid < 0) {
        setClubGames([]);
        setClubGamesClubName('No club selected.');
        setClubGamesClubId(clubid);
        return;
      }

      for (let index = 0; index < clubs.length; index++) {
        const club = clubs[index];

        if (club.Id === clubid) {
          fetch(`${baseurl}clubgamelist/?clubid=${clubid}`).then(res => res.text()).then(text => {
            let jdata = JSON.parse(text); // Add player names

            for (let index2 = 0; index2 < jdata.length; index2++) {
              const game = jdata[index2];

              for (let index3 = 0; index3 < players.length; index3++) {
                const player = players[index3];

                if (game.PlayerId === player.Id) {
                  game.PlayerName = player.Name;
                }

                if (game.OpponentId === player.Id) {
                  game.OpponentName = player.Name;
                }
              }
            }

            setClubGames(jdata);
            setClubGamesClubName(club.Name);
            setClubGamesClubId(club.Id);
          });
          return;
        }
      }
    }
  };

  const getClubGamesByClubNightId = clubnightid => {
    if (clubGamesClubNightId !== clubnightid) {
      if (clubnightid < 0) {
        setClubGames([]);
        setClubGamesClubNightDate('No club night selected.');
        setClubGamesClubNightId(clubnightid);
        return;
      }

      for (let index = 0; index < clubNights.length; index++) {
        const clubnight = clubNights[index];

        if (clubnight.Id === clubnightid) {
          fetch(`${baseurl}clubgamelist/?clubnightid=${clubnightid}`).then(res => res.text()).then(text => {
            let jdata = JSON.parse(text);
            jdata.sort((a, b) => a.Round - b.Round); // Add player names

            for (let index2 = 0; index2 < jdata.length; index2++) {
              const game = jdata[index2];

              for (let index3 = 0; index3 < players.length; index3++) {
                const player = players[index3];

                if (game.PlayerId === player.Id) {
                  game.PlayerName = player.Name;
                }

                if (game.OpponentId === player.Id) {
                  game.OpponentName = player.Name;
                }
              }
            }

            setClubGames(jdata);
            setClubGamesClubNightDate(clubnight.Date);
            setClubGamesClubNightId(clubnight.Id);
          });
          return;
        }
      }
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getClubs();
    getPlayers();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trTitle",
      children: ["Scrabble Club Data", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          setWhereto('menu');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "material-icons",
          "data-toggle": "tooltip",
          title: "Home",
          children: "home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_club__WEBPACK_IMPORTED_MODULE_2__.default, {
            clubs: clubs,
            getClubNights: getClubNights,
            getClubGames: getClubGames
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, undefined), clubNightsClubId > -1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clubNight__WEBPACK_IMPORTED_MODULE_3__.default, {
            clubNights: clubNights,
            clubName: clubNightsClubName,
            getClubGames: getClubGamesByClubNightId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 47
        }, undefined), clubNightsClubId > -1 && clubGamesClubNightId > -1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clubGame__WEBPACK_IMPORTED_MODULE_4__.default, {
            clubGames: clubGames,
            clubDate: clubGamesClubNightDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 76
        }, undefined), clubGamesClubId > -1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clubPlayer__WEBPACK_IMPORTED_MODULE_5__.default, {
            clubGames: clubGames,
            clubName: clubGamesClubName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 46
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 13
  }, undefined);
};

_s(ScrabbleClub, "awXAH8X2gJORXnDkEoAcPWxAhQI=");

_c = ScrabbleClub;
/* harmony default export */ __webpack_exports__["default"] = (ScrabbleClub);

var _c;

$RefreshReg$(_c, "ScrabbleClub");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2Mvc2NyYWJibGVjbHViLmpzIl0sIm5hbWVzIjpbIlNjcmFiYmxlQ2x1YiIsInNldFdoZXJldG8iLCJiYXNldXJsIiwiY2x1YnMiLCJzZXRDbHVicyIsInVzZVN0YXRlIiwicGxheWVycyIsInNldFBsYXllcnMiLCJjbHViTmlnaHRzIiwic2V0Q2x1Yk5pZ2h0cyIsImNsdWJHYW1lcyIsInNldENsdWJHYW1lcyIsImNsdWJOaWdodHNDbHViSWQiLCJzZXRDbHViTmlnaHRzQ2x1YklkIiwiY2x1Yk5pZ2h0c0NsdWJOYW1lIiwic2V0Q2x1Yk5pZ2h0c0NsdWJOYW1lIiwiY2x1YkdhbWVzQ2x1Yk5pZ2h0SWQiLCJzZXRDbHViR2FtZXNDbHViTmlnaHRJZCIsImNsdWJHYW1lc0NsdWJOaWdodERhdGUiLCJzZXRDbHViR2FtZXNDbHViTmlnaHREYXRlIiwiY2x1YkdhbWVzQ2x1YklkIiwic2V0Q2x1YkdhbWVzQ2x1YklkIiwiY2x1YkdhbWVzQ2x1Yk5hbWUiLCJzZXRDbHViR2FtZXNDbHViTmFtZSIsImdldENsdWJzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwidGV4dCIsImpkYXRhIiwiSlNPTiIsInBhcnNlIiwic29ydCIsImEiLCJiIiwiTmFtZSIsInRvTG93ZXJDYXNlIiwiZ2V0UGxheWVycyIsImdldENsdWJOaWdodHMiLCJjbHViaWQiLCJpbmRleCIsImxlbmd0aCIsImNsdWIiLCJJZCIsIkRhdGUiLCJnZXRDbHViR2FtZXNCeUNsdWJOaWdodElkIiwiZ2V0Q2x1YkdhbWVzQnlDbHViSWQiLCJpbmRleDIiLCJnYW1lIiwiaW5kZXgzIiwicGxheWVyIiwiUGxheWVySWQiLCJQbGF5ZXJOYW1lIiwiT3Bwb25lbnRJZCIsIk9wcG9uZW50TmFtZSIsImNsdWJuaWdodGlkIiwiY2x1Ym5pZ2h0IiwiUm91bmQiLCJ1c2VFZmZlY3QiLCJnZXRDbHViR2FtZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEcUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUjtBQXlCSCxDQWhKRDs7R0FBTXRCLFk7O0tBQUFBLFk7QUFrSk4sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzNhODc0MmRkMzJkMzIzZjA0NDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENsdWJMaXN0IGZyb20gXCIuL2NsdWJcIjtcclxuaW1wb3J0IENsdWJOaWdodExpc3QgZnJvbSBcIi4vY2x1Yk5pZ2h0XCI7XHJcbmltcG9ydCBDbHViR2FtZUxpc3QgZnJvbSBcIi4vY2x1YkdhbWVcIjtcclxuaW1wb3J0IENsdWJQbGF5ZXJMaXN0IGZyb20gXCIuL2NsdWJQbGF5ZXJcIjtcclxuXHJcbmNvbnN0IFNjcmFiYmxlQ2x1YiA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvY2x1YmRhdGEvJyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9jbHViZGF0YS8nO1xyXG4gICAgY29uc3QgW2NsdWJzLCBzZXRDbHVic10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcGxheWVycywgc2V0UGxheWVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2x1Yk5pZ2h0cywgc2V0Q2x1Yk5pZ2h0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2x1YkdhbWVzLCBzZXRDbHViR2FtZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NsdWJOaWdodHNDbHViSWQsIHNldENsdWJOaWdodHNDbHViSWRdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgW2NsdWJOaWdodHNDbHViTmFtZSwgc2V0Q2x1Yk5pZ2h0c0NsdWJOYW1lXSA9IHVzZVN0YXRlKCdObyBjbHViIHNlbGVjdGVkJyk7XHJcbiAgICBjb25zdCBbY2x1YkdhbWVzQ2x1Yk5pZ2h0SWQsIHNldENsdWJHYW1lc0NsdWJOaWdodElkXSA9IHVzZVN0YXRlKC0xKTtcclxuICAgIGNvbnN0IFtjbHViR2FtZXNDbHViTmlnaHREYXRlLCBzZXRDbHViR2FtZXNDbHViTmlnaHREYXRlXSA9IHVzZVN0YXRlKCdObyBjbHViIG5pZ2h0IHNlbGVjdGVkJyk7XHJcbiAgICBjb25zdCBbY2x1YkdhbWVzQ2x1YklkLCBzZXRDbHViR2FtZXNDbHViSWRdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgW2NsdWJHYW1lc0NsdWJOYW1lLCBzZXRDbHViR2FtZXNDbHViTmFtZV0gPSB1c2VTdGF0ZSgnTm8gY2x1YiBzZWxlY3RlZCcpO1xyXG4gICAgY29uc3QgZ2V0Q2x1YnMgPSAoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYmFzZXVybCArICdjbHVibGlzdCcpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBqZGF0YSA9IEpTT04ucGFyc2UodGV4dCk7XHJcbiAgICAgICAgICAgIGpkYXRhLnNvcnQoKGEsYikgPT4gYS5OYW1lLnRvTG93ZXJDYXNlKCkgPiBiLk5hbWUudG9Mb3dlckNhc2UoKSA/IDEgOiAtMSk7XHJcbiAgICAgICAgICAgIHNldENsdWJzKGpkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRQbGF5ZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGJhc2V1cmwgKyAncGxheWVybGlzdCcpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBqZGF0YSA9IEpTT04ucGFyc2UodGV4dCk7XHJcbiAgICAgICAgICAgIGpkYXRhLnNvcnQoKGEsYikgPT4gYS5OYW1lLnRvTG93ZXJDYXNlKCkgPiBiLk5hbWUudG9Mb3dlckNhc2UoKSA/IDEgOiAtMSk7XHJcbiAgICAgICAgICAgIHNldFBsYXllcnMoamRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldENsdWJOaWdodHMgPSAoY2x1YmlkKSA9PiB7XHJcbiAgICAgICAgaWYgKGNsdWJOaWdodHNDbHViSWQgIT09IGNsdWJpZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2x1YnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbHViID0gY2x1YnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsdWIuSWQgPT09IGNsdWJpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoKGAke2Jhc2V1cmx9Y2x1Ym5pZ2h0bGlzdC8/Y2x1YmlkPSR7Y2x1YmlkfWApLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqZGF0YSA9IEpTT04ucGFyc2UodGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpkYXRhLnNvcnQoKGEsYikgPT4gYS5EYXRlID4gYi5EYXRlID8gLTEgOiAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1Yk5pZ2h0cyhqZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENsdWJOaWdodHNDbHViTmFtZShjbHViLk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDbHViTmlnaHRzQ2x1YklkKGNsdWIuSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRDbHViR2FtZXNCeUNsdWJOaWdodElkKC0xKTsgLy8gQ2xlYXIgcHJldmlvdXMgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0Q2x1YkdhbWVzQnlDbHViSWQgPSAoY2x1YmlkKSA9PiB7XHJcbiAgICAgICAgaWYgKGNsdWJHYW1lc0NsdWJJZCAhPT0gY2x1YmlkKSB7XHJcbiAgICAgICAgICAgIGlmIChjbHViaWQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDbHViR2FtZXMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzQ2x1Yk5hbWUoJ05vIGNsdWIgc2VsZWN0ZWQuJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRDbHViR2FtZXNDbHViSWQoY2x1YmlkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2x1YnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbHViID0gY2x1YnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsdWIuSWQgPT09IGNsdWJpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoKGAke2Jhc2V1cmx9Y2x1YmdhbWVsaXN0Lz9jbHViaWQ9JHtjbHViaWR9YCkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHBsYXllciBuYW1lc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBqZGF0YS5sZW5ndGg7IGluZGV4MisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnYW1lID0gamRhdGFbaW5kZXgyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4MyA9IDA7IGluZGV4MyA8IHBsYXllcnMubGVuZ3RoOyBpbmRleDMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IHBsYXllcnNbaW5kZXgzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5QbGF5ZXJJZCA9PT0gcGxheWVyLklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuUGxheWVyTmFtZSA9IHBsYXllci5OYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5PcHBvbmVudElkID09PSBwbGF5ZXIuSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5PcHBvbmVudE5hbWUgPSBwbGF5ZXIuTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzKGpkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzQ2x1Yk5hbWUoY2x1Yi5OYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzQ2x1YklkKGNsdWIuSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRDbHViR2FtZXNCeUNsdWJOaWdodElkID0gKGNsdWJuaWdodGlkKSA9PiB7XHJcbiAgICAgICAgaWYgKGNsdWJHYW1lc0NsdWJOaWdodElkICE9PSBjbHVibmlnaHRpZCkge1xyXG4gICAgICAgICAgICBpZiAoY2x1Ym5pZ2h0aWQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDbHViR2FtZXMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzQ2x1Yk5pZ2h0RGF0ZSgnTm8gY2x1YiBuaWdodCBzZWxlY3RlZC4nKTtcclxuICAgICAgICAgICAgICAgIHNldENsdWJHYW1lc0NsdWJOaWdodElkKGNsdWJuaWdodGlkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2x1Yk5pZ2h0cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsdWJuaWdodCA9IGNsdWJOaWdodHNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsdWJuaWdodC5JZCA9PT0gY2x1Ym5pZ2h0aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaChgJHtiYXNldXJsfWNsdWJnYW1lbGlzdC8/Y2x1Ym5pZ2h0aWQ9JHtjbHVibmlnaHRpZH1gKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgamRhdGEgPSBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqZGF0YS5zb3J0KChhLGIpID0+IGEuUm91bmQgLSBiLlJvdW5kKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHBsYXllciBuYW1lc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBqZGF0YS5sZW5ndGg7IGluZGV4MisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnYW1lID0gamRhdGFbaW5kZXgyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4MyA9IDA7IGluZGV4MyA8IHBsYXllcnMubGVuZ3RoOyBpbmRleDMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IHBsYXllcnNbaW5kZXgzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5QbGF5ZXJJZCA9PT0gcGxheWVyLklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuUGxheWVyTmFtZSA9IHBsYXllci5OYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5PcHBvbmVudElkID09PSBwbGF5ZXIuSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5PcHBvbmVudE5hbWUgPSBwbGF5ZXIuTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzKGpkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzQ2x1Yk5pZ2h0RGF0ZShjbHVibmlnaHQuRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENsdWJHYW1lc0NsdWJOaWdodElkKGNsdWJuaWdodC5JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q2x1YnMoKTtcclxuICAgICAgICBnZXRQbGF5ZXJzKCk7XHJcbiAgICB9LFtdKTtcclxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgU2NyYWJibGUgQ2x1YiBEYXRhXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2x1Ykxpc3QgY2x1YnM9e2NsdWJzfSBnZXRDbHViTmlnaHRzPXtnZXRDbHViTmlnaHRzfSBnZXRDbHViR2FtZXM9e2dldENsdWJHYW1lc30+PC9DbHViTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2x1Yk5pZ2h0c0NsdWJJZCA+IC0xICYmIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENsdWJOaWdodExpc3QgY2x1Yk5pZ2h0cz17Y2x1Yk5pZ2h0c30gY2x1Yk5hbWU9e2NsdWJOaWdodHNDbHViTmFtZX0gZ2V0Q2x1YkdhbWVzPXtnZXRDbHViR2FtZXNCeUNsdWJOaWdodElkfT48L0NsdWJOaWdodExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtjbHViTmlnaHRzQ2x1YklkID4gLTEgJiYgY2x1YkdhbWVzQ2x1Yk5pZ2h0SWQgPiAtMSAmJiA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbHViR2FtZUxpc3QgY2x1YkdhbWVzPXtjbHViR2FtZXN9IGNsdWJEYXRlPXtjbHViR2FtZXNDbHViTmlnaHREYXRlfT48L0NsdWJHYW1lTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge2NsdWJHYW1lc0NsdWJJZCA+IC0xICYmIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENsdWJQbGF5ZXJMaXN0IGNsdWJHYW1lcz17Y2x1YkdhbWVzfSBjbHViTmFtZT17Y2x1YkdhbWVzQ2x1Yk5hbWV9PjwvQ2x1YlBsYXllckxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2NyYWJibGVDbHViO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9