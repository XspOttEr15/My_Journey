import React, { useContext, useEffect } from "react";
import "flowbite";
import "../styles/About.css";
import { motion } from "framer-motion";
import { DataContext } from "../../App";
const About = () => {
  const { setCloseNavbar, setCloseButtonNavbar,setColseBgmusic,setIsNavbarFixed} = useContext(DataContext);
  useEffect(() => {
    setCloseNavbar(false);
    setCloseButtonNavbar(false);
    setColseBgmusic(false);
    setIsNavbarFixed(false);
  }, []);
  return (
    <>
      <div className="sections h-screen md:h-auto overflow-y-hidden overflow-x-hidden text-center lg:pt-20">
      <motion.div
        className="lg:mt-[0rem] md:mt-[10rem] "
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 1],
          repeat: Infinity,
        }}
      >
        <motion.span className="text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-emerald-400 bg-gray-900  pl-12 pr-12 pt-2 pb-2 rounded-full shadow-green-800/80 shadow-lg focus:ring-green-800">
          ABOUT US
        </motion.span>
      </motion.div>

      <div className=" lg:flex md:inline-block gap-8 justify-center align-middle m-10 mt-[8rem] items-center ">
        {/* // Card Layout 1*/}
        <motion.div
          className=" max-w-sm h-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 1 }}
          whileHover={{scale: 1.1, }}
          transition={{
            type: "spring",
            duration: 1.5,
          }}
        >
          <motion.img
            className="rounded-3xl  shadow-lg shadow-emerald-800/80 border border-emerald-800 w-full h-[480px] "
            src="https://static.vecteezy.com/system/resources/thumbnails/006/892/622/small_2x/discord-logo-icons-editorial-collection-free-vector.jpg"
            alt=""
          />
          <motion.button
            type="button"
            className="text-emerald-400  from-gray-900 via-gray-900 to-gray-900  hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-emerald-800 shadow-lg   shadow-emerald-800/80 rounded-lg  px-10 py-3 text-center m-5 mt-6  text-lg font-bold  items-center  md:w-auto lg:w-auto "
          >
            <div className="text-xl">
            63080500230
            </div>
            <div className="text-xl">
              นายนัทธพงศ์ เพ็ชรพิพัฒน์
            </div>
          </motion.button>
        </motion.div>

        {/* // Card Layout 2*/}

        <motion.div
          className=" max-w-sm max-h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0}}
          viewport={{ once: false, amount: 1 }}
          whileHover={{scale: 1.1}}
          transition={{
            type: "spring",
            duration: 1.5,
          }}
        >
          <motion.img
            className="rounded-3xl  shadow-lg shadow-emerald-800/80 border border-emerald-800 w-full h-[480px]  "
            src="https://static.vecteezy.com/system/resources/thumbnails/006/892/622/small_2x/discord-logo-icons-editorial-collection-free-vector.jpg"
            alt=""
          />
          <motion.button
            type="button"
            className="text-emerald-400  from-gray-900 via-gray-900 to-gray-900  hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-emerald-800 shadow-lg   shadow-emerald-800/80 rounded-lg  px-14 py-3 text-center m-5 mt-6  text-lg font-bold  items-center  md:w-auto "
          >
            <div className="text-xl">
            63080500242
            </div>
            <div className="text-xl">
              นายภูบดินทร์ ดิศพัฒน์
            </div>
          </motion.button>
        </motion.div>

        {/* // Card Layout 3*/}

        <motion.div
          className=" max-w-sm h-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0,  }}
          viewport={{ once: true, amount: 1 }}
          whileHover={{scale: 1.1}}
          transition={{
            type: "spring",
            duration: 1.5,
          }}
        >
          <motion.img
            className="rounded-3xl  shadow-lg shadow-emerald-800/80 border border-emerald-800 w-full h-[480px]  "
            src="https://static.vecteezy.com/system/resources/thumbnails/006/892/622/small_2x/discord-logo-icons-editorial-collection-free-vector.jpg"
            alt=""
          />
          <motion.button
            type="button"
            className="text-emerald-400  from-gray-900 via-gray-900 to-gray-900  hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-emerald-800 shadow-lg   shadow-emerald-800/80 rounded-lg  px-14 py-3 text-center m-5 mt-6  text-lg font-bold  items-center  md:w-auto  "
          >
            <div className="text-xl">
            63080500269
            </div>
            <div className="text-xl">
              นายนรุตม์ สุวรรณ
            </div>
          </motion.button>
        </motion.div>
      </div>
      </div>


      <div className="sections lg:h-screen md:h-auto  lg:pt-[100px] md:pt-0 text-center md:m-20">

      <div className="md:flex md:flex-col lg:flex lg:flex-row lg:m-10   ">
        <motion.div className=" lg:w-1/2 md:w-full  md:max-w-none bg-gray-800 rounded-3xl p-3 shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-800/80 border border-emerald-800 lg:ml-8  md:ml-0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0,  }}
        viewport={{ once: false  }}
        transition={{
          type: "spring",
          duration: 1.5,
          stiffness: 50,
          damping: 10,
    
        }}
        >
          <motion.img
            className="rounded-3xl h-full w-full object-cover  shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-800/80"
            src="https://images.unsplash.com/photo-1701861970903-7c4312a0b807?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </motion.div>

        <motion.div className="lg:w-1/2 lg:flex lg:flex-col  md:w-full  justify-center  items-center p-10" 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0,  }}
        viewport={{ once: false  }}
        transition={{
          type: "spring",
          duration: 1.5,
          stiffness: 50,
          damping: 10,
        }}
        >
          <h1 className=" lg:text-5xl md:text-4xl font-extrabold text-white m-8">
            About Project
          </h1>
          <p className="text-sm lg:text-base md:text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. 
          </p>
        </motion.div>
      </div>
      </div>


      <div className="sections lg:h-screen md:h-screen text-center">
      <motion.h1 className="text-6xl font-extrabold text-white m-12 pt-24" 
        initial={{ opacity: 0, x: -500 }}
        whileInView={{ opacity: 1, x: 0,  }}
        viewport={{ once: false }}
        transition={{
          type: "spring",
          duration: 1.5,
          stiffness: 50,
          damping: 10,
      
        }}>
          Contact
        </motion.h1>
      <motion.div className="mx-20 " >
        
         <motion.div className="   w-full bg-gray-800 shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-800/80 border border-emerald-800 rounded-3xl p-3 "
        initial={{ opacity: 0, x: 500 }}
        whileInView={{ opacity: 1, x: 0,  }}
        viewport={{ once: false }}
        transition={{
          type: "spring",
          duration: 1.5,
          stiffness: 50,
          damping: 10,
        
        }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62033.71264054248!2d100.43052483124997!3d13.6512522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a251bb6b0cf1%3A0xf656e94ff13324ad!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4Lij4Liw4LiI4Lit4Lih4LmA4LiB4Lil4LmJ4Liy4LiY4LiZ4Lia4Li44Lij4Li1!5e0!3m2!1sth!2sth!4v1702623863437!5m2!1sth!2sth"
            width="100%"
            height="600"
            style={{ border: "0", filter: "hue-rotate(180deg) invert(99%) " }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
            className="rounded-3xl md:h-[500px]"
          ></iframe>
        </motion.div>
      </motion.div>
      </div>
    </>
  );
};

export default About;
