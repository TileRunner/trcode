import React, { useState, useEffect} from "react";
import CustomSocket from "../../ws";
import Lobby from '../pb/lobby';
import Game from '../pb/game';

export default function PrisonBreak() {
  const [isrejoin, setIsrejoin] = useState(false) // Used when player loses connection and rejoins
  const [gameid, setGameid] = useState('')
  const [nickname, setNickname] = useState('')
  const [prisonersOrGuards, setPrisonersOrGuards] = useState('')
  const [wsmessage, setWsmessage] = useState('') // Latest messages from the websocket
  const [racksize, setRacksize] = useState(4); // Default to 4 letter racks
  let host = process.env.NODE_ENV === 'production' ? 'wss://tilerunner.herokuapp.com' : 'ws://localhost:5000';
  const acceptMessage = (message) => {
    // React is hard to understand. If I reference prisonersOrGuards here it will always be the initial value.
    setWsmessage(message.data)
  }
  const [client] = useState(new CustomSocket(host, acceptMessage));
  useEffect(() => (
    client.connect()
  ),[]);
  return (
    prisonersOrGuards === '' ?
      <Lobby
        setIsrejoin={setIsrejoin}
        wsmessage={wsmessage}
        // client={client}
        gameid={gameid}
        setGameid={setGameid}
        nickname={nickname}
        setNickname={setNickname}
        setPrisonersOrGuards={setPrisonersOrGuards}
        racksize={racksize}
        setRacksize={setRacksize}
      />
    :
      <Game
        isrejoin={isrejoin}
        prisonersOrGuards={prisonersOrGuards}
        gameid={gameid}
        nickname={nickname}
        wsmessage={wsmessage}
        client={client}
        racksize={racksize}
      />
  )
}
