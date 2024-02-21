import React, { useState, useEffect, useRef, useContext } from "react";
import { Button, Modal } from "flowbite-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { DataContext } from "../../../App";
import useSound from "use-sound";

const ChapterDialogThree = () => {
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
      speaker: "-- Character Name --",
      text: ".....ฉันอยู่ที่ไหน......",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189162959839178802/chapter1.png?ex=659d294f&is=658ab44f&hm=aec37154df0705876644dea63f4ec214fb029b20f63814f0adefac2b139c8b67&",
    },
    {
      speaker: "-- Character Name --",
      text: "/กำลังแก้ไขข้อผิดพลาด/(✖▂✖)",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Lunar --",
      text: "คุณเป็นอะไรรึเปล่า",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189162959839178802/chapter1.png?ex=659d294f&is=658ab44f&hm=aec37154df0705876644dea63f4ec214fb029b20f63814f0adefac2b139c8b67&",
    },
    {
      speaker: "-- Character Name --",
      text: ".../ระบบขัดข้อง Memory บางส่วนเกิดความเสียหายไม่สามารถกู้ระบบได้/...",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Lunar --",
      text: "ทำไมนายถึงตกลงมาที่ชั้นล่างสุดที่นี่หล่ะ ?",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Name ?? --",
      text: "ฉัน....จำไม่ได้......ดูเหมือนว่าระบบความทรงจำของฉันจะเสียหาย",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Name ?? --",
      text: "เธอ...ชื่อว่าอะไรหรอ",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Lunar --",
      text: "อะ.....เอ่อ ฉันชื่อ [Lunar]",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Name ?? --",
      text: "[Lunar] ...... ส่วนฉัน....... ขอโทษนะฉันจำเรื่องของตัวเองไม่ได้เลย ",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Name ?? --",
      text: "ถ้าไม่เป็นการรบกวน เธอช่วยตั้งชื่อใหม่ให้ฉันหน่อยได้ไหม ?",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Lunar --",
      text: "จะดีหรอ.....เอ่อ.....",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Lunar --",
      text: "นายมีหูเหมือนกระต่าย และเป็นหุ่นยนต์... ถ้างั้นชื่อ [Rabbet] ใช้ได้รึเปล่า?",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Name ?? --",
      text: "[Rabbet] ใช้ได้เลยหนิ ขอบคุณนะ",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Lunar --",
      text: "แล้วจากนี้ไปนายจะทำยังไงต่อ จะกลับขึ้นไปที่เมืองด้านบนไหม?",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Rabbet --",
      text: "ถึงจะจำเหตุผลไม่ได้ แต่ฉันก็คงต้องกลับขึ้นไปแหละนะ",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Lunar --",
      text: ".......",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Lunar --",
      text: "ถ้าอย่างนั้น ฉันขอออกเดินทางไปด้วยได้ไหม ?",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Rabbet --",
      text: "หะ!! เธอแน่ใจแล้วหรอ",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Lunar --",
      text: "มันเคยเป็นความฝันของฉันหน่ะ วันหนึ่งฉันอยากออกเดินทาง อยากจะพบเจอสิ่งใหม่ๆ ก่อนที่จะอายุ 18 หน่ะ",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Rabbet --",
      text: "ถ้าเธอออกเดินทางไป แล้วผู้คนที่นี่จะไม่เป็นห่วงเธอเอาหรอ ?",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Lunar --",
      text: "ไม่เป็นไร ฉันไม่มีครอบครัว หรือเพื่อนที่คอยห่วงใยหรอก",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Rabbet --",
      text: "ฉันขอโทษนะที่ทำให้นึกถึงเรื่องนั้น",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Lunar --",
      text: "อื้อ ไม่เป็นไร",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Lunar --",
      text: "ถ้าอย่างงั้น ขอฝากเนื้อ ฝากตัวด้วยนะ",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Rabbet --",
      text: "เช่นกันนะ ขอให้เป็นการเดินทางที่น่าจดจำ",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    {
      speaker: "-- Lunar --",
      text: "ฉันจับมือของ [Rabbet] และเรื่องราวของพวกเรากำลังจะเริ่มต้นขึ้น",
      bg: "https://cdn.discordapp.com/attachments/826511901445980170/1189496941881589770/chapter2.png?ex=659e605a&is=658beb5a&hm=7bd6d96c59a606017a97d93fb822e056b5fb9bcd28f13140f583710a0140cdde&",
    },
    // Add more dialogue objects as needed
  ]);

  useEffect(() => {
    setCloseNavbar(true);
    setCloseButtonNavbar(false);
    setColseBgmusic(true);
    setIsNavbarFixed(true);
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
      {!CloseButtonNavbar && (
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
      )}
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
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-sm md:text-lg lg:text-xl font-normal text-gray-500 dark:text-gray-400">
                Chapter 3 จบลงแล้ว กลับไปหน้าเลือก Chapter
                เพื่อหาความลับที่ซ่อนอยู่ 😎
              </h3>
              <div className="flex flex-col md:flex-row justify-center gap-4 ">
                <Link to={"/roomchapterone"}>
                  <Button
                    color="failure"
                    onClick={() => {
                      setOpenModal(false);
                      play();
                    }}
                  >
                    {" กลับไปหน้าเลือก Chapter "}
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

export default ChapterDialogThree;
