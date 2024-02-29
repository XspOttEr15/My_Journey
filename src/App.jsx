import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import "flowbite-react";
// page
import About from "./components/pages/About";
import Home from "./components/Home/Home";
import Concept from "./components/pages/Concept";
import Character from "./components/pages/Character";
import { createContext, useState } from "react";
import RoomChapterOne from "./components/Canvas/RoomChapterOne";
import ChapterOne from "./components/pages/Chapter/ChapterOne";
import ChapterDialogOne from "./components/pages/Chapter/ChapterDialogOne";
import ChapterDialogTwo from "./components/pages/Chapter/ChapterDialogTwo";
import ChapterDialogThree from "./components/pages/Chapter/ChapterDiaologThree";
import ChapterTwo from "./components/pages/Chapter/ChapterTwo";
import ChapterThree from "./components/pages/Chapter/ChapterThree";
import Maps from "./components/pages/Maps";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Nav from "./components/Navbar/Nav";

export const DataContext = createContext();

function App() {
  const [CloseNavbar, setCloseNavbar] = useState(false);
  const [CloseButtonNavbar, setCloseButtonNavbar] = useState(false);
  const [Volumn, setVolumn] = useState(0.1);
  const [ColseBgmusic, setColseBgmusic] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

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
        }}
      >
        <div className="main">
          <div className="frame"> 
          <img src="/images/border-img/frame2.png" className="overlays" />
          </div>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home />} />
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
        </div>
      </DataContext.Provider>
    </>
  );
}

export default App;
