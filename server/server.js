const _ = require('cors');
const { BuildGamedataFromAidata } = require("../trapp/lib/pbBuildGamedataFromApidata");
const express = require("express");
const { Server } = require("ws");
const path = require("path");
const PORT = process.env.PORT || 5000;
require('dotenv').config(); // For reading environment variables
const allowedCaller = (process.env.NODE_ENV === 'production' ? 'https://tilerunner.herokuapp.com' : 'http://localhost:3000')
const axios = require('axios').default; // For API calls
const dataApiUrl = 'https://json.extendsclass.com/bin'; // This is not a secret
const dataApiKey = process.env.NEXT_PUBLIC_DATAAPIKEY; // This is a secret
var gameApiInfoMap = []; // For mapping gameid to the id assigned by the API that is used, plus next event index

const server = express()
    .use("/", express.static(path.join(__dirname, "../trapp/out")))
    .get("/evtest", (req, res) => {
        let evtest = process.env.NEXT_PUBLIC_CODER_MESSAGE; // On developers local computer environment variables and heroku config settings
        res.header("Access-Control-Allow-Origin", allowedCaller);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json({test: 'value', evtest: evtest});
    })
    .listen(PORT, () => {
        console.log(`Listening on ${PORT}`);
        setupGameApiInfoMap();
    });

const wss = new Server({ server });

wss.on("connection", (ws, req) => {
    let urlParams = new URLSearchParams(req.url.slice(1)); // Need to remove leading /
    let clientType= urlParams.get('clientType'); // pb=Prison Break
    let thisisme = urlParams.get('thisisme');
    ws.thisisme = thisisme;
    ws.clientType = clientType;

    ws.on("close", () => console.log("Client disconnected"));

    ws.on("message", (message) => {
        processMessage(message);
    });
});

const processMessage = (message) => {
    let pm = JSON.parse(message);
    // console.log(`Message: type=${pm.type}, func=${pm.func}, gameid=${pm.gameid}, thisisme=${pm.thisisme}, ptiles=${pm.ptiles}, gtiles=${pm.gtiles}`);
    if (pm.type === "pb") {
        processPrisonBreakMessage(pm, message);
    }
    if (pm.func === "chat") {
        handleChatMessages(pm, message);
    }
}

function processPrisonBreakMessage(pm, message) {
    if (pm.func === "announce") {
        processPbAnnounce(pm);
    } else if (pm.func === "allowundo") {
        processPbAllowUndo(pm, message);
    } else if (pm.func === "startgame") {
        processPbStartGame(pm);
    } else if (pm.func === "joingame") {
        processPbJoinGame(pm);
    } else if (pm.func === "rejoingame") {
        processPbRejoinGame(pm);
    } else if (pm.func === "ept" || pm.func === "egt") {
        processPbProvideMove(pm);
    } else if (pm.func === "undoturn") {
        processPbUndoMove(pm);
    }
}

function processPbAnnounce(pm) {
    let lobbyClient = findLobbyClient(pm.thisisme);
    if (lobbyClient) {
        updateLobbyClient(lobbyClient);
    }
}

function processPbAllowUndo(pm, message) {
    let opponentClient = findOpponentClient(pm.gameid, pm.thisisme);
    if (opponentClient) {
        opponentClient.send(message);
    }
}
function processPbStartGame(pm) {
    /*
        STARTING A GAME
        ---------------
        Create the game data
        Post game to API
        Update game info map
        Send updated game list to clients in lobby
    */

    let current_datetime = new Date();
    let formatted_date = current_datetime.getFullYear() + "-" + appendLeadingZeroes(current_datetime.getMonth() + 1) + "-" + appendLeadingZeroes(current_datetime.getDate()) + " " + appendLeadingZeroes(current_datetime.getHours()) + ":" + appendLeadingZeroes(current_datetime.getMinutes());
    let jStartGame = {
        datestamp: formatted_date,
        gameid: pm.gameid,
        racksize: pm.racksize,
        pname: pm.pname,
        events: [{
            index: 0,
            type: "STARTGAME",
            whoseturn: "P",
            ptiles: pm.ptiles.join(""),
            gtiles: pm.gtiles.join(""),
            tiles: pm.tiles.join("")
        }]
    };
    handleStartGame(jStartGame); // Send new game to data API
}

