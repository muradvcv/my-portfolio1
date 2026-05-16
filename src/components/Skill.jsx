"use client";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFigma,
} from "react-icons/si";

import { motion } from "framer-motion";

/* MAIN SKILLS */
const skillData = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" />, level: 80 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 75 },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" />, level: 88 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 78 },
      { name: "Express", icon: <SiExpress />, level: 72 },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: 70 },
    ],
  },
  {
    title: "Version Control",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: 85 },
      { name: "GitHub", icon: <FaGithub />, level: 88 },
      { name: "Figma", icon: <SiFigma className="text-pink-500" />, level: 70 },
    ],
  },
];

/* ANIMATION VARIANTS */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section className="py-20 bg-[#050816] text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-12"
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >

          {skillData.map((group, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="bg-[#0b1120] border border-white/10 rounded-2xl p-5 hover:border-purple-500 transition"
            >

              {/* TITLE */}
              <h3 className="text-xl font-bold mb-5 text-purple-400 border-b border-white/10 pb-2">
                {group.title}
              </h3>

              {/* SKILLS */}
              <div className="space-y-4">

                {group.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: j * 0.1 }}
                  >

                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <span className="text-xl">{skill.icon}</span>
                        {skill.name}
                      </div>

                      <span className="text-xs text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
                      />
                    </div>

                  </motion.div>
                ))}

              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}