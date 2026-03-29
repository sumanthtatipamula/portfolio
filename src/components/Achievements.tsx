import { Trophy, Award, Star, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { achievements, certifications } from "../data/resume";
import { useTheme } from "../context/ThemeContext";

const Achievements = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="achievements"
      className={`py-24 px-6 ${isDark ? "bg-white/[0.02]" : "bg-gray-50/80"}`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <div
            className={`p-2.5 rounded-xl ${
              isDark ? "bg-amber-500/10 text-amber-400" : "bg-amber-100 text-amber-600"
            }`}
          >
            <Trophy size={22} />
          </div>
          <h2 className="text-3xl font-bold">Achievements</h2>
        </motion.div>

        <div className="space-y-4 mb-20">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ x: 4 }}
              className={`flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 ${
                isDark
                  ? "bg-white/[0.03] border-white/[0.06] hover:border-amber-500/20 hover:bg-white/[0.05]"
                  : "bg-white border-gray-200 hover:border-amber-300 hover:shadow-md hover:shadow-amber-50"
              }`}
            >
              <div
                className={`p-2 rounded-lg shrink-0 ${
                  isDark ? "bg-amber-500/10" : "bg-amber-50"
                }`}
              >
                <Star
                  size={16}
                  className={isDark ? "text-amber-400" : "text-amber-500"}
                />
              </div>
              <p
                className={`text-sm leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <div
            className={`p-2.5 rounded-xl ${
              isDark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-100 text-emerald-600"
            }`}
          >
            <Award size={22} />
          </div>
          <h2 className="text-3xl font-bold">Certifications</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
              className={`flex items-start gap-3 p-5 rounded-2xl border transition-all duration-300 ${
                isDark
                  ? "bg-white/[0.03] border-white/[0.06] hover:border-emerald-500/20 hover:bg-white/[0.05]"
                  : "bg-white border-gray-200 hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-50"
              }`}
            >
              <BadgeCheck
                size={18}
                className={`shrink-0 mt-0.5 ${
                  isDark ? "text-emerald-400" : "text-emerald-500"
                }`}
              />
              <p
                className={`text-sm leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {cert}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
