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
      fetch(url, {
        method: 'get',
        mode: "no-cors",
        header: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then(response => response.json()).then(data => {
        setEvtest(data.evtest);
      });
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
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container w3-teal",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "myHeadingFont",
        children: "Menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: ["Message from the coder: ", evtest]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container w3-margin-left",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WMOption, {
        descWm: descWm,
        setDescWm: setDescWm
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WIOption, {
        descWi: descWi,
        setDescWi: setDescWi
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_device_detect__WEBPACK_IMPORTED_MODULE_3__["BrowserView"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PBOption, {
          descPb: descPb,
          setDescPb: setDescPb
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container w3-teal",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Have fun!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
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
            lineNumber: 72,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
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
          lineNumber: 80,
          columnNumber: 41
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
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
            lineNumber: 86,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "The computer picks a random word."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "You enter guesses until you guess correctly."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "The computer tells you how many letters are correct and how many are in the correct position."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_device_detect__WEBPACK_IMPORTED_MODULE_3__["BrowserView"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "The computer shows you word info for guessed words."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "Due to licensing restrictions, this uses a 'common English lexicon' developed by some word game enthusiasts."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
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
            lineNumber: 114,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
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
          lineNumber: 122,
          columnNumber: 41
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
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
            lineNumber: 128,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "Anagrams - words that use the exact same letters."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "Inserts - words that can be made by inserting a single letter."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "Drops - words that can be made by dropping a single letter."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "Swaps - words that can be made by swapping a single letter."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "Due to licensing restrictions, this uses a 'common English lexicon' developed by some word game enthusiasts."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 110,
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
            lineNumber: 153,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
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
          lineNumber: 161,
          columnNumber: 41
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
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
            lineNumber: 168,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "Prisoners always play first."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "The first word played must touch the centre square."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["To free a prisoner, the Prisoners must play a tile on one of the special ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "material-icons pbSquareEscapeHatch",
            children: "run_circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 92
          }, undefined), " squares."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["When a ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "pbSquareUsedByGuards",
            children: "\xA0?\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 26
          }, undefined), " is played it represents any letter and does not have to remain as the same letter throughout the game."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["The ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "pbSquareUsedByGuards u",
            children: "Q"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 23
          }, undefined), " tile can represent \"Q\" or \"QU\", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "The game ends if a player empties their rack."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["The game ends if all the special ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "material-icons pbSquareEscapeHatch",
            children: "run_circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 52
          }, undefined), " squares are used."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "The game ends if both players pass."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "Due to licensing restrictions, this game does not validate words against any lexicon."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 149,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaGlkZUJ1dHRvbkNsYXNzTmFtZSIsInNob3dCdXR0b25DbGFzc05hbWUiLCJtZW51SXRlbVdpZHRoTm9ybWFsIiwiZGVzY3JpcHRpb25DYXJkIiwiSG9tZSIsImRlc2NXbSIsInNldERlc2NXbSIsInVzZVN0YXRlIiwiZGVzY1dpIiwic2V0RGVzY1dpIiwiZGVzY1BiIiwic2V0RGVzY1BiIiwiZXZ0ZXN0Iiwic2V0RXZ0ZXN0IiwidXNlRWZmZWN0IiwidXJsIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVyIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJXTU9wdGlvbiIsInByb3BzIiwidG9nZ2xlRGVzY1dtIiwid2lkdGgiLCJXSU9wdGlvbiIsInRvZ2dsZURlc2NXaSIsIlBCT3B0aW9uIiwidG9nZ2xlRGVzY1BiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsbUJBQW1CLEdBQUcsNkRBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsa0NBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsT0FBNUI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsNkNBQXhCO0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUMsS0FBRCxDQUFwQyxDQUQ2QixDQUNnQjs7QUFDN0MsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRixzREFBUSxDQUFDLEtBQUQsQ0FBcEMsQ0FGNkIsQ0FFZ0I7O0FBQzdDLFFBQU07QUFBQSxPQUFDRyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkosc0RBQVEsQ0FBQyxLQUFELENBQXBDLENBSDZCLENBR2dCOztBQUM3QyxR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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixlQU9FO0FBQUEsMENBQVE7QUFBTSxxQkFBUyxFQUFDLHdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixlQVNFO0FBQUEsdUVBQXFDO0FBQU0scUJBQVMsRUFBQyxvQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURixlQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZGLGVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESCxnQkFpQkMsdUpBakNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBc0NELENBM0NEOztNQUFNMkIsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZmExMDFhMWQ0YjAzYTEwMDkzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtCcm93c2VyVmlldywgTW9iaWxlT25seVZpZXd9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgaGlkZUJ1dHRvbkNsYXNzTmFtZSA9ICd3My1idXR0b24gdzMtZ3JlZW4gdzMtaG92ZXItYmxhY2sgdzMtYm9yZGVyIHczLWFuaW1hdGUtbGVmdCc7XHJcbmNvbnN0IHNob3dCdXR0b25DbGFzc05hbWUgPSAndzMtcmlnaHQgbXltYXRlcmlhbGljb24gdzMtZ3JlZW4nO1xyXG5jb25zdCBtZW51SXRlbVdpZHRoTm9ybWFsID0gJzMyMHB4JztcclxuY29uc3QgZGVzY3JpcHRpb25DYXJkID0gJ3czLWNhcmQtNCB3My1ncmVlbiB3My1jZWxsIHczLWFuaW1hdGUtcmlnaHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbZGVzY1dtLCBzZXREZXNjV21dID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSB3b3JkIG1hc3Rlcm1pbmRcclxuICBjb25zdCBbZGVzY1dpLCBzZXREZXNjV2ldID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSB3b3JkIGluZm9cclxuICBjb25zdCBbZGVzY1BiLCBzZXREZXNjUGJdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBkZXNjcmliZSBwcmlzb24gYnJlYWtcclxuICBjb25zdCBbZXZ0ZXN0LCBzZXRFdnRlc3RdID0gdXNlU3RhdGUoJ0xvYWRpbmcnKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID9cclxuICAgICdodHRwOi8vbG9jYWxob3N0OjUwMDAvZXZ0ZXN0JyBcclxuICAgIDpcclxuICAgICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9hcGkvZXZ0ZXN0J1xyXG4gICAgdHJ5IHtcclxuICAgICAgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBtb2RlOiBcIm5vLWNvcnNcIixcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOicqJyxcclxuICAgICAgICB9XHJcbiAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgc2V0RXZ0ZXN0KGRhdGEuZXZ0ZXN0KTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGNhdGNoIHtcclxuICAgICAgc2V0RXZ0ZXN0KCdOb3Qgd29ya2luZyB5ZXQnKTtcclxuICAgIH1cclxuICB9LFtdKVxyXG5yZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlRpbGUgUnVubmVyIEFwcDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyIHczLXRlYWxcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXlIZWFkaW5nRm9udFwiPk1lbnU8L2gxPlxyXG4gICAgICAgIDxoMj5NZXNzYWdlIGZyb20gdGhlIGNvZGVyOiB7ZXZ0ZXN0fTwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1tYXJnaW4tbGVmdFwiPlxyXG4gICAgICAgIDxXTU9wdGlvbiBkZXNjV209e2Rlc2NXbX0gc2V0RGVzY1dtPXtzZXREZXNjV219Lz5cclxuICAgICAgICA8V0lPcHRpb24gZGVzY1dpPXtkZXNjV2l9IHNldERlc2NXaT17c2V0RGVzY1dpfS8+XHJcbiAgICAgICAgPEJyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgPFBCT3B0aW9uIGRlc2NQYj17ZGVzY1BifSBzZXREZXNjUGI9e3NldERlc2NQYn0vPlxyXG4gICAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My10ZWFsXCI+XHJcbiAgICAgICAgPGgxPkhhdmUgZnVuITwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBXTU9wdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHRvZ2dsZURlc2NXbSA9ICgpID0+IHtcclxuICAgIHByb3BzLnNldERlc2NXbSghcHJvcHMuZGVzY1dtKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNlbGwtcm93XCIgc3R5bGU9e3t3aWR0aDogcHJvcHMuZGVzY1dtID8gJzEwMCUnIDogbWVudUl0ZW1XaWR0aE5vcm1hbH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNlbGxcIj5cclxuICAgICAgICA8TGluayBocmVmPXtgL3dtL21hc3Rlcm1pbmRgfT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXlTdWJIZWFkaW5nRm9udFwiPldvcmQgTWFzdGVybWluZDwvaDI+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B3My1jZWxsICR7cHJvcHMuZGVzY1dtID8gXCJ3My1jZWxsLW1pZGRsZVwiIDogXCJcIn1gfT5cclxuICAgICAgICA8YnV0dG9uIGlkPVwidG9nZ2xlRGVzY3JpYmVXbVwiIGNsYXNzTmFtZT17cHJvcHMuZGVzY1dtID8gaGlkZUJ1dHRvbkNsYXNzTmFtZSA6IHNob3dCdXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVEZXNjV20oKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cHJvcHMuZGVzY1dtID8gXCJIaWRlIGluZm9cIiA6IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+aGVscF9vdXRsaW5lPC9pPn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtwcm9wcy5kZXNjV20gP1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkZXNjcmlwdGlvbkNhcmR9PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInczLXVsIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgPGxpPjxoMiBjbGFzc05hbWU9XCJDb21tZW5IZWFkZXJGb250RmFtaWx5XCI+V29yZCBNYXN0ZXJtaW5kIGlzIGEgc2luZ2xlIHBsYXllciBjb2RlIGNyYWNraW5nIGdhbWUuPC9oMj48L2xpPlxyXG4gICAgICAgICAgICA8bGk+VGhlIGNvbXB1dGVyIHBpY2tzIGEgcmFuZG9tIHdvcmQuPC9saT5cclxuICAgICAgICAgICAgPGxpPllvdSBlbnRlciBndWVzc2VzIHVudGlsIHlvdSBndWVzcyBjb3JyZWN0bHkuPC9saT5cclxuICAgICAgICAgICAgPGxpPlRoZSBjb21wdXRlciB0ZWxscyB5b3UgaG93IG1hbnkgbGV0dGVycyBhcmUgY29ycmVjdCBhbmQgaG93IG1hbnkgYXJlIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uLjwvbGk+XHJcbiAgICAgICAgICAgIDxCcm93c2VyVmlldz5cclxuICAgICAgICAgICAgICA8bGk+VGhlIGNvbXB1dGVyIHNob3dzIHlvdSB3b3JkIGluZm8gZm9yIGd1ZXNzZWQgd29yZHMuPC9saT5cclxuICAgICAgICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgICAgICAgICAgPGxpPlRoZSBjb21wdXRlciB3aWxsIHN0YXJ0IHdpdGggbGVuZ3RoIDIsIGFuZCBhZGQgMSBlYWNoIHJvdW5kIHVwIHRvIGxlbmd0aCA4LiBUaGVuIGl0IHN0YXJ0cyBhIG5ldyBzZXQgYmFjayBhdCAyLjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5EdWUgdG8gbGljZW5zaW5nIHJlc3RyaWN0aW9ucywgdGhpcyB1c2VzIGEgJ2NvbW1vbiBFbmdsaXNoIGxleGljb24nIGRldmVsb3BlZCBieSBzb21lIHdvcmQgZ2FtZSBlbnRodXNpYXN0cy48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgOlxyXG4gICAgICAgIDw+PC8+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgV0lPcHRpb24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB0b2dnbGVEZXNjV2kgPSAoKSA9PiB7XHJcbiAgICBwcm9wcy5zZXREZXNjV2koIXByb3BzLmRlc2NXaSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jZWxsLXJvd1wiIHN0eWxlPXt7d2lkdGg6IHByb3BzLmRlc2NXaSA/ICcxMDAlJyA6IG1lbnVJdGVtV2lkdGhOb3JtYWx9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jZWxsXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC93aS93b3JkaW5mb2B9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJteVN1YkhlYWRpbmdGb250XCI+V29yZCBJbmZvPC9oMj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHczLWNlbGwgJHtwcm9wcy5kZXNjV2kgPyBcInczLWNlbGwtbWlkZGxlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJ0b2dnbGVEZXNjcmliZVdpXCIgY2xhc3NOYW1lPXtwcm9wcy5kZXNjV2kgPyBoaWRlQnV0dG9uQ2xhc3NOYW1lIDogc2hvd0J1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURlc2NXaSgpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwcm9wcy5kZXNjV2kgPyBcIkhpZGUgaW5mb1wiIDogPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwX291dGxpbmU8L2k+fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Byb3BzLmRlc2NXaSA/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rlc2NyaXB0aW9uQ2FyZH0+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidzMtdWwgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICA8bGk+PGgyIGNsYXNzTmFtZT1cImNvbW1vbkhlYWRlckZvbnRGYW1pbHlcIj5Xb3JkIEluZm8gaXMgYSB1dGlsaXR5IHRvIGdldCBpbmZvcm1hdGlvbiBvbiB3b3Jkcy48L2gyPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5BbmFncmFtcyAtIHdvcmRzIHRoYXQgdXNlIHRoZSBleGFjdCBzYW1lIGxldHRlcnMuPC9saT5cclxuICAgICAgICAgICAgPGxpPkluc2VydHMgLSB3b3JkcyB0aGF0IGNhbiBiZSBtYWRlIGJ5IGluc2VydGluZyBhIHNpbmdsZSBsZXR0ZXIuPC9saT5cclxuICAgICAgICAgICAgPGxpPkRyb3BzIC0gd29yZHMgdGhhdCBjYW4gYmUgbWFkZSBieSBkcm9wcGluZyBhIHNpbmdsZSBsZXR0ZXIuPC9saT5cclxuICAgICAgICAgICAgPGxpPlN3YXBzIC0gd29yZHMgdGhhdCBjYW4gYmUgbWFkZSBieSBzd2FwcGluZyBhIHNpbmdsZSBsZXR0ZXIuPC9saT5cclxuICAgICAgICAgICAgPGxpPkR1ZSB0byBsaWNlbnNpbmcgcmVzdHJpY3Rpb25zLCB0aGlzIHVzZXMgYSAnY29tbW9uIEVuZ2xpc2ggbGV4aWNvbicgZGV2ZWxvcGVkIGJ5IHNvbWUgd29yZCBnYW1lIGVudGh1c2lhc3RzLjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA6XHJcbiAgICAgICAgPD48Lz5cclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBQQk9wdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHRvZ2dsZURlc2NQYiA9ICgpID0+IHtcclxuICAgIHByb3BzLnNldERlc2NQYighcHJvcHMuZGVzY1BiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNlbGwtcm93XCIgc3R5bGU9e3t3aWR0aDogcHJvcHMuZGVzY1BiID8gJzEwMCUnIDogbWVudUl0ZW1XaWR0aE5vcm1hbH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNlbGxcIj5cclxuICAgICAgICA8TGluayBocmVmPXtgL3BiL3ByaXNvbmJyZWFrYH0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15U3ViSGVhZGluZ0ZvbnRcIj5Qcmlzb24gQnJlYWs8L2gyPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdzMtY2VsbCAke3Byb3BzLmRlc2NQYiA/IFwidzMtY2VsbC1taWRkbGVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cInRvZ2dsZURlc2NyaWJlUGJcIiBjbGFzc05hbWU9e3Byb3BzLmRlc2NQYiA/IGhpZGVCdXR0b25DbGFzc05hbWUgOiBzaG93QnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRGVzY1BiKCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Byb3BzLmRlc2NQYiA/IFwiSGlkZSBpbmZvXCIgOiA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmhlbHBfb3V0bGluZTwvaT59XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Byb3BzLmRlc2NQYiA/XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGVzY3JpcHRpb25DYXJkfT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInczLXVsIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgICA8bGk+PGgyIGNsYXNzTmFtZT1cImNvbW1vbkhlYWRlckZvbnRGYW1pbHlcIj5Qcmlzb24gQnJlYWsgaXMgYSB0d28gcGxheWVyIGNyb3Nzd29yZCBzdHlsZSBnYW1lLjwvaDI+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+WW91IHBsYXkgdHdvIGdhbWVzLCBvbmUgYXMgdGhlIFByaXNvbmVycyBhbmQgb25lIGFzIHRoZSBHdWFyZHMuIFdob2V2ZXIgZnJlZXMgdGhlIG1vc3QgcHJpc29uZXJzIHdpbnMuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+UHJpc29uZXJzIGFsd2F5cyBwbGF5IGZpcnN0LjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlRoZSBmaXJzdCB3b3JkIHBsYXllZCBtdXN0IHRvdWNoIHRoZSBjZW50cmUgc3F1YXJlLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlRvIGZyZWUgYSBwcmlzb25lciwgdGhlIFByaXNvbmVycyBtdXN0IHBsYXkgYSB0aWxlIG9uIG9uZSBvZiB0aGUgc3BlY2lhbCA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBwYlNxdWFyZUVzY2FwZUhhdGNoXCI+cnVuX2NpcmNsZTwvc3Bhbj4gc3F1YXJlcy48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5XaGVuIGEgPHNwYW4gY2xhc3NOYW1lPVwicGJTcXVhcmVVc2VkQnlHdWFyZHNcIj4mbmJzcDs/Jm5ic3A7PC9zcGFuPiBpcyBwbGF5ZWQgaXQgcmVwcmVzZW50cyBhbnkgbGV0dGVyIGFuZCBkb2VzIG5vdCBoYXZlIHRvIHJlbWFpbiBhcyB0aGUgc2FtZSBsZXR0ZXIgdGhyb3VnaG91dCB0aGUgZ2FtZS48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5UaGUgPHNwYW4gY2xhc3NOYW1lPVwicGJTcXVhcmVVc2VkQnlHdWFyZHMgdVwiPlE8L3NwYW4+IHRpbGUgY2FuIHJlcHJlc2VudCBcIlFcIiBvciBcIlFVXCIsIGRvZXMgbm90IGhhdmUgdG8gYmUgdGhlIHNhbWUgaW4gYm90aCBkaXJlY3Rpb25zLCBhbmQgZG9lcyBub3QgaGF2ZSB0byByZW1haW4gYXQgdGhlIHNhbWUgZGVzaWduYXRpb24gdGhyb3VnaG91dCB0aGUgZ2FtZS48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5UaGUgZ2FtZSBlbmRzIGlmIGEgcGxheWVyIGVtcHRpZXMgdGhlaXIgcmFjay48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5UaGUgZ2FtZSBlbmRzIGlmIGFsbCB0aGUgc3BlY2lhbCA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBwYlNxdWFyZUVzY2FwZUhhdGNoXCI+cnVuX2NpcmNsZTwvc3Bhbj4gc3F1YXJlcyBhcmUgdXNlZC48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5UaGUgZ2FtZSBlbmRzIGlmIGJvdGggcGxheWVycyBwYXNzLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPkR1ZSB0byBsaWNlbnNpbmcgcmVzdHJpY3Rpb25zLCB0aGlzIGdhbWUgZG9lcyBub3QgdmFsaWRhdGUgd29yZHMgYWdhaW5zdCBhbnkgbGV4aWNvbi48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDpcclxuICAgICAgICA8PjwvPlxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9