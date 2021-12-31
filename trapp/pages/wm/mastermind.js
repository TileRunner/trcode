import React, { useState } from 'react';
import Showinfo from '../wi/showinfo'
import {BrowserView} from 'react-device-detect'

const WordMastermind = ({setWhereto}) => {
    const [setSolveCounts, setSetSolveCounts] = useState([]); // how many guesses to solve each set
    const [setGuessCount, setSetGuessCount] = useState(0); // total guess count for the 2-8 letter set
    const [secretWord, setSecretWord] = useState('');
    const [secretDisplay, setSecretDisplay] = useState('');
    const [guess, setGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [solved, setSolved] = useState(false);
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
                    <div className="col-11">
                        <p className="trParagraph">Cycle through 2-8 letter words per set.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="Outertable">
                                    <div className="trParagraph AlignLeft">
                                        <p>Guesses this word: {guesses.length}</p>
                                        <p>Guesses this set: {setGuessCount}</p>
                                        {setSolveCounts.length === 0 ?
                                            <p>No completed sets yet</p>
                                        :
                                            <p>Guesses for completed sets: {setSolveCounts.map(num => (<span key={num.toString()}>{num} </span>))}</p>
                                        }
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
                                </div>
                            </div>
                        </div>
                        <BrowserView>
                            <div className="row">
                                <div className="col-lg-12">
                                    {guesses.length > 0 &&
                                        <div className="trSubtitle">
                                            Guess info:
                                        </div>
                                    }
                                    {guesses.map((g,gi) => (
                                        !hintshidden(g) &&
                                            <Showinfo key={`${guesses.length - gi}.${g}`} word={g} showInserts="N" showSwaps="Y" showAnagrams="Y" showDrops="N" removeEntry={removeEntry} entryIndex={gi}/>
                                    ))}
                                </div>
                            </div>
                        </BrowserView>
                    </div>
                    <div className="col-lg-4">
                        <div className="Outertable">
                            {guesses.length === 0 ?
                                <p className="trParagraph">No guesses yet</p> 
                                :
                                displayGuesses
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function showPlayAgainPrompt() {
        return <div className="trParagraph">
            <h2 className="trEmphasis">Solved in {guesses.length} moves!</h2>
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
        return <table className="trTable">
            <thead>
                <tr>
                    <th>Guess</th>
                    <th>Correct Letter</th>
                    <th>Correct Position</th>
                </tr>
            </thead>
            <tbody>
                {guesses.map((g) => (
                    <tr>
                        <td>{g}</td>
                        <td className="AlignCenter">{calcCorrectLetterCount(g)}</td>
                        <td className="AlignCenter">{calcCorrectPositionCount(g)}</td>
                    </tr>
                )
                )}
            </tbody>
        </table>;
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
}

export default WordMastermind;