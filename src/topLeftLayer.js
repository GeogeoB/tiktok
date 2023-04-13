import React, { useEffect, useRef, useState } from 'react';
import Upload from './icones/upload';

function TopLeftLayer({ user }) {

    const inputUpload = useRef(null)

    if (!user) {
        return (
            <div className="topleftLayer">
                <button className='Button redButton'>Se connecter</button>
            </div>
        )
    }

    const buttonUpload = () => {
        inputUpload.current.click();
    }

    const fichierChange = async () => {
        let formData = new FormData();
        formData.append("file", inputUpload.current.files[0]);

        console.log("couocou")

       await fetch('http://192.168.1.91:8080/Application_Web_Projet_Backend/TestServlet', {
        method: "POST",
        body: JSON.stringify({
            file: formData,
            op: "upload"
        })
       })
    }

    return (
        <div className="topleftLayer">
            <button className='Button ButtonUpload' onClick={buttonUpload}>
                <Upload></Upload>
                Upload
            </button>
            <div className='user_tll'>
                <div className="pp">
                    <div class="circle">
                        <img src={user.pp} alt="" />
                    </div>
                </div>
            </div>
            <input ref={inputUpload} type='file' style={{display: 'none'}} onChange={fichierChange}></input>
        </div>
    )
}

export default TopLeftLayer