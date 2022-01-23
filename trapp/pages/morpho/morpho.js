import { useState, useEffect } from 'react';
import { countSwaps, isWordValid } from '../../lib/wordfunctions';

const Morpho = ({setWhereto}) => {
    const numRows = 6;
    const numCols = 5;
    const baseurl = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000' : 'https://tilerunner.herokuapp.com';
    const cssPresetLetter = "morphoCellStatic";
    const cssNoLetter = "morphoCellNoLetter";
    const cssSelectedCell = " morphoCellSelected";
    const cssLarva = "morphoCellLarva";
    const cssCocoon = "morphoCellCocoon";
    const cssButterfly = "morphoCellButterfly";
    const [loading, setLoading] = useState(true);
    const [checking, setChecking] = useState(false); // Set when checking solution to prevent further alterations
    const [filledin, setFilledin] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
    const [puzzleSolved, setPuzzleSolved] = useState(false);
    const [firstWord, setFirstWord] = useState('');
    const [lastWord, setLastWord] = useState('');
    const [board, setBoard] = useState([]);
    const [selected, setSelected] = useState({row:1, col:0}); // Natural place to start entering letters
    useEffect(() => {
        setInitialBoard();
    },[]);
    const setInitialBoard = async() => { // Initial board of given size
        setLoading(true);
        setChecking(false);
        setShowSolution(false);
        setFilledin(false);
        setPuzzleSolved(false);
        let rowArray = [];
        let url = `${baseurl}/ENABLE2K?morpho=true&len=${numCols}`;
        const response = await fetch(url);
        const data = await response.json();
        if (!data.notes || data.notes.length === 0) { // Ok result
            for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
                const rowWord = data.puzzle[rowIndex].toUpperCase();
                if (rowIndex === 0) {
                    setFirstWord(rowWord);
                } else if (rowIndex === numRows - 1) {
                    setLastWord(rowWord);
                }
                const rowLetters = [...Array.from(rowWord)];
                let rowFilledIn = rowIndex === 0 || rowIndex === numRows - 1;
                let colArray = [];
                for (let colIndex = 0; colIndex < numCols; colIndex++) {
                    let cell = {letter:'?',solution:rowLetters[colIndex],className:'?'};
                    if (rowIndex === 0 || rowIndex === numRows - 1) {
                        cell.letter = rowLetters[colIndex];
                        cell.className = cssPresetLetter;
                    } else {
                        cell.letter = '?';
                        cell.className = cssNoLetter;
                    }
                    colArray.push(cell);
                }
                rowArray.push({filledin:rowFilledIn, colArray:colArray});
            }
        }
        setBoard(rowArray);
        setSelected({row:1,col:0});
        setLoading(false);
    }

    const handleSelection = (rowIndex, colIndex) => {
        if (colIndex < 0 || colIndex >= numCols) {
            return;
        }
        if (rowIndex === numRows - 1 && selected.row > 0 && selected.row < numRows - 1) {
            // If they click on a bottom row tile then copy it up and copy down the rest of the row
            let newBoard = JSON.parse(JSON.stringify(board));
            for (let ci = 0; ci < numCols; ci++) {
                if (ci === colIndex) {
                    // This is the column they clicked on
                    newBoard[selected.row].colArray[ci].letter = newBoard[numRows-1].colArray[ci].letter;
                } else {
                    newBoard[selected.row].colArray[ci].letter = newBoard[selected.row - 1].colArray[ci].letter;
                }
                newBoard[selected.row].colArray[ci].className = cssCocoon;               
            }
            newBoard[selected.row].filledin = true;
            let newSelected = {row:selected.row+1,col:0};
            setSelected(newSelected);
            setBoard(newBoard);
            if (newBoard.filter(r => {return !r.filledin;}).length === 0) {
                // All letters are filled in
                setFilledin(true);
            }
                return;
        }
        if (rowIndex < 1 || rowIndex >= numRows - 1) {
            return;
        }
        setSelected({row:rowIndex,col:colIndex});
    }

    const handleKeyDown = (event) => {
        if (event.key === "F12") {return;}
        event.preventDefault();
        if (checking) {
            return; // No modes while checking solution
        }
        if (puzzleSolved) {
            return; // Puzzle already solved
        }
        handleInputLetter(event.key);
    }

    const copyDownLetter = () => {
        let rowIndex = selected.row;
        let colIndex = selected.col;
        if (rowIndex < 1 || rowIndex >= numRows - 1) {
            return;
        }
        if (colIndex < 0 || rowIndex >= numCols) {
            return;
        }
        handleInputLetter(board[rowIndex-1].colArray[colIndex].letter);
    }
    
    const copyUpLetter = () => {
        let rowIndex = selected.row;
        let colIndex = selected.col;
        if (rowIndex < 1 || rowIndex >= numRows - 1) {
            return;
        }
        if (colIndex < 0 || rowIndex >= numCols) {
            return;
        }
        handleInputLetter(board[numRows-1].colArray[colIndex].letter);
    }
    
    const handleInputLetter = (letter) => {
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
        rowArray[rowIndex].filledin = (rowArray[rowIndex].colArray.filter((cell) => {return cell.letter === "?";}).length === 0);
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
        if (rowArray.filter(r => {return !r.filledin;}).length === 0) {
            // All letters are filled in
            setFilledin(true);
        }
        setBoard(rowArray);
    }

    const moveUp = () => {
        let rowIndex = selected.row;
        let colIndex = selected.col;
        let newSelected = {row:rowIndex,col:colIndex};
        if (rowIndex - 1 > 0) {
            newSelected.row = rowIndex - 1;
            newSelected.col = colIndex;
        } else {
            newSelected.row = numRows - 2;
            newSelected.col = colIndex - 1 > -1 ? colIndex - 1 : numCols - 1;
        }
        setSelected(newSelected);
    }

    const moveDown = () => {
        let rowIndex = selected.row;
        let colIndex = selected.col;
        let newSelected = {row:rowIndex,col:colIndex};
        if (rowIndex + 1 < numRows - 1) {
            newSelected.row = rowIndex + 1;
            newSelected.col = colIndex;
        } else {
            newSelected.row = 1;
            newSelected.col = colIndex + 1 < numCols ? colIndex + 1 : 0;
        }
        setSelected(newSelected);
    }

    const moveRight = () => {
        let rowIndex = selected.row;
        let colIndex = selected.col;
        let newSelected = {row:1,col:0};
        if (colIndex + 1 < numCols) {
            newSelected.row = rowIndex;
            newSelected.col = colIndex + 1;
        } else if (rowIndex + 1 < numRows - 1) {
            newSelected.row = rowIndex + 1;
            newSelected.col = 0;
        }
        setSelected(newSelected);
    }

    const moveLeft = () => {
        let rowIndex = selected.row;
        let colIndex = selected.col;
        let newSelected = {row:numRows-2,col:numCols-1};
        if (colIndex - 1 > -1) {
            newSelected.row = rowIndex;
            newSelected.col = colIndex - 1;
        } else if (rowIndex - 1 > 0) {
            newSelected.row = rowIndex - 1;
            newSelected.col = numCols - 1;
        }
        setSelected(newSelected);
    }

    const toggleShowSolution = () => {
        setShowSolution(!showSolution);
    }

    const checkSolution = async() => {
        setChecking(true);
        let result = true;
        for(let rowIndex = 1; result && rowIndex < numRows; rowIndex++) {
            let prevWord = "";
            let currWord = "";
            for (let colIndex = 0; colIndex < numCols; colIndex++) {
                prevWord = prevWord + board[rowIndex-1].colArray[colIndex].letter;
                currWord = currWord + board[rowIndex].colArray[colIndex].letter;
            }
            if (countSwaps(prevWord, currWord) !== 1) {
                alert(`${prevWord} to ${currWord} is not a valid move`);
                result = false;
            }
            if (result && rowIndex !== numRows -1 && ! await isWordValid(currWord)) {
                alert(`${currWord} is not valid`);
                result = false;
            }
        }
        setChecking(false);
        setPuzzleSolved(result);
    }

    return (
        <div className="trBackground" onKeyDown={(e) => {handleKeyDown(e);}} tabIndex={-1}>
            <div className="trTitle">
                Morpho
                <button className="trButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
            </div>
            {loading && <div className="trEmphasis">Creating puzzle, please be patient...</div>}
            {!loading && <div className={puzzleSolved ? "morphoSolvedDiv" : "morphoDiv"}>
                <table><tbody>
                {board.map((boardRow, rowIndex) => (
                    <tr key={`BoardRow.${rowIndex}`}>
                        {boardRow.colArray.map((cell, colIndex) => (
                            <td key={`BoardCell.${rowIndex}.${colIndex}`}
                            onClick={() => {handleSelection(rowIndex,colIndex);}}
                            className={`col morphoCell ${showSolution ? cssPresetLetter : puzzleSolved ? cssButterfly : cell.className + (rowIndex === selected.row && colIndex === selected.col ? cssSelectedCell : "")}`}>
                                {showSolution ?
                                    <span>{cell.solution}</span>
                                :
                                    <span>{cell.letter}</span>
                                }
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody></table>
                <div className="trParagraph">
                    {!loading && !checking && !puzzleSolved && <div>
                        <div className="morphoKeyboard">
                            {/* <div className="morphoKeyrow1">
                                <button key="keyQ" onClick={() => {handleInputLetter('Q');}} className="morphoKey">Q</button>
                                <button key="keyW" onClick={() => {handleInputLetter('W');}} className="morphoKey">W</button>
                                <button key="keyE" onClick={() => {handleInputLetter('E');}} className="morphoKey">E</button>
                                <button key="keyR" onClick={() => {handleInputLetter('R');}} className="morphoKey">R</button>
                                <button key="keyT" onClick={() => {handleInputLetter('T');}} className="morphoKey">T</button>
                                <button key="keyY" onClick={() => {handleInputLetter('Y');}} className="morphoKey">Y</button>
                                <button key="keyU" onClick={() => {handleInputLetter('U');}} className="morphoKey">U</button>
                                <button key="keyI" onClick={() => {handleInputLetter('I');}} className="morphoKey">I</button>
                                <button key="keyO" onClick={() => {handleInputLetter('O');}} className="morphoKey">O</button>
                                <button key="keyP" onClick={() => {handleInputLetter('P');}} className="morphoKey">P</button>
                            </div>
                            <div className="morphoKeyrow2">
                                <button key="keyA" onClick={() => {handleInputLetter('A');}} className="morphoKey">A</button>
                                <button key="keyS" onClick={() => {handleInputLetter('S');}} className="morphoKey">S</button>
                                <button key="keyD" onClick={() => {handleInputLetter('D');}} className="morphoKey">D</button>
                                <button key="keyF" onClick={() => {handleInputLetter('F');}} className="morphoKey">F</button>
                                <button key="keyG" onClick={() => {handleInputLetter('G');}} className="morphoKey">G</button>
                                <button key="keyH" onClick={() => {handleInputLetter('H');}} className="morphoKey">H</button>
                                <button key="keyJ" onClick={() => {handleInputLetter('J');}} className="morphoKey">J</button>
                                <button key="keyK" onClick={() => {handleInputLetter('K');}} className="morphoKey">K</button>
                                <button key="keyL" onClick={() => {handleInputLetter('L');}} className="morphoKey">L</button>
                            </div>
                            <div className="morphoKeyrow3">
                                <button key="keyZ" onClick={() => {handleInputLetter('Z');}} className="morphoKey">Z</button>
                                <button key="keyX" onClick={() => {handleInputLetter('X');}} className="morphoKey">X</button>
                                <button key="keyC" onClick={() => {handleInputLetter('C');}} className="morphoKey">C</button>
                                <button key="keyV" onClick={() => {handleInputLetter('V');}} className="morphoKey">V</button>
                                <button key="keyB" onClick={() => {handleInputLetter('B');}} className="morphoKey">B</button>
                                <button key="keyN" onClick={() => {handleInputLetter('N');}} className="morphoKey">N</button>
                                <button key="keyM" onClick={() => {handleInputLetter('M');}} className="morphoKey">M</button>
                            </div> */}
                            <div className="morphoKeyrow4">
                                <button key="keyCopydown" onClick={() => {copyDownLetter();}} className="morphoCopydownKey">COPY DOWN</button>
                                <button key="keyCopyup" onClick={() => {copyUpLetter();}} className="morphoCopyupKey">COPY UP</button>
                            </div>
                            {!puzzleSolved && filledin && <div className="morphoKeyrow4">
                                <button className="trButton" onClick={() => {checkSolution();}}>
                                    SUBMIT YOUR SOLUTION
                                </button>
                            </div>}
                        </div>
                        <p>Change one letter at a time to get from {firstWord} to {lastWord}.
                        Each interim word must be a valid word.</p>
                        <p>COPY DOWN copies a letter down from the row above.
                        COPY UP copies a letter up from the bottom row.</p>
                        <p>Click a letter on the bottom row to use it as the swap on the selected row.</p>
                    </div>}
                    {puzzleSolved ?
                        <div>
                            <h1 className="trEmphasis">Success!</h1>
                            <button className="trButton" onClick={() => {setInitialBoard();}}>
                                GENERATE ANOTHER PUZZLE
                            </button>
                        </div>
                    :
                        <button className="trButton" onClick={() => {toggleShowSolution();}}>
                            {`${showSolution ? 'HIDE SOLUTION' : 'SHOW A SOLUTION'}`}
                        </button>
                    }
                </div>
            </div>}
        </div>
    )
}

export default Morpho;