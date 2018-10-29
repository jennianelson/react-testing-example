import React, { Component } from 'react'
import './App.css'
import Login from './components/login'
import Register from './components/register'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
    }
  }

  handleOnSubmit = params => {
    const { username, password } = params
    console.log(`password entered: ${password}`)
    this.setState({
      loggedIn: true,
    })
    return alert(`You logged in, ${username}!`)
  }

  registerUser = () => {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Switch>
              <Route
                path="/register"
                render={props => (
                  <Register {...props} registerUser={this.registerUser} />
                )}
              />
              <Route
                path="/"
                render={props => (
                  <Login {...props} onSubmit={this.handleOnSubmit} />
                )}
              />
            </Switch>
          </Router>
        </header>
      </div>
    )
  }
}

export default App
