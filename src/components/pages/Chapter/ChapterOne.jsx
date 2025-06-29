import React, { useState, useContext, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import "./styles/ChapterOne.scss";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { DataContext } from "../../../App";
import useSound from "use-sound";

const ChapterOne = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const {
    setCloseNavbar,
    setCloseButtonNavbar,
    CloseButtonNavbar,
    setColseBgmusic,
    setIsNavbarFixed,
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
      console.log(playerRef.current); // Add this line for debugging
      playerRef.current.seekTo(0);
      setTimeout(() => {
        playerRef.current.play;
      }, 100); // Delay for a short time before playing to ensure seekTo takes effect
    }
  };
  

  useEffect(() => {
    setCloseNavbar(true);
    setCloseButtonNavbar(false);
    setIsNavbarFixed(true);
    setColseBgmusic(true);
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
            ref={playerRef}
            playing={!videoEnded}
            volume={0.3}
            width="100%"
            height="100%"
            url={"https://www.youtube.com/watch?v=IZO5aOmviuI"}
            config={{
              youtube: {
                playerVars: {
                  showinfo: 0,
                  disablekb: 1,
                  fs: 1,
                  modestbranding: 0,
                  controlsList: "nodownload",
                  controls: 1,
                },
              },
            }}
            onEnded={handleVideoEnded}
          />
        </div>
        <Modal
          show={openModal}
          size="md"
          onClose={() => {
            setOpenModal(false), handleReplayVideo(), play();
          }}
          popup
        >
          <Modal.Header className="bg-slate-800" />
          <Modal.Body className="bg-slate-800">
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14  text-white" />
              <h3 className="mb-5 text md:text-lg  lg:text-xl font-normal  text-white">
                วิดิโอลงจบแล้ว กดปุ่มถัดไปเพื่อดำเนินเนื้อเรื่องต่อ หรือ กลับไปรับชมอีกรอบ
              </h3>
              <div className="flex flex-col md:flex-row justify-center gap-4 ">
                <Link to={"/chapteronedialog"}>
                  <Button
                    color="none"
                    className="third"
                    onClick={() => {
                      setOpenModal(false), play();
                    }}
                  >
                    {" ดำเนินเนื้อเรื่อง "}
                  </Button>
                </Link>
                <Button
                className="third2"
                  color="none"
                  onClick={() => {
                    handleReplayVideo(), play();
                  }}
                >
                  รับชมอีกรอบ
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ChapterOne;
