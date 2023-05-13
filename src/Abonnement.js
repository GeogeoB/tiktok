import "./css/index.css";

function Abonnement({ user }) {
  return (
    <div className="abonnement">
      <div className="circle_abonnement pp_comments_circle">
        <img src="pp.jpg" alt="profile of the user" />
      </div>
      <p>{user.name}</p>
      <p>{user.abonnees}</p>
    </div>
  );
}

export default Abonnement;
