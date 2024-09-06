import { useRef } from "react";
import BlogSection from "./blogSection/BlogSection";
import ContactSection from "./contactSection/ContactSection";
import Footer from "./footer/Footer";
import HeroSection from "./heroSection/HeroSection";
import JobsSection from "./jobsSection/JobsSection";
import "./LandingPage.css";
import Navbar from "./navbar/Navbar";
import DynamousSection from "./dynamousSection/DynamousSection";

function LandingPage() {
  const contactSectionRef = useRef<HTMLElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const jobsSectionRef = useRef<HTMLElement>(null);
  const blogSectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <Navbar
        sections={{
          heroSectionRef,
          contactSectionRef,
          jobsSectionRef,
          blogSectionRef,
        }}
      />
      <section ref={heroSectionRef}>
        <HeroSection contactSectionRef={contactSectionRef} />
      </section>
      <section ref={jobsSectionRef}>
        <JobsSection contactSectionRef={contactSectionRef} />
      </section>
      <ContactSection ref={contactSectionRef} />
      <section ref={blogSectionRef}>
        <BlogSection />
      </section>
      <DynamousSection />
      <Footer />
    </>
  );
}

export default LandingPage;
