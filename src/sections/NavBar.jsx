import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import BurgerTop from "../assets/BT.webp";
import BurgerBottom from "../assets/BB.webp";
import grill from "../assets/grill-sound.mp3";
import pop2 from "../assets/pop2.mp3";
import openClose from "../assets/openClose.mp3";

import useActiveBackground from "../utils/activeBg.js";
import { navLinks } from "../constants";

import MenuOverlay from "../sections/MenuOverlay.jsx";
import BurgerIcon from "../components/BurgerIcon.jsx";
import {
  swayVariant,
  bottomBunVariant,
  stampVariant,
} from "../utils/animations.js";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCompactNav, setShowCompactNav] = useState(false);

  const grillAudioRef = useRef(null);
  const popAudioRef = useRef(null);
  const openAudioRef = useRef(null);
  const activeBg = useActiveBackground();

  useEffect(() => {
    const handleScroll = () => setShowCompactNav(window.scrollY > 372);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGrillHover = (start) => {
    if (grillAudioRef.current) {
      grillAudioRef.current.currentTime = 0;
      start ? grillAudioRef.current.play() : grillAudioRef.current.pause();
    }
  };

  const handlePopHover = (start) => {
    if (popAudioRef.current) {
      popAudioRef.current.currentTime = 0;
      start ? popAudioRef.current.play() : popAudioRef.current.pause();
    }
  };

  const handleOpenCloseAudio = (start) => {
    if (openAudioRef.current) {
      openAudioRef.current.currentTime = 0;
      start ? openAudioRef.current.play() : openAudioRef.current.pause();
    }
  };

  return (
    <section className="top-0 w-full relative overflow-hidden">
      <audio ref={grillAudioRef} src={grill} preload="auto" />
      <audio ref={popAudioRef} src={pop2} preload="auto" />
      <audio ref={openAudioRef} src={openClose} preload="auto" />

      {/* Top Bun */}
      <motion.img
        src={BurgerTop}
        alt="Burger Top"
        className="sm:w-5/6 md:w-1/2 h-48 block m-auto -mt-8 sm:-mt-4"
        variants={swayVariant}
        initial="initial"
        animate={showCompactNav ? "hidden" : "animate"}
        onHoverStart={() => handleGrillHover(true)}
        onHoverEnd={() => handleGrillHover(false)}
      />

      {/* Title + Nav Links */}
      <motion.div
        className="flex flex-row items-center justify-center gap-4"
        variants={stampVariant}
        initial="hidden"
        animate={showCompactNav ? "exit" : "visible"}
      >
        <div className="flex flex-col items-center">
          <p className="text-sm md:text-[25px] sm:text-[20px] font-bold text-secondary">
            Adnan&apos;s Code Diner
          </p>
          <p className="mt-1">Full Stack Burgers, served hot</p>
        </div>

        <nav className="hidden md:flex gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-secondary font-medium px-3 py-2 wavy-underline-hover hover:scale-125"
              onMouseEnter={() => handlePopHover(true)}
              onMouseLeave={() => handlePopHover(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Burger */}
        <div className="flex md:hidden items-center justify-end gap-4">
          <div className="w-6 h-6 relative">
            <BurgerIcon
              isOpen={isOpen}
              onClick={() => {
                setIsOpen(!isOpen);
                handleOpenCloseAudio(true);
              }}
              small
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom Bun */}
      <motion.img
        src={BurgerBottom}
        alt="Burger Bottom"
        className="sm:w-5/6 md:w-1/2 h-48 block m-auto -mt-8 sm:-mt-4"
        variants={bottomBunVariant}
        initial="initial"
        animate={showCompactNav ? "hidden" : "animate"}
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* Compact Nav Burger */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={showCompactNav ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.4 }}
        className="fixed top-4 right-4 z-[9999]"
      >
        <BurgerIcon
          isOpen={isOpen}
          onClick={() => {
            setIsOpen(!isOpen);
            handleOpenCloseAudio(true);
          }}
          size={36}
          bgColor={activeBg}
        />
      </motion.div>

      <MenuOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}

export default NavBar;