import React from 'react';
import { ReactComponent as CameraIcon } from '../../assets/icons/camera-white.svg';
import cameraSound from '../../assets/camera.sound.mp3';
import { useState, useEffect } from 'react';


function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

const CameraButton = ({ onClick }: { onClick: () => void }) => {
  const handleClick = () => {
    const audio = new Audio(cameraSound);
    audio.play();
    onClick();
    
    if(useWindowWidth() < 768 && 'vibrate' in navigator) {
      navigator.vibrate([1000]);
    }
  };  
  return (
    <button
      onClick={handleClick}
      className={`w-20 h-18 md:w-28 md:h-24 flex flex-col text-bp-white rounded-[10px] cursor-pointer
      bg-bp-black hover:bg-bp-darkest-grey active:bg-bp-dark-grey`}
    >
      {/* CONTENT */}
      <div className="flex flex-col items-center justify-center gap-[5px] md:gap-[7px] 
        px-[21px] pt-[14px] pb-[9px] md:px-[30px] md:pb-[12px] md:pt-[19px]">
        <CameraIcon className="w-9 h-7 md:w-12 md:h-9" />
        <p className="font-poppins text-bp-white uppercase text-center justify-start text-[10px] md:text-sm font-medium">click</p>
      </div>
    </button>
  );
};


export default CameraButton;
