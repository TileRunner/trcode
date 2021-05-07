const cors = require('cors');
const express = require("express");
const { Server } = require("ws");
const path = require("path");
const PORT = process.env.PORT || 5000;

const server = express()
    .use("/", express.static(path.join(__dirname, "../trapp/out")))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

wss.on("connection", (ws, req) => {
    console.log("web socket url=" + req.url);
    let urlParams = new URLSearchParams(req.url);
    let clienttype= urlParams.get('clienttype'); // pb=Prison Break
    console.log("clienttype=" + clienttype);
    let thisisme = urlParams.get('thisisme');
    console.log("thisisme=" + thisisme);
    ws.thisisme = thisisme;
    ws.clienttype = clienttype;

    ws.on("close", () => console.log("Client disconnected"));

    ws.on("message", (message) => {
        processMessage(message);
    });
});

// merely bounce the message from one client back to all clients except the sender
const processMessage = (message) => {
    console.log("Process message in server");
    let parsedMessage = JSON.parse(message);
    let senderid = parsedMessage.thisisme;
    let clienttype = parsedMessage.clienttype;
    console.log("Sender is " + senderid);
    wss.clients.forEach((client) => {
        if (client.thisisme === senderid) {
            console.log("Not sending " + clienttype + " message to self: " + senderid);
        } else {
            client.send(message);
        }
    });
}
