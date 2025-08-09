import { useRef, useState } from "react";
import gsap from "gsap";
import burger from "../assets/Burger.png"

const Hero2 = () => {
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const burgerRef = useRef(null);
  const bgRef = useRef(null);

  const [isAnimating, setIsAnimating] = useState(false);

  const animateHero = () => {
    gsap.set([titleRef.current, taglineRef.current, burgerRef.current], {
      opacity: 0,
    });

    gsap.set(titleRef.current, { y: -50 });
    gsap.set(taglineRef.current, { y: 30 });
    gsap.set(burgerRef.current, { scale: 0, rotate: 360 });

    const tl = gsap.timeline();

    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    })
      .to(
        taglineRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .to(
        burgerRef.current,
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.5"
      );
  };

  const burgerFocusAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });

    // Shake burger first
    tl.to(burgerRef.current, {
      x: 5,
      repeat: 5,
      yoyo: true,
      duration: 0.05,
    })
      // Blur only the background
      .to(
        bgRef.current,
        {
          filter: "blur(8px)",
          duration: 0.3,
          ease: "power1.out",
        },
        "<"
      )
      // Zoom in burger
      .to(burgerRef.current, {
        scale: 30,
        duration: 0.5,
        ease: "power4.inOut",
      })
      // Shake again while zoomed
      .to(burgerRef.current, {
        x: 5,
        repeat: 5,
        yoyo: true,
        duration: 0.05,
      })
      // Zoom out
      .to(burgerRef.current, {
        scale: 1,
        duration: 0.5,
        ease: "power4.inOut",
      })
      // Shake again
      .to(burgerRef.current, {
        x: 5,
        repeat: 5,
        yoyo: true,
        duration: 0.05,
      })
      // Remove blur from background
      .to(bgRef.current, {
        filter: "blur(0px)",
        duration: 0.3,
        ease: "power1.out",
      });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#FAEFD2] text-center space-y-6 overflow-hidden relative">
      {/* Background layer */}
      <div ref={bgRef} className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-[#A9070C]"
        >
          🍔 Hey, I'm Adnan
        </h1>
        <p ref={taglineRef} className="text-lg md:text-2xl text-[#222]">
          Serving full-stack solutions with a side of AI
        </p>
      </div>

      {/* Burger above background */}
      <div
        ref={burgerRef}
        className="w-12 h-12 relative"
        style={{ pointerEvents: "none" }}
      >
        <img src={burger} alt="burger" />
      </div>

      {/* Buttons */}
      <div className="absolute bottom-10 flex gap-4 z-50">
        <button
          onClick={animateHero}
          className="sparkle-btn border border-[#A9070C] px-6 py-3 rounded-full font-medium text-[#A9070C] hover:bg-[#A9070C] hover:text-white transition"
        >
          Animate Hero
        </button>
        <button
          onClick={burgerFocusAnimation}
          className="sparkle-btn border border-[#A9070C] px-6 py-3 rounded-full font-medium text-[#A9070C] hover:bg-[#A9070C] hover:text-white transition"
        >
          Burger Focus
        </button>
      </div>
    </section>
  );
};

export default Hero2;