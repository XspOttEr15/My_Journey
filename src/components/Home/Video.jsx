import React from "react";
import "../styles/Video.css";
import ReactPlayer from "react-player";
import bgVideo from "/videos/bg.mp4";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
const Video = () => {
  return (
    <>
      <div className="w-full h-screen z-20 relative ">
        <div className="overlay"></div>
        <MouseParallaxContainer
          resetOnLeave
          globalFactorX={0.1}
          globalFactorY={0.1}
          containerStyle={{
            width: "100%",
            height: "100%",
          }}
        >
          {/* <MouseParallaxChild
            factorX={0.3}
            factorY={0.5}
            style={{
              backgroundImage: "url(/images/border-img/room.png)",
              backgroundSize: "auto",
              backgroundRepeat: "repeat",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              backgroundPositionY: "50%",
              transform: "scale(1.2)",
              position: "absolute",
            }}
          /> */}

          <MouseParallaxChild
            factorX={0.3}
            factorY={0.5}
            style={{
              backgroundSize: "auto",
              
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundPositionY: "50%",
              width: "100%",
              height: "100%",
              transform: "scale(1.05)",
              position: "absolute",
            }}
          >
          <video autoPlay muted loop className="object-cover w-screen h-screen">
            <source src={bgVideo} type="video/mp4"  />
          </video> 
          </MouseParallaxChild>
          
        </MouseParallaxContainer>
        {/* <video autoPlay muted loop className="object-cover w-screen h-screen">
            <source src={bgVideo} type="video/mp4"  />
          </video> */}
      </div>
    </>
  );
};

export default Video;
