import express from "express"
import passport from "passport"
import dotenv from "dotenv"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import morgan from 'morgan'

dotenv.config()

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use(passport.initialize())

passport.use(new GoogleStrategy({
    clientID : process.env.GOOGLE_CLIENT_ID,
    clientSecret : process.env.GOOGLE_CLIENT_SECRET,
    callbackURL : "/auth/google/callback"},
    ( _, __, profile, done ) => {
        return done(null, profile)
    }
))

app.get("/auth/google", passport.authenticate('google', { scope : ['profile', 'email']}))

app.get("/auth/google/callback", passport.authenticate('google', 
    {failureRedirect : "/",
    session :false}),
    (req,res) => {
        console.log(req.user),
        res.send("Google Authenticated Successfully")
    }
)

app.get("/", (req, res) => {
    res.status(200).json({
        message : "server is running" 
    })
})



export default app