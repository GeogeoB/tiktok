import React, { useEffect, useState } from 'react';
import Video from './Video';

function VideoPlayer(numbertoVH) {
    const [videoInfos, setVideoInfos] = useState([
        {
            "src": "./videos/video1",
            "play": false,
            "user": "@mia.aroundtheworld",
            "like": 0
        }, 
        {
            "src": "./videos/video2",
            "play": true,
            "user": "@geogeoLeRigolo",
            "like": 0
        },
        {
            "src": "./videos/video1",
            "play": false,
            "user": "@ceMecLa",
            "like": 0
        }
    ]);

    const [isDragging, setIsDragging] = useState(false);

    const animationSlide = (numbertoVH, type, delay = 400) => {

        document.getElementById("Slider").className = "videoSlider videoSliderTranslate"
        document.documentElement.style.setProperty('--animation-translate', numbertoVH);
            
        setTimeout(() => {

            if (type == "Up") {
                setVideoInfos((oldInfo) => [{...oldInfo[1], "play": false}, {...oldInfo[2], "play": true}, {...oldInfo[0], "play": false}]);
            } else if (type == "Down") {
                setVideoInfos((oldInfo) => [{...oldInfo[2], "play": false}, {...oldInfo[0], "play": true}, {...oldInfo[1], "play": false}]);
            }

            document.getElementById("Slider").className = "videoSlider"
            document.documentElement.style.setProperty('--animation-translate',  '-100vh')
            document.documentElement.style.setProperty('--is-showing-image', "block");
            document.documentElement.style.setProperty('--is-showing', "none");
        }, delay)

        setTimeout(() => {
            document.documentElement.style.setProperty('--is-showing', "block");
            document.documentElement.style.setProperty('--is-showing-image', "none");
        }, delay + 500)
    }

    useEffect(() => {
        let delay = 300;
        let isToucheABloquee = false;

        document.documentElement.style.setProperty('--animation-delay', delay + "ms");

        function slide(numbertoVH, type) {
            isToucheABloquee = true;

            setTimeout(() => {
                isToucheABloquee = false;
            }, delay + 20);

            animationSlide(numbertoVH, type, delay);
        }

        const handleClick = (event) => {
            if (event.key == "ArrowUp" && !isToucheABloquee) {
                slide('-200vh', "Up")
            } else if (event.key == "ArrowDown" && !isToucheABloquee) {
                slide('0vh', "Down")
            }
        };
    
        document.addEventListener("keydown", handleClick);
    
        return () => {
          document.removeEventListener('keydown', handleClick);
        };
      }, []);

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

        console.log("diff", diff,  window.innerHeight * 0.20);

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
                <Video info={videoInfos[0]} animationSlide={animationSlide} setVideoInfos={setVideoInfos}></Video>
                <Video info={videoInfos[1]} animationSlide={animationSlide} setVideoInfos={setVideoInfos}></Video>
                <Video info={videoInfos[2]} animationSlide={animationSlide} setVideoInfos={setVideoInfos}></Video>
            </div>
        </div>
    )
}

export default VideoPlayer;