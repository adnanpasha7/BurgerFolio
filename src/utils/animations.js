//NavBar animations
export const swayVariant = {
  initial: { opacity: 0, y: -50, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: [0, 1, -1, 1, 0],
    transition: {
      rotate: { repeat: Infinity, duration: 2, ease: "easeInOut" },
      type: "spring",
      stiffness: 120,
      damping: 8,
    },
  },
  hidden: { opacity: 0, scale: 0.9 },
  stopped: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const bottomBunVariant = {
  ...swayVariant,
  initial: { opacity: 0, y: 50, scale: 0.9 },
};

export const stampVariant = {
  hidden: { opacity: 0, scale: 4, y: 0 },
  visible: {
    opacity: [1, 1, 1, 1, 1, 1],
    scale: [4, 0.9, 1.05, 1, 1.05, 1],
    y: [0, -10, 0, -5, 0, 0],
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.7, 0.9, 1],
    },
  },
  exit: { opacity: 0, scale: 0.5, y: -20, transition: { duration: 0.4 } },
};
