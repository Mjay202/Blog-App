import React from 'react'
import { Link } from "react-router-dom";

const SinglePost = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://source.unsplash.com/800x600/?technology" alt="" />
        <div className="user">
          <img
            src="https://source.unsplash.com/150x150/?portrait"
            alt="userimage"
            className="userimg"
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="modify">
            <Link><img src="" alt="" /></Link>
          </div>
        </div>
      </div>
      <div className="menu">m</div>
    </div>
  );
}

export default SinglePost