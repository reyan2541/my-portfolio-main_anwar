"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="flex justify-center mt-24 h-auto"
    >
      <div className="w-12 h-12 border-4 border-gray-300 border-t-green-500 rounded-full"></div>
    </motion.div>
  );
}
