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
/* harmony import */ var _createGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createGame */ "./pages/fyb/createGame.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\fyb\\lobby.js",
    _s = $RefreshSig$();

 //import Link from "next/link";




const Lobby = ({
  ismobile,
  setWhereto,
  client,
  thisisme,
  setParticipant,
  wsmessage,
  nickname,
  setNickname,
  gameid,
  setGameid
}) => {
  _s();

  const {
    0: snat,
    1: setSnat
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Welcome!');
  const {
    0: gamelist,
    1: setGamelist
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: gotNickname,
    1: setGotNickname
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: mainAction,
    1: setMainAction
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let msg = wsmessage;
    if (msg !== '') processLobbyMessage(msg);
  }, [wsmessage]);

  function processLobbyMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.type === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB) {
      if (messageData.func === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.S2C_FUNC_GAMELIST) {
        setGamelist(messageData.gamelist);
      } else if (messageData.func === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.S2C_FUNC_GAMEDATA) {
        /*
        If server sends me a game then it has decided I am a player but I have not marked myself as a player yet
        If I had marked mysefl as a player then fryyourbrain.cs would have called <Game> not <Lobby>
        I do not mark myself as a player when sending create/join/rejoin in case there is a blip in the server
        */
        if (messageData.thisisme === thisisme) {
          // Make sure this game is for me
          setGameid(messageData.game.gameid);
          setSnat(messageData.snat);
          setParticipant(_lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.PARTY_TYPE_PLAYER);
        } else {
          setSnat(`Why am I getting game data from ${messageData.nickname} for game ${messageData.gameid}?`);
        }
      } else if (messageData.func === 'gameidtaken') {
        setSnat('That game ID is already taken');
      } else if (messageData.func === 'gameidunknown') {
        setSnat('That game ID is not being used');
      } else if (messageData.func === 'gamefull') {
        setSnat('That game is full');
      } else if (messageData.func === 'notinthatgame') {
        setSnat('You are not in that game');
      } else if (messageData.func === 'otherclientfound') {
        setSnat('That nickname is already in that game');
      } else {
        setSnat(`Unhandled message: ${message}`);
      }
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `fybLobby ${ismobile === "Y" ? "mobile" : ""}`,
    id: "fybLobby",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybHeaderDiv",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "h2",
        children: "Fry Your Brain"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
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
          lineNumber: 54,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: snat
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, undefined), !gotNickname && getNickname(nickname, setNickname, setGotNickname), gotNickname && displayGamelist(gamelist, client, thisisme, nickname), gotNickname && !mainAction && getMainAction(setMainAction), gotNickname && mainAction === 'C' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_createGame__WEBPACK_IMPORTED_MODULE_3__.default, {
      client: client,
      thisisme: thisisme,
      nickname: nickname,
      gameid: gameid,
      setGameid: setGameid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fivepxdivider",
      children: "\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, undefined);
};

_s(Lobby, "nfotbJKDxGqOnJ3FbBBCX9/oEHQ=");

_c = Lobby;

function displayGamelist(gamelist, client, thisisme, nickname) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "fybGamelist",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Game List:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "Ppl"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "Pts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "By"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "State"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: gamelist.map((game, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: game.gameid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [game.players.length, "/", game.numPlayers]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: game.goal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: game.players[0].nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: isPlayerInArray(game.players, nickname) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "submit",
              onClick: () => {
                sendRejoinGameRequest(client, thisisme, game.gameid, nickname);
              },
              children: "REJOIN"
            }, `rejoinButton${index}`, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 37
            }, this) : game.players.length < game.numPlayers ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "submit",
              onClick: () => {
                sendJoinGameRequest(client, thisisme, game.gameid, nickname);
              },
              children: "JOIN"
            }, `joinButton${index}`, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 37
            }, this) : 'In progress'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 12
  }, this);
}

function getNickname(nickname, setNickname, setGotNickname) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Nickname:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "nickname",
        value: nickname,
        onChange: e => {
          setNickname(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }, this), nickname && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "fybLobbyButton",
        type: "submit",
        onClick: () => {
          let trimmed = nickname.trim();
          setNickname(trimmed);
          setGotNickname(true);
        },
        children: "SUBMIT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 22
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 12
  }, this);
}

