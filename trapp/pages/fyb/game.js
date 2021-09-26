import React, { useState, useEffect } from "react";
import * as c from '../../lib/fyb/constants';

const Game = ({setWhereto, client, thisisme, setParticipant, wsmessage, nickname, gameid, numPlayers}) => {
    const [snat, setSnat] = useState('');
    const [gamedata, setGamedata] = useState({whoseturn:-1, players:[{index: 0, nickname: 'Loading...'}]});
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
            submitPlayerWord(word, gamedata.fryLetters, setSnat, client, thisisme, gameid, nickname, setWord);
            return;
        }
    }

    const meToEnterWord = () => {
        if (gamedata.whoseturn < 0) { // Game has not started or has ended
            return false;
        } else if (gamedata.freeforall) { // In free for all round
            if (gamedata.excludedPlayer === nickname) {
                return false;
            }
            for (let i = 0; i < gamedata.playersWhoMoved.length; i++) {
                if (gamedata.playersWhoMoved[i].nickname === nickname) {
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
                    <h4 className="myCommonFont">Nickname: {nickname}</h4>
                    <h4 className="myCommonFont">{numPlayers} player game</h4>
                </div>
                <div className="w3-container w3-cell w3-padding w3-mobile">
                    <button className="w3-button" onClick={() => {setWhereto('menu');}}>
                        <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                    </button>
                </div>
            </div>
            <div className="w3-container w3-responsive w3-quarter">
                <table className="w3-table w3-card">
                    <thead>
                        <tr className="w3-black">
                            <th>Player</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gamedata.players.map((pl) => (
                            <tr key={`Player${pl.index}`} className="w3-green">
                                <td>{pl.nickname}</td>
                                <td class="w3-monospace">
                                    &nbsp;&nbsp;
                                    {pl.points < 10 ? <span>&nbsp;</span> : ''}{pl.points}
                                    {pl.points > 10 && <span class="w3-purple w3-cursive w3-margin w3-wide">Winner!</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {!gamedata.freeforall && gamedata.playersWhoMoved && gamedata.playersWhoMoved.length > 0 &&
                <div class="w3-container">
                    <h2>Previous free for all results:</h2>
                    {gamedata.playersWhoMoved.map((pwm) => (
                        <p key={`PlayerWhoMovedFFA${pwm.nickname}`}>
                            {pwm.pass ?
                                <span>{pwm.nickname} passed</span>
                            :
                                <span>{pwm.nickname} played {pwm.word} {pwm.valid ? '(valid)' : '(invalid)'}</span>
                            }
                        </p>
                    ))}
                </div>
            }
            {gamedata.movesThisRound && gamedata.movesThisRound.length > 0 &&
                <div className="w3-container">
                    <h2>Moves this round:</h2>
                    {gamedata.movesThisRound.map((mtr, index) => (
                        <span key={`PlayerWhoMovedThisRound${mtr.nickname}`}>
                            {mtr.pass ?
                                <span className="w3-red">{mtr.nickname} passed</span>
                            :
                                <span className={`${mtr.valid ? '' : 'w3-red'}`}>{index > 0 && <span>,&nbsp;</span>}{mtr.word}</span>
                            }
                        </span>
                    ))}
                </div>
            }
            {gamedata.fryLetters && gamedata.whoseturn > -1 &&
                <div className='w3-container'>
                    <h2 className="w3-white w3-quarter">Fry Letters: {gamedata.fryLetters}</h2>
                </div>
            }
            {meToEnterWord() &&
                getPlayerWord(handleKeyDown, word, setWord, gamedata.fryLetters, setSnat, client, thisisme, gameid, nickname)
            }
            <div className="w3-container">
            <p>{snat}</p>
            </div>
        </div>
    );
}

function getPlayerWord(handleKeyDown, word, setWord, fryLetters, setSnat, client, thisisme, gameid, nickname) {
    return <div className="w3-quarter w3-margin" onKeyDownCapture={handleKeyDown}>
        <label>Enter Word:</label>
        <input className="w3-input w3-border w3-blue myCommonFont" type="text"
            name="word"
            value={word}
            onChange={(e) => {
                setWord(e.target.value.toUpperCase());
            } } />


        {word && <button className="w3-button w3-green w3-margin" key="submitWord"
         onClick={() => {submitPlayerWord(word, fryLetters, setSnat, client, thisisme, gameid, nickname, setWord)}}>
            SUBMIT
        </button>}

        <button className="w3-button w3-red w3-margin" key="passButton"
         onClick={() => {submitPass(setSnat, client, thisisme, gameid, nickname, setWord)}}>
            PASS
        </button>


    </div>;
}

async function submitPlayerWord(word, fryLetters, setSnat, client, thisisme, gameid, nickname, setWord) {
    // First check if the have all the fry letters
    for (let i = 0; i < fryLetters.length; i++) {
        let letterCountRequired = 0;
        let actualLetterCount = 0;
        for (let j = 0; j < fryLetters.length; j++) {
            if (fryLetters[i] === fryLetters[j]) {
                letterCountRequired = letterCountRequired + 1;
            }
        }
        for (let j = 0; j < word.length; j++) {
            if (fryLetters[i] === word[j]) {
                actualLetterCount = actualLetterCount + 1;
            }
        }
        if (actualLetterCount < letterCountRequired) {
            setSnat(`You need the letter ${fryLetters[i]} at least ${letterCountRequired} time${letterCountRequired === 1 ? '.' : 's.'}`);
            return;
        }
    }
    // If you get here they have all the required letters. Send the guess to the server.
    setSnat(`Checking your word ... shouldn't take long.`);
    let url = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000/ENABLE2K?exists=' : 'https://tilerunner.herokuapp.com/ENABLE2K?exists='
    const response = await fetch(url + word);
    const jdata = await response.json();
    client.send({
        type: c.CLIENT_TYPE_FYB,
        func: 'move',
        pass: false,
        valid: jdata.exists,
        thisisme: thisisme,
        gameid: gameid,
        nickname: nickname,
        timestamp: Date.now(),
        word: word
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

export default Game;
