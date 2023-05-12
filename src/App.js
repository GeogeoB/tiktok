import { useEffect, createContext, useContext } from 'react';
import './css/root.css';
import './css/index.css';
import VideoPlayer from './videoPlayer';
import Login from './login';
import TopLeftLayer from './topLeftLayer';
import Commentaires from './commentaires';
import { appContext } from './context';
import LeftScreen from './LeftScreen';

function App() {

  let context = useContext(appContext);
  let loginOpen = context.loginOpen;
  let commentOpen = context.commentOpen;

  return (
    <div className="App">
        <LeftScreen></LeftScreen>
        <VideoPlayer></VideoPlayer>
        {loginOpen && <Login></Login>}
        <TopLeftLayer></TopLeftLayer>
    </div>
  );
}

export default App;
