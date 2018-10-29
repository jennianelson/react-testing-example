import React from 'react'
import { Redirect } from 'react-router-dom'

const Register = ({ registerUser, registered }) => {
  if (!registered) {
    return (
      <form onSubmit={e => registerUser(e)}>
        <div>Register</div>
        <input name="firstName" type="text" placeholder="First Name" />
        <input name="lastName" type="text" placeholder="Last Name" />
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <input id="registerSubmit" type="submit" />
      </form>
    )
  } else {
    return <Redirect to="/" />
  }
}

export default Register
