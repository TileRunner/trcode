self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/fyb/lobby.js":
/*!****************************!*\
  !*** ./pages/fyb/lobby.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/fyb/constants */ "./lib/fyb/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\fyb\\lobby.js",
    _s = $RefreshSig$();

 //import Link from "next/link";



const Lobby = ({
  setWhereto,
  client,
  thisisme,
  setParticipant,
  wsmessage,
  nickname,
  setNickname,
  gameid,
  setGameid,
  numPlayers,
  setNumPlayers
}) => {
  _s();

  const {
    0: snat,
    1: setSnat
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: gotNickname,
    1: setGotNickname
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: mainAction,
    1: setMainAction
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: goal,
    1: setGoal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(11); // How many points needed to win

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let msg = wsmessage;
    if (msg !== '') processLobbyMessage(msg);
  }, [wsmessage]);

  function processLobbyMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.type === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB) {
      if (messageData.func === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.S2C_FUNC_GAMEDATA) {
        if (messageData.thisisme === thisisme) {
          // I created or rejoined
          // Stick to what was requested
          setGameid(messageData.game.gameid);
          setNumPlayers(messageData.game.numPlayers);
          setParticipant(_lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.PARTY_TYPE_PLAYER);
        } else {
          setSnat(`${messageData.nickname} just created game ${messageData.gameid}.`);
        }
      } else if (messageData.func === 'gameidtaken') {
        setSnat('That game ID is already taken');
      } else if (messageData.func === 'gamejoined') {
        if (messageData.thisisme === thisisme) {
          // I joined
          setGameid(messageData.game.gameid);
          setNumPlayers(messageData.game.numPlayers);
          setParticipant(_lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.PARTY_TYPE_PLAYER);
        } else {
          setSnat(`${messageData.nickname} just joined game ${messageData.game.gameid}.`);
        }
      } else if (messageData.func === 'gameidunknown') {
        setSnat('That game ID is not being used');
      } else if (messageData.func === 'gamefull') {
        setSnat('That game is full');
      } else if (messageData.func === 'notinthatgame') {
        setSnat('You are not in that game');
      } else if (messageData.func === 'otherclientfound') {
        setSnat('That nickname is already in that game');
      } else if (messageData.func === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.S2C_FUNC_GAMECREATED) {
        setSnat(`${messageData.nickname} created game ${messageData.gameid}`);
      } else if (messageData.func === 'gamelist') {
        setSnat(messageData.gamelist);
      } else {
        setSnat(`Unhandled message: ${message}`);
      }
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "fybLobby",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybHeaderDiv",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Fry Your Brain Lobby"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
          lineNumber: 59,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: snat
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, undefined), !gotNickname && getNickname(nickname, setNickname, setGotNickname), gotNickname && !mainAction && getMainAction(setMainAction), gotNickname && mainAction === 'C' && createGame(client, thisisme, gameid, setGameid, numPlayers, setNumPlayers, goal, setGoal, nickname), gotNickname && mainAction === 'J' && joinGame(client, thisisme, gameid, setGameid, nickname), gotNickname && mainAction === 'R' && rejoinGame(client, thisisme, gameid, setGameid, nickname)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }, undefined);
};

_s(Lobby, "uhoqys77zjWjl52IRp3Dfze0vjU=");

_c = Lobby;

function getNickname(nickname, setNickname, setGotNickname) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w3-row-padding h4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-quarter",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Nickname:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        className: "w3-input w3-border w3-blue myCommonFont",
        type: "text",
        name: "nickname",
        value: nickname,
        onChange: e => {
          setNickname(e.target.value.trim());
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, this), nickname && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-quarter",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        onClick: () => {
          setGotNickname(true);
        },
        children: "SUBMIT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 22
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 12
  }, this);
}

function getMainAction(setMainAction) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w3-container h4 w3-responsive",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-row w3-padding",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        id: "chooseCreateGame",
        onClick: () => {
          setMainAction('C');
        },
        children: "CREATE A GAME"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-row w3-padding",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        id: "chooseJoinGame",
        onClick: () => {
          setMainAction('J');
        },
        children: "JOIN A GAME"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-row w3-padding",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        id: "chooseRejoinGame",
        onClick: () => {
          setMainAction('R');
        },
        children: "REJOIN A GAME"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 12
  }, this);
}

