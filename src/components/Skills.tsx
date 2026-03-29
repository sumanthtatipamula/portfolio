import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { skills } from "../data/resume";

const skillColors: Record<string, string> = {
  "C/C++": "from-orange-400 to-red-400",
  Java: "from-red-400 to-orange-500",
  SQL: "from-blue-400 to-cyan-400",
  Git: "from-orange-500 to-red-500",
  HTML: "from-orange-400 to-amber-400",
  CSS: "from-blue-400 to-indigo-400",
  JavaScript: "from-yellow-400 to-amber-400",
  React: "from-cyan-400 to-blue-400",
  "Node.js": "from-green-400 to-emerald-400",
  Bootstrap: "from-violet-400 to-purple-400",
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
            <Code2 size={24} />
          </div>
          <h2 className="text-3xl font-bold">Skills</h2>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${
                  skillColors[skill] || "from-gray-400 to-gray-500"
                } opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
              />
              <div className="relative px-5 py-3 rounded-xl bg-gray-900/80 border border-gray-800/50 group-hover:border-gray-600/50 transition-all duration-300">
                <span
                  className={`text-sm font-medium bg-gradient-to-r ${
                    skillColors[skill] || "from-gray-400 to-gray-500"
                  } bg-clip-text text-transparent`}
                >
                  {skill}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
