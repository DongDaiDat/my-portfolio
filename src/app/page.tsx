"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold tracking-tight md:text-8xl"
        >
          Dat Dong
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-2xl text-lg text-gray-400 md:text-xl"
        >
          Software Engineering Student & Fullstack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">
            View Projects
            <ArrowRight size={18} />
          </button>

          <button className="flex items-center gap-2 rounded-2xl border border-gray-700 px-6 py-3 transition hover:bg-white hover:text-black">
            <Mail size={18} />
            Contact
          </button>
        </motion.div>
      </section>
    </main>
  );
}