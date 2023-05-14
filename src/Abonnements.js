import { useState } from "react";
import "./css/index.css";
import Abonnement from "./Abonnement";

function Abonnements() {
  const [abonnements, setAbonnements] = useState([]);

  let user = {
    name: "Geogeo Le Rigolo",
    abonnees: "200k",
  };

  return (
    <div className="abonnement-container">
      <div className="abonnements">
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
        <Abonnement user={user}></Abonnement>
      </div>
    </div>
  );
}

export default Abonnements;
