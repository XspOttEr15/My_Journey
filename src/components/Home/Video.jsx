import React from "react";
import "../styles/Video.css";
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
        <div className="overlay"></div>
        <h1 className=" absolute top-10">MY JOURNEY</h1>
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
            <video
              autoPlay
              muted
              loop
              className=" object-cover w-screen h-screen"
            >
              <source src="public/videos/Loading/Reels.mp4" type="video/mp4" />
            </video>
          </MouseParallaxChild>

          <div className=" z-50  absolute inset-0  flex flex-col justify-center place-items-center  gap-10   text-center  pt-10 ">
            <h1
              style={{
                opacity: "0.9",
                color: "#fff",
              }}
              className="select-none text-9xl  opacity-90 font-black  mix-blend-multiply "
            >
              MY JOURNEY
            </h1>
            <Link to={"/roomchapterone"}>
            <button
              style={{
                cursor: 'url("/images/CustomMouses/pointer.png"), pointer',
              }}
              onClick={play}
              className=" text-emerald-400  bg-font-medium    font-semibold  text-5xl px-10 py-4 text-center mr-5 mb-5   hover:text-white border border-white hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-purple-300  rounded-lg  me-2  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
              
            >
              Let's Begin
            </button>
            </Link>
          </div>
        </MouseParallaxContainer>
        {/* <video autoPlay muted loop className="object-cover w-screen h-screen">
            <source src={bgVideo} type="video/mp4"  />
          </video> */}
      </div>
    </>
  );
};

export default Video;
