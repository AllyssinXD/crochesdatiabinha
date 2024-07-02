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
    </>
  );
}

export default LandingPage;
