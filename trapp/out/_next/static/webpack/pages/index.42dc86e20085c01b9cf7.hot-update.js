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
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\sc\\clubPlayer.js";

const ClubPlayerList = ({
  clubGames = [],
  clubName = ''
}) => {
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
    return totals;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: ["Club Players: ", clubName]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: myTableSize,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: myTableScroll,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          className: "trTable",
          border: "1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Round"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Player"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Opponent"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "For"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Against"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Spread"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
            children: clubPlayers.map(player => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: player.PlayerName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 33
              }, undefined)
            }, `game${player.Id}`, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 29
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trSubtitle",
          children: "Player Totals:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          className: "trTable",
          border: "1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Rank"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Player"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Wins"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Spread"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Losses"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "For"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Against"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
            children: getTotals().map((total, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "equispaced textright",
                children: index + 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: total.Name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "textcenter",
                children: total.Wins
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "equispaced textright",
                children: total.For - total.Against
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "textcenter",
                children: total.Losses
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "equispaced textright",
                children: total.For
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "equispaced textright",
                children: total.Against
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 33
              }, undefined)]
            }, `total.${total.Name}`, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 29
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 13
  }, undefined);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2MvY2x1YlBsYXllci5qcyJdLCJuYW1lcyI6WyJDbHViUGxheWVyTGlzdCIsImNsdWJHYW1lcyIsImNsdWJOYW1lIiwibXlUYWJsZVNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsIm15VGFibGVTY3JvbGwiLCJvdmVyZmxvd1kiLCJnZXRUb3RhbHMiLCJ0b3RhbHMiLCJpbmRleCIsImxlbmd0aCIsImdhbWUiLCJmb3VuZFBsYXllciIsImZvdW5kT3Bwb25lbnQiLCJpbmRleDIiLCJ0b3RhbCIsIk5hbWUiLCJQbGF5ZXJOYW1lIiwiRm9yIiwiUGxheWVyU2NvcmUiLCJBZ2FpbnN0IiwiT3Bwb25lbnRTY29yZSIsIldpbnMiLCJMb3NzZXMiLCJPcHBvbmVudE5hbWUiLCJwdXNoIiwic29ydCIsImEiLCJiIiwiY2x1YlBsYXllcnMiLCJtYXAiLCJwbGF5ZXIiLCJJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLGNBQWMsR0FBRyxDQUFDO0FBQUNDLFdBQVMsR0FBQyxFQUFYO0FBQWVDLFVBQVEsR0FBQztBQUF4QixDQUFELEtBQWlDO0FBQ3BELFFBQU1DLFdBQVcsR0FBRztBQUNoQkMsVUFBTSxFQUFFLE9BRFE7QUFFaEJDLFNBQUssRUFBRTtBQUZTLEdBQXBCO0FBSUEsUUFBTUMsYUFBYSxHQUFHO0FBQ2xCRixVQUFNLEVBQUUsTUFEVTtBQUVsQkcsYUFBUyxFQUFFO0FBRk8sR0FBdEI7O0FBSUEsUUFBTUMsU0FBUyxHQUFHLE1BQU07QUFDcEIsUUFBSUMsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsU0FBSyxJQUFJQyxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR1QsU0FBUyxDQUFDVSxNQUF0QyxFQUE4Q0QsS0FBSyxFQUFuRCxFQUF1RDtBQUNuRCxZQUFNRSxJQUFJLEdBQUdYLFNBQVMsQ0FBQ1MsS0FBRCxDQUF0QjtBQUNBLFVBQUlHLFdBQVcsR0FBRyxLQUFsQjtBQUNBLFVBQUlD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QkFBZDtBQUFBLDBCQUFzQ1IsS0FBSyxDQUFDRztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5KLGVBT0k7QUFBSSx5QkFBUyxFQUFDLHNCQUFkO0FBQUEsMEJBQXNDSCxLQUFLLENBQUNLO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUEo7QUFBQSxlQUFVLFNBQVFMLEtBQUssQ0FBQ0MsSUFBSyxFQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVI7QUF3REgsQ0FoSUQ7O0tBQU1qQixjO0FBa0lOLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQyZGM4NmUyMDA4NWMwMWI5Y2Y3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDbHViUGxheWVyTGlzdCA9ICh7Y2x1YkdhbWVzPVtdLCBjbHViTmFtZT0nJ30pID0+IHtcclxuICAgIGNvbnN0IG15VGFibGVTaXplID0ge1xyXG4gICAgICAgIGhlaWdodDogJzgwMHB4JyxcclxuICAgICAgICB3aWR0aDogJ2ZpdC1jb250ZW50J1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG15VGFibGVTY3JvbGwgPSB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bydcclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRUb3RhbHMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRvdGFscyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjbHViR2FtZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdhbWUgPSBjbHViR2FtZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICBsZXQgZm91bmRQbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGZvdW5kT3Bwb25lbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXgyID0gMDsgaW5kZXgyIDwgdG90YWxzLmxlbmd0aDsgaW5kZXgyKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gdG90YWxzW2luZGV4Ml07XHJcbiAgICAgICAgICAgICAgICBpZiAodG90YWwuTmFtZSA9PT0gZ2FtZS5QbGF5ZXJOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRQbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsLkZvciA9IHRvdGFsLkZvciArIGdhbWUuUGxheWVyU2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWwuQWdhaW5zdCA9IHRvdGFsLkFnYWluc3QgKyBnYW1lLk9wcG9uZW50U2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuUGxheWVyU2NvcmUgPiBnYW1lLk9wcG9uZW50U2NvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWwuV2lucyA9IHRvdGFsLldpbnMgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5QbGF5ZXJTY29yZSA8IGdhbWUuT3Bwb25lbnRTY29yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbC5Mb3NzZXMgPSB0b3RhbC5Mb3NzZXMgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5QbGF5ZXJTY29yZSA9PT0gZ2FtZS5PcHBvbmVudFNjb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsLldpbnMgPSB0b3RhbC5XaW5zICsgMC41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbC5Mb3NzZXMgPSB0b3RhbC5Mb3NzZXMgKyAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsLk5hbWUgPT09IGdhbWUuT3Bwb25lbnROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRPcHBvbmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWwuQWdhaW5zdCA9IHRvdGFsLkFnYWluc3QgKyBnYW1lLlBsYXllclNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsLkZvciA9IHRvdGFsLkZvciArIGdhbWUuT3Bwb25lbnRTY29yZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5QbGF5ZXJTY29yZSA8IGdhbWUuT3Bwb25lbnRTY29yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbC5XaW5zID0gdG90YWwuV2lucyArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLlBsYXllclNjb3JlID4gZ2FtZS5PcHBvbmVudFNjb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsLkxvc3NlcyA9IHRvdGFsLkxvc3NlcyArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLlBsYXllclNjb3JlID09PSBnYW1lLk9wcG9uZW50U2NvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWwuV2lucyA9IHRvdGFsLldpbnMgKyAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsLkxvc3NlcyA9IHRvdGFsLkxvc3NlcyArIDAuNTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFmb3VuZFBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIE5hbWU6IGdhbWUuUGxheWVyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBGb3I6IGdhbWUuUGxheWVyU2NvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgQWdhaW5zdDogZ2FtZS5PcHBvbmVudFNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgIFdpbnM6IGdhbWUuUGxheWVyU2NvcmUgPiBnYW1lLk9wcG9uZW50U2NvcmUgPyAxIDogZ2FtZS5QbGF5ZXJTY29yZSA8IGdhbWUuT3Bwb25lbnRTY29yZSA/IDAgOiAwLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgTG9zc2VzOiBnYW1lLlBsYXllclNjb3JlIDwgZ2FtZS5PcHBvbmVudFNjb3JlID8gMSA6IGdhbWUuUGxheWVyU2NvcmUgPiBnYW1lLk9wcG9uZW50U2NvcmUgPyAwIDogMC41LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRvdGFscy5wdXNoKHRvdGFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWZvdW5kT3Bwb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBOYW1lOiBnYW1lLk9wcG9uZW50TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBGb3I6IGdhbWUuT3Bwb25lbnRTY29yZSxcclxuICAgICAgICAgICAgICAgICAgICBBZ2FpbnN0OiBnYW1lLlBsYXllclNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgIFdpbnM6IGdhbWUuUGxheWVyU2NvcmUgPCBnYW1lLk9wcG9uZW50U2NvcmUgPyAxIDogZ2FtZS5QbGF5ZXJTY29yZSA+IGdhbWUuT3Bwb25lbnRTY29yZSA/IDAgOiAwLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgTG9zc2VzOiBnYW1lLlBsYXllclNjb3JlID4gZ2FtZS5PcHBvbmVudFNjb3JlID8gMSA6IGdhbWUuUGxheWVyU2NvcmUgPCBnYW1lLk9wcG9uZW50U2NvcmUgPyAwIDogMC41LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRvdGFscy5wdXNoKHRvdGFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbHMuc29ydCgoYSxiKSA9PiBhLldpbnMgPiBiLldpbnMgPyAtMSA6IGEuV2lucyA9PT0gYi5XaW5zID8gYi5Gb3IgLSBiLkFnYWluc3QgLSBhLkZvciArIGEuQWdhaW5zdCA6IGEuTG9zc2VzIC0gYi5Mb3NzZXMpO1xyXG4gICAgICAgIHJldHVybiB0b3RhbHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgIENsdWIgUGxheWVyczoge2NsdWJOYW1lfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e215VGFibGVTaXplfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17bXlUYWJsZVNjcm9sbH0+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiIGJvcmRlcj1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Sb3VuZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGxheWVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5PcHBvbmVudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Rm9yPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BZ2FpbnN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TcHJlYWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2x1YlBsYXllcnMubWFwKHBsYXllciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgZ2FtZSR7cGxheWVyLklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cGxheWVyLlBsYXllck5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clN1YnRpdGxlXCI+UGxheWVyIFRvdGFsczo8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCIgYm9yZGVyPVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJhbms8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBsYXllcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+V2luczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3ByZWFkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Mb3NzZXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZvcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWdhaW5zdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRUb3RhbHMoKS5tYXAoKHRvdGFsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YHRvdGFsLiR7dG90YWwuTmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZXF1aXNwYWNlZCB0ZXh0cmlnaHRcIj57aW5kZXgrMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dG90YWwuTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0Y2VudGVyXCI+e3RvdGFsLldpbnN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZXF1aXNwYWNlZCB0ZXh0cmlnaHRcIj57dG90YWwuRm9yIC0gdG90YWwuQWdhaW5zdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0Y2VudGVyXCI+e3RvdGFsLkxvc3Nlc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJlcXVpc3BhY2VkIHRleHRyaWdodFwiPnt0b3RhbC5Gb3J9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZXF1aXNwYWNlZCB0ZXh0cmlnaHRcIj57dG90YWwuQWdhaW5zdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbHViUGxheWVyTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==