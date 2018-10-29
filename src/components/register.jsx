import React from 'react'

const Register = ({ registerUser }) => {
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
}

export default Register
