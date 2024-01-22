import express from 'express';
import cors from 'cors';
import userRoute from "./routes/users.js"
import postRoute from "./routes/posts.js"
import authRoute from "./routes/auth.js"
import cookieParser from "cookieparser";

const app = express();

app.use(cors())

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoute)
app.use("/api/post", postRoute)
app.use("/api/auth", authRoute)

app.listen(5000, () =>
    console.log("Connected successfully")
);
