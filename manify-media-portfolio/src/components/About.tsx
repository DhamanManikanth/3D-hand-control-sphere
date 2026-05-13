"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 bg-neutral-900 border-t border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            We are Manify Media.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 text-lg md:text-xl text-neutral-300 leading-relaxed"
          >
            <p>
              Born at the intersection of cutting-edge technology and premium design, Manify Media is a creative agency built for the modern era. We don't just build websites; we architect digital experiences engineered to convert, scale, and dominate.
            </p>
            <p>
              Our expertise lies in blending striking minimalist aesthetics with high-performance frameworks. We leverage the latest in artificial intelligence to produce cinematic, hyper-realistic video campaigns and brand assets that drastically reduce traditional production costs while maximizing visual impact.
            </p>
            <p>
              Whether you are an emerging brand looking to disrupt the market or an established enterprise seeking a digital evolution, we partner with you to turn your vision into a measurable, revenue-generating reality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
