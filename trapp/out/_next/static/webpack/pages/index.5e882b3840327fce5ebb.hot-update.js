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
    // This sound will not play on some mobiles. Something about needing a user interaction (protecting cell data usage).
    if (prevGamedata && gamedata.gameindex === prevGamedata.gameindex && gamedata.round === prevGamedata.round && gamedata.freeforall && !prevGamedata.freeforall) {
      var myaudio = document.createElement('audio'); // Decide between Oops (phoney played) and Pass (player passed)

      myaudio.src = gamedata.movesThisRound[gamedata.movesThisRound.length - 1].pass ? "https://tilerunner.github.io/Pass.m4a" : "https://tilerunner.github.io/Oops.m4a";
      myaudio.play();
    }
  }, [gamedata]); // Play a sound when a rescue is made

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
      } else if (messageData.func === _lib_fyb_constants__WEBPACK_IMPORTED_MODULE_3__.S2C_FUNC_GAMECREATED) {// Nothing to do, this is really for the lobby dwellers
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
      lineNumber: 142,
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
            lineNumber: 148,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }, undefined), gamedata.players.map((pl, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
              children: [pl.dropped && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trDanger"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 48
              }, undefined), pl.nickname, pl.wins > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: [" (Won ", pl.wins, ")"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 49
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "floatright",
                children: ":"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
              children: [pl.nickname, pl.wins > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: [" (", pl.wins, ")"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 49
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "floatright",
                children: ":"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [pl.points < 10 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 47
            }, undefined) : '', pl.points, "\xA0", pl.points >= gamedata.goal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "trEmphasis",
              children: " Winner!\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 60
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 25
          }, undefined)]
        }, `Player.${index}.${pl.nickname}`, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 21
        }, undefined)), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: "Previous round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 21
        }, undefined), gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 && showMoveList('movesPrevRound', gamedata.movesPrevRound), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: "This round:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }, undefined), gamedata.movesThisRound && gamedata.movesThisRound.length > 0 && showMoveList('movesThisRound', gamedata.movesThisRound), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            colSpan: "2",
            children: "Free-for-all:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }, undefined), !gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 && showMoveList('ffaMoves', gamedata.freeforallMoves)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
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
            lineNumber: 207,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
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
            lineNumber: 216,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 193,
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
          lineNumber: 221,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: ["(#Answers: ", gamedata.numPossibleAnswers, ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }, undefined), meToEnterWord() && getPlayerWord(handleKeyDown, word, setWord, gamedata, setWarning, client, thisisme, nickname), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [gamedata.gameOver && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: ["Game Over\xA0", !dropper() && !gamedata.players.filter(p => {
          return !p.dropped;
        }).length < 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            sendReplayRequest(client, thisisme, gamedata, nickname);
          },
          children: "PLAY AGAIN"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: snat
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 13
      }, undefined), warning && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph trWarning",
        children: warning
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 141,
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
          lineNumber: 288,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 285,
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
            lineNumber: 294,
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
              lineNumber: 298,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 291,
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
            lineNumber: 306,
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
              lineNumber: 310,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 13
    }, undefined), !dropper() && !gamedata.gameOver && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "trButton",
      onClick: () => {
        submitDrop(setWarning, client, thisisme, gamedata.gameid, nickname);
      },
      children: "QUIT"
    }, "dropButton", false, {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 284,
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
        lineNumber: 329,
        columnNumber: 36
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      children: move.pass ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trDanger",
        children: " passed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: `${move.valid ? '' : 'trDanger'}`,
            children: [move.word, move.earned && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: [" (", move.earned, " pts)"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: `${move.valid ? '' : 'trDanger'} ${move.word.length > 10 && move.earned ? 'long' : move.word.length > 13 ? 'long' : ''}`,
            children: [move.word, move.earned && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: [" (", move.earned, " pts)"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 17
        }, this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 17
    }, this)]
  }, `${moveListKey}${move.nickname}`, true, {
    fileName: _jsxFileName,
    lineNumber: 328,
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
      lineNumber: 356,
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
      lineNumber: 357,
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
        lineNumber: 366,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          submitPass(setWarning, client, thisisme, gamedata.gameid, nickname, setWord);
        },
        children: "PASS"
      }, "passButton", false, {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 355,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInNldFdoZXJldG8iLCJjbGllbnQiLCJ0aGlzaXNtZSIsIndzbWVzc2FnZSIsIm5pY2tuYW1lIiwiZ2FtZWlkIiwiY2hhdG1zZ3MiLCJzZXRDaGF0bXNncyIsInVzZVN0YXRlIiwic25hdCIsInNldFNuYXQiLCJ3YXJuaW5nIiwic2V0V2FybmluZyIsImdhbWVkYXRhIiwic2V0R2FtZWRhdGEiLCJnb2FsIiwiZ2FtZWluZGV4Iiwicm91bmQiLCJmcmVlZm9yYWxsIiwibW92ZXNUaGlzUm91bmQiLCJtb3Zlc1ByZXZSb3VuZCIsIndob3NldHVybiIsImZyeUxldHRlcnMiLCJwbGF5ZXJzIiwiaW5kZXgiLCJ3aW5zIiwid29yZCIsInNldFdvcmQiLCJzeW5jc3RhbXAiLCJzZXRTeW5jc3RhbXAiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicHJldkdhbWVkYXRhIiwidXNlUHJldmlvdXMiLCJ1c2VFZmZlY3QiLCJzY3JvbGxUb0JvdHRvbSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzZW5kIiwidHlwZSIsImMiLCJmdW5jIiwiY2xlYXJJbnRlcnZhbCIsIm1zZyIsInByb2Nlc3NHYW1lTWVzc2FnZSIsIm15YXVkaW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwYXNzIiwicGxheSIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsIm5ld21zZ3MiLCJtc2dzIiwiZmlsdGVyIiwiZSIsInBsYXllciIsImZyb20iLCJnYW1lIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImhhbmRsZUtleURvd24iLCJldmVudCIsIm1lVG9FbnRlcldvcmQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdFBsYXllcldvcmQiLCJpbmRleE9mIiwiZHJvcHBlciIsInAiLCJkcm9wcGVkIiwiR2FtZVNlY3Rpb24iLCJtYXAiLCJwbCIsInBvaW50cyIsInNob3dNb3ZlTGlzdCIsImZyZWVmb3JhbGxNb3ZlcyIsInNodWZmbGVTaXplIiwiYmVmb3JlU2h1ZmZsZSIsImFmdGVyU2h1ZmZsZSIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdXNoIiwic3BsaWNlIiwibmV3R2FtZWRhdGEiLCJzdHJpbmdpZnkiLCJzb3J0d29yayIsInNvcnQiLCJmbCIsImkiLCJtb3ZlTGV0dGVyIiwic2hpZnRlZExldHRlcnMiLCJlbGVtZW50IiwibnVtUG9zc2libGVBbnN3ZXJzIiwiZ2V0UGxheWVyV29yZCIsImdhbWVPdmVyIiwic2VuZFJlcGxheVJlcXVlc3QiLCJzdWJtaXREcm9wIiwibW92ZUxpc3RLZXkiLCJtb3ZlQXJyYXkiLCJtb3ZlIiwidmFsaWQiLCJlYXJuZWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwidHJpbSIsIm1hdGNoIiwic3VibWl0UGFzcyIsImZpeGVkd29yZCIsInB3Iiwic3Vic3RyaW5nIiwibGV0dGVyQ291bnRSZXF1aXJlZCIsImFjdHVhbExldHRlckNvdW50IiwiaiIsImNsaWVudFJvdW5kIiwiY2xpZW50TW92ZXNMZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUNDLFlBQUQ7QUFBYUMsUUFBYjtBQUFxQkMsVUFBckI7QUFBK0JDLFdBQS9CO0FBQTBDQyxVQUExQztBQUFvREM7QUFBcEQsQ0FBRCxLQUFpRTtBQUFBOztBQUMxRSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkYsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE9BQUQ7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QUUsdUNBQUYsQ0FBVjtBQUNBWCxRQUFNLENBQUNzQyxJQUFQLENBQVk7QUFDUkMsUUFBSSxFQUFFQywrREFERTtBQUVSQyxRQUFJLEVBQUUsTUFGRTtBQUdSeEMsWUFBUSxFQUFFQSxRQUhGO0FBSVJHLFVBQU0sRUFBRUEsTUFKQTtBQUtSRCxZQUFRLEVBQUVBLFFBTEY7QUFNUjJELGFBQVMsRUFBRUMsSUFBSSxDQUFDQyxHQUFMO0FBTkgsR0FBWjtBQVFIOztBQUVELFNBQVNzQyxpQkFBVCxDQUEyQnRHLE1BQTNCLEVBQW1DQyxRQUFuQyxFQUE2Q1csUUFBN0MsRUFBdURULFFBQXZELEVBQWlFO0FBQzdESCxRQUFNLENBQUNzQyxJQUFQLENBQVk7QUFDUkMsUUFBSSxFQUFFQywrREFERTtBQUVSQyxRQUFJLEVBQUUsUUFGRTtBQUdSeEMsWUFBUSxFQUFFQSxRQUhGO0FBSVI0RCxRQUFJLEVBQUVqRCxRQUpFO0FBS1JSLFVBQU0sRUFBRVEsUUFBUSxDQUFDUixNQUxUO0FBTVJELFlBQVEsRUFBRUEsUUFORjtBQU9SMkQsYUFBUyxFQUFFQyxJQUFJLENBQUNDLEdBQUw7QUFQSCxHQUFaO0FBU0g7O0FBRUQsK0RBQWVsRSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVlODgyYjM4NDAzMjdmY2U1ZWJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0Jyb3dzZXJWaWV3LCBNb2JpbGVPbmx5Vmlld30gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCc7XHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL2Z5Yi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyB1c2VQcmV2aW91cyB9IGZyb20gXCIuLi8uLi9saWIvdXNlUHJldmlvdXNcIjtcclxuaW1wb3J0IFRoaW5DaGF0IGZyb20gXCIuL3RoaW5DaGF0U2VjdGlvblwiO1xyXG5pbXBvcnQgQ2hhdCBmcm9tIFwiLi4vcGIvY2hhdFNlY3Rpb25cIjtcclxuaW1wb3J0IHsgc2Nyb2xsVG9Cb3R0b20gfSBmcm9tIFwiLi4vLi4vbGliL3Njcm9sbFRvQm90dG9tXCI7XHJcblxyXG5jb25zdCBHYW1lID0gKHtzZXRXaGVyZXRvLCBjbGllbnQsIHRoaXNpc21lLCB3c21lc3NhZ2UsIG5pY2tuYW1lLCBnYW1laWR9KSA9PiB7XHJcbiAgICBjb25zdCBbY2hhdG1zZ3MsIHNldENoYXRtc2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzbmF0LCBzZXRTbmF0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt3YXJuaW5nLCBzZXRXYXJuaW5nXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtnYW1lZGF0YSwgc2V0R2FtZWRhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGdvYWw6IDk5XHJcbiAgICAgICAgLCBnYW1laW5kZXg6IDBcclxuICAgICAgICAsIHJvdW5kOiAwXHJcbiAgICAgICAgLCBmcmVlZm9yYWxsOiBmYWxzZVxyXG4gICAgICAgICwgbW92ZXNUaGlzUm91bmQ6IFtdXHJcbiAgICAgICAgLCBtb3Zlc1ByZXZSb3VuZDogW11cclxuICAgICAgICAsIHdob3NldHVybjogW11cclxuICAgICAgICAsIGZyeUxldHRlcnM6IFtdXHJcbiAgICAgICAgLCBwbGF5ZXJzOiBbe2luZGV4OiAwLCBuaWNrbmFtZTogJ0xvYWRpbmcuLi4nLCB3aW5zOiAwfV19KTtcclxuICAgIGNvbnN0IFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKCcnKTsgLy8gbXkgd29yZCB0byBzdWJtaXRcclxuICAgIGNvbnN0IFtzeW5jc3RhbXAsIHNldFN5bmNzdGFtcF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKC0xKTtcclxuICAgIGNvbnN0IHByZXZHYW1lZGF0YSA9IHVzZVByZXZpb3VzKGdhbWVkYXRhKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNjcm9sbFRvQm90dG9tKFwiU2Nyb2xsYWJsZUNoYXRcIik7XHJcbiAgICAgIH0sW2NoYXRtc2dzXSlcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lZGF0YS53aG9zZXR1cm4ubGVuZ3RoID4gMCAmJiBnYW1lZGF0YS5wbGF5ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICAgICAgICAgICAgICBmdW5jOiAnaW50ZXJ2YWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNzdGFtcDogc3luY3N0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZWlkOiBnYW1lZGF0YS5nYW1laWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgYy5QSU5HX0lOVEVSVkFMKTsgLy8gdGhpcyBtYW55IG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGFib3ZlIGNvZGUgYmxvY2sgZXhlY3V0aW9uc1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7XHJcbiAgICB9LFt3c21lc3NhZ2VdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIFRoaXMgc291bmQgd2lsbCBub3QgcGxheSBvbiBzb21lIG1vYmlsZXMuIFNvbWV0aGluZyBhYm91dCBuZWVkaW5nIGEgdXNlciBpbnRlcmFjdGlvbiAocHJvdGVjdGluZyBjZWxsIGRhdGEgdXNhZ2UpLlxyXG4gICAgICAgIGlmIChwcmV2R2FtZWRhdGFcclxuICAgICAgICAgICAgJiYgZ2FtZWRhdGEuZ2FtZWluZGV4ID09PSBwcmV2R2FtZWRhdGEuZ2FtZWluZGV4XHJcbiAgICAgICAgICAgICYmIGdhbWVkYXRhLnJvdW5kID09PSBwcmV2R2FtZWRhdGEucm91bmRcclxuICAgICAgICAgICAgJiYgZ2FtZWRhdGEuZnJlZWZvcmFsbCAmJiAhcHJldkdhbWVkYXRhLmZyZWVmb3JhbGwpIHtcclxuICAgICAgICAgICAgdmFyIG15YXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgICAgICAgICAvLyBEZWNpZGUgYmV0d2VlbiBPb3BzIChwaG9uZXkgcGxheWVkKSBhbmQgUGFzcyAocGxheWVyIHBhc3NlZClcclxuICAgICAgICAgICAgbXlhdWRpby5zcmMgPSBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZFtnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGgtMV0ucGFzcyA/IFwiaHR0cHM6Ly90aWxlcnVubmVyLmdpdGh1Yi5pby9QYXNzLm00YVwiIDogXCJodHRwczovL3RpbGVydW5uZXIuZ2l0aHViLmlvL09vcHMubTRhXCI7XHJcbiAgICAgICAgICAgIG15YXVkaW8ucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgW2dhbWVkYXRhXSk7IC8vIFBsYXkgYSBzb3VuZCB3aGVuIGEgcmVzY3VlIGlzIG1hZGVcclxuXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzR2FtZU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT09IGMuQ0xJRU5UX1RZUEVfRllCKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBjLlMyQ19GVU5DX0NIQVREQVRBKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJdCdzIGdvb2Z5LCBidXQgSSBkZWxldGUgY2hhdCB3aGVuIGdhbWUgZW5kcywgdGhlbiBzb21lb25lIGNhbiBzdGFydCBhIG5ldyBnYW1lIHdpdGggdGhlIHNhbWUgZ2FtZWlkXHJcbiAgICAgICAgICAgICAgICAvLyBTbyByZW1vdmUgbWVzc2FnZXMgbm90IGZyb20gYSBwbGF5ZXIgaW4gdGhpcyBnYW1lLiBJIG1pZ2h0IGhhdmUgdG8gbWFrZSBhIGNoYXQgaWQgdG8gcHJvcGVybHkgaGFuZGxlXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3bXNncyA9IG1lc3NhZ2VEYXRhLm1zZ3MuZmlsdGVyKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZ2FtZWRhdGEucGxheWVycy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyID0gZ2FtZWRhdGEucGxheWVyc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIubmlja25hbWUgPT09IGUuZnJvbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldENoYXRtc2dzKG5ld21zZ3MpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IGMuUzJDX0ZVTkNfR0FNRURBVEEpIHtcclxuICAgICAgICAgICAgICAgIC8qIFNFUlZFUiBTRU5UIEdBTUUgREFUQVxyXG4gICAgICAgICAgICAgICAgRm9yIGEgcmVndWxhciB1cGRhdGUgZHVlIHRvIHBsYXllciBhY3Rpdml0eSwgdGhpcyBjbGllbnQgbmVlZHMgdGhlIHVwZGF0ZS5cclxuXHJcbiAgICAgICAgICAgICAgICBGb3IgZHJvcHBlZCBjb25uZWN0aW9ucyB3aGljaCBtYWRlIHRoaXMgY2xpZW50IHNlbmQgYSByZWpvaW4gdG8gdXBkYXRlIHNlcnZlcidzXHJcbiAgICAgICAgICAgICAgICAgICBpbmZvIGZvciB0aGlzIGNsaWVudCwgd2hpY2ggbWFrZXMgdGhlIHNlcnZlciBzZW5kcyBnYW1lIGluZm8gdG8gdGhpcyBjbGllbnQsXHJcbiAgICAgICAgICAgICAgICAgICB0aGlzIGNsaWVudCBpcyBhbHJlYWR5IHVwIHRvIGRhdGUgYW5kIGRvZXMgbm90IG5lZWQgdGhlIHVwZGF0ZS4gV2UgZG8gbm90IHRha2VcclxuICAgICAgICAgICAgICAgICAgIHRoZSB1cGRhdGUgc28gYXMgbm90IHRvIHVwc2V0IHRoZSBmcnkgbGV0dGVyIHJlYXJyYW5nZW1lbnRzIHRoaXMgY2xpZW50IG1heSBoYXZlXHJcbiAgICAgICAgICAgICAgICAgICBtYWRlLlxyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS5nYW1lLmdhbWVpbmRleCAhPT0gZ2FtZWRhdGEuZ2FtZWluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgfHwgbWVzc2FnZURhdGEuZ2FtZS5yb3VuZCAhPT0gZ2FtZWRhdGEucm91bmRcclxuICAgICAgICAgICAgICAgICAgICB8fCBtZXNzYWdlRGF0YS5nb2FsICE9PSBnYW1lZGF0YS5nb2FsXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgbWVzc2FnZURhdGEucGxheWVycy5sZW5ndGggIT09IGdhbWVkYXRhLnBsYXllcnMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgbWVzc2FnZURhdGEuZ2FtZS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGggIT09IGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTbmF0KG1lc3NhZ2VEYXRhLnNuYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRHYW1lZGF0YShtZXNzYWdlRGF0YS5nYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTeW5jc3RhbXAobWVzc2FnZURhdGEuZ2FtZS5zeW5jc3RhbXApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFdhcm5pbmcoJycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IGMuUzJDX0ZVTkNfR0FNRUNSRUFURUQpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdGhpbmcgdG8gZG8sIHRoaXMgaXMgcmVhbGx5IGZvciB0aGUgbG9iYnkgZHdlbGxlcnNcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEkgdGhpbmsgdGhpcyBoYXBwZW5zIHdoZW4gYSB3ZWIgc29ja2V0IGNvbm5lY3Rpb24gZHJvcHMgYW5kIHRoZSBuZXcgb25lIGxvc2VzIHRoZSBnYW1laWQgb24gdGhlIHNlcnZlciB3c3MuY2xpZW50c1xyXG4gICAgICAgICAgICAgICAgLy8gU28gc2VuZCBhIHJlam9pbiByZXF1ZXN0IHRvIGdldCB0aGUgc2VydmVyIGJhY2sgb24gdHJhY2tcclxuICAgICAgICAgICAgICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICAgICAgICAgICAgICBmdW5jOiAncmVqb2luJyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZWlkOiBnYW1lZGF0YS5nYW1laWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghbWVUb0VudGVyV29yZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHN1Ym1pdFBsYXllcldvcmQod29yZCwgZ2FtZWRhdGEsIHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lLCBzZXRXb3JkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZVRvRW50ZXJXb3JkID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoZ2FtZWRhdGEud2hvc2V0dXJuLmluZGV4T2Yobmlja25hbWUpID4gLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRyb3BwZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGdhbWVkYXRhLnBsYXllcnMuZmlsdGVyKHAgPT4ge3JldHVybiBwLm5pY2tuYW1lID09PSBuaWNrbmFtZSAmJiBwLmRyb3BwZWQ7fSkubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBHYW1lU2VjdGlvbiA9IDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgIHtnYW1laWR9OiB7bmlja25hbWV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIj5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPkZpcnN0IHRvIHtnYW1lZGF0YS5nb2FsfSB3aW5zITwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAge2dhbWVkYXRhLnBsYXllcnMubWFwKChwbCxpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2BQbGF5ZXIuJHtpbmRleH0uJHtwbC5uaWNrbmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbC5kcm9wcGVkICYmIDxzcGFuIGNsYXNzTmFtZT1cInRyRGFuZ2VyXCI+PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLndpbnMgPiAwICYmIDxzcGFuPiAoV29uIHtwbC53aW5zfSk8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0cmlnaHRcIj46PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2JpbGVPbmx5Vmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLndpbnMgPiAwICYmIDxzcGFuPiAoe3BsLndpbnN9KTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRyaWdodFwiPjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwucG9pbnRzIDwgMTAgPyA8c3Bhbj4mbmJzcDs8L3NwYW4+IDogJyd9e3BsLnBvaW50c30mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbC5wb2ludHMgPj0gZ2FtZWRhdGEuZ29hbCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+IFdpbm5lciEmbmJzcDs8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5QcmV2aW91cyByb3VuZDo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+fVxyXG4gICAgICAgICAgICAgICAge2dhbWVkYXRhLm1vdmVzUHJldlJvdW5kICYmIGdhbWVkYXRhLm1vdmVzUHJldlJvdW5kLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICBzaG93TW92ZUxpc3QoJ21vdmVzUHJldlJvdW5kJywgZ2FtZWRhdGEubW92ZXNQcmV2Um91bmQpfVxyXG4gICAgICAgICAgICAgICAge2dhbWVkYXRhLm1vdmVzVGhpc1JvdW5kICYmIGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPlRoaXMgcm91bmQ6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPn1cclxuICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd01vdmVMaXN0KCdtb3Zlc1RoaXNSb3VuZCcsIGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kKX1cclxuICAgICAgICAgICAgICAgIHshZ2FtZWRhdGEuZnJlZWZvcmFsbCAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMgJiYgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPkZyZWUtZm9yLWFsbDo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+fVxyXG4gICAgICAgICAgICAgICAgeyFnYW1lZGF0YS5mcmVlZm9yYWxsICYmIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3ZlcyAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dNb3ZlTGlzdCgnZmZhTW92ZXMnLCBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAge2dhbWVkYXRhLndob3NldHVybi5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+RnJ5IExldHRlcnM6XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvbiBmcnlMZXR0ZXJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaHVmZmxlU2l6ZSA9IGdhbWVkYXRhLmZyeUxldHRlcnMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmVmb3JlU2h1ZmZsZSA9IFsuLi5nYW1lZGF0YS5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFmdGVyU2h1ZmZsZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYWZ0ZXJTaHVmZmxlLmxlbmd0aCA8IHNodWZmbGVTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJlZm9yZVNodWZmbGUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyU2h1ZmZsZS5wdXNoKGJlZm9yZVNodWZmbGVbcmFuZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2h1ZmZsZS5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdHYW1lZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2FtZWRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3R2FtZWRhdGEuZnJ5TGV0dGVycyA9IFsuLi5hZnRlclNodWZmbGVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1lZGF0YShuZXdHYW1lZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBmcnlMZXR0ZXJBY3Rpb25CdXR0b25JY29uXCI+Y2FjaGVkPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b24gZnJ5TGV0dGVyQWN0aW9uQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc29ydHdvcmsgPSBbLi4uZ2FtZWRhdGEuZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnR3b3JrLnNvcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0dhbWVkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnYW1lZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdHYW1lZGF0YS5mcnlMZXR0ZXJzID0gWy4uLnNvcnR3b3JrXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobmV3R2FtZWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZnJ5TGV0dGVyQWN0aW9uQnV0dG9uSWNvblwiPnNvcnRfYnlfYWxwaGE8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJ5TGV0dGVyRGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVkYXRhLmZyeUxldHRlcnMubWFwKChmbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2BGcnlMZXR0ZXIke2l9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aSA9PT0gc2VsZWN0ZWQgPyBcImZ5YkZyeUxldHRlciBTZWxlY3RlZFwiIDogXCJmeWJGcnlMZXR0ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZUxldHRlciA9IGdhbWVkYXRhLmZyeUxldHRlcnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaWZ0ZWRMZXR0ZXJzID0gWy4uLmdhbWVkYXRhLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKG1vdmVMZXR0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdHYW1lZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2FtZWRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdHYW1lZGF0YS5mcnlMZXR0ZXJzID0gWy4uLnNoaWZ0ZWRMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1lZGF0YShuZXdHYW1lZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTsgLy8gdW5zZWxlY3Qgd2hlbiBjbGlja2VkIGEgc2Vjb25kIHRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIHNlbGVjdGVkIHRpbGUgdG8gdGhpcyBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpZnRlZExldHRlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVMZXR0ZXIgPSBnYW1lZGF0YS5mcnlMZXR0ZXJzW3NlbGVjdGVkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdhbWVkYXRhLmZyeUxldHRlcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2FtZWRhdGEuZnJ5TGV0dGVyc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKG1vdmVMZXR0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0dhbWVkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnYW1lZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdHYW1lZGF0YS5mcnlMZXR0ZXJzID0gWy4uLnNoaWZ0ZWRMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobmV3R2FtZWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID57Zmx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgKCNBbnN3ZXJzOiB7Z2FtZWRhdGEubnVtUG9zc2libGVBbnN3ZXJzfSlcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAge21lVG9FbnRlcldvcmQoKSAmJlxyXG4gICAgICAgICAgICBnZXRQbGF5ZXJXb3JkKGhhbmRsZUtleURvd24sIHdvcmQsIHNldFdvcmQsIGdhbWVkYXRhLCBzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSl9XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2dhbWVkYXRhLmdhbWVPdmVyICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZSBPdmVyJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgeyFkcm9wcGVyKCkgJiYgIWdhbWVkYXRhLnBsYXllcnMuZmlsdGVyKHAgPT4ge3JldHVybiAhcC5kcm9wcGVkO30pLmxlbmd0aCA8IDIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZW5kUmVwbGF5UmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1lZGF0YSwgbmlja25hbWUpOyB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUExBWSBBR0FJTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj57c25hdH08L2Rpdj5cclxuICAgICAgICAgICAge3dhcm5pbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaCB0cldhcm5pbmdcIj57d2FybmluZ308L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgRnJ5IFlvdXIgQnJhaW5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7R2FtZVNlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGhpbkNoYXQgZ2FtZWlkPXtnYW1laWR9IGNsaWVudD17Y2xpZW50fSBuaWNrbmFtZT17bmlja25hbWV9IG1zZ3M9e2NoYXRtc2dzfSBzZXRNc2dzPXtzZXRDaGF0bXNnc30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtHYW1lU2VjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0IGdhbWVpZD17Z2FtZWlkfSBjbGllbnQ9e2NsaWVudH0gbmlja25hbWU9e25pY2tuYW1lfSBtc2dzPXtjaGF0bXNnc30gc2V0TXNncz17c2V0Q2hhdG1zZ3N9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgICAgICAgICAgeyFkcm9wcGVyKCkgJiYgIWdhbWVkYXRhLmdhbWVPdmVyICYmXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIga2V5PVwiZHJvcEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdERyb3Aoc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWRhdGEuZ2FtZWlkLCBuaWNrbmFtZSl9fT5cclxuICAgICAgICAgICAgICAgICAgICBRVUlUXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd01vdmVMaXN0KG1vdmVMaXN0S2V5LCBtb3ZlQXJyYXkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgbW92ZUFycmF5Lm1hcCgobW92ZSkgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgJHttb3ZlTGlzdEtleX0ke21vdmUubmlja25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e21vdmUubmlja25hbWV9PHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRyaWdodFwiPjo8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIHttb3ZlLnBhc3MgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyRGFuZ2VyXCI+IHBhc3NlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHttb3ZlLnZhbGlkID8gJycgOiAndHJEYW5nZXInfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92ZS53b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92ZS5lYXJuZWQgJiYgPHNwYW4+ICh7bW92ZS5lYXJuZWR9IHB0cyk8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICA8TW9iaWxlT25seVZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHttb3ZlLnZhbGlkID8gJycgOiAndHJEYW5nZXInfSAke21vdmUud29yZC5sZW5ndGggPiAxMCAmJiBtb3ZlLmVhcm5lZCA/ICdsb25nJyA6IG1vdmUud29yZC5sZW5ndGggPiAxMyA/ICdsb25nJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92ZS53b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92ZS5lYXJuZWQgJiYgPHNwYW4+ICh7bW92ZS5lYXJuZWR9IHB0cyk8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvTW9iaWxlT25seVZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBsYXllcldvcmQoaGFuZGxlS2V5RG93biwgd29yZCwgc2V0V29yZCwgZ2FtZWRhdGEsIHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lKSB7XHJcbiAgICByZXR1cm4gPGRpdiBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5FbnRlciBXb3JkOjwvZGl2PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0V29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHt3b3JkLnRvVXBwZXJDYXNlKCkudHJpbSgpLm1hdGNoKFwiXlthLXpBLVpdKiRcIikgJiYgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIga2V5PVwic3VibWl0V29yZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGxheWVyV29yZCh3b3JkLCBnYW1lZGF0YSwgc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgbmlja25hbWUsIHNldFdvcmQpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU1VCTUlUXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIGtleT1cInBhc3NCdXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGFzcyhzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBnYW1lZGF0YS5nYW1laWQsIG5pY2tuYW1lLCBzZXRXb3JkKX19PlxyXG4gICAgICAgICAgICAgICAgUEFTU1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFBsYXllcldvcmQod29yZCwgZ2FtZWRhdGEsIHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lLCBzZXRXb3JkKSB7XHJcbiAgICBsZXQgZml4ZWR3b3JkID0gd29yZC50b1VwcGVyQ2FzZSgpLnRyaW0oKTtcclxuICAgIC8vIENoZWNrIGlmIHRoZSB3b3JkIGlzIGFsbG93ZWQgYmFzZWQgb24gcHJldmlvdXMgd29yZHMgdGhpcyByb3VuZFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHB3ID0gZ2FtZWRhdGEubW92ZXNUaGlzUm91bmRbaV0ud29yZDtcclxuICAgICAgICBpZiAocHcgPT09IGZpeGVkd29yZCkge1xyXG4gICAgICAgICAgICBzZXRXYXJuaW5nKGBZb3UgY2Fubm90IHJldXNlIGEgcHJldmlvdXMgd29yZCBmcm9tIHRoaXMgcm91bmQgKCR7cHd9KS5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHcgKyAnUycgPT09IGZpeGVkd29yZCAmJiBwdy5zdWJzdHJpbmcocHcubGVuZ3RoLTEpICE9PSAnUycgJiYgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmRbaV0udmFsaWQpIHtcclxuICAgICAgICAgICAgc2V0V2FybmluZyhgWW91IGNhbm5vdCBhZGQgUyB0byBhIHByZXZpb3VzIHZhbGlkIHdvcmQgKCR7cHd9KSBmcm9tIHRoaXMgcm91bmQgdW5sZXNzIGl0IGVuZHMgd2l0aCBTLmApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGhhdmUgYWxsIHRoZSBmcnkgbGV0dGVyc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxldHRlckNvdW50UmVxdWlyZWQgPSAwO1xyXG4gICAgICAgIGxldCBhY3R1YWxMZXR0ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lZGF0YS5mcnlMZXR0ZXJzW2ldID09PSBnYW1lZGF0YS5mcnlMZXR0ZXJzW2pdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXJDb3VudFJlcXVpcmVkID0gbGV0dGVyQ291bnRSZXF1aXJlZCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaXhlZHdvcmQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVkYXRhLmZyeUxldHRlcnNbaV0gPT09IGZpeGVkd29yZFtqXSkge1xyXG4gICAgICAgICAgICAgICAgYWN0dWFsTGV0dGVyQ291bnQgPSBhY3R1YWxMZXR0ZXJDb3VudCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFjdHVhbExldHRlckNvdW50IDwgbGV0dGVyQ291bnRSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICBzZXRXYXJuaW5nKGBZb3UgbmVlZCB0aGUgbGV0dGVyICR7Z2FtZWRhdGEuZnJ5TGV0dGVyc1tpXX0gYXQgbGVhc3QgJHtsZXR0ZXJDb3VudFJlcXVpcmVkfSB0aW1lJHtsZXR0ZXJDb3VudFJlcXVpcmVkID09PSAxID8gJy4nIDogJ3MuJ31gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIElmIHlvdSBnZXQgaGVyZSB0aGV5IGhhdmUgYWxsIHRoZSByZXF1aXJlZCBsZXR0ZXJzLiBTZW5kIHRoZSBndWVzcyB0byB0aGUgc2VydmVyLlxyXG4gICAgc2V0V2FybmluZyhgQ2hlY2tpbmcgeW91ciB3b3JkIC4uLiBzaG91bGRuJ3QgdGFrZSBsb25nLiBJZiBpdCBkb2VzLCBwbGVhc2UgdHJ5IHJlam9pbmluZyB0aGUgZ2FtZS5gKTtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAnbW92ZScsXHJcbiAgICAgICAgcGFzczogZmFsc2UsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgY2xpZW50Um91bmQ6IGdhbWVkYXRhLnJvdW5kLCAvLyBmb3IgY2hlY2tpbmcgcmUtc3VibWlzc2lvbnNcclxuICAgICAgICBjbGllbnRNb3Zlc0xlbmd0aDogZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoLCAvLyBmb3IgY2hlY2tpbmcgcmUtc3VibWlzc2lvbnNcclxuICAgICAgICB3b3JkOiBmaXhlZHdvcmRcclxuICAgIH0pO1xyXG4gICAgc2V0V29yZCgnJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFBhc3Moc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCkge1xyXG4gICAgLy8gSWYgeW91IGdldCBoZXJlIHRoZXkgaGF2ZSBhbGwgdGhlIHJlcXVpcmVkIGxldHRlcnMuIFNlbmQgdGhlIGd1ZXNzIHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICBzZXRXYXJuaW5nKGBTZW5kaW5nIFBBU1MgLi4uIHNob3VsZG4ndCB0YWtlIGxvbmcuYCk7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ21vdmUnLFxyXG4gICAgICAgIHBhc3M6IHRydWUsXHJcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIHdvcmQ6ICcnXHJcbiAgICB9KTtcclxuICAgIHNldFdvcmQoJycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXREcm9wKHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbmlja25hbWUpIHtcclxuICAgIHNldFdhcm5pbmcoYFNlbmRpbmcgRFJPUCAuLi4gc2hvdWxkbid0IHRha2UgbG9uZy5gKTtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAnZHJvcCcsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kUmVwbGF5UmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1lZGF0YSwgbmlja25hbWUpIHtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAncmVwbGF5JyxcclxuICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgZ2FtZTogZ2FtZWRhdGEsXHJcbiAgICAgICAgZ2FtZWlkOiBnYW1lZGF0YS5nYW1laWQsXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=