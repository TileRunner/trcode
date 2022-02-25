import React, { useState, useEffect } from "react";
import { isWordValid } from "../../lib/wordfunctions";

const FryYourBrainSolo = ({setWhereto}) => {
    const baseurl = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000' : 'https://tilerunner.herokuapp.com';
    const [pickedLetters, setPickedLetters] = useState([]); // All pre-picked fry letters as an array
    const [fryLetters, setFryLetters] = useState([]); // Fry letters shown at current stage as an array
    const [word, setWord] = useState('');
    const [selected, setSelected] = useState(-1); // Used for letting the user move fry letters around
    const [moves, setMoves] = useState([]);
    const [warning, setWarning] = useState('Practice session.');

    useEffect(() => {
        pickAllFryLetters();
    },[]);

    const pickAllFryLetters = async () => {
        let url = `${baseurl}/ENABLE2K?prepickfry=true&guarantee=6`;
        const response = await fetch(url);
        const data = await response.json();
        let picked = data.fryLetters.join('');
        let newPick = Array.from(picked.toUpperCase());
        setPickedLetters(newPick);
        setFryLetters(newPick.slice(0,3));
    };

    async function getChefsPick() {
        let url = `${baseurl}/ENABLE2K?topfry=true&letters=${fryLetters.join('')}&count=1`;
        const response = await fetch(url);
        const jdata = await response.json();
        return jdata.answers && jdata.answers.length > 0 ? jdata.answers[0] : '';
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            submitPlayerWord();
            return;
        }
    }

    const submitPlayerWord = async() => {
        let fixedword = word.toUpperCase().trim();
        // Check if they have all the fry letters
        for (let i = 0; i < fryLetters.length; i++) {
            let letterCountRequired = 0;
            let actualLetterCount = 0;
            for (let j = 0; j < fryLetters.length; j++) {
                if (fryLetters[i] === fryLetters[j]) {
                    letterCountRequired = letterCountRequired + 1;
                }
            }
            for (let j = 0; j < fixedword.length; j++) {
                if (fryLetters[i] === fixedword[j]) {
                    actualLetterCount = actualLetterCount + 1;
                }
            }
            if (actualLetterCount < letterCountRequired) {
                setWarning(`You need the letter ${fryLetters[i]} at least ${letterCountRequired} time${letterCountRequired === 1 ? '.' : 's.'}`);
                return;
            }
        }
        let valid = await isWordValid(word);
        let move = {pass:false, word: word, valid: valid};
        await finishMoveAndMoveOn(move);
    }

    const submitPass = async() => {
        let move = {pass:true};
        await finishMoveAndMoveOn(move);
    }

    async function finishMoveAndMoveOn(move) {
        let chefsPick = await getChefsPick();
        move.fryLetters = fryLetters;
        move.chefsPick = chefsPick;
        let newmoves = [...moves];
        newmoves.push(move);
        while (newmoves.length > 15) {
            newmoves.splice(0,1);
        }
        setMoves(newmoves);
        if (fryLetters.length === pickedLetters.length) {
            await pickAllFryLetters();
            setWord('');
            setWarning('New fry letters picked.')
        } else {
            let newFryLetters = pickedLetters.slice(0, fryLetters.length + 1);
            setFryLetters(newFryLetters);
            setWarning('');
        }
    }

    return (
        <div className="trBackground">
            <div className="trTitle">
                Fry Your Brain Solo
                <button className="trButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
            </div>
            {moves.length >= 0 && <div>
                <table className="trTable" border="1">
                    <thead>
                        <tr>
                            <th>Fry Letters</th>
                            <th>Play Made</th>
                            <th>Result</th>
                            <th>Chefs Pick</th>
                        </tr>
                    </thead>
                    <tbody>
                        {moves.map((m,i) => (
                            <tr key={`solomove${i}`}>
                                <td>{m.fryLetters}</td>
                                <td>
                                    {m.pass && <span className="trDanger">PASS</span>}
                                    {!m.pass && <>{m.word}</>}
                                </td>
                                <td>
                                    {!m.pass && m.valid && m.word.length === m.chefsPick.length && <span className="trEmphasis">Shortest!</span>}
                                    {!m.pass && m.valid && m.word.length > m.chefsPick.length && <>Valid</>}
                                    {!m.pass && !m.valid && <span className="trDanger">Phoney</span>}
                                </td>
                                <td>{m.chefsPick}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
            <div>Prepicked fry letters: {pickedLetters}</div>
            {fryLetters.length > 0 && <div>
                <div className="trParagraph">Fry Letters:
                    <button className="trButton fryLetterActionButton" onClick={() => {
                        let shuffleSize = fryLetters.length;
                        let beforeShuffle = [...fryLetters];
                        let afterShuffle = [];
                        while (afterShuffle.length < shuffleSize) {
                            let rand = Math.floor(Math.random() * beforeShuffle.length);
                            afterShuffle.push(beforeShuffle[rand]);
                            beforeShuffle.splice(rand, 1);
                        };
                        setFryLetters(afterShuffle);
                        setSelected(-1);
                    } }>
                        <i className="material-icons fryLetterActionButtonIcon">cached</i>
                    </button>
                    <button className="trButton fryLetterActionButton" onClick={() => {
                        let sortwork = [...fryLetters];
                        sortwork.sort();
                        setFryLetters(sortwork);
                        setSelected(-1);
                    } }>
                        <i className="material-icons fryLetterActionButtonIcon">sort_by_alpha</i>
                    </button>
                </div>
                <div className="fryLetterDiv">
                    {fryLetters.map((fl, i) => (
                        <span key={`SoloFryLetter${i}`}
                            className={i === selected ? "fybFryLetter Selected" : "fybFryLetter"}
                            onDoubleClick={() => {
                                let moveLetter = fryLetters[i];
                                let shiftedLetters = [...fryLetters];
                                shiftedLetters.splice(i, 1);
                                shiftedLetters.push(moveLetter);
                                setFryLetters([...shiftedLetters]);
                                setSelected(-1);
                            } }
                            onClick={() => {
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
                            } }
                        >{fl}</span>
                    ))}
                </div>
                <div onKeyDownCapture={handleKeyDown}>
                    <div className="trEmphasis">Enter Word:</div>
                    <input
                        type="text" placeholder="Enter word here"
                        autoComplete="off" spellCheck="false"
                        name="word"
                        value={word}
                        onChange={(e) => {
                            setWord(e.target.value);
                        } } />
                    <button className="closemebutton" onClick={() => {setWord('');}}/>
                    <div>
                        {word.toUpperCase().trim().match("^[a-zA-Z]*$") && 
                            <button className="trButton" key="submitWord"
                                onClick={() => {submitPlayerWord()}}>
                                SUBMIT
                            </button>
                        }
                        <button className="trButton" key="passButton"
                            onClick={() => {submitPass()}}>
                            PASS
                        </button>
                    </div>
                </div>
            </div>}
            {warning && <div className="trWarning">{warning}</div>}
        </div>
    );
}

export default FryYourBrainSolo;
