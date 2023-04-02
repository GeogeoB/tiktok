import { useEffect } from 'react';
import './index.css';
import VideoPlayer from './videoPlayer';
import Login from './login';

function App() {

  useEffect(() => {
    console.log("App")
  }, [])

  return (
    <div className="App">
      <VideoPlayer></VideoPlayer>
      <Login></Login>
    </div>
  );
}

export default App;
