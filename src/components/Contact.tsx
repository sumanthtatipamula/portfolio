import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/resume";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-12 max-w-md mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 sm:grid-cols-3 max-w-2xl mx-auto"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="group p-6 rounded-xl bg-gray-900/50 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300"
          >
            <Mail
              size={24}
              className="mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform"
            />
            <p className="text-sm text-gray-400 mb-1">Email</p>
            <p className="text-xs text-gray-500 break-all">
              {personalInfo.email}
            </p>
          </a>

          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800/50">
            <Phone size={24} className="mx-auto mb-3 text-violet-400" />
            <p className="text-sm text-gray-400 mb-1">Phone</p>
            <p className="text-xs text-gray-500">{personalInfo.phone}</p>
          </div>

          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800/50">
            <MapPin size={24} className="mx-auto mb-3 text-emerald-400" />
            <p className="text-sm text-gray-400 mb-1">Location</p>
            <p className="text-xs text-gray-500">{personalInfo.location}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            <Mail size={18} />
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
