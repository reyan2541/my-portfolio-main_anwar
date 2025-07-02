"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export const SkillsMarquee = () => {
  return (
    <div className="overflow-hidden w-full py-6 bg-gray-900 border border-gray-950 rounded-xl">
      <motion.div
        className="flex space-x-10 w-max"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {[...skills, ...skills].map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-white text-center space-y-2"
            >
              <Icon className="text-5xl" />
              <span className="text-sm">{skill.name}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
