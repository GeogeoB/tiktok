import { useContext } from "react";
import { appContext } from "./context";
import "./css/index.css";

function Abonnement({ user }) {
  let context = useContext(appContext);

  const clic_pp = () => {
    context.setVideoPresentationInfo((old) => ({ ...old, ...user }));
    context.setWindow("VideoPresentation");
  };

  return (
    <div className="abonnement" onClick={clic_pp}>
      <div className="circle_abonnement pp_comments_circle">
        <img src={user.pp} alt="profile of the user" />
      </div>
      <p>{user.pseudo}</p>
      <p>{user.surnom}</p>
    </div>
  );
}

export default Abonnement;
