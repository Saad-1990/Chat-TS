/// <reference path="../../typings/index.d.ts" />

// Initialization of  Required Modules.

// Express Modules
import * as express from "express";

// Path Node Library for File Path Management
import * as path from "path";

// Starting HTTP server on Some Port Http Node Library is required.
/*  -- The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. 
    -- In particular, large, possibly chunk-encoded, messages. 
    -- The interface is careful to never buffer entire requests or responses--the user is able to stream data.
    -- https://nodejs.org/api/http.html
*/
import * as http from "http";

//Our Main Application Object Configured.
//Request Handler is the Root to Initialize Express application.
//Ths Layer Sits on top of controllers/routes Extend Security Model.
import requestHandler from "../requesthandler"

//Application Global Constants
import * as Constants from "../config/constants"

// assigning Express object to app variable 
// This is going to be our express app variable.
const app = requestHandler.InitApplication;

//Set Port
app.set('port', Constants.port);

// Server Will be started on the port mentioned above.
export const server: http.Server = app.listen(Constants.port, () => console.log(`Running on localhost:${Constants.port}`));
