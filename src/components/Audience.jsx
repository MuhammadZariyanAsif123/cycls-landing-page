"use client";

import { motion } from "framer-motion";
import { Button } from "../shadcn/components/ui/button";

export default function AudienceSections() {
  return (
    <section
      id="audience"
      className="relative px-6 py-20 md:py-28 lg:py-32 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* For Developers */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left border-l-4 border-blue-600 pl-6"
        >
          <h3 className="text-sm font-medium text-blue-600 uppercase tracking-wide">
            For Developers
          </h3>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            A Zero-Config Dream for Builders.
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed text-lg max-w-2xl">
            Cycls is built by developers, for developers. Our open-source core
            gives you ultimate flexibility, while our zero-config philosophy
            removes all the boilerplate. The Python SDK is all you need to
            learn. With perfect dev/prod parity, what you build locally is
            exactly what scales globally on our serverless infrastructure.
          </p>
          <a href="https://docs.cycls.com/get-started/overview" target="blank" passHref>
            {" "}
            <Button
              size="lg"
              className="mt-6 rounded-xl px-6 py-5 text-base font-semibold shadow-md bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
            >
              Read the Docs
            </Button>
          </a>
        </motion.div>

        {/* For Business & Enterprise */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-end text-right border-r-4 border-emerald-600 pr-6"
        >
          <h3 className="text-sm font-medium text-emerald-600 uppercase tracking-wide">
            For Business & Enterprise
          </h3>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            A Complete Commercial Engine.
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed text-lg max-w-2xl">
            Cycls is more than a tool; it's an economic engine. For startups, we
            provide a complete business-in-a-box, handling users, payments, and
            infrastructure so you can focus on your product. For enterprises,
            our sovereign managed cloud, hosted in Dammam, offers a flexible,
            enterprise-ready platform to build foundational AI capabilities
            within the Kingdom.
          </p>
          <Button
            size="lg"
            className="mt-6 rounded-xl px-6 py-5 text-base font-semibold shadow-md bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
          >
            Contact Sales
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
