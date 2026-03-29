import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { skills } from "../data/resume";
import { useTheme } from "../context/ThemeContext";

const skillMeta: Record<string, { gradient: string; darkBg: string; lightBg: string; darkText: string; lightText: string }> = {
  "C/C++":      { gradient: "from-orange-400 to-red-400",    darkBg: "bg-orange-500/10", lightBg: "bg-orange-50",  darkText: "text-orange-400", lightText: "text-orange-600" },
  Java:         { gradient: "from-red-400 to-orange-500",    darkBg: "bg-red-500/10",    lightBg: "bg-red-50",     darkText: "text-red-400",    lightText: "text-red-600" },
  SQL:          { gradient: "from-blue-400 to-cyan-400",     darkBg: "bg-blue-500/10",   lightBg: "bg-blue-50",    darkText: "text-blue-400",   lightText: "text-blue-600" },
  Git:          { gradient: "from-orange-500 to-red-500",    darkBg: "bg-orange-500/10", lightBg: "bg-orange-50",  darkText: "text-orange-400", lightText: "text-orange-600" },
  HTML:         { gradient: "from-orange-400 to-amber-400",  darkBg: "bg-amber-500/10",  lightBg: "bg-amber-50",   darkText: "text-amber-400",  lightText: "text-amber-600" },
  CSS:          { gradient: "from-blue-400 to-indigo-400",   darkBg: "bg-blue-500/10",   lightBg: "bg-blue-50",    darkText: "text-blue-400",   lightText: "text-blue-600" },
  JavaScript:   { gradient: "from-yellow-400 to-amber-400",  darkBg: "bg-yellow-500/10", lightBg: "bg-yellow-50",  darkText: "text-yellow-400", lightText: "text-yellow-600" },
  React:        { gradient: "from-cyan-400 to-blue-400",     darkBg: "bg-cyan-500/10",   lightBg: "bg-cyan-50",    darkText: "text-cyan-400",   lightText: "text-cyan-600" },
  "Node.js":    { gradient: "from-green-400 to-emerald-400", darkBg: "bg-green-500/10",  lightBg: "bg-green-50",   darkText: "text-green-400",  lightText: "text-green-600" },
  Bootstrap:    { gradient: "from-violet-400 to-purple-400", darkBg: "bg-violet-500/10", lightBg: "bg-violet-50",  darkText: "text-violet-400", lightText: "text-violet-600" },
};

const fallback = { gradient: "from-gray-400 to-gray-500", darkBg: "bg-gray-500/10", lightBg: "bg-gray-100", darkText: "text-gray-400", lightText: "text-gray-600" };

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <div
            className={`p-2.5 rounded-xl ${
              isDark ? "bg-cyan-500/10 text-cyan-400" : "bg-cyan-100 text-cyan-600"
            }`}
          >
            <Code2 size={22} />
          </div>
          <h2 className="text-3xl font-bold">Skills</h2>
        </motion.div>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {skills.map((skill, i) => {
            const meta = skillMeta[skill] || fallback;
            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${meta.gradient} opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-500`}
                />
                <div
                  className={`relative px-6 py-3.5 rounded-2xl border transition-all duration-300 ${
                    isDark
                      ? `${meta.darkBg} border-white/[0.06] group-hover:border-white/15`
                      : `${meta.lightBg} border-gray-200 group-hover:border-gray-300`
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${
                      isDark ? meta.darkText : meta.lightText
                    }`}
                  >
                    {skill}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
