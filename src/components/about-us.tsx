import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Button } from "./ui/button";
import {
  Book,
  BookAIcon,
  HeadphonesIcon,
  UserCheck,
  UserCheck2Icon,
  WrenchIcon,
} from "lucide-react";

export default function AboutUs() {
  return (
    <section className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <AspectRatio ratio={16 / 9} className="overflow-hidden">
          <YouTubeEmbed
            style="border-radius: 12px"
            videoid="CtoVR5ZByoM"
            height={280}
            params="controls=0"
          />
        </AspectRatio>
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-semibold text-gray-800">
            Achieve your goals with PetrichEdu
          </h1>
          <p className="md:text-lg mt-1 text-gray-600">
            We are here to help you achieve your goals. It is a long established
            fact that a reader will be distracted by the readable content of a
            page to see the video and know about ourselves.
          </p>
          <Button
            variant="link"
            className="bg-transparent w-fit px-0 text-transparent bg-gradient-to-r from-[#009245] to-[#FCEE21] bg-clip-text"
          >
            View more
          </Button>
        </div>
      </div>

      <h1 className="text-2xl font-semibold text-center mt-10 text-gray-800">
        Why Choose PetrichEdu
      </h1>
      <p className=" text-center mt-1 text-gray-600">
        A choice that makes the difference
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12 mt-8">
        <div className="text-center">
          <div className="flex justify-center items-center size-12 bg-gradient-to-r from-[#009245] to-[#FCEE21] border border-gray-200 rounded-full mx-auto ">
            <UserCheck />
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-semibold text-gray-800 ">
              Highly Experienced
            </h3>
          </div>
        </div>

        <div className="text-center">
          <div className="flex justify-center items-center size-12 bg-gradient-to-r from-[#009245] to-[#FCEE21] border border-gray-200 rounded-full mx-auto ">
            <WrenchIcon />
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-semibold text-gray-800 ">
              Dedicated Support
            </h3>
          </div>
        </div>

        <div className="text-center">
          <div className="flex justify-center items-center size-12 bg-gradient-to-r from-[#009245] to-[#FCEE21] border border-gray-200 rounded-full mx-auto ">
            <BookAIcon />
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-semibold text-gray-800 ">
              Question, Quiz and Courses
            </h3>
          </div>
        </div>

        <div className="text-center">
          <div className="flex justify-center items-center size-12 bg-gradient-to-r from-[#009245] to-[#FCEE21] border border-gray-200 rounded-full mx-auto ">
            <HeadphonesIcon />
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-semibold text-gray-800 ">
              24/7 Support
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