function createGame(client, thisisme, gameid, setGameid, numPlayers, setNumPlayers, goal, setGoal, nickname) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w3-row-padding h4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-quarter",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Game ID:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        className: "w3-input w3-border w3-blue myCommonFont",
        type: "text",
        name: "gameid",
        value: gameid,
        onChange: e => {
          setGameid(e.target.value.trim());
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-quarter",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Number of Players:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        className: "w3-input w3-border w3-blue myCommonFont",
        type: "number",
        name: "numPlayers",
        value: numPlayers,
        onChange: e => {
          setNumPlayers(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-quarter",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Points needed to win (3 to 21):"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        className: "w3-input w3-border w3-blue myCommonFont",
        type: "number",
        name: "goal",
        value: goal,
        onChange: e => {
          setGoal(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }, this), gameid && numPlayers > 1 && numPlayers < 7 && goal > 2 && goal < 22 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-quarter",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        id: "requestCreateGame",
        type: "submit",
        onClick: () => {
          sendCreateGameRequest(client, thisisme, gameid, numPlayers, goal, nickname);
        },
        children: "SUBMIT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 81
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 12
  }, this);
}

function sendCreateGameRequest(client, thisisme, gameid, numPlayers, goal, nickname) {
  client.send({
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB,
    func: 'create',
    thisisme: thisisme,
    gameid: gameid,
    numPlayers: numPlayers,
    goal: goal,
    nickname: nickname,
    timestamp: Date.now()
  });
}

function joinGame(client, thisisme, gameid, setGameid, nickname) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w3-row-padding h4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-quarter",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Game ID to join:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        className: "w3-input w3-border w3-blue myCommonFont",
        type: "text",
        name: "gameid",
        value: gameid,
        onChange: e => {
          setGameid(e.target.value.trim());
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }, this), gameid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-quarter",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        id: "requestJoinGame",
        type: "submit",
        onClick: () => {
          sendJoinGameRequest(client, thisisme, gameid, nickname);
        },
        children: "SUBMIT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 20
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 179,
    columnNumber: 12
  }, this);
}

function sendJoinGameRequest(client, thisisme, gameid, nickname) {
  client.send({
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB,
    func: 'join',
    thisisme: thisisme,
    gameid: gameid,
    nickname: nickname,
    timestamp: Date.now()
  });
}

function rejoinGame(client, thisisme, gameid, setGameid, nickname) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w3-row-padding h4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-quarter",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Game ID to rejoin:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        className: "w3-input w3-border w3-blue myCommonFont",
        type: "text",
        name: "gameid",
        value: gameid,
        onChange: e => {
          setGameid(e.target.value.trim());
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 9
    }, this), gameid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-quarter",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        id: "requestRejoinGame",
        type: "submit",
        onClick: () => {
          sendRejoinGameRequest(client, thisisme, gameid, nickname);
        },
        children: "SUBMIT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 20
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 212,
    columnNumber: 12
  }, this);
}

