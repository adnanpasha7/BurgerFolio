import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { href, Link } from "react-router-dom";

const menuLinksData = [
  {name: "Home", href: "#hero"},
  { name: "Menu", href: "#hero" },
  { name: "About", href: "#hero" },
  { name: "Blog", href: "#hero" },
  { name: "Contact", href: "#hero" },
];

const MenuOverlay = ({ isOpen, onClose }) => {
  const menuOverlayRef = useRef(null);
  const menuContentRef = useRef(null);
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
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`; // reserve scrollbar space
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  return (
    <div
      ref={menuOverlayRef}
      className="fixed top-0 left-0 w-full h-screen bg-[#FDAC1A] z-[999]"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
      aria-hidden={!isOpen}
    >
      <div
        ref={menuContentRef}
        className="relative w-full h-full flex flex-col justify-center items-center gap-10 text-[#FAEFD2] text-3xl transform translate-y-[120%] opacity-0"
      >
        {menuLinksData.map((link, idx) => (
          <Link
            key={link.name}
            to={link.href}
            ref={(el) => (linkRefs.current[idx] = el)}
            className="hover:text-[#A9070C] transition-colors duration-300 cursor-pointer wavy-underline-hover"
            onClick={onClose}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuOverlay;
