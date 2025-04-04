"use client";
import React from "react";

import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { findUsInfo } from "@/lib/data";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "@/lib/utils";
function Contact() {
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <section className="mt-12 flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
        {/* Left Section */}
        <div className="lg:w-2/3 space-y-6 bg-gray-900 p-6 rounded-lg">
          <div className="space-y-2">
            <h1 className="text-4xl text-green-500 font-bold">
              Let&apos;s work together
            </h1>
            <p className="text-gray-400">
              Let&apos;s build something real together. I&apos;m dedicated to
              addressing your needs and ensuring complete satisfaction with my
              services. Got any ideas,questions about my working hours? or
              something else?Send me a message here.
            </p>
            <span className="text-green-400">
              {" "}
              Thank you for choosing me !!!
            </span>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Your Message"
                        {...field}
                        rows={6}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" variant="secondary" className="">
                Submit
              </Button>
            </form>
          </Form>
        </div>

        {/* Right Section */}
        <div className="  flex-col items-center  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-1/2">
            {findUsInfo.map((item, index) => (
              <Card
                key={index}
                className="bg-gray-900 rounded-md transition-shadow shadow-md hover:shadow-xl "
              >
                <CardContent className="p-4 flex items-start space-x-4">
                  <item.icon className="w-6 h-6 text-white" />
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-stone-100">{item.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  );
}

export default Contact;
