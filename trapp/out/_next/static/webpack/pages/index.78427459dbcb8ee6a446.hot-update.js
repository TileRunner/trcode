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
        setSnat(`${messageData.nickname} just joined the game.`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInNldFdoZXJldG8iLCJzZXRQYXJ0aWNpcGFudCIsIndzbWVzc2FnZSIsIm5pY2tuYW1lIiwiZ2FtZWlkIiwibnVtUGxheWVycyIsInNuYXQiLCJzZXRTbmF0IiwidXNlU3RhdGUiLCJnYW1lZGF0YSIsInNldEdhbWVkYXRhIiwicGxheWVycyIsImluZGV4IiwiZXZlbnRzIiwidXNlRWZmZWN0IiwibXNnIiwicHJvY2Vzc0dhbWVNZXNzYWdlIiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwidHlwZSIsImZ1bmMiLCJjb25zb2xlIiwibG9nIiwiZ2FtZSIsIm1hcCIsInBsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0MsWUFBRDtBQUFhQyxnQkFBYjtBQUE2QkMsV0FBN0I7QUFBd0NDLFVBQXhDO0FBQWtEQyxRQUFsRDtBQUEwREM7QUFBMUQsQ0FBRCxLQUEyRTtBQUFBOztBQUNwRixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsK0NBQVEsQ0FBQztBQUFDRyxXQUFPLEVBQUMsQ0FBQztBQUFDQyxXQUFLLEVBQUUsQ0FBUjtBQUFXVCxjQUFRLEVBQUU7QUFBckIsS0FBRCxDQUFUO0FBQStDVSxVQUFNLEVBQUM7QUFBdEQsR0FBRCxDQUF4QztBQUNBQyxrREFBUyxDQUFDLE1BQU07QUFDWixRQUFJQyxHQUFHLEdBQUdiLFNBQVY7QUFDQSxRQUFJYSxHQUFHLEtBQUssRUFBWixFQUFnQkMsa0JBQWtCLENBQUNELEdBQUQsQ0FBbEI7QUFDakIsR0FITSxFQUdMLENBQUNiLFNBQUQsQ0FISyxDQUFUOztBQUlBLFdBQVNjLGtCQUFULENBQTRCQyxPQUE1QixFQUFxQztBQUNqQyxRQUFJQyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxPQUFYLENBQWxCOztBQUNBLFFBQUlDLFdBQVcsQ0FBQ0csSUFBWixLQUFxQixLQUF6QixFQUFnQztBQUM1QixVQUFJSCxXQUFXLENBQUNJLElBQVosS0FBcUIsYUFBekIsRUFBd0M7QUFDcENDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZTixXQUFXLENBQUNPLElBQXhCO0FBQ0FsQixlQUFPLENBQUMsOENBQUQsQ0FBUDtBQUNBRyxtQkFBVyxDQUFDUSxXQUFXLENBQUNPLElBQWIsQ0FBWDtBQUNILE9BSkQsTUFJTyxJQUFJUCxXQUFXLENBQUNJLElBQVosS0FBcUIsWUFBekIsRUFBdUM7QUFDMUNmLGVBQU8sQ0FBRSxHQUFFVyxXQUFXLENBQUNmLFFBQVMsd0JBQXpCLENBQVA7QUFDQU8sbUJBQVcsQ0FBQ1EsV0FBVyxDQUFDTyxJQUFiLENBQVg7QUFDSCxPQUhNLE1BR0E7QUFDSGxCLGVBQU8sQ0FBRSxzQkFBcUJVLE9BQVEsRUFBL0IsQ0FBUDtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxzQkFDSTtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLDBEQUFmO0FBQUEsK0JBQ0k7QUFBSSxtQkFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUk7QUFBSyxpQkFBUyxFQUFDLGdDQUFmO0FBQUEsZ0NBQ0k7QUFBSSxtQkFBUyxFQUFDLGNBQWQ7QUFBQSxrQ0FBdUNiLE1BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUksbUJBQVMsRUFBQyxjQUFkO0FBQUEsbUNBQXdDRCxRQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFHSTtBQUFJLG1CQUFTLEVBQUMsY0FBZDtBQUFBLHFCQUE4QkUsVUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQVNJO0FBQUssaUJBQVMsRUFBQywyQ0FBZjtBQUFBLCtCQUNJO0FBQVEsbUJBQVMsRUFBQyxXQUFsQjtBQUE4QixpQkFBTyxFQUFFLE1BQU07QUFBQ0wsc0JBQVUsQ0FBQyxNQUFELENBQVY7QUFBb0IsV0FBbEU7QUFBQSxpQ0FDSTtBQUFHLHFCQUFTLEVBQUMsZ0JBQWI7QUFBOEIsMkJBQVksU0FBMUM7QUFBb0QsaUJBQUssRUFBQyxNQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQWdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkosZUFpQkk7QUFBQSxnQkFBSU07QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCSixlQWtCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkosRUFtQktHLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQmUsR0FBakIsQ0FBc0JDLEVBQUQsaUJBQ2xCO0FBQUEsZ0JBQTZCQSxFQUFFLENBQUN4QjtBQUFoQyxPQUFTLGtCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsQ0FuQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF5QkgsQ0FoREQ7O0dBQU1KLEk7O0tBQUFBLEk7QUFrRE4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzg0Mjc0NTlkYmNiOGVlNmE0NDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsganNvbiB9IGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvZnliL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBHYW1lID0gKHtzZXRXaGVyZXRvLCBzZXRQYXJ0aWNpcGFudCwgd3NtZXNzYWdlLCBuaWNrbmFtZSwgZ2FtZWlkLCBudW1QbGF5ZXJzfSkgPT4ge1xyXG4gICAgY29uc3QgW3NuYXQsIHNldFNuYXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dhbWVkYXRhLCBzZXRHYW1lZGF0YV0gPSB1c2VTdGF0ZSh7cGxheWVyczpbe2luZGV4OiAwLCBuaWNrbmFtZTogJ0xvYWRpbmcuLi4nfV0sIGV2ZW50czpbXX0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzR2FtZU1lc3NhZ2UobXNnKTtcclxuICAgICAgfSxbd3NtZXNzYWdlXSlcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gJ2Z5YicpIHtcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09ICdnYW1lY3JlYXRlZCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VEYXRhLmdhbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdCgnR2FtZSBjcmVhdGVkLiBXYWl0aW5nIGZvciBwbGF5ZXJzIHRvIGFycml2ZS4nKTtcclxuICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG1lc3NhZ2VEYXRhLmdhbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09ICdnYW1lam9pbmVkJykge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdChgJHttZXNzYWdlRGF0YS5uaWNrbmFtZX0ganVzdCBqb2luZWQgdGhlIGdhbWUuYCk7XHJcbiAgICAgICAgICAgICAgICBzZXRHYW1lZGF0YShtZXNzYWdlRGF0YS5nYW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoYFVuaGFuZGxlZCBtZXNzYWdlOiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXRlYWwgdzMtY2VsbC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLWNlbGwgdzMtY2VsbC1taWRkbGUgdzMtcGFkZGluZyB3My1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXlIZWFkaW5nRm9udFwiPkZyeSBZb3VyIEJyYWluPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtY2VsbCB3My1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibXlDb21tb25Gb250XCI+R2FtZSBpZDoge2dhbWVpZH08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJteUNvbW1vbkZvbnRcIj5OaWNrbmFtZToge25pY2tuYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udFwiPntudW1QbGF5ZXJzfSBwbGF5ZXIgZ2FtZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLWNlbGwgdzMtcGFkZGluZyB3My1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgxPkdhbWUgdW5kZXIgY29uc3RydWN0aW9uPC9oMT5cclxuICAgICAgICAgICAgPHA+e3NuYXR9PC9wPlxyXG4gICAgICAgICAgICA8cD5QbGF5ZXJzOjwvcD5cclxuICAgICAgICAgICAge2dhbWVkYXRhLnBsYXllcnMubWFwKChwbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHAga2V5PXtgUGxheWVye3BsLmluZGV4fWB9PntwbC5uaWNrbmFtZX08L3A+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwic291cmNlUm9vdCI6IiJ9