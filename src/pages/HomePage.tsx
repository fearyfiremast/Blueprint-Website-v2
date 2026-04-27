import React from "react";
import PageContainer from "../components/layout/PageContainer";
import Button from "../components/shared/Button";
import InfoCard from "../components/shared/InfoCard";
import Carousel from "../components/shared/Carousel";
import InteractiveCarousel from "../components/shared/Carousel-Interactive";
import { blueprintTestimonials, bpLogos } from "../constants/homepage-media";
import TestimonialCard from "../components/shared/TestimonialCard.tsx";
import { Link } from "react-router-dom";
import ProjectCard from "../components/home-page/HomeProjectCard";
const impactPoints = [
  {color: "bp-blue", text: "Reducing administrative workflows"},
  {color: "bp-accent-medium-blue", text: "Improving access to help and resources"},
  {color: "bp-accent-light-blue", text: "Increasing volunteer engagement"},
];

const HomePage = () => {
  const testimonial = blueprintTestimonials[1];
  return (
    // All margin values are placeholder
    <PageContainer>
      {/* Hero Section */}
      <section className="m-4">
        <h1>we are sfu blueprint</h1>
        <p>we build tech for social good.</p>
        <button>Learn more placeholder</button>
        <hr />
      </section>


      {/* Impact that speaks for itself*/}
      <section className="flex flex-row justify-between">
        {/* Left side Heading and logos */}
        <div className="flex flex-col gap-12 w-[440px]">
          <span className="text-bp-black text-3xl font-normal font-['Poppins'] 
          md:w-72 justify-start md:text-4xl leading-8 md:leading-[50.40px]">
            <h2>
              impact that 
            </h2>
              <strong className="font-semibold">speaks for itself</strong>
          </span>
            {/* bullet points */}
            <div className="flex flex-col justify-start items-start gap-[9px]">

            {impactPoints.map((point) => (
              <div className="flex flex-row gap-[18px] justify-start items-center">
                <div className={`w-4 h-4 bg-${point.color} rounded-[3px] shrink-0`}/>
                {point.text}
              </div>
            ))}
            </div>

            {/* logos */}
            <div className="relative">
              
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 md:w-36 bg-gradient-to-r from-bp-lightest-grey to-transparent" />
              
              <Carousel>
              {bpLogos.map((logo) => (
                <img className="h-full w-full object-contain" key={logo.id} src={logo.image} alt={logo.id.toString()} />
              ))}
              </Carousel>
              
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 md:w-36 bg-gradient-to-l from-bp-lightest-grey to-transparent" />
            </div>

            <div className="w-52 h-16">
              <Link to="/projectspage">
              <Button variant="tertiary" className="!font-light uppercase">see all our projects</Button>
              </Link>
            </div>
        </div>
          

        {/* Projects preview 
        TO DO flips through project cards with scrollwheel
        */}
        <div>
          <ProjectCard />
        </div>

      </section>

      {/* Students / testimonials */}
        {/* Students: turn real projects into real opportunities */}
        <div className="flex flex-row justify-between pt-[120px] pb-[60px] font-['Poppins']">
              <div className="flex flex-col gap-6 w-[660px] text-zinc-800">
                  <div className="text-heading-s-reg">students: turn real projects <br/> into 
                  <span className="font-semibold "> real opportunities. </span>
                  </div>
                <div className="flex flex-1 text-body-m-reg leading-8">By working with a passionate interdisciplinary team and making a real impact in their community, our members have gained invaluable skills,
                   allowing them to pursue successful careers in tech. Join us to see the Blueprint difference. </div>
              </div>
              {/* button */}
              <Button variant="tertiary" className="uppercase !font-light !w-48 !h-16">join us</Button>             
        </div>

        {/* testimonials */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] h-[390px] w-screen pb-[120px]">
              <InteractiveCarousel autoScrollSpeed={1}>
                {blueprintTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} name={testimonial.name} role={testimonial.role} picture={testimonial.image} caption={testimonial.caption} />
                ))}
              </InteractiveCarousel>
        </div>


      {/* Upcoming Events */}
      <img src="/images/home/photos/group.png" alt="Upcoming Events" />
      <div className="relative pb-[120px]">

      </div>
    </PageContainer>
  );
};


export default HomePage;