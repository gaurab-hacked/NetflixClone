import React from 'react'
import './CSS/Footer.css'
import { Link } from 'react-router-dom'

const LoginFooter = () => {
    return (
        <div id='footer'>
            <div className="Gheading">Questions? Contact us.</div>
            <div className="boxes">
                <div className="box1 box">
                    <ul>
                        <li><Link to="/">FAQ</Link></li>
                        <li><Link to="/">Cookie Preferences</Link></li>
                    </ul>
                </div>
                <div className="box2 box">
                    <ul>
                        <li><Link to="/">Help Center</Link></li>
                        <li><Link to="/">Corporate Information</Link></li>
                    </ul>
                </div>
                <div className="box3 box">
                    <ul>
                        <li><Link to="/">Terms of Use</Link></li>
                    </ul>
                </div>
                <div className="box4 box">
                    <ul>
                        <li><Link to="/">Privacy</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LoginFooter
