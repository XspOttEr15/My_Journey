import React, { useContext, useEffect, } from 'react'
import  City  from './City'
import '../styles/Home.css'
import { DataContext } from '../../App'
import { motion } from "framer-motion";
import { Overlay } from './Overlay';
import Video from './Video'
import LoadingScreen, { LoadingScreenSkip } from '../pages/LoadingScreen';

const Home = () => {
  const { setCloseNavbar, setCloseButtonNavbar, setIsPassOne, isPassOne, setIsNavbarFixed, } = useContext(DataContext);

  useEffect(() => {
    setCloseNavbar(false);
    setCloseButtonNavbar(false);
    setIsNavbarFixed(false)
  }, []);
  
  return (
    <>
    {isPassOne === 1 && <LoadingScreen />}
    {isPassOne === 2 && <LoadingScreenSkip />}  
      <motion.div className=' sections w-full h-screen '>
        <Video/>
        <Overlay/>
      </motion.div>
      <motion.div className=' sections w-full h-screen '>
        <City/>
      </motion.div>
    </>
  )
}



export default Home