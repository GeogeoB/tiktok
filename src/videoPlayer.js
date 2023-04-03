import React, { useContext, useEffect, useState } from 'react';
import Video from './Video';

function VideoPlayer(numbertoVH) {
    const [videoInfos, setVideoInfos] = useState([
        {
            "src": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            "play": false,
            "user": "@mia.aroundtheworld",
            "like": 0,
            "id": 0,
            "pos": 0,
        }, 
        {
            "src": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            "play": true,
            "user": "@geogeoLeRigolo",
            "like": 0,
            "id": 1,
            "pos": 1,
        },
        {
            "src": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            "play": false,
            "user": "@ceMecLa",
            "like": 0,
            "id": 2,
            "pos": 2,
        }
    ]);

    const [k, setk] = useState(0);

    const [isDragging, setIsDragging] = useState(false);

    const animationSlide = (numbertoVH, type, delay = 400) => {

        document.getElementById("Slider").className = "videoSlider videoSliderTranslate"
        document.documentElement.style.setProperty('--animation-translate', numbertoVH);
        let k_;
            
        setTimeout(() => {

            if (type == "Up") {
                setk((k) => k-1)
                k_ = k - 1
                k_ = ((k_ % 3) + 3) % 3;
                setVideoInfos((oldInfo) => [{...oldInfo[0], "play": k_ == 1}, {...oldInfo[1], "play": k_ == 0}, {...oldInfo[2], "play": k_ == 2}]);
            } else if (type == "Down") {
                setk((k) => k+1)
                k_ = k + 1
                k_ = ((k_ % 3) + 3) % 3;
                setVideoInfos((oldInfo) => [{...oldInfo[0], "play": k_ == 1}, {...oldInfo[1], "play": k_ == 0}, {...oldInfo[2], "play": k_ == 2}]);
            }

            console.log(k_)

            document.documentElement.style.setProperty('--position-video1',   k_     *100 % 300 + 'vh')
            document.documentElement.style.setProperty('--position-video2',  (k_ + 1)*100 % 300 + 'vh')
            document.documentElement.style.setProperty('--position-video3',  (k_ + 2)*100 % 300 + 'vh')

            document.getElementById("Slider").className = "videoSlider"
            
            document.documentElement.style.setProperty('--animation-translate',  '-100vh')
            // document.documentElement.style.setProperty('--is-showing-image', "block");
            // document.documentElement.style.setProperty('--is-showing', "none");
        }, delay)

        // setTimeout(() => {
        //     document.documentElement.style.setProperty('--is-showing', "block");
        //     document.documentElement.style.setProperty('--is-showing-image', "none");
        // }, delay + 500)
    }

      useEffect(() => {
        if (isDragging) {
            document.documentElement.style.setProperty('--animation-translate', -window.innerHeight + "px")
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
        } else {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        }
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };
      }, [isDragging]);

      function handleMouseDown(event) {
        setIsDragging(true);
      }

      function handleMouseUp(event) {
        setIsDragging(false);

        let diff = - window.innerHeight - parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--animation-translate'));

        if (Math.abs(diff) > window.innerHeight * 0.20) {
            if (diff > 0) {
                animationSlide(-2*window.innerHeight + "px", "Up");
            } else {
                animationSlide('0px', "Down");
            }
        } else {
            document.documentElement.style.setProperty('--animation-translate', "-100vh");
        }

      }

      function handleMouseMove(event) {
        if (isDragging) {
            document.documentElement.style.setProperty('--animation-translate', parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--animation-translate')) + parseInt(event.movementY) + "px")
        }
      }

    return (
        <div className='videoPlayer' id='myComponent'>
            <div className='videoSlider videoSliderTranslate' id='Slider' onMouseDown={handleMouseDown}>
                <Video info={videoInfos[0]} animationSlide={animationSlide} setVideoInfos={setVideoInfos} id={"video1"} k={k}></Video>
                <Video info={videoInfos[1]} animationSlide={animationSlide} setVideoInfos={setVideoInfos} id={"video2"} k={k}></Video>
                <Video info={videoInfos[2]} animationSlide={animationSlide} setVideoInfos={setVideoInfos} id={"video3"} k={k}></Video>
            </div>
        </div>
    )
}

export default VideoPlayer;