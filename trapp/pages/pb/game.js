import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import PlayerSection from '../pb/playerSection';
import Board from '../pb/board';
import ShowUnseenTiles from '../pb/unseenTilesSection';
import ShowMoves from '../pb/movesSection';
import * as c from '../../lib/pbconstants';

const movewaittime = 20000; // when waiting for opponent ping every this many milliseconds
const jokes = [
  'Escapee: "I' + "'m free! I'm free!" + '". Little kid: "I'+ "'m four! I'm four!" + '"',
  'Two peanuts were walking down a back alley. One was a salted.',
  "The psychic dwarf escaped! There's a small medium at large!",
  'What do you call a vegetable who has escaped prison? An escapea!',
  "The prisoners fave punctuation is a period. It marks the end of a sentence!",
  "Prison is only one word, but to robbers it's a whole sentence."
];
const initialtiles4 = [
  "A",  "A",  "A",
  "B",
  "C",
  "D",
  "E",  "E",  "E",  "E",
  "F",
  "G",
  "H",
  "I",  "I",  "I",
  "J",
  "K",
  "L",
  "M",
  "N",  "N",
  "O",  "O",  "O",
  "P",
  "Q",
  "R",  "R",
  "S",
  "T",  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "?",  "?",
]; // initial tile pool for 4 letter rack mode
const initialtiles5 = [
  "A",  "A",  "A",  "A",  "A",
  "B",
  "C",
  "D",  "D",
  "E",  "E",  "E",  "E",  "E",  "E",
  "F",
  "G",
  "H",
  "I",  "I",  "I",  "I",  "I",
  "J",
  "K",
  "L",  "L",
  "M",
  "N",  "N",  "N",
  "O",  "O",  "O",  "O",
  "P",
  "Q",
  "R",  "R",  "R",
  "S",  "S",
  "T",  "T",  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "?",  "?",
]; // initial tile pool for 5 letter rack mode
const initialtiles6 = [
  "A",  "A",  "A",  "A",  "A",  "A",  "A",
  "B",  "B",
  "C",  "C",
  "D",  "D",  "D",
  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",
  "F",
  "G",  "G",
  "H",  "H",
  "I",  "I",  "I",  "I",  "I",  "I",  "I",
  "J",
  "K",
  "L",  "L",  "L",
  "M",  "M",
  "N",  "N",  "N",  "N",
  "O",  "O",  "O",  "O",  "O",  "O",
  "P",  "P",
  "Q",
  "R",  "R",  "R",  "R",  "R",
  "S",  "S",  "S",
  "T",  "T",  "T",  "T",
  "U",  "U",  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "?",  "?",
]; // initial tile pool for 6 letter rack mode
const initialtiles7 = [
  "A",  "A",  "A",  "A",  "A",  "A",  "A",  "A",  "A",
  "B",  "B",
  "C",  "C",
  "D",  "D",  "D",  "D",
  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",
  "F",  "F",
  "G",  "G",  "G",
  "H",  "H",
  "I",  "I",  "I",  "I",  "I",  "I",  "I",  "I",  "I",
  "J",
  "K",
  "L",  "L",  "L",  "L",
  "M",  "M",
  "N",  "N",  "N",  "N",  "N",  "N",
  "O",  "O",  "O",  "O",  "O",  "O",  "O",  "O",
  "P",  "P",
  "Q",
  "R",  "R",  "R",  "R",  "R",  "R",
  "S",  "S",  "S",  "S",
  "T",  "T",  "T",  "T",  "T",  "T",
  "U",  "U",  "U",  "U",
  "V",  "V",
  "W",  "W",
  "X",
  "Y",  "Y",
  "Z",
  "?",  "?",
]; // initial tile pool for 7 letter rack mode

