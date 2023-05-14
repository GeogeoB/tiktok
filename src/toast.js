import { useContext } from "react";
import { appContext } from "./context";
import "./css/index.css";

export default function Toast() {
  let context = useContext(appContext);

  return (
    <div className={`toast ${context.toastOpen ? "visible" : ""}`}>
      Lien copié dans le presse-papiers !
    </div>
  );
}
