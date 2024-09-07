import { useRef } from "react";
import BlogSection from "./sections/BlogSection";
import ContactSection from "./sections/ContactSection";
import Footer from "../../../common/footer/Footer";
import HeroSection from "./sections/HeroSection";
import JobsSection from "./sections/JobsSection";
import "./LandingPage.css";
import Navbar from "../../../common/navbar/Navbar";
import DynamousSection from "./sections/DynamousSection";

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
