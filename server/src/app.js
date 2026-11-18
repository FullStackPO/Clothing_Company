import express from "express"
import router from "./routes/auth.routes.js"
import morgan from 'morgan'
import cors from "cors"

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true
}))

app.get("/", (req, res) => {
    res.send("health check API")
})

app.use("/api/auth", router)

export default app