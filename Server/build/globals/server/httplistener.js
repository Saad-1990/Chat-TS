"use strict";
/// <reference path="../../typings/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
//Our Main Application Object Configured.
//Request Handler is the Root to Initialize Express application.
//Ths Layer Sits on top of controllers/routes Extend Security Model.
var requesthandler_1 = require("../requesthandler");
//Application Global Constants
var Constants = require("../config/constants");
// assigning Express object to app variable 
// This is going to be our express app variable.
var app = requesthandler_1.default.InitApplication;
//Set Port
app.set('port', Constants.port);
// Server Will be started on the port mentioned above.
exports.server = app.listen(Constants.port, function () { return console.log("Running on localhost:" + Constants.port); });
//# sourceMappingURL=httplistener.js.map