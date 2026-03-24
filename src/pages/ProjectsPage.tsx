import React, { useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import ProjectCard from "../components/projects-page/ProjectProjectCard";
import Filters from "../components/shared/Filters";

const ProjectsPage = () => {
  const filterNames = ["Web-App", "Website", "Plug-In"] as const;
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <PageContainer
      className="bg-[url('/images/non-profit/desktop_partner_crosspoint.svg')] bg-no-repeat bg-blueprint-gray-light 
                              min-[1280px]:bg-[calc(100%+585px)_-500px]
                              max-[1279px]:bg-[calc(100%+689px)_-500px]
                              max-md:bg-[url('/images/non-profit/mobile_partner_crosspoint.svg')] max-md:bg-[calc(100%+130px)_-132px]"
    >
      {/* Main Container Flex Column */}
      <div className="flex flex-col gap-4 items-center justify-center">
        {/* Title — desktop/heading/m-reg */}
        <h1 className="text-center font-poppins text-blueprint-heading text-heading-m-reg-mobile desktop:text-heading-m-reg">
          our projects
        </h1>

        {/* Filters — light variant for light gray / patterned background (Figma) */}
        <div
          className="flex flex-row flex-wrap gap-[10px] items-center justify-center"
          role="group"
          aria-label="Project type filters"
        >
          {filterNames.map((name, index) => (
            <Filters
              key={name}
              variant="light"
              state={selectedIndex === index ? "selected" : "default"}
              title={name}
              onClick={() => setSelectedIndex(index)}
              aria-pressed={selectedIndex === index}
            />
          ))}
        </div>

        {/* Projects Flex Row  Max 2 cards per row*/}
        <div className="flex flex-row gap-4 items-center justify-center">
          <div className="flex flex-row gap-4 items-center justify-center">
            <ProjectCard />
          </div>
          {/*
              <div className="flex flex-col gap-4 items-center justify-center">
                <ProjectCard />
                <ProjectCard />
              </div> */}
        </div>
      </div>
      {/* CTA Button - Absolute Positioned Centered */}
      <div />
    </PageContainer>
  );
};

export default ProjectsPage;
