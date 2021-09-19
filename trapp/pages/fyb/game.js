import React, { useState, useEffect } from "react";
import * as c from '../../lib/fyb/constants';

const Game = ({setWhereto, client, thisisme, setParticipant, wsmessage, nickname, gameid, numPlayers}) => {
    const [snat, setSnat] = useState('');
    const [gamedata, setGamedata] = useState({whoseturn:-1, players:[{index: 0, nickname: 'Loading...'}]});
    const [word, setWord] = useState(''); // my word to submit
    const [syncstamp, setSyncstamp] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
          client.send({
              type: c.CLIENT_TYPE_FYB,
              func: 'interval',
              syncstamp: syncstamp,
              thisisme: thisisme,
              nickname: nickname,
              gameid: gamedata.gameid
          });
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
                console.log(messageData.game);
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
            submitPlayerWord(word, gamedata.fryLetters, setSnat, client, thisisme, gameid, nickname);
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
            <h1>Game under construction</h1>
            <p>{snat}</p>
            <div className="w3-container w3-responsive w3-quarter">
                <table className="w3-table w3-card">
                    <thead>
                        <tr className="w3-teal">
                            <th>Player</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gamedata.players.map((pl) => (
                            <tr key={`Player${pl.index}`} className="w3-green">
                                <td>{pl.nickname}</td>
                                <td class="w3-monospace">&nbsp;&nbsp;{pl.points < 10 ? <span>&nbsp;</span> : ''}{pl.points}</td>
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
                            {pwm.nickname} played {pwm.word} {pwm.valid ? '(valid)' : '(invalid)'}
                        </p>
                    ))}
                </div>
            }
            {gamedata.movesThisRound && gamedata.movesThisRound.length > 0 &&
                <div className="w3-container">
                    <h2>Moves this round:</h2>
                    {gamedata.movesThisRound.map((mtr) => (
                        <p key={`PlayerWhoMovedThisRound${mtr.nickname}`}>
                            {mtr.nickname} played {mtr.word} {mtr.valid ? '(valid)' : '(invalid)'}
                        </p>
                    ))}
                </div>
            }
            {gamedata.fryLetters &&
                <div className='w3-container'>
                    <h2 className="w3-white w3-quarter">Fry Letters: {gamedata.fryLetters}</h2>
                </div>
            }
            {meToEnterWord() &&
                getPlayerWord(handleKeyDown, word, setWord, gamedata.fryLetters, setSnat, client)
            }
        </div>
    );
}

function getPlayerWord(handleKeyDown, word, setWord, fryLetters, setSnat, client) {
    return <div className="w3-quarter w3-margin" onKeyDownCapture={handleKeyDown}>
        <label>Enter Word:</label>
        <input className="w3-input w3-border w3-blue myCommonFont" type="text"
            name="word"
            value={word}
            onChange={(e) => {
                setWord(e.target.value.toUpperCase());
            } } />
    </div>;
}

async function submitPlayerWord(word, fryLetters, setSnat, client, thisisme, gameid, nickname) {
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
        valid: jdata.exists,
        thisisme: thisisme,
        gameid: gameid,
        nickname: nickname,
        timestamp: Date.now(),
        word: word
    });
}

export default Game;
