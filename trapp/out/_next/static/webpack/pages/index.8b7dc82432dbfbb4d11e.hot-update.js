self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/fyb/game.js":
/*!***************************!*\
  !*** ./pages/fyb/game.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\fyb\\game.js",
    _s = $RefreshSig$();

//import { json } from "express";
 //import * as c from '../../lib/fyb/constants';

const Game = ({
  setWhereto,
  setParticipant,
  wsmessage,
  nickname,
  gameid,
  numPlayers
}) => {
  _s();

  const {
    0: snat,
    1: setSnat
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: gamedata,
    1: setGamedata
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    players: [{
      index: 0,
      nickname: 'Loading...'
    }],
    events: []
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let msg = wsmessage;
    if (msg !== '') processGameMessage(msg);
  }, [wsmessage]);

  function processGameMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.type === 'fyb') {
      if (messageData.func === 'gamecreated') {
        console.log(messageData.game);
        setSnat('Game created. Waiting for players to arrive.');
        setGamedata(messageData.game);
      } else if (messageData.func === 'gamejoined') {
        setSnat(`${messageData.nickname} just joined game ${messageData.gameid}.`);
        setGamedata(messageData.game);
      } else {
        setSnat(`Unhandled message: ${message}`);
      }
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-teal w3-cell-row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-container w3-cell w3-cell-middle w3-padding w3-mobile",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "myHeadingFont",
          children: "Fry Your Brain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-container w3-cell w3-mobile",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "myCommonFont",
          children: ["Game id: ", gameid]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "myCommonFont",
          children: ["Nickname: ", nickname]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "myCommonFont",
          children: [numPlayers, " player game"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-container w3-cell w3-padding w3-mobile",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "w3-button",
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
            lineNumber: 41,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Game under construction"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: snat
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Players:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, undefined), gamedata.players.map(pl => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: pl.nickname
    }, `Player{pl.index}`, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, undefined);
};

_s(Game, "6x0mVC5bnWVYdAd8DoYkGaMXRvE=");

_c = Game;
/* harmony default export */ __webpack_exports__["default"] = (Game);

var _c;

