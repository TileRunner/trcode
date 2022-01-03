self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/pb/chatSection.js":
/*!*********************************!*\
  !*** ./pages/pb/chatSection.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\chatSection.js",
    _s = $RefreshSig$();



const Chat = ({
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

  const formatTime = t => {
    let d = new Date(t);
    let h = d.getHours();
    let m = d.getMinutes();
    let f = '@';

    if (h < 10) {
      f = '0' + f;
    }

    f = f + h.toString() + ':';

    if (m < 10) {
      f = '0' + f;
    }

    f = f + m.toString();
    return f;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "ScrollableChat",
    className: "pbChat",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      className: "pbChatTable",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [msgs.map((value, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "pbChatFrom",
            children: [formatTime(value.created), " ", value.from]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "pbChatMsg",
            children: value.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 17
          }, undefined)]
        }, `ChatMessage${index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 15
        }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            colSpan: "2",
            children: nickname === "" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "Please enter nickname to use chat"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 19
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
              className: nextmsg === "" ? "pbChatInputEmpty" : "pbChatInput",
              name: "nextmsgInputArea",
              value: nextmsg,
              onChange: e => {
                setNextmsg(e.target.value);
              },
              onKeyDownCapture: handleKeyDown,
              placeholder: "chat..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 7
  }, undefined);
};

_s(Chat, "PlpOat0wYANdTrVq2/HpQ7Z/6HY=");

_c = Chat;
/* harmony default export */ __webpack_exports__["default"] = (Chat);

var _c;

