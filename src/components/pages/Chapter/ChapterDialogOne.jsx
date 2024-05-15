import React, { useState, useEffect, useRef, useContext } from "react";
import { Button, Modal } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { DataContext } from "../../../App";
import useSound from "use-sound";
import "./styles/ChapterOne.scss";
import bgmSound from "/audios/chapterOne/Factory_amb.mp3";

const ChapterDialogOne = () => {
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const audioRef = useRef(null);
  const { setColseBgmusic } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State to store window width
  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);
  const [volume, setVolume] = useState(0.2); // Initial volume value


  // const [playpunchSound, { stop: stopPunchSound }] = useSound(punchSound, {
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
      text: "แล้วจากนี้ไปนายจะทำยังไงต่อ จะกลับขึ้นไปที่เมืองด้านบนไหม",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_1&3.png?updatedAt=1712913575126",
    },
    {
      speaker: "-- Rabbet --",
      text: "ถึงจะจำเหตุผลไม่ได้ แต่ฉันก็คงต้องกลับขึ้นไปแหละนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_2.png?updatedAt=1712913575129",
    },
    {
      speaker: "-- Lunar --",
      text: "ถ้าอย่างนั้น ฉันขอออกเดินทางไปด้วยได้ไหม?",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_1&3.png?updatedAt=1712913575126",
    },
    {
      speaker: "-- Rabbet --",
      text: "หะ เธอแน่ใจแล้วหรอ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_1&3.png?updatedAt=1712913575126",
    },
    {
      speaker: "-- Lunar --",
      text: "มันเคยเป็นความฝันของฉันหน่ะ วันหนึ่งฉันอยากออกเดินทาง อยากจะพบเจอสิ่งใหม่ๆ ก่อนที่จะอายุ 18 หน่ะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_1&3.png?updatedAt=1712913575126",
    },
    {
      speaker: "-- Rabbet --",
      text: "ถ้าเธอออกเดินทางไป แล้วผู้คนที่นี่จะไม่เป็นห่วงเธอเอาหรอ?",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_4.png?updatedAt=1712913575242",
    },
    {
      speaker: "-- Lunar --",
      text: "ไม่เป็นไร ฉันไม่มีครอบครัว หรือเพื่อนที่คอยห่วงใยหรอก",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_4.png?updatedAt=1712913575242",
    },
    {
      speaker: "-- Rabbet --",
      text: "ฉันขอโทษนะที่ทำให้นึกถึงเรื่องนั้น",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_5.png?updatedAt=1712913575277",
    },
    {
      speaker: "-- Lunar --",
      text: "ไม่เป็นไรหรอก ถึงแม้จะรู้สึกผูกพันกับที่นี่ แต่ก็อยากออกไปท่อง โลก บ้างหน่ะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_5.png?updatedAt=1712913575277",
    },
    {
      speaker: "-- Rabbet --",
      text: "“โลก... งั้นหรอ”",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_6.png?updatedAt=1712913575138",
    },
    {
      speaker: "-- Lunar --",
      text: "ถ้าอย่างงั้น ขอฝากเนื้อฝากตัวด้วยนะเพื่อนใหม่ของฉัน",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_7%20.png?updatedAt=1712913575261",
    },
    {
      speaker: "-- Rabbet --",
      text: "เช่นกันนะ ขอให้เป็นการเดินทางที่น่าจดจำ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_7%20.png?updatedAt=1712913575261",
    },
    {
      speaker: "-- Lunar --",
      text: "ฉันจับมือของ  Rabbet และเรื่องราวของพวกเรากำลังจะเริ่มต้นขึ้น",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_7%20.png?updatedAt=1712913575261",
    },

    // fade out and fade in
    {
      speaker: "-- Lunar --",
      text: "หลังจากได้ตัดสินใจที่จะออกเดินทางไปพร้อมกับ Rabbet",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_8%20.png?updatedAt=1712913575270",
    },
    {
      speaker: "-- Lunar --",
      text: "การเดินทางของพวกเรานั้นฉันเข้าใจว่ามันจะไม่ได้ออกมาสวยหรูมากนัก แต่ฉันมั่นใจว่าฉันเลือกในสิ่งที่ฉันอยากจะทำมันมานานแล้วและจะไม่เสียใจภายหลังแน่นอน",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_8%20.png?updatedAt=1712913575270",
    },
    {
      speaker: "-- Lunar --",
      text: "ก่อนจะออกเดินทางฉันพา Rabbet ไปช่วยเก็บของที่บ้านของฉันก่อนที่เขตพักอาศัยก่อน แล้วจึงได้เริ่มออกเดินทาง ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_9.png?updatedAt=1712913575276",
    },
    {
      speaker: "-- Lunar --",
      text: "Rabbet ยังใช้พลังบางอย่างในการปกป้องตัวฉัน มันเป็นเหมือนพลังงานที่สามารถช่วยป้องกันจากอากาศและมลพิษให้กับฉันได้",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_10%20.png?updatedAt=1712913578266",
    },
    {
      speaker: "-- Lunar --",
      text: "จากนั้นฉันได้บอกลาเพื่อนร่วมงานของฉันก่อนจะออกเดินทาง",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_11.png?updatedAt=1712913579324",
    },
    {
      speaker: "-- Lunar --",
      text: "ระหว่างการเดินทางออกจากเมืองนี้ Rabbet ก็ได้พบกับการผลิตพลังงาน และอุตสาหกรรมต่างๆ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_12.png?updatedAt=1712913578440",
    },
    {
      speaker: "-- Rabbet --",
      text: "ที่นี่ดูเหมือนจะใช้วิธีการผลิตพลังงานแบบยุคเก่า ที่สร้างมลพิษอยู่ตลอดเวลา",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_13%20.png?updatedAt=1712913579063",
    },
    {
      speaker: "-- Lunar --",
      text: " ใกล้จะถึงเขตชาญเมืองแล้วแหละนะ ฉันพูดพลางปาดเหงื่อ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_14.png?updatedAt=1712913578502",
    },
    {
      speaker: "-- Lunar --",
      text: " ฉันอยากจะรู้จังเลยนะ ว่าเมืองด้านบนจะมีคุณภาพชีวิตที่ดีกว่าเมืองด้านล่างขนาดไหน",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_14.png?updatedAt=1712913578502",
    },
    {
      speaker: "-- Rabbet --",
      text: "ที่เมืองด้านบนนั้นก็ใช่ว่าจะดีเสมอไปหรอกนะ มันก็มีสิ่งที่ต้องแลกมาหลายๆ อย่างอยู่เสมอซะทุกอย่างหน่ะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_14.png?updatedAt=1712913578502",
    },
    {
      speaker: "-- Lunar --",
      text: "หลังจากที่พวกเราเดินทางผ่านเมืองกันมาก็ได้มาถึงน้ำพุใจกลางของเมือง",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_15%20.png?updatedAt=1712913579095",
    },
    {
      speaker: "-- Lunar --",
      text: " ใกล้จะถึงเขตชายเมืองแล้วแหละนะ ฉันพูดพลางหยุดที่ด้านหน้าน้ำพุ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_15%20.png?updatedAt=1712913579095",
    },
    {
      speaker: "-- Rabbet --",
      text: " สภาพอากาศดูเลวร้ายกว่าที่ประเมินเอาไว้มาก ผู้คนที่นี่ต้องทนอยู่กับมลพิษขนาดไหนกันนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_15%20.png?updatedAt=1712913579095",
    },
    {
      speaker: "-- Lunar --",
      text: "มันพอจะมีวิธีแก้ไขสิ่งเหล่านี้บ้างไหม",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_16.png?updatedAt=1712913578619",
    },
    {
      speaker: "-- Rabbet --",
      text: "ตราบเท่าที่มนุษย์ยังต้องพึ่งพาการผลิตพลังงานเหล่านี้อยู่ ก็จะสร้างมลพิษพวกนี้แบบไม่รู้จบ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_16.png?updatedAt=1712913578619",
    },
    {
      speaker: "-- Lunar --",
      text: "สภาพอากาศที่เลวร้ายอย่างนี้ไม่มีวิธีแก้ไขมันเลยหรอ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_16.png?updatedAt=1712913578619",
    },
    {
      speaker: "-- Rabbet --",
      text: "เกรงว่าจะไม่ ถ้าหากเราไม่ได้แก้ไขที่จุดเริ่มต้นของมัน",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_16.png?updatedAt=1712913578619",
    },
    {
      speaker: "-- Lunar --",
      text: "แล้วถ้าเราเปลี่ยนวิธีการผลิตพลังงานหล่ะ?",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel%20_17.png?updatedAt=1712913575097",
    },
    {
      speaker: "-- Rabbet --",
      text: "กระบวนการ การเปลี่ยนแปลงระบบมันไม่ได้ง่ายดายขนาดนั้นหรอกนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel%20_17.png?updatedAt=1712913575097",
    },
    {
      speaker: "-- Lunar --",
      text: "ตะ..แต่ว่า...",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_18%20.png?updatedAt=1712913579289",
    },
    {
      speaker: "-- Rabbet --",
      text: "คิดซะว่านี่คือกรรมตามสนองที่มนุษย์กระทำกับโลกนี้ไว้ก็ได้",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_18%20.png?updatedAt=1712913579289",
    },
    {
      speaker: "-- Lunar --",
      text: "ฉันคิดตามในสิ่งที่พูดภายในใจว่าถ้าทำอะไรสักอย่างได้ก็คงจะดี พลางคิดในหัวตัดพ้อตัวเองว่าฉันก็ไม่ได้มีความสามารถ หรือความรู้อะไรสักหน่อย",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_19%20.png?updatedAt=1712913579324",
    },
    {
      speaker: "-- Rabbet --",
      text: "มนุษย์นี่สื่ออารมณ์ผ่านสีหน้าง่ายจังเลยนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_20.png?updatedAt=1712913579292",
    },
    {
      speaker: "-- Lunar --",
      text: ".....ก็ใช่อยู่หรอกนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_21%20.png?updatedAt=1712913581555",
    },
    {
      speaker: "-- Rabbet --",
      text: "ขอโทษที่ทำให้เธอคิดมากนะ  ฉันแค่อยากสื่อสารว่าเรื่องพวกนี้ไม่ใช่ว่าแก้ไขไม่ได้ แต่การปรับเปลี่ยนนั้นต้องใช้ทั้งทรัพยากร และเวลา",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_22.png?updatedAt=1712913581705",
    },
    {
      speaker: "-- Lunar --",
      text: "อื้อไม่เป็นไร ฉันต่างหากที่ต้องขอโทษด้วย งั้นเรื่องนี้เจ๊ากันนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_22.png?updatedAt=1712913581705",
    },
    {
      speaker: "-- Rabbet --",
      text: " อีกนิดก็จะถึงลิฟต์ขนส่งแล้ว ฉันว่าเราพักกันสักเดี๋ยวก่อนนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_23%20.png?updatedAt=1712913581817",
    },
    {
      speaker: "-- Lunar --",
      text: "ถึงนายจะเป็นหุ่นยนต์ติด AI ก็ดูพูดคล่องกว่าหุ่นยนต์ตัวอื่นๆมากเลยนะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_24%20.png?updatedAt=1712913581838",
    },
    {
      speaker: "-- Rabbet --",
      text: "ฉันก็อยากรู้เหมือนกันว่าฉันถูกสร้างขึ้นมาเพื่อจุดประสงค์อะไรกันแน่นะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_24%20.png?updatedAt=1712913581838",
    },
    {
      speaker: "-- Rabbet --",
      text: "ถึงแม้ว่าฉันจะไม่รู้จุดประสงค์ของการทำอุตสาหกรรมจำนวนมากขนาดนี้ แต่ฉันคิดว่ามันต้องมีเหตุผลอะไรแน่นอน",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_25.png?updatedAt=1712913575274",
    },
    {
      speaker: "-- Lunar --",
      text: "เพราะฉะนั้น เราถึงต้องไปหาความจริงที่โลกภายนอกยังไงหล่ะ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Chapter1/image/City1_rencel_25.png?updatedAt=1712913575274",
    },
    //Fade ดำ ปิด chapetert 1
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
    const newVolume = e.target.value;
    setVolume(newVolume);
  };

  const handleNext = () => {
    if (textFullyTyped && currentDialogueIndex <= 11) {
      handleStopSoundEffects();
      setCurrentDialogueIndex(currentDialogueIndex + 1);
      play();
      setIsAnimating(true); // เริ่มเล่นอนิเมชัน
      // Reset textFullyTyped state for the next dialogue
      setTextFullyTyped(false);
      setTimeout(() => setIsAnimating(false), 1000); // หยุดเล่นอนิเมชันหลังจาก 1 วินาที
    } else if (textFullyTyped && currentDialogueIndex === 12) {
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
      currentDialogueIndex > 12 &&
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
      navigate("/chaptertwo");
    }, 3000); // 3000ms is the duration of the fade-out effect
  };

  useEffect(() => {
    if (currentDialogueIndex === 0) {
      
      setTimeout(() => {
       
      }, 1000);
    } else if (currentDialogueIndex === 1) {
      setTimeout(() => {
       
      }, 1000);
      
    } else if (currentDialogueIndex === 2) {
      setTimeout(() => {
        
      }, 1000);
     
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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

      <div
        id="page"
        className={`w-full h-full  text-center items-center  ${fadeEffect}`}
      >
        <div
          className=" w-full h-full bg-no-repeat   lg:bg-cover md:bg-cover bg-center	"
          style={{
            backgroundImage: `url(${dialogue[currentDialogueIndex].bg})`,
          }}
        >
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
                <p className="absolute top-[50%] bottom-0 left-0 right-0 text-base md:text-2xl lg:text-3xl   px-5 ">
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                className=" absolute transition  lg:top-[72%]   z-40  border-dashed border-2  border-emerald-500 md:left-[5%] md:top-[74%] lg:left-[2%]  opacity-[100%]   lg:w-28 md:w-[5rem] h-10 text-base  text-white rounded-lg focus:outline-none focus:ring-2 hover:bg-emerald-600 hover:border-white "
              >
                {"<<"} Back 
              </button>
            </div>
          </Link>

          <Modal
            show={openModal}
            size="md"
            onClose={() => {
              play(), setOpenModal(false);
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
                  Chapter 1 จบลงแล้ว กดปุ่มถัดไปเพื่อดำเนินเนื้อเรื่องต่อใน
                  Chapter 2 หรือ กลับไปหน้าเลือก Chapter
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
                  ต้องการข้าม Chapter 1 ? 
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

export default ChapterDialogOne;
