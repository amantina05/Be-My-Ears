import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <center>
      <h1>Be My Ears</h1>
      <nav className="navbar">
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
            <Link to="/profile">Profile</Link>

            <Link to="/speechtotext">Speech To Text</Link>
            {/* <Link to="/texttospeech"> Text To Speech</Link> */}
            <Link to="/texttoasl">Text To ASL</Link>
            <Link to="/asltotext">ASL To Text</Link>
            <Link to="/asltospeech">ASL To Speech</Link>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/ghome">Home</Link>

            <Link to="/speechtotext">Speech To Text</Link>
            {/* <Link to="/texttospeech"> Text To Speech</Link> */}
            <Link to="/texttoasl">Text To ASL</Link>
            <Link to="/asltotext">ASL To Text</Link>
            <Link to="/asltospeech">ASL To Speech</Link>
          </div>
        )}
      </nav>
      <hr />
    </center>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
