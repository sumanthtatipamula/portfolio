import { Trophy, Award } from "lucide-react";
import { motion } from "framer-motion";
import { achievements, certifications } from "../data/resume";

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
            <Trophy size={24} />
          </div>
          <h2 className="text-3xl font-bold">Achievements</h2>
        </motion.div>

        <div className="space-y-4 mb-20">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-3 p-4 rounded-lg bg-gray-900/50 border border-gray-800/50 hover:border-amber-500/20 transition-colors duration-300"
            >
              <span className="text-amber-400 mt-0.5 shrink-0">🏆</span>
              <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
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
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
            <Award size={24} />
          </div>
          <h2 className="text-3xl font-bold">Certifications</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3 p-4 rounded-lg bg-gray-900/50 border border-gray-800/50 hover:border-emerald-500/20 transition-colors duration-300"
            >
              <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
              <p className="text-gray-300 text-sm leading-relaxed">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
