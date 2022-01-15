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
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/fyb/constants */ "./lib/fyb/constants.js");
/* harmony import */ var _lib_usePrevious__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/usePrevious */ "./lib/usePrevious.js");
/* harmony import */ var _thinChatSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thinChatSection */ "./pages/fyb/thinChatSection.js");
/* harmony import */ var _pb_chatSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pb/chatSection */ "./pages/pb/chatSection.js");
/* harmony import */ var _lib_scrollToBottom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/scrollToBottom */ "./lib/scrollToBottom.js");
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
    0: chatmsgs,
    1: setChatmsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
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
    whoseturn: [],
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
  const prevGamedata = (0,_lib_usePrevious__WEBPACK_IMPORTED_MODULE_4__.usePrevious)(gamedata);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_lib_scrollToBottom__WEBPACK_IMPORTED_MODULE_7__.scrollToBottom)("ScrollableChat");
  }, [chatmsgs]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const interval = setInterval(() => {
      if (gamedata.whoseturn.length > 0 && gamedata.players.length > 0) {
        client.send({
          type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.CLIENT_TYPE_FYB,
          func: 'interval',
          syncstamp: syncstamp,
          thisisme: thisisme,
          nickname: nickname,
          gameid: gamedata.gameid
        });
      }
    }, _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.PING_INTERVAL); // this many milliseconds between above code block executions

    return () => clearInterval(interval);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let msg = wsmessage;
    if (msg !== '') processGameMessage(msg);
  }, [wsmessage]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Sounds will not play on some mobiles. Something about needing a user interaction (protecting cell data usage).
    // Only play sound if gamedata update didn't jump to a different game or round
    if (prevGamedata && gamedata.gameindex === prevGamedata.gameindex && gamedata.round === prevGamedata.round) {
      let soundname; // Play a sound when free for all mode is entered

      if (gamedata.freeforall && !prevGamedata.freeforall) {
        // Decide between Oops (phoney played) and Pass (player passed)
        soundname = gamedata.movesThisRound[gamedata.movesThisRound.length - 1].pass ? "Pass" : "Oops";
      } else if (prevGamedata.players.filter(p => {
        return p.dropped;
      }).length < gamedata.players.filter(p => {
        return p.dropped;
      }).length) {
        // Someone dropped
        soundname = "ByeBye";
      } else if (prevGamedata.whoseturn.indexOf(nickname) < 0 && gamedata.whoseturn.indexOf(nickname) > -1) {
        // My turn
        soundname = "YourTurn";
      }

      if (soundname) {
        var myaudio = document.createElement('audio');
        myaudio.src = `https://tilerunner.github.io/${soundname}.m4a`;
        myaudio.play();
      }
    }
  }, [gamedata]);

  function processGameMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.type === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.CLIENT_TYPE_FYB) {
      if (messageData.func === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.S2C_FUNC_CHATDATA) {
        // It's goofy, but I delete chat when game ends, then someone can start a new game with the same gameid
        // So remove messages not from a player in this game. I might have to make a chat id to properly handle
        let newmsgs = messageData.msgs.filter(function (e) {
          for (let index = 0; index < gamedata.players.length; index++) {
            const player = gamedata.players[index];

            if (player.nickname === e.from) {
              return true;
            }
          }

          return false;
        });
        setChatmsgs(newmsgs);
      } else if (messageData.func === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.S2C_FUNC_GAMEDATA) {
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
      } else {
        // I think this happens when a web socket connection drops and the new one loses the gameid on the server wss.clients
        // So send a rejoin request to get the server back on track
        client.send({
          type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.CLIENT_TYPE_FYB,
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
    return gamedata.whoseturn.indexOf(nickname) > -1;
  };

  const dropper = () => {
    return gamedata.players.filter(p => {
      return p.nickname === nickname && p.dropped;
    }).length > 0;
  };

  const GameSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: [gameid, ": ", nickname]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      className: "trTable",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: ["First to ", gamedata.goal, " wins!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 17
        }, undefined), gamedata.players.map((pl, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
              children: [pl.dropped && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trDanger"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 48
              }, undefined), pl.nickname, pl.wins > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: [" (Won ", pl.wins, ")"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 49
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "floatright",
                children: ":"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
              children: [pl.nickname, pl.wins > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: [" (", pl.wins, ")"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 49
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "floatright",
                children: ":"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [pl.points < 10 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 47
            }, undefined) : '', pl.points, "\xA0", pl.points >= gamedata.goal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "trEmphasis",
              children: " Winner!\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 60
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 25
          }, undefined)]
        }, `Player.${index}.${pl.nickname}`, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }, undefined)), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: "Previous round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 21
        }, undefined), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && showMoveList('movesPrevRound', gamedata.movesPrevRound), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: "This round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }, undefined), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && showMoveList('movesThisRound', gamedata.movesThisRound), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: "Free-for-all:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }, undefined), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && showMoveList('ffaMoves', gamedata.freeforallMoves)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }, undefined), gamedata.whoseturn.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
            lineNumber: 216,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
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
            lineNumber: 225,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 202,
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
          lineNumber: 230,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: ["(#Answers: ", gamedata.numPossibleAnswers, ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }, undefined), meToEnterWord() && getPlayerWord(handleKeyDown, word, setWord, gamedata, setWarning, client, thisisme, nickname), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [gamedata.gameOver && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: ["Game Over\xA0", !dropper() && gamedata.players.filter(p => {
          return !p.dropped;
        }).length > 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            sendReplayRequest(client, thisisme, gamedata, nickname);
          },
          children: "PLAY AGAIN"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: snat
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 13
      }, undefined), warning && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph trWarning",
        children: warning
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 9
    }, undefined), !dropper() && !gamedata.gameOver && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          submitDrop(setWarning, client, thisisme, gamedata.gameid, nickname);
        },
        children: "QUIT"
      }, "dropButton", false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 25
  }, undefined);

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
          lineNumber: 305,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-8",
            children: GameSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thinChatSection__WEBPACK_IMPORTED_MODULE_5__.default, {
              gameid: gameid,
              client: client,
              nickname: nickname,
              msgs: chatmsgs,
              setMsgs: setChatmsgs
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 315,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-6",
            children: GameSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_chatSection__WEBPACK_IMPORTED_MODULE_6__.default, {
              gameid: gameid,
              client: client,
              nickname: nickname,
              msgs: chatmsgs,
              setMsgs: setChatmsgs
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 327,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 326,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 301,
    columnNumber: 9
  }, undefined);
};

