"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#070E17] text-white px-6 md:px-10 lg:px-20 py-24 overflow-hidden relative">

      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP RIGHT BUTTON */}
        <div className="pb-5 rounded-xl">
          <a
            href="#about"
            className="absolute right-0 -top-8 flex items-center gap-2 mb-5"
          >
            {/* TEXT */}
            <div className="px-3 py-2 rounded-xl border border-cyan-400/30 bg-[#07111f]/60 backdrop-blur-md text-cyan-300 text-[10px] tracking-[2px] uppercase">
              Back To Top
            </div>

            {/* ICON */}
            <div className="w-10 h-10 rounded-xl border border-cyan-400/40 bg-[#07111f]/60 backdrop-blur-md flex items-center justify-center">

              <FaArrowUp className="text-cyan-400 text-sm" />
            </div>
          </a>
        </div>

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl font-black mb-8"
            >
              Khalekuzzaman
              <span className="text-purple-500">.</span>
            </motion.h1>

            <p className="text-gray-400 leading-9 text-[17px] max-w-[320px]">
              Passionate Full Stack Web Developer
              focused on building modern, responsive
              and high-performance web applications
              using the MERN stack with clean UI/UX
              and smooth user experiences.
            </p>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[6px] text-[11px] text-purple-500 mb-8">
              Navigation
            </p>

            <div className="flex flex-col gap-5 text-[17px] text-gray-300">

              {[
                "About",
                "Skills",
                "Projects",
                "Contact",
              ].map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{
                    x: 8,
                    color: "#a855f7",
                  }}
                  transition={{ duration: 0.2 }}
                  href={`#${item.toLowerCase()}`}
                  className="transition"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CONNECT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[6px] text-[11px] text-purple-500 mb-8">
              Connect
            </p>

            <div className="flex flex-col gap-5 text-[17px]">

              {/* GITHUB */}
              <motion.a
                whileHover={{ x: 8 }}
                href="https://github.com/muradvcv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition"
              >
                <FaGithub className="text-white" />
                GitHub
              </motion.a>

              {/* LINKEDIN */}
              <motion.a
                whileHover={{ x: 8 }}
                href="https://www.linkedin.com/in/muradvcv/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#0A66C2] transition"
              >
                <FaLinkedin className="text-[#0A66C2]" />
                LinkedIn
              </motion.a>

              {/* EMAIL */}
              <motion.a
                whileHover={{ x: 8 }}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=muradvcv@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#EA4335] transition"
              >
                <FaEnvelope className="text-[#EA4335]" />
                Email
              </motion.a>
              <motion.a
                whileHover={{ x: 8 }}
                href="tel:+8801787256994"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition"
              >
                <FaPhoneAlt className="text-green-400" />
                +88 01787256994
              </motion.a>
            </div>
          </motion.div>

          {/* GITHUB CARD */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[6px] text-[11px] text-purple-500 mb-8">
              Live GitHub Feed
            </p>

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="bg-[#07111f]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-7 hover:border-purple-500/40 duration-300 shadow-[0_0_40px_rgba(168,85,247,0.12)]"
            >

              <div className="flex items-center justify-between mb-6">

                <motion.h2
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl font-black"
                >
                  2
                </motion.h2>

                <span className="uppercase text-[10px] tracking-[2px] text-gray-500">
                  Contributions
                </span>
              </div>

              <div className="w-full h-[1px] bg-white/10 mb-6"></div>

              <div className="flex items-center gap-14 mb-8">

                <div>
                  <h3 className="text-2xl font-bold">
                    150
                  </h3>

                  <p className="uppercase text-[10px] tracking-[2px] text-gray-500 mt-1">
                    Commits
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    27
                  </h3>

                  <p className="uppercase text-[10px] tracking-[2px] text-gray-500 mt-1">
                    Repos
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">

                <motion.a
                  whileHover={{ x: 5 }}
                  href="https://github.com/muradvcv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition text-sm"
                >
                  View full profile
                </motion.a>

                <FaGithub className="text-purple-500 text-lg" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* LINE */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-[1px] bg-white/10 my-16"
        ></motion.div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-5"
        >

          <p className="text-gray-500 text-sm tracking-[1px]">
            © 2026 Khalekuzzaman Murad. All rights reserved.
          </p>

          <p className="text-gray-600 uppercase tracking-[4px] text-[11px]">
            Dhaka, Bangladesh
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;