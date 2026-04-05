"use client";

import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { skills } from "@/data/resume";
import { useTheme } from "@/context/ThemeContext";

const skillMeta: Record<string, { gradient: string; darkBg: string; lightBg: string; darkText: string; lightText: string }> = {
  React:     { gradient: "from-cyan-400 to-blue-400",      darkBg: "bg-cyan-500/10",    lightBg: "bg-cyan-50",     darkText: "text-cyan-400",    lightText: "text-cyan-600" },
  "Node js": { gradient: "from-green-400 to-emerald-400",  darkBg: "bg-green-500/10",   lightBg: "bg-green-50",    darkText: "text-green-400",   lightText: "text-green-600" },
  JS:        { gradient: "from-yellow-400 to-amber-400",   darkBg: "bg-yellow-500/10",  lightBg: "bg-yellow-50",   darkText: "text-yellow-400",  lightText: "text-yellow-600" },
  TS:        { gradient: "from-blue-400 to-indigo-400",    darkBg: "bg-blue-500/10",    lightBg: "bg-blue-50",     darkText: "text-blue-400",    lightText: "text-blue-600" },
  Java:      { gradient: "from-red-400 to-orange-500",     darkBg: "bg-red-500/10",     lightBg: "bg-red-50",      darkText: "text-red-400",     lightText: "text-red-600" },
  Python:    { gradient: "from-emerald-400 to-teal-500",   darkBg: "bg-emerald-500/10", lightBg: "bg-emerald-50",  darkText: "text-emerald-400", lightText: "text-emerald-600" },
  MongoDB:   { gradient: "from-lime-500 to-green-600",     darkBg: "bg-lime-500/10",    lightBg: "bg-lime-50",     darkText: "text-lime-400",    lightText: "text-green-700" },
  SQL:       { gradient: "from-blue-400 to-cyan-500",      darkBg: "bg-blue-500/10",    lightBg: "bg-blue-50",     darkText: "text-blue-400",    lightText: "text-blue-600" },
  AWS:       { gradient: "from-amber-400 to-orange-400",   darkBg: "bg-amber-500/10",   lightBg: "bg-amber-50",    darkText: "text-amber-400",   lightText: "text-amber-600" },
  Azure:     { gradient: "from-sky-400 to-blue-600",       darkBg: "bg-sky-500/10",     lightBg: "bg-sky-50",      darkText: "text-sky-400",     lightText: "text-sky-700" },
  Git:       { gradient: "from-orange-500 to-red-500",     darkBg: "bg-orange-500/10",  lightBg: "bg-orange-50",   darkText: "text-orange-400",  lightText: "text-orange-600" },
  Lit:       { gradient: "from-blue-500 to-indigo-500",    darkBg: "bg-indigo-500/10",  lightBg: "bg-indigo-50",   darkText: "text-indigo-400",  lightText: "text-indigo-600" },
  Tailwind:  { gradient: "from-teal-400 to-cyan-500",      darkBg: "bg-teal-500/10",    lightBg: "bg-teal-50",     darkText: "text-teal-400",    lightText: "text-teal-600" },
  "Next js": { gradient: "from-slate-500 to-gray-700",     darkBg: "bg-slate-500/10",   lightBg: "bg-slate-100",   darkText: "text-slate-300",   lightText: "text-slate-700" },
};

const fallback = { gradient: "from-gray-400 to-gray-500", darkBg: "bg-gray-500/10", lightBg: "bg-gray-100", darkText: "text-gray-400", lightText: "text-gray-600" };

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="toolkit" className="py-24 px-6">
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
          <h2 className="text-3xl font-bold">My Toolkit</h2>
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
