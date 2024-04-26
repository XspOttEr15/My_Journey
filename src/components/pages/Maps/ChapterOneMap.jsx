import * as THREE from "three";
import { Suspense, useContext, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Html, Preload, OrbitControls } from "@react-three/drei";
import './Maps.css'
import { DataContext } from "../../../App";





const store = [
  {
    name: "Next Place",
    color: "lightpink",
    position: [0, 0, 15],
    Camposition: [0, 0, 5],
    
    url: "/images/Maps/chapterOne/Top.png ",
    link: 1,
  },
  {
    name: "Next Place",
    color: "lightblue",
    position: [10, -4.5, 1.5],
    url: "/images/Maps/chapterOne/bridge.png",
    link: 2,
  },
  {
    name: " Next Place",
    color: "lightblue",
    position: [500, 0, -200],
    url: "/images/Maps/chapterOne/factory.png" ,
    link: 3,
  },
  {
    name: " Next Place",
    color: "lightblue",
    position: [-20, 0, 15],
    url: "/images/Maps/chapterOne/village1.png" ,
    link: 4,
  },
  {
    name: " Next Place",
    color: "lightblue",
    position: [15, 3, 15],
    url:  "/images/Maps/chapterOne/village2.png",
    link: 5,
  },
  {
    name: " Next Place",
    color: "lightblue",
    position: [100, 0, -90],
    url: "/images/Maps/chapterOne/Garbage.png",
    link: 6,
  },
  {
    name: " Chapter 2 ",
    color: "lightblue",
    position: [80, 0, 120],
    url: "/images/Maps/chapterOne/Lunar_with_Rabbet.png",
    link: 7,
  },
];

const storeB = [
  {
    nameB: "Maps Page",
    positionB: [0, 0, -15],
    urlB: "/images/Maps/chapterOne/Garbage.png",
    linkB:1,
  },
  {
    nameB: " Previous Maps ",
    positionB: [0, 0, -15],
    urlB: "/images/Maps/chapterOne/Photosphere1.jpg",
    linkB:2,
  },
  {
    nameB: "Previous Maps",
    positionB: [-500, 120, -15],
    urlB: "/images/Maps/chapterOne/small_cathedral_4k (1).jpg",
    linkB:3,
  },
  {
    nameB: "Previous Maps",
    positionB: [200,0,-100],
    urlB: "/images/Maps/chapterOne/small_cathedral_4k (1).jpg",
    linkB:4,
  },
  {
    nameB: "Previous Maps",
    positionB: [-1, 0, -250],
    urlB: "/images/Maps/chapterOne/small_cathedral_4k (1).jpg",
    linkB:5,
  },
  {
    nameB: "Previous Maps",
    positionB: [0, 0, 160],
    urlB: "/images/Maps/chapterOne/small_cathedral_4k (1).jpg",
    linkB:6,
  },
  {
    nameB: "Previous Maps",
    positionB: [-100, 0, -60],
    urlB: "/images/Maps/chapterOne/small_cathedral_4k (1).jpg",
    linkB:7,
  },
  
];


function Dome({ name, position, texture, handleClick ,nameB, positionB,handleClickB,setCameraTarget}) {
  return (
    <group>
      <mesh>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
      <mesh position={position}>
        <Html center >
          <div className={`labelM  animate-pulse`}>
            <a href="#" className="label__tuM" onClick={handleClick}>
              {name}
            </a>
          </div>
        </Html>
      </mesh>
      <mesh position={positionB}>
        <Html center>
          <div className={`labelM  animate-pulse`}>
            <a href="#" className="label__tuM" onClick={handleClickB} >
              {nameB}
            </a>
          </div>
        </Html>
      </mesh>
    </group>
  );
}



function Portals({setFadeOut,fadeOut,setCameraTarget}) {
  const [whichB, setWhichB] = useState(0);
  const [which, setWhich] = useState(0);
  const { linkB, ...propss } = storeB[whichB];
  const { link, ...props } = store[which];
  const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url));

  const handleClick = () => {
    if (link === 7) {
      setFadeOut(true);
      setTimeout(() => {
        window.location.href = "/chaptertwomap";
      }, 800);
    } 
    else {
      // For other links, just update the state
      setTimeout(() => {
      setWhich((prevWhich) => Math.max(0, prevWhich + 1)); 
      setWhichB((prevWhichB) => Math.max(0, prevWhichB + 1));
    }, 1000);
      setFadeOut(true);
    }
  };

  const handleClickB = () => {
    if (linkB === 1) {
      // Navigate to "/Chapter 2" when link 3 is clicked
      setFadeOut(true);
      setTimeout(() => {
        window.location.href = "/maps";
      }, 800);
    } else {
      setTimeout(() => {
      setWhich((prevWhich) => Math.max(0, prevWhich - 1)); 
      setWhichB((prevWhichB) => Math.max(0, prevWhichB - 1));
      }, 1000);
      setFadeOut(true);
    }
  };
  
  useEffect(() => {
    // เมื่อมีการคลิกลิงก์ ให้ทำการ fade-out
    if (fadeOut) {
      const timer = setTimeout(() => {
        setFadeOut(false);
      }, 1000); // ปรับเวลาตามต้องการ
      return () => clearTimeout(timer);
    }
  }, [fadeOut]);

  useEffect(() => {
    // เมื่อมีการคลิกลิงก์ ให้ทำการ fade-out
    if (link === 7) {
      setCameraTarget([-14,-10,10])
    }
  }, [link]);
  

  return <Dome handleClick={handleClick} handleClickB={handleClickB} {...props} {...propss} texture={maps[which]} setCameraTarget={setCameraTarget} />;}


export default function ChapterOneMap() {
  const [fadeOut, setFadeOut] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [cameraTarget, setCameraTarget] = useState([0,0,1]);
  const { setColseBgmusic,setCloseNavbar,setIsLocked } = useContext(DataContext);
  useEffect(() => {
    setColseBgmusic(false);
    setCloseNavbar("showall");
    setIsLocked(true);
  }, []);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000); // Adjust the delay time as needed

    // Clean up timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page ${loaded ? "fade-in" : ""} ${fadeOut ? "fade-out" : ""}`}>
    <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.2}
        autoRotate={false}
        rotateSpeed={-0.4}
        target={cameraTarget}
      />
      <Suspense fallback={null}>
        <Preload all />
        <Portals setFadeOut={setFadeOut} fadeOut={fadeOut} setCameraTarget={setCameraTarget}/>
      </Suspense>
    </Canvas>
    </div>
  );
}
