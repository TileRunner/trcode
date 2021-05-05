import React, { useState, useEffect} from "react";
import CustomSocket from "../../ws";
import Lobby from '../pb/lobby';
import Game from '../pb/game';
import * as c from '../../lib/pbconstants';

export default function PrisonBreak() {
  const [isrejoin, setIsrejoin] = useState(false) // Used when player loses connection and rejoins
  const [gameid, setGameid] = useState('')
  const [nickname, setNickname] = useState('')
  const [participant, setParticipant] = useState(c.PARTY_TYPE_UNDETERMINED)
  const [wsmessage, setWsmessage] = useState('') // Latest messages from the websocket
  const [racksize, setRacksize] = useState(4); // Default to 4 letter racks
  let host = process.env.NODE_ENV === 'production' ? 'wss://tilerunner.herokuapp.com' : 'ws://localhost:5000';
  const acceptMessage = (message) => {
    // If I reference participant here it will always be the initial value.
    setWsmessage(message.data)
  }
  const [client] = useState(new CustomSocket(host, acceptMessage, "pb"));
  useEffect(() => (
    client.connect()
  ),[]);
  return (
    participant === c.PARTY_TYPE_UNDETERMINED ?
      <Lobby
        client={client}
        setIsrejoin={setIsrejoin}
        wsmessage={wsmessage}
        // client={client}
        gameid={gameid}
        setGameid={setGameid}
        nickname={nickname}
        setNickname={setNickname}
        setParticipant={setParticipant}
        racksize={racksize}
        setRacksize={setRacksize}
      />
    :
      <Game
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
