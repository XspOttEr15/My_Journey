import React, { useContext, useEffect, useState } from 'react'
import Hearder3D from './Hearder3D'
import  City  from './City'
import LoadingScreen from '../pages/LoadingScreen'
import '../styles/Home.css'
import { DataContext } from '../../App'
import { motion } from "framer-motion";
import { Overlay } from './Overlay';

const Home = () => {
  const { setCloseNavbar, setCloseButtonNavbar,setColseBgmusic, setIsNavbarFixed } = useContext(DataContext);


  useEffect(() => {
    setCloseNavbar(false);
    setCloseButtonNavbar(false);
    setColseBgmusic(false);
    setIsNavbarFixed(false)

  }, []);
  
  return (
    <>
      <LoadingScreen/>
      <div className=' sections w-full '>
        <Hearder3D />
        <Overlay/>
      </div>
      <motion.div className=' sections w-full h-screen'>
        <City/>
      </motion.div>    
    </>
  )
}



export default Home