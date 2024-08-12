import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import girl from "../../public/Girl with the phone.png";
import {
  BookDown,
  BookImage,
  ChartArea,
  MoveUpIcon,
  TrendingUp,
  UserPenIcon,
} from "lucide-react";

export default function Hero() {
  return (
    <section className=" bg-gradient-to-r from-[#009245] to-[#FCEE21] py-20 overflow-hidden">
      <div className="px-4 md:px-8 relative max-w-7xl mx-auto">
        {/* #009245 → #FCEE21 */}
        <div className="z-20 relative">
          <div className=" max-w-xl lg:max-w-2xl xl:max-w-5xl px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
            <h1 className="text-lg uppercase font-semibold">
              E-Learning Platform
            </h1>
            <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl">
              <span className="text-[#ff0] ">Petrich Edu:</span> Best platform
              for personal and online tutor
            </h1>
            <div className="max-w-4xl">
              <p className="mt-5 text-lg text-gray-800">
                It is a creative hub where imagination meets craftsmanship to
                transform ideas into tangible realities. We&apos;re nonprofit
                with the mission to provide a free, world-class education for
                anyone, anywhere
              </p>
            </div>
            <div className="mt-10 flex gap-2">
              <Button className="h-12 font-semibold px-8">Get Started</Button>
              <Button variant="outline" className="h-12 font-semibold px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="w-96 relative  h-auto md:absolute top-0  object-cover flex items-end place-content-end right-0 mx-auto">
          <Image
            src={girl}
            alt="smiling student"
            className="object-contain object-bottom"
          />
          <div className="absolute bottom-[2%] left-[2%] z-20 px-2 py-2 sm:px-6 sm:py-2.5  bg-white bg-opacity-50 rounded-[5px] shadow justify-center items-center inline-flex max-w-[240px] gap-2">
            <TrendingUp />
            <p className="text-neutral-900 text-base font-medium font-outfit leading-snug tracking-tight">
              Updated Skills{" "}
            </p>
          </div>
          <div className="absolute top-[2%] left-0 z-20 px-2 py-2 sm:px-6 sm:py-2.5  bg-white bg-opacity-50 rounded-[5px] shadow justify-center items-center inline-flex max-w-[240px] gap-2">
            <UserPenIcon />
            <p className="text-neutral-900 text-base font-medium font-outfit leading-snug tracking-tight">
              Best Tutors{" "}
            </p>
          </div>
          <div className="absolute top-1/2 -right-10 z-20 px-2 py-2 sm:px-6 sm:py-2.5  bg-white bg-opacity-50 rounded-[5px] shadow justify-center items-center inline-flex max-w-[240px] gap-2">
            <BookImage />
            <p className="text-neutral-900 text-base font-medium font-outfit leading-snug tracking-tight">
              Best Courses{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
