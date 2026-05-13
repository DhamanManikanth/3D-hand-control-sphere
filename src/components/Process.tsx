"use client";

import { motion } from "framer-motion";

export default function Process() {
  return (
    <section className="py-24 bg-neutral-900/20">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            The Manify Process.
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
            A seamless journey from initial strategy to deployment. We build scalable architecture ready for easy content management, ensuring your brand is always positioned for growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
