import express from "express";
import bodyParser from "body-parser";
// import cors from "cors";

import userRouter from './routes/user.route.js';

const app = express();

// Middleware
// app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

// Routes declarations
app.use("/api/v1/users", userRouter);

// Export the app
export { app };
