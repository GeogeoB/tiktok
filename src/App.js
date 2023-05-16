import { useContext } from "react";
import "./css/root.css";
import "./css/index.css";
import VideoPlayer from "./videoPlayer";
import Login from "./login";
import TopLeftLayer from "./topLeftLayer";
import { appContext } from "./context";
import LeftScreen from "./LeftScreen";
import Abonnements from "./Abonnements";
import VideoPresentation from "./VideoPresentation";
import Toast from "./toast";
import UploadVideo from "./uploadVideo";

function App() {
  let context = useContext(appContext);
  let loginOpen = context.loginOpen;
  let window = context.window;

  console.log(window);

  return (
    <div className="App">
      <LeftScreen />
      <div className="App-mid">
        {window === "PourToi" && <VideoPlayer />}
        {window === "Abonnement" && <Abonnements />}
        {window === "Explorer" && <VideoPresentation />}
        {window === "VideoPresentation" && <VideoPresentation />}
      </div>
      {context.uploadVideo && <UploadVideo />}
      {loginOpen && <Login />}
      <TopLeftLayer />
      {context.toastOpen && <Toast />}
    </div>
  );
}

export default App;
