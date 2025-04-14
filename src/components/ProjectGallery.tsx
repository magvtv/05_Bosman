import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getFeaturedProjects } from "@/lib/projects";
import { Project } from "@/types/project";

interface ProjectGalleryProps {
  projectsRef: React.RefObject<HTMLElement>;
}

export function ProjectGallery({ projectsRef }: ProjectGalleryProps) {
  const projects = getFeaturedProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section ref={projectsRef} className="architect-section" id="projects">
      <div className="architect-container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="architect-heading mb-3">Featured Projects</h2>
          <p className="architect-subheading max-w-2xl mx-auto">
            A curated selection of spaces designed to inspire, function, and endure
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Dialog onOpenChange={(open) => {
                if (open) {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                } else {
                  setSelectedProject(null);
                }
              }}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden group cursor-pointer bg-transparent border border-architect-sand/30 hover:border-architect-charcoal transition-all duration-300">
                    <CardContent className="p-0 relative">
                      <div className="relative">
                        <AspectRatio ratio={4/3}>
                          <div className="w-full h-full bg-architect-sand/20 overflow-hidden">
                            {/* Using placeholder, in a real implementation this would be an actual image */}
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-architect-sand/40 to-architect-concrete/60">
                              <span className="text-xl text-architect-charcoal/50">
                                {project.title} Image
                              </span>
                            </div>
                          </div>
                        </AspectRatio>
                        
                        <div className="absolute inset-0 bg-architect-charcoal/0 group-hover:bg-architect-charcoal/70 transition-all duration-300 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
                          <h3 className="text-white text-xl font-montreal">
                            {project.title}
                          </h3>
                          <p className="text-white/80 text-sm mt-1">
                            {project.location} • {project.year}
                          </p>
                          <div className="flex mt-2 gap-2 flex-wrap">
                            {project.tools_used.map((tool) => (
                              <span key={tool} className="text-white/70 text-xs py-1 px-2 bg-white/10 rounded-full">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <h3 className="font-montreal text-lg">{project.title}</h3>
                        <p className="text-sm text-architect-charcoal/70">{project.type}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl bg-architect-off-white p-0 border border-architect-concrete">
                  {selectedProject && (
                    <div className="flex flex-col">
                      <AspectRatio ratio={16/9}>
                        <div className="w-full h-full bg-architect-sand/20 flex items-center justify-center">
                          <span className="text-2xl text-architect-charcoal/50">
                            {selectedProject.title} - Image {currentImageIndex + 1}
                          </span>
                        </div>
                      </AspectRatio>
                      
                      <div className="p-6">
                        <h2 className="text-2xl font-montreal mb-1">{selectedProject.title}</h2>
                        <div className="flex items-center text-sm text-architect-charcoal/70 mb-4">
                          <span>{selectedProject.location}</span>
                          <span className="mx-2">•</span>
                          <span>{selectedProject.year}</span>
                          <span className="mx-2">•</span>
                          <span>{selectedProject.type}</span>
                        </div>
                        
                        <p className="architect-text mb-4">
                          {selectedProject.description}
                        </p>
                        
                        <div className="flex gap-2 mb-4">
                          {selectedProject.tools_used.map((tool) => (
                            <span 
                              key={tool}
                              className="text-xs py-1 px-3 bg-architect-sand/30 rounded-full"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                        
                        {selectedProject.testimonial && (
                          <blockquote className="border-l-2 border-architect-moss pl-4 py-2 italic text-architect-charcoal/80">
                            "{selectedProject.testimonial}"
                          </blockquote>
                        )}
                        
                        <div className="flex gap-2 mt-4">
                          {selectedProject.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full ${
                                index === currentImageIndex 
                                  ? "bg-architect-charcoal" 
                                  : "bg-architect-charcoal/30"
                              }`}
                              aria-label={`View image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}