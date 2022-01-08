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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInNldFdoZXJldG8iLCJjbGllbnQiLCJ0aGlzaXNtZSIsIndzbWVzc2FnZSIsIm5pY2tuYW1lIiwiZ2FtZWlkIiwiY2hhdG1zZ3MiLCJzZXRDaGF0bXNncyIsInVzZVN0YXRlIiwic25hdCIsInNldFNuYXQiLCJ3YXJuaW5nIiwic2V0V2FybmluZyIsImdhbWVkYXRhIiwic2V0R2FtZWRhdGEiLCJnb2FsIiwiZ2FtZWluZGV4Iiwicm91bmQiLCJmcmVlZm9yYWxsIiwibW92ZXNUaGlzUm91bmQiLCJtb3Zlc1ByZXZSb3VuZCIsIndob3NldHVybiIsImZyeUxldHRlcnMiLCJwbGF5ZXJzIiwiaW5kZXgiLCJ3aW5zIiwid29yZCIsInNldFdvcmQiLCJzeW5jc3RhbXAiLCJzZXRTeW5jc3RhbXAiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicHJldkdhbWVkYXRhIiwidXNlUHJldmlvdXMiLCJ1c2VFZmZlY3QiLCJzY3JvbGxUb0JvdHRvbSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzZW5kIiwidHlwZSIsImMiLCJmdW5jIiwiY2xlYXJJbnRlcnZhbCIsIm1zZyIsInByb2Nlc3NHYW1lTWVzc2FnZSIsIm15YXVkaW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwYXNzIiwicGxheSIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsIm5ld21zZ3MiLCJtc2dzIiwiZmlsdGVyIiwiZSIsInBsYXllciIsImZyb20iLCJnYW1lIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImhhbmRsZUtleURvd24iLCJldmVudCIsIm1lVG9FbnRlcldvcmQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdFBsYXllcldvcmQiLCJpbmRleE9mIiwiZHJvcHBlciIsInAiLCJkcm9wcGVkIiwiR2FtZVNlY3Rpb24iLCJtYXAiLCJwbCIsInBvaW50cyIsInNob3dNb3ZlTGlzdCIsImZyZWVmb3JhbGxNb3ZlcyIsInNodWZmbGVTaXplIiwiYmVmb3JlU2h1ZmZsZSIsImFmdGVyU2h1ZmZsZSIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdXNoIiwic3BsaWNlIiwibmV3R2FtZWRhdGEiLCJzdHJpbmdpZnkiLCJzb3J0d29yayIsInNvcnQiLCJmbCIsImkiLCJtb3ZlTGV0dGVyIiwic2hpZnRlZExldHRlcnMiLCJlbGVtZW50IiwibnVtUG9zc2libGVBbnN3ZXJzIiwiZ2V0UGxheWVyV29yZCIsImdhbWVPdmVyIiwic2VuZFJlcGxheVJlcXVlc3QiLCJzdWJtaXREcm9wIiwibW92ZUxpc3RLZXkiLCJtb3ZlQXJyYXkiLCJtb3ZlIiwidmFsaWQiLCJlYXJuZWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwidHJpbSIsIm1hdGNoIiwic3VibWl0UGFzcyIsImZpeGVkd29yZCIsInB3Iiwic3Vic3RyaW5nIiwibGV0dGVyQ291bnRSZXF1aXJlZCIsImFjdHVhbExldHRlckNvdW50IiwiaiIsImNsaWVudFJvdW5kIiwiY2xpZW50TW92ZXNMZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUNDLFlBQUQ7QUFBYUMsUUFBYjtBQUFxQkMsVUFBckI7QUFBK0JDLFdBQS9CO0FBQTBDQyxVQUExQztBQUFvREM7QUFBcEQsQ0FBRCxLQUFpRTtBQUFBOztBQUMxRSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkYsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE9BQUQ7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QUFGLENBQVY7QUFDQVgsUUFBTSxDQUFDc0MsSUFBUCxDQUFZO0FBQ1JDLFFBQUksRUFBRUMsK0RBREU7QUFFUkMsUUFBSSxFQUFFLE1BRkU7QUFHUnhDLFlBQVEsRUFBRUEsUUFIRjtBQUlSRyxVQUFNLEVBQUVBLE1BSkE7QUFLUkQsWUFBUSxFQUFFQSxRQUxGO0FBTVIyRCxhQUFTLEVBQUVDLElBQUksQ0FBQ0MsR0FBTDtBQU5ILEdBQVo7QUFRSDs7QUFFRCxTQUFTc0MsaUJBQVQsQ0FBMkJ0RyxNQUEzQixFQUFtQ0MsUUFBbkMsRUFBNkNXLFFBQTdDLEVBQXVEVCxRQUF2RCxFQUFpRTtBQUM3REgsUUFBTSxDQUFDc0MsSUFBUCxDQUFZO0FBQ1JDLFFBQUksRUFBRUMsK0RBREU7QUFFUkMsUUFBSSxFQUFFLFFBRkU7QUFHUnhDLFlBQVEsRUFBRUEsUUFIRjtBQUlSNEQsUUFBSSxFQUFFakQsUUFKRTtBQUtSUixVQUFNLEVBQUVRLFFBQVEsQ0FBQ1IsTUFMVDtBQU1SRCxZQUFRLEVBQUVBLFFBTkY7QUFPUjJELGFBQVMsRUFBRUMsSUFBSSxDQUFDQyxHQUFMO0FBUEgsR0FBWjtBQVNIOztBQUVELCtEQUFlbEUsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45M2Q1YTA3ZTk3ZjViMDI5NDM1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCcm93c2VyVmlldywgTW9iaWxlT25seVZpZXd9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnO1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9meWIvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdXNlUHJldmlvdXMgfSBmcm9tIFwiLi4vLi4vbGliL3VzZVByZXZpb3VzXCI7XHJcbmltcG9ydCBUaGluQ2hhdCBmcm9tIFwiLi90aGluQ2hhdFNlY3Rpb25cIjtcclxuaW1wb3J0IENoYXQgZnJvbSBcIi4uL3BiL2NoYXRTZWN0aW9uXCI7XHJcbmltcG9ydCB7IHNjcm9sbFRvQm90dG9tIH0gZnJvbSBcIi4uLy4uL2xpYi9zY3JvbGxUb0JvdHRvbVwiO1xyXG5cclxuY29uc3QgR2FtZSA9ICh7c2V0V2hlcmV0bywgY2xpZW50LCB0aGlzaXNtZSwgd3NtZXNzYWdlLCBuaWNrbmFtZSwgZ2FtZWlkfSkgPT4ge1xyXG4gICAgY29uc3QgW2NoYXRtc2dzLCBzZXRDaGF0bXNnc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc25hdCwgc2V0U25hdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbd2FybmluZywgc2V0V2FybmluZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ2FtZWRhdGEsIHNldEdhbWVkYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBnb2FsOiA5OVxyXG4gICAgICAgICwgZ2FtZWluZGV4OiAwXHJcbiAgICAgICAgLCByb3VuZDogMFxyXG4gICAgICAgICwgZnJlZWZvcmFsbDogZmFsc2VcclxuICAgICAgICAsIG1vdmVzVGhpc1JvdW5kOiBbXVxyXG4gICAgICAgICwgbW92ZXNQcmV2Um91bmQ6IFtdXHJcbiAgICAgICAgLCB3aG9zZXR1cm46IFtdXHJcbiAgICAgICAgLCBmcnlMZXR0ZXJzOiBbXVxyXG4gICAgICAgICwgcGxheWVyczogW3tpbmRleDogMCwgbmlja25hbWU6ICdMb2FkaW5nLi4uJywgd2luczogMH1dfSk7XHJcbiAgICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZSgnJyk7IC8vIG15IHdvcmQgdG8gc3VibWl0XHJcbiAgICBjb25zdCBbc3luY3N0YW1wLCBzZXRTeW5jc3RhbXBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgICBjb25zdCBwcmV2R2FtZWRhdGEgPSB1c2VQcmV2aW91cyhnYW1lZGF0YSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVDaGF0XCIpO1xyXG4gICAgICB9LFtjaGF0bXNnc10pXHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEud2hvc2V0dXJuLmxlbmd0aCA+IDAgJiYgZ2FtZWRhdGEucGxheWVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuYzogJ2ludGVydmFsJyxcclxuICAgICAgICAgICAgICAgICAgICBzeW5jc3RhbXA6IHN5bmNzdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGMuUElOR19JTlRFUlZBTCk7IC8vIHRoaXMgbWFueSBtaWxsaXNlY29uZHMgYmV0d2VlbiBhYm92ZSBjb2RlIGJsb2NrIGV4ZWN1dGlvbnNcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NHYW1lTWVzc2FnZShtc2cpO1xyXG4gICAgfSxbd3NtZXNzYWdlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBUaGlzIHNvdW5kIHdpbGwgbm90IHBsYXkgb24gc29tZSBtb2JpbGVzLiBTb21ldGhpbmcgYWJvdXQgbmVlZGluZyBhIHVzZXIgaW50ZXJhY3Rpb24gKHByb3RlY3RpbmcgY2VsbCBkYXRhIHVzYWdlKS5cclxuICAgICAgICBpZiAocHJldkdhbWVkYXRhXHJcbiAgICAgICAgICAgICYmIGdhbWVkYXRhLmdhbWVpbmRleCA9PT0gcHJldkdhbWVkYXRhLmdhbWVpbmRleFxyXG4gICAgICAgICAgICAmJiBnYW1lZGF0YS5yb3VuZCA9PT0gcHJldkdhbWVkYXRhLnJvdW5kXHJcbiAgICAgICAgICAgICYmIGdhbWVkYXRhLmZyZWVmb3JhbGwgJiYgIXByZXZHYW1lZGF0YS5mcmVlZm9yYWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBteWF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICAgICAgICAgICAgLy8gRGVjaWRlIGJldHdlZW4gT29wcyAocGhvbmV5IHBsYXllZCkgYW5kIFBhc3MgKHBsYXllciBwYXNzZWQpXHJcbiAgICAgICAgICAgIG15YXVkaW8uc3JjID0gZ2FtZWRhdGEubW92ZXNUaGlzUm91bmRbZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoLTFdLnBhc3MgPyBcImh0dHBzOi8vdGlsZXJ1bm5lci5naXRodWIuaW8vUGFzcy5tNGFcIiA6IFwiaHR0cHM6Ly90aWxlcnVubmVyLmdpdGh1Yi5pby9Pb3BzLm00YVwiO1xyXG4gICAgICAgICAgICBteWF1ZGlvLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIFtnYW1lZGF0YV0pOyAvLyBQbGF5IGEgc291bmQgd2hlbiBhIHJlc2N1ZSBpcyBtYWRlXHJcblxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0dhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09PSBjLkNMSUVOVF9UWVBFX0ZZQikge1xyXG4gICAgICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gYy5TMkNfRlVOQ19DSEFUREFUQSkge1xyXG4gICAgICAgICAgICAgICAgLy8gSXQncyBnb29meSwgYnV0IEkgZGVsZXRlIGNoYXQgd2hlbiBnYW1lIGVuZHMsIHRoZW4gc29tZW9uZSBjYW4gc3RhcnQgYSBuZXcgZ2FtZSB3aXRoIHRoZSBzYW1lIGdhbWVpZFxyXG4gICAgICAgICAgICAgICAgLy8gU28gcmVtb3ZlIG1lc3NhZ2VzIG5vdCBmcm9tIGEgcGxheWVyIGluIHRoaXMgZ2FtZS4gSSBtaWdodCBoYXZlIHRvIG1ha2UgYSBjaGF0IGlkIHRvIHByb3Blcmx5IGhhbmRsZVxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld21zZ3MgPSBtZXNzYWdlRGF0YS5tc2dzLmZpbHRlcihmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdhbWVkYXRhLnBsYXllcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IGdhbWVkYXRhLnBsYXllcnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLm5pY2tuYW1lID09PSBlLmZyb20pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRDaGF0bXNncyhuZXdtc2dzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBjLlMyQ19GVU5DX0dBTUVEQVRBKSB7XHJcbiAgICAgICAgICAgICAgICAvKiBTRVJWRVIgU0VOVCBHQU1FIERBVEFcclxuICAgICAgICAgICAgICAgIEZvciBhIHJlZ3VsYXIgdXBkYXRlIGR1ZSB0byBwbGF5ZXIgYWN0aXZpdHksIHRoaXMgY2xpZW50IG5lZWRzIHRoZSB1cGRhdGUuXHJcblxyXG4gICAgICAgICAgICAgICAgRm9yIGRyb3BwZWQgY29ubmVjdGlvbnMgd2hpY2ggbWFkZSB0aGlzIGNsaWVudCBzZW5kIGEgcmVqb2luIHRvIHVwZGF0ZSBzZXJ2ZXInc1xyXG4gICAgICAgICAgICAgICAgICAgaW5mbyBmb3IgdGhpcyBjbGllbnQsIHdoaWNoIG1ha2VzIHRoZSBzZXJ2ZXIgc2VuZHMgZ2FtZSBpbmZvIHRvIHRoaXMgY2xpZW50LFxyXG4gICAgICAgICAgICAgICAgICAgdGhpcyBjbGllbnQgaXMgYWxyZWFkeSB1cCB0byBkYXRlIGFuZCBkb2VzIG5vdCBuZWVkIHRoZSB1cGRhdGUuIFdlIGRvIG5vdCB0YWtlXHJcbiAgICAgICAgICAgICAgICAgICB0aGUgdXBkYXRlIHNvIGFzIG5vdCB0byB1cHNldCB0aGUgZnJ5IGxldHRlciByZWFycmFuZ2VtZW50cyB0aGlzIGNsaWVudCBtYXkgaGF2ZVxyXG4gICAgICAgICAgICAgICAgICAgbWFkZS5cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZURhdGEuZ2FtZS5nYW1laW5kZXggIT09IGdhbWVkYXRhLmdhbWVpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG1lc3NhZ2VEYXRhLmdhbWUucm91bmQgIT09IGdhbWVkYXRhLnJvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgbWVzc2FnZURhdGEuZ29hbCAhPT0gZ2FtZWRhdGEuZ29hbFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG1lc3NhZ2VEYXRhLnBsYXllcnMubGVuZ3RoICE9PSBnYW1lZGF0YS5wbGF5ZXJzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG1lc3NhZ2VEYXRhLmdhbWUubW92ZXNUaGlzUm91bmQubGVuZ3RoICE9PSBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U25hdChtZXNzYWdlRGF0YS5zbmF0KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobWVzc2FnZURhdGEuZ2FtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3luY3N0YW1wKG1lc3NhZ2VEYXRhLmdhbWUuc3luY3N0YW1wKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRXYXJuaW5nKCcnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBjLlMyQ19GVU5DX0dBTUVDUkVBVEVEKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIHRvIGRvLCB0aGlzIGlzIHJlYWxseSBmb3IgdGhlIGxvYmJ5IGR3ZWxsZXJzXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJIHRoaW5rIHRoaXMgaGFwcGVucyB3aGVuIGEgd2ViIHNvY2tldCBjb25uZWN0aW9uIGRyb3BzIGFuZCB0aGUgbmV3IG9uZSBsb3NlcyB0aGUgZ2FtZWlkIG9uIHRoZSBzZXJ2ZXIgd3NzLmNsaWVudHNcclxuICAgICAgICAgICAgICAgIC8vIFNvIHNlbmQgYSByZWpvaW4gcmVxdWVzdCB0byBnZXQgdGhlIHNlcnZlciBiYWNrIG9uIHRyYWNrXHJcbiAgICAgICAgICAgICAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuYzogJ3Jlam9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoIW1lVG9FbnRlcldvcmQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzdWJtaXRQbGF5ZXJXb3JkKHdvcmQsIGdhbWVkYXRhLCBzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSwgc2V0V29yZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVUb0VudGVyV29yZCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKGdhbWVkYXRhLndob3NldHVybi5pbmRleE9mKG5pY2tuYW1lKSA+IC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkcm9wcGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBnYW1lZGF0YS5wbGF5ZXJzLmZpbHRlcihwID0+IHtyZXR1cm4gcC5uaWNrbmFtZSA9PT0gbmlja25hbWUgJiYgcC5kcm9wcGVkO30pLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgR2FtZVNlY3Rpb24gPSA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJTdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICB7Z2FtZWlkfToge25pY2tuYW1lfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5GaXJzdCB0byB7Z2FtZWRhdGEuZ29hbH0gd2lucyE8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5wbGF5ZXJzLm1hcCgocGwsaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgUGxheWVyLiR7aW5kZXh9LiR7cGwubmlja25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcm93c2VyVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwuZHJvcHBlZCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPjwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbC53aW5zID4gMCAmJiA8c3Bhbj4gKFdvbiB7cGwud2luc30pPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdHJpZ2h0XCI+Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9iaWxlT25seVZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbC53aW5zID4gMCAmJiA8c3Bhbj4gKHtwbC53aW5zfSk8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0cmlnaHRcIj46PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2JpbGVPbmx5Vmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLnBvaW50cyA8IDEwID8gPHNwYW4+Jm5ic3A7PC9zcGFuPiA6ICcnfXtwbC5wb2ludHN9Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwucG9pbnRzID49IGdhbWVkYXRhLmdvYWwgJiYgPHNwYW4gY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPiBXaW5uZXIhJm5ic3A7PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNQcmV2Um91bmQgJiYgZ2FtZWRhdGEubW92ZXNQcmV2Um91bmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+UHJldmlvdXMgcm91bmQ6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPn1cclxuICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd01vdmVMaXN0KCdtb3Zlc1ByZXZSb3VuZCcsIGdhbWVkYXRhLm1vdmVzUHJldlJvdW5kKX1cclxuICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZCAmJiBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5UaGlzIHJvdW5kOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj59XHJcbiAgICAgICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNUaGlzUm91bmQgJiYgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dNb3ZlTGlzdCgnbW92ZXNUaGlzUm91bmQnLCBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZCl9XHJcbiAgICAgICAgICAgICAgICB7IWdhbWVkYXRhLmZyZWVmb3JhbGwgJiYgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzICYmIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3Zlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5GcmVlLWZvci1hbGw6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPn1cclxuICAgICAgICAgICAgICAgIHshZ2FtZWRhdGEuZnJlZWZvcmFsbCAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMgJiYgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICBzaG93TW92ZUxpc3QoJ2ZmYU1vdmVzJywgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIHtnYW1lZGF0YS53aG9zZXR1cm4ubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPkZyeSBMZXR0ZXJzOlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b24gZnJ5TGV0dGVyQWN0aW9uQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2h1ZmZsZVNpemUgPSBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJlZm9yZVNodWZmbGUgPSBbLi4uZ2FtZWRhdGEuZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZnRlclNodWZmbGUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGFmdGVyU2h1ZmZsZS5sZW5ndGggPCBzaHVmZmxlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBiZWZvcmVTaHVmZmxlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlclNodWZmbGUucHVzaChiZWZvcmVTaHVmZmxlW3JhbmRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNodWZmbGUuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3R2FtZWRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdhbWVkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0dhbWVkYXRhLmZyeUxldHRlcnMgPSBbLi4uYWZ0ZXJTaHVmZmxlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobmV3R2FtZWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZnJ5TGV0dGVyQWN0aW9uQnV0dG9uSWNvblwiPmNhY2hlZDwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uIGZyeUxldHRlckFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNvcnR3b3JrID0gWy4uLmdhbWVkYXRhLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0d29yay5zb3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdHYW1lZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2FtZWRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3R2FtZWRhdGEuZnJ5TGV0dGVycyA9IFsuLi5zb3J0d29ya107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG5ld0dhbWVkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGZyeUxldHRlckFjdGlvbkJ1dHRvbkljb25cIj5zb3J0X2J5X2FscGhhPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyeUxldHRlckRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnYW1lZGF0YS5mcnlMZXR0ZXJzLm1hcCgoZmwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgRnJ5TGV0dGVyJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2kgPT09IHNlbGVjdGVkID8gXCJmeWJGcnlMZXR0ZXIgU2VsZWN0ZWRcIiA6IFwiZnliRnJ5TGV0dGVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVMZXR0ZXIgPSBnYW1lZGF0YS5mcnlMZXR0ZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlmdGVkTGV0dGVycyA9IFsuLi5nYW1lZGF0YS5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChtb3ZlTGV0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3R2FtZWRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdhbWVkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3R2FtZWRhdGEuZnJ5TGV0dGVycyA9IFsuLi5zaGlmdGVkTGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWRhdGEobmV3R2FtZWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7IC8vIHVuc2VsZWN0IHdoZW4gY2xpY2tlZCBhIHNlY29uZCB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBzZWxlY3RlZCB0aWxlIHRvIHRoaXMgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaWZ0ZWRMZXR0ZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlTGV0dGVyID0gZ2FtZWRhdGEuZnJ5TGV0dGVyc1tzZWxlY3RlZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdhbWVkYXRhLmZyeUxldHRlcnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChtb3ZlTGV0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdHYW1lZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2FtZWRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3R2FtZWRhdGEuZnJ5TGV0dGVycyA9IFsuLi5zaGlmdGVkTGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG5ld0dhbWVkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+e2ZsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICgjQW5zd2Vyczoge2dhbWVkYXRhLm51bVBvc3NpYmxlQW5zd2Vyc30pXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIHttZVRvRW50ZXJXb3JkKCkgJiZcclxuICAgICAgICAgICAgZ2V0UGxheWVyV29yZChoYW5kbGVLZXlEb3duLCB3b3JkLCBzZXRXb3JkLCBnYW1lZGF0YSwgc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgbmlja25hbWUpfVxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtnYW1lZGF0YS5nYW1lT3ZlciAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEdhbWUgT3ZlciZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIHshZHJvcHBlcigpICYmIGdhbWVkYXRhLnBsYXllcnMuZmlsdGVyKHAgPT4ge3JldHVybiAhcC5kcm9wcGVkO30pLmxlbmd0aCA+IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZW5kUmVwbGF5UmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1lZGF0YSwgbmlja25hbWUpOyB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUExBWSBBR0FJTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj57c25hdH08L2Rpdj5cclxuICAgICAgICAgICAge3dhcm5pbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaCB0cldhcm5pbmdcIj57d2FybmluZ308L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgRnJ5IFlvdXIgQnJhaW5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7R2FtZVNlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGhpbkNoYXQgZ2FtZWlkPXtnYW1laWR9IGNsaWVudD17Y2xpZW50fSBuaWNrbmFtZT17bmlja25hbWV9IG1zZ3M9e2NoYXRtc2dzfSBzZXRNc2dzPXtzZXRDaGF0bXNnc30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtHYW1lU2VjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0IGdhbWVpZD17Z2FtZWlkfSBjbGllbnQ9e2NsaWVudH0gbmlja25hbWU9e25pY2tuYW1lfSBtc2dzPXtjaGF0bXNnc30gc2V0TXNncz17c2V0Q2hhdG1zZ3N9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgICAgICAgICAgeyFkcm9wcGVyKCkgJiYgIWdhbWVkYXRhLmdhbWVPdmVyICYmXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIga2V5PVwiZHJvcEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdERyb3Aoc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWRhdGEuZ2FtZWlkLCBuaWNrbmFtZSl9fT5cclxuICAgICAgICAgICAgICAgICAgICBRVUlUXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd01vdmVMaXN0KG1vdmVMaXN0S2V5LCBtb3ZlQXJyYXkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgbW92ZUFycmF5Lm1hcCgobW92ZSkgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgJHttb3ZlTGlzdEtleX0ke21vdmUubmlja25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e21vdmUubmlja25hbWV9PHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRyaWdodFwiPjo8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIHttb3ZlLnBhc3MgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyRGFuZ2VyXCI+IHBhc3NlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHttb3ZlLnZhbGlkID8gJycgOiAndHJEYW5nZXInfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92ZS53b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92ZS5lYXJuZWQgJiYgPHNwYW4+ICh7bW92ZS5lYXJuZWR9IHB0cyk8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICA8TW9iaWxlT25seVZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHttb3ZlLnZhbGlkID8gJycgOiAndHJEYW5nZXInfSAke21vdmUud29yZC5sZW5ndGggPiAxMCAmJiBtb3ZlLmVhcm5lZCA/ICdsb25nJyA6IG1vdmUud29yZC5sZW5ndGggPiAxMyA/ICdsb25nJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92ZS53b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92ZS5lYXJuZWQgJiYgPHNwYW4+ICh7bW92ZS5lYXJuZWR9IHB0cyk8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvTW9iaWxlT25seVZpZXc+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBsYXllcldvcmQoaGFuZGxlS2V5RG93biwgd29yZCwgc2V0V29yZCwgZ2FtZWRhdGEsIHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lKSB7XHJcbiAgICByZXR1cm4gPGRpdiBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5FbnRlciBXb3JkOjwvZGl2PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0V29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHt3b3JkLnRvVXBwZXJDYXNlKCkudHJpbSgpLm1hdGNoKFwiXlthLXpBLVpdKiRcIikgJiYgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIga2V5PVwic3VibWl0V29yZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGxheWVyV29yZCh3b3JkLCBnYW1lZGF0YSwgc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgbmlja25hbWUsIHNldFdvcmQpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU1VCTUlUXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIGtleT1cInBhc3NCdXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3VibWl0UGFzcyhzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBnYW1lZGF0YS5nYW1laWQsIG5pY2tuYW1lLCBzZXRXb3JkKX19PlxyXG4gICAgICAgICAgICAgICAgUEFTU1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFBsYXllcldvcmQod29yZCwgZ2FtZWRhdGEsIHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lLCBzZXRXb3JkKSB7XHJcbiAgICBsZXQgZml4ZWR3b3JkID0gd29yZC50b1VwcGVyQ2FzZSgpLnRyaW0oKTtcclxuICAgIC8vIENoZWNrIGlmIHRoZSB3b3JkIGlzIGFsbG93ZWQgYmFzZWQgb24gcHJldmlvdXMgd29yZHMgdGhpcyByb3VuZFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lZGF0YS5tb3Zlc1RoaXNSb3VuZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHB3ID0gZ2FtZWRhdGEubW92ZXNUaGlzUm91bmRbaV0ud29yZDtcclxuICAgICAgICBpZiAocHcgPT09IGZpeGVkd29yZCkge1xyXG4gICAgICAgICAgICBzZXRXYXJuaW5nKGBZb3UgY2Fubm90IHJldXNlIGEgcHJldmlvdXMgd29yZCBmcm9tIHRoaXMgcm91bmQgKCR7cHd9KS5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHcgKyAnUycgPT09IGZpeGVkd29yZCAmJiBwdy5zdWJzdHJpbmcocHcubGVuZ3RoLTEpICE9PSAnUycgJiYgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmRbaV0udmFsaWQpIHtcclxuICAgICAgICAgICAgc2V0V2FybmluZyhgWW91IGNhbm5vdCBhZGQgUyB0byBhIHByZXZpb3VzIHZhbGlkIHdvcmQgKCR7cHd9KSBmcm9tIHRoaXMgcm91bmQgdW5sZXNzIGl0IGVuZHMgd2l0aCBTLmApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGhhdmUgYWxsIHRoZSBmcnkgbGV0dGVyc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxldHRlckNvdW50UmVxdWlyZWQgPSAwO1xyXG4gICAgICAgIGxldCBhY3R1YWxMZXR0ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lZGF0YS5mcnlMZXR0ZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lZGF0YS5mcnlMZXR0ZXJzW2ldID09PSBnYW1lZGF0YS5mcnlMZXR0ZXJzW2pdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXJDb3VudFJlcXVpcmVkID0gbGV0dGVyQ291bnRSZXF1aXJlZCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaXhlZHdvcmQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVkYXRhLmZyeUxldHRlcnNbaV0gPT09IGZpeGVkd29yZFtqXSkge1xyXG4gICAgICAgICAgICAgICAgYWN0dWFsTGV0dGVyQ291bnQgPSBhY3R1YWxMZXR0ZXJDb3VudCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFjdHVhbExldHRlckNvdW50IDwgbGV0dGVyQ291bnRSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICBzZXRXYXJuaW5nKGBZb3UgbmVlZCB0aGUgbGV0dGVyICR7Z2FtZWRhdGEuZnJ5TGV0dGVyc1tpXX0gYXQgbGVhc3QgJHtsZXR0ZXJDb3VudFJlcXVpcmVkfSB0aW1lJHtsZXR0ZXJDb3VudFJlcXVpcmVkID09PSAxID8gJy4nIDogJ3MuJ31gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIElmIHlvdSBnZXQgaGVyZSB0aGV5IGhhdmUgYWxsIHRoZSByZXF1aXJlZCBsZXR0ZXJzLiBTZW5kIHRoZSBndWVzcyB0byB0aGUgc2VydmVyLlxyXG4gICAgc2V0V2FybmluZyhgQ2hlY2tpbmcgeW91ciB3b3JkIC4uLiBzaG91bGRuJ3QgdGFrZSBsb25nLiBJZiBpdCBkb2VzLCBwbGVhc2UgdHJ5IHJlam9pbmluZyB0aGUgZ2FtZS5gKTtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAnbW92ZScsXHJcbiAgICAgICAgcGFzczogZmFsc2UsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgY2xpZW50Um91bmQ6IGdhbWVkYXRhLnJvdW5kLCAvLyBmb3IgY2hlY2tpbmcgcmUtc3VibWlzc2lvbnNcclxuICAgICAgICBjbGllbnRNb3Zlc0xlbmd0aDogZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoLCAvLyBmb3IgY2hlY2tpbmcgcmUtc3VibWlzc2lvbnNcclxuICAgICAgICB3b3JkOiBmaXhlZHdvcmRcclxuICAgIH0pO1xyXG4gICAgc2V0V29yZCgnJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFBhc3Moc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCkge1xyXG4gICAgLy8gSWYgeW91IGdldCBoZXJlIHRoZXkgaGF2ZSBhbGwgdGhlIHJlcXVpcmVkIGxldHRlcnMuIFNlbmQgdGhlIGd1ZXNzIHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICBzZXRXYXJuaW5nKGBTZW5kaW5nIFBBU1MgLi4uIHNob3VsZG4ndCB0YWtlIGxvbmcuYCk7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ21vdmUnLFxyXG4gICAgICAgIHBhc3M6IHRydWUsXHJcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIHdvcmQ6ICcnXHJcbiAgICB9KTtcclxuICAgIHNldFdvcmQoJycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXREcm9wKHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbmlja25hbWUpIHtcclxuICAgIHNldFdhcm5pbmcoYFNlbmRpbmcgRFJPUCAuLi4gc2hvdWxkbid0IHRha2UgbG9uZy5gKTtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAnZHJvcCcsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kUmVwbGF5UmVxdWVzdChjbGllbnQsIHRoaXNpc21lLCBnYW1lZGF0YSwgbmlja25hbWUpIHtcclxuICAgIGNsaWVudC5zZW5kKHtcclxuICAgICAgICB0eXBlOiBjLkNMSUVOVF9UWVBFX0ZZQixcclxuICAgICAgICBmdW5jOiAncmVwbGF5JyxcclxuICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgZ2FtZTogZ2FtZWRhdGEsXHJcbiAgICAgICAgZ2FtZWlkOiBnYW1lZGF0YS5nYW1laWQsXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=