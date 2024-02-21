import React, { useRef, useState } from "react";
import { Float, Html, OrbitControls, SpotLight,  Text3D,  } from "@react-three/drei";
import Mock2 from "./Mock_city1_nohole";
import { motion } from "framer-motion-3d";

export const Experience2 = () => {
  const [textColor, setTextColor] = useState("#ffffff");
  const [boxColor, setBoxColor] = useState("#ffffff");
  const buttonRef = useRef();

  const handleTextHover = () => {
    const randomColor = getRandomColor();
    setTextColor(randomColor);
  };

  const handleBoxtHover = () => {
    const randomColor = getRandomColor();
    setBoxColor(randomColor);
  };

  const handleButtonClick = () => {
    const randomColor = getRandomColor();
    setBoxColor(randomColor);
    // You can also add additional logic here if needed when the button is clicked.
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };



  return (
    <>
      <OrbitControls  enableZoom={false} enableDamping={false} enablePan={false} enableRotate={false} />
      <Float speed={2} // Animation speed, defaults to 1
        rotationIntensity={0.3} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[0, 0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
      <mesh position={[-2.8, 1, 0]} onPointerOver={handleTextHover} onPointerOut={() => setTextColor("#ffffff")} > 
        <Text3D font="./fonts/Gloria.json" scale={0.6}>
          Fine the ways
          <meshLambertMaterial attach="material" color={textColor} />
          <spotLight position={[0, 6, 0]} intensity={60} penumbra={1} angle={0.9} castShadow color="#32b7cc" />
        </Text3D>
      </mesh>
      </Float>

      <Float speed={2} // Animation speed, defaults to 1
        rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[0, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
      <group onPointerOver={handleBoxtHover}  onPointerOut={() => setBoxColor("#ffffff")} >
        <mesh ref={buttonRef} position={[0, 0.5, 0]} >
          <boxGeometry args={[2, 0.4, 0.1]} />
          <meshLambertMaterial attach="material" color={boxColor} />
          <Html occlude distanceFactor={3} transform position={[0, 0.03, 0.06]}>
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"  }}>
              <span style={{ fontSize: "24px", color: "#ffffff" , fontFamily:"cursive" }} onPointerOver={() => buttonRef.current.scale.set(1.1, 1.1, 1.1)} onPointerOut={() => buttonRef.current.scale.set(1, 1, 1)} onClick={handleButtonClick}>
                Start your Journey
              </span>
            </div>
          </Html>
        </mesh>
      </group>
      </Float>     
     
      <spotLight
          position={[0, 1, 0]}
          distance={8}
          angle={0.45}
          attenuation={6.5}
          anglePower={6}
          penumbra={0.3}
          intensity={3}
          color={"#32b7cc"}
          castShadow
        >
      </spotLight>
      
      <motion.mesh position={[0, -3, 0]}  whileHover={{y:-1 ,x:0, z:0}} onPointerLeave={{y:-2 ,x:0, z:0}} transition={{ type: "spring" }}>
        <Mock2 />
      </motion.mesh>
    </>
  );
};

export default Experience2;


