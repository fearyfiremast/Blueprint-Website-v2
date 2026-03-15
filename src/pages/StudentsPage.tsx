import CalloutCard from "../components/shared/CalloutCard";
import Button from "../components/shared/Button";

const HERO_CONTENT = {
  title: { bold: "join", regular: " our team" },
  subtitle:
    "gain real-world experience in the tech industry and work with other passionate students, all while making a positive impact in your community.",
  callout: {
    title: "BLUEPRINT IS RIGHT FOR YOU IF YOU ARE...",
    body: "• A post-secondary student in Greater Vancouver\n• Passionate about creating meaningful impact in your community\n• Interested in tech, design, or project management and excited to grow through real, collaborative project work",
  },
};

const EXPERIENCE_CONTENT = {
  heading: "a typical experience at sfu blueprint",
  body: "Teams of roughly ten Blueprint members will work together to bring a project from its earliest stages to final client handoff. Cross-functional collaboration is the core of all Blueprint projects!",
};

const ROLES = [
  {
    title: "project manager",
    description:
      "Defining project requirements and timelines, and supporting the team by outlining weekly deliverables and keeping the project on track.",
    color: "bg-blueprint-orange",
  },
  {
    title: "designer",
    description:
      "Crafting user experiences and interfaces that are intuitive, accessible, and visually aligned with the project's goals.",
    color: "bg-blueprint-accent-purple",
  },
  {
    title: "developer",
    description:
      "Building and implementing the technical solution, writing clean code, and collaborating to bring the design to life.",
    color: "bg-blueprint-roleAccent-dev",
  },
];

const TIMELINE_CONTENT = {
  heading: "work with a timeline",
  body: "Projects typically run for about 8 months. The first 2-3 months focus on design, followed by development and testing for the remaining 6 months (timelines may vary by project). Students commit around 10 hours per week, with project work intentionally slowing down during midterms and finals to help students balance responsibilities.",
};

