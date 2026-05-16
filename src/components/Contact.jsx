"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { HiMiniShieldCheck } from "react-icons/hi2";

import { BiSolidMessageRoundedDots } from "react-icons/bi";

const Contact = () => {
  const form = useRef();

  // SEND EMAIL
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error);

          toast.error("Failed to send message!");
        }
      );
  };

  return (
    <section className="w-full min-h-screen bg-[#020817] text-white px-4 py-10 overflow-hidden">

      {/* TOASTER */}
      <Toaster position="top-right" />

      {/* CONTACT HEADING */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-4">
          GET IN TOUCH
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black">
          Con<span className="text-cyan-400">Tact</span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-8">
          Have a project idea, collaboration, or any question?
          Feel free to contact me anytime.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-[#07111f] border border-white/10 rounded-[32px] p-8 shadow-2xl"
        >

          {/* TOP */}
          <div className="mb-10">
            <p className="uppercase tracking-[5px] text-sm text-purple-400 mb-3">
              FAST RESPONSE
            </p>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Let s make it easy to reach out
            </h1>
          </div>

          {/* CARD 1 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border border-white/10 rounded-3xl p-6 mb-6 bg-[#030b17]"
          >
            <div className="flex items-center gap-3 mb-3">

              <HiMiniShieldCheck
                className="text-purple-400"
                size={22}
              />

              <h2 className="text-xl font-semibold">
                Clear and direct
              </h2>
            </div>

            <p className="text-gray-400 leading-8">
              Your message goes directly to my inbox securely.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border border-white/10 rounded-3xl p-6 mb-6 bg-[#030b17]"
          >
            <div className="flex items-center gap-3 mb-3">

              <BiSolidMessageRoundedDots
                className="text-purple-400"
                size={22}
              />

              <h2 className="text-xl font-semibold">
                Quick response
              </h2>
            </div>

            <p className="text-gray-400 leading-8">
              I usually reply quickly for freelance and portfolio work.
            </p>
          </motion.div>

          {/* SOCIAL BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-8">

            {/* GITHUB */}
            <motion.a
              whileHover={{ y: -5 }}
              href="https://github.com/muradvcv"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/10 bg-[#030b17] hover:border-white transition duration-300 flex items-center gap-3"
            >
              <FaGithub
                size={22}
                className="text-white"
              />

              GitHub
            </motion.a>

            {/* LINKEDIN */}
            <motion.a
              whileHover={{ y: -5 }}
              href="https://www.linkedin.com/in/muradvcv/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/10 bg-[#030b17] hover:border-[#0A66C2] transition duration-300 flex items-center gap-3"
            >
              <FaLinkedin
                size={22}
                className="text-[#0A66C2]"
              />

              LinkedIn
            </motion.a>

            {/* WHATSAPP */}
            <motion.a
              whileHover={{ y: -5 }}
              href="https://wa.me/8801787256994"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/10 bg-[#030b17] hover:border-[#25D366] transition duration-300 flex items-center gap-3"
            >
              <FaWhatsapp
                size={22}
                className="text-[#25D366]"
              />

              WhatsApp
            </motion.a>
          </div>

          {/* EMAIL BOX */}
          <motion.a
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=muradvcv@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block rounded-2xl border border-purple-500/40 bg-[#07111f]"
          >
            <div className="rounded-2xl px-6 py-5 flex items-center justify-between hover:bg-[#0b1628] transition">

              <div className="flex items-center gap-3">

                <MdEmail
                  className="text-[#EA4335]"
                  size={26}
                />

                <span className="font-semibold text-lg break-all">
                  muradvcv@gmail.com
                </span>
              </div>

              <span className="text-2xl text-purple-400">
                ↗
              </span>
            </div>
          </motion.a>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-[#07111f] border border-white/10 rounded-[32px] p-8 shadow-2xl"
        >

          <p className="uppercase tracking-[5px] text-sm text-purple-400">
            SEND A MESSAGE
          </p>

          <h1 className="text-4xl font-bold mt-4 mb-4">
            Tell me about your idea
          </h1>

          <p className="text-gray-400 mb-10">
            Fill out the form below and I’ll get back to you shortly.
          </p>

          {/* FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >

            {/* INPUTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* NAME */}
              <div>
                <label className="block mb-3 text-sm font-medium">
                  Your name *
                </label>

                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-[#030b17] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-3 text-sm font-medium">
                  Your email *
                </label>

                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="you@email.com"
                  className="w-full bg-[#030b17] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block mb-3 text-sm font-medium">
                Message *
              </label>

              <textarea
                rows={8}
                name="message"
                required
                placeholder="Tell me what you’re building..."
                className="w-full bg-[#030b17] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 resize-none"
              ></textarea>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-500 text-lg font-semibold flex items-center justify-center gap-3 transition duration-300"
            >
              <FaPaperPlane size={18} />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;