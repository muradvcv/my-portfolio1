"use client";

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  return (
    <section className="py-24 bg-[#050816] text-white overflow-hidden relative">

      {/* glowing background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* TITLE */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-14 px-4 relative z-10"
      >
        <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-extrabold">
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Passionate about building modern and responsive web applications.
        </motion.p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 relative z-10">

        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >

          {/* CODE BOX */}
          <motion.div
            variants={fadeLeft}
            whileHover={{ scale: 1.02 }}
            className="bg-[#0b1120] border border-purple-500/20 rounded-3xl p-6 shadow-2xl overflow-x-auto hover:shadow-purple-500/20 transition-all"
          >
            <pre className="text-sm leading-7">
              {`const `}
              <span className="text-cyan-400">developer</span>
              {` = {\n`}
              <span className="text-pink-400">  name</span>
              {`: `}
              <span className="text-yellow-300">"Md.khalekuzzaman"</span>
              {`,\n`}
              <span className="text-pink-400">  role</span>
              {`: `}
              <span className="text-green-400">"Web Developer"</span>
              {`,\n`}
              <span className="text-pink-400">  position</span>
              {`: `}
              <span className="text-cyan-300">Frontend Specialist</span>
              {`,\n`}
              <span className="text-pink-400">  company</span>
              {`: `}
              <span className="text-orange-300">Freelancer</span>
              {`,\n`}
              <span className="text-pink-400">  location</span>
              {`: `}
              <span className="text-purple-300">Bangladesh</span>
              {`,\n`}
              <span className="text-pink-400">  available</span>
              {`: `}
              <span className="text-green-400">true</span>
              {`\n};`}
            </pre>
          </motion.div>

          {/* CARDS */}
          <div className="space-y-5">

            {[{
              icon: "🎓",
              title: "Education",
              desc: "Mymensingh Polytechnic Institute",
              sub: "Diploma in CST",
              color: "purple"
            },
            {
              icon: "❤️",
              title: "Passion",
              desc: "Clean & Modern UI",
              sub: "Problem Solver",
              color: "pink"
            }].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-[#0b1120]/90 border border-white/10 rounded-2xl p-5 flex gap-4 transition-all duration-300 hover:border-${item.color}-500`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-gradient-to-r from-${item.color}-500 to-red-500`}>
                  {item.icon}
                </div>

                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{item.title}</p>
                  <h3 className="text-lg font-bold">{item.sub}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-7"
        >

          <motion.div variants={fadeRight}>
            <p className="text-purple-400 tracking-[4px] text-xs mb-3 uppercase">
              Introduction
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
              Building modern <span className="text-cyan-400">web experiences</span>
              <br />
              with creativity & <span className="text-purple-400">clean code</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeRight} className="text-gray-300 space-y-4">
            <p>
              My journey into technology started with curiosity and became passion for building real-world applications.
            </p>
            <p>
              I work with <span className="text-white font-semibold">React, Next.js & MongoDB</span> to create scalable web apps.
            </p>
          </motion.div>

          <motion.div variants={fadeRight} className="border-l border-purple-500/30 pl-5 space-y-6">

            <div className="relative">
              <span className="absolute -left-3 top-2 w-3 h-3 bg-purple-500 rounded-full"></span>
              <h4 className="font-bold">2025</h4>
              <p className="text-gray-400 text-sm">Started Programming</p>
            </div>

            <div className="relative">
              <span className="absolute -left-3 top-2 w-3 h-3 bg-cyan-500 rounded-full"></span>
              <h4 className="font-bold">2026</h4>
              <p className="text-gray-400 text-sm">Web Development Journey</p>
            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;