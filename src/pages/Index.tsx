import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Team } from "@/components/Team";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFB1B1] to-[#9FEFE7] bg-fixed">
      <Header />
      <div id="inicio">
        <Hero />
      </div>
      <div id="portafolio">
        <Portfolio />
      </div>
      <div id="nosotros">
        <Team />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <div id="contacto">
        <Footer />
      </div>
    </div>
  );
};

export default Index;