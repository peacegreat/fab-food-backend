import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodroute.js"
dotenv.config()

//app config
const app = express()
const port = process.env.PORT

//db connection
connectDB();


//middleware
app.use(morgan("dev"))

app.get("/", (req,res) => {
    res.send("api is working")
})


//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads/'))

app.listen(port, () => {
    console.log (`Server is lisening on port ${port}`)
})

//mongodb+srv://nanbyenlazwan:Grea77mind@cluster0.uhpidww.mongodb.net/?