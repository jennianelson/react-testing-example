import React from 'react'
import { Link } from 'react-router-dom'

const Login = ({ onSubmit, loggedIn, logout }) => {
  if (!loggedIn) {
    return (
      <div>
        <div className="App-link">Login</div>
        <form
          onSubmit={e => {
            e.preventDefault()
            const { email, password } = e.target.elements
            onSubmit({
              email: email.value,
              password: password.value,
            })
          }}
        >
          <input type="text" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <input id="loginSubmit" type="submit" />
        </form>
        <br />
        <Link to="/register" className="App-link" id="register">
          Register Instead
        </Link>
      </div>
    )
  } else {
    return (
      <div>
        <Link to="/" className="App-link" onClick={logout}>
          Logout
        </Link>
        <p>You are logged in.</p>
      </div>
    )
  }
}

export default Login
