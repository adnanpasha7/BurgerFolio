import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import pop2 from "../assets/pop2.mp3";


const menuLinksData = [
  {name: "Home", href: "#"},
  { name: "Menu", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

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
      gsap.to(menuOverlayRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)",
        duration: 1.25,
        ease: "power4.inOut",
      });
      gsap.to(menuContentRef.current, {
        y: "0%",
        opacity: 1,
        duration: 1,
        delay: 0.3,
        stagger: 0.1,
        ease: "power3.out",
        onComplete: () => setIsAnimating(false),
      });
    } else {
      setIsAnimating(true);
      gsap.to(menuContentRef.current, {
        y: "120%",
        opacity: 0,
        duration: 0.8,
        ease: "power4.inOut",
      });
      gsap.to(menuOverlayRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
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

  useEffect(() => {
  
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

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
      className="fixed top-0 left-0 w-full h-screen bg-[#A9070C] z-[999] flex justify-center items-center"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
      aria-hidden={!isOpen}
    >
        <audio ref={popAudioRef} src={pop2} preload="auto" />
      <div
        ref={menuContentRef}
        className="relative sm:w-2/3 md:w-1/3 h-9/10 p-10 rounded-lg flex flex-col bg-[#FFECA9] justify-center items-center gap-10 text-[#A9070C] text-3xl transform translate-y-[120%] opacity-0"
      >
        {menuLinksData.map((link, idx) => (
          <a
            key={link.name}
            href={link.href}
            ref={(el) => (linkRefs.current[idx] = el)}
            className="hover:text-[#A9070C] transition-colors duration-300 cursor-pointer wavy-underline-hover"
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