function getMainAction(setMainAction) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
      lineNumber: 155,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 154,
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

function isPlayerInArray(players, nickname) {
  let found = false;

  for (let i = 0; i < players.length; i++) {
    if (players[i].nickname === nickname) {
      found = true;
    }
  }

  return found;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2xvYmJ5LmpzIl0sIm5hbWVzIjpbIkxvYmJ5IiwiaXNtb2JpbGUiLCJzZXRXaGVyZXRvIiwiY2xpZW50IiwidGhpc2lzbWUiLCJzZXRQYXJ0aWNpcGFudCIsIndzbWVzc2FnZSIsIm5pY2tuYW1lIiwic2V0Tmlja25hbWUiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJzbmF0Iiwic2V0U25hdCIsInVzZVN0YXRlIiwiZ2FtZWxpc3QiLCJzZXRHYW1lbGlzdCIsImdvdE5pY2tuYW1lIiwic2V0R290Tmlja25hbWUiLCJtYWluQWN0aW9uIiwic2V0TWFpbkFjdGlvbiIsInVzZUVmZmVjdCIsIm1zZyIsInByb2Nlc3NMb2JieU1lc3NhZ2UiLCJtZXNzYWdlIiwibWVzc2FnZURhdGEiLCJKU09OIiwicGFyc2UiLCJ0eXBlIiwiYyIsImZ1bmMiLCJnYW1lIiwiZ2V0Tmlja25hbWUiLCJkaXNwbGF5R2FtZWxpc3QiLCJnZXRNYWluQWN0aW9uIiwibWFwIiwiaW5kZXgiLCJwbGF5ZXJzIiwibGVuZ3RoIiwibnVtUGxheWVycyIsImdvYWwiLCJpc1BsYXllckluQXJyYXkiLCJzZW5kUmVqb2luR2FtZVJlcXVlc3QiLCJzZW5kSm9pbkdhbWVSZXF1ZXN0IiwiZSIsInRhcmdldCIsInZhbHVlIiwidHJpbW1lZCIsInRyaW0iLCJzZW5kIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImZvdW5kIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBQ0MsVUFBRDtBQUFXQyxZQUFYO0FBQXVCQyxRQUF2QjtBQUErQkMsVUFBL0I7QUFBeUNDLGdCQUF6QztBQUF5REMsV0FBekQ7QUFBb0VDLFVBQXBFO0FBQThFQyxhQUE5RTtBQUEyRkMsUUFBM0Y7QUFBbUdDO0FBQW5HLENBQUQsS0FBbUg7QUFBQTs7QUFDN0gsUUFBTTtBQUFB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WUFBUSxFQUFFQSxRQUxGO0FBTVIwQyxhQUFTLEVBQUVDLElBQUksQ0FBQ0MsR0FBTDtBQU5ILEdBQVo7QUFRSDs7QUFFRCxTQUFTWCxlQUFULENBQXlCSixPQUF6QixFQUFrQzdCLFFBQWxDLEVBQTRDO0FBQ3hDLE1BQUk2QyxLQUFLLEdBQUcsS0FBWjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdqQixPQUFPLENBQUNDLE1BQTVCLEVBQW9DZ0IsQ0FBQyxFQUFyQyxFQUF5QztBQUNyQyxRQUFJakIsT0FBTyxDQUFDaUIsQ0FBRCxDQUFQLENBQVc5QyxRQUFYLEtBQXdCQSxRQUE1QixFQUFzQztBQUNsQzZDLFdBQUssR0FBRyxJQUFSO0FBQ0g7QUFDSjs7QUFDRCxTQUFPQSxLQUFQO0FBQ0g7O0FBRUQsK0RBQWVwRCxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk3MmY3OTU3YTU4ZGY0OGNjMzc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL2ltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvZnliL2NvbnN0YW50cyc7XHJcbmltcG9ydCBDcmVhdGVHYW1lIGZyb20gXCIuL2NyZWF0ZUdhbWVcIjtcclxuXHJcbmNvbnN0IExvYmJ5ID0gKHtpc21vYmlsZSwgc2V0V2hlcmV0bywgY2xpZW50LCB0aGlzaXNtZSwgc2V0UGFydGljaXBhbnQsIHdzbWVzc2FnZSwgbmlja25hbWUsIHNldE5pY2tuYW1lLCBnYW1laWQsIHNldEdhbWVpZH0pID0+IHtcclxuICAgIGNvbnN0IFtzbmF0LCBzZXRTbmF0XSA9IHVzZVN0YXRlKCdXZWxjb21lIScpO1xyXG4gICAgY29uc3QgW2dhbWVsaXN0LCBzZXRHYW1lbGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZ290Tmlja25hbWUsIHNldEdvdE5pY2tuYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFttYWluQWN0aW9uLCBzZXRNYWluQWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0xvYmJ5TWVzc2FnZShtc2cpO1xyXG4gICAgfSxbd3NtZXNzYWdlXSk7XHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzTG9iYnlNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09PSBjLkNMSUVOVF9UWVBFX0ZZQikge1xyXG4gICAgICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gYy5TMkNfRlVOQ19HQU1FTElTVCkge1xyXG4gICAgICAgICAgICAgICAgc2V0R2FtZWxpc3QobWVzc2FnZURhdGEuZ2FtZWxpc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IGMuUzJDX0ZVTkNfR0FNRURBVEEpIHtcclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBJZiBzZXJ2ZXIgc2VuZHMgbWUgYSBnYW1lIHRoZW4gaXQgaGFzIGRlY2lkZWQgSSBhbSBhIHBsYXllciBidXQgSSBoYXZlIG5vdCBtYXJrZWQgbXlzZWxmIGFzIGEgcGxheWVyIHlldFxyXG4gICAgICAgICAgICAgICAgSWYgSSBoYWQgbWFya2VkIG15c2VmbCBhcyBhIHBsYXllciB0aGVuIGZyeXlvdXJicmFpbi5jcyB3b3VsZCBoYXZlIGNhbGxlZCA8R2FtZT4gbm90IDxMb2JieT5cclxuICAgICAgICAgICAgICAgIEkgZG8gbm90IG1hcmsgbXlzZWxmIGFzIGEgcGxheWVyIHdoZW4gc2VuZGluZyBjcmVhdGUvam9pbi9yZWpvaW4gaW4gY2FzZSB0aGVyZSBpcyBhIGJsaXAgaW4gdGhlIHNlcnZlclxyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS50aGlzaXNtZSA9PT0gdGhpc2lzbWUpIHsgLy8gTWFrZSBzdXJlIHRoaXMgZ2FtZSBpcyBmb3IgbWVcclxuICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQobWVzc2FnZURhdGEuZ2FtZS5nYW1laWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNuYXQobWVzc2FnZURhdGEuc25hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFydGljaXBhbnQoYy5QQVJUWV9UWVBFX1BMQVlFUik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNuYXQoYFdoeSBhbSBJIGdldHRpbmcgZ2FtZSBkYXRhIGZyb20gJHttZXNzYWdlRGF0YS5uaWNrbmFtZX0gZm9yIGdhbWUgJHttZXNzYWdlRGF0YS5nYW1laWR9P2ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09ICdnYW1laWR0YWtlbicpIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoJ1RoYXQgZ2FtZSBJRCBpcyBhbHJlYWR5IHRha2VuJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gJ2dhbWVpZHVua25vd24nKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KCdUaGF0IGdhbWUgSUQgaXMgbm90IGJlaW5nIHVzZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSAnZ2FtZWZ1bGwnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KCdUaGF0IGdhbWUgaXMgZnVsbCcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09ICdub3RpbnRoYXRnYW1lJykge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdCgnWW91IGFyZSBub3QgaW4gdGhhdCBnYW1lJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gJ290aGVyY2xpZW50Zm91bmQnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KCdUaGF0IG5pY2tuYW1lIGlzIGFscmVhZHkgaW4gdGhhdCBnYW1lJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbmF0KGBVbmhhbmRsZWQgbWVzc2FnZTogJHttZXNzYWdlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmeWJMb2JieSAke2lzbW9iaWxlID09PSBcIllcIiA/IFwibW9iaWxlXCIgOiBcIlwifWB9IGlkPVwiZnliTG9iYnlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmeWJIZWFkZXJEaXZcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgyXCI+RnJ5IFlvdXIgQnJhaW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZ5YkhvbWVCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD57c25hdH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyFnb3ROaWNrbmFtZSAmJiBnZXROaWNrbmFtZShuaWNrbmFtZSwgc2V0Tmlja25hbWUsIHNldEdvdE5pY2tuYW1lKX1cclxuICAgICAgICAgICAge2dvdE5pY2tuYW1lICYmIGRpc3BsYXlHYW1lbGlzdChnYW1lbGlzdCwgY2xpZW50LCB0aGlzaXNtZSwgbmlja25hbWUpfVxyXG4gICAgICAgICAgICB7Z290Tmlja25hbWUgJiYgIW1haW5BY3Rpb24gJiYgZ2V0TWFpbkFjdGlvbihzZXRNYWluQWN0aW9uKX1cclxuICAgICAgICAgICAge2dvdE5pY2tuYW1lICYmIG1haW5BY3Rpb24gPT09ICdDJyAmJlxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZUdhbWVcclxuICAgICAgICAgICAgICAgICAgICBjbGllbnQ9e2NsaWVudH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzaXNtZT17dGhpc2lzbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU9e25pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVpZD17Z2FtZWlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEdhbWVpZD17c2V0R2FtZWlkfVxyXG4gICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml2ZXB4ZGl2aWRlclwiPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUdhbWVsaXN0KGdhbWVsaXN0LCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZnliR2FtZWxpc3RcIj5cclxuICAgICAgICA8cD5HYW1lIExpc3Q6PC9wPlxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5JRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlBwbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlB0czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkJ5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2dhbWVsaXN0Lm1hcCgoZ2FtZSxpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntnYW1lLmdhbWVpZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2dhbWUucGxheWVycy5sZW5ndGh9L3tnYW1lLm51bVBsYXllcnN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntnYW1lLmdvYWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntnYW1lLnBsYXllcnNbMF0ubmlja25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUGxheWVySW5BcnJheShnYW1lLnBsYXllcnMsIG5pY2tuYW1lKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YHJlam9pbkJ1dHRvbiR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRSZWpvaW5HYW1lUmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1lLmdhbWVpZCwgbmlja25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJFSk9JTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGdhbWUucGxheWVycy5sZW5ndGggPCBnYW1lLm51bVBsYXllcnMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Bqb2luQnV0dG9uJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZEpvaW5HYW1lUmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1lLmdhbWVpZCwgbmlja25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSk9JTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdJbiBwcm9ncmVzcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROaWNrbmFtZShuaWNrbmFtZSwgc2V0Tmlja25hbWUsIHNldEdvdE5pY2tuYW1lKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWw+Tmlja25hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmlja25hbWVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Tmlja25hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge25pY2tuYW1lICYmIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZ5YkxvYmJ5QnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmltbWVkID0gbmlja25hbWUudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE5pY2tuYW1lKHRyaW1tZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEdvdE5pY2tuYW1lKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICBTVUJNSVRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+fVxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNYWluQWN0aW9uKHNldE1haW5BY3Rpb24pIHtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnliTG9iYnlCdXR0b25cIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgaWQ9XCJjaG9vc2VDcmVhdGVHYW1lXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TWFpbkFjdGlvbignQycpO1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgQ1JFQVRFIEEgR0FNRVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kSm9pbkdhbWVSZXF1ZXN0KGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbmlja25hbWUpIHtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAnam9pbicsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kUmVqb2luR2FtZVJlcXVlc3QoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSkge1xyXG4gICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgIGZ1bmM6ICdyZWpvaW4nLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNQbGF5ZXJJbkFycmF5KHBsYXllcnMsIG5pY2tuYW1lKSB7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChwbGF5ZXJzW2ldLm5pY2tuYW1lID09PSBuaWNrbmFtZSkge1xyXG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvdW5kO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2JieTsgIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9