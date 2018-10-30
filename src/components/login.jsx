import React from 'react'
import { Link } from 'react-router-dom'

const Login = ({ onSubmit, loggedIn, logout, user, error }) => {
  if (!loggedIn) {
    return (
      <div data-testid="login-div">
        <div data-testid="login" className="App-link">
          Login
        </div>
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
          <input name="email" type="text" placeholder="email" required />
          <input
            name="password"
            type="password"
            placeholder="password"
            required
          />
          <input id="loginSubmit" type="submit" />
        </form>
        <div data-testid="login-error">{error ? error : null}</div>
        {/* {error ? <div data-testid="login-error">{error}</div> : null} */}
        <br />
        <Link to="/register" className="App-link" id="register">
          Register Instead
        </Link>
      </div>
    )
  } else {
    return (
      <div>
        <Link to="/" data-testid="logout" className="App-link" onClick={logout}>
          Logout
        </Link>
        <div data-testid="email-display">
          You are logged in as {user.email}.
        </div>
      </div>
    )
  }
}

export default Login
