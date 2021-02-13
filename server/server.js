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
    message = JSON.parse(message);
    wss.clients.forEach((client) => {
        client.send(message);
    });
}
