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
    className: "container-fluid",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-10 pbtitle",
        children: ["Prison Break Lobby", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "material-icons",
          children: "run_circle"
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
        className: "col-2 pbhomelink",
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
              lineNumber: 286,
              columnNumber: 14
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
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row pbLobbyCommonInfoSection",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "pbLobbyNicknamePrompt",
          children: "Nickname"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "pbLobbyNicknameInput",
          name: "nickname",
          value: nickname,
          onChange: e => {
            setNickname(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row pbLobbyPrisonerSection",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "pbPlayerTitle",
          children: "PRISONERS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "pbLobbyGameIdPrompt",
          children: "Game ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "pbLobbyGameIdInput",
          name: "gameid",
          value: gameid,
          onChange: e => {
            setGameid(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "pbLobbyRackSizePrompt"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 9
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
          lineNumber: 312,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "selectracksize5",
          className: racksize === 5 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
          onClick: () => selectRackSize(5),
          "data-toggle": "tooltip",
          title: "5 letter racks, 11 x 11 board",
          children: "5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "selectracksize6",
          className: racksize === 6 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
          onClick: () => selectRackSize(6),
          "data-toggle": "tooltip",
          title: "6 letter racks, 13 x 13 board",
          children: "6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "selectracksize7",
          className: racksize === 7 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
          onClick: () => selectRackSize(7),
          "data-toggle": "tooltip",
          title: "7 letter racks, 15 x 15 board",
          children: "7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "pbLobbyCellBlockInfo",
          children: [racksize, " letter racks, ", racksize * 2 + 1, " x ", racksize * 2 + 1, " board."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 9
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
          lineNumber: 338,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row pbLobbyGuardSection",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "pbPlayerTitle",
          children: "GUARDS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "pbLobbyGuardInfo",
          children: "Find and click the \"Join Game\" button for your game."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 54
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "If you lost connection, find and click the \"Reconnect\" button for your game id."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col offset-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Game list:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 5
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
                lineNumber: 373,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                colSpan: "2",
                children: "Prisoners"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 374,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                colSpan: "2",
                children: "Guards"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 375,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                children: "Cell Block"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 376,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "pbLobbyGamesHeaderCol",
                children: "Game Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 377,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 372,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: gamelist.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              className: "pbGamesInProgressRow",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyGameid",
                children: value.gameid
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 383,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyPlayerIndicator",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "material-icons",
                  children: value.playingP ? "check_circle" : "cancel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 384,
                  columnNumber: 56
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 384,
                columnNumber: 17
              }, undefined), availableActionP(value) === availableActionNone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyActionNone",
                children: "No action available"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 386,
                columnNumber: 19
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
                  lineNumber: 389,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 388,
                columnNumber: 19
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
                  lineNumber: 402,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 401,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyPlayerIndicator",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "material-icons",
                  children: value.playingG ? "check_circle" : "cancel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 412,
                  columnNumber: 56
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 412,
                columnNumber: 17
              }, undefined), availableActionG(value) === availableActionNone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyActionNone",
                children: "No action available"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 414,
                columnNumber: 19
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
                  lineNumber: 417,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 416,
                columnNumber: 19
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
                  lineNumber: 430,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 429,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyGameRacksize",
                children: value.racksize
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 441,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "pbLobbyGameStatus",
                children: value.gamestatus
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 444,
                columnNumber: 17
              }, undefined)]
            }, `OtherGame${index}`, true, {
              fileName: _jsxFileName,
              lineNumber: 382,
              columnNumber: 15
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 380,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 278,
    columnNumber: 10
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
    lineNumber: 488,
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
      lineNumber: 493,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 492,
    columnNumber: 5
  }, undefined) : props.c === squareunused ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: tdvalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 496,
    columnNumber: 7
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `pbSquareTileText ${props.squareusedby + (props.c === "Q" ? " u" : "")}`,
      children: tdvalue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 500,
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
        lineNumber: 510,
        columnNumber: 9
      }, undefined)
    }, `Square${ri}-${ci}`, false, {
      fileName: _jsxFileName,
      lineNumber: 509,
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
        lineNumber: 525,
        columnNumber: 9
      }, undefined), squares[ri].map((c, ci) => renderSquare(ri, ci, c, usedby[ri][ci])), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        className: "pbBoardRowHeader",
        id: "BoardHeaderRight",
        children: boardRowHeaders[ri]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 529,
        columnNumber: 9
      }, undefined)]
    }, `BoardRow${ri}`, true, {
      fileName: _jsxFileName,
      lineNumber: 524,
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
          lineNumber: 540,
          columnNumber: 11
        }, undefined), squares.map((_$, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardColumnHeader",
          children: boardColumnHeaders[i]
        }, `TopColumnHeader${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 542,
          columnNumber: 13
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardHeaderTopRight",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 546,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 539,
        columnNumber: 9
      }, undefined), squares.map((r, ri) => renderRow(ri)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
        className: "pbBoardColumnHeaderRow",
        id: "BoardHeaderBottom",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardHeaderBottomLeft",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 550,
          columnNumber: 11
        }, undefined), squares.map((_$, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardColumnHeader",
          children: boardColumnHeaders[i]
        }, `BottomColumnHeader${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 552,
          columnNumber: 13
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "pbBoardHeaderBottomRight",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 556,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 549,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 537,
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
    recallTiles(); // In case they put some tiles on the board before clicking Pass

    putAtMoveStart();
    let newWhoseturn = passed ? "X" : "G"; // If both players pass then end the game by using "X"

    setWhoseturn(newWhoseturn);
    setPassed(true);
    let newMove = {
      by: "P",
      type: "PASS"
    };
    let newMoves = [...moves, newMove];
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
    recallTiles(); // In case they put some tiles on the board before clicking Pass

    putAtMoveStart();
    let newWhoseturn = passed ? "X" : "P"; // If both players pass then end the game by using "X"

    setWhoseturn(newWhoseturn);
    setPassed(true);
    let newMove = {
      by: "G",
      type: "PASS"
    };
    let newMoves = [...moves, newMove];
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
        className: "col-2 pbGameid",
        children: ["Game id: ", gameid, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1582,
          columnNumber: 28
        }, undefined), "Nickname: ", nickname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1581,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-8 pbtitle",
        children: ["Prison Break", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "material-icons",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1587,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1585,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2 pbhomelink",
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
              lineNumber: 1591,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1591,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1590,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1593,
          columnNumber: 11
        }, undefined), "Opponent: ", oppname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1589,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1580,
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
          lineNumber: 1599,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1598,
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
            lineNumber: 1619,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1618,
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
            lineNumber: 1629,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1628,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pbUnderboard",
          children: whoseturn === "X" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Game Over!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1640,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: jokes[jokeindex]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1642,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1638,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1616,
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
          lineNumber: 1647,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1646,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col pbTilesMovesChatOuter",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col pbTileAndMovesOuter",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowUnseenTiles, {
              tiles: tiles,
              othertiles: prisonersOrGuards === "P" ? gtiles : ptiles
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1666,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowMoves, {
              moves: moves
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1667,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1665,
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
              lineNumber: 1670,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1669,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 1664,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1663,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1597,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1579,
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
      lineNumber: 1693,
      columnNumber: 7
    }, undefined), unseenTiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== unseenTiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1697,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: t === "Q" ? "pbTilepoolTile u" : "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1701,
        columnNumber: 11
      }, undefined)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 1695,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1692,
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
      lineNumber: 1711,
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
            lineNumber: 1715,
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
            lineNumber: 1717,
            columnNumber: 13
          }, undefined)]
        }, `move${mi}`, true, {
          fileName: _jsxFileName,
          lineNumber: 1714,
          columnNumber: 11
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1712,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1710,
    columnNumber: 5
  }, undefined);
};

_c7 = ShowMoves;

