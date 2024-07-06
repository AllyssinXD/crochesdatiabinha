import { useRef } from "react";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import JobsSection from "./JobsSection";
import "./LandingPage.css";
import Navbar from "./Navbar";
import DynamousSection from "./DynamousSection";

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
