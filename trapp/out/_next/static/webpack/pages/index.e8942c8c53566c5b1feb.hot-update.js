self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/fyb/game.js":
/*!***************************!*\
  !*** ./pages/fyb/game.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/fyb/constants */ "./lib/fyb/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\fyb\\game.js",
    _s = $RefreshSig$();




const Game = ({
  setWhereto,
  client,
  thisisme,
  wsmessage,
  nickname,
  gameid
}) => {
  _s();

  const {
    0: snat,
    1: setSnat
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: gamedata,
    1: setGamedata
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    goal: 99,
    whoseturn: -1,
    players: [{
      index: 0,
      nickname: 'Loading...'
    }]
  });
  const {
    0: word,
    1: setWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // my word to submit

  const {
    0: syncstamp,
    1: setSyncstamp
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const interval = setInterval(() => {
      if (gamedata.whoseturn > -1 && gamedata.players.length > 0) {
        client.send({
          type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB,
          func: 'interval',
          syncstamp: syncstamp,
          thisisme: thisisme,
          nickname: nickname,
          gameid: gamedata.gameid
        });
      }
    }, _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.PING_INTERVAL); // this many milliseconds between above code block executions

    return () => clearInterval(interval);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let msg = wsmessage;
    if (msg !== '') processGameMessage(msg);
  }, [wsmessage]);

  function processGameMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.type === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB) {
      if (messageData.func === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.S2C_FUNC_GAMEDATA) {
        setSnat(messageData.snat);
        setGamedata(messageData.game);
        setSyncstamp(messageData.game.syncstamp);
      } else if (messageData.func = _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.S2C_FUNC_GAMECREATED) {// Nothing to do, this is really for the lobby dwellers
      } else {
        setSnat(`Unhandled message: ${message}`);
      }
    }
  }

  const handleKeyDown = event => {
    if (!meToEnterWord()) {
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      submitPlayerWord(word, gamedata, setSnat, client, thisisme, nickname, setWord);
      return;
    }
  };

  const meToEnterWord = () => {
    if (gamedata.whoseturn < 0) {
      // Game has not started or has ended
      return false;
    } else if (gamedata.freeforall) {
      // In free-for-all round
      if (gamedata.excludedPlayer === nickname) {
        return false;
      }

      for (let i = 0; i < gamedata.freeforallMoves.length; i++) {
        if (gamedata.freeforallMoves[i].nickname === nickname) {
          return false;
        }
      }

      return true;
    } else {
      return nickname === gamedata.players[gamedata.whoseturn].nickname;
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container fybGame",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybHeaderDiv",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "h2",
        children: "Fry Your Brain"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
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
          lineNumber: 76,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybHeaderDiv",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "h4",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            colSpan: "2",
            className: "fybGameSectionHeader",
            children: ["First to ", gamedata.goal, " wins!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, undefined), gamedata.players.map(pl => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGamePlayer",
            children: pl.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGameScore",
            children: [pl.points < 10 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 51
            }, undefined) : '', pl.points, pl.points >= gamedata.goal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              class: "fybWinner",
              children: "Winner!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 64
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 29
          }, undefined)]
        }, `Player${pl.index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 25
        }, undefined)), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGameSectionHeader",
            colSpan: "2",
            children: "Previous round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 25
        }, undefined), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && showMoveList('movesPrevRound', gamedata.movesPrevRound), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGameSectionHeader",
            colSpan: "2",
            children: "This round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 25
        }, undefined), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && showMoveList('movesThisRound', gamedata.movesThisRound), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGameSectionHeader",
            colSpan: "2",
            children: "Free-for-all:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 25
        }, undefined), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && showMoveList('ffaMoves', gamedata.freeforallMoves)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, undefined), gamedata.whoseturn > -1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fryLetterDiv",
      children: ["Letters:\xA0", gamedata.fryLetters.map((fl, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "fryLetter",
        children: fl
      }, `FryLetter${i}`, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 25
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }, undefined), meToEnterWord() && getPlayerWord(handleKeyDown, word, setWord, gamedata, setSnat, client, thisisme, nickname), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [gamedata.gameOver && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "fybGameOver",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "fybGameSectionHeader",
          children: "Game Over"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "fybGameWordSubmitButton",
          onClick: () => {
            sendReplayRequest(client, thisisme, gamedata, nickname);
          },
          children: "PLAY AGAIN"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 35
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "fybSnat",
        children: snat
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 9
  }, undefined);
};

_s(Game, "cdNnKYLZ7C4vJeR8ej+Y2GRwpwA=");

_c = Game;

function showMoveList(moveListKey, moveArray) {
  return moveArray.map(move => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      className: "fybGamePlayer",
      children: move.nickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      className: "fybGameWord",
      children: move.pass ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "fybGameWord pass",
        children: " passed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: `fybGameWord ${move.valid ? 'valid' : 'invalid'}`,
        children: move.word
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }, this)]
  }, `${moveListKey}${move.nickname}`, true, {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 13
  }, this));
}

function getPlayerWord(handleKeyDown, word, setWord, gamedata, setSnat, client, thisisme, nickname) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    onKeyDownCapture: handleKeyDown,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybGameEnterWordLabel",
      children: "Enter Word:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      autoComplete: "off",
      spellCheck: "false",
      name: "word",
      value: word,
      onChange: e => {
        setWord(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [word.toUpperCase().trim().match("^[a-zA-Z]*$") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "fybGameWordSubmitButton",
        onClick: () => {
          submitPlayerWord(word, gamedata, setSnat, client, thisisme, nickname, setWord);
        },
        children: "SUBMIT"
      }, "submitWord", false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "fybGameWordPassButton",
        onClick: () => {
          submitPass(setSnat, client, thisisme, gamedata.gameid, nickname, setWord);
        },
        children: "PASS"
      }, "passButton", false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 12
  }, this);
}

function submitPlayerWord(word, gamedata, setSnat, client, thisisme, nickname, setWord) {
  let fixedword = word.toUpperCase().trim(); // Check if the word is allowed based on previous words this round

  for (let i = 0; i < gamedata.movesThisRound.length; i++) {
    const pw = gamedata.movesThisRound[i].word;

    if (pw === fixedword) {
      setSnat(`You cannot reuse a previous word from this round (${pw}).`);
      return;
    }

    if (pw + 'S' === fixedword && pw.substring(pw.length - 1) !== 'S' && gamedata.movesThisRound[i].valid) {
      setSnat(`You cannot add S to a previous valid word (${pw}) from this round unless it ends with S.`);
      return;
    }
  } // Check if the have all the fry letters


  for (let i = 0; i < gamedata.fryLetters.length; i++) {
    let letterCountRequired = 0;
    let actualLetterCount = 0;

    for (let j = 0; j < gamedata.fryLetters.length; j++) {
      if (gamedata.fryLetters[i] === gamedata.fryLetters[j]) {
        letterCountRequired = letterCountRequired + 1;
      }
    }

    for (let j = 0; j < fixedword.length; j++) {
      if (gamedata.fryLetters[i] === fixedword[j]) {
        actualLetterCount = actualLetterCount + 1;
      }
    }

    if (actualLetterCount < letterCountRequired) {
      setSnat(`You need the letter ${gamedata.fryLetters[i]} at least ${letterCountRequired} time${letterCountRequired === 1 ? '.' : 's.'}`);
      return;
    }
  } // If you get here they have all the required letters. Send the guess to the server.


  setSnat(`Checking your word ... shouldn't take long. If it does, please try rejoining the game.`);
  client.send({
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB,
    func: 'move',
    pass: false,
    thisisme: thisisme,
    gameid: gamedata.gameid,
    nickname: nickname,
    timestamp: Date.now(),
    word: fixedword
  });
  setWord('');
}

