import * as THREE from "three";
import { Suspense, useContext, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Html, Preload, OrbitControls } from "@react-three/drei";
import './Maps.css'
import { DataContext } from "../../../App";
import LoadingScreen from "../LoadingScreen";



const store = [
  {
    name: " Farm ",
    color: "lightpink",
    position: [17, 0, -10],
    url: "/images/Maps/chapterTwo/1.png",
    link: 1,
  },
  {
    name: "Camp",
    color: "lightblue",
    position: [-5, 0, -15],
    url: "/images/Maps/chapterTwo/2.png",
    link: 2,
  },
  {
    name: "Brdige",
    color: "lightblue",
    position: [-15, 1, -15],
    url: "/images/Maps/chapterTwo/3.png",
    link: 3,
  },
  {
    name: " Village 1 ",
    color: "lightblue",
    position: [-25, 0, 10],
    url: "/images/Maps/chapterTwo/4.png",
    link: 4,
  },
  {
    name: "Village 2",
    color: "lightblue",
    position: [-1, -1, 15],
    url: "/images/Maps/chapterTwo/5.png",
    link: 5,
  },
  {
    name: " Farm 2 ",
    color: "lightblue",
    position: [15, 0, 15],
    url: "/images/Maps/chapterTwo/6.png",
    link: 6,
  },
  {
    name: " SinkHole ",
    color: "lightblue",
    position: [14, 0, -30],
    url: "/images/Maps/chapterTwo/7.png",
    link: 7,
  },
  {
    name: " Chapter 3 ",
    color: "lightblue",
    position: [0, -1, -15],
    url: "/images/Maps/chapterTwo/8.png",
    link: 8,
  },
];

const storeB = [
  {
    nameB: "Chapter 1",
    positionB: [0, 0, 15],
    urlB: "/images/Maps/chapterOne/Garbage.png",
    linkB:1,
  },
  {
    nameB: " Elevator ",
    positionB: [-22, 20, 30],
    urlB: "/images/Maps/chapterTwo/1.png",
    linkB:2,
  },
  {
    nameB: "Farm ",
    positionB: [-1, 0, 15],
    urlB: "/images/Maps/chapterTwo/2.png",
    linkB:3,
  },
  {
    nameB: "Camp",
    positionB: [13, 0, 15],
    urlB: "/images/Maps/chapterTwo/3.png",
    linkB:4,
  },
  {
    nameB: "Brdige",
    positionB: [18, -1, -15],
    urlB: "/images/Maps/chapterTwo/4.png",
    linkB:5,
  },
  {
    nameB: "Village 1",
    positionB: [-14, -1, -15],
    urlB: "/images/Maps/chapterTwo/5.png",
    linkB:6,
  },
  {
    nameB: "Village 2",
    positionB: [-30, 6, 0],
    urlB: "/images/Maps/chapterTwo/6.png",
    linkB:7,
  },
  {
    nameB: "Farm 2",
    positionB: [-10, -4, 15],
    urlB: "/images/Maps/chapterTwo/7.png",
    linkB:8,
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
    if (link === 8) {
      setFadeOut(true);
      setTimeout(() => {
        window.location.href = "/chapterthreemap";
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


export default function ChapterTwoMap() {
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
      <Suspense fallback={<LoadingScreen/>}>
        <Preload all />
        <Portals setFadeOut={setFadeOut} fadeOut={fadeOut}/>
      </Suspense>
    </Canvas>
    </div>
  );
}
