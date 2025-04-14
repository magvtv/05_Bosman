import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { getAllProjects } from "@/lib/projects";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const projects = getAllProjects();
  const testimonials = projects
    .filter((project) => project.testimonial)
    .map((project) => ({
      id: project.id,
      text: project.testimonial,
      client: project.title,
      type: project.type,
    }));

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  }, [testimonials.length]);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section className="architect-section bg-gradient-to-b from-architect-sand/30 to-architect-off-white">
      <div className="architect-container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="architect-heading mb-3">Client Voices</h2>
          <p className="architect-subheading max-w-2xl mx-auto">
            Feedback from those who have experienced our spaces
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden py-12">
            {/* Decorative quote marks */}
            <div className="absolute top-0 left-0 text-architect-charcoal/10 text-9xl font-serif">
              "
            </div>
            <div className="absolute bottom-0 right-0 text-architect-charcoal/10 text-9xl font-serif">
              "
            </div>

            {/* Testimonial slider */}
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0,
                    x:
                      currentIndex === index
                        ? 0
                        : currentIndex > index
                          ? -50
                          : 50,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                  style={{ display: currentIndex === index ? "block" : "none" }}
                >
                  <blockquote className="text-center px-8">
                    <p className="text-xl md:text-2xl font-display text-architect-charcoal mb-6">
                      "{testimonial.text}"
                    </p>
                    <footer className="mt-4">
                      <div className="font-montreal text-lg">
                        {testimonial.client}
                      </div>
                      <div className="text-architect-charcoal/70 flex items-center justify-center">
                        <span className="bg-architect-moss h-1 w-1 rounded-full mx-2" />
                        <span>{testimonial.type} Project</span>
                        <span className="bg-architect-moss h-1 w-1 rounded-full mx-2" />
                        <span className="text-xs bg-architect-moss/10 px-3 py-1 rounded-full">
                          Verified Client
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center mt-8 gap-4">
            <Button
              onClick={prevTestimonial}
              size="icon"
              variant="outline"
              className="rounded-full border-architect-charcoal h-10 w-10"
              aria-label="Previous testimonial"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>

            <div className="flex gap-1">
              {testimonials.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-architect-charcoal w-6"
                      : "bg-architect-charcoal/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              size="icon"
              variant="outline"
              className="rounded-full border-architect-charcoal h-10 w-10"
              aria-label="Next testimonial"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>

          <div className="text-center mt-12">
            <Button
              className="architect-button"
              variant="outline"
              onClick={() =>
                (window.location.href =
                  "mailto:jonathan@example.com?subject=Architecture%20Project%20Inquiry")
              }
            >
              Want to collaborate?
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
