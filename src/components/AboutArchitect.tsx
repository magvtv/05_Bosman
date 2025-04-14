import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export function AboutArchitect() {
  return (
    <section className="architect-section bg-architect-charcoal text-architect-off-white">
      <div className="architect-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left column - Text content */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="architect-heading mb-6 text-architect-off-white">
              About Jonathan
            </h2>

            <div className="space-y-6">
              <p className="architect-text text-architect-off-white/90">
                With over 15 years of architectural practice across East Africa
                and beyond, Jonathan Bosire Ndemo has developed a design
                philosophy that interweaves cultural sensitivity, environmental
                responsibility, and technical innovation.
              </p>

              <p className="architect-text text-architect-off-white/90">
                After receiving his Master of Architecture from the University
                of Cape Town and further studies at the Architectural
                Association in London, Jonathan returned to Kenya to establish
                his practice focused on creating architecture that responds
                thoughtfully to both people and place.
              </p>

              <p className="architect-text text-architect-off-white/90">
                His work spans residential, commercial, cultural, and
                educational typologies, each approached with a careful
                consideration of context, climate, and the specific needs of the
                client and community.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-architect-off-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-3xl font-montreal mb-1">15+</h3>
                  <p className="text-architect-off-white/70">
                    Years Experience
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-montreal mb-1">42</h3>
                  <p className="text-architect-off-white/70">
                    Projects Completed
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-montreal mb-1">7</h3>
                  <p className="text-architect-off-white/70">Design Awards</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Visual/Signature */}
          <motion.div
            className="lg:col-span-5 flex items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-full h-full relative">
              <div className="absolute -top-10 -left-10 w-[70%] h-[70%] border border-architect-moss/40"></div>
              <div className="relative bg-architect-sand/10 p-8 border-r border-b border-architect-off-white/10 h-full">
                <div className="mb-8">
                  <Separator className="bg-architect-moss w-16 h-0.5 mb-6" />
                  <blockquote className="text-xl font-display italic text-architect-off-white/90">
                    "Architecture is not about building the impossible, which we
                    can do if we have enough money and enough tools and enough
                    computers. It's about building what is appropriate and about
                    attaining beauty through such an approach."
                  </blockquote>
                  <p className="text-right mt-4 text-architect-off-white/70">
                    — Jonathan Ndemo
                  </p>
                </div>

                <div className="flex justify-end">
                  <div className="w-32">
                    <svg
                      viewBox="0 0 100 60"
                      className="w-full text-architect-off-white/80"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="1"
                    >
                      <path d="M10,30 C25,10 75,10 90,30" />
                      <path d="M20,40 C35,20 65,20 80,40" />
                      <path d="M30,50 C45,30 55,30 70,50" />
                    </svg>
                    <p className="text-xs text-right mt-2 text-architect-off-white/60">
                      Signature Symbol
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
