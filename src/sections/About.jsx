import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

import { experiences } from "../constants";

const About = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const inViewLeft = useInView(leftRef, { amount: 0.4 });
  const inViewRight = useInView(rightRef, { amount: 0.4 });

  return (
    <section
      id="about"
      className="py-20 bg-secondary relative overflow-x-clip"
      data-bg="secondary"
    >
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left side */}
        <motion.div
          ref={leftRef}
          initial={{ x: -40, opacity: 0 }}
          animate={inViewLeft ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-7xl sm:text-5xl font-extrabold -mt-10 text-tertiary">
            Top Bun <span className="text-gray-950">(About Me)</span>
          </h1>

          {/* About card */}
          <div className="bg-primary mt-5 p-10 rounded-2xl shadow-lg hover:scale-105 transition-all duration-700">
            <p className="leading-relaxed text-lg text-gray-800">
              Hey there - I&apos;m Adnan, your friendly{" "}
              <span className="font-semibold text-tertiary">full-stack chef</span>{" "}
              🍔. I blend creativity with clean code, balancing performance and
              personality like a perfectly seasoned dish. Whether it&apos;s crispy UIs,
              juicy backends, or a dash of AI automation, I plate up experiences
              that are both mouth watering and scalable.
            </p>
          </div>

          {/* Fun card */}
          <div className="bg-primary mt-5 p-10 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-700">
            <p className="text-3xl text-tertiary">Off the Menu 🍔</p>
            <p className="mt-2 text-xl text-secondary">
              When I&apos;m not serving code, you&apos;ll usually find me:
            </p>
            <ul className="mt-2 text-lg text-gray-800">
              <li>🍵 Brewing strong coffee</li>
              <li>🍔 Devouring burgers (for research, of course 😋)</li>
              <li>📚 Learning new tech recipes</li>
              <li>😴 Sleeping like a server in downtime</li>
            </ul>
          </div>

          {/* Fun Fact */}
          <p className="w-full mt-5 p-4 rounded-xl bg-primary text-lg text-gray-800 hover:scale-105 transition-all duration-700">
            <span className="text-tertiary">Fun Fact:</span> A friend once
            gifted me a road roller toy and told me to "roll on your problems
            like this road roller." That&apos;s exactly how I approach my work -
            smooth, steady, and unstoppable.
          </p>
        </motion.div>

        {/* Right side: Experience preview */}
        <motion.div
          ref={rightRef}
          initial={{ x: 40, opacity: 0 }}
          animate={inViewRight ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-primary backdrop-blur-md p-6 shadow-xl relative"
        >
          <p className="text-3xl tracking-wider text-secondary">
            Experience Menu
          </p>

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="mt-4 border-4 border-secondary backdrop-blur-lg rounded-xl p-4 hover:scale-95 transition-all duration-700"
            >
              <h1 className="text-2xl font-bold">{exp.company}</h1>
              <h2 className="mt-1 text-xl text-tertiary">{exp.role}</h2>
              <p className="text-gray-600 text-sm">{exp.duration}</p>
              <ul className="mt-2 text-lg text-gray-800 list-disc list-inside space-y-1">
                {exp.points.slice(0, 3).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* View More Button (global for all experiences) */}
          <div className="mt-6 text-center">
            <Link
              to="/work/experience"
              className="p-3 bg-tertiary text-primary rounded-lg shadow hover:bg-secondary transition-all"
            >
              View Full →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