function processPbJoinGame(pm) {
    /*
        JOINING A GAME
        --------------
        This is guards joining a game, we now update the gname
        Send the game data to the caller
        Send the gname to the other game clients
    */
    let joinClient = findPlayerClient(pm.gameid, pm.thisisme);
    if (joinClient) {
        // We should always find the client that sent the message by design
        let gameApiInfo = getGameApiInfo(pm.gameid);
        if (gameApiInfo) {
            // We should always find the game in the info map by design
            if (!gameApiInfo.gname) {
                // It should be the case that we do not have gname yet
                let jProvideGname = {
                    gname: pm.gname
                };
                // We want to update caller client and clients in the lobby (lobby needs gname)
                handleJoinGame(pm.gameid, jProvideGname, joinClient); // Send guards name to data API and update lobby clients, send game to joiner
            } else {
                // We already have the gname so just get the game and send it to the caller. Should never get here though.
                getGameThenUpdateClients(pm.gameid, [joinClient]);
            }
        }
    }
    let clients = findGameClientsExceptMe(pm.gameid, pm.thisisme);
    clients.forEach((client) => {
        let jSendGname = {
            type: "pm",
            func: "providegname",
            gameid: pm.gameid,
            gname: pm.gname
        };
        client.send(JSON.stringify(jSendGname));
    });
}

function processPbRejoinGame(pm) {
    /*
        REJOINING A GAME
        --------------
        This is guards or prisoners rejoining a game
    */
    let joinClient = findPlayerClient(pm.gameid, pm.thisisme);
    getGameThenUpdateClients(pm.gameid, [joinClient]);
}

function processPbProvideMove(pm) {
    // console.log(`processPbProvideMove ${JSON.stringify(pm)}`);
    let move = pm.move;
    let jEndTurn = {
        type: move.type,
        by: pm.sender,
        whoseturn: pm.whoseturn
    };
    if (move.type === "PLAY" || move.type === "SWAP") {
        jEndTurn.tiles = pm.tiles.join("");
        if (pm.sender === "P") {
            jEndTurn.ptiles = pm.ptiles.join("");
        } else {
            jEndTurn.gtiles = pm.gtiles.join("");
        }
    }
    if (move.type === "PLAY") {
        jEndTurn.pos = move.pos;
        jEndTurn.mainword = move.mainword;
        jEndTurn.extrawords = move.extrawords.join(",");
        jEndTurn.rescues = pm.rescues;
    }
    let opponentClient = findOpponentClient(pm.gameid, pm.thisisme);
    handleProvideMove(pm.gameid, jEndTurn, opponentClient); // Send move to data API, send update to opponent if found
}

function processPbUndoMove(pm) {
    // We need to update the database then build and send the game data to the clients in the game
    let gameclients = findGameClients(pm.gameid);
    handleUndoMove(pm.gameid, gameclients);
}

function findLobbyClient(thisisme) {
    let lobbyClient;
    wss.clients.forEach((client) => {
        if (client.thisisme === thisisme) {
            lobbyClient = client;
        }
    });
    return lobbyClient;
}

function findGameClients(gameid) {
    let gameclients = [];
    wss.clients.forEach((client) => {
        if (client.gameid === gameid) {
            gameclients.push(client);
        }
    });
    return gameclients;
}

function findGameClientsExceptMe(gameid, playerThisisme) {
    let gameclients = [];
    wss.clients.forEach((client) => {
        if (client.gameid === gameid && client.thisisme !== playerThisisme) {
            gameclients.push(client);
        }
    });
    return gameclients;
}

function findOpponentClient(gameid, playerThisisme) {
    let foundClient = null;
    wss.clients.forEach((client) => {
        if (client.gameid === gameid && client.thisisme !== playerThisisme) {
            foundClient = client;
        }
    });
    return foundClient;
}

function findPlayerClient(gameid, playerThisisme) {
    let foundClient = null;
    wss.clients.forEach((client) => {
        if (client.thisisme === playerThisisme) {
            if (!client.gameid && gameid) {
                client.gameid = gameid;
            }
            foundClient = client;
        }
    });
    return foundClient;
}

function findLobbyClients() {
    let lobbyclients = [];
    wss.clients.forEach((client) => {
        if (!client.gameid) {
            lobbyclients.push(client);
        }
    });
    return lobbyclients;
}

function getGameThenUpdateClients(gameid, gameclients) {
    let gameApiInfo = getGameApiInfo(gameid);
    let dataApiId = gameApiInfo.dataApiId;
    axios({
        method: 'get',
        baseURL: dataApiUrl,
        url: `/${dataApiId}`,
        headers: {
            'Api-key': dataApiKey
        }
    })
    .then(function (response) {
        // console.log(`Get game from bin ${dataApiId}: Status ${response.status} ${response.statusText} Data: ${JSON.stringify(response.data)}`);
        let msg = BuildGamedataFromAidata(response.data); // For 'get' the response data is the json data
        gameclients.forEach((client) => {
            client.send(JSON.stringify(msg));
        });        
    })
    .catch(error => {
        if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
    });
}

