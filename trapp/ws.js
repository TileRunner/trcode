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
    constructor(url, messageFunction, clientType) {
        this.customSocket = null;
        this.socketUrl = url;
        this.clientType = clientType;
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
            console.log("connected to " + this.socketUrl);
            this.send(JSON.stringify({type:"announce",func:"announce"}));
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
        this.customSocket.send(JSON.stringify(message)); // Has to be a string going across the wire, not an object
    }
}
