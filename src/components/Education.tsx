import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { education } from "../data/resume";

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-3xl font-bold">Education</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-6 rounded-xl bg-gray-900/50 border border-gray-800/50 hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider">
                {edu.period}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{edu.institution}</p>
              <div className="inline-block px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium">
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
