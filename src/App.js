import { useEffect } from 'react';
import './index.css';
import VideoPlayer from './videoPlayer';

function App() {

  useEffect(() => {
    console.log("App")
  }, [])

  return (
    <div className="App">
      <VideoPlayer></VideoPlayer>
    </div>
  );
}

export default App;
