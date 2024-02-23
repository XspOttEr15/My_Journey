import React, {
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import * as RAPIER from "@dimforge/rapier3d-compat";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PointerLockControls,
  useHelper,
  useGLTF,
  Html,
} from "@react-three/drei";
import { Floor, Room, Wall } from "./Models/Fky3_room";
import {
  CapsuleCollider,
  Physics,
  RigidBody,
  useRapier,
} from "@react-three/rapier";
import {
  Selection,
  EffectComposer,
  Outline,
  Vignette,
  Bloom,
  Select,
} from "@react-three/postprocessing";
import { usePersonControls } from "./utility/hook";
import * as THREE from "three";
import "./styles/RoomChapterOne.css";
import { useControls } from "leva";
import { Button, Modal } from "flowbite-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import LoadingScreen from "../pages/LoadingScreen";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import useSound from "use-sound";

export const RoomChapterOne = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModaltwo, setOpenModaltwo] = useState(false);
  const [playerActive, setPlayerActive] = useState(false);
  const [loopcamera, setLoopcamera] = useState(false);
  const [loopcameratwo, setLoopcameratwo] = useState(false);
  const [target, setTarget] = useState(1);
  const [targettwo, setTargetwo] = useState(1);
  const {
    setCloseNavbar,
    setCloseButtonNavbar,
    CloseButtonNavbar,
    setColseBgmusic, 
    setIsNavbarFixed,
  } = useContext(DataContext);
  const [htmltext, setHtmltext] = useState(true);
  const soundUrl = '/sound_effects/ButtonPush.mp3';
  const [play] = useSound(soundUrl);
  const [dialogue, setDialogue] = useState([
    {
      speaker: "-- Deepsun1 --",
      text: "Deepsun1 ภาพแวดล้อมย่ำแย่มีแต่หมอกควัน มีฝุ่นจากอุตสาหกรรมมีการก่อสร้างบ้านเมืองแบบยุคเก่าใช้พลังงานจากน้ำมันปิโตรเลียมใช้แท่นขุดเจาะน้ำมันแบบขวานและแบบเสาดิ่ง",
      bg: "/images/StoryRoom/Deepsun1.png",
      button: "Choose Chapter 1",
      link: "/chapterone",
      style: "",
    },
    {
      speaker: "-- Solarwind2 --",
      text: "Solarwind3 สภาพแวดล้อม เกือบจะดีแต่มีฝุ่นควันจากชั้นล่างบนบังทัศนวิสัยถึงแม้จะมีการกรองอากาศไปบ้างแล้วเมืองนี้จะเริ่มมีการเพาะปลูกพืชพรรณ และใช้พลังงานจากลมเป็นหลัก",
      bg: "/images/StoryRoom/Solarwind2.jpg",
      button: "Choose Chapter 2",
      link: "/chaptertwo",
    },
    {
      speaker: "-- PeaceFusion3 --",
      text: "PeaceFusion4 เป็นเมืองที่มีวิทยาการสูงที่สุด มีผู้คนหนาแน่นมีตึกสูงมากมายใช้พลังงานจากเตาปติกรเป็นหลัก ผสมผสานระหว่างธรรมชาติและเทคโนโลยี เป็นเมืองที่ทุกคนใฝ่ฝันอยากเข้ามาอยู่อาศัย",
      bg: "/images/StoryRoom/PeaceFusion3.jpg",
      button: "Choose Chapter 3",
      link: "/chapterthree",
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

  useEffect(() => {
    const preloadImages = () => {
      dialogue.forEach((item) => {
        const img = new Image();
        img.src = item.bg;
      });
    };

    preloadImages();
  }, [openModal]);

  useEffect(() => {
    setCloseNavbar(true);
    setCloseButtonNavbar(false);
    setColseBgmusic(true);
    setIsNavbarFixed(true);
  }, []);

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
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </Button>
      )}
      <div className="aim"></div>
      <Tutorial />
      <LoadingScreen />
      <Suspense>
        <Canvas
          shadows="soft"
          camera={{
            fov: 45,
            position: [0, 0, 0],
          }}
          style={{ width: "100%", height: "91vh" }}
        >
          <color attach="background" args={["#638689"]} />
          <fog attach="fog" args={["#569BF3", 1, 200]} />
          <Physics>
            {/* debug */}
            <Player
              playerActive={playerActive}
              setPlayerActive={setPlayerActive}
            />
            <Room />
            <Floor />
            <Wall />
            <mesh
              onClick={() => {
                setPlayerActive(true), setLoopcamera(true), setHtmltext(false),play();
              }}
            >
              <Book htmltext={htmltext} setHtmltext={setHtmltext} />
            </mesh>
            <mesh
              onClick={() => {
                  setPlayerActive(true),
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
      </Suspense>

      <motion.div
        key={openModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Modal
          size={"1200px"}
          show={openModal}
          onClose={() => {
            setOpenModal(false);
            setPlayerActive(false);
            setHtmltext(true);
            setTarget(1);
            play();
          }}
          className="relative z-10"
        >
          <motion.svg
            className="w-12 h-12 text-gray-800 dark:text-white absolute top-[50%] bottom-[50%] left-[0%] opacity-60 z-50"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 10 16"
            onClick={() =>{handleBack(),play()}}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
          </motion.svg>

          <motion.svg
            className="w-12 h-12 text-gray-800 dark:text-white absolute top-[50%] bottom-[50%] right-[0%] opacity-60 z-20"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 10 16"
            onClick={() =>{handleNext(),play()}}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
          </motion.svg>
          <Modal.Header>SELECT CHAPTER PAGE</Modal.Header>

          <motion.div>
            <Modal.Body>
              <div id="city" className="lg:flex mx-5 m-5  ">
                <div className=" h-auto m-2 ">
                  <motion.img
                    src={dialogue[currentDialogueIndex].bg}
                    alt="..."
                    className="rounded-3xl h-full w-full z-10"
                    key={currentDialogueIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <motion.div
                  className="m-2 bg-gray-800 rounded-xl w-[100%] flex flex-col items-center justify-center"
                  key={currentDialogueIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 25 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.h1 className="text-4xl lg:text-5xl font-extrabold dark:text-white text-center">
                    {dialogue[currentDialogueIndex].speaker}
                  </motion.h1>
                  <motion.p className="lg:text-xl p-6 text-center">
                    {dialogue[currentDialogueIndex].text}
                  </motion.p>
                  <Link to={dialogue[currentDialogueIndex].link}>
                    <div className="text-center m-3">
                      <button
                        onClick={play}
                        type="button"
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-4 text-center me-2 mb-2"
                      >
                        {dialogue[currentDialogueIndex].button}
                      </button>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </Modal.Body>
          </motion.div>
        </Modal>

        <Modal
          show={openModaltwo}
          size="md"
          onClose={() => {
            setOpenModaltwo(false);
            setPlayerActive(false);
            setHtmltext(true);
            setTargetwo(1);
            play();
          }}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-sm md:text-lg lg:text-xl font-normal text-gray-500 dark:text-gray-400">
                คุณแน่ใจว่าจะไปหน้า Concept ?
              </h3>
              <div className="flex flex-col md:flex-row justify-center gap-4 ">
                <Link to={"/concept"}>
                  <Button
                    color="failure"
                    onClick={() => {
                      setOpenModaltwo(false);
                      play();
                    }}
                  >
                    {" แน่ใจอยู่แล้ว "}
                  </Button>
                </Link>
                <Button
                  color="gray"
                  onClick={() => {
                    setOpenModaltwo(false);
                    setPlayerActive(false);
                    setHtmltext(true);
                    setTargetwo(1);
                    play();
                  }}
                >
                  ขออีก 5 นาที
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </motion.div>
    </>
  );
};
export default RoomChapterOne;

// Player Control

export const Player = ({ playerActive }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(playerActive);

    // Check if player is not active, then release pointer lock
    if (playerActive) {
      document.exitPointerLock();
    }
  }, [playerActive]);

  const MOVE_SPEED = 5;
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();

  const playerRef = useRef();
  const { forward, backward, left, right, jump } = usePersonControls();
  const rapier = useRapier();

  useFrame((state) => {
    if (!playerRef.current) return;

    // moving player
    const velocity = playerRef.current.linvel();
    

    //  player movement
    if (!active) {
      frontVector.set(0, 0, backward - forward);
      sideVector.set(left - right, 0, 0);
      direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(MOVE_SPEED)
        .applyEuler(state.camera.rotation);

      playerRef.current.wakeUp();
      playerRef.current.setLinvel({
        x: direction.x,
        y: velocity.y,
        z: direction.z,
      });
    }

    // jumping
    const world = rapier.world;
    const ray = world.castRay(
      new RAPIER.Ray(playerRef.current.translation(), { x: 0, y: -1, z: 0 })
    );
    const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.5;

    if (jump && grounded) doJump();

    // moving camera
    const { x, y, z } = playerRef.current.translation();
    if (!active) {
      // Condition to check if book is not clicked
      state.camera.position.set(x, y, z);
    }
  });

  const doJump = () => {
    playerRef.current.setLinvel({ x: 0, y: 4, z: 0 });
  };

  return (
    <>
      {/* First Person Camera */}
      {!active ? <PointerLockControls /> : null}
      <RigidBody
        position={[-2, 3, 3]}
        mass={1}
        colliders={false}
        ref={playerRef}
        lockRotations
      >
        <mesh visible={false}>
          <capsuleGeometry args={[0.4, 0.4]} />
          <meshStandardMaterial color="hotpink" />
          <CapsuleCollider args={[0.9, 0.5]} />
        </mesh>
      </RigidBody>
    </>
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
    width: { value: 1000, min: 0, max: 2000 },
    edgeStrength: { value: 1000, min: 0, max: 2000 },
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
      }
    }
  });

  return (
    <>
      <Selection>
        <EffectComposer disableNormalPass multisampling={8} autoClear={false}>
          {vignetteConfig.enabled && <Vignette {...vignetteConfig} />}
          {bloomConfig.enabled && <Bloom {...bloomConfig} />}
          {outline.enabled && <Outline {...outline} />}
        </EffectComposer>
        <mesh>
          <Book />
        </mesh>
        <mesh>
          <MBook />
        </mesh>
      </Selection>
    </>
  );
};

