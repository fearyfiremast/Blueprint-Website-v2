import type { LegalSection } from "../../components/legal/LegalPageLayout";

export const TERMS_AND_CONDITIONS_SECTIONS: LegalSection[] = [
  {
    heading: "",
    content: (
      <p className="m-0">
        SFU Blueprint is the public-facing name of Blueprint Tech for Good
        Society (&ldquo;SFU Blueprint&rdquo;, &ldquo;we&rdquo;,
        &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By accessing or using this
        website, you agree to the following Terms of Use.
      </p>
    ),
  },
  {
    heading: "Website Use",
    content: (
      <p className="m-0">
        This website is provided for informational purposes about SFU Blueprint
        and our programs. You agree to use the site only for lawful purposes and
        in a manner that does not infringe the rights of others or restrict their
        use of the website.
      </p>
    ),
  },
  {
    heading: "Intellectual Property",
    content: (
      <p className="m-0">
        All content on this website, including text, graphics, logos, images,
        and design elements, is owned by SFU Blueprint unless otherwise stated.
        You may not reproduce, distribute, or modify any content without prior
        written permission.
      </p>
    ),
  },
  {
    heading: "Proposal Submissions",
    content: (
      <p className="m-0">
        Submitting a project proposal or application through our website does
        not guarantee acceptance or partnership. SFU Blueprint reserves the right
        to review, accept, or decline any submission at its sole discretion.
      </p>
    ),
  },
  {
    heading: "External Links",
    content: (
      <p className="m-0">
        Our website may contain links to third-party websites. SFU Blueprint is
        not responsible for the content, privacy practices, or availability of
        those external sites.
      </p>
    ),
  },
  {
    heading: "Disclaimer",
    content: (
      <p className="m-0">
        The information on this website is provided on an &ldquo;as is&rdquo;
        basis without warranties of any kind, either express or implied. SFU
        Blueprint does not warrant that the website will be uninterrupted,
        error-free, or free of harmful components.
      </p>
    ),
  },
  {
    heading: "Limitation of Liability",
    content: (
      <p className="m-0">
        To the fullest extent permitted by law, SFU Blueprint shall not be liable
        for any direct, indirect, incidental, special, or consequential damages
        arising from your use of this website or reliance on its content.
      </p>
    ),
  },
  {
    heading: "Changes to Terms",
    content: (
      <p className="m-0">
        We may update these Terms of Use from time to time. Continued use of the
        website after changes are posted constitutes acceptance of the revised
        terms.
      </p>
    ),
  },
];

export const TERMS_AND_CONDITIONS_CONTACT = (
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
