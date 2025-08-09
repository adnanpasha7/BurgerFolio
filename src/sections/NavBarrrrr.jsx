import { useState } from "react";
import BurgerTop from "../assets/BT.webp";
import BurgerBottom from "../assets/BB.webp";
import LogoImg from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  // { name: "Home", logo: "🏠", href: "/" },
  { name: "Menu", logo: "🍔", href: "/menu" },
  { name: "About", logo: "👨‍🍳", href: "/about" },
  { name: "Blog", logo: "📖", href: "/blog" },
  { name: "Resume", logo: "📄", href: "resume" },
];

const NavBarrrrr = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section className="top-0 w-full">
      <img
        src={BurgerTop}
        alt="Burger Top"
        className="w-1/2 h-48 block m-auto -mt-8 sm:-mt-4"
      />
      <div className="flex items-center justify-center">
        <div>
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              {/* <img
                src={LogoImg}
                alt="Logo"
                className="size-24 sm:size-16 rounded-full"
              /> */}
              <div className="flex flex-col">
                <p className="text-sm md:text-[25px] sm:text-[20px] font-bold text-[#A9070C] sm:w-auto">
                  Adnan's Dev Diner
                </p>
                <p className="mt-1">Full Stack Burgers, served hot</p>
              </div>
            </div>
            <nav>
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-[#A9070C] font-medium px-3 py-2 wavy-underline-hover"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex md:hidden items-center justify-end gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu text-[#A9070C]"
                onClick={() => setIsOpen(!isOpen)}
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={twMerge(
                    "origin-left transition",
                    isOpen && "rotate-45 -translate-y-1"
                  )}
                ></line>
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={twMerge("transition", isOpen && "opacity-0")}
                ></line>
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={twMerge(
                    "origin-left transition",
                    isOpen && "-rotate-45 translate-y-1"
                  )}
                ></line>
              </svg>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="flex flex-col items-center justify-center gap-4 py-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-[#A9070C] font-medium px-10 py-2 wavy-underline-hover"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.logo} {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <img
        src={BurgerBottom}
        alt="Burger Bottom"
        className="w-1/2 h-48 block m-auto -mt-8 sm:-mt-4"
      />
    </section>
  );
};

export default NavBarrrrr;
