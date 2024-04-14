import React, { useState, useEffect, useRef, useContext } from "react";
import { Button, Modal } from "flowbite-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/StorySelect.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import '../styles/Character.css'
import {
  CharacterCardOne,
  CharacterCardTwo,
  CharacterCardThree,
  CharacterCardFour,
  Characterdisplay,
  Characterdisplaytwo,
  Characterdisplaythree,
  Characterdisplayfour,
} from "../Canvas/CharacterCard";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import { DataContext } from "../../App";

const Character = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const cardRef = useRef(null);
  const { setColseBgmusic,setCloseNavbar,setIsLocked } = useContext(DataContext);
    useEffect(() => {
      setColseBgmusic(false);
      setCloseNavbar("showall");
      setIsLocked(true);
    }, []);

  const handleCardClick = (cardNumber) => {
    if (selectedCard === cardNumber && cardRef.current) {
      cardRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
    } else {
      setSelectedCard(cardNumber);
    }
  };

  const handleNextClick = () => {
    setSelectedCard((prevIndex) => prevIndex + 1);
  };
  const handleBackClick = () => {
    setSelectedCard((prevIndex) => prevIndex - 1);
  };

  const soundUrl = "/sound_effects/ButtonPush.mp3";
  const [play] = useSound(soundUrl);

  useEffect(() => {
    if (cardRef.current) {
      setTimeout(() => {
        cardRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
      }, 200); // Adjust delay as necessary
    }
  }, [selectedCard]);

  const CardOneClick = () => {
    handleCardClick(1);
  };

  const CardTwoClick = () => {
    handleCardClick(2);
  };

  const CardTheeClick = () => {
    handleCardClick(3);
  };

  const CardFourClick = () => {
    handleCardClick(4);
  };

  return (
    <>
    <div className=" w-full lg:h-screen md:h-auto relative ">
    <div className="bg"></div>

      <div className=" text-center mb-[0rem] pt-[3rem]  sections ">
        <span className="  text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-emerald-400 bg-gray-900   pl-12 pr-12 pt-2 pb-2 rounded-full shadow-green-800/80 shadow-lg focus:ring-green-800 ">
          Character
        </span>
      </div>

      <div className="  text-center  lg:p-0 lg:m-16 md:p-[8rem] sections">
          <Slider {...settings}>
              <Link
                onClick={() => {
                  CardOneClick(), play();
                }}
              >
                <div className=" relative  w-full h-auto border-2 border-emerald-800 rounded-lg shadow-lg hover:border-emerald-400 bg-gray-800 shadow-green-600/60  focus:ring-green-800  hover:shadow-xl  hover:shadow-emerald-200/60">
                  <img
                    src="https://ik.imagekit.io/vsfmz5htw/Characters/Lunar/lunar.png?updatedAt=1711183024894"
                    alt="Lunar"
                    className="w-full h-full "
                  />
                  <div className=" flex justify-center items-center  ring-4 ring-green-400 text-6xl w-full  max-h-28 h-full bg-gray-800 bg-opacity-90 rounded-xl absolute  bottom-0  ">
                   Lunar
                  </div>
                </div>
              </Link>

            <div className="text-center relative w-full h-full">
              <Link
                onClick={() => {
                  CardTwoClick(), play();
                }}
              >
                <div className="  relative  w-full h-auto border-2 border-emerald-800 rounded-lg shadow-lg hover:border-emerald-400 bg-gray-800 shadow-green-600/60  focus:ring-green-800  hover:shadow-xl  hover:shadow-emerald-200/60">
                  <img
                    src="https://ik.imagekit.io/vsfmz5htw/Characters/Rabbet/Rabbet2.png?updatedAt=1711183032139"
                    alt="Rabbet"
                    className="w-full h-full"
                  />
                </div>
                <div className=" flex justify-center items-center  ring-4 ring-green-400 text-6xl w-full  max-h-28 h-full bg-gray-800 bg-opacity-90 rounded-xl absolute  bottom-0 ">
                   Rabbet
                </div>
              </Link>
            </div>

            <div className="text-center relative w-full h-full ">
              <Link
                onClick={() => {
                  CardTheeClick(), play();
                }}
              >
                <div className=" relative  w-full h-auto border-2 border-emerald-800 rounded-lg shadow-lg hover:border-emerald-400 bg-gray-800 shadow-green-600/60  focus:ring-green-800  hover:shadow-xl  hover:shadow-emerald-200/60">
                  <img
                    src="https://ik.imagekit.io/vsfmz5htw/Characters/SupportingCharacter/village.png?updatedAt=1711183034649"
                    alt="Supporting Character"
                    className="w-full h-full "
                  />
                  <div className=" flex justify-center items-center  ring-4 ring-green-400 text-4xl w-full  max-h-28 h-full bg-gray-800 bg-opacity-90 rounded-xl absolute  bottom-0">
                  Supporting Character
                  </div>
                </div>
                
              </Link>
            </div>

            <div className="text-center relative w-full h-full">
              <Link
                onClick={() => {
                  CardFourClick(), play();
                }}
              >
                <div className="relative  w-full h-auto border-2 border-emerald-800 rounded-lg shadow-lg hover:border-emerald-400 bg-gray-800 shadow-green-600/60  focus:ring-green-800  hover:shadow-xl  hover:shadow-emerald-200/60">
                  <img
                    src="https://ik.imagekit.io/vsfmz5htw/Characters/SupportingRobot/robot.png?updatedAt=1711183035531"
                    alt="Suppoting Robot"
                    className="w-full h-full"
                  />
                  <div className=" flex justify-center items-center  ring-4 ring-green-400 text-4xl w-full  max-h-28 h-full bg-gray-800 bg-opacity-90 rounded-xl absolute  bottom-0">
                    Supporting Robot
                  </div>
                </div>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
      
      {selectedCard === 1 && (
        <CardOne
          ref={cardRef}
          handleNextClick={handleNextClick}
          handleBackClick={handleBackClick}
        />
      )}
      {selectedCard === 2 && (
        <CardTwo
          ref={cardRef}
          handleNextClick={handleNextClick}
          handleBackClick={handleBackClick}
        />
      )}
      {selectedCard === 3 && (
        <CardThee
          ref={cardRef}
          handleNextClick={handleNextClick}
          handleBackClick={handleBackClick}
        />
      )}
      {selectedCard === 4 && (
        <CardFour
          ref={cardRef}
          handleNextClick={handleNextClick}
          handleBackClick={handleBackClick}
        />
      )}
    </>
    
  );
};

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 375, // iPhone width
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: false,
      },
    },
    {
      breakpoint: 480, // Small devices width (like some Android phones)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 768, // iPad portrait mode
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024, // iPad Pro portrait mode and iPad Mini
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1920, // iPad Pro portrait mode and iPad Mini
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
  ],
};
export default Character;

