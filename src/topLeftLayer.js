import React, { useEffect, useRef, useState } from "react";
import Upload from "./icones/upload";
import urlJboss from "./config";

function TopLeftLayer({ user }) {
  const inputUpload = useRef(null);

  if (!user) {
    return (
      <div className="topleftLayer">
        <button className="Button redButton">Se connecter</button>
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
