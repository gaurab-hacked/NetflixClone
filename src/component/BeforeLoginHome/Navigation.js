import React from 'react'
import Logo from '../../pictures/logo.png'
import './CSS/Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <img src={Logo} alt="Logo" />
      <a href="/login">
        <button className='btn btn-signin'>Sign In</button>
      </a>
    </nav>
  )
}

export default Navigation;