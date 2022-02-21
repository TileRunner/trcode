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
          lineNumber: 119,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
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
            lineNumber: 125,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 47
        }, undefined), (showing === 'ClubNights' || showing === 'ClubNightGames') && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clubNight__WEBPACK_IMPORTED_MODULE_3__.default, {
            clubNights: clubNights,
            clubName: clubNightsClubName,
            getClubGames: getClubGamesByClubNightId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 84
        }, undefined), showing === 'ClubNightGames' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clubGame__WEBPACK_IMPORTED_MODULE_4__.default, {
            clubGames: clubGames,
            clubDate: clubGamesClubNightDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 54
        }, undefined), showing === 'ClubPlayers' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clubPlayer__WEBPACK_IMPORTED_MODULE_5__.default, {
            clubGames: clubGames,
            clubName: clubGamesClubName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 51
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 115,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2Mvc2NyYWJibGVjbHViLmpzIl0sIm5hbWVzIjpbIlNjcmFiYmxlQ2x1YiIsInNldFdoZXJldG8iLCJiYXNldXJsIiwic2hvd2luZyIsInNldFNob3dpbmciLCJ1c2VTdGF0ZSIsImNsdWJzIiwic2V0Q2x1YnMiLCJwbGF5ZXJzIiwic2V0UGxheWVycyIsImNsdWJOaWdodHMiLCJzZXRDbHViTmlnaHRzIiwiY2x1YkdhbWVzIiwic2V0Q2x1YkdhbWVzIiwiY2x1Yk5pZ2h0c0NsdWJJZCIsInNldENsdWJOaWdodHNDbHViSWQiLCJjbHViTmlnaHRzQ2x1Yk5hbWUiLCJzZXRDbHViTmlnaHRzQ2x1Yk5hbWUiLCJjbHViR2FtZXNDbHViTmlnaHRJZCIsInNldENsdWJHYW1lc0NsdWJOaWdodElkIiwiY2x1YkdhbWVzQ2x1Yk5pZ2h0RGF0ZSIsInNldENsdWJHYW1lc0NsdWJOaWdodERhdGUiLCJjbHViR2FtZXNDbHViSWQiLCJzZXRDbHViR2FtZXNDbHViSWQiLCJjbHViR2FtZXNDbHViTmFtZSIsInNldENsdWJHYW1lc0NsdWJOYW1lIiwiZ2V0Q2x1YnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwiamRhdGEiLCJKU09OIiwicGFyc2UiLCJzb3J0IiwiYSIsImIiLCJOYW1lIiwidG9Mb3dlckNhc2UiLCJnZXRQbGF5ZXJzIiwiZ2V0Q2x1Yk5pZ2h0cyIsImNsdWJpZCIsImluZGV4IiwibGVuZ3RoIiwiY2x1YiIsIklkIiwiRGF0ZSIsImdldENsdWJHYW1lc0J5Q2x1YklkIiwiaW5kZXgyIiwiZ2FtZSIsImluZGV4MyIsInBsYXllciIsIlBsYXllcklkIiwiUGxheWVyTmFtZSIsIk9wcG9uZW50SWQiLCJPcHBvbmVudE5hbWUiLCJnZXRDbHViR2FtZXNCeUNsdWJOaWdodElkIiwiY2x1Ym5pZ2h0aWQiLCJjbHVibmlnaHQiLCJSb3VuZCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVI7QUF5QkgsQ0FySUQ7O0dBQU14QixZOztLQUFBQSxZO0FBdUlOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg5NjdmYjg1NDkxZTU2YzQwOWFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDbHViTGlzdCBmcm9tIFwiLi9jbHViXCI7XHJcbmltcG9ydCBDbHViTmlnaHRMaXN0IGZyb20gXCIuL2NsdWJOaWdodFwiO1xyXG5pbXBvcnQgQ2x1YkdhbWVMaXN0IGZyb20gXCIuL2NsdWJHYW1lXCI7XHJcbmltcG9ydCBDbHViUGxheWVyTGlzdCBmcm9tIFwiLi9jbHViUGxheWVyXCI7XHJcblxyXG5jb25zdCBTY3JhYmJsZUNsdWIgPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NsdWJkYXRhLycgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vY2x1YmRhdGEvJztcclxuICAgIGNvbnN0IFtzaG93aW5nLCBzZXRTaG93aW5nXSA9IHVzZVN0YXRlKCdMb2FkaW5nJyk7XHJcbiAgICBjb25zdCBbY2x1YnMsIHNldENsdWJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwbGF5ZXJzLCBzZXRQbGF5ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjbHViTmlnaHRzLCBzZXRDbHViTmlnaHRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjbHViR2FtZXMsIHNldENsdWJHYW1lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2x1Yk5pZ2h0c0NsdWJJZCwgc2V0Q2x1Yk5pZ2h0c0NsdWJJZF0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgICBjb25zdCBbY2x1Yk5pZ2h0c0NsdWJOYW1lLCBzZXRDbHViTmlnaHRzQ2x1Yk5hbWVdID0gdXNlU3RhdGUoJ05vIGNsdWIgc2VsZWN0ZWQnKTtcclxuICAgIGNvbnN0IFtjbHViR2FtZXNDbHViTmlnaHRJZCwgc2V0Q2x1YkdhbWVzQ2x1Yk5pZ2h0SWRdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgW2NsdWJHYW1lc0NsdWJOaWdodERhdGUsIHNldENsdWJHYW1lc0NsdWJOaWdodERhdGVdID0gdXNlU3RhdGUoJ05vIGNsdWIgbmlnaHQgc2VsZWN0ZWQnKTtcclxuICAgIGNvbnN0IFtjbHViR2FtZXNDbHViSWQsIHNldENsdWJHYW1lc0NsdWJJZF0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgICBjb25zdCBbY2x1YkdhbWVzQ2x1Yk5hbWUsIHNldENsdWJHYW1lc0NsdWJOYW1lXSA9IHVzZVN0YXRlKCdObyBjbHViIHNlbGVjdGVkJyk7XHJcbiAgICBjb25zdCBnZXRDbHVicyA9ICgpID0+IHtcclxuICAgICAgICBmZXRjaChiYXNldXJsICsgJ2NsdWJsaXN0JykudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgbGV0IGpkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KTtcclxuICAgICAgICAgICAgamRhdGEuc29ydCgoYSxiKSA9PiBhLk5hbWUudG9Mb3dlckNhc2UoKSA+IGIuTmFtZS50b0xvd2VyQ2FzZSgpID8gMSA6IC0xKTtcclxuICAgICAgICAgICAgc2V0Q2x1YnMoamRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldFBsYXllcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYmFzZXVybCArICdwbGF5ZXJsaXN0JykudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgbGV0IGpkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KTtcclxuICAgICAgICAgICAgamRhdGEuc29ydCgoYSxiKSA9PiBhLk5hbWUudG9Mb3dlckNhc2UoKSA+IGIuTmFtZS50b0xvd2VyQ2FzZSgpID8gMSA6IC0xKTtcclxuICAgICAgICAgICAgc2V0UGxheWVycyhqZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0Q2x1Yk5pZ2h0cyA9IChjbHViaWQpID0+IHtcclxuICAgICAgICBpZiAoY2x1Yk5pZ2h0c0NsdWJJZCAhPT0gY2x1YmlkKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjbHVicy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsdWIgPSBjbHVic1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2x1Yi5JZCA9PT0gY2x1YmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2goYCR7YmFzZXVybH1jbHVibmlnaHRsaXN0Lz9jbHViaWQ9JHtjbHViaWR9YCkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgamRhdGEuc29ydCgoYSxiKSA9PiBhLkRhdGUgPiBiLkRhdGUgPyAtMSA6IDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDbHViTmlnaHRzKGpkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1Yk5pZ2h0c0NsdWJOYW1lKGNsdWIuTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENsdWJOaWdodHNDbHViSWQoY2x1Yi5JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTaG93aW5nKCdDbHViTmlnaHRzJyk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0Q2x1YkdhbWVzQnlDbHViSWQgPSAoY2x1YmlkKSA9PiB7XHJcbiAgICAgICAgaWYgKGNsdWJHYW1lc0NsdWJJZCAhPT0gY2x1YmlkKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjbHVicy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsdWIgPSBjbHVic1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2x1Yi5JZCA9PT0gY2x1YmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2goYCR7YmFzZXVybH1jbHViZ2FtZWxpc3QvP2NsdWJpZD0ke2NsdWJpZH1gKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgamRhdGEgPSBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgcGxheWVyIG5hbWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4MiA9IDA7IGluZGV4MiA8IGpkYXRhLmxlbmd0aDsgaW5kZXgyKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhbWUgPSBqZGF0YVtpbmRleDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXgzID0gMDsgaW5kZXgzIDwgcGxheWVycy5sZW5ndGg7IGluZGV4MysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyID0gcGxheWVyc1tpbmRleDNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLlBsYXllcklkID09PSBwbGF5ZXIuSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5QbGF5ZXJOYW1lID0gcGxheWVyLk5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLk9wcG9uZW50SWQgPT09IHBsYXllci5JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lLk9wcG9uZW50TmFtZSA9IHBsYXllci5OYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDbHViR2FtZXMoamRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDbHViR2FtZXNDbHViTmFtZShjbHViLk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDbHViR2FtZXNDbHViSWQoY2x1Yi5JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2hvd2luZygnQ2x1YlBsYXllcnMnKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRDbHViR2FtZXNCeUNsdWJOaWdodElkID0gKGNsdWJuaWdodGlkKSA9PiB7XHJcbiAgICAgICAgaWYgKGNsdWJHYW1lc0NsdWJOaWdodElkICE9PSBjbHVibmlnaHRpZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2x1Yk5pZ2h0cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsdWJuaWdodCA9IGNsdWJOaWdodHNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsdWJuaWdodC5JZCA9PT0gY2x1Ym5pZ2h0aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaChgJHtiYXNldXJsfWNsdWJnYW1lbGlzdC8/Y2x1Ym5pZ2h0aWQ9JHtjbHVibmlnaHRpZH1gKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgamRhdGEgPSBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqZGF0YS5zb3J0KChhLGIpID0+IGEuUm91bmQgLSBiLlJvdW5kKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHBsYXllciBuYW1lc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBqZGF0YS5sZW5ndGg7IGluZGV4MisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnYW1lID0gamRhdGFbaW5kZXgyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4MyA9IDA7IGluZGV4MyA8IHBsYXllcnMubGVuZ3RoOyBpbmRleDMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IHBsYXllcnNbaW5kZXgzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5QbGF5ZXJJZCA9PT0gcGxheWVyLklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuUGxheWVyTmFtZSA9IHBsYXllci5OYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5PcHBvbmVudElkID09PSBwbGF5ZXIuSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5PcHBvbmVudE5hbWUgPSBwbGF5ZXIuTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzKGpkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzQ2x1Yk5pZ2h0RGF0ZShjbHVibmlnaHQuRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENsdWJHYW1lc0NsdWJOaWdodElkKGNsdWJuaWdodC5JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2hvd2luZygnQ2x1Yk5pZ2h0R2FtZXMnKTtcclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldENsdWJzKCk7XHJcbiAgICAgICAgZ2V0UGxheWVycygpO1xyXG4gICAgICAgIHNldFNob3dpbmcoJ0NsdWJzJyk7XHJcbiAgICB9LFtdKTtcclxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgU2NyYWJibGUgQ2x1YiBEYXRhIC0ge3Nob3dpbmd9XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dpbmcgIT09ICdMb2FkaW5nJyAmJiA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbHViTGlzdCBjbHVicz17Y2x1YnN9IGdldENsdWJOaWdodHM9e2dldENsdWJOaWdodHN9IGdldENsdWJHYW1lcz17Z2V0Q2x1YkdhbWVzQnlDbHViSWR9PjwvQ2x1Ykxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHsoc2hvd2luZyA9PT0gJ0NsdWJOaWdodHMnIHx8IHNob3dpbmcgPT09ICdDbHViTmlnaHRHYW1lcycpICYmIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENsdWJOaWdodExpc3QgY2x1Yk5pZ2h0cz17Y2x1Yk5pZ2h0c30gY2x1Yk5hbWU9e2NsdWJOaWdodHNDbHViTmFtZX0gZ2V0Q2x1YkdhbWVzPXtnZXRDbHViR2FtZXNCeUNsdWJOaWdodElkfT48L0NsdWJOaWdodExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93aW5nID09PSAnQ2x1Yk5pZ2h0R2FtZXMnICYmIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENsdWJHYW1lTGlzdCBjbHViR2FtZXM9e2NsdWJHYW1lc30gY2x1YkRhdGU9e2NsdWJHYW1lc0NsdWJOaWdodERhdGV9PjwvQ2x1YkdhbWVMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7c2hvd2luZyA9PT0gJ0NsdWJQbGF5ZXJzJyAmJiA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbHViUGxheWVyTGlzdCBjbHViR2FtZXM9e2NsdWJHYW1lc30gY2x1Yk5hbWU9e2NsdWJHYW1lc0NsdWJOYW1lfT48L0NsdWJQbGF5ZXJMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcmFiYmxlQ2x1YjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==