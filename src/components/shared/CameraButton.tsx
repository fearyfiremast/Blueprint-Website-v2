import React from 'react';
import { ReactComponent as CameraIcon } from '../../assets/icons/camera-white.svg';

// type CameraButtonProps = {
//   onClick?: () => void;
//   className?: string;
//   size?: 'desktop' | 'mobile';
//   'aria-label'?: string;
// };

const CameraButton = ({ onClick }: { onClick: () => void }) => {
  
  return (
    <button
      onClick={onClick}
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


// const CameraButton = ({
//   onClick,
//   className = '',
//   size = 'desktop',
//   'aria-label': ariaLabel = 'Upload photo',
// }: CameraButtonProps) => {
//   const [pressed, setPressed] = useState(false);
//   const [hovered, setHovered] = useState(false);

//   const isDesktop = size === 'desktop';
//   const dimension = isDesktop ? 'w-[120px] h-[120px]' : 'w-[72px] h-[72px]';

//   let bgClass = 'bg-bp-blue';
//   let iconColor = 'white';
//   if (pressed) {
//     bgClass = 'bg-bp-accent-light-blue';
//     iconColor = '#0146BE';
//   } else if (hovered) {
//     bgClass = 'bg-bp-accent-very-light-blue';
//     iconColor = '#0146BE';
//   }

//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-label={ariaLabel}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => { setHovered(false); setPressed(false); }}
//       onMouseDown={() => setPressed(true)}
//       onMouseUp={() => setPressed(false)}
//       className={`flex items-center justify-center rounded-[10px] cursor-pointer transition-colors duration-150 ${bgClass} ${dimension} ${className}`}
//       style={{ '--stroke-0': iconColor, '--fill-0': iconColor } as React.CSSProperties}
//     >
//       <CameraIcon className="w-[52%] h-[43%]" />
//     </button>
//   );
// };

export default CameraButton;