// player UI
export const Tutorial = () => {
  return (
    <div className="tutorial">
      <div className="absolute opacity-70  top-[87%] left-[4%]">
        <h2 className="text-2xl font-bold dark:text-white opacity-70  ">
          Press W A S D to move around
        </h2>
        <h2 className="text-2xl font-bold dark:text-white opacity-70 ">
          Press SPACEBAR to jump
        </h2>
        <h2 className="text-2xl font-bold dark:text-white opacity-70 ">
          Press Esc to show cusor mouse
        </h2>
      </div>
    </div>
  );
};

// Book Component

export const Book = ({ htmltext, setHtmltext, ...props }) => {
  const { nodes, materials } = useGLTF("/models/fky3_room.glb");
  const ref = useRef();
  const [hovered, hover] = useState(null);
  const [closelabel, Setcloselabel] = useState(false);

  useEffect(() => {
    Setcloselabel(htmltext);
  }, [htmltext]);

  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed">
        <Select enabled={hovered}>
          <mesh
            castShadow
            ref={ref}
            {...props}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pPlane2.geometry}
              material={materials.M_maintable}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pPlane3.geometry}
              material={materials.M_maintable}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pPlane1.geometry}
              material={materials.M_maintable}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube47.geometry}
              material={materials.M_maintable}
            />

            <group position={[-0.3, 1, -1.5]}>
              {!htmltext ? null : (
                <Html distanceFactor={2}>
                  <div className="label noselect">
                    <div className="label__tu">LUNAR's BOOK</div>
                    <div className="label__name">
                      Left Click to Start your Journey
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
  playerActive,
  setPlayerActive,
  setOpenModaltwo,
  ...props
}) => {
  const { nodes, materials } = useGLTF("/models/fky3_room.glb");
  const [hovered, hover] = useState(null);
  const ref = useRef();
  const [closelabel, Setcloselabel] = useState(false);
  const soundUrl = '/sound_effects/ButtonPush.mp3';
  const [play] = useSound(soundUrl);

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
      state.camera.lookAt(-2, 1.3, -4);
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
      }
    }
  });

  return (
    <>
      <group {...props} dispose={null} position={[0, 0, 0]}>
        <RigidBody type="fixed">
          <Select enabled={hovered}>
            <mesh
              castShadow
              ref={ref}
              onPointerOver={() => hover(true)}
              onPointerOut={() => hover(false)}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.ob_book_73.geometry}
                material={materials.M_bookcase}
              />
              <group position={[-2.4, 1.3, -4.2]}>
                {!htmltext ? null : (
                  <Html distanceFactor={2}>
                    <div className="label noselect">
                      <div className="label__tu">CONCEPT</div>
                      <div className="label__name">
                        Left Click to Go to Concept Page
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
