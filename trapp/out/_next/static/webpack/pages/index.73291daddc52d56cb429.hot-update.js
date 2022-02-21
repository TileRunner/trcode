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
    0: showing,
    1: setShowing
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Loading');
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
        }
      }
    }

    setShowing('ClubNights');
  };

  const getClubGamesByClubId = clubid => {
    if (clubGamesClubId !== clubid) {
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
        }
      }
    }

    setShowing('ClubPlayers');
  };

  const getClubGamesByClubNightId = clubnightid => {
    if (clubGamesClubNightId !== clubnightid) {
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
        }
      }
    }

    setShowing('ClubNightGames');
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getClubs();
    getPlayers();
    setShowing('Clubs');
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trTitle",
      children: ["Scrabble Club Data - ", showing, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
          lineNumber: 120,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: [showing !== 'Loading' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_club__WEBPACK_IMPORTED_MODULE_2__.default, {
            clubs: clubs,
            getClubNights: getClubNights,
            getClubGames: getClubGamesByClubId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 47
        }, undefined), (showing === 'ClubNights' || showing === 'ClubNightGames') && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clubNight__WEBPACK_IMPORTED_MODULE_3__.default, {
            clubNights: clubNights,
            clubName: clubNightsClubName,
            getClubGames: getClubGamesByClubNightId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 84
        }, undefined), showing === 'ClubNightGames' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clubGame__WEBPACK_IMPORTED_MODULE_4__.default, {
            clubGames: clubGames,
            clubDate: clubGamesClubNightDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 54
        }, undefined), showing === 'ClubPlayers' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clubPlayer__WEBPACK_IMPORTED_MODULE_5__.default, {
            clubGames: clubGames,
            clubName: clubGamesClubName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 51
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 13
  }, undefined);
};

