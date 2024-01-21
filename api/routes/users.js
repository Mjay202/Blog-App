import express from 'express'

const router = express.Router()

router.get("/", (req, res) => {
    res.json("Test successful")
})


export default router;