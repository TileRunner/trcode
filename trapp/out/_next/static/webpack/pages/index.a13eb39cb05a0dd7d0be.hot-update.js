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
              children: [value.created.getHours(), ":", value.created.getMinutes(), " ", value.from]
            }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL3RoaW5DaGF0U2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJUaGluQ2hhdCIsImdhbWVpZCIsImNsaWVudCIsIm5pY2tuYW1lIiwibXNncyIsInNldE1zZ3MiLCJwYXJ0aWNpcGFudCIsIm5leHRtc2ciLCJzZXROZXh0bXNnIiwidXNlU3RhdGUiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJrZXkiLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld01zZ3MiLCJmcm9tIiwibXNnIiwic2VuZG1zZyIsInNlbmQiLCJ0eXBlIiwiY2xpZW50VHlwZSIsImZ1bmMiLCJzZW5kZXIiLCJuZXdOZXh0bXNnIiwic2xpY2UiLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwiY3JlYXRlZCIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUNDLFFBQU0sR0FBQyxFQUFSO0FBQVlDLFFBQVo7QUFBb0JDLFVBQXBCO0FBQThCQyxNQUFJLEdBQUMsRUFBbkM7QUFBdUNDLFNBQXZDO0FBQWdEQyxhQUFXLEdBQUM7QUFBNUQsQ0FBRCxLQUFxRTtBQUFBOztBQUNsRixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLCtDQUFRLENBQUMsRUFBRCxDQUF0Qzs7QUFFQSxRQUFNQyxhQUFhLEdBQUlDLEtBQUQsSUFBVztBQUMvQixRQUFJQSxLQUFLLENBQUNDLEdBQU4sS0FBYyxPQUFkLElBQXlCTCxPQUFPLENBQUNNLE1BQVIsR0FBaUIsQ0FBOUMsRUFBaUQ7QUFDL0NGLFdBQUssQ0FBQ0csY0FBTjtBQUNBLFVBQUlDLE9BQU8sR0FBRyxDQUFDLEdBQUdYLElBQUosRUFBVTtBQUFDWSxZQUFJLEVBQUViLFFBQVA7QUFBaUJjLFdBQUcsRUFBRVY7QUFBdEIsT0FBVixDQUFkO0FBQ0EsVUFBSVcsT0FBTyxHQUFHWCxPQUFkO0FBQ0FGLGFBQU8sQ0FBQ1UsT0FBRCxDQUFQO0FBQ0FQLGdCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FOLFlBQU0sQ0FBQ2lCLElBQVAsQ0FDRTtBQUNFbEIsY0FBTSxFQUFFQSxNQURWO0FBQ2tCO0FBQ2hCRSxnQkFBUSxFQUFFQSxRQUZaO0FBRXNCO0FBQ3BCaUIsWUFBSSxFQUFFbEIsTUFBTSxDQUFDbUIsVUFIZjtBQUcyQjtBQUN6QkMsWUFBSSxFQUFFLE1BSlI7QUFJZ0I7QUFDZEMsY0FBTSxFQUFFakIsV0FMVjtBQUt1QjtBQUNyQlksZUFBTyxFQUFFQSxPQU5YLENBTW1COztBQU5uQixPQURGO0FBVUE7QUFDRDs7QUFDRCxRQUFJUCxLQUFLLENBQUNDLEdBQU4sS0FBYyxXQUFkLElBQTZCTCxPQUFPLENBQUNNLE1BQVIsR0FBaUIsQ0FBbEQsRUFBcUQ7QUFDbkRGLFdBQUssQ0FBQ0csY0FBTjtBQUNBLFVBQUlVLFVBQVUsR0FBR2pCLE9BQU8sQ0FBQ2tCLEtBQVIsQ0FBYyxDQUFkLEVBQWdCbEIsT0FBTyxDQUFDTSxNQUFSLEdBQWUsQ0FBL0IsQ0FBakI7QUFDQUwsZ0JBQVUsQ0FBQ2dCLFVBQUQsQ0FBVjtBQUNEO0FBQ0YsR0F4QkQ7O0FBMEJBLHNCQUNFO0FBQUssTUFBRSxFQUFDLGdCQUFSO0FBQXlCLGFBQVMsRUFBQyxVQUFuQztBQUFBLDJCQUNFO0FBQUEsNkJBQ0U7QUFBQSxtQkFDR3BCLElBQUksQ0FBQ3NCLEdBQUwsQ0FBUyxDQUFDQyxLQUFELEVBQVFDLEtBQVIsa0JBQW1CO0FBQUEsa0NBQzNCO0FBQUEsbUNBQ0U7QUFBSSx1QkFBUyxFQUFDLGNBQWQ7QUFBQSx5QkFBOEJELEtBQUssQ0FBQ0UsT0FBTixDQUFjQyxRQUFkLEVBQTlCLE9BQXlESCxLQUFLLENBQUNFLE9BQU4sQ0FBY0UsVUFBZCxFQUF6RCxPQUFzRkosS0FBSyxDQUFDWCxJQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFVLGtCQUFpQlksS0FBTSxFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUQyQixlQUkzQjtBQUFBLG1DQUNFO0FBQUksdUJBQVMsRUFBQyxhQUFkO0FBQUEsd0JBQTZCRCxLQUFLLENBQUNWO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFVLGlCQUFnQlcsS0FBTSxFQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUoyQjtBQUFBLHdCQUE1QixDQURILGVBU0U7QUFBQSxpQ0FDRTtBQUFJLG1CQUFPLEVBQUMsR0FBWjtBQUFBLHNCQUNHekIsUUFBUSxLQUFLLEVBQWIsZ0JBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQsZ0JBR0M7QUFBVSx1QkFBUyxFQUFFSSxPQUFPLEtBQUssRUFBWixHQUFpQixvQkFBakIsR0FBd0MsZUFBN0Q7QUFDRSxrQkFBSSxFQUFDLGtCQURQO0FBRUUsbUJBQUssRUFBRUEsT0FGVDtBQUdFLHNCQUFRLEVBQUd5QixDQUFELElBQU87QUFBQ3hCLDBCQUFVLENBQUN3QixDQUFDLENBQUNDLE1BQUYsQ0FBU04sS0FBVixDQUFWO0FBQTRCLGVBSGhEO0FBSUUsOEJBQWdCLEVBQUVqQixhQUpwQjtBQUtFLHlCQUFXLEVBQUM7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQStCSCxDQTVERDs7R0FBTVYsUTs7S0FBQUEsUTtBQThETiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMTNlYjM5Y2IwNWEwZGQ3ZDBiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUaGluQ2hhdCA9ICh7Z2FtZWlkPVwiXCIsIGNsaWVudCwgbmlja25hbWUsIG1zZ3M9W10sIHNldE1zZ3MsIHBhcnRpY2lwYW50PVwiXCJ9KSA9PiB7XHJcbiAgICBjb25zdCBbbmV4dG1zZywgc2V0TmV4dG1zZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgIFxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgbmV4dG1zZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbmV3TXNncyA9IFsuLi5tc2dzLCB7ZnJvbTogbmlja25hbWUsIG1zZzogbmV4dG1zZ31dXHJcbiAgICAgICAgbGV0IHNlbmRtc2cgPSBuZXh0bXNnO1xyXG4gICAgICAgIHNldE1zZ3MobmV3TXNncyk7XHJcbiAgICAgICAgc2V0TmV4dG1zZygnJyk7XHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lIChibGFuayBpZiBpbiBsb2JieSlcclxuICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgICAgdHlwZTogY2xpZW50LmNsaWVudFR5cGUsIC8vIHR5cGUgb2YgY2xpZW50XHJcbiAgICAgICAgICAgIGZ1bmM6IFwiY2hhdFwiLCAvLyBzZW5kIGNoYXQgbWVzc2FnZVxyXG4gICAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LCAvLyB3aG8gc2VudCBpdFxyXG4gICAgICAgICAgICBzZW5kbXNnOiBzZW5kbXNnIC8vIHRoZSBtZXNzYWdlIHR5cGVkIGluIHRoZSBjaGF0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJCYWNrc3BhY2VcIiAmJiBuZXh0bXNnLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBuZXdOZXh0bXNnID0gbmV4dG1zZy5zbGljZSgwLG5leHRtc2cubGVuZ3RoLTEpO1xyXG4gICAgICAgIHNldE5leHRtc2cobmV3TmV4dG1zZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJTY3JvbGxhYmxlQ2hhdFwiIGNsYXNzTmFtZT1cInRoaW5DaGF0XCI+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7bXNncy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKDw+XHJcbiAgICAgICAgICAgICAgPHRyIGtleT17YENoYXRNZXNzYWdlRnJvbSR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGhpbkNoYXRGcm9tXCI+e3ZhbHVlLmNyZWF0ZWQuZ2V0SG91cnMoKX06e3ZhbHVlLmNyZWF0ZWQuZ2V0TWludXRlcygpfSB7dmFsdWUuZnJvbX08L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyIGtleT17YENoYXRNZXNzYWdlTXNnJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0aGluQ2hhdE1zZ1wiPnt2YWx1ZS5tc2d9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvPikpfVxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIyXCI+XHJcbiAgICAgICAgICAgICAgICB7bmlja25hbWUgPT09IFwiXCIgP1xyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5QbGVhc2UgZW50ZXIgbmlja25hbWUgdG8gdXNlIGNoYXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e25leHRtc2cgPT09IFwiXCIgPyBcInRoaW5DaGF0SW5wdXRFbXB0eVwiIDogXCJ0aGluQ2hhdElucHV0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5leHRtc2dJbnB1dEFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXh0bXNnfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldE5leHRtc2coZS50YXJnZXQudmFsdWUpO319XHJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNoYXQuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgVGhpbkNoYXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==