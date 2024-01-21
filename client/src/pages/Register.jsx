import React, { useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";


const Register = () => {

  const [userDetails, setuserDetails] = useState({
    fname: '',
    lname: '',
    email: '',
    password: ''
  })

  const handleChange = e => {
    setuserDetails(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", userDetails);
      console.log(res);
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <div className="auth">
        <h1>Register</h1>
        <form action="">
          <input type="text" placeholder="First Name" name='fname'  onChange={handleChange} />
          <input type="text" placeholder="Last Name" name='lname'  onChange={handleChange}/>
          <input type="email" placeholder="Email" name='email' onChange={handleChange}/>
          <input type="text" placeholder="Password" name='password' onChange={handleChange}/>
          <p>This is an error!</p>
          <button onClick={handleSubmit}>Register</button>
          <span>
            Have an account? <Link className="link" to="/login">Login</Link>{" "}
          </span>
        </form>
      </div>
    </>
  );
}

export default Register