import React,  { useEffect, useRef, useState } from 'react';
import VideoItems from './videoItems';
import Description from './description';

function Video({info, animationSlide, setVideoInfos, id, k}) {
    let className = "videoContainer ";
    const videoRef = useRef(null);

    useEffect(() => {
        if(videoRef && info.play) {
            videoRef.current.play();
        } else if (videoRef) {
            videoRef.current.pause();
        }
    }, [videoRef, info]);

    useEffect(() => {
        if(videoRef) {
            videoRef.current.addEventListener('ended', function() {
                animationSlide(-2*window.innerHeight + "px", "Up");
            });
        }

        return () => {
            document.removeEventListener('ended', function() {
                animationSlide(-2*window.innerHeight + "px", "Up");
            });
          }; 
    }, [])

    return (
        <div className={className} id={id}>
            <div className="blur blurRadial"></div>
            <div className="blur blurVertical"></div>
            <VideoItems info={info} setVideoInfos={setVideoInfos} k={k}></VideoItems>
            <Description user={info.user}></Description>
            <div className="carree"></div>
            {/* <img src={info.src + ".PNG"} className="imageVideo" draggable="false"/> */}
            {videoRef && <video ref={videoRef} src={info.src + ".mp4"} className='video' controls></video>}
        </div>
    )
}

export default Video;