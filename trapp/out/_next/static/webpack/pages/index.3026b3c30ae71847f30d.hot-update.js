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
    let url = `${baseurl}/ENABLE2K?topfry=true&letters=${fryLetters}&count=1`;
    alert(url);
    const response = await fetch(url + word.toLowerCase());
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
          lineNumber: 79,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
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
              lineNumber: 86,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Play Made"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Result"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Chefs Pick"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: moves.map((m, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.fryLetters
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 33
            }, undefined), m.pass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "trDanger",
              children: "PASS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 44
            }, undefined), !m.pass && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.word
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 45
            }, undefined), !m.pass && m.valid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: "Valid"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 56
            }, undefined), !m.pass && !m.valid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "trDanger",
              children: "Phoney"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 57
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: m.chefsPick
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 33
            }, undefined)]
          }, `solomove${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
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
            lineNumber: 120,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
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
            lineNumber: 128,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
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
          lineNumber: 133,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onKeyDownCapture: handleKeyDown,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trEmphasis",
          children: "Enter Word:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
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
          lineNumber: 170,
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
            lineNumber: 179,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              submitPass();
            },
            children: "PASS"
          }, "passButton", false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 39
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnliL2Z5YlNvbG8uanMiXSwibmFtZXMiOlsiRnJ5WW91ckJyYWluU29sbyIsInNldFdoZXJldG8iLCJiYXNldXJsIiwicGlja2VkTGV0dGVycyIsInNldFBpY2tlZExldHRlcnMiLCJ1c2VTdGF0ZSIsImZyeUxldHRlcnMiLCJzZXRGcnlMZXR0ZXJzIiwid29yZCIsInNldFdvcmQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwibW92ZXMiLCJzZXRNb3ZlcyIsInVzZUVmZmVjdCIsInBpY2tBbGxGcnlMZXR0ZXJzIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicGlja2VkIiwiam9pbiIsIm5ld1BpY2siLCJBcnJheSIsImZyb20iLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiaXNXb3JkVmFsaWQiLCJ0b0xvd2VyQ2FzZSIsImpkYXRhIiwiZXhpc3RzIiwiZ2V0Q2hlZnNQaWNrIiwiYWxlcnQiLCJhbnN3ZXJzIiwibGVuZ3RoIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJzdWJtaXRQbGF5ZXJXb3JkIiwidmFsaWQiLCJtb3ZlIiwicGFzcyIsImZpbmlzaE1vdmVBbmRNb3ZlT24iLCJzdWJtaXRQYXNzIiwiY2hlZnNQaWNrIiwibmV3bW92ZXMiLCJwdXNoIiwibmV3RnJ5TGV0dGVycyIsIm1hcCIsIm0iLCJpIiwic2h1ZmZsZVNpemUiLCJiZWZvcmVTaHVmZmxlIiwiYWZ0ZXJTaHVmZmxlIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNwbGljZSIsInNvcnR3b3JrIiwic29ydCIsImZsIiwibW92ZUxldHRlciIsInNoaWZ0ZWRMZXR0ZXJzIiwiaW5kZXgiLCJlbGVtZW50IiwiZSIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLGdC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ZUFBSyxFQUFFNUIsSUFIWDtBQUlJLGtCQUFRLEVBQUc0RCxDQUFELElBQU87QUFDYjNELG1CQUFPLENBQUMyRCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQ0g7QUFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBU0k7QUFBQSxxQkFDSzlELElBQUksQ0FBQ2tCLFdBQUwsR0FBbUI2QyxJQUFuQixHQUEwQkMsS0FBMUIsQ0FBZ0MsYUFBaEMsa0JBQ0c7QUFBUSxxQkFBUyxFQUFDLFVBQWxCO0FBQ0ksbUJBQU8sRUFBRSxNQUFNO0FBQUNoQyw4QkFBZ0I7QUFBRyxhQUR2QztBQUFBO0FBQUEsYUFBaUMsWUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGUixlQU9JO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUNJLG1CQUFPLEVBQUUsTUFBTTtBQUFDSyx3QkFBVTtBQUFHLGFBRGpDO0FBQUE7QUFBQSxhQUFpQyxZQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOURzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0I5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXVISCxDQTlMRDs7R0FBTTdDLGdCOztLQUFBQSxnQjtBQWdNTiwrREFBZUEsZ0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzAyNmIzYzMwYWU3MTg0N2YzMGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGcnlZb3VyQnJhaW5Tb2xvID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nO1xyXG4gICAgY29uc3QgW3BpY2tlZExldHRlcnMsIHNldFBpY2tlZExldHRlcnNdID0gdXNlU3RhdGUoW10pOyAvLyBBbGwgcHJlLXBpY2tlZCBmcnkgbGV0dGVycyBhcyBhbiBhcnJheVxyXG4gICAgY29uc3QgW2ZyeUxldHRlcnMsIHNldEZyeUxldHRlcnNdID0gdXNlU3RhdGUoW10pOyAvLyBGcnkgbGV0dGVycyBzaG93biBhdCBjdXJyZW50IHN0YWdlIGFzIGFuIGFycmF5XHJcbiAgICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKC0xKTsgLy8gVXNlZCBmb3IgbGV0dGluZyB0aGUgdXNlciBtb3ZlIGZyeSBsZXR0ZXJzIGFyb3VuZFxyXG4gICAgY29uc3QgW21vdmVzLCBzZXRNb3Zlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwaWNrQWxsRnJ5TGV0dGVycygpO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgY29uc3QgcGlja0FsbEZyeUxldHRlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP3ByZXBpY2tmcnk9dHJ1ZSZndWFyYW50ZWU9NmA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgbGV0IHBpY2tlZCA9IGRhdGEuZnJ5TGV0dGVycy5qb2luKCcnKTtcclxuICAgICAgICBsZXQgbmV3UGljayA9IEFycmF5LmZyb20ocGlja2VkLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgIHNldFBpY2tlZExldHRlcnMobmV3UGljayk7XHJcbiAgICAgICAgc2V0RnJ5TGV0dGVycyhuZXdQaWNrLnNsaWNlKDAsMykpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBpc1dvcmRWYWxpZCgpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/ZXhpc3RzPSR7d29yZC50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBqZGF0YS5leGlzdHM7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q2hlZnNQaWNrKCkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz90b3Bmcnk9dHJ1ZSZsZXR0ZXJzPSR7ZnJ5TGV0dGVyc30mY291bnQ9MWA7XHJcbiAgICAgICAgYWxlcnQodXJsKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIHdvcmQudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgY29uc3QgamRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGpkYXRhLmFuc3dlcnMgJiYgamRhdGEuYW5zd2Vycy5sZW5ndGggPiAwID8gamRhdGEuYW5zd2Vyc1swXSA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3VibWl0UGxheWVyV29yZCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdFBsYXllcldvcmQgPSBhc3luYygpID0+IHtcclxuICAgICAgICBsZXQgdmFsaWQgPSBhd2FpdCBpc1dvcmRWYWxpZCgpO1xyXG4gICAgICAgIGxldCBtb3ZlID0ge3Bhc3M6ZmFsc2UsIHdvcmQ6IHdvcmQsIHZhbGlkOiB2YWxpZH07XHJcbiAgICAgICAgYXdhaXQgZmluaXNoTW92ZUFuZE1vdmVPbihtb3ZlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJtaXRQYXNzID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1vdmUgPSB7cGFzczp0cnVlfTtcclxuICAgICAgICBhd2FpdCBmaW5pc2hNb3ZlQW5kTW92ZU9uKG1vdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZpbmlzaE1vdmVBbmRNb3ZlT24obW92ZSkge1xyXG4gICAgICAgIGxldCBjaGVmc1BpY2sgPSBhd2FpdCBnZXRDaGVmc1BpY2soKTtcclxuICAgICAgICBtb3ZlLmZyeUxldHRlcnMgPSBmcnlMZXR0ZXJzO1xyXG4gICAgICAgIG1vdmUuY2hlZnNQaWNrID0gY2hlZnNQaWNrO1xyXG4gICAgICAgIGxldCBuZXdtb3ZlcyA9IFsuLi5tb3Zlc107XHJcbiAgICAgICAgbmV3bW92ZXMucHVzaChtb3ZlKTtcclxuICAgICAgICBzZXRNb3ZlcyhuZXdtb3Zlcyk7XHJcbiAgICAgICAgaWYgKGZyeUxldHRlcnMubGVuZ3RoID09PSBwaWNrZWRMZXR0ZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBhd2FpdCBwaWNrQWxsRnJ5TGV0dGVycygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdGcnlMZXR0ZXJzID0gcGlja2VkTGV0dGVycy5zbGljZSgwLCBmcnlMZXR0ZXJzLmxlbmd0aCArIDEpO1xyXG4gICAgICAgICAgICBzZXRGcnlMZXR0ZXJzKG5ld0ZyeUxldHRlcnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgRnJ5IFlvdXIgQnJhaW4gU29sb1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7bW92ZXMubGVuZ3RoID49IDAgJiYgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCIgYm9yZGVyPVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZyeSBMZXR0ZXJzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QbGF5IE1hZGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlc3VsdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2hlZnMgUGljazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3Zlcy5tYXAoKG0saSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YHNvbG9tb3ZlJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bS5mcnlMZXR0ZXJzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge20ucGFzcyAmJiA8dGQgY2xhc3NOYW1lPVwidHJEYW5nZXJcIj5QQVNTPC90ZD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFtLnBhc3MgJiYgPHRkPnttLndvcmR9PC90ZD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFtLnBhc3MgJiYgbS52YWxpZCAmJiA8dGQ+VmFsaWQ8L3RkPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW0ucGFzcyAmJiAhbS52YWxpZCAmJiA8dGQgY2xhc3NOYW1lPVwidHJEYW5nZXJcIj5QaG9uZXk8L3RkPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e20uY2hlZnNQaWNrfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICB7ZnJ5TGV0dGVycy5sZW5ndGggPiAwICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+RnJ5IExldHRlcnM6XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvbiBmcnlMZXR0ZXJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaHVmZmxlU2l6ZSA9IGZyeUxldHRlcnMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmVmb3JlU2h1ZmZsZSA9IFsuLi5mcnlMZXR0ZXJzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFmdGVyU2h1ZmZsZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYWZ0ZXJTaHVmZmxlLmxlbmd0aCA8IHNodWZmbGVTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJlZm9yZVNodWZmbGUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyU2h1ZmZsZS5wdXNoKGJlZm9yZVNodWZmbGVbcmFuZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2h1ZmZsZS5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZyeUxldHRlcnMoYWZ0ZXJTaHVmZmxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZnJ5TGV0dGVyQWN0aW9uQnV0dG9uSWNvblwiPmNhY2hlZDwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uIGZyeUxldHRlckFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNvcnR3b3JrID0gWy4uLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0d29yay5zb3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZyeUxldHRlcnMoc29ydHdvcmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBmcnlMZXR0ZXJBY3Rpb25CdXR0b25JY29uXCI+c29ydF9ieV9hbHBoYTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcnlMZXR0ZXJEaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZnJ5TGV0dGVycy5tYXAoKGZsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YFNvbG9GcnlMZXR0ZXIke2l9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aSA9PT0gc2VsZWN0ZWQgPyBcImZ5YkZyeUxldHRlciBTZWxlY3RlZFwiIDogXCJmeWJGcnlMZXR0ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZUxldHRlciA9IGZyeUxldHRlcnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaWZ0ZWRMZXR0ZXJzID0gWy4uLmZyeUxldHRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKG1vdmVMZXR0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZyeUxldHRlcnMoWy4uLnNoaWZ0ZWRMZXR0ZXJzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTsgLy8gdW5zZWxlY3Qgd2hlbiBjbGlja2VkIGEgc2Vjb25kIHRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIHNlbGVjdGVkIHRpbGUgdG8gdGhpcyBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpZnRlZExldHRlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVMZXR0ZXIgPSBmcnlMZXR0ZXJzW3NlbGVjdGVkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZyeUxldHRlcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZnJ5TGV0dGVyc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdGVkTGV0dGVycy5wdXNoKG1vdmVMZXR0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWRMZXR0ZXJzLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RnJ5TGV0dGVycyhzaGlmdGVkTGV0dGVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPntmbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+RW50ZXIgV29yZDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwid29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7d29yZC50b1VwcGVyQ2FzZSgpLnRyaW0oKS5tYXRjaChcIl5bYS16QS1aXSokXCIpICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIGtleT1cInN1Ym1pdFdvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzdWJtaXRQbGF5ZXJXb3JkKCl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVUJNSVRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBrZXk9XCJwYXNzQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzdWJtaXRQYXNzKCl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBBU1NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJ5WW91ckJyYWluU29sbztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==