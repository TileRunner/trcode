import React, { useState, useEffect } from "react";
import CustomSocket from "../../ws";
import { Game } from "./Components/Game";
import { Lobby } from "./Components/Lobby";

export default function PrisonBreak() {
  const [inlobby, setInlobby] = useState(true);
  const [gameid, setGameid] = useState("");
  const [prisonersOrGuards, setPrisonersOrGuards] = useState("");
  const [wsmsgs, setWsmsgs] = useState([]);
  const [msgid, setMsgid] = useState(0);
  let host =
    process.env.NODE_ENV === "production"
      ? "wss://tilerunner.herokuapp.com"
      : "ws://localhost:5000";
  const acceptMessage = (message) => {
    setMsgid((curr) => curr + 1);
    setWsmsgs((curr) => [...curr, message.data]);
  };
  const removeMessage = (messageData) => {
    let i = wsmsgs.indexOf(messageData);
    let w = [...wsmsgs];
    w.splice(i, 1);
    setWsmsgs(w);
  };
  const [client, setClient] = useState(new CustomSocket(host, acceptMessage));
  useEffect(() => client.connect(), []);
  return inlobby || prisonersOrGuards === "" ? (
    <Lobby
      gameid={gameid}
      setGameid={setGameid}
      setPrisonersOrGuards={setPrisonersOrGuards}
      setInlobby={setInlobby}
      wsmsgs={wsmsgs}
    />
  ) : (
    <Game
      prisonersOrGuards={prisonersOrGuards}
      gameid={gameid}
      msgid={msgid}
      wsmsgs={wsmsgs}
      client={client}
      removeMessage={removeMessage}
    />
  );
}
