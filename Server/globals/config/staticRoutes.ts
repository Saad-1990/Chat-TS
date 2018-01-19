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

const publicPath = path.resolve(__dirname + '/../../');


// Default Home Pages Routes of Application.
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../../', 'dummy.html'));
});

router.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname + '/../../', 'dummy.html'));
});

router.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname + '/../../', 'dummy.html'));
});

router.get('/default', function (req, res) {
    res.sendFile(path.join(__dirname + '/../../', 'dummy.html'));
});

//Assets Routes Which May be required when requesting application contents
router.get('/css/*', (req, res) => {
    res.sendFile(publicPath + '/public/static/assets/css/' + path.basename(req.path));
});

router.get('/js/*', (req, res) => {
    res.sendFile(publicPath + '/public/static/assets/js/' + path.basename(req.path));
});

router.get('/images/*', (req, res) => {
    res.sendFile(publicPath + '/public/static/assets/images/' + path.basename(req.path));
});


export const StaticRoutes: express.Router = router;