import { useContext, useEffect } from "react";
import { appContext } from "./context";
import "./css/index.css";

export default function Toast() {
  let context = useContext(appContext);

  useEffect(() => {
    setTimeout(() => context.setToastOpen(false), 4000);
  }, [context]);

  return (
    <div className="toast-container">
      <div className={`toast`}>{context.toastText}</div>
    </div>
  );
}
