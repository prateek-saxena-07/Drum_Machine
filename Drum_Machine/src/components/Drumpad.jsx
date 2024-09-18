import React, { useEffect, useRef } from 'react';

const DrumPad = ({ sound, playSound }) => {
  const ref = useRef(null);

  // Handle click event
  const handleClick = () => {
    playSound(sound.id, ref.current);
 }

  // Listen for key press events
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toUpperCase() === sound.key) {
        playSound(sound.id, audioRef.current);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [sound.key, playSound, sound.id]);


  return (
    <>
      <div className="drum-pad" onClick={handleClick}>
        {sound.key}
        <audio src={sound.url}  id={sound.key} ref={ref} className='clip'></audio>
      </div>
    </>
  )

  
};

export default DrumPad;
