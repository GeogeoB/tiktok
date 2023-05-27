import React, { useContext } from "react";
import Chatbox from "./icones/chatbox";
import Heart from "./icones/heart";
import ShareIcone from "./icones/shareIcone";
import { appContext } from "./context";
import urlJboss from "./config";

function VideoItems({ info, setVideoInfos, k }) {
  let context = useContext(appContext);
  let setcommentOpen = context.setcommentOpen;
  console.log(info);

  const openComment = () => {
    setcommentOpen(true);
  };

  const ppClick = () => {
    context.setVideoPresentationInfo((old) => ({
      ...old,
      hashtag: false,
      idUploader: info.compteUploader.id,
      pseudo: info.user,
      pp: info.pp,
      nbAbonnes: info.compteUploader.nbAbonnes,
      nbVideos: info.compteUploader.nbVideos,
      ...info,
    }));
    context.setWindow("VideoPresentation");
  };

  const addAbonnement = () => {
    const data = new URLSearchParams({
      op: "addAbonnement",
      abonnementID: info.idUploader,
    });

    fetch(urlJboss + "/DataServlet?" + data, {
      method: "POST",
      credentials: "include",
    });

    let k_ = ((k % 3) + 3) % 3;

    setVideoInfos((oldInfo) => [
      {
        ...oldInfo[0],
        abonned: k_ === 1 ? !oldInfo[0].abonned : oldInfo[0].abonned,
      },
      {
        ...oldInfo[1],
        abonned: k_ === 0 ? !oldInfo[1].abonned : oldInfo[1].abonned,
      },
      {
        ...oldInfo[2],
        abonned: k_ === 2 ? !oldInfo[2].abonned : oldInfo[2].abonned,
      },
    ]);
  };

  return (
    <div className="videoItems">
      <div className="items circleitem">
        <div className="circle" onClick={ppClick}>
          <img src={info.pp} alt="" />
        </div>
        {!info.abonned && (
          <div className="littleCircle" onClick={addAbonnement}></div>
        )}
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
