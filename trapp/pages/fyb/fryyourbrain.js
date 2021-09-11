import React, { useState, useEffect} from "react";
import CustomSocket from "../../ws";
import Lobby from '../fyb/lobby';
import Game from '../fyb/game';
import * as c from '../../lib/fyb/constants';
import { v4 as uuid_v4 } from 'uuid';

export default function FryYourBrain() {
    const [thisisme] = useState(uuid_v4()); // Generate an id for this participant and send it on web socket messages
    const [participant, setParticipant] = useState(c.PARTY_TYPE_UNDETERMINED)
    const [wsmessage, setWsmessage] = useState('') // Latest message from the websocket
    const [nickname, setNickname] = useState('')
    const [gameid, setGameid] = useState('')
    const [numPlayers, setNumPlayers] = useState(2)
    let host = (process.env.NODE_ENV === 'production' ? 'wss://tilerunner.herokuapp.com' : 'ws://localhost:5000')
    + '/?clientType=fyb&thisisme=' + thisisme; // Used via URLSearchParams in server.js
    const acceptMessage = (message) => {
        // If I reference participant here it will always be the initial value.
        setWsmessage(message.data);
    }
    const [client] = useState(new CustomSocket(host, acceptMessage, "fyb", thisisme));
    useEffect(() => (
        client.connect()
    ),[]);
     return (
        <>
        {participant === c.PARTY_TYPE_UNDETERMINED &&
            <Lobby
             client={client}
             thisisme={thisisme}
             setParticipant={setParticipant}
             wsmessage={wsmessage}
             nickname={nickname}
             setNickname={setNickname}
             gameid={gameid}
             setGameid={setGameid}
             numPlayers={numPlayers}
             setNumPlayers={setNumPlayers}
             >
            </Lobby>}
        {participant === c.PARTY_TYPE_PLAYER &&
            <Game
             setParticipant={setParticipant}
             wsmessage={wsmessage}
             nickname={nickname}
             gameid={gameid}
             numPlayers={numPlayers}
             >
            </Game>}
        </>
    );
}

