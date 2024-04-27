import React, { useState, useEffect, useRef, useContext } from "react";
import { Button, Modal } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { DataContext } from "../../../App";
import useSound from "use-sound";
import "./styles/ChapterOne.css";
import bgm2Sound from "/audios/chapterTwo/touch_some_grass_.mp3";


const ChapterDialogTwo = () => {
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const audioRef = useRef(null);
  const { setColseBgmusic} =
    useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State to store window width
  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);
  const [volume, setVolume] = useState(0.3); // Initial volume value
  
  // const [playalarmSound, { stop: stopAlarmSound }] = useSound(alarmSound, {
  //   volume: volume,
  //   loop: false,
  // });

  const [playBgm, { pause: pauseBgm, stop: stopBgm }] = useSound(bgm2Sound, {
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
      text: "เฮ้อออ สบายจัง...",
      bg: 'https://ik.imagekit.io/vsfmz5htw/Chapter2/image/1.png?updatedAt=1713737838411',
    },
    {
      speaker: "-- Lunar --",
      text: "(ฉันเคยได้ยินว่าปกติท้องฟ้าจะมีสีฟ้าสดใส แต่ทำไมมันถึงกลายเป็นสีส้มนะ)",
      bg: 'https://ik.imagekit.io/vsfmz5htw/Chapter2/image/1.png?updatedAt=1713737838507',
    },
    {
      speaker: "-- Rabbet --",
      text: "ตอนนี้ท้องฟ้ามีสีแดงส้ม เป็นสัญญาญว่าตอนนี้คือตอนเย็นหน่ะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/2.png?updatedAt=1713737838573",
    },
    {
      speaker: "-- Lunar --",
      text: "ตอนเย็น.....ต่อจากนี้ก็จะเป็นกลางคืนใช่ไหม?",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/3.png?updatedAt=1713737838534",
    },
    {
      speaker: "-- Rabbet --",
      text: "ใช่แล้ว และต่อจากนั้น......",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/4.png?updatedAt=1713737838534",
    },
    {
      speaker: "-- Lunar --",
      text:  "ก็จะเป็นวันใหม่ที่สดใสใช่ไหม?",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/5.png?updatedAt=1713737838384",
    },
    {
      speaker: "-- Rabbet --",
      text: "..........",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/5.png?updatedAt=1713737838384",
    },
    {
      speaker: "-- Rabbet --",
      text: "ข้างบนจะเป็นเมืองที่ฉันตกลงมา เมืองด้านบนสุดนั่นแหละนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/6.png?updatedAt=1713737838543",
    },
    {
      speaker: "-- Lunar --",
      text:  "เมืองด้านบนสุดจะเป็นเมืองแบบไหนหรอ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/7.png?updatedAt=1713737838725",
    },
    {
      speaker: "-- Rabbet --",
      text:  "เป็นเมืองที่ผู้คนอาจจะมีชีวิตที่มีความสุข.....ละมั้งนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/8.png?updatedAt=1713737838455",
    },
    {
      speaker: "-- Lunar --",
      text: "นั่นสินะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/9.png?updatedAt=1713737838382",
    },
    {
      speaker: "-- Lunar --",
      text: "สักวันฉันจะได้มีความสุขเหมือนคนที่อยู่ในชั้นนี้หรือชั้นด้านบนได้บ้างรึเปล่านะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/9.png?updatedAt=1713737838382",
    },
    {
      speaker: "-- Rabbet --",
      text:  "สักวันหนึ่ง....นั่นหล่ะนะ....",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/10.png?updatedAt=1713737838785",
    },
    {
      speaker: "-- Rabbet --",
      text:  "อ่า!....ถึงเวลากินข้าวแล้วแหละนะ เราถือโอกาสพักตรงนี้สักหน่อยก็คงไม่เป็นไร",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/11.png?updatedAt=1713737842063",
    },
    {
      speaker: "-- Lunar --",
      text: "จากนั้น Rabbet ก็ได้ตั้งเพิงที่พัก และเอาอะไรสักอย่างที่มีกลิ่นหอมชวนให้น้ำลายหกออกมาจากกล่อง",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/12.png?updatedAt=1713737842595",
    },
    {
      speaker: "-- Lunar --",
      text: "มันคืออะไรหรอ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/13.png?updatedAt=1713737843728",
    },
    {
      speaker: "-- Rabbet --",
      text: "มันคือปลาย่างหน่ะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/14.png?updatedAt=1713737843742",
    },
    {
      speaker: "-- Lunar --",
      text: "เห... ฉันไม่เคยกินมันมาก่อนเลยนี่เป็นครั้งแรกเลยหล่ะ!",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/15.png?updatedAt=1713737842724",
    },
    {
      speaker: "-- Lunar --",
      text: "ง่ำๆ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/16.png?updatedAt=1713737843746",
    },
    {
      speaker: "-- Lunar --",
      text: "อร่อยมากก !!",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/17.png?updatedAt=1713737843914",
    },
    {
      speaker: "-- Lunar --",
      text: "ว่าแต่นายไปเอามาจากไหนหรอ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/18.png?updatedAt=1713737843772",
    },
    {
      speaker: "-- Rabbet --",
      text: " อะ เอ่ออ คือว่า",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/18.png?updatedAt=1713737843268",
    },
    {
      speaker: "-- Rabbet --",
      text: "เปล่าหรอก ฉันหยิบมาจากกระเป๋าหน่ะ ฮ่าฮ่า",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/19.png?updatedAt=1713737843268",
    },
    {
      speaker: "-- Rabbet --",
      text:  "เมื่อความมืดเริ่มปกคลุมท้องฟ้า แสงสว่างจากแคมป์ไฟก็สว่างขึ้นมาก รอบข้างของนาก็มืดสนิท ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/20.png?updatedAt=1713737843840",
    },
    {
      speaker: "-- Lunar --",
      text: " เหลือเพียงความสว่างจากหมู่บ้านริมเขา และแสงสว่างจากหมู่ดาวบนท้องฟ้า ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter2/image/21.png?updatedAt=1713737845561",
    },
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
      handleStopSoundEffects();
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
    if (textFullyTyped && currentDialogueIndex <= 21) {
      handleStopSoundEffects();
      setCurrentDialogueIndex(currentDialogueIndex + 1);
      play();
      setIsAnimating(true); // เริ่มเล่นอนิเมชัน
      // Reset textFullyTyped state for the next dialogue
      setTextFullyTyped(false);
      setTimeout(() => setIsAnimating(false), 1000); // หยุดเล่นอนิเมชันหลังจาก 1 วินาที
    } else if (textFullyTyped && currentDialogueIndex === 22) {
      setFadeEffect("fade-exit-active");
      setTimeout(() => {
        setCurrentDialogueIndex(currentDialogueIndex + 1);
        setFadeEffect("fade-enter-active");
      }, 3000); // 3000ms is the duration of the fade-out effect
      play();
      setTextFullyTyped(true);
      setTimeout(() => setIsAnimating(false), 1000); // หยุดเล่นอนิเมชันหลังจาก 1 วินาที
    } else if (
      textFullyTyped &&
      currentDialogueIndex > 22 &&
      currentDialogueIndex !== dialogue.length - 1
    ) {
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
        setOpenModal(true);
        handlePauseBgm();
      }, 4000);
      handleStopSoundEffects();
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
      navigate("/chapterthreedialog");
    }, 3000); // 3000ms is the duration of the fade-out effect
  };

  useEffect(() => {
    if (currentDialogueIndex === 0) {
      handlePlayBgm();
      setTimeout(() => {
       
      }, 1000);
    } else if (currentDialogueIndex === 1) {
      setTimeout(() => {
       
      }, 1000);
      
    } else if (currentDialogueIndex === 2) {
      setTimeout(() => {
        
      }, 1000);
      handlePlayBgm();
    } else if (currentDialogueIndex === 3) {
      setTimeout(() => {
        
      }, 1000);
    } else if (currentDialogueIndex === 4) {
      setTimeout(() => {
        
      }, 1000);
    } else if (currentDialogueIndex === 5) {
      setTimeout(() => {
        
      }, 1000);
    } else if (currentDialogueIndex === 6) {
      setTimeout(() => {
        
      }, 1000);
    } else if (currentDialogueIndex === 7) {
      setTimeout(() => {
        
      }, 1000);
    } else if (currentDialogueIndex === 8) {
      setTimeout(() => {
       
      }, 1000);
    } else if (currentDialogueIndex === 9) {
      setTimeout(() => {
        
      }, 1000);
    } else if (currentDialogueIndex === 10) {
      setTimeout(() => {
       
      }, 1000);
    } else if (currentDialogueIndex === 11) {
      setTimeout(() => {
       
      }, 1000);
    } else if (currentDialogueIndex === 12) {
      setTimeout(() => {
       
      }, 1000);
    } else if (currentDialogueIndex === 13) {
      setTimeout(() => {
      }, 1000);
    } else if (currentDialogueIndex === 14) {
      setTimeout(() => {
     
      }, 1000);
    } else if (currentDialogueIndex === 15) {
      setTimeout(() => {
      
      }, 1000);
    } else if (currentDialogueIndex === 16) {
      setTimeout(() => {
      
      }, 1000);
    } else if (currentDialogueIndex === 17) {
      setTimeout(() => {
      
      }, 1000);
    } else if (currentDialogueIndex === 18) {
      setTimeout(() => {
      
      }, 1000);
    } else if (currentDialogueIndex === 19) {
      setTimeout(() => {
      
      }, 1000);
    } else if (currentDialogueIndex === 20) {
      setTimeout(() => {
      
      }, 1000);
    } else if (currentDialogueIndex === 21) {
      setTimeout(() => {
      
      }, 1000);
    } else if (currentDialogueIndex === 22) {
      setTimeout(() => {
     
      }, 1000);
    } else if (currentDialogueIndex === 23) {
      setTimeout(() => {
     
      }, 1000);
    } else if (currentDialogueIndex === 24) {
      setTimeout(() => {
   
      }, 1000);
    } else if (currentDialogueIndex === 25) {
      setTimeout(() => {
   
      }, 1000);
    } else if (currentDialogueIndex === 26) {
      setTimeout(() => {

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
              className=" absolute  lg:top-[72%] z-40  border-dashed border-2  border-emerald-500 lg:left-[92%] md:top-[74%] md:left-[88%]  opacity-[100%]   lg:w-28 md:w-[5rem] h-10 text-base  text-white rounded-lg focus:outline-none focus:ring-2 hover:bg-emerald-600 hover:border-white "
            >
              Skip {">>"}
            </button>
            <button
                type="button"
                onClick={() => {
                  play();
                  handleBack();
                  
                }}
                className=" absolute  lg:top-[72%] z-40  border-dashed border-2  border-emerald-500 lg:left-[2%] md:top-[74%] md:left-[88%]  opacity-[100%]   lg:w-28 md:w-[5rem] h-10 text-base  text-white rounded-lg focus:outline-none focus:ring-2 hover:bg-emerald-600 hover:border-white "
              >
                {"<<"} Back 
              </button>
          </div>
        </Link>
        <Modal
          show={openModal}
          size="md"
          onClose={() => {
            play(); 
            setOpenModal(false);
            setCurrentDialogueIndex(0); // Reset currentIndex to 0
            handleStopBgm();
            setFadeEffect("fade-enter-active");
          }}
          popup={true}
          fade={true}
        >
          <Modal.Header className=" bg-slate-800" />
          <Modal.Body className="bg-slate-800">
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-sm md:text-lg lg:text-xl font-normal text-gray-500 dark:text-gray-400">
                Chapter 2 จบลงแล้ว กดปุ่มถัดไปเพื่อดำเนินเนื้อเรื่องต่อใน
                Chapter 3 หรือ กลับไปหน้าเลือก Chapter
              </h3>
              <div className="flex flex-col md:flex-row justify-center gap-4 ">
                <Button
                  color="success"
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

        <Modal
          show={openModalt}
          size="md"
          onClose={() => {
            play(), setOpenModalt(false);
          }}
          popup={true}
          fade={true}
        >
          <Modal.Header className=" bg-slate-800" />
          <Modal.Body className="bg-slate-800">
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14   text-emerald-700 " />
              <h3 className="mb-5 md:text-lg lg:text-xl  text-white">
                ต้องการข้าม Chapter 2  ? 
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

export default ChapterDialogTwo;
