import {db} from "../db.js"



export const register = (req, res) => {
    // CHECK EXISTING USERS

    const q = "SELECT * FROM users WHERE email = ?"
    const email = req.body.email

    db.query(q, [email], (err, data) => {
        if (err) return res.json(err)
        if (data.length) return res.status(409).json('User already exist');

        // SAVE THE USER DETAILS

        // HASHING THE PASSWORD
        
    })
    
};

export const login = (req, res) => {

};
export const logout = (req, res) => {

};