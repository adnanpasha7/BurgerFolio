import React from "react";
import BurgerTop from "../assets/BT.webp";
import BurgerBottom from "../assets/BB.webp";
import LogoImg from "../assets/Burger.png";

const NavBar = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="grid grid-cols-2 p-2 px-4 items-center justify-between">
          <div>
            <img
              src={LogoImg}
              alt="Logo"
              className="h-20 sm:h-40 w-20 sm:w-auto"
            />
            <p>Pasha's Burgers</p>
          </div>
          <div className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-menu md:hidden"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <button className="border border-[#F8CD51] h-12 rounded-full px-6 font-medium">
              Log In
            </button>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
