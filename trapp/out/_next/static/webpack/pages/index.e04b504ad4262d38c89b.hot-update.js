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
    console.log(`getClubGamesByClubId ${clubid}`);

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
          lineNumber: 131,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
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
            getClubGames: getClubGamesByClubId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 21
        }, undefined), clubNightsClubId > -1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clubNight__WEBPACK_IMPORTED_MODULE_3__.default, {
            clubNights: clubNights,
            clubName: clubNightsClubName,
            getClubGames: getClubGamesByClubNightId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 47
        }, undefined), clubNightsClubId > -1 && clubGamesClubNightId > -1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clubGame__WEBPACK_IMPORTED_MODULE_4__.default, {
            clubGames: clubGames,
            clubDate: clubGamesClubNightDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 76
        }, undefined), clubGamesClubId > -1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clubPlayer__WEBPACK_IMPORTED_MODULE_5__.default, {
            clubGames: clubGames,
            clubName: clubGamesClubName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 46
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 127,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2Mvc2NyYWJibGVjbHViLmpzIl0sIm5hbWVzIjpbIlNjcmFiYmxlQ2x1YiIsInNldFdoZXJldG8iLCJiYXNldXJsIiwiY2x1YnMiLCJzZXRDbHVicyIsInVzZVN0YXRlIiwicGxheWVycyIsInNldFBsYXllcnMiLCJjbHViTmlnaHRzIiwic2V0Q2x1Yk5pZ2h0cyIsImNsdWJHYW1lcyIsInNldENsdWJHYW1lcyIsImNsdWJOaWdodHNDbHViSWQiLCJzZXRDbHViTmlnaHRzQ2x1YklkIiwiY2x1Yk5pZ2h0c0NsdWJOYW1lIiwic2V0Q2x1Yk5pZ2h0c0NsdWJOYW1lIiwiY2x1YkdhbWVzQ2x1Yk5pZ2h0SWQiLCJzZXRDbHViR2FtZXNDbHViTmlnaHRJZCIsImNsdWJHYW1lc0NsdWJOaWdodERhdGUiLCJzZXRDbHViR2FtZXNDbHViTmlnaHREYXRlIiwiY2x1YkdhbWVzQ2x1YklkIiwic2V0Q2x1YkdhbWVzQ2x1YklkIiwiY2x1YkdhbWVzQ2x1Yk5hbWUiLCJzZXRDbHViR2FtZXNDbHViTmFtZSIsImdldENsdWJzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwidGV4dCIsImpkYXRhIiwiSlNPTiIsInBhcnNlIiwic29ydCIsImEiLCJiIiwiTmFtZSIsInRvTG93ZXJDYXNlIiwiZ2V0UGxheWVycyIsImdldENsdWJOaWdodHMiLCJjbHViaWQiLCJpbmRleCIsImxlbmd0aCIsImNsdWIiLCJJZCIsIkRhdGUiLCJnZXRDbHViR2FtZXNCeUNsdWJOaWdodElkIiwiZ2V0Q2x1YkdhbWVzQnlDbHViSWQiLCJjb25zb2xlIiwibG9nIiwiaW5kZXgyIiwiZ2FtZSIsImluZGV4MyIsInBsYXllciIsIlBsYXllcklkIiwiUGxheWVyTmFtZSIsIk9wcG9uZW50SWQiLCJPcHBvbmVudE5hbWUiLCJjbHVibmlnaHRpZCIsImNsdWJuaWdodCIsIlJvdW5kIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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OERBQUMsZ0RBQUQ7QUFBZ0IscUJBQVMsRUFBRVYsU0FBM0I7QUFBc0Msb0JBQVEsRUFBRVk7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVY3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFSO0FBeUJILENBakpEOztHQUFNdEIsWTs7S0FBQUEsWTtBQW1KTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMDRiNTA0YWQ0MjYyZDM4Yzg5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2x1Ykxpc3QgZnJvbSBcIi4vY2x1YlwiO1xyXG5pbXBvcnQgQ2x1Yk5pZ2h0TGlzdCBmcm9tIFwiLi9jbHViTmlnaHRcIjtcclxuaW1wb3J0IENsdWJHYW1lTGlzdCBmcm9tIFwiLi9jbHViR2FtZVwiO1xyXG5pbXBvcnQgQ2x1YlBsYXllckxpc3QgZnJvbSBcIi4vY2x1YlBsYXllclwiO1xyXG5cclxuY29uc3QgU2NyYWJibGVDbHViID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jbHViZGF0YS8nIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL2NsdWJkYXRhLyc7XHJcbiAgICBjb25zdCBbY2x1YnMsIHNldENsdWJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwbGF5ZXJzLCBzZXRQbGF5ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjbHViTmlnaHRzLCBzZXRDbHViTmlnaHRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjbHViR2FtZXMsIHNldENsdWJHYW1lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2x1Yk5pZ2h0c0NsdWJJZCwgc2V0Q2x1Yk5pZ2h0c0NsdWJJZF0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgICBjb25zdCBbY2x1Yk5pZ2h0c0NsdWJOYW1lLCBzZXRDbHViTmlnaHRzQ2x1Yk5hbWVdID0gdXNlU3RhdGUoJ05vIGNsdWIgc2VsZWN0ZWQnKTtcclxuICAgIGNvbnN0IFtjbHViR2FtZXNDbHViTmlnaHRJZCwgc2V0Q2x1YkdhbWVzQ2x1Yk5pZ2h0SWRdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgW2NsdWJHYW1lc0NsdWJOaWdodERhdGUsIHNldENsdWJHYW1lc0NsdWJOaWdodERhdGVdID0gdXNlU3RhdGUoJ05vIGNsdWIgbmlnaHQgc2VsZWN0ZWQnKTtcclxuICAgIGNvbnN0IFtjbHViR2FtZXNDbHViSWQsIHNldENsdWJHYW1lc0NsdWJJZF0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgICBjb25zdCBbY2x1YkdhbWVzQ2x1Yk5hbWUsIHNldENsdWJHYW1lc0NsdWJOYW1lXSA9IHVzZVN0YXRlKCdObyBjbHViIHNlbGVjdGVkJyk7XHJcbiAgICBjb25zdCBnZXRDbHVicyA9ICgpID0+IHtcclxuICAgICAgICBmZXRjaChiYXNldXJsICsgJ2NsdWJsaXN0JykudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgbGV0IGpkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KTtcclxuICAgICAgICAgICAgamRhdGEuc29ydCgoYSxiKSA9PiBhLk5hbWUudG9Mb3dlckNhc2UoKSA+IGIuTmFtZS50b0xvd2VyQ2FzZSgpID8gMSA6IC0xKTtcclxuICAgICAgICAgICAgc2V0Q2x1YnMoamRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldFBsYXllcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYmFzZXVybCArICdwbGF5ZXJsaXN0JykudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgbGV0IGpkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KTtcclxuICAgICAgICAgICAgamRhdGEuc29ydCgoYSxiKSA9PiBhLk5hbWUudG9Mb3dlckNhc2UoKSA+IGIuTmFtZS50b0xvd2VyQ2FzZSgpID8gMSA6IC0xKTtcclxuICAgICAgICAgICAgc2V0UGxheWVycyhqZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0Q2x1Yk5pZ2h0cyA9IChjbHViaWQpID0+IHtcclxuICAgICAgICBpZiAoY2x1Yk5pZ2h0c0NsdWJJZCAhPT0gY2x1YmlkKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjbHVicy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsdWIgPSBjbHVic1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2x1Yi5JZCA9PT0gY2x1YmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2goYCR7YmFzZXVybH1jbHVibmlnaHRsaXN0Lz9jbHViaWQ9JHtjbHViaWR9YCkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgamRhdGEuc29ydCgoYSxiKSA9PiBhLkRhdGUgPiBiLkRhdGUgPyAtMSA6IDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDbHViTmlnaHRzKGpkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1Yk5pZ2h0c0NsdWJOYW1lKGNsdWIuTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENsdWJOaWdodHNDbHViSWQoY2x1Yi5JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldENsdWJHYW1lc0J5Q2x1Yk5pZ2h0SWQoLTEpOyAvLyBDbGVhciBwcmV2aW91cyBzZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRDbHViR2FtZXNCeUNsdWJJZCA9IChjbHViaWQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZ2V0Q2x1YkdhbWVzQnlDbHViSWQgJHtjbHViaWR9YCk7XHJcbiAgICAgICAgaWYgKGNsdWJHYW1lc0NsdWJJZCAhPT0gY2x1YmlkKSB7XHJcbiAgICAgICAgICAgIGlmIChjbHViaWQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDbHViR2FtZXMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzQ2x1Yk5hbWUoJ05vIGNsdWIgc2VsZWN0ZWQuJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRDbHViR2FtZXNDbHViSWQoY2x1YmlkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2x1YnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbHViID0gY2x1YnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsdWIuSWQgPT09IGNsdWJpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoKGAke2Jhc2V1cmx9Y2x1YmdhbWVsaXN0Lz9jbHViaWQ9JHtjbHViaWR9YCkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHBsYXllciBuYW1lc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBqZGF0YS5sZW5ndGg7IGluZGV4MisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnYW1lID0gamRhdGFbaW5kZXgyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4MyA9IDA7IGluZGV4MyA8IHBsYXllcnMubGVuZ3RoOyBpbmRleDMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IHBsYXllcnNbaW5kZXgzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5QbGF5ZXJJZCA9PT0gcGxheWVyLklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuUGxheWVyTmFtZSA9IHBsYXllci5OYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5PcHBvbmVudElkID09PSBwbGF5ZXIuSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5PcHBvbmVudE5hbWUgPSBwbGF5ZXIuTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzKGpkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzQ2x1Yk5hbWUoY2x1Yi5OYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzQ2x1YklkKGNsdWIuSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRDbHViR2FtZXNCeUNsdWJOaWdodElkID0gKGNsdWJuaWdodGlkKSA9PiB7XHJcbiAgICAgICAgaWYgKGNsdWJHYW1lc0NsdWJOaWdodElkICE9PSBjbHVibmlnaHRpZCkge1xyXG4gICAgICAgICAgICBpZiAoY2x1Ym5pZ2h0aWQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDbHViR2FtZXMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzQ2x1Yk5pZ2h0RGF0ZSgnTm8gY2x1YiBuaWdodCBzZWxlY3RlZC4nKTtcclxuICAgICAgICAgICAgICAgIHNldENsdWJHYW1lc0NsdWJOaWdodElkKGNsdWJuaWdodGlkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2x1Yk5pZ2h0cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsdWJuaWdodCA9IGNsdWJOaWdodHNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsdWJuaWdodC5JZCA9PT0gY2x1Ym5pZ2h0aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaChgJHtiYXNldXJsfWNsdWJnYW1lbGlzdC8/Y2x1Ym5pZ2h0aWQ9JHtjbHVibmlnaHRpZH1gKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgamRhdGEgPSBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqZGF0YS5zb3J0KChhLGIpID0+IGEuUm91bmQgLSBiLlJvdW5kKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHBsYXllciBuYW1lc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBqZGF0YS5sZW5ndGg7IGluZGV4MisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnYW1lID0gamRhdGFbaW5kZXgyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4MyA9IDA7IGluZGV4MyA8IHBsYXllcnMubGVuZ3RoOyBpbmRleDMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IHBsYXllcnNbaW5kZXgzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5QbGF5ZXJJZCA9PT0gcGxheWVyLklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuUGxheWVyTmFtZSA9IHBsYXllci5OYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5PcHBvbmVudElkID09PSBwbGF5ZXIuSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5PcHBvbmVudE5hbWUgPSBwbGF5ZXIuTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzKGpkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2x1YkdhbWVzQ2x1Yk5pZ2h0RGF0ZShjbHVibmlnaHQuRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENsdWJHYW1lc0NsdWJOaWdodElkKGNsdWJuaWdodC5JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q2x1YnMoKTtcclxuICAgICAgICBnZXRQbGF5ZXJzKCk7XHJcbiAgICB9LFtdKTtcclxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgU2NyYWJibGUgQ2x1YiBEYXRhXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2x1Ykxpc3QgY2x1YnM9e2NsdWJzfSBnZXRDbHViTmlnaHRzPXtnZXRDbHViTmlnaHRzfSBnZXRDbHViR2FtZXM9e2dldENsdWJHYW1lc0J5Q2x1YklkfT48L0NsdWJMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjbHViTmlnaHRzQ2x1YklkID4gLTEgJiYgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2x1Yk5pZ2h0TGlzdCBjbHViTmlnaHRzPXtjbHViTmlnaHRzfSBjbHViTmFtZT17Y2x1Yk5pZ2h0c0NsdWJOYW1lfSBnZXRDbHViR2FtZXM9e2dldENsdWJHYW1lc0J5Q2x1Yk5pZ2h0SWR9PjwvQ2x1Yk5pZ2h0TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge2NsdWJOaWdodHNDbHViSWQgPiAtMSAmJiBjbHViR2FtZXNDbHViTmlnaHRJZCA+IC0xICYmIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENsdWJHYW1lTGlzdCBjbHViR2FtZXM9e2NsdWJHYW1lc30gY2x1YkRhdGU9e2NsdWJHYW1lc0NsdWJOaWdodERhdGV9PjwvQ2x1YkdhbWVMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7Y2x1YkdhbWVzQ2x1YklkID4gLTEgJiYgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2x1YlBsYXllckxpc3QgY2x1YkdhbWVzPXtjbHViR2FtZXN9IGNsdWJOYW1lPXtjbHViR2FtZXNDbHViTmFtZX0+PC9DbHViUGxheWVyTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JhYmJsZUNsdWI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=