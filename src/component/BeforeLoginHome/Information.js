import React from 'react'
import './CSS/Information.css'
import TVImg from '../../pictures/tv.png'
import TVVideo from '../../pictures/tvVideo.m4v'
import mobileImg from '../../pictures/mobile.jpg'
import MovieImg from '../../pictures/strangerThings.png'
import loagerImg from '../../pictures/download.gif'
import Kids from '../../pictures/kids.png'



const Information = () => {
    return (
        <>
            <div className="upshadow"></div>
            <div id='FirstInfoTV'>
                <div id='TVrightBox'>
                    <h1 className='heading'>Enjoy on your TV.</h1>
                    <p className='paragraph'> Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
                <div id='TVLeftBox'>
                    {/* make both in one box and make relative  */}

                    <div className="tvVideo">
                        <img src={TVImg} alt="Tvimg" />
                        <video autoPlay loop muted>
                            <source src={TVVideo} type="video/mp4" />
                        </video>
                    </div>

                </div>

            </div>
            <div className="downshadow"></div>
            <div id="DownloadShow">
                <div className="downloadRightBox">
                    <img src={mobileImg} alt="mobile" />
                    <div className="filmdownloadShow">
                        <img src={MovieImg} alt="filming" />
                        <div className="content">
                            <h3>Stranger Things</h3>
                            <p>Downloading...</p>
                        </div>
                        <div id="loaderImg">
                            <img src={loagerImg} alt="mobile" />
                        </div>

                    </div>
                </div>
                <div className="downloadLeftBox">
                    <h1 className='heading'>Download your shows to watch offline.</h1>
                    <p className='paragraph'>Save your favorites easily and always have something to watch.</p>
                </div>
            </div>
            <div className="downshadow"></div>
            <div id="whatcheverywhere">
                <div className="rightBoxWatchLater">
                    <h1 className='heading'>Watch everywhere</h1>
                    <p className='paragraph'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV</p>
                </div>
            </div>
            <div className="downshadow"></div>
            <div id="createProfileKids">
                <div className="CPKRightsec">
                    <img src={Kids} alt="kids img" />
                </div>
                <div className="CPKLeftec">
                    <h1 className='heading'>Create profiles for kids.</h1>
                    <p className='paragraph'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                </div>
            </div>
            <div className="downshadow"></div>
        </>
    )
}

export default Information;