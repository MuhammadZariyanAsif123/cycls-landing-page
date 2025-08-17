"use client";

import { Button } from "../shadcn/components/ui/button";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center overflow-hidden">
      {/* Subtle floating blobs for effect */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-black/20 rounded-full blur-3xl animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Ready to Launch Your AI Business?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-10">
          Start building today — no boilerplate, no hassle, just results.
        </p>
        <Button
          size="lg"
          className="bg-white text-indigo-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
        >
          Get Started for Free
        </Button>
      </motion.div>
    </section>
  );
}
