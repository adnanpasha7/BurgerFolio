import { motion } from "framer-motion";

const textVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.2, duration: 1, ease: "easeOut" },
  }),
};

const Hero = () => {
  const lines = [
    "Hi, I'm Adnan",
    "I build sleek and scalable applications",
    "Blending design, engineering & a touch of AI",
  ];

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-white dark:bg-black"
    >
      {/* Background parallax circle */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 dark:from-yellow-600 dark:via-orange-500 dark:to-red-500 blur-[150px]"
      />

      {/* Staggered text reveal like Palmer */}
      <div className="relative z-10 text-center space-y-6 px-6">
        {lines.map((line, i) => (
          <motion.h1
            key={i}
            custom={i}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
          >
            {line}
          </motion.h1>
        ))}
      </div>

      {/* Call to action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-10 flex gap-6 z-10"
      >
        <a
          href="#projects"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition-transform"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="px-8 py-3 rounded-full border border-gray-400 dark:border-yellow-400 text-gray-800 dark:text-yellow-300 hover:scale-105 transition-transform"
        >
          Contact
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
