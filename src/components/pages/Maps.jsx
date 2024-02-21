import React from "react";
import { Link } from "react-router-dom";


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

  return (
    <>
        <div className="sections">
          <div className="  xl:flex  lgg:inline-block ssm:inline-block gap-0 ">
            {/* // Card Layout 1*/}
            <div className=" lg:w-full xl:w-1/3  ssm:w-full lgg:w-full h-screen relative  ">
              <Link to={"/"}>
                <img
                  className="h-screen"
                  // onClick={scrollToStoryboard}
                  src="/images/Maps/chapter1.jpg"
                  alt=""
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center ">
                  <h1 class="text-6xl font-extrabold dark:text-white">
                  Deepsun1
                  </h1>
                </div>
              </Link>
            </div>

            {/* // Card Layout 2*/}

            <div className=" xl:w-1/3 ssm:w-full  relative   h-screen">
              <Link to={"/"}>
                <img
                  className="h-screen"
                  // onClick={scrollToChareacter}
                  src="/images/Maps/chapter2.jpg"
                  alt=""
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <h1 class="text-6xl font-extrabold dark:text-white">
                  Solarwind2
                  </h1>
                </div>
              </Link>
            </div>

            {/* // Card Layout 3*/}

            <div className=" xl:w-1/3 ssm:w-full  relative  h-screen">
              <Link to={"/"}>
                <img
                  className=" h-screen"
                  // onClick={scrollToCity}
                  src="/images/Maps/chapter3.jpg"
                  alt=""
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <h1 class="text-6xl font-extrabold dark:text-white">PeaceFusion3</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
</>
);
}
export default Maps;

