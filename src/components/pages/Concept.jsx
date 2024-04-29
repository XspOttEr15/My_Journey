import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DataContext } from "../../App";
import useSound from "use-sound";
import '../styles/Concept.css'


const Concept = () => {
  const { setCloseNavbar,setColseBgmusic, } = useContext(DataContext);
  const soundUrl = '/sound_effects/ButtonPush.mp3';
  const [play] = useSound(soundUrl);
  useEffect(() => {
    setCloseNavbar("showall");
    setColseBgmusic(false);
  },);
  return (
    <div className="w-full lg:h-screen  md:h-screen ">
    <div className="bgc">
      <motion.div className="  text-center lg:pt-[5.6rem] md:pt-[8%] " 
      animate={{ scale: [1, 1.1, 1] }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 1],
        repeat: Infinity,
      }}
      >
        <span className=" text-4xl font-extrabold leading-none tracking-tight   md:text-5xl lg:text-6xl text-emerald-400 bg-gray-900   pl-12 pr-12 pt-4 pb-2 rounded-full shadow-green-800/80 shadow-lg focus:ring-green-800 ">
          CONCEPT
        </span>
      </motion.div>

      <div className="  lg:flex lg:flex-row  md:flex  md:flex-row    gap-10 justify-center align-middle  lg:mt-16 md:mt-16   items-center  text-center">
        {/* // Card Layout 1*/}
        <motion.div className=" max-w-xs h-auto" 
        initial={{opacity:0, y:100}}
        animate={{ opacity:1 , y:0}}
        transition={{duration:0.5}}>
          <Link to={"/character"}>
            <motion.img
              className="rounded-3xl  shadow-lg shadow-emerald-800/80 border border-emerald-800 "
              src="/images/Concepts/lunar_half.png"
              alt="Character"
              whileHover={{scale: 1.1}}
              transition={{duration:0.5}}
              onClick={play}
            />
          </Link>
          <Link to={"/character"}>
            <button
              onClick={play}
              type="button"
              id="bbb"
              className="text-emerald-400  from-gray-900 via-gray-900 to-gray-900  bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-emerald-800   shadow-lg shadow-emerald-800/80 rounded-lg  px-12 py-5 text-center lg:m-5 mt-6  lg:text-3xl md:text-2xl font-bold inline-flex  items-center  sm:mx w-auto "
            >
              <span id="gg"></span>
              <span id="gg"></span>
              <span id="gg"></span>
              <span id="gg"></span>
              &nbsp;CHARACTER&nbsp;
            </button>
          </Link>
        </motion.div>


        {/* // Card Layout 2*/}

        <motion.div className="  max-w-xs h-auto" 
        initial={{opacity:0, y:100}}
        animate={{ opacity:1 , y:0}}
        transition={{duration:0.5}}>
        
        <Link to={"/maps"}>
          <motion.img
            className="rounded-3xl  shadow-lg shadow-emerald-800/80 border border-emerald-800 "
            src="/images/Concepts/map_half.png"
            alt="map"
            loading="eager"
            whileHover={{scale: 1.1}}
            transition={{duration:0.5}}
            onClick={play}
          />
        </Link>

        <Link to={"/maps"}>
          <button
            type="button"
            id="bbb"
            className="text-emerald-400  from-gray-900 via-gray-900 to-gray-900  bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-emerald-800   shadow-lg shadow-emerald-800/80 rounded-lg  px-24 py-5 text-center lg:m-5 mt-6  text-3xl font-bold inline-flex  items-center  sm:mx w-auto "
          >
             <span id="gg"></span>
              <span id="gg"></span>
              <span id="gg"></span>
              <span id="gg"></span>
            &nbsp;MAP&nbsp;
          </button>
        </Link>
        </motion.div>
      </div>
      </div>
      </div>


  );
};

export default Concept;
