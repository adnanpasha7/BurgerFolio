import { motion } from "framer-motion";
import Burger from "../assets/Burger.png";
import loading from "../assets/loading.png";

const bounceVariant = {
  animate: {
    y: [0, -15, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  },
};

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-primary flex justify-center items-center z-50">
      <motion.img
        src={loading}
        alt="Loading Bun"
        className="w-40 h-40"
        variants={bounceVariant}
        initial={{ y: 0 }}
        animate="animate"
      />
    </div>
  );
};

export default Loader;
