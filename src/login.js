import React,  { useEffect, useRef, useState } from 'react';

function Login() { 

    const [erreur, setErreur] = useState("Votre identifiant et/ou votre mot de passe n'est pas le bon");

    return (
        <div className='LoginView'>
            <div className='close-button'></div>
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
    )
}

export default Login;