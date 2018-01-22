/// <reference path="../typings/index.d.ts" />
// Created By Saad Ismail Shaikh
// Date : 22-1-18

import { DataBaseConfig } from "../globals/config/database";
import { Db } from "mongodb";

export class Visitor {
    db: Db;
    constructor() {
        this.db = DataBaseConfig.connect();
    }
    public getAllVisitors(): void {
        console.log("All Visitors Reached");
    }
    public getVisitorsByID(): number {
        return 0;
    }
    public getVisitorsByName(): string {
        return "Saad";
    }
    public insertVisitors(): void {
        let collection = this.db.collection('visitors');
        console.log(this.db.databaseName);
        collection.insert({
            "_id": Math.random() * 1000,
            "name": "Saad",
            "DateTime": Date.now()
        });
    }
}