function handleChatMessages(pm, message) { // pm=json object, message=string of json
/* Send the chat message to clients that need it
   Overall rule - only send message to clients with the same client type (e.g. 'pb' for Prison Break)

   Message from Client loc  Action      Rule                                                    Reason
   ------------ ----------  ------      ----                                                    ------
   lobby        lobby       send        Client is not the sender                                Support lobby chat messages
   lobby        game        none
   game         lobby       none
   game         game        send        Client is not the sender and has same gameid as sender  Support game chat messages
*/
    wss.clients.forEach((client) => {
        // console.log(`Client: clientType=${client.clientType}, gameid=${client.gameid}, thisisme=${client.thisisme}`);
        if (client.clientType === pm.type) { // Same type of game
            if (client.thisisme === pm.thisisme) { // This is the client that sent the message
                // Don't send the chat back to the caller
            } else if (pm.gameid) { // Sent from within a game, not from lobby
                if (pm.gameid === client.gameid) { // Client is in same game as sender - send the message
                    client.send(message);
                }
            } else { // Sent from lobby, not from within a game
                if (!client.gameid) { // Client is in lobby - send message from lobby
                    client.send(message);
                }
            }
        }
    });
}

const setupGameApiInfoMap = () => {
    axios({
        method: 'get',
        url: `${dataApiUrl}s`,
        headers: {
            'Api-key': dataApiKey
        }
    })
    .then(function (response) {
        // console.log(`Get bins: Status ${response.status} ${response.statusText} Array ${response.data}`);
        let jresponse = response.data;
        jresponse.forEach(element => {
            setGameData(element);
        });
        // If I put a code statement here, gameApiInfoMap will be empty due to async nature.
    })
    .catch(error => {
        if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
    });
}

const setGameData = (dataApiId) => {
    axios({
        method: 'get',
        baseURL: dataApiUrl,
        url: `/${dataApiId}`,
        headers: {
            'Api-key': dataApiKey
        }
    })
    .then(function (response) {
        // console.log(`Get bin ${dataApiId}: Status ${response.status} ${response.statusText}`);
        let gameApiInfoElement = makeGameApiInfoObject(dataApiId, response.data);
        // console.log(`Startup adding game: ${JSON.stringify(gameApiInfoElement)}`);
        gameApiInfoMap.push(gameApiInfoElement);
    })
    .catch(error => {
        if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
    });
}

function makeGameApiInfoObject(dataApiId, gameData) {
    let lastEventIndex = gameData.events.length - 1;
    let lastEvent = gameData.events[lastEventIndex];
    return {
        dataApiId: dataApiId,
        datestamp: gameData.datestamp,
        gameid: gameData.gameid,
        racksize: gameData.racksize,
        pname: gameData.pname,
        gname: gameData.gname,
        nextEventIndex: gameData.events.length,
        whoseturn: lastEvent.whoseturn
    };
}

function handleStartGame(jStartGame) {
    axios({
        method: 'post',
        url: dataApiUrl,
        headers: {
            'Api-key': dataApiKey
        },
        data: jStartGame
    })
    .then(function (response) {
        // console.log(`Status ${response.status} ${response.statusText}`);
        let jresponse = response.data;
        let gameApiInfoObject = makeGameApiInfoObject(jresponse.id, jStartGame);
        gameApiInfoMap.push(gameApiInfoObject);
        updateLobbyClients();
    })
    .catch(error => {
        if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
    });
}

function handleJoinGame(gameid, jProvideGname, joinClient) { // Update data api and map, update lobby clients, get and send game to joiner
    let gameApiInfo = getGameApiInfo(gameid);
    let dataApiId = gameApiInfo.dataApiId;
    axios({
        method: 'patch',
        baseURL: dataApiUrl,
        url: `/${dataApiId}`,
        headers: {
            'Api-key': dataApiKey,
            'Content-type': 'application/merge-patch+json'
        },
        data: jProvideGname
    })
    .then(function (response) {
        // console.log(`Provide gname: Status ${response.status} ${response.statusText} ${JSON.stringify(response.data)}`);
        updateGameApiInfoObject(response.data); // Map gets gname
        updateLobbyClients(); // Lobby gets summary info for the game list
        getGameThenUpdateClients(gameid, [joinClient]); // The caller joined so they need the entire game data
    })
    .catch(error => {
        if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
    });
}

