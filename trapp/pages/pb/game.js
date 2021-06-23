import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import PlayerSection from '../pb/playerSection';
import Board from '../pb/board';
import ShowUnseenTiles from '../pb/unseenTilesSection';
import ShowMoves from '../pb/movesSection';
import ShowRescues from '../pb/rescuesSection';
import Chat from '../pb/chatSection';
import * as c from '../../lib/pb/prisonBreakConstants';
import { initialSquareArray } from '../../lib/pb/initialSquareArray';
import { anyUnusedEscapeHatches } from "../../lib/pb/anyUnusedEscapeHatches";
import { buildGamedataFromApidata } from "../../lib/pb/buildGamedataFromApidata";
import { isDoublePass } from "../../lib/pb/isDoublePass";
import { scrollToBottom } from "../../lib/scrollToBottom";
import { usePrevious } from "../../lib/usePrevious";

const Game = ({isrejoin
    , participant // Prisoners, Guards, or Observer (not implemented)
    , gameid
    , nickname
    , wsmessage
    , client
    , racksize=4 // Option for rack size (give it a default for Build)
    }) => {
    const [syncstamp, setSyncstamp] = useState('');
    const middle = racksize; // Middle element in row or column array
    const edge = racksize * 2; // Last element in row or column array
    const initialtiles = racksize === 6 ? c.TILEBAG6 : racksize === 7 ? c.TILEBAG7 : racksize === 5 ? c.TILEBAG5 : c.TILEBAG4;
    const [tiles, setTiles] = useState([...initialtiles]);
    const [ptiles, setPtiles] = useState([]);
    const [gtiles, setGtiles] = useState([]);
    const [squareArray, setSquareArray] = useState([]);
    const [selection, setSelection] = useState(-1); // relative to rack of player making a play
    const [whoseturn, setWhoseturn] = useState(c.WHOSE_TURN_PRISONERS); // game starts with prisoners play
    const [currentcoords, setCurrentcoords] = useState([]);
    const [rescues, setRescues] = useState(0);
    const [rcd, setRcd] = useState([-1,-1,c.DIR_NONE]);
    const [moves, setMoves] = useState([]); // move history, each element is the array is a json object of info about the move
    const [snapshot, setSnapshot] = useState({
      squareArray: [],
      ptiles: [],
      gtiles: [],
    });
    const [jokeindex, setJokeindex] = useState(0);
    const [allowRewind, setAllowRewind] = useState(false);
    const [oppname, setOppname] = useState('');
    const [chatmsgs, setChatmsgs] = useState([]);
    const prevRescues = usePrevious(rescues);
    useEffect(() => { // This code executes the first time Game is used only
      initializeRoutine();
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
    useEffect(() => {
      if (rescues > prevRescues) {
          var myaudio = document.createElement('audio');
          // Observers hear yippee
          myaudio.src = participant === c.PARTY_TYPE_GUARDS ? "https://tilerunner.github.io/OneGotAway.m4a" : "https://tilerunner.github.io/yippee.m4a";
          myaudio.play();
      }
    }, [rescues]); // Play a sound when a rescue is made
    useEffect(() => {
      let newji = jokeindex + 1;
      if (newji >= c.JOKE_ARRAY.length) {
        newji = 0;
      }
      setJokeindex(newji);
    }, [whoseturn]); // want up to date value of whoseturn to decide whether to ask for an update

    useEffect(() => {
      const interval = setInterval(() => {
        if (participant !== whoseturn && whoseturn !== c.WHOSE_TURN_GAMEOVER) {
          requestSyncData(); // Send a request for sync data when waiting for their move
        }
        // Send a request for the timestamp of the last event (syncstamp)
        // Server will send func=providesyncstamp with a syncstamp value
        // ProcessGameMessage will check syncstamp from the server to syncstamp here
        // If different it will send func=requestgamedata, server will send us providegamedata, and we sync
        }, c.PING_INTERVAL); // this many milliseconds between above code block executions
      return () => clearInterval(interval);
    });
    const initializeRoutine = () => {
      let firstSquareArray = initialSquareArray(racksize);
      setSquareArray(firstSquareArray);
      if (isrejoin) {
        rejoinGame()
      } else if (participant === c.PARTY_TYPE_PRISONERS) {
        startGame(firstSquareArray); // Prisoners starting the game
      } else if (participant === c.PARTY_TYPE_GUARDS) {
        joinGame(); // Guards joining the game
      } else {
        startObservingGame(); // Observer viewing the game
      }
    }
    const startGame = (firstSquareArray) => {
      let newSyncstamp = Date.now();
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
      setSyncstamp(newSyncstamp);
      setGtiles(tempGTiles);
      setPtiles(tempPTiles);
      setTiles(tempTiles);
      setSnapshot({
        squareArray: firstSquareArray,
        ptiles: [...tempPTiles],
        gtiles: [...tempGTiles]    
      });
      client.send(
        {
          type: "pb",
          func: "startgame",
          gameid: gameid, // Game id
          timestamp: newSyncstamp, // For telling server my last data timestamp
          racksize: racksize, // Rack size option
          sender: participant, // This will be prisoners since prisoners start the game
          pname: nickname, // This will be the prisoners nickname since prisoners are sending this
          tiles: tempTiles, // Tile bag after first racks selected
          ptiles: tempPTiles, // Prisoners first rack
          gtiles: tempGTiles // Guards first rack
        }
      );
    }
    const joinGame = () => {
      client.send(
        {
          gameid: gameid, // the id for the game
          gname: nickname, // player nickname
          type: "pb", // prisonbreak
          func: "joingame", // join the game
          sender: participant // this will eb guards
        }
      );
    }
    const rejoinGame = () => {
      client.send(
        {
          gameid: gameid, // the id for the game
          type: "pb", // prisonbreak
          func: "rejoingame", // join the game
          sender: participant // could be either player
        }
      );
    }
    const startObservingGame = () => {
      client.send(
        {
          gameid: gameid,
          type: "pb",
          func: "startObserving"
        }
      );
    }

    function putAtMoveStart() {
      setSelection(-1);
      setAllowRewind(false);
      setRcd(-1,-1,c.DIR_NONE);
      setCurrentcoords([]);
    }
  
    function processGameMessage(message) {
      let messageData = JSON.parse(message);
      if (messageData.gameid === gameid && messageData.type === "pb") { // This instance of a prison break game
        if (messageData.func === "providegamedata") {
          let gd = buildGamedataFromApidata(messageData.apidata);
          // Server providing game data
          setSyncstamp(gd.syncstamp);
          // No opponent name for observers
          if (participant === c.PARTY_TYPE_PRISONERS) {
            setOppname(gd.gname);
          } else if (participant === c.PARTY_TYPE_GUARDS) {
            setOppname(gd.pname);
          }
          setTiles(gd.tiles);
          setSquareArray(gd.squareArray);
          setPtiles(gd.ptiles);
          setGtiles(gd.gtiles);
          setWhoseturn(gd.whoseturn);
          let newSnapshot = {
            squareArray: JSON.parse(JSON.stringify(gd.squareArray)), // Deep copy
            ptiles: [...gd.ptiles],
            gtiles: [...gd.gtiles]
          };
          setSnapshot(newSnapshot);
          setMoves(gd.moves);
          setRescues(gd.rescues);
          setAllowRewind(gd.allowRewind);
          putAtMoveStart();
        }
        if (messageData.func === "providegname") {
          if (participant === c.PARTY_TITLE_PRISONERS) {
            setOppname(messageData.gname);
          }
        }
        if (messageData.func === "allowundo") {
          // Opponent clicked button to allow undo turn
          setAllowRewind(true);
        }
        if (messageData.func === "chat") { // Server decided whether this chat was for me
          let newChatmsgs = [...chatmsgs, {from: messageData.nickname, msg: messageData.sendmsg}];
          setChatmsgs(newChatmsgs);
        }
        if (messageData.func === "providesyncdata") {
          // console.log(`providesyndata passed ${messageData.syncstamp} and I have ${syncstamp}`);
          if (messageData.syncstamp !== syncstamp) {
            console.log(`Out of sync - requesting latest game data`);
            requestGameData();
          }
        }
      }
    }
    
    // Calling setSelection (from handleKeyDown) then handleBoardSquareClick does not let it recognize selection with the new value
    // So I pass newSelection when I want to also set it, otherwise I pass -1 to instruct it to use current value of selection
    // Also passing newRcd
    const handleBoardSquareClick = (ri, ci, newSelection, newRcd) => {
      let newSquareArray = JSON.parse(JSON.stringify(squareArray)); // Deep copy
      let newSquareArrayRow = [...newSquareArray[ri]]; // The row of squares they clicked on
      let newSquareArrayCell = newSquareArrayRow[ci]; // The square in the row they clicked on
      let newPtiles = [...ptiles];
      let newGtiles = [...gtiles];
      let newCurrentcoords = [...currentcoords];
      let coord = String(ri) + "-" + String(ci);
      let cci = currentcoords.indexOf(coord);
      if (newSelection === -1) {
        newSelection = selection;
        newRcd = rcd;
      }
      if (newSelection > -1 && newSquareArrayCell.usedby === c.USED_BY_NONE) { // tile is selected from rack and clicked square is not used yet
        let selectedTile = whoseturn === c.WHOSE_TURN_PRISONERS ? newPtiles[newSelection] : newGtiles[newSelection];
        newSquareArrayCell.letter = selectedTile;
        newSquareArrayCell.usedby = whoseturn;
        newSquareArrayRow[ci] = newSquareArrayCell;
        newSquareArray[ri] = [...newSquareArrayRow];
        whoseturn === c.WHOSE_TURN_PRISONERS
          ? newPtiles.splice(newSelection, 1)
          : newGtiles.splice(newSelection, 1);
        if (whoseturn === c.WHOSE_TURN_PRISONERS && newSelection === newPtiles.length) { 
          newSelection = newSelection - 1
        }
        if (whoseturn === c.WHOSE_TURN_GUARDS && newSelection === newGtiles.length) { 
          newSelection = newSelection - 1
        }
        setSelection(newSelection);
        setSquareArray(newSquareArray);
        setPtiles(newPtiles);
        setGtiles(newGtiles);
        setCurrentcoords([...currentcoords, coord]);
        setRcd(newRcd); // key down handler figured it out
        return;
      }
      if (cci > -1) { // clicked square has a tile on it from the current move in progress, so put it back on the player rack
        whoseturn === c.WHOSE_TURN_PRISONERS
          ? newPtiles.push(newSquareArrayCell.letter)
          : newGtiles.push(newSquareArrayCell.letter);
        newSquareArrayCell.usedby = c.USED_BY_NONE;
        newSquareArrayCell.letter = c.LETTER_NONE;
        newSquareArrayRow[ci] = newSquareArrayCell;
        newSquareArray[ri] = [...newSquareArrayRow];
        setSelection(
          whoseturn === c.WHOSE_TURN_PRISONERS ? newPtiles.length - 1 : newGtiles.length - 1
        );
        newCurrentcoords.splice(cci, 1);
        setSquareArray(newSquareArray);
        setPtiles(newPtiles);
        setGtiles(newGtiles);
        setCurrentcoords(newCurrentcoords);
        setRcd(-1,-1,c.DIR_NONE); // make player click again to set direction
        return;
      }
      // They didn't click a square to place a selected tile there
      // They didn't click a square to remove an existing tile
      if (newSquareArrayCell.usedby === c.USED_BY_NONE) {
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
      if (participant === c.PARTY_TYPE_OBSERVER) {return;}
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
      if (!anyUnusedEscapeHatches(squareArray)) {
        newWhoseturn = c.WHOSE_TURN_GAMEOVER; // No escape hatches left
      }
      let playinfo = getPlayInfo();
      let newMove = {by: c.PARTY_TYPE_PRISONERS, type: c.MOVE_TYPE_PLAY, mainword: playinfo.mainword, extrawords: playinfo.extrawords, pos: playinfo.pos};
      let newMoves = [...moves, newMove];
      let newSyncstamp = Date.now();
      putAtMoveStart();
      setSyncstamp(newSyncstamp);
      setWhoseturn(newWhoseturn);
      setPtiles(newPtiles);
      setTiles(newTiles);
      setMoves(newMoves);
      setRescues(newRescues);
      setSnapshot({
        squareArray: JSON.parse(JSON.stringify(squareArray)), // Deep copy
        ptiles: [...newPtiles],
        gtiles: [...gtiles],
      });
  
      client.send(
        {
          gameid: gameid, // the id for the game
          type: "pb", // prisonbreak
          func: "ept", // end prisoners turn
          timestamp: newSyncstamp, // for data sync logic
          sender: participant,
          ptiles: newPtiles, // we picked new tiles for prisoners rack
          tiles: newTiles, // we picked new tiles so tile pool changed
          whoseturn: newWhoseturn, // may have ended the game
          move: newMove, // the move that was made
          rescues: newRescues // may have rescued another prisoner
        }
      );
    };
  
    const endGuardsTurn = () => {
      if (!isPlayValid()) {
        return;
      }
      let newGtiles = [...gtiles];
      let newTiles = [...tiles];
      while (newGtiles.length < racksize && newTiles.length > 0) {
        let rand = Math.floor(Math.random() * newTiles.length);
        newGtiles.push(newTiles[rand]);
        newTiles.splice(rand, 1);
      }
      newGtiles.sort();
      let snapsquarearray = JSON.parse(JSON.stringify(squareArray)); // Deep copy
      let snapptiles = [...ptiles];
      let snapgtiles = [...gtiles];
      let newWhoseturn = newGtiles.length > 0 ? c.WHOSE_TURN_PRISONERS : c.WHOSE_TURN_GAMEOVER;
      if (!anyUnusedEscapeHatches(squareArray)) {
        newWhoseturn = c.WHOSE_TURN_GAMEOVER; // No escape hatches left
      }
      let playinfo = getPlayInfo();
      let newMove = {by: c.PARTY_TYPE_GUARDS, type: c.MOVE_TYPE_PLAY, mainword: playinfo.mainword, extrawords: playinfo.extrawords, pos: playinfo.pos};
      let newMoves = [...moves, newMove];
      let newSyncstamp = Date.now();
      putAtMoveStart();
      setSyncstamp(newSyncstamp);
      setWhoseturn(newWhoseturn);
      setGtiles(newGtiles);
      setTiles(newTiles);
      setMoves(newMoves);
      setSnapshot({
        squareArray: snapsquarearray,
        ptiles: snapptiles,
        gtiles: snapgtiles,
      });
  
      client.send(
        {
          gameid: gameid, // the id for the game
          type: "pb", // prisonbreak
          func: "egt", // end guards turn
          timestamp: newSyncstamp, // for data sync logic
          sender: participant,
          gtiles: newGtiles, // we picked new tiles for guards rack
          tiles: newTiles, // we picked new tiles so tile pool changed
          move: newMove, // the move that was made
          whoseturn: newWhoseturn, // may have ended the game
          racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)
          }
        );
      };
  
    const swapPrisonersTiles = () => {
      if (tiles.length < racksize) {
        window.alert("Need " + racksize + " tiles in the bag to exchange")
        return;
      }
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
      let newMove = {by: c.PARTY_TYPE_PRISONERS, type: c.MOVE_TYPE_SWAP};
      let newMoves = [...moves, newMove];
      let newSyncstamp = Date.now();
      putAtMoveStart();
      setSyncstamp(newSyncstamp);
      setSquareArray(JSON.parse(JSON.stringify(snapshot.squareArray))); // Deep copy
      setWhoseturn(c.WHOSE_TURN_GUARDS);
      setPtiles(newPtiles);
      setTiles(newTiles);
      setMoves(newMoves);
      setSnapshot({
        squareArray: JSON.parse(JSON.stringify(snapshot.squareArray)), // Deep copy
        ptiles: [...newPtiles],
        gtiles: [...gtiles],
      });
  
      client.send(
        {
          gameid: gameid, // the id for the game
          type: "pb", // prisonbreak
          func: "ept", // end prisoners turn
          timestamp: newSyncstamp, // for data sync logic
          sender: participant,
          whoseturn: c.WHOSE_TURN_GUARDS, // swap never ends the game so go to opponent
          ptiles: newPtiles, // we picked new tiles for prisoners rack
          tiles: newTiles, // we picked new tiles so tile pool changed
          move: newMove // the move that was made
        }
      );
  
    }
    
    const swapGuardsTiles = () => {
      if (tiles.length < racksize) {
        window.alert("Need " + racksize + " tiles in the bag to exchange")
        return;
      }
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
      let newMove = {by: c.PARTY_TYPE_GUARDS, type: c.MOVE_TYPE_SWAP};
      let newMoves = [...moves, newMove];
      let newSyncstamp = Date.now();
      putAtMoveStart();
      setSyncstamp(newSyncstamp);
      setSquareArray(JSON.parse(JSON.stringify(snapshot.squareArray))); // Deep copy
      setWhoseturn(c.WHOSE_TURN_PRISONERS);
      setGtiles(newGtiles);
      setTiles(newTiles);
      setMoves(newMoves);
      setSnapshot({
        squareArray: JSON.parse(JSON.stringify(snapshot.squareArray)), // Deep copy
        ptiles: [...ptiles],
        gtiles: [...newGtiles],
      });
  
      client.send(
        {
          gameid: gameid, // the id for the game
          type: "pb", // prisonbreak
          func: "egt", // end guards turn
          timestamp: newSyncstamp, // for data sync logic
          sender: participant,
          whoseturn: c.WHOSE_TURN_PRISONERS, // swap never ends the game so go to opponent
          gtiles: newGtiles, // we picked new tiles for prisoners rack
          tiles: newTiles, // we picked new tiles so tile pool changed
          move: newMove // the move that was made
        }
      );
  
    }
  
    function isPlayValid() {
      // Check if this is the first word since it affects the validity rules
      let firstWord = true;
      let nummoves = moves.length;
      for (var moveindex = 0; firstWord && (moveindex < nummoves); ++moveindex) {
        if (moves[moveindex].type === c.MOVE_TYPE_PLAY) {
          firstWord = false;
        }
      }
      // First word must hit center square
      if (firstWord && squareArray[middle][middle].usedby === c.USED_BY_NONE) {
        window.alert("First play must hit center square");
        return false;
      }
      // At least 1 tile must be played
      if (currentcoords.length === 0) {
        window.alert("You didn't play any tiles");
        return false;
      }
      /* Go through each played tile
          Make sure it is not isolated from all the other tiles
          Determine the lowest and highest row and column numbers of tiles played this move
      */
      let numcoords = currentcoords.length;
      let lowrow = edge+1;
      let highrow = -1;
      let lowcol = edge+1;
      let highcol = -1;
      for (var coord=0; coord < numcoords; ++coord) { // Each tile played this move
        let temprow = parseInt(currentcoords[coord].split("-")[0]);
        let tempcol = parseInt(currentcoords[coord].split("-")[1]);
        if (temprow < lowrow) { lowrow = temprow;}
        if (temprow > highrow) { highrow = temprow;}
        if (tempcol < lowcol) { lowcol = tempcol;}
        if (tempcol > highcol) { highcol = tempcol;}
        // Make sure there is another tile immediately above, below, left, or right (not isolated)
        if (!(temprow > 0 && squareArray[temprow-1][tempcol].usedby !== c.USED_BY_NONE) &&
          !(tempcol > 0 && squareArray[temprow][tempcol-1].usedby !== c.USED_BY_NONE) &&
          !(temprow < edge && squareArray[temprow+1][tempcol].usedby !== c.USED_BY_NONE) &&
          !(tempcol < edge && squareArray[temprow][tempcol+1].usedby !== c.USED_BY_NONE)
          ) {
            window.alert("Each played tile must be part of a word");
            return false;
          }
      }
      // Using the high and low values, check if the play is in a straight line
      if (lowrow !== highrow && lowcol !== highcol) {
        window.alert("Tiles played must be in a straight line");
        return false;
      }
      let playthru = false;
      let hookmade = false;
      /* Traverse from first played tile to last player tile
          Make sure there are no unused squares inbetween (gaps in the played word)
          Check if we played through existing tiles
          Check if we hooked existing tiles/words
      */
      for (var temprow = lowrow; temprow <= highrow; ++temprow) {
        for (var tempcol = lowcol; tempcol <= highcol; ++tempcol) {
          if (squareArray[temprow][tempcol].usedby === c.USED_BY_NONE) {
            window.alert("There is a gap in your word");
            return false;
          }
          if (!firstWord) { // Play through and hook not possible on first move
            let tempcoord = temprow + "-" + tempcol;
            if (currentcoords.indexOf(tempcoord) < 0) { // Tile was not played this move (was already on the board)
              playthru = true;
            }
            if (lowrow === highrow && temprow > 0 && squareArray[temprow-1][tempcol].usedby !== c.USED_BY_NONE) { hookmade = true; }
            if (lowrow === highrow && temprow < edge && squareArray[temprow+1][tempcol].usedby !== c.USED_BY_NONE) { hookmade = true; }
            if (lowcol === highcol && tempcol > 0 && squareArray[temprow][tempcol-1].usedby !== c.USED_BY_NONE) { hookmade = true; }
            if (lowcol === highcol && tempcol < edge && squareArray[temprow][tempcol+1].usedby !== c.USED_BY_NONE) { hookmade = true; }  
          }
        }
      }
      if (!firstWord) {
        // We already found play through a tile between first and last played tile
        // Now check if played word has a tile before first or after last played tile
        if (lowrow === highrow && lowcol > 0 && squareArray[lowrow][lowcol-1].usedby !== c.USED_BY_NONE) { playthru = true; }
        if (lowrow === highrow && highcol < edge && squareArray[lowrow][highcol+1].usedby !== c.USED_BY_NONE) { playthru = true; }
        if (lowcol === highcol && lowrow > 0 && squareArray[lowrow-1][lowcol] !== c.USED_BY_NONE) { playthru = true; }
        if (lowcol === highcol && highrow < edge && squareArray[highrow+1][lowcol].usedby !== c.USED_BY_NONE) { playthru = true; }
        // Now we have fully identified play through we can make sure they played through or made a hook
        // This in mandatory since it is not the first move
        if (!playthru && !hookmade) {
          window.alert("New words must extend an existing word and/or hook existing words or tiles");
          return false;
        }
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
        while (lowestrow > 0 && squareArray[lowestrow-1][col].usedby !== c.USED_BY_NONE) {
          lowestrow = lowestrow - 1;
        }
        // find the highest row number of the main word, which may be higher than that of the last played tile
        let highestrow = highrow;
        while (highestrow < edge && squareArray[highestrow+1][col].usedby !== c.USED_BY_NONE) {
          highestrow = highestrow + 1;
        }
        wordstartcoord = c.BOARD_COL_HEADERS[col] + c.BOARD_ROW_HEADERS[lowestrow]; // vertical play coords start with col header
        for (var row = lowestrow; row <= highestrow; ++row) {
          mainword = mainword + squareArray[row][col].letter;
          let coord = row + "-" + col;
          if (currentcoords.indexOf(coord) > -1) { // This tile was played, check for hooks
            let lowestcol = col;
            while (lowestcol > 0 && squareArray[row][lowestcol-1].usedby !== c.USED_BY_NONE) {
              lowestcol = lowestcol - 1;
            }
            let highestcol = col;
            while (highestcol < edge && squareArray[row][highestcol+1].usedby !== c.USED_BY_NONE) {
              highestcol = highestcol + 1;
            }
            if (lowestcol < highestcol) { // hook was made
              let extraword = "";
              for (var tempcol = lowestcol; tempcol <= highestcol; ++tempcol) {
                extraword = extraword + squareArray[row][tempcol].letter;
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
        while (lowestcol > 0 && squareArray[row][lowestcol-1].usedby !== c.USED_BY_NONE) {
          lowestcol = lowestcol - 1;
        }
        // find the highest col number of the main word, which may be higher than that of the last played tile
        let highestcol = highcol;
        while (highestcol < edge && squareArray[row][highestcol+1].usedby !== c.USED_BY_NONE) {
          highestcol = highestcol + 1;
        }
        wordstartcoord = c.BOARD_ROW_HEADERS[row] + c.BOARD_COL_HEADERS[lowestcol]; // horizontal play coords start with row header
        mainword = ""; // In case we got a 1 letter mainword in the previous block
        extrawords = []; // Ditto
        for (var col = lowestcol; col <= highestcol; ++col) {
          mainword = mainword + squareArray[row][col].letter;
          let coord = row + "-" + col;
          if (currentcoords.indexOf(coord) > -1) { // This tile was played, check for hooks
            let lowestrow = row;
            while (lowestrow > 0 && squareArray[lowestrow-1][col].usedby !== c.USED_BY_NONE) {
              lowestrow = lowestrow - 1;
            }
            let highestrow = row;
            while (highestrow < edge && squareArray[highestrow+1][col].usedby !== c.USED_BY_NONE) {
              highestrow = highestrow + 1;
            }
            if (lowestrow < highestrow) { // hook was made
              let extraword = "";
              for (var temprow = lowestrow; temprow <= highestrow; ++temprow) {
                extraword = extraword + squareArray[temprow][col].letter;
              }
              extrawords = [...extrawords, extraword];
            }
          }
        }
      }
      playinfo = {mainword: mainword, extrawords: extrawords, pos: wordstartcoord};
      return playinfo;
    }
  
    function allowUndoLastTurn() {
      if (!allowRewind) {
        setAllowRewind(true);
        client.send(
          {
            gameid: gameid, // the id for the game
            type: "pb", // prisonbreak
            func: "allowundo", // allow undo last turn
            sender: participant // who is allowing it
          }
        );
      }
    }
  
    function performRewind() {
      /* Send undoturn to server and it will send the updated game data to game clients, including this one */
      client.send(
        {
          gameid: gameid, // the id for the game
          type: "pb", // prisonbreak
          func: "undoturn" // undo last turn
        }
      );
    }
  
    const recallTiles = () => {
      setSquareArray(JSON.parse(JSON.stringify(snapshot.squareArray))); // Deep copy
      setPtiles([...snapshot.ptiles]);
      setGtiles([...snapshot.gtiles]);
      setSelection(-1);
      setCurrentcoords([]);
      setRcd([-1,-1,c.DIR_NONE]);
    };
  
    const prisonerPass = () => {
      let newMove = {by: c.PARTY_TYPE_PRISONERS, type: c.MOVE_TYPE_PASS};
      let newMoves = [...moves, newMove];
      let newWhoseturn = isDoublePass(newMoves) ? c.WHOSE_TURN_GAMEOVER : c.WHOSE_TURN_GUARDS; // If both players pass then end the game
      let newSyncstamp = Date.now();
      recallTiles(); // In case they put some tiles on the board before clicking Pass
      putAtMoveStart();
      setSyncstamp(newSyncstamp);
      setWhoseturn(newWhoseturn);
      setMoves(newMoves);
      client.send(
        {
          gameid: gameid, // the id for the game
          type: "pb", // prisonbreak
          func: "ept", // end prisoners turn
          timestamp: newSyncstamp, // for data sync logic
          sender: participant, // who passed their turn
          whoseturn: newWhoseturn, // either it is now opponents turn or the pass ended the game
          move: newMove // the move that was made
        }
      );
    }
  
    const guardsPass = () => {
      let newMove = {by: c.PARTY_TYPE_GUARDS, type: c.MOVE_TYPE_PASS};
      let newMoves = [...moves, newMove];
      let newWhoseturn = isDoublePass(newMoves) ? c.WHOSE_TURN_GAMEOVER : c.WHOSE_TURN_PRISONERS; // If both players pass then end the game
      let newSyncstamp = Date.now();
      recallTiles(); // In case they put some tiles on the board before clicking Pass
      putAtMoveStart();
      setSyncstamp(newSyncstamp);
      setWhoseturn(newWhoseturn);
      setMoves(newMoves);
      client.send(
        {
          gameid: gameid, // the id for the game
          type: "pb", // prisonbreak
          func: "egt", // end guards turn
          timestamp: newSyncstamp, // for data sync logic
          sender: participant, // who passed their turn
          whoseturn: newWhoseturn, // either it is now opponents turn or the pass ended the game
          move: newMove // the move that was made
        }
      );
    }
  

    const requestGameData = () => {
      client.send(
        {
          gameid: gameid, // the id for the game
          type: "pb", // prisonbreak
          sender: participant,
          func: "requestgamedata", // request game data
          syncstamp: syncstamp // so server can decide whether I am up to date
        }
      )
    }
  
    const requestSyncData = () => {
      // console.log(`Send requestsyncdata ${syncstamp}`);
      client.send(
        {
          gameid: gameid, // the id for the game
          type: "pb", // prisonbreak
          sender: participant,
          func: "requestsyncdata" // request sync data
        }
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
                if (squareArray[row][tempcol].usedby === c.USED_BY_NONE) {
                  newc = tempcol;
                }
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
                if (squareArray[temprow][col].usedby === c.USED_BY_NONE) {
                  newr = temprow;
                }
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
        let row = parseInt(coord.split("-")[0]);
        let col = parseInt(coord.split("-")[1]);
        let newCurrentcoords = [...currentcoords];
        let newPtiles = [...ptiles];
        let newGtiles = [...gtiles];
        let newSquareArray = JSON.parse(JSON.stringify(squareArray)); // Deep copy
        let newSquareArrayRow = newSquareArray[row];
        let newSquareArrayCell = newSquareArrayRow[col];
        let newRcd = [-1,-1,c.DIR_NONE];
        let newSelection = selection;
        newCurrentcoords.splice(currentcoords.length-1,1);
        let returnedTile = squareArray[row][col].letter;
        if (whoseturn === c.WHOSE_TURN_PRISONERS) {
          newPtiles.push(returnedTile);
          newSelection = newPtiles.length-1;
        } else {
          newGtiles.push(returnedTile);
          newSelection = newGtiles.length-1;
        }
        newSquareArrayCell.usedby = c.USED_BY_NONE;
        newSquareArrayCell.letter = c.LETTER_NONE;
        newSquareArrayRow[col] = newSquareArrayCell;
        newSquareArray[row] = [...newSquareArrayRow];
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
        setSquareArray(newSquareArray);
        setRcd(newRcd);
        setSelection(newSelection);
      }
    }
    const handleMoveClick = (_mi) => {}
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
            Prisoners: {
              participant === c.PARTY_TYPE_PRISONERS ? nickname
              : participant === c.PARTY_TYPE_GUARDS ? oppname
              : 'Secret'
              }
          </div>
          <div className="w3-display-topright w3-black topBarCorner commonFontFamily">
            <Link href={"../../"}>
              <a><i className="material-icons" data-toggle="tooltip" title="Home">home</i></a>
            </Link>
          </div>
          <div className="w3-display-bottomright w3-orange topBarCorner commonFontFamily">
            Guards: {
              participant === c.PARTY_TYPE_PRISONERS ? oppname
              : participant === c.PARTY_TYPE_GUARDS ? nickname
              : 'Secret'
              }
          </div>
        </div>
        <div className="row">
          <div className="col pbTileAndMovesOuter">
              <ShowUnseenTiles
                tiles={tiles}
                othertiles={
                  participant === c.PARTY_TYPE_PRISONERS ? gtiles
                  : participant === c.PARTY_TYPE_GUARDS ? ptiles
                  : []} // Observers see both racks so nothing to exclude from tilebag as unseen
                />
              <ShowMoves moves={moves} onmoveclick={(mi) => handleMoveClick(mi)}/>
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
            :participant === c.PARTY_TYPE_GUARDS ?
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
            :
              <div className="pbPlayerInnerSection">
                <div className="pbPlayerTitle"><i className="material-icons">{c.PARTY_ICON_PRISONERS}</i>&nbsp;{c.PARTY_TITLE_PRISONERS}&nbsp;<i className="material-icons">{c.PARTY_ICON_PRISONERS}</i></div>
                <div className="pbTilerack">
                  {ptiles && ptiles.map((t, ti) =>
                      <ObserverRackTile
                          key={`ObserverPrisonersRackTile${ti}`}
                          participant='P'
                          tilevalue={t}
                          tileindex={ti}
                      />
                  )}
                </div>
                <div className="pbPlayerTitle"><i className="material-icons">{c.PARTY_ICON_GUARDS}</i>&nbsp;{c.PARTY_TITLE_GUARDS}&nbsp;<i className="material-icons">{c.PARTY_ICON_GUARDS}</i></div>
                <div className="pbTilerack">
                  {gtiles && gtiles.map((t, ti) =>
                      <ObserverRackTile
                          key={`ObserverGuardsRackTile${ti}`}
                          participant='G'
                          tilevalue={t}
                          tileindex={ti}
                      />
                  )}
                </div>
              </div>
            }
          </div>
          <div className="col">
            {participant === whoseturn ?
              <div className="row" onKeyDownCapture={handleKeyDown}>
                <Board
                  squareArray={squareArray}
                  rcd={rcd}
                  onClick={(ri, ci) => handleBoardSquareClick(ri, ci, -1,null)}
                />
              </div>
            :
              <div className="row">
                <Board
                  squareArray={squareArray}
                  rcd={rcd}
                  onClick={() => {}}
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
              <p>{c.JOKE_ARRAY[jokeindex]}</p>
            }
          </div>
        </div>
      </div>
    );
  };

const ObserverRackTile = (props) => {
  const selectedUnselected = "Unselected ";
  const uNotU = props.tilevalue === "Q" ? "u " : "";
  const tileclass = "pbTileOnRack " + selectedUnselected + uNotU + props.participant;
  return (
      <div
          key={props.tileindex}
          className={tileclass}
      >
          <div className="pbTileOnRackText">{props.tilevalue}</div>
      </div>
  );
}


  export default Game;