import express from "express";
import userRouter from './routes/user.route.js'
import bodyParser from "body-parser";

const app = express();

app.use(express.json())

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true, limit: "20kb" }))



app.use("/api/v1/users",userRouter)


export { app }