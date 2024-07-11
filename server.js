import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
dotenv.config()

const app = express()
const port = process.env.PORT

app.use(morgan("dev"))
app.get("/", (req,res) => {
    res.send("api is working")
})

connectDB();

app.listen(port, () => {
    console.log (`Server is lisening on port ${port}`)
})

//mongodb+srv://nanbyenlazwan:Grea77mind@cluster0.uhpidww.mongodb.net/?