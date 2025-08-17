"use client";

import { motion } from "framer-motion";
import { Button } from "../shadcn/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-75 z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/AI.mp4" type="video/mp4" />
      </video>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700/20 via-pink-700/20 to-indigo-700/20 animate-gradient-x mix-blend-overlay z-10 pointer-events-none" />

      {/* Decorative Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-cyan-400/30 blur-3xl animate-pulse-slow z-10 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-pink-400/30 blur-3xl animate-pulse-slow z-10 pointer-events-none"
      />

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-4xl sm:text-5xl md:text-6xl max-w-4xl font-extrabold tracking-tight z-20 
                   bg-gradient-to-r from-cyan-400 via-yellow-300 to-pink-400 bg-clip-text text-transparent animate-gradient-x"
      >
        Go from AI Agent to AI Business. Instantly.
      </motion.h1>

      {/* Sub-headline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 text-lg leading-8 text-white max-w-2xl z-20 drop-shadow-lg"
      >
        Cycls is the definitive platform for commercial AI agents. Our
        open-source framework and managed cloud transform your Python code into
        a scalable, monetizable business with a single decorator.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10 z-20"
      >
        <Button
          size="lg"
          className="rounded-2xl px-8 py-6 text-lg font-semibold shadow-lg bg-gradient-to-r from-cyan-500 to-pink-500 text-white hover:scale-105 hover:shadow-2xl transition-transform"
        >
          🚀 Start Building for Free
        </Button>
      </motion.div>

      {/* Floating small circles */}
      <div className="absolute top-10 right-20 w-3 h-3 bg-cyan-400 rounded-full opacity-30 animate-float-slow z-10 pointer-events-none" />
      <div className="absolute bottom-32 left-16 w-4 h-4 bg-pink-400 rounded-full opacity-25 animate-float-slow delay-2000 z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-yellow-300 rounded-full opacity-20 animate-float-slow delay-1000 z-10 pointer-events-none" />
    </section>
  );
}
