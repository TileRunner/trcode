import { useState } from "react";
import { BrowserView, MobileOnlyView } from "react-device-detect";
import { countSwaps, areAnagrams, isDrop, isWordValid } from '../../lib/wordfunctions';

const Transmogrify = ({setWhereto}) => {
    const [numMoves, setNumMoves] = useState(2);
    const baseurl = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000' : 'https://tilerunner.herokuapp.com';
    const numMovesArray = [2,3,4,5,6,7,8,9];
    const [puzzle, setPuzzle] = useState({});
    const [nextWord, setNextWord] = useState('');
    const [words, setWords] = useState([]); // Users words
    const [solved, setSolved] = useState(false);
    const callForPuzzle = async() => {
        let data = {};
        try {
            let url = `${baseurl}/ENABLE2K?transmogrify=true&numMoves=${numMoves}`;
            const response = await fetch(url);
            data = await response.json();                
        } catch (error) {
            data.notes = ["Problem with the server. Sorry about that."];
            console.log(error);
        }
        setPuzzle(data);
        setWords([]);
        setNextWord('');
        setSolved(false);
    }
    const handleInputLetter = (letter) => {
        let sofar = nextWord + letter;
        setNextWord(sofar);
    }
    const handleDeleteLetter = () => {
        if (nextWord.length > 0) {
            let sofar = Array.from(nextWord);
            sofar.pop();
            let newsofar = sofar.join('');
            setNextWord(newsofar);
        }
    }
    const acceptNextWord = async(e) => {
        e.preventDefault();
        let prevWord = (words.length === 0 ? puzzle.startWord : words[words.length - 1]);
        let newWord = nextWord;
        if (validMove(newWord, prevWord)) {
            if (!await isWordValid(newWord)) {
                alert(`${newWord} is not a valid word`);
            } else {
                let lastWord = puzzle.targetWord;
                let newWords = [...words];
                newWords.push(newWord);
                setWords(newWords);
                setNextWord('');    
                if (validMove(newWord, lastWord)) {
                    setSolved(true);
                }
            }
        } else {
            alert('Only anagrams, drops, swaps and inserts allowed.');
        }
    }
    const validMove = (prevWord="", newWord="") => {
        prevWord = prevWord.trim().toLowerCase();
        newWord = newWord.trim().toLowerCase();
        if (prevWord === newWord) {
            return false;
        }
        return (areAnagrams(prevWord, newWord)
            || countSwaps(prevWord, newWord) === 1
            || isDrop(prevWord, newWord)
            || isDrop(newWord, prevWord)
        );
    }
    const GameStartSection = <div className="tm_numMovesDiv">
        <h3>Number Of Moves</h3>
        {numMovesArray.map((n) => (
            <button className={`tm_${n === numMoves ? 'numMovesSelected' : 'numMovesUnselected'}`}
                key={`chooseNumMoves${n}`}
                onClick={() => { setNumMoves(n); } }
            >{n}
            </button>
        ))}
        <div className="tm_startPuzzleDiv">
            <button key="startPuzzle" className="trButton" onClick={() => { callForPuzzle(); } }>
                Start Puzzle
            </button>
        </div>
    </div>;
    const PuzzleSection = <div className="tm_puzzleDiv">
        <span>{puzzle.startWord}</span>
        <span>to</span>
        <span>{puzzle.targetWord}</span>
        <br/>
        <span>Target:</span>
        <span>{puzzle.numMoves}</span>
        <span>moves</span>
    </div>;
    const SolutionSection = <div className="tm_solutionOuterDiv">
        <div className="tm_solutionDiv">
            <table>
                <tbody>
                    <tr><td>{puzzle.startWord}</td></tr>
                    {words.map((w,i) => (
                        <tr key={`userWord${i}`}><td>{w}</td></tr>
                    ))}
                    {!solved && <tr><td>...</td></tr>}
                    <tr><td>{puzzle.targetWord}</td></tr>
                </tbody>
            </table>
        </div>
        {solved ?
            <p className="tm_congrats">👏🏽 Solved in {words.length + 1} moves 👏🏽</p>
        :
            <div>
                <MobileOnlyView>
                    <div className="tm_Keyboard">
                        <div className="tm_Keyrow1">
                            <button key="keyZ" onClick={() => {handleInputLetter('Z');}} className="tm_Key">Z</button>
                            <button key="keyA" onClick={() => {handleInputLetter('A');}} className="tm_Key">A</button>
                            <button key="keyP" onClick={() => {handleInputLetter('P');}} className="tm_Key">P</button>
                            <button key="keyS" onClick={() => {handleInputLetter('S');}} className="tm_Key">S</button>
                            <button key="keyQ" onClick={() => {handleInputLetter('Q');}} className="tm_Key">Q</button>
                            <button key="keyI" onClick={() => {handleInputLetter('I');}} className="tm_Key">I</button>
                            <button key="keyG" onClick={() => {handleInputLetter('G');}} className="tm_Key">G</button>
                            <button key="keyY" onClick={() => {handleInputLetter('Y');}} className="tm_Key">Y</button>
                            <button key="keyM" onClick={() => {handleInputLetter('M');}} className="tm_Key">M</button>
                        </div>
                        <div className="tm_Keyrow2">
                            <button key="keyC" onClick={() => {handleInputLetter('C');}} className="tm_Key">C</button>
                            <button key="keyR" onClick={() => {handleInputLetter('R');}} className="tm_Key">R</button>
                            <button key="keyW" onClick={() => {handleInputLetter('W');}} className="tm_Key">W</button>
                            <button key="keyT" onClick={() => {handleInputLetter('T');}} className="tm_Key">T</button>
                            <button key="keyH" onClick={() => {handleInputLetter('H');}} className="tm_Key">H</button>
                            <button key="keyV" onClick={() => {handleInputLetter('V');}} className="tm_Key">V</button>
                            <button key="keyO" onClick={() => {handleInputLetter('O');}} className="tm_Key">O</button>
                            <button key="keyX" onClick={() => {handleInputLetter('X');}} className="tm_Key">X</button>
                        </div>
                        <div className="tm_Keyrow3">
                            <button key="keyF" onClick={() => {handleInputLetter('F');}} className="tm_Key">F</button>
                            <button key="keyJ" onClick={() => {handleInputLetter('J');}} className="tm_Key">J</button>
                            <button key="keyE" onClick={() => {handleInputLetter('E');}} className="tm_Key">E</button>
                            <button key="keyL" onClick={() => {handleInputLetter('L');}} className="tm_Key">L</button>
                            <button key="keyD" onClick={() => {handleInputLetter('D');}} className="tm_Key">D</button>
                            <button key="keyB" onClick={() => {handleInputLetter('B');}} className="tm_Key">B</button>
                            <button key="keyU" onClick={() => {handleInputLetter('U');}} className="tm_Key">U</button>
                            <button key="keyN" onClick={() => {handleInputLetter('N');}} className="tm_Key">N</button>
                            <button key="keyK" onClick={() => {handleInputLetter('K');}} className="tm_Key">K</button>
                        </div>
                        {nextWord.length > 0 && <div className="textcenter">
                            <button key="keyBack" onClick={() => {handleDeleteLetter();}} className="tm_KeyBack">←</button>
                            &nbsp;{nextWord}&nbsp;
                            <button key="keyGo" onClick={acceptNextWord} className="tm_KeyGo">GO</button>
                        </div>}
                    </div>
                </MobileOnlyView>
                <BrowserView>
                    <form className="tm_form">
                        Next Word:
                        <input value={nextWord}
                            onChange={(e) => {setNextWord(e.target.value);}}
                            onKeyPress={(e) => {e.keyCode === 13 && acceptNextWord;}}
                            ></input>
                        <button type="submit" onClick={acceptNextWord}>GO</button>
                    </form>
                </BrowserView>
                <div className="tm_lastbuttons">
                    {words.length > 0 && 
                    <button className="tm_undo" onClick={() => {let newWords = [...words]; newWords.pop(); setWords(newWords);}}
                    data-toggle="tooltip" title="Remove last entered word"
                    >
                        UNDO
                    </button>}
                    {words.length > 0 &&
                    <button className="tm_reset" onClick={() => {setWords([]); setNextWord('');}}
                    data-toggle="tooltip" title="Remove all enter words"
                    >
                        RESET
                    </button>}
                    <button className="tm_help" onClick={() => {alert('Valid next word options:\nSwap one letter, e.g. CAT to COT\nDrop one letter, e.g. SWIG to WIG\nInsert one letter, e.g. MAT to MATH, or HIP to WHIP\nAnagram, e.g. ACT to CAT');}}
                    data-toggle="tooltip" title="Show instructions"
                    >
                        HELP
                    </button>
                </div>
            </div>
        }
    </div>
    return (
        <div className="trBackground">
            <div className="trTitle">
                Transmogrify
                <button className="trButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
            </div>
            <table>
                <tbody>
                    <tr><td>{GameStartSection}</td></tr>
                    {puzzle && puzzle.startWord && <tr><td>{PuzzleSection}</td></tr>}
                    {puzzle && puzzle.startWord && <tr><td>{SolutionSection}</td></tr>}
                </tbody>
            </table>
            <div>
                {puzzle && puzzle.notes && puzzle.notes.length > 0 &&
                <div className="trDanger">
                    {puzzle.notes.map((n,i) => (
                        <p key={`note${i}`}>{n}</p>
                    ))}
                </div>
                }
            </div>
        </div>
    );
}

export default Transmogrify;