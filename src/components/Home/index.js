import {Component} from 'react'

import Message from './components/Message'

import Logout from './components/Logout'

import Login from './components/Login'

import './index.css'

class Home extends Component {
  state: {isLoggedIn: false, messageText: 'Please Login'}

  onClickButton = () => {
    const {isLoggedIn} = this.state

    if (isLoggedIn === false) {
      this.setState(prevState => ({
        isLoggedIn: true,
        messageText: 'Welcome User',
      }))
    } else {
      this.setState(prevState => ({
        isLoggedIn: false,
        messageText: 'Please Login',
      }))
    }
  }

  render() {
    const {isLoggedIn, messageText} = this.state

    return (
      <div className="container">
        <div className="card">
          <Message message={messageText} />
          {isLoggedIn ? (
            <Logout onClick={this.onClickButton} />
          ) : (
            <Login onClick={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
