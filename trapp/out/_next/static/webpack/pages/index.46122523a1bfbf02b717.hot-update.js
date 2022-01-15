self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wm_mastermind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wm/mastermind */ "./pages/wm/mastermind.js");
/* harmony import */ var _wi_wordinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wi/wordinfo */ "./pages/wi/wordinfo.js");
/* harmony import */ var _pb_prisonbreak__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pb/prisonbreak */ "./pages/pb/prisonbreak.js");
/* harmony import */ var _fyb_fryyourbrain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fyb/fryyourbrain */ "./pages/fyb/fryyourbrain.js");
/* harmony import */ var _fyb_fybSolo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fyb/fybSolo */ "./pages/fyb/fybSolo.js");
/* harmony import */ var _sc_scrabbleclub__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sc/scrabbleclub */ "./pages/sc/scrabbleclub.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\index.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();









function Home() {
  _s();

  const {
    0: whereto,
    1: setWhereto
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('menu');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [whereto === 'menu' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Menu, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 30
    }, this), whereto === 'wm' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wm_mastermind__WEBPACK_IMPORTED_MODULE_3__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 28
    }, this), whereto === 'wi' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wi_wordinfo__WEBPACK_IMPORTED_MODULE_4__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 28
    }, this), whereto === 'pb' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_prisonbreak__WEBPACK_IMPORTED_MODULE_5__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 28
    }, this), whereto === 'fyb' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fyb_fryyourbrain__WEBPACK_IMPORTED_MODULE_6__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }, this), whereto === 'fybsolo' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fyb_fybSolo__WEBPACK_IMPORTED_MODULE_7__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 33
    }, this), whereto === 'sc' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sc_scrabbleclub__WEBPACK_IMPORTED_MODULE_8__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 28
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(Home, "X4zKO771MBoQLHMaoj5H2Dl1VSk=");

_c = Home;

