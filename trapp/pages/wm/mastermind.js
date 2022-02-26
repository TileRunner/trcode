import React, { useState } from 'react';
import Showinfo from '../wi/showinfo'
import { isMobile } from 'react-device-detect'

const WordMastermind = ({setWhereto}) => {
    const [setSolveCounts, setSetSolveCounts] = useState([]); // how many guesses to solve each set
    const [setGuessCount, setSetGuessCount] = useState(0); // total guess count for the 2-8 letter set
    const [secretWord, setSecretWord] = useState('');
    const [secretDisplay, setSecretDisplay] = useState('');
    const [guess, setGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [solved, setSolved] = useState(false);
    const [gameMode, setGameMode] = useState(0); // 0=show counts only, 1=show which are right spot and wrong spot
    const displayGuesses = showGuessesTable();
    const promptForGuess = showGuessPrompt();
    const promptForPlayAgain = showPlayAgainPrompt();
    const [hidehints, setHidehints] = useState([]);
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
    return (
        <div className="trBackground">
            <div className="container-fluid">
                <div className="row">
                    <div className="trTitle">
                        Word Mastermind
                        <button className="trButton" onClick={() => {setWhereto('menu');}}>
                            <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <p className="trParagraph">Mode:&nbsp;{gameMode === 0 ? "Normal" : "Easy"}&nbsp;</p>
                    <button className="trButton" onClick={() => {setGameMode(1-gameMode);}}>
                        {gameMode === 0 ? "Go to easy mode" : "Go to normal mode"}
                    </button>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="Outertable">
                                    <div className="trParagraph AlignLeft">
                                        <p>2-8 letter words per set.</p>
                                        <p>Guesses this word: {guesses.length}</p>
                                        <p>Guesses this set: {setGuessCount}</p>
                                        {setSolveCounts.length === 0 ?
                                            <p>No completed sets yet</p>
                                        :
                                            <p>Guesses for completed sets: {setSolveCounts.map(num => (<span key={num.toString()}>{num} </span>))}</p>
                                        }
                                        {gameMode === 1 && <><p><span className="wmEasyModeLetter wmCorrectLetterCorrectPosition">C</span>orrect position</p>
                                        <p><span className="wmEasyModeLetter wmCorrectLetterWrongPosition">I</span>ncorrect position</p>
                                        <p><span className="wmEasyModeLetter wmWrongLetter">W</span>rong letter</p>
                                        </>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="Outertable">
                                    {secretWord === '' ? pickRandomWord() : ''}
                                    <div className="trParagraph">
                                        <h3>Secret Word: {solved ? secretWord : secretDisplay}</h3>
                                        {secretWord === '' ?
                                            <h1>Loading ...</h1>
                                        :
                                            solved ?
                                                promptForPlayAgain
                                            :
                                                promptForGuess
                                        }
                                        {solved ?
                                            <br></br>
                                            :
                                            guesses.length === 0 ?
                                                <p className="AlignCenter">Start guessing</p>
                                                :
                                                <p className="AlignCenter">Keep guessing</p>
                                        }
                                    </div>
                                    {guesses.length === 0 ?
                                        <p className="trParagraph">No guesses yet</p> 
                                        :
                                        displayGuesses
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {!isMobile &&
                        <div className="col-lg-6">
                            <div className="trSubtitle">
                                Guess info:
                            </div>
                            {guesses.map((g,gi) => (
                                !hintshidden(g) &&
                                    <Showinfo key={`${guesses.length - gi}.${g}`} word={g} showInserts="N" showSwaps="Y" showAnagrams="Y" showDrops="N" removeEntry={removeEntry} entryIndex={gi}/>
                            ))}
                        </div>
                    }
                </div>
            </div>
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
                {secretWord.length === 8 ? "Start Another Set!" : "Start Next Word"}
            </button>
            </div>;
    }

    function showGuessPrompt() {
        return <div className="form-group trParagraph">
            {guesses.length === 0 ?
                <label>First guess:</label>
                :
                <label>Next guess:</label>
            }
            <input className="form-control"
                name="guess"
                value={guess}
                onChange={(e) => {
                    const guessword = e.target.value.toUpperCase().replace( /\W/g , '');
                    if (guessword.length === secretWord.length) {
                        const newSetGuessCount = setGuessCount + 1;
                        setSetGuessCount(newSetGuessCount);
                        setGuesses([guessword, ...guesses]);
                        setGuess('');
                        if (guessword === secretWord)
                        {
                            setSolved(true);
                            if (secretWord.length === 8) {
                                setSetSolveCounts([...setSolveCounts, newSetGuessCount]);
                            }
                        }
                    } else {
                        setGuess(guessword);
                    }
            } } />
        </div>;
    }

    function showGuessesTable() {
        return <div>{gameMode === 0 ?
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
        const newlen = secretWord ? secretWord.length < 2 ? 2 : secretWord.length > 7 ? 2 : secretWord.length + 1 : 2;
        if (newlen === 2 && setGuessCount !== 0)
        {
            setSetGuessCount(0);
        }
        const baseurl = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000/ENABLE2K?random=' : 'https://tilerunner.herokuapp.com/ENABLE2K?random='
        const url = baseurl + newlen.toString();
        fetch(url).then(res => res.text()).then(text => {
            let randomword=JSON.parse(text).toUpperCase(); // It is just a word in double quotes but it is json nonetheless
            setSecretWord(randomword);
            setSecretDisplay(randomword.split("").map(()=>("*")));
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

    function calcMode1css(guessLetters,guessLetterIndex) {
        let letter = guessLetters[guessLetterIndex];
        // g is the whoe guess, j is the letter index for which we want the css style name
        if (letter === secretWord[guessLetterIndex]) {
            return "wmEasyModeLetter wmCorrectLetterCorrectPosition";
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
                                return "wmEasyModeLetter wmCorrectLetterWrongPosition";
                            }
                            jfound = true;
                            nextjstart = j + 1;
                        }
                    }
                }
            }
        }
        return "wmEasyModeLetter wmWrongLetter";
    }
}

export default WordMastermind;