import express from 'express';
import cors from 'cors';
import userRoute from "./routes/users.js"
import postRoute from "./routes/posts.js"
import authRoute from "./routes/auth.js"
import cookieParser from "cookie-parser";
import dotenv from "dotenv";


dotenv.config();


const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/auth", authRoute)

app.listen(5000, () =>
    console.log("Connected successfully")
);
