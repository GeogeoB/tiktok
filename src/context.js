import { createContext, useState } from "react";

export const appContext = createContext();

export const MyContextProvider = ({ children }) => {
  // Définissez ici les données et les fonctions à partager via le contexte

  let userSetup = {
    id: 0,
    pseudo: "geogeo",
    pp: "./pp.jpg",
  };

  let videoPresentationInfoSetup = {
    pseudo: "Geogeo",
    nb_publi: 51,
    nb_followers: 4900,
    description: "lorem ipsum",
    isAbonne: 0,
  };

  const [user, setUser] = useState(userSetup);
  const [loginOpen, setLoginOpen] = useState(false);
  const [commentOpen, setcommentOpen] = useState(false);
  const [window, setWindow] = useState("PourToi");
  const [toastOpen, setToastOpen] = useState(false);
  const [uploadVideo, setUploadVideo] = useState(false);
  const [toastText, setToastText] = useState("");
  const [videoPresentationInfo, setVideoPresentationInfo] = useState(
    videoPresentationInfoSetup
  );

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
      }}
    >
      {children}
    </appContext.Provider>
  );
};
