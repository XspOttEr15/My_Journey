import React, { useState, useEffect, useContext } from "react";
import "./styles/Instructions.css";
import { DataContext } from "../../App";

const InstructionsT = ({ isVisible, setOpenModalTutorial,setSelector,selector }) => {
  // Initialize the animation class state
  const [animationClass, setAnimationClass] = useState("animate-bounce");
  const [header, setHeader] = useState("คลิกปุ่มด้านล่างเพื่อเข้าสู่หน้า Tutorial");
  const [skipButton, setSkipButton] = useState("Skip Tutorial (ข้าม) ");
  const {  isLocked, setIsLocked } =
    useContext(DataContext);

  // Handle click to change animation to animate-ping
  const handleClick = () => {
    setAnimationClass("animate-ping");
  };

  useEffect(() => {
    // If the animation class is animate-ping, set a timeout to revert it back to animate-bounce
    if (animationClass === "animate-ping") {
      const timer = setTimeout(() => {
        setAnimationClass("animate-bounce");
      }, 1000); // 1000ms = 1 second; adjust this based on the length of your animate-ping

      // Cleanup the timeout if the component is unmounted before the timeout is complete
      return () => clearTimeout(timer);
    }
  }, [animationClass]); // This effect depends on the animationClass state

  return (
    <div
      className={`instructions-overlay${isVisible ? " visible" : ""}`}
    >
      <div className="overlay"></div>
      <div  className=" animate-pulse text-green-400 text-6xl mb-5 text-center pointer-events-none">
        {header}
      </div>
      <svg
        className={`${animationClass} w-12 h-12 m-5  p-1`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.5 3 12 7.156 9.857 3H2l10 18L22 3h-7.5ZM4.486 4.5h2.4L12 13.8l5.107-9.3h2.4L12 18.021 4.486 4.5Z" />
      </svg>
      <button
        onClick={() => {
          setOpenModalTutorial(true)
          setSkipButton("Resume (เข้าสู่ห้อง)")
        }}
        // animate-pulse
        type="button" 
        className="   text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
      >
        Tutorial (วิธีการเล่น)
      </button>

      <button
        // disabled={isLocked}
        onClick={() => {
          setIsLocked(true)
          setTimeout(() => {
            setSkipButton("Resume (เข้าสู่ห้อง)");
          }, 3000); // 5000 milliseconds = 5 seconds
        }}
        type="button"
        id="Skip"
        className="mt-2  cursor-not-allowed text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
      >
        {skipButton}
      </button>
    </div>
  );
};

export default InstructionsT;
