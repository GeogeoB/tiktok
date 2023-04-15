import React,  { useEffect, useRef, useState, useContext} from 'react';
import Commentaire from './commentaire';
import { appContext } from './context';

function Commentaires() {

    const [erreur, setErreur] = useState("")

    let context = useContext(appContext);
    let user = context.user;
    let setUser = context.setUser;
    let setOpencommentaire = context.setcommentOpen;
    let commentOpen = context.commentOpen;


    useEffect(() => {
        setTimeout(() => {
            document.documentElement.style.setProperty('--commentaire-translate', '0vh');
        }, 100)
    }, commentOpen)


    let userComments = {
        id: 0,
        pseudo: "geogeo",
        pp: "./pp.jpg",
        comments: "Je suis Geogeo le Rigolo",
        date: "2023-04-04T15:30:45.500Z"
      }

    const UserInput = () => {
        return (
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
        )
    }

    const closeCommentaire = () => {
        setOpencommentaire(old => !old)
        document.documentElement.style.setProperty('--commentaire-translate', '75vh');
    }

    return (
        <div className="commentairesOverflow">
            <div className="commentaires">
                <div className="commentaire-close-but">
                    <div className='close-button' onClick={closeCommentaire}></div>
                </div>
                {user && <UserInput></UserInput>}
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
        </div>
    )
}

export default Commentaires