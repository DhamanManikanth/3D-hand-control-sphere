"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black border-t border-neutral-900">
      <div className="container mx-auto px-6 max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Start Your Project</h2>
            <p className="text-neutral-400 text-lg">
              Ready to scale? Tell us about your brand.
            </p>
          </div>

          <form className="glass-card p-8 md:p-10 rounded-3xl space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-neutral-300">Name</label>
              <input
                id="name"
                type="text"
                className="w-full bg-black/50 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-50 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-neutral-300">Email</label>
              <input
                id="email"
                type="email"
                className="w-full bg-black/50 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-50 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-neutral-300">Tell us about your brand</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-black/50 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-50 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none"
                placeholder="What are you building?"
              />
            </div>

            <Button size="lg" className="w-full mt-4">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
