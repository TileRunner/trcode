import React, { useState } from 'react';
import Showinfo from '../wi/showinfo'
import { isMobile } from 'react-device-detect'
import ShowCustomKeyboard from '../showCustomKeyboard';
import GetWMOptions from './wmoptions';
const WordMastermind = ({setWhereto}) => {
    const [gameOptions, setGameOptions] = useState({set:false});
    const [history, setHistory] = useState([]);
    const [keyboardVersion, setKeyboardVersion] = useState(1);
    const [setSolveCounts, setSetSolveCounts] = useState([]); // how many guesses to solve each set
    const [setGuessCount, setSetGuessCount] = useState(0); // total guess count for the min-max word len set
    const [secretWord, setSecretWord] = useState('');
    const [secretDisplay, setSecretDisplay] = useState('');
    const [guess, setGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [solved, setSolved] = useState(false);
    const [showInitialInfo, setShowInitialInfo] = useState(true); // set info, easy mode info
    const divUnderKeyboard = showDivUnderKeyboard();
    const displayGuesses = showGuessesTable();
    const promptForGuess = showGuessPrompt();
    const promptForPlayAgain = showPlayAgainPrompt();
    const [hidehints, setHidehints] = useState([]);

    function handleInputLetter(letter) {
        handleUpdatedGuess(guess + letter);
    }
    function handleDeleteLetter() {
        if (guess.length > 0) {
            setGuess(guess.substring(0,guess.length-1));
        }
    }
    function showDivUnderKeyboard() {
        return <div className="wmWordUnderKeyboard">&nbsp;{guess}&nbsp;</div>;
    }
    function handleUpdatedGuess(guessword) {
        if (guessword.length === secretWord.length) {
            addGuessToHistory(guessword);
            const newSetGuessCount = setGuessCount + 1;
            setSetGuessCount(newSetGuessCount);
            setGuesses([guessword, ...guesses]);
            setGuess('');
            if (guessword === secretWord)
            {
                setSolved(true);
                if (secretWord.length === gameOptions.lenMax) {
                    setSetSolveCounts([...setSolveCounts, newSetGuessCount]);
                }
            }
        } else {
            setGuess(guessword);
        }
    }
    function addRoundToHistory(newsecretword) {
        // history array by set, new sets at last position
        // each set is an array of rounds (min to max length)
        // each round has secret word and guess info
        let newhistory = JSON.parse(JSON.stringify(history));
        let newround = {secretWord: newsecretword, guesses: [], solved: false};
        if (newsecretword.length === gameOptions.lenMin) { // new set
            let newset = {rounds: [newround], numguesses: 0};
            newhistory.push(newset);
        } else { // existing set
            let currset = newhistory[newhistory.length-1];
            currset.rounds.push(newround);
        }
        setHistory(newhistory);
    }
    function addGuessToHistory(guessword) {
        let newhistory = JSON.parse(JSON.stringify(history));
        let currset = newhistory[newhistory.length-1];
        let currround = currset.rounds[currset.rounds.length-1];
        let guessLetters = Array.from(guessword);
        let letterinfo = [];
        for (let i = 0; i < guessLetters.length; i++) {
            const guessletter = guessLetters[i];
            const letterResult = calcLetterResult(guessLetters, i); // C, I, or W
            letterinfo.push({letter: guessletter, result: letterResult});
        }
        let newguess = {guess: guessword, letterinfo: letterinfo, solves: guessword === secretWord};
        currset.numguesses++;
        currround.solved = newguess.solves;
        currround.guesses.push(newguess);
        setHistory(newhistory);
    }
    function copyToClipboard() {
        if (!gameOptions.cliprule) {
            return;
        }
        let copyText = "Word Mastermind\nhttps://tilerunner.herokuapp.com/\n";
        for (let s = 0; s < history.length; s++) {
            const si = history[s];
            if (gameOptions.cliprule === 'all' || s === history.length - 1) {
                if (gameOptions.cliprule !== 'round') {
                    copyText += `Set ${s+1}: ${si.numguesses} guesses\n`
                }
                for (let r = 0; r < si.rounds.length; r++) {
                    const ri = si.rounds[r];
                    if (gameOptions.cliprule !== 'round' || r === si.rounds.length - 1) {
                        copyText = `${copyText}Round ${r+1}: ${ri.guesses.length} guesses\n`;
                        for (let g = 0; g < ri.guesses.length; g++) {
                            const gi = ri.guesses[g];
                            copyText += `${gi.guess}:\n`;
                            for (let l = 0; l < gi.letterinfo.length; l++) {
                                const li = gi.letterinfo[l];
                                if (li.result === 'C') {
                                    copyText = copyText + "🟩";
                                } else if (li.result === 'I') {
                                    copyText = copyText + "🟨";
                                } else {
                                    copyText = copyText + "⬜";
                                }
                            }
                            copyText = copyText + "\n";
                        }
                    }
                }
            }
        }
        navigator.clipboard.writeText(copyText);
        alert("Clipboard updated");
    }
    function hintshidden(checkword) {
        for (let index = 0; index < hidehints.length; index++) {
            const hideword = hidehints[index];
            if (hideword === checkword) {
                return true;
            }
        }
        return false;
    }
    function removeEntry(index) {
        if (!hintshidden(guesses[index])) {
            let newhidehints = [...hidehints];
            newhidehints.push(guesses[index]);
            setHidehints(newhidehints);  
        }
    }
    const InitialInfo = <div className="Outertable">
        <div className="trParagraph AlignLeft">
            <p>{gameOptions.lenMin}-{gameOptions.lenMax} letter words per set.</p>
            <p>Guesses this word: {guesses.length}</p>
            <p>Guesses this set: {setGuessCount}</p>
            {setSolveCounts.length === 0 ?
                <p>No completed sets yet</p>
                :
                <p>Guesses for completed sets: {setSolveCounts.map(num => (<span key={num.toString()}>{num} </span>))}</p>}
            {gameOptions.mode === 'easy' && <><p><span className="wmEasyModeLetter wmCorrectLetterCorrectPosition">C</span>orrect position</p>
                <p><span className="wmEasyModeLetter wmCorrectLetterWrongPosition">I</span>ncorrect position</p>
                <p><span className="wmEasyModeLetter wmWrongLetter">W</span>rong letter</p>
            </>}
        </div>
    </div>;
    const MainInfo = <div className="Outertable">
        {/* If I don't check gameOptions.set then it will call pickRandomWord
           even when the options are not set and this is not called by my
           code. It must be some kind of pre-rendering.
         */}
        {gameOptions.set && secretWord === '' ? pickRandomWord() : ''}
        <div className="trParagraph">
            <h3>Secret Word: {solved ? secretWord : secretDisplay}</h3>
            {secretWord === '' ?
                <h1>Loading ...</h1>
                :
                solved ?
                    promptForPlayAgain
                    :
                    promptForGuess}
            {solved ?
                <br></br>
                :
                guesses.length === 0 ?
                    <p className="AlignCenter">Start guessing</p>
                    :
                    <p className="AlignCenter">Keep guessing</p>}
        </div>
        {guesses.length === 0 ?
            <p className="trParagraph">No guesses yet</p>
            :
            displayGuesses}
    </div>;
    const GuessInfo = <div className="Outertable">
        <div className="wmGuessInfoDiv">
            Guess info:
        </div>
        {guesses.map((g, gi) => (
            !hintshidden(g) &&
            <Showinfo key={`${guesses.length - gi}.${g}`} word={g} showInserts="N" showSwaps="Y" showAnagrams="Y" showDrops="N" removeEntry={removeEntry} entryIndex={gi} />
        ))}
        <div className="wmGuessInfoDiv">
            Explanation:
        </div>
        <ul className="trParagraph">
            <li><span className="insertCount">&nbsp;1&nbsp;</span>Shows insert counts/letters</li>
            <li><span className="swapCount">&nbsp;2&nbsp;</span>Shows swaps counts/letters</li>
            <li><span className="anagramCount">3</span>Shows anagram counts/words</li>
            <li>Click to toggle between count and info</li>
            <li>Click the <span className="closemebutton"></span> to remove your word</li>
        </ul>
    </div>;
    const BrowserLayout = <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6">
                <div className="row">
                    <div className="col">{InitialInfo}</div>
                    <div className="col">{MainInfo}</div>
                </div>
            </div>
            <div className="col">{GuessInfo}</div>
        </div>
    </div>;
    const MobileLayout = <div>
        <div>
            <button className="trButton" onClick={() => { setShowInitialInfo(!showInitialInfo); } }>
                {showInitialInfo ? "Hide" : "Show"}
            </button>
            {showInitialInfo && InitialInfo}
        </div>
        {MainInfo}
    </div>;
    return (
        <div className="trBackground">
            <div className="trTitle">
                Word Mastermind
                <button className="trButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
            </div>
        {!gameOptions.set ?
            <GetWMOptions setGameOptions={setGameOptions}/>
        :
            isMobile ? MobileLayout : BrowserLayout
        }
        </div>
    );

    function showPlayAgainPrompt() {
        return <div className="trParagraph">
            <h4 className="tmCongrats">👏🏽 Solved in {guesses.length} moves! 👏🏽</h4>
            <button className="trButton"
            onClick={function () {
                pickRandomWord();
                setGuess('');
                setGuesses([]);
                setHidehints([]);
                setSolved(false);
            } }
            >
                {secretWord.length === gameOptions.lenMax ? "Start Another Set!" : "Start Next Word"}
            </button>
            <button className="trButton"
            onClick={() => {copyToClipboard();}}
            >
                Clipboard
            </button>
            </div>;
    }

    function showGuessPrompt() {
        return (
        isMobile ?
            <ShowCustomKeyboard
                keyboardVersion={keyboardVersion}
                setKeyboardVersion={setKeyboardVersion}
                inputWord={guess}
                handleInputLetter={handleInputLetter}
                handleDeleteLetter={handleDeleteLetter}
                divUnderKeyboard={divUnderKeyboard}
            ></ShowCustomKeyboard>        
        :
            <div className="form-group trParagraph">
                {guesses.length === 0 ?
                    <label>First guess:</label>
                    :
                    <label>Next guess:</label>
                }
                <input className="form-control"
                    name="guess"
                    value={guess}
                    autoComplete="new-password"
                    onChange={(e) => {
                        const guessword = e.target.value.toUpperCase().replace( /\W/g , '');
                        handleUpdatedGuess(guessword);
                } } />
            </div>
        );
    }

    function showGuessesTable() {
        return <div>{gameOptions.mode === 'hard' ?
        <table className="trTable">
            <thead>
                <tr>
                    <th>Guess</th>
                    <th>Correct Letter</th>
                    <th>Correct Position</th>
                </tr>
            </thead>
            <tbody>
                {guesses.map((g,i) => (
                    <tr key={`mode0guess${i}`}>
                        <td>{g}</td>
                        <td className="AlignCenter">{calcCorrectLetterCount(g)}</td>
                        <td className="AlignCenter">{calcCorrectPositionCount(g)}</td>
                    </tr>
                )
                )}
            </tbody>
        </table>
        :
        <table className="trTable">
            <tbody>
                {!solved && guess && <tr key='easymodeguessletters'>
                    {guess.split("").map((l,i) => (
                        <td key={`guessletter${i}`} className={`wmEasyModeLetter ${cssEasyModeLetterSize()}`}>{l}</td>
                    ))}
                </tr>}
                {guesses.map((g,i) => (
                    <tr key={`mode1guess${i}`}>
                        {g.split('').map((l,j) => (
                            <td key={`mode1guess${i}letter${j}`} class={calcMode1css(g,j)}>
                                {l}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        }</div>;
    }

    function pickRandomWord() {
        const newlen =
            secretWord ?
                secretWord.length < gameOptions.lenMin ?
                    gameOptions.lenMin
                : secretWord.length >= gameOptions.lenMax ?
                    gameOptions.lenMin
                : secretWord.length + 1
            :
                gameOptions.lenMin;
        if (newlen === gameOptions.lenMin && setGuessCount !== 0)
        {
            setSetGuessCount(0);
        }
        const baseurl = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000/ENABLE2K?random=' : 'https://tilerunner.herokuapp.com/ENABLE2K?random='
        const url = baseurl + newlen.toString();
        fetch(url).then(res => res.text()).then(text => {
            let randomword=JSON.parse(text).toUpperCase(); // It is just a word in double quotes but it is json nonetheless
            setSecretWord(randomword);
            setSecretDisplay(randomword.split("").map(()=>("*")));
            addRoundToHistory(randomword);
        })
    }

    function calcCorrectLetterCount(guessletters) {
        let n = 0
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        for(let letter of alphabet) {
            let x = secretWord.split(letter).length - 1
            let y = guessletters.split(letter).length - 1
            n = n + (x < y ? x : y)
        }
        return n
    }

    function calcCorrectPositionCount(guessletters) {
        let n = 0
        for(var i=0; i<secretWord.length; ++i) {
            n = n + (secretWord[i] === guessletters[i] ? 1 : 0)
        }
        return n
    }

    function calcLetterResult(guessLetters, guessLetterIndex) {
        let letter = guessLetters[guessLetterIndex];
        // g is the whoe guess, j is the letter index for which we want the css style name
        if (letter === secretWord[guessLetterIndex]) {
            return "C";
        }
        if (secretWord.indexOf(letter) > -1) {
            // the guess letter is in the secret word and is not in the right spot
            // has it already been counted earlier though?
            // will it be counted later as correct letter correct spot?
            let nextjstart = 0;
            for (let i = 0; i < secretWord.length; i++) {
                if (secretWord[i] === letter && guessLetters[i] !== letter) {
                    let jfound = false;
                    for(let j = nextjstart; !jfound && j < secretWord.length; j++) {
                        if (guessLetters[j] === letter && secretWord[j] !== letter) {
                            if (j === guessLetterIndex) {
                                return "I";
                            }
                            jfound = true;
                            nextjstart = j + 1;
                        }
                    }
                }
            }
        }
        return "W";
    }
    function calcMode1css(guessLetters,guessLetterIndex) {
        let size = cssEasyModeLetterSize();
        let letterResult = calcLetterResult(guessLetters, guessLetterIndex);
        if (letterResult === 'C') {return "wmEasyModeLetter wmCorrectLetterCorrectPosition " + size;}
        if (letterResult === 'I') {return "wmEasyModeLetter wmCorrectLetterWrongPosition " + size;}
        return "wmEasyModeLetter wmWrongLetter " + size;
    }
    function cssEasyModeLetterSize() {
        return (secretWord && secretWord.length > 8 ? 'small' : 'normal');
    }
}

export default WordMastermind;