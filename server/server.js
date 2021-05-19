const _ = require('cors');
const express = require("express");
const { Server } = require("ws");
const path = require("path");
const PORT = process.env.PORT || 5000;
require('dotenv').config(); // For reading environment variables
const allowedCaller = (process.env.NODE_ENV === 'production' ? 'https://tilerunner.herokuapp.com' : 'http://localhost:3000')

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
        if (pm.func === "startgame" || pm.func === "ept" || pm.func === "egt" || pm.func === "undoturn") {
            console.log(`Update the database here for ${pm.clientType} gameid=${pm.gameid} func=${pm.func}`); // This is where we need a database update
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
