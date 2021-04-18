webpackHotUpdate_N_E("pages/pb/prisonbreak2",{

/***/ "./pages/pb/prisonbreak2.js":
/*!**********************************!*\
  !*** ./pages/pb/prisonbreak2.js ***!
  \**********************************/
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



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\prisonbreak2.js",
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
    lineNumber: 158,
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
    lineNumber: 171,
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
        lineNumber: 282,
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
              lineNumber: 285,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 281,
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
              lineNumber: 292,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
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
            lineNumber: 295,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 289,
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
                lineNumber: 307,
                columnNumber: 60
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Game ID:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 309,
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
            lineNumber: 313,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Rack Size:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
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
            lineNumber: 325,
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
            lineNumber: 332,
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
            lineNumber: 338,
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
            lineNumber: 344,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "pbLobbyCellBlockInfo",
            children: [racksize, " letter racks, ", racksize * 2 + 1, " x ", racksize * 2 + 1, " board."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 350,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 324,
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
            lineNumber: 353,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 304,
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
                lineNumber: 376,
                columnNumber: 55
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 376,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "myCommonFont",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: "Find and click the \"Join Game\" button for your game."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 379,
              columnNumber: 44
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 379,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 373,
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
              lineNumber: 386,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 386,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "myCommonFont",
            children: "If you lost connection, find and click the \"Reconnect\" button for your game id."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 389,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 383,
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
              lineNumber: 396,
              columnNumber: 42
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 396,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
            class: "w3-table-all w3-card-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                className: "w3-blue h4 myCommonFont",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  className: "w3-border-right",
                  children: "Game ID"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 402,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  className: "w3-border-right",
                  children: "Prisoners"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 403,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  className: "w3-border-right",
                  children: "Guards"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 404,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  className: "w3-border-right",
                  children: "Rack Size"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 405,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  children: "Game Status"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 406,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 401,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 400,
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
                    lineNumber: 412,
                    columnNumber: 53
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 412,
                  columnNumber: 21
                }, undefined), availableActionP(value) === availableActionNone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  id: `PrisonersNoAction${index}`,
                  className: "w3-border-right",
                  children: "No action available"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 414,
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
                    lineNumber: 417,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 416,
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
                    lineNumber: 430,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 429,
                  columnNumber: 23
                }, undefined), availableActionG(value) === availableActionNone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  id: `GuardsNoAction${index}`,
                  className: "w3-border-right",
                  children: "No action available"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 441,
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
                    lineNumber: 444,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 443,
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
                    lineNumber: 457,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 456,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  id: `RackSize${index}`,
                  className: "w3-center w3-border-right",
                  children: value.racksize
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 468,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  id: `GameStatus${index}`,
                  children: value.gamestatus
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 471,
                  columnNumber: 21
                }, undefined)]
              }, `OtherGame${index}`, true, {
                fileName: _jsxFileName,
                lineNumber: 411,
                columnNumber: 19
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 409,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 399,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container w3-teal",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Have fun!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 482,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 280,
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
    lineNumber: 520,
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
      lineNumber: 525,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 524,
    columnNumber: 5
  }, undefined) : props.c === squareunused ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: tdvalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 528,
    columnNumber: 7
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `pbSquareTileText ${props.squareusedby + (props.c === "Q" ? " u" : "")}`,
      children: tdvalue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 532,
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
        lineNumber: 542,
        columnNumber: 9
      }, undefined)
    }, `Square${ri}-${ci}`, false, {
      fileName: _jsxFileName,
      lineNumber: 541,
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
        lineNumber: 557,
        columnNumber: 9
      }, undefined), squares[ri].map((c, ci) => renderSquare(ri, ci, c, usedby[ri][ci])), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        className: "pbBoardRowHeader",
        id: "BoardHeaderRight",
        children: boardRowHeaders[ri]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 561,
        columnNumber: 9
      }, undefined)]
    }, `BoardRow${ri}`, true, {
      fileName: _jsxFileName,
      lineNumber: 556,
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
          lineNumber: 572,
          columnNumber: 11
        }, undefined), squares.map((_$, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardColumnHeader",
          children: boardColumnHeaders[i]
        }, `TopColumnHeader${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 574,
          columnNumber: 13
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardHeaderTopRight",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 578,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 571,
        columnNumber: 9
      }, undefined), squares.map((r, ri) => renderRow(ri)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
        className: "pbBoardColumnHeaderRow",
        id: "BoardHeaderBottom",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardHeaderBottomLeft",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 582,
          columnNumber: 11
        }, undefined), squares.map((_$, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardColumnHeader",
          children: boardColumnHeaders[i]
        }, `BottomColumnHeader${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 584,
          columnNumber: 13
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardHeaderBottomRight",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 588,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 581,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 569,
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

  const handlePrisonerTileClick = tileindex => {
    // the index of ptiles
    if (whoseturn === "P") {
      let newSelection = selection === tileindex ? -1 : tileindex;
      setSelection(newSelection);
    } else {
      alert("It is not your turn");
    }
  };

  const handleGuardTileClick = tileindex => {
    // the index of gtiles
    if (whoseturn === "G") {
      let newSelection = selection === tileindex ? -1 : tileindex;
      setSelection(newSelection);
    } else {
      alert("It is not your turn");
    }
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
          lineNumber: 1618,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1617,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1620,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", prisonersOrGuards === "P" ? nickname : oppname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1623,
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
              lineNumber: 1628,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1628,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1627,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1626,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", prisonersOrGuards === "P" ? oppname : nickname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1631,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1616,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2 pbTileAndMovesOuter",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowUnseenTiles, {
          tiles: tiles,
          othertiles: prisonersOrGuards === "P" ? gtiles : ptiles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1637,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowMoves, {
          moves: moves
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1638,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1636,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2 pbPlayerOuterSection",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Prisoners, {
          ptiles: ptiles,
          whoseturn: whoseturn,
          selection: selection,
          onClick: ti => handlePrisonerTileClick(ti),
          onClickFinishTurn: () => endPrisonersTurn(),
          onClickTileRecall: () => recallTiles(),
          onClickTileExchange: () => swapPrisonersTiles(),
          onClickPassPlay: () => prisonerPass(),
          onClickUndoLastPlay: () => performRewind(),
          onClickAllowUndo: () => allowUndoLastTurn(),
          rescues: rescues,
          prisonersOrGuards: prisonersOrGuards,
          moves: moves,
          allowRewind: allowRewind
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
        className: "col-4",
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
            lineNumber: 1661,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1660,
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
            lineNumber: 1671,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1670,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1658,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2 pbPlayerOuterSection",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Guards, {
          gtiles: gtiles,
          whoseturn: whoseturn,
          selection: selection,
          onClick: ti => handleGuardTileClick(ti),
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
          lineNumber: 1682,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1681,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Chat, {
          gameid: gameid,
          client: client,
          nickname: nickname,
          msgs: chatmsgs,
          setMsgs: setChatmsgs,
          prisonersOrGuards: prisonersOrGuards
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1699,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1698,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1635,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-middle commonFontFamily",
        children: whoseturn === "X" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Game Over!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1705,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: jokes[jokeindex]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1707,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1703,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1702,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1615,
    columnNumber: 5
  }, undefined);
};

_s3(Game, "Xb8k/WF0WbdxcO95wlk9pO5/Xu0=");

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
      lineNumber: 1729,
      columnNumber: 7
    }, undefined), unseenTiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== unseenTiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1733,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: t === "Q" ? "pbTilepoolTile u" : "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1737,
        columnNumber: 11
      }, undefined)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 1731,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1728,
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
      lineNumber: 1747,
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
            lineNumber: 1751,
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
            lineNumber: 1753,
            columnNumber: 13
          }, undefined)]
        }, `move${mi}`, true, {
          fileName: _jsxFileName,
          lineNumber: 1750,
          columnNumber: 11
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1748,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1746,
    columnNumber: 5
  }, undefined);
};

_c7 = ShowMoves;

const RackTile = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: props.tileclass,
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbTileOnRackText",
      children: props.tilevalue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1776,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1775,
    columnNumber: 5
  }, undefined);
};

_c8 = RackTile;

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
        lineNumber: 1784,
        columnNumber: 44
      }, undefined), "\xA0Finish Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1784,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1783,
    columnNumber: 5
  }, undefined);
};

_c9 = FinishTurnButton;

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
        lineNumber: 1792,
        columnNumber: 44
      }, undefined), "\xA0Recall Tiles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1792,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1791,
    columnNumber: 5
  }, undefined);
};

_c10 = TileRecallButton;

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
        lineNumber: 1800,
        columnNumber: 44
      }, undefined), "\xA0Swap Tiles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1800,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1799,
    columnNumber: 5
  }, undefined);
};

_c11 = TileExchangeButton;

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
        lineNumber: 1808,
        columnNumber: 44
      }, undefined), "\xA0Pass Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1808,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1807,
    columnNumber: 5
  }, undefined);
};

_c12 = PassPlayButton;

const AllowUndoLastPlay = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbActionButtonSevere",
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbActionButtonSevereText",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "report_problem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1816,
        columnNumber: 50
      }, undefined), "\xA0Allow Undo Turn", props.alreadyAllowed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbActionButtonSevereText2",
        children: "Allow undo is now enabled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1819,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbActionButtonSevereText2",
        children: "Click to let opponent undo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1821,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1816,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1815,
    columnNumber: 5
  }, undefined);
};

_c13 = AllowUndoLastPlay;

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
        lineNumber: 1831,
        columnNumber: 50
      }, undefined), "\xA0Undo My Turn", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbActionButtonSevereText2",
        children: "Opponent has allowed undo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1833,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1831,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1830,
    columnNumber: 5
  }, undefined);
};

_c14 = UndoLastPlay;

const Prisoners = props => {
  const renderTile = renderPlayerTile(props);

  const renderFreedPrisoners = count => {
    let dumb = Array(count).fill("nonsense");
    return dumb.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      "data-toggle": "tooltip",
      title: "I'm free! I'm free!",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "pbRescuee",
        src: "/breakfree.png",
        alt: "I'm free! I'm free!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1846,
        columnNumber: 9
      }, undefined)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 1845,
      columnNumber: 7
    }, undefined));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbPlayerInnerSection",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `pbPlayerTitle ${props.prisonersOrGuards}`,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "run_circle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1856,
        columnNumber: 67
      }, undefined), "\xA0PRISONERS\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "run_circle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1856,
        columnNumber: 132
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1856,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbTilerack",
      children: props.ptiles.map((t, ti) => renderTile(props.whoseturn === "P" && props.selection === ti ? t === "Q" && props.prisonersOrGuards === "P" ? "pbTileOnRack Selected P u" : "pbTileOnRack Selected P" : t === "Q" && props.prisonersOrGuards === "P" ? "pbTileOnRack Unselected P u" : "pbTileOnRack Unselected P", ti, props.prisonersOrGuards === "P" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1857,
      columnNumber: 7
    }, undefined), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? showActionButtons(props) : props.prisonersOrGuards === "P" && props.moves.length > 0 && props.allowRewind && props.moves[props.moves.length - 1].by === "P" ? showActionButtonUndoLastPlay(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.prisonersOrGuards === "P" && props.moves.length > 0 && props.moves[props.moves.length - 1].by === "G" ? showActionButtonAllowUndo(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbRescuesMade",
      children: ["Rescues made: ", props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1882,
        columnNumber: 9
      }, undefined), renderFreedPrisoners(props.rescues)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1880,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1855,
    columnNumber: 5
  }, undefined);
};

_c15 = Prisoners;

const Guards = props => {
  const renderTile = renderPlayerTile(props);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbPlayerInnerSection",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbPlayerTitle",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "security"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1894,
        columnNumber: 38
      }, undefined), "\xA0GUARDS\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "security"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1894,
        columnNumber: 98
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1894,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbTilerack",
      children: props.gtiles.map((t, ti) => renderTile(props.whoseturn === "G" && props.selection === ti ? t === "Q" && props.prisonersOrGuards === "G" ? "pbTileOnRack Selected G u" : "pbTileOnRack Selected G" : t === "Q" && props.prisonersOrGuards === "G" ? "pbTileOnRack Unselected G u" : "pbTileOnRack Unselected G", ti, props.prisonersOrGuards === "G" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1895,
      columnNumber: 7
    }, undefined), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? showActionButtons(props) : props.prisonersOrGuards === "G" && props.moves.length > 0 && props.allowRewind && props.moves[props.moves.length - 1].by === "G" ? showActionButtonUndoLastPlay(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.prisonersOrGuards === "G" && props.moves.length > 0 && props.moves[props.moves.length - 1].by === "P" ? showActionButtonAllowUndo(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1893,
    columnNumber: 5
  }, undefined);
};

_c16 = Guards;

function renderPlayerTile(props) {
  return (tileclass, tileindex, tilevalue) => {
    return tilevalue !== "*" ?
    /*#__PURE__*/
    // this tile is for this player, allow click
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => props.onClick(tileindex)
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 1926,
      columnNumber: 9
    }, this) :
    /*#__PURE__*/
    // this tile is for opponent, do not allow click
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => window.alert("No peeking!")
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 1932,
      columnNumber: 9
    }, this);
  };
}

