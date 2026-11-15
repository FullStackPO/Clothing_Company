import dotenv from "dotenv"
dotenv.config()

const config = {
    MONGO_URI : process.env.MONGO_URI,
    GOOGLE_CLIENT_ID : process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET : process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URL : process.env.GOOGLE_REDIRECT_URL
}

export default config