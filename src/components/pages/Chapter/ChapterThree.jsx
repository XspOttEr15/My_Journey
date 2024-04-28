import React, { useState, useContext, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import "./styles/ChapterOne.scss";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import { DataContext } from "../../../App";

const ChapterThree = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const {
    setCloseNavbar,
    setCloseButtonNavbar,
    CloseButtonNavbar,
    setIsNavbarFixed,
    setColseBgmusic,
  } = useContext(DataContext);
  const playerRef = useRef(null);
  const soundUrl = "/sound_effects/ButtonPush.mp3";
  const [play] = useSound(soundUrl);

  const handleVideoEnded = () => {
    setTimeout(() => {
      setVideoEnded(true);
    });
    setTimeout(() => {
      setOpenModal(true);
      exitFullScreen();
    });
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  const handleReplayVideo = () => {
    setVideoEnded(false);
    setOpenModal(false);
    // Use the playerRef to seek to the beginning of the video and play
    if (playerRef.current) {
      playerRef.current.seekTo(0);
      setTimeout(() => {
        playerRef.current.play();
      }, 100); // Delay for a short time before playing to ensure seekTo takes effect
    }
  };

  useEffect(() => {
    setCloseNavbar(true);
    setCloseButtonNavbar(false);
    setColseBgmusic(true);
    setIsNavbarFixed(true);
  }, []);

  return (
    <>
      {/* {!CloseButtonNavbar && (
        <Button
          className="absolute z-50 right-[1%] top-[1.8%] rounded-full  opacity-50"
          gradientDuoTone="purpleToBlue"
          onClick={() => {
            setCloseNavbar(false), setCloseButtonNavbar(true), play();
          }}
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </Button>
      )} */}
      <div className="w-full items-center">
        <div className="w-full h-screen">
          <ReactPlayer
            ref={playerRef} // Set the ref to access the ReactPlayer component
            playing={!videoEnded} // Start playing only if videoEnded is false
            controls
            volume={0.3}
            width="100%"
            height="100%"
            url={"https://youtu.be/syaB3m2c6Uk"}
            config={{
              youtube: {
                playerVars: { showinfo: 1, disablekb: 1, fs: 1 },
              },
            }}
            onEnded={handleVideoEnded}
          />
        </div>
        <Modal
          show={openModal}
          size="md"
          onClose={() => {
            setOpenModal(false), play(), handleReplayVideo();
          }}
          popup
        >
          <Modal.Header className="bg-slate-800" />
          <Modal.Body className="bg-slate-800">
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14  text-white" />
              <h3 className="mb-5 p-1 md:text-lg lg:text-xl font-normal text-white">
                Chapter 3 จบลงแล้ว คุณรับชมเนื้อเรื่องทั้งหมดแล้ว กดปุ่มด้านล่างเพื่อกลับไปหน้าเลือก Chapter 
              </h3>
              <div className="flex flex-col md:flex-row justify-center gap-4 ">
                <Link to={"/roomchapterone"}> 
                  <Button
                    color="none"
                    className="third"
                    onClick={() => {
                      setOpenModal(false);
                      play();
                    }}
                  >
                    {" กลับไปหน้าเลือก Chapter"}
                  </Button>
                </Link>
                
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ChapterThree;
