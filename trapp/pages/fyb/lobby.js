import React, { useState, useEffect } from "react";
import * as c from '../../lib/fyb/constants';

const Lobby = ({setParticipant, wsmessage}) => {
    const [snat, setSnat] = useState('');
    useEffect(() => {
        let msg = wsmessage;
        if (msg !== '') processLobbyMessage(msg);
      },[wsmessage])
    function processLobbyMessage(message) {
        let messageData = JSON.parse(message);
        setSnat(message);
        console.log(`messageData.type = ${messageData.type}`);
    }

    return (
        <>
        <h1>Lobby under construction</h1>
        <button onClick={() => setParticipant(c.PARTY_TYPE_PLAYER)}>
            Play
        </button>
        <p>Snat={snat}</p>
        </>
    );
}

export default Lobby;  