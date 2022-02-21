self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/sc/clubPlayer.js":
/*!********************************!*\
  !*** ./pages/sc/clubPlayer.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\sc\\clubPlayer.js",
    _s = $RefreshSig$();



const ClubPlayerList = ({
  clubGames = [],
  clubName = ''
}) => {
  _s();

  const {
    0: playerTotals,
    1: setPlayerTotals
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setPlayerTotals(getTotals());
  }, []);
  const myTableSize = {
    height: '800px',
    width: 'fit-content'
  };
  const myTableScroll = {
    height: '100%',
    overflowY: 'auto'
  };

  const getTotals = () => {
    let totals = [];

    for (let index = 0; index < clubGames.length; index++) {
      const game = clubGames[index];
      let foundPlayer = false;
      let foundOpponent = false;

      for (let index2 = 0; index2 < totals.length; index2++) {
        const total = totals[index2];

        if (total.Name === game.PlayerName) {
          foundPlayer = true;
          total.For = total.For + game.PlayerScore;
          total.Against = total.Against + game.OpponentScore;

          if (game.PlayerScore > game.OpponentScore) {
            total.Wins = total.Wins + 1;
          }

          if (game.PlayerScore < game.OpponentScore) {
            total.Losses = total.Losses + 1;
          }

          if (game.PlayerScore === game.OpponentScore) {
            total.Wins = total.Wins + 0.5;
            total.Losses = total.Losses + 0.5;
          }
        }

        if (total.Name === game.OpponentName) {
          foundOpponent = true;
          total.Against = total.Against + game.PlayerScore;
          total.For = total.For + game.OpponentScore;

          if (game.PlayerScore < game.OpponentScore) {
            total.Wins = total.Wins + 1;
          }

          if (game.PlayerScore > game.OpponentScore) {
            total.Losses = total.Losses + 1;
          }

          if (game.PlayerScore === game.OpponentScore) {
            total.Wins = total.Wins + 0.5;
            total.Losses = total.Losses + 0.5;
          }
        }
      }

      if (!foundPlayer) {
        let total = {
          Name: game.PlayerName,
          For: game.PlayerScore,
          Against: game.OpponentScore,
          Wins: game.PlayerScore > game.OpponentScore ? 1 : game.PlayerScore < game.OpponentScore ? 0 : 0.5,
          Losses: game.PlayerScore < game.OpponentScore ? 1 : game.PlayerScore > game.OpponentScore ? 0 : 0.5
        };
        totals.push(total);
      }

      if (!foundOpponent) {
        let total = {
          Name: game.OpponentName,
          For: game.OpponentScore,
          Against: game.PlayerScore,
          Wins: game.PlayerScore < game.OpponentScore ? 1 : game.PlayerScore > game.OpponentScore ? 0 : 0.5,
          Losses: game.PlayerScore > game.OpponentScore ? 1 : game.PlayerScore < game.OpponentScore ? 0 : 0.5
        };
        totals.push(total);
      }
    }

    totals.sort((a, b) => a.Wins > b.Wins ? -1 : a.Wins === b.Wins ? b.For - b.Against - a.For + a.Against : a.Losses - b.Losses);
    console.log(`sorted totals ${JSON.stringify(totals)}`);
    return totals;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: ["Club Players: ", clubName]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: myTableSize,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: myTableScroll,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          className: "trTable",
          border: "1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Rank"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Player"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Wins"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Spread"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Losses"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "For"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Against"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
            children: playerTotals.map((total, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "equispaced textright",
                children: index + 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: total.Name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "textcenter",
                children: total.Wins
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "equispaced textright",
                children: total.For - total.Against
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "textcenter",
                children: total.Losses
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "equispaced textright",
                children: total.For
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "equispaced textright",
                children: total.Against
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 33
              }, undefined)]
            }, `total.${total.Name}`, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 13
  }, undefined);
};

_s(ClubPlayerList, "ZUsRwlFb0FCy4FyjrEGrDnZQKEM=");

_c = ClubPlayerList;
/* harmony default export */ __webpack_exports__["default"] = (ClubPlayerList);

var _c;

