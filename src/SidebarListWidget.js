import React, { useState, useContext, useEffect } from "react";
import "./css/sidebarListWidget.css";
import { appContext } from "./context";
import Search from "./icones/search";
import urlJboss from "./config";

// AccountListItem component
const AccountListItem = ({ account }) => {
  const context = useContext(appContext);

  const ppClick = () => {
    context.setVideoPresentationInfo((old) => ({
      ...old,
      hashtag: false,
      idUploader: account.id,
      pseudo: account.name,
      pp: account.profilePicture,
      nbAbonnes: account.nbAbonnes,
      nbVideos: account.nbVideos,
      ...account,
    }));
    context.setWindow("VideoPresentation");
  };
  return (
    <div className="account-list-item" onClick={ppClick}>
      <img
        src={account.profilePicture}
        alt={account.name}
        className="profile-picture"
      />
      <div>
        <p>{account.name}</p>
        <p>{account.surname}</p>
      </div>
    </div>
  );
};

// SubscribedAccountsWidget component
const SubscribedAccountsWidget = () => {
  // simulate the accounts data
  const context = useContext(appContext);
  const accounts = context.abonnements;

  useEffect(() => {
    context.refreshAbonnements();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredAccounts = accounts.filter((account) =>
    account.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="accounts-widget">
      <h3>Comptes suivis</h3>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="icons-search" />
      </div>
      <div className="accounts-list">
        {filteredAccounts.map((account) => (
          <AccountListItem key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
};

// TopHashtagsWidget component
const TopHashtagsWidget = () => {
  // simulate the hashtags data
  const [hashtags, setHashtags] = useState([
    "#PourToi",
    "#ToujoursDebout",
    "#DenonceTonPorc",
    "#WhyDidTheChicken",
    "#BananaPeelSlipUps",
    "#AccidentalSuperhero",
    "#DontPushTheRedButton",
    "#AliensStoleMyLunch",
    "#UnicornRiding101",
    "#MyCatThinksHesADog",
    "#PourToi",
    "#ToujoursDebout",
    "#DenonceTonPorc",
    "#WhyDidTheChicken",
    "#BananaPeelSlipUps",
    "#AccidentalSuperhero",
    "#DontPushTheRedButton",
    "#AliensStoleMyLunch",
    "#UnicornRiding101",
    "#MyCatThinksHesADog",
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const data = new URLSearchParams({
      op: "getAllHashtags",
    });
    fetch(urlJboss + "/DataServlet?" + data, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setHashtags(data.hashtags);
      });
  }, []);

  const filteredHashtags = hashtags.filter((hashtag) =>
    hashtag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="hashtags-widget">
      <h3>Découvrir</h3>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="icons-search" />
      </div>
      <div className="hashtags-list">
        {filteredHashtags.map((hashtag, index) => (
          <p key={index}>#{hashtag}</p>
        ))}
      </div>
    </div>
  );
};

function SidebarListWidget() {
  const context = useContext(appContext);
  let isLoggedIn = context.user;

  if (!isLoggedIn) {
    return <div></div>;
  } else {
    return (
      <div className="sidebar-list-widget">
        <hr />
        <SubscribedAccountsWidget />
        <TopHashtagsWidget />
      </div>
    );
  }
}

export default SidebarListWidget;
