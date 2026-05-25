"use client";

import Me from "@/app/assets/me.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { HiOutlineHandRaised } from "react-icons/hi2";
import { CiInboxIn } from "react-icons/ci";

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Web Developer,",
];

// OFFICIAL ICONS + COLORS
const techStack = [
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiExpress, name: "Express", color: "#FFFFFF" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing Animation
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative min-h-screen overflow-hidden bg-[#020617] text-white pt-42 pb-20 px-5 sm:px-8 md:px-12 lg:px-16"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 text-center lg:text-left"
        >

          {/* NAME */}
          <div className="space-y-2">

            {/* GREETING */}
            <div className="flex items-center gap-2 text-gray-400 text-lg sm:text-xl">
              <HiOutlineHandRaised className="text-yellow-400 animate-pulse" />
              <span>Hey, I am</span>
            </div>

            {/* NAME */}
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-none text-white">
              Md.
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              Khalekuzzaman
            </h1>

          </div>

          {/* ROLE */}
          <div className="border-l-4 border-purple-500 pl-4 inline-block lg:block">
            <h2 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-light text-gray-200 min-h-[60px]">
              {text}
              <span className="animate-pulse text-purple-500">|</span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <p className="max-w-2xl mx-auto lg:mx-0 text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
            I build modern, scalable, and user-friendly web applications using the MERN stack and cutting-edge technologies.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:scale-105 transition-all duration-300 shadow-[0_0_35px_rgba(168,85,247,0.35)] text-center"
            >
              Explore Work →
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl outline outline-[#016086] hover:scale-105 transition-all duration-300 shadow-[0_0_35px_rgba(168,85,247,0.35)] text-center flex gap-2 items-center justify-center"
            >
              Massage <span className="text-2xl text-[#06b4f8]"><CiInboxIn /></span>
            </a>

           

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >

          <div className="relative">

            {/* ACTIVE STATUS */}
            <div className="absolute -top-3 -right-3 flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full border border-green-400/40 backdrop-blur-md">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
              <span className="w-2 h-2 bg-green-400 rounded-full absolute"></span>
              <p className="text-xs text-green-300">Available</p>
            </div>

            {/* IMAGE GLOW */}
            <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full scale-110 animate-pulse" />

            {/* PROFILE IMAGE */}
            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden border-4 border-purple-500/40 shadow-[0_0_60px_rgba(168,85,247,0.35)] hover:scale-105 transition duration-300">

              <Image
                src={Me}
                alt="Profile"
                fill
                priority
                className="object-cover"
              />

            </div>

          </div>

          {/* TECH STACK (OFFICIAL COLORS) */}
          <div className="mt-6 overflow-hidden w-[280px] sm:w-[380px]">
            <div className="flex gap-6 animate-marquee whitespace-nowrap">

              {[...techStack, ...techStack].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center min-w-[70px]"
                  >
                    <Icon
                      className="text-2xl"
                      style={{ color: item.color }}
                    />
                    <span className="text-[10px] text-gray-400 mt-1">
                      {item.name}
                    </span>
                  </div>
                );
              })}

            </div>
          </div>

        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="w-1.5 h-1.5 bg-purple-400 rounded-full"
          />
        </div>

        <p className="text-xs text-gray-400">Scroll Down</p>
      </motion.div>

    </motion.section>
  );
};

export default Hero;