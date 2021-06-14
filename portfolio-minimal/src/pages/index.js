import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

import React from "react";

export default function IndexPage() {
  return (
    <>
      <Seo title="Hyesun's Personal Website" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="details" heading="Skills" />
        <ProjectsSection sectionId="features" heading="Personal Projects" />
        <ContactSection sectionId="github" heading="Let's connect with me" />
      </Page>
    </>
  );
}
