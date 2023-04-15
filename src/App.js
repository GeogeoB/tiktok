import { useEffect, createContext, useContext } from 'react';
import './index.css';
import VideoPlayer from './videoPlayer';
import Login from './login';
import TopLeftLayer from './topLeftLayer';
import Commentaires from './commentaires';
import { appContext } from './context';

function App() {

  let context = useContext(appContext);
  let loginOpen = context.loginOpen;
  let commentOpen = context.commentOpen;

  console.log("commentOpen", commentOpen)

  return (
    <div className="App">
        <VideoPlayer></VideoPlayer>
        {loginOpen && <Login></Login>}
        <TopLeftLayer></TopLeftLayer>
    </div>
  );
}

export default App;
