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
  const rescueSound = new Audio("./tada.wav");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (rescues > 0) {
      rescueSound.play();
    }
  }, [rescues]); // Play a sound when a rescue is made

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
    rescueSound.play();

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
          lineNumber: 1633,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1632,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1635,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", prisonersOrGuards === "P" ? nickname : oppname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1638,
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
              lineNumber: 1643,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1643,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1642,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1641,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", prisonersOrGuards === "P" ? oppname : nickname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1646,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1631,
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
          lineNumber: 1652,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowMoves, {
          moves: moves
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1653,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1651,
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
          lineNumber: 1657,
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
          lineNumber: 1673,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1655,
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
            lineNumber: 1693,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1692,
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
            lineNumber: 1703,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1702,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1690,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowRescues, {
          rescues: rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1714,
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
          lineNumber: 1715,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1713,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1650,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-middle commonFontFamily",
        children: whoseturn === "X" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Game Over!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1721,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: jokes[jokeindex]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1723,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1719,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1718,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1630,
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
      lineNumber: 1745,
      columnNumber: 7
    }, undefined), unseenTiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== unseenTiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1749,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: t === "Q" ? "pbTilepoolTile u" : "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1753,
        columnNumber: 11
      }, undefined)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 1747,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1744,
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
      lineNumber: 1763,
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
            lineNumber: 1767,
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
            lineNumber: 1769,
            columnNumber: 13
          }, undefined)]
        }, `move${mi}`, true, {
          fileName: _jsxFileName,
          lineNumber: 1766,
          columnNumber: 11
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1764,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1762,
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
    lineNumber: 1792,
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
            lineNumber: 1838,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "pbChatMsg",
            children: value.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1839,
            columnNumber: 15
          }, undefined)]
        }, `ChatMessage${index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 1837,
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
              lineNumber: 1844,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1843,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1842,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1835,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1834,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1833,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsuanMiXSwibmFtZXMiOlsiYnV0dG9uQ2xhc3NOYW1lIiwiYm9hcmRDb2x1bW5IZWFkZXJzIiwiYm9hcmRSb3dIZWFkZXJzIiwibW92ZXdhaXR0aW1lIiwiam9rZXMiLCJpbml0aWFsdGlsZXM0IiwiaW5pdGlhbHRpbGVzNSIsImluaXRpYWx0aWxlczYiLCJpbml0aWFsdGlsZXM3Iiwic3F1YXJldW51c2VkIiwidXNlZGJ5bm9vbmUiLCJub2RpcmVjdGlvbiIsImF2YWlsYWJsZUFjdGlvbk5vbmUiLCJhdmFpbGFibGVBY3Rpb25TdGFydCIsImF2YWlsYWJsZUFjdGlvbkpvaW4iLCJhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3QiLCJQcmlzb25CcmVhayIsImlzcmVqb2luIiwic2V0SXNyZWpvaW4iLCJ1c2VTdGF0ZSIsImdhbWVpZCIsInNldEdhbWVpZCIsIm5pY2tuYW1lIiwic2V0Tmlja25hbWUiLCJwcmlzb25lcnNPckd1YXJkcyIsInNldFByaXNvbmVyc09yR3VhcmRzIiwid3NtZXNzYWdlIiwic2V0V3NtZXNzYWdlIiwicmFja3NpemUiLCJzZXRSYWNrc2l6ZSIsImhvc3QiLCJhY2NlcHRNZXNzYWdlIiwibWVzc2FnZSIsImRhdGEiLCJjbGllbnQiLCJDdXN0b21Tb2NrZXQiLCJ1c2VFZmZlY3QiLCJjb25uZWN0IiwiTG9iYnkiLCJnYW1lbGlzdCIsInNldEdhbWVsaXN0IiwibXNnIiwicHJvY2Vzc0xvYmJ5TWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwic2VuZGVyZ2FtZWlkIiwic2VuZGVybmlja25hbWUiLCJ3dCIsIndob3NldHVybiIsInJzIiwibGVuZ3RoIiwiYW55VXBkYXRlcyIsInNlbmRlclBHIiwic2VuZGVyIiwibmV3R2FtZWxpc3QiLCJnaSIsImdldEdhbWVsaXN0SW5kZXgiLCJuZXdQbGF5aW5nUCIsInBsYXlpbmdQIiwibmV3UGxheWluZ0ciLCJwbGF5aW5nRyIsIm5ld1JhY2tzaXplIiwibmV3Z2FtZXN0YXR1cyIsIm5ld2dhbWVkYXRhIiwibmlja25hbWVQIiwibmlja25hbWVHIiwiZ2FtZXN0YXR1cyIsIm9sZGdhbWVkYXRhIiwid2luZG93IiwiYWxlcnQiLCJnaWQiLCJpIiwiaXNQbGF5aW5nUCIsImF2YWlsYWJsZUFjdGlvblAiLCJnZCIsImF2YWlsYWJsZUFjdGlvbkciLCJzZWxlY3RSYWNrU2l6ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImluZGV4IiwiU3F1YXJlIiwicHJvcHMiLCJlZGdlIiwibWlkZGxlIiwidGRjbGFzcyIsImMiLCJyY2QiLCJyaSIsImNpIiwidGR2YWx1ZSIsImluZGV4T2YiLCJvbkNsaWNrIiwic3F1YXJldXNlZGJ5IiwiQm9hcmQiLCJzcXVhcmVzIiwidXNlZGJ5IiwicmVuZGVyU3F1YXJlIiwicmVuZGVyUm93IiwiXyQiLCJyIiwiR2FtZSIsImluaXRpYWx0aWxlcyIsImluaXRpYWxzcXVhcmVzIiwiQXJyYXkiLCJmaWxsIiwiaW5pdGlhbHVzZWRieSIsInRpbGVzIiwic2V0VGlsZXMiLCJwdGlsZXMiLCJzZXRQdGlsZXMiLCJndGlsZXMiLCJzZXRHdGlsZXMiLCJzZXRTcXVhcmVzIiwic2V0VXNlZGJ5Iiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwic2V0V2hvc2V0dXJuIiwiY3VycmVudGNvb3JkcyIsInNldEN1cnJlbnRjb29yZHMiLCJyZXNjdWVzIiwic2V0UmVzY3VlcyIsInNldFJjZCIsInBhc3NlZCIsInNldFBhc3NlZCIsIm1vdmVzIiwic2V0TW92ZXMiLCJzbmFwc2hvdCIsInNldFNuYXBzaG90Iiwiam9rZWluZGV4Iiwic2V0Sm9rZWluZGV4IiwiYWxsb3dSZXdpbmQiLCJzZXRBbGxvd1Jld2luZCIsIm9wcG5hbWUiLCJzZXRPcHBuYW1lIiwiY2hhdG1zZ3MiLCJzZXRDaGF0bXNncyIsInJlc2N1ZVNvdW5kIiwiQXVkaW8iLCJwbGF5IiwibmV3amkiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInJlcXVlc3RHYW1lRGF0YSIsImNsZWFySW50ZXJ2YWwiLCJ0ZW1wUFRpbGVzIiwidGVtcEdUaWxlcyIsInRlbXBUaWxlcyIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdXNoIiwic3BsaWNlIiwic29ydCIsInNlbmQiLCJzdHJpbmdpZnkiLCJ0eXBlIiwiZnVuYyIsInByb2Nlc3NHYW1lTWVzc2FnZSIsInNjcm9sbFRvQm90dG9tIiwicHV0QXRNb3ZlU3RhcnQiLCJuZXdDaGF0bXNncyIsImZyb20iLCJzZW5kbXNnIiwiaGFuZGxlQm9hcmRTcXVhcmVDbGljayIsIm5ld1NlbGVjdGlvbiIsIm5ld1JjZCIsIm5ld1NxdWFyZXMiLCJuZXdVc2VkYnkiLCJuZXdQdGlsZXMiLCJuZXdHdGlsZXMiLCJuZXdSb3ciLCJzcXVhcmV2YWx1ZSIsIm5ld0N1cnJlbnRjb29yZHMiLCJjb29yZCIsIlN0cmluZyIsImNjaSIsIm5ld1VzZWRieVJvdyIsIm5ld0RpcmVjdGlvbiIsImhhbmRsZVJhY2tUaWxlQ2xpY2siLCJ0aWxlaW5kZXgiLCJuZXdyYWNrIiwibW92ZWR0aWxlIiwiZW5kUHJpc29uZXJzVHVybiIsImlzUGxheVZhbGlkIiwicmV3aW5kSW5mbyIsImdldFJld2luZEluZm8iLCJuZXdSZXNjdWVzIiwiZXNjYXBlaGF0Y2hlcyIsIm5ld1RpbGVzIiwibmV3V2hvc2V0dXJuIiwicGxheWluZm8iLCJnZXRQbGF5SW5mbyIsIm5ld01vdmUiLCJieSIsIm1haW53b3JkIiwiZXh0cmF3b3JkcyIsInBvcyIsIm5ld01vdmVzIiwiZW5kR3VhcmRzVHVybiIsInNuYXBzcXVhcmVzIiwic25hcHVzZWRieSIsInNuYXBwdGlsZXMiLCJzbmFwZ3RpbGVzIiwic3dhcFByaXNvbmVyc1RpbGVzIiwic3dhcEd1YXJkc1RpbGVzIiwibnVtcm93cyIsIm51bWNvbHMiLCJsb3dyb3ciLCJoaWdocm93IiwibG93Y29sIiwiaGlnaGNvbCIsInBsYXl0aHJ1IiwiaG9va21hZGUiLCJ3b3Jkc3RhcnRjb29yZCIsIm51bWNvb3JkcyIsInJvdyIsInBhcnNlSW50Iiwic3BsaXQiLCJjb2wiLCJsb3dlc3Ryb3ciLCJoaWdoZXN0cm93IiwibG93ZXN0Y29sIiwiaGlnaGVzdGNvbCIsImV4dHJhd29yZCIsInJhY2siLCJhbGxvd1VuZG9MYXN0VHVybiIsInBlcmZvcm1SZXdpbmQiLCJudW1Nb3ZlcyIsImxhc3RNb3ZlIiwibmV3U25hcHNob3QiLCJuZXdQYXNzZWQiLCJyZWNhbGxUaWxlcyIsInByaXNvbmVyUGFzcyIsImd1YXJkc1Bhc3MiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsImxldHRlcnRlc3QiLCJtYXRjaCIsImxldHRlciIsInRvVXBwZXJDYXNlIiwiZGlyIiwibmV3YyIsIm5ld3IiLCJyZXR1cm5lZFRpbGUiLCJ0aSIsIlNob3dVbnNlZW5UaWxlcyIsInVuc2VlblRpbGVzIiwib3RoZXJ0aWxlcyIsInQiLCJTaG93TW92ZXMiLCJtIiwibWkiLCJyZXBsYWNlIiwidyIsIlNob3dSZXNjdWVzIiwiQ2hhdCIsIm1zZ3MiLCJzZXRNc2dzIiwibmV4dG1zZyIsInNldE5leHRtc2ciLCJuZXdNc2dzIiwibmV3TmV4dG1zZyIsInNsaWNlIiwiZWxlbWVudGlkIiwidGhlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxlQUFlLEdBQUcscURBQXhCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxHQUFiLEVBQWlCLEdBQWpCLEVBQXFCLEdBQXJCLEVBQXlCLEdBQXpCLEVBQTZCLEdBQTdCLEVBQWlDLEdBQWpDLEVBQXFDLEdBQXJDLEVBQXlD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R0Usc0JBQVEsRUFBRzlMLENBQUQsSUFBTztBQUFDK0wsMEJBQVUsQ0FBQy9MLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVY7QUFBNEIsZUFIaEQ7QUFJRSw4QkFBZ0IsRUFBRWtLLGFBSnBCO0FBS0UseUJBQVcsRUFBQztBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBeUJELENBM0REOztJQUFNdUIsSTs7TUFBQUEsSTs7QUE2RE4sTUFBTW5HLGNBQWMsR0FBSTJHLFNBQUQsSUFBZTtBQUNwQyxRQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkgsU0FBeEIsQ0FBbkI7QUFDQUMsWUFBVSxDQUFDRyxTQUFYLEdBQXVCSCxVQUFVLENBQUNJLFlBQWxDO0FBQ0QsQ0FIRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhay45MDg1ZjRjY2I1NzkzYWQ1ZDgyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ3VzdG9tU29ja2V0IGZyb20gXCIuLi8uLi93c1wiO1xyXG5pbXBvcnQgUGxheWVyU2VjdGlvbiBmcm9tICcuLi9wYi9wbGF5ZXJTZWN0aW9uJztcclxuXHJcbmNvbnN0IGJ1dHRvbkNsYXNzTmFtZSA9ICd3My1idXR0b24gdzMtYm9yZGVyIHczLWJsdWUgdzMtaG92ZXItYmxhY2sgdzMtcm91bmQnO1xyXG5jb25zdCBib2FyZENvbHVtbkhlYWRlcnMgPSBbJ0EnLCdCJywnQycsJ0QnLCdFJywnRicsJ0cnLCdIJywnSScsJ0onLCdLJywnTCcsJ00nLCdOJywnTyddO1xyXG5jb25zdCBib2FyZFJvd0hlYWRlcnMgPSBbJzEnLCcyJywnMycsJzQnLCc1JywnNicsJzcnLCc4JywnOScsJzEwJywnMTEnLCcxMicsJzEzJywnMTQnLCcxNSddO1xyXG5jb25zdCBtb3Zld2FpdHRpbWUgPSAyMDAwMDsgLy8gd2hlbiB3YWl0aW5nIGZvciBvcHBvbmVudCBwaW5nIGV2ZXJ5IHRoaXMgbWFueSBtaWxsaXNlY29uZHNcclxuY29uc3Qgam9rZXMgPSBbXHJcbiAgJ0VzY2FwZWU6IFwiSScgKyBcIidtIGZyZWUhIEknbSBmcmVlIVwiICsgJ1wiLiBMaXR0bGUga2lkOiBcIkknKyBcIidtIGZvdXIhIEknbSBmb3VyIVwiICsgJ1wiJyxcclxuICAnVHdvIHBlYW51dHMgd2VyZSB3YWxraW5nIGRvd24gYSBiYWNrIGFsbGV5LiBPbmUgd2FzIGEgc2FsdGVkLicsXHJcbiAgXCJUaGUgcHN5Y2hpYyBkd2FyZiBlc2NhcGVkISBUaGVyZSdzIGEgc21hbGwgbWVkaXVtIGF0IGxhcmdlIVwiLFxyXG4gICdXaGF0IGRvIHlvdSBjYWxsIGEgdmVnZXRhYmxlIHdobyBoYXMgZXNjYXBlZCBwcmlzb24/IEFuIGVzY2FwZWEhJyxcclxuICBcIlRoZSBwcmlzb25lcnMgZmF2ZSBwdW5jdHVhdGlvbiBpcyBhIHBlcmlvZC4gSXQgbWFya3MgdGhlIGVuZCBvZiBhIHNlbnRlbmNlIVwiLFxyXG4gIFwiUHJpc29uIGlzIG9ubHkgb25lIHdvcmQsIGJ1dCB0byByb2JiZXJzIGl0J3MgYSB3aG9sZSBzZW50ZW5jZS5cIlxyXG5dO1xyXG5jb25zdCBpbml0aWFsdGlsZXM0ID0gW1xyXG4gIFwiQVwiLCAgXCJBXCIsICBcIkFcIixcclxuICBcIkJcIixcclxuICBcIkNcIixcclxuICBcIkRcIixcclxuICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIixcclxuICBcIkZcIixcclxuICBcIkdcIixcclxuICBcIkhcIixcclxuICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsXHJcbiAgXCJKXCIsXHJcbiAgXCJLXCIsXHJcbiAgXCJMXCIsXHJcbiAgXCJNXCIsXHJcbiAgXCJOXCIsICBcIk5cIixcclxuICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsXHJcbiAgXCJQXCIsXHJcbiAgXCJRXCIsXHJcbiAgXCJSXCIsICBcIlJcIixcclxuICBcIlNcIixcclxuICBcIlRcIiwgIFwiVFwiLFxyXG4gIFwiVVwiLFxyXG4gIFwiVlwiLFxyXG4gIFwiV1wiLFxyXG4gIFwiWFwiLFxyXG4gIFwiWVwiLFxyXG4gIFwiWlwiLFxyXG4gIFwiP1wiLCAgXCI/XCIsXHJcbl07IC8vIGluaXRpYWwgdGlsZSBwb29sIGZvciA0IGxldHRlciByYWNrIG1vZGVcclxuY29uc3QgaW5pdGlhbHRpbGVzNSA9IFtcclxuICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLFxyXG4gIFwiQlwiLFxyXG4gIFwiQ1wiLFxyXG4gIFwiRFwiLCAgXCJEXCIsXHJcbiAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gIFwiRlwiLFxyXG4gIFwiR1wiLFxyXG4gIFwiSFwiLFxyXG4gIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsXHJcbiAgXCJKXCIsXHJcbiAgXCJLXCIsXHJcbiAgXCJMXCIsICBcIkxcIixcclxuICBcIk1cIixcclxuICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsXHJcbiAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsXHJcbiAgXCJQXCIsXHJcbiAgXCJRXCIsXHJcbiAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLFxyXG4gIFwiU1wiLCAgXCJTXCIsXHJcbiAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLFxyXG4gIFwiVVwiLFxyXG4gIFwiVlwiLFxyXG4gIFwiV1wiLFxyXG4gIFwiWFwiLFxyXG4gIFwiWVwiLFxyXG4gIFwiWlwiLFxyXG4gIFwiP1wiLCAgXCI/XCIsXHJcbl07IC8vIGluaXRpYWwgdGlsZSBwb29sIGZvciA1IGxldHRlciByYWNrIG1vZGVcclxuY29uc3QgaW5pdGlhbHRpbGVzNiA9IFtcclxuICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIixcclxuICBcIkJcIiwgIFwiQlwiLFxyXG4gIFwiQ1wiLCAgXCJDXCIsXHJcbiAgXCJEXCIsICBcIkRcIiwgIFwiRFwiLFxyXG4gIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIixcclxuICBcIkZcIixcclxuICBcIkdcIiwgIFwiR1wiLFxyXG4gIFwiSFwiLCAgXCJIXCIsXHJcbiAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsXHJcbiAgXCJKXCIsXHJcbiAgXCJLXCIsXHJcbiAgXCJMXCIsICBcIkxcIiwgIFwiTFwiLFxyXG4gIFwiTVwiLCAgXCJNXCIsXHJcbiAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsXHJcbiAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLFxyXG4gIFwiUFwiLCAgXCJQXCIsXHJcbiAgXCJRXCIsXHJcbiAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIixcclxuICBcIlNcIiwgIFwiU1wiLCAgXCJTXCIsXHJcbiAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsXHJcbiAgXCJVXCIsICBcIlVcIiwgIFwiVVwiLFxyXG4gIFwiVlwiLFxyXG4gIFwiV1wiLFxyXG4gIFwiWFwiLFxyXG4gIFwiWVwiLFxyXG4gIFwiWlwiLFxyXG4gIFwiP1wiLCAgXCI/XCIsXHJcbl07IC8vIGluaXRpYWwgdGlsZSBwb29sIGZvciA2IGxldHRlciByYWNrIG1vZGVcclxuY29uc3QgaW5pdGlhbHRpbGVzNyA9IFtcclxuICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsXHJcbiAgXCJCXCIsICBcIkJcIixcclxuICBcIkNcIiwgIFwiQ1wiLFxyXG4gIFwiRFwiLCAgXCJEXCIsICBcIkRcIiwgIFwiRFwiLFxyXG4gIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIixcclxuICBcIkZcIiwgIFwiRlwiLFxyXG4gIFwiR1wiLCAgXCJHXCIsICBcIkdcIixcclxuICBcIkhcIiwgIFwiSFwiLFxyXG4gIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIiwgIFwiTFwiLCAgXCJMXCIsICBcIkxcIixcclxuICBcIk1cIiwgIFwiTVwiLFxyXG4gIFwiTlwiLCAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIixcclxuICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLFxyXG4gIFwiUFwiLCAgXCJQXCIsXHJcbiAgXCJRXCIsXHJcbiAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLFxyXG4gIFwiU1wiLCAgXCJTXCIsICBcIlNcIiwgIFwiU1wiLFxyXG4gIFwiVFwiLCAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIixcclxuICBcIlVcIiwgIFwiVVwiLCAgXCJVXCIsICBcIlVcIixcclxuICBcIlZcIiwgIFwiVlwiLFxyXG4gIFwiV1wiLCAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsICBcIllcIixcclxuICBcIlpcIixcclxuICBcIj9cIiwgIFwiP1wiLFxyXG5dOyAvLyBpbml0aWFsIHRpbGUgcG9vbCBmb3IgNyBsZXR0ZXIgcmFjayBtb2RlXHJcbmNvbnN0IHNxdWFyZXVudXNlZCA9IFwiLlwiO1xyXG5jb25zdCB1c2VkYnlub29uZSA9IFwiXCI7XHJcbmNvbnN0IG5vZGlyZWN0aW9uID0gXCJcIjtcclxuY29uc3QgYXZhaWxhYmxlQWN0aW9uTm9uZSA9IDA7XHJcbmNvbnN0IGF2YWlsYWJsZUFjdGlvblN0YXJ0ID0gMTtcclxuY29uc3QgYXZhaWxhYmxlQWN0aW9uSm9pbiA9IDI7XHJcbmNvbnN0IGF2YWlsYWJsZUFjdGlvblJlY29ubmVjdCA9IDM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmlzb25CcmVhaygpIHtcclxuICBjb25zdCBbaXNyZWpvaW4sIHNldElzcmVqb2luXSA9IHVzZVN0YXRlKGZhbHNlKSAvLyBVc2VkIHdoZW4gcGxheWVyIGxvc2VzIGNvbm5lY3Rpb24gYW5kIHJlam9pbnNcclxuICBjb25zdCBbZ2FtZWlkLCBzZXRHYW1laWRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW25pY2tuYW1lLCBzZXROaWNrbmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcHJpc29uZXJzT3JHdWFyZHMsIHNldFByaXNvbmVyc09yR3VhcmRzXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFt3c21lc3NhZ2UsIHNldFdzbWVzc2FnZV0gPSB1c2VTdGF0ZSgnJykgLy8gTGF0ZXN0IG1lc3NhZ2VzIGZyb20gdGhlIHdlYnNvY2tldFxyXG4gIGNvbnN0IFtyYWNrc2l6ZSwgc2V0UmFja3NpemVdID0gdXNlU3RhdGUoNCk7IC8vIERlZmF1bHQgdG8gNCBsZXR0ZXIgcmFja3NcclxuICBsZXQgaG9zdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAnd3NzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJyA6ICd3czovL2xvY2FsaG9zdDo1MDAwJztcclxuICBjb25zdCBhY2NlcHRNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgIC8vIFJlYWN0IGlzIGhhcmQgdG8gdW5kZXJzdGFuZC4gSWYgSSByZWZlcmVuY2UgcHJpc29uZXJzT3JHdWFyZHMgaGVyZSBpdCB3aWxsIGFsd2F5cyBiZSB0aGUgaW5pdGlhbCB2YWx1ZS5cclxuICAgIHNldFdzbWVzc2FnZShtZXNzYWdlLmRhdGEpXHJcbiAgfVxyXG4gIGNvbnN0IFtjbGllbnRdID0gdXNlU3RhdGUobmV3IEN1c3RvbVNvY2tldChob3N0LCBhY2NlcHRNZXNzYWdlKSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IChcclxuICAgIGNsaWVudC5jb25uZWN0KClcclxuICApLFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgcHJpc29uZXJzT3JHdWFyZHMgPT09ICcnID9cclxuICAgICAgPExvYmJ5XHJcbiAgICAgICAgc2V0SXNyZWpvaW49e3NldElzcmVqb2lufVxyXG4gICAgICAgIHdzbWVzc2FnZT17d3NtZXNzYWdlfVxyXG4gICAgICAgIC8vIGNsaWVudD17Y2xpZW50fVxyXG4gICAgICAgIGdhbWVpZD17Z2FtZWlkfVxyXG4gICAgICAgIHNldEdhbWVpZD17c2V0R2FtZWlkfVxyXG4gICAgICAgIG5pY2tuYW1lPXtuaWNrbmFtZX1cclxuICAgICAgICBzZXROaWNrbmFtZT17c2V0Tmlja25hbWV9XHJcbiAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHM9e3NldFByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICAgIHJhY2tzaXplPXtyYWNrc2l6ZX1cclxuICAgICAgICBzZXRSYWNrc2l6ZT17c2V0UmFja3NpemV9XHJcbiAgICAgIC8+XHJcbiAgICA6XHJcbiAgICAgIDxHYW1lXHJcbiAgICAgICAgaXNyZWpvaW49e2lzcmVqb2lufVxyXG4gICAgICAgIHByaXNvbmVyc09yR3VhcmRzPXtwcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICBnYW1laWQ9e2dhbWVpZH1cclxuICAgICAgICBuaWNrbmFtZT17bmlja25hbWV9XHJcbiAgICAgICAgd3NtZXNzYWdlPXt3c21lc3NhZ2V9XHJcbiAgICAgICAgY2xpZW50PXtjbGllbnR9XHJcbiAgICAgICAgcmFja3NpemU9e3JhY2tzaXplfVxyXG4gICAgICAvPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTG9iYnkgPSAoe3NldElzcmVqb2luLCB3c21lc3NhZ2UsIGdhbWVpZCwgc2V0R2FtZWlkLCBuaWNrbmFtZSwgc2V0Tmlja25hbWUsIHNldFByaXNvbmVyc09yR3VhcmRzXHJcbiAgLCByYWNrc2l6ZSwgc2V0UmFja3NpemUgLy8gT3B0aW9uIGZvciByYWNrIHNpemVcclxuICB9KSA9PiB7XHJcbiAgY29uc3QgW2dhbWVsaXN0LCBzZXRHYW1lbGlzdF0gPSB1c2VTdGF0ZShbXSkgLy8gR2FtZSBpbmZvIGJ5IGdhbWUgaWRcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0xvYmJ5TWVzc2FnZShtc2cpO1xyXG4gIH0sW3dzbWVzc2FnZV0pXHJcblxyXG4gIGZ1bmN0aW9uIHByb2Nlc3NMb2JieU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgbGV0IHNlbmRlcmdhbWVpZCA9IG1lc3NhZ2VEYXRhLmdhbWVpZDtcclxuICAgICAgbGV0IHNlbmRlcm5pY2tuYW1lID0gbWVzc2FnZURhdGEubmlja25hbWU7XHJcbiAgICAgIGxldCB3dCA9IG1lc3NhZ2VEYXRhLndob3NldHVybjtcclxuICAgICAgbGV0IHJzID0gbWVzc2FnZURhdGEucmFja3NpemU7XHJcbiAgICAgIGlmIChzZW5kZXJnYW1laWQgJiYgc2VuZGVyZ2FtZWlkLmxlbmd0aCA+IDAgJiYgcnMgJiYgd3QgJiYgd3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBhbnlVcGRhdGVzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHNlbmRlclBHID0gbWVzc2FnZURhdGEuc2VuZGVyO1xyXG4gICAgICAgIGxldCBuZXdHYW1lbGlzdCA9IFsuLi5nYW1lbGlzdF07XHJcbiAgICAgICAgbGV0IGdpID0gZ2V0R2FtZWxpc3RJbmRleChzZW5kZXJnYW1laWQpO1xyXG4gICAgICAgIGxldCBuZXdQbGF5aW5nUCA9IHNlbmRlclBHID09PSBcIlBcIiA/IHRydWUgOiBnaSA+IC0xID8gZ2FtZWxpc3RbZ2ldLnBsYXlpbmdQIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IG5ld1BsYXlpbmdHID0gc2VuZGVyUEcgPT09IFwiR1wiID8gdHJ1ZSA6IGdpID4gLTEgPyBnYW1lbGlzdFtnaV0ucGxheWluZ0cgOiBmYWxzZTtcclxuICAgICAgICBsZXQgbmV3UmFja3NpemUgPSBycztcclxuXHJcbiAgICAgICAgbGV0IG5ld2dhbWVzdGF0dXMgPSBcIlVua25vd25cIjtcclxuICAgICAgICBpZiAod3QgPT09IFwiWFwiKSB7XHJcbiAgICAgICAgICBuZXdnYW1lc3RhdHVzID0gXCJHYW1lIG92ZXJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHd0ID09PSBcIlBcIikge1xyXG4gICAgICAgICAgbmV3Z2FtZXN0YXR1cyA9IFwiUHJpc29uZXJzIHR1cm5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHd0ID09PSBcIkdcIikge1xyXG4gICAgICAgICAgbmV3Z2FtZXN0YXR1cyA9IFwiR3VhcmRzIHR1cm5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZXdnYW1lZGF0YSA9IHtcclxuICAgICAgICAgIGdhbWVpZDogc2VuZGVyZ2FtZWlkLFxyXG4gICAgICAgICAgbmlja25hbWVQOiBzZW5kZXJQRyA9PT0gXCJQXCIgPyBzZW5kZXJuaWNrbmFtZSA6IGdpID4gLTEgPyBnYW1lbGlzdFtnaV0ubmlja25hbWVQIDogXCJcIixcclxuICAgICAgICAgIG5pY2tuYW1lRzogc2VuZGVyUEcgPT09IFwiR1wiID8gc2VuZGVybmlja25hbWUgOiBnaSA+IC0xID8gZ2FtZWxpc3RbZ2ldLm5pY2tuYW1lRyA6IFwiXCIsXHJcbiAgICAgICAgICBnYW1lc3RhdHVzOiBuZXdnYW1lc3RhdHVzLFxyXG4gICAgICAgICAgcGxheWluZ1A6IG5ld1BsYXlpbmdQLFxyXG4gICAgICAgICAgcGxheWluZ0c6IG5ld1BsYXlpbmdHLFxyXG4gICAgICAgICAgcmFja3NpemU6IG5ld1JhY2tzaXplXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnaSA8IDApIHsgLy8gR2FtZSBub3QgaW4gbGlzdCB5ZXQsIHB1dCBpdCBpbiB0aGUgbGlzdFxyXG4gICAgICAgICAgYW55VXBkYXRlcyA9IHRydWU7XHJcbiAgICAgICAgICBuZXdHYW1lbGlzdCA9IFsuLi5uZXdHYW1lbGlzdCwgbmV3Z2FtZWRhdGFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHsgLy8gR2FtZSBpcyBpbiB0aGUgbGlzdCwgY2hlY2sgZm9yIG5lZWRlZCB1cGRhdGVzXHJcbiAgICAgICAgICBsZXQgb2xkZ2FtZWRhdGEgPSBnYW1lbGlzdFtnaV07XHJcbiAgICAgICAgICBpZiAob2xkZ2FtZWRhdGEubmlja25hbWVQICE9PSBuZXdnYW1lZGF0YS5uaWNrbmFtZVAgfHxcclxuICAgICAgICAgICAgICBvbGRnYW1lZGF0YS5uaWNrbmFtZUcgIT09IG5ld2dhbWVkYXRhLm5pY2tuYW1lRyB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLmdhbWVzdGF0dXMgIT09IG5ld2dhbWVkYXRhLmdhbWVzdGF0dXMgfHxcclxuICAgICAgICAgICAgICBvbGRnYW1lZGF0YS5wbGF5aW5nUCAhPT0gbmV3Z2FtZWRhdGEucGxheWluZ1AgfHxcclxuICAgICAgICAgICAgICBvbGRnYW1lZGF0YS5wbGF5aW5nRyAhPT0gbmV3Z2FtZWRhdGEucGxheWluZ0cgfHxcclxuICAgICAgICAgICAgICBvbGRnYW1lZGF0YS5yYWNrc2l6ZSAhPT0gbmV3Z2FtZWRhdGEucmFja3NpemVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgYW55VXBkYXRlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgbmV3R2FtZWxpc3RbZ2ldID0gbmV3Z2FtZWRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFueVVwZGF0ZXMpIHtcclxuICAgICAgICAgIHNldEdhbWVsaXN0KG5ld0dhbWVsaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gIFxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIkVycm9yIHByb2Nlc3NpbmcgbG9iYnkgbWVzc2FnZVwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gZ2V0R2FtZWxpc3RJbmRleChnaWQpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ2FtZWxpc3QubGVuZ3RoOyArK2kpIHtcclxuICAgICAgaWYgKGdhbWVsaXN0W2ldLmdhbWVpZCA9PT0gZ2lkKSB7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaXNQbGF5aW5nUChnaWQpIHtcclxuICAgIGxldCBnaSA9IGdldEdhbWVsaXN0SW5kZXgoZ2lkKTtcclxuICAgIHJldHVybiBnaSA8IDAgPyBmYWxzZSA6IGdhbWVsaXN0W2dpXS5wbGF5aW5nUDtcclxuICB9XHJcbiAgZnVuY3Rpb24gYXZhaWxhYmxlQWN0aW9uUChnZCkge1xyXG4gICAgaWYgKG5pY2tuYW1lLmxlbmd0aCA9PT0gMCB8fCBnZC5nYW1lc3RhdHVzID09PSBcIkdhbWUgb3ZlclwiKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25Ob25lOyB9XHJcbiAgICBpZiAoIWdkLnBsYXlpbmdQKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25TdGFydDsgfVxyXG4gICAgaWYgKGdkLm5pY2tuYW1lUCA9PT0gbmlja25hbWUpIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvblJlY29ubmVjdDsgfVxyXG4gICAgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbk5vbmU7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGF2YWlsYWJsZUFjdGlvbkcoZ2QpIHtcclxuICAgIGlmIChuaWNrbmFtZS5sZW5ndGggPT09IDAgfHwgZ2QuZ2FtZXN0YXR1cyA9PT0gXCJHYW1lIG92ZXJcIikgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uTm9uZTsgfVxyXG4gICAgaWYgKCFnZC5wbGF5aW5nRykgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uSm9pbjsgfVxyXG4gICAgaWYgKGdkLm5pY2tuYW1lRyA9PT0gbmlja25hbWUpIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvblJlY29ubmVjdDsgfVxyXG4gICAgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbk5vbmU7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNlbGVjdFJhY2tTaXplKG5ld1JhY2tzaXplKSB7XHJcbiAgICBzZXRSYWNrc2l6ZShuZXdSYWNrc2l6ZSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My10ZWFsIHczLWJhclwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3My1iYXItaXRlbSB3My1jZW50cmUgbXlIZWFkaW5nRm9udFwiPlByaXNvbiBCcmVhayBMb2JieTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbSB3My1yaWdodFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT48L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxoMj48Yj5OaWNrbmFtZTo8L2I+PC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidzMtaW5wdXQgdzMtYm9yZGVyIHczLWJsdWUgbXlDb21tb25Gb250XCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuaWNrbmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25pY2tuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Tmlja25hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8aDI+PHNwYW4gY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPlBSSVNPTkVSUzxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YXJyb3dfcmlnaHQ8L2k+PC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGgyPjxiPkdhbWUgSUQ6PC9iPjwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInczLWlucHV0IHczLWJvcmRlciB3My1ibHVlIG15Q29tbW9uRm9udFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZ2FtZWlkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtnYW1laWR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxoMj48Yj5SYWNrIFNpemU6PC9iPjwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdHJhY2tzaXplNFwiIGNsYXNzTmFtZT17cmFja3NpemUgPT09IDQgPyBcInBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkXCIgOiBcInBiTG9iYnlSYWNrU2l6ZVwifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UmFja1NpemUoNCl9XHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjQgbGV0dGVyIHJhY2tzLCA5IHggOSBib2FyZFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdHJhY2tzaXplNVwiIGNsYXNzTmFtZT17cmFja3NpemUgPT09IDUgPyBcInBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkXCIgOiBcInBiTG9iYnlSYWNrU2l6ZVwifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UmFja1NpemUoNSl9XHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjUgbGV0dGVyIHJhY2tzLCAxMSB4IDExIGJvYXJkXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA1XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdHJhY2tzaXplNlwiIGNsYXNzTmFtZT17cmFja3NpemUgPT09IDYgPyBcInBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkXCIgOiBcInBiTG9iYnlSYWNrU2l6ZVwifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UmFja1NpemUoNil9XHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjYgbGV0dGVyIHJhY2tzLCAxMyB4IDEzIGJvYXJkXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA2XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdHJhY2tzaXplN1wiIGNsYXNzTmFtZT17cmFja3NpemUgPT09IDcgPyBcInBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkXCIgOiBcInBiTG9iYnlSYWNrU2l6ZVwifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UmFja1NpemUoNyl9XHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjcgbGV0dGVyIHJhY2tzLCAxNSB4IDE1IGJvYXJkXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA3XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJMb2JieUNlbGxCbG9ja0luZm9cIj57cmFja3NpemV9IGxldHRlciByYWNrcywge3JhY2tzaXplKjIrMX0geCB7cmFja3NpemUqMisxfSBib2FyZC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3RhcnRnYW1lXCIgY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChuaWNrbmFtZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJQbGVhc2UgZW50ZXIgbmlja25hbWUgYmVmb3JlIHN0YXJ0aW5nIGEgZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChnYW1laWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1BsYXlpbmdQKGdhbWVpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlByaXNvbmVycyBhbHJlYWR5IHBsYXlpbmcgdGhhdCBnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnUCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJQbGVhc2UgZW50ZXIgR2FtZSBJRCBiZWZvcmUgc3RhcnRpbmcgYSBnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTdGFydCBHYW1lXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICA8aDI+PHNwYW4gY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPkdVQVJEUzxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YXJyb3dfcmlnaHQ8L2k+PC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXlDb21tb25Gb250XCI+PGgyPkZpbmQgYW5kIGNsaWNrIHRoZSBcIkpvaW4gR2FtZVwiIGJ1dHRvbiBmb3IgeW91ciBnYW1lLjwvaDI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxoMT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyB3My1yaWdodFwiPnJlcG9ydF9wcm9ibGVtPC9pPjwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udFwiPklmIHlvdSBsb3N0IGNvbm5lY3Rpb24sIGZpbmQgYW5kIGNsaWNrIHRoZSBcIlJlY29ubmVjdFwiIGJ1dHRvbiBmb3IgeW91ciBnYW1lIGlkLjwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udFwiPjxiPkdhbWUgbGlzdDo8L2I+PC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidzMtdGFibGUtYWxsIHczLWNhcmQtNFwiPlxyXG4gICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ3My1ibHVlIGg0IG15Q29tbW9uRm9udFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+R2FtZSBJRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5Qcmlzb25lcnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+R3VhcmRzPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlJhY2sgU2l6ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5HYW1lIFN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2dhbWVsaXN0Lm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2BPdGhlckdhbWUke2luZGV4fWB9IGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udCB3My1ob3Zlci1ncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj48Yj57dmFsdWUuZ2FtZWlkfTwvYj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIHthdmFpbGFibGVBY3Rpb25QKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uTm9uZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BQcmlzb25lcnNOb0FjdGlvbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+Tm8gYWN0aW9uIGF2YWlsYWJsZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBhdmFpbGFibGVBY3Rpb25QKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0ID9cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFByaXNvbmVyc1Jlam9pbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLXJlZCB3My1yb3VuZCB3My1ob3Zlci1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNyZWpvaW4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdQJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSYWNrc2l6ZSh2YWx1ZS5yYWNrc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBSZWNvbm5lY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgUHJpc29uZXJzU3RhcnQke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ1AnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7YXZhaWxhYmxlQWN0aW9uRyh2YWx1ZSkgPT09IGF2YWlsYWJsZUFjdGlvbk5vbmUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgR3VhcmRzTm9BY3Rpb24ke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPk5vIGFjdGlvbiBhdmFpbGFibGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDogYXZhaWxhYmxlQWN0aW9uRyh2YWx1ZSkgPT09IGF2YWlsYWJsZUFjdGlvblJlY29ubmVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHdWFyZHNSZWpvaW4ke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzcmVqb2luKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnRycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmFja3NpemUodmFsdWUucmFja3NpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjb25uZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YEd1YXJkc0pvaW4ke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ0cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJhY2tzaXplKHZhbHVlLnJhY2tzaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEpvaW4gR2FtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFJhY2tTaXplJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1jZW50ZXIgdzMtYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUucmFja3NpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHYW1lU3RhdHVzJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5nYW1lc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My10ZWFsXCI+XHJcbiAgICAgICAgPGgxPkhhdmUgZnVuITwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBTcXVhcmUgPSAocHJvcHMpID0+IHtcclxuICAvLyBzcXVhcmV1c2VkYnksIHJpLCBjaSwgYywgb25DbGlja1xyXG4gIC8vIG5lZWQgc3F1YXJldXNlZGJ5IHRvIHBpY2sgY3NzIGNsYXNzTmFtZSBjb3JyZXNwb25kaW5nIHRvIHdobyBwbGF5ZWQgdGhlIHRpbGUgb24gdGhlIHNxdWFyZVxyXG4gIC8vIG5lZWQgcmksIGNpIHRvIGRpc3BsYXkgYWx0ZXJuYXRpbmcgYmFja2dyb3VuZHMgb24gdW51c2VkIHNxdWFyZXNcclxuICAvLyBuZWVkIGMgdG8gcmVwcmVzZW50IHdoaWNoIHRpbGUgaXMgb24gdGhlIHNxdWFyZSwgaWYgYW55XHJcbiAgLy8gbmVlZCBvbkNsaWNrIHRvIGhhbmRsZSBzcXVhcmUgY2xpY2sgYXQgYSBoaWdoZXIgbGV2ZWxcclxuICAvLyBuZWVkIHJjZCB0byBkaXNwbGF5IHNlbGVjdGVkIGRpcmVjdGlvbiBhcnJvdyB3aGVuIGFwcHJvcHJpYXRlXHJcbiAgLy8gbmVlZCByYWNrc2l6ZSB0byBkZXRlcm1pbmUgY2VudHJlIGFuZCBib2FyZCBhYXJyeSBlZGdlIHBvc2l0aW9uc1xyXG4gIGNvbnN0IGVkZ2UgPSAocHJvcHMucmFja3NpemUgKiAyKTtcclxuICBjb25zdCBtaWRkbGUgPSBwcm9wcy5yYWNrc2l6ZTtcclxuICBjb25zdCB0ZGNsYXNzID1cclxuICAgIHByb3BzLmMgIT09IHNxdWFyZXVudXNlZFxyXG4gICAgICA/IFwicGJTcXVhcmVJbm5lciBQbGF5ZXJUaWxlXCJcclxuICAgICAgOiBwcm9wcy5yY2RbMF0gPT09IHByb3BzLnJpICYmIHByb3BzLnJjZFsxXSA9PT0gcHJvcHMuY2kgJiYgcHJvcHMucmNkWzJdID09PSBcInJcIlxyXG4gICAgICA/IFwicGJTcXVhcmVJbm5lciBSaWdodEFycm93XCJcclxuICAgICAgOiBwcm9wcy5yY2RbMF0gPT09IHByb3BzLnJpICYmIHByb3BzLnJjZFsxXSA9PT0gcHJvcHMuY2kgJiYgcHJvcHMucmNkWzJdID09PSBcImRcIlxyXG4gICAgICA/IFwicGJTcXVhcmVJbm5lciBEb3duQXJyb3dcIlxyXG4gICAgICA6IHByb3BzLnJpID09PSBtaWRkbGUgJiYgcHJvcHMuY2kgPT09IG1pZGRsZVxyXG4gICAgICA/IFwicGJTcXVhcmVJbm5lciBDZW50ZXJTcXVhcmVcIlxyXG4gICAgICA6IChwcm9wcy5yaSA9PT0gMCB8fCBwcm9wcy5yaSA9PT0gbWlkZGxlIHx8IHByb3BzLnJpID09PSBlZGdlKSAmJlxyXG4gICAgICAgIChwcm9wcy5jaSA9PT0gMCB8fCBwcm9wcy5jaSA9PT0gbWlkZGxlIHx8IHByb3BzLmNpID09PSBlZGdlKVxyXG4gICAgICA/IFwicGJTcXVhcmVJbm5lciBFc2NhcGVIYXRjaFwiXHJcbiAgICAgIDogcHJvcHMucmkgJSAyID09PSBwcm9wcy5jaSAlIDJcclxuICAgICAgPyBcInBiU3F1YXJlSW5uZXIgc3R5bGUxXCIgOiBcInBiU3F1YXJlSW5uZXIgc3R5bGUyXCI7IC8vIEFsdGVybmF0aW5nIHNxdWFyZSBzdHlsZXNcclxuICBjb25zdCB0ZHZhbHVlID1cclxuICAgIHByb3BzLmMgIT09IHNxdWFyZXVudXNlZFxyXG4gICAgICA/IHByb3BzLmNcclxuICAgICAgOiB0ZGNsYXNzLmluZGV4T2YoXCJSaWdodEFycm93XCIpID4gLTFcclxuICAgICAgPyBcIuKeoVwiXHJcbiAgICAgIDogdGRjbGFzcy5pbmRleE9mKFwiRG93bkFycm93XCIpID4gLTFcclxuICAgICAgPyBcIuKsh1wiXHJcbiAgICAgIDogdGRjbGFzcy5pbmRleE9mKFwiQ2VudGVyU3F1YXJlXCIpID4gLTFcclxuICAgICAgPyA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnN0YXJzPC9pPlxyXG4gICAgICA6IFwiLlwiIC8qIElmIEkgcHV0IGVtcHR5IHN0cmluZyBvciAmbmJzcDsgdGhlbiBpdCBhZmZlY3RzIHRoZSBkaXNwbGF5IG9kZGx5ICAqL1xyXG4gIHJldHVybiAoXHJcbiAgICB0ZGNsYXNzLmluZGV4T2YoXCJFc2NhcGVIYXRjaFwiKSA+IC0xID9cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXt0ZGNsYXNzfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ydW5fY2lyY2xlPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA6IHByb3BzLmMgPT09IHNxdWFyZXVudXNlZCA/XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0ZGNsYXNzfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICB7dGR2YWx1ZX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDpcclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RkY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcGJTcXVhcmVUaWxlVGV4dCAke3Byb3BzLnNxdWFyZXVzZWRieSArIChwcm9wcy5jID09PSBcIlFcIiA/IFwiIHVcIiA6IFwiXCIpfWB9Pnt0ZHZhbHVlfTwvZGl2PlxyXG4gICAgICA8L2J1dHRvbj5cclxuKTtcclxufTtcclxuXHJcbmNvbnN0IEJvYXJkID0gKHsgb25DbGljaywgc3F1YXJlcywgdXNlZGJ5LCByY2QsIHJhY2tzaXplIH0pID0+IHtcclxuICBjb25zdCByZW5kZXJTcXVhcmUgPSAocmksIGNpLCBjLCBzcXVhcmV1c2VkYnkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ZCBrZXk9e2BTcXVhcmUke3JpfS0ke2NpfWB9IGNsYXNzTmFtZT1cInBiU3F1YXJlT3V0ZXJcIj5cclxuICAgICAgICA8U3F1YXJlXHJcbiAgICAgICAgICBjPXtjfVxyXG4gICAgICAgICAgY2k9e2NpfVxyXG4gICAgICAgICAgcmk9e3JpfVxyXG4gICAgICAgICAgc3F1YXJldXNlZGJ5PXtzcXVhcmV1c2VkYnl9XHJcbiAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2socmksIGNpKX1cclxuICAgICAgICAgIHJhY2tzaXplPXtyYWNrc2l6ZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3RkPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlclJvdyA9IChyaSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRyIGtleT17YEJvYXJkUm93JHtyaX1gfSBjbGFzc05hbWU9XCJwYlJvd1wiPlxyXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkJvYXJkUm93SGVhZGVyXCIgaWQ9XCJCb2FyZEhlYWRlckxlZnRcIj5cclxuICAgICAgICAgIHtib2FyZFJvd0hlYWRlcnNbcmldfVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAge3NxdWFyZXNbcmldLm1hcCgoYywgY2kpID0+IHJlbmRlclNxdWFyZShyaSwgY2ksIGMsIHVzZWRieVtyaV1bY2ldKSl9XHJcbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQm9hcmRSb3dIZWFkZXJcIiBpZD1cIkJvYXJkSGVhZGVyUmlnaHRcIj5cclxuICAgICAgICAgIHtib2FyZFJvd0hlYWRlcnNbcmldfVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dGFibGUgY2xhc3NOYW1lPVwicGJCb2FyZFwiPlxyXG4gICAgICA8dGJvZHk+XHJcbiAgICAgICAgPHRyIGNsYXNzTmFtZT1cInBiQm9hcmRDb2x1bW5IZWFkZXJSb3dcIj5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkJvYXJkSGVhZGVyVG9wTGVmdFwiPiZuYnNwOzwvdGQ+XHJcbiAgICAgICAgICB7c3F1YXJlcy5tYXAoKF8kLGkpID0+IChcclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQm9hcmRDb2x1bW5IZWFkZXJcIiBrZXk9e2BUb3BDb2x1bW5IZWFkZXIke2l9YH0+XHJcbiAgICAgICAgICAgICAge2JvYXJkQ29sdW1uSGVhZGVyc1tpXX1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQm9hcmRIZWFkZXJUb3BSaWdodFwiPiZuYnNwOzwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICB7c3F1YXJlcy5tYXAoKHIsIHJpKSA9PiByZW5kZXJSb3cocmkpKX1cclxuICAgICAgICA8dHIgY2xhc3NOYW1lPVwicGJCb2FyZENvbHVtbkhlYWRlclJvd1wiIGlkPVwiQm9hcmRIZWFkZXJCb3R0b21cIj5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkJvYXJkSGVhZGVyQm90dG9tTGVmdFwiPiZuYnNwOzwvdGQ+XHJcbiAgICAgICAgICB7c3F1YXJlcy5tYXAoKF8kLGkpID0+IChcclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQm9hcmRDb2x1bW5IZWFkZXJcIiBrZXk9e2BCb3R0b21Db2x1bW5IZWFkZXIke2l9YH0+XHJcbiAgICAgICAgICAgICAge2JvYXJkQ29sdW1uSGVhZGVyc1tpXX1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQm9hcmRIZWFkZXJCb3R0b21SaWdodFwiPiZuYnNwOzwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEdhbWUgPSAoe2lzcmVqb2luLCBwcmlzb25lcnNPckd1YXJkcywgZ2FtZWlkLCBuaWNrbmFtZSwgd3NtZXNzYWdlLCBjbGllbnRcclxuICAsIHJhY2tzaXplIC8vIE9wdGlvbiBmb3IgcmFjayBzaXplXHJcbiAgfSkgPT4ge1xyXG4gIGNvbnN0IG1pZGRsZSA9IHJhY2tzaXplOyAvLyBNaWRkbGUgZWxlbWVudCBpbiByb3cgb3IgY29sdW1uIGFycmF5XHJcbiAgY29uc3QgZWRnZSA9IHJhY2tzaXplICogMjsgLy8gTGFzdCBlbGVtZW50IGluIHJvdyBvciBjb2x1bW4gYXJyYXlcclxuICBjb25zdCBpbml0aWFsdGlsZXMgPSByYWNrc2l6ZSA9PT0gNiA/IGluaXRpYWx0aWxlczYgOiByYWNrc2l6ZSA9PT0gNyA/IGluaXRpYWx0aWxlczcgOiByYWNrc2l6ZSA9PT0gNSA/IGluaXRpYWx0aWxlczUgOiBpbml0aWFsdGlsZXM0O1xyXG4gIGNvbnN0IGluaXRpYWxzcXVhcmVzID0gQXJyYXkoZWRnZSsxKS5maWxsKEFycmF5KGVkZ2UrMSkuZmlsbChzcXVhcmV1bnVzZWQpKTtcclxuICBjb25zdCBpbml0aWFsdXNlZGJ5ID0gQXJyYXkoZWRnZSsxKS5maWxsKEFycmF5KGVkZ2UrMSkuZmlsbCh1c2VkYnlub29uZSkpO1xyXG4gIGNvbnN0IFt0aWxlcywgc2V0VGlsZXNdID0gdXNlU3RhdGUoWy4uLmluaXRpYWx0aWxlc10pO1xyXG4gIGNvbnN0IFtwdGlsZXMsIHNldFB0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2d0aWxlcywgc2V0R3RpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3F1YXJlcywgc2V0U3F1YXJlc10gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHNxdWFyZXNdKTtcclxuICBjb25zdCBbdXNlZGJ5LCBzZXRVc2VkYnldID0gdXNlU3RhdGUoWy4uLmluaXRpYWx1c2VkYnldKTtcclxuICBjb25zdCBbc2VsZWN0aW9uLCBzZXRTZWxlY3Rpb25dID0gdXNlU3RhdGUoLTEpOyAvLyByZWxhdGl2ZSB0byByYWNrIG9mIHBsYXllciBtYWtpbmcgYSBwbGF5XHJcbiAgY29uc3QgW3dob3NldHVybiwgc2V0V2hvc2V0dXJuXSA9IHVzZVN0YXRlKFwiUFwiKTsgLy8gZ2FtZSBzdGFydHMgd2l0aCBwcmlzb25lcnMgcGxheVxyXG4gIGNvbnN0IFtjdXJyZW50Y29vcmRzLCBzZXRDdXJyZW50Y29vcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmVzY3Vlcywgc2V0UmVzY3Vlc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmNkLCBzZXRSY2RdID0gdXNlU3RhdGUoWy0xLC0xLG5vZGlyZWN0aW9uXSk7XHJcbiAgY29uc3QgW3Bhc3NlZCwgc2V0UGFzc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gdHJ1ZSB3aGVuIG9wcG9uZW50IGp1c3QgcGFzc2VkOyBpZiBib3RoIHBhc3MgdGhlIGdhbWUgZW5kc1xyXG4gIGNvbnN0IFttb3Zlcywgc2V0TW92ZXNdID0gdXNlU3RhdGUoW10pOyAvLyBtb3ZlIGhpc3RvcnksIGVhY2ggZWxlbWVudCBpcyB0aGUgYXJyYXkgaXMgYSBqc29uIG9iamVjdCBvZiBpbmZvIGFib3V0IHRoZSBtb3ZlXHJcbiAgY29uc3QgW3NuYXBzaG90LCBzZXRTbmFwc2hvdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBzcXVhcmVzOiBbLi4uaW5pdGlhbHNxdWFyZXNdLFxyXG4gICAgdXNlZGJ5OiBbLi4uaW5pdGlhbHVzZWRieV0sXHJcbiAgICBwdGlsZXM6IFtdLFxyXG4gICAgZ3RpbGVzOiBbXSxcclxuICB9KTtcclxuICBjb25zdCBbam9rZWluZGV4LCBzZXRKb2tlaW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2FsbG93UmV3aW5kLCBzZXRBbGxvd1Jld2luZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wcG5hbWUsIHNldE9wcG5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjaGF0bXNncywgc2V0Q2hhdG1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHJlc2N1ZVNvdW5kID0gbmV3IEF1ZGlvKFwiLi90YWRhLndhdlwiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlc2N1ZXMgPiAwKSB7XHJcbiAgICAgIHJlc2N1ZVNvdW5kLnBsYXkoKTtcclxuICAgIH1cclxuICB9LCBbcmVzY3Vlc10pOyAvLyBQbGF5IGEgc291bmQgd2hlbiBhIHJlc2N1ZSBpcyBtYWRlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBuZXdqaSA9IGpva2VpbmRleCArIDE7XHJcbiAgICBpZiAobmV3amkgPj0gam9rZXMubGVuZ3RoKSB7XHJcbiAgICAgIG5ld2ppID0gMDtcclxuICAgIH1cclxuICAgIHNldEpva2VpbmRleChuZXdqaSk7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgLy8gSWYgaXQgaXMgbm90IG15IHR1cm4gJiYgdGhlIGdhbWUgaGFzIG5vdCBlbmRlZFxyXG4gICAgICBpZiAocHJpc29uZXJzT3JHdWFyZHMgIT09IHdob3NldHVybiAmJiB3aG9zZXR1cm4gIT09IFwiWFwiKSB7XHJcbiAgICAgICAgLy8gSSBhbSB3YWl0aW5nIGZvciBvcHBvbmVudCBtb3ZlIHRvIGNvbWUgdGhyb3VnaCBidXQgc29tZXRpbWVzIGl0IGdldHMgbWlzc2VkIChubyBpZGVhIHdoeSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkludGVydmFsOiBwcmlzb25lcnNPckd1YXJkcz1cIiArIHByaXNvbmVyc09yR3VhcmRzICsgXCIgd2hvc2V0dXJuPVwiICsgd2hvc2V0dXJuICsgXCIgYXQgXCIgKyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgcmVxdWVzdEdhbWVEYXRhKCk7IC8vIFNlbmQgYSByZXF1ZXN0IGZvciBnYW1lIGRhdGEgaW4gY2FzZSBvcHBvbmVudCBtb3ZlZCBhbmQgd2UgbWlzc2VkIHRoZSB1cGRhdGVcclxuICAgICAgfVxyXG4gICAgfSwgbW92ZXdhaXR0aW1lKTsgLy8gdGhpcyBtYW55IG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGFib3ZlIGNvZGUgYmxvY2sgZXhlY3V0aW9uc1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFt3aG9zZXR1cm5dKTsgLy8gd2FudCB1cCB0byBkYXRlIHZhbHVlIG9mIHdob3NldHVybiB0byBkZWNpZGUgd2hldGhlciB0byBhc2sgZm9yIGFuIHVwZGF0ZVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4geyAvLyBUaGlzIGNvZGUgZXhlY3V0ZXMgZmlyc3QgdGltZSBHYW1lIGlzIHVzZWQgb25seVxyXG4gICAgcmVzY3VlU291bmQucGxheSgpO1xyXG4gICAgaWYgKCFpc3Jlam9pbiAmJiBwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIpIHsgLy8gUHJpc29uZXIgaXMgc3RhcnRpbmcgdGhlIGdhbWUgc28gcGljayByYWNrc1xyXG4gICAgICBsZXQgdGVtcFBUaWxlcyA9IFtdO1xyXG4gICAgICBsZXQgdGVtcEdUaWxlcyA9IFtdO1xyXG4gICAgICBsZXQgdGVtcFRpbGVzID0gWy4uLmluaXRpYWx0aWxlc107XHJcbiAgICAgIHdoaWxlICh0ZW1wUFRpbGVzLmxlbmd0aCA8IHJhY2tzaXplKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wUFRpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wR1RpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRlbXBQVGlsZXMuc29ydCgpO1xyXG4gICAgICB0ZW1wR1RpbGVzLnNvcnQoKTtcclxuICAgICAgc2V0R3RpbGVzKHRlbXBHVGlsZXMpO1xyXG4gICAgICBzZXRQdGlsZXModGVtcFBUaWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKHRlbXBUaWxlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVzOiBbLi4uaW5pdGlhbHNxdWFyZXNdLFxyXG4gICAgICAgIHVzZWRieTogWy4uLmluaXRpYWx1c2VkYnldLFxyXG4gICAgICAgIHB0aWxlczogWy4uLnRlbXBQVGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogWy4uLnRlbXBHVGlsZXNdICAgIFxyXG4gICAgICB9KTtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLFxyXG4gICAgICAgICAgZnVuYzogXCJoZWxsb1wiLFxyXG4gICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgLy8gUHJpc29uZXIgcmVqb2luIG9yIGd1YXJkIGpvaW4gb3IgZ3VhcmQgcmVqb2luXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJyZXF1ZXN0Z2FtZWRhdGFcIiwgLy8gcmVxdWVzdCBnYW1lIGRhdGFcclxuICAgICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkc1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgfVxyXG4gICAgICBjYXRjaCB7fVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzR2FtZU1lc3NhZ2UobXNnKTsgICAgICBcclxuICB9LFt3c21lc3NhZ2VdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVNb3Zlc1wiKTtcclxuICB9LFttb3Zlc10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNjcm9sbFRvQm90dG9tKFwiU2Nyb2xsYWJsZUNoYXRcIik7XHJcbiAgfSxbY2hhdG1zZ3NdKVxyXG5cclxuICBmdW5jdGlvbiBwdXRBdE1vdmVTdGFydCgpIHtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRBbGxvd1Jld2luZChmYWxzZSk7XHJcbiAgICBzZXRSY2QoLTEsLTEsbm9kaXJlY3Rpb24pO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwcm9jZXNzR2FtZU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09PSBcImFubm91bmNlXCIpIHtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLFxyXG4gICAgICAgICAgZnVuYzogXCJoZWxsb1wiLFxyXG4gICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmdhbWVpZCA9PT0gZ2FtZWlkICYmIG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwicGJcIikgeyAvLyBUaGlzIGluc3RhbmNlIG9mIGEgcHJpc29uIGJyZWFrIGdhbWVcclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLnNlbmRlciAhPSBwcmlzb25lcnNPckd1YXJkcyAmJiBvcHBuYW1lID09PSBcIlwiICYmIG1lc3NhZ2VEYXRhLm5pY2tuYW1lICYmIG1lc3NhZ2VEYXRhLm5pY2tuYW1lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyBPcHBvbmVudCBzZW50IGEgbWVzc2FnZSBpbmNsdWRpbmcgdGhlaXIgbmlja25hbWUgYW5kIEkgZG9uJ3QgaGF2ZSB0aGVpciBuaWNrbmFtZSB5ZXRcclxuICAgICAgICBzZXRPcHBuYW1lKG1lc3NhZ2VEYXRhLm5pY2tuYW1lKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJyZXF1ZXN0Z2FtZWRhdGFcIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHByaXNvbmVyc09yR3VhcmRzKSB7IC8vIE9wcG9uZW50IHJlcXVlc3RlZCBnYW1lIGluZm9cclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcInByb3ZpZGVnYW1lZGF0YVwiLCAvLyBwcm92aWRlIGdhbWUgZGF0YVxyXG4gICAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgICAgICB0aWxlczogdGlsZXMsXHJcbiAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsXHJcbiAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksXHJcbiAgICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgICBzbmFwc2hvdDogc25hcHNob3QsXHJcbiAgICAgICAgICAgIHBhc3NlZDogcGFzc2VkLFxyXG4gICAgICAgICAgICBtb3ZlczogbW92ZXMsXHJcbiAgICAgICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMsXHJcbiAgICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgICAgYWxsb3dSZXdpbmQ6IGFsbG93UmV3aW5kXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicHJvdmlkZWdhbWVkYXRhXCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9PSBwcmlzb25lcnNPckd1YXJkcyAmJiB3aG9zZXR1cm4gIT09IHByaXNvbmVyc09yR3VhcmRzICYmIHdob3NldHVybiAhPT0gXCJYXCIpIHsgXHJcbiAgICAgICAgLy8gb3Bwb25lbnQgcHJvdmlkZWQgZ2FtZSBkYXRhIGFuZCB0aGlzIHBsYXllciBpcyBzdGlsbCB3YWl0aW5nIHRvIHNlZSBvcHBvbmVudCBtb3ZlXHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgc2V0U25hcHNob3QobWVzc2FnZURhdGEuc25hcHNob3QpO1xyXG4gICAgICAgIHNldFBhc3NlZChtZXNzYWdlRGF0YS5wYXNzZWQpO1xyXG4gICAgICAgIHNldE1vdmVzKG1lc3NhZ2VEYXRhLm1vdmVzKTtcclxuICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICAgIHNldEFsbG93UmV3aW5kKG1lc3NhZ2VEYXRhLmFsbG93UmV3aW5kKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJlcHRcIiAmJiBwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIpIHsgLy8gUHJpc29uZXJzIHNlbnQgZW5kIHByaXNvbmVycyB0dXJuLCBHdWFyZHMgcGljayBpdCB1cFxyXG4gICAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0UGFzc2VkKG1lc3NhZ2VEYXRhLnBhc3NlZCk7XHJcbiAgICAgICAgc2V0TW92ZXMobWVzc2FnZURhdGEubW92ZXMpO1xyXG4gICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgICAgc3F1YXJlczogWy4uLm1lc3NhZ2VEYXRhLnNxdWFyZXNdLFxyXG4gICAgICAgICAgdXNlZGJ5OiBbLi4ubWVzc2FnZURhdGEudXNlZGJ5XSxcclxuICAgICAgICAgIHB0aWxlczogWy4uLm1lc3NhZ2VEYXRhLnB0aWxlc10sXHJcbiAgICAgICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImVndFwiICYmIHByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIikgeyAvLyBHdWFyZHMgc2VudCBlbmQgZ3VhcmRzIHR1cm4sIFByaXNvbmVycyBwaWNrIGl0IHVwXHJcbiAgICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRQYXNzZWQobWVzc2FnZURhdGEucGFzc2VkKTtcclxuICAgICAgICBzZXRNb3ZlcyhtZXNzYWdlRGF0YS5tb3Zlcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgICAgc3F1YXJlczogWy4uLm1lc3NhZ2VEYXRhLnNxdWFyZXNdLFxyXG4gICAgICAgICAgdXNlZGJ5OiBbLi4ubWVzc2FnZURhdGEudXNlZGJ5XSxcclxuICAgICAgICAgIHB0aWxlczogWy4uLnB0aWxlc10sXHJcbiAgICAgICAgICBndGlsZXM6IFsuLi5tZXNzYWdlRGF0YS5ndGlsZXNdLFxyXG4gICAgICAgIH0pOyAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJ1bmRvdHVyblwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcHJpc29uZXJzT3JHdWFyZHMpIHsgXHJcbiAgICAgICAgLy8gb3Bwb25lbnQgdW5kaWQgdGhlaXIgbGFzdCB0dXJuXHJcbiAgICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICAgIHNldFBhc3NlZChtZXNzYWdlRGF0YS5wYXNzZWQpO1xyXG4gICAgICAgIHNldE1vdmVzKG1lc3NhZ2VEYXRhLm1vdmVzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdChtZXNzYWdlRGF0YS5zbmFwc2hvdCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiYWxsb3d1bmRvXCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9PSBwcmlzb25lcnNPckd1YXJkcykge1xyXG4gICAgICAgIC8vIE9wcG9uZW50IGNsaWNrZWQgYnV0dG9uIHRvIGFsbG93IHVuZG8gdHVyblxyXG4gICAgICAgIHNldEFsbG93UmV3aW5kKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImNoYXRcIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT0gcHJpc29uZXJzT3JHdWFyZHMpIHsgLy8gT3Bwb25lbnQgY2hhdCBtZXNzYWdlXHJcbiAgICAgICAgbGV0IG5ld0NoYXRtc2dzID0gWy4uLmNoYXRtc2dzLCB7ZnJvbTogbWVzc2FnZURhdGEubmlja25hbWUsIG1zZzogbWVzc2FnZURhdGEuc2VuZG1zZ31dO1xyXG4gICAgICAgIHNldENoYXRtc2dzKG5ld0NoYXRtc2dzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBDYWxsaW5nIHNldFNlbGVjdGlvbiAoZnJvbSBoYW5kbGVLZXlEb3duKSB0aGVuIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgZG9lcyBub3QgbGV0IGl0IHJlY29nbml6ZSBzZWxlY3Rpb24gd2l0aCB0aGUgbmV3IHZhbHVlXHJcbiAgLy8gU28gSSBwYXNzIG5ld1NlbGVjdGlvbiB3aGVuIEkgd2FudCB0byBhbHNvIHNldCBpdCwgb3RoZXJ3aXNlIEkgcGFzcyAtMSB0byBpbnN0cnVjdCBpdCB0byB1c2UgY3VycmVudCB2YWx1ZSBvZiBzZWxlY3Rpb25cclxuICAvLyBBbHNvIHBhc3NpbmcgbmV3UmNkXHJcbiAgY29uc3QgaGFuZGxlQm9hcmRTcXVhcmVDbGljayA9IChyaSwgY2ksIG5ld1NlbGVjdGlvbiwgbmV3UmNkKSA9PiB7XHJcbiAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgIGxldCBuZXdVc2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgIGxldCBuZXdSb3cgPSBbLi4uc3F1YXJlc1tyaV1dO1xyXG4gICAgbGV0IHNxdWFyZXZhbHVlID0gc3F1YXJlc1tyaV1bY2ldO1xyXG4gICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcbiAgICBsZXQgY29vcmQgPSBTdHJpbmcocmkpICsgXCItXCIgKyBTdHJpbmcoY2kpO1xyXG4gICAgbGV0IGNjaSA9IGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCk7XHJcbiAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgIG5ld1JjZCA9IHJjZDtcclxuICAgIH1cclxuICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSAmJiBzcXVhcmV2YWx1ZSA9PT0gc3F1YXJldW51c2VkKSB7IC8vIHRpbGUgaXMgc2VsZWN0ZWQgZnJvbSByYWNrIGFuZCBjbGlja2VkIHNxdWFyZSBpcyBub3QgdXNlZCB5ZXRcclxuICAgICAgbmV3Um93W2NpXSA9XHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBcIlBcIiA/IG5ld1B0aWxlc1tuZXdTZWxlY3Rpb25dIDogbmV3R3RpbGVzW25ld1NlbGVjdGlvbl07XHJcbiAgICAgIG5ld1NxdWFyZXNbcmldID0gWy4uLm5ld1Jvd107XHJcbiAgICAgIHdob3NldHVybiA9PT0gXCJQXCJcclxuICAgICAgICA/IG5ld1B0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKVxyXG4gICAgICAgIDogbmV3R3RpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpO1xyXG4gICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLm5ld1VzZWRieVtyaV1dO1xyXG4gICAgICBuZXdVc2VkYnlSb3dbY2ldID0gd2hvc2V0dXJuO1xyXG4gICAgICBuZXdVc2VkYnlbcmldID0gWy4uLm5ld1VzZWRieVJvd107XHJcbiAgICAgIGlmICh3aG9zZXR1cm4gPT09IFwiUFwiICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3UHRpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHdob3NldHVybiA9PT0gXCJHXCIgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdHdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgfVxyXG4gICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhbLi4uY3VycmVudGNvb3JkcywgY29vcmRdKTtcclxuICAgICAgc2V0UmNkKG5ld1JjZCk7IC8vIGtleSBkb3duIGhhbmRsZXIgZmlndXJlZCBpdCBvdXRcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNjaSA+IC0xKSB7IC8vIGNsaWNrZWQgc3F1YXJlIGhhcyBhIHRpbGUgb24gaXQgZnJvbSB0aGUgY3VycmVudCBtb3ZlIGluIHByb2dyZXNzXHJcbiAgICAgIHdob3NldHVybiA9PT0gXCJQXCJcclxuICAgICAgICA/IG5ld1B0aWxlcy5wdXNoKHNxdWFyZXZhbHVlKVxyXG4gICAgICAgIDogbmV3R3RpbGVzLnB1c2goc3F1YXJldmFsdWUpO1xyXG4gICAgICBsZXQgbmV3Um93ID0gWy4uLm5ld1NxdWFyZXNbcmldXTtcclxuICAgICAgbmV3Um93W2NpXSA9IHNxdWFyZXVudXNlZDtcclxuICAgICAgbmV3U3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XTtcclxuICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi5uZXdVc2VkYnlbcmldXTtcclxuICAgICAgbmV3VXNlZGJ5Um93W2NpXSA9IHVzZWRieW5vb25lO1xyXG4gICAgICBuZXdVc2VkYnlbcmldID0gWy4uLm5ld1VzZWRieVJvd107XHJcbiAgICAgIHNldFNlbGVjdGlvbihcclxuICAgICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gbmV3UHRpbGVzLmxlbmd0aCAtIDEgOiBuZXdHdGlsZXMubGVuZ3RoIC0gMVxyXG4gICAgICApO1xyXG4gICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjY2ksIDEpO1xyXG5cclxuICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhuZXdDdXJyZW50Y29vcmRzKTtcclxuICAgICAgc2V0UmNkKC0xLC0xLG5vZGlyZWN0aW9uKTsgLy8gbWFrZSBwbGF5ZXIgY2xpY2sgYWdhaW4gdG8gc2V0IGRpcmVjdGlvblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBUaGV5IGRpZG4ndCBjbGljayBhIHNxdWFyZSB0byBwbGFjZSBhIHNlbGVjdGVkIHRpbGUgdGhlcmVcclxuICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHJlbW92ZSBhbiBleGlzdGluZyB0aWxlXHJcbiAgICBpZiAoc3F1YXJlc1tyaV1bY2ldID09PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgLy8gVGhlcmUgaXMgbm90aGluZyBvbiB0aGUgc3F1YXJlIHNvIHRoZXkgYXJlIHBpY2tpbmcgd2hlcmUgdG8gcGxhY2UgdGhlIG5leHQgdGlsZSB2aWEga2V5Ym9hcmRcclxuICAgICAgbGV0IG5ld0RpcmVjdGlvbiA9IHJjZFswXSAhPT0gcmkgfHwgcmNkWzFdICE9PSBjaSA/IFwiclwiIDogLy9jbGljayBuZXcgc3F1YXJlLCBzdGFydCB3aXRoIFwiclwiXHJcbiAgICAgICByY2RbMl0gPT09IFwiclwiID8gXCJkXCIgOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIFwiclwiLCBjaGFuZ2UgdG8gXCJkXCJcclxuICAgICAgIHJjZFsyXSA9PT0gXCJkXCIgPyBub2RpcmVjdGlvbiA6IC8vY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgXCJkXCIsIGNoYW5nZSB0byBub2RpcmVjdGlvblxyXG4gICAgICAgXCJyXCI7IC8vIGNsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIG5vZGlyZWN0aW9uLCBjaGFuZ2UgdG8gXCJyXCJcclxuICAgICAgbmV3UmNkID0gW3JpLGNpLG5ld0RpcmVjdGlvbl07XHJcbiAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmFja1RpbGVDbGljayA9ICh0aWxlaW5kZXgpID0+IHtcclxuICAgIC8vIElmIG5vIHRpbGUgaXMgc2VsZWN0ZWQgYWxyZWFkeSB0aGVuIHNldCB0aGUgc2VsZWN0aW9uXHJcbiAgICBpZiAoc2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICBzZXRTZWxlY3Rpb24odGlsZWluZGV4KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gSWYgdGhlIHNhbWUgdGlsZSBpcyBhbHJlYWR5IHNlbGVjdGVkIHRoZW4gdW5zZWxlY3RcclxuICAgIGlmIChzZWxlY3Rpb24gPT09IHRpbGVpbmRleCkge1xyXG4gICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBBIHRpbGUgd2FzIGFscmVhZHkgc2VsZWN0ZWQgYW5kIHRoZXkgY2xpY2tlZCBhbm90aGVyIHRpbGUgLSBtb3ZlIHRoZSB0aWxlXHJcbiAgICBsZXQgbmV3cmFjayA9IHByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IFsuLi5wdGlsZXNdIDogWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbW92ZWR0aWxlID0gbmV3cmFja1tzZWxlY3Rpb25dO1xyXG4gICAgZm9yICh2YXIgaSA9IHNlbGVjdGlvbjsgaSA+PSB0aWxlaW5kZXg7IGktLSkge1xyXG4gICAgICBuZXdyYWNrW2ldID0gbmV3cmFja1tpIC0gMV07XHJcbiAgICB9XHJcbiAgICBuZXdyYWNrW3RpbGVpbmRleF0gPSBtb3ZlZHRpbGU7XHJcbiAgICBwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyBzZXRQdGlsZXMobmV3cmFjaykgOiBzZXRHdGlsZXMobmV3cmFjayk7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZW5kUHJpc29uZXJzVHVybiA9ICgpID0+IHtcclxuICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgIGxldCBuZXdSZXNjdWVzID0gcmVzY3VlcztcclxuICAgIGxldCBlc2NhcGVoYXRjaGVzID0gW1xyXG4gICAgICBcIjAtMFwiLFxyXG4gICAgICBcIjAtXCIgKyBtaWRkbGUsXHJcbiAgICAgIFwiMC1cIiArIGVkZ2UsXHJcbiAgICAgIG1pZGRsZSsgXCItMFwiLFxyXG4gICAgICBtaWRkbGUgKyBcIi1cIiArIGVkZ2UsXHJcbiAgICAgIGVkZ2UgKyBcIi0wXCIsXHJcbiAgICAgIGVkZ2UgKyBcIi1cIiArIG1pZGRsZSxcclxuICAgICAgZWRnZSArIFwiLVwiICsgZWRnZVxyXG4gICAgXTsgLy8gY29vcmRzIG9mIGVzY2FwZSBoYXRjaGVzXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGVzY2FwZWhhdGNoZXMuaW5kZXhPZihjdXJyZW50Y29vcmRzW2ldKSA+IC0xKSB7XHJcbiAgICAgICAgbmV3UmVzY3VlcyA9IG5ld1Jlc2N1ZXMgKyAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3UHRpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdQdGlsZXMuc29ydCgpO1xyXG4gICAgbGV0IG5ld1dob3NldHVybiA9IG5ld1B0aWxlcy5sZW5ndGggPiAwID8gXCJHXCIgOiBcIlhcIjsgLy8gWCA9IGdhbWUgb3ZlclxyXG4gICAgaWYgKHVzZWRieVswXVswXSAgICAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVswXVttaWRkbGVdICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVswXVtlZGdlXSAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVttaWRkbGVdWzBdICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVttaWRkbGVdW2VkZ2VdICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtlZGdlXVswXSAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtlZGdlXVttaWRkbGVdICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtlZGdlXVtlZGdlXSAgICE9PSB1c2VkYnlub29uZSkge1xyXG4gICAgICBuZXdXaG9zZXR1cm4gPSBcIlhcIjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgfVxyXG4gICAgbGV0IHBsYXlpbmZvID0gZ2V0UGxheUluZm8oKTtcclxuICAgIGxldCBuZXdNb3ZlID0ge2J5OiBcIlBcIiwgdHlwZTogXCJQTEFZXCIsIHJld2luZEluZm86IHJld2luZEluZm8sIG1haW53b3JkOiBwbGF5aW5mby5tYWlud29yZCwgZXh0cmF3b3JkczogcGxheWluZm8uZXh0cmF3b3JkcywgcG9zOiBwbGF5aW5mby5wb3N9O1xyXG4gICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UGFzc2VkKGZhbHNlKTtcclxuICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgIHNldFJlc2N1ZXMobmV3UmVzY3Vlcyk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4udXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgdXNlZGJ5OiB1c2VkYnksIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lICh3aG9zZXR1cm49WClcclxuICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgcGFzc2VkOiBmYWxzZSwgLy8gZGlkIG5vdCBqdXN0IHBhc3NcclxuICAgICAgICBtb3ZlczogbmV3TW92ZXMsIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgIHJlc2N1ZXM6IG5ld1Jlc2N1ZXMgLy8gbWF5IGhhdmUgcmVzY3VlZCBhbm90aGVyIHByaXNvbmVyXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVuZEd1YXJkc1R1cm4gPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlzUGxheVZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHJld2luZEluZm8gPSBnZXRSZXdpbmRJbmZvKCk7XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld0d0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgbGV0IHNuYXBzcXVhcmVzID0gWy4uLnNxdWFyZXNdO1xyXG4gICAgbGV0IHNuYXB1c2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgIGxldCBzbmFwcHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgc25hcGd0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgbGV0IG5ld1dob3NldHVybiA9IG5ld0d0aWxlcy5sZW5ndGggPiAwID8gXCJQXCIgOiBcIlhcIjsgLy8gWCA9IGdhbWUgb3ZlclxyXG4gICAgaWYgKHVzZWRieVswXVswXSAgICAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVswXVttaWRkbGVdICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVswXVtlZGdlXSAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVttaWRkbGVdWzBdICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVttaWRkbGVdW2VkZ2VdICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtlZGdlXVswXSAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtlZGdlXVttaWRkbGVdICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtlZGdlXVtlZGdlXSAgICE9PSB1c2VkYnlub29uZSkge1xyXG4gICAgICBuZXdXaG9zZXR1cm4gPSBcIlhcIjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgfVxyXG4gICAgbGV0IHBsYXlpbmZvID0gZ2V0UGxheUluZm8oKTtcclxuICAgIGxldCBuZXdNb3ZlID0ge2J5OiBcIkdcIiwgdHlwZTogXCJQTEFZXCIsIHJld2luZEluZm86IHJld2luZEluZm8sIG1haW53b3JkOiBwbGF5aW5mby5tYWlud29yZCwgZXh0cmF3b3JkczogcGxheWluZm8uZXh0cmF3b3JkcywgcG9zOiBwbGF5aW5mby5wb3N9O1xyXG4gICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UGFzc2VkKGZhbHNlKTtcclxuICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogc25hcHNxdWFyZXMsXHJcbiAgICAgIHVzZWRieTogc25hcHVzZWRieSxcclxuICAgICAgcHRpbGVzOiBzbmFwcHRpbGVzLFxyXG4gICAgICBndGlsZXM6IHNuYXBndGlsZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIHVzZWRieTogdXNlZGJ5LCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBndWFyZHMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHBhc3NlZDogZmFsc2UsIC8vIGRpZCBub3QganVzdCBwYXNzXHJcbiAgICAgICAgbW92ZXM6IG5ld01vdmVzLCAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWUgKHdob3NldHVybj1YKVxyXG4gICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICBjb25zdCBzd2FwUHJpc29uZXJzVGlsZXMgPSAoKSA9PiB7XHJcbiAgICBpZiAodGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCBcIiArIHJhY2tzaXplICsgXCIgdGlsZXMgaW4gdGhlIGJhZyB0byBleGNoYW5nZVwiKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgIGxldCBuZXdQdGlsZXMgPSBbXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3UHRpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdQdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld1B0aWxlcy5zb3J0KCk7XHJcbiAgICBuZXdUaWxlcyA9IFsuLi5uZXdUaWxlcywgLi4uc25hcHNob3QucHRpbGVzXTtcclxuICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgIGxldCBuZXdNb3ZlID0ge2J5OiBcIlBcIiwgdHlwZTogXCJTV0FQXCIsIHJld2luZEluZm86IHJld2luZEluZm99O1xyXG4gICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiR1wiKTtcclxuICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UGFzc2VkKGZhbHNlKTtcclxuICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogWy4uLnNuYXBzaG90LnNxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi5zbmFwc2hvdC51c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFsuLi5uZXdQdGlsZXNdLFxyXG4gICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgd2hvc2V0dXJuOiBcIkdcIiwgLy8gc3dhcCBuZXZlciBlbmRzIHRoZSBnYW1lIHNvIGdvIHRvIG9wcG9uZW50XHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHBhc3NlZDogZmFsc2UsIC8vIGRpZCBub3QganVzdCBwYXNzXHJcbiAgICAgICAgbW92ZXM6IG5ld01vdmVzLCAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICByZXNjdWVzOiByZXNjdWVzIC8vIG5vIHJlc2N1ZXMgb24gYW4gZXhjaGFuZ2VcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gIH1cclxuICBcclxuICBjb25zdCBzd2FwR3VhcmRzVGlsZXMgPSAoKSA9PiB7XHJcbiAgICBpZiAodGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCBcIiArIHJhY2tzaXplICsgXCIgdGlsZXMgaW4gdGhlIGJhZyB0byBleGNoYW5nZVwiKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgIGxldCBuZXdHdGlsZXMgPSBbXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdHdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld0d0aWxlcy5zb3J0KCk7XHJcbiAgICBuZXdUaWxlcyA9IFsuLi5uZXdUaWxlcywgLi4uc25hcHNob3QuZ3RpbGVzXTtcclxuICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgIGxldCBuZXdNb3ZlID0ge2J5OiBcIkdcIiwgdHlwZTogXCJTV0FQXCIsIHJld2luZEluZm86IHJld2luZEluZm99O1xyXG4gICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiUFwiKTtcclxuICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UGFzc2VkKGZhbHNlKTtcclxuICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogWy4uLnNuYXBzaG90LnNxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi5zbmFwc2hvdC51c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICBndGlsZXM6IFsuLi5uZXdHdGlsZXNdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgd2hvc2V0dXJuOiBcIlBcIiwgLy8gc3dhcCBuZXZlciBlbmRzIHRoZSBnYW1lIHNvIGdvIHRvIG9wcG9uZW50XHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHBhc3NlZDogZmFsc2UsIC8vIGRpZCBub3QganVzdCBwYXNzXHJcbiAgICAgICAgbW92ZXM6IG5ld01vdmVzIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc1BsYXlWYWxpZCgpIHtcclxuICAgIGlmIChzcXVhcmVzW21pZGRsZV1bbWlkZGxlXSA9PT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIkZpcnN0IHBsYXkgbXVzdCBoaXQgY2VudGVyIHNxdWFyZVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IG51bXJvd3MgPSBlZGdlKzE7XHJcbiAgICBsZXQgbnVtY29scyA9IGVkZ2UrMTtcclxuICAgIGxldCBsb3dyb3cgPSBudW1yb3dzO1xyXG4gICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgIGxldCBsb3djb2wgPSBudW1jb2xzO1xyXG4gICAgbGV0IGhpZ2hjb2wgPSAtMTtcclxuICAgIGZvciAodmFyIHI9MDsgciA8IG51bXJvd3M7ICsrcikge1xyXG4gICAgICBmb3IgKHZhciBjPTA7IGMgPCBudW1jb2xzOyArK2MpIHtcclxuICAgICAgICBpZiAoc3F1YXJlc1tyXVtjXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICBpZiAoIShyID4gMCAmJiBzcXVhcmVzW3ItMV1bY10gIT09IHNxdWFyZXVudXNlZCkgJiZcclxuICAgICAgICAgICAhKGMgPiAwICYmIHNxdWFyZXNbcl1bYy0xXSAhPT0gc3F1YXJldW51c2VkKSAmJlxyXG4gICAgICAgICAgICEociA8IGVkZ2UgJiYgc3F1YXJlc1tyKzFdW2NdICE9PSBzcXVhcmV1bnVzZWQpICYmXHJcbiAgICAgICAgICAgIShjIDwgZWRnZSAmJiBzcXVhcmVzW3JdW2MrMV0gIT09IHNxdWFyZXVudXNlZClcclxuICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRWFjaCBwbGF5ZWQgdGlsZSBtdXN0IGJlIHBhcnQgb2YgYSB3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGlmIChzbmFwc2hvdC5zcXVhcmVzW3JdW2NdID09PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgICAgIC8vIFRoaXMgc3F1YXJlIHdhcyBwbGF5ZWQgb24gdGhpcyB0dXJuXHJcbiAgICAgICAgICAgICBpZiAociA8IGxvd3JvdykgeyBsb3dyb3cgPSByO31cclxuICAgICAgICAgICAgIGlmIChyID4gaGlnaHJvdykgeyBoaWdocm93ID0gcjt9XHJcbiAgICAgICAgICAgICBpZiAoYyA8IGxvd2NvbCkgeyBsb3djb2wgPSBjO31cclxuICAgICAgICAgICAgIGlmIChjID4gaGlnaGNvbCkgeyBoaWdoY29sID0gYzt9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGxvd3JvdyA9PT0gbnVtcm93cykge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJZb3UgZGlkbid0IHBsYXkgYW55IHRpbGVzXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAobG93cm93ICE9PSBoaWdocm93ICYmIGxvd2NvbCAhPT0gaGlnaGNvbCkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJUaWxlcyBwbGF5ZWQgbXVzdCBiZSBpbiBhIHN0cmFpZ2h0IGxpbmVcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBwbGF5dGhydSA9IGZhbHNlO1xyXG4gICAgbGV0IGhvb2ttYWRlID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciByID0gbG93cm93OyByIDw9IGhpZ2hyb3c7ICsrcikge1xyXG4gICAgICBmb3IgKHZhciBjID0gbG93Y29sOyBjIDw9IGhpZ2hjb2w7ICsrYykge1xyXG4gICAgICAgIGlmIChzcXVhcmVzW3JdW2NdID09PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgIHdpbmRvdy5hbGVydChcIlRoZXJlIGlzIGEgZ2FwIGluIHlvdXIgd29yZFwiKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNuYXBzaG90LnNxdWFyZXNbcl1bY10gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgICAgcGxheXRocnUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHIgPiAwICYmIHNxdWFyZXNbci0xXVtjXSAhPT0gc3F1YXJldW51c2VkKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgciA8IGVkZ2UgJiYgc3F1YXJlc1tyKzFdW2NdICE9PSBzcXVhcmV1bnVzZWQpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBjID4gMCAmJiBzcXVhcmVzW3JdW2MtMV0gIT09IHNxdWFyZXVudXNlZCkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGMgPCBlZGdlICYmIHNxdWFyZXNbcl1bYysxXSAhPT0gc3F1YXJldW51c2VkKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDaGVjayBwbGF5IHRvIG9yIGZyb20gYSB0aWxlIChwbGF5IHRocm91Z2ggYnV0IG5vdCBlaXRoZXIgc2lkZSlcclxuICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgbG93Y29sID4gMCAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvd11bbG93Y29sLTFdICE9PSBzcXVhcmV1bnVzZWQpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGhpZ2hjb2wgPCBlZGdlICYmIHNuYXBzaG90LnNxdWFyZXNbbG93cm93XVtoaWdoY29sKzFdICE9PSBzcXVhcmV1bnVzZWQpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGxvd3JvdyA+IDAgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ctMV1bbG93Y29sXSAhPT0gc3F1YXJldW51c2VkKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBoaWdocm93IDwgZWRnZSAmJiBzbmFwc2hvdC5zcXVhcmVzW2hpZ2hyb3crMV1bbG93Y29sXSAhPT0gc3F1YXJldW51c2VkKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgaWYgKCFwbGF5dGhydSAmJiAhaG9va21hZGUgJiYgc25hcHNob3Quc3F1YXJlc1ttaWRkbGVdW21pZGRsZV0gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJXb3JkcyBtdXN0IGJlIGNvbm5lY3RlZFwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRQbGF5SW5mbygpIHtcclxuICAgIGxldCBwbGF5aW5mbyA9IHt9O1xyXG4gICAgbGV0IG1haW53b3JkID0gXCJcIjtcclxuICAgIGxldCBleHRyYXdvcmRzID0gW107XHJcbiAgICBsZXQgd29yZHN0YXJ0Y29vcmQgPSBcIlwiO1xyXG4gICAgbGV0IG51bXJvd3MgPSBlZGdlKzE7XHJcbiAgICBsZXQgbnVtY29scyA9IGVkZ2UrMTtcclxuICAgIGxldCBsb3dyb3cgPSBudW1yb3dzO1xyXG4gICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgIGxldCBsb3djb2wgPSBudW1jb2xzO1xyXG4gICAgbGV0IGhpZ2hjb2wgPSAtMTtcclxuICAgIGxldCBudW1jb29yZHMgPSBjdXJyZW50Y29vcmRzLmxlbmd0aDtcclxuICAgIGZvciAodmFyIGNvb3JkPTA7IGNvb3JkIDwgbnVtY29vcmRzOyArK2Nvb3JkKSB7XHJcbiAgICAgIGxldCByb3cgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMF0pO1xyXG4gICAgICBsZXQgY29sID0gcGFyc2VJbnQoY3VycmVudGNvb3Jkc1tjb29yZF0uc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgaWYgKHJvdyA8IGxvd3Jvdykge1xyXG4gICAgICAgIGxvd3JvdyA9IHJvdztcclxuICAgICAgfVxyXG4gICAgICBpZiAocm93ID4gaGlnaHJvdykge1xyXG4gICAgICAgIGhpZ2hyb3cgPSByb3c7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbCA8IGxvd2NvbCkge1xyXG4gICAgICAgIGxvd2NvbCA9IGNvbDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sID4gaGlnaGNvbCkge1xyXG4gICAgICAgIGhpZ2hjb2wgPSBjb2w7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChsb3dyb3cgPCBoaWdocm93IHx8IG51bWNvb3JkcyA9PT0gMSkgeyAvLyB0aWxlcyBwbGFjZWQgb24gZGlmZmVyZW5jZSByb3dzIHNvIHBsYXkgaXMgdmVydGljYWwsIG9yIHNpbmdsZSB0aWxlIHBsYXllZFxyXG4gICAgICBsZXQgY29sID0gbG93Y29sOyAvLyBsb3djb2wgYW5kIGhpZ2hjb2wgd2lsbCBoYXZlIHRoZSBzYW1lIHZhbHVlXHJcbiAgICAgIC8vIGZpbmQgdGhlIGxvd2VzdCByb3cgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBsb3dlciB0aGFuIHRoYXQgb2YgdGhlIGZpcnN0IHBsYXllZCB0aWxlXHJcbiAgICAgIGxldCBsb3dlc3Ryb3cgPSBsb3dyb3c7XHJcbiAgICAgIHdoaWxlIChsb3dlc3Ryb3cgPiAwICYmIHNxdWFyZXNbbG93ZXN0cm93LTFdW2NvbF0gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgIGxvd2VzdHJvdyA9IGxvd2VzdHJvdyAtIDE7XHJcbiAgICAgIH1cclxuICAgICAgLy8gZmluZCB0aGUgaGlnaGVzdCByb3cgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBoaWdoZXIgdGhhbiB0aGF0IG9mIHRoZSBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgIGxldCBoaWdoZXN0cm93ID0gaGlnaHJvdztcclxuICAgICAgd2hpbGUgKGhpZ2hlc3Ryb3cgPCBlZGdlICYmIHNxdWFyZXNbaGlnaGVzdHJvdysxXVtjb2xdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICBoaWdoZXN0cm93ID0gaGlnaGVzdHJvdyArIDE7XHJcbiAgICAgIH1cclxuICAgICAgd29yZHN0YXJ0Y29vcmQgPSBib2FyZENvbHVtbkhlYWRlcnNbY29sXSArIGJvYXJkUm93SGVhZGVyc1tsb3dlc3Ryb3ddOyAvLyB2ZXJ0aWNhbCBwbGF5IGNvb3JkcyBzdGFydCB3aXRoIGNvbCBoZWFkZXJcclxuICAgICAgZm9yICh2YXIgcm93ID0gbG93ZXN0cm93OyByb3cgPD0gaGlnaGVzdHJvdzsgKytyb3cpIHtcclxuICAgICAgICBtYWlud29yZCA9IG1haW53b3JkICsgc3F1YXJlc1tyb3ddW2NvbF07XHJcbiAgICAgICAgbGV0IGNvb3JkID0gcm93ICsgXCItXCIgKyBjb2w7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCkgPiAtMSkgeyAvLyBUaGlzIHRpbGUgd2FzIHBsYXllZCwgY2hlY2sgZm9yIGhvb2tzXHJcbiAgICAgICAgICBsZXQgbG93ZXN0Y29sID0gY29sO1xyXG4gICAgICAgICAgd2hpbGUgKGxvd2VzdGNvbCA+IDAgJiYgc3F1YXJlc1tyb3ddW2xvd2VzdGNvbC0xXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICAgIGxvd2VzdGNvbCA9IGxvd2VzdGNvbCAtIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgaGlnaGVzdGNvbCA9IGNvbDtcclxuICAgICAgICAgIHdoaWxlIChoaWdoZXN0Y29sIDwgZWRnZSAmJiBzcXVhcmVzW3Jvd11baGlnaGVzdGNvbCsxXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICAgIGhpZ2hlc3Rjb2wgPSBoaWdoZXN0Y29sICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChsb3dlc3Rjb2wgPCBoaWdoZXN0Y29sKSB7IC8vIGhvb2sgd2FzIG1hZGVcclxuICAgICAgICAgICAgbGV0IGV4dHJhd29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSBsb3dlc3Rjb2w7IGMgPD0gaGlnaGVzdGNvbDsgKytjKSB7XHJcbiAgICAgICAgICAgICAgZXh0cmF3b3JkID0gZXh0cmF3b3JkICsgc3F1YXJlc1tyb3ddW2NdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV4dHJhd29yZHMgPSBbLi4uZXh0cmF3b3JkcywgZXh0cmF3b3JkXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChtYWlud29yZC5sZW5ndGggPCAyKSB7IC8vIEhvcml6b250YWwgcGxheSBvciBzaW5nbGUgdGlsZSBkcm9wIHRoYXQgY2Fubm90IGJlIGEgdmVydGljYWwgcGxheVxyXG4gICAgICBsZXQgcm93ID0gbG93cm93OyAvLyBsb3dyb3cgYW5kIGhpZ2hyb3cgd2lsbCBoYXZlIHRoZSBzYW1lIHZhbHVlXHJcbiAgICAgIC8vIGZpbmQgdGhlIGxvd2VzdCBjb2wgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBsb3dlciB0aGFuIHRoYXQgb2YgdGhlIGZpcnN0IHBsYXllZCB0aWxlXHJcbiAgICAgIGxldCBsb3dlc3Rjb2wgPSBsb3djb2w7XHJcbiAgICAgIHdoaWxlIChsb3dlc3Rjb2wgPiAwICYmIHNxdWFyZXNbcm93XVtsb3dlc3Rjb2wtMV0gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgIGxvd2VzdGNvbCA9IGxvd2VzdGNvbCAtIDE7XHJcbiAgICAgIH1cclxuICAgICAgLy8gZmluZCB0aGUgaGlnaGVzdCBjb2wgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBoaWdoZXIgdGhhbiB0aGF0IG9mIHRoZSBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgIGxldCBoaWdoZXN0Y29sID0gaGlnaGNvbDtcclxuICAgICAgd2hpbGUgKGhpZ2hlc3Rjb2wgPCBlZGdlICYmIHNxdWFyZXNbcm93XVtoaWdoZXN0Y29sKzFdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICBoaWdoZXN0Y29sID0gaGlnaGVzdGNvbCArIDE7XHJcbiAgICAgIH1cclxuICAgICAgd29yZHN0YXJ0Y29vcmQgPSBib2FyZFJvd0hlYWRlcnNbcm93XSArIGJvYXJkQ29sdW1uSGVhZGVyc1tsb3dlc3Rjb2xdOyAvLyBob3Jpem9udGFsIHBsYXkgY29vcmRzIHN0YXJ0IHdpdGggcm93IGhlYWRlclxyXG4gICAgICBtYWlud29yZCA9IFwiXCI7IC8vIEluIGNhc2Ugd2UgZ290IGEgMSBsZXR0ZXIgbWFpbndvcmQgaW4gdGhlIHByZXZpb3VzIGJsb2NrXHJcbiAgICAgIGV4dHJhd29yZHMgPSBbXTsgLy8gRGl0dG9cclxuICAgICAgZm9yICh2YXIgY29sID0gbG93ZXN0Y29sOyBjb2wgPD0gaGlnaGVzdGNvbDsgKytjb2wpIHtcclxuICAgICAgICBtYWlud29yZCA9IG1haW53b3JkICsgc3F1YXJlc1tyb3ddW2NvbF07XHJcbiAgICAgICAgbGV0IGNvb3JkID0gcm93ICsgXCItXCIgKyBjb2w7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCkgPiAtMSkgeyAvLyBUaGlzIHRpbGUgd2FzIHBsYXllZCwgY2hlY2sgZm9yIGhvb2tzXHJcbiAgICAgICAgICBsZXQgbG93ZXN0cm93ID0gcm93O1xyXG4gICAgICAgICAgd2hpbGUgKGxvd2VzdHJvdyA+IDAgJiYgc3F1YXJlc1tsb3dlc3Ryb3ctMV1bY29sXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICAgIGxvd2VzdHJvdyA9IGxvd2VzdHJvdyAtIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgaGlnaGVzdHJvdyA9IHJvdztcclxuICAgICAgICAgIHdoaWxlIChoaWdoZXN0cm93IDwgZWRnZSAmJiBzcXVhcmVzW2hpZ2hlc3Ryb3crMV1bY29sXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICAgIGhpZ2hlc3Ryb3cgPSBoaWdoZXN0cm93ICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChsb3dlc3Ryb3cgPCBoaWdoZXN0cm93KSB7IC8vIGhvb2sgd2FzIG1hZGVcclxuICAgICAgICAgICAgbGV0IGV4dHJhd29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSBsb3dlc3Ryb3c7IHIgPD0gaGlnaGVzdHJvdzsgKytyKSB7XHJcbiAgICAgICAgICAgICAgZXh0cmF3b3JkID0gZXh0cmF3b3JkICsgc3F1YXJlc1tyXVtjb2xdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV4dHJhd29yZHMgPSBbLi4uZXh0cmF3b3JkcywgZXh0cmF3b3JkXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHBsYXlpbmZvID0ge21haW53b3JkOiBtYWlud29yZCwgZXh0cmF3b3JkczogZXh0cmF3b3JkcywgcG9zOiB3b3Jkc3RhcnRjb29yZH07XHJcbiAgICByZXR1cm4gcGxheWluZm87XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRSZXdpbmRJbmZvKCkgeyAvLyBNdXN0IGJlIGNhbGxlZCBiZWZvcmUgeW91IHN0YXJ0IHNldHRpbmcgbmV3IHZhbHVlcyBmb3Igc3R1ZmZcclxuICAgIC8qIFJld2luZCBpbmZvIGlzIGV2ZXJ5dGhpbmcgeW91IG5lZWQgdG8gcmV2ZXJzZSB0aGUgbW92ZSB0aGF0IHdlIGRvIG5vdCBhbHJlYWR5IGhhdmUgaW4gdGhlIG5ldyBtb3ZlIHZhcmlhYmxlOlxyXG4gICAgICAgIHNxdWFyZXM6IHNheXMgd2hhdCB0aWxlIGlzIG9uIHdoYXQgc3F1YXJlXHJcbiAgICAgICAgdXNlZGJ5OiBzYXlzIHdobyBwbGF5ZWQgd2hhdCB0aWxlIG9uIHdoYXQgc3F1YXJlIChhZmZlY3RzIHN0eWxpbmcpXHJcbiAgICAgICAgcmFjazogcGxheWVycyByYWNrIGJlZm9yZSBtb3ZlIHdhcyBtYWRlIFxyXG4gICAgICAgIHRpbGVzOiB0aWxlIHBvb2wgYmVmb3JlIHBpY2tpbmcgbmV3IHRpbGVzXHJcbiAgICAgICAgcmVzY3VlczogcmVzY3VlIGNvdW50XHJcbiAgICAgICAgcGFzc2VkOiB3aGV0aGVyIHByZXZpb3VzIHBsYXkgd2FzIGEgcGFzc1xyXG4gICAgKi9cclxuICAgIGxldCByZXdpbmRJbmZvID0ge1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc25hcHNob3Quc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnNuYXBzaG90LnVzZWRieV0sXHJcbiAgICAgIHJhY2s6IHdob3NldHVybiA9PT0gXCJHXCIgPyBbLi4uc25hcHNob3QuZ3RpbGVzXTogWy4uLnNuYXBzaG90LnB0aWxlc10sXHJcbiAgICAgIHRpbGVzOiBbLi4udGlsZXNdLFxyXG4gICAgICByZXNjdWVzOiByZXNjdWVzLFxyXG4gICAgICBwYXNzZWQ6IHBhc3NlZFxyXG4gICAgfTtcclxuICAgIHJldHVybiByZXdpbmRJbmZvO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhbGxvd1VuZG9MYXN0VHVybigpIHtcclxuICAgIGlmICghYWxsb3dSZXdpbmQpIHtcclxuICAgICAgc2V0QWxsb3dSZXdpbmQodHJ1ZSk7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJhbGxvd3VuZG9cIiwgLy8gYWxsb3cgdW5kbyBsYXN0IHR1cm5cclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMgLy8gd2hvIGlzIGFsbG93aW5nIGl0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGVyZm9ybVJld2luZCgpIHtcclxuICAgIC8qIFJld2luZCB0aGUgbGFzdCBtb3ZlIGFuZCB0YWtlIGl0IG9mZiB0aGUgZW5kIG9mIHRoZSBtb3ZlIGxpc3QgKi9cclxuICAgIGxldCBudW1Nb3ZlcyA9IG1vdmVzLmxlbmd0aDtcclxuICAgIGxldCBsYXN0TW92ZSA9IG1vdmVzW21vdmVzLmxlbmd0aC0xXTtcclxuICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLmxhc3RNb3ZlLnJld2luZEluZm8uc3F1YXJlc107XHJcbiAgICBsZXQgbmV3VXNlZGJ5ID0gWy4uLmxhc3RNb3ZlLnJld2luZEluZm8udXNlZGJ5XTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi5sYXN0TW92ZS5yZXdpbmRJbmZvLnRpbGVzXTtcclxuICAgIGxldCBuZXdQdGlsZXMgPSBsYXN0TW92ZS5ieSA9PT0gXCJQXCIgPyBbLi4ubGFzdE1vdmUucmV3aW5kSW5mby5yYWNrXSA6IFsuLi5wdGlsZXNdO1xyXG4gICAgbGV0IG5ld0d0aWxlcyA9IGxhc3RNb3ZlLmJ5ID09PSBcIkdcIiA/IFsuLi5sYXN0TW92ZS5yZXdpbmRJbmZvLnJhY2tdIDogWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbmV3UmVzY3VlcyA9IGxhc3RNb3ZlLnJld2luZEluZm8ucmVzY3VlcztcclxuICAgIGxldCBuZXdXaG9zZXR1cm4gPSBsYXN0TW92ZS5ieTsgLy8gQmFjayB0byB0aGVpciB0dXJuXHJcbiAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXNdO1xyXG4gICAgbmV3TW92ZXMuc3BsaWNlKG51bU1vdmVzLTEsMSk7XHJcbiAgICBsZXQgbmV3U25hcHNob3QgPSB7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5uZXdTcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4ubmV3VXNlZGJ5XSxcclxuICAgICAgZ3RpbGVzOiBbLi4ubmV3R3RpbGVzXSxcclxuICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXVxyXG4gICAgfTtcclxuICAgIGxldCBuZXdQYXNzZWQgPSBsYXN0TW92ZS5wYXNzZWQ7XHJcbiAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgc2V0UmVzY3VlcyhuZXdSZXNjdWVzKTtcclxuICAgIHNldFBhc3NlZChuZXdQYXNzZWQpO1xyXG4gICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgc2V0U25hcHNob3QobmV3U25hcHNob3QpO1xyXG4gICAgLy8gSnVzdCBzZW5kIGV2ZXJ5dGhpbmcgZXZlbiB0aG91Z2ggc29tZSBjb3VsZCBiZSBoYXJkIGNvZGVkIGluIHByb2Nlc3NNZXNzYWdlIGJ5IG9wcG9uZW50XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJ1bmRvdHVyblwiLCAvLyB1bmRvIGxhc3QgdHVyblxyXG4gICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gdGlsZSBwb29sXHJcbiAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIGd1YXJkcyByYWNrXHJcbiAgICAgICAgc3F1YXJlczogbmV3U3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogbmV3VXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIHN3YXAgbmV2ZXIgZW5kcyB0aGUgZ2FtZSBzbyBnbyB0byBvcHBvbmVudFxyXG4gICAgICAgIHJlc2N1ZXM6IG5ld1Jlc2N1ZXMsIC8vIHJlc2N1ZSBjb3VudFxyXG4gICAgICAgIHBhc3NlZDogbmV3UGFzc2VkLCAvLyB3aGV0aGVyIHByZXZpb3VzIHBsYXkgd2FzIGEgcGFzc1xyXG4gICAgICAgIG1vdmVzOiBuZXdNb3ZlcywgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgc25hcHNob3Q6IG5ld1NuYXBzaG90XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgc2V0UHRpbGVzKFsuLi5zbmFwc2hvdC5wdGlsZXNdKTtcclxuICAgIHNldEd0aWxlcyhbLi4uc25hcHNob3QuZ3RpbGVzXSk7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRSY2QoWy0xLC0xLG5vZGlyZWN0aW9uXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJpc29uZXJQYXNzID0gKCkgPT4ge1xyXG4gICAgbGV0IHJld2luZEluZm8gPSBnZXRSZXdpbmRJbmZvKCk7XHJcbiAgICBsZXQgbmV3V2hvc2V0dXJuID0gcGFzc2VkID8gXCJYXCIgOiBcIkdcIjsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWUgYnkgdXNpbmcgXCJYXCJcclxuICAgIGxldCBuZXdNb3ZlID0ge2J5OiBcIlBcIiwgdHlwZTogXCJQQVNTXCIsIHJld2luZEluZm86IHJld2luZEluZm99O1xyXG4gICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgIHJlY2FsbFRpbGVzKCk7IC8vIEluIGNhc2UgdGhleSBwdXQgc29tZSB0aWxlcyBvbiB0aGUgYm9hcmQgYmVmb3JlIGNsaWNraW5nIFBhc3NcclxuICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgIHNldFBhc3NlZCh0cnVlKTtcclxuICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIHB0aWxlczogc25hcHNob3QucHRpbGVzLCAvLyBwcmlzb25lcnMgcmFjayBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHRpbGVzOiB0aWxlcywgLy8gdGlsZSBwb29sIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIHBhc3NlZDogdHJ1ZSxcclxuICAgICAgICBtb3ZlczogbmV3TW92ZXMsIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMgLy8gbm8gcmVzY3VlcyBvbiBhIHBhc3NcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBndWFyZHNQYXNzID0gKCkgPT4ge1xyXG4gICAgbGV0IHJld2luZEluZm8gPSBnZXRSZXdpbmRJbmZvKCk7XHJcbiAgICBsZXQgbmV3V2hvc2V0dXJuID0gcGFzc2VkID8gXCJYXCIgOiBcIlBcIjsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWUgYnkgdXNpbmcgXCJYXCJcclxuICAgIGxldCBuZXdNb3ZlID0ge2J5OiBcIkdcIiwgdHlwZTogXCJQQVNTXCIsIHJld2luZEluZm86IHJld2luZEluZm99O1xyXG4gICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgIHJlY2FsbFRpbGVzKCk7IC8vIEluIGNhc2UgdGhleSBwdXQgc29tZSB0aWxlcyBvbiB0aGUgYm9hcmQgYmVmb3JlIGNsaWNraW5nIFBhc3NcclxuICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgIHNldFBhc3NlZCh0cnVlKTtcclxuICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIGd0aWxlczogc25hcHNob3QuZ3RpbGVzLCAvLyBndWFyZHMgcmFjayBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHRpbGVzOiB0aWxlcywgLy8gdGlsZSBwb29sIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIHBhc3NlZDogdHJ1ZSxcclxuICAgICAgICBtb3ZlczogbmV3TW92ZXMgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVxdWVzdEdhbWVEYXRhID0gKCkgPT4ge1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sIC8vIGZvciBsb2JieSB0byBwaWNrIHVwIHRoaXMgbWVzc2FnZVxyXG4gICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICBmdW5jOiBcInJlcXVlc3RnYW1lZGF0YVwiIC8vIHJlcXVlc3QgZ2FtZSBkYXRhXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHByaXNvbmVyc09yR3VhcmRzICE9PSB3aG9zZXR1cm4pIHtyZXR1cm47fVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgIHdob3NldHVybiA9PT0gXCJQXCIgPyBlbmRQcmlzb25lcnNUdXJuKCkgOiBlbmRHdWFyZHNUdXJuKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgcmVjYWxsVGlsZXMoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGxldHRlcnRlc3QgPSAvXltBLVphLXpcXD9dJC87IC8vIHNpbmdsZSBsZXR0ZXIgb3IgcXVlc3Rpb24gbWFyayBrZXkgcHJlc3NlZFxyXG4gICAgaWYgKGV2ZW50LmtleS5tYXRjaChsZXR0ZXJ0ZXN0KSkge1xyXG4gICAgICBsZXQgbGV0dGVyID0gZXZlbnQua2V5LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIGxldCByYWNrID0gd2hvc2V0dXJuID09PSBcIlBcIiA/IHB0aWxlcyA6IGd0aWxlcztcclxuICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHJhY2suaW5kZXhPZihsZXR0ZXIpO1xyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IHJhY2suaW5kZXhPZihcIj9cIik7IC8vIFVzZSB0aGUgYmxhbmsgaWYgdGhleSBoYXZlIG9uZVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSkgeyAvLyBQcmVzc2VkIGxldHRlciBpcyBvbiB0aGUgcmFja1xyXG4gICAgICAgIGxldCByb3cgPSByY2RbMF07XHJcbiAgICAgICAgbGV0IGNvbCA9IHJjZFsxXTtcclxuICAgICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICAgIGlmIChyb3cgPi0xICYmIGNvbCA+IC0xICYmIGRpciAhPT0gbm9kaXJlY3Rpb24pIHsgLy8gcm93LCBjb2wsIGRpciBhcmUgc2V0IHRvIGFjY2VwdCBrZXlzdHJva2VcclxuICAgICAgICAgIC8vIE5lZWQgdG8gZmlndXJlIG91dCBuZXh0IHNxYXVyZSB0byBhdXRvLXBsYWNlIGEgdGlsZVxyXG4gICAgICAgICAgbGV0IG5ld1JjZCA9IHJjZDtcclxuICAgICAgICAgIGlmIChkaXIgPT09IFwiclwiKSB7IC8vIHBsYXlpbmcgcmlnaHR3YXJkc1xyXG4gICAgICAgICAgICBsZXQgbmV3YyA9IC0xO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gY29sICsgMTsgYyA8IGVkZ2UgKyAxICYmIG5ld2MgPT09IC0xOyBjKyspIHtcclxuICAgICAgICAgICAgICBpZiAoc3F1YXJlc1tyb3ddW2NdID09PSBzcXVhcmV1bnVzZWQpIHtuZXdjID0gYzt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5ld2MgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gWy0xLC0xLG5vZGlyZWN0aW9uXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbcm93LCBuZXdjLCBcInJcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyb3csY29sLG5ld1NlbGVjdGlvbixuZXdSY2QpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3Rpb24oLTEpOyAvLyB3aGVuIHRoZXkgYXJlIHR5cGluZyB0aGV5IGFyZSBub3Qgc2VsZWN0aW5nIHJhY2sgdGlsZXMgYnkgY2xpY2tpbmcgdGhlbSBvbiB0aGUgcmFja1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZGlyID09PSBcImRcIikgeyAvLyBwbGF5aW5nIGRvd253YXJkc1xyXG4gICAgICAgICAgICBsZXQgbmV3ciA9IC0xO1xyXG4gICAgICAgICAgICBsZXQgbnVtcm93cyA9IChyYWNrc2l6ZSoyKSsxO1xyXG4gICAgICAgICAgICBmb3IgKHZhciByID0gcm93ICsgMTsgciA8IG51bXJvd3MgJiYgbmV3ciA9PT0gLTE7IHIrKykge1xyXG4gICAgICAgICAgICAgIGlmIChzcXVhcmVzW3JdW2NvbF0gPT09IHNxdWFyZXVudXNlZCkge25ld3IgPSByO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmV3ciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsbm9kaXJlY3Rpb25dO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG5ld1JjZCA9IFtuZXdyLCBjb2wsIFwiZFwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGlvbigtMSk7IC8vIHdoZW4gdGhleSBhcmUgdHlwaW5nIHRoZXkgYXJlIG5vdCBzZWxlY3RpbmcgcmFjayB0aWxlcyBieSBjbGlja2luZyB0aGVtIG9uIHRoZSByYWNrXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJCYWNrc3BhY2VcIiAmJiBjdXJyZW50Y29vcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8gU2FtZSBhcyBjbGlja2luZyBvbiBhIHBsYXllZC10aGlzLW1vdmUgdGlsZSBpbiB0ZXJtcyBvZiByZXR1cm5pbmcgdGhlIHRpbGUgdG8gdGhlIHJhY2tcclxuICAgICAgLy8gSG93ZXZlciB3ZSBhbHNvIHdhbnQgdG8gc2V0IHVwIHJjZCBzbyB0aGV5IGNhbiBwcmVzcyB0aGUga2V5IHRoZXkgbWVhbnQgYW5kIGNvbnRpbnVlXHJcbiAgICAgIGxldCBjb29yZCA9IGN1cnJlbnRjb29yZHNbY3VycmVudGNvb3Jkcy5sZW5ndGggLSAxXTsgLy8gdGlsZSB0byByZXR1cm4gdG8gcmFja1xyXG4gICAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBuZXdVc2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICAgIGxldCBuZXdSY2QgPSBbLTEsLTEsbm9kaXJlY3Rpb25dO1xyXG4gICAgICBsZXQgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjdXJyZW50Y29vcmRzLmxlbmd0aC0xLDEpO1xyXG4gICAgICBsZXQgcm93ID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzBdKTtcclxuICAgICAgbGV0IGNvbCA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KFwiLVwiKVsxXSk7XHJcbiAgICAgIGxldCByZXR1cm5lZFRpbGUgPSBzcXVhcmVzW3Jvd11bY29sXTtcclxuICAgICAgaWYgKHdob3NldHVybiA9PT0gXCJQXCIpIHtcclxuICAgICAgICBuZXdQdGlsZXMucHVzaChyZXR1cm5lZFRpbGUpO1xyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1B0aWxlcy5sZW5ndGgtMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdHdGlsZXMucHVzaChyZXR1cm5lZFRpbGUpO1xyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld0d0aWxlcy5sZW5ndGgtMTtcclxuICAgICAgfVxyXG4gICAgICBuZXdVc2VkYnlbcm93XVtjb2xdID0gdXNlZGJ5bm9vbmU7XHJcbiAgICAgIG5ld1NxdWFyZXNbcm93XVtjb2xdID0gc3F1YXJldW51c2VkO1xyXG4gICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICBpZiAoZGlyICE9PSBub2RpcmVjdGlvbikge1xyXG4gICAgICAgIC8vIGRpcmVjdGlvbiB3YXMgc2V0IHNvIGtlZXAgaXRcclxuICAgICAgICBuZXdSY2QgPSBbcm93LGNvbCxkaXJdO1xyXG4gICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gLTE7IC8vIGlmIHRoZXkgYmFja3NwYWNlIGFsbCB0aGUgbGV0dGVycyBvZmYgbGVhdmUgcmFjayB0aWxlIHVuc2VsZWN0ZWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhuZXdDdXJyZW50Y29vcmRzKTtcclxuICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgc2V0UmNkKG5ld1JjZCk7XHJcbiAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcmlzb25icmVha1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktY29udGFpbmVyIHczLXRlYWwgdG9wQmFySGVpZ2h0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZVwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15SGVhZGluZ0ZvbnRcIj5Qcmlzb24gQnJlYWs8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS10b3BsZWZ0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICBHYW1lIGlkOiB7Z2FtZWlkfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1ib3R0b21sZWZ0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgUHJpc29uZXJzOiB7cHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gbmlja25hbWUgOiBvcHBuYW1lfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS10b3ByaWdodCB3My1ibGFjayB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT48L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWJvdHRvbXJpZ2h0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgR3VhcmRzOiB7cHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gb3BwbmFtZSA6IG5pY2tuYW1lfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYlRpbGVBbmRNb3Zlc091dGVyXCI+XHJcbiAgICAgICAgICAgIDxTaG93VW5zZWVuVGlsZXMgdGlsZXM9e3RpbGVzfSBvdGhlcnRpbGVzPXtwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyBndGlsZXMgOiBwdGlsZXN9Lz5cclxuICAgICAgICAgICAgPFNob3dNb3ZlcyBtb3Zlcz17bW92ZXN9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYlBsYXllck91dGVyU2VjdGlvblwiPlxyXG4gICAgICAgICAge3ByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/XHJcbiAgICAgICAgICAgIDxQbGF5ZXJTZWN0aW9uXHJcbiAgICAgICAgICAgICAgcmFja3RpbGVzPXtwdGlsZXN9XHJcbiAgICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVSYWNrVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kUHJpc29uZXJzVHVybigpfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBQcmlzb25lcnNUaWxlcygpfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gcHJpc29uZXJQYXNzKCl9XHJcbiAgICAgICAgICAgICAgb25DbGlja1VuZG9MYXN0UGxheT17KCkgPT4gcGVyZm9ybVJld2luZCgpfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tBbGxvd1VuZG89eygpID0+IGFsbG93VW5kb0xhc3RUdXJuKCl9XHJcbiAgICAgICAgICAgICAgcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICAgICAgICAgIG1vdmVzPXttb3Zlc31cclxuICAgICAgICAgICAgICBhbGxvd1Jld2luZD17YWxsb3dSZXdpbmR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxQbGF5ZXJTZWN0aW9uXHJcbiAgICAgICAgICAgICAgcmFja3RpbGVzPXtndGlsZXN9XHJcbiAgICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVSYWNrVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kR3VhcmRzVHVybigpfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBHdWFyZHNUaWxlcygpfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gZ3VhcmRzUGFzcygpfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tVbmRvTGFzdFBsYXk9eygpID0+IHBlcmZvcm1SZXdpbmQoKX1cclxuICAgICAgICAgICAgICBvbkNsaWNrQWxsb3dVbmRvPXsoKSA9PiBhbGxvd1VuZG9MYXN0VHVybigpfVxyXG4gICAgICAgICAgICAgIHByaXNvbmVyc09yR3VhcmRzPXtwcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICAgICAgICBtb3Zlcz17bW92ZXN9XHJcbiAgICAgICAgICAgICAgYWxsb3dSZXdpbmQ9e2FsbG93UmV3aW5kfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICB7cHJpc29uZXJzT3JHdWFyZHMgPT09IHdob3NldHVybiA/XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzPXtzcXVhcmVzfVxyXG4gICAgICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhyaSwgY2kpID0+IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socmksIGNpLCAtMSxudWxsKX1cclxuICAgICAgICAgICAgICAgIHJhY2tzaXplPXtyYWNrc2l6ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgIHNxdWFyZXM9e3NxdWFyZXN9XHJcbiAgICAgICAgICAgICAgICB1c2VkYnk9e3VzZWRieX1cclxuICAgICAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICByYWNrc2l6ZT17cmFja3NpemV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgIDxTaG93UmVzY3VlcyByZXNjdWVzPXtyZXNjdWVzfSAvPlxyXG4gICAgICAgICAgPENoYXQgZ2FtZWlkPXtnYW1laWR9IGNsaWVudD17Y2xpZW50fSBuaWNrbmFtZT17bmlja25hbWV9IG1zZ3M9e2NoYXRtc2dzfSBzZXRNc2dzPXtzZXRDaGF0bXNnc30gcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktY29udGFpbmVyIHczLXRlYWwgdG9wQmFySGVpZ2h0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZSBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICB7d2hvc2V0dXJuID09PSBcIlhcIiA/XHJcbiAgICAgICAgICAgIDxoMT5HYW1lIE92ZXIhPC9oMT5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgICAgPHA+e2pva2VzW2pva2VpbmRleF19PC9wPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaG93VW5zZWVuVGlsZXMgPSAocHJvcHMpID0+IHsgLy8gdGlsZXMgPSB0aWxlcyBpbiBiYWcsIG90aGVydGlsZXMgPSB0aWxlcyBvbiBvdGhlciBwbGF5ZXJzIHJhY2tcclxuICBsZXQgdW5zZWVuVGlsZXMgPSBbLi4ucHJvcHMudGlsZXMsIC4uLnByb3BzLm90aGVydGlsZXNdO1xyXG4gIC8vIFNvcnQgdGhlIHRpbGVzIHRoZW4gcHV0IHRoZSBibGFua3MgYXQgdGhlIGVuZFxyXG4gIHVuc2VlblRpbGVzLnNvcnQoKTtcclxuICBpZiAodW5zZWVuVGlsZXNbMF0gPT09IFwiP1wiKSB7XHJcbiAgICAgIHVuc2VlblRpbGVzLnNwbGljZSgwLDEpXHJcbiAgICAgIHVuc2VlblRpbGVzLnB1c2goXCI/XCIpXHJcbiAgfVxyXG4gIGlmICh1bnNlZW5UaWxlc1swXSA9PT0gXCI/XCIpIHtcclxuICAgICAgdW5zZWVuVGlsZXMuc3BsaWNlKDAsMSlcclxuICAgICAgdW5zZWVuVGlsZXMucHVzaChcIj9cIilcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xUaXRsZVwiPlRJTEVTPC9kaXY+XHJcbiAgICAgIHt1bnNlZW5UaWxlcy5tYXAoKHQsIHRpKSA9PiAoXHJcbiAgICAgICAgPHNwYW4ga2V5PXtgdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICB7dGkgPiAwICYmIHQgIT09IHVuc2VlblRpbGVzW3RpIC0gMV0gPyAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiVGlsZXBvb2xEaXZpZGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3QgPT09IFwiUVwiID8gXCJwYlRpbGVwb29sVGlsZSB1XCIgOiBcInBiVGlsZXBvb2xUaWxlXCJ9Pnt0fTwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNob3dNb3ZlcyA9IChwcm9wcykgPT4geyAvLyBzaG93IG1vdmVzIG1hZGVcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYk1vdmVzXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJNb3Zlc1RpdGxlXCI+TU9WRVM8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYk1vdmVzU2Nyb2xsYWJsZVwiIGlkPVwiU2Nyb2xsYWJsZU1vdmVzXCI+XHJcbiAgICAgICAge3Byb3BzLm1vdmVzLm1hcCgobSwgbWkpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtgbW92ZSR7bWl9YH0gY2xhc3NOYW1lPVwicGJNb3ZlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiTW92ZSBieVwiPnttLmJ5fTwvc3Bhbj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BwYk1vdmUgJHttLnR5cGV9YH0+XHJcbiAgICAgICAgICAgICAge20udHlwZSA9PT0gXCJQTEFZXCIgP1xyXG4gICAgICAgICAgICAgICAgPD57bS5wb3N9IHttLm1haW53b3JkLnJlcGxhY2UoXCJRXCIsXCJRdVwiKX1cclxuICAgICAgICAgICAgICAgICAge20uZXh0cmF3b3Jkcz8ubWFwKCh3KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICwmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgIHt3LnJlcGxhY2UoXCJRXCIsXCJRdVwiKX1cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2hvd1Jlc2N1ZXMgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYlJlc2N1ZXNNYWRlXCI+XHJcbiAgICAgIFJlc2N1ZXMgbWFkZToge3Byb3BzLnJlc2N1ZXN9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ2hhdCA9ICh7Z2FtZWlkLCBjbGllbnQsIG5pY2tuYW1lLCBtc2dzLCBzZXRNc2dzLCBwcmlzb25lcnNPckd1YXJkc30pID0+IHtcclxuICBjb25zdCBbbmV4dG1zZywgc2V0TmV4dG1zZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiBcclxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgbmV4dG1zZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBuZXdNc2dzID0gWy4uLm1zZ3MsIHtmcm9tOiBuaWNrbmFtZSwgbXNnOiBuZXh0bXNnfV1cclxuICAgICAgbGV0IHNlbmRtc2cgPSBuZXh0bXNnO1xyXG4gICAgICBzZXRNc2dzKG5ld01zZ3MpO1xyXG4gICAgICBzZXROZXh0bXNnKCcnKTtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImNoYXRcIiwgLy8gc2VuZCBjaGF0IG1lc3NhZ2VcclxuICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsIC8vIHdobyBzZW50IGl0XHJcbiAgICAgICAgICBzZW5kbXNnOiBzZW5kbXNnIC8vIHRoZSBtZXNzYWdlIHR5cGVkIGluIHRoZSBjaGF0XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gbGV0IGNoYXJ0ZXN0ID0gL15bQS1aYS16MC05IFxcLixcXChcXClcXD86ISdcIl0kLzsgLy8gQWxsb3cgbGV0dGVyLCBudW1iZXIsIHNwYWNlLCBwZXJpb2QsIGNvbW1hLCByb3VuZCBicmFja2V0cywgcXVlc3Rpb24gbWFyaywgY29sb24sIGV4Y2xhbWF0aW9uIG1hcmssIHF1b3RlLCBkb3VibGUgcXVvdGVcclxuICAgIC8vIGlmIChldmVudC5rZXkubWF0Y2goY2hhcnRlc3QpKSB7XHJcbiAgICAvLyAgIGxldCBuZXdOZXh0bXNnID0gbmV4dG1zZyArIGV2ZW50LmtleTtcclxuICAgIC8vICAgc2V0TmV4dG1zZyhuZXdOZXh0bXNnKTtcclxuICAgIC8vIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiYgbmV4dG1zZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBuZXdOZXh0bXNnID0gbmV4dG1zZy5zbGljZSgwLG5leHRtc2cubGVuZ3RoLTEpO1xyXG4gICAgICBzZXROZXh0bXNnKG5ld05leHRtc2cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJTY3JvbGxhYmxlQ2hhdFwiIGNsYXNzTmFtZT1cInBiQ2hhdFwiPlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwicGJDaGF0VGFibGVcIj5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7bXNncy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgQ2hhdE1lc3NhZ2Uke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkNoYXRGcm9tXCI+e3ZhbHVlLmZyb219PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJDaGF0TXNnXCI+e3ZhbHVlLm1zZ308L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMlwiPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e25leHRtc2cgPT09IFwiXCIgPyBcInBiQ2hhdElucHV0RW1wdHlcIiA6IFwicGJDaGF0SW5wdXRcIn1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJuZXh0bXNnSW5wdXRBcmVhXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXh0bXNnfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0TmV4dG1zZyhlLnRhcmdldC52YWx1ZSk7fX1cclxuICAgICAgICAgICAgICAgIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNoYXQuLi5cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoZWxlbWVudGlkKSA9PiB7XHJcbiAgY29uc3QgdGhlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRpZCk7XHJcbiAgdGhlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGVFbGVtZW50LnNjcm9sbEhlaWdodDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=