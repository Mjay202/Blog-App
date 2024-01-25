import { db } from "../db.js"
import jwt from "jsonwebtoken";


export const getPosts = (req, res) => {
   
  const q = req.query.cat ?
    "SELECT * FROM posts WHERE cat = ?" :
    "SELECT * FROM posts"
 
  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });

  
};

export const getPost = (req, res) => {
  const q = "SELECT p.id, `uname`, `title`, `desc`, `cont`, p.img, u.image AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ?"
  
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};
 
export const addPost = (req, res) => {
   res.json("Test successful");
};
 
export const deletePost = (req, res) => {
  //  CHECK IF THERE IS A TOKEN

  const token = req.cookies.access_token;

  if (!token) return res.status(401).json('Not authenticated! Please login');

  // IF TOKEN, VERIFY IT THROUGH JWT

  jwt.verify(token, process.env.JWT_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token is invalid")

    // IF TOKEN IS VALID, DELETE NOW

    const postId = req.params.id

    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?"

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can not delete this post!");

      return res.status(200).json("Post has been deleted successfully");
    })
  })
};
 
export const updatePost = (req, res) => {
  //  CHECK IF THERE IS A TOKEN

  const token = req.cookies.access_token;

  if (!token) return res.status(401).json("Not authenticated! Please login");

  // IF TOKEN, VERIFY IT THROUGH JWT

  jwt.verify(token, process.env.JWT_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token is invalid");

    // IF TOKEN IS VALID, UPDATE NOW

    const postId = req.params.id;

    const q =
      "UPDATE posts SET `title` = ?, `desc` = ?, `img`  = ?, `cat`  = ?, `date`  = ?, `cont`  = ?  WHERE `id` = ? AND `uid` = ?";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      req.body.cont
    ];
    
    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can not update this post!");

      return res.status(200).json("Post has been updated successfully");
    });
  });
};