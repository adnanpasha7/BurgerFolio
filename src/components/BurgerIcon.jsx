// components/BurgerIcon.jsx
import { twMerge } from "tailwind-merge";

export default function BurgerIcon({
  isOpen,
  onClick,
  className = "",
  size = 24,
  small = false,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
      className={twMerge(
        "feather feather-menu cursor-pointer transition-all duration-400 ease-in-out",
        isOpen ? small ? "fixed top-4 right-4 z-[1000] stroke-[#FFECA9]" : "stroke-[#FFECA9]" : "stroke-[#A9070C]",
        className,
        small && isOpen && "fixed top-4 right-4 z-[1000]"
      )}
    >
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        className={twMerge(
          "origin-left transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
          isOpen && "rotate-45 -translate-y-1"
        )}
      />
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        className={twMerge(
          "transition-all",
          isOpen
            ? "opacity-0"
            : "duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        )}
      />
      <line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
        className={twMerge(
          "origin-left transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
          isOpen && "-rotate-45 translate-y-1"
        )}
      />
    </svg>
  );
}
