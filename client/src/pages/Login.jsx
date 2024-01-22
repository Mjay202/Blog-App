import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();
  const [userDetails, setuserDetails] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, seterrorMsg] = useState("");

  const handleChange = (e) => {
    setuserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        userDetails,
        { withCredentials: true }
      );
      console.log(res)
      navigate("/");
    } catch (err) {
      seterrorMsg(err.response.data);
      console.log(err);
    }
  };

  return (
    <>
      <div className="auth">
        <h1>Login</h1>
        <form action="">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          {errorMsg && <p>{errorMsg }</p>}
          <button onClick={handleSubmit}>Login</button>
          <span>
            Dont't have an account?{" "}
            <Link className="link" to="/register">
              Register
            </Link>{" "}
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;
