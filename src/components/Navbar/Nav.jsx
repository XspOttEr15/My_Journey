import { Link } from "react-router-dom";
import useSound from "use-sound";
import "../styles/Nav.css";
import { useEffect, useState } from "react";
import AudioPlayers from "./AudioPlayer";

const Nav = () => {
  const soundUrl = "/sound_effects/ButtonPush.mp3";
  const [play] = useSound(soundUrl);
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        
        openNav();
      } else if (e.key === "Enter") { // Example key for opening the nav
        closeNav();
      }
    };
  
    document.addEventListener("keydown", handleKeyDown);
  
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav className=" fixed top-0 left-0 w-full z-30">
      <div className=" flex flex-wrap items-center  justify-between mx-8 mt-4 p-4 ">
        <div>
          <Link
            to={"/home"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/Logo/icon_web.png"
              className="h-12"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              My Journey
            </span>
          </Link>
        </div>
        
        <div className=" flex  items-center space-x-5  ">
        <div className="  h-auto">
          <AudioPlayers />
        </div>
          <button
            type="button"
            id="sidenavopen"
            onClick={openNav}
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div id="mySidenav" className={`sidenav ${isOpen ? "open" : ""}`}>
          <a href="#" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <Link onClick={closeNav} to={"/home"}>Home</Link>
          <Link onClick={closeNav} to={"/roomchapterone"}>Story</Link>
          <Link onClick={closeNav} to={"/concept"}>Concept</Link>
          <Link onClick={closeNav} to={"/about"}>About-Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
