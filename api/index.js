import express from 'express';
import cors from 'cors';
import userRoute from "./routes/users.js"
import postRoute from "./routes/posts.js"
import authRoute from "./routes/auth.js"
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
// MULTER FOR FILE STORAGE
import multer from "multer"; 


dotenv.config();


const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// USING MULTER...
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file
  res.status(200).json(file.filename);
});

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/auth", authRoute)

app.listen(5000, () =>
    console.log("Connected successfully")
);