$RefreshReg$(_c, "Game");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInNldFdoZXJldG8iLCJzZXRQYXJ0aWNpcGFudCIsIndzbWVzc2FnZSIsIm5pY2tuYW1lIiwiZ2FtZWlkIiwibnVtUGxheWVycyIsInNuYXQiLCJzZXRTbmF0IiwidXNlU3RhdGUiLCJnYW1lZGF0YSIsInNldEdhbWVkYXRhIiwicGxheWVycyIsImluZGV4IiwiZXZlbnRzIiwidXNlRWZmZWN0IiwibXNnIiwicHJvY2Vzc0dhbWVNZXNzYWdlIiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwidHlwZSIsImZ1bmMiLCJjb25zb2xlIiwibG9nIiwiZ2FtZSIsIm1hcCIsInBsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0MsWUFBRDtBQUFhQyxnQkFBYjtBQUE2QkMsV0FBN0I7QUFBd0NDLFVBQXhDO0FBQWtEQyxRQUFsRDtBQUEwREM7QUFBMUQsQ0FBRCxLQUEyRTtBQUFBOztBQUNwRixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsK0NBQVEsQ0FBQztBQUFDRyxXQUFPLEVBQUMsQ0FBQztBQUFDQyxXQUFLLEVBQUUsQ0FBUjtBQUFXVCxjQUFRLEVBQUU7QUFBckIsS0FBRCxDQUFUO0FBQStDVSxVQUFNLEVBQUM7QUFBdEQsR0FBRCxDQUF4QztBQUNBQyxrREFBUyxDQUFDLE1BQU07QUFDWixRQUFJQyxHQUFHLEdBQUdiLFNBQVY7QUFDQSxRQUFJYSxHQUFHLEtBQUssRUFBWixFQUFnQkMsa0JBQWtCLENBQUNELEdBQUQsQ0FBbEI7QUFDakIsR0FITSxFQUdMLENBQUNiLFNBQUQsQ0FISyxDQUFUOztBQUlBLFdBQVNjLGtCQUFULENBQTRCQyxPQUE1QixFQUFxQztBQUNqQyxRQUFJQyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxPQUFYLENBQWxCOztBQUNBLFFBQUlDLFdBQVcsQ0FBQ0csSUFBWixLQUFxQixLQUF6QixFQUFnQztBQUM1QixVQUFJSCxXQUFXLENBQUNJLElBQVosS0FBcUIsYUFBekIsRUFBd0M7QUFDcENDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZTixXQUFXLENBQUNPLElBQXhCO0FBQ0FsQixlQUFPLENBQUMsOENBQUQsQ0FBUDtBQUNBRyxtQkFBVyxDQUFDUSxXQUFXLENBQUNPLElBQWIsQ0FBWDtBQUNILE9BSkQsTUFJTyxJQUFJUCxXQUFXLENBQUNJLElBQVosS0FBcUIsWUFBekIsRUFBdUM7QUFDMUNmLGVBQU8sQ0FBRSxHQUFFVyxXQUFXLENBQUNmLFFBQVMscUJBQW9CZSxXQUFXLENBQUNkLE1BQU8sR0FBaEUsQ0FBUDtBQUNBTSxtQkFBVyxDQUFDUSxXQUFXLENBQUNPLElBQWIsQ0FBWDtBQUNILE9BSE0sTUFHQTtBQUNIbEIsZUFBTyxDQUFFLHNCQUFxQlUsT0FBUSxFQUEvQixDQUFQO0FBQ0g7QUFDSjtBQUNKOztBQUVELHNCQUNJO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsMERBQWY7QUFBQSwrQkFDSTtBQUFJLG1CQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSTtBQUFLLGlCQUFTLEVBQUMsZ0NBQWY7QUFBQSxnQ0FDSTtBQUFJLG1CQUFTLEVBQUMsY0FBZDtBQUFBLGtDQUF1Q2IsTUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBSSxtQkFBUyxFQUFDLGNBQWQ7QUFBQSxtQ0FBd0NELFFBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJO0FBQUksbUJBQVMsRUFBQyxjQUFkO0FBQUEscUJBQThCRSxVQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBU0k7QUFBSyxpQkFBUyxFQUFDLDJDQUFmO0FBQUEsK0JBQ0k7QUFBUSxtQkFBUyxFQUFDLFdBQWxCO0FBQThCLGlCQUFPLEVBQUUsTUFBTTtBQUFDTCxzQkFBVSxDQUFDLE1BQUQsQ0FBVjtBQUFvQixXQUFsRTtBQUFBLGlDQUNJO0FBQUcscUJBQVMsRUFBQyxnQkFBYjtBQUE4QiwyQkFBWSxTQUExQztBQUFvRCxpQkFBSyxFQUFDLE1BQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBZ0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCSixlQWlCSTtBQUFBLGdCQUFJTTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJKLGVBa0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxCSixFQW1CS0csUUFBUSxDQUFDRSxPQUFULENBQWlCZSxHQUFqQixDQUFzQkMsRUFBRCxpQkFDbEI7QUFBQSxnQkFBNkJBLEVBQUUsQ0FBQ3hCO0FBQWhDLE9BQVMsa0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESCxDQW5CTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXlCSCxDQWhERDs7R0FBTUosSTs7S0FBQUEsSTtBQWtETiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YjdkYzgyNDMyZGJmYmI0ZDExZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBqc29uIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy9pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9meWIvY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IEdhbWUgPSAoe3NldFdoZXJldG8sIHNldFBhcnRpY2lwYW50LCB3c21lc3NhZ2UsIG5pY2tuYW1lLCBnYW1laWQsIG51bVBsYXllcnN9KSA9PiB7XHJcbiAgICBjb25zdCBbc25hdCwgc2V0U25hdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ2FtZWRhdGEsIHNldEdhbWVkYXRhXSA9IHVzZVN0YXRlKHtwbGF5ZXJzOlt7aW5kZXg6IDAsIG5pY2tuYW1lOiAnTG9hZGluZy4uLid9XSwgZXZlbnRzOltdfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NHYW1lTWVzc2FnZShtc2cpO1xyXG4gICAgICB9LFt3c21lc3NhZ2VdKVxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0dhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09PSAnZnliJykge1xyXG4gICAgICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gJ2dhbWVjcmVhdGVkJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZURhdGEuZ2FtZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KCdHYW1lIGNyZWF0ZWQuIFdhaXRpbmcgZm9yIHBsYXllcnMgdG8gYXJyaXZlLicpO1xyXG4gICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobWVzc2FnZURhdGEuZ2FtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gJ2dhbWVqb2luZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KGAke21lc3NhZ2VEYXRhLm5pY2tuYW1lfSBqdXN0IGpvaW5lZCBnYW1lICR7bWVzc2FnZURhdGEuZ2FtZWlkfS5gKTtcclxuICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG1lc3NhZ2VEYXRhLmdhbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdChgVW5oYW5kbGVkIG1lc3NhZ2U6ICR7bWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtdGVhbCB3My1jZWxsLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtY2VsbCB3My1jZWxsLW1pZGRsZSB3My1wYWRkaW5nIHczLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJteUhlYWRpbmdGb250XCI+RnJ5IFlvdXIgQnJhaW48L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1jZWxsIHczLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJteUNvbW1vbkZvbnRcIj5HYW1lIGlkOiB7Z2FtZWlkfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udFwiPk5pY2tuYW1lOiB7bmlja25hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibXlDb21tb25Gb250XCI+e251bVBsYXllcnN9IHBsYXllciBnYW1lPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtY2VsbCB3My1wYWRkaW5nIHczLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDE+R2FtZSB1bmRlciBjb25zdHJ1Y3Rpb248L2gxPlxyXG4gICAgICAgICAgICA8cD57c25hdH08L3A+XHJcbiAgICAgICAgICAgIDxwPlBsYXllcnM6PC9wPlxyXG4gICAgICAgICAgICB7Z2FtZWRhdGEucGxheWVycy5tYXAoKHBsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8cCBrZXk9e2BQbGF5ZXJ7cGwuaW5kZXh9YH0+e3BsLm5pY2tuYW1lfTwvcD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJzb3VyY2VSb290IjoiIn0=