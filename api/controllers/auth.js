import { db } from "../db.js";
import CryptoJS from "crypto-js"
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

// REGISTER PROCESS

export const register = (req, res) => {
    // CHECK EXISTING USERS

    const q = "SELECT * FROM users WHERE email = ?"
    const email = req.body.email

    db.query(q, [email], (err, data) => {
        if (err) return res.json(err)
        if (data.length) return res.status(409).json('User already exist!');

        // SAVE THE USER DETAILS

        // HASHING THE PASSWORD

        const hash = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
        
        // SAVING NOW

        const q = "INSERT INTO users ( `uname`, `email`, `password`  ) VALUES (?)"

        const values = [
            req.body.uname,
            req.body.email,
            hash
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err)
            return res.status(200).json("User is registered successfully")
        }) 
    })
    
};

// LOGIN PROCESS
export const login = (req, res) => {
    // CHECK IF REGISTERED

    const q = "SELECT FROM users WHERE email = ?"
    const email = req.body.email

    db.query(q, [email], (err, data) => {
      if (err) return res.json(err);
      if (data.length == 0) return res.status(404).json("User not found!");

        // CHECK IF PASSWORD IS CORRECT
        const decryptedPassword = CryptoJS.AES.decrypt(data[0].password, process.env.PASS_SEC).toString();
        if (req.body.password !== decryptedPassword) return res.status(400).json("Wrong username or password!")
        
        const token = jwt.sign({ id: data[0].id }, process.env.JWT_KEY);

        const {password, ...other} = data[0]

        res.cookie("access_token", token, {httpOnly: true}).status(200).json(other)
    })

   
};
export const logout = (req, res) => {

};