import React from "react";
import SocialFloatingMenu from "./components/SocialFloatingMenu.jsx";
import NavBar from "./sections/NavBar.jsx"; // This is the old version of NavBar
import NavBar2 from "./sections/NavBar2.jsx";
import NavBarrrrr from "./sections/NavBarrrrr.jsx";
import Hero from "./sections/Hero.jsx";
import Hero2 from "./sections/Hero2.jsx";
import BackToTopButton from "./components/BackToTopButton.jsx";
import AdnansDinerMenu from "./sections/Abc.jsx";
import SmallScreenModal from "./components/SmallScreenModal.jsx";

const App = () => {
  window.addEventListener("scroll", () => {
    return console.log(window.scrollY);
  });
  return (
    <>
      {/* <SocialFloatingMenu /> */}
      {/* <AdnansDinerMenu /> */}
      <SmallScreenModal />
      <BackToTopButton />
      <NavBar />
      {/* <NavBarrrrr /> */}
      {/* <NavBar2 /> */}
      {/* <Hero2 /> */}
      <Hero />
    </>
  );
};

export default App;
