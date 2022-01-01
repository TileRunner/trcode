/* I used to use JSON storage but McAfee blocked extendsclass.com as a risky old site,
   so I am playing it safe and stopping using that site.
*/
var games = []; // All the games
var gameHighLevelInfoMap = []; // High level game info
const { findLobbyClients, findPlayerClient, findGameClients, findGameClientsExceptMe } = require('../clients/clientFunctions');
const clientType = 'pb';

function pbInitialize() {
}

function getGame(gameid) {
    let game;
    let gameindex = getGameIndex(gameid);
    if (gameindex > -1) {
        game = games[gameindex];
    }
    return game;
}

function getGameIndex(gameid) {
    let retval = -1;
    for (let index = 0; index < games.length; index++) {
        const game = games[index];
        if (game.gameid === gameid) {
            retval = index;
        }
    }
    return retval;
}

function getGameHighLevelInfoObject(gameid) {
    let gameHighLevelInfoObject;
    let index = getGameHighLevelInfoIndex(gameid);
    if (index > -1) {
        gameHighLevelInfoObject = gameHighLevelInfoMap[index];
    }
    return (gameHighLevelInfoObject);
}

function getGameHighLevelInfoIndex(gameid) {
    let retval = -1;
    for (let index = 0; index < gameHighLevelInfoMap.length; index++) {
        const gameHighLevelInfoObject = gameHighLevelInfoMap[index];
        if (gameHighLevelInfoObject.gameid === gameid) {
            retval = index;
        }
    }
    return retval;
}

function processMessagePB(wss, pm, message) {
    if (pm.func === "announce") {
        updateLobbyClients(wss); // Just update all lobby clients in case any client missed an update somehow
    } else if (pm.func === "requestgamedata") {
        processPbRequestGameData(wss, pm);
    } else if (pm.func === "requestsyncdata") {
        processPbRequestSyncData(wss, pm);
    } else if (pm.func === "allowundo") {
        processPbAllowUndo(wss, pm, message);
    } else if (pm.func === "startgame") {
        processPbStartGame(wss, pm);
    } else if (pm.func === "joingame") {
        processPbJoinGame(wss, pm);
    } else if (pm.func === "rejoingame") {
        processPbRejoinGame(wss, pm);
    } else if (pm.func === "startObserving") {
        processPbStartObservingGame(wss, pm);
    } else if (pm.func === "startExamining") {
        processPbStartExaminingGame(wss, pm);
    } else if (pm.func === "ept" || pm.func === "egt") {
        processPbProvideMove(wss, pm);
        updateLobbyClients(wss); // In case game status changed
    } else if (pm.func === "undoturn") {
        processPbUndoMove(wss, pm);
        updateLobbyClients(wss); // In case game status changed
    } else if (pm.func === "deletegame") {
        processPbDeleteGame(wss, pm);
    } else {
        console.log(`log: ${message}`);
    }
}

const processPbRequestGameData = (wss, pm) => {
    let requestingClient = findPlayerClient(wss, pm.gameid, pm.thisisme);
    if (requestingClient) { // We should find the client that just asked!
        getGameThenUpdateClients(pm.gameid, [requestingClient]);
    } else {
        console.log(`Cannot find requesting client for gamedata request! ${pm.gameid} ${pm.thisisme}`);
    }
}

const processPbRequestSyncData = (wss, pm) => {
    let gameHighLevelInfoObject = getGameHighLevelInfoObject(pm.gameid);
    if (gameHighLevelInfoObject) { // We should find the high level info
        let requestingClient = findPlayerClient(wss, pm.gameid, pm.thisisme);
        if (requestingClient) { // We should find the client that just asked!
            requestingClient.send(JSON.stringify(
                {
                    type: clientType,
                    gameid: pm.gameid,
                    func: 'providesyncdata',
                    syncstamp: gameHighLevelInfoObject.syncstamp
                }
            ));
        } else {
            console.log(`Cannot find client that requested syncdata! ${pm.gameid} ${pm.thisisme} ${gameHighLevelInfoObject.syncstamp}`);
        }  
    } else {
        console.log(`Cannot find high level info for syncdata request! ${pm.gameid} ${pm.thisisme}`);
    }
}

const getGameListMessageString = () => {
    gameHighLevelInfoMap.sort((a, b) => a.datestamp < b.datestamp ? 1 : -1); // Youngest on top
    let jgamelist = {
        type: clientType,
        func: "gamelist",
        gamelist: gameHighLevelInfoMap
    };
    return JSON.stringify(jgamelist);
}

const getGameThenUpdateClients = (gameid, gameclients) => {
    let game = getGame(gameid);
    if (game) {
        let msg = buildProvidegamedataMessage(game);
        gameclients.forEach((client) => {
            client.send(JSON.stringify(msg));
        });        
    } else {
        console.log(`Could not find game to update clients ${gameid}`);
    }
}

