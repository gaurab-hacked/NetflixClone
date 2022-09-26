import React from 'react'
import './CSS/Home.css'


const Button = () => {
    return (
        <div className='detInpFld'>
            <input type="email" name='email' id='email' placeholder='Email address' />
            <button className='btn'>Get Started</button>
        </div>
    )
}

export default Button
