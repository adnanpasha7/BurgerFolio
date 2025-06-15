import React from "react";
import BurgerTop from "../assets/BT.webp";
import BurgerBottom from "../assets/BB.webp";
import LogoImg from "../assets/Logo.png";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", logo: "🏠", href: "/" },
  { name: "Menu", logo: "🍔", href: "/menu" },
  { name: "About", logo: "👨‍🍳", href: "/about" },
  { name: "Blog", logo: "📖", href: "/blog" },
  { name: "Resume", logo: "📄", href: "resume" },
];

const NavBarrrrr = () => {
  return (
    <section>
      <img
        src={BurgerTop}
        alt="Burger Top"
        className="w-5/6 sm:w-2/3 h-64 sm:h-40 block m-auto -mt-8 sm:-mt-4"
      />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 items-center">
          <div className="flex items-center gap-2">
            <img src={LogoImg} alt="Logo" className="size-24 sm:size-16 rounded-full" />
            <div className="flex flex-col">
              <p className="text-sm md:text-[25px] sm:text-[15px] font-bold text-[#A9070C]">
                Adnan's Dev Diner
              </p>
              <p className="mt-1">Full Stack Burgers, served hot</p>
            </div>
          </div>
          <nav>
            {navLinks.map((link, index) => (
              <>
                <span>{link.logo}</span>
                <Link
                  key={index}
                  to={link.href}
                  className="text-[#A9070C] font-medium px-3 py-2"
                >
                  {link.name}
                </Link>
              </>
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
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </div>
        <div></div>
      </div>
      <img
        src={BurgerBottom}
        alt="Burger Bottom"
        className="w-5/6 sm:w-2/3 h-64 sm:h-40 block m-auto -mt-8 sm:-mt-4"
      />
    </section>
  );
};

export default NavBarrrrr;
