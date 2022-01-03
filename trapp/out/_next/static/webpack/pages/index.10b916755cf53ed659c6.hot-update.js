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
      className: "thinChatTable",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [msgs.map((value, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "thinChatFrom",
            children: value.from
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "thinChatMsg",
            children: value.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 17
          }, undefined)]
        }, `ChatMessage${index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 15
        }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            colSpan: "2",
            children: nickname === "" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "Please enter nickname to use chat"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
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
              lineNumber: 47,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL3RoaW5DaGF0U2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJUaGluQ2hhdCIsImdhbWVpZCIsImNsaWVudCIsIm5pY2tuYW1lIiwibXNncyIsInNldE1zZ3MiLCJwYXJ0aWNpcGFudCIsIm5leHRtc2ciLCJzZXROZXh0bXNnIiwidXNlU3RhdGUiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJrZXkiLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld01zZ3MiLCJmcm9tIiwibXNnIiwic2VuZG1zZyIsInNlbmQiLCJ0eXBlIiwiY2xpZW50VHlwZSIsImZ1bmMiLCJzZW5kZXIiLCJuZXdOZXh0bXNnIiwic2xpY2UiLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFDQyxRQUFNLEdBQUMsRUFBUjtBQUFZQyxRQUFaO0FBQW9CQyxVQUFwQjtBQUE4QkMsTUFBSSxHQUFDLEVBQW5DO0FBQXVDQyxTQUF2QztBQUFnREMsYUFBVyxHQUFDO0FBQTVELENBQUQsS0FBcUU7QUFBQTs7QUFDbEYsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7O0FBRUEsUUFBTUMsYUFBYSxHQUFJQyxLQUFELElBQVc7QUFDL0IsUUFBSUEsS0FBSyxDQUFDQyxHQUFOLEtBQWMsT0FBZCxJQUF5QkwsT0FBTyxDQUFDTSxNQUFSLEdBQWlCLENBQTlDLEVBQWlEO0FBQy9DRixXQUFLLENBQUNHLGNBQU47QUFDQSxVQUFJQyxPQUFPLEdBQUcsQ0FBQyxHQUFHWCxJQUFKLEVBQVU7QUFBQ1ksWUFBSSxFQUFFYixRQUFQO0FBQWlCYyxXQUFHLEVBQUVWO0FBQXRCLE9BQVYsQ0FBZDtBQUNBLFVBQUlXLE9BQU8sR0FBR1gsT0FBZDtBQUNBRixhQUFPLENBQUNVLE9BQUQsQ0FBUDtBQUNBUCxnQkFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNBTixZQUFNLENBQUNpQixJQUFQLENBQ0U7QUFDRWxCLGNBQU0sRUFBRUEsTUFEVjtBQUNrQjtBQUNoQkUsZ0JBQVEsRUFBRUEsUUFGWjtBQUVzQjtBQUNwQmlCLFlBQUksRUFBRWxCLE1BQU0sQ0FBQ21CLFVBSGY7QUFHMkI7QUFDekJDLFlBQUksRUFBRSxNQUpSO0FBSWdCO0FBQ2RDLGNBQU0sRUFBRWpCLFdBTFY7QUFLdUI7QUFDckJZLGVBQU8sRUFBRUEsT0FOWCxDQU1tQjs7QUFObkIsT0FERjtBQVVBO0FBQ0Q7O0FBQ0QsUUFBSVAsS0FBSyxDQUFDQyxHQUFOLEtBQWMsV0FBZCxJQUE2QkwsT0FBTyxDQUFDTSxNQUFSLEdBQWlCLENBQWxELEVBQXFEO0FBQ25ERixXQUFLLENBQUNHLGNBQU47QUFDQSxVQUFJVSxVQUFVLEdBQUdqQixPQUFPLENBQUNrQixLQUFSLENBQWMsQ0FBZCxFQUFnQmxCLE9BQU8sQ0FBQ00sTUFBUixHQUFlLENBQS9CLENBQWpCO0FBQ0FMLGdCQUFVLENBQUNnQixVQUFELENBQVY7QUFDRDtBQUNGLEdBeEJEOztBQTBCQSxzQkFDRTtBQUFLLE1BQUUsRUFBQyxnQkFBUjtBQUF5QixhQUFTLEVBQUMsVUFBbkM7QUFBQSwyQkFDRTtBQUFPLGVBQVMsRUFBQyxlQUFqQjtBQUFBLDZCQUNFO0FBQUEsbUJBQ0dwQixJQUFJLENBQUNzQixHQUFMLENBQVMsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLGtCQUNSO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLGNBQWQ7QUFBQSxzQkFBOEJELEtBQUssQ0FBQ1g7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUkscUJBQVMsRUFBQyxhQUFkO0FBQUEsc0JBQTZCVyxLQUFLLENBQUNWO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQSxXQUFVLGNBQWFXLEtBQU0sRUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxDQURILGVBT0U7QUFBQSxpQ0FDRTtBQUFJLG1CQUFPLEVBQUMsR0FBWjtBQUFBLHNCQUNHekIsUUFBUSxLQUFLLEVBQWIsZ0JBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQsZ0JBR0M7QUFBVSx1QkFBUyxFQUFFSSxPQUFPLEtBQUssRUFBWixHQUFpQixvQkFBakIsR0FBd0MsZUFBN0Q7QUFDRSxrQkFBSSxFQUFDLGtCQURQO0FBRUUsbUJBQUssRUFBRUEsT0FGVDtBQUdFLHNCQUFRLEVBQUdzQixDQUFELElBQU87QUFBQ3JCLDBCQUFVLENBQUNxQixDQUFDLENBQUNDLE1BQUYsQ0FBU0gsS0FBVixDQUFWO0FBQTRCLGVBSGhEO0FBSUUsOEJBQWdCLEVBQUVqQixhQUpwQjtBQUtFLHlCQUFXLEVBQUM7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTZCSCxDQTFERDs7R0FBTVYsUTs7S0FBQUEsUTtBQTRETiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMGI5MTY3NTVjZjUzZWQ2NTljNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUaGluQ2hhdCA9ICh7Z2FtZWlkPVwiXCIsIGNsaWVudCwgbmlja25hbWUsIG1zZ3M9W10sIHNldE1zZ3MsIHBhcnRpY2lwYW50PVwiXCJ9KSA9PiB7XHJcbiAgICBjb25zdCBbbmV4dG1zZywgc2V0TmV4dG1zZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgIFxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgbmV4dG1zZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbmV3TXNncyA9IFsuLi5tc2dzLCB7ZnJvbTogbmlja25hbWUsIG1zZzogbmV4dG1zZ31dXHJcbiAgICAgICAgbGV0IHNlbmRtc2cgPSBuZXh0bXNnO1xyXG4gICAgICAgIHNldE1zZ3MobmV3TXNncyk7XHJcbiAgICAgICAgc2V0TmV4dG1zZygnJyk7XHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lIChibGFuayBpZiBpbiBsb2JieSlcclxuICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgICAgdHlwZTogY2xpZW50LmNsaWVudFR5cGUsIC8vIHR5cGUgb2YgY2xpZW50XHJcbiAgICAgICAgICAgIGZ1bmM6IFwiY2hhdFwiLCAvLyBzZW5kIGNoYXQgbWVzc2FnZVxyXG4gICAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LCAvLyB3aG8gc2VudCBpdFxyXG4gICAgICAgICAgICBzZW5kbXNnOiBzZW5kbXNnIC8vIHRoZSBtZXNzYWdlIHR5cGVkIGluIHRoZSBjaGF0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJCYWNrc3BhY2VcIiAmJiBuZXh0bXNnLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBuZXdOZXh0bXNnID0gbmV4dG1zZy5zbGljZSgwLG5leHRtc2cubGVuZ3RoLTEpO1xyXG4gICAgICAgIHNldE5leHRtc2cobmV3TmV4dG1zZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJTY3JvbGxhYmxlQ2hhdFwiIGNsYXNzTmFtZT1cInRoaW5DaGF0XCI+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRoaW5DaGF0VGFibGVcIj5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge21zZ3MubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8dHIga2V5PXtgQ2hhdE1lc3NhZ2Uke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRoaW5DaGF0RnJvbVwiPnt2YWx1ZS5mcm9tfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGhpbkNoYXRNc2dcIj57dmFsdWUubXNnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjJcIj5cclxuICAgICAgICAgICAgICAgIHtuaWNrbmFtZSA9PT0gXCJcIiA/XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlBsZWFzZSBlbnRlciBuaWNrbmFtZSB0byB1c2UgY2hhdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17bmV4dG1zZyA9PT0gXCJcIiA/IFwidGhpbkNoYXRJbnB1dEVtcHR5XCIgOiBcInRoaW5DaGF0SW5wdXRcIn1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmV4dG1zZ0lucHV0QXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25leHRtc2d9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0TmV4dG1zZyhlLnRhcmdldC52YWx1ZSk7fX1cclxuICAgICAgICAgICAgICAgICAgICBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY2hhdC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBUaGluQ2hhdDsiXSwic291cmNlUm9vdCI6IiJ9