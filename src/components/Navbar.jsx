// src/components/Navbar.jsx

"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { MdDownload } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Default active section
  const [active, setActive] = useState("about");

  const navLinks = [
    { id: "about", label: "About", number: "01" },
    { id: "skills", label: "Skills", number: "02" },
    { id: "projects", label: "Projects", number: "03" },
    { id: "contact", label: "Contact", number: "04" },
  ];

  // Detect Active Section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;

      let currentSection = "about";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (!section) return;

        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = link.id;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial Check
    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] z-50">

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-3 md:px-4 py-2 rounded-3xl border border-[#9e73b64d] bg-[#050816]/85 backdrop-blur-2xl shadow-[0_0_35px_rgba(139,92,246,0.12)]">

        {/* Logo */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-purple-500/40 bg-[#0b1020] shadow-[0_0_25px_rgba(139,92,246,0.18)]">

          <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs animate-pulse">
            ✦
          </div>

          <h1 className="text-[#60a5fa] text-base md:text-lg font-semibold tracking-wider">
           KM.
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2 px-2 py-2 rounded-2xl border border-purple-500/20 bg-[#0b1020] shadow-[0_0_25px_rgba(139,92,246,0.12)]">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`group px-4 py-1 rounded-xl text-sm border transition-all duration-300 hover:scale-105
              
              ${active === link.id
                  ? "border-purple-500/40 text-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.20)]"
                  : "border-transparent text-gray-300 hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/10"
                }`}
            >
              <span className="mr-2 text-purple-500">
                {link.number}
              </span>

              {link.label}
            </a>
          ))}

          {/* Resume */}
          <a
            href="/MD_KHALEKUZZAMAN_Resume.pdf"
            download="MD_KHALEKUZZAMAN_Resume.pdf"
            className="inline-flex items-center justify-center px-6 py-2 rounded-2xl border border-purple-500/40 text-purple-400 hover:bg-purple-500/10 hover:scale-105 transition-all duration-300"
          >
            Resume
            <MdDownload className="text-xl ml-2 text-purple-400" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 rounded-2xl border border-purple-500/40 bg-[#0b1020] flex items-center justify-center text-purple-400 shadow-[0_0_18px_rgba(139,92,246,0.18)] hover:bg-purple-500/10 transition-all duration-300"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${open
            ? "max-h-[500px] opacity-100 mt-3"
            : "max-h-0 opacity-0"
          }`}
      >
        <div className="rounded-3xl border border-purple-500/20 bg-[#050816]/95 backdrop-blur-2xl p-3 shadow-[0_0_30px_rgba(139,92,246,0.12)] flex flex-col gap-2">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-2xl border transition-all duration-300
              
              ${active === link.id
                  ? "border-purple-500 text-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.20)]"
                  : "border-transparent text-gray-300 hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/10"
                }`}
            >
              <span className="mr-2 text-purple-500">
                {link.number}
              </span>

              {link.label}
            </a>
          ))}

          {/* Resume */}
          <a
            href="/MD_KHALEKUZZAMAN_Resume.pdf"
            download="MD_KHALEKUZZAMAN_Resume.pdf"
            className="inline-flex items-center justify-center px-6 py-2 rounded-2xl border border-purple-500/40 text-purple-400 hover:bg-purple-500/10 hover:scale-105 transition-all duration-300"
          >
            Resume
            <MdDownload className="text-xl ml-2 text-purple-400" />
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;