"use strict";
/// <reference path="typings/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
// Main Server Started in httpListener.ts ./server/httplistener 
var httplistener_1 = require("./globals/server/httplistener");
// socketListener Will Hook Http Server.
var socketlistener_1 = require("./globals/server/socketlistener");
// Main Application Loop
var io = socketlistener_1.SocketListener.StartListener(httplistener_1.server);
//# sourceMappingURL=index.js.map