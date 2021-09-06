const { findLobbyClient } = require('../clients/clientFunctions');

function processMessageFYB (wss, pm, message) {
    if (pm.func === "announce") {
        processFybAnnounce(wss, pm);
    }
}

const processFybAnnounce = (wss, pm) => {
    let lobbyClient = findLobbyClient(wss, pm.thisisme);
    if (lobbyClient) {
        updateFybLobbyClient(lobbyClient);
    }
}

const updateFybLobbyClient = (client) => {
    client.send(JSON.stringify({info:`Announcing client ${client.thisisme}`}));
}

module.exports = { processMessageFYB };