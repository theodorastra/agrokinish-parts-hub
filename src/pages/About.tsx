
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import MissionValues from "@/components/about/MissionValues";
import TeamSection from "@/components/about/TeamSection";
import ContactCTA from "@/components/about/ContactCTA";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <CompanyStory />
        <MissionValues />
        <TeamSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;
