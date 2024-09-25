import React from 'react';
import bgvideo from '../Images/bgv.mp4'; 
import './B.css';

const BackgroundVideo = () => {
    return (
        <div className="video-container">
            <video id="background-video" autoPlay loop muted>
                <source src={bgvideo} type="video/mp4" />
            </video>
        </div>
    );
}

export default BackgroundVideo;
