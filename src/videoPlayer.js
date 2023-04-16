import React, { useContext, useEffect, useState } from 'react';
import Video from './Video';
import { appContext } from './context';
import Commentaires from './commentaires';
import urlJboss from './config';

function VideoPlayer(numbertoVH) {

    const [k, setk] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    let context = useContext(appContext);
    let commentOpen = context.commentOpen;

    const animationSlide = (numbertoVH, type, delay = 400) => {
        if (commentOpen) return;

        document.getElementById("Slider").className = "videoSlider videoSliderTranslate"
        console.log(numbertoVH)
        document.documentElement.style.setProperty('--animation-translate', numbertoVH);
        let k_;

        setTimeout(() => {

            if (type == "Up") {
                k_ = k - 1
                setk((k) => k_)
                k_ = ((k_ % 3) + 3) % 3;
                console.log("UP", k_);

                getRandomVideo().then((video) => {
                    setVideoInfos((oldInfo) => [{ ...oldInfo[0], play: k_ == 1, src: k_== 2 ? urlJboss + "/TestServlet?op=getVideo&id=" + video.id : oldInfo[0].src },
                                                { ...oldInfo[1], play: k_ == 0, src: k_== 1 ? urlJboss + "/TestServlet?op=getVideo&id=" + video.id : oldInfo[1].src }, 
                                                { ...oldInfo[2], play: k_ == 2, src: k_== 0 ? urlJboss + "/TestServlet?op=getVideo&id=" + video.id : oldInfo[2].src}]);
                })

            } else if (type == "Down") {
                k_ = k + 1
                setk((k) => k_)
                k_ = ((k_ % 3) + 3) % 3;
                getRandomVideo().then((video) => {
                    setVideoInfos((oldInfo) => [{ ...oldInfo[0], play: k_ == 1, src: k_== 0 ? urlJboss + "/TestServlet?op=getVideo&id=" + video.id : oldInfo[0].src },
                                                { ...oldInfo[1], play: k_ == 0, src: k_== 2 ? urlJboss + "/TestServlet?op=getVideo&id=" + video.id : oldInfo[1].src }, 
                                                { ...oldInfo[2], play: k_ == 2, src: k_== 1 ? urlJboss + "/TestServlet?op=getVideo&id=" + video.id : oldInfo[2].src}]);
                })
            }

            document.documentElement.style.setProperty('--position-video1', k_ * 100 % 300 + 'vh')
            document.documentElement.style.setProperty('--position-video2', (k_ + 1) * 100 % 300 + 'vh')
            document.documentElement.style.setProperty('--position-video3', (k_ + 2) * 100 % 300 + 'vh')

            document.getElementById("Slider").className = "videoSlider"

            document.documentElement.style.setProperty('--animation-translate', '-100vh')
            // document.documentElement.style.setProperty('--is-showing-image', "block");
            // document.documentElement.style.setProperty('--is-showing', "none");
        }, delay)

        // setTimeout(() => {
        //     document.documentElement.style.setProperty('--is-showing', "block");
        //     document.documentElement.style.setProperty('--is-showing-image', "none");
        // }, delay + 500)
    }

    const [videoInfos, setVideoInfos] = useState([
        {
            src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            play: false,
            user: "@mia.aroundtheworld",
            userPicture: "",
            like: 100,
            id: 0,
            pos: 0,
            place: "Eiffel Tower View, Paris, France",
            hastags: ["France", "Paris", "Architecture"],
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum provident corrupti fuga quae, beatae cum deleniti maiores. Maiores unde rem vel esse velit dolorem dolore, labore, reiciendis delectus necessitatibus omnis"
        },
        {
            src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            play: true,
            user: "@geogeoLeRigolo",
            userPicture: "",
            like: 0,
            id: 1,
            pos: 1,
            place: "Ici",
            hastags: ["France", "Paris", "Architecture"],
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum provident corrupti fuga quae, beatae cum deleniti maiores. Maiores unde rem vel esse velit dolorem dolore, labore, reiciendis delectus necessitatibus omnis"
        },
        {
            src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            play: false,
            user: "@ceMecLa",
            userPicture: "",
            like: 9,
            id: 2,
            pos: 2,
            place: "Toulouse",
            hastags: ["France", "Paris", "Architecture"],
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum provident corrupti fuga quae, beatae cum deleniti maiores. Maiores unde rem vel esse velit dolorem dolore, labore, reiciendis delectus necessitatibus omnis"
        }
    ]);

    const getRandomVideo = async () => {
        let video;

        await fetch(urlJboss + "/TestServlet?" +  new URLSearchParams({
            op: "getRandomVideo"
          }), {method: 'GET'}).then((response) => {
            return response.json();
        }).then(data => {
            video = data.video;
        })

        return video;
    }

    useEffect(() => {
        getRandomVideo().then((video) => {
            setVideoInfos((oldInfo) => [{ ...oldInfo[0], src: urlJboss + "/TestServlet?op=getVideo&id=" + video.id }, { ...oldInfo[1]}, { ...oldInfo[2]}]);
        })

        getRandomVideo().then((video) => {
            setVideoInfos((oldInfo) => [{ ...oldInfo[0]}, { ...oldInfo[1], src: urlJboss + "/TestServlet?op=getVideo&id=" + video.id}, { ...oldInfo[2]}]);
        })

        getRandomVideo().then((video) => {
            setVideoInfos((oldInfo) => [{ ...oldInfo[0]}, { ...oldInfo[1]}, { ...oldInfo[2], src: urlJboss + "/TestServlet?op=getVideo&id=" + video.id}]);
        })
    }, [])

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
        if (commentOpen) return;
        setIsDragging(true);
    }

    function handleMouseUp(event) {
        setIsDragging(false);

        let diff = - window.innerHeight - parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--animation-translate'));

        if (Math.abs(diff) > window.innerHeight * 0.20) {
            console.log("oui")
            if (diff > 0) {
                animationSlide(-2 * window.innerHeight + "px", "Up");
            } else {
                animationSlide('0px', "Down");
            }
        } else {
            // Attendre quelque ms pour ne pas superposé avec les MouseMose
            setTimeout(() => {
                document.documentElement.style.setProperty('--animation-translate', "-100vh");
            }, 50)
        }

    }

    function handleMouseMove(event) {
        if (isDragging) {
            let a = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--animation-translate')) + parseInt(event.movementY)
            let b = - 2 * window.innerHeight;

            a = a < 0 ? Math.max(a, b) : 0


            document.documentElement.style.setProperty('--animation-translate', a + "px")
        }
    }

    return (
        <div className='videoPlayer' id='myComponent'>
            <div className='videoSlider videoSliderTranslate' id='Slider' onMouseDown={handleMouseDown}>
                <Video info={videoInfos[0]} animationSlide={animationSlide} setVideoInfos={setVideoInfos} id={"video1"} k={k}></Video>
                <Video info={videoInfos[1]} animationSlide={animationSlide} setVideoInfos={setVideoInfos} id={"video2"} k={k}></Video>
                <Video info={videoInfos[2]} animationSlide={animationSlide} setVideoInfos={setVideoInfos} id={"video3"} k={k}></Video>
            </div>
            {commentOpen && <Commentaires></Commentaires>}
        </div>
    )
}

export default VideoPlayer;