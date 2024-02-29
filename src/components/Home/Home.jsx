import React, { useContext, useEffect, } from 'react'
import  City  from './City'
import LoadingScreen from '../pages/LoadingScreen'
import '../styles/Home.css'
import { DataContext } from '../../App'
import { motion } from "framer-motion";
import { Overlay } from './Overlay';
import Video from './Video'

const Home = () => {
  const { setCloseNavbar, setCloseButtonNavbar, setColseBgmusic, setIsNavbarFixed, } = useContext(DataContext);

  useEffect(() => {
    setCloseNavbar(false);
    setCloseButtonNavbar(false);
    setColseBgmusic(false);
    setIsNavbarFixed(false)
  }, []);
  
  return (
    <>
    <LoadingScreen  />
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