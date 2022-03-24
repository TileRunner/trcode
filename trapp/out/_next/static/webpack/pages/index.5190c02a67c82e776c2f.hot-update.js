self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/fyb/fybSolo.js":
/*!******************************!*\
  !*** ./pages/fyb/fybSolo.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/wordfunctions */ "./lib/wordfunctions.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\fyb\\fybSolo.js",
    _s = $RefreshSig$();




const FryYourBrainSolo = ({
  setWhereto
}) => {
  _s();

  const baseurl =  true ? 'http://localhost:5000' : 0;
  const {
    0: pickedLetters,
    1: setPickedLetters
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // All pre-picked fry letters as an array

  const {
    0: fryLetters,
    1: setFryLetters
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Fry letters shown at current stage as an array

  const {
    0: word,
    1: setWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1); // Used for letting the user move fry letters around

  const {
    0: moves,
    1: setMoves
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: warning,
    1: setWarning
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Practice session.');
  const {
    0: validOnly,
    1: setValidOnly
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // whether guesses must be valid words

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    pickAllFryLetters();
  }, []);

  const pickAllFryLetters = async () => {
    let url = `${baseurl}/ENABLE2K?prepickfry=true&guarantee=6`;
    const response = await fetch(url);
    const data = await response.json();
    let picked = data.fryLetters.join('');
    let newPick = Array.from(picked.toUpperCase());
    setPickedLetters(newPick);
    setFryLetters(newPick.slice(0, 3));
  };

  async function getChefsPick() {
    let url = `${baseurl}/ENABLE2K?topfry=true&letters=${fryLetters.join('')}&count=1`;
    const response = await fetch(url);
    const jdata = await response.json();
    return jdata.answers && jdata.answers.length > 0 ? jdata.answers[0] : '';
  }

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitPlayerWord();
      return;
    }
  };

  const submitPlayerWord = async () => {
    let fixedword = word.toUpperCase().trim(); // Check if they have all the fry letters

    for (let i = 0; i < fryLetters.length; i++) {
      let letterCountRequired = 0;
      let actualLetterCount = 0;

      for (let j = 0; j < fryLetters.length; j++) {
        if (fryLetters[i] === fryLetters[j]) {
          letterCountRequired = letterCountRequired + 1;
        }
      }

      for (let j = 0; j < fixedword.length; j++) {
        if (fryLetters[i] === fixedword[j]) {
          actualLetterCount = actualLetterCount + 1;
        }
      }

      if (actualLetterCount < letterCountRequired) {
        setWarning(`You need the letter ${fryLetters[i]} at least ${letterCountRequired} time${letterCountRequired === 1 ? '.' : 's.'}`);
        return;
      }
    }

    let valid = await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__.isWordValid)(word);

    if (validOnly && !valid) {
      alert(`Sorry, ${fixedword} is not in my word list.`);
      return;
    }

    let move = {
      pass: false,
      word: word,
      valid: valid
    };
    await finishMoveAndMoveOn(move);
  };

  const submitPass = async () => {
    let move = {
      pass: true
    };
    await finishMoveAndMoveOn(move);
  };

  async function finishMoveAndMoveOn(move) {
    let chefsPick = await getChefsPick();
    move.fryLetters = fryLetters;
    move.chefsPick = chefsPick;
    let newmoves = [...moves];
    newmoves.push(move);

    while (newmoves.length > 15) {
      newmoves.splice(0, 1);
    }

    setMoves(newmoves);

    if (fryLetters.length === pickedLetters.length) {
      await pickAllFryLetters();
      setWord('');
      setWarning('New fry letters picked.');
    } else {
      let newFryLetters = pickedLetters.slice(0, fryLetters.length + 1);
      setFryLetters(newFryLetters);
      setWarning('');
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trTitle",
      children: ["Fry Your Brain Solo", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
          lineNumber: 104,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "checkbox",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: validOnly ? 'checkboxOn' : 'checkboxOff',
        "data-toggle": "tooltip",
        title: "Whether guess must be valid words",
        onClick: () => {
          setValidOnly(!validOnly);
        }
      }, 'buttonvalidonly', false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "checkboxLabel",
        children: "Guesses must be valid words"
      }, 'labelvalidonly', false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, undefined), moves.length >= 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "trTable",
        border: "1",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Fry Letters"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Play Made"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Result"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Chefs Pick"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: moves.map((m, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.fryLetters
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [m.pass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trDanger",
                children: "PASS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 48
              }, undefined), !m.pass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: m.word
              }, void 0, false)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [!m.pass && m.valid && m.word.length === m.chefsPick.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trEmphasis",
                children: "Shortest!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 100
              }, undefined), !m.pass && m.valid && m.word.length > m.chefsPick.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: "Valid"
              }, void 0, false), !m.pass && !m.valid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trDanger",
                children: "Phoney"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 61
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.chefsPick
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 33
            }, undefined)]
          }, `solomove${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 35
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: ["Prepicked fry letters: ", pickedLetters]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }, undefined), fryLetters.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: ["Fry Letters:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton fryLetterActionButton",
          onClick: () => {
            let shuffleSize = fryLetters.length;
            let beforeShuffle = [...fryLetters];
            let afterShuffle = [];

            while (afterShuffle.length < shuffleSize) {
              let rand = Math.floor(Math.random() * beforeShuffle.length);
              afterShuffle.push(beforeShuffle[rand]);
              beforeShuffle.splice(rand, 1);
            }

            ;
            setFryLetters(afterShuffle);
            setSelected(-1);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "material-icons fryLetterActionButtonIcon",
            children: "cached"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton fryLetterActionButton",
          onClick: () => {
            let sortwork = [...fryLetters];
            sortwork.sort();
            setFryLetters(sortwork);
            setSelected(-1);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "material-icons fryLetterActionButtonIcon",
            children: "sort_by_alpha"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "fryLetterDiv",
        children: fryLetters.map((fl, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: i === selected ? "fybFryLetter Selected" : "fybFryLetter",
          onDoubleClick: () => {
            let moveLetter = fryLetters[i];
            let shiftedLetters = [...fryLetters];
            shiftedLetters.splice(i, 1);
            shiftedLetters.push(moveLetter);
            setFryLetters([...shiftedLetters]);
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
              let moveLetter = fryLetters[selected];

              for (let index = 0; index < fryLetters.length; index++) {
                const element = fryLetters[index];

                if (index === i) {
                  shiftedLetters.push(moveLetter);
                }

                if (index !== selected) {
                  shiftedLetters.push(element);
                }
              }

              setFryLetters(shiftedLetters);
              setSelected(-1);
            }
          },
          children: fl
        }, `SoloFryLetter${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onKeyDownCapture: handleKeyDown,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trEmphasis",
          children: "Enter Word:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          placeholder: "Enter word here",
          autoComplete: "off",
          spellCheck: "false",
          name: "word",
          value: word,
          onChange: e => {
            setWord(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "closemebutton",
          onClick: () => {
            setWord('');
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [word.toUpperCase().trim().match("^[a-zA-Z]*$") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              submitPlayerWord();
            },
            children: "SUBMIT"
          }, "submitWord", false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              submitPass();
            },
            children: "PASS"
          }, "passButton", false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 39
    }, undefined), warning && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trWarning",
      children: warning
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 25
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 9
  }, undefined);
};