_s(Game, "J0IB5GWIC6iRr+st3uyf6AHHmmE=", false, function () {
  return [_lib_usePrevious__WEBPACK_IMPORTED_MODULE_4__.usePrevious];
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
        lineNumber: 340,
        columnNumber: 36
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      children: move.pass ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trDanger",
        children: " passed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: `${move.valid ? '' : 'trDanger'}`,
            children: [move.word, move.earned && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: [" (", move.earned, " pts)"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 349,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 347,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: `${move.valid ? '' : 'trDanger'} ${move.word.length > 10 && move.earned ? 'long' : move.word.length > 13 ? 'long' : ''}`,
            children: [move.word, move.earned && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: [" (", move.earned, " pts)"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 17
        }, this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 17
    }, this)]
  }, `${moveListKey}${move.nickname}`, true, {
    fileName: _jsxFileName,
    lineNumber: 339,
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
      lineNumber: 367,
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
      lineNumber: 368,
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
        lineNumber: 377,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          submitPass(setWarning, client, thisisme, gamedata.gameid, nickname, setWord);
        },
        children: "PASS"
      }, "passButton", false, {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 366,
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
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.CLIENT_TYPE_FYB,
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
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.CLIENT_TYPE_FYB,
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

function submitDrop(setWarning, client, thisisme, gameid, nickname) {
  setWarning(`Sending DROP ... shouldn't take long.`);
  client.send({
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.CLIENT_TYPE_FYB,
    func: 'drop',
    thisisme: thisisme,
    gameid: gameid,
    nickname: nickname,
    timestamp: Date.now()
  });
}

function sendReplayRequest(client, thisisme, gamedata, nickname) {
  client.send({
    type: _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.CLIENT_TYPE_FYB,
    func: 'replay',
    thisisme: thisisme,
    game: gamedata,
    gameid: gamedata.gameid,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInNldFdoZXJldG8iLCJjbGllbnQiLCJ0aGlzaXNtZSIsIndzbWVzc2FnZSIsIm5pY2tuYW1lIiwiZ2FtZWlkIiwiY2hhdG1zZ3MiLCJzZXRDaGF0bXNncyIsInVzZVN0YXRlIiwic25hdCIsInNldFNuYXQiLCJ3YXJuaW5nIiwic2V0V2FybmluZyIsImdhbWVkYXRhIiwic2V0R2FtZWRhdGEiLCJnb2FsIiwiZ2FtZWluZGV4Iiwicm91bmQiLCJmcmVlZm9yYWxsIiwibW92ZXNUaGlzUm91bmQiLCJtb3Zlc1ByZXZSb3VuZCIsIndob3NldHVybiIsImZyeUxldHRlcnMiLCJwbGF5ZXJzIiwiaW5kZXgiLCJ3aW5zIiwid29yZCIsInNldFdvcmQiLCJzeW5jc3RhbXAiLCJzZXRTeW5jc3RhbXAiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicHJldkdhbWVkYXRhIiwidXNlUHJldmlvdXMiLCJ1c2VFZmZlY3QiLCJzY3JvbGxUb0JvdHRvbSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzZW5kIiwidHlwZSIsImMiLCJmdW5jIiwiY2xlYXJJbnRlcnZhbCIsIm1zZyIsInByb2Nlc3NHYW1lTWVzc2FnZSIsInNvdW5kbmFtZSIsInBhc3MiLCJmaWx0ZXIiLCJwIiwiZHJvcHBlZCIsImluZGV4T2YiLCJteWF1ZGlvIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwicGxheSIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsIm5ld21zZ3MiLCJtc2dzIiwiZSIsInBsYXllciIsImZyb20iLCJnYW1lIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImhhbmRsZUtleURvd24iLCJldmVudCIsIm1lVG9FbnRlcldvcmQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdFBsYXllcldvcmQiLCJkcm9wcGVyIiwiR2FtZVNlY3Rpb24iLCJtYXAiLCJwbCIsInBvaW50cyIsInNob3dNb3ZlTGlzdCIsImZyZWVmb3JhbGxNb3ZlcyIsInNodWZmbGVTaXplIiwiYmVmb3JlU2h1ZmZsZSIsImFmdGVyU2h1ZmZsZSIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdXNoIiwic3BsaWNlIiwibmV3R2FtZWRhdGEiLCJzdHJpbmdpZnkiLCJzb3J0d29yayIsInNvcnQiLCJmbCIsImkiLCJtb3ZlTGV0dGVyIiwic2hpZnRlZExldHRlcnMiLCJlbGVtZW50IiwibnVtUG9zc2libGVBbnN3ZXJzIiwiZ2V0UGxheWVyV29yZCIsImdhbWVPdmVyIiwic2VuZFJlcGxheVJlcXVlc3QiLCJzdWJtaXREcm9wIiwibW92ZUxpc3RLZXkiLCJtb3ZlQXJyYXkiLCJtb3ZlIiwidmFsaWQiLCJlYXJuZWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwidHJpbSIsIm1hdGNoIiwic3VibWl0UGFzcyIsImZpeGVkd29yZCIsInB3Iiwic3Vic3RyaW5nIiwibGV0dGVyQ291bnRSZXF1aXJlZCIsImFjdHVhbExldHRlckNvdW50IiwiaiIsImNsaWVudFJvdW5kIiwiY2xpZW50TW92ZXNMZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUNDLFlBQUQ7QUFBYUMsUUFBYjtBQUFxQkMsVUFBckI7QUFBK0JDLFdBQS9CO0FBQTBDQyxVQUExQztBQUFvREM7QUFBcEQsQ0FBRCxLQUFpRTtBQUFBOztBQUMxRSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkYsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFB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LFlBQVEsRUFBRUEsUUFIRjtBQUlSZ0UsUUFBSSxFQUFFckQsUUFKRTtBQUtSUixVQUFNLEVBQUVRLFFBQVEsQ0FBQ1IsTUFMVDtBQU1SRCxZQUFRLEVBQUVBLFFBTkY7QUFPUitELGFBQVMsRUFBRUMsSUFBSSxDQUFDQyxHQUFMO0FBUEgsR0FBWjtBQVNIOztBQUVELCtEQUFldEUsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZjRhODAwMjM5ZjA1YmEyZTQ1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCcm93c2VyVmlldywgTW9iaWxlT25seVZpZXd9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnO1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9meWIvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdXNlUHJldmlvdXMgfSBmcm9tIFwiLi4vLi4vbGliL3VzZVByZXZpb3VzXCI7XHJcbmltcG9ydCBUaGluQ2hhdCBmcm9tIFwiLi90aGluQ2hhdFNlY3Rpb25cIjtcclxuaW1wb3J0IENoYXQgZnJvbSBcIi4uL3BiL2NoYXRTZWN0aW9uXCI7XHJcbmltcG9ydCB7IHNjcm9sbFRvQm90dG9tIH0gZnJvbSBcIi4uLy4uL2xpYi9zY3JvbGxUb0JvdHRvbVwiO1xyXG5cclxuY29uc3QgR2FtZSA9ICh7c2V0V2hlcmV0bywgY2xpZW50LCB0aGlzaXNtZSwgd3NtZXNzYWdlLCBuaWNrbmFtZSwgZ2FtZWlkfSkgPT4ge1xyXG4gICAgY29uc3QgW2NoYXRtc2dzLCBzZXRDaGF0bXNnc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc25hdCwgc2V0U25hdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbd2FybmluZywgc2V0V2FybmluZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ2FtZWRhdGEsIHNldEdhbWVkYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBnb2FsOiA5OVxyXG4gICAgICAgICwgZ2FtZWluZGV4OiAwXHJcbiAgICAgICAgLCByb3VuZDogMFxyXG4gICAgICAgICwgZnJlZWZvcmFsbDogZmFsc2VcclxuICAgICAgICAsIG1vdmVzVGhpc1JvdW5kOiBbXVxyXG4gICAgICAgICwgbW92ZXNQcmV2Um91bmQ6IFtdXHJcbiAgICAgICAgLCB3aG9zZXR1cm46IFtdXHJcbiAgICAgICAgLCBmcnlMZXR0ZXJzOiBbXVxyXG4gICAgICAgICwgcGxheWVyczogW3tpbmRleDogMCwgbmlja25hbWU6ICdMb2FkaW5nLi4uJywgd2luczogMH1dfSk7XHJcbiAgICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZSgnJyk7IC8vIG15IHdvcmQgdG8gc3VibWl0XHJcbiAgICBjb25zdCBbc3luY3N0YW1wLCBzZXRTeW5jc3RhbXBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgICBjb25zdCBwcmV2R2FtZWRhdGEgPSB1c2VQcmV2aW91cyhnYW1lZGF0YSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVDaGF0XCIpO1xyXG4gICAgICB9LFtjaGF0bXNnc10pXHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEud2hvc2V0dXJuLmxlbmd0aCA+IDAgJiYgZ2FtZWRhdGEucGxheWVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuYzogJ2ludGVydmFsJyxcclxuICAgICAgICAgICAgICAgICAgICBzeW5jc3RhbXA6IHN5bmNzdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGMuUElOR19JTlRFUlZBTCk7IC8vIHRoaXMgbWFueSBtaWxsaXNlY29uZHMgYmV0d2VlbiBhYm92ZSBjb2RlIGJsb2NrIGV4ZWN1dGlvbnNcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NHYW1lTWVzc2FnZShtc2cpO1xyXG4gICAgfSxbd3NtZXNzYWdlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBTb3VuZHMgd2lsbCBub3QgcGxheSBvbiBzb21lIG1vYmlsZXMuIFNvbWV0aGluZyBhYm91dCBuZWVkaW5nIGEgdXNlciBpbnRlcmFjdGlvbiAocHJvdGVjdGluZyBjZWxsIGRhdGEgdXNhZ2UpLlxyXG4gICAgICAgIC8vIE9ubHkgcGxheSBzb3VuZCBpZiBnYW1lZGF0YSB1cGRhdGUgZGlkbid0IGp1bXAgdG8gYSBkaWZmZXJlbnQgZ2FtZSBvciByb3VuZFxyXG4gICAgICAgIGlmIChwcmV2R2FtZWRhdGEgJiYgZ2FtZWRhdGEuZ2FtZWluZGV4ID09PSBwcmV2R2FtZWRhdGEuZ2FtZWluZGV4ICYmIGdhbWVkYXRhLnJvdW5kID09PSBwcmV2R2FtZWRhdGEucm91bmQpIHtcclxuICAgICAgICAgICAgbGV0IHNvdW5kbmFtZTtcclxuICAgICAgICAgICAgLy8gUGxheSBhIHNvdW5kIHdoZW4gZnJlZSBmb3IgYWxsIG1vZGUgaXMgZW50ZXJlZFxyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEuZnJlZWZvcmFsbCAmJiAhcHJldkdhbWVkYXRhLmZyZWVmb3JhbGwpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlY2lkZSBiZXR3ZWVuIE9vcHMgKHBob25leSBwbGF5ZWQpIGFuZCBQYXNzIChwbGF5ZXIgcGFzc2VkKVxyXG4gICAgICAgICAgICAgICAgc291bmRuYW1lID0gZ2FtZWRhdGEubW92ZXNUaGlzUm91bmRbZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoLTFdLnBhc3MgPyBcIlBhc3NcIiA6IFwiT29wc1wiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByZXZHYW1lZGF0YS5wbGF5ZXJzLmZpbHRlcihwID0+IHtyZXR1cm4gcC5kcm9wcGVkO30pLmxlbmd0aCA8IGdhbWVkYXRhLnBsYXllcnMuZmlsdGVyKHAgPT4ge3JldHVybiBwLmRyb3BwZWQ7fSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTb21lb25lIGRyb3BwZWRcclxuICAgICAgICAgICAgICAgIHNvdW5kbmFtZSA9IFwiQnllQnllXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJldkdhbWVkYXRhLndob3NldHVybi5pbmRleE9mKG5pY2tuYW1lKSA8IDAgJiYgZ2FtZWRhdGEud2hvc2V0dXJuLmluZGV4T2Yobmlja25hbWUpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIC8vIE15IHR1cm5cclxuICAgICAgICAgICAgICAgIHNvdW5kbmFtZSA9IFwiWW91clR1cm5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc291bmRuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXlhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgICAgICAgICBteWF1ZGlvLnNyYyA9IGBodHRwczovL3RpbGVydW5uZXIuZ2l0aHViLmlvLyR7c291bmRuYW1lfS5tNGFgO1xyXG4gICAgICAgICAgICAgICAgbXlhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIFtnYW1lZGF0YV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gYy5DTElFTlRfVFlQRV9GWUIpIHtcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IGMuUzJDX0ZVTkNfQ0hBVERBVEEpIHtcclxuICAgICAgICAgICAgICAgIC8vIEl0J3MgZ29vZnksIGJ1dCBJIGRlbGV0ZSBjaGF0IHdoZW4gZ2FtZSBlbmRzLCB0aGVuIHNvbWVvbmUgY2FuIHN0YXJ0IGEgbmV3IGdhbWUgd2l0aCB0aGUgc2FtZSBnYW1laWRcclxuICAgICAgICAgICAgICAgIC8vIFNvIHJlbW92ZSBtZXNzYWdlcyBub3QgZnJvbSBhIHBsYXllciBpbiB0aGlzIGdhbWUuIEkgbWlnaHQgaGF2ZSB0byBtYWtlIGEgY2hhdCBpZCB0byBwcm9wZXJseSBoYW5kbGVcclxuICAgICAgICAgICAgICAgIGxldCBuZXdtc2dzID0gbWVzc2FnZURhdGEubXNncy5maWx0ZXIoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBnYW1lZGF0YS5wbGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSBnYW1lZGF0YS5wbGF5ZXJzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5uaWNrbmFtZSA9PT0gZS5mcm9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0Q2hhdG1zZ3MobmV3bXNncyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gYy5TMkNfRlVOQ19HQU1FREFUQSkge1xyXG4gICAgICAgICAgICAgICAgLyogU0VSVkVSIFNFTlQgR0FNRSBEQVRBXHJcbiAgICAgICAgICAgICAgICBGb3IgYSByZWd1bGFyIHVwZGF0ZSBkdWUgdG8gcGxheWVyIGFjdGl2aXR5LCB0aGlzIGNsaWVudCBuZWVkcyB0aGUgdXBkYXRlLlxyXG5cclxuICAgICAgICAgICAgICAgIEZvciBkcm9wcGVkIGNvbm5lY3Rpb25zIHdoaWNoIG1hZGUgdGhpcyBjbGllbnQgc2VuZCBhIHJlam9pbiB0byB1cGRhdGUgc2VydmVyJ3NcclxuICAgICAgICAgICAgICAgICAgIGluZm8gZm9yIHRoaXMgY2xpZW50LCB3aGljaCBtYWtlcyB0aGUgc2VydmVyIHNlbmRzIGdhbWUgaW5mbyB0byB0aGlzIGNsaWVudCxcclxuICAgICAgICAgICAgICAgICAgIHRoaXMgY2xpZW50IGlzIGFscmVhZHkgdXAgdG8gZGF0ZSBhbmQgZG9lcyBub3QgbmVlZCB0aGUgdXBkYXRlLiBXZSBkbyBub3QgdGFrZVxyXG4gICAgICAgICAgICAgICAgICAgdGhlIHVwZGF0ZSBzbyBhcyBub3QgdG8gdXBzZXQgdGhlIGZyeSBsZXR0ZXIgcmVhcnJhbmdlbWVudHMgdGhpcyBjbGllbnQgbWF5IGhhdmVcclxuICAgICAgICAgICAgICAgICAgIG1hZGUuXHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmdhbWUuZ2FtZWluZGV4ICE9PSBnYW1lZGF0YS5nYW1laW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB8fCBtZXNzYWdlRGF0YS5nYW1lLnJvdW5kICE9PSBnYW1lZGF0YS5yb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG1lc3NhZ2VEYXRhLmdvYWwgIT09IGdhbWVkYXRhLmdvYWxcclxuICAgICAgICAgICAgICAgICAgICB8fCBtZXNzYWdlRGF0YS5wbGF5ZXJzLmxlbmd0aCAhPT0gZ2FtZWRhdGEucGxheWVycy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICB8fCBtZXNzYWdlRGF0YS5nYW1lLm1vdmVzVGhpc1JvdW5kLmxlbmd0aCAhPT0gZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNuYXQobWVzc2FnZURhdGEuc25hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG1lc3NhZ2VEYXRhLmdhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN5bmNzdGFtcChtZXNzYWdlRGF0YS5nYW1lLnN5bmNzdGFtcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0V2FybmluZygnJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJIHRoaW5rIHRoaXMgaGFwcGVucyB3aGVuIGEgd2ViIHNvY2tldCBjb25uZWN0aW9uIGRyb3BzIGFuZCB0aGUgbmV3IG9uZSBsb3NlcyB0aGUgZ2FtZWlkIG9uIHRoZSBzZXJ2ZXIgd3NzLmNsaWVudHNcclxuICAgICAgICAgICAgICAgIC8vIFNvIHNlbmQgYSByZWpvaW4gcmVxdWVzdCB0byBnZXQgdGhlIHNlcnZlciBiYWNrIG9uIHRyYWNrXHJcbiAgICAgICAgICAgICAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuYzogJ3Jlam9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoIW1lVG9FbnRlcldvcmQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzdWJtaXRQbGF5ZXJXb3JkKHdvcmQsIGdhbWVkYXRhLCBzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSwgc2V0V29yZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVUb0VudGVyV29yZCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKGdhbWVkYXRhLndob3NldHVybi5pbmRleE9mKG5pY2tuYW1lKSA+IC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkcm9wcGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBnYW1lZGF0YS5wbGF5ZXJzLmZpbHRlcihwID0+IHtyZXR1cm4gcC5uaWNrbmFtZSA9PT0gbmlja25hbWUgJiYgcC5kcm9wcGVkO30pLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgR2FtZVNlY3Rpb24gPSA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJTdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICB7Z2FtZWlkfToge25pY2tuYW1lfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5GaXJzdCB0byB7Z2FtZWRhdGEuZ29hbH0gd2lucyE8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5wbGF5ZXJzLm1hcCgocGwsaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgUGxheWVyLiR7aW5kZXh9LiR7cGwubmlja25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcm93c2VyVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwuZHJvcHBlZCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPjwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbC53aW5zID4gMCAmJiA8c3Bhbj4gKFdvbiB7cGwud2luc30pPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdHJpZ2h0XCI+Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9iaWxlT25seVZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbC53aW5zID4gMCAmJiA8c3Bhbj4gKHtwbC53aW5zfSk8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0cmlnaHRcIj46PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2JpbGVPbmx5Vmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLnBvaW50cyA8IDEwID8gPHNwYW4+Jm5ic3A7PC9zcGFuPiA6ICcnfXtwbC5wb2ludHN9Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwucG9pbnRzID49IGdhbWVkYXRhLmdvYWwgJiYgPHNwYW4gY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPiBXaW5uZXIhJm5ic3A7PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNQcmV2Um91bmQgJiYgZ2FtZWRhdGEubW92ZXNQcmV2Um91bmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+UHJldmlvdXMgcm91bmQ6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPn1cclxuICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd01vdmVMaXN0KCdtb3Zlc1ByZXZSb3VuZCcsIGdhbWVkYXRhLm1vdmVzUHJldlJvdW5kKX1cclxuICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5UaGlzIHJvdW5kOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj59XHJcbiAgICAgICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNUaGlzUm91bmQgJiYgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dNb3ZlTGlzdCgnbW92ZXNUaGlzUm91bmQnLCBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZCl9XHJcbiAgICAgICAgICAgICAgICB7IWdhbWVkYXRhLmZyZWVmb3JhbGwgJiYgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzICYmIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3Zlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5GcmVlLWZvci1hbGw6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPn1cclxuICAgICAgICAgICAgICAgIHshZ2FtZWRhdGEuZnJlZWZvcmFsbCAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMgJiYgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICBzaG93TW92ZUxpc3QoJ2ZmYU1vdmVzJywgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIHtnYW1lZGF0YS53aG9zZXR1cm4ubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPkZyeSBMZXR0ZXJzOlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b24gZnJ5TGV0dGVyQWN0aW9uQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2h1ZmZsZVNpemUgPSBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJlZm9yZVNodWZmbGUgPSBbLi4uZ2FtZWRhdGEuZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZnRlclNodWZmbGUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGFmdGVyU2h1ZmZsZS5sZW5ndGggPCBzaHVmZmxlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBiZWZvcmVTaHVmZmxlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlclNodWZmbGUucHVzaChiZWZvcmVTaHVmZmxlW3JhbmRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNodWZmbGUuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3R2FtZWRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdhbWVkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0dhbWVkYXRhLmZyeUxldHRlcnMgPSBbLi4uYWZ0ZXJTaHVmZmxlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobmV3R2FtZWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZnJ5TGV0dGVyQWN0aW9uQnV0dG9uSWNvblwiPmNhY2hlZDwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uIGZyeUxldHRlckFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNvcnR3b3JrID0gWy4uLmdhbWVkYXRhLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0d29yay5zb3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdHYW1lZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2FtZWRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3R2FtZWRhdGEuZnJ5TGV0dGVycyA9IFsuLi5zb3J0d29ya107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG5ld0dhbWVkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGZyeUxldHRlckFjdGlvbkJ1dHRvbkljb25cIj5zb3J0X2J5X2FscGhhPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyeUxldHRlckRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5mcnlMZXR0ZXJzLm1hcCgoZmwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgRnJ5TGV0dGVyJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2kgPT09IHNlbGVjdGVkID8gXCJmeWJGcnlMZXR0ZXIgU2VsZWN0ZWRcIiA6IFwiZnliRnJ5TGV0dGVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVMZXR0ZXIgPSBnYW1lZGF0YS5mcnlMZXR0ZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlmdGVkTGV0dGVycyA9IFsuLi5nYW1lZGF0YS5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChtb3ZlTGV0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3R2FtZWRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdhbWVkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3R2FtZWRhdGEuZnJ5TGV0dGVycyA9IFsuLi5zaGlmdGVkTGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobmV3R2FtZWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7IC8vIHVuc2VsZWN0IHdoZW4gY2xpY2tlZCBhIHNlY29uZCB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBzZWxlY3RlZCB0aWxlIHRvIHRoaXMgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaWZ0ZWRMZXR0ZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlTGV0dGVyID0gZ2FtZWRhdGEuZnJ5TGV0dGVyc1tzZWxlY3RlZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdhbWVkYXRhLmZyeUxldHRlcnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChtb3ZlTGV0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdHYW1lZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2FtZWRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3R2FtZWRhdGEuZnJ5TGV0dGVycyA9IFsuLi5zaGlmdGVkTGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG5ld0dhbWVkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+e2ZsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICgjQW5zd2Vyczoge2dhbWVkYXRhLm51bVBvc3NpYmxlQW5zd2Vyc30pXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIHttZVRvRW50ZXJXb3JkKCkgJiZcclxuICAgICAgICAgICAgZ2V0UGxheWVyV29yZChoYW5kbGVLZXlEb3duLCB3b3JkLCBzZXRXb3JkLCBnYW1lZGF0YSwgc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgbmlja25hbWUpfVxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtnYW1lZGF0YS5nYW1lT3ZlciAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEdhbWUgT3ZlciZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIHshZHJvcHBlcigpICYmIGdhbWVkYXRhLnBsYXllcnMuZmlsdGVyKHAgPT4ge3JldHVybiAhcC5kcm9wcGVkO30pLmxlbmd0aCA+IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZW5kUmVwbGF5UmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1lZGF0YSwgbmlja25hbWUpOyB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUExBWSBBR0FJTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj57c25hdH08L2Rpdj5cclxuICAgICAgICAgICAge3dhcm5pbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaCB0cldhcm5pbmdcIj57d2FybmluZ308L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgeyFkcm9wcGVyKCkgJiYgIWdhbWVkYXRhLmdhbWVPdmVyICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBrZXk9XCJkcm9wQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0RHJvcChzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBnYW1lZGF0YS5nYW1laWQsIG5pY2tuYW1lKX19PlxyXG4gICAgICAgICAgICAgICAgICAgIFFVSVRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj47XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgRnJ5IFlvdXIgQnJhaW5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7R2FtZVNlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGhpbkNoYXQgZ2FtZWlkPXtnYW1laWR9IGNsaWVudD17Y2xpZW50fSBuaWNrbmFtZT17bmlja25hbWV9IG1zZ3M9e2NoYXRtc2dzfSBzZXRNc2dzPXtzZXRDaGF0bXNnc30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtHYW1lU2VjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0IGdhbWVpZD17Z2FtZWlkfSBjbGllbnQ9e2NsaWVudH0gbmlja25hbWU9e25pY2tuYW1lfSBtc2dzPXtjaGF0bXNnc30gc2V0TXNncz17c2V0Q2hhdG1zZ3N9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dNb3ZlTGlzdChtb3ZlTGlzdEtleSwgbW92ZUFycmF5KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIG1vdmVBcnJheS5tYXAoKG1vdmUpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17YCR7bW92ZUxpc3RLZXl9JHttb3ZlLm5pY2tuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgPHRkPnttb3ZlLm5pY2tuYW1lfTxzcGFuIGNsYXNzTmFtZT1cImZsb2F0cmlnaHRcIj46PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICB7bW92ZS5wYXNzID9cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPiBwYXNzZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEJyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7bW92ZS52YWxpZCA/ICcnIDogJ3RyRGFuZ2VyJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmUud29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmUuZWFybmVkICYmIDxzcGFuPiAoe21vdmUuZWFybmVkfSBwdHMpPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgPE1vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7bW92ZS52YWxpZCA/ICcnIDogJ3RyRGFuZ2VyJ30gJHttb3ZlLndvcmQubGVuZ3RoID4gMTAgJiYgbW92ZS5lYXJuZWQgPyAnbG9uZycgOiBtb3ZlLndvcmQubGVuZ3RoID4gMTMgPyAnbG9uZycgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmUud29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmUuZWFybmVkICYmIDxzcGFuPiAoe21vdmUuZWFybmVkfSBwdHMpPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L01vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICkpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQbGF5ZXJXb3JkKGhhbmRsZUtleURvd24sIHdvcmQsIHNldFdvcmQsIGdhbWVkYXRhLCBzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSkge1xyXG4gICAgcmV0dXJuIDxkaXYgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+RW50ZXIgV29yZDo8L2Rpdj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwid29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFdvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7d29yZC50b1VwcGVyQ2FzZSgpLnRyaW0oKS5tYXRjaChcIl5bYS16QS1aXSokXCIpICYmIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIGtleT1cInN1Ym1pdFdvcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBsYXllcldvcmQod29yZCwgZ2FtZWRhdGEsIHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lLCBzZXRXb3JkKX19PlxyXG4gICAgICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBrZXk9XCJwYXNzQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBhc3Moc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWRhdGEuZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCl9fT5cclxuICAgICAgICAgICAgICAgIFBBU1NcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRQbGF5ZXJXb3JkKHdvcmQsIGdhbWVkYXRhLCBzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSwgc2V0V29yZCkge1xyXG4gICAgbGV0IGZpeGVkd29yZCA9IHdvcmQudG9VcHBlckNhc2UoKS50cmltKCk7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgd29yZCBpcyBhbGxvd2VkIGJhc2VkIG9uIHByZXZpb3VzIHdvcmRzIHRoaXMgcm91bmRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBwdyA9IGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kW2ldLndvcmQ7XHJcbiAgICAgICAgaWYgKHB3ID09PSBmaXhlZHdvcmQpIHtcclxuICAgICAgICAgICAgc2V0V2FybmluZyhgWW91IGNhbm5vdCByZXVzZSBhIHByZXZpb3VzIHdvcmQgZnJvbSB0aGlzIHJvdW5kICgke3B3fSkuYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHB3ICsgJ1MnID09PSBmaXhlZHdvcmQgJiYgcHcuc3Vic3RyaW5nKHB3Lmxlbmd0aC0xKSAhPT0gJ1MnICYmIGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kW2ldLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHNldFdhcm5pbmcoYFlvdSBjYW5ub3QgYWRkIFMgdG8gYSBwcmV2aW91cyB2YWxpZCB3b3JkICgke3B3fSkgZnJvbSB0aGlzIHJvdW5kIHVubGVzcyBpdCBlbmRzIHdpdGggUy5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIENoZWNrIGlmIHRoZSBoYXZlIGFsbCB0aGUgZnJ5IGxldHRlcnNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWRhdGEuZnJ5TGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBsZXR0ZXJDb3VudFJlcXVpcmVkID0gMDtcclxuICAgICAgICBsZXQgYWN0dWFsTGV0dGVyQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2FtZWRhdGEuZnJ5TGV0dGVycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEuZnJ5TGV0dGVyc1tpXSA9PT0gZ2FtZWRhdGEuZnJ5TGV0dGVyc1tqXSkge1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyQ291bnRSZXF1aXJlZCA9IGxldHRlckNvdW50UmVxdWlyZWQgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZml4ZWR3b3JkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lZGF0YS5mcnlMZXR0ZXJzW2ldID09PSBmaXhlZHdvcmRbal0pIHtcclxuICAgICAgICAgICAgICAgIGFjdHVhbExldHRlckNvdW50ID0gYWN0dWFsTGV0dGVyQ291bnQgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhY3R1YWxMZXR0ZXJDb3VudCA8IGxldHRlckNvdW50UmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgc2V0V2FybmluZyhgWW91IG5lZWQgdGhlIGxldHRlciAke2dhbWVkYXRhLmZyeUxldHRlcnNbaV19IGF0IGxlYXN0ICR7bGV0dGVyQ291bnRSZXF1aXJlZH0gdGltZSR7bGV0dGVyQ291bnRSZXF1aXJlZCA9PT0gMSA/ICcuJyA6ICdzLid9YCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBJZiB5b3UgZ2V0IGhlcmUgdGhleSBoYXZlIGFsbCB0aGUgcmVxdWlyZWQgbGV0dGVycy4gU2VuZCB0aGUgZ3Vlc3MgdG8gdGhlIHNlcnZlci5cclxuICAgIHNldFdhcm5pbmcoYENoZWNraW5nIHlvdXIgd29yZCAuLi4gc2hvdWxkbid0IHRha2UgbG9uZy4gSWYgaXQgZG9lcywgcGxlYXNlIHRyeSByZWpvaW5pbmcgdGhlIGdhbWUuYCk7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ21vdmUnLFxyXG4gICAgICAgIHBhc3M6IGZhbHNlLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVkYXRhLmdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIGNsaWVudFJvdW5kOiBnYW1lZGF0YS5yb3VuZCwgLy8gZm9yIGNoZWNraW5nIHJlLXN1Ym1pc3Npb25zXHJcbiAgICAgICAgY2xpZW50TW92ZXNMZW5ndGg6IGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kLmxlbmd0aCwgLy8gZm9yIGNoZWNraW5nIHJlLXN1Ym1pc3Npb25zXHJcbiAgICAgICAgd29yZDogZml4ZWR3b3JkXHJcbiAgICB9KTtcclxuICAgIHNldFdvcmQoJycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRQYXNzKHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbmlja25hbWUsIHNldFdvcmQpIHtcclxuICAgIC8vIElmIHlvdSBnZXQgaGVyZSB0aGV5IGhhdmUgYWxsIHRoZSByZXF1aXJlZCBsZXR0ZXJzLiBTZW5kIHRoZSBndWVzcyB0byB0aGUgc2VydmVyLlxyXG4gICAgc2V0V2FybmluZyhgU2VuZGluZyBQQVNTIC4uLiBzaG91bGRuJ3QgdGFrZSBsb25nLmApO1xyXG4gICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgIGZ1bmM6ICdtb3ZlJyxcclxuICAgICAgICBwYXNzOiB0cnVlLFxyXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICB3b3JkOiAnJ1xyXG4gICAgfSk7XHJcbiAgICBzZXRXb3JkKCcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0RHJvcChzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lKSB7XHJcbiAgICBzZXRXYXJuaW5nKGBTZW5kaW5nIERST1AgLi4uIHNob3VsZG4ndCB0YWtlIGxvbmcuYCk7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ2Ryb3AnLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZFJlcGxheVJlcXVlc3QoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWRhdGEsIG5pY2tuYW1lKSB7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ3JlcGxheScsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWU6IGdhbWVkYXRhLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9