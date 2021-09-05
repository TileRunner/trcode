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
        <h1>Under Construction</h1>
        {participant === c.PARTY_TYPE_UNDETERMINED &&
            <Lobby
             setParticipant={setParticipant}
             wsmessage={wsmessage}
             >
            </Lobby>}
        {participant === c.PARTY_TYPE_PLAYER &&
            <Game
             setParticipant={setParticipant}
             wsmessage={wsmessage}
             >
            </Game>}
        </>
    );
}

