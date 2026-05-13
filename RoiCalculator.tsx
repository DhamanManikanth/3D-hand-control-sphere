"use client";

import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

// Formatting function for Indian Rupees
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
};

// Animated Counter Component for Currency
const AnimatedNumber = ({ value }: { value: number }) => {
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => formatCurrency(current));

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
};

// Animated Counter Component for Percentages
const AnimatedPercent = ({ value }: { value: number }) => {
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => `${Math.round(current)}%`);

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
};

export default function RoiCalculator() {
  const [adSpend, setAdSpend] = useState<number>(50000);
  const [videoCost, setVideoCost] = useState<number>(20000);
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const aiVideoCost = videoCost * 0.3;
  const savings = videoCost * 0.7;

  // A dynamic engagement increase calculation based on inputs
  const engagementIncrease = 120 + (savings / 1000) * 0.5 + (adSpend / 10000) * 2;

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsUnlocked(true);
      // In a real application, this would send the captured email to a backend/CRM
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 md:p-8 bg-zinc-950 text-zinc-100 rounded-2xl shadow-2xl font-sans border border-zinc-800">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">AI Video ROI Calculator</h2>
        <p className="text-zinc-400">See how much you can save and grow with Manify Media AI.</p>
      </div>

      <div className="space-y-8 mb-12">
        {/* Slider 1: Ad Spend */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm md:text-base font-medium text-zinc-300">Current Monthly Ad Spend</label>
            <span className="text-lg font-semibold text-emerald-400"><AnimatedNumber value={adSpend} /></span>
          </div>
          <input
            type="range"
            min="10000"
            max="500000"
            step="5000"
            value={adSpend}
            onChange={(e) => setAdSpend(Number(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <div className="flex justify-between text-xs text-zinc-500">
            <span>₹10,000</span>
            <span>₹5,00,000</span>
          </div>
        </div>

        {/* Slider 2: Video Cost */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm md:text-base font-medium text-zinc-300">Current Cost Per Video Shoot</label>
            <span className="text-lg font-semibold text-emerald-400"><AnimatedNumber value={videoCost} /></span>
          </div>
          <input
            type="range"
            min="5000"
            max="100000"
            step="1000"
            value={videoCost}
            onChange={(e) => setVideoCost(Number(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <div className="flex justify-between text-xs text-zinc-500">
            <span>₹5,000</span>
            <span>₹1,00,000</span>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 flex flex-col justify-center items-center text-center">
          <p className="text-sm text-zinc-400 mb-2">Traditional Video Production Cost</p>
          <p className="text-2xl font-bold text-zinc-300"><AnimatedNumber value={videoCost} /></p>
        </div>
        <div className="p-6 bg-zinc-900 rounded-xl border border-emerald-900/30 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-500/20 text-emerald-400 text-[10px] uppercase font-bold px-2 py-1 rounded-bl-lg">
            70% Less
          </div>
          <p className="text-sm text-zinc-400 mb-2">Manify Media AI Video Cost</p>
          <p className="text-2xl font-bold text-emerald-400"><AnimatedNumber value={aiVideoCost} /></p>
        </div>
      </div>

      {/* Savings Section */}
      <div className="p-8 bg-emerald-950/20 rounded-xl border border-emerald-900/50 text-center mb-10 shadow-[0_0_30px_rgba(16,185,129,0.05)]">
        <p className="text-lg text-emerald-200/70 mb-2">Estimated Monthly Savings</p>
        <p className="text-5xl font-extrabold text-emerald-500 drop-shadow-sm">
          <AnimatedNumber value={savings} />
        </p>
      </div>

      {/* Lead Capture / Blurred Section */}
      <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center min-h-[240px] flex flex-col justify-center items-center">
        <div className={`transition-all duration-700 w-full ${isUnlocked ? 'filter-none opacity-100' : 'blur-md opacity-30 select-none'}`}>
          <p className="text-lg text-zinc-400 mb-2">Expected Engagement Increase</p>
          <p className="text-4xl font-bold text-indigo-400 mb-4">+<AnimatedPercent value={engagementIncrease} /></p>
          <p className="text-sm text-zinc-500 max-w-md mx-auto leading-relaxed">
            By reinvesting your savings into our AI-driven high-frequency content strategy, your ad spend becomes exponentially more effective.
          </p>
        </div>

        {!isUnlocked && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/70 backdrop-blur-sm p-6 z-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">Unlock Full ROI Metrics</h3>
            <p className="text-zinc-300 text-sm mb-6 text-center max-w-xs">Enter your email to see the exact strategy for achieving these numbers.</p>
            <form onSubmit={handleUnlock} className="w-full max-w-sm flex flex-col space-y-3">
              <input
                type="email"
                required
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-emerald-900/20"
              >
                Send Me the Free AI Strategy Breakdown
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
