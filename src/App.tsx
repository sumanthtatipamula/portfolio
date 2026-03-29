import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen font-[Inter] transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#0a0a0f] text-gray-100"
          : "bg-[#fafafa] text-gray-900"
      }`}
    >
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
