import {} from "dotenv/config"
import express from "express"
import helmet from "helmet"
import mongoose from "mongoose"
import morgan from "morgan"

//App Config

const app = express()
const port = process.env.PORT || 5000

//middlewar

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

//DB CONFIG

mongoose.connect(process.env.MONGODB_CONNECTION_URL,
    {useNewUrlParser:true},
    ()=>{
        console.log("MONGODB CONNECTED");
    })


//API ROUTES

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.listen(port,()=>{
    console.log("Server running at "+port)
})