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
        setSnat('Game created. Waiting for players to arrive.'); //setGamedata(messageData.game);
      } else if (messageData.func === 'gamejoined') {
        setSnat(`${messageData.nickname} just joined game ${messageData.gameid}.`); //setGamedata(messageData.game);
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
      children: ["Players: ", JSON.stringify(gamedata), " "]
    }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInNldFdoZXJldG8iLCJzZXRQYXJ0aWNpcGFudCIsIndzbWVzc2FnZSIsIm5pY2tuYW1lIiwiZ2FtZWlkIiwibnVtUGxheWVycyIsInNuYXQiLCJzZXRTbmF0IiwidXNlU3RhdGUiLCJnYW1lZGF0YSIsInNldEdhbWVkYXRhIiwicGxheWVycyIsImluZGV4IiwiZXZlbnRzIiwidXNlRWZmZWN0IiwibXNnIiwicHJvY2Vzc0dhbWVNZXNzYWdlIiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwidHlwZSIsImZ1bmMiLCJjb25zb2xlIiwibG9nIiwiZ2FtZSIsInN0cmluZ2lmeSIsIm1hcCIsInBsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0MsWUFBRDtBQUFhQyxnQkFBYjtBQUE2QkMsV0FBN0I7QUFBd0NDLFVBQXhDO0FBQWtEQyxRQUFsRDtBQUEwREM7QUFBMUQsQ0FBRCxLQUEyRTtBQUFBOztBQUNwRixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsK0NBQVEsQ0FBQztBQUFDRyxXQUFPLEVBQUMsQ0FBQztBQUFDQyxXQUFLLEVBQUUsQ0FBUjtBQUFXVCxjQUFRLEVBQUU7QUFBckIsS0FBRCxDQUFUO0FBQStDVSxVQUFNLEVBQUM7QUFBdEQsR0FBRCxDQUF4QztBQUNBQyxrREFBUyxDQUFDLE1BQU07QUFDWixRQUFJQyxHQUFHLEdBQUdiLFNBQVY7QUFDQSxRQUFJYSxHQUFHLEtBQUssRUFBWixFQUFnQkMsa0JBQWtCLENBQUNELEdBQUQsQ0FBbEI7QUFDakIsR0FITSxFQUdMLENBQUNiLFNBQUQsQ0FISyxDQUFUOztBQUlBLFdBQVNjLGtCQUFULENBQTRCQyxPQUE1QixFQUFxQztBQUNqQyxRQUFJQyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxPQUFYLENBQWxCOztBQUNBLFFBQUlDLFdBQVcsQ0FBQ0csSUFBWixLQUFxQixLQUF6QixFQUFnQztBQUM1QixVQUFJSCxXQUFXLENBQUNJLElBQVosS0FBcUIsYUFBekIsRUFBd0M7QUFDcENDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZTixXQUFXLENBQUNPLElBQXhCO0FBQ0FsQixlQUFPLENBQUMsOENBQUQsQ0FBUCxDQUZvQyxDQUdwQztBQUNILE9BSkQsTUFJTyxJQUFJVyxXQUFXLENBQUNJLElBQVosS0FBcUIsWUFBekIsRUFBdUM7QUFDMUNmLGVBQU8sQ0FBRSxHQUFFVyxXQUFXLENBQUNmLFFBQVMscUJBQW9CZSxXQUFXLENBQUNkLE1BQU8sR0FBaEUsQ0FBUCxDQUQwQyxDQUUxQztBQUNILE9BSE0sTUFHQTtBQUNIRyxlQUFPLENBQUUsc0JBQXFCVSxPQUFRLEVBQS9CLENBQVA7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQywwREFBZjtBQUFBLCtCQUNJO0FBQUksbUJBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUlJO0FBQUssaUJBQVMsRUFBQyxnQ0FBZjtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBQyxjQUFkO0FBQUEsa0NBQXVDYixNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFJLG1CQUFTLEVBQUMsY0FBZDtBQUFBLG1DQUF3Q0QsUUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBR0k7QUFBSSxtQkFBUyxFQUFDLGNBQWQ7QUFBQSxxQkFBOEJFLFVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFTSTtBQUFLLGlCQUFTLEVBQUMsMkNBQWY7QUFBQSwrQkFDSTtBQUFRLG1CQUFTLEVBQUMsV0FBbEI7QUFBOEIsaUJBQU8sRUFBRSxNQUFNO0FBQUNMLHNCQUFVLENBQUMsTUFBRCxDQUFWO0FBQW9CLFdBQWxFO0FBQUEsaUNBQ0k7QUFBRyxxQkFBUyxFQUFDLGdCQUFiO0FBQThCLDJCQUFZLFNBQTFDO0FBQW9ELGlCQUFLLEVBQUMsTUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFnQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJKLGVBaUJJO0FBQUEsZ0JBQUlNO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQkosZUFrQkk7QUFBQSw4QkFBYWEsSUFBSSxDQUFDTyxTQUFMLENBQWVqQixRQUFmLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxCSixFQW1CS0EsUUFBUSxDQUFDRSxPQUFULENBQWlCZ0IsR0FBakIsQ0FBc0JDLEVBQUQsaUJBQ2xCO0FBQUEsZ0JBQTZCQSxFQUFFLENBQUN6QjtBQUFoQyxPQUFTLGtCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsQ0FuQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF5QkgsQ0FoREQ7O0dBQU1KLEk7O0tBQUFBLEk7QUFrRE4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTQ3NTM3NmEwZDk2OThmNmI5MDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsganNvbiB9IGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvZnliL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBHYW1lID0gKHtzZXRXaGVyZXRvLCBzZXRQYXJ0aWNpcGFudCwgd3NtZXNzYWdlLCBuaWNrbmFtZSwgZ2FtZWlkLCBudW1QbGF5ZXJzfSkgPT4ge1xyXG4gICAgY29uc3QgW3NuYXQsIHNldFNuYXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dhbWVkYXRhLCBzZXRHYW1lZGF0YV0gPSB1c2VTdGF0ZSh7cGxheWVyczpbe2luZGV4OiAwLCBuaWNrbmFtZTogJ0xvYWRpbmcuLi4nfV0sIGV2ZW50czpbXX0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzR2FtZU1lc3NhZ2UobXNnKTtcclxuICAgICAgfSxbd3NtZXNzYWdlXSlcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gJ2Z5YicpIHtcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09ICdnYW1lY3JlYXRlZCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VEYXRhLmdhbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdCgnR2FtZSBjcmVhdGVkLiBXYWl0aW5nIGZvciBwbGF5ZXJzIHRvIGFycml2ZS4nKTtcclxuICAgICAgICAgICAgICAgIC8vc2V0R2FtZWRhdGEobWVzc2FnZURhdGEuZ2FtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gJ2dhbWVqb2luZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KGAke21lc3NhZ2VEYXRhLm5pY2tuYW1lfSBqdXN0IGpvaW5lZCBnYW1lICR7bWVzc2FnZURhdGEuZ2FtZWlkfS5gKTtcclxuICAgICAgICAgICAgICAgIC8vc2V0R2FtZWRhdGEobWVzc2FnZURhdGEuZ2FtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KGBVbmhhbmRsZWQgbWVzc2FnZTogJHttZXNzYWdlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My10ZWFsIHczLWNlbGwtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1jZWxsIHczLWNlbGwtbWlkZGxlIHczLXBhZGRpbmcgdzMtbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15SGVhZGluZ0ZvbnRcIj5GcnkgWW91ciBCcmFpbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLWNlbGwgdzMtbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udFwiPkdhbWUgaWQ6IHtnYW1laWR9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibXlDb21tb25Gb250XCI+Tmlja25hbWU6IHtuaWNrbmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJteUNvbW1vbkZvbnRcIj57bnVtUGxheWVyc30gcGxheWVyIGdhbWU8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1jZWxsIHczLXBhZGRpbmcgdzMtbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMT5HYW1lIHVuZGVyIGNvbnN0cnVjdGlvbjwvaDE+XHJcbiAgICAgICAgICAgIDxwPntzbmF0fTwvcD5cclxuICAgICAgICAgICAgPHA+UGxheWVyczoge0pTT04uc3RyaW5naWZ5KGdhbWVkYXRhKX0gPC9wPlxyXG4gICAgICAgICAgICB7Z2FtZWRhdGEucGxheWVycy5tYXAoKHBsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8cCBrZXk9e2BQbGF5ZXJ7cGwuaW5kZXh9YH0+e3BsLm5pY2tuYW1lfTwvcD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJzb3VyY2VSb290IjoiIn0=