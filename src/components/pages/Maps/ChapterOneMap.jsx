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
    position: [10, 0, -15],
    url: "/images/Maps/chapterOne/2294472375_24a3b8ef46_o (1).jpg",
    link: 1,
  },
  {
    name: "Next Place",
    color: "lightblue",
    position: [0, 0, 15],
    url: "/images/Maps/chapterOne/Photosphere1.jpg",
    link: 2,
  },
  {
    name: "Chapter 2",
    color: "lightblue",
    position: [15, 0, 15],
    url: "/images/Maps/chapterOne/small_cathedral_4k (1).jpg",
    link: 3,
  },
];

const storeB = [
  {
    nameB: "Back to Maps",
    positionB: [80, 0, -15],
    urlB: "/images/Maps/chapterOne/2294472375_24a3b8ef46_o (1).jpg",
    linkB:1,
  },
  {
    nameB: " Previous Maps ",
    positionB: [-50, 0, 15],
    urlB: "/images/Maps/chapterOne/Photosphere1.jpg",
    linkB:2,
  },
  {
    nameB: "Previous Maps",
    positionB: [-30, 0, 15],
    urlB: "/images/Maps/chapterOne/small_cathedral_4k (1).jpg",
    linkB:3,
  },
];


function Dome({ name, position, texture, handleClick ,nameB, positionB,handleClickB}) {
  return (
    <group>
      <mesh>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
      <mesh position={position}>
        <Html center>
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



function Portals({setFadeOut,fadeOut}) {
  const [whichB, setWhichB] = useState(0);
  const [which, setWhich] = useState(0);
  const { linkB, ...propss } = storeB[whichB];
  const { link, ...props } = store[which];
  const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url));

  const handleClick = () => {
    if (link === 3) {
      setFadeOut(true);
      setTimeout(() => {
        window.location.href = "/home";
      }, 800);
    } else {
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
  

  return <Dome handleClick={handleClick} handleClickB={handleClickB} {...props} {...propss} texture={maps[which]}  />;
}


export default function ChapterOneMap() {
  const [fadeOut, setFadeOut] = useState(false);
  const [loaded, setLoaded] = useState(false);
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
        rotateSpeed={-0.5}
      />
      <Suspense fallback={null}>
        <Preload all />
        <Portals setFadeOut={setFadeOut} fadeOut={fadeOut}/>
      </Suspense>
    </Canvas>
    </div>
  );
}
