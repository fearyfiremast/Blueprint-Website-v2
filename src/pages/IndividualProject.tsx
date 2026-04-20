import React, { ReactElement, ReactNode } from "react";
import { useParams, Link } from "react-router-dom";

import { Projects } from "../constants/projects";
import CaseStudies from "../constants/caseStudies";

import PageContainer from "../components/layout/PageContainer";
import CaseStudyLayout from "../components/case-study/CaseStudyLayout";

const IndividualProject = () => {
  const { slug } = useParams();
  const project = Projects.find((p) => p.slug === slug);
  const caseStudy = CaseStudies.find((c) => c.slug == slug)  

  /**
   * Local component that is used in CaseStudyLayout and fallback case where no project exists in Projects file. 
   * Reduces copied code across files.
   * @param {string} description - The descriptive text to the right of the back arrow
   * @returns {ReactElement}
   */
  const BackNav = (description: string) => {
    return (
        <nav className="tablet:mb-[3.75rem] w-fit font-poppins decoration-black hover:bg-blueprint-grey rounded-[5px] tablet:pl-2 tablet:pr-4 tablet:py-2 tablet:text-body-m-bold text-mobile-body-m-bold px-2 py-2 mb-2">
          <Link to="/projectspage" className="flex flex-row items-center gap-[6px]"> <img className="tablet:size-[26px] size-[21px] inline-block" src="/src/assets/icons/arrow-left-black.svg"/> {description.toUpperCase()} </Link>
        </nav>   
    );
  }

  // Handles fallback case for if no case study for slug
  if (!caseStudy) {
    const slugItem = <span className="tablet:text-body-m-bold text-mobile-body-m-bold">'{slug}'</span>;
    return (
      <PageContainer>
        <h1 className="font-poppins tablet:text-body-m-reg text-mobile-body-m-reg">
          {<>Case study for {slugItem} does not exist.</>}
        </h1>
        {BackNav("back to projects page")}
      </PageContainer>
    );
  }

  // Logs error to console if project and casestudy with matching slug have different date values
  if (project && (caseStudy.hero.date !== project.date)) {
    console.error(`project and case study with slug '${slug}' have different date values.`)
  }

  return (
    <CaseStudyLayout backNav={BackNav("back")} hero={caseStudy.hero} solution={caseStudy.solution} testemonial={caseStudy.testemonial} team={caseStudy.team} slug={caseStudy.slug}/>
  )
}

export default IndividualProject;