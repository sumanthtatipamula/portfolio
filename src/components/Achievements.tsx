"use client";

import Image from "next/image";
import { Trophy, Award, Star, BadgeCheck, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import {
  highlights,
  credlyBadges,
  credlyProfileUrl,
  additionalCertifications,
} from "@/data/resume";
import { useTheme } from "@/context/ThemeContext";

const Achievements = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="achievements"
      className={`py-24 px-6 ${isDark ? "bg-white/[0.02]" : "bg-gray-50/80"}`}
    >
      <div className="max-w-4xl mx-auto">
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
          <h2 className="text-3xl font-bold">Highlights</h2>
        </motion.div>

        <div className="space-y-4 mb-20">
          {highlights.map((item, i) => (
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10"
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2.5 rounded-xl ${
                isDark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-100 text-emerald-600"
              }`}
            >
              <Award size={22} />
            </div>
            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>
          <a
            href={credlyProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl border transition-colors shrink-0 ${
              isDark
                ? "border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10"
                : "border-emerald-200 text-emerald-800 hover:bg-emerald-50"
            }`}
          >
            View all
            <ExternalLink size={16} />
          </a>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {credlyBadges.map((badge, i) => (
            <motion.a
              key={badge.title + badge.issuer}
              href={badge.badgeUrl ?? credlyProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className={`flex flex-col rounded-2xl border overflow-hidden text-left transition-all duration-300 ${
                isDark
                  ? "bg-white/[0.03] border-white/[0.08] hover:border-emerald-500/35 hover:shadow-lg hover:shadow-emerald-900/20"
                  : "bg-white border-gray-200 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100/60"
              }`}
            >
              <div
                className={`aspect-square flex items-center justify-center p-6 ${
                  isDark ? "bg-[#0f1419]" : "bg-gradient-to-br from-emerald-50 to-slate-50"
                }`}
              >
                {badge.image ? (
                  <Image
                    src={badge.image}
                    alt={`${badge.title} — ${badge.issuer}`}
                    width={160}
                    height={160}
                    className="object-contain max-h-36 w-auto drop-shadow-sm"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center gap-2 px-2">
                    <BadgeCheck
                      size={44}
                      className={isDark ? "text-emerald-400/85" : "text-emerald-600"}
                      strokeWidth={1.35}
                    />
                    <span
                      className={`text-xs font-medium leading-tight ${
                        isDark ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      Verified credential — open profile for official badge
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p
                  className={`text-[11px] font-semibold uppercase tracking-wide mb-1 ${
                    isDark ? "text-emerald-400/90" : "text-emerald-700"
                  }`}
                >
                  {badge.issuer}
                </p>
                <h3
                  className={`text-sm font-bold leading-snug mb-2 ${
                    isDark ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {badge.title}
                </h3>
                <div className={`mt-auto text-xs space-y-0.5 ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                  {badge.issued ? <p>Issued {badge.issued}</p> : null}
                  {badge.expires ? <p>Expires {badge.expires}</p> : null}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className={`text-lg font-bold mb-4 ${isDark ? "text-gray-200" : "text-gray-800"}`}>
            Additional credentials
          </h3>
          <p className={`text-sm mb-6 ${isDark ? "text-gray-500" : "text-gray-500"}`}>
            University and MOOC-style programs.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {additionalCertifications.map((cert, i) => (
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
