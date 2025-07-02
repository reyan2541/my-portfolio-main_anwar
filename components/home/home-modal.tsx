"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import Image from "next/image";
import my_image from "../../public/anwar-photo.jpg";

function HomeModal({
  handleOpen,
}: {
  open: boolean;
  handleOpen: (state: boolean) => void;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className=" bg-green-400 w-24 h-6 hover:bg-white hover:text-primary rounded-xl">
        Hire me
      </AlertDialogTrigger>
      <AlertDialogContent className=" bg-primary border border-green-400  rounded-2xl w-3/4 h-[50vh] lg:w-1/2 ">
        <AlertDialogTitle className="text-white text-2xl text-center  flex justify-center items-center mb-2  sm:mb-4">
          <Image
            src={my_image}
            alt="Photo of mine"
            className="w-24 h-24 rounded-full"
          />
        </AlertDialogTitle>
        <AlertDialogHeader>
          <AlertDialogDescription className="text-white text-center">
            Thank you for choosing me!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="grid grid-rows-2 gap-4">
          <AlertDialogAction className="flex space-x-4 justify-center">
            <a
              href="https://www.upwork.com/freelancers/~0172181230919ec94f?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-green-400 bg-primary border border-green-500  flex items-center justify-center w-24 h-12 text-wrap rounded-md hover:bg-white hover:text-primary sm:rounded-xl  sm:w-48 sm:h-12"
              aria-label="Hire me on UpWork"
            >
              Hire me on UpWork
            </a>
            <a
              href="https://www.linkedin.com/in/anwar-gashaw-yimam-518335260/"
              target="_blank"
              rel="noopener noreferrer"
              className=" flex items-center justify-center text-green-400 bg-primary border border-green-500 w-24 h-12 rounded-md hover:bg-white hover:text-primary text-wrap sm:rounded-xl  sm:w-48 sm:h-12"
              aria-label="Hire me on LinkedIn"
            >
              Hire me on LinkedIn
            </a>
          </AlertDialogAction>
          <AlertDialogCancel
            onClick={() => handleOpen(false)}
            className="flex justify-center items-center  mx-auto bg-primary  border-green-500  text-green-400 rounded-xl"
          >
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default HomeModal;
