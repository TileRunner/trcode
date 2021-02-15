import React from "react";

export function Lobby({ gameid, setGameid, setPrisonersOrGuards, setInlobby, wsmsgs }) {
  return (
    <div>
      <p>In the lobby</p>
      <label>Game id:&nbsp;</label>
      <input
        name="gameid"
        value={gameid}
        onChange={(e) => {
          setGameid(e.target.value);
        }} />
      <label>&nbsp;</label>
      <button
        id="startgame"
        onClick={function () {
          if (gameid.length > 0) {
            setPrisonersOrGuards("P");
            setInlobby(false);
          }
        }}
      >
        Start Game
      </button>
      <label>&nbsp;</label>
      <button
        id="joingame"
        onClick={function () {
          if (gameid.length > 0) {
            setPrisonersOrGuards("G");
            setInlobby(false);
          }
        }}
      >
        Join Game
      </button>
      {wsmsgs.map((msg, inx) => (
        <li key={inx}>{msg}</li>
      ))}
    </div>
  );
}
