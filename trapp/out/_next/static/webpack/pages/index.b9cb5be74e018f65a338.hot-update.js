webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-device-detect */ "../node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



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
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false); // describe word mastermind

  const {
    0: descWi,
    1: setDescWi
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false); // describe word info

  const {
    0: descPb,
    1: setDescPb
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false); // describe prison break

  const {
    0: evtest,
    1: setEvtest
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('Loading');
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    let url =  true ? 'http://localhost:5000/evtest' : undefined;

    try {
      let x = fetch(url, {
        method: 'get',
        mode: "no-cors",
        header: {
          'Access-Control-Allow-Origin': '*'
        }
      });
      setEvtest(x);
    } catch {
      setEvtest('Not working yet');
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Tile Runner App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container w3-teal",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "myHeadingFont",
        children: "Menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: ["Message from the coder: ", evtest]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container w3-margin-left",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WMOption, {
        descWm: descWm,
        setDescWm: setDescWm
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WIOption, {
        descWi: descWi,
        setDescWi: setDescWi
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_device_detect__WEBPACK_IMPORTED_MODULE_3__["BrowserView"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PBOption, {
          descPb: descPb,
          setDescPb: setDescPb
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container w3-teal",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Have fun!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

_s(Home, "PDFg3cJpc1gQatnQ9UCzu3d5fJo=");

_c = Home;

const WMOption = props => {
  const toggleDescWm = () => {
    props.setDescWm(!props.descWm);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w3-cell-row",
    style: {
      width: props.descWm ? '100%' : menuItemWidthNormal
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-cell",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: `/wm/mastermind`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "mySubHeadingFont",
            children: "Word Mastermind"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
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
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `w3-cell ${props.descWm ? "w3-cell-middle" : ""}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        id: "toggleDescribeWm",
        className: props.descWm ? hideButtonClassName : showButtonClassName,
        onClick: () => toggleDescWm(),
        children: props.descWm ? "Hide info" : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "material-icons",
          children: "help_outline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 41
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, undefined), props.descWm ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: descriptionCard,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "w3-ul commonFontFamily",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "CommenHeaderFontFamily",
            children: "Word Mastermind is a single player code cracking game."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "The computer picks a random word."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "You enter guesses until you guess correctly."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "The computer tells you how many letters are correct and how many are in the correct position."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_device_detect__WEBPACK_IMPORTED_MODULE_3__["BrowserView"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "The computer shows you word info for guessed words."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "Due to licensing restrictions, this uses a 'common English lexicon' developed by some word game enthusiasts."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, undefined);
};

_c2 = WMOption;

const WIOption = props => {
  const toggleDescWi = () => {
    props.setDescWi(!props.descWi);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w3-cell-row",
    style: {
      width: props.descWi ? '100%' : menuItemWidthNormal
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-cell",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: `/wi/wordinfo`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "mySubHeadingFont",
            children: "Word Info"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `w3-cell ${props.descWi ? "w3-cell-middle" : ""}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        id: "toggleDescribeWi",
        className: props.descWi ? hideButtonClassName : showButtonClassName,
        onClick: () => toggleDescWi(),
        children: props.descWi ? "Hide info" : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "material-icons",
          children: "help_outline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 41
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, undefined), props.descWi ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: descriptionCard,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "w3-ul commonFontFamily",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "commonHeaderFontFamily",
            children: "Word Info is a utility to get information on words."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "Anagrams - words that use the exact same letters."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "Inserts - words that can be made by inserting a single letter."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "Drops - words that can be made by dropping a single letter."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "Swaps - words that can be made by swapping a single letter."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "Due to licensing restrictions, this uses a 'common English lexicon' developed by some word game enthusiasts."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 5
  }, undefined);
};

_c3 = WIOption;

const PBOption = props => {
  const toggleDescPb = () => {
    props.setDescPb(!props.descPb);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w3-cell-row",
    style: {
      width: props.descPb ? '100%' : menuItemWidthNormal
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-cell",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: `/pb/prisonbreak`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "mySubHeadingFont",
            children: "Prison Break"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `w3-cell ${props.descPb ? "w3-cell-middle" : ""}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        id: "toggleDescribePb",
        className: props.descPb ? hideButtonClassName : showButtonClassName,
        onClick: () => toggleDescPb(),
        children: props.descPb ? "Hide info" : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "material-icons",
          children: "help_outline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 41
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }, undefined), props.descPb ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: descriptionCard,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "w3-ul commonFontFamily",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "commonHeaderFontFamily",
            children: "Prison Break is a two player crossword style game."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "Prisoners always play first."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "The first word played must touch the centre square."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["To free a prisoner, the Prisoners must play a tile on one of the special ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "material-icons pbSquareEscapeHatch",
            children: "run_circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 92
          }, undefined), " squares."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["When a ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "pbSquareUsedByGuards",
            children: "\xA0?\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 26
          }, undefined), " is played it represents any letter and does not have to remain as the same letter throughout the game."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["The ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "pbSquareUsedByGuards u",
            children: "Q"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 23
          }, undefined), " tile can represent \"Q\" or \"QU\", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "The game ends if a player empties their rack."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["The game ends if all the special ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "material-icons pbSquareEscapeHatch",
            children: "run_circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 52
          }, undefined), " squares are used."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "The game ends if both players pass."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "Due to licensing restrictions, this game does not validate words against any lexicon."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 147,
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaGlkZUJ1dHRvbkNsYXNzTmFtZSIsInNob3dCdXR0b25DbGFzc05hbWUiLCJtZW51SXRlbVdpZHRoTm9ybWFsIiwiZGVzY3JpcHRpb25DYXJkIiwiSG9tZSIsImRlc2NXbSIsInNldERlc2NXbSIsInVzZVN0YXRlIiwiZGVzY1dpIiwic2V0RGVzY1dpIiwiZGVzY1BiIiwic2V0RGVzY1BiIiwiZXZ0ZXN0Iiwic2V0RXZ0ZXN0IiwidXNlRWZmZWN0IiwidXJsIiwieCIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImhlYWRlciIsIldNT3B0aW9uIiwicHJvcHMiLCJ0b2dnbGVEZXNjV20iLCJ3aWR0aCIsIldJT3B0aW9uIiwidG9nZ2xlRGVzY1dpIiwiUEJPcHRpb24iLCJ0b2dnbGVEZXNjUGIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxtQkFBbUIsR0FBRyw2REFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxrQ0FBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxPQUE1QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyw2Q0FBeEI7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsc0RBQVEsQ0FBQyxLQUFELENBQXBDLENBRDZCLENBQ2dCOztBQUM3QyxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JGLHNEQUFRLENBQUMsS0FBRCxDQUFwQyxDQUY2QixDQUVnQjs7QUFDN0MsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSixzREFBUSxDQUFDLEtBQUQsQ0FBcEMsQ0FINkIsQ0FHZ0I7O0FBQzdDLFFBQU07QUFBQSxPQUFDSyxNQUFEO0FBQUEsT0FB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QTtBQUFBO0FBQUEsdUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLGVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFBLHVFQUFxQztBQUFNLHFCQUFTLEVBQUMsb0NBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEYsZUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRixlQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsZ0JBaUJDLHVKQWpDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXNDRCxDQTNDRDs7TUFBTXdCLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjljYjViZTc0ZTAxOGY2NWEzMzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7QnJvd3NlclZpZXcsIE1vYmlsZU9ubHlWaWV3fSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGhpZGVCdXR0b25DbGFzc05hbWUgPSAndzMtYnV0dG9uIHczLWdyZWVuIHczLWhvdmVyLWJsYWNrIHczLWJvcmRlciB3My1hbmltYXRlLWxlZnQnO1xyXG5jb25zdCBzaG93QnV0dG9uQ2xhc3NOYW1lID0gJ3czLXJpZ2h0IG15bWF0ZXJpYWxpY29uIHczLWdyZWVuJztcclxuY29uc3QgbWVudUl0ZW1XaWR0aE5vcm1hbCA9ICczMjBweCc7XHJcbmNvbnN0IGRlc2NyaXB0aW9uQ2FyZCA9ICd3My1jYXJkLTQgdzMtZ3JlZW4gdzMtY2VsbCB3My1hbmltYXRlLXJpZ2h0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2Rlc2NXbSwgc2V0RGVzY1dtXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgd29yZCBtYXN0ZXJtaW5kXHJcbiAgY29uc3QgW2Rlc2NXaSwgc2V0RGVzY1dpXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgd29yZCBpbmZvXHJcbiAgY29uc3QgW2Rlc2NQYiwgc2V0RGVzY1BiXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZGVzY3JpYmUgcHJpc29uIGJyZWFrXHJcbiAgY29uc3QgW2V2dGVzdCwgc2V0RXZ0ZXN0XSA9IHVzZVN0YXRlKCdMb2FkaW5nJyk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/XHJcbiAgICAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2V2dGVzdCcgXHJcbiAgICA6XHJcbiAgICAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vYXBpL2V2dGVzdCdcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB4ID0gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBtb2RlOiBcIm5vLWNvcnNcIixcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOicqJyxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRFdnRlc3QoeCk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCB7XHJcbiAgICAgIHNldEV2dGVzdCgnTm90IHdvcmtpbmcgeWV0Jyk7XHJcbiAgICB9XHJcbiAgfSxbXSlcclxucmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5UaWxlIFJ1bm5lciBBcHA8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My10ZWFsXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15SGVhZGluZ0ZvbnRcIj5NZW51PC9oMT5cclxuICAgICAgICA8aDI+TWVzc2FnZSBmcm9tIHRoZSBjb2Rlcjoge2V2dGVzdH08L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWxlZnRcIj5cclxuICAgICAgICA8V01PcHRpb24gZGVzY1dtPXtkZXNjV219IHNldERlc2NXbT17c2V0RGVzY1dtfS8+XHJcbiAgICAgICAgPFdJT3B0aW9uIGRlc2NXaT17ZGVzY1dpfSBzZXREZXNjV2k9e3NldERlc2NXaX0vPlxyXG4gICAgICAgIDxCcm93c2VyVmlldz5cclxuICAgICAgICAgIDxQQk9wdGlvbiBkZXNjUGI9e2Rlc2NQYn0gc2V0RGVzY1BiPXtzZXREZXNjUGJ9Lz5cclxuICAgICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtdGVhbFwiPlxyXG4gICAgICAgIDxoMT5IYXZlIGZ1biE8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgV01PcHRpb24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB0b2dnbGVEZXNjV20gPSAoKSA9PiB7XHJcbiAgICBwcm9wcy5zZXREZXNjV20oIXByb3BzLmRlc2NXbSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jZWxsLXJvd1wiIHN0eWxlPXt7d2lkdGg6IHByb3BzLmRlc2NXbSA/ICcxMDAlJyA6IG1lbnVJdGVtV2lkdGhOb3JtYWx9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jZWxsXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC93bS9tYXN0ZXJtaW5kYH0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15U3ViSGVhZGluZ0ZvbnRcIj5Xb3JkIE1hc3Rlcm1pbmQ8L2gyPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdzMtY2VsbCAke3Byb3BzLmRlc2NXbSA/IFwidzMtY2VsbC1taWRkbGVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cInRvZ2dsZURlc2NyaWJlV21cIiBjbGFzc05hbWU9e3Byb3BzLmRlc2NXbSA/IGhpZGVCdXR0b25DbGFzc05hbWUgOiBzaG93QnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRGVzY1dtKCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Byb3BzLmRlc2NXbSA/IFwiSGlkZSBpbmZvXCIgOiA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmhlbHBfb3V0bGluZTwvaT59XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7cHJvcHMuZGVzY1dtID9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGVzY3JpcHRpb25DYXJkfT5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3My11bCBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIDxsaT48aDIgY2xhc3NOYW1lPVwiQ29tbWVuSGVhZGVyRm9udEZhbWlseVwiPldvcmQgTWFzdGVybWluZCBpcyBhIHNpbmdsZSBwbGF5ZXIgY29kZSBjcmFja2luZyBnYW1lLjwvaDI+PC9saT5cclxuICAgICAgICAgICAgPGxpPlRoZSBjb21wdXRlciBwaWNrcyBhIHJhbmRvbSB3b3JkLjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5Zb3UgZW50ZXIgZ3Vlc3NlcyB1bnRpbCB5b3UgZ3Vlc3MgY29ycmVjdGx5LjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5UaGUgY29tcHV0ZXIgdGVsbHMgeW91IGhvdyBtYW55IGxldHRlcnMgYXJlIGNvcnJlY3QgYW5kIGhvdyBtYW55IGFyZSBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbi48L2xpPlxyXG4gICAgICAgICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgPGxpPlRoZSBjb21wdXRlciBzaG93cyB5b3Ugd29yZCBpbmZvIGZvciBndWVzc2VkIHdvcmRzLjwvbGk+XHJcbiAgICAgICAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgIDxsaT5UaGUgY29tcHV0ZXIgd2lsbCBzdGFydCB3aXRoIGxlbmd0aCAyLCBhbmQgYWRkIDEgZWFjaCByb3VuZCB1cCB0byBsZW5ndGggOC4gVGhlbiBpdCBzdGFydHMgYSBuZXcgc2V0IGJhY2sgYXQgMi48L2xpPlxyXG4gICAgICAgICAgICA8bGk+RHVlIHRvIGxpY2Vuc2luZyByZXN0cmljdGlvbnMsIHRoaXMgdXNlcyBhICdjb21tb24gRW5nbGlzaCBsZXhpY29uJyBkZXZlbG9wZWQgYnkgc29tZSB3b3JkIGdhbWUgZW50aHVzaWFzdHMuPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDpcclxuICAgICAgICA8PjwvPlxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFdJT3B0aW9uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgdG9nZ2xlRGVzY1dpID0gKCkgPT4ge1xyXG4gICAgcHJvcHMuc2V0RGVzY1dpKCFwcm9wcy5kZXNjV2kpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY2VsbC1yb3dcIiBzdHlsZT17e3dpZHRoOiBwcm9wcy5kZXNjV2kgPyAnMTAwJScgOiBtZW51SXRlbVdpZHRoTm9ybWFsfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY2VsbFwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2Avd2kvd29yZGluZm9gfT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXlTdWJIZWFkaW5nRm9udFwiPldvcmQgSW5mbzwvaDI+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B3My1jZWxsICR7cHJvcHMuZGVzY1dpID8gXCJ3My1jZWxsLW1pZGRsZVwiIDogXCJcIn1gfT5cclxuICAgICAgICA8YnV0dG9uIGlkPVwidG9nZ2xlRGVzY3JpYmVXaVwiIGNsYXNzTmFtZT17cHJvcHMuZGVzY1dpID8gaGlkZUJ1dHRvbkNsYXNzTmFtZSA6IHNob3dCdXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVEZXNjV2koKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cHJvcHMuZGVzY1dpID8gXCJIaWRlIGluZm9cIiA6IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+aGVscF9vdXRsaW5lPC9pPn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtwcm9wcy5kZXNjV2kgP1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkZXNjcmlwdGlvbkNhcmR9PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInczLXVsIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgPGxpPjxoMiBjbGFzc05hbWU9XCJjb21tb25IZWFkZXJGb250RmFtaWx5XCI+V29yZCBJbmZvIGlzIGEgdXRpbGl0eSB0byBnZXQgaW5mb3JtYXRpb24gb24gd29yZHMuPC9oMj48L2xpPlxyXG4gICAgICAgICAgICA8bGk+QW5hZ3JhbXMgLSB3b3JkcyB0aGF0IHVzZSB0aGUgZXhhY3Qgc2FtZSBsZXR0ZXJzLjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5JbnNlcnRzIC0gd29yZHMgdGhhdCBjYW4gYmUgbWFkZSBieSBpbnNlcnRpbmcgYSBzaW5nbGUgbGV0dGVyLjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5Ecm9wcyAtIHdvcmRzIHRoYXQgY2FuIGJlIG1hZGUgYnkgZHJvcHBpbmcgYSBzaW5nbGUgbGV0dGVyLjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5Td2FwcyAtIHdvcmRzIHRoYXQgY2FuIGJlIG1hZGUgYnkgc3dhcHBpbmcgYSBzaW5nbGUgbGV0dGVyLjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5EdWUgdG8gbGljZW5zaW5nIHJlc3RyaWN0aW9ucywgdGhpcyB1c2VzIGEgJ2NvbW1vbiBFbmdsaXNoIGxleGljb24nIGRldmVsb3BlZCBieSBzb21lIHdvcmQgZ2FtZSBlbnRodXNpYXN0cy48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgOlxyXG4gICAgICAgIDw+PC8+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgUEJPcHRpb24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB0b2dnbGVEZXNjUGIgPSAoKSA9PiB7XHJcbiAgICBwcm9wcy5zZXREZXNjUGIoIXByb3BzLmRlc2NQYik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jZWxsLXJvd1wiIHN0eWxlPXt7d2lkdGg6IHByb3BzLmRlc2NQYiA/ICcxMDAlJyA6IG1lbnVJdGVtV2lkdGhOb3JtYWx9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jZWxsXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wYi9wcmlzb25icmVha2B9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJteVN1YkhlYWRpbmdGb250XCI+UHJpc29uIEJyZWFrPC9oMj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHczLWNlbGwgJHtwcm9wcy5kZXNjUGIgPyBcInczLWNlbGwtbWlkZGxlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJ0b2dnbGVEZXNjcmliZVBiXCIgY2xhc3NOYW1lPXtwcm9wcy5kZXNjUGIgPyBoaWRlQnV0dG9uQ2xhc3NOYW1lIDogc2hvd0J1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURlc2NQYigpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwcm9wcy5kZXNjUGIgPyBcIkhpZGUgaW5mb1wiIDogPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwX291dGxpbmU8L2k+fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtwcm9wcy5kZXNjUGIgP1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rlc2NyaXB0aW9uQ2FyZH0+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3My11bCBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxoMiBjbGFzc05hbWU9XCJjb21tb25IZWFkZXJGb250RmFtaWx5XCI+UHJpc29uIEJyZWFrIGlzIGEgdHdvIHBsYXllciBjcm9zc3dvcmQgc3R5bGUgZ2FtZS48L2gyPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPllvdSBwbGF5IHR3byBnYW1lcywgb25lIGFzIHRoZSBQcmlzb25lcnMgYW5kIG9uZSBhcyB0aGUgR3VhcmRzLiBXaG9ldmVyIGZyZWVzIHRoZSBtb3N0IHByaXNvbmVycyB3aW5zLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlByaXNvbmVycyBhbHdheXMgcGxheSBmaXJzdC48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5UaGUgZmlyc3Qgd29yZCBwbGF5ZWQgbXVzdCB0b3VjaCB0aGUgY2VudHJlIHNxdWFyZS48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5UbyBmcmVlIGEgcHJpc29uZXIsIHRoZSBQcmlzb25lcnMgbXVzdCBwbGF5IGEgdGlsZSBvbiBvbmUgb2YgdGhlIHNwZWNpYWwgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcGJTcXVhcmVFc2NhcGVIYXRjaFwiPnJ1bl9jaXJjbGU8L3NwYW4+IHNxdWFyZXMuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+V2hlbiBhIDxzcGFuIGNsYXNzTmFtZT1cInBiU3F1YXJlVXNlZEJ5R3VhcmRzXCI+Jm5ic3A7PyZuYnNwOzwvc3Bhbj4gaXMgcGxheWVkIGl0IHJlcHJlc2VudHMgYW55IGxldHRlciBhbmQgZG9lcyBub3QgaGF2ZSB0byByZW1haW4gYXMgdGhlIHNhbWUgbGV0dGVyIHRocm91Z2hvdXQgdGhlIGdhbWUuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+VGhlIDxzcGFuIGNsYXNzTmFtZT1cInBiU3F1YXJlVXNlZEJ5R3VhcmRzIHVcIj5RPC9zcGFuPiB0aWxlIGNhbiByZXByZXNlbnQgXCJRXCIgb3IgXCJRVVwiLCBkb2VzIG5vdCBoYXZlIHRvIGJlIHRoZSBzYW1lIGluIGJvdGggZGlyZWN0aW9ucywgYW5kIGRvZXMgbm90IGhhdmUgdG8gcmVtYWluIGF0IHRoZSBzYW1lIGRlc2lnbmF0aW9uIHRocm91Z2hvdXQgdGhlIGdhbWUuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBhIHBsYXllciBlbXB0aWVzIHRoZWlyIHJhY2suPC9saT5cclxuICAgICAgICAgICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBhbGwgdGhlIHNwZWNpYWwgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcGJTcXVhcmVFc2NhcGVIYXRjaFwiPnJ1bl9jaXJjbGU8L3NwYW4+IHNxdWFyZXMgYXJlIHVzZWQuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+VGhlIGdhbWUgZW5kcyBpZiBib3RoIHBsYXllcnMgcGFzcy48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5EdWUgdG8gbGljZW5zaW5nIHJlc3RyaWN0aW9ucywgdGhpcyBnYW1lIGRvZXMgbm90IHZhbGlkYXRlIHdvcmRzIGFnYWluc3QgYW55IGxleGljb24uPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA6XHJcbiAgICAgICAgPD48Lz5cclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==