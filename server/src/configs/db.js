import config from "./config.js";
import mongoose from "mongoose";

const ConnectToDB = async() => {

    try{
        await mongoose.connect(config.MONGO_URI)
        console.log("Connected To Database.")
    }
    catch(err){
        console.log(err.message)
    }

} 

export default ConnectToDB