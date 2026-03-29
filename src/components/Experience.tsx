"use client";

import { Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { experiences } from "@/data/resume";
import { useTheme } from "@/context/ThemeContext";

const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="journey" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`p-2.5 rounded-xl ${
                isDark ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-100 text-indigo-600"
              }`}
            >
              <Rocket size={22} />
            </div>
            <h2 className="text-3xl font-bold">Where I've Built</h2>
          </div>
          <p className={`text-sm max-w-xl ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            A timeline of the places where I've shipped products, solved hard problems, and grown as a developer.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-[19px] top-2 bottom-2 w-px hidden md:block ${
              isDark
                ? "bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent"
                : "bg-gradient-to-b from-indigo-300 via-purple-300 to-transparent"
            }`}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative md:pl-14"
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute left-[11px] top-6 w-[17px] h-[17px] rounded-full border-[3px] hidden md:block ${
                    isDark
                      ? "bg-[#0a0a0f] border-indigo-500"
                      : "bg-[#fafafa] border-indigo-500"
                  }`}
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 + 0.2 }}
                />

                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className={`group p-6 rounded-2xl border transition-all duration-500 ${
                    isDark
                      ? "bg-white/[0.03] border-white/[0.06] hover:border-indigo-500/30 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-indigo-500/5"
                      : "bg-white border-gray-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100/50"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p
                        className={`font-semibold ${
                          isDark ? "text-indigo-400" : "text-indigo-600"
                        }`}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${
                        isDark
                          ? "bg-white/5 text-gray-400"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p
                    className={`text-sm mb-4 ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {exp.description}
                  </p>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((highlight, j) => (
                      <li
                        key={j}
                        className={`text-sm leading-relaxed flex gap-2.5 ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <span
                          className={`mt-2 shrink-0 w-1.5 h-1.5 rounded-full ${
                            isDark ? "bg-indigo-500/60" : "bg-indigo-400"
                          }`}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
