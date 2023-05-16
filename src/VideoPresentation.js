import "./css/index.css";

function VideoPresentation() {
  let videos = [<video src={"info.src"} className="video" controls></video>];

  let info = {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    nb_vue: 200,
  };

  return (
    <div className="videoExploration">
      <div className="videoExploration-videos">
        <p className="infoVue">{info.nb_vue}</p>
        <video src={info.src} className="video-column" autoPlay={false}></video>
      </div>
      <div className="videoExploration-videos">
        <p className="infoVue">{info.nb_vue}</p>
        <video src={info.src} className="video-column" autoPlay={false}></video>
      </div>
      <div className="videoExploration-videos">
        <p className="infoVue">{info.nb_vue}</p>
        <video src={info.src} className="video-column" autoPlay={false}></video>
      </div>
      <div className="videoExploration-videos">
        <p className="infoVue">{info.nb_vue}</p>
        <video src={info.src} className="video-column" autoPlay={false}></video>
      </div>
      <div className="videoExploration-videos">
        <p className="infoVue">{info.nb_vue}</p>
        <video src={info.src} className="video-column" autoPlay={false}></video>
      </div>
      <div className="videoExploration-videos">
        <p className="infoVue">{info.nb_vue}</p>
        <video src={info.src} className="video-column" autoPlay={false}></video>
      </div>
      <div className="videoExploration-videos">
        <p className="infoVue">{info.nb_vue}</p>
        <video src={info.src} className="video-column" autoPlay={false}></video>
      </div>
    </div>
  );
}

export default VideoPresentation;
