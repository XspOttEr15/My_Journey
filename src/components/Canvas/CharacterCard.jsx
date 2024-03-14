import { Canvas } from "@react-three/fiber";

export function CharacterCardOne() {
  return (
    <Canvas camera={{position:[2,2,2]}} style={{ width: '100%', height: '26.5rem' }}>
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
}

export function CharacterCardTwo() {
  return (
    <Canvas camera={{position:[2,2,2]}} style={{ width: '100%', height: '26.5rem' }}>
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
}

export function CharacterCardThree() {
    return (
      <Canvas camera={{position:[2,2,2]}} style={{ width: '100%', height: '26.5rem' }}>
        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    );
  }

  export function CharacterCardFour() {
    return (
      <Canvas camera={{position:[2,2,2]}} style={{ width: '100%', height: '26.5rem' }}>
        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    );
  }


  export function Characterdisplay() {
    return (
      // <Canvas camera={{position:[2,2,2]}} style={{ width: '100%', height: '33rem' }}>
      //   <mesh>
      //     <boxGeometry />
      //     <meshNormalMaterial />
      //   </mesh>
      // </Canvas>
      <div className=" lg:w-full md:w-full lg:max-h-[500px] lg:h-auto md:h-[350px] overflow-hidden ring-4 ring-emerald-400  rounded-xl">
        <img src="/images/Characters/Lunar/lunar.png" className=" w-full h-auto" />
      </div>
    );

  }


  export function Characterdisplaytwo() {
      return (
        // <Canvas camera={{position:[2,2,2]}} style={{ width: '100%', height: '33rem' }}>
        //   <mesh>
        //     <boxGeometry />
        //     <meshNormalMaterial />
        //   </mesh>
        // </Canvas>
        <div className=" lg:w-full md:w-full lg:max-h-[500px] lg:h-auto md:h-[350px] overflow-hidden ring-4 ring-emerald-400  rounded-xl">
        <img src="/images/Characters/Rabbet/Rabbet2.png" className=" w-full h-auto" />
      </div>
      );
  }

  export function Characterdisplaythree() {
    return (
      // <Canvas camera={{position:[2,2,2]}} style={{ width: '100%', height: '33rem' }}>
      //   <mesh>
      //     <boxGeometry />
      //     <meshNormalMaterial />
      //   </mesh>
      // </Canvas>
      <div className=" lg:w-full md:w-full lg:max-h-[500px] lg:h-auto md:h-[350px] overflow-hidden ring-4 ring-emerald-400  rounded-xl">
        <img src="/images/Characters/SupportingCharacter/village.png" className=" w-full h-auto" />
      </div>
    );
}

export function Characterdisplayfour() {
  return (
    // <Canvas camera={{position:[2,2,2]}} style={{ width: '100%', height: '33rem' }}>
    //   <mesh>
    //     <boxGeometry />
    //     <meshNormalMaterial />
    //   </mesh>
    // </Canvas>
    <div className=" lg:w-full md:w-full lg:max-h-[500px] lg:h-auto md:h-[350px] overflow-hidden ring-4 ring-emerald-400  rounded-xl">
        <img src="/images/Characters/SupportingRobot/robot.png" className=" w-full h-auto" />
      </div>
  );
}