const Menu = props => {
  _s2();

  // Menu option toggle description flags
  const {
    0: descWm,
    1: setDescWm
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // describe word mastermind

  const {
    0: descWi,
    1: setDescWi
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // describe word info

  const {
    0: descPb,
    1: setDescPb
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // describe prison break

  const {
    0: descFyb,
    1: setDescFyb
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // describe fry your brain

  const {
    0: descFybsolo,
    1: setDescFybsolo
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // describe fry your brain solo

  const {
    0: descSc,
    1: setDescSc
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // describe scrabble club
  // Acknowledgements description toggles

  const {
    0: descEnable2k,
    1: setDescEnable2k
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // describe ENABLE2K

  const {
    0: descFriends,
    1: setDescFriends
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // describe friends

  const MenuOption = props => {
    const toggleDescFlag = () => {
      props.setDescFlag(!props.descFlag);
    };

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            props.setWhereto(props.targetWhereto);
          },
          children: props.optionText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          id: "toggleDescribeFlag",
          className: "trButton",
          onClick: () => toggleDescFlag(),
          children: props.descFlag ? "Hide info" : "Show info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined);
  };

  const DescribeWordMastermind = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: "Word Mastermind is a single player code cracking game."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer picks a random word."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You enter guesses until you guess correctly."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer tells you how many letters are correct and how many are in the correct position."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_1__.BrowserView, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The computer shows you word info for guessed words."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 34
  }, undefined);

  const DescribeWordInfo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: "Word Info is a utility to get information on words."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Anagrams - words that use the exact same letters."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Inserts - words that can be made by inserting a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Drops - words that can be made by dropping a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Swaps - words that can be made by swapping a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 28
  }, undefined);

  const DescribePrisonBreak = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: "Prison Break is a two player crossword style game."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Prisoners always play first."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The first word played must touch the centre square."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["To free a prisoner, the Prisoners must play a tile on one of the special ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "material-icons pbSquareEscapeHatch",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 84
        }, undefined), " squares."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["When a ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "pbSquareUsedByGuards",
          children: "\xA0?\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 18
        }, undefined), " is played it represents any letter and does not have to remain as the same letter throughout the game."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["The ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "pbSquareUsedByGuards u",
          children: "Q"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 15
        }, undefined), " tile can represent \"Q\" or \"QU\", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The game ends if a player empties their rack."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["The game ends if all the special ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "material-icons pbSquareEscapeHatch",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 44
        }, undefined), " squares are used."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The game ends if both players pass."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 31
  }, undefined);

  const DescribeFryYourBrain = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: "Fry Your Brain is a word game that can be contested by two to six players."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "A tile pool is provided, starting with 3 letters. Players take turns."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "When it is your turn, make a word that has all the letters in the tile pool, plus any amount of additional letters."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You cannot reuse a word from the same round."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You cannot merely add an S to a valid word from the same round, unless that word ends in S."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "When a player fails to make a valid word on their turn, the other players take part in the free-for-all."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "In the free-for-all, the goal is to submit the shortest answer you can. All players with the shortest of the answers get points."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The points given equals the number of letters in the tile pool the last time someone gave a valid answer for that round."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Rounds continue until someone reaches the target number of points for the game."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 32
  }, undefined);

  const DescribeFryYourBrainSolo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: "Fry Your Brain Solo is a practise ground for Fry Your Brain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "A new tile pool is started with 3 letters."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Make a word that has all the letters in the tile pool, plus any additional letters, or pass."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "A letter will be added to the pool after each word or pass, or a new tile pool will be started."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The display will indicate whether each made word is valid or not."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Unlike regular Fry Your Brain, you may reuse a word or simply add or remove an S at the end."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 36
  }, undefined);

  const DescribeScrabbleClub = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: "The Scrabble Club page is Scrabble Club stuff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 32
  }, undefined);

  const Acknowledge = props => {
    const toggleDescFlag = () => {
      props.setDescFlag(!props.descFlag);
    };

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: props.ackText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => toggleDescFlag(),
          children: props.descFlag ? "Hide info" : "Show info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, undefined);
  };

  const DescribeEnable2k = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph trEmphasis",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "This site uses the Enhanced North American Benchmark LEexicon, millenial edition, a public domain word list that I gratefully acknowledge."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 28
  }, undefined);

  const DescribeFriends = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph trEmphasis",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Danielle, Emese, Cesar, Lennon, Bev, Noah, Rach, Sarah, Rod, Sonya, Nolan, Shyrai, Agnes, Jessica, Cheryl, ..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Thanks for technical help, feedback, suggestions, or simply having fun here. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "material-icons heart",
        children: "favorite"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 85
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 27
  }, undefined);

  const MenuOptionKmMarkers = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trParagraph",
    children: ["Hamilton to Cambridge Rail Trail:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "https://1drv.ms/u/s!AoRKcQVZC5rH4XIvB_r0uq414KU2?e=aSSkK1",
      target: "_blank",
      children: " Km Marker Videos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 37
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trTitle",
        children: "Tile Stuff"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_1__.BrowserView, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descWm,
              setDescFlag: setDescWm,
              setWhereto: props.setWhereto,
              targetWhereto: "wm",
              optionText: "Word Mastermind"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descWi,
              setDescFlag: setDescWi,
              setWhereto: props.setWhereto,
              targetWhereto: "wi",
              optionText: "Word Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descPb,
              setDescFlag: setDescPb,
              setWhereto: props.setWhereto,
              targetWhereto: "pb",
              optionText: "Prison Break"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descFyb,
              setDescFlag: setDescFyb,
              setWhereto: props.setWhereto,
              targetWhereto: "fyb",
              optionText: "Fry Your Brain"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descFybsolo,
              setDescFlag: setDescFybsolo,
              setWhereto: props.setWhereto,
              targetWhereto: "fybsolo",
              optionText: "FYB Solo Mode"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descSc,
              setDescFlag: setDescSc,
              setWhereto: props.setWhereto,
              targetWhereto: "sc",
              optionText: "Scrabble Club"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_1__.MobileOnlyView, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descWm,
              setDescFlag: setDescWm,
              setWhereto: props.setWhereto,
              targetWhereto: "wm",
              optionText: "Word Mastermind"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descWi,
              setDescFlag: setDescWi,
              setWhereto: props.setWhereto,
              targetWhereto: "wi",
              optionText: "Word Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descFyb,
              setDescFlag: setDescFyb,
              setWhereto: props.setWhereto,
              targetWhereto: "fyb",
              optionText: "Fry Your Brain"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
              descFlag: descFybsolo,
              setDescFlag: setDescFybsolo,
              setWhereto: props.setWhereto,
              targetWhereto: "fybsolo",
              optionText: "FYB Solo Mode"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, undefined), descWm && DescribeWordMastermind, descWi && DescribeWordInfo, descPb && DescribePrisonBreak, descFyb && DescribeFryYourBrain, descFybsolo && DescribeFryYourBrainSolo, descSc && DescribeScrabbleClub]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trTitle",
        children: "Runner Stuff"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOptionKmMarkers, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trTitle",
        children: "Special Thanks"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Acknowledge, {
              ackText: "ENABLE2K",
              descFlag: descEnable2k,
              setDescFlag: setDescEnable2k
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 13
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Acknowledge, {
              ackText: "Friends",
              descFlag: descFriends,
              setDescFlag: setDescFriends
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }, undefined), descEnable2k && DescribeEnable2k, descFriends && DescribeFriends]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 5
  }, undefined);
};

