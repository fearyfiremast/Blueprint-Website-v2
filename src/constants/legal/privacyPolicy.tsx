import type { LegalSection } from "../../components/legal/LegalPageLayout";

export const PRIVACY_POLICY_SECTIONS: LegalSection[] = [
  {
    heading: "",
    content: (
      <p className="m-0">
        SFU Blueprint is the public-facing name of Blueprint Tech for Good Society
        (&ldquo;SFU Blueprint&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or
        &ldquo;us&rdquo;). By accessing or using this website, you agree to the
        following Terms of Use.
      </p>
    ),
  },
  {
    heading: "Information we Collect",
    content: (
      <>
        <p className="m-0">
          We may collect information that you voluntarily submit through forms on
          our website, including:
        </p>
        <ul className="m-0 list-disc pl-[24px] flex flex-col gap-[4px]">
          <li>Name</li>
          <li>Email address</li>
          <li>Organization or nonprofit name</li>
          <li>Project proposal details</li>
          <li>Uploaded files or supporting materials</li>
        </ul>
        <p className="m-0">
          We may also collect limited technical information through analytics
          tools, such as browser type, device information, and general website
          usage data.
        </p>
      </>
    ),
  },
  {
    heading: "How we use Information",
    content: (
      <>
        <p className="m-0">We use the submitted information to:</p>
        <ul className="m-0 list-disc pl-[24px] flex flex-col gap-[4px]">
          <li>Review nonprofit and project proposals</li>
          <li>Communicate with applicants and collaborators</li>
          <li>Improve our website and organizational operations</li>
          <li>Coordinate projects and events</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Information Sharing",
    content: (
      <>
        <p className="m-0">
          We do not sell or rent personal information. Submitted information is
          only accessible to authorized members of SFU Blueprint involved in
          reviewing and managing projects, operations, or communications.
        </p>
        <p className="m-0">
          We may use trusted third-party services to operate our website and
          forms, including analytics, hosting, or form platforms.
        </p>
      </>
    ),
  },
  {
    heading: "Third-Party Services",
    content: (
      <>
        <p className="m-0">Our website may use third-party services such as:</p>
        <ul className="m-0 list-disc pl-[24px] flex flex-col gap-[4px]">
          <li>Google Analytics</li>
          <li>Vercel</li>
          <li>Google Forms or Typeform</li>
        </ul>
        <p className="m-0">
          These services may collect limited technical data according to their
          own privacy policies.
        </p>
      </>
    ),
  },
  {
    heading: "Data Retention",
    content: (
      <p className="m-0">
        We retain submitted information only as long as reasonably necessary
        for organizational, operational, or project-related purposes.
      </p>
    ),
  },
  {
    heading: "External Links",
    content: (
      <p className="m-0">
        SFU Blueprint shall not be liable for any damages or losses arising from
        the use of this website.
      </p>
    ),
  },
  {
    heading: "Changes to This Policy",
    content: (
      <p className="m-0">
        We may update these Terms of Use periodically. Continued use of the
        website after updates constitutes acceptance of the revised terms.
      </p>
    ),
  },
];

export const PRIVACY_POLICY_CONTACT = (
  <>
    <p className="m-0">
      If you have questions regarding these Terms of Use, please contact:{" "}
      <span className="font-semibold">Blueprint at SFU</span>
    </p>
    <p className="m-0 font-semibold">
      <a
        href="mailto:sfublueprint@gmail.com"
        className="text-bp-black hover:text-bp-blue transition-colors"
      >
        sfublueprint@gmail.com
      </a>
    </p>
  </>
);
