import express from "express";
import bodyParser from "body-parser";


import userRouter from './routes/user.route.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));



// Routes declarations
app.use("/api/v1/users", userRouter);
// localhost:3000/api/v1/users/...


// Export the app
export { app };
