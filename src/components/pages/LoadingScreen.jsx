import React, { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";
import "../styles/LoadingScreen.css";

const LoadingScreen = ({ visitedOnce, setPlayerActive, setHtmltext }) => {
  const { progress } = useProgress();
  const [showScreen, setShowScreen] = useState(true); // Control visibility of the loading screen
  const randomVideos = [
    "/videos/vid_loading_room.mp4",
    "/videos/vid_loading_city1.mp4",
    "/videos/vid_loading-city2.mp4",
    "/videos/vid_loading-city3.mp4",
  ];

  const randomVideo =
    randomVideos[Math.floor(Math.random() * randomVideos.length)];

  const handleStartClick = () => {
    setShowScreen(false); // Hide the loading screen when the start button is clicked
    setPlayerActive(true)
    setHtmltext(true)
  };

  // Optional: Automatically show the start button when progress reaches 100%
  useEffect(() => {
    if (progress === 100) {
      // You can implement any action here when the progress hits 100%
      // For example, logging to the console or automatically showing the start button (if desired)
    }
  }, [progress]);

  return (
    <div
      className={`loading-screen ${showScreen ? "" : "loading-screen--hidden"}`}
      onClick={handleStartClick}
    >
      <video className="loading-screen__background-video" autoPlay loop muted>
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
        {progress === 100 && (
          <p className="click-to-continue-text">
              Click anywhere to continue
            </p>
        )}
      </div>
    </div>
  );
};
export default LoadingScreen;



export const LoadingScreenRoom = ({ visitedOnce, setPlayerActive, setHtmltext }) => {
  const { progress } = useProgress();
  const [showScreen, setShowScreen] = useState(true); // Control visibility of the loading screen
  const randomVideos = [
    "/videos/vid_loading_room.mp4",
    "/videos/vid_loading_city1.mp4",
    "/videos/vid_loading-city2.mp4",
    "/videos/vid_loading-city3.mp4",
  ];

  const randomVideo =
    randomVideos[Math.floor(Math.random() * randomVideos.length)];

  const handleStartClick = () => {
    setShowScreen(false); // Hide the loading screen when the start button is clicked
    setPlayerActive(true)
    setHtmltext(true)
  };

  // Optional: Automatically show the start button when progress reaches 100%
  useEffect(() => {
    if (progress === 100) {
      // You can implement any action here when the progress hits 100%
      // For example, logging to the console or automatically showing the start button (if desired)
    }
  }, [progress]);

  return (
    <div
      className={`loading-screen ${showScreen ? "" : "loading-screen--hidden"}`}
      onClick={handleStartClick}
    >
      <video className="loading-screen__background-video" autoPlay loop muted>
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
        {progress === 100 && (
          <p className="click-to-continue-text">
              Click anywhere to continue
            </p>
        )}
      </div>
    </div>
  );
};


