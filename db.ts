import { MongoClient } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import * as config from './config.json' assert { type: "json" };

const mongo = new MongoClient();
await mongo.connect(config.mongourl);
const db = mongo.database(config.dbname);