function showActionButtons(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbActionButtonDiv",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
        onClick: () => props.onClickFinishTurn()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1944,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1943,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
        onClick: () => props.onClickTileRecall()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1947,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1946,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
        onClick: () => props.onClickTileExchange()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1950,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1949,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
        onClick: () => props.onClickPassPlay()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1953,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1952,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1942,
    columnNumber: 10
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
        lineNumber: 1960,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1959,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1958,
    columnNumber: 10
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
        lineNumber: 1967,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1966,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1965,
    columnNumber: 10
  }, this);
}

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
    className: "pbChat",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbChatTitle",
      children: "CHAT"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 2007,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "pbChatTable",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: [msgs.filter((value, index) => msgs.length - index < 15).map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "pbChatFrom",
            children: value.from
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 2012,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "pbChatMsg",
            children: value.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 2013,
            columnNumber: 15
          }, undefined)]
        }, `ChatMessage${index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 2011,
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
              lineNumber: 2018,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 2017,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 2016,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 2009,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 2008,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 2006,
    columnNumber: 5
  }, undefined);
};

_s4(Chat, "PlpOat0wYANdTrVq2/HpQ7Z/6HY=");

_c17 = Chat;

const scrollToBottom = elementid => {
  const theElement = document.getElementById(elementid);
  theElement.scrollTop = theElement.scrollHeight;
};

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;

$RefreshReg$(_c, "PrisonBreak");
$RefreshReg$(_c2, "Lobby");
$RefreshReg$(_c3, "Square");
$RefreshReg$(_c4, "Board");
$RefreshReg$(_c5, "Game");
$RefreshReg$(_c6, "ShowUnseenTiles");
$RefreshReg$(_c7, "ShowMoves");
$RefreshReg$(_c8, "RackTile");
$RefreshReg$(_c9, "FinishTurnButton");
$RefreshReg$(_c10, "TileRecallButton");
$RefreshReg$(_c11, "TileExchangeButton");
$RefreshReg$(_c12, "PassPlayButton");
$RefreshReg$(_c13, "AllowUndoLastPlay");
$RefreshReg$(_c14, "UndoLastPlay");
$RefreshReg$(_c15, "Prisoners");
$RefreshReg$(_c16, "Guards");
$RefreshReg$(_c17, "Chat");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImJ1dHRvbkNsYXNzTmFtZSIsImJvYXJkQ29sdW1uSGVhZGVycyIsImJvYXJkUm93SGVhZGVycyIsIm1vdmV3YWl0dGltZSIsImpva2VzIiwiaW5pdGlhbHRpbGVzNCIsImluaXRpYWx0aWxlczUiLCJpbml0aWFsdGlsZXM2IiwiaW5pdGlhbHRpbGVzNyIsInNxdWFyZXVudXNlZCIsInVzZWRieW5vb25lIiwibm9kaXJlY3Rpb24iLCJhdmFpbGFibGVBY3Rpb25Ob25lIiwiYXZhaWxhYmxlQWN0aW9uU3RhcnQiLCJhdmFpbGFibGVBY3Rpb25Kb2luIiwiYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0IiwiUHJpc29uQnJlYWsiLCJpc3Jlam9pbiIsInNldElzcmVqb2luIiwidXNlU3RhdGUiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJuaWNrbmFtZSIsInNldE5pY2tuYW1lIiwicHJpc29uZXJzT3JHdWFyZHMiLCJzZXRQcmlzb25lcnNPckd1YXJkcyIsIndzbWVzc2FnZSIsInNldFdzbWVzc2FnZSIsInJhY2tzaXplIiwic2V0UmFja3NpemUiLCJob3N0IiwiYWNjZXB0TWVzc2FnZSIsIm1lc3NhZ2UiLCJkYXRhIiwiY2xpZW50IiwiQ3VzdG9tU29ja2V0IiwidXNlRWZmZWN0IiwiY29ubmVjdCIsIkxvYmJ5IiwiZ2FtZWxpc3QiLCJzZXRHYW1lbGlzdCIsIm1zZyIsInByb2Nlc3NMb2JieU1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsInNlbmRlcmdhbWVpZCIsInNlbmRlcm5pY2tuYW1lIiwid3QiLCJ3aG9zZXR1cm4iLCJycyIsImxlbmd0aCIsImFueVVwZGF0ZXMiLCJzZW5kZXJQRyIsInNlbmRlciIsIm5ld0dhbWVsaXN0IiwiZ2kiLCJnZXRHYW1lbGlzdEluZGV4IiwibmV3UGxheWluZ1AiLCJwbGF5aW5nUCIsIm5ld1BsYXlpbmdHIiwicGxheWluZ0ciLCJuZXdSYWNrc2l6ZSIsIm5ld2dhbWVzdGF0dXMiLCJuZXdnYW1lZGF0YSIsIm5pY2tuYW1lUCIsIm5pY2tuYW1lRyIsImdhbWVzdGF0dXMiLCJvbGRnYW1lZGF0YSIsIndpbmRvdyIsImFsZXJ0IiwiZ2lkIiwiaSIsImlzUGxheWluZ1AiLCJhdmFpbGFibGVBY3Rpb25QIiwiZ2QiLCJhdmFpbGFibGVBY3Rpb25HIiwic2VsZWN0UmFja1NpemUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpbmRleCIsIlNxdWFyZSIsInByb3BzIiwiZWRnZSIsIm1pZGRsZSIsInRkY2xhc3MiLCJjIiwicmNkIiwicmkiLCJjaSIsInRkdmFsdWUiLCJpbmRleE9mIiwib25DbGljayIsInNxdWFyZXVzZWRieSIsIkJvYXJkIiwic3F1YXJlcyIsInVzZWRieSIsInJlbmRlclNxdWFyZSIsInJlbmRlclJvdyIsIl8kIiwiciIsIkdhbWUiLCJpbml0aWFsdGlsZXMiLCJpbml0aWFsc3F1YXJlcyIsIkFycmF5IiwiZmlsbCIsImluaXRpYWx1c2VkYnkiLCJ0aWxlcyIsInNldFRpbGVzIiwicHRpbGVzIiwic2V0UHRpbGVzIiwiZ3RpbGVzIiwic2V0R3RpbGVzIiwic2V0U3F1YXJlcyIsInNldFVzZWRieSIsInNlbGVjdGlvbiIsInNldFNlbGVjdGlvbiIsInNldFdob3NldHVybiIsImN1cnJlbnRjb29yZHMiLCJzZXRDdXJyZW50Y29vcmRzIiwicmVzY3VlcyIsInNldFJlc2N1ZXMiLCJzZXRSY2QiLCJwYXNzZWQiLCJzZXRQYXNzZWQiLCJtb3ZlcyIsInNldE1vdmVzIiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsImpva2VpbmRleCIsInNldEpva2VpbmRleCIsImFsbG93UmV3aW5kIiwic2V0QWxsb3dSZXdpbmQiLCJvcHBuYW1lIiwic2V0T3BwbmFtZSIsImNoYXRtc2dzIiwic2V0Q2hhdG1zZ3MiLCJuZXdqaSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwicmVxdWVzdEdhbWVEYXRhIiwiY2xlYXJJbnRlcnZhbCIsInRlbXBQVGlsZXMiLCJ0ZW1wR1RpbGVzIiwidGVtcFRpbGVzIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzcGxpY2UiLCJzb3J0Iiwic2VuZCIsInN0cmluZ2lmeSIsInR5cGUiLCJmdW5jIiwicHJvY2Vzc0dhbWVNZXNzYWdlIiwic2Nyb2xsVG9Cb3R0b20iLCJwdXRBdE1vdmVTdGFydCIsIm5ld0NoYXRtc2dzIiwiZnJvbSIsInNlbmRtc2ciLCJoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIiwibmV3U2VsZWN0aW9uIiwibmV3UmNkIiwibmV3U3F1YXJlcyIsIm5ld1VzZWRieSIsIm5ld1B0aWxlcyIsIm5ld0d0aWxlcyIsIm5ld1JvdyIsInNxdWFyZXZhbHVlIiwibmV3Q3VycmVudGNvb3JkcyIsImNvb3JkIiwiU3RyaW5nIiwiY2NpIiwibmV3VXNlZGJ5Um93IiwibmV3RGlyZWN0aW9uIiwiaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2siLCJ0aWxlaW5kZXgiLCJoYW5kbGVHdWFyZFRpbGVDbGljayIsImVuZFByaXNvbmVyc1R1cm4iLCJpc1BsYXlWYWxpZCIsInJld2luZEluZm8iLCJnZXRSZXdpbmRJbmZvIiwibmV3UmVzY3VlcyIsImVzY2FwZWhhdGNoZXMiLCJuZXdUaWxlcyIsIm5ld1dob3NldHVybiIsInBsYXlpbmZvIiwiZ2V0UGxheUluZm8iLCJuZXdNb3ZlIiwiYnkiLCJtYWlud29yZCIsImV4dHJhd29yZHMiLCJwb3MiLCJuZXdNb3ZlcyIsImVuZEd1YXJkc1R1cm4iLCJzbmFwc3F1YXJlcyIsInNuYXB1c2VkYnkiLCJzbmFwcHRpbGVzIiwic25hcGd0aWxlcyIsInN3YXBQcmlzb25lcnNUaWxlcyIsInN3YXBHdWFyZHNUaWxlcyIsIm51bXJvd3MiLCJudW1jb2xzIiwibG93cm93IiwiaGlnaHJvdyIsImxvd2NvbCIsImhpZ2hjb2wiLCJwbGF5dGhydSIsImhvb2ttYWRlIiwid29yZHN0YXJ0Y29vcmQiLCJudW1jb29yZHMiLCJyb3ciLCJwYXJzZUludCIsInNwbGl0IiwiY29sIiwibG93ZXN0cm93IiwiaGlnaGVzdHJvdyIsImxvd2VzdGNvbCIsImhpZ2hlc3Rjb2wiLCJleHRyYXdvcmQiLCJyYWNrIiwiYWxsb3dVbmRvTGFzdFR1cm4iLCJwZXJmb3JtUmV3aW5kIiwibnVtTW92ZXMiLCJsYXN0TW92ZSIsIm5ld1NuYXBzaG90IiwibmV3UGFzc2VkIiwicmVjYWxsVGlsZXMiLCJwcmlzb25lclBhc3MiLCJndWFyZHNQYXNzIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJrZXkiLCJsZXR0ZXJ0ZXN0IiwibWF0Y2giLCJsZXR0ZXIiLCJ0b1VwcGVyQ2FzZSIsImRpciIsIm5ld2MiLCJuZXdyIiwicmV0dXJuZWRUaWxlIiwidGkiLCJTaG93VW5zZWVuVGlsZXMiLCJ1bnNlZW5UaWxlcyIsIm90aGVydGlsZXMiLCJ0IiwiU2hvd01vdmVzIiwibSIsIm1pIiwicmVwbGFjZSIsInciLCJSYWNrVGlsZSIsInRpbGVjbGFzcyIsInRpbGV2YWx1ZSIsIkZpbmlzaFR1cm5CdXR0b24iLCJUaWxlUmVjYWxsQnV0dG9uIiwiVGlsZUV4Y2hhbmdlQnV0dG9uIiwiUGFzc1BsYXlCdXR0b24iLCJBbGxvd1VuZG9MYXN0UGxheSIsImFscmVhZHlBbGxvd2VkIiwiVW5kb0xhc3RQbGF5IiwiUHJpc29uZXJzIiwicmVuZGVyVGlsZSIsInJlbmRlclBsYXllclRpbGUiLCJyZW5kZXJGcmVlZFByaXNvbmVycyIsImNvdW50IiwiZHVtYiIsInNob3dBY3Rpb25CdXR0b25zIiwic2hvd0FjdGlvbkJ1dHRvblVuZG9MYXN0UGxheSIsInNob3dBY3Rpb25CdXR0b25BbGxvd1VuZG8iLCJHdWFyZHMiLCJvbkNsaWNrRmluaXNoVHVybiIsIm9uQ2xpY2tUaWxlUmVjYWxsIiwib25DbGlja1RpbGVFeGNoYW5nZSIsIm9uQ2xpY2tQYXNzUGxheSIsIm9uQ2xpY2tBbGxvd1VuZG8iLCJvbkNsaWNrVW5kb0xhc3RQbGF5IiwiQ2hhdCIsIm1zZ3MiLCJzZXRNc2dzIiwibmV4dG1zZyIsInNldE5leHRtc2ciLCJuZXdNc2dzIiwibmV3TmV4dG1zZyIsInNsaWNlIiwiZmlsdGVyIiwiZWxlbWVudGlkIiwidGhlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxlQUFlLEdBQUcscURBQXhCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxHQUFiLEVBQWlCLEdBQWpCLEVBQXFCLEdBQXJCLEVBQXlCLEdBQXpCLEVBQTZCLEdBQTdCLEVBQWlDLEdBQWpDLEVBQXFDLEdBQXJDLEVBQXlDLEdBQXpDLEVBQTZDLEdBQTdDLEVBQWlELEdBQWpELEVBQXFELEdBQXJELEVBQXlELEdBQXpELENBQTNCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLENBQUMsR0FBRCxFQUFLLEdBQUwsRUFBUyxHQUFULEVBQWEsR0FBYixFQUFpQixHQUFqQixFQUFxQixHQUFyQixFQUF5QixHQUF6QixFQUE2QixHQUE3QixFQUFpQyxHQUFqQyxFQUFxQyxJQUFyQyxFQUEwQyxJQUExQyxFQUErQyxJQUEvQyxFQUFvRCxJQUFwRCxFQUF5RCxJQUF6RCxFQUE4RCxJQUE5RCxDQUF4QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxLQUFyQixDLENBQTRCOztBQUM1QixNQUFNQyxLQUFLLEdBQUcsQ0FDWixnQkFBZ0Isb0JBQWhCLEdBQXVDLG1CQUF2QyxHQUE0RCxvQkFBNUQsR0FBbUYsR0FEdkUsRUFFWiwrREFGWSxFQUdaLDZEQUhZLEVBSVosa0VBSlksRUFLWiw2RUFMWSxFQU1aLGdFQU5ZLENBQWQ7QUFRQSxNQUFNQyxhQUFhLEdBQUcsQ0FDcEIsR0FEb0IsRUFDZCxHQURjLEVB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O0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUEwQkQsQ0E1REQ7O0lBQU1nRCxJOztPQUFBQSxJOztBQThETixNQUFNM0gsY0FBYyxHQUFJb0ksU0FBRCxJQUFlO0FBQ3BDLFFBQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCSCxTQUF4QixDQUFuQjtBQUNBQyxZQUFVLENBQUNHLFNBQVgsR0FBdUJILFVBQVUsQ0FBQ0ksWUFBbEM7QUFDRCxDQUhEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrMi5mNDVlNjBlNDUyNzA4NmM2YmU3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ3VzdG9tU29ja2V0IGZyb20gXCIuLi8uLi93c1wiO1xyXG5jb25zdCBidXR0b25DbGFzc05hbWUgPSAndzMtYnV0dG9uIHczLWJvcmRlciB3My1ibHVlIHczLWhvdmVyLWJsYWNrIHczLXJvdW5kJztcclxuY29uc3QgYm9hcmRDb2x1bW5IZWFkZXJzID0gWydBJywnQicsJ0MnLCdEJywnRScsJ0YnLCdHJywnSCcsJ0knLCdKJywnSycsJ0wnLCdNJywnTicsJ08nXTtcclxuY29uc3QgYm9hcmRSb3dIZWFkZXJzID0gWycxJywnMicsJzMnLCc0JywnNScsJzYnLCc3JywnOCcsJzknLCcxMCcsJzExJywnMTInLCcxMycsJzE0JywnMTUnXTtcclxuY29uc3QgbW92ZXdhaXR0aW1lID0gMjAwMDA7IC8vIHdoZW4gd2FpdGluZyBmb3Igb3Bwb25lbnQgcGluZyBldmVyeSB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzXHJcbmNvbnN0IGpva2VzID0gW1xyXG4gICdFc2NhcGVlOiBcIkknICsgXCInbSBmcmVlISBJJ20gZnJlZSFcIiArICdcIi4gTGl0dGxlIGtpZDogXCJJJysgXCInbSBmb3VyISBJJ20gZm91ciFcIiArICdcIicsXHJcbiAgJ1R3byBwZWFudXRzIHdlcmUgd2Fsa2luZyBkb3duIGEgYmFjayBhbGxleS4gT25lIHdhcyBhIHNhbHRlZC4nLFxyXG4gIFwiVGhlIHBzeWNoaWMgZHdhcmYgZXNjYXBlZCEgVGhlcmUncyBhIHNtYWxsIG1lZGl1bSBhdCBsYXJnZSFcIixcclxuICAnV2hhdCBkbyB5b3UgY2FsbCBhIHZlZ2V0YWJsZSB3aG8gaGFzIGVzY2FwZWQgcHJpc29uPyBBbiBlc2NhcGVhIScsXHJcbiAgXCJUaGUgcHJpc29uZXJzIGZhdmUgcHVuY3R1YXRpb24gaXMgYSBwZXJpb2QuIEl0IG1hcmtzIHRoZSBlbmQgb2YgYSBzZW50ZW5jZSFcIixcclxuICBcIlByaXNvbiBpcyBvbmx5IG9uZSB3b3JkLCBidXQgdG8gcm9iYmVycyBpdCdzIGEgd2hvbGUgc2VudGVuY2UuXCJcclxuXTtcclxuY29uc3QgaW5pdGlhbHRpbGVzNCA9IFtcclxuICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsXHJcbiAgXCJCXCIsXHJcbiAgXCJDXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJIXCIsXHJcbiAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gIFwiSlwiLFxyXG4gIFwiS1wiLFxyXG4gIFwiTFwiLFxyXG4gIFwiTVwiLFxyXG4gIFwiTlwiLCAgXCJOXCIsXHJcbiAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLFxyXG4gIFwiUFwiLFxyXG4gIFwiUVwiLFxyXG4gIFwiUlwiLCAgXCJSXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJUXCIsICBcIlRcIixcclxuICBcIlVcIixcclxuICBcIlZcIixcclxuICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIixcclxuICBcIlpcIixcclxuICBcIj9cIiwgIFwiP1wiLFxyXG5dOyAvLyBpbml0aWFsIHRpbGUgcG9vbCBmb3IgNCBsZXR0ZXIgcmFjayBtb2RlXHJcbmNvbnN0IGluaXRpYWx0aWxlczUgPSBbXHJcbiAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIixcclxuICBcIkJcIixcclxuICBcIkNcIixcclxuICBcIkRcIiwgIFwiRFwiLFxyXG4gIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIixcclxuICBcIkZcIixcclxuICBcIkdcIixcclxuICBcIkhcIixcclxuICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gIFwiSlwiLFxyXG4gIFwiS1wiLFxyXG4gIFwiTFwiLCAgXCJMXCIsXHJcbiAgXCJNXCIsXHJcbiAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLFxyXG4gIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLFxyXG4gIFwiUFwiLFxyXG4gIFwiUVwiLFxyXG4gIFwiUlwiLCAgXCJSXCIsICBcIlJcIixcclxuICBcIlNcIiwgIFwiU1wiLFxyXG4gIFwiVFwiLCAgXCJUXCIsICBcIlRcIixcclxuICBcIlVcIixcclxuICBcIlZcIixcclxuICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIixcclxuICBcIlpcIixcclxuICBcIj9cIiwgIFwiP1wiLFxyXG5dOyAvLyBpbml0aWFsIHRpbGUgcG9vbCBmb3IgNSBsZXR0ZXIgcmFjayBtb2RlXHJcbmNvbnN0IGluaXRpYWx0aWxlczYgPSBbXHJcbiAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsXHJcbiAgXCJCXCIsICBcIkJcIixcclxuICBcIkNcIiwgIFwiQ1wiLFxyXG4gIFwiRFwiLCAgXCJEXCIsICBcIkRcIixcclxuICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJHXCIsICBcIkdcIixcclxuICBcIkhcIiwgIFwiSFwiLFxyXG4gIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gIFwiSlwiLFxyXG4gIFwiS1wiLFxyXG4gIFwiTFwiLCAgXCJMXCIsICBcIkxcIixcclxuICBcIk1cIiwgIFwiTVwiLFxyXG4gIFwiTlwiLCAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLFxyXG4gIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICBcIlBcIiwgIFwiUFwiLFxyXG4gIFwiUVwiLFxyXG4gIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsXHJcbiAgXCJTXCIsICBcIlNcIiwgIFwiU1wiLFxyXG4gIFwiVFwiLCAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLFxyXG4gIFwiVVwiLCAgXCJVXCIsICBcIlVcIixcclxuICBcIlZcIixcclxuICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIixcclxuICBcIlpcIixcclxuICBcIj9cIiwgIFwiP1wiLFxyXG5dOyAvLyBpbml0aWFsIHRpbGUgcG9vbCBmb3IgNiBsZXR0ZXIgcmFjayBtb2RlXHJcbmNvbnN0IGluaXRpYWx0aWxlczcgPSBbXHJcbiAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLFxyXG4gIFwiQlwiLCAgXCJCXCIsXHJcbiAgXCJDXCIsICBcIkNcIixcclxuICBcIkRcIiwgIFwiRFwiLCAgXCJEXCIsICBcIkRcIixcclxuICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsXHJcbiAgXCJGXCIsICBcIkZcIixcclxuICBcIkdcIiwgIFwiR1wiLCAgXCJHXCIsXHJcbiAgXCJIXCIsICBcIkhcIixcclxuICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsXHJcbiAgXCJKXCIsXHJcbiAgXCJLXCIsXHJcbiAgXCJMXCIsICBcIkxcIiwgIFwiTFwiLCAgXCJMXCIsXHJcbiAgXCJNXCIsICBcIk1cIixcclxuICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsXHJcbiAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICBcIlBcIiwgIFwiUFwiLFxyXG4gIFwiUVwiLFxyXG4gIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIixcclxuICBcIlNcIiwgIFwiU1wiLCAgXCJTXCIsICBcIlNcIixcclxuICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsXHJcbiAgXCJVXCIsICBcIlVcIiwgIFwiVVwiLCAgXCJVXCIsXHJcbiAgXCJWXCIsICBcIlZcIixcclxuICBcIldcIiwgIFwiV1wiLFxyXG4gIFwiWFwiLFxyXG4gIFwiWVwiLCAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDcgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBzcXVhcmV1bnVzZWQgPSBcIi5cIjtcclxuY29uc3QgdXNlZGJ5bm9vbmUgPSBcIlwiO1xyXG5jb25zdCBub2RpcmVjdGlvbiA9IFwiXCI7XHJcbmNvbnN0IGF2YWlsYWJsZUFjdGlvbk5vbmUgPSAwO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25TdGFydCA9IDE7XHJcbmNvbnN0IGF2YWlsYWJsZUFjdGlvbkpvaW4gPSAyO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3QgPSAzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpc29uQnJlYWsoKSB7XHJcbiAgY29uc3QgW2lzcmVqb2luLCBzZXRJc3Jlam9pbl0gPSB1c2VTdGF0ZShmYWxzZSkgLy8gVXNlZCB3aGVuIHBsYXllciBsb3NlcyBjb25uZWN0aW9uIGFuZCByZWpvaW5zXHJcbiAgY29uc3QgW2dhbWVpZCwgc2V0R2FtZWlkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtuaWNrbmFtZSwgc2V0Tmlja25hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3ByaXNvbmVyc09yR3VhcmRzLCBzZXRQcmlzb25lcnNPckd1YXJkc10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbd3NtZXNzYWdlLCBzZXRXc21lc3NhZ2VdID0gdXNlU3RhdGUoJycpIC8vIExhdGVzdCBtZXNzYWdlcyBmcm9tIHRoZSB3ZWJzb2NrZXRcclxuICBjb25zdCBbcmFja3NpemUsIHNldFJhY2tzaXplXSA9IHVzZVN0YXRlKDQpOyAvLyBEZWZhdWx0IHRvIDQgbGV0dGVyIHJhY2tzXHJcbiAgbGV0IGhvc3QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ3dzczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbScgOiAnd3M6Ly9sb2NhbGhvc3Q6NTAwMCc7XHJcbiAgY29uc3QgYWNjZXB0TWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAvLyBSZWFjdCBpcyBoYXJkIHRvIHVuZGVyc3RhbmQuIElmIEkgcmVmZXJlbmNlIHByaXNvbmVyc09yR3VhcmRzIGhlcmUgaXQgd2lsbCBhbHdheXMgYmUgdGhlIGluaXRpYWwgdmFsdWUuXHJcbiAgICBzZXRXc21lc3NhZ2UobWVzc2FnZS5kYXRhKVxyXG4gIH1cclxuICBjb25zdCBbY2xpZW50XSA9IHVzZVN0YXRlKG5ldyBDdXN0b21Tb2NrZXQoaG9zdCwgYWNjZXB0TWVzc2FnZSkpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiAoXHJcbiAgICBjbGllbnQuY29ubmVjdCgpXHJcbiAgKSxbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIHByaXNvbmVyc09yR3VhcmRzID09PSAnJyA/XHJcbiAgICAgIDxMb2JieVxyXG4gICAgICAgIHNldElzcmVqb2luPXtzZXRJc3Jlam9pbn1cclxuICAgICAgICB3c21lc3NhZ2U9e3dzbWVzc2FnZX1cclxuICAgICAgICAvLyBjbGllbnQ9e2NsaWVudH1cclxuICAgICAgICBnYW1laWQ9e2dhbWVpZH1cclxuICAgICAgICBzZXRHYW1laWQ9e3NldEdhbWVpZH1cclxuICAgICAgICBuaWNrbmFtZT17bmlja25hbWV9XHJcbiAgICAgICAgc2V0Tmlja25hbWU9e3NldE5pY2tuYW1lfVxyXG4gICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzPXtzZXRQcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICByYWNrc2l6ZT17cmFja3NpemV9XHJcbiAgICAgICAgc2V0UmFja3NpemU9e3NldFJhY2tzaXplfVxyXG4gICAgICAvPlxyXG4gICAgOlxyXG4gICAgICA8R2FtZVxyXG4gICAgICAgIGlzcmVqb2luPXtpc3Jlam9pbn1cclxuICAgICAgICBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgZ2FtZWlkPXtnYW1laWR9XHJcbiAgICAgICAgbmlja25hbWU9e25pY2tuYW1lfVxyXG4gICAgICAgIHdzbWVzc2FnZT17d3NtZXNzYWdlfVxyXG4gICAgICAgIGNsaWVudD17Y2xpZW50fVxyXG4gICAgICAgIHJhY2tzaXplPXtyYWNrc2l6ZX1cclxuICAgICAgLz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IExvYmJ5ID0gKHtzZXRJc3Jlam9pbiwgd3NtZXNzYWdlLCBnYW1laWQsIHNldEdhbWVpZCwgbmlja25hbWUsIHNldE5pY2tuYW1lLCBzZXRQcmlzb25lcnNPckd1YXJkc1xyXG4gICwgcmFja3NpemUsIHNldFJhY2tzaXplIC8vIE9wdGlvbiBmb3IgcmFjayBzaXplXHJcbiAgfSkgPT4ge1xyXG4gIGNvbnN0IFtnYW1lbGlzdCwgc2V0R2FtZWxpc3RdID0gdXNlU3RhdGUoW10pIC8vIEdhbWUgaW5mbyBieSBnYW1lIGlkXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NMb2JieU1lc3NhZ2UobXNnKTtcclxuICB9LFt3c21lc3NhZ2VdKVxyXG5cclxuICBmdW5jdGlvbiBwcm9jZXNzTG9iYnlNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgIGxldCBzZW5kZXJnYW1laWQgPSBtZXNzYWdlRGF0YS5nYW1laWQ7XHJcbiAgICAgIGxldCBzZW5kZXJuaWNrbmFtZSA9IG1lc3NhZ2VEYXRhLm5pY2tuYW1lO1xyXG4gICAgICBsZXQgd3QgPSBtZXNzYWdlRGF0YS53aG9zZXR1cm47XHJcbiAgICAgIGxldCBycyA9IG1lc3NhZ2VEYXRhLnJhY2tzaXplO1xyXG4gICAgICBpZiAoc2VuZGVyZ2FtZWlkICYmIHNlbmRlcmdhbWVpZC5sZW5ndGggPiAwICYmIHJzICYmIHd0ICYmIHd0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgYW55VXBkYXRlcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBzZW5kZXJQRyA9IG1lc3NhZ2VEYXRhLnNlbmRlcjtcclxuICAgICAgICBsZXQgbmV3R2FtZWxpc3QgPSBbLi4uZ2FtZWxpc3RdO1xyXG4gICAgICAgIGxldCBnaSA9IGdldEdhbWVsaXN0SW5kZXgoc2VuZGVyZ2FtZWlkKTtcclxuICAgICAgICBsZXQgbmV3UGxheWluZ1AgPSBzZW5kZXJQRyA9PT0gXCJQXCIgPyB0cnVlIDogZ2kgPiAtMSA/IGdhbWVsaXN0W2dpXS5wbGF5aW5nUCA6IGZhbHNlO1xyXG4gICAgICAgIGxldCBuZXdQbGF5aW5nRyA9IHNlbmRlclBHID09PSBcIkdcIiA/IHRydWUgOiBnaSA+IC0xID8gZ2FtZWxpc3RbZ2ldLnBsYXlpbmdHIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IG5ld1JhY2tzaXplID0gcnM7XHJcblxyXG4gICAgICAgIGxldCBuZXdnYW1lc3RhdHVzID0gXCJVbmtub3duXCI7XHJcbiAgICAgICAgaWYgKHd0ID09PSBcIlhcIikge1xyXG4gICAgICAgICAgbmV3Z2FtZXN0YXR1cyA9IFwiR2FtZSBvdmVyXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh3dCA9PT0gXCJQXCIpIHtcclxuICAgICAgICAgIG5ld2dhbWVzdGF0dXMgPSBcIlByaXNvbmVycyB0dXJuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh3dCA9PT0gXCJHXCIpIHtcclxuICAgICAgICAgIG5ld2dhbWVzdGF0dXMgPSBcIkd1YXJkcyB0dXJuXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbmV3Z2FtZWRhdGEgPSB7XHJcbiAgICAgICAgICBnYW1laWQ6IHNlbmRlcmdhbWVpZCxcclxuICAgICAgICAgIG5pY2tuYW1lUDogc2VuZGVyUEcgPT09IFwiUFwiID8gc2VuZGVybmlja25hbWUgOiBnaSA+IC0xID8gZ2FtZWxpc3RbZ2ldLm5pY2tuYW1lUCA6IFwiXCIsXHJcbiAgICAgICAgICBuaWNrbmFtZUc6IHNlbmRlclBHID09PSBcIkdcIiA/IHNlbmRlcm5pY2tuYW1lIDogZ2kgPiAtMSA/IGdhbWVsaXN0W2dpXS5uaWNrbmFtZUcgOiBcIlwiLFxyXG4gICAgICAgICAgZ2FtZXN0YXR1czogbmV3Z2FtZXN0YXR1cyxcclxuICAgICAgICAgIHBsYXlpbmdQOiBuZXdQbGF5aW5nUCxcclxuICAgICAgICAgIHBsYXlpbmdHOiBuZXdQbGF5aW5nRyxcclxuICAgICAgICAgIHJhY2tzaXplOiBuZXdSYWNrc2l6ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2kgPCAwKSB7IC8vIEdhbWUgbm90IGluIGxpc3QgeWV0LCBwdXQgaXQgaW4gdGhlIGxpc3RcclxuICAgICAgICAgIGFueVVwZGF0ZXMgPSB0cnVlO1xyXG4gICAgICAgICAgbmV3R2FtZWxpc3QgPSBbLi4ubmV3R2FtZWxpc3QsIG5ld2dhbWVkYXRhXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7IC8vIEdhbWUgaXMgaW4gdGhlIGxpc3QsIGNoZWNrIGZvciBuZWVkZWQgdXBkYXRlc1xyXG4gICAgICAgICAgbGV0IG9sZGdhbWVkYXRhID0gZ2FtZWxpc3RbZ2ldO1xyXG4gICAgICAgICAgaWYgKG9sZGdhbWVkYXRhLm5pY2tuYW1lUCAhPT0gbmV3Z2FtZWRhdGEubmlja25hbWVQIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEubmlja25hbWVHICE9PSBuZXdnYW1lZGF0YS5uaWNrbmFtZUcgfHxcclxuICAgICAgICAgICAgICBvbGRnYW1lZGF0YS5nYW1lc3RhdHVzICE9PSBuZXdnYW1lZGF0YS5nYW1lc3RhdHVzIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEucGxheWluZ1AgIT09IG5ld2dhbWVkYXRhLnBsYXlpbmdQIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEucGxheWluZ0cgIT09IG5ld2dhbWVkYXRhLnBsYXlpbmdHIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEucmFja3NpemUgIT09IG5ld2dhbWVkYXRhLnJhY2tzaXplXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGFueVVwZGF0ZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIG5ld0dhbWVsaXN0W2dpXSA9IG5ld2dhbWVkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbnlVcGRhdGVzKSB7XHJcbiAgICAgICAgICBzZXRHYW1lbGlzdChuZXdHYW1lbGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9ICBcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJFcnJvciBwcm9jZXNzaW5nIGxvYmJ5IG1lc3NhZ2VcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGdldEdhbWVsaXN0SW5kZXgoZ2lkKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdhbWVsaXN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIGlmIChnYW1lbGlzdFtpXS5nYW1laWQgPT09IGdpZCkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGlzUGxheWluZ1AoZ2lkKSB7XHJcbiAgICBsZXQgZ2kgPSBnZXRHYW1lbGlzdEluZGV4KGdpZCk7XHJcbiAgICByZXR1cm4gZ2kgPCAwID8gZmFsc2UgOiBnYW1lbGlzdFtnaV0ucGxheWluZ1A7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGF2YWlsYWJsZUFjdGlvblAoZ2QpIHtcclxuICAgIGlmIChuaWNrbmFtZS5sZW5ndGggPT09IDAgfHwgZ2QuZ2FtZXN0YXR1cyA9PT0gXCJHYW1lIG92ZXJcIikgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uTm9uZTsgfVxyXG4gICAgaWYgKCFnZC5wbGF5aW5nUCkgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uU3RhcnQ7IH1cclxuICAgIGlmIChnZC5uaWNrbmFtZVAgPT09IG5pY2tuYW1lKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3Q7IH1cclxuICAgIHJldHVybiBhdmFpbGFibGVBY3Rpb25Ob25lO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhdmFpbGFibGVBY3Rpb25HKGdkKSB7XHJcbiAgICBpZiAobmlja25hbWUubGVuZ3RoID09PSAwIHx8IGdkLmdhbWVzdGF0dXMgPT09IFwiR2FtZSBvdmVyXCIpIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbk5vbmU7IH1cclxuICAgIGlmICghZ2QucGxheWluZ0cpIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbkpvaW47IH1cclxuICAgIGlmIChnZC5uaWNrbmFtZUcgPT09IG5pY2tuYW1lKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3Q7IH1cclxuICAgIHJldHVybiBhdmFpbGFibGVBY3Rpb25Ob25lO1xyXG4gIH1cclxuICBmdW5jdGlvbiBzZWxlY3RSYWNrU2l6ZShuZXdSYWNrc2l6ZSkge1xyXG4gICAgc2V0UmFja3NpemUobmV3UmFja3NpemUpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtdGVhbCB3My1iYXJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW0gdzMtY2VudHJlIG15SGVhZGluZ0ZvbnRcIj5Qcmlzb24gQnJlYWsgTG9iYnk8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW0gdzMtcmlnaHRcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi4vLi4vXCJ9PlxyXG4gICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICA8aDI+PGI+Tmlja25hbWU6PC9iPjwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInczLWlucHV0IHczLWJvcmRlciB3My1ibHVlIG15Q29tbW9uRm9udFwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibmlja25hbWVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuaWNrbmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE5pY2tuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGgyPjxzcGFuIGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj5QUklTT05FUlM8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFycm93X3JpZ2h0PC9pPjwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxoMj48Yj5HYW1lIElEOjwvYj48L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3My1pbnB1dCB3My1ib3JkZXIgdzMtYmx1ZSBteUNvbW1vbkZvbnRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImdhbWVpZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Z2FtZWlkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEdhbWVpZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8aDI+PGI+UmFjayBTaXplOjwvYj48L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3RyYWNrc2l6ZTRcIiBjbGFzc05hbWU9e3JhY2tzaXplID09PSA0ID8gXCJwYkxvYmJ5UmFja1NpemVTZWxlY3RlZFwiIDogXCJwYkxvYmJ5UmFja1NpemVcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFJhY2tTaXplKDQpfVxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCI0IGxldHRlciByYWNrcywgOSB4IDkgYm9hcmRcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgNFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3RyYWNrc2l6ZTVcIiBjbGFzc05hbWU9e3JhY2tzaXplID09PSA1ID8gXCJwYkxvYmJ5UmFja1NpemVTZWxlY3RlZFwiIDogXCJwYkxvYmJ5UmFja1NpemVcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFJhY2tTaXplKDUpfVxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCI1IGxldHRlciByYWNrcywgMTEgeCAxMSBib2FyZFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgNVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3RyYWNrc2l6ZTZcIiBjbGFzc05hbWU9e3JhY2tzaXplID09PSA2ID8gXCJwYkxvYmJ5UmFja1NpemVTZWxlY3RlZFwiIDogXCJwYkxvYmJ5UmFja1NpemVcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFJhY2tTaXplKDYpfVxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCI2IGxldHRlciByYWNrcywgMTMgeCAxMyBib2FyZFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgNlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3RyYWNrc2l6ZTdcIiBjbGFzc05hbWU9e3JhY2tzaXplID09PSA3ID8gXCJwYkxvYmJ5UmFja1NpemVTZWxlY3RlZFwiIDogXCJwYkxvYmJ5UmFja1NpemVcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFJhY2tTaXplKDcpfVxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCI3IGxldHRlciByYWNrcywgMTUgeCAxNSBib2FyZFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgN1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiTG9iYnlDZWxsQmxvY2tJbmZvXCI+e3JhY2tzaXplfSBsZXR0ZXIgcmFja3MsIHtyYWNrc2l6ZSoyKzF9IHgge3JhY2tzaXplKjIrMX0gYm9hcmQuPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN0YXJ0Z2FtZVwiIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAobmlja25hbWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiUGxlYXNlIGVudGVyIG5pY2tuYW1lIGJlZm9yZSBzdGFydGluZyBhIGdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZWlkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNQbGF5aW5nUChnYW1laWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJQcmlzb25lcnMgYWxyZWFkeSBwbGF5aW5nIHRoYXQgZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ1AnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiUGxlYXNlIGVudGVyIEdhbWUgSUQgYmVmb3JlIHN0YXJ0aW5nIGEgZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU3RhcnQgR2FtZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGgyPjxzcGFuIGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj5HVUFSRFM8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFycm93X3JpZ2h0PC9pPjwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udFwiPjxoMj5GaW5kIGFuZCBjbGljayB0aGUgXCJKb2luIEdhbWVcIiBidXR0b24gZm9yIHlvdXIgZ2FtZS48L2gyPjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICA8aDE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgdzMtcmlnaHRcIj5yZXBvcnRfcHJvYmxlbTwvaT48L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJteUNvbW1vbkZvbnRcIj5JZiB5b3UgbG9zdCBjb25uZWN0aW9uLCBmaW5kIGFuZCBjbGljayB0aGUgXCJSZWNvbm5lY3RcIiBidXR0b24gZm9yIHlvdXIgZ2FtZSBpZC48L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJteUNvbW1vbkZvbnRcIj48Yj5HYW1lIGxpc3Q6PC9iPjwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidzMtdGFibGUtYWxsIHczLWNhcmQtNFwiPlxyXG4gICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ3My1ibHVlIGg0IG15Q29tbW9uRm9udFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+R2FtZSBJRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5Qcmlzb25lcnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+R3VhcmRzPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlJhY2sgU2l6ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5HYW1lIFN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2dhbWVsaXN0Lm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2BPdGhlckdhbWUke2luZGV4fWB9IGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udCB3My1ob3Zlci1ncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj48Yj57dmFsdWUuZ2FtZWlkfTwvYj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIHthdmFpbGFibGVBY3Rpb25QKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uTm9uZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BQcmlzb25lcnNOb0FjdGlvbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+Tm8gYWN0aW9uIGF2YWlsYWJsZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBhdmFpbGFibGVBY3Rpb25QKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0ID9cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFByaXNvbmVyc1Jlam9pbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uIHczLXJlZCB3My1yb3VuZCB3My1ob3Zlci1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNyZWpvaW4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdQJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSYWNrc2l6ZSh2YWx1ZS5yYWNrc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBSZWNvbm5lY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgUHJpc29uZXJzU3RhcnQke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ1AnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7YXZhaWxhYmxlQWN0aW9uRyh2YWx1ZSkgPT09IGF2YWlsYWJsZUFjdGlvbk5vbmUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgR3VhcmRzTm9BY3Rpb24ke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPk5vIGFjdGlvbiBhdmFpbGFibGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDogYXZhaWxhYmxlQWN0aW9uRyh2YWx1ZSkgPT09IGF2YWlsYWJsZUFjdGlvblJlY29ubmVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHdWFyZHNSZWpvaW4ke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzcmVqb2luKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnRycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmFja3NpemUodmFsdWUucmFja3NpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjb25uZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YEd1YXJkc0pvaW4ke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ0cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJhY2tzaXplKHZhbHVlLnJhY2tzaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEpvaW4gR2FtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFJhY2tTaXplJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1jZW50ZXIgdzMtYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUucmFja3NpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHYW1lU3RhdHVzJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5nYW1lc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My10ZWFsXCI+XHJcbiAgICAgICAgPGgxPkhhdmUgZnVuITwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBTcXVhcmUgPSAocHJvcHMpID0+IHtcclxuICAvLyBzcXVhcmV1c2VkYnksIHJpLCBjaSwgYywgb25DbGlja1xyXG4gIC8vIG5lZWQgc3F1YXJldXNlZGJ5IHRvIHBpY2sgY3NzIGNsYXNzTmFtZSBjb3JyZXNwb25kaW5nIHRvIHdobyBwbGF5ZWQgdGhlIHRpbGUgb24gdGhlIHNxdWFyZVxyXG4gIC8vIG5lZWQgcmksIGNpIHRvIGRpc3BsYXkgYWx0ZXJuYXRpbmcgYmFja2dyb3VuZHMgb24gdW51c2VkIHNxdWFyZXNcclxuICAvLyBuZWVkIGMgdG8gcmVwcmVzZW50IHdoaWNoIHRpbGUgaXMgb24gdGhlIHNxdWFyZSwgaWYgYW55XHJcbiAgLy8gbmVlZCBvbkNsaWNrIHRvIGhhbmRsZSBzcXVhcmUgY2xpY2sgYXQgYSBoaWdoZXIgbGV2ZWxcclxuICAvLyBuZWVkIHJjZCB0byBkaXNwbGF5IHNlbGVjdGVkIGRpcmVjdGlvbiBhcnJvdyB3aGVuIGFwcHJvcHJpYXRlXHJcbiAgLy8gbmVlZCByYWNrc2l6ZSB0byBkZXRlcm1pbmUgY2VudHJlIGFuZCBib2FyZCBhYXJyeSBlZGdlIHBvc2l0aW9uc1xyXG4gIGNvbnN0IGVkZ2UgPSAocHJvcHMucmFja3NpemUgKiAyKTtcclxuICBjb25zdCBtaWRkbGUgPSBwcm9wcy5yYWNrc2l6ZTtcclxuICBjb25zdCB0ZGNsYXNzID1cclxuICAgIHByb3BzLmMgIT09IHNxdWFyZXVudXNlZFxyXG4gICAgICA/IFwicGJTcXVhcmVJbm5lciBQbGF5ZXJUaWxlXCJcclxuICAgICAgOiBwcm9wcy5yY2RbMF0gPT09IHByb3BzLnJpICYmIHByb3BzLnJjZFsxXSA9PT0gcHJvcHMuY2kgJiYgcHJvcHMucmNkWzJdID09PSBcInJcIlxyXG4gICAgICA/IFwicGJTcXVhcmVJbm5lciBSaWdodEFycm93XCJcclxuICAgICAgOiBwcm9wcy5yY2RbMF0gPT09IHByb3BzLnJpICYmIHByb3BzLnJjZFsxXSA9PT0gcHJvcHMuY2kgJiYgcHJvcHMucmNkWzJdID09PSBcImRcIlxyXG4gICAgICA/IFwicGJTcXVhcmVJbm5lciBEb3duQXJyb3dcIlxyXG4gICAgICA6IHByb3BzLnJpID09PSBtaWRkbGUgJiYgcHJvcHMuY2kgPT09IG1pZGRsZVxyXG4gICAgICA/IFwicGJTcXVhcmVJbm5lciBDZW50ZXJTcXVhcmVcIlxyXG4gICAgICA6IChwcm9wcy5yaSA9PT0gMCB8fCBwcm9wcy5yaSA9PT0gbWlkZGxlIHx8IHByb3BzLnJpID09PSBlZGdlKSAmJlxyXG4gICAgICAgIChwcm9wcy5jaSA9PT0gMCB8fCBwcm9wcy5jaSA9PT0gbWlkZGxlIHx8IHByb3BzLmNpID09PSBlZGdlKVxyXG4gICAgICA/IFwicGJTcXVhcmVJbm5lciBFc2NhcGVIYXRjaFwiXHJcbiAgICAgIDogcHJvcHMucmkgJSAyID09PSBwcm9wcy5jaSAlIDJcclxuICAgICAgPyBcInBiU3F1YXJlSW5uZXIgc3R5bGUxXCIgOiBcInBiU3F1YXJlSW5uZXIgc3R5bGUyXCI7IC8vIEFsdGVybmF0aW5nIHNxdWFyZSBzdHlsZXNcclxuICBjb25zdCB0ZHZhbHVlID1cclxuICAgIHByb3BzLmMgIT09IHNxdWFyZXVudXNlZFxyXG4gICAgICA/IHByb3BzLmNcclxuICAgICAgOiB0ZGNsYXNzLmluZGV4T2YoXCJSaWdodEFycm93XCIpID4gLTFcclxuICAgICAgPyBcIuKeoVwiXHJcbiAgICAgIDogdGRjbGFzcy5pbmRleE9mKFwiRG93bkFycm93XCIpID4gLTFcclxuICAgICAgPyBcIuKsh1wiXHJcbiAgICAgIDogdGRjbGFzcy5pbmRleE9mKFwiQ2VudGVyU3F1YXJlXCIpID4gLTFcclxuICAgICAgPyA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnN0YXJzPC9pPlxyXG4gICAgICA6IFwiLlwiIC8qIElmIEkgcHV0IGVtcHR5IHN0cmluZyBvciAmbmJzcDsgdGhlbiBpdCBhZmZlY3RzIHRoZSBkaXNwbGF5IG9kZGx5ICAqL1xyXG4gIHJldHVybiAoXHJcbiAgICB0ZGNsYXNzLmluZGV4T2YoXCJFc2NhcGVIYXRjaFwiKSA+IC0xID9cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXt0ZGNsYXNzfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ydW5fY2lyY2xlPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA6IHByb3BzLmMgPT09IHNxdWFyZXVudXNlZCA/XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0ZGNsYXNzfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICB7dGR2YWx1ZX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDpcclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RkY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcGJTcXVhcmVUaWxlVGV4dCAke3Byb3BzLnNxdWFyZXVzZWRieSArIChwcm9wcy5jID09PSBcIlFcIiA/IFwiIHVcIiA6IFwiXCIpfWB9Pnt0ZHZhbHVlfTwvZGl2PlxyXG4gICAgICA8L2J1dHRvbj5cclxuKTtcclxufTtcclxuXHJcbmNvbnN0IEJvYXJkID0gKHsgb25DbGljaywgc3F1YXJlcywgdXNlZGJ5LCByY2QsIHJhY2tzaXplIH0pID0+IHtcclxuICBjb25zdCByZW5kZXJTcXVhcmUgPSAocmksIGNpLCBjLCBzcXVhcmV1c2VkYnkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ZCBrZXk9e2BTcXVhcmUke3JpfS0ke2NpfWB9IGNsYXNzTmFtZT1cInBiU3F1YXJlT3V0ZXJcIj5cclxuICAgICAgICA8U3F1YXJlXHJcbiAgICAgICAgICBjPXtjfVxyXG4gICAgICAgICAgY2k9e2NpfVxyXG4gICAgICAgICAgcmk9e3JpfVxyXG4gICAgICAgICAgc3F1YXJldXNlZGJ5PXtzcXVhcmV1c2VkYnl9XHJcbiAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2socmksIGNpKX1cclxuICAgICAgICAgIHJhY2tzaXplPXtyYWNrc2l6ZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3RkPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlclJvdyA9IChyaSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRyIGtleT17YEJvYXJkUm93JHtyaX1gfSBjbGFzc05hbWU9XCJwYlJvd1wiPlxyXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkJvYXJkUm93SGVhZGVyXCIgaWQ9XCJCb2FyZEhlYWRlckxlZnRcIj5cclxuICAgICAgICAgIHtib2FyZFJvd0hlYWRlcnNbcmldfVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAge3NxdWFyZXNbcmldLm1hcCgoYywgY2kpID0+IHJlbmRlclNxdWFyZShyaSwgY2ksIGMsIHVzZWRieVtyaV1bY2ldKSl9XHJcbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQm9hcmRSb3dIZWFkZXJcIiBpZD1cIkJvYXJkSGVhZGVyUmlnaHRcIj5cclxuICAgICAgICAgIHtib2FyZFJvd0hlYWRlcnNbcmldfVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dGFibGUgY2xhc3NOYW1lPVwicGJCb2FyZFwiPlxyXG4gICAgICA8dGJvZHk+XHJcbiAgICAgICAgPHRyIGNsYXNzTmFtZT1cInBiQm9hcmRDb2x1bW5IZWFkZXJSb3dcIj5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkJvYXJkSGVhZGVyVG9wTGVmdFwiPiZuYnNwOzwvdGQ+XHJcbiAgICAgICAgICB7c3F1YXJlcy5tYXAoKF8kLGkpID0+IChcclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQm9hcmRDb2x1bW5IZWFkZXJcIiBrZXk9e2BUb3BDb2x1bW5IZWFkZXIke2l9YH0+XHJcbiAgICAgICAgICAgICAge2JvYXJkQ29sdW1uSGVhZGVyc1tpXX1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQm9hcmRIZWFkZXJUb3BSaWdodFwiPiZuYnNwOzwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICB7c3F1YXJlcy5tYXAoKHIsIHJpKSA9PiByZW5kZXJSb3cocmkpKX1cclxuICAgICAgICA8dHIgY2xhc3NOYW1lPVwicGJCb2FyZENvbHVtbkhlYWRlclJvd1wiIGlkPVwiQm9hcmRIZWFkZXJCb3R0b21cIj5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkJvYXJkSGVhZGVyQm90dG9tTGVmdFwiPiZuYnNwOzwvdGQ+XHJcbiAgICAgICAgICB7c3F1YXJlcy5tYXAoKF8kLGkpID0+IChcclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQm9hcmRDb2x1bW5IZWFkZXJcIiBrZXk9e2BCb3R0b21Db2x1bW5IZWFkZXIke2l9YH0+XHJcbiAgICAgICAgICAgICAge2JvYXJkQ29sdW1uSGVhZGVyc1tpXX1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQm9hcmRIZWFkZXJCb3R0b21SaWdodFwiPiZuYnNwOzwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEdhbWUgPSAoe2lzcmVqb2luLCBwcmlzb25lcnNPckd1YXJkcywgZ2FtZWlkLCBuaWNrbmFtZSwgd3NtZXNzYWdlLCBjbGllbnRcclxuICAsIHJhY2tzaXplIC8vIE9wdGlvbiBmb3IgcmFjayBzaXplXHJcbiAgfSkgPT4ge1xyXG4gIGNvbnN0IG1pZGRsZSA9IHJhY2tzaXplOyAvLyBNaWRkbGUgZWxlbWVudCBpbiByb3cgb3IgY29sdW1uIGFycmF5XHJcbiAgY29uc3QgZWRnZSA9IHJhY2tzaXplICogMjsgLy8gTGFzdCBlbGVtZW50IGluIHJvdyBvciBjb2x1bW4gYXJyYXlcclxuICBjb25zdCBpbml0aWFsdGlsZXMgPSByYWNrc2l6ZSA9PT0gNiA/IGluaXRpYWx0aWxlczYgOiByYWNrc2l6ZSA9PT0gNyA/IGluaXRpYWx0aWxlczcgOiByYWNrc2l6ZSA9PT0gNSA/IGluaXRpYWx0aWxlczUgOiBpbml0aWFsdGlsZXM0O1xyXG4gIGNvbnN0IGluaXRpYWxzcXVhcmVzID0gQXJyYXkoZWRnZSsxKS5maWxsKEFycmF5KGVkZ2UrMSkuZmlsbChzcXVhcmV1bnVzZWQpKTtcclxuICBjb25zdCBpbml0aWFsdXNlZGJ5ID0gQXJyYXkoZWRnZSsxKS5maWxsKEFycmF5KGVkZ2UrMSkuZmlsbCh1c2VkYnlub29uZSkpO1xyXG4gIGNvbnN0IFt0aWxlcywgc2V0VGlsZXNdID0gdXNlU3RhdGUoWy4uLmluaXRpYWx0aWxlc10pO1xyXG4gIGNvbnN0IFtwdGlsZXMsIHNldFB0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2d0aWxlcywgc2V0R3RpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3F1YXJlcywgc2V0U3F1YXJlc10gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHNxdWFyZXNdKTtcclxuICBjb25zdCBbdXNlZGJ5LCBzZXRVc2VkYnldID0gdXNlU3RhdGUoWy4uLmluaXRpYWx1c2VkYnldKTtcclxuICBjb25zdCBbc2VsZWN0aW9uLCBzZXRTZWxlY3Rpb25dID0gdXNlU3RhdGUoLTEpOyAvLyByZWxhdGl2ZSB0byByYWNrIG9mIHBsYXllciBtYWtpbmcgYSBwbGF5XHJcbiAgY29uc3QgW3dob3NldHVybiwgc2V0V2hvc2V0dXJuXSA9IHVzZVN0YXRlKFwiUFwiKTsgLy8gZ2FtZSBzdGFydHMgd2l0aCBwcmlzb25lcnMgcGxheVxyXG4gIGNvbnN0IFtjdXJyZW50Y29vcmRzLCBzZXRDdXJyZW50Y29vcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmVzY3Vlcywgc2V0UmVzY3Vlc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmNkLCBzZXRSY2RdID0gdXNlU3RhdGUoWy0xLC0xLG5vZGlyZWN0aW9uXSk7XHJcbiAgY29uc3QgW3Bhc3NlZCwgc2V0UGFzc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gdHJ1ZSB3aGVuIG9wcG9uZW50IGp1c3QgcGFzc2VkOyBpZiBib3RoIHBhc3MgdGhlIGdhbWUgZW5kc1xyXG4gIGNvbnN0IFttb3Zlcywgc2V0TW92ZXNdID0gdXNlU3RhdGUoW10pOyAvLyBtb3ZlIGhpc3RvcnksIGVhY2ggZWxlbWVudCBpcyB0aGUgYXJyYXkgaXMgYSBqc29uIG9iamVjdCBvZiBpbmZvIGFib3V0IHRoZSBtb3ZlXHJcbiAgY29uc3QgW3NuYXBzaG90LCBzZXRTbmFwc2hvdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBzcXVhcmVzOiBbLi4uaW5pdGlhbHNxdWFyZXNdLFxyXG4gICAgdXNlZGJ5OiBbLi4uaW5pdGlhbHVzZWRieV0sXHJcbiAgICBwdGlsZXM6IFtdLFxyXG4gICAgZ3RpbGVzOiBbXSxcclxuICB9KTtcclxuICBjb25zdCBbam9rZWluZGV4LCBzZXRKb2tlaW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2FsbG93UmV3aW5kLCBzZXRBbGxvd1Jld2luZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wcG5hbWUsIHNldE9wcG5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjaGF0bXNncywgc2V0Q2hhdG1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG5ld2ppID0gam9rZWluZGV4ICsgMTtcclxuICAgIGlmIChuZXdqaSA+PSBqb2tlcy5sZW5ndGgpIHtcclxuICAgICAgbmV3amkgPSAwO1xyXG4gICAgfVxyXG4gICAgc2V0Sm9rZWluZGV4KG5ld2ppKTtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAvLyBJZiBpdCBpcyBub3QgbXkgdHVybiAmJiB0aGUgZ2FtZSBoYXMgbm90IGVuZGVkXHJcbiAgICAgIGlmIChwcmlzb25lcnNPckd1YXJkcyAhPT0gd2hvc2V0dXJuICYmIHdob3NldHVybiAhPT0gXCJYXCIpIHtcclxuICAgICAgICAvLyBJIGFtIHdhaXRpbmcgZm9yIG9wcG9uZW50IG1vdmUgdG8gY29tZSB0aHJvdWdoIGJ1dCBzb21ldGltZXMgaXQgZ2V0cyBtaXNzZWQgKG5vIGlkZWEgd2h5KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJ2YWw6IHByaXNvbmVyc09yR3VhcmRzPVwiICsgcHJpc29uZXJzT3JHdWFyZHMgKyBcIiB3aG9zZXR1cm49XCIgKyB3aG9zZXR1cm4gKyBcIiBhdCBcIiArIERhdGUoKS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICByZXF1ZXN0R2FtZURhdGEoKTsgLy8gU2VuZCBhIHJlcXVlc3QgZm9yIGdhbWUgZGF0YSBpbiBjYXNlIG9wcG9uZW50IG1vdmVkIGFuZCB3ZSBtaXNzZWQgdGhlIHVwZGF0ZVxyXG4gICAgICB9XHJcbiAgICB9LCBtb3Zld2FpdHRpbWUpOyAvLyB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzIGJldHdlZW4gYWJvdmUgY29kZSBibG9jayBleGVjdXRpb25zXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW3dob3NldHVybl0pOyAvLyB3YW50IHVwIHRvIGRhdGUgdmFsdWUgb2Ygd2hvc2V0dXJuIHRvIGRlY2lkZSB3aGV0aGVyIHRvIGFzayBmb3IgYW4gdXBkYXRlXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7IC8vIFRoaXMgY29kZSBleGVjdXRlcyBmaXJzdCB0aW1lIEdhbWUgaXMgdXNlZCBvbmx5XHJcbiAgICBpZiAoIWlzcmVqb2luICYmIHByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIikgeyAvLyBQcmlzb25lciBpcyBzdGFydGluZyB0aGUgZ2FtZSBzbyBwaWNrIHJhY2tzXHJcbiAgICAgIGxldCB0ZW1wUFRpbGVzID0gW107XHJcbiAgICAgIGxldCB0ZW1wR1RpbGVzID0gW107XHJcbiAgICAgIGxldCB0ZW1wVGlsZXMgPSBbLi4uaW5pdGlhbHRpbGVzXTtcclxuICAgICAgd2hpbGUgKHRlbXBQVGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIHRlbXBQVGlsZXMucHVzaCh0ZW1wVGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIHRlbXBHVGlsZXMucHVzaCh0ZW1wVGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdGVtcFBUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHRlbXBHVGlsZXMuc29ydCgpO1xyXG4gICAgICBzZXRHdGlsZXModGVtcEdUaWxlcyk7XHJcbiAgICAgIHNldFB0aWxlcyh0ZW1wUFRpbGVzKTtcclxuICAgICAgc2V0VGlsZXModGVtcFRpbGVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZXM6IFsuLi5pbml0aWFsc3F1YXJlc10sXHJcbiAgICAgICAgdXNlZGJ5OiBbLi4uaW5pdGlhbHVzZWRieV0sXHJcbiAgICAgICAgcHRpbGVzOiBbLi4udGVtcFBUaWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4udGVtcEdUaWxlc10gICAgXHJcbiAgICAgIH0pO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsXHJcbiAgICAgICAgICBmdW5jOiBcImhlbGxvXCIsXHJcbiAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sXHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAvLyBQcmlzb25lciByZWpvaW4gb3IgZ3VhcmQgam9pbiBvciBndWFyZCByZWpvaW5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcInJlcXVlc3RnYW1lZGF0YVwiLCAvLyByZXF1ZXN0IGdhbWUgZGF0YVxyXG4gICAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIHt9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NHYW1lTWVzc2FnZShtc2cpOyAgICAgIFxyXG4gIH0sW3dzbWVzc2FnZV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNjcm9sbFRvQm90dG9tKFwiU2Nyb2xsYWJsZU1vdmVzXCIpO1xyXG4gIH0sW21vdmVzXSlcclxuXHJcbiAgZnVuY3Rpb24gcHV0QXRNb3ZlU3RhcnQoKSB7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0QWxsb3dSZXdpbmQoZmFsc2UpO1xyXG4gICAgc2V0UmNkKC0xLC0xLG5vZGlyZWN0aW9uKTtcclxuICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcHJvY2Vzc0dhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gXCJhbm5vdW5jZVwiKSB7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHR5cGU6IFwicGJcIixcclxuICAgICAgICAgIGZ1bmM6IFwiaGVsbG9cIixcclxuICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybixcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChtZXNzYWdlRGF0YS5nYW1laWQgPT09IGdhbWVpZCAmJiBtZXNzYWdlRGF0YS50eXBlID09PSBcInBiXCIpIHsgLy8gVGhpcyBpbnN0YW5jZSBvZiBhIHByaXNvbiBicmVhayBnYW1lXHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5zZW5kZXIgIT0gcHJpc29uZXJzT3JHdWFyZHMgJiYgb3BwbmFtZSA9PT0gXCJcIiAmJiBtZXNzYWdlRGF0YS5uaWNrbmFtZSAmJiBtZXNzYWdlRGF0YS5uaWNrbmFtZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gT3Bwb25lbnQgc2VudCBhIG1lc3NhZ2UgaW5jbHVkaW5nIHRoZWlyIG5pY2tuYW1lIGFuZCBJIGRvbid0IGhhdmUgdGhlaXIgbmlja25hbWUgeWV0XHJcbiAgICAgICAgc2V0T3BwbmFtZShtZXNzYWdlRGF0YS5uaWNrbmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicmVxdWVzdGdhbWVkYXRhXCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9PSBwcmlzb25lcnNPckd1YXJkcykgeyAvLyBPcHBvbmVudCByZXF1ZXN0ZWQgZ2FtZSBpbmZvXHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJwcm92aWRlZ2FtZWRhdGFcIiwgLy8gcHJvdmlkZSBnYW1lIGRhdGFcclxuICAgICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICAgICAgdGlsZXM6IHRpbGVzLFxyXG4gICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgICAgICBwdGlsZXM6IHB0aWxlcyxcclxuICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMsXHJcbiAgICAgICAgICAgIHVzZWRieTogdXNlZGJ5LFxyXG4gICAgICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybixcclxuICAgICAgICAgICAgc25hcHNob3Q6IHNuYXBzaG90LFxyXG4gICAgICAgICAgICBwYXNzZWQ6IHBhc3NlZCxcclxuICAgICAgICAgICAgbW92ZXM6IG1vdmVzLFxyXG4gICAgICAgICAgICByZXNjdWVzOiByZXNjdWVzLFxyXG4gICAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICAgIGFsbG93UmV3aW5kOiBhbGxvd1Jld2luZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVnYW1lZGF0YVwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcHJpc29uZXJzT3JHdWFyZHMgJiYgd2hvc2V0dXJuICE9PSBwcmlzb25lcnNPckd1YXJkcyAmJiB3aG9zZXR1cm4gIT09IFwiWFwiKSB7IFxyXG4gICAgICAgIC8vIG9wcG9uZW50IHByb3ZpZGVkIGdhbWUgZGF0YSBhbmQgdGhpcyBwbGF5ZXIgaXMgc3RpbGwgd2FpdGluZyB0byBzZWUgb3Bwb25lbnQgbW92ZVxyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgIHNldFNuYXBzaG90KG1lc3NhZ2VEYXRhLnNuYXBzaG90KTtcclxuICAgICAgICBzZXRQYXNzZWQobWVzc2FnZURhdGEucGFzc2VkKTtcclxuICAgICAgICBzZXRNb3ZlcyhtZXNzYWdlRGF0YS5tb3Zlcyk7XHJcbiAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgICBzZXRBbGxvd1Jld2luZChtZXNzYWdlRGF0YS5hbGxvd1Jld2luZCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiZXB0XCIgJiYgcHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiKSB7IC8vIFByaXNvbmVycyBzZW50IGVuZCBwcmlzb25lcnMgdHVybiwgR3VhcmRzIHBpY2sgaXQgdXBcclxuICAgICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFBhc3NlZChtZXNzYWdlRGF0YS5wYXNzZWQpO1xyXG4gICAgICAgIHNldE1vdmVzKG1lc3NhZ2VEYXRhLm1vdmVzKTtcclxuICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICAgIHNxdWFyZXM6IFsuLi5tZXNzYWdlRGF0YS5zcXVhcmVzXSxcclxuICAgICAgICAgIHVzZWRieTogWy4uLm1lc3NhZ2VEYXRhLnVzZWRieV0sXHJcbiAgICAgICAgICBwdGlsZXM6IFsuLi5tZXNzYWdlRGF0YS5wdGlsZXNdLFxyXG4gICAgICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJlZ3RcIiAmJiBwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIpIHsgLy8gR3VhcmRzIHNlbnQgZW5kIGd1YXJkcyB0dXJuLCBQcmlzb25lcnMgcGljayBpdCB1cFxyXG4gICAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0UGFzc2VkKG1lc3NhZ2VEYXRhLnBhc3NlZCk7XHJcbiAgICAgICAgc2V0TW92ZXMobWVzc2FnZURhdGEubW92ZXMpO1xyXG4gICAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICAgIHNxdWFyZXM6IFsuLi5tZXNzYWdlRGF0YS5zcXVhcmVzXSxcclxuICAgICAgICAgIHVzZWRieTogWy4uLm1lc3NhZ2VEYXRhLnVzZWRieV0sXHJcbiAgICAgICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICAgICAgZ3RpbGVzOiBbLi4ubWVzc2FnZURhdGEuZ3RpbGVzXSxcclxuICAgICAgICB9KTsgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwidW5kb3R1cm5cIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHByaXNvbmVyc09yR3VhcmRzKSB7IFxyXG4gICAgICAgIC8vIG9wcG9uZW50IHVuZGlkIHRoZWlyIGxhc3QgdHVyblxyXG4gICAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgICBzZXRQYXNzZWQobWVzc2FnZURhdGEucGFzc2VkKTtcclxuICAgICAgICBzZXRNb3ZlcyhtZXNzYWdlRGF0YS5tb3Zlcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3QobWVzc2FnZURhdGEuc25hcHNob3QpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImFsbG93dW5kb1wiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcHJpc29uZXJzT3JHdWFyZHMpIHtcclxuICAgICAgICAvLyBPcHBvbmVudCBjbGlja2VkIGJ1dHRvbiB0byBhbGxvdyB1bmRvIHR1cm5cclxuICAgICAgICBzZXRBbGxvd1Jld2luZCh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJjaGF0XCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9IHByaXNvbmVyc09yR3VhcmRzKSB7IC8vIE9wcG9uZW50IGNoYXQgbWVzc2FnZVxyXG4gICAgICAgIGxldCBuZXdDaGF0bXNncyA9IFsuLi5jaGF0bXNncywge2Zyb206IG1lc3NhZ2VEYXRhLm5pY2tuYW1lLCBtc2c6IG1lc3NhZ2VEYXRhLnNlbmRtc2d9XTtcclxuICAgICAgICBzZXRDaGF0bXNncyhuZXdDaGF0bXNncyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gQ2FsbGluZyBzZXRTZWxlY3Rpb24gKGZyb20gaGFuZGxlS2V5RG93bikgdGhlbiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIGRvZXMgbm90IGxldCBpdCByZWNvZ25pemUgc2VsZWN0aW9uIHdpdGggdGhlIG5ldyB2YWx1ZVxyXG4gIC8vIFNvIEkgcGFzcyBuZXdTZWxlY3Rpb24gd2hlbiBJIHdhbnQgdG8gYWxzbyBzZXQgaXQsIG90aGVyd2lzZSBJIHBhc3MgLTEgdG8gaW5zdHJ1Y3QgaXQgdG8gdXNlIGN1cnJlbnQgdmFsdWUgb2Ygc2VsZWN0aW9uXHJcbiAgLy8gQWxzbyBwYXNzaW5nIG5ld1JjZFxyXG4gIGNvbnN0IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgPSAocmksIGNpLCBuZXdTZWxlY3Rpb24sIG5ld1JjZCkgPT4ge1xyXG4gICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICBsZXQgbmV3VXNlZGJ5ID0gWy4uLnVzZWRieV07XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbmV3Um93ID0gWy4uLnNxdWFyZXNbcmldXTtcclxuICAgIGxldCBzcXVhcmV2YWx1ZSA9IHNxdWFyZXNbcmldW2NpXTtcclxuICAgIGxldCBuZXdDdXJyZW50Y29vcmRzID0gWy4uLmN1cnJlbnRjb29yZHNdO1xyXG4gICAgbGV0IGNvb3JkID0gU3RyaW5nKHJpKSArIFwiLVwiICsgU3RyaW5nKGNpKTtcclxuICAgIGxldCBjY2kgPSBjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpO1xyXG4gICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICBuZXdSY2QgPSByY2Q7XHJcbiAgICB9XHJcbiAgICBpZiAobmV3U2VsZWN0aW9uID4gLTEgJiYgc3F1YXJldmFsdWUgPT09IHNxdWFyZXVudXNlZCkgeyAvLyB0aWxlIGlzIHNlbGVjdGVkIGZyb20gcmFjayBhbmQgY2xpY2tlZCBzcXVhcmUgaXMgbm90IHVzZWQgeWV0XHJcbiAgICAgIG5ld1Jvd1tjaV0gPVxyXG4gICAgICAgIHdob3NldHVybiA9PT0gXCJQXCIgPyBuZXdQdGlsZXNbbmV3U2VsZWN0aW9uXSA6IG5ld0d0aWxlc1tuZXdTZWxlY3Rpb25dO1xyXG4gICAgICBuZXdTcXVhcmVzW3JpXSA9IFsuLi5uZXdSb3ddO1xyXG4gICAgICB3aG9zZXR1cm4gPT09IFwiUFwiXHJcbiAgICAgICAgPyBuZXdQdGlsZXMuc3BsaWNlKG5ld1NlbGVjdGlvbiwgMSlcclxuICAgICAgICA6IG5ld0d0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKTtcclxuICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi5uZXdVc2VkYnlbcmldXTtcclxuICAgICAgbmV3VXNlZGJ5Um93W2NpXSA9IHdob3NldHVybjtcclxuICAgICAgbmV3VXNlZGJ5W3JpXSA9IFsuLi5uZXdVc2VkYnlSb3ddO1xyXG4gICAgICBpZiAod2hvc2V0dXJuID09PSBcIlBcIiAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld1B0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uIC0gMVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh3aG9zZXR1cm4gPT09IFwiR1wiICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3R3RpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgIH1cclxuICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMoWy4uLmN1cnJlbnRjb29yZHMsIGNvb3JkXSk7XHJcbiAgICAgIHNldFJjZChuZXdSY2QpOyAvLyBrZXkgZG93biBoYW5kbGVyIGZpZ3VyZWQgaXQgb3V0XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChjY2kgPiAtMSkgeyAvLyBjbGlja2VkIHNxdWFyZSBoYXMgYSB0aWxlIG9uIGl0IGZyb20gdGhlIGN1cnJlbnQgbW92ZSBpbiBwcm9ncmVzc1xyXG4gICAgICB3aG9zZXR1cm4gPT09IFwiUFwiXHJcbiAgICAgICAgPyBuZXdQdGlsZXMucHVzaChzcXVhcmV2YWx1ZSlcclxuICAgICAgICA6IG5ld0d0aWxlcy5wdXNoKHNxdWFyZXZhbHVlKTtcclxuICAgICAgbGV0IG5ld1JvdyA9IFsuLi5uZXdTcXVhcmVzW3JpXV07XHJcbiAgICAgIG5ld1Jvd1tjaV0gPSBzcXVhcmV1bnVzZWQ7XHJcbiAgICAgIG5ld1NxdWFyZXNbcmldID0gWy4uLm5ld1Jvd107XHJcbiAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4ubmV3VXNlZGJ5W3JpXV07XHJcbiAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSB1c2VkYnlub29uZTtcclxuICAgICAgbmV3VXNlZGJ5W3JpXSA9IFsuLi5uZXdVc2VkYnlSb3ddO1xyXG4gICAgICBzZXRTZWxlY3Rpb24oXHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBcIlBcIiA/IG5ld1B0aWxlcy5sZW5ndGggLSAxIDogbmV3R3RpbGVzLmxlbmd0aCAtIDFcclxuICAgICAgKTtcclxuICAgICAgbmV3Q3VycmVudGNvb3Jkcy5zcGxpY2UoY2NpLCAxKTtcclxuXHJcbiAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgIHNldFJjZCgtMSwtMSxub2RpcmVjdGlvbik7IC8vIG1ha2UgcGxheWVyIGNsaWNrIGFnYWluIHRvIHNldCBkaXJlY3Rpb25cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcGxhY2UgYSBzZWxlY3RlZCB0aWxlIHRoZXJlXHJcbiAgICAvLyBUaGV5IGRpZG4ndCBjbGljayBhIHNxdWFyZSB0byByZW1vdmUgYW4gZXhpc3RpbmcgdGlsZVxyXG4gICAgaWYgKHNxdWFyZXNbcmldW2NpXSA9PT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgIC8vIFRoZXJlIGlzIG5vdGhpbmcgb24gdGhlIHNxdWFyZSBzbyB0aGV5IGFyZSBwaWNraW5nIHdoZXJlIHRvIHBsYWNlIHRoZSBuZXh0IHRpbGUgdmlhIGtleWJvYXJkXHJcbiAgICAgIGxldCBuZXdEaXJlY3Rpb24gPSByY2RbMF0gIT09IHJpIHx8IHJjZFsxXSAhPT0gY2kgPyBcInJcIiA6IC8vY2xpY2sgbmV3IHNxdWFyZSwgc3RhcnQgd2l0aCBcInJcIlxyXG4gICAgICAgcmNkWzJdID09PSBcInJcIiA/IFwiZFwiIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBcInJcIiwgY2hhbmdlIHRvIFwiZFwiXHJcbiAgICAgICByY2RbMl0gPT09IFwiZFwiID8gbm9kaXJlY3Rpb24gOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIFwiZFwiLCBjaGFuZ2UgdG8gbm9kaXJlY3Rpb25cclxuICAgICAgIFwiclwiOyAvLyBjbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBub2RpcmVjdGlvbiwgY2hhbmdlIHRvIFwiclwiXHJcbiAgICAgIG5ld1JjZCA9IFtyaSxjaSxuZXdEaXJlY3Rpb25dO1xyXG4gICAgICBzZXRSY2QobmV3UmNkKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByaXNvbmVyVGlsZUNsaWNrID0gKHRpbGVpbmRleCkgPT4ge1xyXG4gICAgLy8gdGhlIGluZGV4IG9mIHB0aWxlc1xyXG4gICAgaWYgKHdob3NldHVybiA9PT0gXCJQXCIpIHtcclxuICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbiA9PT0gdGlsZWluZGV4ID8gLTEgOiB0aWxlaW5kZXg7XHJcbiAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJJdCBpcyBub3QgeW91ciB0dXJuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUd1YXJkVGlsZUNsaWNrID0gKHRpbGVpbmRleCkgPT4ge1xyXG4gICAgLy8gdGhlIGluZGV4IG9mIGd0aWxlc1xyXG4gICAgaWYgKHdob3NldHVybiA9PT0gXCJHXCIpIHtcclxuICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbiA9PT0gdGlsZWluZGV4ID8gLTEgOiB0aWxlaW5kZXg7XHJcbiAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJJdCBpcyBub3QgeW91ciB0dXJuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVuZFByaXNvbmVyc1R1cm4gPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlzUGxheVZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHJld2luZEluZm8gPSBnZXRSZXdpbmRJbmZvKCk7XHJcbiAgICBsZXQgbmV3UmVzY3VlcyA9IHJlc2N1ZXM7XHJcbiAgICBsZXQgZXNjYXBlaGF0Y2hlcyA9IFtcclxuICAgICAgXCIwLTBcIixcclxuICAgICAgXCIwLVwiICsgbWlkZGxlLFxyXG4gICAgICBcIjAtXCIgKyBlZGdlLFxyXG4gICAgICBtaWRkbGUrIFwiLTBcIixcclxuICAgICAgbWlkZGxlICsgXCItXCIgKyBlZGdlLFxyXG4gICAgICBlZGdlICsgXCItMFwiLFxyXG4gICAgICBlZGdlICsgXCItXCIgKyBtaWRkbGUsXHJcbiAgICAgIGVkZ2UgKyBcIi1cIiArIGVkZ2VcclxuICAgIF07IC8vIGNvb3JkcyBvZiBlc2NhcGUgaGF0Y2hlc1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50Y29vcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChlc2NhcGVoYXRjaGVzLmluZGV4T2YoY3VycmVudGNvb3Jkc1tpXSkgPiAtMSkge1xyXG4gICAgICAgIG5ld1Jlc2N1ZXMgPSBuZXdSZXNjdWVzICsgMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdQdGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld1B0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3UHRpbGVzLnNvcnQoKTtcclxuICAgIGxldCBuZXdXaG9zZXR1cm4gPSBuZXdQdGlsZXMubGVuZ3RoID4gMCA/IFwiR1wiIDogXCJYXCI7IC8vIFggPSBnYW1lIG92ZXJcclxuICAgIGlmICh1c2VkYnlbMF1bMF0gICAgICAgICAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICB1c2VkYnlbMF1bbWlkZGxlXSAgICAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICB1c2VkYnlbMF1bZWRnZV0gICAgICAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICB1c2VkYnlbbWlkZGxlXVswXSAgICAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICB1c2VkYnlbbWlkZGxlXVtlZGdlXSAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICB1c2VkYnlbZWRnZV1bMF0gICAgICAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICB1c2VkYnlbZWRnZV1bbWlkZGxlXSAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICB1c2VkYnlbZWRnZV1bZWRnZV0gICAhPT0gdXNlZGJ5bm9vbmUpIHtcclxuICAgICAgbmV3V2hvc2V0dXJuID0gXCJYXCI7IC8vIE5vIGVzY2FwZSBoYXRjaGVzIGxlZnRcclxuICAgIH1cclxuICAgIGxldCBwbGF5aW5mbyA9IGdldFBsYXlJbmZvKCk7XHJcbiAgICBsZXQgbmV3TW92ZSA9IHtieTogXCJQXCIsIHR5cGU6IFwiUExBWVwiLCByZXdpbmRJbmZvOiByZXdpbmRJbmZvLCBtYWlud29yZDogcGxheWluZm8ubWFpbndvcmQsIGV4dHJhd29yZHM6IHBsYXlpbmZvLmV4dHJhd29yZHMsIHBvczogcGxheWluZm8ucG9zfTtcclxuICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFBhc3NlZChmYWxzZSk7XHJcbiAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICBzZXRSZXNjdWVzKG5ld1Jlc2N1ZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnVzZWRieV0sXHJcbiAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc10sXHJcbiAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIHVzZWRieTogdXNlZGJ5LCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZSAod2hvc2V0dXJuPVgpXHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIHBhc3NlZDogZmFsc2UsIC8vIGRpZCBub3QganVzdCBwYXNzXHJcbiAgICAgICAgbW92ZXM6IG5ld01vdmVzLCAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICByZXNjdWVzOiBuZXdSZXNjdWVzIC8vIG1heSBoYXZlIHJlc2N1ZWQgYW5vdGhlciBwcmlzb25lclxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBlbmRHdWFyZHNUdXJuID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdHdGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld0d0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3R3RpbGVzLnNvcnQoKTtcclxuICAgIGxldCBzbmFwc3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgIGxldCBzbmFwdXNlZGJ5ID0gWy4uLnVzZWRieV07XHJcbiAgICBsZXQgc25hcHB0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgbGV0IHNuYXBndGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgIGxldCBuZXdXaG9zZXR1cm4gPSBuZXdHdGlsZXMubGVuZ3RoID4gMCA/IFwiUFwiIDogXCJYXCI7IC8vIFggPSBnYW1lIG92ZXJcclxuICAgIGlmICh1c2VkYnlbMF1bMF0gICAgICAgICAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICB1c2VkYnlbMF1bbWlkZGxlXSAgICAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICB1c2VkYnlbMF1bZWRnZV0gICAgICAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICB1c2VkYnlbbWlkZGxlXVswXSAgICAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICB1c2VkYnlbbWlkZGxlXVtlZGdlXSAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICB1c2VkYnlbZWRnZV1bMF0gICAgICAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICB1c2VkYnlbZWRnZV1bbWlkZGxlXSAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICB1c2VkYnlbZWRnZV1bZWRnZV0gICAhPT0gdXNlZGJ5bm9vbmUpIHtcclxuICAgICAgbmV3V2hvc2V0dXJuID0gXCJYXCI7IC8vIE5vIGVzY2FwZSBoYXRjaGVzIGxlZnRcclxuICAgIH1cclxuICAgIGxldCBwbGF5aW5mbyA9IGdldFBsYXlJbmZvKCk7XHJcbiAgICBsZXQgbmV3TW92ZSA9IHtieTogXCJHXCIsIHR5cGU6IFwiUExBWVwiLCByZXdpbmRJbmZvOiByZXdpbmRJbmZvLCBtYWlud29yZDogcGxheWluZm8ubWFpbndvcmQsIGV4dHJhd29yZHM6IHBsYXlpbmZvLmV4dHJhd29yZHMsIHBvczogcGxheWluZm8ucG9zfTtcclxuICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFBhc3NlZChmYWxzZSk7XHJcbiAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IHNuYXBzcXVhcmVzLFxyXG4gICAgICB1c2VkYnk6IHNuYXB1c2VkYnksXHJcbiAgICAgIHB0aWxlczogc25hcHB0aWxlcyxcclxuICAgICAgZ3RpbGVzOiBzbmFwZ3RpbGVzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgc3F1YXJlczogc3F1YXJlcywgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICB1c2VkYnk6IHVzZWRieSwgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgZ3VhcmRzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICBwYXNzZWQ6IGZhbHNlLCAvLyBkaWQgbm90IGp1c3QgcGFzc1xyXG4gICAgICAgIG1vdmVzOiBuZXdNb3ZlcywgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lICh3aG9zZXR1cm49WClcclxuICAgICAgICByYWNrc2l6ZTogcmFja3NpemUgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgY29uc3Qgc3dhcFByaXNvbmVyc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgaWYgKHRpbGVzLmxlbmd0aCA8IHJhY2tzaXplKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIk5lZWQgXCIgKyByYWNrc2l6ZSArIFwiIHRpbGVzIGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHJld2luZEluZm8gPSBnZXRSZXdpbmRJbmZvKCk7XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gW107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3UHRpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdQdGlsZXMuc29ydCgpO1xyXG4gICAgbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90LnB0aWxlc107XHJcbiAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICBsZXQgbmV3TW92ZSA9IHtieTogXCJQXCIsIHR5cGU6IFwiU1dBUFwiLCByZXdpbmRJbmZvOiByZXdpbmRJbmZvfTtcclxuICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgc2V0U3F1YXJlcyhbLi4uc25hcHNob3Quc3F1YXJlc10pO1xyXG4gICAgc2V0VXNlZGJ5KFsuLi5zbmFwc2hvdC51c2VkYnldKTtcclxuICAgIHNldFdob3NldHVybihcIkdcIik7XHJcbiAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFBhc3NlZChmYWxzZSk7XHJcbiAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zbmFwc2hvdC5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4uc25hcHNob3QudXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHdob3NldHVybjogXCJHXCIsIC8vIHN3YXAgbmV2ZXIgZW5kcyB0aGUgZ2FtZSBzbyBnbyB0byBvcHBvbmVudFxyXG4gICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICBwYXNzZWQ6IGZhbHNlLCAvLyBkaWQgbm90IGp1c3QgcGFzc1xyXG4gICAgICAgIG1vdmVzOiBuZXdNb3ZlcywgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBubyByZXNjdWVzIG9uIGFuIGV4Y2hhbmdlXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgY29uc3Qgc3dhcEd1YXJkc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgaWYgKHRpbGVzLmxlbmd0aCA8IHJhY2tzaXplKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIk5lZWQgXCIgKyByYWNrc2l6ZSArIFwiIHRpbGVzIGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHJld2luZEluZm8gPSBnZXRSZXdpbmRJbmZvKCk7XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gW107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld0d0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90Lmd0aWxlc107XHJcbiAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICBsZXQgbmV3TW92ZSA9IHtieTogXCJHXCIsIHR5cGU6IFwiU1dBUFwiLCByZXdpbmRJbmZvOiByZXdpbmRJbmZvfTtcclxuICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgc2V0U3F1YXJlcyhbLi4uc25hcHNob3Quc3F1YXJlc10pO1xyXG4gICAgc2V0VXNlZGJ5KFsuLi5zbmFwc2hvdC51c2VkYnldKTtcclxuICAgIHNldFdob3NldHVybihcIlBcIik7XHJcbiAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFBhc3NlZChmYWxzZSk7XHJcbiAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zbmFwc2hvdC5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4uc25hcHNob3QudXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4ubmV3R3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHdob3NldHVybjogXCJQXCIsIC8vIHN3YXAgbmV2ZXIgZW5kcyB0aGUgZ2FtZSBzbyBnbyB0byBvcHBvbmVudFxyXG4gICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICBwYXNzZWQ6IGZhbHNlLCAvLyBkaWQgbm90IGp1c3QgcGFzc1xyXG4gICAgICAgIG1vdmVzOiBuZXdNb3ZlcyAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNQbGF5VmFsaWQoKSB7XHJcbiAgICBpZiAoc3F1YXJlc1ttaWRkbGVdW21pZGRsZV0gPT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJGaXJzdCBwbGF5IG11c3QgaGl0IGNlbnRlciBzcXVhcmVcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBudW1yb3dzID0gZWRnZSsxO1xyXG4gICAgbGV0IG51bWNvbHMgPSBlZGdlKzE7XHJcbiAgICBsZXQgbG93cm93ID0gbnVtcm93cztcclxuICAgIGxldCBoaWdocm93ID0gLTE7XHJcbiAgICBsZXQgbG93Y29sID0gbnVtY29scztcclxuICAgIGxldCBoaWdoY29sID0gLTE7XHJcbiAgICBmb3IgKHZhciByPTA7IHIgPCBudW1yb3dzOyArK3IpIHtcclxuICAgICAgZm9yICh2YXIgYz0wOyBjIDwgbnVtY29sczsgKytjKSB7XHJcbiAgICAgICAgaWYgKHNxdWFyZXNbcl1bY10gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgICAgaWYgKCEociA+IDAgJiYgc3F1YXJlc1tyLTFdW2NdICE9PSBzcXVhcmV1bnVzZWQpICYmXHJcbiAgICAgICAgICAgIShjID4gMCAmJiBzcXVhcmVzW3JdW2MtMV0gIT09IHNxdWFyZXVudXNlZCkgJiZcclxuICAgICAgICAgICAhKHIgPCBlZGdlICYmIHNxdWFyZXNbcisxXVtjXSAhPT0gc3F1YXJldW51c2VkKSAmJlxyXG4gICAgICAgICAgICEoYyA8IGVkZ2UgJiYgc3F1YXJlc1tyXVtjKzFdICE9PSBzcXVhcmV1bnVzZWQpXHJcbiAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkVhY2ggcGxheWVkIHRpbGUgbXVzdCBiZSBwYXJ0IG9mIGEgd29yZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBpZiAoc25hcHNob3Quc3F1YXJlc1tyXVtjXSA9PT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICAgICAvLyBUaGlzIHNxdWFyZSB3YXMgcGxheWVkIG9uIHRoaXMgdHVyblxyXG4gICAgICAgICAgICAgaWYgKHIgPCBsb3dyb3cpIHsgbG93cm93ID0gcjt9XHJcbiAgICAgICAgICAgICBpZiAociA+IGhpZ2hyb3cpIHsgaGlnaHJvdyA9IHI7fVxyXG4gICAgICAgICAgICAgaWYgKGMgPCBsb3djb2wpIHsgbG93Y29sID0gYzt9XHJcbiAgICAgICAgICAgICBpZiAoYyA+IGhpZ2hjb2wpIHsgaGlnaGNvbCA9IGM7fVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChsb3dyb3cgPT09IG51bXJvd3MpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiWW91IGRpZG4ndCBwbGF5IGFueSB0aWxlc1wiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvd3JvdyAhPT0gaGlnaHJvdyAmJiBsb3djb2wgIT09IGhpZ2hjb2wpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiVGlsZXMgcGxheWVkIG11c3QgYmUgaW4gYSBzdHJhaWdodCBsaW5lXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgcGxheXRocnUgPSBmYWxzZTtcclxuICAgIGxldCBob29rbWFkZSA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgciA9IGxvd3JvdzsgciA8PSBoaWdocm93OyArK3IpIHtcclxuICAgICAgZm9yICh2YXIgYyA9IGxvd2NvbDsgYyA8PSBoaWdoY29sOyArK2MpIHtcclxuICAgICAgICBpZiAoc3F1YXJlc1tyXVtjXSA9PT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaGVyZSBpcyBhIGdhcCBpbiB5b3VyIHdvcmRcIik7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzbmFwc2hvdC5zcXVhcmVzW3JdW2NdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgIHBsYXl0aHJ1ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiByID4gMCAmJiBzcXVhcmVzW3ItMV1bY10gIT09IHNxdWFyZXVudXNlZCkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHIgPCBlZGdlICYmIHNxdWFyZXNbcisxXVtjXSAhPT0gc3F1YXJldW51c2VkKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgYyA+IDAgJiYgc3F1YXJlc1tyXVtjLTFdICE9PSBzcXVhcmV1bnVzZWQpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBjIDwgZWRnZSAmJiBzcXVhcmVzW3JdW2MrMV0gIT09IHNxdWFyZXVudXNlZCkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2sgcGxheSB0byBvciBmcm9tIGEgdGlsZSAocGxheSB0aHJvdWdoIGJ1dCBub3QgZWl0aGVyIHNpZGUpXHJcbiAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGxvd2NvbCA+IDAgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ddW2xvd2NvbC0xXSAhPT0gc3F1YXJldW51c2VkKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBoaWdoY29sIDwgZWRnZSAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvd11baGlnaGNvbCsxXSAhPT0gc3F1YXJldW51c2VkKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBsb3dyb3cgPiAwICYmIHNuYXBzaG90LnNxdWFyZXNbbG93cm93LTFdW2xvd2NvbF0gIT09IHNxdWFyZXVudXNlZCkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgaGlnaHJvdyA8IGVkZ2UgJiYgc25hcHNob3Quc3F1YXJlc1toaWdocm93KzFdW2xvd2NvbF0gIT09IHNxdWFyZXVudXNlZCkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmICghcGxheXRocnUgJiYgIWhvb2ttYWRlICYmIHNuYXBzaG90LnNxdWFyZXNbbWlkZGxlXVttaWRkbGVdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiV29yZHMgbXVzdCBiZSBjb25uZWN0ZWRcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0UGxheUluZm8oKSB7XHJcbiAgICBsZXQgcGxheWluZm8gPSB7fTtcclxuICAgIGxldCBtYWlud29yZCA9IFwiXCI7XHJcbiAgICBsZXQgZXh0cmF3b3JkcyA9IFtdO1xyXG4gICAgbGV0IHdvcmRzdGFydGNvb3JkID0gXCJcIjtcclxuICAgIGxldCBudW1yb3dzID0gZWRnZSsxO1xyXG4gICAgbGV0IG51bWNvbHMgPSBlZGdlKzE7XHJcbiAgICBsZXQgbG93cm93ID0gbnVtcm93cztcclxuICAgIGxldCBoaWdocm93ID0gLTE7XHJcbiAgICBsZXQgbG93Y29sID0gbnVtY29scztcclxuICAgIGxldCBoaWdoY29sID0gLTE7XHJcbiAgICBsZXQgbnVtY29vcmRzID0gY3VycmVudGNvb3Jkcy5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBjb29yZD0wOyBjb29yZCA8IG51bWNvb3JkczsgKytjb29yZCkge1xyXG4gICAgICBsZXQgcm93ID0gcGFyc2VJbnQoY3VycmVudGNvb3Jkc1tjb29yZF0uc3BsaXQoXCItXCIpWzBdKTtcclxuICAgICAgbGV0IGNvbCA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVsxXSk7XHJcbiAgICAgIGlmIChyb3cgPCBsb3dyb3cpIHtcclxuICAgICAgICBsb3dyb3cgPSByb3c7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJvdyA+IGhpZ2hyb3cpIHtcclxuICAgICAgICBoaWdocm93ID0gcm93O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2wgPCBsb3djb2wpIHtcclxuICAgICAgICBsb3djb2wgPSBjb2w7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbCA+IGhpZ2hjb2wpIHtcclxuICAgICAgICBoaWdoY29sID0gY29sO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobG93cm93IDwgaGlnaHJvdyB8fCBudW1jb29yZHMgPT09IDEpIHsgLy8gdGlsZXMgcGxhY2VkIG9uIGRpZmZlcmVuY2Ugcm93cyBzbyBwbGF5IGlzIHZlcnRpY2FsLCBvciBzaW5nbGUgdGlsZSBwbGF5ZWRcclxuICAgICAgbGV0IGNvbCA9IGxvd2NvbDsgLy8gbG93Y29sIGFuZCBoaWdoY29sIHdpbGwgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxyXG4gICAgICAvLyBmaW5kIHRoZSBsb3dlc3Qgcm93IG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgbG93ZXIgdGhhbiB0aGF0IG9mIHRoZSBmaXJzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICBsZXQgbG93ZXN0cm93ID0gbG93cm93O1xyXG4gICAgICB3aGlsZSAobG93ZXN0cm93ID4gMCAmJiBzcXVhcmVzW2xvd2VzdHJvdy0xXVtjb2xdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICBsb3dlc3Ryb3cgPSBsb3dlc3Ryb3cgLSAxO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGZpbmQgdGhlIGhpZ2hlc3Qgcm93IG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgaGlnaGVyIHRoYW4gdGhhdCBvZiB0aGUgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICBsZXQgaGlnaGVzdHJvdyA9IGhpZ2hyb3c7XHJcbiAgICAgIHdoaWxlIChoaWdoZXN0cm93IDwgZWRnZSAmJiBzcXVhcmVzW2hpZ2hlc3Ryb3crMV1bY29sXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgaGlnaGVzdHJvdyA9IGhpZ2hlc3Ryb3cgKyAxO1xyXG4gICAgICB9XHJcbiAgICAgIHdvcmRzdGFydGNvb3JkID0gYm9hcmRDb2x1bW5IZWFkZXJzW2NvbF0gKyBib2FyZFJvd0hlYWRlcnNbbG93ZXN0cm93XTsgLy8gdmVydGljYWwgcGxheSBjb29yZHMgc3RhcnQgd2l0aCBjb2wgaGVhZGVyXHJcbiAgICAgIGZvciAodmFyIHJvdyA9IGxvd2VzdHJvdzsgcm93IDw9IGhpZ2hlc3Ryb3c7ICsrcm93KSB7XHJcbiAgICAgICAgbWFpbndvcmQgPSBtYWlud29yZCArIHNxdWFyZXNbcm93XVtjb2xdO1xyXG4gICAgICAgIGxldCBjb29yZCA9IHJvdyArIFwiLVwiICsgY29sO1xyXG4gICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpID4gLTEpIHsgLy8gVGhpcyB0aWxlIHdhcyBwbGF5ZWQsIGNoZWNrIGZvciBob29rc1xyXG4gICAgICAgICAgbGV0IGxvd2VzdGNvbCA9IGNvbDtcclxuICAgICAgICAgIHdoaWxlIChsb3dlc3Rjb2wgPiAwICYmIHNxdWFyZXNbcm93XVtsb3dlc3Rjb2wtMV0gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgICAgICBsb3dlc3Rjb2wgPSBsb3dlc3Rjb2wgLSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IGhpZ2hlc3Rjb2wgPSBjb2w7XHJcbiAgICAgICAgICB3aGlsZSAoaGlnaGVzdGNvbCA8IGVkZ2UgJiYgc3F1YXJlc1tyb3ddW2hpZ2hlc3Rjb2wrMV0gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgICAgICBoaWdoZXN0Y29sID0gaGlnaGVzdGNvbCArIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobG93ZXN0Y29sIDwgaGlnaGVzdGNvbCkgeyAvLyBob29rIHdhcyBtYWRlXHJcbiAgICAgICAgICAgIGxldCBleHRyYXdvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gbG93ZXN0Y29sOyBjIDw9IGhpZ2hlc3Rjb2w7ICsrYykge1xyXG4gICAgICAgICAgICAgIGV4dHJhd29yZCA9IGV4dHJhd29yZCArIHNxdWFyZXNbcm93XVtjXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBleHRyYXdvcmRzID0gWy4uLmV4dHJhd29yZHMsIGV4dHJhd29yZF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobWFpbndvcmQubGVuZ3RoIDwgMikgeyAvLyBIb3Jpem9udGFsIHBsYXkgb3Igc2luZ2xlIHRpbGUgZHJvcCB0aGF0IGNhbm5vdCBiZSBhIHZlcnRpY2FsIHBsYXlcclxuICAgICAgbGV0IHJvdyA9IGxvd3JvdzsgLy8gbG93cm93IGFuZCBoaWdocm93IHdpbGwgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxyXG4gICAgICAvLyBmaW5kIHRoZSBsb3dlc3QgY29sIG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgbG93ZXIgdGhhbiB0aGF0IG9mIHRoZSBmaXJzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICBsZXQgbG93ZXN0Y29sID0gbG93Y29sO1xyXG4gICAgICB3aGlsZSAobG93ZXN0Y29sID4gMCAmJiBzcXVhcmVzW3Jvd11bbG93ZXN0Y29sLTFdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICBsb3dlc3Rjb2wgPSBsb3dlc3Rjb2wgLSAxO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGZpbmQgdGhlIGhpZ2hlc3QgY29sIG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgaGlnaGVyIHRoYW4gdGhhdCBvZiB0aGUgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICBsZXQgaGlnaGVzdGNvbCA9IGhpZ2hjb2w7XHJcbiAgICAgIHdoaWxlIChoaWdoZXN0Y29sIDwgZWRnZSAmJiBzcXVhcmVzW3Jvd11baGlnaGVzdGNvbCsxXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgaGlnaGVzdGNvbCA9IGhpZ2hlc3Rjb2wgKyAxO1xyXG4gICAgICB9XHJcbiAgICAgIHdvcmRzdGFydGNvb3JkID0gYm9hcmRSb3dIZWFkZXJzW3Jvd10gKyBib2FyZENvbHVtbkhlYWRlcnNbbG93ZXN0Y29sXTsgLy8gaG9yaXpvbnRhbCBwbGF5IGNvb3JkcyBzdGFydCB3aXRoIHJvdyBoZWFkZXJcclxuICAgICAgbWFpbndvcmQgPSBcIlwiOyAvLyBJbiBjYXNlIHdlIGdvdCBhIDEgbGV0dGVyIG1haW53b3JkIGluIHRoZSBwcmV2aW91cyBibG9ja1xyXG4gICAgICBleHRyYXdvcmRzID0gW107IC8vIERpdHRvXHJcbiAgICAgIGZvciAodmFyIGNvbCA9IGxvd2VzdGNvbDsgY29sIDw9IGhpZ2hlc3Rjb2w7ICsrY29sKSB7XHJcbiAgICAgICAgbWFpbndvcmQgPSBtYWlud29yZCArIHNxdWFyZXNbcm93XVtjb2xdO1xyXG4gICAgICAgIGxldCBjb29yZCA9IHJvdyArIFwiLVwiICsgY29sO1xyXG4gICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpID4gLTEpIHsgLy8gVGhpcyB0aWxlIHdhcyBwbGF5ZWQsIGNoZWNrIGZvciBob29rc1xyXG4gICAgICAgICAgbGV0IGxvd2VzdHJvdyA9IHJvdztcclxuICAgICAgICAgIHdoaWxlIChsb3dlc3Ryb3cgPiAwICYmIHNxdWFyZXNbbG93ZXN0cm93LTFdW2NvbF0gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgICAgICBsb3dlc3Ryb3cgPSBsb3dlc3Ryb3cgLSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IGhpZ2hlc3Ryb3cgPSByb3c7XHJcbiAgICAgICAgICB3aGlsZSAoaGlnaGVzdHJvdyA8IGVkZ2UgJiYgc3F1YXJlc1toaWdoZXN0cm93KzFdW2NvbF0gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgICAgICBoaWdoZXN0cm93ID0gaGlnaGVzdHJvdyArIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobG93ZXN0cm93IDwgaGlnaGVzdHJvdykgeyAvLyBob29rIHdhcyBtYWRlXHJcbiAgICAgICAgICAgIGxldCBleHRyYXdvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKHZhciByID0gbG93ZXN0cm93OyByIDw9IGhpZ2hlc3Ryb3c7ICsrcikge1xyXG4gICAgICAgICAgICAgIGV4dHJhd29yZCA9IGV4dHJhd29yZCArIHNxdWFyZXNbcl1bY29sXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBleHRyYXdvcmRzID0gWy4uLmV4dHJhd29yZHMsIGV4dHJhd29yZF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwbGF5aW5mbyA9IHttYWlud29yZDogbWFpbndvcmQsIGV4dHJhd29yZHM6IGV4dHJhd29yZHMsIHBvczogd29yZHN0YXJ0Y29vcmR9O1xyXG4gICAgcmV0dXJuIHBsYXlpbmZvO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0UmV3aW5kSW5mbygpIHsgLy8gTXVzdCBiZSBjYWxsZWQgYmVmb3JlIHlvdSBzdGFydCBzZXR0aW5nIG5ldyB2YWx1ZXMgZm9yIHN0dWZmXHJcbiAgICAvKiBSZXdpbmQgaW5mbyBpcyBldmVyeXRoaW5nIHlvdSBuZWVkIHRvIHJldmVyc2UgdGhlIG1vdmUgdGhhdCB3ZSBkbyBub3QgYWxyZWFkeSBoYXZlIGluIHRoZSBuZXcgbW92ZSB2YXJpYWJsZTpcclxuICAgICAgICBzcXVhcmVzOiBzYXlzIHdoYXQgdGlsZSBpcyBvbiB3aGF0IHNxdWFyZVxyXG4gICAgICAgIHVzZWRieTogc2F5cyB3aG8gcGxheWVkIHdoYXQgdGlsZSBvbiB3aGF0IHNxdWFyZSAoYWZmZWN0cyBzdHlsaW5nKVxyXG4gICAgICAgIHJhY2s6IHBsYXllcnMgcmFjayBiZWZvcmUgbW92ZSB3YXMgbWFkZSBcclxuICAgICAgICB0aWxlczogdGlsZSBwb29sIGJlZm9yZSBwaWNraW5nIG5ldyB0aWxlc1xyXG4gICAgICAgIHJlc2N1ZXM6IHJlc2N1ZSBjb3VudFxyXG4gICAgICAgIHBhc3NlZDogd2hldGhlciBwcmV2aW91cyBwbGF5IHdhcyBhIHBhc3NcclxuICAgICovXHJcbiAgICBsZXQgcmV3aW5kSW5mbyA9IHtcclxuICAgICAgc3F1YXJlczogWy4uLnNuYXBzaG90LnNxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi5zbmFwc2hvdC51c2VkYnldLFxyXG4gICAgICByYWNrOiB3aG9zZXR1cm4gPT09IFwiR1wiID8gWy4uLnNuYXBzaG90Lmd0aWxlc106IFsuLi5zbmFwc2hvdC5wdGlsZXNdLFxyXG4gICAgICB0aWxlczogWy4uLnRpbGVzXSxcclxuICAgICAgcmVzY3VlczogcmVzY3VlcyxcclxuICAgICAgcGFzc2VkOiBwYXNzZWRcclxuICAgIH07XHJcbiAgICByZXR1cm4gcmV3aW5kSW5mbztcclxuICB9XHJcbiAgZnVuY3Rpb24gYWxsb3dVbmRvTGFzdFR1cm4oKSB7XHJcbiAgICBpZiAoIWFsbG93UmV3aW5kKSB7XHJcbiAgICAgIHNldEFsbG93UmV3aW5kKHRydWUpO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiYWxsb3d1bmRvXCIsIC8vIGFsbG93IHVuZG8gbGFzdCB0dXJuXHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzIC8vIHdobyBpcyBhbGxvd2luZyBpdFxyXG4gICAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBlcmZvcm1SZXdpbmQoKSB7XHJcbiAgICAvKiBSZXdpbmQgdGhlIGxhc3QgbW92ZSBhbmQgdGFrZSBpdCBvZmYgdGhlIGVuZCBvZiB0aGUgbW92ZSBsaXN0ICovXHJcbiAgICBsZXQgbnVtTW92ZXMgPSBtb3Zlcy5sZW5ndGg7XHJcbiAgICBsZXQgbGFzdE1vdmUgPSBtb3Zlc1ttb3Zlcy5sZW5ndGgtMV07XHJcbiAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5sYXN0TW92ZS5yZXdpbmRJbmZvLnNxdWFyZXNdO1xyXG4gICAgbGV0IG5ld1VzZWRieSA9IFsuLi5sYXN0TW92ZS5yZXdpbmRJbmZvLnVzZWRieV07XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4ubGFzdE1vdmUucmV3aW5kSW5mby50aWxlc107XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gbGFzdE1vdmUuYnkgPT09IFwiUFwiID8gWy4uLmxhc3RNb3ZlLnJld2luZEluZm8ucmFja10gOiBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBuZXdHdGlsZXMgPSBsYXN0TW92ZS5ieSA9PT0gXCJHXCIgPyBbLi4ubGFzdE1vdmUucmV3aW5kSW5mby5yYWNrXSA6IFsuLi5ndGlsZXNdO1xyXG4gICAgbGV0IG5ld1Jlc2N1ZXMgPSBsYXN0TW92ZS5yZXdpbmRJbmZvLnJlc2N1ZXM7XHJcbiAgICBsZXQgbmV3V2hvc2V0dXJuID0gbGFzdE1vdmUuYnk7IC8vIEJhY2sgdG8gdGhlaXIgdHVyblxyXG4gICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzXTtcclxuICAgIG5ld01vdmVzLnNwbGljZShudW1Nb3Zlcy0xLDEpO1xyXG4gICAgbGV0IG5ld1NuYXBzaG90ID0ge1xyXG4gICAgICBzcXVhcmVzOiBbLi4ubmV3U3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLm5ld1VzZWRieV0sXHJcbiAgICAgIGd0aWxlczogWy4uLm5ld0d0aWxlc10sXHJcbiAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc11cclxuICAgIH07XHJcbiAgICBsZXQgbmV3UGFzc2VkID0gbGFzdE1vdmUucGFzc2VkO1xyXG4gICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgIHNldFJlc2N1ZXMobmV3UmVzY3Vlcyk7XHJcbiAgICBzZXRQYXNzZWQobmV3UGFzc2VkKTtcclxuICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgIHNldFNuYXBzaG90KG5ld1NuYXBzaG90KTtcclxuICAgIC8vIEp1c3Qgc2VuZCBldmVyeXRoaW5nIGV2ZW4gdGhvdWdoIHNvbWUgY291bGQgYmUgaGFyZCBjb2RlZCBpbiBwcm9jZXNzTWVzc2FnZSBieSBvcHBvbmVudFxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwidW5kb3R1cm5cIiwgLy8gdW5kbyBsYXN0IHR1cm5cclxuICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHRpbGUgcG9vbFxyXG4gICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyBndWFyZHMgcmFja1xyXG4gICAgICAgIHNxdWFyZXM6IG5ld1NxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IG5ld1VzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBzd2FwIG5ldmVyIGVuZHMgdGhlIGdhbWUgc28gZ28gdG8gb3Bwb25lbnRcclxuICAgICAgICByZXNjdWVzOiBuZXdSZXNjdWVzLCAvLyByZXNjdWUgY291bnRcclxuICAgICAgICBwYXNzZWQ6IG5ld1Bhc3NlZCwgLy8gd2hldGhlciBwcmV2aW91cyBwbGF5IHdhcyBhIHBhc3NcclxuICAgICAgICBtb3ZlczogbmV3TW92ZXMsIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgIHNuYXBzaG90OiBuZXdTbmFwc2hvdFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlY2FsbFRpbGVzID0gKCkgPT4ge1xyXG4gICAgc2V0U3F1YXJlcyhbLi4uc25hcHNob3Quc3F1YXJlc10pO1xyXG4gICAgc2V0VXNlZGJ5KFsuLi5zbmFwc2hvdC51c2VkYnldKTtcclxuICAgIHNldFB0aWxlcyhbLi4uc25hcHNob3QucHRpbGVzXSk7XHJcbiAgICBzZXRHdGlsZXMoWy4uLnNuYXBzaG90Lmd0aWxlc10pO1xyXG4gICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgc2V0UmNkKFstMSwtMSxub2RpcmVjdGlvbl0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByaXNvbmVyUGFzcyA9ICgpID0+IHtcclxuICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgbGV0IG5ld1dob3NldHVybiA9IHBhc3NlZCA/IFwiWFwiIDogXCJHXCI7IC8vIElmIGJvdGggcGxheWVycyBwYXNzIHRoZW4gZW5kIHRoZSBnYW1lIGJ5IHVzaW5nIFwiWFwiXHJcbiAgICBsZXQgbmV3TW92ZSA9IHtieTogXCJQXCIsIHR5cGU6IFwiUEFTU1wiLCByZXdpbmRJbmZvOiByZXdpbmRJbmZvfTtcclxuICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICByZWNhbGxUaWxlcygpOyAvLyBJbiBjYXNlIHRoZXkgcHV0IHNvbWUgdGlsZXMgb24gdGhlIGJvYXJkIGJlZm9yZSBjbGlja2luZyBQYXNzXHJcbiAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICBzZXRQYXNzZWQodHJ1ZSk7XHJcbiAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBwdGlsZXM6IHNuYXBzaG90LnB0aWxlcywgLy8gcHJpc29uZXJzIHJhY2sgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICB0aWxlczogdGlsZXMsIC8vIHRpbGUgcG9vbCBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICBwYXNzZWQ6IHRydWUsXHJcbiAgICAgICAgbW92ZXM6IG5ld01vdmVzLCAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICByZXNjdWVzOiByZXNjdWVzIC8vIG5vIHJlc2N1ZXMgb24gYSBwYXNzXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ3VhcmRzUGFzcyA9ICgpID0+IHtcclxuICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgbGV0IG5ld1dob3NldHVybiA9IHBhc3NlZCA/IFwiWFwiIDogXCJQXCI7IC8vIElmIGJvdGggcGxheWVycyBwYXNzIHRoZW4gZW5kIHRoZSBnYW1lIGJ5IHVzaW5nIFwiWFwiXHJcbiAgICBsZXQgbmV3TW92ZSA9IHtieTogXCJHXCIsIHR5cGU6IFwiUEFTU1wiLCByZXdpbmRJbmZvOiByZXdpbmRJbmZvfTtcclxuICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICByZWNhbGxUaWxlcygpOyAvLyBJbiBjYXNlIHRoZXkgcHV0IHNvbWUgdGlsZXMgb24gdGhlIGJvYXJkIGJlZm9yZSBjbGlja2luZyBQYXNzXHJcbiAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICBzZXRQYXNzZWQodHJ1ZSk7XHJcbiAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBndGlsZXM6IHNuYXBzaG90Lmd0aWxlcywgLy8gZ3VhcmRzIHJhY2sgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICB0aWxlczogdGlsZXMsIC8vIHRpbGUgcG9vbCBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICBwYXNzZWQ6IHRydWUsXHJcbiAgICAgICAgbW92ZXM6IG5ld01vdmVzIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RHYW1lRGF0YSA9ICgpID0+IHtcclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLCAvLyBmb3IgbG9iYnkgdG8gcGljayB1cCB0aGlzIG1lc3NhZ2VcclxuICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgZnVuYzogXCJyZXF1ZXN0Z2FtZWRhdGFcIiAvLyByZXF1ZXN0IGdhbWUgZGF0YVxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChwcmlzb25lcnNPckd1YXJkcyAhPT0gd2hvc2V0dXJuKSB7cmV0dXJuO31cclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gZW5kUHJpc29uZXJzVHVybigpIDogZW5kR3VhcmRzVHVybigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgIHJlY2FsbFRpbGVzKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBsZXR0ZXJ0ZXN0ID0gL15bQS1aYS16XFw/XSQvOyAvLyBzaW5nbGUgbGV0dGVyIG9yIHF1ZXN0aW9uIG1hcmsga2V5IHByZXNzZWRcclxuICAgIGlmIChldmVudC5rZXkubWF0Y2gobGV0dGVydGVzdCkpIHtcclxuICAgICAgbGV0IGxldHRlciA9IGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICBsZXQgcmFjayA9IHdob3NldHVybiA9PT0gXCJQXCIgPyBwdGlsZXMgOiBndGlsZXM7XHJcbiAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSByYWNrLmluZGV4T2YobGV0dGVyKTtcclxuICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSByYWNrLmluZGV4T2YoXCI/XCIpOyAvLyBVc2UgdGhlIGJsYW5rIGlmIHRoZXkgaGF2ZSBvbmVcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID4gLTEpIHsgLy8gUHJlc3NlZCBsZXR0ZXIgaXMgb24gdGhlIHJhY2tcclxuICAgICAgICBsZXQgcm93ID0gcmNkWzBdO1xyXG4gICAgICAgIGxldCBjb2wgPSByY2RbMV07XHJcbiAgICAgICAgbGV0IGRpciA9IHJjZFsyXTtcclxuICAgICAgICBpZiAocm93ID4tMSAmJiBjb2wgPiAtMSAmJiBkaXIgIT09IG5vZGlyZWN0aW9uKSB7IC8vIHJvdywgY29sLCBkaXIgYXJlIHNldCB0byBhY2NlcHQga2V5c3Ryb2tlXHJcbiAgICAgICAgICAvLyBOZWVkIHRvIGZpZ3VyZSBvdXQgbmV4dCBzcWF1cmUgdG8gYXV0by1wbGFjZSBhIHRpbGVcclxuICAgICAgICAgIGxldCBuZXdSY2QgPSByY2Q7XHJcbiAgICAgICAgICBpZiAoZGlyID09PSBcInJcIikgeyAvLyBwbGF5aW5nIHJpZ2h0d2FyZHNcclxuICAgICAgICAgICAgbGV0IG5ld2MgPSAtMTtcclxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IGNvbCArIDE7IGMgPCBlZGdlICsgMSAmJiBuZXdjID09PSAtMTsgYysrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZXNbcm93XVtjXSA9PT0gc3F1YXJldW51c2VkKSB7bmV3YyA9IGM7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZXdjID09PSAtMSkge1xyXG4gICAgICAgICAgICAgIG5ld1JjZCA9IFstMSwtMSxub2RpcmVjdGlvbl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gW3JvdywgbmV3YywgXCJyXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGRpciA9PT0gXCJkXCIpIHsgLy8gcGxheWluZyBkb3dud2FyZHNcclxuICAgICAgICAgICAgbGV0IG5ld3IgPSAtMTtcclxuICAgICAgICAgICAgbGV0IG51bXJvd3MgPSAocmFja3NpemUqMikrMTtcclxuICAgICAgICAgICAgZm9yICh2YXIgciA9IHJvdyArIDE7IHIgPCBudW1yb3dzICYmIG5ld3IgPT09IC0xOyByKyspIHtcclxuICAgICAgICAgICAgICBpZiAoc3F1YXJlc1tyXVtjb2xdID09PSBzcXVhcmV1bnVzZWQpIHtuZXdyID0gcjt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5ld3IgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gWy0xLC0xLG5vZGlyZWN0aW9uXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbbmV3ciwgY29sLCBcImRcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyb3csY29sLG5ld1NlbGVjdGlvbixuZXdSY2QpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiYgY3VycmVudGNvb3Jkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIFNhbWUgYXMgY2xpY2tpbmcgb24gYSBwbGF5ZWQtdGhpcy1tb3ZlIHRpbGUgaW4gdGVybXMgb2YgcmV0dXJuaW5nIHRoZSB0aWxlIHRvIHRoZSByYWNrXHJcbiAgICAgIC8vIEhvd2V2ZXIgd2UgYWxzbyB3YW50IHRvIHNldCB1cCByY2Qgc28gdGhleSBjYW4gcHJlc3MgdGhlIGtleSB0aGV5IG1lYW50IGFuZCBjb250aW51ZVxyXG4gICAgICBsZXQgY29vcmQgPSBjdXJyZW50Y29vcmRzW2N1cnJlbnRjb29yZHMubGVuZ3RoIC0gMV07IC8vIHRpbGUgdG8gcmV0dXJuIHRvIHJhY2tcclxuICAgICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcbiAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbmV3VXNlZGJ5ID0gWy4uLnVzZWRieV07XHJcbiAgICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnNxdWFyZXNdO1xyXG4gICAgICBsZXQgbmV3UmNkID0gWy0xLC0xLG5vZGlyZWN0aW9uXTtcclxuICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgbmV3Q3VycmVudGNvb3Jkcy5zcGxpY2UoY3VycmVudGNvb3Jkcy5sZW5ndGgtMSwxKTtcclxuICAgICAgbGV0IHJvdyA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgIGxldCBjb2wgPSBwYXJzZUludChjb29yZC5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICBsZXQgcmV0dXJuZWRUaWxlID0gc3F1YXJlc1tyb3ddW2NvbF07XHJcbiAgICAgIGlmICh3aG9zZXR1cm4gPT09IFwiUFwiKSB7XHJcbiAgICAgICAgbmV3UHRpbGVzLnB1c2gocmV0dXJuZWRUaWxlKTtcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdQdGlsZXMubGVuZ3RoLTE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3R3RpbGVzLnB1c2gocmV0dXJuZWRUaWxlKTtcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdHdGlsZXMubGVuZ3RoLTE7XHJcbiAgICAgIH1cclxuICAgICAgbmV3VXNlZGJ5W3Jvd11bY29sXSA9IHVzZWRieW5vb25lO1xyXG4gICAgICBuZXdTcXVhcmVzW3Jvd11bY29sXSA9IHNxdWFyZXVudXNlZDtcclxuICAgICAgbGV0IGRpciA9IHJjZFsyXTtcclxuICAgICAgaWYgKGRpciAhPT0gbm9kaXJlY3Rpb24pIHtcclxuICAgICAgICAvLyBkaXJlY3Rpb24gd2FzIHNldCBzbyBrZWVwIGl0XHJcbiAgICAgICAgbmV3UmNkID0gW3Jvdyxjb2wsZGlyXTtcclxuICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IC0xOyAvLyBpZiB0aGV5IGJhY2tzcGFjZSBhbGwgdGhlIGxldHRlcnMgb2ZmIGxlYXZlIHJhY2sgdGlsZSB1bnNlbGVjdGVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpc29uYnJlYWtcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWNvbnRhaW5lciB3My10ZWFsIHRvcEJhckhlaWdodFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1taWRkbGVcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJteUhlYWRpbmdGb250XCI+UHJpc29uIEJyZWFrPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wbGVmdCB3My1ibGFjayB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgR2FtZSBpZDoge2dhbWVpZH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktYm90dG9tbGVmdCB3My1vcmFuZ2UgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgIFByaXNvbmVyczoge3ByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IG5pY2tuYW1lIDogb3BwbmFtZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wcmlnaHQgdzMtYmxhY2sgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi4vLi4vXCJ9PlxyXG4gICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1ib3R0b21yaWdodCB3My1vcmFuZ2UgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgIEd1YXJkczoge3ByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IG9wcG5hbWUgOiBuaWNrbmFtZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMiBwYlRpbGVBbmRNb3Zlc091dGVyXCI+XHJcbiAgICAgICAgICAgIDxTaG93VW5zZWVuVGlsZXMgdGlsZXM9e3RpbGVzfSBvdGhlcnRpbGVzPXtwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyBndGlsZXMgOiBwdGlsZXN9Lz5cclxuICAgICAgICAgICAgPFNob3dNb3ZlcyBtb3Zlcz17bW92ZXN9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yIHBiUGxheWVyT3V0ZXJTZWN0aW9uXCI+XHJcbiAgICAgICAgICA8UHJpc29uZXJzXHJcbiAgICAgICAgICAgIHB0aWxlcz17cHRpbGVzfVxyXG4gICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kUHJpc29uZXJzVHVybigpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcFByaXNvbmVyc1RpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gcHJpc29uZXJQYXNzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tVbmRvTGFzdFBsYXk9eygpID0+IHBlcmZvcm1SZXdpbmQoKX1cclxuICAgICAgICAgICAgb25DbGlja0FsbG93VW5kbz17KCkgPT4gYWxsb3dVbmRvTGFzdFR1cm4oKX1cclxuICAgICAgICAgICAgcmVzY3Vlcz17cmVzY3Vlc31cclxuICAgICAgICAgICAgcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICAgICAgICBtb3Zlcz17bW92ZXN9XHJcbiAgICAgICAgICAgIGFsbG93UmV3aW5kPXthbGxvd1Jld2luZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAge3ByaXNvbmVyc09yR3VhcmRzID09PSB3aG9zZXR1cm4gP1xyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgc3F1YXJlcz17c3F1YXJlc31cclxuICAgICAgICAgICAgICAgIHVzZWRieT17dXNlZGJ5fVxyXG4gICAgICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsocmksIGNpKSA9PiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJpLCBjaSwgLTEsbnVsbCl9XHJcbiAgICAgICAgICAgICAgICByYWNrc2l6ZT17cmFja3NpemV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzPXtzcXVhcmVzfVxyXG4gICAgICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgcmFja3NpemU9e3JhY2tzaXplfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTIgcGJQbGF5ZXJPdXRlclNlY3Rpb25cIj5cclxuICAgICAgICAgIDxHdWFyZHNcclxuICAgICAgICAgICAgZ3RpbGVzPXtndGlsZXN9XHJcbiAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVHdWFyZFRpbGVDbGljayh0aSl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRHdWFyZHNUdXJuKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZUV4Y2hhbmdlPXsoKSA9PiBzd2FwR3VhcmRzVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1Bhc3NQbGF5PXsoKSA9PiBndWFyZHNQYXNzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tVbmRvTGFzdFBsYXk9eygpID0+IHBlcmZvcm1SZXdpbmQoKX1cclxuICAgICAgICAgICAgb25DbGlja0FsbG93VW5kbz17KCkgPT4gYWxsb3dVbmRvTGFzdFR1cm4oKX1cclxuICAgICAgICAgICAgcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICAgICAgICBtb3Zlcz17bW92ZXN9XHJcbiAgICAgICAgICAgIGFsbG93UmV3aW5kPXthbGxvd1Jld2luZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgPENoYXQgZ2FtZWlkPXtnYW1laWR9IGNsaWVudD17Y2xpZW50fSBuaWNrbmFtZT17bmlja25hbWV9IG1zZ3M9e2NoYXRtc2dzfSBzZXRNc2dzPXtzZXRDaGF0bXNnc30gcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktY29udGFpbmVyIHczLXRlYWwgdG9wQmFySGVpZ2h0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZSBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICB7d2hvc2V0dXJuID09PSBcIlhcIiA/XHJcbiAgICAgICAgICAgIDxoMT5HYW1lIE92ZXIhPC9oMT5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgICAgPHA+e2pva2VzW2pva2VpbmRleF19PC9wPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaG93VW5zZWVuVGlsZXMgPSAocHJvcHMpID0+IHsgLy8gdGlsZXMgPSB0aWxlcyBpbiBiYWcsIG90aGVydGlsZXMgPSB0aWxlcyBvbiBvdGhlciBwbGF5ZXJzIHJhY2tcclxuICBsZXQgdW5zZWVuVGlsZXMgPSBbLi4ucHJvcHMudGlsZXMsIC4uLnByb3BzLm90aGVydGlsZXNdO1xyXG4gIC8vIFNvcnQgdGhlIHRpbGVzIHRoZW4gcHV0IHRoZSBibGFua3MgYXQgdGhlIGVuZFxyXG4gIHVuc2VlblRpbGVzLnNvcnQoKTtcclxuICBpZiAodW5zZWVuVGlsZXNbMF0gPT09IFwiP1wiKSB7XHJcbiAgICAgIHVuc2VlblRpbGVzLnNwbGljZSgwLDEpXHJcbiAgICAgIHVuc2VlblRpbGVzLnB1c2goXCI/XCIpXHJcbiAgfVxyXG4gIGlmICh1bnNlZW5UaWxlc1swXSA9PT0gXCI/XCIpIHtcclxuICAgICAgdW5zZWVuVGlsZXMuc3BsaWNlKDAsMSlcclxuICAgICAgdW5zZWVuVGlsZXMucHVzaChcIj9cIilcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xUaXRsZVwiPlRJTEVTPC9kaXY+XHJcbiAgICAgIHt1bnNlZW5UaWxlcy5tYXAoKHQsIHRpKSA9PiAoXHJcbiAgICAgICAgPHNwYW4ga2V5PXtgdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICB7dGkgPiAwICYmIHQgIT09IHVuc2VlblRpbGVzW3RpIC0gMV0gPyAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiVGlsZXBvb2xEaXZpZGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3QgPT09IFwiUVwiID8gXCJwYlRpbGVwb29sVGlsZSB1XCIgOiBcInBiVGlsZXBvb2xUaWxlXCJ9Pnt0fTwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNob3dNb3ZlcyA9IChwcm9wcykgPT4geyAvLyBzaG93IG1vdmVzIG1hZGVcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYk1vdmVzXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJNb3Zlc1RpdGxlXCI+TU9WRVM8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYk1vdmVzU2Nyb2xsYWJsZVwiIGlkPVwiU2Nyb2xsYWJsZU1vdmVzXCI+XHJcbiAgICAgICAge3Byb3BzLm1vdmVzLm1hcCgobSwgbWkpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtgbW92ZSR7bWl9YH0gY2xhc3NOYW1lPVwicGJNb3ZlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiTW92ZSBieVwiPnttLmJ5fTwvc3Bhbj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BwYk1vdmUgJHttLnR5cGV9YH0+XHJcbiAgICAgICAgICAgICAge20udHlwZSA9PT0gXCJQTEFZXCIgP1xyXG4gICAgICAgICAgICAgICAgPD57bS5wb3N9IHttLm1haW53b3JkLnJlcGxhY2UoXCJRXCIsXCJRdVwiKX1cclxuICAgICAgICAgICAgICAgICAge20uZXh0cmF3b3Jkcz8ubWFwKCh3KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICwmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgIHt3LnJlcGxhY2UoXCJRXCIsXCJRdVwiKX1cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuY29uc3QgUmFja1RpbGUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLnRpbGVjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlT25SYWNrVGV4dFwiPntwcm9wcy50aWxldmFsdWV9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgRmluaXNoVHVybkJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2hlY2s8L2k+Jm5ic3A7RmluaXNoIFR1cm48L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGlsZVJlY2FsbEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dW5kbzwvaT4mbmJzcDtSZWNhbGwgVGlsZXM8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGlsZUV4Y2hhbmdlQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25UZXh0XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jYWNoZWQ8L2k+Jm5ic3A7U3dhcCBUaWxlczwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQYXNzUGxheUJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bm90X2ludGVyZXN0ZWQ8L2k+Jm5ic3A7UGFzcyBUdXJuPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEFsbG93VW5kb0xhc3RQbGF5ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25TZXZlcmVcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25TZXZlcmVUZXh0XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5yZXBvcnRfcHJvYmxlbTwvaT5cclxuICAgICAgICAmbmJzcDtBbGxvdyBVbmRvIFR1cm5cclxuICAgICAgICB7cHJvcHMuYWxyZWFkeUFsbG93ZWQgP1xyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25TZXZlcmVUZXh0MlwiPkFsbG93IHVuZG8gaXMgbm93IGVuYWJsZWQ8L3NwYW4+XHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25TZXZlcmVUZXh0MlwiPkNsaWNrIHRvIGxldCBvcHBvbmVudCB1bmRvPC9zcGFuPlxyXG4gICAgICAgIH1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBVbmRvTGFzdFBsYXkgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblNldmVyZVwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblNldmVyZVRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmRlbGV0ZV9mb3JldmVyPC9pPlxyXG4gICAgICAgICZuYnNwO1VuZG8gTXkgVHVyblxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dDJcIj5PcHBvbmVudCBoYXMgYWxsb3dlZCB1bmRvPC9zcGFuPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFByaXNvbmVycyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJlbmRlclRpbGUgPSByZW5kZXJQbGF5ZXJUaWxlKHByb3BzKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRnJlZWRQcmlzb25lcnMgPSAoY291bnQpID0+IHtcclxuICAgIGxldCBkdW1iID0gQXJyYXkoY291bnQpLmZpbGwoXCJub25zZW5zZVwiKTtcclxuICAgIHJldHVybiBkdW1iLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgIDxzcGFuIGtleT17dmFsdWUgKyBTdHJpbmcoaW5kZXgpfSBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkknbSBmcmVlISBJJ20gZnJlZSFcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBiUmVzY3VlZVwiXHJcbiAgICAgICAgICBzcmM9XCIvYnJlYWtmcmVlLnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJJJ20gZnJlZSEgSSdtIGZyZWUhXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVySW5uZXJTZWN0aW9uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcGJQbGF5ZXJUaXRsZSAke3Byb3BzLnByaXNvbmVyc09yR3VhcmRzfWB9PjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cnVuX2NpcmNsZTwvaT4mbmJzcDtQUklTT05FUlMmbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJ1bl9jaXJjbGU8L2k+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgIHtwcm9wcy5wdGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgIHJlbmRlclRpbGUoXHJcbiAgICAgICAgICAgIHByb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMuc2VsZWN0aW9uID09PSB0aVxyXG4gICAgICAgICAgICA/IHQgPT09IFwiUVwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IFwicGJUaWxlT25SYWNrIFNlbGVjdGVkIFAgdVwiIDogXCJwYlRpbGVPblJhY2sgU2VsZWN0ZWQgUFwiXHJcbiAgICAgICAgICAgIDogdCA9PT0gXCJRXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gXCJwYlRpbGVPblJhY2sgVW5zZWxlY3RlZCBQIHVcIiA6ICBcInBiVGlsZU9uUmFjayBVbnNlbGVjdGVkIFBcIixcclxuICAgICAgICAgICAgdGksXHJcbiAgICAgICAgICAgIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IHQgOiBcIipcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIlBcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyBcclxuICAgICAgICBzaG93QWN0aW9uQnV0dG9ucyhwcm9wcylcclxuICAgICAgICA6IHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiAmJiBwcm9wcy5tb3Zlcy5sZW5ndGggPiAwICYmIHByb3BzLmFsbG93UmV3aW5kICYmIHByb3BzLm1vdmVzW3Byb3BzLm1vdmVzLmxlbmd0aC0xXS5ieSA9PT0gXCJQXCIgP1xyXG4gICAgICAgIHNob3dBY3Rpb25CdXR0b25VbmRvTGFzdFBsYXkocHJvcHMpXHJcbiAgICAgICAgOlxyXG4gICAgICAgIDw+PC8+XHJcbiAgICAgIH1cclxuICAgICAge3Byb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiAmJiBwcm9wcy5tb3Zlcy5sZW5ndGggPiAwICYmIHByb3BzLm1vdmVzW3Byb3BzLm1vdmVzLmxlbmd0aC0xXS5ieSA9PT0gXCJHXCIgP1xyXG4gICAgICAgIHNob3dBY3Rpb25CdXR0b25BbGxvd1VuZG8ocHJvcHMpXHJcbiAgICAgICAgOlxyXG4gICAgICAgIDw+PC8+XHJcbiAgICAgIH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlJlc2N1ZXNNYWRlXCI+XHJcbiAgICAgICAgUmVzY3VlcyBtYWRlOiB7cHJvcHMucmVzY3Vlc31cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICB7cmVuZGVyRnJlZWRQcmlzb25lcnMocHJvcHMucmVzY3Vlcyl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEd1YXJkcyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJlbmRlclRpbGUgPSByZW5kZXJQbGF5ZXJUaWxlKHByb3BzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJJbm5lclNlY3Rpb25cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zZWN1cml0eTwvaT4mbmJzcDtHVUFSRFMmbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNlY3VyaXR5PC9pPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICB7cHJvcHMuZ3RpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICByZW5kZXJUaWxlKFxyXG4gICAgICAgICAgICBwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnNlbGVjdGlvbiA9PT0gdGlcclxuICAgICAgICAgICAgICA/IHQgPT09IFwiUVwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IFwicGJUaWxlT25SYWNrIFNlbGVjdGVkIEcgdVwiIDogXCJwYlRpbGVPblJhY2sgU2VsZWN0ZWQgR1wiXHJcbiAgICAgICAgICAgICAgOiB0ID09PSBcIlFcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyBcInBiVGlsZU9uUmFjayBVbnNlbGVjdGVkIEcgdVwiIDogIFwicGJUaWxlT25SYWNrIFVuc2VsZWN0ZWQgR1wiLFxyXG4gICAgICAgICAgICB0aSxcclxuICAgICAgICAgICAgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID8gdCA6IFwiKlwiXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IFxyXG4gICAgICAgIHNob3dBY3Rpb25CdXR0b25zKHByb3BzKVxyXG4gICAgICAgIDogcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiICYmIHByb3BzLm1vdmVzLmxlbmd0aCA+IDAgJiYgcHJvcHMuYWxsb3dSZXdpbmQgJiYgcHJvcHMubW92ZXNbcHJvcHMubW92ZXMubGVuZ3RoLTFdLmJ5ID09PSBcIkdcIiA/XHJcbiAgICAgICAgc2hvd0FjdGlvbkJ1dHRvblVuZG9MYXN0UGxheShwcm9wcylcclxuICAgICAgICA6XHJcbiAgICAgICAgPD48Lz5cclxuICAgICAgfVxyXG4gICAgICB7cHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiICYmIHByb3BzLm1vdmVzLmxlbmd0aCA+IDAgJiYgcHJvcHMubW92ZXNbcHJvcHMubW92ZXMubGVuZ3RoLTFdLmJ5ID09PSBcIlBcIiA/XHJcbiAgICAgICAgc2hvd0FjdGlvbkJ1dHRvbkFsbG93VW5kbyhwcm9wcylcclxuICAgICAgICA6XHJcbiAgICAgICAgPD48Lz5cclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBsYXllclRpbGUocHJvcHMpIHtcclxuICByZXR1cm4gKHRpbGVjbGFzcywgdGlsZWluZGV4LCB0aWxldmFsdWUpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRpbGV2YWx1ZSAhPT0gXCIqXCIgPyAvLyB0aGlzIHRpbGUgaXMgZm9yIHRoaXMgcGxheWVyLCBhbGxvdyBjbGlja1xyXG4gICAgICAgIDxSYWNrVGlsZVxyXG4gICAgICAgICAga2V5PXt0aWxlY2xhc3MgKyBTdHJpbmcodGlsZWluZGV4KX1cclxuICAgICAgICAgIHRpbGVjbGFzcz17dGlsZWNsYXNzfVxyXG4gICAgICAgICAgdGlsZXZhbHVlPXt0aWxldmFsdWV9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrKHRpbGVpbmRleCl9IC8+XHJcbiAgICAgICAgOiAvLyB0aGlzIHRpbGUgaXMgZm9yIG9wcG9uZW50LCBkbyBub3QgYWxsb3cgY2xpY2tcclxuICAgICAgICA8UmFja1RpbGVcclxuICAgICAgICAgIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9XHJcbiAgICAgICAgICB0aWxlY2xhc3M9e3RpbGVjbGFzc31cclxuICAgICAgICAgIHRpbGV2YWx1ZT17dGlsZXZhbHVlfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LmFsZXJ0KFwiTm8gcGVla2luZyFcIil9IC8+XHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dBY3Rpb25CdXR0b25zKHByb3BzKSB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25EaXZcIj5cclxuICAgIDxwPlxyXG4gICAgICA8RmluaXNoVHVybkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrRmluaXNoVHVybigpfSAvPlxyXG4gICAgPC9wPlxyXG4gICAgPHA+XHJcbiAgICAgIDxUaWxlUmVjYWxsQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tUaWxlUmVjYWxsKCl9IC8+XHJcbiAgICA8L3A+XHJcbiAgICA8cD5cclxuICAgICAgPFRpbGVFeGNoYW5nZUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZUV4Y2hhbmdlKCl9IC8+XHJcbiAgICA8L3A+XHJcbiAgICA8cD5cclxuICAgICAgPFBhc3NQbGF5QnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tQYXNzUGxheSgpfSAvPlxyXG4gICAgPC9wPlxyXG4gIDwvZGl2PjtcclxufVxyXG5mdW5jdGlvbiBzaG93QWN0aW9uQnV0dG9uQWxsb3dVbmRvKHByb3BzKSB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25EaXZcIj5cclxuICAgIDxwPlxyXG4gICAgICA8QWxsb3dVbmRvTGFzdFBsYXkgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja0FsbG93VW5kbygpfSBhbHJlYWR5QWxsb3dlZD17cHJvcHMuYWxsb3dSZXdpbmR9Lz5cclxuICAgIDwvcD5cclxuICA8L2Rpdj5cclxufVxyXG5mdW5jdGlvbiBzaG93QWN0aW9uQnV0dG9uVW5kb0xhc3RQbGF5KHByb3BzKSB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25EaXZcIj5cclxuICAgIDxwPlxyXG4gICAgICA8VW5kb0xhc3RQbGF5IG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tVbmRvTGFzdFBsYXkoKX0gLz5cclxuICAgIDwvcD5cclxuICA8L2Rpdj5cclxufVxyXG5jb25zdCBDaGF0ID0gKHtnYW1laWQsIGNsaWVudCwgbmlja25hbWUsIG1zZ3MsIHNldE1zZ3MsIHByaXNvbmVyc09yR3VhcmRzfSkgPT4ge1xyXG4gIGNvbnN0IFtuZXh0bXNnLCBzZXROZXh0bXNnXSA9IHVzZVN0YXRlKCcnKTtcclxuIFxyXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIiAmJiBuZXh0bXNnLmxlbmd0aCA+IDApIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbGV0IG5ld01zZ3MgPSBbLi4ubXNncywge2Zyb206IG5pY2tuYW1lLCBtc2c6IG5leHRtc2d9XVxyXG4gICAgICBsZXQgc2VuZG1zZyA9IG5leHRtc2c7XHJcbiAgICAgIHNldE1zZ3MobmV3TXNncyk7XHJcbiAgICAgIHNldE5leHRtc2coJycpO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiY2hhdFwiLCAvLyBzZW5kIGNoYXQgbWVzc2FnZVxyXG4gICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcywgLy8gd2hvIHNlbnQgaXRcclxuICAgICAgICAgIHNlbmRtc2c6IHNlbmRtc2cgLy8gdGhlIG1lc3NhZ2UgdHlwZWQgaW4gdGhlIGNoYXRcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBsZXQgY2hhcnRlc3QgPSAvXltBLVphLXowLTkgXFwuLFxcKFxcKVxcPzohJ1wiXSQvOyAvLyBBbGxvdyBsZXR0ZXIsIG51bWJlciwgc3BhY2UsIHBlcmlvZCwgY29tbWEsIHJvdW5kIGJyYWNrZXRzLCBxdWVzdGlvbiBtYXJrLCBjb2xvbiwgZXhjbGFtYXRpb24gbWFyaywgcXVvdGUsIGRvdWJsZSBxdW90ZVxyXG4gICAgLy8gaWYgKGV2ZW50LmtleS5tYXRjaChjaGFydGVzdCkpIHtcclxuICAgIC8vICAgbGV0IG5ld05leHRtc2cgPSBuZXh0bXNnICsgZXZlbnQua2V5O1xyXG4gICAgLy8gICBzZXROZXh0bXNnKG5ld05leHRtc2cpO1xyXG4gICAgLy8gfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJCYWNrc3BhY2VcIiAmJiBuZXh0bXNnLmxlbmd0aCA+IDApIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbGV0IG5ld05leHRtc2cgPSBuZXh0bXNnLnNsaWNlKDAsbmV4dG1zZy5sZW5ndGgtMSk7XHJcbiAgICAgIHNldE5leHRtc2cobmV3TmV4dG1zZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYkNoYXRcIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJDaGF0VGl0bGVcIj5DSEFUPC9zcGFuPlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwicGJDaGF0VGFibGVcIj5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7bXNncy5maWx0ZXIoKHZhbHVlLCBpbmRleCkgPT4gbXNncy5sZW5ndGggLSBpbmRleCA8IDE1KS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgQ2hhdE1lc3NhZ2Uke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkNoYXRGcm9tXCI+e3ZhbHVlLmZyb219PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJDaGF0TXNnXCI+e3ZhbHVlLm1zZ308L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMlwiPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e25leHRtc2cgPT09IFwiXCIgPyBcInBiQ2hhdElucHV0RW1wdHlcIiA6IFwicGJDaGF0SW5wdXRcIn1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJuZXh0bXNnSW5wdXRBcmVhXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXh0bXNnfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0TmV4dG1zZyhlLnRhcmdldC52YWx1ZSk7fX1cclxuICAgICAgICAgICAgICAgIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNoYXQuLi5cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoZWxlbWVudGlkKSA9PiB7XHJcbiAgY29uc3QgdGhlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRpZCk7XHJcbiAgdGhlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGVFbGVtZW50LnNjcm9sbEhlaWdodDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=