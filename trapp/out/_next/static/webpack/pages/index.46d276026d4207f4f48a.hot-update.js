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
    let totals = getTotals();
    setPlayerTotals(totals);
  });
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

    totals.sort(function (a, b) {
      return a.Name < b.Name ? -1 : 1;
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2MvY2x1YlBsYXllci5qcyJdLCJuYW1lcyI6WyJDbHViUGxheWVyTGlzdCIsImNsdWJHYW1lcyIsImNsdWJOYW1lIiwicGxheWVyVG90YWxzIiwic2V0UGxheWVyVG90YWxzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0b3RhbHMiLCJnZXRUb3RhbHMiLCJteVRhYmxlU2l6ZSIsImhlaWdodCIsIndpZHRoIiwibXlUYWJsZVNjcm9sbCIsIm92ZXJmbG93WSIsImluZGV4IiwibGVuZ3RoIiwiZ2FtZSIsImZvdW5kUGxheWVyIiwiZm91bmRPcHBvbmVudCIsImluZGV4MiIsInRvdGFsIiwiTmFtZSIsIlBsYXllck5hbWUiLCJGb3IiLCJQbGF5ZXJTY29yZSIsIkFnYWluc3QiLCJPcHBvbmVudFNjb3JlIiwiV2lucyIsIkxvc3NlcyIsIk9wcG9uZW50TmFtZSIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLENBQUM7QUFBQ0MsV0FBUyxHQUFDLEVBQVg7QUFBZUMsVUFBUSxHQUFDO0FBQXhCLENBQUQsS0FBaUM7QUFBQTs7QUFDcEQsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDQywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFDQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ1osUUFBSUMsTUFBTSxHQUFHQyxTQUFTLEVBQXRCO0FBQ0FKLG1CQUFlLENBQUNHLE1BQUQsQ0FBZjtBQUNILEdBSFEsQ0FBVDtBQUlBLFFBQU1FLFdBQVcsR0FBRztBQUNoQkMsVUFBTSxFQUFFLE9BRFE7QUFFaEJDLFNBQUssRUFBRTtBQUZTLEdBQXBCO0FBSUEsUUFBTUMsYUFBYSxHQUFHO0FBQ2xCRixVQUFNLEVBQUUsTUFEVTtBQUVsQkcsYUFBUyxFQUFFO0FBRk8sR0FBdEI7O0FBSUEsUUFBTUwsU0FB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eUJBQVMsRUFBQyxZQUFkO0FBQUEsMEJBQTRCRCxLQUFLLENBQUNPO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSEosZUFJSTtBQUFJLHlCQUFTLEVBQUMsc0JBQWQ7QUFBQSwwQkFBc0NQLEtBQUssQ0FBQ0csR0FBTixHQUFZSCxLQUFLLENBQUNLO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSkosZUFLSTtBQUFJLHlCQUFTLEVBQUMsWUFBZDtBQUFBLDBCQUE0QkwsS0FBSyxDQUFDUTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUxKLGVBTUk7QUFBSSx5QkFBUyxFQUFDLHNCQUFkO0FBQUEsMEJBQXNDUixLQUFLLENBQUNHO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTkosZUFPSTtBQUFJLHlCQUFTLEVBQUMsc0JBQWQ7QUFBQSwwQkFBc0NILEtBQUssQ0FBQ0s7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQSjtBQUFBLGVBQVUsU0FBUUwsS0FBSyxDQUFDQyxJQUFLLEVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFSO0FBb0NILENBakhEOztHQUFNckIsYzs7S0FBQUEsYztBQW1ITiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NmQyNzYwMjZkNDIwN2Y0ZjQ4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ2x1YlBsYXllckxpc3QgPSAoe2NsdWJHYW1lcz1bXSwgY2x1Yk5hbWU9Jyd9KSA9PiB7XHJcbiAgICBjb25zdCBbcGxheWVyVG90YWxzLCBzZXRQbGF5ZXJUb3RhbHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgdG90YWxzID0gZ2V0VG90YWxzKCk7XHJcbiAgICAgICAgc2V0UGxheWVyVG90YWxzKHRvdGFscyk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG15VGFibGVTaXplID0ge1xyXG4gICAgICAgIGhlaWdodDogJzgwMHB4JyxcclxuICAgICAgICB3aWR0aDogJ2ZpdC1jb250ZW50J1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG15VGFibGVTY3JvbGwgPSB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bydcclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRUb3RhbHMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRvdGFscyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjbHViR2FtZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdhbWUgPSBjbHViR2FtZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICBsZXQgZm91bmRQbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGZvdW5kT3Bwb25lbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXgyID0gMDsgaW5kZXgyIDwgdG90YWxzLmxlbmd0aDsgaW5kZXgyKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gdG90YWxzW2luZGV4Ml07XHJcbiAgICAgICAgICAgICAgICBpZiAodG90YWwuTmFtZSA9PT0gZ2FtZS5QbGF5ZXJOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRQbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsLkZvciA9IHRvdGFsLkZvciArIGdhbWUuUGxheWVyU2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWwuQWdhaW5zdCA9IHRvdGFsLkFnYWluc3QgKyBnYW1lLk9wcG9uZW50U2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuUGxheWVyU2NvcmUgPiBnYW1lLk9wcG9uZW50U2NvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWwuV2lucyA9IHRvdGFsLldpbnMgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5QbGF5ZXJTY29yZSA8IGdhbWUuT3Bwb25lbnRTY29yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbC5Mb3NzZXMgPSB0b3RhbC5Mb3NzZXMgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5QbGF5ZXJTY29yZSA9PT0gZ2FtZS5PcHBvbmVudFNjb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsLldpbnMgPSB0b3RhbC5XaW5zICsgMC41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbC5Mb3NzZXMgPSB0b3RhbC5Mb3NzZXMgKyAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsLk5hbWUgPT09IGdhbWUuT3Bwb25lbnROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRPcHBvbmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWwuQWdhaW5zdCA9IHRvdGFsLkFnYWluc3QgKyBnYW1lLlBsYXllclNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsLkZvciA9IHRvdGFsLkZvciArIGdhbWUuT3Bwb25lbnRTY29yZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5QbGF5ZXJTY29yZSA8IGdhbWUuT3Bwb25lbnRTY29yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbC5XaW5zID0gdG90YWwuV2lucyArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLlBsYXllclNjb3JlID4gZ2FtZS5PcHBvbmVudFNjb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsLkxvc3NlcyA9IHRvdGFsLkxvc3NlcyArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLlBsYXllclNjb3JlID09PSBnYW1lLk9wcG9uZW50U2NvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWwuV2lucyA9IHRvdGFsLldpbnMgKyAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsLkxvc3NlcyA9IHRvdGFsLkxvc3NlcyArIDAuNTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFmb3VuZFBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIE5hbWU6IGdhbWUuUGxheWVyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBGb3I6IGdhbWUuUGxheWVyU2NvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgQWdhaW5zdDogZ2FtZS5PcHBvbmVudFNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgIFdpbnM6IGdhbWUuUGxheWVyU2NvcmUgPiBnYW1lLk9wcG9uZW50U2NvcmUgPyAxIDogZ2FtZS5QbGF5ZXJTY29yZSA8IGdhbWUuT3Bwb25lbnRTY29yZSA/IDAgOiAwLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgTG9zc2VzOiBnYW1lLlBsYXllclNjb3JlIDwgZ2FtZS5PcHBvbmVudFNjb3JlID8gMSA6IGdhbWUuUGxheWVyU2NvcmUgPiBnYW1lLk9wcG9uZW50U2NvcmUgPyAwIDogMC41LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRvdGFscy5wdXNoKHRvdGFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWZvdW5kT3Bwb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBOYW1lOiBnYW1lLk9wcG9uZW50TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBGb3I6IGdhbWUuT3Bwb25lbnRTY29yZSxcclxuICAgICAgICAgICAgICAgICAgICBBZ2FpbnN0OiBnYW1lLlBsYXllclNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgIFdpbnM6IGdhbWUuUGxheWVyU2NvcmUgPCBnYW1lLk9wcG9uZW50U2NvcmUgPyAxIDogZ2FtZS5QbGF5ZXJTY29yZSA+IGdhbWUuT3Bwb25lbnRTY29yZSA/IDAgOiAwLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgTG9zc2VzOiBnYW1lLlBsYXllclNjb3JlID4gZ2FtZS5PcHBvbmVudFNjb3JlID8gMSA6IGdhbWUuUGxheWVyU2NvcmUgPCBnYW1lLk9wcG9uZW50U2NvcmUgPyAwIDogMC41LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRvdGFscy5wdXNoKHRvdGFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbHMuc29ydChmdW5jdGlvbihhLGIpIHtyZXR1cm4gYS5OYW1lIDwgYi5OYW1lID8gLTEgOiAxO30pO1xyXG4gICAgICAgIHJldHVybiB0b3RhbHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgIENsdWIgUGxheWVyczoge2NsdWJOYW1lfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e215VGFibGVTaXplfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17bXlUYWJsZVNjcm9sbH0+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiIGJvcmRlcj1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SYW5rPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QbGF5ZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPldpbnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNwcmVhZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TG9zc2VzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Gb3I8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFnYWluc3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGxheWVyVG90YWxzLm1hcCgodG90YWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgdG90YWwuJHt0b3RhbC5OYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJlcXVpc3BhY2VkIHRleHRyaWdodFwiPntpbmRleCsxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0b3RhbC5OYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHRjZW50ZXJcIj57dG90YWwuV2luc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJlcXVpc3BhY2VkIHRleHRyaWdodFwiPnt0b3RhbC5Gb3IgLSB0b3RhbC5BZ2FpbnN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHRjZW50ZXJcIj57dG90YWwuTG9zc2VzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImVxdWlzcGFjZWQgdGV4dHJpZ2h0XCI+e3RvdGFsLkZvcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJlcXVpc3BhY2VkIHRleHRyaWdodFwiPnt0b3RhbC5BZ2FpbnN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsdWJQbGF5ZXJMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9