import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Privacy Policy", description: "How CEMS LTD handles information sent through this website.", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <>
      <PageHead title="Privacy Policy" />
      <section className="section">
        <div className="wrap prose">
          <p>This policy explains how {site.name} uses information collected through this website. This is a general template. Please have it reviewed to make sure it fits your business and local law.</p>
          <h2>Information we collect</h2>
          <p>When you use our quote request form we receive the details you enter: your name, company, phone number, email address, the service you need, the project location, your project description and any file you choose to attach. If analytics is enabled, we also collect anonymous usage data such as pages visited.</p>
          <h2>How we use it</h2>
          <p>We use your details only to reply to your enquiry and to provide the services you ask about. We do not sell your information.</p>
          <h2>Sharing</h2>
          <p>Form messages are delivered by an email service provider. We share information with others only when the law requires it.</p>
          <h2>Keeping your information</h2>
          <p>We keep enquiries for as long as needed to respond and to keep business records.</p>
          <h2>Your choices</h2>
          <p>You can ask us to see, correct or delete the information we hold about you by contacting us at <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.</p>
          <h2>Contact</h2>
          <p>{site.name}, {site.street}, {site.area}, {site.city}, {site.country}. {site.pobox}.</p>
        </div>
      </section>
    </>
  );
}
