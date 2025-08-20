import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { cgExp } from "../constants";
import pop2 from "../assets/pop2.mp3";

const About = () => {
  const popAudioRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const inViewLeft = useInView(leftRef, { amount: 0.4 });
  const inViewRight = useInView(rightRef, { amount: 0.4 });

  const handlePopAudio = (start) => {
    if (start) {
      popAudioRef.current.play();
    } else {
      popAudioRef.current.pause();
    }
  };

  return (
    <section
      id="about"
      className="py-20 bg-secondary relative overflow-x-clip"
      data-bg="secondary"
    >
      <audio ref={popAudioRef} src={pop2} preload="auto" />
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left column - About text */}
        <motion.div
          ref={leftRef}
          initial={{ x: -40, opacity: 0 }}
          animate={inViewLeft ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-7xl sm:text-6xl font-extrabold -mt-10 text-tertiary">
            Top Bun <span className="text-gray-950">(About Me)</span>
          </h1>
          <div
            className="bg-primary mt-5 p-10 rounded-2xl shadow-lg hover:scale-105 transition-all duration-700"
            // onMouseEnter={() => handlePopAudio(true)}
            // onMouseLeave={() => handlePopAudio(false)}
          >
            <p className=" leading-relaxed text-lg text-gray-800">
              Hey there - I&apos;m Adnan, your friendly{" "}
              <span className="font-semibold text-tertiary">
                full-stack chef
              </span>{" "}
              🍔. I blend creativity with clean code, balancing performance and
              personality like a perfectly seasoned dish. Whether it&apos;s
              crispy UIs, juicy backends, or a dash of AI automation, I plate up
              experiences that are both mouth watering and scalable.
            </p>
          </div>
          <div
            className="bg-primary mt-5 p-10 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-700"
            // onMouseEnter={() => handlePopAudio(true)}
            // onMouseLeave={() => handlePopAudio(false)}
          >
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

          <p
            className="w-full mt-5 p-4 rounded-xl bg-primary text-lg text-gray-800 hover:scale-105 transition-all duration-700"
            // onMouseEnter={() => handlePopAudio(true)}
            // onMouseLeave={() => handlePopAudio(false)}
          >
            <span className="text-tertiary">Fun Fact:</span> A friend once
            gifted me a road roller toy and told me to "roll on your problems
            like this road roller." That&apos;s exactly how I approach my work -
            smooth, steady, and unstoppable.
          </p>
        </motion.div>

        {/* Right column - Experience "menu" */}
        <motion.div
          ref={rightRef}
          initial={{ x: 40, opacity: 0 }}
          animate={inViewRight ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-primary backdrop-blur-md p-6 shadow-xl relative"
          // onMouseEnter={() => handlePopAudio(true)}
          // onMouseLeave={() => handlePopAudio(false)}
        >
          <p className="text-3xl tracking-wider text-secondary">
            Experience Menu
          </p>

          {/* Capgemini */}
          <div className="mt-2 border-4 border-secondary backdrop-blur-lg rounded-xl p-4 hover:scale-90 transition-all duration-700">
            <h1 className="text-2xl font-bold">Capgemini Engineering</h1>
            <h2 className="mt-2 text-xl text-tertiary">Full Stack Developer</h2>
            <ul className="mt-2 text-lg text-gray-800 list-disc list-inside space-y-1">
              {cgExp.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
