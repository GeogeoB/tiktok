import React,  { useEffect, useRef, useState, useContext} from 'react';
import { appContext } from './context';

function Login() { 

    const [erreur, setErreur] = useState("Votre identifiant et/ou votre mot de passe n'est pas le bon");

    let context = useContext(appContext);
    let setLoginOpen = context.setLoginOpen;

    const loginChange = () => {
        setLoginOpen(old => !old);
    }

    return (
        <div className="loginbg">
            <div className='LoginView'>
                <div className='close-button' onClick={loginChange}></div>
                <p className='login-title'>Login</p>
                <div className="login-input">
                    <div className="login-box">
                        <p className='login-label-input'>PSEUDO</p>
                        <input type="text" placeholder="pseudo" className='input-login'/>
                    </div>
                    <div className="login-box">
                        <p className='login-label-input'>PASSWORD</p>
                        <input type="password" placeholder="password " className='input-login'/>
                    </div>
                    
                    {erreur && <p className="text_erreur">{erreur}</p>}                

                </div>
                <div className='loginFooter'>
                    <label class="Login-container-Keep">
                        <p>Keep me signed in</p>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                    <button className='Button'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;