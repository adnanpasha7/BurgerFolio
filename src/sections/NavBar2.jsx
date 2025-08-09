import { useState, useEffect } from "react";
import BurgerTop from "../assets/BT.webp";
import BurgerBottom from "../assets/BB.webp";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Menu", logo: "🍔", href: "/menu" },
  { name: "About", logo: "👨‍🍳", href: "/about" },
  { name: "Blog", logo: "📖", href: "/blog" },
  { name: "Resume", logo: "📄", href: "resume" },
];

const NavBar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCompactNav, setShowCompactNav] = useState(false);
  const [bounceDone, setBounceDone] = useState(false); // New state to track bounce completion

  useEffect(() => {
    const handleScroll = () => {
      setShowCompactNav(window.scrollY > 372);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bun sway animation
  const swayVariant = {
    initial: { opacity: 0, y: -50, scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: [0, 2, -2, 2, 0],
      transition: {
        rotate: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        type: "spring",
        stiffness: 120,
        damping: 8,
      },
    },
    hidden: { opacity: 0, scale: 0.9 },
    stopped: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
      duration: 1,          // longer duration for smooth ease-out
      ease: "easeOut",
      },
    },
  };


  const bottomBunVariant = {
    ...swayVariant,
    initial: { opacity: 0, y: 50, scale: 0.9 },
  };

  // Stamp effect animation for title
  const stampVariant = {
    hidden: { opacity: 0, scale: 4, y: 0 }, // big zoom start
    visible: {
      opacity: [1, 1, 1, 1, 1, 1], // keep opacity fully visible throughout
      scale: [4, 0.9, 1.05, 1, 1.05, 1], // zoom out then bounce twice then settle
      y: [0, -10, 0, -5, 0, 0], // bounce up/down effect
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.7, 0.9, 1],
      },
    },
    exit: { opacity: 0, scale: 0.5, y: -20, transition: { duration: 0.4 } },
  };

  return (
    <section className="top-0 w-full relative overflow-hidden">
      {/* Burger Top */}
      <motion.img
        src={BurgerTop}
        alt="Burger Top"
        className="w-1/2 h-48 block m-auto -mt-8 sm:-mt-4"
        variants={swayVariant}
        initial="initial"
        animate={
          showCompactNav
            ? "hidden"
            : bounceDone
            ? "stopped"  // stop jiggle after bounce finishes
            : "animate"
        }
        transition={{ duration: 0.6 }}
      />

      {/* Title with stamp animation */}
      <motion.div
        className="flex flex-row items-center justify-center gap-4"
        variants={stampVariant}
        initial="hidden"
        animate={showCompactNav ? "exit" : "visible"}
        onAnimationComplete={() => setBounceDone(true)} // set bounce done on animation finish
      >
        <div className="flex flex-col items-center">
          <p className="text-sm md:text-[25px] sm:text-[20px] font-bold text-[#A9070C] sm:w-auto">
            Adnan&apos;s Dev Diner
          </p>
          <p className="mt-1">Full Stack Burgers, served hot</p>
        </div>

        <nav className="hidden md:flex gap-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="text-[#A9070C] font-medium px-3 py-2 wavy-underline-hover"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </motion.div>

      {/* Burger Bottom */}
      <motion.img
        src={BurgerBottom}
        alt="Burger Bottom"
        className="w-1/2 h-48 block m-auto -mt-8 sm:-mt-4"
        variants={bottomBunVariant}
        initial="initial"
        animate={
          showCompactNav
            ? "hidden"
            : bounceDone
            ? "stopped"
            : "animate"
        }
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* Menu Icon */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={showCompactNav ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.4 }}
        className="fixed top-4 right-4 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-menu text-[#A9070C] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <line
            x1="3"
            y1="6"
            x2="21"
            y2="6"
            className={twMerge(
              "origin-left transition",
              isOpen && "rotate-45 -translate-y-1"
            )}
          ></line>
          <line
            x1="3"
            y1="12"
            x2="21"
            y2="12"
            className={twMerge("transition", isOpen && "opacity-0")}
          ></line>
          <line
            x1="3"
            y1="18"
            x2="21"
            y2="18"
            className={twMerge(
              "origin-left transition",
              isOpen && "-rotate-45 translate-y-1"
            )}
          ></line>
        </svg>

        {/* Dropdown Menu */}
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute right-0 mt-2 bg-[#FAEFD2] shadow-lg rounded-md overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-[#A9070C] font-medium px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.logo} {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default NavBar2;
