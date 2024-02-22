import { Canvas } from '@react-three/fiber'
import Experience2 from './Experience2'

const City = () => {
  return (

    <div className=' h-screen' >
        <Canvas shadows dpr={[1,2]} camera={{ position: [0,1,8], fov: 30, near:0.1, far:1000, }}>
        <fog attach="fog" args={['#cc7b32', 1, 40]} />
        <Experience2/>
        <meshLambertMaterial color={"#FFA500"}/>
      </Canvas>
    </div>
  )
}

export default City