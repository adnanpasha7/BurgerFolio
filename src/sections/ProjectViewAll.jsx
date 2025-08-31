import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projectsData } from "../constants";

// Container for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // delay between each project card
    },
  },
};

// Each project card animation
const projectVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ViewAllProjects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-secondary via-tertiary to-secondary py-16 relative">
      {/* Floating Back to Home Button */}
      <Link
        to="/"
        className="fixed top-6 left-6 flex items-center border-4 border-tertiary gap-2 px-4 py-3 bg-primary text-secondary rounded-full shadow-2xl hover:scale-110 transition-transform duration-500 z-50 transform-gpu will-change-transform"
      >
        <ArrowLeft size={20} />
        <span>Home</span>
      </Link>

      <div className="container mx-auto">
        {/* Page Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-center text-black mb-12">
            All <span className="text-tertiary">Projects</span>
        </h1>

        {/* Project Cards */}
        <motion.div
          className="flex flex-col items-center space-y-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="w-full md:w-4/5 lg:w-3/4 min-h-[80vh] flex flex-col md:flex-row items-center justify-center text-center md:text-left rounded-3xl shadow-xl p-10 bg-primary"
              variants={projectVariants}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w- h-full rounded-lg"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="w-full md:w-1/2 px-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl md:text-4xl text-secondary mb-2 inline-block transition-transform duration-700 hover:scale-110 transform-gpu will-change-transform"
                >
                  {project.title}
                </a>
                <p className="text-tertiary mb-2">{project.tech}</p>
                <p className="text-black mb-4">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ViewAllProjects;
