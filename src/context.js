import { createContext, useState } from "react";

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
