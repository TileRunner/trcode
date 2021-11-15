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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybHeaderDiv",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "h2",
        children: "Create Game"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "Game ID:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "gameid",
            value: gameid,
            onChange: e => {
              setGameid(e.target.value.trim());
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "# Players:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "number",
            name: "numPlayers",
            value: numPlayers,
            onChange: e => {
              setNumPlayers(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "Pts to win:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "number",
            name: "goal",
            value: goal,
            onChange: e => {
              setGoal(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }, this), gameid && numPlayers > 1 && numPlayers < 7 && goal > 2 && goal < 22 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "fybLobbyButton",
      id: "requestCreateGame",
      type: "submit",
      onClick: () => {
        sendCreateGameRequest(client, thisisme, gameid, numPlayers, goal, nickname);
      },
      children: "SUBMIT"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybInputWarning",
      children: [!gameid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Game ID is required"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 17
      }, this), !(numPlayers > 1 && numPlayers < 7) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "# Players is 2-6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 17
      }, this), !(goal > 2 && goal < 22) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Pts to win is 3-21"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybHeaderDiv",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "h2",
        children: "Join Game"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Game ID to join:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "gameid",
        value: gameid,
        onChange: e => {
          setGameid(e.target.value.trim());
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }, this), gameid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "fybLobbyButton",
        id: "requestJoinGame",
        type: "submit",
        onClick: () => {
          sendJoinGameRequest(client, thisisme, gameid, nickname);
        },
        children: "SUBMIT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 20
    }, this), !gameid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybInputWarning",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Game ID is required"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 206,
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
        lineNumber: 251,
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
        lineNumber: 252,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 250,
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
        lineNumber: 260,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 20
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 249,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2xvYmJ5LmpzIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic2V0V2hlcmV0byIsImNsaWVudCIsInRoaXNpc21lIiwic2V0UGFydGljaXBhbnQiLCJ3c21lc3NhZ2UiLCJuaWNrbmFtZSIsInNldE5pY2tuYW1lIiwiZ2FtZWlkIiwic2V0R2FtZWlkIiwibnVtUGxheWVycyIsInNldE51bVBsYXllcnMiLCJzbmF0Iiwic2V0U25hdCIsInVzZVN0YXRlIiwiZ290Tmlja25hbWUiLCJzZXRHb3ROaWNrbmFtZSIsIm1haW5BY3Rpb24iLCJzZXRNYWluQWN0aW9uIiwiZ29hbCIsInNldEdvYWwiLCJ1c2VFZmZlY3QiLCJtc2ciLCJwcm9jZXNzTG9iYnlNZXNzYWdlIiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwidHlwZSIsImMiLCJmdW5jIiwiZ2FtZSIsImdhbWVsaXN0IiwiZ2V0Tmlja25hbWUiLCJnZXRNYWluQWN0aW9uIiwiY3JlYXRlR2FtZSIsImpvaW5HYW1lIiwicmVqb2luR2FtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJzZW5kQ3JlYXRlR2FtZVJlcXVlc3QiLCJzZW5kIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInNlbmRKb2luR2FtZVJlcXVlc3QiLCJzZW5kUmVqb2luR2FtZVJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUNDLFlBQUQ7QUFBYUMsUUFBYjtBQUFxQkMsVUFBckI7QUFBK0JDLGdCQUEvQjtBQUErQ0MsV0FBL0M7QUFBMERDLFVBQTFEO0FBQW9FQyxhQUFwRTtBQUFpRkMsUUFBakY7QUFBeUZDLFdBQXpGO0FBQW9HQyxZQUFwRztBQUFnSEM7QUFBaEgsQ0FBRCxLQUFvSTtBQUFBOztBQUM5SSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9D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QUFFRSxNQUZYO0FBR0ksZ0JBQVEsRUFBRzhCLENBQUQsSUFBTztBQUNiN0IsbUJBQVMsQ0FBQzZCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVDLElBQWYsRUFBRCxDQUFUO0FBQ0g7QUFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREcsRUFVRmpDLE1BQU0saUJBQUk7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDZCQUNQO0FBQ0ksVUFBRSxFQUFDLG1CQURQO0FBRUksWUFBSSxFQUFDLFFBRlQ7QUFHSSxlQUFPLEVBQUUsTUFBTTtBQUFDd0MsK0JBQXFCLENBQUM5QyxNQUFELEVBQVNDLFFBQVQsRUFBbUJLLE1BQW5CLEVBQTJCRixRQUEzQixDQUFyQjtBQUEyRCxTQUgvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURPO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQW1CSDs7QUFFRCxTQUFTMEMscUJBQVQsQ0FBK0I5QyxNQUEvQixFQUF1Q0MsUUFBdkMsRUFBaURLLE1BQWpELEVBQXlERixRQUF6RCxFQUFtRTtBQUMvREosUUFBTSxDQUFDeUMsSUFBUCxDQUFZO0FBQ1JmLFFBQUksRUFBRUMsK0RBREU7QUFFUkMsUUFBSSxFQUFFLFFBRkU7QUFHUjNCLFlBQVEsRUFBRUEsUUFIRjtBQUlSSyxVQUFNLEVBQUVBLE1BSkE7QUFLUkYsWUFBUSxFQUFFQSxRQUxGO0FBTVJzQyxhQUFTLEVBQUVDLElBQUksQ0FBQ0MsR0FBTDtBQU5ILEdBQVo7QUFRSDs7QUFFRCwrREFBZTlDLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDlmMWE2MWJiNTI3NGZmYzZmZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9meWIvY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IExvYmJ5ID0gKHtzZXRXaGVyZXRvLCBjbGllbnQsIHRoaXNpc21lLCBzZXRQYXJ0aWNpcGFudCwgd3NtZXNzYWdlLCBuaWNrbmFtZSwgc2V0Tmlja25hbWUsIGdhbWVpZCwgc2V0R2FtZWlkLCBudW1QbGF5ZXJzLCBzZXROdW1QbGF5ZXJzfSkgPT4ge1xyXG4gICAgY29uc3QgW3NuYXQsIHNldFNuYXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dvdE5pY2tuYW1lLCBzZXRHb3ROaWNrbmFtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbWFpbkFjdGlvbiwgc2V0TWFpbkFjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ29hbCwgc2V0R29hbF0gPSB1c2VTdGF0ZSgxMSk7IC8vIEhvdyBtYW55IHBvaW50cyBuZWVkZWQgdG8gd2luXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NMb2JieU1lc3NhZ2UobXNnKTtcclxuICAgIH0sW3dzbWVzc2FnZV0pO1xyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0xvYmJ5TWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gYy5DTElFTlRfVFlQRV9GWUIpIHtcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IGMuUzJDX0ZVTkNfR0FNRURBVEEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS50aGlzaXNtZSA9PT0gdGhpc2lzbWUpIHsgLy8gSSBjcmVhdGVkIG9yIHJlam9pbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RpY2sgdG8gd2hhdCB3YXMgcmVxdWVzdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKG1lc3NhZ2VEYXRhLmdhbWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXROdW1QbGF5ZXJzKG1lc3NhZ2VEYXRhLmdhbWUubnVtUGxheWVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFydGljaXBhbnQoYy5QQVJUWV9UWVBFX1BMQVlFUik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNuYXQoYCR7bWVzc2FnZURhdGEubmlja25hbWV9IGp1c3QgY3JlYXRlZCBnYW1lICR7bWVzc2FnZURhdGEuZ2FtZWlkfS5gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSAnZ2FtZWlkdGFrZW4nKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KCdUaGF0IGdhbWUgSUQgaXMgYWxyZWFkeSB0YWtlbicpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09ICdnYW1lam9pbmVkJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnRoaXNpc21lID09PSB0aGlzaXNtZSkgeyAvLyBJIGpvaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZChtZXNzYWdlRGF0YS5nYW1lLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TnVtUGxheWVycyhtZXNzYWdlRGF0YS5nYW1lLm51bVBsYXllcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBhcnRpY2lwYW50KGMuUEFSVFlfVFlQRV9QTEFZRVIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTbmF0KGAke21lc3NhZ2VEYXRhLm5pY2tuYW1lfSBqdXN0IGpvaW5lZCBnYW1lICR7bWVzc2FnZURhdGEuZ2FtZS5nYW1laWR9LmApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09ICdnYW1laWR1bmtub3duJykge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdCgnVGhhdCBnYW1lIElEIGlzIG5vdCBiZWluZyB1c2VkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gJ2dhbWVmdWxsJykge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdCgnVGhhdCBnYW1lIGlzIGZ1bGwnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSAnbm90aW50aGF0Z2FtZScpIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoJ1lvdSBhcmUgbm90IGluIHRoYXQgZ2FtZScpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09ICdvdGhlcmNsaWVudGZvdW5kJykge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdCgnVGhhdCBuaWNrbmFtZSBpcyBhbHJlYWR5IGluIHRoYXQgZ2FtZScpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IGMuUzJDX0ZVTkNfR0FNRUNSRUFURUQpIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoYCR7bWVzc2FnZURhdGEubmlja25hbWV9IGNyZWF0ZWQgZ2FtZSAke21lc3NhZ2VEYXRhLmdhbWVpZH1gKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSAnZ2FtZWxpc3QnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KG1lc3NhZ2VEYXRhLmdhbWVsaXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoYFVuaGFuZGxlZCBtZXNzYWdlOiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ5YkxvYmJ5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnliSGVhZGVyRGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoMVwiPkZyeSBZb3VyIEJyYWluPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmeWJIb21lQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwPntzbmF0fTwvcD5cclxuICAgICAgICAgICAgeyFnb3ROaWNrbmFtZSAmJiBnZXROaWNrbmFtZShuaWNrbmFtZSwgc2V0Tmlja25hbWUsIHNldEdvdE5pY2tuYW1lKX1cclxuICAgICAgICAgICAge2dvdE5pY2tuYW1lICYmICFtYWluQWN0aW9uICYmIGdldE1haW5BY3Rpb24oc2V0TWFpbkFjdGlvbil9XHJcbiAgICAgICAgICAgIHtnb3ROaWNrbmFtZSAmJiBtYWluQWN0aW9uID09PSAnQycgJiYgY3JlYXRlR2FtZShjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIHNldEdhbWVpZCwgbnVtUGxheWVycywgc2V0TnVtUGxheWVycywgZ29hbCwgc2V0R29hbCwgbmlja25hbWUpfVxyXG4gICAgICAgICAgICB7Z290Tmlja25hbWUgJiYgbWFpbkFjdGlvbiA9PT0gJ0onICYmIGpvaW5HYW1lKGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgc2V0R2FtZWlkLCBuaWNrbmFtZSl9XHJcbiAgICAgICAgICAgIHtnb3ROaWNrbmFtZSAmJiBtYWluQWN0aW9uID09PSAnUicgJiYgcmVqb2luR2FtZShjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIHNldEdhbWVpZCwgbmlja25hbWUpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Tmlja25hbWUobmlja25hbWUsIHNldE5pY2tuYW1lLCBzZXRHb3ROaWNrbmFtZSkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsPk5pY2tuYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5pY2tuYW1lXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE5pY2tuYW1lKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7bmlja25hbWUgJiYgPGRpdiBjbGFzc05hbWU9XCJ3My1xdWFydGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZ5YkxvYmJ5QnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEdvdE5pY2tuYW1lKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICBTVUJNSVRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+fVxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNYWluQWN0aW9uKHNldE1haW5BY3Rpb24pIHtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmeWJMb2JieUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwiY2hvb3NlQ3JlYXRlR2FtZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWFpbkFjdGlvbignQycpO1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICBDUkVBVEUgQSBHQU1FXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnliTG9iYnlCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImNob29zZUpvaW5HYW1lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNYWluQWN0aW9uKCdKJyk7XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIEpPSU4gQSBHQU1FXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZ5YkxvYmJ5QnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiY2hvb3NlUmVqb2luR2FtZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWFpbkFjdGlvbignUicpO1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICBSRUpPSU4gQSBHQU1FXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvcD5cclxuICAgIDwvZGl2PjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlR2FtZShjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIHNldEdhbWVpZCwgbnVtUGxheWVycywgc2V0TnVtUGxheWVycywgZ29hbCwgc2V0R29hbCwgbmlja25hbWUpIHtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnliSGVhZGVyRGl2XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgyXCI+Q3JlYXRlIEdhbWU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PGxhYmVsPkdhbWUgSUQ6PC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2FtZWlkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z2FtZWlkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQoZS50YXJnZXQudmFsdWUudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0gLz48L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PGxhYmVsPiMgUGxheWVyczo8L2xhYmVsPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm51bVBsYXllcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtudW1QbGF5ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyBzZXROdW1QbGF5ZXJzKGUudGFyZ2V0LnZhbHVlKTsgfSB9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxsYWJlbD5QdHMgdG8gd2luOjwvbGFiZWw+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD48aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ29hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dvYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHNldEdvYWwoZS50YXJnZXQudmFsdWUpOyB9IH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz48L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAge2dhbWVpZCAmJiBudW1QbGF5ZXJzID4gMSAmJiBudW1QbGF5ZXJzIDwgNyAmJiBnb2FsID4gMiAmJiBnb2FsIDwgMjIgJiZcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnliTG9iYnlCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJyZXF1ZXN0Q3JlYXRlR2FtZVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZW5kQ3JlYXRlR2FtZVJlcXVlc3QoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBudW1QbGF5ZXJzLCBnb2FsLCBuaWNrbmFtZSk7fX0+XHJcbiAgICAgICAgICAgICAgICBTVUJNSVRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnliSW5wdXRXYXJuaW5nXCI+XHJcbiAgICAgICAgICAgIHshZ2FtZWlkICYmXHJcbiAgICAgICAgICAgICAgICA8cD5HYW1lIElEIGlzIHJlcXVpcmVkPC9wPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHshKG51bVBsYXllcnMgPiAxICYmIG51bVBsYXllcnMgPCA3KSAmJlxyXG4gICAgICAgICAgICAgICAgPHA+IyBQbGF5ZXJzIGlzIDItNjwvcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IShnb2FsID4gMiAmJiBnb2FsIDwgMjIpICYmXHJcbiAgICAgICAgICAgICAgICA8cD5QdHMgdG8gd2luIGlzIDMtMjE8L3A+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZENyZWF0ZUdhbWVSZXF1ZXN0KGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbnVtUGxheWVycywgZ29hbCwgbmlja25hbWUpIHtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAnY3JlYXRlJyxcclxuICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgbnVtUGxheWVyczogbnVtUGxheWVycyxcclxuICAgICAgICBnb2FsOiBnb2FsLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBqb2luR2FtZShjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIHNldEdhbWVpZCwgbmlja25hbWUpIHtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnliSGVhZGVyRGl2XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgyXCI+Sm9pbiBHYW1lPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbD5HYW1lIElEIHRvIGpvaW46PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZ2FtZWlkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtnYW1laWR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQoZS50YXJnZXQudmFsdWUudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtnYW1laWQgJiYgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnliTG9iYnlCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJyZXF1ZXN0Sm9pbkdhbWVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2VuZEpvaW5HYW1lUmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lKTt9fT5cclxuICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgeyFnYW1laWQgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmeWJJbnB1dFdhcm5pbmdcIj5cclxuICAgICAgICAgICAgICAgIDxwPkdhbWUgSUQgaXMgcmVxdWlyZWQ8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZEpvaW5HYW1lUmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lKSB7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ2pvaW4nLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVqb2luR2FtZShjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIHNldEdhbWVpZCwgbmlja25hbWUpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInczLXJvdy1wYWRkaW5nIGg0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1xdWFydGVyXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5HYW1lIElEIHRvIHJlam9pbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidzMtaW5wdXQgdzMtYm9yZGVyIHczLWJsdWUgbXlDb21tb25Gb250XCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImdhbWVpZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Z2FtZWlkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Z2FtZWlkICYmIDxkaXYgY2xhc3NOYW1lPVwidzMtcXVhcnRlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBpZD1cInJlcXVlc3RSZWpvaW5HYW1lXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NlbmRSZWpvaW5HYW1lUmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lKTt9fT5cclxuICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRSZWpvaW5HYW1lUmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lKSB7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ3Jlam9pbicsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2JieTsgIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9