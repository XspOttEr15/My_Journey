import React from "react";
import "../styles/Video.css";
const Video = () => {
  return (
    <>
      <div className="w-full h-screen z-20 relative">
        <div className="overlay"></div>
        <video
          src="/videos/bg.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover "
        />
      </div>
    </>
  );
};

export default Video;
