"use client";

import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative px-6 py-20 md:py-28 lg:py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden"
    >
      {/* Spotlight Effect */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-r from-indigo-200 via-purple-200 to-transparent blur-3xl opacity-40 pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          The Gap Between a{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Brilliant Agent
          </span>{" "}
          and a{" "}
          <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Viable Business
          </span>{" "}
          is Immense.
        </motion.h2>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          You’ve built a powerful AI agent. But turning it into a real,
          commercial product is a maze of infrastructure, frontend boilerplate,
          authentication, and payment integrations.{" "}
          <span className="font-semibold text-gray-900">
            Cycls closes that gap instantly.
          </span>
        </motion.p>
      </div>

      {/* Bottom curve divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-20 md:h-32 text-white"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.96,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
