import React from "react";
import "../styles/Video.scss";
import { Link } from "react-router-dom";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import useSound from "use-sound";
const Video = () => {
  const soundUrl = "/sound_effects/ButtonPush.mp3";
  const [play] = useSound(soundUrl);
  return (
    <>
      <div className="w-full h-screen z-20 relative ">
        <div className="overlayshadow"></div>
        <MouseParallaxContainer
          resetOnLeave
          globalFactorX={0.1}
          globalFactorY={0.1}
          containerStyle={{
            width: "100%",
            height: "100%",
          }}>

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
            <video
              autoPlay
              muted
              loop
              className=" object-cover w-screen h-screen"
            >
              <source src="/videos/home/Reels.mp4" type="video/mp4" />
            </video>
          </MouseParallaxChild>
        </MouseParallaxContainer>

        <div className=" z-50 select-none  absolute inset-0  flex flex-col justify-center place-items-center  gap-10   text-center  pt-10  ">
          <div
            style={{
              
              opacity: "1",
              color: "#fff",
              textShadow: "#009d7b 9px 8px 11px ",
              
            }}
            className="  text-9xl  opacity-90 font-black   "
            id="divv"

          >
              MY JOURNEY
          </div>

          <Link to={"/roomchapterone"}>
            <button
              id="bb"
              style={{
                cursor: 'url("/images/CustomMouses/pointer.png"), pointer',
              }}
              onClick={play}
              className=" bbutton   bg-font-medium    font-semibold  text-3xl px-10 py-4 text-center mr-5 mb-5     "

            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Let's Begin
            </button>


          </Link>
        </div>

      </div>
    </>
  );
};


export default Video;
