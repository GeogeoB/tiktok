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

  console.log(videoPresentationInfo);

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
    console.log("test", info, info.src);

    return (
      <div className="videoExploration-videos" onClick={videoClickekd}>
        <div className="info-video">
          <Play></Play>
          <p className="infoVue">200</p>
        </div>
        <video
          src={info.info.src}
          className="video-column"
          autoPlay={false}
        ></video>
      </div>
    );
  };

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    let data = {};

    if (!videoPresentationInfo.hashtag) {
      data = new URLSearchParams({
        op: "getCompteVideos",
        compteID: videoPresentationInfo.idUploader,
      });
    } else {
      data = new URLSearchParams({
        op: "getHashtagVideos",
        hashtag: videoPresentationInfo.pseudo,
      });
    }

    fetch(urlJboss + "/DataServlet?" + data, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let videos_ = data.videos.map((video) => {
          let info = {
            src: urlJboss + "/DataServlet?op=getVideo&id=" + video.id,
            play: false,
            user: video.compteUploader.surnom,
            userPicture: video.compteUploader.pp,
            like: false,
            id: video.id,
            pos: 0,
            place: video.lieu,
            hashtags: video.hashtags,
            desc: video.description,
            nb_like: video.nbLikes,
            nb_commentaire: video.commentaires.length,
            idUploader: video.compteUploader.id,
          };

          return <VideoItem info={info}></VideoItem>;
        });

        setVideos(videos_);
      });
  }, []);

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
      return { ...old, abonned: !old.abonned };
    });

    context.setToastText(
      videoPresentationInfo.abonned ? "désabonnée" : "abonné"
    );
    context.setToastOpen(true);
  };

  return (
    <>
      {videoViewerOpen && <VideoViewer />}
      <div className="header-videopresentation">
        <div className="video-header">
          {!videoPresentationInfo.hashtag && (
            <div className="circle_abonnement_pres pp_comments_circle">
              {" "}
              <img src={videoPresentationInfo.pp} alt="profile of the user" />
            </div>
          )}
          <div className="video-pres-text">
            <div className="pseudo-videoPres">
              <p className="videopres-pseudo">{videoPresentationInfo.pseudo}</p>
              {!videoPresentationInfo.hashtag && (
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
              )}
            </div>
            {!videoPresentationInfo.hashtag && (
              <div className="item-video-pres">
                <p>
                  <span>{videoPresentationInfo.nbVideos}</span> publications
                </p>
                <p>
                  <span>{videoPresentationInfo.nbAbonnes}</span> followers
                </p>
              </div>
            )}
            <p className="videoPres-desc">{videoPresentationInfo.Userdesc}</p>
          </div>
        </div>
      </div>

      <div className="videoExploration">{videos}</div>
    </>
  );
}

export default VideoPresentation;
