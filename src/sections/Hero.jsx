import React from "react";
import Pointer from "../components/Pointer.jsx";
import sittingOnBurger from "../assets/sittingOnBurger.webp";

const Hero = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container text-center">
        <div className="absolute -left-32 top-16 hidden lg:block">
          <img src={sittingOnBurger} alt="Sitting on Burger" />
        </div>
        <div className="absolute -right-64 -top-16 hidden lg:block">
          <img src={sittingOnBurger} alt="Sitting on Burger" />
        </div>
        <div className="absolute left-56 top-96 hidden lg:block">
          <Pointer name="Adnan" />
        </div>
        <div className="absolute right-40 -top-20 hidden lg:block">
          <Pointer name="Pasha" color="brown" />
        </div>
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
