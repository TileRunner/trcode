const cors = require('cors');
const express = require("express");
const { Server } = require("ws");
const path = require("path");
const PORT = process.env.PORT || 5000;
require('dotenv').config(); // For reading environment variabeles

const server = express()
    .use("/", express.static(path.join(__dirname, "../trapp/out")))
    .get("/evtest", (req, res) => {
        let evtest = process.env.NEXT_PUBLIC_CODER_MESSAGE; // On developers local computer environment variables and heroku config settings
        res.json({test: 'value', evtest: evtest});
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

wss.on("connection", (ws, req) => {
    let urlParams = new URLSearchParams(req.url.slice(1)); // Need to remove leading /
    let clienttype= urlParams.get('clienttype'); // pb=Prison Break
    let thisisme = urlParams.get('thisisme');
    // console.log(`Connected ${clienttype} > ${thisisme}`);
    ws.thisisme = thisisme;
    ws.clienttype = clienttype;

    ws.on("close", () => console.log("Client disconnected"));

    ws.on("message", (message) => {
        processMessage(message);
    });
});

// merely bounce the message from one client back to all clients except the sender
const processMessage = (message) => {
    let parsedMessage = JSON.parse(message);
    let senderid = parsedMessage.thisisme;
    let clienttype = parsedMessage.clienttype;
    let gameid = parsedMessage.gameid;
    let func = parsedMessage.func;
    // console.log(`\nServer processMessage ${clienttype} ${senderid} ${func} ${gameid}`);
    wss.clients.forEach((client) => {
        if (client.thisisme === senderid) {
            // console.log("Not sending " + clienttype + " message to self: " + senderid);
            if (gameid && !client.gameid) {
                // console.log(`Client type ${client.clienttype}, id ${client.thisisme}, now has gameid ${gameid}`);
                client.gameid = gameid;
            }
        } else if (gameid) { // Sent from within a game, not from lobby
            if (!client.gameid) { // Client is in lobby
                // console.log(`Sending from game to lobby client ${client.thisisme}`); // Lobby needs to list games
                client.send(message);
            } else if (gameid !== client.gameid) { // Different game
                // console.log(`Not sending from game to different game ${client.gameid}`);
            } else { // Same game, send it
                // console.log(`Sending to game participant ${client.thisisme}`);
                client.send(message);
            }
        } else { // Sent from lobby, not within a game
            if (client.gameid) { // Client is in a game
                // console.log(`Not sending from lobby to client ${client.thisisme} in game ${client.gameid}`);
            } else {
                // console.log(`Sending from lobby to client ${client.thisisme} in lobby`);
                client.send(message);
            }
        }
    });
}