const buildProvidegamedataMessage = (game) => {
    return {
        type: clientType,
        func: "providegamedata",
        gameid: game.gameid,
        apidata: game // front end does not need to know it is not an API
    };
}

const processPbAllowUndo = (wss, pm, message) => {
    let opponentClient = findOpponentClient(wss, pm.gameid, pm.thisisme);
    if (opponentClient) {
        opponentClient.send(message);
    }
}

const processPbStartGame = (wss, pm) => {
    /*
        STARTING A GAME
        ---------------
        Set the client gameid
        Create the game data
        Add game to games array
        Update game info map
        Send updated game list to clients in lobby
    */
    // Check for game already available.
    // In dev mode especially I have seen it try start the game again (when I save a code change)
    // If the game exists then update the game clients with what is stored to get it back to the original game
    for (let i = 0; i < gameHighLevelInfoMap.length; i++) {
        const g = gameHighLevelInfoMap[i];
        if (g.gameid === pm.gameid) {
            console.log(`Client ${pm.thisisme} is trying to start game ${pm.gameid} but is that game is in use already.`);
            let gameClients = findGameClients(wss, clientType, pm.gameid);
            getGameThenUpdateClients(pm.gameid, gameClients);
            return;
        }
    }
    // Set the client gameid and participant
    wss.clients.forEach((client) => {
        if (client.thisisme === pm.thisisme) {
            // console.log(`Setting gameid to ${pm.gameid} for client ${client.thisisme}`);
            client.gameid = pm.gameid;
            client.participant = pm.sender; // This will be 'P' since prisoners start the game
        }
    });
    let game = {
        datestamp: pm.timestamp,
        gameid: pm.gameid,
        racksize: pm.racksize,
        pname: pm.pname,
        events: [{
            index: 0,
            timestamp: pm.timestamp,
            type: "STARTGAME",
            whoseturn: "P",
            ptiles: pm.ptiles.join(""),
            gtiles: pm.gtiles.join(""),
            tiles: pm.tiles.join("")
        }]
    };
    games.push(game);
    let gameHighLevelInfoObject = makeGameHighLevelInfoObject(game);
    gameHighLevelInfoMap.push(gameHighLevelInfoObject);
    updateLobbyClients(wss);
}

const processPbJoinGame = (wss, pm) => {
    /*
        JOINING A GAME
        --------------
        This is guards joining a game, we now update the gname
        Send the game data to the caller
        Send the gname to the other game clients
    */
    let joinClient = findPlayerClient(wss, pm.gameid, pm.thisisme);
    if (joinClient) {
        joinClient.participant = pm.sender; // This will be 'G' because prisoners start and guards join
        // We should always find the client that sent the message by design
        let gameHighLevelInfoObject = getGameHighLevelInfoObject(pm.gameid);
        let game = getGame(pm.gameid);
        if (gameHighLevelInfoObject && game) {
            // We should always find the game in the array and the high level info object by design
            if (!gameHighLevelInfoObject.gname) {
                // It should be the case that we do not have gname yet
                game.gname = pm.gname; // Update game gname in games array
                updateGameHighLevelInfo(game); // High level info array gets gname
                updateLobbyClients(wss); // Lobby gets summary info for the game list
                let gameClients = findGameClients(wss, clientType, pm.gameid);
                getGameThenUpdateClients(pm.gameid, gameClients); // The caller joined so they need the entire game data, and the opponent needs the name of the joiner
            } else {
                // We already have the gname so just get the game and send it to the caller. Should never get here though.
                getGameThenUpdateClients(pm.gameid, [joinClient]);
            }
        }
    } else {
        console.log(`Could not find join client ${pm.gameid} ${pm.thisisme}`);
    }
    let clients = findGameClientsExceptMe(wss, clientType, pm.gameid, pm.thisisme);
    clients.forEach((client) => {
        let jSendGname = {
            type: clientType,
            func: "providegname",
            gameid: pm.gameid,
            gname: pm.gname
        };
        client.send(JSON.stringify(jSendGname));
    });
}

const processPbRejoinGame = (wss, pm) => {
    /*
        REJOINING A GAME
        --------------
        This is guards or prisoners rejoining a game
    */
    let joinClient = findPlayerClient(wss, pm.gameid, pm.thisisme);
    if (joinClient) {
        joinClient.participant = pm.sender;
        getGameThenUpdateClients(pm.gameid, [joinClient]);
    } else {
        console.log(`Could not find rejoin client ${pm.gameid} ${pm.thisisme}`);
    }
}

const processPbStartObservingGame = (wss, pm) => {
    wss.clients.forEach((client) => {
        if (client.thisisme === pm.thisisme) {
            // console.log(`Setting observer gameid to ${pm.gameid} for client ${client.thisisme}`);
            client.gameid = pm.gameid;
            client.participant = 'O';
            getGameThenUpdateClients(pm.gameid, [client]);
        }
    });
}

