import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import { useEffect } from "react";
import '../styles/map.scss'


export const Maps = () => {
  // สร้างฟังก์ชันที่จะเลื่อนไปยัง ID storyboard
  // const scrollToStoryboard = () => {
  //   const storyboardElement = document.getElementById("storyboard");
  //   if (storyboardElement) {
  //     storyboardElement.scrollIntoView({ behavior: "smooth" }); // เลื่อนไปยัง storyboard ด้วยการใช้ scrollIntoView
  //   }
  // };
  // const scrollToChareacter = () => {
  //   const chareacterElement = document.getElementById("chareacter");
  //   if (chareacterElement) {
  //     chareacterElement.scrollIntoView({ behavior: "smooth" }); // เลื่อนไปยัง storyboard ด้วยการใช้ scrollIntoView
  //   }
  // };

  // const scrollToCity = () => {
  //   const cityElement = document.getElementById("city");
  //   if (cityElement) {
  //     cityElement.scrollIntoView({ behavior: "smooth" }); // เลื่อนไปยัง storyboard ด้วยการใช้ scrollIntoView
  //   }
  // };

  const { setColseBgmusic,setCloseNavbar,setIsLocked } = useContext(DataContext);
    useEffect(() => {
      setColseBgmusic(false);
      setCloseNavbar("showall");
      setIsLocked(true);
    }, []);

  return (
    <>
        <div className=" w-full h-full">
          <div className="  lg:flex md:flex sm:inline-block gap-0 ">
            {/* // Card Layout 1*/}
            <div className=" md:w-1/3   lg:w-1/3 ssm:w-full lgg:w-full lg:h-screen relative  ">
          
              <Link to={"/chapteronemap"}>
              <div className="overlayshadows"></div>
                <img
                  className="h-screen w-full object-cover"
                  // onClick={scrollToStoryboard}
                  src="https://ik.imagekit.io/vsfmz5htw/Maps/chapter1.jpg?updatedAt=1711183022133"
                  alt=""
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center pointer-events-none ">
                  <h1 id="divv" class="lg:text-6xl md:text-4xl font-extrabold dark:text-white">
                  Deepsun1
                  </h1>
                </div>
              </Link>
            </div>

            {/* // Card Layout 2*/}

            <div className=" md:w-1/3 md:h-full  lg:w-1/3 ssm:w-full lgg:w-full lg:h-screen relative">
            
              <Link to={"/chaptertwomap"}>
              <div className="overlayshadows"></div>
                <img
                  className="h-screen w-full object-cover"
                  // onClick={scrollToChareacter}
                  src="https://ik.imagekit.io/vsfmz5htw/Maps/chapter2.jpg?updatedAt=1711183023021"
                  alt=""
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center pointer-events-none">
                  <h1 id="divv" class="lg:text-6xl md:text-4xl font-extrabold dark:text-white">
                  Solarwind2
                  </h1>
                </div>
              </Link>
            </div>

            {/* // Card Layout 3*/}
            <div className=" md:w-1/3 md:h-full   lg:w-1/3 ssm:w-full lgg:w-full lg:h-screen relative">
              <Link to={"/chapterthreemap"}>
              <div className="overlayshadows"></div>
                <img
                  className=" h-screen w-full object-cover"
                  // onClick={scrollToCity}
                  src="https://ik.imagekit.io/vsfmz5htw/Maps/chapter3.jpg?updatedAt=1711183023362"
                  alt=""
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center pointer-events-none">

                  <h1 id="divv" class="text-6xl font-extrabold dark:text-white lg:text-6xl md:text-4xl">PeaceFusion3</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
</>
);
}
export default Maps;

