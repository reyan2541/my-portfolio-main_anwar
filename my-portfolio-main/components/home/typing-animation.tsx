"use client";
import { useEffect } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to My Portfolio! I am a Full-stack Developer. Let&apos;s build something amazing together.",
      ],
      typeSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };

    const typed = new Typed(".typed-element", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <div className="typed-element font-bold text-white"></div>;
};

export default TypingAnimation;
