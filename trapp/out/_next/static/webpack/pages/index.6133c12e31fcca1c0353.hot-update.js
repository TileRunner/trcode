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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "h1",
        children: "Fry Your Brain"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "fybHomeButton",
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Nickname:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
        className: "fybLobbyButton",
        type: "submit",
        onClick: () => {
          setGotNickname(true);
        },
        children: "SUBMIT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "fybLobbyButton",
        type: "submit",
        id: "chooseCreateGame",
        onClick: () => {
          setMainAction('C');
        },
        children: "CREATE A GAME"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "fybLobbyButton",
        type: "submit",
        id: "chooseJoinGame",
        onClick: () => {
          setMainAction('J');
        },
        children: "JOIN A GAME"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        className: "fybLobbyButton",
        id: "chooseRejoinGame",
        onClick: () => {
          setMainAction('R');
        },
        children: "REJOIN A GAME"
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
    lineNumber: 98,
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
        lineNumber: 137,
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
        lineNumber: 138,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-quarter",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Number of Players:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
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
        lineNumber: 147,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-quarter",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Points needed to win (3 to 21):"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
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
        lineNumber: 155,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 153,
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
        lineNumber: 162,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 81
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 135,
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
        lineNumber: 188,
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
        lineNumber: 189,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 187,
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
        lineNumber: 197,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 20
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 186,
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
        lineNumber: 221,
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
        lineNumber: 222,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 220,
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
        lineNumber: 230,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 20
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 219,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2xvYmJ5LmpzIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic2V0V2hlcmV0byIsImNsaWVudCIsInRoaXNpc21lIiwic2V0UGFydGljaXBhbnQiLCJ3c21lc3NhZ2UiLCJuaWNrbmFtZSIsInNldE5pY2tuYW1lIiwiZ2FtZWlkIiwic2V0R2FtZWlkIiwibnVtUGxheWVycyIsInNldE51bVBsYXllcnMiLCJzbmF0Iiwic2V0U25hdCIsInVzZVN0YXRlIiwiZ290Tmlja25hbWUiLCJzZXRHb3ROaWNrbmFtZSIsIm1haW5BY3Rpb24iLCJzZXRNYWluQWN0aW9uIiwiZ29hbCIsInNldEdvYWwiLCJ1c2VFZmZlY3QiLCJtc2ciLCJwcm9jZXNzTG9iYnlNZXNzYWdlIiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwidHlwZSIsImMiLCJmdW5jIiwiZ2FtZSIsImdhbWVsaXN0IiwiZ2V0Tmlja25hbWUiLCJnZXRNYWluQWN0aW9uIiwiY3JlYXRlR2FtZSIsImpvaW5HYW1lIiwicmVqb2luR2FtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJzZW5kQ3JlYXRlR2FtZVJlcXVlc3QiLCJzZW5kIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInNlbmRKb2luR2FtZVJlcXVlc3QiLCJzZW5kUmVqb2luR2FtZVJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUNDLFlBQUQ7QUFBYUMsUUFBYjtBQUFxQkMsVUFBckI7QUFBK0JDLGdCQUEvQjtBQUErQ0MsV0FBL0M7QUFBMERDLFVBQTFEO0FBQW9FQyxhQUFwRTtBQUFpRkMsUUFBakY7QUFBeUZDLFdBQXpGO0FBQW9HQyxZQUFwRztBQUFnSEM7QUFBaEgsQ0FBRCxLQUFvSTtBQUFBOztBQUM5SSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9D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RUFBRUEsUUFMRjtBQU1Sc0MsYUFBUyxFQUFFQyxJQUFJLENBQUNDLEdBQUw7QUFOSCxHQUFaO0FBUUg7O0FBRUQsK0RBQWU5QyxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYxMzNjMTJlMzFmY2NhMWMwMzUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL2ltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvZnliL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBMb2JieSA9ICh7c2V0V2hlcmV0bywgY2xpZW50LCB0aGlzaXNtZSwgc2V0UGFydGljaXBhbnQsIHdzbWVzc2FnZSwgbmlja25hbWUsIHNldE5pY2tuYW1lLCBnYW1laWQsIHNldEdhbWVpZCwgbnVtUGxheWVycywgc2V0TnVtUGxheWVyc30pID0+IHtcclxuICAgIGNvbnN0IFtzbmF0LCBzZXRTbmF0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtnb3ROaWNrbmFtZSwgc2V0R290Tmlja25hbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW21haW5BY3Rpb24sIHNldE1haW5BY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dvYWwsIHNldEdvYWxdID0gdXNlU3RhdGUoMTEpOyAvLyBIb3cgbWFueSBwb2ludHMgbmVlZGVkIHRvIHdpblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzTG9iYnlNZXNzYWdlKG1zZyk7XHJcbiAgICB9LFt3c21lc3NhZ2VdKTtcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NMb2JieU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT09IGMuQ0xJRU5UX1RZUEVfRllCKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBjLlMyQ19GVU5DX0dBTUVEQVRBKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZURhdGEudGhpc2lzbWUgPT09IHRoaXNpc21lKSB7IC8vIEkgY3JlYXRlZCBvciByZWpvaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0aWNrIHRvIHdoYXQgd2FzIHJlcXVlc3RlZFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZChtZXNzYWdlRGF0YS5nYW1lLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TnVtUGxheWVycyhtZXNzYWdlRGF0YS5nYW1lLm51bVBsYXllcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBhcnRpY2lwYW50KGMuUEFSVFlfVFlQRV9QTEFZRVIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTbmF0KGAke21lc3NhZ2VEYXRhLm5pY2tuYW1lfSBqdXN0IGNyZWF0ZWQgZ2FtZSAke21lc3NhZ2VEYXRhLmdhbWVpZH0uYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gJ2dhbWVpZHRha2VuJykge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdCgnVGhhdCBnYW1lIElEIGlzIGFscmVhZHkgdGFrZW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSAnZ2FtZWpvaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS50aGlzaXNtZSA9PT0gdGhpc2lzbWUpIHsgLy8gSSBqb2luZWRcclxuICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQobWVzc2FnZURhdGEuZ2FtZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE51bVBsYXllcnMobWVzc2FnZURhdGEuZ2FtZS5udW1QbGF5ZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQYXJ0aWNpcGFudChjLlBBUlRZX1RZUEVfUExBWUVSKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U25hdChgJHttZXNzYWdlRGF0YS5uaWNrbmFtZX0ganVzdCBqb2luZWQgZ2FtZSAke21lc3NhZ2VEYXRhLmdhbWUuZ2FtZWlkfS5gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSAnZ2FtZWlkdW5rbm93bicpIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoJ1RoYXQgZ2FtZSBJRCBpcyBub3QgYmVpbmcgdXNlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09ICdnYW1lZnVsbCcpIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoJ1RoYXQgZ2FtZSBpcyBmdWxsJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gJ25vdGludGhhdGdhbWUnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KCdZb3UgYXJlIG5vdCBpbiB0aGF0IGdhbWUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSAnb3RoZXJjbGllbnRmb3VuZCcpIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoJ1RoYXQgbmlja25hbWUgaXMgYWxyZWFkeSBpbiB0aGF0IGdhbWUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBjLlMyQ19GVU5DX0dBTUVDUkVBVEVEKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KGAke21lc3NhZ2VEYXRhLm5pY2tuYW1lfSBjcmVhdGVkIGdhbWUgJHttZXNzYWdlRGF0YS5nYW1laWR9YCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gJ2dhbWVsaXN0Jykge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdChtZXNzYWdlRGF0YS5nYW1lbGlzdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KGBVbmhhbmRsZWQgbWVzc2FnZTogJHttZXNzYWdlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmeWJMb2JieVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ5YkhlYWRlckRpdlwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaDFcIj5GcnkgWW91ciBCcmFpbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZnliSG9tZUJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD57c25hdH08L3A+XHJcbiAgICAgICAgICAgIHshZ290Tmlja25hbWUgJiYgZ2V0Tmlja25hbWUobmlja25hbWUsIHNldE5pY2tuYW1lLCBzZXRHb3ROaWNrbmFtZSl9XHJcbiAgICAgICAgICAgIHtnb3ROaWNrbmFtZSAmJiAhbWFpbkFjdGlvbiAmJiBnZXRNYWluQWN0aW9uKHNldE1haW5BY3Rpb24pfVxyXG4gICAgICAgICAgICB7Z290Tmlja25hbWUgJiYgbWFpbkFjdGlvbiA9PT0gJ0MnICYmIGNyZWF0ZUdhbWUoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBzZXRHYW1laWQsIG51bVBsYXllcnMsIHNldE51bVBsYXllcnMsIGdvYWwsIHNldEdvYWwsIG5pY2tuYW1lKX1cclxuICAgICAgICAgICAge2dvdE5pY2tuYW1lICYmIG1haW5BY3Rpb24gPT09ICdKJyAmJiBqb2luR2FtZShjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIHNldEdhbWVpZCwgbmlja25hbWUpfVxyXG4gICAgICAgICAgICB7Z290Tmlja25hbWUgJiYgbWFpbkFjdGlvbiA9PT0gJ1InICYmIHJlam9pbkdhbWUoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBzZXRHYW1laWQsIG5pY2tuYW1lKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5pY2tuYW1lKG5pY2tuYW1lLCBzZXROaWNrbmFtZSwgc2V0R290Tmlja25hbWUpIHtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbD5OaWNrbmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJuaWNrbmFtZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXROaWNrbmFtZShlLnRhcmdldC52YWx1ZS50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge25pY2tuYW1lICYmIDxkaXYgY2xhc3NOYW1lPVwidzMtcXVhcnRlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmeWJMb2JieUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRHb3ROaWNrbmFtZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgU1VCTUlUXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2Pn1cclxuICAgIDwvZGl2PjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TWFpbkFjdGlvbihzZXRNYWluQWN0aW9uKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnliTG9iYnlCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImNob29zZUNyZWF0ZUdhbWVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1haW5BY3Rpb24oJ0MnKTtcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgQ1JFQVRFIEEgR0FNRVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZ5YkxvYmJ5QnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjaG9vc2VKb2luR2FtZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWFpbkFjdGlvbignSicpO1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICBKT0lOIEEgR0FNRVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmeWJMb2JieUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImNob29zZVJlam9pbkdhbWVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1haW5BY3Rpb24oJ1InKTtcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgUkVKT0lOIEEgR0FNRVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3A+XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUdhbWUoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBzZXRHYW1laWQsIG51bVBsYXllcnMsIHNldE51bVBsYXllcnMsIGdvYWwsIHNldEdvYWwsIG5pY2tuYW1lKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3My1yb3ctcGFkZGluZyBoNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtcXVhcnRlclwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+R2FtZSBJRDo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidzMtaW5wdXQgdzMtYm9yZGVyIHczLWJsdWUgbXlDb21tb25Gb250XCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImdhbWVpZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Z2FtZWlkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXF1YXJ0ZXJcIj5cclxuICAgICAgICAgICAgPGxhYmVsPk51bWJlciBvZiBQbGF5ZXJzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3My1pbnB1dCB3My1ib3JkZXIgdzMtYmx1ZSBteUNvbW1vbkZvbnRcIiB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJudW1QbGF5ZXJzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtudW1QbGF5ZXJzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHNldE51bVBsYXllcnMoZS50YXJnZXQudmFsdWUpOyB9IH0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtcXVhcnRlclwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+UG9pbnRzIG5lZWRlZCB0byB3aW4gKDMgdG8gMjEpOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3My1pbnB1dCB3My1ib3JkZXIgdzMtYmx1ZSBteUNvbW1vbkZvbnRcIiB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJnb2FsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtnb2FsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHNldEdvYWwoZS50YXJnZXQudmFsdWUpOyB9IH0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtnYW1laWQgJiYgbnVtUGxheWVycyA+IDEgJiYgbnVtUGxheWVycyA8IDcgJiYgZ29hbCA+IDIgJiYgZ29hbCA8IDIyICYmIDxkaXYgY2xhc3NOYW1lPVwidzMtcXVhcnRlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBpZD1cInJlcXVlc3RDcmVhdGVHYW1lXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NlbmRDcmVhdGVHYW1lUmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG51bVBsYXllcnMsIGdvYWwsIG5pY2tuYW1lKTt9fT5cclxuICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRDcmVhdGVHYW1lUmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG51bVBsYXllcnMsIGdvYWwsIG5pY2tuYW1lKSB7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ2NyZWF0ZScsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIG51bVBsYXllcnM6IG51bVBsYXllcnMsXHJcbiAgICAgICAgZ29hbDogZ29hbCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gam9pbkdhbWUoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBzZXRHYW1laWQsIG5pY2tuYW1lKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3My1yb3ctcGFkZGluZyBoNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtcXVhcnRlclwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+R2FtZSBJRCB0byBqb2luOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3My1pbnB1dCB3My1ib3JkZXIgdzMtYmx1ZSBteUNvbW1vbkZvbnRcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZ2FtZWlkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtnYW1laWR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQoZS50YXJnZXQudmFsdWUudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtnYW1laWQgJiYgPGRpdiBjbGFzc05hbWU9XCJ3My1xdWFydGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGlkPVwicmVxdWVzdEpvaW5HYW1lXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NlbmRKb2luR2FtZVJlcXVlc3QoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSk7fX0+XHJcbiAgICAgICAgICAgICAgICBTVUJNSVRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+fVxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kSm9pbkdhbWVSZXF1ZXN0KGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbmlja25hbWUpIHtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAnam9pbicsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWpvaW5HYW1lKGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgc2V0R2FtZWlkLCBuaWNrbmFtZSkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidzMtcm93LXBhZGRpbmcgaDRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXF1YXJ0ZXJcIj5cclxuICAgICAgICAgICAgPGxhYmVsPkdhbWUgSUQgdG8gcmVqb2luOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3My1pbnB1dCB3My1ib3JkZXIgdzMtYmx1ZSBteUNvbW1vbkZvbnRcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZ2FtZWlkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtnYW1laWR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQoZS50YXJnZXQudmFsdWUudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtnYW1laWQgJiYgPGRpdiBjbGFzc05hbWU9XCJ3My1xdWFydGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGlkPVwicmVxdWVzdFJlam9pbkdhbWVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2VuZFJlam9pbkdhbWVSZXF1ZXN0KGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbmlja25hbWUpO319PlxyXG4gICAgICAgICAgICAgICAgU1VCTUlUXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2Pn1cclxuICAgIDwvZGl2PjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZFJlam9pbkdhbWVSZXF1ZXN0KGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbmlja25hbWUpIHtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAncmVqb2luJyxcclxuICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYmJ5OyAgXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=