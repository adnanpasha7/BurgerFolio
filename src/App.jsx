import React from "react";
import SocialFloatingMenu from "./components/SocialFloatingMenu.jsx";
import NavBar from "./sections/NavBar.jsx"; // This is the old version of NavBar
import NavBarrrrr from "./sections/NavBarrrrr.jsx";
import Hero from "./sections/Hero.jsx";
import BackToTopButton from "./components/BackToTopButton.jsx";

const App = () => {
  return (
    <>
      <SocialFloatingMenu />
      <BackToTopButton />

      {/* <NavBar /> */}
      <NavBarrrrr />
      <Hero />
      {/* <Hero />
      <Hero /> */}
    </>
  );
};

export default App;
