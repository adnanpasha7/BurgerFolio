import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

import { navLinks } from "../constants";

import pop2 from "../assets/pop2.mp3";

const MenuOverlay = ({ isOpen, onClose }) => {
  const menuOverlayRef = useRef(null);
  const menuContentRef = useRef(null);
  const popAudioRef = useRef(null);
  const linkRefs = useRef([]);
  const [isAnimating, setIsAnimating] = useState(false);

  linkRefs.current = [];

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);

      // Curtain reveal animation
      gsap.fromTo(
        menuOverlayRef.current,
        { clipPath: "inset(0% 0% 100% 0%)" }, // fully closed (top)
        {
          clipPath: "inset(0% 0% 0% 0%)", // fully open
          duration: 1,
          ease: "power4.inOut",
        }
      );

      // Drop the content box itself with bounce
      gsap.fromTo(
        menuContentRef.current,
        { y: "-100%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.4, // wait until curtain almost done
          ease: "bounce.out",
        }
      );

      // Drop links one by one after the box settles
      gsap.set(linkRefs.current, { y: -50, opacity: 0 });
      gsap.to(linkRefs.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "bounce.out",
        stagger: 0.15,
        delay: 0.9, // start after box animation
        onComplete: () => setIsAnimating(false),
      });
    } else {
      setIsAnimating(true);

      // Close links quickly
      gsap.to(linkRefs.current, { opacity: 0, duration: 0.2 });

      // Drop content box up
      gsap.to(menuContentRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.6,
        ease: "power4.inOut",
      });

      // Curtain close upwards
      gsap.to(menuOverlayRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => setIsAnimating(false),
      });
    }
  }, [isOpen]);

  // Keyboard: close on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && isOpen && !isAnimating) {
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, isAnimating, onClose]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handlePopHover = (start) => {
    if (popAudioRef.current) {
      popAudioRef.current.currentTime = 0;
      start ? popAudioRef.current.play() : popAudioRef.current.pause();
    }
  };

  return (
    <div
      ref={menuOverlayRef}
      className="fixed top-0 left-0 w-full h-screen bg-secondary z-[999] flex justify-center items-center"
      style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      aria-hidden={!isOpen}
    >
      <audio ref={popAudioRef} src={pop2} preload="auto" />
      <div
        ref={menuContentRef}
        className="relative sm:w-2/3 md:w-1/4 p-10 rounded-lg flex flex-col bg-primary justify-center items-center gap-10 text-secondary text-3xl opacity-0"
      >
        {navLinks.map((link, idx) => (
          <a
            key={link.name}
            href={link.href}
            ref={(el) => (linkRefs.current[idx] = el)}
            className="hover:scale-125 cursor-pointer wavy-underline-hover"
            onClick={onClose}
            onMouseEnter={() => handlePopHover(true)}
            onMouseLeave={() => handlePopHover(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MenuOverlay;
