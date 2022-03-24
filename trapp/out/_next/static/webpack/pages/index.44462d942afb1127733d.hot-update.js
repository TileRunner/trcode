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
      className: "trOptionsDiv",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "checkbox",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          checked: validOnly,
          className: validOnly ? 'checkboxOn' : 'trOptionsCheckboxOff',
          "data-toggle": "tooltip",
          title: "Whether guess must be valid words",
          onClick: () => {
            setValidOnly(!validOnly);
          }
        }, 'buttonvalidonly', false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: ["Guesses must be valid words ", validOnly ? 'on' : 'off']
        }, 'labelvalidonly', true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
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
              lineNumber: 121,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Play Made"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Result"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Chefs Pick"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: moves.map((m, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.fryLetters
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [m.pass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trDanger",
                children: "PASS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 48
              }, undefined), !m.pass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: m.word
              }, void 0, false)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [!m.pass && m.valid && m.word.length === m.chefsPick.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trEmphasis",
                children: "Shortest!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 100
              }, undefined), !m.pass && m.valid && m.word.length > m.chefsPick.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: "Valid"
              }, void 0, false), !m.pass && !m.valid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trDanger",
                children: "Phoney"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 61
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.chefsPick
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 33
            }, undefined)]
          }, `solomove${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 35
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: ["Prepicked fry letters: ", pickedLetters]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 146,
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
            lineNumber: 161,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
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
            lineNumber: 169,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
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
          lineNumber: 174,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onKeyDownCapture: handleKeyDown,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trEmphasis",
          children: "Enter Word:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
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
          lineNumber: 211,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "closemebutton",
          onClick: () => {
            setWord('');
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
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
            lineNumber: 222,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              submitPass();
            },
            children: "PASS"
          }, "passButton", false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 39
    }, undefined), warning && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trWarning",
      children: warning
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 234,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2Z5YlNvbG8uanMiXSwibmFtZXMiOlsiRnJ5WW91ckJyYWluU29sbyIsInNldFdoZXJldG8iLCJiYXNldXJsIiwicGlja2VkTGV0dGVycyIsInNldFBpY2tlZExldHRlcnMiLCJ1c2VTdGF0ZSIsImZyeUxldHRlcnMiLCJzZXRGcnlMZXR0ZXJzIiwid29yZCIsInNldFdvcmQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwibW92ZXMiLCJzZXRNb3ZlcyIsIndhcm5pbmciLCJzZXRXYXJuaW5nIiwidmFsaWRPbmx5Iiwic2V0VmFsaWRPbmx5IiwidXNlRWZmZWN0IiwicGlja0FsbEZyeUxldHRlcnMiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwaWNrZWQiLCJqb2luIiwibmV3UGljayIsIkFycmF5IiwiZnJvbSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRDaGVmc1BpY2siLCJqZGF0YSIsImFuc3dlcnMiLCJsZW5ndGgiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdFBsYXllcldvcmQiLCJmaXhlZHdvcmQiLCJ0cmltIiwiaSIsImxldHRlckNvdW50UmVxdWlyZWQiLCJhY3R1YWxMZXR0ZXJDb3VudCIsImoiLCJ2YWxpZCIsImlzV29yZFZhbGlkIiwiYWxlcnQiLCJtb3ZlIiwicGFzcyIsImZpbmlzaE1vdmVBbmRNb3ZlT24iLCJzdWJtaXRQYXNzIiwiY2hlZnNQaWNrIiwibmV3bW92ZXMiLCJwdXNoIiwic3BsaWNlIiwibmV3RnJ5TGV0dGVycyIsIm1hcCIsIm0iLCJzaHVmZmxlU2l6ZSIsImJlZm9yZVNodWZmbGUiLCJhZnRlclNodWZmbGUiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic29ydHdvcmsiLCJzb3J0IiwiZmwiLCJtb3ZlTGV0dGVyIiwic2hpZnRlZExldHRlcnMiLCJpbmRleCIsImVsZW1l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O0FBMElILENBek9EOztHQUFNZCxnQjs7S0FBQUEsZ0I7QUEyT04sK0RBQWVBLGdCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ0NDYyZDk0MmFmYjExMjc3MzNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBpc1dvcmRWYWxpZCB9IGZyb20gXCIuLi8uLi9saWIvd29yZGZ1bmN0aW9uc1wiO1xyXG5cclxuY29uc3QgRnJ5WW91ckJyYWluU29sbyA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJztcclxuICAgIGNvbnN0IFtwaWNrZWRMZXR0ZXJzLCBzZXRQaWNrZWRMZXR0ZXJzXSA9IHVzZVN0YXRlKFtdKTsgLy8gQWxsIHByZS1waWNrZWQgZnJ5IGxldHRlcnMgYXMgYW4gYXJyYXlcclxuICAgIGNvbnN0IFtmcnlMZXR0ZXJzLCBzZXRGcnlMZXR0ZXJzXSA9IHVzZVN0YXRlKFtdKTsgLy8gRnJ5IGxldHRlcnMgc2hvd24gYXQgY3VycmVudCBzdGFnZSBhcyBhbiBhcnJheVxyXG4gICAgY29uc3QgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgtMSk7IC8vIFVzZWQgZm9yIGxldHRpbmcgdGhlIHVzZXIgbW92ZSBmcnkgbGV0dGVycyBhcm91bmRcclxuICAgIGNvbnN0IFttb3Zlcywgc2V0TW92ZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3dhcm5pbmcsIHNldFdhcm5pbmddID0gdXNlU3RhdGUoJ1ByYWN0aWNlIHNlc3Npb24uJyk7XHJcbiAgICBjb25zdCBbdmFsaWRPbmx5LCBzZXRWYWxpZE9ubHldID0gdXNlU3RhdGUoZmFsc2UpOyAvLyB3aGV0aGVyIGd1ZXNzZXMgbXVzdCBiZSB2YWxpZCB3b3Jkc1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcGlja0FsbEZyeUxldHRlcnMoKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIGNvbnN0IHBpY2tBbGxGcnlMZXR0ZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz9wcmVwaWNrZnJ5PXRydWUmZ3VhcmFudGVlPTZgO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGxldCBwaWNrZWQgPSBkYXRhLmZyeUxldHRlcnMuam9pbignJyk7XHJcbiAgICAgICAgbGV0IG5ld1BpY2sgPSBBcnJheS5mcm9tKHBpY2tlZC50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICBzZXRQaWNrZWRMZXR0ZXJzKG5ld1BpY2spO1xyXG4gICAgICAgIHNldEZyeUxldHRlcnMobmV3UGljay5zbGljZSgwLDMpKTtcclxuICAgIH07XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q2hlZnNQaWNrKCkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz90b3Bmcnk9dHJ1ZSZsZXR0ZXJzPSR7ZnJ5TGV0dGVycy5qb2luKCcnKX0mY291bnQ9MWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBqZGF0YS5hbnN3ZXJzICYmIGpkYXRhLmFuc3dlcnMubGVuZ3RoID4gMCA/IGpkYXRhLmFuc3dlcnNbMF0gOiAnJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHN1Ym1pdFBsYXllcldvcmQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJtaXRQbGF5ZXJXb3JkID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgbGV0IGZpeGVkd29yZCA9IHdvcmQudG9VcHBlckNhc2UoKS50cmltKCk7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhleSBoYXZlIGFsbCB0aGUgZnJ5IGxldHRlcnNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyeUxldHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGxldHRlckNvdW50UmVxdWlyZWQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgYWN0dWFsTGV0dGVyQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZyeUxldHRlcnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmcnlMZXR0ZXJzW2ldID09PSBmcnlMZXR0ZXJzW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyQ291bnRSZXF1aXJlZCA9IGxldHRlckNvdW50UmVxdWlyZWQgKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZml4ZWR3b3JkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZnJ5TGV0dGVyc1tpXSA9PT0gZml4ZWR3b3JkW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsTGV0dGVyQ291bnQgPSBhY3R1YWxMZXR0ZXJDb3VudCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFjdHVhbExldHRlckNvdW50IDwgbGV0dGVyQ291bnRSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0V2FybmluZyhgWW91IG5lZWQgdGhlIGxldHRlciAke2ZyeUxldHRlcnNbaV19IGF0IGxlYXN0ICR7bGV0dGVyQ291bnRSZXF1aXJlZH0gdGltZSR7bGV0dGVyQ291bnRSZXF1aXJlZCA9PT0gMSA/ICcuJyA6ICdzLid9YCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZhbGlkID0gYXdhaXQgaXNXb3JkVmFsaWQod29yZCk7XHJcbiAgICAgICAgaWYgKHZhbGlkT25seSAmJiAhdmFsaWQpIHtcclxuICAgICAgICAgICAgYWxlcnQoYFNvcnJ5LCAke2ZpeGVkd29yZH0gaXMgbm90IGluIG15IHdvcmQgbGlzdC5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbW92ZSA9IHtwYXNzOmZhbHNlLCB3b3JkOiB3b3JkLCB2YWxpZDogdmFsaWR9O1xyXG4gICAgICAgIGF3YWl0IGZpbmlzaE1vdmVBbmRNb3ZlT24obW92ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VibWl0UGFzcyA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGxldCBtb3ZlID0ge3Bhc3M6dHJ1ZX07XHJcbiAgICAgICAgYXdhaXQgZmluaXNoTW92ZUFuZE1vdmVPbihtb3ZlKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmaW5pc2hNb3ZlQW5kTW92ZU9uKG1vdmUpIHtcclxuICAgICAgICBsZXQgY2hlZnNQaWNrID0gYXdhaXQgZ2V0Q2hlZnNQaWNrKCk7XHJcbiAgICAgICAgbW92ZS5mcnlMZXR0ZXJzID0gZnJ5TGV0dGVycztcclxuICAgICAgICBtb3ZlLmNoZWZzUGljayA9IGNoZWZzUGljaztcclxuICAgICAgICBsZXQgbmV3bW92ZXMgPSBbLi4ubW92ZXNdO1xyXG4gICAgICAgIG5ld21vdmVzLnB1c2gobW92ZSk7XHJcbiAgICAgICAgd2hpbGUgKG5ld21vdmVzLmxlbmd0aCA+IDE1KSB7XHJcbiAgICAgICAgICAgIG5ld21vdmVzLnNwbGljZSgwLDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRNb3ZlcyhuZXdtb3Zlcyk7XHJcbiAgICAgICAgaWYgKGZyeUxldHRlcnMubGVuZ3RoID09PSBwaWNrZWRMZXR0ZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBhd2FpdCBwaWNrQWxsRnJ5TGV0dGVycygpO1xyXG4gICAgICAgICAgICBzZXRXb3JkKCcnKTtcclxuICAgICAgICAgICAgc2V0V2FybmluZygnTmV3IGZyeSBsZXR0ZXJzIHBpY2tlZC4nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdGcnlMZXR0ZXJzID0gcGlja2VkTGV0dGVycy5zbGljZSgwLCBmcnlMZXR0ZXJzLmxlbmd0aCArIDEpO1xyXG4gICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKG5ld0ZyeUxldHRlcnMpO1xyXG4gICAgICAgICAgICBzZXRXYXJuaW5nKCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIEZyeSBZb3VyIEJyYWluIFNvbG9cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ck9wdGlvbnNEaXZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT0nYnV0dG9udmFsaWRvbmx5JyBjaGVja2VkPXt2YWxpZE9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt2YWxpZE9ubHkgPyAnY2hlY2tib3hPbicgOiAndHJPcHRpb25zQ2hlY2tib3hPZmYnfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiV2hldGhlciBndWVzcyBtdXN0IGJlIHZhbGlkIHdvcmRzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0VmFsaWRPbmx5KCF2YWxpZE9ubHkpO319XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwga2V5PSdsYWJlbHZhbGlkb25seSc+R3Vlc3NlcyBtdXN0IGJlIHZhbGlkIHdvcmRzIHt2YWxpZE9ubHkgPyAnb24nIDogJ29mZid9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge21vdmVzLmxlbmd0aCA+PSAwICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiIGJvcmRlcj1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GcnkgTGV0dGVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGxheSBNYWRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZXN1bHQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNoZWZzIFBpY2s8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92ZXMubWFwKChtLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Bzb2xvbW92ZSR7aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e20uZnJ5TGV0dGVyc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge20ucGFzcyAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPlBBU1M8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW0ucGFzcyAmJiA8PnttLndvcmR9PC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW0ucGFzcyAmJiBtLnZhbGlkICYmIG0ud29yZC5sZW5ndGggPT09IG0uY2hlZnNQaWNrLmxlbmd0aCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+U2hvcnRlc3QhPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFtLnBhc3MgJiYgbS52YWxpZCAmJiBtLndvcmQubGVuZ3RoID4gbS5jaGVmc1BpY2subGVuZ3RoICYmIDw+VmFsaWQ8Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshbS5wYXNzICYmICFtLnZhbGlkICYmIDxzcGFuIGNsYXNzTmFtZT1cInRyRGFuZ2VyXCI+UGhvbmV5PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bS5jaGVmc1BpY2t9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDxkaXY+UHJlcGlja2VkIGZyeSBsZXR0ZXJzOiB7cGlja2VkTGV0dGVyc308L2Rpdj5cclxuICAgICAgICAgICAge2ZyeUxldHRlcnMubGVuZ3RoID4gMCAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPkZyeSBMZXR0ZXJzOlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b24gZnJ5TGV0dGVyQWN0aW9uQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2h1ZmZsZVNpemUgPSBmcnlMZXR0ZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJlZm9yZVNodWZmbGUgPSBbLi4uZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZnRlclNodWZmbGUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGFmdGVyU2h1ZmZsZS5sZW5ndGggPCBzaHVmZmxlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBiZWZvcmVTaHVmZmxlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlclNodWZmbGUucHVzaChiZWZvcmVTaHVmZmxlW3JhbmRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNodWZmbGUuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKGFmdGVyU2h1ZmZsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGZyeUxldHRlckFjdGlvbkJ1dHRvbkljb25cIj5jYWNoZWQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvbiBmcnlMZXR0ZXJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzb3J0d29yayA9IFsuLi5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydHdvcmsuc29ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKHNvcnR3b3JrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZnJ5TGV0dGVyQWN0aW9uQnV0dG9uSWNvblwiPnNvcnRfYnlfYWxwaGE8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJ5TGV0dGVyRGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZyeUxldHRlcnMubWFwKChmbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2BTb2xvRnJ5TGV0dGVyJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2kgPT09IHNlbGVjdGVkID8gXCJmeWJGcnlMZXR0ZXIgU2VsZWN0ZWRcIiA6IFwiZnliRnJ5TGV0dGVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVMZXR0ZXIgPSBmcnlMZXR0ZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlmdGVkTGV0dGVycyA9IFsuLi5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChtb3ZlTGV0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKFsuLi5zaGlmdGVkTGV0dGVyc10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7IC8vIHVuc2VsZWN0IHdoZW4gY2xpY2tlZCBhIHNlY29uZCB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBzZWxlY3RlZCB0aWxlIHRvIHRoaXMgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaWZ0ZWRMZXR0ZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlTGV0dGVyID0gZnJ5TGV0dGVyc1tzZWxlY3RlZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmcnlMZXR0ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGZyeUxldHRlcnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChtb3ZlTGV0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZyeUxldHRlcnMoc2hpZnRlZExldHRlcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID57Zmx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPkVudGVyIFdvcmQ6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB3b3JkIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIiBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwid29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNsb3NlbWVidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V29yZCgnJyk7fX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JkLnRvVXBwZXJDYXNlKCkudHJpbSgpLm1hdGNoKFwiXlthLXpBLVpdKiRcIikgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIga2V5PVwic3VibWl0V29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBsYXllcldvcmQoKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIGtleT1cInBhc3NCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBhc3MoKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFTU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIHt3YXJuaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwidHJXYXJuaW5nXCI+e3dhcm5pbmd9PC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJ5WW91ckJyYWluU29sbztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==