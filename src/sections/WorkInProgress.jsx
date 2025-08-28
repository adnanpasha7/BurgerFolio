// src/pages/WorkInProgress.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import wip from "../assets/wip.png";

const primary = "#A9070C"; // dark red
const secondary = "#FFECA9"; // light yellow

export default function WorkInProgress() {
  return (
    <section className="min-h-screen grid place-items-center relative overflow-hidden bg-primary text-secondary">
      {/* subtle checker / paper vibe */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* neon-ish marquee line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: primary }}
      />

      <div className="relative z-10 w-full max-w-3xl px-6 flex flex-col justify-center items-center">
        <motion.div
          className="mb-4"
          animate={{ rotate: [0, 5, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <img
            src={wip}
            alt="wip icon"
            className="w-44 h-auto hover:scale-125 transition-transform duration-700"
          />
        </motion.div>

        {/* burger + grill loader */}
        

        {/* message card */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto max-w-xl rounded-2xl border-4 border-tertiary p-6 text-center backdrop-blur bg-primary"
        >
          <p
            className="text-lg md:text-3xl font-semibold text-secondary"
          >
            Cooking in Progress…
          </p>
          <p className="mt-2 text-sm md:text-base text-tertiary">
            This page is on the grill. I&apos;m layering the buns, melting the
            cheese, and adding some AI sauce. Check back soon for a
            mouth-watering update!
          </p>

          {/* back to home */}
          <motion.div
            className="mt-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold shadow-md transition-transform bg-secondary text-primary"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* bottom marquee */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: primary }}
      />
    </section>
  );
}
