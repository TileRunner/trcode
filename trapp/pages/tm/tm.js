import { useState } from "react";
import { countSwaps, areAnagrams, isDrop, isWordValid } from '../../lib/wordfunctions';
import Showinfo from '../wi/showinfo'

const Transmogrify = ({setWhereto}) => {
    const [keyboardVersion, setKeyboardVersion] = useState('ckv1');
    const [numMoves, setNumMoves] = useState(2);
    const baseurl = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000' : 'https://tilerunner.herokuapp.com';
    const numMovesArray = [2,3,4,5,6,7,8,9];
    const [puzzle, setPuzzle] = useState({});
    const [nextWord, setNextWord] = useState('');
    const [words, setWords] = useState([]); // Users words
    const [solved, setSolved] = useState(false);
    const [solving, setSolving] = useState(false);
    const callForPuzzle = async() => {
        let data = {};
        let newSolving = false;
        try {
            let url = `${baseurl}/ENABLE2K?transmogrify=true&numMoves=${numMoves}`;
            const response = await fetch(url);
            data = await response.json();                
            newSolving = true;
        } catch (error) {
            data.notes = ["Problem with the server. Sorry about that."];
            console.log(error);
        }
        setPuzzle(data);
        setWords([]);
        setNextWord('');
        setSolved(false);
        setSolving(newSolving);
    }
    const quitThisPuzzle = () => {
        setSolving(false);
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
    const removeWords =(wi) => {
        if (wi < words.length) {
            let newWords = [...words];
            newWords.splice(wi);
            setWords(newWords);
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
    const ShowKeyboard = <div>
        {keyboardVersion === 'ckv1' ?
            <div className="customKeyboardV1">
                <div className="switchkb">
                    <button key="switchbkv1" onClick={() => {setKeyboardVersion('ckv2');}}>switch keyboard</button>
                </div>
                <div className="ckv1Row1">
                    <span onClick={() => { handleInputLetter('Q'); } } className="ckv1 Q"></span>
                    <span onClick={() => { handleInputLetter('W'); } } className="ckv1 W"></span>
                    <span onClick={() => { handleInputLetter('E'); } } className="ckv1 E"></span>
                    <span onClick={() => { handleInputLetter('R'); } } className="ckv1 R"></span>
                    <span onClick={() => { handleInputLetter('T'); } } className="ckv1 T"></span>
                    <span onClick={() => { handleInputLetter('Y'); } } className="ckv1 Y"></span>
                    <span onClick={() => { handleInputLetter('U'); } } className="ckv1 U"></span>
                    <span onClick={() => { handleInputLetter('I'); } } className="ckv1 I"></span>
                    <span onClick={() => { handleInputLetter('O'); } } className="ckv1 O"></span>
                    <span onClick={() => { handleInputLetter('P'); } } className="ckv1 P"></span>
                </div>
                <div className="ckv1Row2">
                    <span onClick={() => { handleInputLetter('A'); } } className="ckv1 A"></span>
                    <span onClick={() => { handleInputLetter('S'); } } className="ckv1 S"></span>
                    <span onClick={() => { handleInputLetter('D'); } } className="ckv1 D"></span>
                    <span onClick={() => { handleInputLetter('F'); } } className="ckv1 F"></span>
                    <span onClick={() => { handleInputLetter('G'); } } className="ckv1 G"></span>
                    <span onClick={() => { handleInputLetter('H'); } } className="ckv1 H"></span>
                    <span onClick={() => { handleInputLetter('J'); } } className="ckv1 J"></span>
                    <span onClick={() => { handleInputLetter('K'); } } className="ckv1 K"></span>
                    <span onClick={() => { handleInputLetter('L'); } } className="ckv1 L"></span>
                </div>
                <div className="ckv1Row3">
                    <span onClick={() => { handleInputLetter('Z'); } } className="ckv1 Z"></span>
                    <span onClick={() => { handleInputLetter('X'); } } className="ckv1 X"></span>
                    <span onClick={() => { handleInputLetter('C'); } } className="ckv1 C"></span>
                    <span onClick={() => { handleInputLetter('V'); } } className="ckv1 V"></span>
                    <span onClick={() => { handleInputLetter('B'); } } className="ckv1 B"></span>
                    <span onClick={() => { handleInputLetter('N'); } } className="ckv1 N"></span>
                    <span onClick={() => { handleInputLetter('M'); } } className="ckv1 M"></span>
                    <span onClick={() => { nextWord.length > 0 && handleDeleteLetter(); } } class="tm_Backspace"></span>
                </div>
                {nextWord.length > 0 &&
                    <div className="tm_KeyGoDiv"><button key="keyGo" onClick={acceptNextWord} className="tm_KeyGo">SUBMIT WORD</button></div>
                }         
            </div>
        : keyboardVersion === 'ckv2' ?
            <div className="customKeyboardV2 ">
                <div className="switchkb">
                    <button key="switchbkv2" onClick={() => {setKeyboardVersion('ckv3');}}>switch keyboard</button>
                </div>
                <div className="ckv2Row1">
                    <span onClick={() => { handleInputLetter('Q'); } }>Q</span>
                    <span onClick={() => { handleInputLetter('W'); } }>W</span>
                    <span onClick={() => { handleInputLetter('E'); } }>E</span>
                    <span onClick={() => { handleInputLetter('R'); } }>R</span>
                    <span onClick={() => { handleInputLetter('T'); } }>T</span>
                    <span onClick={() => { handleInputLetter('Y'); } }>Y</span>
                    <span onClick={() => { handleInputLetter('U'); } }>U</span>
                    <span onClick={() => { handleInputLetter('I'); } }>I</span>
                    <span onClick={() => { handleInputLetter('O'); } }>O</span>
                    <span onClick={() => { handleInputLetter('P'); } }>P</span>
                </div>
                <div className="ckv2Row2">
                    <span onClick={() => { handleInputLetter('A'); } }>A</span>
                    <span onClick={() => { handleInputLetter('S'); } }>S</span>
                    <span onClick={() => { handleInputLetter('D'); } }>D</span>
                    <span onClick={() => { handleInputLetter('F'); } }>F</span>
                    <span onClick={() => { handleInputLetter('G'); } }>G</span>
                    <span onClick={() => { handleInputLetter('H'); } }>H</span>
                    <span onClick={() => { handleInputLetter('J'); } }>J</span>
                    <span onClick={() => { handleInputLetter('K'); } }>K</span>
                    <span onClick={() => { handleInputLetter('L'); } }>L</span>
                </div>
                <div className="ckv2Row3">
                    <span onClick={() => { handleInputLetter('Z'); } }>Z</span>
                    <span onClick={() => { handleInputLetter('X'); } }>X</span>
                    <span onClick={() => { handleInputLetter('C'); } }>C</span>
                    <span onClick={() => { handleInputLetter('V'); } }>V</span>
                    <span onClick={() => { handleInputLetter('B'); } }>B</span>
                    <span onClick={() => { handleInputLetter('N'); } }>N</span>
                    <span onClick={() => { handleInputLetter('M'); } }>M</span>
                    <span onClick={() => { nextWord.length > 0 && handleDeleteLetter(); } } class="tm_Backspace"></span>
                </div>
                {nextWord.length > 0 &&
                    <div className="tm_KeyGoDiv"><button key="keyGo" onClick={acceptNextWord} className="tm_KeyGo">SUBMIT WORD</button></div>
                }
            </div>
        :
            <div className="customKeyboardV3">
                <div className="switchkb">
                    <button key="switchbkv3" onClick={() => {setKeyboardVersion('ckv1');}}>switch keyboard</button>
                </div>
                <div className="ckv3Row1">
                    <span onClick={() => { handleInputLetter('Q'); } } className="ckv3 Q"></span>
                    <span onClick={() => { handleInputLetter('W'); } } className="ckv3 W"></span>
                    <span onClick={() => { handleInputLetter('E'); } } className="ckv3 E"></span>
                    <span onClick={() => { handleInputLetter('R'); } } className="ckv3 R"></span>
                    <span onClick={() => { handleInputLetter('T'); } } className="ckv3 T"></span>
                    <span onClick={() => { handleInputLetter('Y'); } } className="ckv3 Y"></span>
                    <span onClick={() => { handleInputLetter('U'); } } className="ckv3 U"></span>
                    <span onClick={() => { handleInputLetter('I'); } } className="ckv3 I"></span>
                    <span onClick={() => { handleInputLetter('O'); } } className="ckv3 O"></span>
                    <span onClick={() => { handleInputLetter('P'); } } className="ckv3 P"></span>
                </div>
                <div className="ckv3Row2">
                    <span onClick={() => { handleInputLetter('A'); } } className="ckv3 A"></span>
                    <span onClick={() => { handleInputLetter('S'); } } className="ckv3 S"></span>
                    <span onClick={() => { handleInputLetter('D'); } } className="ckv3 D"></span>
                    <span onClick={() => { handleInputLetter('F'); } } className="ckv3 F"></span>
                    <span onClick={() => { handleInputLetter('G'); } } className="ckv3 G"></span>
                    <span onClick={() => { handleInputLetter('H'); } } className="ckv3 H"></span>
                    <span onClick={() => { handleInputLetter('J'); } } className="ckv3 J"></span>
                    <span onClick={() => { handleInputLetter('K'); } } className="ckv3 K"></span>
                    <span onClick={() => { handleInputLetter('L'); } } className="ckv3 L"></span>
                </div>
                <div className="ckv3Row3">
                    <span onClick={() => { handleInputLetter('Z'); } } className="ckv3 Z"></span>
                    <span onClick={() => { handleInputLetter('X'); } } className="ckv3 X"></span>
                    <span onClick={() => { handleInputLetter('C'); } } className="ckv3 C"></span>
                    <span onClick={() => { handleInputLetter('V'); } } className="ckv3 V"></span>
                    <span onClick={() => { handleInputLetter('B'); } } className="ckv3 B"></span>
                    <span onClick={() => { handleInputLetter('N'); } } className="ckv3 N"></span>
                    <span onClick={() => { handleInputLetter('M'); } } className="ckv3 M"></span>
                    <span onClick={() => { nextWord.length > 0 && handleDeleteLetter(); } } class="tm_Backspace"></span>
                </div>
                {nextWord.length > 0 &&
                    <div className="tm_KeyGoDiv"><button key="keyGo" onClick={acceptNextWord} className="tm_KeyGo">SUBMIT WORD</button></div>
                }         
            </div>
        }
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
                    {!solved && nextWord.length > 0 && <tr><td>{nextWord}</td></tr>}
                    {!solved && <tr><td>...</td></tr>}
                    <tr><td>{puzzle.targetWord}</td></tr>
                </tbody>
            </table>
        </div>
        {solved ?
            <p className="tm_congrats">👏🏽 Solved in {words.length + 1} moves 👏🏽</p>
        :
            <div>
                {ShowKeyboard}
                <div className="tm_lastbuttons">
                    {words.length > 0 && 
                    <button onClick={() => {let newWords = [...words]; newWords.pop(); setWords(newWords);}}
                    data-toggle="tooltip" title="Remove last entered word"
                    >
                        UNDO
                    </button>}
                    {words.length > 0 &&
                    <button onClick={() => {setWords([]); setNextWord('');}}
                    data-toggle="tooltip" title="Remove all enter words"
                    >
                        RESET
                    </button>}
                    <button onClick={() => {alert('Valid next word options:\nSwap one letter, e.g. CAT to COT\nDrop one letter, e.g. SWIG to WIG\nInsert one letter, e.g. MAT to MATH, or HIP to WHIP\nAnagram, e.g. ACT to CAT');}}
                    data-toggle="tooltip" title="Show instructions"
                    >
                        HELP
                    </button>
                    <button className="tm_quit" onClick={() => {quitThisPuzzle();}}
                    data-toggle="tooltip" title="Quit this puzzle. You can start another."
                    >
                        QUIT
                    </button>
                </div>
            </div>
        }
    </div>
    const HintSection = <div>
        <Showinfo key={`hint${puzzle.startWord}`} word={puzzle.startWord} showInserts="Y" showSwaps="Y" showAnagrams="Y" showDrops="Y"
             removeEntry={() => {}} entryIndex={-1}/>
        {words.map((g,gi) => (
            <Showinfo key={`hint${g}`} word={g} showInserts="Y" showSwaps="Y" showAnagrams="Y" showDrops="Y"
             removeEntry={() => {removeWords(gi);}} entryIndex={gi+1}/>
        ))}
        <Showinfo key={`hint${puzzle.targetWord}`} word={puzzle.targetWord} showInserts="Y" showSwaps="Y" showAnagrams="Y" showDrops="Y"
             removeEntry={() => {}} entryIndex={-1}/>
        <ul className="trParagraph">
            <li><span className="insertCount">&nbsp;1&nbsp;</span>Shows insert counts/letters</li>
            <li><span className="swapCount">&nbsp;2&nbsp;</span>Shows swaps counts/letters</li>
            <li><span className="anagramCount">3</span>Shows anagram counts/words</li>
            <li>Click to toggle between count and info</li>
            <li>The black dot represents a drop</li>
            <li>Click the <span className="closemebutton"></span> to remove</li>
        </ul>
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
                    {(solved || !solving) && <tr><td>{GameStartSection}</td></tr>}
                    {puzzle && puzzle.startWord && <tr><td>{PuzzleSection}</td></tr>}
                    {puzzle && puzzle.startWord && <tr><td>{SolutionSection}</td></tr>}
                    {puzzle && puzzle.startWord && !solved && <tr><td>{HintSection}</td></tr>}
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