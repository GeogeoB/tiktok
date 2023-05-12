import React from "react";
import "./css/leftScreen.css";
import Home from "./icones/home";
import Abonnement from "./icones/abonnement";
import Explorer from "./icones/explorer";

const SidebarWidget = () => {
  // Let's define some mock data for the demonstration
  const suggestedAccounts = ["account1", "account2", "account3"];
  const topHashtags = ["#hashtag1", "#hashtag2", "#hashtag3"];

  // Event handlers for the buttons
  const handlePourToiClick = () => {
    console.log("Loading recommended videos...");
    // Here, you'll implement the functionality to load the recommended videos
  };

  const handleAbonnementClick = () => {
    console.log("Loading subscribed accounts...");
    // Here, implement the functionality to load subscribed accounts
  };

  const handleExplorerClick = () => {
    console.log("Loading random videos...");
    // Here, implement the functionality to load random videos
  };

  return (
    <div className="sidebar-widget">
      <button className="sidebar-button-active Button sidebar-button" onClick={handlePourToiClick}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Home /> Pour toi
        </div>
      </button>
      <button className="Button sidebar-button" onClick={handleAbonnementClick}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Abonnement /> Abonnement
        </div>
      </button>
      <button className="Button sidebar-button" onClick={handleExplorerClick}>
      <div style={{ display: "flex", alignItems: "center" }}>
          <Explorer /> Explorer
        </div>
      </button>
      <div className="suggested-accounts">
        {suggestedAccounts.map((account) => (
          <p key={account}>{account}</p>
        ))}
      </div>
      <div className="top-hashtags">
        {topHashtags.map((hashtag) => (
          <p key={hashtag}>{hashtag}</p>
        ))}
      </div>
    </div>
  );
};

export default SidebarWidget;
