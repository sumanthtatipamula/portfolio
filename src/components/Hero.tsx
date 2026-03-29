import { MapPin, Mail, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/resume";

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl"
      >
        {/* Avatar placeholder */}
        <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-blue-500/25">
          ST
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-400 font-medium">
          {personalInfo.title}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <MapPin size={16} className="text-blue-400" />
            {personalInfo.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Mail size={16} className="text-violet-400" />
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white transition-colors"
            >
              {personalInfo.email}
            </a>
          </span>
          <span className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" className="text-gray-400">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <a
              href={`https://github.com/${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {personalInfo.github}
            </a>
          </span>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#experience"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-gray-700 text-gray-300 font-medium text-sm hover:border-gray-500 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} className="text-gray-600" />
      </motion.div>
    </section>
  );
};

export default Hero;
