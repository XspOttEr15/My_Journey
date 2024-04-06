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
        <div className=" w-full h-screen">
          <div className="  lg:flex md:w-full  sm:inline-block gap-0 ">
            {/* // Card Layout 1*/}
            <div className=" md:w-full md:h-full  lg:w-1/3 ssm:w-full lgg:w-full lg:h-screen relative  ">
              <Link to={"/chapteronemap"}>
                <img
                  className="h-screen w-full object-cover"
                  // onClick={scrollToStoryboard}
                  src="https://ik.imagekit.io/vsfmz5htw/Maps/chapter1.jpg?updatedAt=1711183022133"
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

            <div className=" md:w-full md:h-full  lg:w-1/3 ssm:w-full lgg:w-full lg:h-screen relative">
              <Link to={"/home"}>
                <img
                  className="h-screen w-full object-cover"
                  // onClick={scrollToChareacter}
                  src="https://ik.imagekit.io/vsfmz5htw/Maps/chapter2.jpg?updatedAt=1711183023021"
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
            <div className=" md:w-full md:h-full  lg:w-1/3 ssm:w-full lgg:w-full lg:h-screen relative">
              <Link to={"/home"}>
                <img
                  className=" h-screen w-full object-cover"
                  // onClick={scrollToCity}
                  src="https://ik.imagekit.io/vsfmz5htw/Maps/chapter3.jpg?updatedAt=1711183023362"
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

