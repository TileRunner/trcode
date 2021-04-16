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
    lineNumber: 157,
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
    lineNumber: 170,
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
        lineNumber: 281,
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
              lineNumber: 284,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-row w3-section",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "w3-col myCommonFont",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Nickname:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 54
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 50
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "w3-input w3-border w3-rest myCommonFont",
          type: "text",
          name: "nickname",
          value: nickname,
          onChange: e => {
            setNickname(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row pbLobbyPrisonerSection",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "pbPlayerTitle",
          children: "PRISONERS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "pbLobbyGameIdPrompt",
          children: "Game ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "pbLobbyGameIdInput",
          name: "gameid",
          value: gameid,
          onChange: e => {
            setGameid(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "pbLobbyRackSizePrompt"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "selectracksize4",
          className: racksize === 4 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
          onClick: () => selectRackSize(4),
          "data-toggle": "tooltip",
          title: "4 letter racks, 9 x 9 board",
          autoFocus: true,
          children: "4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "selectracksize5",
          className: racksize === 5 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
          onClick: () => selectRackSize(5),
          "data-toggle": "tooltip",
          title: "5 letter racks, 11 x 11 board",
          children: "5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "selectracksize6",
          className: racksize === 6 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
          onClick: () => selectRackSize(6),
          "data-toggle": "tooltip",
          title: "6 letter racks, 13 x 13 board",
          children: "6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "selectracksize7",
          className: racksize === 7 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
          onClick: () => selectRackSize(7),
          "data-toggle": "tooltip",
          title: "7 letter racks, 15 x 15 board",
          children: "7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "pbLobbyCellBlockInfo",
          children: [racksize, " letter racks, ", racksize * 2 + 1, " x ", racksize * 2 + 1, " board."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "startgame",
          className: "pbLobbyActionButton",
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
          lineNumber: 336,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row pbLobbyGuardSection",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "pbPlayerTitle",
          children: "GUARDS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "pbLobbyGuardInfo",
          children: "Find and click the \"Join Game\" button for your game."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 56
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "If you lost connection, find and click the \"Reconnect\" button for your game id."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "pbLobbyGameListTitle",
          children: "Game list:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row pbLobbyGameList",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col offset-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              className: "pbLobbyGamesHeader",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                children: "Game ID"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 371,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                colSpan: "2",
                children: "Prisoners"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 372,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                colSpan: "2",
                children: "Guards"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 373,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                children: "Cell Block"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 374,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                children: "Game Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 375,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 369,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: gamelist.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              className: "pbGamesInProgressRow",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyGameid",
                children: value.gameid
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 381,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyPlayerIndicator",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "material-icons",
                  children: value.playingP ? "check_circle" : "cancel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 382,
                  columnNumber: 58
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 382,
                columnNumber: 19
              }, undefined), availableActionP(value) === availableActionNone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyActionNone",
                children: "No action available"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 384,
                columnNumber: 21
              }, undefined) : availableActionP(value) === availableActionReconnect ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                id: `PrisonersRejoin${index}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "pbLobbyActionButton",
                  onClick: function () {
                    setIsrejoin(true);
                    setGameid(value.gameid);
                    setPrisonersOrGuards('P');
                    setRacksize(value.racksize);
                  },
                  children: "Reconnect"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 387,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 386,
                columnNumber: 21
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                id: `PrisonersStart${index}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "pbLobbyActionButton",
                  onClick: function () {
                    setGameid(value.gameid);
                    setPrisonersOrGuards('P');
                  },
                  children: "Start Game"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 400,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 399,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyPlayerIndicator",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "material-icons",
                  children: value.playingG ? "check_circle" : "cancel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 410,
                  columnNumber: 58
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 410,
                columnNumber: 19
              }, undefined), availableActionG(value) === availableActionNone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyActionNone",
                children: "No action available"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 412,
                columnNumber: 21
              }, undefined) : availableActionG(value) === availableActionReconnect ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                id: `GuardsRejoin${index}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "pbLobbyActionButton",
                  onClick: function () {
                    setIsrejoin(true);
                    setGameid(value.gameid);
                    setPrisonersOrGuards('G');
                    setRacksize(value.racksize);
                  },
                  children: "Reconnect"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 415,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 414,
                columnNumber: 21
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                id: `GuardsJoin${index}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "pbLobbyActionButton",
                  onClick: function () {
                    setGameid(value.gameid);
                    setPrisonersOrGuards('G');
                    setRacksize(value.racksize);
                  },
                  children: "Join Game"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 428,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 427,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyGameRacksize",
                children: value.racksize
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 439,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyGameStatus",
                children: value.gamestatus
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 442,
                columnNumber: 19
              }, undefined)]
            }, `OtherGame${index}`, true, {
              fileName: _jsxFileName,
              lineNumber: 380,
              columnNumber: 17
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 378,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 279,
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
    lineNumber: 487,
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
      lineNumber: 492,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 491,
    columnNumber: 5
  }, undefined) : props.c === squareunused ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: tdvalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 495,
    columnNumber: 7
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `pbSquareTileText ${props.squareusedby + (props.c === "Q" ? " u" : "")}`,
      children: tdvalue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 499,
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
        lineNumber: 509,
        columnNumber: 9
      }, undefined)
    }, `Square${ri}-${ci}`, false, {
      fileName: _jsxFileName,
      lineNumber: 508,
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
        lineNumber: 524,
        columnNumber: 9
      }, undefined), squares[ri].map((c, ci) => renderSquare(ri, ci, c, usedby[ri][ci])), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        className: "pbBoardRowHeader",
        id: "BoardHeaderRight",
        children: boardRowHeaders[ri]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 528,
        columnNumber: 9
      }, undefined)]
    }, `BoardRow${ri}`, true, {
      fileName: _jsxFileName,
      lineNumber: 523,
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
          lineNumber: 539,
          columnNumber: 11
        }, undefined), squares.map((_$, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardColumnHeader",
          children: boardColumnHeaders[i]
        }, `TopColumnHeader${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 541,
          columnNumber: 13
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardHeaderTopRight",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 545,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 538,
        columnNumber: 9
      }, undefined), squares.map((r, ri) => renderRow(ri)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
        className: "pbBoardColumnHeaderRow",
        id: "BoardHeaderBottom",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardHeaderBottomLeft",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 549,
          columnNumber: 11
        }, undefined), squares.map((_$, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardColumnHeader",
          children: boardColumnHeaders[i]
        }, `BottomColumnHeader${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 551,
          columnNumber: 13
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardHeaderBottomRight",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 555,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 548,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 536,
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
    className: "container-fluid prisonbreak",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2 pbGameid formalinfo",
        children: ["Game id: ", gameid, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1585,
          columnNumber: 28
        }, undefined), "Nickname: ", nickname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1584,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-8 pbtitle",
        children: ["Prison Break", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "material-icons",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1590,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1588,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2 pbhomelink formalinfo",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "../../",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "material-icons",
              "data-toggle": "tooltip",
              title: "Home",
              children: "home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1594,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1594,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1593,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1596,
          columnNumber: 11
        }, undefined), "Opponent: ", oppname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1592,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1583,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbPlayerOuterSection",
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
          lineNumber: 1602,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1601,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col pbBoardPlusUnderboard",
        children: [prisonersOrGuards === whoseturn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
            lineNumber: 1622,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1621,
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
            lineNumber: 1632,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1631,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pbUnderboard",
          children: whoseturn === "X" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Game Over!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1643,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: jokes[jokeindex]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1645,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1641,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1619,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbPlayerOuterSection",
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
          lineNumber: 1650,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1649,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col pbTileAndMovesOuter",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowUnseenTiles, {
              tiles: tiles,
              othertiles: prisonersOrGuards === "P" ? gtiles : ptiles
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1669,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowMoves, {
              moves: moves
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1670,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1668,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Chat, {
              gameid: gameid,
              client: client,
              nickname: nickname,
              msgs: chatmsgs,
              setMsgs: setChatmsgs,
              prisonersOrGuards: prisonersOrGuards
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1673,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1672,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 1667,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1666,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1600,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1582,
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
      lineNumber: 1696,
      columnNumber: 7
    }, undefined), unseenTiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== unseenTiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1700,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: t === "Q" ? "pbTilepoolTile u" : "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1704,
        columnNumber: 11
      }, undefined)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 1698,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1695,
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
      lineNumber: 1714,
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
            lineNumber: 1718,
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
            lineNumber: 1720,
            columnNumber: 13
          }, undefined)]
        }, `move${mi}`, true, {
          fileName: _jsxFileName,
          lineNumber: 1717,
          columnNumber: 11
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1715,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1713,
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
      lineNumber: 1743,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1742,
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
        lineNumber: 1751,
        columnNumber: 44
      }, undefined), "\xA0Finish Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1751,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1750,
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
        lineNumber: 1759,
        columnNumber: 44
      }, undefined), "\xA0Recall Tiles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1759,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1758,
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
        lineNumber: 1767,
        columnNumber: 44
      }, undefined), "\xA0Swap Tiles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1767,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1766,
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
        lineNumber: 1775,
        columnNumber: 44
      }, undefined), "\xA0Pass Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1775,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1774,
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
        lineNumber: 1783,
        columnNumber: 50
      }, undefined), "\xA0Allow Undo Turn", props.alreadyAllowed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbActionButtonSevereText2",
        children: "Allow undo is now enabled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1786,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbActionButtonSevereText2",
        children: "Click to let opponent undo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1788,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1783,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1782,
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
        lineNumber: 1798,
        columnNumber: 50
      }, undefined), "\xA0Undo My Turn", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbActionButtonSevereText2",
        children: "Opponent has allowed undo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1800,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1798,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1797,
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
        lineNumber: 1813,
        columnNumber: 9
      }, undefined)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 1812,
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
        lineNumber: 1823,
        columnNumber: 67
      }, undefined), "\xA0PRISONERS\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "run_circle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1823,
        columnNumber: 132
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1823,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbTilerack",
      children: props.ptiles.map((t, ti) => renderTile(props.whoseturn === "P" && props.selection === ti ? t === "Q" && props.prisonersOrGuards === "P" ? "pbTileOnRack Selected P u" : "pbTileOnRack Selected P" : t === "Q" && props.prisonersOrGuards === "P" ? "pbTileOnRack Unselected P u" : "pbTileOnRack Unselected P", ti, props.prisonersOrGuards === "P" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1824,
      columnNumber: 7
    }, undefined), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? showActionButtons(props) : props.prisonersOrGuards === "P" && props.moves.length > 0 && props.allowRewind && props.moves[props.moves.length - 1].by === "P" ? showActionButtonUndoLastPlay(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.prisonersOrGuards === "P" && props.moves.length > 0 && props.moves[props.moves.length - 1].by === "G" ? showActionButtonAllowUndo(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbRescuesMade",
      children: ["Rescues made: ", props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1849,
        columnNumber: 9
      }, undefined), renderFreedPrisoners(props.rescues)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1847,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1822,
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
        lineNumber: 1861,
        columnNumber: 38
      }, undefined), "\xA0GUARDS\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "security"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1861,
        columnNumber: 98
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1861,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbTilerack",
      children: props.gtiles.map((t, ti) => renderTile(props.whoseturn === "G" && props.selection === ti ? t === "Q" && props.prisonersOrGuards === "G" ? "pbTileOnRack Selected G u" : "pbTileOnRack Selected G" : t === "Q" && props.prisonersOrGuards === "G" ? "pbTileOnRack Unselected G u" : "pbTileOnRack Unselected G", ti, props.prisonersOrGuards === "G" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1862,
      columnNumber: 7
    }, undefined), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? showActionButtons(props) : props.prisonersOrGuards === "G" && props.moves.length > 0 && props.allowRewind && props.moves[props.moves.length - 1].by === "G" ? showActionButtonUndoLastPlay(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.prisonersOrGuards === "G" && props.moves.length > 0 && props.moves[props.moves.length - 1].by === "P" ? showActionButtonAllowUndo(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1860,
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
      lineNumber: 1893,
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
      lineNumber: 1899,
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
        lineNumber: 1911,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1910,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
        onClick: () => props.onClickTileRecall()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1914,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1913,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
        onClick: () => props.onClickTileExchange()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1917,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1916,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
        onClick: () => props.onClickPassPlay()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1920,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1919,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1909,
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
        lineNumber: 1927,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1926,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1925,
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
        lineNumber: 1934,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1933,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1932,
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
      lineNumber: 1974,
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
            lineNumber: 1979,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "pbChatMsg",
            children: value.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1980,
            columnNumber: 15
          }, undefined)]
        }, `ChatMessage${index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 1978,
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
              onKeyDownCapture: handleKeyDown
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1985,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1984,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1983,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1976,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1975,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1973,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImJvYXJkQ29sdW1uSGVhZGVycyIsImJvYXJkUm93SGVhZGVycyIsIm1vdmV3YWl0dGltZSIsImpva2VzIiwiaW5pdGlhbHRpbGVzNCIsImluaXRpYWx0aWxlczUiLCJpbml0aWFsdGlsZXM2IiwiaW5pdGlhbHRpbGVzNyIsInNxdWFyZXVudXNlZCIsInVzZWRieW5vb25lIiwibm9kaXJlY3Rpb24iLCJhdmFpbGFibGVBY3Rpb25Ob25lIiwiYXZhaWxhYmxlQWN0aW9uU3RhcnQiLCJhdmFpbGFibGVBY3Rpb25Kb2luIiwiYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0IiwiUHJpc29uQnJlYWsiLCJpc3Jlam9pbiIsInNldElzcmVqb2luIiwidXNlU3RhdGUiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJuaWNrbmFtZSIsInNldE5pY2tuYW1lIiwicHJpc29uZXJzT3JHdWFyZHMiLCJzZXRQcmlzb25lcnNPckd1YXJkcyIsIndzbWVzc2FnZSIsInNldFdzbWVzc2FnZSIsInJhY2tzaXplIiwic2V0UmFja3NpemUiLCJob3N0IiwiYWNjZXB0TWVzc2FnZSIsIm1lc3NhZ2UiLCJkYXRhIiwiY2xpZW50IiwiQ3VzdG9tU29ja2V0IiwidXNlRWZmZWN0IiwiY29ubmVjdCIsIkxvYmJ5IiwiZ2FtZWxpc3QiLCJzZXRHYW1lbGlzdCIsIm1zZyIsInByb2Nlc3NMb2JieU1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsInNlbmRlcmdhbWVpZCIsInNlbmRlcm5pY2tuYW1lIiwid3QiLCJ3aG9zZXR1cm4iLCJycyIsImxlbmd0aCIsImFueVVwZGF0ZXMiLCJzZW5kZXJQRyIsInNlbmRlciIsIm5ld0dhbWVsaXN0IiwiZ2kiLCJnZXRHYW1lbGlzdEluZGV4IiwibmV3UGxheWluZ1AiLCJwbGF5aW5nUCIsIm5ld1BsYXlpbmdHIiwicGxheWluZ0ciLCJuZXdSYWNrc2l6ZSIsIm5ld2dhbWVzdGF0dXMiLCJuZXdnYW1lZGF0YSIsIm5pY2tuYW1lUCIsIm5pY2tuYW1lRyIsImdhbWVzdGF0dXMiLCJvbGRnYW1lZGF0YSIsIndpbmRvdyIsImFsZXJ0IiwiZ2lkIiwiaSIsImlzUGxheWluZ1AiLCJhdmFpbGFibGVBY3Rpb25QIiwiZ2QiLCJhdmFpbGFibGVBY3Rpb25HIiwic2VsZWN0UmFja1NpemUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpbmRleCIsIlNxdWFyZSIsInByb3BzIiwiZWRnZSIsIm1pZGRsZSIsInRkY2xhc3MiLCJjIiwicmNkIiwicmkiLCJjaSIsInRkdmFsdWUiLCJpbmRleE9mIiwib25DbGljayIsInNxdWFyZXVzZWRieSIsIkJvYXJkIiwic3F1YXJlcyIsInVzZWRieSIsInJlbmRlclNxdWFyZSIsInJlbmRlclJvdyIsIl8kIiwiciIsIkdhbWUiLCJpbml0aWFsdGlsZXMiLCJpbml0aWFsc3F1YXJlcyIsIkFycmF5IiwiZmlsbCIsImluaXRpYWx1c2VkYnkiLCJ0aWxlcyIsInNldFRpbGVzIiwicHRpbGVzIiwic2V0UHRpbGVzIiwiZ3RpbGVzIiwic2V0R3RpbGVzIiwic2V0U3F1YXJlcyIsInNldFVzZWRieSIsInNlbGVjdGlvbiIsInNldFNlbGVjdGlvbiIsInNldFdob3NldHVybiIsImN1cnJlbnRjb29yZHMiLCJzZXRDdXJyZW50Y29vcmRzIiwicmVzY3VlcyIsInNldFJlc2N1ZXMiLCJzZXRSY2QiLCJwYXNzZWQiLCJzZXRQYXNzZWQiLCJtb3ZlcyIsInNldE1vdmVzIiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsImpva2VpbmRleCIsInNldEpva2VpbmRleCIsImFsbG93UmV3aW5kIiwic2V0QWxsb3dSZXdpbmQiLCJvcHBuYW1lIiwic2V0T3BwbmFtZSIsImNoYXRtc2dzIiwic2V0Q2hhdG1zZ3MiLCJuZXdqaSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwicmVxdWVzdEdhbWVEYXRhIiwiY2xlYXJJbnRlcnZhbCIsInRlbXBQVGlsZXMiLCJ0ZW1wR1RpbGVzIiwidGVtcFRpbGVzIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzcGxpY2UiLCJzb3J0Iiwic2VuZCIsInN0cmluZ2lmeSIsInR5cGUiLCJmdW5jIiwicHJvY2Vzc0dhbWVNZXNzYWdlIiwic2Nyb2xsVG9Cb3R0b20iLCJwdXRBdE1vdmVTdGFydCIsIm5ld0NoYXRtc2dzIiwiZnJvbSIsInNlbmRtc2ciLCJoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIiwibmV3U2VsZWN0aW9uIiwibmV3UmNkIiwibmV3U3F1YXJlcyIsIm5ld1VzZWRieSIsIm5ld1B0aWxlcyIsIm5ld0d0aWxlcyIsIm5ld1JvdyIsInNxdWFyZXZhbHVlIiwibmV3Q3VycmVudGNvb3JkcyIsImNvb3JkIiwiU3RyaW5nIiwiY2NpIiwibmV3VXNlZGJ5Um93IiwibmV3RGlyZWN0aW9uIiwiaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2siLCJ0aWxlaW5kZXgiLCJoYW5kbGVHdWFyZFRpbGVDbGljayIsImVuZFByaXNvbmVyc1R1cm4iLCJpc1BsYXlWYWxpZCIsInJld2luZEluZm8iLCJnZXRSZXdpbmRJbmZvIiwibmV3UmVzY3VlcyIsImVzY2FwZWhhdGNoZXMiLCJuZXdUaWxlcyIsIm5ld1dob3NldHVybiIsInBsYXlpbmZvIiwiZ2V0UGxheUluZm8iLCJuZXdNb3ZlIiwiYnkiLCJtYWlud29yZCIsImV4dHJhd29yZHMiLCJwb3MiLCJuZXdNb3ZlcyIsImVuZEd1YXJkc1R1cm4iLCJzbmFwc3F1YXJlcyIsInNuYXB1c2VkYnkiLCJzbmFwcHRpbGVzIiwic25hcGd0aWxlcyIsInN3YXBQcmlzb25lcnNUaWxlcyIsInN3YXBHdWFyZHNUaWxlcyIsIm51bXJvd3MiLCJudW1jb2xzIiwibG93cm93IiwiaGlnaHJvdyIsImxvd2NvbCIsImhpZ2hjb2wiLCJwbGF5dGhydSIsImhvb2ttYWRlIiwid29yZHN0YXJ0Y29vcmQiLCJudW1jb29yZHMiLCJyb3ciLCJwYXJzZUludCIsInNwbGl0IiwiY29sIiwibG93ZXN0cm93IiwiaGlnaGVzdHJvdyIsImxvd2VzdGNvbCIsImhpZ2hlc3Rjb2wiLCJleHRyYXdvcmQiLCJyYWNrIiwiYWxsb3dVbmRvTGFzdFR1cm4iLCJwZXJmb3JtUmV3aW5kIiwibnVtTW92ZXMiLCJsYXN0TW92ZSIsIm5ld1NuYXBzaG90IiwibmV3UGFzc2VkIiwicmVjYWxsVGlsZXMiLCJwcmlzb25lclBhc3MiLCJndWFyZHNQYXNzIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJrZXkiLCJsZXR0ZXJ0ZXN0IiwibWF0Y2giLCJsZXR0ZXIiLCJ0b1VwcGVyQ2FzZSIsImRpciIsIm5ld2MiLCJuZXdyIiwicmV0dXJuZWRUaWxlIiwidGkiLCJTaG93VW5zZWVuVGlsZXMiLCJ1bnNlZW5UaWxlcyIsIm90aGVydGlsZXMiLCJ0IiwiU2hvd01vdmVzIiwibSIsIm1pIiwicmVwbGFjZSIsInciLCJSYWNrVGlsZSIsInRpbGVjbGFzcyIsInRpbGV2YWx1ZSIsIkZpbmlzaFR1cm5CdXR0b24iLCJUaWxlUmVjYWxsQnV0dG9uIiwiVGlsZUV4Y2hhbmdlQnV0dG9uIiwiUGFzc1BsYXlCdXR0b24iLCJBbGxvd1VuZG9MYXN0UGxheSIsImFscmVhZHlBbGxvd2VkIiwiVW5kb0xhc3RQbGF5IiwiUHJpc29uZXJzIiwicmVuZGVyVGlsZSIsInJlbmRlclBsYXllclRpbGUiLCJyZW5kZXJGcmVlZFByaXNvbmVycyIsImNvdW50IiwiZHVtYiIsInNob3dBY3Rpb25CdXR0b25zIiwic2hvd0FjdGlvbkJ1dHRvblVuZG9MYXN0UGxheSIsInNob3dBY3Rpb25CdXR0b25BbGxvd1VuZG8iLCJHdWFyZHMiLCJvbkNsaWNrRmluaXNoVHVybiIsIm9uQ2xpY2tUaWxlUmVjYWxsIiwib25DbGlja1RpbGVFeGNoYW5nZSIsIm9uQ2xpY2tQYXNzUGxheSIsIm9uQ2xpY2tBbGxvd1VuZG8iLCJvbkNsaWNrVW5kb0xhc3RQbGF5IiwiQ2hhdCIsIm1zZ3MiLCJzZXRNc2dzIiwibmV4dG1zZyIsInNldE5leHRtc2ciLCJuZXdNc2dzIiwibmV3TmV4dG1zZyIsInNsaWNlIiwiZmlsdGVyIiwiZWxlbWVudGlkIiwidGhlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxrQkFBa0IsR0FBRyxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsRUFBeUIsR0FBekIsRUFBNkIsR0FBN0IsRUFBaUMsR0FBakMsRUFBcUMsR0FBckMsRUFBeUMsR0FBekMsRUFBNkMsR0FBN0MsRUFBaUQsR0FBakQsRUFBcUQsR0FBckQsRUFBeUQsR0FBekQsQ0FBM0I7QUFDQSxNQUFNQyxlQUFlLEdBQUcsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxHQUFiLEVBQWlCLEdBQWpCLEVBQXFCLEdBQXJCLEVBQXlCLEdBQXpCLEVBQTZCLEdBQTdCLEVBQWlDLEdBQWpDLEVBQXFDLElBQXJDLEVBQTBDLElBQTFDLEVBQStDLElBQS9DLEVBQW9ELElBQXBELEVBQXlELElBQXpELEVBQThELElBQTlELENBQXhCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLEtBQXJCLEMsQ0FBNEI7O0FBQzVCLE1BQU1DLEtBQUssR0FBRyxDQUNaLGdCQUFnQixvQkFBaEIsR0FBdUMsbUJBQXZDLEdBQTRELG9CQUE1RCxHQUFtRixHQUR2RSxFQUVaLCtEQUZZLEVBR1osNkRBSFksRUFJWixrRUFKWSxFQUtaLDZFQUxZLEVBTVosZ0VBTlksQ0FBZDtBQVFBLE1BQU1DLGFBQWEsR0FBRyxDQUNwQixHQURvQixFQUNkLEdBRGMsRUFDUixHQURRLEVBRXBCLEdBRm9CLEVBR3BCLEdBSG9CLEVBSXBCLEdBSm9CLEVB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LEVBQUMsV0FBZDtBQUFBLHNCQUEyQnRGLEtBQUssQ0FBQ3ZDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQSxXQUFVLGNBQWF5QyxLQUFNLEVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsQ0FESCxlQU9FO0FBQUEsaUNBQ0U7QUFBSSxtQkFBTyxFQUFDLEdBQVo7QUFBQSxtQ0FDRTtBQUFVLHVCQUFTLEVBQUUrTSxPQUFPLEtBQUssRUFBWixHQUFpQixrQkFBakIsR0FBc0MsYUFBM0Q7QUFDRSxrQkFBSSxFQUFDLGtCQURQO0FBRUUsbUJBQUssRUFBRUEsT0FGVDtBQUdFLHNCQUFRLEVBQUduTixDQUFELElBQU87QUFBQ29OLDBCQUFVLENBQUNwTixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFWO0FBQTRCLGVBSGhEO0FBSUUsOEJBQWdCLEVBQUU4SjtBQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXlCRCxDQTNERDs7SUFBTWdELEk7O09BQUFBLEk7O0FBNkROLE1BQU0zSCxjQUFjLEdBQUlvSSxTQUFELElBQWU7QUFDcEMsUUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JILFNBQXhCLENBQW5CO0FBQ0FDLFlBQVUsQ0FBQ0csU0FBWCxHQUF1QkgsVUFBVSxDQUFDSSxZQUFsQztBQUNELENBSEQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGIvcHJpc29uYnJlYWsyLjJlOWQ2YWJhM2I2ZjNlMDRmNzAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBDdXN0b21Tb2NrZXQgZnJvbSBcIi4uLy4uL3dzXCI7XHJcbmNvbnN0IGJvYXJkQ29sdW1uSGVhZGVycyA9IFsnQScsJ0InLCdDJywnRCcsJ0UnLCdGJywnRycsJ0gnLCdJJywnSicsJ0snLCdMJywnTScsJ04nLCdPJ107XHJcbmNvbnN0IGJvYXJkUm93SGVhZGVycyA9IFsnMScsJzInLCczJywnNCcsJzUnLCc2JywnNycsJzgnLCc5JywnMTAnLCcxMScsJzEyJywnMTMnLCcxNCcsJzE1J107XHJcbmNvbnN0IG1vdmV3YWl0dGltZSA9IDIwMDAwOyAvLyB3aGVuIHdhaXRpbmcgZm9yIG9wcG9uZW50IHBpbmcgZXZlcnkgdGhpcyBtYW55IG1pbGxpc2Vjb25kc1xyXG5jb25zdCBqb2tlcyA9IFtcclxuICAnRXNjYXBlZTogXCJJJyArIFwiJ20gZnJlZSEgSSdtIGZyZWUhXCIgKyAnXCIuIExpdHRsZSBraWQ6IFwiSScrIFwiJ20gZm91ciEgSSdtIGZvdXIhXCIgKyAnXCInLFxyXG4gICdUd28gcGVhbnV0cyB3ZXJlIHdhbGtpbmcgZG93biBhIGJhY2sgYWxsZXkuIE9uZSB3YXMgYSBzYWx0ZWQuJyxcclxuICBcIlRoZSBwc3ljaGljIGR3YXJmIGVzY2FwZWQhIFRoZXJlJ3MgYSBzbWFsbCBtZWRpdW0gYXQgbGFyZ2UhXCIsXHJcbiAgJ1doYXQgZG8geW91IGNhbGwgYSB2ZWdldGFibGUgd2hvIGhhcyBlc2NhcGVkIHByaXNvbj8gQW4gZXNjYXBlYSEnLFxyXG4gIFwiVGhlIHByaXNvbmVycyBmYXZlIHB1bmN0dWF0aW9uIGlzIGEgcGVyaW9kLiBJdCBtYXJrcyB0aGUgZW5kIG9mIGEgc2VudGVuY2UhXCIsXHJcbiAgXCJQcmlzb24gaXMgb25seSBvbmUgd29yZCwgYnV0IHRvIHJvYmJlcnMgaXQncyBhIHdob2xlIHNlbnRlbmNlLlwiXHJcbl07XHJcbmNvbnN0IGluaXRpYWx0aWxlczQgPSBbXHJcbiAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLFxyXG4gIFwiQlwiLFxyXG4gIFwiQ1wiLFxyXG4gIFwiRFwiLFxyXG4gIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gIFwiRlwiLFxyXG4gIFwiR1wiLFxyXG4gIFwiSFwiLFxyXG4gIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIixcclxuICBcIk1cIixcclxuICBcIk5cIiwgIFwiTlwiLFxyXG4gIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLFxyXG4gIFwiU1wiLFxyXG4gIFwiVFwiLCAgXCJUXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDQgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBpbml0aWFsdGlsZXM1ID0gW1xyXG4gIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsXHJcbiAgXCJCXCIsXHJcbiAgXCJDXCIsXHJcbiAgXCJEXCIsICBcIkRcIixcclxuICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJIXCIsXHJcbiAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIiwgIFwiTFwiLFxyXG4gIFwiTVwiLFxyXG4gIFwiTlwiLCAgXCJOXCIsICBcIk5cIixcclxuICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsXHJcbiAgXCJTXCIsICBcIlNcIixcclxuICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDUgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBpbml0aWFsdGlsZXM2ID0gW1xyXG4gIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLFxyXG4gIFwiQlwiLCAgXCJCXCIsXHJcbiAgXCJDXCIsICBcIkNcIixcclxuICBcIkRcIiwgIFwiRFwiLCAgXCJEXCIsXHJcbiAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gIFwiRlwiLFxyXG4gIFwiR1wiLCAgXCJHXCIsXHJcbiAgXCJIXCIsICBcIkhcIixcclxuICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIiwgIFwiTFwiLCAgXCJMXCIsXHJcbiAgXCJNXCIsICBcIk1cIixcclxuICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIixcclxuICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsXHJcbiAgXCJQXCIsICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLFxyXG4gIFwiU1wiLCAgXCJTXCIsICBcIlNcIixcclxuICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIixcclxuICBcIlVcIiwgIFwiVVwiLCAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDYgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBpbml0aWFsdGlsZXM3ID0gW1xyXG4gIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIixcclxuICBcIkJcIiwgIFwiQlwiLFxyXG4gIFwiQ1wiLCAgXCJDXCIsXHJcbiAgXCJEXCIsICBcIkRcIiwgIFwiRFwiLCAgXCJEXCIsXHJcbiAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gIFwiRlwiLCAgXCJGXCIsXHJcbiAgXCJHXCIsICBcIkdcIiwgIFwiR1wiLFxyXG4gIFwiSFwiLCAgXCJIXCIsXHJcbiAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gIFwiSlwiLFxyXG4gIFwiS1wiLFxyXG4gIFwiTFwiLCAgXCJMXCIsICBcIkxcIiwgIFwiTFwiLFxyXG4gIFwiTVwiLCAgXCJNXCIsXHJcbiAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLFxyXG4gIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsXHJcbiAgXCJQXCIsICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsXHJcbiAgXCJTXCIsICBcIlNcIiwgIFwiU1wiLCAgXCJTXCIsXHJcbiAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLFxyXG4gIFwiVVwiLCAgXCJVXCIsICBcIlVcIiwgIFwiVVwiLFxyXG4gIFwiVlwiLCAgXCJWXCIsXHJcbiAgXCJXXCIsICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIiwgIFwiWVwiLFxyXG4gIFwiWlwiLFxyXG4gIFwiP1wiLCAgXCI/XCIsXHJcbl07IC8vIGluaXRpYWwgdGlsZSBwb29sIGZvciA3IGxldHRlciByYWNrIG1vZGVcclxuY29uc3Qgc3F1YXJldW51c2VkID0gXCIuXCI7XHJcbmNvbnN0IHVzZWRieW5vb25lID0gXCJcIjtcclxuY29uc3Qgbm9kaXJlY3Rpb24gPSBcIlwiO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25Ob25lID0gMDtcclxuY29uc3QgYXZhaWxhYmxlQWN0aW9uU3RhcnQgPSAxO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25Kb2luID0gMjtcclxuY29uc3QgYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0ID0gMztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaXNvbkJyZWFrKCkge1xyXG4gIGNvbnN0IFtpc3Jlam9pbiwgc2V0SXNyZWpvaW5dID0gdXNlU3RhdGUoZmFsc2UpIC8vIFVzZWQgd2hlbiBwbGF5ZXIgbG9zZXMgY29ubmVjdGlvbiBhbmQgcmVqb2luc1xyXG4gIGNvbnN0IFtnYW1laWQsIHNldEdhbWVpZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbmlja25hbWUsIHNldE5pY2tuYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwcmlzb25lcnNPckd1YXJkcywgc2V0UHJpc29uZXJzT3JHdWFyZHNdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3dzbWVzc2FnZSwgc2V0V3NtZXNzYWdlXSA9IHVzZVN0YXRlKCcnKSAvLyBMYXRlc3QgbWVzc2FnZXMgZnJvbSB0aGUgd2Vic29ja2V0XHJcbiAgY29uc3QgW3JhY2tzaXplLCBzZXRSYWNrc2l6ZV0gPSB1c2VTdGF0ZSg0KTsgLy8gRGVmYXVsdCB0byA0IGxldHRlciByYWNrc1xyXG4gIGxldCBob3N0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICd3c3M6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nIDogJ3dzOi8vbG9jYWxob3N0OjUwMDAnO1xyXG4gIGNvbnN0IGFjY2VwdE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgLy8gUmVhY3QgaXMgaGFyZCB0byB1bmRlcnN0YW5kLiBJZiBJIHJlZmVyZW5jZSBwcmlzb25lcnNPckd1YXJkcyBoZXJlIGl0IHdpbGwgYWx3YXlzIGJlIHRoZSBpbml0aWFsIHZhbHVlLlxyXG4gICAgc2V0V3NtZXNzYWdlKG1lc3NhZ2UuZGF0YSlcclxuICB9XHJcbiAgY29uc3QgW2NsaWVudF0gPSB1c2VTdGF0ZShuZXcgQ3VzdG9tU29ja2V0KGhvc3QsIGFjY2VwdE1lc3NhZ2UpKTtcclxuICB1c2VFZmZlY3QoKCkgPT4gKFxyXG4gICAgY2xpZW50LmNvbm5lY3QoKVxyXG4gICksW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICBwcmlzb25lcnNPckd1YXJkcyA9PT0gJycgP1xyXG4gICAgICA8TG9iYnlcclxuICAgICAgICBzZXRJc3Jlam9pbj17c2V0SXNyZWpvaW59XHJcbiAgICAgICAgd3NtZXNzYWdlPXt3c21lc3NhZ2V9XHJcbiAgICAgICAgLy8gY2xpZW50PXtjbGllbnR9XHJcbiAgICAgICAgZ2FtZWlkPXtnYW1laWR9XHJcbiAgICAgICAgc2V0R2FtZWlkPXtzZXRHYW1laWR9XHJcbiAgICAgICAgbmlja25hbWU9e25pY2tuYW1lfVxyXG4gICAgICAgIHNldE5pY2tuYW1lPXtzZXROaWNrbmFtZX1cclxuICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcz17c2V0UHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgcmFja3NpemU9e3JhY2tzaXplfVxyXG4gICAgICAgIHNldFJhY2tzaXplPXtzZXRSYWNrc2l6ZX1cclxuICAgICAgLz5cclxuICAgIDpcclxuICAgICAgPEdhbWVcclxuICAgICAgICBpc3Jlam9pbj17aXNyZWpvaW59XHJcbiAgICAgICAgcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICAgIGdhbWVpZD17Z2FtZWlkfVxyXG4gICAgICAgIG5pY2tuYW1lPXtuaWNrbmFtZX1cclxuICAgICAgICB3c21lc3NhZ2U9e3dzbWVzc2FnZX1cclxuICAgICAgICBjbGllbnQ9e2NsaWVudH1cclxuICAgICAgICByYWNrc2l6ZT17cmFja3NpemV9XHJcbiAgICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBMb2JieSA9ICh7c2V0SXNyZWpvaW4sIHdzbWVzc2FnZSwgZ2FtZWlkLCBzZXRHYW1laWQsIG5pY2tuYW1lLCBzZXROaWNrbmFtZSwgc2V0UHJpc29uZXJzT3JHdWFyZHNcclxuICAsIHJhY2tzaXplLCBzZXRSYWNrc2l6ZSAvLyBPcHRpb24gZm9yIHJhY2sgc2l6ZVxyXG4gIH0pID0+IHtcclxuICBjb25zdCBbZ2FtZWxpc3QsIHNldEdhbWVsaXN0XSA9IHVzZVN0YXRlKFtdKSAvLyBHYW1lIGluZm8gYnkgZ2FtZSBpZFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzTG9iYnlNZXNzYWdlKG1zZyk7XHJcbiAgfSxbd3NtZXNzYWdlXSlcclxuXHJcbiAgZnVuY3Rpb24gcHJvY2Vzc0xvYmJ5TWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICBsZXQgc2VuZGVyZ2FtZWlkID0gbWVzc2FnZURhdGEuZ2FtZWlkO1xyXG4gICAgICBsZXQgc2VuZGVybmlja25hbWUgPSBtZXNzYWdlRGF0YS5uaWNrbmFtZTtcclxuICAgICAgbGV0IHd0ID0gbWVzc2FnZURhdGEud2hvc2V0dXJuO1xyXG4gICAgICBsZXQgcnMgPSBtZXNzYWdlRGF0YS5yYWNrc2l6ZTtcclxuICAgICAgaWYgKHNlbmRlcmdhbWVpZCAmJiBzZW5kZXJnYW1laWQubGVuZ3RoID4gMCAmJiBycyAmJiB3dCAmJiB3dC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGFueVVwZGF0ZXMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgc2VuZGVyUEcgPSBtZXNzYWdlRGF0YS5zZW5kZXI7XHJcbiAgICAgICAgbGV0IG5ld0dhbWVsaXN0ID0gWy4uLmdhbWVsaXN0XTtcclxuICAgICAgICBsZXQgZ2kgPSBnZXRHYW1lbGlzdEluZGV4KHNlbmRlcmdhbWVpZCk7XHJcbiAgICAgICAgbGV0IG5ld1BsYXlpbmdQID0gc2VuZGVyUEcgPT09IFwiUFwiID8gdHJ1ZSA6IGdpID4gLTEgPyBnYW1lbGlzdFtnaV0ucGxheWluZ1AgOiBmYWxzZTtcclxuICAgICAgICBsZXQgbmV3UGxheWluZ0cgPSBzZW5kZXJQRyA9PT0gXCJHXCIgPyB0cnVlIDogZ2kgPiAtMSA/IGdhbWVsaXN0W2dpXS5wbGF5aW5nRyA6IGZhbHNlO1xyXG4gICAgICAgIGxldCBuZXdSYWNrc2l6ZSA9IHJzO1xyXG5cclxuICAgICAgICBsZXQgbmV3Z2FtZXN0YXR1cyA9IFwiVW5rbm93blwiO1xyXG4gICAgICAgIGlmICh3dCA9PT0gXCJYXCIpIHtcclxuICAgICAgICAgIG5ld2dhbWVzdGF0dXMgPSBcIkdhbWUgb3ZlclwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod3QgPT09IFwiUFwiKSB7XHJcbiAgICAgICAgICBuZXdnYW1lc3RhdHVzID0gXCJQcmlzb25lcnMgdHVyblwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod3QgPT09IFwiR1wiKSB7XHJcbiAgICAgICAgICBuZXdnYW1lc3RhdHVzID0gXCJHdWFyZHMgdHVyblwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld2dhbWVkYXRhID0ge1xyXG4gICAgICAgICAgZ2FtZWlkOiBzZW5kZXJnYW1laWQsXHJcbiAgICAgICAgICBuaWNrbmFtZVA6IHNlbmRlclBHID09PSBcIlBcIiA/IHNlbmRlcm5pY2tuYW1lIDogZ2kgPiAtMSA/IGdhbWVsaXN0W2dpXS5uaWNrbmFtZVAgOiBcIlwiLFxyXG4gICAgICAgICAgbmlja25hbWVHOiBzZW5kZXJQRyA9PT0gXCJHXCIgPyBzZW5kZXJuaWNrbmFtZSA6IGdpID4gLTEgPyBnYW1lbGlzdFtnaV0ubmlja25hbWVHIDogXCJcIixcclxuICAgICAgICAgIGdhbWVzdGF0dXM6IG5ld2dhbWVzdGF0dXMsXHJcbiAgICAgICAgICBwbGF5aW5nUDogbmV3UGxheWluZ1AsXHJcbiAgICAgICAgICBwbGF5aW5nRzogbmV3UGxheWluZ0csXHJcbiAgICAgICAgICByYWNrc2l6ZTogbmV3UmFja3NpemVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdpIDwgMCkgeyAvLyBHYW1lIG5vdCBpbiBsaXN0IHlldCwgcHV0IGl0IGluIHRoZSBsaXN0XHJcbiAgICAgICAgICBhbnlVcGRhdGVzID0gdHJ1ZTtcclxuICAgICAgICAgIG5ld0dhbWVsaXN0ID0gWy4uLm5ld0dhbWVsaXN0LCBuZXdnYW1lZGF0YV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyAvLyBHYW1lIGlzIGluIHRoZSBsaXN0LCBjaGVjayBmb3IgbmVlZGVkIHVwZGF0ZXNcclxuICAgICAgICAgIGxldCBvbGRnYW1lZGF0YSA9IGdhbWVsaXN0W2dpXTtcclxuICAgICAgICAgIGlmIChvbGRnYW1lZGF0YS5uaWNrbmFtZVAgIT09IG5ld2dhbWVkYXRhLm5pY2tuYW1lUCB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLm5pY2tuYW1lRyAhPT0gbmV3Z2FtZWRhdGEubmlja25hbWVHIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEuZ2FtZXN0YXR1cyAhPT0gbmV3Z2FtZWRhdGEuZ2FtZXN0YXR1cyB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLnBsYXlpbmdQICE9PSBuZXdnYW1lZGF0YS5wbGF5aW5nUCB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLnBsYXlpbmdHICE9PSBuZXdnYW1lZGF0YS5wbGF5aW5nRyB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLnJhY2tzaXplICE9PSBuZXdnYW1lZGF0YS5yYWNrc2l6ZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBhbnlVcGRhdGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBuZXdHYW1lbGlzdFtnaV0gPSBuZXdnYW1lZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYW55VXBkYXRlcykge1xyXG4gICAgICAgICAgc2V0R2FtZWxpc3QobmV3R2FtZWxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSAgXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiRXJyb3IgcHJvY2Vzc2luZyBsb2JieSBtZXNzYWdlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBnZXRHYW1lbGlzdEluZGV4KGdpZCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnYW1lbGlzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICBpZiAoZ2FtZWxpc3RbaV0uZ2FtZWlkID09PSBnaWQpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuICBmdW5jdGlvbiBpc1BsYXlpbmdQKGdpZCkge1xyXG4gICAgbGV0IGdpID0gZ2V0R2FtZWxpc3RJbmRleChnaWQpO1xyXG4gICAgcmV0dXJuIGdpIDwgMCA/IGZhbHNlIDogZ2FtZWxpc3RbZ2ldLnBsYXlpbmdQO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhdmFpbGFibGVBY3Rpb25QKGdkKSB7XHJcbiAgICBpZiAobmlja25hbWUubGVuZ3RoID09PSAwIHx8IGdkLmdhbWVzdGF0dXMgPT09IFwiR2FtZSBvdmVyXCIpIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbk5vbmU7IH1cclxuICAgIGlmICghZ2QucGxheWluZ1ApIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvblN0YXJ0OyB9XHJcbiAgICBpZiAoZ2Qubmlja25hbWVQID09PSBuaWNrbmFtZSkgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0OyB9XHJcbiAgICByZXR1cm4gYXZhaWxhYmxlQWN0aW9uTm9uZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYXZhaWxhYmxlQWN0aW9uRyhnZCkge1xyXG4gICAgaWYgKG5pY2tuYW1lLmxlbmd0aCA9PT0gMCB8fCBnZC5nYW1lc3RhdHVzID09PSBcIkdhbWUgb3ZlclwiKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25Ob25lOyB9XHJcbiAgICBpZiAoIWdkLnBsYXlpbmdHKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25Kb2luOyB9XHJcbiAgICBpZiAoZ2Qubmlja25hbWVHID09PSBuaWNrbmFtZSkgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0OyB9XHJcbiAgICByZXR1cm4gYXZhaWxhYmxlQWN0aW9uTm9uZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gc2VsZWN0UmFja1NpemUobmV3UmFja3NpemUpIHtcclxuICAgIHNldFJhY2tzaXplKG5ld1JhY2tzaXplKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLXRlYWwgdzMtYmFyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInczLWJhci1pdGVtIHczLWNlbnRyZSBteUhlYWRpbmdGb250XCI+UHJpc29uIEJyZWFrIExvYmJ5PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtIHczLXJpZ2h0XCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi4uLy4uL1wifT5cclxuICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1yb3cgdzMtc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInczLWNvbCBteUNvbW1vbkZvbnRcIj48aDI+PGI+Tmlja25hbWU6PC9iPjwvaDI+PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3My1pbnB1dCB3My1ib3JkZXIgdzMtcmVzdCBteUNvbW1vbkZvbnRcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuaWNrbmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuaWNrbmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Tmlja25hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBiTG9iYnlQcmlzb25lclNlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPlBSSVNPTkVSUzwvc3Bhbj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJwYkxvYmJ5R2FtZUlkUHJvbXB0XCI+R2FtZSBJRDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicGJMb2JieUdhbWVJZElucHV0XCJcclxuICAgICAgICAgICAgbmFtZT1cImdhbWVpZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtnYW1laWR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEdhbWVpZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJMb2JieVJhY2tTaXplUHJvbXB0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdHJhY2tzaXplNFwiIGNsYXNzTmFtZT17cmFja3NpemUgPT09IDQgPyBcInBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkXCIgOiBcInBiTG9iYnlSYWNrU2l6ZVwifVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSYWNrU2l6ZSg0KX1cclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCI0IGxldHRlciByYWNrcywgOSB4IDkgYm9hcmRcIlxyXG4gICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgNFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwic2VsZWN0cmFja3NpemU1XCIgY2xhc3NOYW1lPXtyYWNrc2l6ZSA9PT0gNSA/IFwicGJMb2JieVJhY2tTaXplU2VsZWN0ZWRcIiA6IFwicGJMb2JieVJhY2tTaXplXCJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFJhY2tTaXplKDUpfVxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjUgbGV0dGVyIHJhY2tzLCAxMSB4IDExIGJvYXJkXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgNVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwic2VsZWN0cmFja3NpemU2XCIgY2xhc3NOYW1lPXtyYWNrc2l6ZSA9PT0gNiA/IFwicGJMb2JieVJhY2tTaXplU2VsZWN0ZWRcIiA6IFwicGJMb2JieVJhY2tTaXplXCJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFJhY2tTaXplKDYpfVxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjYgbGV0dGVyIHJhY2tzLCAxMyB4IDEzIGJvYXJkXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgNlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwic2VsZWN0cmFja3NpemU3XCIgY2xhc3NOYW1lPXtyYWNrc2l6ZSA9PT0gNyA/IFwicGJMb2JieVJhY2tTaXplU2VsZWN0ZWRcIiA6IFwicGJMb2JieVJhY2tTaXplXCJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFJhY2tTaXplKDcpfVxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjcgbGV0dGVyIHJhY2tzLCAxNSB4IDE1IGJvYXJkXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgN1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkxvYmJ5Q2VsbEJsb2NrSW5mb1wiPntyYWNrc2l6ZX0gbGV0dGVyIHJhY2tzLCB7cmFja3NpemUqMisxfSB4IHtyYWNrc2l6ZSoyKzF9IGJvYXJkLjwvc3Bhbj5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJzdGFydGdhbWVcIiBjbGFzc05hbWU9XCJwYkxvYmJ5QWN0aW9uQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIGlmIChuaWNrbmFtZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlBsZWFzZSBlbnRlciBuaWNrbmFtZSBiZWZvcmUgc3RhcnRpbmcgYSBnYW1lXCIpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZWlkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1BsYXlpbmdQKGdhbWVpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiUHJpc29uZXJzIGFscmVhZHkgcGxheWluZyB0aGF0IGdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnUCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJQbGVhc2UgZW50ZXIgR2FtZSBJRCBiZWZvcmUgc3RhcnRpbmcgYSBnYW1lXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcGJMb2JieUd1YXJkU2VjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+R1VBUkRTPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInBiTG9iYnlHdWFyZEluZm9cIj5GaW5kIGFuZCBjbGljayB0aGUgXCJKb2luIEdhbWVcIiBidXR0b24gZm9yIHlvdXIgZ2FtZS48L3NwYW4+XHJcbiAgICAgICAgICA8cD5JZiB5b3UgbG9zdCBjb25uZWN0aW9uLCBmaW5kIGFuZCBjbGljayB0aGUgXCJSZWNvbm5lY3RcIiBidXR0b24gZm9yIHlvdXIgZ2FtZSBpZC48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGJMb2JieUdhbWVMaXN0VGl0bGVcIj5HYW1lIGxpc3Q6PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBiTG9iYnlHYW1lTGlzdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG9mZnNldC0xXCI+XHJcbiAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwicGJMb2JieUdhbWVzSGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicGJMb2JieUdhbWVzSGVhZGVyQ29sXCI+R2FtZSBJRDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicGJMb2JieUdhbWVzSGVhZGVyQ29sXCIgY29sU3Bhbj1cIjJcIj5Qcmlzb25lcnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInBiTG9iYnlHYW1lc0hlYWRlckNvbFwiIGNvbFNwYW49XCIyXCI+R3VhcmRzPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwYkxvYmJ5R2FtZXNIZWFkZXJDb2xcIj5DZWxsIEJsb2NrPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwYkxvYmJ5R2FtZXNIZWFkZXJDb2xcIj5HYW1lIFN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIHtnYW1lbGlzdC5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17YE90aGVyR2FtZSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwicGJHYW1lc0luUHJvZ3Jlc3NSb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiTG9iYnlHYW1laWRcIj57dmFsdWUuZ2FtZWlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkxvYmJ5UGxheWVySW5kaWNhdG9yXCI+PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57dmFsdWUucGxheWluZ1AgPyBcImNoZWNrX2NpcmNsZVwiIDogXCJjYW5jZWxcIn08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAge2F2YWlsYWJsZUFjdGlvblAodmFsdWUpID09PSBhdmFpbGFibGVBY3Rpb25Ob25lID9cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJMb2JieUFjdGlvbk5vbmVcIj5ObyBhY3Rpb24gYXZhaWxhYmxlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgOiBhdmFpbGFibGVBY3Rpb25QKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0ID9cclxuICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BQcmlzb25lcnNSZWpvaW4ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkxvYmJ5QWN0aW9uQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzcmVqb2luKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdQJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmFja3NpemUodmFsdWUucmFja3NpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVjb25uZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BQcmlzb25lcnNTdGFydCR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiTG9iYnlBY3Rpb25CdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ1AnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiTG9iYnlQbGF5ZXJJbmRpY2F0b3JcIj48c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnt2YWx1ZS5wbGF5aW5nRyA/IFwiY2hlY2tfY2lyY2xlXCIgOiBcImNhbmNlbFwifTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICB7YXZhaWxhYmxlQWN0aW9uRyh2YWx1ZSkgPT09IGF2YWlsYWJsZUFjdGlvbk5vbmUgP1xyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkxvYmJ5QWN0aW9uTm9uZVwiPk5vIGFjdGlvbiBhdmFpbGFibGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA6IGF2YWlsYWJsZUFjdGlvbkcodmFsdWUpID09PSBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3QgP1xyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YEd1YXJkc1Jlam9pbiR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiTG9iYnlBY3Rpb25CdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNyZWpvaW4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ0cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSYWNrc2l6ZSh2YWx1ZS5yYWNrc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWNvbm5lY3RcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YEd1YXJkc0pvaW4ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkxvYmJ5QWN0aW9uQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdHJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmFja3NpemUodmFsdWUucmFja3NpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSm9pbiBHYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkxvYmJ5R2FtZVJhY2tzaXplXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlLnJhY2tzaXplfVxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJMb2JieUdhbWVTdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dmFsdWUuZ2FtZXN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgU3F1YXJlID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gc3F1YXJldXNlZGJ5LCByaSwgY2ksIGMsIG9uQ2xpY2tcclxuICAvLyBuZWVkIHNxdWFyZXVzZWRieSB0byBwaWNrIGNzcyBjbGFzc05hbWUgY29ycmVzcG9uZGluZyB0byB3aG8gcGxheWVkIHRoZSB0aWxlIG9uIHRoZSBzcXVhcmVcclxuICAvLyBuZWVkIHJpLCBjaSB0byBkaXNwbGF5IGFsdGVybmF0aW5nIGJhY2tncm91bmRzIG9uIHVudXNlZCBzcXVhcmVzXHJcbiAgLy8gbmVlZCBjIHRvIHJlcHJlc2VudCB3aGljaCB0aWxlIGlzIG9uIHRoZSBzcXVhcmUsIGlmIGFueVxyXG4gIC8vIG5lZWQgb25DbGljayB0byBoYW5kbGUgc3F1YXJlIGNsaWNrIGF0IGEgaGlnaGVyIGxldmVsXHJcbiAgLy8gbmVlZCByY2QgdG8gZGlzcGxheSBzZWxlY3RlZCBkaXJlY3Rpb24gYXJyb3cgd2hlbiBhcHByb3ByaWF0ZVxyXG4gIC8vIG5lZWQgcmFja3NpemUgdG8gZGV0ZXJtaW5lIGNlbnRyZSBhbmQgYm9hcmQgYWFycnkgZWRnZSBwb3NpdGlvbnNcclxuICBjb25zdCBlZGdlID0gKHByb3BzLnJhY2tzaXplICogMik7XHJcbiAgY29uc3QgbWlkZGxlID0gcHJvcHMucmFja3NpemU7XHJcbiAgY29uc3QgdGRjbGFzcyA9XHJcbiAgICBwcm9wcy5jICE9PSBzcXVhcmV1bnVzZWRcclxuICAgICAgPyBcInBiU3F1YXJlSW5uZXIgUGxheWVyVGlsZVwiXHJcbiAgICAgIDogcHJvcHMucmNkWzBdID09PSBwcm9wcy5yaSAmJiBwcm9wcy5yY2RbMV0gPT09IHByb3BzLmNpICYmIHByb3BzLnJjZFsyXSA9PT0gXCJyXCJcclxuICAgICAgPyBcInBiU3F1YXJlSW5uZXIgUmlnaHRBcnJvd1wiXHJcbiAgICAgIDogcHJvcHMucmNkWzBdID09PSBwcm9wcy5yaSAmJiBwcm9wcy5yY2RbMV0gPT09IHByb3BzLmNpICYmIHByb3BzLnJjZFsyXSA9PT0gXCJkXCJcclxuICAgICAgPyBcInBiU3F1YXJlSW5uZXIgRG93bkFycm93XCJcclxuICAgICAgOiBwcm9wcy5yaSA9PT0gbWlkZGxlICYmIHByb3BzLmNpID09PSBtaWRkbGVcclxuICAgICAgPyBcInBiU3F1YXJlSW5uZXIgQ2VudGVyU3F1YXJlXCJcclxuICAgICAgOiAocHJvcHMucmkgPT09IDAgfHwgcHJvcHMucmkgPT09IG1pZGRsZSB8fCBwcm9wcy5yaSA9PT0gZWRnZSkgJiZcclxuICAgICAgICAocHJvcHMuY2kgPT09IDAgfHwgcHJvcHMuY2kgPT09IG1pZGRsZSB8fCBwcm9wcy5jaSA9PT0gZWRnZSlcclxuICAgICAgPyBcInBiU3F1YXJlSW5uZXIgRXNjYXBlSGF0Y2hcIlxyXG4gICAgICA6IHByb3BzLnJpICUgMiA9PT0gcHJvcHMuY2kgJSAyXHJcbiAgICAgID8gXCJwYlNxdWFyZUlubmVyIHN0eWxlMVwiIDogXCJwYlNxdWFyZUlubmVyIHN0eWxlMlwiOyAvLyBBbHRlcm5hdGluZyBzcXVhcmUgc3R5bGVzXHJcbiAgY29uc3QgdGR2YWx1ZSA9XHJcbiAgICBwcm9wcy5jICE9PSBzcXVhcmV1bnVzZWRcclxuICAgICAgPyBwcm9wcy5jXHJcbiAgICAgIDogdGRjbGFzcy5pbmRleE9mKFwiUmlnaHRBcnJvd1wiKSA+IC0xXHJcbiAgICAgID8gXCLinqFcIlxyXG4gICAgICA6IHRkY2xhc3MuaW5kZXhPZihcIkRvd25BcnJvd1wiKSA+IC0xXHJcbiAgICAgID8gXCLirIdcIlxyXG4gICAgICA6IHRkY2xhc3MuaW5kZXhPZihcIkNlbnRlclNxdWFyZVwiKSA+IC0xXHJcbiAgICAgID8gPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zdGFyczwvaT5cclxuICAgICAgOiBcIi5cIiAvKiBJZiBJIHB1dCBlbXB0eSBzdHJpbmcgb3IgJm5ic3A7IHRoZW4gaXQgYWZmZWN0cyB0aGUgZGlzcGxheSBvZGRseSAgKi9cclxuICByZXR1cm4gKFxyXG4gICAgdGRjbGFzcy5pbmRleE9mKFwiRXNjYXBlSGF0Y2hcIikgPiAtMSA/XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGRjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cnVuX2NpcmNsZTwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgOiBwcm9wcy5jID09PSBzcXVhcmV1bnVzZWQgP1xyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGRjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAge3RkdmFsdWV9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA6XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0ZGNsYXNzfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBiU3F1YXJlVGlsZVRleHQgJHtwcm9wcy5zcXVhcmV1c2VkYnkgKyAocHJvcHMuYyA9PT0gXCJRXCIgPyBcIiB1XCIgOiBcIlwiKX1gfT57dGR2YWx1ZX08L2Rpdj5cclxuICAgICAgPC9idXR0b24+XHJcbik7XHJcbn07XHJcblxyXG5jb25zdCBCb2FyZCA9ICh7IG9uQ2xpY2ssIHNxdWFyZXMsIHVzZWRieSwgcmNkLCByYWNrc2l6ZSB9KSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyU3F1YXJlID0gKHJpLCBjaSwgYywgc3F1YXJldXNlZGJ5KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dGQga2V5PXtgU3F1YXJlJHtyaX0tJHtjaX1gfSBjbGFzc05hbWU9XCJwYlNxdWFyZU91dGVyXCI+XHJcbiAgICAgICAgPFNxdWFyZVxyXG4gICAgICAgICAgYz17Y31cclxuICAgICAgICAgIGNpPXtjaX1cclxuICAgICAgICAgIHJpPXtyaX1cclxuICAgICAgICAgIHNxdWFyZXVzZWRieT17c3F1YXJldXNlZGJ5fVxyXG4gICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHJpLCBjaSl9XHJcbiAgICAgICAgICByYWNrc2l6ZT17cmFja3NpemV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC90ZD5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJSb3cgPSAocmkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ciBrZXk9e2BCb2FyZFJvdyR7cml9YH0gY2xhc3NOYW1lPVwicGJSb3dcIj5cclxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJCb2FyZFJvd0hlYWRlclwiIGlkPVwiQm9hcmRIZWFkZXJMZWZ0XCI+XHJcbiAgICAgICAgICB7Ym9hcmRSb3dIZWFkZXJzW3JpXX1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIHtzcXVhcmVzW3JpXS5tYXAoKGMsIGNpKSA9PiByZW5kZXJTcXVhcmUocmksIGNpLCBjLCB1c2VkYnlbcmldW2NpXSkpfVxyXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkJvYXJkUm93SGVhZGVyXCIgaWQ9XCJCb2FyZEhlYWRlclJpZ2h0XCI+XHJcbiAgICAgICAgICB7Ym9hcmRSb3dIZWFkZXJzW3JpXX1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHRhYmxlIGNsYXNzTmFtZT1cInBiQm9hcmRcIj5cclxuICAgICAgPHRib2R5PlxyXG4gICAgICAgIDx0ciBjbGFzc05hbWU9XCJwYkJvYXJkQ29sdW1uSGVhZGVyUm93XCI+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJCb2FyZEhlYWRlclRvcExlZnRcIj4mbmJzcDs8L3RkPlxyXG4gICAgICAgICAge3NxdWFyZXMubWFwKChfJCxpKSA9PiAoXHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkJvYXJkQ29sdW1uSGVhZGVyXCIga2V5PXtgVG9wQ29sdW1uSGVhZGVyJHtpfWB9PlxyXG4gICAgICAgICAgICAgIHtib2FyZENvbHVtbkhlYWRlcnNbaV19XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkJvYXJkSGVhZGVyVG9wUmlnaHRcIj4mbmJzcDs8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAge3NxdWFyZXMubWFwKChyLCByaSkgPT4gcmVuZGVyUm93KHJpKSl9XHJcbiAgICAgICAgPHRyIGNsYXNzTmFtZT1cInBiQm9hcmRDb2x1bW5IZWFkZXJSb3dcIiBpZD1cIkJvYXJkSGVhZGVyQm90dG9tXCI+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJCb2FyZEhlYWRlckJvdHRvbUxlZnRcIj4mbmJzcDs8L3RkPlxyXG4gICAgICAgICAge3NxdWFyZXMubWFwKChfJCxpKSA9PiAoXHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkJvYXJkQ29sdW1uSGVhZGVyXCIga2V5PXtgQm90dG9tQ29sdW1uSGVhZGVyJHtpfWB9PlxyXG4gICAgICAgICAgICAgIHtib2FyZENvbHVtbkhlYWRlcnNbaV19XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkJvYXJkSGVhZGVyQm90dG9tUmlnaHRcIj4mbmJzcDs8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBHYW1lID0gKHtpc3Jlam9pbiwgcHJpc29uZXJzT3JHdWFyZHMsIGdhbWVpZCwgbmlja25hbWUsIHdzbWVzc2FnZSwgY2xpZW50XHJcbiAgLCByYWNrc2l6ZSAvLyBPcHRpb24gZm9yIHJhY2sgc2l6ZVxyXG4gIH0pID0+IHtcclxuICBjb25zdCBtaWRkbGUgPSByYWNrc2l6ZTsgLy8gTWlkZGxlIGVsZW1lbnQgaW4gcm93IG9yIGNvbHVtbiBhcnJheVxyXG4gIGNvbnN0IGVkZ2UgPSByYWNrc2l6ZSAqIDI7IC8vIExhc3QgZWxlbWVudCBpbiByb3cgb3IgY29sdW1uIGFycmF5XHJcbiAgY29uc3QgaW5pdGlhbHRpbGVzID0gcmFja3NpemUgPT09IDYgPyBpbml0aWFsdGlsZXM2IDogcmFja3NpemUgPT09IDcgPyBpbml0aWFsdGlsZXM3IDogcmFja3NpemUgPT09IDUgPyBpbml0aWFsdGlsZXM1IDogaW5pdGlhbHRpbGVzNDtcclxuICBjb25zdCBpbml0aWFsc3F1YXJlcyA9IEFycmF5KGVkZ2UrMSkuZmlsbChBcnJheShlZGdlKzEpLmZpbGwoc3F1YXJldW51c2VkKSk7XHJcbiAgY29uc3QgaW5pdGlhbHVzZWRieSA9IEFycmF5KGVkZ2UrMSkuZmlsbChBcnJheShlZGdlKzEpLmZpbGwodXNlZGJ5bm9vbmUpKTtcclxuICBjb25zdCBbdGlsZXMsIHNldFRpbGVzXSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsdGlsZXNdKTtcclxuICBjb25zdCBbcHRpbGVzLCBzZXRQdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtndGlsZXMsIHNldEd0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NxdWFyZXMsIHNldFNxdWFyZXNdID0gdXNlU3RhdGUoWy4uLmluaXRpYWxzcXVhcmVzXSk7XHJcbiAgY29uc3QgW3VzZWRieSwgc2V0VXNlZGJ5XSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsdXNlZGJ5XSk7XHJcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlKC0xKTsgLy8gcmVsYXRpdmUgdG8gcmFjayBvZiBwbGF5ZXIgbWFraW5nIGEgcGxheVxyXG4gIGNvbnN0IFt3aG9zZXR1cm4sIHNldFdob3NldHVybl0gPSB1c2VTdGF0ZShcIlBcIik7IC8vIGdhbWUgc3RhcnRzIHdpdGggcHJpc29uZXJzIHBsYXlcclxuICBjb25zdCBbY3VycmVudGNvb3Jkcywgc2V0Q3VycmVudGNvb3Jkc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Jlc2N1ZXMsIHNldFJlc2N1ZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3JjZCwgc2V0UmNkXSA9IHVzZVN0YXRlKFstMSwtMSxub2RpcmVjdGlvbl0pO1xyXG4gIGNvbnN0IFtwYXNzZWQsIHNldFBhc3NlZF0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIHRydWUgd2hlbiBvcHBvbmVudCBqdXN0IHBhc3NlZDsgaWYgYm90aCBwYXNzIHRoZSBnYW1lIGVuZHNcclxuICBjb25zdCBbbW92ZXMsIHNldE1vdmVzXSA9IHVzZVN0YXRlKFtdKTsgLy8gbW92ZSBoaXN0b3J5LCBlYWNoIGVsZW1lbnQgaXMgdGhlIGFycmF5IGlzIGEganNvbiBvYmplY3Qgb2YgaW5mbyBhYm91dCB0aGUgbW92ZVxyXG4gIGNvbnN0IFtzbmFwc2hvdCwgc2V0U25hcHNob3RdID0gdXNlU3RhdGUoe1xyXG4gICAgc3F1YXJlczogWy4uLmluaXRpYWxzcXVhcmVzXSxcclxuICAgIHVzZWRieTogWy4uLmluaXRpYWx1c2VkYnldLFxyXG4gICAgcHRpbGVzOiBbXSxcclxuICAgIGd0aWxlczogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgW2pva2VpbmRleCwgc2V0Sm9rZWluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthbGxvd1Jld2luZCwgc2V0QWxsb3dSZXdpbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcHBuYW1lLCBzZXRPcHBuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY2hhdG1zZ3MsIHNldENoYXRtc2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBuZXdqaSA9IGpva2VpbmRleCArIDE7XHJcbiAgICBpZiAobmV3amkgPj0gam9rZXMubGVuZ3RoKSB7XHJcbiAgICAgIG5ld2ppID0gMDtcclxuICAgIH1cclxuICAgIHNldEpva2VpbmRleChuZXdqaSk7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgLy8gSWYgaXQgaXMgbm90IG15IHR1cm4gJiYgdGhlIGdhbWUgaGFzIG5vdCBlbmRlZFxyXG4gICAgICBpZiAocHJpc29uZXJzT3JHdWFyZHMgIT09IHdob3NldHVybiAmJiB3aG9zZXR1cm4gIT09IFwiWFwiKSB7XHJcbiAgICAgICAgLy8gSSBhbSB3YWl0aW5nIGZvciBvcHBvbmVudCBtb3ZlIHRvIGNvbWUgdGhyb3VnaCBidXQgc29tZXRpbWVzIGl0IGdldHMgbWlzc2VkIChubyBpZGVhIHdoeSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkludGVydmFsOiBwcmlzb25lcnNPckd1YXJkcz1cIiArIHByaXNvbmVyc09yR3VhcmRzICsgXCIgd2hvc2V0dXJuPVwiICsgd2hvc2V0dXJuICsgXCIgYXQgXCIgKyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgcmVxdWVzdEdhbWVEYXRhKCk7IC8vIFNlbmQgYSByZXF1ZXN0IGZvciBnYW1lIGRhdGEgaW4gY2FzZSBvcHBvbmVudCBtb3ZlZCBhbmQgd2UgbWlzc2VkIHRoZSB1cGRhdGVcclxuICAgICAgfVxyXG4gICAgfSwgbW92ZXdhaXR0aW1lKTsgLy8gdGhpcyBtYW55IG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGFib3ZlIGNvZGUgYmxvY2sgZXhlY3V0aW9uc1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFt3aG9zZXR1cm5dKTsgLy8gd2FudCB1cCB0byBkYXRlIHZhbHVlIG9mIHdob3NldHVybiB0byBkZWNpZGUgd2hldGhlciB0byBhc2sgZm9yIGFuIHVwZGF0ZVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4geyAvLyBUaGlzIGNvZGUgZXhlY3V0ZXMgZmlyc3QgdGltZSBHYW1lIGlzIHVzZWQgb25seVxyXG4gICAgaWYgKCFpc3Jlam9pbiAmJiBwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIpIHsgLy8gUHJpc29uZXIgaXMgc3RhcnRpbmcgdGhlIGdhbWUgc28gcGljayByYWNrc1xyXG4gICAgICBsZXQgdGVtcFBUaWxlcyA9IFtdO1xyXG4gICAgICBsZXQgdGVtcEdUaWxlcyA9IFtdO1xyXG4gICAgICBsZXQgdGVtcFRpbGVzID0gWy4uLmluaXRpYWx0aWxlc107XHJcbiAgICAgIHdoaWxlICh0ZW1wUFRpbGVzLmxlbmd0aCA8IHJhY2tzaXplKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wUFRpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wR1RpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRlbXBQVGlsZXMuc29ydCgpO1xyXG4gICAgICB0ZW1wR1RpbGVzLnNvcnQoKTtcclxuICAgICAgc2V0R3RpbGVzKHRlbXBHVGlsZXMpO1xyXG4gICAgICBzZXRQdGlsZXModGVtcFBUaWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKHRlbXBUaWxlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVzOiBbLi4uaW5pdGlhbHNxdWFyZXNdLFxyXG4gICAgICAgIHVzZWRieTogWy4uLmluaXRpYWx1c2VkYnldLFxyXG4gICAgICAgIHB0aWxlczogWy4uLnRlbXBQVGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogWy4uLnRlbXBHVGlsZXNdICAgIFxyXG4gICAgICB9KTtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLFxyXG4gICAgICAgICAgZnVuYzogXCJoZWxsb1wiLFxyXG4gICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgLy8gUHJpc29uZXIgcmVqb2luIG9yIGd1YXJkIGpvaW4gb3IgZ3VhcmQgcmVqb2luXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJyZXF1ZXN0Z2FtZWRhdGFcIiwgLy8gcmVxdWVzdCBnYW1lIGRhdGFcclxuICAgICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkc1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgfVxyXG4gICAgICBjYXRjaCB7fVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzR2FtZU1lc3NhZ2UobXNnKTsgICAgICBcclxuICB9LFt3c21lc3NhZ2VdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVNb3Zlc1wiKTtcclxuICB9LFttb3Zlc10pXHJcblxyXG4gIGZ1bmN0aW9uIHB1dEF0TW92ZVN0YXJ0KCkge1xyXG4gICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIHNldEFsbG93UmV3aW5kKGZhbHNlKTtcclxuICAgIHNldFJjZCgtMSwtMSxub2RpcmVjdGlvbik7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwiYW5ub3VuY2VcIikge1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsXHJcbiAgICAgICAgICBmdW5jOiBcImhlbGxvXCIsXHJcbiAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sXHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobWVzc2FnZURhdGEuZ2FtZWlkID09PSBnYW1laWQgJiYgbWVzc2FnZURhdGEudHlwZSA9PT0gXCJwYlwiKSB7IC8vIFRoaXMgaW5zdGFuY2Ugb2YgYSBwcmlzb24gYnJlYWsgZ2FtZVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuc2VuZGVyICE9IHByaXNvbmVyc09yR3VhcmRzICYmIG9wcG5hbWUgPT09IFwiXCIgJiYgbWVzc2FnZURhdGEubmlja25hbWUgJiYgbWVzc2FnZURhdGEubmlja25hbWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vIE9wcG9uZW50IHNlbnQgYSBtZXNzYWdlIGluY2x1ZGluZyB0aGVpciBuaWNrbmFtZSBhbmQgSSBkb24ndCBoYXZlIHRoZWlyIG5pY2tuYW1lIHlldFxyXG4gICAgICAgIHNldE9wcG5hbWUobWVzc2FnZURhdGEubmlja25hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInJlcXVlc3RnYW1lZGF0YVwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcHJpc29uZXJzT3JHdWFyZHMpIHsgLy8gT3Bwb25lbnQgcmVxdWVzdGVkIGdhbWUgaW5mb1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwicHJvdmlkZWdhbWVkYXRhXCIsIC8vIHByb3ZpZGUgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgICAgIHRpbGVzOiB0aWxlcyxcclxuICAgICAgICAgICAgc3F1YXJlczogc3F1YXJlcyxcclxuICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzLFxyXG4gICAgICAgICAgICB1c2VkYnk6IHVzZWRieSxcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sXHJcbiAgICAgICAgICAgIHNuYXBzaG90OiBzbmFwc2hvdCxcclxuICAgICAgICAgICAgcGFzc2VkOiBwYXNzZWQsXHJcbiAgICAgICAgICAgIG1vdmVzOiBtb3ZlcyxcclxuICAgICAgICAgICAgcmVzY3VlczogcmVzY3VlcyxcclxuICAgICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgICBhbGxvd1Jld2luZDogYWxsb3dSZXdpbmRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ2FtZWRhdGFcIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHByaXNvbmVyc09yR3VhcmRzICYmIHdob3NldHVybiAhPT0gcHJpc29uZXJzT3JHdWFyZHMgJiYgd2hvc2V0dXJuICE9PSBcIlhcIikgeyBcclxuICAgICAgICAvLyBvcHBvbmVudCBwcm92aWRlZCBnYW1lIGRhdGEgYW5kIHRoaXMgcGxheWVyIGlzIHN0aWxsIHdhaXRpbmcgdG8gc2VlIG9wcG9uZW50IG1vdmVcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRTbmFwc2hvdChtZXNzYWdlRGF0YS5zbmFwc2hvdCk7XHJcbiAgICAgICAgc2V0UGFzc2VkKG1lc3NhZ2VEYXRhLnBhc3NlZCk7XHJcbiAgICAgICAgc2V0TW92ZXMobWVzc2FnZURhdGEubW92ZXMpO1xyXG4gICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgICAgc2V0QWxsb3dSZXdpbmQobWVzc2FnZURhdGEuYWxsb3dSZXdpbmQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImVwdFwiICYmIHByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIikgeyAvLyBQcmlzb25lcnMgc2VudCBlbmQgcHJpc29uZXJzIHR1cm4sIEd1YXJkcyBwaWNrIGl0IHVwXHJcbiAgICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRQYXNzZWQobWVzc2FnZURhdGEucGFzc2VkKTtcclxuICAgICAgICBzZXRNb3ZlcyhtZXNzYWdlRGF0YS5tb3Zlcyk7XHJcbiAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4ubWVzc2FnZURhdGEuc3F1YXJlc10sXHJcbiAgICAgICAgICB1c2VkYnk6IFsuLi5tZXNzYWdlRGF0YS51c2VkYnldLFxyXG4gICAgICAgICAgcHRpbGVzOiBbLi4ubWVzc2FnZURhdGEucHRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiZWd0XCIgJiYgcHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiKSB7IC8vIEd1YXJkcyBzZW50IGVuZCBndWFyZHMgdHVybiwgUHJpc29uZXJzIHBpY2sgaXQgdXBcclxuICAgICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFBhc3NlZChtZXNzYWdlRGF0YS5wYXNzZWQpO1xyXG4gICAgICAgIHNldE1vdmVzKG1lc3NhZ2VEYXRhLm1vdmVzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4ubWVzc2FnZURhdGEuc3F1YXJlc10sXHJcbiAgICAgICAgICB1c2VkYnk6IFsuLi5tZXNzYWdlRGF0YS51c2VkYnldLFxyXG4gICAgICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLm1lc3NhZ2VEYXRhLmd0aWxlc10sXHJcbiAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInVuZG90dXJuXCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9PSBwcmlzb25lcnNPckd1YXJkcykgeyBcclxuICAgICAgICAvLyBvcHBvbmVudCB1bmRpZCB0aGVpciBsYXN0IHR1cm5cclxuICAgICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgICAgc2V0UGFzc2VkKG1lc3NhZ2VEYXRhLnBhc3NlZCk7XHJcbiAgICAgICAgc2V0TW92ZXMobWVzc2FnZURhdGEubW92ZXMpO1xyXG4gICAgICAgIHNldFNuYXBzaG90KG1lc3NhZ2VEYXRhLnNuYXBzaG90KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJhbGxvd3VuZG9cIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHByaXNvbmVyc09yR3VhcmRzKSB7XHJcbiAgICAgICAgLy8gT3Bwb25lbnQgY2xpY2tlZCBidXR0b24gdG8gYWxsb3cgdW5kbyB0dXJuXHJcbiAgICAgICAgc2V0QWxsb3dSZXdpbmQodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiY2hhdFwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPSBwcmlzb25lcnNPckd1YXJkcykgeyAvLyBPcHBvbmVudCBjaGF0IG1lc3NhZ2VcclxuICAgICAgICBsZXQgbmV3Q2hhdG1zZ3MgPSBbLi4uY2hhdG1zZ3MsIHtmcm9tOiBtZXNzYWdlRGF0YS5uaWNrbmFtZSwgbXNnOiBtZXNzYWdlRGF0YS5zZW5kbXNnfV07XHJcbiAgICAgICAgc2V0Q2hhdG1zZ3MobmV3Q2hhdG1zZ3MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIENhbGxpbmcgc2V0U2VsZWN0aW9uIChmcm9tIGhhbmRsZUtleURvd24pIHRoZW4gaGFuZGxlQm9hcmRTcXVhcmVDbGljayBkb2VzIG5vdCBsZXQgaXQgcmVjb2duaXplIHNlbGVjdGlvbiB3aXRoIHRoZSBuZXcgdmFsdWVcclxuICAvLyBTbyBJIHBhc3MgbmV3U2VsZWN0aW9uIHdoZW4gSSB3YW50IHRvIGFsc28gc2V0IGl0LCBvdGhlcndpc2UgSSBwYXNzIC0xIHRvIGluc3RydWN0IGl0IHRvIHVzZSBjdXJyZW50IHZhbHVlIG9mIHNlbGVjdGlvblxyXG4gIC8vIEFsc28gcGFzc2luZyBuZXdSY2RcclxuICBjb25zdCBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrID0gKHJpLCBjaSwgbmV3U2VsZWN0aW9uLCBuZXdSY2QpID0+IHtcclxuICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnNxdWFyZXNdO1xyXG4gICAgbGV0IG5ld1VzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgbGV0IG5ld1JvdyA9IFsuLi5zcXVhcmVzW3JpXV07XHJcbiAgICBsZXQgc3F1YXJldmFsdWUgPSBzcXVhcmVzW3JpXVtjaV07XHJcbiAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgIGxldCBjb29yZCA9IFN0cmluZyhyaSkgKyBcIi1cIiArIFN0cmluZyhjaSk7XHJcbiAgICBsZXQgY2NpID0gY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKTtcclxuICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgIG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgbmV3UmNkID0gcmNkO1xyXG4gICAgfVxyXG4gICAgaWYgKG5ld1NlbGVjdGlvbiA+IC0xICYmIHNxdWFyZXZhbHVlID09PSBzcXVhcmV1bnVzZWQpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICBuZXdSb3dbY2ldID1cclxuICAgICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gbmV3UHRpbGVzW25ld1NlbGVjdGlvbl0gOiBuZXdHdGlsZXNbbmV3U2VsZWN0aW9uXTtcclxuICAgICAgbmV3U3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XTtcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIlxyXG4gICAgICAgID8gbmV3UHRpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpXHJcbiAgICAgICAgOiBuZXdHdGlsZXMuc3BsaWNlKG5ld1NlbGVjdGlvbiwgMSk7XHJcbiAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4ubmV3VXNlZGJ5W3JpXV07XHJcbiAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSB3aG9zZXR1cm47XHJcbiAgICAgIG5ld1VzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XTtcclxuICAgICAgaWYgKHdob3NldHVybiA9PT0gXCJQXCIgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdQdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgfVxyXG4gICAgICBpZiAod2hvc2V0dXJuID09PSBcIkdcIiAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld0d0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uIC0gMVxyXG4gICAgICB9XHJcbiAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF0pO1xyXG4gICAgICBzZXRSY2QobmV3UmNkKTsgLy8ga2V5IGRvd24gaGFuZGxlciBmaWd1cmVkIGl0IG91dFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY2NpID4gLTEpIHsgLy8gY2xpY2tlZCBzcXVhcmUgaGFzIGEgdGlsZSBvbiBpdCBmcm9tIHRoZSBjdXJyZW50IG1vdmUgaW4gcHJvZ3Jlc3NcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIlxyXG4gICAgICAgID8gbmV3UHRpbGVzLnB1c2goc3F1YXJldmFsdWUpXHJcbiAgICAgICAgOiBuZXdHdGlsZXMucHVzaChzcXVhcmV2YWx1ZSk7XHJcbiAgICAgIGxldCBuZXdSb3cgPSBbLi4ubmV3U3F1YXJlc1tyaV1dO1xyXG4gICAgICBuZXdSb3dbY2ldID0gc3F1YXJldW51c2VkO1xyXG4gICAgICBuZXdTcXVhcmVzW3JpXSA9IFsuLi5uZXdSb3ddO1xyXG4gICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLm5ld1VzZWRieVtyaV1dO1xyXG4gICAgICBuZXdVc2VkYnlSb3dbY2ldID0gdXNlZGJ5bm9vbmU7XHJcbiAgICAgIG5ld1VzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XTtcclxuICAgICAgc2V0U2VsZWN0aW9uKFxyXG4gICAgICAgIHdob3NldHVybiA9PT0gXCJQXCIgPyBuZXdQdGlsZXMubGVuZ3RoIC0gMSA6IG5ld0d0aWxlcy5sZW5ndGggLSAxXHJcbiAgICAgICk7XHJcbiAgICAgIG5ld0N1cnJlbnRjb29yZHMuc3BsaWNlKGNjaSwgMSk7XHJcblxyXG4gICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICBzZXRSY2QoLTEsLTEsbm9kaXJlY3Rpb24pOyAvLyBtYWtlIHBsYXllciBjbGljayBhZ2FpbiB0byBzZXQgZGlyZWN0aW9uXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHBsYWNlIGEgc2VsZWN0ZWQgdGlsZSB0aGVyZVxyXG4gICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcmVtb3ZlIGFuIGV4aXN0aW5nIHRpbGVcclxuICAgIGlmIChzcXVhcmVzW3JpXVtjaV0gPT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAvLyBUaGVyZSBpcyBub3RoaW5nIG9uIHRoZSBzcXVhcmUgc28gdGhleSBhcmUgcGlja2luZyB3aGVyZSB0byBwbGFjZSB0aGUgbmV4dCB0aWxlIHZpYSBrZXlib2FyZFxyXG4gICAgICBsZXQgbmV3RGlyZWN0aW9uID0gcmNkWzBdICE9PSByaSB8fCByY2RbMV0gIT09IGNpID8gXCJyXCIgOiAvL2NsaWNrIG5ldyBzcXVhcmUsIHN0YXJ0IHdpdGggXCJyXCJcclxuICAgICAgIHJjZFsyXSA9PT0gXCJyXCIgPyBcImRcIiA6IC8vY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgXCJyXCIsIGNoYW5nZSB0byBcImRcIlxyXG4gICAgICAgcmNkWzJdID09PSBcImRcIiA/IG5vZGlyZWN0aW9uIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBcImRcIiwgY2hhbmdlIHRvIG5vZGlyZWN0aW9uXHJcbiAgICAgICBcInJcIjsgLy8gY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgbm9kaXJlY3Rpb24sIGNoYW5nZSB0byBcInJcIlxyXG4gICAgICBuZXdSY2QgPSBbcmksY2ksbmV3RGlyZWN0aW9uXTtcclxuICAgICAgc2V0UmNkKG5ld1JjZCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmlzb25lclRpbGVDbGljayA9ICh0aWxlaW5kZXgpID0+IHtcclxuICAgIC8vIHRoZSBpbmRleCBvZiBwdGlsZXNcclxuICAgIGlmICh3aG9zZXR1cm4gPT09IFwiUFwiKSB7XHJcbiAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb24gPT09IHRpbGVpbmRleCA/IC0xIDogdGlsZWluZGV4O1xyXG4gICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiSXQgaXMgbm90IHlvdXIgdHVyblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVHdWFyZFRpbGVDbGljayA9ICh0aWxlaW5kZXgpID0+IHtcclxuICAgIC8vIHRoZSBpbmRleCBvZiBndGlsZXNcclxuICAgIGlmICh3aG9zZXR1cm4gPT09IFwiR1wiKSB7XHJcbiAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb24gPT09IHRpbGVpbmRleCA/IC0xIDogdGlsZWluZGV4O1xyXG4gICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiSXQgaXMgbm90IHlvdXIgdHVyblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBlbmRQcmlzb25lcnNUdXJuID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgbGV0IG5ld1Jlc2N1ZXMgPSByZXNjdWVzO1xyXG4gICAgbGV0IGVzY2FwZWhhdGNoZXMgPSBbXHJcbiAgICAgIFwiMC0wXCIsXHJcbiAgICAgIFwiMC1cIiArIG1pZGRsZSxcclxuICAgICAgXCIwLVwiICsgZWRnZSxcclxuICAgICAgbWlkZGxlKyBcIi0wXCIsXHJcbiAgICAgIG1pZGRsZSArIFwiLVwiICsgZWRnZSxcclxuICAgICAgZWRnZSArIFwiLTBcIixcclxuICAgICAgZWRnZSArIFwiLVwiICsgbWlkZGxlLFxyXG4gICAgICBlZGdlICsgXCItXCIgKyBlZGdlXHJcbiAgICBdOyAvLyBjb29yZHMgb2YgZXNjYXBlIGhhdGNoZXNcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudGNvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZXNjYXBlaGF0Y2hlcy5pbmRleE9mKGN1cnJlbnRjb29yZHNbaV0pID4gLTEpIHtcclxuICAgICAgICBuZXdSZXNjdWVzID0gbmV3UmVzY3VlcyArIDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3UHRpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdQdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld1B0aWxlcy5zb3J0KCk7XHJcbiAgICBsZXQgbmV3V2hvc2V0dXJuID0gbmV3UHRpbGVzLmxlbmd0aCA+IDAgPyBcIkdcIiA6IFwiWFwiOyAvLyBYID0gZ2FtZSBvdmVyXHJcbiAgICBpZiAodXNlZGJ5WzBdWzBdICAgICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5WzBdW21pZGRsZV0gICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5WzBdW2VkZ2VdICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W21pZGRsZV1bMF0gICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W21pZGRsZV1bZWRnZV0gIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W2VkZ2VdWzBdICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W2VkZ2VdW21pZGRsZV0gIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W2VkZ2VdW2VkZ2VdICAgIT09IHVzZWRieW5vb25lKSB7XHJcbiAgICAgIG5ld1dob3NldHVybiA9IFwiWFwiOyAvLyBObyBlc2NhcGUgaGF0Y2hlcyBsZWZ0XHJcbiAgICB9XHJcbiAgICBsZXQgcGxheWluZm8gPSBnZXRQbGF5SW5mbygpO1xyXG4gICAgbGV0IG5ld01vdmUgPSB7Ynk6IFwiUFwiLCB0eXBlOiBcIlBMQVlcIiwgcmV3aW5kSW5mbzogcmV3aW5kSW5mbywgbWFpbndvcmQ6IHBsYXlpbmZvLm1haW53b3JkLCBleHRyYXdvcmRzOiBwbGF5aW5mby5leHRyYXdvcmRzLCBwb3M6IHBsYXlpbmZvLnBvc307XHJcbiAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRQYXNzZWQoZmFsc2UpO1xyXG4gICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgc2V0UmVzY3VlcyhuZXdSZXNjdWVzKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogWy4uLnNxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi51c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFsuLi5uZXdQdGlsZXNdLFxyXG4gICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgc3F1YXJlczogc3F1YXJlcywgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICB1c2VkYnk6IHVzZWRieSwgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWUgKHdob3NldHVybj1YKVxyXG4gICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICBwYXNzZWQ6IGZhbHNlLCAvLyBkaWQgbm90IGp1c3QgcGFzc1xyXG4gICAgICAgIG1vdmVzOiBuZXdNb3ZlcywgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgcmVzY3VlczogbmV3UmVzY3VlcyAvLyBtYXkgaGF2ZSByZXNjdWVkIGFub3RoZXIgcHJpc29uZXJcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZW5kR3VhcmRzVHVybiA9ICgpID0+IHtcclxuICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdHdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld0d0aWxlcy5zb3J0KCk7XHJcbiAgICBsZXQgc25hcHNxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICBsZXQgc25hcHVzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgbGV0IHNuYXBwdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBzbmFwZ3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbmV3V2hvc2V0dXJuID0gbmV3R3RpbGVzLmxlbmd0aCA+IDAgPyBcIlBcIiA6IFwiWFwiOyAvLyBYID0gZ2FtZSBvdmVyXHJcbiAgICBpZiAodXNlZGJ5WzBdWzBdICAgICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5WzBdW21pZGRsZV0gICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5WzBdW2VkZ2VdICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W21pZGRsZV1bMF0gICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W21pZGRsZV1bZWRnZV0gIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W2VkZ2VdWzBdICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W2VkZ2VdW21pZGRsZV0gIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgdXNlZGJ5W2VkZ2VdW2VkZ2VdICAgIT09IHVzZWRieW5vb25lKSB7XHJcbiAgICAgIG5ld1dob3NldHVybiA9IFwiWFwiOyAvLyBObyBlc2NhcGUgaGF0Y2hlcyBsZWZ0XHJcbiAgICB9XHJcbiAgICBsZXQgcGxheWluZm8gPSBnZXRQbGF5SW5mbygpO1xyXG4gICAgbGV0IG5ld01vdmUgPSB7Ynk6IFwiR1wiLCB0eXBlOiBcIlBMQVlcIiwgcmV3aW5kSW5mbzogcmV3aW5kSW5mbywgbWFpbndvcmQ6IHBsYXlpbmZvLm1haW53b3JkLCBleHRyYXdvcmRzOiBwbGF5aW5mby5leHRyYXdvcmRzLCBwb3M6IHBsYXlpbmZvLnBvc307XHJcbiAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRQYXNzZWQoZmFsc2UpO1xyXG4gICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBzbmFwc3F1YXJlcyxcclxuICAgICAgdXNlZGJ5OiBzbmFwdXNlZGJ5LFxyXG4gICAgICBwdGlsZXM6IHNuYXBwdGlsZXMsXHJcbiAgICAgIGd0aWxlczogc25hcGd0aWxlcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgdXNlZGJ5OiB1c2VkYnksIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIGd1YXJkcyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgcGFzc2VkOiBmYWxzZSwgLy8gZGlkIG5vdCBqdXN0IHBhc3NcclxuICAgICAgICBtb3ZlczogbmV3TW92ZXMsIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZSAod2hvc2V0dXJuPVgpXHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gIGNvbnN0IHN3YXBQcmlzb25lcnNUaWxlcyA9ICgpID0+IHtcclxuICAgIGlmICh0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJOZWVkIFwiICsgcmFja3NpemUgKyBcIiB0aWxlcyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgbGV0IG5ld1B0aWxlcyA9IFtdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdQdGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld1B0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3UHRpbGVzLnNvcnQoKTtcclxuICAgIG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5wdGlsZXNdO1xyXG4gICAgbmV3VGlsZXMuc29ydCgpO1xyXG4gICAgbGV0IG5ld01vdmUgPSB7Ynk6IFwiUFwiLCB0eXBlOiBcIlNXQVBcIiwgcmV3aW5kSW5mbzogcmV3aW5kSW5mb307XHJcbiAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRXaG9zZXR1cm4oXCJHXCIpO1xyXG4gICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRQYXNzZWQoZmFsc2UpO1xyXG4gICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc25hcHNob3Quc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnNuYXBzaG90LnVzZWRieV0sXHJcbiAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc10sXHJcbiAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICB3aG9zZXR1cm46IFwiR1wiLCAvLyBzd2FwIG5ldmVyIGVuZHMgdGhlIGdhbWUgc28gZ28gdG8gb3Bwb25lbnRcclxuICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgcGFzc2VkOiBmYWxzZSwgLy8gZGlkIG5vdCBqdXN0IHBhc3NcclxuICAgICAgICBtb3ZlczogbmV3TW92ZXMsIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMgLy8gbm8gcmVzY3VlcyBvbiBhbiBleGNoYW5nZVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHN3YXBHdWFyZHNUaWxlcyA9ICgpID0+IHtcclxuICAgIGlmICh0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJOZWVkIFwiICsgcmFja3NpemUgKyBcIiB0aWxlcyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgbGV0IG5ld0d0aWxlcyA9IFtdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdHdGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld0d0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3R3RpbGVzLnNvcnQoKTtcclxuICAgIG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5ndGlsZXNdO1xyXG4gICAgbmV3VGlsZXMuc29ydCgpO1xyXG4gICAgbGV0IG5ld01vdmUgPSB7Ynk6IFwiR1wiLCB0eXBlOiBcIlNXQVBcIiwgcmV3aW5kSW5mbzogcmV3aW5kSW5mb307XHJcbiAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRXaG9zZXR1cm4oXCJQXCIpO1xyXG4gICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRQYXNzZWQoZmFsc2UpO1xyXG4gICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc25hcHNob3Quc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnNuYXBzaG90LnVzZWRieV0sXHJcbiAgICAgIHB0aWxlczogWy4uLnB0aWxlc10sXHJcbiAgICAgIGd0aWxlczogWy4uLm5ld0d0aWxlc10sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICB3aG9zZXR1cm46IFwiUFwiLCAvLyBzd2FwIG5ldmVyIGVuZHMgdGhlIGdhbWUgc28gZ28gdG8gb3Bwb25lbnRcclxuICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgcGFzc2VkOiBmYWxzZSwgLy8gZGlkIG5vdCBqdXN0IHBhc3NcclxuICAgICAgICBtb3ZlczogbmV3TW92ZXMgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzUGxheVZhbGlkKCkge1xyXG4gICAgaWYgKHNxdWFyZXNbbWlkZGxlXVttaWRkbGVdID09PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiRmlyc3QgcGxheSBtdXN0IGhpdCBjZW50ZXIgc3F1YXJlXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgbnVtcm93cyA9IGVkZ2UrMTtcclxuICAgIGxldCBudW1jb2xzID0gZWRnZSsxO1xyXG4gICAgbGV0IGxvd3JvdyA9IG51bXJvd3M7XHJcbiAgICBsZXQgaGlnaHJvdyA9IC0xO1xyXG4gICAgbGV0IGxvd2NvbCA9IG51bWNvbHM7XHJcbiAgICBsZXQgaGlnaGNvbCA9IC0xO1xyXG4gICAgZm9yICh2YXIgcj0wOyByIDwgbnVtcm93czsgKytyKSB7XHJcbiAgICAgIGZvciAodmFyIGM9MDsgYyA8IG51bWNvbHM7ICsrYykge1xyXG4gICAgICAgIGlmIChzcXVhcmVzW3JdW2NdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgIGlmICghKHIgPiAwICYmIHNxdWFyZXNbci0xXVtjXSAhPT0gc3F1YXJldW51c2VkKSAmJlxyXG4gICAgICAgICAgICEoYyA+IDAgJiYgc3F1YXJlc1tyXVtjLTFdICE9PSBzcXVhcmV1bnVzZWQpICYmXHJcbiAgICAgICAgICAgIShyIDwgZWRnZSAmJiBzcXVhcmVzW3IrMV1bY10gIT09IHNxdWFyZXVudXNlZCkgJiZcclxuICAgICAgICAgICAhKGMgPCBlZGdlICYmIHNxdWFyZXNbcl1bYysxXSAhPT0gc3F1YXJldW51c2VkKVxyXG4gICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJFYWNoIHBsYXllZCB0aWxlIG11c3QgYmUgcGFydCBvZiBhIHdvcmRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgaWYgKHNuYXBzaG90LnNxdWFyZXNbcl1bY10gPT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgICAgICAgLy8gVGhpcyBzcXVhcmUgd2FzIHBsYXllZCBvbiB0aGlzIHR1cm5cclxuICAgICAgICAgICAgIGlmIChyIDwgbG93cm93KSB7IGxvd3JvdyA9IHI7fVxyXG4gICAgICAgICAgICAgaWYgKHIgPiBoaWdocm93KSB7IGhpZ2hyb3cgPSByO31cclxuICAgICAgICAgICAgIGlmIChjIDwgbG93Y29sKSB7IGxvd2NvbCA9IGM7fVxyXG4gICAgICAgICAgICAgaWYgKGMgPiBoaWdoY29sKSB7IGhpZ2hjb2wgPSBjO31cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobG93cm93ID09PSBudW1yb3dzKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIllvdSBkaWRuJ3QgcGxheSBhbnkgdGlsZXNcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChsb3dyb3cgIT09IGhpZ2hyb3cgJiYgbG93Y29sICE9PSBoaWdoY29sKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIlRpbGVzIHBsYXllZCBtdXN0IGJlIGluIGEgc3RyYWlnaHQgbGluZVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IHBsYXl0aHJ1ID0gZmFsc2U7XHJcbiAgICBsZXQgaG9va21hZGUgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIHIgPSBsb3dyb3c7IHIgPD0gaGlnaHJvdzsgKytyKSB7XHJcbiAgICAgIGZvciAodmFyIGMgPSBsb3djb2w7IGMgPD0gaGlnaGNvbDsgKytjKSB7XHJcbiAgICAgICAgaWYgKHNxdWFyZXNbcl1bY10gPT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgICAgd2luZG93LmFsZXJ0KFwiVGhlcmUgaXMgYSBnYXAgaW4geW91ciB3b3JkXCIpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc25hcHNob3Quc3F1YXJlc1tyXVtjXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICBwbGF5dGhydSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgciA+IDAgJiYgc3F1YXJlc1tyLTFdW2NdICE9PSBzcXVhcmV1bnVzZWQpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiByIDwgZWRnZSAmJiBzcXVhcmVzW3IrMV1bY10gIT09IHNxdWFyZXVudXNlZCkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGMgPiAwICYmIHNxdWFyZXNbcl1bYy0xXSAhPT0gc3F1YXJldW51c2VkKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgYyA8IGVkZ2UgJiYgc3F1YXJlc1tyXVtjKzFdICE9PSBzcXVhcmV1bnVzZWQpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIENoZWNrIHBsYXkgdG8gb3IgZnJvbSBhIHRpbGUgKHBsYXkgdGhyb3VnaCBidXQgbm90IGVpdGhlciBzaWRlKVxyXG4gICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBsb3djb2wgPiAwICYmIHNuYXBzaG90LnNxdWFyZXNbbG93cm93XVtsb3djb2wtMV0gIT09IHNxdWFyZXVudXNlZCkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgaGlnaGNvbCA8IGVkZ2UgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ddW2hpZ2hjb2wrMV0gIT09IHNxdWFyZXVudXNlZCkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgbG93cm93ID4gMCAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvdy0xXVtsb3djb2xdICE9PSBzcXVhcmV1bnVzZWQpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGhpZ2hyb3cgPCBlZGdlICYmIHNuYXBzaG90LnNxdWFyZXNbaGlnaHJvdysxXVtsb3djb2xdICE9PSBzcXVhcmV1bnVzZWQpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAoIXBsYXl0aHJ1ICYmICFob29rbWFkZSAmJiBzbmFwc2hvdC5zcXVhcmVzW21pZGRsZV1bbWlkZGxlXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIldvcmRzIG11c3QgYmUgY29ubmVjdGVkXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFBsYXlJbmZvKCkge1xyXG4gICAgbGV0IHBsYXlpbmZvID0ge307XHJcbiAgICBsZXQgbWFpbndvcmQgPSBcIlwiO1xyXG4gICAgbGV0IGV4dHJhd29yZHMgPSBbXTtcclxuICAgIGxldCB3b3Jkc3RhcnRjb29yZCA9IFwiXCI7XHJcbiAgICBsZXQgbnVtcm93cyA9IGVkZ2UrMTtcclxuICAgIGxldCBudW1jb2xzID0gZWRnZSsxO1xyXG4gICAgbGV0IGxvd3JvdyA9IG51bXJvd3M7XHJcbiAgICBsZXQgaGlnaHJvdyA9IC0xO1xyXG4gICAgbGV0IGxvd2NvbCA9IG51bWNvbHM7XHJcbiAgICBsZXQgaGlnaGNvbCA9IC0xO1xyXG4gICAgbGV0IG51bWNvb3JkcyA9IGN1cnJlbnRjb29yZHMubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgY29vcmQ9MDsgY29vcmQgPCBudW1jb29yZHM7ICsrY29vcmQpIHtcclxuICAgICAgbGV0IHJvdyA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgIGxldCBjb2wgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICBpZiAocm93IDwgbG93cm93KSB7XHJcbiAgICAgICAgbG93cm93ID0gcm93O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyb3cgPiBoaWdocm93KSB7XHJcbiAgICAgICAgaGlnaHJvdyA9IHJvdztcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sIDwgbG93Y29sKSB7XHJcbiAgICAgICAgbG93Y29sID0gY29sO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2wgPiBoaWdoY29sKSB7XHJcbiAgICAgICAgaGlnaGNvbCA9IGNvbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGxvd3JvdyA8IGhpZ2hyb3cgfHwgbnVtY29vcmRzID09PSAxKSB7IC8vIHRpbGVzIHBsYWNlZCBvbiBkaWZmZXJlbmNlIHJvd3Mgc28gcGxheSBpcyB2ZXJ0aWNhbCwgb3Igc2luZ2xlIHRpbGUgcGxheWVkXHJcbiAgICAgIGxldCBjb2wgPSBsb3djb2w7IC8vIGxvd2NvbCBhbmQgaGlnaGNvbCB3aWxsIGhhdmUgdGhlIHNhbWUgdmFsdWVcclxuICAgICAgLy8gZmluZCB0aGUgbG93ZXN0IHJvdyBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGxvd2VyIHRoYW4gdGhhdCBvZiB0aGUgZmlyc3QgcGxheWVkIHRpbGVcclxuICAgICAgbGV0IGxvd2VzdHJvdyA9IGxvd3JvdztcclxuICAgICAgd2hpbGUgKGxvd2VzdHJvdyA+IDAgJiYgc3F1YXJlc1tsb3dlc3Ryb3ctMV1bY29sXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgbG93ZXN0cm93ID0gbG93ZXN0cm93IC0gMTtcclxuICAgICAgfVxyXG4gICAgICAvLyBmaW5kIHRoZSBoaWdoZXN0IHJvdyBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGhpZ2hlciB0aGFuIHRoYXQgb2YgdGhlIGxhc3QgcGxheWVkIHRpbGVcclxuICAgICAgbGV0IGhpZ2hlc3Ryb3cgPSBoaWdocm93O1xyXG4gICAgICB3aGlsZSAoaGlnaGVzdHJvdyA8IGVkZ2UgJiYgc3F1YXJlc1toaWdoZXN0cm93KzFdW2NvbF0gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgIGhpZ2hlc3Ryb3cgPSBoaWdoZXN0cm93ICsgMTtcclxuICAgICAgfVxyXG4gICAgICB3b3Jkc3RhcnRjb29yZCA9IGJvYXJkQ29sdW1uSGVhZGVyc1tjb2xdICsgYm9hcmRSb3dIZWFkZXJzW2xvd2VzdHJvd107IC8vIHZlcnRpY2FsIHBsYXkgY29vcmRzIHN0YXJ0IHdpdGggY29sIGhlYWRlclxyXG4gICAgICBmb3IgKHZhciByb3cgPSBsb3dlc3Ryb3c7IHJvdyA8PSBoaWdoZXN0cm93OyArK3Jvdykge1xyXG4gICAgICAgIG1haW53b3JkID0gbWFpbndvcmQgKyBzcXVhcmVzW3Jvd11bY29sXTtcclxuICAgICAgICBsZXQgY29vcmQgPSByb3cgKyBcIi1cIiArIGNvbDtcclxuICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKSA+IC0xKSB7IC8vIFRoaXMgdGlsZSB3YXMgcGxheWVkLCBjaGVjayBmb3IgaG9va3NcclxuICAgICAgICAgIGxldCBsb3dlc3Rjb2wgPSBjb2w7XHJcbiAgICAgICAgICB3aGlsZSAobG93ZXN0Y29sID4gMCAmJiBzcXVhcmVzW3Jvd11bbG93ZXN0Y29sLTFdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgICAgbG93ZXN0Y29sID0gbG93ZXN0Y29sIC0gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBoaWdoZXN0Y29sID0gY29sO1xyXG4gICAgICAgICAgd2hpbGUgKGhpZ2hlc3Rjb2wgPCBlZGdlICYmIHNxdWFyZXNbcm93XVtoaWdoZXN0Y29sKzFdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgICAgaGlnaGVzdGNvbCA9IGhpZ2hlc3Rjb2wgKyAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGxvd2VzdGNvbCA8IGhpZ2hlc3Rjb2wpIHsgLy8gaG9vayB3YXMgbWFkZVxyXG4gICAgICAgICAgICBsZXQgZXh0cmF3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IGxvd2VzdGNvbDsgYyA8PSBoaWdoZXN0Y29sOyArK2MpIHtcclxuICAgICAgICAgICAgICBleHRyYXdvcmQgPSBleHRyYXdvcmQgKyBzcXVhcmVzW3Jvd11bY107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXh0cmF3b3JkcyA9IFsuLi5leHRyYXdvcmRzLCBleHRyYXdvcmRdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG1haW53b3JkLmxlbmd0aCA8IDIpIHsgLy8gSG9yaXpvbnRhbCBwbGF5IG9yIHNpbmdsZSB0aWxlIGRyb3AgdGhhdCBjYW5ub3QgYmUgYSB2ZXJ0aWNhbCBwbGF5XHJcbiAgICAgIGxldCByb3cgPSBsb3dyb3c7IC8vIGxvd3JvdyBhbmQgaGlnaHJvdyB3aWxsIGhhdmUgdGhlIHNhbWUgdmFsdWVcclxuICAgICAgLy8gZmluZCB0aGUgbG93ZXN0IGNvbCBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGxvd2VyIHRoYW4gdGhhdCBvZiB0aGUgZmlyc3QgcGxheWVkIHRpbGVcclxuICAgICAgbGV0IGxvd2VzdGNvbCA9IGxvd2NvbDtcclxuICAgICAgd2hpbGUgKGxvd2VzdGNvbCA+IDAgJiYgc3F1YXJlc1tyb3ddW2xvd2VzdGNvbC0xXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgbG93ZXN0Y29sID0gbG93ZXN0Y29sIC0gMTtcclxuICAgICAgfVxyXG4gICAgICAvLyBmaW5kIHRoZSBoaWdoZXN0IGNvbCBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGhpZ2hlciB0aGFuIHRoYXQgb2YgdGhlIGxhc3QgcGxheWVkIHRpbGVcclxuICAgICAgbGV0IGhpZ2hlc3Rjb2wgPSBoaWdoY29sO1xyXG4gICAgICB3aGlsZSAoaGlnaGVzdGNvbCA8IGVkZ2UgJiYgc3F1YXJlc1tyb3ddW2hpZ2hlc3Rjb2wrMV0gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgIGhpZ2hlc3Rjb2wgPSBoaWdoZXN0Y29sICsgMTtcclxuICAgICAgfVxyXG4gICAgICB3b3Jkc3RhcnRjb29yZCA9IGJvYXJkUm93SGVhZGVyc1tyb3ddICsgYm9hcmRDb2x1bW5IZWFkZXJzW2xvd2VzdGNvbF07IC8vIGhvcml6b250YWwgcGxheSBjb29yZHMgc3RhcnQgd2l0aCByb3cgaGVhZGVyXHJcbiAgICAgIG1haW53b3JkID0gXCJcIjsgLy8gSW4gY2FzZSB3ZSBnb3QgYSAxIGxldHRlciBtYWlud29yZCBpbiB0aGUgcHJldmlvdXMgYmxvY2tcclxuICAgICAgZXh0cmF3b3JkcyA9IFtdOyAvLyBEaXR0b1xyXG4gICAgICBmb3IgKHZhciBjb2wgPSBsb3dlc3Rjb2w7IGNvbCA8PSBoaWdoZXN0Y29sOyArK2NvbCkge1xyXG4gICAgICAgIG1haW53b3JkID0gbWFpbndvcmQgKyBzcXVhcmVzW3Jvd11bY29sXTtcclxuICAgICAgICBsZXQgY29vcmQgPSByb3cgKyBcIi1cIiArIGNvbDtcclxuICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKSA+IC0xKSB7IC8vIFRoaXMgdGlsZSB3YXMgcGxheWVkLCBjaGVjayBmb3IgaG9va3NcclxuICAgICAgICAgIGxldCBsb3dlc3Ryb3cgPSByb3c7XHJcbiAgICAgICAgICB3aGlsZSAobG93ZXN0cm93ID4gMCAmJiBzcXVhcmVzW2xvd2VzdHJvdy0xXVtjb2xdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgICAgbG93ZXN0cm93ID0gbG93ZXN0cm93IC0gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBoaWdoZXN0cm93ID0gcm93O1xyXG4gICAgICAgICAgd2hpbGUgKGhpZ2hlc3Ryb3cgPCBlZGdlICYmIHNxdWFyZXNbaGlnaGVzdHJvdysxXVtjb2xdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgICAgaGlnaGVzdHJvdyA9IGhpZ2hlc3Ryb3cgKyAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGxvd2VzdHJvdyA8IGhpZ2hlc3Ryb3cpIHsgLy8gaG9vayB3YXMgbWFkZVxyXG4gICAgICAgICAgICBsZXQgZXh0cmF3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yICh2YXIgciA9IGxvd2VzdHJvdzsgciA8PSBoaWdoZXN0cm93OyArK3IpIHtcclxuICAgICAgICAgICAgICBleHRyYXdvcmQgPSBleHRyYXdvcmQgKyBzcXVhcmVzW3JdW2NvbF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXh0cmF3b3JkcyA9IFsuLi5leHRyYXdvcmRzLCBleHRyYXdvcmRdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGxheWluZm8gPSB7bWFpbndvcmQ6IG1haW53b3JkLCBleHRyYXdvcmRzOiBleHRyYXdvcmRzLCBwb3M6IHdvcmRzdGFydGNvb3JkfTtcclxuICAgIHJldHVybiBwbGF5aW5mbztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFJld2luZEluZm8oKSB7IC8vIE11c3QgYmUgY2FsbGVkIGJlZm9yZSB5b3Ugc3RhcnQgc2V0dGluZyBuZXcgdmFsdWVzIGZvciBzdHVmZlxyXG4gICAgLyogUmV3aW5kIGluZm8gaXMgZXZlcnl0aGluZyB5b3UgbmVlZCB0byByZXZlcnNlIHRoZSBtb3ZlIHRoYXQgd2UgZG8gbm90IGFscmVhZHkgaGF2ZSBpbiB0aGUgbmV3IG1vdmUgdmFyaWFibGU6XHJcbiAgICAgICAgc3F1YXJlczogc2F5cyB3aGF0IHRpbGUgaXMgb24gd2hhdCBzcXVhcmVcclxuICAgICAgICB1c2VkYnk6IHNheXMgd2hvIHBsYXllZCB3aGF0IHRpbGUgb24gd2hhdCBzcXVhcmUgKGFmZmVjdHMgc3R5bGluZylcclxuICAgICAgICByYWNrOiBwbGF5ZXJzIHJhY2sgYmVmb3JlIG1vdmUgd2FzIG1hZGUgXHJcbiAgICAgICAgdGlsZXM6IHRpbGUgcG9vbCBiZWZvcmUgcGlja2luZyBuZXcgdGlsZXNcclxuICAgICAgICByZXNjdWVzOiByZXNjdWUgY291bnRcclxuICAgICAgICBwYXNzZWQ6IHdoZXRoZXIgcHJldmlvdXMgcGxheSB3YXMgYSBwYXNzXHJcbiAgICAqL1xyXG4gICAgbGV0IHJld2luZEluZm8gPSB7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zbmFwc2hvdC5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4uc25hcHNob3QudXNlZGJ5XSxcclxuICAgICAgcmFjazogd2hvc2V0dXJuID09PSBcIkdcIiA/IFsuLi5zbmFwc2hvdC5ndGlsZXNdOiBbLi4uc25hcHNob3QucHRpbGVzXSxcclxuICAgICAgdGlsZXM6IFsuLi50aWxlc10sXHJcbiAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMsXHJcbiAgICAgIHBhc3NlZDogcGFzc2VkXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHJld2luZEluZm87XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGFsbG93VW5kb0xhc3RUdXJuKCkge1xyXG4gICAgaWYgKCFhbGxvd1Jld2luZCkge1xyXG4gICAgICBzZXRBbGxvd1Jld2luZCh0cnVlKTtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImFsbG93dW5kb1wiLCAvLyBhbGxvdyB1bmRvIGxhc3QgdHVyblxyXG4gICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyAvLyB3aG8gaXMgYWxsb3dpbmcgaXRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwZXJmb3JtUmV3aW5kKCkge1xyXG4gICAgLyogUmV3aW5kIHRoZSBsYXN0IG1vdmUgYW5kIHRha2UgaXQgb2ZmIHRoZSBlbmQgb2YgdGhlIG1vdmUgbGlzdCAqL1xyXG4gICAgbGV0IG51bU1vdmVzID0gbW92ZXMubGVuZ3RoO1xyXG4gICAgbGV0IGxhc3RNb3ZlID0gbW92ZXNbbW92ZXMubGVuZ3RoLTFdO1xyXG4gICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4ubGFzdE1vdmUucmV3aW5kSW5mby5zcXVhcmVzXTtcclxuICAgIGxldCBuZXdVc2VkYnkgPSBbLi4ubGFzdE1vdmUucmV3aW5kSW5mby51c2VkYnldO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLmxhc3RNb3ZlLnJld2luZEluZm8udGlsZXNdO1xyXG4gICAgbGV0IG5ld1B0aWxlcyA9IGxhc3RNb3ZlLmJ5ID09PSBcIlBcIiA/IFsuLi5sYXN0TW92ZS5yZXdpbmRJbmZvLnJhY2tdIDogWy4uLnB0aWxlc107XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gbGFzdE1vdmUuYnkgPT09IFwiR1wiID8gWy4uLmxhc3RNb3ZlLnJld2luZEluZm8ucmFja10gOiBbLi4uZ3RpbGVzXTtcclxuICAgIGxldCBuZXdSZXNjdWVzID0gbGFzdE1vdmUucmV3aW5kSW5mby5yZXNjdWVzO1xyXG4gICAgbGV0IG5ld1dob3NldHVybiA9IGxhc3RNb3ZlLmJ5OyAvLyBCYWNrIHRvIHRoZWlyIHR1cm5cclxuICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3Zlc107XHJcbiAgICBuZXdNb3Zlcy5zcGxpY2UobnVtTW92ZXMtMSwxKTtcclxuICAgIGxldCBuZXdTbmFwc2hvdCA9IHtcclxuICAgICAgc3F1YXJlczogWy4uLm5ld1NxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi5uZXdVc2VkYnldLFxyXG4gICAgICBndGlsZXM6IFsuLi5uZXdHdGlsZXNdLFxyXG4gICAgICBwdGlsZXM6IFsuLi5uZXdQdGlsZXNdXHJcbiAgICB9O1xyXG4gICAgbGV0IG5ld1Bhc3NlZCA9IGxhc3RNb3ZlLnBhc3NlZDtcclxuICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICBzZXRSZXNjdWVzKG5ld1Jlc2N1ZXMpO1xyXG4gICAgc2V0UGFzc2VkKG5ld1Bhc3NlZCk7XHJcbiAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICBzZXRTbmFwc2hvdChuZXdTbmFwc2hvdCk7XHJcbiAgICAvLyBKdXN0IHNlbmQgZXZlcnl0aGluZyBldmVuIHRob3VnaCBzb21lIGNvdWxkIGJlIGhhcmQgY29kZWQgaW4gcHJvY2Vzc01lc3NhZ2UgYnkgb3Bwb25lbnRcclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcInVuZG90dXJuXCIsIC8vIHVuZG8gbGFzdCB0dXJuXHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB0aWxlIHBvb2xcclxuICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gcHJpc29uZXJzIHJhY2tcclxuICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gZ3VhcmRzIHJhY2tcclxuICAgICAgICBzcXVhcmVzOiBuZXdTcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBuZXdVc2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gc3dhcCBuZXZlciBlbmRzIHRoZSBnYW1lIHNvIGdvIHRvIG9wcG9uZW50XHJcbiAgICAgICAgcmVzY3VlczogbmV3UmVzY3VlcywgLy8gcmVzY3VlIGNvdW50XHJcbiAgICAgICAgcGFzc2VkOiBuZXdQYXNzZWQsIC8vIHdoZXRoZXIgcHJldmlvdXMgcGxheSB3YXMgYSBwYXNzXHJcbiAgICAgICAgbW92ZXM6IG5ld01vdmVzLCAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICBzbmFwc2hvdDogbmV3U25hcHNob3RcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRQdGlsZXMoWy4uLnNuYXBzaG90LnB0aWxlc10pO1xyXG4gICAgc2V0R3RpbGVzKFsuLi5zbmFwc2hvdC5ndGlsZXNdKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldFJjZChbLTEsLTEsbm9kaXJlY3Rpb25dKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmlzb25lclBhc3MgPSAoKSA9PiB7XHJcbiAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgIGxldCBuZXdXaG9zZXR1cm4gPSBwYXNzZWQgPyBcIlhcIiA6IFwiR1wiOyAvLyBJZiBib3RoIHBsYXllcnMgcGFzcyB0aGVuIGVuZCB0aGUgZ2FtZSBieSB1c2luZyBcIlhcIlxyXG4gICAgbGV0IG5ld01vdmUgPSB7Ynk6IFwiUFwiLCB0eXBlOiBcIlBBU1NcIiwgcmV3aW5kSW5mbzogcmV3aW5kSW5mb307XHJcbiAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgc2V0UGFzc2VkKHRydWUpO1xyXG4gICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgcHRpbGVzOiBzbmFwc2hvdC5wdGlsZXMsIC8vIHByaXNvbmVycyByYWNrIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgdGlsZXM6IHRpbGVzLCAvLyB0aWxlIHBvb2wgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgcGFzc2VkOiB0cnVlLFxyXG4gICAgICAgIG1vdmVzOiBuZXdNb3ZlcywgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBubyByZXNjdWVzIG9uIGEgcGFzc1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGd1YXJkc1Bhc3MgPSAoKSA9PiB7XHJcbiAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgIGxldCBuZXdXaG9zZXR1cm4gPSBwYXNzZWQgPyBcIlhcIiA6IFwiUFwiOyAvLyBJZiBib3RoIHBsYXllcnMgcGFzcyB0aGVuIGVuZCB0aGUgZ2FtZSBieSB1c2luZyBcIlhcIlxyXG4gICAgbGV0IG5ld01vdmUgPSB7Ynk6IFwiR1wiLCB0eXBlOiBcIlBBU1NcIiwgcmV3aW5kSW5mbzogcmV3aW5kSW5mb307XHJcbiAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgc2V0UGFzc2VkKHRydWUpO1xyXG4gICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgZ3RpbGVzOiBzbmFwc2hvdC5ndGlsZXMsIC8vIGd1YXJkcyByYWNrIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgdGlsZXM6IHRpbGVzLCAvLyB0aWxlIHBvb2wgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgcGFzc2VkOiB0cnVlLFxyXG4gICAgICAgIG1vdmVzOiBuZXdNb3ZlcyAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXF1ZXN0R2FtZURhdGEgPSAoKSA9PiB7XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybiwgLy8gZm9yIGxvYmJ5IHRvIHBpY2sgdXAgdGhpcyBtZXNzYWdlXHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIgLy8gcmVxdWVzdCBnYW1lIGRhdGFcclxuICAgICAgfSlcclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAocHJpc29uZXJzT3JHdWFyZHMgIT09IHdob3NldHVybikge3JldHVybjt9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIiA/IGVuZFByaXNvbmVyc1R1cm4oKSA6IGVuZEd1YXJkc1R1cm4oKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICByZWNhbGxUaWxlcygpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbGV0dGVydGVzdCA9IC9eW0EtWmEtelxcP10kLzsgLy8gc2luZ2xlIGxldHRlciBvciBxdWVzdGlvbiBtYXJrIGtleSBwcmVzc2VkXHJcbiAgICBpZiAoZXZlbnQua2V5Lm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgIGxldCBsZXR0ZXIgPSBldmVudC5rZXkudG9VcHBlckNhc2UoKTtcclxuICAgICAgbGV0IHJhY2sgPSB3aG9zZXR1cm4gPT09IFwiUFwiID8gcHRpbGVzIDogZ3RpbGVzO1xyXG4gICAgICBsZXQgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKGxldHRlcik7XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKFwiP1wiKTsgLy8gVXNlIHRoZSBibGFuayBpZiB0aGV5IGhhdmUgb25lXHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5ld1NlbGVjdGlvbiA+IC0xKSB7IC8vIFByZXNzZWQgbGV0dGVyIGlzIG9uIHRoZSByYWNrXHJcbiAgICAgICAgbGV0IHJvdyA9IHJjZFswXTtcclxuICAgICAgICBsZXQgY29sID0gcmNkWzFdO1xyXG4gICAgICAgIGxldCBkaXIgPSByY2RbMl07XHJcbiAgICAgICAgaWYgKHJvdyA+LTEgJiYgY29sID4gLTEgJiYgZGlyICE9PSBub2RpcmVjdGlvbikgeyAvLyByb3csIGNvbCwgZGlyIGFyZSBzZXQgdG8gYWNjZXB0IGtleXN0cm9rZVxyXG4gICAgICAgICAgLy8gTmVlZCB0byBmaWd1cmUgb3V0IG5leHQgc3FhdXJlIHRvIGF1dG8tcGxhY2UgYSB0aWxlXHJcbiAgICAgICAgICBsZXQgbmV3UmNkID0gcmNkO1xyXG4gICAgICAgICAgaWYgKGRpciA9PT0gXCJyXCIpIHsgLy8gcGxheWluZyByaWdodHdhcmRzXHJcbiAgICAgICAgICAgIGxldCBuZXdjID0gLTE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSBjb2wgKyAxOyBjIDwgZWRnZSArIDEgJiYgbmV3YyA9PT0gLTE7IGMrKykge1xyXG4gICAgICAgICAgICAgIGlmIChzcXVhcmVzW3Jvd11bY10gPT09IHNxdWFyZXVudXNlZCkge25ld2MgPSBjO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmV3YyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsbm9kaXJlY3Rpb25dO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG5ld1JjZCA9IFtyb3csIG5ld2MsIFwiclwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChkaXIgPT09IFwiZFwiKSB7IC8vIHBsYXlpbmcgZG93bndhcmRzXHJcbiAgICAgICAgICAgIGxldCBuZXdyID0gLTE7XHJcbiAgICAgICAgICAgIGxldCBudW1yb3dzID0gKHJhY2tzaXplKjIpKzE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSByb3cgKyAxOyByIDwgbnVtcm93cyAmJiBuZXdyID09PSAtMTsgcisrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZXNbcl1bY29sXSA9PT0gc3F1YXJldW51c2VkKSB7bmV3ciA9IHI7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZXdyID09PSAtMSkge1xyXG4gICAgICAgICAgICAgIG5ld1JjZCA9IFstMSwtMSxub2RpcmVjdGlvbl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gW25ld3IsIGNvbCwgXCJkXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiICYmIGN1cnJlbnRjb29yZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBTYW1lIGFzIGNsaWNraW5nIG9uIGEgcGxheWVkLXRoaXMtbW92ZSB0aWxlIGluIHRlcm1zIG9mIHJldHVybmluZyB0aGUgdGlsZSB0byB0aGUgcmFja1xyXG4gICAgICAvLyBIb3dldmVyIHdlIGFsc28gd2FudCB0byBzZXQgdXAgcmNkIHNvIHRoZXkgY2FuIHByZXNzIHRoZSBrZXkgdGhleSBtZWFudCBhbmQgY29udGludWVcclxuICAgICAgbGV0IGNvb3JkID0gY3VycmVudGNvb3Jkc1tjdXJyZW50Y29vcmRzLmxlbmd0aCAtIDFdOyAvLyB0aWxlIHRvIHJldHVybiB0byByYWNrXHJcbiAgICAgIGxldCBuZXdDdXJyZW50Y29vcmRzID0gWy4uLmN1cnJlbnRjb29yZHNdO1xyXG4gICAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld1VzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgICAgbGV0IG5ld1JjZCA9IFstMSwtMSxub2RpcmVjdGlvbl07XHJcbiAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgIG5ld0N1cnJlbnRjb29yZHMuc3BsaWNlKGN1cnJlbnRjb29yZHMubGVuZ3RoLTEsMSk7XHJcbiAgICAgIGxldCByb3cgPSBwYXJzZUludChjb29yZC5zcGxpdChcIi1cIilbMF0pO1xyXG4gICAgICBsZXQgY29sID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgbGV0IHJldHVybmVkVGlsZSA9IHNxdWFyZXNbcm93XVtjb2xdO1xyXG4gICAgICBpZiAod2hvc2V0dXJuID09PSBcIlBcIikge1xyXG4gICAgICAgIG5ld1B0aWxlcy5wdXNoKHJldHVybmVkVGlsZSk7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3UHRpbGVzLmxlbmd0aC0xO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0d0aWxlcy5wdXNoKHJldHVybmVkVGlsZSk7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3R3RpbGVzLmxlbmd0aC0xO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1VzZWRieVtyb3ddW2NvbF0gPSB1c2VkYnlub29uZTtcclxuICAgICAgbmV3U3F1YXJlc1tyb3ddW2NvbF0gPSBzcXVhcmV1bnVzZWQ7XHJcbiAgICAgIGxldCBkaXIgPSByY2RbMl07XHJcbiAgICAgIGlmIChkaXIgIT09IG5vZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgLy8gZGlyZWN0aW9uIHdhcyBzZXQgc28ga2VlcCBpdFxyXG4gICAgICAgIG5ld1JjZCA9IFtyb3csY29sLGRpcl07XHJcbiAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSAtMTsgLy8gaWYgdGhleSBiYWNrc3BhY2UgYWxsIHRoZSBsZXR0ZXJzIG9mZiBsZWF2ZSByYWNrIHRpbGUgdW5zZWxlY3RlZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgICBzZXRSY2QobmV3UmNkKTtcclxuICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwcmlzb25icmVha1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTIgcGJHYW1laWQgZm9ybWFsaW5mb1wiPlxyXG4gICAgICAgICAgR2FtZSBpZDoge2dhbWVpZH08YnI+PC9icj5cclxuICAgICAgICAgIE5pY2tuYW1lOiB7bmlja25hbWV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOCBwYnRpdGxlXCI+XHJcbiAgICAgICAgICBQcmlzb24gQnJlYWtcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cnVuX2NpcmNsZTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yIHBiaG9tZWxpbmsgZm9ybWFsaW5mb1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT48L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgIE9wcG9uZW50OiB7b3BwbmFtZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllck91dGVyU2VjdGlvblwiPlxyXG4gICAgICAgICAgPFByaXNvbmVyc1xyXG4gICAgICAgICAgICBwdGlsZXM9e3B0aWxlc31cclxuICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVByaXNvbmVyVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZFByaXNvbmVyc1R1cm4oKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBQcmlzb25lcnNUaWxlcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IHByaXNvbmVyUGFzcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVW5kb0xhc3RQbGF5PXsoKSA9PiBwZXJmb3JtUmV3aW5kKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tBbGxvd1VuZG89eygpID0+IGFsbG93VW5kb0xhc3RUdXJuKCl9XHJcbiAgICAgICAgICAgIHJlc2N1ZXM9e3Jlc2N1ZXN9XHJcbiAgICAgICAgICAgIHByaXNvbmVyc09yR3VhcmRzPXtwcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICAgICAgbW92ZXM9e21vdmVzfVxyXG4gICAgICAgICAgICBhbGxvd1Jld2luZD17YWxsb3dSZXdpbmR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiQm9hcmRQbHVzVW5kZXJib2FyZFwiPlxyXG4gICAgICAgICAge3ByaXNvbmVyc09yR3VhcmRzID09PSB3aG9zZXR1cm4gP1xyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgc3F1YXJlcz17c3F1YXJlc31cclxuICAgICAgICAgICAgICAgIHVzZWRieT17dXNlZGJ5fVxyXG4gICAgICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsocmksIGNpKSA9PiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJpLCBjaSwgLTEsbnVsbCl9XHJcbiAgICAgICAgICAgICAgICByYWNrc2l6ZT17cmFja3NpemV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzPXtzcXVhcmVzfVxyXG4gICAgICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgcmFja3NpemU9e3JhY2tzaXplfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlVuZGVyYm9hcmRcIj5cclxuICAgICAgICAgICAge3dob3NldHVybiA9PT0gXCJYXCIgP1xyXG4gICAgICAgICAgICAgIDxoMT5HYW1lIE92ZXIhPC9oMT5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxwPntqb2tlc1tqb2tlaW5kZXhdfTwvcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllck91dGVyU2VjdGlvblwiPlxyXG4gICAgICAgICAgPEd1YXJkc1xyXG4gICAgICAgICAgICBndGlsZXM9e2d0aWxlc31cclxuICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZUd1YXJkVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZEd1YXJkc1R1cm4oKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBHdWFyZHNUaWxlcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IGd1YXJkc1Bhc3MoKX1cclxuICAgICAgICAgICAgb25DbGlja1VuZG9MYXN0UGxheT17KCkgPT4gcGVyZm9ybVJld2luZCgpfVxyXG4gICAgICAgICAgICBvbkNsaWNrQWxsb3dVbmRvPXsoKSA9PiBhbGxvd1VuZG9MYXN0VHVybigpfVxyXG4gICAgICAgICAgICBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgICAgIG1vdmVzPXttb3Zlc31cclxuICAgICAgICAgICAgYWxsb3dSZXdpbmQ9e2FsbG93UmV3aW5kfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGJUaWxlQW5kTW92ZXNPdXRlclwiPlxyXG4gICAgICAgICAgICAgIDxTaG93VW5zZWVuVGlsZXMgdGlsZXM9e3RpbGVzfSBvdGhlcnRpbGVzPXtwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyBndGlsZXMgOiBwdGlsZXN9Lz5cclxuICAgICAgICAgICAgICA8U2hvd01vdmVzIG1vdmVzPXttb3Zlc30vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICA8Q2hhdCBnYW1laWQ9e2dhbWVpZH0gY2xpZW50PXtjbGllbnR9IG5pY2tuYW1lPXtuaWNrbmFtZX0gbXNncz17Y2hhdG1zZ3N9IHNldE1zZ3M9e3NldENoYXRtc2dzfSBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2hvd1Vuc2VlblRpbGVzID0gKHByb3BzKSA9PiB7IC8vIHRpbGVzID0gdGlsZXMgaW4gYmFnLCBvdGhlcnRpbGVzID0gdGlsZXMgb24gb3RoZXIgcGxheWVycyByYWNrXHJcbiAgbGV0IHVuc2VlblRpbGVzID0gWy4uLnByb3BzLnRpbGVzLCAuLi5wcm9wcy5vdGhlcnRpbGVzXTtcclxuICAvLyBTb3J0IHRoZSB0aWxlcyB0aGVuIHB1dCB0aGUgYmxhbmtzIGF0IHRoZSBlbmRcclxuICB1bnNlZW5UaWxlcy5zb3J0KCk7XHJcbiAgaWYgKHVuc2VlblRpbGVzWzBdID09PSBcIj9cIikge1xyXG4gICAgICB1bnNlZW5UaWxlcy5zcGxpY2UoMCwxKVxyXG4gICAgICB1bnNlZW5UaWxlcy5wdXNoKFwiP1wiKVxyXG4gIH1cclxuICBpZiAodW5zZWVuVGlsZXNbMF0gPT09IFwiP1wiKSB7XHJcbiAgICAgIHVuc2VlblRpbGVzLnNwbGljZSgwLDEpXHJcbiAgICAgIHVuc2VlblRpbGVzLnB1c2goXCI/XCIpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVwb29sVGl0bGVcIj5USUxFUzwvZGl2PlxyXG4gICAgICB7dW5zZWVuVGlsZXMubWFwKCh0LCB0aSkgPT4gKFxyXG4gICAgICAgIDxzcGFuIGtleT17YHRpbGUke3RpfWB9PlxyXG4gICAgICAgICAge3RpID4gMCAmJiB0ICE9PSB1bnNlZW5UaWxlc1t0aSAtIDFdID8gKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYlRpbGVwb29sRGl2aWRlclwiPjwvc3Bhbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0ID09PSBcIlFcIiA/IFwicGJUaWxlcG9vbFRpbGUgdVwiIDogXCJwYlRpbGVwb29sVGlsZVwifT57dH08L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaG93TW92ZXMgPSAocHJvcHMpID0+IHsgLy8gc2hvdyBtb3ZlcyBtYWRlXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGJNb3Zlc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiTW92ZXNUaXRsZVwiPk1PVkVTPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJNb3Zlc1Njcm9sbGFibGVcIiBpZD1cIlNjcm9sbGFibGVNb3Zlc1wiPlxyXG4gICAgICAgIHtwcm9wcy5tb3Zlcy5tYXAoKG0sIG1pKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17YG1vdmUke21pfWB9IGNsYXNzTmFtZT1cInBiTW92ZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYk1vdmUgYnlcIj57bS5ieX08L3NwYW4+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgcGJNb3ZlICR7bS50eXBlfWB9PlxyXG4gICAgICAgICAgICAgIHttLnR5cGUgPT09IFwiUExBWVwiID9cclxuICAgICAgICAgICAgICAgIDw+e20ucG9zfSB7bS5tYWlud29yZC5yZXBsYWNlKFwiUVwiLFwiUXVcIil9XHJcbiAgICAgICAgICAgICAgICAgIHttLmV4dHJhd29yZHM/Lm1hcCgodykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAsJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dy5yZXBsYWNlKFwiUVwiLFwiUXVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmNvbnN0IFJhY2tUaWxlID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy50aWxlY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZU9uUmFja1RleHRcIj57cHJvcHMudGlsZXZhbHVlfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEZpbmlzaFR1cm5CdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNoZWNrPC9pPiZuYnNwO0ZpbmlzaCBUdXJuPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRpbGVSZWNhbGxCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnVuZG88L2k+Jm5ic3A7UmVjYWxsIFRpbGVzPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRpbGVFeGNoYW5nZUJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2FjaGVkPC9pPiZuYnNwO1N3YXAgVGlsZXM8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUGFzc1BsYXlCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPm5vdF9pbnRlcmVzdGVkPC9pPiZuYnNwO1Bhc3MgVHVybjwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBBbGxvd1VuZG9MYXN0UGxheSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cmVwb3J0X3Byb2JsZW08L2k+XHJcbiAgICAgICAgJm5ic3A7QWxsb3cgVW5kbyBUdXJuXHJcbiAgICAgICAge3Byb3BzLmFscmVhZHlBbGxvd2VkID9cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dDJcIj5BbGxvdyB1bmRvIGlzIG5vdyBlbmFibGVkPC9zcGFuPlxyXG4gICAgICAgIDpcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dDJcIj5DbGljayB0byBsZXQgb3Bwb25lbnQgdW5kbzwvc3Bhbj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgVW5kb0xhc3RQbGF5ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25TZXZlcmVcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25TZXZlcmVUZXh0XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5kZWxldGVfZm9yZXZlcjwvaT5cclxuICAgICAgICAmbmJzcDtVbmRvIE15IFR1cm5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblNldmVyZVRleHQyXCI+T3Bwb25lbnQgaGFzIGFsbG93ZWQgdW5kbzwvc3Bhbj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBQcmlzb25lcnMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByZW5kZXJUaWxlID0gcmVuZGVyUGxheWVyVGlsZShwcm9wcyk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckZyZWVkUHJpc29uZXJzID0gKGNvdW50KSA9PiB7XHJcbiAgICBsZXQgZHVtYiA9IEFycmF5KGNvdW50KS5maWxsKFwibm9uc2Vuc2VcIik7XHJcbiAgICByZXR1cm4gZHVtYi5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICA8c3BhbiBrZXk9e3ZhbHVlICsgU3RyaW5nKGluZGV4KX0gZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJJJ20gZnJlZSEgSSdtIGZyZWUhXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwYlJlc2N1ZWVcIlxyXG4gICAgICAgICAgc3JjPVwiL2JyZWFrZnJlZS5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiSSdtIGZyZWUhIEknbSBmcmVlIVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICApKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllcklubmVyU2VjdGlvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHBiUGxheWVyVGl0bGUgJHtwcm9wcy5wcmlzb25lcnNPckd1YXJkc31gfT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJ1bl9jaXJjbGU8L2k+Jm5ic3A7UFJJU09ORVJTJm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ydW5fY2lyY2xlPC9pPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICB7cHJvcHMucHRpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICByZW5kZXJUaWxlKFxyXG4gICAgICAgICAgICBwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnNlbGVjdGlvbiA9PT0gdGlcclxuICAgICAgICAgICAgPyB0ID09PSBcIlFcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyBcInBiVGlsZU9uUmFjayBTZWxlY3RlZCBQIHVcIiA6IFwicGJUaWxlT25SYWNrIFNlbGVjdGVkIFBcIlxyXG4gICAgICAgICAgICA6IHQgPT09IFwiUVwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IFwicGJUaWxlT25SYWNrIFVuc2VsZWN0ZWQgUCB1XCIgOiAgXCJwYlRpbGVPblJhY2sgVW5zZWxlY3RlZCBQXCIsXHJcbiAgICAgICAgICAgIHRpLFxyXG4gICAgICAgICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyB0IDogXCIqXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gXHJcbiAgICAgICAgc2hvd0FjdGlvbkJ1dHRvbnMocHJvcHMpXHJcbiAgICAgICAgOiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgJiYgcHJvcHMubW92ZXMubGVuZ3RoID4gMCAmJiBwcm9wcy5hbGxvd1Jld2luZCAmJiBwcm9wcy5tb3Zlc1twcm9wcy5tb3Zlcy5sZW5ndGgtMV0uYnkgPT09IFwiUFwiID9cclxuICAgICAgICBzaG93QWN0aW9uQnV0dG9uVW5kb0xhc3RQbGF5KHByb3BzKVxyXG4gICAgICAgIDpcclxuICAgICAgICA8PjwvPlxyXG4gICAgICB9XHJcbiAgICAgIHtwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgJiYgcHJvcHMubW92ZXMubGVuZ3RoID4gMCAmJiBwcm9wcy5tb3Zlc1twcm9wcy5tb3Zlcy5sZW5ndGgtMV0uYnkgPT09IFwiR1wiID9cclxuICAgICAgICBzaG93QWN0aW9uQnV0dG9uQWxsb3dVbmRvKHByb3BzKVxyXG4gICAgICAgIDpcclxuICAgICAgICA8PjwvPlxyXG4gICAgICB9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJSZXNjdWVzTWFkZVwiPlxyXG4gICAgICAgIFJlc2N1ZXMgbWFkZToge3Byb3BzLnJlc2N1ZXN9XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAge3JlbmRlckZyZWVkUHJpc29uZXJzKHByb3BzLnJlc2N1ZXMpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBHdWFyZHMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByZW5kZXJUaWxlID0gcmVuZGVyUGxheWVyVGlsZShwcm9wcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVySW5uZXJTZWN0aW9uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2VjdXJpdHk8L2k+Jm5ic3A7R1VBUkRTJm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zZWN1cml0eTwvaT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAge3Byb3BzLmd0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgcmVuZGVyVGlsZShcclxuICAgICAgICAgICAgcHJvcHMud2hvc2V0dXJuID09PSBcIkdcIiAmJiBwcm9wcy5zZWxlY3Rpb24gPT09IHRpXHJcbiAgICAgICAgICAgICAgPyB0ID09PSBcIlFcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyBcInBiVGlsZU9uUmFjayBTZWxlY3RlZCBHIHVcIiA6IFwicGJUaWxlT25SYWNrIFNlbGVjdGVkIEdcIlxyXG4gICAgICAgICAgICAgIDogdCA9PT0gXCJRXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID8gXCJwYlRpbGVPblJhY2sgVW5zZWxlY3RlZCBHIHVcIiA6ICBcInBiVGlsZU9uUmFjayBVbnNlbGVjdGVkIEdcIixcclxuICAgICAgICAgICAgdGksXHJcbiAgICAgICAgICAgIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IHQgOiBcIipcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIkdcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyBcclxuICAgICAgICBzaG93QWN0aW9uQnV0dG9ucyhwcm9wcylcclxuICAgICAgICA6IHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiAmJiBwcm9wcy5tb3Zlcy5sZW5ndGggPiAwICYmIHByb3BzLmFsbG93UmV3aW5kICYmIHByb3BzLm1vdmVzW3Byb3BzLm1vdmVzLmxlbmd0aC0xXS5ieSA9PT0gXCJHXCIgP1xyXG4gICAgICAgIHNob3dBY3Rpb25CdXR0b25VbmRvTGFzdFBsYXkocHJvcHMpXHJcbiAgICAgICAgOlxyXG4gICAgICAgIDw+PC8+XHJcbiAgICAgIH1cclxuICAgICAge3Byb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiAmJiBwcm9wcy5tb3Zlcy5sZW5ndGggPiAwICYmIHByb3BzLm1vdmVzW3Byb3BzLm1vdmVzLmxlbmd0aC0xXS5ieSA9PT0gXCJQXCIgP1xyXG4gICAgICAgIHNob3dBY3Rpb25CdXR0b25BbGxvd1VuZG8ocHJvcHMpXHJcbiAgICAgICAgOlxyXG4gICAgICAgIDw+PC8+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQbGF5ZXJUaWxlKHByb3BzKSB7XHJcbiAgcmV0dXJuICh0aWxlY2xhc3MsIHRpbGVpbmRleCwgdGlsZXZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aWxldmFsdWUgIT09IFwiKlwiID8gLy8gdGhpcyB0aWxlIGlzIGZvciB0aGlzIHBsYXllciwgYWxsb3cgY2xpY2tcclxuICAgICAgICA8UmFja1RpbGVcclxuICAgICAgICAgIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9XHJcbiAgICAgICAgICB0aWxlY2xhc3M9e3RpbGVjbGFzc31cclxuICAgICAgICAgIHRpbGV2YWx1ZT17dGlsZXZhbHVlfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljayh0aWxlaW5kZXgpfSAvPlxyXG4gICAgICAgIDogLy8gdGhpcyB0aWxlIGlzIGZvciBvcHBvbmVudCwgZG8gbm90IGFsbG93IGNsaWNrXHJcbiAgICAgICAgPFJhY2tUaWxlXHJcbiAgICAgICAgICBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfVxyXG4gICAgICAgICAgdGlsZWNsYXNzPXt0aWxlY2xhc3N9XHJcbiAgICAgICAgICB0aWxldmFsdWU9e3RpbGV2YWx1ZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5hbGVydChcIk5vIHBlZWtpbmchXCIpfSAvPlxyXG4gICAgKTtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93QWN0aW9uQnV0dG9ucyhwcm9wcykge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uRGl2XCI+XHJcbiAgICA8cD5cclxuICAgICAgPEZpbmlzaFR1cm5CdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja0ZpbmlzaFR1cm4oKX0gLz5cclxuICAgIDwvcD5cclxuICAgIDxwPlxyXG4gICAgICA8VGlsZVJlY2FsbEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZVJlY2FsbCgpfSAvPlxyXG4gICAgPC9wPlxyXG4gICAgPHA+XHJcbiAgICAgIDxUaWxlRXhjaGFuZ2VCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVFeGNoYW5nZSgpfSAvPlxyXG4gICAgPC9wPlxyXG4gICAgPHA+XHJcbiAgICAgIDxQYXNzUGxheUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrUGFzc1BsYXkoKX0gLz5cclxuICAgIDwvcD5cclxuICA8L2Rpdj47XHJcbn1cclxuZnVuY3Rpb24gc2hvd0FjdGlvbkJ1dHRvbkFsbG93VW5kbyhwcm9wcykge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uRGl2XCI+XHJcbiAgICA8cD5cclxuICAgICAgPEFsbG93VW5kb0xhc3RQbGF5IG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tBbGxvd1VuZG8oKX0gYWxyZWFkeUFsbG93ZWQ9e3Byb3BzLmFsbG93UmV3aW5kfS8+XHJcbiAgICA8L3A+XHJcbiAgPC9kaXY+XHJcbn1cclxuZnVuY3Rpb24gc2hvd0FjdGlvbkJ1dHRvblVuZG9MYXN0UGxheShwcm9wcykge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uRGl2XCI+XHJcbiAgICA8cD5cclxuICAgICAgPFVuZG9MYXN0UGxheSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVW5kb0xhc3RQbGF5KCl9IC8+XHJcbiAgICA8L3A+XHJcbiAgPC9kaXY+XHJcbn1cclxuY29uc3QgQ2hhdCA9ICh7Z2FtZWlkLCBjbGllbnQsIG5pY2tuYW1lLCBtc2dzLCBzZXRNc2dzLCBwcmlzb25lcnNPckd1YXJkc30pID0+IHtcclxuICBjb25zdCBbbmV4dG1zZywgc2V0TmV4dG1zZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiBcclxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgbmV4dG1zZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBuZXdNc2dzID0gWy4uLm1zZ3MsIHtmcm9tOiBuaWNrbmFtZSwgbXNnOiBuZXh0bXNnfV1cclxuICAgICAgbGV0IHNlbmRtc2cgPSBuZXh0bXNnO1xyXG4gICAgICBzZXRNc2dzKG5ld01zZ3MpO1xyXG4gICAgICBzZXROZXh0bXNnKCcnKTtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImNoYXRcIiwgLy8gc2VuZCBjaGF0IG1lc3NhZ2VcclxuICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsIC8vIHdobyBzZW50IGl0XHJcbiAgICAgICAgICBzZW5kbXNnOiBzZW5kbXNnIC8vIHRoZSBtZXNzYWdlIHR5cGVkIGluIHRoZSBjaGF0XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gbGV0IGNoYXJ0ZXN0ID0gL15bQS1aYS16MC05IFxcLixcXChcXClcXD86ISdcIl0kLzsgLy8gQWxsb3cgbGV0dGVyLCBudW1iZXIsIHNwYWNlLCBwZXJpb2QsIGNvbW1hLCByb3VuZCBicmFja2V0cywgcXVlc3Rpb24gbWFyaywgY29sb24sIGV4Y2xhbWF0aW9uIG1hcmssIHF1b3RlLCBkb3VibGUgcXVvdGVcclxuICAgIC8vIGlmIChldmVudC5rZXkubWF0Y2goY2hhcnRlc3QpKSB7XHJcbiAgICAvLyAgIGxldCBuZXdOZXh0bXNnID0gbmV4dG1zZyArIGV2ZW50LmtleTtcclxuICAgIC8vICAgc2V0TmV4dG1zZyhuZXdOZXh0bXNnKTtcclxuICAgIC8vIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiYgbmV4dG1zZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBuZXdOZXh0bXNnID0gbmV4dG1zZy5zbGljZSgwLG5leHRtc2cubGVuZ3RoLTEpO1xyXG4gICAgICBzZXROZXh0bXNnKG5ld05leHRtc2cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGJDaGF0XCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQ2hhdFRpdGxlXCI+Q0hBVDwvc3Bhbj5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInBiQ2hhdFRhYmxlXCI+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge21zZ3MuZmlsdGVyKCh2YWx1ZSwgaW5kZXgpID0+IG1zZ3MubGVuZ3RoIC0gaW5kZXggPCAxNSkubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17YENoYXRNZXNzYWdlJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJDaGF0RnJvbVwiPnt2YWx1ZS5mcm9tfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQ2hhdE1zZ1wiPnt2YWx1ZS5tc2d9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjJcIj5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtuZXh0bXNnID09PSBcIlwiID8gXCJwYkNoYXRJbnB1dEVtcHR5XCIgOiBcInBiQ2hhdElucHV0XCJ9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmV4dG1zZ0lucHV0QXJlYVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV4dG1zZ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldE5leHRtc2coZS50YXJnZXQudmFsdWUpO319XHJcbiAgICAgICAgICAgICAgICBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoZWxlbWVudGlkKSA9PiB7XHJcbiAgY29uc3QgdGhlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRpZCk7XHJcbiAgdGhlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGVFbGVtZW50LnNjcm9sbEhlaWdodDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=