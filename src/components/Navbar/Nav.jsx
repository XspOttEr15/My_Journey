import { Link } from "react-router-dom";
import useSound from "use-sound";
import "../styles/Nav.css";
import AudioPlayer from "./AudioPlayer";
import { useState } from "react";

const Nav = () => {
  const soundUrl = "/sound_effects/ButtonPush.mp3";
  const [play] = useSound(soundUrl);

  // States to manage hover images
  const [homeImg, setHomeImg] = useState("/images/Navbar/buttons/button_home_normal.png");
  const [storyImg, setStoryImg] = useState("/images/Navbar/buttons/button_story_normal.png");
  const [conceptImg, setConceptImg] = useState("/images/Navbar/buttons/button_concept_normal.png");
  const [aboutUsImg, setAboutUsImg] = useState("/images/Navbar/buttons/button_aboutus_normal.png");

  return (
    <div className=" lg:block lg:w-full ">
      <Link to="/" onMouseEnter={() => setHomeImg("/images/Navbar/buttons/button_home_hover.png")} onMouseLeave={() => setHomeImg("/images/Navbar/buttons/button_home_normal.png")} onClick={play}>
        <img
          src={homeImg}
          className="fixed w-[90px] lg:w-[100px] h-[30px] z-[50] top-[4.6%] left-[59%]"
        />
      </Link>
      <Link to="/roomchapterone" onMouseEnter={() => setStoryImg("/images/Navbar/buttons/button_story_hover.png")} onMouseLeave={() => setStoryImg("/images/Navbar/buttons/button_story_normal.png")} onClick={play}>
        <img
          src={storyImg}
          className="fixed w-[90px] h-[30px] z-[50] top-[4.6%] left-[65%]"
        />
      </Link>
      <Link to="/concept" onMouseEnter={() => setConceptImg("/images/Navbar/buttons/button_concept_hover.png")} onMouseLeave={() => setConceptImg("/images/Navbar/buttons/button_concept_normal.png")} onClick={play}>
        <img
          src={conceptImg}
          className="fixed w-[120px] h-[30px] z-[50] top-[4.6%] left-[70.5%]"
        />
      </Link>
      <Link to="/about" onMouseEnter={() => setAboutUsImg("/images/Navbar/buttons/button_aboutus_hover.png")} onMouseLeave={() => setAboutUsImg("/images/Navbar/buttons/button_aboutus_normal.png")} onClick={play}>
        <img
          src={aboutUsImg}
          className="fixed w-[120px] h-[30px] z-[50] top-[4.6%] left-[77.5%]"
        />
      </Link>
      <Link onClick={play}>
        <div className="fixed top-[4.7%] left-[84.5%] z-[50]">
          <AudioPlayer />
        </div>
      </Link>
    </div>
  );
};

export default Nav;
