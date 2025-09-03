import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projectsData } from "../constants";
import GoBackButton from "../components/BackButton";

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
    <section className="bg-gradient-to-b from-secondary via-tertiary to-secondary py-16 relative">
      <GoBackButton />
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
              className="w-auto md:w-4/5 lg:w-3/4 flex flex-col rounded-3xl shadow-xl bg-primary overflow-hidden"
              variants={projectVariants}
            >
              {/* Large Image */}
              <div className="p-2 w-auto h-80 md:h-96 lg:h-[28rem] m-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-auto h-full rounded-lg"
                />
              </div>

              {/* Content at Bottom */}
              <div className="p-10 text-center border-4 border-secondary mx-10 mb-4 rounded-lg">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-4xl text-primary bg-secondary p-2 rounded-xl mb-3 inline-block transition-transform duration-700 hover:scale-110 transform-gpu will-change-transform"
                >
                  {project.title}
                </a>
                <p className="text-tertiary mb-3 text-lg">{project.tech}</p>
                <p className="text-black text-base md:text-lg">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ViewAllProjects;
