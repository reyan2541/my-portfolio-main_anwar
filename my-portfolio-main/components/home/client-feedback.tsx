import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CustomerFeedbacks = () => {
  const testimonials = [
    {
      name: "Thomas Garben",
      feedback:
        "Anwar was a skilled developer to work with! He delivered high-quality work on time, communicated effectively, and showed great problem-solving skills. Highly recommended, and I’d love to work together again.",
      rating: 5,
      avatar: "/images/john-doe.jpg",
    },
    {
      name: "Jacob Wredistrome",
      feedback: "Very competent developer.",
      rating: 5,
      avatar: "/images/jane-smith.jpg",
    },
    {
      name: "Alice Johnson",
      feedback:
        "I loved the way Anwar completed my project. Everything was clearly communicated and solved.",
      rating: 5,
      avatar: "/images/alice-johnson.jpg",
    },
    {
      name: "Alice Johnson",
      feedback:
        "I loved the way Anwar completed my project. Everything was clearly communicated and solved.",
      rating: 5,
      avatar: "/images/alice-johnson.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 mt-32 border border-gray-950 rounded-2xl">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white tracking-tight">
          What My Clients Say
        </h2>
        <Carousel>
          <CarouselContent className="">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="px-4 md:basis-1/2 lg:basis-1/3  "
              >
                <Card className="bg-gray-800 border border-gray-700 shadow-lg rounded-xl p-6 flex flex-col h-full">
                  <div className="flex justify-center mb-4">
                    <FaQuoteLeft className="text-5xl text-green-400" />
                  </div>
                  <CardContent className="flex-grow">
                    <p className="text-gray-300 text-lg italic">
                      &quot;{testimonial.feedback}&quot;
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-3">
                      {testimonial.avatar && (
                        <Image
                          src={testimonial.avatar}
                          alt={`${testimonial.name}'s avatar`}
                          width={40}
                          height={40}
                          className="w-12 h-12 rounded-full object-cover border-2 border-green-400"
                        />
                      )}
                      <p className="font-medium text-white text-lg">
                        {testimonial.name}
                      </p>
                    </div>
                    <div className="flex items-center">
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-500"
                            }`}
                          />
                        ))}
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
