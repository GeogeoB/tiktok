import React,  { useEffect, useRef, useState, useContext} from 'react';
import { appContext } from './context';
import urlJboss from './config';

function Login() { 

    const [erreur, setErreur] = useState("");
    const [titre, settitre] = useState("Login");
    const [pseudo, setpseudo] = useState("");
    const [mdp, setmdp] = useState("");

    let context = useContext(appContext);
    let setLoginOpen = context.setLoginOpen;
    let setUser = context.setUser;

    const loginChange = () => {
        setLoginOpen(old => !old);
    }

    const register = () => {
        settitre("Register")
        setErreur("")
    }

    const changePseudo = (e) => {
        setpseudo(e.target.value)
    }

    const changeMdp = (e) => {
        setmdp(e.target.value)
    }

    const sendFormulaire = () => {
        if (pseudo == "") {
            setErreur("Votre Pseudo est vide")
            return;
        }

        if (mdp == "") {
            setErreur("Votre mot de passe est vide")
            return;
        }

        if (titre == "Login") {
            login()
        }
        else if (titre == "Register") {
            registerlog()
        }
        else {
            setErreur("Il y a eu un problème")
        }
    }

    const login = () => {

    }

    const registerlog = async () => {

        const data = {
            op: "createCompte",
            name: pseudo,
            password: mdp
          };
          
          // Options de la requête POST
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' // Définir le type de contenu comme JSON
            },
            body: JSON.stringify(data) // Convertir l'objet en chaîne JSON
          };

          fetch(urlJboss + "/AuthenticationServlet", options).then(response => {
            if (!response.ok) {
              setErreur("Il y a eu un probleme")
            } else {
                const datalog = {
                    op: "login",
                    name: pseudo,
                    password: mdp
                };

                // Options de la requête POST
                const optionslog = {
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json' // Définir le type de contenu comme JSON
                    },
                    body: JSON.stringify(datalog) // Convertir l'objet en chaîne JSON
                };

                fetch(urlJboss + "/AuthenticationServlet", optionslog).then(response => {
                    if (!response.ok) {
                        setErreur("Login ou Mot de passe invalide")
                    } else {
                        let rep = response.json();

                        let userSetup = {
                          id: 0,
                          pseudo: pseudo,
                          pp: "./pp.jpg",
                        }
                    }
                })
            }
          })
    }

    return (
        <div className="loginbg">
            <div className='LoginView'>
                <div className='close-button' onClick={loginChange}></div>
                <p className='login-title'>{titre}</p>
                <div className="login-input">
                    <div className="login-box">
                        <p className='login-label-input'>PSEUDO</p>
                        <input type="text" placeholder="pseudo" className='input-login' onChange={changePseudo}/>
                    </div>
                    <div className="login-box">
                        <p className='login-label-input'>PASSWORD</p>
                        <input type="password" placeholder="password " className='input-login' onChange={changeMdp}/>
                    </div>
                    
                    {erreur && <p className="text_erreur">{erreur}</p>}        

                </div>
                <div className='loginFooter'>
                    <label class="Login-container-Keep">
                        <p>Keep me signed in</p>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                    <button className='Button' onClick={sendFormulaire}>{titre}</button>
                    <p className='dontaccount'>Don't have account? <b className='Signup' onClick={register}>Sign Up</b></p>
                </div>
            </div>
        </div>
    )
}

export default Login;