function submitPass(setSnat, client, thisisme, gameid, nickname, setWord) {
  // If you get here they have all the required letters. Send the guess to the server.
  setSnat(`Sending PASS ... shouldn't take long.`);
  client.send({
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB,
    func: 'move',
    pass: true,
    valid: false,
    thisisme: thisisme,
    gameid: gameid,
    nickname: nickname,
    timestamp: Date.now(),
    word: ''
  });
  setWord('');
}

function sendReplayRequest(client, thisisme, gamedata, nickname) {
  client.send({
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB,
    func: 'replay',
    thisisme: thisisme,
    game: gamedata,
    nickname: nickname,
    timestamp: Date.now()
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Game);

var _c;

$RefreshReg$(_c, "Game");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInNldFdoZXJldG8iLCJjbGllbnQiLCJ0aGlzaXNtZSIsIndzbWVzc2FnZSIsIm5pY2tuYW1lIiwiZ2FtZWlkIiwic25hdCIsInNldFNuYXQiLCJ1c2VTdGF0ZSIsImdhbWVkYXRhIiwic2V0R2FtZWRhdGEiLCJnb2FsIiwid2hvc2V0dXJuIiwicGxheWVycyIsImluZGV4Iiwid29yZCIsInNldFdvcmQiLCJzeW5jc3RhbXAiLCJzZXRTeW5jc3RhbXAiLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibGVuZ3RoIiwic2VuZCIsInR5cGUiLCJjIiwiZnVuYyIsImNsZWFySW50ZXJ2YWwiLCJtc2ciLCJwcm9jZXNzR2FtZU1lc3NhZ2UiLCJtZXNzYWdlIiwibWVzc2FnZURhdGEiLCJKU09OIiwicGFyc2UiLCJnYW1lIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwibWVUb0VudGVyV29yZCIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0UGxheWVyV29yZCIsImZyZWVmb3JhbGwiLCJleGNsdWRlZFBsYXllciIsImkiLCJmcmVlZm9yYWxsTW92ZXMiLCJtYXAiLCJwbCIsInBvaW50cyIsIm1vdmVzUHJldlJvdW5kIiwic2hvd01vdmVMaXN0IiwibW92ZXNUaGlzUm91bmQiLCJmcnlMZXR0ZXJzIiwiZmwiLCJnZXRQbGF5ZXJXb3JkIiwiZ2FtZU92ZXIiLCJzZW5kUmVwbGF5UmVxdWVzdCIsIm1vdmVMaXN0S2V5IiwibW92ZUFycmF5IiwibW92ZSIsInBhc3MiLCJ2YWxpZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwidHJpbSIsIm1hdGNoIiwic3VibWl0UGFzcyIsImZpeGVkd29yZCIsInB3Iiwic3Vic3RyaW5nIiwibGV0dGVyQ291bnRSZXF1aXJlZCIsImFjdHVhbExldHRlckNvdW50IiwiaiIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0MsWUFBRDtBQUFhQyxRQUFiO0FBQXFCQyxVQUFyQjtBQUErQkMsV0FBL0I7QUFBMENDLFVBQTFDO0FBQW9EQztBQUFwRCxDQUFELEtBQWlFO0FBQUE7O0FBQzFFLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRiwrQ0FBUSxDQUFDO0FBQUNHLFFBQUksRUFBQyxFQUFOO0FBQVVDLGFBQVMsRUFBQyxDQUFDLENBQXJCO0FBQXdCQyxXQUFPLEVBQUMsQ0FBQztBQUFDQyxXQUFLLEVBQUUsQ0FBUjtBQUFXVixjQUFRLEVBQUU7QUFBckIsS0FBRDtBQUFoQyxHQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNXLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEMsQ0FIMEUsQ0FHcEM7O0FBQ3RDLFFBQU07QUFBQSxPQUFDUyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QlYsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0FXLGtEQUFTLENBQUMsTUFBTTtBQUNaLFVBQU1DLFFBQVEsR0FBR0MsV0FBVyxDQUFDLE1BQU07QUFDL0IsVUFBSVosUUFBUSxDQUFDRyxTQUFULEdBQXFCLENBQUMsQ0FBdEIsSUFBMkJILFFBQVEsQ0FBQ0ksT0FBVCxDQUFpQlMsTUFBakIsR0FBMEIsQ0FBekQsRUFBNEQ7QUFDeERyQixjQUFNLENBQUNzQixJQUFQLENBQVk7QUFDUkMsY0FBSSxFQUFFQywrREFERTtBQUVSQyxjQUFJLEVBQUUsVUFGRTtBQUdSVCxtQkFBUyxFQUFFQSxTQUhIO0FBSVJmLGtCQUFRLEVBQUVBLFFBSkY7QUFLUkUsa0JBQVEsRUFBRUEsUUFMRjtBQU1SQyxnQkFBTSxFQUFFSSxRQUFRLENBQUNKO0FBTlQsU0FBWjtBQVFIO0FBQ0osS0FYMkIsRUFXekJvQiw2REFYeUIsQ0FBNUIsQ0FEWSxDQVlTOztBQUNyQixXQUFPLE1BQU1FLGFBQWEsQ0FBQ1AsUUFBRCxDQUExQjtBQUNILEdBZFEsQ0FBVDtBQWVBRCxrREFBUyxDQUFDLE1BQU07QUFDWixRQUFJUyxHQUFHLEdBQUd6QixTQUFWO0FBQ0EsUUFBSXlCLEdBQUcsS0FBSyxFQUFaLEVBQWdCQyxrQkFBa0IsQ0FBQ0QsR0FBRCxDQUFsQjtBQUNuQixHQUhRLEVBR1AsQ0FBQ3pCLFNBQUQsQ0FITyxDQUFUOztBQUlBLFdBQVMwQixrQkFBVCxDQUE0QkMsT0FBNUIsRUFBcUM7QUFDakMsUUFBSUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsT0FBWCxDQUFsQjs7QUFDQSxRQUFJQyxXQUFXLENBQUNQLElBQVosS0FBcUJDLCtEQUF6QixFQUE0QztBQUN4QyxVQUFJTSxXQUFXLENBQUNMLElBQVosS0FBcUJELGlFQUF6QixFQUE4QztBQUMxQ2xCLGVBQU8sQ0FBQ3dCLFdBQVcsQ0FBQ3pCLElBQWIsQ0FBUDtBQUNBSSxtQkFBVyxDQUFDcUIsV0FBVyxDQUFDRyxJQUFiLENBQVg7QUFDQWhCLG9CQUFZLENBQUNhLFdBQVcsQ0FBQ0csSUFBWixDQUFpQmpCLFNBQWxCLENBQVo7QUFDSCxPQUpELE1BSU8sSUFBSWMsV0FBVyxDQUFDTCxJQUFaLEdBQW1CRCxvRUFBdkIsRUFBK0MsQ0FDbEQ7QUFDSCxPQUZNLE1BRUE7QUFDSGxCLGVBQU8sQ0FBRSxzQkFBcUJ1QixPQUFRLEVBQS9CLENBQVA7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsUUFBTUssYUFBYSxHQUFJQyxLQUFELElBQVc7QUFDN0IsUUFBSSxDQUFDQyxhQUFhLEVBQWxCLEVBQXNCO0FBQ2xCO0FBQ0g7O0FBQ0QsUUFBSUQsS0FBSyxDQUFDRSxHQUFOLEtBQWMsT0FBbEIsRUFBMkI7QUFDdkJGLFdBQUssQ0FBQ0csY0FBTjtBQUNBQyxzQkFBZ0IsQ0FBQ3pCLElBQUQsRUFBT04sUUFBUCxFQUFpQkYsT0FBakIsRUFBMEJOLE1BQTFCLEVBQWtDQyxRQUFsQyxFQUE0Q0UsUUFBNUMsRUFBc0RZLE9BQXRELENBQWhCO0FBQ0E7QUFDSDtBQUNKLEdBVEQ7O0FBV0EsUUFBTXFCLGFBQWEsR0FBRyxNQUFNO0FBQ3hCLFFBQUk1QixRQUFRLENBQUNHLFNBQVQsR0FBcUIsQ0FBekIsRUFBNEI7QUFBRTtBQUMxQixhQUFPLEtBQVA7QUFDSCxLQUZELE1BRU8sSUFBSUgsUUFBUSxDQUFDZ0MsVUFBYixFQUF5QjtBQUFFO0FBQzlCLFVBQUloQyxRQUFRLENBQUNpQyxjQUFULEtBQTRCdEMsUUFBaEMsRUFBMEM7QUFDdEMsZUFBTyxLQUFQO0FBQ0g7O0FBQ0QsV0FBSyxJQUFJdUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2xDLFFBQVEsQ0FBQ21DLGVBQVQsQ0FBeUJ0QixNQUE3QyxFQUFxRHFCLENBQUMsRUFBdEQsRUFBMEQ7QUFDdEQsWUFBSWxDLFFBQVEsQ0FBQ21DLGVBQVQsQ0FBeUJELENBQXpCLEVBQTRCdkMsUUFBNUIsS0FBeUNBLFFBQTdDLEVBQXVEO0FBQ25ELGlCQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELGFBQU8sSUFBUDtBQUNILEtBVk0sTUFVQTtBQUNILGFBQVFBLFFBQVEsS0FBS0ssUUFBUSxDQUFDSSxPQUFULENBQWlCSixRQUFRLENBQUNHLFNBQTFCLEVBQXFDUixRQUExRDtBQUNIO0FBQ0osR0FoQkQ7O0FBaUJBLHNCQUNJO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDhCQUNJO0FBQU0saUJBQVMsRUFBQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQVEsaUJBQVMsRUFBQyxlQUFsQjtBQUFrQyxlQUFPLEVBQUUsTUFBTTtBQUFDSixvQkFBVSxDQUFDLE1BQUQsQ0FBVjtBQUFvQixTQUF0RTtBQUFBLCtCQUNJO0FBQUcsbUJBQVMsRUFBQyxnQkFBYjtBQUE4Qix5QkFBWSxTQUExQztBQUFvRCxlQUFLLEVBQUMsTUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU9JO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw2QkFDSTtBQUFNLGlCQUFTLEVBQUMsSUFBaEI7QUFBQSxnQ0FBK0JLLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEosZUFVSTtBQUFBLDZCQUNJO0FBQUEsZ0NBQ0k7QUFBQSxpQ0FDSTtBQUFJLG1CQUFPLEVBQUMsR0FBWjtBQUFnQixxQkFBUyxFQUFDLHNCQUExQjtBQUFBLG9DQUEyREksUUFBUSxDQUFDRSxJQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBSUtGLFFBQVEsQ0FBQ0ksT0FBVCxDQUFpQmdDLEdBQWpCLENBQXNCQyxFQUFELGlCQUNsQjtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyxlQUFkO0FBQUEsc0JBQStCQSxFQUFFLENBQUMxQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBSSxxQkFBUyxFQUFDLGNBQWQ7QUFBQSx1QkFDSzBDLEVBQUUsQ0FBQ0MsTUFBSCxHQUFZLEVBQVosZ0JBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFqQixHQUF1QyxFQUQ1QyxFQUNnREQsRUFBRSxDQUFDQyxNQURuRCxFQUVLRCxFQUFFLENBQUNDLE1BQUgsSUFBYXRDLFFBQVEsQ0FBQ0UsSUFBdEIsaUJBQThCO0FBQU0sbUJBQUssRUFBQyxXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQSxXQUFVLFNBQVFtQyxFQUFFLENBQUNoQyxLQUFNLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREgsQ0FKTCxFQWFLTCxRQUFRLENBQUN1QyxjQUFULElBQTJCdkMsUUFBUSxDQUFDdUMsY0FBVCxDQUF3QjFCLE1BQXhCLEdBQWlDLENBQTVELGlCQUNHO0FBQUEsaUNBQ0k7QUFBSSxxQkFBUyxFQUFDLHNCQUFkO0FBQXFDLG1CQUFPLEVBQUMsR0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRSLEVBa0JLYixRQUFRLENBQUN1QyxjQUFULElBQTJCdkMsUUFBUSxDQUFDdUMsY0FBVCxDQUF3QjFCLE1BQXhCLEdBQWlDLENBQTVELElBQ0cyQixZQUFZLENBQUMsZ0JBQUQsRUFBbUJ4QyxRQUFRLENBQUN1QyxjQUE1QixDQW5CcEIsRUFxQkt2QyxRQUFRLENBQUN5QyxjQUFULElBQTJCekMsUUFBUSxDQUFDeUMsY0FBVCxDQUF3QjVCLE1BQXhCLEdBQWlDLENBQTVELGlCQUNHO0FBQUEsaUNBQ0k7QUFBSSxxQkFBUyxFQUFDLHNCQUFkO0FBQXFDLG1CQUFPLEVBQUMsR0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXRCUixFQTBCS2IsUUFBUSxDQUFDeUMsY0FBVCxJQUEyQnpDLFFBQVEsQ0FBQ3lDLGNBQVQsQ0FBd0I1QixNQUF4QixHQUFpQyxDQUE1RCxJQUNHMkIsWUFBWSxDQUFDLGdCQUFELEVBQW1CeEMsUUFBUSxDQUFDeUMsY0FBNUIsQ0EzQnBCLEVBNkJLLENBQUN6QyxRQUFRLENBQUNnQyxVQUFWLElBQXdCaEMsUUFBUSxDQUFDbUMsZUFBakMsSUFBb0RuQyxRQUFRLENBQUNtQyxlQUFULENBQXlCdEIsTUFBekIsR0FBa0MsQ0FBdEYsaUJBQ0c7QUFBQSxpQ0FDSTtBQUFJLHFCQUFTLEVBQUMsc0JBQWQ7QUFBcUMsbUJBQU8sRUFBQyxHQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBOUJSLEVBa0NLLENBQUNiLFFBQVEsQ0FBQ2dDLFVBQVYsSUFBd0JoQyxRQUFRLENBQUNtQyxlQUFqQyxJQUFvRG5DLFFBQVEsQ0FBQ21DLGVBQVQsQ0FBeUJ0QixNQUF6QixHQUFrQyxDQUF0RixJQUNHMkIsWUFBWSxDQUFDLFVBQUQsRUFBYXhDLFFBQVEsQ0FBQ21DLGVBQXRCLENBbkNwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKLEVBa0RLbkMsUUFBUSxDQUFDRyxTQUFULEdBQXFCLENBQUMsQ0FBdEIsaUJBQ0c7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLGlDQUVLSCxRQUFRLENBQUMwQyxVQUFULENBQW9CTixHQUFwQixDQUF3QixDQUFDTyxFQUFELEVBQUlULENBQUosa0JBQ3JCO0FBQTRCLGlCQUFTLEVBQUMsV0FBdEM7QUFBQSxrQkFBbURTO0FBQW5ELFNBQVksWUFBV1QsQ0FBRSxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURILENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5EUixFQTBES04sYUFBYSxNQUNWZ0IsYUFBYSxDQUFDbEIsYUFBRCxFQUFnQnBCLElBQWhCLEVBQXNCQyxPQUF0QixFQUErQlAsUUFBL0IsRUFBeUNGLE9BQXpDLEVBQWtETixNQUFsRCxFQUEwREMsUUFBMUQsRUFBb0VFLFFBQXBFLENBM0RyQixlQTZESTtBQUFBLGlCQUNDSyxRQUFRLENBQUM2QyxRQUFULGlCQUFxQjtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLGdDQUNsQjtBQUFNLG1CQUFTLEVBQUMsc0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURrQixlQUVsQjtBQUNJLG1CQUFTLEVBQUMseUJBRGQ7QUFFSSxpQkFBTyxFQUFFLE1BQU07QUFBQ0MsNkJBQWlCLENBQUN0RCxNQUFELEVBQVNDLFFBQVQsRUFBbUJPLFFBQW5CLEVBQTZCTCxRQUE3QixDQUFqQjtBQUF3RCxXQUY1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUR0QixlQVVBO0FBQUcsaUJBQVMsRUFBQyxTQUFiO0FBQUEsa0JBQXdCRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUE0RUgsQ0EvSUQ7O0dBQU1QLEk7O0tBQUFBLEk7O0FBaUpOLFNBQVNrRCxZQUFULENBQXNCTyxXQUF0QixFQUFtQ0MsU0FBbkMsRUFBOEM7QUFDMUMsU0FDSUEsU0FBUyxDQUFDWixHQUFWLENBQWVhLElBQUQsaUJBQ1Y7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBQyxlQUFkO0FBQUEsZ0JBQStCQSxJQUFJLENBQUN0RDtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFJLGVBQVMsRUFBQyxhQUFkO0FBQUEsZ0JBQ0NzRCxJQUFJLENBQUNDLElBQUwsZ0JBQ0c7QUFBTSxpQkFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILGdCQUdHO0FBQU0saUJBQVMsRUFBRyxlQUFjRCxJQUFJLENBQUNFLEtBQUwsR0FBYSxPQUFiLEdBQXVCLFNBQVUsRUFBakU7QUFBQSxrQkFBcUVGLElBQUksQ0FBQzNDO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQSxLQUFVLEdBQUV5QyxXQUFZLEdBQUVFLElBQUksQ0FBQ3RELFFBQVMsRUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKLENBREo7QUFhSDs7QUFFRCxTQUFTaUQsYUFBVCxDQUF1QmxCLGFBQXZCLEVBQXNDcEIsSUFBdEMsRUFBNENDLE9BQTVDLEVBQXFEUCxRQUFyRCxFQUErREYsT0FBL0QsRUFBd0VOLE1BQXhFLEVBQWdGQyxRQUFoRixFQUEwRkUsUUFBMUYsRUFBb0c7QUFDaEcsc0JBQU87QUFBSyxvQkFBZ0IsRUFBRStCLGFBQXZCO0FBQUEsNEJBQ0g7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERyxlQUVIO0FBQ0ksVUFBSSxFQUFDLE1BRFQ7QUFDZ0Isa0JBQVksRUFBQyxLQUQ3QjtBQUNtQyxnQkFBVSxFQUFDLE9BRDlDO0FBRUksVUFBSSxFQUFDLE1BRlQ7QUFHSSxXQUFLLEVBQUVwQixJQUhYO0FBSUksY0FBUSxFQUFHOEMsQ0FBRCxJQUFPO0FBQ2I3QyxlQUFPLENBQUM2QyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQ0g7QUFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkcsZUFTSDtBQUFBLGlCQUNLaEQsSUFBSSxDQUFDaUQsV0FBTCxHQUFtQkMsSUFBbkIsR0FBMEJDLEtBQTFCLENBQWdDLGFBQWhDLGtCQUNHO0FBQVEsaUJBQVMsRUFBQyx5QkFBbEI7QUFDQSxlQUFPLEVBQUUsTUFBTTtBQUFDMUIsMEJBQWdCLENBQUN6QixJQUFELEVBQU9OLFFBQVAsRUFBaUJGLE9BQWpCLEVBQTBCTixNQUExQixFQUFrQ0MsUUFBbEMsRUFBNENFLFFBQTVDLEVBQXNEWSxPQUF0RCxDQUFoQjtBQUErRSxTQUQvRjtBQUFBO0FBQUEsU0FBZ0QsWUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZSLGVBUUk7QUFBUSxpQkFBUyxFQUFDLHVCQUFsQjtBQUNBLGVBQU8sRUFBRSxNQUFNO0FBQUNtRCxvQkFBVSxDQUFDNUQsT0FBRCxFQUFVTixNQUFWLEVBQWtCQyxRQUFsQixFQUE0Qk8sUUFBUSxDQUFDSixNQUFyQyxFQUE2Q0QsUUFBN0MsRUFBdURZLE9BQXZELENBQVY7QUFBMEUsU0FEMUY7QUFBQTtBQUFBLFNBQThDLFlBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQXVCSDs7QUFFRCxTQUFTd0IsZ0JBQVQsQ0FBMEJ6QixJQUExQixFQUFnQ04sUUFBaEMsRUFBMENGLE9BQTFDLEVBQW1ETixNQUFuRCxFQUEyREMsUUFBM0QsRUFBcUVFLFFBQXJFLEVBQStFWSxPQUEvRSxFQUF3RjtBQUNwRixNQUFJb0QsU0FBUyxHQUFHckQsSUFBSSxDQUFDaUQsV0FBTCxHQUFtQkMsSUFBbkIsRUFBaEIsQ0FEb0YsQ0FFcEY7O0FBQ0EsT0FBSyxJQUFJdEIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2xDLFFBQVEsQ0FBQ3lDLGNBQVQsQ0FBd0I1QixNQUE1QyxFQUFvRHFCLENBQUMsRUFBckQsRUFBeUQ7QUFDckQsVUFBTTBCLEVBQUUsR0FBRzVELFFBQVEsQ0FBQ3lDLGNBQVQsQ0FBd0JQLENBQXhCLEVBQTJCNUIsSUFBdEM7O0FBQ0EsUUFBSXNELEVBQUUsS0FBS0QsU0FBWCxFQUFzQjtBQUNsQjdELGFBQU8sQ0FBRSxxREFBb0Q4RCxFQUFHLElBQXpELENBQVA7QUFDQTtBQUNIOztBQUNELFFBQUlBLEVBQUUsR0FBRyxHQUFMLEtBQWFELFNBQWIsSUFBMEJDLEVBQUUsQ0FBQ0MsU0FBSCxDQUFhRCxFQUFFLENBQUMvQyxNQUFILEdBQVUsQ0FBdkIsTUFBOEIsR0FBeEQsSUFBK0RiLFFBQVEsQ0FBQ3lDLGNBQVQsQ0FBd0JQLENBQXhCLEVBQTJCaUIsS0FBOUYsRUFBcUc7QUFDakdyRCxhQUFPLENBQUUsOENBQTZDOEQsRUFBRywwQ0FBbEQsQ0FBUDtBQUNBO0FBQ0g7QUFDSixHQWJtRixDQWNwRjs7O0FBQ0EsT0FBSyxJQUFJMUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2xDLFFBQVEsQ0FBQzBDLFVBQVQsQ0FBb0I3QixNQUF4QyxFQUFnRHFCLENBQUMsRUFBakQsRUFBcUQ7QUFDakQsUUFBSTRCLG1CQUFtQixHQUFHLENBQTFCO0FBQ0EsUUFBSUMsaUJBQWlCLEdBQUcsQ0FBeEI7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaEUsUUFBUSxDQUFDMEMsVUFBVCxDQUFvQjdCLE1BQXhDLEVBQWdEbUQsQ0FBQyxFQUFqRCxFQUFxRDtBQUNqRCxVQUFJaEUsUUFBUSxDQUFDMEMsVUFBVCxDQUFvQlIsQ0FBcEIsTUFBMkJsQyxRQUFRLENBQUMwQyxVQUFULENBQW9Cc0IsQ0FBcEIsQ0FBL0IsRUFBdUQ7QUFDbkRGLDJCQUFtQixHQUFHQSxtQkFBbUIsR0FBRyxDQUE1QztBQUNIO0FBQ0o7O0FBQ0QsU0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxTQUFTLENBQUM5QyxNQUE5QixFQUFzQ21ELENBQUMsRUFBdkMsRUFBMkM7QUFDdkMsVUFBSWhFLFFBQVEsQ0FBQzBDLFVBQVQsQ0FBb0JSLENBQXBCLE1BQTJCeUIsU0FBUyxDQUFDSyxDQUFELENBQXhDLEVBQTZDO0FBQ3pDRCx5QkFBaUIsR0FBR0EsaUJBQWlCLEdBQUcsQ0FBeEM7QUFDSDtBQUNKOztBQUNELFFBQUlBLGlCQUFpQixHQUFHRCxtQkFBeEIsRUFBNkM7QUFDekNoRSxhQUFPLENBQUUsdUJBQXNCRSxRQUFRLENBQUMwQyxVQUFULENBQW9CUixDQUFwQixDQUF1QixhQUFZNEIsbUJBQW9CLFFBQU9BLG1CQUFtQixLQUFLLENBQXhCLEdBQTRCLEdBQTVCLEdBQWtDLElBQUssRUFBN0gsQ0FBUDtBQUNBO0FBQ0g7QUFDSixHQWhDbUYsQ0FpQ3BGOzs7QUFDQWhFLFNBQU8sQ0FBRSx3RkFBRixDQUFQO0FBQ0FOLFFBQU0sQ0FBQ3NCLElBQVAsQ0FBWTtBQUNSQyxRQUFJLEVBQUVDLCtEQURFO0FBRVJDLFFBQUksRUFBRSxNQUZFO0FBR1JpQyxRQUFJLEVBQUUsS0FIRTtBQUlSekQsWUFBUSxFQUFFQSxRQUpGO0FBS1JHLFVBQU0sRUFBRUksUUFBUSxDQUFDSixNQUxUO0FBTVJELFlBQVEsRUFBRUEsUUFORjtBQU9Sc0UsYUFBUyxFQUFFQyxJQUFJLENBQUNDLEdBQUwsRUFQSDtBQVFSN0QsUUFBSSxFQUFFcUQ7QUFSRSxHQUFaO0FBVUFwRCxTQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0g7O0FBRUQsU0FBU21ELFVBQVQsQ0FBb0I1RCxPQUFwQixFQUE2Qk4sTUFBN0IsRUFBcUNDLFFBQXJDLEVBQStDRyxNQUEvQyxFQUF1REQsUUFBdkQsRUFBaUVZLE9BQWpFLEVBQTBFO0FBQ3RFO0FBQ0FULFNBQU8sQ0FBRSx1Q0FBRixDQUFQO0FBQ0FOLFFBQU0sQ0FBQ3NCLElBQVAsQ0FBWTtBQUNSQyxRQUFJLEVBQUVDLCtEQURFO0FBRVJDLFFBQUksRUFBRSxNQUZFO0FBR1JpQyxRQUFJLEVBQUUsSUFIRTtBQUlSQyxTQUFLLEVBQUUsS0FKQztBQUtSMUQsWUFBUSxFQUFFQSxRQUxGO0FBTVJHLFVBQU0sRUFBRUEsTUFOQTtBQU9SRCxZQUFRLEVBQUVBLFFBUEY7QUFRUnNFLGFBQVMsRUFBRUMsSUFBSSxDQUFDQyxHQUFMLEVBUkg7QUFTUjdELFFBQUksRUFBRTtBQVRFLEdBQVo7QUFXQUMsU0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNIOztBQUVELFNBQVN1QyxpQkFBVCxDQUEyQnRELE1BQTNCLEVBQW1DQyxRQUFuQyxFQUE2Q08sUUFBN0MsRUFBdURMLFFBQXZELEVBQWlFO0FBQzdESCxRQUFNLENBQUNzQixJQUFQLENBQVk7QUFDUkMsUUFBSSxFQUFFQywrREFERTtBQUVSQyxRQUFJLEVBQUUsUUFGRTtBQUdSeEIsWUFBUSxFQUFFQSxRQUhGO0FBSVJnQyxRQUFJLEVBQUV6QixRQUpFO0FBS1JMLFlBQVEsRUFBRUEsUUFMRjtBQU1Sc0UsYUFBUyxFQUFFQyxJQUFJLENBQUNDLEdBQUw7QUFOSCxHQUFaO0FBUUg7O0FBRUQsK0RBQWU3RSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU4OTQyYzhjNTM1NjZjNWIxZmViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9meWIvY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IEdhbWUgPSAoe3NldFdoZXJldG8sIGNsaWVudCwgdGhpc2lzbWUsIHdzbWVzc2FnZSwgbmlja25hbWUsIGdhbWVpZH0pID0+IHtcclxuICAgIGNvbnN0IFtzbmF0LCBzZXRTbmF0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtnYW1lZGF0YSwgc2V0R2FtZWRhdGFdID0gdXNlU3RhdGUoe2dvYWw6OTksIHdob3NldHVybjotMSwgcGxheWVyczpbe2luZGV4OiAwLCBuaWNrbmFtZTogJ0xvYWRpbmcuLi4nfV19KTtcclxuICAgIGNvbnN0IFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKCcnKTsgLy8gbXkgd29yZCB0byBzdWJtaXRcclxuICAgIGNvbnN0IFtzeW5jc3RhbXAsIHNldFN5bmNzdGFtcF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEud2hvc2V0dXJuID4gLTEgJiYgZ2FtZWRhdGEucGxheWVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuYzogJ2ludGVydmFsJyxcclxuICAgICAgICAgICAgICAgICAgICBzeW5jc3RhbXA6IHN5bmNzdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGMuUElOR19JTlRFUlZBTCk7IC8vIHRoaXMgbWFueSBtaWxsaXNlY29uZHMgYmV0d2VlbiBhYm92ZSBjb2RlIGJsb2NrIGV4ZWN1dGlvbnNcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7XHJcbiAgICB9LFt3c21lc3NhZ2VdKVxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0dhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09PSBjLkNMSUVOVF9UWVBFX0ZZQikge1xyXG4gICAgICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gYy5TMkNfRlVOQ19HQU1FREFUQSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdChtZXNzYWdlRGF0YS5zbmF0KTtcclxuICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG1lc3NhZ2VEYXRhLmdhbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3luY3N0YW1wKG1lc3NhZ2VEYXRhLmdhbWUuc3luY3N0YW1wKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID0gYy5TMkNfRlVOQ19HQU1FQ1JFQVRFRCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTm90aGluZyB0byBkbywgdGhpcyBpcyByZWFsbHkgZm9yIHRoZSBsb2JieSBkd2VsbGVyc1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdChgVW5oYW5kbGVkIG1lc3NhZ2U6ICR7bWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCFtZVRvRW50ZXJXb3JkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3VibWl0UGxheWVyV29yZCh3b3JkLCBnYW1lZGF0YSwgc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgbmlja25hbWUsIHNldFdvcmQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lVG9FbnRlcldvcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGdhbWVkYXRhLndob3NldHVybiA8IDApIHsgLy8gR2FtZSBoYXMgbm90IHN0YXJ0ZWQgb3IgaGFzIGVuZGVkXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGdhbWVkYXRhLmZyZWVmb3JhbGwpIHsgLy8gSW4gZnJlZS1mb3ItYWxsIHJvdW5kXHJcbiAgICAgICAgICAgIGlmIChnYW1lZGF0YS5leGNsdWRlZFBsYXllciA9PT0gbmlja25hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVkYXRhLmZyZWVmb3JhbGxNb3Zlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVkYXRhLmZyZWVmb3JhbGxNb3Zlc1tpXS5uaWNrbmFtZSA9PT0gbmlja25hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChuaWNrbmFtZSA9PT0gZ2FtZWRhdGEucGxheWVyc1tnYW1lZGF0YS53aG9zZXR1cm5dLm5pY2tuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZ5YkdhbWVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmeWJIZWFkZXJEaXZcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgyXCI+RnJ5IFlvdXIgQnJhaW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZ5YkhvbWVCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmeWJIZWFkZXJEaXZcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImg0XCI+R2FtZSBpZDoge2dhbWVpZH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjJcIiBjbGFzc05hbWU9XCJmeWJHYW1lU2VjdGlvbkhlYWRlclwiPkZpcnN0IHRvIHtnYW1lZGF0YS5nb2FsfSB3aW5zITwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZWRhdGEucGxheWVycy5tYXAoKHBsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2BQbGF5ZXIke3BsLmluZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZ5YkdhbWVQbGF5ZXJcIj57cGwubmlja25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmeWJHYW1lU2NvcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwucG9pbnRzIDwgMTAgPyA8c3Bhbj4mbmJzcDs8L3NwYW4+IDogJyd9e3BsLnBvaW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwucG9pbnRzID49IGdhbWVkYXRhLmdvYWwgJiYgPHNwYW4gY2xhc3M9XCJmeWJXaW5uZXJcIj5XaW5uZXIhPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVkYXRhLm1vdmVzUHJldlJvdW5kICYmIGdhbWVkYXRhLm1vdmVzUHJldlJvdW5kLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZ5YkdhbWVTZWN0aW9uSGVhZGVyXCIgY29sU3Bhbj1cIjJcIj5QcmV2aW91cyByb3VuZDo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNQcmV2Um91bmQgJiYgZ2FtZWRhdGEubW92ZXNQcmV2Um91bmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93TW92ZUxpc3QoJ21vdmVzUHJldlJvdW5kJywgZ2FtZWRhdGEubW92ZXNQcmV2Um91bmQpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmeWJHYW1lU2VjdGlvbkhlYWRlclwiIGNvbFNwYW49XCIyXCI+VGhpcyByb3VuZDo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNUaGlzUm91bmQgJiYgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93TW92ZUxpc3QoJ21vdmVzVGhpc1JvdW5kJywgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHshZ2FtZWRhdGEuZnJlZWZvcmFsbCAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMgJiYgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZ5YkdhbWVTZWN0aW9uSGVhZGVyXCIgY29sU3Bhbj1cIjJcIj5GcmVlLWZvci1hbGw6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFnYW1lZGF0YS5mcmVlZm9yYWxsICYmIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3ZlcyAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93TW92ZUxpc3QoJ2ZmYU1vdmVzJywgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIHtnYW1lZGF0YS53aG9zZXR1cm4gPiAtMSAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcnlMZXR0ZXJEaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICBMZXR0ZXJzOiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5mcnlMZXR0ZXJzLm1hcCgoZmwsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2BGcnlMZXR0ZXIke2l9YH0gY2xhc3NOYW1lPVwiZnJ5TGV0dGVyXCI+e2ZsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHttZVRvRW50ZXJXb3JkKCkgJiZcclxuICAgICAgICAgICAgICAgIGdldFBsYXllcldvcmQoaGFuZGxlS2V5RG93biwgd29yZCwgc2V0V29yZCwgZ2FtZWRhdGEsIHNldFNuYXQsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtnYW1lZGF0YS5nYW1lT3ZlciAmJiA8ZGl2IGNsYXNzTmFtZT1cImZ5YkdhbWVPdmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmeWJHYW1lU2VjdGlvbkhlYWRlclwiPkdhbWUgT3Zlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmeWJHYW1lV29yZFN1Ym1pdEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NlbmRSZXBsYXlSZXF1ZXN0KGNsaWVudCwgdGhpc2lzbWUsIGdhbWVkYXRhLCBuaWNrbmFtZSl9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFBMQVkgQUdBSU5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ5YlNuYXRcIj57c25hdH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd01vdmVMaXN0KG1vdmVMaXN0S2V5LCBtb3ZlQXJyYXkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgbW92ZUFycmF5Lm1hcCgobW92ZSkgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgJHttb3ZlTGlzdEtleX0ke21vdmUubmlja25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZnliR2FtZVBsYXllclwiPnttb3ZlLm5pY2tuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZnliR2FtZVdvcmRcIj5cclxuICAgICAgICAgICAgICAgIHttb3ZlLnBhc3MgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ5YkdhbWVXb3JkIHBhc3NcIj4gcGFzc2VkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGZ5YkdhbWVXb3JkICR7bW92ZS52YWxpZCA/ICd2YWxpZCcgOiAnaW52YWxpZCd9YH0+e21vdmUud29yZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICkpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQbGF5ZXJXb3JkKGhhbmRsZUtleURvd24sIHdvcmQsIHNldFdvcmQsIGdhbWVkYXRhLCBzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSkge1xyXG4gICAgcmV0dXJuIDxkaXYgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmeWJHYW1lRW50ZXJXb3JkTGFiZWxcIj5FbnRlciBXb3JkOjwvZGl2PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0V29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHt3b3JkLnRvVXBwZXJDYXNlKCkudHJpbSgpLm1hdGNoKFwiXlthLXpBLVpdKiRcIikgJiYgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZ5YkdhbWVXb3JkU3VibWl0QnV0dG9uXCIga2V5PVwic3VibWl0V29yZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGxheWVyV29yZCh3b3JkLCBnYW1lZGF0YSwgc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgbmlja25hbWUsIHNldFdvcmQpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU1VCTUlUXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmeWJHYW1lV29yZFBhc3NCdXR0b25cIiBrZXk9XCJwYXNzQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBhc3Moc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWRhdGEuZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCl9fT5cclxuICAgICAgICAgICAgICAgIFBBU1NcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFBsYXllcldvcmQod29yZCwgZ2FtZWRhdGEsIHNldFNuYXQsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lLCBzZXRXb3JkKSB7XHJcbiAgICBsZXQgZml4ZWR3b3JkID0gd29yZC50b1VwcGVyQ2FzZSgpLnRyaW0oKTtcclxuICAgIC8vIENoZWNrIGlmIHRoZSB3b3JkIGlzIGFsbG93ZWQgYmFzZWQgb24gcHJldmlvdXMgd29yZHMgdGhpcyByb3VuZFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHB3ID0gZ2FtZWRhdGEubW92ZXNUaGlzUm91bmRbaV0ud29yZDtcclxuICAgICAgICBpZiAocHcgPT09IGZpeGVkd29yZCkge1xyXG4gICAgICAgICAgICBzZXRTbmF0KGBZb3UgY2Fubm90IHJldXNlIGEgcHJldmlvdXMgd29yZCBmcm9tIHRoaXMgcm91bmQgKCR7cHd9KS5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHcgKyAnUycgPT09IGZpeGVkd29yZCAmJiBwdy5zdWJzdHJpbmcocHcubGVuZ3RoLTEpICE9PSAnUycgJiYgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmRbaV0udmFsaWQpIHtcclxuICAgICAgICAgICAgc2V0U25hdChgWW91IGNhbm5vdCBhZGQgUyB0byBhIHByZXZpb3VzIHZhbGlkIHdvcmQgKCR7cHd9KSBmcm9tIHRoaXMgcm91bmQgdW5sZXNzIGl0IGVuZHMgd2l0aCBTLmApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGhhdmUgYWxsIHRoZSBmcnkgbGV0dGVyc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxldHRlckNvdW50UmVxdWlyZWQgPSAwO1xyXG4gICAgICAgIGxldCBhY3R1YWxMZXR0ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lZGF0YS5mcnlMZXR0ZXJzW2ldID09PSBnYW1lZGF0YS5mcnlMZXR0ZXJzW2pdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXJDb3VudFJlcXVpcmVkID0gbGV0dGVyQ291bnRSZXF1aXJlZCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaXhlZHdvcmQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVkYXRhLmZyeUxldHRlcnNbaV0gPT09IGZpeGVkd29yZFtqXSkge1xyXG4gICAgICAgICAgICAgICAgYWN0dWFsTGV0dGVyQ291bnQgPSBhY3R1YWxMZXR0ZXJDb3VudCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFjdHVhbExldHRlckNvdW50IDwgbGV0dGVyQ291bnRSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICBzZXRTbmF0KGBZb3UgbmVlZCB0aGUgbGV0dGVyICR7Z2FtZWRhdGEuZnJ5TGV0dGVyc1tpXX0gYXQgbGVhc3QgJHtsZXR0ZXJDb3VudFJlcXVpcmVkfSB0aW1lJHtsZXR0ZXJDb3VudFJlcXVpcmVkID09PSAxID8gJy4nIDogJ3MuJ31gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIElmIHlvdSBnZXQgaGVyZSB0aGV5IGhhdmUgYWxsIHRoZSByZXF1aXJlZCBsZXR0ZXJzLiBTZW5kIHRoZSBndWVzcyB0byB0aGUgc2VydmVyLlxyXG4gICAgc2V0U25hdChgQ2hlY2tpbmcgeW91ciB3b3JkIC4uLiBzaG91bGRuJ3QgdGFrZSBsb25nLiBJZiBpdCBkb2VzLCBwbGVhc2UgdHJ5IHJlam9pbmluZyB0aGUgZ2FtZS5gKTtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAnbW92ZScsXHJcbiAgICAgICAgcGFzczogZmFsc2UsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgd29yZDogZml4ZWR3b3JkXHJcbiAgICB9KTtcclxuICAgIHNldFdvcmQoJycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRQYXNzKHNldFNuYXQsIGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbmlja25hbWUsIHNldFdvcmQpIHtcclxuICAgIC8vIElmIHlvdSBnZXQgaGVyZSB0aGV5IGhhdmUgYWxsIHRoZSByZXF1aXJlZCBsZXR0ZXJzLiBTZW5kIHRoZSBndWVzcyB0byB0aGUgc2VydmVyLlxyXG4gICAgc2V0U25hdChgU2VuZGluZyBQQVNTIC4uLiBzaG91bGRuJ3QgdGFrZSBsb25nLmApO1xyXG4gICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgIGZ1bmM6ICdtb3ZlJyxcclxuICAgICAgICBwYXNzOiB0cnVlLFxyXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICB3b3JkOiAnJ1xyXG4gICAgfSk7XHJcbiAgICBzZXRXb3JkKCcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZFJlcGxheVJlcXVlc3QoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWRhdGEsIG5pY2tuYW1lKSB7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ3JlcGxheScsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWU6IGdhbWVkYXRhLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9