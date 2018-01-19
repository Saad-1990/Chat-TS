"use strict";
/// <reference path="../../typings/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
//Importing Socket.io Server Instance
var socketListener = require("socket.io");
// Socket Object for Chat Recieving/Sending {Bi-directional Communication} Messages.
// Sockets are required so that websocket communication from client and server has been made.
// For Tutorial of socket.io on Node.js see following Link along with simple chat client/server application
// https://socket.io/get-started/chat/
var SocketListener = /** @class */ (function () {
    function SocketListener() {
    }
    SocketListener.StartListener = function (httpServer) {
        var socketIO = socketListener.listen(httpServer);
        // Socket.io event whenever a user is connected.
        // For Server api of Socket.io visit following link for detailed information
        // https://socket.io/docs/server-api/
        // io is global Server Object any event occurs on io object will be treated for every user/socket
        // socket events are visitors and every visitor may perform their own event on their socket instance 
        socketIO.on('connection', function (socket) {
            console.log(socket.handshake.query);
            //Case Where a user is connected must be reported to all .
            socket.broadcast.emit('message', socket.id + ' Connected');
            //Socket Specific Event Binding.
            // A Single Socket will be treated as a Single visitor/user
            socket.on('disconnect', function () {
                console.log('user disconnected');
            });
            //The Message recieved from a particular client/socket/visitor
            socket.on('message', function (msg) {
                console.log('message: ' + msg);
            });
        });
    };
    return SocketListener;
}());
exports.SocketListener = SocketListener;
//# sourceMappingURL=socketlistener.js.map