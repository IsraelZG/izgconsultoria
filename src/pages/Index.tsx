import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import JourneySection from "@/components/JourneySection";
import GuaranteedRevenueSection from "@/components/GuaranteedRevenueSection";
import WhyIZGSection from "@/components/WhyIZGSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <JourneySection />
      <GuaranteedRevenueSection />
      <WhyIZGSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
