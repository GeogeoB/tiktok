import React,  { useEffect, useRef, useState } from 'react';
import Commentaire from './commentaire';

function Commentaires({user}) {

    const [erreur, setErreur] = useState("Commentaire vide")

    let userComments = {
        id: 0,
        pseudo: "geogeo",
        pp: "./pp.jpg",
        comments: "Je suis Geogeo le Rigolo",
        date: "2023-04-04T15:30:45.500Z"
      }

    return (
        <div className="commentaires">
            <div className="commentaire-close-but">
                <div className='close-button'></div>
            </div>
            <div className="sendComment">
                <div className="pp_comments">
                    <div class="pp_comments_circle">
                        <img src={user.pp} alt="" />
                    </div>
                </div>
                <div className='comment_input'>
                    <input type="text" className='input_comment' placeholder='Ajoutez un commentaire...'/>
                    {erreur && <p className='text_erreur'>{erreur}</p>}
                </div>
            </div>
            <Commentaire  userComments={userComments}></Commentaire>
            <Commentaire  userComments={userComments}></Commentaire>
            <Commentaire  userComments={userComments}></Commentaire>
            <Commentaire  userComments={userComments}></Commentaire>
            <Commentaire  userComments={userComments}></Commentaire>
            <Commentaire  userComments={userComments}></Commentaire>
            <Commentaire  userComments={userComments}></Commentaire>
            <Commentaire  userComments={userComments}></Commentaire>
            <Commentaire  userComments={userComments}></Commentaire>
            <Commentaire  userComments={userComments}></Commentaire>
            <Commentaire  userComments={userComments}></Commentaire>
            <Commentaire  userComments={userComments}></Commentaire>
            <Commentaire  userComments={userComments}></Commentaire>
            <Commentaire  userComments={userComments}></Commentaire>
            <Commentaire  userComments={userComments}></Commentaire>
            <Commentaire  userComments={userComments}></Commentaire>
            <Commentaire  userComments={userComments}></Commentaire>
        </div>
    )
}

export default Commentaires