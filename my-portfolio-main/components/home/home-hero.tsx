"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import my_image from "../../public/anwar photho.jpeg";
import { FaDownload, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { useEffect } from "react";
import Typed from "typed.js";

function HomeHero() {
  const description = [
    { num: 3, desc: "Years of experience" },
    { num: 15, desc: "Projects completed" },
    { num: 14, desc: "Technologies Mastered" },
    { num: 450, desc: "Code commits" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: "200vw" },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: "100vh" },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to My Portfolio! I am Anwar Gashaw, a Software Developer. A creative, dynamic, and collaborative software developer passionate about solving real-world problems through innovative and efficient solutions.",
      ],
      backSpeed: 60,
      backDelay: 1000,
      startDelay: 500,
    };

    const typed = new Typed(".typed-element", options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="mt-4 px-4 md:px-8 flex justify-center mb-24">
      <div>
        {" "}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse lg:flex-row items-center mt-12 space-y-8 lg:space-y-0 lg:space-x-8"
        >
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left lg:w-1/2"
          >
            <div className="typed-element flex flex-col space-y-1 text-xl text-white ">
              <p className="text-gray-300 text-lg md:text-xl">
                Software Developer
              </p>
              <h1 className="text-white text-4xl md:text-5xl font-bold">
                Hello I&apos;m
              </h1>
              <h1 className="text-green-400 text-4xl md:text-5xl font-bold">
                Anwar Gashaw
              </h1>
              <p className="text-gray-300 text-sm md:text-base mt-3">
                Let's build something amazing together
              </p>
            </div>

            <div className="mt-6 flex flex-wrap justify-center lg:justify-start space-x-4 space-y-4 lg:space-y-0">
              <Button className="w-36 h-12 text-green-400 bg-primary outline-none border border-green-500 rounded-xl flex items-center justify-center">
                Download Cv <FaDownload className="ml-2 w-5 h-5" />
              </Button>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  className="text-green-400 w-10 h-10 rounded-full border border-green-500 flex items-center justify-center"
                >
                  <a
                    href="https://github.com/reyan2541"
                    aria-label="GitHub"
                  >
                    {" "}
                    <FaGithub className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  className="text-green-400 w-10 h-10 rounded-full border border-green-500 flex items-center justify-center"
                >
                  <a
                    href="https://www.linkedin.com/in/anwar-gashaw-yimam-518335260/"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  className="text-green-400 w-10 h-10 rounded-full border border-green-500 flex items-center justify-center"
                >
                  <FaTwitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="w-full lg:w-full flex justify-center">
              <Image
                priority
                src={my_image}
                alt="My photo"
                className="rounded-full w-48 h-48 md:w-54 md:h-54 object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={descriptionVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-center"
        >
          {description.map((descr, index) => (
            <motion.div
              key={index}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center space-y-2 lg:flex-row space-x-1"
            >
              <p className="text-4xl md:text-5xl text-white font-bold">
                {descr.num}
              </p>
              <p className="text-gray-300 text-sm md:text-base">{descr.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HomeHero;
