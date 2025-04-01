
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Team } from "@/components/Team";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { VideoPortfolio } from "@/components/VideoPortfolio";
import { PhotoGallery } from "@/components/PhotoGallery";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: `linear-gradient(90deg, #FD7F7F 0%, #77C6BD 100%)` }}>
      <Header />
      <div id="inicio">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="portafolio">
        <Portfolio />
      </div>
      <div id="fototeca">
        <PhotoGallery />
      </div>
      <div id="videoteca">
        <VideoPortfolio />
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