// Card layout

//CardOne

const CardOne = React.forwardRef(
  ({ handleNextClick, handleBackClick }, ref) => {
    const [openModal, setOpenModal] = useState(false);
    const soundUrl = "/sound_effects/ButtonPush.mp3";
    const [play] = useSound(soundUrl);
    const [open, setOpen] = React.useState(false);
    return (
      <div className=" w-full lg:h-screen  md:h-auto sections relative z-20">
        <div className="cardone-bg"></div>
      <div
        ref={ref}
        id="componentCardOne"
        className="flex flex-col xl:flex-row lgg:flex-col lg:m-0 lg:pt-32 lg:pb-32 lg:px-32  items-center"
      >
        <Modal
          size={["7xl"]}
          show={openModal}
          onClose={() => {
            setOpenModal(false), play();
          }}
        >
          <Modal.Header className=" bg-slate-800 ">
            <span className="text-white">Power by Sketchfab</span>
          </Modal.Header>
          <Modal.Body className="bg-slate-800 h-auto">
            <div className=" h-[600px] w-full">
              <ThreeModelOne />
            </div>
          </Modal.Body>
        </Modal>

        <Lightbox
          open={open}
          plugins={[Thumbnails]}
          close={() => {
            setOpen(false), play();
          }}
          slides={[
            { src: "/images/Characters/Lunar/Lunar_FullSuit.png" },
            { src: "/images/Characters/Lunar/Lunar_NormalSuit.png" },
            { src: "/images/Characters/Lunar/Lunar_Undressed.png" },
            { src: "/images/Characters/Lunar/Lunar_NormalSuit_front.png" },
            { src: "/images/Characters/Lunar/Lunar_NormalSuit_back.png" },
            { src: "/images/Characters/Lunar/Lunar_Undressed_front.png" },
            { src: "/images/Characters/Lunar/Lunar_Undressed_side.png" },
            { src: "/images/Characters/Lunar/Lunar_Undressed_back.png" },
          ]}
        />
        <div className="lg:max-w-3xl  lg:w-1/2 md:max-w-lg bg-gray-800 rounded-3xl p-5  shadow-lg shadow-emerald-800/80 border border-emerald-800   text-center md:mt-16 lg:mt-0">
          <Characterdisplay />
          <button
            type="button"
            onClick={() => {
              setOpenModal(true), play();
            }}
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-green-800   shadow-lg shadow-green-800/80 font-bold rounded-lg text-xl px-12 py-3 text-center mt-5  mb-2 mx-2"
          >
            {openModal ? "Close" : "Inspect 3D"}
          </button>

          <button
            type="button"
            onClick={() => {
              setOpen(true), play();
            }}
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-green-800   shadow-lg shadow-green-800/80 font-bold rounded-lg text-xl px-12 py-3 text-center  mb-2 mx-2"
          >
            {openModal ? "Close" : "Inspect 2D"}
          </button>
        </div>

        <div className="lg:flex-1  lg:m-5  text-center md:flex-1 md:p-20 ">
          <div className="align-middle">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white m-5">
              Lunar (Main Charecter)
            </h1>
            <p className="text-2xl  text-justify pt-5">
              เป็นตัวละครหลักที่จะคอยบรรยายสิ่งต่าง ๆ ให้กับผู้รับชม
              จะมีการเล่าผ่านมุมมองของเธอเปรียบเสมือนผู้ชมที่ไม่เคยรู้จักสิ่งนั้น
              ๆ มาก่อน และพยายามทำความเข้าใจในสิ่งที่กำลังจะเกิดขึ้นต่อจากนี้
              คุณลักษณะของเธอจะมีอายุ 17 ปี และไม่รู้จักโลกภายนอก
              และมีความสนใจในสิ่งใหม่ ๆ
              และผ่านประสบการณ์การใช้ชีวิตมาประมาณหนึ่ง การร่างตัวละคร
              มีการใช้ความเป็น Sci-fi ร่วมด้วยในการออกแบบ
              เพื่อให้ดูกลมกลืนไปกับฉาก
              และใช้อุปกรณ์บางชิ้นแทนอวัยวะเช่นแขนเทียม
              เพื่อให้ตัวละครดูมีภูมิหลัง และที่มาที่ดูซับซ้อน
              ตัวละครตัวนี้จะถูกพัฒนาความสัมพันธ์ตามเหตการณ์ในเนื้อเรื่อง
            </p>
          </div>
          <div className=" flex  justify-around m-10 ">
            <button
              onClick={() => {
                handleBackClick(), play();
              }}
              type="button"
              className="  text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-green-800 shadow-lg   shadow-green-800/80 font-bold rounded-lg text-xl px-12 py-3 text-center  mb-2 "
            >
              Back
            </button>

            <button
              onClick={() => {
                handleNextClick(), play();
              }}
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-bold rounded-lg text-xl px-12 py-3 text-center  mb-2 "
            >
              Next
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  }
);

//CardTwo

const CardTwo = React.forwardRef(
  ({ handleNextClick, handleBackClick }, ref) => {
    const [openModal, setOpenModal] = useState(false);
    const [open, setOpen] = React.useState(false);
    const soundUrl = "/sound_effects/ButtonPush.mp3";
    const [play] = useSound(soundUrl);
    return (
      <div className=" w-full lg:h-screen  md:h-auto sections relative z-20">
        <div className="cardone-bg"></div>
      <div
        ref={ref}
        id="componentCardTwo"
        className="  flex flex-col xl:flex-row lgg:flex-col lg:m-0 lg:pt-32 lg:pb-32 lg:px-32  items-center "
      >
        <Modal
          size={["7xl"]}
          show={openModal}
          onClose={() => {
            setOpenModal(false), play();
          }}
        >
          <Modal.Header className=" bg-slate-800 ">
            {" "}
            <span className="text-white">Power by Sketchfab</span>
          </Modal.Header>
          <Modal.Body className="bg-slate-800 ">
            <div className="h-[600px] w-full">
              <ThreeModelTwo />
            </div>
          </Modal.Body>
        </Modal>

        <Lightbox
          plugins={[Thumbnails]}
          open={open}
          close={() => {
            setOpen(false), play();
          }}
          slides={[
            { src: "/images/Characters/Rabbet/Rabbet.png" },
            { src: "/images/Characters/Rabbet/front.png" },
            { src: "/images/Characters/Rabbet/side.png" },
            { src: "/images/Characters/Rabbet/back.png" },
          ]}
        />

        <div className="lg:max-w-3xl  lg:w-1/2 md:max-w-lg bg-gray-800 rounded-3xl p-5  shadow-lg shadow-emerald-800/80 border border-emerald-800   text-center md:mt-16 lg:mt-0">
          <Characterdisplaytwo />
          <button
            type="button"
            onClick={() => {
              setOpenModal(true), play();
            }}
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-green-800   shadow-lg shadow-green-800/80 font-bold rounded-lg text-xl px-12 py-3 text-center mt-5  mb-2 mx-2"
          >
            {openModal ? "Close" : "Inspect 3D"}
          </button>

          <button
            type="button"
            onClick={() => {
              setOpen(true), play();
            }}
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-green-800   shadow-lg shadow-green-800/80 font-bold rounded-lg text-xl px-12 py-3 text-center mt-5  mb-2 mx-2"
          >
            {open ? "Close" : "Inspect 2D"}
          </button>
        </div>

        <div className="lg:flex-1  lg:m-5  text-center md:flex-1 md:p-20  ">
          <div className=" align-middle">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white m-5">
              Rabbet (Lapin-02)
            </h1>
            <p className="  text-2xl text-justify pt-5 ssm:text-center ssm:text-xl ">
              Lapin-02 คือชื่อที่แท้จริงของ Rabbet มีความหมายในภาษาละตินว่า
              กระต่าย และเป็นเตาปฏิกรณ์หมายเลข 2 ที่ถูกสร้างขึ้นเพื่อมาทดแทนที่
              เตาปฏิกรณ์หมายเลข1
              แต่ด้วยความที่ไม่เสถียรจึงจะนำไปทำลายที่เมืองด้านล่างสุดด้วยระบบอัตโนมัติ
              แต่เกิดข้อผิดพลาดจึงกลายเป็น Rabbet
              ที่มีระบบไม่สมบูรณ์จึงไม่ทำลายตัวเองในหลุมลาวา
              
            </p>
          </div>

          <div className=" flex  justify-around m-10 ">
            <button
              onClick={() => {
                handleBackClick(), play();
              }}
              type="button"
              className="  text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-bold rounded-lg text-xl px-12 py-3 text-center  mb-2 mx-2 "
            >
              Back
            </button>
            <button
              onClick={() => {
                handleNextClick(), play();
              }}
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-bold rounded-lg text-xl px-12 py-3 text-center  mb-2 mx-2 "
            >
              Next
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  }
);

//CardThee

const CardThee = React.forwardRef(
  ({ handleNextClick, handleBackClick }, ref) => {
    const [openModal, setOpenModal] = useState(false);
    const [open, setOpen] = React.useState(false);
    const soundUrl = "/sound_effects/ButtonPush.mp3";
    const [play] = useSound(soundUrl);
    return (
      <div className=" w-full lg:h-screen  md:h-auto sections relative z-20">
        <div className="cardone-bg"></div>
      <div
        ref={ref}
        className="flex flex-col xl:flex-row lgg:flex-col lg:m-0 lg:pt-32 lg:pb-32 lg:px-32  items-center"
      >
        <Modal
          size={["7xl"]}
          show={openModal}
          onClose={() => {
            setOpenModal(false), play();
          }}
        >
          <Modal.Header className=" bg-slate-800 ">
            <span className="text-white">Power by Sketchfab</span>
          </Modal.Header>
          <Modal.Body className="bg-slate-800 h-96">
            <div className="h-[600px] w-full">
              <ThreeModelThee />
            </div>
          </Modal.Body>
        </Modal>

        <Lightbox
          plugins={[Thumbnails]}
          open={open}
          close={() => {
            setOpen(false), play();
          }}
          slides={[
            { src: "/images/Characters/SupportingCharacter/SupCharacter.png" },
            { src: "/images/Characters/SupportingCharacter/front.png" },
            { src: "/images/Characters/SupportingCharacter/side.png" },
            { src: "/images/Characters/SupportingCharacter/back.png" },
          ]}
        />

        <div className="lg:max-w-3xl  lg:w-1/2 md:max-w-lg bg-gray-800 rounded-3xl p-5  shadow-lg shadow-emerald-800/80 border border-emerald-800   text-center md:mt-16 lg:mt-0">
          <Characterdisplaythree />
          <div>
            <button
              onClick={() => {
                setOpenModal(true), play();
              }}
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-green-800   shadow-lg shadow-green-800/80 font-bold rounded-lg text-xl px-12 py-3 text-center mt-5  mb-2 mx-2"
            >
              {openModal ? "Close" : "Inspect 3D"}
            </button>

            <button
              type="button"
              onClick={() => {
                setOpen(true), play();
              }}
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-green-800   shadow-lg shadow-green-800/80 font-bold rounded-lg text-xl px-12 py-3 text-center mt-5  mb-2 mx-2"
            >
              {open ? "Close" : "Inspect 2D"}
            </button>
          </div>
        </div>

        <div className="lg:flex-1  lg:m-5  text-center md:flex-1 md:p-20  ">
          <div className=" align-middle ">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white m-5 ">
              Supporting Character
            </h1>
            <p className=" text-2xl text-justify pt-5 ssm:text-center ssm:text-xl">
            เป็นตัวละครเสริมภายในฉาก มีรูปร่างคล้ายมนุษย์ แต่ร่างกายเป็นหุ่นยนต์ โดยตัวละครนี้จะถูกนำไปประกอบฉากเพื่อให้ตัวเมืองดูเป็นธรรมชาติมากขึ้น มีผู้คนทำงาน โดยสามารถดัดแปลงให้ตัวละครนี้ถืออุปกรณ์หลาย ๆ แบบเผื่อใช้ในสถานการณ์ที่แตกต่างกันได้
            </p>
          </div>
          <div className=" flex  justify-around m-10 ">
            <button
              onClick={() => {
                handleBackClick(), play();
              }}
              type="button"
              className="  text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-bold rounded-lg text-xl px-12 py-3 text-center  mb-2 mx-2"
            >
              Back
            </button>
            <button
              onClick={() => {
                handleNextClick(), play();
              }}
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-bold rounded-lg text-xl px-12 py-3 text-center mb-2 mx-2"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  }
);

//cardfour

const CardFour = React.forwardRef(
  ({ handleNextClick, handleBackClick }, ref) => {
    const [openModal, setOpenModal] = useState(false);
    const [open, setOpen] = React.useState(false);
    const soundUrl = "/sound_effects/ButtonPush.mp3";
    const [play] = useSound(soundUrl);
    return (
      <div className="w-full lg:h-screen  md:h-auto sections relative z-20">
        <div className="cardone-bg"></div>
      <div
        ref={ref}
        className="flex flex-col xl:flex-row lgg:flex-col lg:m-0 lg:pt-32 lg:pb-32 lg:px-32  items-center"
      >
        <div className="lg:max-w-3xl  lg:w-1/2 md:max-w-lg bg-gray-800 rounded-3xl p-5  shadow-lg shadow-emerald-800/80 border border-emerald-800   text-center md:mt-16 lg:mt-0">
          <Characterdisplayfour />
          <div>
            <button
              onClick={() => {
                setOpenModal(true), play();
              }}
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-green-800   shadow-lg shadow-green-800/80 font-bold rounded-lg text-xl px-12 py-3 text-center mt-5  mb-2 mx-2"
            >
              {openModal ? "Close" : "Inspect 3D"}
            </button>

            <button
              type="button"
              onClick={() => {
                setOpen(true), play();
              }}
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-green-800   shadow-lg shadow-green-800/80 font-bold rounded-lg text-xl px-12 py-3 text-center mt-5  mb-2 mx-2"
            >
              {open ? "Close" : "Inspect 2D"}
            </button>

            <Modal
              size={["7xl"]}
              show={openModal}
              onClose={() => {
                setOpenModal(false), play();
              }}
            >
              <Modal.Header className=" bg-slate-800 ">
                <span className="text-white">Power by Sketchfab</span>
              </Modal.Header>
              <Modal.Body className="bg-slate-800">
                <div className="h-[600px] w-full">
                  <ThreeModelFour />
                </div>
              </Modal.Body>
            </Modal>

            <Lightbox
              plugins={[Thumbnails]}
              open={open}
              close={() => {
                setOpen(false), play();
              }}
              slides={[
                {
                  src: "/images/Characters/SupportingRobot/SupRobot.png",
                },
                { src: "/images/Characters/SupportingRobot/front.png" },
                { src: "/images/Characters/SupportingRobot/side.png" },
                { src: "/images/Characters/SupportingRobot/back.png" },
              ]}
            />
          </div>
        </div>

        <div className="lg:flex-1  lg:m-5  text-center md:flex-1 md:p-20  ">
          <div className=" align-middle">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white m-5">
              Suppoting Robot
            </h1>
            <p className="text-2xl text-justify pt-5 ">
            เป็นตัวละครเสริมภายในฉาก รูปร่างเป็นหุ่นยนต์ที่มีความสูงมากกว่ามนุษย์ ตรงกลางอกสามารถเปิดเพื่อเก็บของได้ โดยตัวละครนี้จะถูกนำไปประกอบฉากเช่นเดียวกัน เพื่อให้เมืองดูมีชีวิตชีวา โดยสามารถดัดแปลงให้ตัวละครนี้ถืออุปกรณฺ์หลาย ๆ แบบให้ใช้ในสถานการณ์ที่แตกต่างกันได้เหมือนกับตัว Supporting character
            </p>
          </div>
          <div className=" flex  justify-around m-10 ">
            <button
              onClick={() => {
                handleBackClick(), play();
              }}
              type="button"
              className="  text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-bold rounded-lg text-xl px-12 py-3 text-center  mb-2 mx-2"
            >
              Back
            </button>
            <button
              onClick={() => {
                handleNextClick(), play();
              }}
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-bold rounded-lg text-xl px-12 py-3 text-center  mb-2 mx-2"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  }
);

// 3D sence Inspect

function ThreeModelOne() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        className="rounded-3xl"
        title="Cl_Lunar_tosketchfab6"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/ce4af655ce024e83b8ff5fe30e0be4a8/embed"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}

function ThreeModelTwo() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        title="CB_rabbet"
        className="rounded-3xl "
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/fd14f883bd0c439c82c01420bfe8c114/embed"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}

function ThreeModelThee() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        title="CS_villager"
        className="rounded-3xl "
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/9d1e95ee0e234adb849482ee345bf0ee/embed"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}

function ThreeModelFour() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        className="rounded-3xl "
        title="CS_robot"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/e222bb9da46943da9280c1fc4e57fdca/embed"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}
