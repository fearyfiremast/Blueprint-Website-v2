import { useState, useMemo } from "react";
import PageContainer from "../components/layout/PageContainer";
import CameraButton from "../components/shared/CameraButton";
import PolaroidPhoto from "../components/shared/PolaroidPhoto";
import { GroupImages } from "../constants/about-us-media";
import InfoCard from "../components/shared/InfoCard";
import {useRive, Layout, Fit, Alignment, useStateMachineInput} from "@rive-app/react-webgl2";
import aboutValuesRiv from "../assets/rive/about-values.riv?url";
import revisedRiv from "../assets/rive/Revised-Desktop.riv?url";
import aboutValuesMobileRiv from "../assets/rive/about-values-mobile.riv?url";

const OUR_MEMBERS_CONTENT = {
  title: "Our members",
  heading: "Our talented members come from diverse cultures, professions, and social backgrounds.",
  body: "With a passion for social good and dedication to creating beautiful technology, our student project teams work alongside nonprofits to help them better serve their communities.",
  color: "blueprint-navyblue",
} as const;

const BLUEPRINT_MULTINATIONAL_CONTENT = {
  title: "Blueprint Multinational",
  heading: "This chapter of Blueprint is part of a much larger multinational community, originally started at UC Berkeley.",
  body: "As the fifth established chapter in Canada, our team is based largely at Simon Fraser University, and operating as a registered non profit!",
  color: "blueprint-roleAccent-pm",
} as const

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

  // Rive animation
  const STATE_MACHINE_NAME = "MainStateMachine";
  
  const { rive, RiveComponent } = useRive({
    src: revisedRiv,
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    autoBind: true,
    layout: new Layout({
      fit: Fit.FitWidth,
    }),
    onRiveReady: () => {
      console.log("Rive loaded successfully!");
      
    },
  });

  // Mobile Rive animation
  const {rive: mobileRive, RiveComponent: MobileRiveComponent} = useRive({
    src: aboutValuesMobileRiv,
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    autoBind: true,
    layout: new Layout({
      fit: Fit.FitHeight,
    }),
    onRiveReady: () => {
      console.log("Mobile Rive loaded successfully!");
    },
  });

  return (
    <PageContainer className="bg-blueprint-gray-lightest">
      {/* Main Container */}
      <div className="pt-main-mobile-top md:pt-main-desktop-top flex flex-col justify-between">
          
        {/* About us section */}
        <div className="flex md:flex-row flex-col justify-between mb-[100px]">
          <div className="flex flex-col md:justify-between max-md:pb-[62px] gap-3 md:gap-6">
          {/* Title/text */}
            <h1 className="font-poppins text-5xl md:text-7xl leading-none tracking-[-0.96px] text-blueprint-black ">
              <strong>about</strong> us
            </h1>

            {/* Text */}
            <p className="font-poppins text-xl md:text-3xl leading-7 md:leading-10 text-blueprint-black w-90 md:w-[684px]">
              building innovative, tech-based solutions for communities and public welfare is the mission that brings us together.
            </p>
          </div>

          <div className="flex items-center">
          <CameraButton onClick={handleCameraClick} />
          </div>
        </div>
        
        {/* Photos Container, 3 photos then on click of Camera button, new photo drops ontop of existing photos (randomized rotation)*/}
        <div className="relative md:grid md:grid-cols-3 md:justify-items-center flex flex-col flex-wrap mb-[50px]"> 
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
          <div className="absolute grid grid-rows-7 h-[500px] md:grid-cols-7 translate-y-4 w-full justify-items-center">
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

          {/* Info Cards Container*/}
        </div>
          <div className="relative z-10 bg-blueprint-gray-light pt-[108px] flex flex-col items-center justify-center gap-2 pb-[148px] lg:flex-row">
             {/* Our members  */}
            <InfoCard title={OUR_MEMBERS_CONTENT.title} heading={OUR_MEMBERS_CONTENT.heading} body={OUR_MEMBERS_CONTENT.body} color={OUR_MEMBERS_CONTENT.color} />
            

            {/* Blueprint Multinational */}
            <InfoCard title={BLUEPRINT_MULTINATIONAL_CONTENT.title} heading={BLUEPRINT_MULTINATIONAL_CONTENT.heading} body={BLUEPRINT_MULTINATIONAL_CONTENT.body} color={BLUEPRINT_MULTINATIONAL_CONTENT.color} />
          </div>

          {/* Values Section — Rive needs a real URL from Vite (?url) and a sized box for the canvas */}
          <div className="relative z-0 flex flex-col md:gap-10">
            <h2 className="flex flex-col font-poppins md:text-7xl">
              our <strong>values</strong>
            </h2>
            
          </div>
          <div className="w-full h-[500px] pointer-events-auto">
            {/* <MobileRiveComponent/> */}
            <RiveComponent/>
          </div>
      </div>

    </PageContainer>
  );
};

export default AboutPage;