import React,  { useEffect, useRef, useState } from 'react';

function Login() { 

    return (
        <div className='LoginView'>
            <div className='close-button'></div>
            <p className='login-title'>Login</p>
            <div className="login-input">
                <div className="login-box">
                    <p className='login-label-input'>EMAIL</p>
                    <input type="text" placeholder="📧 Email" className='input-login'/>
                </div>
                <div className="login-box">
                    <p className='login-label-input'>PASSWORD</p>
                    <input type="text" placeholder="🔒 At least 8 characters" className='input-login'/>
                </div>

            </div>
            <div className='loginFooter'>
                <label class="Login-container-Keep">
                    <p>Keep me signed in</p>
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <button className='loginButton'>Login</button>
            </div>
        </div>
    )
}

export default Login;