class Timer {
    constructor(callback, timerCalc) {
        this.callback = callback;
        this.timerCalc = timerCalc;
        this.timer = null;
        this.tries = 0;
    }

    reset() {
        this.tries = 0;
        clearTimeout(this.timer);
    }

    scheduleTimeout() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.tries = this.tries + 1;
            this.callback();
        }, this.timerCalc(this.tries + 1));
    }
}
export default class CustomSocket {
    // Constructor which takes socket URL as parameter
    constructor(url, messageFunction, clientType, thisisme) {
        this.customSocket = null;
        this.socketUrl = url;
        this.clientType = clientType;
        this.thisisme = thisisme;
        this.reconnectTimer = new Timer(() => {
            this.disconnect();
            this.connect();
        }, this.reconnectAfterMs);
        this.messageFunction = messageFunction;
    }

    // Reconnect time intervals based on tries
    reconnectAfterMs(tries) {
        return [1000, 2000, 5000, 10000][tries - 1] || 10000;
    }

    // Create socket and define socket methods
    connect() {
        // Create new socket
        this.customSocket = new WebSocket(this.socketUrl);

        // onopen - called when connection is open and ready to send and receive data.
        this.customSocket.onopen = (event) => {
            // console.log("client type " + this.clientType + " connected as " + this.thisisme);
            this.send({type: this.clientType, func: "announce", thisisme: this.thisisme}); // So client can know they connected
        };

        // onclose - called when the connection's closes.
        this.customSocket.onclose = (event) => {
            // On connection close try again to connect
            this.reconnectTimer.scheduleTimeout();
        };

        // onerror - called when an error occurs.
        this.customSocket.onerror = (event) => {};

        // onmessage - called when a message is received from the server.
        this.customSocket.onmessage = this.messageFunction;
    }

    // close socket connection
    disconnect() {
        // resetting in close method to stop timer on disconnect
        this.customSocket.onclose = function () {};
        // Closing socket
        this.customSocket.close();
    }
    send(message) {
        // console.log(`ws send ${JSON.stringify(message)}`);
        message.thisisme = this.thisisme; // Include client identifier
        message.clientType = this.clientType; // Include client type (pb=Prison Break)
        let stringmessage = JSON.stringify(message);
        this.customSocket.send(stringmessage); // Has to be a string going across the wire, not an object
    }
}
