import { useContext, useEffect, useState } from "react";
import "./css/index.css";
import { appContext } from "./context";
import Play from "./icones/play";
import Video from "./Video";
import Abonnement from "./Abonnement";
import urlJboss from "./config";

function VideoPresentation() {

  let context = useContext(appContext);
  let videoPresentationInfo = context.videoPresentationInfo;
  let setVideoPresentationInfo = context.setVideoPresentationInfo;

  console.log(videoPresentationInfo)

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

  let VideoItem = (info) => {
    console.log("test", info, info.src)

    return (<div className="videoExploration-videos" onClick={videoClickekd}>
      <div className="info-video">
        <Play></Play>
        <p className="infoVue">200</p>
      </div>
      <video src={info.info.src} className="video-column" autoPlay={false}></video>
    </div>)
  };

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
    idUploader: 1,
  };

  const [videos, setVideos] = useState([])

  useEffect(() => {
    const data = new URLSearchParams({
      op: "getCompteVideos",
      compteID: videoPresentationInfo.idUploader,
    });

    fetch(urlJboss + "/DataServlet?" + data, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let videos = data.videos.map((video) => {

          console.log(video)

          let info = {
            src: urlJboss + "/DataServlet?op=getVideo&id=" + video.id,
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
            idUploader: 1,
          };

          return <VideoItem info={info}></VideoItem>
        })

        setVideos(videos);
      });
  }, [])


  const VideoViewer = () => (
    <div className="loginbg">
      <div className="videoSlider video-video-presentation">
        <div className="video-close close-button" onClick={close}></div>
        <Video info={info}></Video>
      </div>
    </div>
  );

  const setAbonnement = () => {
    const data = new URLSearchParams({
      op: videoPresentationInfo.abonned ? "removeAbonnement" : "addAbonnement",
      abonnementID: videoPresentationInfo.idUploader,
    });

    fetch(urlJboss + "/DataServlet?" + data, {
      method: "POST",
      credentials: "include",
    });

    setVideoPresentationInfo((old) => {
      return {...old, abonned : !old.abonned}
    })

    context.setToastText(videoPresentationInfo.abonned ? "désabonnée" : "abonné");
    context.setToastOpen(true);
  }

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
                  videoPresentationInfo.abonned
                    ? "Abonnee ButtonAbonne"
                    : "ButtonAbonne"
                }

                onClick={setAbonnement}
              >
                {videoPresentationInfo.abonned ? "abonné" : "s'abonner"}
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
              {videoPresentationInfo.Userdesc}
            </p>
          </div>
        </div>
      </div>

      <div className="videoExploration">
        {videos}
      </div>
    </>
  );
}

export default VideoPresentation;
