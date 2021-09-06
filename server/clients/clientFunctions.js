function findLobbyClient(wss, thisisme) {
    let lobbyClient;
    wss.clients.forEach((client) => {
        if (client.thisisme === thisisme) {
            lobbyClient = client;
        }
    });
    return lobbyClient;
}

function findLobbyClients(wss) {
    let lobbyclients = [];
    wss.clients.forEach((client) => {
        if (!client.gameid) {
            lobbyclients.push(client);
        }
    });
    return lobbyclients;
}

function findPlayerClient(wss, gameid, playerThisisme) {
    let foundClient = null;
    wss.clients.forEach((client) => {
        if (client.thisisme === playerThisisme) {
            if (!client.gameid && gameid) {
                // console.log(`Setting gameid to ${gameid} for client ${playerThisisme}`);
                client.gameid = gameid;
            }
            foundClient = client;
        }
    });
    return foundClient;
}

function findGameClients(wss, gameid) {
    let gameclients = [];
    wss.clients.forEach((client) => {
        if (client.gameid === gameid) {
            gameclients.push(client);
        }
    });
    return gameclients;
}

function findGameClientsExceptMe(wss, gameid, playerThisisme) {
    let gameclients = [];
    wss.clients.forEach((client) => {
        if (client.gameid === gameid && client.thisisme !== playerThisisme) {
            gameclients.push(client);
        }
    });
    return gameclients;
}


module.exports = { findLobbyClient, findLobbyClients, findPlayerClient, findGameClients, findGameClientsExceptMe };