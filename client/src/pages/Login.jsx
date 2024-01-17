import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
      <>
          <div className="auth">
              <h1>Login</h1>
              <form action="">
                  <input type="email" placeholder='Email' />
                  <input type="text" placeholder='Password' />
                  <p>This is an error!</p>
                  <button>Login</button>
                  <span>Dont't have an account? <Link className="link" to="/register">Register</Link> </span>
              </form>
        </div>
      </>
  )
}

export default Login