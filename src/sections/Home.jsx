import BackToTopButton from "../components/BackToTopButton.jsx";
import NavBar from "../sections/NavBar.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Skills from "../sections/Skills.jsx";
import Projects from "../sections/Projects.jsx";
import Contact from "../sections/Contact.jsx";
import Footer from "../sections/Footer.jsx";
import AudioUsageModal from "../components/AudioUsageModal.jsx";


export default function Home() {
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