const StudentsPage = () => {
  const scrollToPositions = () => {
    document
      .getElementById("open-positions")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Hero Section - Dark Background */}
      <section className="relative bg-blueprint-black overflow-hidden">
        {/* Decorative cross-point background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* Vertical line */}
          <div className="hidden lg:block absolute right-[calc(50%-287px)] top-0 bottom-0 w-px border-l border-dashed border-blueprint-darkGrey opacity-40" />
          {/* Horizontal line */}
          <div className="hidden lg:block absolute left-0 right-0 top-[280px] h-px border-t border-dashed border-blueprint-darkGrey opacity-40" />
          {/* Concentric arcs (decorative circles) */}
          <div className="hidden lg:block absolute right-[-200px] top-[-300px]">
            {/* Small arc */}
            <div className="absolute right-[80px] top-[320px] w-[382px] h-[382px] rounded-full border border-dashed border-blueprint-darkGrey opacity-30" />
            {/* Medium arc */}
            <div className="absolute right-[-100px] top-[140px] w-[734px] h-[734px] rounded-full border border-dashed border-blueprint-darkGrey opacity-30" />
            {/* Large arc */}
            <div className="absolute right-[-270px] top-[-30px] w-[1076px] h-[1076px] rounded-full border border-dashed border-blueprint-darkGrey opacity-30" />
          </div>
          {/* Colored accent arcs */}
          <div className="hidden lg:block">
            <div className="absolute right-[60px] top-[160px] w-[200px] h-[200px]">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                <path
                  d="M 200 100 A 100 100 0 0 0 100 0"
                  stroke="#0146BE"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="absolute right-[-40px] top-[380px] w-[200px] h-[200px]">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                <path
                  d="M 0 100 A 100 100 0 0 0 100 200"
                  stroke="#71EC59"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="absolute right-[-120px] top-[520px] w-[200px] h-[200px]">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                <path
                  d="M 0 100 A 100 100 0 0 1 100 0"
                  stroke="#D2A6FB"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
          {/* Plus sign at intersection */}
          <div className="hidden lg:block absolute right-[calc(50%-303px)] top-[264px] w-8 h-8">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              className="w-full h-full text-blueprint-darkGrey opacity-60"
            >
              <line
                x1="16"
                y1="4"
                x2="16"
                y2="28"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="4"
                y1="16"
                x2="28"
                y2="16"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>

        <div className="relative z-10 w-full px-6 md:px-10 xl:px-36 pt-[142px] pb-[100px] max-md:pt-[90px] max-md:pb-[60px]">
          {/* Title + Button row */}
          <div className="flex justify-between items-start gap-8 max-md:flex-col max-md:gap-6 mb-[60px] max-md:mb-[35px]">
            {/* Title Block */}
            <div className="flex flex-col gap-6 max-md:gap-3 text-white max-w-[954px]">
              <h1
                className="font-poppins text-[96px] leading-none tracking-[-1.92px]
                           max-md:text-[56px] max-md:tracking-[-1.12px]"
              >
                <strong className="font-bold">{HERO_CONTENT.title.bold}</strong>
                <span className="font-normal">{HERO_CONTENT.title.regular}</span>
              </h1>
              <p
                className="font-poppins text-[30px] leading-[1.4] tracking-[-0.6px] max-w-[790px]
                           max-md:text-[20px] max-md:leading-[1.4] max-md:tracking-[-0.4px]"
              >
                {HERO_CONTENT.subtitle}
              </p>
            </div>

            {/* Open Positions Button */}
            <div className="shrink-0 lg:mt-[138px]">
              <Button onClick={scrollToPositions} className="w-[200px] max-md:w-full">
                OPEN POSITIONS
              </Button>
            </div>
          </div>

          {/* Callout Card */}
          <div className="max-w-[647px] max-md:max-w-full">
            <CalloutCard
              title={HERO_CONTENT.callout.title}
              body={HERO_CONTENT.callout.body}
              stripeColor="#71EC59"
              variant="dark"
              backgroundColor="#404040"
              titleColor="#FFFFFF"
              bodyColor="#FFFFFF"
            />
          </div>
        </div>
      </section>

      {/* Typical Experience Section */}
      <section className="w-full px-6 md:px-10 xl:px-36 pt-[108px] max-md:pt-[60px]">
        {/* Section Intro */}
        <div className="max-w-[852px] mb-[90px] max-md:mb-[50px]">
          <h2
            className="font-poppins text-[48px] leading-none tracking-[-0.96px] text-blueprint-black mb-[24px]
                       max-md:text-[28px] max-md:tracking-[-0.56px] max-md:mb-[16px]"
          >
            <strong className="font-bold">a typical experience</strong>
            <span className="font-normal"> at sfu blueprint</span>
          </h2>
          <p
            className="font-poppins text-[16px] leading-normal text-blueprint-black max-w-[852px]
                       max-md:text-[14px]"
          >
            {EXPERIENCE_CONTENT.body}
          </p>
        </div>

        {/* Work with a Team */}
        <div className="mb-[90px] max-md:mb-[50px]">
          <h3
            className="font-poppins text-[36px] leading-[1.4] tracking-[-0.72px] text-blueprint-black mb-[40px]
                       max-md:text-[22px] max-md:tracking-[-0.44px] max-md:mb-[24px]"
          >
            work with a team
          </h3>

          {/* Role Cards */}
          <div className="flex flex-wrap justify-center gap-6 max-md:flex-col max-md:items-center">
            {ROLES.map((role, index) => (
              <RoleCard
                key={role.title}
                title={role.title}
                description={role.description}
                color={role.color}
                offset={index}
              />
            ))}
          </div>
        </div>

        {/* Work with a Timeline */}
        <div className="mb-[90px] max-md:mb-[50px]">
          <h3
            className="font-poppins text-[36px] leading-[1.4] tracking-[-0.72px] text-blueprint-black mb-[24px]
                       max-md:text-[22px] max-md:tracking-[-0.44px] max-md:mb-[16px]"
          >
            {TIMELINE_CONTENT.heading}
          </h3>
          <p
            className="font-poppins text-[16px] leading-normal text-blueprint-black max-w-[584px]
                       max-md:text-[14px] max-md:max-w-full"
          >
            {TIMELINE_CONTENT.body}
          </p>

          {/* Timeline image placeholder */}
          <div className="mt-[36px] w-full h-[289px] max-md:h-[131px] bg-blueprint-gray-light rounded-lg flex items-center justify-center">
            <span className="font-poppins text-[16px] text-blueprint-darkGrey">
              Image placeholder
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

type RoleCardProps = {
  title: string;
  description: string;
  color: string;
  offset: number;
};

function RoleCard({ title, description, color, offset }: RoleCardProps) {
  // Stagger cards vertically on desktop for the cascading effect
  const offsetClass =
    offset === 0
      ? "lg:mt-[124px]"
      : offset === 1
        ? "lg:mt-[66px]"
        : "lg:mt-0";

  return (
    <div
      className={`w-[300px] max-md:w-[240px] bg-white rounded-xl overflow-hidden flex flex-col ${offsetClass}`}
    >
      {/* Colored header with wave shape */}
      <div className={`relative h-[116px] ${color} overflow-hidden`}>
        <svg
          viewBox="0 0 300 116"
          fill="none"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full"
        >
          <path
            d="M0 116 L0 80 Q50 116 150 95 Q250 74 300 90 L300 116 Z"
            fill="white"
          />
        </svg>
        <p className="relative z-10 font-poppins text-white text-[20px] font-medium p-4 max-md:text-[16px]">
          {title}
        </p>
      </div>
      {/* Description */}
      <div className="p-5 pt-2 flex-1">
        <p className="font-poppins text-[13px] leading-relaxed text-blueprint-black max-md:text-[12px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default StudentsPage;
