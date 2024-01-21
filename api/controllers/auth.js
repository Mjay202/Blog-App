import { db } from "../db.js";
import bcrypt from "bycrypt";



export const register = (req, res) => {
    // CHECK EXISTING USERS

    const q = "SELECT * FROM users WHERE email = ?"
    const email = req.body.email

    db.query(q, [email], (err, data) => {
        if (err) return res.json(err)
        if (data.length) return res.status(409).json('User already exist');

        // SAVE THE USER DETAILS

        // HASHING THE PASSWORD

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // SAVING NOW

        const q = "INSERT INTO users(`fname`, `lname`, `email`, `password`  ) VALUES (?)"

        const values = [
            req.body.fname,
            req.body.lname,
            req.body.email,
            hash
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err)
            return res.status(200).json("User is registered successfully")
        }) 
    })
    
};

export const login = (req, res) => {

};
export const logout = (req, res) => {

};