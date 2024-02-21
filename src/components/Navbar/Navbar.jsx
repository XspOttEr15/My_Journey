import { DarkThemeToggle } from "flowbite-react";
import ThemeToggle from "../Home/ThemeToggle";
import { Link } from "react-router-dom";
import AudioPlayer from "./AudioPlayer";
import { Button } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DataContext } from "../../App";
import "./Navbar.css";
import useSound from "use-sound";

const Navbar = () => {
  const [navbarClose, setNavbarClose] = useState(false);
  const [navbarBClose, setNavbarBClose] = useState(false);
  const soundUrl = '/sound_effects/ButtonPush.mp3';
  const [play] = useSound(soundUrl);

  const classes = {
    base: "bg-white border-gray-200 dark:bg-gray-300 w-full sections z-20 block",
    hidden: "hidden",
    fixed: "fixed",
  };
  

  const {
    setCloseNavbar,
    CloseNavbar,
    CloseButtonNavbar,
    setCloseButtonNavbar,
    isNavbarFixed, 
  } = useContext(DataContext);

 
  useEffect(() => {
    setNavbarBClose(false);
  });

  useEffect(() => {
    setNavbarClose(CloseNavbar);
  }, [CloseNavbar]);

  useEffect(() => {
    setNavbarBClose(CloseButtonNavbar);
  }, [CloseButtonNavbar]);

  return (
    <>
      <motion.nav
        animate={
          navbarClose ? { opacity: 0, y: -5 } : { opacity: 1, y: 0 } // animate based on navbarClose state
        }
        className={`${classes.base} ${navbarClose ? classes.hidden : ""} ${isNavbarFixed ? classes.fixed : ""}` }
      >
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 ">
          <div  className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black text-black">
              Find the ways
            </span>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
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

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-300 md:dark:bg-gray-300 dark:border-gray-700 ">
              <Link to="/" onClick={play}>
                <li className="pt-2">
                  <p
                    href="#"
                    className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </p>
                </li>
              </Link>
              <Link to={"/roomchapterone"} onClick={play}>
                <li className="pt-2">
                  <p
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Story
                  </p>
                </li>
              </Link>
              <Link to={"/concept"} onClick={play}>
                <li className="pt-2">
                  <p
                    className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Concept
                  </p>
                </li>
              </Link>
              <Link to="/about" onClick={play}>
                <li className="pt-2">
                  <p
                   
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    AboutUs
                  </p>
                </li>
              </Link >
              <li className="pt-1" onClick={play}>
                <p
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <ThemeToggle />
                </p>
              </li>
              <li className="pt-1">
                <div
                  className=" inline-block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent sm:align-middle "
                >
                  <AudioPlayer />
                </div>
              </li>
              {CloseButtonNavbar && (
                <li className="pt-0">
                  <p
                    className=" inline-block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent sm:align-middle "
                  >
                    <Button
                      className="z-40 right-[1%] rounded-full "
                      gradientDuoTone="purpleToBlue"
                      onClick={() => {
                         setCloseNavbar(true), setCloseButtonNavbar(false) , play();;
                      }}
                    >
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18 18 6m0 12L6 6"
                        />
                      </svg>
                    </Button>
                  </p>
                </li>
              )}
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
