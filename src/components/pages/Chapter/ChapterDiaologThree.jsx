import React, { useState, useEffect, useRef, useContext } from "react";
import { Button, Modal } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { DataContext } from "../../../App";
import useSound from "use-sound";
import "./styles/ChapterOne.scss";
import bgmSound from "/audios/chapterThree/bg_3.mp3";


const ChapterDialogThree = () => {
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const audioRef = useRef(null);
  const { setColseBgmusic} =
    useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State to store window width
  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);
  const [volume, setVolume] = useState(0.3); // Initial volume value
  // const [playwalkingSound, { stop: stopWalkingSound }] = useSound(
  //   walkingSound,
  //   { volume: volume , loop: false }
  // );
  // const [playpunchSound, { stop: stopPunchSound }] = useSound(punchSound, {
  //   volume: volume,
  //   loop: false,
  // });
  // const [playalarmSound, { stop: stopAlarmSound }] = useSound(alarmSound, {
  //   volume: volume,
  //   loop: false,
  // });
  const [playBgm, { pause: pauseBgm, stop: stopBgm }] = useSound(bgmSound, {
    volume: volume,
    loop: true,
  });
  const [textFullyTyped, setTextFullyTyped] = useState(false);
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(""); // Track displayed text
  const [typingSpeed, setTypingSpeed] = useState(30); // Adjust typing speed as needed
  const [openModal, setOpenModal] = useState(false);
  const [openModalt, setOpenModalt] = useState(false);
  const soundUrl = "/sound_effects/ButtonPush.mp3";
  const [play] = useSound(soundUrl);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dialogue, setDialogue] = useState([
    {
      speaker: "-- Lunar --",
      text: "เมืองด้านบนสุด ที่อยู่เหนือจินตนาการของฉัน ",
      bg: 'https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Layer%2036.png?updatedAt=1714105540258',
    },
    {
      speaker: "-- Lunar --",
      text: "เป็นเมืองที่มีแต่รูปทรงแปลกประหลาดที่ฉันไม่สามารถจินตนาการได้ ",
      bg: 'https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Layer%2036.png?updatedAt=1714105540258',
    },
    {
      speaker: "-- Lunar --",
      text: "เมืองนี้มีชื่อว่า.......PeaceFusion",
      bg: 'https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Layer%2036.png?updatedAt=1714105540258',
    },
    {
      speaker: "-- Lunar --",
      text: "หลังจากที่พวกเราได้พักค้างคืนที่เมือง Solarwind ",
      bg: 'https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%201.png?updatedAt=1714112460157',
    },
    {
      speaker: "-- Lunar --",
      text: "พวกเราก็ได้ขึ้นลิฟต์ชั้นสุดท้ายที่สูงขึ้นมาจากพื้นดินจนสูงกว่าขอบของหลุมลึก",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%202.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Lunar --",
      text: "เมื่อพวกเราขึ้นลิฟต์มาจนถึงเมืองชั้นบน ภาพแรกที่ฉันได้เห็นคือภาพของเมืองที่ใหญ่โตมโหฬาร",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%203.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Lunar --",
      text: "ตึกที่สูงเสียดฟ้าและมีรูปร่างหน้าตาแปลกๆ ล้อมรอบปากหลุมอยู่",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%204.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Lunar --",
      text:  "พวกเเราได้เห็นวงแหวนที่หมุนวนรอบแก่นของพลังงานบางอย่างอยู่ที่ด้านบนของเมือง",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%205.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Rabbet --",
      text: "มีบางอย่างผิดปกติ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%206.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Lunar --",
      text: "เกิดอะไรขึ้นหรอ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%207.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Lunar --",
      text:  "ฉันพูดพลางมองไปรอบๆแล้วสะดุดตากับผู้คน ที่กำลังมองมาที่ฉัน",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%208.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Soldier --",
      text:  "นั่น!...ใช่ Lapin-02 รึเปล่า",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%209.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Soldier --",
      text: "ต้องใช่แน่ ๆ ทำไมแกถึงอยู่ที่นี่ได้!",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2010.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Rabbet --",
      text: "หยุดนะ นี่พวกนายจะทำอะไรกันน่ะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2011.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Lunar --",
      text:  "พวกนายพูดอะไรกันน่ะ นี่คือ Rabbet ไม่ใช่หรอ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2012.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Soldier --",
      text:  "สิ่งที่เธอเรียกว่า Rabbet นั่นคือหุ่นยนต์เตาปฏิกรณ์นิวเคลียร์จากโครงการที่ไม่เสถียรและควรจะดับสิ้นไปแล้ว ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2013.png?updatedAt=1714112460157",
    },
    // fade out and fade in 
    {
      speaker: "-- Soldier --",
      text: "ชื่อเรียกของ Project นั้นคือ Lapin-02 ต่างหาก นั่นหน่ะคือเตาปฏิกรณ์นิวเคลียร์เดินได้ และพร้อมที่จะระเบิดต่างหาก",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2014.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Lunar --",
      text: "ไม่นะ! ไม่จริง!",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2015.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Lunar --",
      text: "ฉันไม่เข้าใจ อะไรคือปฏิกรณ์นิวเคลียร์ที่พวกนายพูดถึงกัน",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2016.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Lunar --",
      text: " Rabbet ก็คือ Rabbet ที่เพิ่งตกลงมาเมื่อวันก่อนที่เมืองด้านล่างสุดแล้วช่วยฉันเอาไว้สิ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2017.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Rabbet --",
      text: "...",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2018.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Rabbet --",
      text: " ขอโทษนะ Lunar ฉันจำเรื่องราวทั้งหมดได้แล้วล่ะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2018.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Rabbet --",
      text: "Lapin-02  คือตัวฉันเองงั้นสินะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2019.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Rabbet --",
      text: "ถ้างั้นด้านบนนั้นก็คือ เตาปฏิกรหมายเลข1 ที่กำลังจะดับลงงั้นสินะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2020.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Rabbet --",
      text: "หืม..? นั่นมันอะไรน่ะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2021.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Lunar --",
      text: "วัตถุบางอย่างบินชนกับกำแพงล่องหน แรงระเบิดทำให้เกิดเสียงดังลั่นท้องฟ้าก็สว่างวาบเป็นสีขาวโพลน",
      bg: " https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Layer%2037.png?updatedAt=1714105540120",
    },
    {
      speaker: "-- Lunar --",
      text: " หลังจากที่ฉันตั้งสติได้ และมองไปรอบ ๆ หลังจากการระเบิดนั้น ก็ได้มีเศษกระจกใส ๆ ตกลงมาจากด้านบน",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2022.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Rabbet --",
      text:  "Lunar!!!",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2023.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Lunar --",
      text: " ทันใดนั้น Rabbet ได้พุ่งเข้ามาบังกระจกบานนั้นให้ฉัน",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2024.png?updatedAt=1714112460157",
    },
    
    {
      speaker: "-- Lunar --",
      text: "ภาพในตอนนั้นมันลอยขึ้นมาอีกครั้ง ภาพตรงหน้าของฉันเหมือนถูกเอาภาพเก่ามาฉายซ้ำอีกครั้ง",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2025.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Rabbet --",
      text: " ไม่เป็นไรใช่ไหม",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2026.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Lunar --",
      text: " อื้อ.....แผลเล็กน้อยหน่ะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2027.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Soldier --",
      text: "ตอนนี้ไม่มีเวลาแล้ว Barrier ได้แตกลงแล้ว!",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2028.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Lunar --",
      text: "ระหว่างนั้น Soldier วิ่งหนีกันกระจัดกระจาย ความโกลาหนมันสวนทางกับความสงบ ทุกอย่างทุกคนล้วนต่างเอาชีวิตรอดโดยไม่สนสิ่งอื่นใด",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2029.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Rabbet --",
      text:  "ฟังนะ Lunar เราคงต้องจากลากันตรงนี้แล้วหล่ะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2030.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Lunar --",
      text:  "คำพูดนั้นทำให้ฉันพูดไม่ออก",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2031.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Rabbet --",
      text:  "ฉันถูกสร้างขึ้นเพื่อใช้เป็นอาวุธสำหรับปกป้องหลุมแห่งนี้ ภายในตัวของฉันก็มีเตาปฏิกรณ์นิวเคลียร์ที่เหมือนกับด้านบนนั้น",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2032.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Rabbet --",
      text:  "ฉันรู้แล้วหล่ะว่าฉันเกิดมาด้วยเหตุผลอะไร......",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2033.png?updatedAt=1714112460157",
    },
    {
      speaker: "-- Lunar --",
      text:  "งั้นหรอ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter3/image/Group%2034.png?updatedAt=1714112460157",
    },
    
    //Fade ดำ ปิด chapetert 3
    // Add more dialogue objects as needed
  ]);

  const toggleSliderVisibility = () => {
    setIsSliderVisible(!isSliderVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    return () => {
      handleStopBgm(); // หยุดการเล่นเพลงพื้นหลัง
      handleStopSoundEffects(); // หยุดการเล่นเอฟเฟกต์เสียงทั้งหมด
    };
  }, []);

  useEffect(() => {
    setColseBgmusic(false);
     playBgm(); 
    return () => {
      stopBgm();
    };
  }, [playBgm, stopBgm]);

  const handlePauseBgm = () => {
    pauseBgm();
  };

  const handlePlayBgm = () => {
    playBgm();
  };

  const handleStopBgm = () => {
    stopBgm();
  };

  const handleStopSoundEffects = () => {
    
  };

  const handleVolumeChange = (e) => {
    const newVolume = (e.target.value);
    setVolume(newVolume);
  };

  const handleNext = () => {

     if (textFullyTyped && currentDialogueIndex < 40 && currentDialogueIndex !== dialogue.length - 1) {
      handleStopSoundEffects();
      setCurrentDialogueIndex(currentDialogueIndex + 1);
      play();
      setIsAnimating(true); // เริ่มเล่นอนิเมชัน
      // Reset textFullyTyped state for the next dialogue
      setTextFullyTyped(false);
      setTimeout(() => setIsAnimating(false), 1000); // หยุดเล่นอนิเมชันหลังจาก 1 วินาที
    } else if (textFullyTyped && currentDialogueIndex === dialogue.length - 1) {
        // Show the modal when user clicks on the last dialogue
        setFadeEffect("fade-exit-active");
        setTimeout(() => {
          handleButtonClickNext();
        }, 2000); 
        handleStopBgm();
      }
  };

  const handleBack = () => {
    if (currentDialogueIndex > 0) {
        handleStopSoundEffects();
        if (currentDialogueIndex === dialogue.length) {
            setOpenModal(false);
            handlePlayBgm();
        }
        setCurrentDialogueIndex(currentDialogueIndex - 1);
        play();
        setIsAnimating(true);
        setTextFullyTyped(false);
        setTimeout(() => setIsAnimating(false), 1000);
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

  const [fadeEffect, setFadeEffect] = useState("fade-enter");
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeEffect(fadeEffect + " fade-enter-active");
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleButtonClickRoom = () => {
    setFadeEffect("fade-exit-active");
    setTimeout(() => {
      navigate("/roomchapterone");
    }, 3000); // 3000ms is the duration of the fade-out effect
  };

  const handleButtonClickNext = () => {
    setFadeEffect("fade-exit-active");
    setTimeout(() => {
      navigate("/chapterthree");
    }, 3000); // 3000ms is the duration of the fade-out effect
  };

  // useEffect(() => {
  //   if (currentDialogueIndex === 0) {
  //     handlePlayBgm();
  //     setTimeout(() => {
  //       playalarmSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 1) {
  //     setTimeout(() => {
  //       playwalkingSound();
  //     }, 1000);
  //     handlePauseBgm();
  //   } else if (currentDialogueIndex === 2) {
  //     setTimeout(() => {
  //       playpunchSound();
  //     }, 1000);
  //     handlePlayBgm();
  //   } else if (currentDialogueIndex === 3) {
  //     setTimeout(() => {
  //       playwalkingSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 4) {
  //     setTimeout(() => {
  //       playalarmSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 5) {
  //     setTimeout(() => {
  //       playwalkingSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 6) {
  //     setTimeout(() => {
  //       playalarmSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 7) {
  //     setTimeout(() => {
  //       playwalkingSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 8) {
  //     setTimeout(() => {
  //       playalarmSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 9) {
  //     setTimeout(() => {
  //       playwalkingSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 10) {
  //     setTimeout(() => {
  //       playalarmSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 11) {
  //     setTimeout(() => {
  //       playwalkingSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 12) {
  //     setTimeout(() => {
  //       playalarmSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 13) {
  //     setTimeout(() => {
  //       playwalkingSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 14) {
  //     setTimeout(() => {
  //       playalarmSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 15) {
  //     setTimeout(() => {
  //       playwalkingSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 16) {
  //     setTimeout(() => {
  //       playalarmSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 17) {
  //     setTimeout(() => {
  //       playwalkingSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 18) {
  //     setTimeout(() => {
  //       playalarmSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 19) {
  //     setTimeout(() => {
  //       playwalkingSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 20) {
  //     setTimeout(() => {
  //       playalarmSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 21) {
  //     setTimeout(() => {
  //       playwalkingSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 22) {
  //     setTimeout(() => {
  //       playalarmSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 23) {
  //     setTimeout(() => {
  //       playwalkingSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 24) {
  //     setTimeout(() => {
  //       playalarmSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 25) {
  //     setTimeout(() => {
  //       playwalkingSound();
  //     }, 1000);
  //   } else if (currentDialogueIndex === 26) {
  //     setTimeout(() => {
  //       playalarmSound();
  //     }, 1000);
  //   }
  // }, [currentDialogueIndex]);

  return (
    <>
      <nav id="Navbar" className="fixed top-0 left-0 w-full z-30">
        <div
          id="Logo"
          className="flex flex-wrap items-center justify-between mx-8 mt-4 p-4"
        >
          <div>
            <Link
              to={"/home"}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/images/Logo/icon_web.png"
                className="h-12"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                My Journey
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-5">
            {/* Conditionally render AudioRoom based on window width */}
            {windowWidth >= 1440 && (
              <div id="audios" className="h-auto">
                <div className="relative" onClick={toggleSliderVisibility}>
                  <button
                    type="button"
                    id="sidenavopen"
                    className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  >
                    <svg
                      class="w-6 h-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.5 8.4a5 5 0 0 1 0 7.1m2.9 2.9a9 9 0 0 0 0-12.8m-6.4.5V18a1 1 0 0 1-1.6.7L6 15H4a1 1 0 0 1-1-1v-4c0-.6.4-1 1-1h2l4.4-3.6A1 1 0 0 1 12 6Z"
                      />
                    </svg>
                  </button>
                  {isSliderVisible && (
                    <div className="volume-slider">
                      <input
                        type="range"
                        className="volume"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
            <button
              type="button"
              id="sidenavopen"
              onClick={openNav}
              className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div id="mySidenav" className={`sidenav ${isOpen ? "open" : ""}`}>
            <a href="#" className="closebtn" onClick={closeNav}>
              &times;
            </a>
            <Link onClick={closeNav} to={"/home"}>
              Home
            </Link>
            <Link onClick={closeNav} to={"/roomchapterone"}>
              Story
            </Link>
            <Link onClick={closeNav} to={"/concept"}>
              Concept
            </Link>
            <Link onClick={closeNav} to={"/about"}>
              About-Us
            </Link>
          </div>
        </div>
      </nav>
      
      <div id="page" className={`w-full h-full  text-center items-center ${fadeEffect}`}>
      <div className=" w-full h-full bg-no-repeat lg:bg-cover md:bg-contain  bg-center	" style={{ backgroundImage: `url(${dialogue[currentDialogueIndex].bg})` }}>
        <Link>
          <div className="w-full h-full relative">
            <div
              className=" absolute w-full top-[70%]  left-0 right-0 bottom-0 bg-opacity-50 z-20"
              style={{
                background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 1) 100%)`,
              }}
              
              onClick={() => {
                handleUserClick();
                handleNext();
              }}
            >
              <h1 className="absolute top-[15%] bottom-0 left-0 right-0 font-bold text-2xl  md:text-3xl lg:text-5xl opacity-90">
                {dialogue[currentDialogueIndex].speaker}
              </h1>
              <p className="absolute top-[50%] bottom-0 left-0 right-0 text-base md:text-2xl lg:text-3xl px-5 ">
                {textFullyTyped
                  ? dialogue[currentDialogueIndex].text
                  : displayedText}
              </p>
              <div>
              <svg
                className={`w-8 h-8 absolute md:top-[85%] lg:top-[75%] bottom-0 left-[49%] right-0 text-white ${
                  isAnimating ? "animate-ping" : "animate-bounce"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7.119 8h9.762a1 1 0 0 1 .772 1.636l-4.881 5.927a1 1 0 0 1-1.544 0l-4.88-5.927A1 1 0 0 1 7.118 8Z"
                />
              </svg>
              </div>
            </div>
            {/* <img
              src={dialogue[currentDialogueIndex].bg}
              alt="image description"
              className="h-full w-full  bg-contain"
            /> */}
            <button
              type="button"
              onClick={() => {
                play();
                setOpenModalt(true)
              }}
              className=" absolute transition  lg:top-[72%] z-40  border-dashed border-2  border-emerald-500 lg:left-[92%] md:top-[74%] md:left-[88%]  opacity-[100%]   lg:w-28 md:w-[5rem] h-10 text-base  text-white rounded-lg focus:outline-none focus:ring-2 hover:bg-emerald-600 hover:border-white "
            >
              Skip {">>"}
            </button>
            <button
                type="button"
                onClick={() => {
                  play();
                  handleBack();
                  
                }}
                className=" absolute transition  lg:top-[72%] z-40  border-dashed border-2  border-emerald-500 lg:left-[2%] md:top-[74%] md:left-[5%]  opacity-[100%]   lg:w-28 md:w-[5rem] h-10 text-base  text-white rounded-lg focus:outline-none focus:ring-2 hover:bg-emerald-600 hover:border-white "
              >
                {"<<"} Back 
              </button>
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
          fade
        >
          <Modal.Header className="bg-slate-800" />
          <Modal.Body className="bg-slate-800">
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14  text-white" />
              <h3 className="mb-5 text-sm md:text-lg lg:text-xl font-normal  text-white">
                Chapter 3 ครึ่งแรกจบลงแล้ว กดปุ่มถัดไปเพื่อดำเนินเนื้อเรื่องต่อใน
                Chapter 3 ครึ่งหลัง 
              </h3>
              <div className="flex flex-col md:flex-row justify-center gap-4 ">
                <Link to={"/chapterthree"}>
                  <Button
                    color="success"
                    onClick={() => {
                      setOpenModal(false);
                      play();
                    }}
                  >
                    {" ดำเนินเนื้อเรื่องต่อ "}
                  </Button>
                </Link>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={openModalt}
          size="md"
          onClose={() => {
            play(), setOpenModalt(false);
            setCurrentDialogueIndex(0); // Reset currentIndex to 0
          }}
          popup={true}
          fade={true}
        >
          <Modal.Header className=" bg-slate-800" />
          <Modal.Body className="bg-slate-800">
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14   text-emerald-700 " />
              <h3 className="mb-5 md:text-lg lg:text-xl  text-white">
                ต้องการข้าม Chapter 3  ?  
              </h3>
              <div className="flex flex-col md:flex-row justify-center gap-4 ">
                <Button
                  color="success"
                  onClick={() => {
                    play();
                    setOpenModalt(false);
                    handleButtonClickNext();
                  }}
                >
                  {" Skip "}
                </Button>
                <Button
                  color="gray"
                  onClick={() => {
                    play();
                    setOpenModalt(false);
                    setCurrentDialogueIndex(0);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      </div>
    </>
  );
};

export default ChapterDialogThree;
