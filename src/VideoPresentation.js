import { useContext, useState } from "react";
import "./css/index.css";
import { appContext } from "./context";
import Play from "./icones/play";
import Video from "./Video";

function VideoPresentation() {
  let videos = [<video src={"info.src"} className="video" controls></video>];

  let context = useContext(appContext);
  let videoPresentationInfo = context.videoPresentationInfo;
  let setVideoPresentationInfo = context.setVideoPresentationInfo;

  let [videoViewerOpen, setvideoViewerOpen] = useState(false);

  function scrollToTop() {
    const currentPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentPosition - currentPosition / 8); // Adjust the division value for desired scrolling speed
    }
  }

  let videoClickekd = () => {
    setvideoViewerOpen(true);
    scrollToTop();
  };

  let close = () => {
    setvideoViewerOpen(false);
  };

  let VideoItem = () => (
    <div className="videoExploration-videos" onClick={videoClickekd}>
      <div className="info-video">
        <Play></Play>
        <p className="infoVue">200</p>
      </div>
      <video src={info.src} className="video-column" autoPlay={false}></video>
    </div>
  );

  const info = {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    play: false,
    user: "@mia.aroundtheworld",
    userPicture: "",
    like: false,
    id: 0,
    pos: 0,
    place: "Eiffel Tower View, Paris, France",
    hashtags: ["France", "Paris", "Architecture"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum provident corrupti fuga quae, beatae cum deleniti maiores. Maiores unde rem vel esse velit dolorem dolore, labore, reiciendis delectus necessitatibus omnis",
    nb_like: 500,
    nb_commentaire: 500,
  };

  const VideoViewer = () => (
    <div className="loginbg">
      <div className="videoSlider video-video-presentation">
        <div className="video-close close-button" onClick={close}></div>
        <Video info={info}></Video>
      </div>
    </div>
  );

  return (
    <>
      {videoViewerOpen && <VideoViewer />}
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
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
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
