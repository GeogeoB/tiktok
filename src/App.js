import { useContext } from "react";
import "./css/root.css";
import "./css/index.css";
import VideoPlayer from "./videoPlayer";
import Login from "./login";
import TopLeftLayer from "./topLeftLayer";
import { appContext } from "./context";
import LeftScreen from "./LeftScreen";
import Abonnements from "./Abonnements";
import Explorer from "./Explorer";

function App() {
  let context = useContext(appContext);
  let loginOpen = context.loginOpen;
  let commentOpen = context.commentOpen;
  let window = context.window;

  console.log(window);

  return (
    <div className="App">
      <LeftScreen />
      {window === "PourToi" && <VideoPlayer />}
      {window === "Abonnement" && <Abonnements />}
      {window === "Explorer" && <Explorer />}
      {loginOpen && <Login />}
      <TopLeftLayer />
    </div>
  );
}

export default App;
