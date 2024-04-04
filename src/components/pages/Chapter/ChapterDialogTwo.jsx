import React, { useState, useEffect, useRef, useContext } from "react";
import { Button, Modal } from "flowbite-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { DataContext } from "../../../App";
import useSound from "use-sound";

const ChapterDialogTwo = () => {
  const [textFullyTyped, setTextFullyTyped] = useState(false);
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(""); // Track displayed text
  const [typingSpeed, setTypingSpeed] = useState(30); // Adjust typing speed as needed
  const [openModal, setOpenModal] = useState(false);
  const {
    setCloseNavbar,
    setCloseButtonNavbar,
    CloseButtonNavbar,
    setIsNavbarFixed,
    setColseBgmusic,
  } = useContext(DataContext);
  const soundUrl = "/sound_effects/ButtonPush.mp3";
  const [play] = useSound(soundUrl);
  const [dialogue, setDialogue] = useState([
    {
      speaker: "-- Lunar --",
      text: "ใกล้จะถึงเขตชาญเมืองแล้วแหละนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img2.png?updatedAt=1711190708064",
    },
    {
      speaker: "-- Lunar --",
      text: "ฉันอยากจะรู้จังเลยนะ ว่าเมืองด้านบนจะมีคุณภาพชีวิตที่ดีกว่าเมืองด้านล่างขนาดไหน",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Rabbet --",
      text: "ที่เมืองด้านบนนั้นก็ใช่ว่าจะดีเสมอไปหรอกนะ มันก็มีสิ่งที่ต้องแลกมาหลายๆ อย่างอยู่เสมอซะทุกอย่างหน่ะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img2.png?updatedAt=1711190708064",
    },
    {
      speaker: "-- Lunar --",
      text: "ใกล้จะถึงเขตชายเมืองแล้วแหละนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text:"มันพอจะมีวิธีแก้ไขสิ่งเหล่านี้บ้างไหม",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Rabbet --",
      text: "ตราบเท่าที่มนุษย์ยังต้องพึ่งพาการผลิตพลังงานเหล่านี้อยู่ ก็จะสร้างมลพิษพวกนี้แบบไม่รู้จบ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: "สภาพอากาศที่เลวร้ายอย่างนี้ไม่มีวิธีแก้ไขมันเลยหรอ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Rabbet --",
      text: "เกรงว่าจะไม่ ถ้าหากเราไม่ได้แก้ไขที่จุดเริ่มต้นของมัน",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: "แล้วถ้าเราเปลี่ยนวิธีการผลิตพลังงานหล่ะ?",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Rabbet --",
      text: "กระบวนการ การเปลี่ยนแปลงระบบมันไม่ได้ง่ายดายขนาดนั้นหรอกนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: "ตะ..แต่ว่า...",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Rabbet --",
      text: "คิดซะว่านี่คือกรรมตามสนองที่มนุษย์กระทำกับโลกนี้ไว้ก็ได้",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Rabbet --",
      text: "มนุษย์นี่สื่ออารมณ์ผ่านสีหน้าง่ายจังเลยนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: ".....ก็ใช่อยู่หรอกนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Rabbet --",
      text: "ถึงจะช่วยได้ไม่มากแต่สิ่งนี้คงจะเป็นประโยชน์ต่ออนาคต",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: "อะไรหล่ะนั่น",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Rabbet --",
      text: "แคปซูลต้นไม้หล่ะมั้ง",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: "ต้นไม้งั้นหรอ พืชที่มีลักษณะสีเขียว ๆ นั้นหน่ะหรอ!?",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: "นายมีมันได้ยังไงหน่ะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Rabbet --",
      text: "ฉันน่าจะมีมันติดมาในตัวเครื่องของฉันเพื่อให้ฉันทำอะไรสักอย่าง มันอาจจะช่วยเกี่ยวกับพื้นที่แห่งนี้ละมั้งนะ ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Rabbet --",
      text: "ถึงแม้ว่าฉันจะไม่ค่อยเข้าใจก็เถอะแต่มันคงเป็นเรื่องของอนาคตสักวันหนึ่งละนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: "ฉันยิ้มและรู้สึกดีใจที่จะมีพอจะมีอะไรบางอย่างที่ทำได้บ้าง ถึงแม้ฉันจะไม่สามารถทำได้แต่ฉันก็อยากจะเห็นความเปลี่ยนแปลงเหมือนกัน",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    // Add more dialogue objects as needed
  ]);

  useEffect(() => {
    setCloseNavbar(true);
    setCloseButtonNavbar(false);
    setColseBgmusic(true);
    setIsNavbarFixed(true)
  }, []);

  const handleNext = () => {
    if (textFullyTyped && currentDialogueIndex < dialogue.length - 1) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
      // Reset textFullyTyped state for the next dialogue
      setTextFullyTyped(false);
    } else if (textFullyTyped && currentDialogueIndex === dialogue.length - 1) {
      // Show the modal when user clicks on the last dialogue
      setOpenModal(true);
    }
  };

  const handleUserClick = () => {
    // Set textFullyTyped to true when user clicks to show full text
    setTextFullyTyped(true);
  };

  useEffect(() => {
    let currentIndex = 0;
    const textToType = dialogue[currentDialogueIndex].text;
    const typingInterval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setDisplayedText(textToType.substring(0, currentIndex));
        currentIndex += 1;
      } else {
        clearInterval(typingInterval);
        // Set the textFullyTyped state when typing is complete
        setTextFullyTyped(true);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentDialogueIndex, dialogue, typingSpeed]);

  return (
    <>
      {/* {!CloseButtonNavbar && (
        <Button
          className="absolute z-50 right-[1%] top-[1.8%] rounded-full  opacity-50"
          gradientDuoTone="purpleToBlue"
          onClick={() => {
            setCloseNavbar(false), setCloseButtonNavbar(true), play();
          }}
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </Button>
      )} */}
      <div className="w-full h-screen text-center">
        <Link onClick={handleNext}>
          <div className="w-full h-screen relative">
            <div
              className=" absolute w-full top-[70%]  left-0 right-0 bottom-0 bg-opacity-50 z-20"
              style={{
                background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 1) 100%)`,
              }}
              onClick={handleUserClick}
            >
              <h1 className="absolute top-[15%] bottom-0 left-0 right-0 font-bold text-2xl sm:text-xs lg:text-5xl opacity-90">
                {dialogue[currentDialogueIndex].speaker}
              </h1>
              <p className="absolute top-[50%] bottom-0 left-0 right-0 text-base md:text-2xl lg:text-3xl px-5 ">
                {textFullyTyped
                  ? dialogue[currentDialogueIndex].text
                  : displayedText}
              </p>
            </div>
            <img
              src={dialogue[currentDialogueIndex].bg}
              alt="image description"
              className="w-screen h-screen"
            />
          </div>
        </Link>
        <Modal
          show={openModal}
          size="md"
          onClose={() => {
            setOpenModal(false);
            setCurrentDialogueIndex(0); // Reset currentIndex to 0
            play();
          }}
          popup
        >
          <Modal.Header className="bg-slate-800"/>
          <Modal.Body className="bg-slate-800">
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-sm md:text-lg lg:text-xl font-normal text-gray-500 dark:text-gray-400">
                Chapter 2 จบลงแล้ว กดปุ่มถัดไปเพื่อดำเนินเนื้อเรื่องต่อใน
                Chapter 3 หรือ กลับไปหน้าเลือก Chapter 
              </h3>
              <div className="flex flex-col md:flex-row justify-center gap-4 ">
                <Link to={"/chapterthree"}>
                  <Button
                    color="failure"
                    onClick={() => {
                      setOpenModal(false);
                      play();
                    }}
                  >
                    {" ดำเนินเนื้อเรื่อง "}
                  </Button>
                </Link>
                <Link to={"/roomchapterone"}>
                  <Button
                    color="gray"
                    onClick={() => {
                      setOpenModal(false);
                      play();
                    }}
                  >
                    กลับไปหน้าเลือก Chapter
                  </Button>
                </Link>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ChapterDialogTwo;