const processPbStartExaminingGame = (wss, pm) => {
    wss.clients.forEach((client) => {
        if (client.thisisme === pm.thisisme) {
            // console.log(`Setting observer gameid to ${pm.gameid} for client ${client.thisisme}`);
            client.gameid = pm.gameid;
            client.participant = 'E';
            getGameThenUpdateClients(pm.gameid, [client]);
        }
    });
}

const processPbProvideMove = (wss, pm) => {
    let move = pm.move;
    let moveEvent = {
        type: move.type,
        by: pm.sender,
        timestamp: pm.timestamp,
        whoseturn: pm.whoseturn
    };
    if (move.type === "PLAY" || move.type === "SWAP") {
        moveEvent.tiles = pm.tiles.join("");
        if (pm.sender === "P") {
            moveEvent.ptiles = pm.ptiles.join("");
        } else {
            moveEvent.gtiles = pm.gtiles.join("");
        }
    }
    if (move.type === "PLAY") {
        moveEvent.pos = move.pos;
        moveEvent.mainword = move.mainword;
        moveEvent.extrawords = move.extrawords.join(",");
        moveEvent.rescues = pm.rescues;
    }
    let otherGameClients = findGameClientsExceptMe(wss, clientType, pm.gameid, pm.thisisme);
    let game = getGame(pm.gameid);
    if (game) {
        // We should get the game
        game.events.push(moveEvent);
        updateGameHighLevelInfo(game);
        if (otherGameClients) {
            let msg = buildProvidegamedataMessage(game);
            let textmsg = JSON.stringify(msg);
            otherGameClients.forEach((client) => {
                client.send(textmsg);
            })
        }
    } else {
        console.log(`Could not find game to add game move ${pm.gameid} ${pm.thisisme}`);
    }
}

const processPbUndoMove = (wss, pm) => {
    let gameclients = findGameClients(wss, clientType, pm.gameid);
    let game = getGame(pm.gameid);
    if (game) {
        // We should find the game
        let eventindex = game.events.length - 1;
        game.events.splice(eventindex,1);
        updateGameHighLevelInfo(game);
        let msg = buildProvidegamedataMessage(game);
        gameclients.forEach((client) => {
            client.send(JSON.stringify(msg));
        });
    } else {
        console.log(`Could not find game to undo game move ${pm.gameid} ${pm.thisisme}`);
    }
}

const processPbDeleteGame = (wss, pm) => {
    let gameindex = getGameIndex(pm.gameid);
    if (gameindex > -1) {
        // We should find the game
        games.splice(gameindex,1);
    } else {
        console.log(`Could not find game to delete game ${pm.gameid} ${pm.thisisme}`);
    }
    let gameHighLevelInfoIndex = getGameHighLevelInfoIndex(pm.gameid);
    if (gameHighLevelInfoIndex > -1) {
        // We should find the high level info index
        gameHighLevelInfoMap.splice(gameHighLevelInfoIndex, 1);
        updateLobbyClients(wss);
    } else {
        console.log(`Could not find high level game info to delete game ${pm.gameid} ${pm.thisisme}`);
    }
}

/*
   The logic for findOpponentClient is specific to Prison Break particpant types
   so it stays in this file instead of clientFunctions.js
*/
const findOpponentClient = (wss, gameid, playerThisisme) => {
    let foundClient = null;
    let msg = '';
    wss.clients.forEach((client) => {
        msg = msg + client.gameid + '.' + client.thisisme + ', ';
        if (client.gameid === gameid && client.thisisme !== playerThisisme && client.participant !== 'O' && client.participant !== 'E') {
            foundClient = client;
        }
    });
    if (!foundClient) console.log(msg);
    return foundClient;
}

const updateGameHighLevelInfo = (game) => { // Pass the game json
    let index = getGameHighLevelInfoIndex(game.gameid);
    if (index > -1) {
        gameHighLevelInfoMap[index] = makeGameHighLevelInfoObject(game);
    } else {
        console.log(`Could not find game high level index to update object ${game.gameid}`);
    }
}

const updateLobbyClients = (wss) => {
    let lobbyClients = findLobbyClients(wss, clientType);
    let msg = getGameListMessageString();
    lobbyClients.forEach((client) => {
        client.send(msg);
    });
}

const makeGameHighLevelInfoObject = (game) => {
    let lastEventIndex = game.events.length - 1;
    let lastEvent = game.events[lastEventIndex];
    let syncstamp = lastEvent.timestamp;
    return {
        datestamp: game.datestamp,
        syncstamp: syncstamp,
        gameid: game.gameid,
        racksize: game.racksize,
        pname: game.pname,
        gname: game.gname,
        whoseturn: lastEvent.whoseturn
    };
}


module.exports = { pbInitialize, processMessagePB };
