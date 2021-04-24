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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

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
        lineNumber: 9,
        columnNumber: 40
      }, undefined), "\xA0", playerTitle, "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: playerIcon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 111
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbTilerack",
      children: props.racktiles && props.racktiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
        whoseturn: props.whoseturn,
        prisonersOrGuards: props.prisonersOrGuards,
        selection: props.selection,
        tileindex: ti,
        tilevalue: t,
        onClick: () => props.onClick(ti)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined), props.whoseturn === props.prisonersOrGuards ? showActionButtons(props) : props.prisonersOrGuards !== props.prisonersOrGuards && props.moves && props.moves.length > 0 && props.allowRewind && props.moves[props.moves.length - 1].by === props.prisonersOrGuards && showActionButtonUndoLastPlay(props), props.moves && props.moves.length > 0 && props.moves[props.moves.length - 1].by !== props.prisonersOrGuards && showActionButtonAllowUndo(props)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
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
      lineNumber: 50,
      columnNumber: 13
    }, undefined)
  }, tileindex, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
        lineNumber: 58,
        columnNumber: 46
      }, undefined), "\xA0Finish Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
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
        lineNumber: 66,
        columnNumber: 50
      }, undefined), "\xA0Recall Tiles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
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
        lineNumber: 74,
        columnNumber: 50
      }, undefined), "\xA0Swap Tiles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
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
        lineNumber: 82,
        columnNumber: 50
      }, undefined), "\xA0Pass Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 9
  }, undefined);
};

_c6 = PassPlayButton;

const AllowUndoLastPlay = props => {
  return props.alreadyAllowed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbActionButtonSevere",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbActionButtonSevereText",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "report"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 60
      }, undefined), "\xA0ENABLED", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbActionButtonSevereText2",
        children: "\xA0Allow undo is now enabled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 13
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbActionButtonSevere",
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbActionButtonSevereText",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "report_problem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 60
      }, undefined), "\xA0Allow Undo Turn", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbActionButtonSevereText2",
        children: "Click to let opponent undo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 13
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
        lineNumber: 109,
        columnNumber: 56
      }, undefined), "\xA0Undo My Turn", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbActionButtonSevereText2",
        children: "Opponent has allowed undo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 108,
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
        lineNumber: 120,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
        onClick: () => props.onClickTileRecall()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
        onClick: () => props.onClickTileExchange()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
        onClick: () => props.onClickPassPlay()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 118,
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

