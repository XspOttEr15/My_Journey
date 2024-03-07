import React, { useContext, useEffect, } from 'react'
import '../styles/Home.css'
import { DataContext } from '../../App'
import { motion } from "framer-motion";
import { Overlay } from './Overlay';
import Video from './Video'
import LoadingScreen, { LoadingScreenSkip } from '../pages/LoadingScreen';

const Home = () => {
  const { setCloseNavbar, setCloseButtonNavbar, isPassOne, setIsNavbarFixed, } = useContext(DataContext);

  useEffect(() => {
    setCloseNavbar(false);
    setCloseButtonNavbar(false);
    setIsNavbarFixed(false)
  }, []);
  
  return (
    <>  
      <motion.div className='sections w-full h-screen'>
        <Video/>
        <Overlay/>
      </motion.div>
    </>
  )
}



export default Home