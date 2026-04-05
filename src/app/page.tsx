import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeWrapper from "@/components/ThemeWrapper";

export default function Home() {
  return (
    <ThemeWrapper>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </ThemeWrapper>
  );
}
