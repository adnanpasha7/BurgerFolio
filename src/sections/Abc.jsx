import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const menuLinksData = [
  { label: "Visions", img: "./img1.png" },
  { label: "Core", img: "./img1.png" },
  { label: "Signals", img: "./img1.png" },
  { label: "Connect", img: "./img1.png" },
];

const socialLinksData = [
  { label: "Behance", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Dribble", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function AdnansDinerMenu() {
  const containerRef = useRef(null);
  const menuOverlayRef = useRef(null);
  const menuContentRef = useRef(null);
  const menuPreviewImgRef = useRef(null);
  const menuOpenRef = useRef(null);
  const menuCloseRef = useRef(null);
  const linkRefs = useRef([]);
  const socialRefs = useRef([]);

  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [previewImages, setPreviewImages] = useState(["./img1.png"]);

  // Reset image preview to default
  const resetImgPreview = () => {
    setPreviewImages(["./img1.png"]);
  };

  // Add new preview image on hover
  const addPreviewImage = (imgSrc) => {
    setPreviewImages((prev) => {
      const newImgs = [...prev, imgSrc];
      // Keep last 3 images max
      if (newImgs.length > 3) {
        return newImgs.slice(newImgs.length - 3);
      }
      return newImgs;
    });
  };

  // Animate menu toggle text
  const animateMenuToggle = (opening) => {
    if (!menuOpenRef.current || !menuCloseRef.current) return;

    gsap.to(opening ? menuOpenRef.current : menuCloseRef.current, {
      x: opening ? -5 : 5,
      y: opening ? -10 : 10,
      rotation: opening ? -5 : 5,
      opacity: 0,
      delay: 0.25,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(opening ? menuCloseRef.current : menuOpenRef.current, {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      delay: 0.5,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const openMenu = () => {
    if (isAnimating || isOpen) return;
    setIsAnimating(true);

    gsap.to(containerRef.current, {
      rotation: 10,
      x: 300,
      y: 300,
      scale: 1.5,
      duration: 1.25,
      ease: "power2.inOut",
    });

    animateMenuToggle(true);

    gsap.to(menuContentRef.current, {
      rotation: 0,
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power4.inOut",
    });

    gsap.to([...linkRefs.current, ...socialRefs.current], {
      y: "0%",
      opacity: 1,
      duration: 1,
      delay: 0.75,
      stagger: 0.1,
      ease: "power3.out",
    });

    gsap.to(menuOverlayRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)",
      duration: 1.25,
      ease: "power4.inOut",
      onComplete: () => {
        setIsOpen(true);
        setIsAnimating(false);
      },
    });
  };

  const closeMenu = () => {
    if (isAnimating || !isOpen) return;
    setIsAnimating(true);

    gsap.to(containerRef.current, {
      rotation: 0,
      x: 0,
      y: 0,
      scale: 1,
      duration: 1.25,
      ease: "power4.inOut",
    });

    animateMenuToggle(false);

    gsap.to(menuContentRef.current, {
      rotation: -15,
      x: -100,
      y: 100,
      scale: 1.5,
      opacity: 0.25,
      duration: 1.25,
      ease: "power4.inOut",
    });

    gsap.to(menuOverlayRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1.25,
      ease: "power4.inOut",
      onComplete: () => {
        setIsOpen(false);
        setIsAnimating(false);
        gsap.set([...linkRefs.current, ...socialRefs.current], { y: "120%" });
        resetImgPreview();
      },
    });
  };

  // Toggle handler
  const toggleMenu = () => {
    if (isOpen) closeMenu();
    else openMenu();
  };

  // Initialize link and social refs arrays
  linkRefs.current = [];
  socialRefs.current = [];

  // Keyboard: close on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full flex justify-between items-center p-8 z-20 bg-transparent">
        <div className="text-white font-semibold text-xl">Adnan's diner</div>
        <button
          aria-expanded={isOpen}
          aria-controls="menu-overlay"
          onClick={toggleMenu}
          className="relative w-12 h-6 text-white focus:outline-none"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <p
            ref={menuOpenRef}
            className={`absolute top-0 left-0 transform origin-top-left transition-opacity duration-500 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            Menu
          </p>
          <p
            ref={menuCloseRef}
            className={`absolute top-0 left-0 transform origin-top-left transition-opacity duration-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Close
          </p>
        </button>
      </nav>

      {/* Overlay */}
      <div
        id="menu-overlay"
        ref={menuOverlayRef}
        className="fixed top-0 left-0 w-full h-screen bg-black z-10 clip-path-[polygon(0_0,100%_0,100%_0,0_0)]"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
        aria-hidden={!isOpen}
      >
        <div
          ref={menuContentRef}
          className="relative w-full h-full flex justify-center items-center origin-bottom-left transform scale-[1.5] rotate-[-15deg] translate-x-[-100px] translate-y-[-100px] opacity-25"
        >
          <div className="flex w-full px-8 gap-10">
            {/* Left preview */}
            <div className="flex-3 flex justify-center items-center overflow-hidden relative">
              <div className="w-2/5 relative h-full">
                {/* Render preview images stacked */}
                {previewImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Preview ${i + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-cover will-change-transform will-change-opacity"
                    style={{
                      // layered with slight offset or opacity for effect, optional
                      opacity: 1 - i * 0.3,
                      transform: `translateZ(${i * -10}px)`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right menu links & socials */}
            <div className="flex-2 flex flex-col justify-between py-10 gap-10 text-white">
              <div className="flex flex-col gap-6">
                {menuLinksData.map(({ label, img }, idx) => (
                  <div className="link" key={label}>
                    <a
                      href="#"
                      ref={(el) => (linkRefs.current[idx] = el)}
                      className="text-4xl font-light tracking-tight leading-none transition-colors duration-300"
                      onMouseEnter={() => addPreviewImage(img)}
                      onMouseLeave={() => resetImgPreview()}
                    >
                      {label}
                    </a>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                {socialLinksData.map(({ label, href }, idx) => (
                  <div className="social" key={label}>
                    <a
                      href={href}
                      ref={(el) => (socialRefs.current[idx] = el)}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {label}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 w-full flex px-8 pb-6 justify-between text-white text-lg">
            <div className="flex-3">
              <a href="#" className="hover:underline">
                Run Sequences
              </a>
            </div>
            <div className="flex-2 flex justify-between">
              <a href="#" className="hover:underline">
                Origin
              </a>
              <a href="#" className="hover:underline">
                Signals
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main container with hero */}
      <div
        ref={containerRef}
        className="relative w-full h-screen origin-top-right will-change-transform"
      >
        <section className="hero relative w-screen h-screen p-10 flex items-end overflow-hidden">
          <div className="hero-img absolute top-0 left-0 w-full h-full -z-10">
            <img
              src="./main.png"
              alt="hero"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-white text-7xl font-normal tracking-tight leading-none w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            architecto modi deleniti?
          </h1>
        </section>
      </div>
    </>
  );
}
