"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Video } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            What We Do.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-400 text-lg max-w-2xl"
          >
            Delivering high-performance digital solutions tailored to scale your brand.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-10 rounded-3xl flex flex-col h-full hover:bg-neutral-900/80 transition-colors"
          >
            <div className="bg-neutral-800/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <MonitorSmartphone className="w-8 h-8 text-neutral-50" />
            </div>
            <h3 className="text-2xl font-bold mb-4">High-Converting Web Design.</h3>
            <p className="text-neutral-400 leading-relaxed text-lg">
              Custom, lightning-fast websites engineered to turn clicks into clients. Built on modern frameworks for maximum performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-10 rounded-3xl flex flex-col h-full hover:bg-neutral-900/80 transition-colors"
          >
            <div className="bg-neutral-800/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <Video className="w-8 h-8 text-neutral-50" />
            </div>
            <h3 className="text-2xl font-bold mb-4">AI Video Ads & Branding.</h3>
            <p className="text-neutral-400 leading-relaxed text-lg">
              Cinematic, AI-generated video campaigns that command attention and drastically reduce your ad production costs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
