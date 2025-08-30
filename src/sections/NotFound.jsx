import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import notFound from "../assets/notFound.png";

export default function NotFound() {
  return (
    <section className="min-h-screen grid place-items-center relative overflow-hidden bg-secondary text-secondary">
      {/* subtle checkerboard */}
      {/* <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      /> */}

      <div className="relative z-10 w-full max-w-3xl px-6 flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-primary shadow-xl">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <img
            src={notFound}
            alt="Lost Burger"
            className="w-44 h-auto drop-shadow-lg hover:rotate-6 transition-transform duration-700"
          />
        </motion.div>
        <p className="mt-2 text-lg md:text-2xl text-tertiary">
          Oops! This burger got lost in the kitchen 🍔
        </p>
        <p className="mt-1 text-sm md:text-base">
          The page you&apos;re looking for doesn&apos;t exist (yet).
        </p>

        <motion.div
          className="mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 shadow-md transition-transform  text-secondary border-2 border-secondary hover:bg-secondary hover:text-primary font-medium"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>

      {/* bottom line */}
      {/* <motion.div
        className="absolute bottom-0 left-0 right-0 h-2 bg-primary"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      /> */}
    </section>
  );
}
