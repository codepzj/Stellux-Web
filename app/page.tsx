import Navbar from '@/components/Navbar'
import HeroSection from '@/components/home/HeroSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import LearningPathSection from '@/components/home/LearningPathSection'
import CommunitySection from '@/components/home/CommunitySection'
import NewsSection from '@/components/home/NewsSection'
import Footer from '@/components/Footer'

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
      <div className="py-16 md:py-24 lg:py-32"></div>
      <Footer />
    </>
  )
}
