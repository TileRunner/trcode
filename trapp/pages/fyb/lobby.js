import React, { useState, useEffect } from "react";
import Link from "next/link";
import * as c from '../../lib/fyb/constants';

const Lobby = ({setWhereto, client, thisisme, setParticipant, wsmessage, nickname, setNickname, gameid, setGameid, numPlayers, setNumPlayers}) => {
    const [snat, setSnat] = useState('');
    const [gotNickname, setGotNickname] = useState(false);
    const [createOrJoin, setCreateOrJoin] = useState('');
    useEffect(() => {
        let msg = wsmessage;
        if (msg !== '') processLobbyMessage(msg);
      },[wsmessage])
    function processLobbyMessage(message) {
        let messageData = JSON.parse(message);
        setSnat(message);
        if (messageData.type === 'fyb') {
            if (messageData.func === 'gamecreated') {
                if (messageData.thisisme === thisisme) { // I created
                    // Stick to what was requested
                    if (gameid !== messageData.game.gameid) {setGameid(messageData.game.gameid);}
                    if (numPlayers !== messageData.game.numPlayers) {setNumPlayers(messageData.game.numPlayers);}
                    setParticipant(c.PARTY_TYPE_PLAYER);
                } else {
                    setSnat(`${messageData.nickname} just created game ${messageData.gameid}.`);
                }
            } else if (messageData.func === 'gameidtaken') {
                setSnat('That game ID is already taken');
            } else if (messageData.func === 'gamejoined') {
                if (messageData.thisisme === thisisme) { // I joined
                    if (gameid !== messageData.game.gameid) {setGameid(messageData.game.gameid);} // Stick to what was requested
                    setNumPlayers(messageData.game.numPlayers);
                    setParticipant(c.PARTY_TYPE_PLAYER);
                } else {
                    setSnat(`${messageData.nickname} just joined game ${messageData.game.gameid}.`);
                }
            } else if (messageData.func === 'gameidunknown') {
                setSnat('That game ID is not being used');
            } else if (messageData.func === 'gamefull') {
                setSnat('That game is full');
            } else {
                setSnat(`Unhandled message: ${message}`);
            }
        }
    }

    return (
        <div>
            <div className="w3-container w3-teal w3-bar">
                <h1 className="w3-bar-item w3-centre myHeadingFont">Fry Your Brain Lobby</h1>
                <div className="w3-bar-item w3-right">
                    <button className="w3-button" onClick={() => {setWhereto('menu');}}>
                        <i className="material-icons" data-toggle="tooltip" title="Home">home</i>
                    </button>
                </div>
            </div>
            <h1>Lobby under construction</h1>
            <p>{snat}</p>
            {!gotNickname && getNickname(nickname, setNickname, setGotNickname)}
            {gotNickname && !createOrJoin && getCreateOrJoin(setCreateOrJoin)}
            {gotNickname && createOrJoin === 'C' && createGame(client, thisisme, gameid, setGameid, numPlayers, setNumPlayers, nickname)}
            {gotNickname && createOrJoin === 'J' && joinGame(client, thisisme, gameid, setGameid, nickname)}
        </div>
    );
}

function getNickname(nickname, setNickname, setGotNickname) {
    return <div className="w3-row-padding h4">
        <div className="w3-quarter">
            <label>Nickname:</label>
            <input className="w3-input w3-border w3-blue myCommonFont" type="text"
                name="nickname"
                value={nickname}
                onChange={(e) => {
                    setNickname(e.target.value);
                } } />
        </div>
        {nickname && <div className="w3-quarter">
            <button className="w3-button w3-border w3-blue myCommonFont" type="submit"
                onClick={() => {
                    setGotNickname(true);
                }}>
                SUBMIT
            </button>
        </div>}
    </div>;
}

function getCreateOrJoin(setCreateOrJoin) {
    return <div className="w3-row-padding h4">
        <div className="w3-quarter">
            <button className="w3-button w3-border w3-blue myCommonFont" type="submit"
                id="chooseCreateGame"
                onClick={() => {
                    setCreateOrJoin('C');
                }}>
                CREATE A GAME
            </button>
        </div>
        <div className="w3-quarter">
            <button className="w3-button w3-border w3-blue myCommonFont" type="submit"
                id="chooseJoinGame"
                onClick={() => {
                    setCreateOrJoin('J');
                }}>
                JOIN A GAME
            </button>
        </div>
    </div>;
}

function createGame(client, thisisme, gameid, setGameid, numPlayers, setNumPlayers, nickname) {
    return <div className="w3-row-padding h4">
        <div className="w3-quarter">
            <label>Game ID:</label>
            <input className="w3-input w3-border w3-blue myCommonFont" type="text"
                name="gameid"
                value={gameid}
                onChange={(e) => {
                    setGameid(e.target.value);
                } } />
        </div>
        <div className="w3-quarter">
            <label>Number of Players:</label>
            <input className="w3-input w3-border w3-blue myCommonFont" type="number"
                name="numPlayers"
                value={numPlayers}
                onChange={(e) => {
                    if (e.target.value.match(/[23456]/)) { setNumPlayers(e.target.value); }
                } } />
        </div>
        {gameid && <div className="w3-quarter">
            <button
                id="requestCreateGame"
                className="w3-button w3-border w3-blue myCommonFont"
                type="submit"
                onClick={() => {sendCreateGameRequest(client, thisisme, gameid, numPlayers, nickname);}}>
                SUBMIT
            </button>
        </div>}
    </div>;
}

function sendCreateGameRequest(client, thisisme, gameid, numPlayers, nickname) {
    client.send({
        type: 'fyb',
        func: 'create',
        thisisme: thisisme,
        gameid: gameid,
        numPlayers: numPlayers,
        nickname: nickname,
        timestamp: Date.now()
    });
}

function joinGame(client, thisisme, gameid, setGameid, nickname) {
    return <div className="w3-row-padding h4">
        <div className="w3-quarter">
            <label>Game ID to join:</label>
            <input className="w3-input w3-border w3-blue myCommonFont" type="text"
                name="gameid"
                value={gameid}
                onChange={(e) => {
                    setGameid(e.target.value);
                } } />
        </div>
        {gameid && <div className="w3-quarter">
            <button
                id="requestJoinGame"
                className="w3-button w3-border w3-blue myCommonFont"
                type="submit"
                onClick={() => {sendJoinGameRequest(client, thisisme, gameid, nickname);}}>
                SUBMIT
            </button>
        </div>}
    </div>;
}

function sendJoinGameRequest(client, thisisme, gameid, nickname) {
    client.send({
        type: 'fyb',
        func: 'join',
        thisisme: thisisme,
        gameid: gameid,
        nickname: nickname
    });
}

export default Lobby;  
