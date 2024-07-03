import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import JobsSection from "./JobsSection";
import "./LandingPage.css";
import Navbar from "./Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <JobsSection />
      <ContactSection />
      <BlogSection />
      <Footer />
    </>
  );
}

export default LandingPage;
