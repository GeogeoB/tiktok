import React, { useContext } from "react";
import Chatbox from "./icones/chatbox";
import Heart from "./icones/heart";
import ShareIcone from "./icones/shareIcone";
import { appContext } from "./context";

function VideoItems({ info, setVideoInfos, k }) {
  let context = useContext(appContext);
  let setcommentOpen = context.setcommentOpen;

  const openComment = () => {
    setcommentOpen(true);
  };

  const ppClick = () => {
    context.setVideoPresentationInfo((old) => ({ ...old, hashtag: false }));
    context.setWindow("VideoPresentation");
  };

  return (
    <div className="videoItems">
      <div className="items circleitem">
        <div className="circle" onClick={ppClick}>
          <img src="./pp.jpg" alt="" />
        </div>
        <div className="littleCircle"></div>
      </div>
      <div className="items">
        <Heart info={info} setVideoInfos={setVideoInfos} k={k}></Heart>
        <p>{info.nb_like}</p>
      </div>
      <div className="items" onClick={openComment}>
        <Chatbox></Chatbox>
        <p>{info.nb_commentaire}</p>
      </div>
      <div className="items">
        <ShareIcone videoID={info.id}></ShareIcone>
        <p>Share</p>
      </div>
    </div>
  );
}

export default VideoItems;
