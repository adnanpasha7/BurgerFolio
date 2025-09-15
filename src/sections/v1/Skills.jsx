import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { skills } from "../../constants";

const cardVariants = {
  hidden: { rotateY: 90, scale: 0.9, opacity: 0 },
  visible: { rotateY: 0, scale: 1, opacity: 1 },
};

function SkillCard({ card, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        rotate: [0, -10, 10, -9, 9, 0],
        scale: 1.05,
        boxShadow:
          "0px 8px 20px rgba(0,0,0,0.25), 0px 0px 12px rgba(255,236,169,0.6)",
        transition: { duration: 0.6 },
      }}
      whileTap={{ scale: 0.95, rotate: 0 }}
      className="rounded-2xl p-4 bg-secondary shadow-md preserve-3d cursor-pointer"
    >
      <h3 className="text-xl text-center font-bold text-black bg-primary p-2 rounded-xl">
        {card.title}
      </h3>
      <p className="mt-2 text-[15px] text-tertiary bg-primary p-4 rounded-xl">
        {card.desc}
      </p>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="py-20 overflow-x-clip bg-inherit">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-7xl sm:text-5xl font-extrabold">
          <span className="text-secondary">The Patty</span> (Core Skills)
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {skills.map((card, i) => (
            <SkillCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
