import LegalPageLayout from "../components/legal/LegalPageLayout";
import {
  PRIVACY_POLICY_CONTACT,
  PRIVACY_POLICY_SECTIONS,
} from "../constants/legal/privacyPolicy";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      titleLines={["Privacy Policy", "Content"]}
      sections={PRIVACY_POLICY_SECTIONS}
      contactContent={PRIVACY_POLICY_CONTACT}
      documentTitle="Privacy Policy"
    />
  );
}
