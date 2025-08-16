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
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import About from "./sections/About.jsx";
import Services from "./sections/Services.jsx";
import Projects from "./sections/Projects.jsx";

const App = () => {
  return (
    <>
      {/* <SocialFloatingMenu /> */}
      {/* <SmallScreenModal /> */}
      <BackToTopButton />
      <NavBar />
      {/* <NavBarrrrr /> */}
      {/* <NavBar2 /> */}
      {/* <Hero2 /> */}
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
