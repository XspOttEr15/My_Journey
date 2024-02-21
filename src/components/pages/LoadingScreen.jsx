import React from "react";
import { useProgress } from "@react-three/drei";
import "../styles/LoadingScreen.css";

const LoadingScreen = () => {
  const { progress, active } = useProgress();
  const randomVideos = [
    "/videos/vid_loading_room.mp4",
    "/videos/vid_loading_city1.mp4",
    "/videos/vid_loading-city2.mp4",
    "/videos/vid_loading-city3.mp4",
  ];

  const randomVideo = randomVideos[Math.floor(Math.random() * randomVideos.length)];

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <video className="loading-screen__background-video" autoPlay loop>
        <source src={randomVideo} type="video/mp4" />
      </video>
      <div className="loading-screen__container">
        <h1 className="loading-screen__title">3D Web Agency</h1>
        <div className="progress__container">
          <div
            className="progress__bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
