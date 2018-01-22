/// <reference path="../../typings/index.d.ts" />

//Created By Saad Ismail Shaikh
//Date : 19-1-2018

//Note : Its Main Database Config File Which Later can be used
// to configure production and Development Environment.

//Server Reference to close if any problem persist in connecting to database.
import { server } from "../server/httplistener"

//MongoDB Client Object from Node_modules MongoDB.
import { MongoClient, Db } from "mongodb";


// For Development Environment 
// Host : localhost or 127.0.0.1
// Port : 27017 which is Default port of MongoDB;
let devURI = 'mongodb://localhost:27017';
let dbName = "";

// Singleton Class
// Global database Class which will be used throughout the api of the application.
export class DataBaseConfig {
    private dataBase: Db;

    // Single Object instance of this class
    private static Instance: DataBaseConfig

    // Contructor is private  means the object can't be initialized directly.
    private constructor(prodURI?: string) {
        if (prodURI) {
            MongoClient.connect(prodURI, function (err, db) {
                if (err) {
                    console.log(err);
                    server.close();
                } else {
                    DataBaseConfig.Instance.dataBase = db.db(dbName);
                    console.log("connected to Database " + db.databaseName);
                }
            });
        } else {
            MongoClient.connect(devURI, function (err, db) {
                if (err) {
                    console.log(err);
                    server.close();
                } else {
                    DataBaseConfig.Instance.dataBase = db.db("test");
                    console.log("connected to Database ");
                    console.log("Database Name : " + DataBaseConfig.Instance.dataBase.databaseName);
                }
            });
        }
    }

    // Connect initialize database connection upon application start in index.js
    public static connect(prodURI?: string): Db {
        if (!prodURI) {
            if (!DataBaseConfig.Instance) {
                DataBaseConfig.Instance = new DataBaseConfig();
                return DataBaseConfig.Instance.dataBase;
            }
            return DataBaseConfig.Instance.dataBase;
        }
        else {
            if (!DataBaseConfig.Instance.dataBase) {
                DataBaseConfig.Instance = new DataBaseConfig(prodURI)
                return DataBaseConfig.Instance.dataBase;
            }
            return DataBaseConfig.Instance.dataBase;
        }
    }

    // In Case if you want to connect to another database in between application 
    // First call disconnect and then connect to ur URI
    public disconnect(): void {
        if (DataBaseConfig.Instance.dataBase) {
            DataBaseConfig.Instance.dataBase.close();
        }
        else {
            console.log('No Database Initialized');
        }
    }
}
