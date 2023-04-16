import React, { useEffect, useRef, useState, useContext } from "react";
import Upload from "./icones/upload";
import urlJboss from "./config";
import { appContext } from "./context";

function TopLeftLayer() {
  const inputUpload = useRef(null);

  let context = useContext(appContext);
  let user = context.user;
  let setUser = context.setUser;
  // let loginOpen  = context.loginOpen;
  let setLoginOpen = context.setLoginOpen;

  const loginChange = () => {
    setLoginOpen((old) => !old);
  };

  if (!user) {
    return (
      <div className="topleftLayer">
        <button className="Button redButton" onClick={loginChange}>
          Se connecter
        </button>
      </div>
    );
  }

  const buttonUpload = () => {
    inputUpload.current.click();
  };

  const fichierChange = async () => {
    let formData = new FormData();
    formData.append("file", inputUpload.current.files[0]);
    formData.append("op", "upload");

    await fetch(urlJboss + "/TestServlet", {
      //mode: "no-cors",
      method: "POST",
      credentials: "include",
      body: formData,
    });
  };

  return (
    <div className="topleftLayer">
      <button className="Button ButtonUpload" onClick={buttonUpload}>
        <Upload></Upload>
        Upload
      </button>
      <div className="user_tll">
        <div className="pp">
          <div class="circle">
            <img src={user.pp} alt="" />
          </div>
        </div>
      </div>
      <input
        ref={inputUpload}
        type="file"
        style={{ display: "none" }}
        onChange={fichierChange}
      ></input>
    </div>
  );
}

export default TopLeftLayer;
