import React, { useState, useContext } from "react";
import { appContext } from "./context";

function Description({ info }) {
  const [descOpen, setDescOpen] = useState(false);
  let context = useContext(appContext);

  const hashtagClick = (hashtag) => {
    context.setVideoPresentationInfo((old) => ({
      ...old,
      pseudo: hashtag,
      hashtag: true,
    }));

    context.setWindow("VideoPresentation");
  };

  const ppClick = () => {
    context.setVideoPresentationInfo((old) => ({
      ...old,
      idUploader: info.idUploader,
      pseudo: info.user,
      description: info.Userdesc,
      ...info,
      hashtag: false,
    }));
    context.setWindow("VideoPresentation");
  };
  console.log("ouioui: " + info.hashtags);

  const hashtags = info.hashtags.map((hashtag, index) => (
    <p
      key={index}
      className="hashtag-item"
      onClick={() => hashtagClick(hashtag.hashTagName)}
    >
      #{hashtag.hashTagName}
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
