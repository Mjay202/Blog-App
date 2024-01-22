import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Register = () => {

  const navigate = useNavigate();
  const [userDetails, setuserDetails] = useState({
    uname: '',
    email: '',
    password: ''
  })

  const [errorMsg, seterrorMsg] = useState("")

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
      navigate("/login");
    } catch (err) {
     seterrorMsg(err.response.data)
    }
  }
  return (
    <>
      <div className="auth">
        <h1>Register</h1>
        <form action="">
          <input type="text" placeholder="Username" name='uname'  onChange={handleChange}/>
          <input type="email" placeholder="Email" name='email' onChange={handleChange}/>
          <input type="text" placeholder="Password" name='password' onChange={handleChange}/>
          {errorMsg && <p>{ errorMsg}</p>}
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