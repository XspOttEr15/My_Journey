import React from 'react'
import '../styles/intro.css'
import { useGLTF } from "@react-three/drei";
import { Link } from 'react-router-dom';
useGLTF.preload("/models/fky3_room.glb");

const intro = () => {
  return (
    <div>
      <div className="instructions-overlay">
      <div className="overlay"></div>
      <div className='lg:text-5xl lg:mb-10 md:text-4xl md:mb-5 '>คำเตือน: สิ่งที่ควรทราบก่อนเข้าเว็บไซต์</div>
      <hr/>
      <p className='lg:text-2xl md:text-lg text-center pt-5  lg:px-44 md:px-24'>การใช้สื่อที่มีการผสมผสานกันระหว่าง เว็บไซต์ และ แอนิมชัน จะสามารถทำให้ผู้ชมมีการปฏิสัมพันธ์กับตัวสื่อที่ใช้ และยังสามารถเพิ่มรูปแบบการนำเสนอที่นอกเหนือจาการใช้เว็บไซต์แบบปกติให้เปลี่ยนเป็น เว็บไซต์แบบสามมิติ โดยการใช้ Three.js เพื่อใช้แสดงผลวัตถุสามมิติในเว็บไซต์ และใช้ React เพื่อช่วยให้เว็บไซต์สามารถโหลดข้อมูลได้อย่างต่อเนื่องและรวดเร็ว เมื่อผู้ชมสามารถดูวัตถุสามมิติในรูปแบบของเว็บไซต์คาดว่าจะสามารถช่วยให้เกิดความเข้าใจในเนื้อหาและ เข้าใจถึงรูปร่างของฉาก และตัวละครมากยิ่งขึ้น ด้วยวิธีการดังกล่าวจะสามารถทำให้ควบคุมพื้นที่ในการนำเสนอให้เป็นเปรียบเสมือนกับโลกจำลองของเนื้อเรื่องภายในเว็บไซต์ได้อีกด้วย </p>
      <Link to={"/home"}>
      <button id="button"  type="button" class=" mt-16 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg  text-2xl px-5 py-2.5 text-center me-2 mb-2">เข้าสู่เว็บไซต์</button>
      </Link>
    </div>
    </div>
  )
}

export default intro