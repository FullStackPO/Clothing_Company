import express from "express"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("health check API")
})

export default app