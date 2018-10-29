import React from 'react'

const Register = ({ registerUser }) => {
  return (
    <form onSubmit={registerUser}>
      <div>Register</div>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="submit" />
    </form>
  )
}

export default Register