_s2(Menu, "5N/b9GioXCX/m8d08slZIdj90Tc=");

_c2 = Menu;

var _c, _c2;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "Menu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIndoZXJldG8iLCJzZXRXaGVyZXRvIiwidXNlU3RhdGUiLCJNZW51IiwicHJvcHMiLCJkZXNjV20iLCJzZXREZXNjV20iLCJkZXNjV2kiLCJzZXREZXNjV2kiLCJkZXNjUGIiLCJzZXREZXNjUGIiLCJkZXNjRnliIiwic2V0RGVzY0Z5YiIsImRlc2NGeWJzb2xvIiwic2V0RGVzY0Z5YnNvbG8iLCJkZXNjU2MiLCJzZXREZXNjU2MiLCJkZXNjRW5hYmxlMmsiLCJzZXREZXNjRW5hYmxlMmsiLCJkZXNjRnJpZW5kcyIsInNldERlc2NGcmllbmRzIiwiTWVudU9wdGlvbiIsInRvZ2dsZURlc2NGbGFnIiwic2V0RGVzY0ZsYWciLCJkZXNjRmxhZyIsInRhcmdldFdoZXJldG8iLCJvcHRpb25UZXh0IiwiRGVzY3JpYmVXb3JkTWFzdGVybWluZCIsIkRlc2NyaWJlV29yZEluZm8iLCJEZXNjcmliZVByaXNvbkJyZWFrIiwiRGVzY3JpYmVGcnlZb3VyQnJhaW4iLCJEZXNjcmliZUZyeVlvdXJCcmFpblNvbG8iLCJEZXNjcmliZVNjcmFiYmxlQ2x1YiIsIkFja25vd2xlZGdlIiwiYWNrVGV4dCIsIkRlc2NyaWJlRW5hYmxlMmsiLCJEZXNjcmliZUZyaWVuZHMiLCJNZW51T3B0aW9uS21NYXJrZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQywrQ0FBUSxDQUFDLE1BQUQsQ0FBdEM7QUFFQSxzQkFDRTtBQUFBLGVBQ0dGLE9BQU8sS0FBSyxNQUFaLGlCQUFzQiw4REFBQyxJQUFEO0FBQU0sZ0JBQVUsRUFBRUM7QUFBbEI7QUFBQTtB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsZ0NBQ0U7QUFBQSxpQ0FDRTtBQUFBLG9DQUNBLDhEQUFDLFdBQUQ7QUFBYSxxQkFBTyxFQUFDLFVBQXJCO0FBQWdDLHNCQUFRLEVBQUVmLFlBQTFDO0FBQXdELHlCQUFXLEVBQUVDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREEsZUFFQSw4REFBQyxXQUFEO0FBQWEscUJBQU8sRUFBQyxTQUFyQjtBQUErQixzQkFBUSxFQUFFQyxXQUF6QztBQUFzRCx5QkFBVyxFQUFFQztBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFPR0gsWUFBWSxJQUFJa0IsZ0JBUG5CLEVBUUdoQixXQUFXLElBQUlpQixlQVJsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQTBEQyxDQXJNRDs7SUFBTWpDLEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDYxMjI1MjNhMWJmYmYwMmI3MTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJvd3NlclZpZXcsIE1vYmlsZU9ubHlWaWV3fSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXb3JkTWFzdGVybWluZCBmcm9tICcuL3dtL21hc3Rlcm1pbmQnO1xyXG5pbXBvcnQgV29yZEluZm8gZnJvbSAnLi93aS93b3JkaW5mbyc7XHJcbmltcG9ydCBQcmlzb25CcmVhayBmcm9tICcuL3BiL3ByaXNvbmJyZWFrJztcclxuaW1wb3J0IEZyeVlvdXJCcmFpbiBmcm9tICcuL2Z5Yi9mcnl5b3VyYnJhaW4nO1xyXG5pbXBvcnQgRnJ5WW91ckJyYWluU29sbyBmcm9tICcuL2Z5Yi9meWJTb2xvJztcclxuaW1wb3J0IFNjcmFiYmxlQ2x1YiBmcm9tICcuL3NjL3NjcmFiYmxlY2x1Yic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFt3aGVyZXRvLCBzZXRXaGVyZXRvXSA9IHVzZVN0YXRlKCdtZW51Jyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7d2hlcmV0byA9PT0gJ21lbnUnICYmIDxNZW51IHNldFdoZXJldG89e3NldFdoZXJldG99PjwvTWVudT59XHJcbiAgICAgIHt3aGVyZXRvID09PSAnd20nICYmIDxXb3JkTWFzdGVybWluZCBzZXRXaGVyZXRvPXtzZXRXaGVyZXRvfT48L1dvcmRNYXN0ZXJtaW5kPn1cclxuICAgICAge3doZXJldG8gPT09ICd3aScgJiYgPFdvcmRJbmZvIHNldFdoZXJldG89e3NldFdoZXJldG99PjwvV29yZEluZm8+fVxyXG4gICAgICB7d2hlcmV0byA9PT0gJ3BiJyAmJiA8UHJpc29uQnJlYWsgc2V0V2hlcmV0bz17c2V0V2hlcmV0b30+PC9Qcmlzb25CcmVhaz59XHJcbiAgICAgIHt3aGVyZXRvID09PSAnZnliJyAmJiA8RnJ5WW91ckJyYWluIHNldFdoZXJldG89e3NldFdoZXJldG99PjwvRnJ5WW91ckJyYWluPn1cclxuICAgICAge3doZXJldG8gPT09ICdmeWJzb2xvJyAmJiA8RnJ5WW91ckJyYWluU29sbyBzZXRXaGVyZXRvPXtzZXRXaGVyZXRvfT48L0ZyeVlvdXJCcmFpblNvbG8+fVxyXG4gICAgICB7d2hlcmV0byA9PT0gJ3NjJyAmJiA8U2NyYWJibGVDbHViIHNldFdoZXJldG89e3NldFdoZXJldG99PjwvU2NyYWJibGVDbHViPn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTWVudSA9IChwcm9wcykgPT4ge1xyXG4gIC8vIE1lbnUgb3B0aW9uIHRvZ2dsZSBkZXNjcmlwdGlvbiBmbGFnc1xyXG4gIGNvbnN0IFtkZXNjV20sIHNldERlc2NXbV0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIGRlc2NyaWJlIHdvcmQgbWFzdGVybWluZFxyXG4gIGNvbnN0IFtkZXNjV2ksIHNldERlc2NXaV0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIGRlc2NyaWJlIHdvcmQgaW5mb1xyXG4gIGNvbnN0IFtkZXNjUGIsIHNldERlc2NQYl0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIGRlc2NyaWJlIHByaXNvbiBicmVha1xyXG4gIGNvbnN0IFtkZXNjRnliLCBzZXREZXNjRnliXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgZnJ5IHlvdXIgYnJhaW5cclxuICBjb25zdCBbZGVzY0Z5YnNvbG8sIHNldERlc2NGeWJzb2xvXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgZnJ5IHlvdXIgYnJhaW4gc29sb1xyXG4gIGNvbnN0IFtkZXNjU2MsIHNldERlc2NTY10gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIGRlc2NyaWJlIHNjcmFiYmxlIGNsdWJcclxuICAvLyBBY2tub3dsZWRnZW1lbnRzIGRlc2NyaXB0aW9uIHRvZ2dsZXNcclxuICBjb25zdCBbZGVzY0VuYWJsZTJrLCBzZXREZXNjRW5hYmxlMmtdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBFTkFCTEUyS1xyXG4gIGNvbnN0IFtkZXNjRnJpZW5kcywgc2V0RGVzY0ZyaWVuZHNdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBmcmllbmRzXHJcblxyXG4gIGNvbnN0IE1lbnVPcHRpb24gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHRvZ2dsZURlc2NGbGFnID0gKCkgPT4ge1xyXG4gICAgICBwcm9wcy5zZXREZXNjRmxhZyghcHJvcHMuZGVzY0ZsYWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3Byb3BzLnNldFdoZXJldG8ocHJvcHMudGFyZ2V0V2hlcmV0byk7fX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLm9wdGlvblRleHR9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJ0b2dnbGVEZXNjcmliZUZsYWdcIiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURlc2NGbGFnKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5kZXNjRmxhZyA/IFwiSGlkZSBpbmZvXCIgOiBcIlNob3cgaW5mb1wifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlV29yZE1hc3Rlcm1pbmQgPSA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRyU3VidGl0bGVcIj5Xb3JkIE1hc3Rlcm1pbmQgaXMgYSBzaW5nbGUgcGxheWVyIGNvZGUgY3JhY2tpbmcgZ2FtZS48L2Rpdj5cclxuICAgIDx1bD5cclxuICAgICAgPGxpPlRoZSBjb21wdXRlciBwaWNrcyBhIHJhbmRvbSB3b3JkLjwvbGk+XHJcbiAgICAgIDxsaT5Zb3UgZW50ZXIgZ3Vlc3NlcyB1bnRpbCB5b3UgZ3Vlc3MgY29ycmVjdGx5LjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgY29tcHV0ZXIgdGVsbHMgeW91IGhvdyBtYW55IGxldHRlcnMgYXJlIGNvcnJlY3QgYW5kIGhvdyBtYW55IGFyZSBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbi48L2xpPlxyXG4gICAgICA8bGk+VGhlIGNvbXB1dGVyIHdpbGwgc3RhcnQgd2l0aCBsZW5ndGggMiwgYW5kIGFkZCAxIGVhY2ggcm91bmQgdXAgdG8gbGVuZ3RoIDguIFRoZW4gaXQgc3RhcnRzIGEgbmV3IHNldCBiYWNrIGF0IDIuPC9saT5cclxuICAgICAgPEJyb3dzZXJWaWV3PlxyXG4gICAgICAgIDxsaT5UaGUgY29tcHV0ZXIgc2hvd3MgeW91IHdvcmQgaW5mbyBmb3IgZ3Vlc3NlZCB3b3Jkcy48L2xpPlxyXG4gICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj47XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlV29yZEluZm8gPSA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRyU3VidGl0bGVcIj5Xb3JkIEluZm8gaXMgYSB1dGlsaXR5IHRvIGdldCBpbmZvcm1hdGlvbiBvbiB3b3Jkcy48L2Rpdj5cclxuICAgIDx1bD5cclxuICAgICAgPGxpPkFuYWdyYW1zIC0gd29yZHMgdGhhdCB1c2UgdGhlIGV4YWN0IHNhbWUgbGV0dGVycy48L2xpPlxyXG4gICAgICA8bGk+SW5zZXJ0cyAtIHdvcmRzIHRoYXQgY2FuIGJlIG1hZGUgYnkgaW5zZXJ0aW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgICA8bGk+RHJvcHMgLSB3b3JkcyB0aGF0IGNhbiBiZSBtYWRlIGJ5IGRyb3BwaW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgICA8bGk+U3dhcHMgLSB3b3JkcyB0aGF0IGNhbiBiZSBtYWRlIGJ5IHN3YXBwaW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj47XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlUHJpc29uQnJlYWsgPSA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRyU3VidGl0bGVcIj5Qcmlzb24gQnJlYWsgaXMgYSB0d28gcGxheWVyIGNyb3Nzd29yZCBzdHlsZSBnYW1lLjwvZGl2PlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGk+WW91IHBsYXkgdHdvIGdhbWVzLCBvbmUgYXMgdGhlIFByaXNvbmVycyBhbmQgb25lIGFzIHRoZSBHdWFyZHMuIFdob2V2ZXIgZnJlZXMgdGhlIG1vc3QgcHJpc29uZXJzIHdpbnMuPC9saT5cclxuICAgICAgPGxpPlByaXNvbmVycyBhbHdheXMgcGxheSBmaXJzdC48L2xpPlxyXG4gICAgICA8bGk+VGhlIGZpcnN0IHdvcmQgcGxheWVkIG11c3QgdG91Y2ggdGhlIGNlbnRyZSBzcXVhcmUuPC9saT5cclxuICAgICAgPGxpPlRvIGZyZWUgYSBwcmlzb25lciwgdGhlIFByaXNvbmVycyBtdXN0IHBsYXkgYSB0aWxlIG9uIG9uZSBvZiB0aGUgc3BlY2lhbCA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBwYlNxdWFyZUVzY2FwZUhhdGNoXCI+cnVuX2NpcmNsZTwvc3Bhbj4gc3F1YXJlcy48L2xpPlxyXG4gICAgICA8bGk+V2hlbiBhIDxzcGFuIGNsYXNzTmFtZT1cInBiU3F1YXJlVXNlZEJ5R3VhcmRzXCI+Jm5ic3A7PyZuYnNwOzwvc3Bhbj4gaXMgcGxheWVkIGl0IHJlcHJlc2VudHMgYW55IGxldHRlciBhbmQgZG9lcyBub3QgaGF2ZSB0byByZW1haW4gYXMgdGhlIHNhbWUgbGV0dGVyIHRocm91Z2hvdXQgdGhlIGdhbWUuPC9saT5cclxuICAgICAgPGxpPlRoZSA8c3BhbiBjbGFzc05hbWU9XCJwYlNxdWFyZVVzZWRCeUd1YXJkcyB1XCI+UTwvc3Bhbj4gdGlsZSBjYW4gcmVwcmVzZW50IFwiUVwiIG9yIFwiUVVcIiwgZG9lcyBub3QgaGF2ZSB0byBiZSB0aGUgc2FtZSBpbiBib3RoIGRpcmVjdGlvbnMsIGFuZCBkb2VzIG5vdCBoYXZlIHRvIHJlbWFpbiBhdCB0aGUgc2FtZSBkZXNpZ25hdGlvbiB0aHJvdWdob3V0IHRoZSBnYW1lLjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgZ2FtZSBlbmRzIGlmIGEgcGxheWVyIGVtcHRpZXMgdGhlaXIgcmFjay48L2xpPlxyXG4gICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBhbGwgdGhlIHNwZWNpYWwgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcGJTcXVhcmVFc2NhcGVIYXRjaFwiPnJ1bl9jaXJjbGU8L3NwYW4+IHNxdWFyZXMgYXJlIHVzZWQuPC9saT5cclxuICAgICAgPGxpPlRoZSBnYW1lIGVuZHMgaWYgYm90aCBwbGF5ZXJzIHBhc3MuPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+O1xyXG5cclxuICBjb25zdCBEZXNjcmliZUZyeVlvdXJCcmFpbiA9IDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHJTdWJ0aXRsZVwiPkZyeSBZb3VyIEJyYWluIGlzIGEgd29yZCBnYW1lIHRoYXQgY2FuIGJlIGNvbnRlc3RlZCBieSB0d28gdG8gc2l4IHBsYXllcnMuPC9kaXY+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaT5BIHRpbGUgcG9vbCBpcyBwcm92aWRlZCwgc3RhcnRpbmcgd2l0aCAzIGxldHRlcnMuIFBsYXllcnMgdGFrZSB0dXJucy48L2xpPlxyXG4gICAgICA8bGk+V2hlbiBpdCBpcyB5b3VyIHR1cm4sIG1ha2UgYSB3b3JkIHRoYXQgaGFzIGFsbCB0aGUgbGV0dGVycyBpbiB0aGUgdGlsZSBwb29sLCBwbHVzIGFueSBhbW91bnQgb2YgYWRkaXRpb25hbCBsZXR0ZXJzLjwvbGk+XHJcbiAgICAgIDxsaT5Zb3UgY2Fubm90IHJldXNlIGEgd29yZCBmcm9tIHRoZSBzYW1lIHJvdW5kLjwvbGk+XHJcbiAgICAgIDxsaT5Zb3UgY2Fubm90IG1lcmVseSBhZGQgYW4gUyB0byBhIHZhbGlkIHdvcmQgZnJvbSB0aGUgc2FtZSByb3VuZCwgdW5sZXNzIHRoYXQgd29yZCBlbmRzIGluIFMuPC9saT5cclxuICAgICAgPGxpPldoZW4gYSBwbGF5ZXIgZmFpbHMgdG8gbWFrZSBhIHZhbGlkIHdvcmQgb24gdGhlaXIgdHVybiwgdGhlIG90aGVyIHBsYXllcnMgdGFrZSBwYXJ0IGluIHRoZSBmcmVlLWZvci1hbGwuPC9saT5cclxuICAgICAgPGxpPkluIHRoZSBmcmVlLWZvci1hbGwsIHRoZSBnb2FsIGlzIHRvIHN1Ym1pdCB0aGUgc2hvcnRlc3QgYW5zd2VyIHlvdSBjYW4uIEFsbCBwbGF5ZXJzIHdpdGggdGhlIHNob3J0ZXN0IG9mIHRoZSBhbnN3ZXJzIGdldCBwb2ludHMuPC9saT5cclxuICAgICAgPGxpPlRoZSBwb2ludHMgZ2l2ZW4gZXF1YWxzIHRoZSBudW1iZXIgb2YgbGV0dGVycyBpbiB0aGUgdGlsZSBwb29sIHRoZSBsYXN0IHRpbWUgc29tZW9uZSBnYXZlIGEgdmFsaWQgYW5zd2VyIGZvciB0aGF0IHJvdW5kLjwvbGk+XHJcbiAgICAgIDxsaT5Sb3VuZHMgY29udGludWUgdW50aWwgc29tZW9uZSByZWFjaGVzIHRoZSB0YXJnZXQgbnVtYmVyIG9mIHBvaW50cyBmb3IgdGhlIGdhbWUuPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+O1xyXG5cclxuICBjb25zdCBEZXNjcmliZUZyeVlvdXJCcmFpblNvbG8gPSA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRyU3VidGl0bGVcIj5GcnkgWW91ciBCcmFpbiBTb2xvIGlzIGEgcHJhY3Rpc2UgZ3JvdW5kIGZvciBGcnkgWW91ciBCcmFpbjwvZGl2PlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGk+QSBuZXcgdGlsZSBwb29sIGlzIHN0YXJ0ZWQgd2l0aCAzIGxldHRlcnMuPC9saT5cclxuICAgICAgPGxpPk1ha2UgYSB3b3JkIHRoYXQgaGFzIGFsbCB0aGUgbGV0dGVycyBpbiB0aGUgdGlsZSBwb29sLCBwbHVzIGFueSBhZGRpdGlvbmFsIGxldHRlcnMsIG9yIHBhc3MuPC9saT5cclxuICAgICAgPGxpPkEgbGV0dGVyIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHBvb2wgYWZ0ZXIgZWFjaCB3b3JkIG9yIHBhc3MsIG9yIGEgbmV3IHRpbGUgcG9vbCB3aWxsIGJlIHN0YXJ0ZWQuPC9saT5cclxuICAgICAgPGxpPlRoZSBkaXNwbGF5IHdpbGwgaW5kaWNhdGUgd2hldGhlciBlYWNoIG1hZGUgd29yZCBpcyB2YWxpZCBvciBub3QuPC9saT5cclxuICAgICAgPGxpPlVubGlrZSByZWd1bGFyIEZyeSBZb3VyIEJyYWluLCB5b3UgbWF5IHJldXNlIGEgd29yZCBvciBzaW1wbHkgYWRkIG9yIHJlbW92ZSBhbiBTIGF0IHRoZSBlbmQuPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+O1xyXG5cclxuICBjb25zdCBEZXNjcmliZVNjcmFiYmxlQ2x1YiA9IDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHJTdWJ0aXRsZVwiPlRoZSBTY3JhYmJsZSBDbHViIHBhZ2UgaXMgU2NyYWJibGUgQ2x1YiBzdHVmZjwvZGl2PlxyXG4gIDwvZGl2PjtcclxuXHJcbiAgY29uc3QgQWNrbm93bGVkZ2UgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHRvZ2dsZURlc2NGbGFnID0gKCkgPT4ge1xyXG4gICAgICBwcm9wcy5zZXREZXNjRmxhZyghcHJvcHMuZGVzY0ZsYWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgIHtwcm9wcy5hY2tUZXh0fVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURlc2NGbGFnKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5kZXNjRmxhZyA/IFwiSGlkZSBpbmZvXCIgOiBcIlNob3cgaW5mb1wifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlRW5hYmxlMmsgPSA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoIHRyRW1waGFzaXNcIj5cclxuICAgIDxwPlRoaXMgc2l0ZSB1c2VzIHRoZSBFbmhhbmNlZCBOb3J0aCBBbWVyaWNhbiBCZW5jaG1hcmsgTEVleGljb24sIG1pbGxlbmlhbCBlZGl0aW9uLCBhIHB1YmxpYyBkb21haW4gd29yZCBsaXN0IHRoYXQgSSBncmF0ZWZ1bGx5IGFja25vd2xlZGdlLjwvcD5cclxuICA8L2Rpdj5cclxuXHJcbiAgY29uc3QgRGVzY3JpYmVGcmllbmRzID0gPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaCB0ckVtcGhhc2lzXCI+XHJcbiAgICA8cD5EYW5pZWxsZSwgRW1lc2UsIENlc2FyLCBMZW5ub24sIEJldiwgTm9haCwgUmFjaCwgU2FyYWgsIFJvZCwgU29ueWEsIE5vbGFuLCBTaHlyYWksIEFnbmVzLCBKZXNzaWNhLCBDaGVyeWwsIC4uLjwvcD5cclxuICAgIDxwPlRoYW5rcyBmb3IgdGVjaG5pY2FsIGhlbHAsIGZlZWRiYWNrLCBzdWdnZXN0aW9ucywgb3Igc2ltcGx5IGhhdmluZyBmdW4gaGVyZS4gPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgaGVhcnRcIj5mYXZvcml0ZTwvaT48L3A+XHJcbiAgPC9kaXY+XHJcblxyXG4gIGNvbnN0IE1lbnVPcHRpb25LbU1hcmtlcnMgPSAoKSA9PiA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICBIYW1pbHRvbiB0byBDYW1icmlkZ2UgUmFpbCBUcmFpbDpcclxuICAgIDxhIGhyZWY9XCJodHRwczovLzFkcnYubXMvdS9zIUFvUktjUVZaQzVySDRYSXZCX3IwdXE0MTRLVTI/ZT1hU1NrSzFcIiB0YXJnZXQ9XCJfYmxhbmtcIj4gS20gTWFya2VyIFZpZGVvczwvYT5cclxuICA8L2Rpdj5cclxuXHJcbnJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+VGlsZSBTdHVmZjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgIDxCcm93c2VyVmlldz5cclxuICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjV219IHNldERlc2NGbGFnPXtzZXREZXNjV219IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99IHRhcmdldFdoZXJldG89J3dtJyBvcHRpb25UZXh0PSdXb3JkIE1hc3Rlcm1pbmQnLz5cclxuICAgICAgICAgICAgICA8TWVudU9wdGlvbiBkZXNjRmxhZz17ZGVzY1dpfSBzZXREZXNjRmxhZz17c2V0RGVzY1dpfSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSd3aScgb3B0aW9uVGV4dD0nV29yZCBJbmZvJy8+XHJcbiAgICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NQYn0gc2V0RGVzY0ZsYWc9e3NldERlc2NQYn0gc2V0V2hlcmV0bz17cHJvcHMuc2V0V2hlcmV0b30gdGFyZ2V0V2hlcmV0bz0ncGInIG9wdGlvblRleHQ9J1ByaXNvbiBCcmVhaycvPlxyXG4gICAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjRnlifSBzZXREZXNjRmxhZz17c2V0RGVzY0Z5Yn0gc2V0V2hlcmV0bz17cHJvcHMuc2V0V2hlcmV0b30gdGFyZ2V0V2hlcmV0bz0nZnliJyBvcHRpb25UZXh0PSdGcnkgWW91ciBCcmFpbicvPlxyXG4gICAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjRnlic29sb30gc2V0RGVzY0ZsYWc9e3NldERlc2NGeWJzb2xvfSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSdmeWJzb2xvJyBvcHRpb25UZXh0PSdGWUIgU29sbyBNb2RlJy8+XHJcbiAgICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NTY30gc2V0RGVzY0ZsYWc9e3NldERlc2NTY30gc2V0V2hlcmV0bz17cHJvcHMuc2V0V2hlcmV0b30gdGFyZ2V0V2hlcmV0bz0nc2MnIG9wdGlvblRleHQ9J1NjcmFiYmxlIENsdWInLz5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgICAgICA8TW9iaWxlT25seVZpZXc+XHJcbiAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICA8TWVudU9wdGlvbiBkZXNjRmxhZz17ZGVzY1dtfSBzZXREZXNjRmxhZz17c2V0RGVzY1dtfSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSd3bScgb3B0aW9uVGV4dD0nV29yZCBNYXN0ZXJtaW5kJy8+XHJcbiAgICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NXaX0gc2V0RGVzY0ZsYWc9e3NldERlc2NXaX0gc2V0V2hlcmV0bz17cHJvcHMuc2V0V2hlcmV0b30gdGFyZ2V0V2hlcmV0bz0nd2knIG9wdGlvblRleHQ9J1dvcmQgSW5mbycvPlxyXG4gICAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjRnlifSBzZXREZXNjRmxhZz17c2V0RGVzY0Z5Yn0gc2V0V2hlcmV0bz17cHJvcHMuc2V0V2hlcmV0b30gdGFyZ2V0V2hlcmV0bz0nZnliJyBvcHRpb25UZXh0PSdGcnkgWW91ciBCcmFpbicvPlxyXG4gICAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjRnlic29sb30gc2V0RGVzY0ZsYWc9e3NldERlc2NGeWJzb2xvfSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSdmeWJzb2xvJyBvcHRpb25UZXh0PSdGWUIgU29sbyBNb2RlJy8+XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvTW9iaWxlT25seVZpZXc+XHJcbiAgICAgICAge2Rlc2NXbSAmJiBEZXNjcmliZVdvcmRNYXN0ZXJtaW5kfVxyXG4gICAgICAgIHtkZXNjV2kgJiYgRGVzY3JpYmVXb3JkSW5mb31cclxuICAgICAgICB7ZGVzY1BiICYmIERlc2NyaWJlUHJpc29uQnJlYWt9XHJcbiAgICAgICAge2Rlc2NGeWIgJiYgRGVzY3JpYmVGcnlZb3VyQnJhaW59XHJcbiAgICAgICAge2Rlc2NGeWJzb2xvICYmIERlc2NyaWJlRnJ5WW91ckJyYWluU29sb31cclxuICAgICAgICB7ZGVzY1NjICYmIERlc2NyaWJlU2NyYWJibGVDbHVifVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICBSdW5uZXIgU3R1ZmZcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TWVudU9wdGlvbkttTWFya2Vycz48L01lbnVPcHRpb25LbU1hcmtlcnM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgU3BlY2lhbCBUaGFua3NcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgPEFja25vd2xlZGdlIGFja1RleHQ9J0VOQUJMRTJLJyBkZXNjRmxhZz17ZGVzY0VuYWJsZTJrfSBzZXREZXNjRmxhZz17c2V0RGVzY0VuYWJsZTJrfS8+XHJcbiAgICAgICAgICAgIDxBY2tub3dsZWRnZSBhY2tUZXh0PSdGcmllbmRzJyBkZXNjRmxhZz17ZGVzY0ZyaWVuZHN9IHNldERlc2NGbGFnPXtzZXREZXNjRnJpZW5kc30vPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIHtkZXNjRW5hYmxlMmsgJiYgRGVzY3JpYmVFbmFibGUya31cclxuICAgICAgICAgIHtkZXNjRnJpZW5kcyAmJiBEZXNjcmliZUZyaWVuZHN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==