import React, { useContext, useEffect, useRef } from 'react';
import "./AudioPlayer.css";
import "/audios/bgm_home.mp3";
import { DataContext } from '../../App';

const AudioPlayer = () => {
  const {
    ColseBgmusic,
    Volumn,
  } = useContext(DataContext);
  
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = Volumn;
    }

    if (ColseBgmusic) {
      audio.pause();
    } 
    
    if(!ColseBgmusic){
      audio.play();
    }

  }, [Volumn, ColseBgmusic]);

  return (
      <audio
        ref={audioRef}
        controls
        loop
        id="audio"
        className='w-full h-[38px]'
      >
        <source src="/audios/bgm_home.mp3" type="audio/mpeg" />
      </audio>
  );
};

export default AudioPlayer;
