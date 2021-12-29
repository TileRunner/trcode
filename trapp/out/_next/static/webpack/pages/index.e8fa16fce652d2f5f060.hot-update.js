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
    0: warning,
    1: setWarning
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
          setWarning('');
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
      submitPlayerWord(word, gamedata, setWarning, client, thisisme, nickname, setWord);
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
          lineNumber: 133,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: ["Game id: ", gameid]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
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
            lineNumber: 142,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }, undefined), gamedata.players.map(pl => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [pl.nickname, pl.wins > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: [" (", pl.wins, ")"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 37
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "floatright",
              children: ":"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [pl.points < 10 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 51
            }, undefined) : '', pl.points, pl.points >= gamedata.goal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "trEmphasis",
              children: " Winner!\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 64
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 29
          }, undefined)]
        }, `Player${pl.index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 25
        }, undefined)), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: "Previous round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 25
        }, undefined), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && showMoveList('movesPrevRound', gamedata.movesPrevRound), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: "This round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 25
        }, undefined), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && showMoveList('movesThisRound', gamedata.movesThisRound), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: "Free-for-all:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 25
        }, undefined), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && showMoveList('ffaMoves', gamedata.freeforallMoves)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
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
            lineNumber: 201,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton fryLetterActionButton",
          onClick: () => {
            let sortwork = [...gamedata.fryLetters];
            sortwork.sort();
            let newGamedata = JSON.parse(JSON.stringify(gamedata));
            newGamedata.fryLetters = [...sortwork];
            setGamedata(newGamedata);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "material-icons fryLetterActionButtonIcon",
            children: "sort_by_alpha"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 187,
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
          lineNumber: 215,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: ["(#Answers: ", gamedata.numPossibleAnswers, ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }, undefined), meToEnterWord() && getPlayerWord(handleKeyDown, word, setWord, gamedata, setWarning, client, thisisme, nickname), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [gamedata.gameOver && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: ["Game Over\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            sendReplayRequest(client, thisisme, gamedata, nickname);
          },
          children: "PLAY AGAIN"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 35
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: snat
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 13
      }, undefined), warning && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph trWarning",
        children: warning
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 9
  }, undefined);
};

_s(Game, "d+y5wJ5+6YnsaDwoM//0LB21vZc=", false, function () {
  return [_lib_usePrevious__WEBPACK_IMPORTED_MODULE_3__.usePrevious];
});

_c = Game;

function showMoveList(moveListKey, moveArray) {
  return moveArray.map(move => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      children: [move.nickname, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "floatright",
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 36
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      children: move.pass ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trDanger",
        children: " passed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: `${move.valid ? '' : 'trDanger'} ${move.word.length > 10 && move.earned ? 'long' : move.word.length > 13 ? 'long' : ''}`,
        children: [move.word, move.earned && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [" (", move.earned, " pts)"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 41
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 17
    }, this)]
  }, `${moveListKey}${move.nickname}`, true, {
    fileName: _jsxFileName,
    lineNumber: 281,
    columnNumber: 13
  }, this));
}

function getPlayerWord(handleKeyDown, word, setWord, gamedata, setWarning, client, thisisme, nickname) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    onKeyDownCapture: handleKeyDown,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trEmphasis",
      children: "Enter Word:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 299,
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
      lineNumber: 300,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [word.toUpperCase().trim().match("^[a-zA-Z]*$") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          submitPlayerWord(word, gamedata, setWarning, client, thisisme, nickname, setWord);
        },
        children: "SUBMIT"
      }, "submitWord", false, {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          submitPass(setWarning, client, thisisme, gamedata.gameid, nickname, setWord);
        },
        children: "PASS"
      }, "passButton", false, {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 298,
    columnNumber: 12
  }, this);
}

function submitPlayerWord(word, gamedata, setWarning, client, thisisme, nickname, setWord) {
  let fixedword = word.toUpperCase().trim(); // Check if the word is allowed based on previous words this round

  for (let i = 0; i < gamedata.movesThisRound.length; i++) {
    const pw = gamedata.movesThisRound[i].word;

    if (pw === fixedword) {
      setWarning(`You cannot reuse a previous word from this round (${pw}).`);
      return;
    }

    if (pw + 'S' === fixedword && pw.substring(pw.length - 1) !== 'S' && gamedata.movesThisRound[i].valid) {
      setWarning(`You cannot add S to a previous valid word (${pw}) from this round unless it ends with S.`);
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
      setWarning(`You need the letter ${gamedata.fryLetters[i]} at least ${letterCountRequired} time${letterCountRequired === 1 ? '.' : 's.'}`);
      return;
    }
  } // If you get here they have all the required letters. Send the guess to the server.


  setWarning(`Checking your word ... shouldn't take long. If it does, please try rejoining the game.`);
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

