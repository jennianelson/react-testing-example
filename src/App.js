import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './components/login'

class App extends Component {
  handleOnSubmit = params => {
    const { username, password } = params
    console.log(`password entered: ${password}`)
    return alert(`You logged in, ${username}!`)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Login onSubmit={this.handleOnSubmit} />
        </header>
      </div>
    )
  }
}

export default App
