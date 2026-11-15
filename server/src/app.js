import express from "express"
import router from "./routes/auth.routes.js"
import morgan from 'morgan'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.send("health check API")
})

app.use("/api/auth", router)

export default app