webpackHotUpdate_N_E("pages/pb/prisonbreak",{

/***/ "./pages/pb/prisonbreak.js":
/*!*********************************!*\
  !*** ./pages/pb/prisonbreak.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrisonBreak; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ws__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ws */ "./ws.js");
/* harmony import */ var _pb_playerSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pb/playerSection */ "./pages/pb/playerSection.js");



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\prisonbreak.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$();





const buttonClassName = 'w3-button w3-border w3-blue w3-hover-black w3-round';
const boardColumnHeaders = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
const boardRowHeaders = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
const movewaittime = 20000; // when waiting for opponent ping every this many milliseconds

const jokes = ['Escapee: "I' + "'m free! I'm free!" + '". Little kid: "I' + "'m four! I'm four!" + '"', 'Two peanuts were walking down a back alley. One was a salted.', "The psychic dwarf escaped! There's a small medium at large!", 'What do you call a vegetable who has escaped prison? An escapea!', "The prisoners fave punctuation is a period. It marks the end of a sentence!", "Prison is only one word, but to robbers it's a whole sentence."];
const initialtiles4 = ["A", "A", "A", "B", "C", "D", "E", "E", "E", "E", "F", "G", "H", "I", "I", "I", "J", "K", "L", "M", "N", "N", "O", "O", "O", "P", "Q", "R", "R", "S", "T", "T", "U", "V", "W", "X", "Y", "Z", "?", "?"]; // initial tile pool for 4 letter rack mode

const initialtiles5 = ["A", "A", "A", "A", "A", "B", "C", "D", "D", "E", "E", "E", "E", "E", "E", "F", "G", "H", "I", "I", "I", "I", "I", "J", "K", "L", "L", "M", "N", "N", "N", "O", "O", "O", "O", "P", "Q", "R", "R", "R", "S", "S", "T", "T", "T", "U", "V", "W", "X", "Y", "Z", "?", "?"]; // initial tile pool for 5 letter rack mode

const initialtiles6 = ["A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "M", "M", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "S", "S", "S", "T", "T", "T", "T", "U", "U", "U", "V", "W", "X", "Y", "Z", "?", "?"]; // initial tile pool for 6 letter rack mode

const initialtiles7 = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z", "?", "?"]; // initial tile pool for 7 letter rack mode

const squareunused = ".";
const usedbynoone = "";
const nodirection = "";
const availableActionNone = 0;
const availableActionStart = 1;
const availableActionJoin = 2;
const availableActionReconnect = 3;
function PrisonBreak() {
  _s();

  const {
    0: isrejoin,
    1: setIsrejoin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // Used when player loses connection and rejoins

  const {
    0: gameid,
    1: setGameid
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: nickname,
    1: setNickname
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: prisonersOrGuards,
    1: setPrisonersOrGuards
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: wsmessage,
    1: setWsmessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''); // Latest messages from the websocket

  const {
    0: racksize,
    1: setRacksize
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(4); // Default to 4 letter racks

  let host = false ? undefined : 'ws://localhost:5000';

  const acceptMessage = message => {
    // React is hard to understand. If I reference prisonersOrGuards here it will always be the initial value.
    setWsmessage(message.data);
  };

  const {
    0: client
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new _ws__WEBPACK_IMPORTED_MODULE_3__["default"](host, acceptMessage));
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => client.connect(), []);
  return prisonersOrGuards === '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Lobby, {
    setIsrejoin: setIsrejoin,
    wsmessage: wsmessage // client={client}
    ,
    gameid: gameid,
    setGameid: setGameid,
    nickname: nickname,
    setNickname: setNickname,
    setPrisonersOrGuards: setPrisonersOrGuards,
    racksize: racksize,
    setRacksize: setRacksize
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 7
  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Game, {
    isrejoin: isrejoin,
    prisonersOrGuards: prisonersOrGuards,
    gameid: gameid,
    nickname: nickname,
    wsmessage: wsmessage,
    client: client,
    racksize: racksize
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 173,
    columnNumber: 7
  }, this);
}

_s(PrisonBreak, "V9E3AtX+Shedf8xYsdkRh4C3XLE=");

_c = PrisonBreak;

const Lobby = ({
  setIsrejoin,
  wsmessage,
  gameid,
  setGameid,
  nickname,
  setNickname,
  setPrisonersOrGuards,
  racksize,
  setRacksize // Option for rack size

}) => {
  _s2();

  const {
    0: gamelist,
    1: setGamelist
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // Game info by game id

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let msg = wsmessage;
    if (msg !== '') processLobbyMessage(msg);
  }, [wsmessage]);

  function processLobbyMessage(message) {
    try {
      let messageData = JSON.parse(message);
      let sendergameid = messageData.gameid;
      let sendernickname = messageData.nickname;
      let wt = messageData.whoseturn;
      let rs = messageData.racksize;

      if (sendergameid && sendergameid.length > 0 && rs && wt && wt.length > 0) {
        let anyUpdates = false;
        let senderPG = messageData.sender;
        let newGamelist = [...gamelist];
        let gi = getGamelistIndex(sendergameid);
        let newPlayingP = senderPG === "P" ? true : gi > -1 ? gamelist[gi].playingP : false;
        let newPlayingG = senderPG === "G" ? true : gi > -1 ? gamelist[gi].playingG : false;
        let newRacksize = rs;
        let newgamestatus = "Unknown";

        if (wt === "X") {
          newgamestatus = "Game over";
        } else if (wt === "P") {
          newgamestatus = "Prisoners turn";
        } else if (wt === "G") {
          newgamestatus = "Guards turn";
        }

        let newgamedata = {
          gameid: sendergameid,
          nicknameP: senderPG === "P" ? sendernickname : gi > -1 ? gamelist[gi].nicknameP : "",
          nicknameG: senderPG === "G" ? sendernickname : gi > -1 ? gamelist[gi].nicknameG : "",
          gamestatus: newgamestatus,
          playingP: newPlayingP,
          playingG: newPlayingG,
          racksize: newRacksize
        };

        if (gi < 0) {
          // Game not in list yet, put it in the list
          anyUpdates = true;
          newGamelist = [...newGamelist, newgamedata];
        } else {
          // Game is in the list, check for needed updates
          let oldgamedata = gamelist[gi];

          if (oldgamedata.nicknameP !== newgamedata.nicknameP || oldgamedata.nicknameG !== newgamedata.nicknameG || oldgamedata.gamestatus !== newgamedata.gamestatus || oldgamedata.playingP !== newgamedata.playingP || oldgamedata.playingG !== newgamedata.playingG || oldgamedata.racksize !== newgamedata.racksize) {
            anyUpdates = true;
            newGamelist[gi] = newgamedata;
          }
        }

        if (anyUpdates) {
          setGamelist(newGamelist);
        }
      }
    } catch {
      window.alert("Error processing lobby message");
    }
  }

  function getGamelistIndex(gid) {
    for (var i = 0; i < gamelist.length; ++i) {
      if (gamelist[i].gameid === gid) {
        return i;
      }
    }

    return -1;
  }

  function isPlayingP(gid) {
    let gi = getGamelistIndex(gid);
    return gi < 0 ? false : gamelist[gi].playingP;
  }

  function availableActionP(gd) {
    if (nickname.length === 0 || gd.gamestatus === "Game over") {
      return availableActionNone;
    }

    if (!gd.playingP) {
      return availableActionStart;
    }

    if (gd.nicknameP === nickname) {
      return availableActionReconnect;
    }

    return availableActionNone;
  }

  function availableActionG(gd) {
    if (nickname.length === 0 || gd.gamestatus === "Game over") {
      return availableActionNone;
    }

    if (!gd.playingG) {
      return availableActionJoin;
    }

    if (gd.nicknameG === nickname) {
      return availableActionReconnect;
    }

    return availableActionNone;
  }

  function selectRackSize(newRacksize) {
    setRacksize(newRacksize);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container w3-teal w3-bar",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "w3-bar-item w3-centre myHeadingFont",
        children: "Prison Break Lobby"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-bar-item w3-right",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "../../",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "material-icons",
              "data-toggle": "tooltip",
              title: "Home",
              children: "home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-bar",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Nickname:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "w3-input w3-border w3-blue myCommonFont",
            type: "text",
            name: "nickname",
            value: nickname,
            onChange: e => {
              setNickname(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-bar",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "pbPlayerTitle",
              children: ["PRISONERS", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "material-icons",
                children: "arrow_right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 309,
                columnNumber: 60
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Game ID:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "w3-input w3-border w3-blue myCommonFont",
            type: "text",
            name: "gameid",
            value: gameid,
            onChange: e => {
              setGameid(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Rack Size:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 324,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            id: "selectracksize4",
            className: racksize === 4 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
            onClick: () => selectRackSize(4),
            "data-toggle": "tooltip",
            title: "4 letter racks, 9 x 9 board",
            autoFocus: true,
            children: "4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            id: "selectracksize5",
            className: racksize === 5 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
            onClick: () => selectRackSize(5),
            "data-toggle": "tooltip",
            title: "5 letter racks, 11 x 11 board",
            children: "5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            id: "selectracksize6",
            className: racksize === 6 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
            onClick: () => selectRackSize(6),
            "data-toggle": "tooltip",
            title: "6 letter racks, 13 x 13 board",
            children: "6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            id: "selectracksize7",
            className: racksize === 7 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
            onClick: () => selectRackSize(7),
            "data-toggle": "tooltip",
            title: "7 letter racks, 15 x 15 board",
            children: "7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 346,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "pbLobbyCellBlockInfo",
            children: [racksize, " letter racks, ", racksize * 2 + 1, " x ", racksize * 2 + 1, " board."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            id: "startgame",
            className: buttonClassName,
            onClick: function () {
              if (nickname.length === 0) {
                window.alert("Please enter nickname before starting a game");
              } else if (gameid.length > 0) {
                if (isPlayingP(gameid)) {
                  window.alert("Prisoners already playing that game");
                } else {
                  setPrisonersOrGuards('P');
                }
              } else {
                window.alert("Please enter Game ID before starting a game");
              }
            },
            children: "Start Game"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-bar",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "pbPlayerTitle",
              children: ["GUARDS", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "material-icons",
                children: "arrow_right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 378,
                columnNumber: 55
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 378,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 378,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "myCommonFont",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: "Find and click the \"Join Game\" button for your game."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 381,
              columnNumber: 44
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 381,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-bar",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "material-icons w3-right",
              children: "report_problem"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 388,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 388,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "myCommonFont",
            children: "If you lost connection, find and click the \"Reconnect\" button for your game id."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 391,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-bar",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "myCommonFont",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Game list:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 398,
              columnNumber: 42
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 398,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 397,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
            className: "w3-table-all w3-card-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                className: "w3-blue h4 myCommonFont",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  className: "w3-border-right",
                  children: "Game ID"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 404,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  className: "w3-border-right",
                  children: "Prisoners"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 405,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  className: "w3-border-right",
                  children: "Guards"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 406,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  className: "w3-border-right",
                  children: "Rack Size"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 407,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  children: "Game Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 408,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 403,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 402,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
              children: gamelist.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                className: "myCommonFont w3-hover-green",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "w3-border-right",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                    children: value.gameid
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 414,
                    columnNumber: 53
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 414,
                  columnNumber: 21
                }, undefined), availableActionP(value) === availableActionNone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  id: `PrisonersNoAction${index}`,
                  className: "w3-border-right",
                  children: "No action available"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 416,
                  columnNumber: 23
                }, undefined) : availableActionP(value) === availableActionReconnect ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  id: `PrisonersRejoin${index}`,
                  className: "w3-border-right",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "w3-button w3-red w3-round w3-hover-black",
                    onClick: function () {
                      setIsrejoin(true);
                      setGameid(value.gameid);
                      setPrisonersOrGuards('P');
                      setRacksize(value.racksize);
                    },
                    children: "Reconnect"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 419,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 418,
                  columnNumber: 23
                }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  id: `PrisonersStart${index}`,
                  className: "w3-border-right",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: buttonClassName,
                    onClick: function () {
                      setGameid(value.gameid);
                      setPrisonersOrGuards('P');
                    },
                    children: "Start Game"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 432,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 431,
                  columnNumber: 23
                }, undefined), availableActionG(value) === availableActionNone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  id: `GuardsNoAction${index}`,
                  className: "w3-border-right",
                  children: "No action available"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 443,
                  columnNumber: 23
                }, undefined) : availableActionG(value) === availableActionReconnect ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  id: `GuardsRejoin${index}`,
                  className: "w3-border-right",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: buttonClassName,
                    onClick: function () {
                      setIsrejoin(true);
                      setGameid(value.gameid);
                      setPrisonersOrGuards('G');
                      setRacksize(value.racksize);
                    },
                    children: "Reconnect"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 446,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 445,
                  columnNumber: 23
                }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  id: `GuardsJoin${index}`,
                  className: "w3-border-right",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: buttonClassName,
                    onClick: function () {
                      setGameid(value.gameid);
                      setPrisonersOrGuards('G');
                      setRacksize(value.racksize);
                    },
                    children: "Join Game"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 459,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 458,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  id: `RackSize${index}`,
                  className: "w3-center w3-border-right",
                  children: value.racksize
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 470,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  id: `GameStatus${index}`,
                  children: value.gamestatus
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 473,
                  columnNumber: 21
                }, undefined)]
              }, `OtherGame${index}`, true, {
                fileName: _jsxFileName,
                lineNumber: 413,
                columnNumber: 19
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 411,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 401,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container w3-teal",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Have fun!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 484,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 282,
    columnNumber: 5
  }, undefined);
};

_s2(Lobby, "S8yjMzgHtesJI/ynf+v9T6HCgMc=");

_c2 = Lobby;

const Square = props => {
  // squareusedby, ri, ci, c, onClick
  // need squareusedby to pick css className corresponding to who played the tile on the square
  // need ri, ci to display alternating backgrounds on unused squares
  // need c to represent which tile is on the square, if any
  // need onClick to handle square click at a higher level
  // need rcd to display selected direction arrow when appropriate
  // need racksize to determine centre and board aarry edge positions
  const edge = props.racksize * 2;
  const middle = props.racksize;
  const tdclass = props.c !== squareunused ? "pbSquareInner PlayerTile" : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "r" ? "pbSquareInner RightArrow" : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "d" ? "pbSquareInner DownArrow" : props.ri === middle && props.ci === middle ? "pbSquareInner CenterSquare" : (props.ri === 0 || props.ri === middle || props.ri === edge) && (props.ci === 0 || props.ci === middle || props.ci === edge) ? "pbSquareInner EscapeHatch" : props.ri % 2 === props.ci % 2 ? "pbSquareInner style1" : "pbSquareInner style2"; // Alternating square styles

  const tdvalue = props.c !== squareunused ? props.c : tdclass.indexOf("RightArrow") > -1 ? "➡" : tdclass.indexOf("DownArrow") > -1 ? "⬇" : tdclass.indexOf("CenterSquare") > -1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
    className: "material-icons",
    children: "stars"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 522,
    columnNumber: 9
  }, undefined) : ".";
  /* If I put empty string or &nbsp; then it affects the display oddly  */

  return tdclass.indexOf("EscapeHatch") > -1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "material-icons",
      children: "run_circle"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 526,
    columnNumber: 5
  }, undefined) : props.c === squareunused ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: tdvalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 530,
    columnNumber: 7
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `pbSquareTileText ${props.squareusedby + (props.c === "Q" ? " u" : "")}`,
      children: tdvalue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 534,
    columnNumber: 7
  }, undefined);
};

_c3 = Square;

const Board = ({
  onClick,
  squares,
  usedby,
  rcd,
  racksize
}) => {
  const renderSquare = (ri, ci, c, squareusedby) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: "pbSquareOuter",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Square, {
        c: c,
        ci: ci,
        ri: ri,
        squareusedby: squareusedby,
        rcd: rcd,
        onClick: () => onClick(ri, ci),
        racksize: racksize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 544,
        columnNumber: 9
      }, undefined)
    }, `Square${ri}-${ci}`, false, {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 7
    }, undefined);
  };

  const renderRow = ri => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      className: "pbRow",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        className: "pbBoardRowHeader",
        id: "BoardHeaderLeft",
        children: boardRowHeaders[ri]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 559,
        columnNumber: 9
      }, undefined), squares[ri].map((c, ci) => renderSquare(ri, ci, c, usedby[ri][ci])), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        className: "pbBoardRowHeader",
        id: "BoardHeaderRight",
        children: boardRowHeaders[ri]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 563,
        columnNumber: 9
      }, undefined)]
    }, `BoardRow${ri}`, true, {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 7
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
    className: "pbBoard",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
        className: "pbBoardColumnHeaderRow",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardHeaderTopLeft",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 574,
          columnNumber: 11
        }, undefined), squares.map((_$, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardColumnHeader",
          children: boardColumnHeaders[i]
        }, `TopColumnHeader${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 576,
          columnNumber: 13
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardHeaderTopRight",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 580,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 573,
        columnNumber: 9
      }, undefined), squares.map((r, ri) => renderRow(ri)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
        className: "pbBoardColumnHeaderRow",
        id: "BoardHeaderBottom",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardHeaderBottomLeft",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 584,
          columnNumber: 11
        }, undefined), squares.map((_$, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardColumnHeader",
          children: boardColumnHeaders[i]
        }, `BottomColumnHeader${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 586,
          columnNumber: 13
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardHeaderBottomRight",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 590,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 583,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 571,
    columnNumber: 5
  }, undefined);
};

_c4 = Board;

