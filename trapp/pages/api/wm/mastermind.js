import React, { useState } from 'react';
import './mastermind.css';

export default function handler(req, res)  {
    return (
        <Game />
        );
}

function Game() {
    const [setSolveCounts, setSetSolveCounts] = useState([]) // how many guesses to solve each set
    const [setGuessCount, setSetGuessCount] = useState(0) // total guess count for the 2-8 letter set
    const [secretWord, setSecretWord] = useState('')
    const [secretDisplay, setSecretDisplay] = useState('')
    const [guess, setGuess] = useState('')
    const [guesses, setGuesses] = useState([])
    const [solved, setSolved] = useState(false)
    const displayGuesses = showGuessesTable();
    const promptForGuess = showGuessPrompt();
    const promptForPlayAgain = showPlayAgainPrompt();
    return (
        <div className="Mastermind">
            <div class="page-header">
                <h1>Word Mastermind</h1>
            </div>
            <p>Cycle through 2-8 letter words per set.</p>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div className="Outertable">
                            <h3 className="AlignLeft">Guesses this word: {guesses.length}</h3>
                            <h3 className="AlignLeft">Guesses this set: {setGuessCount}</h3>
                            {setSolveCounts.length === 0 ?
                                <p className="AlignLeft">No completed sets yet</p>
                            :
                                <p className="AlignLeft">Guesses for completed sets: {setSolveCounts.map(num => (<span key={num.toString()}>{num} </span>))}</p>
                            }
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div className="Outertable">
                            {secretWord === '' ? pickRandomWord() : ''}
                            <h3>Secret Word: {solved ? secretWord : secretDisplay}</h3>
                            {secretWord === '' ?
                                <h1>Loading ...</h1>
                                :
                                solved ?
                                    promptForPlayAgain
                                    :
                                    promptForGuess
                                }
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div className="Outertable">
                            {guesses.length === 0 ?
                                <p>No guesses yet</p> 
                                :
                                displayGuesses
                            }
                        </div>
                    </div>
                </div>
            </div>
            {solved ?
                <br></br>
                :
                guesses.length === 0 ?
                    <p>Start guessing</p>
                    :
                    <p>Keep guessing</p>
            }
        </div>
    );

    function showPlayAgainPrompt() {
        return <div>
            <h2>Solved in {guesses.length} moves!</h2>
            <button
            onClick={function () {
                pickRandomWord();
                setGuess('');
                setGuesses([]);
                setSolved(false);
            } }
            >
                {secretWord.length === 8 ? "Start Another Set!" : "Start Next Word"}
            </button>
            </div>;
    }

    function showGuessPrompt() {
        return <div className="form-group">
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
        return <table className="Guesstable">
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
                        <td>{calcCorrectLetterCount(g)}</td>
                        <td>{calcCorrectPositionCount(g)}</td>
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
        const url = 'https://words-scrabble.herokuapp.com/api/random/' + newlen.toString();
        fetch(url).then(res => res.text()).then(text => {
            setSecretWord(text);
            setSecretDisplay(text.split("").map(element=>("*")));
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
