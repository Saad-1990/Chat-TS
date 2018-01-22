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
import * as express from "express";

// Body Parser is used to parse Request Url body   
import * as bodyParser from "body-parser";

// import Common Routes
import * as Routes from "./config/routes"

//Singleton
export default class RequestHandler {
    //Static Initialization
    static get InitApplication() {
        let application = express();
        // allow to pass/convert query tring as json
        application.use(bodyParser.json());

        // Extended property allows to have embedded object in query string URI.
        // See Following Reference
        //https://stackoverflow.com/questions/29960764/what-does-extended-mean-in-express-4-0
        application.use(bodyParser.urlencoded({
            extended: true
        }));

        //Routes to Serve For Static Files
        application.use('/', Routes.StaticRoutes);

        // Additional Routes Can be defined here. (API ROUTES)
        application.use('/visitor', Routes.visitorRoutes);

        return application;
    }

}
Object.seal(RequestHandler);
