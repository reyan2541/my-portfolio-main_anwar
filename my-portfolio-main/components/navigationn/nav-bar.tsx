"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import HomeModal from "../home/home-modal";
import { FaBars, FaTimes } from "react-icons/fa";
function NavBar() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("home");
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { label: "Home", path: "/", id: "home" },
    { label: "Resume", path: "/projects", id: "projects" },
    { label: "Work", path: "/works", id: "works" },
    { label: "Contact", path: "/contact", id: "contact" },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      delay: 6,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className=" text-white"
    >
      <header className="flex justify-between md:space-x-72 items-center py-4">
        <h1
          className="text-2xl font-bold cursor-pointer flex items-baseline "
          onClick={() => router.push("/")}
        >
          Anwar <hr className="w-1 h-1 rounded-full bg-white" /> G
        </h1>

        <div className="md:hidden ">
          <Button
            className={` w-12 h-12 rounded-full flex items-center justify-center bg-white focus:outline-none appearance-none`}
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <FaTimes className="w-6 h-6 text-green-400" />
            ) : (
              <FaBars className="w-6 h-6 text-green-400" />
            )}
          </Button>
        </div>

        <motion.div
          className={`${
            menuOpen ? "flex mt-6" : "hidden"
          } md:flex flex-col md:flex-row md:space-x-6 items-center absolute md:relative top-16 left-0 md:top-auto md:left-auto bg-gray-900 md:bg-transparent w-full md:w-auto p-4 md:p-0 space-y-4 md:space-y-0 z-50`}
          variants={containerVariants}
        >
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className={`cursor-pointer ${
                activeTab === item.id
                  ? "border-b-2 border-green-500 text-green-500"
                  : ""
              }`}
              onClick={() => {
                router.push(item.path);
                setActiveTab(item.id);
                setMenuOpen(false);
              }}
            >
              {item.label}
            </motion.div>
          ))}

          <div className="">
            <HomeModal open={open} handleOpen={handleOpen} />
          </div>
        </motion.div>
      </header>
      <hr className="w-full h-0.5 bg-green-300 " />
    </motion.nav>
  );
}

export default NavBar;