const RackTile = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: props.tileclass,
    onClick: props.onClick,
    children: props.tilevalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1739,
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
        lineNumber: 1748,
        columnNumber: 44
      }, undefined), "\xA0Finish Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1748,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1747,
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
        lineNumber: 1756,
        columnNumber: 44
      }, undefined), "\xA0Recall Tiles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1756,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1755,
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
        lineNumber: 1764,
        columnNumber: 44
      }, undefined), "\xA0Swap Tiles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1764,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1763,
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
        lineNumber: 1772,
        columnNumber: 44
      }, undefined), "\xA0Pass Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1772,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1771,
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
        lineNumber: 1780,
        columnNumber: 50
      }, undefined), "\xA0Allow Undo Turn", props.alreadyAllowed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbActionButtonSevereText2",
        children: "Allow undo is now enabled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1783,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbActionButtonSevereText2",
        children: "Click to let opponent undo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1785,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1780,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1779,
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
        lineNumber: 1795,
        columnNumber: 50
      }, undefined), "\xA0Undo My Turn", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbActionButtonSevereText2",
        children: "Opponent has allowed undo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1797,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1795,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1794,
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
        lineNumber: 1810,
        columnNumber: 9
      }, undefined)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 1809,
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
        lineNumber: 1820,
        columnNumber: 67
      }, undefined), "\xA0PRISONERS\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "run_circle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1820,
        columnNumber: 132
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1820,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbTilerack",
      children: props.ptiles.map((t, ti) => renderTile(props.whoseturn === "P" && props.selection === ti ? t === "Q" && props.prisonersOrGuards === "P" ? "pbTileOnRack Selected P u" : "pbTileOnRack Selected P" : t === "Q" && props.prisonersOrGuards === "P" ? "pbTileOnRack Unselected P u" : "pbTileOnRack Unselected P", ti, props.prisonersOrGuards === "P" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1821,
      columnNumber: 7
    }, undefined), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? showActionButtons(props) : props.whoseturn === "G" && props.prisonersOrGuards === "P" && props.moves.length > 0 && props.allowRewind ? showActionButtonUndoLastPlay(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbRescuesMade",
      children: ["Rescues made: ", props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1842,
        columnNumber: 9
      }, undefined), renderFreedPrisoners(props.rescues)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1840,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1819,
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
        lineNumber: 1854,
        columnNumber: 38
      }, undefined), "\xA0GUARDS\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "security"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1854,
        columnNumber: 98
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1854,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbTilerack",
      children: props.gtiles.map((t, ti) => renderTile(props.whoseturn === "G" && props.selection === ti ? t === "Q" && props.prisonersOrGuards === "G" ? "pbTileOnRack Selected G u" : "pbTileOnRack Selected G" : t === "Q" && props.prisonersOrGuards === "G" ? "pbTileOnRack Unselected G u" : "pbTileOnRack Unselected G", ti, props.prisonersOrGuards === "G" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1855,
      columnNumber: 7
    }, undefined), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? showActionButtons(props) : props.whoseturn === "P" && props.prisonersOrGuards === "G" && props.moves.length > 0 && props.allowRewind ? showActionButtonUndoLastPlay(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1853,
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
      lineNumber: 1882,
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
      lineNumber: 1888,
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
        lineNumber: 1900,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1899,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
        onClick: () => props.onClickTileRecall()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1903,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1902,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
        onClick: () => props.onClickTileExchange()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1906,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1905,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
        onClick: () => props.onClickPassPlay()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1909,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1908,
      columnNumber: 5
    }, this), props.moves.length > 0 ? showActionButtonAllowUndo(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1898,
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
        lineNumber: 1921,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1920,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1919,
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
        lineNumber: 1928,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1927,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1926,
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
      lineNumber: 1968,
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
            lineNumber: 1973,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "pbChatMsg",
            children: value.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1974,
            columnNumber: 15
          }, undefined)]
        }, `ChatMessage${index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 1972,
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
              lineNumber: 1979,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1978,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1977,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1970,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1969,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1967,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImJvYXJkQ29sdW1uSGVhZGVycyIsImJvYXJkUm93SGVhZGVycyIsIm1vdmV3YWl0dGltZSIsImpva2VzIiwiaW5pdGlhbHRpbGVzNCIsImluaXRpYWx0aWxlczUiLCJpbml0aWFsdGlsZXM2IiwiaW5pdGlhbHRpbGVzNyIsInNxdWFyZXVudXNlZCIsInVzZWRieW5vb25lIiwibm9kaXJlY3Rpb24iLCJhdmFpbGFibGVBY3Rpb25Ob25lIiwiYXZhaWxhYmxlQWN0aW9uU3RhcnQiLCJhdmFpbGFibGVBY3Rpb25Kb2luIiwiYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0IiwiUHJpc29uQnJlYWsiLCJpc3Jlam9pbiIsInNldElzcmVqb2luIiwidXNlU3RhdGUiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJuaWNrbmFtZSIsInNldE5pY2tuYW1lIiwicHJpc29uZXJzT3JHdWFyZHMiLCJzZXRQcmlzb25lcnNPckd1YXJkcyIsIndzbWVzc2FnZSIsInNldFdzbWVzc2FnZSIsInJhY2tzaXplIiwic2V0UmFja3NpemUiLCJob3N0IiwiYWNjZXB0TWVzc2FnZSIsIm1lc3NhZ2UiLCJkYXRhIiwiY2xpZW50IiwiQ3VzdG9tU29ja2V0IiwidXNlRWZmZWN0IiwiY29ubmVjdCIsIkxvYmJ5IiwiZ2FtZWxpc3QiLCJzZXRHYW1lbGlzdCIsIm1zZyIsInByb2Nlc3NMb2JieU1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsInNlbmRlcmdhbWVpZCIsInNlbmRlcm5pY2tuYW1lIiwid3QiLCJ3aG9zZXR1cm4iLCJycyIsImxlbmd0aCIsImFueVVwZGF0ZXMiLCJzZW5kZXJQRyIsInNlbmRlciIsIm5ld0dhbWVsaXN0IiwiZ2kiLCJnZXRHYW1lbGlzdEluZGV4IiwibmV3UGxheWluZ1AiLCJwbGF5aW5nUCIsIm5ld1BsYXlpbmdHIiwicGxheWluZ0ciLCJuZXdSYWNrc2l6ZSIsIm5ld2dhbWVzdGF0dXMiLCJuZXdnYW1lZGF0YSIsIm5pY2tuYW1lUCIsIm5pY2tuYW1lRyIsImdhbWVzdGF0dXMiLCJvbGRnYW1lZGF0YSIsIndpbmRvdyIsImFsZXJ0IiwiZ2lkIiwiaSIsImlzUGxheWluZ1AiLCJhdmFpbGFibGVBY3Rpb25QIiwiZ2QiLCJhdmFpbGFibGVBY3Rpb25HIiwic2VsZWN0UmFja1NpemUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpbmRleCIsIlNxdWFyZSIsInByb3BzIiwiZWRnZSIsIm1pZGRsZSIsInRkY2xhc3MiLCJjIiwicmNkIiwicmkiLCJjaSIsInRkdmFsdWUiLCJpbmRleE9mIiwib25DbGljayIsInNxdWFyZXVzZWRieSIsIkJvYXJkIiwic3F1YXJlcyIsInVzZWRieSIsInJlbmRlclNxdWFyZSIsInJlbmRlclJvdyIsIl8kIiwiciIsIkdhbWUiLCJpbml0aWFsdGlsZXMiLCJpbml0aWFsc3F1YXJlcyIsIkFycmF5IiwiZmlsbCIsImluaXRpYWx1c2VkYnkiLCJ0aWxlcyIsInNldFRpbGVzIiwicHRpbGVzIiwic2V0UHRpbGVzIiwiZ3RpbGVzIiwic2V0R3RpbGVzIiwic2V0U3F1YXJlcyIsInNldFVzZWRieSIsInNlbGVjdGlvbiIsInNldFNlbGVjdGlvbiIsInNldFdob3NldHVybiIsImN1cnJlbnRjb29yZHMiLCJzZXRDdXJyZW50Y29vcmRzIiwicmVzY3VlcyIsInNldFJlc2N1ZXMiLCJzZXRSY2QiLCJwYXNzZWQiLCJzZXRQYXNzZWQiLCJtb3ZlcyIsInNldE1vdmVzIiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsImpva2VpbmRleCIsInNldEpva2VpbmRleCIsImFsbG93UmV3aW5kIiwic2V0QWxsb3dSZXdpbmQiLCJvcHBuYW1lIiwic2V0T3BwbmFtZSIsImNoYXRtc2dzIiwic2V0Q2hhdG1zZ3MiLCJuZXdqaSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwicmVxdWVzdEdhbWVEYXRhIiwiY2xlYXJJbnRlcnZhbCIsInRlbXBQVGlsZXMiLCJ0ZW1wR1RpbGVzIiwidGVtcFRpbGVzIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzcGxpY2UiLCJzb3J0Iiwic2VuZCIsInN0cmluZ2lmeSIsInR5cGUiLCJmdW5jIiwicHJvY2Vzc0dhbWVNZXNzYWdlIiwic2Nyb2xsVG9Cb3R0b20iLCJwdXRBdE1vdmVTdGFydCIsIm5ld0NoYXRtc2dzIiwiZnJvbSIsInNlbmRtc2ciLCJoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIiwibmV3U2VsZWN0aW9uIiwibmV3UmNkIiwibmV3U3F1YXJlcyIsIm5ld1VzZWRieSIsIm5ld1B0aWxlcyIsIm5ld0d0aWxlcyIsIm5ld1JvdyIsInNxdWFyZXZhbHVlIiwibmV3Q3VycmVudGNvb3JkcyIsImNvb3JkIiwiU3RyaW5nIiwiY2NpIiwibmV3VXNlZGJ5Um93IiwibmV3RGlyZWN0aW9uIiwiaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2siLCJ0aWxlaW5kZXgiLCJoYW5kbGVHdWFyZFRpbGVDbGljayIsImVuZFByaXNvbmVyc1R1cm4iLCJpc1BsYXlWYWxpZCIsInJld2luZEluZm8iLCJnZXRSZXdpbmRJbmZvIiwibmV3UmVzY3VlcyIsImVzY2FwZWhhdGNoZXMiLCJuZXdUaWxlcyIsIm5ld1dob3NldHVybiIsInBsYXlpbmZvIiwiZ2V0UGxheUluZm8iLCJuZXdNb3ZlIiwiYnkiLCJtYWlud29yZCIsImV4dHJhd29yZHMiLCJwb3MiLCJuZXdNb3ZlcyIsImVuZEd1YXJkc1R1cm4iLCJzbmFwc3F1YXJlcyIsInNuYXB1c2VkYnkiLCJzbmFwcHRpbGVzIiwic25hcGd0aWxlcyIsInN3YXBQcmlzb25lcnNUaWxlcyIsInN3YXBHdWFyZHNUaWxlcyIsIm51bXJvd3MiLCJudW1jb2xzIiwibG93cm93IiwiaGlnaHJvdyIsImxvd2NvbCIsImhpZ2hjb2wiLCJwbGF5dGhydSIsImhvb2ttYWRlIiwid29yZHN0YXJ0Y29vcmQiLCJudW1jb29yZHMiLCJyb3ciLCJwYXJzZUludCIsInNwbGl0IiwiY29sIiwibG93ZXN0cm93IiwiaGlnaGVzdHJvdyIsImxvd2VzdGNvbCIsImhpZ2hlc3Rjb2wiLCJleHRyYXdvcmQiLCJyYWNrIiwiYWxsb3dVbmRvTGFzdFR1cm4iLCJwZXJmb3JtUmV3aW5kIiwibnVtTW92ZXMiLCJsYXN0TW92ZSIsIm5ld1NuYXBzaG90IiwibmV3UGFzc2VkIiwicmVjYWxsVGlsZXMiLCJwcmlzb25lclBhc3MiLCJndWFyZHNQYXNzIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJrZXkiLCJsZXR0ZXJ0ZXN0IiwibWF0Y2giLCJsZXR0ZXIiLCJ0b1VwcGVyQ2FzZSIsImRpciIsIm5ld2MiLCJuZXdyIiwicmV0dXJuZWRUaWxlIiwidGkiLCJTaG93VW5zZWVuVGlsZXMiLCJ1bnNlZW5UaWxlcyIsIm90aGVydGlsZXMiLCJ0IiwiU2hvd01vdmVzIiwibSIsIm1pIiwicmVwbGFjZSIsInciLCJSYWNrVGlsZSIsInRpbGVjbGFzcyIsInRpbGV2YWx1ZSIsIkZpbmlzaFR1cm5CdXR0b24iLCJUaWxlUmVjYWxsQnV0dG9uIiwiVGlsZUV4Y2hhbmdlQnV0dG9uIiwiUGFzc1BsYXlCdXR0b24iLCJBbGxvd1VuZG9MYXN0UGxheSIsImFscmVhZHlBbGxvd2VkIiwiVW5kb0xhc3RQbGF5IiwiUHJpc29uZXJzIiwicmVuZGVyVGlsZSIsInJlbmRlclBsYXllclRpbGUiLCJyZW5kZXJGcmVlZFByaXNvbmVycyIsImNvdW50IiwiZHVtYiIsInNob3dBY3Rpb25CdXR0b25zIiwic2hvd0FjdGlvbkJ1dHRvblVuZG9MYXN0UGxheSIsIkd1YXJkcyIsIm9uQ2xpY2tGaW5pc2hUdXJuIiwib25DbGlja1RpbGVSZWNhbGwiLCJvbkNsaWNrVGlsZUV4Y2hhbmdlIiwib25DbGlja1Bhc3NQbGF5Iiwic2hvd0FjdGlvbkJ1dHRvbkFsbG93VW5kbyIsIm9uQ2xpY2tBbGxvd1VuZG8iLCJvbkNsaWNrVW5kb0xhc3RQbGF5IiwiQ2hhdCIsIm1zZ3MiLCJzZXRNc2dzIiwibmV4dG1zZyIsInNldE5leHRtc2ciLCJuZXdNc2dzIiwibmV3TmV4dG1zZyIsInNsaWNlIiwiZmlsdGVyIiwiZWxlbWVudGlkIiwidGhlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxrQkFBa0IsR0FBRyxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsRUFBeUIsR0FBekIsRUFBNkIsR0FBN0IsRUFBaUMsR0FBakMsRUFBcUMsR0FBckMsRUFBeUMsR0FBekMsRUFBNkMsR0FBN0MsRUFBaUQsR0FBakQsRUFBcUQsR0FBckQsRUFBeUQsR0FBekQsQ0FBM0I7QUFDQSxNQUFNQyxlQUFlLEdBQUcsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxHQUFiLEVBQWlCLEdBQWpCLEVBQXFCLEdBQXJCLEVBQXlCLEdBQXpCLEVBQTZCLEdBQTdCLEVBQWlDLEdBQWpDLEVBQXFDLElBQXJDLEVBQTBDLElBQTFDLEVBQStDLElBQS9DLEVBQW9ELElBQXBELEVBQXlELElBQXpELEVBQThELElBQTlELENBQXhCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLEtBQXJCLEMsQ0FBNEI7O0FBQzVCLE1BQU1DLEtBQUssR0FBRyxDQUNaLGdCQUFnQixvQkFBaEIsR0FBdUMsbUJBQXZDLEdBQTRELG9CQUE1RCxHQUFtRixHQUR2RSxFQUVaLCtEQUZZLEVBR1osNkRBSFksRUFJWixrRUFKWSxFQUtaLDZFQUxZLEVBTVosZ0VBTlksQ0FBZDtBQVFBLE1BQU1DLGFBQWEsR0FBRyxDQUNwQixHQURvQixFQUNkLEdBRGMsRUFDUixHQURRLEVBRXBCLEdBRm9CLEVBR3BCLEdBSG9CLEVBSXBCLEdBSm9CLEVB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cGFjay9wYWdlcy9wYi9wcmlzb25icmVhazIuN2RlY2Q4Yjk5ZGFiZjVkMjRjM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEN1c3RvbVNvY2tldCBmcm9tIFwiLi4vLi4vd3NcIjtcclxuY29uc3QgYm9hcmRDb2x1bW5IZWFkZXJzID0gWydBJywnQicsJ0MnLCdEJywnRScsJ0YnLCdHJywnSCcsJ0knLCdKJywnSycsJ0wnLCdNJywnTicsJ08nXTtcclxuY29uc3QgYm9hcmRSb3dIZWFkZXJzID0gWycxJywnMicsJzMnLCc0JywnNScsJzYnLCc3JywnOCcsJzknLCcxMCcsJzExJywnMTInLCcxMycsJzE0JywnMTUnXTtcclxuY29uc3QgbW92ZXdhaXR0aW1lID0gMjAwMDA7IC8vIHdoZW4gd2FpdGluZyBmb3Igb3Bwb25lbnQgcGluZyBldmVyeSB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzXHJcbmNvbnN0IGpva2VzID0gW1xyXG4gICdFc2NhcGVlOiBcIkknICsgXCInbSBmcmVlISBJJ20gZnJlZSFcIiArICdcIi4gTGl0dGxlIGtpZDogXCJJJysgXCInbSBmb3VyISBJJ20gZm91ciFcIiArICdcIicsXHJcbiAgJ1R3byBwZWFudXRzIHdlcmUgd2Fsa2luZyBkb3duIGEgYmFjayBhbGxleS4gT25lIHdhcyBhIHNhbHRlZC4nLFxyXG4gIFwiVGhlIHBzeWNoaWMgZHdhcmYgZXNjYXBlZCEgVGhlcmUncyBhIHNtYWxsIG1lZGl1bSBhdCBsYXJnZSFcIixcclxuICAnV2hhdCBkbyB5b3UgY2FsbCBhIHZlZ2V0YWJsZSB3aG8gaGFzIGVzY2FwZWQgcHJpc29uPyBBbiBlc2NhcGVhIScsXHJcbiAgXCJUaGUgcHJpc29uZXJzIGZhdmUgcHVuY3R1YXRpb24gaXMgYSBwZXJpb2QuIEl0IG1hcmtzIHRoZSBlbmQgb2YgYSBzZW50ZW5jZSFcIixcclxuICBcIlByaXNvbiBpcyBvbmx5IG9uZSB3b3JkLCBidXQgdG8gcm9iYmVycyBpdCdzIGEgd2hvbGUgc2VudGVuY2UuXCJcclxuXTtcclxuY29uc3QgaW5pdGlhbHRpbGVzNCA9IFtcclxuICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsXHJcbiAgXCJCXCIsXHJcbiAgXCJDXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJIXCIsXHJcbiAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gIFwiSlwiLFxyXG4gIFwiS1wiLFxyXG4gIFwiTFwiLFxyXG4gIFwiTVwiLFxyXG4gIFwiTlwiLCAgXCJOXCIsXHJcbiAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLFxyXG4gIFwiUFwiLFxyXG4gIFwiUVwiLFxyXG4gIFwiUlwiLCAgXCJSXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJUXCIsICBcIlRcIixcclxuICBcIlVcIixcclxuICBcIlZcIixcclxuICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIixcclxuICBcIlpcIixcclxuICBcIj9cIiwgIFwiP1wiLFxyXG5dOyAvLyBpbml0aWFsIHRpbGUgcG9vbCBmb3IgNCBsZXR0ZXIgcmFjayBtb2RlXHJcbmNvbnN0IGluaXRpYWx0aWxlczUgPSBbXHJcbiAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIixcclxuICBcIkJcIixcclxuICBcIkNcIixcclxuICBcIkRcIiwgIFwiRFwiLFxyXG4gIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIixcclxuICBcIkZcIixcclxuICBcIkdcIixcclxuICBcIkhcIixcclxuICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gIFwiSlwiLFxyXG4gIFwiS1wiLFxyXG4gIFwiTFwiLCAgXCJMXCIsXHJcbiAgXCJNXCIsXHJcbiAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLFxyXG4gIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLFxyXG4gIFwiUFwiLFxyXG4gIFwiUVwiLFxyXG4gIFwiUlwiLCAgXCJSXCIsICBcIlJcIixcclxuICBcIlNcIiwgIFwiU1wiLFxyXG4gIFwiVFwiLCAgXCJUXCIsICBcIlRcIixcclxuICBcIlVcIixcclxuICBcIlZcIixcclxuICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIixcclxuICBcIlpcIixcclxuICBcIj9cIiwgIFwiP1wiLFxyXG5dOyAvLyBpbml0aWFsIHRpbGUgcG9vbCBmb3IgNSBsZXR0ZXIgcmFjayBtb2RlXHJcbmNvbnN0IGluaXRpYWx0aWxlczYgPSBbXHJcbiAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsXHJcbiAgXCJCXCIsICBcIkJcIixcclxuICBcIkNcIiwgIFwiQ1wiLFxyXG4gIFwiRFwiLCAgXCJEXCIsICBcIkRcIixcclxuICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJHXCIsICBcIkdcIixcclxuICBcIkhcIiwgIFwiSFwiLFxyXG4gIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gIFwiSlwiLFxyXG4gIFwiS1wiLFxyXG4gIFwiTFwiLCAgXCJMXCIsICBcIkxcIixcclxuICBcIk1cIiwgIFwiTVwiLFxyXG4gIFwiTlwiLCAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLFxyXG4gIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICBcIlBcIiwgIFwiUFwiLFxyXG4gIFwiUVwiLFxyXG4gIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsXHJcbiAgXCJTXCIsICBcIlNcIiwgIFwiU1wiLFxyXG4gIFwiVFwiLCAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLFxyXG4gIFwiVVwiLCAgXCJVXCIsICBcIlVcIixcclxuICBcIlZcIixcclxuICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIixcclxuICBcIlpcIixcclxuICBcIj9cIiwgIFwiP1wiLFxyXG5dOyAvLyBpbml0aWFsIHRpbGUgcG9vbCBmb3IgNiBsZXR0ZXIgcmFjayBtb2RlXHJcbmNvbnN0IGluaXRpYWx0aWxlczcgPSBbXHJcbiAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLFxyXG4gIFwiQlwiLCAgXCJCXCIsXHJcbiAgXCJDXCIsICBcIkNcIixcclxuICBcIkRcIiwgIFwiRFwiLCAgXCJEXCIsICBcIkRcIixcclxuICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsXHJcbiAgXCJGXCIsICBcIkZcIixcclxuICBcIkdcIiwgIFwiR1wiLCAgXCJHXCIsXHJcbiAgXCJIXCIsICBcIkhcIixcclxuICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsXHJcbiAgXCJKXCIsXHJcbiAgXCJLXCIsXHJcbiAgXCJMXCIsICBcIkxcIiwgIFwiTFwiLCAgXCJMXCIsXHJcbiAgXCJNXCIsICBcIk1cIixcclxuICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsXHJcbiAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICBcIlBcIiwgIFwiUFwiLFxyXG4gIFwiUVwiLFxyXG4gIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIixcclxuICBcIlNcIiwgIFwiU1wiLCAgXCJTXCIsICBcIlNcIixcclxuICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsXHJcbiAgXCJVXCIsICBcIlVcIiwgIFwiVVwiLCAgXCJVXCIsXHJcbiAgXCJWXCIsICBcIlZcIixcclxuICBcIldcIiwgIFwiV1wiLFxyXG4gIFwiWFwiLFxyXG4gIFwiWVwiLCAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDcgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBzcXVhcmV1bnVzZWQgPSBcIi5cIjtcclxuY29uc3QgdXNlZGJ5bm9vbmUgPSBcIlwiO1xyXG5jb25zdCBub2RpcmVjdGlvbiA9IFwiXCI7XHJcbmNvbnN0IGF2YWlsYWJsZUFjdGlvbk5vbmUgPSAwO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25TdGFydCA9IDE7XHJcbmNvbnN0IGF2YWlsYWJsZUFjdGlvbkpvaW4gPSAyO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3QgPSAzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpc29uQnJlYWsoKSB7XHJcbiAgY29uc3QgW2lzcmVqb2luLCBzZXRJc3Jlam9pbl0gPSB1c2VTdGF0ZShmYWxzZSkgLy8gVXNlZCB3aGVuIHBsYXllciBsb3NlcyBjb25uZWN0aW9uIGFuZCByZWpvaW5zXHJcbiAgY29uc3QgW2dhbWVpZCwgc2V0R2FtZWlkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtuaWNrbmFtZSwgc2V0Tmlja25hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3ByaXNvbmVyc09yR3VhcmRzLCBzZXRQcmlzb25lcnNPckd1YXJkc10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbd3NtZXNzYWdlLCBzZXRXc21lc3NhZ2VdID0gdXNlU3RhdGUoJycpIC8vIExhdGVzdCBtZXNzYWdlcyBmcm9tIHRoZSB3ZWJzb2NrZXRcclxuICBjb25zdCBbcmFja3NpemUsIHNldFJhY2tzaXplXSA9IHVzZVN0YXRlKDQpOyAvLyBEZWZhdWx0IHRvIDQgbGV0dGVyIHJhY2tzXHJcbiAgbGV0IGhvc3QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ3dzczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbScgOiAnd3M6Ly9sb2NhbGhvc3Q6NTAwMCc7XHJcbiAgY29uc3QgYWNjZXB0TWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAvLyBSZWFjdCBpcyBoYXJkIHRvIHVuZGVyc3RhbmQuIElmIEkgcmVmZXJlbmNlIHByaXNvbmVyc09yR3VhcmRzIGhlcmUgaXQgd2lsbCBhbHdheXMgYmUgdGhlIGluaXRpYWwgdmFsdWUuXHJcbiAgICBzZXRXc21lc3NhZ2UobWVzc2FnZS5kYXRhKVxyXG4gIH1cclxuICBjb25zdCBbY2xpZW50XSA9IHVzZVN0YXRlKG5ldyBDdXN0b21Tb2NrZXQoaG9zdCwgYWNjZXB0TWVzc2FnZSkpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiAoXHJcbiAgICBjbGllbnQuY29ubmVjdCgpXHJcbiAgKSxbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIHByaXNvbmVyc09yR3VhcmRzID09PSAnJyA/XHJcbiAgICAgIDxMb2JieVxyXG4gICAgICAgIHNldElzcmVqb2luPXtzZXRJc3Jlam9pbn1cclxuICAgICAgICB3c21lc3NhZ2U9e3dzbWVzc2FnZX1cclxuICAgICAgICAvLyBjbGllbnQ9e2NsaWVudH1cclxuICAgICAgICBnYW1laWQ9e2dhbWVpZH1cclxuICAgICAgICBzZXRHYW1laWQ9e3NldEdhbWVpZH1cclxuICAgICAgICBuaWNrbmFtZT17bmlja25hbWV9XHJcbiAgICAgICAgc2V0Tmlja25hbWU9e3NldE5pY2tuYW1lfVxyXG4gICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzPXtzZXRQcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICByYWNrc2l6ZT17cmFja3NpemV9XHJcbiAgICAgICAgc2V0UmFja3NpemU9e3NldFJhY2tzaXplfVxyXG4gICAgICAvPlxyXG4gICAgOlxyXG4gICAgICA8R2FtZVxyXG4gICAgICAgIGlzcmVqb2luPXtpc3Jlam9pbn1cclxuICAgICAgICBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgZ2FtZWlkPXtnYW1laWR9XHJcbiAgICAgICAgbmlja25hbWU9e25pY2tuYW1lfVxyXG4gICAgICAgIHdzbWVzc2FnZT17d3NtZXNzYWdlfVxyXG4gICAgICAgIGNsaWVudD17Y2xpZW50fVxyXG4gICAgICAgIHJhY2tzaXplPXtyYWNrc2l6ZX1cclxuICAgICAgLz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IExvYmJ5ID0gKHtzZXRJc3Jlam9pbiwgd3NtZXNzYWdlLCBnYW1laWQsIHNldEdhbWVpZCwgbmlja25hbWUsIHNldE5pY2tuYW1lLCBzZXRQcmlzb25lcnNPckd1YXJkc1xyXG4gICwgcmFja3NpemUsIHNldFJhY2tzaXplIC8vIE9wdGlvbiBmb3IgcmFjayBzaXplXHJcbiAgfSkgPT4ge1xyXG4gIGNvbnN0IFtnYW1lbGlzdCwgc2V0R2FtZWxpc3RdID0gdXNlU3RhdGUoW10pIC8vIEdhbWUgaW5mbyBieSBnYW1lIGlkXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NMb2JieU1lc3NhZ2UobXNnKTtcclxuICB9LFt3c21lc3NhZ2VdKVxyXG5cclxuICBmdW5jdGlvbiBwcm9jZXNzTG9iYnlNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgIGxldCBzZW5kZXJnYW1laWQgPSBtZXNzYWdlRGF0YS5nYW1laWQ7XHJcbiAgICAgIGxldCBzZW5kZXJuaWNrbmFtZSA9IG1lc3NhZ2VEYXRhLm5pY2tuYW1lO1xyXG4gICAgICBsZXQgd3QgPSBtZXNzYWdlRGF0YS53aG9zZXR1cm47XHJcbiAgICAgIGxldCBycyA9IG1lc3NhZ2VEYXRhLnJhY2tzaXplO1xyXG4gICAgICBpZiAoc2VuZGVyZ2FtZWlkICYmIHNlbmRlcmdhbWVpZC5sZW5ndGggPiAwICYmIHJzICYmIHd0ICYmIHd0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgYW55VXBkYXRlcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBzZW5kZXJQRyA9IG1lc3NhZ2VEYXRhLnNlbmRlcjtcclxuICAgICAgICBsZXQgbmV3R2FtZWxpc3QgPSBbLi4uZ2FtZWxpc3RdO1xyXG4gICAgICAgIGxldCBnaSA9IGdldEdhbWVsaXN0SW5kZXgoc2VuZGVyZ2FtZWlkKTtcclxuICAgICAgICBsZXQgbmV3UGxheWluZ1AgPSBzZW5kZXJQRyA9PT0gXCJQXCIgPyB0cnVlIDogZ2kgPiAtMSA/IGdhbWVsaXN0W2dpXS5wbGF5aW5nUCA6IGZhbHNlO1xyXG4gICAgICAgIGxldCBuZXdQbGF5aW5nRyA9IHNlbmRlclBHID09PSBcIkdcIiA/IHRydWUgOiBnaSA+IC0xID8gZ2FtZWxpc3RbZ2ldLnBsYXlpbmdHIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IG5ld1JhY2tzaXplID0gcnM7XHJcblxyXG4gICAgICAgIGxldCBuZXdnYW1lc3RhdHVzID0gXCJVbmtub3duXCI7XHJcbiAgICAgICAgaWYgKHd0ID09PSBcIlhcIikge1xyXG4gICAgICAgICAgbmV3Z2FtZXN0YXR1cyA9IFwiR2FtZSBvdmVyXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh3dCA9PT0gXCJQXCIpIHtcclxuICAgICAgICAgIG5ld2dhbWVzdGF0dXMgPSBcIlByaXNvbmVycyB0dXJuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh3dCA9PT0gXCJHXCIpIHtcclxuICAgICAgICAgIG5ld2dhbWVzdGF0dXMgPSBcIkd1YXJkcyB0dXJuXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbmV3Z2FtZWRhdGEgPSB7XHJcbiAgICAgICAgICBnYW1laWQ6IHNlbmRlcmdhbWVpZCxcclxuICAgICAgICAgIG5pY2tuYW1lUDogc2VuZGVyUEcgPT09IFwiUFwiID8gc2VuZGVybmlja25hbWUgOiBnaSA+IC0xID8gZ2FtZWxpc3RbZ2ldLm5pY2tuYW1lUCA6IFwiXCIsXHJcbiAgICAgICAgICBuaWNrbmFtZUc6IHNlbmRlclBHID09PSBcIkdcIiA/IHNlbmRlcm5pY2tuYW1lIDogZ2kgPiAtMSA/IGdhbWVsaXN0W2dpXS5uaWNrbmFtZUcgOiBcIlwiLFxyXG4gICAgICAgICAgZ2FtZXN0YXR1czogbmV3Z2FtZXN0YXR1cyxcclxuICAgICAgICAgIHBsYXlpbmdQOiBuZXdQbGF5aW5nUCxcclxuICAgICAgICAgIHBsYXlpbmdHOiBuZXdQbGF5aW5nRyxcclxuICAgICAgICAgIHJhY2tzaXplOiBuZXdSYWNrc2l6ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2kgPCAwKSB7IC8vIEdhbWUgbm90IGluIGxpc3QgeWV0LCBwdXQgaXQgaW4gdGhlIGxpc3RcclxuICAgICAgICAgIGFueVVwZGF0ZXMgPSB0cnVlO1xyXG4gICAgICAgICAgbmV3R2FtZWxpc3QgPSBbLi4ubmV3R2FtZWxpc3QsIG5ld2dhbWVkYXRhXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7IC8vIEdhbWUgaXMgaW4gdGhlIGxpc3QsIGNoZWNrIGZvciBuZWVkZWQgdXBkYXRlc1xyXG4gICAgICAgICAgbGV0IG9sZGdhbWVkYXRhID0gZ2FtZWxpc3RbZ2ldO1xyXG4gICAgICAgICAgaWYgKG9sZGdhbWVkYXRhLm5pY2tuYW1lUCAhPT0gbmV3Z2FtZWRhdGEubmlja25hbWVQIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEubmlja25hbWVHICE9PSBuZXdnYW1lZGF0YS5uaWNrbmFtZUcgfHxcclxuICAgICAgICAgICAgICBvbGRnYW1lZGF0YS5nYW1lc3RhdHVzICE9PSBuZXdnYW1lZGF0YS5nYW1lc3RhdHVzIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEucGxheWluZ1AgIT09IG5ld2dhbWVkYXRhLnBsYXlpbmdQIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEucGxheWluZ0cgIT09IG5ld2dhbWVkYXRhLnBsYXlpbmdHIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEucmFja3NpemUgIT09IG5ld2dhbWVkYXRhLnJhY2tzaXplXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGFueVVwZGF0ZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIG5ld0dhbWVsaXN0W2dpXSA9IG5ld2dhbWVkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbnlVcGRhdGVzKSB7XHJcbiAgICAgICAgICBzZXRHYW1lbGlzdChuZXdHYW1lbGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9ICBcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJFcnJvciBwcm9jZXNzaW5nIGxvYmJ5IG1lc3NhZ2VcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGdldEdhbWVsaXN0SW5kZXgoZ2lkKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdhbWVsaXN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIGlmIChnYW1lbGlzdFtpXS5nYW1laWQgPT09IGdpZCkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGlzUGxheWluZ1AoZ2lkKSB7XHJcbiAgICBsZXQgZ2kgPSBnZXRHYW1lbGlzdEluZGV4KGdpZCk7XHJcbiAgICByZXR1cm4gZ2kgPCAwID8gZmFsc2UgOiBnYW1lbGlzdFtnaV0ucGxheWluZ1A7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGF2YWlsYWJsZUFjdGlvblAoZ2QpIHtcclxuICAgIGlmIChuaWNrbmFtZS5sZW5ndGggPT09IDAgfHwgZ2QuZ2FtZXN0YXR1cyA9PT0gXCJHYW1lIG92ZXJcIikgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uTm9uZTsgfVxyXG4gICAgaWYgKCFnZC5wbGF5aW5nUCkgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uU3RhcnQ7IH1cclxuICAgIGlmIChnZC5uaWNrbmFtZVAgPT09IG5pY2tuYW1lKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3Q7IH1cclxuICAgIHJldHVybiBhdmFpbGFibGVBY3Rpb25Ob25lO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhdmFpbGFibGVBY3Rpb25HKGdkKSB7XHJcbiAgICBpZiAobmlja25hbWUubGVuZ3RoID09PSAwIHx8IGdkLmdhbWVzdGF0dXMgPT09IFwiR2FtZSBvdmVyXCIpIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbk5vbmU7IH1cclxuICAgIGlmICghZ2QucGxheWluZ0cpIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbkpvaW47IH1cclxuICAgIGlmIChnZC5uaWNrbmFtZUcgPT09IG5pY2tuYW1lKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3Q7IH1cclxuICAgIHJldHVybiBhdmFpbGFibGVBY3Rpb25Ob25lO1xyXG4gIH1cclxuICBmdW5jdGlvbiBzZWxlY3RSYWNrU2l6ZShuZXdSYWNrc2l6ZSkge1xyXG4gICAgc2V0UmFja3NpemUobmV3UmFja3NpemUpO1xyXG4gIH1cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIHBidGl0bGVcIj5cclxuICAgICAgICBQcmlzb24gQnJlYWsgTG9iYnlcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJ1bl9jaXJjbGU8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yIHBiaG9tZWxpbmtcIj5cclxuICAgICAgICA8TGluayBocmVmPXtcIi4uLy4uL1wifT5cclxuICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT48L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcGJMb2JieUNvbW1vbkluZm9TZWN0aW9uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInBiTG9iYnlOaWNrbmFtZVByb21wdFwiPk5pY2tuYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicGJMb2JieU5pY2tuYW1lSW5wdXRcIlxyXG4gICAgICAgICAgbmFtZT1cIm5pY2tuYW1lXCJcclxuICAgICAgICAgIHZhbHVlPXtuaWNrbmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXROaWNrbmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9IH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBiTG9iYnlQcmlzb25lclNlY3Rpb25cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+UFJJU09ORVJTPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiTG9iYnlHYW1lSWRQcm9tcHRcIj5HYW1lIElEPC9zcGFuPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJwYkxvYmJ5R2FtZUlkSW5wdXRcIlxyXG4gICAgICAgICAgbmFtZT1cImdhbWVpZFwiXHJcbiAgICAgICAgICB2YWx1ZT17Z2FtZWlkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEdhbWVpZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9IH0gLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkxvYmJ5UmFja1NpemVQcm9tcHRcIj48L3NwYW4+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdHJhY2tzaXplNFwiIGNsYXNzTmFtZT17cmFja3NpemUgPT09IDQgPyBcInBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkXCIgOiBcInBiTG9iYnlSYWNrU2l6ZVwifVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UmFja1NpemUoNCl9XHJcbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjQgbGV0dGVyIHJhY2tzLCA5IHggOSBib2FyZFwiXHJcbiAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICA+XHJcbiAgICAgICAgICA0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdHJhY2tzaXplNVwiIGNsYXNzTmFtZT17cmFja3NpemUgPT09IDUgPyBcInBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkXCIgOiBcInBiTG9iYnlSYWNrU2l6ZVwifVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UmFja1NpemUoNSl9XHJcbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjUgbGV0dGVyIHJhY2tzLCAxMSB4IDExIGJvYXJkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA1XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdHJhY2tzaXplNlwiIGNsYXNzTmFtZT17cmFja3NpemUgPT09IDYgPyBcInBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkXCIgOiBcInBiTG9iYnlSYWNrU2l6ZVwifVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UmFja1NpemUoNil9XHJcbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjYgbGV0dGVyIHJhY2tzLCAxMyB4IDEzIGJvYXJkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA2XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdHJhY2tzaXplN1wiIGNsYXNzTmFtZT17cmFja3NpemUgPT09IDcgPyBcInBiTG9iYnlSYWNrU2l6ZVNlbGVjdGVkXCIgOiBcInBiTG9iYnlSYWNrU2l6ZVwifVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UmFja1NpemUoNyl9XHJcbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjcgbGV0dGVyIHJhY2tzLCAxNSB4IDE1IGJvYXJkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA3XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJMb2JieUNlbGxCbG9ja0luZm9cIj57cmFja3NpemV9IGxldHRlciByYWNrcywge3JhY2tzaXplKjIrMX0geCB7cmFja3NpemUqMisxfSBib2FyZC48L3NwYW4+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cInN0YXJ0Z2FtZVwiIGNsYXNzTmFtZT1cInBiTG9iYnlBY3Rpb25CdXR0b25cIlxyXG4gICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobmlja25hbWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiUGxlYXNlIGVudGVyIG5pY2tuYW1lIGJlZm9yZSBzdGFydGluZyBhIGdhbWVcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZWlkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICBpZiAoaXNQbGF5aW5nUChnYW1laWQpKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJQcmlzb25lcnMgYWxyZWFkeSBwbGF5aW5nIHRoYXQgZ2FtZVwiKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ1AnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiUGxlYXNlIGVudGVyIEdhbWUgSUQgYmVmb3JlIHN0YXJ0aW5nIGEgZ2FtZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU3RhcnQgR2FtZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcGJMb2JieUd1YXJkU2VjdGlvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj5HVUFSRFM8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwicGJMb2JieUd1YXJkSW5mb1wiPkZpbmQgYW5kIGNsaWNrIHRoZSBcIkpvaW4gR2FtZVwiIGJ1dHRvbiBmb3IgeW91ciBnYW1lLjwvc3Bhbj5cclxuICAgICAgICA8cD5JZiB5b3UgbG9zdCBjb25uZWN0aW9uLCBmaW5kIGFuZCBjbGljayB0aGUgXCJSZWNvbm5lY3RcIiBidXR0b24gZm9yIHlvdXIgZ2FtZSBpZC48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBvZmZzZXQtMVwiPlxyXG4gICAgICAgIDxoMj5HYW1lIGxpc3Q6PC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBiTG9iYnlHYW1lTGlzdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBvZmZzZXQtMVwiPlxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInBiTG9iYnlHYW1lc0hlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwYkxvYmJ5R2FtZXNIZWFkZXJDb2xcIj5HYW1lIElEPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicGJMb2JieUdhbWVzSGVhZGVyQ29sXCIgY29sU3Bhbj1cIjJcIj5Qcmlzb25lcnM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwYkxvYmJ5R2FtZXNIZWFkZXJDb2xcIiBjb2xTcGFuPVwiMlwiPkd1YXJkczwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInBiTG9iYnlHYW1lc0hlYWRlckNvbFwiPkNlbGwgQmxvY2s8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwYkxvYmJ5R2FtZXNIZWFkZXJDb2xcIj5HYW1lIFN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7Z2FtZWxpc3QubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8dHIga2V5PXtgT3RoZXJHYW1lJHtpbmRleH1gfSBjbGFzc05hbWU9XCJwYkdhbWVzSW5Qcm9ncmVzc1Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiTG9iYnlHYW1laWRcIj57dmFsdWUuZ2FtZWlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJMb2JieVBsYXllckluZGljYXRvclwiPjxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e3ZhbHVlLnBsYXlpbmdQID8gXCJjaGVja19jaXJjbGVcIiA6IFwiY2FuY2VsXCJ9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICB7YXZhaWxhYmxlQWN0aW9uUCh2YWx1ZSkgPT09IGF2YWlsYWJsZUFjdGlvbk5vbmUgP1xyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJMb2JieUFjdGlvbk5vbmVcIj5ObyBhY3Rpb24gYXZhaWxhYmxlPC90ZD5cclxuICAgICAgICAgICAgICAgIDogYXZhaWxhYmxlQWN0aW9uUCh2YWx1ZSkgPT09IGF2YWlsYWJsZUFjdGlvblJlY29ubmVjdCA/XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFByaXNvbmVyc1Jlam9pbiR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkxvYmJ5QWN0aW9uQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNyZWpvaW4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnUCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSYWNrc2l6ZSh2YWx1ZS5yYWNrc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSZWNvbm5lY3RcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BQcmlzb25lcnNTdGFydCR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkxvYmJ5QWN0aW9uQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdQJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTdGFydCBHYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJMb2JieVBsYXllckluZGljYXRvclwiPjxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e3ZhbHVlLnBsYXlpbmdHID8gXCJjaGVja19jaXJjbGVcIiA6IFwiY2FuY2VsXCJ9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICB7YXZhaWxhYmxlQWN0aW9uRyh2YWx1ZSkgPT09IGF2YWlsYWJsZUFjdGlvbk5vbmUgP1xyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJMb2JieUFjdGlvbk5vbmVcIj5ObyBhY3Rpb24gYXZhaWxhYmxlPC90ZD5cclxuICAgICAgICAgICAgICAgIDogYXZhaWxhYmxlQWN0aW9uRyh2YWx1ZSkgPT09IGF2YWlsYWJsZUFjdGlvblJlY29ubmVjdCA/XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YEd1YXJkc1Jlam9pbiR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkxvYmJ5QWN0aW9uQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNyZWpvaW4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZCh2YWx1ZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnRycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSYWNrc2l6ZSh2YWx1ZS5yYWNrc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSZWNvbm5lY3RcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHdWFyZHNKb2luJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiTG9iYnlBY3Rpb25CdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ0cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmFja3NpemUodmFsdWUucmFja3NpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSm9pbiBHYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJMb2JieUdhbWVSYWNrc2l6ZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7dmFsdWUucmFja3NpemV9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiTG9iYnlHYW1lU3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt2YWx1ZS5nYW1lc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj47XHJcbn1cclxuXHJcbmNvbnN0IFNxdWFyZSA9IChwcm9wcykgPT4ge1xyXG4gIC8vIHNxdWFyZXVzZWRieSwgcmksIGNpLCBjLCBvbkNsaWNrXHJcbiAgLy8gbmVlZCBzcXVhcmV1c2VkYnkgdG8gcGljayBjc3MgY2xhc3NOYW1lIGNvcnJlc3BvbmRpbmcgdG8gd2hvIHBsYXllZCB0aGUgdGlsZSBvbiB0aGUgc3F1YXJlXHJcbiAgLy8gbmVlZCByaSwgY2kgdG8gZGlzcGxheSBhbHRlcm5hdGluZyBiYWNrZ3JvdW5kcyBvbiB1bnVzZWQgc3F1YXJlc1xyXG4gIC8vIG5lZWQgYyB0byByZXByZXNlbnQgd2hpY2ggdGlsZSBpcyBvbiB0aGUgc3F1YXJlLCBpZiBhbnlcclxuICAvLyBuZWVkIG9uQ2xpY2sgdG8gaGFuZGxlIHNxdWFyZSBjbGljayBhdCBhIGhpZ2hlciBsZXZlbFxyXG4gIC8vIG5lZWQgcmNkIHRvIGRpc3BsYXkgc2VsZWN0ZWQgZGlyZWN0aW9uIGFycm93IHdoZW4gYXBwcm9wcmlhdGVcclxuICAvLyBuZWVkIHJhY2tzaXplIHRvIGRldGVybWluZSBjZW50cmUgYW5kIGJvYXJkIGFhcnJ5IGVkZ2UgcG9zaXRpb25zXHJcbiAgY29uc3QgZWRnZSA9IChwcm9wcy5yYWNrc2l6ZSAqIDIpO1xyXG4gIGNvbnN0IG1pZGRsZSA9IHByb3BzLnJhY2tzaXplO1xyXG4gIGNvbnN0IHRkY2xhc3MgPVxyXG4gICAgcHJvcHMuYyAhPT0gc3F1YXJldW51c2VkXHJcbiAgICAgID8gXCJwYlNxdWFyZUlubmVyIFBsYXllclRpbGVcIlxyXG4gICAgICA6IHByb3BzLnJjZFswXSA9PT0gcHJvcHMucmkgJiYgcHJvcHMucmNkWzFdID09PSBwcm9wcy5jaSAmJiBwcm9wcy5yY2RbMl0gPT09IFwiclwiXHJcbiAgICAgID8gXCJwYlNxdWFyZUlubmVyIFJpZ2h0QXJyb3dcIlxyXG4gICAgICA6IHByb3BzLnJjZFswXSA9PT0gcHJvcHMucmkgJiYgcHJvcHMucmNkWzFdID09PSBwcm9wcy5jaSAmJiBwcm9wcy5yY2RbMl0gPT09IFwiZFwiXHJcbiAgICAgID8gXCJwYlNxdWFyZUlubmVyIERvd25BcnJvd1wiXHJcbiAgICAgIDogcHJvcHMucmkgPT09IG1pZGRsZSAmJiBwcm9wcy5jaSA9PT0gbWlkZGxlXHJcbiAgICAgID8gXCJwYlNxdWFyZUlubmVyIENlbnRlclNxdWFyZVwiXHJcbiAgICAgIDogKHByb3BzLnJpID09PSAwIHx8IHByb3BzLnJpID09PSBtaWRkbGUgfHwgcHJvcHMucmkgPT09IGVkZ2UpICYmXHJcbiAgICAgICAgKHByb3BzLmNpID09PSAwIHx8IHByb3BzLmNpID09PSBtaWRkbGUgfHwgcHJvcHMuY2kgPT09IGVkZ2UpXHJcbiAgICAgID8gXCJwYlNxdWFyZUlubmVyIEVzY2FwZUhhdGNoXCJcclxuICAgICAgOiBwcm9wcy5yaSAlIDIgPT09IHByb3BzLmNpICUgMlxyXG4gICAgICA/IFwicGJTcXVhcmVJbm5lciBzdHlsZTFcIiA6IFwicGJTcXVhcmVJbm5lciBzdHlsZTJcIjsgLy8gQWx0ZXJuYXRpbmcgc3F1YXJlIHN0eWxlc1xyXG4gIGNvbnN0IHRkdmFsdWUgPVxyXG4gICAgcHJvcHMuYyAhPT0gc3F1YXJldW51c2VkXHJcbiAgICAgID8gcHJvcHMuY1xyXG4gICAgICA6IHRkY2xhc3MuaW5kZXhPZihcIlJpZ2h0QXJyb3dcIikgPiAtMVxyXG4gICAgICA/IFwi4p6hXCJcclxuICAgICAgOiB0ZGNsYXNzLmluZGV4T2YoXCJEb3duQXJyb3dcIikgPiAtMVxyXG4gICAgICA/IFwi4qyHXCJcclxuICAgICAgOiB0ZGNsYXNzLmluZGV4T2YoXCJDZW50ZXJTcXVhcmVcIikgPiAtMVxyXG4gICAgICA/IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c3RhcnM8L2k+XHJcbiAgICAgIDogXCIuXCIgLyogSWYgSSBwdXQgZW1wdHkgc3RyaW5nIG9yICZuYnNwOyB0aGVuIGl0IGFmZmVjdHMgdGhlIGRpc3BsYXkgb2RkbHkgICovXHJcbiAgcmV0dXJuIChcclxuICAgIHRkY2xhc3MuaW5kZXhPZihcIkVzY2FwZUhhdGNoXCIpID4gLTEgP1xyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RkY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJ1bl9jaXJjbGU8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDogcHJvcHMuYyA9PT0gc3F1YXJldW51c2VkID9cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RkY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgIHt0ZHZhbHVlfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgOlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGRjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwYlNxdWFyZVRpbGVUZXh0ICR7cHJvcHMuc3F1YXJldXNlZGJ5ICsgKHByb3BzLmMgPT09IFwiUVwiID8gXCIgdVwiIDogXCJcIil9YH0+e3RkdmFsdWV9PC9kaXY+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4pO1xyXG59O1xyXG5cclxuY29uc3QgQm9hcmQgPSAoeyBvbkNsaWNrLCBzcXVhcmVzLCB1c2VkYnksIHJjZCwgcmFja3NpemUgfSkgPT4ge1xyXG4gIGNvbnN0IHJlbmRlclNxdWFyZSA9IChyaSwgY2ksIGMsIHNxdWFyZXVzZWRieSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRkIGtleT17YFNxdWFyZSR7cml9LSR7Y2l9YH0gY2xhc3NOYW1lPVwicGJTcXVhcmVPdXRlclwiPlxyXG4gICAgICAgIDxTcXVhcmVcclxuICAgICAgICAgIGM9e2N9XHJcbiAgICAgICAgICBjaT17Y2l9XHJcbiAgICAgICAgICByaT17cml9XHJcbiAgICAgICAgICBzcXVhcmV1c2VkYnk9e3NxdWFyZXVzZWRieX1cclxuICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhyaSwgY2kpfVxyXG4gICAgICAgICAgcmFja3NpemU9e3JhY2tzaXplfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyUm93ID0gKHJpKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dHIga2V5PXtgQm9hcmRSb3cke3JpfWB9IGNsYXNzTmFtZT1cInBiUm93XCI+XHJcbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQm9hcmRSb3dIZWFkZXJcIiBpZD1cIkJvYXJkSGVhZGVyTGVmdFwiPlxyXG4gICAgICAgICAge2JvYXJkUm93SGVhZGVyc1tyaV19XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICB7c3F1YXJlc1tyaV0ubWFwKChjLCBjaSkgPT4gcmVuZGVyU3F1YXJlKHJpLCBjaSwgYywgdXNlZGJ5W3JpXVtjaV0pKX1cclxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJCb2FyZFJvd0hlYWRlclwiIGlkPVwiQm9hcmRIZWFkZXJSaWdodFwiPlxyXG4gICAgICAgICAge2JvYXJkUm93SGVhZGVyc1tyaV19XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYkJvYXJkXCI+XHJcbiAgICAgIDx0Ym9keT5cclxuICAgICAgICA8dHIgY2xhc3NOYW1lPVwicGJCb2FyZENvbHVtbkhlYWRlclJvd1wiPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQm9hcmRIZWFkZXJUb3BMZWZ0XCI+Jm5ic3A7PC90ZD5cclxuICAgICAgICAgIHtzcXVhcmVzLm1hcCgoXyQsaSkgPT4gKFxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJCb2FyZENvbHVtbkhlYWRlclwiIGtleT17YFRvcENvbHVtbkhlYWRlciR7aX1gfT5cclxuICAgICAgICAgICAgICB7Ym9hcmRDb2x1bW5IZWFkZXJzW2ldfVxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJCb2FyZEhlYWRlclRvcFJpZ2h0XCI+Jm5ic3A7PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIHtzcXVhcmVzLm1hcCgociwgcmkpID0+IHJlbmRlclJvdyhyaSkpfVxyXG4gICAgICAgIDx0ciBjbGFzc05hbWU9XCJwYkJvYXJkQ29sdW1uSGVhZGVyUm93XCIgaWQ9XCJCb2FyZEhlYWRlckJvdHRvbVwiPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQm9hcmRIZWFkZXJCb3R0b21MZWZ0XCI+Jm5ic3A7PC90ZD5cclxuICAgICAgICAgIHtzcXVhcmVzLm1hcCgoXyQsaSkgPT4gKFxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJCb2FyZENvbHVtbkhlYWRlclwiIGtleT17YEJvdHRvbUNvbHVtbkhlYWRlciR7aX1gfT5cclxuICAgICAgICAgICAgICB7Ym9hcmRDb2x1bW5IZWFkZXJzW2ldfVxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJCb2FyZEhlYWRlckJvdHRvbVJpZ2h0XCI+Jm5ic3A7PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgR2FtZSA9ICh7aXNyZWpvaW4sIHByaXNvbmVyc09yR3VhcmRzLCBnYW1laWQsIG5pY2tuYW1lLCB3c21lc3NhZ2UsIGNsaWVudFxyXG4gICwgcmFja3NpemUgLy8gT3B0aW9uIGZvciByYWNrIHNpemVcclxuICB9KSA9PiB7XHJcbiAgY29uc3QgbWlkZGxlID0gcmFja3NpemU7IC8vIE1pZGRsZSBlbGVtZW50IGluIHJvdyBvciBjb2x1bW4gYXJyYXlcclxuICBjb25zdCBlZGdlID0gcmFja3NpemUgKiAyOyAvLyBMYXN0IGVsZW1lbnQgaW4gcm93IG9yIGNvbHVtbiBhcnJheVxyXG4gIGNvbnN0IGluaXRpYWx0aWxlcyA9IHJhY2tzaXplID09PSA2ID8gaW5pdGlhbHRpbGVzNiA6IHJhY2tzaXplID09PSA3ID8gaW5pdGlhbHRpbGVzNyA6IHJhY2tzaXplID09PSA1ID8gaW5pdGlhbHRpbGVzNSA6IGluaXRpYWx0aWxlczQ7XHJcbiAgY29uc3QgaW5pdGlhbHNxdWFyZXMgPSBBcnJheShlZGdlKzEpLmZpbGwoQXJyYXkoZWRnZSsxKS5maWxsKHNxdWFyZXVudXNlZCkpO1xyXG4gIGNvbnN0IGluaXRpYWx1c2VkYnkgPSBBcnJheShlZGdlKzEpLmZpbGwoQXJyYXkoZWRnZSsxKS5maWxsKHVzZWRieW5vb25lKSk7XHJcbiAgY29uc3QgW3RpbGVzLCBzZXRUaWxlc10gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHRpbGVzXSk7XHJcbiAgY29uc3QgW3B0aWxlcywgc2V0UHRpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZ3RpbGVzLCBzZXRHdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzcXVhcmVzLCBzZXRTcXVhcmVzXSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsc3F1YXJlc10pO1xyXG4gIGNvbnN0IFt1c2VkYnksIHNldFVzZWRieV0gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHVzZWRieV0pO1xyXG4gIGNvbnN0IFtzZWxlY3Rpb24sIHNldFNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgtMSk7IC8vIHJlbGF0aXZlIHRvIHJhY2sgb2YgcGxheWVyIG1ha2luZyBhIHBsYXlcclxuICBjb25zdCBbd2hvc2V0dXJuLCBzZXRXaG9zZXR1cm5dID0gdXNlU3RhdGUoXCJQXCIpOyAvLyBnYW1lIHN0YXJ0cyB3aXRoIHByaXNvbmVycyBwbGF5XHJcbiAgY29uc3QgW2N1cnJlbnRjb29yZHMsIHNldEN1cnJlbnRjb29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyZXNjdWVzLCBzZXRSZXNjdWVzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyY2QsIHNldFJjZF0gPSB1c2VTdGF0ZShbLTEsLTEsbm9kaXJlY3Rpb25dKTtcclxuICBjb25zdCBbcGFzc2VkLCBzZXRQYXNzZWRdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyB0cnVlIHdoZW4gb3Bwb25lbnQganVzdCBwYXNzZWQ7IGlmIGJvdGggcGFzcyB0aGUgZ2FtZSBlbmRzXHJcbiAgY29uc3QgW21vdmVzLCBzZXRNb3Zlc10gPSB1c2VTdGF0ZShbXSk7IC8vIG1vdmUgaGlzdG9yeSwgZWFjaCBlbGVtZW50IGlzIHRoZSBhcnJheSBpcyBhIGpzb24gb2JqZWN0IG9mIGluZm8gYWJvdXQgdGhlIG1vdmVcclxuICBjb25zdCBbc25hcHNob3QsIHNldFNuYXBzaG90XSA9IHVzZVN0YXRlKHtcclxuICAgIHNxdWFyZXM6IFsuLi5pbml0aWFsc3F1YXJlc10sXHJcbiAgICB1c2VkYnk6IFsuLi5pbml0aWFsdXNlZGJ5XSxcclxuICAgIHB0aWxlczogW10sXHJcbiAgICBndGlsZXM6IFtdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtqb2tlaW5kZXgsIHNldEpva2VpbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYWxsb3dSZXdpbmQsIHNldEFsbG93UmV3aW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3BwbmFtZSwgc2V0T3BwbmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NoYXRtc2dzLCBzZXRDaGF0bXNnc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgbmV3amkgPSBqb2tlaW5kZXggKyAxO1xyXG4gICAgaWYgKG5ld2ppID49IGpva2VzLmxlbmd0aCkge1xyXG4gICAgICBuZXdqaSA9IDA7XHJcbiAgICB9XHJcbiAgICBzZXRKb2tlaW5kZXgobmV3amkpO1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIC8vIElmIGl0IGlzIG5vdCBteSB0dXJuICYmIHRoZSBnYW1lIGhhcyBub3QgZW5kZWRcclxuICAgICAgaWYgKHByaXNvbmVyc09yR3VhcmRzICE9PSB3aG9zZXR1cm4gJiYgd2hvc2V0dXJuICE9PSBcIlhcIikge1xyXG4gICAgICAgIC8vIEkgYW0gd2FpdGluZyBmb3Igb3Bwb25lbnQgbW92ZSB0byBjb21lIHRocm91Z2ggYnV0IHNvbWV0aW1lcyBpdCBnZXRzIG1pc3NlZCAobm8gaWRlYSB3aHkpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbnRlcnZhbDogcHJpc29uZXJzT3JHdWFyZHM9XCIgKyBwcmlzb25lcnNPckd1YXJkcyArIFwiIHdob3NldHVybj1cIiArIHdob3NldHVybiArIFwiIGF0IFwiICsgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gICAgICAgIHJlcXVlc3RHYW1lRGF0YSgpOyAvLyBTZW5kIGEgcmVxdWVzdCBmb3IgZ2FtZSBkYXRhIGluIGNhc2Ugb3Bwb25lbnQgbW92ZWQgYW5kIHdlIG1pc3NlZCB0aGUgdXBkYXRlXHJcbiAgICAgIH1cclxuICAgIH0sIG1vdmV3YWl0dGltZSk7IC8vIHRoaXMgbWFueSBtaWxsaXNlY29uZHMgYmV0d2VlbiBhYm92ZSBjb2RlIGJsb2NrIGV4ZWN1dGlvbnNcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbd2hvc2V0dXJuXSk7IC8vIHdhbnQgdXAgdG8gZGF0ZSB2YWx1ZSBvZiB3aG9zZXR1cm4gdG8gZGVjaWRlIHdoZXRoZXIgdG8gYXNrIGZvciBhbiB1cGRhdGVcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgLy8gVGhpcyBjb2RlIGV4ZWN1dGVzIGZpcnN0IHRpbWUgR2FtZSBpcyB1c2VkIG9ubHlcclxuICAgIGlmICghaXNyZWpvaW4gJiYgcHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiKSB7IC8vIFByaXNvbmVyIGlzIHN0YXJ0aW5nIHRoZSBnYW1lIHNvIHBpY2sgcmFja3NcclxuICAgICAgbGV0IHRlbXBQVGlsZXMgPSBbXTtcclxuICAgICAgbGV0IHRlbXBHVGlsZXMgPSBbXTtcclxuICAgICAgbGV0IHRlbXBUaWxlcyA9IFsuLi5pbml0aWFsdGlsZXNdO1xyXG4gICAgICB3aGlsZSAodGVtcFBUaWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcFBUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcEdUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB0ZW1wUFRpbGVzLnNvcnQoKTtcclxuICAgICAgdGVtcEdUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHNldEd0aWxlcyh0ZW1wR1RpbGVzKTtcclxuICAgICAgc2V0UHRpbGVzKHRlbXBQVGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyh0ZW1wVGlsZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlczogWy4uLmluaXRpYWxzcXVhcmVzXSxcclxuICAgICAgICB1c2VkYnk6IFsuLi5pbml0aWFsdXNlZGJ5XSxcclxuICAgICAgICBwdGlsZXM6IFsuLi50ZW1wUFRpbGVzXSxcclxuICAgICAgICBndGlsZXM6IFsuLi50ZW1wR1RpbGVzXSAgICBcclxuICAgICAgfSk7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHR5cGU6IFwicGJcIixcclxuICAgICAgICAgIGZ1bmM6IFwiaGVsbG9cIixcclxuICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybixcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIC8vIFByaXNvbmVyIHJlam9pbiBvciBndWFyZCBqb2luIG9yIGd1YXJkIHJlam9pblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIsIC8vIHJlcXVlc3QgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHNcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2gge31cclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7ICAgICAgXHJcbiAgfSxbd3NtZXNzYWdlXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2Nyb2xsVG9Cb3R0b20oXCJTY3JvbGxhYmxlTW92ZXNcIik7XHJcbiAgfSxbbW92ZXNdKVxyXG5cclxuICBmdW5jdGlvbiBwdXRBdE1vdmVTdGFydCgpIHtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRBbGxvd1Jld2luZChmYWxzZSk7XHJcbiAgICBzZXRSY2QoLTEsLTEsbm9kaXJlY3Rpb24pO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwcm9jZXNzR2FtZU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09PSBcImFubm91bmNlXCIpIHtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLFxyXG4gICAgICAgICAgZnVuYzogXCJoZWxsb1wiLFxyXG4gICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmdhbWVpZCA9PT0gZ2FtZWlkICYmIG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwicGJcIikgeyAvLyBUaGlzIGluc3RhbmNlIG9mIGEgcHJpc29uIGJyZWFrIGdhbWVcclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLnNlbmRlciAhPSBwcmlzb25lcnNPckd1YXJkcyAmJiBvcHBuYW1lID09PSBcIlwiICYmIG1lc3NhZ2VEYXRhLm5pY2tuYW1lICYmIG1lc3NhZ2VEYXRhLm5pY2tuYW1lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyBPcHBvbmVudCBzZW50IGEgbWVzc2FnZSBpbmNsdWRpbmcgdGhlaXIgbmlja25hbWUgYW5kIEkgZG9uJ3QgaGF2ZSB0aGVpciBuaWNrbmFtZSB5ZXRcclxuICAgICAgICBzZXRPcHBuYW1lKG1lc3NhZ2VEYXRhLm5pY2tuYW1lKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJyZXF1ZXN0Z2FtZWRhdGFcIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHByaXNvbmVyc09yR3VhcmRzKSB7IC8vIE9wcG9uZW50IHJlcXVlc3RlZCBnYW1lIGluZm9cclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcInByb3ZpZGVnYW1lZGF0YVwiLCAvLyBwcm92aWRlIGdhbWUgZGF0YVxyXG4gICAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgICAgICB0aWxlczogdGlsZXMsXHJcbiAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsXHJcbiAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksXHJcbiAgICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgICBzbmFwc2hvdDogc25hcHNob3QsXHJcbiAgICAgICAgICAgIHBhc3NlZDogcGFzc2VkLFxyXG4gICAgICAgICAgICBtb3ZlczogbW92ZXMsXHJcbiAgICAgICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMsXHJcbiAgICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgICAgYWxsb3dSZXdpbmQ6IGFsbG93UmV3aW5kXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicHJvdmlkZWdhbWVkYXRhXCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9PSBwcmlzb25lcnNPckd1YXJkcyAmJiB3aG9zZXR1cm4gIT09IHByaXNvbmVyc09yR3VhcmRzICYmIHdob3NldHVybiAhPT0gXCJYXCIpIHsgXHJcbiAgICAgICAgLy8gb3Bwb25lbnQgcHJvdmlkZWQgZ2FtZSBkYXRhIGFuZCB0aGlzIHBsYXllciBpcyBzdGlsbCB3YWl0aW5nIHRvIHNlZSBvcHBvbmVudCBtb3ZlXHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgc2V0U25hcHNob3QobWVzc2FnZURhdGEuc25hcHNob3QpO1xyXG4gICAgICAgIHNldFBhc3NlZChtZXNzYWdlRGF0YS5wYXNzZWQpO1xyXG4gICAgICAgIHNldE1vdmVzKG1lc3NhZ2VEYXRhLm1vdmVzKTtcclxuICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICAgIHNldEFsbG93UmV3aW5kKG1lc3NhZ2VEYXRhLmFsbG93UmV3aW5kKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJlcHRcIiAmJiBwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIpIHsgLy8gUHJpc29uZXJzIHNlbnQgZW5kIHByaXNvbmVycyB0dXJuLCBHdWFyZHMgcGljayBpdCB1cFxyXG4gICAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0UGFzc2VkKG1lc3NhZ2VEYXRhLnBhc3NlZCk7XHJcbiAgICAgICAgc2V0TW92ZXMobWVzc2FnZURhdGEubW92ZXMpO1xyXG4gICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgICAgc3F1YXJlczogWy4uLm1lc3NhZ2VEYXRhLnNxdWFyZXNdLFxyXG4gICAgICAgICAgdXNlZGJ5OiBbLi4ubWVzc2FnZURhdGEudXNlZGJ5XSxcclxuICAgICAgICAgIHB0aWxlczogWy4uLm1lc3NhZ2VEYXRhLnB0aWxlc10sXHJcbiAgICAgICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImVndFwiICYmIHByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIikgeyAvLyBHdWFyZHMgc2VudCBlbmQgZ3VhcmRzIHR1cm4sIFByaXNvbmVycyBwaWNrIGl0IHVwXHJcbiAgICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRQYXNzZWQobWVzc2FnZURhdGEucGFzc2VkKTtcclxuICAgICAgICBzZXRNb3ZlcyhtZXNzYWdlRGF0YS5tb3Zlcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgICAgc3F1YXJlczogWy4uLm1lc3NhZ2VEYXRhLnNxdWFyZXNdLFxyXG4gICAgICAgICAgdXNlZGJ5OiBbLi4ubWVzc2FnZURhdGEudXNlZGJ5XSxcclxuICAgICAgICAgIHB0aWxlczogWy4uLnB0aWxlc10sXHJcbiAgICAgICAgICBndGlsZXM6IFsuLi5tZXNzYWdlRGF0YS5ndGlsZXNdLFxyXG4gICAgICAgIH0pOyAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJ1bmRvdHVyblwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcHJpc29uZXJzT3JHdWFyZHMpIHsgXHJcbiAgICAgICAgLy8gb3Bwb25lbnQgdW5kaWQgdGhlaXIgbGFzdCB0dXJuXHJcbiAgICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICAgIHNldFBhc3NlZChtZXNzYWdlRGF0YS5wYXNzZWQpO1xyXG4gICAgICAgIHNldE1vdmVzKG1lc3NhZ2VEYXRhLm1vdmVzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdChtZXNzYWdlRGF0YS5zbmFwc2hvdCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiYWxsb3d1bmRvXCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9PSBwcmlzb25lcnNPckd1YXJkcykge1xyXG4gICAgICAgIC8vIE9wcG9uZW50IGNsaWNrZWQgYnV0dG9uIHRvIGFsbG93IHVuZG8gdHVyblxyXG4gICAgICAgIHNldEFsbG93UmV3aW5kKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImNoYXRcIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT0gcHJpc29uZXJzT3JHdWFyZHMpIHsgLy8gT3Bwb25lbnQgY2hhdCBtZXNzYWdlXHJcbiAgICAgICAgbGV0IG5ld0NoYXRtc2dzID0gWy4uLmNoYXRtc2dzLCB7ZnJvbTogbWVzc2FnZURhdGEubmlja25hbWUsIG1zZzogbWVzc2FnZURhdGEuc2VuZG1zZ31dO1xyXG4gICAgICAgIHNldENoYXRtc2dzKG5ld0NoYXRtc2dzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBDYWxsaW5nIHNldFNlbGVjdGlvbiAoZnJvbSBoYW5kbGVLZXlEb3duKSB0aGVuIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgZG9lcyBub3QgbGV0IGl0IHJlY29nbml6ZSBzZWxlY3Rpb24gd2l0aCB0aGUgbmV3IHZhbHVlXHJcbiAgLy8gU28gSSBwYXNzIG5ld1NlbGVjdGlvbiB3aGVuIEkgd2FudCB0byBhbHNvIHNldCBpdCwgb3RoZXJ3aXNlIEkgcGFzcyAtMSB0byBpbnN0cnVjdCBpdCB0byB1c2UgY3VycmVudCB2YWx1ZSBvZiBzZWxlY3Rpb25cclxuICAvLyBBbHNvIHBhc3NpbmcgbmV3UmNkXHJcbiAgY29uc3QgaGFuZGxlQm9hcmRTcXVhcmVDbGljayA9IChyaSwgY2ksIG5ld1NlbGVjdGlvbiwgbmV3UmNkKSA9PiB7XHJcbiAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgIGxldCBuZXdVc2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgIGxldCBuZXdSb3cgPSBbLi4uc3F1YXJlc1tyaV1dO1xyXG4gICAgbGV0IHNxdWFyZXZhbHVlID0gc3F1YXJlc1tyaV1bY2ldO1xyXG4gICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcbiAgICBsZXQgY29vcmQgPSBTdHJpbmcocmkpICsgXCItXCIgKyBTdHJpbmcoY2kpO1xyXG4gICAgbGV0IGNjaSA9IGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCk7XHJcbiAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgIG5ld1JjZCA9IHJjZDtcclxuICAgIH1cclxuICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSAmJiBzcXVhcmV2YWx1ZSA9PT0gc3F1YXJldW51c2VkKSB7IC8vIHRpbGUgaXMgc2VsZWN0ZWQgZnJvbSByYWNrIGFuZCBjbGlja2VkIHNxdWFyZSBpcyBub3QgdXNlZCB5ZXRcclxuICAgICAgbmV3Um93W2NpXSA9XHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBcIlBcIiA/IG5ld1B0aWxlc1tuZXdTZWxlY3Rpb25dIDogbmV3R3RpbGVzW25ld1NlbGVjdGlvbl07XHJcbiAgICAgIG5ld1NxdWFyZXNbcmldID0gWy4uLm5ld1Jvd107XHJcbiAgICAgIHdob3NldHVybiA9PT0gXCJQXCJcclxuICAgICAgICA/IG5ld1B0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKVxyXG4gICAgICAgIDogbmV3R3RpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpO1xyXG4gICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLm5ld1VzZWRieVtyaV1dO1xyXG4gICAgICBuZXdVc2VkYnlSb3dbY2ldID0gd2hvc2V0dXJuO1xyXG4gICAgICBuZXdVc2VkYnlbcmldID0gWy4uLm5ld1VzZWRieVJvd107XHJcbiAgICAgIGlmICh3aG9zZXR1cm4gPT09IFwiUFwiICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3UHRpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHdob3NldHVybiA9PT0gXCJHXCIgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdHdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgfVxyXG4gICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhbLi4uY3VycmVudGNvb3JkcywgY29vcmRdKTtcclxuICAgICAgc2V0UmNkKG5ld1JjZCk7IC8vIGtleSBkb3duIGhhbmRsZXIgZmlndXJlZCBpdCBvdXRcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNjaSA+IC0xKSB7IC8vIGNsaWNrZWQgc3F1YXJlIGhhcyBhIHRpbGUgb24gaXQgZnJvbSB0aGUgY3VycmVudCBtb3ZlIGluIHByb2dyZXNzXHJcbiAgICAgIHdob3NldHVybiA9PT0gXCJQXCJcclxuICAgICAgICA/IG5ld1B0aWxlcy5wdXNoKHNxdWFyZXZhbHVlKVxyXG4gICAgICAgIDogbmV3R3RpbGVzLnB1c2goc3F1YXJldmFsdWUpO1xyXG4gICAgICBsZXQgbmV3Um93ID0gWy4uLm5ld1NxdWFyZXNbcmldXTtcclxuICAgICAgbmV3Um93W2NpXSA9IHNxdWFyZXVudXNlZDtcclxuICAgICAgbmV3U3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XTtcclxuICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi5uZXdVc2VkYnlbcmldXTtcclxuICAgICAgbmV3VXNlZGJ5Um93W2NpXSA9IHVzZWRieW5vb25lO1xyXG4gICAgICBuZXdVc2VkYnlbcmldID0gWy4uLm5ld1VzZWRieVJvd107XHJcbiAgICAgIHNldFNlbGVjdGlvbihcclxuICAgICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gbmV3UHRpbGVzLmxlbmd0aCAtIDEgOiBuZXdHdGlsZXMubGVuZ3RoIC0gMVxyXG4gICAgICApO1xyXG4gICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjY2ksIDEpO1xyXG5cclxuICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhuZXdDdXJyZW50Y29vcmRzKTtcclxuICAgICAgc2V0UmNkKC0xLC0xLG5vZGlyZWN0aW9uKTsgLy8gbWFrZSBwbGF5ZXIgY2xpY2sgYWdhaW4gdG8gc2V0IGRpcmVjdGlvblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBUaGV5IGRpZG4ndCBjbGljayBhIHNxdWFyZSB0byBwbGFjZSBhIHNlbGVjdGVkIHRpbGUgdGhlcmVcclxuICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHJlbW92ZSBhbiBleGlzdGluZyB0aWxlXHJcbiAgICBpZiAoc3F1YXJlc1tyaV1bY2ldID09PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgLy8gVGhlcmUgaXMgbm90aGluZyBvbiB0aGUgc3F1YXJlIHNvIHRoZXkgYXJlIHBpY2tpbmcgd2hlcmUgdG8gcGxhY2UgdGhlIG5leHQgdGlsZSB2aWEga2V5Ym9hcmRcclxuICAgICAgbGV0IG5ld0RpcmVjdGlvbiA9IHJjZFswXSAhPT0gcmkgfHwgcmNkWzFdICE9PSBjaSA/IFwiclwiIDogLy9jbGljayBuZXcgc3F1YXJlLCBzdGFydCB3aXRoIFwiclwiXHJcbiAgICAgICByY2RbMl0gPT09IFwiclwiID8gXCJkXCIgOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIFwiclwiLCBjaGFuZ2UgdG8gXCJkXCJcclxuICAgICAgIHJjZFsyXSA9PT0gXCJkXCIgPyBub2RpcmVjdGlvbiA6IC8vY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgXCJkXCIsIGNoYW5nZSB0byBub2RpcmVjdGlvblxyXG4gICAgICAgXCJyXCI7IC8vIGNsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIG5vZGlyZWN0aW9uLCBjaGFuZ2UgdG8gXCJyXCJcclxuICAgICAgbmV3UmNkID0gW3JpLGNpLG5ld0RpcmVjdGlvbl07XHJcbiAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2sgPSAodGlsZWluZGV4KSA9PiB7XHJcbiAgICAvLyB0aGUgaW5kZXggb2YgcHRpbGVzXHJcbiAgICBpZiAod2hvc2V0dXJuID09PSBcIlBcIikge1xyXG4gICAgICBsZXQgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uID09PSB0aWxlaW5kZXggPyAtMSA6IHRpbGVpbmRleDtcclxuICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIkl0IGlzIG5vdCB5b3VyIHR1cm5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlR3VhcmRUaWxlQ2xpY2sgPSAodGlsZWluZGV4KSA9PiB7XHJcbiAgICAvLyB0aGUgaW5kZXggb2YgZ3RpbGVzXHJcbiAgICBpZiAod2hvc2V0dXJuID09PSBcIkdcIikge1xyXG4gICAgICBsZXQgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uID09PSB0aWxlaW5kZXggPyAtMSA6IHRpbGVpbmRleDtcclxuICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIkl0IGlzIG5vdCB5b3VyIHR1cm5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZW5kUHJpc29uZXJzVHVybiA9ICgpID0+IHtcclxuICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgIGxldCBuZXdSZXNjdWVzID0gcmVzY3VlcztcclxuICAgIGxldCBlc2NhcGVoYXRjaGVzID0gW1xyXG4gICAgICBcIjAtMFwiLFxyXG4gICAgICBcIjAtXCIgKyBtaWRkbGUsXHJcbiAgICAgIFwiMC1cIiArIGVkZ2UsXHJcbiAgICAgIG1pZGRsZSsgXCItMFwiLFxyXG4gICAgICBtaWRkbGUgKyBcIi1cIiArIGVkZ2UsXHJcbiAgICAgIGVkZ2UgKyBcIi0wXCIsXHJcbiAgICAgIGVkZ2UgKyBcIi1cIiArIG1pZGRsZSxcclxuICAgICAgZWRnZSArIFwiLVwiICsgZWRnZVxyXG4gICAgXTsgLy8gY29vcmRzIG9mIGVzY2FwZSBoYXRjaGVzXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGVzY2FwZWhhdGNoZXMuaW5kZXhPZihjdXJyZW50Y29vcmRzW2ldKSA+IC0xKSB7XHJcbiAgICAgICAgbmV3UmVzY3VlcyA9IG5ld1Jlc2N1ZXMgKyAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3UHRpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdQdGlsZXMuc29ydCgpO1xyXG4gICAgbGV0IG5ld1dob3NldHVybiA9IG5ld1B0aWxlcy5sZW5ndGggPiAwID8gXCJHXCIgOiBcIlhcIjsgLy8gWCA9IGdhbWUgb3ZlclxyXG4gICAgaWYgKHVzZWRieVswXVswXSAgICAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVswXVttaWRkbGVdICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVswXVtlZGdlXSAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVttaWRkbGVdWzBdICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVttaWRkbGVdW2VkZ2VdICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtlZGdlXVswXSAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtlZGdlXVttaWRkbGVdICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtlZGdlXVtlZGdlXSAgICE9PSB1c2VkYnlub29uZSkge1xyXG4gICAgICBuZXdXaG9zZXR1cm4gPSBcIlhcIjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgfVxyXG4gICAgbGV0IHBsYXlpbmZvID0gZ2V0UGxheUluZm8oKTtcclxuICAgIGxldCBuZXdNb3ZlID0ge2J5OiBcIlBcIiwgdHlwZTogXCJQTEFZXCIsIHJld2luZEluZm86IHJld2luZEluZm8sIG1haW53b3JkOiBwbGF5aW5mby5tYWlud29yZCwgZXh0cmF3b3JkczogcGxheWluZm8uZXh0cmF3b3JkcywgcG9zOiBwbGF5aW5mby5wb3N9O1xyXG4gICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UGFzc2VkKGZhbHNlKTtcclxuICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgIHNldFJlc2N1ZXMobmV3UmVzY3Vlcyk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4udXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgdXNlZGJ5OiB1c2VkYnksIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lICh3aG9zZXR1cm49WClcclxuICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgcGFzc2VkOiBmYWxzZSwgLy8gZGlkIG5vdCBqdXN0IHBhc3NcclxuICAgICAgICBtb3ZlczogbmV3TW92ZXMsIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgIHJlc2N1ZXM6IG5ld1Jlc2N1ZXMgLy8gbWF5IGhhdmUgcmVzY3VlZCBhbm90aGVyIHByaXNvbmVyXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVuZEd1YXJkc1R1cm4gPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlzUGxheVZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHJld2luZEluZm8gPSBnZXRSZXdpbmRJbmZvKCk7XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld0d0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgbGV0IHNuYXBzcXVhcmVzID0gWy4uLnNxdWFyZXNdO1xyXG4gICAgbGV0IHNuYXB1c2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgIGxldCBzbmFwcHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgc25hcGd0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgbGV0IG5ld1dob3NldHVybiA9IG5ld0d0aWxlcy5sZW5ndGggPiAwID8gXCJQXCIgOiBcIlhcIjsgLy8gWCA9IGdhbWUgb3ZlclxyXG4gICAgaWYgKHVzZWRieVswXVswXSAgICAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVswXVttaWRkbGVdICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVswXVtlZGdlXSAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVttaWRkbGVdWzBdICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVttaWRkbGVdW2VkZ2VdICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtlZGdlXVswXSAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtlZGdlXVttaWRkbGVdICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgIHVzZWRieVtlZGdlXVtlZGdlXSAgICE9PSB1c2VkYnlub29uZSkge1xyXG4gICAgICBuZXdXaG9zZXR1cm4gPSBcIlhcIjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgfVxyXG4gICAgbGV0IHBsYXlpbmZvID0gZ2V0UGxheUluZm8oKTtcclxuICAgIGxldCBuZXdNb3ZlID0ge2J5OiBcIkdcIiwgdHlwZTogXCJQTEFZXCIsIHJld2luZEluZm86IHJld2luZEluZm8sIG1haW53b3JkOiBwbGF5aW5mby5tYWlud29yZCwgZXh0cmF3b3JkczogcGxheWluZm8uZXh0cmF3b3JkcywgcG9zOiBwbGF5aW5mby5wb3N9O1xyXG4gICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UGFzc2VkKGZhbHNlKTtcclxuICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogc25hcHNxdWFyZXMsXHJcbiAgICAgIHVzZWRieTogc25hcHVzZWRieSxcclxuICAgICAgcHRpbGVzOiBzbmFwcHRpbGVzLFxyXG4gICAgICBndGlsZXM6IHNuYXBndGlsZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIHVzZWRieTogdXNlZGJ5LCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBndWFyZHMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHBhc3NlZDogZmFsc2UsIC8vIGRpZCBub3QganVzdCBwYXNzXHJcbiAgICAgICAgbW92ZXM6IG5ld01vdmVzLCAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWUgKHdob3NldHVybj1YKVxyXG4gICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICBjb25zdCBzd2FwUHJpc29uZXJzVGlsZXMgPSAoKSA9PiB7XHJcbiAgICBpZiAodGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCBcIiArIHJhY2tzaXplICsgXCIgdGlsZXMgaW4gdGhlIGJhZyB0byBleGNoYW5nZVwiKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgIGxldCBuZXdQdGlsZXMgPSBbXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3UHRpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdQdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld1B0aWxlcy5zb3J0KCk7XHJcbiAgICBuZXdUaWxlcyA9IFsuLi5uZXdUaWxlcywgLi4uc25hcHNob3QucHRpbGVzXTtcclxuICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgIGxldCBuZXdNb3ZlID0ge2J5OiBcIlBcIiwgdHlwZTogXCJTV0FQXCIsIHJld2luZEluZm86IHJld2luZEluZm99O1xyXG4gICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiR1wiKTtcclxuICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UGFzc2VkKGZhbHNlKTtcclxuICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogWy4uLnNuYXBzaG90LnNxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi5zbmFwc2hvdC51c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFsuLi5uZXdQdGlsZXNdLFxyXG4gICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgd2hvc2V0dXJuOiBcIkdcIiwgLy8gc3dhcCBuZXZlciBlbmRzIHRoZSBnYW1lIHNvIGdvIHRvIG9wcG9uZW50XHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHBhc3NlZDogZmFsc2UsIC8vIGRpZCBub3QganVzdCBwYXNzXHJcbiAgICAgICAgbW92ZXM6IG5ld01vdmVzLCAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICByZXNjdWVzOiByZXNjdWVzIC8vIG5vIHJlc2N1ZXMgb24gYW4gZXhjaGFuZ2VcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gIH1cclxuICBcclxuICBjb25zdCBzd2FwR3VhcmRzVGlsZXMgPSAoKSA9PiB7XHJcbiAgICBpZiAodGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCBcIiArIHJhY2tzaXplICsgXCIgdGlsZXMgaW4gdGhlIGJhZyB0byBleGNoYW5nZVwiKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgIGxldCBuZXdHdGlsZXMgPSBbXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdHdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld0d0aWxlcy5zb3J0KCk7XHJcbiAgICBuZXdUaWxlcyA9IFsuLi5uZXdUaWxlcywgLi4uc25hcHNob3QuZ3RpbGVzXTtcclxuICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgIGxldCBuZXdNb3ZlID0ge2J5OiBcIkdcIiwgdHlwZTogXCJTV0FQXCIsIHJld2luZEluZm86IHJld2luZEluZm99O1xyXG4gICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiUFwiKTtcclxuICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UGFzc2VkKGZhbHNlKTtcclxuICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogWy4uLnNuYXBzaG90LnNxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi5zbmFwc2hvdC51c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICBndGlsZXM6IFsuLi5uZXdHdGlsZXNdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgd2hvc2V0dXJuOiBcIlBcIiwgLy8gc3dhcCBuZXZlciBlbmRzIHRoZSBnYW1lIHNvIGdvIHRvIG9wcG9uZW50XHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHBhc3NlZDogZmFsc2UsIC8vIGRpZCBub3QganVzdCBwYXNzXHJcbiAgICAgICAgbW92ZXM6IG5ld01vdmVzIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc1BsYXlWYWxpZCgpIHtcclxuICAgIGlmIChzcXVhcmVzW21pZGRsZV1bbWlkZGxlXSA9PT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIkZpcnN0IHBsYXkgbXVzdCBoaXQgY2VudGVyIHNxdWFyZVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IG51bXJvd3MgPSBlZGdlKzE7XHJcbiAgICBsZXQgbnVtY29scyA9IGVkZ2UrMTtcclxuICAgIGxldCBsb3dyb3cgPSBudW1yb3dzO1xyXG4gICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgIGxldCBsb3djb2wgPSBudW1jb2xzO1xyXG4gICAgbGV0IGhpZ2hjb2wgPSAtMTtcclxuICAgIGZvciAodmFyIHI9MDsgciA8IG51bXJvd3M7ICsrcikge1xyXG4gICAgICBmb3IgKHZhciBjPTA7IGMgPCBudW1jb2xzOyArK2MpIHtcclxuICAgICAgICBpZiAoc3F1YXJlc1tyXVtjXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICBpZiAoIShyID4gMCAmJiBzcXVhcmVzW3ItMV1bY10gIT09IHNxdWFyZXVudXNlZCkgJiZcclxuICAgICAgICAgICAhKGMgPiAwICYmIHNxdWFyZXNbcl1bYy0xXSAhPT0gc3F1YXJldW51c2VkKSAmJlxyXG4gICAgICAgICAgICEociA8IGVkZ2UgJiYgc3F1YXJlc1tyKzFdW2NdICE9PSBzcXVhcmV1bnVzZWQpICYmXHJcbiAgICAgICAgICAgIShjIDwgZWRnZSAmJiBzcXVhcmVzW3JdW2MrMV0gIT09IHNxdWFyZXVudXNlZClcclxuICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRWFjaCBwbGF5ZWQgdGlsZSBtdXN0IGJlIHBhcnQgb2YgYSB3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGlmIChzbmFwc2hvdC5zcXVhcmVzW3JdW2NdID09PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgICAgIC8vIFRoaXMgc3F1YXJlIHdhcyBwbGF5ZWQgb24gdGhpcyB0dXJuXHJcbiAgICAgICAgICAgICBpZiAociA8IGxvd3JvdykgeyBsb3dyb3cgPSByO31cclxuICAgICAgICAgICAgIGlmIChyID4gaGlnaHJvdykgeyBoaWdocm93ID0gcjt9XHJcbiAgICAgICAgICAgICBpZiAoYyA8IGxvd2NvbCkgeyBsb3djb2wgPSBjO31cclxuICAgICAgICAgICAgIGlmIChjID4gaGlnaGNvbCkgeyBoaWdoY29sID0gYzt9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGxvd3JvdyA9PT0gbnVtcm93cykge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJZb3UgZGlkbid0IHBsYXkgYW55IHRpbGVzXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAobG93cm93ICE9PSBoaWdocm93ICYmIGxvd2NvbCAhPT0gaGlnaGNvbCkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJUaWxlcyBwbGF5ZWQgbXVzdCBiZSBpbiBhIHN0cmFpZ2h0IGxpbmVcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBwbGF5dGhydSA9IGZhbHNlO1xyXG4gICAgbGV0IGhvb2ttYWRlID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciByID0gbG93cm93OyByIDw9IGhpZ2hyb3c7ICsrcikge1xyXG4gICAgICBmb3IgKHZhciBjID0gbG93Y29sOyBjIDw9IGhpZ2hjb2w7ICsrYykge1xyXG4gICAgICAgIGlmIChzcXVhcmVzW3JdW2NdID09PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgIHdpbmRvdy5hbGVydChcIlRoZXJlIGlzIGEgZ2FwIGluIHlvdXIgd29yZFwiKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNuYXBzaG90LnNxdWFyZXNbcl1bY10gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgICAgcGxheXRocnUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHIgPiAwICYmIHNxdWFyZXNbci0xXVtjXSAhPT0gc3F1YXJldW51c2VkKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgciA8IGVkZ2UgJiYgc3F1YXJlc1tyKzFdW2NdICE9PSBzcXVhcmV1bnVzZWQpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBjID4gMCAmJiBzcXVhcmVzW3JdW2MtMV0gIT09IHNxdWFyZXVudXNlZCkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGMgPCBlZGdlICYmIHNxdWFyZXNbcl1bYysxXSAhPT0gc3F1YXJldW51c2VkKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDaGVjayBwbGF5IHRvIG9yIGZyb20gYSB0aWxlIChwbGF5IHRocm91Z2ggYnV0IG5vdCBlaXRoZXIgc2lkZSlcclxuICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgbG93Y29sID4gMCAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvd11bbG93Y29sLTFdICE9PSBzcXVhcmV1bnVzZWQpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGhpZ2hjb2wgPCBlZGdlICYmIHNuYXBzaG90LnNxdWFyZXNbbG93cm93XVtoaWdoY29sKzFdICE9PSBzcXVhcmV1bnVzZWQpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGxvd3JvdyA+IDAgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ctMV1bbG93Y29sXSAhPT0gc3F1YXJldW51c2VkKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBoaWdocm93IDwgZWRnZSAmJiBzbmFwc2hvdC5zcXVhcmVzW2hpZ2hyb3crMV1bbG93Y29sXSAhPT0gc3F1YXJldW51c2VkKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgaWYgKCFwbGF5dGhydSAmJiAhaG9va21hZGUgJiYgc25hcHNob3Quc3F1YXJlc1ttaWRkbGVdW21pZGRsZV0gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJXb3JkcyBtdXN0IGJlIGNvbm5lY3RlZFwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRQbGF5SW5mbygpIHtcclxuICAgIGxldCBwbGF5aW5mbyA9IHt9O1xyXG4gICAgbGV0IG1haW53b3JkID0gXCJcIjtcclxuICAgIGxldCBleHRyYXdvcmRzID0gW107XHJcbiAgICBsZXQgd29yZHN0YXJ0Y29vcmQgPSBcIlwiO1xyXG4gICAgbGV0IG51bXJvd3MgPSBlZGdlKzE7XHJcbiAgICBsZXQgbnVtY29scyA9IGVkZ2UrMTtcclxuICAgIGxldCBsb3dyb3cgPSBudW1yb3dzO1xyXG4gICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgIGxldCBsb3djb2wgPSBudW1jb2xzO1xyXG4gICAgbGV0IGhpZ2hjb2wgPSAtMTtcclxuICAgIGxldCBudW1jb29yZHMgPSBjdXJyZW50Y29vcmRzLmxlbmd0aDtcclxuICAgIGZvciAodmFyIGNvb3JkPTA7IGNvb3JkIDwgbnVtY29vcmRzOyArK2Nvb3JkKSB7XHJcbiAgICAgIGxldCByb3cgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMF0pO1xyXG4gICAgICBsZXQgY29sID0gcGFyc2VJbnQoY3VycmVudGNvb3Jkc1tjb29yZF0uc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgaWYgKHJvdyA8IGxvd3Jvdykge1xyXG4gICAgICAgIGxvd3JvdyA9IHJvdztcclxuICAgICAgfVxyXG4gICAgICBpZiAocm93ID4gaGlnaHJvdykge1xyXG4gICAgICAgIGhpZ2hyb3cgPSByb3c7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbCA8IGxvd2NvbCkge1xyXG4gICAgICAgIGxvd2NvbCA9IGNvbDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sID4gaGlnaGNvbCkge1xyXG4gICAgICAgIGhpZ2hjb2wgPSBjb2w7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChsb3dyb3cgPCBoaWdocm93IHx8IG51bWNvb3JkcyA9PT0gMSkgeyAvLyB0aWxlcyBwbGFjZWQgb24gZGlmZmVyZW5jZSByb3dzIHNvIHBsYXkgaXMgdmVydGljYWwsIG9yIHNpbmdsZSB0aWxlIHBsYXllZFxyXG4gICAgICBsZXQgY29sID0gbG93Y29sOyAvLyBsb3djb2wgYW5kIGhpZ2hjb2wgd2lsbCBoYXZlIHRoZSBzYW1lIHZhbHVlXHJcbiAgICAgIC8vIGZpbmQgdGhlIGxvd2VzdCByb3cgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBsb3dlciB0aGFuIHRoYXQgb2YgdGhlIGZpcnN0IHBsYXllZCB0aWxlXHJcbiAgICAgIGxldCBsb3dlc3Ryb3cgPSBsb3dyb3c7XHJcbiAgICAgIHdoaWxlIChsb3dlc3Ryb3cgPiAwICYmIHNxdWFyZXNbbG93ZXN0cm93LTFdW2NvbF0gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgIGxvd2VzdHJvdyA9IGxvd2VzdHJvdyAtIDE7XHJcbiAgICAgIH1cclxuICAgICAgLy8gZmluZCB0aGUgaGlnaGVzdCByb3cgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBoaWdoZXIgdGhhbiB0aGF0IG9mIHRoZSBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgIGxldCBoaWdoZXN0cm93ID0gaGlnaHJvdztcclxuICAgICAgd2hpbGUgKGhpZ2hlc3Ryb3cgPCBlZGdlICYmIHNxdWFyZXNbaGlnaGVzdHJvdysxXVtjb2xdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICBoaWdoZXN0cm93ID0gaGlnaGVzdHJvdyArIDE7XHJcbiAgICAgIH1cclxuICAgICAgd29yZHN0YXJ0Y29vcmQgPSBib2FyZENvbHVtbkhlYWRlcnNbY29sXSArIGJvYXJkUm93SGVhZGVyc1tsb3dlc3Ryb3ddOyAvLyB2ZXJ0aWNhbCBwbGF5IGNvb3JkcyBzdGFydCB3aXRoIGNvbCBoZWFkZXJcclxuICAgICAgZm9yICh2YXIgcm93ID0gbG93ZXN0cm93OyByb3cgPD0gaGlnaGVzdHJvdzsgKytyb3cpIHtcclxuICAgICAgICBtYWlud29yZCA9IG1haW53b3JkICsgc3F1YXJlc1tyb3ddW2NvbF07XHJcbiAgICAgICAgbGV0IGNvb3JkID0gcm93ICsgXCItXCIgKyBjb2w7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCkgPiAtMSkgeyAvLyBUaGlzIHRpbGUgd2FzIHBsYXllZCwgY2hlY2sgZm9yIGhvb2tzXHJcbiAgICAgICAgICBsZXQgbG93ZXN0Y29sID0gY29sO1xyXG4gICAgICAgICAgd2hpbGUgKGxvd2VzdGNvbCA+IDAgJiYgc3F1YXJlc1tyb3ddW2xvd2VzdGNvbC0xXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICAgIGxvd2VzdGNvbCA9IGxvd2VzdGNvbCAtIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgaGlnaGVzdGNvbCA9IGNvbDtcclxuICAgICAgICAgIHdoaWxlIChoaWdoZXN0Y29sIDwgZWRnZSAmJiBzcXVhcmVzW3Jvd11baGlnaGVzdGNvbCsxXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICAgIGhpZ2hlc3Rjb2wgPSBoaWdoZXN0Y29sICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChsb3dlc3Rjb2wgPCBoaWdoZXN0Y29sKSB7IC8vIGhvb2sgd2FzIG1hZGVcclxuICAgICAgICAgICAgbGV0IGV4dHJhd29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSBsb3dlc3Rjb2w7IGMgPD0gaGlnaGVzdGNvbDsgKytjKSB7XHJcbiAgICAgICAgICAgICAgZXh0cmF3b3JkID0gZXh0cmF3b3JkICsgc3F1YXJlc1tyb3ddW2NdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV4dHJhd29yZHMgPSBbLi4uZXh0cmF3b3JkcywgZXh0cmF3b3JkXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChtYWlud29yZC5sZW5ndGggPCAyKSB7IC8vIEhvcml6b250YWwgcGxheSBvciBzaW5nbGUgdGlsZSBkcm9wIHRoYXQgY2Fubm90IGJlIGEgdmVydGljYWwgcGxheVxyXG4gICAgICBsZXQgcm93ID0gbG93cm93OyAvLyBsb3dyb3cgYW5kIGhpZ2hyb3cgd2lsbCBoYXZlIHRoZSBzYW1lIHZhbHVlXHJcbiAgICAgIC8vIGZpbmQgdGhlIGxvd2VzdCBjb2wgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBsb3dlciB0aGFuIHRoYXQgb2YgdGhlIGZpcnN0IHBsYXllZCB0aWxlXHJcbiAgICAgIGxldCBsb3dlc3Rjb2wgPSBsb3djb2w7XHJcbiAgICAgIHdoaWxlIChsb3dlc3Rjb2wgPiAwICYmIHNxdWFyZXNbcm93XVtsb3dlc3Rjb2wtMV0gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgIGxvd2VzdGNvbCA9IGxvd2VzdGNvbCAtIDE7XHJcbiAgICAgIH1cclxuICAgICAgLy8gZmluZCB0aGUgaGlnaGVzdCBjb2wgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBoaWdoZXIgdGhhbiB0aGF0IG9mIHRoZSBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgIGxldCBoaWdoZXN0Y29sID0gaGlnaGNvbDtcclxuICAgICAgd2hpbGUgKGhpZ2hlc3Rjb2wgPCBlZGdlICYmIHNxdWFyZXNbcm93XVtoaWdoZXN0Y29sKzFdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICBoaWdoZXN0Y29sID0gaGlnaGVzdGNvbCArIDE7XHJcbiAgICAgIH1cclxuICAgICAgd29yZHN0YXJ0Y29vcmQgPSBib2FyZFJvd0hlYWRlcnNbcm93XSArIGJvYXJkQ29sdW1uSGVhZGVyc1tsb3dlc3Rjb2xdOyAvLyBob3Jpem9udGFsIHBsYXkgY29vcmRzIHN0YXJ0IHdpdGggcm93IGhlYWRlclxyXG4gICAgICBtYWlud29yZCA9IFwiXCI7IC8vIEluIGNhc2Ugd2UgZ290IGEgMSBsZXR0ZXIgbWFpbndvcmQgaW4gdGhlIHByZXZpb3VzIGJsb2NrXHJcbiAgICAgIGV4dHJhd29yZHMgPSBbXTsgLy8gRGl0dG9cclxuICAgICAgZm9yICh2YXIgY29sID0gbG93ZXN0Y29sOyBjb2wgPD0gaGlnaGVzdGNvbDsgKytjb2wpIHtcclxuICAgICAgICBtYWlud29yZCA9IG1haW53b3JkICsgc3F1YXJlc1tyb3ddW2NvbF07XHJcbiAgICAgICAgbGV0IGNvb3JkID0gcm93ICsgXCItXCIgKyBjb2w7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCkgPiAtMSkgeyAvLyBUaGlzIHRpbGUgd2FzIHBsYXllZCwgY2hlY2sgZm9yIGhvb2tzXHJcbiAgICAgICAgICBsZXQgbG93ZXN0cm93ID0gcm93O1xyXG4gICAgICAgICAgd2hpbGUgKGxvd2VzdHJvdyA+IDAgJiYgc3F1YXJlc1tsb3dlc3Ryb3ctMV1bY29sXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICAgIGxvd2VzdHJvdyA9IGxvd2VzdHJvdyAtIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgaGlnaGVzdHJvdyA9IHJvdztcclxuICAgICAgICAgIHdoaWxlIChoaWdoZXN0cm93IDwgZWRnZSAmJiBzcXVhcmVzW2hpZ2hlc3Ryb3crMV1bY29sXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICAgIGhpZ2hlc3Ryb3cgPSBoaWdoZXN0cm93ICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChsb3dlc3Ryb3cgPCBoaWdoZXN0cm93KSB7IC8vIGhvb2sgd2FzIG1hZGVcclxuICAgICAgICAgICAgbGV0IGV4dHJhd29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSBsb3dlc3Ryb3c7IHIgPD0gaGlnaGVzdHJvdzsgKytyKSB7XHJcbiAgICAgICAgICAgICAgZXh0cmF3b3JkID0gZXh0cmF3b3JkICsgc3F1YXJlc1tyXVtjb2xdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV4dHJhd29yZHMgPSBbLi4uZXh0cmF3b3JkcywgZXh0cmF3b3JkXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHBsYXlpbmZvID0ge21haW53b3JkOiBtYWlud29yZCwgZXh0cmF3b3JkczogZXh0cmF3b3JkcywgcG9zOiB3b3Jkc3RhcnRjb29yZH07XHJcbiAgICByZXR1cm4gcGxheWluZm87XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRSZXdpbmRJbmZvKCkgeyAvLyBNdXN0IGJlIGNhbGxlZCBiZWZvcmUgeW91IHN0YXJ0IHNldHRpbmcgbmV3IHZhbHVlcyBmb3Igc3R1ZmZcclxuICAgIC8qIFJld2luZCBpbmZvIGlzIGV2ZXJ5dGhpbmcgeW91IG5lZWQgdG8gcmV2ZXJzZSB0aGUgbW92ZSB0aGF0IHdlIGRvIG5vdCBhbHJlYWR5IGhhdmUgaW4gdGhlIG5ldyBtb3ZlIHZhcmlhYmxlOlxyXG4gICAgICAgIHNxdWFyZXM6IHNheXMgd2hhdCB0aWxlIGlzIG9uIHdoYXQgc3F1YXJlXHJcbiAgICAgICAgdXNlZGJ5OiBzYXlzIHdobyBwbGF5ZWQgd2hhdCB0aWxlIG9uIHdoYXQgc3F1YXJlIChhZmZlY3RzIHN0eWxpbmcpXHJcbiAgICAgICAgcmFjazogcGxheWVycyByYWNrIGJlZm9yZSBtb3ZlIHdhcyBtYWRlIFxyXG4gICAgICAgIHRpbGVzOiB0aWxlIHBvb2wgYmVmb3JlIHBpY2tpbmcgbmV3IHRpbGVzXHJcbiAgICAgICAgcmVzY3VlczogcmVzY3VlIGNvdW50XHJcbiAgICAgICAgcGFzc2VkOiB3aGV0aGVyIHByZXZpb3VzIHBsYXkgd2FzIGEgcGFzc1xyXG4gICAgKi9cclxuICAgIGxldCByZXdpbmRJbmZvID0ge1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc25hcHNob3Quc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnNuYXBzaG90LnVzZWRieV0sXHJcbiAgICAgIHJhY2s6IHdob3NldHVybiA9PT0gXCJHXCIgPyBbLi4uc25hcHNob3QuZ3RpbGVzXTogWy4uLnNuYXBzaG90LnB0aWxlc10sXHJcbiAgICAgIHRpbGVzOiBbLi4udGlsZXNdLFxyXG4gICAgICByZXNjdWVzOiByZXNjdWVzLFxyXG4gICAgICBwYXNzZWQ6IHBhc3NlZFxyXG4gICAgfTtcclxuICAgIHJldHVybiByZXdpbmRJbmZvO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhbGxvd1VuZG9MYXN0VHVybigpIHtcclxuICAgIGlmICghYWxsb3dSZXdpbmQpIHtcclxuICAgICAgc2V0QWxsb3dSZXdpbmQodHJ1ZSk7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJhbGxvd3VuZG9cIiwgLy8gYWxsb3cgdW5kbyBsYXN0IHR1cm5cclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMgLy8gd2hvIGlzIGFsbG93aW5nIGl0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGVyZm9ybVJld2luZCgpIHtcclxuICAgIC8qIFJld2luZCB0aGUgbGFzdCBtb3ZlIGFuZCB0YWtlIGl0IG9mZiB0aGUgZW5kIG9mIHRoZSBtb3ZlIGxpc3QgKi9cclxuICAgIGxldCBudW1Nb3ZlcyA9IG1vdmVzLmxlbmd0aDtcclxuICAgIGxldCBsYXN0TW92ZSA9IG1vdmVzW21vdmVzLmxlbmd0aC0xXTtcclxuICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLmxhc3RNb3ZlLnJld2luZEluZm8uc3F1YXJlc107XHJcbiAgICBsZXQgbmV3VXNlZGJ5ID0gWy4uLmxhc3RNb3ZlLnJld2luZEluZm8udXNlZGJ5XTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi5sYXN0TW92ZS5yZXdpbmRJbmZvLnRpbGVzXTtcclxuICAgIGxldCBuZXdQdGlsZXMgPSBsYXN0TW92ZS5ieSA9PT0gXCJQXCIgPyBbLi4ubGFzdE1vdmUucmV3aW5kSW5mby5yYWNrXSA6IFsuLi5wdGlsZXNdO1xyXG4gICAgbGV0IG5ld0d0aWxlcyA9IGxhc3RNb3ZlLmJ5ID09PSBcIkdcIiA/IFsuLi5sYXN0TW92ZS5yZXdpbmRJbmZvLnJhY2tdIDogWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbmV3UmVzY3VlcyA9IGxhc3RNb3ZlLnJld2luZEluZm8ucmVzY3VlcztcclxuICAgIGxldCBuZXdXaG9zZXR1cm4gPSBsYXN0TW92ZS5ieTsgLy8gQmFjayB0byB0aGVpciB0dXJuXHJcbiAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXNdO1xyXG4gICAgbmV3TW92ZXMuc3BsaWNlKG51bU1vdmVzLTEsMSk7XHJcbiAgICBsZXQgbmV3U25hcHNob3QgPSB7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5uZXdTcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4ubmV3VXNlZGJ5XSxcclxuICAgICAgZ3RpbGVzOiBbLi4ubmV3R3RpbGVzXSxcclxuICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXVxyXG4gICAgfTtcclxuICAgIGxldCBuZXdQYXNzZWQgPSBsYXN0TW92ZS5wYXNzZWQ7XHJcbiAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgc2V0UmVzY3VlcyhuZXdSZXNjdWVzKTtcclxuICAgIHNldFBhc3NlZChuZXdQYXNzZWQpO1xyXG4gICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgc2V0U25hcHNob3QobmV3U25hcHNob3QpO1xyXG4gICAgLy8gSnVzdCBzZW5kIGV2ZXJ5dGhpbmcgZXZlbiB0aG91Z2ggc29tZSBjb3VsZCBiZSBoYXJkIGNvZGVkIGluIHByb2Nlc3NNZXNzYWdlIGJ5IG9wcG9uZW50XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJ1bmRvdHVyblwiLCAvLyB1bmRvIGxhc3QgdHVyblxyXG4gICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gdGlsZSBwb29sXHJcbiAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIGd1YXJkcyByYWNrXHJcbiAgICAgICAgc3F1YXJlczogbmV3U3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogbmV3VXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIHN3YXAgbmV2ZXIgZW5kcyB0aGUgZ2FtZSBzbyBnbyB0byBvcHBvbmVudFxyXG4gICAgICAgIHJlc2N1ZXM6IG5ld1Jlc2N1ZXMsIC8vIHJlc2N1ZSBjb3VudFxyXG4gICAgICAgIHBhc3NlZDogbmV3UGFzc2VkLCAvLyB3aGV0aGVyIHByZXZpb3VzIHBsYXkgd2FzIGEgcGFzc1xyXG4gICAgICAgIG1vdmVzOiBuZXdNb3ZlcywgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgc25hcHNob3Q6IG5ld1NuYXBzaG90XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgc2V0UHRpbGVzKFsuLi5zbmFwc2hvdC5wdGlsZXNdKTtcclxuICAgIHNldEd0aWxlcyhbLi4uc25hcHNob3QuZ3RpbGVzXSk7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRSY2QoWy0xLC0xLG5vZGlyZWN0aW9uXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJpc29uZXJQYXNzID0gKCkgPT4ge1xyXG4gICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgIGxldCBuZXdXaG9zZXR1cm4gPSBwYXNzZWQgPyBcIlhcIiA6IFwiR1wiOyAvLyBJZiBib3RoIHBsYXllcnMgcGFzcyB0aGVuIGVuZCB0aGUgZ2FtZSBieSB1c2luZyBcIlhcIlxyXG4gICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICBzZXRQYXNzZWQodHJ1ZSk7XHJcbiAgICBsZXQgbmV3TW92ZSA9IHtieTogXCJQXCIsIHR5cGU6IFwiUEFTU1wifTtcclxuICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBwdGlsZXM6IHNuYXBzaG90LnB0aWxlcywgLy8gcHJpc29uZXJzIHJhY2sgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICB0aWxlczogdGlsZXMsIC8vIHRpbGUgcG9vbCBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICBwYXNzZWQ6IHRydWUsXHJcbiAgICAgICAgbW92ZXM6IG5ld01vdmVzLCAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICByZXNjdWVzOiByZXNjdWVzIC8vIG5vIHJlc2N1ZXMgb24gYSBwYXNzXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ3VhcmRzUGFzcyA9ICgpID0+IHtcclxuICAgIHJlY2FsbFRpbGVzKCk7IC8vIEluIGNhc2UgdGhleSBwdXQgc29tZSB0aWxlcyBvbiB0aGUgYm9hcmQgYmVmb3JlIGNsaWNraW5nIFBhc3NcclxuICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICBsZXQgbmV3V2hvc2V0dXJuID0gcGFzc2VkID8gXCJYXCIgOiBcIlBcIjsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWUgYnkgdXNpbmcgXCJYXCJcclxuICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgc2V0UGFzc2VkKHRydWUpO1xyXG4gICAgbGV0IG5ld01vdmUgPSB7Ynk6IFwiR1wiLCB0eXBlOiBcIlBBU1NcIn07XHJcbiAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgZ3RpbGVzOiBzbmFwc2hvdC5ndGlsZXMsIC8vIGd1YXJkcyByYWNrIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgdGlsZXM6IHRpbGVzLCAvLyB0aWxlIHBvb2wgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgcGFzc2VkOiB0cnVlLFxyXG4gICAgICAgIG1vdmVzOiBuZXdNb3ZlcyAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXF1ZXN0R2FtZURhdGEgPSAoKSA9PiB7XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybiwgLy8gZm9yIGxvYmJ5IHRvIHBpY2sgdXAgdGhpcyBtZXNzYWdlXHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIgLy8gcmVxdWVzdCBnYW1lIGRhdGFcclxuICAgICAgfSlcclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAocHJpc29uZXJzT3JHdWFyZHMgIT09IHdob3NldHVybikge3JldHVybjt9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIiA/IGVuZFByaXNvbmVyc1R1cm4oKSA6IGVuZEd1YXJkc1R1cm4oKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICByZWNhbGxUaWxlcygpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbGV0dGVydGVzdCA9IC9eW0EtWmEtelxcP10kLzsgLy8gc2luZ2xlIGxldHRlciBvciBxdWVzdGlvbiBtYXJrIGtleSBwcmVzc2VkXHJcbiAgICBpZiAoZXZlbnQua2V5Lm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgIGxldCBsZXR0ZXIgPSBldmVudC5rZXkudG9VcHBlckNhc2UoKTtcclxuICAgICAgbGV0IHJhY2sgPSB3aG9zZXR1cm4gPT09IFwiUFwiID8gcHRpbGVzIDogZ3RpbGVzO1xyXG4gICAgICBsZXQgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKGxldHRlcik7XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKFwiP1wiKTsgLy8gVXNlIHRoZSBibGFuayBpZiB0aGV5IGhhdmUgb25lXHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5ld1NlbGVjdGlvbiA+IC0xKSB7IC8vIFByZXNzZWQgbGV0dGVyIGlzIG9uIHRoZSByYWNrXHJcbiAgICAgICAgbGV0IHJvdyA9IHJjZFswXTtcclxuICAgICAgICBsZXQgY29sID0gcmNkWzFdO1xyXG4gICAgICAgIGxldCBkaXIgPSByY2RbMl07XHJcbiAgICAgICAgaWYgKHJvdyA+LTEgJiYgY29sID4gLTEgJiYgZGlyICE9PSBub2RpcmVjdGlvbikgeyAvLyByb3csIGNvbCwgZGlyIGFyZSBzZXQgdG8gYWNjZXB0IGtleXN0cm9rZVxyXG4gICAgICAgICAgLy8gTmVlZCB0byBmaWd1cmUgb3V0IG5leHQgc3FhdXJlIHRvIGF1dG8tcGxhY2UgYSB0aWxlXHJcbiAgICAgICAgICBsZXQgbmV3UmNkID0gcmNkO1xyXG4gICAgICAgICAgaWYgKGRpciA9PT0gXCJyXCIpIHsgLy8gcGxheWluZyByaWdodHdhcmRzXHJcbiAgICAgICAgICAgIGxldCBuZXdjID0gLTE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSBjb2wgKyAxOyBjIDwgZWRnZSArIDEgJiYgbmV3YyA9PT0gLTE7IGMrKykge1xyXG4gICAgICAgICAgICAgIGlmIChzcXVhcmVzW3Jvd11bY10gPT09IHNxdWFyZXVudXNlZCkge25ld2MgPSBjO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmV3YyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsbm9kaXJlY3Rpb25dO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG5ld1JjZCA9IFtyb3csIG5ld2MsIFwiclwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChkaXIgPT09IFwiZFwiKSB7IC8vIHBsYXlpbmcgZG93bndhcmRzXHJcbiAgICAgICAgICAgIGxldCBuZXdyID0gLTE7XHJcbiAgICAgICAgICAgIGxldCBudW1yb3dzID0gKHJhY2tzaXplKjIpKzE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSByb3cgKyAxOyByIDwgbnVtcm93cyAmJiBuZXdyID09PSAtMTsgcisrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZXNbcl1bY29sXSA9PT0gc3F1YXJldW51c2VkKSB7bmV3ciA9IHI7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZXdyID09PSAtMSkge1xyXG4gICAgICAgICAgICAgIG5ld1JjZCA9IFstMSwtMSxub2RpcmVjdGlvbl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gW25ld3IsIGNvbCwgXCJkXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiICYmIGN1cnJlbnRjb29yZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBTYW1lIGFzIGNsaWNraW5nIG9uIGEgcGxheWVkLXRoaXMtbW92ZSB0aWxlIGluIHRlcm1zIG9mIHJldHVybmluZyB0aGUgdGlsZSB0byB0aGUgcmFja1xyXG4gICAgICAvLyBIb3dldmVyIHdlIGFsc28gd2FudCB0byBzZXQgdXAgcmNkIHNvIHRoZXkgY2FuIHByZXNzIHRoZSBrZXkgdGhleSBtZWFudCBhbmQgY29udGludWVcclxuICAgICAgbGV0IGNvb3JkID0gY3VycmVudGNvb3Jkc1tjdXJyZW50Y29vcmRzLmxlbmd0aCAtIDFdOyAvLyB0aWxlIHRvIHJldHVybiB0byByYWNrXHJcbiAgICAgIGxldCBuZXdDdXJyZW50Y29vcmRzID0gWy4uLmN1cnJlbnRjb29yZHNdO1xyXG4gICAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld1VzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgICAgbGV0IG5ld1JjZCA9IFstMSwtMSxub2RpcmVjdGlvbl07XHJcbiAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgIG5ld0N1cnJlbnRjb29yZHMuc3BsaWNlKGN1cnJlbnRjb29yZHMubGVuZ3RoLTEsMSk7XHJcbiAgICAgIGxldCByb3cgPSBwYXJzZUludChjb29yZC5zcGxpdChcIi1cIilbMF0pO1xyXG4gICAgICBsZXQgY29sID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgbGV0IHJldHVybmVkVGlsZSA9IHNxdWFyZXNbcm93XVtjb2xdO1xyXG4gICAgICBpZiAod2hvc2V0dXJuID09PSBcIlBcIikge1xyXG4gICAgICAgIG5ld1B0aWxlcy5wdXNoKHJldHVybmVkVGlsZSk7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3UHRpbGVzLmxlbmd0aC0xO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0d0aWxlcy5wdXNoKHJldHVybmVkVGlsZSk7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3R3RpbGVzLmxlbmd0aC0xO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1VzZWRieVtyb3ddW2NvbF0gPSB1c2VkYnlub29uZTtcclxuICAgICAgbmV3U3F1YXJlc1tyb3ddW2NvbF0gPSBzcXVhcmV1bnVzZWQ7XHJcbiAgICAgIGxldCBkaXIgPSByY2RbMl07XHJcbiAgICAgIGlmIChkaXIgIT09IG5vZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgLy8gZGlyZWN0aW9uIHdhcyBzZXQgc28ga2VlcCBpdFxyXG4gICAgICAgIG5ld1JjZCA9IFtyb3csY29sLGRpcl07XHJcbiAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSAtMTsgLy8gaWYgdGhleSBiYWNrc3BhY2UgYWxsIHRoZSBsZXR0ZXJzIG9mZiBsZWF2ZSByYWNrIHRpbGUgdW5zZWxlY3RlZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgICBzZXRSY2QobmV3UmNkKTtcclxuICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwcmlzb25icmVha1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTIgcGJHYW1laWRcIj5cclxuICAgICAgICAgIEdhbWUgaWQ6IHtnYW1laWR9PGJyPjwvYnI+XHJcbiAgICAgICAgICBOaWNrbmFtZToge25pY2tuYW1lfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTggcGJ0aXRsZVwiPlxyXG4gICAgICAgICAgUHJpc29uIEJyZWFrXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJ1bl9jaXJjbGU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMiBwYmhvbWVsaW5rXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi4uLy4uL1wifT5cclxuICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgT3Bwb25lbnQ6IHtvcHBuYW1lfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVyT3V0ZXJTZWN0aW9uXCI+XHJcbiAgICAgICAgICA8UHJpc29uZXJzXHJcbiAgICAgICAgICAgIHB0aWxlcz17cHRpbGVzfVxyXG4gICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kUHJpc29uZXJzVHVybigpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcFByaXNvbmVyc1RpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gcHJpc29uZXJQYXNzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tVbmRvTGFzdFBsYXk9eygpID0+IHBlcmZvcm1SZXdpbmQoKX1cclxuICAgICAgICAgICAgb25DbGlja0FsbG93VW5kbz17KCkgPT4gYWxsb3dVbmRvTGFzdFR1cm4oKX1cclxuICAgICAgICAgICAgcmVzY3Vlcz17cmVzY3Vlc31cclxuICAgICAgICAgICAgcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICAgICAgICBtb3Zlcz17bW92ZXN9XHJcbiAgICAgICAgICAgIGFsbG93UmV3aW5kPXthbGxvd1Jld2luZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGJCb2FyZFBsdXNVbmRlcmJvYXJkXCI+XHJcbiAgICAgICAgICB7cHJpc29uZXJzT3JHdWFyZHMgPT09IHdob3NldHVybiA/XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzPXtzcXVhcmVzfVxyXG4gICAgICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhyaSwgY2kpID0+IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socmksIGNpLCAtMSxudWxsKX1cclxuICAgICAgICAgICAgICAgIHJhY2tzaXplPXtyYWNrc2l6ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgIHNxdWFyZXM9e3NxdWFyZXN9XHJcbiAgICAgICAgICAgICAgICB1c2VkYnk9e3VzZWRieX1cclxuICAgICAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICByYWNrc2l6ZT17cmFja3NpemV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVW5kZXJib2FyZFwiPlxyXG4gICAgICAgICAgICB7d2hvc2V0dXJuID09PSBcIlhcIiA/XHJcbiAgICAgICAgICAgICAgPGgxPkdhbWUgT3ZlciE8L2gxPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPHA+e2pva2VzW2pva2VpbmRleF19PC9wPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVyT3V0ZXJTZWN0aW9uXCI+XHJcbiAgICAgICAgICA8R3VhcmRzXHJcbiAgICAgICAgICAgIGd0aWxlcz17Z3RpbGVzfVxyXG4gICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlR3VhcmRUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kR3VhcmRzVHVybigpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcEd1YXJkc1RpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gZ3VhcmRzUGFzcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVW5kb0xhc3RQbGF5PXsoKSA9PiBwZXJmb3JtUmV3aW5kKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tBbGxvd1VuZG89eygpID0+IGFsbG93VW5kb0xhc3RUdXJuKCl9XHJcbiAgICAgICAgICAgIHByaXNvbmVyc09yR3VhcmRzPXtwcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICAgICAgbW92ZXM9e21vdmVzfVxyXG4gICAgICAgICAgICBhbGxvd1Jld2luZD17YWxsb3dSZXdpbmR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiVGlsZXNNb3Zlc0NoYXRPdXRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGJUaWxlQW5kTW92ZXNPdXRlclwiPlxyXG4gICAgICAgICAgICAgIDxTaG93VW5zZWVuVGlsZXMgdGlsZXM9e3RpbGVzfSBvdGhlcnRpbGVzPXtwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyBndGlsZXMgOiBwdGlsZXN9Lz5cclxuICAgICAgICAgICAgICA8U2hvd01vdmVzIG1vdmVzPXttb3Zlc30vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICA8Q2hhdCBnYW1laWQ9e2dhbWVpZH0gY2xpZW50PXtjbGllbnR9IG5pY2tuYW1lPXtuaWNrbmFtZX0gbXNncz17Y2hhdG1zZ3N9IHNldE1zZ3M9e3NldENoYXRtc2dzfSBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2hvd1Vuc2VlblRpbGVzID0gKHByb3BzKSA9PiB7IC8vIHRpbGVzID0gdGlsZXMgaW4gYmFnLCBvdGhlcnRpbGVzID0gdGlsZXMgb24gb3RoZXIgcGxheWVycyByYWNrXHJcbiAgbGV0IHVuc2VlblRpbGVzID0gWy4uLnByb3BzLnRpbGVzLCAuLi5wcm9wcy5vdGhlcnRpbGVzXTtcclxuICAvLyBTb3J0IHRoZSB0aWxlcyB0aGVuIHB1dCB0aGUgYmxhbmtzIGF0IHRoZSBlbmRcclxuICB1bnNlZW5UaWxlcy5zb3J0KCk7XHJcbiAgaWYgKHVuc2VlblRpbGVzWzBdID09PSBcIj9cIikge1xyXG4gICAgICB1bnNlZW5UaWxlcy5zcGxpY2UoMCwxKVxyXG4gICAgICB1bnNlZW5UaWxlcy5wdXNoKFwiP1wiKVxyXG4gIH1cclxuICBpZiAodW5zZWVuVGlsZXNbMF0gPT09IFwiP1wiKSB7XHJcbiAgICAgIHVuc2VlblRpbGVzLnNwbGljZSgwLDEpXHJcbiAgICAgIHVuc2VlblRpbGVzLnB1c2goXCI/XCIpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVwb29sVGl0bGVcIj5USUxFUzwvZGl2PlxyXG4gICAgICB7dW5zZWVuVGlsZXMubWFwKCh0LCB0aSkgPT4gKFxyXG4gICAgICAgIDxzcGFuIGtleT17YHRpbGUke3RpfWB9PlxyXG4gICAgICAgICAge3RpID4gMCAmJiB0ICE9PSB1bnNlZW5UaWxlc1t0aSAtIDFdID8gKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYlRpbGVwb29sRGl2aWRlclwiPjwvc3Bhbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0ID09PSBcIlFcIiA/IFwicGJUaWxlcG9vbFRpbGUgdVwiIDogXCJwYlRpbGVwb29sVGlsZVwifT57dH08L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaG93TW92ZXMgPSAocHJvcHMpID0+IHsgLy8gc2hvdyBtb3ZlcyBtYWRlXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGJNb3Zlc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiTW92ZXNUaXRsZVwiPk1PVkVTPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJNb3Zlc1Njcm9sbGFibGVcIiBpZD1cIlNjcm9sbGFibGVNb3Zlc1wiPlxyXG4gICAgICAgIHtwcm9wcy5tb3Zlcy5tYXAoKG0sIG1pKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17YG1vdmUke21pfWB9IGNsYXNzTmFtZT1cInBiTW92ZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYk1vdmUgYnlcIj57bS5ieX08L3NwYW4+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgcGJNb3ZlICR7bS50eXBlfWB9PlxyXG4gICAgICAgICAgICAgIHttLnR5cGUgPT09IFwiUExBWVwiID9cclxuICAgICAgICAgICAgICAgIDw+e20ucG9zfSB7bS5tYWlud29yZC5yZXBsYWNlKFwiUVwiLFwiUXVcIil9XHJcbiAgICAgICAgICAgICAgICAgIHttLmV4dHJhd29yZHM/Lm1hcCgodykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAsJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dy5yZXBsYWNlKFwiUVwiLFwiUXVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmNvbnN0IFJhY2tUaWxlID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy50aWxlY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICB7cHJvcHMudGlsZXZhbHVlfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEZpbmlzaFR1cm5CdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNoZWNrPC9pPiZuYnNwO0ZpbmlzaCBUdXJuPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRpbGVSZWNhbGxCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnVuZG88L2k+Jm5ic3A7UmVjYWxsIFRpbGVzPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRpbGVFeGNoYW5nZUJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2FjaGVkPC9pPiZuYnNwO1N3YXAgVGlsZXM8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUGFzc1BsYXlCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPm5vdF9pbnRlcmVzdGVkPC9pPiZuYnNwO1Bhc3MgVHVybjwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBBbGxvd1VuZG9MYXN0UGxheSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cmVwb3J0X3Byb2JsZW08L2k+XHJcbiAgICAgICAgJm5ic3A7QWxsb3cgVW5kbyBUdXJuXHJcbiAgICAgICAge3Byb3BzLmFscmVhZHlBbGxvd2VkID9cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dDJcIj5BbGxvdyB1bmRvIGlzIG5vdyBlbmFibGVkPC9zcGFuPlxyXG4gICAgICAgIDpcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uU2V2ZXJlVGV4dDJcIj5DbGljayB0byBsZXQgb3Bwb25lbnQgdW5kbzwvc3Bhbj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgVW5kb0xhc3RQbGF5ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25TZXZlcmVcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25TZXZlcmVUZXh0XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5kZWxldGVfZm9yZXZlcjwvaT5cclxuICAgICAgICAmbmJzcDtVbmRvIE15IFR1cm5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblNldmVyZVRleHQyXCI+T3Bwb25lbnQgaGFzIGFsbG93ZWQgdW5kbzwvc3Bhbj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBQcmlzb25lcnMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByZW5kZXJUaWxlID0gcmVuZGVyUGxheWVyVGlsZShwcm9wcyk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckZyZWVkUHJpc29uZXJzID0gKGNvdW50KSA9PiB7XHJcbiAgICBsZXQgZHVtYiA9IEFycmF5KGNvdW50KS5maWxsKFwibm9uc2Vuc2VcIik7XHJcbiAgICByZXR1cm4gZHVtYi5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICA8c3BhbiBrZXk9e3ZhbHVlICsgU3RyaW5nKGluZGV4KX0gZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJJJ20gZnJlZSEgSSdtIGZyZWUhXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwYlJlc2N1ZWVcIlxyXG4gICAgICAgICAgc3JjPVwiL2JyZWFrZnJlZS5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiSSdtIGZyZWUhIEknbSBmcmVlIVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICApKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllcklubmVyU2VjdGlvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHBiUGxheWVyVGl0bGUgJHtwcm9wcy5wcmlzb25lcnNPckd1YXJkc31gfT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJ1bl9jaXJjbGU8L2k+Jm5ic3A7UFJJU09ORVJTJm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ydW5fY2lyY2xlPC9pPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICB7cHJvcHMucHRpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICByZW5kZXJUaWxlKFxyXG4gICAgICAgICAgICBwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnNlbGVjdGlvbiA9PT0gdGlcclxuICAgICAgICAgICAgPyB0ID09PSBcIlFcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyBcInBiVGlsZU9uUmFjayBTZWxlY3RlZCBQIHVcIiA6IFwicGJUaWxlT25SYWNrIFNlbGVjdGVkIFBcIlxyXG4gICAgICAgICAgICA6IHQgPT09IFwiUVwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IFwicGJUaWxlT25SYWNrIFVuc2VsZWN0ZWQgUCB1XCIgOiAgXCJwYlRpbGVPblJhY2sgVW5zZWxlY3RlZCBQXCIsXHJcbiAgICAgICAgICAgIHRpLFxyXG4gICAgICAgICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyB0IDogXCIqXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gXHJcbiAgICAgICAgc2hvd0FjdGlvbkJ1dHRvbnMocHJvcHMpXHJcbiAgICAgIDpcclxuICAgICAgICBwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiAmJiBwcm9wcy5tb3Zlcy5sZW5ndGggPiAwICYmIHByb3BzLmFsbG93UmV3aW5kID9cclxuICAgICAgICAgIHNob3dBY3Rpb25CdXR0b25VbmRvTGFzdFBsYXkocHJvcHMpXHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgPD48Lz5cclxuICAgICAgfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUmVzY3Vlc01hZGVcIj5cclxuICAgICAgICBSZXNjdWVzIG1hZGU6IHtwcm9wcy5yZXNjdWVzfVxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIHtyZW5kZXJGcmVlZFByaXNvbmVycyhwcm9wcy5yZXNjdWVzKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgR3VhcmRzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyVGlsZSA9IHJlbmRlclBsYXllclRpbGUocHJvcHMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllcklubmVyU2VjdGlvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNlY3VyaXR5PC9pPiZuYnNwO0dVQVJEUyZuYnNwOzxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2VjdXJpdHk8L2k+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgIHtwcm9wcy5ndGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgIHJlbmRlclRpbGUoXHJcbiAgICAgICAgICAgIHByb3BzLndob3NldHVybiA9PT0gXCJHXCIgJiYgcHJvcHMuc2VsZWN0aW9uID09PSB0aVxyXG4gICAgICAgICAgICAgID8gdCA9PT0gXCJRXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID8gXCJwYlRpbGVPblJhY2sgU2VsZWN0ZWQgRyB1XCIgOiBcInBiVGlsZU9uUmFjayBTZWxlY3RlZCBHXCJcclxuICAgICAgICAgICAgICA6IHQgPT09IFwiUVwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IFwicGJUaWxlT25SYWNrIFVuc2VsZWN0ZWQgRyB1XCIgOiAgXCJwYlRpbGVPblJhY2sgVW5zZWxlY3RlZCBHXCIsXHJcbiAgICAgICAgICAgIHRpLFxyXG4gICAgICAgICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyB0IDogXCIqXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJHXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID8gXHJcbiAgICAgICAgc2hvd0FjdGlvbkJ1dHRvbnMocHJvcHMpXHJcbiAgICAgIDpcclxuICAgICAgICBwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiAmJiBwcm9wcy5tb3Zlcy5sZW5ndGggPiAwICYmIHByb3BzLmFsbG93UmV3aW5kICA/XHJcbiAgICAgICAgICBzaG93QWN0aW9uQnV0dG9uVW5kb0xhc3RQbGF5KHByb3BzKVxyXG4gICAgICAgIDpcclxuICAgICAgICAgIDw+PC8+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQbGF5ZXJUaWxlKHByb3BzKSB7XHJcbiAgcmV0dXJuICh0aWxlY2xhc3MsIHRpbGVpbmRleCwgdGlsZXZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aWxldmFsdWUgIT09IFwiKlwiID8gLy8gdGhpcyB0aWxlIGlzIGZvciB0aGlzIHBsYXllciwgYWxsb3cgY2xpY2tcclxuICAgICAgICA8UmFja1RpbGVcclxuICAgICAgICAgIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9XHJcbiAgICAgICAgICB0aWxlY2xhc3M9e3RpbGVjbGFzc31cclxuICAgICAgICAgIHRpbGV2YWx1ZT17dGlsZXZhbHVlfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljayh0aWxlaW5kZXgpfSAvPlxyXG4gICAgICAgIDogLy8gdGhpcyB0aWxlIGlzIGZvciBvcHBvbmVudCwgZG8gbm90IGFsbG93IGNsaWNrXHJcbiAgICAgICAgPFJhY2tUaWxlXHJcbiAgICAgICAgICBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfVxyXG4gICAgICAgICAgdGlsZWNsYXNzPXt0aWxlY2xhc3N9XHJcbiAgICAgICAgICB0aWxldmFsdWU9e3RpbGV2YWx1ZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5hbGVydChcIk5vIHBlZWtpbmchXCIpfSAvPlxyXG4gICAgKTtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93QWN0aW9uQnV0dG9ucyhwcm9wcykge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uRGl2XCI+XHJcbiAgICA8cD5cclxuICAgICAgPEZpbmlzaFR1cm5CdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja0ZpbmlzaFR1cm4oKX0gLz5cclxuICAgIDwvcD5cclxuICAgIDxwPlxyXG4gICAgICA8VGlsZVJlY2FsbEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZVJlY2FsbCgpfSAvPlxyXG4gICAgPC9wPlxyXG4gICAgPHA+XHJcbiAgICAgIDxUaWxlRXhjaGFuZ2VCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVFeGNoYW5nZSgpfSAvPlxyXG4gICAgPC9wPlxyXG4gICAgPHA+XHJcbiAgICAgIDxQYXNzUGxheUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrUGFzc1BsYXkoKX0gLz5cclxuICAgIDwvcD5cclxuICAgIHtwcm9wcy5tb3Zlcy5sZW5ndGggPiAwID9cclxuICAgICAgICAgIHNob3dBY3Rpb25CdXR0b25BbGxvd1VuZG8ocHJvcHMpXHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgPD48Lz5cclxuICAgIH1cclxuICA8L2Rpdj47XHJcbn1cclxuZnVuY3Rpb24gc2hvd0FjdGlvbkJ1dHRvbkFsbG93VW5kbyhwcm9wcykge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uRGl2XCI+XHJcbiAgICA8cD5cclxuICAgICAgPEFsbG93VW5kb0xhc3RQbGF5IG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tBbGxvd1VuZG8oKX0gYWxyZWFkeUFsbG93ZWQ9e3Byb3BzLmFsbG93UmV3aW5kfS8+XHJcbiAgICA8L3A+XHJcbiAgPC9kaXY+XHJcbn1cclxuZnVuY3Rpb24gc2hvd0FjdGlvbkJ1dHRvblVuZG9MYXN0UGxheShwcm9wcykge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uRGl2XCI+XHJcbiAgICA8cD5cclxuICAgICAgPFVuZG9MYXN0UGxheSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVW5kb0xhc3RQbGF5KCl9IC8+XHJcbiAgICA8L3A+XHJcbiAgPC9kaXY+XHJcbn1cclxuY29uc3QgQ2hhdCA9ICh7Z2FtZWlkLCBjbGllbnQsIG5pY2tuYW1lLCBtc2dzLCBzZXRNc2dzLCBwcmlzb25lcnNPckd1YXJkc30pID0+IHtcclxuICBjb25zdCBbbmV4dG1zZywgc2V0TmV4dG1zZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiBcclxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgbmV4dG1zZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBuZXdNc2dzID0gWy4uLm1zZ3MsIHtmcm9tOiBuaWNrbmFtZSwgbXNnOiBuZXh0bXNnfV1cclxuICAgICAgbGV0IHNlbmRtc2cgPSBuZXh0bXNnO1xyXG4gICAgICBzZXRNc2dzKG5ld01zZ3MpO1xyXG4gICAgICBzZXROZXh0bXNnKCcnKTtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImNoYXRcIiwgLy8gc2VuZCBjaGF0IG1lc3NhZ2VcclxuICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsIC8vIHdobyBzZW50IGl0XHJcbiAgICAgICAgICBzZW5kbXNnOiBzZW5kbXNnIC8vIHRoZSBtZXNzYWdlIHR5cGVkIGluIHRoZSBjaGF0XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gbGV0IGNoYXJ0ZXN0ID0gL15bQS1aYS16MC05IFxcLixcXChcXClcXD86ISdcIl0kLzsgLy8gQWxsb3cgbGV0dGVyLCBudW1iZXIsIHNwYWNlLCBwZXJpb2QsIGNvbW1hLCByb3VuZCBicmFja2V0cywgcXVlc3Rpb24gbWFyaywgY29sb24sIGV4Y2xhbWF0aW9uIG1hcmssIHF1b3RlLCBkb3VibGUgcXVvdGVcclxuICAgIC8vIGlmIChldmVudC5rZXkubWF0Y2goY2hhcnRlc3QpKSB7XHJcbiAgICAvLyAgIGxldCBuZXdOZXh0bXNnID0gbmV4dG1zZyArIGV2ZW50LmtleTtcclxuICAgIC8vICAgc2V0TmV4dG1zZyhuZXdOZXh0bXNnKTtcclxuICAgIC8vIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiYgbmV4dG1zZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBuZXdOZXh0bXNnID0gbmV4dG1zZy5zbGljZSgwLG5leHRtc2cubGVuZ3RoLTEpO1xyXG4gICAgICBzZXROZXh0bXNnKG5ld05leHRtc2cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGJDaGF0XCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQ2hhdFRpdGxlXCI+Q0hBVDwvc3Bhbj5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInBiQ2hhdFRhYmxlXCI+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge21zZ3MuZmlsdGVyKCh2YWx1ZSwgaW5kZXgpID0+IG1zZ3MubGVuZ3RoIC0gaW5kZXggPCAxNSkubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17YENoYXRNZXNzYWdlJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJDaGF0RnJvbVwiPnt2YWx1ZS5mcm9tfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBiQ2hhdE1zZ1wiPnt2YWx1ZS5tc2d9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjJcIj5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtuZXh0bXNnID09PSBcIlwiID8gXCJwYkNoYXRJbnB1dEVtcHR5XCIgOiBcInBiQ2hhdElucHV0XCJ9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmV4dG1zZ0lucHV0QXJlYVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV4dG1zZ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldE5leHRtc2coZS50YXJnZXQudmFsdWUpO319XHJcbiAgICAgICAgICAgICAgICBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoZWxlbWVudGlkKSA9PiB7XHJcbiAgY29uc3QgdGhlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRpZCk7XHJcbiAgdGhlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGVFbGVtZW50LnNjcm9sbEhlaWdodDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=