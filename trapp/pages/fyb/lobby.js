import React, { useState, useEffect } from "react";
//import Link from "next/link";
import * as c from '../../lib/fyb/constants';

const Lobby = ({setWhereto, client, thisisme, setParticipant, wsmessage, nickname, setNickname, gameid, setGameid, numPlayers, setNumPlayers}) => {
    const [snat, setSnat] = useState('');
    const [gotNickname, setGotNickname] = useState(false);
    const [mainAction, setMainAction] = useState('');
    const [goal, setGoal] = useState(11); // How many points needed to win
    useEffect(() => {
        let msg = wsmessage;
        if (msg !== '') processLobbyMessage(msg);
    },[wsmessage]);
    function processLobbyMessage(message) {
        let messageData = JSON.parse(message);
        if (messageData.type === c.CLIENT_TYPE_FYB) {
            if (messageData.func === c.S2C_FUNC_GAMEDATA) {
                if (messageData.thisisme === thisisme) { // I created or rejoined
                    // Stick to what was requested
                    setGameid(messageData.game.gameid);
                    setNumPlayers(messageData.game.numPlayers);
                    setParticipant(c.PARTY_TYPE_PLAYER);
                } else {
                    setSnat(`${messageData.nickname} just created game ${messageData.gameid}.`);
                }
            } else if (messageData.func === 'gameidtaken') {
                setSnat('That game ID is already taken');
            } else if (messageData.func === 'gamejoined') {
                if (messageData.thisisme === thisisme) { // I joined
                    setGameid(messageData.game.gameid);
                    setNumPlayers(messageData.game.numPlayers);
                    setParticipant(c.PARTY_TYPE_PLAYER);
                } else {
                    setSnat(`${messageData.nickname} just joined game ${messageData.game.gameid}.`);
                }
            } else if (messageData.func === 'gameidunknown') {
                setSnat('That game ID is not being used');
            } else if (messageData.func === 'gamefull') {
                setSnat('That game is full');
            } else if (messageData.func === 'notinthatgame') {
                setSnat('You are not in that game');
            } else if (messageData.func === 'otherclientfound') {
                setSnat('That nickname is already in that game');
            } else if (messageData.func === c.S2C_FUNC_GAMECREATED) {
                setSnat(`${messageData.nickname} created game ${messageData.gameid}`);
            } else if (messageData.func === 'gamelist') {
                setSnat(messageData.gamelist);
            } else {
                setSnat(`Unhandled message: ${message}`);
            }
        }
    }

    return (
        <div className="fybLobby">
            <div className="fybHeaderDiv">
                <span className="h2">Fry Your Brain</span>
                <button className="fybHomeButton" onClick={() => {setWhereto('menu');}}>
                    <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                </button>
            </div>
            <p>{snat}</p>
            {!gotNickname && getNickname(nickname, setNickname, setGotNickname)}
            {gotNickname && !mainAction && getMainAction(setMainAction)}
            {gotNickname && mainAction === 'C' && createGame(client, thisisme, gameid, setGameid, numPlayers, setNumPlayers, goal, setGoal, nickname)}
            {gotNickname && mainAction === 'J' && joinGame(client, thisisme, gameid, setGameid, nickname)}
            {gotNickname && mainAction === 'R' && rejoinGame(client, thisisme, gameid, setGameid, nickname)}
            <div className="fivepxdivider">&nbsp;</div>
        </div>
    );
}

function getNickname(nickname, setNickname, setGotNickname) {
    return <div>
        <div>
            <label>Nickname:</label>
            <input
                type="text"
                name="nickname"
                value={nickname}
                onChange={(e) => {
                    setNickname(e.target.value.trim());
                } } />
        </div>
        {nickname && <div>
            <button
                className="fybLobbyButton"
                type="submit"
                onClick={() => {
                    setGotNickname(true);
                }}>
                SUBMIT
            </button>
        </div>}
    </div>;
}

function getMainAction(setMainAction) {
    return <div>
        <p>
            <button
                className="fybLobbyButton"
                type="submit"
                id="chooseCreateGame"
                onClick={() => {
                    setMainAction('C');
                }}>
                CREATE A GAME
            </button>
        </p>
        <p>
            <button
                className="fybLobbyButton"
                type="submit"
                id="chooseJoinGame"
                onClick={() => {
                    setMainAction('J');
                }}>
                JOIN A GAME
            </button>
        </p>
        <p>
            <button type="submit"
                className="fybLobbyButton"
                id="chooseRejoinGame"
                onClick={() => {
                    setMainAction('R');
                }}>
                REJOIN A GAME
            </button>
        </p>
    </div>;
}

