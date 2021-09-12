import React, { useState, useEffect} from "react";
import CustomSocket from "../../ws";
import Lobby from '../pb/lobby';
import Game from '../pb/game';
import Examine from '../pb/examine';
import * as c from '../../lib/pb/prisonBreakConstants';
import { v4 as uuid_v4 } from 'uuid';

const PrisonBreak = ({setWhereto}) => {
  const [thisisme] = useState(uuid_v4()); // Generate an id for this participant and send it on web socket messages
  const [isrejoin, setIsrejoin] = useState(false) // Used when player loses connection and rejoins
  const [gameid, setGameid] = useState('')
  const [nickname, setNickname] = useState('')
  const [participant, setParticipant] = useState(c.PARTY_TYPE_UNDETERMINED)
  const [wsmessage, setWsmessage] = useState('') // Latest message from the websocket
  const [racksize, setRacksize] = useState(4); // Default to 4 letter racks
  let host = (process.env.NODE_ENV === 'production' ? 'wss://tilerunner.herokuapp.com' : 'ws://localhost:5000')
   + '/?clientType=pb&thisisme=' + thisisme; // Used via URLSearchParams in server.js
  const acceptMessage = (message) => {
    // If I reference participant here it will always be the initial value.
    setWsmessage(message.data);
  }
  const [client] = useState(new CustomSocket(host, acceptMessage, "pb", thisisme));
  useEffect(() => (
    client.connect()
  ),[]);
  return (
    participant === c.PARTY_TYPE_UNDETERMINED ?
      <Lobby
        setWhereto={setWhereto}
        client={client}
        setIsrejoin={setIsrejoin}
        wsmessage={wsmessage}
        gameid={gameid}
        setGameid={setGameid}
        nickname={nickname}
        setNickname={setNickname}
        setParticipant={setParticipant}
        racksize={racksize}
        setRacksize={setRacksize}
      />
    : participant === c.PARTY_TYPE_EXAMINER ?
      <Examine
        setWhereto={setWhereto}
        client={client}
        wsmessage={wsmessage}
        gameid={gameid}
        nickname={nickname}
        participant={participant}
      />
      :
      <Game
        setWhereto={setWhereto}
        isrejoin={isrejoin}
        participant={participant}
        gameid={gameid}
        nickname={nickname}
        wsmessage={wsmessage}
        client={client}
        racksize={racksize}
      />
  )
}

export default PrisonBreak;