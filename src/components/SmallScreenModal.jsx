import { useEffect, useState } from "react";
import smilingBurger from "../assets/smilingBurger.png";
import { motion } from "framer-motion";

const SmallScreenModal = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // example breakpoint for small screens
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [isSmallScreen]);

  if (!showModal) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-secondary flex flex-col justify-center items-center z-50">
      <motion.div
        animate={{ rotate: [0, 5, -5, 5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <img
          src={smilingBurger}
          alt="Burger Icon"
          className="w-32 h-44 hover:scale-150 transition-transform duration-700"
        />
      </motion.div>
      <div className="bg-primary rounded-lg p-6 max-w-sm mx-4 text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-tertiary">
          Viewed best on larger devices
        </h2>
        <p className="mb-6 text-gray-600">
          For the best experience, please view this site on a larger screen.
        </p>
        <button
          onClick={() => setShowModal(false)}
          className="px-4 py-2 bg-secondary text-primary rounded hover:bg-[#860705]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SmallScreenModal;
