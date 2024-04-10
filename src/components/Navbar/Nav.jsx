import { Link } from "react-router-dom";
import useSound from "use-sound";
import "../styles/Nav.css";
import { useContext, useEffect, useState } from "react";
import AudioPlayers from "./AudioPlayer";
import { DataContext } from "../../App";
import AudioRoom from "./AudioRoom";
import AudioChapterOne from "./AudioChapterOne";

const Nav = () => {
  const soundUrl = "/sound_effects/ButtonPush.mp3";
  const [play] = useSound(soundUrl);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State to store window width
  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);
  const { CloseNavbar, setCloseNavbar, isLocked, setIsLocked} = useContext(DataContext);

  useEffect(() => {
    if (!isLocked) {
      openNav();
    } else {
      closeNav();
    }
  }, [isLocked]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (CloseNavbar === "hidden") {
    return null;
  }
  if (CloseNavbar === "showall") {
    return (
      <nav id="Navbar" className="fixed top-0 left-0 w-full z-30">
        <div
          id="Logo"
          className="flex flex-wrap items-center justify-between mx-8 mt-4 p-4"
        >
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

          <div className="flex items-center space-x-5">
            {/* Conditionally render AudioPlayers based on window width */}
            {windowWidth >= 1440 ? (
              <div id="audios" className="h-auto">
                <AudioPlayers />
              </div>
            ) : (
              <div style={{ display: "none" }}>
                <AudioPlayers />
              </div>
            )}
            <button
              type="button"
              id="sidenavopen"
              onClick={openNav}
              className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
            <Link onClick={closeNav} to={"/home"}>
              Home
            </Link>
            <Link onClick={closeNav} to={"/roomchapterone"}>
              Story
            </Link>
            <Link onClick={closeNav} to={"/concept"}>
              Concept
            </Link>
            <Link onClick={closeNav} to={"/about"}>
              About-Us
            </Link>
          </div>
        </div>
      </nav>
    );
  } else if (CloseNavbar === "Room") {
    return (
      <nav id="Navbar" className="fixed top-0 left-0 w-full z-30">
        <div
          id="Logo"
          className="flex flex-wrap items-center justify-between mx-8 mt-4 p-4"
        >
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

          <div className="flex items-center space-x-5">
            {/* Conditionally render AudioRoom based on window width */}
            {windowWidth >= 1440 ? (
              <div id="audios" className="h-auto">
                <AudioRoom />
              </div>
            ) : (
              <div style={{ display: "none" }}>
                <AudioRoom />
              </div>
            )}
            {windowWidth < 1440 && 
            <button
              type="button"
              id="sidenavopen"
              onClick={() => {setIsLocked(false)}}
              className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <svg
                class="w-6 h-6text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
                />
              </svg>
            </button>
            }
            <button
              type="button"
              id="sidenavopen"
              onClick={openNav}
              className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
            <Link onClick={closeNav} to={"/home"}>
              Home
            </Link>
            <Link onClick={closeNav} to={"/roomchapterone"}>
              Story
            </Link>
            <Link onClick={closeNav} to={"/concept"}>
              Concept
            </Link>
            <Link onClick={closeNav} to={"/about"}>
              About-Us
            </Link>
          </div>
        </div>
      </nav>
    );
  }
};

export default Nav;
