
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
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="foto">
        <PhotoGallery />
      </section>
      <section id="video">
        <VideoPortfolio />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="partners">
        <Partners />
      </section>
      <section id="contacto">
        <Footer />
      </section>
    </div>
  );
};

export default Index;
