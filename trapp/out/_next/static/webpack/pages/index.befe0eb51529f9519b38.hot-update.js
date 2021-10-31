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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wm_mastermind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wm/mastermind */ "./pages/wm/mastermind.js");
/* harmony import */ var _wi_wordinfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wi/wordinfo */ "./pages/wi/wordinfo.js");
/* harmony import */ var _pb_prisonbreak__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pb/prisonbreak */ "./pages/pb/prisonbreak.js");
/* harmony import */ var _fyb_fryyourbrain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fyb/fryyourbrain */ "./pages/fyb/fryyourbrain.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\index.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

 // import styles from '../styles/Home.module.css'







function Home() {
  _s();

  const {
    0: whereto,
    1: setWhereto
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('menu');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [whereto === 'menu' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Menu, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 30
    }, this), whereto === 'wm' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wm_mastermind__WEBPACK_IMPORTED_MODULE_4__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 28
    }, this), whereto === 'wi' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wi_wordinfo__WEBPACK_IMPORTED_MODULE_5__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 28
    }, this), whereto === 'pb' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_prisonbreak__WEBPACK_IMPORTED_MODULE_6__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 28
    }, this), whereto === 'fyb' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fyb_fryyourbrain__WEBPACK_IMPORTED_MODULE_7__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // describe word mastermind

  const {
    0: descWi,
    1: setDescWi
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // describe word info

  const {
    0: descPb,
    1: setDescPb
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // describe prison break

  const {
    0: descFyb,
    1: setDescFyb
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // describe fry your brain
  // Acknowledgements description toggles

  const {
    0: descEnable2k,
    1: setDescEnable2k
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // describe ENABLE2K

  const {
    0: descExtendsClass,
    1: setDescExtendsClass
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // describe extendsclass.com

  const {
    0: descFriends,
    1: setDescFriends
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // describe friends

  const MenuOption = props => {
    const toggleDescFlag = () => {
      props.setDescFlag(!props.descFlag);
    };

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "menuButton",
          onClick: () => {
            props.setWhereto(props.targetWhereto);
          },
          children: props.optionText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          id: "toggleDescribeFlag",
          className: `menuToggleDescButton ${props.descFlag ? 'Y' : 'N'}`,
          onClick: () => toggleDescFlag(),
          children: props.descFlag ? "Hide info" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "material-icons",
            children: "help_outline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 45
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined);
  };

  const DescribeWordMastermind = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "menuOptionDescDiv",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "CommenHeaderFontFamily",
          children: "Word Mastermind is a single player code cracking game."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer picks a random word."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You enter guesses until you guess correctly."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer tells you how many letters are correct and how many are in the correct position."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The computer shows you word info for guessed words."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 34
  }, undefined);

  const DescribeWordInfo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "menuOptionDescDiv",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "commonHeaderFontFamily",
          children: "Word Info is a utility to get information on words."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Anagrams - words that use the exact same letters."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Inserts - words that can be made by inserting a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Drops - words that can be made by dropping a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Swaps - words that can be made by swapping a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 28
  }, undefined);

  const DescribePrisonBreak = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "menuOptionDescDiv",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "commonHeaderFontFamily",
          children: "Prison Break is a two player crossword style game."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Prisoners always play first."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The first word played must touch the centre square."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["To free a prisoner, the Prisoners must play a tile on one of the special ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "material-icons pbSquareEscapeHatch",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 84
        }, undefined), " squares."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["When a ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "pbSquareUsedByGuards",
          children: "\xA0?\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 18
        }, undefined), " is played it represents any letter and does not have to remain as the same letter throughout the game."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["The ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "pbSquareUsedByGuards u",
          children: "Q"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 15
        }, undefined), " tile can represent \"Q\" or \"QU\", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The game ends if a player empties their rack."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["The game ends if all the special ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "material-icons pbSquareEscapeHatch",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 44
        }, undefined), " squares are used."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The game ends if both players pass."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 31
  }, undefined);

  const DescribeFryYourBrain = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "menuOptionDescDiv",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "commonHeaderFontFamily",
          children: "Fry Your Brain is a word game that can be contested by two to six players."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "A tile pool is provided, starting with 3 letters. Players take turns."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "When it is your turn, make a word that has all the letters in the tile pool, plus any amount of additional letters."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You cannot reuse a word from the same round."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You cannot merely add an S to a valid word from the same round, unless that word ends in S."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "When a player fails to make a valid word on their turn, the other players take part in the free-for-all."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "In the free-for-all, the goal is to submit the shortest answer you can. All players with the shortest of the answers get points."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The points given equals the number of letters in the tile pool the last time someone gave a valid answer for that round."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Rounds continue until someone reaches the target number of points for the game."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 32
  }, undefined);

  const Acknowledge = props => {
    const toggleDescFlag = () => {
      props.setDescFlag(!props.descFlag);
    };

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        className: "menuAckShort",
        children: props.ackText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: `menuToggleDescButton ${props.descFlag ? 'Y' : 'N'}`,
          onClick: () => toggleDescFlag(),
          children: props.descFlag ? "Hide info" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "material-icons",
            children: "help_outline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 45
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, undefined);
  };

  const DescribeEnable2k = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      colSpan: "2",
      children: "This site uses the Enhanced North American Benchmark LEexicon, millenial edition, a public domain word list that I gratefully acknowledge."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 28
  }, undefined);

  const DescribeExtendsClass = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      colSpan: "2",
      children: ["This site uses Free JSON storage made available by Cyril Bois from France. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://extendsclass.com/contact",
        children: "Click here for more info"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 96
      }, undefined), ". Thanks Cyril!"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 32
  }, undefined);

  const DescribeFriends = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      colSpan: "2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Danielle, Emese, Cesar, Lennon, Bev, Noah, Rach, Sarah, Rod, Sonya, Nolan, Shyrai, Agnes, ..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Thanks for technical help, feedback, suggestions, or simply having fun here. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "material-icons heart",
          children: "favorite"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 87
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 141,
    columnNumber: 27
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Tile Runner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/tileTR.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Tile Runner - Fun with words"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:title",
        content: "Tile Runner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:description",
        content: "A few word games and a word lookup feature"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image",
        content: "/tileTR.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image:width",
        content: "400"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image:height",
        content: "400"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:title",
        content: "Tile Runner - Fun with words"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:image",
        content: "/tileTR.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:card",
        content: "summary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:description",
        content: "A few word games a and a word lookup feature"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:url",
        content: "https://tilerunner.herokuapp.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meat", {
        property: "og:site_name",
        content: "Tile Runner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:locale",
        content: "en_US"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "menuHeaderDiv",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "myHeadingFont",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "pbSquareInner PlayerTile",
          children: "M"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 39
        }, undefined), "enu ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "pbSquareInner PlayerTile",
          children: "O"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 94
        }, undefined), "ptions"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descWm,
          setDescFlag: setDescWm,
          setWhereto: props.setWhereto,
          targetWhereto: "wm",
          optionText: "Word Mastermind"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descWi,
          setDescFlag: setDescWi,
          setWhereto: props.setWhereto,
          targetWhereto: "wi",
          optionText: "Word Info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descPb,
          setDescFlag: setDescPb,
          setWhereto: props.setWhereto,
          targetWhereto: "pb",
          optionText: "Prison Break"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descFyb,
          setDescFlag: setDescFyb,
          setWhereto: props.setWhereto,
          targetWhereto: "fyb",
          optionText: "Fry Your Brain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descWm,
          setDescFlag: setDescWm,
          setWhereto: props.setWhereto,
          targetWhereto: "wm",
          optionText: "Word Mastermind"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descWi,
          setDescFlag: setDescWi,
          setWhereto: props.setWhereto,
          targetWhereto: "wi",
          optionText: "Word Info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuOption, {
          descFlag: descFyb,
          setDescFlag: setDescFyb,
          setWhereto: props.setWhereto,
          targetWhereto: "fyb",
          optionText: "Fry Your Brain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }, undefined), descWm && DescribeWordMastermind, descWi && DescribeWordInfo, descPb && DescribePrisonBreak, descFyb && DescribeFryYourBrain, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "menuHeaderDiv",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "myHeadingFont",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "pbSquareInner PlayerTile",
            children: "S"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 41
          }, undefined), "pecial ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "pbSquareInner PlayerTile",
            children: "T"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 99
          }, undefined), "hanks"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Acknowledge, {
          ackText: "ENABLE2K",
          descFlag: descEnable2k,
          setDescFlag: setDescEnable2k
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }, undefined), descEnable2k && DescribeEnable2k, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Acknowledge, {
          ackText: "extendsclass.com",
          descFlag: descExtendsClass,
          setDescFlag: setDescExtendsClass
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, undefined), descExtendsClass && DescribeExtendsClass, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Acknowledge, {
          ackText: "Friends",
          descFlag: descFriends,
          setDescFlag: setDescFriends
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }, undefined), descFriends && DescribeFriends]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 5
  }, undefined);
};

