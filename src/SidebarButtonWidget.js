import { React, useContext } from "react";
import "./css/sidebarButtonWidget.css";
import Home from "./icones/home";
import Abonnement from "./icones/abonnement";
import Explorer from "./icones/explorer";
import { appContext } from "./context";

const SidebarButtonWidget = () => {
  let context = useContext(appContext);
  let window = context.window;
  let setWindow = context.setWindow;
  let isLoggedIn = context.user;

  // Event handlers for the buttons
  const handlePourToiClick = () => {
    console.log("Loading recommended videos...");
    setWindow(() => "PourToi");
  };

  const handleAbonnementClick = () => {
    console.log("Loading subscribed accounts...");
    setWindow(() => "Abonnement");
  };

  const handleExplorerClick = () => {
    console.log("Loading random videos...");
    setWindow(() => "Explorer");
  };

  return (
    <div className="sidebar-widget">
      {isLoggedIn && (
        <button
          className={
            (window === "PourToi" && "sidebar-button-active") +
            " Button sidebar-button"
          }
          onClick={handlePourToiClick}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Home /> Pour toi
          </div>
        </button>
      )}
      {isLoggedIn && (
        <button
          className={
            (window === "Abonnement" && "sidebar-button-active") +
            " Button sidebar-button"
          }
          onClick={handleAbonnementClick}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Abonnement /> Abonnement
          </div>
        </button>
      )}
      <button
        className={
          (window === "Explorer" && "sidebar-button-active") +
          " Button sidebar-button"
        }
        onClick={handleExplorerClick}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Explorer /> Explorer
        </div>
      </button>
    </div>
  );
};

export default SidebarButtonWidget;
