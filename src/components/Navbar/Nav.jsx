import { Link } from "react-router-dom";
import useSound from "use-sound";
import "../styles/Nav.css";
import { useState } from "react";
import AudioPlayer from "./AudioPlayer";

const Nav = () => {
  const soundUrl = "/sound_effects/ButtonPush.mp3";
  const [play] = useSound(soundUrl);
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  return (
    // <div className="  lg:w-full lg:flex ">
    //   <Link to="/" onMouseEnter={() => setHomeImg("/images/Navbar/buttons/button_home_hover.png")} onMouseLeave={() => setHomeImg("/images/Navbar/buttons/button_home_normal.png")} onClick={play}>
    //     <img
    //       src={homeImg}
    //       className="fixed w-[90px] lg:w-[100px] h-[30px] z-[50] top-[4.6%] left-[59%]"
    //     />
    //   </Link>
    //   <Link to="/roomchapterone" onMouseEnter={() => setStoryImg("/images/Navbar/buttons/button_story_hover.png")} onMouseLeave={() => setStoryImg("/images/Navbar/buttons/button_story_normal.png")} onClick={play}>
    //     <img
    //       src={storyImg}
    //       className="fixed w-[90px] h-[30px] z-[50] top-[4.6%] left-[65%]"
    //     />
    //   </Link>
    //   <Link to="/concept" onMouseEnter={() => setConceptImg("/images/Navbar/buttons/button_concept_hover.png")} onMouseLeave={() => setConceptImg("/images/Navbar/buttons/button_concept_normal.png")} onClick={play}>
    //     <img
    //       src={conceptImg}
    //       className="fixed w-[120px] h-[30px] z-[50] top-[4.6%] left-[70.5%]"
    //     />
    //   </Link>
    //   <Link to="/about" onMouseEnter={() => setAboutUsImg("/images/Navbar/buttons/button_aboutus_hover.png")} onMouseLeave={() => setAboutUsImg("/images/Navbar/buttons/button_aboutus_normal.png")} onClick={play}>
    //     <img
    //       src={aboutUsImg}
    //       className="fixed w-[120px] h-[30px] z-[50] top-[4.6%] left-[77.5%]"
    //     />
    //   </Link>
    //   <Link onClick={play}>
    //     <div className="fixed top-[4.7%] left-[84.5%] z-[50]">
    //       <AudioPlayer />
    //     </div>
    //   </Link>
    // </div>

    <nav className="sections fixed top-0 left-0 w-full z-30 ">
      <div className=" flex flex-wrap items-center  justify-between mx-8 mt-4 p-4 ">
        <div>
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Flowbite
            </span>
          </a>
        </div>
        
        <div className=" flex  items-center space-x-5  ">
        <div className=" lg:w-[250px] md:w-[210px] h-auto">
          <AudioPlayer />
          </div>
          <button
            type="button"
            id="sidenavopen"
            onClick={openNav}
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div id="mySidenav" className={`sidenav ${isOpen ? "open" : ""}`}>
          <a href="#" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <Link to={"/"}>Home</Link>
          <Link to={"/roomchapterone"}>Story</Link>
          <Link to={"/concept"}>Concept</Link>
          <Link to={"/about"}>About-Us</Link>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
