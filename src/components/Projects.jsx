"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Job tracker",
    description:
      "A simple job tracking system to manage applications and track job progress efficiently.",
    image: "/projects/project1.png",
    live: "https://muradvcv.github.io/PH-B13-AS-4/",
    github: "https://github.com/muradvcv/PH-B13-AS-4",
    tech: ["js", "Tailwind", "html"],
  },
  {
    title: "English janala",
    description:
      "An interactive English learning platform designed to improve vocabulary and grammar skills.",
    image: "/projects/project2.png",
    live: "https://muradvcv.github.io/english-janala/",
    github: "https://github.com/muradvcv/english-janala",
    tech: ["js", "Tailwind", "html"],
  },
  {
    title: "GitHub Issues Tracker",
    description:
      "A GitHub-style issue tracking system to create, manage, and monitor development tasks.",
    image: "/projects/project3.png",
    live: "https://muradvcv.github.io/B13-AS-05/",
    github: "https://github.com/muradvcv/B13-AS-05",
    tech: ["Next.js", "Firebase", "Tailwind"],
  },
  {
    title: "KeenKeeper",
    description:
      "A social connection app to help you keep track of important friends and relationships.",
    image: "/projects/project4.png",
    live: "https://keen-keeper-one-kappa.vercel.app/",
    github: "https://github.com/muradvcv/B13-AS-06",
    tech: ["React", "Tailwind", "html"],
  },
  {
    title: "Online-Book-Borrowing",
    description:
      "A digital library system for discovering, borrowing, and managing books online easily.",
    image: "/projects/project5.png",
    live: "https://online-book-borrowing-platform-one.vercel.app/",
    github: "https://github.com/muradvcv/Online-Book-Borrowing-Platform",
    tech: ["Next.js", "Express", "Tailwind", "mongodb"],
  },
  {
    title: "Tiles Gallery",
    description:
      "A modern tile showcase gallery displaying beautiful tile designs with smooth browsing experience.",
    image: "/projects/project6.png",
    live: "https://tiles-gallery-zeta-one.vercel.app/",
    github: "https://github.com/muradvcv/tiles-gallery",
    tech: ["Next.js", "Express", "Tailwind", "mongodb"],
  },
];

/* ANIMATION */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <section className="py-20 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Some of my recent works and full stack web applications.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projectsData.map((project, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-[#0b1120] border border-white/10 rounded-3xl overflow-hidden"
            >

              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-5">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex-1 text-center py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-sm font-semibold"
                  >
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 text-center py-2 rounded-xl border border-white/20 hover:border-cyan-400 text-sm font-semibold"
                  >
                    Code
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}