const Game = ({
  isrejoin,
  prisonersOrGuards,
  gameid,
  nickname,
  wsmessage,
  client,
  racksize // Option for rack size

}) => {
  _s3();

  const middle = racksize; // Middle element in row or column array

  const edge = racksize * 2; // Last element in row or column array

  const initialtiles = racksize === 6 ? initialtiles6 : racksize === 7 ? initialtiles7 : racksize === 5 ? initialtiles5 : initialtiles4;
  const initialsquares = Array(edge + 1).fill(Array(edge + 1).fill(squareunused));
  const initialusedby = Array(edge + 1).fill(Array(edge + 1).fill(usedbynoone));
  const {
    0: tiles,
    1: setTiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([...initialtiles]);
  const {
    0: ptiles,
    1: setPtiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: gtiles,
    1: setGtiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: squares,
    1: setSquares
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([...initialsquares]);
  const {
    0: usedby,
    1: setUsedby
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([...initialusedby]);
  const {
    0: selection,
    1: setSelection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-1); // relative to rack of player making a play

  const {
    0: whoseturn,
    1: setWhoseturn
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("P"); // game starts with prisoners play

  const {
    0: currentcoords,
    1: setCurrentcoords
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: rescues,
    1: setRescues
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: rcd,
    1: setRcd
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([-1, -1, nodirection]);
  const {
    0: passed,
    1: setPassed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // true when opponent just passed; if both pass the game ends

  const {
    0: moves,
    1: setMoves
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // move history, each element is the array is a json object of info about the move

  const {
    0: snapshot,
    1: setSnapshot
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    squares: [...initialsquares],
    usedby: [...initialusedby],
    ptiles: [],
    gtiles: []
  });
  const {
    0: jokeindex,
    1: setJokeindex
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: allowRewind,
    1: setAllowRewind
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: oppname,
    1: setOppname
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: chatmsgs,
    1: setChatmsgs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const rescueSound = new Audio("https://assets.coderrocketfuel.com/pomodoro-times-up.mp3");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (rescues >= 0) {
      rescueSound.play();
    }
  }, []); // Play a sound when a rescue is made

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let newji = jokeindex + 1;

    if (newji >= jokes.length) {
      newji = 0;
    }

    setJokeindex(newji);
    const interval = setInterval(() => {
      // If it is not my turn && the game has not ended
      if (prisonersOrGuards !== whoseturn && whoseturn !== "X") {
        // I am waiting for opponent move to come through but sometimes it gets missed (no idea why)
        console.log("Interval: prisonersOrGuards=" + prisonersOrGuards + " whoseturn=" + whoseturn + " at " + Date().toLocaleString());
        requestGameData(); // Send a request for game data in case opponent moved and we missed the update
      }
    }, movewaittime); // this many milliseconds between above code block executions

    return () => clearInterval(interval);
  }, [whoseturn]); // want up to date value of whoseturn to decide whether to ask for an update

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // This code executes first time Game is used only
    if (!isrejoin && prisonersOrGuards === "P") {
      // Prisoner is starting the game so pick racks
      let tempPTiles = [];
      let tempGTiles = [];
      let tempTiles = [...initialtiles];

      while (tempPTiles.length < racksize) {
        let rand = Math.floor(Math.random() * tempTiles.length);
        tempPTiles.push(tempTiles[rand]);
        tempTiles.splice(rand, 1);
        rand = Math.floor(Math.random() * tempTiles.length);
        tempGTiles.push(tempTiles[rand]);
        tempTiles.splice(rand, 1);
      }

      tempPTiles.sort();
      tempGTiles.sort();
      setGtiles(tempGTiles);
      setPtiles(tempPTiles);
      setTiles(tempTiles);
      setSnapshot({
        squares: [...initialsquares],
        usedby: [...initialusedby],
        ptiles: [...tempPTiles],
        gtiles: [...tempGTiles]
      });
      client.send(JSON.stringify({
        type: "pb",
        func: "hello",
        sender: prisonersOrGuards,
        gameid: gameid,
        nickname: nickname,
        // player nickname
        whoseturn: whoseturn,
        racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)

      }));
    } else {
      // Prisoner rejoin or guard join or guard rejoin
      try {
        client.send(JSON.stringify({
          gameid: gameid,
          // the id for the game
          nickname: nickname,
          // player nickname
          type: "pb",
          // prisonbreak
          func: "requestgamedata",
          // request game data
          sender: prisonersOrGuards
        }));
      } catch {}
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let msg = wsmessage;
    if (msg !== '') processGameMessage(msg);
  }, [wsmessage]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    scrollToBottom("ScrollableMoves");
  }, [moves]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    scrollToBottom("ScrollableChat");
  }, [chatmsgs]);

  function putAtMoveStart() {
    setSelection(-1);
    setAllowRewind(false);
    setRcd(-1, -1, nodirection);
    setCurrentcoords([]);
  }

  function processGameMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.type === "announce") {
      client.send(JSON.stringify({
        type: "pb",
        func: "hello",
        sender: prisonersOrGuards,
        gameid: gameid,
        nickname: nickname,
        // player nickname
        whoseturn: whoseturn,
        racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)

      }));
    } else if (messageData.gameid === gameid && messageData.type === "pb") {
      // This instance of a prison break game
      if (messageData.sender != prisonersOrGuards && oppname === "" && messageData.nickname && messageData.nickname.length > 0) {
        // Opponent sent a message including their nickname and I don't have their nickname yet
        setOppname(messageData.nickname);
      }

      if (messageData.func === "requestgamedata" && messageData.sender !== prisonersOrGuards) {
        // Opponent requested game info
        client.send(JSON.stringify({
          gameid: gameid,
          // the id for the game
          nickname: nickname,
          // player nickname
          type: "pb",
          // prisonbreak
          func: "providegamedata",
          // provide game data
          sender: prisonersOrGuards,
          tiles: tiles,
          squares: squares,
          ptiles: ptiles,
          gtiles: gtiles,
          usedby: usedby,
          whoseturn: whoseturn,
          snapshot: snapshot,
          passed: passed,
          moves: moves,
          rescues: rescues,
          racksize: racksize,
          // rack size option (lobby needs to know for when guards join game and they call Game)
          allowRewind: allowRewind
        }));
      }

      if (messageData.func === "providegamedata" && messageData.sender !== prisonersOrGuards && whoseturn !== prisonersOrGuards && whoseturn !== "X") {
        // opponent provided game data and this player is still waiting to see opponent move
        setTiles(messageData.tiles);
        setSquares(messageData.squares);
        setPtiles(messageData.ptiles);
        setGtiles(messageData.gtiles);
        setUsedby(messageData.usedby);
        setWhoseturn(messageData.whoseturn);
        setSnapshot(messageData.snapshot);
        setPassed(messageData.passed);
        setMoves(messageData.moves);
        setRescues(messageData.rescues);
        setAllowRewind(messageData.allowRewind);
      }

      if (messageData.func === "ept" && prisonersOrGuards === "G") {
        // Prisoners sent end prisoners turn, Guards pick it up
        putAtMoveStart();
        setWhoseturn(messageData.whoseturn);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setPtiles(messageData.ptiles);
        setTiles(messageData.tiles);
        setPassed(messageData.passed);
        setMoves(messageData.moves);
        setRescues(messageData.rescues);
        setSnapshot({
          squares: [...messageData.squares],
          usedby: [...messageData.usedby],
          ptiles: [...messageData.ptiles],
          gtiles: [...gtiles]
        });
      }

      if (messageData.func === "egt" && prisonersOrGuards === "P") {
        // Guards sent end guards turn, Prisoners pick it up
        putAtMoveStart();
        setWhoseturn(messageData.whoseturn);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setGtiles(messageData.gtiles);
        setTiles(messageData.tiles);
        setPassed(messageData.passed);
        setMoves(messageData.moves);
        setSnapshot({
          squares: [...messageData.squares],
          usedby: [...messageData.usedby],
          ptiles: [...ptiles],
          gtiles: [...messageData.gtiles]
        });
      }

      if (messageData.func === "undoturn" && messageData.sender !== prisonersOrGuards) {
        // opponent undid their last turn
        putAtMoveStart();
        setTiles(messageData.tiles);
        setPtiles(messageData.ptiles);
        setGtiles(messageData.gtiles);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setWhoseturn(messageData.whoseturn);
        setRescues(messageData.rescues);
        setPassed(messageData.passed);
        setMoves(messageData.moves);
        setSnapshot(messageData.snapshot);
      }

      if (messageData.func === "allowundo" && messageData.sender !== prisonersOrGuards) {
        // Opponent clicked button to allow undo turn
        setAllowRewind(true);
      }

      if (messageData.func === "chat" && messageData.sender != prisonersOrGuards) {
        // Opponent chat message
        let newChatmsgs = [...chatmsgs, {
          from: messageData.nickname,
          msg: messageData.sendmsg
        }];
        setChatmsgs(newChatmsgs);
      }
    }
  } // Calling setSelection (from handleKeyDown) then handleBoardSquareClick does not let it recognize selection with the new value
  // So I pass newSelection when I want to also set it, otherwise I pass -1 to instruct it to use current value of selection
  // Also passing newRcd


  const handleBoardSquareClick = (ri, ci, newSelection, newRcd) => {
    let newSquares = [...squares];
    let newUsedby = [...usedby];
    let newPtiles = [...ptiles];
    let newGtiles = [...gtiles];
    let newRow = [...squares[ri]];
    let squarevalue = squares[ri][ci];
    let newCurrentcoords = [...currentcoords];
    let coord = String(ri) + "-" + String(ci);
    let cci = currentcoords.indexOf(coord);

    if (newSelection === -1) {
      newSelection = selection;
      newRcd = rcd;
    }

    if (newSelection > -1 && squarevalue === squareunused) {
      // tile is selected from rack and clicked square is not used yet
      newRow[ci] = whoseturn === "P" ? newPtiles[newSelection] : newGtiles[newSelection];
      newSquares[ri] = [...newRow];
      whoseturn === "P" ? newPtiles.splice(newSelection, 1) : newGtiles.splice(newSelection, 1);
      let newUsedbyRow = [...newUsedby[ri]];
      newUsedbyRow[ci] = whoseturn;
      newUsedby[ri] = [...newUsedbyRow];

      if (whoseturn === "P" && newSelection === newPtiles.length) {
        newSelection = newSelection - 1;
      }

      if (whoseturn === "G" && newSelection === newGtiles.length) {
        newSelection = newSelection - 1;
      }

      setSelection(newSelection);
      setSquares(newSquares);
      setUsedby(newUsedby);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setCurrentcoords([...currentcoords, coord]);
      setRcd(newRcd); // key down handler figured it out

      return;
    }

    if (cci > -1) {
      // clicked square has a tile on it from the current move in progress
      whoseturn === "P" ? newPtiles.push(squarevalue) : newGtiles.push(squarevalue);
      let newRow = [...newSquares[ri]];
      newRow[ci] = squareunused;
      newSquares[ri] = [...newRow];
      let newUsedbyRow = [...newUsedby[ri]];
      newUsedbyRow[ci] = usedbynoone;
      newUsedby[ri] = [...newUsedbyRow];
      setSelection(whoseturn === "P" ? newPtiles.length - 1 : newGtiles.length - 1);
      newCurrentcoords.splice(cci, 1);
      setSquares(newSquares);
      setUsedby(newUsedby);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setCurrentcoords(newCurrentcoords);
      setRcd(-1, -1, nodirection); // make player click again to set direction

      return;
    } // They didn't click a square to place a selected tile there
    // They didn't click a square to remove an existing tile


    if (squares[ri][ci] === squareunused) {
      // There is nothing on the square so they are picking where to place the next tile via keyboard
      let newDirection = rcd[0] !== ri || rcd[1] !== ci ? "r" : //click new square, start with "r"
      rcd[2] === "r" ? "d" : //click same square that was "r", change to "d"
      rcd[2] === "d" ? nodirection : //click same square that was "d", change to nodirection
      "r"; // click same square that was nodirection, change to "r"

      newRcd = [ri, ci, newDirection];
      setRcd(newRcd);
      return;
    }
  };

  const handleRackTileClick = tileindex => {
    // If no tile is selected already then set the selection
    if (selection === -1) {
      setSelection(tileindex);
      return;
    } // If the same tile is already selected then unselect


    if (selection === tileindex) {
      setSelection(-1);
      return;
    } // A tile was already selected and they clicked another tile - move the tile


    let newrack = prisonersOrGuards === "P" ? [...ptiles] : [...gtiles];
    let movedtile = newrack[selection];

    for (var i = selection; i >= tileindex; i--) {
      newrack[i] = newrack[i - 1];
    }

    newrack[tileindex] = movedtile;
    prisonersOrGuards === "P" ? setPtiles(newrack) : setGtiles(newrack);
    setSelection(-1);
  };

  const endPrisonersTurn = () => {
    if (!isPlayValid()) {
      return;
    }

    let rewindInfo = getRewindInfo();
    let newRescues = rescues;
    let escapehatches = ["0-0", "0-" + middle, "0-" + edge, middle + "-0", middle + "-" + edge, edge + "-0", edge + "-" + middle, edge + "-" + edge]; // coords of escape hatches

    for (var i = 0; i < currentcoords.length; i++) {
      if (escapehatches.indexOf(currentcoords[i]) > -1) {
        newRescues = newRescues + 1;
      }
    }

    let newPtiles = [...ptiles];
    let newTiles = [...tiles];

    while (newPtiles.length < racksize && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newPtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newPtiles.sort();
    let newWhoseturn = newPtiles.length > 0 ? "G" : "X"; // X = game over

    if (usedby[0][0] !== usedbynoone && usedby[0][middle] !== usedbynoone && usedby[0][edge] !== usedbynoone && usedby[middle][0] !== usedbynoone && usedby[middle][edge] !== usedbynoone && usedby[edge][0] !== usedbynoone && usedby[edge][middle] !== usedbynoone && usedby[edge][edge] !== usedbynoone) {
      newWhoseturn = "X"; // No escape hatches left
    }

    let playinfo = getPlayInfo();
    let newMove = {
      by: "P",
      type: "PLAY",
      rewindInfo: rewindInfo,
      mainword: playinfo.mainword,
      extrawords: playinfo.extrawords,
      pos: playinfo.pos
    };
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setPtiles(newPtiles);
    setTiles(newTiles);
    setPassed(false);
    setMoves(newMoves);
    setRescues(newRescues);
    setSnapshot({
      squares: [...squares],
      usedby: [...usedby],
      ptiles: [...newPtiles],
      gtiles: [...gtiles]
    });
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      sender: prisonersOrGuards,
      squares: squares,
      // this was being changed as the tiles were being played
      usedby: usedby,
      // this was being changed as the tiles were being played
      ptiles: newPtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      whoseturn: newWhoseturn,
      // may have ended the game (whoseturn=X)
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      passed: false,
      // did not just pass
      moves: newMoves,
      // a move was made
      rescues: newRescues // may have rescued another prisoner

    }));
  };

  const endGuardsTurn = () => {
    if (!isPlayValid()) {
      return;
    }

    let rewindInfo = getRewindInfo();
    let newGtiles = [...gtiles];
    let newTiles = [...tiles];

    while (newGtiles.length < racksize && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newGtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newGtiles.sort();
    let snapsquares = [...squares];
    let snapusedby = [...usedby];
    let snapptiles = [...ptiles];
    let snapgtiles = [...gtiles];
    let newWhoseturn = newGtiles.length > 0 ? "P" : "X"; // X = game over

    if (usedby[0][0] !== usedbynoone && usedby[0][middle] !== usedbynoone && usedby[0][edge] !== usedbynoone && usedby[middle][0] !== usedbynoone && usedby[middle][edge] !== usedbynoone && usedby[edge][0] !== usedbynoone && usedby[edge][middle] !== usedbynoone && usedby[edge][edge] !== usedbynoone) {
      newWhoseturn = "X"; // No escape hatches left
    }

    let playinfo = getPlayInfo();
    let newMove = {
      by: "G",
      type: "PLAY",
      rewindInfo: rewindInfo,
      mainword: playinfo.mainword,
      extrawords: playinfo.extrawords,
      pos: playinfo.pos
    };
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setGtiles(newGtiles);
    setTiles(newTiles);
    setPassed(false);
    setMoves(newMoves);
    setSnapshot({
      squares: snapsquares,
      usedby: snapusedby,
      ptiles: snapptiles,
      gtiles: snapgtiles
    });
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      sender: prisonersOrGuards,
      squares: squares,
      // this was being changed as the tiles were being played
      usedby: usedby,
      // this was being changed as the tiles were being played
      gtiles: newGtiles,
      // we picked new tiles for guards rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      passed: false,
      // did not just pass
      moves: newMoves,
      // a move was made
      whoseturn: newWhoseturn,
      // may have ended the game (whoseturn=X)
      racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)

    }));
  };

  const swapPrisonersTiles = () => {
    if (tiles.length < racksize) {
      window.alert("Need " + racksize + " tiles in the bag to exchange");
      return;
    }

    let rewindInfo = getRewindInfo();
    let newPtiles = [];
    let newTiles = [...tiles];

    while (newPtiles.length < racksize && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newPtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newPtiles.sort();
    newTiles = [...newTiles, ...snapshot.ptiles];
    newTiles.sort();
    let newMove = {
      by: "P",
      type: "SWAP",
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setWhoseturn("G");
    setPtiles(newPtiles);
    setTiles(newTiles);
    setPassed(false);
    setMoves(newMoves);
    setSnapshot({
      squares: [...snapshot.squares],
      usedby: [...snapshot.usedby],
      ptiles: [...newPtiles],
      gtiles: [...gtiles]
    });
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      sender: prisonersOrGuards,
      whoseturn: "G",
      // swap never ends the game so go to opponent
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      squares: snapshot.squares,
      // revert to start of turn squares
      usedby: snapshot.usedby,
      // revert to start of turn used by
      ptiles: newPtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      passed: false,
      // did not just pass
      moves: newMoves,
      // a move was made
      rescues: rescues // no rescues on an exchange

    }));
  };

  const swapGuardsTiles = () => {
    if (tiles.length < racksize) {
      window.alert("Need " + racksize + " tiles in the bag to exchange");
      return;
    }

    let rewindInfo = getRewindInfo();
    let newGtiles = [];
    let newTiles = [...tiles];

    while (newGtiles.length < racksize && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newGtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newGtiles.sort();
    newTiles = [...newTiles, ...snapshot.gtiles];
    newTiles.sort();
    let newMove = {
      by: "G",
      type: "SWAP",
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setWhoseturn("P");
    setGtiles(newGtiles);
    setTiles(newTiles);
    setPassed(false);
    setMoves(newMoves);
    setSnapshot({
      squares: [...snapshot.squares],
      usedby: [...snapshot.usedby],
      ptiles: [...ptiles],
      gtiles: [...newGtiles]
    });
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      sender: prisonersOrGuards,
      whoseturn: "P",
      // swap never ends the game so go to opponent
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      squares: snapshot.squares,
      // revert to start of turn squares
      usedby: snapshot.usedby,
      // revert to start of turn used by
      gtiles: newGtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      passed: false,
      // did not just pass
      moves: newMoves // a move was made

    }));
  };

  function isPlayValid() {
    if (squares[middle][middle] === squareunused) {
      window.alert("First play must hit center square");
      return false;
    }

    let numrows = edge + 1;
    let numcols = edge + 1;
    let lowrow = numrows;
    let highrow = -1;
    let lowcol = numcols;
    let highcol = -1;

    for (var r = 0; r < numrows; ++r) {
      for (var c = 0; c < numcols; ++c) {
        if (squares[r][c] !== squareunused) {
          if (!(r > 0 && squares[r - 1][c] !== squareunused) && !(c > 0 && squares[r][c - 1] !== squareunused) && !(r < edge && squares[r + 1][c] !== squareunused) && !(c < edge && squares[r][c + 1] !== squareunused)) {
            window.alert("Each played tile must be part of a word");
            return false;
          }

          if (snapshot.squares[r][c] === squareunused) {
            // This square was played on this turn
            if (r < lowrow) {
              lowrow = r;
            }

            if (r > highrow) {
              highrow = r;
            }

            if (c < lowcol) {
              lowcol = c;
            }

            if (c > highcol) {
              highcol = c;
            }
          }
        }
      }
    }

    if (lowrow === numrows) {
      window.alert("You didn't play any tiles");
      return false;
    }

    if (lowrow !== highrow && lowcol !== highcol) {
      window.alert("Tiles played must be in a straight line");
      return false;
    }

    let playthru = false;
    let hookmade = false;

    for (var r = lowrow; r <= highrow; ++r) {
      for (var c = lowcol; c <= highcol; ++c) {
        if (squares[r][c] === squareunused) {
          window.alert("There is a gap in your word");
          return false;
        }

        if (snapshot.squares[r][c] !== squareunused) {
          playthru = true;
        }

        if (lowrow === highrow && r > 0 && squares[r - 1][c] !== squareunused) {
          hookmade = true;
        }

        if (lowrow === highrow && r < edge && squares[r + 1][c] !== squareunused) {
          hookmade = true;
        }

        if (lowcol === highcol && c > 0 && squares[r][c - 1] !== squareunused) {
          hookmade = true;
        }

        if (lowcol === highcol && c < edge && squares[r][c + 1] !== squareunused) {
          hookmade = true;
        }
      }
    } // Check play to or from a tile (play through but not either side)


    if (lowrow === highrow && lowcol > 0 && snapshot.squares[lowrow][lowcol - 1] !== squareunused) {
      playthru = true;
    }

    if (lowrow === highrow && highcol < edge && snapshot.squares[lowrow][highcol + 1] !== squareunused) {
      playthru = true;
    }

    if (lowcol === highcol && lowrow > 0 && snapshot.squares[lowrow - 1][lowcol] !== squareunused) {
      playthru = true;
    }

    if (lowcol === highcol && highrow < edge && snapshot.squares[highrow + 1][lowcol] !== squareunused) {
      playthru = true;
    }

    if (!playthru && !hookmade && snapshot.squares[middle][middle] !== squareunused) {
      window.alert("Words must be connected");
      return false;
    }

    return true;
  }

  function getPlayInfo() {
    let playinfo = {};
    let mainword = "";
    let extrawords = [];
    let wordstartcoord = "";
    let numrows = edge + 1;
    let numcols = edge + 1;
    let lowrow = numrows;
    let highrow = -1;
    let lowcol = numcols;
    let highcol = -1;
    let numcoords = currentcoords.length;

    for (var coord = 0; coord < numcoords; ++coord) {
      let row = parseInt(currentcoords[coord].split("-")[0]);
      let col = parseInt(currentcoords[coord].split("-")[1]);

      if (row < lowrow) {
        lowrow = row;
      }

      if (row > highrow) {
        highrow = row;
      }

      if (col < lowcol) {
        lowcol = col;
      }

      if (col > highcol) {
        highcol = col;
      }
    }

    if (lowrow < highrow || numcoords === 1) {
      // tiles placed on difference rows so play is vertical, or single tile played
      let col = lowcol; // lowcol and highcol will have the same value
      // find the lowest row number of the main word, which may be lower than that of the first played tile

      let lowestrow = lowrow;

      while (lowestrow > 0 && squares[lowestrow - 1][col] !== squareunused) {
        lowestrow = lowestrow - 1;
      } // find the highest row number of the main word, which may be higher than that of the last played tile


      let highestrow = highrow;

      while (highestrow < edge && squares[highestrow + 1][col] !== squareunused) {
        highestrow = highestrow + 1;
      }

      wordstartcoord = boardColumnHeaders[col] + boardRowHeaders[lowestrow]; // vertical play coords start with col header

      for (var row = lowestrow; row <= highestrow; ++row) {
        mainword = mainword + squares[row][col];
        let coord = row + "-" + col;

        if (currentcoords.indexOf(coord) > -1) {
          // This tile was played, check for hooks
          let lowestcol = col;

          while (lowestcol > 0 && squares[row][lowestcol - 1] !== squareunused) {
            lowestcol = lowestcol - 1;
          }

          let highestcol = col;

          while (highestcol < edge && squares[row][highestcol + 1] !== squareunused) {
            highestcol = highestcol + 1;
          }

          if (lowestcol < highestcol) {
            // hook was made
            let extraword = "";

            for (var c = lowestcol; c <= highestcol; ++c) {
              extraword = extraword + squares[row][c];
            }

            extrawords = [...extrawords, extraword];
          }
        }
      }
    }

    if (mainword.length < 2) {
      // Horizontal play or single tile drop that cannot be a vertical play
      let row = lowrow; // lowrow and highrow will have the same value
      // find the lowest col number of the main word, which may be lower than that of the first played tile

      let lowestcol = lowcol;

      while (lowestcol > 0 && squares[row][lowestcol - 1] !== squareunused) {
        lowestcol = lowestcol - 1;
      } // find the highest col number of the main word, which may be higher than that of the last played tile


      let highestcol = highcol;

      while (highestcol < edge && squares[row][highestcol + 1] !== squareunused) {
        highestcol = highestcol + 1;
      }

      wordstartcoord = boardRowHeaders[row] + boardColumnHeaders[lowestcol]; // horizontal play coords start with row header

      mainword = ""; // In case we got a 1 letter mainword in the previous block

      extrawords = []; // Ditto

      for (var col = lowestcol; col <= highestcol; ++col) {
        mainword = mainword + squares[row][col];
        let coord = row + "-" + col;

        if (currentcoords.indexOf(coord) > -1) {
          // This tile was played, check for hooks
          let lowestrow = row;

          while (lowestrow > 0 && squares[lowestrow - 1][col] !== squareunused) {
            lowestrow = lowestrow - 1;
          }

          let highestrow = row;

          while (highestrow < edge && squares[highestrow + 1][col] !== squareunused) {
            highestrow = highestrow + 1;
          }

          if (lowestrow < highestrow) {
            // hook was made
            let extraword = "";

            for (var r = lowestrow; r <= highestrow; ++r) {
              extraword = extraword + squares[r][col];
            }

            extrawords = [...extrawords, extraword];
          }
        }
      }
    }

    playinfo = {
      mainword: mainword,
      extrawords: extrawords,
      pos: wordstartcoord
    };
    return playinfo;
  }

  function getRewindInfo() {
    // Must be called before you start setting new values for stuff

    /* Rewind info is everything you need to reverse the move that we do not already have in the new move variable:
        squares: says what tile is on what square
        usedby: says who played what tile on what square (affects styling)
        rack: players rack before move was made 
        tiles: tile pool before picking new tiles
        rescues: rescue count
        passed: whether previous play was a pass
    */
    let rewindInfo = {
      squares: [...snapshot.squares],
      usedby: [...snapshot.usedby],
      rack: whoseturn === "G" ? [...snapshot.gtiles] : [...snapshot.ptiles],
      tiles: [...tiles],
      rescues: rescues,
      passed: passed
    };
    return rewindInfo;
  }

  function allowUndoLastTurn() {
    if (!allowRewind) {
      setAllowRewind(true);
      client.send(JSON.stringify({
        gameid: gameid,
        // the id for the game
        nickname: nickname,
        // player nickname
        type: "pb",
        // prisonbreak
        func: "allowundo",
        // allow undo last turn
        racksize: racksize,
        // rack size option (lobby needs to know for when guards join game and they call Game)
        sender: prisonersOrGuards // who is allowing it

      }));
    }
  }

  function performRewind() {
    /* Rewind the last move and take it off the end of the move list */
    let numMoves = moves.length;
    let lastMove = moves[moves.length - 1];
    let newSquares = [...lastMove.rewindInfo.squares];
    let newUsedby = [...lastMove.rewindInfo.usedby];
    let newTiles = [...lastMove.rewindInfo.tiles];
    let newPtiles = lastMove.by === "P" ? [...lastMove.rewindInfo.rack] : [...ptiles];
    let newGtiles = lastMove.by === "G" ? [...lastMove.rewindInfo.rack] : [...gtiles];
    let newRescues = lastMove.rewindInfo.rescues;
    let newWhoseturn = lastMove.by; // Back to their turn

    let newMoves = [...moves];
    newMoves.splice(numMoves - 1, 1);
    let newSnapshot = {
      squares: [...newSquares],
      usedby: [...newUsedby],
      gtiles: [...newGtiles],
      ptiles: [...newPtiles]
    };
    let newPassed = lastMove.passed;
    putAtMoveStart();
    setTiles(newTiles);
    setPtiles(newPtiles);
    setGtiles(newGtiles);
    setSquares(newSquares);
    setUsedby(newUsedby);
    setWhoseturn(newWhoseturn);
    setRescues(newRescues);
    setPassed(newPassed);
    setMoves(newMoves);
    setSnapshot(newSnapshot); // Just send everything even though some could be hard coded in processMessage by opponent

    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "undoturn",
      // undo last turn
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      sender: prisonersOrGuards,
      tiles: newTiles,
      // tile pool
      ptiles: newPtiles,
      // prisoners rack
      gtiles: newGtiles,
      // guards rack
      squares: newSquares,
      // revert to start of turn squares
      usedby: newUsedby,
      // revert to start of turn used by
      whoseturn: newWhoseturn,
      // swap never ends the game so go to opponent
      rescues: newRescues,
      // rescue count
      passed: newPassed,
      // whether previous play was a pass
      moves: newMoves,
      // a move was made
      snapshot: newSnapshot
    }));
  }

  const recallTiles = () => {
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setPtiles([...snapshot.ptiles]);
    setGtiles([...snapshot.gtiles]);
    setSelection(-1);
    setCurrentcoords([]);
    setRcd([-1, -1, nodirection]);
  };

  const prisonerPass = () => {
    let rewindInfo = getRewindInfo();
    let newWhoseturn = passed ? "X" : "G"; // If both players pass then end the game by using "X"

    let newMove = {
      by: "P",
      type: "PASS",
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    recallTiles(); // In case they put some tiles on the board before clicking Pass

    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setPassed(true);
    setMoves(newMoves);
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      sender: prisonersOrGuards,
      squares: snapshot.squares,
      // revert to start of turn squares
      usedby: snapshot.usedby,
      // revert to start of turn used by
      ptiles: snapshot.ptiles,
      // prisoners rack did not change
      tiles: tiles,
      // tile pool did not change
      whoseturn: newWhoseturn,
      // may have ended the game
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      passed: true,
      moves: newMoves,
      // a move was made
      rescues: rescues // no rescues on a pass

    }));
  };

  const guardsPass = () => {
    let rewindInfo = getRewindInfo();
    let newWhoseturn = passed ? "X" : "P"; // If both players pass then end the game by using "X"

    let newMove = {
      by: "G",
      type: "PASS",
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    recallTiles(); // In case they put some tiles on the board before clicking Pass

    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setPassed(true);
    setMoves(newMoves);
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      sender: prisonersOrGuards,
      squares: snapshot.squares,
      // revert to start of turn squares
      usedby: snapshot.usedby,
      // revert to start of turn used by
      gtiles: snapshot.gtiles,
      // guards rack did not change
      tiles: tiles,
      // tile pool did not change
      whoseturn: newWhoseturn,
      // may have ended the game
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      passed: true,
      moves: newMoves // a move was made

    }));
  };

  const requestGameData = () => {
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      sender: prisonersOrGuards,
      whoseturn: whoseturn,
      // for lobby to pick up this message
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      func: "requestgamedata" // request game data

    }));
  };

  const handleKeyDown = event => {
    event.preventDefault();

    if (prisonersOrGuards !== whoseturn) {
      return;
    }

    if (event.key === "Enter") {
      whoseturn === "P" ? endPrisonersTurn() : endGuardsTurn();
      return;
    }

    if (event.key === "Escape") {
      recallTiles();
      return;
    }

    let lettertest = /^[A-Za-z\?]$/; // single letter or question mark key pressed

    if (event.key.match(lettertest)) {
      let letter = event.key.toUpperCase();
      let rack = whoseturn === "P" ? ptiles : gtiles;
      let newSelection = rack.indexOf(letter);

      if (newSelection === -1) {
        newSelection = rack.indexOf("?"); // Use the blank if they have one
      }

      if (newSelection > -1) {
        // Pressed letter is on the rack
        let row = rcd[0];
        let col = rcd[1];
        let dir = rcd[2];

        if (row > -1 && col > -1 && dir !== nodirection) {
          // row, col, dir are set to accept keystroke
          // Need to figure out next sqaure to auto-place a tile
          let newRcd = rcd;

          if (dir === "r") {
            // playing rightwards
            let newc = -1;

            for (var c = col + 1; c < edge + 1 && newc === -1; c++) {
              if (squares[row][c] === squareunused) {
                newc = c;
              }
            }

            if (newc === -1) {
              newRcd = [-1, -1, nodirection];
            } else {
              newRcd = [row, newc, "r"];
            }

            handleBoardSquareClick(row, col, newSelection, newRcd);
            setSelection(-1); // when they are typing they are not selecting rack tiles by clicking them on the rack

            return;
          }

          if (dir === "d") {
            // playing downwards
            let newr = -1;
            let numrows = racksize * 2 + 1;

            for (var r = row + 1; r < numrows && newr === -1; r++) {
              if (squares[r][col] === squareunused) {
                newr = r;
              }
            }

            if (newr === -1) {
              newRcd = [-1, -1, nodirection];
            } else {
              newRcd = [newr, col, "d"];
            }

            handleBoardSquareClick(row, col, newSelection, newRcd);
            setSelection(-1); // when they are typing they are not selecting rack tiles by clicking them on the rack

            return;
          }
        }
      }

      return;
    }

    if (event.key === "Backspace" && currentcoords.length > 0) {
      // Same as clicking on a played-this-move tile in terms of returning the tile to the rack
      // However we also want to set up rcd so they can press the key they meant and continue
      let coord = currentcoords[currentcoords.length - 1]; // tile to return to rack

      let newCurrentcoords = [...currentcoords];
      let newPtiles = [...ptiles];
      let newGtiles = [...gtiles];
      let newUsedby = [...usedby];
      let newSquares = [...squares];
      let newRcd = [-1, -1, nodirection];
      let newSelection = selection;
      newCurrentcoords.splice(currentcoords.length - 1, 1);
      let row = parseInt(coord.split("-")[0]);
      let col = parseInt(coord.split("-")[1]);
      let returnedTile = squares[row][col];

      if (whoseturn === "P") {
        newPtiles.push(returnedTile);
        newSelection = newPtiles.length - 1;
      } else {
        newGtiles.push(returnedTile);
        newSelection = newGtiles.length - 1;
      }

      newUsedby[row][col] = usedbynoone;
      newSquares[row][col] = squareunused;
      let dir = rcd[2];

      if (dir !== nodirection) {
        // direction was set so keep it
        newRcd = [row, col, dir];

        if (currentcoords.length === 1) {
          newSelection = -1; // if they backspace all the letters off leave rack tile unselected
        }
      }

      setCurrentcoords(newCurrentcoords);
      setGtiles(newGtiles);
      setPtiles(newPtiles);
      setSquares(newSquares);
      setUsedby(newUsedby);
      setRcd(newRcd);
      setSelection(newSelection);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "prisonbreak",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-middle",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "myHeadingFont",
          children: "Prison Break"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1632,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1631,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1634,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", prisonersOrGuards === "P" ? nickname : oppname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1637,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-topright w3-black topBarCorner commonFontFamily",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "../../",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "material-icons",
              "data-toggle": "tooltip",
              title: "Home",
              children: "home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1642,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1642,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1641,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1640,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", prisonersOrGuards === "P" ? oppname : nickname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1645,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1630,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col pbTileAndMovesOuter",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowUnseenTiles, {
          tiles: tiles,
          othertiles: prisonersOrGuards === "P" ? gtiles : ptiles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1651,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowMoves, {
          moves: moves
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1652,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1650,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col pbPlayerOuterSection",
        children: prisonersOrGuards === "P" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_playerSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
          racktiles: ptiles,
          whoseturn: whoseturn,
          selection: selection,
          onClick: ti => handleRackTileClick(ti),
          onClickFinishTurn: () => endPrisonersTurn(),
          onClickTileRecall: () => recallTiles(),
          onClickTileExchange: () => swapPrisonersTiles(),
          onClickPassPlay: () => prisonerPass(),
          onClickUndoLastPlay: () => performRewind(),
          onClickAllowUndo: () => allowUndoLastTurn(),
          prisonersOrGuards: prisonersOrGuards,
          moves: moves,
          allowRewind: allowRewind
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1656,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_playerSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
          racktiles: gtiles,
          whoseturn: whoseturn,
          selection: selection,
          onClick: ti => handleRackTileClick(ti),
          onClickFinishTurn: () => endGuardsTurn(),
          onClickTileRecall: () => recallTiles(),
          onClickTileExchange: () => swapGuardsTiles(),
          onClickPassPlay: () => guardsPass(),
          onClickUndoLastPlay: () => performRewind(),
          onClickAllowUndo: () => allowUndoLastTurn(),
          prisonersOrGuards: prisonersOrGuards,
          moves: moves,
          allowRewind: allowRewind
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1672,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1654,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: prisonersOrGuards === whoseturn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          onKeyDownCapture: handleKeyDown,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
            squares: squares,
            usedby: usedby,
            rcd: rcd,
            onClick: (ri, ci) => handleBoardSquareClick(ri, ci, -1, null),
            racksize: racksize
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1692,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1691,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
            squares: squares,
            usedby: usedby,
            rcd: rcd,
            onClick: () => {},
            racksize: racksize
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1702,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1701,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1689,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowRescues, {
          rescues: rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1713,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Chat, {
          gameid: gameid,
          client: client,
          nickname: nickname,
          msgs: chatmsgs,
          setMsgs: setChatmsgs,
          prisonersOrGuards: prisonersOrGuards
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1714,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1712,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1649,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-middle commonFontFamily",
        children: whoseturn === "X" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Game Over!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1720,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: jokes[jokeindex]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1722,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1718,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1717,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1629,
    columnNumber: 5
  }, undefined);
};

_s3(Game, "tmY1NIeZ0rIBY3QSYah+VCEAPoY=");

_c5 = Game;

const ShowUnseenTiles = props => {
  // tiles = tiles in bag, othertiles = tiles on other players rack
  let unseenTiles = [...props.tiles, ...props.othertiles]; // Sort the tiles then put the blanks at the end

  unseenTiles.sort();

  if (unseenTiles[0] === "?") {
    unseenTiles.splice(0, 1);
    unseenTiles.push("?");
  }

  if (unseenTiles[0] === "?") {
    unseenTiles.splice(0, 1);
    unseenTiles.push("?");
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbTilepool",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbTilepoolTitle",
      children: "TILES"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1744,
      columnNumber: 7
    }, undefined), unseenTiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== unseenTiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1748,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: t === "Q" ? "pbTilepoolTile u" : "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1752,
        columnNumber: 11
      }, undefined)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 1746,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1743,
    columnNumber: 5
  }, undefined);
};

