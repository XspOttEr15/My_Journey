import React from 'react';
import './styles/Instructions.css'; // Ensure you have a corresponding CSS file

const Instructions = ({ isVisible,onPlayClick }) => {
  return (
    <div className={`instructions-overlay${isVisible ? ' visible' : ''}`}>
      <div className="overlay"></div>
      <div className='text-6xl mb-5'>Tutorial</div>
      <p className='text-xl'>Move: WASD</p>
      <p className='text-xl'>Jump: SPACEBAR</p>
      <p className='text-xl'>Look: MOUSE</p>
      <p className='text-xl'>Cursor: ESC</p>
      <p className='text-xl'>Navbar: ESCx2</p>
      <button id="button" onClick={onPlayClick}  type="button" class="mt-5 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg  text-2xl px-5 py-2.5 text-center me-2 mb-2">CLICK HERE TO PLAY</button>
    </div>
  );
};

export default Instructions;