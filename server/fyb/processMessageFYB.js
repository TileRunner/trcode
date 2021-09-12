const { findLobbyClient, findLobbyClients, findGameClientsExceptMe, findGameClients } = require('../clients/clientFunctions');
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
    } else if (pm.func === "join") {
        processFybJoinGame(wss, pm);
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
            callingClient.gameid = pm.gameid;
            callingClient.nickname = pm.nickname;
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
                nickname: pm.nickname,
                thisisme: pm.thisisme,
                game: JSON.parse(JSON.stringify(game))
            };
            let gamecreatedMessage = JSON.stringify(gamecreatedJson);
            callingClient.send(gamecreatedMessage);
        }
    }
}

const processFybJoinGame = (wss, pm) => {
    let foundGame = findGame(pm.gameid);
    let callingClient = findLobbyClient(wss, pm.thisisme);
    if (callingClient) {
        if (!foundGame) {
            let gameUnknownJson = {
                type: clientType,
                func: 'gameidunknown',
                gameid: pm.gameid
            };
            let gameUnknownMessage = JSON.stringify(gameUnknownJson);
            callingClient.send(gameUnknownMessage);
        } else if (foundGame.numPlayers === foundGame.players.length) {
            let gameFullJson = {
                type: clientType,
                func: 'gamefull',
                gameid: pm.gameid
            };
            let gameFullMessage = JSON.stringify(gameFullJson);
            callingClient.send(gameFullMessage);
        } else {
            callingClient.gameid = pm.gameid;
            callingClient.nickname = pm.nickname;
            let playerIndex = foundGame.players.length;
            let newPlayer = {
                index: playerIndex,
                nickname: pm.nickname
            };
            foundGame.players.push(newPlayer);
            let eventIndex = foundGame.events.length;
            let joinEvent = {
                index: eventIndex,
                type: 'JOINGAME',
                nickname: pm.nickname
            };
            foundGame.events.push(joinEvent);
            let gameJoinedJson = {
                type: clientType,
                func: 'gamejoined',
                nickname: pm.nickname,
                thisisme: pm.thisisme,
                game: JSON.parse(JSON.stringify(foundGame))
            };
            let gameJoinedMessage = JSON.stringify(gameJoinedJson);
            callingClient.send(gameJoinedMessage);
            let gameClients = findGameClientsExceptMe(wss, clientType, pm.gameid, pm.thisisme);
            gameClients.forEach((gameClient) => {
                gameClient.send(gameJoinedMessage);
            })
        }
    }
}

const updateFybLobbyClient = (client) => {
    client.send(JSON.stringify({info:`Announcing client ${client.thisisme}`}));
}

module.exports = { fybInitialize, processMessageFYB };