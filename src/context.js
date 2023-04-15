import { useEffect, createContext, useState } from 'react';

export const appContext = createContext();

export const MyContextProvider = ({children}) => {
    // Définissez ici les données et les fonctions à partager via le contexte

    // let userSetup = {
    //   id: 0,
    //   pseudo: "geogeo",
    //   pp: "./pp.jpg",
    // }

    const [user, setUser] = useState(null);
    const [loginOpen, setLoginOpen] = useState(false);
    const [commentOpen, setcommentOpen] = useState(true);

    
  
    return (
      <appContext.Provider value={{user, setUser, loginOpen, setLoginOpen, commentOpen, setcommentOpen}}>
        {children}
      </appContext.Provider>
    );
  };