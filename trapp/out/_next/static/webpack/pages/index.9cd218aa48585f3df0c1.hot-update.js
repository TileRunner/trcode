self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/fyb/thinChatSection.js":
/*!**************************************!*\
  !*** ./pages/fyb/thinChatSection.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\fyb\\thinChatSection.js",
    _s = $RefreshSig$();



const ThinChat = ({
  gameid = "",
  client,
  nickname,
  msgs = [],
  setMsgs,
  participant = ""
}) => {
  _s();

  const {
    0: nextmsg,
    1: setNextmsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');

  const handleKeyDown = event => {
    if (event.key === "Enter" && nextmsg.length > 0) {
      event.preventDefault();
      let newMsgs = [...msgs, {
        from: nickname,
        msg: nextmsg
      }];
      let sendmsg = nextmsg;
      setMsgs(newMsgs);
      setNextmsg('');
      client.send({
        gameid: gameid,
        // the id for the game (blank if in lobby)
        nickname: nickname,
        // player nickname
        type: client.clientType,
        // type of client
        func: "chat",
        // send chat message
        sender: participant,
        // who sent it
        sendmsg: sendmsg // the message typed in the chat

      });
      return;
    }

    if (event.key === "Backspace" && nextmsg.length > 0) {
      event.preventDefault();
      let newNextmsg = nextmsg.slice(0, nextmsg.length - 1);
      setNextmsg(newNextmsg);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "ScrollableChat",
    className: "thinChat",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [msgs.map((value, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "thinChatFrom",
              children: value.from
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 17
            }, undefined)
          }, `ChatMessageFrom${index}`, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "thinChatMsg",
              children: value.msg
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, undefined)
          }, `ChatMessageMsg${index}`, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, undefined)]
        }, void 0, true)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            colSpan: "2",
            children: nickname === "" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "Please enter nickname to use chat"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 19
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
              className: nextmsg === "" ? "thinChatInputEmpty" : "thinChatInput",
              name: "nextmsgInputArea",
              value: nextmsg,
              onChange: e => {
                setNextmsg(e.target.value);
              },
              onKeyDownCapture: handleKeyDown,
              placeholder: "chat..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 7
  }, undefined);
};

_s(ThinChat, "PlpOat0wYANdTrVq2/HpQ7Z/6HY=");

_c = ThinChat;
/* harmony default export */ __webpack_exports__["default"] = (ThinChat);

var _c;

