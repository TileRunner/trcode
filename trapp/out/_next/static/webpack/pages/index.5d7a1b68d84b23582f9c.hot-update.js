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
/* harmony import */ var _lib_scrollToLeft__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/scrollToLeft */ "./lib/scrollToLeft.js");
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
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_lib_scrollToLeft__WEBPACK_IMPORTED_MODULE_3__.scrollToLeft)("fybLobby");
  }, [nickname, gameid]);

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
    id: "fybLobby",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybHeaderDiv",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "h2",
        children: "Fry Your Brain"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
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
          lineNumber: 63,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: snat
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, undefined), !gotNickname && getNickname(nickname, setNickname, setGotNickname), gotNickname && !mainAction && getMainAction(setMainAction), gotNickname && mainAction === 'C' && createGame(client, thisisme, gameid, setGameid, numPlayers, setNumPlayers, goal, setGoal, nickname), gotNickname && mainAction === 'J' && joinGame(client, thisisme, gameid, setGameid, nickname), gotNickname && mainAction === 'R' && rejoinGame(client, thisisme, gameid, setGameid, nickname), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fivepxdivider",
      children: "\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
  }, undefined);
};

_s(Lobby, "doU+jz92n0nfId+lGyVvqZ0qllQ=");

_c = Lobby;