function submitPass(setWarning, client, thisisme, gameid, nickname, setWord) {
  // If you get here they have all the required letters. Send the guess to the server.
  setWarning(`Sending PASS ... shouldn't take long.`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsImlzbW9iaWxlIiwic2V0V2hlcmV0byIsImNsaWVudCIsInRoaXNpc21lIiwid3NtZXNzYWdlIiwibmlja25hbWUiLCJnYW1laWQiLCJzbmF0Iiwic2V0U25hdCIsInVzZVN0YXRlIiwid2FybmluZyIsInNldFdhcm5pbmciLCJnYW1lZGF0YSIsInNldEdhbWVkYXRhIiwiZ29hbCIsImdhbWVpbmRleCIsInJvdW5kIiwiZnJlZWZvcmFsbCIsIm1vdmVzVGhpc1JvdW5kIiwibW92ZXNQcmV2Um91bmQiLCJ3aG9zZXR1cm4iLCJmcnlMZXR0ZXJzIiwicGxheWVycyIsImluZGV4Iiwid2lucyIsIndvcmQiLCJzZXRXb3JkIiwic3luY3N0YW1wIiwic2V0U3luY3N0YW1wIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInByZXZHYW1lZGF0YSIsInVzZVByZXZpb3VzIiwidXNlRWZmZWN0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsInNlbmQiLCJ0eXBlIiwiYyIsImZ1bmMiLCJjbGVhckludGVydmFsIiwibXNnIiwicHJvY2Vzc0dhbWVNZXNzYWdlIiwibXlhdWRpbyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInBhc3MiLCJwbGF5IiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwiZ2FtZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJtZVRvRW50ZXJXb3JkIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJzdWJtaXRQbGF5ZXJXb3JkIiwiZXhjbHVkZWRQbGF5ZXIiLCJpIiwiZnJlZWZvcmFsbE1vdmVzIiwibWFwIiwicGwiLCJwb2ludHMiLCJzaG93TW92ZUxpc3QiLCJzaHVmZmxlU2l6ZSIsImJlZm9yZVNodWZmbGUiLCJhZnRlclNodWZmbGUiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNwbGljZSIsIm5ld0dhbWVkYXRhIiwic3RyaW5naWZ5Iiwic29ydHdvcmsiLCJzb3J0IiwiZmwiLCJtb3ZlTGV0dGVyIiwic2hpZnRlZExldHRlcnMiLCJlbGVtZW50IiwibnVtUG9zc2libGVBbnN3ZXJzIiwiZ2V0UGxheWVyV29yZCIsImdhbWVPdmVyIiwic2VuZFJlcGxheVJlcXVlc3QiLCJtb3ZlTGlzdEtleSIsIm1vdmVBcnJheSIsIm1vdmUiLCJ2YWxpZCIsImVhcm5lZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwidHJpbSIsIm1hdGNoIiwic3VibWl0UGFzcyIsImZpeGVkd29yZCIsInB3Iiwic3Vic3RyaW5nIiwibGV0dGVyQ291bnRSZXF1aXJlZCIsImFjdHVhbExldHRlckNvdW50IiwiaiIsImNsaWVudFJvdW5kIiwiY2xpZW50TW92ZXNMZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0MsVUFBRDtBQUFXQyxZQUFYO0FBQXVCQyxRQUF2QjtBQUErQkMsVUFBL0I7QUFBeUNDLFdBQXpDO0FBQW9EQyxVQUFwRDtBQUE4REM7QUFBOUQsQ0FBRCxLQUEyRTtBQUFBOztBQUNwRixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsK0NBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCSiwrQ0FBUSxDQUFDO0FBQ3JDSyxRQUFJLEVBQUUsRUFEK0I7QUFFbkNDLGFBQVMsRUFBRSxDQUZ3QjtBQUduQ0MsU0FBSyxFQUFFLENBSDRCO0FBSW5DQyxjQUFVLEVBQUUsS0FKdUI7QUFL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RCxFQUFpRTtBQUM3REgsUUFBTSxDQUFDbUMsSUFBUCxDQUFZO0FBQ1JDLFFBQUksRUFBRUMsK0RBREU7QUFFUkMsUUFBSSxFQUFFLFFBRkU7QUFHUnJDLFlBQVEsRUFBRUEsUUFIRjtBQUlSbUQsUUFBSSxFQUFFMUMsUUFKRTtBQUtSUCxZQUFRLEVBQUVBLFFBTEY7QUFNUmtELGFBQVMsRUFBRUMsSUFBSSxDQUFDQyxHQUFMO0FBTkgsR0FBWjtBQVFIOztBQUVELCtEQUFlMUQsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lOGZhMTZmY2U2NTJkMmY1ZjA2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvZnliL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHVzZVByZXZpb3VzIH0gZnJvbSBcIi4uLy4uL2xpYi91c2VQcmV2aW91c1wiO1xyXG5cclxuY29uc3QgR2FtZSA9ICh7aXNtb2JpbGUsIHNldFdoZXJldG8sIGNsaWVudCwgdGhpc2lzbWUsIHdzbWVzc2FnZSwgbmlja25hbWUsIGdhbWVpZH0pID0+IHtcclxuICAgIGNvbnN0IFtzbmF0LCBzZXRTbmF0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt3YXJuaW5nLCBzZXRXYXJuaW5nXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtnYW1lZGF0YSwgc2V0R2FtZWRhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGdvYWw6IDk5XHJcbiAgICAgICAgLCBnYW1laW5kZXg6IDBcclxuICAgICAgICAsIHJvdW5kOiAwXHJcbiAgICAgICAgLCBmcmVlZm9yYWxsOiBmYWxzZVxyXG4gICAgICAgICwgbW92ZXNUaGlzUm91bmQ6IFtdXHJcbiAgICAgICAgLCBtb3Zlc1ByZXZSb3VuZDogW11cclxuICAgICAgICAsIHdob3NldHVybjogLTFcclxuICAgICAgICAsIGZyeUxldHRlcnM6IFtdXHJcbiAgICAgICAgLCBwbGF5ZXJzOiBbe2luZGV4OiAwLCBuaWNrbmFtZTogJ0xvYWRpbmcuLi4nLCB3aW5zOiAwfV19KTtcclxuICAgIGNvbnN0IFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKCcnKTsgLy8gbXkgd29yZCB0byBzdWJtaXRcclxuICAgIGNvbnN0IFtzeW5jc3RhbXAsIHNldFN5bmNzdGFtcF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKC0xKTtcclxuICAgIGNvbnN0IHByZXZHYW1lZGF0YSA9IHVzZVByZXZpb3VzKGdhbWVkYXRhKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEud2hvc2V0dXJuID4gLTEgJiYgZ2FtZWRhdGEucGxheWVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuYzogJ2ludGVydmFsJyxcclxuICAgICAgICAgICAgICAgICAgICBzeW5jc3RhbXA6IHN5bmNzdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGMuUElOR19JTlRFUlZBTCk7IC8vIHRoaXMgbWFueSBtaWxsaXNlY29uZHMgYmV0d2VlbiBhYm92ZSBjb2RlIGJsb2NrIGV4ZWN1dGlvbnNcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NHYW1lTWVzc2FnZShtc2cpO1xyXG4gICAgfSxbd3NtZXNzYWdlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBUaGlzIHNvdW5kIHdpbGwgbm90IHBsYXkgb24gc29tZSBtb2JpbGVzLiBTb21ldGhpbmcgYWJvdXQgbmVlZGluZyBhIHVzZXIgaW50ZXJhY3Rpb24gKHByb3RlY3RpbmcgY2VsbCBkYXRhIHVzYWdlKS5cclxuICAgICAgICBpZiAocHJldkdhbWVkYXRhXHJcbiAgICAgICAgICAgICYmIGdhbWVkYXRhLmdhbWVpbmRleCA9PT0gcHJldkdhbWVkYXRhLmdhbWVpbmRleFxyXG4gICAgICAgICAgICAmJiBnYW1lZGF0YS5yb3VuZCA9PT0gcHJldkdhbWVkYXRhLnJvdW5kXHJcbiAgICAgICAgICAgICYmIGdhbWVkYXRhLmZyZWVmb3JhbGwgJiYgIXByZXZHYW1lZGF0YS5mcmVlZm9yYWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBteWF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICAgICAgICAgICAgLy8gRGVjaWRlIGJldHdlZW4gT29wcyAocGhvbmV5IHBsYXllZCkgYW5kIFBhc3MgKHBsYXllciBwYXNzZWQpXHJcbiAgICAgICAgICAgIG15YXVkaW8uc3JjID0gZ2FtZWRhdGEubW92ZXNUaGlzUm91bmRbZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoLTFdLnBhc3MgPyBcImh0dHBzOi8vdGlsZXJ1bm5lci5naXRodWIuaW8vUGFzcy5tNGFcIiA6IFwiaHR0cHM6Ly90aWxlcnVubmVyLmdpdGh1Yi5pby9Pb3BzLm00YVwiO1xyXG4gICAgICAgICAgICBteWF1ZGlvLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIFtnYW1lZGF0YV0pOyAvLyBQbGF5IGEgc291bmQgd2hlbiBhIHJlc2N1ZSBpcyBtYWRlXHJcblxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0dhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09PSBjLkNMSUVOVF9UWVBFX0ZZQikge1xyXG4gICAgICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gYy5TMkNfRlVOQ19HQU1FREFUQSkge1xyXG4gICAgICAgICAgICAgICAgLyogU0VSVkVSIFNFTlQgR0FNRSBEQVRBXHJcbiAgICAgICAgICAgICAgICBGb3IgYSByZWd1bGFyIHVwZGF0ZSBkdWUgdG8gcGxheWVyIGFjdGl2aXR5LCB0aGlzIGNsaWVudCBuZWVkcyB0aGUgdXBkYXRlLlxyXG5cclxuICAgICAgICAgICAgICAgIEZvciBkcm9wcGVkIGNvbm5lY3Rpb25zIHdoaWNoIG1hZGUgdGhpcyBjbGllbnQgc2VuZCBhIHJlam9pbiB0byB1cGRhdGUgc2VydmVyJ3NcclxuICAgICAgICAgICAgICAgICAgIGluZm8gZm9yIHRoaXMgY2xpZW50LCB3aGljaCBtYWtlcyB0aGUgc2VydmVyIHNlbmRzIGdhbWUgaW5mbyB0byB0aGlzIGNsaWVudCxcclxuICAgICAgICAgICAgICAgICAgIHRoaXMgY2xpZW50IGlzIGFscmVhZHkgdXAgdG8gZGF0ZSBhbmQgZG9lcyBub3QgbmVlZCB0aGUgdXBkYXRlLiBXZSBkbyBub3QgdGFrZVxyXG4gICAgICAgICAgICAgICAgICAgdGhlIHVwZGF0ZSBzbyBhcyBub3QgdG8gdXBzZXQgdGhlIGZyeSBsZXR0ZXIgcmVhcnJhbmdlbWVudHMgdGhpcyBjbGllbnQgbWF5IGhhdmVcclxuICAgICAgICAgICAgICAgICAgIG1hZGUuXHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmdhbWUuZ2FtZWluZGV4ICE9PSBnYW1lZGF0YS5nYW1laW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB8fCBtZXNzYWdlRGF0YS5nYW1lLnJvdW5kICE9PSBnYW1lZGF0YS5yb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG1lc3NhZ2VEYXRhLmdvYWwgIT09IGdhbWVkYXRhLmdvYWxcclxuICAgICAgICAgICAgICAgICAgICB8fCBtZXNzYWdlRGF0YS5wbGF5ZXJzLmxlbmd0aCAhPT0gZ2FtZWRhdGEucGxheWVycy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICB8fCBtZXNzYWdlRGF0YS5nYW1lLm1vdmVzVGhpc1JvdW5kLmxlbmd0aCAhPT0gZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNuYXQobWVzc2FnZURhdGEuc25hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG1lc3NhZ2VEYXRhLmdhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN5bmNzdGFtcChtZXNzYWdlRGF0YS5nYW1lLnN5bmNzdGFtcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0V2FybmluZygnJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gYy5TMkNfRlVOQ19HQU1FQ1JFQVRFRCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTm90aGluZyB0byBkbywgdGhpcyBpcyByZWFsbHkgZm9yIHRoZSBsb2JieSBkd2VsbGVyc1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSSB0aGluayB0aGlzIGhhcHBlbnMgd2hlbiBhIHdlYiBzb2NrZXQgY29ubmVjdGlvbiBkcm9wcyBhbmQgdGhlIG5ldyBvbmUgbG9zZXMgdGhlIGdhbWVpZCBvbiB0aGUgc2VydmVyIHdzcy5jbGllbnRzXHJcbiAgICAgICAgICAgICAgICAvLyBTbyBzZW5kIGEgcmVqb2luIHJlcXVlc3QgdG8gZ2V0IHRoZSBzZXJ2ZXIgYmFjayBvbiB0cmFja1xyXG4gICAgICAgICAgICAgICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmM6ICdyZWpvaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICAgICAgICAgICAgICBnYW1laWQ6IGdhbWVkYXRhLmdhbWVpZCxcclxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCFtZVRvRW50ZXJXb3JkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3VibWl0UGxheWVyV29yZCh3b3JkLCBnYW1lZGF0YSwgc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgbmlja25hbWUsIHNldFdvcmQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lVG9FbnRlcldvcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGdhbWVkYXRhLndob3NldHVybiA8IDApIHsgLy8gR2FtZSBoYXMgbm90IHN0YXJ0ZWQgb3IgaGFzIGVuZGVkXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGdhbWVkYXRhLmZyZWVmb3JhbGwpIHsgLy8gSW4gZnJlZS1mb3ItYWxsIHJvdW5kXHJcbiAgICAgICAgICAgIGlmIChnYW1lZGF0YS5leGNsdWRlZFBsYXllciA9PT0gbmlja25hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVkYXRhLmZyZWVmb3JhbGxNb3Zlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVkYXRhLmZyZWVmb3JhbGxNb3Zlc1tpXS5uaWNrbmFtZSA9PT0gbmlja25hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChuaWNrbmFtZSA9PT0gZ2FtZWRhdGEucGxheWVyc1tnYW1lZGF0YS53aG9zZXR1cm5dLm5pY2tuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgRnJ5IFlvdXIgQnJhaW5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBHYW1lIGlkOiB7Z2FtZWlkfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPkZpcnN0IHRvIHtnYW1lZGF0YS5nb2FsfSB3aW5zITwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZWRhdGEucGxheWVycy5tYXAoKHBsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2BQbGF5ZXIke3BsLmluZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbC5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwud2lucyA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICh7cGwud2luc30pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdHJpZ2h0XCI+Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLnBvaW50cyA8IDEwID8gPHNwYW4+Jm5ic3A7PC9zcGFuPiA6ICcnfXtwbC5wb2ludHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLnBvaW50cyA+PSBnYW1lZGF0YS5nb2FsICYmIDxzcGFuIGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj4gV2lubmVyISZuYnNwOzwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPlByZXZpb3VzIHJvdW5kOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb3ZlTGlzdCgnbW92ZXNQcmV2Um91bmQnLCBnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVkYXRhLm1vdmVzVGhpc1JvdW5kICYmIGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+VGhpcyByb3VuZDo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNUaGlzUm91bmQgJiYgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93TW92ZUxpc3QoJ21vdmVzVGhpc1JvdW5kJywgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHshZ2FtZWRhdGEuZnJlZWZvcmFsbCAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMgJiYgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+RnJlZS1mb3ItYWxsOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHshZ2FtZWRhdGEuZnJlZWZvcmFsbCAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMgJiYgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01vdmVMaXN0KCdmZmFNb3ZlcycsIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3ZlcylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICB7Z2FtZWRhdGEud2hvc2V0dXJuID4gLTEgJiZcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5GcnkgTGV0dGVyczpcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uIGZyeUxldHRlckFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNodWZmbGVTaXplID0gZ2FtZWRhdGEuZnJ5TGV0dGVycy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiZWZvcmVTaHVmZmxlID0gWy4uLmdhbWVkYXRhLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWZ0ZXJTaHVmZmxlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChhZnRlclNodWZmbGUubGVuZ3RoIDwgc2h1ZmZsZVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYmVmb3JlU2h1ZmZsZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTaHVmZmxlLnB1c2goYmVmb3JlU2h1ZmZsZVtyYW5kXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVTaHVmZmxlLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0dhbWVkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnYW1lZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdHYW1lZGF0YS5mcnlMZXR0ZXJzID0gWy4uLmFmdGVyU2h1ZmZsZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG5ld0dhbWVkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZnJ5TGV0dGVyQWN0aW9uQnV0dG9uSWNvblwiPmNhY2hlZDwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uIGZyeUxldHRlckFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNvcnR3b3JrID0gWy4uLmdhbWVkYXRhLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0d29yay5zb3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdHYW1lZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2FtZWRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3R2FtZWRhdGEuZnJ5TGV0dGVycyA9IFsuLi5zb3J0d29ya107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG5ld0dhbWVkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZnJ5TGV0dGVyQWN0aW9uQnV0dG9uSWNvblwiPnNvcnRfYnlfYWxwaGE8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJ5TGV0dGVyRGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVkYXRhLmZyeUxldHRlcnMubWFwKChmbCxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YEZyeUxldHRlciR7aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpID09PSBzZWxlY3RlZCA/IFwiZnliRnJ5TGV0dGVyIFNlbGVjdGVkXCI6XCJmeWJGcnlMZXR0ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZUxldHRlciA9IGdhbWVkYXRhLmZyeUxldHRlcnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaWZ0ZWRMZXR0ZXJzID0gWy4uLmdhbWVkYXRhLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2gobW92ZUxldHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0dhbWVkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnYW1lZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0dhbWVkYXRhLmZyeUxldHRlcnMgPSBbLi4uc2hpZnRlZExldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG5ld0dhbWVkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7IC8vIHVuc2VsZWN0IHdoZW4gY2xpY2tlZCBhIHNlY29uZCB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBzZWxlY3RlZCB0aWxlIHRvIHRoaXMgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaWZ0ZWRMZXR0ZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlTGV0dGVyID0gZ2FtZWRhdGEuZnJ5TGV0dGVyc1tzZWxlY3RlZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdhbWVkYXRhLmZyeUxldHRlcnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChtb3ZlTGV0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdHYW1lZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2FtZWRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3R2FtZWRhdGEuZnJ5TGV0dGVycyA9IFsuLi5zaGlmdGVkTGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG5ld0dhbWVkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e2ZsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICgjQW5zd2Vyczoge2dhbWVkYXRhLm51bVBvc3NpYmxlQW5zd2Vyc30pXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICB7bWVUb0VudGVyV29yZCgpICYmXHJcbiAgICAgICAgICAgICAgICBnZXRQbGF5ZXJXb3JkKGhhbmRsZUtleURvd24sIHdvcmQsIHNldFdvcmQsIGdhbWVkYXRhLCBzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Z2FtZWRhdGEuZ2FtZU92ZXIgJiYgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAgR2FtZSBPdmVyJm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZW5kUmVwbGF5UmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1lZGF0YSwgbmlja25hbWUpfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQTEFZIEFHQUlOXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+e3NuYXR9PC9kaXY+XHJcbiAgICAgICAgICAgIHt3YXJuaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGggdHJXYXJuaW5nXCI+e3dhcm5pbmd9PC9kaXY+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dNb3ZlTGlzdChtb3ZlTGlzdEtleSwgbW92ZUFycmF5KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIG1vdmVBcnJheS5tYXAoKG1vdmUpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17YCR7bW92ZUxpc3RLZXl9JHttb3ZlLm5pY2tuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgPHRkPnttb3ZlLm5pY2tuYW1lfTxzcGFuIGNsYXNzTmFtZT1cImZsb2F0cmlnaHRcIj46PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICB7bW92ZS5wYXNzID9cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPiBwYXNzZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHttb3ZlLnZhbGlkID8gJycgOiAndHJEYW5nZXInfSAke21vdmUud29yZC5sZW5ndGggPiAxMCAmJiBtb3ZlLmVhcm5lZCA/ICdsb25nJyA6IG1vdmUud29yZC5sZW5ndGggPiAxMyA/ICdsb25nJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92ZS53b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92ZS5lYXJuZWQgJiYgPHNwYW4+ICh7bW92ZS5lYXJuZWR9IHB0cyk8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBsYXllcldvcmQoaGFuZGxlS2V5RG93biwgd29yZCwgc2V0V29yZCwgZ2FtZWRhdGEsIHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lKSB7XHJcbiAgICByZXR1cm4gPGRpdiBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5FbnRlciBXb3JkOjwvZGl2PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0V29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHt3b3JkLnRvVXBwZXJDYXNlKCkudHJpbSgpLm1hdGNoKFwiXlthLXpBLVpdKiRcIikgJiYgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIga2V5PVwic3VibWl0V29yZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGxheWVyV29yZCh3b3JkLCBnYW1lZGF0YSwgc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgbmlja25hbWUsIHNldFdvcmQpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU1VCTUlUXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIGtleT1cInBhc3NCdXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGFzcyhzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBnYW1lZGF0YS5nYW1laWQsIG5pY2tuYW1lLCBzZXRXb3JkKX19PlxyXG4gICAgICAgICAgICAgICAgUEFTU1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0UGxheWVyV29yZCh3b3JkLCBnYW1lZGF0YSwgc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgbmlja25hbWUsIHNldFdvcmQpIHtcclxuICAgIGxldCBmaXhlZHdvcmQgPSB3b3JkLnRvVXBwZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHdvcmQgaXMgYWxsb3dlZCBiYXNlZCBvbiBwcmV2aW91cyB3b3JkcyB0aGlzIHJvdW5kXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcHcgPSBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZFtpXS53b3JkO1xyXG4gICAgICAgIGlmIChwdyA9PT0gZml4ZWR3b3JkKSB7XHJcbiAgICAgICAgICAgIHNldFdhcm5pbmcoYFlvdSBjYW5ub3QgcmV1c2UgYSBwcmV2aW91cyB3b3JkIGZyb20gdGhpcyByb3VuZCAoJHtwd30pLmApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwdyArICdTJyA9PT0gZml4ZWR3b3JkICYmIHB3LnN1YnN0cmluZyhwdy5sZW5ndGgtMSkgIT09ICdTJyAmJiBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZFtpXS52YWxpZCkge1xyXG4gICAgICAgICAgICBzZXRXYXJuaW5nKGBZb3UgY2Fubm90IGFkZCBTIHRvIGEgcHJldmlvdXMgdmFsaWQgd29yZCAoJHtwd30pIGZyb20gdGhpcyByb3VuZCB1bmxlc3MgaXQgZW5kcyB3aXRoIFMuYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgaGF2ZSBhbGwgdGhlIGZyeSBsZXR0ZXJzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVkYXRhLmZyeUxldHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbGV0dGVyQ291bnRSZXF1aXJlZCA9IDA7XHJcbiAgICAgICAgbGV0IGFjdHVhbExldHRlckNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVkYXRhLmZyeUxldHRlcnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVkYXRhLmZyeUxldHRlcnNbaV0gPT09IGdhbWVkYXRhLmZyeUxldHRlcnNbal0pIHtcclxuICAgICAgICAgICAgICAgIGxldHRlckNvdW50UmVxdWlyZWQgPSBsZXR0ZXJDb3VudFJlcXVpcmVkICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpeGVkd29yZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEuZnJ5TGV0dGVyc1tpXSA9PT0gZml4ZWR3b3JkW2pdKSB7XHJcbiAgICAgICAgICAgICAgICBhY3R1YWxMZXR0ZXJDb3VudCA9IGFjdHVhbExldHRlckNvdW50ICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWN0dWFsTGV0dGVyQ291bnQgPCBsZXR0ZXJDb3VudFJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgIHNldFdhcm5pbmcoYFlvdSBuZWVkIHRoZSBsZXR0ZXIgJHtnYW1lZGF0YS5mcnlMZXR0ZXJzW2ldfSBhdCBsZWFzdCAke2xldHRlckNvdW50UmVxdWlyZWR9IHRpbWUke2xldHRlckNvdW50UmVxdWlyZWQgPT09IDEgPyAnLicgOiAncy4nfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gSWYgeW91IGdldCBoZXJlIHRoZXkgaGF2ZSBhbGwgdGhlIHJlcXVpcmVkIGxldHRlcnMuIFNlbmQgdGhlIGd1ZXNzIHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICBzZXRXYXJuaW5nKGBDaGVja2luZyB5b3VyIHdvcmQgLi4uIHNob3VsZG4ndCB0YWtlIGxvbmcuIElmIGl0IGRvZXMsIHBsZWFzZSB0cnkgcmVqb2luaW5nIHRoZSBnYW1lLmApO1xyXG4gICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgIGZ1bmM6ICdtb3ZlJyxcclxuICAgICAgICBwYXNzOiBmYWxzZSxcclxuICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgZ2FtZWlkOiBnYW1lZGF0YS5nYW1laWQsXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICBjbGllbnRSb3VuZDogZ2FtZWRhdGEucm91bmQsIC8vIGZvciBjaGVja2luZyByZS1zdWJtaXNzaW9uc1xyXG4gICAgICAgIGNsaWVudE1vdmVzTGVuZ3RoOiBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGgsIC8vIGZvciBjaGVja2luZyByZS1zdWJtaXNzaW9uc1xyXG4gICAgICAgIHdvcmQ6IGZpeGVkd29yZFxyXG4gICAgfSk7XHJcbiAgICBzZXRXb3JkKCcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0UGFzcyhzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lLCBzZXRXb3JkKSB7XHJcbiAgICAvLyBJZiB5b3UgZ2V0IGhlcmUgdGhleSBoYXZlIGFsbCB0aGUgcmVxdWlyZWQgbGV0dGVycy4gU2VuZCB0aGUgZ3Vlc3MgdG8gdGhlIHNlcnZlci5cclxuICAgIHNldFdhcm5pbmcoYFNlbmRpbmcgUEFTUyAuLi4gc2hvdWxkbid0IHRha2UgbG9uZy5gKTtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAnbW92ZScsXHJcbiAgICAgICAgcGFzczogdHJ1ZSxcclxuICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgd29yZDogJydcclxuICAgIH0pO1xyXG4gICAgc2V0V29yZCgnJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRSZXBsYXlSZXF1ZXN0KGNsaWVudCwgdGhpc2lzbWUsIGdhbWVkYXRhLCBuaWNrbmFtZSkge1xyXG4gICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgIGZ1bmM6ICdyZXBsYXknLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1lOiBnYW1lZGF0YSxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==