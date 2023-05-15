import React, { useState, useContext, useRef } from "react";
import { appContext } from "./context";
import urlJboss from "./config";
import "./css/uploadVideo.css";
import Upload from "./icones/upload";

function UploadVideo() {
  let context = useContext(appContext);
  let setLoginOpen = context.setLoginOpen;
  let setUser = context.setUser;

  const [inDrag, setInDrag] = useState(false);
  const [file, setFile] = useState(null);
  const inputUpload = useRef(null);
  const hastags = useRef(null);
  const description = useRef(null);
  const lieu = useRef(null);
  const [erreur, setErreur] = useState("");

  const close = () => {
    context.setUploadVideo(false);
  };

  const drop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
    console.log("Enter");
    setInDrag(true);
  };

  const dragLeave = (e) => {
    e.preventDefault();
    console.log("Leave");
    setInDrag(false);
  };

  const chooseFileCliked = () => {
    inputUpload.current.click();
  };

  const fichierChange = (e) => {
    e.preventDefault();
    setFile(inputUpload.current.files[0]);
  };

  const dd = (
    <p>
      Drag & Drop or <label onClick={chooseFileCliked}>Choose file</label> to
      upload
    </p>
  );

  const dfile = <p>{file != null && file.name}</p>;

  const upload = () => {
    if (hastags == null || description == null || lieu == null) {
      setErreur("Erreur lors de l'upload");
      return;
    }

    if (file == null) {
      setErreur("Vous devez choisir un fichier");
      return;
    }

    close();

    let descriptionText = description.current.value;
    let hastagsText = hastags.current.value;
    let lieuText = lieu.current.value;

    let formData = new FormData();
    formData.append("file", inputUpload.current.files[0]);
    formData.append("op", "upload");
    formData.append("hashtags", hastagsText);
    formData.append("description", descriptionText);
    formData.append("lieu", lieuText);

    fetch(urlJboss + "/DataServlet", {
      //mode: "no-cors",
      method: "POST",
      credentials: "include",
      body: formData,
    }).then((response) => {
      if (!response.ok) {
        context.setToastText("Il y a eu un problème lors de l'upload");
        context.setToastOpen(true);
      } else {
        context.setToastText("Upload réussi");
        context.setToastOpen(true);
      }
    });
  };

  return (
    <div className="loginbg">
      <div className="LoginView">
        <div className="close-button" onClick={close}></div>
        <div
          className={inDrag == true ? "drag ChooseVideo" : "ChooseVideo"}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={drop}
          onDragOver={dragOver}
        >
          <Upload></Upload>
          {file != null ? dfile : dd}
        </div>
        <p className="hastags login-label-input">Hastags</p>
        <input
          ref={hastags}
          type="text"
          className="hastaginput input-login"
        ></input>

        <p className="hastags login-label-input">Lieu</p>
        <input
          ref={lieu}
          type="text"
          className="hastaginput input-login"
        ></input>

        <p className="hastags login-label-input">Description</p>
        <textarea ref={description} className="description"></textarea>
        {erreur && <p className="text_erreur">{erreur}</p>}
        <button className="buttonUpload Button" onClick={upload}>
          Upload
        </button>
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

export default UploadVideo;
