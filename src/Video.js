import React, { useEffect, useRef, useState, useContext } from "react";
import VideoItems from "./videoItems";
import Description from "./description";
import { appContext } from "./context";

function Video({ info, animationSlide, setVideoInfos, id, k }) {
  let className = "videoContainer ";
  const videoRef = useRef(null);

  let context = useContext(appContext);

  useEffect(() => {
    if (videoRef && info.play) {
      videoRef.current.play();
    } else if (videoRef) {
      videoRef.current.pause();
    }
  }, [videoRef, info]);

  return (
    <div
      className={className}
      id={id}
      onEnded={() => animationSlide(-2 * window.innerHeight + "px", "Up")}
    >
      <div className="blur blurRadial"></div>
      <div className="blur blurVertical"></div>
      <VideoItems info={info} setVideoInfos={setVideoInfos} k={k}></VideoItems>
      <Description info={info}></Description>
      <div className="carree"></div>
      {/* <img src={info.src + ".PNG"} className="imageVideo" draggable="false"/> */}
      {videoRef && (
        <video ref={videoRef} src={info.src} className="video" controls></video>
      )}
    </div>
  );
}

export default Video;
