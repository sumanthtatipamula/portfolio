"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { education } from "@/data/resume";
import { useTheme } from "@/context/ThemeContext";

const Education = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="education"
      className={`py-24 px-6 ${isDark ? "bg-white/[0.02]" : "bg-gray-50/80"}`}
    >
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
              isDark ? "bg-purple-500/10 text-purple-400" : "bg-purple-100 text-purple-600"
            }`}
          >
            <GraduationCap size={22} />
          </div>
          <h2 className="text-3xl font-bold">Education</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className={`group relative p-6 rounded-2xl border overflow-hidden transition-all duration-500 ${
                isDark
                  ? "bg-white/[0.03] border-white/[0.06] hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5"
                  : "bg-white border-gray-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/50"
              }`}
            >
              {/* Gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div
                className={`text-xs mb-4 font-semibold uppercase tracking-widest ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
              >
                {edu.period}
              </div>
              <h3 className="text-lg font-bold mb-1">{edu.degree}</h3>
              <p
                className={`text-sm mb-5 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {edu.institution}
              </p>
              <div
                className={`inline-block px-3.5 py-1.5 rounded-full text-sm font-semibold ${
                  isDark
                    ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                    : "bg-purple-50 text-purple-600 border border-purple-200"
                }`}
              >
                {edu.score}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
