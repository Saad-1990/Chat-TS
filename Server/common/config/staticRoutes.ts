/// <reference path="../../typings/index.d.ts" />

//Express Module Reference
import * as express from 'express';

// Path Object to Define "Default/Static/Generic" Routes
import * as path from "path";


// Main Entry Point of our app or Home Route for our app that will be delivered on default routes (Our Single Page Application)
// Angular DIST output folder
// ../        (ROOT)
//  |---->../build/dist/index.html (Output of Angular app/src)
// Since this will contain our static assest hence this path will remain static.

//Router Object Which Will be used to validate requests in Request Handler.
const router: express.Router = express.Router();


// Default Home Pages Routes of Application.
router.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'dummy.html'));
});


//Assets Routes Which May be required when requesting application contents
router.get('/css',express.static(path.join(__dirname,'public/static/assets/css')));
router.get('/js',express.static(path.join(__dirname,'public/static/assets/js')));
router.get('/images',express.static(path.join(__dirname,'public/static/assets/images')));


export const StaticRoutes : express.Router = router;