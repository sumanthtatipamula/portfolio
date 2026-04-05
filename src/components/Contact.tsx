"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";
import { useTheme } from "@/context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const cards = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "indigo",
      darkIcon: "text-indigo-400",
      lightIcon: "text-indigo-500",
      darkBg: "bg-indigo-500/10",
      lightBg: "bg-indigo-50",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phoneDial}`,
      color: "purple",
      darkIcon: "text-purple-400",
      lightIcon: "text-purple-500",
      darkBg: "bg-purple-500/10",
      lightBg: "bg-purple-50",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      color: "pink",
      darkIcon: "text-pink-400",
      lightIcon: "text-pink-500",
      darkBg: "bg-pink-500/10",
      lightBg: "bg-pink-50",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] ${
          isDark ? "bg-indigo-600/8" : "bg-indigo-200/30"
        }`}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Got an idea?{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Let's make it real.
            </span>
          </h2>
          <p
            className={`mb-14 max-w-lg mx-auto ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Whether it's a collaboration, a cool project, or just a chat about
            tech — I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-5 sm:grid-cols-3 max-w-2xl mx-auto"
        >
          {cards.map((card, i) => {
            const Icon = card.icon;
            const Wrapper = card.href ? "a" : "div";
            return (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Wrapper
                  {...(card.href ? { href: card.href } : {})}
                  className={`block group p-6 rounded-2xl border transition-all duration-300 ${
                    isDark
                      ? "bg-white/[0.03] border-white/[0.06] hover:border-white/10 hover:bg-white/[0.05]"
                      : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100"
                  }`}
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                      isDark ? card.darkBg : card.lightBg
                    }`}
                  >
                    <Icon
                      size={22}
                      className={isDark ? card.darkIcon : card.lightIcon}
                    />
                  </div>
                  <p
                    className={`text-sm font-medium mb-1 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {card.label}
                  </p>
                  <p
                    className={`text-xs break-all ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {card.value}
                  </p>
                </Wrapper>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14"
        >
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-shadow duration-300"
          >
            <Send
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
            Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
