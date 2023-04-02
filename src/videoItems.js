import React,  { useEffect, useRef, useState } from 'react';
import Chatbox from './icones/chatbox';
import Heart from './icones/heart';
import ShareIcone from './icones/shareIcone';

function VideoItems({info, setVideoInfos}) {
    return (
        <div className="videoItems">
            <div className="items circleitem">
                <div className="circle">
                    <img src="./pp.jpg" alt="" />
                </div>
                <div className="littleCircle"></div>
            </div>
            <div className="items">
                <Heart info={info} setVideoInfos={setVideoInfos}></Heart>
                <p>38.2k</p>
            </div>
            <div className="items">
                <Chatbox></Chatbox>
                <p>8.6k</p>
            </div>
            <div className="items">
                <ShareIcone></ShareIcone>
                <p>Share</p>
            </div>
        </div>
    )
}

export default VideoItems