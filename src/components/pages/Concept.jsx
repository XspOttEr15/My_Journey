import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DataContext } from "../../App";
import useSound from "use-sound";


const Concept = () => {
  const { setCloseNavbar, setCloseButtonNavbar,setColseBgmusic,setIsNavbarFixed } = useContext(DataContext);
  const soundUrl = '/sound_effects/ButtonPush.mp3';
  const [play] = useSound(soundUrl);
  useEffect(() => {
    setCloseNavbar(false);
    setCloseButtonNavbar(false);
    setColseBgmusic(false);
    setIsNavbarFixed(false);
  },);
  return (
    <>
      <motion.div className="m-14 ssm:mt-20 ssm:m-0 text-center" 
      animate={{ scale: [1, 1.1, 1] }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 1],
        repeat: Infinity,
      }}
      >
        <span className=" text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-emerald-400 dark:bg-gray-900 bg-white  pl-12 pr-12 pt-2 pb-2 rounded-full dark:shadow-green-800/80 dark:shadow-lg dark:focus:ring-green-800">
          CONCEPT
        </span>
      </motion.div>

      <div className=" sections lg:flex ssm:inline-block gap-10 justify-center align-middle m-10 mt-16 items-center  text-center">
        {/* // Card Layout 1*/}
        <motion.div className=" max-w-sm h-auto" 
        initial={{opacity:0, y:100}}
        animate={{ opacity:1 , y:0}}
        transition={{duration:0.5}}>
          <Link to={"/character"}>
            <motion.img
              className="rounded-3xl shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-800/80 border border-emerald-800 "
              src="/images/Concepts/character.png"
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
              className="text-emerald-400  from-gray-900 via-gray-900 to-gray-900  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-emerald-800 shadow-lg shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-800/80 rounded-lg  px-12 py-5 text-center m-5 mt-6  text-3xl font-bold inline-flex  items-center  sm:mx w-auto "
            >
              &nbsp;CHARACTER&nbsp;
            </button>
          </Link>
        </motion.div>

        {/* // Card Layout 2*/}

        {/* <motion.div className=" sections max-w-sm h-auto"
        initial={{opacity:0, y:100}}
        animate={{ opacity:1 , y:0}}
        transition={{duration:0.5}}
        >
        <Link to={"/artwork"}>
          <motion.img
            className="rounded-3xl shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-800/80 border border-emerald-800 "
            src="https://cdn.discordapp.com/attachments/777187401935618059/1179422384743264347/image.png?ex=6579b9b1&is=656744b1&hm=e04a6bc0aef56007a0fa9443486db0664772a56b1a57b927e4d9125d611ef4ec&"
            alt=""
            whileHover={{scale: 1.1}}
            transition={{duration:0.5}}
          />
        </Link>

        <Link to={"/artwork"}>
          <button
            type="button"
            className="text-emerald-400 bg-gradient-to-r  from-gray-900 via-gray-900 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-emerald-800 shadow-lg shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-800/80 rounded-lg px-12 py-5 text-center m-5 mt-6  text-3xl font-bold inline-flex  items-center  sm:mx w-auto "
          >
            &nbsp;ART WORK&nbsp;
          </button>
        </Link>
        </motion.div> */}

        {/* // Card Layout 3*/}

        <motion.div className=" sections max-w-sm h-auto" 
        initial={{opacity:0, y:100}}
        animate={{ opacity:1 , y:0}}
        transition={{duration:0.5}}>
        
        <Link to={"/map"}>
          <motion.img
            className="rounded-3xl shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-800/80 border border-emerald-800 "
            src="/images/Concepts/map.png"
            alt="map"
            whileHover={{scale: 1.1}}
            transition={{duration:0.5}}
            onClick={play}
          />
        </Link>

        <Link to={"/"}>
          <button
            type="button"
            className="text-emerald-400 bg-gradient-to-r  from-gray-900 via-gray-900 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-emerald-800 shadow-lg shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-800/80 rounded-lg  px-20 py-5 text-center m-5 mt-6  text-3xl font-bold inline-flex  items-center  sm:mx w-auto "
          >
            &nbsp;MAP&nbsp;
          </button>
        </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Concept;