function createGame(client, thisisme, gameid, setGameid, numPlayers, setNumPlayers, goal, setGoal, nickname) {
    return <div>
        <div className="fybHeaderDiv">
            <span className="h2">Create Game</span>
        </div>
        <table>
            <tr>
                <td><label>Game ID:</label></td>
                <td><input
                    type="text"
                    name="gameid"
                    value={gameid}
                    onChange={(e) => {
                        setGameid(e.target.value.trim());
                    } } /></td>
            </tr>
            <tr>
                <td><label># Players:</label></td>
                <td><input
                    type="number"
                    name="numPlayers"
                    value={numPlayers}
                    onChange={(e) => { setNumPlayers(e.target.value); } } 
                    /></td>
            </tr>
            <tr>
                <td><label>Pts to win:</label></td>
                <td><input
                    type="number"
                    name="goal"
                    value={goal}
                    onChange={(e) => { setGoal(e.target.value); } } 
                    /></td>
            </tr>
        </table>
        {gameid && numPlayers > 1 && numPlayers < 7 && goal > 2 && goal < 22 &&
            <button
                className="fybLobbyButton"
                id="requestCreateGame"
                type="submit"
                onClick={() => {sendCreateGameRequest(client, thisisme, gameid, numPlayers, goal, nickname);}}>
                SUBMIT
            </button>
        }
        <div className="fybInputWarning">
            {!gameid &&
                <p>Game ID is required</p>
            }
            {!(numPlayers > 1 && numPlayers < 7) &&
                <p># Players is 2-6</p>
            }
            {!(goal > 2 && goal < 22) &&
                <p>Pts to win is 3-21</p>
            }
        </div>
    </div>;
}

function sendCreateGameRequest(client, thisisme, gameid, numPlayers, goal, nickname) {
    client.send({
        type: c.CLIENT_TYPE_FYB,
        func: 'create',
        thisisme: thisisme,
        gameid: gameid,
        numPlayers: numPlayers,
        goal: goal,
        nickname: nickname,
        timestamp: Date.now()
    });
}

function joinGame(client, thisisme, gameid, setGameid, nickname) {
    return <div>
        <div className="fybHeaderDiv">
            <span className="h2">Join Game</span>
        </div>
        <table>
            <tr>
                <td>
                    <label>Game ID:</label>
                </td>
                <td>
                    <input
                    type="text"
                    name="gameid"
                    value={gameid}
                    onChange={(e) => {
                        setGameid(e.target.value.trim());
                    } } />
                </td>
            </tr>
        </table>
        {gameid && <div>
            <button
                className="fybLobbyButton"
                id="requestJoinGame"
                type="submit"
                onClick={() => {sendJoinGameRequest(client, thisisme, gameid, nickname);}}>
                SUBMIT
            </button>
        </div>}
        <div className="fivepxdivider">&nbsp;</div>
        {!gameid &&
            <div className="fybInputWarning">
                <p>Game ID is required</p>
            </div>
        }
    </div>;
}

function sendJoinGameRequest(client, thisisme, gameid, nickname) {
    client.send({
        type: c.CLIENT_TYPE_FYB,
        func: 'join',
        thisisme: thisisme,
        gameid: gameid,
        nickname: nickname,
        timestamp: Date.now()
    });
}

function rejoinGame(client, thisisme, gameid, setGameid, nickname) {
    return <div>
        <div className="fybHeaderDiv">
            <span className="h2">Rejoin Game</span>
        </div>
        <table>
            <tr>
                <td>
                    <label>Game ID:</label>
                </td>
                <td>
                    <input
                    type="text"
                    name="gameid"
                    value={gameid}
                    onChange={(e) => {
                        setGameid(e.target.value.trim());
                    } } />
                </td>
            </tr>
        </table>
        {gameid && <div>
            <button
                className="fybLobbyButton"
                id="requestRejoinGame"
                type="submit"
                onClick={() => {sendRejoinGameRequest(client, thisisme, gameid, nickname);}}>
                SUBMIT
            </button>
        </div>}
        <div className="fivepxdivider">&nbsp;</div>
        {!gameid &&
            <div className="fybInputWarning">
                <p>Game ID is required</p>
            </div>
        }
    </div>;
}

function sendRejoinGameRequest(client, thisisme, gameid, nickname) {
    client.send({
        type: c.CLIENT_TYPE_FYB,
        func: 'rejoin',
        thisisme: thisisme,
        gameid: gameid,
        nickname: nickname,
        timestamp: Date.now()
    });
}

export default Lobby;  
