import BackToTopButton from "../components/BackToTopButton.jsx";
import NavBar from "../sections/v1/NavBar.jsx";
import Hero from "../sections/v1/Hero.jsx";
import About from "../sections/v1/About.jsx";
import Skills from "../sections/v1/Skills.jsx";
import Projects from "../sections/v1/Projects.jsx";
import Contact from "../sections/v1/Contact.jsx";
import Footer from "../sections/v1/Footer.jsx";
import AudioUsageModal from "../components/AudioUsageModal.jsx";


export default function HomeV1() {
  return (
    <>
      <BackToTopButton />
      <AudioUsageModal /> 
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
