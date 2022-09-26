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
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Speed Test</a></li>
                        <br />
                        <br />
                        <div className="lastFooter">
                            <li>Netflix Nepal</li>
                        </div>
                    </ul>
                </div>
                <div className="box2 box">
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Cookie Preferences</a></li>
                        <li><a href="#">Legal Notices</a></li>
                    </ul>
                </div>
                <div className="box3 box">
                    <ul>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Ways to Watch</a></li>
                        <li><a href="#">Corporate Information</a></li>
                        <li><a href="#">Only on Netflix</a></li>
                    </ul>
                </div>
                <div className="box4 box">
                    <ul>
                        <li><a href="#">Media Center</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
