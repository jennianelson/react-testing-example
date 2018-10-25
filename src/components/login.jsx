import React from 'react'

const Login = ({ onSubmit }) => {
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          const { username, password } = e.target.elements
          onSubmit({
            username: username.value,
            password: password,
          })
        }}
      >
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
