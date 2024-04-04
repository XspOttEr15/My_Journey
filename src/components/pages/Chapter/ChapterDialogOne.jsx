import React, { useState, useEffect, useRef, useContext } from "react";
import { Button, Modal } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { DataContext } from "../../../App";
import useSound from "use-sound";
import "./styles/ChapterOne.css";
import bgmSound from "/audios/chapterOne/bgm1.mp3";
import walkingSound from "/audios/chapterOne/walking.mp3";
import punchSound from "/audios/chapterOne/punch.mp3";
import alarmSound from "/audios/chapterOne/alarm.mp3";

const ChapterDialogOne = () => {
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const audioRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State to store window width
  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);
  const [volume, setVolume] = useState(10); // Initial volume value
  const [playwalkingSound, { stop: stopWalkingSound }] = useSound(
    walkingSound,
    { volume: volume / 100, loop: false }
  );
  const [playpunchSound, { stop: stopPunchSound }] = useSound(punchSound, {
    volume: volume / 100,
    loop: false,
  });
  const [playalarmSound, { stop: stopAlarmSound }] = useSound(alarmSound, {
    volume: volume / 100,
    loop: false,
  });
  const [playBgm, { pause: pauseBgm, stop: stopBgm }] = useSound(bgmSound, {
    volume: 0.05,
    loop: true,
  });
  const [textFullyTyped, setTextFullyTyped] = useState(false);
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(""); // Track displayed text
  const [typingSpeed, setTypingSpeed] = useState(30); // Adjust typing speed as needed
  const [openModal, setOpenModal] = useState(false);
  const soundUrl = "/sound_effects/ButtonPush.mp3";
  const [play] = useSound(soundUrl);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dialogue, setDialogue] = useState([
    {
      speaker: "-- Character Name --",
      text: ".....ฉันอยู่ที่ไหน......",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Character Name --",
      text: "/กำลังแก้ไขข้อผิดพลาด/(✖▂✖)",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img2.png?updatedAt=1711190708064",
    },
    {
      speaker: "-- Lunar --",
      text: "คุณเป็นอะไรรึเปล่า",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Character Name --",
      text: ".../ระบบขัดข้อง Memory บางส่วนเกิดความเสียหายไม่สามารถกู้ระบบได้/...",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img2.png?updatedAt=1711190708064",
    },
    {
      speaker: "-- Lunar --",
      text: "ทำไมนายถึงตกลงมาที่ชั้นล่างสุดที่นี่หล่ะ ?",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Name ?? --",
      text: "ฉัน....จำไม่ได้......ดูเหมือนว่าระบบความทรงจำของฉันจะเสียหาย",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Name ?? --",
      text: "เธอ...ชื่อว่าอะไรหรอ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: "อะ.....เอ่อ ฉันชื่อ [Lunar]",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Name ?? --",
      text: "[Lunar] ...... ส่วนฉัน....... ขอโทษนะฉันจำเรื่องของตัวเองไม่ได้เลย ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Name ?? --",
      text: "ถ้าไม่เป็นการรบกวน เธอช่วยตั้งชื่อใหม่ให้ฉันหน่อยได้ไหม ?",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: "จะดีหรอ.....เอ่อ.....",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: "นายมีหูเหมือนกระต่าย และเป็นหุ่นยนต์... ถ้างั้นชื่อ [Rabbet] ใช้ได้รึเปล่า?",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Name ?? --",
      text: "[Rabbet] ใช้ได้เลยหนิ ขอบคุณนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: "แล้วจากนี้ไปนายจะทำยังไงต่อ จะกลับขึ้นไปที่เมืองด้านบนไหม?",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Rabbet --",
      text: "ถึงจะจำเหตุผลไม่ได้ แต่ฉันก็คงต้องกลับขึ้นไปแหละนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: ".......",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: "ถ้าอย่างนั้น ฉันขอออกเดินทางไปด้วยได้ไหม ?",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Rabbet --",
      text: "หะ!! เธอแน่ใจแล้วหรอ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: "มันเคยเป็นความฝันของฉันหน่ะ วันหนึ่งฉันอยากออกเดินทาง อยากจะพบเจอสิ่งใหม่ๆ ก่อนที่จะอายุ 18 หน่ะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Rabbet --",
      text: "ถ้าเธอออกเดินทางไป แล้วผู้คนที่นี่จะไม่เป็นห่วงเธอเอาหรอ ?",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: "ไม่เป็นไร ฉันไม่มีครอบครัว หรือเพื่อนที่คอยห่วงใยหรอก",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Rabbet --",
      text: "ฉันขอโทษนะที่ทำให้นึกถึงเรื่องนั้น",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: "อื้อ ไม่เป็นไร",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: "ถ้าอย่างงั้น ขอฝากเนื้อ ฝากตัวด้วยนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Rabbet --",
      text: "เช่นกันนะ ขอให้เป็นการเดินทางที่น่าจดจำ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
    {
      speaker: "-- Lunar --",
      text: "ฉันจับมือของ [Rabbet] และเรื่องราวของพวกเรากำลังจะเริ่มต้นขึ้น",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/img1.png?updatedAt=1711190708389",
    },
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
    stopWalkingSound();
    stopPunchSound();
    stopAlarmSound();
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
  };

  const handleNext = () => {
    if (textFullyTyped && currentDialogueIndex < dialogue.length - 1) {
      handleStopSoundEffects();
      setCurrentDialogueIndex(currentDialogueIndex + 1);
      play();
      setIsAnimating(true); // เริ่มเล่นอนิเมชัน
      // Reset textFullyTyped state for the next dialogue
      setTextFullyTyped(false);
      setTimeout(() => setIsAnimating(false), 1000); // หยุดเล่นอนิเมชันหลังจาก 1 วินาที
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
      navigate("/chaptertwo");
    }, 3000); // 3000ms is the duration of the fade-out effect
  };

  useEffect(() => {
    if (currentDialogueIndex === 0) {
      handlePlayBgm();
      setTimeout(() => {
        playalarmSound();
      }, 1000);
    } else if (currentDialogueIndex === 1) {
      setTimeout(() => {
        playwalkingSound();
      }, 1000);
      handlePauseBgm();
    } else if (currentDialogueIndex === 2) {
      setTimeout(() => {
        playpunchSound();
      }, 1000);
      handlePlayBgm();
    } else if (currentDialogueIndex === 3) {
      setTimeout(() => {
        playwalkingSound();
      }, 1000);
    } else if (currentDialogueIndex === 4) {
      setTimeout(() => {
        playalarmSound();
      }, 1000);
    } else if (currentDialogueIndex === 5) {
      setTimeout(() => {
        playwalkingSound();
      }, 1000);
    } else if (currentDialogueIndex === 6) {
      setTimeout(() => {
        playalarmSound();
      }, 1000);
    } else if (currentDialogueIndex === 7) {
      setTimeout(() => {
        playwalkingSound();
      }, 1000);
    } else if (currentDialogueIndex === 8) {
      setTimeout(() => {
        playalarmSound();
      }, 1000);
    } else if (currentDialogueIndex === 9) {
      setTimeout(() => {
        playwalkingSound();
      }, 1000);
    } else if (currentDialogueIndex === 10) {
      setTimeout(() => {
        playalarmSound();
      }, 1000);
    } else if (currentDialogueIndex === 11) {
      setTimeout(() => {
        playwalkingSound();
      }, 1000);
    } else if (currentDialogueIndex === 12) {
      setTimeout(() => {
        playalarmSound();
      }, 1000);
    } else if (currentDialogueIndex === 13) {
      setTimeout(() => {
        playwalkingSound();
      }, 1000);
    } else if (currentDialogueIndex === 14) {
      setTimeout(() => {
        playalarmSound();
      }, 1000);
    } else if (currentDialogueIndex === 15) {
      setTimeout(() => {
        playwalkingSound();
      }, 1000);
    } else if (currentDialogueIndex === 16) {
      setTimeout(() => {
        playalarmSound();
      }, 1000);
    } else if (currentDialogueIndex === 17) {
      setTimeout(() => {
        playwalkingSound();
      }, 1000);
    } else if (currentDialogueIndex === 18) {
      setTimeout(() => {
        playalarmSound();
      }, 1000);
    } else if (currentDialogueIndex === 19) {
      setTimeout(() => {
        playwalkingSound();
      }, 1000);
    } else if (currentDialogueIndex === 20) {
      setTimeout(() => {
        playalarmSound();
      }, 1000);
    } else if (currentDialogueIndex === 21) {
      setTimeout(() => {
        playwalkingSound();
      }, 1000);
    } else if (currentDialogueIndex === 22) {
      setTimeout(() => {
        playalarmSound();
      }, 1000);
    } else if (currentDialogueIndex === 23) {
      setTimeout(() => {
        playwalkingSound();
      }, 1000);
    } else if (currentDialogueIndex === 24) {
      setTimeout(() => {
        playalarmSound();
      }, 1000);
    } else if (currentDialogueIndex === 25) {
      setTimeout(() => {
        playwalkingSound();
      }, 1000);
    } else if (currentDialogueIndex === 26) {
      setTimeout(() => {
        playalarmSound();
      }, 1000);
    }
  }, [currentDialogueIndex]);

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
                        max="100"
                        step="10"
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

      <div id="page" className={`w-screen h-screen text-center ${fadeEffect}`}>
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
              <svg
                className={`w-8 h-8 absolute top-[75%] bottom-0 left-[49%] right-0 text-white ${
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
            play(), setOpenModal(false);
            setCurrentDialogueIndex(0); // Reset currentIndex to 0
            handleStopBgm();
          }}
          popup={true}
          fade={true}
        >
          <Modal.Header className=" bg-slate-800" />
          <Modal.Body className="bg-slate-800">
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-sm md:text-lg lg:text-xl font-normal text-gray-500 dark:text-gray-400">
                Chapter 1 จบลงแล้ว กดปุ่มถัดไปเพื่อดำเนินเนื้อเรื่องต่อใน
                Chapter 2 หรือ กลับไปหน้าเลือก Chapter
              </h3>
              <div className="flex flex-col md:flex-row justify-center gap-4 ">
                <Button
                  color="failure"
                  onClick={() => {
                    play();
                    setOpenModal(false);
                    handleButtonClickNext();
                  }}
                >
                  {" ดำเนินเนื้อเรื่อง "}
                </Button>
                <Button
                  color="gray"
                  onClick={() => {
                    play();
                    setOpenModal(false);
                    handleButtonClickRoom();
                  }}
                >
                  กลับไปหน้าเลือก Chapter
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ChapterDialogOne;
