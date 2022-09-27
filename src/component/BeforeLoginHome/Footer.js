import React from 'react'
import './CSS/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div id='footer'>
            <div className="Gheading">Questions? Contact us.</div>
            <div className="boxes">
                <div className="box1 box">
                    <ul>
                        <li><Link to="/">FAQ</Link></li>
                        <li><Link to="/">Investor Relations</Link></li>
                        <li><Link to="/">Privacy</Link></li>
                        <li><Link to="/">Speed Test</Link></li>
                        <br />
                        <br />
                        <div className="lastFooter">
                            <li>Netflix Nepal</li>
                        </div>
                    </ul>
                </div>
                <div className="box2 box">
                    <ul>
                        <li><Link to="/">Help Center</Link></li>
                        <li><Link to="/">Jobs</Link></li>
                        <li><Link to="/">Cookie Preferences</Link></li>
                        <li><Link to="/">Legal Notices</Link></li>
                    </ul>
                </div>
                <div className="box3 box">
                    <ul>
                        <li><Link to="/">Account</Link></li>
                        <li><Link to="/">Ways to Watch</Link></li>
                        <li><Link to="/">Corporate Information</Link></li>
                        <li><Link to="/">Only on Netflix</Link></li>
                    </ul>
                </div>
                <div className="box4 box">
                    <ul>
                        <li><Link to="/">Media Center</Link></li>
                        <li><Link to="/">Terms of Use</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
