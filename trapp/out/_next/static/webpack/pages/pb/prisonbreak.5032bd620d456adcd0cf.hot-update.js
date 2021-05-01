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
/* harmony import */ var _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/pbconstants */ "./lib/pbconstants.js");

var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\playerSection.js";


const PlayerSection = props => {
  const playerIcon = props.participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["PARTY_TYPE_PRISONERS"] ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["PARTY_ICON_PRISONERS"] : _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["PARTY_ICON_GUARDS"];
  const playerTitle = props.participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["PARTY_TYPE_PRISONERS"] ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["PARTY_TITLE_PRISONERS"] : _lib_pbconstants__WEBPACK_IMPORTED_MODULE_1__["PARTY_TITLE_GUARDS"];
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
        participant: props.participant,
        selection: props.selection,
        tileindex: ti,
        tilevalue: t,
        onClick: () => props.onClick(ti)
      }, `RackTile${ti}`, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined), props.whoseturn === props.participant ? showActionButtons(props) : props.allowRewind && props.moves && // protect against undefined
    props.moves.length > 0 && props.moves[props.moves.length - 1].by === props.participant && showActionButtonUndoLastPlay(props), props.moves && props.moves.length > 0 && props.moves[props.moves.length - 1].by !== props.participant && showActionButtonAllowUndo(props)]
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
  const tileclass = "pbTileOnRack " + selectedUnselected + uNotU + props.participant;
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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcGxheWVyU2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJQbGF5ZXJTZWN0aW9uIiwicHJvcHMiLCJwbGF5ZXJJY29uIiwicGFydGljaXBhbnQiLCJjIiwicGxheWVyVGl0bGUiLCJyYWNrdGlsZXMiLCJtYXAiLCJ0IiwidGkiLCJ3aG9zZXR1cm4iLCJzZWxlY3Rpb24iLCJvbkNsaWNrIiwic2hvd0FjdGlvbkJ1dHRvbnMiLCJhbGxvd1Jld2luZCIsIm1vdmVzIiwibGVuZ3RoIiwiYnkiLCJzaG93QWN0aW9uQnV0dG9uVW5kb0xhc3RQbGF5Iiwic2hvd0FjdGlvbkJ1dHRvbkFsbG93VW5kbyIsIlJhY2tUaWxlIiwic2VsZWN0ZWRVbnNlbGVjdGVkIiwidGlsZWluZGV4IiwidU5vdFUiLCJ0aWxldmFsdWUiLCJ0aWxlY2xhc3MiLCJGaW5pc2hUdXJuQnV0dG9uIiwiVGlsZVJlY2FsbEJ1dHRvbiIsIlRpbGVFeGNoYW5nZUJ1dHRvbiIsIlBhc3NQbGF5QnV0dG9uIiwiQWxsb3dVbmRvTGFzdFBsYXkiLCJhbHJlYWR5QWxsb3dlZCIsIlVuZG9MYXN0UGxheSIsIm9uQ2xpY2tGaW5pc2hUdXJuIiwib25DbGlja1RpbGVSZWNhbGwiLCJvbkNsaWNrVGlsZUV4Y2hhbmdlIiwib25DbGlja1Bhc3NQbGF5Iiwib25DbGlja0FsbG93VW5kbyIsIm9uQ2xpY2tVbmRvTGFzdFBsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUlDLEtBQUQsSUFBVztBQUM3QixRQUFNQyxVQUFVLEdBQUdELEtBQUssQ0FBQ0UsV0FBTixLQUFzQkMscUVBQXRCLEdBQStDQSxxRUFBL0MsR0FBd0VBLGtFQUEzRjtBQUNBLFFBQU1DLFdBQVcsR0FBR0osS0FBSyxDQUFDRSxXQUFOLEtBQXNCQyxxRUFBdEIsR0FBK0NBLHNFQUEvQyxHQUF5RUEsbUVBQTdGO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVB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QVNqQix5QkFBVCxDQUFtQ2xCLEtBQW5DLEVBQTBDO0FBQ3RDLHNCQUFPO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsMkJBQ0g7QUFBQSw2QkFDSSxxRUFBQyxpQkFBRDtBQUFtQixlQUFPLEVBQUUsTUFBTUEsS0FBSyxDQUFDb0MsZ0JBQU4sRUFBbEM7QUFBNEQsc0JBQWMsRUFBRXBDLEtBQUssQ0FBQ2E7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFLSDs7QUFDRCxTQUFTSSw0QkFBVCxDQUFzQ2pCLEtBQXRDLEVBQTZDO0FBQ3pDLHNCQUFPO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsMkJBQ0g7QUFBQSw2QkFDSSxxRUFBQyxZQUFEO0FBQWMsZUFBTyxFQUFFLE1BQU1BLEtBQUssQ0FBQ3FDLG1CQUFOO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBS0g7O0FBRWN0Qyw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhay41MDMyYmQ2MjBkNDU2YWRjZDBjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvcGJjb25zdGFudHMnO1xyXG5cclxuY29uc3QgUGxheWVyU2VjdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgcGxheWVySWNvbiA9IHByb3BzLnBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gYy5QQVJUWV9JQ09OX1BSSVNPTkVSUyA6IGMuUEFSVFlfSUNPTl9HVUFSRFM7XHJcbiAgICBjb25zdCBwbGF5ZXJUaXRsZSA9IHByb3BzLnBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gYy5QQVJUWV9USVRMRV9QUklTT05FUlMgOiBjLlBBUlRZX1RJVExFX0dVQVJEUztcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJJbm5lclNlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntwbGF5ZXJJY29ufTwvaT4mbmJzcDt7cGxheWVyVGl0bGV9Jm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57cGxheWVySWNvbn08L2k+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAgICAgIHsvKiBJIGhhdmUgdG8gY2hlY2sgcHJvcHMucmFja3RpbGVzIHNvIHRoZSBCdWlsZCBkb2VzIG5vdCBmYWlsIG9uICdtYXAnIHVuZGVmaW5lZCAqL31cclxuICAgICAgICAgICAge3Byb3BzLnJhY2t0aWxlcyAmJiBwcm9wcy5yYWNrdGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgICAgICAgIDxSYWNrVGlsZVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YFJhY2tUaWxlJHt0aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHdob3NldHVybj17cHJvcHMud2hvc2V0dXJufVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50PXtwcm9wcy5wYXJ0aWNpcGFudH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3Byb3BzLnNlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICB0aWxlaW5kZXg9e3RpfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGV2YWx1ZT17dH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Byb3BzLndob3NldHVybiA9PT0gcHJvcHMucGFydGljaXBhbnQgPyBcclxuICAgICAgICAgIHNob3dBY3Rpb25CdXR0b25zKHByb3BzKVxyXG4gICAgICAgIDogcHJvcHMuYWxsb3dSZXdpbmQgJiZcclxuICAgICAgICAgIHByb3BzLm1vdmVzICYmIC8vIHByb3RlY3QgYWdhaW5zdCB1bmRlZmluZWRcclxuICAgICAgICAgIHByb3BzLm1vdmVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIHByb3BzLm1vdmVzW3Byb3BzLm1vdmVzLmxlbmd0aC0xXS5ieSA9PT0gcHJvcHMucGFydGljaXBhbnQgJiZcclxuICAgICAgICAgIHNob3dBY3Rpb25CdXR0b25VbmRvTGFzdFBsYXkocHJvcHMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtwcm9wcy5tb3ZlcyAmJiBwcm9wcy5tb3Zlcy5sZW5ndGggPiAwICYmIHByb3BzLm1vdmVzW3Byb3BzLm1vdmVzLmxlbmd0aC0xXS5ieSAhPT0gcHJvcHMucGFydGljaXBhbnQgJiZcclxuICAgICAgICAgIHNob3dBY3Rpb25CdXR0b25BbGxvd1VuZG8ocHJvcHMpXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbmNvbnN0IFJhY2tUaWxlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFVuc2VsZWN0ZWQgPSBwcm9wcy5zZWxlY3Rpb24gPT09IHByb3BzLnRpbGVpbmRleCA/IFwiU2VsZWN0ZWQgXCIgOiBcIlVuc2VsZWN0ZWQgXCI7XHJcbiAgICBjb25zdCB1Tm90VSA9IHByb3BzLnRpbGV2YWx1ZSA9PT0gXCJRXCIgPyBcInUgXCIgOiBcIlwiO1xyXG4gICAgY29uc3QgdGlsZWNsYXNzID0gXCJwYlRpbGVPblJhY2sgXCIgKyBzZWxlY3RlZFVuc2VsZWN0ZWQgKyB1Tm90VSArIHByb3BzLnBhcnRpY2lwYW50O1xyXG4gICAgY29uc3QgdGlsZWluZGV4ID0gcHJvcHMudGlsZWluZGV4O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17dGlsZWluZGV4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3RpbGVjbGFzc31cclxuICAgICAgICAgICAgb25DbGljaz17KHRpbGVpbmRleCkgPT4gcHJvcHMub25DbGljayh0aWxlaW5kZXgpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVPblJhY2tUZXh0XCI+e3Byb3BzLnRpbGV2YWx1ZX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IEZpbmlzaFR1cm5CdXR0b24gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNoZWNrPC9pPiZuYnNwO0ZpbmlzaCBUdXJuPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbiAgfTtcclxuICBcclxuY29uc3QgVGlsZVJlY2FsbEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dW5kbzwvaT4mbmJzcDtSZWNhbGwgVGlsZXM8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgVGlsZUV4Y2hhbmdlQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25UZXh0XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jYWNoZWQ8L2k+Jm5ic3A7U3dhcCBUaWxlczwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBQYXNzUGxheUJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bm90X2ludGVyZXN0ZWQ8L2k+Jm5ic3A7UGFzcyBUdXJuPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IEFsbG93VW5kb0xhc3RQbGF5ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHByb3BzLmFscmVhZHlBbGxvd2VkID9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblNldmVyZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25TZXZlcmVUZXh0XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5yZXBvcnQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7RU5BQkxFRFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dDJcIj4mbmJzcDtBbGxvdyB1bmRvIGlzIG5vdyBlbmFibGVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25TZXZlcmVcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cmVwb3J0X3Byb2JsZW08L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7QWxsb3cgVW5kbyBUdXJuXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25TZXZlcmVUZXh0MlwiPkNsaWNrIHRvIGxldCBvcHBvbmVudCB1bmRvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBVbmRvTGFzdFBsYXkgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblNldmVyZVwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblNldmVyZVRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmRlbGV0ZV9mb3JldmVyPC9pPlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7VW5kbyBNeSBUdXJuXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblNldmVyZVRleHQyXCI+T3Bwb25lbnQgaGFzIGFsbG93ZWQgdW5kbzwvc3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn07XHJcbiAgXHJcbmZ1bmN0aW9uIHNob3dBY3Rpb25CdXR0b25zKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvbkRpdlwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8RmluaXNoVHVybkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrRmluaXNoVHVybigpfSAvPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgICAgPFRpbGVSZWNhbGxCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVSZWNhbGwoKX0gLz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxUaWxlRXhjaGFuZ2VCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVFeGNoYW5nZSgpfSAvPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgICAgPFBhc3NQbGF5QnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tQYXNzUGxheSgpfSAvPlxyXG4gICAgICAgIDwvcD5cclxuICAgIDwvZGl2PjtcclxufVxyXG5mdW5jdGlvbiBzaG93QWN0aW9uQnV0dG9uQWxsb3dVbmRvKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvbkRpdlwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxBbGxvd1VuZG9MYXN0UGxheSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrQWxsb3dVbmRvKCl9IGFscmVhZHlBbGxvd2VkPXtwcm9wcy5hbGxvd1Jld2luZH0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuZnVuY3Rpb24gc2hvd0FjdGlvbkJ1dHRvblVuZG9MYXN0UGxheShwcm9wcykge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25EaXZcIj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgICAgPFVuZG9MYXN0UGxheSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVW5kb0xhc3RQbGF5KCl9IC8+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllclNlY3Rpb247Il0sInNvdXJjZVJvb3QiOiIifQ==