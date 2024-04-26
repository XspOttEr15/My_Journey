import React, { useContext, useEffect } from "react";
import "flowbite";
import "../styles/About.css";
import { motion } from "framer-motion";
import { DataContext } from "../../App";
const About = () => {
  const { setCloseNavbar, setColseBgmusic } = useContext(DataContext);
  useEffect(() => {
    setCloseNavbar("showall");
    setColseBgmusic(false);
  }, []);
  return (
    <>
      <div className="w-full lg:h-screen md:h-auto relative">
        <div className="bg1"></div>
        <div className="sections md:h-auto overflow-y-hidden overflow-x-hidden text-center lg:pt-20 ">
          <motion.div
            className="lg:pt-[0rem] md:pt-[10rem] "
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 1],
              repeat: Infinity,
            }}
          >
            <motion.span className="text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-emerald-400 bg-gray-900  pl-12 pr-12  pt-4 pb-2 rounded-full shadow-green-800/80 shadow-lg focus:ring-green-800">
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
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                duration: 1.5,
              }}
            >
              <motion.img
                className="rounded-3xl  shadow-lg shadow-emerald-800/80 border border-emerald-800 w-full h-[480px] "
                src="/images/AboutUs/left_1.png"
                alt=""
              />
              <motion.button
                type="button"
                className="text-emerald-400  bg-gray-900    ring-4 outline-none  ring-emerald-800 shadow-lg   shadow-emerald-800/80 rounded-lg  px-10 py-3 text-center m-5 mt-6  text-lg font-bold  items-center  md:w-auto lg:w-auto "
              >
                <div className="text-xl">63080500230</div>
                <div className="text-xl">นายนัทธพงศ์ เพ็ชรพิพัฒน์</div>
              </motion.button>
            </motion.div>

            {/* // Card Layout 2*/}

            <motion.div
              className=" max-w-sm max-h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                duration: 1.5,
              }}
            >
              <motion.img
                className="rounded-3xl  shadow-lg shadow-emerald-800/80 border border-emerald-800 w-full h-[480px]  "
                src="/images/AboutUs/midle_2.png"
                alt=""
              />
              <motion.button
                type="button"
                className="text-emerald-400  bg-gray-900  ring-4 focus:outline-none  ring-emerald-800 shadow-lg   shadow-emerald-800/80 rounded-lg  px-14 py-3 text-center m-5 mt-6  text-lg font-bold  items-center  md:w-auto "
              >
                <div className="text-xl">63080500269</div>
                <div className="text-xl">นายนรุตม์ สุวรรณ</div>
              </motion.button>
            </motion.div>

            {/* // Card Layout 3*/}

            <motion.div
              className=" max-w-sm h-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                duration: 1.5,
              }}
            >
              <motion.img
                className="rounded-3xl  shadow-lg shadow-emerald-800/80 border border-emerald-800 w-full h-[480px]  "
                src="/images/AboutUs/Ri_3.png"
                alt=""
              />
              <motion.button
                type="button"
                className="text-emerald-400  bg-gray-900   bg-gradient-to-br ring-4 outline-none  ring-emerald-800 shadow-lg   shadow-emerald-800/80 rounded-lg  px-14 py-3 text-center m-5 mt-6  text-lg font-bold  items-center  md:w-auto  "
              >
                <div className="text-xl">63080500242</div>
                <div className="text-xl">นายภูบดินทร์ ดิศพัฒน์</div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full lg:h-screen md:h-auto sections relative">
        <div className="bg1"></div>
        <div className=" lg:pt-[100px] md:pt-0 text-center md:p-8 lg:mt-0">
          <div className="md:flex md:flex-col lg:flex lg:flex-row lg:m-10 md:p-14 md:pt-12  lg:pt-20   ">
            <motion.div
              className=" lg:w-1/2 md:w-full  md:max-w-none bg-gray-800 rounded-3xl p-3 shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-800/80 border border-emerald-800 lg:ml-8  md:ml-0"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{
                type: "spring",
                duration: 1.5,
                stiffness: 50,
                damping: 10,
              }}
            >
              <motion.img
                className="rounded-3xl h-full w-full object-cover  shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-800/80"
                src="/images/AboutUs/renderer1.png"
                alt=""
              />
            </motion.div>

            <motion.div
              className="lg:w-1/2 lg:flex lg:flex-col  md:w-full  justify-center  items-center p-10"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{
                type: "spring",
                duration: 1.5,
                stiffness: 50,
                damping: 10,
              }}
            >
              <h1 className="lg:text-5xl md:text-4xl font-extrabold text-white m-8">
                About Project
              </h1>
              <p className=" md:text-base lg:text-xl lg:text-center md:text-justify">
                Website The Journey
                เกิดจากแนวคิดวิธีการนำเสนอสื่อรูปแบบการประยุกต์
                จากการใช้สื่อที่มีการผสมผสานกันระหว่าง เว็บไซต์ และ แอนิมชัน
                จะสามารถทำให้ผู้ชมมีการปฏิสัมพันธ์กับตัวสื่อที่ใช้
                และยังสามารถเพิ่มรูปแบบการนำเสนอที่นอกเหนือจาการใช้เว็บไซต์แบบปกติให้เปลี่ยนเป็น
                เว็บไซต์แบบสามมิติ โดยการใช้ Three.js
                เพื่อใช้แสดงผลวัตถุสามมิติในเว็บไซต์ และใช้ React
                เพื่อช่วยให้เว็บไซต์สามารถโหลดข้อมูลได้อย่างต่อเนื่องและรวดเร็ว
                เมื่อผู้ชมสามารถดูวัตถุสามมิติในรูปแบบของเว็บไซต์คาดว่าจะสามารถช่วยให้เกิดความเข้าใจในเนื้อหาและ
                เข้าใจถึงรูปร่างของฉาก และตัวละครมากยิ่งขึ้น
                ด้วยวิธีการดังกล่าวจะสามารถทำให้ควบคุมพื้นที่ในการนำเสนอให้เป็นเปรียบเสมือนกับโลกจำลองของเนื้อเรื่องภายในเว็บไซต์ได้อีกด้วย
              </p>
            </motion.div>
          </div>
        </div>
      </div>


      <footer class=" rounded-lg shadow bg-gray-900 m-0 sections">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://media.discordapp.net/attachments/761581562641907723/1233350897623629885/KMUTTFIET-Logo-Eng.png?ex=662cc708&is=662b7588&hm=e8c407c64030ff370db3c443ba8ad36ac1ee512401bdb8bf9c5d6126e25ceaaf&=&format=webp&quality=lossless&width=1440&height=480"
                class=" w-[250px]"
                alt="Flowbite Logo"
              />
              
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Story
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                Concept
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                About Us
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm  sm:text-center text-white">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
            My Journey™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default About;
