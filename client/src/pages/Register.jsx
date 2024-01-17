import React from 'react'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="auth">
        <h1>Register</h1>
        <form action="">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <p>This is an error!</p>
          <button>Register</button>
          <span>
            Have an account? <Link className="link" to="/login">Login</Link>{" "}
          </span>
        </form>
      </div>
    </>
  );
}

export default Register