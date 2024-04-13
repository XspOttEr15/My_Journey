import React, { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";
import "../styles/LoadingScreen.css";
import { useContext } from "react";
import { DataContext } from "../../App";

const LoadingScreen = () => {
  
  return (
    <div className={`loading-screen`}>
      <video className="loading-screen__background-video" autoPlay loop muted preload>
        <source src="https://ik.imagekit.io/vsfmz5htw/Video/Loading/vid_loading_room.mp4?updatedAt=1712911800087" type="video/mp4" />
      </video>
      <div className="loading-screen__container">
        <h1 className="loading-screen__title">Loading Scene...</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;




export const LoadingScreenRoom = ({ setHtmltext }) => {
  const { progress } = useProgress();
  const [showScreen, setShowScreen] = useState(true); // Control visibility of the loading screen

  const {
    setIsPassOne,
  } = useContext(DataContext);


  const handleStartClick = () => {
    setShowScreen(false); 
  };


  return (
    <div
      className={`loading-screen ${showScreen ? "" : "loading-screen--hidden"}`}
      onClick={handleStartClick}
    >
      <video className="loading-screen__background-video" autoPlay loop muted >
        <source src="/videos/vid_loading_room.mp4" type="video/mp4" />
      </video>
      <div className="loading-screen__container">
        <h1 className="loading-screen__title">Click to Start</h1>
      </div>
    </div>
  );
};

export const LoadingScreenSkip = () => {
  const { progress } = useProgress();
  const [showScreen, setShowScreen] = useState(true); // Control visibility of the loading screen
  const randomVideos = [
    "/videos/vid_loading-city3.mp4",
  ];

  const handleStartClick = () => {
    setShowScreen(false); // Hide the loading screen when the start button is clicked
    setHtmltext(true)
  };



  // Optional: Automatically show the start button when progress reaches 100%
  useEffect(() => {
    if (progress === 100) {
      setShowScreen(false); 
    }
  }, [progress]);

  return (
    <div
      className={`loading-screen ${showScreen ? "" : "loading-screen--hidden"}`}
      onClick={handleStartClick}
    >
      <video className="loading-screen__background-video" autoPlay loop muted >
        <source src="/videos/vid_loading-city3.mp4" type="video/mp4" />
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
              Enjoy the Website !! 
            </p>
        )}
      </div>
    </div>
  );
};

export const LoadingScreenRoomSkip = ({ setHtmltext }) => {
  const { progress } = useProgress();
  const [showScreen, setShowScreen] = useState(true); // Control visibility of the loading screen


  // Optional: Automatically show the start button when progress reaches 100%
  useEffect(() => {
    if (progress === 100) {
      setShowScreen(false); 
      setHtmltext(true)
    }
  }, [progress]);

  

  return (
    <div
      className={`loading-screen ${showScreen ? "" : "loading-screen--hidden"}`}
    >
      <video className="loading-screen__background-video" autoPlay loop muted >
        <source src="/videos/vid_loading_room.mp4"  type="video/mp4" />
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
              Enjoy the Website !! 
            </p>
        )}
      </div>
    </div>
  );
};
