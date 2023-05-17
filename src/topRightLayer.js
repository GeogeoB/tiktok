import React, { useRef, useContext } from "react";
import Upload from "./icones/upload";
import urlJboss from "./config";
import { appContext } from "./context";

function TopRightLayer() {
  const inputUpload = useRef(null);

  let context = useContext(appContext);
  let user = context.user;
  // let loginOpen  = context.loginOpen;
  let setLoginOpen = context.setLoginOpen;

  const loginChange = () => {
    setLoginOpen((old) => !old);
  };

  if (!user) {
    return (
      <div className="topRightLayer">
        <button className="Button redButton" onClick={loginChange}>
          Se connecter
        </button>
      </div>
    );
  }

  const buttonUpload = () => {
    context.setUploadVideo(true);
  };

  return (
    <div className="topRightLayer">
      <button className="Button ButtonUpload" onClick={buttonUpload}>
        <Upload></Upload>
        Upload
      </button>
      <div className="user_tll">
        <div className="pp">
          <div className="circle">
            <img src={user.pp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopRightLayer;
