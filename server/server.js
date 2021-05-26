const _ = require('cors');
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
    .listen(PORT, () => console.log(`Listening on ${PORT}`));

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

const postGame = (senderid, jStartGame) => {
    axios({
        method: 'post',
        url: dataApiUrl,
        headers: {
            'Api-key': dataApiKey
        },
        data: jStartGame
    })
    .then(function (response) {
        console.log(`Status ${response.status} ${response.statusText}`);
        let jresponse = response.data;
        gameApiInfoMap.push({gameid: jStartGame.gameid, dataApiId: jresponse.id, nextEventIndex: 1});
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

const provideGname = (gameid, jProvideGname) => {
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
        console.log(`Status ${response.status} ${response.statusText}`);
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

const provideMove = (gameid, jProvideMove) => {
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
        console.log(`Status ${response.status} ${response.statusText}`);
        updateGameApiInfo(gameid, nextEventIndex + 1);
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

const undoMove = (gameid) => {
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
        console.log(`Status ${response.status} ${response.statusText}`);
        updateGameApiInfo(gameid, removeEventIndex);
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

const getGameApiInfo = (gameid) => {
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

const updateGameApiInfo = (gameid, nextEventIndex) => {
    for (let index = 0; index < gameApiInfoMap.length; index++) {
        const element = gameApiInfoMap[index];
        if (element.gameid === gameid) {
            element.nextEventIndex = nextEventIndex;
        }
    }
}

const appendLeadingZeroes = (n) => {
    if(n <= 9){
      return "0" + n;
    }
    return n;
  }

  /* Send the message to clients that may need it
   Keep track of gameid for clients to enable the logic
   Overall rule - only send message to clients with the same client type (e.g. 'pb' for Prison Break)

   Message from Client loc  Action      Rule                                                    Reason
   ------------ ----------  ------      ----                                                    ------
   lobby        lobby       send        Client is not the sender                                Support lobby chat messages
   lobby        game        send        Must be the announce function                           New client in lobby needs game list
   game         lobby       send                                                                Support lobby game list
   game         game        send        Client is not the sender and has same gameid as sender  Support game play and game chat
*/
const processMessage = (message) => {
    let pm = JSON.parse(message);
    if (pm.clientType === "pb") {
        if (pm.func === "startgame") {
            console.log(`Update the database here for ${pm.clientType} gameid=${pm.gameid} func=${pm.func}`);
            let current_datetime = new Date();
            let formatted_date = current_datetime.getFullYear() + "-" + appendLeadingZeroes(current_datetime.getMonth() + 1) + "-" + appendLeadingZeroes(current_datetime.getDate()) + " " + appendLeadingZeroes(current_datetime.getHours()) + ":" + appendLeadingZeroes(current_datetime.getMinutes());
            let jStartGame = {
                datestamp: formatted_date,
                gameid: pm.gameid,
                racksize: pm.racksize,
                pname: pm.nickname,
                events: [{
                    index: 0,
                    type: "STARTGAME",
                    whoseturn: "P",
                    ptiles: pm.ptiles.join(""),
                    gtiles: pm.gtiles.join(""),
                    tiles: pm.tiles.join("")
                }]
            };
            postGame(pm.senderid, jStartGame); // Send new game to data API
        }
        if (pm.func === "joingame" && pm.sender === "G") {
            console.log(`Update the database here for ${pm.clientType} gameid=${pm.gameid} func=${pm.func}`);
            let jProvideGname = {
                gname: pm.nickname
                }
            provideGname(pm.gameid, jProvideGname); // Send guards name to data API
        }
        if (pm.func === "ept" || pm.func === "egt") {
            console.log(`Update the database here for ${pm.clientType} gameid=${pm.gameid} func=${pm.func}`);
            let moveindex = pm.moves.length - 1
            let move = pm.moves[moveindex];
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
            provideMove(pm.gameid, jEndTurn); // Send move to data API
        }
        if (pm.func === "undoturn") {
            console.log(`Update the database here for ${pm.clientType} gameid=${pm.gameid} func=${pm.func}`);
            undoMove(pm.gameid); // Send undo move to data API
        }
    }
    // console.log(`Message: type=${pm.type}, func=${pm.func}, gameid=${pm.gameid}, senderid=${pm.senderid}`);
    wss.clients.forEach((client) => {
        // console.log(`Client: clientType=${client.clientType}, gameid=${client.gameid}, thisisme=${client.thisisme}`);
        if (client.clientType === pm.type) { // Same type of game
            if (client.thisisme === pm.senderid) { // This is the client that sent the message
                // Update client gameid if needed
                if (pm.gameid && !client.gameid) {
                    client.gameid = pm.gameid;
                }
            } else if (pm.gameid) { // Sent from within a game, not from lobby
                if (!client.gameid) { // Client is in lobby - send message from game so client lobby can update game list
                    client.send(message);
                } else if (pm.gameid === client.gameid) { // Client is in same game as sender - send the message
                    client.send(message);
                }
            } else { // Sent from lobby, not within a game
                if (!client.gameid) { // Client is in lobby - send message from lobby
                    client.send(message);
                } else if (pm.func === "announce") { // Client is in game and sender is a new client needing game data
                    client.send(message);
                }
            }
        }
    });
}
