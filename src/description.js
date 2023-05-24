import React, { useState, useContext } from "react";
import { appContext } from "./context";

function Description({ info }) {
  const [descOpen, setDescOpen] = useState(false);
  let context = useContext(appContext);

  const hashtagClick = (hashtag) => {
    context.setVideoPresentationInfo((old) => ({
      ...old,
      pseudo: hashtag,
      nb_publi: 5000,
      description: "",
      hashtag: true,
    }));

    context.setWindow("VideoPresentation");
  };

  const ppClick = () => {
    context.setVideoPresentationInfo((old) => ({ ...old, hashtag: false, idUploader: info.idUploader, pseudo:info.user, description:info.Userdesc, ...info }));
    context.setWindow("VideoPresentation");
  };

  const hashtags = info.hashtags.map((hashtag, index) => (
    <p
      key={index}
      className="hashtag-item"
      onClick={() => hashtagClick(hashtag)}
    >
      #{hashtag}
    </p>
  ));

  const ReadMore = () => {
    setDescOpen((old) => !old);
  };

  return (
    <div className="descriptionVideo">
      <p className="descriptionVideo-pseudo" onClick={ppClick}>
        {info.user}
      </p>
      <div className="description-text">
        <p>{info.place}</p>
        <div className="hashtags">{hashtags}</div>
        {descOpen && <p className="description-text">{info.desc}</p>}
        <p className="description-readmore" onClick={ReadMore}>
          Read {!descOpen ? "More" : "Less"}
        </p>
      </div>
    </div>
  );
}

export default Description;
