"use client";

import { useState, useEffect } from "react";
import { Button } from "../shadcn/components/ui/button";

const NAV_ITEMS = [
  { label: "Home", target: "hero" },
  { label: "Problem", target: "problem" },
  { label: "How It Works", target: "how-it-works" },
  { label: "Audience", target: "audience" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item.target)
      );
      const scrollPos = window.scrollY + 100;
      sections.forEach((sec, idx) => {
        if (sec && scrollPos >= sec.offsetTop) {
          setActiveSection(NAV_ITEMS[idx].target);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-white/70 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:py-5">
        {/* Logo */}
        <div
          className={`text-2xl font-bold cursor-pointer transition-transform ${
            isScrolled ? "text-black" : "text-black/80"
          } hover:scale-105`}
          onClick={() => scrollToSection("hero")}
        >
          Cycls
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-medium">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className="relative cursor-pointer px-1 py-2"
            >
              <span
                className={`transition-colors duration-300 ${
                  activeSection === item.target
                    ? "text-yellow font-semibold"
                    : isScrolled
                    ? "text-gray-700"
                    : "text-white"
                } hover:text-yellow-500`}
              >
                {item.label}
              </span>
              {/* Gradient underline animation */}
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-indigo-500 to-purple-500 ${
                  activeSection === item.target ? "w-full" : "w-0"
                }`}
              />
            </li>
          ))}

          <li className="hidden md:block">
            <Button
              onClick={() => scrollToSection("cta")}
              className=" hidden md:block ml-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 hover:shadow-lg rounded-full px-5 py-2 transition-transform"
            >
              Get Started
            </Button>
          </li>
        </ul>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </nav>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleNavigate = (target) => {
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false); // close menu after navigating
  };

  // Close menu if user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (open) setOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <div className="md:hidden relative z-50">
      <button
        onClick={() => setOpen(!open)}
        className="text-white focus:outline-none text-3xl relative z-50"
      >
        {open ? "✖" : "☰"}
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-md z-40 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center space-y-8 text-2xl px-6 overflow-y-auto transition-transform duration-300 z-50
        ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.target}
            className="hover:text-yellow-400 font-semibold text-teal-100 transition-colors duration-300"
            onClick={() => handleNavigate(item.target)}
          >
            {item.label}
          </button>
        ))}

        <Button
          onClick={() => handleNavigate("cta")}
          className="mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 hover:shadow-lg rounded-full px-8 py-3 text-lg transition-transform"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
