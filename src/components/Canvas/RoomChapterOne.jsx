import React, { useContext, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PointerLockControls,
  useHelper,
  useGLTF,
  Html,
  KeyboardControls,
  Stats,
  StatsGl,
} from "@react-three/drei";
import { Floor, Room, Wall } from "./Models/Fky3_room";
import { Physics, RigidBody } from "@react-three/rapier";
import {
  Selection,
  EffectComposer,
  Outline,
  Vignette,
  Bloom,
  Select,
} from "@react-three/postprocessing";
import * as THREE from "three";
import "./styles/RoomChapterOne.scss";
import { useControls } from "leva";
import { Button, Modal } from "flowbite-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import useSound from "use-sound";
import Ecctrl from "ecctrl";
import { EcctrlJoystick } from "ecctrl";
import Instructions from "./Instructions";
import InstructionsT from "./Instructions_mobile";
import { Perf } from "r3f-perf";

export const RoomChapterOne = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [maxVelLimit, setmaxVelLimit] = useState(2.5);
  const [disableFollowCamPos, setDisableFollowCamPos] = useState({
    x: 0,
    y: 2,
    z: 0,
  });
  const [disableFollowCamTarget, setdisableFollowCamTarget] = useState({
    x: 0,
    y: 0,
    z: -2,
  });
  const [jumpVel, setjumpVel] = useState(4);
  const [selector, setSelector] = useState("#Skip");
  const [openModal, setOpenModal] = useState(false);
  const [openModaltwo, setOpenModaltwo] = useState(false);
  const [openModalthree, setOpenModalthree] = useState(false);
  const [openModaldoor, setOpenModaldoor] = useState(false);
  const [openModalTutorial, setOpenModalTutorial] = useState(false);
  const [disableFollowCam, setdisableFollowCam] = useState(false);
  const [loopcamera, setLoopcamera] = useState(false);
  const [loopcameratwo, setLoopcameratwo] = useState(false);
  const [loopcamerathree, setLoopcamerathree] = useState(false);
  const [loopcamerafour, setLoopcamerafour] = useState(false);
  const [target, setTarget] = useState(1);
  const [targettwo, setTargetwo] = useState(1);
  const [targetthree, setTargethree] = useState(1);
  const [targetfour, setTargefour] = useState(1);
  const { setColseBgmusic, setCloseNavbar, isLocked, setIsLocked } =
    useContext(DataContext);
  const [htmltext, setHtmltext] = useState(true);
  const soundUrl = "/sound_effects/ButtonPush.mp3";
  const [play] = useSound(soundUrl);
  const [dialogue, setDialogue] = useState([
    {
      speaker: "-- Deepsun1 --",
      text: "Deepsun1 ภาพแวดล้อมย่ำแย่มีแต่หมอกควัน มีฝุ่นจากอุตสาหกรรมมีการก่อสร้างบ้านเมืองแบบยุคเก่าใช้พลังงานจากน้ำมันปิโตรเลียมใช้แท่นขุดเจาะน้ำมันแบบขวานและแบบเสาดิ่ง",
      bg: "https://ik.imagekit.io/vsfmz5htw/StoryRoom/Deepsun1.png?updatedAt=1711183025564",
      button: "Choose Chapter 1",
      link: "/chapterone",
    },
    {
      speaker: "-- Solarwind2 --",
      text: "Solarwind2 สภาพแวดล้อม เกือบจะดีแต่มีฝุ่นควันจากชั้นล่างบนบังทัศนวิสัยถึงแม้จะมีการกรองอากาศไปบ้างแล้วเมืองนี้จะเริ่มมีการเพาะปลูกพืชพรรณ และใช้พลังงานจากลมเป็นหลัก",
      bg: "https://ik.imagekit.io/vsfmz5htw/StoryRoom/Solarwind2.jpg?updatedAt=1711183025189",
      button: "Choose Chapter 2",
      link: "/chaptertwo",
    },
    {
      speaker: "-- PeaceFusion3 --",
      text: "PeaceFusion3 เป็นเมืองที่มีวิทยาการสูงที่สุด มีผู้คนหนาแน่นมีตึกสูงมากมายใช้พลังงานจากเตาปติกรเป็นหลัก ผสมผสานระหว่างธรรมชาติและเทคโนโลยี เป็นเมืองที่ทุกคนใฝ่ฝันอยากเข้ามาอยู่อาศัย",
      bg: "https://ik.imagekit.io/vsfmz5htw/StoryRoom/PeaceFusion3.jpg?updatedAt=1711183024150",
      button: "Choose Chapter 3",
      link: "/chapterthreedialog",
    },
    // Add more dialogue objects as needed
  ]);

  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const handleNext = () => {
    if (currentDialogueIndex < dialogue.length - 1) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
      // Handle choices or character changes based on the dialogue progress
    } else {
      // End of dialogue
    }
  };

  const handleBack = () => {
    if (currentDialogueIndex > 0) {
      setCurrentDialogueIndex(currentDialogueIndex - 1);
      // Handle choices or character changes based on the dialogue progress
    } else {
      // End of dialogue
    }
  };

  const [dialogueT, setDialogueT] = useState([
    {
      speaker: "-- Control (PC) --",
      text: " กดปุ่ม W A S D ในการขยับ , กดปุ่ม Shift ค้างร่วมกับปุ่ม W A S D ในการวิ่ง และกดปุ่ม SPACEBAR เพื่อกระโดด ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Tutorial/1.png?updatedAt=1712174319081",
      button: "Close Tutorial",
    },
    {
      speaker: "-- Control (Tablet) --",
      text: "ใช้ปุ่ม Joystick ด้านซ้ายในการขยับ หากเลื่อน Joystick เพียงเล็กน้อยจะเป็นการเดิน หากเลื่อน Joystick มากจะเป็นการวิ่ง และปุ่มด้านขวาใช้ในการกระโดด",
      bg: "https://ik.imagekit.io/vsfmz5htw/Tutorial/2.png?updatedAt=1712174319110",
      button: "Close Tutorial",
    },
    {
      speaker: "-- How to play --",
      text: "ผู้ใช้จะต้องอินเทอร์แรคท์กับวัตถุต่าง ๆ ภายในห้อง โดยวัตถุที่สามารถอินเทอร์แรคท์ได้จะมีแสงออกมาเมื่อนำ Cursor Mouse กลางจอไปวางบนวัตถุดังกล่าว ดังภาพ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Tutorial/3.png?updatedAt=1712174659426",
      button: "Close Tutorial",
    },
    {
      speaker: "-- Tutorial --",
      text: "กดปุ่ม ESC จะเป็นการแสดงหน้า Tutorial และ SildeBar",
      bg: "https://ik.imagekit.io/vsfmz5htw/Tutorial/4.png?updatedAt=1712174319122",
      button: "Close Tutorial",
    },
    // Add more dialogue objects as needed
  ]);

  const [currentDialogueTIndex, setCurrentDialogueTIndex] = useState(0);
  const handleNextT = () => {
    if (currentDialogueTIndex < dialogueT.length - 1) {
      setCurrentDialogueTIndex(currentDialogueTIndex + 1);
      // Handle choices or character changes based on the dialogue progress
    } else {
      // End of dialogue
    }
  };

  const handleBackT = () => {
    if (currentDialogueTIndex > 0) {
      setCurrentDialogueTIndex(currentDialogueTIndex - 1);
      // Handle choices or character changes based on the dialogue progress
    } else {
      // End of dialogue
    }
  };

  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ];

  useEffect(() => {
    setColseBgmusic(false);
    setCloseNavbar("Room");
    setIsLocked(false);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className=" w-full h-screen ">
        <div className="tutorial">
          <h3 className=" text-2xl mt-1">กด ESC เพื่อแสดง Menu Tutorial</h3>
        </div>
        <div className="aim"></div>
        {windowWidth < 1440 && <EcctrlJoystick />}
        {windowWidth >= 1440 && (
          <Instructions
            isVisible={!isLocked}
            setOpenModalTutorial={setOpenModalTutorial}
            setSelector={setSelector}
          />
        )}
        {windowWidth < 1440 && (
          <InstructionsT
            isVisible={!isLocked}
            setOpenModalTutorial={setOpenModalTutorial}
            setSelector={setSelector}
          />
        )}
        <Canvas
          frameloop="demand"
          shadows="soft"
          camera={[0, 3, 0]}
          style={{ width: "100%", height: "100%", display: "relative" }}
        >
          {/* <Perf position="top-left" /> */}
          {/* <StatsGl/>  */}

          <color attach="background" args={["#638689"]} />
          <fog attach="fog" args={["#569BF3", 1, 200]} />
          {/* debug */}
          <Physics
            interpolation={false}
            colliders={false}
            gravity={[0, -9.81, 0]}
            timeStep="vary"
          >
            <KeyboardControls map={keyboardMap}>
              <Ecctrl
                debug="false"
                camInitDis={-0.01} // camera intial position
                camInitDir={{ x: 0, y: -3.1, z: 0 }} // Camera initial rotation direction (in rad)
                camMaxDis={-0.03} // Maximum camera distance
                camMinDis={-0.01} // camera zoom in closest position
                camFollowMult={100} // give any big number here, so the camera follows the character instantly
                turnVelMultiplier={1} // character won't move before turn completed
                turnSpeed={100} // give it big turning speed to prevent turning wait time
                mode="CameraBasedMovement" // character's rotation will follow camera's rotation in this mode
                disableFollowCam={disableFollowCam}
                disableFollowCamPos={disableFollowCamPos} // Corrected: Camera position when the follow camera feature is disabled
                disableFollowCamTarget={disableFollowCamTarget} // Camera lookAt target when the follow camera feature is disabled
                position={[-2, 4, 3]}
                maxVelLimit={maxVelLimit}
                jumpVel={jumpVel}
                dampingC={0.12}
              >
                {/* Replace your model here */}
                <Player />
                {/* First Person Camera */}
                {!disableFollowCam && (
                  <PointerLockControls
                    onLock={() => setIsLocked(true)}
                    onUnlock={() => setIsLocked(false)}
                    selector={selector}
                  />
                )}
              </Ecctrl>
            </KeyboardControls>
            <Room />
            <Floor />
            <Wall />
            <mesh
              onClick={() => {
                setdisableFollowCam(true),
                  setLoopcamera(true),
                  setHtmltext(false),
                  play();
              }}
            >
              <Book htmltext={htmltext} setHtmltext={setHtmltext} />
            </mesh>
            <mesh
              onClick={() => {
                setdisableFollowCam(true),
                  setHtmltext(false),
                  setLoopcamerathree(true),
                  play();
              }}
            >
              <Paper
                htmltext={htmltext}
                setHtmltext={setHtmltext}
                loopcamerathree={loopcamerathree}
                setLoopcamerathree={setLoopcamerathree}
                targetthree={targetthree}
                setTargethree={setTargethree}
                setOpenModalthree={setOpenModalthree}
              />
            </mesh>
            <mesh
              onClick={() => {
                setdisableFollowCam(true),
                  setLoopcameratwo(true),
                  setHtmltext(false);
                play();
              }}
            >
              <MBook
                htmltext={htmltext}
                setHtmltext={setHtmltext}
                loopcameratwo={loopcameratwo}
                setLoopcameratwo={setLoopcameratwo}
                targettwo={targettwo}
                setTargetwo={setTargetwo}
                setOpenModaltwo={setOpenModaltwo}
              />
            </mesh>
            <mesh
              onClick={() => {
                setdisableFollowCam(true),
                  setLoopcamerafour(true),
                  setHtmltext(false);
                play();
              }}
            >
              <Door
                htmltext={htmltext}
                setHtmltext={setHtmltext}
                openModaldoor={openModaldoor}
                setOpenModaldoor={setOpenModaldoor}
                loopcamerafour={loopcamerafour}
                setLoopcamerafour={setLoopcamerafour}
                targetfour={targetfour}
                setTargefour={setTargefour}
              />
            </mesh>
            <EffectsPost
              setOpenModal={setOpenModal}
              loopcamera={loopcamera}
              setLoopcamera={setLoopcamera}
              target={target}
              setTarget={setTarget}
            />
          </Physics>
          <Lights />
        </Canvas>

        {/* Modal tutorial */}
        <motion.div
          key={openModalTutorial}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Modal
            size={"7xl"}
            show={openModalTutorial}
            onClose={() => {
              setOpenModalTutorial(false);
              setdisableFollowCam(false);
              setIsLocked(false), play();
              setCurrentDialogueTIndex(0);
            }}
            style={{
              cursor: 'url("/images/CustomMouses/default32.png"), pointer',
            }}
          >
            <motion.svg
              className="w-12 h-12  text-white absolute top-[50%] bottom-[50%] left-[0%] opacity-60 z-[50]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 10 16"
              onClick={() => {
                handleBackT(), play();
              }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              style={{
                cursor: 'url("/images/CustomMouses/pointer32.png"), pointer',
              }}
            >
              <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
            </motion.svg>

            <motion.svg
              className="w-12 h-12 text-white absolute top-[50%] bottom-[50%] right-[0%] opacity-60 z-[50]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 10 16"
              onClick={() => {
                handleNextT(), play();
              }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              style={{
                cursor: 'url("/images/CustomMouses/pointer32.png"), pointer',
              }}
            >
              <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
            </motion.svg>
            <Modal.Header className=" bg-slate-800">
              <span className="text-white">Tutorial</span>
            </Modal.Header>

            <Modal.Body className="bg-slate-800 relative">
              <div id="city" className="lg:flex md:flex mx-5 m-5  ">
                <div className=" w-full h-auto m-2 ">
                  <motion.img
                    src={dialogueT[currentDialogueTIndex].bg}
                    alt="..."
                    className="rounded-3xl h-full w-full z-10"
                    key={currentDialogueTIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <motion.div
                  className="m-2 bg-gray-700 rounded-xl w-[100%] flex flex-col items-center justify-center"
                  key={currentDialogueTIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 25 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.h1 className="text-4xl lg:text-4xl font-extrabold text-white text-center pt-5">
                    {dialogueT[currentDialogueTIndex].speaker}
                  </motion.h1>
                  <motion.p className="lg:text-xl p-6 text-center">
                    {dialogueT[currentDialogueTIndex].text}
                  </motion.p>
                  {currentDialogueTIndex === 3 && (
                    <div className="text-center m-3">
                      <button
                        onClick={() => {
                          play();
                          setOpenModalTutorial(false);
                        }}
                        style={{
                          cursor:
                            'url("/images/CustomMouses/pointer.png"), pointer',
                        }}
                        type="button"
                        id="Skip"
                        className="text-white btn third font-medium rounded-lg text-sm px-8 py-4 text-center me-2 mb-2"
                      >
                        {dialogueT[currentDialogueTIndex].button}
                      </button>
                    </div>
                  )}
                </motion.div>
              </div>
            </Modal.Body>
          </Modal>
        </motion.div>

        {/* Modal book */}
        <motion.div
          key={openModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Modal
            size={"7xl"}
            show={openModal}
            onClose={() => {
              setOpenModal(false);
              setdisableFollowCam(false);
              setIsLocked(true), setHtmltext(true);
              setTarget(1);
              play();
              setSelector(".instructions-overlay");
            }}
            style={{
              cursor: 'url("/images/CustomMouses/default32.png"), pointer',
            }}
          >
            <motion.svg
              className="w-12 h-12  text-white absolute top-[50%] bottom-[50%] left-[0%] opacity-60 z-[50]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 10 16"
              onClick={() => {
                handleBack(), play();
              }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              style={{
                cursor: 'url("/images/CustomMouses/pointer32.png"), pointer',
              }}
            >
              <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
            </motion.svg>

            <motion.svg
              className="w-12 h-12 text-white absolute top-[50%] bottom-[50%] right-[0%] opacity-60 z-[50]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 10 16"
              onClick={() => {
                handleNext(), play();
              }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              style={{
                cursor: 'url("/images/CustomMouses/pointer32.png"), pointer',
              }}
            >
              <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
            </motion.svg>
            <Modal.Header className=" bg-slate-800">
              <span className="text-white">SELECT CHAPTER PAGE</span>
            </Modal.Header>

            <Modal.Body className="bg-slate-800 relative">
              <div id="city" className="lg:flex md:flex mx-5 m-5  ">
                <div className=" w-full h-auto m-2 ">
                  <motion.img
                    src={dialogue[currentDialogueIndex].bg}
                    alt="..."
                    className="rounded-3xl h-full w-full z-10 select-none"
                    key={currentDialogueIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <motion.div
                  className="m-2 bg-gray-700 rounded-xl w-[100%] flex flex-col items-center justify-center"
                  key={currentDialogueIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 25 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.h1 className="text-4xl lg:text-4xl font-extrabold text-white text-center pt-5">
                    {dialogue[currentDialogueIndex].speaker}
                  </motion.h1>
                  <motion.p className="lg:text-xl p-6 text-center">
                    {dialogue[currentDialogueIndex].text}
                  </motion.p>
                  <Link to={dialogue[currentDialogueIndex].link}>
                    <div className="text-center  m-3">
                      <button
                        onClick={play}
                        style={{
                          cursor:
                            'url("/images/CustomMouses/pointer.png"), pointer',
                        }}
                        type="button"
                        className=" btn third text-white  font-medium rounded-lg text-sm px-8 py-4 text-center me-2 mb-2"
                      >
                        {dialogue[currentDialogueIndex].button}
                      </button>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </Modal.Body>
          </Modal>
        </motion.div>

        {/* Modal book Concept */}

        <Modal
          show={openModaltwo}
          size="md"
          onClose={() => {
            setOpenModaltwo(false);
            setdisableFollowCam(false);
            setHtmltext(true);
            setTargetwo(1);
            play();
            setSelector(".instructions-overlay");
          }}
          popup
        >
          <Modal.Header className="bg-slate-800" />
          <Modal.Body className="class bg-slate-800">
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-200" />
              <h3 className="mb-5 text-sm md:text-lg lg:text-xl font-normaltext-gray-400">
                คุณแน่ใจว่าจะไปหน้า Concept ?
              </h3>
              <div className="flex flex-col md:flex-row justify-center gap-4 ">
                <Link to={"/concept"}>
                  <Button
                    className="btn third"
                    color="none"
                    onClick={() => {
                      setOpenModaltwo(false);
                      play();
                    }}
                  >
                    {" ไปหน้า Concept"}
                  </Button>
                </Link>
                <Button
                  className="btn third2"
                  color="none"
                  onClick={() => {
                    setOpenModaltwo(false);
                    setdisableFollowCam(false);
                    setHtmltext(true);
                    setTargetwo(1);
                    play();
                  }}
                >
                  ยกเลิก
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        {/* Modal board Concept */}

        <Modal
          show={openModalthree}
          size="md"
          onClose={() => {
            setOpenModalthree(false);
            setdisableFollowCam(false);
            setHtmltext(true);
            setTargethree(1);
            play();
            setSelector(".instructions-overlay");
          }}
          popup
        >
          <Modal.Header className="bg-slate-800" />
          <Modal.Body className="class bg-slate-800">
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-200" />
              <h3 className="mb-5 text-sm md:text-lg lg:text-xl font-normaltext-gray-400">
                คุณแน่ใจว่าจะไปหน้า About Us ?
              </h3>
              <div className="flex flex-col md:flex-row justify-center gap-4 ">
                <Link to={"/about"}>
                  <Button
                    className="third"
                    color="none"
                    onClick={() => {
                      setOpenModalthree(false);
                      play();
                    }}
                  >
                    {" ไปหน้า About Us"}
                  </Button>
                </Link>
                <Button
                  className="third2"
                  color="none"
                  onClick={() => {
                    setOpenModalthree(false);
                    setdisableFollowCam(false);
                    setHtmltext(true);
                    setTargethree(1);
                    play();
                    setIsLocked(true), setSelector(".instructions-overlay");
                  }}
                >
                  ยกเลิก
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        {/* Modal Doors Home */}

        <Modal
          show={openModaldoor}
          size="md"
          onClose={() => {
            setOpenModaldoor(false);
            setdisableFollowCam(false);
            setHtmltext(true);
            setTargefour(1);
            play();
            setSelector(".instructions-overlay");
          }}
          popup
        >
          <Modal.Header className="bg-slate-800" />
          <Modal.Body className="class bg-slate-800">
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-200" />
              <h3 className="mb-5 text-sm md:text-lg lg:text-xl font-normaltext-gray-400">
                คุณแน่ใจว่าจะไปหน้า Home page ?
              </h3>
              <div className="flex flex-col md:flex-row justify-center gap-4 ">
                <Link to={"/home"}>
                  <Button
                    color="none"
                    className="third"
                    onClick={() => {
                      setOpenModaldoor(false);
                      play();
                    }}
                  >
                    {" ไปหน้า Home"}
                  </Button>
                </Link>
                <Button
                  color="none"
                  className="third2"
                  onClick={() => {
                    setOpenModaldoor(false);
                    setdisableFollowCam(false);
                    setHtmltext(true);
                    setTargefour(1);
                    play();
                    setIsLocked(true), setSelector(".instructions-overlay");
                  }}
                >
                  ยกเลิก
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
export default RoomChapterOne;

const Player = () => {
  return (
    <mesh position={[0, 0, 0]} visible={false}>
      <capsuleGeometry args={[0.3, 0.7, 1]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
};

// Light
const Lights = () => {
  const ref = useRef();
  const helper = useHelper(ref, THREE.PointLightHelper, 0, "red");
  const { color, distance, intensity, decay, position } = useControls({
    color: "#ffffff",
    distance: 10,
    intensity: 3,
    decay: 1,
    position: [0, 3.5, 0],
  });
  return (
    <>
      <pointLight
        ref={ref}
        position={position}
        color={color}
        intensity={intensity}
        decay={decay}
        distance={distance}
        castShadow
        receiveShadow
      />

      <pointLight
        ref={ref}
        position={[0, 3.5, 3]}
        color={color}
        intensity={1}
        decay={decay}
        distance={distance}
      />

      <pointLight
        ref={ref}
        position={[0, 3.5, -3]}
        color={color}
        intensity={1}
        decay={decay}
        distance={distance}
      />
    </>
  );
};

// Effect Compo
export const EffectsPost = ({
  loopcamera,
  setLoopcamera,
  setOpenModal,
  target,
  setTarget,
}) => {
  const vignetteConfig = useControls("vignette", {
    enabled: true,
    offset: { value: 0.1, min: 0, max: 1 },
    darkness: { value: 0.92, min: 0, max: 1 },
  });
  const bloomConfig = useControls("bloom", {
    enabled: true,
    luminanceThreshold: { value: 0.35, min: 0, max: 2 },
    luminanceSmoothing: { value: 0.01, min: 0, max: 2 },
    intensity: { value: 1.4, min: 0, max: 2 },
    mipmapBlur: true,
  });

  const outline = useControls("outline", {
    enabled: true,
    visibleEdgeColor: "#ffffff",
    hiddenEdgeColor: "#ffffff",
    blur: true,
    width: { value: 1000 },
    edgeStrength: { value: 2.5 },
  });

  // camera book movement

  useEffect(() => {
    setClicked(loopcamera);
    console.log(loopcamera);
  }, [loopcamera]);

  useEffect(() => {
    setCurrentTarget(target);
    console.log(target);
  }, [target]);

  const [clicked, setClicked] = useState(false);
  const [currentTarget, setCurrentTarget] = useState(1);
  const [bothTargetsReached, setBothTargetsReached] = useState(false);
  const targetPosition1 = new THREE.Vector3(0, 3, -1);
  const targetPosition2 = new THREE.Vector3(0, 2, -1);
  let targetPosition;

  useFrame((state, delta) => {
    if (clicked) {
      const zoomSpeed = 2.0 * delta; // Adjust the speed for smoother animation

      // Set the current target position based on the state
      if (currentTarget === 1) {
        targetPosition = targetPosition1;
      } else {
        targetPosition = targetPosition2;
      }

      // Interpolate camera position towards the target
      state.camera.position.lerp(targetPosition, zoomSpeed);
      state.camera.lookAt(0, 0, -1.9);
      state.camera.updateProjectionMatrix();

      // Stop zooming when close to the target
      if (state.camera.position.distanceTo(targetPosition) < 0.1) {
        setCurrentTarget((prevTarget) => (prevTarget === 1 ? 2 : 3));
      }
      // Check if both target positions are reached
      if (currentTarget === 3) {
        setBothTargetsReached(true);
      }
      if (currentTarget === 3) {
        setOpenModal(true);
        setLoopcamera(false); // Stop zooming after both targets are reached
        setTarget(3);
        document.exitPointerLock();
      }
    }
  });

  return (
    <>
      <Selection>
        <EffectComposer disableNormalPass autoClear={false}>
          {vignetteConfig.enabled && <Vignette {...vignetteConfig} />}
          {bloomConfig.enabled && <Bloom {...bloomConfig} />}
          {outline.enabled && <Outline {...outline} />}
        </EffectComposer>
        <mesh>
          <Book />
          <MBook />
          <Paper />
          <Door />
        </mesh>
      </Selection>
    </>
  );
};

export const Book = ({ htmltext, setHtmltext, ...props }) => {
  const { nodes, materials } = useGLTF("/models/rooms3_t.glb ");
  const ref = useRef();
  const [hovered, hover] = useState(null);
  const [closelabel, Setcloselabel] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    Setcloselabel(htmltext);
  }, [htmltext]);

  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed" colliders="cuboid">
        <Select enabled={hovered}>
          <mesh
            castShadow
            ref={ref}
            {...props}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
          >
           
      <mesh castShadow receiveShadow geometry={nodes.pCube47.geometry} material={materials.M_maintable} />
      
            <group position={[-0.3, 1, -1.5]}>
              {!htmltext ? null : (
                <Html
                  occlude
                  zIndexRange={[1, 0]}
                  sprite={false}
                  onOcclude={setHidden}
                  position={[0.3, 0, -0.2]}
                  scale={0.1}
                  transform
                >
                  <div
                    className={`label noselect ${
                      hidden ? "label--hidden" : ""
                    }`}
                  >
                    <div className="label__tu">LUNAR's BOOK</div>
                    <div className="label__name">
                      Click to Start your Journey
                    </div>
                  </div>
                </Html>
              )}
            </group>
          </mesh>
        </Select>
      </RigidBody>
    </group>
  );
};

export const MBook = ({
  targettwo,
  setTargetwo,
  loopcameratwo,
  setLoopcameratwo,
  htmltext,
  setHtmltext,
  setOpenModaltwo,
  ...props
}) => {
  const { nodes, materials } = useGLTF("/models/rooms3_t.glb");
  const [hovered, hover] = useState(null);
  const ref = useRef();
  const [closelabel, Setcloselabel] = useState(false);
  const soundUrl = "/sound_effects/ButtonPush.mp3";
  const [play] = useSound(soundUrl);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    Setcloselabel(htmltext);
  }, [htmltext]);

  useEffect(() => {
    setEbookClicked(loopcameratwo);
  }, [loopcameratwo]);

  useEffect(() => {
    setCurrentTarget(targettwo);
  }, [targettwo]);

  const [Ebookclicked, setEbookClicked] = useState(false);
  const [currentTarget, setCurrentTarget] = useState(1);
  const targetPosition1 = new THREE.Vector3(-2.8, 1.4, -3.5);
  const targetPosition2 = new THREE.Vector3(-2.8, 1.2, -3.5);
  let targetPosition;

  useFrame((state, delta) => {
    if (Ebookclicked) {
      const zoomSpeed = 2.0 * delta; // Adjust the speed for smoother animation

      // Set the current target position based on the state
      if (currentTarget === 1) {
        targetPosition = targetPosition1;
      } else {
        targetPosition = targetPosition2;
      }

      // Interpolate camera position towards the target
      state.camera.position.lerp(targetPosition, zoomSpeed);
      state.camera.lookAt(-2.1, 1.3, -4.2);
      state.camera.updateProjectionMatrix();

      // Stop zooming when close to the target
      if (state.camera.position.distanceTo(targetPosition) < 0.1) {
        setCurrentTarget((prevTarget) => (prevTarget === 1 ? 2 : 3));
      }
      // Check if both target positions are reached
      if (currentTarget === 3) {
        setTargetwo(3);
        setOpenModaltwo(true);
        setLoopcameratwo(false);
        document.exitPointerLock();
      }
    }
  });

  return (
    <>
      <group {...props} dispose={null} position={[0, 0, 0]}>
        <RigidBody type="fixed" colliders="cuboid">
          <Select enabled={hovered}>
            <mesh
              castShadow
              ref={ref}
              onPointerOver={() => hover(true)}
              onPointerOut={() => hover(false)}
            >
              <mesh castShadow receiveShadow geometry={nodes.pCube32.geometry} material={materials.M_bookcase} />
              <group position={[-2.4, 1.3, -4.2]}>
                {!htmltext ? null : (
                  <Html
                    occlude
                    zIndexRange={[1, 0]}
                    onOcclude={setHidden}
                    position={[0.3, 0, 0.1]}
                    scale={0.1}
                    transform
                    sprite={false}
                  >
                    <div
                      className={`label noselect ${
                        hidden ? "label--hidden" : ""
                      }`}
                    >
                      <div className="label__tu">Concept</div>
                      <div className="label__name">
                        Click to Go to Concept page
                      </div>
                    </div>
                  </Html>
                )}
              </group>
            </mesh>
          </Select>
        </RigidBody>
      </group>
    </>
  );
};

export const Paper = ({
  targetthree,
  setTargethree,
  loopcamerathree,
  setLoopcamerathree,
  htmltext,
  setHtmltext,
  setOpenModalthree,
  ...props
}) => {
  const { nodes, materials } = useGLTF("/models/rooms3_t.glb ");
  const ref = useRef();
  const [hovered, hover] = useState(null);
  const [closelabel, Setcloselabel] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    Setcloselabel(htmltext);
  }, [htmltext]);

  // camera book movement

  useEffect(() => {
    setPaperclicked(loopcamerathree);
  }, [loopcamerathree]);

  useEffect(() => {
    setCurrentTarget(targetthree);
  }, [targetthree]);

  const [Paperclicked, setPaperclicked] = useState(false);
  const [currentTarget, setCurrentTarget] = useState(1);
  const [bothTargetsReached, setBothTargetsReached] = useState(false);
  const targetPosition1 = new THREE.Vector3(2.5, 2, -2);
  const targetPosition2 = new THREE.Vector3(2.6, 2, -3);
  let targetPosition;

  useFrame((state, delta) => {
    if (Paperclicked) {
      const zoomSpeed = 2.0 * delta; // Adjust the speed for smoother animation

      // Set the current target position based on the state
      if (currentTarget === 1) {
        targetPosition = targetPosition1;
      } else {
        targetPosition = targetPosition2;
      }

      // Interpolate camera position towards the target
      state.camera.position.lerp(targetPosition, zoomSpeed);
      state.camera.lookAt(2, 1.7, -5.2);
      state.camera.updateProjectionMatrix();

      // Stop zooming when close to the target
      if (state.camera.position.distanceTo(targetPosition) < 0.1) {
        setCurrentTarget((prevTarget) => (prevTarget === 1 ? 2 : 3));
      }
      // Check if both target positions are reached
      if (currentTarget === 3) {
        setBothTargetsReached(true);
      }
      if (currentTarget === 3) {
        setTargethree(3);
        setOpenModalthree(true);
        setLoopcamerathree(false);
        document.exitPointerLock();
      }
    }
  });

  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed" colliders="cuboid">
        <Select enabled={hovered}>
          <mesh
            castShadow
            ref={ref}
            {...props}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
          >
        <group position={[2.888, -0.303, -5.503]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.pPlane2.geometry} material={materials.M_maintable} position={[-0.389, 0, 0.256]} />
        <mesh castShadow receiveShadow geometry={nodes.pPlane1.geometry} material={materials.M_maintable} position={[-1.163, 0.17, -0.267]} rotation={[0, -0.448, 0]} scale={0.8} />
        <mesh castShadow receiveShadow geometry={nodes.pPlane3.geometry} material={materials.M_maintable} position={[-1.289, 0, -0.067]} rotation={[0, -0.445, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.pPlane4.geometry} material={materials.M_maintable} position={[-0.523, 0.17, -0.457]} rotation={[0, -0.484, 0]} scale={0.8} />
        <mesh castShadow receiveShadow geometry={nodes.pPlane5.geometry} material={materials.M_maintable} position={[0.806, -0.011, 0.206]} rotation={[0.007, 0.183, 0.042]} />
        <mesh castShadow receiveShadow geometry={nodes.pPlane6.geometry} material={materials.M_maintable} position={[-0.981, 0, -0.414]} rotation={[0, -0.925, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.pPlane7.geometry} material={materials.M_maintable} position={[-1.149, 0.282, -0.376]} rotation={[0, -0.158, 0]} scale={0.668} />
      </group>

            <group position={[1.6, 0, -4.5]}>
              {!htmltext ? null : (
                <Html
                  occlude
                  onOcclude={setHidden}
                  position={[0.9, 1.6, 0]}
                  zIndexRange={[1, 0]}
                  scale={0.2}
                  transform
                  sprite={false}
                >
                  <div
                    className={`label noselect ${
                      hidden ? "label--hidden" : ""
                    }`}
                  >
                    <div className="label__tu">About Us</div>
                    <div className="label__name">
                      Click to Go to About-us page
                    </div>
                  </div>
                </Html>
              )}
            </group>
          </mesh>
        </Select>
      </RigidBody>
    </group>
  );
};

export const Door = ({
  targetfour,
  setTargefour,
  loopcamerafour,
  setLoopcamerafour,
  htmltext,
  setHtmltext,
  setOpenModaldoor,
  ...props
}) => {
  const { nodes, materials } = useGLTF("/models/rooms3_t.glb");
  const ref = useRef();
  const [hovered, hover] = useState(null);
  const [closelabel, Setcloselabel] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    Setcloselabel(htmltext);
  }, [htmltext]);

  // camera book movement

  useEffect(() => {
    setDoorclicked(loopcamerafour);
  }, [loopcamerafour]);

  useEffect(() => {
    setCurrentTarget(targetfour);
  }, [targetfour]);

  const [Doorclicked, setDoorclicked] = useState(false);
  const [currentTarget, setCurrentTarget] = useState(1);
  const [bothTargetsReached, setBothTargetsReached] = useState(false);
  const targetPosition1 = new THREE.Vector3(-2, 2, 3);
  const targetPosition2 = new THREE.Vector3(-2, 2, 3);
  let targetPosition;

  useFrame((state, delta) => {
    if (Doorclicked) {
      const zoomSpeed = 2.0 * delta; // Adjust the speed for smoother animation

      // Set the current target position based on the state
      if (currentTarget === 1) {
        targetPosition = targetPosition1;
      } else {
        targetPosition = targetPosition2;
      }

      // Interpolate camera position towards the target
      state.camera.position.lerp(targetPosition, zoomSpeed);
      state.camera.lookAt(-2, 1.5, 5);
      state.camera.updateProjectionMatrix();

      // Stop zooming when close to the target
      if (state.camera.position.distanceTo(targetPosition) < 0.3) {
        setCurrentTarget((prevTarget) => (prevTarget === 1 ? 2 : 3));
      }
      // Check if both target positions are reached
      if (currentTarget === 3) {
        setBothTargetsReached(true);
      }
      if (currentTarget === 3) {
        setTargefour(3);
        setOpenModaldoor(true);
        setLoopcamerafour(false);
        document.exitPointerLock();
      }
    }
  });

  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed" colliders="cuboid">
        <Select enabled={hovered}>
          <mesh
            castShadow
            ref={ref}
            {...props}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
          >
            <mesh
              castShadow receiveShadow
              geometry={nodes.pCube35.geometry}
              material={materials.M_scifidoor}
            />
            <mesh
              castShadow receiveShadow
              geometry={nodes.pCube28.geometry}
              material={materials.M_scifidoor}
            />
            <group position={[0, 0, 0]}>
              {!htmltext ? null : (
                <Html
                  occlude
                  onOcclude={setHidden}
                  zIndexRange={[1, 0]}
                  position={[-1.75, 1.5, 4.5]}
                  rotation={[0, 3.2, 0]}
                  scale={0.2}
                  transform
                  sprite={false}
                >
                  <div
                    className={`label noselect ${
                      hidden ? "label--hidden" : ""
                    }`}
                  >
                    <div className="label__tu">HOME PAGE</div>
                    <div className="label__name">Click to Go to Home page</div>
                  </div>
                </Html>
              )}
            </group>
          </mesh>
        </Select>
      </RigidBody>
    </group>
  );
};
