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
// import Link from 'next/link'







function Home() {
  _s();

  const {
    0: whereto,
    1: setWhereto
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('menu'); // const [coderMsg, setCoderMsg] = useState('Loading');
  // const [coderMsg2, setCoderMsg2] = useState('Loading');
  // const getCoderMsg = async () => {
  //   let url = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000/evtest' : 'https://tilerunner.herokuapp.com/evtest'
  //   const res = await fetch(url);
  //   const jres = await res.json();
  //   setCoderMsg(`${jres.evtest}`);
  //   setCoderMsg2(`${jres.lextest}`);
  // }
  // useEffect(() => {
  //   getCoderMsg();
  // },[])

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [whereto === 'menu' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Menu, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 30
    }, this), whereto === 'wm' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wm_mastermind__WEBPACK_IMPORTED_MODULE_4__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 28
    }, this), whereto === 'wi' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wi_wordinfo__WEBPACK_IMPORTED_MODULE_5__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 28
    }, this), whereto === 'pb' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_prisonbreak__WEBPACK_IMPORTED_MODULE_6__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 28
    }, this), whereto === 'fyb' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fyb_fryyourbrain__WEBPACK_IMPORTED_MODULE_7__.default, {
      setWhereto: setWhereto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(Home, "X4zKO771MBoQLHMaoj5H2Dl1VSk=");

_c = Home;

const Menu = props => {
  _s2();

  const menuButtonClassName = 'w3-button w3-green w3-hover-black w3-border w3-round-xxlarge w3-margin';
  const hideButtonClassName = 'w3-button w3-black w3-border w3-animate-left w3-margin';
  const showButtonClassName = 'w3-button w3-hover-black mymaterialicon w3-animate-right w3-round-xxlarge w3-margin';
  const menuOptDescCard = 'w3-green w3-animate-right';
  const ackTextClassName = 'w3-padding';
  const ackDescCard = 'w3-animate-right';
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
          className: menuButtonClassName,
          onClick: () => {
            props.setWhereto(props.targetWhereto);
          },
          children: props.optionText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          id: "toggleDescribeFlag",
          className: props.descFlag ? hideButtonClassName : showButtonClassName,
          onClick: () => toggleDescFlag(),
          children: props.descFlag ? "Hide info" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "material-icons",
            children: "help_outline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 45
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined);
  };

  const DescribeWordMastermind = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: menuOptDescCard,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "w3-ul commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "CommenHeaderFontFamily",
          children: "Word Mastermind is a single player code cracking game."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer picks a random word."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You enter guesses until you guess correctly."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer tells you how many letters are correct and how many are in the correct position."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The computer shows you word info for guessed words."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 34
  }, undefined);

  const DescribeWordInfo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: menuOptDescCard,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "w3-ul commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "commonHeaderFontFamily",
          children: "Word Info is a utility to get information on words."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Anagrams - words that use the exact same letters."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Inserts - words that can be made by inserting a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Drops - words that can be made by dropping a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Swaps - words that can be made by swapping a single letter."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 28
  }, undefined);

  const DescribePrisonBreak = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: menuOptDescCard,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "w3-ul commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "commonHeaderFontFamily",
          children: "Prison Break is a two player crossword style game."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Prisoners always play first."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The first word played must touch the centre square."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["To free a prisoner, the Prisoners must play a tile on one of the special ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "material-icons pbSquareEscapeHatch",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 84
        }, undefined), " squares."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["When a ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "pbSquareUsedByGuards",
          children: "\xA0?\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 18
        }, undefined), " is played it represents any letter and does not have to remain as the same letter throughout the game."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["The ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "pbSquareUsedByGuards u",
          children: "Q"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 15
        }, undefined), " tile can represent \"Q\" or \"QU\", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The game ends if a player empties their rack."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["The game ends if all the special ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "material-icons pbSquareEscapeHatch",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 44
        }, undefined), " squares are used."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The game ends if both players pass."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 31
  }, undefined);

  const DescribeFryYourBrain = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: menuOptDescCard,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "w3-ul commonFontFamily",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "commonHeaderFontFamily",
          children: "Fry Your Brain is a word game that can be contested by two to six players."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "A tile pool is provided, starting with 3 letters. Players take turns."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "When it is your turn, make a word that has all the letters in the tile pool, plus any amount of additional letters."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "When a player fails to make a valid word on their turn, the other players take part in the free-for-all."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "In the free-for-all, the goal is to submit the shortest answer you can. All players with the shortest of the answers get points."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "The points given equals the number of letters in the tile pool the last time someone gave a valid answer for that round."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Rounds continue until someone reaches the target number of points for the game."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 32
  }, undefined);

  const Acknowledge = props => {
    const toggleDescFlag = () => {
      props.setDescFlag(!props.descFlag);
    };

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-cell w3-blue",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: ackTextClassName,
        children: [props.ackText, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: props.descFlag ? hideButtonClassName : showButtonClassName,
          onClick: () => toggleDescFlag(),
          children: props.descFlag ? "Hide info" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "material-icons",
            children: "help_outline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 45
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, undefined);
  };

  const DescribeEnable2k = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: ackDescCard,
    children: "This site uses the Enhanced North American Benchmark LEexicon, millenial edition, a public domain word list that I gratefully acknowledge."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 148,
    columnNumber: 28
  }, undefined);

  const DescribeExtendsClass = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: ackDescCard,
    children: ["This site uses Free JSON storage made available by Cyril Bois from France. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "https://extendsclass.com/contact",
      children: "Click here for more info"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 80
    }, undefined), ". Thanks Cyril!"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 32
  }, undefined);

  const DescribeFriends = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: ackDescCard,
    children: ["Danielle, Emese, Cesar, Bev, Sarah, Rod, Sonya, and Nolan. Thanks for technical help and/or feedback and suggestions.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: "material-icons",
      children: "heart"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 156,
    columnNumber: 27
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Tile Runner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container w3-teal",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "myHeadingFont",
        children: "Tile Runner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "w3-table w3-responsive",
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
        className: "w3-table w3-responsive",
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
      className: "w3-panel",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Acknowledgements:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Acknowledge, {
        ackText: "ENABLE2K",
        descFlag: descEnable2k,
        setDescFlag: setDescEnable2k
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, undefined), descEnable2k && DescribeEnable2k, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Acknowledge, {
        ackText: "extendsclass.com",
        descFlag: descExtendsClass,
        setDescFlag: setDescExtendsClass
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }, undefined), descExtendsClass && DescribeExtendsClass, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Acknowledge, {
        ackText: "Friends",
        descFlag: descFriends,
        setDescFlag: setDescFriends
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, undefined), descFriends && DescribeFriends]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 162,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIndoZXJldG8iLCJzZXRXaGVyZXRvIiwidXNlU3RhdGUiLCJNZW51IiwicHJvcHMiLCJtZW51QnV0dG9uQ2xhc3NOYW1lIiwiaGlkZUJ1dHRvbkNsYXNzTmFtZSIsInNob3dCdXR0b25DbGFzc05hbWUiLCJtZW51T3B0RGVzY0NhcmQiLCJhY2tUZXh0Q2xhc3NOYW1lIiwiYWNrRGVzY0NhcmQiLCJkZXNjV20iLCJzZXREZXNjV20iLCJkZXNjV2kiLCJzZXREZXNjV2kiLCJkZXNjUGIiLCJzZXREZXNjUGIiLCJkZXNjRnliIiwic2V0RGVzY0Z5YiIsImRlc2NFbmFibGUyayIsInNldERlc2NFbmFibGUyayIsImRlc2NFeHRlbmRzQ2xhc3MiLCJzZXREZXNjRXh0ZW5kc0NsYXNzIiwiZGVzY0ZyaWVuZHMiLCJzZXREZXNjRnJpZW5kcyIsIk1lbnVPcHRpb24iLCJ0b2dnbGVEZXNjRmxhZyIsInNldERlc2NGbGFnIiwiZGVzY0ZsYWciLCJ0YXJnZXRXaGVyZXRvIiwib3B0aW9uVGV4dCIsIkRlc2NyaWJlV29yZE1hc3Rlcm1pbmQiLCJEZXNjcmliZVdvcmRJbmZvIiwiRGVzY3JpYmVQcmlzb25CcmVhayIsIkRlc2NyaWJlRnJ5WW91ckJyYWluIiwiQWNrbm93bGVkZ2UiLCJhY2tUZXh0IiwiRGVzY3JpYmVFbmFibGUyayIsIkRlc2NyaWJlRXh0ZW5kc0NsYXNzIiwiRGVzY3JpYmVGcmllbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsK0NBQVEsQ0FBQyxNQUFELENBQXRDLENBRDZCLENBRTdCO0FBQ0E7QUFDQTtBQUNB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QkFBUSxFQUFFZixZQUExQztBQUF3RCxtQkFBVyxFQUFFQztBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLEVBR0dELFlBQVksSUFBSWtCLGdCQUhuQixlQUlFLDhEQUFDLFdBQUQ7QUFBYSxlQUFPLEVBQUMsa0JBQXJCO0FBQXdDLGdCQUFRLEVBQUVoQixnQkFBbEQ7QUFBb0UsbUJBQVcsRUFBRUM7QUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixFQUtHRCxnQkFBZ0IsSUFBSWlCLG9CQUx2QixlQU1FLDhEQUFDLFdBQUQ7QUFBYSxlQUFPLEVBQUMsU0FBckI7QUFBK0IsZ0JBQVEsRUFBRWYsV0FBekM7QUFBc0QsbUJBQVcsRUFBRUM7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixFQU9HRCxXQUFXLElBQUlnQixlQVBsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBd0NDLENBcEtEOztJQUFNcEMsSTs7TUFBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMmVjMmY0MjY1NzM2YTA3ZmNkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtCcm93c2VyVmlldywgTW9iaWxlT25seVZpZXd9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnXHJcbmltcG9ydCBSZWFjdCwgeyBfdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFdvcmRNYXN0ZXJtaW5kIGZyb20gJy4vd20vbWFzdGVybWluZCc7XHJcbmltcG9ydCBXb3JkSW5mbyBmcm9tICcuL3dpL3dvcmRpbmZvJztcclxuaW1wb3J0IFByaXNvbkJyZWFrIGZyb20gJy4vcGIvcHJpc29uYnJlYWsnO1xyXG5pbXBvcnQgRnJ5WW91ckJyYWluIGZyb20gJy4vZnliL2ZyeXlvdXJicmFpbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFt3aGVyZXRvLCBzZXRXaGVyZXRvXSA9IHVzZVN0YXRlKCdtZW51Jyk7XHJcbiAgLy8gY29uc3QgW2NvZGVyTXNnLCBzZXRDb2Rlck1zZ10gPSB1c2VTdGF0ZSgnTG9hZGluZycpO1xyXG4gIC8vIGNvbnN0IFtjb2Rlck1zZzIsIHNldENvZGVyTXNnMl0gPSB1c2VTdGF0ZSgnTG9hZGluZycpO1xyXG4gIC8vIGNvbnN0IGdldENvZGVyTXNnID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9ldnRlc3QnIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL2V2dGVzdCdcclxuICAvLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgLy8gICBjb25zdCBqcmVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAvLyAgIHNldENvZGVyTXNnKGAke2pyZXMuZXZ0ZXN0fWApO1xyXG4gIC8vICAgc2V0Q29kZXJNc2cyKGAke2pyZXMubGV4dGVzdH1gKTtcclxuICAvLyB9XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGdldENvZGVyTXNnKCk7XHJcbiAgLy8gfSxbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt3aGVyZXRvID09PSAnbWVudScgJiYgPE1lbnUgc2V0V2hlcmV0bz17c2V0V2hlcmV0b30+PC9NZW51Pn1cclxuICAgICAge3doZXJldG8gPT09ICd3bScgJiYgPFdvcmRNYXN0ZXJtaW5kIHNldFdoZXJldG89e3NldFdoZXJldG99PjwvV29yZE1hc3Rlcm1pbmQ+fVxyXG4gICAgICB7d2hlcmV0byA9PT0gJ3dpJyAmJiA8V29yZEluZm8gc2V0V2hlcmV0bz17c2V0V2hlcmV0b30+PC9Xb3JkSW5mbz59XHJcbiAgICAgIHt3aGVyZXRvID09PSAncGInICYmIDxQcmlzb25CcmVhayBzZXRXaGVyZXRvPXtzZXRXaGVyZXRvfT48L1ByaXNvbkJyZWFrPn1cclxuICAgICAge3doZXJldG8gPT09ICdmeWInICYmIDxGcnlZb3VyQnJhaW4gc2V0V2hlcmV0bz17c2V0V2hlcmV0b30+PC9GcnlZb3VyQnJhaW4+fVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBNZW51ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgbWVudUJ1dHRvbkNsYXNzTmFtZSA9ICd3My1idXR0b24gdzMtZ3JlZW4gdzMtaG92ZXItYmxhY2sgdzMtYm9yZGVyIHczLXJvdW5kLXh4bGFyZ2UgdzMtbWFyZ2luJztcclxuICBjb25zdCBoaWRlQnV0dG9uQ2xhc3NOYW1lID0gJ3czLWJ1dHRvbiB3My1ibGFjayB3My1ib3JkZXIgdzMtYW5pbWF0ZS1sZWZ0IHczLW1hcmdpbic7XHJcbiAgY29uc3Qgc2hvd0J1dHRvbkNsYXNzTmFtZSA9ICd3My1idXR0b24gdzMtaG92ZXItYmxhY2sgbXltYXRlcmlhbGljb24gdzMtYW5pbWF0ZS1yaWdodCB3My1yb3VuZC14eGxhcmdlIHczLW1hcmdpbic7XHJcbiAgY29uc3QgbWVudU9wdERlc2NDYXJkID0gJ3czLWdyZWVuIHczLWFuaW1hdGUtcmlnaHQnO1xyXG4gIGNvbnN0IGFja1RleHRDbGFzc05hbWUgPSAndzMtcGFkZGluZyc7XHJcbiAgY29uc3QgYWNrRGVzY0NhcmQgPSAndzMtYW5pbWF0ZS1yaWdodCc7XHJcbiAgXHJcbiAgY29uc3QgW2Rlc2NXbSwgc2V0RGVzY1dtXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgd29yZCBtYXN0ZXJtaW5kXHJcbiAgY29uc3QgW2Rlc2NXaSwgc2V0RGVzY1dpXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgd29yZCBpbmZvXHJcbiAgY29uc3QgW2Rlc2NQYiwgc2V0RGVzY1BiXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgcHJpc29uIGJyZWFrXHJcbiAgY29uc3QgW2Rlc2NGeWIsIHNldERlc2NGeWJdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBmcnkgeW91ciBicmFpblxyXG5cclxuICBjb25zdCBbZGVzY0VuYWJsZTJrLCBzZXREZXNjRW5hYmxlMmtdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBFTkFCTEUyS1xyXG4gIGNvbnN0IFtkZXNjRXh0ZW5kc0NsYXNzLCBzZXREZXNjRXh0ZW5kc0NsYXNzXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgZXh0ZW5kc2NsYXNzLmNvbVxyXG4gIGNvbnN0IFtkZXNjRnJpZW5kcywgc2V0RGVzY0ZyaWVuZHNdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBmcmllbmRzXHJcblxyXG4gIGNvbnN0IE1lbnVPcHRpb24gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHRvZ2dsZURlc2NGbGFnID0gKCkgPT4ge1xyXG4gICAgICBwcm9wcy5zZXREZXNjRmxhZyghcHJvcHMuZGVzY0ZsYWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17bWVudUJ1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3Byb3BzLnNldFdoZXJldG8ocHJvcHMudGFyZ2V0V2hlcmV0byk7fX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLm9wdGlvblRleHR9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJ0b2dnbGVEZXNjcmliZUZsYWdcIiBjbGFzc05hbWU9e3Byb3BzLmRlc2NGbGFnID8gaGlkZUJ1dHRvbkNsYXNzTmFtZSA6IHNob3dCdXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURlc2NGbGFnKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5kZXNjRmxhZyA/IFwiSGlkZSBpbmZvXCIgOiA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmhlbHBfb3V0bGluZTwvaT59XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgRGVzY3JpYmVXb3JkTWFzdGVybWluZCA9IDxkaXYgY2xhc3NOYW1lPXttZW51T3B0RGVzY0NhcmR9PlxyXG4gICAgPHVsIGNsYXNzTmFtZT1cInczLXVsIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgPGxpPjxoMiBjbGFzc05hbWU9XCJDb21tZW5IZWFkZXJGb250RmFtaWx5XCI+V29yZCBNYXN0ZXJtaW5kIGlzIGEgc2luZ2xlIHBsYXllciBjb2RlIGNyYWNraW5nIGdhbWUuPC9oMj48L2xpPlxyXG4gICAgICA8bGk+VGhlIGNvbXB1dGVyIHBpY2tzIGEgcmFuZG9tIHdvcmQuPC9saT5cclxuICAgICAgPGxpPllvdSBlbnRlciBndWVzc2VzIHVudGlsIHlvdSBndWVzcyBjb3JyZWN0bHkuPC9saT5cclxuICAgICAgPGxpPlRoZSBjb21wdXRlciB0ZWxscyB5b3UgaG93IG1hbnkgbGV0dGVycyBhcmUgY29ycmVjdCBhbmQgaG93IG1hbnkgYXJlIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uLjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgY29tcHV0ZXIgd2lsbCBzdGFydCB3aXRoIGxlbmd0aCAyLCBhbmQgYWRkIDEgZWFjaCByb3VuZCB1cCB0byBsZW5ndGggOC4gVGhlbiBpdCBzdGFydHMgYSBuZXcgc2V0IGJhY2sgYXQgMi48L2xpPlxyXG4gICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgPGxpPlRoZSBjb21wdXRlciBzaG93cyB5b3Ugd29yZCBpbmZvIGZvciBndWVzc2VkIHdvcmRzLjwvbGk+XHJcbiAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PjtcclxuXHJcbiAgY29uc3QgRGVzY3JpYmVXb3JkSW5mbyA9IDxkaXYgY2xhc3NOYW1lPXttZW51T3B0RGVzY0NhcmR9PlxyXG4gICAgPHVsIGNsYXNzTmFtZT1cInczLXVsIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgPGxpPjxoMiBjbGFzc05hbWU9XCJjb21tb25IZWFkZXJGb250RmFtaWx5XCI+V29yZCBJbmZvIGlzIGEgdXRpbGl0eSB0byBnZXQgaW5mb3JtYXRpb24gb24gd29yZHMuPC9oMj48L2xpPlxyXG4gICAgICA8bGk+QW5hZ3JhbXMgLSB3b3JkcyB0aGF0IHVzZSB0aGUgZXhhY3Qgc2FtZSBsZXR0ZXJzLjwvbGk+XHJcbiAgICAgIDxsaT5JbnNlcnRzIC0gd29yZHMgdGhhdCBjYW4gYmUgbWFkZSBieSBpbnNlcnRpbmcgYSBzaW5nbGUgbGV0dGVyLjwvbGk+XHJcbiAgICAgIDxsaT5Ecm9wcyAtIHdvcmRzIHRoYXQgY2FuIGJlIG1hZGUgYnkgZHJvcHBpbmcgYSBzaW5nbGUgbGV0dGVyLjwvbGk+XHJcbiAgICAgIDxsaT5Td2FwcyAtIHdvcmRzIHRoYXQgY2FuIGJlIG1hZGUgYnkgc3dhcHBpbmcgYSBzaW5nbGUgbGV0dGVyLjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PjtcclxuXHJcbiAgY29uc3QgRGVzY3JpYmVQcmlzb25CcmVhayA9IDxkaXYgY2xhc3NOYW1lPXttZW51T3B0RGVzY0NhcmR9PlxyXG4gICAgPHVsIGNsYXNzTmFtZT1cInczLXVsIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgPGxpPjxoMiBjbGFzc05hbWU9XCJjb21tb25IZWFkZXJGb250RmFtaWx5XCI+UHJpc29uIEJyZWFrIGlzIGEgdHdvIHBsYXllciBjcm9zc3dvcmQgc3R5bGUgZ2FtZS48L2gyPjwvbGk+XHJcbiAgICAgIDxsaT5Zb3UgcGxheSB0d28gZ2FtZXMsIG9uZSBhcyB0aGUgUHJpc29uZXJzIGFuZCBvbmUgYXMgdGhlIEd1YXJkcy4gV2hvZXZlciBmcmVlcyB0aGUgbW9zdCBwcmlzb25lcnMgd2lucy48L2xpPlxyXG4gICAgICA8bGk+UHJpc29uZXJzIGFsd2F5cyBwbGF5IGZpcnN0LjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgZmlyc3Qgd29yZCBwbGF5ZWQgbXVzdCB0b3VjaCB0aGUgY2VudHJlIHNxdWFyZS48L2xpPlxyXG4gICAgICA8bGk+VG8gZnJlZSBhIHByaXNvbmVyLCB0aGUgUHJpc29uZXJzIG11c3QgcGxheSBhIHRpbGUgb24gb25lIG9mIHRoZSBzcGVjaWFsIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHBiU3F1YXJlRXNjYXBlSGF0Y2hcIj5ydW5fY2lyY2xlPC9zcGFuPiBzcXVhcmVzLjwvbGk+XHJcbiAgICAgIDxsaT5XaGVuIGEgPHNwYW4gY2xhc3NOYW1lPVwicGJTcXVhcmVVc2VkQnlHdWFyZHNcIj4mbmJzcDs/Jm5ic3A7PC9zcGFuPiBpcyBwbGF5ZWQgaXQgcmVwcmVzZW50cyBhbnkgbGV0dGVyIGFuZCBkb2VzIG5vdCBoYXZlIHRvIHJlbWFpbiBhcyB0aGUgc2FtZSBsZXR0ZXIgdGhyb3VnaG91dCB0aGUgZ2FtZS48L2xpPlxyXG4gICAgICA8bGk+VGhlIDxzcGFuIGNsYXNzTmFtZT1cInBiU3F1YXJlVXNlZEJ5R3VhcmRzIHVcIj5RPC9zcGFuPiB0aWxlIGNhbiByZXByZXNlbnQgXCJRXCIgb3IgXCJRVVwiLCBkb2VzIG5vdCBoYXZlIHRvIGJlIHRoZSBzYW1lIGluIGJvdGggZGlyZWN0aW9ucywgYW5kIGRvZXMgbm90IGhhdmUgdG8gcmVtYWluIGF0IHRoZSBzYW1lIGRlc2lnbmF0aW9uIHRocm91Z2hvdXQgdGhlIGdhbWUuPC9saT5cclxuICAgICAgPGxpPlRoZSBnYW1lIGVuZHMgaWYgYSBwbGF5ZXIgZW1wdGllcyB0aGVpciByYWNrLjwvbGk+XHJcbiAgICAgIDxsaT5UaGUgZ2FtZSBlbmRzIGlmIGFsbCB0aGUgc3BlY2lhbCA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBwYlNxdWFyZUVzY2FwZUhhdGNoXCI+cnVuX2NpcmNsZTwvc3Bhbj4gc3F1YXJlcyBhcmUgdXNlZC48L2xpPlxyXG4gICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBib3RoIHBsYXllcnMgcGFzcy48L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj47XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlRnJ5WW91ckJyYWluID0gPGRpdiBjbGFzc05hbWU9e21lbnVPcHREZXNjQ2FyZH0+XHJcbiAgICA8dWwgY2xhc3NOYW1lPVwidzMtdWwgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICA8bGk+PGgyIGNsYXNzTmFtZT1cImNvbW1vbkhlYWRlckZvbnRGYW1pbHlcIj5GcnkgWW91ciBCcmFpbiBpcyBhIHdvcmQgZ2FtZSB0aGF0IGNhbiBiZSBjb250ZXN0ZWQgYnkgdHdvIHRvIHNpeCBwbGF5ZXJzLjwvaDI+PC9saT5cclxuICAgICAgPGxpPkEgdGlsZSBwb29sIGlzIHByb3ZpZGVkLCBzdGFydGluZyB3aXRoIDMgbGV0dGVycy4gUGxheWVycyB0YWtlIHR1cm5zLjwvbGk+XHJcbiAgICAgIDxsaT5XaGVuIGl0IGlzIHlvdXIgdHVybiwgbWFrZSBhIHdvcmQgdGhhdCBoYXMgYWxsIHRoZSBsZXR0ZXJzIGluIHRoZSB0aWxlIHBvb2wsIHBsdXMgYW55IGFtb3VudCBvZiBhZGRpdGlvbmFsIGxldHRlcnMuPC9saT5cclxuICAgICAgPGxpPldoZW4gYSBwbGF5ZXIgZmFpbHMgdG8gbWFrZSBhIHZhbGlkIHdvcmQgb24gdGhlaXIgdHVybiwgdGhlIG90aGVyIHBsYXllcnMgdGFrZSBwYXJ0IGluIHRoZSBmcmVlLWZvci1hbGwuPC9saT5cclxuICAgICAgPGxpPkluIHRoZSBmcmVlLWZvci1hbGwsIHRoZSBnb2FsIGlzIHRvIHN1Ym1pdCB0aGUgc2hvcnRlc3QgYW5zd2VyIHlvdSBjYW4uIEFsbCBwbGF5ZXJzIHdpdGggdGhlIHNob3J0ZXN0IG9mIHRoZSBhbnN3ZXJzIGdldCBwb2ludHMuPC9saT5cclxuICAgICAgPGxpPlRoZSBwb2ludHMgZ2l2ZW4gZXF1YWxzIHRoZSBudW1iZXIgb2YgbGV0dGVycyBpbiB0aGUgdGlsZSBwb29sIHRoZSBsYXN0IHRpbWUgc29tZW9uZSBnYXZlIGEgdmFsaWQgYW5zd2VyIGZvciB0aGF0IHJvdW5kLjwvbGk+XHJcbiAgICAgIDxsaT5Sb3VuZHMgY29udGludWUgdW50aWwgc29tZW9uZSByZWFjaGVzIHRoZSB0YXJnZXQgbnVtYmVyIG9mIHBvaW50cyBmb3IgdGhlIGdhbWUuPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+O1xyXG5cclxuICBjb25zdCBBY2tub3dsZWRnZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgdG9nZ2xlRGVzY0ZsYWcgPSAoKSA9PiB7XHJcbiAgICAgIHByb3BzLnNldERlc2NGbGFnKCFwcm9wcy5kZXNjRmxhZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jZWxsIHczLWJsdWVcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Fja1RleHRDbGFzc05hbWV9PlxyXG4gICAgICAgICAgICB7cHJvcHMuYWNrVGV4dH1cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtwcm9wcy5kZXNjRmxhZyA/IGhpZGVCdXR0b25DbGFzc05hbWUgOiBzaG93QnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVEZXNjRmxhZygpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuZGVzY0ZsYWcgPyBcIkhpZGUgaW5mb1wiIDogPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwX291dGxpbmU8L2k+fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlRW5hYmxlMmsgPSA8ZGl2IGNsYXNzTmFtZT17YWNrRGVzY0NhcmR9PlxyXG4gICAgVGhpcyBzaXRlIHVzZXMgdGhlIEVuaGFuY2VkIE5vcnRoIEFtZXJpY2FuIEJlbmNobWFyayBMRWV4aWNvbiwgbWlsbGVuaWFsIGVkaXRpb24sIGEgcHVibGljIGRvbWFpbiB3b3JkIGxpc3QgdGhhdCBJIGdyYXRlZnVsbHkgYWNrbm93bGVkZ2UuXHJcbiAgPC9kaXY+XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlRXh0ZW5kc0NsYXNzID0gPGRpdiBjbGFzc05hbWU9e2Fja0Rlc2NDYXJkfT5cclxuICAgIFRoaXMgc2l0ZSB1c2VzIEZyZWUgSlNPTiBzdG9yYWdlIG1hZGUgYXZhaWxhYmxlIGJ5IEN5cmlsIEJvaXMgZnJvbSBGcmFuY2UuIDxhIGhyZWY9J2h0dHBzOi8vZXh0ZW5kc2NsYXNzLmNvbS9jb250YWN0Jz5DbGljayBoZXJlIGZvciBtb3JlIGluZm88L2E+LiBUaGFua3MgQ3lyaWwhXHJcbiAgPC9kaXY+XHJcblxyXG4gIGNvbnN0IERlc2NyaWJlRnJpZW5kcyA9IDxkaXYgY2xhc3NOYW1lPXthY2tEZXNjQ2FyZH0+XHJcbiAgICBEYW5pZWxsZSwgRW1lc2UsIENlc2FyLCBCZXYsIFNhcmFoLCBSb2QsIFNvbnlhLCBhbmQgTm9sYW4uIFRoYW5rcyBmb3IgdGVjaG5pY2FsIGhlbHAgYW5kL29yIGZlZWRiYWNrIGFuZCBzdWdnZXN0aW9ucy5cclxuICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+aGVhcnQ8L2k+XHJcbiAgPC9kaXY+XHJcblxyXG5yZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlRpbGUgUnVubmVyPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtdGVhbFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJteUhlYWRpbmdGb250XCI+VGlsZSBSdW5uZXI8L2gxPlxyXG4gICAgICAgIHsvKiA8aDI+e3Byb3BzLmNvZGVyTXNnfTwvaDI+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEJyb3dzZXJWaWV3PlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3My10YWJsZSB3My1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjV219IHNldERlc2NGbGFnPXtzZXREZXNjV219IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99IHRhcmdldFdoZXJldG89J3dtJyBvcHRpb25UZXh0PSdXb3JkIE1hc3Rlcm1pbmQnLz5cclxuICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NXaX0gc2V0RGVzY0ZsYWc9e3NldERlc2NXaX0gc2V0V2hlcmV0bz17cHJvcHMuc2V0V2hlcmV0b30gdGFyZ2V0V2hlcmV0bz0nd2knIG9wdGlvblRleHQ9J1dvcmQgSW5mbycvPlxyXG4gICAgICAgICAgICA8TWVudU9wdGlvbiBkZXNjRmxhZz17ZGVzY1BifSBzZXREZXNjRmxhZz17c2V0RGVzY1BifSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSdwYicgb3B0aW9uVGV4dD0nUHJpc29uIEJyZWFrJy8+XHJcbiAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjRnlifSBzZXREZXNjRmxhZz17c2V0RGVzY0Z5Yn0gc2V0V2hlcmV0bz17cHJvcHMuc2V0V2hlcmV0b30gdGFyZ2V0V2hlcmV0bz0nZnliJyBvcHRpb25UZXh0PSdGcnkgWW91ciBCcmFpbicvPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICAgIDxNb2JpbGVPbmx5Vmlldz5cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidzMtdGFibGUgdzMtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICA8TWVudU9wdGlvbiBkZXNjRmxhZz17ZGVzY1dtfSBzZXREZXNjRmxhZz17c2V0RGVzY1dtfSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSd3bScgb3B0aW9uVGV4dD0nV29yZCBNYXN0ZXJtaW5kJy8+XHJcbiAgICAgICAgICAgIDxNZW51T3B0aW9uIGRlc2NGbGFnPXtkZXNjV2l9IHNldERlc2NGbGFnPXtzZXREZXNjV2l9IHNldFdoZXJldG89e3Byb3BzLnNldFdoZXJldG99IHRhcmdldFdoZXJldG89J3dpJyBvcHRpb25UZXh0PSdXb3JkIEluZm8nLz5cclxuICAgICAgICAgICAgPE1lbnVPcHRpb24gZGVzY0ZsYWc9e2Rlc2NGeWJ9IHNldERlc2NGbGFnPXtzZXREZXNjRnlifSBzZXRXaGVyZXRvPXtwcm9wcy5zZXRXaGVyZXRvfSB0YXJnZXRXaGVyZXRvPSdmeWInIG9wdGlvblRleHQ9J0ZyeSBZb3VyIEJyYWluJy8+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9Nb2JpbGVPbmx5Vmlldz5cclxuICAgICAge2Rlc2NXbSAmJiBEZXNjcmliZVdvcmRNYXN0ZXJtaW5kfVxyXG4gICAgICB7ZGVzY1dpICYmIERlc2NyaWJlV29yZEluZm99XHJcbiAgICAgIHtkZXNjUGIgJiYgRGVzY3JpYmVQcmlzb25CcmVha31cclxuICAgICAge2Rlc2NGeWIgJiYgRGVzY3JpYmVGcnlZb3VyQnJhaW59XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtcGFuZWxcIj5cclxuICAgICAgICA8aDE+QWNrbm93bGVkZ2VtZW50czo8L2gxPlxyXG4gICAgICAgIDxBY2tub3dsZWRnZSBhY2tUZXh0PSdFTkFCTEUySycgZGVzY0ZsYWc9e2Rlc2NFbmFibGUya30gc2V0RGVzY0ZsYWc9e3NldERlc2NFbmFibGUya30vPlxyXG4gICAgICAgIHtkZXNjRW5hYmxlMmsgJiYgRGVzY3JpYmVFbmFibGUya31cclxuICAgICAgICA8QWNrbm93bGVkZ2UgYWNrVGV4dD0nZXh0ZW5kc2NsYXNzLmNvbScgZGVzY0ZsYWc9e2Rlc2NFeHRlbmRzQ2xhc3N9IHNldERlc2NGbGFnPXtzZXREZXNjRXh0ZW5kc0NsYXNzfS8+XHJcbiAgICAgICAge2Rlc2NFeHRlbmRzQ2xhc3MgJiYgRGVzY3JpYmVFeHRlbmRzQ2xhc3N9XHJcbiAgICAgICAgPEFja25vd2xlZGdlIGFja1RleHQ9J0ZyaWVuZHMnIGRlc2NGbGFnPXtkZXNjRnJpZW5kc30gc2V0RGVzY0ZsYWc9e3NldERlc2NGcmllbmRzfS8+XHJcbiAgICAgICAge2Rlc2NGcmllbmRzICYmIERlc2NyaWJlRnJpZW5kc31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9