_s(FryYourBrainSolo, "U2H6lYt+7YJCGpisfOFTwLQqAcw=");

_c = FryYourBrainSolo;
/* harmony default export */ __webpack_exports__["default"] = (FryYourBrainSolo);

var _c;

$RefreshReg$(_c, "FryYourBrainSolo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2Z5YlNvbG8uanMiXSwibmFtZXMiOlsiRnJ5WW91ckJyYWluU29sbyIsInNldFdoZXJldG8iLCJiYXNldXJsIiwicGlja2VkTGV0dGVycyIsInNldFBpY2tlZExldHRlcnMiLCJ1c2VTdGF0ZSIsImZyeUxldHRlcnMiLCJzZXRGcnlMZXR0ZXJzIiwid29yZCIsInNldFdvcmQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwibW92ZXMiLCJzZXRNb3ZlcyIsIndhcm5pbmciLCJzZXRXYXJuaW5nIiwidmFsaWRPbmx5Iiwic2V0VmFsaWRPbmx5IiwidXNlRWZmZWN0IiwicGlja0FsbEZyeUxldHRlcnMiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwaWNrZWQiLCJqb2luIiwibmV3UGljayIsIkFycmF5IiwiZnJvbSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRDaGVmc1BpY2siLCJqZGF0YSIsImFuc3dlcnMiLCJsZW5ndGgiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdFBsYXllcldvcmQiLCJmaXhlZHdvcmQiLCJ0cmltIiwiaSIsImxldHRlckNvdW50UmVxdWlyZWQiLCJhY3R1YWxMZXR0ZXJDb3VudCIsImoiLCJ2YWxpZCIsImlzV29yZFZhbGlkIiwiYWxlcnQiLCJtb3ZlIiwicGFzcyIsImZpbmlzaE1vdmVBbmRNb3ZlT24iLCJzdWJtaXRQYXNzIiwiY2hlZnNQaWNrIiwibmV3bW92ZXMiLCJwdXNoIiwic3BsaWNlIiwibmV3RnJ5TGV0dGVycyIsIm1hcCIsIm0iLCJzaHVmZmxlU2l6ZSIsImJlZm9yZVNodWZmbGUiLCJhZnRlclNodWZmbGUiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic29ydHdvcmsiLCJzb3J0IiwiZmwiLCJtb3ZlTGV0dGVyIiwic2hpZnRlZExldHRlcnMiLCJpbmRleCIsImVsZW1l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NjdjODJlNzc2YzJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBpc1dvcmRWYWxpZCB9IGZyb20gXCIuLi8uLi9saWIvd29yZGZ1bmN0aW9uc1wiO1xyXG5cclxuY29uc3QgRnJ5WW91ckJyYWluU29sbyA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJztcclxuICAgIGNvbnN0IFtwaWNrZWRMZXR0ZXJzLCBzZXRQaWNrZWRMZXR0ZXJzXSA9IHVzZVN0YXRlKFtdKTsgLy8gQWxsIHByZS1waWNrZWQgZnJ5IGxldHRlcnMgYXMgYW4gYXJyYXlcclxuICAgIGNvbnN0IFtmcnlMZXR0ZXJzLCBzZXRGcnlMZXR0ZXJzXSA9IHVzZVN0YXRlKFtdKTsgLy8gRnJ5IGxldHRlcnMgc2hvd24gYXQgY3VycmVudCBzdGFnZSBhcyBhbiBhcnJheVxyXG4gICAgY29uc3QgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgtMSk7IC8vIFVzZWQgZm9yIGxldHRpbmcgdGhlIHVzZXIgbW92ZSBmcnkgbGV0dGVycyBhcm91bmRcclxuICAgIGNvbnN0IFttb3Zlcywgc2V0TW92ZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3dhcm5pbmcsIHNldFdhcm5pbmddID0gdXNlU3RhdGUoJ1ByYWN0aWNlIHNlc3Npb24uJyk7XHJcbiAgICBjb25zdCBbdmFsaWRPbmx5LCBzZXRWYWxpZE9ubHldID0gdXNlU3RhdGUoZmFsc2UpOyAvLyB3aGV0aGVyIGd1ZXNzZXMgbXVzdCBiZSB2YWxpZCB3b3Jkc1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcGlja0FsbEZyeUxldHRlcnMoKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIGNvbnN0IHBpY2tBbGxGcnlMZXR0ZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz9wcmVwaWNrZnJ5PXRydWUmZ3VhcmFudGVlPTZgO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGxldCBwaWNrZWQgPSBkYXRhLmZyeUxldHRlcnMuam9pbignJyk7XHJcbiAgICAgICAgbGV0IG5ld1BpY2sgPSBBcnJheS5mcm9tKHBpY2tlZC50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICBzZXRQaWNrZWRMZXR0ZXJzKG5ld1BpY2spO1xyXG4gICAgICAgIHNldEZyeUxldHRlcnMobmV3UGljay5zbGljZSgwLDMpKTtcclxuICAgIH07XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q2hlZnNQaWNrKCkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz90b3Bmcnk9dHJ1ZSZsZXR0ZXJzPSR7ZnJ5TGV0dGVycy5qb2luKCcnKX0mY291bnQ9MWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBqZGF0YS5hbnN3ZXJzICYmIGpkYXRhLmFuc3dlcnMubGVuZ3RoID4gMCA/IGpkYXRhLmFuc3dlcnNbMF0gOiAnJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHN1Ym1pdFBsYXllcldvcmQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJtaXRQbGF5ZXJXb3JkID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgbGV0IGZpeGVkd29yZCA9IHdvcmQudG9VcHBlckNhc2UoKS50cmltKCk7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhleSBoYXZlIGFsbCB0aGUgZnJ5IGxldHRlcnNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyeUxldHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGxldHRlckNvdW50UmVxdWlyZWQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgYWN0dWFsTGV0dGVyQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZyeUxldHRlcnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmcnlMZXR0ZXJzW2ldID09PSBmcnlMZXR0ZXJzW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyQ291bnRSZXF1aXJlZCA9IGxldHRlckNvdW50UmVxdWlyZWQgKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZml4ZWR3b3JkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZnJ5TGV0dGVyc1tpXSA9PT0gZml4ZWR3b3JkW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsTGV0dGVyQ291bnQgPSBhY3R1YWxMZXR0ZXJDb3VudCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFjdHVhbExldHRlckNvdW50IDwgbGV0dGVyQ291bnRSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0V2FybmluZyhgWW91IG5lZWQgdGhlIGxldHRlciAke2ZyeUxldHRlcnNbaV19IGF0IGxlYXN0ICR7bGV0dGVyQ291bnRSZXF1aXJlZH0gdGltZSR7bGV0dGVyQ291bnRSZXF1aXJlZCA9PT0gMSA/ICcuJyA6ICdzLid9YCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZhbGlkID0gYXdhaXQgaXNXb3JkVmFsaWQod29yZCk7XHJcbiAgICAgICAgaWYgKHZhbGlkT25seSAmJiAhdmFsaWQpIHtcclxuICAgICAgICAgICAgYWxlcnQoYFNvcnJ5LCAke2ZpeGVkd29yZH0gaXMgbm90IGluIG15IHdvcmQgbGlzdC5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbW92ZSA9IHtwYXNzOmZhbHNlLCB3b3JkOiB3b3JkLCB2YWxpZDogdmFsaWR9O1xyXG4gICAgICAgIGF3YWl0IGZpbmlzaE1vdmVBbmRNb3ZlT24obW92ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VibWl0UGFzcyA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGxldCBtb3ZlID0ge3Bhc3M6dHJ1ZX07XHJcbiAgICAgICAgYXdhaXQgZmluaXNoTW92ZUFuZE1vdmVPbihtb3ZlKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmaW5pc2hNb3ZlQW5kTW92ZU9uKG1vdmUpIHtcclxuICAgICAgICBsZXQgY2hlZnNQaWNrID0gYXdhaXQgZ2V0Q2hlZnNQaWNrKCk7XHJcbiAgICAgICAgbW92ZS5mcnlMZXR0ZXJzID0gZnJ5TGV0dGVycztcclxuICAgICAgICBtb3ZlLmNoZWZzUGljayA9IGNoZWZzUGljaztcclxuICAgICAgICBsZXQgbmV3bW92ZXMgPSBbLi4ubW92ZXNdO1xyXG4gICAgICAgIG5ld21vdmVzLnB1c2gobW92ZSk7XHJcbiAgICAgICAgd2hpbGUgKG5ld21vdmVzLmxlbmd0aCA+IDE1KSB7XHJcbiAgICAgICAgICAgIG5ld21vdmVzLnNwbGljZSgwLDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRNb3ZlcyhuZXdtb3Zlcyk7XHJcbiAgICAgICAgaWYgKGZyeUxldHRlcnMubGVuZ3RoID09PSBwaWNrZWRMZXR0ZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBhd2FpdCBwaWNrQWxsRnJ5TGV0dGVycygpO1xyXG4gICAgICAgICAgICBzZXRXb3JkKCcnKTtcclxuICAgICAgICAgICAgc2V0V2FybmluZygnTmV3IGZyeSBsZXR0ZXJzIHBpY2tlZC4nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdGcnlMZXR0ZXJzID0gcGlja2VkTGV0dGVycy5zbGljZSgwLCBmcnlMZXR0ZXJzLmxlbmd0aCArIDEpO1xyXG4gICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKG5ld0ZyeUxldHRlcnMpO1xyXG4gICAgICAgICAgICBzZXRXYXJuaW5nKCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIEZyeSBZb3VyIEJyYWluIFNvbG9cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9J2J1dHRvbnZhbGlkb25seSdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dmFsaWRPbmx5ID8gJ2NoZWNrYm94T24nIDogJ2NoZWNrYm94T2ZmJ31cclxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiV2hldGhlciBndWVzcyBtdXN0IGJlIHZhbGlkIHdvcmRzXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRWYWxpZE9ubHkoIXZhbGlkT25seSk7fX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9J2xhYmVsdmFsaWRvbmx5JyBjbGFzc05hbWU9J2NoZWNrYm94TGFiZWwnPkd1ZXNzZXMgbXVzdCBiZSB2YWxpZCB3b3Jkczwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHttb3Zlcy5sZW5ndGggPj0gMCAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIiBib3JkZXI9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RnJ5IExldHRlcnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBsYXkgTWFkZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVzdWx0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DaGVmcyBQaWNrPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmVzLm1hcCgobSxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgc29sb21vdmUke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttLmZyeUxldHRlcnN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttLnBhc3MgJiYgPHNwYW4gY2xhc3NOYW1lPVwidHJEYW5nZXJcIj5QQVNTPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFtLnBhc3MgJiYgPD57bS53b3JkfTwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFtLnBhc3MgJiYgbS52YWxpZCAmJiBtLndvcmQubGVuZ3RoID09PSBtLmNoZWZzUGljay5sZW5ndGggJiYgPHNwYW4gY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPlNob3J0ZXN0ITwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshbS5wYXNzICYmIG0udmFsaWQgJiYgbS53b3JkLmxlbmd0aCA+IG0uY2hlZnNQaWNrLmxlbmd0aCAmJiA8PlZhbGlkPC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW0ucGFzcyAmJiAhbS52YWxpZCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPlBob25leTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e20uY2hlZnNQaWNrfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICA8ZGl2PlByZXBpY2tlZCBmcnkgbGV0dGVyczoge3BpY2tlZExldHRlcnN9PC9kaXY+XHJcbiAgICAgICAgICAgIHtmcnlMZXR0ZXJzLmxlbmd0aCA+IDAgJiYgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5GcnkgTGV0dGVyczpcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uIGZyeUxldHRlckFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNodWZmbGVTaXplID0gZnJ5TGV0dGVycy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiZWZvcmVTaHVmZmxlID0gWy4uLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWZ0ZXJTaHVmZmxlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChhZnRlclNodWZmbGUubGVuZ3RoIDwgc2h1ZmZsZVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYmVmb3JlU2h1ZmZsZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTaHVmZmxlLnB1c2goYmVmb3JlU2h1ZmZsZVtyYW5kXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVTaHVmZmxlLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RnJ5TGV0dGVycyhhZnRlclNodWZmbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBmcnlMZXR0ZXJBY3Rpb25CdXR0b25JY29uXCI+Y2FjaGVkPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b24gZnJ5TGV0dGVyQWN0aW9uQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc29ydHdvcmsgPSBbLi4uZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnR3b3JrLnNvcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RnJ5TGV0dGVycyhzb3J0d29yayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGZyeUxldHRlckFjdGlvbkJ1dHRvbkljb25cIj5zb3J0X2J5X2FscGhhPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyeUxldHRlckRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmcnlMZXR0ZXJzLm1hcCgoZmwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgU29sb0ZyeUxldHRlciR7aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpID09PSBzZWxlY3RlZCA/IFwiZnliRnJ5TGV0dGVyIFNlbGVjdGVkXCIgOiBcImZ5YkZyeUxldHRlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlTGV0dGVyID0gZnJ5TGV0dGVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpZnRlZExldHRlcnMgPSBbLi4uZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2gobW92ZUxldHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RnJ5TGV0dGVycyhbLi4uc2hpZnRlZExldHRlcnNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpOyAvLyB1bnNlbGVjdCB3aGVuIGNsaWNrZWQgYSBzZWNvbmQgdGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgc2VsZWN0ZWQgdGlsZSB0byB0aGlzIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlmdGVkTGV0dGVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZUxldHRlciA9IGZyeUxldHRlcnNbc2VsZWN0ZWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZnJ5TGV0dGVycy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBmcnlMZXR0ZXJzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2gobW92ZUxldHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKHNoaWZ0ZWRMZXR0ZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+e2ZsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5FbnRlciBXb3JkOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgd29yZCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCIgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZW1lYnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdvcmQoJycpO319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7d29yZC50b1VwcGVyQ2FzZSgpLnRyaW0oKS5tYXRjaChcIl5bYS16QS1aXSokXCIpICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIGtleT1cInN1Ym1pdFdvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzdWJtaXRQbGF5ZXJXb3JkKCl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVUJNSVRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBrZXk9XCJwYXNzQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzdWJtaXRQYXNzKCl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBBU1NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICB7d2FybmluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInRyV2FybmluZ1wiPnt3YXJuaW5nfTwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyeVlvdXJCcmFpblNvbG87XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=