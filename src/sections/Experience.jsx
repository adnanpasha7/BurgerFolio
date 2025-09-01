import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { experiences } from "../constants";
import GoBackButton from "../components/BackButton";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 min-h-screen">
      <GoBackButton />
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-secondary/100 mb-10 text-center">
          Full Experience 🍔
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`p-3 rounded-lg transition-all duration-300 text-lg ${
                activeIndex === idx
                  ? "bg-tertiary text-primary shadow-lg scale-110"
                  : "bg-primary text-secondary"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-primary border-4 border-x-tertiary border-y-secondary rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-secondary">
              {experiences[activeIndex].company}
            </h2>
            <h3 className="mt-1 text-xl text-tertiary">
              {experiences[activeIndex].role}
            </h3>
            <p className="text-gray-600 text-sm">
              {experiences[activeIndex].duration}
            </p>

            <ul className="mt-4 text-lg text-gray-800 list-disc list-inside space-y-2">
              {experiences[activeIndex].points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;
