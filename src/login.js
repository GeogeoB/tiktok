import React, { useState, useContext } from "react";
import { appContext } from "./context";
import urlJboss from "./config";

function Login() {
  const [erreur, setErreur] = useState("");
  const [titre, settitre] = useState("Login");
  const [pseudo, setpseudo] = useState("");
  const [mdp, setmdp] = useState("");
  const [surnom, setSurnom] = useState("");
  const [bio, setBio] = useState("");

  let context = useContext(appContext);
  let setLoginOpen = context.setLoginOpen;
  let setUser = context.setUser;

  const loginChange = () => {
    setLoginOpen((old) => !old);
  };

  const toRegister = () => {
    settitre("Register");
    setErreur("");
  };

  const toLogin = () => {
    settitre("Login");
    setErreur("");
  };

  const changePseudo = (e) => {
    setpseudo(e.target.value);
  };

  const changeMdp = (e) => {
    setmdp(e.target.value);
  };

  const changeSurnom = (e) => {
    setSurnom(e.target.value);
  };

  const changeBio = (e) => {
    setBio(e.target.value);
  };

  const sendFormulaire = () => {
    if (pseudo === "") {
      setErreur("Votre Pseudo est vide");
      return;
    }

    if (mdp === "") {
      setErreur("Votre mot de passe est vide");
      return;
    }

    if (titre === "Login") {
      login();
    } else if (titre === "Register") {
      registerlog();
    } else {
      setErreur("Il y a eu un problème");
    }
  };

  const login = () => {
    const data = new URLSearchParams({
      op: "login",
      name: pseudo,
      password: mdp,
    });

    fetch(urlJboss + "/AuthenticationServlet?" + data, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          setErreur("Login ou Mot de passe invalide");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        let userSetup = {
          id: data.compte.id,
          pseudo: surnom,
          pp: "./pp.jpg",
        };

        setUser(userSetup);
        setLoginOpen(false);
      });
  };

  const registerlog = async () => {
    const data = new URLSearchParams({
      op: "createCompte",
      name: pseudo,
      password: mdp,
      surnom: surnom,
      bio: bio,
    });

    fetch(urlJboss + "/AuthenticationServlet?" + data, {
      method: "POST",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          setErreur("Il y a eu un probleme");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        let userSetup = {
          id: data.compte.id,
          pseudo: surnom,
          pp: "./pp.jpg",
        };

        setUser(userSetup);
        setLoginOpen(false);
      });
  };

  return (
    <div className="loginbg">
      <div className="LoginView">
        <div className="close-button" onClick={loginChange}></div>
        <p className="login-title">{titre}</p>
        <div className="login-input">
          <div className="login-box">
            <p className="login-label-input">PSEUDO</p>
            <input
              type="text"
              placeholder="pseudo"
              className="input-login"
              onChange={changePseudo}
            />
          </div>
          <div className="login-box">
            <p className="login-label-input">PASSWORD</p>
            <input
              type="password"
              placeholder="password "
              className="input-login"
              onChange={changeMdp}
            />
          </div>
          {titre === "Register" && (
            <>
              <div className="login-box">
                <p className="login-label-input">SURNOM</p>
                <input
                  type="text"
                  placeholder="surnom "
                  className="input-login"
                  onChange={changeSurnom}
                />
              </div>
              <div className="login-box">
                <p className="login-label-input">DESCRIPTION</p>
                <input
                  type="text"
                  placeholder="description "
                  className="input-login"
                  onChange={changeBio}
                />
              </div>
            </>
          )}

          {erreur && <p className="text_erreur">{erreur}</p>}
        </div>
        <div className="loginFooter">
          <label className="Login-container-Keep">
            <p>Keep me signed in</p>
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <button className="Button" onClick={sendFormulaire}>
            {titre}
          </button>
          {titre === "Login" && (
            <p className="dontaccount">
              Don't have account?{" "}
              <b className="Signup" onClick={toRegister}>
                Sign Up
              </b>
            </p>
          )}
          {titre === "Register" && (
            <p className="dontaccount">
              Already have account ?{" "}
              <b className="Signup" onClick={toLogin}>
                Sign in
              </b>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
