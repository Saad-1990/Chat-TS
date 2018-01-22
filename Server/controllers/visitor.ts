/// <reference path="../typings/index.d.ts" />
// Created By Saad Ismail Shaikh
// Date : 22-1-18

import * as express from "express";

import { Visitor } from "../models/visitorModel";

let router = express.Router();

router.get('/', (req, res) => {
    var visitor = new Visitor();
    visitor.insertVisitors();
    res.send("Record Inserted");
});
router.get('/:username/:password/:email', (req, res) => {

});

export const visitorRoutes: express.Router = router;