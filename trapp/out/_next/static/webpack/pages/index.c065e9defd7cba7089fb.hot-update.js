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
    fryLetters: [],
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
  const {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
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

        if (messageData.game.fryLetters && gamedata.fryLetters && messageData.game.fryLetters.join() !== gamedata.fryLetters.join()) {
          setSelected(-1);
        }

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
        lineNumber: 80,
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
          lineNumber: 82,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybHeaderDiv",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "h4",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
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
            lineNumber: 91,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, undefined), gamedata.players.map(pl => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGamePlayer",
            children: pl.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGameScore",
            children: [pl.points < 10 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 51
            }, undefined) : '', pl.points, pl.points >= gamedata.goal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "fybWinner",
              children: "Winner!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 64
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 29
          }, undefined)]
        }, `Player${pl.index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 25
        }, undefined)), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGameSectionHeader",
            colSpan: "2",
            children: "Previous round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 25
        }, undefined), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && showMoveList('movesPrevRound', gamedata.movesPrevRound), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGameSectionHeader",
            colSpan: "2",
            children: "This round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 25
        }, undefined), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && showMoveList('movesThisRound', gamedata.movesThisRound), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGameSectionHeader",
            colSpan: "2",
            children: "Free-for-all:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 25
        }, undefined), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && showMoveList('ffaMoves', gamedata.freeforallMoves)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, undefined), gamedata.whoseturn > -1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "fybGameFryLettersLabel",
        children: ["Fry Letters:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "fybGameShuffleButton",
          onClick: () => {
            let shuffleSize = gamedata.fryLetters.length;
            let beforeShuffle = [...gamedata.fryLetters];
            let afterShuffle = [];

            while (afterShuffle.length < shuffleSize) {
              let rand = Math.floor(Math.random() * beforeShuffle.length);
              afterShuffle.push(beforeShuffle[rand]);
              beforeShuffle.splice(rand, 1);
            }

            ;
            let newGamedata = JSON.parse(JSON.stringify(gamedata));
            newGamedata.fryLetters = [...afterShuffle];
            setGamedata(newGamedata);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "material-icons fybGameShuffleButtonIcon",
            children: "cached"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "fybGameShuffleButton",
          onClick: () => {
            let sortwork = [...gamedata.fryLetters];
            sortwork.sort();
            let newGamedata = JSON.parse(JSON.stringify(gamedata));
            newGamedata.fryLetters = [...sortwork];
            setGamedata(newGamedata);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "material-icons fybGameShuffleButtonIcon",
            children: "sort_by_alpha"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "fryLetterDiv",
        children: gamedata.fryLetters.map((fl, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: i === selected ? "fybFryLetter Selected" : "fybFryLetter",
          onClick: () => {
            alert(`i=${i} selected=${selected}`);

            if (selected === -1) {
              setSelected(i);
            } else if (i === selected) {
              setSelected(-1); // unselect when clicked a second time
            } else {
              // Move selected tile to this position
              let shiftedLetters = [];
              let moveLetter = gamedata.fryLetters[selected];

              for (let index = 0; index < gamedata.fryLetters.length; index++) {
                const element = gamedata.fryLetters[index];

                if (index === i) {
                  shiftedLetters.push(moveLetter);
                }

                if (index !== selected) {
                  shiftedLetters.push(element);
                }
              }

              alert(`from ${gamedata.fryLetters} to ${shiftedLetters}`);
              let newGamedata = JSON.parse(JSON.stringify(gamedata));
              newGamedata.fryLetters = [...shiftedLetters];
              setGamedata(newGamedata);
            }
          },
          children: fl
        }, `FryLetter${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }, undefined), meToEnterWord() && getPlayerWord(handleKeyDown, word, setWord, gamedata, setSnat, client, thisisme, nickname), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [gamedata.gameOver && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "fybGameOver",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "fybGameSectionHeader",
          children: "Game Over"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "fybGameWordSubmitButton",
          onClick: () => {
            sendReplayRequest(client, thisisme, gamedata, nickname);
          },
          children: "PLAY AGAIN"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 35
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "fybSnat",
        children: snat
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 9
  }, undefined);
};

