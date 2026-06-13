import LegalPageLayout from "../components/legal/LegalPageLayout";
import {
  TERMS_AND_CONDITIONS_CONTACT,
  TERMS_AND_CONDITIONS_SECTIONS,
} from "../constants/legal/termsAndConditions";

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      titleLines={["Terms and", "Use of Content"]}
      sections={TERMS_AND_CONDITIONS_SECTIONS}
      contactContent={TERMS_AND_CONDITIONS_CONTACT}
      documentTitle="Terms and Conditions"
    />
  );
}
