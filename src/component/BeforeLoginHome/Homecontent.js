import React from 'react'
import Navigation from './Navigation';
import Information from './Information';
import './CSS/Home.css'
import Content from './Content';
import Button from './Button';
import Footer from './Footer';



const Homecontent = () => {
    return (
        <>
            <Navigation />
            <div id='HomeBeforeLogin'>
                <div className='homeContent'>
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h5>Watch anywhere. Cancel anytime.</h5>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <Button />
                </div>
            </div>
            <Information />
            <Content />
            <Footer />
        </>
    )
}

export default Homecontent
