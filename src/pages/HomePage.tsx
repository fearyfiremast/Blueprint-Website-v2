import React from "react";
import PageContainer from "../components/layout/PageContainer";
import Button from "../components/shared/Button";
import InfoCard from "../components/shared/InfoCard";
import Carousel from "../components/shared/Carousel-Interactive";
import InteractiveCarousel from "../components/shared/Carousel-Interactive";
const OUR_MEMBERS_CONTENT = {
  title: "Our members",
  heading: "Our talented members come from diverse cultures, professions, and social backgrounds.",
  body: "With a passion for social good and dedication to creating beautiful technology, our student project teams work alongside nonprofits to help them better serve their communities.",
  color: "bp-blue",
} as const;

const BLUEPRINT_MULTINATIONAL_CONTENT = {
  title: "Blueprint Multinational",
  heading: "This chapter of Blueprint is part of a much larger multinational community, originally started at UC Berkeley.",
  body: "As the fifth established chapter in Canada, our team is based largely at Simon Fraser University, and operating as a registered non profit!",
  color: "bp-orange",
} as const

const HomePage = () => {
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
      <section className="m-4">
        {/* Left side Heading and logos */}
        <div className="flex flex-col gap-12">
          <h2>impact that <strong>speaks for itself</strong></h2>
            {/* bullet points */}
            <div className="flex flex-col gap-12">

            </div>

            {/* logos */}
            <div>
            <Carousel autoScrollSpeed={1}>
              <InfoCard title={OUR_MEMBERS_CONTENT.title} heading={OUR_MEMBERS_CONTENT.heading} body={OUR_MEMBERS_CONTENT.body} color={OUR_MEMBERS_CONTENT.color} />
              

              {/* Blueprint Multinational */}
              <InfoCard title="1" heading={BLUEPRINT_MULTINATIONAL_CONTENT.heading} body={BLUEPRINT_MULTINATIONAL_CONTENT.body} color={BLUEPRINT_MULTINATIONAL_CONTENT.color} />
              <InfoCard title="2" heading={BLUEPRINT_MULTINATIONAL_CONTENT.heading} body={BLUEPRINT_MULTINATIONAL_CONTENT.body} 
              color="bp-accent-purple" />
              <InfoCard title="3" heading={BLUEPRINT_MULTINATIONAL_CONTENT.heading} body={BLUEPRINT_MULTINATIONAL_CONTENT.body} 
              color="bp-accent-very-light-blue" />
            </Carousel>

            </div>

            <Button variant="tertiary" className="uppercase">see all our projects</Button>
        </div>
          

        {/* Projects preview */}
        <div>
          <h2>our partnerships</h2>
          <ul>
            <li>partnership card placeholder</li>
            <li>partnership card placeholder</li>
          </ul>
          <p>See all our projects placeholder</p>
        </div>

      </section>

      {/* Students / testimonials */}
      <section className="m-4">
        <h2>launch a project for your non profit</h2>
        <p>Blueprint partner description placeholder</p>
        <button>Learn more placeholder</button>
        <hr />
      </section>

      {/* Upcoming Events */}
      <section className="m-4">
        <h2>for students: turn real projects into real opportunities.</h2>
        <p>blueprinters internship stats placeholder</p>
        <button>Join us placeholder</button>
        <p>upcoming events placeholder</p>
      </section>
    </PageContainer>
  );
};


export default HomePage;