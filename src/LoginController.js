import React, { Component } from 'react'
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Greeting from './Greeting';

export default class LoginController extends Component {

  constructor(props){
    super(props);
    this.state = {isLoggedIn: true};
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false});
  }

  render() {
    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        
        {this.state.isLoggedIn && <LogoutButton onClick={this.handleLogoutClick} />}
        {!this.state.isLoggedIn && <LoginButton onClick={this.handleLoginClick} />}
      </div>
    )
  }
}
