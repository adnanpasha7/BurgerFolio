import { useEffect, useState } from "react";
import Pointer from "../components/Pointer.jsx";
import sittingOnBurger from "../assets/sittingOnBurger.webp";
import { motion, useAnimate, useAnimation } from "framer-motion";

const Hero = () => {
  const [leftImageScope, leftImageAnimate] = useAnimate();
  const [leftTextScope, leftTextAnimate] = useAnimate();
  const [dragging, setDragging] = useState(true);

  useEffect(() => {
    leftImageAnimate([
      [leftImageScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftImageScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    leftTextAnimate([
      [leftTextScope.current, { opacity: [0, 1] }, { duration: 1, delay: 1 }],
    ]);
  }, []);

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

  // When drag ends, check position to decide if image moved away or not
  const onDragEnd = (_, info) => {
    // Check if image is near origin (tolerance 10px)
    if (Math.abs(info.point.x) < 10 && Math.abs(info.point.y) < 10) {
      setDraggedAway(false);
      controls.start({ x: 0, y: 0 });
    } else {
      setDraggedAway(true);
    }
  };
  return (
    <section id="hero" className="py-8 md:py-16" data-bg="primary">
      <div className="container text-center">
        <motion.div
          ref={leftImageScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          animate={controls}
          drag
          onDragStart={() => {
            setDragging(false);
            setDraggedAway(true);
          }}
          className="hidden md:block absolute md:-left-2 lg:-left-4 md:-top-0 lg:-top-0 z-50 w-20 md:w-64 lg:w-80"
        >
          {dragging && (
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
        {draggedAway && (
          <button
            onClick={resetPosition}
            className="absolute top-80 left-20 w-24 p-2 bg-secondary text-primary rounded-xl opacity-90 z-0 transition-all duration-500 hover:scale-110"
          >
            Get me back
          </button>
        )}
        {/* <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer name="Adnan" color="red" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, x: 100 }}
          ref={rightImageScope}
          className="absolute -right-48 -top-16 hidden lg:block"
        >
          <img src={sittingOnBurger} alt="Sitting on Burger" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 275, x: 100 }}
          ref={rightPointerScope}
          className="absolute right-40 top-10 hidden lg:block"
        >
          <Pointer name="Pasha" color="brown" />
        </motion.div> */}
        <h1 className="mt-4 text-5xl py-1 px-8 md:text-6xl text-[#222]">
          Hey
          <span className="inline-block animate-wave origin-[70%_70%]">
            👋
          </span>{" "}
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
