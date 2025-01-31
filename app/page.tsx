import Hero from "@/components/hero";
import Categories from "@/components/categories";
import FeaturedDeals from "@/components/featured-deals";
import TrustSection from "@/components/trust-section";
import HowItWorks from "@/components/how-it-works";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <Categories />
      <FeaturedDeals />
      <HowItWorks />
      <TrustSection />
    </div>
  );
}