import { MongoClient } from "mongodb";

declare const global: {
    _mongoClientPromise?: Promise<MongoClient>;
};

if (!process.env.MONGO_DB) {
    throw new Error('Invalid/Missing environment variable: "MONGO_DB"');
}

const uri = process.env.MONGO_DB;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
