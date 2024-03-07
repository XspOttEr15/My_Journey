import React from "react";
import "../styles/Video.css";
import ReactPlayer from "react-player";
import bgVideo from '/videos/bg.mp4'
const Video = () => {
  return (
    <>
      <div className="w-full h-screen z-20 relative">
        <div className="overlay"></div>
          <video autoPlay muted loop className="object-cover w-screen h-screen">
            <source src={bgVideo} type="video/mp4"  />
          </video>
      </div>
    </>
  );
};

export default Video;
