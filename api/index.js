import express from 'express';

const app = express();

app.use(express.json());

app.listen(6000, () =>
    console.log("Connected successfully")
);
