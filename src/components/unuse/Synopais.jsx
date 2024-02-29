import { Box, Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { motion } from "framer-motion";



const Synopais = () => {
  return (
    <>
      <div className="bg-white dark:bg-black pr-16 pl-16  pt-20 pb-16 text-center">
        <motion.h1
          className=" text-5xl sm:text-8xl md:text-8xl  xl:text-9xl pt-5 mb-5 "
          data-text="SYNOPSIS"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 2,
          }}
        >
          SYNOPSIS
        </motion.h1>
        <motion.div className=" flex flex-wrap pt-10 gap-10 md:flex-wrap sm:flex-warp xl:flex-nowrap items-center transition-all duration-500 ">
          <motion.div
            className=" w-full h-96 sm:w-full sm:h-25 md:w-full md:h-30 xl:w-2/6 xl:h-50 pl-6 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 4,
            }}
          >
            <Suspense>
            <Canvas
              shadows
              camera={{ position: [2, 1, 3], fov: 25 }}
              className=" bg-black dark:bg-white rounded-3xl "
            >
              <mesh>
                <boxGeometry />
                <meshBasicMaterial color={"#EB7E5B"} />
                <Html
                  occlude
                  distanceFactor={3.5}
                  position={[0, 0, 0.51]}
                  transform
                >
                  <span className=" font-bold" color="black">
                    3D Models
                  </span>
                </Html>
              </mesh>
              <OrbitControls />
            </Canvas>
            </Suspense>
          </motion.div>
          
          <div className="xl:w-4/6 p-7">
            <motion.p
              className="   text-3xl text-black text-justify   dark:text-blue-100 p-5 md:p-0 lg:p-0 sm:p-0 ssm:p-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 4,
              }}
            >
               เรื่องราวของเด็กสาว Lunar ที่ทำงานอยู่ที่เมืองใต้ดินซึ่งเป็นเมืองที่อยู่ในจุดที่ลึกที่สุดของหลุม โดยเมืองนี้ไม่มีแสงอาทิตย์ส่องถึงมีแต่เศษเหล็กและการทำอุตสาหกรรมวันหนึ่งระหว่าง Lunar กำลังทำงานเก็บเศษเหล็กได้บังเอิญไปเจอกับเศษเหล็กที่มีหน้าตาแปลกประหลาดเหมือนกระต่ายอยู่ในกองเศษเหล็ก แต่ในเวลานั้นได้มีเศษเหล็กตกลงมาและเศษเหล็กที่หน้าตาเหมือนกระต่ายนั้นได้ปกป้อง Lunar ไว้จากนั้น Lunar จึงได้นำหุ่นตัวนี้ไปซ่อมและตั้งชื่อว่า Rabbet โดยตัว Lunar ต้องการจะออกเดินทางเพื่อให้รู้ว่าโลกภายนอกเป็นอย่างไร
            </motion.p>
          </div>
        </motion.div>

        <div className=" flex flex-wrap pt-20 gap-10 sm:flex-wrap-reverse xl:flex-nowrap items-center md:flex-wrap-reverse ssm:flex-wrap-reverse  transition-all duration-500 mb-20">
          <div className="xl:w-4/6 p-7">
            <motion.p
              className="text-3xl text-black text-justify dark:text-blue-100 p-5 md:p-0 lg:p-0 sm:p-0 ssm:p-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 4,
              }}
            >
              จึงเกิดเป็นเรื่องราวการเดินทางระหว่าง Lunar และหุ่นยนต์ Rabbet ผ่านเมืองทั้ง 4 เมืองที่มีการใช้พลังงานหลากหลายรูปแบบ ตั้งแต่การใช้น้ำมัน ถ่านหิน พลังงานจากน้ำ พลังงานจากลม และพลังงานนิวเคลียร์ เพื่อที่จะสัมผัสว่าโลกด้านบนนั้นเป็นอย่างไรแก่นของเรื่องจะเป็นไปในทิศทางของ Dystopia หรือ โลกหลังจาก ล่มสลาย ประกอบกับ Science Fiction หรือ Sci-fi เพื่อใช้ในการเล่าเรื่องที่เกินความเป็นจริง และสามารถใช้องค์ประกอบที่ไม่ต้องการคำอธิบายแต่เน้นเพื่อความกลมกลืน และความสวยงามเท่านั้น
            </motion.p>
          </div>
          <motion.div
            className=" w-full h-96 sm:w-full sm:h-25 md:w-full md:h-30 xl:w-2/6 xl:h-50  pr-6 "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 4,
            }}
          >
            <Suspense>
            <Canvas
              shadows
              camera={{ position: [2, 1, 3], fov: 25 }}
              className=" bg-black dark:bg-white rounded-3xl "
            >
              <mesh>
                <boxGeometry />
                <meshBasicMaterial color={"#EB7E5B"} />
                <Html
                  distanceFactor={3.5}
                  position={[0.5, 0, 0.51]}
                  transform={true}
                >
                  <span className="font-bold" color="black">
                    3D Models
                  </span>
                </Html>
              </mesh>
              <OrbitControls />
            </Canvas>
            </Suspense>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Synopais;
