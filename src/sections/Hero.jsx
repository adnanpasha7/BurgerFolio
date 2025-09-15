import { useEffect, useState } from "react";
import sittingOnBurger from "../assets/sittingOnBurger.webp";
import { motion, useAnimate, useAnimation } from "framer-motion";

const Hero = () => {
  const [leftImageScope, leftImageAnimate] = useAnimate();
  const [leftTextScope, leftTextAnimate] = useAnimate();
  const [dragging, setDragging] = useState(true);

  // Detect screen size
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      leftImageAnimate([
        [leftImageScope.current, { opacity: 1 }, { duration: 0.5 }],
        [leftImageScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
      ]);
      leftTextAnimate([
        [leftTextScope.current, { opacity: [0, 1] }, { duration: 1, delay: 1 }],
      ]);
    }
  }, [isMobile]);

  const controls = useAnimation();
  const [draggedAway, setDraggedAway] = useState(false);
  const resetPosition = () => {
    controls.start({
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 25, mass: 1.5 },
    });
    setDraggedAway(false);
  };

  return (
    <section id="hero" className="py-8 md:py-16" data-bg="primary">
      <div className="container text-center">
        <motion.div
          ref={leftImageScope}
          initial={{ opacity: 0, y: isMobile ? 0 : 100, x: isMobile ? 0 : -100 }}
          animate={controls}
          drag={!isMobile} // disable drag on mobile
          onDragStart={() => {
            if (!isMobile) {
              setDragging(false);
              setDraggedAway(true);
            }
          }}
          className={`${
            isMobile
              ? "relative mx-auto -mt-16 w-52 sm:w-72" // bigger & centered on mobile
              : "block absolute -left-3 md:-left-2 lg:-left-4 top-64 md:-top-0 lg:-top-0 z-50 w-40 md:w-64 lg:w-80"
          }`}
        >
          {!isMobile && dragging && (
            <motion.p
              ref={leftTextScope}
              initial={{ opacity: 0 }}
              className="text-secondary font-bold sm:text-sm md:text-xl lg:text-2xl"
            >
              You can drag me
            </motion.p>
          )}
          <img
            src={sittingOnBurger}
            alt="Sitting on Burger"
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            className="top-0 z-0"
          />
        </motion.div>

        {!isMobile && draggedAway && (
          <button
            onClick={resetPosition}
            className="absolute top-96 md:top-80 left-5 md:left-20 w-16 md:w-24 p-2 text-[10px] md:text-lg bg-secondary text-primary rounded-xl opacity-90 z-0 transition-all duration-500 hover:scale-110 transform-gpu will-change-transform"
          >
            Get me back
          </button>
        )}

        <h1 className="mt-4 text-5xl py-1 px-8 md:text-6xl text-[#222]">
          Hey{" "}
          <span className="inline-block animate-wave origin-[70%_70%]">👋</span>{" "}
          I&apos;m <span className="font-bold text-secondary">Adnan</span>
        </h1>
        <p className="mt-4 text-4xl md:text-4xl text-[#333]">
          Serving full-stack solutions with a side of AI
        </p>
        <p className="mt-4 text-center text-2xl">
          — where every project is cooked to order. I&apos;m all about spicy
          React front-ends, perfectly grilled APIs, and just the right drizzle
          of automation sauce. Pull up a chair, place your order, and let&apos;s
          craft something unforgettable — a digital dish that keeps your users
          coming back for seconds.
        </p>
      </div>
    </section>
  );
};

export default Hero;
