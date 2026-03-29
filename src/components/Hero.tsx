import { MapPin, Mail, ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/resume";
import { useTheme } from "../context/ThemeContext";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 relative overflow-hidden"
    >
      {/* Animated background orbs */}
      <div
        className={`absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] animate-float ${
          isDark ? "bg-indigo-600/15" : "bg-indigo-400/20"
        }`}
      />
      <div
        className={`absolute bottom-1/3 -right-40 w-[400px] h-[400px] rounded-full blur-[100px] animate-float-delayed ${
          isDark ? "bg-purple-600/15" : "bg-purple-400/15"
        }`}
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] animate-pulse-slow ${
          isDark ? "bg-pink-600/8" : "bg-pink-400/10"
        }`}
      />

      {/* Grid pattern */}
      <div
        className={`absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px] ${
          isDark ? "opacity-100" : "opacity-50"
        }`}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-3xl"
      >
        {/* Avatar */}
        <motion.div variants={item} className="relative inline-block mb-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[3px] animate-gradient">
              <div
                className={`w-full h-full rounded-full flex items-center justify-center text-4xl font-extrabold ${
                  isDark ? "bg-[#0a0a0f] text-white" : "bg-[#fafafa] text-gray-900"
                }`}
              >
                ST
              </div>
            </div>
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-indigo-500/20 to-pink-500/20 blur-xl -z-10 animate-pulse-slow" />
          </div>
        </motion.div>

        {/* Status badge */}
        <motion.div variants={item} className="mb-6">
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium ${
              isDark
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : "bg-emerald-50 text-emerald-600 border border-emerald-200"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className={`mt-5 text-lg md:text-xl font-medium ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {personalInfo.title} with 5+ years crafting exceptional digital experiences
        </motion.p>

        {/* Contact pills */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            {
              icon: <MapPin size={14} />,
              text: personalInfo.location,
              color: "indigo",
            },
            {
              icon: <Mail size={14} />,
              text: personalInfo.email,
              href: `mailto:${personalInfo.email}`,
              color: "purple",
            },
            {
              icon: <GithubIcon />,
              text: personalInfo.github,
              href: `https://github.com/${personalInfo.github}`,
              color: "pink",
              external: true,
            },
          ].map((info, i) => {
            const Wrapper = info.href ? "a" : "span";
            return (
              <Wrapper
                key={i}
                {...(info.href ? { href: info.href } : {})}
                {...(info.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  isDark
                    ? `bg-${info.color}-500/10 text-${info.color}-400 border border-${info.color}-500/20 hover:border-${info.color}-500/40 hover:bg-${info.color}-500/15`
                    : `bg-${info.color}-50 text-${info.color}-600 border border-${info.color}-200 hover:border-${info.color}-300 hover:bg-${info.color}-100`
                }`}
              >
                {info.icon}
                {info.text}
              </Wrapper>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-shadow duration-300"
          >
            View My Work
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`px-8 py-3.5 rounded-full font-semibold text-sm border transition-all duration-300 ${
              isDark
                ? "border-white/15 text-gray-300 hover:border-white/30 hover:text-white hover:bg-white/5"
                : "border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={`flex flex-col items-center gap-2 ${
            isDark ? "text-gray-600" : "text-gray-400"
          }`}
        >
          <span className="text-[10px] uppercase tracking-[3px] font-medium">
            Scroll
          </span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
