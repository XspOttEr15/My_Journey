import React, { useContext, useEffect, useRef } from "react";
import "./AudioPlayer.css";
import "/audios/bgm_home.mp3";
import { DataContext } from "../../App";
import { useState } from "react";

const AudioPlayer = () => {
  const { ColseBgmusic, Volumn, setVolumn } = useContext(DataContext);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = Volumn;
    }

    if (ColseBgmusic) {
      audio.pause();
    }

    if (!ColseBgmusic) {
      audio.play();
    }
  }, [Volumn, ColseBgmusic]);

  const toggleSliderVisibility = () => {
    setIsSliderVisible(!isSliderVisible);
  };

  const handleVolumeChange = (event) => {
    setVolumn(event.target.value);
  };

  return (
    <>
      <audio ref={audioRef} loop className="audio-control">
        <source src="/audios/bgm_home.mp3" type="audio/mpeg" />
      </audio>
      <div className="relative" onClick={toggleSliderVisibility} >
      <button
        type="button"
        id="sidenavopen"
        className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.5 8.4a5 5 0 0 1 0 7.1m2.9 2.9a9 9 0 0 0 0-12.8m-6.4.5V18a1 1 0 0 1-1.6.7L6 15H4a1 1 0 0 1-1-1v-4c0-.6.4-1 1-1h2l4.4-3.6A1 1 0 0 1 12 6Z"
          />
        </svg>
      </button>
      {isSliderVisible && (
        <div className="volume-slider">
        <input
          type="range"
          className="volume"
          min="0"
          max="1"
          step="0.1"
          value={Volumn}
          onChange={handleVolumeChange}
        />
        </div>
      )}
      </div>

      
    </>
  );
};

export default AudioPlayer;
