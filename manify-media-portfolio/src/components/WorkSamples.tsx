"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const works = [
  {
    id: 1,
    src: "/images/work-1.png",
    alt: "AI Fashion Model 1",
  },
  {
    id: 2,
    src: "/images/work-2.jpeg",
    alt: "High Fashion Female Model",
  },
  {
    id: 3,
    src: "/images/work-3.png",
    alt: "Creative Portrait 1",
  },
  {
    id: 4,
    src: "/images/work-4.png",
    alt: "Minimalist Hair Mask Campaign",
  },
  {
    id: 5,
    src: "/images/work-5.png",
    alt: "Minimalist Hair Mask Campaign Alternate",
  },
  {
    id: 6,
    src: "/images/work-6.jpeg",
    alt: "Fashion Campaign Shot",
  },
];

export default function WorkSamples() {
  return (
    <section className="py-24 bg-black border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our Work.
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl">
            A selection of our latest AI-generated campaigns and premium visual assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden group bg-neutral-900 border border-neutral-800"
            >
              <Image
                src={work.src}
                alt={work.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
