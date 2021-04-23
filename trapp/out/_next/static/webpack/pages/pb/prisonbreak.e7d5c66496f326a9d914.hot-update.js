webpackHotUpdate_N_E("pages/pb/prisonbreak",{

/***/ "./pages/pb/playerSection.js":
/*!***********************************!*\
  !*** ./pages/pb/playerSection.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\playerSection.js";

const PlayerSection = props => {
  const playerIcon = props.prisonersOrGuards === "P" ? "run_circle" : "security";
  const playerTitle = props.prisonersOrGuards === "P" ? "PRISONERS" : "GUARDS";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbPlayerInnerSection",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbPlayerTitle",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: playerIcon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 40
      }, undefined), "\xA0", playerTitle, "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: playerIcon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 111
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbTilerack",
      children: props.racktiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
        whoseturn: props.whoseturn,
        prisonersOrGuards: props.prisonersOrGuards,
        selection: props.selection,
        tileindex: ti,
        tilevalue: t,
        onClick: () => props.onClick(ti)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, undefined), props.whoseturn === props.prisonersOrGuards ? showActionButtons(props) : props.prisonersOrGuards !== props.prisonersOrGuards && props.moves.length > 0 && props.allowRewind && props.moves[props.moves.length - 1].by === props.prisonersOrGuards ? showActionButtonUndoLastPlay(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.moves.length > 0 && props.moves[props.moves.length - 1].by !== props.prisonersOrGuards ? showActionButtonAllowUndo(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }, undefined);
};

_c = PlayerSection;

const RackTile = props => {
  const selectedUnselected = props.selection === props.tileindex ? "Selected " : "Unselected ";
  const uNotU = props.tilevalue === "Q" ? "u " : "";
  const tileclass = "pbTileOnRack " + selectedUnselected + uNotU + props.prisonersOrGuards;
  const tileindex = props.tileindex;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: tileclass,
    onClick: tileindex => props.onClick(tileindex),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbTileOnRackText",
      children: props.tilevalue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, undefined)
  }, tileindex, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, undefined);
};

_c2 = RackTile;

const FinishTurnButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbActionButton",
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbActionButtonText",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "check"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 46
      }, undefined), "\xA0Finish Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 7
  }, undefined);
};

_c3 = FinishTurnButton;

const TileRecallButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbActionButton",
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbActionButtonText",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "undo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 50
      }, undefined), "\xA0Recall Tiles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }, undefined);
};

_c4 = TileRecallButton;

const TileExchangeButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbActionButton",
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbActionButtonText",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "cached"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 50
      }, undefined), "\xA0Swap Tiles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 9
  }, undefined);
};

_c5 = TileExchangeButton;

const PassPlayButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbActionButton",
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbActionButtonText",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "not_interested"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 50
      }, undefined), "\xA0Pass Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 9
  }, undefined);
};

_c6 = PassPlayButton;

const AllowUndoLastPlay = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbActionButtonSevere",
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbActionButtonSevereText",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "report_problem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 56
      }, undefined), "\xA0Allow Undo Turn", props.alreadyAllowed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbActionButtonSevereText2",
        children: "Allow undo is now enabled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbActionButtonSevereText2",
        children: "Click to let opponent undo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 9
  }, undefined);
};

_c7 = AllowUndoLastPlay;

const UndoLastPlay = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbActionButtonSevere",
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbActionButtonSevereText",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "delete_forever"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 56
      }, undefined), "\xA0Undo My Turn", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbActionButtonSevereText2",
        children: "Opponent has allowed undo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 9
  }, undefined);
};

_c8 = UndoLastPlay;

function showActionButtons(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbActionButtonDiv",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
        onClick: () => props.onClickFinishTurn()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
        onClick: () => props.onClickTileRecall()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
        onClick: () => props.onClickTileExchange()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
        onClick: () => props.onClickPassPlay()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 12
  }, this);
}

function showActionButtonAllowUndo(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbActionButtonDiv",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AllowUndoLastPlay, {
        onClick: () => props.onClickAllowUndo(),
        alreadyAllowed: props.allowRewind
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 12
  }, this);
}

function showActionButtonUndoLastPlay(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbActionButtonDiv",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UndoLastPlay, {
        onClick: () => props.onClickUndoLastPlay()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 12
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (PlayerSection);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "PlayerSection");
$RefreshReg$(_c2, "RackTile");
$RefreshReg$(_c3, "FinishTurnButton");
$RefreshReg$(_c4, "TileRecallButton");
$RefreshReg$(_c5, "TileExchangeButton");
$RefreshReg$(_c6, "PassPlayButton");
$RefreshReg$(_c7, "AllowUndoLastPlay");
$RefreshReg$(_c8, "UndoLastPlay");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcGxheWVyU2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJQbGF5ZXJTZWN0aW9uIiwicHJvcHMiLCJwbGF5ZXJJY29uIiwicHJpc29uZXJzT3JHdWFyZHMiLCJwbGF5ZXJUaXRsZSIsInJhY2t0aWxlcyIsIm1hcCIsInQiLCJ0aSIsIndob3NldHVybiIsInNlbGVjdGlvbiIsIm9uQ2xpY2siLCJzaG93QWN0aW9uQnV0dG9ucyIsIm1vdmVzIiwibGVuZ3RoIiwiYWxsb3dSZXdpbmQiLCJieSIsInNob3dBY3Rpb25CdXR0b25VbmRvTGFzdFBsYXkiLCJzaG93QWN0aW9uQnV0dG9uQWxsb3dVbmRvIiwiUmFja1RpbGUiLCJzZWxlY3RlZFVuc2VsZWN0ZWQiLCJ0aWxlaW5kZXgiLCJ1Tm90VSIsInRpbGV2YWx1ZSIsInRpbGVjbGFzcyIsIkZpbmlzaFR1cm5CdXR0b24iLCJUaWxlUmVjYWxsQnV0dG9uIiwiVGlsZUV4Y2hhbmdlQnV0dG9uIiwiUGFzc1BsYXlCdXR0b24iLCJBbGxvd1VuZG9MYXN0UGxheSIsImFscmVhZHlBbGxvd2VkIiwiVW5kb0xhc3RQbGF5Iiwib25DbGlja0ZpbmlzaFR1cm4iLCJvbkNsaWNrVGlsZVJlY2FsbCIsIm9uQ2xpY2tUaWxlRXhjaGFuZ2UiLCJvbkNsaWNrUGFzc1BsYXkiLCJvbkNsaWNrQWxsb3dVbmRvIiwib25DbGlja1VuZG9MYXN0UGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxhQUFhLEdBQUlDLEtBQUQsSUFBVztBQUM3QixRQUFNQyxVQUFVLEdBQUdELEtBQUssQ0FBQ0UsaUJBQU4sS0FBNEIsR0FBNUIsR0FBa0MsWUFBbEMsR0FBaUQsVUFBcEU7QUFDQSxRQUFNQyxXQUFXLEdBQUdILEtBQUssQ0FBQ0UsaUJBQU4sS0FBNEIsR0FBNUIsR0FBa0MsV0FBbEMsR0FBZ0QsUUFBcEU7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFB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QUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBS0g7O0FBQ0QsU0FBU0UsNEJBQVQsQ0FBc0NoQixLQUF0QyxFQUE2QztBQUN6QyxzQkFBTztBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBLDJCQUNIO0FBQUEsNkJBQ0kscUVBQUMsWUFBRDtBQUFjLGVBQU8sRUFBRSxNQUFNQSxLQUFLLENBQUNvQyxtQkFBTjtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUtIOztBQUVjckMsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGIvcHJpc29uYnJlYWsuZTdkNWM2NjQ5NmYzMjZhOWQ5MTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBsYXllclNlY3Rpb24gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHBsYXllckljb24gPSBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyBcInJ1bl9jaXJjbGVcIiA6IFwic2VjdXJpdHlcIjtcclxuICAgIGNvbnN0IHBsYXllclRpdGxlID0gcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gXCJQUklTT05FUlNcIiA6IFwiR1VBUkRTXCI7XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVySW5uZXJTZWN0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57cGxheWVySWNvbn08L2k+Jm5ic3A7e3BsYXllclRpdGxlfSZuYnNwOzxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e3BsYXllckljb259PC9pPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAge3Byb3BzLnJhY2t0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgICA8UmFja1RpbGVcclxuICAgICAgICAgICAgICAgIHdob3NldHVybj17cHJvcHMud2hvc2V0dXJufVxyXG4gICAgICAgICAgICAgICAgcHJpc29uZXJzT3JHdWFyZHM9e3Byb3BzLnByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uPXtwcm9wcy5zZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICB0aWxlaW5kZXg9e3RpfVxyXG4gICAgICAgICAgICAgICAgdGlsZXZhbHVlPXt0fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljayh0aSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IHByb3BzLnByaXNvbmVyc09yR3VhcmRzID8gXHJcbiAgICAgICAgICBzaG93QWN0aW9uQnV0dG9ucyhwcm9wcylcclxuICAgICAgICAgIDogcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgIT09IHByb3BzLnByaXNvbmVyc09yR3VhcmRzICYmIHByb3BzLm1vdmVzLmxlbmd0aCA+IDAgJiYgcHJvcHMuYWxsb3dSZXdpbmQgJiYgcHJvcHMubW92ZXNbcHJvcHMubW92ZXMubGVuZ3RoLTFdLmJ5ID09PSBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA/XHJcbiAgICAgICAgICBzaG93QWN0aW9uQnV0dG9uVW5kb0xhc3RQbGF5KHByb3BzKVxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgPD48Lz5cclxuICAgICAgICB9XHJcbiAgICAgICAge3Byb3BzLm1vdmVzLmxlbmd0aCA+IDAgJiYgcHJvcHMubW92ZXNbcHJvcHMubW92ZXMubGVuZ3RoLTFdLmJ5ICE9PSBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA/XHJcbiAgICAgICAgICBzaG93QWN0aW9uQnV0dG9uQWxsb3dVbmRvKHByb3BzKVxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgPD48Lz5cclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuY29uc3QgUmFja1RpbGUgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkVW5zZWxlY3RlZCA9IHByb3BzLnNlbGVjdGlvbiA9PT0gcHJvcHMudGlsZWluZGV4ID8gXCJTZWxlY3RlZCBcIiA6IFwiVW5zZWxlY3RlZCBcIjtcclxuICAgIGNvbnN0IHVOb3RVID0gcHJvcHMudGlsZXZhbHVlID09PSBcIlFcIiA/IFwidSBcIiA6IFwiXCI7XHJcbiAgICBjb25zdCB0aWxlY2xhc3MgPSBcInBiVGlsZU9uUmFjayBcIiArIHNlbGVjdGVkVW5zZWxlY3RlZCArIHVOb3RVICsgcHJvcHMucHJpc29uZXJzT3JHdWFyZHM7XHJcbiAgICBjb25zdCB0aWxlaW5kZXggPSBwcm9wcy50aWxlaW5kZXg7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXt0aWxlaW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGlsZWNsYXNzfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsodGlsZWluZGV4KSA9PiBwcm9wcy5vbkNsaWNrKHRpbGVpbmRleCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZU9uUmFja1RleHRcIj57cHJvcHMudGlsZXZhbHVlfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgRmluaXNoVHVybkJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2hlY2s8L2k+Jm5ic3A7RmluaXNoIFR1cm48L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIFxyXG5jb25zdCBUaWxlUmVjYWxsQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25UZXh0XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj51bmRvPC9pPiZuYnNwO1JlY2FsbCBUaWxlczwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBUaWxlRXhjaGFuZ2VCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNhY2hlZDwvaT4mbmJzcDtTd2FwIFRpbGVzPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IFBhc3NQbGF5QnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25UZXh0XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ub3RfaW50ZXJlc3RlZDwvaT4mbmJzcDtQYXNzIFR1cm48L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgQWxsb3dVbmRvTGFzdFBsYXkgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblNldmVyZVwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblNldmVyZVRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJlcG9ydF9wcm9ibGVtPC9pPlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7QWxsb3cgVW5kbyBUdXJuXHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuYWxyZWFkeUFsbG93ZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dDJcIj5BbGxvdyB1bmRvIGlzIG5vdyBlbmFibGVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dDJcIj5DbGljayB0byBsZXQgb3Bwb25lbnQgdW5kbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IFVuZG9MYXN0UGxheSA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZGVsZXRlX2ZvcmV2ZXI8L2k+XHJcbiAgICAgICAgICAgICAgICAmbmJzcDtVbmRvIE15IFR1cm5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dDJcIj5PcHBvbmVudCBoYXMgYWxsb3dlZCB1bmRvPC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufTtcclxuICBcclxuZnVuY3Rpb24gc2hvd0FjdGlvbkJ1dHRvbnMocHJvcHMpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uRGl2XCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxGaW5pc2hUdXJuQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tGaW5pc2hUdXJuKCl9IC8+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8VGlsZVJlY2FsbEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZVJlY2FsbCgpfSAvPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgICAgPFRpbGVFeGNoYW5nZUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZUV4Y2hhbmdlKCl9IC8+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8UGFzc1BsYXlCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1Bhc3NQbGF5KCl9IC8+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgPC9kaXY+O1xyXG59XHJcbmZ1bmN0aW9uIHNob3dBY3Rpb25CdXR0b25BbGxvd1VuZG8ocHJvcHMpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uRGl2XCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxBbGxvd1VuZG9MYXN0UGxheSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrQWxsb3dVbmRvKCl9IGFscmVhZHlBbGxvd2VkPXtwcm9wcy5hbGxvd1Jld2luZH0vPlxyXG4gICAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG59XHJcbmZ1bmN0aW9uIHNob3dBY3Rpb25CdXR0b25VbmRvTGFzdFBsYXkocHJvcHMpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uRGl2XCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxVbmRvTGFzdFBsYXkgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1VuZG9MYXN0UGxheSgpfSAvPlxyXG4gICAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJTZWN0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=