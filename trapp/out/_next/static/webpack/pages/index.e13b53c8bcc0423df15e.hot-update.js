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

  async function isWordValid() {
    let url = `${baseurl}/ENABLE2K?exists=${word.toLowerCase()}`;
    const response = await fetch(url);
    const jdata = await response.json();
    return jdata.exists;
  }

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
    //TODO: See if you can use a routine shared by server and front end

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

    let valid = await isWordValid();
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
          lineNumber: 106,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
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
              lineNumber: 113,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Play Made"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Result"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Chefs Pick"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: moves.map((m, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.fryLetters
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [m.pass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trDanger",
                children: "PASS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 48
              }, undefined), !m.pass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: m.word
              }, void 0, false)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [!m.pass && m.valid && m.word.length === m.chefsPick.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trEmphasis",
                children: "Shortest!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 100
              }, undefined), !m.pass && m.valid && m.word.length > m.chefsPick.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: "Valid"
              }, void 0, false), !m.pass && !m.valid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "trDanger",
                children: "Phoney"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 61
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.chefsPick
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 33
            }, undefined)]
          }, `solomove${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 35
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
            lineNumber: 152,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
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
            lineNumber: 160,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
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
          lineNumber: 165,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onKeyDownCapture: handleKeyDown,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trEmphasis",
          children: "Enter Word:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
          lineNumber: 202,
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
            lineNumber: 211,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              submitPass();
            },
            children: "PASS"
          }, "passButton", false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 39
    }, undefined), warning && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trWarning",
      children: warning
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 25
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 9
  }, undefined);
};

_s(FryYourBrainSolo, "yn7DA+fTEdohdLT7Tcf6NAcX1U8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2Z5YlNvbG8uanMiXSwibmFtZXMiOlsiRnJ5WW91ckJyYWluU29sbyIsInNldFdoZXJldG8iLCJiYXNldXJsIiwicGlja2VkTGV0dGVycyIsInNldFBpY2tlZExldHRlcnMiLCJ1c2VTdGF0ZSIsImZyeUxldHRlcnMiLCJzZXRGcnlMZXR0ZXJzIiwid29yZCIsInNldFdvcmQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwibW92ZXMiLCJzZXRNb3ZlcyIsIndhcm5pbmciLCJzZXRXYXJuaW5nIiwidXNlRWZmZWN0IiwicGlja0FsbEZyeUxldHRlcnMiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwaWNrZWQiLCJqb2luIiwibmV3UGljayIsIkFycmF5IiwiZnJvbSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJpc1dvcmRWYWxpZCIsInRvTG93ZXJDYXNlIiwiamRhdGEiLCJleGlzdHMiLCJnZXRDaGVmc1BpY2siLCJhbnN3ZXJzIiwibGVuZ3RoIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJzdWJtaXRQbGF5ZXJXb3JkIiwiZml4ZWR3b3JkIiwidHJpbSIsImkiLCJsZXR0ZXJDb3VudFJlcXVpcmVkIiwiYWN0dWFsTGV0dGVyQ291bnQiLCJqIiwidmFsaWQiLCJtb3ZlIiwicGFzcyIsImZpbmlzaE1vdmVBbmRNb3ZlT24iLCJzdWJtaXRQYXNzIiwiY2hlZnNQaWNrIiwibmV3bW92ZXMiLCJwdXNoIiwic3BsaWNlIiwibmV3RnJ5TGV0dGVycyIsIm1hcCIsIm0iLCJzaHVmZmxlU2l6ZSIsImJlZm9yZVNodWZmbGUiLCJhZnRlclNodWZmbGUiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic29ydHdvcmsiLCJzb3J0IiwiZmwiLCJtb3ZlTGV0dGVyIiwic2hpZnRlZExldHRlcnMiLCJpbmRleCIsImVsZW1lbnQiLCJlIiwidGFy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QjtBQUNJLG1CQUFPLEVBQUUsTUFBTTtBQUFDVyx3QkFBVTtBQUFHLGFBRGpDO0FBQUE7QUFBQSxhQUFpQyxZQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOURzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEM5QixFQXlIS3RDLE9BQU8saUJBQUk7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLGdCQUE0QkE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6SGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBNkhILENBL05EOztHQUFNZCxnQjs7S0FBQUEsZ0I7QUFpT04sK0RBQWVBLGdCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUxM2I1M2M4YmNjMDQyM2RmMTVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRnJ5WW91ckJyYWluU29sbyA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJztcclxuICAgIGNvbnN0IFtwaWNrZWRMZXR0ZXJzLCBzZXRQaWNrZWRMZXR0ZXJzXSA9IHVzZVN0YXRlKFtdKTsgLy8gQWxsIHByZS1waWNrZWQgZnJ5IGxldHRlcnMgYXMgYW4gYXJyYXlcclxuICAgIGNvbnN0IFtmcnlMZXR0ZXJzLCBzZXRGcnlMZXR0ZXJzXSA9IHVzZVN0YXRlKFtdKTsgLy8gRnJ5IGxldHRlcnMgc2hvd24gYXQgY3VycmVudCBzdGFnZSBhcyBhbiBhcnJheVxyXG4gICAgY29uc3QgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgtMSk7IC8vIFVzZWQgZm9yIGxldHRpbmcgdGhlIHVzZXIgbW92ZSBmcnkgbGV0dGVycyBhcm91bmRcclxuICAgIGNvbnN0IFttb3Zlcywgc2V0TW92ZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3dhcm5pbmcsIHNldFdhcm5pbmddID0gdXNlU3RhdGUoJ1ByYWN0aWNlIHNlc3Npb24uJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwaWNrQWxsRnJ5TGV0dGVycygpO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgY29uc3QgcGlja0FsbEZyeUxldHRlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP3ByZXBpY2tmcnk9dHJ1ZSZndWFyYW50ZWU9NmA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgbGV0IHBpY2tlZCA9IGRhdGEuZnJ5TGV0dGVycy5qb2luKCcnKTtcclxuICAgICAgICBsZXQgbmV3UGljayA9IEFycmF5LmZyb20ocGlja2VkLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgIHNldFBpY2tlZExldHRlcnMobmV3UGljayk7XHJcbiAgICAgICAgc2V0RnJ5TGV0dGVycyhuZXdQaWNrLnNsaWNlKDAsMykpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBpc1dvcmRWYWxpZCgpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/ZXhpc3RzPSR7d29yZC50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBqZGF0YS5leGlzdHM7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q2hlZnNQaWNrKCkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz90b3Bmcnk9dHJ1ZSZsZXR0ZXJzPSR7ZnJ5TGV0dGVycy5qb2luKCcnKX0mY291bnQ9MWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBqZGF0YS5hbnN3ZXJzICYmIGpkYXRhLmFuc3dlcnMubGVuZ3RoID4gMCA/IGpkYXRhLmFuc3dlcnNbMF0gOiAnJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHN1Ym1pdFBsYXllcldvcmQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJtaXRQbGF5ZXJXb3JkID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgbGV0IGZpeGVkd29yZCA9IHdvcmQudG9VcHBlckNhc2UoKS50cmltKCk7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhleSBoYXZlIGFsbCB0aGUgZnJ5IGxldHRlcnNcclxuICAgICAgICAvL1RPRE86IFNlZSBpZiB5b3UgY2FuIHVzZSBhIHJvdXRpbmUgc2hhcmVkIGJ5IHNlcnZlciBhbmQgZnJvbnQgZW5kXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcnlMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBsZXR0ZXJDb3VudFJlcXVpcmVkID0gMDtcclxuICAgICAgICAgICAgbGV0IGFjdHVhbExldHRlckNvdW50ID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmcnlMZXR0ZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZnJ5TGV0dGVyc1tpXSA9PT0gZnJ5TGV0dGVyc1tqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlckNvdW50UmVxdWlyZWQgPSBsZXR0ZXJDb3VudFJlcXVpcmVkICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpeGVkd29yZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZyeUxldHRlcnNbaV0gPT09IGZpeGVkd29yZFtqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbExldHRlckNvdW50ID0gYWN0dWFsTGV0dGVyQ291bnQgKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhY3R1YWxMZXR0ZXJDb3VudCA8IGxldHRlckNvdW50UmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgIHNldFdhcm5pbmcoYFlvdSBuZWVkIHRoZSBsZXR0ZXIgJHtmcnlMZXR0ZXJzW2ldfSBhdCBsZWFzdCAke2xldHRlckNvdW50UmVxdWlyZWR9IHRpbWUke2xldHRlckNvdW50UmVxdWlyZWQgPT09IDEgPyAnLicgOiAncy4nfWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2YWxpZCA9IGF3YWl0IGlzV29yZFZhbGlkKCk7XHJcbiAgICAgICAgbGV0IG1vdmUgPSB7cGFzczpmYWxzZSwgd29yZDogd29yZCwgdmFsaWQ6IHZhbGlkfTtcclxuICAgICAgICBhd2FpdCBmaW5pc2hNb3ZlQW5kTW92ZU9uKG1vdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdFBhc3MgPSBhc3luYygpID0+IHtcclxuICAgICAgICBsZXQgbW92ZSA9IHtwYXNzOnRydWV9O1xyXG4gICAgICAgIGF3YWl0IGZpbmlzaE1vdmVBbmRNb3ZlT24obW92ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmluaXNoTW92ZUFuZE1vdmVPbihtb3ZlKSB7XHJcbiAgICAgICAgbGV0IGNoZWZzUGljayA9IGF3YWl0IGdldENoZWZzUGljaygpO1xyXG4gICAgICAgIG1vdmUuZnJ5TGV0dGVycyA9IGZyeUxldHRlcnM7XHJcbiAgICAgICAgbW92ZS5jaGVmc1BpY2sgPSBjaGVmc1BpY2s7XHJcbiAgICAgICAgbGV0IG5ld21vdmVzID0gWy4uLm1vdmVzXTtcclxuICAgICAgICBuZXdtb3Zlcy5wdXNoKG1vdmUpO1xyXG4gICAgICAgIHdoaWxlIChuZXdtb3Zlcy5sZW5ndGggPiAxNSkge1xyXG4gICAgICAgICAgICBuZXdtb3Zlcy5zcGxpY2UoMCwxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TW92ZXMobmV3bW92ZXMpO1xyXG4gICAgICAgIGlmIChmcnlMZXR0ZXJzLmxlbmd0aCA9PT0gcGlja2VkTGV0dGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYXdhaXQgcGlja0FsbEZyeUxldHRlcnMoKTtcclxuICAgICAgICAgICAgc2V0V29yZCgnJyk7XHJcbiAgICAgICAgICAgIHNldFdhcm5pbmcoJ05ldyBmcnkgbGV0dGVycyBwaWNrZWQuJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbmV3RnJ5TGV0dGVycyA9IHBpY2tlZExldHRlcnMuc2xpY2UoMCwgZnJ5TGV0dGVycy5sZW5ndGggKyAxKTtcclxuICAgICAgICAgICAgc2V0RnJ5TGV0dGVycyhuZXdGcnlMZXR0ZXJzKTtcclxuICAgICAgICAgICAgc2V0V2FybmluZygnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBGcnkgWW91ciBCcmFpbiBTb2xvXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHttb3Zlcy5sZW5ndGggPj0gMCAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIiBib3JkZXI9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RnJ5IExldHRlcnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBsYXkgTWFkZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVzdWx0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DaGVmcyBQaWNrPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmVzLm1hcCgobSxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgc29sb21vdmUke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttLmZyeUxldHRlcnN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttLnBhc3MgJiYgPHNwYW4gY2xhc3NOYW1lPVwidHJEYW5nZXJcIj5QQVNTPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFtLnBhc3MgJiYgPD57bS53b3JkfTwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFtLnBhc3MgJiYgbS52YWxpZCAmJiBtLndvcmQubGVuZ3RoID09PSBtLmNoZWZzUGljay5sZW5ndGggJiYgPHNwYW4gY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPlNob3J0ZXN0ITwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshbS5wYXNzICYmIG0udmFsaWQgJiYgbS53b3JkLmxlbmd0aCA+IG0uY2hlZnNQaWNrLmxlbmd0aCAmJiA8PlZhbGlkPC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW0ucGFzcyAmJiAhbS52YWxpZCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPlBob25leTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e20uY2hlZnNQaWNrfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICB7ZnJ5TGV0dGVycy5sZW5ndGggPiAwICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+RnJ5IExldHRlcnM6XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvbiBmcnlMZXR0ZXJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaHVmZmxlU2l6ZSA9IGZyeUxldHRlcnMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmVmb3JlU2h1ZmZsZSA9IFsuLi5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFmdGVyU2h1ZmZsZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYWZ0ZXJTaHVmZmxlLmxlbmd0aCA8IHNodWZmbGVTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJlZm9yZVNodWZmbGUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyU2h1ZmZsZS5wdXNoKGJlZm9yZVNodWZmbGVbcmFuZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2h1ZmZsZS5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZyeUxldHRlcnMoYWZ0ZXJTaHVmZmxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZnJ5TGV0dGVyQWN0aW9uQnV0dG9uSWNvblwiPmNhY2hlZDwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uIGZyeUxldHRlckFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNvcnR3b3JrID0gWy4uLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0d29yay5zb3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZyeUxldHRlcnMoc29ydHdvcmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBmcnlMZXR0ZXJBY3Rpb25CdXR0b25JY29uXCI+c29ydF9ieV9hbHBoYTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcnlMZXR0ZXJEaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZnJ5TGV0dGVycy5tYXAoKGZsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YFNvbG9GcnlMZXR0ZXIke2l9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aSA9PT0gc2VsZWN0ZWQgPyBcImZ5YkZyeUxldHRlciBTZWxlY3RlZFwiIDogXCJmeWJGcnlMZXR0ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZUxldHRlciA9IGZyeUxldHRlcnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaWZ0ZWRMZXR0ZXJzID0gWy4uLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKG1vdmVMZXR0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZyeUxldHRlcnMoWy4uLnNoaWZ0ZWRMZXR0ZXJzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTsgLy8gdW5zZWxlY3Qgd2hlbiBjbGlja2VkIGEgc2Vjb25kIHRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIHNlbGVjdGVkIHRpbGUgdG8gdGhpcyBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpZnRlZExldHRlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVMZXR0ZXIgPSBmcnlMZXR0ZXJzW3NlbGVjdGVkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZyeUxldHRlcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZnJ5TGV0dGVyc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKG1vdmVMZXR0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RnJ5TGV0dGVycyhzaGlmdGVkTGV0dGVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPntmbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+RW50ZXIgV29yZDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwid29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7d29yZC50b1VwcGVyQ2FzZSgpLnRyaW0oKS5tYXRjaChcIl5bYS16QS1aXSokXCIpICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIGtleT1cInN1Ym1pdFdvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzdWJtaXRQbGF5ZXJXb3JkKCl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVUJNSVRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBrZXk9XCJwYXNzQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzdWJtaXRQYXNzKCl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBBU1NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICB7d2FybmluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInRyV2FybmluZ1wiPnt3YXJuaW5nfTwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyeVlvdXJCcmFpblNvbG87XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=