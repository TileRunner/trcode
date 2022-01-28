self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/morpho/morpho.js":
/*!********************************!*\
  !*** ./pages/morpho/morpho.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var _lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/wordfunctions */ "./lib/wordfunctions.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\morpho\\morpho.js",
    _s = $RefreshSig$();





const Morpho = ({
  setWhereto
}) => {
  _s();

  const {
    0: starting,
    1: setStarting
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: numRows,
    1: setNumRows
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(6);
  const {
    0: numCols,
    1: setNumCols
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);
  const {
    0: nextNumCols,
    1: setNextNumCols
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);
  const baseurl =  true ? 'http://localhost:5000' : 0;
  const cssPresetLetter = "morphoCellStatic";
  const cssNoLetter = "morphoCellNoLetter";
  const cssSelectedCell = " morphoCellSelected";
  const cssLarva = "morphoCellLarva";
  const cssCocoon = "morphoCellCocoon";
  const cssButterfly = "morphoCellButterfly";
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: checking,
    1: setChecking
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Set when checking solution to prevent further alterations

  const {
    0: filledin,
    1: setFilledin
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: showSolution,
    1: setShowSolution
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: puzzleSolved,
    1: setPuzzleSolved
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: firstWord,
    1: setFirstWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: lastWord,
    1: setLastWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: board,
    1: setBoard
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    row: 1,
    col: 0
  }); // Natural place to start entering letters

  const callForPuzzle = async wordLength => {
    let data = {};

    try {
      let url = `${baseurl}/ENABLE2K?morpho=true&len=${wordLength}`;
      const response = await fetch(url);
      data = await response.json();
    } catch (error) {
      data.notes = "Problem with the server. Sorry about that.";
      console.log(error);
    }

    return data;
  };

  const setInitialBoard = async wordLength => {
    // Initial board of given size
    let numberOfRows = wordLength + 1;
    let numberOfCols = wordLength;
    setStarting(false);
    setLoading(true);
    setChecking(false);
    setShowSolution(false);
    setFilledin(false);
    setPuzzleSolved(false);
    setNumCols(wordLength);
    setNumRows(wordLength + 1);
    let rowArray = [];
    const data = await callForPuzzle(wordLength);

    if (!data.notes || data.notes.length === 0) {
      // Ok result
      for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        const rowWord = data.puzzle[rowIndex].toUpperCase();

        if (rowIndex === 0) {
          setFirstWord(rowWord);
        } else if (rowIndex === numberOfRows - 1) {
          setLastWord(rowWord);
        }

        const rowLetters = [...Array.from(rowWord)];
        let rowFilledIn = rowIndex === 0 || rowIndex === numberOfRows - 1;
        let colArray = [];

        for (let colIndex = 0; colIndex < numberOfCols; colIndex++) {
          let cell = {
            letter: '?',
            solution: rowLetters[colIndex],
            className: '?'
          };

          if (rowIndex === 0 || rowIndex === numberOfRows - 1) {
            cell.letter = rowLetters[colIndex];
            cell.className = cssPresetLetter;
          } else {
            cell.letter = '?';
            cell.className = cssNoLetter;
          }

          colArray.push(cell);
        }

        rowArray.push({
          filledin: rowFilledIn,
          colArray: colArray
        });
      }

      setBoard(rowArray);
      setSelected({
        row: 1,
        col: 0
      });
      setLoading(false);
    } else {
      alert(`Problem generating puzzle: ${data.notes}\nBest to click Home then rechoose Morpho.`);
    }
  };

  const handleSelection = (rowIndex, colIndex) => {
    if (checking) {
      return; // No modes while checking solution
    }

    if (puzzleSolved) {
      return; // Puzzle already solved
    }

    if (colIndex < 0 || colIndex >= numCols) {
      return;
    }

    if (rowIndex === numRows - 1 && selected.row > 0 && selected.row < numRows - 1) {
      // If they click on a bottom row tile then copy it up and copy down the rest of the row
      let newBoard = JSON.parse(JSON.stringify(board));

      for (let ci = 0; ci < numCols; ci++) {
        if (ci === colIndex) {
          // This is the column they clicked on
          newBoard[selected.row].colArray[ci].letter = newBoard[numRows - 1].colArray[ci].letter;
        } else {
          newBoard[selected.row].colArray[ci].letter = newBoard[selected.row - 1].colArray[ci].letter;
        }

        newBoard[selected.row].colArray[ci].className = cssCocoon;
      }

      newBoard[selected.row].filledin = true;
      let newSelected = {
        row: selected.row + 1,
        col: 0
      };

      if (newSelected.row >= numRows - 1) {
        newSelected.row = 1;
      }

      console.log(`Row ${selected.row} to ${newSelected.row}`);
      setSelected(newSelected);
      setBoard(newBoard);

      if (newBoard.filter(r => {
        return !r.filledin;
      }).length === 0) {
        // All letters are filled in
        setFilledin(true);
      }

      return;
    }

    if (rowIndex < 1 || rowIndex >= numRows - 1) {
      return;
    }

    setSelected({
      row: rowIndex,
      col: colIndex
    });
  };

  const handleKeyDown = event => {
    if (event.key === "F12") {
      return;
    }

    event.preventDefault();

    if (checking) {
      return; // No modes while checking solution
    }

    if (puzzleSolved) {
      return; // Puzzle already solved
    }

    handleInputLetter(event.key);
  };

  const copyDownLetter = () => {
    if (checking) {
      return; // No modes while checking solution
    }

    if (puzzleSolved) {
      return; // Puzzle already solved
    }

    let rowIndex = selected.row;
    let colIndex = selected.col;

    if (rowIndex < 1 || rowIndex >= numRows - 1) {
      return;
    }

    if (colIndex < 0 || rowIndex >= numCols) {
      return;
    }

    handleInputLetter(board[rowIndex - 1].colArray[colIndex].letter);
  };

  const copyUpLetter = () => {
    if (checking) {
      return; // No modes while checking solution
    }

    if (puzzleSolved) {
      return; // Puzzle already solved
    }

    let rowIndex = selected.row;
    let colIndex = selected.col;

    if (rowIndex < 1 || rowIndex >= numRows - 1) {
      return;
    }

    if (colIndex < 0 || rowIndex >= numCols) {
      return;
    }

    handleInputLetter(board[numRows - 1].colArray[colIndex].letter);
  };

  const handleInputLetter = letter => {
    let rowIndex = selected.row;
    let colIndex = selected.col;

    if (rowIndex < 1 || rowIndex >= numRows - 1) {
      return;
    }

    if (colIndex < 0 || rowIndex >= numCols) {
      return;
    }

    if (filledin && letter === "Enter") {
      checkSolution();
      return;
    }

    let lettertest = /^[A-Za-z\?]$/; // single letter or question mark key pressed

    let moveDirection = "r"; // Default

    if (letter === "Backspace") {
      letter = "?";
      moveDirection = "l";
    }

    if (letter === "Delete") {
      letter = "?";
      moveDirection = "";
    }

    if (letter === "ArrowUp") {
      letter = board[rowIndex].colArray[colIndex].letter;
      moveDirection = "u";
    }

    if (letter === "ArrowDown") {
      letter = board[rowIndex].colArray[colIndex].letter;
      moveDirection = "d";
    }

    if (letter === "ArrowLeft") {
      letter = board[rowIndex].colArray[colIndex].letter;
      moveDirection = "l";
    }

    if (letter === "ArrowRight") {
      letter = board[rowIndex].colArray[colIndex].letter;
      moveDirection = "r";
    }

    if (letter.match(lettertest)) {
      letter = letter.toUpperCase();
    } else {
      return;
    }

    if (letter === "") {
      return;
    }

    let rowArray = JSON.parse(JSON.stringify(board));
    rowArray[rowIndex].colArray[colIndex].letter = letter;
    rowArray[rowIndex].filledin = rowArray[rowIndex].colArray.filter(cell => {
      return cell.letter === "?";
    }).length === 0;

    for (let ci = 0; ci < numCols; ci++) {
      if (rowArray[rowIndex].colArray[ci].letter === "?") {
        rowArray[rowIndex].colArray[ci].className = cssNoLetter;
      } else {
        rowArray[rowIndex].colArray[ci].className = rowArray[rowIndex].filledin ? cssCocoon : cssLarva;
      }
    }

    if (moveDirection === "u") {
      moveUp();
    }

    if (moveDirection === "d") {
      moveDown();
    }

    if (moveDirection === "r") {
      moveRight();
    }

    if (moveDirection === "l") {
      moveLeft();
    }

    if (rowArray.filter(r => {
      return !r.filledin;
    }).length === 0) {
      // All letters are filled in
      setFilledin(true);
    }

    setBoard(rowArray);
  };

  const moveUp = () => {
    let rowIndex = selected.row;
    let colIndex = selected.col;
    let newSelected = {
      row: rowIndex,
      col: colIndex
    };

    if (rowIndex - 1 > 0) {
      newSelected.row = rowIndex - 1;
      newSelected.col = colIndex;
    } else {
      newSelected.row = numRows - 2;
      newSelected.col = colIndex - 1 > -1 ? colIndex - 1 : numCols - 1;
    }

    setSelected(newSelected);
  };

  const moveDown = () => {
    let rowIndex = selected.row;
    let colIndex = selected.col;
    let newSelected = {
      row: rowIndex,
      col: colIndex
    };

    if (rowIndex + 1 < numRows - 1) {
      newSelected.row = rowIndex + 1;
      newSelected.col = colIndex;
    } else {
      newSelected.row = 1;
      newSelected.col = colIndex + 1 < numCols ? colIndex + 1 : 0;
    }

    setSelected(newSelected);
  };

  const moveRight = () => {
    let rowIndex = selected.row;
    let colIndex = selected.col;
    let newSelected = {
      row: 1,
      col: 0
    };

    if (colIndex + 1 < numCols) {
      newSelected.row = rowIndex;
      newSelected.col = colIndex + 1;
    } else if (rowIndex + 1 < numRows - 1) {
      newSelected.row = rowIndex + 1;
      newSelected.col = 0;
    }

    setSelected(newSelected);
  };

  const moveLeft = () => {
    let rowIndex = selected.row;
    let colIndex = selected.col;
    let newSelected = {
      row: numRows - 2,
      col: numCols - 1
    };

    if (colIndex - 1 > -1) {
      newSelected.row = rowIndex;
      newSelected.col = colIndex - 1;
    } else if (rowIndex - 1 > 0) {
      newSelected.row = rowIndex - 1;
      newSelected.col = numCols - 1;
    }

    setSelected(newSelected);
  };

  const toggleShowSolution = () => {
    setShowSolution(!showSolution);
  };

  const checkSolution = async () => {
    setChecking(true);
    let result = true;

    for (let rowIndex = 1; result && rowIndex < numRows; rowIndex++) {
      let prevWord = "";
      let currWord = "";

      for (let colIndex = 0; colIndex < numCols; colIndex++) {
        prevWord = prevWord + board[rowIndex - 1].colArray[colIndex].letter;
        currWord = currWord + board[rowIndex].colArray[colIndex].letter;
      }

      if ((0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.countSwaps)(prevWord, currWord) !== 1) {
        alert(`${prevWord} to ${currWord} is not a valid move`);
        result = false;
      }

      if (result && rowIndex !== numRows - 1 && !(await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.isWordValid)(currWord))) {
        alert(`${currWord} is not valid`);
        result = false;
      }
    }

    setChecking(false);
    setPuzzleSolved(result);
  };

  const promptForPuzzleGeneration = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          setInitialBoard(nextNumCols);
        },
        children: ["GENERATE ", nextNumCols, " LETTER PUZZLE"]
      }, "genMobile", true, {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 13
      }, undefined), nextNumCols < 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "morphoPuzzleSizeKey",
        onClick: () => {
          setNextNumCols(nextNumCols + 1);
        },
        children: "+"
      }, "longerPuzzleMobile", false, {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 33
      }, undefined), nextNumCols > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "morphoPuzzleSizeKey",
        onClick: () => {
          setNextNumCols(nextNumCols - 1);
        },
        children: "-"
      }, "shorterPuzzleMobile", false, {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 33
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          setInitialBoard(nextNumCols);
        },
        children: ["GENERATE ", nextNumCols, " LETTER PUZZLE"]
      }, "genBrowser", true, {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 13
      }, undefined), nextNumCols < 7 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "morphoPuzzleSizeKey",
        onClick: () => {
          setNextNumCols(nextNumCols + 1);
        },
        children: "+"
      }, "longerPuzzle", false, {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 33
      }, undefined), nextNumCols > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "morphoPuzzleSizeKey",
        onClick: () => {
          setNextNumCols(nextNumCols - 1);
        },
        children: "-"
      }, "shorterPuzzle", false, {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 33
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 333,
    columnNumber: 39
  }, undefined);

  const renderThePuzzle = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: puzzleSolved ? `morphoSolvedDiv l${numCols}` : "morphoDiv",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      onKeyDown: e => {
        handleKeyDown(e);
      },
      tabIndex: -1,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: board.map((boardRow, rowIndex) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: boardRow.colArray.map((cell, colIndex) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            onClick: () => {
              handleSelection(rowIndex, colIndex);
            },
            className: `col morphoCell ${showSolution ? cssPresetLetter : puzzleSolved ? cssButterfly : cell.className + (rowIndex === selected.row && colIndex === selected.col ? cssSelectedCell : "")}`,
            children: showSolution ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: cell.solution
            }, `BoardCellS.${rowIndex}.${colIndex}`, false, {
              fileName: _jsxFileName,
              lineNumber: 371,
              columnNumber: 33
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: cell.letter
            }, `BoardCellL.${rowIndex}.${colIndex}`, false, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 33
            }, undefined)
          }, `BoardCell.${rowIndex}.${colIndex}`, false, {
            fileName: _jsxFileName,
            lineNumber: 367,
            columnNumber: 25
          }, undefined))
        }, `BoardRow.${rowIndex}`, false, {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 17
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 72
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: [!loading && !checking && !puzzleSolved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "morphoKeyboard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "morphoKeyrow4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                copyDownLetter();
              },
              className: "morphoCopydownKey",
              children: "COPY DOWN"
            }, "keyCopydown", false, {
              fileName: _jsxFileName,
              lineNumber: 415,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                copyUpLetter();
              },
              className: "morphoCopyupKey",
              children: "COPY UP"
            }, "keyCopyup", false, {
              fileName: _jsxFileName,
              lineNumber: 416,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 414,
            columnNumber: 21
          }, undefined), !puzzleSolved && filledin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "morphoKeyrow4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "trButton",
              onClick: () => {
                checkSolution();
              },
              children: "SUBMIT YOUR SOLUTION"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 419,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 418,
            columnNumber: 51
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Change one letter at a time to get from ", firstWord, " to ", lastWord, ". Each interim word must be a valid word."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "COPY DOWN copies a letter down from the row above. COPY UP copies a letter up from the bottom row."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Click a letter on the bottom row to use it as the swap on the selected row."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 56
      }, undefined), puzzleSolved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "trEmphasis",
          children: "Success!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 432,
          columnNumber: 21
        }, undefined), promptForPuzzleGeneration]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 17
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          toggleShowSolution();
        },
        children: `${showSolution ? 'HIDE SOLUTION' : 'SHOW A SOLUTION'}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 9
    }, undefined)]
  }, "showboard", true, {
    fileName: _jsxFileName,
    lineNumber: 362,
    columnNumber: 29
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trTitle",
      children: ["Morpho", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
          lineNumber: 447,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 13
    }, undefined), starting ? promptForPuzzleGeneration : loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trEmphasis",
      children: "Creating puzzle, please be patient..."
    }, "pleasewait", false, {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 17
    }, undefined) : renderThePuzzle]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 443,
    columnNumber: 9
  }, undefined);
};

_s(Morpho, "q0iOQhHu7IuqBIn9jbwsM6P+eMs=");

_c = Morpho;
/* harmony default export */ __webpack_exports__["default"] = (Morpho);

var _c;

$RefreshReg$(_c, "Morpho");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9ycGhvL21vcnBoby5qcyJdLCJuYW1lcyI6WyJNb3JwaG8iLCJzZXRXaGVyZXRvIiwic3RhcnRpbmciLCJzZXRTdGFydGluZyIsInVzZVN0YXRlIiwibnVtUm93cyIsInNldE51bVJvd3MiLCJudW1Db2xzIiwic2V0TnVtQ29scyIsIm5leHROdW1Db2xzIiwic2V0TmV4dE51bUNvbHMiLCJiYXNldXJsIiwiY3NzUHJlc2V0TGV0dGVyIiwiY3NzTm9MZXR0ZXIiLCJjc3NTZWxlY3RlZENlbGwiLCJjc3NMYXJ2YSIsImNzc0NvY29vbiIsImNzc0J1dHRlcmZseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY2hlY2tpbmciLCJzZXRDaGVja2luZyIsImZpbGxlZGluIiwic2V0RmlsbGVkaW4iLCJzaG93U29sdXRpb24iLCJzZXRTaG93U29sdXRpb24iLCJwdXp6bGVTb2x2ZWQiLCJzZXRQdXp6bGVTb2x2ZWQiLCJmaXJzdFdvcmQiLCJzZXRGaXJzdFdvcmQiLCJsYXN0V29yZCIsInNldExhc3RXb3JkIiwiYm9hcmQiLCJzZXRCb2FyZCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJyb3ciLCJjb2wiLCJjYWxsRm9yUHV6emxlIiwid29yZExlbmd0aCIsImRhdGEiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImVycm9yIiwibm90ZXMiLCJjb25zb2xlIiwibG9nIiwic2V0SW5pdGlhbEJvYXJkIiwibnVtYmVyT2ZSb3dzIiwibnVtYmVyT2ZDb2xzIiwicm93QXJyYXkiLCJsZW5ndGgiLCJyb3dJbmRleCIsInJvd1dvcmQiLCJwdXp6bGUiLCJ0b1VwcGVyQ2FzZSIsInJvd0xldHRlcnMiLCJBcnJheSIsImZyb20iLCJyb3dGaWxsZWRJbiIsImNvbEFycmF5IiwiY29sSW5kZXgiLCJjZWxsIiwibGV0dGVyIiwic29sdXRpb24iLCJjbGFzc05hbWUiLCJwdXNoIiwiYWxlcnQiLCJoYW5kbGVTZWxlY3Rpb24iLCJuZXdCb2FyZCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImNpIiwibmV3U2VsZWN0ZWQiLCJmaWx0ZXIiLCJyIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVJbnB1dExldHRlciIsImNvcHlEb3duTGV0dGVyIiwiY29weVVwTGV0dGVyIiwiY2hlY2tTb2x1dGlvbiIsImxldHRlcnRlc3QiLCJtb3ZlRGlyZWN0aW9uIiwibWF0Y2giLCJtb3ZlVXAiLCJtb3ZlRG93biIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwidG9nZ2xlU2hvd1NvbHV0aW9uIiwicmVzdWx0IiwicHJldldvcmQiLCJjdXJyV29yZCIsImNvdW50U3dhcHMiLCJpc1dvcmRWYWxpZCIsInByb21wdEZvclB1enpsZUdlbmVyYXRpb24iLCJyZW5kZXJUaGVQdXp6bGUiLCJlIiwibWFwIiwiYm9hcmRSb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQzdCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEsQ0FBQyxJQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRiwrQ0FBUSxDQUFDLENBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JKLCtDQUFRLENBQUMsQ0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDSyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ04sK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQ0EsUUFBTU8sT0FBTyxHQUFJLEtBQUQsR0FBb0UsdUJBQXBFLEdBQThGLENBQTlHO0FBQ0EsUUFBTUMsZUFBZSxHQUFHLGtCQUF4QjtBQUNBLFFBQU1DLFdBQVcs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBa0JILENBdmNEOztHQUFNckcsTTs7S0FBQUEsTTtBQXljTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMzNjMjg0ZDEzZmYxZmYyMzIxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJyb3dzZXJWaWV3LCBNb2JpbGVPbmx5VmlldyB9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnO1xyXG5pbXBvcnQgeyBjb3VudFN3YXBzLCBpc1dvcmRWYWxpZCB9IGZyb20gJy4uLy4uL2xpYi93b3JkZnVuY3Rpb25zJztcclxuXHJcbmNvbnN0IE1vcnBobyA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IFtzdGFydGluZywgc2V0U3RhcnRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbbnVtUm93cywgc2V0TnVtUm93c10gPSB1c2VTdGF0ZSg2KTtcclxuICAgIGNvbnN0IFtudW1Db2xzLCBzZXROdW1Db2xzXSA9IHVzZVN0YXRlKDUpO1xyXG4gICAgY29uc3QgW25leHROdW1Db2xzLCBzZXROZXh0TnVtQ29sc10gPSB1c2VTdGF0ZSg1KTtcclxuICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJztcclxuICAgIGNvbnN0IGNzc1ByZXNldExldHRlciA9IFwibW9ycGhvQ2VsbFN0YXRpY1wiO1xyXG4gICAgY29uc3QgY3NzTm9MZXR0ZXIgPSBcIm1vcnBob0NlbGxOb0xldHRlclwiO1xyXG4gICAgY29uc3QgY3NzU2VsZWN0ZWRDZWxsID0gXCIgbW9ycGhvQ2VsbFNlbGVjdGVkXCI7XHJcbiAgICBjb25zdCBjc3NMYXJ2YSA9IFwibW9ycGhvQ2VsbExhcnZhXCI7XHJcbiAgICBjb25zdCBjc3NDb2Nvb24gPSBcIm1vcnBob0NlbGxDb2Nvb25cIjtcclxuICAgIGNvbnN0IGNzc0J1dHRlcmZseSA9IFwibW9ycGhvQ2VsbEJ1dHRlcmZseVwiO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbY2hlY2tpbmcsIHNldENoZWNraW5nXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gU2V0IHdoZW4gY2hlY2tpbmcgc29sdXRpb24gdG8gcHJldmVudCBmdXJ0aGVyIGFsdGVyYXRpb25zXHJcbiAgICBjb25zdCBbZmlsbGVkaW4sIHNldEZpbGxlZGluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93U29sdXRpb24sIHNldFNob3dTb2x1dGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHV6emxlU29sdmVkLCBzZXRQdXp6bGVTb2x2ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2ZpcnN0V29yZCwgc2V0Rmlyc3RXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsYXN0V29yZCwgc2V0TGFzdFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2JvYXJkLCBzZXRCb2FyZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKHtyb3c6MSwgY29sOjB9KTsgLy8gTmF0dXJhbCBwbGFjZSB0byBzdGFydCBlbnRlcmluZyBsZXR0ZXJzXHJcblxyXG4gICAgY29uc3QgY2FsbEZvclB1enpsZSA9IGFzeW5jKHdvcmRMZW5ndGgpID0+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz9tb3JwaG89dHJ1ZSZsZW49JHt3b3JkTGVuZ3RofWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgZGF0YS5ub3RlcyA9IFwiUHJvYmxlbSB3aXRoIHRoZSBzZXJ2ZXIuIFNvcnJ5IGFib3V0IHRoYXQuXCI7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXRJbml0aWFsQm9hcmQgPSBhc3luYyh3b3JkTGVuZ3RoKSA9PiB7IC8vIEluaXRpYWwgYm9hcmQgb2YgZ2l2ZW4gc2l6ZVxyXG4gICAgICAgIGxldCBudW1iZXJPZlJvd3MgPSB3b3JkTGVuZ3RoICsgMTtcclxuICAgICAgICBsZXQgbnVtYmVyT2ZDb2xzID0gd29yZExlbmd0aDtcclxuICAgICAgICBzZXRTdGFydGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBzZXRDaGVja2luZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0U2hvd1NvbHV0aW9uKGZhbHNlKTtcclxuICAgICAgICBzZXRGaWxsZWRpbihmYWxzZSk7XHJcbiAgICAgICAgc2V0UHV6emxlU29sdmVkKGZhbHNlKTtcclxuICAgICAgICBzZXROdW1Db2xzKHdvcmRMZW5ndGgpO1xyXG4gICAgICAgIHNldE51bVJvd3Mod29yZExlbmd0aCsxKTtcclxuICAgICAgICBsZXQgcm93QXJyYXkgPSBbXTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgY2FsbEZvclB1enpsZSh3b3JkTGVuZ3RoKTtcclxuICAgICAgICBpZiAoIWRhdGEubm90ZXMgfHwgZGF0YS5ub3Rlcy5sZW5ndGggPT09IDApIHsgLy8gT2sgcmVzdWx0XHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBudW1iZXJPZlJvd3M7IHJvd0luZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1dvcmQgPSBkYXRhLnB1enpsZVtyb3dJbmRleF0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpcnN0V29yZChyb3dXb3JkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggPT09IG51bWJlck9mUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0V29yZChyb3dXb3JkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0xldHRlcnMgPSBbLi4uQXJyYXkuZnJvbShyb3dXb3JkKV07XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93RmlsbGVkSW4gPSByb3dJbmRleCA9PT0gMCB8fCByb3dJbmRleCA9PT0gbnVtYmVyT2ZSb3dzIC0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bWJlck9mQ29sczsgY29sSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsID0ge2xldHRlcjonPycsc29sdXRpb246cm93TGV0dGVyc1tjb2xJbmRleF0sY2xhc3NOYW1lOic/J307XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwIHx8IHJvd0luZGV4ID09PSBudW1iZXJPZlJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwubGV0dGVyID0gcm93TGV0dGVyc1tjb2xJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gY3NzUHJlc2V0TGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwubGV0dGVyID0gJz8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IGNzc05vTGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb2xBcnJheS5wdXNoKGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcm93QXJyYXkucHVzaCh7ZmlsbGVkaW46cm93RmlsbGVkSW4sIGNvbEFycmF5OmNvbEFycmF5fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0Qm9hcmQocm93QXJyYXkpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZCh7cm93OjEsY29sOjB9KTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoYFByb2JsZW0gZ2VuZXJhdGluZyBwdXp6bGU6ICR7ZGF0YS5ub3Rlc31cXG5CZXN0IHRvIGNsaWNrIEhvbWUgdGhlbiByZWNob29zZSBNb3JwaG8uYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdGlvbiA9IChyb3dJbmRleCwgY29sSW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoY2hlY2tpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBObyBtb2RlcyB3aGlsZSBjaGVja2luZyBzb2x1dGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHV6emxlU29sdmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gUHV6emxlIGFscmVhZHkgc29sdmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2xJbmRleCA8IDAgfHwgY29sSW5kZXggPj0gbnVtQ29scykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3dJbmRleCA9PT0gbnVtUm93cyAtIDEgJiYgc2VsZWN0ZWQucm93ID4gMCAmJiBzZWxlY3RlZC5yb3cgPCBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICAvLyBJZiB0aGV5IGNsaWNrIG9uIGEgYm90dG9tIHJvdyB0aWxlIHRoZW4gY29weSBpdCB1cCBhbmQgY29weSBkb3duIHRoZSByZXN0IG9mIHRoZSByb3dcclxuICAgICAgICAgICAgbGV0IG5ld0JvYXJkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShib2FyZCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjaSA9IDA7IGNpIDwgbnVtQ29sczsgY2krKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNpID09PSBjb2xJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIGNvbHVtbiB0aGV5IGNsaWNrZWQgb25cclxuICAgICAgICAgICAgICAgICAgICBuZXdCb2FyZFtzZWxlY3RlZC5yb3ddLmNvbEFycmF5W2NpXS5sZXR0ZXIgPSBuZXdCb2FyZFtudW1Sb3dzLTFdLmNvbEFycmF5W2NpXS5sZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0JvYXJkW3NlbGVjdGVkLnJvd10uY29sQXJyYXlbY2ldLmxldHRlciA9IG5ld0JvYXJkW3NlbGVjdGVkLnJvdyAtIDFdLmNvbEFycmF5W2NpXS5sZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXdCb2FyZFtzZWxlY3RlZC5yb3ddLmNvbEFycmF5W2NpXS5jbGFzc05hbWUgPSBjc3NDb2Nvb247ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3Qm9hcmRbc2VsZWN0ZWQucm93XS5maWxsZWRpbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6IHNlbGVjdGVkLnJvdyArIDEsIGNvbDogMH07XHJcbiAgICAgICAgICAgIGlmIChuZXdTZWxlY3RlZC5yb3cgPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFJvdyAke3NlbGVjdGVkLnJvd30gdG8gJHtuZXdTZWxlY3RlZC5yb3d9YCk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgICAgICAgICAgc2V0Qm9hcmQobmV3Qm9hcmQpO1xyXG4gICAgICAgICAgICBpZiAobmV3Qm9hcmQuZmlsdGVyKHIgPT4ge3JldHVybiAhci5maWxsZWRpbjt9KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIEFsbCBsZXR0ZXJzIGFyZSBmaWxsZWQgaW5cclxuICAgICAgICAgICAgICAgIHNldEZpbGxlZGluKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3dJbmRleCA8IDEgfHwgcm93SW5kZXggPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZCh7cm93OnJvd0luZGV4LGNvbDpjb2xJbmRleH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkYxMlwiKSB7cmV0dXJuO31cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChjaGVja2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIE5vIG1vZGVzIHdoaWxlIGNoZWNraW5nIHNvbHV0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwdXp6bGVTb2x2ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBQdXp6bGUgYWxyZWFkeSBzb2x2ZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlSW5wdXRMZXR0ZXIoZXZlbnQua2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb3B5RG93bkxldHRlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY2hlY2tpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBObyBtb2RlcyB3aGlsZSBjaGVja2luZyBzb2x1dGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHV6emxlU29sdmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gUHV6emxlIGFscmVhZHkgc29sdmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgaWYgKHJvd0luZGV4IDwgMSB8fCByb3dJbmRleCA+PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2xJbmRleCA8IDAgfHwgcm93SW5kZXggPj0gbnVtQ29scykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZUlucHV0TGV0dGVyKGJvYXJkW3Jvd0luZGV4LTFdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBjb3B5VXBMZXR0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoZWNraW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gTm8gbW9kZXMgd2hpbGUgY2hlY2tpbmcgc29sdXRpb25cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHB1enpsZVNvbHZlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIFB1enpsZSBhbHJlYWR5IHNvbHZlZFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGlmIChyb3dJbmRleCA8IDEgfHwgcm93SW5kZXggPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IHJvd0luZGV4ID49IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoYW5kbGVJbnB1dExldHRlcihib2FyZFtudW1Sb3dzLTFdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dExldHRlciA9IChsZXR0ZXIpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGlmIChyb3dJbmRleCA8IDEgfHwgcm93SW5kZXggPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IHJvd0luZGV4ID49IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsbGVkaW4gJiYgbGV0dGVyID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgY2hlY2tTb2x1dGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsZXR0ZXJ0ZXN0ID0gL15bQS1aYS16XFw/XSQvOyAvLyBzaW5nbGUgbGV0dGVyIG9yIHF1ZXN0aW9uIG1hcmsga2V5IHByZXNzZWRcclxuICAgICAgICBsZXQgbW92ZURpcmVjdGlvbiA9IFwiclwiOyAvLyBEZWZhdWx0XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJCYWNrc3BhY2VcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBcIj9cIjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwibFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkRlbGV0ZVwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IFwiP1wiO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJBcnJvd1VwXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcInVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwiZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkFycm93TGVmdFwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQXJyb3dSaWdodFwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIubWF0Y2gobGV0dGVydGVzdCkpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJvd0FycmF5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShib2FyZCkpO1xyXG4gICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyID0gbGV0dGVyO1xyXG4gICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5maWxsZWRpbiA9IChyb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXkuZmlsdGVyKChjZWxsKSA9PiB7cmV0dXJuIGNlbGwubGV0dGVyID09PSBcIj9cIjt9KS5sZW5ndGggPT09IDApO1xyXG4gICAgICAgIGZvciAobGV0IGNpID0gMDsgY2kgPCBudW1Db2xzOyBjaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChyb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY2ldLmxldHRlciA9PT0gXCI/XCIpIHtcclxuICAgICAgICAgICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjaV0uY2xhc3NOYW1lID0gY3NzTm9MZXR0ZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY2ldLmNsYXNzTmFtZSA9IHJvd0FycmF5W3Jvd0luZGV4XS5maWxsZWRpbiA/IGNzc0NvY29vbiA6IGNzc0xhcnZhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSBcInVcIikge1xyXG4gICAgICAgICAgICBtb3ZlVXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb24gPT09IFwiZFwiKSB7XHJcbiAgICAgICAgICAgIG1vdmVEb3duKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSBcInJcIikge1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb24gPT09IFwibFwiKSB7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3dBcnJheS5maWx0ZXIociA9PiB7cmV0dXJuICFyLmZpbGxlZGluO30pLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyBBbGwgbGV0dGVycyBhcmUgZmlsbGVkIGluXHJcbiAgICAgICAgICAgIHNldEZpbGxlZGluKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRCb2FyZChyb3dBcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW92ZVVwID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3Jvdzpyb3dJbmRleCxjb2w6Y29sSW5kZXh9O1xyXG4gICAgICAgIGlmIChyb3dJbmRleCAtIDEgPiAwKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4IC0gMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gbnVtUm93cyAtIDI7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4IC0gMSA+IC0xID8gY29sSW5kZXggLSAxIDogbnVtQ29scyAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlRG93biA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6cm93SW5kZXgsY29sOmNvbEluZGV4fTtcclxuICAgICAgICBpZiAocm93SW5kZXggKyAxIDwgbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCArIDEgPCBudW1Db2xzID8gY29sSW5kZXggKyAxIDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdmVSaWdodCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6MSxjb2w6MH07XHJcbiAgICAgICAgaWYgKGNvbEluZGV4ICsgMSA8IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXg7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4ICsgMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJvd0luZGV4ICsgMSA8IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4ICsgMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdmVMZWZ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3JvdzpudW1Sb3dzLTIsY29sOm51bUNvbHMtMX07XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IC0gMSA+IC0xKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4O1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCAtIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyb3dJbmRleCAtIDEgPiAwKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4IC0gMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gbnVtQ29scyAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2dnbGVTaG93U29sdXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd1NvbHV0aW9uKCFzaG93U29sdXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrU29sdXRpb24gPSBhc3luYygpID0+IHtcclxuICAgICAgICBzZXRDaGVja2luZyh0cnVlKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICBmb3IobGV0IHJvd0luZGV4ID0gMTsgcmVzdWx0ICYmIHJvd0luZGV4IDwgbnVtUm93czsgcm93SW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgcHJldldvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgY3VycldvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgbnVtQ29sczsgY29sSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgcHJldldvcmQgPSBwcmV2V29yZCArIGJvYXJkW3Jvd0luZGV4LTFdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICBjdXJyV29yZCA9IGN1cnJXb3JkICsgYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvdW50U3dhcHMocHJldldvcmQsIGN1cnJXb3JkKSAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7cHJldldvcmR9IHRvICR7Y3VycldvcmR9IGlzIG5vdCBhIHZhbGlkIG1vdmVgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcm93SW5kZXggIT09IG51bVJvd3MgLTEgJiYgISBhd2FpdCBpc1dvcmRWYWxpZChjdXJyV29yZCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke2N1cnJXb3JkfSBpcyBub3QgdmFsaWRgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENoZWNraW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRQdXp6bGVTb2x2ZWQocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9tcHRGb3JQdXp6bGVHZW5lcmF0aW9uID0gPGRpdj5cclxuICAgICAgICA8TW9iaWxlT25seVZpZXc+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwiZ2VuTW9iaWxlXCIgY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRJbml0aWFsQm9hcmQobmV4dE51bUNvbHMpO1xyXG4gICAgICAgICAgICB9IH0+XHJcbiAgICAgICAgICAgICAgICBHRU5FUkFURSB7bmV4dE51bUNvbHN9IExFVFRFUiBQVVpaTEVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtuZXh0TnVtQ29scyA8IDUgJiYgPGJ1dHRvbiBrZXk9XCJsb25nZXJQdXp6bGVNb2JpbGVcIiBjbGFzc05hbWU9XCJtb3JwaG9QdXp6bGVTaXplS2V5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TmV4dE51bUNvbHMobmV4dE51bUNvbHMgKyAxKTtcclxuICAgICAgICAgICAgfSB9Pis8L2J1dHRvbj59XHJcbiAgICAgICAgICAgIHtuZXh0TnVtQ29scyA+IDMgJiYgPGJ1dHRvbiBrZXk9XCJzaG9ydGVyUHV6emxlTW9iaWxlXCIgY2xhc3NOYW1lPVwibW9ycGhvUHV6emxlU2l6ZUtleVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE5leHROdW1Db2xzKG5leHROdW1Db2xzIC0gMSk7XHJcbiAgICAgICAgICAgIH0gfT4tPC9idXR0b24+fVxyXG4gICAgICAgIDwvTW9iaWxlT25seVZpZXc+XHJcbiAgICAgICAgPEJyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImdlbkJyb3dzZXJcIiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEluaXRpYWxCb2FyZChuZXh0TnVtQ29scyk7XHJcbiAgICAgICAgICAgIH0gfT5cclxuICAgICAgICAgICAgICAgIEdFTkVSQVRFIHtuZXh0TnVtQ29sc30gTEVUVEVSIFBVWlpMRVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge25leHROdW1Db2xzIDwgNyAmJiA8YnV0dG9uIGtleT1cImxvbmdlclB1enpsZVwiIGNsYXNzTmFtZT1cIm1vcnBob1B1enpsZVNpemVLZXlcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXROZXh0TnVtQ29scyhuZXh0TnVtQ29scyArIDEpO1xyXG4gICAgICAgICAgICB9IH0+KzwvYnV0dG9uPn1cclxuICAgICAgICAgICAge25leHROdW1Db2xzID4gMyAmJiA8YnV0dG9uIGtleT1cInNob3J0ZXJQdXp6bGVcIiBjbGFzc05hbWU9XCJtb3JwaG9QdXp6bGVTaXplS2V5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TmV4dE51bUNvbHMobmV4dE51bUNvbHMgLSAxKTtcclxuICAgICAgICAgICAgfSB9Pi08L2J1dHRvbj59XHJcbiAgICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgIDwvZGl2PjtcclxuXHJcbiAgICBjb25zdCByZW5kZXJUaGVQdXp6bGUgPSA8ZGl2IGtleT1cInNob3dib2FyZFwiIGNsYXNzTmFtZT17cHV6emxlU29sdmVkID8gYG1vcnBob1NvbHZlZERpdiBsJHtudW1Db2xzfWAgOiBcIm1vcnBob0RpdlwifT5cclxuICAgICAgICA8dGFibGUgb25LZXlEb3duPXsoZSkgPT4geyBoYW5kbGVLZXlEb3duKGUpOyB9IH0gdGFiSW5kZXg9ey0xfT48dGJvZHk+XHJcbiAgICAgICAgICAgIHtib2FyZC5tYXAoKGJvYXJkUm93LCByb3dJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17YEJvYXJkUm93LiR7cm93SW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2JvYXJkUm93LmNvbEFycmF5Lm1hcCgoY2VsbCwgY29sSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YEJvYXJkQ2VsbC4ke3Jvd0luZGV4fS4ke2NvbEluZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZVNlbGVjdGlvbihyb3dJbmRleCwgY29sSW5kZXgpOyB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbCBtb3JwaG9DZWxsICR7c2hvd1NvbHV0aW9uID8gY3NzUHJlc2V0TGV0dGVyIDogcHV6emxlU29sdmVkID8gY3NzQnV0dGVyZmx5IDogY2VsbC5jbGFzc05hbWUgKyAocm93SW5kZXggPT09IHNlbGVjdGVkLnJvdyAmJiBjb2xJbmRleCA9PT0gc2VsZWN0ZWQuY29sID8gY3NzU2VsZWN0ZWRDZWxsIDogXCJcIil9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1NvbHV0aW9uID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2BCb2FyZENlbGxTLiR7cm93SW5kZXh9LiR7Y29sSW5kZXh9YH0+e2NlbGwuc29sdXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2BCb2FyZENlbGxMLiR7cm93SW5kZXh9LiR7Y29sSW5kZXh9YH0+e2NlbGwubGV0dGVyfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PjwvdGFibGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICB7IWxvYWRpbmcgJiYgIWNoZWNraW5nICYmICFwdXp6bGVTb2x2ZWQgJiYgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5Ym9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJtb3JwaG9LZXlyb3cxXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5UVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignUScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlXXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdXJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+VzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUVcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0UnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5FPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5UlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignUicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlUXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdUJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+VDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVlcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1knKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5ZPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5VVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignVScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlJXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdJJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+STwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleU9cIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ08nKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5PPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5UFwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignUCcpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcnBob0tleXJvdzJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlBXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdBJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+QTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVNcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1MnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5TPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5RFwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignRCcpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlGXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdGJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+RjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUdcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0cnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5HPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5SFwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignSCcpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkg8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlKXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdKJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+SjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUtcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0snKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5LPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5TFwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignTCcpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkw8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcnBob0tleXJvdzNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlaXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdaJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+WjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVhcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1gnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5YPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5Q1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignQycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlWXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdWJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+VjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUJcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0InKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5CPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5TlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignTicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPk48L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlNXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdNJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+TTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcnBob0tleXJvdzRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlDb3B5ZG93blwiIG9uQ2xpY2s9eygpID0+IHsgY29weURvd25MZXR0ZXIoKTsgfSB9IGNsYXNzTmFtZT1cIm1vcnBob0NvcHlkb3duS2V5XCI+Q09QWSBET1dOPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5Q29weXVwXCIgb25DbGljaz17KCkgPT4geyBjb3B5VXBMZXR0ZXIoKTsgfSB9IGNsYXNzTmFtZT1cIm1vcnBob0NvcHl1cEtleVwiPkNPUFkgVVA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7IXB1enpsZVNvbHZlZCAmJiBmaWxsZWRpbiAmJiA8ZGl2IGNsYXNzTmFtZT1cIm1vcnBob0tleXJvdzRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgY2hlY2tTb2x1dGlvbigpOyB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVUJNSVQgWU9VUiBTT0xVVElPTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwPkNoYW5nZSBvbmUgbGV0dGVyIGF0IGEgdGltZSB0byBnZXQgZnJvbSB7Zmlyc3RXb3JkfSB0byB7bGFzdFdvcmR9LlxyXG4gICAgICAgICAgICAgICAgICAgIEVhY2ggaW50ZXJpbSB3b3JkIG11c3QgYmUgYSB2YWxpZCB3b3JkLjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkNPUFkgRE9XTiBjb3BpZXMgYSBsZXR0ZXIgZG93biBmcm9tIHRoZSByb3cgYWJvdmUuXHJcbiAgICAgICAgICAgICAgICAgICAgQ09QWSBVUCBjb3BpZXMgYSBsZXR0ZXIgdXAgZnJvbSB0aGUgYm90dG9tIHJvdy48L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5DbGljayBhIGxldHRlciBvbiB0aGUgYm90dG9tIHJvdyB0byB1c2UgaXQgYXMgdGhlIHN3YXAgb24gdGhlIHNlbGVjdGVkIHJvdy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAge3B1enpsZVNvbHZlZCA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+U3VjY2VzcyE8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9tcHRGb3JQdXp6bGVHZW5lcmF0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4geyB0b2dnbGVTaG93U29sdXRpb24oKTsgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgJHtzaG93U29sdXRpb24gPyAnSElERSBTT0xVVElPTicgOiAnU0hPVyBBIFNPTFVUSU9OJ31gfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBNb3JwaG9cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3N0YXJ0aW5nID9cclxuICAgICAgICAgICAgICAgIHByb21wdEZvclB1enpsZUdlbmVyYXRpb25cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICBsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwicGxlYXNld2FpdFwiIGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5DcmVhdGluZyBwdXp6bGUsIHBsZWFzZSBiZSBwYXRpZW50Li4uPC9kaXY+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIHJlbmRlclRoZVB1enpsZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vcnBobzsiXSwic291cmNlUm9vdCI6IiJ9