function showActionButtonUndoLastPlay(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbActionButtonDiv",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UndoLastPlay, {
        onClick: () => props.onClickUndoLastPlay()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 141,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcGxheWVyU2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJQbGF5ZXJTZWN0aW9uIiwicHJvcHMiLCJwbGF5ZXJJY29uIiwicHJpc29uZXJzT3JHdWFyZHMiLCJwbGF5ZXJUaXRsZSIsInJhY2t0aWxlcyIsIm1hcCIsInQiLCJ0aSIsIndob3NldHVybiIsInNlbGVjdGlvbiIsIm9uQ2xpY2siLCJzaG93QWN0aW9uQnV0dG9ucyIsIm1vdmVzIiwibGVuZ3RoIiwiYWxsb3dSZXdpbmQiLCJieSIsInNob3dBY3Rpb25CdXR0b25VbmRvTGFzdFBsYXkiLCJzaG93QWN0aW9uQnV0dG9uQWxsb3dVbmRvIiwiUmFja1RpbGUiLCJzZWxlY3RlZFVuc2VsZWN0ZWQiLCJ0aWxlaW5kZXgiLCJ1Tm90VSIsInRpbGV2YWx1ZSIsInRpbGVjbGFzcyIsIkZpbmlzaFR1cm5CdXR0b24iLCJUaWxlUmVjYWxsQnV0dG9uIiwiVGlsZUV4Y2hhbmdlQnV0dG9uIiwiUGFzc1BsYXlCdXR0b24iLCJBbGxvd1VuZG9MYXN0UGxheSIsImFscmVhZHlBbGxvd2VkIiwiVW5kb0xhc3RQbGF5Iiwib25DbGlja0ZpbmlzaFR1cm4iLCJvbkNsaWNrVGlsZVJlY2FsbCIsIm9uQ2xpY2tUaWxlRXhjaGFuZ2UiLCJvbkNsaWNrUGFzc1BsYXkiLCJvbkNsaWNrQWxsb3dVbmRvIiwib25DbGlja1VuZG9MYXN0UGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUlDLEtBQUQsSUFBVztBQUM3QixRQUFNQyxVQUFVLEdBQUdELEtBQUssQ0FBQ0UsaUJBQU4sS0FBNEIsR0FBNUIsR0FBa0MsWUFBbEMsR0FBaUQsVUFBcEU7QUFDQSxRQUFNQyxXQUFXLEdBQUdILEtBQUssQ0FBQ0UsaUJBQU4sS0FBNEIsR0FBNUIsR0FBa0MsV0FBbEMsR0FBZ0QsUUFBcEU7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxzQkFB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LFVBQVA7QUFjSDs7QUFDRCxTQUFTakIseUJBQVQsQ0FBbUNqQixLQUFuQyxFQUEwQztBQUN0QyxzQkFBTztBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBLDJCQUNIO0FBQUEsNkJBQ0kscUVBQUMsaUJBQUQ7QUFBbUIsZUFBTyxFQUFFLE1BQU1BLEtBQUssQ0FBQ21DLGdCQUFOLEVBQWxDO0FBQTRELHNCQUFjLEVBQUVuQyxLQUFLLENBQUNjO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBS0g7O0FBQ0QsU0FBU0UsNEJBQVQsQ0FBc0NoQixLQUF0QyxFQUE2QztBQUN6QyxzQkFBTztBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBLDJCQUNIO0FBQUEsNkJBQ0kscUVBQUMsWUFBRDtBQUFjLGVBQU8sRUFBRSxNQUFNQSxLQUFLLENBQUNvQyxtQkFBTjtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUtIOztBQUVjckMsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGIvcHJpc29uYnJlYWsuNTMxNDBmZWIwMGQwZGE1NzQ0MjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBQbGF5ZXJTZWN0aW9uID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJJY29uID0gcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gXCJydW5fY2lyY2xlXCIgOiBcInNlY3VyaXR5XCI7XHJcbiAgICBjb25zdCBwbGF5ZXJUaXRsZSA9IHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IFwiUFJJU09ORVJTXCIgOiBcIkdVQVJEU1wiO1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllcklubmVyU2VjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e3BsYXllckljb259PC9pPiZuYnNwO3twbGF5ZXJUaXRsZX0mbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntwbGF5ZXJJY29ufTwvaT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICAgICAgey8qIEkgaGF2ZSB0byBjaGVjayBwcm9wcy5yYWNrdGlsZXMgc28gdGhlIEJ1aWxkIGRvZXMgbm90IGZhaWwgb24gJ21hcCcgdW5kZWZpbmVkICovfVxyXG4gICAgICAgICAgICB7cHJvcHMucmFja3RpbGVzICYmIHByb3BzLnJhY2t0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgICAgICAgPFJhY2tUaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgd2hvc2V0dXJuPXtwcm9wcy53aG9zZXR1cm59XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpc29uZXJzT3JHdWFyZHM9e3Byb3BzLnByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17cHJvcHMuc2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGVpbmRleD17dGl9XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZXZhbHVlPXt0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogSSBoYXZlIHRvIGNoZWNrIHByb3BzLm1vdmVzIHNvIHRoZSBCdWlsZCBkb2VzIG5vdCBmYWlsIG9uICdsZW5ndGgnIHVuZGVmaW5lZCAqL31cclxuICAgICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA/IFxyXG4gICAgICAgICAgc2hvd0FjdGlvbkJ1dHRvbnMocHJvcHMpXHJcbiAgICAgICAgOiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyAhPT0gcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgJiZcclxuICAgICAgICAgIHByb3BzLm1vdmVzICYmIHByb3BzLm1vdmVzLmxlbmd0aCA+IDAgJiYgcHJvcHMuYWxsb3dSZXdpbmQgJiZcclxuICAgICAgICAgIHByb3BzLm1vdmVzW3Byb3BzLm1vdmVzLmxlbmd0aC0xXS5ieSA9PT0gcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgJiZcclxuICAgICAgICAgIHNob3dBY3Rpb25CdXR0b25VbmRvTGFzdFBsYXkocHJvcHMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsvKiBJIGhhdmUgdG8gY2hlY2sgcHJvcHMubW92ZXMgc28gdGhlIEJ1aWxkIGRvZXMgbm90IGZhaWwgb24gJ2xlbmd0aCcgdW5kZWZpbmVkICovfVxyXG4gICAgICAgIHtwcm9wcy5tb3ZlcyAmJiBwcm9wcy5tb3Zlcy5sZW5ndGggPiAwICYmIHByb3BzLm1vdmVzW3Byb3BzLm1vdmVzLmxlbmd0aC0xXS5ieSAhPT0gcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgJiZcclxuICAgICAgICAgIHNob3dBY3Rpb25CdXR0b25BbGxvd1VuZG8ocHJvcHMpXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbmNvbnN0IFJhY2tUaWxlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFVuc2VsZWN0ZWQgPSBwcm9wcy5zZWxlY3Rpb24gPT09IHByb3BzLnRpbGVpbmRleCA/IFwiU2VsZWN0ZWQgXCIgOiBcIlVuc2VsZWN0ZWQgXCI7XHJcbiAgICBjb25zdCB1Tm90VSA9IHByb3BzLnRpbGV2YWx1ZSA9PT0gXCJRXCIgPyBcInUgXCIgOiBcIlwiO1xyXG4gICAgY29uc3QgdGlsZWNsYXNzID0gXCJwYlRpbGVPblJhY2sgXCIgKyBzZWxlY3RlZFVuc2VsZWN0ZWQgKyB1Tm90VSArIHByb3BzLnByaXNvbmVyc09yR3VhcmRzO1xyXG4gICAgY29uc3QgdGlsZWluZGV4ID0gcHJvcHMudGlsZWluZGV4O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17dGlsZWluZGV4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3RpbGVjbGFzc31cclxuICAgICAgICAgICAgb25DbGljaz17KHRpbGVpbmRleCkgPT4gcHJvcHMub25DbGljayh0aWxlaW5kZXgpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVPblJhY2tUZXh0XCI+e3Byb3BzLnRpbGV2YWx1ZX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IEZpbmlzaFR1cm5CdXR0b24gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNoZWNrPC9pPiZuYnNwO0ZpbmlzaCBUdXJuPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbiAgfTtcclxuICBcclxuY29uc3QgVGlsZVJlY2FsbEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dW5kbzwvaT4mbmJzcDtSZWNhbGwgVGlsZXM8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgVGlsZUV4Y2hhbmdlQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25UZXh0XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jYWNoZWQ8L2k+Jm5ic3A7U3dhcCBUaWxlczwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBQYXNzUGxheUJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bm90X2ludGVyZXN0ZWQ8L2k+Jm5ic3A7UGFzcyBUdXJuPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IEFsbG93VW5kb0xhc3RQbGF5ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHByb3BzLmFscmVhZHlBbGxvd2VkID9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblNldmVyZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25TZXZlcmVUZXh0XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5yZXBvcnQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7RU5BQkxFRFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dDJcIj4mbmJzcDtBbGxvdyB1bmRvIGlzIG5vdyBlbmFibGVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25TZXZlcmVcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cmVwb3J0X3Byb2JsZW08L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7QWxsb3cgVW5kbyBUdXJuXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25TZXZlcmVUZXh0MlwiPkNsaWNrIHRvIGxldCBvcHBvbmVudCB1bmRvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBVbmRvTGFzdFBsYXkgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblNldmVyZVwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblNldmVyZVRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmRlbGV0ZV9mb3JldmVyPC9pPlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7VW5kbyBNeSBUdXJuXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblNldmVyZVRleHQyXCI+T3Bwb25lbnQgaGFzIGFsbG93ZWQgdW5kbzwvc3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn07XHJcbiAgXHJcbmZ1bmN0aW9uIHNob3dBY3Rpb25CdXR0b25zKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvbkRpdlwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8RmluaXNoVHVybkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrRmluaXNoVHVybigpfSAvPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgICAgPFRpbGVSZWNhbGxCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVSZWNhbGwoKX0gLz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxUaWxlRXhjaGFuZ2VCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVFeGNoYW5nZSgpfSAvPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgICAgPFBhc3NQbGF5QnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tQYXNzUGxheSgpfSAvPlxyXG4gICAgICAgIDwvcD5cclxuICAgIDwvZGl2PjtcclxufVxyXG5mdW5jdGlvbiBzaG93QWN0aW9uQnV0dG9uQWxsb3dVbmRvKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvbkRpdlwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8QWxsb3dVbmRvTGFzdFBsYXkgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja0FsbG93VW5kbygpfSBhbHJlYWR5QWxsb3dlZD17cHJvcHMuYWxsb3dSZXdpbmR9Lz5cclxuICAgICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5mdW5jdGlvbiBzaG93QWN0aW9uQnV0dG9uVW5kb0xhc3RQbGF5KHByb3BzKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvbkRpdlwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8VW5kb0xhc3RQbGF5IG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tVbmRvTGFzdFBsYXkoKX0gLz5cclxuICAgICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyU2VjdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9