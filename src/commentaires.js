import React, { useEffect, useRef, useState, useContext } from "react";
import Commentaire from "./commentaire";
import { appContext } from "./context";
import urlJboss from "./config";

function Commentaires({ idvideo }) {
  const [erreur, setErreur] = useState("");
  const inputComment = useRef(null);
  const [commentaires, setCommentaires] = useState([]);

  let context = useContext(appContext);
  let user = context.user;
  let setOpencommentaire = context.setcommentOpen;
  let commentOpen = context.commentOpen;

  useEffect(() => {
    setTimeout(() => {
      document.documentElement.style.setProperty("--popup-translate", "0vh");
    }, 100);
  }, [commentOpen]);

  useEffect(() => {
    const data = new URLSearchParams({
      op: "getVideoInfos",
      id: idvideo,
    });

    fetch(urlJboss + "/DataServlet?" + data, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let commentaires_ = data.message.commentaires;

        let _commentaires = commentaires_.map((commentaire, index) => {
          let userComments = {
            id: commentaire.id,
            pseudo: commentaire.compteUploader.nom,
            surnom : commentaire.compteUploader.surnom,
            pp: "./pp.jpg",
            comments: commentaire.text,
            date: commentaire.date,
          };

          return (
            <Commentaire userComments={userComments} key={index}></Commentaire>
          );
        });

        setCommentaires(() => _commentaires);
      });
  }, [idvideo]);

  let userComments = {
    id: 0,
    pseudo: "geogeo",
    pp: "./pp.jpg",
    comments: "Je suis Geogeo le Rigolo",
    date: "2023-04-04T15:30:45.500Z",
  };

  const commentSubmit = (e) => {
    e.preventDefault();
    let comment = inputComment.current.value;

    const data = new URLSearchParams({
      op: "addCommentaire",
      videoID: idvideo,
      text: comment,
    });

    fetch(urlJboss + "/DataServlet?" + data, { method: "POST",  credentials: "include" }).then(
      (response) => {
        if (!response.ok) {
          setErreur("Il y a eu une erreur");
        } else {
          let userComments = {
            id: 0,
            pseudo: context.user.pseudo,
            pp: "./pp.jpg",
            comments: comment,
            date: new Date(),
          };

          setCommentaires((old) => [...old, <Commentaire userComments={userComments}></Commentaire>]);
        }
      }
    );
  };

  const UserInput = () => {
    return (
      <div className="sendComment">
        <div className="pp_comments">
          <div className="pp_comments_circle">
            <img src={user.pp} alt="" />
          </div>
        </div>
        <div className="comment_input">
          <form onSubmit={commentSubmit}>
            <input
              ref={inputComment}
              type="text"
              className="input_comment"
              placeholder="Ajoutez un commentaire..."
            />
            {erreur && <p className="text_erreur">{erreur}</p>}
          </form>
        </div>
      </div>
    );
  };

  const closeCommentaire = () => {
    setOpencommentaire((old) => !old);
    document.documentElement.style.setProperty("--popup-translate", "75vh");
  };

  return (
    <div className="commentairesOverflow">
      <div className="commentaires">
        <div className="commentaire-close-but">
          <div className="close-button" onClick={closeCommentaire}></div>
        </div>
        {user && <UserInput></UserInput>}
        {commentaires}
      </div>
    </div>
  );
}

export default Commentaires;
