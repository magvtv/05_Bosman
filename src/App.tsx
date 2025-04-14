import { useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProjectGallery } from "@/components/ProjectGallery";
import { AboutArchitect } from "@/components/AboutArchitect";
import { DesignPhilosophy } from "@/components/DesignPhilosophy";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

function App() {
  const projectsRef = useRef<HTMLElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-architect-off-white">
      <HeroSection scrollToProjects={scrollToProjects} />
      <ProjectGallery projectsRef={projectsRef} />
      <AboutArchitect />
      <DesignPhilosophy />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
