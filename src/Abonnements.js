import { useEffect, createContext, useContext, useState } from "react";
import "./css/index.css";
import Abonnement from "./Abonnement";

function Abonnements() {
  const [abonnements, setAbonnements] = useState([]);

  let user = {
    name: "Geogeo Le Rigolo",
    abonnees: "200k",
  };

  return (
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
  );
}

export default Abonnements;