function sendRejoinGameRequest(client, thisisme, gameid, nickname) {
  client.send({
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB,
    func: 'rejoin',
    thisisme: thisisme,
    gameid: gameid,
    nickname: nickname,
    timestamp: Date.now()
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Lobby);

var _c;

$RefreshReg$(_c, "Lobby");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2xvYmJ5LmpzIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic2V0V2hlcmV0byIsImNsaWVudCIsInRoaXNpc21lIiwic2V0UGFydGljaXBhbnQiLCJ3c21lc3NhZ2UiLCJuaWNrbmFtZSIsInNldE5pY2tuYW1lIiwiZ2FtZWlkIiwic2V0R2FtZWlkIiwibnVtUGxheWVycyIsInNldE51bVBsYXllcnMiLCJzbmF0Iiwic2V0U25hdCIsInVzZVN0YXRlIiwiZ290Tmlja25hbWUiLCJzZXRHb3ROaWNrbmFtZSIsIm1haW5BY3Rpb24iLCJzZXRNYWluQWN0aW9uIiwiZ29hbCIsInNldEdvYWwiLCJ1c2VFZmZlY3QiLCJtc2ciLCJwcm9jZXNzTG9iYnlNZXNzYWdlIiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwidHlwZSIsImMiLCJmdW5jIiwiZ2FtZSIsImdhbWVsaXN0IiwiZ2V0Tmlja25hbWUiLCJnZXRNYWluQWN0aW9uIiwiY3JlYXRlR2FtZSIsImpvaW5HYW1lIiwicmVqb2luR2FtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJzZW5kQ3JlYXRlR2FtZVJlcXVlc3QiLCJzZW5kIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInNlbmRKb2luR2FtZVJlcXVlc3QiLCJzZW5kUmVqb2luR2FtZVJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUNDLFlBQUQ7QUFBYUMsUUFBYjtBQUFxQkMsVUFBckI7QUFBK0JDLGdCQUEvQjtBQUErQ0MsV0FBL0M7QUFBMERDLFVBQTFEO0FBQW9FQyxhQUFwRTtBQUFpRkMsUUFBakY7QUFBeUZDLFdBQXpGO0FBQW9HQyxZQUFwRztBQUFnSEM7QUFBaEgsQ0FBRCxLQUFvSTtBQUFBOztBQUM5SSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9D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LE1BSkE7QUFLUkYsWUFBUSxFQUFFQSxRQUxGO0FBTVJzQyxhQUFTLEVBQUVDLElBQUksQ0FBQ0MsR0FBTDtBQU5ILEdBQVo7QUFRSDs7QUFFRCwrREFBZTlDLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTRmY2MxYTczYzE3NTM4Y2FhOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9meWIvY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IExvYmJ5ID0gKHtzZXRXaGVyZXRvLCBjbGllbnQsIHRoaXNpc21lLCBzZXRQYXJ0aWNpcGFudCwgd3NtZXNzYWdlLCBuaWNrbmFtZSwgc2V0Tmlja25hbWUsIGdhbWVpZCwgc2V0R2FtZWlkLCBudW1QbGF5ZXJzLCBzZXROdW1QbGF5ZXJzfSkgPT4ge1xyXG4gICAgY29uc3QgW3NuYXQsIHNldFNuYXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dvdE5pY2tuYW1lLCBzZXRHb3ROaWNrbmFtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbWFpbkFjdGlvbiwgc2V0TWFpbkFjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ29hbCwgc2V0R29hbF0gPSB1c2VTdGF0ZSgxMSk7IC8vIEhvdyBtYW55IHBvaW50cyBuZWVkZWQgdG8gd2luXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NMb2JieU1lc3NhZ2UobXNnKTtcclxuICAgIH0sW3dzbWVzc2FnZV0pO1xyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0xvYmJ5TWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gYy5DTElFTlRfVFlQRV9GWUIpIHtcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IGMuUzJDX0ZVTkNfR0FNRURBVEEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS50aGlzaXNtZSA9PT0gdGhpc2lzbWUpIHsgLy8gSSBjcmVhdGVkIG9yIHJlam9pbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RpY2sgdG8gd2hhdCB3YXMgcmVxdWVzdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKG1lc3NhZ2VEYXRhLmdhbWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXROdW1QbGF5ZXJzKG1lc3NhZ2VEYXRhLmdhbWUubnVtUGxheWVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFydGljaXBhbnQoYy5QQVJUWV9UWVBFX1BMQVlFUik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNuYXQoYCR7bWVzc2FnZURhdGEubmlja25hbWV9IGp1c3QgY3JlYXRlZCBnYW1lICR7bWVzc2FnZURhdGEuZ2FtZWlkfS5gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSAnZ2FtZWlkdGFrZW4nKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KCdUaGF0IGdhbWUgSUQgaXMgYWxyZWFkeSB0YWtlbicpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09ICdnYW1lam9pbmVkJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnRoaXNpc21lID09PSB0aGlzaXNtZSkgeyAvLyBJIGpvaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZChtZXNzYWdlRGF0YS5nYW1lLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TnVtUGxheWVycyhtZXNzYWdlRGF0YS5nYW1lLm51bVBsYXllcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBhcnRpY2lwYW50KGMuUEFSVFlfVFlQRV9QTEFZRVIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTbmF0KGAke21lc3NhZ2VEYXRhLm5pY2tuYW1lfSBqdXN0IGpvaW5lZCBnYW1lICR7bWVzc2FnZURhdGEuZ2FtZS5nYW1laWR9LmApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09ICdnYW1laWR1bmtub3duJykge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdCgnVGhhdCBnYW1lIElEIGlzIG5vdCBiZWluZyB1c2VkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gJ2dhbWVmdWxsJykge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdCgnVGhhdCBnYW1lIGlzIGZ1bGwnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSAnbm90aW50aGF0Z2FtZScpIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoJ1lvdSBhcmUgbm90IGluIHRoYXQgZ2FtZScpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09ICdvdGhlcmNsaWVudGZvdW5kJykge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdCgnVGhhdCBuaWNrbmFtZSBpcyBhbHJlYWR5IGluIHRoYXQgZ2FtZScpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IGMuUzJDX0ZVTkNfR0FNRUNSRUFURUQpIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoYCR7bWVzc2FnZURhdGEubmlja25hbWV9IGNyZWF0ZWQgZ2FtZSAke21lc3NhZ2VEYXRhLmdhbWVpZH1gKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSAnZ2FtZWxpc3QnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KG1lc3NhZ2VEYXRhLmdhbWVsaXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoYFVuaGFuZGxlZCBtZXNzYWdlOiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ5YkxvYmJ5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnliSGVhZGVyRGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+RnJ5IFlvdXIgQnJhaW4gTG9iYnk8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+e3NuYXR9PC9wPlxyXG4gICAgICAgICAgICB7IWdvdE5pY2tuYW1lICYmIGdldE5pY2tuYW1lKG5pY2tuYW1lLCBzZXROaWNrbmFtZSwgc2V0R290Tmlja25hbWUpfVxyXG4gICAgICAgICAgICB7Z290Tmlja25hbWUgJiYgIW1haW5BY3Rpb24gJiYgZ2V0TWFpbkFjdGlvbihzZXRNYWluQWN0aW9uKX1cclxuICAgICAgICAgICAge2dvdE5pY2tuYW1lICYmIG1haW5BY3Rpb24gPT09ICdDJyAmJiBjcmVhdGVHYW1lKGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgc2V0R2FtZWlkLCBudW1QbGF5ZXJzLCBzZXROdW1QbGF5ZXJzLCBnb2FsLCBzZXRHb2FsLCBuaWNrbmFtZSl9XHJcbiAgICAgICAgICAgIHtnb3ROaWNrbmFtZSAmJiBtYWluQWN0aW9uID09PSAnSicgJiYgam9pbkdhbWUoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBzZXRHYW1laWQsIG5pY2tuYW1lKX1cclxuICAgICAgICAgICAge2dvdE5pY2tuYW1lICYmIG1haW5BY3Rpb24gPT09ICdSJyAmJiByZWpvaW5HYW1lKGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgc2V0R2FtZWlkLCBuaWNrbmFtZSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROaWNrbmFtZShuaWNrbmFtZSwgc2V0Tmlja25hbWUsIHNldEdvdE5pY2tuYW1lKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3My1yb3ctcGFkZGluZyBoNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtcXVhcnRlclwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+Tmlja25hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInczLWlucHV0IHczLWJvcmRlciB3My1ibHVlIG15Q29tbW9uRm9udFwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJuaWNrbmFtZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXROaWNrbmFtZShlLnRhcmdldC52YWx1ZS50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge25pY2tuYW1lICYmIDxkaXYgY2xhc3NOYW1lPVwidzMtcXVhcnRlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R290Tmlja25hbWUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1haW5BY3Rpb24oc2V0TWFpbkFjdGlvbikge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIGg0IHczLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXJvdyB3My1wYWRkaW5nXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImNob29zZUNyZWF0ZUdhbWVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1haW5BY3Rpb24oJ0MnKTtcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgQ1JFQVRFIEEgR0FNRVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXJvdyB3My1wYWRkaW5nXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImNob29zZUpvaW5HYW1lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNYWluQWN0aW9uKCdKJyk7XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIEpPSU4gQSBHQU1FXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtcm93IHczLXBhZGRpbmdcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwiY2hvb3NlUmVqb2luR2FtZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWFpbkFjdGlvbignUicpO1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICBSRUpPSU4gQSBHQU1FXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHYW1lKGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgc2V0R2FtZWlkLCBudW1QbGF5ZXJzLCBzZXROdW1QbGF5ZXJzLCBnb2FsLCBzZXRHb2FsLCBuaWNrbmFtZSkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidzMtcm93LXBhZGRpbmcgaDRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXF1YXJ0ZXJcIj5cclxuICAgICAgICAgICAgPGxhYmVsPkdhbWUgSUQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInczLWlucHV0IHczLWJvcmRlciB3My1ibHVlIG15Q29tbW9uRm9udFwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJnYW1laWRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2dhbWVpZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZChlLnRhcmdldC52YWx1ZS50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1xdWFydGVyXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5OdW1iZXIgb2YgUGxheWVyczo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidzMtaW5wdXQgdzMtYm9yZGVyIHczLWJsdWUgbXlDb21tb25Gb250XCIgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibnVtUGxheWVyc1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bnVtUGxheWVyc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyBzZXROdW1QbGF5ZXJzKGUudGFyZ2V0LnZhbHVlKTsgfSB9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXF1YXJ0ZXJcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlBvaW50cyBuZWVkZWQgdG8gd2luICgzIHRvIDIxKTo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidzMtaW5wdXQgdzMtYm9yZGVyIHczLWJsdWUgbXlDb21tb25Gb250XCIgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZ29hbFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Z29hbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyBzZXRHb2FsKGUudGFyZ2V0LnZhbHVlKTsgfSB9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Z2FtZWlkICYmIG51bVBsYXllcnMgPiAxICYmIG51bVBsYXllcnMgPCA3ICYmIGdvYWwgPiAyICYmIGdvYWwgPCAyMiAmJiA8ZGl2IGNsYXNzTmFtZT1cInczLXF1YXJ0ZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgaWQ9XCJyZXF1ZXN0Q3JlYXRlR2FtZVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZW5kQ3JlYXRlR2FtZVJlcXVlc3QoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBudW1QbGF5ZXJzLCBnb2FsLCBuaWNrbmFtZSk7fX0+XHJcbiAgICAgICAgICAgICAgICBTVUJNSVRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+fVxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kQ3JlYXRlR2FtZVJlcXVlc3QoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBudW1QbGF5ZXJzLCBnb2FsLCBuaWNrbmFtZSkge1xyXG4gICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgIGZ1bmM6ICdjcmVhdGUnLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICBudW1QbGF5ZXJzOiBudW1QbGF5ZXJzLFxyXG4gICAgICAgIGdvYWw6IGdvYWwsXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGpvaW5HYW1lKGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgc2V0R2FtZWlkLCBuaWNrbmFtZSkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidzMtcm93LXBhZGRpbmcgaDRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXF1YXJ0ZXJcIj5cclxuICAgICAgICAgICAgPGxhYmVsPkdhbWUgSUQgdG8gam9pbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidzMtaW5wdXQgdzMtYm9yZGVyIHczLWJsdWUgbXlDb21tb25Gb250XCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImdhbWVpZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Z2FtZWlkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Z2FtZWlkICYmIDxkaXYgY2xhc3NOYW1lPVwidzMtcXVhcnRlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBpZD1cInJlcXVlc3RKb2luR2FtZVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZW5kSm9pbkdhbWVSZXF1ZXN0KGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbmlja25hbWUpO319PlxyXG4gICAgICAgICAgICAgICAgU1VCTUlUXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2Pn1cclxuICAgIDwvZGl2PjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZEpvaW5HYW1lUmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lKSB7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ2pvaW4nLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVqb2luR2FtZShjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIHNldEdhbWVpZCwgbmlja25hbWUpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInczLXJvdy1wYWRkaW5nIGg0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1xdWFydGVyXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5HYW1lIElEIHRvIHJlam9pbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidzMtaW5wdXQgdzMtYm9yZGVyIHczLWJsdWUgbXlDb21tb25Gb250XCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImdhbWVpZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Z2FtZWlkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Z2FtZWlkICYmIDxkaXYgY2xhc3NOYW1lPVwidzMtcXVhcnRlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBpZD1cInJlcXVlc3RSZWpvaW5HYW1lXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NlbmRSZWpvaW5HYW1lUmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lKTt9fT5cclxuICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRSZWpvaW5HYW1lUmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lKSB7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ3Jlam9pbicsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2JieTsgIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9