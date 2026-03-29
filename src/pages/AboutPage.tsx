import { useState, useMemo } from "react";
import PageContainer from "../components/layout/PageContainer";
import CameraButton from "../components/shared/CameraButton";
import PolaroidPhoto from "../components/shared/PolaroidPhoto";
import { GroupImages } from "../constants/about-us-media";

/** Random tilt in degrees, roughly -maxDeg … +maxDeg (inclusive). */
function randomTiltDeg(maxDeg: number, minDeg: number) {
  return Math.floor(Math.random() * (maxDeg - minDeg + 1)) + minDeg;
}

const AboutPage = () => {
  const INITIAL_VISIBLE = 3;
  const MAX_VISIBLE = 10;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  
  // Create and memoize rotations for each image
  const rotations = useMemo(() => {
    return GroupImages.map(() => randomTiltDeg(20, -20));
  }, []); // Empty dependency array means this runs once on mount
  
  const handleCameraClick = () => {
    if(visibleCount >= MAX_VISIBLE) {
      setVisibleCount(INITIAL_VISIBLE);
    } else {
      setVisibleCount(visibleCount + 1);
    }
  }
  
  const initialImages = GroupImages.slice(0, INITIAL_VISIBLE);
  const imagesToShow = GroupImages.slice(INITIAL_VISIBLE, visibleCount);
  
  return (
    <PageContainer>
      {/* Main Container */}
        <div className="pt-main-mobile-top md:pt-main-desktop-top flex flex-col justify-between">
          
        {/* About us section */}
        <div className="flex md:flex-row flex-col justify-between mb-[60px]">
          <div className="flex flex-col md:justify-between">
          {/* Title/text */}
            <h1 className="font-poppins text-7xl leading-none tracking-[-0.96px] text-blueprint-black mb-[24px]">
              <strong>about</strong> us
            </h1>

            {/* Text */}
            <p className="font-poppins text-3xl leading-10 text-blueprint-black w-90 md:w-[684px]">
              building innovative, tech-based solutions for communities and public welfare is the mission that brings us together.
            </p>
          </div>

          <div className="flex items-center">
          <CameraButton onClick={handleCameraClick} />
          </div>
        </div>
        
        {/* Photos Container, 3 photos then on click of Camera button, new photo drops ontop of existing photos (randomized rotation)*/}
        <div className="md:grid md:grid-cols-3 justify-items-center flex flex-col flex-wrap mb-[148px]"> 
          {initialImages.map((image, index) => (
            <PolaroidPhoto
              key={image.id}
              imageSrc={image.image}
              caption={image.caption}
              alt={image.caption}
              style={{ transform: `rotate(${rotations[index]}deg)` }}
            />
          ))}
          {/* Drops new photos on top of existing photos */}
          <div className="absolute grid grid-cols-7 translate-y-4" >
            {imagesToShow.map((image, index) => (
              <PolaroidPhoto
                key={image.id}
                imageSrc={image.image}
                caption={image.caption}
                alt={image.caption}
                className="animate-popIn"
                style={{ transform: `rotate(${rotations[INITIAL_VISIBLE + index]}deg)`, zIndex: index,
                 '--rotation': `${rotations[INITIAL_VISIBLE + index]}deg`, // Each one overlaps more
                }as React.CSSProperties}
              />
            ))}
          </div>
        </div>


    </div>
    </PageContainer>
  );
};
export default AboutPage;