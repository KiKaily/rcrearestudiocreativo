import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Team } from "@/components/Team";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Portfolio />
      <Team />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;