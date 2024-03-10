import { Link, Route, Routes } from "react-router-dom";
import {  Suspense, lazy } from 'react';
import { createContext, useState } from "react";
import "./App.css";
import "flowbite-react";
// page
// import About from "./components/pages/About";
// import Home from "./components/Home/Home";
// import RoomChapterOne from "./components/Canvas/RoomChapterOne";
// import Character from "./components/pages/Character";
// import Concept from "./components/pages/Concept";
// import ChapterOne from "./components/pages/Chapter/ChapterOne";
// import ChapterDialogOne from "./components/pages/Chapter/ChapterDialogOne";
// import ChapterDialogTwo from "./components/pages/Chapter/ChapterDialogTwo";
// import ChapterDialogThree from "./components/pages/Chapter/ChapterDiaologThree";
// import LoadingScreen from "./components/pages/LoadingScreen";
// import ChapterTwo from "./components/pages/Chapter/ChapterTwo";
// import ChapterThree from "./components/pages/Chapter/ChapterThree";

const Home = lazy(() => wait(5000).then(() =>import('./components/Home/Home')));
const RoomChapterOne = lazy(() => wait(3000).then(() =>import('./components/Canvas/RoomChapterOne')));
const Character = lazy(() => wait(2000).then(() =>import('./components/pages/Character')));
const Concept = lazy(() => wait(2000).then(() =>import('./components/pages/Concept')));
const About = lazy(() => wait(2000).then(() =>import('./components/pages/About')));
const ChapterOne = lazy(() => wait(2000).then(() =>import('./components/pages/Chapter/ChapterOne')));
const ChapterDialogOne = lazy(() => wait(2000).then(() =>import('./components/pages/Chapter/ChapterDialogOne')));
const ChapterDialogTwo = lazy(() => wait(2000).then(() =>import('./components/pages/Chapter/ChapterDialogTwo')));
const ChapterDialogThree = lazy(() => wait(2000).then(() =>import('./components/pages/Chapter/ChapterDiaologThree')));
const LoadingScreen = lazy(() => import('./components/pages/LoadingScreen'));
const ChapterTwo = lazy(() => wait(2000).then(() =>import('./components/pages/Chapter/ChapterTwo')));
const ChapterThree = lazy(() => wait(2000).then(() =>import('./components/pages/Chapter/ChapterThree')));

import Nav from "./components/Navbar/Nav";
import Maps from "./components/pages/Maps";
import { SpeedInsights } from "@vercel/speed-insights/react";



export const DataContext = createContext();

function App() {
  const [CloseNavbar, setCloseNavbar] = useState(false);
  const [CloseButtonNavbar, setCloseButtonNavbar] = useState(false);
  const [Volumn, setVolumn] = useState(0.1);
  const [ColseBgmusic, setColseBgmusic] = useState();
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isPassOne, setIsPassOne] = useState(1)

  return (
    <>
      <SpeedInsights />
      <DataContext.Provider
        value={{
          CloseNavbar,
          setCloseNavbar,
          CloseButtonNavbar,
          setCloseButtonNavbar,
          ColseBgmusic,
          setColseBgmusic,
          Volumn,
          setVolumn,
          isNavbarFixed,
          setIsNavbarFixed,
          isPassOne, 
          setIsPassOne
        }}
      >
        <div className="main">
          <Suspense fallback={<LoadingScreen/>}>
          <Nav/>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/concept" element={<Concept />} />
            <Route path="/character" element={<Character />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/chapteronedialog" element={<ChapterDialogOne />} />
            <Route path="/chaptertwodialog" element={<ChapterDialogTwo />} />
            <Route
              path="/chapterthreedialog"
              element={<ChapterDialogThree />}
            />
            <Route path="/chapterone" element={<ChapterOne />} />
            <Route path="/chaptertwo" element={<ChapterTwo />} />
            <Route path="/chapterthree" element={<ChapterThree />} />
            <Route path="/roomchapterone" element={<RoomChapterOne />} />
          </Routes>
          </Suspense>
        </div>
      </DataContext.Provider>
    </>
  );
}

function wait(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

export default App;

