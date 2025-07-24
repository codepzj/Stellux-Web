import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import LearningPathSection from "@/components/LearningPathSection";
import CommunitySection from "@/components/CommunitySection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <LearningPathSection />
        <CommunitySection />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}