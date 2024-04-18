import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))  // for special characters like 
           // space - %20 etc.
app.use(express.static("public"))  //for storing files and folders
app.use(cookieParser()) // for access and set the cookies from my server (crud operations)

//routes import 
import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/api/v1/users", userRouter)
// http://localhost:8000/api/v1/users/_______

export { app }


// middleware - if we are requesting, a response will be given by the server. so server check if you are capable of taking the response. (eg: if you are logged in or not) this checking process is known as middleware.