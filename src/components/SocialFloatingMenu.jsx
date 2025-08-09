import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import burgerImg from "../assets/Burger.png";
import { SocialLinks } from "../constants";

const SocialFloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#A9070C] text-[#FAEFD2] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition sparkle-btn"
        aria-label="Toggle Contact Menu"
      >
        <FontAwesomeIcon icon={faCommentDots} className="text-2xl" />
      </button>

      <div
        className={`mt-3 flex flex-col items-end space-y-3 transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {SocialLinks.map((link, index) => {
          const isPhone = link.icon === faPhone;
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative w-14 h-14 bg-cover bg-center flex items-center justify-center hover:scale-110 transition ${
                isPhone && "md:hidden"
              }`}
              style={{ backgroundImage: `url(${burgerImg})` }}
              aria-label={link.label}
            >
              <FontAwesomeIcon
                icon={link.icon}
                className="text-[#FAEFD2] text-xl drop-shadow-sm"
              />

              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#A9070C] text-[#FAEFD2] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                {link.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialFloatingMenu;