_s2(Menu, "lzQ0uYErUvXXwtRfdUNjsFRv2uY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIndoZXJldG8iLCJzZXRXaGVyZXRvIiwidXNlU3RhdGUiLCJNZW51IiwicHJvcHMiLCJkZXNjV20iLCJzZXREZXNjV20iLCJkZXNjV2kiLCJzZXREZXNjV2kiLCJkZXNjUGIiLCJzZXREZXNjUGIiLCJkZXNjRnliIiwic2V0RGVzY0Z5YiIsImRlc2NFbmFibGUyayIsInNldERlc2NFbmFibGUyayIsImRlc2NFeHRlbmRzQ2xhc3MiLCJzZXREZXNjRXh0ZW5kc0NsYXNzIiwiZGVzY0ZyaWVuZHMiLCJzZXREZXNjRnJpZW5kcyIsIk1lbnVPcHRpb24iLCJ0b2dnbGVEZXNjRmxhZyIsInNldERlc2NGbGFnIiwiZGVzY0ZsYWciLCJ0YXJnZXRXaGVyZXRvIiwib3B0aW9uVGV4dCIsIkRlc2NyaWJlV29yZE1hc3Rlcm1pbmQiLCJEZXNjcmliZVdvcmRJbmZvIiwiRGVzY3JpYmVQcmlzb25CcmVhayIsIkRlc2NyaWJlRnJ5WW91ckJyYWluIiwiQWNrbm93bGVkZ2UiLCJhY2tUZXh0IiwiRGVzY3JpYmVFbmFibGUyayIsIkRlc2NyaWJlRXh0ZW5kc0NsYXNzIiwiRGVzY3JpYmVGcmllbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLCtDQUFRLENBQUMsTUFBRCxDQUF0QztBQUVBLHNCQUNFO0FBQUEsZUFDR0YsT0FBTyxLQUFLLE1BQVosaUJBQXNCLDhEQUFDLElBQUQ7QUFBTSxnQkFBVSxFQUFFQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRHpCLEVBRUdELE9BQU8sS0FBSyxJQUFaLGlCQUFvQiw4REFBQyxtREFBRDtBQUFn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dC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHtCcm93c2VyVmlldywgTW9iaWxlT25seVZpZXd9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFdvcmRNYXN0ZXJtaW5kIGZyb20gJy4vd20vbWFzdGVybWluZCc7XHJcbmltcG9ydCBXb3JkSW5mbyBmcm9tICcuL3dpL3dvcmRpbmZvJztcclxuaW1wb3J0IFByaXNvbkJyZWFrIGZyb20gJy4vcGIvcHJpc29uYnJlYWsnO1xyXG5pbXBvcnQgRnJ5WW91ckJyYWluIGZyb20gJy4vZnliL2ZyeXlvdXJicmFpbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFt3aGVyZXRvLCBzZXRXaGVyZXRvXSA9IHVzZVN0YXRlKCdtZW51Jyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7d2hlcmV0byA9PT0gJ21lbnUnICYmIDxNZW51IHNldFdoZXJldG89e3NldFdoZXJldG99PjwvTWVudT59XHJcbiAgICAgIHt3aGVyZXRvID09PSAnd20nICYmIDxXb3JkTWFzdGVybWluZCBzZXRXaGVyZXRvPXtzZXRXaGVyZXRvfT48L1dvcmRNYXN0ZXJtaW5kPn1cclxuICAgICAge3doZXJldG8gPT09ICd3aScgJiYgPFdvcmRJbmZvIHNldFdoZXJldG89e3NldFdoZXJldG99PjwvV29yZEluZm8+fVxyXG4gICAgICB7d2hlcmV0byA9PT0gJ3BiJyAmJiA8UHJpc29uQnJlYWsgc2V0V2hlcmV0bz17c2V0V2hlcmV0b30+PC9Qcmlzb25CcmVhaz59XHJcbiAgICAgIHt3aGVyZXRvID09PSAnZnliJyAmJiA8RnJ5WW91ckJyYWluIHNldFdoZXJldG89e3NldFdoZXJldG99PjwvRnJ5WW91ckJyYWluPn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTWVudSA9IChwcm9wcykgPT4ge1xyXG4gIC8vIE1lbnUgb3B0aW9uIHRvZ2dsZSBkZXNjcmlwdGlvbiBmbGFnc1xyXG4gIGNvbnN0IFtkZXNjV20sIHNldERlc2NXbV0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIGRlc2NyaWJlIHdvcmQgbWFzdGVybWluZFxyXG4gIGNvbnN0IFtkZXNjV2ksIHNldERlc2NXaV0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIGRlc2NyaWJlIHdvcmQgaW5mb1xyXG4gIGNvbnN0IFtkZXNjUGIsIHNldERlc2NQYl0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIGRlc2NyaWJlIHByaXNvbiBicmVha1xyXG4gIGNvbnN0IFtkZXNjRnliLCBzZXREZXNjRnliXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgZnJ5IHlvdXIgYnJhaW5cclxuICAvLyBBY2tub3dsZWRnZW1lbnRzIGRlc2NyaXB0aW9uIHRvZ2dsZXNcclxuICBjb25zdCBbZGVzY0VuYWJsZTJrLCBzZXREZXNjRW5hYmxlMmtdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBFTkFCTEUyS1xyXG4gIGNvbnN0IFtkZXNjRXh0ZW5kc0NsYXNzLCBzZXREZXNjRXh0ZW5kc0NsYXNzXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgZXh0ZW5kc2NsYXNzLmNvbVxyXG4gIGNvbnN0IFtkZXNjRnJpZW5kcywgc2V0RGVzY0ZyaWVuZHNdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBmcmllbmRzXHJcblxyXG4gIGNvbnN0IE1lbnVPcHRpb24gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHRvZ2dsZURlc2NGbGFnID0gKCkgPT4ge1xyXG4gICAgICBwcm9wcy5zZXREZXNjRmxhZyghcHJvcHMuZGVzY0ZsYWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1lbnVCdXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7cHJvcHMuc2V0V2hlcmV0byhwcm9wcy50YXJnZXRXaGVyZXRvKTt9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMub3B0aW9uVGV4dH1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cInRvZ2dsZURlc2NyaWJlRmxhZ1wiIGNsYXNzTmFtZT17YG1lbnVUb2dnbGVEZXNjQnV0dG9uICR7cHJvcHMuZGVzY0ZsYWcgPyAnWScgOiAnTid9YH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRGVzY0ZsYWcoKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmRlc2NGbGFnID8gXCJIaWRlIGluZm9cIiA6IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+aGVscF9vdXRsaW5lPC9pPn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBEZXNjcmliZVdvcmRNYXN0ZXJtaW5kID0gPGRpdiBjbGFzc05hbWU9XCJtZW51T3B0aW9uRGVzY0RpdlwiPlxyXG4gICAgPHVsIGNsYXNzTmFtZT1cImNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgPGxpPjxoMiBjbGFzc05hbWU9XCJDb21tZW5IZWFkZXJGb250RmFtaWx5XCI+V29yZCBNYXN0ZXJtaW5kIGlzIGEgc2luZ2xlIHBsYXllciBjb2RlIGNyYWNraW5nIGdhbWUuPC9oMj48L2xpPlxyXG4gICAgICA8bGk+VGhlIGNvbXB1dGVyIHBpY2tzIGEgcmFuZG9tIHdvcmQuPC9saT5cclxuICAgICAgPGxpPllvdSBlbnRlciBndWVzc2VzIHVudGlsIHlvdSBndWVzcyBjb3JyZWN0bHkuPC9saT5cclxuICAgICAgPGxpPlRoZSBjb21wdXRlciB0ZWxscyB5b3UgaG93IG1hbnkgbGV0dGVycyBhcmUgY29ycmVjdCBhbmQgaG93IG1hbnkgYXJlIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uLjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgY29tcHV0ZXIgd2lsbCBzdGFydCB3aXRoIGxlbmd0aCAyLCBhbmQgYWRkIDEgZWFjaCByb3VuZCB1cCB0byBsZW5ndGggOC4gVGhlbiBpdCBzdGFydHMgYSBuZXcgc2V0IGJhY2sgYXQgMi48L2xpPlxyXG4gICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgPGxpPlRoZSBjb21wdXRlciBzaG93cyB5b3Ugd29yZCBpbmZvIGZvciBndWVzc2VkIHdvcmRzLjwvbGk+XHJcbiAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PjtcclxuXHJcbiAgY29uc3QgRGVzY3JpYmVXb3JkSW5mbyA9IDxkaXYgY2xhc3NOYW1lPVwibWVudU9wdGlvbkRlc2NEaXZcIj5cclxuICAgIDx1bCBjbGFzc05hbWU9XCJjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgIDxsaT48aDIgY2xhc3NOYW1lPVwiY29tbW9uSGVhZGVyRm9udEZhbWlseVwiPldvcmQgSW5mbyBpcyBhIHV0aWxpdHkgdG8gZ2V0IGluZm9ybWF0aW9uIG9uIHdvcmRzLjwvaDI+PC9saT5cclxuICAgICAgPGxpPkFuYWdyYW1zIC0gd29yZHMgdGhhdCB1c2UgdGhlIGV4YWN0IHNhbWUgbGV0dGVycy48L2xpPlxyXG4gICAgICA8bGk+SW5zZXJ0cyAtIHdvcmRzIHRoYXQgY2FuIGJlIG1hZGUgYnkgaW5zZXJ0aW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgICA8bGk+RHJvcHMgLSB3b3JkcyB0aGF0IGNhbiBiZSBtYWRlIGJ5IGRyb3BwaW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgICA8bGk+U3dhcHMgLSB3b3JkcyB0aGF0IGNhbiBiZSBtYWRlIGJ5IHN3YXBwaW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj47XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlUHJpc29uQnJlYWsgPSA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVPcHRpb25EZXNjRGl2XCI+XHJcbiAgICA8dWwgY2xhc3NOYW1lPVwiY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICA8bGk+PGgyIGNsYXNzTmFtZT1cImNvbW1vbkhlYWRlckZvbnRGYW1pbHlcIj5Qcmlzb24gQnJlYWsgaXMgYSB0d28gcGxheWVyIGNyb3Nzd29yZCBzdHlsZSBnYW1lLjwvaDI+PC9saT5cclxuICAgICAgPGxpPllvdSBwbGF5IHR3byBnYW1lcywgb25lIGFzIHRoZSBQcmlzb25lcnMgYW5kIG9uZSBhcyB0aGUgR3VhcmRzLiBXaG9ldmVyIGZyZWVzIHRoZSBtb3N0IHByaXNvbmVycyB3aW5zLjwvbGk+XHJcbiAgICAgIDxsaT5Qcmlzb25lcnMgYWx3YXlzIHBsYXkgZmlyc3QuPC9saT5cclxuICAgICAgPGxpPlRoZSBmaXJzdCB3b3JkIHBsYXllZCBtdXN0IHRvdWNoIHRoZSBjZW50cmUgc3F1YXJlLjwvbGk+XHJcbiAgICAgIDxsaT5UbyBmcmVlIGEgcHJpc29uZXIsIHRoZSBQcmlzb25lcnMgbXVzdCBwbGF5IGEgdGlsZSBvbiBvbmUgb2YgdGhlIHNwZWNpYWwgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcGJTcXVhcmVFc2NhcGVIYXRjaFwiPnJ1bl9jaXJjbGU8L3NwYW4+IHNxdWFyZXMuPC9saT5cclxuICAgICAgPGxpPldoZW4gYSA8c3BhbiBjbGFzc05hbWU9XCJwYlNxdWFyZVVzZWRCeUd1YXJkc1wiPiZuYnNwOz8mbmJzcDs8L3NwYW4+IGlzIHBsYXllZCBpdCByZXByZXNlbnRzIGFueSBsZXR0ZXIgYW5kIGRvZXMgbm90IGhhdmUgdG8gcmVtYWluIGFzIHRoZSBzYW1lIGxldHRlciB0aHJvdWdob3V0IHRoZSBnYW1lLjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgPHNwYW4gY2xhc3NOYW1lPVwicGJTcXVhcmVVc2VkQnlHdWFyZHMgdVwiPlE8L3NwYW4+IHRpbGUgY2FuIHJlcHJlc2VudCBcIlFcIiBvciBcIlFVXCIsIGRvZXMgbm90IGhhdmUgdG8gYmUgdGhlIHNhbWUgaW4gYm90aCBkaXJlY3Rpb25zLCBhbmQgZG9lcyBub3QgaGF2ZSB0byByZW1haW4gYXQgdGhlIHNhbWUgZGVzaWduYXRpb24gdGhyb3VnaG91dCB0aGUgZ2FtZS48L2xpPlxyXG4gICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBhIHBsYXllciBlbXB0aWVzIHRoZWlyIHJhY2suPC9saT5cclxuICAgICAgPGxpPlRoZSBnYW1lIGVuZHMgaWYgYWxsIHRoZSBzcGVjaWFsIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHBiU3F1YXJlRXNjYXBlSGF0Y2hcIj5ydW5fY2lyY2xlPC9zcGFuPiBzcXVhcmVzIGFyZSB1c2VkLjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgZ2FtZSBlbmRzIGlmIGJvdGggcGxheWVycyBwYXNzLjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PjtcclxuXHJcbiAgY29uc3QgRGVzY3JpYmVGcnlZb3VyQnJhaW4gPSA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVPcHRpb25EZXNjRGl2XCI+XHJcbiAgICA8dWwgY2xhc3NOYW1lPVwiY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICA8bGk+PGgyIGNsYXNzTmFtZT1cImNvbW1vbkhlYWRlckZvbnRGYW1pbHlcIj5GcnkgWW91ciBCcmFpbiBpcyBhIHdvcmQgZ2FtZSB0aGF0IGNhbiBiZSBjb250ZXN0ZWQgYnkgdHdvIHRvIHNpeCBwbGF5ZXJzLjwvaDI+PC9saT5cclxuICAgICAgPGxpPkEgdGlsZSBwb29sIGlzIHByb3ZpZGVkLCBzdGFydGluZyB3aXRoIDMgbGV0dGVycy4gUGxheWVycyB0YWtlIHR1cm5zLjwvbGk+XHJcbiAgICAgIDxsaT5XaGVuIGl0IGlzIHlvdXIgdHVybiwgbWFrZSBhIHdvcmQgdGhhdCBoYXMgYWxsIHRoZSBsZXR0ZXJzIGluIHRoZSB0aWxlIHBvb2wsIHBsdXMgYW55IGFtb3VudCBvZiBhZGRpdGlvbmFsIGxldHRlcnMuPC9saT5cclxuICAgICAgPGxpPllvdSBjYW5ub3QgcmV1c2UgYSB3b3JkIGZyb20gdGhlIHNhbWUgcm91bmQuPC9saT5cclxuICAgICAgPGxpPllvdSBjYW5ub3QgbWVyZWx5IGFkZCBhbiBTIHRvIGEgdmFsaWQgd29yZCBmcm9tIHRoZSBzYW1lIHJvdW5kLCB1bmxlc3MgdGhhdCB3b3JkIGVuZHMgaW4gUy48L2xpPlxyXG4gICAgICA8bGk+V2hlbiBhIHBsYXllciBmYWlscyB0byBtYWtlIGEgdmFsaWQgd29yZCBvbiB0aGVpciB0dXJuLCB0aGUgb3RoZXIgcGxheWVycyB0YWtlIHBhcnQgaW4gdGhlIGZyZWUtZm9yLWFsbC48L2xpPlxyXG4gICAgICA8bGk+SW4gdGhlIGZyZWUtZm9yLWFsbCwgdGhlIGdvYWwgaXMgdG8gc3VibWl0IHRoZSBzaG9ydGVzdCBhbnN3ZXIgeW91IGNhbi4gQWxsIHBsYXllcnMgd2l0aCB0aGUgc2hvcnRlc3Qgb2YgdGhlIGFuc3dlcnMgZ2V0IHBvaW50cy48L2xpPlxyXG4gICAgICA8bGk+VGhlIHBvaW50cyBnaXZlbiBlcXVhbHMgdGhlIG51bWJlciBvZiBsZXR0ZXJzIGluIHRoZSB0aWxlIHBvb2wgdGhlIGxhc3QgdGltZSBzb21lb25lIGdhdmUgYSB2YWxpZCBhbnN3ZXIgZm9yIHRoYXQgcm91bmQuPC9saT5cclxuICAgICAgPGxpPlJvdW5kcyBjb250aW51ZSB1bnRpbCBzb21lb25lIHJlYWNoZXMgdGhlIHRhcmdldCBudW1iZXIgb2YgcG9pbnRzIGZvciB0aGUgZ2FtZS48L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj47XHJcblxyXG4gIGNvbnN0IEFja25vd2xlZGdlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB0b2dnbGVEZXNjRmxhZyA9ICgpID0+IHtcclxuICAgICAgcHJvcHMuc2V0RGVzY0ZsYWcoIXByb3BzLmRlc2NGbGFnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1lbnVBY2tTaG9ydFwiPlxyXG4gICAgICAgICAgICB7cHJvcHMuYWNrVGV4dH1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgbWVudVRvZ2dsZURlc2NCdXR0b24gJHtwcm9wcy5kZXNjRmxhZyA/ICdZJyA6ICdOJ31gfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVEZXNjRmxhZygpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuZGVzY0ZsYWcgPyBcIkhpZGUgaW5mb1wiIDogPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwX291dGxpbmU8L2k+fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlRW5hYmxlMmsgPSA8dHI+XHJcbiAgICA8dGQgY29sU3Bhbj1cIjJcIj5UaGlzIHNpdGUgdXNlcyB0aGUgRW5oYW5jZWQgTm9ydGggQW1lcmljYW4gQmVuY2htYXJrIExFZXhpY29uLCBtaWxsZW5pYWwgZWRpdGlvbiwgYSBwdWJsaWMgZG9tYWluIHdvcmQgbGlzdCB0aGF0IEkgZ3JhdGVmdWxseSBhY2tub3dsZWRnZS48L3RkPlxyXG4gIDwvdHI+XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlRXh0ZW5kc0NsYXNzID0gPHRyPlxyXG4gICAgPHRkIGNvbFNwYW49XCIyXCI+VGhpcyBzaXRlIHVzZXMgRnJlZSBKU09OIHN0b3JhZ2UgbWFkZSBhdmFpbGFibGUgYnkgQ3lyaWwgQm9pcyBmcm9tIEZyYW5jZS4gPGEgaHJlZj0naHR0cHM6Ly9leHRlbmRzY2xhc3MuY29tL2NvbnRhY3QnPkNsaWNrIGhlcmUgZm9yIG1vcmUgaW5mbzwvYT4uIFRoYW5rcyBDeXJpbCE8L3RkPlxyXG4gIDwvdHI+XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlRnJpZW5kcyA9IDx0cj5cclxuICAgIDx0ZCBjb2xTcGFuPVwiMlwiPlxyXG4gICAgICA8cD5EYW5pZWxsZSwgRW1lc2UsIENlc2FyLCBMZW5ub24sIEJldiwgTm9haCwgUmFjaCwgU2FyYWgsIFJvZCwgU29ueWEsIE5vbGFuLCBTaHlyYWksIEFnbmVzLCAuLi48L3A+XHJcbiAgICAgIDxwPlRoYW5rcyBmb3IgdGVjaG5pY2FsIGhlbHAsIGZlZWRiYWNrLCBzdWdnZXN0aW9ucywgb3Igc2ltcGx5IGhhdmluZyBmdW4gaGVyZS4gPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgaGVhcnRcIj5mYXZvcml0ZTwvaT48L3A+XHJcbiAgICA8L3RkPlxyXG4gIDwvdHI+XHJcblxyXG5yZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlRpbGUgUnVubmVyPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi90aWxlVFIuaWNvXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGlsZSBSdW5uZXIgLSBGdW4gd2l0aCB3b3Jkc1wiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJUaWxlIFJ1bm5lclwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBIGZldyB3b3JkIGdhbWVzIGFuZCBhIHdvcmQgbG9va3VwIGZlYXR1cmVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiL3RpbGVUUi5wbmdcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiNDAwXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCI0MDBcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIlRpbGUgUnVubmVyIC0gRnVuIHdpdGggd29yZHNcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD1cIi90aWxlVFIucG5nXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkEgZmV3IHdvcmQgZ2FtZXMgYSBhbmQgYSB3b3JkIGxvb2t1cCBmZWF0dXJlXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbVwiIC8+XHJcbiAgICAgICAgPG1lYXQgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiVGlsZSBSdW5uZXJcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImVuX1VTXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51SGVhZGVyRGl2XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15SGVhZGluZ0ZvbnRcIj48c3BhbiBjbGFzc05hbWU9XCJwYlNxdWFyZUlubmVyIFBsYXllclRpbGVcIj5NPC9zcGFuPmVudSA8c3BhbiBjbGFzc05hbWU9XCJwYlNxdWFyZUlubmVyIFBsYXllclRpbGVcIj5PPC9zcGFuPnB0aW9uczwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8TWVudU9wdGlvbiBkZXNjRmxhZz17ZGVzY1dtfSBzZXREZXNjRmxhZz17c2V0RGVzY1dtfSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSd3bScgb3B0aW9uVGV4dD0nV29yZCBNYXN0ZXJtaW5kJy8+XHJcbiAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjV2l9IHNldERlc2NGbGFnPXtzZXREZXNjV2l9IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99IHRhcmdldFdoZXJldG89J3dpJyBvcHRpb25UZXh0PSdXb3JkIEluZm8nLz5cclxuICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NQYn0gc2V0RGVzY0ZsYWc9e3NldERlc2NQYn0gc2V0V2hlcmV0bz17cHJvcHMuc2V0V2hlcmV0b30gdGFyZ2V0V2hlcmV0bz0ncGInIG9wdGlvblRleHQ9J1ByaXNvbiBCcmVhaycvPlxyXG4gICAgICAgICAgICA8TWVudU9wdGlvbiBkZXNjRmxhZz17ZGVzY0Z5Yn0gc2V0RGVzY0ZsYWc9e3NldERlc2NGeWJ9IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99IHRhcmdldFdoZXJldG89J2Z5Yicgb3B0aW9uVGV4dD0nRnJ5IFlvdXIgQnJhaW4nLz5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgICA8TW9iaWxlT25seVZpZXc+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8TWVudU9wdGlvbiBkZXNjRmxhZz17ZGVzY1dtfSBzZXREZXNjRmxhZz17c2V0RGVzY1dtfSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSd3bScgb3B0aW9uVGV4dD0nV29yZCBNYXN0ZXJtaW5kJy8+XHJcbiAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjV2l9IHNldERlc2NGbGFnPXtzZXREZXNjV2l9IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99IHRhcmdldFdoZXJldG89J3dpJyBvcHRpb25UZXh0PSdXb3JkIEluZm8nLz5cclxuICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NGeWJ9IHNldERlc2NGbGFnPXtzZXREZXNjRnlifSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSdmeWInIG9wdGlvblRleHQ9J0ZyeSBZb3VyIEJyYWluJy8+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9Nb2JpbGVPbmx5Vmlldz5cclxuICAgICAge2Rlc2NXbSAmJiBEZXNjcmliZVdvcmRNYXN0ZXJtaW5kfVxyXG4gICAgICB7ZGVzY1dpICYmIERlc2NyaWJlV29yZEluZm99XHJcbiAgICAgIHtkZXNjUGIgJiYgRGVzY3JpYmVQcmlzb25CcmVha31cclxuICAgICAge2Rlc2NGeWIgJiYgRGVzY3JpYmVGcnlZb3VyQnJhaW59XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51SGVhZGVyRGl2XCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXlIZWFkaW5nRm9udFwiPjxzcGFuIGNsYXNzTmFtZT1cInBiU3F1YXJlSW5uZXIgUGxheWVyVGlsZVwiPlM8L3NwYW4+cGVjaWFsIDxzcGFuIGNsYXNzTmFtZT1cInBiU3F1YXJlSW5uZXIgUGxheWVyVGlsZVwiPlQ8L3NwYW4+aGFua3M8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgIDxBY2tub3dsZWRnZSBhY2tUZXh0PSdFTkFCTEUySycgZGVzY0ZsYWc9e2Rlc2NFbmFibGUya30gc2V0RGVzY0ZsYWc9e3NldERlc2NFbmFibGUya30vPlxyXG4gICAgICAgICAge2Rlc2NFbmFibGUyayAmJiBEZXNjcmliZUVuYWJsZTJrfVxyXG4gICAgICAgICAgPEFja25vd2xlZGdlIGFja1RleHQ9J2V4dGVuZHNjbGFzcy5jb20nIGRlc2NGbGFnPXtkZXNjRXh0ZW5kc0NsYXNzfSBzZXREZXNjRmxhZz17c2V0RGVzY0V4dGVuZHNDbGFzc30vPlxyXG4gICAgICAgICAge2Rlc2NFeHRlbmRzQ2xhc3MgJiYgRGVzY3JpYmVFeHRlbmRzQ2xhc3N9XHJcbiAgICAgICAgICA8QWNrbm93bGVkZ2UgYWNrVGV4dD0nRnJpZW5kcycgZGVzY0ZsYWc9e2Rlc2NGcmllbmRzfSBzZXREZXNjRmxhZz17c2V0RGVzY0ZyaWVuZHN9Lz5cclxuICAgICAgICAgIHtkZXNjRnJpZW5kcyAmJiBEZXNjcmliZUZyaWVuZHN9XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9