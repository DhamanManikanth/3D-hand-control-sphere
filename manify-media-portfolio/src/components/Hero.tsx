"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center min-h-[90vh]">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            Websites That Sell.{" "}
            <br className="hidden md:block" />
            <span className="text-gradient">AI Videos That Captivate.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We build premium digital experiences and cutting-edge AI video campaigns designed to scale your brand and multiply your revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="#contact">
              <Button size="lg" className="w-full sm:w-auto text-base">
                Get a Free Proposal
              </Button>
            </Link>
            <Link href="#services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">
                View Our Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-900/30 rounded-full blur-3xl -z-10 pointer-events-none" />
    </section>
  );
}
