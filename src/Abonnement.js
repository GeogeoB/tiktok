import { useContext } from "react";
import { appContext } from "./context";
import "./css/index.css";

function Abonnement({ user }) {
  let context = useContext(appContext);

  const clic_pp = () => {
    context.setVideoPresentationInfo((old) => ({ ...old, hashtag: false }));
    context.setWindow("VideoPresentation");
  };

  return (
    <div className="abonnement">
      <div className="circle_abonnement pp_comments_circle" onClick={clic_pp}>
        <img src="pp.jpg" alt="profile of the user" />
      </div>
      <p>{user.name}</p>
      <p>{user.abonnees}</p>
    </div>
  );
}

export default Abonnement;
