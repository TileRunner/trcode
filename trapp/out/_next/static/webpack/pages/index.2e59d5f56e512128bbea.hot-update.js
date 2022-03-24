self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/fyb/createGame.js":
/*!*********************************!*\
  !*** ./pages/fyb/createGame.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/fyb/constants */ "./lib/fyb/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\fyb\\createGame.js",
    _s = $RefreshSig$();




const CreateGame = ({
  client,
  thisisme,
  nickname,
  gameid,
  setGameid
}) => {
  _s();

  const {
    0: numPlayers,
    1: setNumPlayers
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2); // How many players, default 2

  const {
    0: goal,
    1: setGoal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(11); // How many points needed to win, default 11

  const {
    0: validOnly,
    1: setValidOnly
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // whether guesses must be valid words

  function sendCreateGameRequest() {
    client.send({
      type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB,
      func: 'create',
      thisisme: thisisme,
      gameid: gameid,
      numPlayers: numPlayers,
      goal: goal,
      nickname: nickname,
      timestamp: Date.now(),
      validOnly: validOnly
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: "Create Game"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trOptionsDiv",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: validOnly ? "trCheckbox On" : "trCheckbox Off",
        onClick: () => {
          setValidOnly(!validOnly);
        },
        "data-toggle": "tooltip",
        title: "Whether guess must be valid words",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: "Guesses must be valid words"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      className: "trTable",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Game ID:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              name: "gameid",
              value: gameid,
              onChange: e => {
                setGameid(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "# Players:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "number",
              name: "numPlayers",
              value: numPlayers,
              onChange: e => {
                setNumPlayers(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Pts to win:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "number",
              name: "goal",
              value: goal,
              onChange: e => {
                setGoal(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, undefined), gameid && numPlayers > 1 && numPlayers < 7 && goal > 2 && goal < 22 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "trButton",
      id: "requestCreateGame",
      type: "submit",
      onClick: () => {
        let trimmed = gameid.trim();
        setGameid(trimmed);
        sendCreateGameRequest();
      },
      children: "SUBMIT"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }, undefined), !gameid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trWarning",
      children: "Game ID is required"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }, undefined), !(numPlayers > 1 && numPlayers < 7) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trWarning",
      children: "# Players is 2-6"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }, undefined), !(goal > 2 && goal < 22) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trWarning",
      children: "Pts to win is 3-21"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, undefined);
};

_s(CreateGame, "Zzi/Zk+5fbX1yp3pX6//3Eeb0gg=");

_c = CreateGame;
/* harmony default export */ __webpack_exports__["default"] = (CreateGame);

var _c;

$RefreshReg$(_c, "CreateGame");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2NyZWF0ZUdhbWUuanMiXSwibmFtZXMiOlsiQ3JlYXRlR2FtZSIsImNsaWVudCIsInRoaXNpc21lIiwibmlja25hbWUiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJudW1QbGF5ZXJzIiwic2V0TnVtUGxheWVycyIsInVzZVN0YXRlIiwiZ29hbCIsInNldEdvYWwiLCJ2YWxpZE9ubHkiLCJzZXRWYWxpZE9ubHkiLCJzZW5kQ3JlYXRlR2FtZVJlcXVlc3QiLCJzZW5kIiwidHlwZSIsImMiLCJmdW5jIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW1tZWQiLCJ0cmltIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxDQUFDO0FBQ2hCQyxRQURnQjtBQUVkQyxVQUZjO0FBR2RDLFVBSGM7QUFJZEMsUUFKYztBQUtkQztBQUxjLENBQUQsS0FNVDtBQUFBOztBQUVOLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkMsK0NBQVEsQ0FBQyxDQUFELENBQTVDLENBRk0sQ0FFMkM7O0FBQ2pELFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkYsK0NBQVEsQ0FBQyxFQUFELENBQWhDLENBSE0sQ0FHZ0M7O0FBQ3RDLFFBQU07QUFBQSxPQUFDRyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkosK0NBQVEsQ0FBQyxLQUFELENBQTFDLENBSk0sQ0FJNkM7O0FBRW5ELFdBQVNLLHFCQUFULEdBQWlDO0FBQzdCWixVQUFNLENBQUNhLElBQVAsQ0FBWTtBQUNSQyxVQUFJLEVBQUVDLCtEQURFO0FBRVJDLFVBQUksRUFBRSxRQUZFO0FBR1JmLGNBQVEsRUFBRUEsUUFIRjtBQUlSRSxZQUFNLEVBQUVBLE1BSkE7QUFLUkUsZ0JBQVUsRUFBRUEsVUFMSjtBQU1S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QUFHcEIsTUFBTSxDQUFDcUIsSUFBUCxFQUFkO0FBQ0FwQixpQkFBUyxDQUFDbUIsT0FBRCxDQUFUO0FBQ0FYLDZCQUFxQjtBQUNwQixPQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdDUixFQXlESyxDQUFDVCxNQUFELGlCQUNHO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMURSLEVBNERLLEVBQUVFLFVBQVUsR0FBRyxDQUFiLElBQWtCQSxVQUFVLEdBQUcsQ0FBakMsa0JBQ0c7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3RFIsRUErREssRUFBRUcsSUFBSSxHQUFHLENBQVAsSUFBWUEsSUFBSSxHQUFHLEVBQXJCLGtCQUNHO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEVSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBcUVILENBL0ZEOztHQUFNVCxVOztLQUFBQSxVO0FBaUdOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJlNTlkNWY1NmU1MTIxMjhiYmVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvZnliL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBDcmVhdGVHYW1lID0gKHtcclxuICAgIGNsaWVudFxyXG4gICAgLCB0aGlzaXNtZVxyXG4gICAgLCBuaWNrbmFtZVxyXG4gICAgLCBnYW1laWRcclxuICAgICwgc2V0R2FtZWlkXHJcbiAgICB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW251bVBsYXllcnMsIHNldE51bVBsYXllcnNdID0gdXNlU3RhdGUoMik7IC8vIEhvdyBtYW55IHBsYXllcnMsIGRlZmF1bHQgMlxyXG4gICAgY29uc3QgW2dvYWwsIHNldEdvYWxdID0gdXNlU3RhdGUoMTEpOyAvLyBIb3cgbWFueSBwb2ludHMgbmVlZGVkIHRvIHdpbiwgZGVmYXVsdCAxMVxyXG4gICAgY29uc3QgW3ZhbGlkT25seSwgc2V0VmFsaWRPbmx5XSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gd2hldGhlciBndWVzc2VzIG11c3QgYmUgdmFsaWQgd29yZHNcclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kQ3JlYXRlR2FtZVJlcXVlc3QoKSB7XHJcbiAgICAgICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICAgICAgZnVuYzogJ2NyZWF0ZScsXHJcbiAgICAgICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgICAgIG51bVBsYXllcnM6IG51bVBsYXllcnMsXHJcbiAgICAgICAgICAgIGdvYWw6IGdvYWwsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICB2YWxpZE9ubHk6IHZhbGlkT25seVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJTdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlIEdhbWVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJPcHRpb25zRGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dmFsaWRPbmx5ID8gXCJ0ckNoZWNrYm94IE9uXCIgOiBcInRyQ2hlY2tib3ggT2ZmXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFZhbGlkT25seSghdmFsaWRPbmx5KTt9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiV2hldGhlciBndWVzcyBtdXN0IGJlIHZhbGlkIHdvcmRzXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkd1ZXNzZXMgbXVzdCBiZSB2YWxpZCB3b3JkczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxsYWJlbD5HYW1lIElEOjwvbGFiZWw+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdhbWVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnYW1laWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9IC8+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxsYWJlbD4jIFBsYXllcnM6PC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJudW1QbGF5ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e251bVBsYXllcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyBzZXROdW1QbGF5ZXJzKGUudGFyZ2V0LnZhbHVlKTsgfSB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48bGFiZWw+UHRzIHRvIHdpbjo8L2xhYmVsPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdvYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z29hbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHNldEdvYWwoZS50YXJnZXQudmFsdWUpOyB9IH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICB7Z2FtZWlkICYmIG51bVBsYXllcnMgPiAxICYmIG51bVBsYXllcnMgPCA3ICYmIGdvYWwgPiAyICYmIGdvYWwgPCAyMiAmJlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInJlcXVlc3RDcmVhdGVHYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmltbWVkID0gZ2FtZWlkLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHRyaW1tZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kQ3JlYXRlR2FtZVJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU1VCTUlUXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IWdhbWVpZCAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cldhcm5pbmdcIj5HYW1lIElEIGlzIHJlcXVpcmVkPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeyEobnVtUGxheWVycyA+IDEgJiYgbnVtUGxheWVycyA8IDcpICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyV2FybmluZ1wiPiMgUGxheWVycyBpcyAyLTY8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IShnb2FsID4gMiAmJiBnb2FsIDwgMjIpICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyV2FybmluZ1wiPlB0cyB0byB3aW4gaXMgMy0yMTwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVHYW1lOyJdLCJzb3VyY2VSb290IjoiIn0=