$RefreshReg$(_c, "ClubPlayerList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2MvY2x1YlBsYXllci5qcyJdLCJuYW1lcyI6WyJDbHViUGxheWVyTGlzdCIsImNsdWJHYW1lcyIsImNsdWJOYW1lIiwicGxheWVyVG90YWxzIiwic2V0UGxheWVyVG90YWxzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRUb3RhbHMiLCJteVRhYmxlU2l6ZSIsImhlaWdodCIsIndpZHRoIiwibXlUYWJsZVNjcm9sbCIsIm92ZXJmbG93WSIsInRvdGFscyIsImluZGV4IiwibGVuZ3RoIiwiZ2FtZSIsImZvdW5kUGxheWVyIiwiZm91bmRPcHBvbmVudCIsImluZGV4MiIsInRvdGFsIiwiTmFtZSIsIlBsYXllck5hbWUiLCJGb3IiLCJQbGF5ZXJTY29yZSIsIkFnYWluc3QiLCJPcHBvbmVudFNjb3JlIiwiV2lucyIsIkxvc3NlcyIsIk9wcG9uZW50TmFtZSIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsQ0FBQztBQUFDQyxXQUFTLEdBQUMsRUFBWDtBQUFlQyxVQUFRLEdBQUM7QUFBeEIsQ0FBRCxLQUFpQztBQUFBOztBQUNwRCxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUNBQyxrREFBUyxDQUFDLE1BQU07QUFDWkYsbUJBQWUsQ0FBQ0csU0FBUyxFQUFWLENBQWY7QUFDSCxHQUZRLEVBRVAsRUFGTyxDQUFUO0FBR0EsUUFBTUMsV0FBVyxHQUFHO0FBQ2hCQyxVQUFNLEVBQUUsT0FEUTtBQUVoQkMsU0FBSyxFQUFFO0FBRlMsR0FBcEI7QUFJQSxRQUFNQyxhQUFhLEdBQUc7QUFDbEJGLFVBQU0sRUFBRSxNQURVO0FBRWxCRyxhQUFTLEVBQUU7QUFGTyxHQUF0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LGM7QUFtSE4sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDAzMTYyZWQ3NTAwMDhhOGM2NWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENsdWJQbGF5ZXJMaXN0ID0gKHtjbHViR2FtZXM9W10sIGNsdWJOYW1lPScnfSkgPT4ge1xyXG4gICAgY29uc3QgW3BsYXllclRvdGFscywgc2V0UGxheWVyVG90YWxzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UGxheWVyVG90YWxzKGdldFRvdGFscygpKTtcclxuICAgIH0sW10pO1xyXG4gICAgY29uc3QgbXlUYWJsZVNpemUgPSB7XHJcbiAgICAgICAgaGVpZ2h0OiAnODAwcHgnLFxyXG4gICAgICAgIHdpZHRoOiAnZml0LWNvbnRlbnQnXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbXlUYWJsZVNjcm9sbCA9IHtcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJ1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldFRvdGFscyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgdG90YWxzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNsdWJHYW1lcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZ2FtZSA9IGNsdWJHYW1lc1tpbmRleF07XHJcbiAgICAgICAgICAgIGxldCBmb3VuZFBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgZm91bmRPcHBvbmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCB0b3RhbHMubGVuZ3RoOyBpbmRleDIrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSB0b3RhbHNbaW5kZXgyXTtcclxuICAgICAgICAgICAgICAgIGlmICh0b3RhbC5OYW1lID09PSBnYW1lLlBsYXllck5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZFBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWwuRm9yID0gdG90YWwuRm9yICsgZ2FtZS5QbGF5ZXJTY29yZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbC5BZ2FpbnN0ID0gdG90YWwuQWdhaW5zdCArIGdhbWUuT3Bwb25lbnRTY29yZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5QbGF5ZXJTY29yZSA+IGdhbWUuT3Bwb25lbnRTY29yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbC5XaW5zID0gdG90YWwuV2lucyArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLlBsYXllclNjb3JlIDwgZ2FtZS5PcHBvbmVudFNjb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsLkxvc3NlcyA9IHRvdGFsLkxvc3NlcyArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLlBsYXllclNjb3JlID09PSBnYW1lLk9wcG9uZW50U2NvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWwuV2lucyA9IHRvdGFsLldpbnMgKyAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsLkxvc3NlcyA9IHRvdGFsLkxvc3NlcyArIDAuNTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodG90YWwuTmFtZSA9PT0gZ2FtZS5PcHBvbmVudE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZE9wcG9uZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbC5BZ2FpbnN0ID0gdG90YWwuQWdhaW5zdCArIGdhbWUuUGxheWVyU2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWwuRm9yID0gdG90YWwuRm9yICsgZ2FtZS5PcHBvbmVudFNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLlBsYXllclNjb3JlIDwgZ2FtZS5PcHBvbmVudFNjb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsLldpbnMgPSB0b3RhbC5XaW5zICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuUGxheWVyU2NvcmUgPiBnYW1lLk9wcG9uZW50U2NvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWwuTG9zc2VzID0gdG90YWwuTG9zc2VzICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuUGxheWVyU2NvcmUgPT09IGdhbWUuT3Bwb25lbnRTY29yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbC5XaW5zID0gdG90YWwuV2lucyArIDAuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWwuTG9zc2VzID0gdG90YWwuTG9zc2VzICsgMC41O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWZvdW5kUGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG90YWwgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTmFtZTogZ2FtZS5QbGF5ZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIEZvcjogZ2FtZS5QbGF5ZXJTY29yZSxcclxuICAgICAgICAgICAgICAgICAgICBBZ2FpbnN0OiBnYW1lLk9wcG9uZW50U2NvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgV2luczogZ2FtZS5QbGF5ZXJTY29yZSA+IGdhbWUuT3Bwb25lbnRTY29yZSA/IDEgOiBnYW1lLlBsYXllclNjb3JlIDwgZ2FtZS5PcHBvbmVudFNjb3JlID8gMCA6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICBMb3NzZXM6IGdhbWUuUGxheWVyU2NvcmUgPCBnYW1lLk9wcG9uZW50U2NvcmUgPyAxIDogZ2FtZS5QbGF5ZXJTY29yZSA+IGdhbWUuT3Bwb25lbnRTY29yZSA/IDAgOiAwLjUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdG90YWxzLnB1c2godG90YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZm91bmRPcHBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIE5hbWU6IGdhbWUuT3Bwb25lbnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIEZvcjogZ2FtZS5PcHBvbmVudFNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgIEFnYWluc3Q6IGdhbWUuUGxheWVyU2NvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgV2luczogZ2FtZS5QbGF5ZXJTY29yZSA8IGdhbWUuT3Bwb25lbnRTY29yZSA/IDEgOiBnYW1lLlBsYXllclNjb3JlID4gZ2FtZS5PcHBvbmVudFNjb3JlID8gMCA6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICBMb3NzZXM6IGdhbWUuUGxheWVyU2NvcmUgPiBnYW1lLk9wcG9uZW50U2NvcmUgPyAxIDogZ2FtZS5QbGF5ZXJTY29yZSA8IGdhbWUuT3Bwb25lbnRTY29yZSA/IDAgOiAwLjUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdG90YWxzLnB1c2godG90YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvdGFscy5zb3J0KChhLGIpID0+IGEuV2lucyA+IGIuV2lucyA/IC0xIDogYS5XaW5zID09PSBiLldpbnMgPyBiLkZvciAtIGIuQWdhaW5zdCAtIGEuRm9yICsgYS5BZ2FpbnN0IDogYS5Mb3NzZXMgLSBiLkxvc3Nlcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHNvcnRlZCB0b3RhbHMgJHtKU09OLnN0cmluZ2lmeSh0b3RhbHMpfWApO1xyXG4gICAgICAgIHJldHVybiB0b3RhbHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgIENsdWIgUGxheWVyczoge2NsdWJOYW1lfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e215VGFibGVTaXplfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17bXlUYWJsZVNjcm9sbH0+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiIGJvcmRlcj1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SYW5rPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QbGF5ZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPldpbnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNwcmVhZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TG9zc2VzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Gb3I8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFnYWluc3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGxheWVyVG90YWxzLm1hcCgodG90YWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgdG90YWwuJHt0b3RhbC5OYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJlcXVpc3BhY2VkIHRleHRyaWdodFwiPntpbmRleCsxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0b3RhbC5OYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHRjZW50ZXJcIj57dG90YWwuV2luc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJlcXVpc3BhY2VkIHRleHRyaWdodFwiPnt0b3RhbC5Gb3IgLSB0b3RhbC5BZ2FpbnN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHRjZW50ZXJcIj57dG90YWwuTG9zc2VzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImVxdWlzcGFjZWQgdGV4dHJpZ2h0XCI+e3RvdGFsLkZvcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJlcXVpc3BhY2VkIHRleHRyaWdodFwiPnt0b3RhbC5BZ2FpbnN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsdWJQbGF5ZXJMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9