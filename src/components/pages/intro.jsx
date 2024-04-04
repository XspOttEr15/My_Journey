import React, { useState, useEffect, useContext } from "react";
import "../styles/intro.css";
import { useNavigate } from "react-router-dom";
import { useGLTF } from "@react-three/drei";
import { DataContext } from "../../App";
useGLTF.preload("/models/fky3_room.glb");



const Intro = () => {
  const [fadeEffect, setFadeEffect] = useState("fade-enter");
  const navigate = useNavigate();
  const { setColseBgmusic,CloseNavbar,setCloseNavbar } = useContext(DataContext);

    useEffect(() => {
      setColseBgmusic(true)
    }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeEffect(fadeEffect + " fade-enter-active");
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleButtonClick = () => {
    setFadeEffect("fade-exit-active");
    setTimeout(() => {
      navigate("/home");
    }, 3000); // 3000ms is the duration of the fade-out effect
  };

  return (
    <div className={`instructions-overlay ${fadeEffect}`}>
      <div className="lg:text-5xl lg:mb-10 md:text-4xl md:mb-5 ">
        คำชี้แจง: สิ่งที่ควรทราบก่อนเข้าเว็บไซต์
      </div>
      <hr />
      <p className="lg:text-2xl md:text-lg text-center pt-5  lg:px-44 md:px-24">
        เว็บไซต์ My Journey เป็นเว็บไซต์ที่นำเสนอโดยใช้สื่อที่มีการผสมผสานกันระหว่าง เว็บไซต์ และ แอนิเมชันสามมิติมาแสดงผลบนเว็บไซต์
        ซึ่งจะสามารถทำให้ผู้ใช้งานมีการปฏิสัมพันธ์กับตัวสื่อต่าง ๆ ไม่ว่าจะเป็นสื่อสองมิติ ภาพ วิดิโอ และ โมเดลสามมิติบนเว็บไซต์ 
        เว็บไซต์ My Journey เป็นการเพิ่มรูปแบบการนำเสนอที่นอกเหนือจาการใช้เว็บไซต์แบบปกติให้เปลี่ยนเป็น
        เว็บไซต์แบบสามมิติ โดยอุปกรณ์ที่รองรับ ได้แก่ PC และ Notebook จะแสดงผลได้ดีที่สุดบน PC ขนาดหน้าจอ 1920x1080, เว็บไซต์ My Journey ออกแบบให้ทำงานกับบราว์เซอร์ที่รองรับ WebGL ในการแสดงผลโมเดลสามมิติบนเว็บไซต์ ได้แก่ Google Chrome, Safari, และ Microsoft Edge แนะนำให้ใช้บราว์เซอร์ Microsoft Edge ในการเข้าชมเว็บไซต์   
      </p>
      <button
        onClick={handleButtonClick}
        type="button"
        className=" animate-pulse mt-16 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
      >
        เข้าสู่เว็บไซต์
      </button>
    </div>
    
  );
};

export default Intro;
