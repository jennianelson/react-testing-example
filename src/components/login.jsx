import React from 'react'
import { Link } from 'react-router-dom'

const Login = ({ onSubmit }) => {
  return (
    <div>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div className="App-link">Login</div>
      <form
        onSubmit={e => {
          e.preventDefault()
          const { username, password } = e.target.elements
          onSubmit({
            username: username.value,
            password: password.value,
          })
        }}
      >
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <input type="submit" />
      </form>
      <br />
      <Link to="/register" className="App-link" id="register">
        Register Instead
      </Link>
    </div>
  )
}

export default Login