$RefreshReg$(_c, "Chat");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvY2hhdFNlY3Rpb24uanMiXSwibmFtZXMiOlsiQ2hhdCIsImdhbWVpZCIsImNsaWVudCIsIm5pY2tuYW1lIiwibXNncyIsInNldE1zZ3MiLCJwYXJ0aWNpcGFudCIsIm5leHRtc2ciLCJzZXROZXh0bXNnIiwidXNlU3RhdGUiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJrZXkiLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld01zZ3MiLCJmcm9tIiwibXNnIiwic2VuZG1zZyIsInNlbmQiLCJ0eXBlIiwiY2xpZW50VHlwZSIsImZ1bmMiLCJzZW5kZXIiLCJuZXdOZXh0bXNnIiwic2xpY2UiLCJmb3JtYXRUaW1lIiwidCIsImQiLCJEYXRlIiwiaCIsImdldEhvdXJzIiwibSIsImdldE1pbnV0ZXMiLCJmIiwidG9TdHJpbmciLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwiY3JlYXRlZCIsImUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0MsUUFBTSxHQUFDLEVBQVI7QUFBWUMsUUFBWjtBQUFvQkMsVUFBcEI7QUFBOEJDLE1BQUksR0FBQyxFQUFuQztBQUF1Q0MsU0FBdkM7QUFBZ0RDLGFBQVcsR0FBQztBQUE1RCxDQUFELEtBQXFFO0FBQUE7O0FBQzlFLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsK0NBQVEsQ0FBQyxFQUFELENBQXRDOztBQUVBLFFBQU1DLGFBQWEsR0FBSUMsS0FBRCxJQUFXO0FBQy9CLFFBQUlBLEtBQUssQ0FBQ0MsR0FBTixLQUFjLE9BQWQsSUFBeUJMLE9BQU8sQ0FBQ00sTUFBUixHQUFpQixDQUE5QyxFQUFpRDtBQUMvQ0YsV0FBSyxDQUFDRyxjQUFOO0FBQ0EsVUFBSUMsT0FBTyxHQUFHLENBQUMsR0FBR1gsSUFBSixFQUFVO0FBQUNZLFlBQUksRUFB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ZUFIaEQ7QUFJRSw4QkFBZ0IsRUFBRTNCLGFBSnBCO0FBS0UseUJBQVcsRUFBQztBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNkJILENBckVEOztHQUFNVixJOztLQUFBQSxJO0FBdUVOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZhNGMyN2I5NWQ1ZDU2YmZlOGE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENoYXQgPSAoe2dhbWVpZD1cIlwiLCBjbGllbnQsIG5pY2tuYW1lLCBtc2dzPVtdLCBzZXRNc2dzLCBwYXJ0aWNpcGFudD1cIlwifSkgPT4ge1xyXG4gICAgY29uc3QgW25leHRtc2csIHNldE5leHRtc2ddID0gdXNlU3RhdGUoJycpO1xyXG4gICBcclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmIG5leHRtc2cubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IG5ld01zZ3MgPSBbLi4ubXNncywge2Zyb206IG5pY2tuYW1lLCBtc2c6IG5leHRtc2d9XVxyXG4gICAgICAgIGxldCBzZW5kbXNnID0gbmV4dG1zZztcclxuICAgICAgICBzZXRNc2dzKG5ld01zZ3MpO1xyXG4gICAgICAgIHNldE5leHRtc2coJycpO1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZSAoYmxhbmsgaWYgaW4gbG9iYnkpXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IGNsaWVudC5jbGllbnRUeXBlLCAvLyB0eXBlIG9mIGNsaWVudFxyXG4gICAgICAgICAgICBmdW5jOiBcImNoYXRcIiwgLy8gc2VuZCBjaGF0IG1lc3NhZ2VcclxuICAgICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCwgLy8gd2hvIHNlbnQgaXRcclxuICAgICAgICAgICAgc2VuZG1zZzogc2VuZG1zZyAvLyB0aGUgbWVzc2FnZSB0eXBlZCBpbiB0aGUgY2hhdFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiYgbmV4dG1zZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbmV3TmV4dG1zZyA9IG5leHRtc2cuc2xpY2UoMCxuZXh0bXNnLmxlbmd0aC0xKTtcclxuICAgICAgICBzZXROZXh0bXNnKG5ld05leHRtc2cpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBmb3JtYXRUaW1lID0gKHQpID0+IHtcclxuICAgICAgbGV0IGQgPSBuZXcgRGF0ZSh0KTtcclxuICAgICAgbGV0IGggPSBkLmdldEhvdXJzKCk7XHJcbiAgICAgIGxldCBtID0gZC5nZXRNaW51dGVzKCk7XHJcbiAgICAgIGxldCBmID0gJ0AnOyBcclxuICAgICAgaWYgKGggPCAxMCkgeyBmID0gJzAnICsgZjt9XHJcbiAgICAgIGYgPSBmICsgaC50b1N0cmluZygpICsgJzonO1xyXG4gICAgICBpZiAobSA8IDEwKSB7IGYgPSAnMCcgKyBmO31cclxuICAgICAgZiA9IGYgKyBtLnRvU3RyaW5nKCk7XHJcbiAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cIlNjcm9sbGFibGVDaGF0XCIgY2xhc3NOYW1lPVwicGJDaGF0XCI+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInBiQ2hhdFRhYmxlXCI+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHttc2dzLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPHRyIGtleT17YENoYXRNZXNzYWdlJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkNoYXRGcm9tXCI+e2Zvcm1hdFRpbWUodmFsdWUuY3JlYXRlZCl9IHt2YWx1ZS5mcm9tfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJDaGF0TXNnXCI+e3ZhbHVlLm1zZ308L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIyXCI+XHJcbiAgICAgICAgICAgICAgICB7bmlja25hbWUgPT09IFwiXCIgP1xyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5QbGVhc2UgZW50ZXIgbmlja25hbWUgdG8gdXNlIGNoYXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e25leHRtc2cgPT09IFwiXCIgPyBcInBiQ2hhdElucHV0RW1wdHlcIiA6IFwicGJDaGF0SW5wdXRcIn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmV4dG1zZ0lucHV0QXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25leHRtc2d9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0TmV4dG1zZyhlLnRhcmdldC52YWx1ZSk7fX1cclxuICAgICAgICAgICAgICAgICAgICBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY2hhdC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBDaGF0OyJdLCJzb3VyY2VSb290IjoiIn0=