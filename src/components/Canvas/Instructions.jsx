import React from 'react';
import './styles/Instructions.css'; // Ensure you have a corresponding CSS file

const Instructions = ({ isVisible }) => {
  return (
    <div className={`instructions-overlay${isVisible ? ' visible' : ''}`}>
      <div className="overlay"></div>
      <h1 id="button" >CLICK HERE TO PLAY</h1>
      <p className='text-xl'>Move: WASD</p>
      <p className='text-xl'>Jump: SPACEBAR</p>
      <p className='text-xl'>Look: MOUSE</p>
      <p className='text-xl'>Cursor: ESC</p>
      <p className='text-xl'>Navbar: ESCx2</p>
    </div>
  );
};

export default Instructions;