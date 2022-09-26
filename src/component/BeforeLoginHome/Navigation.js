import React from 'react'
import Logo from '../../pictures/logo.png'
import './CSS/Navigation.css'

const Navigation = () => {
  return (
    <nav>
        <img src={Logo} alt="Logo" />
        <button className='btn btn-signin'>Sign In</button>
    </nav>
  )
}

export default Navigation;