const Game = ({isrejoin
    , participant // Prisoners, Guards, or Observer
    , gameid
    , nickname
    , wsmessage
    , client
    , racksize=4 // Option for rack size (give it a default for Build)
    }) => {
    const middle = racksize; // Middle element in row or column array
    const edge = racksize * 2; // Last element in row or column array
    const initialtiles = racksize === 6 ? initialtiles6 : racksize === 7 ? initialtiles7 : racksize === 5 ? initialtiles5 : initialtiles4;
    const initialsquares = Array(edge+1).fill(Array(edge+1).fill(c.SQUARE_UNUSED));
    const initialusedby = Array(edge+1).fill(Array(edge+1).fill(c.USED_BY_NONE));
    const [tiles, setTiles] = useState([...initialtiles]);
    const [ptiles, setPtiles] = useState([]);
    const [gtiles, setGtiles] = useState([]);
    const [squares, setSquares] = useState([...initialsquares]);
    const [usedby, setUsedby] = useState([...initialusedby]);
    const [selection, setSelection] = useState(-1); // relative to rack of player making a play
    const [whoseturn, setWhoseturn] = useState(c.WHOSE_TURN_PRISONERS); // game starts with prisoners play
    const [currentcoords, setCurrentcoords] = useState([]);
    const [rescues, setRescues] = useState(0);
    const [rcd, setRcd] = useState([-1,-1,c.DIR_NONE]);
    const [moves, setMoves] = useState([]); // move history, each element is the array is a json object of info about the move
    const [snapshot, setSnapshot] = useState({
      squares: [...initialsquares],
      usedby: [...initialusedby],
      ptiles: [],
      gtiles: [],
    });
    const [jokeindex, setJokeindex] = useState(0);
    const [allowRewind, setAllowRewind] = useState(false);
    const [oppname, setOppname] = useState('');
    const [chatmsgs, setChatmsgs] = useState([]);
    // const rescueSound = new Audio("https://tilerunner.github.io/yippee.m4a"); // I couldn't get the syntax right to read it from pb folder
    const prevRescues = usePrevious(rescues);
    function usePrevious(value) {
      const ref = useRef();
      useEffect(() => {
        ref.current = value;
      });
      return ref.current;
    }
    useEffect(() => {
      if (rescues > prevRescues) {
          var myaudio = document.createElement('audio');
          myaudio.src = "https://tilerunner.github.io/yippee.m4a";
          myaudio.play();
        // rescueSound.play()
      }
    }, [rescues]); // Play a sound when a rescue is made
    useEffect(() => {
      let newji = jokeindex + 1;
      if (newji >= jokes.length) {
        newji = 0;
      }
      setJokeindex(newji);
      const interval = setInterval(() => {
        // If it is not my turn && the game has not ended
        if (participant !== whoseturn && whoseturn !== c.WHOSE_TURN_GAMEOVER) {
          // I am waiting for opponent move to come through but sometimes it gets missed (no idea why)
          requestGameData(); // Send a request for game data in case opponent moved and we missed the update
        }
      }, movewaittime); // this many milliseconds between above code block executions
      return () => clearInterval(interval);
    }, [whoseturn]); // want up to date value of whoseturn to decide whether to ask for an update
  
    useEffect(() => { // This code executes first time Game is used only
      if (!isrejoin && participant === c.PARTY_TYPE_PRISONERS) { // Prisoner is starting the game so pick racks
        let tempPTiles = [];
        let tempGTiles = [];
        let tempTiles = [...initialtiles];
        while (tempPTiles.length < racksize) {
          let rand = Math.floor(Math.random() * tempTiles.length);
          tempPTiles.push(tempTiles[rand]);
          tempTiles.splice(rand, 1);
          rand = Math.floor(Math.random() * tempTiles.length);
          tempGTiles.push(tempTiles[rand]);
          tempTiles.splice(rand, 1);
        }
        tempPTiles.sort();
        tempGTiles.sort();
        setGtiles(tempGTiles);
        setPtiles(tempPTiles);
        setTiles(tempTiles);
        setSnapshot({
          squares: [...initialsquares],
          usedby: [...initialusedby],
          ptiles: [...tempPTiles],
          gtiles: [...tempGTiles]    
        });
        client.send(
          JSON.stringify({
            type: "pb",
            func: "hello",
            sender: participant,
            gameid: gameid,
            nickname: nickname, // player nickname
            whoseturn: whoseturn,
            racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)
          })
        );
      }
      else
      {
        // Prisoner rejoin or guard join or guard rejoin
        try {
          client.send(
            JSON.stringify({
              gameid: gameid, // the id for the game
              nickname: nickname, // player nickname
              type: "pb", // prisonbreak
              func: "requestgamedata", // request game data
              sender: participant
          }));
        }
        catch {}
      }
    }, []);
    useEffect(() => {
      let msg = wsmessage;
      if (msg !== '') processGameMessage(msg);      
    },[wsmessage])
    useEffect(() => {
      scrollToBottom("ScrollableMoves");
    },[moves])
    useEffect(() => {
      scrollToBottom("ScrollableChat");
    },[chatmsgs])
  
    function putAtMoveStart() {
      setSelection(-1);
      setAllowRewind(false);
      setRcd(-1,-1,c.DIR_NONE);
      setCurrentcoords([]);
    }
  
    function processGameMessage(message) {
      let messageData = JSON.parse(message);
      if (messageData.type === "announce") {
        client.send(
          JSON.stringify({
            type: "pb",
            func: "hello",
            sender: participant,
            gameid: gameid,
            nickname: nickname, // player nickname
            whoseturn: whoseturn,
            racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)
          })
        );
      }
      else if (messageData.gameid === gameid && messageData.type === "pb") { // This instance of a prison break game
        if (messageData.sender != participant && oppname === "" && messageData.nickname && messageData.nickname.length > 0) {
          // Opponent sent a message including their nickname and I don't have their nickname yet
          setOppname(messageData.nickname);
        }
        if (messageData.func === "requestgamedata" && messageData.sender !== participant) { // Opponent requested game info
          client.send(
            JSON.stringify({
              gameid: gameid, // the id for the game
              nickname: nickname, // player nickname
              type: "pb", // prisonbreak
              func: "providegamedata", // provide game data
              sender: participant,
              tiles: tiles,
              squares: squares,
              ptiles: ptiles,
              gtiles: gtiles,
              usedby: usedby,
              whoseturn: whoseturn,
              snapshot: snapshot,
              moves: moves,
              rescues: rescues,
              racksize: racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
              allowRewind: allowRewind
            })
          );
        }
        if (messageData.func === "providegamedata" && messageData.sender !== participant) { 
          // Opponent provided game data but do we need it?
          // If they have a different move count then we need it (they may have undone a move)
          // If they have same move count but a different tile bag count then we need it (no moves made but tiles are picked)
          // If guards join after prisoners made a move then guards have no tiles ("ept" got processed which leaves gtiles alone)
          if (messageData.moves.length !== moves.length
             || messageData.tiles.length !== tiles.length
             || (participant === c.PARTY_TYPE_GUARDS && gtiles.length === 0 && currentcoords.length === 0)
             || (participant === c.PARTY_TYPE_PRISONERS && ptiles.length === 0 && currentcoords.length === 0) // Not sure I need it but...
             ) {
            setTiles(messageData.tiles);
            setSquares(messageData.squares);
            setPtiles(messageData.ptiles);
            setGtiles(messageData.gtiles);
            setUsedby(messageData.usedby);
            setWhoseturn(messageData.whoseturn);
            setSnapshot(messageData.snapshot);
            setMoves(messageData.moves);
            setRescues(messageData.rescues);
            setAllowRewind(messageData.allowRewind);  
          }
        }
        if (messageData.func === "ept" && participant === c.PARTY_TYPE_GUARDS) { // Prisoners sent end prisoners turn, Guards pick it up
          putAtMoveStart();
          setWhoseturn(messageData.whoseturn);
          setSquares(messageData.squares);
          setUsedby(messageData.usedby);
          setPtiles(messageData.ptiles);
          setTiles(messageData.tiles);
          setMoves(messageData.moves);
          setRescues(messageData.rescues);
          setSnapshot({
            squares: [...messageData.squares],
            usedby: [...messageData.usedby],
            ptiles: [...messageData.ptiles],
            gtiles: [...gtiles],
          });
        }
        if (messageData.func === "egt" && participant === c.PARTY_TYPE_PRISONERS) { // Guards sent end guards turn, Prisoners pick it up
          putAtMoveStart();
          setWhoseturn(messageData.whoseturn);
          setSquares(messageData.squares);
          setUsedby(messageData.usedby);
          setGtiles(messageData.gtiles);
          setTiles(messageData.tiles);
          setMoves(messageData.moves);
          setSnapshot({
            squares: [...messageData.squares],
            usedby: [...messageData.usedby],
            ptiles: [...ptiles],
            gtiles: [...messageData.gtiles],
          });       
        }
        if (messageData.func === "undoturn" && messageData.sender !== participant) { 
          // opponent undid their last turn
          putAtMoveStart();
          setTiles(messageData.tiles);
          setPtiles(messageData.ptiles);
          setGtiles(messageData.gtiles);
          setSquares(messageData.squares);
          setUsedby(messageData.usedby);
          setWhoseturn(messageData.whoseturn);
          setRescues(messageData.rescues);
          setMoves(messageData.moves);
          setSnapshot(messageData.snapshot);
        }
        if (messageData.func === "allowundo" && messageData.sender !== participant) {
          // Opponent clicked button to allow undo turn
          setAllowRewind(true);
        }
        if (messageData.func === "chat" && messageData.sender != participant) { // Opponent chat message
          let newChatmsgs = [...chatmsgs, {from: messageData.nickname, msg: messageData.sendmsg}];
          setChatmsgs(newChatmsgs);
        }
      }
    }
    
    // Calling setSelection (from handleKeyDown) then handleBoardSquareClick does not let it recognize selection with the new value
    // So I pass newSelection when I want to also set it, otherwise I pass -1 to instruct it to use current value of selection
    // Also passing newRcd
    const handleBoardSquareClick = (ri, ci, newSelection, newRcd) => {
      let newSquares = [...squares];
      let newUsedby = [...usedby];
      let newPtiles = [...ptiles];
      let newGtiles = [...gtiles];
      let newRow = [...squares[ri]];
      let squarevalue = squares[ri][ci];
      let newCurrentcoords = [...currentcoords];
      let coord = String(ri) + "-" + String(ci);
      let cci = currentcoords.indexOf(coord);
      if (newSelection === -1) {
        newSelection = selection;
        newRcd = rcd;
      }
      if (newSelection > -1 && squarevalue === c.SQUARE_UNUSED) { // tile is selected from rack and clicked square is not used yet
        newRow[ci] =
          whoseturn === c.WHOSE_TURN_PRISONERS ? newPtiles[newSelection] : newGtiles[newSelection];
        newSquares[ri] = [...newRow];
        whoseturn === c.WHOSE_TURN_PRISONERS
          ? newPtiles.splice(newSelection, 1)
          : newGtiles.splice(newSelection, 1);
        let newUsedbyRow = [...newUsedby[ri]];
        newUsedbyRow[ci] = whoseturn;
        newUsedby[ri] = [...newUsedbyRow];
        if (whoseturn === c.WHOSE_TURN_PRISONERS && newSelection === newPtiles.length) { 
          newSelection = newSelection - 1
        }
        if (whoseturn === c.WHOSE_TURN_GUARDS && newSelection === newGtiles.length) { 
          newSelection = newSelection - 1
        }
        setSelection(newSelection);
        setSquares(newSquares);
        setUsedby(newUsedby);
        setPtiles(newPtiles);
        setGtiles(newGtiles);
        setCurrentcoords([...currentcoords, coord]);
        setRcd(newRcd); // key down handler figured it out
        return;
      }
      if (cci > -1) { // clicked square has a tile on it from the current move in progress
        whoseturn === c.WHOSE_TURN_PRISONERS
          ? newPtiles.push(squarevalue)
          : newGtiles.push(squarevalue);
        let newRow = [...newSquares[ri]];
        newRow[ci] = c.SQUARE_UNUSED;
        newSquares[ri] = [...newRow];
        let newUsedbyRow = [...newUsedby[ri]];
        newUsedbyRow[ci] = c.USED_BY_NONE;
        newUsedby[ri] = [...newUsedbyRow];
        setSelection(
          whoseturn === c.WHOSE_TURN_PRISONERS ? newPtiles.length - 1 : newGtiles.length - 1
        );
        newCurrentcoords.splice(cci, 1);
  
        setSquares(newSquares);
        setUsedby(newUsedby);
        setPtiles(newPtiles);
        setGtiles(newGtiles);
        setCurrentcoords(newCurrentcoords);
        setRcd(-1,-1,c.DIR_NONE); // make player click again to set direction
        return;
      }
      // They didn't click a square to place a selected tile there
      // They didn't click a square to remove an existing tile
      if (squares[ri][ci] === c.SQUARE_UNUSED) {
        // There is nothing on the square so they are picking where to place the next tile via keyboard
        let newDirection = rcd[0] !== ri || rcd[1] !== ci ? c.DIR_RIGHT : //click new square, start with right
         rcd[2] === c.DIR_RIGHT ? c.DIR_DOWN : //click same square that was right, change to down
         rcd[2] === c.DIR_DOWN ? c.DIR_NONE : //click same square that was down, change to no direction
         c.DIR_RIGHT; // click same square that was no direction, change to right
        newRcd = [ri,ci,newDirection];
        setRcd(newRcd);
        return;
      }
    };
  
    const handleRackTileClick = (tileindex) => {
      // If no tile is selected already then set the selection
      if (selection === -1) {
        setSelection(tileindex);
        return;
      }
      // If the same tile is already selected then unselect
      if (selection === tileindex) {
        setSelection(-1);
        return;
      }
      // A tile was already selected and they clicked another tile - move the tile
      let newrack = participant === c.PARTY_TYPE_PRISONERS ? [...ptiles] : [...gtiles];
      let movefrom = selection;
      let movetile = newrack[movefrom];
      let moveto = tileindex;
      newrack.splice(movefrom, 1); // remove tile from original selected position
      newrack.splice(moveto,0,movetile); // insert moved tile at the newly selected position
      participant === c.PARTY_TYPE_PRISONERS ? setPtiles(newrack) : setGtiles(newrack);
      setSelection(-1);
    }
  
    const endPrisonersTurn = () => {
      if (!isPlayValid()) {
        return;
      }
      let rewindInfo = getRewindInfo();
      let newRescues = rescues;
      let escapehatches = [
        "0-0",
        "0-" + middle,
        "0-" + edge,
        middle+ "-0",
        middle + "-" + edge,
        edge + "-0",
        edge + "-" + middle,
        edge + "-" + edge
      ]; // coords of escape hatches
      for (var i = 0; i < currentcoords.length; i++) {
        if (escapehatches.indexOf(currentcoords[i]) > -1) {
          newRescues = newRescues + 1;
        }
      }
      let newPtiles = [...ptiles];
      let newTiles = [...tiles];
      while (newPtiles.length < racksize && newTiles.length > 0) {
        let rand = Math.floor(Math.random() * newTiles.length);
        newPtiles.push(newTiles[rand]);
        newTiles.splice(rand, 1);
      }
      newPtiles.sort();
      let newWhoseturn = newPtiles.length > 0 ? c.WHOSE_TURN_GUARDS : c.WHOSE_TURN_GAMEOVER;
      if (usedby[0][0]         !== c.USED_BY_NONE &&
          usedby[0][middle]    !== c.USED_BY_NONE &&
          usedby[0][edge]      !== c.USED_BY_NONE &&
          usedby[middle][0]    !== c.USED_BY_NONE &&
          usedby[middle][edge] !== c.USED_BY_NONE &&
          usedby[edge][0]      !== c.USED_BY_NONE &&
          usedby[edge][middle] !== c.USED_BY_NONE &&
          usedby[edge][edge]   !== c.USED_BY_NONE) {
        newWhoseturn = c.WHOSE_TURN_GAMEOVER; // No escape hatches left
      }
      let playinfo = getPlayInfo();
      let newMove = {by: c.PARTY_TYPE_PRISONERS, type: c.MOVE_TYPE_PLAY, rewindInfo: rewindInfo, mainword: playinfo.mainword, extrawords: playinfo.extrawords, pos: playinfo.pos};
      let newMoves = [...moves, newMove];
      putAtMoveStart();
      setWhoseturn(newWhoseturn);
      setPtiles(newPtiles);
      setTiles(newTiles);
      setMoves(newMoves);
      setRescues(newRescues);
      setSnapshot({
        squares: [...squares],
        usedby: [...usedby],
        ptiles: [...newPtiles],
        gtiles: [...gtiles],
      });
  
      client.send(
        JSON.stringify({
          gameid: gameid, // the id for the game
          nickname: nickname, // player nickname
          type: "pb", // prisonbreak
          func: "ept", // end prisoners turn
          sender: participant,
          squares: squares, // this was being changed as the tiles were being played
          usedby: usedby, // this was being changed as the tiles were being played
          ptiles: newPtiles, // we picked new tiles for prisoners rack
          tiles: newTiles, // we picked new tiles so tile pool changed
          whoseturn: newWhoseturn, // may have ended the game
          racksize: racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
          moves: newMoves, // a move was made
          rescues: newRescues // may have rescued another prisoner
        })
      );
    };
  
    const endGuardsTurn = () => {
      if (!isPlayValid()) {
        return;
      }
      let rewindInfo = getRewindInfo();
      let newGtiles = [...gtiles];
      let newTiles = [...tiles];
      while (newGtiles.length < racksize && newTiles.length > 0) {
        let rand = Math.floor(Math.random() * newTiles.length);
        newGtiles.push(newTiles[rand]);
        newTiles.splice(rand, 1);
      }
      newGtiles.sort();
      let snapsquares = [...squares];
      let snapusedby = [...usedby];
      let snapptiles = [...ptiles];
      let snapgtiles = [...gtiles];
      let newWhoseturn = newGtiles.length > 0 ? c.WHOSE_TURN_PRISONERS : c.WHOSE_TURN_GAMEOVER;
      if (usedby[0][0]         !== c.USED_BY_NONE &&
          usedby[0][middle]    !== c.USED_BY_NONE &&
          usedby[0][edge]      !== c.USED_BY_NONE &&
          usedby[middle][0]    !== c.USED_BY_NONE &&
          usedby[middle][edge] !== c.USED_BY_NONE &&
          usedby[edge][0]      !== c.USED_BY_NONE &&
          usedby[edge][middle] !== c.USED_BY_NONE &&
          usedby[edge][edge]   !== c.USED_BY_NONE) {
        newWhoseturn = c.WHOSE_TURN_GAMEOVER; // No escape hatches left
      }
      let playinfo = getPlayInfo();
      let newMove = {by: c.PARTY_TYPE_GUARDS, type: c.MOVE_TYPE_PLAY, rewindInfo: rewindInfo, mainword: playinfo.mainword, extrawords: playinfo.extrawords, pos: playinfo.pos};
      let newMoves = [...moves, newMove];
      putAtMoveStart();
      setWhoseturn(newWhoseturn);
      setGtiles(newGtiles);
      setTiles(newTiles);
      setMoves(newMoves);
      setSnapshot({
        squares: snapsquares,
        usedby: snapusedby,
        ptiles: snapptiles,
        gtiles: snapgtiles,
      });
  
      client.send(
        JSON.stringify({
          gameid: gameid, // the id for the game
          nickname: nickname, // player nickname
          type: "pb", // prisonbreak
          func: "egt", // end guards turn
          sender: participant,
          squares: squares, // this was being changed as the tiles were being played
          usedby: usedby, // this was being changed as the tiles were being played
          gtiles: newGtiles, // we picked new tiles for guards rack
          tiles: newTiles, // we picked new tiles so tile pool changed
          moves: newMoves, // a move was made
          whoseturn: newWhoseturn, // may have ended the game
          racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)
          })
        );
      };
  
    const swapPrisonersTiles = () => {
      if (tiles.length < racksize) {
        window.alert("Need " + racksize + " tiles in the bag to exchange")
        return;
      }
      let rewindInfo = getRewindInfo();
      let newPtiles = [];
      let newTiles = [...tiles];
      while (newPtiles.length < racksize && newTiles.length > 0) {
        let rand = Math.floor(Math.random() * newTiles.length);
        newPtiles.push(newTiles[rand]);
        newTiles.splice(rand, 1);
      }
      newPtiles.sort();
      newTiles = [...newTiles, ...snapshot.ptiles];
      newTiles.sort();
      let newMove = {by: c.PARTY_TYPE_PRISONERS, type: c.MOVE_TYPE_SWAP, rewindInfo: rewindInfo};
      let newMoves = [...moves, newMove];
      putAtMoveStart();
      setSquares([...snapshot.squares]);
      setUsedby([...snapshot.usedby]);
      setWhoseturn(c.WHOSE_TURN_GUARDS);
      setPtiles(newPtiles);
      setTiles(newTiles);
      setMoves(newMoves);
      setSnapshot({
        squares: [...snapshot.squares],
        usedby: [...snapshot.usedby],
        ptiles: [...newPtiles],
        gtiles: [...gtiles],
      });
  
      client.send(
        JSON.stringify({
          gameid: gameid, // the id for the game
          nickname: nickname, // player nickname
          type: "pb", // prisonbreak
          func: "ept", // end prisoners turn
          sender: participant,
          whoseturn: c.WHOSE_TURN_GUARDS, // swap never ends the game so go to opponent
          racksize: racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
          squares: snapshot.squares, // revert to start of turn squares
          usedby: snapshot.usedby, // revert to start of turn used by
          ptiles: newPtiles, // we picked new tiles for prisoners rack
          tiles: newTiles, // we picked new tiles so tile pool changed
          moves: newMoves, // a move was made
          rescues: rescues // no rescues on an exchange
        })
      );
  
    }
    
    const swapGuardsTiles = () => {
      if (tiles.length < racksize) {
        window.alert("Need " + racksize + " tiles in the bag to exchange")
        return;
      }
      let rewindInfo = getRewindInfo();
      let newGtiles = [];
      let newTiles = [...tiles];
      while (newGtiles.length < racksize && newTiles.length > 0) {
        let rand = Math.floor(Math.random() * newTiles.length);
        newGtiles.push(newTiles[rand]);
        newTiles.splice(rand, 1);
      }
      newGtiles.sort();
      newTiles = [...newTiles, ...snapshot.gtiles];
      newTiles.sort();
      let newMove = {by: c.PARTY_TYPE_GUARDS, type: c.MOVE_TYPE_SWAP, rewindInfo: rewindInfo};
      let newMoves = [...moves, newMove];
      putAtMoveStart();
      setSquares([...snapshot.squares]);
      setUsedby([...snapshot.usedby]);
      setWhoseturn(c.WHOSE_TURN_PRISONERS);
      setGtiles(newGtiles);
      setTiles(newTiles);
      setMoves(newMoves);
      setSnapshot({
        squares: [...snapshot.squares],
        usedby: [...snapshot.usedby],
        ptiles: [...ptiles],
        gtiles: [...newGtiles],
      });
  
      client.send(
        JSON.stringify({
          gameid: gameid, // the id for the game
          nickname: nickname, // player nickname
          type: "pb", // prisonbreak
          func: "egt", // end guards turn
          sender: participant,
          whoseturn: c.WHOSE_TURN_PRISONERS, // swap never ends the game so go to opponent
          racksize: racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
          squares: snapshot.squares, // revert to start of turn squares
          usedby: snapshot.usedby, // revert to start of turn used by
          gtiles: newGtiles, // we picked new tiles for prisoners rack
          tiles: newTiles, // we picked new tiles so tile pool changed
          moves: newMoves // a move was made
        })
      );
  
    }
  
    function isPlayValid() {
      if (squares[middle][middle] === c.SQUARE_UNUSED) {
        window.alert("First play must hit center square");
        return false;
      }
      let numrows = edge+1;
      let numcols = edge+1;
      let lowrow = numrows;
      let highrow = -1;
      let lowcol = numcols;
      let highcol = -1;
      for (var temprow=0; temprow < numrows; ++temprow) {
        for (var tempcol=0; tempcol < numcols; ++tempcol) {
          if (squares[temprow][tempcol] !== c.SQUARE_UNUSED) {
            if (!(temprow > 0 && squares[temprow-1][tempcol] !== c.SQUARE_UNUSED) &&
             !(tempcol > 0 && squares[temprow][tempcol-1] !== c.SQUARE_UNUSED) &&
             !(temprow < edge && squares[temprow+1][tempcol] !== c.SQUARE_UNUSED) &&
             !(tempcol < edge && squares[temprow][tempcol+1] !== c.SQUARE_UNUSED)
             ) {
              window.alert("Each played tile must be part of a word");
              return false;
             }
             if (snapshot.squares[temprow][tempcol] === c.SQUARE_UNUSED) {
               // This square was played on this turn
               if (temprow < lowrow) { lowrow = temprow;}
               if (temprow > highrow) { highrow = temprow;}
               if (tempcol < lowcol) { lowcol = tempcol;}
               if (tempcol > highcol) { highcol = tempcol;}
             }
          }
        }
      }
      if (lowrow === numrows) {
        window.alert("You didn't play any tiles");
        return false;
      }
      if (lowrow !== highrow && lowcol !== highcol) {
        window.alert("Tiles played must be in a straight line");
        return false;
      }
      let playthru = false;
      let hookmade = false;
      for (var temprow = lowrow; temprow <= highrow; ++temprow) {
        for (var tempcol = lowcol; tempcol <= highcol; ++tempcol) {
          if (squares[temprow][tempcol] === c.SQUARE_UNUSED) {
            window.alert("There is a gap in your word");
            return false;
          }
          if (snapshot.squares[temprow][tempcol] !== c.SQUARE_UNUSED) {
            playthru = true;
          }
          if (lowrow === highrow && temprow > 0 && squares[temprow-1][tempcol] !== c.SQUARE_UNUSED) { hookmade = true; }
          if (lowrow === highrow && temprow < edge && squares[temprow+1][tempcol] !== c.SQUARE_UNUSED) { hookmade = true; }
          if (lowcol === highcol && tempcol > 0 && squares[temprow][tempcol-1] !== c.SQUARE_UNUSED) { hookmade = true; }
          if (lowcol === highcol && tempcol < edge && squares[temprow][tempcol+1] !== c.SQUARE_UNUSED) { hookmade = true; }
        }
      }
      // Check play to or from a tile (play through but not either side)
      if (lowrow === highrow && lowcol > 0 && snapshot.squares[lowrow][lowcol-1] !== c.SQUARE_UNUSED) { playthru = true; }
      if (lowrow === highrow && highcol < edge && snapshot.squares[lowrow][highcol+1] !== c.SQUARE_UNUSED) { playthru = true; }
      if (lowcol === highcol && lowrow > 0 && snapshot.squares[lowrow-1][lowcol] !== c.SQUARE_UNUSED) { playthru = true; }
      if (lowcol === highcol && highrow < edge && snapshot.squares[highrow+1][lowcol] !== c.SQUARE_UNUSED) { playthru = true; }
      if (!playthru && !hookmade && snapshot.squares[middle][middle] !== c.SQUARE_UNUSED) {
        window.alert("Words must be connected");
        return false;
      }
      return true;
    }
  
    function getPlayInfo() {
      let playinfo = {};
      let mainword = "";
      let extrawords = [];
      let wordstartcoord = "";
      let numrows = edge+1;
      let numcols = edge+1;
      let lowrow = numrows;
      let highrow = -1;
      let lowcol = numcols;
      let highcol = -1;
      let numcoords = currentcoords.length;
      for (var coord=0; coord < numcoords; ++coord) {
        let row = parseInt(currentcoords[coord].split("-")[0]);
        let col = parseInt(currentcoords[coord].split("-")[1]);
        if (row < lowrow) {
          lowrow = row;
        }
        if (row > highrow) {
          highrow = row;
        }
        if (col < lowcol) {
          lowcol = col;
        }
        if (col > highcol) {
          highcol = col;
        }
      }
      if (lowrow < highrow || numcoords === 1) { // tiles placed on difference rows so play is vertical, or single tile played
        let col = lowcol; // lowcol and highcol will have the same value
        // find the lowest row number of the main word, which may be lower than that of the first played tile
        let lowestrow = lowrow;
        while (lowestrow > 0 && squares[lowestrow-1][col] !== c.SQUARE_UNUSED) {
          lowestrow = lowestrow - 1;
        }
        // find the highest row number of the main word, which may be higher than that of the last played tile
        let highestrow = highrow;
        while (highestrow < edge && squares[highestrow+1][col] !== c.SQUARE_UNUSED) {
          highestrow = highestrow + 1;
        }
        wordstartcoord = c.BOARD_COL_HEADERS[col] + c.BOARD_ROW_HEADERS[lowestrow]; // vertical play coords start with col header
        for (var row = lowestrow; row <= highestrow; ++row) {
          mainword = mainword + squares[row][col];
          let coord = row + "-" + col;
          if (currentcoords.indexOf(coord) > -1) { // This tile was played, check for hooks
            let lowestcol = col;
            while (lowestcol > 0 && squares[row][lowestcol-1] !== c.SQUARE_UNUSED) {
              lowestcol = lowestcol - 1;
            }
            let highestcol = col;
            while (highestcol < edge && squares[row][highestcol+1] !== c.SQUARE_UNUSED) {
              highestcol = highestcol + 1;
            }
            if (lowestcol < highestcol) { // hook was made
              let extraword = "";
              for (var tempcol = lowestcol; tempcol <= highestcol; ++tempcol) {
                extraword = extraword + squares[row][tempcol];
              }
              extrawords = [...extrawords, extraword];
            }
          }
        }
      }
      if (mainword.length < 2) { // Horizontal play or single tile drop that cannot be a vertical play
        let row = lowrow; // lowrow and highrow will have the same value
        // find the lowest col number of the main word, which may be lower than that of the first played tile
        let lowestcol = lowcol;
        while (lowestcol > 0 && squares[row][lowestcol-1] !== c.SQUARE_UNUSED) {
          lowestcol = lowestcol - 1;
        }
        // find the highest col number of the main word, which may be higher than that of the last played tile
        let highestcol = highcol;
        while (highestcol < edge && squares[row][highestcol+1] !== c.SQUARE_UNUSED) {
          highestcol = highestcol + 1;
        }
        wordstartcoord = c.BOARD_ROW_HEADERS[row] + c.BOARD_COL_HEADERS[lowestcol]; // horizontal play coords start with row header
        mainword = ""; // In case we got a 1 letter mainword in the previous block
        extrawords = []; // Ditto
        for (var col = lowestcol; col <= highestcol; ++col) {
          mainword = mainword + squares[row][col];
          let coord = row + "-" + col;
          if (currentcoords.indexOf(coord) > -1) { // This tile was played, check for hooks
            let lowestrow = row;
            while (lowestrow > 0 && squares[lowestrow-1][col] !== c.SQUARE_UNUSED) {
              lowestrow = lowestrow - 1;
            }
            let highestrow = row;
            while (highestrow < edge && squares[highestrow+1][col] !== c.SQUARE_UNUSED) {
              highestrow = highestrow + 1;
            }
            if (lowestrow < highestrow) { // hook was made
              let extraword = "";
              for (var temprow = lowestrow; temprow <= highestrow; ++temprow) {
                extraword = extraword + squares[temprow][col];
              }
              extrawords = [...extrawords, extraword];
            }
          }
        }
      }
      playinfo = {mainword: mainword, extrawords: extrawords, pos: wordstartcoord};
      return playinfo;
    }
  
    function getRewindInfo() { // Must be called before you start setting new values for stuff
      /* Rewind info is everything you need to reverse the move that we do not already have in the new move variable:
          squares: says what tile is on what square
          usedby: says who played what tile on what square (affects styling)
          rack: players rack before move was made 
          tiles: tile pool before picking new tiles
          rescues: rescue count
      */
      let rewindInfo = {
        squares: [...snapshot.squares],
        usedby: [...snapshot.usedby],
        rack: whoseturn === c.WHOSE_TURN_GUARDS ? [...snapshot.gtiles]: [...snapshot.ptiles],
        tiles: [...tiles],
        rescues: rescues
      };
      return rewindInfo;
    }
    function allowUndoLastTurn() {
      if (!allowRewind) {
        setAllowRewind(true);
        client.send(
          JSON.stringify({
            gameid: gameid, // the id for the game
            nickname: nickname, // player nickname
            type: "pb", // prisonbreak
            func: "allowundo", // allow undo last turn
            racksize: racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
            sender: participant // who is allowing it
            })
        );
      }
    }
  
    function performRewind() {
      /* Rewind the last move and take it off the end of the move list */
      let numMoves = moves.length;
      let lastMove = moves[moves.length-1];
      let newSquares = [...lastMove.rewindInfo.squares];
      let newUsedby = [...lastMove.rewindInfo.usedby];
      let newTiles = [...lastMove.rewindInfo.tiles];
      let newPtiles = lastMove.by === c.PARTY_TYPE_PRISONERS ? [...lastMove.rewindInfo.rack] : [...ptiles];
      let newGtiles = lastMove.by === c.PARTY_TYPE_GUARDS ? [...lastMove.rewindInfo.rack] : [...gtiles];
      let newRescues = lastMove.rewindInfo.rescues;
      let newWhoseturn = lastMove.by; // Back to their turn
      let newMoves = [...moves];
      newMoves.splice(numMoves-1,1);
      let newSnapshot = {
        squares: [...newSquares],
        usedby: [...newUsedby],
        gtiles: [...newGtiles],
        ptiles: [...newPtiles]
      };
      putAtMoveStart();
      setTiles(newTiles);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setSquares(newSquares);
      setUsedby(newUsedby);
      setWhoseturn(newWhoseturn);
      setRescues(newRescues);
      setMoves(newMoves);
      setSnapshot(newSnapshot);
      // Just send everything even though some could be hard coded in processMessage by opponent
      client.send(
        JSON.stringify({
          gameid: gameid, // the id for the game
          nickname: nickname, // player nickname
          type: "pb", // prisonbreak
          func: "undoturn", // undo last turn
          racksize: racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
          sender: participant,
          tiles: newTiles, // tile pool
          ptiles: newPtiles, // prisoners rack
          gtiles: newGtiles, // guards rack
          squares: newSquares, // revert to start of turn squares
          usedby: newUsedby, // revert to start of turn used by
          whoseturn: newWhoseturn, // swap never ends the game so go to opponent
          rescues: newRescues, // rescue count
          moves: newMoves, // a move was made
          snapshot: newSnapshot
        })
      );
    }
  
    const recallTiles = () => {
      setSquares([...snapshot.squares]);
      setUsedby([...snapshot.usedby]);
      setPtiles([...snapshot.ptiles]);
      setGtiles([...snapshot.gtiles]);
      setSelection(-1);
      setCurrentcoords([]);
      setRcd([-1,-1,c.DIR_NONE]);
    };
  
    const prisonerPass = () => {
      let rewindInfo = getRewindInfo();
      let newMove = {by: c.PARTY_TYPE_PRISONERS, type: c.MOVE_TYPE_PASS, rewindInfo: rewindInfo};
      let newMoves = [...moves, newMove];
      let newWhoseturn = isDoublePass(newMoves) ? c.WHOSE_TURN_GAMEOVER : c.WHOSE_TURN_GUARDS; // If both players pass then end the game
      recallTiles(); // In case they put some tiles on the board before clicking Pass
      putAtMoveStart();
      setWhoseturn(newWhoseturn);
      setMoves(newMoves);
      client.send(
        JSON.stringify({
          gameid: gameid, // the id for the game
          nickname: nickname, // player nickname
          type: "pb", // prisonbreak
          func: "ept", // end prisoners turn
          sender: participant,
          squares: snapshot.squares, // revert to start of turn squares
          usedby: snapshot.usedby, // revert to start of turn used by
          ptiles: snapshot.ptiles, // prisoners rack did not change
          tiles: tiles, // tile pool did not change
          whoseturn: newWhoseturn, // may have ended the game
          racksize: racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
          moves: newMoves, // a move was made
          rescues: rescues // no rescues on a pass
        })
      );
    }
  
    const guardsPass = () => {
      let rewindInfo = getRewindInfo();
      let newMove = {by: c.PARTY_TYPE_GUARDS, type: c.MOVE_TYPE_PASS, rewindInfo: rewindInfo};
      let newMoves = [...moves, newMove];
      let newWhoseturn = isDoublePass(newMoves) ? c.WHOSE_TURN_GAMEOVER : c.WHOSE_TURN_PRISONERS; // If both players pass then end the game
      recallTiles(); // In case they put some tiles on the board before clicking Pass
      putAtMoveStart();
      setWhoseturn(newWhoseturn);
      setMoves(newMoves);
      client.send(
        JSON.stringify({
          gameid: gameid, // the id for the game
          nickname: nickname, // player nickname
          type: "pb", // prisonbreak
          func: "egt", // end guards turn
          sender: participant,
          squares: snapshot.squares, // revert to start of turn squares
          usedby: snapshot.usedby, // revert to start of turn used by
          gtiles: snapshot.gtiles, // guards rack did not change
          tiles: tiles, // tile pool did not change
          whoseturn: newWhoseturn, // may have ended the game
          racksize: racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
          moves: newMoves // a move was made
        })
      );
    }
  
    function isDoublePass(movelist) {
        let last = movelist.length - 1;
        let secondlast = last - 1;
        return secondlast > -1 &&
          movelist[secondlast].type === c.MOVE_TYPE_PASS &&
          movelist[last].type === c.MOVE_TYPE_PASS;
    }

    const requestGameData = () => {
      client.send(
        JSON.stringify({
          gameid: gameid, // the id for the game
          nickname: nickname, // player nickname
          type: "pb", // prisonbreak
          sender: participant,
          whoseturn: whoseturn, // for lobby to pick up this message
          racksize: racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
          func: "requestgamedata" // request game data
        })
      )
    }
  
    const handleKeyDown = (event) => {
      event.preventDefault();
      if (participant !== whoseturn) {return;}
      if (event.key === "Enter") {
        whoseturn === c.WHOSE_TURN_PRISONERS ? endPrisonersTurn() : endGuardsTurn();
        return;
      }
      if (event.key === "Escape") {
        recallTiles();
        return;
      }
      let lettertest = /^[A-Za-z\?]$/; // single letter or question mark key pressed
      if (event.key.match(lettertest)) {
        let letter = event.key.toUpperCase();
        let rack = whoseturn === c.WHOSE_TURN_PRISONERS ? ptiles : gtiles;
        let newSelection = rack.indexOf(letter);
        if (newSelection === -1) {
          newSelection = rack.indexOf("?"); // Use the blank if they have one
        }
        if (newSelection > -1) { // Pressed letter is on the rack
          let row = rcd[0];
          let col = rcd[1];
          let dir = rcd[2];
          if (row >-1 && col > -1 && dir !== c.DIR_NONE) { // row, col, dir are set to accept keystroke
            // Need to figure out next sqaure to auto-place a tile
            let newRcd = rcd;
            if (dir === c.DIR_RIGHT) { // playing rightwards
              let newc = -1;
              for (var tempcol = col + 1; tempcol < edge + 1 && newc === -1; tempcol++) {
                if (squares[row][tempcol] === c.SQUARE_UNUSED) {newc = tempcol;}
              }
              if (newc === -1) {
                newRcd = [-1,-1,c.DIR_NONE];
              } else {
                newRcd = [row, newc, c.DIR_RIGHT];
              }
              handleBoardSquareClick(row,col,newSelection,newRcd);
              setSelection(-1); // when they are typing they are not selecting rack tiles by clicking them on the rack
              return;
            }
            if (dir === c.DIR_DOWN) { // playing downwards
              let newr = -1;
              let numrows = (racksize*2)+1;
              for (var temprow = row + 1; temprow < numrows && newr === -1; temprow++) {
                if (squares[temprow][col] === c.SQUARE_UNUSED) {newr = temprow;}
              }
              if (newr === -1) {
                newRcd = [-1,-1,c.DIR_NONE];
              } else {
                newRcd = [newr, col, c.DIR_DOWN];
              }
              handleBoardSquareClick(row,col,newSelection,newRcd);
              setSelection(-1); // when they are typing they are not selecting rack tiles by clicking them on the rack
              return;
            }
          }
        }
        return;
      }
      if (event.key === "Backspace" && currentcoords.length > 0) {
        // Same as clicking on a played-this-move tile in terms of returning the tile to the rack
        // However we also want to set up rcd so they can press the key they meant and continue
        let coord = currentcoords[currentcoords.length - 1]; // tile to return to rack
        let newCurrentcoords = [...currentcoords];
        let newPtiles = [...ptiles];
        let newGtiles = [...gtiles];
        let newUsedby = [...usedby];
        let newSquares = [...squares];
        let newRcd = [-1,-1,c.DIR_NONE];
        let newSelection = selection;
        newCurrentcoords.splice(currentcoords.length-1,1);
        let row = parseInt(coord.split("-")[0]);
        let col = parseInt(coord.split("-")[1]);
        let returnedTile = squares[row][col];
        if (whoseturn === c.WHOSE_TURN_PRISONERS) {
          newPtiles.push(returnedTile);
          newSelection = newPtiles.length-1;
        } else {
          newGtiles.push(returnedTile);
          newSelection = newGtiles.length-1;
        }
        newUsedby[row][col] = c.USED_BY_NONE;
        newSquares[row][col] = c.SQUARE_UNUSED;
        let dir = rcd[2];
        if (dir !== c.DIR_NONE) {
          // direction was set so keep it
          newRcd = [row,col,dir];
          if (currentcoords.length === 1) {
            newSelection = -1; // if they backspace all the letters off leave rack tile unselected
          }
        }
        setCurrentcoords(newCurrentcoords);
        setGtiles(newGtiles);
        setPtiles(newPtiles);
        setSquares(newSquares);
        setUsedby(newUsedby);
        setRcd(newRcd);
        setSelection(newSelection);
      }
    }
    return (
      <div className="prisonbreak">
        <div className="w3-display-container w3-teal topBarHeight">
          <div className="w3-display-middle">
            <h1 className="myHeadingFont">Prison Break</h1>
          </div>
          <div className="w3-display-topleft w3-black topBarCorner commonFontFamily">
            Game id: {gameid}
          </div>
          <div className="w3-display-bottomleft w3-orange topBarCorner commonFontFamily">
            Prisoners: {participant === c.PARTY_TYPE_PRISONERS ? nickname : oppname}
          </div>
          <div className="w3-display-topright w3-black topBarCorner commonFontFamily">
            <Link href={"../../"}>
              <a><i className="material-icons" data-toggle="tooltip" title="Home">home</i></a>
            </Link>
          </div>
          <div className="w3-display-bottomright w3-orange topBarCorner commonFontFamily">
            Guards: {participant === c.PARTY_TYPE_PRISONERS ? oppname : nickname}
          </div>
        </div>
        <div className="row">
          <div className="col pbTileAndMovesOuter">
              <ShowUnseenTiles tiles={tiles} othertiles={participant === c.PARTY_TYPE_PRISONERS ? gtiles : ptiles}/>
              <ShowMoves moves={moves}/>
          </div>
          <div className="col pbPlayerOuterSection">
            {participant === c.PARTY_TYPE_PRISONERS ?
              <PlayerSection
                racktiles={ptiles}
                whoseturn={whoseturn}
                selection={selection}
                onClick={(ti) => handleRackTileClick(ti)}
                onClickFinishTurn={() => endPrisonersTurn()}
                onClickTileRecall={() => recallTiles()}
                onClickTileExchange={() => swapPrisonersTiles()}
                onClickPassPlay={() => prisonerPass()}
                onClickUndoLastPlay={() => performRewind()}
                onClickAllowUndo={() => allowUndoLastTurn()}
                participant={participant}
                moves={moves}
                allowRewind={allowRewind}
              />
            :
              <PlayerSection
                racktiles={gtiles}
                whoseturn={whoseturn}
                selection={selection}
                onClick={(ti) => handleRackTileClick(ti)}
                onClickFinishTurn={() => endGuardsTurn()}
                onClickTileRecall={() => recallTiles()}
                onClickTileExchange={() => swapGuardsTiles()}
                onClickPassPlay={() => guardsPass()}
                onClickUndoLastPlay={() => performRewind()}
                onClickAllowUndo={() => allowUndoLastTurn()}
                participant={participant}
                moves={moves}
                allowRewind={allowRewind}
              />
            }
          </div>
          <div className="col">
            {participant === whoseturn ?
              <div className="row" onKeyDownCapture={handleKeyDown}>
                <Board
                  squares={squares}
                  usedby={usedby}
                  rcd={rcd}
                  onClick={(ri, ci) => handleBoardSquareClick(ri, ci, -1,null)}
                  racksize={racksize}
                />
              </div>
            :
              <div className="row">
                <Board
                  squares={squares}
                  usedby={usedby}
                  rcd={rcd}
                  onClick={() => {}}
                  racksize={racksize}
                />
              </div>
            }
          </div>
          <div className="col">
            <ShowRescues rescues={rescues} />
            <Chat gameid={gameid} client={client} nickname={nickname} msgs={chatmsgs} setMsgs={setChatmsgs} participant={participant}/>
          </div>
        </div>
        <div className="w3-display-container w3-teal topBarHeight">
          <div className="w3-display-middle commonFontFamily">
            {whoseturn === c.WHOSE_TURN_GAMEOVER ?
              <h1>Game Over!</h1>
            :
              <p>{jokes[jokeindex]}</p>
            }
          </div>
        </div>
      </div>
    );
  };
  
  const ShowRescues = (props) => {
    return (
      <div className="pbRescuesMade">
        Rescues made: {props.rescues}
      </div>
    );
  };
  
  const Chat = ({gameid, client, nickname, msgs, setMsgs, participant}) => {
    const [nextmsg, setNextmsg] = useState('');
   
    const handleKeyDown = (event) => {
      if (event.key === "Enter" && nextmsg.length > 0) {
        event.preventDefault();
        let newMsgs = [...msgs, {from: nickname, msg: nextmsg}]
        let sendmsg = nextmsg;
        setMsgs(newMsgs);
        setNextmsg('');
        client.send(
          JSON.stringify({
            gameid: gameid, // the id for the game
            nickname: nickname, // player nickname
            type: "pb", // prisonbreak
            func: "chat", // send chat message
            sender: participant, // who sent it
            sendmsg: sendmsg // the message typed in the chat
          })
        );
        return;
      }
      // let chartest = /^[A-Za-z0-9 \.,\(\)\?:!'"]$/; // Allow letter, number, space, period, comma, round brackets, question mark, colon, exclamation mark, quote, double quote
      // if (event.key.match(chartest)) {
      //   let newNextmsg = nextmsg + event.key;
      //   setNextmsg(newNextmsg);
      // }
      if (event.key === "Backspace" && nextmsg.length > 0) {
        event.preventDefault();
        let newNextmsg = nextmsg.slice(0,nextmsg.length-1);
        setNextmsg(newNextmsg);
      }
    }
  
    return (
      <div id="ScrollableChat" className="pbChat">
        <table className="pbChatTable">
          <tbody>
            {msgs.map((value, index) => (
              <tr key={`ChatMessage${index}`}>
                <td className="pbChatFrom">{value.from}</td>
                <td className="pbChatMsg">{value.msg}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="2">
                <textarea className={nextmsg === "" ? "pbChatInputEmpty" : "pbChatInput"}
                  name="nextmsgInputArea"
                  value={nextmsg}
                  onChange={(e) => {setNextmsg(e.target.value);}}
                  onKeyDownCapture={handleKeyDown}
                  placeholder="chat..."
                />
              </td>
            </tr>
          </tbody>
        </table>
     </div>
    )
  }
  
  const scrollToBottom = (elementid) => {
    const theElement = document.getElementById(elementid);
    theElement.scrollTop = theElement.scrollHeight;
  }

  export default Game;