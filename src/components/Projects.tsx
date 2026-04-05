"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, FolderKanban, Sparkles } from "lucide-react";
import { projects } from "@/data/resume";
import { useTheme } from "@/context/ThemeContext";

/** Auto-advance interval (ms); pauses on hover and when the tab is hidden */
const AUTOPLAY_MS = 4200;

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="projects"
      className={`py-24 px-6 relative ${isDark ? "bg-white/[0.02]" : "bg-sky-50/40"}`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`p-2.5 rounded-xl ${
                isDark ? "bg-sky-500/10 text-sky-400" : "bg-sky-100 text-sky-700"
              }`}
            >
              <FolderKanban size={22} />
            </div>
            <h2 className="text-3xl font-bold">Personal projects</h2>
          </div>
          <p
            className={`text-sm max-w-2xl leading-relaxed ${
              isDark ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Apps and tools I design and ship outside of work—experiments in product, UI, and end-to-end
            delivery.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, pi) => (
            <ProjectShowcase key={project.id} project={project} index={pi} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ProjectShowcase({
  project,
  index,
  isDark,
}: {
  project: (typeof projects)[number];
  index: number;
  isDark: boolean;
}) {
  const [active, setActive] = useState(0);
  const n = project.gallery.length;
  const prev = () => setActive((i) => (i - 1 + n) % n);
  const next = () => setActive((i) => (i + 1) % n);

  const pauseRef = useRef({ hover: false, hidden: false });

  useEffect(() => {
    const onVis = () => {
      pauseRef.current.hidden = document.hidden;
    };
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    if (n <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (pauseRef.current.hover || pauseRef.current.hidden) return;
      setActive((i) => (i + 1) % n);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [n, project.id]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className={`rounded-3xl border overflow-hidden ${
        isDark
          ? "bg-white/[0.03] border-white/[0.08] shadow-xl shadow-black/20"
          : "bg-white border-sky-100 shadow-xl shadow-sky-100/40"
      }`}
    >
      <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] gap-0">
        <div
          className={`relative min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] flex items-center justify-center py-10 px-4 ${
            isDark ? "bg-[#0c1220]" : "bg-slate-100"
          }`}
          onMouseEnter={() => {
            pauseRef.current.hover = true;
          }}
          onMouseLeave={() => {
            pauseRef.current.hover = false;
          }}
          onFocusCapture={() => {
            pauseRef.current.hover = true;
          }}
          onBlurCapture={() => {
            pauseRef.current.hover = false;
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[min(72vw,280px)] sm:w-[260px] aspect-[9/19] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/10"
            >
              <Image
                src={project.gallery[active].src}
                alt={project.gallery[active].alt}
                fill
                className="object-cover object-top"
                sizes="280px"
                priority={index === 0 && active === 0}
              />
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={prev}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border backdrop-blur-md transition-colors ${
              isDark
                ? "bg-black/40 border-white/10 text-white hover:bg-black/60"
                : "bg-white/90 border-sky-200/80 text-sky-900 hover:bg-white"
            }`}
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={next}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border backdrop-blur-md transition-colors ${
              isDark
                ? "bg-black/40 border-white/10 text-white hover:bg-black/60"
                : "bg-white/90 border-sky-200/80 text-sky-900 hover:bg-white"
            }`}
            aria-label="Next screenshot"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 flex-wrap px-8">
            {project.gallery.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active
                    ? isDark
                      ? "w-6 bg-sky-400"
                      : "w-6 bg-sky-600"
                    : isDark
                      ? "w-2 bg-white/25 hover:bg-white/40"
                      : "w-2 bg-sky-300/80 hover:bg-sky-400"
                }`}
                aria-label={`Show screenshot ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-start gap-2 mb-2">
            <Sparkles
              size={18}
              className={isDark ? "text-sky-400 shrink-0 mt-1" : "text-sky-600 shrink-0 mt-1"}
            />
            <p
              className={`text-sm font-medium uppercase tracking-wider ${
                isDark ? "text-sky-400/90" : "text-sky-700"
              }`}
            >
              {project.tagline}
            </p>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">{project.title}</h3>
          <p
            className={`text-sm leading-relaxed mb-6 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {project.description}
          </p>
          <ul className="space-y-2.5 mb-8">
            {project.highlights.map((line, i) => (
              <li
                key={i}
                className={`text-sm leading-relaxed flex gap-2.5 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <span
                  className={`mt-2 shrink-0 w-1.5 h-1.5 rounded-full ${
                    isDark ? "bg-sky-500/70" : "bg-sky-500"
                  }`}
                />
                {line}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className={`text-xs font-medium px-3 py-1 rounded-full ${
                  isDark ? "bg-sky-500/15 text-sky-300" : "bg-sky-100 text-sky-800"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-8">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-semibold px-4 py-2 rounded-xl border transition-colors ${
                    isDark
                      ? "border-sky-500/30 text-sky-300 hover:bg-sky-500/10"
                      : "border-sky-300 text-sky-800 hover:bg-sky-50"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default Projects;
