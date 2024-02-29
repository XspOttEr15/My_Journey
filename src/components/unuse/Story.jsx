import React, { useContext, useEffect } from "react";
import Slider from "react-slick";
import "flowbite";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/StorySelect.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DataContext } from "../../App";
const Story = () => {
  const { setCloseNavbar, setCloseButtonNavbar, setColseBgmusic } =
    useContext(DataContext);

  useEffect(() => {
    setCloseNavbar(false);
    setCloseButtonNavbar(false);
    setColseBgmusic(false);
  }, []);

  return (
    <>
      {/* <Navbar/> */}
      <div className="text-center sections ">
        <motion.div
          className="m-14 ssm:mt-20 ssm:m-0 ml-auto mr-auto text-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 1],
            repeat: Infinity,
          }}
        >
          <motion.span className="  text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-emerald-400 dark:bg-gray-900 bg-white  pl-12 pr-12 pt-2 pb-2 rounded-full dark:shadow-green-800/80 dark:shadow-lg dark:focus:ring-green-800">
            STORY SELECT
          </motion.span>
        </motion.div>

        <motion.div
          className="  ssm:w-3/4  md:w-[40rem] lg:w-[70%] md:inline-block  m-16 "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <Slider {...settings}>
              <div>
                <div className=" bg-gray-800 border border-emerald-800 rounded-lg shadow-lg dark:hover:border-rose-600  dark:bg-gray-800 dark:shadow-green-600/60 dark:shadow-lg dark:focus:ring-green-800 ssm:mb-10 dark:hover:shadow-xl dark:border dark:hover:shadow-rose-600/60">
                  <Link to={"/roomchapterone"}>
                    <motion.img
                      className="rounded-lg "
                      src="https://cdn.discordapp.com/attachments/761581562641907723/1179424154357878784/City2.png?ex=6579bb57&is=65674657&hm=d4b2044f2fb3f64b082f8395669e5321c6bacfd339282e14206c318106a702cf&"
                      alt=""
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 1],
                        repeat: Infinity,
                      }}
                    ></motion.img>
                  </Link>
                  <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                        CHAPTER 1
                      </h5>
                    <p className="mb-3 font-normal tex-center text-gray-700 dark:text-gray-400">
                      Deepsun1 ภาพแวดล้อมย่ำแย่มีแต่หมอกควัน มีฝุ่นจากอุตสาหกรรม
                      มีการก่อสร้างบ้านเมืองแบบยุคเก่า
                      ใช้พลังงานจากน้ำมันปิโตรเลียมใช้แท่นขุดเจาะน้ำมันแบบขวาน
                      และแบบเสาดิ่ง
                    </p>
                    <Link
                      to={"/roomchapterone"}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-emerald-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                    >
                      เข้าสู่ Chapter 1
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-md md:max-w-auto bg-gray-800 border border-emerald-800 rounded-lg shadow-lg dark:hover:border-rose-600  dark:bg-gray-800 dark:shadow-green-600/60 dark:shadow-lg dark:focus:ring-green-800 ssm:mb-10 dark:hover:shadow-xl dark:border dark:hover:shadow-rose-600/60">
                    <img
                      className="rounded-t-lg"
                      src="https://cdn.discordapp.com/attachments/777187401935618059/1179422846280269885/image.png?ex=6579ba1f&is=6567451f&hm=44e6783e24ed622fda2683c49b2c741c3ebda4a723ebdd67d02cc5e275b0ade8&"
                      alt=""
                    />
                  <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        CHAPTER 2
                      </h5>
                    <p className="mb-3 font-normal  text-gray-700 dark:text-gray-400">
                      Hydropolis2 สภาพแวดล้อม ถูกน้ำท่วมไม่สามารถอยู่อาศัยได้เนื่องจากเกิดเหตุการณ์เขื่อนแตกและระบบนิเวศพัง เคยเป็นเมืองที่สามารถผลิตพลังงานไฟฟ้าแบบสะอาดได้จำนวนมากแต่ถูกทำลาย
                    </p>
                    <Link
                      to={"/"}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-emerald-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                    >
                      เข้าสู่ Chapter 2
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="max-w-md md:max-w-auto bg-gray-800 border border-emerald-800 rounded-lg shadow-lg dark:hover:border-rose-600  dark:bg-gray-800 dark:shadow-green-600/60 dark:shadow-lg dark:focus:ring-green-800 ssm:mb-10 dark:hover:shadow-xl dark:border dark:hover:shadow-rose-600/60">
                
                  <img
                    className="rounded-t-lg"
                    src="https://cdn.discordapp.com/attachments/777187401935618059/1179422384743264347/image.png?ex=6579b9b1&is=656744b1&hm=e04a6bc0aef56007a0fa9443486db0664772a56b1a57b927e4d9125d611ef4ec&"
                    alt=""
                  />
                
                <div className="p-5">
                  
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      CHAPTER 3
                    </h5>
                 
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                  Solarwind3 สภาพแวดล้อม เกือบจะดีแต่มีฝุ่นควันจากชั้นล่างบนบังทัศนวิสัยถึงแม้จะมีการกรองอากาศไปบ้างแล้วเมืองนี้จะเริ่มมีการเพาะปลูกพืชพรรณ และใช้พลังงานจากลมเป็นหลัก
                  </p>
                  <p
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-emerald-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                  >
                    เข้าสู่ Chapter 3
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </p>
                </div>
              </div>

              <div className="max-w-md md:max-w-auto bg-gray-800 border border-emerald-800 rounded-lg shadow-lg dark:hover:border-rose-600  dark:bg-gray-800 dark:shadow-green-600/60 dark:shadow-lg dark:focus:ring-green-800 ssm:mb-10 dark:hover:shadow-xl dark:border dark:hover:shadow-rose-600/60">
                  <img
                    className="rounded-t-lg"
                    src="https://cdn.discordapp.com/attachments/777187401935618059/1179423981175058532/image.png?ex=6579bb2d&is=6567462d&hm=8343e6304b955c50f4600d818d36ecf57c50724b1fc51f3ce818e7edf9da297b&"
                    alt=""
                  />
                <div className="p-5">
                  
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      CHAPTER 4
                    </h5>
                 
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  PeaceFusion4 เป็นเมืองที่มีวิทยาการสูงที่สุด มีผู้คนหนาแน่นมีตึกสูงมากมายใช้พลังงานจากเตาปติกรเป็นหลัก ผสมผสานระหว่างธรรมชาติและเทคโนโลยี เป็นเมืองที่ทุกคนใฝ่ฝันอยากเข้ามาอยู่อาศัย
                  </p>
                  <p
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-emerald-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                  >
                    เข้าสู่ Chapter 4
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </motion.div>
      </div>
    </>
  );
};

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 976,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
  ],
};

export default Story;
