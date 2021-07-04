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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\index.js",
    _s = $RefreshSig$();

 // import styles from '../styles/Home.module.css'




const hideButtonClassName = 'w3-button w3-green w3-hover-black w3-border w3-animate-left';
const showButtonClassName = 'w3-right mymaterialicon w3-green';
const menuItemWidthNormal = '320px';
const descriptionCard = 'w3-card-4 w3-green w3-cell w3-animate-right';
function Home() {
  _s();

  const {
    0: descWm,
    1: setDescWm
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // describe word mastermind

  const {
    0: descWi,
    1: setDescWi
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // describe word info

  const {
    0: descPb,
    1: setDescPb
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // describe prison break

  const {
    0: coderMsg,
    1: setCoderMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('Loading');

  const getCoderMsg = async () => {
    let url =  true ? 'http://localhost:5000/evtest' : 0;
    const res = await fetch(url);
    const jres = await res.json();
    setCoderMsg(`${jres.evtest}`);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    getCoderMsg();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Tile Runner App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container w3-teal",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "myHeadingFont",
        children: "Menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: coderMsg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container w3-margin-left",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-blue",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "The Enhanced North American Benchmark LEexicon, millenial edition"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "This site uses the ENABLE2K lexicon, a public domain word list that I gratefully acknowledge."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WMOption, {
        descWm: descWm,
        setDescWm: setDescWm
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WIOption, {
        descWi: descWi,
        setDescWi: setDescWi
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_3__.BrowserView, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PBOption, {
          descPb: descPb,
          setDescPb: setDescPb
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-container w3-teal",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Have fun!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "I apologize for the current slowness for Word Mastermind and Word Info. Lot to learn here."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_s(Home, "Rl2PEcWMTjJS5ZGYUvgNxxwvBm0=");

_c = Home;

const WMOption = props => {
  const toggleDescWm = () => {
    props.setDescWm(!props.descWm);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w3-cell-row",
    style: {
      width: props.descWm ? '100%' : menuItemWidthNormal
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-cell",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/wm/mastermind`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "mySubHeadingFont",
            children: "Word Mastermind"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `w3-cell ${props.descWm ? "w3-cell-middle" : ""}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        id: "toggleDescribeWm",
        className: props.descWm ? hideButtonClassName : showButtonClassName,
        onClick: () => toggleDescWm(),
        children: props.descWm ? "Hide info" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "material-icons",
          children: "help_outline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 41
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined), props.descWm ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: descriptionCard,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "w3-ul commonFontFamily",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "CommenHeaderFontFamily",
            children: "Word Mastermind is a single player code cracking game."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The computer picks a random word."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "You enter guesses until you guess correctly."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The computer tells you how many letters are correct and how many are in the correct position."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_3__.BrowserView, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: "The computer shows you word info for guessed words."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, undefined);
};

_c2 = WMOption;

const WIOption = props => {
  const toggleDescWi = () => {
    props.setDescWi(!props.descWi);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w3-cell-row",
    style: {
      width: props.descWi ? '100%' : menuItemWidthNormal
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-cell",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/wi/wordinfo`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "mySubHeadingFont",
            children: "Word Info"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `w3-cell ${props.descWi ? "w3-cell-middle" : ""}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        id: "toggleDescribeWi",
        className: props.descWi ? hideButtonClassName : showButtonClassName,
        onClick: () => toggleDescWi(),
        children: props.descWi ? "Hide info" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "material-icons",
          children: "help_outline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 41
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, undefined), props.descWi ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: descriptionCard,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "w3-ul commonFontFamily",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "commonHeaderFontFamily",
            children: "Word Info is a utility to get information on words."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Anagrams - words that use the exact same letters."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Inserts - words that can be made by inserting a single letter."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Drops - words that can be made by dropping a single letter."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Swaps - words that can be made by swapping a single letter."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 5
  }, undefined);
};

_c3 = WIOption;

const PBOption = props => {
  const toggleDescPb = () => {
    props.setDescPb(!props.descPb);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w3-cell-row",
    style: {
      width: props.descPb ? '100%' : menuItemWidthNormal
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-cell",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/pb/prisonbreak`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "mySubHeadingFont",
            children: "Prison Break"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `w3-cell ${props.descPb ? "w3-cell-middle" : ""}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        id: "toggleDescribePb",
        className: props.descPb ? hideButtonClassName : showButtonClassName,
        onClick: () => toggleDescPb(),
        children: props.descPb ? "Hide info" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "material-icons",
          children: "help_outline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 41
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, undefined), props.descPb ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: descriptionCard,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "w3-ul commonFontFamily",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "commonHeaderFontFamily",
            children: "Prison Break is a two player crossword style game."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Prisoners always play first."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The first word played must touch the centre square."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: ["To free a prisoner, the Prisoners must play a tile on one of the special ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons pbSquareEscapeHatch",
            children: "run_circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 92
          }, undefined), " squares."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: ["When a ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "pbSquareUsedByGuards",
            children: "\xA0?\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 26
          }, undefined), " is played it represents any letter and does not have to remain as the same letter throughout the game."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: ["The ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "pbSquareUsedByGuards u",
            children: "Q"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 23
          }, undefined), " tile can represent \"Q\" or \"QU\", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The game ends if a player empties their rack."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: ["The game ends if all the special ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons pbSquareEscapeHatch",
            children: "run_circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 52
          }, undefined), " squares are used."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "The game ends if both players pass."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 141,
    columnNumber: 5
  }, undefined);
};

_c4 = PBOption;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "WMOption");
$RefreshReg$(_c3, "WIOption");
$RefreshReg$(_c4, "PBOption");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaGlkZUJ1dHRvbkNsYXNzTmFtZSIsInNob3dCdXR0b25DbGFzc05hbWUiLCJtZW51SXRlbVdpZHRoTm9ybWFsIiwiZGVzY3JpcHRpb25DYXJkIiwiSG9tZSIsImRlc2NXbSIsInNldERlc2NXbSIsInVzZVN0YXRlIiwiZGVzY1dpIiwic2V0RGVzY1dpIiwiZGVzY1BiIiwic2V0RGVzY1BiIiwiY29kZXJNc2ciLCJzZXRDb2Rlck1zZyIsImdldENvZGVyTXNnIiwidXJsIiwicmVzIiwiZmV0Y2giLCJqcmVzIiwianNvbiIsImV2dGVzdCIsInVzZUVmZmVjdCIsIldNT3B0aW9uIiwicHJvcHMiLCJ0b2dnbGVEZXNjV20iLCJ3aWR0aCIsIldJT3B0aW9uIiwidG9nZ2xlRGVzY1dpIiwiUEJPcHRpb24iLCJ0b2dnbGVEZXNjUGIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsbUJBQW1CLEdBQUcsNkRBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsa0NBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsT0FBNUI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsNkNBQXhCO0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLCtDQUFRLENBQUMsS0FBRCxDQUFwQyxDQUQ2QixDQUNnQjs7QUFDN0MsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEMsQ0FGNkIsQ0FFZ0I7O0FBQzdDLFFBQU07QUFBQSxPQUFDRyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkosK0NBQVEsQ0FBQyxLQUFELENBQXBDLENBSDZCLENBR2dCOztBQUM3QyxRQUFNO0FBQUEs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixlQU9FO0FBQUEsMENBQVE7QUFBTSxxQkFBUyxFQUFDLHdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixlQVNFO0FBQUEsdUVBQXFDO0FBQU0scUJBQVMsRUFBQyxvQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURixlQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsZ0JBZ0JDLDZJQWhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXFDRCxDQTFDRDs7TUFBTXlCLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzk3MTFjMTE0NDFmZTE5YzI2MjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7QnJvd3NlclZpZXcsIE1vYmlsZU9ubHlWaWV3fSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGhpZGVCdXR0b25DbGFzc05hbWUgPSAndzMtYnV0dG9uIHczLWdyZWVuIHczLWhvdmVyLWJsYWNrIHczLWJvcmRlciB3My1hbmltYXRlLWxlZnQnO1xyXG5jb25zdCBzaG93QnV0dG9uQ2xhc3NOYW1lID0gJ3czLXJpZ2h0IG15bWF0ZXJpYWxpY29uIHczLWdyZWVuJztcclxuY29uc3QgbWVudUl0ZW1XaWR0aE5vcm1hbCA9ICczMjBweCc7XHJcbmNvbnN0IGRlc2NyaXB0aW9uQ2FyZCA9ICd3My1jYXJkLTQgdzMtZ3JlZW4gdzMtY2VsbCB3My1hbmltYXRlLXJpZ2h0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2Rlc2NXbSwgc2V0RGVzY1dtXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgd29yZCBtYXN0ZXJtaW5kXHJcbiAgY29uc3QgW2Rlc2NXaSwgc2V0RGVzY1dpXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgd29yZCBpbmZvXHJcbiAgY29uc3QgW2Rlc2NQYiwgc2V0RGVzY1BiXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgcHJpc29uIGJyZWFrXHJcbiAgY29uc3QgW2NvZGVyTXNnLCBzZXRDb2Rlck1zZ10gPSB1c2VTdGF0ZSgnTG9hZGluZycpO1xyXG4gIGNvbnN0IGdldENvZGVyTXNnID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9ldnRlc3QnIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL2V2dGVzdCdcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCBqcmVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHNldENvZGVyTXNnKGAke2pyZXMuZXZ0ZXN0fWApO1xyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0Q29kZXJNc2coKTtcclxuICB9LFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlRpbGUgUnVubmVyIEFwcDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLXRlYWxcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXlIZWFkaW5nRm9udFwiPk1lbnU8L2gxPlxyXG4gICAgICAgIDxoMj57Y29kZXJNc2d9PC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLW1hcmdpbi1sZWZ0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1ibHVlXCI+XHJcbiAgICAgICAgPGgxPlRoZSBFbmhhbmNlZCBOb3J0aCBBbWVyaWNhbiBCZW5jaG1hcmsgTEVleGljb24sIG1pbGxlbmlhbCBlZGl0aW9uPC9oMT5cclxuICAgICAgICA8cD5UaGlzIHNpdGUgdXNlcyB0aGUgRU5BQkxFMksgbGV4aWNvbiwgYSBwdWJsaWMgZG9tYWluIHdvcmQgbGlzdCB0aGF0IEkgZ3JhdGVmdWxseSBhY2tub3dsZWRnZS48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFdNT3B0aW9uIGRlc2NXbT17ZGVzY1dtfSBzZXREZXNjV209e3NldERlc2NXbX0vPlxyXG4gICAgICAgIDxXSU9wdGlvbiBkZXNjV2k9e2Rlc2NXaX0gc2V0RGVzY1dpPXtzZXREZXNjV2l9Lz5cclxuICAgICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgICA8UEJPcHRpb24gZGVzY1BiPXtkZXNjUGJ9IHNldERlc2NQYj17c2V0RGVzY1BifS8+XHJcbiAgICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLXRlYWxcIj5cclxuICAgICAgICA8aDE+SGF2ZSBmdW4hPC9oMT5cclxuICAgICAgICA8cD5JIGFwb2xvZ2l6ZSBmb3IgdGhlIGN1cnJlbnQgc2xvd25lc3MgZm9yIFdvcmQgTWFzdGVybWluZCBhbmQgV29yZCBJbmZvLiBMb3QgdG8gbGVhcm4gaGVyZS48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBXTU9wdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHRvZ2dsZURlc2NXbSA9ICgpID0+IHtcclxuICAgIHByb3BzLnNldERlc2NXbSghcHJvcHMuZGVzY1dtKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNlbGwtcm93XCIgc3R5bGU9e3t3aWR0aDogcHJvcHMuZGVzY1dtID8gJzEwMCUnIDogbWVudUl0ZW1XaWR0aE5vcm1hbH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNlbGxcIj5cclxuICAgICAgICA8TGluayBocmVmPXtgL3dtL21hc3Rlcm1pbmRgfT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXlTdWJIZWFkaW5nRm9udFwiPldvcmQgTWFzdGVybWluZDwvaDI+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B3My1jZWxsICR7cHJvcHMuZGVzY1dtID8gXCJ3My1jZWxsLW1pZGRsZVwiIDogXCJcIn1gfT5cclxuICAgICAgICA8YnV0dG9uIGlkPVwidG9nZ2xlRGVzY3JpYmVXbVwiIGNsYXNzTmFtZT17cHJvcHMuZGVzY1dtID8gaGlkZUJ1dHRvbkNsYXNzTmFtZSA6IHNob3dCdXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVEZXNjV20oKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cHJvcHMuZGVzY1dtID8gXCJIaWRlIGluZm9cIiA6IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+aGVscF9vdXRsaW5lPC9pPn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtwcm9wcy5kZXNjV20gP1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkZXNjcmlwdGlvbkNhcmR9PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInczLXVsIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgPGxpPjxoMiBjbGFzc05hbWU9XCJDb21tZW5IZWFkZXJGb250RmFtaWx5XCI+V29yZCBNYXN0ZXJtaW5kIGlzIGEgc2luZ2xlIHBsYXllciBjb2RlIGNyYWNraW5nIGdhbWUuPC9oMj48L2xpPlxyXG4gICAgICAgICAgICA8bGk+VGhlIGNvbXB1dGVyIHBpY2tzIGEgcmFuZG9tIHdvcmQuPC9saT5cclxuICAgICAgICAgICAgPGxpPllvdSBlbnRlciBndWVzc2VzIHVudGlsIHlvdSBndWVzcyBjb3JyZWN0bHkuPC9saT5cclxuICAgICAgICAgICAgPGxpPlRoZSBjb21wdXRlciB0ZWxscyB5b3UgaG93IG1hbnkgbGV0dGVycyBhcmUgY29ycmVjdCBhbmQgaG93IG1hbnkgYXJlIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uLjwvbGk+XHJcbiAgICAgICAgICAgIDxCcm93c2VyVmlldz5cclxuICAgICAgICAgICAgICA8bGk+VGhlIGNvbXB1dGVyIHNob3dzIHlvdSB3b3JkIGluZm8gZm9yIGd1ZXNzZWQgd29yZHMuPC9saT5cclxuICAgICAgICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgICAgICAgICAgPGxpPlRoZSBjb21wdXRlciB3aWxsIHN0YXJ0IHdpdGggbGVuZ3RoIDIsIGFuZCBhZGQgMSBlYWNoIHJvdW5kIHVwIHRvIGxlbmd0aCA4LiBUaGVuIGl0IHN0YXJ0cyBhIG5ldyBzZXQgYmFjayBhdCAyLjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA6XHJcbiAgICAgICAgPD48Lz5cclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBXSU9wdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHRvZ2dsZURlc2NXaSA9ICgpID0+IHtcclxuICAgIHByb3BzLnNldERlc2NXaSghcHJvcHMuZGVzY1dpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNlbGwtcm93XCIgc3R5bGU9e3t3aWR0aDogcHJvcHMuZGVzY1dpID8gJzEwMCUnIDogbWVudUl0ZW1XaWR0aE5vcm1hbH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNlbGxcIj5cclxuICAgICAgICA8TGluayBocmVmPXtgL3dpL3dvcmRpbmZvYH0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15U3ViSGVhZGluZ0ZvbnRcIj5Xb3JkIEluZm88L2gyPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdzMtY2VsbCAke3Byb3BzLmRlc2NXaSA/IFwidzMtY2VsbC1taWRkbGVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cInRvZ2dsZURlc2NyaWJlV2lcIiBjbGFzc05hbWU9e3Byb3BzLmRlc2NXaSA/IGhpZGVCdXR0b25DbGFzc05hbWUgOiBzaG93QnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRGVzY1dpKCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Byb3BzLmRlc2NXaSA/IFwiSGlkZSBpbmZvXCIgOiA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmhlbHBfb3V0bGluZTwvaT59XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7cHJvcHMuZGVzY1dpID9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGVzY3JpcHRpb25DYXJkfT5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3My11bCBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIDxsaT48aDIgY2xhc3NOYW1lPVwiY29tbW9uSGVhZGVyRm9udEZhbWlseVwiPldvcmQgSW5mbyBpcyBhIHV0aWxpdHkgdG8gZ2V0IGluZm9ybWF0aW9uIG9uIHdvcmRzLjwvaDI+PC9saT5cclxuICAgICAgICAgICAgPGxpPkFuYWdyYW1zIC0gd29yZHMgdGhhdCB1c2UgdGhlIGV4YWN0IHNhbWUgbGV0dGVycy48L2xpPlxyXG4gICAgICAgICAgICA8bGk+SW5zZXJ0cyAtIHdvcmRzIHRoYXQgY2FuIGJlIG1hZGUgYnkgaW5zZXJ0aW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgICAgICAgICA8bGk+RHJvcHMgLSB3b3JkcyB0aGF0IGNhbiBiZSBtYWRlIGJ5IGRyb3BwaW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgICAgICAgICA8bGk+U3dhcHMgLSB3b3JkcyB0aGF0IGNhbiBiZSBtYWRlIGJ5IHN3YXBwaW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgOlxyXG4gICAgICAgIDw+PC8+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgUEJPcHRpb24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB0b2dnbGVEZXNjUGIgPSAoKSA9PiB7XHJcbiAgICBwcm9wcy5zZXREZXNjUGIoIXByb3BzLmRlc2NQYik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jZWxsLXJvd1wiIHN0eWxlPXt7d2lkdGg6IHByb3BzLmRlc2NQYiA/ICcxMDAlJyA6IG1lbnVJdGVtV2lkdGhOb3JtYWx9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jZWxsXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wYi9wcmlzb25icmVha2B9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJteVN1YkhlYWRpbmdGb250XCI+UHJpc29uIEJyZWFrPC9oMj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHczLWNlbGwgJHtwcm9wcy5kZXNjUGIgPyBcInczLWNlbGwtbWlkZGxlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJ0b2dnbGVEZXNjcmliZVBiXCIgY2xhc3NOYW1lPXtwcm9wcy5kZXNjUGIgPyBoaWRlQnV0dG9uQ2xhc3NOYW1lIDogc2hvd0J1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURlc2NQYigpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwcm9wcy5kZXNjUGIgPyBcIkhpZGUgaW5mb1wiIDogPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwX291dGxpbmU8L2k+fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtwcm9wcy5kZXNjUGIgP1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rlc2NyaXB0aW9uQ2FyZH0+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3My11bCBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxoMiBjbGFzc05hbWU9XCJjb21tb25IZWFkZXJGb250RmFtaWx5XCI+UHJpc29uIEJyZWFrIGlzIGEgdHdvIHBsYXllciBjcm9zc3dvcmQgc3R5bGUgZ2FtZS48L2gyPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPllvdSBwbGF5IHR3byBnYW1lcywgb25lIGFzIHRoZSBQcmlzb25lcnMgYW5kIG9uZSBhcyB0aGUgR3VhcmRzLiBXaG9ldmVyIGZyZWVzIHRoZSBtb3N0IHByaXNvbmVycyB3aW5zLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlByaXNvbmVycyBhbHdheXMgcGxheSBmaXJzdC48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5UaGUgZmlyc3Qgd29yZCBwbGF5ZWQgbXVzdCB0b3VjaCB0aGUgY2VudHJlIHNxdWFyZS48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5UbyBmcmVlIGEgcHJpc29uZXIsIHRoZSBQcmlzb25lcnMgbXVzdCBwbGF5IGEgdGlsZSBvbiBvbmUgb2YgdGhlIHNwZWNpYWwgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcGJTcXVhcmVFc2NhcGVIYXRjaFwiPnJ1bl9jaXJjbGU8L3NwYW4+IHNxdWFyZXMuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+V2hlbiBhIDxzcGFuIGNsYXNzTmFtZT1cInBiU3F1YXJlVXNlZEJ5R3VhcmRzXCI+Jm5ic3A7PyZuYnNwOzwvc3Bhbj4gaXMgcGxheWVkIGl0IHJlcHJlc2VudHMgYW55IGxldHRlciBhbmQgZG9lcyBub3QgaGF2ZSB0byByZW1haW4gYXMgdGhlIHNhbWUgbGV0dGVyIHRocm91Z2hvdXQgdGhlIGdhbWUuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+VGhlIDxzcGFuIGNsYXNzTmFtZT1cInBiU3F1YXJlVXNlZEJ5R3VhcmRzIHVcIj5RPC9zcGFuPiB0aWxlIGNhbiByZXByZXNlbnQgXCJRXCIgb3IgXCJRVVwiLCBkb2VzIG5vdCBoYXZlIHRvIGJlIHRoZSBzYW1lIGluIGJvdGggZGlyZWN0aW9ucywgYW5kIGRvZXMgbm90IGhhdmUgdG8gcmVtYWluIGF0IHRoZSBzYW1lIGRlc2lnbmF0aW9uIHRocm91Z2hvdXQgdGhlIGdhbWUuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBhIHBsYXllciBlbXB0aWVzIHRoZWlyIHJhY2suPC9saT5cclxuICAgICAgICAgICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBhbGwgdGhlIHNwZWNpYWwgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcGJTcXVhcmVFc2NhcGVIYXRjaFwiPnJ1bl9jaXJjbGU8L3NwYW4+IHNxdWFyZXMgYXJlIHVzZWQuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBib3RoIHBsYXllcnMgcGFzcy48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDpcclxuICAgICAgICA8PjwvPlxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9