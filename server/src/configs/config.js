import dotenv from "dotenv"
dotenv.config()

if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI is not present.");
}

if(!process.env.JWT_SECRET){
    throw new Error("JWT_SECRET is not present.")
}

const config = {
    MONGO_URI : process.env.MONGO_URI,
    GOOGLE_CLIENT_ID : process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET : process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URL : process.env.GOOGLE_REDIRECT_URL,
    JWT_SECRET : process.env.JWT_SECRET
}

export default config