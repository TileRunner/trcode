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
    setMoves(newmoves);

    if (fryLetters.length === pickedLetters.length) {
      await pickAllFryLetters();
    } else {
      let newFryLetters = pickedLetters.slice(0, fryLetters.length + 1);
      setFryLetters(newFryLetters);
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
          lineNumber: 78,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
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
              lineNumber: 85,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Play Made"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Result"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Chefs Pick"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: moves.map((m, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.fryLetters
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 33
            }, undefined), m.pass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "trDanger",
              children: "PASS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 44
            }, undefined), !m.pass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.word
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 45
            }, undefined), !m.pass && m.valid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: "Valid"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 56
            }, undefined), !m.pass && !m.valid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "trDanger",
              children: "Phoney"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 57
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.chefsPick
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 33
            }, undefined)]
          }, `solomove${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
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
            lineNumber: 119,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
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
            lineNumber: 127,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
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
          lineNumber: 132,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onKeyDownCapture: handleKeyDown,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trEmphasis",
          children: "Enter Word:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
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
          lineNumber: 169,
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
            lineNumber: 178,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              submitPass();
            },
            children: "PASS"
          }, "passButton", false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 39
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 9
  }, undefined);
};

_s(FryYourBrainSolo, "K9hlfUbgHrcBE3ZqV0gyWVuX0cs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2Z5YlNvbG8uanMiXSwibmFtZXMiOlsiRnJ5WW91ckJyYWluU29sbyIsInNldFdoZXJldG8iLCJiYXNldXJsIiwicGlja2VkTGV0dGVycyIsInNldFBpY2tlZExldHRlcnMiLCJ1c2VTdGF0ZSIsImZyeUxldHRlcnMiLCJzZXRGcnlMZXR0ZXJzIiwid29yZCIsInNldFdvcmQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwibW92ZXMiLCJzZXRNb3ZlcyIsInVzZUVmZmVjdCIsInBpY2tBbGxGcnlMZXR0ZXJzIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicGlja2VkIiwiam9pbiIsIm5ld1BpY2siLCJBcnJheSIsImZyb20iLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiaXNXb3JkVmFsaWQiLCJ0b0xvd2VyQ2FzZSIsImpkYXRhIiwiZXhpc3RzIiwiZ2V0Q2hlZnNQaWNrIiwiYW5zd2VycyIsImxlbmd0aCIsImhhbmRsZUtleURvd24iLCJldmVudCIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0UGxheWVyV29yZCIsInZhbGlkIiwibW92ZSIsInBhc3MiLCJmaW5pc2hNb3ZlQW5kTW92ZU9uIiwic3VibWl0UGFzcyIsImNoZWZzUGljayIsIm5ld21vdmVzIiwicHVzaCIsIm5ld0ZyeUxldHRlcnMiLCJtYXAiLCJtIiwiaSIsInNodWZmbGVTaXplIiwiYmVmb3JlU2h1ZmZsZSIsImFmdGVyU2h1ZmZsZSIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzcGxpY2UiLCJzb3J0d29yayIsInNvcnQiLCJmbCIsIm1vdmVMZXR0ZXIiLCJzaGlmdGVkTGV0dGVycyIsImluZGV4IiwiZWxlbWVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJtYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxnQkFBZ0IsR0FB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Q0FBRCxJQUFPO0FBQ2IxRCxtQkFBTyxDQUFDMEQsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUNIO0FBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQVNJO0FBQUEscUJBQ0s3RCxJQUFJLENBQUNrQixXQUFMLEdBQW1CNEMsSUFBbkIsR0FBMEJDLEtBQTFCLENBQWdDLGFBQWhDLGtCQUNHO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUNJLG1CQUFPLEVBQUUsTUFBTTtBQUFDaEMsOEJBQWdCO0FBQUcsYUFEdkM7QUFBQTtBQUFBLGFBQWlDLFlBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRlIsZUFPSTtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFDSSxtQkFBTyxFQUFFLE1BQU07QUFBQ0ssd0JBQVU7QUFBRyxhQURqQztBQUFBO0FBQUEsYUFBaUMsWUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTlEc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9COUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF1SEgsQ0E3TEQ7O0dBQU01QyxnQjs7S0FBQUEsZ0I7QUErTE4sK0RBQWVBLGdCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVhMGY1YzljYWQwMzQ5YWRlYTMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRnJ5WW91ckJyYWluU29sbyA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJztcclxuICAgIGNvbnN0IFtwaWNrZWRMZXR0ZXJzLCBzZXRQaWNrZWRMZXR0ZXJzXSA9IHVzZVN0YXRlKFtdKTsgLy8gQWxsIHByZS1waWNrZWQgZnJ5IGxldHRlcnMgYXMgYW4gYXJyYXlcclxuICAgIGNvbnN0IFtmcnlMZXR0ZXJzLCBzZXRGcnlMZXR0ZXJzXSA9IHVzZVN0YXRlKFtdKTsgLy8gRnJ5IGxldHRlcnMgc2hvd24gYXQgY3VycmVudCBzdGFnZSBhcyBhbiBhcnJheVxyXG4gICAgY29uc3QgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgtMSk7IC8vIFVzZWQgZm9yIGxldHRpbmcgdGhlIHVzZXIgbW92ZSBmcnkgbGV0dGVycyBhcm91bmRcclxuICAgIGNvbnN0IFttb3Zlcywgc2V0TW92ZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcGlja0FsbEZyeUxldHRlcnMoKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIGNvbnN0IHBpY2tBbGxGcnlMZXR0ZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz9wcmVwaWNrZnJ5PXRydWUmZ3VhcmFudGVlPTZgO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGxldCBwaWNrZWQgPSBkYXRhLmZyeUxldHRlcnMuam9pbignJyk7XHJcbiAgICAgICAgbGV0IG5ld1BpY2sgPSBBcnJheS5mcm9tKHBpY2tlZC50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICBzZXRQaWNrZWRMZXR0ZXJzKG5ld1BpY2spO1xyXG4gICAgICAgIHNldEZyeUxldHRlcnMobmV3UGljay5zbGljZSgwLDMpKTtcclxuICAgIH07XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaXNXb3JkVmFsaWQoKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP2V4aXN0cz0ke3dvcmQudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCBqZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gamRhdGEuZXhpc3RzO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENoZWZzUGljaygpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/dG9wZnJ5PXRydWUmbGV0dGVycz0ke2ZyeUxldHRlcnMuam9pbignJyl9JmNvdW50PTFgO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCBqZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gamRhdGEuYW5zd2VycyAmJiBqZGF0YS5hbnN3ZXJzLmxlbmd0aCA+IDAgPyBqZGF0YS5hbnN3ZXJzWzBdIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzdWJtaXRQbGF5ZXJXb3JkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VibWl0UGxheWVyV29yZCA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGxldCB2YWxpZCA9IGF3YWl0IGlzV29yZFZhbGlkKCk7XHJcbiAgICAgICAgbGV0IG1vdmUgPSB7cGFzczpmYWxzZSwgd29yZDogd29yZCwgdmFsaWQ6IHZhbGlkfTtcclxuICAgICAgICBhd2FpdCBmaW5pc2hNb3ZlQW5kTW92ZU9uKG1vdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdFBhc3MgPSBhc3luYygpID0+IHtcclxuICAgICAgICBsZXQgbW92ZSA9IHtwYXNzOnRydWV9O1xyXG4gICAgICAgIGF3YWl0IGZpbmlzaE1vdmVBbmRNb3ZlT24obW92ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmluaXNoTW92ZUFuZE1vdmVPbihtb3ZlKSB7XHJcbiAgICAgICAgbGV0IGNoZWZzUGljayA9IGF3YWl0IGdldENoZWZzUGljaygpO1xyXG4gICAgICAgIG1vdmUuZnJ5TGV0dGVycyA9IGZyeUxldHRlcnM7XHJcbiAgICAgICAgbW92ZS5jaGVmc1BpY2sgPSBjaGVmc1BpY2s7XHJcbiAgICAgICAgbGV0IG5ld21vdmVzID0gWy4uLm1vdmVzXTtcclxuICAgICAgICBuZXdtb3Zlcy5wdXNoKG1vdmUpO1xyXG4gICAgICAgIHNldE1vdmVzKG5ld21vdmVzKTtcclxuICAgICAgICBpZiAoZnJ5TGV0dGVycy5sZW5ndGggPT09IHBpY2tlZExldHRlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHBpY2tBbGxGcnlMZXR0ZXJzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG5ld0ZyeUxldHRlcnMgPSBwaWNrZWRMZXR0ZXJzLnNsaWNlKDAsIGZyeUxldHRlcnMubGVuZ3RoICsgMSk7XHJcbiAgICAgICAgICAgIHNldEZyeUxldHRlcnMobmV3RnJ5TGV0dGVycyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBGcnkgWW91ciBCcmFpbiBTb2xvXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHttb3Zlcy5sZW5ndGggPj0gMCAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIiBib3JkZXI9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RnJ5IExldHRlcnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBsYXkgTWFkZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVzdWx0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DaGVmcyBQaWNrPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmVzLm1hcCgobSxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgc29sb21vdmUke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttLmZyeUxldHRlcnN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bS5wYXNzICYmIDx0ZCBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPlBBU1M8L3RkPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW0ucGFzcyAmJiA8dGQ+e20ud29yZH08L3RkPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW0ucGFzcyAmJiBtLnZhbGlkICYmIDx0ZD5WYWxpZDwvdGQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshbS5wYXNzICYmICFtLnZhbGlkICYmIDx0ZCBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPlBob25leTwvdGQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bS5jaGVmc1BpY2t9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIHtmcnlMZXR0ZXJzLmxlbmd0aCA+IDAgJiYgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5GcnkgTGV0dGVyczpcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uIGZyeUxldHRlckFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNodWZmbGVTaXplID0gZnJ5TGV0dGVycy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiZWZvcmVTaHVmZmxlID0gWy4uLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWZ0ZXJTaHVmZmxlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChhZnRlclNodWZmbGUubGVuZ3RoIDwgc2h1ZmZsZVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYmVmb3JlU2h1ZmZsZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTaHVmZmxlLnB1c2goYmVmb3JlU2h1ZmZsZVtyYW5kXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVTaHVmZmxlLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RnJ5TGV0dGVycyhhZnRlclNodWZmbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBmcnlMZXR0ZXJBY3Rpb25CdXR0b25JY29uXCI+Y2FjaGVkPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b24gZnJ5TGV0dGVyQWN0aW9uQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc29ydHdvcmsgPSBbLi4uZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnR3b3JrLnNvcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RnJ5TGV0dGVycyhzb3J0d29yayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGZyeUxldHRlckFjdGlvbkJ1dHRvbkljb25cIj5zb3J0X2J5X2FscGhhPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyeUxldHRlckRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmcnlMZXR0ZXJzLm1hcCgoZmwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgU29sb0ZyeUxldHRlciR7aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpID09PSBzZWxlY3RlZCA/IFwiZnliRnJ5TGV0dGVyIFNlbGVjdGVkXCIgOiBcImZ5YkZyeUxldHRlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlTGV0dGVyID0gZnJ5TGV0dGVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpZnRlZExldHRlcnMgPSBbLi4uZnJ5TGV0dGVyc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2gobW92ZUxldHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RnJ5TGV0dGVycyhbLi4uc2hpZnRlZExldHRlcnNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpOyAvLyB1bnNlbGVjdCB3aGVuIGNsaWNrZWQgYSBzZWNvbmQgdGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgc2VsZWN0ZWQgdGlsZSB0byB0aGlzIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlmdGVkTGV0dGVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZUxldHRlciA9IGZyeUxldHRlcnNbc2VsZWN0ZWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZnJ5TGV0dGVycy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBmcnlMZXR0ZXJzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2gobW92ZUxldHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZExldHRlcnMucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKHNoaWZ0ZWRMZXR0ZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+e2ZsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5FbnRlciBXb3JkOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JkLnRvVXBwZXJDYXNlKCkudHJpbSgpLm1hdGNoKFwiXlthLXpBLVpdKiRcIikgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIga2V5PVwic3VibWl0V29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBsYXllcldvcmQoKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIGtleT1cInBhc3NCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N1Ym1pdFBhc3MoKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFTU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcnlZb3VyQnJhaW5Tb2xvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9