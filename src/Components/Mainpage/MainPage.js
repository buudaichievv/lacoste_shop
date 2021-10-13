import React from 'react'
import video_mainPage from '../../image/moda.mp4'
import './MainPage.css' 
function MainPage() {
    return (
        <div>
            <div className="video_banner">
            <video  autoPlay="autoplay" className="video_mainPage" muted="muted" loop="loop">
                <source src={video_mainPage} type="video/mp4"></source>
            </video>
            </div>
        </div>
    )
}

export default MainPage
