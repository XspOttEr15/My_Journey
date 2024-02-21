import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

import "./Header.css"
import { Experience } from './Experience';


const Hearder3D = () => {
  return (
    <>
    <div className='w-auto relative h-screen '>
      <Canvas shadows camera={{position: [-5, 1, 6], fov: 25 , aspect: window.innerWidth / window.innerHeight,}} className='transition-all duration-500 blur-sm hover:blur-none' >
        <fog attach="fog" args={["#000000", 12, 30]}/>
        <Suspense>
        <Experience/>
        </Suspense>
      </Canvas>
    </div>
    </>
  )
}

export default Hearder3D