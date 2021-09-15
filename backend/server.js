import {} from "dotenv/config"
import express from "express"
import helmet from "helmet"
import mongoose from "mongoose"
import morgan from "morgan"

import userRoute from "./routes/users.js"
import authRoute from "./routes/auth.js"
//App Config

const app = express()
const port = process.env.PORT || 5000

//DB CONFIG

mongoose.connect(process.env.MONGODB_CONNECTION_URL,
    {useNewUrlParser:true},
    ()=>{
        console.log("MONGODB CONNECTED");
    })

//middleware

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

//API ROUTES

app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)

app.listen(port,()=>{
    console.log("Server running at "+port)
})