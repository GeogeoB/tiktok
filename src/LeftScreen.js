import React from "react";
import "./css/leftScreen.css";
import Home from "./icones/home";

const SidebarWidget = () => {
  return (
    <div className="sidebar-widget">
      <button className="sidebar-button">
        <Home></Home>Pour toi
      </button>
      <button className="sidebar-button">Abonnement</button>
      <button className="sidebar-button">Explorer</button>
      <div className="suggested-accounts">
        {/* We will populate this with suggested accounts */}
      </div>
      <div className="top-hashtags">
        {/* We will populate this with top hashtags */}
      </div>
    </div>
  );
};

export default SidebarWidget;
