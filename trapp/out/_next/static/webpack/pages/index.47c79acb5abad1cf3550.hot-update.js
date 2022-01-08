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
        children: ["Game Over\xA0", !dropper() && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
    }, undefined), !dropper() && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2dhbWUuanMiXSwibmFtZXMiOlsiR2FtZSIsInNldFdoZXJldG8iLCJjbGllbnQiLCJ0aGlzaXNtZSIsIndzbWVzc2FnZSIsIm5pY2tuYW1lIiwiZ2FtZWlkIiwiY2hhdG1zZ3MiLCJzZXRDaGF0bXNncyIsInVzZVN0YXRlIiwic25hdCIsInNldFNuYXQiLCJ3YXJuaW5nIiwic2V0V2FybmluZyIsImdhbWVkYXRhIiwic2V0R2FtZWRhdGEiLCJnb2FsIiwiZ2FtZWluZGV4Iiwicm91bmQiLCJmcmVlZm9yYWxsIiwibW92ZXNUaGlzUm91bmQiLCJtb3Zlc1ByZXZSb3VuZCIsIndob3NldHVybiIsImZyeUxldHRlcnMiLCJwbGF5ZXJzIiwiaW5kZXgiLCJ3aW5zIiwid29yZCIsInNldFdvcmQiLCJzeW5jc3RhbXAiLCJzZXRTeW5jc3RhbXAiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicHJldkdhbWVkYXRhIiwidXNlUHJldmlvdXMiLCJ1c2VFZmZlY3QiLCJzY3JvbGxUb0JvdHRvbSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzZW5kIiwidHlwZSIsImMiLCJmdW5jIiwiY2xlYXJJbnRlcnZhbCIsIm1zZyIsInByb2Nlc3NHYW1lTWVzc2FnZSIsIm15YXVkaW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwYXNzIiwicGxheSIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsIm5ld21zZ3MiLCJtc2dzIiwiZmlsdGVyIiwiZSIsInBsYXllciIsImZyb20iLCJnYW1lIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImhhbmRsZUtleURvd24iLCJldmVudCIsIm1lVG9FbnRlcldvcmQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdFBsYXllcldvcmQiLCJpbmRleE9mIiwiZHJvcHBlciIsInAiLCJkcm9wcGVkIiwiR2FtZVNlY3Rpb24iLCJtYXAiLCJwbCIsInBvaW50cyIsInNob3dNb3ZlTGlzdCIsImZyZWVmb3JhbGxNb3ZlcyIsInNodWZmbGVTaXplIiwiYmVmb3JlU2h1ZmZsZSIsImFmdGVyU2h1ZmZsZSIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdXNoIiwic3BsaWNlIiwibmV3R2FtZWRhdGEiLCJzdHJpbmdpZnkiLCJzb3J0d29yayIsInNvcnQiLCJmbCIsImkiLCJtb3ZlTGV0dGVyIiwic2hpZnRlZExldHRlcnMiLCJlbGVtZW50IiwibnVtUG9zc2libGVBbnN3ZXJzIiwiZ2V0UGxheWVyV29yZCIsImdhbWVPdmVyIiwic2VuZFJlcGxheVJlcXVlc3QiLCJzdWJtaXREcm9wIiwibW92ZUxpc3RLZXkiLCJtb3ZlQXJyYXkiLCJtb3ZlIiwidmFsaWQiLCJlYXJuZWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwidHJpbSIsIm1hdGNoIiwic3VibWl0UGFzcyIsImZpeGVkd29yZCIsInB3Iiwic3Vic3RyaW5nIiwibGV0dGVyQ291bnRSZXF1aXJlZCIsImFjdHVhbExldHRlckNvdW50IiwiaiIsImNsaWVudFJvdW5kIiwiY2xpZW50TW92ZXNMZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUNDLFlBQUQ7QUFBYUMsUUFBYjtBQUFxQkMsVUFBckI7QUFBK0JDLFdBQS9CO0FBQTBDQyxVQUExQztBQUFvREM7QUFBcEQsQ0FBRCxLQUFpRTtBQUFBOztBQUMxRSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkYsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE9BQUQ7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YUFBUyxFQUFFQyxJQUFJLENBQUNDLEdBQUw7QUFOSCxHQUFaO0FBUUg7O0FBRUQsU0FBU3NDLGlCQUFULENBQTJCdEcsTUFBM0IsRUFBbUNDLFFBQW5DLEVBQTZDVyxRQUE3QyxFQUF1RFQsUUFBdkQsRUFBaUU7QUFDN0RILFFBQU0sQ0FBQ3NDLElBQVAsQ0FBWTtBQUNSQyxRQUFJLEVBQUVDLCtEQURFO0FBRVJDLFFBQUksRUFBRSxRQUZFO0FBR1J4QyxZQUFRLEVBQUVBLFFBSEY7QUFJUjRELFFBQUksRUFBRWpELFFBSkU7QUFLUlIsVUFBTSxFQUFFUSxRQUFRLENBQUNSLE1BTFQ7QUFNUkQsWUFBUSxFQUFFQSxRQU5GO0FBT1IyRCxhQUFTLEVBQUVDLElBQUksQ0FBQ0MsR0FBTDtBQVBILEdBQVo7QUFTSDs7QUFFRCwrREFBZWxFLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDdjNzlhY2I1YWJhZDFjZjM1NTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnJvd3NlclZpZXcsIE1vYmlsZU9ubHlWaWV3fSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvZnliL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHVzZVByZXZpb3VzIH0gZnJvbSBcIi4uLy4uL2xpYi91c2VQcmV2aW91c1wiO1xyXG5pbXBvcnQgVGhpbkNoYXQgZnJvbSBcIi4vdGhpbkNoYXRTZWN0aW9uXCI7XHJcbmltcG9ydCBDaGF0IGZyb20gXCIuLi9wYi9jaGF0U2VjdGlvblwiO1xyXG5pbXBvcnQgeyBzY3JvbGxUb0JvdHRvbSB9IGZyb20gXCIuLi8uLi9saWIvc2Nyb2xsVG9Cb3R0b21cIjtcclxuXHJcbmNvbnN0IEdhbWUgPSAoe3NldFdoZXJldG8sIGNsaWVudCwgdGhpc2lzbWUsIHdzbWVzc2FnZSwgbmlja25hbWUsIGdhbWVpZH0pID0+IHtcclxuICAgIGNvbnN0IFtjaGF0bXNncywgc2V0Q2hhdG1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NuYXQsIHNldFNuYXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3dhcm5pbmcsIHNldFdhcm5pbmddID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dhbWVkYXRhLCBzZXRHYW1lZGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZ29hbDogOTlcclxuICAgICAgICAsIGdhbWVpbmRleDogMFxyXG4gICAgICAgICwgcm91bmQ6IDBcclxuICAgICAgICAsIGZyZWVmb3JhbGw6IGZhbHNlXHJcbiAgICAgICAgLCBtb3Zlc1RoaXNSb3VuZDogW11cclxuICAgICAgICAsIG1vdmVzUHJldlJvdW5kOiBbXVxyXG4gICAgICAgICwgd2hvc2V0dXJuOiBbXVxyXG4gICAgICAgICwgZnJ5TGV0dGVyczogW11cclxuICAgICAgICAsIHBsYXllcnM6IFt7aW5kZXg6IDAsIG5pY2tuYW1lOiAnTG9hZGluZy4uLicsIHdpbnM6IDB9XX0pO1xyXG4gICAgY29uc3QgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoJycpOyAvLyBteSB3b3JkIHRvIHN1Ym1pdFxyXG4gICAgY29uc3QgW3N5bmNzdGFtcCwgc2V0U3luY3N0YW1wXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgcHJldkdhbWVkYXRhID0gdXNlUHJldmlvdXMoZ2FtZWRhdGEpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2Nyb2xsVG9Cb3R0b20oXCJTY3JvbGxhYmxlQ2hhdFwiKTtcclxuICAgICAgfSxbY2hhdG1zZ3NdKVxyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGdhbWVkYXRhLndob3NldHVybi5sZW5ndGggPiAwICYmIGdhbWVkYXRhLnBsYXllcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmM6ICdpbnRlcnZhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3luY3N0YW1wOiBzeW5jc3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBnYW1laWQ6IGdhbWVkYXRhLmdhbWVpZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBjLlBJTkdfSU5URVJWQUwpOyAvLyB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzIGJldHdlZW4gYWJvdmUgY29kZSBibG9jayBleGVjdXRpb25zXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzR2FtZU1lc3NhZ2UobXNnKTtcclxuICAgIH0sW3dzbWVzc2FnZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gVGhpcyBzb3VuZCB3aWxsIG5vdCBwbGF5IG9uIHNvbWUgbW9iaWxlcy4gU29tZXRoaW5nIGFib3V0IG5lZWRpbmcgYSB1c2VyIGludGVyYWN0aW9uIChwcm90ZWN0aW5nIGNlbGwgZGF0YSB1c2FnZSkuXHJcbiAgICAgICAgaWYgKHByZXZHYW1lZGF0YVxyXG4gICAgICAgICAgICAmJiBnYW1lZGF0YS5nYW1laW5kZXggPT09IHByZXZHYW1lZGF0YS5nYW1laW5kZXhcclxuICAgICAgICAgICAgJiYgZ2FtZWRhdGEucm91bmQgPT09IHByZXZHYW1lZGF0YS5yb3VuZFxyXG4gICAgICAgICAgICAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsICYmICFwcmV2R2FtZWRhdGEuZnJlZWZvcmFsbCkge1xyXG4gICAgICAgICAgICB2YXIgbXlhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgICAgIC8vIERlY2lkZSBiZXR3ZWVuIE9vcHMgKHBob25leSBwbGF5ZWQpIGFuZCBQYXNzIChwbGF5ZXIgcGFzc2VkKVxyXG4gICAgICAgICAgICBteWF1ZGlvLnNyYyA9IGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kW2dhbWVkYXRhLm1vdmVzVGhpc1JvdW5kLmxlbmd0aC0xXS5wYXNzID8gXCJodHRwczovL3RpbGVydW5uZXIuZ2l0aHViLmlvL1Bhc3MubTRhXCIgOiBcImh0dHBzOi8vdGlsZXJ1bm5lci5naXRodWIuaW8vT29wcy5tNGFcIjtcclxuICAgICAgICAgICAgbXlhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBbZ2FtZWRhdGFdKTsgLy8gUGxheSBhIHNvdW5kIHdoZW4gYSByZXNjdWUgaXMgbWFkZVxyXG5cclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gYy5DTElFTlRfVFlQRV9GWUIpIHtcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IGMuUzJDX0ZVTkNfQ0hBVERBVEEpIHtcclxuICAgICAgICAgICAgICAgIC8vIEl0J3MgZ29vZnksIGJ1dCBJIGRlbGV0ZSBjaGF0IHdoZW4gZ2FtZSBlbmRzLCB0aGVuIHNvbWVvbmUgY2FuIHN0YXJ0IGEgbmV3IGdhbWUgd2l0aCB0aGUgc2FtZSBnYW1laWRcclxuICAgICAgICAgICAgICAgIC8vIFNvIHJlbW92ZSBtZXNzYWdlcyBub3QgZnJvbSBhIHBsYXllciBpbiB0aGlzIGdhbWUuIEkgbWlnaHQgaGF2ZSB0byBtYWtlIGEgY2hhdCBpZCB0byBwcm9wZXJseSBoYW5kbGVcclxuICAgICAgICAgICAgICAgIGxldCBuZXdtc2dzID0gbWVzc2FnZURhdGEubXNncy5maWx0ZXIoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBnYW1lZGF0YS5wbGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSBnYW1lZGF0YS5wbGF5ZXJzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5uaWNrbmFtZSA9PT0gZS5mcm9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0Q2hhdG1zZ3MobmV3bXNncyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gYy5TMkNfRlVOQ19HQU1FREFUQSkge1xyXG4gICAgICAgICAgICAgICAgLyogU0VSVkVSIFNFTlQgR0FNRSBEQVRBXHJcbiAgICAgICAgICAgICAgICBGb3IgYSByZWd1bGFyIHVwZGF0ZSBkdWUgdG8gcGxheWVyIGFjdGl2aXR5LCB0aGlzIGNsaWVudCBuZWVkcyB0aGUgdXBkYXRlLlxyXG5cclxuICAgICAgICAgICAgICAgIEZvciBkcm9wcGVkIGNvbm5lY3Rpb25zIHdoaWNoIG1hZGUgdGhpcyBjbGllbnQgc2VuZCBhIHJlam9pbiB0byB1cGRhdGUgc2VydmVyJ3NcclxuICAgICAgICAgICAgICAgICAgIGluZm8gZm9yIHRoaXMgY2xpZW50LCB3aGljaCBtYWtlcyB0aGUgc2VydmVyIHNlbmRzIGdhbWUgaW5mbyB0byB0aGlzIGNsaWVudCxcclxuICAgICAgICAgICAgICAgICAgIHRoaXMgY2xpZW50IGlzIGFscmVhZHkgdXAgdG8gZGF0ZSBhbmQgZG9lcyBub3QgbmVlZCB0aGUgdXBkYXRlLiBXZSBkbyBub3QgdGFrZVxyXG4gICAgICAgICAgICAgICAgICAgdGhlIHVwZGF0ZSBzbyBhcyBub3QgdG8gdXBzZXQgdGhlIGZyeSBsZXR0ZXIgcmVhcnJhbmdlbWVudHMgdGhpcyBjbGllbnQgbWF5IGhhdmVcclxuICAgICAgICAgICAgICAgICAgIG1hZGUuXHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmdhbWUuZ2FtZWluZGV4ICE9PSBnYW1lZGF0YS5nYW1laW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB8fCBtZXNzYWdlRGF0YS5nYW1lLnJvdW5kICE9PSBnYW1lZGF0YS5yb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG1lc3NhZ2VEYXRhLmdvYWwgIT09IGdhbWVkYXRhLmdvYWxcclxuICAgICAgICAgICAgICAgICAgICB8fCBtZXNzYWdlRGF0YS5wbGF5ZXJzLmxlbmd0aCAhPT0gZ2FtZWRhdGEucGxheWVycy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICB8fCBtZXNzYWdlRGF0YS5nYW1lLm1vdmVzVGhpc1JvdW5kLmxlbmd0aCAhPT0gZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNuYXQobWVzc2FnZURhdGEuc25hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG1lc3NhZ2VEYXRhLmdhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN5bmNzdGFtcChtZXNzYWdlRGF0YS5nYW1lLnN5bmNzdGFtcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0V2FybmluZygnJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gYy5TMkNfRlVOQ19HQU1FQ1JFQVRFRCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTm90aGluZyB0byBkbywgdGhpcyBpcyByZWFsbHkgZm9yIHRoZSBsb2JieSBkd2VsbGVyc1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSSB0aGluayB0aGlzIGhhcHBlbnMgd2hlbiBhIHdlYiBzb2NrZXQgY29ubmVjdGlvbiBkcm9wcyBhbmQgdGhlIG5ldyBvbmUgbG9zZXMgdGhlIGdhbWVpZCBvbiB0aGUgc2VydmVyIHdzcy5jbGllbnRzXHJcbiAgICAgICAgICAgICAgICAvLyBTbyBzZW5kIGEgcmVqb2luIHJlcXVlc3QgdG8gZ2V0IHRoZSBzZXJ2ZXIgYmFjayBvbiB0cmFja1xyXG4gICAgICAgICAgICAgICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmM6ICdyZWpvaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICAgICAgICAgICAgICBnYW1laWQ6IGdhbWVkYXRhLmdhbWVpZCxcclxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCFtZVRvRW50ZXJXb3JkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3VibWl0UGxheWVyV29yZCh3b3JkLCBnYW1lZGF0YSwgc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgbmlja25hbWUsIHNldFdvcmQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lVG9FbnRlcldvcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChnYW1lZGF0YS53aG9zZXR1cm4uaW5kZXhPZihuaWNrbmFtZSkgPiAtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZHJvcHBlciA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gZ2FtZWRhdGEucGxheWVycy5maWx0ZXIocCA9PiB7cmV0dXJuIHAubmlja25hbWUgPT09IG5pY2tuYW1lICYmIHAuZHJvcHBlZDt9KS5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEdhbWVTZWN0aW9uID0gPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyU3VidGl0bGVcIj5cclxuICAgICAgICAgICAge2dhbWVpZH06IHtuaWNrbmFtZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+Rmlyc3QgdG8ge2dhbWVkYXRhLmdvYWx9IHdpbnMhPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICB7Z2FtZWRhdGEucGxheWVycy5tYXAoKHBsLGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YFBsYXllci4ke2luZGV4fS4ke3BsLm5pY2tuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLmRyb3BwZWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwidHJEYW5nZXJcIj48L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbC5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwud2lucyA+IDAgJiYgPHNwYW4+IChXb24ge3BsLndpbnN9KTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRyaWdodFwiPjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbC5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGwud2lucyA+IDAgJiYgPHNwYW4+ICh7cGwud2luc30pPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdHJpZ2h0XCI+Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9iaWxlT25seVZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbC5wb2ludHMgPCAxMCA/IDxzcGFuPiZuYnNwOzwvc3Bhbj4gOiAnJ317cGwucG9pbnRzfSZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsLnBvaW50cyA+PSBnYW1lZGF0YS5nb2FsICYmIDxzcGFuIGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj4gV2lubmVyISZuYnNwOzwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAge2dhbWVkYXRhLm1vdmVzUHJldlJvdW5kICYmIGdhbWVkYXRhLm1vdmVzUHJldlJvdW5kLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPlByZXZpb3VzIHJvdW5kOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj59XHJcbiAgICAgICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNQcmV2Um91bmQgJiYgZ2FtZWRhdGEubW92ZXNQcmV2Um91bmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dNb3ZlTGlzdCgnbW92ZXNQcmV2Um91bmQnLCBnYW1lZGF0YS5tb3Zlc1ByZXZSb3VuZCl9XHJcbiAgICAgICAgICAgICAgICB7Z2FtZWRhdGEubW92ZXNUaGlzUm91bmQgJiYgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+VGhpcyByb3VuZDo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+fVxyXG4gICAgICAgICAgICAgICAge2dhbWVkYXRhLm1vdmVzVGhpc1JvdW5kICYmIGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICBzaG93TW92ZUxpc3QoJ21vdmVzVGhpc1JvdW5kJywgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQpfVxyXG4gICAgICAgICAgICAgICAgeyFnYW1lZGF0YS5mcmVlZm9yYWxsICYmIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3ZlcyAmJiBnYW1lZGF0YS5mcmVlZm9yYWxsTW92ZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+RnJlZS1mb3ItYWxsOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj59XHJcbiAgICAgICAgICAgICAgICB7IWdhbWVkYXRhLmZyZWVmb3JhbGwgJiYgZ2FtZWRhdGEuZnJlZWZvcmFsbE1vdmVzICYmIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3Zlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd01vdmVMaXN0KCdmZmFNb3ZlcycsIGdhbWVkYXRhLmZyZWVmb3JhbGxNb3Zlcyl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICB7Z2FtZWRhdGEud2hvc2V0dXJuLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5GcnkgTGV0dGVyczpcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uIGZyeUxldHRlckFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNodWZmbGVTaXplID0gZ2FtZWRhdGEuZnJ5TGV0dGVycy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiZWZvcmVTaHVmZmxlID0gWy4uLmdhbWVkYXRhLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWZ0ZXJTaHVmZmxlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChhZnRlclNodWZmbGUubGVuZ3RoIDwgc2h1ZmZsZVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYmVmb3JlU2h1ZmZsZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTaHVmZmxlLnB1c2goYmVmb3JlU2h1ZmZsZVtyYW5kXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVTaHVmZmxlLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0dhbWVkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnYW1lZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdHYW1lZGF0YS5mcnlMZXR0ZXJzID0gWy4uLmFmdGVyU2h1ZmZsZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG5ld0dhbWVkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGZyeUxldHRlckFjdGlvbkJ1dHRvbkljb25cIj5jYWNoZWQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvbiBmcnlMZXR0ZXJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzb3J0d29yayA9IFsuLi5nYW1lZGF0YS5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydHdvcmsuc29ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3R2FtZWRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdhbWVkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0dhbWVkYXRhLmZyeUxldHRlcnMgPSBbLi4uc29ydHdvcmtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1lZGF0YShuZXdHYW1lZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBmcnlMZXR0ZXJBY3Rpb25CdXR0b25JY29uXCI+c29ydF9ieV9hbHBoYTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcnlMZXR0ZXJEaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZWRhdGEuZnJ5TGV0dGVycy5tYXAoKGZsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YEZyeUxldHRlciR7aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpID09PSBzZWxlY3RlZCA/IFwiZnliRnJ5TGV0dGVyIFNlbGVjdGVkXCIgOiBcImZ5YkZyeUxldHRlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlTGV0dGVyID0gZ2FtZWRhdGEuZnJ5TGV0dGVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpZnRlZExldHRlcnMgPSBbLi4uZ2FtZWRhdGEuZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2gobW92ZUxldHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0dhbWVkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnYW1lZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0dhbWVkYXRhLmZyeUxldHRlcnMgPSBbLi4uc2hpZnRlZExldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbWVkYXRhKG5ld0dhbWVkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpOyAvLyB1bnNlbGVjdCB3aGVuIGNsaWNrZWQgYSBzZWNvbmQgdGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgc2VsZWN0ZWQgdGlsZSB0byB0aGlzIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlmdGVkTGV0dGVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZUxldHRlciA9IGdhbWVkYXRhLmZyeUxldHRlcnNbc2VsZWN0ZWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZ2FtZWRhdGEuZnJ5TGV0dGVycy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnYW1lZGF0YS5mcnlMZXR0ZXJzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2gobW92ZUxldHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3R2FtZWRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdhbWVkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0dhbWVkYXRhLmZyeUxldHRlcnMgPSBbLi4uc2hpZnRlZExldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1lZGF0YShuZXdHYW1lZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPntmbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAoI0Fuc3dlcnM6IHtnYW1lZGF0YS5udW1Qb3NzaWJsZUFuc3dlcnN9KVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICB7bWVUb0VudGVyV29yZCgpICYmXHJcbiAgICAgICAgICAgIGdldFBsYXllcldvcmQoaGFuZGxlS2V5RG93biwgd29yZCwgc2V0V29yZCwgZ2FtZWRhdGEsIHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lKX1cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Z2FtZWRhdGEuZ2FtZU92ZXIgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgICAgICBHYW1lIE92ZXImbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICB7IWRyb3BwZXIoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNlbmRSZXBsYXlSZXF1ZXN0KGNsaWVudCwgdGhpc2lzbWUsIGdhbWVkYXRhLCBuaWNrbmFtZSk7IH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQTEFZIEFHQUlOXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPntzbmF0fTwvZGl2PlxyXG4gICAgICAgICAgICB7d2FybmluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoIHRyV2FybmluZ1wiPnt3YXJuaW5nfTwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBGcnkgWW91ciBCcmFpblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TW9iaWxlT25seVZpZXc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtHYW1lU2VjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaGluQ2hhdCBnYW1laWQ9e2dhbWVpZH0gY2xpZW50PXtjbGllbnR9IG5pY2tuYW1lPXtuaWNrbmFtZX0gbXNncz17Y2hhdG1zZ3N9IHNldE1zZ3M9e3NldENoYXRtc2dzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9iaWxlT25seVZpZXc+XHJcbiAgICAgICAgICAgIDxCcm93c2VyVmlldz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0dhbWVTZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYXQgZ2FtZWlkPXtnYW1laWR9IGNsaWVudD17Y2xpZW50fSBuaWNrbmFtZT17bmlja25hbWV9IG1zZ3M9e2NoYXRtc2dzfSBzZXRNc2dzPXtzZXRDaGF0bXNnc30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICB7IWRyb3BwZXIoKSAmJlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIGtleT1cImRyb3BCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzdWJtaXREcm9wKHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIGdhbWVkYXRhLmdhbWVpZCwgbmlja25hbWUpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgUVVJVFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dNb3ZlTGlzdChtb3ZlTGlzdEtleSwgbW92ZUFycmF5KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIG1vdmVBcnJheS5tYXAoKG1vdmUpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17YCR7bW92ZUxpc3RLZXl9JHttb3ZlLm5pY2tuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgPHRkPnttb3ZlLm5pY2tuYW1lfTxzcGFuIGNsYXNzTmFtZT1cImZsb2F0cmlnaHRcIj46PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICB7bW92ZS5wYXNzID9cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPiBwYXNzZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEJyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7bW92ZS52YWxpZCA/ICcnIDogJ3RyRGFuZ2VyJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmUud29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmUuZWFybmVkICYmIDxzcGFuPiAoe21vdmUuZWFybmVkfSBwdHMpPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgPE1vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7bW92ZS52YWxpZCA/ICcnIDogJ3RyRGFuZ2VyJ30gJHttb3ZlLndvcmQubGVuZ3RoID4gMTAgJiYgbW92ZS5lYXJuZWQgPyAnbG9uZycgOiBtb3ZlLndvcmQubGVuZ3RoID4gMTMgPyAnbG9uZycgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmUud29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmUuZWFybmVkICYmIDxzcGFuPiAoe21vdmUuZWFybmVkfSBwdHMpPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L01vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICkpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQbGF5ZXJXb3JkKGhhbmRsZUtleURvd24sIHdvcmQsIHNldFdvcmQsIGdhbWVkYXRhLCBzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSkge1xyXG4gICAgcmV0dXJuIDxkaXYgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+RW50ZXIgV29yZDo8L2Rpdj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwid29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFdvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7d29yZC50b1VwcGVyQ2FzZSgpLnRyaW0oKS5tYXRjaChcIl5bYS16QS1aXSokXCIpICYmIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIGtleT1cInN1Ym1pdFdvcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBsYXllcldvcmQod29yZCwgZ2FtZWRhdGEsIHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIG5pY2tuYW1lLCBzZXRXb3JkKX19PlxyXG4gICAgICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBrZXk9XCJwYXNzQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBhc3Moc2V0V2FybmluZywgY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWRhdGEuZ2FtZWlkLCBuaWNrbmFtZSwgc2V0V29yZCl9fT5cclxuICAgICAgICAgICAgICAgIFBBU1NcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRQbGF5ZXJXb3JkKHdvcmQsIGdhbWVkYXRhLCBzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBuaWNrbmFtZSwgc2V0V29yZCkge1xyXG4gICAgbGV0IGZpeGVkd29yZCA9IHdvcmQudG9VcHBlckNhc2UoKS50cmltKCk7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgd29yZCBpcyBhbGxvd2VkIGJhc2VkIG9uIHByZXZpb3VzIHdvcmRzIHRoaXMgcm91bmRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWRhdGEubW92ZXNUaGlzUm91bmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBwdyA9IGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kW2ldLndvcmQ7XHJcbiAgICAgICAgaWYgKHB3ID09PSBmaXhlZHdvcmQpIHtcclxuICAgICAgICAgICAgc2V0V2FybmluZyhgWW91IGNhbm5vdCByZXVzZSBhIHByZXZpb3VzIHdvcmQgZnJvbSB0aGlzIHJvdW5kICgke3B3fSkuYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHB3ICsgJ1MnID09PSBmaXhlZHdvcmQgJiYgcHcuc3Vic3RyaW5nKHB3Lmxlbmd0aC0xKSAhPT0gJ1MnICYmIGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kW2ldLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHNldFdhcm5pbmcoYFlvdSBjYW5ub3QgYWRkIFMgdG8gYSBwcmV2aW91cyB2YWxpZCB3b3JkICgke3B3fSkgZnJvbSB0aGlzIHJvdW5kIHVubGVzcyBpdCBlbmRzIHdpdGggUy5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIENoZWNrIGlmIHRoZSBoYXZlIGFsbCB0aGUgZnJ5IGxldHRlcnNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWRhdGEuZnJ5TGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBsZXR0ZXJDb3VudFJlcXVpcmVkID0gMDtcclxuICAgICAgICBsZXQgYWN0dWFsTGV0dGVyQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2FtZWRhdGEuZnJ5TGV0dGVycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZWRhdGEuZnJ5TGV0dGVyc1tpXSA9PT0gZ2FtZWRhdGEuZnJ5TGV0dGVyc1tqXSkge1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyQ291bnRSZXF1aXJlZCA9IGxldHRlckNvdW50UmVxdWlyZWQgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZml4ZWR3b3JkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lZGF0YS5mcnlMZXR0ZXJzW2ldID09PSBmaXhlZHdvcmRbal0pIHtcclxuICAgICAgICAgICAgICAgIGFjdHVhbExldHRlckNvdW50ID0gYWN0dWFsTGV0dGVyQ291bnQgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhY3R1YWxMZXR0ZXJDb3VudCA8IGxldHRlckNvdW50UmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgc2V0V2FybmluZyhgWW91IG5lZWQgdGhlIGxldHRlciAke2dhbWVkYXRhLmZyeUxldHRlcnNbaV19IGF0IGxlYXN0ICR7bGV0dGVyQ291bnRSZXF1aXJlZH0gdGltZSR7bGV0dGVyQ291bnRSZXF1aXJlZCA9PT0gMSA/ICcuJyA6ICdzLid9YCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBJZiB5b3UgZ2V0IGhlcmUgdGhleSBoYXZlIGFsbCB0aGUgcmVxdWlyZWQgbGV0dGVycy4gU2VuZCB0aGUgZ3Vlc3MgdG8gdGhlIHNlcnZlci5cclxuICAgIHNldFdhcm5pbmcoYENoZWNraW5nIHlvdXIgd29yZCAuLi4gc2hvdWxkbid0IHRha2UgbG9uZy4gSWYgaXQgZG9lcywgcGxlYXNlIHRyeSByZWpvaW5pbmcgdGhlIGdhbWUuYCk7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ21vdmUnLFxyXG4gICAgICAgIHBhc3M6IGZhbHNlLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVkYXRhLmdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIGNsaWVudFJvdW5kOiBnYW1lZGF0YS5yb3VuZCwgLy8gZm9yIGNoZWNraW5nIHJlLXN1Ym1pc3Npb25zXHJcbiAgICAgICAgY2xpZW50TW92ZXNMZW5ndGg6IGdhbWVkYXRhLm1vdmVzVGhpc1JvdW5kLmxlbmd0aCwgLy8gZm9yIGNoZWNraW5nIHJlLXN1Ym1pc3Npb25zXHJcbiAgICAgICAgd29yZDogZml4ZWR3b3JkXHJcbiAgICB9KTtcclxuICAgIHNldFdvcmQoJycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRQYXNzKHNldFdhcm5pbmcsIGNsaWVudCwgdGhpc2lzbWUsIGdhbWVpZCwgbmlja25hbWUsIHNldFdvcmQpIHtcclxuICAgIC8vIElmIHlvdSBnZXQgaGVyZSB0aGV5IGhhdmUgYWxsIHRoZSByZXF1aXJlZCBsZXR0ZXJzLiBTZW5kIHRoZSBndWVzcyB0byB0aGUgc2VydmVyLlxyXG4gICAgc2V0V2FybmluZyhgU2VuZGluZyBQQVNTIC4uLiBzaG91bGRuJ3QgdGFrZSBsb25nLmApO1xyXG4gICAgY2xpZW50LnNlbmQoe1xyXG4gICAgICAgIHR5cGU6IGMuQ0xJRU5UX1RZUEVfRllCLFxyXG4gICAgICAgIGZ1bmM6ICdtb3ZlJyxcclxuICAgICAgICBwYXNzOiB0cnVlLFxyXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICB0aGlzaXNtZTogdGhpc2lzbWUsXHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICB3b3JkOiAnJ1xyXG4gICAgfSk7XHJcbiAgICBzZXRXb3JkKCcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0RHJvcChzZXRXYXJuaW5nLCBjbGllbnQsIHRoaXNpc21lLCBnYW1laWQsIG5pY2tuYW1lKSB7XHJcbiAgICBzZXRXYXJuaW5nKGBTZW5kaW5nIERST1AgLi4uIHNob3VsZG4ndCB0YWtlIGxvbmcuYCk7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ2Ryb3AnLFxyXG4gICAgICAgIHRoaXNpc21lOiB0aGlzaXNtZSxcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZFJlcGxheVJlcXVlc3QoY2xpZW50LCB0aGlzaXNtZSwgZ2FtZWRhdGEsIG5pY2tuYW1lKSB7XHJcbiAgICBjbGllbnQuc2VuZCh7XHJcbiAgICAgICAgdHlwZTogYy5DTElFTlRfVFlQRV9GWUIsXHJcbiAgICAgICAgZnVuYzogJ3JlcGxheScsXHJcbiAgICAgICAgdGhpc2lzbWU6IHRoaXNpc21lLFxyXG4gICAgICAgIGdhbWU6IGdhbWVkYXRhLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWRhdGEuZ2FtZWlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9