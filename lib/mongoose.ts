import mongoose from "mongoose";

let isConnect = false;

export const connectToDB = async () => {
    try {
        if (!process.env.MONGO_DB) return console.log("MONGODB URL NOT FOUND");
        if (isConnect) return console.log("ALREADY CONNECTED TO DB");

        await mongoose.connect(process.env.MONGO_DB);

        isConnect = true;

        console.log("<...CONNECTED TO MONGODB...>");
    } catch (error) {
        console.log(error);
    }
};
