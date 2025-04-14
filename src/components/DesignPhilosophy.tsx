import { motion } from "framer-motion";

export function DesignPhilosophy() {
  const principles = [
    {
      id: "light",
      icon: (
        <svg
          className="w-12 h-12 text-architect-moss"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 2V4M12 20V22M2 12H4M20 12H22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Light",
      description:
        "Natural illumination as a material, sculpting spaces and marking the passage of time.",
    },
    {
      id: "form",
      icon: (
        <svg
          className="w-12 h-12 text-architect-moss"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M3 9H21M9 21V9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Form",
      description:
        "Clean geometries that respond to function while creating emotional connections.",
    },
    {
      id: "function",
      icon: (
        <svg
          className="w-12 h-12 text-architect-moss"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 5H21M3 12H21M3 19H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Function",
      description:
        "Thoughtful organization of space that enhances how we live, work, and interact.",
    },
    {
      id: "material",
      icon: (
        <svg
          className="w-12 h-12 text-architect-moss"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 9L12 4L22 9L12 14L2 9Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M22 9V15L12 20L2 15V9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Material",
      description:
        "Honest expression of materials, celebrating texture, imperfection, and weathering.",
    },
  ];

  return (
    <section className="architect-section relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full bg-repeat"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      <div className="architect-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="architect-heading mb-3">Design Philosophy</h2>
          <p className="architect-subheading max-w-2xl mx-auto">
            Principles that guide every project and decision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="p-4 bg-architect-off-white border border-architect-sand/30 rounded-md shadow-sm mb-4">
                {principle.icon}
              </div>
              <h3 className="text-xl font-montreal mt-2 mb-2">
                {principle.title}
              </h3>
              <p className="text-center text-architect-charcoal/70">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 border border-architect-concrete bg-architect-sand/10"
        >
          <blockquote className="text-xl md:text-2xl italic text-center font-display text-architect-charcoal/90 max-w-4xl mx-auto">
            "Architecture is lived space, not just built form. It's the careful
            orchestration of light, texture, and proportion to create
            environments that elevate the human experience."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
