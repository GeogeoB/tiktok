import { useContext } from "react";
import "./css/index.css";
import { appContext } from "./context";
import Play from "./icones/play";

function VideoPresentation() {
  let videos = [<video src={"info.src"} className="video" controls></video>];

  let info = {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    nb_vue: 200,
  };

  let context = useContext(appContext);
  let videoPresentationInfo = context.videoPresentationInfo;
  let setVideoPresentationInfo = context.setVideoPresentationInfo;

  let VideoItem = () => (
    <div className="videoExploration-videos">
      <div className="info-video">
        <Play></Play>
        <p className="infoVue">{info.nb_vue}</p>
      </div>
      <video src={info.src} className="video-column" autoPlay={false}></video>
    </div>
  );

  return (
    <>
      <div className="header-videopresentation">
        <div className="video-header">
          <div className="circle_abonnement_pres pp_comments_circle">
            <img src="pp.jpg" alt="profile of the user" />
          </div>
          <div className="video-pres-text">
            <div className="pseudo-videoPres">
              <p className="videopres-pseudo">{videoPresentationInfo.pseudo}</p>
              <button
                className={
                  setVideoPresentationInfo.isAbonne
                    ? "ButtonAbonne"
                    : "Abonnee ButtonAbonne"
                }
              >
                {setVideoPresentationInfo.isAbonne ? "s'abonné" : "abonné"}
              </button>
            </div>
            <div className="item-video-pres">
              <p>
                <span>{videoPresentationInfo.nb_publi}</span> publications
              </p>
              <p>
                <span>{videoPresentationInfo.nb_followers}</span> followers
              </p>
            </div>
            <p className="videoPres-desc">
              {videoPresentationInfo.description}
            </p>
          </div>
        </div>
      </div>

      <div className="videoExploration">
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
      </div>
    </>
  );
}

export default VideoPresentation;
