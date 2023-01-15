import {Component} from 'react'

import {loginMessage, logoutMessage} from '../Message'

import logoutButtonText from '../Logout'

import loginButtonText from '../Login'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickButton = () => {
    const {isLoggedIn} = this.state

    if (isLoggedIn === false) {
      this.setState(prevState => ({
        isLoggedIn: true,
      }))
    } else {
      this.setState(prevState => ({
        isLoggedIn: false,
      }))
    }
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">
            {isLoggedIn ? logoutMessage : loginMessage}
          </h1>
          {isLoggedIn ? (
            <button
              type="button"
              className="button"
              onClick={this.onClickButton}
            >
              {logoutButtonText}
            </button>
          ) : (
            <button
              type="button"
              className="button"
              onClick={this.onClickButton}
            >
              {loginButtonText}
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Home
