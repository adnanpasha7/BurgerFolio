import { useEffect, useState } from "react";
import Pointer from "../components/Pointer.jsx";
import sittingOnBurger from "../assets/sittingOnBurger.webp";
import { motion, useAnimate } from "framer-motion";

const Hero = () => {
  const [leftImageScope, leftImageAnimate] = useAnimate();
  const [leftTextScope, leftTextAnimate] = useAnimate();
  const [rightImageScope, rightImageAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();
  const [dragging, setDragging] = useState(true);

  useEffect(() => {
    leftImageAnimate([
      [leftImageScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftImageScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    leftTextAnimate([
      [leftTextScope.current, { opacity: [0, 1] }, { duration: 1, delay: 1 }],
    ]);
    // leftPointerAnimate([
    //   [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
    //   [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
    //   [
    //     leftPointerScope.current,
    //     { x: 0, y: [0, 16, 0] },
    //     { duration: 1, ease: "easeInOut" },
    //   ],
    // ]);
    // rightImageAnimate([
    //   [rightImageScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
    //   [rightImageScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    // ]);
    // rightPointerAnimate([
    //   [
    //     rightPointerScope.current,
    //     { opacity: 1 },
    //     { duration: 0.5, delay: 1.5 },
    //   ],
    //   [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
    //   [
    //     rightPointerScope.current,
    //     { x: 0, y: [0, 20, 0] },
    //     { duration: 0.5, ease: "easeInOut" },
    //   ],
    // ]);
  }, []);

  return (
    <section className="py-8 md:py-16">
      <div className="container text-center">
        <motion.div
          ref={leftImageScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          onDragStart={() => setDragging(false)}
          className="absolute sm:left-1 md:-left-2 lg:-left-4 sm:top-48 md:-top-0 lg:-top-0 z-50 block w-20 sm:w-28 md:w-64 lg:w-80"
        >
          {dragging && (
            <motion.p
              ref={leftTextScope}
              initial={{ opacity: 0 }}
              className="text-[#A9070C] font-bold sm:text-sm md:text-xl lg:text-2xl"
            >
              You can drag me
            </motion.p>
          )}
          <img
            src={sittingOnBurger}
            alt="Sitting on Burger"
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            className="top-0"
          />
        </motion.div>
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
          I am <span className="font-bold text-[#A9070C]">Adnan</span>
        </h1>
        <p className="mt-4 text-4xl md:text-4xl text-[#333]">
          serving full-stack solutions with a side of AI.
        </p>
        <p className="mt-4 text-center text-2xl">
          Cooking up delicious web experiences with spicy React, grilled APIs,
          and just the right amount of automation sauce. Pull up a chair
          let&apos;s build something unforgettable.
        </p>
      </div>
    </section>
  );
};

export default Hero;
