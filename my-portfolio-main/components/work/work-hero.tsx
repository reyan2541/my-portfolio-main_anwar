"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { projects } from "@/lib/data";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

function WorkHero() {
  const [current, setCurrent] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [open, setOpen] = useState(false);

  const handleNext = () => {
    setCurrent((prev) => (prev < projects.length - 1 ? prev + 1 : prev));
  };

  const handlePrevious = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handleNextPhoto = () => {
    setCurrentPhoto((prev) =>
      prev < project.photos.length - 1 ? prev + 1 : 0
    );
  };

  const handlePreviousPhoto = () => {
    setCurrentPhoto((prev) =>
      prev > 0 ? prev - 1 : project.photos.length - 1
    );
  };
  const project = projects[current];
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: "100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {" "}
      <section className="mt-12">
        <div className="">
          <div>
            <div className="w-full flex space-x-10 items-center">
              <div className="lg:w-2/3 h-auto space-y-2 gap-y-2 ">
                <div className="lg:w-2/3">
                  <h1 className="text-4xl text-white">{project.number}</h1>
                  <p className="text-2xl text-white">{project.type} Project</p>
                  <p className="text-gray-400 ">{project.description}</p>
                </div>

                <div className=" flex flex-wrap space-x-2 mb-4">
                  {project.tech.map((tech) => {
                    return (
                      <p className="text-green-400" key={tech}>
                        {tech},
                      </p>
                    );
                  })}
                </div>

                <hr className="text-gray-800 mb-4" />
                <div className="flex space-x-4 mt-6 items-center">
                  <Dialog open={open}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="bg-primary text-gray-400"
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        See All Pages
                      </Button>
                    </DialogTrigger>
                    <DialogContent
                      className="w-[80vw] max-w-6xl h-[50vh] lg:h-[95vh] max-h-[95vh] bg-primary flex flex-col items-center justify-center overflow-hidden"
                      aria-labelledby="dialog-title"
                      aria-describedby="dialog-description"
                    >
                      <DialogHeader>
                        <DialogTitle
                          id="dialog-title "
                          className="text-white text-2xl text-center"
                        >
                          Project Photos
                        </DialogTitle>
                        <DialogDescription
                          id="dialog-description"
                          className="text-white"
                        >
                          Navigate through the project screenshots
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex  justify-center items-end lg:items-center w-full h-full">
                        <Button
                          size="lg"
                          onClick={handlePreviousPhoto}
                          className="absolute left-4 bg-green-400 z-10 hover:bg-white hover:text-black"
                        >
                          &larr;
                        </Button>
                        <Image
                          priority
                          className="rounded-2xl  hover:scale-105 transition duration-500 cursor-pointer"
                          src={project.photos[currentPhoto]}
                          alt={`Project page ${currentPhoto + 1}`}
                          width={800}
                          height={600}
                        />
                        <Button
                          size="lg"
                          onClick={handleNextPhoto}
                          className="absolute right-4 bg-green-400 z-10 hover:bg-white hover:text-black"
                        >
                          &rarr;
                        </Button>
                      </div>
                      <DialogFooter>
                        <Button
                          variant="outline"
                          className="bg-green-400 text-white"
                          onClick={() => {
                            setCurrentPhoto(0);
                            setOpen(false);
                          }}
                        >
                          Close
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  {/* <a
                    href={project.github}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-500 flex justify-center items-center"
                  >
                    <FaGithub className="w-8 h-8 text-white" />
                  </a> */}
                </div>
              </div>
              <div className="">
                <Image
                  src={project.demo}
                  alt="demo"
                  className="w-fit h-auto hidden sm:block rounded-2xl hover:scale-105 transition duration-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-4 justify-end mt-6">
            <Button
              size="lg"
              onClick={handlePrevious}
              className="bg-green-400 "
              disabled={current === 0}
            >
              <FaAngleLeft className="text-white" />
            </Button>
            <Button
              size="lg"
              onClick={handleNext}
              className="bg-green-400 "
              disabled={current === projects.length - 1}
            >
              <FaAngleRight className="text-white" />
            </Button>
          </div>
        </div>
      </section>
    </motion.section>
  );
}

export default WorkHero;
