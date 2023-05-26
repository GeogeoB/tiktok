import { useEffect, useState } from "react";
import "./css/index.css";
import Abonnement from "./Abonnement";
import urlJboss from "./config";

function Abonnements() {
  const [abonnements, setAbonnements] = useState([]);

  useEffect(() => {
    const data = new URLSearchParams({
      op: "getAbonnements",
    });

    fetch(urlJboss + "/DataServlet?" + data, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let abonnements_ = data.abonnements;

        let _abonnements = abonnements_.map((abo, index) => {
          let user = {
            hashtag: false,
            idUploader: abo.id,
            pseudo: abo.surnom,
            Userdesc: abo.bio,
            nb_publi: abo.nbVideos,
            abonned: abo.abonne,
            nb_followers: abo.nbAbonnes,
          };

          return <Abonnement user={user}></Abonnement>;
        });

        setAbonnements(_abonnements);
      });
  }, []);

  return (
    <div className="abonnement-container">
      <div className="abonnements">{abonnements}</div>
    </div>
  );
}

export default Abonnements;
