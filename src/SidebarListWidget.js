import React, { useState, useContext } from "react";
import "./css/sidebarListWidget.css";
import { appContext } from "./context";
import Search from "./icones/search";

// AccountListItem component
const AccountListItem = ({ account }) => {
  return (
    <div className="account-list-item">
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
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "ngaud1",
      surname: "Natchica",
      profilePicture: "profile-pic.png",
    },
    {
      id: 2,
      name: "gbrenne1",
      surname: "Geogeo Le Rigolo",
      profilePicture: "pp.jpg",
    },
    {
      id: 3,
      name: "ngaud2",
      surname: "Natchica",
      profilePicture: "profile-pic.png",
    },
    {
      id: 4,
      name: "gbrenne2",
      surname: "Geogeo Le Rigolo",
      profilePicture: "pp.jpg",
    },
    {
      id: 5,
      name: "ngaud3",
      surname: "Natchica",
      profilePicture: "profile-pic.png",
    },
    {
      id: 6,
      name: "gbrenne3",
      surname: "Geogeo Le Rigolo",
      profilePicture: "pp.jpg",
    },
    {
      id: 7,
      name: "ngaud4",
      surname: "Natchica",
      profilePicture: "profile-pic.png",
    },
    {
      id: 8,
      name: "gbrenne4",
      surname: "Geogeo Le Rigolo",
      profilePicture: "pp.jpg",
    },
  ]);
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
        {filteredHashtags.map((hashtag) => (
          <p key={hashtag}>{hashtag}</p>
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
