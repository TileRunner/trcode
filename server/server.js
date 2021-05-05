const cors = require('cors');
const express = require("express");
const { Server } = require("ws");
const path = require("path");
const PORT = process.env.PORT || 5000;

const server = express()
    .use("/", express.static(path.join(__dirname, "../trapp/out")))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.on("close", () => console.log("Client disconnected"));

    ws.on("message", (message) => {
        processMessage(message);
    });
});

// merely bounce the message from one client back to all clients
const processMessage = (message) => {
    wss.clients.forEach((client) => {
        /* client.clientType is undefined here; it does not matter that CustomSocket has it
           wss.clients is not a list of CustomSocket instances so it cannot see clientType
           I was hoping to use clientType to only send messages to clients in the same type of game
        */
        client.send(message);
    });
}
