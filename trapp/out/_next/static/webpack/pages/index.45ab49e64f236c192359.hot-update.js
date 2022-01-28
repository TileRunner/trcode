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
    setStarting(false);
    setLoading(true);
    setChecking(false);
    setShowSolution(false);
    setFilledin(false);
    setPuzzleSolved(false);
    let rowArray = [];
    const data = await callForPuzzle(wordLength);

    if (!data.notes || data.notes.length === 0) {
      // Ok result
      let numberOfRows = data.numRows;
      let numberOfCols = data.numCols;

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

      setNumCols(numberOfCols);
      setNumRows(numberOfRows);
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
        lineNumber: 334,
        columnNumber: 13
      }, undefined), nextNumCols < 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "morphoPuzzleSizeKey",
        onClick: () => {
          setNextNumCols(nextNumCols + 1);
        },
        children: "+"
      }, "longerPuzzleMobile", false, {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 33
      }, undefined), nextNumCols > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "morphoPuzzleSizeKey",
        onClick: () => {
          setNextNumCols(nextNumCols - 1);
        },
        children: "-"
      }, "shorterPuzzleMobile", false, {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 33
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 333,
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
        lineNumber: 347,
        columnNumber: 13
      }, undefined), nextNumCols < 8 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "morphoPuzzleSizeKey",
        onClick: () => {
          setNextNumCols(nextNumCols + 1);
        },
        children: "+"
      }, "longerPuzzle", false, {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 33
      }, undefined), nextNumCols > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "morphoPuzzleSizeKey",
        onClick: () => {
          setNextNumCols(nextNumCols - 1);
        },
        children: "-"
      }, "shorterPuzzle", false, {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 33
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 332,
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
              lineNumber: 370,
              columnNumber: 33
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: cell.letter
            }, `BoardCellL.${rowIndex}.${colIndex}`, false, {
              fileName: _jsxFileName,
              lineNumber: 372,
              columnNumber: 33
            }, undefined)
          }, `BoardCell.${rowIndex}.${colIndex}`, false, {
            fileName: _jsxFileName,
            lineNumber: 366,
            columnNumber: 25
          }, undefined))
        }, `BoardRow.${rowIndex}`, false, {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 17
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 72
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 362,
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
              lineNumber: 414,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                copyUpLetter();
              },
              className: "morphoCopyupKey",
              children: "COPY UP"
            }, "keyCopyup", false, {
              fileName: _jsxFileName,
              lineNumber: 415,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 413,
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
              lineNumber: 418,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 417,
            columnNumber: 51
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Change one letter at a time to get from ", firstWord, " to ", lastWord, ". Each interim word must be a valid word."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "COPY DOWN copies a letter down from the row above. COPY UP copies a letter up from the bottom row."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Click a letter on the bottom row to use it as the swap on the selected row."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 56
      }, undefined), puzzleSolved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "trEmphasis",
          children: "Success!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 21
        }, undefined), promptForPuzzleGeneration]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 17
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          toggleShowSolution();
        },
        children: `${showSolution ? 'HIDE SOLUTION' : 'SHOW A SOLUTION'}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 9
    }, undefined)]
  }, "showboard", true, {
    fileName: _jsxFileName,
    lineNumber: 361,
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
          lineNumber: 446,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 13
    }, undefined), starting ? promptForPuzzleGeneration : loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trEmphasis",
      children: "Creating puzzle, please be patient..."
    }, "pleasewait", false, {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 17
    }, undefined) : renderThePuzzle]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 442,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9ycGhvL21vcnBoby5qcyJdLCJuYW1lcyI6WyJNb3JwaG8iLCJzZXRXaGVyZXRvIiwic3RhcnRpbmciLCJzZXRTdGFydGluZyIsInVzZVN0YXRlIiwibnVtUm93cyIsInNldE51bVJvd3MiLCJudW1Db2xzIiwic2V0TnVtQ29scyIsIm5leHROdW1Db2xzIiwic2V0TmV4dE51bUNvbHMiLCJiYXNldXJsIiwiY3NzUHJlc2V0TGV0dGVyIiwiY3NzTm9MZXR0ZXIiLCJjc3NTZWxlY3RlZENlbGwiLCJjc3NMYXJ2YSIsImNzc0NvY29vbiIsImNzc0J1dHRlcmZseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY2hlY2tpbmciLCJzZXRDaGVja2luZyIsImZpbGxlZGluIiwic2V0RmlsbGVkaW4iLCJzaG93U29sdXRpb24iLCJzZXRTaG93U29sdXRpb24iLCJwdXp6bGVTb2x2ZWQiLCJzZXRQdXp6bGVTb2x2ZWQiLCJmaXJzdFdvcmQiLCJzZXRGaXJzdFdvcmQiLCJsYXN0V29yZCIsInNldExhc3RXb3JkIiwiYm9hcmQiLCJzZXRCb2FyZCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJyb3ciLCJjb2wiLCJjYWxsRm9yUHV6emxlIiwid29yZExlbmd0aCIsImRhdGEiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImVycm9yIiwibm90ZXMiLCJjb25zb2xlIiwibG9nIiwic2V0SW5pdGlhbEJvYXJkIiwicm93QXJyYXkiLCJsZW5ndGgiLCJudW1iZXJPZlJvd3MiLCJudW1iZXJPZkNvbHMiLCJyb3dJbmRleCIsInJvd1dvcmQiLCJwdXp6bGUiLCJ0b1VwcGVyQ2FzZSIsInJvd0xldHRlcnMiLCJBcnJheSIsImZyb20iLCJyb3dGaWxsZWRJbiIsImNvbEFycmF5IiwiY29sSW5kZXgiLCJjZWxsIiwibGV0dGVyIiwic29sdXRpb24iLCJjbGFzc05hbWUiLCJwdXNoIiwiYWxlcnQiLCJoYW5kbGVTZWxlY3Rpb24iLCJuZXdCb2FyZCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImNpIiwibmV3U2VsZWN0ZWQiLCJmaWx0ZXIiLCJyIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVJbnB1dExldHRlciIsImNvcHlEb3duTGV0dGVyIiwiY29weVVwTGV0dGVyIiwiY2hlY2tTb2x1dGlvbiIsImxldHRlcnRlc3QiLCJtb3ZlRGlyZWN0aW9uIiwibWF0Y2giLCJtb3ZlVXAiLCJtb3ZlRG93biIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwidG9nZ2xlU2hvd1NvbHV0aW9uIiwicmVzdWx0IiwicHJldldvcmQiLCJjdXJyV29yZCIsImNvdW50U3dhcHMiLCJpc1dvcmRWYWxpZCIsInByb21wdEZvclB1enpsZUdlbmVyYXRpb24iLCJyZW5kZXJUaGVQdXp6bGUiLCJlIiwibWFwIiwiYm9hcmRSb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQzdCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEsQ0FBQyxJQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRiwrQ0FBUSxDQUFDLENBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JKLCtDQUFRLENBQUMsQ0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDSyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ04sK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQ0EsUUFBTU8sT0FBTyxHQUFJLEtBQUQsR0FBb0UsdUJBQXBFLEdBQThGLENBQTlHO0FBQ0EsUUFBTUMsZUFBZSxHQUFHLGtCQUF4QjtBQUNBLFFBQU1DLFdBQVcs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ZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NWFiNDllNjRmMjM2YzE5MjM1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJyb3dzZXJWaWV3LCBNb2JpbGVPbmx5VmlldyB9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnO1xyXG5pbXBvcnQgeyBjb3VudFN3YXBzLCBpc1dvcmRWYWxpZCB9IGZyb20gJy4uLy4uL2xpYi93b3JkZnVuY3Rpb25zJztcclxuXHJcbmNvbnN0IE1vcnBobyA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IFtzdGFydGluZywgc2V0U3RhcnRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbbnVtUm93cywgc2V0TnVtUm93c10gPSB1c2VTdGF0ZSg2KTtcclxuICAgIGNvbnN0IFtudW1Db2xzLCBzZXROdW1Db2xzXSA9IHVzZVN0YXRlKDUpO1xyXG4gICAgY29uc3QgW25leHROdW1Db2xzLCBzZXROZXh0TnVtQ29sc10gPSB1c2VTdGF0ZSg1KTtcclxuICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJztcclxuICAgIGNvbnN0IGNzc1ByZXNldExldHRlciA9IFwibW9ycGhvQ2VsbFN0YXRpY1wiO1xyXG4gICAgY29uc3QgY3NzTm9MZXR0ZXIgPSBcIm1vcnBob0NlbGxOb0xldHRlclwiO1xyXG4gICAgY29uc3QgY3NzU2VsZWN0ZWRDZWxsID0gXCIgbW9ycGhvQ2VsbFNlbGVjdGVkXCI7XHJcbiAgICBjb25zdCBjc3NMYXJ2YSA9IFwibW9ycGhvQ2VsbExhcnZhXCI7XHJcbiAgICBjb25zdCBjc3NDb2Nvb24gPSBcIm1vcnBob0NlbGxDb2Nvb25cIjtcclxuICAgIGNvbnN0IGNzc0J1dHRlcmZseSA9IFwibW9ycGhvQ2VsbEJ1dHRlcmZseVwiO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbY2hlY2tpbmcsIHNldENoZWNraW5nXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gU2V0IHdoZW4gY2hlY2tpbmcgc29sdXRpb24gdG8gcHJldmVudCBmdXJ0aGVyIGFsdGVyYXRpb25zXHJcbiAgICBjb25zdCBbZmlsbGVkaW4sIHNldEZpbGxlZGluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93U29sdXRpb24sIHNldFNob3dTb2x1dGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHV6emxlU29sdmVkLCBzZXRQdXp6bGVTb2x2ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2ZpcnN0V29yZCwgc2V0Rmlyc3RXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsYXN0V29yZCwgc2V0TGFzdFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2JvYXJkLCBzZXRCb2FyZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKHtyb3c6MSwgY29sOjB9KTsgLy8gTmF0dXJhbCBwbGFjZSB0byBzdGFydCBlbnRlcmluZyBsZXR0ZXJzXHJcblxyXG4gICAgY29uc3QgY2FsbEZvclB1enpsZSA9IGFzeW5jKHdvcmRMZW5ndGgpID0+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz9tb3JwaG89dHJ1ZSZsZW49JHt3b3JkTGVuZ3RofWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgZGF0YS5ub3RlcyA9IFwiUHJvYmxlbSB3aXRoIHRoZSBzZXJ2ZXIuIFNvcnJ5IGFib3V0IHRoYXQuXCI7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXRJbml0aWFsQm9hcmQgPSBhc3luYyh3b3JkTGVuZ3RoKSA9PiB7IC8vIEluaXRpYWwgYm9hcmQgb2YgZ2l2ZW4gc2l6ZVxyXG4gICAgICAgIHNldFN0YXJ0aW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldENoZWNraW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRTaG93U29sdXRpb24oZmFsc2UpO1xyXG4gICAgICAgIHNldEZpbGxlZGluKGZhbHNlKTtcclxuICAgICAgICBzZXRQdXp6bGVTb2x2ZWQoZmFsc2UpO1xyXG4gICAgICAgIGxldCByb3dBcnJheSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjYWxsRm9yUHV6emxlKHdvcmRMZW5ndGgpO1xyXG4gICAgICAgIGlmICghZGF0YS5ub3RlcyB8fCBkYXRhLm5vdGVzLmxlbmd0aCA9PT0gMCkgeyAvLyBPayByZXN1bHRcclxuICAgICAgICAgICAgbGV0IG51bWJlck9mUm93cyA9IGRhdGEubnVtUm93cztcclxuICAgICAgICAgICAgbGV0IG51bWJlck9mQ29scyA9IGRhdGEubnVtQ29scztcclxuICAgICAgICAgICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IG51bWJlck9mUm93czsgcm93SW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93V29yZCA9IGRhdGEucHV6emxlW3Jvd0luZGV4XS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Rmlyc3RXb3JkKHJvd1dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3dJbmRleCA9PT0gbnVtYmVyT2ZSb3dzIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3RXb3JkKHJvd1dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93TGV0dGVycyA9IFsuLi5BcnJheS5mcm9tKHJvd1dvcmQpXTtcclxuICAgICAgICAgICAgICAgIGxldCByb3dGaWxsZWRJbiA9IHJvd0luZGV4ID09PSAwIHx8IHJvd0luZGV4ID09PSBudW1iZXJPZlJvd3MgLSAxO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbEFycmF5ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgbnVtYmVyT2ZDb2xzOyBjb2xJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSB7bGV0dGVyOic/Jyxzb2x1dGlvbjpyb3dMZXR0ZXJzW2NvbEluZGV4XSxjbGFzc05hbWU6Jz8nfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm93SW5kZXggPT09IDAgfHwgcm93SW5kZXggPT09IG51bWJlck9mUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5sZXR0ZXIgPSByb3dMZXR0ZXJzW2NvbEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBjc3NQcmVzZXRMZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5sZXR0ZXIgPSAnPyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gY3NzTm9MZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbEFycmF5LnB1c2goY2VsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheS5wdXNoKHtmaWxsZWRpbjpyb3dGaWxsZWRJbiwgY29sQXJyYXk6Y29sQXJyYXl9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXROdW1Db2xzKG51bWJlck9mQ29scyk7XHJcbiAgICAgICAgICAgIHNldE51bVJvd3MobnVtYmVyT2ZSb3dzKTtcclxuICAgICAgICAgICAgc2V0Qm9hcmQocm93QXJyYXkpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZCh7cm93OjEsY29sOjB9KTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoYFByb2JsZW0gZ2VuZXJhdGluZyBwdXp6bGU6ICR7ZGF0YS5ub3Rlc31cXG5CZXN0IHRvIGNsaWNrIEhvbWUgdGhlbiByZWNob29zZSBNb3JwaG8uYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdGlvbiA9IChyb3dJbmRleCwgY29sSW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoY2hlY2tpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBObyBtb2RlcyB3aGlsZSBjaGVja2luZyBzb2x1dGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHV6emxlU29sdmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gUHV6emxlIGFscmVhZHkgc29sdmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2xJbmRleCA8IDAgfHwgY29sSW5kZXggPj0gbnVtQ29scykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3dJbmRleCA9PT0gbnVtUm93cyAtIDEgJiYgc2VsZWN0ZWQucm93ID4gMCAmJiBzZWxlY3RlZC5yb3cgPCBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICAvLyBJZiB0aGV5IGNsaWNrIG9uIGEgYm90dG9tIHJvdyB0aWxlIHRoZW4gY29weSBpdCB1cCBhbmQgY29weSBkb3duIHRoZSByZXN0IG9mIHRoZSByb3dcclxuICAgICAgICAgICAgbGV0IG5ld0JvYXJkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShib2FyZCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjaSA9IDA7IGNpIDwgbnVtQ29sczsgY2krKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNpID09PSBjb2xJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIGNvbHVtbiB0aGV5IGNsaWNrZWQgb25cclxuICAgICAgICAgICAgICAgICAgICBuZXdCb2FyZFtzZWxlY3RlZC5yb3ddLmNvbEFycmF5W2NpXS5sZXR0ZXIgPSBuZXdCb2FyZFtudW1Sb3dzLTFdLmNvbEFycmF5W2NpXS5sZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0JvYXJkW3NlbGVjdGVkLnJvd10uY29sQXJyYXlbY2ldLmxldHRlciA9IG5ld0JvYXJkW3NlbGVjdGVkLnJvdyAtIDFdLmNvbEFycmF5W2NpXS5sZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXdCb2FyZFtzZWxlY3RlZC5yb3ddLmNvbEFycmF5W2NpXS5jbGFzc05hbWUgPSBjc3NDb2Nvb247ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3Qm9hcmRbc2VsZWN0ZWQucm93XS5maWxsZWRpbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6IHNlbGVjdGVkLnJvdyArIDEsIGNvbDogMH07XHJcbiAgICAgICAgICAgIGlmIChuZXdTZWxlY3RlZC5yb3cgPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBzZXRCb2FyZChuZXdCb2FyZCk7XHJcbiAgICAgICAgICAgIGlmIChuZXdCb2FyZC5maWx0ZXIociA9PiB7cmV0dXJuICFyLmZpbGxlZGluO30pLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQWxsIGxldHRlcnMgYXJlIGZpbGxlZCBpblxyXG4gICAgICAgICAgICAgICAgc2V0RmlsbGVkaW4odHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvd0luZGV4IDwgMSB8fCByb3dJbmRleCA+PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKHtyb3c6cm93SW5kZXgsY29sOmNvbEluZGV4fSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRjEyXCIpIHtyZXR1cm47fVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKGNoZWNraW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gTm8gbW9kZXMgd2hpbGUgY2hlY2tpbmcgc29sdXRpb25cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHB1enpsZVNvbHZlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIFB1enpsZSBhbHJlYWR5IHNvbHZlZFxyXG4gICAgICAgIH1cclxuICAgICAgICBoYW5kbGVJbnB1dExldHRlcihldmVudC5rZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvcHlEb3duTGV0dGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGVja2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIE5vIG1vZGVzIHdoaWxlIGNoZWNraW5nIHNvbHV0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwdXp6bGVTb2x2ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBQdXp6bGUgYWxyZWFkeSBzb2x2ZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBpZiAocm93SW5kZXggPCAxIHx8IHJvd0luZGV4ID49IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IDwgMCB8fCByb3dJbmRleCA+PSBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlSW5wdXRMZXR0ZXIoYm9hcmRbcm93SW5kZXgtMV0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGNvcHlVcExldHRlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY2hlY2tpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBObyBtb2RlcyB3aGlsZSBjaGVja2luZyBzb2x1dGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHV6emxlU29sdmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gUHV6emxlIGFscmVhZHkgc29sdmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgaWYgKHJvd0luZGV4IDwgMSB8fCByb3dJbmRleCA+PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2xJbmRleCA8IDAgfHwgcm93SW5kZXggPj0gbnVtQ29scykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZUlucHV0TGV0dGVyKGJvYXJkW251bVJvd3MtMV0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUlucHV0TGV0dGVyID0gKGxldHRlcikgPT4ge1xyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgaWYgKHJvd0luZGV4IDwgMSB8fCByb3dJbmRleCA+PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2xJbmRleCA8IDAgfHwgcm93SW5kZXggPj0gbnVtQ29scykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWxsZWRpbiAmJiBsZXR0ZXIgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBjaGVja1NvbHV0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxldHRlcnRlc3QgPSAvXltBLVphLXpcXD9dJC87IC8vIHNpbmdsZSBsZXR0ZXIgb3IgcXVlc3Rpb24gbWFyayBrZXkgcHJlc3NlZFxyXG4gICAgICAgIGxldCBtb3ZlRGlyZWN0aW9uID0gXCJyXCI7IC8vIERlZmF1bHRcclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkJhY2tzcGFjZVwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IFwiP1wiO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiRGVsZXRlXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gXCI/XCI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkFycm93VXBcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwidVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkFycm93RG93blwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQXJyb3dMZWZ0XCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcImxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcInJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlci5tYXRjaChsZXR0ZXJ0ZXN0KSkge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBsZXR0ZXIudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcm93QXJyYXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGJvYXJkKSk7XHJcbiAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXIgPSBsZXR0ZXI7XHJcbiAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmZpbGxlZGluID0gKHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheS5maWx0ZXIoKGNlbGwpID0+IHtyZXR1cm4gY2VsbC5sZXR0ZXIgPT09IFwiP1wiO30pLmxlbmd0aCA9PT0gMCk7XHJcbiAgICAgICAgZm9yIChsZXQgY2kgPSAwOyBjaSA8IG51bUNvbHM7IGNpKyspIHtcclxuICAgICAgICAgICAgaWYgKHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjaV0ubGV0dGVyID09PSBcIj9cIikge1xyXG4gICAgICAgICAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NpXS5jbGFzc05hbWUgPSBjc3NOb0xldHRlcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjaV0uY2xhc3NOYW1lID0gcm93QXJyYXlbcm93SW5kZXhdLmZpbGxlZGluID8gY3NzQ29jb29uIDogY3NzTGFydmE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb24gPT09IFwidVwiKSB7XHJcbiAgICAgICAgICAgIG1vdmVVcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gXCJkXCIpIHtcclxuICAgICAgICAgICAgbW92ZURvd24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb24gPT09IFwiclwiKSB7XHJcbiAgICAgICAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gXCJsXCIpIHtcclxuICAgICAgICAgICAgbW92ZUxlZnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvd0FycmF5LmZpbHRlcihyID0+IHtyZXR1cm4gIXIuZmlsbGVkaW47fSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIEFsbCBsZXR0ZXJzIGFyZSBmaWxsZWQgaW5cclxuICAgICAgICAgICAgc2V0RmlsbGVkaW4odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEJvYXJkKHJvd0FycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlVXAgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93OnJvd0luZGV4LGNvbDpjb2xJbmRleH07XHJcbiAgICAgICAgaWYgKHJvd0luZGV4IC0gMSA+IDApIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXggLSAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSBudW1Sb3dzIC0gMjtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggLSAxID4gLTEgPyBjb2xJbmRleCAtIDEgOiBudW1Db2xzIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdmVEb3duID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3Jvdzpyb3dJbmRleCxjb2w6Y29sSW5kZXh9O1xyXG4gICAgICAgIGlmIChyb3dJbmRleCArIDEgPCBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCArIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4ICsgMSA8IG51bUNvbHMgPyBjb2xJbmRleCArIDEgOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW92ZVJpZ2h0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3JvdzoxLGNvbDowfTtcclxuICAgICAgICBpZiAoY29sSW5kZXggKyAxIDwgbnVtQ29scykge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleDtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggKyAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggKyAxIDwgbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW92ZUxlZnQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93Om51bVJvd3MtMixjb2w6bnVtQ29scy0xfTtcclxuICAgICAgICBpZiAoY29sSW5kZXggLSAxID4gLTEpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXg7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4IC0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJvd0luZGV4IC0gMSA+IDApIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXggLSAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBudW1Db2xzIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVNob3dTb2x1dGlvbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93U29sdXRpb24oIXNob3dTb2x1dGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hlY2tTb2x1dGlvbiA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIHNldENoZWNraW5nKHRydWUpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIGZvcihsZXQgcm93SW5kZXggPSAxOyByZXN1bHQgJiYgcm93SW5kZXggPCBudW1Sb3dzOyByb3dJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwcmV2V29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBjdXJyV29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBudW1Db2xzOyBjb2xJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2V29yZCA9IHByZXZXb3JkICsgYm9hcmRbcm93SW5kZXgtMV0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgICAgIGN1cnJXb3JkID0gY3VycldvcmQgKyBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY291bnRTd2FwcyhwcmV2V29yZCwgY3VycldvcmQpICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgJHtwcmV2V29yZH0gdG8gJHtjdXJyV29yZH0gaXMgbm90IGEgdmFsaWQgbW92ZWApO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByb3dJbmRleCAhPT0gbnVtUm93cyAtMSAmJiAhIGF3YWl0IGlzV29yZFZhbGlkKGN1cnJXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7Y3VycldvcmR9IGlzIG5vdCB2YWxpZGApO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldFB1enpsZVNvbHZlZChyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb21wdEZvclB1enpsZUdlbmVyYXRpb24gPSA8ZGl2PlxyXG4gICAgICAgIDxNb2JpbGVPbmx5Vmlldz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJnZW5Nb2JpbGVcIiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEluaXRpYWxCb2FyZChuZXh0TnVtQ29scyk7XHJcbiAgICAgICAgICAgIH0gfT5cclxuICAgICAgICAgICAgICAgIEdFTkVSQVRFIHtuZXh0TnVtQ29sc30gTEVUVEVSIFBVWlpMRVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge25leHROdW1Db2xzIDwgNSAmJiA8YnV0dG9uIGtleT1cImxvbmdlclB1enpsZU1vYmlsZVwiIGNsYXNzTmFtZT1cIm1vcnBob1B1enpsZVNpemVLZXlcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXROZXh0TnVtQ29scyhuZXh0TnVtQ29scyArIDEpO1xyXG4gICAgICAgICAgICB9IH0+KzwvYnV0dG9uPn1cclxuICAgICAgICAgICAge25leHROdW1Db2xzID4gMyAmJiA8YnV0dG9uIGtleT1cInNob3J0ZXJQdXp6bGVNb2JpbGVcIiBjbGFzc05hbWU9XCJtb3JwaG9QdXp6bGVTaXplS2V5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TmV4dE51bUNvbHMobmV4dE51bUNvbHMgLSAxKTtcclxuICAgICAgICAgICAgfSB9Pi08L2J1dHRvbj59XHJcbiAgICAgICAgPC9Nb2JpbGVPbmx5Vmlldz5cclxuICAgICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwiZ2VuQnJvd3NlclwiIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SW5pdGlhbEJvYXJkKG5leHROdW1Db2xzKTtcclxuICAgICAgICAgICAgfSB9PlxyXG4gICAgICAgICAgICAgICAgR0VORVJBVEUge25leHROdW1Db2xzfSBMRVRURVIgUFVaWkxFXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7bmV4dE51bUNvbHMgPCA4ICYmIDxidXR0b24ga2V5PVwibG9uZ2VyUHV6emxlXCIgY2xhc3NOYW1lPVwibW9ycGhvUHV6emxlU2l6ZUtleVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE5leHROdW1Db2xzKG5leHROdW1Db2xzICsgMSk7XHJcbiAgICAgICAgICAgIH0gfT4rPC9idXR0b24+fVxyXG4gICAgICAgICAgICB7bmV4dE51bUNvbHMgPiAzICYmIDxidXR0b24ga2V5PVwic2hvcnRlclB1enpsZVwiIGNsYXNzTmFtZT1cIm1vcnBob1B1enpsZVNpemVLZXlcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXROZXh0TnVtQ29scyhuZXh0TnVtQ29scyAtIDEpO1xyXG4gICAgICAgICAgICB9IH0+LTwvYnV0dG9uPn1cclxuICAgICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgPC9kaXY+O1xyXG5cclxuICAgIGNvbnN0IHJlbmRlclRoZVB1enpsZSA9IDxkaXYga2V5PVwic2hvd2JvYXJkXCIgY2xhc3NOYW1lPXtwdXp6bGVTb2x2ZWQgPyBgbW9ycGhvU29sdmVkRGl2IGwke251bUNvbHN9YCA6IFwibW9ycGhvRGl2XCJ9PlxyXG4gICAgICAgIDx0YWJsZSBvbktleURvd249eyhlKSA9PiB7IGhhbmRsZUtleURvd24oZSk7IH0gfSB0YWJJbmRleD17LTF9Pjx0Ym9keT5cclxuICAgICAgICAgICAge2JvYXJkLm1hcCgoYm9hcmRSb3csIHJvd0luZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtgQm9hcmRSb3cuJHtyb3dJbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICB7Ym9hcmRSb3cuY29sQXJyYXkubWFwKChjZWxsLCBjb2xJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgQm9hcmRDZWxsLiR7cm93SW5kZXh9LiR7Y29sSW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlU2VsZWN0aW9uKHJvd0luZGV4LCBjb2xJbmRleCk7IH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29sIG1vcnBob0NlbGwgJHtzaG93U29sdXRpb24gPyBjc3NQcmVzZXRMZXR0ZXIgOiBwdXp6bGVTb2x2ZWQgPyBjc3NCdXR0ZXJmbHkgOiBjZWxsLmNsYXNzTmFtZSArIChyb3dJbmRleCA9PT0gc2VsZWN0ZWQucm93ICYmIGNvbEluZGV4ID09PSBzZWxlY3RlZC5jb2wgPyBjc3NTZWxlY3RlZENlbGwgOiBcIlwiKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93U29sdXRpb24gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YEJvYXJkQ2VsbFMuJHtyb3dJbmRleH0uJHtjb2xJbmRleH1gfT57Y2VsbC5zb2x1dGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YEJvYXJkQ2VsbEwuJHtyb3dJbmRleH0uJHtjb2xJbmRleH1gfT57Y2VsbC5sZXR0ZXJ9PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+PC90YWJsZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgIHshbG9hZGluZyAmJiAhY2hlY2tpbmcgJiYgIXB1enpsZVNvbHZlZCAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JwaG9LZXlib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1vcnBob0tleXJvdzFcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlRXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdRJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+UTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVdcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1cnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5XPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5RVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignRScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlSXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdSJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+UjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVRcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1QnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5UPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5WVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignWScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlk8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlVXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdVJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+VTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUlcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0knKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5JPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5T1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignTycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPk88L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlQXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdQJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+UDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5cm93MlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUFcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0EnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5BPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5U1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignUycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlEXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdEJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+RDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUZcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0YnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5GPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5R1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignRycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkc8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlIXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdIJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+SDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUpcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0onKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5KPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5S1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignSycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPks8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlMXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdMJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+TDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5cm93M1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVpcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1onKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5aPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5WFwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignWCcpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlg8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlDXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdDJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+QzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVZcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1YnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5WPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5QlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignQicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlOXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdOJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+TjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleU1cIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ00nKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5NPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5cm93NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUNvcHlkb3duXCIgb25DbGljaz17KCkgPT4geyBjb3B5RG93bkxldHRlcigpOyB9IH0gY2xhc3NOYW1lPVwibW9ycGhvQ29weWRvd25LZXlcIj5DT1BZIERPV048L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlDb3B5dXBcIiBvbkNsaWNrPXsoKSA9PiB7IGNvcHlVcExldHRlcigpOyB9IH0gY2xhc3NOYW1lPVwibW9ycGhvQ29weXVwS2V5XCI+Q09QWSBVUDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHshcHV6emxlU29sdmVkICYmIGZpbGxlZGluICYmIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5cm93NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4geyBjaGVja1NvbHV0aW9uKCk7IH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNVQk1JVCBZT1VSIFNPTFVUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+Q2hhbmdlIG9uZSBsZXR0ZXIgYXQgYSB0aW1lIHRvIGdldCBmcm9tIHtmaXJzdFdvcmR9IHRvIHtsYXN0V29yZH0uXHJcbiAgICAgICAgICAgICAgICAgICAgRWFjaCBpbnRlcmltIHdvcmQgbXVzdCBiZSBhIHZhbGlkIHdvcmQuPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+Q09QWSBET1dOIGNvcGllcyBhIGxldHRlciBkb3duIGZyb20gdGhlIHJvdyBhYm92ZS5cclxuICAgICAgICAgICAgICAgICAgICBDT1BZIFVQIGNvcGllcyBhIGxldHRlciB1cCBmcm9tIHRoZSBib3R0b20gcm93LjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkNsaWNrIGEgbGV0dGVyIG9uIHRoZSBib3R0b20gcm93IHRvIHVzZSBpdCBhcyB0aGUgc3dhcCBvbiB0aGUgc2VsZWN0ZWQgcm93LjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICB7cHV6emxlU29sdmVkID9cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5TdWNjZXNzITwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb21wdEZvclB1enpsZUdlbmVyYXRpb259XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IHRvZ2dsZVNob3dTb2x1dGlvbigpOyB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Ake3Nob3dTb2x1dGlvbiA/ICdISURFIFNPTFVUSU9OJyA6ICdTSE9XIEEgU09MVVRJT04nfWB9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIE1vcnBob1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c3RhcnRpbmcgP1xyXG4gICAgICAgICAgICAgICAgcHJvbXB0Rm9yUHV6emxlR2VuZXJhdGlvblxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIGxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJwbGVhc2V3YWl0XCIgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPkNyZWF0aW5nIHB1enpsZSwgcGxlYXNlIGJlIHBhdGllbnQuLi48L2Rpdj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVGhlUHV6emxlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9ycGhvOyJdLCJzb3VyY2VSb290IjoiIn0=