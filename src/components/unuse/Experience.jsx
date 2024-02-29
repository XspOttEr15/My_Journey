import { Environment, OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import Ankou from "./Ankou";
import LampPost from "./LampPost";
import Rock from "./Rock";
import TreeSpruce from "./TreeSpruce";
import YoungKorrigan from "./YoungKorrigan";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { randFloat, randFloatSpread } from "three/src/math/MathUtils";

const OFFSET_X = 20;
const LAMPS_NB = 10;
const TREES_NB = 16;
const FAR_TREES_NB = 12;
const ROCKS_NB = 6;
const LAMPS_SPEED = 0.8;
const TREES_SPEED = 0.4;
const FAR_TREES_SPEED = 0.08;
const ROCK_SPEED = 0.5;
const RAMDOMIZER_STRENGTH_SCALE = 0.42;
const RAMDOMIZER_STRENGTH_POSITION = 1;



const MovingItem = (props) => {
  const ref = useRef();

  useFrame((_state, delta) => {
    ref.current.position.x += delta * props.speed;

    if (ref.current.position.x >= OFFSET_X) {
      ref.current.position.x = -OFFSET_X;
    }

  });


  useEffect (() => {
    if (props.randomizePosition) {
      ref.current.position.x += randFloatSpread(RAMDOMIZER_STRENGTH_POSITION)
      ref.current.position.z += randFloatSpread(RAMDOMIZER_STRENGTH_POSITION)
    }
    if (props.randomizeScale) {
      ref.current.position.x += randFloatSpread(RAMDOMIZER_STRENGTH_SCALE)
      ref.current.position.x += randFloatSpread(RAMDOMIZER_STRENGTH_SCALE)
      ref.current.position.z += randFloatSpread(RAMDOMIZER_STRENGTH_SCALE)
    }
  }, []);




  return <group ref={ref} position={props.position}>{props.children}</group>;
  

};

const Background = () => {
  const ref = useRef();

  const {lampsNb, treesNb, farTreesNb, rocksNb, lampsSpeed, threesSpeed, farTreesSpeed, rocksSpeed  } = useControls ({
    lampsNb: {
      value: LAMPS_NB,
      min: 1,
      max: 100,
      step: 1,
    },

    treesNb: {
      value: TREES_NB,
      min: 1,
      max: 100,
      step: 1,
    },

    farTreesNb: {
      value: FAR_TREES_NB,
      min: 1,
      max: 100,
      step: 1,
    },
    
    rocksNb: {
      value: ROCKS_NB,
      min: 1,
      max: 100,
      step: 1,
    },

    lampsSpeed: {
      value: LAMPS_SPEED,
      min: 0.1,
      max: 2,
      step: 0.05,
    },

    threesSpeed:{
      value: TREES_SPEED,
      min: 0.1,
      max: 2,
      step: 0.05,
    },

    farTreesSpeed: {
      value: FAR_TREES_SPEED,
      min: 0.1,
      max: 2,
      step: 0.01,
    },

    rocksSpeed: {
      value: ROCK_SPEED,
      min: 0.1,
      max: 2,
      step: 0.05,
    },
    
  })


  return (
    <group position={[0, 0, 0]} ref={ref}>
      {[...Array(lampsNb)].map((_v, index) => (
      <MovingItem key={index} speed={lampsSpeed} position={[-OFFSET_X + (index/lampsNb) * OFFSET_X * 2, 0, -1.5]}>
      <LampPost scale={[0.5, 0.5, 0.5]}/>
      </MovingItem>
      ))}
      
      {[...Array(treesNb)].map((_v, index) => (
      <MovingItem key={index} speed={threesSpeed}  randomizePosition randomizeScale position={[-OFFSET_X + (index/treesNb) * OFFSET_X * 2, 0, -3.5]}>
      <TreeSpruce scale={[0.1, 0.1, 0.1]}  />
      </MovingItem>
      ))}

      
      {[...Array(farTreesNb)].map((_v, index) => (
      <MovingItem key={index} speed={farTreesSpeed} randomizePosition randomizeScale position={[-OFFSET_X + (index/farTreesNb) * OFFSET_X * 2, 0, -6]}>
      <TreeSpruce scale={[0.15, 0.15, 0.15]} />
      </MovingItem>
      ))}


      {[...Array(rocksNb)].map((_v, index) => (
      <MovingItem key={index} speed={rocksSpeed} randomizeScale position={[-OFFSET_X + (index/rocksNb) * OFFSET_X * 2, 0, 1]}>
      <Rock scale={[0.1, 0.1, 0.1]}/>
      </MovingItem>
      ))}

    </group>
  );
};

export const Experience = () => {
  return (
    <>
      <OrbitControls enableDamping={false} enablePan={false} enableRotate={false} enableZoom={false}  />
      <ambientLight intensity={0.2} />
      <Environment preset="sunset" intensity={0.7} blur={0.8} />
      <group position={[0, -1, 0]}>
        <Background />
        <Ankou
          rotation-y={-Math.PI / 2}
          position={[0.9, 0, 0]}
          scale={[0.5, 0.5, 0.5]}
        />
        <YoungKorrigan
          rotation-y={-Math.PI / 2}
          position={[-1, -0.02, 0]}
          scale={[1.5, 1.5, 1.5]}
        />
      </group>
    </>
  );
};
