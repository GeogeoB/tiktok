import { createContext, useState } from "react";
import urlJboss from "./config";

export const appContext = createContext();

export const MyContextProvider = ({ children }) => {
  // Définissez ici les données et les fonctions à partager via le contexte
  let videoPresentationInfoSetup = {
    idUploader: 1,
    hashtag: false,
  };

  const [user, setUser] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [commentOpen, setcommentOpen] = useState(false);
  const [window, setWindow] = useState("PourToi");
  const [toastOpen, setToastOpen] = useState(false);
  const [uploadVideo, setUploadVideo] = useState(false);
  const [toastText, setToastText] = useState("");
  const [videoPresentationInfo, setVideoPresentationInfo] = useState(
    videoPresentationInfoSetup
  );
  const [abonnements, setAbonnements] = useState([]);

  const refreshAbonnements = () => {
    const data = new URLSearchParams({
      op: "getAbonnements",
    });
    fetch(urlJboss + "/DataServlet?" + data, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAbonnements(
          data.abonnements.map((account) => {
            return {
              id: account.id,
              name: account.nom,
              surname: account.surnom,
              profilePicture: `./avatars/avatar${account.profilePic}.png`,
              nbAbonnes: account.nbAbonnes,
              nbVideos: account.nbVideos,
              Userdesc: account.bio,
            };
          })
        );
      });
  };

  return (
    <appContext.Provider
      value={{
        user,
        setUser,
        loginOpen,
        setLoginOpen,
        commentOpen,
        setcommentOpen,
        window,
        setWindow,
        toastOpen,
        setToastOpen,
        uploadVideo,
        setUploadVideo,
        toastText,
        setToastText,
        videoPresentationInfo,
        setVideoPresentationInfo,
        abonnements,
        refreshAbonnements,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
