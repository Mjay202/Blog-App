import express from 'express';
import userRoute from "./routes/users"
import postRoute from "./routes/posts"
import authRoute from "./routes/auth"

const app = express();

app.use(express.json());

app.use("/api/user", userRoute)
app.use("/api/post", postRoute)
app.use("/api/auth", authRoute)

app.listen(6000, () =>
    console.log("Connected successfully")
);
