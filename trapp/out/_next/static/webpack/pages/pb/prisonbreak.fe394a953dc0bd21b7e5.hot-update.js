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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbActionButtonSevereText2",
        children: "\xA0Allow undo is now enabled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
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
        lineNumber: 97,
        columnNumber: 60
      }, undefined), "\xA0Allow Undo Turn", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbActionButtonSevereText2",
        children: "Click to let opponent undo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 96,
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
        lineNumber: 108,
        columnNumber: 56
      }, undefined), "\xA0Undo My Turn", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbActionButtonSevereText2",
        children: "Opponent has allowed undo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 107,
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
        lineNumber: 119,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
        onClick: () => props.onClickTileRecall()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
        onClick: () => props.onClickTileExchange()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
        onClick: () => props.onClickPassPlay()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 117,
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
        lineNumber: 135,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 133,
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
        lineNumber: 142,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 140,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcGxheWVyU2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJQbGF5ZXJTZWN0aW9uIiwicHJvcHMiLCJwbGF5ZXJJY29uIiwicHJpc29uZXJzT3JHdWFyZHMiLCJwbGF5ZXJUaXRsZSIsInJhY2t0aWxlcyIsIm1hcCIsInQiLCJ0aSIsIndob3NldHVybiIsInNlbGVjdGlvbiIsIm9uQ2xpY2siLCJzaG93QWN0aW9uQnV0dG9ucyIsIm1vdmVzIiwibGVuZ3RoIiwiYWxsb3dSZXdpbmQiLCJieSIsInNob3dBY3Rpb25CdXR0b25VbmRvTGFzdFBsYXkiLCJzaG93QWN0aW9uQnV0dG9uQWxsb3dVbmRvIiwiUmFja1RpbGUiLCJzZWxlY3RlZFVuc2VsZWN0ZWQiLCJ0aWxlaW5kZXgiLCJ1Tm90VSIsInRpbGV2YWx1ZSIsInRpbGVjbGFzcyIsIkZpbmlzaFR1cm5CdXR0b24iLCJUaWxlUmVjYWxsQnV0dG9uIiwiVGlsZUV4Y2hhbmdlQnV0dG9uIiwiUGFzc1BsYXlCdXR0b24iLCJBbGxvd1VuZG9MYXN0UGxheSIsImFscmVhZHlBbGxvd2VkIiwiVW5kb0xhc3RQbGF5Iiwib25DbGlja0ZpbmlzaFR1cm4iLCJvbkNsaWNrVGlsZVJlY2FsbCIsIm9uQ2xpY2tUaWxlRXhjaGFuZ2UiLCJvbkNsaWNrUGFzc1BsYXkiLCJvbkNsaWNrQWxsb3dVbmRvIiwib25DbGlja1VuZG9MYXN0UGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUlDLEtBQUQsSUFBVztBQUM3QixRQUFNQyxVQUFVLEdBQUdELEtBQUssQ0FBQ0UsaUJBQU4sS0FBNEIsR0FBNUIsR0FBa0MsWUFBbEMsR0FBaUQsVUFBcEU7QUFDQSxRQUFNQyxXQUFXLEdBQUdILEtBQUssQ0FBQ0UsaUJBQU4sS0FBNEIsR0FBNUIsR0FBa0MsV0FBbEMsR0FBZ0QsUUFBcEU7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxzQkFB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QUFQO0FBY0g7O0FBQ0QsU0FBU2pCLHlCQUFULENBQW1DakIsS0FBbkMsRUFBMEM7QUFDdEMsc0JBQU87QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQSwyQkFDSDtBQUFBLDZCQUNJLHFFQUFDLGlCQUFEO0FBQW1CLGVBQU8sRUFBRSxNQUFNQSxLQUFLLENBQUNtQyxnQkFBTixFQUFsQztBQUE0RCxzQkFBYyxFQUFFbkMsS0FBSyxDQUFDYztBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUtIOztBQUNELFNBQVNFLDRCQUFULENBQXNDaEIsS0FBdEMsRUFBNkM7QUFDekMsc0JBQU87QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQSwyQkFDSDtBQUFBLDZCQUNJLHFFQUFDLFlBQUQ7QUFBYyxlQUFPLEVBQUUsTUFBTUEsS0FBSyxDQUFDb0MsbUJBQU47QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFLSDs7QUFFY3JDLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrLmZlMzk0YTk1M2RjMGJkMjFiN2U1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUGxheWVyU2VjdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgcGxheWVySWNvbiA9IHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IFwicnVuX2NpcmNsZVwiIDogXCJzZWN1cml0eVwiO1xyXG4gICAgY29uc3QgcGxheWVyVGl0bGUgPSBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyBcIlBSSVNPTkVSU1wiIDogXCJHVUFSRFNcIjtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJJbm5lclNlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntwbGF5ZXJJY29ufTwvaT4mbmJzcDt7cGxheWVyVGl0bGV9Jm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57cGxheWVySWNvbn08L2k+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAgICAgIHsvKiBJIGhhdmUgdG8gY2hlY2sgcHJvcHMucmFja3RpbGVzIHNvIHRoZSBCdWlsZCBkb2VzIG5vdCBmYWlsIG9uICdtYXAnIHVuZGVmaW5lZCAqL31cclxuICAgICAgICAgICAge3Byb3BzLnJhY2t0aWxlcyAmJiBwcm9wcy5yYWNrdGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgICAgICAgIDxSYWNrVGlsZVxyXG4gICAgICAgICAgICAgICAgICAgIHdob3NldHVybj17cHJvcHMud2hvc2V0dXJufVxyXG4gICAgICAgICAgICAgICAgICAgIHByaXNvbmVyc09yR3VhcmRzPXtwcm9wcy5wcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3Byb3BzLnNlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICB0aWxlaW5kZXg9e3RpfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGV2YWx1ZT17dH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIEkgaGF2ZSB0byBjaGVjayBwcm9wcy5tb3ZlcyBzbyB0aGUgQnVpbGQgZG9lcyBub3QgZmFpbCBvbiAnbGVuZ3RoJyB1bmRlZmluZWQgKi99XHJcbiAgICAgICAge3Byb3BzLndob3NldHVybiA9PT0gcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPyBcclxuICAgICAgICAgIHNob3dBY3Rpb25CdXR0b25zKHByb3BzKVxyXG4gICAgICAgIDogcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgIT09IHByb3BzLnByaXNvbmVyc09yR3VhcmRzICYmXHJcbiAgICAgICAgICBwcm9wcy5tb3ZlcyAmJiBwcm9wcy5tb3Zlcy5sZW5ndGggPiAwICYmIHByb3BzLmFsbG93UmV3aW5kICYmXHJcbiAgICAgICAgICBwcm9wcy5tb3Zlc1twcm9wcy5tb3Zlcy5sZW5ndGgtMV0uYnkgPT09IHByb3BzLnByaXNvbmVyc09yR3VhcmRzICYmXHJcbiAgICAgICAgICBzaG93QWN0aW9uQnV0dG9uVW5kb0xhc3RQbGF5KHByb3BzKVxyXG4gICAgICAgIH1cclxuICAgICAgICB7LyogSSBoYXZlIHRvIGNoZWNrIHByb3BzLm1vdmVzIHNvIHRoZSBCdWlsZCBkb2VzIG5vdCBmYWlsIG9uICdsZW5ndGgnIHVuZGVmaW5lZCAqL31cclxuICAgICAgICB7cHJvcHMubW92ZXMgJiYgcHJvcHMubW92ZXMubGVuZ3RoID4gMCAmJiBwcm9wcy5tb3Zlc1twcm9wcy5tb3Zlcy5sZW5ndGgtMV0uYnkgIT09IHByb3BzLnByaXNvbmVyc09yR3VhcmRzICYmXHJcbiAgICAgICAgICBzaG93QWN0aW9uQnV0dG9uQWxsb3dVbmRvKHByb3BzKVxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG5jb25zdCBSYWNrVGlsZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRVbnNlbGVjdGVkID0gcHJvcHMuc2VsZWN0aW9uID09PSBwcm9wcy50aWxlaW5kZXggPyBcIlNlbGVjdGVkIFwiIDogXCJVbnNlbGVjdGVkIFwiO1xyXG4gICAgY29uc3QgdU5vdFUgPSBwcm9wcy50aWxldmFsdWUgPT09IFwiUVwiID8gXCJ1IFwiIDogXCJcIjtcclxuICAgIGNvbnN0IHRpbGVjbGFzcyA9IFwicGJUaWxlT25SYWNrIFwiICsgc2VsZWN0ZWRVbnNlbGVjdGVkICsgdU5vdFUgKyBwcm9wcy5wcmlzb25lcnNPckd1YXJkcztcclxuICAgIGNvbnN0IHRpbGVpbmRleCA9IHByb3BzLnRpbGVpbmRleDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e3RpbGVpbmRleH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aWxlY2xhc3N9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyh0aWxlaW5kZXgpID0+IHByb3BzLm9uQ2xpY2sodGlsZWluZGV4KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlT25SYWNrVGV4dFwiPntwcm9wcy50aWxldmFsdWV9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBGaW5pc2hUdXJuQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25UZXh0XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGVjazwvaT4mbmJzcDtGaW5pc2ggVHVybjwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgXHJcbmNvbnN0IFRpbGVSZWNhbGxCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnVuZG88L2k+Jm5ic3A7UmVjYWxsIFRpbGVzPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRpbGVFeGNoYW5nZUJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2FjaGVkPC9pPiZuYnNwO1N3YXAgVGlsZXM8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgUGFzc1BsYXlCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPm5vdF9pbnRlcmVzdGVkPC9pPiZuYnNwO1Bhc3MgVHVybjwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBBbGxvd1VuZG9MYXN0UGxheSA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBwcm9wcy5hbHJlYWR5QWxsb3dlZCA/XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25TZXZlcmVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cmVwb3J0PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dDJcIj4mbmJzcDtBbGxvdyB1bmRvIGlzIG5vdyBlbmFibGVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25TZXZlcmVcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cmVwb3J0X3Byb2JsZW08L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7QWxsb3cgVW5kbyBUdXJuXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25TZXZlcmVUZXh0MlwiPkNsaWNrIHRvIGxldCBvcHBvbmVudCB1bmRvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBVbmRvTGFzdFBsYXkgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblNldmVyZVwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblNldmVyZVRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmRlbGV0ZV9mb3JldmVyPC9pPlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7VW5kbyBNeSBUdXJuXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblNldmVyZVRleHQyXCI+T3Bwb25lbnQgaGFzIGFsbG93ZWQgdW5kbzwvc3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn07XHJcbiAgXHJcbmZ1bmN0aW9uIHNob3dBY3Rpb25CdXR0b25zKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvbkRpdlwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8RmluaXNoVHVybkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrRmluaXNoVHVybigpfSAvPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgICAgPFRpbGVSZWNhbGxCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVSZWNhbGwoKX0gLz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxUaWxlRXhjaGFuZ2VCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVFeGNoYW5nZSgpfSAvPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgICAgPFBhc3NQbGF5QnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tQYXNzUGxheSgpfSAvPlxyXG4gICAgICAgIDwvcD5cclxuICAgIDwvZGl2PjtcclxufVxyXG5mdW5jdGlvbiBzaG93QWN0aW9uQnV0dG9uQWxsb3dVbmRvKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvbkRpdlwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8QWxsb3dVbmRvTGFzdFBsYXkgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja0FsbG93VW5kbygpfSBhbHJlYWR5QWxsb3dlZD17cHJvcHMuYWxsb3dSZXdpbmR9Lz5cclxuICAgICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5mdW5jdGlvbiBzaG93QWN0aW9uQnV0dG9uVW5kb0xhc3RQbGF5KHByb3BzKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvbkRpdlwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8VW5kb0xhc3RQbGF5IG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tVbmRvTGFzdFBsYXkoKX0gLz5cclxuICAgICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyU2VjdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9