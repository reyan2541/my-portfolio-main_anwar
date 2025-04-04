"use client";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { education, tabs, experiences, skills } from "@/lib/data";

function ResumeHero() {
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
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <section className="flex flex-col space-y-4 mt-4 md:space-y-24 md:mt-12 relative md:pb-64">
        <div className="sm:w-1/3 space-y-2">
          <h1 className="text-white font-bold text-xl sm:text-3xl">
            Why hire me?
          </h1>
          <p className="text-gray-300 text-sm sm:text-lg w-3/4">
            Below is an overview of my skills, experience, and qualifications.
          </p>
        </div>

        <Tabs
          defaultValue="experience"
          className="flex flex-col sm:flex-row w-full sm:mt-24 space-x-0 sm:space-x-8"
        >
          <TabsList className="flex sm:flex-col space-x-2 sm:space-y-4 bg-gray-950 p-2 sm:w-[20vw] overflow-x-auto sm:overflow-visible">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="w-full sm:h-24 text-center text-white rounded-md data-[state=active]:bg-green-500 data-[state=inactive]:bg-zinc-800"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex-grow bg-gray-900 pr-4 text-white mt-8 h-auto sm:h-[85vh] w-full sm:w-3/4 rounded-md sm:absolute sm:-top-8 sm:left-[22vw] sm:-bottom-[75vh] p-4">
            <TabsContent value="experience" className="bg-gray-900">
              <div>
                <h1 className="text-white font-bold text-xl md:text-2xl">
                  My Experience
                </h1>
                <p className="text-gray-400">
                  Here are my professional experiences:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {experiences.map((experience) => (
                    <div
                      className="bg-zinc-800 flex flex-col space-y-4 p-4 rounded-lg hover:bg-zinc-700 transition cursor-pointer"
                      key={experience.date}
                    >
                      <p className="text-green-400">{experience.date}</p>
                      <div className="font-semibold text-white text-lg md:text-xl">
                        {experience.position}
                      </div>
                      <div className="text-gray-400 flex items-center">
                        <hr className="w-2 h-1 rounded-full bg-green-300 mr-2" />
                        {experience.company}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="education">
              <h1 className="text-white font-bold text-xl md:text-2xl">
                Education
              </h1>
              <p className="text-gray-300">
                Educational background and achievements:
              </p>
              <ScrollArea className="h-auto sm:h-[65vh] w-full mt-4">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {education.map((educat) => (
                    <div
                      key={educat.id}
                      className="bg-zinc-800 flex flex-col space-y-2 p-4 rounded-lg hover:bg-zinc-700 transition cursor-pointer"
                    >
                      <h1 className="text-green-400">{educat.date}</h1>
                      <div className="text-lg font-semibold text-white md:text-lg">
                        {educat.position}
                      </div>
                      <div className="text-gray-400 flex items-center">
                        <hr className="w-2 h-1 rounded-full bg-green-300 mr-2" />
                        {educat.school}
                      </div>
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="space-y-4">
                {/* Header */}
                <div>
                  <h1 className="text-2xl font-bold text-white">My Skills</h1>
                  <p className="text-gray-300">Technologies and expertise:</p>
                </div>

                {/* Skills Grid */}
                <ScrollArea className="w-full h-[60vh]">
                  <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-zinc-800 w-[35vw] h-[15vh] flex justify-center items-center md:w-[10vw] md:h-[15vh] rounded-lg p-4 hover:bg-zinc-600 transition cursor-pointer"
                      >
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex flex-col items-center">
                                <skill.icon className="text-white w-10 h-10" />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-white">
                              <p className="text-primary text-sm">
                                {skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="about me">
              <div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold ">About Me</h1>
                  <p className="text-gray-400">
                    I&apos;m a full-stack software developer with more than
                    three years of experience. I develop websites,web and mobile
                    applications.
                  </p>
                </div>
                <div className="mt-6">
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex space-x-2">
                      <dt className="text-gray-400">Name:</dt>
                      <dd>Anwar Gashaw</dd>
                    </div>
                    <div className="flex space-x-2">
                      <dt className="text-gray-400">Experience:</dt>
                      <dd>3+ Years</dd>
                    </div>
                    <div className="flex space-x-2">
                      <dt className="text-gray-400">Nationality:</dt>
                      <dd>Ethiopian</dd>
                    </div>
                    <div className="flex space-x-2">
                      <dt className="text-gray-400">Freelance:</dt>
                      <dd>Available</dd>
                    </div>
                    <div className="flex space-x-2">
                      <dt className="text-gray-400">Phone:</dt>
                      <dd>+251946214399</dd>
                    </div>
                    <div className="flex space-x-2">
                      <dt className="text-gray-400">Email:</dt>
                      <dd>
                        <a
                          href="mailto:anwarandargie@gmail.com"
                          className="text-sky-700 underline"
                        >
                          anathe2541@gmail.com
                        </a>
                      </dd>
                    </div>
                    <div className="flex space-x-2">
                      <dt className="text-gray-400">Languages:</dt>
                      <dd>Amharic, English, Arabic</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </section>
    </motion.div>
  );
}

export default ResumeHero;