function getNickname(nickname, setNickname, setGotNickname) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Nickname:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
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
        lineNumber: 81,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }, this), nickname && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "fybLobbyButton",
        type: "submit",
        onClick: () => {
          setGotNickname(true);
        },
        children: "SUBMIT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 22
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
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
        lineNumber: 105,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
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
        lineNumber: 116,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
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
        lineNumber: 127,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 103,
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
        lineNumber: 142,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Game ID:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
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
              lineNumber: 148,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "# Players:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
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
              lineNumber: 158,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Pts to win:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
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
              lineNumber: 167,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
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
      lineNumber: 177,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybInputWarning",
      children: [!gameid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Game ID is required"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }, this), !(numPlayers > 1 && numPlayers < 7) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "# Players is 2-6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }, this), !(goal > 2 && goal < 22) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Pts to win is 3-21"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 140,
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
        lineNumber: 215,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Game ID:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
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
              lineNumber: 224,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
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
        lineNumber: 236,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 20
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fivepxdivider",
      children: "\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 9
    }, this), !gameid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybInputWarning",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Game ID is required"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 213,
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybHeaderDiv",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "h2",
        children: "Rejoin Game"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Game ID:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 272,
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
              lineNumber: 276,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 9
    }, this), gameid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "fybLobbyButton",
        id: "requestRejoinGame",
        type: "submit",
        onClick: () => {
          sendRejoinGameRequest(client, thisisme, gameid, nickname);
        },
        children: "SUBMIT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 20
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fivepxdivider",
      children: "\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 9
    }, this), !gameid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybInputWarning",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Game ID is required"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 265,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2xvYmJ5LmpzIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic2V0V2hlcmV0byIsImNsaWVudCIsInRoaXNpc21lIiwic2V0UGFydGljaXBhbnQiLCJ3c21lc3NhZ2UiLCJuaWNrbmFtZSIsInNldE5pY2tuYW1lIiwiZ2FtZWlkIiwic2V0R2FtZWlkIiwibnVtUGxheWVycyIsInNldE51bVBsYXllcnMiLCJzbmF0Iiwic2V0U25hdCIsInVzZVN0YXRlIiwiZ290Tmlja25hbWUiLCJzZXRHb3ROaWNrbmFtZSIsIm1haW5BY3Rpb24iLCJzZXRNYWluQWN0aW9uIiwiZ29hbCIsInNldEdvYWwiLCJ1c2VFZmZlY3QiLCJtc2ciLCJwcm9jZXNzTG9iYnlNZXNzYWdlIiwic2Nyb2xsVG9MZWZ0IiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwidHlwZSIsImMiLCJmdW5jIiwiZ2FtZSIsImdhbWVsaXN0IiwiZ2V0Tmlja25hbWUiLCJnZXRNYWluQWN0aW9uIiwiY3JlYXRlR2FtZSIsImpvaW5HYW1lIiwicmVqb2luR2FtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJzZW5kQ3JlYXRlR2FtZVJlcXVlc3QiLCJzZW5kIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInNlbmRKb2luR2FtZVJlcXVlc3QiLCJzZW5kUmVqb2luR2FtZVJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUNDLFlBQUQ7QUFBYUMsUUFBYjtBQUFxQkMsVUFBckI7QUFBK0JDLGdCQUEvQjtBQUErQ0MsV0FBL0M7QUFBMERDLFVBQTFEO0FBQW9FQyxhQUFwRTtBQUFpRkMsUUFBakY7QUFBeUZDLFdBQXpGO0FBQW9HQyxZQUFwRztBQUFnSEM7QUFBaEgsQ0FBRCxLQUFvSTtBQUFBOztBQUM5SSxRQUFNO0FBQUEs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SUksZUFBTyxFQUFFLE1BQU07QUFBQ3lDLCtCQUFxQixDQUFDL0MsTUFBRCxFQUFTQyxRQUFULEVBQW1CSyxNQUFuQixFQUEyQkYsUUFBM0IsQ0FBckI7QUFBMkQsU0FKL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJSLGVBK0JIO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvQkcsRUFnQ0YsQ0FBQ0UsTUFBRCxpQkFDRztBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQXNDSDs7QUFFRCxTQUFTeUMscUJBQVQsQ0FBK0IvQyxNQUEvQixFQUF1Q0MsUUFBdkMsRUFBaURLLE1BQWpELEVBQXlERixRQUF6RCxFQUFtRTtBQUMvREosUUFBTSxDQUFDMEMsSUFBUCxDQUFZO0FBQ1JmLFFBQUksRUFBRUMsK0RBREU7QUFFUkMsUUFBSSxFQUFFLFFBRkU7QUFHUjVCLFlBQVEsRUFBRUEsUUFIRjtBQUlSSyxVQUFNLEVBQUVBLE1BSkE7QUFLUkYsWUFBUSxFQUFFQSxRQUxGO0FBTVJ1QyxhQUFTLEVBQUVDLElBQUksQ0FBQ0MsR0FBTDtBQU5ILEdBQVo7QUFRSDs7QUFFRCwrREFBZS9DLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWQ3YTFiNjhkODRiMjM1ODJmOWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9meWIvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgc2Nyb2xsVG9MZWZ0IH0gZnJvbSBcIi4uLy4uL2xpYi9zY3JvbGxUb0xlZnRcIjtcclxuXHJcbmNvbnN0IExvYmJ5ID0gKHtzZXRXaGVyZXRvLCBjbGllbnQsIHRoaXNpc21lLCBzZXRQYXJ0aWNpcGFudCwgd3NtZXNzYWdlLCBuaWNrbmFtZSwgc2V0Tmlja25hbWUsIGdhbWVpZCwgc2V0R2FtZWlkLCBudW1QbGF5ZXJzLCBzZXROdW1QbGF5ZXJzfSkgPT4ge1xyXG4gICAgY29uc3QgW3NuYXQsIHNldFNuYXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dvdE5pY2tuYW1lLCBzZXRHb3ROaWNrbmFtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbWFpbkFjdGlvbiwgc2V0TWFpbkFjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ29hbCwgc2V0R29hbF0gPSB1c2VTdGF0ZSgxMSk7IC8vIEhvdyBtYW55IHBvaW50cyBuZWVkZWQgdG8gd2luXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NMb2JieU1lc3NhZ2UobXNnKTtcclxuICAgIH0sW3dzbWVzc2FnZV0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzY3JvbGxUb0xlZnQoXCJmeWJMb2JieVwiKTtcclxuICAgIH0sW25pY2tuYW1lLCBnYW1laWRdKTtcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NMb2JieU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT09IGMuQ0xJRU5UX1RZUEVfRllCKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBjLlMyQ19GVU5DX0dBTUVEQVRBKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZURhdGEudGhpc2lzbWUgPT09IHRoaXNpc21lKSB7IC8vIEkgY3JlYXRlZCBvciByZWpvaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0aWNrIHRvIHdoYXQgd2FzIHJlcXVlc3RlZFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZChtZXNzYWdlRGF0YS5nYW1lLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TnVtUGxheWVycyhtZXNzYWdlRGF0YS5nYW1lLm51bVBsYXllcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBhcnRpY2lwYW50KGMuUEFSVFlfVFlQRV9QTEFZRVIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTbmF0KGAke21lc3NhZ2VEYXRhLm5pY2tuYW1lfSBqdXN0IGNyZWF0ZWQgZ2FtZSAke21lc3NhZ2VEYXRhLmdhbWVpZH0uYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gJ2dhbWVpZHRha2VuJykge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdCgnVGhhdCBnYW1lIElEIGlzIGFscmVhZHkgdGFrZW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSAnZ2FtZWpvaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS50aGlzaXNtZSA9PT0gdGhpc2lzbWUpIHsgLy8gSSBqb2luZWRcclxuICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQobWVzc2FnZURhdGEuZ2FtZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE51bVBsYXllcnMobWVzc2FnZURhdGEuZ2FtZS5udW1QbGF5ZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQYXJ0aWNpcGFudChjLlBBUlRZX1RZUEVfUExBWUVSKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U25hdChgJHttZXNzYWdlRGF0YS5uaWNrbmFtZX0ganVzdCBqb2luZWQgZ2FtZSAke21lc3NhZ2VEYXRhLmdhbWUuZ2FtZWlkfS5gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSAnZ2FtZWlkdW5rbm93bicpIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoJ1RoYXQgZ2FtZSBJRCBpcyBub3QgYmVpbmcgdXNlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09ICdnYW1lZnVsbCcpIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoJ1RoYXQgZ2FtZSBpcyBmdWxsJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gJ25vdGludGhhdGdhbWUnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KCdZb3UgYXJlIG5vdCBpbiB0aGF0IGdhbWUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSAnb3RoZXJjbGllbnRmb3VuZCcpIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoJ1RoYXQgbmlja25hbWUgaXMgYWxyZWFkeSBpbiB0aGF0IGdhbWUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBjLlMyQ19GVU5DX0dBTUVDUkVBVEVEKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KGAke21lc3NhZ2VEYXRhLm5pY2tuYW1lfSBjcmVhdGVkIGdhbWUgJHttZXNzYWdlRGF0YS5nYW1laWR9YCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gJ2dhbWVsaXN0Jykge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdChtZXNzYWdlRGF0YS5nYW1lbGlzdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KGBVbmhhbmRsZWQgbWVzc2FnZTogJHttZXNzYWdlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmeWJMb2JieVwiIGlkPVwiZnliTG9iYnlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmeWJIZWFkZXJEaXZcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgyXCI+RnJ5IFlvdXIgQnJhaW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZ5YkhvbWVCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+e3NuYXR9PC9wPlxyXG4gICAgICAgICAgICB7IWdvdE5pY2tuYW1lICYmIGdldE5pY2tuYW1lKG5pY2tuYW1lLCBzZXROaWNrbmFtZSwgc2V0R290Tmlja25hbWUpfVxyXG4gICAgICAgICAgICB7Z290Tmlja25hbWUgJiYgIW1haW5BY3Rpb24gJiYgZ2V0TWFpbkFjdGlvbihzZXRNYWluQWN0aW9uKX1cclxuICAgICAgICAgICAge2dvdE5pY2tuYW1lICYmIG1haW5BY3Rpb24gPT09ICdDJyAmJiBjcmVhdGVHYW1lKGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgc2V0R2FtZWlkLCBudW1QbGF5ZXJzLCBzZXROdW1QbGF5ZXJzLCBnb2FsLCBzZXRHb2FsLCBuaWNrbmFtZSl9XHJcbiAgICAgICAgICAgIHtnb3ROaWNrbmFtZSAmJiBtYWluQWN0aW9uID09PSAnSicgJiYgam9pbkdhbWUoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBzZXRHYW1laWQsIG5pY2tuYW1lKX1cclxuICAgICAgICAgICAge2dvdE5pY2tuYW1lICYmIG1haW5BY3Rpb24gPT09ICdSJyAmJiByZWpvaW5HYW1lKGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgc2V0R2FtZWlkLCBuaWNrbmFtZSl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml2ZXB4ZGl2aWRlclwiPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Tmlja25hbWUobmlja25hbWUsIHNldE5pY2tuYW1lLCBzZXRHb3ROaWNrbmFtZSkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsPk5pY2tuYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5pY2tuYW1lXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE5pY2tuYW1lKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7bmlja25hbWUgJiYgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnliTG9iYnlCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R290Tmlja25hbWUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1haW5BY3Rpb24oc2V0TWFpbkFjdGlvbikge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZ5YkxvYmJ5QnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjaG9vc2VDcmVhdGVHYW1lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNYWluQWN0aW9uKCdDJyk7XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIENSRUFURSBBIEdBTUVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmeWJMb2JieUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwiY2hvb3NlSm9pbkdhbWVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1haW5BY3Rpb24oJ0onKTtcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgSk9JTiBBIEdBTUVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnliTG9iYnlCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjaG9vc2VSZWpvaW5HYW1lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNYWluQWN0aW9uKCdSJyk7XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIFJFSk9JTiBBIEdBTUVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHYW1lKGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgc2V0R2FtZWlkLCBudW1QbGF5ZXJzLCBzZXROdW1QbGF5ZXJzLCBnb2FsLCBzZXRHb2FsLCBuaWNrbmFtZSkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmeWJIZWFkZXJEaXZcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaDJcIj5DcmVhdGUgR2FtZTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxsYWJlbD5HYW1lIElEOjwvbGFiZWw+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD48aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdhbWVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dhbWVpZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9IC8+PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxsYWJlbD4jIFBsYXllcnM6PC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJudW1QbGF5ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bnVtUGxheWVyc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHsgc2V0TnVtUGxheWVycyhlLnRhcmdldC52YWx1ZSk7IH0gfSBcclxuICAgICAgICAgICAgICAgICAgICAvPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD48bGFiZWw+UHRzIHRvIHdpbjo8L2xhYmVsPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdvYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnb2FsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyBzZXRHb2FsKGUudGFyZ2V0LnZhbHVlKTsgfSB9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIHtnYW1laWQgJiYgbnVtUGxheWVycyA+IDEgJiYgbnVtUGxheWVycyA8IDcgJiYgZ29hbCA+IDIgJiYgZ29hbCA8IDIyICYmXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZ5YkxvYmJ5QnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGlkPVwicmVxdWVzdENyZWF0ZUdhbWVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2VuZENyZWF0ZUdhbWVSZXF1ZXN0KGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbnVtUGxheWVycywgZ29hbCwgbmlja25hbWUpO319PlxyXG4gICAgICAgICAgICAgICAgU1VCTUlUXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ5YklucHV0V2FybmluZ1wiPlxyXG4gICAgICAgICAgICB7IWdhbWVpZCAmJlxyXG4gICAgICAgICAgICAgICAgPHA+R2FtZSBJRCBpcyByZXF1aXJlZDwvcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IShudW1QbGF5ZXJzID4gMSAmJiBudW1QbGF5ZXJzIDwgNykgJiZcclxuICAgICAgICAgICAgICAgIDxwPiMgUGxheWVycyBpcyAyLTY8L3A+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeyEoZ29hbCA+IDIgJiYgZ29hbCA8IDIyKSAmJlxyXG4gICAgICAgICAgICAgICAgPHA+UHRzIHRvIHdpbiBpcyAzLTIxPC9wPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRDcmVhdGVHYW1lUmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG51bVBsYXllcnMsIGdvYWwsIG5pY2tuYW1lKSB7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ2NyZWF0ZScsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIG51bVBsYXllcnM6IG51bVBsYXllcnMsXHJcbiAgICAgICAgZ29hbDogZ29hbCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gam9pbkdhbWUoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBzZXRHYW1laWQsIG5pY2tuYW1lKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ5YkhlYWRlckRpdlwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoMlwiPkpvaW4gR2FtZTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5HYW1lIElEOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2FtZWlkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z2FtZWlkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQoZS50YXJnZXQudmFsdWUudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICB7Z2FtZWlkICYmIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZ5YkxvYmJ5QnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGlkPVwicmVxdWVzdEpvaW5HYW1lXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NlbmRKb2luR2FtZVJlcXVlc3QoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSk7fX0+XHJcbiAgICAgICAgICAgICAgICBTVUJNSVRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml2ZXB4ZGl2aWRlclwiPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgIHshZ2FtZWlkICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnliSW5wdXRXYXJuaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5HYW1lIElEIGlzIHJlcXVpcmVkPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRKb2luR2FtZVJlcXVlc3QoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSkge1xyXG4gICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgIGZ1bmM6ICdqb2luJyxcclxuICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlam9pbkdhbWUoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBzZXRHYW1laWQsIG5pY2tuYW1lKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ5YkhlYWRlckRpdlwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoMlwiPlJlam9pbiBHYW1lPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkdhbWUgSUQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnYW1laWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnYW1laWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZChlLnRhcmdldC52YWx1ZS50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIHtnYW1laWQgJiYgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnliTG9iYnlCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJyZXF1ZXN0UmVqb2luR2FtZVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZW5kUmVqb2luR2FtZVJlcXVlc3QoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSk7fX0+XHJcbiAgICAgICAgICAgICAgICBTVUJNSVRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml2ZXB4ZGl2aWRlclwiPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgIHshZ2FtZWlkICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnliSW5wdXRXYXJuaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5HYW1lIElEIGlzIHJlcXVpcmVkPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRSZWpvaW5HYW1lUmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lKSB7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ3Jlam9pbicsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2JieTsgIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9