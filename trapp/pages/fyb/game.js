import React, { useState, useEffect } from "react";
import {BrowserView, MobileOnlyView} from 'react-device-detect';
import * as c from '../../lib/fyb/constants';
import { usePrevious } from "../../lib/usePrevious";
import ThinChat from "./thinChatSection";
import Chat from "../pb/chatSection";
import { scrollToBottom } from "../../lib/scrollToBottom";

const Game = ({setWhereto, client, thisisme, wsmessage, nickname, gameid}) => {
    const [chatmsgs, setChatmsgs] = useState([]);
    const [snat, setSnat] = useState('');
    const [warning, setWarning] = useState('');
    const [gamedata, setGamedata] = useState({
        goal: 99
        , gameindex: 0
        , round: 0
        , freeforall: false
        , movesThisRound: []
        , movesPrevRound: []
        , whoseturn: []
        , fryLetters: []
        , players: [{index: 0, nickname: 'Loading...', wins: 0}]});
    const [word, setWord] = useState(''); // my word to submit
    const [syncstamp, setSyncstamp] = useState('');
    const [selected, setSelected] = useState(-1);
    const prevGamedata = usePrevious(gamedata);

    useEffect(() => {
        scrollToBottom("ScrollableChat");
      },[chatmsgs])
  
    useEffect(() => {
        const interval = setInterval(() => {
            if (gamedata.whoseturn.length > 0 && gamedata.players.length > 0) {
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
    },[wsmessage]);

    useEffect(() => {
        // This sound will not play on some mobiles. Something about needing a user interaction (protecting cell data usage).
        if (prevGamedata
            && gamedata.gameindex === prevGamedata.gameindex
            && gamedata.round === prevGamedata.round
            && gamedata.freeforall && !prevGamedata.freeforall) {
            var myaudio = document.createElement('audio');
            // Decide between Oops (phoney played) and Pass (player passed)
            myaudio.src = gamedata.movesThisRound[gamedata.movesThisRound.length-1].pass ? "https://tilerunner.github.io/Pass.m4a" : "https://tilerunner.github.io/Oops.m4a";
            myaudio.play();
        }
      }, [gamedata]); // Play a sound when a rescue is made

    function processGameMessage(message) {
        let messageData = JSON.parse(message);
        if (messageData.type === c.CLIENT_TYPE_FYB) {
            if (messageData.func === c.S2C_FUNC_CHATDATA) {
                // It's goofy, but I delete chat when game ends, then someone can start a new game with the same gameid
                // So remove messages not from a player in this game. I might have to make a chat id to properly handle
                let newmsgs = messageData.msgs.filter(function(e) {
                    for (let index = 0; index < gamedata.players.length; index++) {
                        const player = gamedata.players[index];
                        if (player.nickname === e.from) {
                            return true;
                        }
                    }
                    return false;
                })
                setChatmsgs(newmsgs);
            } else if (messageData.func === c.S2C_FUNC_GAMEDATA) {
                /* SERVER SENT GAME DATA
                For a regular update due to player activity, this client needs the update.

                For dropped connections which made this client send a rejoin to update server's
                   info for this client, which makes the server sends game info to this client,
                   this client is already up to date and does not need the update. We do not take
                   the update so as not to upset the fry letter rearrangements this client may have
                   made.
                */
                if (messageData.game.gameindex !== gamedata.gameindex
                    || messageData.game.round !== gamedata.round
                    || messageData.goal !== gamedata.goal
                    || messageData.players.length !== gamedata.players.length
                    || messageData.game.movesThisRound.length !== gamedata.movesThisRound.length
                    )
                {
                    setSnat(messageData.snat);
                    setSelected(-1);
                    setGamedata(messageData.game);
                    setSyncstamp(messageData.game.syncstamp);
                    setWarning('');
                }
            } else if (messageData.func === c.S2C_FUNC_GAMECREATED) {
                // Nothing to do, this is really for the lobby dwellers
            } else {
                // I think this happens when a web socket connection drops and the new one loses the gameid on the server wss.clients
                // So send a rejoin request to get the server back on track
                client.send({
                    type: c.CLIENT_TYPE_FYB,
                    func: 'rejoin',
                    thisisme: thisisme,
                    gameid: gamedata.gameid,
                    nickname: nickname,
                    timestamp: Date.now()
                });
            }
        }
    }

    const handleKeyDown = (event) => {
        if (!meToEnterWord()) {
            return;
        }
        if (event.key === "Enter") {
            event.preventDefault();
            submitPlayerWord(word, gamedata, setWarning, client, thisisme, nickname, setWord);
            return;
        }
    }

    const meToEnterWord = () => {
        return (gamedata.whoseturn.indexOf(nickname) > -1);
    }

    const dropper = () => {
        return gamedata.players.filter(p => {return p.nickname === nickname && p.dropped;}).length > 0;
    }

    const GameSection = <div>
        <div className="trSubtitle">
            {gameid}: {nickname}
        </div>
        <table className="trTable">
            <tbody>
                <tr>
                    <th colSpan="2">First to {gamedata.goal} wins!</th>
                </tr>
                {gamedata.players.map((pl,index) => (
                    <tr key={`Player.${index}.${pl.nickname}`}>
                        <td>
                            <BrowserView>
                                {pl.dropped && <span className="trDanger"></span>}
                                {pl.nickname}
                                {pl.wins > 0 && <span> (Won {pl.wins})</span>}
                                <span className="floatright">:</span>
                            </BrowserView>
                            <MobileOnlyView>
                                {pl.nickname}
                                {pl.wins > 0 && <span> ({pl.wins})</span>}
                                <span className="floatright">:</span>
                            </MobileOnlyView>
                        </td>
                        <td>
                            {pl.points < 10 ? <span>&nbsp;</span> : ''}{pl.points}&nbsp;
                            {pl.points >= gamedata.goal && <span className="trEmphasis"> Winner!&nbsp;</span>}
                        </td>
                    </tr>
                ))}
                {gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 &&
                    <tr>
                        <th colSpan="2">Previous round:</th>
                    </tr>}
                {gamedata.movesPrevRound && gamedata.movesPrevRound.length > 0 &&
                    showMoveList('movesPrevRound', gamedata.movesPrevRound)}
                {gamedata.movesThisRound && gamedata.movesThisRound.length > 0 &&
                    <tr>
                        <th colSpan="2">This round:</th>
                    </tr>}
                {gamedata.movesThisRound && gamedata.movesThisRound.length > 0 &&
                    showMoveList('movesThisRound', gamedata.movesThisRound)}
                {!gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 &&
                    <tr>
                        <th colSpan="2">Free-for-all:</th>
                    </tr>}
                {!gamedata.freeforall && gamedata.freeforallMoves && gamedata.freeforallMoves.length > 0 &&
                    showMoveList('ffaMoves', gamedata.freeforallMoves)}
            </tbody>
        </table>
        {gamedata.whoseturn.length > 0 &&
            <div>
                <div className="trParagraph">Fry Letters:
                    <button className="trButton fryLetterActionButton" onClick={() => {
                        let shuffleSize = gamedata.fryLetters.length;
                        let beforeShuffle = [...gamedata.fryLetters];
                        let afterShuffle = [];
                        while (afterShuffle.length < shuffleSize) {
                            let rand = Math.floor(Math.random() * beforeShuffle.length);
                            afterShuffle.push(beforeShuffle[rand]);
                            beforeShuffle.splice(rand, 1);
                        };
                        let newGamedata = JSON.parse(JSON.stringify(gamedata));
                        newGamedata.fryLetters = [...afterShuffle];
                        setGamedata(newGamedata);
                    } }>
                        <i className="material-icons fryLetterActionButtonIcon">cached</i>
                    </button>
                    <button className="trButton fryLetterActionButton" onClick={() => {
                        let sortwork = [...gamedata.fryLetters];
                        sortwork.sort();
                        let newGamedata = JSON.parse(JSON.stringify(gamedata));
                        newGamedata.fryLetters = [...sortwork];
                        setGamedata(newGamedata);
                    } }>
                        <i className="material-icons fryLetterActionButtonIcon">sort_by_alpha</i>
                    </button>
                </div>
                <div className="fryLetterDiv">
                    {gamedata.fryLetters.map((fl, i) => (
                        <span key={`FryLetter${i}`}
                            className={i === selected ? "fybFryLetter Selected" : "fybFryLetter"}
                            onDoubleClick={() => {
                                let moveLetter = gamedata.fryLetters[i];
                                let shiftedLetters = [...gamedata.fryLetters];
                                shiftedLetters.splice(i, 1);
                                shiftedLetters.push(moveLetter);
                                let newGamedata = JSON.parse(JSON.stringify(gamedata));
                                newGamedata.fryLetters = [...shiftedLetters];
                                setGamedata(newGamedata);
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
                                    let moveLetter = gamedata.fryLetters[selected];
                                    for (let index = 0; index < gamedata.fryLetters.length; index++) {
                                        const element = gamedata.fryLetters[index];
                                        if (index === i) {
                                            shiftedLetters.push(moveLetter);
                                        }
                                        if (index !== selected) {
                                            shiftedLetters.push(element);
                                        }
                                    }
                                    let newGamedata = JSON.parse(JSON.stringify(gamedata));
                                    newGamedata.fryLetters = [...shiftedLetters];
                                    setGamedata(newGamedata);
                                    setSelected(-1);
                                }
                            } }
                        >{fl}</span>
                    ))}
                </div>
                <div className="trParagraph">
                    (#Answers: {gamedata.numPossibleAnswers})
                </div>
            </div>}
        {meToEnterWord() &&
            getPlayerWord(handleKeyDown, word, setWord, gamedata, setWarning, client, thisisme, nickname)}
        <div>
            {gamedata.gameOver &&
                <div className="trParagraph">
                    Game Over&nbsp;
                    {!dropper() && gamedata.players.filter(p => {return !p.dropped;}).length > 1 &&
                        <button
                            className="trButton"
                            onClick={() => { sendReplayRequest(client, thisisme, gamedata, nickname); } }
                        >
                            PLAY AGAIN
                        </button>
                    }
                </div>}
            <div className="trParagraph">{snat}</div>
            {warning && <div className="trParagraph trWarning">{warning}</div>}
        </div>
    </div>;
    return (
        <div className="trBackground">
            <div className="trTitle">
                Fry Your Brain
                <button className="trButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
            </div>
            <MobileOnlyView>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            {GameSection}
                        </div>
                        <div className="col-4">
                            <ThinChat gameid={gameid} client={client} nickname={nickname} msgs={chatmsgs} setMsgs={setChatmsgs}/>
                        </div>
                    </div>
                </div>
            </MobileOnlyView>
            <BrowserView>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            {GameSection}
                        </div>
                        <div className="col-6">
                            <Chat gameid={gameid} client={client} nickname={nickname} msgs={chatmsgs} setMsgs={setChatmsgs}/>
                        </div>
                    </div>
                </div>
            </BrowserView>
            {!dropper() && !gamedata.gameOver &&
                <button className="trButton" key="dropButton"
                    onClick={() => {submitDrop(setWarning, client, thisisme, gamedata.gameid, nickname)}}>
                    QUIT
                </button>
            }
        </div>
    );
}

function showMoveList(moveListKey, moveArray) {
    return (
        moveArray.map((move) => (
            <tr key={`${moveListKey}${move.nickname}`}>
                <td>{move.nickname}<span className="floatright">:</span></td>
                <td>
                {move.pass ?
                    <span className="trDanger"> passed</span>
                :
                <>
                <BrowserView>
                    <span className={`${move.valid ? '' : 'trDanger'}`}>
                        {move.word}
                        {move.earned && <span> ({move.earned} pts)</span>}
                    </span>
                </BrowserView>
                <MobileOnlyView>
                    <span className={`${move.valid ? '' : 'trDanger'} ${move.word.length > 10 && move.earned ? 'long' : move.word.length > 13 ? 'long' : ''}`}>
                        {move.word}
                        {move.earned && <span> ({move.earned} pts)</span>}
                    </span>
                </MobileOnlyView>
                </>
                }
                </td>
            </tr>
        )))
}

function getPlayerWord(handleKeyDown, word, setWord, gamedata, setWarning, client, thisisme, nickname) {
    return <div onKeyDownCapture={handleKeyDown}>
        <div className="trEmphasis">Enter Word:</div>
        <input
            type="text" autoComplete="off" spellCheck="false"
            name="word"
            value={word}
            onChange={(e) => {
                setWord(e.target.value);
            } } />
        <div>
            {word.toUpperCase().trim().match("^[a-zA-Z]*$") && 
                <button className="trButton" key="submitWord"
                onClick={() => {submitPlayerWord(word, gamedata, setWarning, client, thisisme, nickname, setWord)}}>
                    SUBMIT
                </button>
            }

            <button className="trButton" key="passButton"
            onClick={() => {submitPass(setWarning, client, thisisme, gamedata.gameid, nickname, setWord)}}>
                PASS
            </button>

        </div>
    </div>;
}

function submitPlayerWord(word, gamedata, setWarning, client, thisisme, nickname, setWord) {
    let fixedword = word.toUpperCase().trim();
    // Check if the word is allowed based on previous words this round
    for (let i = 0; i < gamedata.movesThisRound.length; i++) {
        const pw = gamedata.movesThisRound[i].word;
        if (pw === fixedword) {
            setWarning(`You cannot reuse a previous word from this round (${pw}).`);
            return;
        }
        if (pw + 'S' === fixedword && pw.substring(pw.length-1) !== 'S' && gamedata.movesThisRound[i].valid) {
            setWarning(`You cannot add S to a previous valid word (${pw}) from this round unless it ends with S.`);
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
            setWarning(`You need the letter ${gamedata.fryLetters[i]} at least ${letterCountRequired} time${letterCountRequired === 1 ? '.' : 's.'}`);
            return;
        }
    }
    // If you get here they have all the required letters. Send the guess to the server.
    setWarning(`Checking your word ... shouldn't take long. If it does, please try rejoining the game.`);
    client.send({
        type: c.CLIENT_TYPE_FYB,
        func: 'move',
        pass: false,
        thisisme: thisisme,
        gameid: gamedata.gameid,
        nickname: nickname,
        timestamp: Date.now(),
        clientRound: gamedata.round, // for checking re-submissions
        clientMovesLength: gamedata.movesThisRound.length, // for checking re-submissions
        word: fixedword
    });
    setWord('');
}

function submitPass(setWarning, client, thisisme, gameid, nickname, setWord) {
    // If you get here they have all the required letters. Send the guess to the server.
    setWarning(`Sending PASS ... shouldn't take long.`);
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

function submitDrop(setWarning, client, thisisme, gameid, nickname) {
    setWarning(`Sending DROP ... shouldn't take long.`);
    client.send({
        type: c.CLIENT_TYPE_FYB,
        func: 'drop',
        thisisme: thisisme,
        gameid: gameid,
        nickname: nickname,
        timestamp: Date.now()
    });
}

function sendReplayRequest(client, thisisme, gamedata, nickname) {
    client.send({
        type: c.CLIENT_TYPE_FYB,
        func: 'replay',
        thisisme: thisisme,
        game: gamedata,
        gameid: gamedata.gameid,
        nickname: nickname,
        timestamp: Date.now()
    });
}

export default Game;
