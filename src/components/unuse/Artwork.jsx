import React, { useEffect, useState } from "react";
import "../styles/Artwork.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";


const Artwork = () => {
  // สร้างฟังก์ชันที่จะเลื่อนไปยัง ID storyboard
  const scrollToStoryboard = () => {
    const storyboardElement = document.getElementById("storyboard");
    if (storyboardElement) {
      storyboardElement.scrollIntoView({ behavior: "smooth" }); // เลื่อนไปยัง storyboard ด้วยการใช้ scrollIntoView
    }
  };
  const scrollToChareacter = () => {
    const chareacterElement = document.getElementById("chareacter");
    if (chareacterElement) {
      chareacterElement.scrollIntoView({ behavior: "smooth" }); // เลื่อนไปยัง storyboard ด้วยการใช้ scrollIntoView
    }
  };

  const scrollToCity = () => {
    const cityElement = document.getElementById("city");
    if (cityElement) {
      cityElement.scrollIntoView({ behavior: "smooth" }); // เลื่อนไปยัง storyboard ด้วยการใช้ scrollIntoView
    }
  };

  const [dialogue, setDialogue] = useState([
    {
      speaker: "-- Deepsun1 --",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=65def9da&is=65cc84da&hm=7d0b91d86c35a45b645a6bd16480f52e407b97a054ebb806b979ed4df107ca17&",
    },
    {
      speaker: "-- Solarwind2 --",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1206976077528834109/chapter4.jpg?ex=65ddf711&is=65cb8211&hm=b20430d7674064ed8588133b1d4300450e3827af0654d5ca4eaa234dcb612fee&",
    },
    {
      speaker: "-- PeaceFusion3 --",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1206976077038231562/chapter5_1.jpg?ex=65ddf711&is=65cb8211&hm=2d08b2d99aefbf042bb90c1a2ac36ab2964e0936476e2d9aacbacdc09609d8ec&",
    },
    // Add more dialogue objects as needed
  ]);
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const handleNext = () => {
    if (currentDialogueIndex < dialogue.length - 1) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
      // Handle choices or character changes based on the dialogue progress
    } else {
      // End of dialogue
    }
  };

  const handleBack = () => {
    if (currentDialogueIndex > 0) {
      setCurrentDialogueIndex(currentDialogueIndex - 1);
      // Handle choices or character changes based on the dialogue progress
    } else {
      // End of dialogue
    }
  };


  return (
    <>
        <div className="sections">
          <div className="  xl:flex  lgg:inline-block ssm:inline-block gap-0 ">
            {/* // Card Layout 1*/}
            <div className=" lg:w-full xl:w-1/3  ssm:w-full lgg:w-full h-screen relative cursor-pointer filter grayscale hover:grayscale-0   ">
              <Link to={"#storyboard"}>
                <img
                  className="cursor-pointer filter grayscale hover:grayscale-0 h-screen"
                  onClick={scrollToStoryboard}
                  src="https://cdn.discordapp.com/attachments/761581562641907723/1179424154357878784/City2.png?ex=658c3057&is=6579bb57&hm=42bc9eae722475692188915542e5be825688e2aa5efe7c0993c1bbbce50bc2df&"
                  alt=""
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center ">
                  <h1 class="text-6xl font-extrabold dark:text-white">
                    STORY BROAD
                  </h1>
                </div>
              </Link>
            </div>

            {/* // Card Layout 2*/}

            <div className=" xl:w-1/3 ssm:w-full  relative cursor-pointer filter grayscale hover:grayscale-0 h-screen">
              <Link to={"#chareacter"}>
                <img
                  className="cursor-pointer filter grayscale hover:grayscale-0 h-screen"
                  onClick={scrollToChareacter}
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1179422846280269885/image.png?ex=658c2f1f&is=6579ba1f&hm=ce9f3e7ad1e6f0b0f83796af6c5f2fae9c92b4a4fe30d7962d7e14c7645d3bf8&"
                  alt=""
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <h1 class="text-6xl font-extrabold dark:text-white">
                    CHARACTER
                  </h1>
                </div>
              </Link>
            </div>

            {/* // Card Layout 3*/}

            <div className=" xl:w-1/3 ssm:w-full  relative cursor-pointer filter grayscale hover:grayscale-0 h-screen">
              <Link to={"#city"}>
                <img
                  className="cursor-pointer filter grayscale hover:grayscale-0 h-screen"
                  onClick={scrollToCity}
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1179422384743264347/image.png?ex=6579b9b1&is=656744b1&hm=e04a6bc0aef56007a0fa9443486db0664772a56b1a57b927e4d9125d611ef4ec&"
                  alt=""
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <h1 class="text-6xl font-extrabold dark:text-white">CITY</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="sections mx-20 my-20 text-center h-screen pt-[1px]">
          {/* Story Board */}

          <div
            id="storyboard"
            className=" bg-gray-800 rounded-xl  xl:m-auto xl:max-w-screen-3xl m-auto ssm:m-5 p-1 xl:mt-[62px] xl:mb-32 relative shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-800/80 border border-emerald-800"
          >
            <div className="m-6">
              <span className=" text-7xl font-extrabold ">Story Broad</span>
            </div>
            
            <Slider {...settings}>
              <div className=" px-3 py-1"> 
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1178719484102586419/image.png?ex=6592da90&is=65806590&hm=391cb5e1ea646f3ed66686ed4433a99b92003a0547fb89b75158414903a8e4bf&"
                  className=" w-full  rounded-2xl"
                />
              </div>
              <div className=" px-3 py-1 fade">

                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1178719484102586419/image.png?ex=6592da90&is=65806590&hm=391cb5e1ea646f3ed66686ed4433a99b92003a0547fb89b75158414903a8e4bf&"
                  className="rounded-2xl"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1178719484102586419/image.png?ex=6592da90&is=65806590&hm=391cb5e1ea646f3ed66686ed4433a99b92003a0547fb89b75158414903a8e4bf&"
                  className="rounded-2xl "
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1178719484102586419/image.png?ex=6592da90&is=65806590&hm=391cb5e1ea646f3ed66686ed4433a99b92003a0547fb89b75158414903a8e4bf&"
                  className="rounded-2xl"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1178719484102586419/image.png?ex=6592da90&is=65806590&hm=391cb5e1ea646f3ed66686ed4433a99b92003a0547fb89b75158414903a8e4bf&"
                  className="rounded-2xl"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1178719484102586419/image.png?ex=6592da90&is=65806590&hm=391cb5e1ea646f3ed66686ed4433a99b92003a0547fb89b75158414903a8e4bf&"
                  className="rounded-2xl"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1178719484102586419/image.png?ex=6592da90&is=65806590&hm=391cb5e1ea646f3ed66686ed4433a99b92003a0547fb89b75158414903a8e4bf&"
                  className="rounded-2xl"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1178719484102586419/image.png?ex=6592da90&is=65806590&hm=391cb5e1ea646f3ed66686ed4433a99b92003a0547fb89b75158414903a8e4bf&"
                  className="rounded-2xl"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1178719484102586419/image.png?ex=6592da90&is=65806590&hm=391cb5e1ea646f3ed66686ed4433a99b92003a0547fb89b75158414903a8e4bf&"
                  className="rounded-2xl"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1178719484102586419/image.png?ex=6592da90&is=65806590&hm=391cb5e1ea646f3ed66686ed4433a99b92003a0547fb89b75158414903a8e4bf&"
                  className="rounded-2xl"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1178719484102586419/image.png?ex=6592da90&is=65806590&hm=391cb5e1ea646f3ed66686ed4433a99b92003a0547fb89b75158414903a8e4bf&"
                  className="rounded-2xl"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1178719484102586419/image.png?ex=6592da90&is=65806590&hm=391cb5e1ea646f3ed66686ed4433a99b92003a0547fb89b75158414903a8e4bf&"
                  className="rounded-2xl"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1178719484102586419/image.png?ex=6592da90&is=65806590&hm=391cb5e1ea646f3ed66686ed4433a99b92003a0547fb89b75158414903a8e4bf&"
                  className="rounded-2xl"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1178719484102586419/image.png?ex=6592da90&is=65806590&hm=391cb5e1ea646f3ed66686ed4433a99b92003a0547fb89b75158414903a8e4bf&"
                  className="rounded-2xl"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1178719484102586419/image.png?ex=6592da90&is=65806590&hm=391cb5e1ea646f3ed66686ed4433a99b92003a0547fb89b75158414903a8e4bf&"
                  className="rounded-2xl"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1178719484102586419/image.png?ex=6592da90&is=65806590&hm=391cb5e1ea646f3ed66686ed4433a99b92003a0547fb89b75158414903a8e4bf&"
                  className="rounded-2xl"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1178719484102586419/image.png?ex=6592da90&is=65806590&hm=391cb5e1ea646f3ed66686ed4433a99b92003a0547fb89b75158414903a8e4bf&"
                  className="rounded-2xl"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1178719484102586419/image.png?ex=6592da90&is=65806590&hm=391cb5e1ea646f3ed66686ed4433a99b92003a0547fb89b75158414903a8e4bf&"
                  className="rounded-2xl"
                />
              </div>
              
            </Slider>
          </div>
        </div>

        <div className="sections  text-center mx-20 my-20 pt-14">
          {/* Chareacter */}

          <div
            id="chareacter"
            className=" bg-gray-800 rounded-xl  max-w-screen-4xl xl:m-auto ssm:m-5 p-1 mt-16 mb-16 relative shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-800/80 border border-emerald-800"
          >
            <div className="m-6 ">
              <span className=" sm:text-7xl ssm:text-4xl  font-extrabold ">
                Chareacter
              </span>
            </div>
            <Slider {...settings2}>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1179422758199885894/image.png?ex=658c2f0a&is=6579ba0a&hm=212feca414030ffe6fd48053cb4572ce7d7833053dfbb57057672f535ae37386&"
                  className="rounded-2xl bg-slate-400 w-full h-full"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1179422758199885894/image.png?ex=658c2f0a&is=6579ba0a&hm=212feca414030ffe6fd48053cb4572ce7d7833053dfbb57057672f535ae37386&"
                  className="rounded-2xl bg-slate-400 w-full h-full"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1179422758199885894/image.png?ex=658c2f0a&is=6579ba0a&hm=212feca414030ffe6fd48053cb4572ce7d7833053dfbb57057672f535ae37386&"
                  className="rounded-2xl bg-slate-400 w-full h-full "
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1179422758199885894/image.png?ex=658c2f0a&is=6579ba0a&hm=212feca414030ffe6fd48053cb4572ce7d7833053dfbb57057672f535ae37386&"
                  className="rounded-2xl bg-slate-400 w-full h-full"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1179422758199885894/image.png?ex=658c2f0a&is=6579ba0a&hm=212feca414030ffe6fd48053cb4572ce7d7833053dfbb57057672f535ae37386&"
                  className="rounded-2xl bg-slate-400 w-full h-full"
                />
              </div>
              <div className=" px-3 py-1">
                <img
                  src="https://cdn.discordapp.com/attachments/777187401935618059/1179422758199885894/image.png?ex=658c2f0a&is=6579ba0a&hm=212feca414030ffe6fd48053cb4572ce7d7833053dfbb57057672f535ae37386&"
                  className="rounded-2xl bg-slate-400 w-full h-full "
                />
              </div>
            </Slider>
          </div>
        </div>

        <div className="sections m-20 text-center pt-5">
          {/* city */}

          <div
            id="city"
            className=" xl:flex xl:m-10  xl:mt-32 xl:mb-32 xl:mx-auto m-5 bg-gray-800 rounded-xl  shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-800/80 border border-emerald-800 justify-center  items-center  "
          >
            <div className="xl:max-w-screen-[1650px] h-[650px] xl:w-1/2">
              <div className="h-96 ssm:h-96 xl:h-80 2xl:h-full relative  ">
                <svg
                  className="w-12 h-12 text-gray-800 dark:text-white absolute top-[50%] bottom-[50%] left-5 opacity-60  hover:scale-150 hover:opacity-100"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 10 16"
                  onClick={handleBack}
                >
                  <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
                </svg>

                <svg
                  className="w-12 h-12 text-gray-800 dark:text-white absolute top-[50%] bottom-[50%] right-5 opacity-60  hover:scale-150 hover:opacity-100"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 10 16"
                  onClick={handleNext}
                >
                  <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
                </svg>

                <img
                  src={dialogue[currentDialogueIndex].bg}
                  alt="..."
                  className="rounded-xl h-full w-full shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-800/80 rounded-e-none"
                />
              </div>
            </div>

            <div className="lg:flex-1 lg:m-0 ">
              <h1 className="text-4xl lg:text-5xl font-extrabold dark:text-white m-5 justify-center items-center align-middle">
                {dialogue[currentDialogueIndex].speaker}
              </h1>
              <p className="text-sm lg:text-base p-6 ">
                {dialogue[currentDialogueIndex].text}
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "20px",
  slidesToShow: 1,
  speed: 500,
  rows: 2,
  slidesPerRow: 3,
  responsive: [
    {
      breakpoint: 375, // iPhone width
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: false,
        slidesPerRow: 1,
        rows: 1,
      },
    },
    {
      breakpoint: 480, // Small devices width (like some Android phones)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        slidesPerRow: 1,
        rows: 1,
      },
    },
    {
      breakpoint: 768, // iPad portrait mode
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        slidesPerRow: 1,
        infinite: false,
        dots: false,
        rows: 1,
      },
    },
    {
      breakpoint: 976, // iPad Pro portrait mode and iPad Mini
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024, // iPad Pro portrait mode and iPad Mini
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1440, // Typical large desktop, adjust as needed
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

const settings2 = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "20px",
  slidesToShow: 1,
  speed: 500,
  rows: 1,
  slidesPerRow: 4,
  responsive: [
    {
      breakpoint: 375, // iPhone width
      settings: {
        slidesToShow: 1,
        slidesPerRow: 1,
        dots: false,
        infinite: false,
      },
    },
    {
      breakpoint: 480, // Small devices width (like some Android phones)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesPerRow: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 768, // iPad portrait mode
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesPerRow: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 976, // iPad Pro portrait mode and iPad Mini
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024, // iPad Pro portrait mode and iPad Mini
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1440, // Typical large desktop, adjust as needed
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

export default Artwork;
