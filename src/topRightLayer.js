import React, { useContext, useEffect } from "react";
import Upload from "./icones/upload";
import urlJboss from "./config";
import { appContext } from "./context";
import Logout from "./icones/logout";

function TopRightLayer() {
  let context = useContext(appContext);
  let user = context.user;
  // let loginOpen  = context.loginOpen;
  let setLoginOpen = context.setLoginOpen;
  let setUser = context.setUser;

  const loginChange = () => {
    setLoginOpen((old) => !old);
  };

  useEffect(() => {
    const data = new URLSearchParams({
      op: "login",
    });

    fetch(urlJboss + "/AuthenticationServlet?" + data, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const compte = data.compte;
        let userSetup = {
          id: compte.id,
          pseudo: compte.surnom,
          pp: "./pp.jpg",
        };
        setUser(userSetup);
      });
  }, [setUser]);

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

  const buttonLogout = () => {
    context.setUser(null);
    fetch(urlJboss + "/AuthenticationServlet?op=logout", {
      method: "GET",
      credentials: "include",
    });
    context.setToastText("Déconnecté !");
    context.setToastOpen(true);
  };

  return (
    <div className="topRightLayer">
      <button className="Button ButtonUpload" onClick={buttonLogout}>
        <Logout />
        Logout
      </button>
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
