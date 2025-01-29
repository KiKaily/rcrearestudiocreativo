import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Team } from "@/components/Team";
import { Partners } from "@/components/Partners";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Portfolio />
      <Team />
      <Partners />
    </div>
  );
};

export default Index;