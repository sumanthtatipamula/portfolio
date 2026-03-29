import { motion } from "framer-motion";
import { personalInfo } from "../data/resume";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className={`py-10 px-6 border-t transition-colors duration-500 ${
        isDark ? "border-white/5" : "border-gray-200"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}
          >
            © {new Date().getFullYear()}{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-medium">
              {personalInfo.name}
            </span>
            . Built with React & Tailwind CSS.
          </motion.p>
          <div className="flex items-center gap-5">
            <a
              href={`https://github.com/${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium transition-all duration-300 ${
                isDark
                  ? "text-gray-500 hover:text-white"
                  : "text-gray-400 hover:text-gray-900"
              }`}
            >
              GitHub
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className={`text-sm font-medium transition-all duration-300 ${
                isDark
                  ? "text-gray-500 hover:text-white"
                  : "text-gray-400 hover:text-gray-900"
              }`}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
