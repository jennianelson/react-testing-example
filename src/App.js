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
      error: false,
    }
  }

  loginUser = async params => {
    const result = await this.fetchApi(params, 'user/login')
    // debugger
    if (result.error) {
      this.setState({
        error: result.error,
      })
    }
    this.setState({
      loggedIn: true,
    })
  }

  logout = () => {
    fetch('https://beta.quantalytix.com/api/user/logout', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
    }).then(res => {
      if (res.ok) {
        this.setState({
          loggedIn: false,
        })
        alert('You have logged out!')
      } else {
        alert('oops')
      }
    })
  }

  registerUser = async e => {
    e.preventDefault()
    const { firstName, lastName, email, password } = e.target.elements
    let result = await this.fetchApi(
      {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      },
      'registration',
    )
    console.log(result)
  }

  fetchApi = (params, endpoint) => {
    return fetch('https://beta.quantalytix.com/api/' + endpoint, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(params),
    }).then(res => {
      if (res.ok) {
        const json = res.json()
        alert('Success!')
        return json
      } else {
        alert('Failed!')
        return { error: 'server error' }
      }
    })
  }

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
                  <Login
                    {...props}
                    onSubmit={this.loginUser}
                    loggedIn={this.state.loggedIn}
                    logout={this.logout}
                  />
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