function handleProvideMove(gameid, jProvideMove, opponentClient) {
    let gameApiInfo = getGameApiInfo(gameid);
    let dataApiId = gameApiInfo.dataApiId;
    let nextEventIndex = gameApiInfo.nextEventIndex;
    let eventpath = `/events/${nextEventIndex}`;
    jProvideMove.index = nextEventIndex;
    let patchjson = {
        "op":"add",
        "path": eventpath,
        "value": jProvideMove
    };
    axios({
        method: 'patch',
        baseURL: dataApiUrl,
        url: `/${dataApiId}`,
        headers: {
            'Api-key': dataApiKey,
            'Content-type': 'application/json-patch+json'
        },
        data: patchjson
    })
    .then(function (response) {
        // console.log(`handleProvideMove then`);
        // console.log(`Provide move ${dataApiId}: Status ${response.status} ${response.statusText} Data: ${response.data.data}`);
        updateGameApiInfoObject(response.data);
        // console.log(`handleProvideMove after map update`);
        if (opponentClient) {
            let msg = BuildGamedataFromAidata(JSON.parse(response.data.data)); // For 'patch' the response data is "status": 0, "data": -- string of JSON data updated
            // console.log(`handleProvideMove after game data build`);
            opponentClient.send(JSON.stringify(msg));
        }
    })
    .catch(error => {
        if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
    });
}

function handleUndoMove(gameid, gameclients) {
    let gameApiInfo = getGameApiInfo(gameid);
    let dataApiId = gameApiInfo.dataApiId;
    let removeEventIndex = gameApiInfo.nextEventIndex - 1;
    let eventpath = `/events/${removeEventIndex}`;
    let patchjson = {
        "op":"remove",
        "path": eventpath
    };
    axios({
        method: 'patch',
        baseURL: dataApiUrl,
        url: `/${dataApiId}`,
        headers: {
            'Api-key': dataApiKey,
            'Content-type': 'application/json-patch+json'
        },
        data: patchjson
    })
    .then(function (response) {
        // console.log(`Undo move ${dataApiId}: Status ${response.status} ${response.statusText} Data: ${response.data.data}`);
        updateGameApiInfoObject(response.data);
        let msg = BuildGamedataFromAidata(JSON.parse(response.data.data)); // For 'patch' the response data is "status": 0, "data": -- string of JSON data updated
        gameclients.forEach((client) => {
            client.send(JSON.stringify(msg));
        });
    })
    .catch(error => {
        if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
    });
}

function updateLobbyClient(client) {
    let msg = getGameListMessageString();
    client.send(msg);
}

function updateLobbyClients() {
    let lobbyClients = findLobbyClients();
    let msg = getGameListMessageString();
    lobbyClients.forEach((client) => {
        client.send(msg);
    });
}

function getGameListMessageString() {
    gameApiInfoMap.sort((a, b) => a.datestamp < b.datestamp ? 1 : -1); // Youngest on top
    let jgamelist = {
        type: "pb",
        func: "gamelist",
        gamelist: gameApiInfoMap
    };
    return JSON.stringify(jgamelist);
}

function getGameApiInfo(gameid) {
    let dataApiId = '';
    let nextEventIndex = 0;
    for (let index = 0; index < gameApiInfoMap.length; index++) {
        const element = gameApiInfoMap[index];
        if (element.gameid === gameid) {
            dataApiId = element.dataApiId;
            nextEventIndex = element.nextEventIndex;
        }
    }
    return ({dataApiId: dataApiId, nextEventIndex: nextEventIndex});
}

function updateGameApiInfoObject(apiResponseData) { // Pass the axios response
    let gameData = JSON.parse(apiResponseData.data); // Parse the json string into a json object
    // console.log(`Updating map for: ${JSON.stringify(gameData)}`);
    for (let index = 0; index < gameApiInfoMap.length; index++) {
        const element = gameApiInfoMap[index];
        // console.log(`Looking at element with gameid=${element.gameid}: ${JSON.stringify(element)}`);
        if (element.gameid === gameData.gameid) {
            gameApiInfoMap[index] = makeGameApiInfoObject(element.dataApiId, gameData);
            // console.log(`Updated game: ${JSON.stringify(gameApiInfoMap[index])}`);
        }
    }
    // console.log(`Updated map: ${JSON.stringify(gameApiInfoMap)}`);
}

function appendLeadingZeroes(n) {
    if(n <= 9){
      return "0" + n;
    }
    return n;
}