_c6 = ShowUnseenTiles;

const ShowMoves = props => {
  // show moves made
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbMoves",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbMovesTitle",
      children: "MOVES"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1762,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbMovesScrollable",
      id: "ScrollableMoves",
      children: props.moves.map((m, mi) => {
        var _m$extrawords;

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pbMove",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "pbMove by",
            children: m.by
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1766,
            columnNumber: 13
          }, undefined), ":", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: `pbMove ${m.type}`,
            children: m.type === "PLAY" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [m.pos, " ", m.mainword.replace("Q", "Qu"), (_m$extrawords = m.extrawords) === null || _m$extrawords === void 0 ? void 0 : _m$extrawords.map(w => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: [",\xA0", w.replace("Q", "Qu")]
              }, void 0, true))]
            }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1768,
            columnNumber: 13
          }, undefined)]
        }, `move${mi}`, true, {
          fileName: _jsxFileName,
          lineNumber: 1765,
          columnNumber: 11
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1763,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1761,
    columnNumber: 5
  }, undefined);
};

_c7 = ShowMoves;

const ShowRescues = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbRescuesMade",
    children: ["Rescues made: ", props.rescues]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1791,
    columnNumber: 5
  }, undefined);
};

_c8 = ShowRescues;

const Chat = ({
  gameid,
  client,
  nickname,
  msgs,
  setMsgs,
  prisonersOrGuards
}) => {
  _s4();

  const {
    0: nextmsg,
    1: setNextmsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

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
      client.send(JSON.stringify({
        gameid: gameid,
        // the id for the game
        nickname: nickname,
        // player nickname
        type: "pb",
        // prisonbreak
        func: "chat",
        // send chat message
        sender: prisonersOrGuards,
        // who sent it
        sendmsg: sendmsg // the message typed in the chat

      }));
      return;
    } // let chartest = /^[A-Za-z0-9 \.,\(\)\?:!'"]$/; // Allow letter, number, space, period, comma, round brackets, question mark, colon, exclamation mark, quote, double quote
    // if (event.key.match(chartest)) {
    //   let newNextmsg = nextmsg + event.key;
    //   setNextmsg(newNextmsg);
    // }


    if (event.key === "Backspace" && nextmsg.length > 0) {
      event.preventDefault();
      let newNextmsg = nextmsg.slice(0, nextmsg.length - 1);
      setNextmsg(newNextmsg);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "ScrollableChat",
    className: "pbChat",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "pbChatTable",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: [msgs.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "pbChatFrom",
            children: value.from
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1837,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "pbChatMsg",
            children: value.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1838,
            columnNumber: 15
          }, undefined)]
        }, `ChatMessage${index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 1836,
          columnNumber: 13
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            colSpan: "2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              className: nextmsg === "" ? "pbChatInputEmpty" : "pbChatInput",
              name: "nextmsgInputArea",
              value: nextmsg,
              onChange: e => {
                setNextmsg(e.target.value);
              },
              onKeyDownCapture: handleKeyDown,
              placeholder: "chat..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1843,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1842,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1841,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1834,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1833,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1832,
    columnNumber: 5
  }, undefined);
};

_s4(Chat, "PlpOat0wYANdTrVq2/HpQ7Z/6HY=");

_c9 = Chat;

const scrollToBottom = elementid => {
  const theElement = document.getElementById(elementid);
  theElement.scrollTop = theElement.scrollHeight;
};

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "PrisonBreak");
$RefreshReg$(_c2, "Lobby");
$RefreshReg$(_c3, "Square");
$RefreshReg$(_c4, "Board");
$RefreshReg$(_c5, "Game");
$RefreshReg$(_c6, "ShowUnseenTiles");
$RefreshReg$(_c7, "ShowMoves");
$RefreshReg$(_c8, "ShowRescues");
$RefreshReg$(_c9, "Chat");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsuanMiXSwibmFtZXMiOlsiYnV0dG9uQ2xhc3NOYW1lIiwiYm9hcmRDb2x1bW5IZWFkZXJzIiwiYm9hcmRSb3dIZWFkZXJzIiwibW92ZXdhaXR0aW1lIiwiam9rZXMiLCJpbml0aWFsdGlsZXM0IiwiaW5pdGlhbHRpbGVzNSIsImluaXRpYWx0aWxlczYiLCJpbml0aWFsdGlsZXM3Iiwic3F1YXJldW51c2VkIiwidXNlZGJ5bm9vbmUiLCJub2RpcmVjdGlvbiIsImF2YWlsYWJsZUFjdGlvbk5vbmUiLCJhdmFpbGFibGVBY3Rpb25TdGFydCIsImF2YWlsYWJsZUFjdGlvbkpvaW4iLCJhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3QiLCJQcmlzb25CcmVhayIsImlzcmVqb2luIiwic2V0SXNyZWpvaW4iLCJ1c2VTdGF0ZSIsImdhbWVpZCIsInNldEdhbWVpZCIsIm5pY2tuYW1lIiwic2V0Tmlja25hbWUiLCJwcmlzb25lcnNPckd1YXJkcyIsInNldFByaXNvbmVyc09yR3VhcmRzIiwid3NtZXNzYWdlIiwic2V0V3NtZXNzYWdlIiwicmFja3NpemUiLCJzZXRSYWNrc2l6ZSIsImhvc3QiLCJhY2NlcHRNZXNzYWdlIiwibWVzc2FnZSIsImRhdGEiLCJjbGllbnQiLCJDdXN0b21Tb2NrZXQiLCJ1c2VFZmZlY3QiLCJjb25uZWN0IiwiTG9iYnkiLCJnYW1lbGlzdCIsInNldEdhbWVsaXN0IiwibXNnIiwicHJvY2Vzc0xvYmJ5TWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwic2VuZGVyZ2FtZWlkIiwic2VuZGVybmlja25hbWUiLCJ3dCIsIndob3NldHVybiIsInJzIiwibGVuZ3RoIiwiYW55VXBkYXRlcyIsInNlbmRlclBHIiwic2VuZGVyIiwibmV3R2FtZWxpc3QiLCJnaSIsImdldEdhbWVsaXN0SW5kZXgiLCJuZXdQbGF5aW5nUCIsInBsYXlpbmdQIiwibmV3UGxheWluZ0ciLCJwbGF5aW5nRyIsIm5ld1JhY2tzaXplIiwibmV3Z2FtZXN0YXR1cyIsIm5ld2dhbWVkYXRhIiwibmlja25hbWVQIiwibmlja25hbWVHIiwiZ2FtZXN0YXR1cyIsIm9sZGdhbWVkYXRhIiwid2luZG93IiwiYWxlcnQiLCJnaWQiLCJpIiwiaXNQbGF5aW5nUCIsImF2YWlsYWJsZUFjdGlvblAiLCJnZCIsImF2YWlsYWJsZUFjdGlvbkciLCJzZWxlY3RSYWNrU2l6ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImluZGV4IiwiU3F1YXJlIiwicHJvcHMiLCJlZGdlIiwibWlkZGxlIiwidGRjbGFzcyIsImMiLCJyY2QiLCJyaSIsImNpIiwidGR2YWx1ZSIsImluZGV4T2YiLCJvbkNsaWNrIiwic3F1YXJldXNlZGJ5IiwiQm9hcmQiLCJzcXVhcmVzIiwidXNlZGJ5IiwicmVuZGVyU3F1YXJlIiwicmVuZGVyUm93IiwiXyQiLCJyIiwiR2FtZSIsImluaXRpYWx0aWxlcyIsImluaXRpYWxzcXVhcmVzIiwiQXJyYXkiLCJmaWxsIiwiaW5pdGlhbHVzZWRieSIsInRpbGVzIiwic2V0VGlsZXMiLCJwdGlsZXMiLCJzZXRQdGlsZXMiLCJndGlsZXMiLCJzZXRHdGlsZXMiLCJzZXRTcXVhcmVzIiwic2V0VXNlZGJ5Iiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwic2V0V2hvc2V0dXJuIiwiY3VycmVudGNvb3JkcyIsInNldEN1cnJlbnRjb29yZHMiLCJyZXNjdWVzIiwic2V0UmVzY3VlcyIsInNldFJjZCIsInBhc3NlZCIsInNldFBhc3NlZCIsIm1vdmVzIiwic2V0TW92ZXMiLCJzbmFwc2hvdCIsInNldFNuYXBzaG90Iiwiam9rZWluZGV4Iiwic2V0Sm9rZWluZGV4IiwiYWxsb3dSZXdpbmQiLCJzZXRBbGxvd1Jld2luZCIsIm9wcG5hbWUiLCJzZXRPcHBuYW1lIiwiY2hhdG1zZ3MiLCJzZXRDaGF0bXNncyIsInJlc2N1ZVNvdW5kIiwiQXVkaW8iLCJwbGF5IiwibmV3amkiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInJlcXVlc3RHYW1lRGF0YSIsImNsZWFySW50ZXJ2YWwiLCJ0ZW1wUFRpbGVzIiwidGVtcEdUaWxlcyIsInRlbXBUaWxlcyIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdXNoIiwic3BsaWNlIiwic29ydCIsInNlbmQiLCJzdHJpbmdpZnkiLCJ0eXBlIiwiZnVuYyIsInByb2Nlc3NHYW1lTWVzc2FnZSIsInNjcm9sbFRvQm90dG9tIiwicHV0QXRNb3ZlU3RhcnQiLCJuZXdDaGF0bXNncyIsImZyb20iLCJzZW5kbXNnIiwiaGFuZGxlQm9hcmRTcXVhcmVDbGljayIsIm5ld1NlbGVjdGlvbiIsIm5ld1JjZCIsIm5ld1NxdWFyZXMiLCJuZXdVc2VkYnkiLCJuZXdQdGlsZXMiLCJuZXdHdGlsZXMiLCJuZXdSb3ciLCJzcXVhcmV2YWx1ZSIsIm5ld0N1cnJlbnRjb29yZHMiLCJjb29yZCIsIlN0cmluZyIsImNjaSIsIm5ld1VzZWRieVJvdyIsIm5ld0RpcmVjdGlvbiIsImhhbmRsZVJhY2tUaWxlQ2xpY2siLCJ0aWxlaW5kZXgiLCJuZXdyYWNrIiwibW92ZWR0aWxlIiwiZW5kUHJpc29uZXJzVHVybiIsImlzUGxheVZhbGlkIiwicmV3aW5kSW5mbyIsImdldFJld2luZEluZm8iLCJuZXdSZXNjdWVzIiwiZXNjYXBlaGF0Y2hlcyIsIm5ld1RpbGVzIiwibmV3V2hvc2V0dXJuIiwicGxheWluZm8iLCJnZXRQbGF5SW5mbyIsIm5ld01vdmUiLCJieSIsIm1haW53b3JkIiwiZXh0cmF3b3JkcyIsInBvcyIsIm5ld01vdmVzIiwiZW5kR3VhcmRzVHVybiIsInNuYXBzcXVhcmVzIiwic25hcHVzZWRieSIsInNuYXBwdGlsZXMiLCJzbmFwZ3RpbGVzIiwic3dhcFByaXNvbmVyc1RpbGVzIiwic3dhcEd1YXJkc1RpbGVzIiwibnVtcm93cyIsIm51bWNvbHMiLCJsb3dyb3ciLCJoaWdocm93IiwibG93Y29sIiwiaGlnaGNvbCIsInBsYXl0aHJ1IiwiaG9va21hZGUiLCJ3b3Jkc3RhcnRjb29yZCIsIm51bWNvb3JkcyIsInJvdyIsInBhcnNlSW50Iiwic3BsaXQiLCJjb2wiLCJsb3dlc3Ryb3ciLCJoaWdoZXN0cm93IiwibG93ZXN0Y29sIiwiaGlnaGVzdGNvbCIsImV4dHJhd29yZCIsInJhY2siLCJhbGxvd1VuZG9MYXN0VHVybiIsInBlcmZvcm1SZXdpbmQiLCJudW1Nb3ZlcyIsImxhc3RNb3ZlIiwibmV3U25hcHNob3QiLCJuZXdQYXNzZWQiLCJyZWNhbGxUaWxlcyIsInByaXNvbmVyUGFzcyIsImd1YXJkc1Bhc3MiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsImxldHRlcnRlc3QiLCJtYXRjaCIsImxldHRlciIsInRvVXBwZXJDYXNlIiwiZGlyIiwibmV3YyIsIm5ld3IiLCJyZXR1cm5lZFRpbGUiLCJ0aSIsIlNob3dVbnNlZW5UaWxlcyIsInVuc2VlblRpbGVzIiwib3RoZXJ0aWxlcyIsInQiLCJTaG93TW92ZXMiLCJtIiwibWkiLCJyZXBsYWNlIiwidyIsIlNob3dSZXNjdWVzIiwiQ2hhdCIsIm1zZ3MiLCJzZXRNc2dzIiwibmV4dG1zZyIsInNldE5leHRtc2ciLCJuZXdNc2dzIiwibmV3TmV4dG1zZyIsInNsaWNlIiwiZWxlbWVudGlkIiwidGhlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxlQUFlLEdBQUcscURBQXhCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxHQUFiLEVBQWlCLEdBQWpCLEVBQXFCLEdBQXJCLEVBQXlCLEdBQXpCLEVBQTZCLEdBQTdCLEVBQWlDLEdBQWpDLEVBQXFDLEdBQXJDLEVBQXlD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QkFBVSxDQUFDL0wsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBVjtBQUE0QixlQUhoRDtBQUlFLDhCQUFnQixFQUFFa0ssYUFKcEI7QUFLRSx5QkFBVyxFQUFDO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5QkQsQ0EzREQ7O0lBQU11QixJOztNQUFBQSxJOztBQTZETixNQUFNbkcsY0FBYyxHQUFJMkcsU0FBRCxJQUFlO0FBQ3BDLFFBQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCSCxTQUF4QixDQUFuQjtBQUNBQyxZQUFVLENBQUNHLFNBQVgsR0FBdUJILFVBQVUsQ0FBQ0ksWUFBbEM7QUFDRCxDQUhEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrLjU1NzdlYTk0ODI3MWQ2MTQ1ZDQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBDdXN0b21Tb2NrZXQgZnJvbSBcIi4uLy4uL3dzXCI7XHJcbmltcG9ydCBQbGF5ZXJTZWN0aW9uIGZyb20gJy4uL3BiL3BsYXllclNlY3Rpb24nO1xyXG5cclxuY29uc3QgYnV0dG9uQ2xhc3NOYW1lID0gJ3czLWJ1dHRvbiB3My1ib3JkZXIgdzMtYmx1ZSB3My1ob3Zlci1ibGFjayB3My1yb3VuZCc7XHJcbmNvbnN0IGJvYXJkQ29sdW1uSGVhZGVycyA9IFsnQScsJ0InLCdDJywnRCcsJ0UnLCdGJywnRycsJ0gnLCdJJywnSicsJ0snLCdMJywnTScsJ04nLCdPJ107XHJcbmNvbnN0IGJvYXJkUm93SGVhZGVycyA9IFsnMScsJzInLCczJywnNCcsJzUnLCc2JywnNycsJzgnLCc5JywnMTAnLCcxMScsJzEyJywnMTMnLCcxNCcsJzE1J107XHJcbmNvbnN0IG1vdmV3YWl0dGltZSA9IDIwMDAwOyAvLyB3aGVuIHdhaXRpbmcgZm9yIG9wcG9uZW50IHBpbmcgZXZlcnkgdGhpcyBtYW55IG1pbGxpc2Vjb25kc1xyXG5jb25zdCBqb2tlcyA9IFtcclxuICAnRXNjYXBlZTogXCJJJyArIFwiJ20gZnJlZSEgSSdtIGZyZWUhXCIgKyAnXCIuIExpdHRsZSBraWQ6IFwiSScrIFwiJ20gZm91ciEgSSdtIGZvdXIhXCIgKyAnXCInLFxyXG4gICdUd28gcGVhbnV0cyB3ZXJlIHdhbGtpbmcgZG93biBhIGJhY2sgYWxsZXkuIE9uZSB3YXMgYSBzYWx0ZWQuJyxcclxuICBcIlRoZSBwc3ljaGljIGR3YXJmIGVzY2FwZWQhIFRoZXJlJ3MgYSBzbWFsbCBtZWRpdW0gYXQgbGFyZ2UhXCIsXHJcbiAgJ1doYXQgZG8geW91IGNhbGwgYSB2ZWdldGFibGUgd2hvIGhhcyBlc2NhcGVkIHByaXNvbj8gQW4gZXNjYXBlYSEnLFxyXG4gIFwiVGhlIHByaXNvbmVycyBmYXZlIHB1bmN0dWF0aW9uIGlzIGEgcGVyaW9kLiBJdCBtYXJrcyB0aGUgZW5kIG9mIGEgc2VudGVuY2UhXCIsXHJcbiAgXCJQcmlzb24gaXMgb25seSBvbmUgd29yZCwgYnV0IHRvIHJvYmJlcnMgaXQncyBhIHdob2xlIHNlbnRlbmNlLlwiXHJcbl07XHJcbmNvbnN0IGluaXRpYWx0aWxlczQgPSBbXHJcbiAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLFxyXG4gIFwiQlwiLFxyXG4gIFwiQ1wiLFxyXG4gIFwiRFwiLFxyXG4gIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gIFwiRlwiLFxyXG4gIFwiR1wiLFxyXG4gIFwiSFwiLFxyXG4gIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIixcclxuICBcIk1cIixcclxuICBcIk5cIiwgIFwiTlwiLFxyXG4gIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLFxyXG4gIFwiU1wiLFxyXG4gIFwiVFwiLCAgXCJUXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDQgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBpbml0aWFsdGlsZXM1ID0gW1xyXG4gIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsXHJcbiAgXCJCXCIsXHJcbiAgXCJDXCIsXHJcbiAgXCJEXCIsICBcIkRcIixcclxuICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJIXCIsXHJcbiAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIiwgIFwiTFwiLFxyXG4gIFwiTVwiLFxyXG4gIFwiTlwiLCAgXCJOXCIsICBcIk5cIixcclxuICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsXHJcbiAgXCJTXCIsICBcIlNcIixcclxuICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDUgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBpbml0aWFsdGlsZXM2ID0gW1xyXG4gIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLFxyXG4gIFwiQlwiLCAgXCJCXCIsXHJcbiAgXCJDXCIsICBcIkNcIixcclxuICBcIkRcIiwgIFwiRFwiLCAgXCJEXCIsXHJcbiAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gIFwiRlwiLFxyXG4gIFwiR1wiLCAgXCJHXCIsXHJcbiAgXCJIXCIsICBcIkhcIixcclxuICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIiwgIFwiTFwiLCAgXCJMXCIsXHJcbiAgXCJNXCIsICBcIk1cIixcclxuICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIixcclxuICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsXHJcbiAgXCJQXCIsICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLFxyXG4gIFwiU1wiLCAgXCJTXCIsICBcIlNcIixcclxuICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIixcclxuICBcIlVcIiwgIFwiVVwiLCAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDYgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBpbml0aWFsdGlsZXM3ID0gW1xyXG4gIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIixcclxuICBcIkJcIiwgIFwiQlwiLFxyXG4gIFwiQ1wiLCAgXCJDXCIsXHJcbiAgXCJEXCIsICBcIkRcIiwgIFwiRFwiLCAgXCJEXCIsXHJcbiAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gIFwiRlwiLCAgXCJGXCIsXHJcbiAgXCJHXCIsICBcIkdcIiwgIFwiR1wiLFxyXG4gIFwiSFwiLCAgXCJIXCIsXHJcbiAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gIFwiSlwiLFxyXG4gIFwiS1wiLFxyXG4gIFwiTFwiLCAgXCJMXCIsICBcIkxcIiwgIFwiTFwiLFxyXG4gIFwiTVwiLCAgXCJNXCIsXHJcbiAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLFxyXG4gIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsXHJcbiAgXCJQXCIsICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsXHJcbiAgXCJTXCIsICBcIlNcIiwgIFwiU1wiLCAgXCJTXCIsXHJcbiAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLFxyXG4gIFwiVVwiLCAgXCJVXCIsICBcIlVcIiwgIFwiVVwiLFxyXG4gIFwiVlwiLCAgXCJWXCIsXHJcbiAgXCJXXCIsICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIiwgIFwiWVwiLFxyXG4gIFwiWlwiLFxyXG4gIFwiP1wiLCAgXCI/XCIsXHJcbl07IC8vIGluaXRpYWwgdGlsZSBwb29sIGZvciA3IGxldHRlciByYWNrIG1vZGVcclxuY29uc3Qgc3F1YXJldW51c2VkID0gXCIuXCI7XHJcbmNvbnN0IHVzZWRieW5vb25lID0gXCJcIjtcclxuY29uc3Qgbm9kaXJlY3Rpb24gPSBcIlwiO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25Ob25lID0gMDtcclxuY29uc3QgYXZhaWxhYmxlQWN0aW9uU3RhcnQgPSAxO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25Kb2luID0gMjtcclxuY29uc3QgYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0ID0gMztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaXNvbkJyZWFrKCkge1xyXG4gIGNvbnN0IFtpc3Jlam9pbiwgc2V0SXNyZWpvaW5dID0gdXNlU3RhdGUoZmFsc2UpIC8vIFVzZWQgd2hlbiBwbGF5ZXIgbG9zZXMgY29ubmVjdGlvbiBhbmQgcmVqb2luc1xyXG4gIGNvbnN0IFtnYW1laWQsIHNldEdhbWVpZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbmlja25hbWUsIHNldE5pY2tuYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwcmlzb25lcnNPckd1YXJkcywgc2V0UHJpc29uZXJzT3JHdWFyZHNdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3dzbWVzc2FnZSwgc2V0V3NtZXNzYWdlXSA9IHVzZVN0YXRlKCcnKSAvLyBMYXRlc3QgbWVzc2FnZXMgZnJvbSB0aGUgd2Vic29ja2V0XHJcbiAgY29uc3QgW3JhY2tzaXplLCBzZXRSYWNrc2l6ZV0gPSB1c2VTdGF0ZSg0KTsgLy8gRGVmYXVsdCB0byA0IGxldHRlciByYWNrc1xyXG4gIGxldCBob3N0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICd3c3M6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nIDogJ3dzOi8vbG9jYWxob3N0OjUwMDAnO1xyXG4gIGNvbnN0IGFjY2VwdE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgLy8gUmVhY3QgaXMgaGFyZCB0byB1bmRlcnN0YW5kLiBJZiBJIHJlZmVyZW5jZSBwcmlzb25lcnNPckd1YXJkcyBoZXJlIGl0IHdpbGwgYWx3YXlzIGJlIHRoZSBpbml0aWFsIHZhbHVlLlxyXG4gICAgc2V0V3NtZXNzYWdlKG1lc3NhZ2UuZGF0YSlcclxuICB9XHJcbiAgY29uc3QgW2NsaWVudF0gPSB1c2VTdGF0ZShuZXcgQ3VzdG9tU29ja2V0KGhvc3QsIGFjY2VwdE1lc3NhZ2UpKTtcclxuICB1c2VFZmZlY3QoKCkgPT4gKFxyXG4gICAgY2xpZW50LmNvbm5lY3QoKVxyXG4gICksW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICBwcmlzb25lcnNPckd1YXJkcyA9PT0gJycgP1xyXG4gICAgICA8TG9iYnlcclxuICAgICAgICBzZXRJc3Jlam9pbj17c2V0SXNyZWpvaW59XHJcbiAgICAgICAgd3NtZXNzYWdlPXt3c21lc3NhZ2V9XHJcbiAgICAgICAgLy8gY2xpZW50PXtjbGllbnR9XHJcbiAgICAgICAgZ2FtZWlkPXtnYW1laWR9XHJcbiAgICAgICAgc2V0R2FtZWlkPXtzZXRHYW1laWR9XHJcbiAgICAgICAgbmlja25hbWU9e25pY2tuYW1lfVxyXG4gICAgICAgIHNldE5pY2tuYW1lPXtzZXROaWNrbmFtZX1cclxuICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcz17c2V0UHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgcmFja3NpemU9e3JhY2tzaXplfVxyXG4gICAgICAgIHNldFJhY2tzaXplPXtzZXRSYWNrc2l6ZX1cclxuICAgICAgLz5cclxuICAgIDpcclxuICAgICAgPEdhbWVcclxuICAgICAgICBpc3Jlam9pbj17aXNyZWpvaW59XHJcbiAgICAgICAgcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICAgIGdhbWVpZD17Z2FtZWlkfVxyXG4gICAgICAgIG5pY2tuYW1lPXtuaWNrbmFtZX1cclxuICAgICAgICB3c21lc3NhZ2U9e3dzbWVzc2FnZX1cclxuICAgICAgICBjbGllbnQ9e2NsaWVudH1cclxuICAgICAgICByYWNrc2l6ZT17cmFja3NpemV9XHJcbiAgICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBMb2JieSA9ICh7c2V0SXNyZWpvaW4sIHdzbWVzc2FnZSwgZ2FtZWlkLCBzZXRHYW1laWQsIG5pY2tuYW1lLCBzZXROaWNrbmFtZSwgc2V0UHJpc29uZXJzT3JHdWFyZHNcclxuICAsIHJhY2tzaXplLCBzZXRSYWNrc2l6ZSAvLyBPcHRpb24gZm9yIHJhY2sgc2l6ZVxyXG4gIH0pID0+IHtcclxuICBjb25zdCBbZ2FtZWxpc3QsIHNldEdhbWVsaXN0XSA9IHVzZVN0YXRlKFtdKSAvLyBHYW1lIGluZm8gYnkgZ2FtZSBpZFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzTG9iYnlNZXNzYWdlKG1zZyk7XHJcbiAgfSxbd3NtZXNzYWdlXSlcclxuXHJcbiAgZnVuY3Rpb24gcHJvY2Vzc0xvYmJ5TWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICBsZXQgc2VuZGVyZ2FtZWlkID0gbWVzc2FnZURhdGEuZ2FtZWlkO1xyXG4gICAgICBsZXQgc2VuZGVybmlja25hbWUgPSBtZXNzYWdlRGF0YS5uaWNrbmFtZTtcclxuICAgICAgbGV0IHd0ID0gbWVzc2FnZURhdGEud2hvc2V0dXJuO1xyXG4gICAgICBsZXQgcnMgPSBtZXNzYWdlRGF0YS5yYWNrc2l6ZTtcclxuICAgICAgaWYgKHNlbmRlcmdhbWVpZCAmJiBzZW5kZXJnYW1laWQubGVuZ3RoID4gMCAmJiBycyAmJiB3dCAmJiB3dC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGFueVVwZGF0ZXMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgc2VuZGVyUEcgPSBtZXNzYWdlRGF0YS5zZW5kZXI7XHJcbiAgICAgICAgbGV0IG5ld0dhbWVsaXN0ID0gWy4uLmdhbWVsaXN0XTtcclxuICAgICAgICBsZXQgZ2kgPSBnZXRHYW1lbGlzdEluZGV4KHNlbmRlcmdhbWVpZCk7XHJcbiAgICAgICAgbGV0IG5ld1BsYXlpbmdQID0gc2VuZGVyUEcgPT09IFwiUFwiID8gdHJ1ZSA6IGdpID4gLTEgPyBnYW1lbGlzdFtnaV0ucGxheWluZ1AgOiBmYWxzZTtcclxuICAgICAgICBsZXQgbmV3UGxheWluZ0cgPSBzZW5kZXJQRyA9PT0gXCJHXCIgPyB0cnVlIDogZ2kgPiAtMSA/IGdhbWVsaXN0W2dpXS5wbGF5aW5nRyA6IGZhbHNlO1xyXG4gICAgICAgIGxldCBuZXdSYWNrc2l6ZSA9IHJzO1xyXG5cclxuICAgICAgICBsZXQgbmV3Z2FtZXN0YXR1cyA9IFwiVW5rbm93blwiO1xyXG4gICAgICAgIGlmICh3dCA9PT0gXCJYXCIpIHtcclxuICAgICAgICAgIG5ld2dhbWVzdGF0dXMgPSBcIkdhbWUgb3ZlclwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod3QgPT09IFwiUFwiKSB7XHJcbiAgICAgICAgICBuZXdnYW1lc3RhdHVzID0gXCJQcmlzb25lcnMgdHVyblwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod3QgPT09IFwiR1wiKSB7XHJcbiAgICAgICAgICBuZXdnYW1lc3RhdHVzID0gXCJHdWFyZHMgdHVyblwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld2dhbWVkYXRhID0ge1xyXG4gICAgICAgICAgZ2FtZWlkOiBzZW5kZXJnYW1laWQsXHJcbiAgICAgICAgICBuaWNrbmFtZVA6IHNlbmRlclBHID09PSBcIlBcIiA/IHNlbmRlcm5pY2tuYW1lIDogZ2kgPiAtMSA/IGdhbWVsaXN0W2dpXS5uaWNrbmFtZVAgOiBcIlwiLFxyXG4gICAgICAgICAgbmlja25hbWVHOiBzZW5kZXJQRyA9PT0gXCJHXCIgPyBzZW5kZXJuaWNrbmFtZSA6IGdpID4gLTEgPyBnYW1lbGlzdFtnaV0ubmlja25hbWVHIDogXCJcIixcclxuICAgICAgICAgIGdhbWVzdGF0dXM6IG5ld2dhbWVzdGF0dXMsXHJcbiAgICAgICAgICBwbGF5aW5nUDogbmV3UGxheWluZ1AsXHJcbiAgICAgICAgICBwbGF5aW5nRzogbmV3UGxheWluZ0csXHJcbiAgICAgICAgICByYWNrc2l6ZTogbmV3UmFja3NpemVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdpIDwgMCkgeyAvLyBHYW1lIG5vdCBpbiBsaXN0IHlldCwgcHV0IGl0IGluIHRoZSBsaXN0XHJcbiAgICAgICAgICBhbnlVcGRhdGVzID0gdHJ1ZTtcclxuICAgICAgICAgIG5ld0dhbWVsaXN0ID0gWy4uLm5ld0dhbWVsaXN0LCBuZXdnYW1lZGF0YV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyAvLyBHYW1lIGlzIGluIHRoZSBsaXN0LCBjaGVjayBmb3IgbmVlZGVkIHVwZGF0ZXNcclxuICAgICAgICAgIGxldCBvbGRnYW1lZGF0YSA9IGdhbWVsaXN0W2dpXTtcclxuICAgICAgICAgIGlmIChvbGRnYW1lZGF0YS5uaWNrbmFtZVAgIT09IG5ld2dhbWVkYXRhLm5pY2tuYW1lUCB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLm5pY2tuYW1lRyAhPT0gbmV3Z2FtZWRhdGEubmlja25hbWVHIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEuZ2FtZXN0YXR1cyAhPT0gbmV3Z2FtZWRhdGEuZ2FtZXN0YXR1cyB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLnBsYXlpbmdQICE9PSBuZXdnYW1lZGF0YS5wbGF5aW5nUCB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLnBsYXlpbmdHICE9PSBuZXdnYW1lZGF0YS5wbGF5aW5nRyB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLnJhY2tzaXplICE9PSBuZXdnYW1lZGF0YS5yYWNrc2l6ZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBhbnlVcGRhdGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBuZXdHYW1lbGlzdFtnaV0gPSBuZXdnYW1lZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYW55VXBkYXRlcykge1xyXG4gICAgICAgICAgc2V0R2FtZWxpc3QobmV3R2FtZWxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSAgXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiRXJyb3IgcHJvY2Vzc2luZyBsb2JieSBtZXNzYWdlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBnZXRHYW1lbGlzdEluZGV4KGdpZCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnYW1lbGlzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICBpZiAoZ2FtZWxpc3RbaV0uZ2FtZWlkID09PSBnaWQpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuICBmdW5jdGlvbiBpc1BsYXlpbmdQKGdpZCkge1xyXG4gICAgbGV0IGdpID0gZ2V0R2FtZWxpc3RJbmRleChnaWQpO1xyXG4gICAgcmV0dXJuIGdpIDwgMCA/IGZhbHNlIDogZ2FtZWxpc3RbZ2ldLnBsYXlpbmdQO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhdmFpbGFibGVBY3Rpb25QKGdkKSB7XHJcbiAgICBpZiAobmlja25hbWUubGVuZ3RoID09PSAwIHx8IGdkLmdhbWVzdGF0dXMgPT09IFwiR2FtZSBvdmVyXCIpIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbk5vbmU7IH1cclxuICAgIGlmICghZ2QucGxheWluZ1ApIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvblN0YXJ0OyB9XHJcbiAgICBpZiAoZ2Qubmlja25hbWVQID09PSBuaWNrbmFtZSkgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0OyB9XHJcbiAgICByZXR1cm4gYXZhaWxhYmxlQWN0aW9uTm9uZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYXZhaWxhYmxlQWN0aW9uRyhnZCkge1xyXG4gICAgaWYgKG5pY2tuYW1lLmxlbmd0aCA9PT0gMCB8fCBnZC5nYW1lc3RhdHVzID09PSBcIkdhbWUgb3ZlclwiKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25Ob25lOyB9XHJcbiAgICBpZiAoIWdkLnBsYXlpbmdHKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25Kb2luOyB9XHJcbiAgICBpZiAoZ2Qubmlja25hbWVHID09PSBuaWNrbmFtZSkgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0OyB9XHJcbiAgICByZXR1cm4gYXZhaWxhYmxlQWN0aW9uTm9uZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gc2VsZWN0UmFja1NpemUobmV3UmFja3NpemUpIHtcclxuICAgIHNldFJhY2tzaXplKG5ld1JhY2tzaXplKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLXRlYWwgdzMtYmFyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInczLWJhci1pdGVtIHczLWNlbnRyZSBteUhlYWRpbmdGb250XCI+UHJpc29uIEJyZWFrIExvYmJ5PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtIHczLXJpZ2h0XCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi4uLy4uL1wifT5cclxuICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGgyPjxiPk5pY2tuYW1lOjwvYj48L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3My1pbnB1dCB3My1ib3JkZXIgdzMtYmx1ZSBteUNvbW1vbkZvbnRcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5pY2tuYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmlja25hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXROaWNrbmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxoMj48c3BhbiBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+UFJJU09ORVJTPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hcnJvd19yaWdodDwvaT48L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8aDI+PGI+R2FtZSBJRDo8L2I+PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidzMtaW5wdXQgdzMtYm9yZGVyIHczLWJsdWUgbXlDb21tb25Gb250XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJnYW1laWRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2dhbWVpZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRHYW1laWQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGgyPjxiPlJhY2sgU2l6ZTo8L2I+PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2VsZWN0cmFja3NpemU0XCIgY2xhc3NOYW1lPXtyYWNrc2l6ZSA9PT0gNCA/IFwicGJMb2JieVJhY2tTaXplU2VsZWN0ZWRcIiA6IFwicGJMb2JieVJhY2tTaXplXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSYWNrU2l6ZSg0KX1cclxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiNCBsZXR0ZXIgcmFja3MsIDkgeCA5IGJvYXJkXCJcclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2VsZWN0cmFja3NpemU1XCIgY2xhc3NOYW1lPXtyYWNrc2l6ZSA9PT0gNSA/IFwicGJMb2JieVJhY2tTaXplU2VsZWN0ZWRcIiA6IFwicGJMb2JieVJhY2tTaXplXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSYWNrU2l6ZSg1KX1cclxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiNSBsZXR0ZXIgcmFja3MsIDExIHggMTEgYm9hcmRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2VsZWN0cmFja3NpemU2XCIgY2xhc3NOYW1lPXtyYWNrc2l6ZSA9PT0gNiA/IFwicGJMb2JieVJhY2tTaXplU2VsZWN0ZWRcIiA6IFwicGJMb2JieVJhY2tTaXplXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSYWNrU2l6ZSg2KX1cclxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiNiBsZXR0ZXIgcmFja3MsIDEzIHggMTMgYm9hcmRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2VsZWN0cmFja3NpemU3XCIgY2xhc3NOYW1lPXtyYWNrc2l6ZSA9PT0gNyA/IFwicGJMb2JieVJhY2tTaXplU2VsZWN0ZWRcIiA6IFwicGJMb2JieVJhY2tTaXplXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSYWNrU2l6ZSg3KX1cclxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiNyBsZXR0ZXIgcmFja3MsIDE1IHggMTUgYm9hcmRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDdcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkxvYmJ5Q2VsbEJsb2NrSW5mb1wiPntyYWNrc2l6ZX0gbGV0dGVyIHJhY2tzLCB7cmFja3NpemUqMisxfSB4IHtyYWNrc2l6ZSoyKzF9IGJvYXJkLjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdGFydGdhbWVcIiBjbGFzc05hbWU9e2J1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKG5pY2tuYW1lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlBsZWFzZSBlbnRlciBuaWNrbmFtZSBiZWZvcmUgc3RhcnRpbmcgYSBnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWVpZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUGxheWluZ1AoZ2FtZWlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiUHJpc29uZXJzIGFscmVhZHkgcGxheWluZyB0aGF0IGdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdQJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlBsZWFzZSBlbnRlciBHYW1lIElEIGJlZm9yZSBzdGFydGluZyBhIGdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxoMj48c3BhbiBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+R1VBUkRTPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hcnJvd19yaWdodDwvaT48L3NwYW4+PC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteUNvbW1vbkZvbnRcIj48aDI+RmluZCBhbmQgY2xpY2sgdGhlIFwiSm9pbiBHYW1lXCIgYnV0dG9uIGZvciB5b3VyIGdhbWUuPC9oMj48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGgxPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHczLXJpZ2h0XCI+cmVwb3J0X3Byb2JsZW08L2k+PC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXlDb21tb25Gb250XCI+SWYgeW91IGxvc3QgY29ubmVjdGlvbiwgZmluZCBhbmQgY2xpY2sgdGhlIFwiUmVjb25uZWN0XCIgYnV0dG9uIGZvciB5b3VyIGdhbWUgaWQuPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXlDb21tb25Gb250XCI+PGI+R2FtZSBsaXN0OjwvYj48L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3My10YWJsZS1hbGwgdzMtY2FyZC00XCI+XHJcbiAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInczLWJsdWUgaDQgbXlDb21tb25Gb250XCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5HYW1lIElEPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlByaXNvbmVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5HdWFyZHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+UmFjayBTaXplPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPkdhbWUgU3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7Z2FtZWxpc3QubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17YE90aGVyR2FtZSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwibXlDb21tb25Gb250IHczLWhvdmVyLWdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPjxiPnt2YWx1ZS5nYW1laWR9PC9iPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAge2F2YWlsYWJsZUFjdGlvblAodmFsdWUpID09PSBhdmFpbGFibGVBY3Rpb25Ob25lID9cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFByaXNvbmVyc05vQWN0aW9uJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5ObyBhY3Rpb24gYXZhaWxhYmxlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA6IGF2YWlsYWJsZUFjdGlvblAodmFsdWUpID09PSBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgUHJpc29uZXJzUmVqb2luJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b24gdzMtcmVkIHczLXJvdW5kIHczLWhvdmVyLWJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc3Jlam9pbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ1AnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJhY2tzaXplKHZhbHVlLnJhY2tzaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJlY29ubmVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BQcmlzb25lcnNTdGFydCR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnUCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgR2FtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHthdmFpbGFibGVBY3Rpb25HKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uTm9uZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHdWFyZHNOb0FjdGlvbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+Tm8gYWN0aW9uIGF2YWlsYWJsZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBhdmFpbGFibGVBY3Rpb25HKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0ID9cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YEd1YXJkc1Jlam9pbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNyZWpvaW4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdHJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSYWNrc2l6ZSh2YWx1ZS5yYWNrc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBSZWNvbm5lY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgR3VhcmRzSm9pbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnRycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmFja3NpemUodmFsdWUucmFja3NpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSm9pbiBHYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgUmFja1NpemUke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWNlbnRlciB3My1ib3JkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5yYWNrc2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YEdhbWVTdGF0dXMke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLmdhbWVzdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLXRlYWxcIj5cclxuICAgICAgICA8aDE+SGF2ZSBmdW4hPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFNxdWFyZSA9IChwcm9wcykgPT4ge1xyXG4gIC8vIHNxdWFyZXVzZWRieSwgcmksIGNpLCBjLCBvbkNsaWNrXHJcbiAgLy8gbmVlZCBzcXVhcmV1c2VkYnkgdG8gcGljayBjc3MgY2xhc3NOYW1lIGNvcnJlc3BvbmRpbmcgdG8gd2hvIHBsYXllZCB0aGUgdGlsZSBvbiB0aGUgc3F1YXJlXHJcbiAgLy8gbmVlZCByaSwgY2kgdG8gZGlzcGxheSBhbHRlcm5hdGluZyBiYWNrZ3JvdW5kcyBvbiB1bnVzZWQgc3F1YXJlc1xyXG4gIC8vIG5lZWQgYyB0byByZXByZXNlbnQgd2hpY2ggdGlsZSBpcyBvbiB0aGUgc3F1YXJlLCBpZiBhbnlcclxuICAvLyBuZWVkIG9uQ2xpY2sgdG8gaGFuZGxlIHNxdWFyZSBjbGljayBhdCBhIGhpZ2hlciBsZXZlbFxyXG4gIC8vIG5lZWQgcmNkIHRvIGRpc3BsYXkgc2VsZWN0ZWQgZGlyZWN0aW9uIGFycm93IHdoZW4gYXBwcm9wcmlhdGVcclxuICAvLyBuZWVkIHJhY2tzaXplIHRvIGRldGVybWluZSBjZW50cmUgYW5kIGJvYXJkIGFhcnJ5IGVkZ2UgcG9zaXRpb25zXHJcbiAgY29uc3QgZWRnZSA9IChwcm9wcy5yYWNrc2l6ZSAqIDIpO1xyXG4gIGNvbnN0IG1pZGRsZSA9IHByb3BzLnJhY2tzaXplO1xyXG4gIGNvbnN0IHRkY2xhc3MgPVxyXG4gICAgcHJvcHMuYyAhPT0gc3F1YXJldW51c2VkXHJcbiAgICAgID8gXCJwYlNxdWFyZUlubmVyIFBsYXllclRpbGVcIlxyXG4gICAgICA6IHByb3BzLnJjZFswXSA9PT0gcHJvcHMucmkgJiYgcHJvcHMucmNkWzFdID09PSBwcm9wcy5jaSAmJiBwcm9wcy5yY2RbMl0gPT09IFwiclwiXHJcbiAgICAgID8gXCJwYlNxdWFyZUlubmVyIFJpZ2h0QXJyb3dcIlxyXG4gICAgICA6IHByb3BzLnJjZFswXSA9PT0gcHJvcHMucmkgJiYgcHJvcHMucmNkWzFdID09PSBwcm9wcy5jaSAmJiBwcm9wcy5yY2RbMl0gPT09IFwiZFwiXHJcbiAgICAgID8gXCJwYlNxdWFyZUlubmVyIERvd25BcnJvd1wiXHJcbiAgICAgIDogcHJvcHMucmkgPT09IG1pZGRsZSAmJiBwcm9wcy5jaSA9PT0gbWlkZGxlXHJcbiAgICAgID8gXCJwYlNxdWFyZUlubmVyIENlbnRlclNxdWFyZVwiXHJcbiAgICAgIDogKHByb3BzLnJpID09PSAwIHx8IHByb3BzLnJpID09PSBtaWRkbGUgfHwgcHJvcHMucmkgPT09IGVkZ2UpICYmXHJcbiAgICAgICAgKHByb3BzLmNpID09PSAwIHx8IHByb3BzLmNpID09PSBtaWRkbGUgfHwgcHJvcHMuY2kgPT09IGVkZ2UpXHJcbiAgICAgID8gXCJwYlNxdWFyZUlubmVyIEVzY2FwZUhhdGNoXCJcclxuICAgICAgOiBwcm9wcy5yaSAlIDIgPT09IHByb3BzLmNpICUgMlxyXG4gICAgICA/IFwicGJTcXVhcmVJbm5lciBzdHlsZTFcIiA6IFwicGJTcXVhcmVJbm5lciBzdHlsZTJcIjsgLy8gQWx0ZXJuYXRpbmcgc3F1YXJlIHN0eWxlc1xyXG4gIGNvbnN0IHRkdmFsdWUgPVxyXG4gICAgcHJvcHMuYyAhPT0gc3F1YXJldW51c2VkXHJcbiAgICAgID8gcHJvcHMuY1xyXG4gICAgICA6IHRkY2xhc3MuaW5kZXhPZihcIlJpZ2h0QXJyb3dcIikgPiAtMVxyXG4gICAgICA/IFwi4p6hXCJcclxuICAgICAgOiB0ZGNsYXNzLmluZGV4T2YoXCJEb3duQXJyb3dcIikgPiAtMVxyXG4gICAgICA/IFwi4qyHXCJcclxuICAgICAgOiB0ZGNsYXNzLmluZGV4T2YoXCJDZW50ZXJTcXVhcmVcIikgPiAtMVxyXG4gICAgICA/IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c3RhcnM8L2k+XHJcbiAgICAgIDogXCIuXCIgLyogSWYgSSBwdXQgZW1wdHkgc3RyaW5nIG9yICZuYnNwOyB0aGVuIGl0IGFmZmVjdHMgdGhlIGRpc3BsYXkgb2RkbHkgICovXHJcbiAgcmV0dXJuIChcclxuICAgIHRkY2xhc3MuaW5kZXhPZihcIkVzY2FwZUhhdGNoXCIpID4gLTEgP1xyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RkY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJ1bl9jaXJjbGU8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDogcHJvcHMuYyA9PT0gc3F1YXJldW51c2VkID9cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RkY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgIHt0ZHZhbHVlfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgOlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGRjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwYlNxdWFyZVRpbGVUZXh0ICR7cHJvcHMuc3F1YXJldXNlZGJ5ICsgKHByb3BzLmMgPT09IFwiUVwiID8gXCIgdVwiIDogXCJcIil9YH0+e3RkdmFsdWV9PC9kaXY+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4pO1xyXG59O1xyXG5cclxuY29uc3QgQm9hcmQgPSAoeyBvbkNsaWNrLCBzcXVhcmVzLCB1c2VkYnksIHJjZCwgcmFja3NpemUgfSkgPT4ge1xyXG4gIGNvbnN0IHJlbmRlclNxdWFyZSA9IChyaSwgY2ksIGMsIHNxdWFyZXVzZWRieSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRkIGtleT17YFNxdWFyZSR7cml9LSR7Y2l9YH0gY2xhc3NOYW1lPVwicGJTcXVhcmVPdXRlclwiPlxyXG4gICAgICAgIDxTcXVhcmVcclxuICAgICAgICAgIGM9e2N9XHJcbiAgICAgICAgICBjaT17Y2l9XHJcbiAgICAgICAgICByaT17cml9XHJcbiAgICAgICAgICBzcXVhcmV1c2VkYnk9e3NxdWFyZXVzZWRieX1cclxuICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhyaSwgY2kpfVxyXG4gICAgICAgICAgcmFja3NpemU9e3JhY2tzaXplfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyUm93ID0gKHJpKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dHIga2V5PXtgQm9hcmRSb3cke3JpfWB9IGNsYXNzTmFtZT1cInBiUm93XCI+XHJcbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQm9hcmRSb3dIZWFkZXJcIiBpZD1cIkJvYXJkSGVhZGVyTGVmdFwiPlxyXG4gICAgICAgICAge2JvYXJkUm93SGVhZGVyc1tyaV19XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICB7c3F1YXJlc1tyaV0ubWFwKChjLCBjaSkgPT4gcmVuZGVyU3F1YXJlKHJpLCBjaSwgYywgdXNlZGJ5W3JpXVtjaV0pKX1cclxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJCb2FyZFJvd0hlYWRlclwiIGlkPVwiQm9hcmRIZWFkZXJSaWdodFwiPlxyXG4gICAgICAgICAge2JvYXJkUm93SGVhZGVyc1tyaV19XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYkJvYXJkXCI+XHJcbiAgICAgIDx0Ym9keT5cclxuICAgICAgICA8dHIgY2xhc3NOYW1lPVwicGJCb2FyZENvbHVtbkhlYWRlclJvd1wiPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQm9hcmRIZWFkZXJUb3BMZWZ0XCI+Jm5ic3A7PC90ZD5cclxuICAgICAgICAgIHtzcXVhcmVzLm1hcCgoXyQsaSkgPT4gKFxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJCb2FyZENvbHVtbkhlYWRlclwiIGtleT17YFRvcENvbHVtbkhlYWRlciR7aX1gfT5cclxuICAgICAgICAgICAgICB7Ym9hcmRDb2x1bW5IZWFkZXJzW2ldfVxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJCb2FyZEhlYWRlclRvcFJpZ2h0XCI+Jm5ic3A7PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIHtzcXVhcmVzLm1hcCgociwgcmkpID0+IHJlbmRlclJvdyhyaSkpfVxyXG4gICAgICAgIDx0ciBjbGFzc05hbWU9XCJwYkJvYXJkQ29sdW1uSGVhZGVyUm93XCIgaWQ9XCJCb2FyZEhlYWRlckJvdHRvbVwiPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQm9hcmRIZWFkZXJCb3R0b21MZWZ0XCI+Jm5ic3A7PC90ZD5cclxuICAgICAgICAgIHtzcXVhcmVzLm1hcCgoXyQsaSkgPT4gKFxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJCb2FyZENvbHVtbkhlYWRlclwiIGtleT17YEJvdHRvbUNvbHVtbkhlYWRlciR7aX1gfT5cclxuICAgICAgICAgICAgICB7Ym9hcmRDb2x1bW5IZWFkZXJzW2ldfVxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJCb2FyZEhlYWRlckJvdHRvbVJpZ2h0XCI+Jm5ic3A7PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgR2FtZSA9ICh7aXNyZWpvaW4sIHByaXNvbmVyc09yR3VhcmRzLCBnYW1laWQsIG5pY2tuYW1lLCB3c21lc3NhZ2UsIGNsaWVudFxyXG4gICwgcmFja3NpemUgLy8gT3B0aW9uIGZvciByYWNrIHNpemVcclxuICB9KSA9PiB7XHJcbiAgY29uc3QgbWlkZGxlID0gcmFja3NpemU7IC8vIE1pZGRsZSBlbGVtZW50IGluIHJvdyBvciBjb2x1bW4gYXJyYXlcclxuICBjb25zdCBlZGdlID0gcmFja3NpemUgKiAyOyAvLyBMYXN0IGVsZW1lbnQgaW4gcm93IG9yIGNvbHVtbiBhcnJheVxyXG4gIGNvbnN0IGluaXRpYWx0aWxlcyA9IHJhY2tzaXplID09PSA2ID8gaW5pdGlhbHRpbGVzNiA6IHJhY2tzaXplID09PSA3ID8gaW5pdGlhbHRpbGVzNyA6IHJhY2tzaXplID09PSA1ID8gaW5pdGlhbHRpbGVzNSA6IGluaXRpYWx0aWxlczQ7XHJcbiAgY29uc3QgaW5pdGlhbHNxdWFyZXMgPSBBcnJheShlZGdlKzEpLmZpbGwoQXJyYXkoZWRnZSsxKS5maWxsKHNxdWFyZXVudXNlZCkpO1xyXG4gIGNvbnN0IGluaXRpYWx1c2VkYnkgPSBBcnJheShlZGdlKzEpLmZpbGwoQXJyYXkoZWRnZSsxKS5maWxsKHVzZWRieW5vb25lKSk7XHJcbiAgY29uc3QgW3RpbGVzLCBzZXRUaWxlc10gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHRpbGVzXSk7XHJcbiAgY29uc3QgW3B0aWxlcywgc2V0UHRpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZ3RpbGVzLCBzZXRHdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzcXVhcmVzLCBzZXRTcXVhcmVzXSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsc3F1YXJlc10pO1xyXG4gIGNvbnN0IFt1c2VkYnksIHNldFVzZWRieV0gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHVzZWRieV0pO1xyXG4gIGNvbnN0IFtzZWxlY3Rpb24sIHNldFNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgtMSk7IC8vIHJlbGF0aXZlIHRvIHJhY2sgb2YgcGxheWVyIG1ha2luZyBhIHBsYXlcclxuICBjb25zdCBbd2hvc2V0dXJuLCBzZXRXaG9zZXR1cm5dID0gdXNlU3RhdGUoXCJQXCIpOyAvLyBnYW1lIHN0YXJ0cyB3aXRoIHByaXNvbmVycyBwbGF5XHJcbiAgY29uc3QgW2N1cnJlbnRjb29yZHMsIHNldEN1cnJlbnRjb29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyZXNjdWVzLCBzZXRSZXNjdWVzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyY2QsIHNldFJjZF0gPSB1c2VTdGF0ZShbLTEsLTEsbm9kaXJlY3Rpb25dKTtcclxuICBjb25zdCBbcGFzc2VkLCBzZXRQYXNzZWRdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyB0cnVlIHdoZW4gb3Bwb25lbnQganVzdCBwYXNzZWQ7IGlmIGJvdGggcGFzcyB0aGUgZ2FtZSBlbmRzXHJcbiAgY29uc3QgW21vdmVzLCBzZXRNb3Zlc10gPSB1c2VTdGF0ZShbXSk7IC8vIG1vdmUgaGlzdG9yeSwgZWFjaCBlbGVtZW50IGlzIHRoZSBhcnJheSBpcyBhIGpzb24gb2JqZWN0IG9mIGluZm8gYWJvdXQgdGhlIG1vdmVcclxuICBjb25zdCBbc25hcHNob3QsIHNldFNuYXBzaG90XSA9IHVzZVN0YXRlKHtcclxuICAgIHNxdWFyZXM6IFsuLi5pbml0aWFsc3F1YXJlc10sXHJcbiAgICB1c2VkYnk6IFsuLi5pbml0aWFsdXNlZGJ5XSxcclxuICAgIHB0aWxlczogW10sXHJcbiAgICBndGlsZXM6IFtdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtqb2tlaW5kZXgsIHNldEpva2VpbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYWxsb3dSZXdpbmQsIHNldEFsbG93UmV3aW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3BwbmFtZSwgc2V0T3BwbmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NoYXRtc2dzLCBzZXRDaGF0bXNnc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgcmVzY3VlU291bmQgPSBuZXcgQXVkaW8oXCJodHRwczovL2Fzc2V0cy5jb2RlcnJvY2tldGZ1ZWwuY29tL3BvbW9kb3JvLXRpbWVzLXVwLm1wM1wiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlc2N1ZXMgPj0gMCkge1xyXG4gICAgICByZXNjdWVTb3VuZC5wbGF5KClcclxuICAgIH1cclxuICB9LCBbXSk7IC8vIFBsYXkgYSBzb3VuZCB3aGVuIGEgcmVzY3VlIGlzIG1hZGVcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG5ld2ppID0gam9rZWluZGV4ICsgMTtcclxuICAgIGlmIChuZXdqaSA+PSBqb2tlcy5sZW5ndGgpIHtcclxuICAgICAgbmV3amkgPSAwO1xyXG4gICAgfVxyXG4gICAgc2V0Sm9rZWluZGV4KG5ld2ppKTtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAvLyBJZiBpdCBpcyBub3QgbXkgdHVybiAmJiB0aGUgZ2FtZSBoYXMgbm90IGVuZGVkXHJcbiAgICAgIGlmIChwcmlzb25lcnNPckd1YXJkcyAhPT0gd2hvc2V0dXJuICYmIHdob3NldHVybiAhPT0gXCJYXCIpIHtcclxuICAgICAgICAvLyBJIGFtIHdhaXRpbmcgZm9yIG9wcG9uZW50IG1vdmUgdG8gY29tZSB0aHJvdWdoIGJ1dCBzb21ldGltZXMgaXQgZ2V0cyBtaXNzZWQgKG5vIGlkZWEgd2h5KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJ2YWw6IHByaXNvbmVyc09yR3VhcmRzPVwiICsgcHJpc29uZXJzT3JHdWFyZHMgKyBcIiB3aG9zZXR1cm49XCIgKyB3aG9zZXR1cm4gKyBcIiBhdCBcIiArIERhdGUoKS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICByZXF1ZXN0R2FtZURhdGEoKTsgLy8gU2VuZCBhIHJlcXVlc3QgZm9yIGdhbWUgZGF0YSBpbiBjYXNlIG9wcG9uZW50IG1vdmVkIGFuZCB3ZSBtaXNzZWQgdGhlIHVwZGF0ZVxyXG4gICAgICB9XHJcbiAgICB9LCBtb3Zld2FpdHRpbWUpOyAvLyB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzIGJldHdlZW4gYWJvdmUgY29kZSBibG9jayBleGVjdXRpb25zXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW3dob3NldHVybl0pOyAvLyB3YW50IHVwIHRvIGRhdGUgdmFsdWUgb2Ygd2hvc2V0dXJuIHRvIGRlY2lkZSB3aGV0aGVyIHRvIGFzayBmb3IgYW4gdXBkYXRlXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7IC8vIFRoaXMgY29kZSBleGVjdXRlcyBmaXJzdCB0aW1lIEdhbWUgaXMgdXNlZCBvbmx5XHJcbiAgICBpZiAoIWlzcmVqb2luICYmIHByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIikgeyAvLyBQcmlzb25lciBpcyBzdGFydGluZyB0aGUgZ2FtZSBzbyBwaWNrIHJhY2tzXHJcbiAgICAgIGxldCB0ZW1wUFRpbGVzID0gW107XHJcbiAgICAgIGxldCB0ZW1wR1RpbGVzID0gW107XHJcbiAgICAgIGxldCB0ZW1wVGlsZXMgPSBbLi4uaW5pdGlhbHRpbGVzXTtcclxuICAgICAgd2hpbGUgKHRlbXBQVGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIHRlbXBQVGlsZXMucHVzaCh0ZW1wVGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIHRlbXBHVGlsZXMucHVzaCh0ZW1wVGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdGVtcFBUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHRlbXBHVGlsZXMuc29ydCgpO1xyXG4gICAgICBzZXRHdGlsZXModGVtcEdUaWxlcyk7XHJcbiAgICAgIHNldFB0aWxlcyh0ZW1wUFRpbGVzKTtcclxuICAgICAgc2V0VGlsZXModGVtcFRpbGVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZXM6IFsuLi5pbml0aWFsc3F1YXJlc10sXHJcbiAgICAgICAgdXNlZGJ5OiBbLi4uaW5pdGlhbHVzZWRieV0sXHJcbiAgICAgICAgcHRpbGVzOiBbLi4udGVtcFBUaWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4udGVtcEdUaWxlc10gICAgXHJcbiAgICAgIH0pO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsXHJcbiAgICAgICAgICBmdW5jOiBcImhlbGxvXCIsXHJcbiAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sXHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAvLyBQcmlzb25lciByZWpvaW4gb3IgZ3VhcmQgam9pbiBvciBndWFyZCByZWpvaW5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcInJlcXVlc3RnYW1lZGF0YVwiLCAvLyByZXF1ZXN0IGdhbWUgZGF0YVxyXG4gICAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIHt9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NHYW1lTWVzc2FnZShtc2cpOyAgICAgIFxyXG4gIH0sW3dzbWVzc2FnZV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNjcm9sbFRvQm90dG9tKFwiU2Nyb2xsYWJsZU1vdmVzXCIpO1xyXG4gIH0sW21vdmVzXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2Nyb2xsVG9Cb3R0b20oXCJTY3JvbGxhYmxlQ2hhdFwiKTtcclxuICB9LFtjaGF0bXNnc10pXHJcblxyXG4gIGZ1bmN0aW9uIHB1dEF0TW92ZVN0YXJ0KCkge1xyXG4gICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIHNldEFsbG93UmV3aW5kKGZhbHNlKTtcclxuICAgIHNldFJjZCgtMSwtMSxub2RpcmVjdGlvbik7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwiYW5ub3VuY2VcIikge1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsXHJcbiAgICAgICAgICBmdW5jOiBcImhlbGxvXCIsXHJcbiAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sXHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobWVzc2FnZURhdGEuZ2FtZWlkID09PSBnYW1laWQgJiYgbWVzc2FnZURhdGEudHlwZSA9PT0gXCJwYlwiKSB7IC8vIFRoaXMgaW5zdGFuY2Ugb2YgYSBwcmlzb24gYnJlYWsgZ2FtZVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuc2VuZGVyICE9IHByaXNvbmVyc09yR3VhcmRzICYmIG9wcG5hbWUgPT09IFwiXCIgJiYgbWVzc2FnZURhdGEubmlja25hbWUgJiYgbWVzc2FnZURhdGEubmlja25hbWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vIE9wcG9uZW50IHNlbnQgYSBtZXNzYWdlIGluY2x1ZGluZyB0aGVpciBuaWNrbmFtZSBhbmQgSSBkb24ndCBoYXZlIHRoZWlyIG5pY2tuYW1lIHlldFxyXG4gICAgICAgIHNldE9wcG5hbWUobWVzc2FnZURhdGEubmlja25hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInJlcXVlc3RnYW1lZGF0YVwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcHJpc29uZXJzT3JHdWFyZHMpIHsgLy8gT3Bwb25lbnQgcmVxdWVzdGVkIGdhbWUgaW5mb1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwicHJvdmlkZWdhbWVkYXRhXCIsIC8vIHByb3ZpZGUgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgICAgIHRpbGVzOiB0aWxlcyxcclxuICAgICAgICAgICAgc3F1YXJlczogc3F1YXJlcyxcclxuICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzLFxyXG4gICAgICAgICAgICB1c2VkYnk6IHVzZWRieSxcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sXHJcbiAgICAgICAgICAgIHNuYXBzaG90OiBzbmFwc2hvdCxcclxuICAgICAgICAgICAgcGFzc2VkOiBwYXNzZWQsXHJcbiAgICAgICAgICAgIG1vdmVzOiBtb3ZlcyxcclxuICAgICAgICAgICAgcmVzY3VlczogcmVzY3VlcyxcclxuICAgICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgICBhbGxvd1Jld2luZDogYWxsb3dSZXdpbmRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ2FtZWRhdGFcIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHByaXNvbmVyc09yR3VhcmRzICYmIHdob3NldHVybiAhPT0gcHJpc29uZXJzT3JHdWFyZHMgJiYgd2hvc2V0dXJuICE9PSBcIlhcIikgeyBcclxuICAgICAgICAvLyBvcHBvbmVudCBwcm92aWRlZCBnYW1lIGRhdGEgYW5kIHRoaXMgcGxheWVyIGlzIHN0aWxsIHdhaXRpbmcgdG8gc2VlIG9wcG9uZW50IG1vdmVcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRTbmFwc2hvdChtZXNzYWdlRGF0YS5zbmFwc2hvdCk7XHJcbiAgICAgICAgc2V0UGFzc2VkKG1lc3NhZ2VEYXRhLnBhc3NlZCk7XHJcbiAgICAgICAgc2V0TW92ZXMobWVzc2FnZURhdGEubW92ZXMpO1xyXG4gICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgICAgc2V0QWxsb3dSZXdpbmQobWVzc2FnZURhdGEuYWxsb3dSZXdpbmQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImVwdFwiICYmIHByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIikgeyAvLyBQcmlzb25lcnMgc2VudCBlbmQgcHJpc29uZXJzIHR1cm4sIEd1YXJkcyBwaWNrIGl0IHVwXHJcbiAgICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRQYXNzZWQobWVzc2FnZURhdGEucGFzc2VkKTtcclxuICAgICAgICBzZXRNb3ZlcyhtZXNzYWdlRGF0YS5tb3Zlcyk7XHJcbiAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4ubWVzc2FnZURhdGEuc3F1YXJlc10sXHJcbiAgICAgICAgICB1c2VkYnk6IFsuLi5tZXNzYWdlRGF0YS51c2VkYnldLFxyXG4gICAgICAgICAgcHRpbGVzOiBbLi4ubWVzc2FnZURhdGEucHRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiZWd0XCIgJiYgcHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiKSB7IC8vIEd1YXJkcyBzZW50IGVuZCBndWFyZHMgdHVybiwgUHJpc29uZXJzIHBpY2sgaXQgdXBcclxuICAgICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFBhc3NlZChtZXNzYWdlRGF0YS5wYXNzZWQpO1xyXG4gICAgICAgIHNldE1vdmVzKG1lc3NhZ2VEYXRhLm1vdmVzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4ubWVzc2FnZURhdGEuc3F1YXJlc10sXHJcbiAgICAgICAgICB1c2VkYnk6IFsuLi5tZXNzYWdlRGF0YS51c2VkYnldLFxyXG4gICAgICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLm1lc3NhZ2VEYXRhLmd0aWxlc10sXHJcbiAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInVuZG90dXJuXCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9PSBwcmlzb25lcnNPckd1YXJkcykgeyBcclxuICAgICAgICAvLyBvcHBvbmVudCB1bmRpZCB0aGVpciBsYXN0IHR1cm5cclxuICAgICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgICAgc2V0UGFzc2VkKG1lc3NhZ2VEYXRhLnBhc3NlZCk7XHJcbiAgICAgICAgc2V0TW92ZXMobWVzc2FnZURhdGEubW92ZXMpO1xyXG4gICAgICAgIHNldFNuYXBzaG90KG1lc3NhZ2VEYXRhLnNuYXBzaG90KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJhbGxvd3VuZG9cIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHByaXNvbmVyc09yR3VhcmRzKSB7XHJcbiAgICAgICAgLy8gT3Bwb25lbnQgY2xpY2tlZCBidXR0b24gdG8gYWxsb3cgdW5kbyB0dXJuXHJcbiAgICAgICAgc2V0QWxsb3dSZXdpbmQodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiY2hhdFwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPSBwcmlzb25lcnNPckd1YXJkcykgeyAvLyBPcHBvbmVudCBjaGF0IG1lc3NhZ2VcclxuICAgICAgICBsZXQgbmV3Q2hhdG1zZ3MgPSBbLi4uY2hhdG1zZ3MsIHtmcm9tOiBtZXNzYWdlRGF0YS5uaWNrbmFtZSwgbXNnOiBtZXNzYWdlRGF0YS5zZW5kbXNnfV07XHJcbiAgICAgICAgc2V0Q2hhdG1zZ3MobmV3Q2hhdG1zZ3MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIENhbGxpbmcgc2V0U2VsZWN0aW9uIChmcm9tIGhhbmRsZUtleURvd24pIHRoZW4gaGFuZGxlQm9hcmRTcXVhcmVDbGljayBkb2VzIG5vdCBsZXQgaXQgcmVjb2duaXplIHNlbGVjdGlvbiB3aXRoIHRoZSBuZXcgdmFsdWVcclxuICAvLyBTbyBJIHBhc3MgbmV3U2VsZWN0aW9uIHdoZW4gSSB3YW50IHRvIGFsc28gc2V0IGl0LCBvdGhlcndpc2UgSSBwYXNzIC0xIHRvIGluc3RydWN0IGl0IHRvIHVzZSBjdXJyZW50IHZhbHVlIG9mIHNlbGVjdGlvblxyXG4gIC8vIEFsc28gcGFzc2luZyBuZXdSY2RcclxuICBjb25zdCBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrID0gKHJpLCBjaSwgbmV3U2VsZWN0aW9uLCBuZXdSY2QpID0+IHtcclxuICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnNxdWFyZXNdO1xyXG4gICAgbGV0IG5ld1VzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgbGV0IG5ld1JvdyA9IFsuLi5zcXVhcmVzW3JpXV07XHJcbiAgICBsZXQgc3F1YXJldmFsdWUgPSBzcXVhcmVzW3JpXVtjaV07XHJcbiAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgIGxldCBjb29yZCA9IFN0cmluZyhyaSkgKyBcIi1cIiArIFN0cmluZyhjaSk7XHJcbiAgICBsZXQgY2NpID0gY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKTtcclxuICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgIG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgbmV3UmNkID0gcmNkO1xyXG4gICAgfVxyXG4gICAgaWYgKG5ld1NlbGVjdGlvbiA+IC0xICYmIHNxdWFyZXZhbHVlID09PSBzcXVhcmV1bnVzZWQpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICBuZXdSb3dbY2ldID1cclxuICAgICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gbmV3UHRpbGVzW25ld1NlbGVjdGlvbl0gOiBuZXdHdGlsZXNbbmV3U2VsZWN0aW9uXTtcclxuICAgICAgbmV3U3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XTtcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIlxyXG4gICAgICAgID8gbmV3UHRpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpXHJcbiAgICAgICAgOiBuZXdHdGlsZXMuc3BsaWNlKG5ld1NlbGVjdGlvbiwgMSk7XHJcbiAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4ubmV3VXNlZGJ5W3JpXV07XHJcbiAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSB3aG9zZXR1cm47XHJcbiAgICAgIG5ld1VzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XTtcclxuICAgICAgaWYgKHdob3NldHVybiA9PT0gXCJQXCIgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdQdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgfVxyXG4gICAgICBpZiAod2hvc2V0dXJuID09PSBcIkdcIiAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld0d0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uIC0gMVxyXG4gICAgICB9XHJcbiAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF0pO1xyXG4gICAgICBzZXRSY2QobmV3UmNkKTsgLy8ga2V5IGRvd24gaGFuZGxlciBmaWd1cmVkIGl0IG91dFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY2NpID4gLTEpIHsgLy8gY2xpY2tlZCBzcXVhcmUgaGFzIGEgdGlsZSBvbiBpdCBmcm9tIHRoZSBjdXJyZW50IG1vdmUgaW4gcHJvZ3Jlc3NcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIlxyXG4gICAgICAgID8gbmV3UHRpbGVzLnB1c2goc3F1YXJldmFsdWUpXHJcbiAgICAgICAgOiBuZXdHdGlsZXMucHVzaChzcXVhcmV2YWx1ZSk7XHJcbiAgICAgIGxldCBuZXdSb3cgPSBbLi4ubmV3U3F1YXJlc1tyaV1dO1xyXG4gICAgICBuZXdSb3dbY2ldID0gc3F1YXJldW51c2VkO1xyXG4gICAgICBuZXdTcXVhcmVzW3JpXSA9IFsuLi5uZXdSb3ddO1xyXG4gICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLm5ld1VzZWRieVtyaV1dO1xyXG4gICAgICBuZXdVc2VkYnlSb3dbY2ldID0gdXNlZGJ5bm9vbmU7XHJcbiAgICAgIG5ld1VzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XTtcclxuICAgICAgc2V0U2VsZWN0aW9uKFxyXG4gICAgICAgIHdob3NldHVybiA9PT0gXCJQXCIgPyBuZXdQdGlsZXMubGVuZ3RoIC0gMSA6IG5ld0d0aWxlcy5sZW5ndGggLSAxXHJcbiAgICAgICk7XHJcbiAgICAgIG5ld0N1cnJlbnRjb29yZHMuc3BsaWNlKGNjaSwgMSk7XHJcblxyXG4gICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICBzZXRSY2QoLTEsLTEsbm9kaXJlY3Rpb24pOyAvLyBtYWtlIHBsYXllciBjbGljayBhZ2FpbiB0byBzZXQgZGlyZWN0aW9uXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHBsYWNlIGEgc2VsZWN0ZWQgdGlsZSB0aGVyZVxyXG4gICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcmVtb3ZlIGFuIGV4aXN0aW5nIHRpbGVcclxuICAgIGlmIChzcXVhcmVzW3JpXVtjaV0gPT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAvLyBUaGVyZSBpcyBub3RoaW5nIG9uIHRoZSBzcXVhcmUgc28gdGhleSBhcmUgcGlja2luZyB3aGVyZSB0byBwbGFjZSB0aGUgbmV4dCB0aWxlIHZpYSBrZXlib2FyZFxyXG4gICAgICBsZXQgbmV3RGlyZWN0aW9uID0gcmNkWzBdICE9PSByaSB8fCByY2RbMV0gIT09IGNpID8gXCJyXCIgOiAvL2NsaWNrIG5ldyBzcXVhcmUsIHN0YXJ0IHdpdGggXCJyXCJcclxuICAgICAgIHJjZFsyXSA9PT0gXCJyXCIgPyBcImRcIiA6IC8vY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgXCJyXCIsIGNoYW5nZSB0byBcImRcIlxyXG4gICAgICAgcmNkWzJdID09PSBcImRcIiA/IG5vZGlyZWN0aW9uIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBcImRcIiwgY2hhbmdlIHRvIG5vZGlyZWN0aW9uXHJcbiAgICAgICBcInJcIjsgLy8gY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgbm9kaXJlY3Rpb24sIGNoYW5nZSB0byBcInJcIlxyXG4gICAgICBuZXdSY2QgPSBbcmksY2ksbmV3RGlyZWN0aW9uXTtcclxuICAgICAgc2V0UmNkKG5ld1JjZCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSYWNrVGlsZUNsaWNrID0gKHRpbGVpbmRleCkgPT4ge1xyXG4gICAgLy8gSWYgbm8gdGlsZSBpcyBzZWxlY3RlZCBhbHJlYWR5IHRoZW4gc2V0IHRoZSBzZWxlY3Rpb25cclxuICAgIGlmIChzZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgIHNldFNlbGVjdGlvbih0aWxlaW5kZXgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBJZiB0aGUgc2FtZSB0aWxlIGlzIGFscmVhZHkgc2VsZWN0ZWQgdGhlbiB1bnNlbGVjdFxyXG4gICAgaWYgKHNlbGVjdGlvbiA9PT0gdGlsZWluZGV4KSB7XHJcbiAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIEEgdGlsZSB3YXMgYWxyZWFkeSBzZWxlY3RlZCBhbmQgdGhleSBjbGlja2VkIGFub3RoZXIgdGlsZSAtIG1vdmUgdGhlIHRpbGVcclxuICAgIGxldCBuZXdyYWNrID0gcHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gWy4uLnB0aWxlc10gOiBbLi4uZ3RpbGVzXTtcclxuICAgIGxldCBtb3ZlZHRpbGUgPSBuZXdyYWNrW3NlbGVjdGlvbl07XHJcbiAgICBmb3IgKHZhciBpID0gc2VsZWN0aW9uOyBpID49IHRpbGVpbmRleDsgaS0tKSB7XHJcbiAgICAgIG5ld3JhY2tbaV0gPSBuZXdyYWNrW2kgLSAxXTtcclxuICAgIH1cclxuICAgIG5ld3JhY2tbdGlsZWluZGV4XSA9IG1vdmVkdGlsZTtcclxuICAgIHByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IHNldFB0aWxlcyhuZXdyYWNrKSA6IHNldEd0aWxlcyhuZXdyYWNrKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBlbmRQcmlzb25lcnNUdXJuID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgbGV0IG5ld1Jlc2N1ZXMgPSByZXNjdWVzO1xyXG4gICAgbGV0IGVzY2FwZWhhdGNoZXMgPSBbXHJcbiAgICAgIFwiMC0wXCIsXHJcbiAgICAgIFwiMC1cIiArIG1pZGRsZSxcclxuICAgICAgXCIwLVwiICsgZWRnZSxcclxuICAgICAgbWlkZGxlKyBcIi0wXCIsXHJcbiAgICAgIG1pZGRsZSArIFwiLVwiICsgZWRnZSxcclxuICAgICAgZWRnZSArIFwiLTBcIixcclxuICAgICAgZWRnZSArIFwiLVwiICsgbWlkZGxlLFxyXG4gICAgICBlZGdlICsgXCItXCIgKyBlZGdlXHJcbiAgICBdOyAvLyBjb29yZHMgb2YgZXNjYXBlIGhhdGNoZXNcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudGNvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZXNjYXBlaGF0Y2hlcy5pbmRleE9mKGN1cnJlbnRjb29yZHNbaV0pID4gLTEpIHtcclxuICAgICAgICBuZXdSZXNjdWVzID0gbmV3UmVzY3VlcyArIDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3UHRpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdQdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld1B0aWxlcy5zb3J0KCk7XHJcbiAgICBsZXQgbmV3V2hvc2V0dXJuID0gbmV3UHRpbGVzLmxlbmd0aCA+IDAgPyBcIkdcIiA6IFwiWFwiOyAvLyBYID0gZ2FtZSBvdmVyXHJcbiAgICBpZiAodXNlZGJ5WzBdWzBdICAgICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5WzBdW21pZGRsZV0gICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5WzBdW2VkZ2VdICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W21pZGRsZV1bMF0gICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W21pZGRsZV1bZWRnZV0gIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W2VkZ2VdWzBdICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W2VkZ2VdW21pZGRsZV0gIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W2VkZ2VdW2VkZ2VdICAgIT09IHVzZWRieW5vb25lKSB7XHJcbiAgICAgIG5ld1dob3NldHVybiA9IFwiWFwiOyAvLyBObyBlc2NhcGUgaGF0Y2hlcyBsZWZ0XHJcbiAgICB9XHJcbiAgICBsZXQgcGxheWluZm8gPSBnZXRQbGF5SW5mbygpO1xyXG4gICAgbGV0IG5ld01vdmUgPSB7Ynk6IFwiUFwiLCB0eXBlOiBcIlBMQVlcIiwgcmV3aW5kSW5mbzogcmV3aW5kSW5mbywgbWFpbndvcmQ6IHBsYXlpbmZvLm1haW53b3JkLCBleHRyYXdvcmRzOiBwbGF5aW5mby5leHRyYXdvcmRzLCBwb3M6IHBsYXlpbmZvLnBvc307XHJcbiAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRQYXNzZWQoZmFsc2UpO1xyXG4gICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgc2V0UmVzY3VlcyhuZXdSZXNjdWVzKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogWy4uLnNxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi51c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFsuLi5uZXdQdGlsZXNdLFxyXG4gICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgc3F1YXJlczogc3F1YXJlcywgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICB1c2VkYnk6IHVzZWRieSwgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWUgKHdob3NldHVybj1YKVxyXG4gICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICBwYXNzZWQ6IGZhbHNlLCAvLyBkaWQgbm90IGp1c3QgcGFzc1xyXG4gICAgICAgIG1vdmVzOiBuZXdNb3ZlcywgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgcmVzY3VlczogbmV3UmVzY3VlcyAvLyBtYXkgaGF2ZSByZXNjdWVkIGFub3RoZXIgcHJpc29uZXJcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZW5kR3VhcmRzVHVybiA9ICgpID0+IHtcclxuICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdHdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld0d0aWxlcy5zb3J0KCk7XHJcbiAgICBsZXQgc25hcHNxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICBsZXQgc25hcHVzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgbGV0IHNuYXBwdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBzbmFwZ3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbmV3V2hvc2V0dXJuID0gbmV3R3RpbGVzLmxlbmd0aCA+IDAgPyBcIlBcIiA6IFwiWFwiOyAvLyBYID0gZ2FtZSBvdmVyXHJcbiAgICBpZiAodXNlZGJ5WzBdWzBdICAgICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5WzBdW21pZGRsZV0gICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5WzBdW2VkZ2VdICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W21pZGRsZV1bMF0gICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W21pZGRsZV1bZWRnZV0gIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W2VkZ2VdWzBdICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W2VkZ2VdW21pZGRsZV0gIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W2VkZ2VdW2VkZ2VdICAgIT09IHVzZWRieW5vb25lKSB7XHJcbiAgICAgIG5ld1dob3NldHVybiA9IFwiWFwiOyAvLyBObyBlc2NhcGUgaGF0Y2hlcyBsZWZ0XHJcbiAgICB9XHJcbiAgICBsZXQgcGxheWluZm8gPSBnZXRQbGF5SW5mbygpO1xyXG4gICAgbGV0IG5ld01vdmUgPSB7Ynk6IFwiR1wiLCB0eXBlOiBcIlBMQVlcIiwgcmV3aW5kSW5mbzogcmV3aW5kSW5mbywgbWFpbndvcmQ6IHBsYXlpbmZvLm1haW53b3JkLCBleHRyYXdvcmRzOiBwbGF5aW5mby5leHRyYXdvcmRzLCBwb3M6IHBsYXlpbmZvLnBvc307XHJcbiAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRQYXNzZWQoZmFsc2UpO1xyXG4gICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBzbmFwc3F1YXJlcyxcclxuICAgICAgdXNlZGJ5OiBzbmFwdXNlZGJ5LFxyXG4gICAgICBwdGlsZXM6IHNuYXBwdGlsZXMsXHJcbiAgICAgIGd0aWxlczogc25hcGd0aWxlcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgdXNlZGJ5OiB1c2VkYnksIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIGd1YXJkcyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgcGFzc2VkOiBmYWxzZSwgLy8gZGlkIG5vdCBqdXN0IHBhc3NcclxuICAgICAgICBtb3ZlczogbmV3TW92ZXMsIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZSAod2hvc2V0dXJuPVgpXHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gIGNvbnN0IHN3YXBQcmlzb25lcnNUaWxlcyA9ICgpID0+IHtcclxuICAgIGlmICh0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJOZWVkIFwiICsgcmFja3NpemUgKyBcIiB0aWxlcyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgbGV0IG5ld1B0aWxlcyA9IFtdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdQdGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld1B0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3UHRpbGVzLnNvcnQoKTtcclxuICAgIG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5wdGlsZXNdO1xyXG4gICAgbmV3VGlsZXMuc29ydCgpO1xyXG4gICAgbGV0IG5ld01vdmUgPSB7Ynk6IFwiUFwiLCB0eXBlOiBcIlNXQVBcIiwgcmV3aW5kSW5mbzogcmV3aW5kSW5mb307XHJcbiAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRXaG9zZXR1cm4oXCJHXCIpO1xyXG4gICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRQYXNzZWQoZmFsc2UpO1xyXG4gICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc25hcHNob3Quc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnNuYXBzaG90LnVzZWRieV0sXHJcbiAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc10sXHJcbiAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICB3aG9zZXR1cm46IFwiR1wiLCAvLyBzd2FwIG5ldmVyIGVuZHMgdGhlIGdhbWUgc28gZ28gdG8gb3Bwb25lbnRcclxuICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgcGFzc2VkOiBmYWxzZSwgLy8gZGlkIG5vdCBqdXN0IHBhc3NcclxuICAgICAgICBtb3ZlczogbmV3TW92ZXMsIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMgLy8gbm8gcmVzY3VlcyBvbiBhbiBleGNoYW5nZVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHN3YXBHdWFyZHNUaWxlcyA9ICgpID0+IHtcclxuICAgIGlmICh0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJOZWVkIFwiICsgcmFja3NpemUgKyBcIiB0aWxlcyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgbGV0IG5ld0d0aWxlcyA9IFtdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdHdGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld0d0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3R3RpbGVzLnNvcnQoKTtcclxuICAgIG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5ndGlsZXNdO1xyXG4gICAgbmV3VGlsZXMuc29ydCgpO1xyXG4gICAgbGV0IG5ld01vdmUgPSB7Ynk6IFwiR1wiLCB0eXBlOiBcIlNXQVBcIiwgcmV3aW5kSW5mbzogcmV3aW5kSW5mb307XHJcbiAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRXaG9zZXR1cm4oXCJQXCIpO1xyXG4gICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRQYXNzZWQoZmFsc2UpO1xyXG4gICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc25hcHNob3Quc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnNuYXBzaG90LnVzZWRieV0sXHJcbiAgICAgIHB0aWxlczogWy4uLnB0aWxlc10sXHJcbiAgICAgIGd0aWxlczogWy4uLm5ld0d0aWxlc10sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICB3aG9zZXR1cm46IFwiUFwiLCAvLyBzd2FwIG5ldmVyIGVuZHMgdGhlIGdhbWUgc28gZ28gdG8gb3Bwb25lbnRcclxuICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgcGFzc2VkOiBmYWxzZSwgLy8gZGlkIG5vdCBqdXN0IHBhc3NcclxuICAgICAgICBtb3ZlczogbmV3TW92ZXMgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzUGxheVZhbGlkKCkge1xyXG4gICAgaWYgKHNxdWFyZXNbbWlkZGxlXVttaWRkbGVdID09PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiRmlyc3QgcGxheSBtdXN0IGhpdCBjZW50ZXIgc3F1YXJlXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgbnVtcm93cyA9IGVkZ2UrMTtcclxuICAgIGxldCBudW1jb2xzID0gZWRnZSsxO1xyXG4gICAgbGV0IGxvd3JvdyA9IG51bXJvd3M7XHJcbiAgICBsZXQgaGlnaHJvdyA9IC0xO1xyXG4gICAgbGV0IGxvd2NvbCA9IG51bWNvbHM7XHJcbiAgICBsZXQgaGlnaGNvbCA9IC0xO1xyXG4gICAgZm9yICh2YXIgcj0wOyByIDwgbnVtcm93czsgKytyKSB7XHJcbiAgICAgIGZvciAodmFyIGM9MDsgYyA8IG51bWNvbHM7ICsrYykge1xyXG4gICAgICAgIGlmIChzcXVhcmVzW3JdW2NdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgIGlmICghKHIgPiAwICYmIHNxdWFyZXNbci0xXVtjXSAhPT0gc3F1YXJldW51c2VkKSAmJlxyXG4gICAgICAgICAgICEoYyA+IDAgJiYgc3F1YXJlc1tyXVtjLTFdICE9PSBzcXVhcmV1bnVzZWQpICYmXHJcbiAgICAgICAgICAgIShyIDwgZWRnZSAmJiBzcXVhcmVzW3IrMV1bY10gIT09IHNxdWFyZXVudXNlZCkgJiZcclxuICAgICAgICAgICAhKGMgPCBlZGdlICYmIHNxdWFyZXNbcl1bYysxXSAhPT0gc3F1YXJldW51c2VkKVxyXG4gICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJFYWNoIHBsYXllZCB0aWxlIG11c3QgYmUgcGFydCBvZiBhIHdvcmRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgaWYgKHNuYXBzaG90LnNxdWFyZXNbcl1bY10gPT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgICAgICAgLy8gVGhpcyBzcXVhcmUgd2FzIHBsYXllZCBvbiB0aGlzIHR1cm5cclxuICAgICAgICAgICAgIGlmIChyIDwgbG93cm93KSB7IGxvd3JvdyA9IHI7fVxyXG4gICAgICAgICAgICAgaWYgKHIgPiBoaWdocm93KSB7IGhpZ2hyb3cgPSByO31cclxuICAgICAgICAgICAgIGlmIChjIDwgbG93Y29sKSB7IGxvd2NvbCA9IGM7fVxyXG4gICAgICAgICAgICAgaWYgKGMgPiBoaWdoY29sKSB7IGhpZ2hjb2wgPSBjO31cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobG93cm93ID09PSBudW1yb3dzKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIllvdSBkaWRuJ3QgcGxheSBhbnkgdGlsZXNcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChsb3dyb3cgIT09IGhpZ2hyb3cgJiYgbG93Y29sICE9PSBoaWdoY29sKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIlRpbGVzIHBsYXllZCBtdXN0IGJlIGluIGEgc3RyYWlnaHQgbGluZVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IHBsYXl0aHJ1ID0gZmFsc2U7XHJcbiAgICBsZXQgaG9va21hZGUgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIHIgPSBsb3dyb3c7IHIgPD0gaGlnaHJvdzsgKytyKSB7XHJcbiAgICAgIGZvciAodmFyIGMgPSBsb3djb2w7IGMgPD0gaGlnaGNvbDsgKytjKSB7XHJcbiAgICAgICAgaWYgKHNxdWFyZXNbcl1bY10gPT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgICAgd2luZG93LmFsZXJ0KFwiVGhlcmUgaXMgYSBnYXAgaW4geW91ciB3b3JkXCIpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc25hcHNob3Quc3F1YXJlc1tyXVtjXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICBwbGF5dGhydSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgciA+IDAgJiYgc3F1YXJlc1tyLTFdW2NdICE9PSBzcXVhcmV1bnVzZWQpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiByIDwgZWRnZSAmJiBzcXVhcmVzW3IrMV1bY10gIT09IHNxdWFyZXVudXNlZCkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGMgPiAwICYmIHNxdWFyZXNbcl1bYy0xXSAhPT0gc3F1YXJldW51c2VkKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgYyA8IGVkZ2UgJiYgc3F1YXJlc1tyXVtjKzFdICE9PSBzcXVhcmV1bnVzZWQpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIENoZWNrIHBsYXkgdG8gb3IgZnJvbSBhIHRpbGUgKHBsYXkgdGhyb3VnaCBidXQgbm90IGVpdGhlciBzaWRlKVxyXG4gICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBsb3djb2wgPiAwICYmIHNuYXBzaG90LnNxdWFyZXNbbG93cm93XVtsb3djb2wtMV0gIT09IHNxdWFyZXVudXNlZCkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgaGlnaGNvbCA8IGVkZ2UgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ddW2hpZ2hjb2wrMV0gIT09IHNxdWFyZXVudXNlZCkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgbG93cm93ID4gMCAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvdy0xXVtsb3djb2xdICE9PSBzcXVhcmV1bnVzZWQpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGhpZ2hyb3cgPCBlZGdlICYmIHNuYXBzaG90LnNxdWFyZXNbaGlnaHJvdysxXVtsb3djb2xdICE9PSBzcXVhcmV1bnVzZWQpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAoIXBsYXl0aHJ1ICYmICFob29rbWFkZSAmJiBzbmFwc2hvdC5zcXVhcmVzW21pZGRsZV1bbWlkZGxlXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIldvcmRzIG11c3QgYmUgY29ubmVjdGVkXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFBsYXlJbmZvKCkge1xyXG4gICAgbGV0IHBsYXlpbmZvID0ge307XHJcbiAgICBsZXQgbWFpbndvcmQgPSBcIlwiO1xyXG4gICAgbGV0IGV4dHJhd29yZHMgPSBbXTtcclxuICAgIGxldCB3b3Jkc3RhcnRjb29yZCA9IFwiXCI7XHJcbiAgICBsZXQgbnVtcm93cyA9IGVkZ2UrMTtcclxuICAgIGxldCBudW1jb2xzID0gZWRnZSsxO1xyXG4gICAgbGV0IGxvd3JvdyA9IG51bXJvd3M7XHJcbiAgICBsZXQgaGlnaHJvdyA9IC0xO1xyXG4gICAgbGV0IGxvd2NvbCA9IG51bWNvbHM7XHJcbiAgICBsZXQgaGlnaGNvbCA9IC0xO1xyXG4gICAgbGV0IG51bWNvb3JkcyA9IGN1cnJlbnRjb29yZHMubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgY29vcmQ9MDsgY29vcmQgPCBudW1jb29yZHM7ICsrY29vcmQpIHtcclxuICAgICAgbGV0IHJvdyA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgIGxldCBjb2wgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICBpZiAocm93IDwgbG93cm93KSB7XHJcbiAgICAgICAgbG93cm93ID0gcm93O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyb3cgPiBoaWdocm93KSB7XHJcbiAgICAgICAgaGlnaHJvdyA9IHJvdztcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sIDwgbG93Y29sKSB7XHJcbiAgICAgICAgbG93Y29sID0gY29sO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2wgPiBoaWdoY29sKSB7XHJcbiAgICAgICAgaGlnaGNvbCA9IGNvbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGxvd3JvdyA8IGhpZ2hyb3cgfHwgbnVtY29vcmRzID09PSAxKSB7IC8vIHRpbGVzIHBsYWNlZCBvbiBkaWZmZXJlbmNlIHJvd3Mgc28gcGxheSBpcyB2ZXJ0aWNhbCwgb3Igc2luZ2xlIHRpbGUgcGxheWVkXHJcbiAgICAgIGxldCBjb2wgPSBsb3djb2w7IC8vIGxvd2NvbCBhbmQgaGlnaGNvbCB3aWxsIGhhdmUgdGhlIHNhbWUgdmFsdWVcclxuICAgICAgLy8gZmluZCB0aGUgbG93ZXN0IHJvdyBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGxvd2VyIHRoYW4gdGhhdCBvZiB0aGUgZmlyc3QgcGxheWVkIHRpbGVcclxuICAgICAgbGV0IGxvd2VzdHJvdyA9IGxvd3JvdztcclxuICAgICAgd2hpbGUgKGxvd2VzdHJvdyA+IDAgJiYgc3F1YXJlc1tsb3dlc3Ryb3ctMV1bY29sXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgbG93ZXN0cm93ID0gbG93ZXN0cm93IC0gMTtcclxuICAgICAgfVxyXG4gICAgICAvLyBmaW5kIHRoZSBoaWdoZXN0IHJvdyBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGhpZ2hlciB0aGFuIHRoYXQgb2YgdGhlIGxhc3QgcGxheWVkIHRpbGVcclxuICAgICAgbGV0IGhpZ2hlc3Ryb3cgPSBoaWdocm93O1xyXG4gICAgICB3aGlsZSAoaGlnaGVzdHJvdyA8IGVkZ2UgJiYgc3F1YXJlc1toaWdoZXN0cm93KzFdW2NvbF0gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgIGhpZ2hlc3Ryb3cgPSBoaWdoZXN0cm93ICsgMTtcclxuICAgICAgfVxyXG4gICAgICB3b3Jkc3RhcnRjb29yZCA9IGJvYXJkQ29sdW1uSGVhZGVyc1tjb2xdICsgYm9hcmRSb3dIZWFkZXJzW2xvd2VzdHJvd107IC8vIHZlcnRpY2FsIHBsYXkgY29vcmRzIHN0YXJ0IHdpdGggY29sIGhlYWRlclxyXG4gICAgICBmb3IgKHZhciByb3cgPSBsb3dlc3Ryb3c7IHJvdyA8PSBoaWdoZXN0cm93OyArK3Jvdykge1xyXG4gICAgICAgIG1haW53b3JkID0gbWFpbndvcmQgKyBzcXVhcmVzW3Jvd11bY29sXTtcclxuICAgICAgICBsZXQgY29vcmQgPSByb3cgKyBcIi1cIiArIGNvbDtcclxuICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKSA+IC0xKSB7IC8vIFRoaXMgdGlsZSB3YXMgcGxheWVkLCBjaGVjayBmb3IgaG9va3NcclxuICAgICAgICAgIGxldCBsb3dlc3Rjb2wgPSBjb2w7XHJcbiAgICAgICAgICB3aGlsZSAobG93ZXN0Y29sID4gMCAmJiBzcXVhcmVzW3Jvd11bbG93ZXN0Y29sLTFdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgICAgbG93ZXN0Y29sID0gbG93ZXN0Y29sIC0gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBoaWdoZXN0Y29sID0gY29sO1xyXG4gICAgICAgICAgd2hpbGUgKGhpZ2hlc3Rjb2wgPCBlZGdlICYmIHNxdWFyZXNbcm93XVtoaWdoZXN0Y29sKzFdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgICAgaGlnaGVzdGNvbCA9IGhpZ2hlc3Rjb2wgKyAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGxvd2VzdGNvbCA8IGhpZ2hlc3Rjb2wpIHsgLy8gaG9vayB3YXMgbWFkZVxyXG4gICAgICAgICAgICBsZXQgZXh0cmF3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IGxvd2VzdGNvbDsgYyA8PSBoaWdoZXN0Y29sOyArK2MpIHtcclxuICAgICAgICAgICAgICBleHRyYXdvcmQgPSBleHRyYXdvcmQgKyBzcXVhcmVzW3Jvd11bY107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXh0cmF3b3JkcyA9IFsuLi5leHRyYXdvcmRzLCBleHRyYXdvcmRdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG1haW53b3JkLmxlbmd0aCA8IDIpIHsgLy8gSG9yaXpvbnRhbCBwbGF5IG9yIHNpbmdsZSB0aWxlIGRyb3AgdGhhdCBjYW5ub3QgYmUgYSB2ZXJ0aWNhbCBwbGF5XHJcbiAgICAgIGxldCByb3cgPSBsb3dyb3c7IC8vIGxvd3JvdyBhbmQgaGlnaHJvdyB3aWxsIGhhdmUgdGhlIHNhbWUgdmFsdWVcclxuICAgICAgLy8gZmluZCB0aGUgbG93ZXN0IGNvbCBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGxvd2VyIHRoYW4gdGhhdCBvZiB0aGUgZmlyc3QgcGxheWVkIHRpbGVcclxuICAgICAgbGV0IGxvd2VzdGNvbCA9IGxvd2NvbDtcclxuICAgICAgd2hpbGUgKGxvd2VzdGNvbCA+IDAgJiYgc3F1YXJlc1tyb3ddW2xvd2VzdGNvbC0xXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgbG93ZXN0Y29sID0gbG93ZXN0Y29sIC0gMTtcclxuICAgICAgfVxyXG4gICAgICAvLyBmaW5kIHRoZSBoaWdoZXN0IGNvbCBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGhpZ2hlciB0aGFuIHRoYXQgb2YgdGhlIGxhc3QgcGxheWVkIHRpbGVcclxuICAgICAgbGV0IGhpZ2hlc3Rjb2wgPSBoaWdoY29sO1xyXG4gICAgICB3aGlsZSAoaGlnaGVzdGNvbCA8IGVkZ2UgJiYgc3F1YXJlc1tyb3ddW2hpZ2hlc3Rjb2wrMV0gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgIGhpZ2hlc3Rjb2wgPSBoaWdoZXN0Y29sICsgMTtcclxuICAgICAgfVxyXG4gICAgICB3b3Jkc3RhcnRjb29yZCA9IGJvYXJkUm93SGVhZGVyc1tyb3ddICsgYm9hcmRDb2x1bW5IZWFkZXJzW2xvd2VzdGNvbF07IC8vIGhvcml6b250YWwgcGxheSBjb29yZHMgc3RhcnQgd2l0aCByb3cgaGVhZGVyXHJcbiAgICAgIG1haW53b3JkID0gXCJcIjsgLy8gSW4gY2FzZSB3ZSBnb3QgYSAxIGxldHRlciBtYWlud29yZCBpbiB0aGUgcHJldmlvdXMgYmxvY2tcclxuICAgICAgZXh0cmF3b3JkcyA9IFtdOyAvLyBEaXR0b1xyXG4gICAgICBmb3IgKHZhciBjb2wgPSBsb3dlc3Rjb2w7IGNvbCA8PSBoaWdoZXN0Y29sOyArK2NvbCkge1xyXG4gICAgICAgIG1haW53b3JkID0gbWFpbndvcmQgKyBzcXVhcmVzW3Jvd11bY29sXTtcclxuICAgICAgICBsZXQgY29vcmQgPSByb3cgKyBcIi1cIiArIGNvbDtcclxuICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKSA+IC0xKSB7IC8vIFRoaXMgdGlsZSB3YXMgcGxheWVkLCBjaGVjayBmb3IgaG9va3NcclxuICAgICAgICAgIGxldCBsb3dlc3Ryb3cgPSByb3c7XHJcbiAgICAgICAgICB3aGlsZSAobG93ZXN0cm93ID4gMCAmJiBzcXVhcmVzW2xvd2VzdHJvdy0xXVtjb2xdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgICAgbG93ZXN0cm93ID0gbG93ZXN0cm93IC0gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBoaWdoZXN0cm93ID0gcm93O1xyXG4gICAgICAgICAgd2hpbGUgKGhpZ2hlc3Ryb3cgPCBlZGdlICYmIHNxdWFyZXNbaGlnaGVzdHJvdysxXVtjb2xdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgICAgaGlnaGVzdHJvdyA9IGhpZ2hlc3Ryb3cgKyAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGxvd2VzdHJvdyA8IGhpZ2hlc3Ryb3cpIHsgLy8gaG9vayB3YXMgbWFkZVxyXG4gICAgICAgICAgICBsZXQgZXh0cmF3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yICh2YXIgciA9IGxvd2VzdHJvdzsgciA8PSBoaWdoZXN0cm93OyArK3IpIHtcclxuICAgICAgICAgICAgICBleHRyYXdvcmQgPSBleHRyYXdvcmQgKyBzcXVhcmVzW3JdW2NvbF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXh0cmF3b3JkcyA9IFsuLi5leHRyYXdvcmRzLCBleHRyYXdvcmRdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGxheWluZm8gPSB7bWFpbndvcmQ6IG1haW53b3JkLCBleHRyYXdvcmRzOiBleHRyYXdvcmRzLCBwb3M6IHdvcmRzdGFydGNvb3JkfTtcclxuICAgIHJldHVybiBwbGF5aW5mbztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFJld2luZEluZm8oKSB7IC8vIE11c3QgYmUgY2FsbGVkIGJlZm9yZSB5b3Ugc3RhcnQgc2V0dGluZyBuZXcgdmFsdWVzIGZvciBzdHVmZlxyXG4gICAgLyogUmV3aW5kIGluZm8gaXMgZXZlcnl0aGluZyB5b3UgbmVlZCB0byByZXZlcnNlIHRoZSBtb3ZlIHRoYXQgd2UgZG8gbm90IGFscmVhZHkgaGF2ZSBpbiB0aGUgbmV3IG1vdmUgdmFyaWFibGU6XHJcbiAgICAgICAgc3F1YXJlczogc2F5cyB3aGF0IHRpbGUgaXMgb24gd2hhdCBzcXVhcmVcclxuICAgICAgICB1c2VkYnk6IHNheXMgd2hvIHBsYXllZCB3aGF0IHRpbGUgb24gd2hhdCBzcXVhcmUgKGFmZmVjdHMgc3R5bGluZylcclxuICAgICAgICByYWNrOiBwbGF5ZXJzIHJhY2sgYmVmb3JlIG1vdmUgd2FzIG1hZGUgXHJcbiAgICAgICAgdGlsZXM6IHRpbGUgcG9vbCBiZWZvcmUgcGlja2luZyBuZXcgdGlsZXNcclxuICAgICAgICByZXNjdWVzOiByZXNjdWUgY291bnRcclxuICAgICAgICBwYXNzZWQ6IHdoZXRoZXIgcHJldmlvdXMgcGxheSB3YXMgYSBwYXNzXHJcbiAgICAqL1xyXG4gICAgbGV0IHJld2luZEluZm8gPSB7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zbmFwc2hvdC5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4uc25hcHNob3QudXNlZGJ5XSxcclxuICAgICAgcmFjazogd2hvc2V0dXJuID09PSBcIkdcIiA/IFsuLi5zbmFwc2hvdC5ndGlsZXNdOiBbLi4uc25hcHNob3QucHRpbGVzXSxcclxuICAgICAgdGlsZXM6IFsuLi50aWxlc10sXHJcbiAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMsXHJcbiAgICAgIHBhc3NlZDogcGFzc2VkXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHJld2luZEluZm87XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGFsbG93VW5kb0xhc3RUdXJuKCkge1xyXG4gICAgaWYgKCFhbGxvd1Jld2luZCkge1xyXG4gICAgICBzZXRBbGxvd1Jld2luZCh0cnVlKTtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImFsbG93dW5kb1wiLCAvLyBhbGxvdyB1bmRvIGxhc3QgdHVyblxyXG4gICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyAvLyB3aG8gaXMgYWxsb3dpbmcgaXRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwZXJmb3JtUmV3aW5kKCkge1xyXG4gICAgLyogUmV3aW5kIHRoZSBsYXN0IG1vdmUgYW5kIHRha2UgaXQgb2ZmIHRoZSBlbmQgb2YgdGhlIG1vdmUgbGlzdCAqL1xyXG4gICAgbGV0IG51bU1vdmVzID0gbW92ZXMubGVuZ3RoO1xyXG4gICAgbGV0IGxhc3RNb3ZlID0gbW92ZXNbbW92ZXMubGVuZ3RoLTFdO1xyXG4gICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4ubGFzdE1vdmUucmV3aW5kSW5mby5zcXVhcmVzXTtcclxuICAgIGxldCBuZXdVc2VkYnkgPSBbLi4ubGFzdE1vdmUucmV3aW5kSW5mby51c2VkYnldO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLmxhc3RNb3ZlLnJld2luZEluZm8udGlsZXNdO1xyXG4gICAgbGV0IG5ld1B0aWxlcyA9IGxhc3RNb3ZlLmJ5ID09PSBcIlBcIiA/IFsuLi5sYXN0TW92ZS5yZXdpbmRJbmZvLnJhY2tdIDogWy4uLnB0aWxlc107XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gbGFzdE1vdmUuYnkgPT09IFwiR1wiID8gWy4uLmxhc3RNb3ZlLnJld2luZEluZm8ucmFja10gOiBbLi4uZ3RpbGVzXTtcclxuICAgIGxldCBuZXdSZXNjdWVzID0gbGFzdE1vdmUucmV3aW5kSW5mby5yZXNjdWVzO1xyXG4gICAgbGV0IG5ld1dob3NldHVybiA9IGxhc3RNb3ZlLmJ5OyAvLyBCYWNrIHRvIHRoZWlyIHR1cm5cclxuICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3Zlc107XHJcbiAgICBuZXdNb3Zlcy5zcGxpY2UobnVtTW92ZXMtMSwxKTtcclxuICAgIGxldCBuZXdTbmFwc2hvdCA9IHtcclxuICAgICAgc3F1YXJlczogWy4uLm5ld1NxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi5uZXdVc2VkYnldLFxyXG4gICAgICBndGlsZXM6IFsuLi5uZXdHdGlsZXNdLFxyXG4gICAgICBwdGlsZXM6IFsuLi5uZXdQdGlsZXNdXHJcbiAgICB9O1xyXG4gICAgbGV0IG5ld1Bhc3NlZCA9IGxhc3RNb3ZlLnBhc3NlZDtcclxuICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICBzZXRSZXNjdWVzKG5ld1Jlc2N1ZXMpO1xyXG4gICAgc2V0UGFzc2VkKG5ld1Bhc3NlZCk7XHJcbiAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICBzZXRTbmFwc2hvdChuZXdTbmFwc2hvdCk7XHJcbiAgICAvLyBKdXN0IHNlbmQgZXZlcnl0aGluZyBldmVuIHRob3VnaCBzb21lIGNvdWxkIGJlIGhhcmQgY29kZWQgaW4gcHJvY2Vzc01lc3NhZ2UgYnkgb3Bwb25lbnRcclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcInVuZG90dXJuXCIsIC8vIHVuZG8gbGFzdCB0dXJuXHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB0aWxlIHBvb2xcclxuICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gcHJpc29uZXJzIHJhY2tcclxuICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gZ3VhcmRzIHJhY2tcclxuICAgICAgICBzcXVhcmVzOiBuZXdTcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBuZXdVc2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gc3dhcCBuZXZlciBlbmRzIHRoZSBnYW1lIHNvIGdvIHRvIG9wcG9uZW50XHJcbiAgICAgICAgcmVzY3VlczogbmV3UmVzY3VlcywgLy8gcmVzY3VlIGNvdW50XHJcbiAgICAgICAgcGFzc2VkOiBuZXdQYXNzZWQsIC8vIHdoZXRoZXIgcHJldmlvdXMgcGxheSB3YXMgYSBwYXNzXHJcbiAgICAgICAgbW92ZXM6IG5ld01vdmVzLCAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICBzbmFwc2hvdDogbmV3U25hcHNob3RcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRQdGlsZXMoWy4uLnNuYXBzaG90LnB0aWxlc10pO1xyXG4gICAgc2V0R3RpbGVzKFsuLi5zbmFwc2hvdC5ndGlsZXNdKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldFJjZChbLTEsLTEsbm9kaXJlY3Rpb25dKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmlzb25lclBhc3MgPSAoKSA9PiB7XHJcbiAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgIGxldCBuZXdXaG9zZXR1cm4gPSBwYXNzZWQgPyBcIlhcIiA6IFwiR1wiOyAvLyBJZiBib3RoIHBsYXllcnMgcGFzcyB0aGVuIGVuZCB0aGUgZ2FtZSBieSB1c2luZyBcIlhcIlxyXG4gICAgbGV0IG5ld01vdmUgPSB7Ynk6IFwiUFwiLCB0eXBlOiBcIlBBU1NcIiwgcmV3aW5kSW5mbzogcmV3aW5kSW5mb307XHJcbiAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgc2V0UGFzc2VkKHRydWUpO1xyXG4gICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgcHRpbGVzOiBzbmFwc2hvdC5wdGlsZXMsIC8vIHByaXNvbmVycyByYWNrIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgdGlsZXM6IHRpbGVzLCAvLyB0aWxlIHBvb2wgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgcGFzc2VkOiB0cnVlLFxyXG4gICAgICAgIG1vdmVzOiBuZXdNb3ZlcywgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBubyByZXNjdWVzIG9uIGEgcGFzc1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGd1YXJkc1Bhc3MgPSAoKSA9PiB7XHJcbiAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgIGxldCBuZXdXaG9zZXR1cm4gPSBwYXNzZWQgPyBcIlhcIiA6IFwiUFwiOyAvLyBJZiBib3RoIHBsYXllcnMgcGFzcyB0aGVuIGVuZCB0aGUgZ2FtZSBieSB1c2luZyBcIlhcIlxyXG4gICAgbGV0IG5ld01vdmUgPSB7Ynk6IFwiR1wiLCB0eXBlOiBcIlBBU1NcIiwgcmV3aW5kSW5mbzogcmV3aW5kSW5mb307XHJcbiAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgc2V0UGFzc2VkKHRydWUpO1xyXG4gICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgZ3RpbGVzOiBzbmFwc2hvdC5ndGlsZXMsIC8vIGd1YXJkcyByYWNrIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgdGlsZXM6IHRpbGVzLCAvLyB0aWxlIHBvb2wgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgcGFzc2VkOiB0cnVlLFxyXG4gICAgICAgIG1vdmVzOiBuZXdNb3ZlcyAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXF1ZXN0R2FtZURhdGEgPSAoKSA9PiB7XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybiwgLy8gZm9yIGxvYmJ5IHRvIHBpY2sgdXAgdGhpcyBtZXNzYWdlXHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIgLy8gcmVxdWVzdCBnYW1lIGRhdGFcclxuICAgICAgfSlcclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAocHJpc29uZXJzT3JHdWFyZHMgIT09IHdob3NldHVybikge3JldHVybjt9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIiA/IGVuZFByaXNvbmVyc1R1cm4oKSA6IGVuZEd1YXJkc1R1cm4oKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICByZWNhbGxUaWxlcygpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbGV0dGVydGVzdCA9IC9eW0EtWmEtelxcP10kLzsgLy8gc2luZ2xlIGxldHRlciBvciBxdWVzdGlvbiBtYXJrIGtleSBwcmVzc2VkXHJcbiAgICBpZiAoZXZlbnQua2V5Lm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgIGxldCBsZXR0ZXIgPSBldmVudC5rZXkudG9VcHBlckNhc2UoKTtcclxuICAgICAgbGV0IHJhY2sgPSB3aG9zZXR1cm4gPT09IFwiUFwiID8gcHRpbGVzIDogZ3RpbGVzO1xyXG4gICAgICBsZXQgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKGxldHRlcik7XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKFwiP1wiKTsgLy8gVXNlIHRoZSBibGFuayBpZiB0aGV5IGhhdmUgb25lXHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5ld1NlbGVjdGlvbiA+IC0xKSB7IC8vIFByZXNzZWQgbGV0dGVyIGlzIG9uIHRoZSByYWNrXHJcbiAgICAgICAgbGV0IHJvdyA9IHJjZFswXTtcclxuICAgICAgICBsZXQgY29sID0gcmNkWzFdO1xyXG4gICAgICAgIGxldCBkaXIgPSByY2RbMl07XHJcbiAgICAgICAgaWYgKHJvdyA+LTEgJiYgY29sID4gLTEgJiYgZGlyICE9PSBub2RpcmVjdGlvbikgeyAvLyByb3csIGNvbCwgZGlyIGFyZSBzZXQgdG8gYWNjZXB0IGtleXN0cm9rZVxyXG4gICAgICAgICAgLy8gTmVlZCB0byBmaWd1cmUgb3V0IG5leHQgc3FhdXJlIHRvIGF1dG8tcGxhY2UgYSB0aWxlXHJcbiAgICAgICAgICBsZXQgbmV3UmNkID0gcmNkO1xyXG4gICAgICAgICAgaWYgKGRpciA9PT0gXCJyXCIpIHsgLy8gcGxheWluZyByaWdodHdhcmRzXHJcbiAgICAgICAgICAgIGxldCBuZXdjID0gLTE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSBjb2wgKyAxOyBjIDwgZWRnZSArIDEgJiYgbmV3YyA9PT0gLTE7IGMrKykge1xyXG4gICAgICAgICAgICAgIGlmIChzcXVhcmVzW3Jvd11bY10gPT09IHNxdWFyZXVudXNlZCkge25ld2MgPSBjO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmV3YyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsbm9kaXJlY3Rpb25dO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG5ld1JjZCA9IFtyb3csIG5ld2MsIFwiclwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGlvbigtMSk7IC8vIHdoZW4gdGhleSBhcmUgdHlwaW5nIHRoZXkgYXJlIG5vdCBzZWxlY3RpbmcgcmFjayB0aWxlcyBieSBjbGlja2luZyB0aGVtIG9uIHRoZSByYWNrXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChkaXIgPT09IFwiZFwiKSB7IC8vIHBsYXlpbmcgZG93bndhcmRzXHJcbiAgICAgICAgICAgIGxldCBuZXdyID0gLTE7XHJcbiAgICAgICAgICAgIGxldCBudW1yb3dzID0gKHJhY2tzaXplKjIpKzE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSByb3cgKyAxOyByIDwgbnVtcm93cyAmJiBuZXdyID09PSAtMTsgcisrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZXNbcl1bY29sXSA9PT0gc3F1YXJldW51c2VkKSB7bmV3ciA9IHI7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZXdyID09PSAtMSkge1xyXG4gICAgICAgICAgICAgIG5ld1JjZCA9IFstMSwtMSxub2RpcmVjdGlvbl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gW25ld3IsIGNvbCwgXCJkXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTsgLy8gd2hlbiB0aGV5IGFyZSB0eXBpbmcgdGhleSBhcmUgbm90IHNlbGVjdGluZyByYWNrIHRpbGVzIGJ5IGNsaWNraW5nIHRoZW0gb24gdGhlIHJhY2tcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiICYmIGN1cnJlbnRjb29yZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBTYW1lIGFzIGNsaWNraW5nIG9uIGEgcGxheWVkLXRoaXMtbW92ZSB0aWxlIGluIHRlcm1zIG9mIHJldHVybmluZyB0aGUgdGlsZSB0byB0aGUgcmFja1xyXG4gICAgICAvLyBIb3dldmVyIHdlIGFsc28gd2FudCB0byBzZXQgdXAgcmNkIHNvIHRoZXkgY2FuIHByZXNzIHRoZSBrZXkgdGhleSBtZWFudCBhbmQgY29udGludWVcclxuICAgICAgbGV0IGNvb3JkID0gY3VycmVudGNvb3Jkc1tjdXJyZW50Y29vcmRzLmxlbmd0aCAtIDFdOyAvLyB0aWxlIHRvIHJldHVybiB0byByYWNrXHJcbiAgICAgIGxldCBuZXdDdXJyZW50Y29vcmRzID0gWy4uLmN1cnJlbnRjb29yZHNdO1xyXG4gICAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld1VzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgICAgbGV0IG5ld1JjZCA9IFstMSwtMSxub2RpcmVjdGlvbl07XHJcbiAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgIG5ld0N1cnJlbnRjb29yZHMuc3BsaWNlKGN1cnJlbnRjb29yZHMubGVuZ3RoLTEsMSk7XHJcbiAgICAgIGxldCByb3cgPSBwYXJzZUludChjb29yZC5zcGxpdChcIi1cIilbMF0pO1xyXG4gICAgICBsZXQgY29sID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgbGV0IHJldHVybmVkVGlsZSA9IHNxdWFyZXNbcm93XVtjb2xdO1xyXG4gICAgICBpZiAod2hvc2V0dXJuID09PSBcIlBcIikge1xyXG4gICAgICAgIG5ld1B0aWxlcy5wdXNoKHJldHVybmVkVGlsZSk7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3UHRpbGVzLmxlbmd0aC0xO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0d0aWxlcy5wdXNoKHJldHVybmVkVGlsZSk7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3R3RpbGVzLmxlbmd0aC0xO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1VzZWRieVtyb3ddW2NvbF0gPSB1c2VkYnlub29uZTtcclxuICAgICAgbmV3U3F1YXJlc1tyb3ddW2NvbF0gPSBzcXVhcmV1bnVzZWQ7XHJcbiAgICAgIGxldCBkaXIgPSByY2RbMl07XHJcbiAgICAgIGlmIChkaXIgIT09IG5vZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgLy8gZGlyZWN0aW9uIHdhcyBzZXQgc28ga2VlcCBpdFxyXG4gICAgICAgIG5ld1JjZCA9IFtyb3csY29sLGRpcl07XHJcbiAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSAtMTsgLy8gaWYgdGhleSBiYWNrc3BhY2UgYWxsIHRoZSBsZXR0ZXJzIG9mZiBsZWF2ZSByYWNrIHRpbGUgdW5zZWxlY3RlZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgICBzZXRSY2QobmV3UmNkKTtcclxuICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByaXNvbmJyZWFrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1jb250YWluZXIgdzMtdGVhbCB0b3BCYXJIZWlnaHRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktbWlkZGxlXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXlIZWFkaW5nRm9udFwiPlByaXNvbiBCcmVhazwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LXRvcGxlZnQgdzMtYmxhY2sgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgIEdhbWUgaWQ6IHtnYW1laWR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWJvdHRvbWxlZnQgdzMtb3JhbmdlIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICBQcmlzb25lcnM6IHtwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyBuaWNrbmFtZSA6IG9wcG5hbWV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LXRvcHJpZ2h0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi4uLy4uL1wifT5cclxuICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktYm90dG9tcmlnaHQgdzMtb3JhbmdlIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICBHdWFyZHM6IHtwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyBvcHBuYW1lIDogbmlja25hbWV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiVGlsZUFuZE1vdmVzT3V0ZXJcIj5cclxuICAgICAgICAgICAgPFNob3dVbnNlZW5UaWxlcyB0aWxlcz17dGlsZXN9IG90aGVydGlsZXM9e3ByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IGd0aWxlcyA6IHB0aWxlc30vPlxyXG4gICAgICAgICAgICA8U2hvd01vdmVzIG1vdmVzPXttb3Zlc30vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiUGxheWVyT3V0ZXJTZWN0aW9uXCI+XHJcbiAgICAgICAgICB7cHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID9cclxuICAgICAgICAgICAgPFBsYXllclNlY3Rpb25cclxuICAgICAgICAgICAgICByYWNrdGlsZXM9e3B0aWxlc31cclxuICAgICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVJhY2tUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRQcmlzb25lcnNUdXJuKCl9XHJcbiAgICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcFByaXNvbmVyc1RpbGVzKCl9XHJcbiAgICAgICAgICAgICAgb25DbGlja1Bhc3NQbGF5PXsoKSA9PiBwcmlzb25lclBhc3MoKX1cclxuICAgICAgICAgICAgICBvbkNsaWNrVW5kb0xhc3RQbGF5PXsoKSA9PiBwZXJmb3JtUmV3aW5kKCl9XHJcbiAgICAgICAgICAgICAgb25DbGlja0FsbG93VW5kbz17KCkgPT4gYWxsb3dVbmRvTGFzdFR1cm4oKX1cclxuICAgICAgICAgICAgICBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgICAgICAgbW92ZXM9e21vdmVzfVxyXG4gICAgICAgICAgICAgIGFsbG93UmV3aW5kPXthbGxvd1Jld2luZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgICAgPFBsYXllclNlY3Rpb25cclxuICAgICAgICAgICAgICByYWNrdGlsZXM9e2d0aWxlc31cclxuICAgICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVJhY2tUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRHdWFyZHNUdXJuKCl9XHJcbiAgICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcEd1YXJkc1RpbGVzKCl9XHJcbiAgICAgICAgICAgICAgb25DbGlja1Bhc3NQbGF5PXsoKSA9PiBndWFyZHNQYXNzKCl9XHJcbiAgICAgICAgICAgICAgb25DbGlja1VuZG9MYXN0UGxheT17KCkgPT4gcGVyZm9ybVJld2luZCgpfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tBbGxvd1VuZG89eygpID0+IGFsbG93VW5kb0xhc3RUdXJuKCl9XHJcbiAgICAgICAgICAgICAgcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICAgICAgICAgIG1vdmVzPXttb3Zlc31cclxuICAgICAgICAgICAgICBhbGxvd1Jld2luZD17YWxsb3dSZXdpbmR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgIHtwcmlzb25lcnNPckd1YXJkcyA9PT0gd2hvc2V0dXJuID9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufT5cclxuICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgIHNxdWFyZXM9e3NxdWFyZXN9XHJcbiAgICAgICAgICAgICAgICB1c2VkYnk9e3VzZWRieX1cclxuICAgICAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KHJpLCBjaSkgPT4gaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyaSwgY2ksIC0xLG51bGwpfVxyXG4gICAgICAgICAgICAgICAgcmFja3NpemU9e3JhY2tzaXplfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgc3F1YXJlcz17c3F1YXJlc31cclxuICAgICAgICAgICAgICAgIHVzZWRieT17dXNlZGJ5fVxyXG4gICAgICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgIHJhY2tzaXplPXtyYWNrc2l6ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgPFNob3dSZXNjdWVzIHJlc2N1ZXM9e3Jlc2N1ZXN9IC8+XHJcbiAgICAgICAgICA8Q2hhdCBnYW1laWQ9e2dhbWVpZH0gY2xpZW50PXtjbGllbnR9IG5pY2tuYW1lPXtuaWNrbmFtZX0gbXNncz17Y2hhdG1zZ3N9IHNldE1zZ3M9e3NldENoYXRtc2dzfSBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1jb250YWluZXIgdzMtdGVhbCB0b3BCYXJIZWlnaHRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktbWlkZGxlIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgIHt3aG9zZXR1cm4gPT09IFwiWFwiID9cclxuICAgICAgICAgICAgPGgxPkdhbWUgT3ZlciE8L2gxPlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgICA8cD57am9rZXNbam9rZWluZGV4XX08L3A+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNob3dVbnNlZW5UaWxlcyA9IChwcm9wcykgPT4geyAvLyB0aWxlcyA9IHRpbGVzIGluIGJhZywgb3RoZXJ0aWxlcyA9IHRpbGVzIG9uIG90aGVyIHBsYXllcnMgcmFja1xyXG4gIGxldCB1bnNlZW5UaWxlcyA9IFsuLi5wcm9wcy50aWxlcywgLi4ucHJvcHMub3RoZXJ0aWxlc107XHJcbiAgLy8gU29ydCB0aGUgdGlsZXMgdGhlbiBwdXQgdGhlIGJsYW5rcyBhdCB0aGUgZW5kXHJcbiAgdW5zZWVuVGlsZXMuc29ydCgpO1xyXG4gIGlmICh1bnNlZW5UaWxlc1swXSA9PT0gXCI/XCIpIHtcclxuICAgICAgdW5zZWVuVGlsZXMuc3BsaWNlKDAsMSlcclxuICAgICAgdW5zZWVuVGlsZXMucHVzaChcIj9cIilcclxuICB9XHJcbiAgaWYgKHVuc2VlblRpbGVzWzBdID09PSBcIj9cIikge1xyXG4gICAgICB1bnNlZW5UaWxlcy5zcGxpY2UoMCwxKVxyXG4gICAgICB1bnNlZW5UaWxlcy5wdXNoKFwiP1wiKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVwb29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbFRpdGxlXCI+VElMRVM8L2Rpdj5cclxuICAgICAge3Vuc2VlblRpbGVzLm1hcCgodCwgdGkpID0+IChcclxuICAgICAgICA8c3BhbiBrZXk9e2B0aWxlJHt0aX1gfT5cclxuICAgICAgICAgIHt0aSA+IDAgJiYgdCAhPT0gdW5zZWVuVGlsZXNbdGkgLSAxXSA/IChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJUaWxlcG9vbERpdmlkZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dCA9PT0gXCJRXCIgPyBcInBiVGlsZXBvb2xUaWxlIHVcIiA6IFwicGJUaWxlcG9vbFRpbGVcIn0+e3R9PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2hvd01vdmVzID0gKHByb3BzKSA9PiB7IC8vIHNob3cgbW92ZXMgbWFkZVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBiTW92ZXNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYk1vdmVzVGl0bGVcIj5NT1ZFUzwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiTW92ZXNTY3JvbGxhYmxlXCIgaWQ9XCJTY3JvbGxhYmxlTW92ZXNcIj5cclxuICAgICAgICB7cHJvcHMubW92ZXMubWFwKChtLCBtaSkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2Btb3ZlJHttaX1gfSBjbGFzc05hbWU9XCJwYk1vdmVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJNb3ZlIGJ5XCI+e20uYnl9PC9zcGFuPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHBiTW92ZSAke20udHlwZX1gfT5cclxuICAgICAgICAgICAgICB7bS50eXBlID09PSBcIlBMQVlcIiA/XHJcbiAgICAgICAgICAgICAgICA8PnttLnBvc30ge20ubWFpbndvcmQucmVwbGFjZShcIlFcIixcIlF1XCIpfVxyXG4gICAgICAgICAgICAgICAgICB7bS5leHRyYXdvcmRzPy5tYXAoKHcpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgLCZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAge3cucmVwbGFjZShcIlFcIixcIlF1XCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaG93UmVzY3VlcyA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUmVzY3Vlc01hZGVcIj5cclxuICAgICAgUmVzY3VlcyBtYWRlOiB7cHJvcHMucmVzY3Vlc31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDaGF0ID0gKHtnYW1laWQsIGNsaWVudCwgbmlja25hbWUsIG1zZ3MsIHNldE1zZ3MsIHByaXNvbmVyc09yR3VhcmRzfSkgPT4ge1xyXG4gIGNvbnN0IFtuZXh0bXNnLCBzZXROZXh0bXNnXSA9IHVzZVN0YXRlKCcnKTtcclxuIFxyXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIiAmJiBuZXh0bXNnLmxlbmd0aCA+IDApIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbGV0IG5ld01zZ3MgPSBbLi4ubXNncywge2Zyb206IG5pY2tuYW1lLCBtc2c6IG5leHRtc2d9XVxyXG4gICAgICBsZXQgc2VuZG1zZyA9IG5leHRtc2c7XHJcbiAgICAgIHNldE1zZ3MobmV3TXNncyk7XHJcbiAgICAgIHNldE5leHRtc2coJycpO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiY2hhdFwiLCAvLyBzZW5kIGNoYXQgbWVzc2FnZVxyXG4gICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcywgLy8gd2hvIHNlbnQgaXRcclxuICAgICAgICAgIHNlbmRtc2c6IHNlbmRtc2cgLy8gdGhlIG1lc3NhZ2UgdHlwZWQgaW4gdGhlIGNoYXRcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBsZXQgY2hhcnRlc3QgPSAvXltBLVphLXowLTkgXFwuLFxcKFxcKVxcPzohJ1wiXSQvOyAvLyBBbGxvdyBsZXR0ZXIsIG51bWJlciwgc3BhY2UsIHBlcmlvZCwgY29tbWEsIHJvdW5kIGJyYWNrZXRzLCBxdWVzdGlvbiBtYXJrLCBjb2xvbiwgZXhjbGFtYXRpb24gbWFyaywgcXVvdGUsIGRvdWJsZSBxdW90ZVxyXG4gICAgLy8gaWYgKGV2ZW50LmtleS5tYXRjaChjaGFydGVzdCkpIHtcclxuICAgIC8vICAgbGV0IG5ld05leHRtc2cgPSBuZXh0bXNnICsgZXZlbnQua2V5O1xyXG4gICAgLy8gICBzZXROZXh0bXNnKG5ld05leHRtc2cpO1xyXG4gICAgLy8gfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJCYWNrc3BhY2VcIiAmJiBuZXh0bXNnLmxlbmd0aCA+IDApIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbGV0IG5ld05leHRtc2cgPSBuZXh0bXNnLnNsaWNlKDAsbmV4dG1zZy5sZW5ndGgtMSk7XHJcbiAgICAgIHNldE5leHRtc2cobmV3TmV4dG1zZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cIlNjcm9sbGFibGVDaGF0XCIgY2xhc3NOYW1lPVwicGJDaGF0XCI+XHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYkNoYXRUYWJsZVwiPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHttc2dzLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2BDaGF0TWVzc2FnZSR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQ2hhdEZyb21cIj57dmFsdWUuZnJvbX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkNoYXRNc2dcIj57dmFsdWUubXNnfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIyXCI+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17bmV4dG1zZyA9PT0gXCJcIiA/IFwicGJDaGF0SW5wdXRFbXB0eVwiIDogXCJwYkNoYXRJbnB1dFwifVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5leHRtc2dJbnB1dEFyZWFcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25leHRtc2d9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXROZXh0bXNnKGUudGFyZ2V0LnZhbHVlKTt9fVxyXG4gICAgICAgICAgICAgICAgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY2hhdC4uLlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBzY3JvbGxUb0JvdHRvbSA9IChlbGVtZW50aWQpID0+IHtcclxuICBjb25zdCB0aGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudGlkKTtcclxuICB0aGVFbGVtZW50LnNjcm9sbFRvcCA9IHRoZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==