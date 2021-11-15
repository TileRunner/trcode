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
    }, this), !gameid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybInputWarning",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Game ID is required"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2xvYmJ5LmpzIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic2V0V2hlcmV0byIsImNsaWVudCIsInRoaXNpc21lIiwic2V0UGFydGljaXBhbnQiLCJ3c21lc3NhZ2UiLCJuaWNrbmFtZSIsInNldE5pY2tuYW1lIiwiZ2FtZWlkIiwic2V0R2FtZWlkIiwibnVtUGxheWVycyIsInNldE51bVBsYXllcnMiLCJzbmF0Iiwic2V0U25hdCIsInVzZVN0YXRlIiwiZ290Tmlja25hbWUiLCJzZXRHb3ROaWNrbmFtZSIsIm1haW5BY3Rpb24iLCJzZXRNYWluQWN0aW9uIiwiZ29hbCIsInNldEdvYWwiLCJ1c2VFZmZlY3QiLCJtc2ciLCJwcm9jZXNzTG9iYnlNZXNzYWdlIiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwidHlwZSIsImMiLCJmdW5jIiwiZ2FtZSIsImdhbWVsaXN0IiwiZ2V0Tmlja25hbWUiLCJnZXRNYWluQWN0aW9uIiwiY3JlYXRlR2FtZSIsImpvaW5HYW1lIiwicmVqb2luR2FtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJzZW5kQ3JlYXRlR2FtZVJlcXVlc3QiLCJzZW5kIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInNlbmRKb2luR2FtZVJlcXVlc3QiLCJzZW5kUmVqb2luR2FtZVJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUNDLFlBQUQ7QUFBYUMsUUFBYjtBQUFxQkMsVUFBckI7QUFBK0JDLGdCQUEvQjtBQUErQ0MsV0FBL0M7QUFBMERDLFVBQTFEO0FBQW9FQyxhQUFwRTtBQUFpRkMsUUFBakY7QUFBeUZDLFdBQXpGO0FBQW9HQyxZQUFwRztBQUFnSEM7QUFBaEgsQ0FBRCxLQUFvSTtBQUFBOztBQUM5SSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9D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NDFkNWQ5YjFhZmI5ZWQzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy9pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL2Z5Yi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgTG9iYnkgPSAoe3NldFdoZXJldG8sIGNsaWVudCwgdGhpc2lzbWUsIHNldFBhcnRpY2lwYW50LCB3c21lc3NhZ2UsIG5pY2tuYW1lLCBzZXROaWNrbmFtZSwgZ2FtZWlkLCBzZXRHYW1laWQsIG51bVBsYXllcnMsIHNldE51bVBsYXllcnN9KSA9PiB7XHJcbiAgICBjb25zdCBbc25hdCwgc2V0U25hdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ290Tmlja25hbWUsIHNldEdvdE5pY2tuYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFttYWluQWN0aW9uLCBzZXRNYWluQWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtnb2FsLCBzZXRHb2FsXSA9IHVzZVN0YXRlKDExKTsgLy8gSG93IG1hbnkgcG9pbnRzIG5lZWRlZCB0byB3aW5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0xvYmJ5TWVzc2FnZShtc2cpO1xyXG4gICAgfSxbd3NtZXNzYWdlXSk7XHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzTG9iYnlNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09PSBjLkNMSUVOVF9UWVBFX0ZZQikge1xyXG4gICAgICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gYy5TMkNfRlVOQ19HQU1FREFUQSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnRoaXNpc21lID09PSB0aGlzaXNtZSkgeyAvLyBJIGNyZWF0ZWQgb3IgcmVqb2luZWRcclxuICAgICAgICAgICAgICAgICAgICAvLyBTdGljayB0byB3aGF0IHdhcyByZXF1ZXN0ZWRcclxuICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQobWVzc2FnZURhdGEuZ2FtZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE51bVBsYXllcnMobWVzc2FnZURhdGEuZ2FtZS5udW1QbGF5ZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQYXJ0aWNpcGFudChjLlBBUlRZX1RZUEVfUExBWUVSKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U25hdChgJHttZXNzYWdlRGF0YS5uaWNrbmFtZX0ganVzdCBjcmVhdGVkIGdhbWUgJHttZXNzYWdlRGF0YS5nYW1laWR9LmApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09ICdnYW1laWR0YWtlbicpIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoJ1RoYXQgZ2FtZSBJRCBpcyBhbHJlYWR5IHRha2VuJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gJ2dhbWVqb2luZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZURhdGEudGhpc2lzbWUgPT09IHRoaXNpc21lKSB7IC8vIEkgam9pbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKG1lc3NhZ2VEYXRhLmdhbWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXROdW1QbGF5ZXJzKG1lc3NhZ2VEYXRhLmdhbWUubnVtUGxheWVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFydGljaXBhbnQoYy5QQVJUWV9UWVBFX1BMQVlFUik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNuYXQoYCR7bWVzc2FnZURhdGEubmlja25hbWV9IGp1c3Qgam9pbmVkIGdhbWUgJHttZXNzYWdlRGF0YS5nYW1lLmdhbWVpZH0uYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gJ2dhbWVpZHVua25vd24nKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KCdUaGF0IGdhbWUgSUQgaXMgbm90IGJlaW5nIHVzZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSAnZ2FtZWZ1bGwnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KCdUaGF0IGdhbWUgaXMgZnVsbCcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09ICdub3RpbnRoYXRnYW1lJykge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdCgnWW91IGFyZSBub3QgaW4gdGhhdCBnYW1lJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gJ290aGVyY2xpZW50Zm91bmQnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KCdUaGF0IG5pY2tuYW1lIGlzIGFscmVhZHkgaW4gdGhhdCBnYW1lJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gYy5TMkNfRlVOQ19HQU1FQ1JFQVRFRCkge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdChgJHttZXNzYWdlRGF0YS5uaWNrbmFtZX0gY3JlYXRlZCBnYW1lICR7bWVzc2FnZURhdGEuZ2FtZWlkfWApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09ICdnYW1lbGlzdCcpIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQobWVzc2FnZURhdGEuZ2FtZWxpc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdChgVW5oYW5kbGVkIG1lc3NhZ2U6ICR7bWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnliTG9iYnlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmeWJIZWFkZXJEaXZcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgxXCI+RnJ5IFlvdXIgQnJhaW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZ5YkhvbWVCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+e3NuYXR9PC9wPlxyXG4gICAgICAgICAgICB7IWdvdE5pY2tuYW1lICYmIGdldE5pY2tuYW1lKG5pY2tuYW1lLCBzZXROaWNrbmFtZSwgc2V0R290Tmlja25hbWUpfVxyXG4gICAgICAgICAgICB7Z290Tmlja25hbWUgJiYgIW1haW5BY3Rpb24gJiYgZ2V0TWFpbkFjdGlvbihzZXRNYWluQWN0aW9uKX1cclxuICAgICAgICAgICAge2dvdE5pY2tuYW1lICYmIG1haW5BY3Rpb24gPT09ICdDJyAmJiBjcmVhdGVHYW1lKGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgc2V0R2FtZWlkLCBudW1QbGF5ZXJzLCBzZXROdW1QbGF5ZXJzLCBnb2FsLCBzZXRHb2FsLCBuaWNrbmFtZSl9XHJcbiAgICAgICAgICAgIHtnb3ROaWNrbmFtZSAmJiBtYWluQWN0aW9uID09PSAnSicgJiYgam9pbkdhbWUoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBzZXRHYW1laWQsIG5pY2tuYW1lKX1cclxuICAgICAgICAgICAge2dvdE5pY2tuYW1lICYmIG1haW5BY3Rpb24gPT09ICdSJyAmJiByZWpvaW5HYW1lKGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgc2V0R2FtZWlkLCBuaWNrbmFtZSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROaWNrbmFtZShuaWNrbmFtZSwgc2V0Tmlja25hbWUsIHNldEdvdE5pY2tuYW1lKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWw+Tmlja25hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmlja25hbWVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Tmlja25hbWUoZS50YXJnZXQudmFsdWUudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtuaWNrbmFtZSAmJiA8ZGl2IGNsYXNzTmFtZT1cInczLXF1YXJ0ZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnliTG9iYnlCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R290Tmlja25hbWUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1haW5BY3Rpb24oc2V0TWFpbkFjdGlvbikge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZ5YkxvYmJ5QnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjaG9vc2VDcmVhdGVHYW1lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNYWluQWN0aW9uKCdDJyk7XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIENSRUFURSBBIEdBTUVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmeWJMb2JieUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwiY2hvb3NlSm9pbkdhbWVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1haW5BY3Rpb24oJ0onKTtcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgSk9JTiBBIEdBTUVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnliTG9iYnlCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjaG9vc2VSZWpvaW5HYW1lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNYWluQWN0aW9uKCdSJyk7XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIFJFSk9JTiBBIEdBTUVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHYW1lKGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgc2V0R2FtZWlkLCBudW1QbGF5ZXJzLCBzZXROdW1QbGF5ZXJzLCBnb2FsLCBzZXRHb2FsLCBuaWNrbmFtZSkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmeWJIZWFkZXJEaXZcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaDJcIj5DcmVhdGUgR2FtZTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD48bGFiZWw+R2FtZSBJRDo8L2xhYmVsPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnYW1laWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnYW1laWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZChlLnRhcmdldC52YWx1ZS50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfSAvPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD48bGFiZWw+IyBQbGF5ZXJzOjwvbGFiZWw+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD48aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibnVtUGxheWVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e251bVBsYXllcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHNldE51bVBsYXllcnMoZS50YXJnZXQudmFsdWUpOyB9IH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz48L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PGxhYmVsPlB0cyB0byB3aW46PC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnb2FsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z29hbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHsgc2V0R29hbChlLnRhcmdldC52YWx1ZSk7IH0gfSBcclxuICAgICAgICAgICAgICAgICAgICAvPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICB7Z2FtZWlkICYmIG51bVBsYXllcnMgPiAxICYmIG51bVBsYXllcnMgPCA3ICYmIGdvYWwgPiAyICYmIGdvYWwgPCAyMiAmJlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmeWJMb2JieUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInJlcXVlc3RDcmVhdGVHYW1lXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NlbmRDcmVhdGVHYW1lUmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG51bVBsYXllcnMsIGdvYWwsIG5pY2tuYW1lKTt9fT5cclxuICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmeWJJbnB1dFdhcm5pbmdcIj5cclxuICAgICAgICAgICAgeyFnYW1laWQgJiZcclxuICAgICAgICAgICAgICAgIDxwPkdhbWUgSUQgaXMgcmVxdWlyZWQ8L3A+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeyEobnVtUGxheWVycyA+IDEgJiYgbnVtUGxheWVycyA8IDcpICYmXHJcbiAgICAgICAgICAgICAgICA8cD4jIFBsYXllcnMgaXMgMi02PC9wPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHshKGdvYWwgPiAyICYmIGdvYWwgPCAyMikgJiZcclxuICAgICAgICAgICAgICAgIDxwPlB0cyB0byB3aW4gaXMgMy0yMTwvcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kQ3JlYXRlR2FtZVJlcXVlc3QoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBudW1QbGF5ZXJzLCBnb2FsLCBuaWNrbmFtZSkge1xyXG4gICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgIGZ1bmM6ICdjcmVhdGUnLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICBudW1QbGF5ZXJzOiBudW1QbGF5ZXJzLFxyXG4gICAgICAgIGdvYWw6IGdvYWwsXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGpvaW5HYW1lKGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgc2V0R2FtZWlkLCBuaWNrbmFtZSkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmeWJIZWFkZXJEaXZcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaDJcIj5Kb2luIEdhbWU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsPkdhbWUgSUQgdG8gam9pbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJnYW1laWRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2dhbWVpZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZChlLnRhcmdldC52YWx1ZS50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2dhbWVpZCAmJiA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmeWJMb2JieUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInJlcXVlc3RKb2luR2FtZVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZW5kSm9pbkdhbWVSZXF1ZXN0KGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbmlja25hbWUpO319PlxyXG4gICAgICAgICAgICAgICAgU1VCTUlUXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2Pn1cclxuICAgICAgICB7IWdhbWVpZCAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ5YklucHV0V2FybmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+R2FtZSBJRCBpcyByZXF1aXJlZDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kSm9pbkdhbWVSZXF1ZXN0KGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbmlja25hbWUpIHtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAnam9pbicsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWpvaW5HYW1lKGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgc2V0R2FtZWlkLCBuaWNrbmFtZSkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidzMtcm93LXBhZGRpbmcgaDRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXF1YXJ0ZXJcIj5cclxuICAgICAgICAgICAgPGxhYmVsPkdhbWUgSUQgdG8gcmVqb2luOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3My1pbnB1dCB3My1ib3JkZXIgdzMtYmx1ZSBteUNvbW1vbkZvbnRcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZ2FtZWlkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtnYW1laWR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQoZS50YXJnZXQudmFsdWUudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtnYW1laWQgJiYgPGRpdiBjbGFzc05hbWU9XCJ3My1xdWFydGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGlkPVwicmVxdWVzdFJlam9pbkdhbWVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2VuZFJlam9pbkdhbWVSZXF1ZXN0KGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbmlja25hbWUpO319PlxyXG4gICAgICAgICAgICAgICAgU1VCTUlUXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2Pn1cclxuICAgICAgICB7IWdhbWVpZCAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ5YklucHV0V2FybmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+R2FtZSBJRCBpcyByZXF1aXJlZDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kUmVqb2luR2FtZVJlcXVlc3QoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSkge1xyXG4gICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgIGZ1bmM6ICdyZWpvaW4nLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9iYnk7ICBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==