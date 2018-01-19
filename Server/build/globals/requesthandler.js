"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../typings/index.d.ts" />
/* Author : Saad Ismail Shaikh
   Date   : 18-1-2015
   WARNING : Please Don Not Edit File Unless You Know Application Flow.
*/
/* ---------------------------------------------- Note (Important) ------------------------------------------
// |       --MiddleWare Sit on top of Controller Acts as Partial Controller.                                 |
// |      -- A Request Will be denied controlled from Here.                                                   |
// |      -- With The Help of Body Parsing This Layer will Decide on                                          |
// |      -- which Route/Controller a Request should be directed.                                             |
// -----------------------------------------------------------------------------------------------------------
// Express is used to Create Node Server and handling Routes (Controller Logic of MVC is implemented here)
*/
var express = require("express");
// Body Parser is used to parse Request Url body   
var bodyParser = require("body-parser");
// import Common Routes
var Routes = require("./config/staticRoutes");
//Singleton
var RequestHandler = /** @class */ (function () {
    function RequestHandler() {
    }
    Object.defineProperty(RequestHandler, "InitApplication", {
        //Static Initialization
        get: function () {
            var application = express();
            // allow to pass/convert query tring as json
            application.use(bodyParser.json());
            // Extended property allows to has embedded object in query string.
            // See Following Reference
            //https://stackoverflow.com/questions/29960764/what-does-extended-mean-in-express-4-0
            application.use(bodyParser.urlencoded({
                extended: true
            }));
            //Routes to Serve For Static Files
            application.use('/', Routes.StaticRoutes);
            return application;
        },
        enumerable: true,
        configurable: true
    });
    return RequestHandler;
}());
exports.default = RequestHandler;
Object.seal(RequestHandler);
//# sourceMappingURL=requesthandler.js.map