import { useEffect } from 'react';
import './index.css';
import VideoPlayer from './videoPlayer';
import Login from './login';
import TopLeftLayer from './topLeftLayer';
import Commentaires from './commentaires';

function App() {

  useEffect(() => {
    console.log("App")
  }, [])

  let user = {
    id: 0,
    pseudo: "geogeo",
    pp: "./pp.jpg",
  }

  return (
    <div className="App">
      <VideoPlayer></VideoPlayer>
      <Login></Login>
      <TopLeftLayer user={user}></TopLeftLayer>
      <Commentaires user={user}></Commentaires>
    </div>
  );
}

export default App;
