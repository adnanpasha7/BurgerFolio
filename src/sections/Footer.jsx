import { useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import burgerImg from "../assets/Burger.png";
import { socialLinks } from "../constants";
import pop2 from "../assets/pop2.mp3";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const popAudioRef = useRef(null);

  const handlePopHover = (start) => {
    if (popAudioRef.current) {
      popAudioRef.current.currentTime = 0;
      start ? popAudioRef.current.play() : popAudioRef.current.pause();
    }
  };
  return (
    <footer className="relative w-full bg-[#A9070C] text-[#FFECA9] py-12 flex flex-col items-center justify-center mt-auto">
      {/* Decorative burger icon animation */}
      <audio ref={popAudioRef} src={pop2} preload="auto" />

      <motion.div
        className="mb-4"
        animate={{ rotate: [0, 5, -5, 5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <span>
          <img src={burgerImg} alt="Burger Icon" className="w-24 h-24" />
        </span>
      </motion.div>
      {/* Footer tagline */}
      <p className="text-center text-sm md:text-base font-light">
        🍴 Made with React, Coffee, & Creativity
      </p>
      {/* Social links */}

      <div className="flex gap-6 mt-4">
        {socialLinks.map((link, index) => {
          const isPhone = link.label === "Call";
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className={`hover:scale-125 transition-transform duration-300 text-[#FFECA9] ${
                isPhone && "md:hidden"
              }`}
              onMouseEnter={() => handlePopHover(true)}
              onMouseLeave={() => handlePopHover(false)}
            >
              <FontAwesomeIcon
                icon={link.icon}
                className="text-[#FAEFD2] text-xl drop-shadow-sm"
              />
            </a>
          );
        })}
      </div>
      {/* Creative text at bottom */}
      <p className="mt-6 text-md text-center text-[#FFECA9]/80">
        © {currentYear} Adnan's Dev Diner — Serving Full-Stack Flavors Daily 🍔
      </p>
      {/* Blurred background decoration */}
      <div className="absolute top-0 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-[#FFECA9]/10 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
};
export default Footer;
