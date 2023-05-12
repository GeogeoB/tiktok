import { useEffect, createContext, useContext } from 'react';
import './css/index.css';


function Explorer() {

    let videos = [<video src={"info.src"} className='video' controls></video>]


return (
    <div className='explorer'>
        <div className="column">
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
        </div>
        <div className="column">
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
        </div>
        <div className="column">
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
            <video src={"info.src"} className='video-column' controls></video>
        </div>
    </div>
)

}

export default Explorer;