_s(ScrabbleClub, "En0ygvqkyP/oiOLSdgO8MvNB6f0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2Mvc2NyYWJibGVjbHViLmpzIl0sIm5hbWVzIjpbIlNjcmFiYmxlQ2x1YiIsInNldFdoZXJldG8iLCJiYXNldXJsIiwic2hvd2luZyIsInNldFNob3dpbmciLCJ1c2VTdGF0ZSIsImNsdWJzIiwic2V0Q2x1YnMiLCJwbGF5ZXJzIiwic2V0UGxheWVycyIsImNsdWJOaWdodHMiLCJzZXRDbHViTmlnaHRzIiwiY2x1YkdhbWVzIiwic2V0Q2x1YkdhbWVzIiwiY2x1Yk5pZ2h0c0NsdWJJZCIsInNldENsdWJOaWdodHNDbHViSWQiLCJjbHViTmlnaHRzQ2x1Yk5hbWUiLCJzZXRDbHViTmlnaHRzQ2x1Yk5hbWUiLCJjbHViR2FtZXNDbHViTmlnaHRJZCIsInNldENsdWJHYW1lc0NsdWJOaWdodElkIiwiY2x1YkdhbWVzQ2x1Yk5pZ2h0RGF0ZSIsInNldENsdWJHYW1lc0NsdWJOaWdodERhdGUiLCJjbHViR2FtZXNDbHViSWQiLCJzZXRDbHViR2FtZXNDbHViSWQiLCJjbHViR2FtZXNDbHViTmFtZSIsInNldENsdWJHYW1lc0NsdWJOYW1lIiwiZ2V0Q2x1YnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwiamRhdGEiLCJKU09OIiwicGFyc2UiLCJzb3J0IiwiYSIsImIiLCJOYW1lIiwidG9Mb3dlckNhc2UiLCJnZXRQbGF5ZXJzIiwiZ2V0Q2x1Yk5pZ2h0cyIsImNsdWJpZCIsImluZGV4IiwibGVuZ3RoIiwiY2x1YiIsIklkIiwiRGF0ZSIsImdldENsdWJHYW1lc0J5Q2x1Yk5pZ2h0SWQiLCJnZXRDbHViR2FtZXNCeUNsdWJJZCIsImluZGV4MiIsImdhbWUiLCJpbmRleDMiLCJwbGF5ZXIiLCJQbGF5ZXJJZCIsIlBsYXllck5hbWUiLCJPcHBvbmVudElkIiwiT3Bwb25lbnROYW1lIiwiY2x1Ym5pZ2h0aWQiLCJjbHVibmlnaHQiLCJSb3VuZCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7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O0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUjtBQXlCSCxDQXRJRDs7R0FBTXhCLFk7O0tBQUFBLFk7QUF3SU4sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzMyOTFkYWRkYzUyZDU2Y2I0MjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENsdWJMaXN0IGZyb20gXCIuL2NsdWJcIjtcclxuaW1wb3J0IENsdWJOaWdodExpc3QgZnJvbSBcIi4vY2x1Yk5pZ2h0XCI7XHJcbmltcG9ydCBDbHViR2FtZUxpc3QgZnJvbSBcIi4vY2x1YkdhbWVcIjtcclxuaW1wb3J0IENsdWJQbGF5ZXJMaXN0IGZyb20gXCIuL2NsdWJQbGF5ZXJcIjtcclxuXHJcbmNvbnN0IFNjcmFiYmxlQ2x1YiA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvY2x1YmRhdGEvJyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9jbHViZGF0YS8nO1xyXG4gICAgY29uc3QgW3Nob3dpbmcsIHNldFNob3dpbmddID0gdXNlU3RhdGUoJ0xvYWRpbmcnKTtcclxuICAgIGNvbnN0IFtjbHVicywgc2V0Q2x1YnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3BsYXllcnMsIHNldFBsYXllcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NsdWJOaWdodHMsIHNldENsdWJOaWdodHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NsdWJHYW1lcywgc2V0Q2x1YkdhbWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjbHViTmlnaHRzQ2x1YklkLCBzZXRDbHViTmlnaHRzQ2x1YklkXSA9IHVzZVN0YXRlKC0xKTtcclxuICAgIGNvbnN0IFtjbHViTmlnaHRzQ2x1Yk5hbWUsIHNldENsdWJOaWdodHNDbHViTmFtZV0gPSB1c2VTdGF0ZSgnTm8gY2x1YiBzZWxlY3RlZCcpO1xyXG4gICAgY29uc3QgW2NsdWJHYW1lc0NsdWJOaWdodElkLCBzZXRDbHViR2FtZXNDbHViTmlnaHRJZF0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgICBjb25zdCBbY2x1YkdhbWVzQ2x1Yk5pZ2h0RGF0ZSwgc2V0Q2x1YkdhbWVzQ2x1Yk5pZ2h0RGF0ZV0gPSB1c2VTdGF0ZSgnTm8gY2x1YiBuaWdodCBzZWxlY3RlZCcpO1xyXG4gICAgY29uc3QgW2NsdWJHYW1lc0NsdWJJZCwgc2V0Q2x1YkdhbWVzQ2x1YklkXSA9IHVzZVN0YXRlKC0xKTtcclxuICAgIGNvbnN0IFtjbHViR2FtZXNDbHViTmFtZSwgc2V0Q2x1YkdhbWVzQ2x1Yk5hbWVdID0gdXNlU3RhdGUoJ05vIGNsdWIgc2VsZWN0ZWQnKTtcclxuICAgIGNvbnN0IGdldENsdWJzID0gKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGJhc2V1cmwgKyAnY2x1Ymxpc3QnKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgamRhdGEgPSBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgICAgICAgICBqZGF0YS5zb3J0KChhLGIpID0+IGEuTmFtZS50b0xvd2VyQ2FzZSgpID4gYi5OYW1lLnRvTG93ZXJDYXNlKCkgPyAxIDogLTEpO1xyXG4gICAgICAgICAgICBzZXRDbHVicyhqZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0UGxheWVycyA9ICgpID0+IHtcclxuICAgICAgICBmZXRjaChiYXNldXJsICsgJ3BsYXllcmxpc3QnKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgamRhdGEgPSBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgICAgICAgICBqZGF0YS5zb3J0KChhLGIpID0+IGEuTmFtZS50b0xvd2VyQ2FzZSgpID4gYi5OYW1lLnRvTG93ZXJDYXNlKCkgPyAxIDogLTEpO1xyXG4gICAgICAgICAgICBzZXRQbGF5ZXJzKGpkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRDbHViTmlnaHRzID0gKGNsdWJpZCkgPT4ge1xyXG4gICAgICAgIGlmIChjbHViTmlnaHRzQ2x1YklkICE9PSBjbHViaWQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNsdWJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2x1YiA9IGNsdWJzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmIChjbHViLklkID09PSBjbHViaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaChgJHtiYXNldXJsfWNsdWJuaWdodGxpc3QvP2NsdWJpZD0ke2NsdWJpZH1gKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgamRhdGEgPSBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqZGF0YS5zb3J0KChhLGIpID0+IGEuRGF0ZSA+IGIuRGF0ZSA/IC0xIDogMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENsdWJOaWdodHMoamRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDbHViTmlnaHRzQ2x1Yk5hbWUoY2x1Yi5OYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1Yk5pZ2h0c0NsdWJJZChjbHViLklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q2x1YkdhbWVzQnlDbHViTmlnaHRJZCgtMSk7IC8vIENsZWFyIHByZXZpb3VzIHNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2hvd2luZygnQ2x1Yk5pZ2h0cycpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldENsdWJHYW1lc0J5Q2x1YklkID0gKGNsdWJpZCkgPT4ge1xyXG4gICAgICAgIGlmIChjbHViR2FtZXNDbHViSWQgIT09IGNsdWJpZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2x1YnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbHViID0gY2x1YnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsdWIuSWQgPT09IGNsdWJpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoKGAke2Jhc2V1cmx9Y2x1YmdhbWVsaXN0Lz9jbHViaWQ9JHtjbHViaWR9YCkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHBsYXllciBuYW1lc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBqZGF0YS5sZW5ndGg7IGluZGV4MisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnYW1lID0gamRhdGFbaW5kZXgyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4MyA9IDA7IGluZGV4MyA8IHBsYXllcnMubGVuZ3RoOyBpbmRleDMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IHBsYXllcnNbaW5kZXgzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5QbGF5ZXJJZCA9PT0gcGxheWVyLklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuUGxheWVyTmFtZSA9IHBsYXllci5OYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5PcHBvbmVudElkID09PSBwbGF5ZXIuSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5PcHBvbmVudE5hbWUgPSBwbGF5ZXIuTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzKGpkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzQ2x1Yk5hbWUoY2x1Yi5OYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzQ2x1YklkKGNsdWIuSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNob3dpbmcoJ0NsdWJQbGF5ZXJzJyk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0Q2x1YkdhbWVzQnlDbHViTmlnaHRJZCA9IChjbHVibmlnaHRpZCkgPT4ge1xyXG4gICAgICAgIGlmIChjbHViR2FtZXNDbHViTmlnaHRJZCAhPT0gY2x1Ym5pZ2h0aWQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNsdWJOaWdodHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbHVibmlnaHQgPSBjbHViTmlnaHRzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmIChjbHVibmlnaHQuSWQgPT09IGNsdWJuaWdodGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2goYCR7YmFzZXVybH1jbHViZ2FtZWxpc3QvP2NsdWJuaWdodGlkPSR7Y2x1Ym5pZ2h0aWR9YCkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgamRhdGEuc29ydCgoYSxiKSA9PiBhLlJvdW5kIC0gYi5Sb3VuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBwbGF5ZXIgbmFtZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXgyID0gMDsgaW5kZXgyIDwgamRhdGEubGVuZ3RoOyBpbmRleDIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2FtZSA9IGpkYXRhW2luZGV4Ml07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleDMgPSAwOyBpbmRleDMgPCBwbGF5ZXJzLmxlbmd0aDsgaW5kZXgzKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSBwbGF5ZXJzW2luZGV4M107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuUGxheWVySWQgPT09IHBsYXllci5JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lLlBsYXllck5hbWUgPSBwbGF5ZXIuTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuT3Bwb25lbnRJZCA9PT0gcGxheWVyLklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuT3Bwb25lbnROYW1lID0gcGxheWVyLk5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENsdWJHYW1lcyhqZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENsdWJHYW1lc0NsdWJOaWdodERhdGUoY2x1Ym5pZ2h0LkRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDbHViR2FtZXNDbHViTmlnaHRJZChjbHVibmlnaHQuSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNob3dpbmcoJ0NsdWJOaWdodEdhbWVzJyk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDbHVicygpO1xyXG4gICAgICAgIGdldFBsYXllcnMoKTtcclxuICAgICAgICBzZXRTaG93aW5nKCdDbHVicycpO1xyXG4gICAgfSxbXSk7XHJcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgIFNjcmFiYmxlIENsdWIgRGF0YSAtIHtzaG93aW5nfVxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93aW5nICE9PSAnTG9hZGluZycgJiYgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2x1Ykxpc3QgY2x1YnM9e2NsdWJzfSBnZXRDbHViTmlnaHRzPXtnZXRDbHViTmlnaHRzfSBnZXRDbHViR2FtZXM9e2dldENsdWJHYW1lc0J5Q2x1YklkfT48L0NsdWJMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7KHNob3dpbmcgPT09ICdDbHViTmlnaHRzJyB8fCBzaG93aW5nID09PSAnQ2x1Yk5pZ2h0R2FtZXMnKSAmJiA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbHViTmlnaHRMaXN0IGNsdWJOaWdodHM9e2NsdWJOaWdodHN9IGNsdWJOYW1lPXtjbHViTmlnaHRzQ2x1Yk5hbWV9IGdldENsdWJHYW1lcz17Z2V0Q2x1YkdhbWVzQnlDbHViTmlnaHRJZH0+PC9DbHViTmlnaHRMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7c2hvd2luZyA9PT0gJ0NsdWJOaWdodEdhbWVzJyAmJiA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbHViR2FtZUxpc3QgY2x1YkdhbWVzPXtjbHViR2FtZXN9IGNsdWJEYXRlPXtjbHViR2FtZXNDbHViTmlnaHREYXRlfT48L0NsdWJHYW1lTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dpbmcgPT09ICdDbHViUGxheWVycycgJiYgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2x1YlBsYXllckxpc3QgY2x1YkdhbWVzPXtjbHViR2FtZXN9IGNsdWJOYW1lPXtjbHViR2FtZXNDbHViTmFtZX0+PC9DbHViUGxheWVyTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JhYmJsZUNsdWI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=