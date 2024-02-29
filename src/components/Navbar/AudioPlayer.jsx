import React, { useContext, useEffect, useRef } from 'react';
import "./AudioPlayer.css";
import "/audios/bgm_home.mp3";
import { DataContext } from '../../App';

const AudioPlayer = () => {
  const {
    ColseBgmusic,
    setColseBgmusic,
    Volumn,
    setVolumn
  } = useContext(DataContext);
  
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = Volumn;

      if (ColseBgmusic) {
        audio.pause();
      } else {
        // Check if user has interacted with the document
        const playPromise = audio.play();

        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error('Auto-play failed:', error);
          });
        }
      }
    }
  }, [Volumn, ColseBgmusic]);

  return (
    <div className="w-full">
      <audio
        ref={audioRef}
        controls
        loop
        id="audio"
        className=" lg:w-60 lg:h-7 "
      >
        <source src="/audios/bgm_home.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default AudioPlayer;
