import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ValuesSection from '@/components/values-section';
import ServicesSection from '@/components/services-section';
import PortfolioSection from '@/components/portfolio-section';
import CTASection from '@/components/cta-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <ValuesSection />
      <ServicesSection />
      <PortfolioSection />
      <CTASection />
      <Footer />
    </main>
  );
}

