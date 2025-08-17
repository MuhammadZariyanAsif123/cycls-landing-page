"use client";

import { motion } from "framer-motion";
import { Code, CloudUpload, DollarSign } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Write Your Agent",
      description:
        "Focus on what you do best. Write your agent's logic in a simple Python function. Our guided meta-agent can even help you get started, turning ideas into code even faster.",
      color: "from-blue-500 to-indigo-500",
      icon: Code,
    },
    {
      number: "2",
      title: "Deploy Instantly",
      description:
        "Add our @cycls.agent decorator to your function. That’s it. Cycls automatically packages your agent into a full-stack, serverless application with a pre-built frontend and API.",
      color: "from-green-500 to-emerald-500",
      icon: CloudUpload,
    },
    {
      number: "3",
      title: "Monetize Immediately",
      description:
        "Launch your subscription business in minutes. Our managed platform comes with a built-in user pool and monetization, allowing you to charge for your agent with a simple take-rate model.",
      color: "from-pink-500 to-rose-500",
      icon: DollarSign,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative px-6 py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Background spotlight */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-r from-indigo-200 via-purple-200 to-transparent blur-3xl opacity-40"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16"
        >
          From{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Code
          </span>{" "}
          to{" "}
          <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            Customer
          </span>{" "}
          in Three Steps.
        </motion.h2>

        {/* 3-column layout */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, translateY: -5 }}
                className="relative group"
              >
                <div className="h-full rounded-2xl backdrop-blur-lg bg-white/60 shadow-xl border border-gray-200 transition-all duration-300 group-hover:shadow-2xl group-hover:border-gray-300 p-8 flex flex-col items-center text-center">
                  {/* Floating Icon */}
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white shadow-lg mb-6`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
