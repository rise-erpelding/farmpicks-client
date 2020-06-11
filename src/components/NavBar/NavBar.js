import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import { Link } from 'react-router-dom'
import FarmContext from '../../contexts/FarmContext'
import './NavBar.css'

class NavBar extends Component {

  static contextType = FarmContext

  // showBackground = () => {
  //   this.context.showBackground()
  // }

  handleLogoutClick = () => {
    this.context.toggleLogin()
    TokenService.clearAuthToken()
  }

  renderLogoutAndProfileLinks() {
    return (
      <div className='nav-bar'>
        <Link
          to='/add-farm'>
          Add a farm
        </Link>
        <Link
          to='/my-profile'>
          My Profile
        </Link>
        <Link 
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='nav-bar'>
        <Link to='/register'>
          Register
        </Link>
        <Link to='/login'>
          Login
        </Link>
      </div>
    )
  }

  render () {


    return (
      <>

        {this.props.login === true
          ? this.renderLogoutAndProfileLinks()
          : this.renderLoginLink()}

      </>
    )
  }
}

export default NavBar