import Navigation from "@/components/sections/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import FeatureShowcaseSection from "@/components/sections/FeatureShowcaseSection";
import SecondCTASection from "@/components/sections/SecondCTASection";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/ui/custom-cursor";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Navigation />

      <main className="overflow-x-hidden">
        <section id="hero" className="overflow-x-hidden">
          <HeroSection />
        </section>
        <section id="features" className="overflow-x-hidden">
          <FeatureShowcaseSection />
        </section>
        <section id="cta" className="overflow-x-hidden">
          <SecondCTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
