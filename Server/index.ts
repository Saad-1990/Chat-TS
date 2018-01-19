/// <reference path="typings/index.d.ts" />

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

import * as Constants from "./globals/config/constants"

// Main Server Started in httpListener.ts ./server/httplistener 
import { server } from "./globals/server/httplistener";

// socketListener Will Hook Http Server.
import { SocketListener } from "./globals/server/socketlistener";

// Main Application Loop
let io = SocketListener.StartListener(server);