$RefreshReg$(_c, "ThinChat");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL3RoaW5DaGF0U2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJUaGluQ2hhdCIsImdhbWVpZCIsImNsaWVudCIsIm5pY2tuYW1lIiwibXNncyIsInNldE1zZ3MiLCJwYXJ0aWNpcGFudCIsIm5leHRtc2ciLCJzZXROZXh0bXNnIiwidXNlU3RhdGUiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJrZXkiLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld01zZ3MiLCJmcm9tIiwibXNnIiwic2VuZG1zZyIsInNlbmQiLCJ0eXBlIiwiY2xpZW50VHlwZSIsImZ1bmMiLCJzZW5kZXIiLCJuZXdOZXh0bXNnIiwic2xpY2UiLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBQ0MsUUFBTSxHQUFDLEVBQVI7QUFBWUMsUUFBWjtBQUFvQkMsVUFBcEI7QUFBOEJDLE1BQUksR0FBQyxFQUFuQztBQUF1Q0MsU0FBdkM7QUFBZ0RDLGFBQVcsR0FBQztBQUE1RCxDQUFELEtBQXFFO0FBQUE7O0FBQ2xGLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsK0NBQVEsQ0FBQyxFQUFELENBQXRDOztBQUVBLFFBQU1DLGFBQWEsR0FBSUMsS0FBRCxJQUFXO0FBQy9CLFFBQUlBLEtBQUssQ0FBQ0MsR0FBTixLQUFjLE9BQWQsSUFBeUJMLE9BQU8sQ0FBQ00sTUFBUixHQUFpQixDQUE5QyxFQUFpRDtBQUMvQ0YsV0FBSyxDQUFDRyxjQUFOO0FBQ0EsVUFBSUMsT0FBTyxHQUFHLENBQUMsR0FBR1gsSUFBSixFQUFVO0FBQUNZLFlBQUksRUFBRWIsUUFBUDtBQUFpQmMsV0FBRyxFQUFFVjtBQUF0QixPQUFWLENBQWQ7QUFDQSxVQUFJVyxPQUFPLEdBQUdYLE9BQWQ7QUFDQUYsYUFBTyxDQUFDVSxPQUFELENBQVA7QUFDQVAsZ0JBQVUsQ0FBQyxFQUFELENBQVY7QUFDQU4sWUFBTSxDQUFDaUIsSUFBUCxDQUNFO0FBQ0VsQixjQUFNLEVBQUVBLE1BRFY7QUFDa0I7QUFDaEJFLGdCQUFRLEVBQUVBLFFBRlo7QUFFc0I7QUFDcEJpQixZQUFJLEVBQUVsQixNQUFNLENBQUNtQixVQUhmO0FBRzJCO0FBQ3pCQyxZQUFJLEVBQUUsTUFKUjtBQUlnQjtBQUNkQyxjQUFNLEVBQUVqQixXQUxWO0FBS3VCO0FBQ3JCWSxlQUFPLEVBQUVBLE9BTlgsQ0FNbUI7O0FBTm5CLE9BREY7QUFVQTtBQUNEOztBQUNELFFBQUlQLEtBQUssQ0FBQ0MsR0FBTixLQUFjLFdBQWQsSUFBNkJMLE9BQU8sQ0FBQ00sTUFBUixHQUFpQixDQUFsRCxFQUFxRDtBQUNuREYsV0FBSyxDQUFDRyxjQUFOO0FBQ0EsVUFBSVUsVUFBVSxHQUFHakIsT0FBTyxDQUFDa0IsS0FBUixDQUFjLENBQWQsRUFBZ0JsQixPQUFPLENBQUNNLE1BQVIsR0FBZSxDQUEvQixDQUFqQjtBQUNBTCxnQkFBVSxDQUFDZ0IsVUFBRCxDQUFWO0FBQ0Q7QUFDRixHQXhCRDs7QUEwQkEsc0JBQ0U7QUFBSyxNQUFFLEVBQUMsZ0JBQVI7QUFBeUIsYUFBUyxFQUFDLFVBQW5DO0FBQUEsMkJBQ0U7QUFBQSw2QkFDRTtBQUFBLG1CQUNHcEIsSUFBSSxDQUFDc0IsR0FBTCxDQUFTLENBQUNDLEtBQUQsRUFBUUMsS0FBUixrQkFBbUI7QUFBQSxrQ0FDM0I7QUFBQSxtQ0FDRTtBQUFJLHVCQUFTLEVBQUMsY0FBZDtBQUFBLHdCQUE4QkQsS0FBSyxDQUFDWDtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBVSxrQkFBaUJZLEtBQU0sRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEMkIsZUFJM0I7QUFBQSxtQ0FDRTtBQUFJLHVCQUFTLEVBQUMsYUFBZDtBQUFBLHdCQUE2QkQsS0FBSyxDQUFDVjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBVSxpQkFBZ0JXLEtBQU0sRUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKMkI7QUFBQSx3QkFBNUIsQ0FESCxlQVNFO0FBQUEsaUNBQ0U7QUFBSSxtQkFBTyxFQUFDLEdBQVo7QUFBQSxzQkFDR3pCLFFBQVEsS0FBSyxFQUFiLGdCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURELGdCQUdDO0FBQVUsdUJBQVMsRUFBRUksT0FBTyxLQUFLLEVBQVosR0FBaUIsb0JBQWpCLEdBQXdDLGVBQTdEO0FBQ0Usa0JBQUksRUFBQyxrQkFEUDtBQUVFLG1CQUFLLEVBQUVBLE9BRlQ7QUFHRSxzQkFBUSxFQUFHc0IsQ0FBRCxJQUFPO0FBQUNyQiwwQkFBVSxDQUFDcUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNILEtBQVYsQ0FBVjtBQUE0QixlQUhoRDtBQUlFLDhCQUFnQixFQUFFakIsYUFKcEI7QUFLRSx5QkFBVyxFQUFDO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUErQkgsQ0E1REQ7O0dBQU1WLFE7O0tBQUFBLFE7QUE4RE4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWNkMjE4YWE0ODU4NWYzZGYwYzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVGhpbkNoYXQgPSAoe2dhbWVpZD1cIlwiLCBjbGllbnQsIG5pY2tuYW1lLCBtc2dzPVtdLCBzZXRNc2dzLCBwYXJ0aWNpcGFudD1cIlwifSkgPT4ge1xyXG4gICAgY29uc3QgW25leHRtc2csIHNldE5leHRtc2ddID0gdXNlU3RhdGUoJycpO1xyXG4gICBcclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmIG5leHRtc2cubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IG5ld01zZ3MgPSBbLi4ubXNncywge2Zyb206IG5pY2tuYW1lLCBtc2c6IG5leHRtc2d9XVxyXG4gICAgICAgIGxldCBzZW5kbXNnID0gbmV4dG1zZztcclxuICAgICAgICBzZXRNc2dzKG5ld01zZ3MpO1xyXG4gICAgICAgIHNldE5leHRtc2coJycpO1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZSAoYmxhbmsgaWYgaW4gbG9iYnkpXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IGNsaWVudC5jbGllbnRUeXBlLCAvLyB0eXBlIG9mIGNsaWVudFxyXG4gICAgICAgICAgICBmdW5jOiBcImNoYXRcIiwgLy8gc2VuZCBjaGF0IG1lc3NhZ2VcclxuICAgICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCwgLy8gd2hvIHNlbnQgaXRcclxuICAgICAgICAgICAgc2VuZG1zZzogc2VuZG1zZyAvLyB0aGUgbWVzc2FnZSB0eXBlZCBpbiB0aGUgY2hhdFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiYgbmV4dG1zZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbmV3TmV4dG1zZyA9IG5leHRtc2cuc2xpY2UoMCxuZXh0bXNnLmxlbmd0aC0xKTtcclxuICAgICAgICBzZXROZXh0bXNnKG5ld05leHRtc2cpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwiU2Nyb2xsYWJsZUNoYXRcIiBjbGFzc05hbWU9XCJ0aGluQ2hhdFwiPlxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge21zZ3MubWFwKCh2YWx1ZSwgaW5kZXgpID0+ICg8PlxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2BDaGF0TWVzc2FnZUZyb20ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRoaW5DaGF0RnJvbVwiPnt2YWx1ZS5mcm9tfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHIga2V5PXtgQ2hhdE1lc3NhZ2VNc2cke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRoaW5DaGF0TXNnXCI+e3ZhbHVlLm1zZ308L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC8+KSl9XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjJcIj5cclxuICAgICAgICAgICAgICAgIHtuaWNrbmFtZSA9PT0gXCJcIiA/XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlBsZWFzZSBlbnRlciBuaWNrbmFtZSB0byB1c2UgY2hhdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17bmV4dG1zZyA9PT0gXCJcIiA/IFwidGhpbkNoYXRJbnB1dEVtcHR5XCIgOiBcInRoaW5DaGF0SW5wdXRcIn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmV4dG1zZ0lucHV0QXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25leHRtc2d9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0TmV4dG1zZyhlLnRhcmdldC52YWx1ZSk7fX1cclxuICAgICAgICAgICAgICAgICAgICBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY2hhdC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBUaGluQ2hhdDsiXSwic291cmNlUm9vdCI6IiJ9