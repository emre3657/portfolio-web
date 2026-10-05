import { Header } from "../../components/common/Header/Header";
import { HeroSection } from "./hero-section/HeroSection";
import { AboutSection } from "./about-section/AboutSection";
import { SkillsSection } from "./skills-section/SkillsSection";
import { ProjectsSection } from "./projects-section/ProjectsSection";
import { ExperienceSection } from "./experience-section/Experience";
import { CertificatesSection } from "./certificates-section/CertificatesSection";
import { ContactSection } from "./contact-section/ContactSection";
import { FooterSection } from "./footer-section/FooterSection";

export function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificatesSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
