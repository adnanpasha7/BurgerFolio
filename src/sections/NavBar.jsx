import React from "react";
import BurgerTop from "../assets/BT.webp";
import BurgerBottom from "../assets/BB.webp";
import LogoImg from "../assets/Logo.png";
import { Link } from "react-router-dom";
import NavLinks from "../components/NavLinks.jsx";

const navLinks = [
  { name: "🏠 Home", href: "#" },
  { name: "🍔 Menu", href: "#" },
  { name: "👨‍🍳 About", href: "#" },
  { name: "📖 Blog", href: "#" },
  { name: "📄 Resume", href: "#" },
];

const NavBar = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="grid grid-cols-2 lg:cols-3 border border-[#A9070C] px-4 items-center">
          <div className="flex items-center gap-2">
            <img src={LogoImg} alt="Logo" className="h-9 w-auto rounded-full" />
            <p className="text-sm md:text-[25px] sm:text-[15px] font-bold text-[#A9070C]">
              Adnan's Burger
            </p>
          </div>
          <div>
            <nav className="flex gap-4 font-medium">
              {navLinks.map((link, index) => (
                <Link key={index} to={link.href}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex justify-end gap-4">
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
              className="feather feather-menu text-yellow-600 md:hidden"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            {/* <nav> */}
            {/* <NavLinks to="/" variant="primary">
              🏠 Home
            </NavLinks> */}
            <NavLinks to="/menu" variant="primary">
              📱 Contact
            </NavLinks>
            {/* </nav> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