_s(Game, "SIo55J+aWLdfd702jJDBBA2bgR8=");

_c = Game;

function showMoveList(moveListKey, moveArray) {
  return moveArray.map(move => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      className: "fybGamePlayer",
      children: move.nickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      className: "fybGameWord",
      children: move.pass ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "fybGameWord pass",
        children: " passed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: `fybGameWord ${move.valid ? 'valid' : 'invalid'}`,
        children: move.word
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 17
    }, this)]
  }, `${moveListKey}${move.nickname}`, true, {
    fileName: _jsxFileName,
    lineNumber: 211,
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
      lineNumber: 226,
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
      lineNumber: 227,
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
        lineNumber: 236,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "fybGameWordPassButton",
        onClick: () => {
          submitPass(setSnat, client, thisisme, gamedata.gameid, nickname, setWord);
        },
        children: "PASS"
      }, "passButton", false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 225,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInNldFdoZXJldG8iLCJjbGllbnQiLCJ0aGlzaXNtZSIsIndzbWVzc2FnZSIsIm5pY2tuYW1lIiwiZ2FtZWlkIiwic25hdCIsInNldFNuYXQiLCJ1c2VTdGF0ZSIsImdhbWVkYXRhIiwic2V0R2FtZWRhdGEiLCJnb2FsIiwid2hvc2V0dXJuIiwiZnJ5TGV0dGVycyIsInBsYXllcnMiLCJpbmRleCIsIndvcmQiLCJzZXRXb3JkIiwic3luY3N0YW1wIiwic2V0U3luY3N0YW1wIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzZW5kIiwidHlwZSIsImMiLCJmdW5jIiwiY2xlYXJJbnRlcnZhbCIsIm1zZyIsInByb2Nlc3NHYW1lTWVzc2FnZSIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsImdhbWUiLCJqb2luIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwibWVUb0VudGVyV29yZCIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0UGxheWVyV29yZCIsImZyZWVmb3JhbGwiLCJleGNsdWRlZFBsYXllciIsImkiLCJmcmVlZm9yYWxsTW92ZXMiLCJtYXAiLCJwbCIsInBvaW50cyIsIm1vdmVzUHJldlJvdW5kIiwic2hvd01vdmVMaXN0IiwibW92ZXNUaGlzUm91bmQiLCJzaHVmZmxlU2l6ZSIsImJlZm9yZVNodWZmbGUiLCJhZnRlclNodWZmbGUiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNwbGljZSIsIm5ld0dhbWVkYXRhIiwic3RyaW5naWZ5Iiwic29ydHdvcmsiLCJzb3J0IiwiZmwiLCJhbGVydCIsInNoaWZ0ZWRMZXR0ZXJzIiwibW92ZUxldHRlciIsImVsZW1lbnQiLCJnZXRQbGF5ZXJXb3JkIiwiZ2FtZU92ZXIiLCJzZW5kUmVwbGF5UmVxdWVzdCIsIm1vdmVMaXN0S2V5IiwibW92ZUFycmF5IiwibW92ZSIsInBhc3MiLCJ2YWxpZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwidHJpbSIsIm1hdGNoIiwic3VibWl0UGFzcyIsImZpeGVkd29yZCIsInB3Iiwic3Vic3RyaW5nIiwibGV0dGVyQ291bnRSZXF1aXJlZCIsImFjdHVhbExldHRlckNvdW50IiwiaiIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0MsWUFBRDtBQUFhQyxRQUFiO0FBQXFCQyxVQUFyQjtBQUErQkMsV0FBL0I7QUFBMENDLFVBQTFDO0FBQW9EQztBQUFwRCxDQUFELEtBQWlFO0FBQUE7O0FBQzFFLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRiwrQ0FBUSxDQUFDO0FBQUNHLFFBQUksRUFBQyxFQUFOO0FBQVVDLGFBQVMsRUFBQyxDQUFDLENBQXJCO0FBQXdCQyxjQUFVLEVBQUMsRUFBbkM7QUFBdUNDLFdBQU8sRUFBQyxDQUFDO0FBQUNDLFdBQUssRUFBRSxDQUFSO0FBQVdYLGNBQVEsRUFBRTtBQUFyQixLQUFEO0FBQS9DLEdBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1ksSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JULCtDQUFRLENBQUMsRUFBRCxDQUFoQyxDQUgwRSxDQUdwQzs7QUFDdEMsUUFBTTtBQUFBLE9BQUNVLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCWCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ1ksUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJiLCtDQUFRLENBQUMs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QUksQ0FBQ0MsR0FBTCxFQVBIO0FBUVJoRixRQUFJLEVBQUV3RTtBQVJFLEdBQVo7QUFVQXZFLFNBQU8sQ0FBQyxFQUFELENBQVA7QUFDSDs7QUFFRCxTQUFTc0UsVUFBVCxDQUFvQmhGLE9BQXBCLEVBQTZCTixNQUE3QixFQUFxQ0MsUUFBckMsRUFBK0NHLE1BQS9DLEVBQXVERCxRQUF2RCxFQUFpRWEsT0FBakUsRUFBMEU7QUFDdEU7QUFDQVYsU0FBTyxDQUFFLHVDQUFGLENBQVA7QUFDQU4sUUFBTSxDQUFDeUIsSUFBUCxDQUFZO0FBQ1JDLFFBQUksRUFBRUMsK0RBREU7QUFFUkMsUUFBSSxFQUFFLE1BRkU7QUFHUmtELFFBQUksRUFBRSxJQUhFO0FBSVJDLFNBQUssRUFBRSxLQUpDO0FBS1I5RSxZQUFRLEVBQUVBLFFBTEY7QUFNUkcsVUFBTSxFQUFFQSxNQU5BO0FBT1JELFlBQVEsRUFBRUEsUUFQRjtBQVFSMEYsYUFBUyxFQUFFQyxJQUFJLENBQUNDLEdBQUwsRUFSSDtBQVNSaEYsUUFBSSxFQUFFO0FBVEUsR0FBWjtBQVdBQyxTQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0g7O0FBRUQsU0FBUzBELGlCQUFULENBQTJCMUUsTUFBM0IsRUFBbUNDLFFBQW5DLEVBQTZDTyxRQUE3QyxFQUF1REwsUUFBdkQsRUFBaUU7QUFDN0RILFFBQU0sQ0FBQ3lCLElBQVAsQ0FBWTtBQUNSQyxRQUFJLEVBQUVDLCtEQURFO0FBRVJDLFFBQUksRUFBRSxRQUZFO0FBR1IzQixZQUFRLEVBQUVBLFFBSEY7QUFJUm1DLFFBQUksRUFBRTVCLFFBSkU7QUFLUkwsWUFBUSxFQUFFQSxRQUxGO0FBTVIwRixhQUFTLEVBQUVDLElBQUksQ0FBQ0MsR0FBTDtBQU5ILEdBQVo7QUFRSDs7QUFFRCwrREFBZWpHLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzA2NWU5ZGVmZDdjYmE3MDg5ZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL2Z5Yi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgR2FtZSA9ICh7c2V0V2hlcmV0bywgY2xpZW50LCB0aGlzaXNtZSwgd3NtZXNzYWdlLCBuaWNrbmFtZSwgZ2FtZWlkfSkgPT4ge1xyXG4gICAgY29uc3QgW3NuYXQsIHNldFNuYXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dhbWVkYXRhLCBzZXRHYW1lZGF0YV0gPSB1c2VTdGF0ZSh7Z29hbDo5OSwgd2hvc2V0dXJuOi0xLCBmcnlMZXR0ZXJzOltdLCBwbGF5ZXJzOlt7aW5kZXg6IDAsIG5pY2tuYW1lOiAnTG9hZGluZy4uLid9XX0pO1xyXG4gICAgY29uc3QgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoJycpOyAvLyBteSB3b3JkIHRvIHN1Ym1pdFxyXG4gICAgY29uc3QgW3N5bmNzdGFtcCwgc2V0U3luY3N0YW1wXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGdhbWVkYXRhLndob3NldHVybiA+IC0xICYmIGdhbWVkYXRhLnBsYXllcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmM6ICdpbnRlcnZhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3luY3N0YW1wOiBzeW5jc3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBnYW1laWQ6IGdhbWVkYXRhLmdhbWVpZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBjLlBJTkdfSU5URVJWQUwpOyAvLyB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzIGJldHdlZW4gYWJvdmUgY29kZSBibG9jayBleGVjdXRpb25zXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NHYW1lTWVzc2FnZShtc2cpO1xyXG4gICAgfSxbd3NtZXNzYWdlXSlcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gYy5DTElFTlRfVFlQRV9GWUIpIHtcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IGMuUzJDX0ZVTkNfR0FNRURBVEEpIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQobWVzc2FnZURhdGEuc25hdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZURhdGEuZ2FtZS5mcnlMZXR0ZXJzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZWRhdGEuZnJ5TGV0dGVycyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VEYXRhLmdhbWUuZnJ5TGV0dGVycy5qb2luKCkgIT09IGdhbWVkYXRhLmZyeUxldHRlcnMuam9pbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRHYW1lZGF0YShtZXNzYWdlRGF0YS5nYW1lKTtcclxuICAgICAgICAgICAgICAgIHNldFN5bmNzdGFtcChtZXNzYWdlRGF0YS5nYW1lLnN5bmNzdGFtcCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9IGMuUzJDX0ZVTkNfR0FNRUNSRUFURUQpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdGhpbmcgdG8gZG8sIHRoaXMgaXMgcmVhbGx5IGZvciB0aGUgbG9iYnkgZHdlbGxlcnNcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFNuYXQoYFVuaGFuZGxlZCBtZXNzYWdlOiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghbWVUb0VudGVyV29yZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHN1Ym1pdFBsYXllcldvcmQod29yZCwgZ2FtZWRhdGEsIHNldFNuYXQsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lLCBzZXRXb3JkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZVRvRW50ZXJXb3JkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChnYW1lZGF0YS53aG9zZXR1cm4gPCAwKSB7IC8vIEdhbWUgaGFzIG5vdCBzdGFydGVkIG9yIGhhcyBlbmRlZFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lZGF0YS5mcmVlZm9yYWxsKSB7IC8vIEluIGZyZWUtZm9yLWFsbCByb3VuZFxyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEuZXhjbHVkZWRQbGF5ZXIgPT09IG5pY2tuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXNbaV0ubmlja25hbWUgPT09IG5pY2tuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAobmlja25hbWUgPT09IGdhbWVkYXRhLnBsYXllcnNbZ2FtZWRhdGEud2hvc2V0dXJuXS5uaWNrbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmeWJHYW1lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnliSGVhZGVyRGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoMlwiPkZyeSBZb3VyIEJyYWluPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmeWJIb21lQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnliSGVhZGVyRGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoNFwiPkdhbWUgaWQ6IHtnYW1laWR9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIyXCIgY2xhc3NOYW1lPVwiZnliR2FtZVNlY3Rpb25IZWFkZXJcIj5GaXJzdCB0byB7Z2FtZWRhdGEuZ29hbH0gd2lucyE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVkYXRhLnBsYXllcnMubWFwKChwbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgUGxheWVyJHtwbC5pbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmeWJHYW1lUGxheWVyXCI+e3BsLm5pY2tuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZnliR2FtZVNjb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLnBvaW50cyA8IDEwID8gPHNwYW4+Jm5ic3A7PC9zcGFuPiA6ICcnfXtwbC5wb2ludHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLnBvaW50cyA+PSBnYW1lZGF0YS5nb2FsICYmIDxzcGFuIGNsYXNzTmFtZT1cImZ5Yldpbm5lclwiPldpbm5lciE8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNQcmV2Um91bmQgJiYgZ2FtZWRhdGEubW92ZXNQcmV2Um91bmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZnliR2FtZVNlY3Rpb25IZWFkZXJcIiBjb2xTcGFuPVwiMlwiPlByZXZpb3VzIHJvdW5kOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb3ZlTGlzdCgnbW92ZXNQcmV2Um91bmQnLCBnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVkYXRhLm1vdmVzVGhpc1JvdW5kICYmIGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZ5YkdhbWVTZWN0aW9uSGVhZGVyXCIgY29sU3Bhbj1cIjJcIj5UaGlzIHJvdW5kOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb3ZlTGlzdCgnbW92ZXNUaGlzUm91bmQnLCBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFnYW1lZGF0YS5mcmVlZm9yYWxsICYmIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3ZlcyAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZnliR2FtZVNlY3Rpb25IZWFkZXJcIiBjb2xTcGFuPVwiMlwiPkZyZWUtZm9yLWFsbDo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7IWdhbWVkYXRhLmZyZWVmb3JhbGwgJiYgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzICYmIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3Zlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb3ZlTGlzdCgnZmZhTW92ZXMnLCBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAge2dhbWVkYXRhLndob3NldHVybiA+IC0xICYmXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ5YkdhbWVGcnlMZXR0ZXJzTGFiZWxcIj5GcnkgTGV0dGVyczpcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZ5YkdhbWVTaHVmZmxlQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2h1ZmZsZVNpemUgPSBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJlZm9yZVNodWZmbGUgPSBbLi4uZ2FtZWRhdGEuZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZnRlclNodWZmbGUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGFmdGVyU2h1ZmZsZS5sZW5ndGggPCBzaHVmZmxlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBiZWZvcmVTaHVmZmxlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlclNodWZmbGUucHVzaChiZWZvcmVTaHVmZmxlW3JhbmRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNodWZmbGUuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3R2FtZWRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdhbWVkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0dhbWVkYXRhLmZyeUxldHRlcnMgPSBbLi4uYWZ0ZXJTaHVmZmxlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobmV3R2FtZWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBmeWJHYW1lU2h1ZmZsZUJ1dHRvbkljb25cIj5jYWNoZWQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmeWJHYW1lU2h1ZmZsZUJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNvcnR3b3JrID0gWy4uLmdhbWVkYXRhLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0d29yay5zb3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdHYW1lZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2FtZWRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3R2FtZWRhdGEuZnJ5TGV0dGVycyA9IFsuLi5zb3J0d29ya107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG5ld0dhbWVkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZnliR2FtZVNodWZmbGVCdXR0b25JY29uXCI+c29ydF9ieV9hbHBoYTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcnlMZXR0ZXJEaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZWRhdGEuZnJ5TGV0dGVycy5tYXAoKGZsLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgRnJ5TGV0dGVyJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2kgPT09IHNlbGVjdGVkID8gXCJmeWJGcnlMZXR0ZXIgU2VsZWN0ZWRcIjpcImZ5YkZyeUxldHRlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGBpPSR7aX0gc2VsZWN0ZWQ9JHtzZWxlY3RlZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpOyAvLyB1bnNlbGVjdCB3aGVuIGNsaWNrZWQgYSBzZWNvbmQgdGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgc2VsZWN0ZWQgdGlsZSB0byB0aGlzIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlmdGVkTGV0dGVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZUxldHRlciA9IGdhbWVkYXRhLmZyeUxldHRlcnNbc2VsZWN0ZWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZ2FtZWRhdGEuZnJ5TGV0dGVycy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnYW1lZGF0YS5mcnlMZXR0ZXJzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2gobW92ZUxldHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChgZnJvbSAke2dhbWVkYXRhLmZyeUxldHRlcnN9IHRvICR7c2hpZnRlZExldHRlcnN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdHYW1lZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2FtZWRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3R2FtZWRhdGEuZnJ5TGV0dGVycyA9IFsuLi5zaGlmdGVkTGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG5ld0dhbWVkYXRhKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPntmbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICB7bWVUb0VudGVyV29yZCgpICYmXHJcbiAgICAgICAgICAgICAgICBnZXRQbGF5ZXJXb3JkKGhhbmRsZUtleURvd24sIHdvcmQsIHNldFdvcmQsIGdhbWVkYXRhLCBzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Z2FtZWRhdGEuZ2FtZU92ZXIgJiYgPGRpdiBjbGFzc05hbWU9XCJmeWJHYW1lT3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnliR2FtZVNlY3Rpb25IZWFkZXJcIj5HYW1lIE92ZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnliR2FtZVdvcmRTdWJtaXRCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZW5kUmVwbGF5UmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1lZGF0YSwgbmlja25hbWUpfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQTEFZIEFHQUlOXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmeWJTbmF0XCI+e3NuYXR9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dNb3ZlTGlzdChtb3ZlTGlzdEtleSwgbW92ZUFycmF5KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIG1vdmVBcnJheS5tYXAoKG1vdmUpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17YCR7bW92ZUxpc3RLZXl9JHttb3ZlLm5pY2tuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZ5YkdhbWVQbGF5ZXJcIj57bW92ZS5uaWNrbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZ5YkdhbWVXb3JkXCI+XHJcbiAgICAgICAgICAgICAgICB7bW92ZS5wYXNzID9cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmeWJHYW1lV29yZCBwYXNzXCI+IHBhc3NlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BmeWJHYW1lV29yZCAke21vdmUudmFsaWQgPyAndmFsaWQnIDogJ2ludmFsaWQnfWB9Pnttb3ZlLndvcmR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGxheWVyV29yZChoYW5kbGVLZXlEb3duLCB3b3JkLCBzZXRXb3JkLCBnYW1lZGF0YSwgc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgbmlja25hbWUpIHtcclxuICAgIHJldHVybiA8ZGl2IG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnliR2FtZUVudGVyV29yZExhYmVsXCI+RW50ZXIgV29yZDo8L2Rpdj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwid29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFdvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7d29yZC50b1VwcGVyQ2FzZSgpLnRyaW0oKS5tYXRjaChcIl5bYS16QS1aXSokXCIpICYmIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmeWJHYW1lV29yZFN1Ym1pdEJ1dHRvblwiIGtleT1cInN1Ym1pdFdvcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBsYXllcldvcmQod29yZCwgZ2FtZWRhdGEsIHNldFNuYXQsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lLCBzZXRXb3JkKX19PlxyXG4gICAgICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZnliR2FtZVdvcmRQYXNzQnV0dG9uXCIga2V5PVwicGFzc0J1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzdWJtaXRQYXNzKHNldFNuYXQsIGNsaWVudCwgdGhpc2lzbWUsIGdhbWVkYXRhLmdhbWVpZCwgbmlja25hbWUsIHNldFdvcmQpfX0+XHJcbiAgICAgICAgICAgICAgICBQQVNTXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRQbGF5ZXJXb3JkKHdvcmQsIGdhbWVkYXRhLCBzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSwgc2V0V29yZCkge1xyXG4gICAgbGV0IGZpeGVkd29yZCA9IHdvcmQudG9VcHBlckNhc2UoKS50cmltKCk7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgd29yZCBpcyBhbGxvd2VkIGJhc2VkIG9uIHByZXZpb3VzIHdvcmRzIHRoaXMgcm91bmRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBwdyA9IGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kW2ldLndvcmQ7XHJcbiAgICAgICAgaWYgKHB3ID09PSBmaXhlZHdvcmQpIHtcclxuICAgICAgICAgICAgc2V0U25hdChgWW91IGNhbm5vdCByZXVzZSBhIHByZXZpb3VzIHdvcmQgZnJvbSB0aGlzIHJvdW5kICgke3B3fSkuYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHB3ICsgJ1MnID09PSBmaXhlZHdvcmQgJiYgcHcuc3Vic3RyaW5nKHB3Lmxlbmd0aC0xKSAhPT0gJ1MnICYmIGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kW2ldLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHNldFNuYXQoYFlvdSBjYW5ub3QgYWRkIFMgdG8gYSBwcmV2aW91cyB2YWxpZCB3b3JkICgke3B3fSkgZnJvbSB0aGlzIHJvdW5kIHVubGVzcyBpdCBlbmRzIHdpdGggUy5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIENoZWNrIGlmIHRoZSBoYXZlIGFsbCB0aGUgZnJ5IGxldHRlcnNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWRhdGEuZnJ5TGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBsZXR0ZXJDb3VudFJlcXVpcmVkID0gMDtcclxuICAgICAgICBsZXQgYWN0dWFsTGV0dGVyQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2FtZWRhdGEuZnJ5TGV0dGVycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEuZnJ5TGV0dGVyc1tpXSA9PT0gZ2FtZWRhdGEuZnJ5TGV0dGVyc1tqXSkge1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyQ291bnRSZXF1aXJlZCA9IGxldHRlckNvdW50UmVxdWlyZWQgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZml4ZWR3b3JkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lZGF0YS5mcnlMZXR0ZXJzW2ldID09PSBmaXhlZHdvcmRbal0pIHtcclxuICAgICAgICAgICAgICAgIGFjdHVhbExldHRlckNvdW50ID0gYWN0dWFsTGV0dGVyQ291bnQgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhY3R1YWxMZXR0ZXJDb3VudCA8IGxldHRlckNvdW50UmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgc2V0U25hdChgWW91IG5lZWQgdGhlIGxldHRlciAke2dhbWVkYXRhLmZyeUxldHRlcnNbaV19IGF0IGxlYXN0ICR7bGV0dGVyQ291bnRSZXF1aXJlZH0gdGltZSR7bGV0dGVyQ291bnRSZXF1aXJlZCA9PT0gMSA/ICcuJyA6ICdzLid9YCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBJZiB5b3UgZ2V0IGhlcmUgdGhleSBoYXZlIGFsbCB0aGUgcmVxdWlyZWQgbGV0dGVycy4gU2VuZCB0aGUgZ3Vlc3MgdG8gdGhlIHNlcnZlci5cclxuICAgIHNldFNuYXQoYENoZWNraW5nIHlvdXIgd29yZCAuLi4gc2hvdWxkbid0IHRha2UgbG9uZy4gSWYgaXQgZG9lcywgcGxlYXNlIHRyeSByZWpvaW5pbmcgdGhlIGdhbWUuYCk7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ21vdmUnLFxyXG4gICAgICAgIHBhc3M6IGZhbHNlLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVkYXRhLmdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIHdvcmQ6IGZpeGVkd29yZFxyXG4gICAgfSk7XHJcbiAgICBzZXRXb3JkKCcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0UGFzcyhzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lLCBzZXRXb3JkKSB7XHJcbiAgICAvLyBJZiB5b3UgZ2V0IGhlcmUgdGhleSBoYXZlIGFsbCB0aGUgcmVxdWlyZWQgbGV0dGVycy4gU2VuZCB0aGUgZ3Vlc3MgdG8gdGhlIHNlcnZlci5cclxuICAgIHNldFNuYXQoYFNlbmRpbmcgUEFTUyAuLi4gc2hvdWxkbid0IHRha2UgbG9uZy5gKTtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAnbW92ZScsXHJcbiAgICAgICAgcGFzczogdHJ1ZSxcclxuICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgd29yZDogJydcclxuICAgIH0pO1xyXG4gICAgc2V0V29yZCgnJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRSZXBsYXlSZXF1ZXN0KGNsaWVudCwgdGhpc2lzbWUsIGdhbWVkYXRhLCBuaWNrbmFtZSkge1xyXG4gICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgIGZ1bmM6ICdyZXBsYXknLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1lOiBnYW1lZGF0YSxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==