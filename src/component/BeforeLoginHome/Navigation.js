import React from 'react'
import Logo from '../../pictures/logo.png'
import './CSS/Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <Link to="/login">
        <button className='btn btn-signin'>Sign In</button>
      </Link>
    </nav>
  )
}

export default Navigation;