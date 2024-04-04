import React, { useContext, useEffect, } from 'react'
import '../styles/Home.css'
import { DataContext } from '../../App'
import { motion } from "framer-motion";
import { Overlay } from './Overlay';
import Video from './Video'

const Home = () => {
  const { setColseBgmusic,setCloseNavbar,setIsLocked } = useContext(DataContext);
    useEffect(() => {
      setColseBgmusic(false);
      setCloseNavbar("showall");
      setIsLocked(true);
    }, []);
  
  return (
    <>  
      <motion.div className=' w-full  h-full'>
        <Video/>
        <Overlay/>
      </motion.div>
    </>
  )
}



export default Home