import * as THREE from "three";
import { Suspense, useContext, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Html, Preload, OrbitControls } from "@react-three/drei";
import "./Maps.css";
import { DataContext } from "../../../App";
import LoadingScreen from "../LoadingScreen";

const store = [
  {
    name: "The Tower",
    color: "lightpink",
    position: [25, 1, 15],
    url: "/images/Maps/chapterThree/1.png",
    link: 1,
  },
  {
    name: "Top Tower",
    color: "lightblue",
    position: [1, 15, 40],
    url: "/images/Maps/chapterThree/2.png",
    link: 2,
  },
  {
    name: "Destroyed City ",
    color: "lightblue",
    position: [1.5, 3.5, 15],
    url: "/images/Maps/chapterThree/3.png",
    link: 3,
  },
  {
    name: " The Tower 2",
    color: "lightblue",
    position: [30, 0, 20],
    url: "/images/Maps/chapterThree/6.png",
    link: 4,
  },
  {
    name: " Top Tower 2",
    color: "lightblue",
    position: [1, 0, 15],
    url: "/images/Maps/chapterThree/5.png",
    link: 5,
  },
  {
    name: "Go to Maps Page",
    color: "lightblue",
    position: [1, 3, 15],
    url: "/images/Maps/chapterThree/4.png",
    link: 6,
  },
];

const storeB = [
  {
    nameB: "Chapter 2",
    positionB: [-20, -1, -11],
    urlB: "/images/Maps/chapterOne/Garbage.png",
    linkB: 1,
  },
  {
    nameB: " Pathway ",
    positionB: [27, -34, -15],
    urlB: "/images/Maps/chapterThree/1.png",
    linkB: 2,
  },
  {
    nameB: "The Tower",
    positionB: [1.5, 0, -15],
    urlB: "/images/Maps/chapterThree/2.png",
    linkB: 3,
  },
  {
    nameB: "Nomal City Top Tower ",
    positionB: [-5, 0, -2],
    urlB: "/images/Maps/chapterOne/small_cathedral_4k (1).jpg",
    linkB: 4,
  },
  {
    nameB: "Top Tower 2",
    positionB: [20, -16, -10],
    urlB: "/images/Maps/chapterOne/small_cathedral_4k (1).jpg",
    linkB: 5,
  },
  {
    nameB: "The Tower 2",
    positionB: [1, 0, -15],
    urlB: "/images/Maps/chapterOne/small_cathedral_4k (1).jpg",
    linkB: 6,
  },
];

const storeC = [
  {
    nameC: "Destroyed City",
    colorC: "lightpink",
    positionC: [25, 4, 15],
    urlC: "/images/Maps/chapterThree/1.png",
    linkC: 1,
  },
];

const storeD = [
  {
    nameD: "Nomal City",
    colorD: "lightpink",
    positionD: [22.1, 3, 15],
    urlD: "/images/Maps/chapterThree/1.png",
    linkD: 1,
  },
];


function Dome({
  name,
  position,
  texture,
  handleClick,
  nameB,
  positionB,
  handleClickB,
  setCameraTarget,
  nameC,
  positionC,
  handleClickC,
  nameD,
  positionD,
  handleClickD,
  which,
}) {
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
            <a href="#" className="label__tuM" onClick={handleClickB}>
              {nameB}
            </a>
          </div>
        </Html>
      </mesh>
      
      {which === 0 && (
        <mesh position={positionC}>
          <Html center>
            <div className={`labelM  animate-pulse`}>
              <a href="#" className="label__tuM" onClick={handleClickC}>
                {nameC}
              </a>
            </div>
          </Html>
        </mesh>
      )}

    {which === 3 && (
        <mesh position={positionD}>
          <Html center>
            <div className={`labelM  animate-pulse`}>
              <a href="#" className="label__tuM" onClick={handleClickD}>
                {nameD}
              </a>
            </div>
          </Html>
        </mesh>
      )}

      
    </group>
  );
}

function Portals({ setFadeOut, fadeOut, setCameraTarget }) {
  const [whichB, setWhichB] = useState(0);
  const [which, setWhich] = useState(0);
  const [whichC, setWhichC] = useState(0);
  const [whichD, setWhichD] = useState(0);
  const { linkB, ...propss } = storeB[whichB];
  const { link, ...props } = store[which];
  const { linkC, ...propsss } = storeC[whichC];
  const { linkD, ...propssss } = storeD[whichD];
  const maps = useLoader(
    THREE.TextureLoader,
    store.map((entry) => entry.url)
  );

  const handleClick = () => {
    if (link === 6) {
      setFadeOut(true);
      setTimeout(() => {
        window.location.href = "/maps";
      }, 800);
    }  
    else 
    {
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
        window.location.href = "/chaptertwomap";
      }, 800);
    } else {
      setTimeout(() => {
        setWhich((prevWhich) => Math.max(0, prevWhich - 1));
        setWhichB((prevWhichB) => Math.max(0, prevWhichB - 1));
      }, 1000);
      setFadeOut(true);
    }
  };

 const handleClickC = () => {
    if (link === 1) {
      setTimeout(() => {
        setWhich(3)
      }, 800);
      setFadeOut(true);
    }
  }

  const handleClickD = () => {
    if (which === 3) {
      setTimeout(() => {
        setWhich(0)
      }, 800);
      setFadeOut(true);
    }
  }

  useEffect(() => {
    
    if (fadeOut) {
      const timer = setTimeout(() => {
        setFadeOut(false);
      }, 1000); // ปรับเวลาตามต้องการ
      return () => clearTimeout(timer);
    }
  }, [fadeOut]);

  // useEffect(() => {
  //   // เมื่อมีการคลิกลิงก์ ให้ทำการ fade-out
  //   if (link === 7) {
  //     setCameraTarget([-14,-10,10])
  //   }
  // }, [link]);

  return (
    <Dome
      handleClick={handleClick}
      handleClickB={handleClickB}
      handleClickC={handleClickC}
      handleClickD={handleClickD}
      {...props}
      {...propss}
      {...propsss}
      {...propssss}
      texture={maps[which]}
      which={which}
      setCameraTarget={setCameraTarget}
    />
  );
}

export default function ChapterThreeMap() {
  const [fadeOut, setFadeOut] = useState(false);
  const [cameraTarget, setCameraTarget] = useState([1.2, 0, 1]);
  const [loaded, setLoaded] = useState(false);
  const { setColseBgmusic, setCloseNavbar, setIsLocked } =
    useContext(DataContext);
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
    <div
      className={`page ${loaded ? "fade-in" : ""} ${fadeOut ? "fade-out" : ""}`}
    >
      
      <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.2}
          autoRotate={false}
          rotateSpeed={-0.5}
          target={cameraTarget}
        />
        <Suspense fallback={null}>
          <Preload all />
          <Portals
            setFadeOut={setFadeOut}
            fadeOut={fadeOut}
            setCameraTarget={setCameraTarget}
          />
        </Suspense>
      </Canvas>
      
    </div>
  );
}
