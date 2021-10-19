import React, { useState, useEffect } from "react";
import * as c from '../../lib/fyb/constants';

const Game = ({setWhereto, client, thisisme, wsmessage, nickname, gameid}) => {
    const [snat, setSnat] = useState('');
    const [gamedata, setGamedata] = useState({goal:99, whoseturn:-1, players:[{index: 0, nickname: 'Loading...'}]});
    const [word, setWord] = useState(''); // my word to submit
    const [syncstamp, setSyncstamp] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            if (gamedata.whoseturn > -1 && gamedata.players.length > 0) {
                client.send({
                    type: c.CLIENT_TYPE_FYB,
                    func: 'interval',
                    syncstamp: syncstamp,
                    thisisme: thisisme,
                    nickname: nickname,
                    gameid: gamedata.gameid
                });
            }
        }, c.PING_INTERVAL); // this many milliseconds between above code block executions
        return () => clearInterval(interval);
    });
    useEffect(() => {
        let msg = wsmessage;
        if (msg !== '') processGameMessage(msg);
    },[wsmessage])
    function processGameMessage(message) {
        let messageData = JSON.parse(message);
        if (messageData.type === c.CLIENT_TYPE_FYB) {
            if (messageData.func === c.S2C_FUNC_GAMEDATA) {
                setSnat(messageData.snat);
                setGamedata(messageData.game);
                setSyncstamp(messageData.game.syncstamp);
            } else if (messageData.func = c.S2C_FUNC_GAMECREATED) {
                // Nothing to do, this is really for the lobby dwellers
            } else {
                setSnat(`Unhandled message: ${message}`);
            }
        }
    }

    const handleKeyDown = (event) => {
        if (!meToEnterWord()) {
            return;
        }
        if (event.key === "Enter") {
            event.preventDefault();
            submitPlayerWord(word, gamedata, setSnat, client, thisisme, nickname, setWord);
            return;
        }
    }

    const meToEnterWord = () => {
        if (gamedata.whoseturn < 0) { // Game has not started or has ended
            return false;
        } else if (gamedata.freeforall) { // In free-for-all round
            if (gamedata.excludedPlayer === nickname) {
                return false;
            }
            for (let i = 0; i < gamedata.freeforallMoves.length; i++) {
                if (gamedata.freeforallMoves[i].nickname === nickname) {
                    return false;
                }
            }
            return true;
        } else {
            return (nickname === gamedata.players[gamedata.whoseturn].nickname);
        }
    }
    return (
        <div>
            <div className="w3-teal w3-cell-row">
                <div className="w3-container w3-cell w3-cell-middle w3-padding w3-mobile">
                    <h1 className="myHeadingFont">Fry Your Brain</h1>
                </div>
                <div className="w3-container w3-cell w3-mobile">
                    <h4 className="myCommonFont">Game id: {gameid}</h4>
                    <h4 className="myCommonFont">First to {gamedata.goal}</h4>
                </div>
                <div className="w3-container w3-cell w3-padding w3-mobile">
                    <button className="w3-button" onClick={() => {setWhereto('menu');}}>
                        <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                    </button>
                </div>
            </div>
            <div className="w3-panel w3-responsive">
                <h2 className="w3-black w3-padding-small w3-cell">Player totals:</h2>
                <table>
                    <tbody>
                        {gamedata.players.map((pl) => (
                            <tr key={`Player${pl.index}`}>
                                <td className="w3-green">{pl.nickname}</td>
                                <td class="w3-monospace">
                                    &nbsp;&nbsp;
                                    {pl.points < 10 ? <span>&nbsp;</span> : ''}{pl.points}
                                    {pl.points >= gamedata.goal && <span class="w3-purple w3-cursive w3-margin w3-wide">Winner!</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 &&
                showMoveList('Moves previous round', gamedata.movesPrevRound)
            }
            {gamedata.movesThisRound && gamedata.movesThisRound.length > 0 &&
                showMoveList('Moves this round', gamedata.movesThisRound)
            }
            {!gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 &&
                showMoveList('Free-for-all results', gamedata.freeforallMoves)
            }
            {gamedata.whoseturn > -1 &&
                <div className='w3-panel w3-row'>
                    <h2 className="w3-black w3-cell w3-padding-small">Fry Letters: {gamedata.fryLetters.map((fl,i) => (
                        <span key={`FryLetter${i}`} className="FryLetter">{fl}</span>
                    ))}</h2>
                </div>
            }
            {meToEnterWord() &&
                getPlayerWord(handleKeyDown, word, setWord, gamedata, setSnat, client, thisisme, nickname)
            }
            <div className="w3-container">
            <p>{snat}</p>
            {gamedata.gameOver && <div>
                <h2 className="w3-black w3-cell w3-padding-small">Game Over</h2>
                <button
                    className="w3-button w3-green w3-margin"
                    onClick={() => {sendReplayRequest(client, thisisme, gamedata, nickname)}}
                >
                    PLAY AGAIN
                </button>
            </div>}
            </div>
        </div>
    );
}

function showMoveList(moveListTitle, moveArray) {
    return <div className="w3-panel">
        <h2 className="w3-black w3-padding-small w3-cell">{moveListTitle}:</h2>
        <table>
        {moveArray.map((move) => (
            <tr key={`${moveListTitle}${move.nickname}`}>
                <td className="w3-green">&nbsp;{move.nickname}:</td>
                <td>&nbsp;
                {move.pass ?
                    <span className="w3-black"> passed</span>
                :
                    <span className={`w3-monospace ${move.valid ? '' : 'w3-red'}`}>{move.word}</span>
                }
                </td>
            </tr>
            ))}
        </table>
    </div>
}

function getPlayerWord(handleKeyDown, word, setWord, gamedata, setSnat, client, thisisme, nickname) {
    return <div className="w3-quarter w3-margin" onKeyDownCapture={handleKeyDown}>
        <label>Enter Word:</label>
        <input className="w3-input w3-border w3-blue myCommonFont" type="text" autoComplete="off" spellCheck="false"
            name="word"
            value={word}
            onChange={(e) => {
                setWord(e.target.value);
            } } />

        {word.toUpperCase().trim().match("^[a-zA-Z]*$") && <button className="w3-button w3-green w3-margin" key="submitWord"
         onClick={() => {submitPlayerWord(word, gamedata, setSnat, client, thisisme, nickname, setWord)}}>
            SUBMIT
        </button>}

        <button className="w3-button w3-red w3-margin" key="passButton"
         onClick={() => {submitPass(setSnat, client, thisisme, gamedata.gameid, nickname, setWord)}}>
            PASS
        </button>


    </div>;
}

function submitPlayerWord(word, gamedata, setSnat, client, thisisme, nickname, setWord) {
    let fixedword = word.toUpperCase().trim();
    // Check if the word is allowed based on previous words this round
    for (let i = 0; i < gamedata.movesThisRound.length; i++) {
        const pw = gamedata.movesThisRound[i].word;
        if (pw === fixedword) {
            setSnat(`You cannot reuse a previous word from this round (${pw}).`);
            return;
        }
        if (pw + 'S' === fixedword && pw.substring(pw.length-1) !== 'S' && gamedata.movesThisRound[i].valid) {
            setSnat(`You cannot add S to a previous valid word (${pw}) from this round unless it ends with S.`);
            return;
        }
    }
    // Check if the have all the fry letters
    for (let i = 0; i < gamedata.fryLetters.length; i++) {
        let letterCountRequired = 0;
        let actualLetterCount = 0;
        for (let j = 0; j < gamedata.fryLetters.length; j++) {
            if (gamedata.fryLetters[i] === gamedata.fryLetters[j]) {
                letterCountRequired = letterCountRequired + 1;
            }
        }
        for (let j = 0; j < fixedword.length; j++) {
            if (gamedata.fryLetters[i] === fixedword[j]) {
                actualLetterCount = actualLetterCount + 1;
            }
        }
        if (actualLetterCount < letterCountRequired) {
            setSnat(`You need the letter ${gamedata.fryLetters[i]} at least ${letterCountRequired} time${letterCountRequired === 1 ? '.' : 's.'}`);
            return;
        }
    }
    // If you get here they have all the required letters. Send the guess to the server.
    setSnat(`Checking your word ... shouldn't take long. If it does, please try rejoining the game.`);
    client.send({
        type: c.CLIENT_TYPE_FYB,
        func: 'move',
        pass: false,
        thisisme: thisisme,
        gameid: gamedata.gameid,
        nickname: nickname,
        timestamp: Date.now(),
        word: fixedword
    });
    setWord('');
}

function submitPass(setSnat, client, thisisme, gameid, nickname, setWord) {
    // If you get here they have all the required letters. Send the guess to the server.
    setSnat(`Sending PASS ... shouldn't take long.`);
    client.send({
        type: c.CLIENT_TYPE_FYB,
        func: 'move',
        pass: true,
        valid: false,
        thisisme: thisisme,
        gameid: gameid,
        nickname: nickname,
        timestamp: Date.now(),
        word: ''
    });
    setWord('');
}

function sendReplayRequest(client, thisisme, gamedata, nickname) {
    client.send({
        type: c.CLIENT_TYPE_FYB,
        func: 'replay',
        thisisme: thisisme,
        game: gamedata,
        nickname: nickname,
        timestamp: Date.now()
    });
}

export default Game;
