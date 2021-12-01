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
      } else if (messageData.func === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.S2C_FUNC_GAMECREATED) {// Nothing to do, this is really for the lobby dwellers
      } else {
        // I think this happens when a web socket connection drops and the new one loses the gameid on the server wss.clients
        // So send a rejoin request to get the server back on track
        client.send({
          type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB,
          func: 'rejoin',
          thisisme: thisisme,
          gameid: gamedata.gameid,
          nickname: nickname,
          timestamp: Date.now()
        });
        setSnat(`From the author: Sorry about this note to self - sent rejoin to resync due to unexpected message: ${message}`);
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
        lineNumber: 90,
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
          lineNumber: 92,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fybHeaderDiv",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "h4",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
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
            lineNumber: 101,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, undefined), gamedata.players.map(pl => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGamePlayer",
            children: pl.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGameScore",
            children: [pl.points < 10 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 51
            }, undefined) : '', pl.points, pl.points >= gamedata.goal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "fybWinner",
              children: "Winner!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 64
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 29
          }, undefined)]
        }, `Player${pl.index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 25
        }, undefined)), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGameSectionHeader",
            colSpan: "2",
            children: "Previous round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 25
        }, undefined), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && showMoveList('movesPrevRound', gamedata.movesPrevRound), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGameSectionHeader",
            colSpan: "2",
            children: "This round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 25
        }, undefined), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && showMoveList('movesThisRound', gamedata.movesThisRound), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "fybGameSectionHeader",
            colSpan: "2",
            children: "Free-for-all:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 25
        }, undefined), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && showMoveList('ffaMoves', gamedata.freeforallMoves)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
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
            lineNumber: 154,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
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
            lineNumber: 163,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "fryLetterDiv",
        children: gamedata.fryLetters.map((fl, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: i === selected ? "fybFryLetter Selected" : "fybFryLetter",
          onDoubleClick: () => {
            let moveLetter = gamedata.fryLetters[i];
            let shiftedLetters = [...gamedata.fryLetters];
            shiftedLetters.splice(i, 1);
            shiftedLetters.push(moveLetter);
            let newGamedata = JSON.parse(JSON.stringify(gamedata));
            newGamedata.fryLetters = [...shiftedLetters];
            setGamedata(newGamedata);
            setSelected(-1);
          },
          onClick: () => {
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

              let newGamedata = JSON.parse(JSON.stringify(gamedata));
              newGamedata.fryLetters = [...shiftedLetters];
              setGamedata(newGamedata);
              setSelected(-1);
            }
          },
          children: fl
        }, `FryLetter${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "fryAnswerCountDiv",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "fryAnswerCount",
          children: gamedata.numPossibleAnswers
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }, undefined), meToEnterWord() && getPlayerWord(handleKeyDown, word, setWord, gamedata, setSnat, client, thisisme, nickname), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [gamedata.gameOver && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "fybGameOver",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "fybGameSectionHeader",
          children: "Game Over"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "fybGameWordSubmitButton",
          onClick: () => {
            sendReplayRequest(client, thisisme, gamedata, nickname);
          },
          children: "PLAY AGAIN"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 35
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "fybSnat",
        children: snat
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
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
      lineNumber: 234,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      className: "fybGameWord",
      children: move.pass ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "fybGameWord pass",
        children: " passed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: `fybGameWord ${move.valid ? 'valid' : 'invalid'} ${move.word.length > 12 && move.earned ? 'long' : move.word.length > 13 ? 'long' : ''}`,
        children: [move.word, move.earned && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [" (", move.earned, " pts)"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 41
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }, this)]
  }, `${moveListKey}${move.nickname}`, true, {
    fileName: _jsxFileName,
    lineNumber: 233,
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
      lineNumber: 251,
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
      lineNumber: 252,
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
        lineNumber: 261,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "fybGameWordPassButton",
        onClick: () => {
          submitPass(setSnat, client, thisisme, gamedata.gameid, nickname, setWord);
        },
        children: "PASS"
      }, "passButton", false, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 250,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInNldFdoZXJldG8iLCJjbGllbnQiLCJ0aGlzaXNtZSIsIndzbWVzc2FnZSIsIm5pY2tuYW1lIiwiZ2FtZWlkIiwic25hdCIsInNldFNuYXQiLCJ1c2VTdGF0ZSIsImdhbWVkYXRhIiwic2V0R2FtZWRhdGEiLCJnb2FsIiwid2hvc2V0dXJuIiwiZnJ5TGV0dGVycyIsInBsYXllcnMiLCJpbmRleCIsIndvcmQiLCJzZXRXb3JkIiwic3luY3N0YW1wIiwic2V0U3luY3N0YW1wIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzZW5kIiwidHlwZSIsImMiLCJmdW5jIiwiY2xlYXJJbnRlcnZhbCIsIm1zZyIsInByb2Nlc3NHYW1lTWVzc2FnZSIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsImdhbWUiLCJqb2luIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImhhbmRsZUtleURvd24iLCJldmVudCIsIm1lVG9FbnRlcldvcmQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdFBsYXllcldvcmQiLCJmcmVlZm9yYWxsIiwiZXhjbHVkZWRQbGF5ZXIiLCJpIiwiZnJlZWZvcmFsbE1vdmVzIiwibWFwIiwicGwiLCJwb2ludHMiLCJtb3Zlc1ByZXZSb3VuZCIsInNob3dNb3ZlTGlzdCIsIm1vdmVzVGhpc1JvdW5kIiwic2h1ZmZsZVNpemUiLCJiZWZvcmVTaHVmZmxlIiwiYWZ0ZXJTaHVmZmxlIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzcGxpY2UiLCJuZXdHYW1lZGF0YSIsInN0cmluZ2lmeSIsInNvcnR3b3JrIiwic29ydCIsImZsIiwibW92ZUxldHRlciIsInNoaWZ0ZWRMZXR0ZXJzIiwiZWxlbWVudCIsIm51bVBvc3NpYmxlQW5zd2VycyIsImdldFBsYXllcldvcmQiLCJnYW1lT3ZlciIsInNlbmRSZXBsYXlSZXF1ZXN0IiwibW92ZUxpc3RLZXkiLCJtb3ZlQXJyYXkiLCJtb3ZlIiwicGFzcyIsInZhbGlkIiwiZWFybmVkIiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9VcHBlckNhc2UiLCJ0cmltIiwibWF0Y2giLCJzdWJtaXRQYXNzIiwiZml4ZWR3b3JkIiwicHciLCJzdWJzdHJpbmciLCJsZXR0ZXJDb3VudFJlcXVpcmVkIiwiYWN0dWFsTGV0dGVyQ291bnQiLCJqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUNDLFlBQUQ7QUFBYUMsUUFBYjtBQUFxQkMsVUFBckI7QUFBK0JDLFdBQS9CO0FBQTBDQyxVQUExQztBQUFvREM7QUFBcEQsQ0FBRCxLQUFpRTtBQUFBOztBQUMxRSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsK0NBQVEsQ0FBQztBQUFDRyxRQUFJLEVBQUMsRUFBTjtBQUFVQyxhQUFTLEVBQUMsQ0FBQyxDQUFyQjtBQUF3QkMsY0FBVSxFQUFDLEVBQW5DO0FBQXVDQyxXQUFPLEVBQUMsQ0FBQztBQUFDQyxXQUFLLEVBQUUsQ0FBUjtBQUFXWCxjQUFRLEVBQUU7QUFBckIsS0FBRDtBQUEvQyxHQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNZLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEMsQ0FIMEUsQ0FHcEM7O0FBQ3RDLFFBQU07QUFBQSxPQUFDVSxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QlgsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNZLFFBQUQ7QUFBQSxPQUFXQztB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NzkwZWM1OTgxNjc3MGVkODlhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvZnliL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBHYW1lID0gKHtzZXRXaGVyZXRvLCBjbGllbnQsIHRoaXNpc21lLCB3c21lc3NhZ2UsIG5pY2tuYW1lLCBnYW1laWR9KSA9PiB7XHJcbiAgICBjb25zdCBbc25hdCwgc2V0U25hdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ2FtZWRhdGEsIHNldEdhbWVkYXRhXSA9IHVzZVN0YXRlKHtnb2FsOjk5LCB3aG9zZXR1cm46LTEsIGZyeUxldHRlcnM6W10sIHBsYXllcnM6W3tpbmRleDogMCwgbmlja25hbWU6ICdMb2FkaW5nLi4uJ31dfSk7XHJcbiAgICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZSgnJyk7IC8vIG15IHdvcmQgdG8gc3VibWl0XHJcbiAgICBjb25zdCBbc3luY3N0YW1wLCBzZXRTeW5jc3RhbXBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEud2hvc2V0dXJuID4gLTEgJiYgZ2FtZWRhdGEucGxheWVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuYzogJ2ludGVydmFsJyxcclxuICAgICAgICAgICAgICAgICAgICBzeW5jc3RhbXA6IHN5bmNzdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGMuUElOR19JTlRFUlZBTCk7IC8vIHRoaXMgbWFueSBtaWxsaXNlY29uZHMgYmV0d2VlbiBhYm92ZSBjb2RlIGJsb2NrIGV4ZWN1dGlvbnNcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7XHJcbiAgICB9LFt3c21lc3NhZ2VdKVxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0dhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09PSBjLkNMSUVOVF9UWVBFX0ZZQikge1xyXG4gICAgICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gYy5TMkNfRlVOQ19HQU1FREFUQSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdChtZXNzYWdlRGF0YS5zbmF0KTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS5nYW1lLmZyeUxldHRlcnMgJiZcclxuICAgICAgICAgICAgICAgICAgICBnYW1lZGF0YS5mcnlMZXR0ZXJzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZURhdGEuZ2FtZS5mcnlMZXR0ZXJzLmpvaW4oKSAhPT0gZ2FtZWRhdGEuZnJ5TGV0dGVycy5qb2luKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG1lc3NhZ2VEYXRhLmdhbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3luY3N0YW1wKG1lc3NhZ2VEYXRhLmdhbWUuc3luY3N0YW1wKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBjLlMyQ19GVU5DX0dBTUVDUkVBVEVEKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIHRvIGRvLCB0aGlzIGlzIHJlYWxseSBmb3IgdGhlIGxvYmJ5IGR3ZWxsZXJzXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJIHRoaW5rIHRoaXMgaGFwcGVucyB3aGVuIGEgd2ViIHNvY2tldCBjb25uZWN0aW9uIGRyb3BzIGFuZCB0aGUgbmV3IG9uZSBsb3NlcyB0aGUgZ2FtZWlkIG9uIHRoZSBzZXJ2ZXIgd3NzLmNsaWVudHNcclxuICAgICAgICAgICAgICAgIC8vIFNvIHNlbmQgYSByZWpvaW4gcmVxdWVzdCB0byBnZXQgdGhlIHNlcnZlciBiYWNrIG9uIHRyYWNrXHJcbiAgICAgICAgICAgICAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuYzogJ3Jlam9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0U25hdChgRnJvbSB0aGUgYXV0aG9yOiBTb3JyeSBhYm91dCB0aGlzIG5vdGUgdG8gc2VsZiAtIHNlbnQgcmVqb2luIHRvIHJlc3luYyBkdWUgdG8gdW5leHBlY3RlZCBtZXNzYWdlOiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghbWVUb0VudGVyV29yZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHN1Ym1pdFBsYXllcldvcmQod29yZCwgZ2FtZWRhdGEsIHNldFNuYXQsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lLCBzZXRXb3JkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZVRvRW50ZXJXb3JkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChnYW1lZGF0YS53aG9zZXR1cm4gPCAwKSB7IC8vIEdhbWUgaGFzIG5vdCBzdGFydGVkIG9yIGhhcyBlbmRlZFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lZGF0YS5mcmVlZm9yYWxsKSB7IC8vIEluIGZyZWUtZm9yLWFsbCByb3VuZFxyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEuZXhjbHVkZWRQbGF5ZXIgPT09IG5pY2tuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXNbaV0ubmlja25hbWUgPT09IG5pY2tuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAobmlja25hbWUgPT09IGdhbWVkYXRhLnBsYXllcnNbZ2FtZWRhdGEud2hvc2V0dXJuXS5uaWNrbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmeWJHYW1lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnliSGVhZGVyRGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoMlwiPkZyeSBZb3VyIEJyYWluPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmeWJIb21lQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnliSGVhZGVyRGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoNFwiPkdhbWUgaWQ6IHtnYW1laWR9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIyXCIgY2xhc3NOYW1lPVwiZnliR2FtZVNlY3Rpb25IZWFkZXJcIj5GaXJzdCB0byB7Z2FtZWRhdGEuZ29hbH0gd2lucyE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVkYXRhLnBsYXllcnMubWFwKChwbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgUGxheWVyJHtwbC5pbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmeWJHYW1lUGxheWVyXCI+e3BsLm5pY2tuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZnliR2FtZVNjb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLnBvaW50cyA8IDEwID8gPHNwYW4+Jm5ic3A7PC9zcGFuPiA6ICcnfXtwbC5wb2ludHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLnBvaW50cyA+PSBnYW1lZGF0YS5nb2FsICYmIDxzcGFuIGNsYXNzTmFtZT1cImZ5Yldpbm5lclwiPldpbm5lciE8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNQcmV2Um91bmQgJiYgZ2FtZWRhdGEubW92ZXNQcmV2Um91bmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZnliR2FtZVNlY3Rpb25IZWFkZXJcIiBjb2xTcGFuPVwiMlwiPlByZXZpb3VzIHJvdW5kOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb3ZlTGlzdCgnbW92ZXNQcmV2Um91bmQnLCBnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVkYXRhLm1vdmVzVGhpc1JvdW5kICYmIGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZ5YkdhbWVTZWN0aW9uSGVhZGVyXCIgY29sU3Bhbj1cIjJcIj5UaGlzIHJvdW5kOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb3ZlTGlzdCgnbW92ZXNUaGlzUm91bmQnLCBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFnYW1lZGF0YS5mcmVlZm9yYWxsICYmIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3ZlcyAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZnliR2FtZVNlY3Rpb25IZWFkZXJcIiBjb2xTcGFuPVwiMlwiPkZyZWUtZm9yLWFsbDo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7IWdhbWVkYXRhLmZyZWVmb3JhbGwgJiYgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzICYmIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3Zlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb3ZlTGlzdCgnZmZhTW92ZXMnLCBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAge2dhbWVkYXRhLndob3NldHVybiA+IC0xICYmXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ5YkdhbWVGcnlMZXR0ZXJzTGFiZWxcIj5GcnkgTGV0dGVyczpcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZ5YkdhbWVTaHVmZmxlQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2h1ZmZsZVNpemUgPSBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJlZm9yZVNodWZmbGUgPSBbLi4uZ2FtZWRhdGEuZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZnRlclNodWZmbGUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGFmdGVyU2h1ZmZsZS5sZW5ndGggPCBzaHVmZmxlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBiZWZvcmVTaHVmZmxlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlclNodWZmbGUucHVzaChiZWZvcmVTaHVmZmxlW3JhbmRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNodWZmbGUuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3R2FtZWRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdhbWVkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0dhbWVkYXRhLmZyeUxldHRlcnMgPSBbLi4uYWZ0ZXJTaHVmZmxlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobmV3R2FtZWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBmeWJHYW1lU2h1ZmZsZUJ1dHRvbkljb25cIj5jYWNoZWQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmeWJHYW1lU2h1ZmZsZUJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNvcnR3b3JrID0gWy4uLmdhbWVkYXRhLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0d29yay5zb3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdHYW1lZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2FtZWRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3R2FtZWRhdGEuZnJ5TGV0dGVycyA9IFsuLi5zb3J0d29ya107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG5ld0dhbWVkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZnliR2FtZVNodWZmbGVCdXR0b25JY29uXCI+c29ydF9ieV9hbHBoYTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcnlMZXR0ZXJEaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZWRhdGEuZnJ5TGV0dGVycy5tYXAoKGZsLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgRnJ5TGV0dGVyJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2kgPT09IHNlbGVjdGVkID8gXCJmeWJGcnlMZXR0ZXIgU2VsZWN0ZWRcIjpcImZ5YkZyeUxldHRlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlTGV0dGVyID0gZ2FtZWRhdGEuZnJ5TGV0dGVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpZnRlZExldHRlcnMgPSBbLi4uZ2FtZWRhdGEuZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChtb3ZlTGV0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3R2FtZWRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdhbWVkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3R2FtZWRhdGEuZnJ5TGV0dGVycyA9IFsuLi5zaGlmdGVkTGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobmV3R2FtZWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTsgLy8gdW5zZWxlY3Qgd2hlbiBjbGlja2VkIGEgc2Vjb25kIHRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIHNlbGVjdGVkIHRpbGUgdG8gdGhpcyBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpZnRlZExldHRlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVMZXR0ZXIgPSBnYW1lZGF0YS5mcnlMZXR0ZXJzW3NlbGVjdGVkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdhbWVkYXRhLmZyeUxldHRlcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2FtZWRhdGEuZnJ5TGV0dGVyc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKG1vdmVMZXR0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0dhbWVkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnYW1lZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdHYW1lZGF0YS5mcnlMZXR0ZXJzID0gWy4uLnNoaWZ0ZWRMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobmV3R2FtZWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID57Zmx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyeUFuc3dlckNvdW50RGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcnlBbnN3ZXJDb3VudFwiPntnYW1lZGF0YS5udW1Qb3NzaWJsZUFuc3dlcnN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICB7bWVUb0VudGVyV29yZCgpICYmXHJcbiAgICAgICAgICAgICAgICBnZXRQbGF5ZXJXb3JkKGhhbmRsZUtleURvd24sIHdvcmQsIHNldFdvcmQsIGdhbWVkYXRhLCBzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Z2FtZWRhdGEuZ2FtZU92ZXIgJiYgPGRpdiBjbGFzc05hbWU9XCJmeWJHYW1lT3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnliR2FtZVNlY3Rpb25IZWFkZXJcIj5HYW1lIE92ZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnliR2FtZVdvcmRTdWJtaXRCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZW5kUmVwbGF5UmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1lZGF0YSwgbmlja25hbWUpfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQTEFZIEFHQUlOXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmeWJTbmF0XCI+e3NuYXR9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dNb3ZlTGlzdChtb3ZlTGlzdEtleSwgbW92ZUFycmF5KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIG1vdmVBcnJheS5tYXAoKG1vdmUpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17YCR7bW92ZUxpc3RLZXl9JHttb3ZlLm5pY2tuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZ5YkdhbWVQbGF5ZXJcIj57bW92ZS5uaWNrbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZ5YkdhbWVXb3JkXCI+XHJcbiAgICAgICAgICAgICAgICB7bW92ZS5wYXNzID9cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmeWJHYW1lV29yZCBwYXNzXCI+IHBhc3NlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BmeWJHYW1lV29yZCAke21vdmUudmFsaWQgPyAndmFsaWQnIDogJ2ludmFsaWQnfSAke21vdmUud29yZC5sZW5ndGggPiAxMiAmJiBtb3ZlLmVhcm5lZCA/ICdsb25nJyA6IG1vdmUud29yZC5sZW5ndGggPiAxMyA/ICdsb25nJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92ZS53b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92ZS5lYXJuZWQgJiYgPHNwYW4+ICh7bW92ZS5lYXJuZWR9IHB0cyk8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBsYXllcldvcmQoaGFuZGxlS2V5RG93biwgd29yZCwgc2V0V29yZCwgZ2FtZWRhdGEsIHNldFNuYXQsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lKSB7XHJcbiAgICByZXR1cm4gPGRpdiBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ5YkdhbWVFbnRlcldvcmRMYWJlbFwiPkVudGVyIFdvcmQ6PC9kaXY+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgbmFtZT1cIndvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17d29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRXb3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3dvcmQudG9VcHBlckNhc2UoKS50cmltKCkubWF0Y2goXCJeW2EtekEtWl0qJFwiKSAmJiBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZnliR2FtZVdvcmRTdWJtaXRCdXR0b25cIiBrZXk9XCJzdWJtaXRXb3JkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzdWJtaXRQbGF5ZXJXb3JkKHdvcmQsIGdhbWVkYXRhLCBzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSwgc2V0V29yZCl9fT5cclxuICAgICAgICAgICAgICAgICAgICBTVUJNSVRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZ5YkdhbWVXb3JkUGFzc0J1dHRvblwiIGtleT1cInBhc3NCdXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGFzcyhzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBnYW1lZGF0YS5nYW1laWQsIG5pY2tuYW1lLCBzZXRXb3JkKX19PlxyXG4gICAgICAgICAgICAgICAgUEFTU1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0UGxheWVyV29yZCh3b3JkLCBnYW1lZGF0YSwgc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgbmlja25hbWUsIHNldFdvcmQpIHtcclxuICAgIGxldCBmaXhlZHdvcmQgPSB3b3JkLnRvVXBwZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHdvcmQgaXMgYWxsb3dlZCBiYXNlZCBvbiBwcmV2aW91cyB3b3JkcyB0aGlzIHJvdW5kXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcHcgPSBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZFtpXS53b3JkO1xyXG4gICAgICAgIGlmIChwdyA9PT0gZml4ZWR3b3JkKSB7XHJcbiAgICAgICAgICAgIHNldFNuYXQoYFlvdSBjYW5ub3QgcmV1c2UgYSBwcmV2aW91cyB3b3JkIGZyb20gdGhpcyByb3VuZCAoJHtwd30pLmApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwdyArICdTJyA9PT0gZml4ZWR3b3JkICYmIHB3LnN1YnN0cmluZyhwdy5sZW5ndGgtMSkgIT09ICdTJyAmJiBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZFtpXS52YWxpZCkge1xyXG4gICAgICAgICAgICBzZXRTbmF0KGBZb3UgY2Fubm90IGFkZCBTIHRvIGEgcHJldmlvdXMgdmFsaWQgd29yZCAoJHtwd30pIGZyb20gdGhpcyByb3VuZCB1bmxlc3MgaXQgZW5kcyB3aXRoIFMuYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgaGF2ZSBhbGwgdGhlIGZyeSBsZXR0ZXJzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVkYXRhLmZyeUxldHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbGV0dGVyQ291bnRSZXF1aXJlZCA9IDA7XHJcbiAgICAgICAgbGV0IGFjdHVhbExldHRlckNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVkYXRhLmZyeUxldHRlcnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVkYXRhLmZyeUxldHRlcnNbaV0gPT09IGdhbWVkYXRhLmZyeUxldHRlcnNbal0pIHtcclxuICAgICAgICAgICAgICAgIGxldHRlckNvdW50UmVxdWlyZWQgPSBsZXR0ZXJDb3VudFJlcXVpcmVkICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpeGVkd29yZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEuZnJ5TGV0dGVyc1tpXSA9PT0gZml4ZWR3b3JkW2pdKSB7XHJcbiAgICAgICAgICAgICAgICBhY3R1YWxMZXR0ZXJDb3VudCA9IGFjdHVhbExldHRlckNvdW50ICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWN0dWFsTGV0dGVyQ291bnQgPCBsZXR0ZXJDb3VudFJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgIHNldFNuYXQoYFlvdSBuZWVkIHRoZSBsZXR0ZXIgJHtnYW1lZGF0YS5mcnlMZXR0ZXJzW2ldfSBhdCBsZWFzdCAke2xldHRlckNvdW50UmVxdWlyZWR9IHRpbWUke2xldHRlckNvdW50UmVxdWlyZWQgPT09IDEgPyAnLicgOiAncy4nfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gSWYgeW91IGdldCBoZXJlIHRoZXkgaGF2ZSBhbGwgdGhlIHJlcXVpcmVkIGxldHRlcnMuIFNlbmQgdGhlIGd1ZXNzIHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICBzZXRTbmF0KGBDaGVja2luZyB5b3VyIHdvcmQgLi4uIHNob3VsZG4ndCB0YWtlIGxvbmcuIElmIGl0IGRvZXMsIHBsZWFzZSB0cnkgcmVqb2luaW5nIHRoZSBnYW1lLmApO1xyXG4gICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgIGZ1bmM6ICdtb3ZlJyxcclxuICAgICAgICBwYXNzOiBmYWxzZSxcclxuICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgZ2FtZWlkOiBnYW1lZGF0YS5nYW1laWQsXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICB3b3JkOiBmaXhlZHdvcmRcclxuICAgIH0pO1xyXG4gICAgc2V0V29yZCgnJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFBhc3Moc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCkge1xyXG4gICAgLy8gSWYgeW91IGdldCBoZXJlIHRoZXkgaGF2ZSBhbGwgdGhlIHJlcXVpcmVkIGxldHRlcnMuIFNlbmQgdGhlIGd1ZXNzIHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICBzZXRTbmF0KGBTZW5kaW5nIFBBU1MgLi4uIHNob3VsZG4ndCB0YWtlIGxvbmcuYCk7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ21vdmUnLFxyXG4gICAgICAgIHBhc3M6IHRydWUsXHJcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIHdvcmQ6ICcnXHJcbiAgICB9KTtcclxuICAgIHNldFdvcmQoJycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kUmVwbGF5UmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1lZGF0YSwgbmlja25hbWUpIHtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAncmVwbGF5JyxcclxuICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgZ2FtZTogZ2FtZWRhdGEsXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=