import express from "express";
import dontenv from "dotenv";
import connectDb from "./database/db.js";
import links from "./routes/itemRoutes.js";
import cors from "cors";
import morgar from "morgan"
import morgan from "morgan";



const app = express();
//Middle Ware

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/api', links)

dontenv.config()
const port = process.env.PORT

app.listen(port,()=>{
    console.log("Server Running")
    connectDb()
})
