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
/* harmony import */ var _lib_usePrevious__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/usePrevious */ "./lib/usePrevious.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\fyb\\game.js",
    _s = $RefreshSig$();





const Game = ({
  ismobile,
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
    gameindex: 0,
    round: 0,
    freeforall: false,
    movesThisRound: [],
    movesPrevRound: [],
    whoseturn: -1,
    fryLetters: [],
    players: [{
      index: 0,
      nickname: 'Loading...',
      wins: 0
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
  const prevGamedata = (0,_lib_usePrevious__WEBPACK_IMPORTED_MODULE_3__.usePrevious)(gamedata);
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
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // This sound will not play on some mobiles. Something about needing a user interaction (protecting cell data usage).
    if (prevGamedata && gamedata.gameindex === prevGamedata.gameindex && gamedata.round === prevGamedata.round && gamedata.freeforall && !prevGamedata.freeforall) {
      var myaudio = document.createElement('audio'); // Decide between Oops (phoney played) and Pass (player passed)

      myaudio.src = gamedata.movesThisRound[gamedata.movesThisRound.length - 1].pass ? "https://tilerunner.github.io/Pass.m4a" : "https://tilerunner.github.io/Oops.m4a";
      myaudio.play();
    }
  }, [gamedata]); // Play a sound when a rescue is made

  function processGameMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.type === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.CLIENT_TYPE_FYB) {
      if (messageData.func === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_2__.S2C_FUNC_GAMEDATA) {
        /* SERVER SENT GAME DATA
        For a regular update due to player activity, this client needs the update.
          For dropped connections which made this client send a rejoin to update server's
           info for this client, which makes the server sends game info to this client,
           this client is already up to date and does not need the update. We do not take
           the update so as not to upset the fry letter rearrangements this client may have
           made.
        */
        if (messageData.game.gameindex !== gamedata.gameindex || messageData.game.round !== gamedata.round || messageData.goal !== gamedata.goal || messageData.players.length !== gamedata.players.length || messageData.game.movesThisRound.length !== gamedata.movesThisRound.length) {
          setSnat(messageData.snat);
          setSelected(-1);
          setGamedata(messageData.game);
          setSyncstamp(messageData.game.syncstamp);
        }
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
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trTitle",
      children: ["Fry Your Brain", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
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
          lineNumber: 131,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: ["Game id: ", gameid]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      className: "trTable",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: ["First to ", gamedata.goal, " wins!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }, undefined), gamedata.players.map(pl => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [pl.nickname, pl.wins > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: [" (", pl.wins, ")"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 37
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [pl.points < 10 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 51
            }, undefined) : '', pl.points, pl.points >= gamedata.goal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "trEmphasis",
              children: " Winner!\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 64
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 29
          }, undefined)]
        }, `Player${pl.index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 25
        }, undefined)), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: "Previous round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 25
        }, undefined), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && showMoveList('movesPrevRound', gamedata.movesPrevRound), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: "This round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 25
        }, undefined), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && showMoveList('movesThisRound', gamedata.movesThisRound), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: "Free-for-all:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 25
        }, undefined), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && showMoveList('ffaMoves', gamedata.freeforallMoves)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }, undefined), gamedata.whoseturn > -1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: ["Fry Letters:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton fryLetterActionButton",
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
            className: "material-icons fryLetterActionButtonIcon",
            children: "cached"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            let sortwork = [...gamedata.fryLetters];
            sortwork.sort();
            let newGamedata = JSON.parse(JSON.stringify(gamedata));
            newGamedata.fryLetters = [...sortwork];
            setGamedata(newGamedata);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "material-icons",
            children: "sort_by_alpha"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
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
          lineNumber: 212,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: ["(#Answers: ", gamedata.numPossibleAnswers, ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }, undefined), meToEnterWord() && getPlayerWord(handleKeyDown, word, setWord, gamedata, setSnat, client, thisisme, nickname), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [gamedata.gameOver && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: ["Game Over", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            sendReplayRequest(client, thisisme, gamedata, nickname);
          },
          children: "PLAY AGAIN"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 35
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph trWarning",
        children: snat
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 9
  }, undefined);
};

_s(Game, "6bNde8BPZku8btRUU01syhQlweY=", false, function () {
  return [_lib_usePrevious__WEBPACK_IMPORTED_MODULE_3__.usePrevious];
});

_c = Game;

function showMoveList(moveListKey, moveArray) {
  return moveArray.map(move => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      children: move.nickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      children: move.pass ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trDanger",
        children: " passed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: `${move.valid ? '' : 'trDanger'} ${move.word.length > 10 && move.earned ? 'long' : move.word.length > 13 ? 'long' : ''}`,
        children: [move.word, move.earned && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [" (", move.earned, " pts)"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 41
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 17
    }, this)]
  }, `${moveListKey}${move.nickname}`, true, {
    fileName: _jsxFileName,
    lineNumber: 277,
    columnNumber: 13
  }, this));
}

function getPlayerWord(handleKeyDown, word, setWord, gamedata, setSnat, client, thisisme, nickname) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    onKeyDownCapture: handleKeyDown,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trEmphasis",
      children: "Enter Word:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 295,
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
      lineNumber: 296,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [word.toUpperCase().trim().match("^[a-zA-Z]*$") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          submitPlayerWord(word, gamedata, setSnat, client, thisisme, nickname, setWord);
        },
        children: "SUBMIT"
      }, "submitWord", false, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          submitPass(setSnat, client, thisisme, gamedata.gameid, nickname, setWord);
        },
        children: "PASS"
      }, "passButton", false, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 294,
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
    clientRound: gamedata.round,
    // for checking re-submissions
    clientMovesLength: gamedata.movesThisRound.length,
    // for checking re-submissions
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsImlzbW9iaWxlIiwic2V0V2hlcmV0byIsImNsaWVudCIsInRoaXNpc21lIiwid3NtZXNzYWdlIiwibmlja25hbWUiLCJnYW1laWQiLCJzbmF0Iiwic2V0U25hdCIsInVzZVN0YXRlIiwiZ2FtZWRhdGEiLCJzZXRHYW1lZGF0YSIsImdvYWwiLCJnYW1laW5kZXgiLCJyb3VuZCIsImZyZWVmb3JhbGwiLCJtb3Zlc1RoaXNSb3VuZCIsIm1vdmVzUHJldlJvdW5kIiwid2hvc2V0dXJuIiwiZnJ5TGV0dGVycyIsInBsYXllcnMiLCJpbmRleCIsIndpbnMiLCJ3b3JkIiwic2V0V29yZCIsInN5bmNzdGFtcCIsInNldFN5bmNzdGFtcCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJwcmV2R2FtZWRhdGEiLCJ1c2VQcmV2aW91cyIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzZW5kIiwidHlwZSIsImMiLCJmdW5jIiwiY2xlYXJJbnRlcnZhbCIsIm1zZyIsInByb2Nlc3NHYW1lTWVzc2FnZSIsIm15YXVkaW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwYXNzIiwicGxheSIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsImdhbWUiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwibWVUb0VudGVyV29yZCIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0UGxheWVyV29yZCIsImV4Y2x1ZGVkUGxheWVyIiwiaSIsImZyZWVmb3JhbGxNb3ZlcyIsIm1hcCIsInBsIiwicG9pbnRzIiwic2hvd01vdmVMaXN0Iiwic2h1ZmZsZVNpemUiLCJiZWZvcmVTaHVmZmxlIiwiYWZ0ZXJTaHVmZmxlIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzcGxpY2UiLCJuZXdHYW1lZGF0YSIsInN0cmluZ2lmeSIsInNvcnR3b3JrIiwic29ydCIsImZsIiwibW92ZUxldHRlciIsInNoaWZ0ZWRMZXR0ZXJzIiwiZWxlbWVudCIsIm51bVBvc3NpYmxlQW5zd2VycyIsImdldFBsYXllcldvcmQiLCJnYW1lT3ZlciIsInNlbmRSZXBsYXlSZXF1ZXN0IiwibW92ZUxpc3RLZXkiLCJtb3ZlQXJyYXkiLCJtb3ZlIiwidmFsaWQiLCJlYXJuZWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSIsInRyaW0iLCJtYXRjaCIsInN1Ym1pdFBhc3MiLCJmaXhlZHdvcmQiLCJwdyIsInN1YnN0cmluZyIsImxldHRlckNvdW50UmVxdWlyZWQiLCJhY3R1YWxMZXR0ZXJDb3VudCIsImoiLCJjbGllbnRSb3VuZCIsImNsaWVudE1vdmVzTGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUNDLFVBQUQ7QUFBV0MsWUFBWDtBQUF1QkMsUUFBdkI7QUFBK0JDLFVBQS9CO0FBQXlDQyxXQUF6QztBQUFvREMsVUFBcEQ7QUFBOERDO0FBQTlELENBQUQsS0FBMkU7QUFBQTs7QUFDcEYsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLCtDQUFRLENBQUM7QUFDckNHLFFBQUksRUFBRSxFQUQrQjtBQUVuQ0MsYUFBUyxFQUFFLENBRndCO0FBR25DQyxTQUFLLEVBQUUsQ0FINEI7QUFJbkNDLGNBQVUsRUFBRSxLQUp1QjtBQUtuQ0Msa0JBQWMsRUFBRSxFQUxtQjtBQU1uQ0Msa0JBQWMsRUFBRSxFQU5tQjtBQU9uQ0MsYUFBUyxFQUFFLENBQUMsQ0FQdUI7QUFRbkNDLGNBQVUsRUFBRSxFQVJ1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bkM7QUFTMkM7QUFDbkRYLFFBQUksRUFBRStFO0FBVkUsR0FBWjtBQVlBOUUsU0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNIOztBQUVELFNBQVM2RSxVQUFULENBQW9CN0YsT0FBcEIsRUFBNkJOLE1BQTdCLEVBQXFDQyxRQUFyQyxFQUErQ0csTUFBL0MsRUFBdURELFFBQXZELEVBQWlFbUIsT0FBakUsRUFBMEU7QUFDdEU7QUFDQWhCLFNBQU8sQ0FBRSx1Q0FBRixDQUFQO0FBQ0FOLFFBQU0sQ0FBQ2lDLElBQVAsQ0FBWTtBQUNSQyxRQUFJLEVBQUVDLCtEQURFO0FBRVJDLFFBQUksRUFBRSxNQUZFO0FBR1JRLFFBQUksRUFBRSxJQUhFO0FBSVIrQyxTQUFLLEVBQUUsS0FKQztBQUtSMUYsWUFBUSxFQUFFQSxRQUxGO0FBTVJHLFVBQU0sRUFBRUEsTUFOQTtBQU9SRCxZQUFRLEVBQUVBLFFBUEY7QUFRUmdELGFBQVMsRUFBRUMsSUFBSSxDQUFDQyxHQUFMLEVBUkg7QUFTUmhDLFFBQUksRUFBRTtBQVRFLEdBQVo7QUFXQUMsU0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNIOztBQUVELFNBQVNpRSxpQkFBVCxDQUEyQnZGLE1BQTNCLEVBQW1DQyxRQUFuQyxFQUE2Q08sUUFBN0MsRUFBdURMLFFBQXZELEVBQWlFO0FBQzdESCxRQUFNLENBQUNpQyxJQUFQLENBQVk7QUFDUkMsUUFBSSxFQUFFQywrREFERTtBQUVSQyxRQUFJLEVBQUUsUUFGRTtBQUdSbkMsWUFBUSxFQUFFQSxRQUhGO0FBSVJpRCxRQUFJLEVBQUUxQyxRQUpFO0FBS1JMLFlBQVEsRUFBRUEsUUFMRjtBQU1SZ0QsYUFBUyxFQUFFQyxJQUFJLENBQUNDLEdBQUw7QUFOSCxHQUFaO0FBUUg7O0FBRUQsK0RBQWV4RCxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ3NGM1ZTRlNzMwNGNjZjkwNjgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9meWIvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdXNlUHJldmlvdXMgfSBmcm9tIFwiLi4vLi4vbGliL3VzZVByZXZpb3VzXCI7XHJcblxyXG5jb25zdCBHYW1lID0gKHtpc21vYmlsZSwgc2V0V2hlcmV0bywgY2xpZW50LCB0aGlzaXNtZSwgd3NtZXNzYWdlLCBuaWNrbmFtZSwgZ2FtZWlkfSkgPT4ge1xyXG4gICAgY29uc3QgW3NuYXQsIHNldFNuYXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dhbWVkYXRhLCBzZXRHYW1lZGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZ29hbDogOTlcclxuICAgICAgICAsIGdhbWVpbmRleDogMFxyXG4gICAgICAgICwgcm91bmQ6IDBcclxuICAgICAgICAsIGZyZWVmb3JhbGw6IGZhbHNlXHJcbiAgICAgICAgLCBtb3Zlc1RoaXNSb3VuZDogW11cclxuICAgICAgICAsIG1vdmVzUHJldlJvdW5kOiBbXVxyXG4gICAgICAgICwgd2hvc2V0dXJuOiAtMVxyXG4gICAgICAgICwgZnJ5TGV0dGVyczogW11cclxuICAgICAgICAsIHBsYXllcnM6IFt7aW5kZXg6IDAsIG5pY2tuYW1lOiAnTG9hZGluZy4uLicsIHdpbnM6IDB9XX0pO1xyXG4gICAgY29uc3QgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoJycpOyAvLyBteSB3b3JkIHRvIHN1Ym1pdFxyXG4gICAgY29uc3QgW3N5bmNzdGFtcCwgc2V0U3luY3N0YW1wXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgcHJldkdhbWVkYXRhID0gdXNlUHJldmlvdXMoZ2FtZWRhdGEpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lZGF0YS53aG9zZXR1cm4gPiAtMSAmJiBnYW1lZGF0YS5wbGF5ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICAgICAgICAgICAgICBmdW5jOiAnaW50ZXJ2YWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNzdGFtcDogc3luY3N0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZWlkOiBnYW1lZGF0YS5nYW1laWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgYy5QSU5HX0lOVEVSVkFMKTsgLy8gdGhpcyBtYW55IG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGFib3ZlIGNvZGUgYmxvY2sgZXhlY3V0aW9uc1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7XHJcbiAgICB9LFt3c21lc3NhZ2VdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIFRoaXMgc291bmQgd2lsbCBub3QgcGxheSBvbiBzb21lIG1vYmlsZXMuIFNvbWV0aGluZyBhYm91dCBuZWVkaW5nIGEgdXNlciBpbnRlcmFjdGlvbiAocHJvdGVjdGluZyBjZWxsIGRhdGEgdXNhZ2UpLlxyXG4gICAgICAgIGlmIChwcmV2R2FtZWRhdGFcclxuICAgICAgICAgICAgJiYgZ2FtZWRhdGEuZ2FtZWluZGV4ID09PSBwcmV2R2FtZWRhdGEuZ2FtZWluZGV4XHJcbiAgICAgICAgICAgICYmIGdhbWVkYXRhLnJvdW5kID09PSBwcmV2R2FtZWRhdGEucm91bmRcclxuICAgICAgICAgICAgJiYgZ2FtZWRhdGEuZnJlZWZvcmFsbCAmJiAhcHJldkdhbWVkYXRhLmZyZWVmb3JhbGwpIHtcclxuICAgICAgICAgICAgdmFyIG15YXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgICAgICAgICAvLyBEZWNpZGUgYmV0d2VlbiBPb3BzIChwaG9uZXkgcGxheWVkKSBhbmQgUGFzcyAocGxheWVyIHBhc3NlZClcclxuICAgICAgICAgICAgbXlhdWRpby5zcmMgPSBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZFtnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGgtMV0ucGFzcyA/IFwiaHR0cHM6Ly90aWxlcnVubmVyLmdpdGh1Yi5pby9QYXNzLm00YVwiIDogXCJodHRwczovL3RpbGVydW5uZXIuZ2l0aHViLmlvL09vcHMubTRhXCI7XHJcbiAgICAgICAgICAgIG15YXVkaW8ucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgW2dhbWVkYXRhXSk7IC8vIFBsYXkgYSBzb3VuZCB3aGVuIGEgcmVzY3VlIGlzIG1hZGVcclxuXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzR2FtZU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT09IGMuQ0xJRU5UX1RZUEVfRllCKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBjLlMyQ19GVU5DX0dBTUVEQVRBKSB7XHJcbiAgICAgICAgICAgICAgICAvKiBTRVJWRVIgU0VOVCBHQU1FIERBVEFcclxuICAgICAgICAgICAgICAgIEZvciBhIHJlZ3VsYXIgdXBkYXRlIGR1ZSB0byBwbGF5ZXIgYWN0aXZpdHksIHRoaXMgY2xpZW50IG5lZWRzIHRoZSB1cGRhdGUuXHJcblxyXG4gICAgICAgICAgICAgICAgRm9yIGRyb3BwZWQgY29ubmVjdGlvbnMgd2hpY2ggbWFkZSB0aGlzIGNsaWVudCBzZW5kIGEgcmVqb2luIHRvIHVwZGF0ZSBzZXJ2ZXInc1xyXG4gICAgICAgICAgICAgICAgICAgaW5mbyBmb3IgdGhpcyBjbGllbnQsIHdoaWNoIG1ha2VzIHRoZSBzZXJ2ZXIgc2VuZHMgZ2FtZSBpbmZvIHRvIHRoaXMgY2xpZW50LFxyXG4gICAgICAgICAgICAgICAgICAgdGhpcyBjbGllbnQgaXMgYWxyZWFkeSB1cCB0byBkYXRlIGFuZCBkb2VzIG5vdCBuZWVkIHRoZSB1cGRhdGUuIFdlIGRvIG5vdCB0YWtlXHJcbiAgICAgICAgICAgICAgICAgICB0aGUgdXBkYXRlIHNvIGFzIG5vdCB0byB1cHNldCB0aGUgZnJ5IGxldHRlciByZWFycmFuZ2VtZW50cyB0aGlzIGNsaWVudCBtYXkgaGF2ZVxyXG4gICAgICAgICAgICAgICAgICAgbWFkZS5cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZURhdGEuZ2FtZS5nYW1laW5kZXggIT09IGdhbWVkYXRhLmdhbWVpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG1lc3NhZ2VEYXRhLmdhbWUucm91bmQgIT09IGdhbWVkYXRhLnJvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgbWVzc2FnZURhdGEuZ29hbCAhPT0gZ2FtZWRhdGEuZ29hbFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG1lc3NhZ2VEYXRhLnBsYXllcnMubGVuZ3RoICE9PSBnYW1lZGF0YS5wbGF5ZXJzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG1lc3NhZ2VEYXRhLmdhbWUubW92ZXNUaGlzUm91bmQubGVuZ3RoICE9PSBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U25hdChtZXNzYWdlRGF0YS5zbmF0KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobWVzc2FnZURhdGEuZ2FtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3luY3N0YW1wKG1lc3NhZ2VEYXRhLmdhbWUuc3luY3N0YW1wKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBjLlMyQ19GVU5DX0dBTUVDUkVBVEVEKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIHRvIGRvLCB0aGlzIGlzIHJlYWxseSBmb3IgdGhlIGxvYmJ5IGR3ZWxsZXJzXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJIHRoaW5rIHRoaXMgaGFwcGVucyB3aGVuIGEgd2ViIHNvY2tldCBjb25uZWN0aW9uIGRyb3BzIGFuZCB0aGUgbmV3IG9uZSBsb3NlcyB0aGUgZ2FtZWlkIG9uIHRoZSBzZXJ2ZXIgd3NzLmNsaWVudHNcclxuICAgICAgICAgICAgICAgIC8vIFNvIHNlbmQgYSByZWpvaW4gcmVxdWVzdCB0byBnZXQgdGhlIHNlcnZlciBiYWNrIG9uIHRyYWNrXHJcbiAgICAgICAgICAgICAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuYzogJ3Jlam9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoIW1lVG9FbnRlcldvcmQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzdWJtaXRQbGF5ZXJXb3JkKHdvcmQsIGdhbWVkYXRhLCBzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSwgc2V0V29yZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVUb0VudGVyV29yZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZ2FtZWRhdGEud2hvc2V0dXJuIDwgMCkgeyAvLyBHYW1lIGhhcyBub3Qgc3RhcnRlZCBvciBoYXMgZW5kZWRcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZWRhdGEuZnJlZWZvcmFsbCkgeyAvLyBJbiBmcmVlLWZvci1hbGwgcm91bmRcclxuICAgICAgICAgICAgaWYgKGdhbWVkYXRhLmV4Y2x1ZGVkUGxheWVyID09PSBuaWNrbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzW2ldLm5pY2tuYW1lID09PSBuaWNrbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKG5pY2tuYW1lID09PSBnYW1lZGF0YS5wbGF5ZXJzW2dhbWVkYXRhLndob3NldHVybl0ubmlja25hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBGcnkgWW91ciBCcmFpblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyU3VidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIEdhbWUgaWQ6IHtnYW1laWR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+Rmlyc3QgdG8ge2dhbWVkYXRhLmdvYWx9IHdpbnMhPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5wbGF5ZXJzLm1hcCgocGwpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YFBsYXllciR7cGwuaW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbC53aW5zID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gKHtwbC53aW5zfSk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwucG9pbnRzIDwgMTAgPyA8c3Bhbj4mbmJzcDs8L3NwYW4+IDogJyd9e3BsLnBvaW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwucG9pbnRzID49IGdhbWVkYXRhLmdvYWwgJiYgPHNwYW4gY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPiBXaW5uZXIhJm5ic3A7PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVkYXRhLm1vdmVzUHJldlJvdW5kICYmIGdhbWVkYXRhLm1vdmVzUHJldlJvdW5kLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+UHJldmlvdXMgcm91bmQ6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVkYXRhLm1vdmVzUHJldlJvdW5kICYmIGdhbWVkYXRhLm1vdmVzUHJldlJvdW5kLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01vdmVMaXN0KCdtb3Zlc1ByZXZSb3VuZCcsIGdhbWVkYXRhLm1vdmVzUHJldlJvdW5kKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNUaGlzUm91bmQgJiYgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5UaGlzIHJvdW5kOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb3ZlTGlzdCgnbW92ZXNUaGlzUm91bmQnLCBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFnYW1lZGF0YS5mcmVlZm9yYWxsICYmIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3ZlcyAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5GcmVlLWZvci1hbGw6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFnYW1lZGF0YS5mcmVlZm9yYWxsICYmIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3ZlcyAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93TW92ZUxpc3QoJ2ZmYU1vdmVzJywgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIHtnYW1lZGF0YS53aG9zZXR1cm4gPiAtMSAmJlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPkZyeSBMZXR0ZXJzOlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b24gZnJ5TGV0dGVyQWN0aW9uQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2h1ZmZsZVNpemUgPSBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJlZm9yZVNodWZmbGUgPSBbLi4uZ2FtZWRhdGEuZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZnRlclNodWZmbGUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGFmdGVyU2h1ZmZsZS5sZW5ndGggPCBzaHVmZmxlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBiZWZvcmVTaHVmZmxlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlclNodWZmbGUucHVzaChiZWZvcmVTaHVmZmxlW3JhbmRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNodWZmbGUuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3R2FtZWRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdhbWVkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0dhbWVkYXRhLmZyeUxldHRlcnMgPSBbLi4uYWZ0ZXJTaHVmZmxlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobmV3R2FtZWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBmcnlMZXR0ZXJBY3Rpb25CdXR0b25JY29uXCI+Y2FjaGVkPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzb3J0d29yayA9IFsuLi5nYW1lZGF0YS5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydHdvcmsuc29ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3R2FtZWRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdhbWVkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0dhbWVkYXRhLmZyeUxldHRlcnMgPSBbLi4uc29ydHdvcmtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1lZGF0YShuZXdHYW1lZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c29ydF9ieV9hbHBoYTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcnlMZXR0ZXJEaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZWRhdGEuZnJ5TGV0dGVycy5tYXAoKGZsLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgRnJ5TGV0dGVyJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2kgPT09IHNlbGVjdGVkID8gXCJmeWJGcnlMZXR0ZXIgU2VsZWN0ZWRcIjpcImZ5YkZyeUxldHRlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlTGV0dGVyID0gZ2FtZWRhdGEuZnJ5TGV0dGVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpZnRlZExldHRlcnMgPSBbLi4uZ2FtZWRhdGEuZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChtb3ZlTGV0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3R2FtZWRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdhbWVkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3R2FtZWRhdGEuZnJ5TGV0dGVycyA9IFsuLi5zaGlmdGVkTGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobmV3R2FtZWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTsgLy8gdW5zZWxlY3Qgd2hlbiBjbGlja2VkIGEgc2Vjb25kIHRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIHNlbGVjdGVkIHRpbGUgdG8gdGhpcyBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpZnRlZExldHRlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVMZXR0ZXIgPSBnYW1lZGF0YS5mcnlMZXR0ZXJzW3NlbGVjdGVkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdhbWVkYXRhLmZyeUxldHRlcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2FtZWRhdGEuZnJ5TGV0dGVyc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKG1vdmVMZXR0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0dhbWVkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnYW1lZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdHYW1lZGF0YS5mcnlMZXR0ZXJzID0gWy4uLnNoaWZ0ZWRMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobmV3R2FtZWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID57Zmx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgKCNBbnN3ZXJzOiB7Z2FtZWRhdGEubnVtUG9zc2libGVBbnN3ZXJzfSlcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIHttZVRvRW50ZXJXb3JkKCkgJiZcclxuICAgICAgICAgICAgICAgIGdldFBsYXllcldvcmQoaGFuZGxlS2V5RG93biwgd29yZCwgc2V0V29yZCwgZ2FtZWRhdGEsIHNldFNuYXQsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtnYW1lZGF0YS5nYW1lT3ZlciAmJiA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICBHYW1lIE92ZXJcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NlbmRSZXBsYXlSZXF1ZXN0KGNsaWVudCwgdGhpc2lzbWUsIGdhbWVkYXRhLCBuaWNrbmFtZSl9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFBMQVkgQUdBSU5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGggdHJXYXJuaW5nXCI+e3NuYXR9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd01vdmVMaXN0KG1vdmVMaXN0S2V5LCBtb3ZlQXJyYXkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgbW92ZUFycmF5Lm1hcCgobW92ZSkgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgJHttb3ZlTGlzdEtleX0ke21vdmUubmlja25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e21vdmUubmlja25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIHttb3ZlLnBhc3MgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyRGFuZ2VyXCI+IHBhc3NlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake21vdmUudmFsaWQgPyAnJyA6ICd0ckRhbmdlcid9ICR7bW92ZS53b3JkLmxlbmd0aCA+IDEwICYmIG1vdmUuZWFybmVkID8gJ2xvbmcnIDogbW92ZS53b3JkLmxlbmd0aCA+IDEzID8gJ2xvbmcnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3ZlLndvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3ZlLmVhcm5lZCAmJiA8c3Bhbj4gKHttb3ZlLmVhcm5lZH0gcHRzKTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGxheWVyV29yZChoYW5kbGVLZXlEb3duLCB3b3JkLCBzZXRXb3JkLCBnYW1lZGF0YSwgc2V0U25hdCwgY2xpZW50LCB0aGlzaXNtZSwgbmlja25hbWUpIHtcclxuICAgIHJldHVybiA8ZGl2IG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPkVudGVyIFdvcmQ6PC9kaXY+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgbmFtZT1cIndvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17d29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRXb3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3dvcmQudG9VcHBlckNhc2UoKS50cmltKCkubWF0Y2goXCJeW2EtekEtWl0qJFwiKSAmJiBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBrZXk9XCJzdWJtaXRXb3JkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzdWJtaXRQbGF5ZXJXb3JkKHdvcmQsIGdhbWVkYXRhLCBzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSwgc2V0V29yZCl9fT5cclxuICAgICAgICAgICAgICAgICAgICBTVUJNSVRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIga2V5PVwicGFzc0J1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzdWJtaXRQYXNzKHNldFNuYXQsIGNsaWVudCwgdGhpc2lzbWUsIGdhbWVkYXRhLmdhbWVpZCwgbmlja25hbWUsIHNldFdvcmQpfX0+XHJcbiAgICAgICAgICAgICAgICBQQVNTXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRQbGF5ZXJXb3JkKHdvcmQsIGdhbWVkYXRhLCBzZXRTbmF0LCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSwgc2V0V29yZCkge1xyXG4gICAgbGV0IGZpeGVkd29yZCA9IHdvcmQudG9VcHBlckNhc2UoKS50cmltKCk7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgd29yZCBpcyBhbGxvd2VkIGJhc2VkIG9uIHByZXZpb3VzIHdvcmRzIHRoaXMgcm91bmRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBwdyA9IGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kW2ldLndvcmQ7XHJcbiAgICAgICAgaWYgKHB3ID09PSBmaXhlZHdvcmQpIHtcclxuICAgICAgICAgICAgc2V0U25hdChgWW91IGNhbm5vdCByZXVzZSBhIHByZXZpb3VzIHdvcmQgZnJvbSB0aGlzIHJvdW5kICgke3B3fSkuYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHB3ICsgJ1MnID09PSBmaXhlZHdvcmQgJiYgcHcuc3Vic3RyaW5nKHB3Lmxlbmd0aC0xKSAhPT0gJ1MnICYmIGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kW2ldLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHNldFNuYXQoYFlvdSBjYW5ub3QgYWRkIFMgdG8gYSBwcmV2aW91cyB2YWxpZCB3b3JkICgke3B3fSkgZnJvbSB0aGlzIHJvdW5kIHVubGVzcyBpdCBlbmRzIHdpdGggUy5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIENoZWNrIGlmIHRoZSBoYXZlIGFsbCB0aGUgZnJ5IGxldHRlcnNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWRhdGEuZnJ5TGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBsZXR0ZXJDb3VudFJlcXVpcmVkID0gMDtcclxuICAgICAgICBsZXQgYWN0dWFsTGV0dGVyQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2FtZWRhdGEuZnJ5TGV0dGVycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEuZnJ5TGV0dGVyc1tpXSA9PT0gZ2FtZWRhdGEuZnJ5TGV0dGVyc1tqXSkge1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyQ291bnRSZXF1aXJlZCA9IGxldHRlckNvdW50UmVxdWlyZWQgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZml4ZWR3b3JkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lZGF0YS5mcnlMZXR0ZXJzW2ldID09PSBmaXhlZHdvcmRbal0pIHtcclxuICAgICAgICAgICAgICAgIGFjdHVhbExldHRlckNvdW50ID0gYWN0dWFsTGV0dGVyQ291bnQgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhY3R1YWxMZXR0ZXJDb3VudCA8IGxldHRlckNvdW50UmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgc2V0U25hdChgWW91IG5lZWQgdGhlIGxldHRlciAke2dhbWVkYXRhLmZyeUxldHRlcnNbaV19IGF0IGxlYXN0ICR7bGV0dGVyQ291bnRSZXF1aXJlZH0gdGltZSR7bGV0dGVyQ291bnRSZXF1aXJlZCA9PT0gMSA/ICcuJyA6ICdzLid9YCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBJZiB5b3UgZ2V0IGhlcmUgdGhleSBoYXZlIGFsbCB0aGUgcmVxdWlyZWQgbGV0dGVycy4gU2VuZCB0aGUgZ3Vlc3MgdG8gdGhlIHNlcnZlci5cclxuICAgIHNldFNuYXQoYENoZWNraW5nIHlvdXIgd29yZCAuLi4gc2hvdWxkbid0IHRha2UgbG9uZy4gSWYgaXQgZG9lcywgcGxlYXNlIHRyeSByZWpvaW5pbmcgdGhlIGdhbWUuYCk7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ21vdmUnLFxyXG4gICAgICAgIHBhc3M6IGZhbHNlLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVkYXRhLmdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIGNsaWVudFJvdW5kOiBnYW1lZGF0YS5yb3VuZCwgLy8gZm9yIGNoZWNraW5nIHJlLXN1Ym1pc3Npb25zXHJcbiAgICAgICAgY2xpZW50TW92ZXNMZW5ndGg6IGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kLmxlbmd0aCwgLy8gZm9yIGNoZWNraW5nIHJlLXN1Ym1pc3Npb25zXHJcbiAgICAgICAgd29yZDogZml4ZWR3b3JkXHJcbiAgICB9KTtcclxuICAgIHNldFdvcmQoJycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRQYXNzKHNldFNuYXQsIGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbmlja25hbWUsIHNldFdvcmQpIHtcclxuICAgIC8vIElmIHlvdSBnZXQgaGVyZSB0aGV5IGhhdmUgYWxsIHRoZSByZXF1aXJlZCBsZXR0ZXJzLiBTZW5kIHRoZSBndWVzcyB0byB0aGUgc2VydmVyLlxyXG4gICAgc2V0U25hdChgU2VuZGluZyBQQVNTIC4uLiBzaG91bGRuJ3QgdGFrZSBsb25nLmApO1xyXG4gICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgIGZ1bmM6ICdtb3ZlJyxcclxuICAgICAgICBwYXNzOiB0cnVlLFxyXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICB3b3JkOiAnJ1xyXG4gICAgfSk7XHJcbiAgICBzZXRXb3JkKCcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZFJlcGxheVJlcXVlc3QoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWRhdGEsIG5pY2tuYW1lKSB7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ3JlcGxheScsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWU6IGdhbWVkYXRhLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9