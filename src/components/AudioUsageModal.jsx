import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AudioUsageModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("audioModalShown");
    if (!hasSeenModal) {
      setShowModal(true);
      sessionStorage.setItem("audioModalShown", "true");
    }
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-secondary flex flex-col justify-center items-center z-[100000]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-primary rounded-lg p-6 max-w-sm mx-4 text-center shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-4 text-tertiary">Heads up! 🔊</h2>
        <p className="mb-6 text-gray-700">
          This site uses sounds like <span className="font-semibold">hover effects</span>, 
          sizzling <span className="italic">grill sounds</span>, and more.  
          Make sure your volume is set comfortably for the best experience.
        </p>

        <button
          onClick={() => setShowModal(false)}
          className="px-4 py-2 bg-secondary text-primary rounded hover:bg-[#860705] transition-colors"
        >
          Got it
        </button>
      </motion.div>
    </div>
  );
};

export default AudioUsageModal;
