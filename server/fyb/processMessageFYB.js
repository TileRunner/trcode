const { findLobbyClient, findLobbyClients } = require('../clients/clientFunctions');
const clientType = 'fyb';
var games = []; // Array of games in progress
function fybInitialize() {

}
function findGame(gameid) {
    let foundGame;
    games.forEach((game) => {
        if (game.gameid === gameid) {
            foundGame = game;
        }
    });
    return foundGame;
}
function sendErrorMessage(client, errorText) {
    let errorJson = {
        type: clientType,
        func: 'error',
        text: errorText
    };
    let errorMessage = JSON.stringify(errorJson);
    client.send(errorMessage);
}
function processMessageFYB (wss, pm, message) {
    if (pm.func === "announce") {
        processFybAnnounce(wss, pm);
    } else if (pm.func === "create") {
        processFybCreateGame(wss, pm);
    }
}

const processFybAnnounce = (wss, pm) => {
    let lobbyClient = findLobbyClient(wss, pm.thisisme);
    if (lobbyClient) {
        updateFybLobbyClient(lobbyClient);
    }
}

const processFybCreateGame = (wss, pm) => {
    let foundGame = findGame(pm.gameid);
    let callingClient = findLobbyClient(wss, pm.thisisme);
    if (callingClient) {
        if (foundGame) {
            let takenJson = {
                type: clientType,
                func: 'gameidtaken',
                gameid: pm.gameid
            };
            let takenMessage = JSON.stringify(takenJson);
            callingClient.send(takenMessage);
        } else {
            let game = {
                datestamp: pm.timestamp,
                gameid: pm.gameid,
                numPlayers: pm.numPlayers,
                players: [{
                    index: 0,
                    nickname: pm.nickname
                }],
                events: [{
                    index: 0,
                    timestamp: pm.timestamp,
                    type: "CREATEGAME"
                }]
            };
            games.push(game);
            let gamecreatedJson = {
                type: clientType,
                func: 'gamecreated',
                gameid: pm.gameid
            };
            let gamecreatedMessage = JSON.stringify(gamecreatedJson);
            callingClient.send(gamecreatedMessage);
        }
    }
}

const updateFybLobbyClient = (client) => {
    client.send(JSON.stringify({info:`Announcing client ${client.thisisme}`}));
}

const updateLobbyClients = (wss) => {
    let lobbyClients = findLobbyClients(wss, clientType);
    let msg = getGameListMessageString();
    lobbyClients.forEach((client) => {
        client.send(msg);
    });
}

const getGameListMessageString = () => {
    games.sort((a, b) => a.datestamp < b.datestamp ? 1 : -1); // Youngest on top
    let jgamelist = {
        type: clientType,
        func: "gamelist",
        gamelist: games
    };
    return JSON.stringify(jgamelist);
}

module.exports = { fybInitialize, processMessageFYB };